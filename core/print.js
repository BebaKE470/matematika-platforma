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

  // --- Numbering + answer key (used by core/worksheet.js) ----------------
  //
  // `ctx.num` ({ n: 0 }) switches numbering on: every task-type block then
  // gets "N." in front of its question, and — when `ctx.key` (an array) is
  // also given — its solution is pushed onto that array under the same N, so
  // the numbers on the sheet and in the teacher's key can never drift apart
  // (they are produced by the same call). Without ctx.num (the plain
  // #print/<id> view) nothing here changes the output.

  function ansHtml(v) { return v ? `<div class="print-key-answer">${v}</div>` : ''; }

  const KEY = {
    choice: a => (a.options && a.options[a.answer] != null) ? esc(a.options[a.answer]) : null,
    sortChoice: a => `<ul>${a.items.map(it => `<li>${esc(it.text)} → <strong>${esc(a.labels[it.answer ? 0 : 1])}</strong></li>`).join('')}</ul>`,
    matrix: a => `<ul>${a.items.map(it => `<li>${esc(it.text)} → <strong>${esc(it.answer)}</strong></li>`).join('')}</ul>`,
    numberInput: a => (a.validate === 'exact' && Number.isFinite(a.answer)) ? esc(String(a.answer).replace('.', ',')) : (a.success || null),
    taskList: a => {
      const rows = a.items.map((it, i) => it.answer ? `<li value="${i + 1}">${it.answer}</li>` : '').join('');
      return rows ? `<ol>${rows}</ol>` : null;
    },
    selfWrite: a => a.model || null,
  };

  // Returns the "N. " prefix for a task block (and records its key entry).
  function numFor(a, ctx, label) {
    if (!ctx || !ctx.num) return '';
    const n = ++ctx.num.n;
    if (Array.isArray(ctx.key) && KEY[a.type]) {
      const html = KEY[a.type](a);
      if (html) ctx.key.push({ n, label, html });
    }
    return `<span class="print-task-num">${n}.</span> `;
  }

  // One render function per activity type — deliberately named PRINT (not
  // ActivityRenderers) since the shape is different: (activity, ctx) =>
  // htmlString, no event wiring, nothing interactive.
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
    choice(a, ctx) {
      return `<section class="print-block print-task">
        ${a.prompt ? `<p class="muted">${esc(a.prompt)}</p>` : ''}
        ${a.stimulus ? `<div class="stimulus">${esc(a.stimulus).replace(/\n/g, '<br>')}</div>` : ''}
        <p class="print-q">${numFor(a, ctx, a.question)}${esc(a.question)}</p>
        <ol class="print-options">${a.options.map(o => `<li><span class="print-circle" aria-hidden="true"></span>${esc(o)}</li>`).join('')}</ol>
      </section>`;
    },
    sortChoice(a, ctx) {
      return `<section class="print-block print-task">
        <p class="print-q">${numFor(a, ctx, a.title)}${esc(a.title)}</p>
        <p class="muted">Pri každej vete zakrúžkuj jednu možnosť.</p>
        <table class="print-table"><thead><tr><th></th><th>${esc(a.labels[0])}</th><th>${esc(a.labels[1])}</th></tr></thead>
        <tbody>${a.items.map(it => `<tr><td>${esc(it.text)}</td><td class="print-mark-cell"><span class="print-circle" aria-hidden="true"></span></td><td class="print-mark-cell"><span class="print-circle" aria-hidden="true"></span></td></tr>`).join('')}</tbody></table>
      </section>`;
    },
    matrix(a, ctx) {
      return `<section class="print-block print-task">
        <p class="print-q">${numFor(a, ctx, a.title)}${esc(a.title)}</p>
        <p class="muted">Ku každej položke priraď jednu z možností: ${a.labels.map(esc).join(', ')}.</p>
        <table class="print-table"><thead><tr><th></th><th>Priradenie</th></tr></thead>
        <tbody>${a.items.map(it => `<tr><td>${esc(it.text)}</td><td class="print-blank-cell"></td></tr>`).join('')}</tbody></table>
      </section>`;
    },
    taskList(a, ctx) {
      return `<section class="print-block print-task">
        <p class="print-q">${numFor(a, ctx, a.title)}${esc(a.title)}</p>
        ${a.html || ''}
        ${taskItemsHtml(a.items)}
        ${a.note ? `<div class="notice">${a.note}</div>` : ''}
      </section>`;
    },
    selfWrite(a, ctx) {
      return `<section class="print-block print-task">
        <p class="print-q">${numFor(a, ctx, a.title)}${esc(a.title)}</p>
        <p>${a.promptHtml || esc(a.prompt)}</p>
        <div class="print-lines" aria-hidden="true"></div>
      </section>`;
    },
    numberInput(a, ctx) {
      return `<section class="print-block print-task">
        <p class="print-q">${numFor(a, ctx, a.title)}${esc(a.title)}</p>
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

  // Paper-only extra tasks (a module's `worksheet.tasks`, or tasks the
  // teacher typed into the worksheet generator): grouped under the same
  // ZÁKLAD/ROZŠÍRENIE/BONUS headings as a levelled taskList, each with ruled
  // space to work in. A task is { text | html, level?, answer?, space? }; `text`
  // is escaped, `html` is trusted authored HTML (module files only — the
  // generator always passes teacher input through `text`).
  const DEFAULT_SPACE = 3;
  function extraTaskHtml(t, ctx) {
    const body = t.html || esc(t.text || '').replace(/\n/g, '<br>');
    const space = Number.isInteger(t.space) && t.space >= 0 ? t.space : DEFAULT_SPACE;
    let num = '';
    if (ctx && ctx.num) {
      const n = ++ctx.num.n;
      num = `<span class="print-task-num">${n}.</span> `;
      if (Array.isArray(ctx.key) && t.answer) {
        const label = String(t.text || t.html || '').replace(/<[^>]*>/g, '').trim().slice(0, 90);
        ctx.key.push({ n, label, html: t.answer });
      }
    }
    return `<div class="print-extra-task print-task"><div class="print-extra-body">${num}${body}</div>${space ? `<div class="print-lines" style="height:calc(${space} * var(--ln, 1.7em))" aria-hidden="true"></div>` : ''}</div>`;
  }

  function renderExtraTasks(tasks, ctx) {
    tasks = (tasks || []).filter(Boolean);
    if (!tasks.length) return '';
    const usesLevels = tasks.some(t => LEVEL_LABELS[t.level]);
    if (!usesLevels) return tasks.map(t => extraTaskHtml(t, ctx)).join('');
    const unleveled = tasks.filter(t => !LEVEL_LABELS[t.level]);
    return unleveled.map(t => extraTaskHtml(t, ctx)).join('') + LEVEL_ORDER.filter(l => tasks.some(t => t.level === l)).map(l => `
      <h3 class="task-level-heading">${LEVEL_LABELS[l]}</h3>
      ${tasks.filter(t => t.level === l).map(t => extraTaskHtml(t, ctx)).join('')}
    `).join('');
  }

  // The teacher's solution key, built from the entries renderActivities /
  // renderExtraTasks pushed onto ctx.key while rendering the student sheet.
  function renderAnswerKey(entries) {
    if (!entries || !entries.length) return '';
    return `<section class="print-key">
      <div class="print-label">KĽÚČ RIEŠENÍ — IBA PRE UČITEĽA</div>
      ${entries.map(e => `<div class="print-key-item"><strong>${e.n}.</strong> <span class="muted">${esc(e.label || '')}</span>${ansHtml(e.html)}</div>`).join('')}
    </section>`;
  }

  window.MathPrint = {
    render, renderActivities: renderBody, renderExtraTasks, renderAnswerKey, THEORY_TYPES,
  };
})();
