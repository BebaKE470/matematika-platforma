// Príprava na kontrolnú písomnú prácu z celého tematického celku Množiny. Rovnako ako ostrá
// písomka sa hrá v mobile (core/exam.js); zadania ani kľúč sú ZÁMERNE mimo tohto verejného
// súboru: ležia na serveri v api/_exams/1-u02-h027p.js. Samostatná písomka s jednou skupinou.
MathPlatform.registerModule({
  id: '1-u02-h027p',
  teacher: {
    placement: '1. ročník · Množiny · pred 27. hodinou: Príprava na kontrolnú písomnú prácu z celého celku',
    prerequisites: [
      'množina, prvok, zápis množiny, symboly ∈, ∉',
      'podmnožina (⊆), prázdna a univerzálna množina',
      'množina daná charakteristickou vlastnosťou {x ∈ U; podmienka}',
      'kardinalita |A| a počet podmnožín',
      'zjednotenie, prienik, rozdiel A − B a doplnok A′',
      'Vennove diagramy, kombinované operácie so zátvorkami, aplikačné úlohy so vzorcom |A ∪ B| = |A| + |B| − |A ∩ B|'
    ],
    planContent: [
      'Príprava pokrýva celý tematický celok Množiny (hodiny 16–26) pred kontrolnou písomnou prácou v 27. hodine.'
    ],
    planPerformance: [
      'V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; ciele prípravy sú didaktickým rozpracovaním tém, nie doplnením oficiálneho štandardu.'
    ],
    goals: [
      'zopakovať pojmy a definície a rozlišovanie prvku a podmnožiny (∈, ∉, ⊆)',
      'precvičiť zápis množín charakteristickou vlastnosťou, kardinalitu a počet podmnožín',
      'precvičiť zjednotenie, prienik, rozdiel a doplnok, ich čítanie vo Vennovom diagrame a kombinované operácie so zátvorkami',
      'precvičiť aplikačnú úlohu s dvoma množinami a vzorec |A ∪ B|',
      'ukázať žiakom formát písomky (riešenie po krokoch) bez stresu zo známky'
    ],
    competencies: [
      'presná matematická terminológia a čítanie množinových symbolov',
      'systematický výpis prvkov a podmnožín',
      'preklad medzi slovným, symbolickým a grafickým zápisom'
    ],
    enrichment: [
      'Bonusová úloha využíva vzorec |A ∪ B| = |A| + |B| − |A ∩ B| na dopočítanie neznámej kardinality.'
    ],
    flow: [
      '5 min: pripojenie žiakov kódom/QR (všetci riešia rovnaké zadanie, bez skupín)',
      '35–40 min: samostatná práca. Postup žiaci počítajú na papieri, výsledky zapisujú do aplikácie po krokoch',
      'koniec: ukončenie prípravy (odpovede sa odovzdajú automaticky)',
      'po hodine: v analýze triedy nájdi úlohy a kroky, ktoré robili triede problém, a prejdi ich pred ostrou písomkou; známku nezapisuj'
    ],
    diagnostics: [
      'úloha 1: ktoré pojmy žiaci zamieňajú (napr. rozdiel a doplnok, prienik a zjednotenie)',
      'úloha 2: či žiak rozlišuje prvok (∈) a podmnožinu (⊆), najmä pri ∅',
      'úloha 4: či žiak počíta kardinalitu opakujúcich sa prvkov raz a pozná 2ⁿ',
      'úloha 6: či žiak správne číta oblasti Vennovho diagramu',
      'úloha 7: či žiak vyhodnocuje najprv zátvorku',
      'úloha 8: či žiak aplikuje |A ∪ B| = |A| + |B| − |A ∩ B| a rozlišuje „iba jeden“ od „aspoň jeden“'
    ],
    partialUse: [
      'Prípravu spúšťaš v učiteľskej časti tlačidlom „Spustiť písomku“; žiak si ju samostatne otvoriť nemôže.',
      'Je to samostatný záznam: ostrá písomka (1-u02-h023b) sa spúšťa osobitne.',
      'Výsledky sa neukladajú na server. Priebeh sa zálohuje v prehliadači učiteľky; po hodine si prípadne stiahni CSV.'
    ]
  },
  student: {
    title: 'Príprava na písomku: Množiny',
    subtitle: 'Pred hodinou 27 · Množiny',
    intro: 'Toto je príprava na písomku z celého celku Množiny. Úlohy sú rozdelené na kroky a za každý správny krok postupu získaš body. Zadanie sa ti zobrazí po pripojení kódom od učiteľky.',
    estimatedTime: '45 min',
    exam: true,
    activities: []
  }
});
