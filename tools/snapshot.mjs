#!/usr/bin/env node
// tools/snapshot.mjs
//
// Regression oracle for the core/ rewrite. Loads modules/registry.js and every
// content module exactly like the browser does, then writes a canonical JSON
// dump of every registered module object (sorted by id, keys sorted) plus the
// registry entries themselves.
//
// Usage:
//   node tools/snapshot.mjs > /tmp/before.json
//   ... do the core/ rewrite (content files untouched) ...
//   node tools/snapshot.mjs > /tmp/after.json
//   diff /tmp/before.json /tmp/after.json     (must be empty)
//
// This only proves content identity — it does not replace the audit
// (tools/audit.mjs) or a manual click-through.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

globalThis.window = globalThis.window || {};
const collected = [];
globalThis.MathPlatform = { registerModule(m) { collected.push(m); } };
globalThis.window.MathPlatform = globalThis.MathPlatform;

function loadClassicScript(absPath) {
  (0, eval)(fs.readFileSync(absPath, 'utf8'));
}

loadClassicScript(path.join(ROOT, 'modules/registry.js'));
const registry = globalThis.window.MATH_MODULE_INDEX;

for (const entry of registry) {
  loadClassicScript(path.join(ROOT, entry.file));
}

// Stable stringify: sorts object keys recursively so key-order changes in the
// source (e.g. reformatting) don't show up as a diff.
function sortKeys(v) {
  if (Array.isArray(v)) return v.map(sortKeys);
  if (v && typeof v === 'object') {
    return Object.keys(v).sort().reduce((o, k) => { o[k] = sortKeys(v[k]); return o; }, {});
  }
  return v;
}

const byId = new Map(collected.map(m => [m.id, m]));
const out = {
  registry: sortKeys([...registry].sort((a, b) => a.id.localeCompare(b.id))),
  modules: [...byId.keys()].sort().map(id => sortKeys(byId.get(id))),
};

process.stdout.write(JSON.stringify(out, null, 1) + '\n');
