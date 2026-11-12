// Príprava na kontrolnú písomnú prácu · 1. ročník · Čísla, premenné, výrazy · celý celok (hodiny 28–36).
//
// Samostatná písomka s JEDNOU skupinou (bez delenia na A a B). Rovnaká stavba ako ostrá
// písomka 1-u03-h037b, ale iné zadania. Spúšťa sa osobitne zo záznamu 1-u03-h037p v registri.
//
// Súbor je zámerne MIMO verejných statických súborov (pozri 1-u02-h023b.js).
//
// Hodnoty v `key`:
//   kind 'number' → reťazec; kind 'set' → pole reťazcov; kind 'choice' → poradie možnosti od 0.

// Priraďovačka: 7 pojmov + jedna definícia navyše (7 v CANON, v zozname DEFS premiešaná).
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
const DEFS = [3, 6, 0, 5, 7, 2, 4, 1].map(i => CANON[i]);

const YESNO = ['áno', 'nie'];
const TRUTH = ['pravda', 'nepravda'];
const SETS = ['N', 'Z', 'Q', 'I'];
const LAWS = ['komutatívnosť', 'asociatívnosť', 'distributívnosť'];
const NOTE_SET = 'Každé číslo napíš do osobitného políčka.';

module.exports = {
  id: '1-u03-h037p',
  title: 'Príprava na písomku: Čísla, premenné, výrazy',
  minutes: 45,
  printStepLabels: true,
  instructions: [
    'Toto je príprava na písomku, nie ostrá písomka. Úlohy pokrývajú celý tematický celok Čísla, premenné, výrazy.',
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
            { id: 's1', label: 'najmenší spoločný násobok (NSN, značka n)', kind: 'choice', options: DEFS, points: 1 },
            { id: 's2', label: 'jedno percento', kind: 'choice', options: DEFS, points: 1 },
            { id: 's3', label: 'prvočíslo', kind: 'choice', options: DEFS, points: 1 },
            { id: 's4', label: 'iracionálne číslo', kind: 'choice', options: DEFS, points: 1 },
            { id: 's5', label: 'najväčší spoločný deliteľ (NSD, značka D)', kind: 'choice', options: DEFS, points: 1 },
            { id: 's6', label: 'základ pri počítaní s percentami', kind: 'choice', options: DEFS, points: 1 },
            { id: 's7', label: 'násobok čísla', kind: 'choice', options: DEFS, points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2: Kritériá deliteľnosti',
          question: 'Použi kritériá deliteľnosti, nemusíš deliť. V krokoch 1–4 vyber odpoveď.', onlineNote: NOTE_SET,
          steps: [
            { id: 's1', label: 'Je číslo 3 216 deliteľné číslom 4?', kind: 'choice', options: YESNO, points: 1 },
            { id: 's2', label: 'Je číslo 7 245 deliteľné číslom 6?', kind: 'choice', options: YESNO, points: 1 },
            { id: 's3', label: 'Je číslo 5 214 deliteľné číslom 9?', kind: 'choice', options: YESNO, points: 1 },
            { id: 's4', label: 'Je číslo 8 130 deliteľné číslom 10?', kind: 'choice', options: YESNO, points: 1 },
            { id: 's5', label: 'Ktoré z čísel 2, 3, 4, 5, 6, 9, 10 delia číslo 1 485?', kind: 'set', points: 1 },
            { id: 's6', label: 'Aká číslica patrí na miesto štvorčeka, aby bolo trojciferné číslo 61□ deliteľné 9?', kind: 'number', points: 1 },
          ] },
        { id: 'u3', title: 'Úloha 3: Rozklad, NSD a NSN',
          question: 'Čísla 180 a 150 rozlož na súčin prvočísel (na papieri), potom odpovedz.', onlineNote: NOTE_SET,
          steps: [
            { id: 's1', label: 'Ktoré rôzne prvočísla sa vyskytujú v rozklade čísla 180?', kind: 'set', points: 1 },
            { id: 's2', label: 'Koľkokrát sa v rozklade čísla 180 vyskytuje prvočíslo 3?', kind: 'number', points: 1 },
            { id: 's3', label: 'NSD – D(180, 150)', kind: 'number', points: 1 },
            { id: 's4', label: 'NSN – n(180, 150)', kind: 'number', points: 1 },
            { id: 's5', label: 'Je číslo 91 prvočíslo?', kind: 'choice', options: YESNO, points: 1 },
          ] },
        { id: 'u4', title: 'Úloha 4: Slovná úloha s NSD a NSN',
          question: 'Učiteľka má 54 ceruziek a 90 zošitov. Chce vytvoriť rovnaké balíčky tak, aby rozdala všetko a balíčkov bolo čo najviac. Autobus A odchádza zo zastávky každých 15 minút, autobus B každých 20 minút. O 7:00 odišli obidva súčasne.',
          steps: [
            { id: 's1', label: 'Koľko balíčkov vytvorí?', kind: 'number', points: 1 },
            { id: 's2', label: 'Koľko ceruziek bude v jednom balíčku?', kind: 'number', points: 1 },
            { id: 's3', label: 'Koľko zošitov bude v jednom balíčku?', kind: 'number', points: 1 },
            { id: 's4', label: 'Za koľko minút od 7:00 odídu obidva autobusy opäť súčasne?', kind: 'number', points: 1 },
          ] },
        { id: 'u5', title: 'Úloha 5: Číselné množiny',
          question: 'Pre každé číslo vyber najmenšiu množinu, do ktorej patrí: N (prirodzené), Z (celé), Q (racionálne) alebo I (iracionálne). Platí N ⊂ Z ⊂ Q, množina I je mimo nich.',
          steps: [
            { id: 's1', label: '−5', kind: 'choice', options: SETS, points: 1 },
            { id: 's2', label: '18/6', kind: 'choice', options: SETS, points: 1 },
            { id: 's3', label: '0,75', kind: 'choice', options: SETS, points: 1 },
            { id: 's4', label: 'π', kind: 'choice', options: SETS, points: 1 },
            { id: 's5', label: '0,666… (šestky sa stále opakujú)', kind: 'choice', options: SETS, points: 1 },
            { id: 's6', label: 'Tvrdenie: „Každé celé číslo je aj racionálne číslo.“', kind: 'choice', options: TRUTH, points: 1 },
          ] },
        { id: 'u6', title: 'Úloha 6: Vlastnosti operácií',
          question: 'V krokoch 1–3 vyber vlastnosť, ktorú rovnosť využíva. V krokoch 4–5 vypočítaj výhodne (využi vlastnosti operácií).',
          steps: [
            { id: 's1', label: '8 · 13 = 13 · 8', kind: 'choice', options: LAWS, points: 1 },
            { id: 's2', label: '(7 + 5) + 3 = 7 + (5 + 3)', kind: 'choice', options: LAWS, points: 1 },
            { id: 's3', label: '5 · (20 + 4) = 5 · 20 + 5 · 4', kind: 'choice', options: LAWS, points: 1 },
            { id: 's4', label: '4 · 37 · 25', kind: 'number', points: 1 },
            { id: 's5', label: '99 · 14', kind: 'number', points: 1 },
          ] },
        { id: 'u7', title: 'Úloha 7: Percentá',
          question: 'Percentá zapíš ako číslo bez znaku %.',
          steps: [
            { id: 's1', label: 'Koľko je 15 % z 240?', kind: 'number', points: 1 },
            { id: 's2', label: '12 % z istého čísla je 18. Aké je to číslo?', kind: 'number', points: 1 },
            { id: 's3', label: 'Koľko percent zo 180 je 45? (odpoveď v %)', kind: 'number', points: 1 },
          ] },
        { id: 'u8', title: 'Úloha 8: Percentá z praxe',
          question: 'Tovar stál pôvodne 250 €. Najprv sa zlacnil o 20 %, potom sa nová cena zvýšila o 10 %. Ceny zapisuj v eurách bez značky €.',
          steps: [
            { id: 's1', label: 'Cena po zľave 20 %', kind: 'number', points: 1 },
            { id: 's2', label: 'Cena po následnom zvýšení o 10 %', kind: 'number', points: 1 },
            { id: 's3', label: 'O koľko eur je konečná cena nižšia ako pôvodná?', kind: 'number', points: 1 },
            { id: 's4', label: 'Kniha po zľave 15 % stojí 51 €. Aká bola jej pôvodná cena?', kind: 'number', points: 1 },
          ] },
        { id: 'u9', title: 'Úloha 9 (bonus)',
          question: 'Využi NSN viacerých čísel.',
          steps: [
            { id: 's1', label: 'NSN – n(4, 6, 9)', kind: 'number', points: 1 },
            { id: 's2', label: 'Najmenšie prirodzené číslo väčšie ako 1, ktoré pri delení každým z čísel 4, 6 a 9 dáva zvyšok 1', kind: 'number', points: 1 },
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
      // DEFS: poradie definície od 0
      u1: { s1: '5', s2: '6', s3: '2', s4: '0', s5: '7', s6: '3', s7: '1' },
      u2: { s1: '0', s2: '1', s3: '1', s4: '0', s5: ['3', '5', '9'], s6: '2' },
      u3: { s1: ['2', '3', '5'], s2: '2', s3: '30', s4: '900', s5: '1' },
      u4: { s1: '18', s2: '3', s3: '5', s4: '60' },
      u5: { s1: '1', s2: '0', s3: '2', s4: '3', s5: '2', s6: '0' },
      u6: { s1: '0', s2: '1', s3: '2', s4: '3700', s5: '1386' },
      u7: { s1: '36', s2: '150', s3: '25' },
      u8: { s1: '200', s2: '220', s3: '30', s4: '60' },
      u9: { s1: '36', s2: '37' },
    },
  },
};
