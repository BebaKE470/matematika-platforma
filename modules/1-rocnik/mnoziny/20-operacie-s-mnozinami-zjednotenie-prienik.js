MathPlatform.registerModule({
  "id": "1-u02-h020",
  "teacher": {
    "placement": "1. ročník · Množiny · 20. hodina: Operácie s množinami – zjednotenie, prienik",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "výroková logika z predchádzajúceho tematického celku tam, kde pomáha presnému čítaniu podmienok"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza pre 20. hodinu tému „Operácie s množinami – zjednotenie, prienik“. Súhrnný obsah celku zahŕňa úvod do množín, prvky a zápis, podmnožiny, prázdnu a univerzálnu množinu, kardinalitu, zjednotenie, prienik, rozdiel, doplnok, Vennove diagramy, kombinované a aplikačné úlohy."
    ],
    "planPerformance": [
      "V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; ciele modulu sú didaktickým rozpracovaním názvu a poradia tém, nie doplnením oficiálneho štandardu."
    ],
    "goals": [
      "porozumieť téme „Operácie s množinami – zjednotenie, prienik“",
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
    "title": "Alebo a zároveň v jazyku množín",
    "subtitle": "Téma 20 · Operácie s množinami – zjednotenie, prienik",
    "intro": "Pracuj presne: najprv pochop význam zápisu, potom počítaj alebo kresli a nakoniec svoje rozhodnutie zdôvodni.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "operations-intro",
        "type": "explain",
        "phase": "NOVÉ POJMY",
        "title": "Dve operácie, dva významy",
        "html": "<p><strong>Zjednotenie A ∪ B</strong> obsahuje prvky, ktoré patria <strong>aspoň do jednej</strong> z množín A, B.</p><p><strong>Prienik A ∩ B</strong> obsahuje iba prvky, ktoré patria <strong>súčasne do A aj do B</strong>.</p><p>Symboly čítame: <strong>∪ – zjednotenie</strong>, <strong>∩ – prienik</strong>.</p>",
        "remember": "∪ = aspoň v jednej. ∩ = v oboch."
      },
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Alebo a zároveň v jazyku množín",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 290\"><g font-family=\"system-ui\" text-anchor=\"middle\"><circle cx=\"315\" cy=\"130\" r=\"100\" fill=\"currentColor\" opacity=\".10\" stroke=\"currentColor\" stroke-width=\"3\"/><circle cx=\"445\" cy=\"130\" r=\"100\" fill=\"currentColor\" opacity=\".10\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"250\" y=\"55\" font-size=\"20\">A</text><text x=\"510\" y=\"55\" font-size=\"20\">B</text><text x=\"380\" y=\"260\" font-size=\"19\">∪ = aspoň v jednej · ∩ = v oboch</text></g></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "start",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "zjednotenie",
        "question": "A={1,2,3}, B={3,4}. Čo je A∩B?",
        "options": [
          "{1,2,3,4}",
          "{3}",
          "{1,2,4}"
        ],
        "answer": 1,
        "correct": "Prienik obsahuje prvky spoločné obom množinám.",
        "hint": "Nakresli si malý diagram alebo vypíš prvky."
      },
      {
        "id": "logiclink",
        "type": "explain",
        "phase": "SÚVISLOSŤ",
        "title": "Spojenie s výrokovou logikou",
        "html": "<p><strong>x ∈ A ∩ B</strong> znamená: x∈A <strong>a zároveň</strong> x∈B. <strong>x ∈ A ∪ B</strong> znamená: x∈A <strong>alebo</strong> x∈B (aspoň jedna z možností).</p>",
        "remember": "Prienik ↔ a zároveň. Zjednotenie ↔ alebo."
      },
      {
        "id": "notebook",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Upevni si podstatu",
        "html": "<p><span class=\"mini-label\">ZAPÍŠ SI DO ZOŠITA</span><br>Zapíš názov témy: <strong>Operácie s množinami – zjednotenie, prienik</strong>. Pridaj definíciu alebo pravidlo vlastnými slovami a jeden správny príklad.</p><p><span class=\"mini-label\">ÚLOHA</span><br>Vytvor vlastný príklad a vyrieš ho bez aplikácie.</p>",
        "model": "<strong>KONTROLA:</strong> Zápis musí používať presné symboly a musí byť z neho jasné, prečo výsledok platí."
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Jedna veta nestačí bez dôvodu",
        "prompt": "Vysvetli jednou až dvoma vetami, podľa čoho si pri poslednej úlohe rozhodol/a.",
        "model": "Možná presná formulácia: Pri zjednotení vyberám prvky, ktoré patria do A alebo do B (prípadne do oboch). Pri prieniku vyberám iba prvky, ktoré patria súčasne do A aj do B.",
        "placeholder": "Rozhodol/a som tak, pretože..."
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Prienik",
        "question": "Ak A={1,2,3} a B={3,4}, potom A ∩ B je:",
        "options": [
          "{1,2,3,4}",
          "{3}",
          "{1,2,4}"
        ],
        "answer": 1,
        "correct": "Prienik obsahuje prvky spoločné obom množinám.",
        "hint": "Hľadaj prvky, ktoré sú súčasne v A aj B."
      },
      {
        "id": "extra-b",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Zjednotenie",
        "question": "Pre tie isté množiny A ∪ B je:",
        "options": [
          "{3}",
          "{1,2,3,4}",
          "{1,2,4}"
        ],
        "answer": 1,
        "correct": "Zjednotenie obsahuje prvky, ktoré sú aspoň v jednej z množín.",
        "hint": "Každý prvok zapíš iba raz."
      },
      {
        "id": "extra-c",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "A alebo B? A aj B?",
        "prompt": "Vysvetli slovami rozdiel medzi A ∪ B a A ∩ B.",
        "model": "A ∪ B obsahuje prvky, ktoré patria aspoň do jednej z množín A, B. A ∩ B obsahuje iba prvky, ktoré patria do oboch množín súčasne."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "zjednotenie",
          "prienik",
          "logické spojky"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; porovnaj svoj pocit s výsledkom úloh."
      }
    ]
  }
});
