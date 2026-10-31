// Písomka 3. ročník · Goniometrické funkcie, goniometrické, rovnice · hodina 20.
// Rovnice iba so sin a cos: základné, so zloženým argumentom a kvadratické (substitúcia).
//
// Súbor je zámerne MIMO verejných statických súborov (viď api/_exams/2-u03-h023.js a
// docs/AUTHORING.md, sekcia „Písomka“). Kroky (label, kind, points, suffix) sú pre
// skupiny A a B spoločné, preto sa nikdy nerozídu; mení sa iba zadanie a kľúč.
//
// Riešenia sú násobky π. Žiak zapisuje iba koeficient pri π (suffix 'π'), napr. 5π/4 → 5/4.
// Hodnoty v `key`: kind 'number' → reťazec; kind 'set' → pole reťazcov ([] = ∅).
//
// Všetky hodnoty sú overené nezávisle (číselné riešenie rovnice na jemnej sieti, tools/ + poznámka v docs).

const INTERVAL = '⟨0; 2π)';
const NOTE_U = 'Zaveď substitúciu u = výraz v zátvorke. Riešenia pre u hľadaj v intervale ⟨0; 2π). Pri riešeniach zapisuj iba číslo pred π.';

// Spoločná štruktúra úloh. `A` a `B` obsahujú iba zadanie a kľúč.
const TASKS = [
  { id: 'u1', title: 'Úloha 1',
    steps: [
      { id: 's1', label: `Všetky riešenia v intervale ${INTERVAL}`, kind: 'set', suffix: 'π', points: 2 },
      { id: 's2', label: 'Počet riešení v intervale ⟨0; 4π)', kind: 'number', points: 1 },
    ],
    A: { question: 'Vyrieš rovnicu sin x = −√2/2.', key: { s1: ['5/4', '7/4'], s2: '4' } },
    B: { question: 'Vyrieš rovnicu cos x = −√2/2.', key: { s1: ['3/4', '5/4'], s2: '4' } } },

  { id: 'u2', title: 'Úloha 2',
    steps: [
      { id: 's1', label: `a) riešenia v intervale ${INTERVAL}`, kind: 'set', suffix: 'π', points: 1 },
      { id: 's2', label: `b) riešenia v intervale ${INTERVAL}`, kind: 'set', suffix: 'π', points: 1 },
      { id: 's3', label: `c) riešenia v intervale ${INTERVAL}`, kind: 'set', suffix: 'π', points: 1 },
    ],
    A: { question: 'Zapíš všetky riešenia rovníc: a) cos x = 0, b) sin x = 1,5, c) sin x = −1.', key: { s1: ['1/2', '3/2'], s2: [], s3: ['3/2'] } },
    B: { question: 'Zapíš všetky riešenia rovníc: a) sin x = 0, b) cos x = −2, c) cos x = −1.', key: { s1: ['0', '1'], s2: [], s3: ['1'] } } },

  { id: 'u3', title: 'Úloha 3', note: NOTE_U,
    steps: [
      { id: 's1', label: `Riešenia pre u v intervale ${INTERVAL}`, kind: 'set', suffix: 'π', points: 1 },
      { id: 's2', label: `Riešenia x v intervale ${INTERVAL}`, kind: 'set', suffix: 'π', points: 2 },
      { id: 's3', label: 'Počet riešení v intervale ⟨0; 4π)', kind: 'number', points: 1 },
    ],
    A: { question: 'Vyrieš rovnicu cos(x − π/5) = 1/2.', key: { s1: ['1/3', '5/3'], s2: ['8/15', '28/15'], s3: '4' } },
    B: { question: 'Vyrieš rovnicu sin(x + π/4) = √3/2.', key: { s1: ['1/3', '2/3'], s2: ['1/12', '5/12'], s3: '4' } } },

  { id: 'u4', title: 'Úloha 4', note: 'Zaveď substitúciu u = 2x. Ak x patrí do ⟨0; 2π), u prebehne interval ⟨0; 4π). Pri riešeniach zapisuj iba číslo pred π.',
    steps: [
      { id: 's1', label: 'Riešenia pre u = 2x v intervale ⟨0; 4π)', kind: 'set', suffix: 'π', points: 2 },
      { id: 's2', label: `Riešenia x v intervale ${INTERVAL}`, kind: 'set', suffix: 'π', points: 2 },
      { id: 's3', label: 'Všetky riešenia sa opakujú po p·π. Aké je p?', kind: 'number', suffix: 'π', points: 1 },
    ],
    A: { question: 'Vyrieš rovnicu sin 2x = √3/2.', key: { s1: ['1/3', '2/3', '7/3', '8/3'], s2: ['1/6', '1/3', '7/6', '4/3'], s3: '1' } },
    B: { question: 'Vyrieš rovnicu cos 2x = 1/2.', key: { s1: ['1/3', '5/3', '7/3', '11/3'], s2: ['1/6', '5/6', '7/6', '11/6'], s3: '1' } } },

  { id: 'u5', title: 'Úloha 5', note: 'Zaveď substitúciu t. Korene t aj riešenia x zapisuj ako čísla (pri x iba číslo pred π).',
    steps: [
      { id: 's1', label: 'Korene kvadratickej rovnice pre t', kind: 'set', points: 1 },
      { id: 's2', label: 'Počet prípustných koreňov (t musí ležať v ⟨−1; 1⟩)', kind: 'number', points: 1 },
      { id: 's3', label: `Riešenia x v intervale ${INTERVAL}`, kind: 'set', suffix: 'π', points: 2 },
      { id: 's4', label: 'Počet riešení v intervale ⟨0; 4π)', kind: 'number', points: 1 },
    ],
    A: { question: 'Vyrieš rovnicu 2sin²x − sin x − 1 = 0.', key: { s1: ['1', '-1/2'], s2: '2', s3: ['1/2', '7/6', '11/6'], s4: '6' } },
    B: { question: 'Vyrieš rovnicu 2cos²x + cos x − 1 = 0.', key: { s1: ['1/2', '-1'], s2: '2', s3: ['1/3', '1', '5/3'], s4: '6' } } },

  { id: 'u6', title: 'Úloha 6', note: 'Zaveď substitúciu t. Jeden z koreňov kvadratickej rovnice nemusí byť prípustný.',
    steps: [
      { id: 's1', label: 'Korene kvadratickej rovnice pre t', kind: 'set', points: 1 },
      { id: 's2', label: 'Prípustné korene (t v ⟨−1; 1⟩)', kind: 'set', points: 1 },
      { id: 's3', label: `Riešenia x v intervale ${INTERVAL}`, kind: 'set', suffix: 'π', points: 2 },
      { id: 's4', label: 'Počet riešení v intervale ⟨0; 4π)', kind: 'number', points: 1 },
    ],
    A: { question: 'Vyrieš rovnicu 2cos²x − 5cos x + 2 = 0.', key: { s1: ['2', '1/2'], s2: ['1/2'], s3: ['1/3', '5/3'], s4: '4' } },
    B: { question: 'Vyrieš rovnicu 2sin²x + 5sin x + 2 = 0.', key: { s1: ['-2', '-1/2'], s2: ['-1/2'], s3: ['7/6', '11/6'], s4: '4' } } },

  { id: 'u7', title: 'Úloha 7 (bonus)', note: 'Použi dve substitúcie za sebou: najprv t (kvadratická rovnica), potom u (argument). Pri riešeniach pre u a x zapisuj iba číslo pred π.',
    steps: [
      { id: 's1', label: 'Korene kvadratickej rovnice pre t', kind: 'set', points: 1 },
      { id: 's2', label: 'Prípustné korene (t v ⟨−1; 1⟩)', kind: 'set', points: 1 },
      { id: 's3', label: `Riešenia pre u (argument v zátvorke) v intervale ${INTERVAL}`, kind: 'set', suffix: 'π', points: 2 },
      { id: 's4', label: `Riešenia x v intervale ${INTERVAL}`, kind: 'set', suffix: 'π', points: 2 },
    ],
    A: { question: 'Vyrieš rovnicu 2cos²(x − π/6) − 5cos(x − π/6) + 2 = 0.', key: { s1: ['2', '1/2'], s2: ['1/2'], s3: ['1/3', '5/3'], s4: ['1/2', '11/6'] } },
    B: { question: 'Vyrieš rovnicu 2sin²(x + π/6) + 5sin(x + π/6) + 2 = 0.', key: { s1: ['-2', '-1/2'], s2: ['-1/2'], s3: ['7/6', '11/6'], s4: ['1', '5/3'] } } },
];

const group = g => ({
  tasks: TASKS.map(t => {
    const task = { id: t.id, title: t.title, question: t[g].question, steps: t.steps };
    if (t.note) task.note = t.note;
    return task;
  }),
});
const keyFor = g => Object.fromEntries(TASKS.map(t => [t.id, t[g].key]));

module.exports = {
  id: '3-u01-h020',
  title: 'Goniometrické rovnice (sin a cos)',
  minutes: 45,
  instructions: [
    'Úlohy sú rozdelené na kroky. Pri každej úlohe vyplň všetky kroky postupu. Za každý správny krok získaš body, aj keď neskôr urobíš chybu.',
    'Počítaj na papieri a do aplikácie prepisuj výsledky krokov. Riešenia uvedené ako násobok π zapisuj iba číslom pred π: pre 5π/4 napíš 5/4, pre 2π/3 napíš 2/3, pre π napíš 1. Zlomky píš v tvare a/b, desatinné čísla s čiarkou alebo bodkou.',
    'Ak rovnica nemá riešenie, použi pri množine tlačidlo „∅ prázdna množina“.',
    'Odpovede sa ukladajú priebežne. Na konci stlač „Odovzdať“. Úloha 7 je bonusová.',
  ],

  groups: { A: group('A'), B: group('B') },
  bonusTasks: ['u7'],

  // Nepovinná sebareflexia po odovzdaní (informácia pre učiteľku, nie známka).
  reflection: {
    prompt: 'Ako ti išli jednotlivé typy rovníc? Označ, nie je to známka.',
    skills: [
      'základné rovnice sin x = a, cos x = a',
      'rovnice so zloženým argumentom',
      'kvadratické rovnice a substitúcia t',
      'výber riešení z intervalu',
    ],
  },

  key: { A: keyFor('A'), B: keyFor('B') },
};
