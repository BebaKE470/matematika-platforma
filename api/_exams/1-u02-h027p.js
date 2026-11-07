// Príprava na písomku 1. ročník · Množiny · celý tematický celok (hodiny 16–26).
//
// Samostatná písomka s JEDNOU skupinou (bez delenia na A a B). Rovnaký formát ako
// ostrá písomka z množín (1-u02-h023b), ale pokrýva celý celok vrátane Vennových
// diagramov, kombinovaných operácií a aplikačných úloh. Spúšťa sa osobitne zo záznamu
// 1-u02-h027p v registri; iné písomky nijako neovplyvňuje.
//
// Súbor je zámerne MIMO verejných statických súborov (pozri 1-u02-h023b.js).
//
// Hodnoty v `key`:
//   kind 'number' → reťazec; kind 'set' → pole reťazcov (prázdne pole [] = ∅);
//   kind 'choice' → poradie správnej možnosti od 0.

// Priraďovačka: jedna definícia (index 7) je navyše.
const DEFS = [
  'prvky, ktoré patria do A a nepatria do B',                       // 0 rozdiel
  'počet rôznych prvkov množiny',                                    // 1 kardinalita
  'prvky z U, ktoré nepatria do A',                                  // 2 doplnok
  'množina, ktorá nemá žiaden prvok',                                // 3 prázdna množina
  'každý prvok množiny A patrí aj do množiny B',                     // 4 podmnožina
  'prvky, ktoré patria do A alebo do B (aspoň do jednej z nich)',    // 5 zjednotenie
  'prvky, ktoré patria do A aj do B súčasne',                        // 6 prienik
  'množina všetkých prvkov, o ktorých v úlohe uvažujeme',            // 7 navyše
];

const SYMBOLS = ['∈', '∉', '⊆'];
const TRUTH = ['pravda', 'nepravda'];
const NOTE_SET = 'Prvky množiny zapíš ako čísla. Pre prázdnu množinu použi tlačidlo „∅ prázdna množina“.';

module.exports = {
  id: '1-u02-h027p',
  title: 'Príprava na písomku: Množiny',
  minutes: 45,
  instructions: [
    'Toto je príprava na písomku, nie ostrá písomka. Úlohy pokrývajú celý tematický celok Množiny.',
    'Úlohy sú rozdelené na kroky. Pri každej úlohe vyplň všetky kroky. Za každý správny krok získaš body, aj keď neskôr urobíš chybu.',
    'Počítaj na papieri a do aplikácie prepisuj výsledky krokov. Prvky množín zapisuj ako čísla.',
    'Pri množine, ktorá nemá žiaden prvok, použi tlačidlo „∅ prázdna množina“.',
    'Odpovede sa ukladajú priebežne. Na konci stlač „Odovzdať“. Bonusová úloha nie je povinná.',
  ],

  groups: {
    A: {
      tasks: [
        { id: 'u1', title: 'Úloha 1: Pojmy a definície',
          question: 'Ku každému pojmu vyber jeho definíciu. Jedna definícia je navyše.',
          steps: [
            { id: 's1', label: 'prienik množín A ∩ B', kind: 'choice', options: DEFS, points: 1 },
            { id: 's2', label: 'kardinalita množiny', kind: 'choice', options: DEFS, points: 1 },
            { id: 's3', label: 'doplnok množiny A (A′)', kind: 'choice', options: DEFS, points: 1 },
            { id: 's4', label: 'rozdiel množín A − B', kind: 'choice', options: DEFS, points: 1 },
            { id: 's5', label: 'prázdna množina', kind: 'choice', options: DEFS, points: 1 },
            { id: 's6', label: 'zjednotenie množín A ∪ B', kind: 'choice', options: DEFS, points: 1 },
            { id: 's7', label: 'podmnožina (A ⊆ B)', kind: 'choice', options: DEFS, points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2: Prvky a podmnožiny',
          question: 'Je dané M = {1, 3, 5, 7, 9}. Doplň medzi ľavú stranu a množinu M správny symbol. V poslednom kroku vyber, či je tvrdenie pravdivé.',
          steps: [
            { id: 's1', label: '5 … M', kind: 'choice', options: SYMBOLS, points: 1 },
            { id: 's2', label: '{3, 9} … M', kind: 'choice', options: SYMBOLS, points: 1 },
            { id: 's3', label: '6 … M', kind: 'choice', options: SYMBOLS, points: 1 },
            { id: 's4', label: '∅ … M', kind: 'choice', options: SYMBOLS, points: 1 },
            { id: 's5', label: 'Tvrdenie: „Číslo 3 je podmnožinou množiny M.“', kind: 'choice', options: TRUTH, points: 1 },
          ] },
        { id: 'u3', title: 'Úloha 3: Zápis množín',
          question: 'Je dané U = {1, 2, 3, …, 15}. Zapíš vymenovaním prvkov množiny a)–c). V časti d) potom určuj počet prvkov.', note: NOTE_SET,
          steps: [
            { id: 's1', label: 'a) A = {x ∈ U; x je násobok čísla 3}', kind: 'set', points: 1 },
            { id: 's2', label: 'b) B = {x ∈ U; x je prvočíslo a x < 10}', kind: 'set', points: 1 },
            { id: 's3', label: 'c) C = {x ∈ U; x > 15}', kind: 'set', points: 1 },
            { id: 's4', label: 'd) prvky množiny D = {x ∈ U; 10 < x ≤ 13}', kind: 'set', points: 1 },
            { id: 's5', label: 'd) kardinalita |D|', kind: 'number', points: 1 },
          ] },
        { id: 'u4', title: 'Úloha 4: Kardinalita a podmnožiny',
          question: 'Množina M = {2, 4, 6, 8}. Odpovedz na otázky o jej podmnožinách (podmnožiny si môžeš vypísať na papier).',
          steps: [
            { id: 's1', label: 'Koľko podmnožín má množina M (vrátane ∅ aj M)?', kind: 'number', points: 1 },
            { id: 's2', label: 'Koľko z nich má presne tri prvky?', kind: 'number', points: 1 },
            { id: 's3', label: 'Koľko podmnožín má šesťprvková množina?', kind: 'number', points: 1 },
            { id: 's4', label: 'Kardinalita |K| množiny K = {1, 1, 2, 3, 3, 5}', kind: 'number', points: 1 },
          ] },
        { id: 'u5', title: 'Úloha 5: Operácie s množinami',
          question: 'Je dané U = {1, 2, 3, …, 12}, A = {2, 4, 6, 8, 10, 12}, B = {3, 6, 9, 12}.', note: NOTE_SET,
          steps: [
            { id: 's1', label: 'A ∪ B', kind: 'set', points: 1 },
            { id: 's2', label: 'A ∩ B', kind: 'set', points: 1 },
            { id: 's3', label: 'A − B', kind: 'set', points: 1 },
            { id: 's4', label: 'B − A', kind: 'set', points: 1 },
            { id: 's5', label: 'A′ (doplnok A v U)', kind: 'set', points: 1 },
          ] },
        { id: 'u6', title: 'Úloha 6: Vennov diagram',
          question: 'Vo Vennovom diagrame množín A a B v univerzálnej množine U je v oblasti „iba A“ 5 prvkov, v oblasti „A aj B“ (prienik) 3 prvky, v oblasti „iba B“ 4 prvky a mimo oboch množín 6 prvkov.',
          steps: [
            { id: 's1', label: 'Počet prvkov množiny A, |A|', kind: 'number', points: 1 },
            { id: 's2', label: 'Počet prvkov zjednotenia, |A ∪ B|', kind: 'number', points: 1 },
            { id: 's3', label: 'Počet prvkov rozdielu, |B − A|', kind: 'number', points: 1 },
            { id: 's4', label: 'Počet prvkov doplnku, |A′|', kind: 'number', points: 1 },
          ] },
        { id: 'u7', title: 'Úloha 7: Kombinované operácie',
          question: 'Je dané U = {1, 2, 3, …, 10}, A = {1, 2, 3, 4, 5, 6}, B = {4, 5, 6, 7, 8}. Najprv vyhodnoť zátvorku, až potom celý výraz.', note: NOTE_SET,
          steps: [
            { id: 's1', label: '(A ∩ B)′', kind: 'set', points: 1 },
            { id: 's2', label: '(A ∪ B) − (A ∩ B)', kind: 'set', points: 2 },
            { id: 's3', label: 'A′ ∩ B', kind: 'set', points: 1 },
            { id: 's4', label: '(A − B)′', kind: 'set', points: 2 },
          ] },
        { id: 'u8', title: 'Úloha 8: Aplikačná úloha',
          question: 'V triede je 32 žiakov. Šach hrá 15 žiakov, basketbal 17 žiakov a obidva športy hrá 7 žiakov.',
          steps: [
            { id: 's1', label: 'Koľko žiakov hrá aspoň jeden z týchto dvoch športov?', kind: 'number', points: 1 },
            { id: 's2', label: 'Koľko žiakov nehrá ani jeden z nich?', kind: 'number', points: 1 },
            { id: 's3', label: 'Koľko žiakov hrá iba šach?', kind: 'number', points: 1 },
            { id: 's4', label: 'Koľko žiakov hrá práve jeden z týchto dvoch športov?', kind: 'number', points: 1 },
          ] },
        { id: 'u9', title: 'Úloha 9 (bonus)',
          question: 'Pre množiny A a B platí |A| = 12, |A ∪ B| = 20 a |A ∩ B| = 5. Použi vzorec |A ∪ B| = |A| + |B| − |A ∩ B|.',
          steps: [
            { id: 's1', label: 'Počet prvkov množiny B, |B|', kind: 'number', points: 1 },
            { id: 's2', label: 'Počet prvkov rozdielu, |B − A|', kind: 'number', points: 1 },
            { id: 's3', label: 'Počet prvkov rozdielu, |A − B|', kind: 'number', points: 1 },
          ] },
      ],
    },
  },

  bonusTasks: ['u9'],

  reflection: {
    prompt: 'Ako ti išli jednotlivé časti? Označ, nie je to známka.',
    skills: [
      'pojmy a ich definície',
      'prvok, podmnožina, symboly ∈ ∉ ⊆',
      'zápis množiny charakteristickou vlastnosťou',
      'kardinalita a počet podmnožín',
      'zjednotenie, prienik, rozdiel, doplnok',
      'Vennov diagram a počty prvkov oblastí',
      'kombinované operácie so zátvorkami',
      'aplikačná úloha so vzorcom |A ∪ B|',
    ],
  },

  key: {
    A: {
      // DEFS: 0 rozdiel, 1 kardinalita, 2 doplnok, 3 prázdna, 4 podmnožina, 5 zjednotenie, 6 prienik
      u1: { s1: '6', s2: '1', s3: '2', s4: '0', s5: '3', s6: '5', s7: '4' },
      u2: { s1: '0', s2: '2', s3: '1', s4: '2', s5: '1' },              // ∈, ⊆, ∉, ⊆; „3 je podmnožina“ nepravda
      u3: { s1: ['3', '6', '9', '12', '15'], s2: ['2', '3', '5', '7'], s3: [], s4: ['11', '12', '13'], s5: '3' },
      u4: { s1: '16', s2: '4', s3: '64', s4: '4' },                      // 2^4; C(4,3)=4; 2^6; {1,2,3,5}
      u5: { s1: ['2', '3', '4', '6', '8', '9', '10', '12'], s2: ['6', '12'], s3: ['2', '4', '8', '10'], s4: ['3', '9'], s5: ['1', '3', '5', '7', '9', '11'] },
      u6: { s1: '8', s2: '12', s3: '4', s4: '10' },                      // 5+3; 5+3+4; iba B; 4+6
      u7: { s1: ['1', '2', '3', '7', '8', '9', '10'], s2: ['1', '2', '3', '7', '8'], s3: ['7', '8'], s4: ['4', '5', '6', '7', '8', '9', '10'] },
      u8: { s1: '25', s2: '7', s3: '8', s4: '18' },                      // 15+17−7; 32−25; 15−7; 25−7
      u9: { s1: '13', s2: '8', s3: '7' },                                // 20−12+5; 13−5; 12−5
    },
  },
};
