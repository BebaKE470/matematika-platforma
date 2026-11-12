// Písomka 2. ročník · Lineárne nerovnice · po hodine 28 (nerovnice, ekvivalentné úpravy, menovateľ, absolútna hodnota).
// Skupiny A a B majú rovnakú stavbu (id úloh a krokov, points, kind), iné čísla a texty.
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
  id: '2-u04-h028b',
  title: 'Lineárne nerovnice: úpravy, menovateľ, absolútna hodnota',
  minutes: 40,
  printStepLabels: true,
  instructions: [
    'Úlohy sú rozdelené na kroky. Pri každej úlohe vyplň všetky kroky postupu. Za každý správny krok získaš body, aj keď neskôr urobíš chybu.',
    'Počítaj na papieri a do aplikácie prepisuj výsledky krokov. Zlomky zapisuj v tvare a/b (napr. -3/2), desatinné čísla s čiarkou alebo bodkou.',
    'Riešením nerovnice je zvyčajne interval: ten vyberieš z ponuky. Okrúhla zátvorka ( ) znamená, že krajný bod do riešenia nepatrí, lomená zátvorka ⟨ ⟩, že patrí.',
    'Ak je pri kroku ponuka (pojmy, znamienko, interval), vyber práve jednu možnosť.',
    'Odpovede sa ukladajú priebežne. Na konci stlač „Odovzdať“. Úloha 7 je bonusová.',
  ],

  groups: {
    A: {
      tasks: [
        { id: 'u1', title: 'Úloha 1: Pojmy',
          question: 'Ku každému pojmu vyber jeho správny význam. Jeden význam je navyše.',
          steps: [
            { id: 's1', label: 'neostrá nerovnosť (napr. x ≥ 4)', kind: 'choice', options: ['treba obrátiť znamienko nerovnosti', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'krajný bod do riešenia patrí (v zápise intervalu lomená zátvorka)', 'vzdialenosť čísla x od nuly na číselnej osi', 'krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'úprava, ktorá nezmení množinu riešení nerovnice'], points: 1 },
            { id: 's2', label: 'ekvivalentná úprava nerovnice', kind: 'choice', options: ['treba obrátiť znamienko nerovnosti', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'krajný bod do riešenia patrí (v zápise intervalu lomená zátvorka)', 'vzdialenosť čísla x od nuly na číselnej osi', 'krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'úprava, ktorá nezmení množinu riešení nerovnice'], points: 1 },
            { id: 's3', label: 'násobenie obidvoch strán nerovnice záporným číslom', kind: 'choice', options: ['treba obrátiť znamienko nerovnosti', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'krajný bod do riešenia patrí (v zápise intervalu lomená zátvorka)', 'vzdialenosť čísla x od nuly na číselnej osi', 'krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'úprava, ktorá nezmení množinu riešení nerovnice'], points: 1 },
            { id: 's4', label: 'definičný obor zlomku s neznámou v menovateli', kind: 'choice', options: ['treba obrátiť znamienko nerovnosti', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'krajný bod do riešenia patrí (v zápise intervalu lomená zátvorka)', 'vzdialenosť čísla x od nuly na číselnej osi', 'krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'úprava, ktorá nezmení množinu riešení nerovnice'], points: 1 },
            { id: 's5', label: 'absolútna hodnota |x|', kind: 'choice', options: ['treba obrátiť znamienko nerovnosti', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'krajný bod do riešenia patrí (v zápise intervalu lomená zátvorka)', 'vzdialenosť čísla x od nuly na číselnej osi', 'krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'úprava, ktorá nezmení množinu riešení nerovnice'], points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2',
          question: 'Vyrieš nerovnicu 4x − 3 ≤ 7x + 9. Správnosť riešenia over skúškou.',
          steps: [
            { id: 's1', label: 'Hodnota k po úprave na tvar x … k', kind: 'number', points: 1 },
            { id: 's2', label: 'Znamienko v upravenej nerovnici x … k', kind: 'choice', options: ['<', '>', '≤', '≥'], points: 1 },
            { id: 's3', label: 'Množina riešení (vyber interval)', kind: 'choice', options: ['(−4; ∞)', '(−∞; −4)', '⟨−4; ∞)', '(−∞; 4⟩'], points: 2 },
            { id: 's4', label: 'Najmenšie celé číslo, ktoré je riešením', kind: 'number', points: 1 },
          ] },
        { id: 'u3', title: 'Úloha 3',
          question: 'Vyrieš nerovnicu (x − 3)/(x + 2) ≥ 0. Správnosť riešenia over skúškou.',
          steps: [
            { id: 's1', label: 'Hodnota x, ktorá je vylúčená z definičného oboru', kind: 'number', points: 1 },
            { id: 's2', label: 'Hodnota x, pre ktorú je čitateľ rovný nule', kind: 'number', points: 1 },
            { id: 's3', label: 'Znamienko zlomku na intervale medzi týmito dvoma hodnotami', kind: 'choice', options: ['kladné', 'záporné', 'nulové', 'nedefinované'], points: 1 },
            { id: 's4', label: 'Množina riešení (vyber interval)', kind: 'choice', options: ['(−∞; −2) ∪ ⟨3; ∞)', '(−∞; −2⟩ ∪ ⟨3; ∞)', '(−∞; −2) ∪ (3; ∞)', '⟨−2; 3)'], points: 2 },
          ] },
        { id: 'u4', title: 'Úloha 4',
          question: 'Vyrieš nerovnicu |2x − 3| < 8. Správnosť riešenia over skúškou.',
          steps: [
            { id: 's1', label: 'Dolná hranica riešenia (číslo naľavo)', kind: 'number', points: 1 },
            { id: 's2', label: 'Horná hranica riešenia (číslo napravo)', kind: 'number', points: 1 },
            { id: 's3', label: 'Množina riešení (vyber interval)', kind: 'choice', options: ['⟨−5/2; 11/2)', '(−5/2; 11/2⟩', '(−∞; −5/2⟩ ∪ ⟨11/2; ∞)', '(−5/2; 11/2)'], points: 2 },
            { id: 's4', label: 'Počet celých čísel, ktoré sú riešením', kind: 'number', points: 1 },
          ] },
        { id: 'u5', title: 'Úloha 5',
          question: 'Vyrieš nerovnicu |2x + 1| ≥ 5. Správnosť riešenia over skúškou.', onlineNote: 'Do poľa zapíš čísla oddelené čiarkou, napr. -3, 5. Ak číslo nie je celé, použi zlomok a/b.',
          steps: [
            { id: 's1', label: 'Obe kritické hodnoty (hranice, kde nastáva rovnosť)', kind: 'set', points: 1 },
            { id: 's2', label: 'Množina riešení (vyber interval)', kind: 'choice', options: ['⟨−3; 2⟩', '(−∞; −3⟩ ∪ ⟨2; ∞)', '(−∞; −3) ∪ ⟨2; ∞)', '(−∞; −3⟩ ∪ (2; ∞)'], points: 2 },
            { id: 's3', label: 'Koľko z celých čísel od −4 do 4 (vrátane) je riešením?', kind: 'number', points: 1 },
          ] },
        { id: 'u6', title: 'Úloha 6',
          question: 'Pre každú nerovnicu vyber, aká je množina jej riešení v množine reálnych čísel. Dobre si rozmysli, čo znamená absolútna hodnota.',
          steps: [
            { id: 's1', label: 'a) |x − 3| < −2', kind: 'choice', options: ['∅ (prázdna množina)', 'ℝ (všetky reálne čísla)', 'práve jedno číslo', 'ℝ bez jedného čísla'], points: 1 },
            { id: 's2', label: 'b) |2x + 1| > −5', kind: 'choice', options: ['∅ (prázdna množina)', 'ℝ (všetky reálne čísla)', 'práve jedno číslo', 'ℝ bez jedného čísla'], points: 1 },
            { id: 's3', label: 'c) |x + 2| ≤ 0', kind: 'choice', options: ['∅ (prázdna množina)', 'ℝ (všetky reálne čísla)', 'práve jedno číslo', 'ℝ bez jedného čísla'], points: 1 },
          ] },
        { id: 'u7', title: 'Úloha 7 (bonus)',
          question: 'Vyrieš nerovnicu (2x + 1)/(x − 3) ≥ 1. Pozor: jednotku nepresúvaj bez rozmyslu, výraz najprv prevedieš na jednu stranu. Správnosť riešenia over skúškou.',
          steps: [
            { id: 's1', label: 'Hodnota x, pre ktorú je po prevedení na spoločný zlomok čitateľ rovný nule', kind: 'number', points: 1 },
            { id: 's2', label: 'Hodnota x, ktorá je vylúčená z definičného oboru', kind: 'number', points: 1 },
            { id: 's3', label: 'Množina riešení (vyber interval)', kind: 'choice', options: ['(−∞; −4) ∪ (3; ∞)', '(−∞; −4⟩ ∪ ⟨3; ∞)', '(−∞; −4⟩ ∪ (3; ∞)', '(−4; 3⟩'], points: 2 },
            { id: 's4', label: 'Koľko celých čísel z intervalu ⟨−6; 6⟩ je riešením nerovnice?', kind: 'number', points: 1 },
          ] },
      ],
    },

    B: {
      tasks: [
        { id: 'u1', title: 'Úloha 1: Pojmy',
          question: 'Ku každému pojmu vyber jeho správny význam. Jeden význam je navyše.',
          steps: [
            { id: 's1', label: 'definičný obor zlomku s neznámou v menovateli', kind: 'choice', options: ['krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'krajný bod do riešenia patrí (v zápise intervalu lomená zátvorka)', 'úprava, ktorá nezmení množinu riešení nerovnice', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'treba obrátiť znamienko nerovnosti', 'vzdialenosť čísla x od nuly na číselnej osi'], points: 1 },
            { id: 's2', label: 'absolútna hodnota |x|', kind: 'choice', options: ['krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'krajný bod do riešenia patrí (v zápise intervalu lomená zátvorka)', 'úprava, ktorá nezmení množinu riešení nerovnice', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'treba obrátiť znamienko nerovnosti', 'vzdialenosť čísla x od nuly na číselnej osi'], points: 1 },
            { id: 's3', label: 'neostrá nerovnosť (napr. x ≤ 7)', kind: 'choice', options: ['krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'krajný bod do riešenia patrí (v zápise intervalu lomená zátvorka)', 'úprava, ktorá nezmení množinu riešení nerovnice', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'treba obrátiť znamienko nerovnosti', 'vzdialenosť čísla x od nuly na číselnej osi'], points: 1 },
            { id: 's4', label: 'delenie obidvoch strán nerovnice záporným číslom', kind: 'choice', options: ['krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'krajný bod do riešenia patrí (v zápise intervalu lomená zátvorka)', 'úprava, ktorá nezmení množinu riešení nerovnice', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'treba obrátiť znamienko nerovnosti', 'vzdialenosť čísla x od nuly na číselnej osi'], points: 1 },
            { id: 's5', label: 'ekvivalentná úprava nerovnice', kind: 'choice', options: ['krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'krajný bod do riešenia patrí (v zápise intervalu lomená zátvorka)', 'úprava, ktorá nezmení množinu riešení nerovnice', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'treba obrátiť znamienko nerovnosti', 'vzdialenosť čísla x od nuly na číselnej osi'], points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2',
          question: 'Vyrieš nerovnicu 2x − 1 < 6x + 5. Správnosť riešenia over skúškou.',
          steps: [
            { id: 's1', label: 'Hodnota k po úprave na tvar x … k', kind: 'number', points: 1 },
            { id: 's2', label: 'Znamienko v upravenej nerovnici x … k', kind: 'choice', options: ['<', '>', '≤', '≥'], points: 1 },
            { id: 's3', label: 'Množina riešení (vyber interval)', kind: 'choice', options: ['⟨−3/2; ∞)', '(−3/2; ∞)', '(−∞; −3/2⟩', '(−∞; 3/2)'], points: 2 },
            { id: 's4', label: 'Najmenšie celé číslo, ktoré je riešením', kind: 'number', points: 1 },
          ] },
        { id: 'u3', title: 'Úloha 3',
          question: 'Vyrieš nerovnicu (x + 4)/(x − 1) ≥ 0. Správnosť riešenia over skúškou.',
          steps: [
            { id: 's1', label: 'Hodnota x, ktorá je vylúčená z definičného oboru', kind: 'number', points: 1 },
            { id: 's2', label: 'Hodnota x, pre ktorú je čitateľ rovný nule', kind: 'number', points: 1 },
            { id: 's3', label: 'Znamienko zlomku na intervale medzi týmito dvoma hodnotami', kind: 'choice', options: ['kladné', 'záporné', 'nulové', 'nedefinované'], points: 1 },
            { id: 's4', label: 'Množina riešení (vyber interval)', kind: 'choice', options: ['(−∞; −4) ∪ (1; ∞)', '(−∞; −4⟩ ∪ ⟨1; ∞)', '(−4; 1⟩', '(−∞; −4⟩ ∪ (1; ∞)'], points: 2 },
          ] },
        { id: 'u4', title: 'Úloha 4',
          question: 'Vyrieš nerovnicu |3x + 2| ≤ 10. Správnosť riešenia over skúškou.',
          steps: [
            { id: 's1', label: 'Dolná hranica riešenia (číslo naľavo)', kind: 'number', points: 1 },
            { id: 's2', label: 'Horná hranica riešenia (číslo napravo)', kind: 'number', points: 1 },
            { id: 's3', label: 'Množina riešení (vyber interval)', kind: 'choice', options: ['⟨−4; 8/3⟩', '(−4; 8/3⟩', '⟨−4; 8/3)', '(−∞; −4) ∪ (8/3; ∞)'], points: 2 },
            { id: 's4', label: 'Počet celých čísel, ktoré sú riešením', kind: 'number', points: 1 },
          ] },
        { id: 'u5', title: 'Úloha 5',
          question: 'Vyrieš nerovnicu |3x − 2| > 7. Správnosť riešenia over skúškou.', onlineNote: 'Do poľa zapíš čísla oddelené čiarkou, napr. -3, 5. Ak číslo nie je celé, použi zlomok a/b.',
          steps: [
            { id: 's1', label: 'Obe kritické hodnoty (hranice, kde nastáva rovnosť)', kind: 'set', points: 1 },
            { id: 's2', label: 'Množina riešení (vyber interval)', kind: 'choice', options: ['(−5/3; 3)', '(−∞; −5/3⟩ ∪ (3; ∞)', '(−∞; −5/3) ∪ (3; ∞)', '(−∞; −5/3) ∪ ⟨3; ∞)'], points: 2 },
            { id: 's3', label: 'Koľko z celých čísel od −4 do 4 (vrátane) je riešením?', kind: 'number', points: 1 },
          ] },
        { id: 'u6', title: 'Úloha 6',
          question: 'Pre každú nerovnicu vyber, aká je množina jej riešení v množine reálnych čísel. Dobre si rozmysli, čo znamená absolútna hodnota.',
          steps: [
            { id: 's1', label: 'a) |x + 5| ≥ −3', kind: 'choice', options: ['∅ (prázdna množina)', 'ℝ (všetky reálne čísla)', 'práve jedno číslo', 'ℝ bez jedného čísla'], points: 1 },
            { id: 's2', label: 'b) |x − 2| ≤ 0', kind: 'choice', options: ['∅ (prázdna množina)', 'ℝ (všetky reálne čísla)', 'práve jedno číslo', 'ℝ bez jedného čísla'], points: 1 },
            { id: 's3', label: 'c) |3x − 1| < −4', kind: 'choice', options: ['∅ (prázdna množina)', 'ℝ (všetky reálne čísla)', 'práve jedno číslo', 'ℝ bez jedného čísla'], points: 1 },
          ] },
        { id: 'u7', title: 'Úloha 7 (bonus)',
          question: 'Vyrieš nerovnicu (3x − 1)/(x + 2) ≥ 1. Pozor: jednotku nepresúvaj bez rozmyslu, výraz najprv prevedieš na jednu stranu. Správnosť riešenia over skúškou.',
          steps: [
            { id: 's1', label: 'Hodnota x, pre ktorú je po prevedení na spoločný zlomok čitateľ rovný nule', kind: 'number', points: 1 },
            { id: 's2', label: 'Hodnota x, ktorá je vylúčená z definičného oboru', kind: 'number', points: 1 },
            { id: 's3', label: 'Množina riešení (vyber interval)', kind: 'choice', options: ['(−∞; −2⟩ ∪ ⟨3/2; ∞)', '(−∞; −2) ∪ ⟨3/2; ∞)', '(−∞; −2) ∪ (3/2; ∞)', '⟨−2; 3/2)'], points: 2 },
            { id: 's4', label: 'Koľko celých čísel z intervalu ⟨−6; 6⟩ je riešením nerovnice?', kind: 'number', points: 1 },
          ] },
      ],
    },
  },

  bonusTasks: ['u7'],

  reflection: {
    prompt: 'Ako ti išli jednotlivé časti? Označ, nie je to známka.',
    skills: ['pojmy a ekvivalentné úpravy', 'lineárna nerovnica a obrátenie znamienka', 'nerovnica s neznámou v menovateli', 'nerovnica s absolútnou hodnotou', 'zápis riešenia intervalom'],
  },

  key: {
    A: {
      u1: { s1: '2', s2: '5', s3: '0', s4: '1', s5: '3' },
      u2: { s1: '-4', s2: '3', s3: '2', s4: '-4' },
      u3: { s1: '-2', s2: '3', s3: '1', s4: '0' },
      u4: { s1: '-5/2', s2: '11/2', s3: '3', s4: '8' },
      u5: { s1: ['-3', '2'], s2: '1', s3: '5' },
      u6: { s1: '0', s2: '1', s3: '2' },
      u7: { s1: '-4', s2: '3', s3: '2', s4: '6' },
    },
    B: {
      u1: { s1: '3', s2: '5', s3: '1', s4: '4', s5: '2' },
      u2: { s1: '-3/2', s2: '1', s3: '1', s4: '-1' },
      u3: { s1: '1', s2: '-4', s3: '1', s4: '3' },
      u4: { s1: '-4', s2: '8/3', s3: '0', s4: '7' },
      u5: { s1: ['-5/3', '3'], s2: '2', s3: '4' },
      u6: { s1: '1', s2: '2', s3: '0' },
      u7: { s1: '3/2', s2: '-2', s3: '1', s4: '9' },
    },
  },
};
