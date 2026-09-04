MathPlatform.registerModule({
  "id": "1-u02-h025",
  "teacher": {
    "placement": "1. ročník · Množiny · 25. hodina: Zložené úlohy – kombinované operácie",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "výroková logika z predchádzajúceho tematického celku tam, kde pomáha presnému čítaniu podmienok"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza pre 25. hodinu tému „Zložené úlohy – kombinované operácie“. Súhrnný obsah celku zahŕňa úvod do množín, prvky a zápis, podmnožiny, prázdnu a univerzálnu množinu, kardinalitu, zjednotenie, prienik, rozdiel, doplnok, Vennove diagramy, kombinované a aplikačné úlohy."
    ],
    "planPerformance": [
      "V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; ciele modulu sú didaktickým rozpracovaním názvu a poradia tém, nie doplnením oficiálneho štandardu."
    ],
    "goals": [
      "porozumieť téme „Zložené úlohy – kombinované operácie“",
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
    "title": "Na poradí operácií záleží",
    "subtitle": "Téma 25 · Zložené úlohy – kombinované operácie",
    "intro": "Pracuj presne: najprv pochop význam zápisu, potom počítaj alebo kresli a nakoniec svoje rozhodnutie zdôvodni.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Na poradí operácií záleží",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 300\"><g font-family=\"system-ui\"><circle cx=\"315\" cy=\"145\" r=\"105\" fill=\"currentColor\" opacity=\".07\" stroke=\"currentColor\" stroke-width=\"3\"/><circle cx=\"445\" cy=\"145\" r=\"105\" fill=\"currentColor\" opacity=\".12\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"250\" y=\"65\" font-size=\"22\">A</text><text x=\"495\" y=\"65\" font-size=\"22\">B</text><text x=\"380\" y=\"285\" text-anchor=\"middle\" font-size=\"18\">Prekrytie kruhov = A ∩ B</text></g></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "start",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "kombinované operácie",
        "question": "A={1,2,3,4}, B={3,4,5}, C={4,5,6}. Čo je (A∩B)∩C?",
        "options": [
          "{3,4,5}",
          "{4}",
          "{5}"
        ],
        "answer": 1,
        "correct": "Najprv A∩B={3,4}, potom s C zostáva {4}.",
        "hint": "Nakresli si malý diagram alebo vypíš prvky."
      },
      {
        "id": "order",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Zátvorky nie sú dekorácia",
        "html": "<p>Pri kombinovaných operáciách najprv rešpektuj zátvorky. Najistejšia kontrola je vypísať medzivýsledok alebo ho vyznačiť vo Vennovom diagrame.</p>",
        "remember": "Jedna operácia → medzivýsledok → ďalšia operácia."
      },
      {
        "id": "notebook",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Upevni si podstatu",
        "html": "<p><span class=\"mini-label\">ZAPÍŠ SI DO ZOŠITA</span><br>Zapíš názov témy: <strong>Zložené úlohy – kombinované operácie</strong>. Pridaj definíciu alebo pravidlo vlastnými slovami a jeden správny príklad.</p><p><span class=\"mini-label\">ÚLOHA</span><br>Vytvor vlastný príklad a vyrieš ho bez aplikácie.</p>",
        "model": "<strong>KONTROLA:</strong> Zápis musí používať presné symboly a musí byť z neho jasné, prečo výsledok platí."
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Jedna veta nestačí bez dôvodu",
        "prompt": "Vysvetli jednou až dvoma vetami, podľa čoho si pri poslednej úlohe rozhodol/a.",
        "model": "Možná presná formulácia: Pri kombinovaných operáciách postupujem podľa zátvoriek. Najprv určím výsledok operácie v zátvorke a až potom s týmto výsledkom vykonám ďalšiu operáciu.",
        "placeholder": "Rozhodol/a som tak, pretože..."
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Kombinované operácie",
        "question": "Pri výraze (A ∪ B) ∩ C vykonáš najprv:",
        "options": [
          "prienik s C",
          "zjednotenie A ∪ B",
          "doplnok C"
        ],
        "answer": 1,
        "correct": "Najprv spracujeme operáciu v zátvorke.",
        "hint": "Rovnako ako pri číselných výrazoch rešpektuj zátvorky."
      },
      {
        "id": "extra-b",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Kombinované operácie",
        "question": "Ak prvok patrí do A aj B a zároveň do C, patrí do (A ∩ B) ∩ C?",
        "options": [
          "Áno",
          "Nie"
        ],
        "answer": 0,
        "correct": "Patrí do všetkých troch množín, preto patrí aj do výsledného prieniku.",
        "hint": "Prienik znamená súčasné splnenie podmienok."
      },
      {
        "id": "extra-c",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Postup bez preskakovania",
        "prompt": "Napíš pravidlo, ako budeš riešiť kombinované množinové výrazy, aby si sa nepomýlil/a.",
        "model": "Najprv rešpektujem zátvorky, po každom kroku si určím medzivýslednú množinu a až potom vykonám ďalšiu operáciu."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "kombinované operácie",
          "zátvorky",
          "Vennov diagram"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; porovnaj svoj pocit s výsledkom úloh."
      }
    ]
  }
});
