// core/worksheet.js — window.MathWorksheet
//
// The teacher's worksheet generator: combine the theory and tasks of one or
// more modules, add each module's paper-only extra tasks (`worksheet.tasks`,
// see docs/AUTHORING.md) and tasks the teacher types in, and print the result
// (or save it as PDF) — optionally with a solution key on its own last page.
//
// All rendering of the sheet itself is delegated to core/print.js
// (MathPrint.renderActivities / renderExtraTasks / renderAnswerKey), so a
// worksheet looks exactly like the single-module #print/<id> view and, like
// it, never prints a solution on the student pages. Numbering and the key
// come out of the same render call (ctx.num / ctx.key), so they can't drift.
//
// Sheets live in this browser's localStorage only (no backend — see
// docs/ARCHITECTURE.md) and can be exported/imported as a JSON file to move
// them to another computer. Everything read back from storage or an imported
// file goes through normalizeSheet() first, and everything the teacher types
// is escaped on output (esc(), `text` not `html`) — a worksheet never holds
// raw HTML of its own.
(function () {
  if (!window.MathUtil || !window.MathPlatform || !window.MathPrint || !window.MathUI) {
    throw new Error('core/worksheet.js: chýba core/util.js, platform.js, print.js alebo ui.js pred ním.');
  }
  const { esc, $, $$, asciiSlug, dateStamp } = window.MathUtil;
  const P = window.MathPlatform;
  const PR = window.MathPrint;
  const app = document.querySelector('#app');

  const STORE_KEY = 'mathWorksheetsV1';
  const LAST_KEY = 'mathWorksheetLastV1';
  const LEVEL_NAMES = { '': 'bez úrovne', zaklad: 'Základ', rozsirenie: 'Rozšírenie', bonus: 'Bonus' };
  const SYMBOLS = ['²', '³', '⁻¹', '√', '·', '×', '÷', '±', '≤', '≥', '≠', '≈', 'π', '°', '∈', '∉', '∪', '∩', '⊂', '⊆', '∅', '∞', '→', '⇒', '⇔', '∧', '∨', '¬', '∀', '∃', '½', 'α', 'β', 'γ'];

  // --- Storage ----------------------------------------------------------

  const str = (v, max) => String(v == null ? '' : v).slice(0, max);
  const newId = () => 's' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  const stripTags = h => String(h || '').replace(/<[^>]*>/g, '');

  function normalizeItem(it) {
    if (!it || typeof it !== 'object') return null;
    const space = Number.isInteger(it.space) ? Math.max(0, Math.min(20, it.space)) : 3;
    return {
      text: str(it.text, 2000),
      level: ['zaklad', 'rozsirenie', 'bonus'].includes(it.level) ? it.level : '',
      answer: str(it.answer, 2000),
      space,
    };
  }

  function normalizeSection(s) {
    if (!s || typeof s !== 'object') return null;
    if (s.kind === 'custom') {
      return { kind: 'custom', title: str(s.title, 120), items: (Array.isArray(s.items) ? s.items : []).map(normalizeItem).filter(Boolean).slice(0, 100) };
    }
    if (s.kind === 'module' && typeof s.moduleId === 'string') {
      return {
        kind: 'module',
        moduleId: str(s.moduleId, 200),
        // 'module' = the module's own theory, 'blank' = ruled lines for the
        // students to write the theory by hand, 'none'. (Older saves had a
        // boolean `theory`.)
        theoryMode: ['module', 'blank', 'none'].includes(s.theoryMode) ? s.theoryMode : (s.theory === false ? 'none' : 'module'),
        theoryLines: Number.isInteger(s.theoryLines) ? Math.max(1, Math.min(40, s.theoryLines)) : 8,
        tasks: s.tasks !== false,
        reflection: s.reflection === true,
        extra: Array.isArray(s.extra) ? s.extra.map(x => str(x, 80)) : null, // null = all
        // Ruled lines under every extra task of this module; null = each task's own value.
        extraSpace: Number.isInteger(s.extraSpace) ? Math.max(0, Math.min(20, s.extraSpace)) : null,
      };
    }
    return null;
  }

  function normalizeSheet(raw, usedIds) {
    if (!raw || typeof raw !== 'object' || !Array.isArray(raw.sections)) return null;
    let id = typeof raw.id === 'string' && /^[\w-]{1,40}$/.test(raw.id) ? raw.id : newId();
    while (usedIds && usedIds.has(id)) id = newId();
    if (usedIds) usedIds.add(id);
    return {
      id,
      name: str(raw.name, 120) || 'Pracovný list',
      updated: Number.isFinite(raw.updated) ? raw.updated : Date.now(),
      header: raw.header !== false,
      showKey: raw.showKey === true,
      keyOnly: raw.keyOnly === true,
      sectionBreaks: raw.sectionBreaks === true,
      sections: raw.sections.map(normalizeSection).filter(Boolean).slice(0, 60),
    };
  }

  function loadAll() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
      const used = new Set();
      return (Array.isArray(raw) ? raw : []).map(r => normalizeSheet(r, used)).filter(Boolean);
    } catch (_) { return []; }
  }
  function saveAll(sheets) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(sheets)); return true; } catch (_) { return false; }
  }
  function setLast(id) { try { localStorage.setItem(LAST_KEY, id); } catch (_) { /* storage unavailable */ } }
  function getLast() { try { return localStorage.getItem(LAST_KEY); } catch (_) { return null; } }

  function newSheet() {
    return { id: newId(), name: 'Pracovný list', updated: Date.now(), header: true, showKey: false, keyOnly: false, sectionBreaks: false, sections: [] };
  }
  function moduleSection(moduleId) {
    return { kind: 'module', moduleId, theoryMode: 'module', theoryLines: 8, tasks: true, reflection: false, extra: null, extraSpace: null };
  }

  function downloadJson(filename, data) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  // --- Module helpers ---------------------------------------------------

  const modCache = new Map();
  function loadMod(id) {
    if (!modCache.has(id)) modCache.set(id, P.loadModule(id).catch(() => null));
    return modCache.get(id);
  }
  const isTheory = a => PR.THEORY_TYPES.has(a.type) && a.type !== 'intro';
  const isTask = a => !PR.THEORY_TYPES.has(a.type) && a.type !== 'reflection';
  const extrasOf = mod => (mod && mod.worksheet && Array.isArray(mod.worksheet.tasks)) ? mod.worksheet.tasks.filter(t => t && t.id) : [];
  const readyModules = () => P.sortedModules().filter(m => m.status === 'ready');

  // Adds a module to the most recently opened sheet (or a fresh one) and
  // jumps to its editor — the target of the "Pridať na pracovný list" button.
  function addModule(moduleId) {
    const meta = P.indexEntry(moduleId);
    const sheets = loadAll();
    let sheet = sheets.find(s => s.id === getLast()) || null;
    if (!sheet) { sheet = newSheet(); sheets.push(sheet); }
    if (meta && meta.status === 'ready') sheet.sections.push(moduleSection(moduleId));
    sheet.updated = Date.now();
    saveAll(sheets);
    setLast(sheet.id);
    location.replace(`${location.pathname}${location.search}#worksheet/${sheet.id}`);
  }

  // --- Sheet HTML -------------------------------------------------------

  // 1-based position of a topic within its tematický celok (the order the
  // catalog shows it in), or 0 if it can't be found.
  function unitPos(meta) {
    return P.modulesForUnit(meta.year, meta.unit).findIndex(m => m.id === meta.id) + 1;
  }

  function customItemsToTasks(items) {
    return items.filter(it => it.text.trim()).map(it => ({
      text: it.text,
      level: it.level,
      space: it.space,
      answer: it.answer.trim() ? esc(it.answer).replace(/\n/g, '<br>') : '',
    }));
  }

  async function buildSheetHtml(sheet) {
    const ctx = { num: { n: 0 }, key: [] };
    let body = '';
    for (const s of sheet.sections) {
      if (s.kind === 'custom') {
        body += `<section class="print-section-head">${s.title ? `<h2>${esc(s.title)}</h2>` : ''}</section>`
          + renderCustomTasks(s, ctx);
        continue;
      }
      const meta = P.indexEntry(s.moduleId);
      const mod = meta ? await loadMod(s.moduleId) : null;
      if (!meta || !mod || !mod.student) {
        body += `<div class="notice no-print">Modul „${esc(s.moduleId)}“ sa nenašiel — v tlači bude vynechaný.</div>`;
        continue;
      }
      const acts = mod.student.activities || [];
      const mctx = Object.assign({ unit: meta.unit, topic: meta.topic }, ctx);
      body += `<section class="print-section-head"><div class="print-eyebrow">${esc(meta.unit || '')}</div><h2>${unitPos(meta) ? `<span class="print-topic-num">${unitPos(meta)}.</span> ` : ''}${esc(meta.topic || '')}</h2></section>`;
      if (s.theoryMode === 'module') body += PR.renderActivities(acts.filter(isTheory), mctx);
      else if (s.theoryMode === 'blank') {
        body += `<section class="print-block print-theory-blank"><h3 class="print-group-head">Teória – dopíš ručne</h3><div class="print-lines" style="height:calc(${s.theoryLines} * 1.7em)" aria-hidden="true"></div></section>`;
      }
      if (s.tasks) body += PR.renderActivities(acts.filter(isTask), mctx);
      const extras = extrasOf(mod).filter(t => s.extra === null || s.extra.includes(t.id))
        .map(t => s.extraSpace === null ? t : Object.assign({}, t, { space: s.extraSpace }));
      if (extras.length) body += `<h3 class="print-group-head">Ďalšie úlohy</h3>` + PR.renderExtraTasks(extras, ctx);
      if (s.reflection) body += PR.renderActivities(acts.filter(a => a.type === 'reflection'), mctx);
    }

    const head = `<header class="print-sheet-title"><h1>${esc(sheet.name)}</h1>${sheet.header
      ? '<div class="print-name-line">Meno a priezvisko: <span class="print-blank-line"></span> Trieda: <span class="print-blank-line short"></span> Dátum: <span class="print-blank-line short"></span></div>'
      : ''}</header>`;
    const key = PR.renderAnswerKey(ctx.key);
    if (sheet.keyOnly) return head + `<div class="print-key-alone">${key || '<p class="muted">Vybrané úlohy nemajú žiadne riešenia.</p>'}</div>`;
    const empty = sheet.sections.length ? '' : '<p class="muted no-print">List je zatiaľ prázdny — pridaj modul alebo vlastné úlohy.</p>';
    return head + empty + body + (sheet.showKey ? key : '');
  }

  function renderCustomTasks(s, ctx) {
    return PR.renderExtraTasks(customItemsToTasks(s.items), ctx);
  }

  // --- List screen ------------------------------------------------------

  function list() {
    let sheets = loadAll();
    const draw = () => {
      const rows = sheets
        .slice().sort((a, b) => b.updated - a.updated)
        .map(s => `<article class="topic-row">
          <div class="topic-main">
            <h3>${esc(s.name)}</h3>
            <div class="meta">${s.sections.length} ${s.sections.length === 1 ? 'sekcia' : 'sekcií'} · upravené ${esc(new Date(s.updated).toLocaleString('sk-SK'))}</div>
          </div>
          <div class="topic-actions">
            <button class="btn" data-go="worksheet/${s.id}">Otvoriť</button>
            <button class="ghost" data-ws="dup" data-id="${s.id}">Duplikovať</button>
            <button class="ghost" data-ws="del" data-id="${s.id}">Zmazať</button>
          </div>
        </article>`).join('');
      app.innerHTML = `
        ${window.MathUI.breadcrumbs([{ label: 'Učiteľská časť', go: 'teacher' }, { label: 'Pracovné listy' }])}
        <h1>Pracovné listy</h1>
        <p class="muted">Poskladaj teóriu a úlohy z viacerých tém do jedného listu na tlač alebo PDF. Listy sa ukladajú iba v tomto prehliadači — na prenos do iného počítača ich exportuj.</p>
        <div class="row">
          <button class="btn" data-ws="new">+ Nový pracovný list</button>
          <button class="ghost" data-ws="export" ${sheets.length ? '' : 'disabled'}>Exportovať všetky</button>
          <button class="ghost" data-ws="import">Importovať zo súboru</button>
          <input type="file" id="wsImportFile" accept="application/json,.json" hidden>
        </div>
        <div id="wsMsg"></div>
        <div class="topic-list spaced">${rows || '<p class="muted">Zatiaľ nemáš žiadny uložený list.</p>'}</div>`;
    };
    draw();

    app.onclick = e => {
      const b = e.target.closest('[data-ws]');
      if (!b) return;
      const act = b.dataset.ws;
      const sheet = sheets.find(s => s.id === b.dataset.id);
      if (act === 'new') {
        const s = newSheet(); sheets.push(s); saveAll(sheets); setLast(s.id);
        location.hash = `worksheet/${s.id}`;
      } else if (act === 'dup' && sheet) {
        const copy = JSON.parse(JSON.stringify(sheet));
        copy.id = newId(); copy.name = str(sheet.name + ' (kópia)', 120); copy.updated = Date.now();
        sheets.push(copy); saveAll(sheets); draw();
      } else if (act === 'del' && sheet) {
        if (!confirm(`Naozaj zmazať list „${sheet.name}“?`)) return;
        sheets = sheets.filter(s => s !== sheet); saveAll(sheets); draw();
      } else if (act === 'export') {
        downloadJson(`${dateStamp()}-pracovne-listy.json`, sheets);
      } else if (act === 'import') {
        $('#wsImportFile').click();
      }
    };
    app.onchange = e => {
      if (e.target.id !== 'wsImportFile' || !e.target.files[0]) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const data = JSON.parse(String(reader.result));
          const used = new Set(sheets.map(s => s.id));
          const added = (Array.isArray(data) ? data : [data]).map(r => normalizeSheet(r, used)).filter(Boolean);
          if (!added.length) throw new Error('empty');
          sheets = sheets.concat(added); saveAll(sheets); draw();
          $('#wsMsg').innerHTML = `<div class="notice good">Importované listy: ${added.length}.</div>`;
        } catch (_) {
          $('#wsMsg').innerHTML = '<div class="notice bad"><strong>Súbor sa nepodarilo načítať.</strong> Vyber súbor exportovaný z tejto platformy.</div>';
        }
      };
      reader.readAsText(e.target.files[0]);
    };
    return () => { app.onclick = null; app.onchange = null; };
  }

  // --- Editor screen ----------------------------------------------------

  async function edit(id) {
    const sheets = loadAll();
    const sheet = sheets.find(s => s.id === id);
    if (!sheet) { location.replace(`${location.pathname}${location.search}#worksheets`); return; }
    setLast(sheet.id);

    const pick = { year: '', unit: '', topic: '' };
    let lastTa = null;
    let sheetTok = 0, cardsTok = 0, timer = null;

    app.innerHTML = `
      <div class="no-print">
        ${window.MathUI.breadcrumbs([{ label: 'Učiteľská časť', go: 'teacher' }, { label: 'Pracovné listy', go: 'worksheets' }, { label: sheet.name }])}
      </div>
      <div class="ws-layout">
        <aside class="ws-panel no-print" id="wsPanel">
          <div class="card">
            <div class="field"><label for="wsName">Názov listu</label><input id="wsName" data-sf="name" type="text" maxlength="120" value="${esc(sheet.name)}"></div>
            <label class="ws-check"><input type="checkbox" data-sf="header" ${sheet.header ? 'checked' : ''}> Riadok „Meno, trieda, dátum“</label>
            <label class="ws-check"><input type="checkbox" data-sf="showKey" ${sheet.showKey ? 'checked' : ''}> Kľúč riešení na konci (nová strana, pre učiteľa)</label>
            <label class="ws-check"><input type="checkbox" data-sf="sectionBreaks" ${sheet.sectionBreaks ? 'checked' : ''}> Každá téma na novej strane</label>
            <label class="ws-check"><input type="checkbox" data-sf="keyOnly" ${sheet.keyOnly ? 'checked' : ''}> Vytlačiť iba kľúč riešení</label>
            <div class="row spaced"><button class="btn" id="wsPrint">Vytlačiť / Uložiť ako PDF</button></div>
            <p class="muted small-note">Tip: v dialógu tlače zruš „Hlavičky a päty“, aby sa na strany nepridávala URL adresa a dátum.</p>
          </div>
          <div id="wsCards"></div>
          <div class="card spaced" id="wsAdd"></div>
        </aside>
        <article class="print-sheet" id="wsSheet"></article>
      </div>`;

    const persist = () => { sheet.updated = Date.now(); saveAll(sheets); };

    async function refreshSheet() {
      const t = ++sheetTok;
      const html = await buildSheetHtml(sheet);
      if (t !== sheetTok || !$('#wsSheet')) return;
      $('#wsSheet').innerHTML = html;
      $('#wsSheet').classList.toggle('ws-break-sections', !!sheet.sectionBreaks);
    }
    const refreshSoon = () => { clearTimeout(timer); timer = setTimeout(refreshSheet, 250); };

    // The module picker: year → unit → topic, ready modules only.
    function renderAdd() {
      const ready = readyModules();
      const years = [...new Set(ready.map(m => m.year))];
      const units = pick.year ? [...new Set(ready.filter(m => String(m.year) === pick.year).map(m => m.unit))] : [];
      const topics = pick.unit ? ready.filter(m => String(m.year) === pick.year && m.unit === pick.unit) : [];
      const opt = (v, label, sel) => `<option value="${esc(v)}" ${sel ? 'selected' : ''}>${esc(label)}</option>`;
      $('#wsAdd').innerHTML = `
        <h3>Pridať tému</h3>
        <div class="field"><label>Ročník</label><select data-pick="year">${opt('', '— vyber —', !pick.year)}${years.map(y => opt(y, `${y}. ročník`, String(y) === pick.year)).join('')}</select></div>
        <div class="field"><label>Tematický celok</label><select data-pick="unit" ${units.length ? '' : 'disabled'}>${opt('', '— vyber —', !pick.unit)}${units.map(u => opt(u, u, u === pick.unit)).join('')}</select></div>
        <div class="field"><label>Téma</label><select data-pick="topic" ${topics.length ? '' : 'disabled'}>${opt('', '— vyber —', !pick.topic)}${topics.map(m => opt(m.id, m.topic, m.id === pick.topic)).join('')}</select></div>
        <div class="row">
          <button class="btn" data-act="add-module" ${pick.topic ? '' : 'disabled'}>Pridať tému</button>
          <button class="ghost" data-act="add-unit" ${topics.length ? '' : 'disabled'}>Pridať celý celok</button>
        </div>
        <hr>
        <button class="ghost" data-act="add-custom">+ Vlastné úlohy</button>`;
    }

    const chk = (i, f, on, label) => `<label class="ws-check"><input type="checkbox" data-i="${i}" data-f="${f}" ${on ? 'checked' : ''}> ${label}</label>`;
    const ctl = i => `<div class="ws-card-btns">
      <button class="ghost" data-act="up" data-i="${i}" ${i === 0 ? 'disabled' : ''} aria-label="Posunúť vyššie">↑</button>
      <button class="ghost" data-act="down" data-i="${i}" ${i === sheet.sections.length - 1 ? 'disabled' : ''} aria-label="Posunúť nižšie">↓</button>
      <button class="ghost" data-act="remove" data-i="${i}" aria-label="Odstrániť">✕</button></div>`;

    function customCard(s, i) {
      return `<div class="card ws-card">
        <div class="ws-card-head"><strong>Vlastné úlohy</strong>${ctl(i)}</div>
        <div class="field"><label>Nadpis sekcie</label><input type="text" maxlength="120" data-i="${i}" data-f="title" value="${esc(s.title)}"></div>
        ${s.items.map((it, j) => `<div class="ws-item">
          <div class="field"><label>Úloha ${j + 1}</label><textarea rows="3" data-i="${i}" data-j="${j}" data-f="text">${esc(it.text)}</textarea></div>
          <div class="ws-item-row">
            <select data-i="${i}" data-j="${j}" data-f="level" aria-label="Úroveň">${Object.keys(LEVEL_NAMES).map(l => `<option value="${l}" ${it.level === l ? 'selected' : ''}>${LEVEL_NAMES[l]}</option>`).join('')}</select>
            <label class="ws-inline">riadkov <input type="number" min="0" max="20" data-i="${i}" data-j="${j}" data-f="space" value="${it.space}"></label>
            <button class="ghost" data-act="item-up" data-i="${i}" data-j="${j}" ${j === 0 ? 'disabled' : ''} aria-label="Vyššie">↑</button>
            <button class="ghost" data-act="item-down" data-i="${i}" data-j="${j}" ${j === s.items.length - 1 ? 'disabled' : ''} aria-label="Nižšie">↓</button>
            <button class="ghost" data-act="item-remove" data-i="${i}" data-j="${j}" aria-label="Odstrániť úlohu">✕</button>
          </div>
          <div class="field"><label>Riešenie (do kľúča, voliteľné)</label><textarea rows="2" data-i="${i}" data-j="${j}" data-f="answer">${esc(it.answer)}</textarea></div>
        </div>`).join('')}
        <div class="ws-symbols" aria-label="Matematické symboly">${SYMBOLS.map(c => `<button type="button" class="ghost" data-act="sym" data-c="${esc(c)}">${esc(c)}</button>`).join('')}</div>
        <button class="ghost" data-act="item-add" data-i="${i}">+ Pridať úlohu</button>
      </div>`;
    }

    function moduleCard(s, i, meta, mod) {
      if (!meta || !mod || !mod.student) {
        return `<div class="card ws-card"><div class="ws-card-head"><strong>${esc(s.moduleId)}</strong>${ctl(i)}</div><div class="notice bad">Tento modul sa nenašiel — odstráň ho z listu.</div></div>`;
      }
      const acts = mod.student.activities || [];
      const extras = extrasOf(mod);
      return `<div class="card ws-card">
        <div class="ws-card-head"><div><div class="print-eyebrow">${esc(meta.unit || '')}</div><strong>${esc(meta.topic)}</strong></div>${ctl(i)}</div>
        <div class="ws-theory">
          <label class="ws-inline">Teória:
            <select data-i="${i}" data-f="theoryMode">
              <option value="module" ${s.theoryMode === 'module' ? 'selected' : ''}>z modulu (${acts.filter(isTheory).length})</option>
              <option value="blank" ${s.theoryMode === 'blank' ? 'selected' : ''}>voľné riadky na dopísanie</option>
              <option value="none" ${s.theoryMode === 'none' ? 'selected' : ''}>bez teórie</option>
            </select></label>
          ${s.theoryMode === 'blank' ? `<label class="ws-inline">riadkov <input type="number" min="1" max="40" data-i="${i}" data-f="theoryLines" value="${s.theoryLines}"></label>` : ''}
        </div>
        ${chk(i, 'tasks', s.tasks, `Úlohy z modulu <span class="muted">(${acts.filter(isTask).length})</span>`)}
        ${chk(i, 'reflection', s.reflection, 'Sebahodnotenie')}
        ${extras.length ? `<div class="ws-extras"><div class="ws-extras-head"><strong>Ďalšie úlohy</strong>
            <button class="ghost" data-act="extra-all" data-i="${i}">všetky</button><button class="ghost" data-act="extra-none" data-i="${i}">žiadne</button></div>
          <label class="ws-inline">riadkov na riešenie pri každej úlohe <input type="number" min="0" max="20" placeholder="z modulu" data-i="${i}" data-f="extraSpace" value="${s.extraSpace === null ? '' : s.extraSpace}"></label>
          ${extras.map(t => `<label class="ws-check"><input type="checkbox" data-i="${i}" data-f="extra" data-id="${esc(t.id)}" ${(s.extra === null || s.extra.includes(t.id)) ? 'checked' : ''}> <span class="tag">${esc(LEVEL_NAMES[t.level] || '—')}</span> ${esc(stripTags(t.text || t.html).slice(0, 80))}</label>`).join('')}</div>`
          : '<p class="muted small-note">Tento modul zatiaľ nemá zásobu ďalších úloh.</p>'}
      </div>`;
    }

    async function renderCards() {
      const t = ++cardsTok;
      const mods = await Promise.all(sheet.sections.map(s => s.kind === 'module' && P.indexEntry(s.moduleId) ? loadMod(s.moduleId) : null));
      if (t !== cardsTok || !$('#wsCards')) return;
      $('#wsCards').innerHTML = sheet.sections.map((s, i) => s.kind === 'custom' ? customCard(s, i) : moduleCard(s, i, P.indexEntry(s.moduleId), mods[i])).join('')
        || '<p class="muted spaced">Zatiaľ žiadne sekcie.</p>';
    }

    const move = (arr, i, d) => { const k = i + d; if (k < 0 || k >= arr.length) return false; [arr[i], arr[k]] = [arr[k], arr[i]]; return true; };
    const structural = async () => { persist(); await renderCards(); refreshSheet(); };

    const panel = $('#wsPanel');
    panel.addEventListener('mousedown', e => { if (e.target.closest('[data-act="sym"]')) e.preventDefault(); });
    panel.addEventListener('focusin', e => { if (e.target.tagName === 'TEXTAREA') lastTa = e.target; });

    panel.addEventListener('click', async e => {
      const b = e.target.closest('[data-act]');
      if (!b || b.disabled) return;
      const act = b.dataset.act, i = Number(b.dataset.i), j = Number(b.dataset.j);
      const s = sheet.sections[i];
      if (act === 'sym') {
        if (!lastTa || !lastTa.isConnected) return;
        const c = b.dataset.c, a = lastTa.selectionStart, z = lastTa.selectionEnd;
        lastTa.setRangeText(c, a, z, 'end');
        lastTa.dispatchEvent(new Event('input', { bubbles: true }));
        lastTa.focus();
        return;
      }
      if (act === 'add-module') {
        if (pick.topic) sheet.sections.push(moduleSection(pick.topic));
      } else if (act === 'add-unit') {
        readyModules().filter(m => String(m.year) === pick.year && m.unit === pick.unit).forEach(m => sheet.sections.push(moduleSection(m.id)));
      } else if (act === 'add-custom') {
        sheet.sections.push({ kind: 'custom', title: 'Ďalšie úlohy', items: [{ text: '', level: '', answer: '', space: 3 }] });
      } else if (act === 'up') move(sheet.sections, i, -1);
      else if (act === 'down') move(sheet.sections, i, 1);
      else if (act === 'remove') sheet.sections.splice(i, 1);
      else if (act === 'item-add' && s) s.items.push({ text: '', level: '', answer: '', space: 3 });
      else if (act === 'item-up' && s) move(s.items, j, -1);
      else if (act === 'item-down' && s) move(s.items, j, 1);
      else if (act === 'item-remove' && s) s.items.splice(j, 1);
      else if (act === 'extra-all' && s) s.extra = null;
      else if (act === 'extra-none' && s) s.extra = [];
      else return;
      await structural();
    });

    const onField = async e => {
      const el = e.target;
      if (el.dataset.pick) {
        pick[el.dataset.pick] = el.value;
        if (el.dataset.pick === 'year') { pick.unit = ''; pick.topic = ''; }
        if (el.dataset.pick === 'unit') pick.topic = '';
        renderAdd();
        return;
      }
      if (el.dataset.sf) {
        const f = el.dataset.sf;
        sheet[f] = el.type === 'checkbox' ? el.checked : str(el.value, 120);
        if (f === 'name' && !sheet.name) sheet.name = '';
        persist(); refreshSoon();
        return;
      }
      if (!el.dataset.f) return;
      const s = sheet.sections[Number(el.dataset.i)];
      if (!s) return;
      const f = el.dataset.f;
      if (s.kind === 'custom') {
        if (el.dataset.j === undefined) s.title = str(el.value, 120);
        else {
          const it = s.items[Number(el.dataset.j)];
          if (!it) return;
          if (f === 'space') { const n = parseInt(el.value, 10); it.space = Number.isFinite(n) ? Math.max(0, Math.min(20, n)) : 3; }
          else it[f] = f === 'level' ? (el.value) : str(el.value, 2000);
        }
      } else if (f === 'extra') {
        const mod = await loadMod(s.moduleId);
        const all = extrasOf(mod).map(t => t.id);
        const cur = new Set(s.extra === null ? all : s.extra);
        if (el.checked) cur.add(el.dataset.id); else cur.delete(el.dataset.id);
        s.extra = all.filter(x => cur.has(x));
      } else if (f === 'theoryMode') {
        s.theoryMode = ['module', 'blank', 'none'].includes(el.value) ? el.value : 'module';
        persist(); await renderCards(); refreshSheet();
        return;
      } else if (f === 'extraSpace') {
        const n = parseInt(el.value, 10);
        s.extraSpace = el.value.trim() === '' || !Number.isFinite(n) ? null : Math.max(0, Math.min(20, n));
      } else if (f === 'theoryLines') {
        const n = parseInt(el.value, 10);
        s.theoryLines = Number.isFinite(n) ? Math.max(1, Math.min(40, n)) : 8;
      } else {
        s[f] = el.checked;
      }
      persist(); refreshSoon();
    };
    panel.addEventListener('input', onField);
    panel.addEventListener('change', onField);
    $('#wsPrint').onclick = () => window.print();

    renderAdd();
    await renderCards();
    await refreshSheet();
    return () => clearTimeout(timer);
  }

  window.MathWorksheet = { list, edit, addModule };
})();
