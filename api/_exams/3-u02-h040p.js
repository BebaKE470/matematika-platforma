// Príprava na kontrolnú písomnú prácu 3. ročník · Planimetria · hodina 40 (celý tematický celok).
// Samostatná písomka s JEDNOU skupinou (bez delenia na A a B). Rovnaká štruktúra a typy úloh ako
// ostrá písomka 3-u02-h040b, ale iné čísla a texty. Spúšťa sa osobitne zo záznamu 3-u02-h040p.
//
// Súbor je zámerne MIMO verejných statických súborov (pozri 3-u02-h040b.js). Pri kruhu žiak zapisuje
// koeficient pri π (suffix 'π').

const TRUTH = ['pravda', 'nepravda'];
const F40_P = [
  'S = π r²',
  'S = a · v_a',
  'počet uhlopriečok = n(n − 3) / 2',
  'S = (a + c) · v / 2',
  'o = 2π r',
  'S = e · f / 2',
  'súčet vnútorných uhlov = (n − 2) · 180°',
  'S = a · v_a / 2',
];

module.exports = {
  id: '3-u02-h040p',
  title: 'Príprava na písomku: Planimetria',
  minutes: 45,
  printStepLabels: true,
  instructions: [
    'Toto je príprava na písomku, nie ostrá písomka. Úlohy majú rovnakú stavbu ako v písomke, len iné čísla.',
    'Úlohy sú rozdelené na kroky. Pri každej úlohe vyplň všetky kroky. Za každý správny krok získaš body, aj keď neskôr urobíš chybu.',
    'Počítaj na papieri a do aplikácie prepisuj výsledky krokov. Jednotky nezapisuj, sú uvedené v zadaní. Výsledky zapisuj presne ako celé čísla alebo zlomky v tvare a/b (desatinné čísla s čiarkou alebo bodkou).',
    'Pri kruhu zapisuj iba číslo pred π: pre 25π napíš 25, pre 5π/2 napíš 5/2.',
    'Odpovede sa ukladajú priebežne. Na konci stlač „Odovzdať“. Úloha 9 je bonusová.',
  ],

  groups: {
    A: {
      tasks: [
        { id: 'u1', title: 'Úloha 1: Vzorce a útvary',
          question: 'Ku každému pojmu vyber správny vzorec. Používame bežné označenie: a, c sú strany, v výška, v_a výška na stranu a, r polomer, n počet strán. Dva vzorce sú navyše.',
          steps: [
            { id: 's1', label: 'súčet vnútorných uhlov n-uholníka', kind: 'choice', options: F40_P, points: 1 },
            { id: 's2', label: 'obsah kruhu s polomerom r', kind: 'choice', options: F40_P, points: 1 },
            { id: 's3', label: 'obsah lichobežníka so základňami a, c a výškou v', kind: 'choice', options: F40_P, points: 1 },
            { id: 's4', label: 'počet uhlopriečok n-uholníka', kind: 'choice', options: F40_P, points: 1 },
            { id: 's5', label: 'obsah trojuholníka so stranou a a výškou v_a na ňu', kind: 'choice', options: F40_P, points: 1 },
            { id: 's6', label: 'obvod kruhu s polomerom r', kind: 'choice', options: F40_P, points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2: Vlastnosti útvarov',
          question: 'Pri každom tvrdení vyber, či je pravdivé alebo nepravdivé.',
          steps: [
            { id: 's1', label: 'Uhlopriečky štvorca sú rovnako dlhé a na seba kolmé.', kind: 'choice', options: TRUTH, points: 1 },
            { id: 's2', label: 'Pravidelný mnohouholník má všetky strany rovnako dlhé aj všetky vnútorné uhly rovnaké.', kind: 'choice', options: TRUTH, points: 1 },
            { id: 's3', label: 'Obsah kruhu s polomerom r je 2πr.', kind: 'choice', options: TRUTH, points: 1 },
            { id: 's4', label: 'Každý rovnobežník je obdĺžnik.', kind: 'choice', options: TRUTH, points: 1 },
            { id: 's5', label: 'Súčet vnútorných uhlov päťuholníka je 540°.', kind: 'choice', options: TRUTH, points: 1 },
          ] },
        { id: 'u3', title: 'Úloha 3: Kosoštvorec a lichobežník',
          question: 'a) Kosoštvorec má uhlopriečky 24 cm a 32 cm. b) Rovnoramenný lichobežník má základne 24 cm a 12 cm a ramená dlhé 10 cm. Výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'a) dĺžka strany kosoštvorca (v cm)', kind: 'number', points: 1 },
            { id: 's2', label: 'a) obvod kosoštvorca (v cm)', kind: 'number', points: 1 },
            { id: 's3', label: 'a) obsah kosoštvorca (v cm²)', kind: 'number', points: 1 },
            { id: 's4', label: 'b) výška lichobežníka (v cm)', kind: 'number', points: 1 },
            { id: 's5', label: 'b) obsah lichobežníka (v cm²)', kind: 'number', points: 1 },
          ] },
        { id: 'u4', title: 'Úloha 4: Zložený útvar',
          question: 'Pozemok tvaru písmena L vznikol z obdĺžnika s rozmermi 25 m a 16 m tak, že sa z jeho rohu odstránil obdĺžnik s rozmermi 10 m a 9 m. Výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'obsah pôvodného veľkého obdĺžnika (v m²)', kind: 'number', points: 1 },
            { id: 's2', label: 'obsah odstráneného obdĺžnika (v m²)', kind: 'number', points: 1 },
            { id: 's3', label: 'obsah pozemku tvaru L (v m²)', kind: 'number', points: 1 },
            { id: 's4', label: 'obvod pozemku tvaru L (v m)', kind: 'number', points: 1 },
          ] },
        { id: 'u5', title: 'Úloha 5: Štít domu',
          question: 'Stena domu sa skladá z obdĺžnika so šírkou 24 m a výškou 4 m a z rovnoramenného trojuholníka (štítu) nad ním. Základňa štítu má 24 m a každé jeho rameno 13 m. Výsledky zapisuj bez jednotiek.',
          steps: [
            { id: 's1', label: 'výška štítu (v m)', kind: 'number', points: 1 },
            { id: 's2', label: 'obsah štítu (v m²)', kind: 'number', points: 1 },
            { id: 's3', label: 'obsah celej steny (v m²)', kind: 'number', points: 1 },
          ] },
        { id: 'u6', title: 'Úloha 6: Pravidelné mnohouholníky',
          question: 'a) Uvažuj pravidelný desaťuholník. b) Vnútorný uhol iného pravidelného mnohouholníka má 156°. c) Obvod pravidelného osemuholníka je 30 cm.',
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
            { id: 's1', label: 'obsah kruhu s polomerom 8 cm (v cm², číslo pred π)', kind: 'number', suffix: 'π', points: 1 },
            { id: 's2', label: 'obvod kruhu s priemerom 20 cm (v cm, číslo pred π)', kind: 'number', suffix: 'π', points: 1 },
            { id: 's3', label: 'obsah kruhového výseku s polomerom 6 cm a stredovým uhlom 120° (v cm², číslo pred π)', kind: 'number', suffix: 'π', points: 1 },
            { id: 's4', label: 'dĺžka oblúka toho istého výseku (v cm, číslo pred π)', kind: 'number', suffix: 'π', points: 1 },
            { id: 's5', label: 'obsah medzikružia s polomermi 10 cm a 8 cm (v cm², číslo pred π)', kind: 'number', suffix: 'π', points: 1 },
          ] },
        { id: 'u8', title: 'Úloha 8: Dlažba',
          question: 'Obdĺžnikovú izbu s rozmermi 9 m a 5 m treba celú vydláždiť štvorcovými dlaždicami so stranou 30 cm. Dlaždice sa predávajú v baleniach po 10 kusov, jedno balenie stojí 12 €. Odpad a škáry nezapočítavaj.',
          steps: [
            { id: 's1', label: 'obsah podlahy izby (v m²)', kind: 'number', points: 1 },
            { id: 's2', label: 'obsah jednej dlaždice (v m²); zapíš ako zlomok alebo desatinné číslo', kind: 'number', points: 1 },
            { id: 's3', label: 'počet potrebných dlaždíc', kind: 'number', points: 1 },
            { id: 's4', label: 'cena za všetky potrebné balenia (v €)', kind: 'number', points: 1 },
          ] },
        { id: 'u9', title: 'Úloha 9 (bonus)',
          question: 'Rovnoramenný trojuholník má základňu 20 cm a každé rameno 26 cm. Výsledky zapisuj bez jednotiek.',
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
      u1: { s1: '6', s2: '0', s3: '3', s4: '2', s5: '7', s6: '4' },
      u2: { s1: '0', s2: '0', s3: '1', s4: '1', s5: '0' },
      u3: { s1: '20', s2: '80', s3: '384', s4: '8', s5: '144' },
      u4: { s1: '400', s2: '90', s3: '310', s4: '82' },
      u5: { s1: '5', s2: '60', s3: '156' },
      u6: { s1: '1440', s2: '144', s3: '35', s4: '15', s5: '15/4' },
      u7: { s1: '64', s2: '20', s3: '12', s4: '4', s5: '36' },
      u8: { s1: '45', s2: '9/100', s3: '500', s4: '600' },
      u9: { s1: '24', s2: '240', s3: '240/13' },
    },
  },
};
