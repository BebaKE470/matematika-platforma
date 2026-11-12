// Priebežná písomka 3. ročník · Planimetria · po hodine 33 (trojuholník, obvod a obsah trojuholníka,
// štvoruholníky: štvorec, obdĺžnik, lichobežník, kosoštvorec, kosodĺžnik).
//
// Súbor je zámerne MIMO verejných statických súborov: zadania aj kľúč číta len api/exam.js a vydá ich
// iba prihlásenej učiteľke. Skupiny A a B majú rovnaké id úloh a krokov, rovnaké kind a points.
// Všetky čísla sú volené tak, aby výsledky vyšli presne (pytagorejské trojice); porovnáva sa ako zlomok.
// Žiadne obrázky: všetko je zadané slovne.

const TRUTH = ['pravda', 'nepravda'];
const F33_A = [
  'o = 4a',
  'S = a · b',
  'S = (a + c) · v / 2',
  'S = a · v_a',
  'S = e · f / 2',
  'S = a²',
  'o = 2(a + b)',
  'S = a · v_a / 2',
];
const F33_B = [
  'S = a · v_a',
  'o = 2(a + b)',
  'S = a · v_a / 2',
  'S = a²',
  'o = 4a',
  'S = (a + c) · v / 2',
  'S = a · b',
  'S = e · f / 2',
];

module.exports = {
  id: '3-u02-h033b',
  title: 'Planimetria: trojuholník a štvoruholníky',
  minutes: 40,
  printStepLabels: true,
  instructions: [
    'Úlohy sú rozdelené na kroky. Pri každej úlohe vyplň všetky kroky. Za každý správny krok získaš body, aj keď neskôr urobíš chybu.',
    'Počítaj na papieri a do aplikácie prepisuj výsledky krokov. Jednotky nezapisuj, sú uvedené v zadaní. Výsledky zapisuj presne ako celé čísla alebo zlomky v tvare a/b (desatinné čísla s čiarkou alebo bodkou).',
    'Odpovede sa ukladajú priebežne. Na konci stlač „Odovzdať“. Bonusová úloha nie je povinná.',
  ],

  groups: {
    A: {
      tasks: [
        { id: 'u1', title: 'Úloha 1: Vzorce a útvary',
          question: 'Ku každému útvaru vyber vzorec pre jeho obsah alebo obvod. Používame bežné označenie: a, b, c sú strany, v výška, e, f uhlopriečky, v_a výška na stranu a. Jeden vzorec je navyše.',
          steps: [
            { id: 's1', label: 'obsah trojuholníka so stranou a a výškou v_a na ňu', kind: 'choice', options: F33_A, points: 1 },
            { id: 's2', label: 'obsah kosodĺžnika so stranou a a výškou v_a na ňu', kind: 'choice', options: F33_A, points: 1 },
            { id: 's3', label: 'obsah lichobežníka so základňami a, c a výškou v', kind: 'choice', options: F33_A, points: 1 },
            { id: 's4', label: 'obsah obdĺžnika so stranami a, b', kind: 'choice', options: F33_A, points: 1 },
            { id: 's5', label: 'obvod štvorca so stranou a', kind: 'choice', options: F33_A, points: 1 },
            { id: 's6', label: 'obsah kosoštvorca s uhlopriečkami e a f', kind: 'choice', options: F33_A, points: 1 },
            { id: 's7', label: 'obvod obdĺžnika so stranami a, b', kind: 'choice', options: F33_A, points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2: Vlastnosti útvarov',
          question: 'Pri každom tvrdení vyber, či je pravdivé alebo nepravdivé.',
          steps: [
            { id: 's1', label: 'Každý štvorec je kosoštvorec.', kind: 'choice', options: TRUTH, points: 1 },
            { id: 's2', label: 'Uhlopriečky kosodĺžnika, ktorý nie je kosoštvorec ani obdĺžnik, sú na seba kolmé.', kind: 'choice', options: TRUTH, points: 1 },
            { id: 's3', label: 'Uhlopriečky obdĺžnika sú rovnako dlhé.', kind: 'choice', options: TRUTH, points: 1 },
            { id: 's4', label: 'Súčet vnútorných uhlov každého štvoruholníka je 180°.', kind: 'choice', options: TRUTH, points: 1 },
            { id: 's5', label: 'Každý lichobežník má aspoň jeden pravý uhol.', kind: 'choice', options: TRUTH, points: 1 },
            { id: 's6', label: 'Výška trojuholníka môže ležať mimo trojuholníka.', kind: 'choice', options: TRUTH, points: 1 },
          ] },
        { id: 'u3', title: 'Úloha 3: Pravouhlý trojuholník',
          question: 'Pravouhlý trojuholník má odvesny 9 cm a 12 cm. Počítaj na papieri a výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'dĺžka prepony c (v cm)', kind: 'number', points: 1 },
            { id: 's2', label: 'obvod trojuholníka (v cm)', kind: 'number', points: 1 },
            { id: 's3', label: 'obsah trojuholníka (v cm²)', kind: 'number', points: 1 },
            { id: 's4', label: 'dĺžka výšky na preponu (v cm); zapíš ako zlomok alebo číslo', kind: 'number', points: 2 },
          ] },
        { id: 'u4', title: 'Úloha 4: Rovnoramenný trojuholník',
          question: 'Rovnoramenný trojuholník má základňu 16 cm a každé rameno 17 cm. Výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'výška na základňu (v cm)', kind: 'number', points: 1 },
            { id: 's2', label: 'obsah trojuholníka (v cm²)', kind: 'number', points: 1 },
            { id: 's3', label: 'obvod trojuholníka (v cm)', kind: 'number', points: 1 },
          ] },
        { id: 'u5', title: 'Úloha 5: Rovnoramenný lichobežník',
          question: 'Rovnoramenný lichobežník má základne 14 cm a 6 cm a ramená dlhé 5 cm. Výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'výška lichobežníka (v cm)', kind: 'number', points: 1 },
            { id: 's2', label: 'obvod lichobežníka (v cm)', kind: 'number', points: 1 },
            { id: 's3', label: 'obsah lichobežníka (v cm²)', kind: 'number', points: 1 },
          ] },
        { id: 'u6', title: 'Úloha 6: Kosoštvorec',
          question: 'Kosoštvorec má uhlopriečky 16 cm a 12 cm. Výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'dĺžka strany kosoštvorca (v cm)', kind: 'number', points: 1 },
            { id: 's2', label: 'obvod kosoštvorca (v cm)', kind: 'number', points: 1 },
            { id: 's3', label: 'obsah kosoštvorca (v cm²)', kind: 'number', points: 1 },
          ] },
        { id: 'u7', title: 'Úloha 7: Kosodĺžnik',
          question: 'Kosodĺžnik má strany a = 15 cm, b = 17 cm a výšku na stranu a rovnú 8 cm. Výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'obsah kosodĺžnika (v cm²)', kind: 'number', points: 1 },
            { id: 's2', label: 'obvod kosodĺžnika (v cm)', kind: 'number', points: 1 },
            { id: 's3', label: 'výška na stranu b (v cm); zapíš ako zlomok alebo číslo', kind: 'number', points: 1 },
          ] },
        { id: 'u8', title: 'Úloha 8: Obdĺžnikový pozemok',
          question: 'Obdĺžnikový pozemok má rozmery 24 m a 18 m. Pozemok sa oplotí a celý sa zasadí trávou. Jedno balenie trávneho semena vystačí na 36 m². Výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'dĺžka uhlopriečky pozemku (v m)', kind: 'number', points: 1 },
            { id: 's2', label: 'dĺžka oplotenia okolo celého pozemku (v m)', kind: 'number', points: 1 },
            { id: 's3', label: 'obsah pozemku (v m²)', kind: 'number', points: 1 },
            { id: 's4', label: 'počet balení semena potrebných na celý pozemok', kind: 'number', points: 1 },
          ] },
        { id: 'u9', title: 'Úloha 9 (bonus)',
          question: 'Pravouhlý lichobežník má kratšiu základňu 8 cm. Rameno kolmé na základne má 5 cm a šikmé rameno 13 cm. Výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'o koľko cm je dlhšia základňa dlhšia ako kratšia základňa', kind: 'number', points: 1 },
            { id: 's2', label: 'dĺžka dlhšej základne (v cm)', kind: 'number', points: 1 },
            { id: 's3', label: 'obvod lichobežníka (v cm)', kind: 'number', points: 1 },
            { id: 's4', label: 'obsah lichobežníka (v cm²)', kind: 'number', points: 1 },
          ] },
      ],
    },

    B: {
      tasks: [
        { id: 'u1', title: 'Úloha 1: Vzorce a útvary',
          question: 'Ku každému útvaru vyber vzorec pre jeho obsah alebo obvod. Používame bežné označenie: a, b, c sú strany, v výška, e, f uhlopriečky, v_a výška na stranu a. Jeden vzorec je navyše.',
          steps: [
            { id: 's1', label: 'obsah lichobežníka so základňami a, c a výškou v', kind: 'choice', options: F33_B, points: 1 },
            { id: 's2', label: 'obsah štvorca so stranou a', kind: 'choice', options: F33_B, points: 1 },
            { id: 's3', label: 'obsah kosoštvorca s uhlopriečkami e a f', kind: 'choice', options: F33_B, points: 1 },
            { id: 's4', label: 'obsah trojuholníka so stranou a a výškou v_a na ňu', kind: 'choice', options: F33_B, points: 1 },
            { id: 's5', label: 'obvod obdĺžnika so stranami a, b', kind: 'choice', options: F33_B, points: 1 },
            { id: 's6', label: 'obsah kosodĺžnika so stranou a a výškou v_a na ňu', kind: 'choice', options: F33_B, points: 1 },
            { id: 's7', label: 'obvod štvorca so stranou a', kind: 'choice', options: F33_B, points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2: Vlastnosti útvarov',
          question: 'Pri každom tvrdení vyber, či je pravdivé alebo nepravdivé.',
          steps: [
            { id: 's1', label: 'Každý kosoštvorec je štvorec.', kind: 'choice', options: TRUTH, points: 1 },
            { id: 's2', label: 'Uhlopriečky kosoštvorca sú na seba kolmé.', kind: 'choice', options: TRUTH, points: 1 },
            { id: 's3', label: 'Uhlopriečky kosodĺžnika, ktorý nie je obdĺžnik, sú rovnako dlhé.', kind: 'choice', options: TRUTH, points: 1 },
            { id: 's4', label: 'Súčet vnútorných uhlov každého štvoruholníka je 360°.', kind: 'choice', options: TRUTH, points: 1 },
            { id: 's5', label: 'Každý obdĺžnik je rovnobežník.', kind: 'choice', options: TRUTH, points: 1 },
            { id: 's6', label: 'Výška trojuholníka vždy leží vo vnútri trojuholníka.', kind: 'choice', options: TRUTH, points: 1 },
          ] },
        { id: 'u3', title: 'Úloha 3: Pravouhlý trojuholník',
          question: 'Pravouhlý trojuholník má odvesny 8 cm a 15 cm. Počítaj na papieri a výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'dĺžka prepony c (v cm)', kind: 'number', points: 1 },
            { id: 's2', label: 'obvod trojuholníka (v cm)', kind: 'number', points: 1 },
            { id: 's3', label: 'obsah trojuholníka (v cm²)', kind: 'number', points: 1 },
            { id: 's4', label: 'dĺžka výšky na preponu (v cm); zapíš ako zlomok alebo číslo', kind: 'number', points: 2 },
          ] },
        { id: 'u4', title: 'Úloha 4: Rovnoramenný trojuholník',
          question: 'Rovnoramenný trojuholník má základňu 10 cm a každé rameno 13 cm. Výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'výška na základňu (v cm)', kind: 'number', points: 1 },
            { id: 's2', label: 'obsah trojuholníka (v cm²)', kind: 'number', points: 1 },
            { id: 's3', label: 'obvod trojuholníka (v cm)', kind: 'number', points: 1 },
          ] },
        { id: 'u5', title: 'Úloha 5: Rovnoramenný lichobežník',
          question: 'Rovnoramenný lichobežník má základne 20 cm a 10 cm a ramená dlhé 13 cm. Výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'výška lichobežníka (v cm)', kind: 'number', points: 1 },
            { id: 's2', label: 'obvod lichobežníka (v cm)', kind: 'number', points: 1 },
            { id: 's3', label: 'obsah lichobežníka (v cm²)', kind: 'number', points: 1 },
          ] },
        { id: 'u6', title: 'Úloha 6: Kosoštvorec',
          question: 'Kosoštvorec má uhlopriečky 10 cm a 24 cm. Výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'dĺžka strany kosoštvorca (v cm)', kind: 'number', points: 1 },
            { id: 's2', label: 'obvod kosoštvorca (v cm)', kind: 'number', points: 1 },
            { id: 's3', label: 'obsah kosoštvorca (v cm²)', kind: 'number', points: 1 },
          ] },
        { id: 'u7', title: 'Úloha 7: Kosodĺžnik',
          question: 'Kosodĺžnik má strany a = 24 cm, b = 25 cm a výšku na stranu a rovnú 7 cm. Výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'obsah kosodĺžnika (v cm²)', kind: 'number', points: 1 },
            { id: 's2', label: 'obvod kosodĺžnika (v cm)', kind: 'number', points: 1 },
            { id: 's3', label: 'výška na stranu b (v cm); zapíš ako zlomok alebo číslo', kind: 'number', points: 1 },
          ] },
        { id: 'u8', title: 'Úloha 8: Obdĺžnikový pozemok',
          question: 'Obdĺžnikový pozemok má rozmery 20 m a 15 m. Pozemok sa oplotí a celý sa zasadí trávou. Jedno balenie trávneho semena vystačí na 50 m². Výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'dĺžka uhlopriečky pozemku (v m)', kind: 'number', points: 1 },
            { id: 's2', label: 'dĺžka oplotenia okolo celého pozemku (v m)', kind: 'number', points: 1 },
            { id: 's3', label: 'obsah pozemku (v m²)', kind: 'number', points: 1 },
            { id: 's4', label: 'počet balení semena potrebných na celý pozemok', kind: 'number', points: 1 },
          ] },
        { id: 'u9', title: 'Úloha 9 (bonus)',
          question: 'Pravouhlý lichobežník má kratšiu základňu 10 cm. Rameno kolmé na základne má 8 cm a šikmé rameno 17 cm. Výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'o koľko cm je dlhšia základňa dlhšia ako kratšia základňa', kind: 'number', points: 1 },
            { id: 's2', label: 'dĺžka dlhšej základne (v cm)', kind: 'number', points: 1 },
            { id: 's3', label: 'obvod lichobežníka (v cm)', kind: 'number', points: 1 },
            { id: 's4', label: 'obsah lichobežníka (v cm²)', kind: 'number', points: 1 },
          ] },
      ],
    },

  },

  bonusTasks: ['u9'],

  reflection: {
    prompt: 'Ako ti išli jednotlivé časti? Označ, nie je to známka.',
    skills: [
      'pojmy a vzorce pre obvod a obsah',
      'vlastnosti trojuholníka a štvoruholníkov',
      'výška a Pytagorova veta',
      'lichobežník, kosoštvorec, kosodĺžnik',
      'slovná úloha s pozemkom',
    ],
  },

  key: {
    A: {
      u1: { s1: '7', s2: '3', s3: '2', s4: '1', s5: '0', s6: '4', s7: '6' },
      u2: { s1: '0', s2: '1', s3: '0', s4: '1', s5: '1', s6: '0' },
      u3: { s1: '15', s2: '36', s3: '54', s4: '36/5' },
      u4: { s1: '15', s2: '120', s3: '50' },
      u5: { s1: '3', s2: '30', s3: '30' },
      u6: { s1: '10', s2: '40', s3: '96' },
      u7: { s1: '120', s2: '64', s3: '120/17' },
      u8: { s1: '30', s2: '84', s3: '432', s4: '12' },
      u9: { s1: '12', s2: '20', s3: '46', s4: '70' },
    },
    B: {
      u1: { s1: '5', s2: '3', s3: '7', s4: '2', s5: '1', s6: '0', s7: '4' },
      u2: { s1: '1', s2: '0', s3: '1', s4: '0', s5: '0', s6: '1' },
      u3: { s1: '17', s2: '40', s3: '60', s4: '120/17' },
      u4: { s1: '12', s2: '60', s3: '36' },
      u5: { s1: '12', s2: '56', s3: '180' },
      u6: { s1: '13', s2: '52', s3: '120' },
      u7: { s1: '168', s2: '98', s3: '168/25' },
      u8: { s1: '25', s2: '70', s3: '300', s4: '6' },
      u9: { s1: '15', s2: '25', s3: '60', s4: '140' },
    },
  },
};
