// core/platform.js — window.MathPlatform
//
// The module registry/loader (unchanged contract: every content module under
// modules/ calls MathPlatform.registerModule({...}) once it loads) plus every
// query used to build the catalog/navigation screens. This file owns ONLY
// catalog data — grading and scoring presentation live in core/scoring.js,
// not here (they used to live here, which mixed "what topics exist" with
// "how a percentage becomes a grade").
(function () {
  if (!window.MathUtil) throw new Error('core/platform.js: chýba core/util.js pred ním.');

  const loaded = {};   // id -> in-flight/settled load promise
  const registry = {}; // id -> registered module object

  function indexEntry(id) {
    return (window.MATH_MODULE_INDEX || []).find(m => m.id === id);
  }

  function list() {
    return window.MATH_MODULE_INDEX || [];
  }

  function registerModule(module) {
    if (!module || !module.id) throw new Error('Obsahový modul musí mať id.');
    registry[module.id] = module;
  }

  function getModule(id) {
    return registry[id];
  }

  function loadModule(id) {
    if (registry[id]) return Promise.resolve(registry[id]);
    if (loaded[id]) return loaded[id];

    const meta = indexEntry(id);
    if (!meta || !meta.file) return Promise.reject(new Error('Modul nemá obsahový súbor.'));

    const attempt = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = meta.file;
      script.async = true;
      script.onload = () => {
        if (registry[id]) resolve(registry[id]);
        else reject(new Error('Obsahový súbor sa načítal, ale modul sa nezaregistroval.'));
      };
      script.onerror = () => reject(new Error('Nepodarilo sa načítať obsahový súbor: ' + meta.file));
      document.head.appendChild(script);
    });

    // Bug fix vs. the original loader: a rejected promise used to stay cached
    // forever, so one transient network error permanently broke that topic
    // until a full page reload. Clearing the cache entry on rejection lets a
    // later loadModule(id) call actually retry.
    loaded[id] = attempt.catch(e => { delete loaded[id]; throw e; });
    return loaded[id];
  }

  // --- Catalog queries -------------------------------------------------

  function sortedModules(source) {
    const items = source || list();
    return [...items].sort((a, b) =>
      (a.year - b.year) ||
      ((a.unitOrder ?? 999) - (b.unitOrder ?? 999)) ||
      ((a.lessonOrder ?? 999) - (b.lessonOrder ?? 999)) ||
      a.topic.localeCompare(b.topic, 'sk')
    );
  }

  function defaultModuleId() {
    const first = sortedModules().find(m => m.status === 'ready');
    return first ? first.id : undefined;
  }

  function unitKey(unit) { return encodeURIComponent(unit); }
  function unitFromKey(key) {
    try { return decodeURIComponent(key || ''); } catch (_) { return key || ''; }
  }

  function yearModules(year) {
    return sortedModules().filter(m => m.year === Number(year));
  }

  function unitsForYear(year) {
    const map = new Map();
    yearModules(year).forEach(m => {
      if (!map.has(m.unit)) map.set(m.unit, { name: m.unit, order: m.unitOrder ?? 999, modules: [] });
      map.get(m.unit).modules.push(m);
    });
    return [...map.values()].sort((a, b) => a.order - b.order || a.name.localeCompare(b.name, 'sk'));
  }

  function modulesForUnit(year, unit) {
    return yearModules(year).filter(m => m.unit === unit);
  }

  function readyCount(items) { return items.filter(m => m.status === 'ready').length; }
  function placeholderCount(items) { return items.filter(m => m.status === 'placeholder').length; }
  function openable(m) { return !!m && (m.status === 'ready' || m.status === 'placeholder'); }
  function statusText(m) { return m.status === 'ready' ? 'Hotové' : m.status === 'placeholder' ? 'Zástupný' : 'Pripravujeme'; }
  function statusClass(m) { return m.status === 'ready' ? '' : 'off'; }

  window.MathPlatform = {
    registerModule, loadModule, indexEntry, getModule, list,
    sortedModules, defaultModuleId, unitKey, unitFromKey,
    yearModules, unitsForYear, modulesForUnit,
    readyCount, placeholderCount, openable, statusText, statusClass,
  };
})();
