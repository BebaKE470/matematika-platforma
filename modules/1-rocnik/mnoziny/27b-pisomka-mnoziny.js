// Písomka z celého tematického celku Množiny (po hodine 26, skupiny A a B). Hrá sa v mobile
// (core/exam.js); zadania ani kľúč sú ZÁMERNE mimo tohto verejného súboru: ležia na serveri
// v api/_exams/1-u02-h027b.js a žiakom ich pošle učiteľka cez kód hodiny.
// Preto tu nie sú žiadne `activities`.
MathPlatform.registerModule({
  id: '1-u02-h027b',
  teacher: {
    placement: '1. ročník · Množiny · po 26. hodine (celý tematický celok): Písomka',
    prerequisites: [
      'množina, prvok, zápis množiny, symboly ∈, ∉',
      'podmnožina (⊆), prázdna a univerzálna množina',
      'množina daná charakteristickou vlastnosťou {x ∈ U; podmienka}',
      'kardinalita |A| a počet podmnožín',
      'zjednotenie, prienik, rozdiel A − B a doplnok A′',
      'Vennove diagramy, kombinované operácie so zátvorkami, aplikačné úlohy so vzorcom |A ∪ B| = |A| + |B| − |A ∩ B|'
    ],
    planContent: [
      'Písomka overuje celý tematický celok Množiny (hodiny 16–26): úvod do množín, podmnožiny, charakteristická vlastnosť, kardinalita, zjednotenie, prienik, rozdiel, doplnok, Vennove diagramy, kombinované operácie a aplikačné úlohy.'
    ],
    planPerformance: [
      'V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; ciele písomky sú didaktickým rozpracovaním tém, nie doplnením oficiálneho štandardu.'
    ],
    goals: [
      'overiť, že žiak pozná pojmy a ich definície (priraďovačka)',
      'overiť rozlišovanie prvku a podmnožiny (∈, ∉, ⊆) vrátane prázdnej množiny',
      'overiť zápis množiny vymenovaním prvkov z charakteristickej vlastnosti, kardinalitu a počet podmnožín',
      'overiť operácie ∪, ∩, rozdiel a doplnok, čítanie Vennovho diagramu a kombinované operácie so zátvorkami',
      'overiť aplikačnú úlohu s dvoma množinami a vzorec |A ∪ B|'
    ],
    competencies: [
      'presná matematická terminológia',
      'čítanie a používanie množinových symbolov',
      'systematický výpis prvkov a podmnožín',
      'preklad medzi slovným, symbolickým a grafickým zápisom'
    ],
    enrichment: [
      'Bonusová úloha: dopočítanie neznámej kardinality zo vzorca |A ∪ B| = |A| + |B| − |A ∩ B|.'
    ],
    flow: [
      '5 min: pripojenie žiakov kódom/QR, rozdelenie do skupín A a B',
      '35–40 min: samostatná práca. Postup žiaci počítajú na papieri, výsledky zapisujú do aplikácie po krokoch',
      'koniec: ukončenie písomky (odpovede sa odovzdajú automaticky)',
      'po hodine: kontrola v tabuľke Opravovanie, ručná úprava bodov, export CSV; výsledky môžeš zverejniť žiakom a pozrieť si analýzu triedy'
    ],
    diagnostics: [
      'úloha 1: ktoré pojmy žiaci zamieňajú (napr. rozdiel a doplnok, prienik a zjednotenie)',
      'úloha 2: či žiak rozlišuje prvok (∈) a podmnožinu (⊆), najmä pri ∅',
      'úloha 3: či žiak správne číta ostré a neostré nerovnosti a rozpozná prázdnu množinu',
      'úloha 4: či žiak počíta kardinalitu opakujúcich sa prvkov raz a pozná 2ⁿ',
      'úloha 5: či žiak vie doplnok brať vzhľadom na U',
      'úloha 6: či žiak správne číta oblasti Vennovho diagramu',
      'úloha 7: či žiak vyhodnocuje najprv zátvorku',
      'úloha 8: či žiak aplikuje |A ∪ B| = |A| + |B| − |A ∩ B| a rozlišuje „iba jeden“ od „aspoň jeden“'
    ],
    partialUse: [
      'Písomku spúšťaš v učiteľskej časti tlačidlom „Spustiť písomku“; žiak si ju samostatne otvoriť nemôže.',
      'Pre žiaka bez mobilu si môžeš vytlačiť zadanie skupiny A alebo B (aj s kľúčom) a opraviť ho ručne.',
      'Príprava na túto písomku (1-u02-h027p) má rovnakú stavbu, ale iné zadania.',
      'Výsledky sa neukladajú na server. Priebeh sa zálohuje v prehliadači učiteľky; po písomke si stiahni CSV.'
    ]
  },
  student: {
    title: 'Písomka: Množiny',
    subtitle: 'Po hodine 26 · Množiny',
    intro: 'Písomka má úlohy rozdelené na kroky. Za každý správny krok postupu získaš body. Zadanie sa ti zobrazí po pripojení kódom od učiteľky.',
    estimatedTime: '45 min',
    exam: true,
    activities: []
  }
});
