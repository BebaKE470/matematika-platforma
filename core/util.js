// core/util.js — window.MathUtil
//
// Small, dependency-free helpers shared by every other core/*.js file and by
// core/renderers.js. Loaded first (after config.js + modules/registry.js) so
// every later file can rely on it being present.
//
// Escaping contract (also documented in docs/AUTHORING.md): esc() is the ONLY
// thing standing between a value and innerHTML. Any string that reaches the
// DOM without going through esc() is either (a) one of the documented
// "trusted authored HTML" activity fields (html, promptHtml, remember,
// correct, hint, model, note, success — content the module author wrote by
// hand) or (b) a bug. In particular, anything that came from a live-lesson
// broadcast (a student nick, above all) MUST be escaped — it is attacker
// -controlled the moment someone shares the join code.
(function () {
  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function $(selector, root) { return (root || document).querySelector(selector); }
  function $$(selector, root) { return Array.from((root || document).querySelectorAll(selector)); }

  function pad2(n) { return String(n == null ? '' : n).padStart(2, '0'); }

  // For filenames: strips diacritics, keeps [a-zA-Z0-9-], collapses the rest.
  function asciiSlug(text, maxLen) {
    if (maxLen === undefined) maxLen = 50;
    return String(text || '')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, maxLen);
  }

  function dateStamp(d) {
    d = d || new Date();
    return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
  }

  function csvCell(v) {
    return '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"';
  }

  function downloadCsv(filename, rows) {
    const csv = '\uFEFF' + rows.map(r => r.map(csvCell).join(';')).join('\r\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  window.MathUtil = { esc, $, $$, pad2, asciiSlug, dateStamp, csvCell, downloadCsv };
})();
