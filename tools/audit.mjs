#!/usr/bin/env node
// tools/audit.mjs
//
// Zero-dependency content & registry auditor for matematika-platforma.
// No npm, no build step — plain Node (>= 18), matching the rest of the project.
//
// Run:   node tools/audit.mjs           (human-readable report)
//        node tools/audit.mjs --json    (machine-readable report, still exits the same way)
//        node tools/audit.mjs --strict  (also fail on WARN-level findings)
//
// Exit code: 1 if any ERROR-level finding exists (or any WARN with --strict), else 0.
//
// What it does: stubs `window`/`MathPlatform`, loads modules/registry.js and every
// content module exactly the way index.html would (classic scripts, no ES modules),
// then checks registry integrity and per-activity content shape. This replaces the
// old "node --check each file by hand" workflow — run this before every commit that
// touches modules/ or core/.
//
// NOTE on scoring: the POINTS table below is a deliberate, intentionally small
// duplicate of the table in core/scoring.js (MathScore). Loading real browser code
// (which touches localStorage, document, etc.) into this Node script is not worth
// the complexity for one table. If you change award/max logic in core/scoring.js,
// update POINTS here too — the "scoring tables match" check at the bottom compares
// them automatically so drift cannot go unnoticed.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const args = new Set(process.argv.slice(2));
const JSON_OUT = args.has('--json');
const STRICT = args.has('--strict');

const errors = [];
const warnings = [];
function fail(scope, msg) { errors.push(`${scope}: ${msg}`); }
function warn(scope, msg) { warnings.push(`${scope}: ${msg}`); }

// ---------------------------------------------------------------------------
// 1. Load the registry + every content module, the same way the browser does.
// ---------------------------------------------------------------------------

globalThis.window = globalThis.window || {};

let currentFile = '(registry)';
const collected = []; // { file, module } pushed by the stubbed registerModule
globalThis.MathPlatform = {
  registerModule(m) { collected.push({ file: currentFile, module: m }); },
};
globalThis.window.MathPlatform = globalThis.MathPlatform;

function loadClassicScript(absPath) {
  const src = fs.readFileSync(absPath, 'utf8');
  try {
    // Indirect eval => runs in global scope, exactly like a classic <script> tag.
    (0, eval)(src);
  } catch (e) {
    fail('load', `${rel(absPath)} hodilo výnimku pri načítaní: ${e.message}`);
  }
}

function rel(p) { return path.relative(ROOT, p).replace(/\\/g, '/'); }

const registryPath = path.join(ROOT, 'modules/registry.js');
if (!fs.existsSync(registryPath)) {
  console.error('FATAL: modules/registry.js neexistuje.');
  process.exit(1);
}
currentFile = 'modules/registry.js';
loadClassicScript(registryPath);
const registry = globalThis.window.MATH_MODULE_INDEX;
if (!Array.isArray(registry)) {
  console.error('FATAL: modules/registry.js nenastavil window.MATH_MODULE_INDEX.');
  process.exit(1);
}

const modulesByEntry = new Map(); // entry.id -> registered module object
for (const entry of registry) {
  const abs = path.join(ROOT, entry.file);
  if (!fs.existsSync(abs)) {
    fail('registry', `${entry.id}: cesta v registry.js neexistuje: ${entry.file}`);
    continue;
  }
  const before = collected.length;
  currentFile = entry.file;
  loadClassicScript(abs);
  const registeredHere = collected.slice(before);
  if (registeredHere.length === 0) {
    fail('registry', `${entry.id}: súbor ${entry.file} nezavolal MathPlatform.registerModule(...)`);
    continue;
  }
  if (registeredHere.length > 1) {
    fail('registry', `${entry.id}: súbor ${entry.file} zavolal registerModule ${registeredHere.length}×`);
  }
  const mod = registeredHere[registeredHere.length - 1].module;
  if (!mod || mod.id !== entry.id) {
    fail('registry', `${entry.id}: id v súbore (${mod && mod.id}) sa nezhoduje s id v registry.js`);
    continue;
  }
  modulesByEntry.set(entry.id, mod);
}

// ---------------------------------------------------------------------------
// 2. Registry integrity.
// ---------------------------------------------------------------------------

{
  const ids = registry.map(m => m.id);
  const dupIds = ids.filter((v, i) => ids.indexOf(v) !== i);
  new Set(dupIds).forEach(id => fail('registry', `duplicitné id: ${id}`));

  const files = registry.map(m => m.file);
  const dupFiles = files.filter((v, i) => files.indexOf(v) !== i);
  new Set(dupFiles).forEach(f => fail('registry', `duplicitná cesta file: ${f}`));

  const LEGACY_IDS = new Set(['1-logika-01', '2-funkcie-01']);
  const idPattern = /^[123]-u\d{2}-h\d{3}$/;
  registry.forEach(m => {
    if (!idPattern.test(m.id) && !LEGACY_IDS.has(m.id)) {
      warn('registry', `${m.id}: id nezodpovedá konvencii {ročník}-u{NN}-h{NNN} (a nie je v zozname legacy výnimiek)`);
    }
  });

  const STATUSES = new Set(['ready', 'placeholder']);
  registry.forEach(m => {
    if (!STATUSES.has(m.status)) fail('registry', `${m.id}: neznámy status '${m.status}'`);
  });

  // Orphan files: .js files under modules/ that no registry entry points at.
  const referenced = new Set(files.map(f => path.normalize(f)));
  const onDisk = [];
  (function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (entry.name.endsWith('.js')) onDisk.push(p);
    }
  })(path.join(ROOT, 'modules'));
  onDisk.forEach(abs => {
    const r = rel(abs);
    if (r === 'modules/registry.js') return;
    if (path.basename(r).startsWith('_')) return; // template files
    if (!referenced.has(path.normalize(r))) {
      warn('registry', `súbor nie je referencovaný v registry.js (orphan): ${r}`);
    }
  });
}

// ---------------------------------------------------------------------------
// 3. Content shape, per activity type.
// ---------------------------------------------------------------------------

const KNOWN_TYPES = new Set([
  'info', 'explain', 'choice', 'sortChoice', 'notebook',
  'selfWrite', 'numberInput', 'matrix', 'coordinatePlot', 'reflection',
  'taskList',
]);

// Keep in sync with the named-validator table in core/renderers.js.
const KNOWN_NUMBER_VALIDATORS = new Set(['oddComposite', 'exact']);

const TEACHER_ARRAY_FIELDS = [
  'prerequisites', 'goals', 'planContent', 'planPerformance',
  'competencies', 'enrichment', 'flow', 'diagnostics', 'partialUse',
];

const answerIndexCounts = {}; // overall distribution, for the summary
const allSameIndexModules = [];
const phaseUsage = new Map(); // phase -> count

for (const [id, mod] of modulesByEntry) {
  const entry = registry.find(m => m.id === id);
  const label = `${id} (${entry.file})`;

  if (!mod.student || !Array.isArray(mod.student.activities)) {
    fail('content', `${label}: chýba student.activities`);
    continue;
  }
  const acts = mod.student.activities;
  const seenActivityIds = new Set();
  const choiceAnswerIdx = [];
  let hasReflection = false;

  acts.forEach((a, i) => {
    const where = `${label} #${i} (${a && a.id})`;
    if (!a || !KNOWN_TYPES.has(a.type)) {
      fail('content', `${where}: neznámy typ aktivity '${a && a.type}'`);
      return;
    }
    if (seenActivityIds.has(a.id)) fail('content', `${where}: duplicitné id aktivity v module`);
    seenActivityIds.add(a.id);

    if (a.phase) phaseUsage.set(a.phase, (phaseUsage.get(a.phase) || 0) + 1);
    if (a.type === 'reflection') hasReflection = true;

    switch (a.type) {
      case 'choice': {
        if (!a.question) fail('content', `${where}: choice bez question (rule 7 – všetko potrebné musí byť v question)`);
        if (!Array.isArray(a.options) || a.options.length < 2) fail('content', `${where}: choice potrebuje aspoň 2 options`);
        else if (!Number.isInteger(a.answer) || a.answer < 0 || a.answer >= a.options.length) {
          fail('content', `${where}: choice.answer=${a.answer} mimo rozsahu options`);
        } else {
          choiceAnswerIdx.push(a.answer);
          answerIndexCounts[a.answer] = (answerIndexCounts[a.answer] || 0) + 1;
        }
        break;
      }
      case 'sortChoice': {
        if (!Array.isArray(a.labels) || a.labels.length < 2) fail('content', `${where}: sortChoice bez labels`);
        if (!Array.isArray(a.items) || !a.items.length) fail('content', `${where}: sortChoice bez items`);
        else a.items.forEach((it, j) => {
          if (typeof it.answer !== 'boolean') fail('content', `${where}: items[${j}].answer nie je boolean (má: ${JSON.stringify(it.answer)})`);
          if (it.why === undefined) fail('content', `${where}: items[${j}] bez .why (spätná väzba)`);
        });
        break;
      }
      case 'matrix': {
        if (!Array.isArray(a.labels) || !a.labels.length) fail('content', `${where}: matrix bez labels`);
        if (!Array.isArray(a.items) || !a.items.length) fail('content', `${where}: matrix bez items`);
        else a.items.forEach((it, j) => {
          if (!a.labels || !a.labels.includes(it.answer)) fail('content', `${where}: items[${j}].answer '${it.answer}' nie je medzi labels`);
        });
        break;
      }
      case 'reflection': {
        if (!Array.isArray(a.skills) || !a.skills.length) fail('content', `${where}: reflection bez skills`);
        if (!a.prompt) fail('content', `${where}: reflection bez prompt`);
        break;
      }
      case 'selfWrite': {
        if (a.model === undefined) warn('content', `${where}: selfWrite bez model (žiak neuvidí vzorovú formuláciu)`);
        break;
      }
      case 'numberInput': {
        if (!KNOWN_NUMBER_VALIDATORS.has(a.validate)) {
          fail('content', `${where}: numberInput.validate='${a.validate}' nemá implementáciu v core/renderers.js`);
        }
        if (a.validate === 'exact' && !Number.isFinite(a.answer)) {
          fail('content', `${where}: numberInput.validate='exact' potrebuje číselné pole answer`);
        }
        break;
      }
      case 'taskList': {
        if (!a.title) fail('content', `${where}: taskList bez title`);
        if (!Array.isArray(a.items) || !a.items.length) fail('content', `${where}: taskList bez items`);
        else a.items.forEach((it, j) => {
          if (!it || (!it.text && !it.html)) fail('content', `${where}: items[${j}] bez text alebo html`);
        });
        break;
      }
    }
  });

  if (entry.status === 'ready' && !hasReflection) warn('content', `${label}: ready modul bez reflection na konci`);
  if (choiceAnswerIdx.length >= 3 && choiceAnswerIdx.every(x => x === choiceAnswerIdx[0])) {
    allSameIndexModules.push(`${id}: všetkých ${choiceAnswerIdx.length} choice má answer=${choiceAnswerIdx[0]}`);
  }

  TEACHER_ARRAY_FIELDS.forEach(field => {
    const v = mod.teacher && mod.teacher[field];
    if (Array.isArray(v) && v.some(x => typeof x === 'string' && x.trim() === '')) {
      warn('content', `${label}: teacher.${field} obsahuje prázdny reťazec (vykreslí sa ako prázdna odrážka)`);
    }
  });
}

// ---------------------------------------------------------------------------
// 4. Scoring-table drift guard (Phase 2+; skipped gracefully before core/scoring.js exists).
// ---------------------------------------------------------------------------

const POINTS = {
  choice: 100, numberInput: 100, sortChoice: 100, matrix: 120,
  notebook: 20, selfWrite: 30,
  info: 0, explain: 0, coordinatePlot: 0, reflection: 0, taskList: 0,
};

const scoringPath = path.join(ROOT, 'core/scoring.js');
if (fs.existsSync(scoringPath)) {
  const src = fs.readFileSync(scoringPath, 'utf8');
  Object.entries(POINTS).forEach(([type, max]) => {
    // Looks for `type: { max: N` inside the POINTS table literal.
    const re = new RegExp(`${type}\\s*:\\s*\\{[^}]*max\\s*:\\s*(\\d+)`);
    const m = src.match(re);
    if (!m) {
      warn('scoring', `core/scoring.js: nenašiel som pravidlo pre typ '${type}' (audit.mjs čaká max=${max})`);
    } else if (Number(m[1]) !== max) {
      fail('scoring', `core/scoring.js a tools/audit.mjs sa rozchádzajú pre '${type}': ${m[1]} vs ${max} — uprav oba súbory na rovnakú hodnotu`);
    }
  });
} else {
  warn('scoring', 'core/scoring.js ešte neexistuje — kontrola zhody bodovania preskočená (Fáza 2).');
}

// ---------------------------------------------------------------------------
// 5. index.html / core wiring guard.
// ---------------------------------------------------------------------------

{
  const indexPath = path.join(ROOT, 'index.html');
  const coreDir = path.join(ROOT, 'core');
  if (fs.existsSync(indexPath) && fs.existsSync(coreDir)) {
    const html = fs.readFileSync(indexPath, 'utf8');
    const scriptSrcs = [...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map(m => m[1]);
    const coreFiles = fs.readdirSync(coreDir).filter(f => f.endsWith('.js'));
    coreFiles.forEach(f => {
      if (!scriptSrcs.includes(`core/${f}`)) {
        fail('wiring', `core/${f} existuje, ale index.html ho nenačíta cez <script src="core/${f}">`);
      }
    });
  }
}

// ---------------------------------------------------------------------------
// 6. CSS class usage guard — a class referenced anywhere in modules/**/*.js
//    (SVG diagrams, notebook HTML, etc.) must exist in some stylesheet.
//    This guards against "dead code" sweeps deleting live authoring classes.
// ---------------------------------------------------------------------------

{
  const cssFiles = [];
  const singleCss = path.join(ROOT, 'styles.css');
  const stylesDir = path.join(ROOT, 'styles');
  if (fs.existsSync(singleCss)) cssFiles.push(singleCss);
  if (fs.existsSync(stylesDir)) {
    fs.readdirSync(stylesDir).filter(f => f.endsWith('.css')).forEach(f => cssFiles.push(path.join(stylesDir, f)));
  }
  if (cssFiles.length) {
    const definedClasses = new Set();
    cssFiles.forEach(f => {
      const css = fs.readFileSync(f, 'utf8');
      for (const m of css.matchAll(/\.([a-zA-Z][a-zA-Z0-9_-]*)/g)) definedClasses.add(m[1]);
    });
    const usedClasses = new Map(); // class -> Set(file)
    const allModuleJs = [];
    (function walk(dir) {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) walk(p); else if (e.name.endsWith('.js')) allModuleJs.push(p);
      }
    })(path.join(ROOT, 'modules'));
    allModuleJs.forEach(abs => {
      const src = fs.readFileSync(abs, 'utf8');
      // matches class="a b c" AND the escaped-quote form class=\"a b c\" used inside JS template strings
      for (const m of src.matchAll(/class=\\?"([^"\\]+)\\?"/g)) {
        m[1].split(/\s+/).filter(Boolean).forEach(cls => {
          if (!usedClasses.has(cls)) usedClasses.set(cls, new Set());
          usedClasses.get(cls).add(rel(abs));
        });
      }
    });
    usedClasses.forEach((files, cls) => {
      if (!definedClasses.has(cls)) {
        warn('css', `trieda .${cls} sa používa v obsahových moduloch, ale nie je definovaná v CSS (napr. ${[...files][0]})`);
      }
    });
  }
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

const summary = {
  registryEntries: registry.length,
  ready: registry.filter(m => m.status === 'ready').length,
  placeholder: registry.filter(m => m.status === 'placeholder').length,
  choiceAnswerIndexDistribution: answerIndexCounts,
  modulesWithSingleAnswerIndex: allSameIndexModules,
  phaseVocabularySize: phaseUsage.size,
  phaseSingletons: [...phaseUsage.entries()].filter(([, n]) => n === 1).map(([p]) => p).sort(),
  errors: errors.length,
  warnings: warnings.length,
};

if (JSON_OUT) {
  console.log(JSON.stringify({ summary, errors, warnings }, null, 2));
} else {
  console.log(`Registry: ${summary.registryEntries} tém (${summary.ready} ready, ${summary.placeholder} placeholder)`);
  console.log(`Rozdelenie správnej odpovede (choice) podľa indexu: ${JSON.stringify(summary.choiceAnswerIndexDistribution)}`);
  if (allSameIndexModules.length) {
    console.log(`\nModuly, kde VŠETKY choice majú rovnaký index odpovede (${allSameIndexModules.length}):`);
    allSameIndexModules.forEach(l => console.log('  ' + l));
  }
  console.log(`\nPhase vocabulár: ${summary.phaseVocabularySize} rôznych hodnôt, ${summary.phaseSingletons.length} použitých iba raz.`);

  if (errors.length) {
    console.log(`\n=== CHYBY (${errors.length}) ===`);
    errors.forEach(e => console.log('  ✗ ' + e));
  }
  if (warnings.length) {
    console.log(`\n=== UPOZORNENIA (${warnings.length}) ===`);
    warnings.forEach(w => console.log('  ! ' + w));
  }
  console.log(`\n${errors.length ? 'ZLYHALO' : 'OK'} — ${errors.length} chýb, ${warnings.length} upozornení.`);
}

process.exit(errors.length || (STRICT && warnings.length) ? 1 : 0);
