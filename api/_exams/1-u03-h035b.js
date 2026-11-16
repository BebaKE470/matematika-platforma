// Písomka 1. ročník · Čísla, premenné, výrazy · po hodine 35 (počítanie a úpravy zlomkov),
// skupiny A a B. Krátka písomka, cca 20 min.
//
// Súbor je zámerne MIMO verejných statických súborov: zadania aj kľúč číta len
// api/exam.js a vydá ich iba prihlásenej učiteľke (pozri 1-u03-h032b.js).
// Skupiny A a B majú rovnaké id úloh a krokov, rovnaké `kind` a `points`.
// Čísla sa nezhodujú s verejným modulom 35-pocitanie-s-realnymi-cislami.js.
//
// Všetky kroky sú kind 'number'; kľúč je celé číslo alebo zlomok a/b (porovnáva sa hodnota
// zlomku, takže aj nekrátený tvar je uznaný). Zmiešané číslo sa zapisovať nesmie.

const NOTE_NUM = 'Výsledok zapíš ako celé číslo alebo zlomok a/b (napr. 3/4). Zmiešané číslo nepíš.';

module.exports = {
  id: '1-u03-h035b',
  title: 'Čísla, premenné, výrazy: počítanie so zlomkami',
  minutes: 20,
  printStepLabels: true,
  instructions: [
    'Úlohy sú rozdelené na kroky. Pri každej úlohe vyplň všetky kroky. Za každý správny krok získaš body, aj keď neskôr urobíš chybu.',
    'Počítaj na papieri a do aplikácie prepisuj výsledky krokov. Výsledok zapíš ako celé číslo alebo zlomok a/b (napr. 3/4 alebo −5/6); môžeš aj desatinné číslo, ak je presné. Porovnáva sa hodnota, ale zlomok radšej skráť na základný tvar.',
    'Zmiešané číslo (napr. 2 1/4) do aplikácie nepíš: medzera by sa ignorovala a vyšlo by 21/4. Namiesto toho napíš nepravý zlomok (9/4).',
    'Odpovede sa ukladajú priebežne. Na konci stlač „Odovzdať“. Bonusová úloha nie je povinná.',
  ],

  groups: {
    A: {
      tasks: [
        { id: 'u1', title: 'Úloha 1: Rozšírenie, krátenie, základný tvar',
          question: 'Pracuj so zlomkami. Výsledky zlomkov zapíš v základnom tvare.', onlineNote: NOTE_NUM,
          steps: [
            { id: 's1', label: 'Zlomok 32/80 uprav na základný tvar', kind: 'number', points: 1 },
            { id: 's2', label: 'Doplň čitateľa: 4/9 = □/54', kind: 'number', points: 1 },
            { id: 's3', label: 'Zlomok 84/126 uprav na základný tvar', kind: 'number', points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2: Sčítanie a odčítanie',
          question: 'Zlomky s rôznymi menovateľmi najprv uprav na spoločný menovateľ.', onlineNote: NOTE_NUM,
          steps: [
            { id: 's1', label: 'Najmenší spoločný menovateľ zlomkov s menovateľmi 6 a 15', kind: 'number', points: 1 },
            { id: 's2', label: '1/6 + 4/15', kind: 'number', points: 1 },
            { id: 's3', label: '7/8 − 3/10', kind: 'number', points: 1 },
            { id: 's4', label: '2/3 + 1/4 − 5/6', kind: 'number', points: 1 },
          ] },
        { id: 'u3', title: 'Úloha 3: Násobenie a delenie',
          question: 'Pred násobením skracuj. Pri delení použi prevrátený zlomok.', onlineNote: NOTE_NUM,
          steps: [
            { id: 's1', label: '5/6 · 9/10', kind: 'number', points: 1 },
            { id: 's2', label: 'Čitateľ prevráteného zlomku k zlomku 4/7', kind: 'number', points: 1 },
            { id: 's3', label: '3/5 : 9/10', kind: 'number', points: 1 },
            { id: 's4', label: '8 · 5/12', kind: 'number', points: 1 },
          ] },
        { id: 'u4', title: 'Úloha 4: Zmiešané čísla',
          question: 'Zmiešané číslo najprv zapíš ako nepravý zlomok. Výsledky píš ako zlomok a/b, nie ako zmiešané číslo.', onlineNote: NOTE_NUM,
          steps: [
            { id: 's1', label: 'Čitateľ nepravého zlomku s menovateľom 4, ktorý sa rovná číslu 2 3/4', kind: 'number', points: 1 },
            { id: 's2', label: 'Celá časť zmiešaného čísla, ktoré sa rovná zlomku 23/6', kind: 'number', points: 1 },
            { id: 's3', label: '1 1/2 + 2 2/3', kind: 'number', points: 1 },
            { id: 's4', label: '3 1/3 · 3/5', kind: 'number', points: 1 },
          ] },
        { id: 'u5', title: 'Úloha 5: Poradie operácií',
          question: 'Najprv zátvorky, potom násobenie a delenie, nakoniec sčítanie a odčítanie. Výraz 1: 1/3 + 3/4 · 2/9. Výraz 2: (5/6 − 1/3) : 1/4.', onlineNote: NOTE_NUM,
          steps: [
            { id: 's1', label: 'Výraz 1: hodnota súčinu 3/4 · 2/9', kind: 'number', points: 1 },
            { id: 's2', label: 'Výraz 1: výsledok celého výrazu', kind: 'number', points: 1 },
            { id: 's3', label: 'Výraz 2: hodnota zátvorky 5/6 − 1/3', kind: 'number', points: 1 },
            { id: 's4', label: 'Výraz 2: výsledok celého výrazu', kind: 'number', points: 1 },
          ] },
        { id: 'u6', title: 'Úloha 6: Slovná úloha',
          question: 'Nádrž je naplnená na 5/12 svojho objemu. Potom sa do nej doleje ďalšia 1/3 objemu nádrže. Celá nádrž má objem 240 litrov.', onlineNote: NOTE_NUM,
          steps: [
            { id: 's1', label: 'Akú časť nádrže zaberá voda po dolievaní?', kind: 'number', points: 1 },
            { id: 's2', label: 'Akú časť nádrže ešte chýba do plnej?', kind: 'number', points: 1 },
            { id: 's3', label: 'Koľko litrov ešte chýba do plnej nádrže?', kind: 'number', points: 1 },
          ] },
        { id: 'u7', title: 'Úloha 7 (bonus): Zložené zlomky',
          question: 'Zlomok v čitateli alebo v menovateli počítaj ako delenie. Výsledky zapíš ako a/b.', onlineNote: NOTE_NUM,
          steps: [
            { id: 's1', label: '(2/3 − 1/2) : (1/4 + 1/12)', kind: 'number', points: 1 },
            { id: 's2', label: '1 : (1 + 1 : (1 + 1/3))', kind: 'number', points: 1 },
          ] },
      ],
    },

    B: {
      tasks: [
        { id: 'u1', title: 'Úloha 1: Rozšírenie, krátenie, základný tvar',
          question: 'Pracuj so zlomkami. Výsledky zlomkov zapíš v základnom tvare.', onlineNote: NOTE_NUM,
          steps: [
            { id: 's1', label: 'Zlomok 45/105 uprav na základný tvar', kind: 'number', points: 1 },
            { id: 's2', label: 'Doplň čitateľa: 5/6 = □/48', kind: 'number', points: 1 },
            { id: 's3', label: 'Zlomok 60/165 uprav na základný tvar', kind: 'number', points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2: Sčítanie a odčítanie',
          question: 'Zlomky s rôznymi menovateľmi najprv uprav na spoločný menovateľ.', onlineNote: NOTE_NUM,
          steps: [
            { id: 's1', label: 'Najmenší spoločný menovateľ zlomkov s menovateľmi 10 a 25', kind: 'number', points: 1 },
            { id: 's2', label: '1/10 + 3/25', kind: 'number', points: 1 },
            { id: 's3', label: '5/6 − 3/8', kind: 'number', points: 1 },
            { id: 's4', label: '1/2 + 2/3 − 3/4', kind: 'number', points: 1 },
          ] },
        { id: 'u3', title: 'Úloha 3: Násobenie a delenie',
          question: 'Pred násobením skracuj. Pri delení použi prevrátený zlomok.', onlineNote: NOTE_NUM,
          steps: [
            { id: 's1', label: '7/8 · 12/21', kind: 'number', points: 1 },
            { id: 's2', label: 'Čitateľ prevráteného zlomku k zlomku 5/9', kind: 'number', points: 1 },
            { id: 's3', label: '4/7 : 8/21', kind: 'number', points: 1 },
            { id: 's4', label: '9 · 5/6', kind: 'number', points: 1 },
          ] },
        { id: 'u4', title: 'Úloha 4: Zmiešané čísla',
          question: 'Zmiešané číslo najprv zapíš ako nepravý zlomok. Výsledky píš ako zlomok a/b, nie ako zmiešané číslo.', onlineNote: NOTE_NUM,
          steps: [
            { id: 's1', label: 'Čitateľ nepravého zlomku s menovateľom 3, ktorý sa rovná číslu 4 1/3', kind: 'number', points: 1 },
            { id: 's2', label: 'Celá časť zmiešaného čísla, ktoré sa rovná zlomku 29/4', kind: 'number', points: 1 },
            { id: 's3', label: '2 1/4 + 1 5/6', kind: 'number', points: 1 },
            { id: 's4', label: '1 3/4 · 2/7', kind: 'number', points: 1 },
          ] },
        { id: 'u5', title: 'Úloha 5: Poradie operácií',
          question: 'Najprv zátvorky, potom násobenie a delenie, nakoniec sčítanie a odčítanie. Výraz 1: 2/3 + 5/6 · 3/5. Výraz 2: (3/4 − 1/6) : 7/12.', onlineNote: NOTE_NUM,
          steps: [
            { id: 's1', label: 'Výraz 1: hodnota súčinu 5/6 · 3/5', kind: 'number', points: 1 },
            { id: 's2', label: 'Výraz 1: výsledok celého výrazu', kind: 'number', points: 1 },
            { id: 's3', label: 'Výraz 2: hodnota zátvorky 3/4 − 1/6', kind: 'number', points: 1 },
            { id: 's4', label: 'Výraz 2: výsledok celého výrazu', kind: 'number', points: 1 },
          ] },
        { id: 'u6', title: 'Úloha 6: Slovná úloha',
          question: 'Turisti ráno prešli 3/8 celej trasy a popoludní ďalších 2/5 celej trasy. Celá trasa má 120 km.', onlineNote: NOTE_NUM,
          steps: [
            { id: 's1', label: 'Akú časť trasy prešli za celý deň?', kind: 'number', points: 1 },
            { id: 's2', label: 'Akú časť trasy im ešte zostáva?', kind: 'number', points: 1 },
            { id: 's3', label: 'Koľko kilometrov im ešte zostáva?', kind: 'number', points: 1 },
          ] },
        { id: 'u7', title: 'Úloha 7 (bonus): Zložené zlomky',
          question: 'Zlomok v čitateli alebo v menovateli počítaj ako delenie. Výsledky zapíš ako a/b.', onlineNote: NOTE_NUM,
          steps: [
            { id: 's1', label: '(3/4 − 1/3) : (1/2 + 1/6)', kind: 'number', points: 1 },
            { id: 's2', label: '1 : (1 + 1 : (1 + 1/4))', kind: 'number', points: 1 },
          ] },
      ],
    },
  },

  bonusTasks: ['u7'],

  reflection: {
    prompt: 'Ako ti išli jednotlivé časti? Označ, nie je to známka.',
    skills: [
      'rozšírenie, krátenie a základný tvar',
      'sčítanie a odčítanie zlomkov',
      'násobenie a delenie zlomkov',
      'zmiešané čísla',
      'poradie operácií a slovná úloha so zlomkami',
    ],
  },

  key: {
    A: {
      u1: { s1: '2/5', s2: '24', s3: '2/3' },
      u2: { s1: '30', s2: '13/30', s3: '23/40', s4: '1/12' },
      u3: { s1: '3/4', s2: '7', s3: '2/3', s4: '10/3' },
      u4: { s1: '11', s2: '3', s3: '25/6', s4: '2' },
      u5: { s1: '1/6', s2: '1/2', s3: '1/2', s4: '2' },
      u6: { s1: '3/4', s2: '1/4', s3: '60' },
      u7: { s1: '1/2', s2: '4/7' },
    },
    B: {
      u1: { s1: '3/7', s2: '40', s3: '4/11' },
      u2: { s1: '50', s2: '11/50', s3: '11/24', s4: '5/12' },
      u3: { s1: '1/2', s2: '9', s3: '3/2', s4: '15/2' },
      u4: { s1: '13', s2: '7', s3: '49/12', s4: '1/2' },
      u5: { s1: '1/2', s2: '7/6', s3: '7/12', s4: '1' },
      u6: { s1: '31/40', s2: '9/40', s3: '27' },
      u7: { s1: '5/8', s2: '5/9' },
    },
  },
};
