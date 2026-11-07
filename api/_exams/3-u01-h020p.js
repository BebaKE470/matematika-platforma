// Príprava na písomku 3. ročník · Goniometrické rovnice · hodina 20.
// Rovnice iba so sin a cos: základné, so zloženým argumentom a kvadratické (substitúcia).
//
// Samostatná písomka s JEDNOU skupinou (bez delenia na A a B). Rovnaká štruktúra
// a typy úloh ako ostrá písomka 3-u01-h020, ale iné rovnice. Spúšťa sa osobitne zo
// záznamu 3-u01-h020p v registri; ostrú písomku nijako neovplyvňuje.
//
// Súbor je zámerne MIMO verejných statických súborov (pozri 3-u01-h020.js).
//
// Riešenia sú násobky π. Žiak zapisuje iba koeficient pri π (suffix 'π'), napr. 5π/4 → 5/4.
// Hodnoty v `key`: kind 'number' → reťazec; kind 'set' → pole reťazcov ([] = ∅).
//
// Všetky hodnoty sú overené číselným riešením rovnice na jemnej sieti.

const INTERVAL = '⟨0; 2π)';
const NOTE_U = 'Zaveď substitúciu u = výraz v zátvorke. Riešenia pre u hľadaj v intervale ⟨0; 2π). Pri riešeniach zapisuj iba číslo pred π.';

module.exports = {
  id: '3-u01-h020p',
  title: 'Príprava na písomku: Goniometrické rovnice (sin a cos)',
  minutes: 45,
  instructions: [
    'Toto je príprava na písomku, nie ostrá písomka. Úlohy majú rovnakú stavbu ako v písomke, len iné rovnice.',
    'Úlohy sú rozdelené na kroky. Pri každej úlohe vyplň všetky kroky postupu. Za každý správny krok získaš body, aj keď neskôr urobíš chybu.',
    'Počítaj na papieri a do aplikácie prepisuj výsledky krokov. Riešenia uvedené ako násobok π zapisuj iba číslom pred π: pre 5π/4 napíš 5/4, pre 2π/3 napíš 2/3, pre π napíš 1. Zlomky píš v tvare a/b, desatinné čísla s čiarkou alebo bodkou.',
    'Ak rovnica nemá riešenie, použi pri množine tlačidlo „∅ prázdna množina“.',
    'Odpovede sa ukladajú priebežne. Na konci stlač „Odovzdať“. Úloha 7 je bonusová.',
  ],

  groups: {
    A: {
      tasks: [
        { id: 'u1', title: 'Úloha 1', question: 'Vyrieš v ℝ rovnicu sin x = −√3/2.',
          onlineNote: 'Rovnicu rieš v množine ℝ. Všetky riešenia majú tvar „základné riešenie + p·kπ“, k ∈ ℤ. Zapíš základné riešenia (najmenšie nezáporné hodnoty z jednej periódy, iba číslo pred π) a periódu p.',
          steps: [
            { id: 's1', label: 'Základné riešenia x (najmenšie nezáporné hodnoty z jednej periódy, číslo pred π)', kind: 'set', suffix: 'π', points: 2 },
            { id: 's2', label: 'Perióda p: všetky riešenia majú tvar „základné riešenie + p·kπ“, k ∈ ℤ', kind: 'number', suffix: 'π', points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2', question: 'Zapíš všetky riešenia rovníc: a) sin x = 1, b) cos x = 1,5, c) cos x = 0.',
          steps: [
            { id: 's1', print: true, label: `a) riešenia v intervale ${INTERVAL}`, kind: 'set', suffix: 'π', points: 1 },
            { id: 's2', print: true, label: `b) riešenia v intervale ${INTERVAL}`, kind: 'set', suffix: 'π', points: 1 },
            { id: 's3', print: true, label: `c) riešenia v intervale ${INTERVAL}`, kind: 'set', suffix: 'π', points: 1 },
          ] },
        { id: 'u3', title: 'Úloha 3', question: 'Vyrieš rovnicu cos(x + π/3) = −1/2.', note: NOTE_U,
          steps: [
            { id: 's1', label: `Riešenia pre u v intervale ${INTERVAL}`, kind: 'set', suffix: 'π', points: 1 },
            { id: 's2', print: true, label: `Riešenia x v intervale ${INTERVAL}`, kind: 'set', suffix: 'π', points: 2 },
            { id: 's3', print: true, label: 'Počet riešení v intervale ⟨0; 4π)', kind: 'number', points: 1 },
          ] },
        { id: 'u4', title: 'Úloha 4', question: 'Vyrieš rovnicu cos 2x = −√3/2.',
          note: 'Zaveď substitúciu u = 2x. Ak x patrí do ⟨0; 2π), u prebehne interval ⟨0; 4π). Pri riešeniach zapisuj iba číslo pred π.',
          steps: [
            { id: 's1', label: 'Riešenia pre u = 2x v intervale ⟨0; 4π)', kind: 'set', suffix: 'π', points: 2 },
            { id: 's2', print: true, label: `Riešenia x v intervale ${INTERVAL}`, kind: 'set', suffix: 'π', points: 2 },
            { id: 's3', print: true, label: 'Všetky riešenia sa opakujú po p·π. Aké je p?', kind: 'number', suffix: 'π', points: 1 },
          ] },
        { id: 'u5', title: 'Úloha 5', question: 'Vyrieš rovnicu 2sin²x + sin x − 1 = 0.',
          note: 'Zaveď substitúciu t. Korene t aj riešenia x zapisuj ako čísla (pri x iba číslo pred π).',
          steps: [
            { id: 's1', label: 'Korene kvadratickej rovnice pre t', kind: 'set', points: 1 },
            { id: 's2', label: 'Počet prípustných koreňov (t musí ležať v ⟨−1; 1⟩)', kind: 'number', points: 1 },
            { id: 's3', print: true, label: `Riešenia x v intervale ${INTERVAL}`, kind: 'set', suffix: 'π', points: 2 },
            { id: 's4', print: true, label: 'Počet riešení v intervale ⟨0; 4π)', kind: 'number', points: 1 },
          ] },
        { id: 'u6', title: 'Úloha 6', question: 'Vyrieš rovnicu 2cos²x + 3cos x − 2 = 0.',
          note: 'Zaveď substitúciu t. Jeden z koreňov kvadratickej rovnice nemusí byť prípustný.',
          steps: [
            { id: 's1', label: 'Korene kvadratickej rovnice pre t', kind: 'set', points: 1 },
            { id: 's2', label: 'Prípustné korene (t v ⟨−1; 1⟩)', kind: 'set', points: 1 },
            { id: 's3', print: true, label: `Riešenia x v intervale ${INTERVAL}`, kind: 'set', suffix: 'π', points: 2 },
            { id: 's4', print: true, label: 'Počet riešení v intervale ⟨0; 4π)', kind: 'number', points: 1 },
          ] },
        { id: 'u7', title: 'Úloha 7 (bonus)', question: 'Vyrieš rovnicu 2cos²(x + π/6) + 3cos(x + π/6) − 2 = 0.',
          note: 'Použi dve substitúcie za sebou: najprv t (kvadratická rovnica), potom u (argument). Pri riešeniach pre u a x zapisuj iba číslo pred π.',
          steps: [
            { id: 's1', label: 'Korene kvadratickej rovnice pre t', kind: 'set', points: 1 },
            { id: 's2', label: 'Prípustné korene (t v ⟨−1; 1⟩)', kind: 'set', points: 1 },
            { id: 's3', label: `Riešenia pre u (argument v zátvorke) v intervale ${INTERVAL}`, kind: 'set', suffix: 'π', points: 2 },
            { id: 's4', print: true, label: `Riešenia x v intervale ${INTERVAL}`, kind: 'set', suffix: 'π', points: 2 },
          ] },
      ],
    },
  },

  bonusTasks: ['u7'],

  reflection: {
    prompt: 'Ako ti išli jednotlivé typy rovníc? Označ, nie je to známka.',
    skills: [
      'základné rovnice sin x = a, cos x = a',
      'rovnice so zloženým argumentom',
      'kvadratické rovnice a substitúcia t',
      'výber riešení z intervalu',
    ],
  },

  key: {
    A: {
      u1: { s1: ['4/3', '5/3'], s2: '2' },                                       // sin x = −√3/2
      u2: { s1: ['1/2'], s2: [], s3: ['1/2', '3/2'] },                           // sin=1; cos=1,5 → ∅; cos=0
      u3: { s1: ['2/3', '4/3'], s2: ['1/3', '1'], s3: '4' },                     // u = x + π/3; x = u − π/3
      u4: { s1: ['5/6', '7/6', '17/6', '19/6'], s2: ['5/12', '7/12', '17/12', '19/12'], s3: '1' },
      u5: { s1: ['1/2', '-1'], s2: '2', s3: ['1/6', '5/6', '3/2'], s4: '6' },    // t = 1/2, −1
      u6: { s1: ['1/2', '-2'], s2: ['1/2'], s3: ['1/3', '5/3'], s4: '4' },       // t = 1/2, −2 (nepripustné)
      u7: { s1: ['1/2', '-2'], s2: ['1/2'], s3: ['1/3', '5/3'], s4: ['1/6', '3/2'] },
    },
  },
};
