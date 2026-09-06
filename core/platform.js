(function () {
  const loaded = {};
  const registry = {};

  function indexEntry(id) {
    return (window.MATH_MODULE_INDEX || []).find(m => m.id === id);
  }

  function registerModule(module) {
    if (!module || !module.id) throw new Error('Obsahový modul musí mať id.');
    registry[module.id] = module;
  }

  function loadModule(id) {
    if (registry[id]) return Promise.resolve(registry[id]);
    if (loaded[id]) return loaded[id];
    const meta = indexEntry(id);
    if (!meta || !meta.file) return Promise.reject(new Error('Modul nemá obsahový súbor.'));

    loaded[id] = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = meta.file;
      script.async = true;
      script.onload = () => registry[id] ? resolve(registry[id]) : reject(new Error('Obsahový súbor sa načítal, ale modul sa nezaregistroval.'));
      script.onerror = () => reject(new Error('Nepodarilo sa načítať obsahový súbor: ' + meta.file));
      document.head.appendChild(script);
    });
    return loaded[id];
  }

  // Jediné miesto, kde sa rozhoduje, ako žiakovi zobraziť, či sa aktuálna živá
  // hodina počíta do známky. Používa ho core/renderers.js (odznak v hlavičke
  // každej aktivity) aj core/app.js (okamžitá aktualizácia toho istého odznaku,
  // keď učiteľ zapne/vypne známkovanie počas prebiehajúcej hodiny).
  function scaleText(t) {
    return `1: ${t[1]}–100 % · 2: ${t[2]}–${t[1] - 1} % · 3: ${t[3]}–${t[2] - 1} % · 4: ${t[4]}–${t[3] - 1} % · 5: 0–${t[4] - 1} %`;
  }
  function gradingBadgeHtml(mode, grading) {
    if (mode !== 'live') return '';
    if (grading === undefined || grading === null) return '<span id="gradingBadge" class="tag grading-pending">⏳ zisťujem hodnotenie…</span>';
    if (!grading.enabled) return '<span id="gradingBadge" class="tag grading-off">🧪 bez známky</span>';
    const title = grading.thresholds ? ` title="${scaleText(grading.thresholds)}"` : '';
    return `<span id="gradingBadge" class="tag grading-on"${title}>📝 počíta sa do známky</span>`;
  }

  window.MathPlatform = {
    registerModule,
    loadModule,
    indexEntry,
    getModule: id => registry[id],
    list: () => window.MATH_MODULE_INDEX || [],
    gradingBadgeHtml
  };
})();
