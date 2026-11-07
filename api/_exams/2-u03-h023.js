// Písomka 2. ročník · Lineárne rovnice · hodina 23 (Lineárne rovnice s absolútnou hodnotou).
//
// Súbor je zámerne MIMO verejných statických súborov: zadania aj kľúč číta len
// api/exam.js a vydá ich iba prihlásenej učiteľke. Žiakom sa z učiteľkinho
// prehliadača pošle verzia bez `key` (MathExam.publicExam v core/exam.js).
//
// Formát je popísaný v docs/AUTHORING.md (sekcia „Písomka“). Skupiny A a B MUSIA mať
// rovnaké id úloh a krokov, rovnaké `kind` a `points` (kontroluje tools/audit.mjs).
//
// Hodnoty v `key`:
//   kind 'number' → reťazec ('5', '-2', '3/2'), alebo 'none' (= „nemá riešenie“)
//   kind 'set'    → pole reťazcov; prázdne pole [] = prázdna množina ∅
//
// Všetky výsledky sú overené dosadením do pôvodnej rovnice (pozri poznámky pri úlohách).

const NOTE_CANDIDATES = 'Do polí zapíš výsledok čiastkovej rovnice na danom intervale, aj keď do intervalu nepatrí. O tom, ktoré kandidáty ostanú, rozhodneš až v poslednom kroku.';

module.exports = {
  id: '2-u03-h023',
  title: 'Lineárne rovnice s absolútnou hodnotou',
  minutes: 45,
  instructions: [
    'Úlohy sú rozdelené na kroky. Pri každej úlohe vyplň všetky kroky postupu. Za každý správny krok získaš body, aj keď neskôr urobíš chybu.',
    'Počítaj na papieri a do aplikácie prepisuj výsledky krokov. Zlomky zapisuj v tvare a/b (napr. -2/3), desatinné čísla s čiarkou alebo bodkou.',
    'Ak rovnica nemá riešenie, použi tlačidlo „nemá riešenie“, pri množine tlačidlo „∅ prázdna množina“.',
    'Odpovede sa ukladajú priebežne. Na konci stlač „Odovzdať“. Úloha 7 je bonusová.',
  ],

  groups: {
    A: {
      tasks: [
        { id: 'u1', title: 'Úloha 1', question: 'Vyrieš rovnicu |2x − 3| = 7.',
          steps: [
            { id: 's1', label: 'Riešenie rovnice 2x − 3 = 7', kind: 'number', points: 1 },
            { id: 's2', label: 'Riešenie rovnice 2x − 3 = −7', kind: 'number', points: 1 },
            { id: 's3', label: 'Množina riešení', kind: 'set', points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2', question: 'Zapíš množinu riešení rovníc: a) |4x − 6| = 0, b) |x + 7| = −2.',
          steps: [
            { id: 's1', label: 'a) množina riešení', kind: 'set', points: 1 },
            { id: 's2', label: 'b) množina riešení', kind: 'set', points: 1 },
          ] },
        { id: 'u3', title: 'Úloha 3', question: 'Vyrieš rovnicu |3x − 2| = |x + 6|.',
          steps: [
            { id: 's1', label: 'Riešenie rovnice 3x − 2 = x + 6', kind: 'number', points: 1 },
            { id: 's2', label: 'Riešenie rovnice 3x − 2 = −(x + 6)', kind: 'number', points: 1 },
            { id: 's3', label: 'Množina riešení', kind: 'set', points: 1 },
          ] },
        { id: 'u4', title: 'Úloha 4', question: 'Vyrieš rovnicu |x − 5| = 2x − 4.',
          steps: [
            { id: 's1', label: 'Podmienka: pravá strana musí byť nezáporná, teda x ≥ ?', kind: 'number', points: 1 },
            { id: 's2', label: 'Riešenie rovnice x − 5 = 2x − 4', kind: 'number', points: 1 },
            { id: 's3', label: 'Riešenie rovnice x − 5 = −(2x − 4)', kind: 'number', points: 1 },
            { id: 's4', label: 'Množina riešení (po kontrole podmienky)', kind: 'set', points: 2 },
          ] },
        { id: 'u5', title: 'Úloha 5', question: 'Vyrieš rovnicu |x − 2| + |x + 1| = 7.', onlineNote: NOTE_CANDIDATES,
          steps: [
            { id: 's1', label: 'Kritické body', kind: 'set', points: 1 },
            { id: 's2', label: 'Výsledok čiastkovej rovnice na ľavom intervale', kind: 'number', allowNone: true, points: 1 },
            { id: 's3', label: 'Výsledok čiastkovej rovnice na strednom intervale', kind: 'number', allowNone: true, points: 1 },
            { id: 's4', label: 'Výsledok čiastkovej rovnice na pravom intervale', kind: 'number', allowNone: true, points: 1 },
            { id: 's5', label: 'Množina riešení', kind: 'set', points: 2 },
          ] },
        { id: 'u6', title: 'Úloha 6', question: 'Vyrieš rovnicu |2x + 4| + |x − 2| = 7.', onlineNote: NOTE_CANDIDATES,
          steps: [
            { id: 's1', label: 'Kritické body', kind: 'set', points: 1 },
            { id: 's2', label: 'Výsledok čiastkovej rovnice na ľavom intervale', kind: 'number', allowNone: true, points: 1 },
            { id: 's3', label: 'Výsledok čiastkovej rovnice na strednom intervale', kind: 'number', allowNone: true, points: 1 },
            { id: 's4', label: 'Výsledok čiastkovej rovnice na pravom intervale', kind: 'number', allowNone: true, points: 1 },
            { id: 's5', label: 'Množina riešení', kind: 'set', points: 2 },
          ] },
        { id: 'u7', title: 'Úloha 7 (bonus)', question: 'Vyrieš rovnicu |x + 1| + |x − 1| + |x − 3| = 9.', onlineNote: NOTE_CANDIDATES,
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

    B: {
      tasks: [
        { id: 'u1', title: 'Úloha 1', question: 'Vyrieš rovnicu |2x + 5| = 9.',
          steps: [
            { id: 's1', label: 'Riešenie rovnice 2x + 5 = 9', kind: 'number', points: 1 },
            { id: 's2', label: 'Riešenie rovnice 2x + 5 = −9', kind: 'number', points: 1 },
            { id: 's3', label: 'Množina riešení', kind: 'set', points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2', question: 'Zapíš množinu riešení rovníc: a) |6x + 4| = 0, b) |5 − x| = −3.',
          steps: [
            { id: 's1', label: 'a) množina riešení', kind: 'set', points: 1 },
            { id: 's2', label: 'b) množina riešení', kind: 'set', points: 1 },
          ] },
        { id: 'u3', title: 'Úloha 3', question: 'Vyrieš rovnicu |2x + 3| = |x − 3|.',
          steps: [
            { id: 's1', label: 'Riešenie rovnice 2x + 3 = x − 3', kind: 'number', points: 1 },
            { id: 's2', label: 'Riešenie rovnice 2x + 3 = −(x − 3)', kind: 'number', points: 1 },
            { id: 's3', label: 'Množina riešení', kind: 'set', points: 1 },
          ] },
        { id: 'u4', title: 'Úloha 4', question: 'Vyrieš rovnicu |x + 3| = 3x − 1.',
          steps: [
            { id: 's1', label: 'Podmienka: pravá strana musí byť nezáporná, teda x ≥ ?', kind: 'number', points: 1 },
            { id: 's2', label: 'Riešenie rovnice x + 3 = 3x − 1', kind: 'number', points: 1 },
            { id: 's3', label: 'Riešenie rovnice x + 3 = −(3x − 1)', kind: 'number', points: 1 },
            { id: 's4', label: 'Množina riešení (po kontrole podmienky)', kind: 'set', points: 2 },
          ] },
        { id: 'u5', title: 'Úloha 5', question: 'Vyrieš rovnicu |x − 3| + |x + 2| = 9.', onlineNote: NOTE_CANDIDATES,
          steps: [
            { id: 's1', label: 'Kritické body', kind: 'set', points: 1 },
            { id: 's2', label: 'Výsledok čiastkovej rovnice na ľavom intervale', kind: 'number', allowNone: true, points: 1 },
            { id: 's3', label: 'Výsledok čiastkovej rovnice na strednom intervale', kind: 'number', allowNone: true, points: 1 },
            { id: 's4', label: 'Výsledok čiastkovej rovnice na pravom intervale', kind: 'number', allowNone: true, points: 1 },
            { id: 's5', label: 'Množina riešení', kind: 'set', points: 2 },
          ] },
        { id: 'u6', title: 'Úloha 6', question: 'Vyrieš rovnicu |2x + 2| + |x − 3| = 7.', onlineNote: NOTE_CANDIDATES,
          steps: [
            { id: 's1', label: 'Kritické body', kind: 'set', points: 1 },
            { id: 's2', label: 'Výsledok čiastkovej rovnice na ľavom intervale', kind: 'number', allowNone: true, points: 1 },
            { id: 's3', label: 'Výsledok čiastkovej rovnice na strednom intervale', kind: 'number', allowNone: true, points: 1 },
            { id: 's4', label: 'Výsledok čiastkovej rovnice na pravom intervale', kind: 'number', allowNone: true, points: 1 },
            { id: 's5', label: 'Množina riešení', kind: 'set', points: 2 },
          ] },
        { id: 'u7', title: 'Úloha 7 (bonus)', question: 'Vyrieš rovnicu |x + 2| + |x| + |x − 2| = 9.', onlineNote: NOTE_CANDIDATES,
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

  // Nepovinná sebareflexia po odovzdaní (informácia pre učiteľku, nie známka).
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
      u1: { s1: '5', s2: '-2', s3: ['-2', '5'] },                         // 2x−3=7 → 5; 2x−3=−7 → −2
      u2: { s1: ['3/2'], s2: [] },                                         // 4x−6=0 → 3/2; |·| = −2 → ∅
      u3: { s1: '4', s2: '-1', s3: ['-1', '4'] },                          // 3x−2=x+6 → 4; 3x−2=−x−6 → −1
      u4: { s1: '2', s2: '-1', s3: '3', s4: ['3'] },                       // x≥2; −1 vyradiť; 3: |−2|=2=2·3−4
      u5: { s1: ['-1', '2'], s2: '-3', s3: 'none', s4: '4', s5: ['-3', '4'] },
      u6: { s1: ['-2', '2'], s2: '-3', s3: '1', s4: '5/3', s5: ['-3', '1'] }, // 5/3 < 2 → vyradiť
      u7: { s1: ['-1', '1', '3'], s2: '-2', s3: '-4', s4: '6', s5: '4', s6: ['-2', '4'] },
    },
    B: {
      u1: { s1: '2', s2: '-7', s3: ['-7', '2'] },                          // 2x+5=9 → 2; 2x+5=−9 → −7
      u2: { s1: ['-2/3'], s2: [] },                                        // 6x+4=0 → −2/3; |·| = −3 → ∅
      u3: { s1: '-6', s2: '0', s3: ['-6', '0'] },                          // 2x+3=x−3 → −6; 2x+3=−x+3 → 0
      u4: { s1: '1/3', s2: '2', s3: '-1/2', s4: ['2'] },                   // x≥1/3; −1/2 vyradiť; 2: |5|=5=3·2−1
      u5: { s1: ['-2', '3'], s2: '-4', s3: 'none', s4: '5', s5: ['-4', '5'] },
      u6: { s1: ['-1', '3'], s2: '-2', s3: '2', s4: '8/3', s5: ['-2', '2'] }, // 8/3 < 3 → vyradiť
      u7: { s1: ['-2', '0', '2'], s2: '-3', s3: '-5', s4: '5', s5: '3', s6: ['-3', '3'] },
    },
  },
};
