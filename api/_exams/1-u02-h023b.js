// Písomka 1. ročník · Množiny · po hodine 23 (po téme Operácie s množinami – doplnok, rozdiel).
//
// Súbor je zámerne MIMO verejných statických súborov: zadania aj kľúč číta len
// api/exam.js a vydá ich iba prihlásenej učiteľke. Žiakom sa z učiteľkinho
// prehliadača pošle verzia bez `key` (MathExam.publicExam v core/exam.js).
//
// Formát je popísaný v docs/AUTHORING.md (sekcia „Písomka“). Skupiny A a B MUSIA mať
// rovnaké id úloh a krokov, rovnaké `kind` a `points` (kontroluje tools/audit.mjs).
//
// Obmedzenie formátu: krok je buď číslo, alebo množina ČÍSEL. Preto sa priraďovačka
// pojmov k definíciám rieši tak, že definície sú očíslované a žiak píše ich číslo,
// a symboly ∈, ∉, ⊆ sa volia číslom (1 = ∈, 2 = ∉, 3 = ⊆).
//
// Tlačená verzia (Word) je v pisomky-na-tlac/ – kľúč tu je s ňou zhodný.

const DEFS_A = [
  '1 = množina všetkých prvkov, o ktorých v úlohe uvažujeme',
  '2 = prvky, ktoré patria do A a nepatria do B',
  '3 = podmienka, ktorú spĺňajú práve prvky množiny a žiadne iné',
  '4 = množina, ktorá nemá žiaden prvok',
  '5 = prvky, ktoré patria do A aj do B súčasne',
  '6 = prvky z U, ktoré nepatria do A',
  '7 = každý prvok množiny A patrí aj do množiny B',
  '8 = počet rôznych prvkov množiny',
  '9 = prvky, ktoré patria do A alebo do B (aspoň do jednej z nich)',
].join('\n');

const DEFS_B = [
  '1 = prvky z U, ktoré nepatria do A',
  '2 = počet rôznych prvkov množiny',
  '3 = množina všetkých prvkov, o ktorých v úlohe uvažujeme',
  '4 = prvky, ktoré patria do A aj do B súčasne',
  '5 = každý prvok množiny A patrí aj do množiny B',
  '6 = prvky, ktoré patria do A alebo do B (aspoň do jednej z nich)',
  '7 = podmienka, ktorú spĺňajú práve prvky množiny a žiadne iné',
  '8 = prvky, ktoré patria do A a nepatria do B',
  '9 = množina, ktorá nemá žiaden prvok',
].join('\n');

const POJMY_A = [
  'a) prienik množín A ∩ B',
  'b) kardinalita množiny',
  'c) prázdna množina',
  'd) doplnok množiny A (A′)',
  'e) podmnožina (A ⊆ B)',
  'f) zjednotenie množín A ∪ B',
  'g) univerzálna množina U',
  'h) rozdiel množín A − B',
].join('\n');

const POJMY_B = [
  'a) zjednotenie množín A ∪ B',
  'b) univerzálna množina U',
  'c) rozdiel množín A − B',
  'd) podmnožina (A ⊆ B)',
  'e) prázdna množina',
  'f) doplnok množiny A (A′)',
  'g) prienik množín A ∩ B',
  'h) kardinalita množiny',
].join('\n');

const NOTE_MATCH = 'Ku každému pojmu a)–h) napíš číslo jeho definície. Jedna definícia je navyše.';
const NOTE_SYMBOL = 'Zapíš číslo: 1 = ∈, 2 = ∉, 3 = ⊆.';
const NOTE_SET = 'Prvky množiny zapíš ako čísla. Pre prázdnu množinu použi tlačidlo „∅ prázdna množina“.';

module.exports = {
  id: '1-u02-h023b',
  title: 'Množiny',
  minutes: 40,
  instructions: [
    'Úlohy sú rozdelené na kroky. Pri každej úlohe vyplň všetky kroky. Za každý správny krok získaš body, aj keď neskôr urobíš chybu.',
    'Počítaj na papieri a do aplikácie prepisuj výsledky krokov. Prvky množín zapisuj ako čísla.',
    'Pri množine, ktorá nemá žiaden prvok, použi tlačidlo „∅ prázdna množina“.',
    'Odpovede sa ukladajú priebežne. Na konci stlač „Odovzdať“. Bonusová úloha nie je povinná.',
  ],

  groups: {
    A: {
      tasks: [
        { id: 'u1', title: 'Úloha 1: Pojmy a definície',
          question: 'Pojmy:\n' + POJMY_A + '\n\nDefinície:\n' + DEFS_A, note: NOTE_MATCH,
          steps: [
            { id: 's1', label: 'Pojem a) prienik množín A ∩ B: číslo definície', kind: 'number', points: 1 },
            { id: 's2', label: 'Pojem b) kardinalita množiny: číslo definície', kind: 'number', points: 1 },
            { id: 's3', label: 'Pojem c) prázdna množina: číslo definície', kind: 'number', points: 1 },
            { id: 's4', label: 'Pojem d) doplnok množiny A (A′): číslo definície', kind: 'number', points: 1 },
            { id: 's5', label: 'Pojem e) podmnožina (A ⊆ B): číslo definície', kind: 'number', points: 1 },
            { id: 's6', label: 'Pojem f) zjednotenie množín A ∪ B: číslo definície', kind: 'number', points: 1 },
            { id: 's7', label: 'Pojem g) univerzálna množina U: číslo definície', kind: 'number', points: 1 },
            { id: 's8', label: 'Pojem h) rozdiel množín A − B: číslo definície', kind: 'number', points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2: Prvky a podmnožiny',
          question: 'Je dané M = {2, 4, 6, 8}. Doplň medzi ľavú stranu a množinu M správny symbol.', note: NOTE_SYMBOL,
          steps: [
            { id: 's1', label: '4 … M', kind: 'number', points: 1 },
            { id: 's2', label: '{2, 6} … M', kind: 'number', points: 1 },
            { id: 's3', label: '5 … M', kind: 'number', points: 1 },
            { id: 's4', label: '∅ … M', kind: 'number', points: 1 },
            { id: 's5', label: 'Tvrdenie: „Množiny {1, 2, 3} a {3, 2, 1} sú rôzne množiny.“ (1 = pravda, 2 = nepravda)', kind: 'number', points: 1 },
          ] },
        { id: 'u3', title: 'Úloha 3: Zápis množín',
          question: 'Je dané U = {−4, −3, −2, −1, 0, 1, 2, 3, 4}. Zapíš vymenovaním prvkov množiny a)–c). V časti d) je U = {1, 2, 3, …, 12}.', note: NOTE_SET,
          steps: [
            { id: 's1', label: 'a) A = {x ∈ U; −2 < x < 2}', kind: 'set', points: 1 },
            { id: 's2', label: 'b) B = {x ∈ U; x je párne číslo a x > 0}', kind: 'set', points: 1 },
            { id: 's3', label: 'c) C = {x ∈ U; x < −5}', kind: 'set', points: 1 },
            { id: 's4', label: 'd) prvky množiny D = {x ∈ U; x je násobok čísla 5}', kind: 'set', points: 1 },
            { id: 's5', label: 'd) kardinalita |D|', kind: 'number', points: 1 },
          ] },
        { id: 'u4', title: 'Úloha 4: Kardinalita a podmnožiny',
          question: 'Množina M = {1, 2, 3}. Odpovedz na otázky o jej podmnožinách (podmnožiny si môžeš vypísať na papier).',
          steps: [
            { id: 's1', label: 'Koľko podmnožín má množina M (vrátane ∅ aj M)?', kind: 'number', points: 1 },
            { id: 's2', label: 'Koľko z nich má presne dva prvky?', kind: 'number', points: 1 },
            { id: 's3', label: 'Koľko podmnožín má päťprvková množina?', kind: 'number', points: 1 },
            { id: 's4', label: 'Kardinalita |K| množiny K = {1, 2, 2, 3, 3, 3}', kind: 'number', points: 1 },
          ] },
        { id: 'u5', title: 'Úloha 5: Operácie s množinami',
          question: 'Je dané U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, A = {2, 3, 5, 7}, B = {1, 3, 5, 7, 9}.', note: NOTE_SET,
          steps: [
            { id: 's1', label: 'A ∪ B', kind: 'set', points: 1 },
            { id: 's2', label: 'A ∩ B', kind: 'set', points: 1 },
            { id: 's3', label: 'A − B', kind: 'set', points: 1 },
            { id: 's4', label: 'B − A', kind: 'set', points: 1 },
            { id: 's5', label: 'A′ (doplnok A v U)', kind: 'set', points: 1 },
          ] },
        { id: 'u6', title: 'Úloha 6: Slovná úloha',
          question: 'V triede je 30 žiakov. Futbalový krúžok navštevuje 14 žiakov, volejbalový 12 žiakov. 6 žiakov nenavštevuje ani jeden z týchto krúžkov.',
          steps: [
            { id: 's1', label: 'Koľko žiakov navštevuje aspoň jeden z týchto dvoch krúžkov?', kind: 'number', points: 1 },
            { id: 's2', label: 'Koľko žiakov navštevuje obidva krúžky?', kind: 'number', points: 1 },
            { id: 's3', label: 'Koľko žiakov navštevuje iba futbalový krúžok?', kind: 'number', points: 1 },
          ] },
        { id: 'u7', title: 'Úloha 7 (bonus)',
          question: 'Je dané U = {1, 2, 3, 4, 5, 6}, A = {1, 2, 3}, B = {3, 4}. Vypočítaj osobitne obe strany a porovnaj ich.', note: NOTE_SET,
          steps: [
            { id: 's1', label: '(A ∪ B)′', kind: 'set', points: 1 },
            { id: 's2', label: 'A′ ∩ B′', kind: 'set', points: 1 },
          ] },
      ],
    },

    B: {
      tasks: [
        { id: 'u1', title: 'Úloha 1: Pojmy a definície',
          question: 'Pojmy:\n' + POJMY_B + '\n\nDefinície:\n' + DEFS_B, note: NOTE_MATCH,
          steps: [
            { id: 's1', label: 'Pojem a) zjednotenie množín A ∪ B: číslo definície', kind: 'number', points: 1 },
            { id: 's2', label: 'Pojem b) univerzálna množina U: číslo definície', kind: 'number', points: 1 },
            { id: 's3', label: 'Pojem c) rozdiel množín A − B: číslo definície', kind: 'number', points: 1 },
            { id: 's4', label: 'Pojem d) podmnožina (A ⊆ B): číslo definície', kind: 'number', points: 1 },
            { id: 's5', label: 'Pojem e) prázdna množina: číslo definície', kind: 'number', points: 1 },
            { id: 's6', label: 'Pojem f) doplnok množiny A (A′): číslo definície', kind: 'number', points: 1 },
            { id: 's7', label: 'Pojem g) prienik množín A ∩ B: číslo definície', kind: 'number', points: 1 },
            { id: 's8', label: 'Pojem h) kardinalita množiny: číslo definície', kind: 'number', points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2: Prvky a podmnožiny',
          question: 'Je dané M = {1, 3, 5, 7}. Doplň medzi ľavú stranu a množinu M správny symbol.', note: NOTE_SYMBOL,
          steps: [
            { id: 's1', label: '∅ … M', kind: 'number', points: 1 },
            { id: 's2', label: '4 … M', kind: 'number', points: 1 },
            { id: 's3', label: '3 … M', kind: 'number', points: 1 },
            { id: 's4', label: '{1, 7} … M', kind: 'number', points: 1 },
            { id: 's5', label: 'Tvrdenie: „Každá množina je podmnožinou samej seba.“ (1 = pravda, 2 = nepravda)', kind: 'number', points: 1 },
          ] },
        { id: 'u3', title: 'Úloha 3: Zápis množín',
          question: 'Je dané U = {−4, −3, −2, −1, 0, 1, 2, 3, 4}. Zapíš vymenovaním prvkov množiny a)–c). V časti d) je U = {1, 2, 3, …, 12}.', note: NOTE_SET,
          steps: [
            { id: 's1', label: 'a) A = {x ∈ U; −3 < x < 1}', kind: 'set', points: 1 },
            { id: 's2', label: 'b) B = {x ∈ U; x je nepárne číslo a x > 0}', kind: 'set', points: 1 },
            { id: 's3', label: 'c) C = {x ∈ U; x > 6}', kind: 'set', points: 1 },
            { id: 's4', label: 'd) prvky množiny D = {x ∈ U; x je násobok čísla 4}', kind: 'set', points: 1 },
            { id: 's5', label: 'd) kardinalita |D|', kind: 'number', points: 1 },
          ] },
        { id: 'u4', title: 'Úloha 4: Kardinalita a podmnožiny',
          question: 'Množina M = {2, 4, 6}. Odpovedz na otázky o jej podmnožinách (podmnožiny si môžeš vypísať na papier).',
          steps: [
            { id: 's1', label: 'Koľko podmnožín má množina M (vrátane ∅ aj M)?', kind: 'number', points: 1 },
            { id: 's2', label: 'Koľko z nich má presne dva prvky?', kind: 'number', points: 1 },
            { id: 's3', label: 'Koľko podmnožín má šesťprvková množina?', kind: 'number', points: 1 },
            { id: 's4', label: 'Kardinalita |K| množiny K = {4, 4, 5, 5, 6, 6, 6, 7}', kind: 'number', points: 1 },
          ] },
        { id: 'u5', title: 'Úloha 5: Operácie s množinami',
          question: 'Je dané U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, A = {1, 2, 4, 8}, B = {2, 4, 6, 8, 10}.', note: NOTE_SET,
          steps: [
            { id: 's1', label: 'A ∪ B', kind: 'set', points: 1 },
            { id: 's2', label: 'A ∩ B', kind: 'set', points: 1 },
            { id: 's3', label: 'A − B', kind: 'set', points: 1 },
            { id: 's4', label: 'B − A', kind: 'set', points: 1 },
            { id: 's5', label: 'A′ (doplnok A v U)', kind: 'set', points: 1 },
          ] },
        { id: 'u6', title: 'Úloha 6: Slovná úloha',
          question: 'V triede je 28 žiakov. Šachový krúžok navštevuje 13 žiakov, hudobný 11 žiakov. 7 žiakov nenavštevuje ani jeden z týchto krúžkov.',
          steps: [
            { id: 's1', label: 'Koľko žiakov navštevuje aspoň jeden z týchto dvoch krúžkov?', kind: 'number', points: 1 },
            { id: 's2', label: 'Koľko žiakov navštevuje obidva krúžky?', kind: 'number', points: 1 },
            { id: 's3', label: 'Koľko žiakov navštevuje iba šachový krúžok?', kind: 'number', points: 1 },
          ] },
        { id: 'u7', title: 'Úloha 7 (bonus)',
          question: 'Je dané U = {1, 2, 3, 4, 5, 6}, A = {2, 4}, B = {4, 5, 6}. Vypočítaj osobitne obe strany a porovnaj ich.', note: NOTE_SET,
          steps: [
            { id: 's1', label: '(A ∪ B)′', kind: 'set', points: 1 },
            { id: 's2', label: 'A′ ∩ B′', kind: 'set', points: 1 },
          ] },
      ],
    },
  },

  bonusTasks: ['u7'],

  // Nepovinná sebareflexia po odovzdaní (informácia pre učiteľku, nie známka).
  reflection: {
    prompt: 'Ako ti išli jednotlivé časti? Označ, nie je to známka.',
    skills: [
      'pojmy a ich definície',
      'prvok, podmnožina, symboly ∈ ∉ ⊆',
      'zápis množiny charakteristickou vlastnosťou',
      'kardinalita a počet podmnožín',
      'zjednotenie, prienik, rozdiel, doplnok',
      'slovná úloha s dvoma množinami',
    ],
  },

  key: {
    A: {
      u1: { s1: '5', s2: '8', s3: '4', s4: '6', s5: '7', s6: '9', s7: '1', s8: '2' },
      u2: { s1: '1', s2: '3', s3: '2', s4: '3', s5: '2' },               // ∈, ⊆, ∉, ⊆; tvrdenie nepravdivé
      u3: { s1: ['-1', '0', '1'], s2: ['2', '4'], s3: [], s4: ['5', '10'], s5: '2' },
      u4: { s1: '8', s2: '3', s3: '32', s4: '3' },
      u5: { s1: ['1', '2', '3', '5', '7', '9'], s2: ['3', '5', '7'], s3: ['2'], s4: ['1', '9'], s5: ['1', '4', '6', '8', '9', '10'] },
      u6: { s1: '24', s2: '2', s3: '12' },                                // 30−6; 14+12−24; 14−2
      u7: { s1: ['5', '6'], s2: ['5', '6'] },                             // (A∪B)′ = {1,2,3,4}′
    },
    B: {
      u1: { s1: '6', s2: '3', s3: '8', s4: '5', s5: '9', s6: '1', s7: '4', s8: '2' },
      u2: { s1: '3', s2: '2', s3: '1', s4: '3', s5: '1' },               // ⊆, ∉, ∈, ⊆; tvrdenie pravdivé
      u3: { s1: ['-2', '-1', '0'], s2: ['1', '3'], s3: [], s4: ['4', '8', '12'], s5: '3' },
      u4: { s1: '8', s2: '3', s3: '64', s4: '4' },
      u5: { s1: ['1', '2', '4', '6', '8', '10'], s2: ['2', '4', '8'], s3: ['1'], s4: ['6', '10'], s5: ['3', '5', '6', '7', '9', '10'] },
      u6: { s1: '21', s2: '3', s3: '10' },                                // 28−7; 13+11−21; 13−3
      u7: { s1: ['1', '3'], s2: ['1', '3'] },                             // (A∪B)′ = {2,4,5,6}′
    },
  },
};
