# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static, vanilla-JS (no build step, no npm, no framework) web platform of interactive math learning modules for Slovak secondary-school students (1.–3. ročník), covering both solo practice and a "live lesson" mode where a teacher broadcasts a session code and watches students' progress in real time. Deployed to Vercel as static files (`vercel.json` sets `cleanUrls`/`trailingSlash` plus a handful of response headers — see `docs/ARCHITECTURE.md`), plus one small Vercel serverless function (`api/teacher-auth.js`) that verifies the teacher password server-side.

**For the technical architecture (script load order, routing, the live-lesson protocol, the scoring/escaping contracts) see `docs/ARCHITECTURE.md`. For the activity-type field reference (what each `student.activities` entry needs) see `docs/AUTHORING.md`.** This file stays a short index plus the binding editorial rules below.

## Running / testing

There is no build tool, package manager, or test suite. Development is:

- **Run it**: open `index.html` directly in a browser, or serve the folder with any static file server (e.g. `npx serve .`). It must be served over `file://` or `http://` from the project root, not just the module folder — `index.html` loads `config.js`, `modules/registry.js`, and `core/*.js` with root-relative paths.
- **Before every commit that touches `modules/` or `core/`**: `node tools/audit.mjs`. It loads the registry and every content module the way the browser would and checks registry integrity, per-activity-type shape, that every `core/*.js` file is wired into `index.html`, and that every CSS class referenced in a module's `html` field is actually defined in `styles/`. This replaces the old per-file `node --check` habit (still useful for a quick one-off syntax check, but `tools/audit.mjs` already runs it across every file as part of its load step).
- **Live realtime testing**: `config.js` holds a Supabase URL/anon key used only for Realtime Broadcast (join codes for live lessons). No database tables, no persisted results — everything is ephemeral, broadcast-only.
- **Teacher login needs the serverless function**: a plain static server (`npx serve .`) cannot run `api/teacher-auth.js`, so the teacher login form will fail with a network error under it — the rest of the app (student catalog, solo modules) still works fine. To test the login locally, run `vercel dev` (needs `TEACHER_PASSWORD` in `.env.local`, see below) or just test against the deployed Vercel URL.

## Architecture

Full detail in `docs/ARCHITECTURE.md`. Summary:

### Loading model
`index.html` loads plain classic `<script>` tags in a fixed order (`config.js` → `modules/registry.js` → 10 files under `core/`, ending with `core/app.js`, which calls `render()` on its last line) — no ES modules, no bundler, so the app still works opened straight from `file://`. Individual content modules (one per topic) are **not** loaded up front — `core/platform.js` (`MathPlatform.loadModule(id)`) lazily injects a `<script>` tag for a module's file only when the student opens that topic, and the module registers itself via `MathPlatform.registerModule({...})` once loaded.

### The three layers
- **`modules/registry.js`** (`window.MATH_MODULE_INDEX`) — the single source of truth for the catalog: every topic across all 3 years, its `id`, `year`, `unit`/`unitOrder`, `topic`, `lesson`/`lessonOrder`, `status` (`'ready'` or `'placeholder'`), and the `file` path where its content module lives. This drives every catalog/navigation view — nothing else defines ordering or grouping. Ready topics are literal objects; not-yet-written ones use the `placeholder({...})` helper.
- **`modules/<year>-rocnik/<unit-slug>/<NN>-<topic-slug>.js`** — one content module per lesson topic, calling `MathPlatform.registerModule({ id, teacher: {...}, student: {...} })`. `id` **must** match the registry entry exactly (see rule 13 below).
- **`core/`** — ten files, each attaching one namespace to `window`: catalog queries + the lazy loader (`platform.js` → `MathPlatform`), scoring (`scoring.js` → `MathScore`), teacher auth (`auth.js` → `MathAuth`), the live-lesson realtime connection (`live.js` → `MathLive`), the activity renderers (`renderers.js` → `ActivityRenderers`, one function per `type`: `info`, `explain`, `choice`, `sortChoice`, `notebook`, `selfWrite`, `numberInput`, `matrix`, `coordinatePlot`, `reflection`), shared catalog view fragments (`ui.js` → `MathUI`), the session/player engine (`session.js` → `MathSession`, whose `play()` looks up `ActivityRenderers[activity.type]` and calls it with `(activity, ctx)` — `ctx` exposes `record(activity, outcome)`, `next()`, `prev()`, `setReflection()`, `finish()`), the two screen sets (`views-student.js`, `views-teacher.js` → `MathViews.student`/`MathViews.teacher`), and the router (`app.js` → `MathApp`, a route table rather than an if/else chain).

### Module content shape
Each module (see `modules/_SABLONA-MODULU.js` for a template with a filled worked example, and any file under `modules/<year>-rocnik/` for a full one) has two top-level parts that are **deliberately different in scope**:
- `teacher` — the methodology card for the *whole* lesson (placement in the plán, prerequisites, goals, content/performance standards from the plán, competencies, enrichment, minute-by-minute `flow`, diagnostics, partial-use options). Rendered by `method()` in `core/views-teacher.js`.
- `student` — only the slice of the lesson where the app is actually used (often much shorter than the full lesson), as an `activities` array consumed by the player. Field-by-field reference: `docs/AUTHORING.md`.

Scoring: `core/scoring.js`'s `MathScore` is the single table deciding points per activity type (`choice`/`numberInput`/`sortChoice`: 100, `matrix`: 120, `notebook`: 20, `selfWrite`: 30) unless an activity sets its own `maxPoints` — both the renderer's award and the result screen's denominator read the same table, so they can't disagree. XP is explicitly *not* a grade; grading (if a teacher enables it) is computed separately from percent thresholds stored in `localStorage`.

### Live lesson mode
No backend database. `teacherLive(id)` (`core/views-teacher.js`) generates a join code (`MathLive.makeCode()`) and opens a Supabase Realtime Broadcast channel (`math-<code>`), and renders a QR code (lazy-loaded `qrcodejs` from a CDN) linking to `#join/<id>/<code>`. Students' progress is broadcast on the `'progress'` event; the teacher's grading settings and end-of-lesson notice on the `'teacher'` event — the two roles subscribe to disjoint events specifically so a message is delivered only to the party that needs it (see `docs/ARCHITECTURE.md` for why, and the free-tier budget this keeps the app inside). Ending a lesson unsubscribes the channel; nothing is persisted server-side, so the teacher's CSV export is the only durable record and must happen before leaving the page. This channel is a separate concern from teacher login below — anyone with a lesson's join code can join it as a student (by design), independent of who is or isn't logged into the teacher area.

### Teacher login (`api/teacher-auth.js`)
The only server-side piece in the project. The teacher password lives in the `TEACHER_PASSWORD` environment variable (Vercel project settings; `.env.local` for `vercel dev`) and is **never sent to the browser**. Flow: the login form (`core/views-teacher.js`'s `login()`) POSTs `{password}` to `/api/teacher-auth`; on match the function returns an HMAC-signed, time-limited (8h) bearer token; the client stores it in `sessionStorage`. Every gated route calls `MathAuth.unlocked()` (`core/auth.js`), which POSTs `{token}` back to the same function for server-side verification (cached in memory for 60s to avoid re-checking on every click) before the router lets the route render. Because the signature can only be produced with `TEACHER_PASSWORD`, a token can't be forged or faked from DevTools the way a plain `sessionStorage` flag could. Known limits, by design of a static site: this only gates the SPA's own screens — it doesn't prevent someone from directly fetching a module's static `.js` file (which contains the `teacher` methodology object) by URL if they already know/guess its exact path; and it's unrelated to the live-lesson Realtime channel above.

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
13. **When replacing a `'placeholder'`/TODO module, keep its identity** — exact `id`, exact file path, exact registry placement (year/unit/topic) — only the content changes, per `modules/STRUKTURA-TEMATICKYCH-PLANOV.md`'s workflow: find the topic in `registry.js`, use its `file` path, match its `id` exactly in the content file, replace the `placeholder({...})` call with a literal object with `status: 'ready'` and the module's real `time`/`type`/`skills`.
14. **Technical audit before handing off a module**: `node tools/audit.mjs` (registry integrity, per-activity-type shape, `choice.answer` indexes an existing option, `sortChoice`/`matrix` items have valid `answer` values matching their `labels`, no duplicate ids across the registry), plus a manual check that exactly one correct answer has non-mechanical distractors, no new symbol is used before it's introduced, and the module is playable start to finish.
