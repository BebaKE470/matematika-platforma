// core/app.js — window.MathApp
//
// The SPA router: a route table (not the old if/else chain), a render
// -generation guard so a slow network response can't paint a stale screen
// over a newer one, and a per-route teardown hook (used by the teacher-live
// screen to close its realtime channel, and by pagehide as a last resort for
// everything). Loaded last — it calls render() on its final line, by which
// point every other core/*.js has attached its namespace to `window`.
(function () {
  if (!window.MathPlatform || !window.MathAuth || !window.MathLive || !window.MathSession ||
      !window.MathViews || !window.MathViews.student || !window.MathViews.teacher) {
    throw new Error('core/app.js: chýba niektorý z core/*.js pred ním.');
  }

  const app = document.querySelector('#app');
  const S = window.MathViews.student;
  const T = window.MathViews.teacher;

  // route.keepsSession: navigating here must NOT end a running student
  // session — the module intro screen, the activity player itself, and the
  // live-lesson join form all belong to the same session as each other.
  // route.teacher: gated by core/auth.js; see the login-vs-redirect logic
  // in render() below for exactly how that gate behaves.
  const ROUTES = [
    { name: 'home', test: p => !p[0] || p[0] === 'home', view: () => S.home() },
    { name: 'catalog', test: p => p[0] === 'catalog' && !p[1], view: () => S.catalog() },
    { name: 'catalogYear', test: p => p[0] === 'catalog' && p[1] === 'year', view: p => S.catalogYear(p[2]) },
    { name: 'catalogUnit', test: p => p[0] === 'catalog' && p[1] === 'unit', view: p => S.catalogUnit(p[2], p.slice(3).join('/')) },
    { name: 'module', test: p => p[0] === 'module', keepsSession: true, view: p => S.moduleStart(p[1]) },
    { name: 'play', test: p => p[0] === 'play', keepsSession: true, view: () => window.MathSession.play(app) },
    { name: 'join', test: p => p[0] === 'join', keepsSession: true, view: p => S.join(p[1], p[2]) },
    { name: 'method', test: p => p[0] === 'method', teacher: true, view: p => T.method(p[1]) },
    { name: 'teacher', test: p => p[0] === 'teacher', teacher: true, view: () => T.teacher() },
    { name: 'teacherYear', test: p => p[0] === 'teacher-year', teacher: true, view: p => T.teacherYear(p[1]) },
    { name: 'teacherUnit', test: p => p[0] === 'teacher-unit', teacher: true, view: p => T.teacherUnit(p[1], p.slice(2).join('/')) },
    { name: 'teacherLive', test: p => p[0] === 'teacher-live', teacher: true, view: p => T.teacherLive(p[1]) },
  ];

  function findRoute(parts) {
    return ROUTES.find(r => r.test(parts)) || ROUTES[0];
  }

  let generation = 0;
  let teardown = null; // cleanup for whatever the previous route registered

  async function render() {
    const gen = ++generation;
    const stillCurrent = () => gen === generation;

    if (teardown) {
      try { teardown(); } catch (e) { console.error('Chyba pri opúšťaní obrazovky:', e); }
      teardown = null;
    }

    const parts = (location.hash.slice(1) || 'home').split('/');
    const route = findRoute(parts);

    if (!route.keepsSession) window.MathSession.leave();

    if (route.teacher) {
      const ok = await window.MathAuth.unlocked();
      if (!stillCurrent()) return;
      if (!ok) {
        if (route.name === 'teacher') T.login(render);
        else go('teacher');
        return;
      }
    }
    if (!stillCurrent()) return;

    try {
      const cleanup = await route.view(parts);
      if (!stillCurrent()) { if (typeof cleanup === 'function') cleanup(); return; }
      if (typeof cleanup === 'function') teardown = cleanup;
    } catch (e) {
      if (stillCurrent()) S.showError(e);
    }
  }

  function go(hash) { location.hash = hash; }

  window.addEventListener('hashchange', render);
  window.addEventListener('pagehide', () => {
    if (teardown) { try { teardown(); } catch (_) { /* best effort */ } teardown = null; }
    window.MathLive.disconnectAll();
  });
  document.addEventListener('click', e => {
    const g = e.target.closest('[data-go]');
    if (g) go(g.dataset.go);
  });

  window.MathApp = { go, render };
  render();
})();
