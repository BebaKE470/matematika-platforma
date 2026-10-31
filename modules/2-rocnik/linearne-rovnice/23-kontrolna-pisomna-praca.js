// Kontrolná písomná práca (hodina 23). Písomka sa hrá v mobile (core/exam.js),
// ale zadania ani kľúč sú ZÁMERNE mimo tohto verejného súboru: ležia na serveri
// v api/_exams/2-u03-h023.js a žiakom ich pošle učiteľka cez kód hodiny.
// Preto tu nie sú žiadne `activities`.
MathPlatform.registerModule({
  id: '2-u03-h023',
  teacher: {
    placement: '2. ročník · Lineárne rovnice · 23. hodina: Kontrolná písomná práca',
    prerequisites: [
      'význam absolútnej hodnoty ako vzdialenosti na číselnej osi',
      'ekvivalentné úpravy lineárnych rovníc a skúška dosadením',
      'rovnice typu |L(x)| = k, |L(x)| = |R(x)| a |L(x)| = R(x) s podmienkou',
      'riešenie rovníc s viacerými absolútnymi hodnotami pomocou kritických bodov a intervalov'
    ],
    planContent: [
      'Aktuálny tematický plán uvádza v celku Lineárne rovnice kontrolnú písomnú prácu. Písomka overuje tému „Lineárne rovnice s absolútnou hodnotou“.'
    ],
    planPerformance: [
      'V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; ciele písomky sú didaktickým rozpracovaním témy, nie doplnením oficiálneho štandardu.'
    ],
    goals: [
      'overiť riešenie rovníc |L(x)| = k vrátane hraničných prípadov k = 0 a k < 0',
      'overiť riešenie rovníc |L(x)| = |R(x)| a |L(x)| = R(x) s podmienkou na pravú stranu',
      'overiť riešenie rovníc s dvoma (bonus tromi) absolútnymi hodnotami: kritické body, intervaly, výber kandidátov',
      'hodnotiť postup, nielen výsledok: každý krok postupu má vlastné body'
    ],
    competencies: [
      'presný postup riešenia a jeho zápis po krokoch',
      'argumentácia pri vyraďovaní kandidátov, ktorí nepatria do intervalu alebo nespĺňajú podmienku',
      'kontrola výsledku v pôvodnej rovnici'
    ],
    enrichment: [
      'Návrh maturitného štandardu je použitý iba ako obohatenie spôsobu hodnotenia: dôraz na postup a zdôvodnenie, nie len na výsledok. Poradie a rozsah učiva určuje tematický plán.'
    ],
    flow: [
      '5 min: pripojenie žiakov kódom/QR, rozdelenie do skupín A a B',
      '35–40 min: samostatná práca. Postup žiaci počítajú na papieri, medzivýsledky a výsledky zapisujú do aplikácie po krokoch',
      'koniec: ukončenie písomky (odpovede sa odovzdajú automaticky)',
      'po hodine: kontrola v tabuľke Opravovanie, ručná úprava bodov, export CSV; výsledky môžeš zverejniť žiakom'
    ],
    diagnostics: [
      'pri rovnici |L(x)| = k: či žiak rozlišuje k < 0, k = 0, k > 0',
      'pri |L(x)| = R(x): či si žiak určí podmienku R(x) ≥ 0 a vyradí kandidáta, ktorý ju nespĺňa',
      'pri viacerých absolútnych hodnotách: kritické body, správne rozdelenie na intervaly, výsledok na každom intervale a vyradenie kandidáta mimo intervalu',
      'následné chyby: ak žiak počíta správne s vlastným chybným medzivýsledkom, body za ďalšie kroky môžeš ručne upraviť',
      'počet opustení aplikácie počas písomky (len informácia)'
    ],
    partialUse: [
      'Písomku spúšťaš v učiteľskej časti tlačidlom „Spustiť písomku“; žiak si ju samostatne otvoriť nemôže.',
      'Pre žiaka bez mobilu si môžeš vytlačiť zadanie skupiny A alebo B (aj s kľúčom) a opraviť ho ručne.',
      'Výsledky sa neukladajú na server. Priebeh sa zálohuje v prehliadači učiteľky; po písomke si stiahni CSV.'
    ]
  },
  student: {
    title: 'Kontrolná písomná práca: Lineárne rovnice s absolútnou hodnotou',
    subtitle: 'Hodina 23 · Lineárne rovnice',
    intro: 'Písomka má úlohy rozdelené na kroky. Za každý správny krok postupu získaš body. Zadanie sa ti zobrazí po pripojení kódom od učiteľky.',
    estimatedTime: '45 min',
    exam: true,
    activities: []
  }
});
