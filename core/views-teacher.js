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
  if (!window.MathUtil || !window.MathPlatform || !window.MathUI || !window.MathAuth || !window.MathLive || !window.MathScore || !window.MathViews || !window.MathViews.student) {
    throw new Error('core/views-teacher.js: chýba niektorý z core/*.js pred ním.');
  }
  const { esc, $, $$ } = window.MathUtil;
  const MathPlatform = window.MathPlatform;
  const MathUI = window.MathUI;
  const MathAuth = window.MathAuth;
  const MathLive = window.MathLive;
  const MathScore = window.MathScore;

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

  // Renders the pupil list + summary. `students` keys are nicks — arbitrary
  // text a participant typed on the join screen, so esc() here is not
  // optional: anyone with the projected join code can pick a nick containing
  // markup, and this screen (and the CSV export) is the only place it's ever
  // displayed.
  function drawStudents(students, grading) {
    grading = grading || MathScore.loadGrading();
    const arr = Object.values(students);
    const done = arr.filter(x => x.stage === 'done');
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

    $('#students').innerHTML = arr
      .slice()
      .sort((x, y) => String(x.nick || '').localeCompare(String(y.nick || ''), 'sk'))
      .map(x => {
        const pct = Number.isFinite(Number(x.percent)) ? Number(x.percent) : null;
        const grade = grading.enabled && pct !== null ? MathScore.gradeForPercent(pct, grading) : '';
        return `<div class="student">
          <strong>${esc(x.nick)}</strong>
          <span>${x.stage === 'done' ? 'Hotovo' : x.stage === 'joined' ? 'Pripojený' : `${x.question || 0}/${x.total || 0}`}</span>
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
      ['Žiak / nick', 'Stav', 'Body (XP)', 'Maximum', 'Percentá', ...(grading.enabled ? ['Známka'] : []), 'Postup',
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
    id = (meta0 && meta0.status === 'ready') ? id : MathPlatform.defaultModuleId();
    const m = MathPlatform.indexEntry(id);
    const code = MathLive.makeCode();

    let mod = null;
    try { mod = await MathPlatform.loadModule(id); } catch (_) { mod = null; }

    let grading = MathScore.loadGrading();
    const joinUrl = `${location.origin}${location.pathname}#join/${encodeURIComponent(id)}/${encodeURIComponent(code)}`;

    app.innerHTML = `
      <div class="card">
        <div class="eyebrow"><span class="live-dot"></span> ŽIVÁ HODINA</div>
        <h1>${esc(m.topic)}</h1>
        <div class="live-setup-row">
          <div><p><strong>Naskenuj QR kód:</strong></p><div id="joinQr" class="qr-box"></div></div>
          <div>
            <p class="muted">Po naskenovaní sa otvorí správny modul aj táto hodina. Žiak zadá už iba nick.</p>
            <p>Kód pre ručné pripojenie:</p>
            <div class="bigcode">${esc(code)}</div>
            <p class="muted">Záloha: žiak môže otvoriť platformu → „Mám kód hodiny“ → zadať nick a tento kód.</p>
          </div>
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
        <div id="summary" class="muted">Zatiaľ bez výsledkov.</div>
        <div id="students" class="live-list"></div>
      </div>
    `;

    drawJoinQr('joinQr', joinUrl).catch(e => {
      console.error('QR chyba:', e);
      const el = $('#joinQr');
      if (el) el.innerHTML = '<span class="muted">QR kód sa nepodarilo načítať. Použi textový kód vedľa.</span>';
    });

    let students = {};
    let handle = null;

    const readGradingFromForm = () => ({
      enabled: $('#gradingEnabled').checked,
      thresholds: { 1: Number($('#grade1').value), 2: Number($('#grade2').value), 3: Number($('#grade3').value), 4: Number($('#grade4').value) },
    });
    $('#gradingEnabled').onchange = () => { $('#gradingFields').hidden = !$('#gradingEnabled').checked; };

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
      drawStudents(students, grading);
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
          drawStudents(students, grading);
          // A newly-joined student doesn't yet know whether today's lesson
          // is graded — let them know right away.
          if (msg.stage === 'joined') handle.announceGrading(grading);
        },
      });
      $('#connect').className = 'notice good';
      $('#connect').innerHTML = '<strong>Kanál je aktívny.</strong> Výsledky sa neukladajú do databázy.';
      $('#endLive').disabled = false;
      handle.announceGrading(grading, true);
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

  window.MathViews.teacher = { login, teacher, teacherYear, teacherUnit, method, teacherLive };
})();
