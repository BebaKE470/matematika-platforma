// core/exam.js — window.MathExam
//
// Písomka s postupovými úlohami (viď docs/AUTHORING.md, sekcia „Písomka“).
// Dve časti:
//
//  1. ČISTÁ LOGIKA (bez DOM): parseNumber/equalNumber, gradeStep,
//     gradeSubmission, publicExam. Používa ju žiak (po zverejnení kľúča) aj
//     učiteľka (priebežné opravovanie), preto je tu na jednom mieste.
//
//  2. PREHRÁVAČ ŽIAKA: begin()/play()/onTeacher()/end(). Písomka nejde cez
//     core/session.js (žiadne XP, žiadna okamžitá spätná väzba, voľná
//     navigácia, na konci „Odovzdať“) — session.js ju len zavolá z play().
//
// Kľúč správnych odpovedí žiak NEMÁ: zadania mu pošle učiteľkin prehliadač bez
// `key` (publicExam), body počíta učiteľka z odpovedí, ktoré žiak odosiela
// správou 'progress'. Kľúč príde žiakovi až po zverejnení výsledkov
// (action: 'reveal'). Bez databázy: odpovede sa priebežne zálohujú do
// localStorage žiaka (kľúč mathExamStudentV1).
//
// Tvar odpovedí žiaka: answers[taskId][stepId] =
//   kind 'number' → reťazec ('-2/3'), alebo 'none' („nemá riešenie“)
//   kind 'set'    → pole reťazcov; ['∅'] = prázdna množina
(function () {
  if (!window.MathUtil) throw new Error('core/exam.js: chýba core/util.js pred ním.');
  const { esc, $, $$ } = window.MathUtil;

  const EMPTY_SET = '∅';
  const NONE = 'none';

  // --- Čísla ---------------------------------------------------------------

  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { const t = a % b; a = b; b = t; } return a || 1; }

  function reduce(n, d) {
    if (d < 0) { n = -n; d = -d; }
    const g = gcd(n, d);
    return { n: n / g, d: d / g };
  }

  // Prijíma celé číslo, desatinné číslo (čiarka aj bodka), zlomok a/b; znamienko
  // môže byť aj Unicode mínus. Vráti {n, d} v základnom tvare, alebo null.
  function parseNumber(raw) {
    if (raw == null) return null;
    const s = String(raw).trim().replace(/[−–—]/g, '-').replace(/\s+/g, '').replace(/,/g, '.');
    if (!s) return null;
    const sgn = t => (t === '-' ? -1 : 1);
    let m = s.match(/^([+-]?)(\d{1,9})\/([+-]?)(\d{1,9})$/);
    if (m) {
      const d = Number(m[4]);
      if (d === 0) return null;
      return reduce(sgn(m[1]) * sgn(m[3]) * Number(m[2]), d);
    }
    m = s.match(/^([+-]?)(\d{1,9})\.(\d{1,6})$/);
    if (m) return reduce(sgn(m[1]) * Number(m[2] + m[3]), Math.pow(10, m[3].length));
    m = s.match(/^([+-]?)(\d{1,9})$/);
    if (m) return reduce(sgn(m[1]) * Number(m[2]), 1);
    return null;
  }

  function equalNumber(a, b) {
    const x = parseNumber(a), y = parseNumber(b);
    return !!x && !!y && x.n === y.n && x.d === y.d;
  }

  // --- Kroky a bodovanie ------------------------------------------------------

  function nonBlank(list) { return (Array.isArray(list) ? list : []).filter(x => String(x == null ? '' : x).trim() !== ''); }

  function isEmptySet(ans) { return Array.isArray(ans) && ans.length === 1 && ans[0] === EMPTY_SET; }

  function isAnswered(step, ans) {
    if (step.kind === 'set') return isEmptySet(ans) || nonBlank(ans).length > 0;
    return typeof ans === 'string' && ans.trim() !== '';
  }

  function gradeNumber(keyVal, ans) {
    if (typeof ans !== 'string' || !ans.trim()) return false;
    if (keyVal === NONE) return ans === NONE;
    if (ans === NONE) return false;
    return equalNumber(ans, keyVal);
  }

  // Žiaci často napíšu viac prvkov do jedného políčka („1, 2, 3“, „1 2 3“, „1;2;3“, „{1,2}“).
  // Rozdelí ich na samostatné prvky. Jedna čiarka medzi číslicami bez medzery („1,5“) ostáva
  // desatinným číslom; „1,2,3“ alebo „1, 2“ sú zoznamy.
  function splitItems(raw) {
    const s = String(raw == null ? '' : raw).replace(/[{}()\[\]]/g, ' ').replace(/\s*\/\s*/g, '/');
    const out = [];
    s.split(/[;\s]+/).forEach(tok => {
      if (!tok) return;
      if (/^[+\-−–—]?\d+,\d+$/.test(tok)) { out.push(tok); return; }
      tok.split(',').forEach(p => { if (p) out.push(p); });
    });
    return out;
  }

  function setItems(ans) {
    const out = [];
    nonBlank(ans).forEach(x => splitItems(x).forEach(p => out.push(p)));
    return out;
  }

  function gradeSet(keyVal, ans) {
    const key = Array.isArray(keyVal) ? keyVal : [];
    if (isEmptySet(ans)) return key.length === 0;
    const items = setItems(ans);
    if (!items.length || !key.length) return false;
    const parsed = items.map(parseNumber);
    if (parsed.some(p => !p)) return false;
    const uniq = new Map(parsed.map(p => [p.n + '/' + p.d, p]));
    const keySet = new Set(key.map(k => { const p = parseNumber(k); return p ? p.n + '/' + p.d : null; }));
    if (uniq.size !== keySet.size) return false;
    for (const k of uniq.keys()) if (!keySet.has(k)) return false;
    return true;
  }

  // 'choice': odpoveď aj kľúč sú poradie možnosti (0, 1, 2 …) ako reťazec.
  function gradeChoice(keyVal, ans) {
    return typeof ans === 'string' && ans !== '' && ans === String(keyVal);
  }

  function gradeStep(step, keyVal, ans) {
    if (step.kind === 'choice') return gradeChoice(keyVal, ans);
    return step.kind === 'set' ? gradeSet(keyVal, ans) : gradeNumber(keyVal, ans);
  }

  // overrides: { taskId: bodyZaÚlohu } — ručná úprava učiteľky (nahrádza automatické body úlohy).
  // Bonusové úlohy sa nezapočítavajú do maxima; percentá sa orežú na 100.
  function gradeSubmission(exam, group, answers, overrides) {
    const g = exam && exam.groups && exam.groups[group];
    const key = exam && exam.key && exam.key[group];
    if (!g || !key) return null;
    const bonusIds = new Set(exam.bonusTasks || []);
    overrides = overrides || {};
    let total = 0, bonus = 0, max = 0;
    const tasks = g.tasks.map(t => {
      const ans = (answers && answers[t.id]) || {};
      const k = key[t.id] || {};
      let auto = 0, tmax = 0;
      const steps = t.steps.map(s => {
        const a = ans[s.id];
        const ok = gradeStep(s, k[s.id], a);
        tmax += s.points;
        if (ok) auto += s.points;
        return { id: s.id, label: s.label, kind: s.kind, suffix: s.suffix, ok, max: s.points, answered: isAnswered(s, a), answer: a, expected: k[s.id] };
      });
      const ov = overrides[t.id];
      const hasOv = ov !== undefined && ov !== null && ov !== '' && Number.isFinite(Number(ov));
      const points = hasOv ? Math.max(0, Math.min(tmax, Number(ov))) : auto;
      const isBonus = bonusIds.has(t.id);
      if (isBonus) bonus += points; else { total += points; max += tmax; }
      return { id: t.id, title: t.title, bonus: isBonus, steps, auto, points, max: tmax, overridden: hasOv };
    });
    const percent = max ? Math.min(100, Math.round(100 * (total + bonus) / max)) : 0;
    return { tasks, total, bonus, max, percent };
  }

  // Ponechá iba vybrané úlohy (učiteľka si ich volí pred spustením písomky). Zmení aj
  // kľúč (žiakom sa nesmie zverejniť kľúč k úlohám, ktoré nemali) a prečísluje názvy
  // („Úloha 1, 3, 5“ → „Úloha 1, 2, 3“). Prázdny výber = všetky úlohy.
  function filterExam(exam, taskIds) {
    if (!exam || !Array.isArray(taskIds) || !taskIds.length) return exam;
    const keep = new Set(taskIds);
    const out = Object.assign({}, exam, { groups: {} });
    Object.keys(exam.groups).forEach(g => {
      let n = 0;
      out.groups[g] = Object.assign({}, exam.groups[g], {
        tasks: exam.groups[g].tasks.filter(t => keep.has(t.id)).map(t => {
          n++;
          return Object.assign({}, t, { title: String(t.title).replace(/^Úloha \d+/, 'Úloha ' + n) });
        }),
      });
    });
    out.bonusTasks = (exam.bonusTasks || []).filter(id => keep.has(id));
    if (exam.key) {
      out.key = {};
      Object.keys(exam.key).forEach(g => {
        out.key[g] = {};
        keep.forEach(id => { if (exam.key[g] && exam.key[g][id]) out.key[g][id] = exam.key[g][id]; });
      });
    }
    return out;
  }

  // Zadania bez kľúča – toto sa posiela žiakom.
  function publicExam(exam) {
    return { id: exam.id, title: exam.title, minutes: exam.minutes, instructions: exam.instructions, groups: exam.groups, bonusTasks: exam.bonusTasks || [], reflection: exam.reflection || null };
  }

  // --- Zobrazenie hodnôt ---------------------------------------------------

  function fmtNum(v) { return String(v).replace(/-/g, '−'); }

  function numSort(a, b) {
    const x = parseNumber(a), y = parseNumber(b);
    return (x && y) ? (x.n / x.d) - (y.n / y.d) : 0;
  }

  // Čitateľný zápis odpovede/kľúča kroku (výstup je čistý text, treba ho esc()).
  // step.suffix (napr. 'π'): žiak zapisuje iba koeficient, v zobrazení sa pripojí prípona (5/4 → 5/4 π).
  function formatValue(step, v) {
    const suf = step.suffix ? ' ' + step.suffix : '';
    if (step.kind === 'set') {
      if (isEmptySet(v)) return EMPTY_SET;
      const items = setItems(v);
      if (!items.length) return '—';
      return '{' + items.slice().sort(numSort).map(x => fmtNum(x) + suf).join('; ') + '}';
    }
    if (step.kind === 'choice') {
      const opts = step.options || [];
      const i = (v === '' || v == null) ? -1 : Number(v);
      if (!Number.isInteger(i) || i < 0 || i >= opts.length) return '—';
      return opts.length > 4 ? (i + 1) + '. ' + opts[i] : opts[i];
    }
    if (v === NONE) return 'nemá riešenie';
    return (typeof v === 'string' && v.trim()) ? fmtNum(v.trim()) + suf : '—';
  }

  // To isté pre správnu odpoveď z kľúča (prázdne pole = ∅).
  function formatKey(step, v) {
    if (step.kind === 'set' && Array.isArray(v) && v.length === 0) return EMPTY_SET;
    return formatValue(step, v);
  }

  function fmtPts(n) { return String(Math.round(n * 100) / 100).replace('.', ','); }

  // Render výsledku kroku/úlohy (spoločné pre žiaka po zverejnení aj pre učiteľku).
  // `extra(task)` (voliteľné) vráti HTML vložené na koniec úlohy – učiteľka cez to
  // pridáva políčko na ručnú úpravu bodov.
  function resultTasksHtml(graded, extra) {
    return graded.tasks.map(t => `<details class="exam-result-task${t.points >= t.max ? ' full' : ''}">
      <summary><strong>${esc(t.title)}</strong><span>${fmtPts(t.points)} / ${fmtPts(t.max)} b${t.bonus ? ' (bonus)' : ''}${t.overridden ? ' · upravené učiteľkou' : ''}</span></summary>
      <ul class="exam-result-steps">${t.steps.map(s => `<li class="${s.ok ? 'ok' : 'bad'}">
        <span class="mark">${s.ok ? '✓' : '✗'}</span>
        <span class="lbl">${esc(s.label)}</span>
        <span class="ans">odpoveď: <b>${esc(formatValue(s, s.answer))}</b>${s.ok ? '' : ` · správne: <b>${esc(formatKey(s, s.expected))}</b>`}</span>
        <span class="pts">${s.ok ? fmtPts(s.max) : 0} / ${fmtPts(s.max)}</span>
      </li>`).join('')}</ul>
      ${extra ? extra(t) : ''}
    </details>`).join('');
  }

  // --- Učiteľka: načítanie písomky zo servera ----------------------------------

  async function fetchExam(id) {
    const token = window.MathAuth && window.MathAuth.getToken ? window.MathAuth.getToken() : '';
    let r;
    try {
      r = await fetch('/api/exam', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, id }),
      });
    } catch (_) { throw new Error('Server nie je dostupný. Skontroluj pripojenie.'); }
    const data = await r.json().catch(() => ({}));
    if (!r.ok || !data.ok) throw new Error(data.error || 'Písomku sa nepodarilo načítať.');
    return data.exam;
  }

  // --- Prehrávač žiaka ---------------------------------------------------------

  const STORE_KEY = 'mathExamStudentV1';
  const KEEP_MS = 14 * 24 * 60 * 60 * 1000;
  const SEND_DEBOUNCE_MS = 1500;

  let S = null; // prebiehajúca písomka tohto žiaka (jedna naraz)

  function storeKey(code, nick) { return String(code).toUpperCase() + '::' + String(nick).trim().toLowerCase().replace(/\s+/g, ' '); }

  function readStore() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY) || '{}') || {}; } catch (_) { return {}; }
  }

  function loadSaved(code, nick) {
    return readStore()[storeKey(code, nick)] || null;
  }

  function saveLocal() {
    if (!S) return;
    try {
      const all = readStore();
      const now = Date.now();
      Object.keys(all).forEach(k => { if (!all[k] || now - (all[k].at || 0) > KEEP_MS) delete all[k]; });
      all[storeKey(S.code, S.nick)] = {
        at: now, exam: S.exam, moduleId: S.moduleId, group: S.group, answers: S.answers,
        submitted: S.submitted, leaves: S.leaves, taskIdx: S.taskIdx, revealedKey: S.revealedKey, self: S.self, selfSent: S.selfSent,
      };
      localStorage.setItem(STORE_KEY, JSON.stringify(all));
    } catch (_) { /* localStorage nedostupné – písomka funguje, len bez zálohy */ }
  }

  function tasks() { return (S.group && S.exam.groups[S.group] && S.exam.groups[S.group].tasks) || []; }

  function sendNow() {
    if (!S || !S.live || !S.live.isOpen()) { if (S) S.sendOk = false; return Promise.resolve(); }
    const list = tasks();
    return S.live.send('progress', {
      nick: S.nick,
      moduleId: S.moduleId,
      stage: S.submitted ? 'done' : 'working',
      question: Math.min(S.taskIdx + 1, Math.max(list.length, 1)),
      total: list.length,
      ts: Date.now(),
      exam: { group: S.group, answers: S.answers, leaves: S.leaves, submitted: S.submitted, self: S.self },
    }).then(() => { if (S) S.sendOk = true; }).catch(() => { if (S) S.sendOk = false; });
  }

  function touch() {
    saveLocal();
    clearTimeout(S.sendTimer);
    S.sendTimer = setTimeout(sendNow, SEND_DEBOUNCE_MS);
  }

  function onVisibility() {
    if (!S || S.submitted) return;
    if (document.hidden) { S.leaves++; touch(); }
  }

  function onBeforeUnload(e) {
    if (S && !S.submitted && S.group) { e.preventDefault(); e.returnValue = ''; }
  }

  // opts: { exam (verejná), nick, code, moduleId, live (MathLive handle) }
  function begin(opts) {
    end();
    const saved = loadSaved(opts.code, opts.nick);
    const sameExam = saved && saved.exam && saved.exam.id === opts.exam.id;
    S = {
      exam: opts.exam, nick: opts.nick, code: opts.code, moduleId: opts.moduleId, live: opts.live,
      group: sameExam ? saved.group : null,
      answers: sameExam ? (saved.answers || {}) : {},
      submitted: sameExam ? !!saved.submitted : false,
      leaves: sameExam ? (saved.leaves || 0) : 0,
      taskIdx: sameExam ? (saved.taskIdx || 0) : 0,
      revealedKey: sameExam ? (saved.revealedKey || null) : null,
      self: sameExam ? (saved.self || {}) : {},
      selfSent: sameExam ? !!saved.selfSent : false,
      screen: 'task', confirming: false, sendOk: null, sendTimer: null, mounted: false, lastInput: null, app: null,
    };
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('beforeunload', onBeforeUnload);
    saveLocal();
    sendNow(); // po opätovnom pripojení hneď pošle uložené odpovede učiteľke
  }

  function end() {
    if (!S) return;
    clearTimeout(S.sendTimer);
    document.removeEventListener('visibilitychange', onVisibility);
    window.removeEventListener('beforeunload', onBeforeUnload);
    S = null;
  }

  function active() { return !!S; }

  function onTeacher(msg) {
    if (!S || !msg) return;
    if (msg.action === 'ended') { submit(); }
    else if (msg.action === 'reveal' && msg.key) { S.revealedKey = msg.key; submit(); }
    else if (msg.action === 'resend') { sendNow(); }
  }

  function submit() {
    if (!S) return;
    if (!S.submitted) {
      S.submitted = true;
      saveLocal();
      sendNow();
    } else {
      saveLocal();
    }
    S.screen = 'done';
    S.confirming = false;
    if (S.mounted) render();
  }

  function setAnswer(taskId, stepId, value) {
    if (!S.answers[taskId]) S.answers[taskId] = {};
    S.answers[taskId][stepId] = value;
    touch();
  }

  // --- Vykresľovanie ---------------------------------------------------------------

  function topBar() {
    return `<div class="module-topic-bar"><span>Písomka${S.group ? ' · skupina ' + esc(S.group) : ''}</span><strong>${esc(S.exam.title)}</strong></div>`;
  }

  function render() {
    if (!S || !S.app) return;
    S.mounted = true;
    if (S.submitted || S.screen === 'done') renderDone();
    else if (!S.group) renderIntro();
    else if (S.screen === 'review') renderReview();
    else renderTask();
  }

  function play(app) {
    if (!S) return;
    S.app = app;
    if (S.submitted) S.screen = 'done';
    else if (S.screen !== 'review') S.screen = 'task';
    render();
  }

  function renderIntro() {
    const e = S.exam;
    S.app.innerHTML = `<article class="card learning-card exam-card">
      ${topBar()}
      <div class="eyebrow">PÍSOMKA</div>
      <h1>${esc(e.title)}</h1>
      ${e.minutes ? `<p class="muted">Odporúčaný čas: ${esc(e.minutes)} min · pripojený/á ako <strong>${esc(S.nick)}</strong></p>` : ''}
      <ul class="exam-instructions">${(e.instructions || []).map(t => `<li>${esc(t)}</li>`).join('')}</ul>
      ${Object.keys(e.groups).length > 1
        ? `<div class="notice"><strong>Vyber si skupinu podľa pokynu učiteľky.</strong> Skupinu už nepôjde zmeniť.</div>
      <div class="row exam-groups">${Object.keys(e.groups).map(g => `<button class="btn exam-group" data-group="${esc(g)}">Skupina ${esc(g)}</button>`).join('')}</div>`
        : `<div class="row exam-groups">${Object.keys(e.groups).map(g => `<button class="btn exam-group" data-group="${esc(g)}">Začať</button>`).join('')}</div>`}
    </article>`;
    $$('.exam-group').forEach(b => {
      b.onclick = () => { S.group = b.dataset.group; S.taskIdx = 0; S.screen = 'task'; touch(); sendNow(); render(); };
    });
  }

  function suffixHtml(step) {
    return step.suffix ? `<span class="exam-suffix">${esc(step.suffix)}</span>` : '';
  }

  function stepHtml(task, step) {
    const ans = (S.answers[task.id] || {})[step.id];
    const head = `<label class="exam-label">${esc(step.label)} <span class="exam-pts">${fmtPts(step.points)}&nbsp;b</span></label>`;
    if (step.kind === 'set') {
      const empty = isEmptySet(ans);
      const list = empty ? [] : (Array.isArray(ans) && ans.length ? ans : ['']);
      const rows = list.map((v, i) => `<div class="exam-row">
          <input class="exam-in" type="text" inputmode="text" autocomplete="off" autocapitalize="off" spellcheck="false" data-step="${esc(step.id)}" data-i="${i}" value="${esc(v)}" placeholder="číslo">${suffixHtml(step)}
          ${list.length > 1 ? `<button class="ghost exam-rm" type="button" data-step="${esc(step.id)}" data-i="${i}" aria-label="Odstrániť riešenie">×</button>` : ''}
        </div>`).join('');
      return `<div class="exam-step" data-step="${esc(step.id)}">${head}
        <p class="muted small-note exam-set-hint">Každý prvok napíš do osobitného políčka. Ďalší prvok pridáš medzerou alebo tlačidlom „+ ďalšie riešenie“.</p>
        <div class="exam-set${empty ? ' is-empty' : ''}">
          ${empty ? '' : rows + `<button class="ghost exam-add" type="button" data-step="${esc(step.id)}">+ ďalšie riešenie</button>`}
          <label class="exam-none"><input type="checkbox" class="exam-empty-cb" data-step="${esc(step.id)}" ${empty ? 'checked' : ''}> ${EMPTY_SET} prázdna množina (žiadne riešenie)</label>
        </div></div>`;
    }
    if (step.kind === 'choice') {
      const opts = step.options || [];
      const cur = typeof ans === 'string' ? ans : '';
      if (opts.length <= 4) {
        return `<div class="exam-step" data-step="${esc(step.id)}">${head}
          <div class="exam-choices" role="radiogroup">${opts.map((o, i) => `<label class="exam-choice${cur === String(i) ? ' is-on' : ''}"><input type="radio" class="exam-choice-in" name="${esc(task.id + '-' + step.id)}" data-step="${esc(step.id)}" value="${i}" ${cur === String(i) ? 'checked' : ''}> <span>${esc(o)}</span></label>`).join('')}</div></div>`;
      }
      return `<div class="exam-step" data-step="${esc(step.id)}">${head}
        <select class="exam-select exam-choice-in" data-step="${esc(step.id)}">
          <option value=""${cur === '' ? ' selected' : ''}>– vyber –</option>
          ${opts.map((o, i) => `<option value="${i}"${cur === String(i) ? ' selected' : ''}>${esc((i + 1) + '. ' + o)}</option>`).join('')}
        </select></div>`;
    }
    const none = ans === NONE;
    return `<div class="exam-step" data-step="${esc(step.id)}">${head}
      <div class="exam-row">
        <input class="exam-in" type="text" inputmode="text" autocomplete="off" autocapitalize="off" spellcheck="false" data-step="${esc(step.id)}" value="${esc(none ? '' : (ans || ''))}" placeholder="napr. -2/3" ${none ? 'disabled' : ''}>${suffixHtml(step)}
        ${step.allowNone ? `<label class="exam-none"><input type="checkbox" class="exam-none-cb" data-step="${esc(step.id)}" ${none ? 'checked' : ''}> nemá riešenie</label>` : ''}
      </div></div>`;
  }

  function chipsHtml(list) {
    return `<div class="exam-chips">${list.map((t, i) => {
      const a = S.answers[t.id] || {};
      const filled = t.steps.filter(s => isAnswered(s, a[s.id])).length;
      const cls = (i === S.taskIdx ? ' current' : '') + (filled === t.steps.length ? ' done' : filled ? ' part' : '');
      return `<button type="button" class="exam-chip${cls}" data-task="${i}" aria-label="${esc(t.title)}">${i + 1}</button>`;
    }).join('')}</div>`;
  }

  function insertAtCursor(input, ch) {
    const s = input.selectionStart == null ? input.value.length : input.selectionStart;
    const e = input.selectionEnd == null ? s : input.selectionEnd;
    input.value = input.value.slice(0, s) + ch + input.value.slice(e);
    input.focus();
    try { input.setSelectionRange(s + ch.length, s + ch.length); } catch (_) { /* typ inputu bez selection */ }
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function renderTask() {
    const list = tasks();
    if (S.taskIdx >= list.length) S.taskIdx = list.length - 1;
    if (S.taskIdx < 0) S.taskIdx = 0;
    const task = list[S.taskIdx];
    const last = S.taskIdx === list.length - 1;
    const taskMax = task.steps.reduce((n, s) => n + s.points, 0);
    S.app.innerHTML = `<article class="card learning-card exam-card">
      ${topBar()}
      <div class="progress"><div style="width:${Math.round(100 * (S.taskIdx + 1) / list.length)}%"></div></div>
      ${chipsHtml(list)}
      <h1>${esc(task.title)} <small class="exam-pts">${fmtPts(taskMax)}&nbsp;b</small></h1>
      <p class="exam-question">${esc(task.question)}</p>
      ${task.note ? `<p class="muted small-note">${esc(task.note)}</p>` : ''}
      ${task.onlineNote ? `<p class="muted small-note">${esc(task.onlineNote)}</p>` : ''}
      ${task.steps.every(s => s.kind === 'choice') ? '' : `<div class="exam-keypad" aria-label="Pomocné znaky"><span class="muted">Vložiť:</span>
        <button type="button" class="ghost exam-key" data-ch="-">−</button>
        <button type="button" class="ghost exam-key" data-ch="/">/</button>
        <button type="button" class="ghost exam-key" data-ch=",">,</button>
      </div>`}
      <div class="exam-steps">${task.steps.map(s => stepHtml(task, s)).join('')}</div>
      <div class="row exam-nav">
        <button type="button" class="ghost" id="examPrev" ${S.taskIdx === 0 ? 'disabled' : ''}>← Predošlá</button>
        ${last
          ? '<button type="button" class="btn" id="examReview">Prehľad a odovzdanie</button>'
          : '<button type="button" class="btn" id="examNext">Ďalšia úloha →</button>'}
      </div>
      <p class="muted small-note">Odpovede sa ukladajú priebežne.</p>
    </article>`;
    wireTask(task);
  }

  function wireTask(task) {
    const root = S.app.querySelector('.exam-card');
    const stepOf = id => task.steps.find(s => s.id === id);
    const goTask = i => { S.taskIdx = i; touch(); renderTask(); window.scrollTo(0, 0); };
    const keepScroll = fn => { const y = window.scrollY; fn(); window.scrollTo(0, y); };

    root.addEventListener('focusin', e => { if (e.target.classList && e.target.classList.contains('exam-in')) S.lastInput = e.target; });

    root.addEventListener('input', e => {
      const el = e.target;
      if (!el.classList.contains('exam-in')) return;
      const step = stepOf(el.dataset.step);
      if (!step) return;
      if (step.kind === 'set') {
        const vals = $$(`.exam-in[data-step="${CSS.escape(step.id)}"]`, root).map(x => x.value);
        // Medzera alebo bodkočiarka = koniec prvku: zvyšok ide do nového políčka.
        if (/[;\s]/.test(el.value)) {
          const i = Number(el.dataset.i);
          const raw = el.value.replace(/\s*\/\s*/g, '/');
          const parts = raw.split(/[;\s]+/);
          const tail = parts[parts.length - 1] === '' ? [''] : [];
          const items = parts.filter(Boolean).concat(tail);
          if (items.length) {
            const next = vals.slice(0, i).concat(items, vals.slice(i + 1));
            setAnswer(task.id, step.id, next);
            keepScroll(renderTask);
            const ins = $$(`.exam-in[data-step="${CSS.escape(step.id)}"]`, S.app.querySelector('.exam-card'));
            const f = ins[i + items.length - 1];
            if (f) f.focus();
            return;
          }
        }
        setAnswer(task.id, step.id, vals);
      } else {
        setAnswer(task.id, step.id, el.value);
      }
    });

    root.addEventListener('change', e => {
      const el = e.target;
      if (el.classList.contains('exam-choice-in')) {
        setAnswer(task.id, el.dataset.step, el.value);
        if (el.type === 'radio') $$(`.exam-choice-in[data-step="${CSS.escape(el.dataset.step)}"]`, root).forEach(r => r.closest('.exam-choice').classList.toggle('is-on', r.checked));
      } else if (el.classList.contains('exam-none-cb')) {
        setAnswer(task.id, el.dataset.step, el.checked ? NONE : '');
        keepScroll(renderTask);
      } else if (el.classList.contains('exam-empty-cb')) {
        setAnswer(task.id, el.dataset.step, el.checked ? [EMPTY_SET] : ['']);
        keepScroll(renderTask);
      }
    });

    root.addEventListener('click', e => {
      const el = e.target.closest('button');
      if (!el) return;
      if (el.classList.contains('exam-chip')) { goTask(Number(el.dataset.task)); return; }
      if (el.classList.contains('exam-add')) {
        const cur = (S.answers[task.id] || {})[el.dataset.step];
        const arr = Array.isArray(cur) && !isEmptySet(cur) ? cur.slice() : [''];
        arr.push('');
        setAnswer(task.id, el.dataset.step, arr);
        keepScroll(renderTask);
        const ins = $$(`.exam-in[data-step="${CSS.escape(el.dataset.step)}"]`, root);
        if (ins.length) ins[ins.length - 1].focus();
        return;
      }
      if (el.classList.contains('exam-rm')) {
        const cur = ((S.answers[task.id] || {})[el.dataset.step] || []).slice();
        cur.splice(Number(el.dataset.i), 1);
        setAnswer(task.id, el.dataset.step, cur.length ? cur : ['']);
        keepScroll(renderTask);
        return;
      }
      if (el.classList.contains('exam-key')) {
        const target = S.lastInput && root.contains(S.lastInput) && !S.lastInput.disabled ? S.lastInput : root.querySelector('.exam-in:not(:disabled)');
        if (target) insertAtCursor(target, el.dataset.ch);
        return;
      }
      if (el.id === 'examPrev') goTask(S.taskIdx - 1);
      else if (el.id === 'examNext') goTask(S.taskIdx + 1);
      else if (el.id === 'examReview') { S.screen = 'review'; S.confirming = false; renderReview(); window.scrollTo(0, 0); }
    });

    // Pomocné tlačidlá nesmú vziať políčku focus (inak by sa zavrela klávesnica).
    root.querySelectorAll('.exam-key').forEach(b => b.addEventListener('pointerdown', ev => ev.preventDefault()));
  }

  function renderReview() {
    const list = tasks();
    let missing = 0;
    const rows = list.map((t, i) => {
      const a = S.answers[t.id] || {};
      const filled = t.steps.filter(s => isAnswered(s, a[s.id])).length;
      missing += t.steps.length - filled;
      const full = filled === t.steps.length;
      return `<button type="button" class="exam-review-row${full ? ' ok' : ' warn'}" data-task="${i}">
        <strong>${esc(t.title)}</strong><span>${filled} / ${t.steps.length} krokov vyplnených${full ? ' ✓' : ''}</span>
      </button>`;
    }).join('');
    S.app.innerHTML = `<article class="card learning-card exam-card">
      ${topBar()}
      <div class="eyebrow">PREHĽAD PRED ODOVZDANÍM</div>
      <h1>Skontroluj si písomku</h1>
      <div class="exam-review">${rows}</div>
      ${missing ? `<div class="notice">Niektoré kroky sú prázdne (${missing}). Prázdny krok sa hodnotí 0 bodov, kliknutím na úlohu sa k nej vrátiš.</div>` : '<div class="notice good">Všetky kroky sú vyplnené.</div>'}
      ${S.confirming
        ? `<div class="feedback bad"><strong>Naozaj odovzdať?</strong> Po odovzdaní už odpovede nepôjde zmeniť.
            <div class="row"><button type="button" class="btn" id="examConfirm">Áno, odovzdať</button><button type="button" class="ghost" id="examCancel">Späť</button></div></div>`
        : `<div class="row"><button type="button" class="ghost" id="examBack">← Späť k úlohám</button><button type="button" class="btn" id="examSubmit">Odovzdať písomku</button></div>`}
    </article>`;
    const root = S.app.querySelector('.exam-card');
    root.addEventListener('click', e => {
      const el = e.target.closest('button');
      if (!el) return;
      if (el.classList.contains('exam-review-row')) { S.taskIdx = Number(el.dataset.task); S.screen = 'task'; touch(); renderTask(); window.scrollTo(0, 0); }
      else if (el.id === 'examBack') { S.screen = 'task'; renderTask(); }
      else if (el.id === 'examSubmit') { S.confirming = true; renderReview(); }
      else if (el.id === 'examCancel') { S.confirming = false; renderReview(); }
      else if (el.id === 'examConfirm') submit();
    });
  }

  // Nepovinná sebareflexia po odovzdaní (exam.reflection); informácia pre učiteľku, nie známka.
  const REFLECTION_LEVELS = [['green', 'Rozumiem a viem vysvetliť'], ['yellow', 'Asi rozumiem, potrebujem príklad'], ['red', 'Zatiaľ v tom nemám jasno']];
  const LEVEL_ICON = { green: '🟢', yellow: '🟡', red: '🔴' };

  function reflectionHtml() {
    const r = S.exam.reflection;
    if (!r || !Array.isArray(r.skills) || !r.skills.length) return '';
    return `<section class="exam-reflection">
      <h2>Sebareflexia</h2>
      <p class="muted">${esc(r.prompt || 'Ako ti išli jednotlivé časti? Nie je to známka.')} Je nepovinná.</p>
      <div class="reflection-list">${r.skills.map(s => `
        <div class="reflection-row">
          <strong>${esc(s)}</strong>
          <div class="reflection-buttons">${REFLECTION_LEVELS.map(([v, l]) => `<button type="button" data-s="${esc(s)}" data-v="${v}" class="${S.self[s] === v ? 'selected' : ''}">${LEVEL_ICON[v]} ${esc(l)}</button>`).join('')}</div>
        </div>`).join('')}</div>
      <div class="row">
        <button type="button" class="btn" id="examSelfSend" ${Object.keys(S.self).length ? '' : 'disabled'}>Odoslať sebareflexiu</button>
        <span class="muted" id="examSelfState">${selfStateText()}</span>
      </div>
    </section>`;
  }

  function selfStateText() {
    if (S.selfSent) return 'Odoslané učiteľke ✓';
    return Object.keys(S.self).length ? 'Zatiaľ neodoslané. Stlač „Odoslať sebareflexiu“.' : 'Vyber aspoň jednu možnosť.';
  }

  function renderDone() {
    let result = '';
    if (S.revealedKey && S.group) {
      const graded = gradeSubmission(Object.assign({}, S.exam, { key: S.revealedKey }), S.group, S.answers);
      if (graded) {
        result = `<div class="result-score"><strong>${fmtPts(graded.total + graded.bonus)} b</strong><span>z ${fmtPts(graded.max)} b${graded.bonus ? ` (z toho bonus ${fmtPts(graded.bonus)} b)` : ''}</span></div>
          <p class="result-percent"><strong>${graded.percent} %</strong></p>
          <div class="exam-results">${resultTasksHtml(graded)}</div>
          <div class="notice"><strong>Body sú predbežné.</strong> Učiteľka ich môže upraviť (napr. uznať iný správny postup). Známku určuje učiteľka.</div>`;
      }
    }
    S.app.innerHTML = `<article class="card result-card exam-card">
      ${topBar()}
      <div class="eyebrow">PÍSOMKA ODOVZDANÁ</div>
      <h1>${S.revealedKey ? 'Výsledky písomky' : 'Ďakujeme, písomka je odovzdaná'}</h1>
      ${S.revealedKey ? '' : '<p>Tvoje odpovede dostala učiteľka. Výsledky uvidíš, keď ich zverejní. Mobil môžeš odložiť.</p>'}
      ${result}
      ${reflectionHtml()}
      <div class="row">
        <button type="button" class="ghost" id="examResend">Odoslať odpovede učiteľke znova</button>
        <span class="muted" id="examSendState">${S.sendOk === true ? 'Odoslané ✓' : S.sendOk === false ? 'Odoslanie sa nepodarilo, skús znova.' : ''}</span>
      </div>
    </article>`;
    $$('.exam-reflection [data-s]').forEach(btn => {
      btn.onclick = () => {
        S.self[btn.dataset.s] = btn.dataset.v;
        S.selfSent = false;
        $$('.exam-reflection [data-s]').filter(x => x.dataset.s === btn.dataset.s).forEach(x => x.classList.toggle('selected', x === btn));
        $('#examSelfSend').disabled = false;
        $('#examSelfState').textContent = selfStateText();
        saveLocal();
      };
    });
    if ($('#examSelfSend')) $('#examSelfSend').onclick = async () => {
      $('#examSelfSend').disabled = true;
      $('#examSelfState').textContent = 'Odosielam…';
      clearTimeout(S.sendTimer);
      await sendNow();
      if (!S || !$('#examSelfState')) return;
      S.selfSent = !!S.sendOk;
      saveLocal();
      $('#examSelfState').textContent = S.selfSent ? 'Odoslané učiteľke ✓' : 'Odoslanie sa nepodarilo (spojenie s učiteľkou je prerušené). Skús to znova.';
      $('#examSelfSend').disabled = S.selfSent;
    };
    $('#examResend').onclick = async () => {
      $('#examSendState').textContent = 'Odosielam…';
      await sendNow();
      if ($('#examSendState')) $('#examSendState').textContent = S && S.sendOk ? 'Odoslané ✓' : 'Odoslanie sa nepodarilo, skús znova.';
    };
  }

  window.MathExam = {
    // logika
    parseNumber, equalNumber, gradeStep, gradeSubmission, publicExam, filterExam, isAnswered,
    formatValue, formatKey, fmtPts, resultTasksHtml, fetchExam, EMPTY_SET, NONE,
    // žiak
    loadSaved, begin, play, end, active, onTeacher,
  };
})();
