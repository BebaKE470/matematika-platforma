# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static, vanilla-JS (no build step, no npm, no framework) web platform of interactive math learning modules for Slovak secondary-school students (1.–3. ročník), covering both solo practice and a "live lesson" mode where a teacher broadcasts a session code and watches students' progress in real time. Deployed to Vercel as static files (`vercel.json` just sets `cleanUrls`/`trailingSlash`).

## Running / testing

There is no build tool, package manager, or test suite. Development is:

- **Run it**: open `index.html` directly in a browser, or serve the folder with any static file server (e.g. `npx serve .`). It must be served over `file://` or `http://` from the project root, not just the module folder — `index.html` loads `config.js`, `modules/registry.js`, and `core/*.js` with root-relative paths.
- **Syntax-check a module before committing**: `node --check modules/<path>/<file>.js` (every content module is plain JS executed via a `<script>` tag, so a syntax error breaks the whole app when that module loads).
- **Live realtime testing**: `config.js` holds a Supabase URL/anon key used only for Realtime Broadcast (join codes for live lessons). No database tables, no persisted results — everything is ephemeral, broadcast-only.

## Architecture

### Loading model
`index.html` loads four scripts in order: `config.js` → `modules/registry.js` → `core/platform.js` → `core/renderers.js` → `core/app.js`. Individual module content files (the actual lesson content, one per topic) are **not** loaded up front — `core/platform.js` (`MathPlatform.loadModule(id)`) lazily injects a `<script>` tag for a module's file only when the student opens that topic, and the module registers itself via `MathPlatform.registerModule({...})` (defined in `core/platform.js`) once loaded.

### The three layers
- **`modules/registry.js`** (`window.MATH_MODULE_INDEX`) — the single source of truth for the catalog: every topic across all 3 years, its `id`, `year`, `unit`/`unitOrder`, `topic`, `lesson`/`lessonOrder`, `status` (`'ready'` or `'placeholder'`), and the `file` path where its content module lives. This drives every catalog/navigation view — nothing else defines ordering or grouping.
- **`modules/<year>-rocnik/<unit-slug>/<NN>-<topic-slug>.js`** — one content module per lesson topic, calling `MathPlatform.registerModule({ id, teacher: {...}, student: {...} })`. `id` **must** match the registry entry exactly (see rule below).
- **`core/app.js`** — the SPA router/controller (hash-based routing via `location.hash`, re-rendered on `hashchange`) plus all screens: home, student catalog (`catalog` → `catalog/year/N` → `catalog/unit/N/<unit>`), module player (`module/<id>` → `play`), teacher area (password-gated locally via `sessionStorage`, `teacher` → `teacher-year` → `teacher-unit` → `method/<id>` metodická karta → `teacher-live/<id>`), and the join flow for students (`join/<id>/<code>`).
- **`core/renderers.js`** (`window.ActivityRenderers`) — one renderer function per activity `type` (`info`, `explain`, `choice`, `sortChoice`, `notebook`, `selfWrite`, `numberInput`, `matrix`, `coordinatePlot`, `reflection`). `core/app.js`'s `play()` looks up `ActivityRenderers[activity.type]` and calls it with `(activity, ctx)`, where `ctx` exposes `record(activity, correct, attempts, points)`, `next()`, `prev()`, `setReflection()`, `finish()`.

### Module content shape
Each module (see `modules/_SABLONA-MODULU.js` for the blank template, and any file under `modules/<year>-rocnik/` for a filled example) has two top-level parts that are **deliberately different in scope**:
- `teacher` — the methodology card for the *whole* lesson (placement in the plán, prerequisites, goals, content/performance standards from the plán, competencies, enrichment, minute-by-minute `flow`, diagnostics, partial-use options). Rendered by `method()` in `core/app.js`.
- `student` — only the slice of the lesson where the app is actually used (often much shorter than the full lesson), as an `activities` array consumed by the player.

Scoring: `activityMaxPoints()`/`moduleMaxPoints()` in `core/app.js` derive max points per activity type (`choice`/`sortChoice`: 100, `numberInput`: 100, `matrix`: 120, `notebook`: 20, `selfWrite`: 30) unless an activity sets its own `maxPoints`. XP is explicitly *not* a grade; grading (if a teacher enables it) is computed separately from percent thresholds stored in `localStorage`.

### Live lesson mode
No backend database. `teacherLive(id)` generates a random join code, opens a Supabase Realtime Broadcast channel (`math-<code>`), and renders a QR code (lazy-loaded `qrcodejs` from a CDN) linking to `#join/<id>/<code>`. Students' `sendProgress()` broadcasts their state on every answer/step; the teacher's channel handler aggregates it into the live diagnostics view and CSV export. Ending a lesson just unsubscribes the channel — nothing is persisted server-side; the teacher's CSV export is the only durable record and must happen before leaving the page.

## Content authoring rules (from `PravidlaTvorbyModulov.txt`)

These are the project's binding editorial/didactic rules for writing or replacing module content — follow them whenever creating or editing a module under `modules/`:

1. **Tematický plán governs everything.** A module's ročník, tematický celok, topic, ordering, and any obsahový/výkonový štandard come only from the school's current tematický plán — never invent standards. An empty standard cell stays empty or is marked as not present in the source plan.
2. **Cumulative prior knowledge only.** A module may never require a concept, symbol, notation, formula, or method not yet introduced (ZŠ + prior ročníky + everything already taught this year). Preferred sequence for a new concept: situation/idea → new concept → symbol and how to read it → visual representation → simple check → use.
3. **Teacher prep ≠ student module.** `teacher` covers the whole lesson's methodology; `student.activities` covers *only* the slice of the lesson where the app is actually used per the teacher's prepared flow (e.g. only minutes 27–36) — don't mechanically port the teacher's explanation, pair work, textbook tasks, pen-and-paper computation, or an exit ticket that's meant to happen outside the app.
4. **The phone must not replace mathematical thinking.** Put in the digital part what the platform is actually good at (instant feedback, classification, distinguishing options, working with representations, spotting errors, self-assessment, diagnostics for the teacher). Leave computation, algebraic manipulation, constructions, sketches, and longer arguments on paper.
5. **Four levels of engagement to progress toward** (not all needed in every module): understand → compute → write mathematically → explain/justify.
6. **Notebook (`notebook` activity) vs. task vs. `selfWrite` are distinct:**
   - Theoretical notes to copy: show the *exact* finished text under "TOTO SI ZAPÍŠ DO ZOŠITA" — never just an instruction to "write down the definition yourself".
   - An independent task to solve: give the exact task statement, not the solution.
   - `selfWrite` is for when the student must *formulate the idea in their own words* (explain, justify, describe an error, interpret a result) — never used as a stand-in for notebook copying.
7. **Every `choice` activity must be self-contained.** All information needed to answer must be directly inside `question` (not only in `prompt`/`promptHtml`, which the renderer doesn't reliably surface) — a screen with only the `question` and `options` visible must still be answerable.
8. **Answer options must not be mechanically guessable.** Vary the position of the correct answer; distractors must be mathematically unambiguous (no distractor that's actually equivalent to the correct answer, no answer guessable from length/phrasing/pattern, exactly one correct option).
9. **Feedback teaches, not just scores.** Wrong-answer feedback should point at the relevant mathematical idea, but must not give away the solution before a retry.
10. **Reflection (`reflection` activity) closes a module** with a 🟢/🟡/🔴 self-assessment — informational, not a grade, and useful in the teacher's export.
11. **Digital-portion length is set by the lesson plan, not by convention** — don't pad a module to hit a target duration.
12. **Maturita-authentic tasks only once the student has the knowledge for them**; before that, use the maturita *format* with age-appropriate content, never the original task.
13. **When replacing a `'placeholder'`/TODO module, keep its identity** — exact `id`, exact file path, exact registry placement (year/unit/topic) — only the content changes, per `modules/STRUKTURA-TEMATICKYCH-PLANOV.md`'s workflow: find the topic in `registry.js`, use its `file` path, match its `id` exactly in the content file, flip `status` from `'planned'`/`'placeholder'` to `'ready'` and fill in `time`/`type`/`skills`.
14. **Technical audit before handing off a module**: `node --check` the file, correct `id`/path, no duplicate ids across the registry, `choice.answer` indexes an existing option, exactly one correct answer with non-mechanical distractors, `sortChoice`/`matrix` items have valid `answer` values matching their `labels`, no new symbol used before it's introduced, module playable start to finish.
