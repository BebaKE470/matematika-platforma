// Písomka 1. ročník · Čísla, premenné, výrazy · po hodine 32 (hodiny 28–32: deliteľnosť,
// prvočísla a rozklad, NSN a NSD, číselné množiny N, Z, Q, I, R a vlastnosti operácií), skupiny A a B.
//
// Súbor je zámerne MIMO verejných statických súborov: zadania aj kľúč číta len
// api/exam.js a vydá ich iba prihlásenej učiteľke (pozri 1-u02-h023b.js).
// Skupiny A a B majú rovnaké id úloh a krokov, rovnaké `kind` a `points`.
//
// Hodnoty v `key`:
//   kind 'number' → reťazec; kind 'set' → pole reťazcov; kind 'choice' → poradie možnosti od 0.
// Percentá ani odmocniny tu nie sú (percentá prídu až po hodine 32).

// Priraďovačka: pojmy 0–7 + jedna definícia navyše (8). Poradie možností je v A a B rôzne.
const CANON = [
  'číslo, ktoré delí dané číslo bez zvyšku',                                       // 0 deliteľ
  'číslo, ktoré vznikne vynásobením daného čísla prirodzeným číslom',              // 1 násobok
  'prirodzené číslo väčšie ako 1, ktoré má práve dvoch deliteľov: 1 a samo seba',  // 2 prvočíslo
  'prirodzené číslo väčšie ako 1, ktoré má aspoň troch deliteľov',                 // 3 zložené číslo
  'najväčšie číslo, ktorým sú deliteľné obe dané čísla',                           // 4 NSD
  'najmenšie kladné číslo, ktoré je násobkom oboch daných čísel',                  // 5 NSN
  'číslo, ktoré sa dá zapísať zlomkom celých čísel s nenulovým menovateľom',       // 6 racionálne číslo
  'číslo, ktoré sa nedá zapísať zlomkom celých čísel',                             // 7 iracionálne číslo
  'zvyšok po delení dvoch prirodzených čísel',                                     // 8 navyše
];
const pick = perm => perm.map(i => CANON[i]);
const DEFS_A = pick([4, 7, 0, 5, 2, 8, 6, 1, 3]);
const DEFS_B = pick([6, 3, 8, 1, 5, 0, 7, 2, 4]);

const YESNO = ['áno', 'nie'];
const TRUTH = ['pravda', 'nepravda'];
const SETS = ['N', 'Z', 'Q', 'I'];
const LAWS = ['komutatívnosť', 'asociatívnosť', 'distributívnosť'];
const NOTE_SET = 'Každé číslo napíš do osobitného políčka.';
const Q_SETS = 'Pre každé číslo vyber najmenšiu množinu, do ktorej patrí: N (prirodzené), Z (celé), Q (racionálne) alebo I (iracionálne). Platí N ⊂ Z ⊂ Q, množina I je mimo nich.';
const Q_LAWS = 'Pre každú rovnosť vyber vlastnosť operácií, ktorú využíva.';

module.exports = {
  id: '1-u03-h032b',
  title: 'Čísla, premenné, výrazy: deliteľnosť a reálne čísla',
  minutes: 40,
  printStepLabels: true,
  instructions: [
    'Úlohy sú rozdelené na kroky. Pri každej úlohe vyplň všetky kroky. Za každý správny krok získaš body, aj keď neskôr urobíš chybu.',
    'Počítaj na papieri a do aplikácie prepisuj výsledky krokov. Pri úlohách s viacerými číslami píš každé číslo do osobitného políčka.',
    'Odpovede sa ukladajú priebežne. Na konci stlač „Odovzdať“. Bonusová úloha nie je povinná.',
  ],

  groups: {
    A: {
      tasks: [
        { id: 'u1', title: 'Úloha 1: Pojmy a definície',
          question: 'Ku každému pojmu vyber jeho definíciu. Jedna definícia je navyše.',
          steps: [
            { id: 's1', label: 'najväčší spoločný deliteľ (NSD, značka D)', kind: 'choice', options: DEFS_A, points: 1 },
            { id: 's2', label: 'iracionálne číslo', kind: 'choice', options: DEFS_A, points: 1 },
            { id: 's3', label: 'prvočíslo', kind: 'choice', options: DEFS_A, points: 1 },
            { id: 's4', label: 'násobok čísla', kind: 'choice', options: DEFS_A, points: 1 },
            { id: 's5', label: 'najmenší spoločný násobok (NSN, značka n)', kind: 'choice', options: DEFS_A, points: 1 },
            { id: 's6', label: 'deliteľ čísla', kind: 'choice', options: DEFS_A, points: 1 },
            { id: 's7', label: 'racionálne číslo', kind: 'choice', options: DEFS_A, points: 1 },
            { id: 's8', label: 'zložené číslo', kind: 'choice', options: DEFS_A, points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2: Kritériá deliteľnosti',
          question: 'Použi kritériá deliteľnosti, nemusíš deliť. V krokoch 1–4 vyber odpoveď.', onlineNote: NOTE_SET,
          steps: [
            { id: 's1', label: 'Je číslo 2 340 deliteľné číslom 4?', kind: 'choice', options: YESNO, points: 1 },
            { id: 's2', label: 'Je číslo 7 135 deliteľné číslom 6?', kind: 'choice', options: YESNO, points: 1 },
            { id: 's3', label: 'Je číslo 4 572 deliteľné číslom 9?', kind: 'choice', options: YESNO, points: 1 },
            { id: 's4', label: 'Je číslo 6 513 deliteľné číslom 5?', kind: 'choice', options: YESNO, points: 1 },
            { id: 's5', label: 'Ktoré z čísel 2, 3, 4, 5, 6, 9, 10 delia číslo 2 025?', kind: 'set', points: 1 },
            { id: 's6', label: 'Aká číslica patrí na miesto štvorčeka, aby bolo trojciferné číslo 47□ deliteľné 9?', kind: 'number', points: 1 },
          ] },
        { id: 'u3', title: 'Úloha 3: Prvočísla a rozklad',
          question: 'Číslo 360 rozlož na súčin prvočísel (na papieri), potom odpovedz.', onlineNote: NOTE_SET,
          steps: [
            { id: 's1', label: 'Všetky prvočísla väčšie ako 10 a menšie ako 40', kind: 'set', points: 1 },
            { id: 's2', label: 'Ktoré rôzne prvočísla sa vyskytujú v rozklade čísla 360?', kind: 'set', points: 1 },
            { id: 's3', label: 'Koľkokrát sa v rozklade čísla 360 vyskytuje prvočíslo 2?', kind: 'number', points: 1 },
            { id: 's4', label: 'Koľko prvočísel (aj opakujúcich sa) má rozklad čísla 360?', kind: 'number', points: 1 },
            { id: 's5', label: 'Je číslo 91 prvočíslo?', kind: 'choice', options: YESNO, points: 1 },
          ] },
        { id: 'u4', title: 'Úloha 4: NSD a NSN',
          question: 'Sú dané čísla 24 a 36. Použi prvočíselný rozklad alebo vypíš deliteľov a násobky.', onlineNote: NOTE_SET,
          steps: [
            { id: 's1', label: 'NSD – D(24, 36)', kind: 'number', points: 1 },
            { id: 's2', label: 'NSN – n(24, 36)', kind: 'number', points: 1 },
            { id: 's3', label: 'Všetci spoloční delitelia čísel 24 a 36', kind: 'set', points: 1 },
            { id: 's4', label: 'Majú čísla 35 a 18 jediného spoločného deliteľa, číslo 1?', kind: 'choice', options: YESNO, points: 1 },
          ] },
        { id: 'u5', title: 'Úloha 5: Slovná úloha',
          question: 'Učiteľka má 48 zošitov a 72 pier. Chce vytvoriť rovnaké balíčky tak, aby rozdala všetko a balíčkov bolo čo najviac. Linka A odchádza zo zastávky každých 12 minút, linka B každých 18 minút. O 8:00 odišli obe súčasne.',
          steps: [
            { id: 's1', label: 'Koľko balíčkov vytvorí?', kind: 'number', points: 1 },
            { id: 's2', label: 'Koľko zošitov bude v jednom balíčku?', kind: 'number', points: 1 },
            { id: 's3', label: 'Koľko pier bude v jednom balíčku?', kind: 'number', points: 1 },
            { id: 's4', label: 'Za koľko minút od 8:00 odídu obe linky opäť súčasne?', kind: 'number', points: 1 },
            { id: 's5', label: 'Koľkokrát odídu obe linky súčasne po 8:00 do 10:00 vrátane?', kind: 'number', points: 1 },
          ] },
        { id: 'u6', title: 'Úloha 6: Číselné množiny',
          question: Q_SETS,
          steps: [
            { id: 's1', label: '−7', kind: 'choice', options: SETS, points: 1 },
            { id: 's2', label: '12/4', kind: 'choice', options: SETS, points: 1 },
            { id: 's3', label: '0,125', kind: 'choice', options: SETS, points: 1 },
            { id: 's4', label: 'π', kind: 'choice', options: SETS, points: 1 },
            { id: 's5', label: '−6/2', kind: 'choice', options: SETS, points: 1 },
            { id: 's6', label: '0,333… (trojky sa stále opakujú)', kind: 'choice', options: SETS, points: 1 },
            { id: 's7', label: 'Tvrdenie: „Každé celé číslo je aj racionálne číslo.“', kind: 'choice', options: TRUTH, points: 1 },
          ] },
        { id: 'u7', title: 'Úloha 7: Vlastnosti operácií',
          question: 'V krokoch 1–3 vyber vlastnosť. V krokoch 4–5 vypočítaj výhodne (využi vlastnosti operácií).',
          steps: [
            { id: 's1', label: '5 · 17 = 17 · 5', kind: 'choice', options: LAWS, points: 1 },
            { id: 's2', label: '(4 + 9) + 1 = 4 + (9 + 1)', kind: 'choice', options: LAWS, points: 1 },
            { id: 's3', label: '6 · (10 + 3) = 6 · 10 + 6 · 3', kind: 'choice', options: LAWS, points: 1 },
            { id: 's4', label: '25 · 17 · 4', kind: 'number', points: 1 },
            { id: 's5', label: '99 · 12', kind: 'number', points: 1 },
          ] },
        { id: 'u8', title: 'Úloha 8 (bonus)',
          question: 'Využi NSN viacerých čísel.',
          steps: [
            { id: 's1', label: 'Najmenšie prirodzené číslo deliteľné každým z čísel 6, 8 a 10', kind: 'number', points: 1 },
            { id: 's2', label: 'Koľko trojciferných prirodzených čísel je deliteľných každým z čísel 6, 8 a 10?', kind: 'number', points: 1 },
          ] },
      ],
    },

    B: {
      tasks: [
        { id: 'u1', title: 'Úloha 1: Pojmy a definície',
          question: 'Ku každému pojmu vyber jeho definíciu. Jedna definícia je navyše.',
          steps: [
            { id: 's1', label: 'zložené číslo', kind: 'choice', options: DEFS_B, points: 1 },
            { id: 's2', label: 'najmenší spoločný násobok (NSN, značka n)', kind: 'choice', options: DEFS_B, points: 1 },
            { id: 's3', label: 'racionálne číslo', kind: 'choice', options: DEFS_B, points: 1 },
            { id: 's4', label: 'deliteľ čísla', kind: 'choice', options: DEFS_B, points: 1 },
            { id: 's5', label: 'iracionálne číslo', kind: 'choice', options: DEFS_B, points: 1 },
            { id: 's6', label: 'najväčší spoločný deliteľ (NSD, značka D)', kind: 'choice', options: DEFS_B, points: 1 },
            { id: 's7', label: 'násobok čísla', kind: 'choice', options: DEFS_B, points: 1 },
            { id: 's8', label: 'prvočíslo', kind: 'choice', options: DEFS_B, points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2: Kritériá deliteľnosti',
          question: 'Použi kritériá deliteľnosti, nemusíš deliť. V krokoch 1–4 vyber odpoveď.', onlineNote: NOTE_SET,
          steps: [
            { id: 's1', label: 'Je číslo 3 154 deliteľné číslom 4?', kind: 'choice', options: YESNO, points: 1 },
            { id: 's2', label: 'Je číslo 8 214 deliteľné číslom 3?', kind: 'choice', options: YESNO, points: 1 },
            { id: 's3', label: 'Je číslo 7 280 deliteľné číslom 9?', kind: 'choice', options: YESNO, points: 1 },
            { id: 's4', label: 'Je číslo 5 160 deliteľné číslom 10?', kind: 'choice', options: YESNO, points: 1 },
            { id: 's5', label: 'Ktoré z čísel 2, 3, 4, 5, 6, 9, 10 delia číslo 4 230?', kind: 'set', points: 1 },
            { id: 's6', label: 'Aká číslica patrí na miesto štvorčeka, aby bolo trojciferné číslo 58□ deliteľné 9?', kind: 'number', points: 1 },
          ] },
        { id: 'u3', title: 'Úloha 3: Prvočísla a rozklad',
          question: 'Číslo 1 100 rozlož na súčin prvočísel (na papieri), potom odpovedz.', onlineNote: NOTE_SET,
          steps: [
            { id: 's1', label: 'Všetky prvočísla väčšie ako 20 a menšie ako 50', kind: 'set', points: 1 },
            { id: 's2', label: 'Ktoré rôzne prvočísla sa vyskytujú v rozklade čísla 1 100?', kind: 'set', points: 1 },
            { id: 's3', label: 'Koľkokrát sa v rozklade čísla 1 100 vyskytuje prvočíslo 5?', kind: 'number', points: 1 },
            { id: 's4', label: 'Koľko prvočísel (aj opakujúcich sa) má rozklad čísla 1 100?', kind: 'number', points: 1 },
            { id: 's5', label: 'Je číslo 89 prvočíslo?', kind: 'choice', options: YESNO, points: 1 },
          ] },
        { id: 'u4', title: 'Úloha 4: NSD a NSN',
          question: 'Sú dané čísla 30 a 45. Použi prvočíselný rozklad alebo vypíš deliteľov a násobky.', onlineNote: NOTE_SET,
          steps: [
            { id: 's1', label: 'NSD – D(30, 45)', kind: 'number', points: 1 },
            { id: 's2', label: 'NSN – n(30, 45)', kind: 'number', points: 1 },
            { id: 's3', label: 'Všetci spoloční delitelia čísel 30 a 45', kind: 'set', points: 1 },
            { id: 's4', label: 'Majú čísla 28 a 21 jediného spoločného deliteľa, číslo 1?', kind: 'choice', options: YESNO, points: 1 },
          ] },
        { id: 'u5', title: 'Úloha 5: Slovná úloha',
          question: 'Predavač má 60 jabĺk a 84 hrušiek. Chce vytvoriť rovnaké košíky tak, aby rozdal všetko a košíkov bolo čo najviac. Linka A odchádza zo zastávky každých 15 minút, linka B každých 20 minút. O 8:00 odišli obe súčasne.',
          steps: [
            { id: 's1', label: 'Koľko košíkov vytvorí?', kind: 'number', points: 1 },
            { id: 's2', label: 'Koľko jabĺk bude v jednom košíku?', kind: 'number', points: 1 },
            { id: 's3', label: 'Koľko hrušiek bude v jednom košíku?', kind: 'number', points: 1 },
            { id: 's4', label: 'Za koľko minút od 8:00 odídu obe linky opäť súčasne?', kind: 'number', points: 1 },
            { id: 's5', label: 'Koľkokrát odídu obe linky súčasne po 8:00 do 10:30 vrátane?', kind: 'number', points: 1 },
          ] },
        { id: 'u6', title: 'Úloha 6: Číselné množiny',
          question: Q_SETS,
          steps: [
            { id: 's1', label: '−20/4', kind: 'choice', options: SETS, points: 1 },
            { id: 's2', label: '0,8', kind: 'choice', options: SETS, points: 1 },
            { id: 's3', label: '0,12345678910111213… (za sebou zapísané čísla 1, 2, 3, …)', kind: 'choice', options: SETS, points: 1 },
            { id: 's4', label: '21/3', kind: 'choice', options: SETS, points: 1 },
            { id: 's5', label: '0,111… (jednotky sa stále opakujú)', kind: 'choice', options: SETS, points: 1 },
            { id: 's6', label: '−11', kind: 'choice', options: SETS, points: 1 },
            { id: 's7', label: 'Tvrdenie: „Každé racionálne číslo je aj celé číslo.“', kind: 'choice', options: TRUTH, points: 1 },
          ] },
        { id: 'u7', title: 'Úloha 7: Vlastnosti operácií',
          question: 'V krokoch 1–3 vyber vlastnosť. V krokoch 4–5 vypočítaj výhodne (využi vlastnosti operácií).',
          steps: [
            { id: 's1', label: '(5 + 3) · 7 = 5 · 7 + 3 · 7', kind: 'choice', options: LAWS, points: 1 },
            { id: 's2', label: '12 · 5 = 5 · 12', kind: 'choice', options: LAWS, points: 1 },
            { id: 's3', label: '(11 + 4) + 6 = 11 + (4 + 6)', kind: 'choice', options: LAWS, points: 1 },
            { id: 's4', label: '20 · 13 · 5', kind: 'number', points: 1 },
            { id: 's5', label: '98 · 15', kind: 'number', points: 1 },
          ] },
        { id: 'u8', title: 'Úloha 8 (bonus)',
          question: 'Využi NSN viacerých čísel.',
          steps: [
            { id: 's1', label: 'Najmenšie prirodzené číslo deliteľné každým z čísel 4, 6 a 10', kind: 'number', points: 1 },
            { id: 's2', label: 'Koľko trojciferných prirodzených čísel je deliteľných každým z čísel 4, 6 a 10?', kind: 'number', points: 1 },
          ] },
      ],
    },
  },

  bonusTasks: ['u8'],

  reflection: {
    prompt: 'Ako ti išli jednotlivé časti? Označ, nie je to známka.',
    skills: [
      'pojmy a ich definície',
      'kritériá deliteľnosti',
      'prvočísla a prvočíselný rozklad',
      'NSD a NSN, slovná úloha',
      'zaradenie čísel do N, Z, Q, I',
      'vlastnosti operácií a výhodné počítanie',
    ],
  },

  key: {
    A: {
      // DEFS_A: poradie definície od 0
      u1: { s1: '0', s2: '1', s3: '4', s4: '7', s5: '3', s6: '2', s7: '6', s8: '8' },
      u2: { s1: '0', s2: '1', s3: '0', s4: '1', s5: ['3', '5', '9'], s6: '7' },
      u3: { s1: ['11', '13', '17', '19', '23', '29', '31', '37'], s2: ['2', '3', '5'], s3: '3', s4: '6', s5: '1' },
      u4: { s1: '12', s2: '72', s3: ['1', '2', '3', '4', '6', '12'], s4: '0' },
      u5: { s1: '24', s2: '2', s3: '3', s4: '36', s5: '3' },
      u6: { s1: '1', s2: '0', s3: '2', s4: '3', s5: '1', s6: '2', s7: '0' },
      u7: { s1: '0', s2: '1', s3: '2', s4: '1700', s5: '1188' },
      u8: { s1: '120', s2: '8' },
    },
    B: {
      u1: { s1: '1', s2: '4', s3: '0', s4: '5', s5: '6', s6: '8', s7: '3', s8: '7' },
      u2: { s1: '1', s2: '0', s3: '1', s4: '0', s5: ['2', '3', '5', '6', '9', '10'], s6: '5' },
      u3: { s1: ['23', '29', '31', '37', '41', '43', '47'], s2: ['2', '5', '11'], s3: '2', s4: '5', s5: '0' },
      u4: { s1: '15', s2: '90', s3: ['1', '3', '5', '15'], s4: '1' },
      u5: { s1: '12', s2: '5', s3: '7', s4: '60', s5: '2' },
      u6: { s1: '1', s2: '2', s3: '3', s4: '0', s5: '2', s6: '1', s7: '1' },
      u7: { s1: '2', s2: '0', s3: '1', s4: '1300', s5: '1470' },
      u8: { s1: '60', s2: '15' },
    },
  },
};
