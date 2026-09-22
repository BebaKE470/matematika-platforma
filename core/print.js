// core/print.js — window.MathPrint
//
// A static, paper-first rendering of a module's student.activities — for a
// teacher who wants to hand a printed worksheet to a student without a
// phone/tablet or without internet access. This is NOT the interactive
// player (core/session.js/core/renderers.js): nothing here is clickable,
// nothing scores XP, and — deliberately — no answer/solution is ever
// printed (a `choice`'s correct option, a `numberInput`'s `success` text, a
// `taskList` item's `answer` reveal, a `selfWrite`'s `model`, … all stay out
// of the page on purpose, since a printed sheet has no "click to check").
// The student prints this, works on paper, and the teacher can check the
// answers separately just like any other paper handout.
//
// Reuses ActivityRenderers.buildCoordinateWrap (core/renderers.js) for
// coordinatePlot's SVG rather than re-deriving the axis-scaling/curve-
// sampling math a second time.
(function () {
  if (!window.MathUtil || !window.MathPlatform || !window.ActivityRenderers) {
    throw new Error('core/print.js: chýba core/util.js, platform.js alebo renderers.js pred ním.');
  }
  const { esc } = window.MathUtil;
  const app = document.querySelector('#app');

  function rememberBox(a) {
    if (!a.remember) return '';
    const label = a.rememberLabel === false ? '' : `<strong>${esc(a.rememberLabel || 'Zapamätaj si:')}</strong> `;
    return `<div class="remember">${label}${a.remember}</div>`;
  }

  const LEVEL_LABELS = { zaklad: 'ZÁKLAD', rozsirenie: 'ROZŠÍRENIE', bonus: 'BONUS' };
  const LEVEL_ORDER = ['zaklad', 'rozsirenie', 'bonus'];

  // Activity types that are explanation/theory rather than something a
  // student answers or self-assesses — what the "Iba teória" toggle below
  // keeps. `coordinatePlot` is always illustrative here (a "Pokračovať"
  // button, never scored — see MathScore.coordinatePlot's max: 0 in
  // core/scoring.js), so it counts as theory, not a task. `notebook` is
  // deliberately excluded: per the authoring rules it's reserved for an
  // independent pen-and-paper task, not for theory to copy down.
  const THEORY_TYPES = new Set(['intro', 'info', 'explain', 'coordinatePlot']);

  function taskItemsHtml(items) {
    const row = it => `<label class="print-check-row"><span class="print-checkbox" aria-hidden="true"></span><span>${it.html || esc(it.text)}</span></label>`;
    const usesLevels = items.some(it => LEVEL_LABELS[it.level]);
    if (!usesLevels) return items.map(row).join('');
    const unleveled = items.filter(it => !LEVEL_LABELS[it.level]);
    return unleveled.map(row).join('') + LEVEL_ORDER.filter(lvl => items.some(it => it.level === lvl)).map(lvl => `
      <h3 class="task-level-heading">${LEVEL_LABELS[lvl]}</h3>
      ${items.filter(it => it.level === lvl).map(row).join('')}
    `).join('');
  }

  // One render function per activity type — deliberately named PRINT (not
  // ActivityRenderers) since the shape is different: (activity) => htmlString,
  // no ctx, no event wiring, nothing interactive.
  const PRINT = {
    intro(a, ctx) {
      const goals = Array.isArray(a.goals) && a.goals.length
        ? `<p class="print-goals-label">Na tejto hodine sa naučíš:</p><ul>${a.goals.map(g => `<li>${esc(g)}</li>`).join('')}</ul>`
        : '';
      return `<section class="print-cover">
        <div class="print-eyebrow">${esc(ctx.unit || '')}</div>
        <h1>${esc(ctx.topic || '')}</h1>
        ${a.html || ''}
        ${goals}
      </section>`;
    },
    info(a) {
      return `<section class="print-block"><h2>${esc(a.title)}</h2>${a.html || ''}${rememberBox(a)}</section>`;
    },
    explain(a) {
      return `<section class="print-block"><h2>${esc(a.title)}</h2>${a.html || ''}${rememberBox(a)}</section>`;
    },
    notebook(a) {
      return `<section class="print-block print-notebook">
        <div class="print-label">ZAPÍŠ SI DO ZOŠITA</div>
        <h2>${esc(a.title || 'Zapíš si do zošita')}</h2>
        ${a.html || ''}
      </section>`;
    },
    choice(a) {
      return `<section class="print-block print-task">
        ${a.prompt ? `<p class="muted">${esc(a.prompt)}</p>` : ''}
        ${a.stimulus ? `<div class="stimulus">${esc(a.stimulus).replace(/\n/g, '<br>')}</div>` : ''}
        <p class="print-q">${esc(a.question)}</p>
        <ol class="print-options">${a.options.map(o => `<li><span class="print-circle" aria-hidden="true"></span>${esc(o)}</li>`).join('')}</ol>
      </section>`;
    },
    sortChoice(a) {
      return `<section class="print-block print-task">
        <p class="print-q">${esc(a.title)}</p>
        <p class="muted">Pri každej vete zakrúžkuj jednu možnosť.</p>
        <table class="print-table"><thead><tr><th></th><th>${esc(a.labels[0])}</th><th>${esc(a.labels[1])}</th></tr></thead>
        <tbody>${a.items.map(it => `<tr><td>${esc(it.text)}</td><td class="print-mark-cell"><span class="print-circle" aria-hidden="true"></span></td><td class="print-mark-cell"><span class="print-circle" aria-hidden="true"></span></td></tr>`).join('')}</tbody></table>
      </section>`;
    },
    matrix(a) {
      return `<section class="print-block print-task">
        <p class="print-q">${esc(a.title)}</p>
        <p class="muted">Ku každej položke priraď jednu z možností: ${a.labels.map(esc).join(', ')}.</p>
        <table class="print-table"><thead><tr><th></th><th>Priradenie</th></tr></thead>
        <tbody>${a.items.map(it => `<tr><td>${esc(it.text)}</td><td class="print-blank-cell"></td></tr>`).join('')}</tbody></table>
      </section>`;
    },
    taskList(a) {
      return `<section class="print-block print-task">
        <p class="print-q">${esc(a.title)}</p>
        ${a.html || ''}
        ${taskItemsHtml(a.items)}
        ${a.note ? `<div class="notice">${a.note}</div>` : ''}
      </section>`;
    },
    selfWrite(a) {
      return `<section class="print-block print-task">
        <p class="print-q">${esc(a.title)}</p>
        <p>${a.promptHtml || esc(a.prompt)}</p>
        <div class="print-lines" aria-hidden="true"></div>
      </section>`;
    },
    numberInput(a) {
      return `<section class="print-block print-task">
        <p class="print-q">${esc(a.title)}</p>
        <p>${esc(a.prompt)}</p>
        <p class="print-answer-line">Odpoveď: <span class="print-blank-line"></span></p>
      </section>`;
    },
    coordinatePlot(a) {
      return `<section class="print-block">
        <h2>${esc(a.title)}</h2>
        ${a.html || ''}
        ${window.ActivityRenderers.buildCoordinateWrap(a)}
        ${a.note ? `<div class="notice">${a.note}</div>` : ''}
      </section>`;
    },
    // The legend text below duplicates R.reflection's `levels` labels
    // (core/renderers.js) on purpose — the interactive version shows them as
    // button text, which doesn't exist on paper, so the meaning of each
    // colour needs spelling out explicitly here. Keep the two in sync.
    reflection(a) {
      return `<section class="print-block print-reflection">
        <h2>${esc(a.title)}</h2>
        <p>${esc(a.prompt)}</p>
        <p class="print-legend">🟢 Rozumiem a viem vysvetliť &nbsp;·&nbsp; 🟡 Asi rozumiem, potrebujem príklad &nbsp;·&nbsp; 🔴 Zatiaľ v tom nemám jasno</p>
        <table class="print-table print-reflection-table">
          <thead><tr><th>Zručnosť</th><th>🟢</th><th>🟡</th><th>🔴</th></tr></thead>
          <tbody>${a.skills.map(s => `<tr><td>${esc(s)}</td><td class="print-mark-cell"><span class="print-circle" aria-hidden="true"></span></td><td class="print-mark-cell"><span class="print-circle" aria-hidden="true"></span></td><td class="print-mark-cell"><span class="print-circle" aria-hidden="true"></span></td></tr>`).join('')}</tbody>
        </table>
      </section>`;
    },
  };

  function renderBody(acts, ctx) {
    return acts.map(a => {
      const fn = PRINT[a.type];
      return fn ? fn(a, ctx) : '';
    }).join('');
  }

  async function render(id) {
    const mod = await window.MathPlatform.loadModule(id);
    const meta = window.MathPlatform.indexEntry(id);
    if (!mod || !meta || meta.status !== 'ready') { app.innerHTML = '<div class="card"><h2>Modul sa nedá vytlačiť.</h2></div>'; return; }

    const ctx = { unit: meta.unit || '', topic: meta.topic || mod.student.title };
    const acts = mod.student.activities || [];
    const theoryActs = acts.filter(a => THEORY_TYPES.has(a.type));

    app.innerHTML = `
      <div class="print-toolbar no-print">
        <button class="ghost" data-go="module/${id}">← Späť na modul</button>
        <label class="print-theory-toggle">
          <input type="checkbox" id="theoryOnly">
          Iba teória (bez úloh a sebahodnotenia)
        </label>
        <button class="btn" id="printBtn">Vytlačiť / Uložiť ako PDF</button>
      </div>
      <p class="print-hint no-print">Tip na úsporu papiera: v dialógu tlače pod „Viac nastavení“ zrušte začiarknutie „Hlavičky a päty“ — inak sa na každú stranu pridá URL adresa, dátum a číslo strany navyše.</p>
      <article class="print-sheet">${renderBody(acts, ctx)}</article>
    `;
    const sheet = document.querySelector('.print-sheet');
    const toggle = document.getElementById('theoryOnly');
    toggle.onchange = () => {
      sheet.innerHTML = renderBody(toggle.checked ? theoryActs : acts, ctx);
    };
    const btn = document.getElementById('printBtn');
    if (btn) btn.onclick = () => window.print();
  }

  window.MathPrint = { render };
})();
