#!/usr/bin/env node
// tools/rebalance-answers.mjs
//
// One-off migration: flattens the correct-answer position across every `choice`
// activity in every 'ready' module (found: index 0 = 307/484, 1 module in 40
// had every answer at index 0). Kept in the repo for the record — this is not
// meant to run again except to extend it to future content.
//
// Usage: node tools/rebalance-answers.mjs           (writes files)
//        node tools/rebalance-answers.mjs --dry-run  (report only, no writes)
//
// Method (see docs/ARCHITECTURE.md "content migrations" / the approved plan):
//   1. Parse each module's *source text* with a small string-aware scanner —
//      never a blind regex/text replace — to find the exact source span of
//      each top-level string literal inside a choice activity's `options: [...]`
//      array, plus the `answer: N` integer that follows it.
//   2. For each activity (unless skipped, see below), compute a target index
//      via a round-robin counter kept per options-length bucket (2/3/4/5) so
//      the distribution flattens deterministically across the whole corpus.
//   3. Swap ONLY the two literal-token spans at [currentAnswerIndex] and
//      [targetIndex] — verbatim source text, quotes and all — and rewrite the
//      `answer:` number. Nothing else in the file is touched.
//   4. Re-parse the rewritten file the same way the browser would and assert:
//      every field is unchanged except the touched activities' `options`
//      (a permutation, identical elsewhere) and `answer` (points at the same
//      string as before). Any file that fails this check is left untouched
//      and reported — nothing partially-correct is ever written.
//
// Skipped automatically (order is meaningful, left as authored):
//   - options that are all-numeric and already sorted (ascending or descending)
//   - options containing a catch-all choice ("všetky…", "žiadna z…", "ani jedna…")

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const DRY_RUN = process.argv.includes('--dry-run');

// ---------------------------------------------------------------------------
// Load registry (module loading of each content file happens per-file below,
// freshly, so we always compare against that exact file's own current state).
// ---------------------------------------------------------------------------

globalThis.window = globalThis.window || {};
function freshLoad(absPath) {
  const collected = [];
  globalThis.MathPlatform = { registerModule(m) { collected.push(m); } };
  globalThis.window.MathPlatform = globalThis.MathPlatform;
  (0, eval)(fs.readFileSync(absPath, 'utf8'));
  return collected[0];
}

const registryPath = path.join(ROOT, 'modules/registry.js');
(0, eval)(fs.readFileSync(registryPath, 'utf8'));
const registry = globalThis.window.MATH_MODULE_INDEX;

// ---------------------------------------------------------------------------
// String-aware source scanning helpers.
// ---------------------------------------------------------------------------

// Position of the char matching src[openIdx] ('[' or '{'), honouring quoted
// strings and escapes. Treats [] and {} as one combined nesting depth, which
// is safe for already-syntax-valid source (node --check has passed on all of it).
function findMatchingClose(src, openIdx) {
  let depth = 0, inString = null;
  for (let i = openIdx; i < src.length; i++) {
    const c = src[i];
    if (inString) {
      if (c === '\\') { i++; continue; }
      if (c === inString) inString = null;
      continue;
    }
    if (c === '"' || c === "'") { inString = c; continue; }
    if (c === '[' || c === '{') depth++;
    else if (c === ']' || c === '}') { depth--; if (depth === 0) return i; }
  }
  return -1;
}

// Every top-level string literal between [start, end), in source order, as
// {start, end, raw} (raw includes the quotes). Returns null if it encounters
// a bracket/brace/paren at top level — i.e. "not a plain array of strings",
// which is our signal to skip the activity rather than guess.
function topLevelStringLiterals(src, start, end) {
  const out = [];
  let i = start;
  while (i < end) {
    const c = src[i];
    if (c === '"' || c === "'") {
      const quote = c;
      const litStart = i;
      i++;
      while (i < end) {
        if (src[i] === '\\') { i += 2; continue; }
        if (src[i] === quote) { i++; break; }
        i++;
      }
      out.push({ start: litStart, end: i, raw: src.slice(litStart, i) });
      continue;
    }
    if (c === '[' || c === '{' || c === '(') return null;
    i++;
  }
  return out;
}

function findActivitiesArrayBounds(src) {
  const m = /["']?activities["']?\s*:\s*\[/.exec(src);
  if (!m) return null;
  const openIdx = m.index + m[0].length - 1;
  const closeIdx = findMatchingClose(src, openIdx);
  if (closeIdx < 0) return null;
  return { start: openIdx + 1, end: closeIdx };
}

function findActivityIdSpan(src, from, to, id) {
  const re = new RegExp(`["']?id["']?\\s*:\\s*(['"])${id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\1`);
  const region = src.slice(from, to);
  const m = re.exec(region);
  if (!m) return -1;
  return from + m.index;
}

function findOptionsArraySpan(src, from, to) {
  const region = src.slice(from, to);
  const m = /["']?options["']?\s*:\s*\[/.exec(region);
  if (!m) return null;
  const openIdx = from + m.index + m[0].length - 1;
  const closeIdx = findMatchingClose(src, openIdx);
  if (closeIdx < 0) return null;
  return { openIdx, closeIdx };
}

function findAnswerNumberSpan(src, from, to) {
  const region = src.slice(from, to);
  const m = /(["']?answer["']?\s*:\s*)(\d+)/.exec(region);
  if (!m) return null;
  const numStart = from + m.index + m[1].length;
  return { start: numStart, end: numStart + m[2].length, value: Number(m[2]) };
}

// ---------------------------------------------------------------------------
// Skip heuristics.
// ---------------------------------------------------------------------------

const CATCH_ALL_RE = /všetk|žiadn|obe možnosti|ani jedn/i;
const NUMERIC_RE = /^[-+]?[0-9]+([.,][0-9]+)?\s*(%|°|cm|m|km|mm)?$/;

function shouldSkip(options) {
  if (options.some(o => CATCH_ALL_RE.test(o))) return 'catch-all option';
  if (options.every(o => NUMERIC_RE.test(String(o).trim()))) {
    const nums = options.map(o => parseFloat(String(o).trim().replace(',', '.')));
    const asc = nums.every((v, i) => i === 0 || v >= nums[i - 1]);
    const desc = nums.every((v, i) => i === 0 || v <= nums[i - 1]);
    if (asc || desc) return 'numeric, already ordered';
  }
  return null;
}

// ---------------------------------------------------------------------------
// Round-robin target index, bucketed by option count, global across the run.
// ---------------------------------------------------------------------------

const roundRobin = new Map(); // optionCount -> next pointer
function nextTarget(n) {
  const p = roundRobin.get(n) || 0;
  roundRobin.set(n, (p + 1) % n);
  return p;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const stats = { filesChanged: 0, activitiesSwapped: 0, activitiesNoop: 0, skipped: [], failed: [], unsupported: [] };
const finalDistribution = {};

for (const entry of registry) {
  if (entry.status !== 'ready') continue;
  const absPath = path.join(ROOT, entry.file);
  const originalSrc = fs.readFileSync(absPath, 'utf8');
  const originalModule = freshLoad(absPath);
  const acts = originalModule.student.activities || [];

  const bounds = findActivitiesArrayBounds(originalSrc);
  if (!bounds) { stats.unsupported.push(`${entry.id}: nenašiel som activities: [ ... ]`); continue; }

  let src = originalSrc;
  const edits = []; // {start, end, text}, applied end-to-start
  let cursor = bounds.start;
  let fileTouched = false;

  for (const a of acts) {
    const idSpan = findActivityIdSpan(src, cursor, bounds.end, a.id);
    if (idSpan < 0) { stats.unsupported.push(`${entry.id}/${a.id}: nenašiel som hranicu aktivity`); continue; }
    // Look ahead to the NEXT activity's id to bound this activity's region;
    // if there is none, the region extends to the end of the activities array.
    const nextIdx = acts.indexOf(a) + 1;
    let regionEnd = bounds.end;
    if (nextIdx < acts.length) {
      const nextSpan = findActivityIdSpan(src, idSpan + 1, bounds.end, acts[nextIdx].id);
      if (nextSpan > 0) regionEnd = nextSpan;
    }
    cursor = idSpan; // for the next iteration's search-from cursor (kept monotonic)

    if (a.type !== 'choice') continue;

    const optSpan = findOptionsArraySpan(src, idSpan, regionEnd);
    if (!optSpan) { stats.unsupported.push(`${entry.id}/${a.id}: nenašiel som options: [ ... ]`); continue; }
    const literals = topLevelStringLiterals(src, optSpan.openIdx + 1, optSpan.closeIdx);
    if (!literals || literals.length !== a.options.length) {
      stats.unsupported.push(`${entry.id}/${a.id}: options nie je jednoduché pole reťazcov`);
      continue;
    }
    // Sanity: literal values must match a.options in order.
    const literalValues = literals.map(l => (0, eval)(l.raw));
    if (literalValues.some((v, i) => v !== a.options[i])) {
      stats.unsupported.push(`${entry.id}/${a.id}: options v texte sa nezhodujú s naparsovaným modulom`);
      continue;
    }

    const skipReason = shouldSkip(a.options);
    const n = a.options.length;
    if (skipReason) {
      stats.skipped.push(`${entry.id}/${a.id}: ${skipReason}`);
      finalDistribution[a.answer] = (finalDistribution[a.answer] || 0) + 1;
      continue;
    }

    const cur = a.answer;
    const target = nextTarget(n);
    finalDistribution[target] = (finalDistribution[target] || 0) + 1;

    if (target === cur) { stats.activitiesNoop++; continue; }

    const answerSpan = findAnswerNumberSpan(src, idSpan, regionEnd);
    if (!answerSpan) { stats.unsupported.push(`${entry.id}/${a.id}: nenašiel som answer: N`); continue; }

    edits.push({ start: literals[cur].start, end: literals[cur].end, text: literals[target].raw });
    edits.push({ start: literals[target].start, end: literals[target].end, text: literals[cur].raw });
    edits.push({ start: answerSpan.start, end: answerSpan.end, text: String(target) });
    stats.activitiesSwapped++;
    fileTouched = true;
  }

  if (!fileTouched) continue;

  edits.sort((a, b) => b.start - a.start);
  let newSrc = src;
  for (const e of edits) newSrc = newSrc.slice(0, e.start) + e.text + newSrc.slice(e.end);

  // Verify: re-parse the rewritten source and assert nothing but the intended
  // options/answer pairs changed.
  fs.writeFileSync(absPath + '.tmp-verify', newSrc);
  let rewrittenModule;
  try {
    rewrittenModule = freshLoad(absPath + '.tmp-verify');
  } catch (e) {
    fs.unlinkSync(absPath + '.tmp-verify');
    stats.failed.push(`${entry.id}: prepísaný súbor sa nedá načítať (${e.message})`);
    continue;
  }
  fs.unlinkSync(absPath + '.tmp-verify');

  const newActs = rewrittenModule.student.activities || [];
  let ok = newActs.length === acts.length;
  for (let i = 0; ok && i < acts.length; i++) {
    const oldA = acts[i], newA = newActs[i];
    if (oldA.type !== 'choice') {
      ok = JSON.stringify(oldA) === JSON.stringify(newA);
      continue;
    }
    // Every non-options/answer field must be byte-identical.
    const { options: oldOpts, answer: oldAns, ...oldRest } = oldA;
    const { options: newOpts, answer: newAns, ...newRest } = newA;
    if (JSON.stringify(oldRest) !== JSON.stringify(newRest)) { ok = false; break; }
    if (newOpts.length !== oldOpts.length) { ok = false; break; }
    if (newOpts[newAns] !== oldOpts[oldAns]) { ok = false; break; } // correct string preserved
    // Every position that wasn't one of the two swapped indices must be unchanged.
    for (let j = 0; j < oldOpts.length; j++) {
      const isSwappedSlot = (j === oldAns || j === newAns);
      if (!isSwappedSlot && newOpts[j] !== oldOpts[j]) { ok = false; break; }
    }
    if (!ok) break;
    // Multiset of options must be exactly preserved.
    const a1 = [...oldOpts].sort(), a2 = [...newOpts].sort();
    if (JSON.stringify(a1) !== JSON.stringify(a2)) { ok = false; break; }
  }

  if (!ok) {
    stats.failed.push(`${entry.id}: overenie po prepise zlyhalo — súbor NEBOL zmenený`);
    continue;
  }

  if (!DRY_RUN) fs.writeFileSync(absPath, newSrc);
  stats.filesChanged++;
}

console.log(`Súbory zmenené: ${stats.filesChanged}${DRY_RUN ? ' (dry-run, nezapísané)' : ''}`);
console.log(`Aktivity presunuté na nový index: ${stats.activitiesSwapped}`);
console.log(`Aktivity, kde bol nový index rovnaký ako pôvodný (bez zmeny): ${stats.activitiesNoop}`);
console.log(`Preskočené (poradie je zámerné): ${stats.skipped.length}`);
stats.skipped.forEach(s => console.log('   ' + s));
console.log(`\nVýsledné rozdelenie indexu správnej odpovede: ${JSON.stringify(finalDistribution)}`);
if (stats.unsupported.length) {
  console.log(`\nNEPODPOROVANÉ (ručne skontrolovať, nič sa nezmenilo) — ${stats.unsupported.length}:`);
  stats.unsupported.forEach(s => console.log('   ' + s));
}
if (stats.failed.length) {
  console.log(`\nZLYHALO OVERENIE (súbor NEBOL zapísaný) — ${stats.failed.length}:`);
  stats.failed.forEach(s => console.log('   ' + s));
  process.exitCode = 1;
}
