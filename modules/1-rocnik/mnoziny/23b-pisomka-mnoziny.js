// Písomka z množín (po hodine 23). Hrá sa v mobile (core/exam.js), ale zadania
// ani kľúč sú ZÁMERNE mimo tohto verejného súboru: ležia na serveri
// v api/_exams/1-u02-h023b.js a žiakom ich pošle učiteľka cez kód hodiny.
// Preto tu nie sú žiadne `activities`.
MathPlatform.registerModule({
  id: '1-u02-h023b',
  teacher: {
    placement: '1. ročník · Množiny · po 23. hodine (po téme Operácie s množinami – doplnok, rozdiel): Písomka',
    prerequisites: [
      'množina, prvok, zápis množiny, symboly ∈, ∉',
      'podmnožina (⊆), prázdna a univerzálna množina',
      'množina daná charakteristickou vlastnosťou {x ∈ U; podmienka}',
      'kardinalita |A| a počet podmnožín',
      'zjednotenie, prienik, rozdiel A − B a doplnok A′'
    ],
    planContent: [
      'Písomka overuje témy 16–23 tematického celku Množiny: úvod do množín, podmnožiny, charakteristická vlastnosť, kardinalita, zjednotenie, prienik, rozdiel a doplnok. Vennove diagramy (hodina 24) a aplikačné úlohy (hodina 26) ešte nie sú zahrnuté.'
    ],
    planPerformance: [
      'V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; ciele písomky sú didaktickým rozpracovaním tém, nie doplnením oficiálneho štandardu.'
    ],
    goals: [
      'overiť, že žiak pozná pojmy a ich definície (priraďovačka)',
      'overiť rozlišovanie prvku a podmnožiny (∈, ∉, ⊆) vrátane prázdnej množiny',
      'overiť zápis množiny vymenovaním prvkov z charakteristickej vlastnosti',
      'overiť kardinalitu a počet podmnožín',
      'overiť operácie ∪, ∩, rozdiel a doplnok na konkrétnych množinách a jednoduchú slovnú úlohu s dvoma množinami'
    ],
    competencies: [
      'presná matematická terminológia',
      'čítanie a používanie množinových symbolov',
      'systematický výpis prvkov a podmnožín'
    ],
    enrichment: [
      'Bonusová úloha: ukáže sa na príklade, že (A ∪ B)′ = A′ ∩ B′ (de Morganov zákon). Žiak ho nedokazuje, iba porovná výsledky.'
    ],
    flow: [
      '5 min: pripojenie žiakov kódom/QR, rozdelenie do skupín A a B',
      '30–35 min: samostatná práca. Postup žiaci počítajú na papieri, výsledky zapisujú do aplikácie po krokoch',
      'koniec: ukončenie písomky (odpovede sa odovzdajú automaticky)',
      'po hodine: kontrola v tabuľke Opravovanie, ručná úprava bodov, export CSV; výsledky môžeš zverejniť žiakom'
    ],
    diagnostics: [
      'úloha 1: ktoré pojmy žiaci zamieňajú (napr. rozdiel a doplnok, prienik a zjednotenie)',
      'úloha 2: či žiak rozlišuje prvok (∈) a podmnožinu (⊆), najmä pri ∅',
      'úloha 3: či žiak správne číta ostré a neostré nerovnosti a rozpozná prázdnu množinu',
      'úloha 4: či žiak počíta kardinalitu opakujúcich sa prvkov raz a pozná 2ⁿ',
      'úloha 5: či žiak vie doplnok brať vzhľadom na U',
      'úloha 6: či žiak pracuje s prienikom a aplikuje |A ∪ B| = |A| + |B| − |A ∩ B|'
    ],
    partialUse: [
      'Písomku spúšťaš v učiteľskej časti tlačidlom „Spustiť písomku“; žiak si ju samostatne otvoriť nemôže.',
      'Pre žiaka bez mobilu máš tlačenú verziu: pisomky-na-tlac/Pisomka_Mnoziny_A_B.docx (kľúč v Pisomka_Mnoziny_KLUC.docx).',
      'Výsledky sa neukladajú na server. Priebeh sa zálohuje v prehliadači učiteľky; po písomke si stiahni CSV.'
    ]
  },
  student: {
    title: 'Písomka: Množiny',
    subtitle: 'Po hodine 23 · Množiny',
    intro: 'Písomka má úlohy rozdelené na kroky. Za každý správny krok postupu získaš body. Zadanie sa ti zobrazí po pripojení kódom od učiteľky.',
    estimatedTime: '40 min',
    exam: true,
    activities: []
  }
});
