MathPlatform.registerModule({
  "id": "1-u02-h019",
  "teacher": {
    "placement": "1. ročník · Množiny · 19. hodina: Kardinalita množiny",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "výroková logika z predchádzajúceho tematického celku tam, kde pomáha presnému čítaniu podmienok"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza pre 19. hodinu tému „Kardinalita množiny“. Súhrnný obsah celku zahŕňa úvod do množín, prvky a zápis, podmnožiny, prázdnu a univerzálnu množinu, kardinalitu, zjednotenie, prienik, rozdiel, doplnok, Vennove diagramy, kombinované a aplikačné úlohy."
    ],
    "planPerformance": [
      "V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; ciele modulu sú didaktickým rozpracovaním názvu a poradia tém, nie doplnením oficiálneho štandardu."
    ],
    "goals": [
      "porozumieť téme „Kardinalita množiny“",
      "prepájať slovný, symbolický a grafický zápis",
      "zdôvodniť riešenie a skontrolovať ho na konkrétnom príklade"
    ],
    "competencies": [
      "matematická komunikácia",
      "práca s reprezentáciami",
      "argumentácia a kontrola výsledku",
      "prehľadný zápis v zošite"
    ],
    "enrichment": [
      "Návrh maturitného štandardu sa využíva iba ako obohatenie: reprezentácia množín, Vennove diagramy, prepojenie množinových operácií s logickými spojkami a presná argumentácia."
    ],
    "flow": [
      "4–5 min: krátky problém pri tabuli",
      "15–20 min: vybrané digitálne aktivity",
      "8–10 min: čistý zápis a ručná úloha",
      "5 min: spoločné zdôvodnenie"
    ],
    "diagnostics": [
      "rozlišuje prvok a množinu/podmnožinu podľa témy",
      "číta symbolický zápis bez hádania",
      "vie výsledok vysvetliť slovami alebo diagramom"
    ],
    "partialUse": [
      "Modul nemusí byť použitý celý. Vyberte iba tie aktivity, ktoré v danej hodine podporia učenie.",
      "Mobil nenahrádza ručné riešenie, presný zápis ani argumentáciu."
    ]
  },
  "student": {
    "title": "Koľko prvkov má množina?",
    "subtitle": "Téma 19 · Kardinalita množiny",
    "intro": "Pracuj presne: najprv pochop význam zápisu, potom počítaj alebo kresli a nakoniec svoje rozhodnutie zdôvodni.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "cardinality-intro",
        "type": "explain",
        "phase": "NOVÝ ZÁPIS",
        "title": "Počet prvkov množiny",
        "html": "<p>Počet prvkov konečnej množiny nazývame <strong>kardinalita množiny</strong>. Zapisujeme ho <strong>|A|</strong>.</p><p>Ak A={2,4,6}, potom <strong>|A|=3</strong>. Počítame rôzne prvky množiny, nie počet znakov v zápise.</p>",
        "remember": "|A| znamená počet prvkov množiny A."
      },
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Koľko prvkov má množina?",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 250\" role=\"img\" aria-label=\"Množina a jej prvky\"><rect x=\"70\" y=\"35\" width=\"620\" height=\"175\" rx=\"70\" fill=\"currentColor\" opacity=\".06\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"100\" y=\"65\" font-size=\"22\" font-weight=\"700\">A</text><g font-family=\"system-ui\" text-anchor=\"middle\"><circle cx=\"220\" cy=\"120\" r=\"25\" fill=\"currentColor\" opacity=\".16\"/><text x=\"220\" y=\"127\" font-size=\"20\">2</text><circle cx=\"380\" cy=\"120\" r=\"25\" fill=\"currentColor\" opacity=\".16\"/><text x=\"380\" y=\"127\" font-size=\"20\">4</text><circle cx=\"540\" cy=\"120\" r=\"25\" fill=\"currentColor\" opacity=\".16\"/><text x=\"540\" y=\"127\" font-size=\"20\">6</text><text x=\"380\" y=\"190\" font-size=\"18\">A = {2, 4, 6}</text></g></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "start",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "kardinalita",
        "question": "A={a,b,c,d}. Koľko prvkov má A?",
        "options": [
          "3",
          "4",
          "5"
        ],
        "answer": 1,
        "correct": "|A|=4.",
        "hint": "Nakresli si malý diagram alebo vypíš prvky."
      },
      {
        "id": "dup",
        "type": "choice",
        "phase": "PREMÝŠĽAJ",
        "skill": "Kardinalita",
        "question": "Koľko prvkov má {1,1,2,2,3}?",
        "options": [
          "5",
          "3",
          "2"
        ],
        "answer": 1,
        "correct": "V množine sa rovnaký prvok neopakuje; sú tam 1,2,3.",
        "hint": "Opakovaný zápis nevytvára nový prvok."
      },
      {
        "id": "notebook",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Upevni si podstatu",
        "html": "<p><span class=\"mini-label\">ČISTÝ ZÁPIS</span><br>Zapíš názov témy: <strong>Kardinalita množiny</strong>. Pridaj definíciu alebo pravidlo vlastnými slovami a jeden správny príklad.</p><p><span class=\"mini-label\">ÚLOHA</span><br>Vytvor vlastný príklad a vyrieš ho bez aplikácie.</p>",
        "model": "<strong>KONTROLA:</strong> Zápis musí používať presné symboly a musí byť z neho jasné, prečo výsledok platí."
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Jedna veta nestačí bez dôvodu",
        "prompt": "Vysvetli jednou až dvoma vetami, podľa čoho si pri poslednej úlohe rozhodol/a.",
        "model": "Možná presná formulácia: Pri určovaní kardinality počítam rôzne prvky množiny iba raz; opakovanie toho istého prvku nemení počet prvkov množiny.",
        "placeholder": "Rozhodol/a som tak, pretože..."
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Kardinalita",
        "question": "Ak A={a,b,c,d}, potom |A| je:",
        "options": [
          "3",
          "4",
          "5"
        ],
        "answer": 1,
        "correct": "Kardinalita je počet prvkov množiny, teda 4.",
        "hint": "Spočítaj prvky, nie čiarky."
      },
      {
        "id": "extra-b",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Kardinalita",
        "question": "Ak A={1,1,2,2,3}, koľko rôznych prvkov má množina A?",
        "options": [
          "5",
          "3",
          "2"
        ],
        "answer": 1,
        "correct": "V množine sa rovnaký prvok neopakuje ako nový prvok; A={1,2,3}.",
        "hint": "Opakovaný zápis toho istého prvku nezvyšuje počet prvkov."
      },
      {
        "id": "extra-c",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Čo vyjadruje |A|?",
        "prompt": "Jednou vetou vysvetli rozdiel medzi zápismi A a |A|.",
        "model": "A označuje samotnú množinu, kým |A| označuje počet jej prvkov."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "kardinalita",
          "počet prvkov",
          "systematický výpis"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; porovnaj svoj pocit s výsledkom úloh."
      }
    ]
  }
});
