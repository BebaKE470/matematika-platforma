// core/views-student.js — window.MathViews.student
//
// The student-facing screens: home, the catalog (year → unit → topic), a
// topic's intro screen, the join-a-live-lesson form, and the generic error
// screen. The activity player itself (module/play) lives in core/session.js
// since it's session state, not a "screen" in the navigation sense — this
// file only starts and stops sessions, it doesn't run them.
(function () {
  if (!window.MathUtil || !window.MathPlatform || !window.MathUI || !window.MathSession || !window.MathLive || !window.MathScore) {
    throw new Error('core/views-student.js: chýba niektorý z core/*.js pred ním.');
  }
  const { esc, $ } = window.MathUtil;
  const MathPlatform = window.MathPlatform;
  const MathUI = window.MathUI;
  const MathSession = window.MathSession;
  const MathLive = window.MathLive;
  const MathScore = window.MathScore;

  const app = document.querySelector('#app');
  function go(hash) { window.MathApp.go(hash); }

  async function startAndPlay(id, extra) {
    await MathSession.start(id, extra);
    go('play');
  }

  function home() {
    const labels = {
      1: 'Výroky · množiny · čísla · výrazy · funkcie',
      2: 'Funkcie · rovnice · nerovnice · geometria',
      3: 'Goniometria · geometria · kombinatorika · pravdepodobnosť · štatistika',
    };
    app.innerHTML = `
      <section class="student-hero">
        <div class="hero-copy">
          <div class="eyebrow">MATEMATIKA · INTERAKTÍVNE MODULY</div>
          <h1>Rozumej súvislostiam.<br><span>Nielen postupom.</span></h1>
          <p>Objavuj vzťahy, overuj svoje úvahy, pracuj s grafmi a modelmi a formuluj matematické závery.</p>
          <div class="learning-cycle" aria-label="Spôsob práce"><span>Skús</span><i>→</i><span>Over</span><i>→</i><span>Zapíš</span><i>→</i><span>Vysvetli</span></div>
        </div>
        <div class="math-visual" aria-hidden="true">
          <svg viewBox="0 0 430 300" role="img">
            <g class="mv-grid"><path d="M35 35V265M85 35V265M135 35V265M185 35V265M235 35V265M285 35V265M335 35V265M385 35V265M35 65H405M35 115H405M35 165H405M35 215H405M35 265H405"/></g>
            <path class="mv-axis" d="M35 165H405M185 35V265"/>
            <path class="mv-curve" d="M45 232 C90 228 110 205 135 165 C162 120 188 92 220 105 C252 118 267 175 300 185 C333 195 360 151 398 72"/>
            <circle class="mv-circle" cx="310" cy="102" r="54"/>
            <path class="mv-radius" d="M310 102L350 66"/>
            <circle class="mv-point" cx="350" cy="66" r="5"/>
            <text x="48" y="58">f(x)</text><text x="326" y="151">π</text><text x="197" y="157">0</text><text x="270" y="46">x² + y² = 1</text>
          </svg>
        </div>
      </section>
      <section class="home-section">
        <div class="home-section-head">
          <div><div class="eyebrow">SAMOSTATNÁ PRÁCA</div><h2>Vyber si ročník</h2></div>
          <p>Pokračuj cez tematický celok ku konkrétnej téme.</p>
        </div>
        <div class="home-years">${[1, 2, 3].map(y => {
          const mods = MathPlatform.yearModules(y), units = MathPlatform.unitsForYear(y);
          return `<button class="home-year" data-go="catalog/year/${y}">
            <span class="home-year-no">0${y}</span>
            <strong>${y}. ročník</strong>
            <small>${labels[y]}</small>
            <span class="home-year-meta">${MathPlatform.readyCount(mods)} hotové · ${MathPlatform.placeholderCount(mods)} TODO · ${units.length} tematických celkov <b>→</b></span>
          </button>`;
        }).join('')}</div>
      </section>
      <section class="join-strip">
        <div><div class="eyebrow">SPOLOČNÁ HODINA</div><h2>Máš kód od učiteľa?</h2><p>Zadaj kód hodiny a pripoj sa k spoločnej aktivite.</p></div>
        <button class="btn" data-go="join">Pripojiť sa k hodine</button>
      </section>
    `;
  }

  function catalog() {
    app.innerHTML = `
      ${MathUI.breadcrumbs([{ label: 'Katalóg', plain: true }])}
      <h1>Vyber ročník</h1>
      <p class="muted">Témy sú usporiadané podľa tematického plánu. Najprv ročník, potom tematický celok a až potom konkrétna téma.</p>
      ${MathUI.yearGrid('catalog/year')}
    `;
  }

  function catalogYear(year) {
    year = Number(year);
    if (![1, 2, 3].includes(year)) { catalog(); return; }
    app.innerHTML = `
      ${MathUI.breadcrumbs([{ label: 'Katalóg', go: 'catalog' }, { label: `${year}. ročník` }])}
      <h1>${year}. ročník</h1>
      <p class="muted">Vyber tematický celok. Poradie sa riadi registrom podľa tematického plánu.</p>
      ${MathUI.unitList(year, 'catalog/unit')}
    `;
  }

  function catalogUnit(year, key) {
    year = Number(year);
    const unit = MathPlatform.unitFromKey(key);
    const mods = MathPlatform.modulesForUnit(year, unit);
    if (!mods.length) { catalogYear(year); return; }
    app.innerHTML = `
      ${MathUI.breadcrumbs([{ label: 'Katalóg', go: 'catalog' }, { label: `${year}. ročník`, go: `catalog/year/${year}` }, { label: unit }])}
      ${MathUI.unitHeading(`${year}. ROČNÍK · TEMATICKÝ CELOK`, unit, `${mods.length} ${mods.length === 1 ? 'téma' : 'tém'}`)}
      <div class="topic-list">${mods.map(m => MathUI.topicRow(m)).join('')}</div>
    `;
  }

  async function moduleStart(id) {
    try {
      const mod = await MathSession.load(id);
      const m = MathPlatform.indexEntry(id);
      if (!m) { home(); return; }

      if (m.status === 'placeholder') {
        app.innerHTML = `
          ${MathUI.backRow(`catalog/unit/${m.year}/${MathPlatform.unitKey(m.unit)}`, m.unit)}
          <div class="card">
            <div class="eyebrow">TODO PLACEHOLDER · ${esc(m.unit)} · ${esc(m.lesson)}</div>
            <h1>${esc(mod.student.title)}</h1>
            <h2>${esc(mod.student.subtitle)}</h2>
            <p>${esc(mod.student.intro)}</p>
            <div class="notice"><strong>Technické prepojenie je hotové.</strong> Súbor má správne ID aj cestu v registry.js. Pri ďalšom spracovaní sa nahradí jeho obsah plnohodnotným modulom.</div>
            <button class="btn" data-go="catalog/unit/${m.year}/${MathPlatform.unitKey(m.unit)}">Späť k témam</button>
          </div>
        `;
        return;
      }

      app.innerHTML = `
        ${MathUI.backRow(`catalog/unit/${m.year}/${MathPlatform.unitKey(m.unit)}`, m.unit)}
        <div class="card">
          <div class="eyebrow">${esc(m.unit)} · ${esc(m.lesson)} · ${esc(mod.student.estimatedTime)}</div>
          <h1>${esc(mod.student.title)}</h1>
          <h2>${esc(mod.student.subtitle)}</h2>
          <p>${esc(mod.student.intro)}</p>
          <div class="notice"><strong>Samostatný režim:</strong> nič sa neposiela učiteľovi a výsledok sa nearchivuje.</div>
          <div class="actions">
            <button class="btn" id="startSolo">Začať samostatne</button>
            <button class="ghost" data-go="join/${id}">Mám kód hodiny</button>
          </div>
        </div>
      `;
      $('#startSolo').onclick = () => startAndPlay(id, { mode: 'solo' });
    } catch (e) { showError(e); }
  }

  async function join(id, presetCode) {
    const meta0 = id && MathPlatform.indexEntry(id);
    const selected = (meta0 && meta0.status === 'ready') ? id : MathPlatform.defaultModuleId();
    const qrCode = (presetCode || '').trim().toUpperCase();
    const topic = (MathPlatform.indexEntry(selected) || {}).topic || '';

    app.innerHTML = `
      <div class="card">
        <div class="eyebrow">ŽIVÁ HODINA</div>
        <h1>Pripojiť sa k učiteľovi</h1>
        <p class="muted">Modul: ${esc(topic)}</p>
        <div class="field"><label>Nick alebo kód žiaka</label><input id="nick" placeholder="napr. 1C-07" maxlength="20" autocomplete="off"></div>
        ${qrCode
          ? `<div class="notice good"><strong>QR kód hodiny načítaný.</strong> Stačí zadať nick a pripojiť sa.</div><input id="code" type="hidden" value="${esc(qrCode)}">`
          : `<div class="field"><label>Kód hodiny</label><input id="code" class="uppercase-input" placeholder="napr. K7M4Q2" maxlength="8"></div>`}
        <div id="joinInfo" class="notice">Výsledky sa používajú iba počas prebiehajúcej hodiny. Platforma nevytvára dlhodobý profil žiaka.</div>
        <button class="btn" id="joinBtn">Pripojiť</button>
      </div>
    `;
    $('#nick') && $('#nick').focus();

    $('#joinBtn').onclick = async () => {
      const nick = $('#nick').value.trim();
      const code = $('#code').value.trim().toUpperCase();
      if (!nick || !/^[A-Z2-9]{6}$/.test(code)) {
        $('#joinInfo').textContent = 'Vyplň nick aj kód hodiny (6 znakov).';
        return;
      }
      try {
        const handle = await MathLive.connectAsStudent(code, {
          onTeacher: msg => {
            if (msg.action === 'ended') {
              alert('Učiteľ ukončil živú hodinu. Pokračovať môžeš samostatne.');
              MathSession.getState().mode = 'solo';
              handle.close();
            } else if (msg.action === 'grading') {
              MathSession.setGrading(msg.grading);
              const badge = document.getElementById('gradingBadge');
              if (badge) badge.outerHTML = MathScore.badgeHtml(MathSession.getState().mode, msg.grading);
            }
          },
        });
        // Send "joined" immediately, so the app has a chance to learn the
        // current grading state before the first activity renders.
        const joined = handle.send('progress', { nick, moduleId: selected, stage: 'joined', score: 0, ts: Date.now() });
        // start() first (it closes any stale connection from a previous
        // session as a safety net — see core/session.js), THEN attach this
        // brand-new handle; attaching before starting would have start()
        // immediately close the very handle we just opened.
        await MathSession.start(selected, { mode: 'live', nick, session: code });
        MathSession.attachLive(handle);
        go('play');
        await joined;
      } catch (e) {
        console.error('Realtime chyba pri pripájaní žiaka:', e);
        $('#joinInfo').innerHTML = '<strong>Nepodarilo sa pripojiť k živej hodine.</strong> Skontroluj pripojenie a skús to znova.';
      }
    };
  }

  function showError(e) {
    app.innerHTML = `
      <div class="card">
        <h2>Nepodarilo sa načítať modul</h2>
        <p>${esc(e.message)}</p>
        <p class="muted">Ak stránku otváraš dvojklikom, skontroluj, že si rozbalila celý priečinok a nie iba samotný index.html.</p>
        <button class="btn" data-go="catalog">Späť</button>
      </div>
    `;
  }

  window.MathViews = window.MathViews || {};
  window.MathViews.student = { home, catalog, catalogYear, catalogUnit, moduleStart, join, showError };
})();
