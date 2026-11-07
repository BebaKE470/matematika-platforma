// Písomka 1. ročník · Množiny · celý tematický celok (hodiny 16–26), skupiny A a B.
//
// Kompletná ostrá písomka: pojmy, prvky a podmnožiny, charakteristická vlastnosť,
// kardinalita, operácie, Vennov diagram, kombinované operácie, aplikačná úloha a bonus.
// Rovnaká stavba ako príprava 1-u02-h027p, ale iné zadania (príprava a písomka sa
// nezhodujú). Skupiny A a B majú rovnaké id úloh a krokov, rovnaké `kind` a `points`
// (kontroluje tools/audit.mjs). Starší záznam 1-u02-h023b (písomka po hodine 23, ešte
// bez Vennových diagramov a aplikačných úloh) ostáva nezmenený.
//
// Súbor je zámerne MIMO verejných statických súborov (pozri 1-u02-h023b.js).
//
// Hodnoty v `key`:
//   kind 'number' → reťazec; kind 'set' → pole reťazcov (prázdne pole [] = ∅);
//   kind 'choice' → poradie správnej možnosti od 0.

// Priraďovačka: jedna definícia je navyše (v A index 7, v B index 3).
const DEFS_A = [
  'prvky z U, ktoré nepatria do A',                                  // 0 doplnok
  'prvky, ktoré patria do A aj do B súčasne',                        // 1 prienik
  'množina, ktorá nemá žiaden prvok',                                // 2 prázdna množina
  'počet rôznych prvkov množiny',                                    // 3 kardinalita
  'prvky, ktoré patria do A alebo do B (aspoň do jednej z nich)',    // 4 zjednotenie
  'každý prvok množiny A patrí aj do množiny B',                     // 5 podmnožina
  'prvky, ktoré patria do A a nepatria do B',                        // 6 rozdiel
  'množina všetkých prvkov, o ktorých v úlohe uvažujeme',            // 7 navyše
];

const DEFS_B = [
  'počet rôznych prvkov množiny',                                    // 0 kardinalita
  'prvky, ktoré patria do A a nepatria do B',                        // 1 rozdiel
  'prvky z U, ktoré nepatria do A',                                  // 2 doplnok
  'množina všetkých prvkov, o ktorých v úlohe uvažujeme',            // 3 navyše
  'každý prvok množiny A patrí aj do množiny B',                     // 4 podmnožina
  'prvky, ktoré patria do A aj do B súčasne',                        // 5 prienik
  'prvky, ktoré patria do A alebo do B (aspoň do jednej z nich)',    // 6 zjednotenie
  'množina, ktorá nemá žiaden prvok',                                // 7 prázdna množina
];

const SYMBOLS = ['∈', '∉', '⊆'];
const TRUTH = ['pravda', 'nepravda'];
const NOTE_SET = 'Prvky množiny zapíš ako čísla. Pre prázdnu množinu použi tlačidlo „∅ prázdna množina“.';

module.exports = {
  id: '1-u02-h027b',
  title: 'Množiny',
  minutes: 45,
  // Pri tlači sa zobrazia aj názvy krokov (sú to podúlohy: výrazy, otázky), nielen zadanie úlohy.
  printStepLabels: true,
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
          question: 'Ku každému pojmu vyber jeho definíciu. Jedna definícia je navyše.',
          steps: [
            { id: 's1', label: 'prienik množín A ∩ B', kind: 'choice', options: DEFS_A, points: 1 },
            { id: 's2', label: 'kardinalita množiny', kind: 'choice', options: DEFS_A, points: 1 },
            { id: 's3', label: 'doplnok množiny A (A′)', kind: 'choice', options: DEFS_A, points: 1 },
            { id: 's4', label: 'rozdiel množín A − B', kind: 'choice', options: DEFS_A, points: 1 },
            { id: 's5', label: 'prázdna množina', kind: 'choice', options: DEFS_A, points: 1 },
            { id: 's6', label: 'zjednotenie množín A ∪ B', kind: 'choice', options: DEFS_A, points: 1 },
            { id: 's7', label: 'podmnožina (A ⊆ B)', kind: 'choice', options: DEFS_A, points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2: Prvky a podmnožiny',
          question: 'Je dané M = {2, 4, 6, 8, 10}. Doplň medzi ľavú stranu a množinu M správny symbol. V poslednom kroku vyber, či je tvrdenie pravdivé.',
          steps: [
            { id: 's1', label: '5 … M', kind: 'choice', options: SYMBOLS, points: 1 },
            { id: 's2', label: '{4, 10} … M', kind: 'choice', options: SYMBOLS, points: 1 },
            { id: 's3', label: '8 … M', kind: 'choice', options: SYMBOLS, points: 1 },
            { id: 's4', label: '∅ … M', kind: 'choice', options: SYMBOLS, points: 1 },
            { id: 's5', label: 'Tvrdenie: „Číslo 6 je podmnožinou množiny M.“', kind: 'choice', options: TRUTH, points: 1 },
          ] },
        { id: 'u3', title: 'Úloha 3: Zápis množín',
          question: 'Je dané U = {1, 2, 3, …, 20}. Zapíš vymenovaním prvkov množiny a)–c). V časti d) potom určuj počet prvkov.', onlineNote: NOTE_SET,
          steps: [
            { id: 's1', label: 'a) A = {x ∈ U; x je násobok čísla 4}', kind: 'set', points: 1 },
            { id: 's2', label: 'b) B = {x ∈ U; x je párne číslo a x ≥ 15}', kind: 'set', points: 1 },
            { id: 's3', label: 'c) C = {x ∈ U; x < 1}', kind: 'set', points: 1 },
            { id: 's4', label: 'd) prvky množiny D = {x ∈ U; 12 ≤ x ≤ 15}', kind: 'set', points: 1 },
            { id: 's5', label: 'd) kardinalita |D|', kind: 'number', points: 1 },
          ] },
        { id: 'u4', title: 'Úloha 4: Kardinalita a podmnožiny',
          question: 'Množina M = {1, 3, 5, 7, 9}. Odpovedz na otázky o jej podmnožinách (podmnožiny si môžeš vypísať na papier).',
          steps: [
            { id: 's1', label: 'Koľko podmnožín má množina M (vrátane ∅ aj M)?', kind: 'number', points: 1 },
            { id: 's2', label: 'Koľko z nich má presne štyri prvky?', kind: 'number', points: 1 },
            { id: 's3', label: 'Koľko podmnožín má sedemprvková množina?', kind: 'number', points: 1 },
            { id: 's4', label: 'Kardinalita |K| množiny K = {2, 2, 4, 4, 4, 6, 8, 8}', kind: 'number', points: 1 },
          ] },
        { id: 'u5', title: 'Úloha 5: Operácie s množinami',
          question: 'Je dané U = {1, 2, 3, …, 12}, A = {1, 3, 5, 7, 9, 11}, B = {3, 6, 9, 12}.', onlineNote: NOTE_SET,
          steps: [
            { id: 's1', label: 'A ∪ B', kind: 'set', points: 1 },
            { id: 's2', label: 'A ∩ B', kind: 'set', points: 1 },
            { id: 's3', label: 'A − B', kind: 'set', points: 1 },
            { id: 's4', label: 'B − A', kind: 'set', points: 1 },
            { id: 's5', label: 'A′ (doplnok A v U)', kind: 'set', points: 1 },
          ] },
        { id: 'u6', title: 'Úloha 6: Vennov diagram',
          question: 'Vo Vennovom diagrame množín A a B v univerzálnej množine U je v oblasti „iba A“ 6 prvkov, v oblasti „A aj B“ (prienik) 2 prvky, v oblasti „iba B“ 5 prvkov a mimo oboch množín 7 prvkov.',
          steps: [
            { id: 's1', label: 'Počet prvkov množiny A, |A|', kind: 'number', points: 1 },
            { id: 's2', label: 'Počet prvkov zjednotenia, |A ∪ B|', kind: 'number', points: 1 },
            { id: 's3', label: 'Počet prvkov rozdielu, |B − A|', kind: 'number', points: 1 },
            { id: 's4', label: 'Počet prvkov doplnku, |A′|', kind: 'number', points: 1 },
          ] },
        { id: 'u7', title: 'Úloha 7: Kombinované operácie',
          question: 'Je dané U = {1, 2, 3, …, 10}, A = {2, 3, 4, 5, 6, 7}, B = {1, 2, 3, 8, 9}. Najprv vyhodnoť zátvorku, až potom celý výraz.', onlineNote: NOTE_SET,
          steps: [
            { id: 's1', label: '(A ∩ B)′', kind: 'set', points: 1 },
            { id: 's2', label: '(A ∪ B) − (A ∩ B)', kind: 'set', points: 2 },
            { id: 's3', label: 'A′ ∩ B', kind: 'set', points: 1 },
            { id: 's4', label: '(A − B)′', kind: 'set', points: 2 },
          ] },
        { id: 'u8', title: 'Úloha 8: Aplikačná úloha',
          question: 'V triede je 30 žiakov. Angličtinu sa učí 18 žiakov, nemčinu 14 žiakov a obidva jazyky 6 žiakov.',
          steps: [
            { id: 's1', label: 'Koľko žiakov sa učí aspoň jeden z týchto dvoch jazykov?', kind: 'number', points: 1 },
            { id: 's2', label: 'Koľko žiakov sa neučí ani jeden z nich?', kind: 'number', points: 1 },
            { id: 's3', label: 'Koľko žiakov sa učí iba angličtinu?', kind: 'number', points: 1 },
            { id: 's4', label: 'Koľko žiakov sa učí práve jeden z týchto dvoch jazykov?', kind: 'number', points: 1 },
          ] },
        { id: 'u9', title: 'Úloha 9 (bonus)',
          question: 'Pre množiny A a B platí |A| = 15, |A ∪ B| = 24 a |A ∩ B| = 7. Použi vzorec |A ∪ B| = |A| + |B| − |A ∩ B|.',
          steps: [
            { id: 's1', label: 'Počet prvkov množiny B, |B|', kind: 'number', points: 1 },
            { id: 's2', label: 'Počet prvkov rozdielu, |B − A|', kind: 'number', points: 1 },
            { id: 's3', label: 'Počet prvkov rozdielu, |A − B|', kind: 'number', points: 1 },
          ] },
      ],
    },

    B: {
      tasks: [
        { id: 'u1', title: 'Úloha 1: Pojmy a definície',
          question: 'Ku každému pojmu vyber jeho definíciu. Jedna definícia je navyše.',
          steps: [
            { id: 's1', label: 'zjednotenie množín A ∪ B', kind: 'choice', options: DEFS_B, points: 1 },
            { id: 's2', label: 'doplnok množiny A (A′)', kind: 'choice', options: DEFS_B, points: 1 },
            { id: 's3', label: 'kardinalita množiny', kind: 'choice', options: DEFS_B, points: 1 },
            { id: 's4', label: 'prázdna množina', kind: 'choice', options: DEFS_B, points: 1 },
            { id: 's5', label: 'prienik množín A ∩ B', kind: 'choice', options: DEFS_B, points: 1 },
            { id: 's6', label: 'podmnožina (A ⊆ B)', kind: 'choice', options: DEFS_B, points: 1 },
            { id: 's7', label: 'rozdiel množín A − B', kind: 'choice', options: DEFS_B, points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2: Prvky a podmnožiny',
          question: 'Je dané M = {1, 2, 4, 8}. Doplň medzi ľavú stranu a množinu M správny symbol. V poslednom kroku vyber, či je tvrdenie pravdivé.',
          steps: [
            { id: 's1', label: '∅ … M', kind: 'choice', options: SYMBOLS, points: 1 },
            { id: 's2', label: '3 … M', kind: 'choice', options: SYMBOLS, points: 1 },
            { id: 's3', label: '{2, 8} … M', kind: 'choice', options: SYMBOLS, points: 1 },
            { id: 's4', label: '4 … M', kind: 'choice', options: SYMBOLS, points: 1 },
            { id: 's5', label: 'Tvrdenie: „Každá množina je podmnožinou samej seba.“', kind: 'choice', options: TRUTH, points: 1 },
          ] },
        { id: 'u3', title: 'Úloha 3: Zápis množín',
          question: 'Je dané U = {1, 2, 3, …, 18}. Zapíš vymenovaním prvkov množiny a)–c). V časti d) potom určuj počet prvkov.', onlineNote: NOTE_SET,
          steps: [
            { id: 's1', label: 'a) A = {x ∈ U; x je násobok čísla 6}', kind: 'set', points: 1 },
            { id: 's2', label: 'b) B = {x ∈ U; x je nepárne číslo a x ≥ 13}', kind: 'set', points: 1 },
            { id: 's3', label: 'c) C = {x ∈ U; x < 1}', kind: 'set', points: 1 },
            { id: 's4', label: 'd) prvky množiny D = {x ∈ U; 3 < x ≤ 6}', kind: 'set', points: 1 },
            { id: 's5', label: 'd) kardinalita |D|', kind: 'number', points: 1 },
          ] },
        { id: 'u4', title: 'Úloha 4: Kardinalita a podmnožiny',
          question: 'Množina M = {1, 2, 3, 4}. Odpovedz na otázky o jej podmnožinách (podmnožiny si môžeš vypísať na papier).',
          steps: [
            { id: 's1', label: 'Koľko podmnožín má množina M (vrátane ∅ aj M)?', kind: 'number', points: 1 },
            { id: 's2', label: 'Koľko z nich má presne dva prvky?', kind: 'number', points: 1 },
            { id: 's3', label: 'Koľko podmnožín má osemprvková množina?', kind: 'number', points: 1 },
            { id: 's4', label: 'Kardinalita |K| množiny K = {1, 1, 3, 3, 5, 7, 7, 9}', kind: 'number', points: 1 },
          ] },
        { id: 'u5', title: 'Úloha 5: Operácie s množinami',
          question: 'Je dané U = {1, 2, 3, …, 12}, A = {2, 3, 5, 7, 11}, B = {1, 3, 5, 7, 9, 11}.', onlineNote: NOTE_SET,
          steps: [
            { id: 's1', label: 'A ∪ B', kind: 'set', points: 1 },
            { id: 's2', label: 'A ∩ B', kind: 'set', points: 1 },
            { id: 's3', label: 'A − B', kind: 'set', points: 1 },
            { id: 's4', label: 'B − A', kind: 'set', points: 1 },
            { id: 's5', label: 'A′ (doplnok A v U)', kind: 'set', points: 1 },
          ] },
        { id: 'u6', title: 'Úloha 6: Vennov diagram',
          question: 'Vo Vennovom diagrame množín A a B v univerzálnej množine U je v oblasti „iba A“ 4 prvky, v oblasti „A aj B“ (prienik) 3 prvky, v oblasti „iba B“ 6 prvkov a mimo oboch množín 5 prvkov.',
          steps: [
            { id: 's1', label: 'Počet prvkov množiny A, |A|', kind: 'number', points: 1 },
            { id: 's2', label: 'Počet prvkov zjednotenia, |A ∪ B|', kind: 'number', points: 1 },
            { id: 's3', label: 'Počet prvkov rozdielu, |B − A|', kind: 'number', points: 1 },
            { id: 's4', label: 'Počet prvkov doplnku, |A′|', kind: 'number', points: 1 },
          ] },
        { id: 'u7', title: 'Úloha 7: Kombinované operácie',
          question: 'Je dané U = {1, 2, 3, …, 10}, A = {1, 2, 3, 4, 5}, B = {3, 4, 5, 6, 7, 8}. Najprv vyhodnoť zátvorku, až potom celý výraz.', onlineNote: NOTE_SET,
          steps: [
            { id: 's1', label: '(A ∩ B)′', kind: 'set', points: 1 },
            { id: 's2', label: '(A ∪ B) − (A ∩ B)', kind: 'set', points: 2 },
            { id: 's3', label: 'A′ ∩ B', kind: 'set', points: 1 },
            { id: 's4', label: '(A − B)′', kind: 'set', points: 2 },
          ] },
        { id: 'u8', title: 'Úloha 8: Aplikačná úloha',
          question: 'V triede je 28 žiakov. Lyžuje 14 žiakov, korčuľuje 16 žiakov a obidva športy robí 5 žiakov.',
          steps: [
            { id: 's1', label: 'Koľko žiakov robí aspoň jeden z týchto dvoch športov?', kind: 'number', points: 1 },
            { id: 's2', label: 'Koľko žiakov nerobí ani jeden z nich?', kind: 'number', points: 1 },
            { id: 's3', label: 'Koľko žiakov iba lyžuje?', kind: 'number', points: 1 },
            { id: 's4', label: 'Koľko žiakov robí práve jeden z týchto dvoch športov?', kind: 'number', points: 1 },
          ] },
        { id: 'u9', title: 'Úloha 9 (bonus)',
          question: 'Pre množiny A a B platí |A| = 11, |A ∪ B| = 19 a |A ∩ B| = 4. Použi vzorec |A ∪ B| = |A| + |B| − |A ∩ B|.',
          steps: [
            { id: 's1', label: 'Počet prvkov množiny B, |B|', kind: 'number', points: 1 },
            { id: 's2', label: 'Počet prvkov rozdielu, |B − A|', kind: 'number', points: 1 },
            { id: 's3', label: 'Počet prvkov rozdielu, |A − B|', kind: 'number', points: 1 },
          ] },
      ],
    },
  },

  bonusTasks: ['u9'],

  // Nepovinná sebareflexia po odovzdaní (informácia pre učiteľku, nie známka).
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
      // DEFS_A: 0 doplnok, 1 prienik, 2 prázdna, 3 kardinalita, 4 zjednotenie, 5 podmnožina, 6 rozdiel
      u1: { s1: '1', s2: '3', s3: '0', s4: '6', s5: '2', s6: '4', s7: '5' },
      u2: { s1: '1', s2: '2', s3: '0', s4: '2', s5: '1' },              // ∉, ⊆, ∈, ⊆; „6 je podmnožina“ nepravda
      u3: { s1: ['4', '8', '12', '16', '20'], s2: ['16', '18', '20'], s3: [], s4: ['12', '13', '14', '15'], s5: '4' },
      u4: { s1: '32', s2: '5', s3: '128', s4: '4' },                     // 2^5; C(5,4)=5; 2^7; {2,4,6,8}
      u5: { s1: ['1', '3', '5', '6', '7', '9', '11', '12'], s2: ['3', '9'], s3: ['1', '5', '7', '11'], s4: ['6', '12'], s5: ['2', '4', '6', '8', '10', '12'] },
      u6: { s1: '8', s2: '13', s3: '5', s4: '12' },                      // 6+2; 6+2+5; iba B; 5+7
      u7: { s1: ['1', '4', '5', '6', '7', '8', '9', '10'], s2: ['1', '4', '5', '6', '7', '8', '9'], s3: ['1', '8', '9'], s4: ['1', '2', '3', '8', '9', '10'] },
      u8: { s1: '26', s2: '4', s3: '12', s4: '20' },                     // 18+14−6; 30−26; 18−6; 26−6
      u9: { s1: '16', s2: '9', s3: '8' },                                // 24−15+7; 16−7; 15−7
    },
    B: {
      // DEFS_B: 0 kardinalita, 1 rozdiel, 2 doplnok, 4 podmnožina, 5 prienik, 6 zjednotenie, 7 prázdna
      u1: { s1: '6', s2: '2', s3: '0', s4: '7', s5: '5', s6: '4', s7: '1' },
      u2: { s1: '2', s2: '1', s3: '2', s4: '0', s5: '0' },              // ⊆, ∉, ⊆, ∈; tvrdenie pravdivé
      u3: { s1: ['6', '12', '18'], s2: ['13', '15', '17'], s3: [], s4: ['4', '5', '6'], s5: '3' },
      u4: { s1: '16', s2: '6', s3: '256', s4: '5' },                     // 2^4; C(4,2)=6; 2^8; {1,3,5,7,9}
      u5: { s1: ['1', '2', '3', '5', '7', '9', '11'], s2: ['3', '5', '7', '11'], s3: ['2'], s4: ['1', '9'], s5: ['1', '4', '6', '8', '9', '10', '12'] },
      u6: { s1: '7', s2: '13', s3: '6', s4: '11' },                      // 4+3; 4+3+6; iba B; 6+5
      u7: { s1: ['1', '2', '6', '7', '8', '9', '10'], s2: ['1', '2', '6', '7', '8'], s3: ['6', '7', '8'], s4: ['3', '4', '5', '6', '7', '8', '9', '10'] },
      u8: { s1: '25', s2: '3', s3: '9', s4: '20' },                      // 14+16−5; 28−25; 14−5; 25−5
      u9: { s1: '12', s2: '8', s3: '7' },                                // 19−11+4; 12−4; 11−4
    },
  },
};
