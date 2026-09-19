# Authoring modules

How to write or replace a content module's `student.activities`. For the
*editorial* rules (what belongs in a module vs. on paper, how to phrase
feedback, prior-knowledge constraints), see `PravidlaTvorbyModulov.txt` —
this file is the *technical* reference: what each activity type needs,
which fields are trusted HTML, and how points are computed.

Start from `modules/_SABLONA-MODULU.js` for a blank module with one worked
example of the three simplest activity types.

## Workflow for replacing a placeholder

See `modules/STRUKTURA-TEMATICKYCH-PLANOV.md` for the directory map. In
short: find the topic in `modules/registry.js`, write the content at the
`file` path already given there (using exactly the same `id`), replace the
`placeholder({...})` call with a literal object with `status: 'ready'` and
the module's real `time`/`type`/`skills` — `year`, `unit`, `unitOrder`,
`topic`, `lesson`, `lessonOrder`, and `file` never change. Then run:

```
node tools/audit.mjs
```

before handing the module off. It checks registry integrity and, per
activity, everything in the "required fields" column below — plus the
editorial-adjacent checks a machine *can* catch: every `choice` answer index
in range, an unknown activity `type`, a module with no `reflection`, and a
module where every `choice`'s correct answer sits at the same index (rule 8:
vary the position).

## Escaping contract

`core/renderers.js` uses `MathUtil.esc()` on any field the module author
wrote as **plain text**: `title`, `question`, `options`, item `text`, `skill`
names, `prompt`. These fields are **trusted authored HTML** and are never
escaped — write real markup into them:

`html`, `promptHtml`, `remember`, `correct`, `hint`, `model`, `note`,
`success`, `reveal`, and a `taskList` item's `html` or `answer` (its `text` is
escaped, same as any other item text)

A module can use the shared visual-diagram classes inside those fields —
`.logic-visual`/`.truth` (an SVG or table dropped straight into `html`, as
the *vyroková formula* and *stereometria* modules do for cube diagrams and
truth tables) — and the authoring building blocks below.

## Building blocks for authored HTML

These classes are defined in `styles/` (mostly `styles/activity.css`) and
are meant to be used directly inside `html`, `promptHtml`, `remember`, or any
other trusted-HTML field listed above. `tools/audit.mjs` fails the build if a
module references a class that isn't defined anywhere under `styles/`, so add
CSS before you reference it, and check the audit output if a class you'd
expect to work silently doesn't apply.

Plain `<p>`, `<h2>`/`<h3>`, `<ul>`/`<ol>`, `<strong>`, `<code>` and `<hr>` are
now styled inside an activity card (`styles/activity.css`'s typography
section) — you no longer need a wrapper class just to get readable
structure. Reach for a block below when the content is a distinct *shape*,
not just "needs to look nicer."

**Colour means something — don't reach for a colour just to decorate.**

- ink green (`--ink`/`--soft`) → the idea worth keeping: `.remember`,
  `.term-list`, `.formula`, `.steps`.
- amber (`--warn`/`--warn-ink`) → caution, **only**: `.warning`. Never used
  decoratively — if you're tempted to make something amber "to stand out",
  it isn't a warning, so use `.formula`/`.hl` instead.
- neutral (`#fafbf9` + `--line`) → structure/illustration, not a fact to
  memorise: `.example`, the default (uncoloured) `.compare`.

**Which block do I reach for?**

| The content is… | Use | Not |
|---|---|---|
| one formula or rule, pulled out to be seen | `.formula` | an inline `style="…"` |
| an ordered procedure (1., 2., 3.) | `<ol class="steps">` | `1) … 2) …` in one `<p>` |
| 2+ named terms with definitions | `.term-list` (+ `.no-symbol` if no glyph) | repeated `<p><strong>Term:</strong> …</p>` |
| a common mistake / thing to watch for | `.warning` | a parenthetical aside |
| a problem with its worked derivation | `.example` | a run-on sentence |
| right vs. wrong side by side | `.compare` with `.good`/`.bad` | "na rozdiel od…" prose |
| one phrase to emphasise mid-sentence | `.hl` | ALL CAPS |
| the single sentence to memorise for the whole activity | the `remember` field | a hand-written `<div class="remember">` |
| a symbol table, truth table, or hand-drawn diagram | `.table-wrap`+`table.truth`, `.logic-visual`, `.math-list` | — |
| a fraction inside a formula or sentence | `.frac` | a flat `a/b` |
| a fractional exponent (a^(1/n)) | `.frac` inside `.pow-exp` | a flat `a^(1/n)` |
| a combination number ("n nad k") | `.combo` | the words "n nad k" as plain text |
| Pascal's triangle | `.pascal-triangle` | a text description of the rows |

### `.frac` — a real stacked fraction

Renders as numerator, a horizontal bar, denominator — for inline use inside
a sentence or a `.formula`, wherever a flat `a/b` would get hard to read
(especially once the numerator or denominator is itself a product, like a
combination-number formula).

```html
<div class="formula">(n nad k) = <span class="frac"><span class="frac-num">n!</span><span class="frac-den">k!·(n−k)!</span></span></div>
```

### `.pow-exp` — a fractional exponent

Nests `.frac` inside a raised, shrunk exponent slot right after the base —
for a rational-exponent expression like a^(1/n) or a^(m/n), where the
fraction itself needs to sit *in the exponent position*, not at full size
next to the base the way a plain `.frac` would render. Put the `.pow-exp`
span directly after the base, with no space — it supplies its own raise and
shrink, so the nested `.frac` doesn't need `vertical-align` or a font-size
override.

```html
a<span class="pow-exp"><span class="frac"><span class="frac-num">1</span><span class="frac-den">n</span></span></span> = <sup>n</sup>√a
```

### `.combo` — combination-number ("n nad k") notation

A tall pair of parentheses around a two-row stack of `n` over `k` — the
usual printed form of a combination number, instead of spelling out "(n nad
k)" as plain words every time.

```html
<span class="combo"><span class="combo-paren">(</span><span class="combo-stack"><span>5</span><span>2</span></span><span class="combo-paren">)</span></span>
```

### `.pascal-triangle` — Pascal's triangle

One `.pascal-row` per row, one `.pascal-num` badge per entry — reuses the
same ink-circle badge look as `.term-symbol`/`.steps`. Don't describe the
rows in a sentence ("Riadok 0: 1. Riadok 1: 1 1. …") — the whole point of
Pascal's triangle is seeing the triangular shape and the "each number is
the sum of the two above it" pattern, which a text description hides.

```html
<div class="pascal-triangle">
  <div class="pascal-row"><span class="pascal-num">1</span></div>
  <div class="pascal-row"><span class="pascal-num">1</span><span class="pascal-num">1</span></div>
  <div class="pascal-row"><span class="pascal-num">1</span><span class="pascal-num">2</span><span class="pascal-num">1</span></div>
</div>
```

### `.formula` — a formula or rule on its own

```html
<div class="formula">A ⊆ B<span class="formula-note">Čítame: „A je podmnožinou B.“</span></div>
```

An optional `.mini-label` above names the rule:

```html
<div class="formula"><span class="mini-label">PODMNOŽINA</span>A ⊆ B</div>
```

### `.steps` — a numbered procedure

A real `<ol>` so it stays semantic; the numbered circle badge is generated
by CSS (`counter()`) — never type the numbers yourself, and inserting a step
never requires renumbering the rest.

```html
<ol class="steps">
  <li>Rozlož každý menovateľ na súčin.</li>
  <li>Nájdi najmenší spoločný menovateľ (obsahujúci každý činiteľ aspoň raz).</li>
  <li>Preveď každý zlomok na tento menovateľ.</li>
  <li>Sčítaj/odčítaj čitatele.</li>
  <li>Skráť výsledok, ak je to možné.</li>
</ol>
```

### `.term-list` — a short glossary of symbols or terms

One `.term-item` per row. `.term-symbol` is a circular badge for a single
glyph (∧, ∨, D…); when a term has no natural single-character symbol (e.g.
"Medián", "Modus"), add `.no-symbol` to `.term-item` and drop the badge:

```html
<div class="term-list">
  <div class="term-item no-symbol">
    <div class="term-name">Medián</div>
    <p class="term-rule">Hodnoty usporiadame podľa veľkosti; pri <span class="hl">nepárnom</span> počte je medián prostredná hodnota, pri <span class="hl">párnom</span> počte je to priemer dvoch prostredných hodnôt.</p>
  </div>
</div>
```

With a symbol badge (see `modules/1-rocnik/vyrokova-formula/04-…js` for the
full four-connective reference):

```html
<div class="term-item">
  <span class="term-symbol">∧</span>
  <div>
    <div class="term-name">Konjunkcia — „A a B“</div>
    <p class="term-rule">Pravdivá iba vtedy, keď sú pravdivé obe časti naraz.</p>
    <p class="term-example">Príklad: <b>„Mám pero a mám zošit.“</b> Pravdivé, len keď mám aj pero, aj zošit.</p>
  </div>
</div>
```

### `.warning` — a common mistake or caution

```html
<div class="warning"><strong>Pozor:</strong> 1 m² nie je 100 cm² — to je najčastejšia chyba. Vždy sa umocňuje aj prevodové číslo, nielen jednotka.</div>
```

### `.example` — a worked example

```html
<div class="example">
  <span class="mini-label">PRÍKLAD</span>
  <p>(2⁻¹)² · 2⁴</p>
  <p>= 2⁻² · 2⁴ = 2⁻²⁺⁴</p>
  <p>= 2² = <strong>4</strong></p>
</div>
```

### `.compare` — right vs. wrong, side by side

Add `.good`/`.bad` to a cell to colour-code it — the same tokens the answer
feedback already uses, so green always means "this one is right."

```html
<div class="compare">
  <div class="bad"><span class="mini-label">ČASTÁ CHYBA</span><p>(a + b)² = a² + b²</p></div>
  <div class="good"><span class="mini-label">SPRÁVNE</span><p>(a + b)² = a² + 2ab + b²</p></div>
</div>
```

### `.hl` — inline highlight

Replaces ALL-CAPS-as-emphasis. Use it for the one word or phrase in a
sentence that changes the meaning (a condition, a case), not for general
decoration:

```html
<p>pri <span class="hl">nepárnom</span> počte je medián prostredná hodnota</p>
```

## Points

One table, `core/scoring.js`'s `MathScore`, decides every point value — see
`docs/ARCHITECTURE.md`'s "The activity player" section for the full
mechanism. The max per type (honoured unless the activity sets its own
`maxPoints`):

| Type | Max points | Awarded |
|---|---:|---|
| `choice` | 100 | 100 on the first try, 60 on the second |
| `numberInput` | 100 | 100 on the first try, 60 on the second |
| `sortChoice` | 100 | `100 × correctItems / totalItems`, rounded |
| `matrix` | 120 | `120 × correctItems / totalItems`, rounded |
| `notebook` | 20 | flat, on acknowledging the note |
| `selfWrite` | 30 | flat, on revealing the model sentence |
| `taskList` | 100 | `100 × checkedItems / totalItems`, rounded (honour system — nothing is validated) |
| `info`, `explain`, `intro`, `coordinatePlot`, `reflection` | 0 | — |

## Activity types

Every activity needs `id` (unique within the module), `type`, and usually
`phase` (a short label shown in the header — see the "phase vocabulary"
note below) and `skill` (groups this activity under a named skill in the
teacher's live diagnostics and CSV export; defaults to `phase` or `"aktivita"`
if omitted).

### `info` — read-only content

Required: `title`, `html`. Optional: `continueLabel` (default
"Pokračovať"), `remember` (see below).

### `explain` — a short explanation

Required: `title`, `html`. Optional: `remember` (trusted HTML, shown in a
highlighted "Zapamätaj si" box) and `rememberLabel` (plain text, overrides
the "Zapamätaj si:" prefix; set to `false` to drop the label entirely — e.g.
when the box holds something other than a single fact to memorise).

### `choice` — single-select, up to two tries

Required: `question` (rule 7: **everything** needed to answer must be here
— `prompt` is supplementary context, not guaranteed to be visible),
`options` (array, 2+ strings), `answer` (index of the correct option).
Optional: `prompt`, `stimulus` (large highlighted text above the question,
`\n` becomes `<br>`), `correct` (shown after a correct answer), `hint`
(shown after the first wrong attempt only). Vary `answer`'s position across
a module's activities (rule 8) — `tools/audit.mjs` flags a module where
every `choice` shares one index.

### `sortChoice` — classify every item into one of two buckets

Required: `title`, `question`, `labels` (exactly 2 strings, `labels[0]` is
the "true" bucket), `items` (array of `{ text, answer: boolean, why:
string }` — `why` is shown next to every item, right or wrong, after
checking).

### `intro` — full-bleed lesson-title cover

A standalone "curtain up" moment for the lesson's topic, meant to sit
somewhere near the start of `student.activities` (after an opening recap,
say) so the topic actually registers instead of blending into the quiet
`module-topic-bar` every other screen repeats on every step. Unlike every
other type, it takes **no title field** — the eyebrow and heading are drawn
straight from the module's own registry entry (`ctx.unit`/`ctx.topic`, i.e.
`modules/registry.js`'s `unit`/`topic`), so they can never drift out of sync
with the catalog. It also skips the standard header chrome entirely — no
phase tag, XP, progress bar, or "Krok X z Y".

Optional: `goals` (array of short strings — rendered as a numbered "Na
dnešnej hodine sa naučíš:" list; omit entirely rather than passing an empty
array), `html` (trusted HTML, shown above the goals list, for a case a short
list doesn't fit), `continueLabel` (default "Začíname").

### `notebook` — acknowledge a copy-to-notebook note

Required: `html` (the **exact** finished text the student copies — never
just an instruction to write the definition themselves, per
`PravidlaTvorbyModulov.txt`). Optional: `title` (default "Zapíš si do
zošita"), `continueLabel` (default "Mám zapísané").

**Placement**: right after the `explain`/`info` activity that introduces the
concept it records, before the first `choice`/`numberInput`/`matrix`/
`sortChoice` practice activity — not saved for after practice. Several
sub-concepts explained in sequence get one `notebook` moment each, placed
right after each one's own explanation, rather than a single one at the end.

### `taskList` — checklist of tasks, honour-system XP

For a set of problems the student solves on paper while the app just tracks
which ones are done — no answer is ever auto-checked. Required: `title`,
`items` (array of `{ text }` or `{ html }` — `html` wins if both are set, so
a task can carry a fraction, an exponent or a small SVG). Optional: `html`
(intro text above the list), `note` (shown after the list), `continueLabel`.

Ticked boxes are per-student, stored in the browser (`localStorage`, keyed by
module + activity) via `ctx.getChecks`/`ctx.setChecks` — they survive a
refresh or stepping back/forward. The indices themselves are never sent to
the teacher (see `core/session.js`'s `sendProgress()`, which only ever reads
`state.answers`/`state.score`, not the checks store) — but on "Pokračovať",
the *count* of ticked boxes is recorded as partial-credit XP (`100 ×
checked/total`, see the scoring table above), same as any other activity's
score. Nothing validates that a ticked box means the task was actually done
right — this is an honour-system participation score, not a graded one. The
Pokračovať button is never disabled — nothing forces a student to tick
everything before moving on.

In a live lesson, an item's "Zobraz riešenie" reveal (below) is hidden —
`ctx.mode === 'live'` — so a student can't just peek at the answer instead of
doing the task while the teacher is watching in real time; solo play still
shows it.

**Levelled zbierka (základ/rozšírenie/bonus) is one `taskList` activity, not
three.** Give each item an optional `level: 'zaklad' | 'rozsirenie' |
'bonus'` — the renderer groups items under ZÁKLAD/ROZŠÍRENIE/BONUS headings,
in that order, inside the single activity (skip `level` entirely for a flat,
unlevelled list). An item can also carry `answer` (trusted HTML, same rules
as `html`) — when set, a "Zobraz riešenie" button appears under that item and
reveals it on click (never auto-checked, purely a self-check the student
requests; leave `answer` unset on an item that shouldn't be revealable).

**Choosing between `notebook`, `taskList` and `selfWrite`** (rule 6): use
`notebook` when the student must copy an *exact finished text* you wrote;
`taskList` when the student solves *your exact task statements* on paper and
just tracks progress; `selfWrite` when the student must *formulate an idea in
their own words*. Never use one as a stand-in for another.

### `selfWrite` — formulate an idea in your own words

Required: `title`, `prompt` (or `promptHtml` for formatted text). Optional
but strongly recommended: `model` — the sentence students compare their own
against after writing it. Never used as a stand-in for `notebook`.

### `numberInput` — free-form numeric answer

Required: `title`, `prompt`, `validate` (a key into `core/renderers.js`'s
`NUMBER_VALIDATORS` table), `success` (shown on a correct answer), `hint`
(shown after the first wrong attempt). Optional: `reveal` (shown on the
second wrong attempt instead of a generic message — use it for a concrete
worked counter-example).

Two validators exist: `'oddComposite'` (a specific puzzle — is this a
positive odd composite number) and the general-purpose `'exact'`, which
compares the typed value against a numeric `answer` field you set on the
activity (works for negative numbers and decimals; a Slovak decimal comma
is accepted alongside a dot). Use `'exact'` for an ordinary computed
answer — set `answer: -32` (say), not a new named function. Add a new
validator function to `NUMBER_VALIDATORS` (and the matching key to
`tools/audit.mjs`'s `KNOWN_NUMBER_VALIDATORS`) only for a check that isn't
"does it equal this one number" — a puzzle with many correct answers, like
`oddComposite`.

### `matrix` — match every item to one label

Required: `title`, `labels` (array of strings), `items` (array of `{ text,
answer }` where `answer` is one of `labels`, matched by exact string).

### `coordinatePlot` — plot points and/or function curves on labelled axes

Required: `title`. Optional: `html` (text above the plot), `points` (array
of `{ x, y, label? }`), `xMin`/`xMax`/`yMin`/`yMax` (default -1/5/-1/9),
`xStep`/`yStep` (default 1 — the spacing between grid lines/ticks; set this
to something coarser than 1 for a wide domain, e.g. a 0–360° angle axis, or
`Math.PI / 2` for a radian axis, rather than letting it draw a line per
integer), `xTickFormat`/`yTickFormat` (a function mapping a tick's numeric
value to its label string, e.g. `x => x + '°'` or a helper that renders
multiples of π — default is the plain number), `ariaLabel`, `note`,
`continueLabel`.

`curves` (array of `{ fn, color?, label?, samples? }`) draws one or more
continuous function graphs — `fn` is a real JS function (`x => Math.sin(x)`,
or any composite expression; modules are plain classic scripts, so this
needs no formula parser), sampled across `[xMin, xMax]` (`samples`, default
120) and drawn as a smooth polyline. `color` overrides the default ink
stroke (useful when overlaying more than one curve, e.g. sin x and cos x
together); `label` draws a small tag at the curve's right end. A function
with vertical asymptotes (tg x, cotg x) should have `fn` itself return `NaN`
once the true value would leave a sane `yMin`/`yMax` window (e.g. `x => {
const y = Math.tan(x); return Math.abs(y) > 4.2 ? NaN : y; }`) — the sampler
drops non-finite points, so the curve stops cleanly instead of drawing a
near-vertical line across the whole plot. `asymptotes` (array of x-values)
draws a dashed vertical line at each — use it alongside that `NaN` guard to
mark exactly where the function is undefined. Don't hand-roll a
`<polyline>`/point-by-point SVG in an `info` activity's `html` for a
function graph when this exists — it keeps the axis/grid/point plumbing
(and its labelling) in one place instead of copy-pasted per module.

### `reflection` — closing self-assessment

Required: `title`, `prompt`, `skills` (array of short skill/competency
labels — each gets its own 🟢/🟡/🔴 row). Conventionally the last activity
in a module (`phase: 'ZÁVER'`), and every `ready` module should end with
one — informational only, feeds the "Ako sa cítiš v téme?" summary on the
result screen and the teacher's CSV export, never a grade.

## Phase vocabulary

`phase` is free text shown as a small tag in the activity header and used to
group the teacher's live diagnostics. It has drifted over 279 modules to
117 distinct values, most used only once or twice. There's no enforced
list, but before inventing a new one, check whether one of the common ones
already fits: `POCHOP`, `NOVÝ POJEM` / `NOVÝ POJEM / PRAVIDLO`, `OBJAVUJ`,
`OVER` / `OVER SI`, `PRECVIČ`, `PRENES`, `ARGUMENTUJ`, `NÁJDI CHYBU`,
`VYSVETLI`, `ZOŠIT`, `BEZ MOBILU`, `SEBAHODNOTENIE`, `ZÁVER`. Consolidating
the long tail is an editorial cleanup, not something `tools/audit.mjs`
enforces — it only reports the vocabulary size and the singletons.
