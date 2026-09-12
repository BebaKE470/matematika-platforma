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

A module can use the shared visual-diagram classes inside those fields:
`.logic-visual`/`.truth` (an SVG or table dropped straight into `html`, as
the *vyroková formula* and *sterometria* modules do for cube diagrams and
truth tables) and `.example-grid`/`.compare`/`.math-list` (two- or one-column
authoring layouts for a worked example or a side-by-side comparison — not
used by any shipped module yet, but defined in `styles/base.css` for
exactly this).

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
| `info`, `explain`, `coordinatePlot`, `reflection`, `taskList` | 0 | — |

## Activity types

Every activity needs `id` (unique within the module), `type`, and usually
`phase` (a short label shown in the header — see the "phase vocabulary"
note below) and `skill` (groups this activity under a named skill in the
teacher's live diagnostics and CSV export; defaults to `phase` or `"aktivita"`
if omitted).

### `info` — read-only content

Required: `title`, `html`. Optional: `continueLabel` (default
"Pokračovať").

### `explain` — a short explanation

Required: `title`, `html`. Optional: `remember` (shown in a highlighted
"Zapamätaj si" box).

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

### `notebook` — acknowledge a copy-to-notebook note

Required: `html` (the **exact** finished text the student copies — never
just an instruction to write the definition themselves, per
`PravidlaTvorbyModulov.txt`). Optional: `title` (default "Zapíš si do
zošita"), `continueLabel` (default "Mám zapísané").

### `taskList` — unscored checklist of tasks

For a set of problems the student solves on paper while the app just tracks
which ones are done — no grading, no answers auto-checked. Required: `title`,
`items` (array of `{ text }` or `{ html }` — `html` wins if both are set, so
a task can carry a fraction, an exponent or a small SVG). Optional: `html`
(intro text above the list), `note` (shown after the list), `continueLabel`.

Ticked boxes are per-student, stored in the browser (`localStorage`, keyed by
module + activity) via `ctx.getChecks`/`ctx.setChecks` — they survive a
refresh or stepping back/forward, are worth 0 points, and are never sent to
the teacher's live view (see `core/session.js`'s `sendProgress()`, which only
ever reads `state.answers`/`state.score`, not the checks store). The
Pokračovať button is never disabled — nothing forces a student to tick
everything before moving on.

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

### `coordinatePlot` — plot points on labelled axes

Required: `title`. Optional: `html` (text above the plot), `points` (array
of `{ x, y, label? }`), `xMin`/`xMax`/`yMin`/`yMax` (default -1/5/-1/9),
`ariaLabel`, `note`, `continueLabel`. Not used by any shipped module yet —
kept and documented because several unwritten function-graph modules will
need it; don't hand-roll an SVG in an `info` activity's `html` when this
exists.

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
