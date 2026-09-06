# Architecture

Technical reference for `core/` and how the pieces fit together. For the
content-authoring rules (what belongs in a module, how activities are
structured), see `docs/AUTHORING.md` and `PravidlaTvorbyModulov.txt`. For a
one-paragraph overview and the general project shape, see `CLAUDE.md`.

## Boot sequence

`index.html` loads plain classic `<script>` tags, in this exact order:

```
config.js                    window.APP_CONFIG (Supabase URL/key)
modules/registry.js          window.MATH_MODULE_INDEX (the catalog)
core/util.js                 window.MathUtil
core/platform.js             window.MathPlatform
core/scoring.js               window.MathScore
core/auth.js                  window.MathAuth
core/live.js                  window.MathLive
core/renderers.js             window.ActivityRenderers
core/ui.js                    window.MathUI
core/session.js               window.MathSession
core/views-student.js         window.MathViews.student
core/views-teacher.js         window.MathViews.teacher
core/app.js                   window.MathApp — calls render() on its last line
```

No build step, no bundler, no ES modules — every file is a classic script
wrapped in an IIFE that attaches exactly one namespace to `window`. That
constraint is deliberate: the app must still work when `index.html` is
opened straight from `file://` (see `CLAUDE.md`), and the 279 content modules
under `modules/` are themselves classic scripts that call
`MathPlatform.registerModule(...)` — introducing `<script type="module">`
anywhere would break that.

**Load-order rule.** Every core file may assume everything *earlier* in the
list above already exists, and must not assume anything *later* does. In
practice this only matters at IIFE top level (evaluated immediately, as the
`<script>` parses) — a reference to a later file's namespace is safe inside a
function body, since that only runs after the whole page has loaded (e.g.
`core/views-student.js` calls `window.MathApp.go(...)` from inside click
handlers, even though `core/app.js` loads after it). Each file's IIFE opens
with a guard that throws a named error if something it needs isn't present
yet, so a wiring mistake fails loudly with the missing file's name instead of
a bare `TypeError` deep in a click handler.

**Every core file must be an IIFE.** `modules/registry.js` declares its
`placeholder` helper inside an IIFE for the same reason: a bare top-level
`const`/`let`/`class` in a classic script shares the page's global lexical
scope, so a name collision from any later script would be a page-killing
`SyntaxError`. Don't declare bare top-level bindings in `core/*.js` either.

## The three layers

1. **`modules/registry.js`** — the single source of truth for the catalog:
   every topic's `id`, `year`, `unit`/`unitOrder`, `topic`, `lesson`/
   `lessonOrder`, `status` (`'ready'` or `'placeholder'`), and the `file`
   path where its content lives. Nothing else defines ordering or grouping.
   Ready entries are written out as literal objects; not-yet-written topics
   use the `placeholder({ id, year, unit, unitOrder, topic, lesson,
   lessonOrder, file })` helper, which fills in the uniform
   `time`/`type`/`skills` placeholder values.
2. **`modules/<year>-rocnik/<unit-slug>/<NN>-<topic-slug>.js`** — one content
   module per topic, calling `MathPlatform.registerModule({ id, teacher,
   student })`. `id` must match the registry entry exactly. See
   `docs/AUTHORING.md` for the full shape.
3. **`core/`** — the platform: catalog queries + lazy loader
   (`platform.js`), scoring (`scoring.js`), auth (`auth.js`), realtime
   (`live.js`), the activity renderers (`renderers.js`), shared view
   fragments (`ui.js`), the session/player engine (`session.js`), the two
   screen sets (`views-student.js`, `views-teacher.js`), and the router
   (`app.js`).

## Routing

`core/app.js` holds a route table — an array of `{ name, test(parts),
keepsSession?, teacher?, view(parts) }` — instead of an if/else chain. On
every `hashchange`, `render()`:

1. Bumps a generation counter and captures `stillCurrent()` for this render
   pass — checked after every `await`, so a slow network response from a
   stale navigation can never paint over a newer screen.
2. Runs the previous route's teardown callback, if it registered one.
3. Calls `MathSession.leave()` unless the new route is flagged
   `keepsSession: true` (the `module`/`play`/`join` cluster — navigating
   between them must not end a running session; every other route ends it,
   which also closes any open live-lesson connection).
4. For `teacher: true` routes, calls `MathAuth.unlocked()`; if that fails,
   either shows the login screen inline (route `teacher`) or redirects to
   `#teacher` (every other gated route).
5. Awaits `route.view(parts)`. If the view function returns another
   function, that becomes the new teardown callback (used by
   `teacherLive()` to close its realtime channel when the screen changes,
   and as a last resort by the `pagehide` handler below).

`pagehide` calls the stored teardown (if any) and `MathLive.disconnectAll()`
unconditionally, so closing the tab always releases every realtime
connection this page opened, even if the in-page teardown chain missed one.

## The activity player

`core/session.js` owns the one in-progress session: `state` (mode, index,
score, answers, reflection, grading) and, in live mode, the `MathLive`
handle. `play(app)` looks up `ActivityRenderers[activity.type]` and calls it
with `(activity, ctx)`, where `ctx` exposes `record(activity, outcome)`,
`next()`, `prev()`, `setReflection()`, `finish()`, plus read-only display
data (`index`, `total`, `score`, `topic`, `unit`, `mode`, `grading`).

**Scoring is centralized.** A renderer never computes a point value — it
calls `ctx.record(activity, outcome)` with only the *facts* of what
happened:

| Activity type | `outcome` shape |
|---|---|
| `choice`, `numberInput` | `{ correct, attempts }` |
| `sortChoice`, `matrix` | `{ correctCount, itemCount, correct }` (partial credit) |
| `notebook`, `selfWrite` | `{ correct: true, attempts: 1 }` (participation) |

`core/session.js`'s `record()` turns that into a point value via
`MathScore.award(activity, outcome)`, and the *same* table (`MathScore`) is
what `moduleMaxPoints()`/the result screen use for the denominator — so a
renderer and the result screen can never disagree about how many points
something was worth. `tools/audit.mjs` keeps a small duplicate of the points
table and fails if it drifts from `core/scoring.js`.

## Live lesson protocol

No backend database — this is Supabase Realtime **Broadcast** only, on a
channel named `math-<6-char code>`. `core/live.js` makes the two roles use
*disjoint* events specifically to avoid the fan-out described below:

- **Teacher → student**, event `'teacher'`:
  `{ action: 'grading', grading }` — the teacher's current grading
  settings, sent once when the channel opens and again (debounced, see
  below) whenever a student joins or the teacher changes the setting.
  `{ action: 'ended' }` — sent once when the teacher ends the lesson.
- **Student → teacher**, event `'progress'`:
  - On join: `{ nick, moduleId, stage: 'joined', score: 0, ts }`.
  - On every activity scored (`record()`) and on `finish()`:
    `{ nick, moduleId, stage: 'working'|'done', score, maxScore, percent,
    question, total, skill, self, answers, ts }` — `skill`/`self`/`answers`
    carry the full per-activity breakdown.
  - On stepping to the next/previous activity (`next()`/`prev()`) *without*
    a new score: the same shape but **without** `skill`/`self`/`answers` —
    just the position/score fields. The original implementation resent the
    full (ever-growing) `answers` array on every single step click; since
    the teacher's live view only ever displays the aggregate fields, this
    trims the bytes sent for no visible loss. The trade-off: a student who
    disconnects mid-module without ever triggering a scored `record()` call
    after their last step contributes no per-activity detail to the CSV
    export for that stretch — acceptable, since the export's purpose is a
    grade record, not a rewind of every click.

The teacher's `students[nick] = { ...students[nick], ...msg }` **merges**
each incoming message into what it already knew about that nick — it must
not replace, since a slim `'working'` message would otherwise erase the
`answers[]` a previous message had already delivered.

**Why the events are disjoint (the free-tier fix).** Every message sent
gets delivered to every *other* subscriber on the channel — in the original
implementation both roles subscribed to both event names and filtered
client-side, so every student's `'progress'` message was delivered (and
billed) to every *other* student too, who then discarded it. With
`connectAsTeacher()` subscribing only to `'progress'` and
`connectAsStudent()` subscribing only to `'teacher'`, a message is delivered
exactly to the party that needs it. For a 25-student lesson this alone cuts
delivered messages roughly 10×; the grading-announcement debounce
(`MathLive`'s `announceGrading`, collapsing a burst of per-join broadcasts
into one leading send plus at most one trailing send per 5s window) and the
step-message payload trim above cut it further. Budget against the Supabase
free tier (2M realtime messages/month, 200 concurrent connections):
roughly 350–1000 delivered messages per 25-student lesson depending on how
many activities the module has, versus ~11 000 before these fixes — and
connections that actually release when a student navigates away or closes
the tab, instead of accumulating for the rest of the period.

**Verify this empirically before trusting the number for capacity
planning** — the figure above is a message-*count* estimate from the code
paths, not a measurement against Supabase's own billing metric. Check the
project's Realtime usage panel after a real lesson if the school's usage
gets anywhere near the free tier's ceiling.

**Teacher and student connections are independent.** A teacher is not
"playing" a module, so `core/views-teacher.js`'s `teacherLive()` keeps its
own local `MathLive` handle — it is not the same connection as
`core/session.js`'s `live` (a student's own session). Don't reintroduce a
shared variable for both roles.

## Server-side (`api/teacher-auth.js`)

The only server code in the project — a Vercel serverless function, zero
dependencies beyond Node's `crypto`. `TEACHER_PASSWORD` lives only in the
server's environment and is never sent to the browser. Flow:

- `POST { password }` → constant-time compare against `TEACHER_PASSWORD`
  (`crypto.timingSafeEqual`) → on match, an HMAC-SHA256-signed, 8-hour token
  (`base64url(payload).base64url(signature)`, signed with the password
  itself as the HMAC key — rotating the password invalidates every
  outstanding token). Failed attempts are rate-limited per client IP (5 per
  60s, in-memory, best-effort — resets on a cold start and doesn't
  coordinate across concurrently warm instances); a *successful* login
  clears that IP's counter instead of counting toward the limit, so a whole
  class behind one school NAT can't lock itself out after a few correct
  logins.
- `POST { token }` → verifies the signature and expiry, returns `{ ok }`.
  `core/auth.js` calls this before every gated route, caching a positive
  result for 60s in memory so quick navigation doesn't re-hit the network
  each click.

Known limit, by design of a static site: this only gates the SPA's own
screens. It does not prevent someone from directly fetching a module's
static `.js` file (which contains the `teacher` methodology object) by URL
if they already know or guess its exact path — and it is unrelated to the
live-lesson Realtime channel, which anyone with a lesson's join code can
join as a student regardless of teacher login state (by design).

## Escaping contract

`MathUtil.esc()` (`core/util.js`) is the only thing standing between a
value and `innerHTML`. The renderer and view files escape everything that
came from a module author as **plain text** (`title`, `question`,
`options`, item text, skill names, prompts) and everything that arrived over
the live-lesson channel (a nick, above all — see the note in
`core/views-teacher.js`'s `drawStudents()`). The fields `html`, `promptHtml`,
`remember`, `correct`, `hint`, `model`, `note`, `success`, `reveal` are
**trusted authored HTML** on purpose (module authors hand-write SVG
diagrams, tables, and formatted explanations into them) and are never
escaped. See `docs/AUTHORING.md` for the field-by-field list.

## Verification tools

- `node tools/audit.mjs` — loads the registry and every content module the
  way the browser would; checks registry integrity (duplicate/missing
  ids and files, orphaned files, id-format), per-activity-type shape
  (required fields, `choice.answer` in range, etc.), that every `core/*.js`
  file is actually wired into `index.html`, and that a CSS class referenced
  anywhere in `modules/**/*.js` is defined somewhere in `styles/`. Run it
  before every commit that touches `modules/` or `core/`.
- `node tools/snapshot.mjs` — a canonical JSON dump of the registry and
  every registered module object, used as a regression oracle: two runs
  that should not have changed content (e.g. before/after a `core/`
  refactor) must diff to nothing.
- `node --check <file>` — plain Node syntax check; every content module
  must pass it (wired into `tools/audit.mjs`'s load step, which throws with
  the file name on any that don't).
