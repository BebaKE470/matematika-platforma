// Príprava na kontrolnú písomnú prácu z celého tematického celku Lineárne nerovnice. Rovnako ako ostrá
// písomka sa hrá v mobile (core/exam.js); zadania ani kľúč sú ZÁMERNE mimo tohto verejného súboru:
// ležia na serveri v api/_exams/2-u04-h032p.js. Samostatná písomka s jednou skupinou, nezávislá
// od ostrej písomky (skupiny A a B) v module 2-u04-h032b.
MathPlatform.registerModule({
  id: '2-u04-h032p',
  teacher: {
    placement: '2. ročník · Lineárne nerovnice · pred 32. hodinou: Príprava na kontrolnú písomnú prácu z celého celku',
    prerequisites: [
      'lineárne nerovnice, ekvivalentné úpravy a obrátenie znamienka',
      'nerovnice s neznámou v menovateli',
      'nerovnice s absolútnou hodnotou |ax + b| < c, |ax + b| > c',
      'sústavy nerovníc s jednou neznámou, prienik množín riešení',
      'zápis riešenia intervalom'
    ],
    planContent: [
      'V poskytnutom tematickom pláne nie je pri tematickom celku „Lineárne nerovnice“ vyplnený samostatný obsahový štandard. Príprava pokrýva celý tematický celok (hodiny 24–31) pred kontrolnou písomnou prácou v 32. hodine.'
    ],
    planPerformance: [
      'V poskytnutom tematickom pláne nie je pri tematickom celku „Lineárne nerovnice“ vyplnený samostatný výkonový štandard. Ciele písomky sú didaktickým rozpracovaním tém hodín, nie vymyslený oficiálny výkonový štandard.'
    ],
    goals: [
      'zopakovať pojmy a ekvivalentné úpravy nerovníc',
      'precvičiť nerovnicu so zlomkami (spoločný násobok menovateľov, obrátenie znamienka) a zápis riešenia intervalom',
      'precvičiť nerovnicu s neznámou v menovateli a nerovnice s absolútnou hodnotou',
      'precvičiť sústavu nerovníc (prienik) a slovnú úlohu vedúcu na lineárnu nerovnicu',
      'ukázať žiakom formát písomky (riešenie po krokoch) bez stresu zo známky'
    ],
    competencies: [
      'presný postup riešenia a jeho zápis po krokoch',
      'prechod medzi nerovnicou a intervalom, práca s prienikom',
      'kontrola výsledku skúškou dosadením'
    ],
    enrichment: [
      'Úlohy majú rovnakú stavbu ako ostrá písomka, len iné čísla, takže žiaci vedia, čo ich čaká. Bonusová úloha spája absolútnu hodnotu so sústavou nerovníc.'
    ],
    flow: [
      '5 min: pripojenie žiakov kódom/QR (všetci riešia rovnaké zadanie, bez skupín)',
      '35–40 min: samostatná práca. Postup žiaci počítajú na papieri, medzivýsledky zapisujú do aplikácie po krokoch',
      'koniec: ukončenie prípravy (odpovede sa odovzdajú automaticky)',
      'po hodine: prejdi so žiakmi najčastejšie chyby z tabuľky Opravovanie; ide o prípravu, známku nezapisuj'
    ],
    diagnostics: [
      'úloha 2: či žiak pri zápornom koeficiente obráti znamienko po vynásobení a vydelení',
      'úloha 3: či žiak vylúči hodnotu z menovateľa a zapíše interval so správnou zátvorkou',
      'úlohy 4 a 5: rozlišovanie |…| ≤ c a |…| ≥ c',
      'úloha 6: či žiak rieši každú nerovnicu osobitne a berie prienik, nie zjednotenie',
      'úloha 7: či žiak rozlišuje hranicu a celé riešenie pri ostrej a neostrej nerovnosti',
      'počet opustení aplikácie počas prípravy (len informácia)'
    ],
    partialUse: [
      'Prípravu spúšťaš v učiteľskej časti tlačidlom „Spustiť písomku“; žiak si ju samostatne otvoriť nemôže.',
      'Je to samostatný záznam: ostrá písomka so skupinami A a B (modul 2-u04-h032b) sa spúšťa osobitne.',
      'Výsledky sa neukladajú na server. Priebeh sa zálohuje v prehliadači učiteľky; po hodine si prípadne stiahni CSV.'
    ]
  },
  student: {
    title: 'Príprava na písomku: Lineárne nerovnice',
    subtitle: 'Pred hodinou 32 · Lineárne nerovnice',
    intro: 'Toto je príprava na písomku. Úlohy sú rozdelené na kroky a za každý správny krok postupu získaš body. Zadanie sa ti zobrazí po pripojení kódom od učiteľky.',
    estimatedTime: '45 min',
    exam: true,
    activities: []
  }
});
