// core/views-teacher.js — window.MathViews.teacher
//
// The teacher-facing screens: login, the metodická karta catalog (year →
// unit → topic → method card), and the live lesson (QR/code, grading
// settings, live diagnostics, CSV export). Authentication gating itself
// happens centrally in the router (core/app.js), which calls login() only
// when the 'teacher' route is hit while unauthenticated and redirects to it
// otherwise — these view functions assume they're already authorized.
//
// The teacher's live-lesson realtime connection is owned entirely by this
// file (the `handle` local variable inside teacherLive()) — it is NOT the
// same connection as a student's own session (core/session.js's `live`).
// See core/live.js's file comment for why that used to be one shared
// variable and why that was a design smell.
(function () {
  if (!window.MathUtil || !window.MathPlatform || !window.MathUI || !window.MathAuth || !window.MathLive || !window.MathScore || !window.MathExam || !window.MathViews || !window.MathViews.student) {
    throw new Error('core/views-teacher.js: chýba niektorý z core/*.js pred ním.');
  }
  const { esc, $, $$ } = window.MathUtil;
  const MathPlatform = window.MathPlatform;
  const MathUI = window.MathUI;
  const MathAuth = window.MathAuth;
  const MathLive = window.MathLive;
  const MathScore = window.MathScore;
  const MathExam = window.MathExam;

  const app = document.querySelector('#app');

  function login(onSuccess) {
    app.innerHTML = `
      <div class="card teacher-login">
        <div class="eyebrow">UČITEĽSKÁ ČASŤ</div>
        <h1>Prihlásenie učiteľa</h1>
        <p class="muted">Metodické karty a živá diagnostika sú oddelené od žiackeho katalógu.</p>
        <div class="field"><label>Heslo</label><input id="teacherPassword" type="password" autocomplete="current-password" placeholder="Zadaj heslo"></div>
        <div id="teacherLoginInfo"></div>
        <button class="btn" id="teacherLoginBtn">Prihlásiť sa</button>
        <p class="muted small-note">Heslo overuje server, appka si ho nikdy neukladá ani neposiela nikam inam.</p>
      </div>
    `;
    const submit = async () => {
      const pwd = $('#teacherPassword').value;
      if (!pwd) return;
      $('#teacherLoginBtn').disabled = true;
      $('#teacherLoginInfo').innerHTML = '<div class="notice">Overujem…</div>';
      const r = await MathAuth.login(pwd);
      $('#teacherLoginBtn').disabled = false;
      if (r.ok && r.token) {
        onSuccess();
      } else {
        const msg = r.status === 429 ? (r.error || 'Príliš veľa pokusov, skús to o chvíľu.') : (r.error || 'Nesprávne heslo.');
        $('#teacherLoginInfo').innerHTML = `<div class="feedback bad"><strong>${esc(msg)}</strong></div>`;
      }
    };
    $('#teacherLoginBtn').onclick = submit;
    $('#teacherPassword').addEventListener('keydown', e => { if (e.key === 'Enter') submit(); });
  }

  function teacher() {
    app.innerHTML = `
      ${MathUI.breadcrumbs([{ label: 'Učiteľská časť' }])}
      <h1>Vyber ročník</h1>
      <p class="muted">Metodické karty sú usporiadané rovnakým spôsobom ako učivo: ročník → tematický celok → téma.</p>
      ${MathUI.yearGrid('teacher-year')}
      <div class="card spaced">
        <h2>Pracovné listy</h2>
        <p>Poskladaj teóriu a úlohy z viacerých tém do jedného listu na tlač alebo PDF — aj s ďalšími úlohami a kľúčom riešení.</p>
        <button class="btn" data-go="worksheets">Otvoriť pracovné listy</button>
      </div>
      <div class="card spaced">
        <h2>Živá hodina</h2>
        <p>Živú hodinu spustíš pri konkrétnej hotovej téme v učiteľskom katalógu.</p>
      </div>
    `;
  }

  function teacherYear(year) {
    year = Number(year);
    app.innerHTML = `
      ${MathUI.breadcrumbs([{ label: 'Učiteľ', go: 'teacher' }, { label: `${year}. ročník` }])}
      <h1>${year}. ročník</h1>
      <p class="muted">Vyber tematický celok.</p>
      ${MathUI.unitList(year, 'teacher-unit')}
    `;
  }

  function teacherUnit(year, key) {
    year = Number(year);
    const unit = MathPlatform.unitFromKey(key);
    const mods = MathPlatform.modulesForUnit(year, unit);
    if (!mods.length) { teacherYear(year); return; }
    app.innerHTML = `
      ${MathUI.breadcrumbs([{ label: 'Učiteľ', go: 'teacher' }, { label: `${year}. ročník`, go: `teacher-year/${year}` }, { label: unit }])}
      ${MathUI.unitHeading(`UČITEĽSKÝ KATALÓG · ${year}. ROČNÍK`, unit, `${MathPlatform.readyCount(mods)} hotové`)}
      <div class="topic-list">${mods.map(m => MathUI.topicRow(m, { teacherMode: true })).join('')}</div>
    `;
  }

  async function method(id) {
    const m = MathPlatform.indexEntry(id);
    if (!m) { window.MathViews.student.home(); return; }
    if (!MathPlatform.openable(m)) {
      app.innerHTML = `<div class="card"><h2>${esc(m.topic)}</h2><p>Metodická karta bude doplnená pri tvorbe samostatného obsahového modulu podľa tematického plánu.</p><button class="btn" data-go="teacher">Späť</button></div>`;
      return;
    }
    try {
      const mod = await MathPlatform.loadModule(id);
      const p = mod.teacher;
      app.innerHTML = `
        ${MathUI.backRow(`teacher-unit/${m.year}/${MathPlatform.unitKey(m.unit)}`, m.unit)}
        <article class="card method">
          <div class="eyebrow">METODICKÁ KARTA UČITEĽA</div>
          <h1>${esc(m.topic)}</h1>
          <div>${(m.skills || []).map(s => `<span class="tag">${esc(s)}</span>`).join('')}</div>
          <dl>
            <dt>Zaradenie v tematickom pláne</dt><dd>${esc(p.placement)}</dd>
            <dt>Predpokladané vedomosti</dt><dd><ul>${p.prerequisites.map(li => `<li>${esc(li)}</li>`).join('')}</ul></dd>
            <dt>Ciele hodiny</dt><dd><ul>${p.goals.map(li => `<li>${esc(li)}</li>`).join('')}</ul></dd>
            <dt>Obsahový štandard / obsah podľa plánu</dt><dd><ul>${p.planContent.map(li => `<li>${esc(li)}</li>`).join('')}</ul></dd>
            <dt>Výkonový štandard podľa plánu</dt><dd><ul>${p.planPerformance.map(li => `<li>${esc(li)}</li>`).join('')}</ul></dd>
            <dt>Rozvíjané kompetencie</dt><dd><ul>${p.competencies.map(li => `<li>${esc(li)}</li>`).join('')}</ul></dd>
            <dt>Obohatenie podľa návrhu nového maturitného štandardu</dt><dd><ul>${p.enrichment.map(li => `<li>${esc(li)}</li>`).join('')}</ul></dd>
            <dt>Odporúčaný priebeh</dt><dd><ol>${p.flow.map(li => `<li>${esc(li)}</li>`).join('')}</ol></dd>
            <dt>Čo modul diagnostikuje</dt><dd><ul>${p.diagnostics.map(li => `<li>${esc(li)}</li>`).join('')}</ul></dd>
            <dt>Možno použiť iba časť</dt><dd><ul>${p.partialUse.map(li => `<li>${esc(li)}</li>`).join('')}</ul></dd>
          </dl>
          <div class="notice"><strong>Pravidlo platformy:</strong> aktuálny tematický plán určuje obsah a poradie. Návrh maturitného štandardu obohacuje spôsob práce iba tam, kde to prirodzene pasuje.</div>
        </article>
      `;
    } catch (e) { window.MathViews.student.showError(e); }
  }

  // --- Live lesson -----------------------------------------------------

  let qrLibPromise = null;
  function ensureQrLib() {
    if (window.QRCode) return Promise.resolve(window.QRCode);
    if (!qrLibPromise) {
      qrLibPromise = new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
        s.onload = () => resolve(window.QRCode);
        s.onerror = () => reject(new Error('QR knižnicu sa nepodarilo načítať'));
        document.head.appendChild(s);
      });
    }
    return qrLibPromise;
  }

  async function drawJoinQr(targetId, url) {
    const QR = await ensureQrLib();
    const el = document.getElementById(targetId);
    if (!el) return;
    el.innerHTML = '';
    new QR(el, { text: url, width: 220, height: 220, correctLevel: QR.CorrectLevel.M });
  }

  // Whether to hide points/percent/grade in the teacher's own live view
  // (drawStudents below) and show only each student's progress through the
  // activities. Purely a display filter on this screen — it is never
  // broadcast to students (contrast with `grading`, which is), so a teacher
  // can watch for someone stuck without seeing outcomes. Per-browser,
  // remembered across lessons like the grading settings above.
  const HIDE_SCORES_KEY = 'mathTeacherHideScoresV1';
  function loadHideScores() {
    try { return localStorage.getItem(HIDE_SCORES_KEY) === '1'; } catch (_) { return false; }
  }
  function saveHideScores(v) {
    try { localStorage.setItem(HIDE_SCORES_KEY, v ? '1' : '0'); } catch (_) { /* localStorage unavailable */ }
  }

  // Renders the pupil list + summary. `students` keys are nicks — arbitrary
  // text a participant typed on the join screen, so esc() here is not
  // optional: anyone with the projected join code can pick a nick containing
  // markup, and this screen (and the CSV export) is the only place it's ever
  // displayed.
  function drawStudents(students, grading, hideScores, reflectOnly) {
    grading = grading || MathScore.loadGrading();
    const arr = Object.values(students);
    const done = arr.filter(x => x.stage === 'done');

    // A reflection-only lesson never scores anything (see core/session.js's
    // sendProgress, which omits score/maxScore/percent for these students
    // entirely) — showing "0 XP · 0%" next to "Hotovo" would read as failure,
    // so this mode gets its own summary built from the self-assessment
    // colours instead of points.
    if (reflectOnly) {
      const colors = { green: 0, yellow: 0, red: 0 };
      done.forEach(x => Object.values(x.self || {}).forEach(v => { if (colors[v] !== undefined) colors[v]++; }));
      $('#summary').innerHTML = arr.length
        ? `Pripojení: <strong>${arr.length}</strong> · odoslali sebareflexiu: <strong>${done.length}</strong> · 🟢 ${colors.green} · 🟡 ${colors.yellow} · 🔴 ${colors.red}`
        : 'Zatiaľ bez výsledkov.';
      $('#students').innerHTML = arr
        .slice()
        .sort((x, y) => String(x.nick || '').localeCompare(String(y.nick || ''), 'sk'))
        .map(x => `<div class="student progress-only"><strong>${esc(x.nick)}</strong><span>${x.stage === 'done' ? 'Hotovo' : x.stage === 'joined' ? 'Pripojený' : 'Pracuje'}</span></div>`)
        .join('');
      return;
    }

    if (hideScores) {
      $('#summary').innerHTML = arr.length
        ? `Pripojení: <strong>${arr.length}</strong> · dokončili: <strong>${done.length}</strong>`
        : 'Zatiaľ bez výsledkov.';
    } else {
      const percents = done.map(x => Number(x.percent)).filter(Number.isFinite);
      const avg = percents.length ? Math.round(percents.reduce((sum, p) => sum + p, 0) / percents.length) : null;

      let gradeSummary = '';
      if (grading.enabled && done.length) {
        const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        done.forEach(x => { const g = MathScore.gradeForPercent(Number(x.percent), grading); if (g) counts[g]++; });
        gradeSummary = ` · známky: <strong>1:${counts[1]} · 2:${counts[2]} · 3:${counts[3]} · 4:${counts[4]} · 5:${counts[5]}</strong>`;
      }
      $('#summary').innerHTML = arr.length
        ? `Pripojení: <strong>${arr.length}</strong> · dokončili: <strong>${done.length}</strong>${avg !== null ? ` · priemer dokončených: <strong>${avg} %</strong>` : ''}${gradeSummary}`
        : 'Zatiaľ bez výsledkov.';
    }

    $('#students').innerHTML = arr
      .slice()
      .sort((x, y) => String(x.nick || '').localeCompare(String(y.nick || ''), 'sk'))
      .map(x => {
        const progress = `<span>${x.stage === 'done' ? 'Hotovo' : x.stage === 'joined' ? 'Pripojený' : `${x.question || 0}/${x.total || 0}`}</span>`;
        if (hideScores) {
          return `<div class="student progress-only"><strong>${esc(x.nick)}</strong>${progress}</div>`;
        }
        const pct = Number.isFinite(Number(x.percent)) ? Number(x.percent) : null;
        const grade = grading.enabled && pct !== null ? MathScore.gradeForPercent(pct, grading) : '';
        return `<div class="student">
          <strong>${esc(x.nick)}</strong>
          ${progress}
          <span>${x.score || 0}${x.maxScore ? ` / ${x.maxScore}` : ''} XP${pct !== null ? ` · ${pct}%` : ''}${grade ? ` · známka <strong>${grade}</strong>` : ''}</span>
        </div>`;
      }).join('');
  }

  function exportResultsCsv(m, code, grading, students, mod) {
    const arr = Object.values(students).sort((a, b) => String(a.nick || '').localeCompare(String(b.nick || ''), 'sk'));
    if (!arr.length) { alert('Zatiaľ nie sú žiadne výsledky na export.'); return; }

    const activities = (mod && mod.student && mod.student.activities) || [];
    const activityMap = new Map(activities.map((a, i) => [a.id, { order: i + 1, title: a.title || a.skill || a.phase || a.id }]));
    const answerIds = [];
    arr.forEach(x => (x.answers || []).forEach(a => { if (!answerIds.includes(a.id)) answerIds.push(a.id); }));
    answerIds.sort((a, b) => (activityMap.has(a) ? activityMap.get(a).order : 999) - (activityMap.has(b) ? activityMap.get(b).order : 999));

    const skillNames = [];
    arr.forEach(x => Object.keys(x.skill || {}).forEach(k => { if (!skillNames.includes(k)) skillNames.push(k); }));
    const selfKeys = [];
    arr.forEach(x => Object.keys(x.self || {}).forEach(k => { if (!selfKeys.includes(k)) selfKeys.push(k); }));

    const rows = [
      ['Téma', m.topic],
      ['Kód hodiny', code],
      ['Dátum a čas exportu', new Date().toLocaleString('sk-SK')],
      ['Známkovanie', grading.enabled ? 'zapnuté' : 'vypnuté'],
      ...(grading.enabled ? [['Stupnica', MathScore.scaleText(grading.thresholds)]] : []),
      [],
      ['Žiak (meno a priezvisko)', 'Stav', 'Body (XP)', 'Maximum', 'Percentá', ...(grading.enabled ? ['Známka'] : []), 'Postup',
        ...skillNames.map(k => `Zručnosť: ${k}`),
        ...selfKeys.map(k => `Sebahodnotenie: ${k}`),
        ...answerIds.map(id => { const a = activityMap.get(id); return `Úloha ${a ? a.order : ''}: ${a ? a.title : id}`; }),
      ],
    ];

    arr.forEach(x => {
      const answerById = new Map((x.answers || []).map(a => [a.id, a]));
      rows.push([
        x.nick || '',
        x.stage === 'done' ? 'Hotovo' : x.stage === 'joined' ? 'Pripojený' : 'Pracuje',
        Number(x.score) || 0,
        Number(x.maxScore) || 0,
        Number.isFinite(Number(x.percent)) ? `${Number(x.percent)} %` : '',
        ...(grading.enabled ? [MathScore.gradeForPercent(Number(x.percent), grading) || ''] : []),
        `${x.question || 0}/${x.total || 0}`,
        ...skillNames.map(k => { const v = x.skill && x.skill[k]; return v ? `${v.ok || 0}/${v.n || 0}` : ''; }),
        ...selfKeys.map(k => {
          const v = x.self && x.self[k];
          return v === 'green' ? 'zelená – rozumiem' : v === 'yellow' ? 'žltá – ešte si nie som istý/istá' : v === 'red' ? 'červená – potrebujem pomoc' : String(v == null ? '' : v);
        }),
        ...answerIds.map(id => { const a = answerById.get(id); return a ? `${a.correct ? 'správne' : 'nesprávne'}; pokusy: ${a.attempts || 0}; body: ${a.points || 0}` : ''; }),
      ]);
    });

    const safe = window.MathUtil.asciiSlug(m.topic || 'vysledky', 50);
    const stamp = window.MathUtil.dateStamp();
    window.MathUtil.downloadCsv(`${stamp}-${safe || 'vysledky-triedy'}.csv`, rows);
  }

  async function teacherLive(id) {
    const meta0 = id && MathPlatform.indexEntry(id);
    // Písomka má vlastnú obrazovku (teacherExam nižšie), nie obyčajnú živú hodinu.
    if (meta0 && meta0.kind === 'exam') { window.MathApp.go('teacher-exam/' + id); return; }
    id = (meta0 && meta0.status === 'ready') ? id : MathPlatform.defaultModuleId();
    const m = MathPlatform.indexEntry(id);
    const code = MathLive.makeCode();

    let mod = null;
    try { mod = await MathPlatform.loadModule(id); } catch (_) { mod = null; }

    let grading = MathScore.loadGrading();
    let hideScores = loadHideScores();
    let reflectOnly = false;
    const hasReflection = !!(mod && mod.student && mod.student.activities.some(a => a.type === 'reflection'));
    const activities = (mod && mod.student && mod.student.activities) || [];
    const actLabel = a => a.title || a.skill || a.phase || a.id || a.type;
    // Which activities this live lesson includes — everything by default
    // (no restriction). The QR code/link below bakes this straight into the
    // URL; a manually-typed join code has no URL to carry it, so the student's
    // join screen instead asks for it over the live channel once connected —
    // lessonInfo() below is what answers that ask (see core/views-student.js's
    // join()), piggybacked on the existing debounced grading broadcast.
    const selectedActs = new Set(activities.map((_, i) => i));
    const lessonInfo = () => ({
      moduleId: id,
      reflectOnly,
      selectedActivityIndices: (!reflectOnly && activities.length && selectedActs.size > 0 && selectedActs.size < activities.length)
        ? [...selectedActs].sort((a, b) => a - b)
        : null,
    });
    const buildJoinUrl = () => {
      let extra = '';
      if (reflectOnly) extra = '/reflect';
      else if (activities.length && selectedActs.size > 0 && selectedActs.size < activities.length) {
        extra = `/acts/${[...selectedActs].sort((a, b) => a - b).join(',')}`;
      }
      return `${location.origin}${location.pathname}#join/${encodeURIComponent(id)}/${encodeURIComponent(code)}${extra}`;
    };

    app.innerHTML = `
      <div class="card">
        <div class="eyebrow"><span class="live-dot"></span> ŽIVÁ HODINA</div>
        <h1>${esc(m.topic)}</h1>
        <div class="live-setup-row">
          <div><p><strong>Naskenuj QR kód:</strong></p><div id="joinQr" class="qr-box"></div></div>
          <div>
            <p class="muted">Po naskenovaní sa otvorí správny modul aj táto hodina. Žiak zadá už iba meno a priezvisko.</p>
            <p>Kód pre ručné pripojenie:</p>
            <div class="bigcode">${esc(code)}</div>
            <p class="muted">Záloha: žiak môže otvoriť platformu → „Máš kód od učiteľa?“ (alebo v module „Mám kód hodiny“) → zadať meno a priezvisko a tento kód. Po pripojení si aplikácia sama zistí správny modul aj výber aktivít nastavený tu na tejto obrazovke.</p>
          </div>
        </div>
        <div class="grading-toggle-row">
          <input id="reflectOnly" type="checkbox" ${hasReflection ? '' : 'disabled'}>
          <label for="reflectOnly">Iba záverečná sebareflexia (žiaci preskočia úlohy a rovno odpovedia na sebahodnotenie)</label>
        </div>
        <p class="muted small-note">${hasReflection ? 'Zapni pred tým, ako žiakom ukážeš QR kód/kód hodiny — QR kód aj kód sa prispôsobia. Sebareflexia sa nezapočítava do bodov ani do známky.' : 'Tento modul nemá sebareflexiu, túto voľbu nie je možné zapnúť.'}</p>
        <div class="acts-block" id="actsBlock">
          <p class="muted small-note">Vyber, ktoré aktivity žiaci v tejto hodine uvidia — platí pre pripojenie cez QR kód/odkaz aj cez ručne zadaný kód hodiny.</p>
          ${activities.length ? `
            <div id="actsList" class="acts-list">
              ${activities.map((a, i) => `<div class="acts-row"><input type="checkbox" class="actCheck" id="actCheck${i}" data-i="${i}" checked><label for="actCheck${i}">${i + 1}. ${esc(actLabel(a))} <span class="tag">${esc(a.type)}</span></label></div>`).join('')}
            </div>
            <div class="row">
              <button class="ghost" id="actsAll">Vybrať všetky</button>
              <button class="ghost" id="actsNone">Zrušiť všetky</button>
            </div>
            <p class="muted small-note" id="actsInfo"></p>
          ` : `<p class="muted small-note">Aktivity modulu sa nepodarilo načítať, výber nie je k dispozícii.</p>`}
        </div>
        <div id="connect" class="notice">Pripájam živý kanál…</div>
        <div class="row">
          <button class="btn" id="endLive" disabled>Ukončiť hodinu</button>
          <button class="ghost" data-go="method/${id}">Metodická karta</button>
          <button class="ghost" data-go="teacher-unit/${m.year}/${MathPlatform.unitKey(m.unit)}">Späť k témam</button>
        </div>
      </div>
      <div class="card spaced">
        <div class="eyebrow">HODNOTENIE A EXPORT</div>
        <h2>Nastavenie známkovania</h2>
        <div class="grading-toggle-row">
          <input id="gradingEnabled" type="checkbox" ${grading.enabled ? 'checked' : ''}>
          <label for="gradingEnabled">Počítať aj orientačné známky z percent</label>
        </div>
        <div id="gradingFields" ${grading.enabled ? '' : 'hidden'}>
          <p class="muted">Zadaj najnižšie percento pre danú známku. Hranice musia klesať.</p>
          <div class="grading-fields-grid">${[1, 2, 3, 4].map(g => `<div class="field"><label>Známka ${g} od</label><input id="grade${g}" type="number" min="0" max="100" step="1" value="${grading.thresholds[g]}"></div>`).join('')}</div>
          <div id="gradingInfo" class="notice">${MathScore.scaleText(grading.thresholds)}</div>
        </div>
        <div class="row spaced">
          <button class="ghost" id="saveGrading">Uložiť nastavenie</button>
          <button class="btn" id="exportResults">Exportovať kompletné výsledky CSV</button>
        </div>
        <p class="muted small-note">Nastavenie sa uloží iba v tomto prehliadači. Export obsahuje súhrn, sebahodnotenie, výsledky podľa zručností aj jednotlivé bodované aktivity žiakov. Zostáva dostupný aj po ukončení hodiny, kým túto stránku neopustíš. Pripojení žiaci hneď uvidia v hlavičke každej aktivity odznak, či sa im táto hodina počíta do známky – aj keď zapneš/vypneš známkovanie počas hodiny.</p>
      </div>
      <div class="card spaced">
        <h2>Živá diagnostika</h2>
        <div class="grading-toggle-row">
          <input id="hideScores" type="checkbox" ${hideScores ? 'checked' : ''}>
          <label for="hideScores">Zobrazovať iba postup aktivitami (skryť body, percentá aj známky)</label>
        </div>
        <p class="muted small-note">Hodí sa, keď chceš sledovať, či niekto neuviazol na úlohe, bez toho, aby ťa rozptyľovali priebežné výsledky. Týka sa iba tejto obrazovky – žiaci svoje body a percentá vidia bez ohľadu na toto nastavenie.</p>
        <div id="summary" class="muted">Zatiaľ bez výsledkov.</div>
        <div id="students" class="live-list"></div>
      </div>
    `;

    const redrawQr = () => drawJoinQr('joinQr', buildJoinUrl()).catch(e => {
      console.error('QR chyba:', e);
      const el = $('#joinQr');
      if (el) el.innerHTML = '<span class="muted">QR kód sa nepodarilo načítať. Použi textový kód vedľa.</span>';
    });
    redrawQr();

    let students = {};
    let handle = null;

    const readGradingFromForm = () => ({
      enabled: $('#gradingEnabled').checked,
      thresholds: { 1: Number($('#grade1').value), 2: Number($('#grade2').value), 3: Number($('#grade3').value), 4: Number($('#grade4').value) },
    });
    $('#gradingEnabled').onchange = () => { $('#gradingFields').hidden = !$('#gradingEnabled').checked; };
    $('#hideScores').onchange = () => {
      hideScores = $('#hideScores').checked;
      saveHideScores(hideScores);
      drawStudents(students, grading, hideScores, reflectOnly);
    };
    $('#reflectOnly').onchange = () => {
      reflectOnly = $('#reflectOnly').checked;
      const actsBlock = $('#actsBlock');
      if (actsBlock) actsBlock.classList.toggle('disabled', reflectOnly);
      redrawQr();
      drawStudents(students, grading, hideScores, reflectOnly);
    };

    function updateActsInfo() {
      const info = $('#actsInfo');
      if (!info) return;
      if (selectedActs.size === activities.length) info.textContent = 'Vybraté všetky aktivity (žiadne obmedzenie).';
      else if (selectedActs.size === 0) info.textContent = 'Nie je vybraná žiadna aktivita — žiaci preto uvidia celý modul. Zaškrtni aspoň jednu.';
      else info.textContent = `Vybraných ${selectedActs.size} z ${activities.length} aktivít.`;
    }
    function onActsChanged() { updateActsInfo(); redrawQr(); }
    updateActsInfo();
    $$('.actCheck').forEach(cb => {
      cb.onchange = () => {
        const i = Number(cb.dataset.i);
        if (cb.checked) selectedActs.add(i); else selectedActs.delete(i);
        onActsChanged();
      };
    });
    if ($('#actsAll')) $('#actsAll').onclick = () => {
      $$('.actCheck').forEach(cb => { cb.checked = true; selectedActs.add(Number(cb.dataset.i)); });
      onActsChanged();
    };
    if ($('#actsNone')) $('#actsNone').onclick = () => {
      $$('.actCheck').forEach(cb => { cb.checked = false; });
      selectedActs.clear();
      onActsChanged();
    };

    $('#saveGrading').onclick = () => {
      const s = readGradingFromForm();
      if (!MathScore.validThresholds(s.thresholds)) {
        const el = $('#gradingInfo');
        el.className = 'notice bad';
        el.innerHTML = '<strong>Skontroluj hranice.</strong> Musia byť medzi 0 a 100 a platiť: známka 1 > 2 > 3 > 4.';
        return;
      }
      grading = s;
      MathScore.saveGrading(grading);
      const el = $('#gradingInfo');
      el.className = 'notice good';
      el.innerHTML = `<strong>Nastavenie uložené.</strong> ${grading.enabled ? MathScore.scaleText(grading.thresholds) : 'Známkovanie je vypnuté.'}`;
      drawStudents(students, grading, hideScores, reflectOnly);
      // Pripojení žiaci musia hneď vidieť, či sa im táto hodina počíta do známky.
      if (handle) handle.announceGrading(grading, true);
    };

    $('#exportResults').onclick = () => {
      const s = readGradingFromForm();
      if (!MathScore.validThresholds(s.thresholds)) { alert('Pred exportom oprav hranice známok.'); return; }
      grading = s;
      exportResultsCsv(m, code, grading, students, mod);
    };

    try {
      handle = await MathLive.connectAsTeacher(code, {
        onStudent: msg => {
          students[msg.nick] = Object.assign({}, students[msg.nick], msg);
          drawStudents(students, grading, hideScores, reflectOnly);
          // A newly-joined student doesn't yet know whether today's lesson is
          // graded, nor (if they typed the code by hand) which module/activity
          // subset this lesson actually is — let them know right away.
          if (msg.stage === 'joined') handle.announceGrading(grading, false, lessonInfo());
        },
      });
      $('#connect').className = 'notice good';
      $('#connect').innerHTML = '<strong>Kanál je aktívny.</strong> Výsledky sa neukladajú do databázy.';
      $('#endLive').disabled = false;
      handle.announceGrading(grading, true, lessonInfo());
      $('#endLive').onclick = async () => {
        await handle.send('teacher', { action: 'ended' });
        handle.close();
        $('#connect').className = 'notice';
        $('#connect').innerHTML = '<strong>Hodina ukončená.</strong> Výsledky zostávajú na tejto obrazovke, aby si ich mohol/mohla exportovať. Po odchode zo stránky sa zahodia.';
        $('#endLive').disabled = true;
      };
    } catch (e) {
      console.error('Realtime chyba:', e);
      $('#connect').className = 'notice bad';
      $('#connect').innerHTML = '<strong>Nepodarilo sa pripojiť živý kanál.</strong> Obnov stránku a skús to znova.';
    }

    // Router teardown: leaving this screen must close the channel, so
    // re-entering teacher-live never orphans a previous connection whose
    // callback would otherwise fire against DOM that no longer exists.
    return () => { if (handle) handle.close(); };
  }

  // --- Písomka (core/exam.js) ---------------------------------------------------
  //
  // Učiteľka si zo servera (api/exam.js) stiahne celú písomku vrátane kľúča,
  // žiakom pošle len zadania (MathExam.publicExam) a body počíta sama z
  // odpovedí, ktoré žiaci posielajú. Bez databázy: priebeh sa zálohuje do
  // localStorage tohto prehliadača (kľúč mathExamTeacherV1), takže zatvorenie
  // karty nič nezmaže – cez „Pokračovať“ (#teacher-exam/<id>/<kód>) sa kanál
  // znovu otvorí a žiaci pošlú svoje odpovede nanovo.

  const EXAM_STORE_KEY = 'mathExamTeacherV1';
  const EXAM_KEEP_MS = 60 * 24 * 60 * 60 * 1000;
  const CODE_RE = /^[A-Z2-9]{6}$/;
  const EXAM_STATUS = { running: 'Prebieha', ended: 'Ukončená', revealed: 'Výsledky zverejnené' };

  function examStoreRead() {
    try { return JSON.parse(localStorage.getItem(EXAM_STORE_KEY) || '{}') || {}; } catch (_) { return {}; }
  }
  function examStoreWrite(all) {
    try {
      const now = Date.now();
      Object.keys(all).forEach(k => { if (!all[k] || now - (all[k].at || 0) > EXAM_KEEP_MS) delete all[k]; });
      localStorage.setItem(EXAM_STORE_KEY, JSON.stringify(all));
      return true;
    } catch (_) { return false; }
  }

  function examStageText(st) {
    return st.stage === 'done' ? 'Odovzdané' : st.stage === 'joined' ? 'Pripojený' : `Pracuje (${st.question || 0}/${st.total || 0})`;
  }

  const SELF_ICON = { green: '🟢', yellow: '🟡', red: '🔴' };
  const SELF_TEXT = { green: 'zelená – rozumiem', yellow: 'žltá – ešte si nie som istý/istá', red: 'červená – potrebujem pomoc' };

  function examSelfHtml(exam, self) {
    const r = exam.reflection;
    if (!r || !Array.isArray(r.skills) || !self) return '';
    const marked = r.skills.filter(sk => SELF_ICON[self[sk]]);
    if (!marked.length) return '';
    return `<p class="exam-self"><strong>Sebareflexia:</strong> ${marked.map(sk => `${SELF_ICON[self[sk]]} ${esc(sk)}`).join(' · ')}</p>`;
  }

  // Krátky prehľad sebareflexie do riadku žiaka (🟢2 🟡1 🔴1), aby bola viditeľná aj bez rozbalenia.
  function examSelfBadge(exam, self) {
    const r = exam.reflection;
    if (!r || !Array.isArray(r.skills) || !self) return '';
    const c = { green: 0, yellow: 0, red: 0 };
    r.skills.forEach(sk => { if (c[self[sk]] !== undefined) c[self[sk]]++; });
    return (c.green + c.yellow + c.red) ? `<span title="Sebareflexia žiaka">🟢${c.green} 🟡${c.yellow} 🔴${c.red}</span>` : '';
  }

  function gradeLine(graded, grading) {
    if (!graded) return '—';
    const g = grading.enabled ? MathScore.gradeForPercent(graded.percent, grading) : '';
    return `${MathExam.fmtPts(graded.total + graded.bonus)} / ${MathExam.fmtPts(graded.max)} b · ${graded.percent} %${g ? ` · známka <strong>${g}</strong>` : ''}`;
  }

  async function teacherExam(id, code) {
    const m = id && MathPlatform.indexEntry(id);
    if (!m || m.kind !== 'exam' || m.status !== 'ready') { window.MathApp.go('teacher'); return; }
    code = (code || '').toUpperCase();

    app.innerHTML = '<div class="card"><p>Načítavam písomku…</p></div>';
    let exam;
    try { exam = await MathExam.fetchExam(id); }
    catch (e) {
      app.innerHTML = `<div class="card"><h2>Písomku sa nepodarilo načítať</h2><p>${esc(e.message)}</p><button class="btn" data-go="teacher-unit/${m.year}/${MathPlatform.unitKey(m.unit)}">Späť</button></div>`;
      return;
    }

    if (!CODE_RE.test(code)) { examChooser(id, m, exam); return; }
    return examRun(id, m, exam, code);
  }

  function examChooser(id, m, exam) {
    const all = examStoreRead();
    const mine = Object.entries(all).filter(([, s]) => s && s.moduleId === id).sort((a, b) => (b[1].startedAt || 0) - (a[1].startedAt || 0));
    const ptsOf = t => t.steps.reduce((k, s) => k + s.points, 0);
    const isBonus = t => (exam.bonusTasks || []).includes(t.id);
    const allIds = exam.groups.A.tasks.map(t => t.id);
    const pickedIds = () => $('.examTaskCheck').filter(c => c.checked).map(c => c.dataset.id);
    // Výber sa nesie do tlače v URL; všetky úlohy = bez parametra.
    const idsParam = () => { const p = pickedIds(); return p.length && p.length < allIds.length ? '/' + p.join(',') : ''; };
    const openPrint = mode => window.open(`${location.origin}${location.pathname}#exam-print/${encodeURIComponent(id)}/${mode}${idsParam()}`, '_blank');
    const groupKeys = Object.keys(exam.groups);

    app.innerHTML = `
      ${MathUI.backRow(`teacher-unit/${m.year}/${MathPlatform.unitKey(m.unit)}`, m.unit)}
      <div class="card">
        <div class="eyebrow">PÍSOMKA · ${esc(m.lesson)}</div>
        <h1>${esc(exam.title)}</h1>
        <p class="muted">${groupKeys.length} skupiny · ${allIds.length} úloh po krokoch${exam.minutes ? ` · ${exam.minutes} min` : ''}</p>
        <p>Žiaci sa pripoja kódom (alebo QR kódom), zadania dostanú od teba a odpovede ti chodia priebežne. Body sa počítajú automaticky po krokoch, ručne ich môžeš upraviť. Nič sa neukladá na server – priebeh sa zálohuje v tomto prehliadači a výsledky si stiahneš ako CSV.</p>
        <h2>Úlohy v písomke</h2>
        <p class="muted small-note">Zaškrtni úlohy, ktoré sa majú zahrnúť. Vybrané úlohy dostanú žiaci, započítajú sa do maxima bodov a vytlačia sa. Po spustení sa výber už nemení (žiaci už majú zadanie).</p>
        <div class="acts-list" id="examPick">
          ${exam.groups.A.tasks.map(t => `<div class="acts-row"><input type="checkbox" class="examTaskCheck" id="examTask_${esc(t.id)}" data-id="${esc(t.id)}" checked><label for="examTask_${esc(t.id)}"><strong>${esc(t.title)}</strong> <span class="tag">${ptsOf(t)} b${isBonus(t) ? ', bonus' : ''}</span><br><span class="muted small-note">${groupKeys.map(g => esc(g) + ': ' + esc(((exam.groups[g].tasks.find(x => x.id === t.id)) || {}).question || '')).join(' · ')}</span></label></div>`).join('')}
        </div>
        <div class="row">
          <button class="ghost" id="examPickAll">Vybrať všetky</button>
          <button class="ghost" id="examPickNone">Zrušiť všetky</button>
        </div>
        <p class="muted small-note" id="examPickInfo"></p>
        <div class="row">
          <button class="btn" id="examNew">Spustiť novú písomku</button>
          <button class="ghost" id="examPrintA">Tlač zadania A</button>
          <button class="ghost" id="examPrintB">Tlač zadania B</button>
          <button class="ghost" id="examPrintKey">Tlač kľúča</button>
          <button class="ghost" data-go="method/${m.id}">Metodická karta</button>
        </div>
      </div>
      <div class="card spaced">
        <h2>Rozpracované a uložené písomky</h2>
        ${mine.length ? `<div class="exam-saved-list">${mine.map(([c, s]) => `
          <div class="exam-saved">
            <div><strong>${new Date(s.startedAt || s.at || 0).toLocaleString('sk-SK')}</strong> · kód <code>${esc(c)}</code><br>
              <span class="muted">${Object.keys(s.students || {}).length} žiakov · ${esc(EXAM_STATUS[s.status] || '')}${Array.isArray(s.taskIds) ? ` · ${s.taskIds.length} úloh` : ''}</span></div>
            <div class="row"><button class="btn" data-go="teacher-exam/${esc(id)}/${esc(c)}">Otvoriť</button><button class="ghost exam-del" data-code="${esc(c)}">Zmazať</button></div>
          </div>`).join('')}</div>` : '<p class="muted">Zatiaľ žiadne. Po spustení sa tu zobrazí každá písomka, aby si sa k nej mohol/mohla vrátiť.</p>'}
      </div>`;

    const updatePick = () => {
      const p = pickedIds();
      ['#examNew', '#examPrintA', '#examPrintB', '#examPrintKey'].forEach(b => { if ($(b)) $(b).disabled = !p.length; });
      if (!p.length) { $('#examPickInfo').textContent = 'Vyber aspoň jednu úlohu.'; return; }
      const f = MathExam.filterExam(exam, p);
      const tasks = f.groups.A.tasks;
      const max = tasks.filter(t => !isBonus(t)).reduce((n, t) => n + ptsOf(t), 0);
      const bonus = tasks.filter(isBonus).reduce((n, t) => n + ptsOf(t), 0);
      $('#examPickInfo').textContent = `Vybraných ${p.length} z ${allIds.length} úloh · maximum ${max} b${bonus ? ` + bonus ${bonus} b` : ''}`;
    };
    $('.examTaskCheck').forEach(c => { c.onchange = updatePick; });
    $('#examPickAll').onclick = () => { $('.examTaskCheck').forEach(c => { c.checked = true; }); updatePick(); };
    $('#examPickNone').onclick = () => { $('.examTaskCheck').forEach(c => { c.checked = false; }); updatePick(); };
    updatePick();

    $('#examNew').onclick = () => {
      const ids = pickedIds();
      if (!ids.length) return;
      const code = MathLive.makeCode();
      const store = examStoreRead();
      store[code] = { moduleId: id, startedAt: Date.now(), status: 'running', students: {}, overrides: {}, taskIds: ids.length < allIds.length ? ids : null, at: Date.now() };
      examStoreWrite(store);
      window.MathApp.go(`teacher-exam/${id}/${code}`);
    };
    $('#examPrintA').onclick = () => openPrint('A');
    $('#examPrintB').onclick = () => openPrint('B');
    $('#examPrintKey').onclick = () => openPrint('key');
    $$('.exam-del').forEach(b => {
      b.onclick = () => {
        if (!confirm('Naozaj zmazať túto uloženú písomku aj s výsledkami žiakov? Ak si ich nestiahol/a do CSV, zaniknú.')) return;
        const store = examStoreRead();
        delete store[b.dataset.code];
        examStoreWrite(store);
        examChooser(id, m, exam);
      };
    });
  }

  async function examRun(id, m, exam, code) {
    const store0 = examStoreRead();
    const saved = store0[code] && store0[code].moduleId === id ? store0[code] : null;
    const sess = {
      moduleId: id,
      startedAt: saved ? saved.startedAt : Date.now(),
      status: saved ? saved.status : 'running',
      overrides: saved && saved.overrides ? saved.overrides : {},
      taskIds: saved && Array.isArray(saved.taskIds) && saved.taskIds.length ? saved.taskIds : null,
      at: Date.now(),
    };
    // Učiteľka pred spustením vybrala úlohy: celá ďalšia práca (zadanie pre žiakov, body, CSV, tlač) ide s výberom.
    exam = MathExam.filterExam(exam, sess.taskIds);
    const students = Object.assign(Object.create(null), saved ? saved.students : {});
    const openNicks = new Set();
    let grading = MathScore.loadGrading();
    let handle = null;
    let saveOk = true;
    let drawTimer = null;
    let persistTimer = null;

    // Pri celej triede chodia správy často; zápis celého stavu hneď po každej by
    // zbytočne zaťažoval localStorage, preto ho z onStudent zlučujeme.
    const persistSoon = () => {
      clearTimeout(persistTimer);
      persistTimer = setTimeout(persist, 400);
    };
    const persist = () => {
      clearTimeout(persistTimer);
      sess.at = Date.now();
      const all = examStoreRead();
      all[code] = Object.assign({}, sess, { students });
      saveOk = examStoreWrite(all);
      const w = $('#examSaveWarn');
      if (w) w.hidden = saveOk;
    };
    persist();

    const joinUrl = `${location.origin}${location.pathname}#join/${encodeURIComponent(id)}/${encodeURIComponent(code)}`;
    const lessonInfo = () => ({ moduleId: id, reflectOnly: false, selectedActivityIndices: null, exam: MathExam.publicExam(exam) });
    const gradeOf = nick => {
      const st = students[nick];
      const ex = st && st.exam;
      if (!ex || !ex.group || !exam.groups[ex.group]) return null;
      return MathExam.gradeSubmission(exam, ex.group, ex.answers || {}, sess.overrides[nick]);
    };

    app.innerHTML = `
      <div class="card">
        <div class="eyebrow"><span class="live-dot"></span> PÍSOMKA</div>
        <h1>${esc(exam.title)}</h1>
        ${sess.taskIds ? `<p class="muted">Zahrnuté úlohy: ${exam.groups.A.tasks.map(x => esc(x.title)).join(', ')}</p>` : ''}
        <div class="live-setup-row">
          <div><p><strong>Naskenuj QR kód:</strong></p><div id="joinQr" class="qr-box"></div></div>
          <div>
            <p>Kód pre ručné pripojenie:</p>
            <div class="bigcode">${esc(code)}</div>
            <p class="muted">Žiak zadá meno a priezvisko, vyberie skupinu (A/B) podľa tvojho pokynu a píše. Odpovede ti chodia priebežne. Ak mu spadne spojenie alebo obnoví stránku, pokračuje tam, kde skončil.</p>
          </div>
        </div>
        <div id="connect" class="notice">Pripájam živý kanál…</div>
        <div class="row">
          <button class="btn" id="examEnd">Ukončiť písomku</button>
          <button class="btn" id="examReveal">Zverejniť výsledky žiakom</button>
          <button class="ghost" data-go="teacher-exam/${esc(id)}">Zoznam písomiek</button>
        </div>
        <p class="muted small-note" id="examStatus"></p>
        <p class="notice bad" id="examSaveWarn" hidden><strong>Zálohu v prehliadači sa nepodarilo uložiť</strong> (plné úložisko alebo súkromné okno). Výsledky si preto stiahni do CSV skôr, než stránku zatvoríš.</p>
      </div>
      <div class="card spaced">
        <div class="eyebrow">HODNOTENIE A EXPORT</div>
        <h2>Nastavenie známkovania</h2>
        <div class="grading-toggle-row">
          <input id="gradingEnabled" type="checkbox" ${grading.enabled ? 'checked' : ''}>
          <label for="gradingEnabled">Počítať aj orientačné známky z percent</label>
        </div>
        <div id="gradingFields" ${grading.enabled ? '' : 'hidden'}>
          <p class="muted">Zadaj najnižšie percento pre danú známku. Hranice musia klesať.</p>
          <div class="grading-fields-grid">${[1, 2, 3, 4].map(g => `<div class="field"><label>Známka ${g} od</label><input id="grade${g}" type="number" min="0" max="100" step="1" value="${grading.thresholds[g]}"></div>`).join('')}</div>
          <div id="gradingInfo" class="notice">${MathScore.scaleText(grading.thresholds)}</div>
        </div>
        <div class="row spaced">
          <button class="ghost" id="saveGrading">Uložiť nastavenie</button>
          <button class="btn" id="examCsv">Exportovať výsledky CSV</button>
          <button class="ghost" id="examPrintA">Tlač zadania A</button>
          <button class="ghost" id="examPrintB">Tlač zadania B</button>
          <button class="ghost" id="examPrintKey">Tlač kľúča</button>
        </div>
        <p class="muted small-note">Priebeh písomky sa zálohuje v tomto prehliadači. Export CSV obsahuje body, odpovede žiakov po krokoch aj počet opustení aplikácie.</p>
      </div>
      <div class="card spaced">
        <h2>Opravovanie</h2>
        <div id="summary" class="muted">Zatiaľ bez výsledkov.</div>
        <p class="muted small-note">Rozbaľ žiaka a uvidíš každý krok s jeho odpoveďou a správnou odpoveďou. Pri úlohe môžeš body upraviť ručne (napr. uznať následnú chybu); prázdne políčko = automatické body.</p>
        <div id="students" class="exam-students"></div>
      </div>`;

    drawJoinQr('joinQr', joinUrl).catch(e => {
      console.error('QR chyba:', e);
      const el = $('#joinQr');
      if (el) el.innerHTML = '<span class="muted">QR kód sa nepodarilo načítať. Použi textový kód vedľa.</span>';
    });
    $('#examSaveWarn').hidden = saveOk;

    const openPrint = mode => window.open(`${location.origin}${location.pathname}#exam-print/${encodeURIComponent(id)}/${mode}${sess.taskIds ? '/' + sess.taskIds.join(',') : ''}`, '_blank');
    $('#examPrintA').onclick = () => openPrint('A');
    $('#examPrintB').onclick = () => openPrint('B');
    $('#examPrintKey').onclick = () => openPrint('key');

    const updateStatus = () => {
      $('#examStatus').textContent = `Stav písomky: ${EXAM_STATUS[sess.status] || ''}.`;
      $('#examEnd').disabled = sess.status !== 'running';
      $('#examReveal').textContent = sess.status === 'revealed' ? 'Zverejniť výsledky znova' : 'Zverejniť výsledky žiakom';
    };
    updateStatus();

    // --- tabuľka žiakov ---
    const overrideInput = (nick, t) => `<div class="exam-override"><label>Body za úlohu (ručne):
        <input type="number" class="exam-ov" min="0" max="${t.max}" step="0.5" data-nick="${esc(nick)}" data-task="${esc(t.id)}" value="${t.overridden ? t.points : ''}" placeholder="${MathExam.fmtPts(t.auto)}"> z ${MathExam.fmtPts(t.max)}</label></div>`;

    function draw() {
      const nicks = Object.keys(students).sort((a, b) => a.localeCompare(b, 'sk'));
      const graded = nicks.map(n => [n, gradeOf(n)]);
      const done = nicks.filter(n => students[n].stage === 'done');
      const pcts = done.map(n => (gradeOf(n) || {}).percent).filter(Number.isFinite);
      const avg = pcts.length ? Math.round(pcts.reduce((s, p) => s + p, 0) / pcts.length) : null;
      let gradeSummary = '';
      if (grading.enabled && pcts.length) {
        const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        pcts.forEach(p => { const g = MathScore.gradeForPercent(p, grading); if (g) counts[g]++; });
        gradeSummary = ` · známky: <strong>1:${counts[1]} · 2:${counts[2]} · 3:${counts[3]} · 4:${counts[4]} · 5:${counts[5]}</strong>`;
      }
      $('#summary').innerHTML = nicks.length
        ? `Pripojení: <strong>${nicks.length}</strong> · odovzdali: <strong>${done.length}</strong>${avg !== null ? ` · priemer odovzdaných: <strong>${avg} %</strong>` : ''}${gradeSummary}`
        : 'Zatiaľ bez výsledkov.';
      $('#students').innerHTML = graded.map(([nick, g]) => {
        const st = students[nick];
        const ex = st.exam || {};
        return `<details class="exam-student" data-nick="${esc(nick)}" ${openNicks.has(nick) ? 'open' : ''}>
          <summary>
            <strong>${esc(nick)}</strong>
            <span>${ex.group ? 'skupina ' + esc(ex.group) : 'skupina —'}</span>
            <span>${esc(examStageText(st))} ${examSelfBadge(exam, ex.self)}</span>
            <span title="Koľkokrát žiak opustil aplikáciu">${ex.leaves ? '⚠ opustil ' + (Number(ex.leaves) || 0) + '×' : ''}</span>
            <span>${gradeLine(g, grading)}</span>
          </summary>
          <div class="exam-student-body">${examSelfHtml(exam, ex.self)}${g ? `<div class="exam-results">${MathExam.resultTasksHtml(g, t => overrideInput(nick, t))}</div>` : '<p class="muted">Žiak ešte nevybral skupinu alebo neodoslal odpovede.</p>'}</div>
        </details>`;
      }).join('');
    }

    // Prekreslenie počas písania do políčka na body by žiakovi (učiteľke) zobralo
    // focus – odložíme ho, kým políčko neopustí.
    function scheduleDraw() {
      clearTimeout(drawTimer);
      drawTimer = setTimeout(function tick() {
        const a = document.activeElement;
        if (a && a.classList && a.classList.contains('exam-ov')) { drawTimer = setTimeout(tick, 600); return; }
        if ($('#students')) draw();
      }, 250);
    }
    draw();

    const studentsEl = $('#students');
    studentsEl.addEventListener('toggle', e => {
      const d = e.target;
      if (!d.classList || !d.classList.contains('exam-student')) return;
      if (d.open) openNicks.add(d.dataset.nick); else openNicks.delete(d.dataset.nick);
    }, true);
    studentsEl.addEventListener('change', e => {
      const el = e.target;
      if (!el.classList.contains('exam-ov')) return;
      const nick = el.dataset.nick, task = el.dataset.task;
      const v = el.value.trim().replace(',', '.');
      if (!sess.overrides[nick]) sess.overrides[nick] = {};
      if (v === '' || !Number.isFinite(Number(v))) delete sess.overrides[nick][task];
      else sess.overrides[nick][task] = Math.max(0, Number(v));
      persist();
      draw();
    });

    // --- známkovanie ---
    const readGrading = () => ({
      enabled: $('#gradingEnabled').checked,
      thresholds: { 1: Number($('#grade1').value), 2: Number($('#grade2').value), 3: Number($('#grade3').value), 4: Number($('#grade4').value) },
    });
    $('#gradingEnabled').onchange = () => { $('#gradingFields').hidden = !$('#gradingEnabled').checked; };
    $('#saveGrading').onclick = () => {
      const s = readGrading();
      const el = $('#gradingInfo');
      if (!MathScore.validThresholds(s.thresholds)) {
        el.className = 'notice bad';
        el.innerHTML = '<strong>Skontroluj hranice.</strong> Musia byť medzi 0 a 100 a platiť: známka 1 > 2 > 3 > 4.';
        return;
      }
      grading = s;
      MathScore.saveGrading(grading);
      el.className = 'notice good';
      el.innerHTML = `<strong>Nastavenie uložené.</strong> ${grading.enabled ? MathScore.scaleText(grading.thresholds) : 'Známkovanie je vypnuté.'}`;
      draw();
    };

    $('#examCsv').onclick = () => {
      const s = readGrading();
      if (!MathScore.validThresholds(s.thresholds)) { alert('Pred exportom oprav hranice známok.'); return; }
      grading = s;
      examCsv(m, code, exam, students, sess.overrides, grading);
    };

    // --- živý kanál ---
    try {
      handle = await MathLive.connectAsTeacher(code, {
        onStudent: msg => {
          if (!msg || typeof msg.nick !== 'string') return;
          students[msg.nick] = Object.assign({}, students[msg.nick], msg);
          persistSoon();
          scheduleDraw();
          // Nový žiak ešte nemá zadanie – pošli mu ho (zlúčené do jednej správy).
          if (msg.stage === 'joined') handle.announceGrading({ enabled: false }, false, lessonInfo());
        },
      });
      $('#connect').className = 'notice good';
      $('#connect').innerHTML = '<strong>Kanál je aktívny.</strong> Výsledky sa neukladajú do databázy, zálohujú sa len v tomto prehliadači.';
      handle.announceGrading({ enabled: false }, true, lessonInfo());
      // Po návrate do rozpracovanej písomky si vypýtaj aktuálne odpovede od všetkých žiakov.
      if (saved) handle.send('teacher', { action: 'resend' }).catch(() => {});

      $('#examEnd').onclick = async () => {
        if (!confirm('Ukončiť písomku? Všetkým pripojeným žiakom sa odpovede automaticky odovzdajú.')) return;
        await handle.send('teacher', { action: 'ended' });
        sess.status = sess.status === 'revealed' ? 'revealed' : 'ended';
        persist();
        updateStatus();
      };
      $('#examReveal').onclick = async () => {
        if (!confirm('Zverejniť žiakom správne odpovede a ich predbežné body? Neodovzdané písomky sa tým odovzdajú.')) return;
        await handle.send('teacher', { action: 'reveal', key: exam.key });
        sess.status = 'revealed';
        persist();
        updateStatus();
      };
    } catch (e) {
      console.error('Realtime chyba:', e);
      $('#connect').className = 'notice bad';
      $('#connect').innerHTML = '<strong>Nepodarilo sa pripojiť živý kanál.</strong> Obnov stránku a skús to znova. Uložené výsledky ostávajú.';
      $('#examEnd').disabled = true;
      $('#examReveal').disabled = true;
    }

    return () => { clearTimeout(drawTimer); persist(); if (handle) handle.close(); };
  }

  function examCsv(m, code, exam, students, overrides, grading) {
    const nicks = Object.keys(students).sort((a, b) => a.localeCompare(b, 'sk'));
    if (!nicks.length) { alert('Zatiaľ nie sú žiadne výsledky na export.'); return; }
    const tasksA = exam.groups.A.tasks;
    const selfSkills = (exam.reflection && exam.reflection.skills) || [];
    const head = ['Žiak (meno a priezvisko)', 'Skupina', 'Stav', 'Body (bez bonusu)', 'Bonus', 'Maximum', 'Percentá', ...(grading.enabled ? ['Známka'] : []), 'Opustenia aplikácie',
      ...selfSkills.map(sk => `Sebahodnotenie: ${sk}`)];
    tasksA.forEach((t, i) => {
      head.push(`Úloha ${i + 1}: body`);
      t.steps.forEach((s, j) => head.push(`Úloha ${i + 1}, krok ${j + 1} (${s.points} b)`));
    });
    const rows = [
      ['Písomka', exam.title],
      ['Kód', code],
      ['Dátum a čas exportu', new Date().toLocaleString('sk-SK')],
      ['Známkovanie', grading.enabled ? 'zapnuté' : 'vypnuté'],
      ...(grading.enabled ? [['Stupnica', MathScore.scaleText(grading.thresholds)]] : []),
      [],
      head,
    ];
    nicks.forEach(nick => {
      const st = students[nick], ex = st.exam || {};
      const g = ex.group && exam.groups[ex.group] ? MathExam.gradeSubmission(exam, ex.group, ex.answers || {}, overrides[nick]) : null;
      const row = [nick, ex.group || '', st.stage === 'done' ? 'Odovzdané' : st.stage === 'joined' ? 'Pripojený' : 'Pracuje',
        g ? g.total : '', g ? g.bonus : '', g ? g.max : '', g ? `${g.percent} %` : '',
        ...(grading.enabled ? [g ? MathScore.gradeForPercent(g.percent, grading) : ''] : []),
        ex.leaves || 0,
        ...selfSkills.map(sk => SELF_TEXT[(ex.self || {})[sk]] || '')];
      tasksA.forEach((t, i) => {
        const gt = g && g.tasks[i];
        row.push(gt ? gt.points : '');
        t.steps.forEach((s, j) => {
          const gs = gt && gt.steps[j];
          row.push(gs ? `${MathExam.formatValue(gs, gs.answer)} ${gs.ok ? '✓' : '✗'}` : '');
        });
      });
      rows.push(row);
    });
    const safe = window.MathUtil.asciiSlug(exam.title || 'pisomka', 40);
    window.MathUtil.downloadCsv(`${window.MathUtil.dateStamp()}-pisomka-${safe}.csv`, rows);
  }

  // Tlač zadania (skupina A / B / obe) alebo kľúča. Beží v nových kartách
  // otvorených z obrazovky písomky; potrebuje token učiteľky (kľúč je na serveri).
  async function examPrint(id, mode, idsParam) {
    const m = id && MathPlatform.indexEntry(id);
    if (!m || m.kind !== 'exam') { window.MathApp.go('teacher'); return; }
    let exam;
    try { exam = await MathExam.fetchExam(id); }
    catch (e) { app.innerHTML = `<div class="card"><h2>Písomku sa nepodarilo načítať</h2><p>${esc(e.message)}</p></div>`; return; }

    if (idsParam) exam = MathExam.filterExam(exam, String(idsParam).split(',').filter(Boolean));
    const isBonus = t => (exam.bonusTasks || []).includes(t.id);
    const ptsOf = t => t.steps.reduce((n, s) => n + s.points, 0);
    const groupSheet = (g, i) => {
      const tasks = exam.groups[g].tasks;
      const max = tasks.filter(t => !isBonus(t)).reduce((n, t) => n + ptsOf(t), 0);
      return `<section class="exam-print-group"${i ? ' style="break-before: page; page-break-before: always"' : ''}>
        <div class="print-sheet-title">
          <div class="print-eyebrow">${esc(m.unit)} · ${esc(m.lesson)} · skupina ${esc(g)}</div>
          <h1>${esc(exam.title)}</h1>
          <div class="print-name-line"><span>Meno a priezvisko:</span><span class="print-blank-line"></span><span>Trieda:</span><span class="print-blank-line short"></span><span>Dátum:</span><span class="print-blank-line short"></span></div>
          <p class="muted">Maximum ${max} b${tasks.some(isBonus) ? ' + bonus' : ''}${exam.minutes ? ` · ${exam.minutes} min` : ''}. Postup píš na papier, výsledky zapíš do riadkov pri každom kroku.</p>
        </div>
        ${tasks.map(t => `<div class="print-task exam-print-task">
          <div class="print-q"><span class="print-task-num">${esc(t.title)}</span> (${MathExam.fmtPts(ptsOf(t))} b) ${esc(t.question)}</div>
          ${t.note ? `<p class="muted">${esc(t.note)}</p>` : ''}
          <div class="print-lines" style="height:calc(${t.steps.length > 3 ? 7 : 4} * var(--ln, 1.7em))" aria-hidden="true"></div>
          ${t.steps.map(s => `<div class="print-answer-line"><span>${esc(s.label)} <em>(${MathExam.fmtPts(s.points)} b)</em>:</span><span class="print-blank-line"></span></div>`).join('')}
        </div>`).join('')}
      </section>`;
    };
    const keySheet = () => `<section class="exam-print-group">
        <div class="print-sheet-title"><div class="print-eyebrow">KĽÚČ — IBA PRE UČITEĽA</div><h1>${esc(exam.title)}</h1></div>
        ${Object.keys(exam.groups).map(g => `<h2 class="print-group-head">Skupina ${esc(g)}</h2>
          ${exam.groups[g].tasks.map(t => `<div class="print-key-item"><strong>${esc(t.title)}</strong> (${MathExam.fmtPts(ptsOf(t))} b${isBonus(t) ? ', bonus' : ''}): <span class="muted">${esc(t.question)}</span>
            <ul class="print-key-answer">${t.steps.map(s => `<li>${esc(s.label)} <em>(${MathExam.fmtPts(s.points)} b)</em>: <strong>${esc(MathExam.formatKey(s, exam.key[g][t.id][s.id]))}</strong></li>`).join('')}</ul></div>`).join('')}`).join('')}
      </section>`;

    const groups = mode === 'AB' ? ['A', 'B'] : (exam.groups[mode] ? [mode] : []);
    const body = mode === 'key' ? keySheet() : groups.map(groupSheet).join('');
    app.innerHTML = `
      <div class="print-toolbar no-print">
        <button class="ghost" id="examPrintClose">Zavrieť</button>
        <span class="muted">${mode === 'key' ? 'Kľúč správnych odpovedí' : mode === 'AB' ? 'Zadanie, obe skupiny' : 'Zadanie, skupina ' + esc(mode)}</span>
        <button class="btn" id="printBtn">Vytlačiť / Uložiť ako PDF</button>
      </div>
      <p class="print-hint no-print">Tip: v dialógu tlače zruš začiarknutie „Hlavičky a päty“, aby sa na stranu nepridávala adresa a dátum.</p>
      <article class="print-sheet">${body || '<p>Neznáma skupina.</p>'}</article>`;
    $('#printBtn').onclick = () => window.print();
    $('#examPrintClose').onclick = () => { window.close(); window.MathApp.go(`teacher-exam/${id}`); };
  }

  window.MathViews.teacher = { login, teacher, teacherYear, teacherUnit, method, teacherLive, teacherExam, examPrint };
})();
