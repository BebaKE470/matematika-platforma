// Príprava na kontrolnú písomnú prácu (hodina 23). Rovnako ako ostrá písomka sa hrá
// v mobile (core/exam.js) a zadania ani kľúč sú ZÁMERNE mimo tohto verejného súboru:
// ležia na serveri v api/_exams/2-u03-h023p.js. Je to samostatná písomka s jednou
// skupinou, nezávislá od ostrej písomky (skupiny A a B) v module 2-u03-h023.
MathPlatform.registerModule({
  id: '2-u03-h023p',
  teacher: {
    placement: '2. ročník · Lineárne rovnice · pred 23. hodinou: Príprava na kontrolnú písomnú prácu',
    prerequisites: [
      'význam absolútnej hodnoty ako vzdialenosti na číselnej osi',
      'ekvivalentné úpravy lineárnych rovníc a skúška dosadením',
      'rovnice typu |L(x)| = k, |L(x)| = |R(x)| a |L(x)| = R(x) s podmienkou',
      'riešenie rovníc s viacerými absolútnymi hodnotami pomocou kritických bodov a intervalov'
    ],
    planContent: [
      'Príprava na kontrolnú písomnú prácu z témy „Lineárne rovnice s absolútnou hodnotou“. Aktuálny tematický plán uvádza v celku Lineárne rovnice kontrolnú písomnú prácu.'
    ],
    planPerformance: [
      'V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; ciele prípravy sú didaktickým rozpracovaním témy, nie doplnením oficiálneho štandardu.'
    ],
    goals: [
      'precvičiť rovnice |L(x)| = k vrátane hraničných prípadov k = 0 a k < 0',
      'precvičiť rovnice |L(x)| = |R(x)| a |L(x)| = R(x) s podmienkou na pravú stranu',
      'precvičiť rovnice s dvoma (bonus tromi) absolútnymi hodnotami: kritické body, intervaly, výber kandidátov',
      'ukázať žiakom formát písomky (riešenie po krokoch) bez stresu zo známky'
    ],
    competencies: [
      'presný postup riešenia a jeho zápis po krokoch',
      'argumentácia pri vyraďovaní kandidátov, ktorí nepatria do intervalu alebo nespĺňajú podmienku',
      'kontrola výsledku v pôvodnej rovnici'
    ],
    enrichment: [
      'Úlohy majú rovnakú stavbu ako ostrá písomka, len iné čísla, takže žiaci vedia, čo ich čaká.'
    ],
    flow: [
      '5 min: pripojenie žiakov kódom/QR (všetci riešia rovnaké zadanie, bez skupín)',
      '35–40 min: samostatná práca. Postup žiaci počítajú na papieri, medzivýsledky a výsledky zapisujú do aplikácie po krokoch',
      'koniec: ukončenie prípravy (odpovede sa odovzdajú automaticky)',
      'po hodine: prejdi so žiakmi najčastejšie chyby z tabuľky Opravovanie; ide o prípravu, známku nezapisuj'
    ],
    diagnostics: [
      'pri rovnici |L(x)| = k: či žiak rozlišuje k < 0, k = 0, k > 0',
      'pri |L(x)| = R(x): či si žiak určí podmienku R(x) ≥ 0 a vyradí kandidáta, ktorý ju nespĺňa',
      'pri viacerých absolútnych hodnotách: kritické body, správne rozdelenie na intervaly, výsledok na každom intervale a vyradenie kandidáta mimo intervalu',
      'počet opustení aplikácie počas prípravy (len informácia)'
    ],
    partialUse: [
      'Prípravu spúšťaš v učiteľskej časti tlačidlom „Spustiť písomku“; žiak si ju samostatne otvoriť nemôže.',
      'Je to samostatný záznam: ostrá písomka so skupinami A a B (modul 2-u03-h023) sa spúšťa osobitne.',
      'Výsledky sa neukladajú na server. Priebeh sa zálohuje v prehliadači učiteľky; po hodine si prípadne stiahni CSV.'
    ]
  },
  student: {
    title: 'Príprava na písomku: Lineárne rovnice s absolútnou hodnotou',
    subtitle: 'Pred hodinou 23 · Lineárne rovnice',
    intro: 'Toto je príprava na písomku. Úlohy sú rozdelené na kroky a za každý správny krok postupu získaš body. Zadanie sa ti zobrazí po pripojení kódom od učiteľky.',
    estimatedTime: '45 min',
    exam: true,
    activities: []
  }
});
