MathPlatform.registerModule({
  id: "1-u01-h004",
  teacher: {
    placement: "1. ročník · Výroková formula · 4.–5. hodina: Zložené výroky, logické spojky, tabuľky",
    prerequisites: [
      "jednoduchý výrok, pravdivostná hodnota a negácia",
      "symbol ¬A bol zavedený na 3. hodine",
      "symboly ∧, ∨, ⇒, ⇔, ich názvy, slovné čítanie a základné pravdivostné tabuľky učiteľ zavedie pred použitím platformy"
    ],
    planContent: [
      "Relevantný obsah aktuálneho tematického plánu: Výroky a ich pravdivostná hodnota; jednoduchý výrok a jeho negácia; logické spojky; negácia zložených výrokov a de Morganove zákony; tautológie, kontradikcie a kontingencie; obmena, obrátenie a negácia implikácie; všeobecný a existenčný kvantifikátor; negácia kvantifikovaných výrokov; priamy, nepriamy dôkaz a dôkaz sporom; aplikácie výrokovej logiky; opakovanie a kontrolná písomná práca.",
      "Táto 4. hodina je prvou hodinou dvojhodinového bloku 4.–5. hodina „Zložené výroky, logické spojky, tabuľky“.",
      "Modul nepredbieha negáciu zložených výrokov, de Morganove zákony, tautológie, kontradikcie, kvantifikátory ani dôkazy; tie patria do neskoršieho priebehu tematického celku."
    ],
    planPerformance: [
      "Určiť, či daná vetná konštrukcia je výrokom (vrátane všeobecného výroku vyjadreného bez použitia všeobecných kvantifikátorov).",
      "Na konkrétnych príkladoch vysvetliť rozdiel medzi vylučovacím a nevylučovacím chápaním spojky alebo.",
      "Vysvetliť rozdiel medzi implikáciou a ekvivalenciou.",
      "Vysvetliť de Morganove pravidlá pre negáciu výrokov A ∧ B a A ∨ B.",
      "Správne vnímať logické spojky v rôznych prostrediach.",
      "Tvoriť zložené výroky a zistiť štruktúru a pravdivosť výrokov zložených z malého počtu jednoduchých výrokov pomocou logických spojok.",
      "Utvoriť negáciu výroku pomocou pravidiel pre negáciu základných zložených výrokov a negáciu jednoduchých kvantifikátorov.",
      "Vysvetliť, kedy na dôkaz nepravdivosti tvrdenia možno použiť protipríklad.",
      "V jednoduchých prípadoch vysloviť kontrapríklad všeobecných tvrdení.",
      "Opísať základné druhy dôkazov (priamy, sporom) a dokumentovať ich príkladmi."
    ],
    goals: [
      "zopakovať jednoduchý výrok, negáciu a pravdivostnú hodnotu",
      "vysvetliť, čo je zložený výrok a z ktorých jednoduchých výrokov vzniká",
      "rozpoznať konjunkciu, disjunkciu, implikáciu a ekvivalenciu",
      "priradiť spojkám symboly ∧, ∨, ⇒, ⇔ a správne ich slovne prečítať",
      "určiť pravdivostnú hodnotu jednoduchej konjunkcie, disjunkcie, implikácie a ekvivalencie z hodnôt A a B",
      "systematicky doplniť základnú pravdivostnú tabuľku",
      "pri aspoň jednom príklade slovne zdôvodniť výsledok"
    ],
    competencies: [
      "matematická komunikácia a presné používanie symbolického jazyka",
      "logické a kritické myslenie",
      "systematické posudzovanie pravdivosti zložených tvrdení",
      "prechod medzi slovným a symbolickým zápisom",
      "digitálna kompetencia",
      "samostatnosť, spolupráca a vecná argumentácia"
    ],
    enrichment: [
      "Maturitný presah je iba v spôsobe práce: presný symbolický zápis, čítanie tvrdení, práca s pravdivostnou tabuľkou a stručné zdôvodnenie.",
      "Výber z možností pripomína testový formát, ale obsah aj náročnosť zostávajú na úrovni aktuálne prebraného učiva.",
      "Dôraz je na porozumení významu spojok a zdôvodnení výsledku, nie na mechanickom memorovaní tabuľky."
    ],
    flow: [
      "0–4 min: opakovanie výroku, pravdivostnej hodnoty a negácie na výroku „Číslo 8 je párne.“",
      "4–9 min: problémový vstup s A: „Číslo 8 je párne.“ a B: „Číslo 8 je väčšie ako 5.“; intuitívne spojenie pomocou „a“, „alebo“, „ak..., tak...“, „práve vtedy, keď...“.",
      "9–16 min: zavedenie pojmu zložený výrok a symbolov ∧, ∨, ⇒, ⇔; názvy, slovné čítanie a jednoduché príklady. Negácia ¬A sa iba pripomenie.",
      "16–25 min: spoločné vytvorenie základných pravdivostných tabuliek pre PP, PN, NP, NN; pri implikácii zdôrazniť jediný nepravdivý prípad P ⇒ N.",
      "25–31 min: dvojice – učebnicová úloha 1.2.4; dopĺňanie po stĺpcoch: najprv ¬A, ¬B, potom zložené výroky; pomenovanie hlavnej spojky.",
      "31–37 min: učebnicová úloha 1.2.6; povinne a), c), e), podľa času ďalšie. Najprv hodnoty častí, potom celý výrok a pomenovanie hlavnej spojky.",
      "37–41 min: INTERAKTÍVNA PLATFORMA – krátke kolo „Aká spojka? / Aká hodnota? / Doplň riadok“.",
      "41–43 min: mimo platformy – rýchle učebnicové otázky 1.2.13 a 1.2.14 s krátkym zdôvodnením.",
      "43–45 min: mimo platformy – exit ticket: pomenovať a prečítať ⇔, určiť P/N pre A ⇒ B pri P,N a pre A ∨ B pri N,P."
    ],
    diagnostics: [
      "správne pomenuje a zapíše aspoň 4 zo 4 binárnych logických spojok",
      "zo 6 jednoduchých zložených výrokov správne určí pravdivostnú hodnotu aspoň pri 5",
      "v pravdivostnej tabuľke správne doplní aspoň 80 % polí",
      "pri aspoň jednom príklade slovne zdôvodní, prečo je zložený výrok pravdivý alebo nepravdivý",
      "pri implikácii vie identifikovať prípad P ⇒ N ako jediný nepravdivý"
    ],
    partialUse: [
      "Žiacka platforma pokrýva iba aplikačnú fázu 37–41 min. Nenahrádza výklad, spoločné vytvorenie pravdivostnej tabuľky ani učebnicové úlohy.",
      "Pred spustením platformy musia byť symboly ∧, ∨, ⇒, ⇔ už zavedené, prečítané a použité v spoločných príkladoch.",
      "Pri potrebe podpory možno nechať žiakovi k dispozícii ručne vytvorenú pravdivostnú tabuľku; cieľom digitálnej časti je správne ju použiť.",
      "Rýchle otázky 1.2.13–1.2.14 a exit ticket 4. hodiny zostávajú mimo platformy podľa prípravy.",
      "5. hodina je fixačno-aplikačná: 0–5 min možno prvú, jednoduchšiu časť modulu použiť ako rýchle opakovanie; hlavná digitálna fáza 36–41 min používa druhú časť s negáciou a medzikrokmi.",
      "Ak učiteľ nechce platformu spúšťať dvakrát, úvodný kvíz 5. hodiny môže urobiť ústne a digitálne použiť iba upevňovaciu časť podľa organizácie hodiny.",
      "Analýza chyby 41–43 min a exit ticket 43–45 min 5. hodiny zostávajú podľa prípravy mimo platformy."
    ]
  },
  student: {
    title: "Zložené výroky · 4.–5. hodina",
    subtitle: "Logické spojky, pravdivostné hodnoty a postup pri výrazoch s negáciou",
    intro: "Modul patrí k dvojhodinovému bloku. Prvá časť upevňuje základné spojky zo 4. hodiny; druhá časť nadväzuje na 5. hodine a precvičuje postup pri výrazoch s negáciou.",
    estimatedTime: "4–6 min (4. hodina) + 6–8 min (5. hodina)",
    activities: [
      {
        id: "spojka-and",
        type: "choice",
        phase: "4. HODINA · AKÁ SPOJKA?",
        skill: "Konjunkcia",
        question: "Ako sa nazýva spojka ∧ a ako ju čítame v zápise A ∧ B?",
        options: [
          "konjunkcia – „A a B“",
          "disjunkcia – „A alebo B“",
          "implikácia – „ak A, tak B“",
          "ekvivalencia – „A práve vtedy, keď B“"
        ],
        answer: 0,
        correct: "Správne. ∧ je konjunkcia a A ∧ B čítame „A a B“.",
        hint: "Spomeň si na spojku „a“."
      },
      {
        id: "spojka-or",
        type: "choice",
        phase: "4. HODINA · AKÁ SPOJKA?",
        skill: "Disjunkcia",
        question: "Ako sa nazýva spojka ∨ a ako ju čítame v zápise A ∨ B?",
        options: [
          "konjunkcia – „A a B“",
          "disjunkcia – „A alebo B“",
          "implikácia – „ak A, tak B“",
          "ekvivalencia – „A práve vtedy, keď B“"
        ],
        answer: 1,
        correct: "Správne. ∨ je disjunkcia a A ∨ B čítame „A alebo B“.",
        hint: "Ide o nevylučovacie „alebo“."
      },
      {
        id: "spojka-imp",
        type: "choice",
        phase: "4. HODINA · AKÁ SPOJKA?",
        skill: "Implikácia",
        question: "Ako sa nazýva spojka ⇒ a ako ju čítame v zápise A ⇒ B?",
        options: [
          "konjunkcia – „A a B“",
          "disjunkcia – „A alebo B“",
          "implikácia – „ak A, tak B“",
          "ekvivalencia – „A práve vtedy, keď B“"
        ],
        answer: 2,
        correct: "Správne. ⇒ je implikácia a A ⇒ B čítame „ak A, tak B“.",
        hint: "Hľadaj podmienku „ak..., tak...“."
      },
      {
        id: "spojka-eq",
        type: "choice",
        phase: "4. HODINA · AKÁ SPOJKA?",
        skill: "Ekvivalencia",
        question: "Ako sa nazýva spojka ⇔ a ako ju čítame v zápise A ⇔ B?",
        options: [
          "konjunkcia – „A a B“",
          "disjunkcia – „A alebo B“",
          "implikácia – „ak A, tak B“",
          "ekvivalencia – „A práve vtedy, keď B“"
        ],
        answer: 3,
        correct: "Správne. ⇔ je ekvivalencia a A ⇔ B čítame „A práve vtedy, keď B“.",
        hint: "Táto spojka vyjadruje obojstrannú podmienku."
      },
      {
        id: "hodnota-and",
        type: "choice",
        phase: "4. HODINA · AKÁ HODNOTA?",
        skill: "Konjunkcia",
        question: "A = P, B = N. Akú pravdivostnú hodnotu má A ∧ B?",
        options: ["P", "N"],
        answer: 1,
        correct: "Správne. Konjunkcia je pravdivá iba vtedy, keď sú pravdivé oba výroky.",
        hint: "Pri ∧ musia byť pravdivé A aj B."
      },
      {
        id: "hodnota-or",
        type: "choice",
        phase: "4. HODINA · AKÁ HODNOTA?",
        skill: "Disjunkcia",
        question: "A = P, B = N. Akú pravdivostnú hodnotu má A ∨ B?",
        options: ["P", "N"],
        answer: 0,
        correct: "Správne. Pri nevylučovacom „alebo“ stačí, aby bol pravdivý aspoň jeden výrok.",
        hint: "Pri ∨ stačí aspoň jedna pravdivá časť."
      },
      {
        id: "hodnota-imp",
        type: "choice",
        phase: "4. HODINA · AKÁ HODNOTA?",
        skill: "Implikácia",
        question: "A = P, B = N. Akú pravdivostnú hodnotu má A ⇒ B?",
        options: ["P", "N"],
        answer: 1,
        correct: "Správne. Implikácia je nepravdivá práve v prípade P ⇒ N.",
        hint: "Toto je jediný nepravdivý riadok implikácie."
      },
      {
        id: "hodnota-eq",
        type: "choice",
        phase: "4. HODINA · AKÁ HODNOTA?",
        skill: "Ekvivalencia",
        question: "A = N, B = N. Akú pravdivostnú hodnotu má A ⇔ B?",
        options: ["P", "N"],
        answer: 0,
        correct: "Správne. Ekvivalencia je pravdivá, keď A a B majú rovnakú pravdivostnú hodnotu.",
        hint: "Porovnaj hodnoty A a B."
      },
      {
        id: "hodnota-imp2",
        type: "choice",
        phase: "4. HODINA · AKÁ HODNOTA?",
        skill: "Implikácia",
        question: "A = N, B = P. Akú pravdivostnú hodnotu má A ⇒ B?",
        options: ["P", "N"],
        answer: 0,
        correct: "Správne. Implikácia je nepravdivá iba pri P ⇒ N; pri N ⇒ P je pravdivá.",
        hint: "Skontroluj, či ide o jediný nepravdivý prípad P ⇒ N."
      },
      {
        id: "riadok",
        type: "matrix",
        phase: "4. HODINA · DOPLŇ RIADOK",
        skill: "Pravdivostná tabuľka",
        title: "A = P, B = N. Doplň hodnoty v tomto riadku.",
        labels: ["P", "N"],
        items: [
          { text: "A ∧ B", answer: "N" },
          { text: "A ∨ B", answer: "P" },
          { text: "A ⇒ B", answer: "N" },
          { text: "A ⇔ B", answer: "N" }
        ]
      },
      {
        id: "reflection-4",
        type: "reflection",
        phase: "4. HODINA · SEBAHODNOTENIE",
        title: "4. hodina – ako sa mi darilo?",
        skills: [
          "pomenovať a slovne prečítať ∧, ∨, ⇒, ⇔",
          "určiť P/N z hodnôt A a B",
          "doplniť jeden riadok pravdivostnej tabuľky"
        ],
        prompt: "Zhodnoť sa po 4. hodine. Toto nie je známka; je to spätná väzba pre teba a učiteľa."
      },
      {
        id: "koniec-4",
        type: "info",
        phase: "KONIEC 4. HODINY",
        title: "4. hodinu máš ukončenú",
        html: "<p>Precvičil/a si názvy a čítanie spojok <strong>∧, ∨, ⇒, ⇔</strong> aj základné pravdivostné hodnoty.</p><p class=\"keyidea\"><strong>Ak pracuješ na 4. hodine, tu skonči.</strong></p><p>Na 5. hodine spustíš tento istý modul znova. Úlohy zo 4. hodiny ti poslúžia ako krátke opakovanie a potom budeš pokračovať ďalej.</p>",
        continueLabel: "Som na 5. hodine – pokračujem"
      },
      {
        id: "prechod-5",
        type: "info",
        phase: "5. HODINA · UPEVNENIE",
        title: "5. hodina – pokračujeme po krokoch",
        html: "<p>Na 5. hodine už spojky poznáš. Pri výraze s negáciou postupuj systematicky:</p><ol><li>urči hodnoty A a B,</li><li>vyhodnoť negáciu,</li><li>nájdi hlavnú spojku,</li><li>až potom urči P/N celého výroku.</li></ol><p class=\"keyidea\">Najprv medzikrok, potom výsledok.</p>",
        continueLabel: "Pokračujem"
      },
      {
        id: "5-prvy-krok-1",
        type: "choice",
        phase: "5. HODINA · ČO UROBÍM PRVÉ?",
        skill: "Poradie krokov",
        question: "A = P, B = N. Máš určiť hodnotu ¬A ∨ B. Čo musíš vyhodnotiť ako prvé?",
        options: ["¬A", "A ∨ B", "¬B", "celý výraz ¬A ∨ B bez medzikroku"],
        answer: 0,
        correct: "Správne. Najprv ¬A. Keď A = P, potom ¬A = N.",
        hint: "Negácia sa musí vyhodnotiť skôr než hlavná spojka ∨."
      },
      {
        id: "5-vysledok-1",
        type: "choice",
        phase: "5. HODINA · MEDZIKROK → VÝSLEDOK",
        skill: "Negácia a disjunkcia",
        question: "A = P, B = N. Najprv ¬A = N. Akú hodnotu má potom ¬A ∨ B, teda N ∨ N?",
        options: ["P", "N"],
        answer: 1,
        correct: "Správne. N ∨ N = N.",
        hint: "Disjunkcia je pravdivá, ak je pravdivý aspoň jeden z výrokov."
      },
      {
        id: "5-prvy-krok-2",
        type: "choice",
        phase: "5. HODINA · ČO UROBÍM PRVÉ?",
        skill: "Poradie krokov",
        question: "A = N, B = P. Máš určiť hodnotu ¬B ⇒ A. Čo musíš vyhodnotiť ako prvé?",
        options: ["¬B", "B ⇒ A", "¬A", "A ⇒ B"],
        answer: 0,
        correct: "Správne. Najprv ¬B. Keď B = P, potom ¬B = N.",
        hint: "Najprv spracuj negáciu."
      },
      {
        id: "5-vysledok-2",
        type: "choice",
        phase: "5. HODINA · MEDZIKROK → VÝSLEDOK",
        skill: "Negácia a implikácia",
        question: "A = N, B = P. Vieš, že ¬B = N. Akú hodnotu má ¬B ⇒ A, teda N ⇒ N?",
        options: ["P", "N"],
        answer: 0,
        correct: "Správne. Implikácia je nepravdivá iba v prípade P ⇒ N; N ⇒ N je pravdivá.",
        hint: "Skontroluj jediný nepravdivý prípad implikácie."
      },
      {
        id: "5-prvy-krok-3",
        type: "choice",
        phase: "5. HODINA · ČO UROBÍM PRVÉ?",
        skill: "Poradie krokov",
        question: "A = N, B = N. Máš určiť hodnotu ¬A ∧ ¬B. Ktorý postup je správny?",
        options: [
          "Najprv určím ¬A a ¬B, potom vyhodnotím konjunkciu.",
          "Najprv vyhodnotím A ∧ B a výsledok znegujem.",
          "Stačí znegovať iba A.",
          "Stačí znegovať iba B."
        ],
        answer: 0,
        correct: "Správne. Najprv ¬A = P a ¬B = P, potom P ∧ P = P.",
        hint: "V zadaní sú dve samostatné negácie."
      },
      {
        id: "5-vysledok-3",
        type: "choice",
        phase: "5. HODINA · MEDZIKROK → VÝSLEDOK",
        skill: "Negácie a konjunkcia",
        question: "A = N, B = N. Platí ¬A = P a ¬B = P. Akú hodnotu má ¬A ∧ ¬B?",
        options: ["P", "N"],
        answer: 0,
        correct: "Správne. P ∧ P = P.",
        hint: "Konjunkcia je pravdivá iba vtedy, keď sú pravdivé obe časti."
      },
      {
        id: "5-vysledok-4",
        type: "choice",
        phase: "5. HODINA · MEDZIKROK → VÝSLEDOK",
        skill: "Negácia a ekvivalencia",
        question: "A = P, B = N. Najprv ¬B = P. Akú hodnotu má A ⇔ ¬B, teda P ⇔ P?",
        options: ["P", "N"],
        answer: 0,
        correct: "Správne. Ekvivalencia je pravdivá, keď majú obe časti rovnakú pravdivostnú hodnotu.",
        hint: "Porovnaj P a P."
      },
      {
        id: "5-vysledok-5",
        type: "choice",
        phase: "5. HODINA · MEDZIKROK → VÝSLEDOK",
        skill: "Negácia a implikácia",
        question: "A = N, B = P. Najprv ¬A = P. Akú hodnotu má ¬A ⇒ B, teda P ⇒ P?",
        options: ["P", "N"],
        answer: 0,
        correct: "Správne. P ⇒ P je pravdivá implikácia.",
        hint: "Implikácia je nepravdivá iba pri P ⇒ N."
      },
      {
        id: "5-riadok",
        type: "matrix",
        phase: "5. HODINA · DOPLŇ HODNOTY",
        skill: "Systematický postup",
        title: "A = P, B = N. Doplň medzikroky a výsledky.",
        labels: ["P", "N"],
        items: [
          { text: "¬A", answer: "N" },
          { text: "¬B", answer: "P" },
          { text: "¬A ∨ B", answer: "N" },
          { text: "¬B ⇒ A", answer: "P" },
          { text: "A ⇔ ¬B", answer: "P" }
        ]
      },
      {
        id: "5-chyba",
        type: "choice",
        phase: "5. HODINA · NÁJDI CHYBU",
        skill: "Analýza chyby",
        question: "Žiak riešil: A = P, B = N; ¬A ∨ B = P. Ktorý krok je prvý chybný?",
        options: [
          "Určil ¬A ako P; správne má byť ¬A = N.",
          "Určil B ako N.",
          "Použil spojku ∨.",
          "Žiadny krok nie je chybný."
        ],
        answer: 0,
        correct: "Správne. A = P, preto ¬A = N. Potom N ∨ N = N.",
        hint: "Skontroluj najprv negáciu A, nie konečný výsledok."
      },
      {
        id: "5-zdovodni",
        type: "selfWrite",
        phase: "5. HODINA · VYSVETLI POSTUP",
        skill: "Matematická komunikácia",
        title: "Prečo je výsledok taký?",
        promptHtml: "A = N, B = P. Vysvetli stručne postup pri výraze <strong>¬A ⇒ B</strong>: čo vyhodnotíš ako prvé a prečo je celý výrok pravdivý?",
        model: "Najprv určím ¬A. Keď A = N, potom ¬A = P. Dostanem P ⇒ P. Implikácia je nepravdivá iba pri P ⇒ N, preto je P ⇒ P pravdivá."
      },
      {
        id: "reflection-5",
        type: "reflection",
        phase: "5. HODINA · ZÁVEREČNÉ SEBAHODNOTENIE",
        title: "5. hodina – ako sa mi darilo?",
        skills: [
          "pomenovať a slovne prečítať ∧, ∨, ⇒, ⇔",
          "určiť P/N z hodnôt A a B",
          "pri výraze s negáciou urobiť najprv správny medzikrok",
          "nájsť prvý chybný krok v riešení"
        ],
        prompt: "Zhodnoť sa po 5. hodine. Toto nie je známka; uzatváraš tým celý blok 4.–5. hodiny."
      }
    ]
  }
});
