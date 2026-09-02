MathPlatform.registerModule({
  "id": "1-u02-h022",
  "teacher": {
    "placement": "1. ročník · Množiny · 22. hodina: Operácie s množinami – doplnok, rozdiel",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "výroková logika z predchádzajúceho tematického celku tam, kde pomáha presnému čítaniu podmienok"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza pre 22. hodinu tému „Operácie s množinami – doplnok, rozdiel“. Súhrnný obsah celku zahŕňa úvod do množín, prvky a zápis, podmnožiny, prázdnu a univerzálnu množinu, kardinalitu, zjednotenie, prienik, rozdiel, doplnok, Vennove diagramy, kombinované a aplikačné úlohy."
    ],
    "planPerformance": [
      "V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; ciele modulu sú didaktickým rozpracovaním názvu a poradia tém, nie doplnením oficiálneho štandardu."
    ],
    "goals": [
      "porozumieť téme „Operácie s množinami – doplnok, rozdiel“",
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
    "title": "Čo zostane?",
    "subtitle": "Téma 22 · Operácie s množinami – doplnok, rozdiel",
    "intro": "Pracuj presne: najprv pochop význam zápisu, potom počítaj alebo kresli a nakoniec svoje rozhodnutie zdôvodni.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "difference-intro",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Rozdiel množín",
        "html": "<p><strong>Rozdiel A − B</strong> tvoria tie prvky, ktoré patria do A, ale nepatria do B.</p><p>Pri rozdiele záleží na poradí: A − B vo všeobecnosti nie je to isté ako B − A.</p>",
        "remember": "A − B: začínam v A a vynechám všetko, čo patrí do B."
      },
      {
        "id": "complement-intro",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Doplnok množiny",
        "html": "<p>Ak máme určenú univerzálnu množinu U, <strong>doplnok množiny A</strong> tvoria všetky prvky U, ktoré do A nepatria. Budeme ho zapisovať <strong>A′</strong>.</p><p>Príklad: U={1,2,3,4,5}, A={1,2}. Potom A′={3,4,5}.</p>",
        "remember": "Doplnok vždy závisí od univerzálnej množiny U."
      },
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Čo zostane?",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 290\"><rect x=\"70\" y=\"25\" width=\"620\" height=\"210\" rx=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><circle cx=\"315\" cy=\"130\" r=\"90\" fill=\"currentColor\" opacity=\".14\" stroke=\"currentColor\" stroke-width=\"3\"/><circle cx=\"445\" cy=\"130\" r=\"90\" fill=\"white\" opacity=\".9\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"110\" y=\"55\" font-size=\"20\">U</text><text x=\"250\" y=\"65\" font-size=\"20\">A</text><text x=\"500\" y=\"65\" font-size=\"20\">B</text><text x=\"380\" y=\"270\" text-anchor=\"middle\" font-size=\"18\">A − B: v A, ale nie v B</text></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "start",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "rozdiel množín",
        "question": "A={1,2,3,4}, B={3,4,5}. Čo je A−B?",
        "options": [
          "{1,2}",
          "{3,4}",
          "{5}"
        ],
        "answer": 0,
        "correct": "Nechávame prvky A, ktoré nie sú v B.",
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
        "html": "<p><span class=\"mini-label\">ČISTÝ ZÁPIS</span><br>Zapíš názov témy: <strong>Operácie s množinami – doplnok, rozdiel</strong>. Pridaj definíciu alebo pravidlo vlastnými slovami a jeden správny príklad.</p><p><span class=\"mini-label\">ÚLOHA</span><br>Vytvor vlastný príklad a vyrieš ho bez aplikácie.</p>",
        "model": "<strong>KONTROLA:</strong> Zápis musí používať presné symboly a musí byť z neho jasné, prečo výsledok platí."
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Jedna veta nestačí bez dôvodu",
        "prompt": "Vysvetli jednou až dvoma vetami, podľa čoho si pri poslednej úlohe rozhodol/a.",
        "model": "Možná presná formulácia: Rozdiel A−B obsahuje prvky, ktoré patria do A, ale nepatria do B. Doplnok A vzhľadom na U obsahuje prvky z U, ktoré nepatria do A.",
        "placeholder": "Rozhodol/a som tak, pretože..."
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Doplnok",
        "question": "Ak U={1,2,3,4,5} a A={2,4}, doplnok A v U je:",
        "options": [
          "{1,3,5}",
          "{2,4}",
          "{1,2,3,4,5}"
        ],
        "answer": 0,
        "correct": "Doplnok tvorí všetko z U, čo nie je v A.",
        "hint": "Začni univerzálnou množinou U."
      },
      {
        "id": "extra-b",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Rozdiel množín",
        "question": "Ak A={1,2,3} a B={3,4}, potom A − B je:",
        "options": [
          "{1,2}",
          "{4}",
          "{3}"
        ],
        "answer": 0,
        "correct": "Rozdiel A − B obsahuje prvky A, ktoré nepatria do B.",
        "hint": "Smer rozdielu je dôležitý: začínaš množinou A."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "rozdiel množín",
          "doplnok",
          "univerzálna množina"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; porovnaj svoj pocit s výsledkom úloh."
      }
    ]
  }
});
