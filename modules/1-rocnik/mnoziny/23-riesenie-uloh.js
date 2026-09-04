MathPlatform.registerModule({
  "id": "1-u02-h023",
  "teacher": {
    "placement": "1. ročník · Množiny · 23. hodina: Riešenie úloh",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "výroková logika z predchádzajúceho tematického celku tam, kde pomáha presnému čítaniu podmienok"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza pre 23. hodinu tému „Riešenie úloh“. Súhrnný obsah celku zahŕňa úvod do množín, prvky a zápis, podmnožiny, prázdnu a univerzálnu množinu, kardinalitu, zjednotenie, prienik, rozdiel, doplnok, Vennove diagramy, kombinované a aplikačné úlohy."
    ],
    "planPerformance": [
      "V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; ciele modulu sú didaktickým rozpracovaním názvu a poradia tém, nie doplnením oficiálneho štandardu."
    ],
    "goals": [
      "porozumieť téme „Riešenie úloh“",
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
      "8–10 min: zápis do zošita a ručná úloha",
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
    "title": "Štyri operácie pod kontrolou",
    "subtitle": "Téma 23 · Riešenie úloh",
    "intro": "Pracuj presne: najprv pochop význam zápisu, potom počítaj alebo kresli a nakoniec svoje rozhodnutie zdôvodni.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Štyri operácie pod kontrolou",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 290\"><g font-family=\"system-ui\" text-anchor=\"middle\"><circle cx=\"315\" cy=\"130\" r=\"100\" fill=\"currentColor\" opacity=\".10\" stroke=\"currentColor\" stroke-width=\"3\"/><circle cx=\"445\" cy=\"130\" r=\"100\" fill=\"currentColor\" opacity=\".10\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"250\" y=\"55\" font-size=\"20\">A</text><text x=\"510\" y=\"55\" font-size=\"20\">B</text><text x=\"380\" y=\"260\" font-size=\"19\">∪ = aspoň v jednej · ∩ = v oboch</text></g></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "start",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "operácie s množinami",
        "question": "A={1,2,3}, B={2,3,4}. Ktorý výsledok je správny?",
        "options": [
          "A∪B={1,2,3,4}",
          "A∩B={1,4}",
          "B−A={2,3}"
        ],
        "answer": 0,
        "correct": "Zjednotenie obsahuje všetky prvky, ktoré sú aspoň v jednej množine.",
        "hint": "Nakresli si malý diagram alebo vypíš prvky."
      },
      {
        "id": "complement",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Doplnok potrebuje univerzum",
        "html": "<p>Doplnok A′ tvoríme vzhľadom na dohodnutú univerzálnu množinu U: sú to prvky U, ktoré nie sú v A.</p>",
        "remember": "Bez určenej univerzálnej množiny nemusí byť doplnok jednoznačný."
      },
      {
        "id": "notebook",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Upevni si podstatu",
        "html": "<p><span class=\"mini-label\">ZAPÍŠ SI DO ZOŠITA</span><br>Zapíš názov témy: <strong>Riešenie úloh</strong>. Pridaj definíciu alebo pravidlo vlastnými slovami a jeden správny príklad.</p><p><span class=\"mini-label\">ÚLOHA</span><br>Vytvor vlastný príklad a vyrieš ho bez aplikácie.</p>",
        "model": "<strong>KONTROLA:</strong> Zápis musí používať presné symboly a musí byť z neho jasné, prečo výsledok platí."
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Jedna veta nestačí bez dôvodu",
        "prompt": "Vysvetli jednou až dvoma vetami, podľa čoho si pri poslednej úlohe rozhodol/a.",
        "model": "Možná presná formulácia: Pri každom zápise najprv prečítam význam operácie slovami a až potom určujem prvky výslednej množiny. Pri doplnku si vždy skontrolujem univerzálnu množinu U.",
        "placeholder": "Rozhodol/a som tak, pretože..."
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Rozdiel množín",
        "question": "Ak U={1,2,3,4,5,6}, A={1,2,3,4} a B={3,4,5}, potom A−B je:",
        "options": [
          "{1,2}",
          "{5}",
          "{3,4}"
        ],
        "answer": 0,
        "correct": "Z A odstránime prvky, ktoré patria do B.",
        "hint": "Začni prvkami A."
      },
      {
        "id": "extra-b",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Doplnok",
        "question": "Doplnok množiny B v U je:",
        "options": [
          "{1,2,6}",
          "{3,4,5}",
          "{1,2}"
        ],
        "answer": 0,
        "correct": "V U zostanú mimo B prvky 1, 2 a 6.",
        "hint": "Doplnok vždy závisí od univerzálnej množiny."
      },
      {
        "id": "extra-c",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Pozor na smer",
        "prompt": "Vysvetli, prečo A−B nemusí byť rovnaké ako B−A.",
        "model": "Pri A−B vyberáme prvky z A, ktoré nie sú v B; pri B−A začíname množinou B. Preto výsledky vo všeobecnosti nie sú rovnaké."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "operácie s množinami",
          "presný zápis",
          "kontrola riešenia"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; porovnaj svoj pocit s výsledkom úloh."
      }
    ]
  }
});
