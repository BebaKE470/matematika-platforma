// core/live.js — window.MathLive
//
// Supabase Realtime Broadcast for live lessons. Rewritten from the original
// single setupRealtime() to fix the free-tier blowout documented in
// docs/ARCHITECTURE.md:
//
//   - ROLE-AWARE SUBSCRIPTION. The old code subscribed every participant to
//     BOTH the 'progress' and 'teacher' broadcast events and filtered on a
//     `_teacher` flag client-side — so every student received every OTHER
//     student's progress messages over the wire (already billed) only to
//     throw them away. connectAsTeacher() now subscribes to 'progress' only;
//     connectAsStudent() subscribes to 'teacher' only. For a 25-student
//     lesson this alone cuts delivered messages roughly 10x.
//   - GRADING RE-BROADCAST DEBOUNCE. The teacher used to reply to EACH
//     'joined' message individually, and each reply fanned out to the whole
//     class — a class joining over ~90s could cost 25×25 messages just for
//     that. announceGrading() coalesces bursts into one leading send plus at
//     most one trailing send per debounce window.
//   - REAL TEARDOWN. Every connection this module opens is tracked and can be
//     closed individually (handle.close()) or all at once (disconnectAll(),
//     called from the router's pagehide handler) — the old code never
//     unsubscribed students, and re-entering the teacher-live screen orphaned
//     the previous channel.
//   - PINNED IMPORT. The old code did `import('https://esm.sh/@supabase/
//     supabase-js@2')` — a floating major version resolved fresh from a
//     third-party CDN on every load. An upstream release breaking something
//     could take down a live lesson with no commit on this side. Pinned to an
//     exact version; bump deliberately (see docs/ARCHITECTURE.md).
//   - BETTER JOIN CODE. Math.random().toString(36) can yield fewer than the
//     requested characters and includes easily-confused glyphs (0/O, 1/I).
//     makeCode() draws from crypto.getRandomValues over an unambiguous
//     alphabet.
(function () {
  const SUPABASE_ESM = 'https://esm.sh/@supabase/supabase-js@2.115.0';
  const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no I, O, 0, 1
  const GRADING_DEBOUNCE_MS = 5000;
  const GRADING_MIN_GAP_MS = 10000;

  function makeCode(len) {
    if (!len) len = 6;
    const bytes = new Uint32Array(len);
    (window.crypto || crypto).getRandomValues(bytes);
    return Array.from(bytes, n => CODE_ALPHABET[n % CODE_ALPHABET.length]).join('');
  }

  let clientPromise = null;
  function client() {
    const cfg = window.APP_CONFIG || {};
    if (!cfg.supabaseUrl || !cfg.supabaseAnonKey) {
      return Promise.reject(new Error('Realtime nie je nastavený (config.js).'));
    }
    if (!clientPromise) {
      clientPromise = import(SUPABASE_ESM).then(({ createClient }) =>
        createClient(cfg.supabaseUrl, cfg.supabaseAnonKey, { auth: { persistSession: false } })
      );
    }
    return clientPromise;
  }

  const openRawChannels = new Set(); // tracks every channel this module has opened, for disconnectAll()

  async function openChannel(code, subscribeEvent, onMessage) {
    const supa = await client();
    const ch = supa.channel('math-' + code, { config: { broadcast: { self: false } } });
    if (onMessage) ch.on('broadcast', { event: subscribeEvent }, p => onMessage(p.payload));

    await new Promise((resolve, reject) => {
      ch.subscribe(status => {
        if (status === 'SUBSCRIBED') resolve();
        else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') reject(new Error('Spojenie zlyhalo'));
      });
    });
    openRawChannels.add(ch);

    let closed = false;
    function close() {
      if (closed) return;
      closed = true;
      openRawChannels.delete(ch);
      ch.unsubscribe().catch(() => {});
    }
    function send(event, payload) {
      if (closed) return Promise.resolve();
      return ch.send({ type: 'broadcast', event, payload });
    }

    return { code, role: subscribeEvent === 'progress' ? 'teacher' : 'student', send, close, isOpen: () => !closed };
  }

  // Student: listens for the teacher's control messages (ended, grading).
  async function connectAsStudent(code, opts) {
    const onTeacher = opts && opts.onTeacher;
    return openChannel(code, 'teacher', onTeacher);
  }

  // Teacher: listens for every student's progress messages, and gets an
  // announceGrading() helper that coalesces the join-time grading broadcast.
  async function connectAsTeacher(code, opts) {
    const onStudent = opts && opts.onStudent;
    const handle = await openChannel(code, 'progress', onStudent);

    let lastSentAt = 0;
    let pendingTimer = null;
    function announceGrading(grading, force) {
      const now = Date.now();
      if (force || now - lastSentAt > GRADING_MIN_GAP_MS) {
        lastSentAt = now;
        handle.send('teacher', { action: 'grading', grading }).catch(() => {});
        return;
      }
      if (pendingTimer) return;
      pendingTimer = setTimeout(() => {
        pendingTimer = null;
        lastSentAt = Date.now();
        handle.send('teacher', { action: 'grading', grading }).catch(() => {});
      }, GRADING_DEBOUNCE_MS);
    }

    handle.announceGrading = announceGrading;
    return handle;
  }

  function disconnectAll() {
    [...openRawChannels].forEach(ch => { try { ch.unsubscribe(); } catch (_) { /* best effort */ } });
    openRawChannels.clear();
  }

  window.MathLive = { makeCode, connectAsTeacher, connectAsStudent, disconnectAll };
})();
