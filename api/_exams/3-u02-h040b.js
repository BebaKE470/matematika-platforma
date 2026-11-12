// Kontrolná písomná práca 3. ročník · Planimetria · hodina 40 (celý tematický celok, hodiny 22–39).
//
// Súbor je zámerne MIMO verejných statických súborov: zadania aj kľúč číta len api/exam.js a vydá ich
// iba prihlásenej učiteľke. Skupiny A a B majú rovnaké id úloh a krokov, rovnaké kind a points.
// Všetky čísla sú volené tak, aby výsledky vyšli presne; pri kruhu žiak zapisuje koeficient pri π
// (suffix 'π'). Žiadne obrázky: všetko je zadané slovne.

const TRUTH = ['pravda', 'nepravda'];
const F40_A = [
  'súčet vnútorných uhlov = (n − 2) · 180°',
  'S = π r²',
  'S = a · v_a / 2',
  'o = 2π r',
  'počet uhlopriečok = n(n − 3) / 2',
  'S = e · f / 2',
  'S = (a + c) · v / 2',
  'S = a · v_a',
];
const F40_B = [
  'S = (a + c) · v / 2',
  'počet uhlopriečok = n(n − 3) / 2',
  'S = a · v_a',
  'o = 2π r',
  'S = e · f / 2',
  'súčet vnútorných uhlov = (n − 2) · 180°',
  'S = π r²',
  'S = a · v_a / 2',
];

module.exports = {
  id: '3-u02-h040b',
  title: 'Planimetria: kontrolná písomná práca',
  minutes: 45,
  printStepLabels: true,
  instructions: [
    'Úlohy sú rozdelené na kroky. Pri každej úlohe vyplň všetky kroky. Za každý správny krok získaš body, aj keď neskôr urobíš chybu.',
    'Počítaj na papieri a do aplikácie prepisuj výsledky krokov. Jednotky nezapisuj, sú uvedené v zadaní. Výsledky zapisuj presne ako celé čísla alebo zlomky v tvare a/b (desatinné čísla s čiarkou alebo bodkou).',
    'Pri kruhu zapisuj iba číslo pred π: pre 25π napíš 25, pre 5π/2 napíš 5/2.',
    'Odpovede sa ukladajú priebežne. Na konci stlač „Odovzdať“. Bonusová úloha nie je povinná.',
  ],

  groups: {
    A: {
      tasks: [
        { id: 'u1', title: 'Úloha 1: Vzorce a útvary',
          question: 'Ku každému pojmu vyber správny vzorec. Používame bežné označenie: a, c sú strany, v výška, v_a výška na stranu a, r polomer, n počet strán. Dva vzorce sú navyše.',
          steps: [
            { id: 's1', label: 'obsah trojuholníka so stranou a a výškou v_a na ňu', kind: 'choice', options: F40_A, points: 1 },
            { id: 's2', label: 'obvod kruhu s polomerom r', kind: 'choice', options: F40_A, points: 1 },
            { id: 's3', label: 'súčet vnútorných uhlov n-uholníka', kind: 'choice', options: F40_A, points: 1 },
            { id: 's4', label: 'obsah lichobežníka so základňami a, c a výškou v', kind: 'choice', options: F40_A, points: 1 },
            { id: 's5', label: 'počet uhlopriečok n-uholníka', kind: 'choice', options: F40_A, points: 1 },
            { id: 's6', label: 'obsah kruhu s polomerom r', kind: 'choice', options: F40_A, points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2: Vlastnosti útvarov',
          question: 'Pri každom tvrdení vyber, či je pravdivé alebo nepravdivé.',
          steps: [
            { id: 's1', label: 'Pravidelný mnohouholník má všetky strany rovnako dlhé aj všetky vnútorné uhly rovnaké.', kind: 'choice', options: TRUTH, points: 1 },
            { id: 's2', label: 'Každý lichobežník je rovnobežník.', kind: 'choice', options: TRUTH, points: 1 },
            { id: 's3', label: 'Obvod kruhu s polomerom r je 2πr.', kind: 'choice', options: TRUTH, points: 1 },
            { id: 's4', label: 'Ak sa polomer kruhu zdvojnásobí, jeho obsah sa zdvojnásobí.', kind: 'choice', options: TRUTH, points: 1 },
            { id: 's5', label: 'Uhlopriečky obdĺžnika sú na seba vždy kolmé.', kind: 'choice', options: TRUTH, points: 1 },
          ] },
        { id: 'u3', title: 'Úloha 3: Kosoštvorec a lichobežník',
          question: 'a) Kosoštvorec má uhlopriečky 30 cm a 16 cm. b) Rovnoramenný lichobežník má základne 26 cm a 10 cm a ramená dlhé 10 cm. Výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'a) dĺžka strany kosoštvorca (v cm)', kind: 'number', points: 1 },
            { id: 's2', label: 'a) obvod kosoštvorca (v cm)', kind: 'number', points: 1 },
            { id: 's3', label: 'a) obsah kosoštvorca (v cm²)', kind: 'number', points: 1 },
            { id: 's4', label: 'b) výška lichobežníka (v cm)', kind: 'number', points: 1 },
            { id: 's5', label: 'b) obsah lichobežníka (v cm²)', kind: 'number', points: 1 },
          ] },
        { id: 'u4', title: 'Úloha 4: Zložený útvar',
          question: 'Pozemok tvaru písmena L vznikol z obdĺžnika s rozmermi 20 m a 14 m tak, že sa z jeho rohu odstránil obdĺžnik s rozmermi 8 m a 6 m. Výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'obsah pôvodného veľkého obdĺžnika (v m²)', kind: 'number', points: 1 },
            { id: 's2', label: 'obsah odstráneného obdĺžnika (v m²)', kind: 'number', points: 1 },
            { id: 's3', label: 'obsah pozemku tvaru L (v m²)', kind: 'number', points: 1 },
            { id: 's4', label: 'obvod pozemku tvaru L (v m)', kind: 'number', points: 1 },
          ] },
        { id: 'u5', title: 'Úloha 5: Štít domu',
          question: 'Stena domu sa skladá z obdĺžnika so šírkou 10 m a výškou 6 m a z rovnoramenného trojuholníka (štítu) nad ním. Základňa štítu má 10 m a každé jeho rameno 13 m. Výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'výška štítu (v m)', kind: 'number', points: 1 },
            { id: 's2', label: 'obsah štítu (v m²)', kind: 'number', points: 1 },
            { id: 's3', label: 'obsah celej steny (v m²)', kind: 'number', points: 1 },
          ] },
        { id: 'u6', title: 'Úloha 6: Pravidelné mnohouholníky',
          question: 'a) Uvažuj pravidelný osemuholník. b) Vnútorný uhol iného pravidelného mnohouholníka má 150°. c) Obvod pravidelného šesťuholníka je 54 cm.',
          steps: [
            { id: 's1', label: 'a) súčet všetkých vnútorných uhlov (v stupňoch)', kind: 'number', points: 1 },
            { id: 's2', label: 'a) veľkosť jedného vnútorného uhla (v stupňoch)', kind: 'number', points: 1 },
            { id: 's3', label: 'a) počet všetkých uhlopriečok', kind: 'number', points: 1 },
            { id: 's4', label: 'b) počet strán tohto mnohouholníka', kind: 'number', points: 2 },
            { id: 's5', label: 'c) dĺžka jednej strany (v cm); zapíš ako zlomok alebo číslo', kind: 'number', points: 1 },
          ] },
        { id: 'u7', title: 'Úloha 7: Kruh a jeho časti',
          question: 'Výsledky zapisuj ako násobok π: pre 25π napíš iba 25 (číslo pred π). Jednotky nezapisuj.',
          steps: [
            { id: 's1', label: 'obsah kruhu s polomerom 9 cm (v cm², číslo pred π)', kind: 'number', suffix: 'π', points: 1 },
            { id: 's2', label: 'obvod kruhu s priemerom 14 cm (v cm, číslo pred π)', kind: 'number', suffix: 'π', points: 1 },
            { id: 's3', label: 'obsah kruhového výseku s polomerom 10 cm a stredovým uhlom 90° (v cm², číslo pred π)', kind: 'number', suffix: 'π', points: 1 },
            { id: 's4', label: 'dĺžka oblúka toho istého výseku (v cm, číslo pred π)', kind: 'number', suffix: 'π', points: 1 },
            { id: 's5', label: 'obsah medzikružia s polomermi 7 cm a 5 cm (v cm², číslo pred π)', kind: 'number', suffix: 'π', points: 1 },
          ] },
        { id: 'u8', title: 'Úloha 8: Dlažba',
          question: 'Obdĺžnikovú izbu s rozmermi 6 m a 4 m treba celú vydláždiť štvorcovými dlaždicami so stranou 50 cm. Dlaždice sa predávajú v baleniach po 4 kusov, jedno balenie stojí 7 €. Odpad a škáry nezapočítavaj.',
          steps: [
            { id: 's1', label: 'obsah podlahy izby (v m²)', kind: 'number', points: 1 },
            { id: 's2', label: 'obsah jednej dlaždice (v m²); zapíš ako zlomok alebo desatinné číslo', kind: 'number', points: 1 },
            { id: 's3', label: 'počet potrebných dlaždíc', kind: 'number', points: 1 },
            { id: 's4', label: 'cena za všetky potrebné balenia (v €)', kind: 'number', points: 1 },
          ] },
        { id: 'u9', title: 'Úloha 9 (bonus)',
          question: 'Rovnoramenný trojuholník má základňu 16 cm a každé rameno 10 cm. Výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'výška na základňu (v cm)', kind: 'number', points: 1 },
            { id: 's2', label: 'obsah trojuholníka (v cm²)', kind: 'number', points: 1 },
            { id: 's3', label: 'výška na rameno (v cm); zapíš ako zlomok alebo číslo', kind: 'number', points: 1 },
          ] },
      ],
    },

    B: {
      tasks: [
        { id: 'u1', title: 'Úloha 1: Vzorce a útvary',
          question: 'Ku každému pojmu vyber správny vzorec. Používame bežné označenie: a, c sú strany, v výška, v_a výška na stranu a, r polomer, n počet strán. Dva vzorce sú navyše.',
          steps: [
            { id: 's1', label: 'počet uhlopriečok n-uholníka', kind: 'choice', options: F40_B, points: 1 },
            { id: 's2', label: 'obsah kosodĺžnika so stranou a a výškou v_a na ňu', kind: 'choice', options: F40_B, points: 1 },
            { id: 's3', label: 'obsah kruhu s polomerom r', kind: 'choice', options: F40_B, points: 1 },
            { id: 's4', label: 'súčet vnútorných uhlov n-uholníka', kind: 'choice', options: F40_B, points: 1 },
            { id: 's5', label: 'obsah lichobežníka so základňami a, c a výškou v', kind: 'choice', options: F40_B, points: 1 },
            { id: 's6', label: 'obvod kruhu s polomerom r', kind: 'choice', options: F40_B, points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2: Vlastnosti útvarov',
          question: 'Pri každom tvrdení vyber, či je pravdivé alebo nepravdivé.',
          steps: [
            { id: 's1', label: 'Každý mnohouholník, ktorý má všetky strany rovnako dlhé, je pravidelný.', kind: 'choice', options: TRUTH, points: 1 },
            { id: 's2', label: 'Každý obdĺžnik je rovnobežník.', kind: 'choice', options: TRUTH, points: 1 },
            { id: 's3', label: 'Obvod kruhu s polomerom r je πr².', kind: 'choice', options: TRUTH, points: 1 },
            { id: 's4', label: 'Ak sa polomer kruhu zdvojnásobí, jeho obsah sa zväčší štyrikrát.', kind: 'choice', options: TRUTH, points: 1 },
            { id: 's5', label: 'Uhlopriečky kosoštvorca sú na seba kolmé.', kind: 'choice', options: TRUTH, points: 1 },
          ] },
        { id: 'u3', title: 'Úloha 3: Kosoštvorec a lichobežník',
          question: 'a) Kosoštvorec má uhlopriečky 18 cm a 24 cm. b) Rovnoramenný lichobežník má základne 22 cm a 10 cm a ramená dlhé 10 cm. Výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'a) dĺžka strany kosoštvorca (v cm)', kind: 'number', points: 1 },
            { id: 's2', label: 'a) obvod kosoštvorca (v cm)', kind: 'number', points: 1 },
            { id: 's3', label: 'a) obsah kosoštvorca (v cm²)', kind: 'number', points: 1 },
            { id: 's4', label: 'b) výška lichobežníka (v cm)', kind: 'number', points: 1 },
            { id: 's5', label: 'b) obsah lichobežníka (v cm²)', kind: 'number', points: 1 },
          ] },
        { id: 'u4', title: 'Úloha 4: Zložený útvar',
          question: 'Pozemok tvaru písmena L vznikol z obdĺžnika s rozmermi 18 m a 15 m tak, že sa z jeho rohu odstránil obdĺžnik s rozmermi 7 m a 5 m. Výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'obsah pôvodného veľkého obdĺžnika (v m²)', kind: 'number', points: 1 },
            { id: 's2', label: 'obsah odstráneného obdĺžnika (v m²)', kind: 'number', points: 1 },
            { id: 's3', label: 'obsah pozemku tvaru L (v m²)', kind: 'number', points: 1 },
            { id: 's4', label: 'obvod pozemku tvaru L (v m)', kind: 'number', points: 1 },
          ] },
        { id: 'u5', title: 'Úloha 5: Štít domu',
          question: 'Stena domu sa skladá z obdĺžnika so šírkou 16 m a výškou 5 m a z rovnoramenného trojuholníka (štítu) nad ním. Základňa štítu má 16 m a každé jeho rameno 17 m. Výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'výška štítu (v m)', kind: 'number', points: 1 },
            { id: 's2', label: 'obsah štítu (v m²)', kind: 'number', points: 1 },
            { id: 's3', label: 'obsah celej steny (v m²)', kind: 'number', points: 1 },
          ] },
        { id: 'u6', title: 'Úloha 6: Pravidelné mnohouholníky',
          question: 'a) Uvažuj pravidelný deväťuholník. b) Vnútorný uhol iného pravidelného mnohouholníka má 144°. c) Obvod pravidelného päťuholníka je 35 cm.',
          steps: [
            { id: 's1', label: 'a) súčet všetkých vnútorných uhlov (v stupňoch)', kind: 'number', points: 1 },
            { id: 's2', label: 'a) veľkosť jedného vnútorného uhla (v stupňoch)', kind: 'number', points: 1 },
            { id: 's3', label: 'a) počet všetkých uhlopriečok', kind: 'number', points: 1 },
            { id: 's4', label: 'b) počet strán tohto mnohouholníka', kind: 'number', points: 2 },
            { id: 's5', label: 'c) dĺžka jednej strany (v cm); zapíš ako zlomok alebo číslo', kind: 'number', points: 1 },
          ] },
        { id: 'u7', title: 'Úloha 7: Kruh a jeho časti',
          question: 'Výsledky zapisuj ako násobok π: pre 25π napíš iba 25 (číslo pred π). Jednotky nezapisuj.',
          steps: [
            { id: 's1', label: 'obsah kruhu s polomerom 11 cm (v cm², číslo pred π)', kind: 'number', suffix: 'π', points: 1 },
            { id: 's2', label: 'obvod kruhu s priemerom 18 cm (v cm, číslo pred π)', kind: 'number', suffix: 'π', points: 1 },
            { id: 's3', label: 'obsah kruhového výseku s polomerom 12 cm a stredovým uhlom 60° (v cm², číslo pred π)', kind: 'number', suffix: 'π', points: 1 },
            { id: 's4', label: 'dĺžka oblúka toho istého výseku (v cm, číslo pred π)', kind: 'number', suffix: 'π', points: 1 },
            { id: 's5', label: 'obsah medzikružia s polomermi 9 cm a 6 cm (v cm², číslo pred π)', kind: 'number', suffix: 'π', points: 1 },
          ] },
        { id: 'u8', title: 'Úloha 8: Dlažba',
          question: 'Obdĺžnikovú izbu s rozmermi 8 m a 5 m treba celú vydláždiť štvorcovými dlaždicami so stranou 40 cm. Dlaždice sa predávajú v baleniach po 5 kusov, jedno balenie stojí 9 €. Odpad a škáry nezapočítavaj.',
          steps: [
            { id: 's1', label: 'obsah podlahy izby (v m²)', kind: 'number', points: 1 },
            { id: 's2', label: 'obsah jednej dlaždice (v m²); zapíš ako zlomok alebo desatinné číslo', kind: 'number', points: 1 },
            { id: 's3', label: 'počet potrebných dlaždíc', kind: 'number', points: 1 },
            { id: 's4', label: 'cena za všetky potrebné balenia (v €)', kind: 'number', points: 1 },
          ] },
        { id: 'u9', title: 'Úloha 9 (bonus)',
          question: 'Rovnoramenný trojuholník má základňu 30 cm a každé rameno 17 cm. Výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'výška na základňu (v cm)', kind: 'number', points: 1 },
            { id: 's2', label: 'obsah trojuholníka (v cm²)', kind: 'number', points: 1 },
            { id: 's3', label: 'výška na rameno (v cm); zapíš ako zlomok alebo číslo', kind: 'number', points: 1 },
          ] },
      ],
    },

  },

  bonusTasks: ['u9'],

  reflection: {
    prompt: 'Ako ti išli jednotlivé časti? Označ, nie je to známka.',
    skills: [
      'vzorce a vlastnosti útvarov',
      'štvoruholníky a trojuholník',
      'zložené útvary',
      'pravidelné mnohouholníky a ich uhly',
      'kruh a jeho časti',
      'slovná úloha z praxe',
    ],
  },

  key: {
    A: {
      u1: { s1: '2', s2: '3', s3: '0', s4: '6', s5: '4', s6: '1' },
      u2: { s1: '0', s2: '1', s3: '0', s4: '1', s5: '1' },
      u3: { s1: '17', s2: '68', s3: '240', s4: '6', s5: '108' },
      u4: { s1: '280', s2: '48', s3: '232', s4: '68' },
      u5: { s1: '12', s2: '60', s3: '120' },
      u6: { s1: '1080', s2: '135', s3: '20', s4: '12', s5: '9' },
      u7: { s1: '81', s2: '14', s3: '25', s4: '5', s5: '24' },
      u8: { s1: '24', s2: '1/4', s3: '96', s4: '168' },
      u9: { s1: '6', s2: '48', s3: '48/5' },
    },
    B: {
      u1: { s1: '1', s2: '2', s3: '6', s4: '5', s5: '0', s6: '3' },
      u2: { s1: '1', s2: '0', s3: '1', s4: '0', s5: '0' },
      u3: { s1: '15', s2: '60', s3: '216', s4: '8', s5: '128' },
      u4: { s1: '270', s2: '35', s3: '235', s4: '66' },
      u5: { s1: '15', s2: '120', s3: '200' },
      u6: { s1: '1260', s2: '140', s3: '27', s4: '10', s5: '7' },
      u7: { s1: '121', s2: '18', s3: '24', s4: '4', s5: '45' },
      u8: { s1: '40', s2: '4/25', s3: '250', s4: '450' },
      u9: { s1: '8', s2: '120', s3: '240/17' },
    },
  },
};
