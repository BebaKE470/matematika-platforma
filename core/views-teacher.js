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
        <h2>Zamknutá kalkulačka</h2>
        <p>Žiaci vidia iba kalkulačku a platforma počíta, koľkokrát opustili aplikáciu — aj pri papierovej písomke.</p>
        <button class="btn" data-go="teacher-calc/pomocky-kalkulacka">Spustiť zamknutú kalkulačku</button>
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

  async function drawJoinQr(targetId, url, size) {
    const QR = await ensureQrLib();
    const el = document.getElementById(targetId);
    if (!el) return;
    el.innerHTML = '';
    new QR(el, { text: url, width: size || 220, height: size || 220, correctLevel: QR.CorrectLevel.M });
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
    if (meta0 && meta0.kind === 'calc') { window.MathApp.go('teacher-calc/' + id); return; }
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

  // --- Zamknutá kalkulačka (core/calc.js) -----------------------------------------
  //
  // Učiteľ spustí kanál s kódom, žiaci sa pripoja a vidia iba kalkulačku. Ich
  // aplikácia posiela v správe 'progress' pole `calc` {leaves, awayMs, away,
  // selfEnded}; tu sa z nich skladá tabuľka. Nič sa neukladá (rovnako ako pri
  // živej hodine), CSV je jediný trvalý záznam.

  async function teacherCalc(id) {
    const m = MathPlatform.indexEntry(id);
    if (!m || m.kind !== 'calc' || m.status !== 'ready') { window.MathApp.go('teacher'); return; }
    const code = MathLive.makeCode();
    const fmt = window.MathCalc.formatDuration;
    const joinUrl = `${location.origin}${location.pathname}#join/${encodeURIComponent(id)}/${encodeURIComponent(code)}`;

    app.innerHTML = `
      <div class="card">
        <div class="eyebrow"><span class="live-dot"></span> ZAMKNUTÁ KALKULAČKA</div>
        <h1>${esc(m.topic)}</h1>
        <div class="live-setup-row">
          <div><p><strong>Naskenuj QR kód:</strong></p><div id="joinQr" class="qr-box"></div></div>
          <div>
            <p class="muted">Žiak po naskenovaní zadá iba meno a priezvisko. Potom vidí len kalkulačku a každé opustenie aplikácie sa započíta.</p>
            <p>Kód pre ručné pripojenie:</p>
            <div class="bigcode">${esc(code)}</div>
            <p class="muted small-note">Záloha: platforma → „Máš kód od učiteľa?“ → meno, priezvisko a tento kód.</p>
          </div>
        </div>
        <div id="connect" class="notice">Pripájam živý kanál…</div>
        <div class="row">
          <button class="btn" id="endCalc" disabled>Ukončiť zámok</button>
          <button class="ghost" id="calcCsv">Exportovať CSV</button>
          <button class="ghost" data-go="method/${esc(id)}">Metodická karta</button>
          <button class="ghost" data-go="teacher-unit/${m.year}/${MathPlatform.unitKey(m.unit)}">Späť</button>
        </div>
      </div>
      <div class="card spaced">
        <h2>Opustenia aplikácie</h2>
        <div id="calcSummary" class="muted">Zatiaľ sa nik nepripojil.</div>
        <p class="muted small-note">Červený riadok = žiak je práve mimo aplikácie (údaj môže prísť s oneskorením, kým je mobil v pozadí uspatý — po návrate sa vždy doplní presne). Žltý = už aspoň raz odišiel. Obnovenie stránky sa tiež počíta ako opustenie.</p>
        <div id="calcStudents" class="calc-students"></div>
      </div>`;

    drawJoinQr('joinQr', joinUrl).catch(() => {
      const el = $('#joinQr');
      if (el) el.innerHTML = '<span class="muted">QR kód sa nepodarilo načítať. Použi textový kód vedľa.</span>';
    });

    const students = {};
    let handle = null;
    let ended = false;

    const stateOf = x => {
      const c = x.calc || {};
      if (x.stage === 'done' || ended) return { cls: 'is-ended', text: c.selfEnded ? 'odpojil/a sa sám/sama' : 'zámok ukončený' };
      if (c.away) return { cls: 'is-away', text: '⚠ mimo aplikácie' };
      if (x.stage === 'joined') return { cls: '', text: 'pripojený/á' };
      return { cls: c.leaves ? 'has-leaves' : '', text: 'v kalkulačke' };
    };

    function draw() {
      const arr = Object.values(students);
      const leavers = arr.filter(x => x.calc && x.calc.leaves > 0).length;
      const awayNow = arr.filter(x => x.calc && x.calc.away && x.stage !== 'done').length;
      $('#calcSummary').innerHTML = arr.length
        ? `Pripojení: <strong>${arr.length}</strong> · opustili aplikáciu: <strong>${leavers}</strong>${awayNow ? ` · práve mimo: <strong>${awayNow}</strong>` : ''}`
        : 'Zatiaľ sa nik nepripojil.';
      const rank = x => (x.calc && x.calc.away ? 2 : 0) + (x.calc && x.calc.leaves ? 1 : 0);
      arr.sort((a, b) => rank(b) - rank(a) || ((b.calc && b.calc.leaves) || 0) - ((a.calc && a.calc.leaves) || 0) || String(a.nick || '').localeCompare(String(b.nick || ''), 'sk'));
      $('#calcStudents').innerHTML = arr.length
        ? `<div class="calc-student head"><span>Žiak</span><span>Stav</span><span>Opustenia</span><span>Čas mimo</span></div>` +
          arr.map(x => {
            const c = x.calc || {};
            const st = stateOf(x);
            return `<div class="calc-student ${st.cls}"><strong>${esc(x.nick)}</strong><span class="state">${esc(st.text)}</span><span>${c.leaves ? c.leaves + '×' : '0'}</span><span>${c.awayMs ? fmt(c.awayMs) : '—'}</span></div>`;
          }).join('')
        : '';
    }

    $('#calcCsv').onclick = () => {
      const arr = Object.values(students).sort((a, b) => String(a.nick || '').localeCompare(String(b.nick || ''), 'sk'));
      if (!arr.length) { alert('Zatiaľ nie sú žiadne údaje na export.'); return; }
      const rows = [
        ['Pomôcka', m.topic],
        ['Kód', code],
        ['Dátum a čas exportu', new Date().toLocaleString('sk-SK')],
        [],
        ['Žiak (meno a priezvisko)', 'Stav', 'Počet opustení aplikácie', 'Čas mimo aplikácie (m:ss)'],
        ...arr.map(x => { const c = x.calc || {}; return [x.nick || '', stateOf(x).text, c.leaves || 0, fmt(c.awayMs || 0)]; }),
      ];
      window.MathUtil.downloadCsv(`${window.MathUtil.dateStamp()}-kalkulacka-opustenia.csv`, rows);
    };

    const lesson = () => ({ moduleId: id, reflectOnly: false, selectedActivityIndices: null, calc: true });
    const NO_GRADING = { enabled: false, thresholds: { 1: 90, 2: 75, 3: 50, 4: 30 } };

    try {
      handle = await MathLive.connectAsTeacher(code, {
        onStudent: msg => {
          if (!msg || !msg.nick) return;
          students[msg.nick] = Object.assign({}, students[msg.nick], msg);
          draw();
          // Žiak, ktorý sa vrátil (napr. po obnovení stránky) už po ukončení zámku, o ňom nevie.
          if (ended && msg.stage !== 'done') handle.send('teacher', { action: 'ended' }).catch(() => {});
          // Novopripojenému žiakovi (aj s ručne zadaným kódom) povieme, že ide o kalkulačku.
          if (msg.stage === 'joined') handle.announceGrading(NO_GRADING, false, lesson());
        },
      });
      $('#connect').className = 'notice good';
      $('#connect').innerHTML = '<strong>Kanál je aktívny.</strong> Údaje sa neukladajú do databázy; po odchode zo stránky sa stratia, preto si pred tým stiahni CSV.';
      $('#endCalc').disabled = false;
      handle.announceGrading(NO_GRADING, true, lesson());
      $('#endCalc').onclick = async () => {
        await handle.send('teacher', { action: 'ended' });
        ended = true;
        $('#endCalc').disabled = true;
        $('#connect').className = 'notice';
        $('#connect').innerHTML = '<strong>Zámok je ukončený.</strong> Žiaci môžu mobily odložiť. Prehľad zostáva na obrazovke, aby si ho mohol/mohla exportovať.';
        draw();
      };
    } catch (e) {
      console.error('Realtime chyba:', e);
      $('#connect').className = 'notice bad';
      $('#connect').innerHTML = '<strong>Nepodarilo sa pripojiť živý kanál.</strong> Obnov stránku a skús to znova.';
    }

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

  // Súkromné značky učiteľky pri žiakovi (žiak ich nevidí).
  const MARKS = { wip: ['🟡', 'Rozpracované'], check: ['🔍', 'Treba overiť'], done: ['✅', 'Hotovo'] };

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


  // Analýza celej triedy: úspešnosť v úlohách a krokoch a súhrn sebareflexie.
  // Berie len odovzdané písomky so zvolenou skupinou; body za úlohu zohľadňujú ručné úpravy.
  function examAnalysisHtml(exam, nicks, students, gradeOf) {
    const groupKeys = Object.keys(exam.groups);
    const rows = nicks.filter(n => students[n].stage === 'done').map(n => ({ n, g: gradeOf(n), grp: (students[n].exam || {}).group })).filter(r => r.g);
    if (!rows.length) return '<p class="muted">Analýza sa zobrazí, keď niekto odovzdá písomku.</p>';
    const cls = pct => pct >= 75 ? 'good' : pct >= 50 ? 'mid' : 'low';
    const bar = (pct, text) => `<span class="an-bar ${cls(pct)}"><span class="an-fill" style="width:${Math.max(0, Math.min(100, pct))}%"></span></span><span class="an-pct">${pct} %${text ? ' · ' + text : ''}</span>`;
    const tasks = exam.groups[groupKeys[0]].tasks;
    const taskHtml = tasks.map((t, ti) => {
      let got = 0, max = 0;
      const stepAgg = t.steps.map(() => ({ ok: 0, n: 0, wrongs: 0 }));
      rows.forEach(r => {
        const gt = r.g.tasks.find(x => x.id === t.id);
        if (!gt) return;
        got += gt.points; max += gt.max;
        gt.steps.forEach((st, i) => { if (!stepAgg[i]) return; stepAgg[i].n++; if (st.ok) stepAgg[i].ok++; });
      });
      const pct = max ? Math.round(100 * got / max) : 0;
      const stepsHtml = t.steps.map((s, i) => {
        const labels = groupKeys.map(g => ({ g, l: ((exam.groups[g].tasks.find(x => x.id === t.id) || {}).steps || [])[i] })).filter(x => x.l);
        const same = labels.every(x => x.l.label === labels[0].l.label);
        const label = same ? labels[0].l.label : labels.map(x => x.g + ': ' + x.l.label).join(' · ');
        const a = stepAgg[i];
        const sp = a.n ? Math.round(100 * a.ok / a.n) : 0;
        return `<div class="an-step"><span class="an-step-label">${esc(label)}</span>${bar(sp, a.ok + ' z ' + a.n)}</div>`;
      }).join('');
      const bonus = (exam.bonusTasks || []).includes(t.id);
      return `<details class="an-task"><summary><strong>${esc(t.title)}${bonus ? ' (bonus)' : ''}</strong> ${bar(pct, MathExam.fmtPts(got) + ' z ' + MathExam.fmtPts(max) + ' b')}</summary><div class="an-steps">${stepsHtml}</div></details>`;
    }).join('');

    // Najslabšie a najsilnejšie úlohy (bez bonusu).
    const scored = tasks.filter(t => !(exam.bonusTasks || []).includes(t.id)).map(t => {
      let got = 0, max = 0;
      rows.forEach(r => { const gt = r.g.tasks.find(x => x.id === t.id); if (gt) { got += gt.points; max += gt.max; } });
      return { t, pct: max ? Math.round(100 * got / max) : 0 };
    });
    const sorted = scored.slice().sort((a, b) => a.pct - b.pct);
    const hard = sorted.slice(0, 2).filter(x => x.pct < 75).map(x => `${esc(x.t.title)} (${x.pct} %)`);
    const easy = sorted.slice().reverse().slice(0, 2).filter(x => x.pct >= 75).map(x => `${esc(x.t.title)} (${x.pct} %)`);
    const summary = `<p class="an-summary">Do analýzy vstúpilo <strong>${rows.length}</strong> odovzdaných písomiek.${hard.length ? ` <strong>Najviac problémov:</strong> ${hard.join(', ')}.` : ''}${easy.length ? ` <strong>Najlepšie zvládnuté:</strong> ${easy.join(', ')}.` : ''}</p>`;

    // Sebareflexia
    let selfHtml = '';
    const r = exam.reflection;
    if (r && Array.isArray(r.skills)) {
      const lines = r.skills.map(sk => {
        const c = { green: 0, yellow: 0, red: 0 };
        nicks.forEach(n => { const v = ((students[n].exam || {}).self || {})[sk]; if (c[v] !== undefined) c[v]++; });
        const tot = c.green + c.yellow + c.red;
        if (!tot) return `<div class="an-step"><span class="an-step-label">${esc(sk)}</span><span class="muted">bez odpovedí</span></div>`;
        const w = k => Math.round(100 * c[k] / tot);
        return `<div class="an-step"><span class="an-step-label">${esc(sk)}</span><span class="an-stack" title="Sebareflexia"><span class="an-g" style="width:${w('green')}%"></span><span class="an-y" style="width:${w('yellow')}%"></span><span class="an-r" style="width:${w('red')}%"></span></span><span class="an-pct">🟢${c.green} 🟡${c.yellow} 🔴${c.red}</span></div>`;
      }).join('');
      selfHtml = `<h3>Sebareflexia triedy</h3><p class="muted small-note">Ako sa žiaci sami cítia v jednotlivých častiach. Porovnaj s úspešnosťou vyššie: kde je rozdiel, tam si žiaci buď neveria, alebo svoje chyby nevidia.</p>${lines}`;
    }
    return summary + '<h3>Úspešnosť v úlohách</h3><p class="muted small-note">Rozbaľ úlohu a uvidíš úspešnosť v jednotlivých krokoch postupu.</p>' + taskHtml + selfHtml;
  }

  function gradeLine(graded, grading) {
    if (!graded) return '—';
    const g = grading.enabled ? MathScore.gradeForPercent(graded.percent, grading) : '';
    return `${MathExam.fmtPts(graded.total + graded.bonus)} / ${MathExam.fmtPts(graded.max)} b · ${graded.percent} %${g ? ` · známka <strong>${g}</strong>` : ''}`;
  }

  async function teacherExam(id, code, idsParam) {
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
    return examRun(id, m, exam, code, idsParam);
  }

  function examChooser(id, m, exam) {
    const all = examStoreRead();
    const mine = Object.entries(all).filter(([, s]) => s && s.moduleId === id).sort((a, b) => (b[1].startedAt || 0) - (a[1].startedAt || 0));
    const ptsOf = t => t.steps.reduce((k, s) => k + s.points, 0);
    const isBonus = t => (exam.bonusTasks || []).includes(t.id);
    const allIds = exam.groups.A.tasks.map(t => t.id);
    const pickedIds = () => $$('.examTaskCheck').filter(c => c.checked).map(c => c.dataset.id);
    // Výber sa nesie do tlače v URL; všetky úlohy = bez parametra.
    const idsParam = () => { const p = pickedIds(); return p.length && p.length < allIds.length ? p.join(',') : '-'; };
    const pendingCode = MathLive.makeCode();
    const chosenCode = () => { const c = (($('#examCode') || {}).value || '').trim().toUpperCase(); return CODE_RE.test(c) ? c : ''; };
    const openPrint = mode => window.open(`${location.origin}${location.pathname}#exam-print/${encodeURIComponent(id)}/${mode}/${idsParam()}/${encodeURIComponent(chosenCode())}`, '_blank');
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
        <div class="field">
          <label for="examName">Názov písomky (nepovinný, napr. „2.B – Množiny“)</label>
          <input id="examName" type="text" maxlength="80" placeholder="trieda, téma…" autocomplete="off">
        </div>
        <div class="field">
          <label for="examCode">Kód písomky</label>
          <input id="examCode" type="text" maxlength="6" value="${esc(pendingCode)}" autocomplete="off" spellcheck="false" style="text-transform:uppercase;letter-spacing:.2em;max-width:10em">
          <p class="muted small-note">Kód sa vytlačí na zadanie (s QR kódom) a písomku spustíš s ním. Môžeš si ho pripraviť a vytlačiť na jednom počítači a spustiť na druhom: na druhom zadaj ten istý kód a zaškrtni tie isté úlohy. Žiaci aj ich doterajšie odpovede sa pripoja sami.</p>
        </div>
        <div class="row">
          <button class="btn" id="examNew">Spustiť písomku s týmto kódom</button>
          <button class="ghost" id="examPrintA">Tlač zadania ${Object.keys(exam.groups).length > 1 ? 'A' : ''}</button>
          ${exam.groups.B ? '<button class="ghost" id="examPrintB">Tlač zadania B</button>' : ''}
          <button class="ghost" id="examPrintKey">Tlač kľúča</button>
          <button class="ghost" data-go="method/${m.id}">Metodická karta</button>
        </div>
      </div>
      <div class="card spaced">
        <h2>Rozpracované a uložené písomky</h2>
        ${mine.length ? `<div class="exam-saved-list">${mine.map(([c, s]) => `
          <div class="exam-saved">
            <div><strong>${s.name ? esc(s.name) + ' · ' : ''}${new Date(s.startedAt || s.at || 0).toLocaleString('sk-SK')}</strong> · kód <code>${esc(c)}</code><br>
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
    $$('.examTaskCheck').forEach(c => { c.onchange = updatePick; });
    $('#examPickAll').onclick = () => { $$('.examTaskCheck').forEach(c => { c.checked = true; }); updatePick(); };
    $('#examPickNone').onclick = () => { $$('.examTaskCheck').forEach(c => { c.checked = false; }); updatePick(); };
    updatePick();

    $('#examNew').onclick = () => {
      const ids = pickedIds();
      if (!ids.length) return;
      const code = chosenCode();
      if (!code) { alert('Kód musí mať 6 znakov (písmená A–Z a číslice 2–9).'); return; }
      const store = examStoreRead();
      if (store[code] && store[code].moduleId !== id) { alert('Tento kód už používa iná písomka. Zvoľ iný.'); return; }
      if (store[code]) { window.MathApp.go(`teacher-exam/${id}/${code}`); return; }
      store[code] = { moduleId: id, name: $('#examName').value.trim().slice(0, 80), startedAt: Date.now(), status: 'running', students: {}, overrides: {}, taskIds: ids.length < allIds.length ? ids : null, at: Date.now() };
      examStoreWrite(store);
      window.MathApp.go(`teacher-exam/${id}/${code}`);
    };
    $('#examPrintA').onclick = () => openPrint('A');
    if ($('#examPrintB')) $('#examPrintB').onclick = () => openPrint('B');
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

  async function examRun(id, m, exam, code, idsParam) {
    const store0 = examStoreRead();
    const saved = store0[code] && store0[code].moduleId === id ? store0[code] : null;
    const sess = {
      moduleId: id,
      name: saved && saved.name ? String(saved.name) : '',
      startedAt: saved ? saved.startedAt : Date.now(),
      status: saved ? saved.status : 'running',
      overrides: saved && saved.overrides ? saved.overrides : {},
      marks: saved && saved.marks ? saved.marks : {},
      taskIds: saved && Array.isArray(saved.taskIds) && saved.taskIds.length ? saved.taskIds
        : (() => { // prenos z iného počítača: výber úloh z odkazu
            const known = new Set(exam.groups.A.tasks.map(t => t.id));
            const ids = String(idsParam || '').split(',').filter(x => known.has(x));
            return ids.length && ids.length < known.size ? ids : null;
          })(),
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
    let markFilter = 'all';

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
        <div class="field">
          <label for="examRunName">Názov písomky (pre teba a do CSV)</label>
          <input id="examRunName" type="text" maxlength="80" placeholder="napr. 2.B – Množiny" autocomplete="off" value="${esc(sess.name)}">
        </div>
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
        <details class="spaced"><summary>Prenos na iný počítač</summary>
          <p class="muted small-note">Ak chceš písomku sledovať na druhom notebooku, otvor na ňom tento odkaz (pošli si ho napr. e-mailom). Žiaci a ich odpovede sa tam načítajú sami. Ručne upravené body a záloha ostávajú v prehliadači, kde si ich zadala, preto CSV exportuj z toho počítača, na ktorom opravuješ.</p>
          <input id="examTransfer" type="text" readonly value="${esc(location.origin + location.pathname + '#teacher-exam/' + encodeURIComponent(id) + '/' + encodeURIComponent(code) + (sess.taskIds ? '/' + sess.taskIds.join(',') : ''))}" onclick="this.select()" style="width:100%">
        </details>
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
          <button class="ghost" id="examPrintA">Tlač zadania ${Object.keys(exam.groups).length > 1 ? 'A' : ''}</button>
          ${exam.groups.B ? '<button class="ghost" id="examPrintB">Tlač zadania B</button>' : ''}
          <button class="ghost" id="examPrintKey">Tlač kľúča</button>
        </div>
        <p class="muted small-note">Priebeh písomky sa zálohuje v tomto prehliadači. Export CSV obsahuje body, odpovede žiakov po krokoch aj počet opustení aplikácie.</p>
      </div>
      <div class="card spaced">
        <div class="eyebrow">ANALÝZA TRIEDY</div>
        <h2>Ako sa darilo triede</h2>
        <div id="analysis"></div>
      </div>
      <div class="card spaced">
        <h2>Opravovanie</h2>
        <div id="summary" class="muted">Zatiaľ bez výsledkov.</div>
        <p class="muted small-note">Rozbaľ žiaka a uvidíš každý krok s jeho odpoveďou a správnou odpoveďou. Pri úlohe môžeš body upraviť ručne (napr. uznať následnú chybu); prázdne políčko = automatické body.</p>
        <div class="row exam-mark-filter" id="markFilter" role="group" aria-label="Filter žiakov podľa značky"></div>
        <div id="students" class="exam-students"></div>
      </div>`;

    drawJoinQr('joinQr', joinUrl).catch(e => {
      console.error('QR chyba:', e);
      const el = $('#joinQr');
      if (el) el.innerHTML = '<span class="muted">QR kód sa nepodarilo načítať. Použi textový kód vedľa.</span>';
    });
    $('#examSaveWarn').hidden = saveOk;
    $('#examRunName').oninput = e => { sess.name = e.target.value.trim().slice(0, 80); persistSoon(); };

    const openPrint = mode => window.open(`${location.origin}${location.pathname}#exam-print/${encodeURIComponent(id)}/${mode}/${sess.taskIds ? sess.taskIds.join(',') : '-'}/${encodeURIComponent(code)}`, '_blank');
    $('#examPrintA').onclick = () => openPrint('A');
    if ($('#examPrintB')) $('#examPrintB').onclick = () => openPrint('B');
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
      // Zachovaj otvorené úlohy (vnorené <details>) a focus v políčku na body –
      // inak by sa po prvom kliku na šípku hore/dole všetko prekreslilo a zavrelo.
      const openTasks = new Set();
      let focusKey = null;
      const root = $('#students');
      if (root) {
        root.querySelectorAll('details.exam-student').forEach(sd => {
          sd.querySelectorAll('details.exam-result-task').forEach((td, i) => { if (td.open) openTasks.add(sd.dataset.nick + '\u0000' + i); });
        });
        const a = document.activeElement;
        if (a && a.classList && a.classList.contains('exam-ov')) focusKey = { nick: a.dataset.nick, task: a.dataset.task };
      }
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
      const anEl = $('#analysis');
      if (anEl) {
        const openAn = new Set([...anEl.querySelectorAll('details.an-task')].map((d, i) => d.open ? i : -1).filter(i => i >= 0));
        anEl.innerHTML = examAnalysisHtml(exam, nicks, students, gradeOf);
        anEl.querySelectorAll('details.an-task').forEach((d, i) => { if (openAn.has(i)) d.open = true; });
      }
      const markOf = n => (sess.marks[n] && sess.marks[n].state) || '';
      const cnt = { all: nicks.length, none: 0, wip: 0, check: 0, done: 0 };
      nicks.forEach(n => { cnt[markOf(n) || 'none']++; });
      const mf = $('#markFilter');
      if (mf) {
        const opts = [['all', 'Všetci'], ['none', 'Bez značky'], ['wip', MARKS.wip[0] + ' Rozpracované'], ['check', MARKS.check[0] + ' Treba overiť'], ['done', MARKS.done[0] + ' Hotovo']];
        mf.innerHTML = opts.map(([k, l]) => `<button type="button" class="ghost${markFilter === k ? ' selected' : ''}" data-f="${k}">${l} (${cnt[k]})</button>`).join('');
      }
      $('#students').innerHTML = graded.filter(([nick]) => markFilter === 'all' || (markFilter === 'none' ? !markOf(nick) : markOf(nick) === markFilter)).map(([nick, g]) => {
        const st = students[nick];
        const mk = sess.marks[nick] || {};
        const ex = st.exam || {};
        return `<details class="exam-student" data-nick="${esc(nick)}" ${openNicks.has(nick) ? 'open' : ''}>
          <summary>
            <strong>${esc(nick)}</strong> ${MARKS[mk.state] ? `<span title="${esc(MARKS[mk.state][1])}">${MARKS[mk.state][0]}</span>` : ''}${mk.note ? '<span title="Má poznámku">📝</span>' : ''}
            <span>${ex.group ? 'skupina ' + esc(ex.group) : 'skupina —'}</span>
            <span>${esc(examStageText(st))} ${examSelfBadge(exam, ex.self)}</span>
            <span title="Koľkokrát žiak opustil aplikáciu">${ex.leaves ? '⚠ opustil ' + (Number(ex.leaves) || 0) + '×' + (ex.awayMs ? ' (' + window.MathCalc.formatDuration(ex.awayMs) + ')' : '') : ''}${ex.away ? ' · práve mimo' : ''}</span>
            <span title="Okno stratilo zameranie, ale stránka zostala viditeľná (plávajúce okno, rozdelená obrazovka, notifikácia)">${ex.blurs ? '◐ okno nezamerané ' + (Number(ex.blurs) || 0) + '×' + (ex.blurMs ? ' (' + window.MathCalc.formatDuration(ex.blurMs) + ')' : '') : ''}${ex.blurAway ? ' · práve nezamerané' : ''}</span>
            <span>${gradeLine(g, grading)}</span>
          </summary>
          <div class="exam-student-body">
            <div class="exam-mark-row" data-nick="${esc(nick)}">
              <span class="muted">Značka (vidíš len ty):</span>
              ${Object.entries(MARKS).map(([k, [ic, lb]]) => `<button type="button" class="ghost exam-mark${mk.state === k ? ' selected' : ''}" data-nick="${esc(nick)}" data-mark="${k}">${ic} ${lb}</button>`).join('')}
              <input type="text" class="exam-note" data-nick="${esc(nick)}" maxlength="200" placeholder="Poznámka (napr. spýtať sa na úlohu 5)" value="${esc(mk.note || '')}">
            </div>
            ${examSelfHtml(exam, ex.self)}${g ? `<div class="exam-results">${MathExam.resultTasksHtml(g, t => overrideInput(nick, t))}</div>` : '<p class="muted">Žiak ešte nevybral skupinu alebo neodoslal odpovede.</p>'}</div>
        </details>`;
      }).join('');
      $('#students').querySelectorAll('details.exam-student').forEach(sd => {
        sd.querySelectorAll('details.exam-result-task').forEach((td, i) => { if (openTasks.has(sd.dataset.nick + '\u0000' + i)) td.open = true; });
      });
      if (focusKey) {
        const el = [...$('#students').querySelectorAll('input.exam-ov')].find(x => x.dataset.nick === focusKey.nick && x.dataset.task === focusKey.task);
        if (el) el.focus();
      }
    }

    // Prekreslenie počas písania do políčka na body by žiakovi (učiteľke) zobralo
    // focus – odložíme ho, kým políčko neopustí.
    function scheduleDraw() {
      clearTimeout(drawTimer);
      drawTimer = setTimeout(function tick() {
        const a = document.activeElement;
        if (a && a.classList && (a.classList.contains('exam-ov') || a.classList.contains('exam-note'))) { drawTimer = setTimeout(tick, 600); return; }
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

    studentsEl.addEventListener('click', e => {
      const b = e.target.closest && e.target.closest('button.exam-mark');
      if (!b) return;
      e.preventDefault();
      const nick = b.dataset.nick, st = b.dataset.mark;
      const cur = sess.marks[nick] || {};
      sess.marks[nick] = Object.assign({}, cur, { state: cur.state === st ? '' : st });
      persist();
      draw();
    });
    studentsEl.addEventListener('change', e => {
      const el = e.target;
      if (!el.classList || !el.classList.contains('exam-note')) return;
      const nick = el.dataset.nick;
      sess.marks[nick] = Object.assign({}, sess.marks[nick] || {}, { note: el.value.trim().slice(0, 200) });
      persist();
      draw();
    });
    $('#markFilter').addEventListener('click', e => {
      const b = e.target.closest && e.target.closest('button[data-f]');
      if (!b) return;
      markFilter = b.dataset.f;
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
      examCsv(m, code, exam, students, sess.overrides, grading, sess.name, sess.marks);
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
      handle.send('teacher', { action: 'resend' }).catch(() => {});

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

  function examCsv(m, code, exam, students, overrides, grading, name, marks) {
    marks = marks || {};
    const nicks = Object.keys(students).sort((a, b) => a.localeCompare(b, 'sk'));
    if (!nicks.length) { alert('Zatiaľ nie sú žiadne výsledky na export.'); return; }
    const tasksA = exam.groups.A.tasks;
    const selfSkills = (exam.reflection && exam.reflection.skills) || [];
    const head = ['Žiak (meno a priezvisko)', 'Skupina', 'Stav', 'Body (bez bonusu)', 'Bonus', 'Maximum', 'Percentá', ...(grading.enabled ? ['Známka'] : []), 'Opustenia aplikácie', 'Čas mimo aplikácie', 'Okno nezamerané (počet)', 'Okno nezamerané (čas)', 'Značka učiteľky', 'Poznámka učiteľky',
      ...selfSkills.map(sk => `Sebahodnotenie: ${sk}`)];
    tasksA.forEach((t, i) => {
      head.push(`Úloha ${i + 1}: body`);
      t.steps.forEach((s, j) => head.push(`Úloha ${i + 1}, krok ${j + 1} (${s.points} b)`));
    });
    const rows = [
      ['Písomka', exam.title],
      ...(name ? [['Názov', name]] : []),
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
        ex.awayMs ? window.MathCalc.formatDuration(ex.awayMs) : '',
        ex.blurs || 0,
        ex.blurMs ? window.MathCalc.formatDuration(ex.blurMs) : '',
        (MARKS[(marks[nick] || {}).state] || [])[1] || '', (marks[nick] || {}).note || '',
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
    const safe = window.MathUtil.asciiSlug(name || exam.title || 'pisomka', 40);
    window.MathUtil.downloadCsv(`${window.MathUtil.dateStamp()}-pisomka-${safe}.csv`, rows);
  }

  // Rozdelí zadanie skupiny na dve strany A4 (jeden list obojstranne) a voľné miesto pod úlohami
  // rozdelí úmerne bodom. Meria skutočnú výšku vykreslených úloh pri šírke 186 mm a 14px písme
  // (rovnaké ako pri tlači), preto sa prispôsobí aj výberu úloh. Vráti zoznam varovaní.
  function fitExamPrint() {
    const MM = 96 / 25.4, PAGE = 270 * MM, MIN_PER_PT = 3 * MM;
    const warns = [];
    document.querySelectorAll('.exam-print-group').forEach(sec => {
      const title = sec.querySelector('.print-sheet-title');
      const tasks = [...sec.querySelectorAll('.exam-print-task')];
      const mb = el => parseFloat(getComputedStyle(el).marginBottom) || 0;
      tasks.forEach(t => { t.style.breakBefore = ''; t.style.pageBreakBefore = ''; const sp = t.querySelector('.exam-print-space'); if (sp) sp.style.height = '0px'; });
      const head = title.offsetHeight + mb(title);
      const hs = tasks.map(t => t.offsetHeight + mb(t));
      const pts = tasks.map(t => { const sp = t.querySelector('.exam-print-space'); return sp ? (Number(sp.dataset.pts) || 1) : 0; });
      const sum = (arr, from, to) => arr.slice(from, to).reduce((n, x) => n + x, 0);
      const n = tasks.length;
      let best = null;
      for (let j = n > 1 ? 1 : n; j <= (n > 1 ? n - 1 : n); j++) {
        const free1 = PAGE - head - sum(hs, 0, j), free2 = PAGE - sum(hs, j, n);
        if (free1 < 0 || (j < n && free2 < 0)) continue;
        const w1 = sum(pts, 0, j), w2 = sum(pts, j, n);
        const r1 = w1 ? free1 / w1 : Infinity, r2 = j < n && w2 ? free2 / w2 : Infinity;
        const score = Math.min(r1, r2);
        if (!best || score > best.score) best = { j, score, r1, r2 };
      }
      const name = sec.querySelector('.print-eyebrow') ? sec.querySelector('.print-eyebrow').textContent.split('·').pop().trim() : '';
      if (!best) { warns.push(`Zadanie (${name}) sa nezmestí na jeden list A4 obojstranne ani bez voľného miesta. Odznač niektoré úlohy.`); return; }
      if (best.j < n) tasks[best.j].style.cssText += ';break-before:page;page-break-before:always';
      tasks.forEach((t, i) => {
        const sp = t.querySelector('.exam-print-space');
        if (sp) sp.style.height = Math.max(0, pts[i] * (i < best.j ? best.r1 : best.r2)) + 'px';
      });
      if (best.score < MIN_PER_PT) warns.push(`Zadanie (${name}) má málo voľného miesta na riešenie (menej než 3 mm na bod). Zváž odznačenie niektorých úloh.`);
    });
    return warns;
  }

  // Tlač zadania (skupina A / B / obe) alebo kľúča. Beží v nových kartách
  // otvorených z obrazovky písomky; potrebuje token učiteľky (kľúč je na serveri).
  async function examPrint(id, mode, idsParam, code) {
    code = CODE_RE.test(String(code || '').toUpperCase()) ? String(code).toUpperCase() : '';
    const m = id && MathPlatform.indexEntry(id);
    if (!m || m.kind !== 'exam') { window.MathApp.go('teacher'); return; }
    let exam;
    try { exam = await MathExam.fetchExam(id); }
    catch (e) { app.innerHTML = `<div class="card"><h2>Písomku sa nepodarilo načítať</h2><p>${esc(e.message)}</p></div>`; return; }

    if (idsParam && idsParam !== '-') exam = MathExam.filterExam(exam, String(idsParam).split(',').filter(Boolean));
    const isBonus = t => (exam.bonusTasks || []).includes(t.id);
    const ptsOf = t => t.steps.reduce((n, s) => n + s.points, 0);
    // Krok sa vytlačí ako podúloha, ak je označený `print: true` (obsahuje zadanie: interval, otázku) alebo ak to chce celá písomka (`printStepLabels`).
    const printedStep = s => s.kind !== 'choice' && (exam.printStepLabels || s.print === true);
    const groupSheet = (g, i) => {
      const tasks = exam.groups[g].tasks;
      const max = tasks.filter(t => !isBonus(t)).reduce((n, t) => n + ptsOf(t), 0);
      // Voľný priestor pod úlohami sa dopočíta po vykreslení (fitExamPrint): zmeria sa skutočná výška zadaní a voľné miesto sa rozdelí podľa bodov tak, aby skupina vyšla presne na jeden list A4 (obe strany).
      return `<section class="exam-print-group" style="${i ? 'break-before: page; page-break-before: always' : ''}">
        <div class="print-sheet-title">
          <div class="print-eyebrow">${esc(m.unit)} · ${esc(m.lesson)} · skupina ${esc(g)}</div>
          <h1>${esc(exam.title)}</h1>
          <div class="print-name-line"><span>Meno a priezvisko:</span><span class="print-blank-line"></span><span>Trieda:</span><span class="print-blank-line short"></span><span>Dátum:</span><span class="print-blank-line short"></span></div>
          <p class="muted">Maximum ${max} b${tasks.some(isBonus) ? ' + bonus' : ''}${exam.minutes ? ` · ${exam.minutes} min` : ''}. Postup píš do vyhradeného miesta pri úlohe.</p>
          ${code ? `<div class="exam-print-join">
            <div id="printQr_${esc(g)}" class="exam-print-qr"></div>
            <div><strong>Hneď na začiatku sa prihlás do online písomky:</strong> naskenuj QR kód alebo zadaj kód písomky <span class="exam-print-code">${esc(code)}</span>. Výsledky jednotlivých krokov zapisuj do aplikácie priebežne, počas riešenia, nie až na konci. Mobil ponechaj na lavici s otvorenou aplikáciou; učiteľka vidí, koľkokrát aplikáciu opustíš.</div>
          </div>` : ''}
        </div>
        ${tasks.map(t => `<div class="print-task exam-print-task">
          ${String(t.question).includes('\n')
            ? `<div class="print-q"><span class="print-task-num">${esc(t.title)}</span> (${MathExam.fmtPts(ptsOf(t))} b)</div><div class="exam-print-multiline">${esc(t.question)}</div>`
            : `<div class="print-q"><span class="print-task-num">${esc(t.title)}</span> (${MathExam.fmtPts(ptsOf(t))} b) ${esc(t.question)}</div>`}
          ${t.note ? `<p class="muted">${esc(t.note)}</p>` : ''}
          ${t.steps.some(printedStep) ? `<ol class="exam-print-steps">${t.steps.filter(printedStep).map(s => `<li>${esc(s.label)}</li>`).join('')}</ol>` : ''}
          ${t.steps.every(s => s.kind === 'choice') ? '' : `<div class="exam-print-space" data-pts="${ptsOf(t)}" aria-hidden="true"></div>`}
          ${(() => {
            const big = t.steps.find(s => s.kind === 'choice' && s.options.length > 4);
            return big ? `<div class="exam-print-options">${big.options.map((o, i) => `<div><strong>${i + 1}.</strong> ${esc(o)}</div>`).join('')}</div>` : '';
          })()}
          ${t.steps.map(s => {
            const pts = `<em>(${MathExam.fmtPts(s.points)} b)</em>`;
            if (s.kind === 'choice' && s.options.length <= 4) return `<div class="print-answer-line"><span>${esc(s.label)} ${pts}:</span><span class="exam-print-opts">${s.options.map(o => `<span>${esc(o)}</span>`).join('')}</span></div>`;
            if (s.kind === 'choice') return `<div class="print-answer-line"><span>${esc(s.label)} ${pts}, číslo možnosti:</span><span class="print-blank-line short"></span></div>`;
            return '';
          }).join('')}
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
      <p class="notice bad no-print" id="printFitWarn" hidden></p>
      <p class="print-hint no-print">Tip: v dialógu tlače zruš začiarknutie „Hlavičky a päty“, aby sa na stranu nepridávala adresa a dátum.</p>
      <article class="print-sheet${mode === 'key' ? '' : ' exam-print-sheet'}">${body || '<p>Neznáma skupina.</p>'}</article>`;
    if (code && mode !== 'key') {
      // Pri písomke s viac skupinami nesie QR kód aj skupinu z listu, takže žiak ju nevyberá.
      const multi = Object.keys(exam.groups).length > 1;
      groups.forEach(g => {
        const joinUrl = `${location.origin}${location.pathname}#join/${encodeURIComponent(id)}/${encodeURIComponent(code)}${multi ? '/group/' + encodeURIComponent(g) : ''}`;
        drawJoinQr('printQr_' + g, joinUrl, 110).catch(() => {});
      });
    }
    if (mode !== 'key') {
      document.documentElement.classList.add('exam-print-mode');
      const fit = () => { const w = fitExamPrint(); const el = $('#printFitWarn'); if (el) { el.hidden = !w.length; el.innerHTML = w.map(esc).join('<br>'); } };
      fit();
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
    }
    $('#printBtn').onclick = () => window.print();
    $('#examPrintClose').onclick = () => { window.close(); window.MathApp.go(`teacher-exam/${id}`); };
    return () => document.documentElement.classList.remove('exam-print-mode');
  }

  window.MathViews.teacher = { login, teacher, teacherYear, teacherUnit, method, teacherLive, teacherCalc, teacherExam, examPrint };
})();
