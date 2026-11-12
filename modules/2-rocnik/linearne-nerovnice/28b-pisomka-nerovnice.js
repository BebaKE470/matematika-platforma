// Priebežná písomka z lineárnych nerovníc (po hodine 28). Hrá sa v mobile (core/exam.js), ale zadania
// ani kľúč sú ZÁMERNE mimo tohto verejného súboru: ležia na serveri v api/_exams/2-u04-h028b.js
// a žiakom ich pošle učiteľka cez kód hodiny. Preto tu nie sú žiadne `activities`.
MathPlatform.registerModule({
  id: '2-u04-h028b',
  teacher: {
    placement: '2. ročník · Lineárne nerovnice · po 28. hodine: Priebežná písomka',
    prerequisites: [
      'učivo ZŠ a 1. ročníka: číselná os, nerovnosti, intervaly, absolútna hodnota a algebraické úpravy',
      'lineárne rovnice a rovnice s absolútnou hodnotou z 2. ročníka',
      'hodiny 24–28 tematického celku Lineárne nerovnice'
    ],
    planContent: [
      'V poskytnutom tematickom pláne nie je pri tematickom celku „Lineárne nerovnice“ vyplnený samostatný obsahový štandard. Písomka overuje témy hodín 24–28: lineárne nerovnice a ekvivalentné úpravy (vrátane obrátenia znamienka), nerovnice s neznámou v menovateli a nerovnice s absolútnou hodnotou. Sústavy nerovníc (hodina 29) ešte nie sú zahrnuté.'
    ],
    planPerformance: [
      'V poskytnutom tematickom pláne nie je pri tematickom celku „Lineárne nerovnice“ vyplnený samostatný výkonový štandard. Ciele písomky sú didaktickým rozpracovaním tém hodín, nie vymyslený oficiálny výkonový štandard.'
    ],
    goals: [
      'overiť pojmy: neostrá nerovnosť, ekvivalentná úprava, obrátenie znamienka, definičný obor zlomku, absolútna hodnota',
      'overiť riešenie lineárnej nerovnice vrátane obrátenia znamienka pri delení záporným číslom a zápis riešenia intervalom',
      'overiť nerovnicu s neznámou v menovateli (vylúčená hodnota, nulový bod čitateľa, znamienko na intervale)',
      'overiť nerovnice |ax + b| < c a |ax + b| > c vrátane prípadov, keď je pravá strana záporná alebo nulová'
    ],
    competencies: [
      'presný matematický zápis, práca s intervalmi',
      'systematický postup a kontrola skúškou dosadením',
      'prechod medzi nerovnicou, číselnou osou a intervalom'
    ],
    enrichment: [
      'Bonusová úloha: nerovnica (ax + b)/(x + q) ≥ 1. Žiak ju musí najprv previesť na jednu stranu, nesmie násobiť menovateľom bez rozboru jeho znamienka.'
    ],
    flow: [
      '5 min: pripojenie žiakov kódom/QR, rozdelenie do skupín A a B',
      '30–35 min: samostatná práca. Postup žiaci počítajú na papieri, medzivýsledky zapisujú do aplikácie po krokoch, interval vyberajú z ponuky',
      'koniec: ukončenie písomky (odpovede sa odovzdajú automaticky)',
      'po hodine: kontrola v tabuľke Opravovanie, ručná úprava bodov, export CSV; výsledky môžeš zverejniť žiakom'
    ],
    diagnostics: [
      'úloha 1: ktoré pojmy žiaci zamieňajú (neostrá nerovnosť a zátvorky, obrátenie znamienka)',
      'úloha 2: či žiak pri delení záporným číslom obráti znamienko (krok „Znamienko“)',
      'úloha 3: či žiak vylúči hodnotu z menovateľa a správne určí znamienko na intervale medzi kritickými hodnotami',
      'úlohy 4 a 5: či žiak rozlišuje |…| < c (jeden interval) a |…| > c (dva intervaly) a správne zapíše krajné body',
      'úloha 6: či žiak rozpozná prázdnu množinu, množinu ℝ a jediné riešenie pri nulovej alebo zápornej pravej strane'
    ],
    partialUse: [
      'Písomku spúšťaš v učiteľskej časti tlačidlom „Spustiť písomku“; žiak si ju samostatne otvoriť nemôže.',
      'Riešenie nerovnice je interval, preto sa zadáva výberom z ponuky štyroch možností; kritické hodnoty a celé riešenia sa zapisujú ako čísla.',
      'Výsledky sa neukladajú na server. Priebeh sa zálohuje v prehliadači učiteľky; po písomke si stiahni CSV.'
    ]
  },
  student: {
    title: 'Písomka: Lineárne nerovnice',
    subtitle: 'Po hodine 28 · Lineárne nerovnice',
    intro: 'Písomka má úlohy rozdelené na kroky. Za každý správny krok postupu získaš body. Zadanie sa ti zobrazí po pripojení kódom od učiteľky.',
    estimatedTime: '40 min',
    exam: true,
    activities: []
  }
});
