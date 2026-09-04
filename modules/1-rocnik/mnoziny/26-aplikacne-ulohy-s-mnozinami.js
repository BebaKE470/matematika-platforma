MathPlatform.registerModule({
  "id": "1-u02-h026",
  "teacher": {
    "placement": "1. ročník · Množiny · 26. hodina: Aplikačné úlohy s množinami",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "výroková logika z predchádzajúceho tematického celku tam, kde pomáha presnému čítaniu podmienok"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza pre 26. hodinu tému „Aplikačné úlohy s množinami“. Súhrnný obsah celku zahŕňa úvod do množín, prvky a zápis, podmnožiny, prázdnu a univerzálnu množinu, kardinalitu, zjednotenie, prienik, rozdiel, doplnok, Vennove diagramy, kombinované a aplikačné úlohy."
    ],
    "planPerformance": [
      "V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; ciele modulu sú didaktickým rozpracovaním názvu a poradia tém, nie doplnením oficiálneho štandardu."
    ],
    "goals": [
      "porozumieť téme „Aplikačné úlohy s množinami“",
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
      "Návrh maturitného štandardu sa využíva iba ako obohatenie: reprezentácia množín, Vennove diagramy, prepojenie množinových operácií s logickými spojkami a presná argumentácia.",
      "Obsahuje aj originálnu maturitnú úlohu zo zbierky (2023, úloha 28), zaradenú až po osvojení potrebných množinových operácií; využíva aj bežné poznatky o deliteľnosti zo ZŠ."
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
    "title": "Množiny v dátach a praxi",
    "subtitle": "Téma 26 · Aplikačné úlohy s množinami",
    "intro": "Pracuj presne: najprv pochop význam zápisu, potom počítaj alebo kresli a nakoniec svoje rozhodnutie zdôvodni.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Množiny v dátach a praxi",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 300\"><g font-family=\"system-ui\"><circle cx=\"315\" cy=\"145\" r=\"105\" fill=\"currentColor\" opacity=\".07\" stroke=\"currentColor\" stroke-width=\"3\"/><circle cx=\"445\" cy=\"145\" r=\"105\" fill=\"currentColor\" opacity=\".12\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"250\" y=\"65\" font-size=\"22\">A</text><text x=\"495\" y=\"65\" font-size=\"22\">B</text><text x=\"380\" y=\"285\" text-anchor=\"middle\" font-size=\"18\">Prekrytie kruhov = A ∩ B</text></g></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "start",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "modelovanie",
        "question": "V skupine 30 žiakov používa 18 autobus, 14 električku a 6 oboje. Koľkí používajú aspoň jeden z týchto spôsobov?",
        "options": [
          "20",
          "26",
          "32"
        ],
        "answer": 1,
        "correct": "18+14−6=26.",
        "hint": "Nakresli si malý diagram alebo vypíš prvky."
      },
      {
        "id": "matura",
        "type": "choice",
        "phase": "VÝZVA",
        "skill": "Maturitný prenos",
        "question": "Maturitná úloha (2023, úloha 28): A sú kladné celé čísla deliteľné 5, B čísla menšie ako 200 a C čísla so zvyškom 3 po delení 7. Koľko prvkov má (A∩B)−C?",
        "options": [
          "33",
          "34",
          "35",
          "36",
          "37"
        ],
        "answer": 0,
        "correct": "Správne: 33. V A∩B je 39 kladných násobkov 5 menších ako 200. Do C z nich patria 10, 45, 80, 115, 150 a 185, teda 6 čísel. Preto 39 − 6 = 33.",
        "hint": "Najprv vypíš alebo spočítaj násobky 5 menšie ako 200. Potom hľadaj tie, ktoré dávajú po delení 7 zvyšok 3."
      },
      {
        "id": "notebook",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Upevni si podstatu",
        "html": "<p><span class=\"mini-label\">ZAPÍŠ SI DO ZOŠITA</span><br>Zapíš názov témy: <strong>Aplikačné úlohy s množinami</strong>. Pridaj definíciu alebo pravidlo vlastnými slovami a jeden správny príklad.</p><p><span class=\"mini-label\">ÚLOHA</span><br>Vytvor vlastný príklad a vyrieš ho bez aplikácie.</p>",
        "model": "<strong>KONTROLA:</strong> Zápis musí používať presné symboly a musí byť z neho jasné, prečo výsledok platí."
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Jedna veta nestačí bez dôvodu",
        "prompt": "Vysvetli jednou až dvoma vetami, podľa čoho si pri poslednej úlohe rozhodol/a.",
        "model": "Možná presná formulácia: V slovnej úlohe najprv určím, čo predstavujú jednotlivé množiny, a slovné podmienky preložím na prienik, zjednotenie alebo rozdiel. Výsledok potom interpretujem späť v kontexte úlohy.",
        "placeholder": "Rozhodol/a som tak, pretože..."
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Aplikácie množín",
        "question": "V triede 12 žiakov hrá futbal, 8 volejbal a 3 oba športy. Koľko žiakov hrá aspoň jeden z týchto športov?",
        "options": [
          "20",
          "17",
          "23"
        ],
        "answer": 1,
        "correct": "Pri súčte 12+8 sme troch žiakov započítali dvakrát, preto 12+8−3=17.",
        "hint": "Spoločnú časť treba odpočítať raz."
      },
      {
        "id": "extra-b",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Aplikácie množín",
        "question": "Prečo pri počítaní |A ∪ B| odčítavame |A ∩ B|?",
        "options": [
          "Lebo prvky prieniku boli v |A|+|B| započítané dvakrát.",
          "Lebo prienik do zjednotenia nepatrí.",
          "Lebo zjednotenie je vždy menšie ako prienik."
        ],
        "answer": 0,
        "correct": "Presne. Odčítaním spoločnej časti opravíme dvojité započítanie.",
        "hint": "Predstav si dva prekrývajúce sa kruhy."
      },
      {
        "id": "extra-c",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Vysvetli model",
        "prompt": "Vlastnými slovami opíš, čo v slovnej úlohe znamenajú A, B, A ∩ B a A ∪ B.",
        "model": "A a B predstavujú dve sledované skupiny. A ∩ B sú objekty v oboch skupinách a A ∪ B všetky objekty, ktoré patria aspoň do jednej z nich."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "modelovanie",
          "kardinalita",
          "aplikačné úlohy"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; porovnaj svoj pocit s výsledkom úloh."
      }
    ]
  }
});
