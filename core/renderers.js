// core/renderers.js — window.ActivityRenderers
//
// One render function per activity `type`, looked up by core/session.js's
// play(). Every renderer follows the same shape: build markup into ctx.app,
// wire the back button, wire whatever inputs the activity needs.
//
// Scoring contract: renderers no longer compute point values themselves.
// ctx.record(activity, outcome) takes only the FACTS of what happened —
// core/scoring.js (MathScore.award) turns that into a point value. See that
// file for the outcome shape per activity type.
//
// Escaping contract (see also docs/AUTHORING.md): MathUtil.esc() wraps any
// value that came from the module author as PLAIN TEXT (title, question,
// options, item text, skill names, prompts). The fields `html`, `promptHtml`,
// `remember`, `correct`, `hint`, `model`, `note`, `success`, `reveal` (and, on
// a taskList item, `item.html`) are TRUSTED AUTHORED HTML on purpose —
// modules hand-write SVG diagrams, tables and formatted explanations into
// them — and are never escaped. A value that did not come from the module
// author (a live-lesson participant's nick, for instance) must never be
// printed by this file at all; that only happens on the teacher's own
// screens (core/views-teacher.js), which esc() themselves.
(function () {
  if (!window.MathUtil || !window.MathScore) {
    throw new Error('core/renderers.js: chýba core/util.js alebo core/scoring.js pred ním.');
  }
  const { esc, $, $$ } = window.MathUtil;
  const R = {};

  // --- Shared building blocks -------------------------------------------

  function header(activity, ctx) {
    const pct = Math.round((ctx.index / ctx.total) * 100);
    const gradingBadge = window.MathScore.badgeHtml(ctx.mode, ctx.grading);
    return `<div class="module-topic-bar"><span>${esc(ctx.unit || '')}</span><strong>${esc(ctx.topic || '')}</strong></div>
      <div class="row activity-top">
        <div class="row gap-sm">${ctx.index > 0 ? '<button class="ghost back-step" type="button">← Späť</button>' : ''}<span class="tag phase">${esc(activity.phase || 'AKTIVITA')}</span></div>
        <div class="row gap-sm items-center"><strong>${ctx.score} XP</strong>${gradingBadge}</div>
      </div>
      <div class="progress"><div style="width:${pct}%"></div></div>
      <p class="muted">Krok ${ctx.index + 1} z ${ctx.total}</p>`;
  }

  function shell(ctx, activity, innerHtml, extraClass) {
    const cls = 'card learning-card' + (extraClass ? ' ' + extraClass : '');
    ctx.app.innerHTML = `<article class="${cls}">${header(activity, ctx)}${innerHtml}</article>`;
    wireBack(ctx);
  }

  function wireBack(ctx) {
    const b = $('.back-step');
    if (b && ctx.prev) b.onclick = ctx.prev;
  }

  function continueButtonHtml(label) {
    return `<button class="btn" id="continue">${esc(label || 'Pokračovať')}</button>`;
  }

  function wireContinue(ctx, onClick) {
    $('#continue').onclick = onClick || ctx.next;
  }

  function nextButtonHtml() {
    return '<div><button class="btn" id="next">Pokračovať</button></div>';
  }

  function wireNext(ctx) {
    const btn = $('#next');
    if (btn) btn.onclick = ctx.next;
  }

  function feedbackBox(kind, html) {
    return `<div class="feedback ${kind}">${html}</div>`;
  }

  // Common "record the outcome, lock the inputs, show feedback with a
  // Pokračovať button" tail shared by choice, sortChoice, numberInput, matrix.
  function conclude(ctx, activity, outcome, kind, messageHtml, lockSelector) {
    ctx.record(activity, outcome);
    if (lockSelector) $$(lockSelector).forEach(el => { el.disabled = true; });
    $('#feedback').innerHTML = feedbackBox(kind, messageHtml + nextButtonHtml());
    wireNext(ctx);
  }

  // Shared "pick exactly one of N buttons per group" wiring for sortChoice's
  // per-row toggle and reflection's per-skill 🟢/🟡/🔴 toggle. `store` is the
  // in-progress answers object; `submitSelector`'s disabled state is kept in
  // sync with "every group has an answer".
  function wireSingleSelectGroup(itemSelector, dataKey, valueKey, store, totalCount, submitSelector, parseValue) {
    $$(itemSelector).forEach(btn => {
      btn.onclick = () => {
        const key = btn.dataset[dataKey];
        store[key] = parseValue ? parseValue(btn.dataset[valueKey]) : btn.dataset[valueKey];
        $$(`[data-${dataKey}="${CSS.escape(key)}"]`).forEach(x => x.classList.remove('selected'));
        btn.classList.add('selected');
        const submit = $(submitSelector);
        if (submit) submit.disabled = Object.keys(store).length !== totalCount;
      };
    });
  }

  // --- Renderers -----------------------------------------------------------

  R.info = (a, ctx) => {
    shell(ctx, a, `<h1>${esc(a.title)}</h1>${a.html || ''}${continueButtonHtml(a.continueLabel)}`);
    wireContinue(ctx);
  };

  R.explain = (a, ctx) => {
    shell(ctx, a, `
      <div class="eyebrow">KRÁTKE VYSVETLENIE</div>
      <h1>${esc(a.title)}</h1>
      ${a.html || ''}
      ${a.remember ? `<div class="remember"><strong>Zapamätaj si:</strong> ${a.remember}</div>` : ''}
      ${continueButtonHtml('Rozumiem, pokračovať')}
    `, 'explain-card');
    wireContinue(ctx);
  };

  R.notebook = (a, ctx) => {
    shell(ctx, a, `
      <div class="eyebrow">ZOŠIT</div>
      <h1>✍️ ${esc(a.title || 'Zapíš si do zošita')}</h1>
      ${a.html || ''}
      <div class="actions">${continueButtonHtml(a.continueLabel || 'Mám zapísané')}</div>
    `, 'notebook');
    wireContinue(ctx, () => { ctx.record(a, { correct: true, attempts: 1 }); ctx.next(); });
  };

  // Unscored checklist of tasks the student ticks off as they work through
  // them on paper — the app never grades this, it just remembers which boxes
  // are checked (ctx.getChecks/setChecks, backed by localStorage in
  // core/session.js) so it survives a refresh or stepping back/forward, and
  // is never sent to the teacher (see core/session.js's sendProgress()).
  R.taskList = (a, ctx) => {
    const checked = new Set(ctx.getChecks(a.id));
    const total = a.items.length;
    const rowHtml = (it, i) => `
      <label class="task-row">
        <input type="checkbox" data-i="${i}"${checked.has(i) ? ' checked' : ''}>
        <span>${it.html || esc(it.text)}</span>
      </label>`;
    shell(ctx, a, `
      <h1>${esc(a.title)}</h1>
      ${a.html || ''}
      <div class="task-list">${a.items.map(rowHtml).join('')}</div>
      <p class="muted task-count" id="taskCount"></p>
      ${a.note ? `<div class="notice">${a.note}</div>` : ''}
      ${continueButtonHtml(a.continueLabel)}
    `);
    const updateCount = () => {
      $('#taskCount').textContent = `Hotové: ${checked.size} / ${total}`;
    };
    $$('.task-list input[type="checkbox"]').forEach(box => {
      box.onchange = () => {
        const i = Number(box.dataset.i);
        if (box.checked) checked.add(i); else checked.delete(i);
        ctx.setChecks(a.id, [...checked]);
        updateCount();
      };
    });
    updateCount();
    wireContinue(ctx, () => { ctx.record(a, { correct: true, attempts: 1 }); ctx.next(); });
  };

  R.selfWrite = (a, ctx) => {
    let revealed = false;
    shell(ctx, a, `
      <div class="eyebrow">MATEMATICKÉ VYJADROVANIE</div>
      <h1>${esc(a.title)}</h1>
      <p>${a.promptHtml || esc(a.prompt)}</p>
      <p class="muted">Aplikácia tvoju vetu neznámkuje. Najprv ju vytvor sám/sama, potom ju porovnaj s možnou presnou formuláciou.</p>
      <button class="ghost" id="reveal">Mám napísané – ukáž porovnanie</button>
      <div id="modelbox"></div>
    `, 'notebook');
    $('#reveal').onclick = () => {
      revealed = true;
      const model = a.model || '<em>Vzorová formulácia v tomto kroku nie je nastavená. Pokračuj podľa pokynov učiteľa.</em>';
      $('#modelbox').innerHTML = `<div class="remember"><strong>Porovnaj so svojou vetou:</strong><br>${model}</div>${continueButtonHtml()}`;
      $('#reveal').disabled = true;
      wireContinue(ctx, () => { ctx.record(a, { correct: true, attempts: 1 }); ctx.next(); });
    };
  };

  R.choice = (a, ctx) => {
    let attempts = 0;
    shell(ctx, a, `
      ${a.prompt ? `<p class="muted">${esc(a.prompt)}</p>` : ''}
      ${a.stimulus ? `<div class="stimulus">${esc(a.stimulus).replace(/\n/g, '<br>')}</div>` : ''}
      <h1>${esc(a.question)}</h1>
      <div id="opts">${a.options.map((o, i) => `<button class="choice" data-i="${i}">${esc(o)}</button>`).join('')}</div>
      <div id="feedback"></div>
    `);
    const markChoice = (i, cls) => { const el = $(`.choice[data-i="${i}"]`); if (el) el.classList.add(cls); };
    $$('.choice').forEach(btn => btn.onclick = () => {
      attempts++;
      const ok = Number(btn.dataset.i) === a.answer;
      if (ok) {
        markChoice(a.answer, 'correct');
        conclude(ctx, a, { correct: true, attempts },
          'good', `<strong>Správne.</strong> ${a.correct || ''}`, '.choice');
      } else if (attempts === 1) {
        $('#feedback').innerHTML = feedbackBox('bad', `<strong>Ešte nie.</strong> ${a.hint || 'Skús sa na zadanie pozrieť znovu.'}`);
      } else {
        markChoice(Number(btn.dataset.i), 'wrong');
        markChoice(a.answer, 'correct');
        conclude(ctx, a, { correct: false, attempts },
          'bad', `<strong>Teraz si to vysvetlíme.</strong> Správna odpoveď je <strong>${esc(a.options[a.answer])}</strong>.<br>${a.correct || ''}`, '.choice');
      }
    });
  };

  R.sortChoice = (a, ctx) => {
    const answers = {};
    shell(ctx, a, `
      <h1>${esc(a.title)}</h1>
      <p class="muted">Pri každej vete vyber jednu možnosť.</p>
      <div class="sort-list">${a.items.map((it, i) => `
        <div class="sort-row">
          <div>${esc(it.text)}</div>
          <div class="seg">
            <button data-row="${i}" data-v="1">${esc(a.labels[0])}</button>
            <button data-row="${i}" data-v="0">${esc(a.labels[1])}</button>
          </div>
        </div>`).join('')}</div>
      <button class="btn" id="check" disabled>Vyhodnotiť</button>
      <div id="feedback"></div>
    `);
    wireSingleSelectGroup('.seg button', 'row', 'v', answers, a.items.length, '#check', v => v === '1');
    $('#check').onclick = () => {
      let okCount = 0;
      const detail = a.items.map((it, i) => {
        const ok = answers[i] === it.answer;
        if (ok) okCount++;
        return `<li class="${ok ? 'oktext' : 'badtext'}"><strong>${ok ? '✓' : '✗'} ${esc(it.text)}</strong> – ${esc(it.why)}</li>`;
      }).join('');
      conclude(ctx, a, { correct: okCount === a.items.length, correctCount: okCount, itemCount: a.items.length },
        okCount === a.items.length ? 'good' : 'bad',
        `<strong>${okCount}/${a.items.length} správne.</strong><ul>${detail}</ul>`,
        '#check, .seg button');
    };
  };

  R.matrix = (a, ctx) => {
    shell(ctx, a, `
      <h1>${esc(a.title)}</h1>
      <div class="matrix-list">${a.items.map((it, i) => `
        <div class="matrix-row">
          <div>${esc(it.text)}</div>
          <select data-i="${i}"><option value="">Vyber…</option>${a.labels.map(l => `<option>${esc(l)}</option>`).join('')}</select>
        </div>`).join('')}</div>
      <button class="btn" id="check">Vyhodnotiť</button>
      <div id="feedback"></div>
    `);
    $('#check').onclick = () => {
      let ok = 0;
      $$('select[data-i]').forEach(s => {
        const itemOk = s.value === a.items[Number(s.dataset.i)].answer;
        if (itemOk) ok++;
        if (s.value) s.classList.add(itemOk ? 'answer-good' : 'answer-bad');
      });
      conclude(ctx, a, { correct: ok === a.items.length, correctCount: ok, itemCount: a.items.length },
        ok === a.items.length ? 'good' : 'bad',
        `<strong>${ok}/${a.items.length} správne.</strong><ul>${a.items.map(it => `<li>${esc(it.text)} → <strong>${esc(it.answer)}</strong></li>`).join('')}</ul>`,
        '#check, select[data-i]');
    };
  };

  // Named validators for numberInput.validate — extend this table (and the
  // matching KNOWN_NUMBER_VALIDATORS set in tools/audit.mjs) when a new
  // numberInput activity needs a different check.
  const NUMBER_VALIDATORS = {
    oddComposite(n) {
      if (!Number.isInteger(n) || n % 2 === 0 || n < 3) return false;
      for (let d = 2; d <= Math.sqrt(n); d++) if (n % d === 0) return true;
      return false;
    },
    // General-purpose check against a numeric activity.answer — use this for
    // any numberInput whose correct value isn't a positive-integer puzzle
    // (negative numbers, decimals). Set answer: <number> on the activity.
    exact(n, activity) {
      return Number.isFinite(activity.answer) && Math.abs(n - activity.answer) < 1e-9;
    },
  };

  function validateNumber(activity, rawValue) {
    // Accept a Slovak decimal comma ("3,5") alongside a plain dot.
    const n = Number(String(rawValue).trim().replace(',', '.'));
    if (!Number.isFinite(n)) return false;
    const fn = NUMBER_VALIDATORS[activity.validate];
    return fn ? fn(n, activity) : false;
  }

  R.numberInput = (a, ctx) => {
    let attempts = 0;
    shell(ctx, a, `
      <h1>${esc(a.title)}</h1>
      <p>${esc(a.prompt)}</p>
      <div class="field"><input id="num" inputmode="decimal" placeholder="Napíš číslo"></div>
      <button class="btn" id="check">Overiť</button>
      <div id="feedback"></div>
    `);
    $('#check').onclick = () => {
      attempts++;
      const v = $('#num').value.trim();
      if (validateNumber(a, v)) {
        $('#num').classList.add('answer-good');
        conclude(ctx, a, { correct: true, attempts },
          'good', `<strong>Áno.</strong> ${a.success}`, '#check, #num');
      } else if (attempts === 1) {
        $('#feedback').innerHTML = feedbackBox('bad', a.hint || 'Skús to ešte raz.');
      } else {
        const reveal = a.reveal || 'Skús sa k tejto úlohe vrátiť neskôr — teraz pokračujeme ďalej.';
        $('#num').classList.add('answer-bad');
        conclude(ctx, a, { correct: false, attempts }, 'bad', reveal, '#check, #num');
      }
    };
  };

  // A coordinate-plane SVG for tasks that plot points on axes — used by no
  // module yet, but kept and documented (docs/AUTHORING.md) because several
  // unwritten function modules will need exactly this.
  R.coordinatePlot = (a, ctx) => {
    const width = 620, height = 420, pad = 48;
    const xmin = a.xMin ?? -1, xmax = a.xMax ?? 5, ymin = a.yMin ?? -1, ymax = a.yMax ?? 9;
    const sx = x => pad + (x - xmin) * (width - 2 * pad) / (xmax - xmin);
    const sy = y => height - pad - (y - ymin) * (height - 2 * pad) / (ymax - ymin);
    const xTicks = Array.from({ length: Math.floor(xmax - xmin) + 1 }, (_, i) => xmin + i);
    const yTicks = Array.from({ length: Math.floor(ymax - ymin) + 1 }, (_, i) => ymin + i);
    const grid = [
      ...xTicks.map(x => `<line x1="${sx(x)}" y1="${pad}" x2="${sx(x)}" y2="${height - pad}" class="plot-grid"/>`),
      ...yTicks.map(y => `<line x1="${pad}" y1="${sy(y)}" x2="${width - pad}" y2="${sy(y)}" class="plot-grid"/>`),
    ].join('');
    const axes = `${xmin <= 0 && xmax >= 0 ? `<line x1="${sx(0)}" y1="${pad}" x2="${sx(0)}" y2="${height - pad}" class="plot-axis"/>` : ''}${ymin <= 0 && ymax >= 0 ? `<line x1="${pad}" y1="${sy(0)}" x2="${width - pad}" y2="${sy(0)}" class="plot-axis"/>` : ''}`;
    const labels = `${xTicks.map(x => `<text x="${sx(x)}" y="${height - pad + 24}" text-anchor="middle" class="plot-label">${esc(x)}</text>`).join('')}${yTicks.map(y => `<text x="${pad - 12}" y="${sy(y) + 5}" text-anchor="end" class="plot-label">${esc(y)}</text>`).join('')}`;
    const pts = (a.points || []).map(p => `<g><circle cx="${sx(p.x)}" cy="${sy(p.y)}" r="7" class="plot-point"/><text x="${sx(p.x) + 10}" y="${sy(p.y) - 10}" class="plot-point-label">${esc(p.label || `(${p.x}, ${p.y})`)}</text></g>`).join('');
    shell(ctx, a, `
      <h1>${esc(a.title)}</h1>
      ${a.html || ''}
      <div class="coordinate-wrap">
        <svg class="coordinate-plot" viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(a.ariaLabel || 'Body v karteziánskej súradnicovej sústave')}">
          ${grid}${axes}${labels}${pts}
          <text x="${width - pad + 16}" y="${sy(0) - 8}" class="plot-axis-name">x</text>
          <text x="${sx(0) + 10}" y="${pad - 14}" class="plot-axis-name">y</text>
        </svg>
      </div>
      ${a.note ? `<div class="notice">${a.note}</div>` : ''}
      ${continueButtonHtml(a.continueLabel)}
    `);
    wireContinue(ctx);
  };

  R.reflection = (a, ctx) => {
    const values = {};
    const levels = [['green', 'Rozumiem a viem vysvetliť'], ['yellow', 'Asi rozumiem, potrebujem príklad'], ['red', 'Zatiaľ v tom nemám jasno']];
    shell(ctx, a, `
      <h1>${esc(a.title)}</h1>
      <p>${esc(a.prompt)}</p>
      <div class="reflection-list">${a.skills.map(s => `
        <div class="reflection-row">
          <strong>${esc(s)}</strong>
          <div class="reflection-buttons">${levels.map(([v, l]) => `<button data-s="${esc(s)}" data-v="${v}" title="${esc(l)}">${v === 'green' ? '🟢' : v === 'yellow' ? '🟡' : '🔴'} ${esc(l)}</button>`).join('')}</div>
        </div>`).join('')}</div>
      <button class="btn" id="finish" disabled>Dokončiť modul</button>
    `);
    wireSingleSelectGroup('[data-s]', 's', 'v', values, a.skills.length, '#finish');
    $('#finish').onclick = () => { ctx.setReflection(values); ctx.finish(); };
  };

  window.ActivityRenderers = R;
})();
