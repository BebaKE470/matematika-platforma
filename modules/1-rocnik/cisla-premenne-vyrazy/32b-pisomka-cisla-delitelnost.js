// Priebežná písomka z čísel (po hodine 32). Hrá sa v mobile (core/exam.js), ale zadania
// ani kľúč sú ZÁMERNE mimo tohto verejného súboru: ležia na serveri
// v api/_exams/1-u03-h032b.js a žiakom ich pošle učiteľka cez kód hodiny.
// Preto tu nie sú žiadne `activities`.
MathPlatform.registerModule({
  id: '1-u03-h032b',
  teacher: {
    placement: '1. ročník · Čísla, premenné, výrazy · po 32. hodine (po téme Vlastnosti reálnych čísel): Písomka',
    prerequisites: [
      'kritériá deliteľnosti číslami 2, 3, 4, 5, 6, 9, 10',
      'prvočíslo, zložené číslo a prvočíselný rozklad',
      'NSD a NSN dvoch čísel',
      'číselné množiny N, Z, Q, I, R a vzťah N ⊂ Z ⊂ Q',
      'komutatívnosť, asociatívnosť a distributívnosť a ich využitie pri výhodnom počítaní'
    ],
    planContent: [
      'Písomka overuje témy 28–32 tematického celku Čísla, premenné, výrazy: deliteľnosť prirodzených čísel, NSN a NSD, riešenie úloh, racionálne, iracionálne a reálne čísla a vlastnosti reálnych čísel. Percentá (hodiny 33–34) a počítanie s reálnymi číslami (35) ešte nie sú zahrnuté.'
    ],
    planPerformance: [
      'Plán uvádza: používať kritériá deliteľnosti; určiť NSN a NSD pomocou prvočíselného rozkladu. Ďalšie ciele písomky sú didaktickým rozpracovaním tém, nie doplnením oficiálneho štandardu.'
    ],
    goals: [
      'overiť, že žiak pozná pojmy a ich definície (priraďovačka)',
      'overiť používanie kritérií deliteľnosti bez delenia',
      'overiť prvočíselný rozklad a určenie NSD a NSN vrátane slovnej úlohy',
      'overiť zaradenie čísel do N, Z, Q a I',
      'overiť pomenovanie vlastností operácií a ich využitie pri výhodnom počítaní'
    ],
    competencies: [
      'presná matematická terminológia',
      'práca s číselnými množinami a ich značením',
      'výber správneho postupu (NSD alebo NSN) v slovnej úlohe'
    ],
    enrichment: [
      'Bonusová úloha: NSN troch čísel a počet jeho násobkov v danom rozsahu.'
    ],
    flow: [
      '5 min: pripojenie žiakov kódom/QR, rozdelenie do skupín A a B',
      '30–35 min: samostatná práca. Postup žiaci počítajú na papieri, výsledky zapisujú do aplikácie po krokoch',
      'koniec: ukončenie písomky (odpovede sa odovzdajú automaticky)',
      'po hodine: kontrola v tabuľke Opravovanie, ručná úprava bodov, export CSV; výsledky môžeš zverejniť žiakom'
    ],
    diagnostics: [
      'úloha 1: ktoré pojmy žiaci zamieňajú (napr. deliteľ a násobok, NSD a NSN)',
      'úloha 2: či žiak správne používa kritériá, najmä pre 4 a 6',
      'úloha 3: či žiak pozná prvočísla do 50 a vie rozložiť číslo na prvočinitele',
      'úloha 4 a 5: či žiak rozlišuje, kedy sa v slovnej úlohe hľadá NSD a kedy NSN',
      'úloha 6: či žiak chápe, že napr. 12/4 je prirodzené číslo a 0,333… je racionálne',
      'úloha 7: či žiak pozná názvy vlastností a vie ich využiť pri počítaní'
    ],
    partialUse: [
      'Písomku spúšťaš v učiteľskej časti tlačidlom „Spustiť písomku“; žiak si ju samostatne otvoriť nemôže.',
      'Pre žiaka bez mobilu si môžeš vytlačiť zadanie skupiny A alebo B (aj s kľúčom) a opraviť ho ručne.',
      'Výsledky sa neukladajú na server. Priebeh sa zálohuje v prehliadači učiteľky; po písomke si stiahni CSV.'
    ]
  },
  student: {
    title: 'Písomka: Čísla a deliteľnosť',
    subtitle: 'Po hodine 32 · Čísla, premenné, výrazy',
    intro: 'Písomka má úlohy rozdelené na kroky. Za každý správny krok postupu získaš body. Zadanie sa ti zobrazí po pripojení kódom od učiteľky.',
    estimatedTime: '40 min',
    exam: true,
    activities: []
  }
});
