MathPlatform.registerModule({
  id: "1-u01-h004",
  teacher: {
    placement: "1. ročník · Výroková formula · 4.–5. hodina: Zložené výroky, logické spojky, tabuľky",
    prerequisites: [
      "jednoduchý výrok, pravdivostná hodnota a negácia",
      "symbol ¬A bol zavedený na 3. hodine"
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
      "Správne vnímať logické spojky v rôznych prostrediach.",
      "Tvoriť zložené výroky a zistiť štruktúru a pravdivosť výrokov zložených z malého počtu jednoduchých výrokov pomocou logických spojok."
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
      "0–3 min: KDE SME (4. hodina) – nadväzuje na výrok, pravdivostnú hodnotu a negáciu; dnes pridávame spojky.",
      "3–9 min: NOVÝ POJEM – zavedenie pojmu zložený výrok a symbolov ∧, ∨, ⇒, ⇔; názvy a slovné čítanie.",
      "9–25 min: OVER SI – aká spojka, aká hodnota, doplň riadok tabuľky.",
      "25–33 min: ZBIERKA (4. hodina) – urč druh zloženého výroku a zapíš symbolicky, tri úrovne náročnosti.",
      "33–37 min: ZHRNUTIE a sebahodnotenie 4. hodiny.",
      "— 5. hodina nadväzuje tým istým modulom —",
      "37–40 min: KDE SME (5. hodina) – pripomenutie spojok, dnes pridávame systematický postup s negáciou.",
      "40–58 min: OVER SI – medzikrok → výsledok, nájdi chybu.",
      "58–65 min: ZBIERKA (5. hodina) – výpočet pravdivostnej hodnoty zloženého výroku s negáciou, tri úrovne náročnosti.",
      "65–68 min: ZHRNUTIE a záverečné sebahodnotenie bloku."
    ],
    diagnostics: [
      "správne pomenuje a zapíše aspoň 4 zo 4 binárnych logických spojok",
      "zo 6 jednoduchých zložených výrokov správne určí pravdivostnú hodnotu aspoň pri 5",
      "v pravdivostnej tabuľke správne doplní aspoň 80 % polí",
      "pri aspoň jednom príklade slovne zdôvodní, prečo je zložený výrok pravdivý alebo nepravdivý",
      "pri implikácii vie identifikovať prípad 1 ⇒ 0 ako jediný nepravdivý"
    ],
    partialUse: [
      "Modul je navrhnutý na dve celé vyučovacie hodiny (4. a 5.); ak treba čas skrátiť, možno vynechať niektorú úroveň zbierky.",
      "Zbierkové úlohy (aktivita zbierka) sú nebodované, žiak si ich rieši na papieri a v aplikácii iba odfajkne.",
      "5. hodina je fixačno-aplikačná a nadväzuje tým istým modulom po dosiahnutí aktivity „koniec-4“.",
      "Pri potrebe podpory možno nechať žiakovi k dispozícii ručne vytvorenú pravdivostnú tabuľku."
    ]
  },
  student: {
    title: "Zložené výroky · 4.–5. hodina",
    subtitle: "Logické spojky, pravdivostné hodnoty a postup pri výrazoch s negáciou",
    intro: "Modul patrí k dvojhodinovému bloku. Prvá časť zavádza spojky a upevňuje ich na 4. hodine; druhá časť nadväzuje na 5. hodine a precvičuje postup pri výrazoch s negáciou.",
    estimatedTime: "40–42 min (4. hodina) + 28–30 min (5. hodina)",
    activities: [
      {
        "id": "kde-sme-4", "type": "info", "phase": "0 · KDE SME", "title": "Zo samostatných výrokov skladáme väčšie",
        "html": "<p>Doteraz sme pracovali s jedným výrokom naraz: určovali sme jeho pravdivostnú hodnotu a vedeli sme ho negovať (¬A).</p><p>Dnes prvýkrát spájame <strong>dva výroky do jedného</strong> pomocou logických spojok — a zistíme, ako sa dá vypočítať pravdivostná hodnota takéhoto zloženého výroku.</p><p class=\"keyidea\">Negácia zloženého výroku a De Morganove pravidlá prídu až na ďalšej hodine — dnes iba spájame a vyhodnocujeme.</p>",
        "continueLabel": "Idem na to"
      },
      {
        "id": "spojky-intro", "type": "explain", "phase": "1 · NOVÝ POJEM", "title": "Zložený výrok a logické spojky",
        "html": "<p><strong>Zložený výrok</strong> vzniká spojením dvoch (alebo viacerých) jednoduchých výrokov pomocou <strong>logickej spojky</strong>.</p><p><strong>∧</strong> konjunkcia — „A a B“, pravdivá iba keď sú pravdivé obe časti.<br><strong>∨</strong> disjunkcia (alternatíva) — „A alebo B“, pravdivá, ak je pravdivá aspoň jedna časť.<br><strong>⇒</strong> implikácia — „ak A, tak B“, nepravdivá iba v prípade 1 ⇒ 0.<br><strong>⇔</strong> ekvivalencia — „A práve vtedy, keď B“, pravdivá, keď majú A aj B rovnakú hodnotu.</p>",
        "remember": "Štyri spojky: ∧ (a), ∨ (alebo), ⇒ (ak..., tak...), ⇔ (práve vtedy, keď)."
      },
      {
        "id": "spojka-and",
        "type": "choice",
        "phase": "3 · 4. HODINA · AKÁ SPOJKA?",
        "skill": "Konjunkcia",
        "question": "Ako sa nazýva spojka ∧ a ako ju čítame v zápise A ∧ B?",
        "options": [
          "konjunkcia – „A a B“",
          "implikácia – „ak A, tak B“",
          "ekvivalencia – „A práve vtedy, keď B“",
          "disjunkcia – „A alebo B“"
        ],
        "answer": 0,
        "correct": "Správne. ∧ je konjunkcia a A ∧ B čítame „A a B“.",
        "hint": "Spomeň si na spojku „a“."
      },
      {
        "id": "spojka-or",
        "type": "choice",
        "phase": "3 · 4. HODINA · AKÁ SPOJKA?",
        "skill": "Disjunkcia",
        "question": "Ako sa nazýva spojka ∨ a ako ju čítame v zápise A ∨ B?",
        "options": [
          "ekvivalencia – „A práve vtedy, keď B“",
          "disjunkcia – „A alebo B“",
          "konjunkcia – „A a B“",
          "implikácia – „ak A, tak B“"
        ],
        "answer": 1,
        "correct": "Správne. ∨ je disjunkcia a A ∨ B čítame „A alebo B“.",
        "hint": "Ide o nevylučovacie „alebo“."
      },
      {
        "id": "spojka-imp",
        "type": "choice",
        "phase": "3 · 4. HODINA · AKÁ SPOJKA?",
        "skill": "Implikácia",
        "question": "Ako sa nazýva spojka ⇒ a ako ju čítame v zápise A ⇒ B?",
        "options": [
          "ekvivalencia – „A práve vtedy, keď B“",
          "disjunkcia – „A alebo B“",
          "implikácia – „ak A, tak B“",
          "konjunkcia – „A a B“"
        ],
        "answer": 2,
        "correct": "Správne. ⇒ je implikácia a A ⇒ B čítame „ak A, tak B“.",
        "hint": "Hľadaj podmienku „ak..., tak...“."
      },
      {
        "id": "spojka-eq",
        "type": "choice",
        "phase": "3 · 4. HODINA · AKÁ SPOJKA?",
        "skill": "Ekvivalencia",
        "question": "Ako sa nazýva spojka ⇔ a ako ju čítame v zápise A ⇔ B?",
        "options": [
          "konjunkcia – „A a B“",
          "implikácia – „ak A, tak B“",
          "disjunkcia – „A alebo B“",
          "ekvivalencia – „A práve vtedy, keď B“"
        ],
        "answer": 3,
        "correct": "Správne. ⇔ je ekvivalencia a A ⇔ B čítame „A práve vtedy, keď B“.",
        "hint": "Táto spojka vyjadruje obojstrannú podmienku."
      },
      {
        "id": "hodnota-and",
        "type": "choice",
        "phase": "3 · 4. HODINA · AKÁ HODNOTA?",
        "skill": "Konjunkcia",
        "question": "A = 1, B = 0. Akú pravdivostnú hodnotu má A ∧ B?",
        "options": [
          "0",
          "1"
        ],
        "answer": 0,
        "correct": "Správne. Konjunkcia je pravdivá iba vtedy, keď sú pravdivé oba výroky.",
        "hint": "Pri ∧ musia byť pravdivé A aj B."
      },
      {
        "id": "hodnota-or",
        "type": "choice",
        "phase": "3 · 4. HODINA · AKÁ HODNOTA?",
        "skill": "Disjunkcia",
        "question": "A = 1, B = 0. Akú pravdivostnú hodnotu má A ∨ B?",
        "options": [
          "1",
          "0"
        ],
        "answer": 0,
        "correct": "Správne. Pri nevylučovacom „alebo“ stačí, aby bol pravdivý aspoň jeden výrok.",
        "hint": "Pri ∨ stačí aspoň jedna pravdivá časť."
      },
      {
        "id": "hodnota-imp",
        "type": "choice",
        "phase": "3 · 4. HODINA · AKÁ HODNOTA?",
        "skill": "Implikácia",
        "question": "A = 1, B = 0. Akú pravdivostnú hodnotu má A ⇒ B?",
        "options": [
          "1",
          "0"
        ],
        "answer": 1,
        "correct": "Správne. Implikácia je nepravdivá práve v prípade 1 ⇒ 0.",
        "hint": "Toto je jediný nepravdivý riadok implikácie."
      },
      {
        "id": "hodnota-eq",
        "type": "choice",
        "phase": "3 · 4. HODINA · AKÁ HODNOTA?",
        "skill": "Ekvivalencia",
        "question": "A = 0, B = 0. Akú pravdivostnú hodnotu má A ⇔ B?",
        "options": [
          "0",
          "1"
        ],
        "answer": 1,
        "correct": "Správne. Ekvivalencia je pravdivá, keď A a B majú rovnakú pravdivostnú hodnotu.",
        "hint": "Porovnaj hodnoty A a B."
      },
      {
        "id": "hodnota-imp2",
        "type": "choice",
        "phase": "3 · 4. HODINA · AKÁ HODNOTA?",
        "skill": "Implikácia",
        "question": "A = 0, B = 1. Akú pravdivostnú hodnotu má A ⇒ B?",
        "options": [
          "1",
          "0"
        ],
        "answer": 0,
        "correct": "Správne. Implikácia je nepravdivá iba pri 1 ⇒ 0; pri 0 ⇒ 1 je pravdivá.",
        "hint": "Skontroluj, či ide o jediný nepravdivý prípad 1 ⇒ 0."
      },
      {
        "id": "riadok",
        "type": "matrix",
        "phase": "3 · 4. HODINA · DOPLŇ RIADOK",
        "skill": "Pravdivostná tabuľka",
        "title": "A = 1, B = 0. Doplň hodnoty v tomto riadku.",
        "labels": ["1", "0"],
        "items": [
          { "text": "A ∧ B", "answer": "0" },
          { "text": "A ∨ B", "answer": "1" },
          { "text": "A ⇒ B", "answer": "0" },
          { "text": "A ⇔ B", "answer": "0" }
        ]
      },
      {
        "id": "zbierka-4", "type": "taskList", "phase": "4 · ZBIERKA", "skill": "Druh spojky",
        "title": "Urč druh zloženého výroku",
        "html": "<p class=\"muted\">Pri každej vete urč druh zloženého výroku (konjunkcia, disjunkcia, implikácia, ekvivalencia) a zapíš ho symbolicky. Odfajkni si úlohu, keď máš hotovo — riešenie si over tlačidlom.</p>",
        "items": [
          { "level": "zaklad", "text": "Mám peniaze a nemám bicykel.", "answer": "Konjunkcia. A: Mám peniaze, B: Mám bicykel → A ∧ ¬B." },
          { "level": "zaklad", "text": "Pôjdem do kina alebo do divadla.", "answer": "Disjunkcia (alternatíva). A: Pôjdem do kina, B: Pôjdem do divadla → A ∨ B." },
          { "level": "rozsirenie", "text": "Ak bude pekne, potom pôjdem do kina.", "answer": "Implikácia. A: Bude pekne, B: Pôjdem do kina → A ⇒ B." },
          { "level": "rozsirenie", "text": "Do divadla pôjdem vtedy, ak nebude pršať.", "answer": "Ekvivalencia. A: Do divadla pôjdem, B: Bude pršať → A ⇔ ¬B." },
          { "level": "bonus", "text": "Príde Peter a Karol alebo Táňa.", "answer": "Kombinácia konjunkcie a disjunkcie, hlavná spojka je konjunkcia. P: Príde Peter, K: Príde Karol, T: Príde Táňa → P ∧ (K ∨ T)." },
          { "level": "bonus", "text": "Ak nebude pršať, potom pôjdem do kina alebo do divadla.", "answer": "Kombinácia implikácie a disjunkcie, hlavná spojka je implikácia. P: Bude pršať, K: Pôjdem do kina, D: Pôjdem do divadla → ¬P ⇒ (K ∨ D)." }
        ]
      },
      {
        "id": "zhrnutie-4", "type": "info", "phase": "5 · ZHRNUTIE", "title": "Čo si sa dnes naučil/a (4. hodina)",
        "html": "<ul><li>Zložený výrok vzniká spojením jednoduchých výrokov spojkou ∧, ∨, ⇒ alebo ⇔.</li><li>Konjunkcia potrebuje obe časti pravdivé; disjunkcii stačí jedna.</li><li>Implikácia je nepravdivá iba pri 1 ⇒ 0; ekvivalencia je pravdivá, keď sa hodnoty A a B zhodujú.</li></ul>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "sebahodnotenie-4",
        "type": "selfWrite",
        "phase": "5 · 4. HODINA · SEBAHODNOTENIE",
        "skill": "Sebahodnotenie",
        "title": "Čo už zvládam?",
        "promptHtml": "<p>Jednou krátkou vetou zhodnoť svoju prácu na 4. hodine.</p><p><strong>Napíš, čo už vieš spoľahlivo a čo si chceš na 5. hodine ešte overiť.</strong></p>",
        "model": "Príklad: Viem pomenovať a prečítať logické spojky. Ešte si chcem precvičiť pravdivosť implikácie."
      },
      {
        "id": "koniec-4",
        "type": "info",
        "phase": "KONIEC 4. HODINY",
        "title": "4. hodinu máš ukončenú",
        "html": "<p><strong>Spätná väzba po 4. hodine:</strong> mal/a by si vedieť pomenovať a prečítať spojky <strong>∧, ∨, ⇒, ⇔</strong> a podľa hodnôt A, B určiť pravdivosť základného zloženého výroku.</p><p class=\"keyidea\"><strong>Ak je dnes 4. hodina, tu modul zavri. Hodinu máš ukončenú.</strong></p><p>Na 5. hodine spustíš tento istý modul od začiatku. Prvá časť bude krátke opakovanie. Keď sa znovu dostaneš sem, pokračuj tlačidlom nižšie.</p>",
        "continueLabel": "5. hodina – pokračovať ďalej"
      },
      {
        "id": "kde-sme-5", "type": "info", "phase": "0 · KDE SME", "title": "5. hodina — pridávame negáciu do výrazu",
        "html": "<p>Spojky ∧, ∨, ⇒, ⇔ už poznáš zo 4. hodiny. Dnes ich skombinujeme s negáciou ¬, ktorú poznáš z 3. hodiny — v jednom výraze sa objavia obe naraz.</p><p class=\"keyidea\">Postup je vždy rovnaký: najprv medzikrok (negácia), až potom hlavná spojka.</p>",
        "continueLabel": "Idem na to"
      },
      {
        "id": "prechod-5",
        "type": "info",
        "phase": "1 · 5. HODINA · UPEVNENIE",
        "title": "5. hodina – pokračujeme po krokoch",
        "html": "<p>Pri výraze s negáciou postupuj systematicky:</p><ol><li>urči hodnoty A a B,</li><li>vyhodnoť negáciu,</li><li>nájdi hlavnú spojku,</li><li>až potom urči pravdivostnú hodnotu celého výroku.</li></ol><p class=\"keyidea\">Najprv medzikrok, potom výsledok.</p>",
        "continueLabel": "Pokračujem"
      },
      {
        "id": "5-prvy-krok-1",
        "type": "choice",
        "phase": "3 · 5. HODINA · ČO UROBÍM PRVÉ?",
        "skill": "Poradie krokov",
        "question": "A = 1, B = 0. Máš určiť hodnotu ¬A ∨ B. Čo musíš vyhodnotiť ako prvé?",
        "options": [
          "¬A",
          "celý výraz ¬A ∨ B bez medzikroku",
          "A ∨ B",
          "¬B"
        ],
        "answer": 0,
        "correct": "Správne. Najprv ¬A. Keď A = 1, potom ¬A = 0.",
        "hint": "Negácia sa musí vyhodnotiť skôr než hlavná spojka ∨."
      },
      {
        "id": "5-vysledok-1",
        "type": "choice",
        "phase": "3 · 5. HODINA · MEDZIKROK → VÝSLEDOK",
        "skill": "Negácia a disjunkcia",
        "question": "A = 1, B = 0. Najprv ¬A = 0. Akú hodnotu má potom ¬A ∨ B, teda 0 ∨ 0?",
        "options": [
          "0",
          "1"
        ],
        "answer": 0,
        "correct": "Správne. 0 ∨ 0 = 0.",
        "hint": "Disjunkcia je pravdivá, ak je pravdivý aspoň jeden z výrokov."
      },
      {
        "id": "5-prvy-krok-2",
        "type": "choice",
        "phase": "3 · 5. HODINA · ČO UROBÍM PRVÉ?",
        "skill": "Poradie krokov",
        "question": "A = 0, B = 1. Máš určiť hodnotu ¬B ⇒ A. Čo musíš vyhodnotiť ako prvé?",
        "options": [
          "A ⇒ B",
          "¬B",
          "¬A",
          "B ⇒ A"
        ],
        "answer": 1,
        "correct": "Správne. Najprv ¬B. Keď B = 1, potom ¬B = 0.",
        "hint": "Najprv spracuj negáciu."
      },
      {
        "id": "5-vysledok-2",
        "type": "choice",
        "phase": "3 · 5. HODINA · MEDZIKROK → VÝSLEDOK",
        "skill": "Negácia a implikácia",
        "question": "A = 0, B = 1. Vieš, že ¬B = 0. Akú hodnotu má ¬B ⇒ A, teda 0 ⇒ 0?",
        "options": [
          "1",
          "0"
        ],
        "answer": 0,
        "correct": "Správne. Implikácia je nepravdivá iba v prípade 1 ⇒ 0; 0 ⇒ 0 je pravdivá.",
        "hint": "Skontroluj jediný nepravdivý prípad implikácie."
      },
      {
        "id": "5-prvy-krok-3",
        "type": "choice",
        "phase": "3 · 5. HODINA · ČO UROBÍM PRVÉ?",
        "skill": "Poradie krokov",
        "question": "A = 0, B = 0. Máš určiť hodnotu ¬A ∧ ¬B. Ktorý postup je správny?",
        "options": [
          "Stačí znegovať iba B.",
          "Najprv vyhodnotím A ∧ B a výsledok znegujem.",
          "Najprv určím ¬A a ¬B, potom vyhodnotím konjunkciu.",
          "Stačí znegovať iba A."
        ],
        "answer": 2,
        "correct": "Správne. Najprv ¬A = 1 a ¬B = 1, potom 1 ∧ 1 = 1.",
        "hint": "V zadaní sú dve samostatné negácie."
      },
      {
        "id": "5-vysledok-3",
        "type": "choice",
        "phase": "3 · 5. HODINA · MEDZIKROK → VÝSLEDOK",
        "skill": "Negácie a konjunkcia",
        "question": "A = 0, B = 0. Platí ¬A = 1 a ¬B = 1. Akú hodnotu má ¬A ∧ ¬B?",
        "options": [
          "0",
          "1"
        ],
        "answer": 1,
        "correct": "Správne. 1 ∧ 1 = 1.",
        "hint": "Konjunkcia je pravdivá iba vtedy, keď sú pravdivé obe časti."
      },
      {
        "id": "5-vysledok-4",
        "type": "choice",
        "phase": "3 · 5. HODINA · MEDZIKROK → VÝSLEDOK",
        "skill": "Negácia a ekvivalencia",
        "question": "A = 1, B = 0. Najprv ¬B = 1. Akú hodnotu má A ⇔ ¬B, teda 1 ⇔ 1?",
        "options": [
          "0",
          "1"
        ],
        "answer": 1,
        "correct": "Správne. Ekvivalencia je pravdivá, keď majú obe časti rovnakú pravdivostnú hodnotu.",
        "hint": "Porovnaj 1 a 1."
      },
      {
        "id": "5-vysledok-5",
        "type": "choice",
        "phase": "3 · 5. HODINA · MEDZIKROK → VÝSLEDOK",
        "skill": "Negácia a implikácia",
        "question": "A = 0, B = 1. Najprv ¬A = 1. Akú hodnotu má ¬A ⇒ B, teda 1 ⇒ 1?",
        "options": [
          "1",
          "0"
        ],
        "answer": 0,
        "correct": "Správne. 1 ⇒ 1 je pravdivá implikácia.",
        "hint": "Implikácia je nepravdivá iba pri 1 ⇒ 0."
      },
      {
        "id": "5-riadok",
        "type": "matrix",
        "phase": "3 · 5. HODINA · DOPLŇ HODNOTY",
        "skill": "Systematický postup",
        "title": "A = 1, B = 0. Doplň medzikroky a výsledky.",
        "labels": ["1", "0"],
        "items": [
          { "text": "¬A", "answer": "0" },
          { "text": "¬B", "answer": "1" },
          { "text": "¬A ∨ B", "answer": "0" },
          { "text": "¬B ⇒ A", "answer": "1" },
          { "text": "A ⇔ ¬B", "answer": "1" }
        ]
      },
      {
        "id": "5-chyba",
        "type": "choice",
        "phase": "3 · 5. HODINA · NÁJDI CHYBU",
        "skill": "Analýza chyby",
        "question": "Žiak riešil: A = 1, B = 0; ¬A ∨ B = 1. Ktorý krok je prvý chybný?",
        "options": [
          "Použil spojku ∨.",
          "Žiadny krok nie je chybný.",
          "Určil B ako 0.",
          "Určil ¬A ako 1; správne má byť ¬A = 0."
        ],
        "answer": 3,
        "correct": "Správne. A = 1, preto ¬A = 0. Potom 0 ∨ 0 = 0.",
        "hint": "Skontroluj najprv negáciu A, nie konečný výsledok."
      },
      {
        "id": "5-zdovodni",
        "type": "selfWrite",
        "phase": "3 · 5. HODINA · VYSVETLI POSTUP",
        "skill": "Matematická komunikácia",
        "title": "Prečo je výsledok taký?",
        "promptHtml": "A = 0, B = 1. Vysvetli stručne postup pri výraze <strong>¬A ⇒ B</strong>: čo vyhodnotíš ako prvé a prečo je celý výrok pravdivý?",
        "model": "Najprv určím ¬A. Keď A = 0, potom ¬A = 1. Dostanem 1 ⇒ 1. Implikácia je nepravdivá iba pri 1 ⇒ 0, preto je 1 ⇒ 1 pravdivá."
      },
      {
        "id": "zbierka-5", "type": "taskList", "phase": "4 · ZBIERKA", "skill": "Výpočet hodnoty",
        "title": "Vypočítaj pravdivostnú hodnotu",
        "html": "<p class=\"muted\">Vypočítaj hodnoty nasledujúcich výrazov — najprv medzikrok (negáciu), potom hlavnú spojku. Odfajkni si úlohu, keď máš hotovo — riešenie si over tlačidlom.</p>",
        "items": [
          { "level": "zaklad", "text": "Dané: A = 1, B = 0. ¬A ∧ B", "answer": "¬A = 0, B = 0 → 0 ∧ 0 = 0." },
          { "level": "zaklad", "text": "Dané: A = 1, B = 0. A ∨ ¬B", "answer": "A = 1, ¬B = 1 → 1 ∨ 1 = 1." },
          { "level": "zaklad", "text": "Dané: A = 1, B = 0. ¬B ⇒ ¬A", "answer": "¬B = 1, ¬A = 0 → 1 ⇒ 0 = 0." },
          { "level": "rozsirenie", "text": "Dané: A = 1, B = 0, C = 0, D = 1. D ⇒ ¬A", "answer": "D = 1, ¬A = 0 → 1 ⇒ 0 = 0." },
          { "level": "rozsirenie", "text": "Dané: A = 1, B = 0, C = 0, D = 1. C ⇒ B", "answer": "C = 0, B = 0 → 0 ⇒ 0 = 1." },
          { "level": "rozsirenie", "text": "Dané: A = 1, B = 0, C = 0, D = 1. ¬B ∨ D", "answer": "¬B = 1, D = 1 → 1 ∨ 1 = 1." },
          { "level": "bonus", "text": "Dané: A = 1, B = 0, C = 0, D = 1, E = 1. E ∨ (¬E ⇔ D)", "answer": "¬E = 0, D = 1 → (0 ⇔ 1) = 0. Potom E ∨ 0 = 1 ∨ 0 = 1." },
          { "level": "bonus", "text": "Dané: A = 1, B = 0, C = 0, D = 1, E = 1. D ⇔ (A ∨ ¬C)", "answer": "¬C = 1 → (A ∨ ¬C) = 1 ∨ 1 = 1. Potom D ⇔ 1 = 1 ⇔ 1 = 1." },
          { "level": "bonus", "text": "Dané: A = 1, B = 0, C = 0, D = 1, E = 1. (C ∧ B) ⇒ ¬A", "answer": "(C ∧ B) = 0 ∧ 0 = 0. ¬A = 0. Potom 0 ⇒ 0 = 1." }
        ]
      },
      {
        "id": "zhrnutie-5", "type": "info", "phase": "5 · ZHRNUTIE", "title": "Čo si sa dnes naučil/a (5. hodina)",
        "html": "<ul><li>Vo výraze s negáciou vyhodnocujeme najprv medzikrok (negáciu), až potom hlavnú spojku.</li><li>Rovnaký postup funguje aj pri viacerých výrokoch a zátvorkách.</li><li>Chyba najčastejšie vzniká pri zle vyhodnotenej negácii, nie pri samotnej spojke.</li></ul>",
        "continueLabel": "Na záver sa zhodnotím"
      },
      {
        "id": "reflection-5",
        "type": "reflection",
        "phase": "5 · 5. HODINA · ZÁVEREČNÉ SEBAHODNOTENIE",
        "title": "5. hodina – ako sa mi darilo?",
        "skills": [
          "pomenovať a slovne prečítať ∧, ∨, ⇒, ⇔",
          "určiť pravdivostnú hodnotu z hodnôt A a B",
          "pri výraze s negáciou urobiť najprv správny medzikrok",
          "nájsť prvý chybný krok v riešení"
        ],
        "prompt": "Zhodnoť sa po 5. hodine. Toto nie je známka; uzatváraš tým celý blok 4.–5. hodiny."
      }
    ]
  }
});
