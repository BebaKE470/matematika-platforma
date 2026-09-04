MathPlatform.registerModule({
  "id": "1-u02-h027",
  "teacher": {
    "placement": "1. ročník · Množiny · 27. hodina: Kontrolná písomná práca",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "výroková logika z predchádzajúceho tematického celku tam, kde pomáha presnému čítaniu podmienok"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza pre 27. hodinu tému „Kontrolná písomná práca“. Súhrnný obsah celku zahŕňa úvod do množín, prvky a zápis, podmnožiny, prázdnu a univerzálnu množinu, kardinalitu, zjednotenie, prienik, rozdiel, doplnok, Vennove diagramy, kombinované a aplikačné úlohy."
    ],
    "planPerformance": [
      "V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; ciele modulu sú didaktickým rozpracovaním názvu a poradia tém, nie doplnením oficiálneho štandardu."
    ],
    "goals": [
      "porozumieť téme „Kontrolná písomná práca“",
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
    "title": "Krátke naladenie pred samostatnou prácou",
    "subtitle": "Téma 27 · Kontrolná písomná práca",
    "intro": "Pracuj presne: najprv pochop význam zápisu, potom počítaj alebo kresli a nakoniec svoje rozhodnutie zdôvodni.",
    "estimatedTime": "8–10 min digitálne + písomná práca",
    "activities": [
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Krátke naladenie pred samostatnou prácou",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 290\"><g font-family=\"system-ui\" text-anchor=\"middle\"><circle cx=\"315\" cy=\"130\" r=\"100\" fill=\"currentColor\" opacity=\".10\" stroke=\"currentColor\" stroke-width=\"3\"/><circle cx=\"445\" cy=\"130\" r=\"100\" fill=\"currentColor\" opacity=\".10\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"250\" y=\"55\" font-size=\"20\">A</text><text x=\"510\" y=\"55\" font-size=\"20\">B</text><text x=\"380\" y=\"260\" font-size=\"19\">∪ = aspoň v jednej · ∩ = v oboch</text></g></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "start",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "samostatnosť",
        "question": "Ktorý zápis vyjadruje prvky, ktoré patria do A alebo B, ale nie do oboch?",
        "options": [
          "A∩B",
          "(A−B)∪(B−A)",
          "A−(A∪B)"
        ],
        "answer": 1,
        "correct": "Ide o dve neprekrývajúce sa časti: iba A a iba B.",
        "hint": "Nakresli si malý diagram alebo vypíš prvky."
      },
      {
        "id": "offline",
        "type": "explain",
        "phase": "PÍSOMKA",
        "title": "Teraz zariadenie odlož",
        "html": "<p>Digitálna časť bola iba krátka kontrola pripravenosti. Kontrolnú prácu rieš samostatne na papieri: zapisuj postup, používaj presnú symboliku a výsledky kontroluj.</p>",
        "remember": "Písomka overuje aj samostatný matematický zápis, nie iba výber odpovede."
      },
      {
        "id": "notebook",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Upevni si podstatu",
        "html": "<p><span class=\"mini-label\">ZAPÍŠ SI DO ZOŠITA</span><br>Zapíš názov témy: <strong>Kontrolná písomná práca</strong>. Pridaj definíciu alebo pravidlo vlastnými slovami a jeden správny príklad.</p><p><span class=\"mini-label\">ÚLOHA</span><br>Vytvor vlastný príklad a vyrieš ho bez aplikácie.</p>",
        "model": "<strong>KONTROLA:</strong> Zápis musí používať presné symboly a musí byť z neho jasné, prečo výsledok platí."
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Jedna veta nestačí bez dôvodu",
        "prompt": "Vysvetli jednou až dvoma vetami, podľa čoho si pri poslednej úlohe rozhodol/a.",
        "model": "Možná presná formulácia: Pri riešení si najprv preložím symbolický zápis do slov, určím poradie operácií a skontrolujem, či výsledné prvky spĺňajú všetky podmienky.",
        "placeholder": "Rozhodol/a som tak, pretože..."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "samostatnosť",
          "množiny",
          "sebakontrola"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; porovnaj svoj pocit s výsledkom úloh."
      }
    ]
  }
});
