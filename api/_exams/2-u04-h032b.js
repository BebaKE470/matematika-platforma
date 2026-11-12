// Kontrolná písomná práca 2. ročník · Lineárne nerovnice · celý tematický celok (hodiny 24–31).
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
  id: '2-u04-h032b',
  title: 'Lineárne nerovnice',
  minutes: 45,
  printStepLabels: true,
  instructions: [
    'Úlohy sú rozdelené na kroky. Pri každej úlohe vyplň všetky kroky postupu. Za každý správny krok získaš body, aj keď neskôr urobíš chybu.',
    'Počítaj na papieri a do aplikácie prepisuj výsledky krokov. Zlomky zapisuj v tvare a/b (napr. -3/2), desatinné čísla s čiarkou alebo bodkou.',
    'Riešením nerovnice je zvyčajne interval: ten vyberieš z ponuky. Okrúhla zátvorka ( ) znamená, že krajný bod do riešenia nepatrí, lomená zátvorka ⟨ ⟩, že patrí.',
    'Ak je pri kroku ponuka (pojmy, znamienko, interval), vyber práve jednu možnosť.',
    'Odpovede sa ukladajú priebežne. Na konci stlač „Odovzdať“. Úloha 8 je bonusová.',
  ],

  groups: {
    A: {
      tasks: [
        { id: 'u1', title: 'Úloha 1: Pojmy',
          question: 'Ku každému pojmu vyber jeho správny význam. Jeden význam je navyše.',
          steps: [
            { id: 's1', label: 'ostrá nerovnosť (napr. x < 3)', kind: 'choice', options: ['treba obrátiť znamienko nerovnosti', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'vzdialenosť čísla x od nuly na číselnej osi', 'zjednotenie množín riešení jednotlivých nerovníc', 'prienik množín riešení jednotlivých nerovníc', 'krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'úprava, ktorá nezmení množinu riešení nerovnice'], points: 1 },
            { id: 's2', label: 'ekvivalentná úprava nerovnice', kind: 'choice', options: ['treba obrátiť znamienko nerovnosti', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'vzdialenosť čísla x od nuly na číselnej osi', 'zjednotenie množín riešení jednotlivých nerovníc', 'prienik množín riešení jednotlivých nerovníc', 'krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'úprava, ktorá nezmení množinu riešení nerovnice'], points: 1 },
            { id: 's3', label: 'násobenie obidvoch strán nerovnice záporným číslom', kind: 'choice', options: ['treba obrátiť znamienko nerovnosti', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'vzdialenosť čísla x od nuly na číselnej osi', 'zjednotenie množín riešení jednotlivých nerovníc', 'prienik množín riešení jednotlivých nerovníc', 'krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'úprava, ktorá nezmení množinu riešení nerovnice'], points: 1 },
            { id: 's4', label: 'definičný obor zlomku s neznámou v menovateli', kind: 'choice', options: ['treba obrátiť znamienko nerovnosti', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'vzdialenosť čísla x od nuly na číselnej osi', 'zjednotenie množín riešení jednotlivých nerovníc', 'prienik množín riešení jednotlivých nerovníc', 'krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'úprava, ktorá nezmení množinu riešení nerovnice'], points: 1 },
            { id: 's5', label: 'riešenie sústavy nerovníc', kind: 'choice', options: ['treba obrátiť znamienko nerovnosti', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'vzdialenosť čísla x od nuly na číselnej osi', 'zjednotenie množín riešení jednotlivých nerovníc', 'prienik množín riešení jednotlivých nerovníc', 'krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'úprava, ktorá nezmení množinu riešení nerovnice'], points: 1 },
            { id: 's6', label: 'absolútna hodnota |x|', kind: 'choice', options: ['treba obrátiť znamienko nerovnosti', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'vzdialenosť čísla x od nuly na číselnej osi', 'zjednotenie množín riešení jednotlivých nerovníc', 'prienik množín riešení jednotlivých nerovníc', 'krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'úprava, ktorá nezmení množinu riešení nerovnice'], points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2',
          question: 'Vyrieš nerovnicu (x + 3)/2 − (3x − 1)/4 > 2. Správnosť riešenia over skúškou.',
          steps: [
            { id: 's1', label: 'Najmenší spoločný násobok menovateľov', kind: 'number', points: 1 },
            { id: 's2', label: 'Hodnota k po úprave na tvar x … k', kind: 'number', points: 1 },
            { id: 's3', label: 'Znamienko v upravenej nerovnici x … k', kind: 'choice', options: ['<', '>', '≤', '≥'], points: 1 },
            { id: 's4', label: 'Množina riešení (vyber interval)', kind: 'choice', options: ['(−∞; −1)', '(−∞; −1⟩', '⟨−1; ∞)', '(1; ∞)'], points: 2 },
          ] },
        { id: 'u3', title: 'Úloha 3',
          question: 'Vyrieš nerovnicu (5 − x)/(x + 2) ≥ 0. Správnosť riešenia over skúškou.',
          steps: [
            { id: 's1', label: 'Hodnota x, ktorá je vylúčená z definičného oboru', kind: 'number', points: 1 },
            { id: 's2', label: 'Hodnota x, pre ktorú je čitateľ rovný nule', kind: 'number', points: 1 },
            { id: 's3', label: 'Znamienko zlomku na intervale medzi týmito dvoma hodnotami', kind: 'choice', options: ['kladné', 'záporné', 'nulové', 'nedefinované'], points: 1 },
            { id: 's4', label: 'Množina riešení (vyber interval)', kind: 'choice', options: ['⟨−2; 5⟩', '(−2; 5)', '(−∞; −2⟩ ∪ (5; ∞)', '(−2; 5⟩'], points: 2 },
          ] },
        { id: 'u4', title: 'Úloha 4',
          question: 'Vyrieš nerovnicu |3x − 1| ≤ 8. Správnosť riešenia over skúškou.',
          steps: [
            { id: 's1', label: 'Dolná hranica riešenia (číslo naľavo)', kind: 'number', points: 1 },
            { id: 's2', label: 'Horná hranica riešenia (číslo napravo)', kind: 'number', points: 1 },
            { id: 's3', label: 'Množina riešení (vyber interval)', kind: 'choice', options: ['(−7/3; 3⟩', '⟨−7/3; 3⟩', '⟨−7/3; 3)', '(−∞; −7/3) ∪ (3; ∞)'], points: 2 },
            { id: 's4', label: 'Počet celých čísel, ktoré sú riešením', kind: 'number', points: 1 },
          ] },
        { id: 'u5', title: 'Úloha 5',
          question: 'Vyrieš nerovnicu |2x − 3| ≥ 7. Správnosť riešenia over skúškou.', onlineNote: 'Do poľa zapíš čísla oddelené čiarkou, napr. -3, 5. Ak číslo nie je celé, použi zlomok a/b.',
          steps: [
            { id: 's1', label: 'Obe kritické hodnoty (hranice, kde nastáva rovnosť)', kind: 'set', points: 1 },
            { id: 's2', label: 'Množina riešení (vyber interval)', kind: 'choice', options: ['⟨−2; 5⟩', '(−∞; −2) ∪ ⟨5; ∞)', '(−∞; −2⟩ ∪ ⟨5; ∞)', '(−∞; −2⟩ ∪ (5; ∞)'], points: 2 },
            { id: 's3', label: 'Koľko z celých čísel od −4 do 4 (vrátane) je riešením?', kind: 'number', points: 1 },
          ] },
        { id: 'u6', title: 'Úloha 6',
          question: 'Vyrieš sústavu nerovníc s jednou neznámou: −2x + 1 < 9 a zároveň 3x − 4 ≤ 8. Správnosť riešenia over skúškou.',
          steps: [
            { id: 's1', label: 'Kritická hodnota prvej nerovnice (hranica jej riešenia)', kind: 'number', points: 1 },
            { id: 's2', label: 'Kritická hodnota druhej nerovnice (hranica jej riešenia)', kind: 'number', points: 1 },
            { id: 's3', label: 'Množina riešení sústavy (prienik, vyber interval)', kind: 'choice', options: ['(−4; 4⟩', '(−4; ∞)', '(−∞; 4⟩', '⟨−4; 4⟩'], points: 2 },
            { id: 's4', label: 'Počet celých čísel, ktoré sú riešením sústavy', kind: 'number', points: 1 },
          ] },
        { id: 'u7', title: 'Úloha 7',
          question: 'Mobilný tarif Mini má mesačný paušál 6 € a každá minúta hovoru stojí 0,10 €. Tarif Voľný nemá paušál, ale každá minúta stojí 0,25 €. Pri koľkých minútach mesačne je tarif Mini lacnejší ako Voľný? Označ m počet minút.',
          steps: [
            { id: 's1', label: 'Hranica k po úprave na tvar m … k (m je počet minút)', kind: 'number', points: 1 },
            { id: 's2', label: 'Znamienko v tvare m … k', kind: 'choice', options: ['<', '>', '≤', '≥'], points: 1 },
            { id: 's3', label: 'Najmenší celý počet minút, pri ktorom je Mini lacnejší', kind: 'number', points: 2 },
          ] },
        { id: 'u8', title: 'Úloha 8 (bonus)',
          question: 'Vyrieš sústavu nerovníc: |x − 1| < 5 a zároveň −x + 3 ≤ 1. Správnosť riešenia over skúškou.',
          steps: [
            { id: 's1', label: 'Dolná hranica riešenia nerovnice s absolútnou hodnotou', kind: 'number', points: 1 },
            { id: 's2', label: 'Horná hranica riešenia nerovnice s absolútnou hodnotou', kind: 'number', points: 1 },
            { id: 's3', label: 'Kritická hodnota lineárnej nerovnice', kind: 'number', points: 1 },
            { id: 's4', label: 'Množina riešení sústavy (prienik, vyber interval)', kind: 'choice', options: ['(−4; 6)', '⟨2; ∞)', '(2; 6)', '⟨2; 6)'], points: 2 },
            { id: 's5', label: 'Počet celých čísel, ktoré sú riešením sústavy', kind: 'number', points: 1 },
          ] },
      ],
    },

    B: {
      tasks: [
        { id: 'u1', title: 'Úloha 1: Pojmy',
          question: 'Ku každému pojmu vyber jeho správny význam. Jeden význam je navyše.',
          steps: [
            { id: 's1', label: 'riešenie sústavy nerovníc', kind: 'choice', options: ['krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'prienik množín riešení jednotlivých nerovníc', 'treba obrátiť znamienko nerovnosti', 'úprava, ktorá nezmení množinu riešení nerovnice', 'zjednotenie množín riešení jednotlivých nerovníc', 'vzdialenosť čísla x od nuly na číselnej osi'], points: 1 },
            { id: 's2', label: 'absolútna hodnota |x|', kind: 'choice', options: ['krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'prienik množín riešení jednotlivých nerovníc', 'treba obrátiť znamienko nerovnosti', 'úprava, ktorá nezmení množinu riešení nerovnice', 'zjednotenie množín riešení jednotlivých nerovníc', 'vzdialenosť čísla x od nuly na číselnej osi'], points: 1 },
            { id: 's3', label: 'ostrá nerovnosť (napr. x > 6)', kind: 'choice', options: ['krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'prienik množín riešení jednotlivých nerovníc', 'treba obrátiť znamienko nerovnosti', 'úprava, ktorá nezmení množinu riešení nerovnice', 'zjednotenie množín riešení jednotlivých nerovníc', 'vzdialenosť čísla x od nuly na číselnej osi'], points: 1 },
            { id: 's4', label: 'definičný obor zlomku s neznámou v menovateli', kind: 'choice', options: ['krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'prienik množín riešení jednotlivých nerovníc', 'treba obrátiť znamienko nerovnosti', 'úprava, ktorá nezmení množinu riešení nerovnice', 'zjednotenie množín riešení jednotlivých nerovníc', 'vzdialenosť čísla x od nuly na číselnej osi'], points: 1 },
            { id: 's5', label: 'delenie obidvoch strán nerovnice záporným číslom', kind: 'choice', options: ['krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'prienik množín riešení jednotlivých nerovníc', 'treba obrátiť znamienko nerovnosti', 'úprava, ktorá nezmení množinu riešení nerovnice', 'zjednotenie množín riešení jednotlivých nerovníc', 'vzdialenosť čísla x od nuly na číselnej osi'], points: 1 },
            { id: 's6', label: 'ekvivalentná úprava nerovnice', kind: 'choice', options: ['krajný bod do riešenia nepatrí (v zápise intervalu okrúhla zátvorka)', 'všetky čísla x, pre ktoré je menovateľ rôzny od nuly', 'prienik množín riešení jednotlivých nerovníc', 'treba obrátiť znamienko nerovnosti', 'úprava, ktorá nezmení množinu riešení nerovnice', 'zjednotenie množín riešení jednotlivých nerovníc', 'vzdialenosť čísla x od nuly na číselnej osi'], points: 1 },
          ] },
        { id: 'u2', title: 'Úloha 2',
          question: 'Vyrieš nerovnicu (x + 1)/3 − (2x − 3)/2 ≥ 1. Správnosť riešenia over skúškou.',
          steps: [
            { id: 's1', label: 'Najmenší spoločný násobok menovateľov', kind: 'number', points: 1 },
            { id: 's2', label: 'Hodnota k po úprave na tvar x … k', kind: 'number', points: 1 },
            { id: 's3', label: 'Znamienko v upravenej nerovnici x … k', kind: 'choice', options: ['<', '>', '≤', '≥'], points: 1 },
            { id: 's4', label: 'Množina riešení (vyber interval)', kind: 'choice', options: ['(−∞; 5/4)', '(5/4; ∞)', '(−∞; 5/4⟩', '⟨−5/4; ∞)'], points: 2 },
          ] },
        { id: 'u3', title: 'Úloha 3',
          question: 'Vyrieš nerovnicu (2 − x)/(x + 3) ≥ 0. Správnosť riešenia over skúškou.',
          steps: [
            { id: 's1', label: 'Hodnota x, ktorá je vylúčená z definičného oboru', kind: 'number', points: 1 },
            { id: 's2', label: 'Hodnota x, pre ktorú je čitateľ rovný nule', kind: 'number', points: 1 },
            { id: 's3', label: 'Znamienko zlomku na intervale medzi týmito dvoma hodnotami', kind: 'choice', options: ['kladné', 'záporné', 'nulové', 'nedefinované'], points: 1 },
            { id: 's4', label: 'Množina riešení (vyber interval)', kind: 'choice', options: ['⟨−3; 2⟩', '(−3; 2⟩', '(−3; 2)', '(−∞; −3⟩ ∪ (2; ∞)'], points: 2 },
          ] },
        { id: 'u4', title: 'Úloha 4',
          question: 'Vyrieš nerovnicu |2x + 5| < 9. Správnosť riešenia over skúškou.',
          steps: [
            { id: 's1', label: 'Dolná hranica riešenia (číslo naľavo)', kind: 'number', points: 1 },
            { id: 's2', label: 'Horná hranica riešenia (číslo napravo)', kind: 'number', points: 1 },
            { id: 's3', label: 'Množina riešení (vyber interval)', kind: 'choice', options: ['⟨−7; 2)', '(−7; 2⟩', '(−∞; −7⟩ ∪ ⟨2; ∞)', '(−7; 2)'], points: 2 },
            { id: 's4', label: 'Počet celých čísel, ktoré sú riešením', kind: 'number', points: 1 },
          ] },
        { id: 'u5', title: 'Úloha 5',
          question: 'Vyrieš nerovnicu |3x + 1| > 8. Správnosť riešenia over skúškou.', onlineNote: 'Do poľa zapíš čísla oddelené čiarkou, napr. -3, 5. Ak číslo nie je celé, použi zlomok a/b.',
          steps: [
            { id: 's1', label: 'Obe kritické hodnoty (hranice, kde nastáva rovnosť)', kind: 'set', points: 1 },
            { id: 's2', label: 'Množina riešení (vyber interval)', kind: 'choice', options: ['(−∞; −3) ∪ (7/3; ∞)', '(−3; 7/3)', '(−∞; −3⟩ ∪ (7/3; ∞)', '(−∞; −3) ∪ ⟨7/3; ∞)'], points: 2 },
            { id: 's3', label: 'Koľko z celých čísel od −4 do 4 (vrátane) je riešením?', kind: 'number', points: 1 },
          ] },
        { id: 'u6', title: 'Úloha 6',
          question: 'Vyrieš sústavu nerovníc s jednou neznámou: −3x + 2 ≤ 8 a zároveň 2x + 5 < 11. Správnosť riešenia over skúškou.',
          steps: [
            { id: 's1', label: 'Kritická hodnota prvej nerovnice (hranica jej riešenia)', kind: 'number', points: 1 },
            { id: 's2', label: 'Kritická hodnota druhej nerovnice (hranica jej riešenia)', kind: 'number', points: 1 },
            { id: 's3', label: 'Množina riešení sústavy (prienik, vyber interval)', kind: 'choice', options: ['⟨−2; ∞)', '(−∞; 3)', '⟨−2; 3)', '(−2; 3)'], points: 2 },
            { id: 's4', label: 'Počet celých čísel, ktoré sú riešením sústavy', kind: 'number', points: 1 },
          ] },
        { id: 'u7', title: 'Úloha 7',
          question: 'Permanentka do kina stojí 14 € a každý film s ňou stojí 1,50 €. Jednotlivý lístok stojí 3 €. Pri koľkých filmoch je permanentka celkovo lacnejšia ako lístky? Označ f počet filmov.',
          steps: [
            { id: 's1', label: 'Hranica k po úprave na tvar f … k (f je počet filmov)', kind: 'number', points: 1 },
            { id: 's2', label: 'Znamienko v tvare f … k', kind: 'choice', options: ['<', '>', '≤', '≥'], points: 1 },
            { id: 's3', label: 'Najmenší celý počet filmov, pri ktorom je permanentka lacnejšia', kind: 'number', points: 2 },
          ] },
        { id: 'u8', title: 'Úloha 8 (bonus)',
          question: 'Vyrieš sústavu nerovníc: |x + 2| ≤ 6 a zároveň 2x − 3 > −9. Správnosť riešenia over skúškou.',
          steps: [
            { id: 's1', label: 'Dolná hranica riešenia nerovnice s absolútnou hodnotou', kind: 'number', points: 1 },
            { id: 's2', label: 'Horná hranica riešenia nerovnice s absolútnou hodnotou', kind: 'number', points: 1 },
            { id: 's3', label: 'Kritická hodnota lineárnej nerovnice', kind: 'number', points: 1 },
            { id: 's4', label: 'Množina riešení sústavy (prienik, vyber interval)', kind: 'choice', options: ['(−3; 4⟩', '⟨−8; 4⟩', '(−3; ∞)', '⟨−3; 4⟩'], points: 2 },
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
      u1: { s1: '5', s2: '6', s3: '0', s4: '1', s5: '4', s6: '2' },
      u2: { s1: '4', s2: '-1', s3: '0', s4: '0' },
      u3: { s1: '-2', s2: '5', s3: '0', s4: '3' },
      u4: { s1: '-7/3', s2: '3', s3: '1', s4: '6' },
      u5: { s1: ['-2', '5'], s2: '2', s3: '3' },
      u6: { s1: '-4', s2: '4', s3: '0', s4: '8' },
      u7: { s1: '40', s2: '1', s3: '41' },
      u8: { s1: '-4', s2: '6', s3: '2', s4: '3', s5: '4' },
    },
    B: {
      u1: { s1: '2', s2: '6', s3: '0', s4: '1', s5: '3', s6: '4' },
      u2: { s1: '6', s2: '5/4', s3: '2', s4: '2' },
      u3: { s1: '-3', s2: '2', s3: '0', s4: '1' },
      u4: { s1: '-7', s2: '2', s3: '3', s4: '8' },
      u5: { s1: ['-3', '7/3'], s2: '0', s3: '3' },
      u6: { s1: '-2', s2: '3', s3: '2', s4: '5' },
      u7: { s1: '28/3', s2: '1', s3: '10' },
      u8: { s1: '-8', s2: '4', s3: '-3', s4: '0', s5: '7' },
    },
  },
};
