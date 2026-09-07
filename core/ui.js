// core/ui.js — window.MathUI
//
// View fragments shared by the student and teacher catalog trees
// (core/views-student.js, core/views-teacher.js). Extracted from what used
// to be near-duplicate markup in core/app.js's catalog()/teacher(),
// catalogYear()/teacherYear() and catalogUnit()/teacherUnit().
//
// Note on topicRow(): the original code had a topicRow(m, teacherMode) with a
// teacherMode branch that was never actually reachable (its only caller never
// passed teacherMode=true), while the real teacher screen (teacherUnit())
// re-implemented a *different*, richer row inline (it also has a "Živá
// hodina" button that the dead branch never had). This topicRow's
// teacherMode:true path matches that actually-shipping teacher behaviour —
// not the old dead branch — since that is the version real teachers have
// been using.
(function () {
  if (!window.MathUtil || !window.MathPlatform) {
    throw new Error('core/ui.js: chýba core/util.js alebo core/platform.js pred ním.');
  }
  const { esc, pad2 } = window.MathUtil;
  const P = window.MathPlatform;

  // items: [{label, go?, plain?}]. The last item with no `go` renders bold
  // (the current page); `plain:true` renders a bare, non-bold span instead
  // (used by the top-level catalog() screen, which has no "current" crumb
  // styling at all).
  function breadcrumbs(items) {
    const parts = items.map(it => {
      if (it.go) return `<button class="crumb" data-go="${it.go}">${esc(it.label)}</button>`;
      if (it.plain) return `<span>${esc(it.label)}</span>`;
      return `<strong>${esc(it.label)}</strong>`;
    });
    return `<div class="breadcrumbs">${parts.join('<span>›</span>')}</div>`;
  }

  function yearGrid(basePath) {
    const years = [1, 2, 3];
    return `<div class="year-grid">${years.map(y => {
      const mods = P.yearModules(y), units = P.unitsForYear(y);
      return `<button class="year-card" data-go="${basePath}/${y}">
        <span class="year-number">${y}.</span>
        <span><strong>ročník</strong><small>${units.length} ${units.length === 1 ? 'tematický celok' : 'tematické celky'} · ${P.readyCount(mods)} hotové · ${P.placeholderCount(mods)} zástupné</small></span>
        <span class="chevron">→</span>
      </button>`;
    }).join('')}</div>`;
  }

  function unitList(year, basePath) {
    const units = P.unitsForYear(year);
    if (!units.length) return `<div class="card"><p>Zatiaľ tu nie sú zapísané témy.</p></div>`;
    return `<div class="unit-list">${units.map((u, i) => `
      <button class="unit-card" data-go="${basePath}/${year}/${P.unitKey(u.name)}">
        <span class="unit-order">${pad2(i + 1)}</span>
        <span class="unit-main"><strong>${esc(u.name)}</strong><small>${u.modules.length} ${u.modules.length === 1 ? 'téma' : 'témy'} · ${P.readyCount(u.modules)} hotové · ${P.placeholderCount(u.modules)} zástupné</small></span>
        <span class="chevron">→</span>
      </button>`).join('')}</div>`;
  }

  function unitHeading(eyebrow, unitName, countLabel) {
    return `<div class="unit-heading">
      <div><div class="eyebrow">${esc(eyebrow)}</div><h1>${esc(unitName)}</h1></div>
      <span class="unit-count">${esc(countLabel)}</span>
    </div>`;
  }

  function topicRow(m, opts) {
    const teacherMode = !!(opts && opts.teacherMode);
    const canOpen = P.openable(m);
    const isPlaceholder = m.status === 'placeholder';

    const skillsHtml = (!teacherMode && m.status === 'ready')
      ? `<div>${(m.skills || []).map(s => `<span class="tag">${esc(s)}</span>`).join('')}</div>`
      : '';

    let actionsHtml = '';
    if (canOpen) {
      if (teacherMode) {
        actionsHtml = `
          <button class="ghost" data-go="method/${m.id}">Metodická karta</button>
          ${m.status === 'ready' ? `<button class="btn" data-go="teacher-live/${m.id}">Živá hodina</button>` : ''}
          <button class="ghost" data-go="module/${m.id}">${isPlaceholder ? 'Zobraziť náhľad' : 'Otvoriť modul'}</button>
        `;
      } else {
        actionsHtml = `<button class="${isPlaceholder ? 'ghost' : 'btn'}" data-go="module/${m.id}">${isPlaceholder ? 'Zobraziť náhľad' : 'Otvoriť'}</button>`;
      }
    }

    return `<article class="topic-row ${canOpen ? '' : 'locked'}">
      <div class="topic-number">${pad2(m.lessonOrder)}</div>
      <div class="topic-main">
        <div class="topic-status"><span class="tag ${P.statusClass(m)}">${P.statusText(m)}</span> ${m.lesson ? `<span class="muted">${esc(m.lesson)}</span>` : ''}</div>
        <h3>${esc(m.topic)}</h3>
        <div class="meta">${esc(m.type)} · ${esc(m.time)}</div>
        ${skillsHtml}
      </div>
      <div class="topic-actions">${actionsHtml}</div>
    </article>`;
  }

  function backRow(go, label) {
    return `<div class="row"><button class="ghost" data-go="${go}">← ${esc(label)}</button></div>`;
  }

  window.MathUI = { breadcrumbs, yearGrid, unitList, unitHeading, topicRow, backRow };
})();
