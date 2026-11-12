// Príprava na kontrolnú písomnú prácu z celého tematického celku Čísla, premenné, výrazy.
// Rovnako ako ostrá písomka sa hrá v mobile (core/exam.js); zadania ani kľúč sú ZÁMERNE
// mimo tohto verejného súboru: ležia na serveri v api/_exams/1-u03-h037p.js.
// Samostatná písomka s jednou skupinou.
MathPlatform.registerModule({
  id: '1-u03-h037p',
  teacher: {
    placement: '1. ročník · Čísla, premenné, výrazy · pred 37. hodinou: Príprava na kontrolnú písomnú prácu z celého celku',
    prerequisites: [
      'kritériá deliteľnosti, prvočísla, prvočíselný rozklad, NSD a NSN',
      'číselné množiny N, Z, Q, I, R a vzťah N ⊂ Z ⊂ Q',
      'komutatívnosť, asociatívnosť a distributívnosť',
      'percentá: časť, základ, počet percent, zľava a zvýšenie ceny, opakovaná zmena'
    ],
    planContent: [
      'Príprava pokrýva celý tematický celok Čísla, premenné, výrazy (hodiny 28–36) pred kontrolnou písomnou prácou v 37. hodine.'
    ],
    planPerformance: [
      'Plán uvádza: riešiť úlohy finančnej matematiky; používať kritériá deliteľnosti; určiť NSN a NSD pomocou prvočíselného rozkladu. Ďalšie ciele prípravy sú didaktickým rozpracovaním tém, nie doplnením oficiálneho štandardu.'
    ],
    goals: [
      'zopakovať pojmy a definície z celku',
      'precvičiť kritériá deliteľnosti, prvočíselný rozklad, NSD a NSN a slovnú úlohu s nimi',
      'precvičiť zaradenie čísel do N, Z, Q, I a vlastnosti operácií',
      'precvičiť percentá: časť, základ, počet percent a zľavu či zdraženie vrátane opakovanej zmeny',
      'ukázať žiakom formát písomky (riešenie po krokoch) bez stresu zo známky'
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
      '5 min: pripojenie žiakov kódom/QR (všetci riešia rovnaké zadanie, bez skupín)',
      '35–40 min: samostatná práca. Postup žiaci počítajú na papieri, výsledky zapisujú do aplikácie po krokoch',
      'koniec: ukončenie prípravy (odpovede sa odovzdajú automaticky)',
      'po hodine: v analýze triedy nájdi úlohy a kroky, ktoré robili triede problém, a prejdi ich pred ostrou písomkou; známku nezapisuj'
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
      'Prípravu spúšťaš v učiteľskej časti tlačidlom „Spustiť písomku“; žiak si ju samostatne otvoriť nemôže.',
      'Je to samostatný záznam: ostrá písomka (1-u03-h037b) sa spúšťa osobitne.',
      'Výsledky sa neukladajú na server. Priebeh sa zálohuje v prehliadači učiteľky; po hodine si prípadne stiahni CSV.'
    ]
  },
  student: {
    title: 'Príprava na písomku: Čísla, premenné, výrazy',
    subtitle: 'Pred hodinou 37 · Čísla, premenné, výrazy',
    intro: 'Toto je príprava na písomku z celého celku Čísla, premenné, výrazy. Úlohy sú rozdelené na kroky a za každý správny krok postupu získaš body. Zadanie sa ti zobrazí po pripojení kódom od učiteľky.',
    estimatedTime: '45 min',
    exam: true,
    activities: []
  }
});
