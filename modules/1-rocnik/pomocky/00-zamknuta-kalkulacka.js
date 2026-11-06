// Všeobecná kalkulačka so zamknutým režimom (registry `kind: 'calc'`, core/calc.js).
// Nie je to učebná téma, ale pomôcka k písomke alebo cvičeniu: žiak vidí iba
// kalkulačku a platforma počíta, koľkokrát opustil aplikáciu. Preto tu nie sú
// žiadne `activities` (podobne ako pri písomke).
MathPlatform.registerModule({
  id: 'pomocky-kalkulacka',
  teacher: {
    placement: 'Všeobecná pomôcka pre všetky ročníky · nie je viazaná na tematický plán ani na konkrétnu hodinu',
    prerequisites: [
      'žiak má otvorenú platformu v mobile a vie sa pripojiť kódom alebo QR kódom (rovnako ako na živú hodinu)'
    ],
    goals: [
      'dať žiakom pri písomke (papierovej aj mobilnej) a pri samostatnej práci iba kalkulačku, bez ostatných aplikácií',
      'evidovať a zviditeľniť každé opustenie aplikácie — počet opustení aj čas strávený mimo'
    ],
    planContent: [
      'Mimo tematického plánu: nástroj, nie učivo. Neprináša žiadny nový matematický obsah ani štandard.'
    ],
    planPerformance: [
      'Mimo tematického plánu: nástroj, nie učivo. Neprináša žiadny nový matematický obsah ani štandard.'
    ],
    competencies: [
      'zodpovedné používanie digitálnej pomôcky',
      'samostatná práca podľa dohodnutých pravidiel'
    ],
    enrichment: [
      'Kalkulačka počíta aj sin, cos, tan (v stupňoch alebo radiánoch), logaritmy, odmocniny, mocniny, faktoriál a vie ukázať výsledok ako zlomok. Funkcie ukáž iba vtedy, keď ich žiaci už v učive majú.'
    ],
    flow: [
      '1 min: v učiteľskej časti vyber „Spustiť zamknutú kalkulačku“ — zobrazí sa QR kód a kód',
      '2 min: žiaci sa pripoja (meno a priezvisko + kód) a uvidia iba kalkulačku',
      'počas práce: sleduješ tabuľku — kto je práve mimo aplikácie, koľkokrát ju opustil a na ako dlho',
      'koniec: tlačidlo „Ukončiť zámok“ — žiakom sa zámok vypne, môžeš si stiahnuť CSV'
    ],
    diagnostics: [
      'počet opustení aplikácie u každého žiaka',
      'celkový čas strávený mimo aplikácie',
      'či sa žiak odpojil sám (pred ukončením zámku)'
    ],
    partialUse: [
      'Funguje aj pri papierovej písomke: žiaci píšu na papier a mobil majú položený na lavici otvorený v kalkulačke.',
      'Žiaci si ju môžu otvoriť aj sami v katalógu (Pomôcky → Kalkulačka) — bez zámku a bez posielania čohokoľvek učiteľovi.',
      'Webová stránka nevie telefón fyzicky zamknúť. Vie však spoľahlivo zaznamenať prepnutie do inej aplikácie, zamknutie obrazovky či prepnutie karty a zobraziť to učiteľovi. Aplikácia sa počas zámku snaží udržať obrazovku zapnutú, aby sa jej automatické zhasnutie nepočítalo ako opustenie.',
      'Obnovenie alebo zatvorenie stránky sa tiež počíta ako opustenie. Po opätovnom pripojení pod rovnakým menom a kódom sa počet nevynuluje.',
      'Ak je telefón mimo aplikácie dlhšie, správa sa môže doručiť až po návrate — prehliadač stránku na pozadí uspí. Údaj o počte a čase mimo je však po návrate vždy presný.',
      'Výsledky sa neukladajú na server; po ukončení si stiahni CSV.'
    ]
  },
  student: {
    calc: true,
    title: 'Kalkulačka',
    subtitle: 'Všeobecná pomôcka · pre všetky ročníky',
    estimatedTime: 'podľa potreby',
    intro: 'Bežná aj vedecká kalkulačka. Pri písomke alebo cvičení ju učiteľ spustí v zamknutom režime — vtedy sa počíta, koľkokrát opustíš aplikáciu.',
    activities: []
  }
});
