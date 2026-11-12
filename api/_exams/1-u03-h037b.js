// Kontrolná písomná práca · 1. ročník · Čísla, premenné, výrazy · celý celok (hodiny 28–36), skupiny A a B.
//
// Ostrá písomka: pojmy, kritériá deliteľnosti, rozklad, NSD a NSN, slovná úloha, číselné množiny,
// vlastnosti operácií, percentá a bonus. Rovnaká stavba ako príprava 1-u03-h037p, ale iné
// zadania. Skupiny A a B majú rovnaké id úloh a krokov, rovnaké `kind` a `points`
// (kontroluje tools/audit.mjs).
//
// Súbor je zámerne MIMO verejných statických súborov (pozri 1-u02-h023b.js).
//
// Hodnoty v `key`:
//   kind 'number' → reťazec; kind 'set' → pole reťazcov; kind 'choice' → poradie možnosti od 0.

// Priraďovačka: 7 pojmov + jedna definícia navyše (7 v CANON). Poradie v A a B je rôzne.
const CANON = [
  'prirodzené číslo väčšie ako 1, ktoré má práve dvoch deliteľov: 1 a samo seba',  // 0 prvočíslo
  'najväčšie číslo, ktorým sú deliteľné obe dané čísla',                           // 1 NSD
  'najmenšie kladné číslo, ktoré je násobkom oboch daných čísel',                  // 2 NSN
  'číslo, ktoré sa nedá zapísať zlomkom celých čísel',                             // 3 iracionálne číslo
  'jedna stotina základu',                                                         // 4 percento
  'celok, z ktorého percentá počítame (zodpovedá 100 %)',                          // 5 základ
  'číslo, ktoré vznikne vynásobením daného čísla prirodzeným číslom',              // 6 násobok
  'prirodzené číslo väčšie ako 1, ktoré má aspoň troch deliteľov',                 // 7 navyše
];
const pick = perm => perm.map(i => CANON[i]);
const DEFS_A = pick([5, 2, 7, 0, 4, 1, 6, 3]);
const DEFS_B = pick([1, 6, 3, 4, 0, 7, 5, 2]);

const YESNO = ['áno', 'nie'];
const TRUTH = ['pravda', 'nepravda'];
const SETS = ['N', 'Z', 'Q', 'I'];
const LAWS = ['komutatívnosť', 'asociatívnosť', 'distributívnosť'];
const NOTE_SET = 'Každé číslo napíš do osobitného políčka.';
const Q_SETS = 'Pre každé číslo vyber najmenšiu množinu, do ktorej patrí: N (prirodzené), Z (celé), Q (racionálne) alebo I (iracionálne). Platí N ⊂ Z ⊂ Q, množina I je mimo nich.';
const Q_LAWS = 'V krokoch 1–3 vyber vlastnosť, ktorú rovnosť využíva. V krokoch 4–5 vypočítaj výhodne (využi vlastnosti operácií).';

module.exports = {
  id: '1-u03-h037b',
  title: 'Kontrolná písomná práca: Čísla, premenné, výrazy',
  minutes: 45,
  printStepLabels: true,
  instructions: [
    'Úlohy sú rozdelené na kroky. Pri každej úlohe vyplň všetky kroky. Za každý správny krok získaš body, aj keď neskôr urobíš chybu.',
    'Počítaj na papieri a do aplikácie prepisuj výsledky krokov. Pri úlohách s viacerými číslami píš každé číslo do osobitného políčka. Percentá zapisuj ako číslo bez znaku %.',
    'Odpovede sa ukladajú priebežne. Na konci stlač „Odovzdať“. Bonusová úloha nie je povinná.',
  ],

  groups: {
    A: {
      tasks: [
        { id: 'u1', title: 'Úloha 1: Pojmy a definície',
          question: 'Ku každému pojmu vyber jeho definíciu. Jedna definícia je navyše.',
          steps: [
            { id: 's1', label: 'jedno percento', kind: 'choice', options: DEFS_A, points: 1 },
            { id: 's2', label: 'najväčší spoločný deliteľ (NSD, značka D)', kind: 'choice', options: DEFS_A, points: 1 },
            { id: 's3', label: 'iracionálne číslo', kind: 'choice', options: DEFS_A, points: 1 },
            { id: 's4', label: 'prvočíslo', kind: 'choice', options: DEFS_A, points: 1 },
            { id: 's5', label: 'základ pri počítaní s percentami', kind: 'choice', options: DEFS_A, points: 1 },
            { id: 's6', label: 'najmenší spoločný násobok (NSN, značka n)', kind: 'choice', options: DEFS_A, points: 1 },
            { id: 's7', label: 'násobok čísla', kind: 'choice', options: DEFS_A, points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2: Kritériá deliteľnosti',
          question: 'Použi kritériá deliteľnosti, nemusíš deliť. V krokoch 1–4 vyber odpoveď.', onlineNote: NOTE_SET,
          steps: [
            { id: 's1', label: 'Je číslo 5 128 deliteľné číslom 4?', kind: 'choice', options: YESNO, points: 1 },
            { id: 's2', label: 'Je číslo 4 835 deliteľné číslom 3?', kind: 'choice', options: YESNO, points: 1 },
            { id: 's3', label: 'Je číslo 7 236 deliteľné číslom 9?', kind: 'choice', options: YESNO, points: 1 },
            { id: 's4', label: 'Je číslo 3 456 deliteľné číslom 5?', kind: 'choice', options: YESNO, points: 1 },
            { id: 's5', label: 'Ktoré z čísel 2, 3, 4, 5, 6, 9, 10 delia číslo 6 420?', kind: 'set', points: 1 },
            { id: 's6', label: 'Aká číslica patrí na miesto štvorčeka, aby bolo trojciferné číslo 73□ deliteľné 9?', kind: 'number', points: 1 },
          ] },
        { id: 'u3', title: 'Úloha 3: Rozklad, NSD a NSN',
          question: 'Čísla 252 a 210 rozlož na súčin prvočísel (na papieri), potom odpovedz.', onlineNote: NOTE_SET,
          steps: [
            { id: 's1', label: 'Ktoré rôzne prvočísla sa vyskytujú v rozklade čísla 252?', kind: 'set', points: 1 },
            { id: 's2', label: 'Koľkokrát sa v rozklade čísla 252 vyskytuje prvočíslo 3?', kind: 'number', points: 1 },
            { id: 's3', label: 'NSD – D(252, 210)', kind: 'number', points: 1 },
            { id: 's4', label: 'NSN – n(252, 210)', kind: 'number', points: 1 },
            { id: 's5', label: 'Je číslo 87 prvočíslo?', kind: 'choice', options: YESNO, points: 1 },
          ] },
        { id: 'u4', title: 'Úloha 4: Slovná úloha s NSD a NSN',
          question: 'Učiteľ má 72 pier a 108 zošitov. Chce vytvoriť rovnaké balíčky tak, aby rozdal všetko a balíčkov bolo čo najviac. Električka A odchádza zo zastávky každých 12 minút, električka B každých 18 minút. O 6:00 odišli obe súčasne.',
          steps: [
            { id: 's1', label: 'Koľko balíčkov vytvorí?', kind: 'number', points: 1 },
            { id: 's2', label: 'Koľko pier bude v jednom balíčku?', kind: 'number', points: 1 },
            { id: 's3', label: 'Koľko zošitov bude v jednom balíčku?', kind: 'number', points: 1 },
            { id: 's4', label: 'Za koľko minút od 6:00 odídu obe električky opäť súčasne?', kind: 'number', points: 1 },
          ] },
        { id: 'u5', title: 'Úloha 5: Číselné množiny',
          question: Q_SETS,
          steps: [
            { id: 's1', label: '−20/4', kind: 'choice', options: SETS, points: 1 },
            { id: 's2', label: '0,8', kind: 'choice', options: SETS, points: 1 },
            { id: 's3', label: '0,12345678910111213… (za sebou zapísané čísla 1, 2, 3, …)', kind: 'choice', options: SETS, points: 1 },
            { id: 's4', label: '21/3', kind: 'choice', options: SETS, points: 1 },
            { id: 's5', label: '0,111… (jednotky sa stále opakujú)', kind: 'choice', options: SETS, points: 1 },
            { id: 's6', label: 'Tvrdenie: „Každé racionálne číslo je aj celé číslo.“', kind: 'choice', options: TRUTH, points: 1 },
          ] },
        { id: 'u6', title: 'Úloha 6: Vlastnosti operácií',
          question: Q_LAWS,
          steps: [
            { id: 's1', label: '(2 · 9) · 5 = 2 · (9 · 5)', kind: 'choice', options: LAWS, points: 1 },
            { id: 's2', label: '9 · (6 − 2) = 9 · 6 − 9 · 2', kind: 'choice', options: LAWS, points: 1 },
            { id: 's3', label: '14 + 6 = 6 + 14', kind: 'choice', options: LAWS, points: 1 },
            { id: 's4', label: '25 · 19 · 4', kind: 'number', points: 1 },
            { id: 's5', label: '99 · 16', kind: 'number', points: 1 },
          ] },
        { id: 'u7', title: 'Úloha 7: Percentá',
          question: 'Percentá zapíš ako číslo bez znaku %.',
          steps: [
            { id: 's1', label: 'Koľko je 35 % zo 120?', kind: 'number', points: 1 },
            { id: 's2', label: '8 % z istého čísla je 24. Aké je to číslo?', kind: 'number', points: 1 },
            { id: 's3', label: 'Koľko percent zo 120 je 42? (odpoveď v %)', kind: 'number', points: 1 },
          ] },
        { id: 'u8', title: 'Úloha 8: Percentá z praxe',
          question: 'Tovar stál pôvodne 400 €. Najprv sa zlacnil o 25 %, potom sa nová cena zvýšila o 20 %. Ceny zapisuj v eurách bez značky €.',
          steps: [
            { id: 's1', label: 'Cena po zľave 25 %', kind: 'number', points: 1 },
            { id: 's2', label: 'Cena po následnom zvýšení o 20 %', kind: 'number', points: 1 },
            { id: 's3', label: 'O koľko eur je konečná cena nižšia ako pôvodná?', kind: 'number', points: 1 },
            { id: 's4', label: 'Bunda po zľave 30 % stojí 63 €. Aká bola jej pôvodná cena?', kind: 'number', points: 1 },
          ] },
        { id: 'u9', title: 'Úloha 9 (bonus)',
          question: 'Využi NSN viacerých čísel.',
          steps: [
            { id: 's1', label: 'NSN – n(5, 6, 10)', kind: 'number', points: 1 },
            { id: 's2', label: 'Najmenšie prirodzené číslo väčšie ako 1, ktoré pri delení každým z čísel 5, 6 a 10 dáva zvyšok 1', kind: 'number', points: 1 },
          ] },
      ],
    },

    B: {
      tasks: [
        { id: 'u1', title: 'Úloha 1: Pojmy a definície',
          question: 'Ku každému pojmu vyber jeho definíciu. Jedna definícia je navyše.',
          steps: [
            { id: 's1', label: 'najmenší spoločný násobok (NSN, značka n)', kind: 'choice', options: DEFS_B, points: 1 },
            { id: 's2', label: 'základ pri počítaní s percentami', kind: 'choice', options: DEFS_B, points: 1 },
            { id: 's3', label: 'násobok čísla', kind: 'choice', options: DEFS_B, points: 1 },
            { id: 's4', label: 'jedno percento', kind: 'choice', options: DEFS_B, points: 1 },
            { id: 's5', label: 'prvočíslo', kind: 'choice', options: DEFS_B, points: 1 },
            { id: 's6', label: 'iracionálne číslo', kind: 'choice', options: DEFS_B, points: 1 },
            { id: 's7', label: 'najväčší spoločný deliteľ (NSD, značka D)', kind: 'choice', options: DEFS_B, points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2: Kritériá deliteľnosti',
          question: 'Použi kritériá deliteľnosti, nemusíš deliť. V krokoch 1–4 vyber odpoveď.', onlineNote: NOTE_SET,
          steps: [
            { id: 's1', label: 'Je číslo 4 326 deliteľné číslom 4?', kind: 'choice', options: YESNO, points: 1 },
            { id: 's2', label: 'Je číslo 7 125 deliteľné číslom 3?', kind: 'choice', options: YESNO, points: 1 },
            { id: 's3', label: 'Je číslo 5 329 deliteľné číslom 9?', kind: 'choice', options: YESNO, points: 1 },
            { id: 's4', label: 'Je číslo 7 350 deliteľné číslom 10?', kind: 'choice', options: YESNO, points: 1 },
            { id: 's5', label: 'Ktoré z čísel 2, 3, 4, 5, 6, 9, 10 delia číslo 3 150?', kind: 'set', points: 1 },
            { id: 's6', label: 'Aká číslica patrí na miesto štvorčeka, aby bolo trojciferné číslo 29□ deliteľné 9?', kind: 'number', points: 1 },
          ] },
        { id: 'u3', title: 'Úloha 3: Rozklad, NSD a NSN',
          question: 'Čísla 300 a 420 rozlož na súčin prvočísel (na papieri), potom odpovedz.', onlineNote: NOTE_SET,
          steps: [
            { id: 's1', label: 'Ktoré rôzne prvočísla sa vyskytujú v rozklade čísla 300?', kind: 'set', points: 1 },
            { id: 's2', label: 'Koľkokrát sa v rozklade čísla 300 vyskytuje prvočíslo 5?', kind: 'number', points: 1 },
            { id: 's3', label: 'NSD – D(300, 420)', kind: 'number', points: 1 },
            { id: 's4', label: 'NSN – n(300, 420)', kind: 'number', points: 1 },
            { id: 's5', label: 'Je číslo 89 prvočíslo?', kind: 'choice', options: YESNO, points: 1 },
          ] },
        { id: 'u4', title: 'Úloha 4: Slovná úloha s NSD a NSN',
          question: 'Predavač má 63 jabĺk a 84 hrušiek. Chce vytvoriť rovnaké košíky tak, aby rozdal všetko a košíkov bolo čo najviac. Električka A odchádza zo zastávky každých 18 minút, električka B každých 24 minút. O 6:00 odišli obe súčasne.',
          steps: [
            { id: 's1', label: 'Koľko košíkov vytvorí?', kind: 'number', points: 1 },
            { id: 's2', label: 'Koľko jabĺk bude v jednom košíku?', kind: 'number', points: 1 },
            { id: 's3', label: 'Koľko hrušiek bude v jednom košíku?', kind: 'number', points: 1 },
            { id: 's4', label: 'Za koľko minút od 6:00 odídu obe električky opäť súčasne?', kind: 'number', points: 1 },
          ] },
        { id: 'u5', title: 'Úloha 5: Číselné množiny',
          question: Q_SETS,
          steps: [
            { id: 's1', label: '−15/3', kind: 'choice', options: SETS, points: 1 },
            { id: 's2', label: '0,35', kind: 'choice', options: SETS, points: 1 },
            { id: 's3', label: 'π', kind: 'choice', options: SETS, points: 1 },
            { id: 's4', label: '40/8', kind: 'choice', options: SETS, points: 1 },
            { id: 's5', label: '0,444… (štvorky sa stále opakujú)', kind: 'choice', options: SETS, points: 1 },
            { id: 's6', label: 'Tvrdenie: „Každé prirodzené číslo je aj celé číslo.“', kind: 'choice', options: TRUTH, points: 1 },
          ] },
        { id: 'u6', title: 'Úloha 6: Vlastnosti operácií',
          question: Q_LAWS,
          steps: [
            { id: 's1', label: '(5 + 3) · 7 = 5 · 7 + 3 · 7', kind: 'choice', options: LAWS, points: 1 },
            { id: 's2', label: '12 · 5 = 5 · 12', kind: 'choice', options: LAWS, points: 1 },
            { id: 's3', label: '(11 + 4) + 6 = 11 + (4 + 6)', kind: 'choice', options: LAWS, points: 1 },
            { id: 's4', label: '20 · 17 · 5', kind: 'number', points: 1 },
            { id: 's5', label: '101 · 12', kind: 'number', points: 1 },
          ] },
        { id: 'u7', title: 'Úloha 7: Percentá',
          question: 'Percentá zapíš ako číslo bez znaku %.',
          steps: [
            { id: 's1', label: 'Koľko je 45 % zo 160?', kind: 'number', points: 1 },
            { id: 's2', label: '6 % z istého čísla je 21. Aké je to číslo?', kind: 'number', points: 1 },
            { id: 's3', label: 'Koľko percent zo 160 je 64? (odpoveď v %)', kind: 'number', points: 1 },
          ] },
        { id: 'u8', title: 'Úloha 8: Percentá z praxe',
          question: 'Tovar stál pôvodne 500 €. Najprv sa zlacnil o 10 %, potom sa nová cena zvýšila o 20 %. Ceny zapisuj v eurách bez značky €.',
          steps: [
            { id: 's1', label: 'Cena po zľave 10 %', kind: 'number', points: 1 },
            { id: 's2', label: 'Cena po následnom zvýšení o 20 %', kind: 'number', points: 1 },
            { id: 's3', label: 'O koľko eur je konečná cena vyššia ako pôvodná?', kind: 'number', points: 1 },
            { id: 's4', label: 'Topánky po zľave 40 % stoja 48 €. Aká bola ich pôvodná cena?', kind: 'number', points: 1 },
          ] },
        { id: 'u9', title: 'Úloha 9 (bonus)',
          question: 'Využi NSN viacerých čísel.',
          steps: [
            { id: 's1', label: 'NSN – n(6, 8, 12)', kind: 'number', points: 1 },
            { id: 's2', label: 'Najmenšie prirodzené číslo väčšie ako 1, ktoré pri delení každým z čísel 6, 8 a 12 dáva zvyšok 1', kind: 'number', points: 1 },
          ] },
      ],
    },
  },

  bonusTasks: ['u9'],

  reflection: {
    prompt: 'Ako ti išli jednotlivé časti? Označ, nie je to známka.',
    skills: [
      'pojmy a ich definície',
      'kritériá deliteľnosti',
      'prvočíselný rozklad, NSD a NSN',
      'slovná úloha s NSD a NSN',
      'zaradenie čísel do N, Z, Q, I',
      'vlastnosti operácií a výhodné počítanie',
      'percentá: časť, základ, počet percent',
      'zľava, zdraženie a opakovaná zmena ceny',
    ],
  },

  key: {
    A: {
      // DEFS_A: poradie definície od 0
      u1: { s1: '4', s2: '5', s3: '7', s4: '3', s5: '0', s6: '1', s7: '6' },
      u2: { s1: '0', s2: '1', s3: '0', s4: '1', s5: ['2', '3', '4', '5', '6', '10'], s6: '8' },
      u3: { s1: ['2', '3', '7'], s2: '2', s3: '42', s4: '1260', s5: '1' },
      u4: { s1: '36', s2: '2', s3: '3', s4: '36' },
      u5: { s1: '1', s2: '2', s3: '3', s4: '0', s5: '2', s6: '1' },
      u6: { s1: '1', s2: '2', s3: '0', s4: '1900', s5: '1584' },
      u7: { s1: '42', s2: '300', s3: '35' },
      u8: { s1: '300', s2: '360', s3: '40', s4: '90' },
      u9: { s1: '30', s2: '31' },
    },
    B: {
      u1: { s1: '7', s2: '6', s3: '1', s4: '3', s5: '4', s6: '2', s7: '0' },
      u2: { s1: '1', s2: '0', s3: '1', s4: '0', s5: ['2', '3', '5', '6', '9', '10'], s6: '7' },
      u3: { s1: ['2', '3', '5'], s2: '2', s3: '60', s4: '2100', s5: '0' },
      u4: { s1: '21', s2: '3', s3: '4', s4: '72' },
      u5: { s1: '1', s2: '2', s3: '3', s4: '0', s5: '2', s6: '0' },
      u6: { s1: '2', s2: '0', s3: '1', s4: '1700', s5: '1212' },
      u7: { s1: '72', s2: '350', s3: '40' },
      u8: { s1: '450', s2: '540', s3: '40', s4: '80' },
      u9: { s1: '24', s2: '25' },
    },
  },
};
