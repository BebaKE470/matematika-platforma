MathPlatform.registerModule({
  "id": "1-u02-h024",
  "teacher": {
    "placement": "1. ročník · Množiny · 24. hodina: Vennove diagramy",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "výroková logika z predchádzajúceho tematického celku tam, kde pomáha presnému čítaniu podmienok"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza pre 24. hodinu tému „Vennove diagramy“. Súhrnný obsah celku zahŕňa úvod do množín, prvky a zápis, podmnožiny, prázdnu a univerzálnu množinu, kardinalitu, zjednotenie, prienik, rozdiel, doplnok, Vennove diagramy, kombinované a aplikačné úlohy."
    ],
    "planPerformance": [
      "V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; ciele modulu sú didaktickým rozpracovaním názvu a poradia tém, nie doplnením oficiálneho štandardu."
    ],
    "goals": [
      "porozumieť téme „Vennove diagramy“",
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
    "title": "Obrázok, ktorý číta podmienky",
    "subtitle": "Téma 24 · Vennove diagramy",
    "intro": "Pracuj presne: najprv pochop význam zápisu, potom počítaj alebo kresli a nakoniec svoje rozhodnutie zdôvodni.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Obrázok, ktorý číta podmienky",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 300\"><g font-family=\"system-ui\"><circle cx=\"315\" cy=\"145\" r=\"105\" fill=\"currentColor\" opacity=\".07\" stroke=\"currentColor\" stroke-width=\"3\"/><circle cx=\"445\" cy=\"145\" r=\"105\" fill=\"currentColor\" opacity=\".12\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"250\" y=\"65\" font-size=\"22\">A</text><text x=\"495\" y=\"65\" font-size=\"22\">B</text><text x=\"380\" y=\"285\" text-anchor=\"middle\" font-size=\"18\">Prekrytie kruhov = A ∩ B</text></g></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "start",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "Vennov diagram",
        "question": "Čo v dvojmnožinovom Vennovom diagrame predstavuje prekrytie kruhov A a B?",
        "options": [
          "A∪B",
          "A∩B",
          "A−B"
        ],
        "answer": 1,
        "correct": "Prekrytie znamená súčasné členstvo v A aj B.",
        "hint": "Nakresli si malý diagram alebo vypíš prvky."
      },
      {
        "id": "readvenn",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "Vennov diagram",
        "title": "Prelož medzi obrazom a zápisom",
        "labels": [
          "prienik",
          "zjednotenie",
          "rozdiel"
        ],
        "items": [
          {
            "text": "spoločná časť A a B",
            "answer": "prienik"
          },
          {
            "text": "celá plocha oboch kruhov",
            "answer": "zjednotenie"
          },
          {
            "text": "časť A mimo B",
            "answer": "rozdiel"
          }
        ]
      },
      {
        "id": "notebook",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Upevni si podstatu",
        "html": "<p><span class=\"mini-label\">ZAPÍŠ SI DO ZOŠITA</span><br>Zapíš názov témy: <strong>Vennove diagramy</strong>. Pridaj definíciu alebo pravidlo vlastnými slovami a jeden správny príklad.</p><p><span class=\"mini-label\">ÚLOHA</span><br>Vytvor vlastný príklad a vyrieš ho bez aplikácie.</p>",
        "model": "<strong>KONTROLA:</strong> Zápis musí používať presné symboly a musí byť z neho jasné, prečo výsledok platí."
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Jedna veta nestačí bez dôvodu",
        "prompt": "Vysvetli jednou až dvoma vetami, podľa čoho si pri poslednej úlohe rozhodol/a.",
        "model": "Možná presná formulácia: Prekrytie oblastí A a B predstavuje prienik A∩B. Celá oblasť oboch kruhov predstavuje zjednotenie A∪B a časť jedného kruhu mimo druhého predstavuje rozdiel.",
        "placeholder": "Rozhodol/a som tak, pretože..."
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Vennov diagram",
        "question": "V prekrývajúcich sa kruhoch A a B predstavuje prekryv:",
        "options": [
          "A ∪ B",
          "A ∩ B",
          "A−B"
        ],
        "answer": 1,
        "correct": "Prekryv tvoria prvky patriace súčasne do A aj B.",
        "hint": "Prekryv = spoločná časť."
      },
      {
        "id": "extra-b",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Vennov diagram",
        "question": "Oblasť v obdĺžniku U mimo kruhu A predstavuje:",
        "options": [
          "doplnok A",
          "A ∩ U",
          "iba A"
        ],
        "answer": 0,
        "correct": "Je to časť univerzálnej množiny, ktorá nepatrí do A.",
        "hint": "Obdĺžnik predstavuje U."
      },
      {
        "id": "extra-c",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Diagram ako preklad",
        "prompt": "Vysvetli, ako ti Vennov diagram pomáha rozlíšiť zjednotenie a prienik.",
        "model": "Pri zjednotení sledujem celé oblasti oboch množín; pri prieniku iba ich spoločný prekryv."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "Vennov diagram",
          "reprezentácia",
          "čítanie podmienok"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; porovnaj svoj pocit s výsledkom úloh."
      }
    ]
  }
});
