// Kontrolná písomná práca z celého tematického celku Čísla, premenné, výrazy (hodiny 28–36,
// skupiny A a B). Hrá sa v mobile (core/exam.js); zadania ani kľúč sú ZÁMERNE mimo tohto
// verejného súboru: ležia na serveri v api/_exams/1-u03-h037b.js a žiakom ich pošle učiteľka
// cez kód hodiny. Preto tu nie sú žiadne `activities`.
MathPlatform.registerModule({
  id: '1-u03-h037b',
  teacher: {
    placement: '1. ročník · Čísla, premenné, výrazy · 37. hodina (celý tematický celok): Kontrolná písomná práca',
    prerequisites: [
      'kritériá deliteľnosti, prvočísla, prvočíselný rozklad, NSD a NSN',
      'číselné množiny N, Z, Q, I, R a vzťah N ⊂ Z ⊂ Q',
      'komutatívnosť, asociatívnosť a distributívnosť',
      'percentá: časť, základ, počet percent, zľava a zvýšenie ceny, opakovaná zmena'
    ],
    planContent: [
      'Písomka overuje celý tematický celok Čísla, premenné, výrazy (hodiny 28–36): deliteľnosť, prvočísla, NSN a NSD, číselné množiny, vlastnosti reálnych čísel, percentá a úlohy z praxe.'
    ],
    planPerformance: [
      'Plán uvádza: riešiť úlohy finančnej matematiky; používať kritériá deliteľnosti; určiť NSN a NSD pomocou prvočíselného rozkladu. Ďalšie ciele písomky sú didaktickým rozpracovaním tém, nie doplnením oficiálneho štandardu.'
    ],
    goals: [
      'overiť, že žiak pozná pojmy a ich definície (priraďovačka)',
      'overiť kritériá deliteľnosti, prvočíselný rozklad, NSD a NSN vrátane slovnej úlohy',
      'overiť zaradenie čísel do N, Z, Q, I a vlastnosti operácií',
      'overiť percentá: časť, základ, počet percent, zľavu, zdraženie a opakovanú zmenu ceny'
    ],
    competencies: [
      'presná matematická terminológia',
      'výber správneho postupu v slovnej úlohe',
      'práca s percentami v praktických situáciách'
    ],
    enrichment: [
      'Bonusová úloha: najmenšie číslo so zvyškom 1 pri delení viacerými číslami (NSN + 1).'
    ],
    flow: [
      '5 min: pripojenie žiakov kódom/QR, rozdelenie do skupín A a B',
      '35–40 min: samostatná práca. Postup žiaci počítajú na papieri, výsledky zapisujú do aplikácie po krokoch',
      'koniec: ukončenie písomky (odpovede sa odovzdajú automaticky)',
      'po hodine: kontrola v tabuľke Opravovanie, ručná úprava bodov, export CSV; výsledky môžeš zverejniť žiakom a pozrieť si analýzu triedy'
    ],
    diagnostics: [
      'úloha 1: ktoré pojmy žiaci zamieňajú (napr. NSD a NSN, percento a základ)',
      'úloha 2: či žiak správne používa kritériá deliteľnosti',
      'úloha 3 a 4: či žiak vie rozložiť číslo a rozlíšiť NSD a NSN v slovnej úlohe',
      'úloha 5: či žiak zaraďuje čísla do najmenšej vhodnej množiny',
      'úloha 7: či žiak správne určuje základ, časť a počet percent',
      'úloha 8: či žiak chápe, že zmena o p % sa počíta z aktuálnej ceny'
    ],
    partialUse: [
      'Písomku spúšťaš v učiteľskej časti tlačidlom „Spustiť písomku“; žiak si ju samostatne otvoriť nemôže.',
      'Pre žiaka bez mobilu si môžeš vytlačiť zadanie skupiny A alebo B (aj s kľúčom) a opraviť ho ručne.',
      'Príprava na túto písomku (1-u03-h037p) má rovnakú stavbu, ale iné zadania.',
      'Výsledky sa neukladajú na server. Priebeh sa zálohuje v prehliadači učiteľky; po písomke si stiahni CSV.'
    ]
  },
  student: {
    title: 'Písomka: Čísla, premenné, výrazy',
    subtitle: 'Hodina 37 · Čísla, premenné, výrazy',
    intro: 'Písomka má úlohy rozdelené na kroky. Za každý správny krok postupu získaš body. Zadanie sa ti zobrazí po pripojení kódom od učiteľky.',
    estimatedTime: '45 min',
    exam: true,
    activities: []
  }
});
