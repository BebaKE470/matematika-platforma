// Príprava na kontrolnú písomnú prácu 2. ročník · Lineárne nerovnice · celý tematický celok (hodiny 24–31).
//
// Samostatná písomka s JEDNOU skupinou (bez delenia na A a B). Rovnaká štruktúra a rovnaké typy
// úloh ako ostrá písomka 2-u04-h032b, ale iné čísla. Spúšťa sa osobitne zo záznamu 2-u04-h032p
// v registri; ostrú písomku (skupiny A a B) nijako neovplyvňuje.
//
// Súbor je zámerne MIMO verejných statických súborov: zadania aj kľúč číta len
// api/exam.js a vydá ich iba prihlásenej učiteľke. Žiakom sa z učiteľkinho
// prehliadača pošle verzia bez `key` (MathExam.publicExam v core/exam.js).
//
// Formát je popísaný v docs/AUTHORING.md (sekcia „Písomka“).
//
// Riešením nerovnice je interval, preto sa výsledok zadáva výberom z ponuky štyroch
// intervalov (kind: 'choice', kľúč = poradie správnej možnosti od 0). Krok kind: 'set'
// je len konečná množina čísel, používa sa pri kritických hodnotách.
// Všetky hodnoty kľúča boli nezávisle overené hrubou silou (dosadením na mriežke
// racionálnych čísel, celé riešenia prehľadaním celých čísel).

module.exports = {
  id: '2-u04-h032p',
  title: 'Príprava na písomku: Lineárne nerovnice',
  minutes: 45,
  printStepLabels: true,
  instructions: [
    'Toto je príprava na písomku, nie ostrá písomka. Úlohy majú rovnakú stavbu ako v písomke, len iné čísla.',
    'Úlohy sú rozdelené na kroky. Pri každej úlohe vyplň všetky kroky postupu. Za každý správny krok získaš body, aj keď neskôr urobíš chybu.',
    'Počítaj na papieri a do aplikácie prepisuj výsledky krokov. Zlomky zapisuj v tvare a/b (napr. -3/2), desatinné čísla s čiarkou alebo bodkou.',
    'Riešením nerovnice je zvyčajne interval: ten vyberieš z ponuky. Okrúhla zátvorka ( ) znamená, že krajný bod do riešenia nepatrí, lomená zátvorka ⟨ ⟩, že patrí.',
    'Odpovede sa ukladajú priebežne. Na konci stlač „Odovzdať“. Úloha 8 je bonusová.',
  ],

  groups: {
    A: {
      tasks: [
        { id: 'u1', title: 'Úloha 1: Pojmy',
          question: 'Ku každému pojmu vyber jeho správny význam. Jeden význam je navyše.',
          steps: [
            { id: 's1', label: 'ostrá nerovnosť (napr. x < 3)', kind: 'choice', options: ['vzdialenosť čísla x od nuly na číselnej osi', 'krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'treba obrátiť znamienko nerovnosti', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'zjednotenie množín riešení jednotlivých nerovníc', 'prienik množín riešení jednotlivých nerovníc', 'úprava, ktorá nezmení množinu riešení nerovnice'], points: 1 },
            { id: 's2', label: 'ekvivalentná úprava nerovnice', kind: 'choice', options: ['vzdialenosť čísla x od nuly na číselnej osi', 'krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'treba obrátiť znamienko nerovnosti', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'zjednotenie množín riešení jednotlivých nerovníc', 'prienik množín riešení jednotlivých nerovníc', 'úprava, ktorá nezmení množinu riešení nerovnice'], points: 1 },
            { id: 's3', label: 'násobenie obidvoch strán nerovnice záporným číslom', kind: 'choice', options: ['vzdialenosť čísla x od nuly na číselnej osi', 'krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'treba obrátiť znamienko nerovnosti', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'zjednotenie množín riešení jednotlivých nerovníc', 'prienik množín riešení jednotlivých nerovníc', 'úprava, ktorá nezmení množinu riešení nerovnice'], points: 1 },
            { id: 's4', label: 'definičný obor zlomku s neznámou v menovateli', kind: 'choice', options: ['vzdialenosť čísla x od nuly na číselnej osi', 'krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'treba obrátiť znamienko nerovnosti', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'zjednotenie množín riešení jednotlivých nerovníc', 'prienik množín riešení jednotlivých nerovníc', 'úprava, ktorá nezmení množinu riešení nerovnice'], points: 1 },
            { id: 's5', label: 'riešenie sústavy nerovníc', kind: 'choice', options: ['vzdialenosť čísla x od nuly na číselnej osi', 'krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'treba obrátiť znamienko nerovnosti', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'zjednotenie množín riešení jednotlivých nerovníc', 'prienik množín riešení jednotlivých nerovníc', 'úprava, ktorá nezmení množinu riešení nerovnice'], points: 1 },
            { id: 's6', label: 'absolútna hodnota |x|', kind: 'choice', options: ['vzdialenosť čísla x od nuly na číselnej osi', 'krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'treba obrátiť znamienko nerovnosti', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'zjednotenie množín riešení jednotlivých nerovníc', 'prienik množín riešení jednotlivých nerovníc', 'úprava, ktorá nezmení množinu riešení nerovnice'], points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2',
          question: 'Vyrieš nerovnicu (1 − x)/3 − (x − 2)/2 > 1. Správnosť riešenia over skúškou.',
          steps: [
            { id: 's1', label: 'Najmenší spoločný násobok menovateľov', kind: 'number', points: 1 },
            { id: 's2', label: 'Hodnota k po úprave na tvar x … k', kind: 'number', points: 1 },
            { id: 's3', label: 'Znamienko v upravenej nerovnici x … k', kind: 'choice', options: ['<', '>', '≤', '≥'], points: 1 },
            { id: 's4', label: 'Množina riešení (vyber interval)', kind: 'choice', options: ['(−∞; 2/5⟩', '⟨2/5; ∞)', '(−2/5; ∞)', '(−∞; 2/5)'], points: 2 },
          ] },
        { id: 'u3', title: 'Úloha 3',
          question: 'Vyrieš nerovnicu (x + 1)/(x − 4) ≤ 0. Správnosť riešenia over skúškou.',
          steps: [
            { id: 's1', label: 'Hodnota x, ktorá je vylúčená z definičného oboru', kind: 'number', points: 1 },
            { id: 's2', label: 'Hodnota x, pre ktorú je čitateľ rovný nule', kind: 'number', points: 1 },
            { id: 's3', label: 'Znamienko zlomku na intervale medzi týmito dvoma hodnotami', kind: 'choice', options: ['kladné', 'záporné', 'nulové', 'nedefinované'], points: 1 },
            { id: 's4', label: 'Množina riešení (vyber interval)', kind: 'choice', options: ['(−1; 4)', '⟨−1; 4)', '⟨−1; 4⟩', '(−∞; −1) ∪ ⟨4; ∞)'], points: 2 },
          ] },
        { id: 'u4', title: 'Úloha 4',
          question: 'Vyrieš nerovnicu |4x − 2| ≤ 10. Správnosť riešenia over skúškou.',
          steps: [
            { id: 's1', label: 'Dolná hranica riešenia (číslo naľavo)', kind: 'number', points: 1 },
            { id: 's2', label: 'Horná hranica riešenia (číslo napravo)', kind: 'number', points: 1 },
            { id: 's3', label: 'Množina riešení (vyber interval)', kind: 'choice', options: ['(−2; 3⟩', '⟨−2; 3)', '⟨−2; 3⟩', '(−∞; −2) ∪ (3; ∞)'], points: 2 },
            { id: 's4', label: 'Počet celých čísel, ktoré sú riešením', kind: 'number', points: 1 },
          ] },
        { id: 'u5', title: 'Úloha 5',
          question: 'Vyrieš nerovnicu |x + 1| ≥ 4. Správnosť riešenia over skúškou.', onlineNote: 'Do poľa zapíš čísla oddelené čiarkou, napr. -3, 5. Ak číslo nie je celé, použi zlomok a/b.',
          steps: [
            { id: 's1', label: 'Obe kritické hodnoty (hranice, kde nastáva rovnosť)', kind: 'set', points: 1 },
            { id: 's2', label: 'Množina riešení (vyber interval)', kind: 'choice', options: ['(−∞; −5⟩ ∪ ⟨3; ∞)', '⟨−5; 3⟩', '(−∞; −5) ∪ ⟨3; ∞)', '(−∞; −5⟩ ∪ (3; ∞)'], points: 2 },
            { id: 's3', label: 'Koľko z celých čísel od −4 do 4 (vrátane) je riešením?', kind: 'number', points: 1 },
          ] },
        { id: 'u6', title: 'Úloha 6',
          question: 'Vyrieš sústavu nerovníc s jednou neznámou: 4x − 3 > 5 a zároveň −x + 2 ≥ −3. Správnosť riešenia over skúškou.',
          steps: [
            { id: 's1', label: 'Kritická hodnota prvej nerovnice (hranica jej riešenia)', kind: 'number', points: 1 },
            { id: 's2', label: 'Kritická hodnota druhej nerovnice (hranica jej riešenia)', kind: 'number', points: 1 },
            { id: 's3', label: 'Množina riešení sústavy (prienik, vyber interval)', kind: 'choice', options: ['(2; ∞)', '(−∞; 5⟩', '(2; 5⟩', '⟨2; 5⟩'], points: 2 },
            { id: 's4', label: 'Počet celých čísel, ktoré sú riešením sústavy', kind: 'number', points: 1 },
          ] },
        { id: 'u7', title: 'Úloha 7',
          question: 'Taxi si účtuje nástupné 2,50 € a za každý prejdený kilometer 0,90 €. Máš k dispozícii najviac 20 €. Koľko celých kilometrov môžeš najviac prejsť? Označ n počet kilometrov.',
          steps: [
            { id: 's1', label: 'Hranica k po úprave na tvar n … k (n je počet kilometrov)', kind: 'number', points: 1 },
            { id: 's2', label: 'Znamienko v tvare n … k', kind: 'choice', options: ['<', '>', '≤', '≥'], points: 1 },
            { id: 's3', label: 'Najväčší celý počet kilometrov, ktorý môžeš prejsť', kind: 'number', points: 2 },
          ] },
        { id: 'u8', title: 'Úloha 8 (bonus)',
          question: 'Vyrieš sústavu nerovníc: |x − 2| ≤ 4 a zároveň −2x + 3 < −1. Správnosť riešenia over skúškou.',
          steps: [
            { id: 's1', label: 'Dolná hranica riešenia nerovnice s absolútnou hodnotou', kind: 'number', points: 1 },
            { id: 's2', label: 'Horná hranica riešenia nerovnice s absolútnou hodnotou', kind: 'number', points: 1 },
            { id: 's3', label: 'Kritická hodnota lineárnej nerovnice', kind: 'number', points: 1 },
            { id: 's4', label: 'Množina riešení sústavy (prienik, vyber interval)', kind: 'choice', options: ['⟨−2; 6⟩', '(2; 6⟩', '(2; ∞)', '⟨2; 6⟩'], points: 2 },
            { id: 's5', label: 'Počet celých čísel, ktoré sú riešením sústavy', kind: 'number', points: 1 },
          ] },
      ],
    },
  },

  bonusTasks: ['u8'],

  reflection: {
    prompt: 'Ako ti išli jednotlivé časti? Označ, nie je to známka.',
    skills: ['pojmy a ekvivalentné úpravy', 'nerovnica so zlomkami a obrátenie znamienka', 'nerovnica s neznámou v menovateli', 'nerovnice s absolútnou hodnotou', 'sústava nerovníc a prienik', 'slovná úloha', 'zápis riešenia intervalom'],
  },

  key: {
    A: {
      u1: { s1: '1', s2: '6', s3: '2', s4: '3', s5: '5', s6: '0' },
      u2: { s1: '6', s2: '2/5', s3: '0', s4: '3' },
      u3: { s1: '4', s2: '-1', s3: '1', s4: '1' },
      u4: { s1: '-2', s2: '3', s3: '2', s4: '6' },
      u5: { s1: ['-5', '3'], s2: '0', s3: '2' },
      u6: { s1: '2', s2: '5', s3: '2', s4: '3' },
      u7: { s1: '175/9', s2: '2', s3: '19' },
      u8: { s1: '-2', s2: '6', s3: '2', s4: '1', s5: '4' },
    },
  },
};
