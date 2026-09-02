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

  window.MathPlatform = {
    registerModule,
    loadModule,
    indexEntry,
    getModule: id => registry[id],
    list: () => window.MATH_MODULE_INDEX || []
  };
})();
