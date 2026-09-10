// core/session.js — window.MathSession
//
// Owns the one student session in progress: which module is loaded, where
// the student is in it, their score/answers, and (in live mode) the realtime
// connection carrying their progress to the teacher. This used to be a
// handful of module-scope variables and functions spread across core/app.js
// (state, freshState, startModule, record, next, prev, play, finish,
// sendProgress) — pulled together here because they are one engine, not
// several unrelated screens.
//
// Note: the TEACHER's live-lesson realtime connection is a separate concern
// (core/views-teacher.js manages its own MathLive handle) — a teacher is not
// "playing" a module, so it does not belong to this session.
(function () {
  if (!window.MathUtil || !window.MathPlatform || !window.MathScore) {
    throw new Error('core/session.js: chýba core/util.js, platform.js alebo scoring.js pred ním.');
  }

  let currentModule = null;
  let live = null; // MathLive handle while state.mode === 'live'; null otherwise
  let state = freshState();

  // --- taskList checkbox state -------------------------------------------
  //
  // Unlike the rest of session state, a taskList's ticked boxes are meant to
  // survive a page refresh and are purely for the student — never scored,
  // never sent to the teacher (see sendProgress() below, which only ever
  // reads state.answers/state.score). So they live in localStorage, keyed by
  // module + activity, rather than in the in-memory `state` that leave()
  // wipes on every navigation away from the module/play/join cluster.
  const CHECKS_KEY = 'mathStudentChecksV1';

  function checksStoreKey(activityId) { return `${state.moduleId}::${activityId}`; }

  function loadChecksStore() {
    try { return JSON.parse(localStorage.getItem(CHECKS_KEY) || '{}') || {}; }
    catch (_) { return {}; }
  }

  function getChecks(activityId) {
    const store = loadChecksStore();
    const arr = store[checksStoreKey(activityId)];
    return Array.isArray(arr) ? arr : [];
  }

  function setChecks(activityId, indices) {
    try {
      const store = loadChecksStore();
      store[checksStoreKey(activityId)] = indices;
      localStorage.setItem(CHECKS_KEY, JSON.stringify(store));
    } catch (_) { /* localStorage unavailable (private mode, quota) — checks just won't persist */ }
  }

  function freshState(extra) {
    return Object.assign({
      mode: 'solo', nick: '', session: '', moduleId: '',
      index: 0, score: 0, answers: [], reflection: {}, grading: null,
    }, extra || {});
  }

  function getState() { return state; }
  function getModule() { return currentModule; }

  // Loads (or returns the already-loaded) module without touching session
  // state — used by the module intro screen and the teacher's metodická
  // karta, both of which need the module's content before any session starts.
  async function load(id) {
    currentModule = await window.MathPlatform.loadModule(id);
    return currentModule;
  }

  async function start(id, extra) {
    // Defensive: if a previous live connection is still attached (e.g. the
    // student went back to the module intro screen without navigating away
    // from the module/play/join cluster, then started again), close it
    // before the fresh state below detaches from it silently.
    if (live) { live.close(); live = null; }
    await load(id);
    state = freshState(Object.assign({ moduleId: id }, extra || {}));
    return currentModule;
  }

  // Called by the join screen once its realtime channel is open, before
  // start() — the initial "joined" message is sent straight through the
  // MathLive handle, not through sendProgress(), because session state isn't
  // set up yet at that point (see core/views-student.js's join()).
  function attachLive(handle) { live = handle; }
  function getLive() { return live; }

  // Ends whatever session is running: closes the live channel (if any) and
  // drops back to a fresh, idle state. Called by the router whenever
  // navigation leaves the module/play/join screen cluster — the original
  // code never did this, which is why a student who navigated to the catalog
  // mid-lesson left their realtime socket open for the rest of the period.
  function leave() {
    if (live) { live.close(); live = null; }
    state = freshState();
    currentModule = null;
  }

  function setGrading(grading) { state.grading = grading; }

  function sendProgress(done, includeAnswers) {
    if (state.mode !== 'live' || !live) return Promise.resolve();
    const total = currentModule ? currentModule.student.activities.length : 0;
    const maxScore = window.MathScore.moduleMaxPoints(currentModule);
    const percent = maxScore ? Math.round(100 * state.score / maxScore) : 0;
    const payload = {
      nick: state.nick,
      moduleId: state.moduleId,
      stage: done ? 'done' : 'working',
      score: state.score,
      maxScore,
      percent,
      question: Math.min(state.index + 1, total),
      total,
      ts: Date.now(),
    };
    // The full answer breakdown only changes when an activity is scored or
    // the module finishes — sending it on every "next/prev step" click (as
    // the original code did) re-transmits an ever-growing array for no
    // reason. See docs/ARCHITECTURE.md's live-lesson protocol section.
    if (done || includeAnswers) {
      const skill = {};
      state.answers.forEach(a => {
        if (!a.skill) return;
        skill[a.skill] = skill[a.skill] || { ok: 0, n: 0 };
        skill[a.skill].n++;
        if (a.correct) skill[a.skill].ok++;
      });
      payload.skill = skill;
      payload.self = state.reflection;
      payload.answers = state.answers.map(a => ({
        id: a.id, skill: a.skill, correct: !!a.correct, attempts: a.attempts || 0, points: a.points || 0,
      }));
    }
    return live.send('progress', payload).catch(() => {});
  }

  function record(activity, outcome) {
    const points = window.MathScore.award(activity, outcome);
    const entry = {
      id: activity.id,
      skill: activity.skill || activity.phase || 'aktivita',
      correct: !!(outcome && outcome.correct),
      attempts: (outcome && outcome.attempts) || 0,
      points,
    };
    const oldIndex = state.answers.findIndex(a => a.id === activity.id);
    if (oldIndex >= 0) { state.score -= state.answers[oldIndex].points || 0; state.answers[oldIndex] = entry; }
    else state.answers.push(entry);
    state.score += entry.points;
    sendProgress(false, true);
  }

  function reflectionSummary(values) {
    const counts = { green: 0, yellow: 0, red: 0 };
    Object.values(values || {}).forEach(v => { if (counts[v] !== undefined) counts[v]++; });
    const total = counts.green + counts.yellow + counts.red;
    if (!total) return '';
    return `<div class="self-summary">
      <h2>Ako sa cítiš v téme?</h2>
      <div class="self-chips"><span>🟢 ${counts.green}</span><span>🟡 ${counts.yellow}</span><span>🔴 ${counts.red}</span></div>
      <p class="muted">Toto je tvoje vlastné zhodnotenie porozumenia. Porovnaj ho s výsledkom úloh – oboje je užitočná spätná väzba.</p>
    </div>`;
  }

  function play(app) {
    if (!currentModule) {
      location.hash = 'module/' + (state.moduleId || window.MathPlatform.defaultModuleId());
      return;
    }
    const acts = currentModule.student.activities;
    if (state.index >= acts.length) { finish(app); return; }

    const activity = acts[state.index];
    const renderer = window.ActivityRenderers[activity.type];
    if (!renderer) {
      app.innerHTML = `<div class="card"><h2>Neznámy typ aktivity</h2><code>${window.MathUtil.esc(activity.type)}</code></div>`;
      return;
    }
    const meta = window.MathPlatform.indexEntry(state.moduleId);
    renderer(activity, {
      app,
      index: state.index,
      total: acts.length,
      score: state.score,
      record,
      next: () => { state.index++; sendProgress(false, false); play(app); },
      prev: () => { if (state.index > 0) { state.index--; sendProgress(false, false); play(app); } },
      setReflection: v => { state.reflection = v; },
      finish: () => finish(app),
      getChecks,
      setChecks,
      topic: (meta && meta.topic) || currentModule.student.title,
      unit: (meta && meta.unit) || '',
      mode: state.mode,
      grading: state.grading,
    });
  }

  function finish(app) {
    const maxScore = window.MathScore.moduleMaxPoints(currentModule);
    const percent = maxScore ? Math.round(100 * state.score / maxScore) : 100;
    const feedback = window.MathScore.resultFeedback(percent);
    const skills = {};
    state.answers.forEach(a => {
      if (!a.skill) return;
      skills[a.skill] = skills[a.skill] || { n: 0, ok: 0, pts: 0 };
      skills[a.skill].n++;
      if (a.correct) skills[a.skill].ok++;
      skills[a.skill].pts += a.points || 0;
    });
    sendProgress(true, true);

    const meta = window.MathPlatform.indexEntry(state.moduleId);
    // Fallback for the "back to topics" link if, somehow, the module's own
    // registry entry can't be found — derived from the current catalog
    // instead of a hardcoded topic name, so it stays correct as content changes.
    const fallback = window.MathPlatform.sortedModules().find(m => m.status === 'ready') || window.MathPlatform.list()[0];
    const backYear = (meta && meta.year) || (fallback && fallback.year) || 1;
    const backUnit = (meta && meta.unit) || (fallback && fallback.unit) || '';

    const gradingOn = state.mode === 'live' && state.grading && state.grading.enabled;
    const gradeNote = gradingOn
      ? `<p class="muted small-note"><strong>Táto hodina sa dnes počíta do známky.</strong> Tvojich ${percent} % zodpovedá známke <strong>${window.MathScore.gradeForPercent(percent, state.grading) || '—'}</strong> podľa stupnice, ktorú vyhlásil učiteľ (${window.MathScore.scaleText(state.grading.thresholds)}).</p>`
      : `<p class="muted small-note"><strong>XP nie sú známka.</strong> Sú spätnou väzbou o tvojej práci v tomto module.</p>`;

    app.innerHTML = `<article class="card result-card">
      <div class="eyebrow">MISIA SPLNENÁ</div>
      <h1>Ako sa ti darilo?</h1>
      <div class="result-score"><strong>${state.score} XP</strong><span>z ${maxScore} XP</span></div>
      <div class="result-progress" role="progressbar" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100"><div style="width:${Math.min(100, percent)}%"></div></div>
      <p class="result-percent">Zvládol/a si približne <strong>${percent} %</strong> bodovanej práce v module.</p>
      <div class="result-message"><strong>${feedback.level}.</strong> ${feedback.text}</div>
      ${gradeNote}
      ${Object.keys(skills).length ? `<h2>Tvoja mapa práce</h2><div class="skill-summary">${Object.entries(skills).map(([k, v]) => `<div class="skill-row"><strong>${window.MathUtil.esc(k)}</strong><span>${v.ok}/${v.n}</span></div>`).join('')}</div>` : ''}
      ${reflectionSummary(state.reflection)}
      <div class="notice"><strong>Teraz mobil odlož.</strong> Skús jednou vetou pomenovať, čo je hlavná myšlienka dnešnej témy. Presný matematický zápis patrí do zošita a k spoločnej práci pri tabuli.</div>
      <button class="btn" data-go="catalog/unit/${backYear}/${window.MathPlatform.unitKey(backUnit)}">Späť k témam</button>
    </article>`;
  }

  window.MathSession = {
    getState, getModule, load, start, play, finish,
    attachLive, getLive, leave, setGrading, sendProgress,
  };
})();
