// Príprava na písomku 2. ročník · Lineárne rovnice · hodina 23 (rovnice s absolútnou hodnotou).
//
// Samostatná písomka s JEDNOU skupinou (bez delenia na A a B). Rovnaká štruktúra a
// rovnaké typy úloh ako ostrá písomka 2-u03-h023, ale iné čísla. Spúšťa sa osobitne
// zo záznamu 2-u03-h023p v registri; ostrú písomku (skupiny A a B) nijako neovplyvňuje.
//
// Súbor je zámerne MIMO verejných statických súborov (pozri 2-u03-h023.js).
//
// Hodnoty v `key`:
//   kind 'number' → reťazec ('5', '-2', '3/2'), alebo 'none' (= „nemá riešenie“)
//   kind 'set'    → pole reťazcov; prázdne pole [] = prázdna množina ∅
//
// Všetky výsledky sú overené dosadením do pôvodnej rovnice.

const NOTE_CANDIDATES = 'Do polí zapíš výsledok čiastkovej rovnice na danom intervale, aj keď do intervalu nepatrí. O tom, ktoré kandidáty ostanú, rozhodneš až v poslednom kroku.';

module.exports = {
  id: '2-u03-h023p',
  title: 'Príprava na písomku: Lineárne rovnice s absolútnou hodnotou',
  minutes: 45,
  instructions: [
    'Toto je príprava na písomku, nie ostrá písomka. Úlohy majú rovnakú stavbu ako v písomke, len iné čísla.',
    'Úlohy sú rozdelené na kroky. Pri každej úlohe vyplň všetky kroky postupu. Za každý správny krok získaš body, aj keď neskôr urobíš chybu.',
    'Počítaj na papieri a do aplikácie prepisuj výsledky krokov. Zlomky zapisuj v tvare a/b (napr. -2/3), desatinné čísla s čiarkou alebo bodkou.',
    'Ak rovnica nemá riešenie, použi tlačidlo „nemá riešenie“, pri množine tlačidlo „∅ prázdna množina“.',
    'Odpovede sa ukladajú priebežne. Na konci stlač „Odovzdať“. Úloha 7 je bonusová.',
  ],

  groups: {
    A: {
      tasks: [
        { id: 'u1', title: 'Úloha 1', question: 'Vyrieš rovnicu |3x − 1| = 8.',
          steps: [
            { id: 's1', label: 'Riešenie rovnice 3x − 1 = 8', kind: 'number', points: 1 },
            { id: 's2', label: 'Riešenie rovnice 3x − 1 = −8', kind: 'number', points: 1 },
            { id: 's3', label: 'Množina riešení', kind: 'set', points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2', question: 'Zapíš množinu riešení rovníc: a) |5x − 10| = 0, b) |x − 4| = −1.',
          steps: [
            { id: 's1', label: 'a) množina riešení', kind: 'set', points: 1 },
            { id: 's2', label: 'b) množina riešení', kind: 'set', points: 1 },
          ] },
        { id: 'u3', title: 'Úloha 3', question: 'Vyrieš rovnicu |2x − 1| = |x + 5|.',
          steps: [
            { id: 's1', label: 'Riešenie rovnice 2x − 1 = x + 5', kind: 'number', points: 1 },
            { id: 's2', label: 'Riešenie rovnice 2x − 1 = −(x + 5)', kind: 'number', points: 1 },
            { id: 's3', label: 'Množina riešení', kind: 'set', points: 1 },
          ] },
        { id: 'u4', title: 'Úloha 4', question: 'Vyrieš rovnicu |x + 2| = 3x − 2.',
          steps: [
            { id: 's1', label: 'Podmienka: pravá strana musí byť nezáporná, teda x ≥ ?', kind: 'number', points: 1 },
            { id: 's2', label: 'Riešenie rovnice x + 2 = 3x − 2', kind: 'number', points: 1 },
            { id: 's3', label: 'Riešenie rovnice x + 2 = −(3x − 2)', kind: 'number', points: 1 },
            { id: 's4', label: 'Množina riešení (po kontrole podmienky)', kind: 'set', points: 2 },
          ] },
        { id: 'u5', title: 'Úloha 5', question: 'Vyrieš rovnicu |x − 1| + |x + 3| = 8.', note: NOTE_CANDIDATES,
          steps: [
            { id: 's1', label: 'Kritické body', kind: 'set', points: 1 },
            { id: 's2', label: 'Výsledok čiastkovej rovnice na ľavom intervale', kind: 'number', allowNone: true, points: 1 },
            { id: 's3', label: 'Výsledok čiastkovej rovnice na strednom intervale', kind: 'number', allowNone: true, points: 1 },
            { id: 's4', label: 'Výsledok čiastkovej rovnice na pravom intervale', kind: 'number', allowNone: true, points: 1 },
            { id: 's5', label: 'Množina riešení', kind: 'set', points: 2 },
          ] },
        { id: 'u6', title: 'Úloha 6', question: 'Vyrieš rovnicu |x + 2| + |2x − 2| = 7.', note: NOTE_CANDIDATES,
          steps: [
            { id: 's1', label: 'Kritické body', kind: 'set', points: 1 },
            { id: 's2', label: 'Výsledok čiastkovej rovnice na ľavom intervale', kind: 'number', allowNone: true, points: 1 },
            { id: 's3', label: 'Výsledok čiastkovej rovnice na strednom intervale', kind: 'number', allowNone: true, points: 1 },
            { id: 's4', label: 'Výsledok čiastkovej rovnice na pravom intervale', kind: 'number', allowNone: true, points: 1 },
            { id: 's5', label: 'Množina riešení', kind: 'set', points: 2 },
          ] },
        { id: 'u7', title: 'Úloha 7 (bonus)', question: 'Vyrieš rovnicu |x| + |x − 2| + |x − 4| = 8.', note: NOTE_CANDIDATES,
          steps: [
            { id: 's1', label: 'Kritické body', kind: 'set', points: 1 },
            { id: 's2', label: 'Výsledok čiastkovej rovnice na 1. intervale (zľava)', kind: 'number', allowNone: true, points: 1 },
            { id: 's3', label: 'Výsledok čiastkovej rovnice na 2. intervale', kind: 'number', allowNone: true, points: 1 },
            { id: 's4', label: 'Výsledok čiastkovej rovnice na 3. intervale', kind: 'number', allowNone: true, points: 1 },
            { id: 's5', label: 'Výsledok čiastkovej rovnice na 4. intervale', kind: 'number', allowNone: true, points: 1 },
            { id: 's6', label: 'Množina riešení', kind: 'set', points: 2 },
          ] },
      ],
    },
  },

  bonusTasks: ['u7'],

  reflection: {
    prompt: 'Ako ti išli jednotlivé časti? Označ, nie je to známka.',
    skills: [
      'rovnice |L(x)| = k a hraničné prípady',
      'rovnice |L(x)| = |R(x)|',
      'rovnice |L(x)| = R(x) s podmienkou',
      'kritické body a intervaly',
      'kontrola kandidátov',
    ],
  },

  key: {
    A: {
      u1: { s1: '3', s2: '-7/3', s3: ['-7/3', '3'] },                      // 3x−1=8 → 3; 3x−1=−8 → −7/3
      u2: { s1: ['2'], s2: [] },                                           // 5x−10=0 → 2; |·| = −1 → ∅
      u3: { s1: '6', s2: '-4/3', s3: ['-4/3', '6'] },                      // 2x−1=x+5 → 6; 2x−1=−x−5 → −4/3
      u4: { s1: '2/3', s2: '2', s3: '0', s4: ['2'] },                      // x≥2/3; 0 vyradiť; 2: |4|=4=3·2−2
      u5: { s1: ['-3', '1'], s2: '-5', s3: 'none', s4: '3', s5: ['-5', '3'] },
      u6: { s1: ['-2', '1'], s2: '-7/3', s3: '-3', s4: '7/3', s5: ['-7/3', '7/3'] }, // −3 ∉ [−2,1) → vyradiť
      u7: { s1: ['0', '2', '4'], s2: '-2/3', s3: '-2', s4: '6', s5: '14/3', s6: ['-2/3', '14/3'] },
    },
  },
};
