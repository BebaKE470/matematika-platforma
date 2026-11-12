// Kontrolná písomná práca z celého tematického celku Lineárne nerovnice (hodina 32). Hrá sa v mobile
// (core/exam.js), ale zadania ani kľúč sú ZÁMERNE mimo tohto verejného súboru: ležia na serveri
// v api/_exams/2-u04-h032b.js a žiakom ich pošle učiteľka cez kód hodiny. Preto tu nie sú `activities`.
MathPlatform.registerModule({
  id: '2-u04-h032b',
  teacher: {
    placement: '2. ročník · Lineárne nerovnice · 32. hodina: Kontrolná písomná práca z celého celku',
    prerequisites: [
      'lineárne nerovnice, ekvivalentné úpravy a obrátenie znamienka',
      'nerovnice s neznámou v menovateli',
      'nerovnice s absolútnou hodnotou |ax + b| < c, |ax + b| > c',
      'sústavy nerovníc s jednou neznámou, prienik množín riešení',
      'zápis riešenia intervalom'
    ],
    planContent: [
      'V poskytnutom tematickom pláne nie je pri tematickom celku „Lineárne nerovnice“ vyplnený samostatný obsahový štandard. Písomka overuje celý tematický celok (hodiny 24–31).'
    ],
    planPerformance: [
      'V poskytnutom tematickom pláne nie je pri tematickom celku „Lineárne nerovnice“ vyplnený samostatný výkonový štandard. Ciele písomky sú didaktickým rozpracovaním tém hodín, nie vymyslený oficiálny výkonový štandard.'
    ],
    goals: [
      'overiť pojmy a ekvivalentné úpravy nerovníc',
      'overiť riešenie nerovnice so zlomkami vrátane obrátenia znamienka a zápis riešenia intervalom',
      'overiť nerovnicu s neznámou v menovateli a nerovnice s absolútnou hodnotou',
      'overiť riešenie sústavy nerovníc ako prienik a slovnú úlohu vedúcu na lineárnu nerovnicu'
    ],
    competencies: [
      'presný matematický zápis a práca s intervalmi',
      'systematický postup, kontrola skúškou',
      'modelovanie reálnej situácie nerovnicou'
    ],
    enrichment: [
      'Bonusová úloha: sústava, v ktorej je jedna nerovnica s absolútnou hodnotou a druhá lineárna. Žiak musí nájsť prienik dvoch intervalov.'
    ],
    flow: [
      '5 min: pripojenie žiakov kódom/QR, rozdelenie do skupín A a B',
      '35–40 min: samostatná práca. Postup žiaci počítajú na papieri, medzivýsledky zapisujú do aplikácie po krokoch, interval vyberajú z ponuky',
      'koniec: ukončenie písomky (odpovede sa odovzdajú automaticky)',
      'po hodine: kontrola v tabuľke Opravovanie, ručná úprava bodov, export CSV; výsledky môžeš zverejniť žiakom'
    ],
    diagnostics: [
      'úloha 1: pojmy (sústava ako prienik, definičný obor, obrátenie znamienka)',
      'úloha 2: obrátenie znamienka pri zápornom koeficiente a práca so zlomkami',
      'úloha 3: vylúčená hodnota, znamienko na intervale a zátvorky pri krajných bodoch',
      'úlohy 4 a 5: rozlišovanie |…| ≤ c (jeden interval) a |…| ≥ c (dva intervaly)',
      'úloha 6: prienik riešení dvoch nerovníc',
      'úloha 7: zostavenie nerovnice zo slovnej úlohy a rozdiel medzi hranicou a najmenším/najväčším celým riešením'
    ],
    partialUse: [
      'Písomku spúšťaš v učiteľskej časti tlačidlom „Spustiť písomku“; žiak si ju samostatne otvoriť nemôže.',
      'Riešenie nerovnice je interval, preto sa zadáva výberom z ponuky štyroch možností; kritické hodnoty a celé riešenia sa zapisujú ako čísla.',
      'Výsledky sa neukladajú na server. Priebeh sa zálohuje v prehliadači učiteľky; po písomke si stiahni CSV.'
    ]
  },
  student: {
    title: 'Kontrolná písomná práca: Lineárne nerovnice',
    subtitle: 'Hodina 32 · Lineárne nerovnice',
    intro: 'Písomka má úlohy rozdelené na kroky. Za každý správny krok postupu získaš body. Zadanie sa ti zobrazí po pripojení kódom od učiteľky.',
    estimatedTime: '45 min',
    exam: true,
    activities: []
  }
});
