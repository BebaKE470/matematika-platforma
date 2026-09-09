#!/usr/bin/env node
// tools/generate-pripravy.mjs
//
// Generuje "Prípravu na vyučovaciu hodinu" (.docx) pre každú tému z modules/registry.js,
// v adresárovej štruktúre zrkadliacej modules/ (pripravy-na-hodiny/<rocnik>/<celok>/<subor>.docx).
//
// Vzor štruktúry: zdrojove-materialy/Príprava hodiny.docx (metodická príručka).
// Obsah čerpá z teacher/student polí každého modulu presne tak, ako ich načíta
// tools/audit.mjs (klasické <script> načítanie cez eval, žiadny build krok).
//
// Použitie:
//   node tools/generate-pripravy.mjs                     # všetko (1.–3. ročník)
//   node tools/generate-pripravy.mjs --unit "Výroková formula" --year 1   # len jeden celok (pilot)
//
// Vyžaduje Windows PowerShell (Compress-Archive) na zbalenie .docx zo zložených XML častí.

import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const OUT_ROOT = path.join(ROOT, 'pripravy-na-hodiny');

const args = process.argv.slice(2);
function argVal(name) {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : null;
}
const FILTER_UNIT = argVal('unit');
const FILTER_YEAR = argVal('year') ? Number(argVal('year')) : null;

// ---------------------------------------------------------------------------
// 1. Načítanie registry + modulov presne ako v tools/audit.mjs.
// ---------------------------------------------------------------------------

globalThis.window = globalThis.window || {};
let currentFile = '(registry)';
const collected = [];
globalThis.MathPlatform = { registerModule(m) { collected.push({ file: currentFile, module: m }); } };
globalThis.window.MathPlatform = globalThis.MathPlatform;

function loadClassicScript(absPath) {
  const src = fs.readFileSync(absPath, 'utf8');
  (0, eval)(src);
}

const registryPath = path.join(ROOT, 'modules/registry.js');
currentFile = 'modules/registry.js';
loadClassicScript(registryPath);
const registry = globalThis.window.MATH_MODULE_INDEX;

const modulesByEntry = new Map();
for (const entry of registry) {
  const abs = path.join(ROOT, entry.file);
  if (!fs.existsSync(abs)) { console.error(`CHÝBA súbor: ${entry.file}`); continue; }
  const before = collected.length;
  currentFile = entry.file;
  loadClassicScript(abs);
  const mod = collected[collected.length - 1]?.module;
  if (collected.length > before && mod && mod.id === entry.id) modulesByEntry.set(entry.id, mod);
}

let targets = registry.filter(e => e.status === 'ready' && modulesByEntry.has(e.id));
if (FILTER_YEAR) targets = targets.filter(e => e.year === FILTER_YEAR);
if (FILTER_UNIT) targets = targets.filter(e => e.unit === FILTER_UNIT);

console.log(`Cieľových hodín: ${targets.length} (z ${registry.length} v registri)`);

// ---------------------------------------------------------------------------
// 2. Malé OOXML pomocníky.
// ---------------------------------------------------------------------------

function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function stripHtml(s) {
  return String(s ?? '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}
function truncate(s, n) { return s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s; }

function run(text, { bold, italic } = {}) {
  const rpr = (bold || italic) ? `<w:rPr>${bold ? '<w:b/>' : ''}${italic ? '<w:i/>' : ''}</w:rPr>` : '';
  return `<w:r>${rpr}<w:t xml:space="preserve">${esc(text)}</w:t></w:r>`;
}
function para(text, { style, bold, italic } = {}) {
  const ppr = style ? `<w:pPr><w:pStyle w:val="${style}"/></w:pPr>` : '';
  return `<w:p>${ppr}${run(text, { bold, italic })}</w:p>`;
}
function heading(text, level) {
  return `<w:p><w:pPr><w:pStyle w:val="Heading${level}"/></w:pPr>${run(text)}</w:p>`;
}
function bulletList(items, { bold } = {}) {
  if (!items || !items.length) return para('— (nie je uvedené v metodickej karte modulu)', { italic: true });
  return items.map(t =>
    `<w:p><w:pPr><w:pStyle w:val="ListParagraph"/><w:numPr><w:ilvl w:val="0"/><w:numId w:val="1"/></w:numPr></w:pPr>${run(t, { bold })}</w:p>`
  ).join('');
}
function note(text) { return para(text, { style: 'Note', italic: true }); }

function table(headers, rows) {
  const cols = headers.length;
  const w = Math.floor(5000 / cols);
  const grid = headers.map(() => `<w:gridCol/>`).join('');
  const borders = `<w:tblBorders>
    <w:top w:val="single" w:sz="4" w:color="B0B0B0"/><w:left w:val="single" w:sz="4" w:color="B0B0B0"/>
    <w:bottom w:val="single" w:sz="4" w:color="B0B0B0"/><w:right w:val="single" w:sz="4" w:color="B0B0B0"/>
    <w:insideH w:val="single" w:sz="4" w:color="B0B0B0"/><w:insideV w:val="single" w:sz="4" w:color="B0B0B0"/>
  </w:tblBorders>`;
  const headRow = `<w:tr>${headers.map(h =>
    `<w:tc><w:tcPr><w:tcW w:w="${w}" w:type="pct"/><w:shd w:val="clear" w:fill="E7ECF5"/></w:tcPr><w:p>${run(h, { bold: true })}</w:p></w:tc>`
  ).join('')}</w:tr>`;
  const bodyRows = rows.map(r => `<w:tr>${r.map(c =>
    `<w:tc><w:tcPr><w:tcW w:w="${w}" w:type="pct"/></w:tcPr><w:p>${run(c)}</w:p></w:tc>`
  ).join('')}</w:tr>`).join('');
  return `<w:tbl><w:tblPr><w:tblW w:w="5000" w:type="pct"/>${borders}<w:tblLook w:val="04A0"/></w:tblPr><w:tblGrid>${grid}</w:tblGrid>${headRow}${bodyRows}</w:tbl>`;
}

// ---------------------------------------------------------------------------
// 3. Doménová logika: odvodenie obsahu prípravy z entry + mod.
// ---------------------------------------------------------------------------

const AFFECTIVE_GOALS = [
  'Žiak si zodpovedne plní zadané úlohy v zošite aj v aplikácii a pracuje sústredene po celú dobu aktivity.',
  'Žiak rešpektuje pravidlá matematickej argumentácie a prijíma spätnú väzbu — vrátane vlastnej chyby — ako súčasť učenia, nie ako zlyhanie.',
  'Žiak prejavuje záujem o presné matematické vyjadrovanie a spoluprácu so spolužiakmi a učiteľom pri kontrole výsledkov.',
];

const PSYCHOMOTOR_BY_TYPE = {
  coordinatePlot: 'Žiak zostrojí/vyznačí bod, graf alebo útvar v súradnicovej rovine.',
  notebook: 'Žiak vyhotoví presný a prehľadný zápis (definícia, postup, vzorec) do zošita.',
  numberInput: 'Žiak vypočíta a číselne zapíše výsledok danej úlohy.',
  matrix: 'Žiak priradí/zaradí položky podľa správneho matematického kritéria.',
  sortChoice: 'Žiak rozdelí/zoradí položky do správnych kategórií.',
  selfWrite: 'Žiak sformuluje a zapíše vlastnými slovami matematické vysvetlenie alebo zdôvodnenie.',
};

const INTERSUBJECT_BY_KEYWORD = [
  [/výrok|množin|logi/i, 'informatika (logické podmienky, algoritmizácia, práca s množinami dát)'],
  [/goniometri|planimetri|trojuholník|sínus|kosínus/i, 'odborné predmety študijného odboru 3692 M Geodézia, kartografia a kataster — meranie uhlov a dĺžok, mapovanie'],
  [/stereometri|sterometri/i, 'odborné predmety (geodézia, kartografia) — výpočty objemov a povrchov telies pri zememeračských úlohách'],
  [/pravdepodob|štatistik|kombinatori/i, 'informatika a spoločenskovedné predmety — práca s dátami, spracovanie a interpretácia výsledkov merania'],
  [/funkci/i, 'fyzika a odborné predmety — priebeh a modelovanie závislostí veličín'],
];
function intersubjectFor(unit) {
  const hit = INTERSUBJECT_BY_KEYWORD.find(([re]) => re.test(unit));
  return hit ? hit[1] : 'fyzika, odborné technické predmety — aplikácia vzorcov a výpočtov v praxi';
}

function activityRows(activities) {
  return activities.map(a => {
    const text = a.title || a.question || a.prompt || (a.promptHtml ? stripHtml(a.promptHtml) : '') || (a.html ? stripHtml(a.html) : '') || '—';
    const skill = a.skill || (Array.isArray(a.skills) ? a.skills.join(', ') : '') || '—';
    return [a.phase || '—', a.type, truncate(text, 110), skill];
  });
}

function flowRows(flow) {
  return (flow || []).map(line => {
    const m = /^(.*?):\s*(.*)$/s.exec(line);
    return m ? [m[1], m[2]] : ['—', line];
  });
}

function buildDocumentXml(entry, mod) {
  const t = mod.teacher || {};
  const s = mod.student || {};
  const acts = s.activities || [];
  const hasReflection = acts.some(a => a.type === 'reflection');
  const typesPresent = new Set(acts.map(a => a.type));

  const psychomotor = [...typesPresent].map(ty => PSYCHOMOTOR_BY_TYPE[ty]).filter(Boolean);
  if (!psychomotor.length) psychomotor.push('Žiak ovláda digitálne rozhranie aplikácie (výber odpovede, práca s vizualizáciou) presným a sústredeným spôsobom.');

  const methods = [
    'odborný (motivačný) výklad učiva',
    'riadený rozhovor / aktivizujúce otázky',
    'samostatná práca s digitálnou platformou (individuálna, s okamžitou spätnou väzbou)',
    'práca so zošitom — presný matematický zápis',
  ];
  if (typesPresent.has('sortChoice') || typesPresent.has('matrix')) methods.push('klasifikácia a zaraďovanie pojmov');
  if (typesPresent.has('selfWrite')) methods.push('samostatná písomná formulácia vlastnými slovami');

  const pomocky = [
    'zošit a písacie potreby',
    'tabuľa / prezentačná technika',
    'mobil, tablet alebo PC s pripojením na internet',
    `webová aplikácia „Matematika — interaktívna platforma“ (modul ${entry.id})`,
  ];
  if (typesPresent.has('numberInput')) pomocky.push('kalkulačka (podľa charakteru úlohy)');

  const hodnotenie = [
    'priebežné slovné hodnotenie počas hodiny',
    'okamžitá spätná väzba z aktivít v aplikácii (XP je orientačná spätná väzba, nie automatická známka)',
  ];
  if (hasReflection) hodnotenie.push('sebahodnotenie žiaka na záver hodiny (aktivita „reflexia“ v aplikácii — 🟢/🟡/🔴, informatívne)');
  hodnotenie.push('voliteľne: hodnotenie podľa percentuálnych prahov nastavených učiteľom (Live Lesson mód) a export výsledkov (CSV)');

  const svvp = [
    'aplikácia dáva okamžitú spätnú väzbu a pomôcku (hint) pred prezradením riešenia — žiak môže pracovať vlastným tempom',
    'časť digitálnej aktivity možno vynechať, skrátiť alebo presunúť (pozri „Využitie po častiach“ v metodickej karte nižšie)',
    'konkrétne kompenzačné a podporné opatrenia pre žiaka so ŠVVP určuje učiteľ podľa odporúčaní poradenského zariadenia',
  ];

  const intersubject = intersubjectFor(entry.unit);
  const today = new Date().toISOString().slice(0, 10);

  const factsRows = [
    ['Predmet', 'Matematika'],
    ['Ročník a trieda', `${entry.year}. ročník SŠ — trieda: (doplní učiteľ)`],
    ['Tematický celok', entry.unit],
    ['Téma vyučovacej hodiny', entry.topic],
    ['Označenie v tematickom pláne', entry.lesson],
    ['Typ hodiny', entry.type],
    ['Časová dotácia', '45 min (1 vyučovacia hodina)'],
    ['Digitálna platforma — modul', `${entry.id} „${s.title || entry.topic}“`],
    ['Odhad trvania práce v aplikácii (metodická karta)', s.estimatedTime || entry.time || '—'],
  ];

  const body = [
    para('Príprava na vyučovaciu hodinu', { style: 'Title' }),
    para(`${entry.unit} · ${entry.topic}`, { style: 'Subtitle' }),
    table(['Náležitosť', 'Údaj'], factsRows),

    heading('1. Výchovno-vzdelávacie ciele hodiny', 1),
    heading('Kognitívne ciele', 2),
    bulletList(t.goals),
    heading('Afektívne ciele', 2),
    bulletList(AFFECTIVE_GOALS),
    heading('Psychomotorické ciele', 2),
    bulletList(psychomotor),

    heading('2. Rozvíjané kompetencie', 1),
    bulletList(t.competencies),

    heading('3. Medzipredmetové vzťahy', 1),
    para(`Prepojenie na: ${intersubject}`),
    note('Orientačné prepojenie — učiteľ upraví podľa aktuálnej triedy a ŠkVP odboru 3692 M Geodézia, kartografia a kataster.'),

    heading('4. Vyučovacie metódy a organizačné formy', 1),
    heading('Metódy', 3),
    bulletList(methods),
    heading('Organizačné formy', 3),
    bulletList(['frontálna (výklad, zhrnutie)', 'individuálna (práca s aplikáciou, zápis do zošita)', 'práca vo dvojiciach (voliteľne, pri kontrole/rozhovore)']),

    heading('5. Didaktické a odborné učebné pomôcky', 1),
    bulletList(pomocky),

    heading('6. Spôsob hodnotenia žiakov', 1),
    bulletList(hodnotenie),

    heading('7. Zohľadnenie potrieb žiakov so ŠVVP', 1),
    bulletList(svvp),

    heading('8. Štruktúra vyučovacej hodiny', 1),

    heading('Úvodná časť (≈ 3–5 min)', 2),
    bulletList([
      'organizačné zabezpečenie hodiny (prezencia, príprava pomôcok a zariadení na aplikáciu)',
      `oznámenie témy: „${entry.topic}“`,
      'oboznámenie žiakov s cieľmi hodiny (pozri časť 1)',
      'motivačný prvok — prepojenie témy s praxou / odborom',
    ]),

    heading('Motivačno-opakovacia časť (≈ 5 min)', 2),
    para('Nadviazanie na predchádzajúce učivo, aktivizácia poznatkov žiakov otázkami na:'),
    bulletList(t.prerequisites),

    heading('Expozičná časť (≈ 15 min)', 2),
    para('Odborný výklad učiva podľa obsahového štandardu:'),
    bulletList(t.planContent),
    para('Dôraz na výkonový štandard (čo má žiak vedieť/vedieť urobiť):'),
    bulletList(t.planPerformance),

    heading('Fixačná a aplikačná časť', 2),
    heading(`Aktivita s digitálnou platformou (${s.estimatedTime || entry.time || '≈ 10 min'})`, 3),
    para('Časovo ohraničená, cielená aktivita v rámci hodiny — krátka práca s aplikáciou (rádovo do cca 10–25 min podľa rozsahu modulu), nie náhrada ostatných častí hodiny:'),
    para(s.intro || ''),
    table(['Fáza', 'Typ aktivity', 'Obsah / otázka', 'Zručnosť'], activityRows(acts)),
    note('Podľa potreby možno niektoré kroky vynechať alebo skrátiť — pozri „Využitie po častiach“ v metodickej karte nižšie.'),
    para('Doplnkovo (mimo aplikácie, do konca časového rámca hodiny): riešenie odborných úloh a príkladov v zošite, aplikácia teoretických poznatkov v praxi.'),

    heading('Záverečná časť (≈ 5 min)', 2),
    para('Zhrnutie učiva za účasti žiakov — učiteľ overí, či žiak:'),
    bulletList(t.diagnostics),
    para(hasReflection
      ? 'Spätná väzba a sebahodnotenie: záverečná aktivita „reflexia“ v aplikácii (🟢/🟡/🔴) — informatívne, nie je to známka.'
      : 'Spätná väzba: krátke slovné zhrnutie, čo sa žiaci naučili a čo im robilo problém.'),
    para('Zadanie domácej úlohy v súlade s preberaným učivom (doplní učiteľ podľa zbierky úloh).'),

    heading('9. Metodická karta modulu (zdroj: platforma)', 1),
    para(`Zaradenie: ${t.placement || '—'}`),
    heading('Predpoklady', 3), bulletList(t.prerequisites),
    heading('Obsahový štandard', 3), bulletList(t.planContent),
    heading('Výkonový štandard', 3), bulletList(t.planPerformance),
    heading('Ciele (podľa modulu)', 3), bulletList(t.goals),
    heading('Kompetencie', 3), bulletList(t.competencies),
    heading('Obohatenie (návrh maturitného štandardu)', 3), bulletList(t.enrichment),
    heading('Priebeh hodiny podľa modulu', 3), table(['Čas', 'Činnosť'], flowRows(t.flow)),
    heading('Diagnostika pre učiteľa', 3), bulletList(t.diagnostics),
    heading('Využitie po častiach', 3), bulletList(t.partialUse),

    note(`Táto príprava bola automaticky vygenerovaná z tematického plánu a metodickej karty modulu ${entry.id} (${entry.file}) platformy matematika-platforma, dňa ${today}. Pred použitím na hodine overte súlad s aktuálnym rozvrhom a konkrétnou triedou.`),
  ].join('');

  const sectPr = `<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134" w:header="708" w:footer="708" w:gutter="0"/></w:sectPr>`;

  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
<w:body>${body}${sectPr}</w:body>
</w:document>`;
}

// ---------------------------------------------------------------------------
// 4. Statické časti docx balíka.
// ---------------------------------------------------------------------------

const CONTENT_TYPES = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
<Override PartName="/word/numbering.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml"/>
<Override PartName="/word/settings.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml"/>
<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
<Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>`;

const RELS_ROOT = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>`;

const RELS_DOC = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering" Target="numbering.xml"/>
<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings" Target="settings.xml"/>
</Relationships>`;

const SETTINGS = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:settings xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
<w:defaultTabStop w:val="708"/>
</w:settings>`;

const STYLES = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
<w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/><w:sz w:val="22"/><w:lang w:val="sk-SK"/></w:rPr></w:rPrDefault></w:docDefaults>
<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:after="120" w:line="276" w:lineRule="auto"/></w:pPr></w:style>
<w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:after="80"/></w:pPr><w:rPr><w:b/><w:sz w:val="36"/><w:color w:val="1F3864"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="Subtitle"><w:name w:val="Subtitle"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:after="240"/></w:pPr><w:rPr><w:i/><w:sz w:val="26"/><w:color w:val="44546A"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:before="360" w:after="120"/><w:outlineLvl w:val="0"/></w:pPr><w:rPr><w:b/><w:sz w:val="28"/><w:color w:val="1F3864"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="Heading2"><w:name w:val="heading 2"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:before="240" w:after="100"/><w:outlineLvl w:val="1"/></w:pPr><w:rPr><w:b/><w:sz w:val="24"/><w:color w:val="2E5395"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="Heading3"><w:name w:val="heading 3"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:before="200" w:after="80"/><w:outlineLvl w:val="2"/></w:pPr><w:rPr><w:b/><w:i/><w:sz w:val="22"/><w:color w:val="44546A"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="ListParagraph"><w:name w:val="List Paragraph"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:ind w:left="360"/><w:contextualSpacing/></w:pPr></w:style>
<w:style w:type="paragraph" w:styleId="Note"><w:name w:val="Note"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:before="80" w:after="80"/></w:pPr><w:rPr><w:i/><w:color w:val="595959"/><w:sz w:val="20"/></w:rPr></w:style>
</w:styles>`;

const NUMBERING = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:numbering xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
<w:abstractNum w:abstractNumId="0"><w:lvl w:ilvl="0"><w:start w:val="1"/><w:numFmt w:val="bullet"/><w:lvlText w:val="&#8226;"/><w:lvlJc w:val="left"/><w:pPr><w:ind w:left="720" w:hanging="360"/></w:pPr><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:hint="default"/></w:rPr></w:lvl></w:abstractNum>
<w:num w:numId="1"><w:abstractNumId w:val="0"/></w:num>
</w:numbering>`;

function coreProps(title, date) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<dc:title>${esc(title)}</dc:title>
<dc:creator>matematika-platforma</dc:creator>
<cp:lastModifiedBy>matematika-platforma</cp:lastModifiedBy>
<dcterms:created xsi:type="dcterms:W3CDTF">${date}T00:00:00Z</dcterms:created>
<dcterms:modified xsi:type="dcterms:W3CDTF">${date}T00:00:00Z</dcterms:modified>
</cp:coreProperties>`;
}

const APP_PROPS = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties">
<Application>matematika-platforma</Application>
</Properties>`;

// ---------------------------------------------------------------------------
// 5. Minimalistický ZIP writer (nahrádza PowerShell Compress-Archive, ktorý
//    na Windows PowerShell 5.1 zapisuje mená položiek so spätnými lomkami —
//    to porušuje OPC pomenovanie častí, ktoré Word vyžaduje s "/").
// ---------------------------------------------------------------------------

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) crc = CRC_TABLE[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
  return (crc ^ 0xFFFFFFFF) >>> 0;
}
function dosDateTime(date) {
  const time = ((date.getHours() & 0x1F) << 11) | ((date.getMinutes() & 0x3F) << 5) | ((date.getSeconds() >> 1) & 0x1F);
  const dt = (((date.getFullYear() - 1980) & 0x7F) << 9) | (((date.getMonth() + 1) & 0xF) << 5) | (date.getDate() & 0x1F);
  return { time, dt };
}

// files: [{ name: 'word/document.xml' (forward slashes!), data: Buffer|string }]
function buildZip(files) {
  const { time, dt } = dosDateTime(new Date());
  const localParts = [];
  const centralParts = [];
  let offset = 0;

  for (const f of files) {
    const nameBuf = Buffer.from(f.name, 'utf8');
    const uncompressed = Buffer.isBuffer(f.data) ? f.data : Buffer.from(f.data, 'utf8');
    const deflated = zlib.deflateRawSync(uncompressed);
    const store = deflated.length >= uncompressed.length;
    const method = store ? 0 : 8;
    const payload = store ? uncompressed : deflated;
    const crc = crc32(uncompressed);

    const localHeader = Buffer.alloc(30);
    localHeader.writeUInt32LE(0x04034b50, 0);
    localHeader.writeUInt16LE(20, 4);
    localHeader.writeUInt16LE(0, 6);
    localHeader.writeUInt16LE(method, 8);
    localHeader.writeUInt16LE(time, 10);
    localHeader.writeUInt16LE(dt, 12);
    localHeader.writeUInt32LE(crc, 14);
    localHeader.writeUInt32LE(payload.length, 18);
    localHeader.writeUInt32LE(uncompressed.length, 22);
    localHeader.writeUInt16LE(nameBuf.length, 26);
    localHeader.writeUInt16LE(0, 28);
    localParts.push(localHeader, nameBuf, payload);

    const centralHeader = Buffer.alloc(46);
    centralHeader.writeUInt32LE(0x02014b50, 0);
    centralHeader.writeUInt16LE(20, 4);
    centralHeader.writeUInt16LE(20, 6);
    centralHeader.writeUInt16LE(0, 8);
    centralHeader.writeUInt16LE(method, 10);
    centralHeader.writeUInt16LE(time, 12);
    centralHeader.writeUInt16LE(dt, 14);
    centralHeader.writeUInt32LE(crc, 16);
    centralHeader.writeUInt32LE(payload.length, 20);
    centralHeader.writeUInt32LE(uncompressed.length, 24);
    centralHeader.writeUInt16LE(nameBuf.length, 28);
    centralHeader.writeUInt16LE(0, 30);
    centralHeader.writeUInt16LE(0, 32);
    centralHeader.writeUInt16LE(0, 34);
    centralHeader.writeUInt16LE(0, 36);
    centralHeader.writeUInt32LE(0, 38);
    centralHeader.writeUInt32LE(offset, 42);
    centralParts.push(centralHeader, nameBuf);

    offset += localHeader.length + nameBuf.length + payload.length;
  }

  const centralDirStart = offset;
  const centralDirBuf = Buffer.concat(centralParts);

  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(0, 4);
  eocd.writeUInt16LE(0, 6);
  eocd.writeUInt16LE(files.length, 8);
  eocd.writeUInt16LE(files.length, 10);
  eocd.writeUInt32LE(centralDirBuf.length, 12);
  eocd.writeUInt32LE(centralDirStart, 16);
  eocd.writeUInt16LE(0, 20);

  return Buffer.concat([...localParts, centralDirBuf, eocd]);
}

// ---------------------------------------------------------------------------
// 6. Zostavenie .docx (OPC balík) pre jednu hodinu.
// ---------------------------------------------------------------------------

function buildDocx(entry, mod, destAbsPath) {
  const title = `Príprava na hodinu — ${entry.topic}`;
  const today = new Date().toISOString().slice(0, 10);

  const files = [
    { name: '[Content_Types].xml', data: CONTENT_TYPES },
    { name: '_rels/.rels', data: RELS_ROOT },
    { name: 'word/_rels/document.xml.rels', data: RELS_DOC },
    { name: 'word/styles.xml', data: STYLES },
    { name: 'word/numbering.xml', data: NUMBERING },
    { name: 'word/settings.xml', data: SETTINGS },
    { name: 'docProps/core.xml', data: coreProps(title, today) },
    { name: 'docProps/app.xml', data: APP_PROPS },
    { name: 'word/document.xml', data: buildDocumentXml(entry, mod) },
  ];

  fs.mkdirSync(path.dirname(destAbsPath), { recursive: true });
  fs.writeFileSync(destAbsPath, buildZip(files));
}

// ---------------------------------------------------------------------------
// 6. Beh.
// ---------------------------------------------------------------------------

let ok = 0, fail = 0;
for (const entry of targets) {
  const mod = modulesByEntry.get(entry.id);
  const relOut = entry.file.replace(/^modules[\\/]/, 'pripravy-na-hodiny/').replace(/\.js$/, '.docx');
  const destAbs = path.join(ROOT, relOut);
  try {
    buildDocx(entry, mod, destAbs);
    console.log(`OK  ${relOut}`);
    ok++;
  } catch (e) {
    console.error(`FAIL ${relOut}: ${e.message}`);
    fail++;
  }
}
console.log(`\nHotovo: ${ok} vygenerovaných, ${fail} zlyhaní.`);
process.exit(fail ? 1 : 0);
