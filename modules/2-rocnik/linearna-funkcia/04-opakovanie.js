MathPlatform.registerModule({
  "id": "2-u01-h004",
  "teacher": {
    "placement": "2. ročník · Lineárna funkcia · Hodina 4 · Opakovanie",
    "prerequisites": [
      "celý tematický celok Lineárna funkcia, hodiny 1–3"
    ],
    "planContent": [
      "Téma a poradie sú prevzaté z aktuálneho tematického plánu 2. ročníka.",
      "Pri prvých dvoch tematických celkoch nie je v zdrojovom pláne samostatne vyplnený výkonový ani obsahový štandard; ciele sú didaktickým rozpracovaním názvu témy a nadväznosti hodín."
    ],
    "planPerformance": [
      "Nevymýšľame chýbajúci oficiálny výkonový štandard. Sledujeme primerané očakávané výkony uvedené v cieľoch modulu."
    ],
    "goals": [
      "systematizovať pojem, predpis, graf a vlastnosti lineárnej funkcie",
      "prepájať viac informácií v jednej úlohe",
      "formulovať stručné zdôvodnenie"
    ],
    "competencies": [
      "prepájanie slovného, tabuľkového, algebraického a grafického vyjadrenia",
      "presné matematické vyjadrovanie",
      "čítanie a interpretácia grafu",
      "zdôvodnenie odpovede na základe definície alebo grafu"
    ],
    "enrichment": [
      "Aktuálny tematický plán určuje obsah a poradie tejto hodiny; návrh maturitného štandardu sa používa iba ako metodické obohatenie.",
      "Návrh štandardu využívame na prepájanie reprezentácií a vyžadovanie krátkeho argumentu namiesto mechanickej odpovede."
    ],
    "flow": [
      "5 min retrieval",
      "15 min modul",
      "15 min papierové úlohy",
      "5 min spoločná oprava"
    ],
    "diagnostics": [
      "súvislosti",
      "grafické čítanie",
      "argumentácia"
    ],
    "partialUse": [
      "Modul je možné použiť celý alebo vybrať iba objavovaciu, zošitovú či diagnostickú časť podľa priebehu hodiny."
    ]
  },
  "student": {
    "title": "Lineárna funkcia v súvislostiach",
    "subtitle": "Opakovanie bez slepých postupov",
    "intro": "Prepoj pojem, predpis, graf a vlastnosti do jedného celku.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "mix",
        "type": "matrix",
        "phase": "OPAKOVANIE",
        "skill": "lineárna funkcia",
        "title": "Rýchla mapa pojmov",
        "labels": [
          "f(0)",
          "smernica",
          "nulový bod",
          "funkčná hodnota"
        ],
        "items": [
          {
            "text": "číslo b v predpise ax+b",
            "answer": "f(0)"
          },
          {
            "text": "koeficient a",
            "answer": "smernica"
          },
          {
            "text": "x, pre ktoré f(x)=0",
            "answer": "nulový bod"
          },
          {
            "text": "výsledok f(3)",
            "answer": "funkčná hodnota"
          }
        ]
      },
      {
        "id": "calc",
        "type": "choice",
        "phase": "PREPOJ",
        "skill": "predpis",
        "stimulus": "f(x)=3x−6",
        "question": "Ktoré tvrdenie je pravdivé?",
        "options": [
          "funkcia je klesajúca",
          "nulový bod je 2",
          "graf pretína os y v [0;6]",
          "f(1)=−6"
        ],
        "answer": 1,
        "correct": "a=3>0, b=−6 a 3x−6=0 dá x=2.",
        "hint": "Skontroluj každé tvrdenie cez a, b a f(x)=0."
      },
      {
        "id": "graphread",
        "type": "info",
        "phase": "GRAF",
        "title": "Z jedného obrázka viac informácií",
        "html": "<p>Na grafe je lineárna funkcia prechádzajúca bodmi [0;3] a [3;0].</p><div class=\"coordinate-wrap\"><svg class=\"coordinate-plot\" viewBox=\"0 0 620 360\" role=\"img\"><line x1=\"45.0\" y1=\"45\" x2=\"45.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"111.2\" y1=\"45\" x2=\"111.2\" y2=\"315\" class=\"plot-grid\"/><line x1=\"177.5\" y1=\"45\" x2=\"177.5\" y2=\"315\" class=\"plot-grid\"/><line x1=\"243.8\" y1=\"45\" x2=\"243.8\" y2=\"315\" class=\"plot-grid\"/><line x1=\"310.0\" y1=\"45\" x2=\"310.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"376.2\" y1=\"45\" x2=\"376.2\" y2=\"315\" class=\"plot-grid\"/><line x1=\"442.5\" y1=\"45\" x2=\"442.5\" y2=\"315\" class=\"plot-grid\"/><line x1=\"508.8\" y1=\"45\" x2=\"508.8\" y2=\"315\" class=\"plot-grid\"/><line x1=\"575.0\" y1=\"45\" x2=\"575.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"45\" y1=\"315.0\" x2=\"575\" y2=\"315.0\" class=\"plot-grid\"/><line x1=\"45\" y1=\"285.0\" x2=\"575\" y2=\"285.0\" class=\"plot-grid\"/><line x1=\"45\" y1=\"255.0\" x2=\"575\" y2=\"255.0\" class=\"plot-grid\"/><line x1=\"45\" y1=\"225.0\" x2=\"575\" y2=\"225.0\" class=\"plot-grid\"/><line x1=\"45\" y1=\"195.0\" x2=\"575\" y2=\"195.0\" class=\"plot-grid\"/><line x1=\"45\" y1=\"165.0\" x2=\"575\" y2=\"165.0\" class=\"plot-grid\"/><line x1=\"45\" y1=\"135.0\" x2=\"575\" y2=\"135.0\" class=\"plot-grid\"/><line x1=\"45\" y1=\"105.0\" x2=\"575\" y2=\"105.0\" class=\"plot-grid\"/><line x1=\"45\" y1=\"75.0\" x2=\"575\" y2=\"75.0\" class=\"plot-grid\"/><line x1=\"45\" y1=\"45.0\" x2=\"575\" y2=\"45.0\" class=\"plot-grid\"/><line x1=\"177.5\" y1=\"45\" x2=\"177.5\" y2=\"315\" class=\"plot-axis\"/><line x1=\"45\" y1=\"225.0\" x2=\"575\" y2=\"225.0\" class=\"plot-axis\"/><text x=\"45.0\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">-2</text><text x=\"111.2\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">-1</text><text x=\"243.8\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">1</text><text x=\"310.0\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">2</text><text x=\"376.2\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">3</text><text x=\"442.5\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">4</text><text x=\"508.8\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">5</text><text x=\"575.0\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">6</text><text x=\"35\" y=\"319.0\" text-anchor=\"end\" class=\"plot-label\">-3</text><text x=\"35\" y=\"289.0\" text-anchor=\"end\" class=\"plot-label\">-2</text><text x=\"35\" y=\"259.0\" text-anchor=\"end\" class=\"plot-label\">-1</text><text x=\"35\" y=\"199.0\" text-anchor=\"end\" class=\"plot-label\">1</text><text x=\"35\" y=\"169.0\" text-anchor=\"end\" class=\"plot-label\">2</text><text x=\"35\" y=\"139.0\" text-anchor=\"end\" class=\"plot-label\">3</text><text x=\"35\" y=\"109.0\" text-anchor=\"end\" class=\"plot-label\">4</text><text x=\"35\" y=\"79.0\" text-anchor=\"end\" class=\"plot-label\">5</text><text x=\"35\" y=\"49.0\" text-anchor=\"end\" class=\"plot-label\">6</text><polyline points=\"45.0,75.0 575.0,315.0\" fill=\"none\" stroke=\"#173d35\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"177.5\" cy=\"135.0\" r=\"6\" fill=\"#173d35\"/><text x=\"186.5\" y=\"125.0\" class=\"plot-point-label\">[0;3]</text><circle cx=\"376.2\" cy=\"225.0\" r=\"6\" fill=\"#173d35\"/><text x=\"385.2\" y=\"215.0\" class=\"plot-point-label\">[3;0]</text><text x=\"589\" y=\"217.0\" class=\"plot-axis-name\">x</text><text x=\"186.5\" y=\"33\" class=\"plot-axis-name\">y</text></svg></div><p>Skús si ešte pred pokračovaním povedať: rastie alebo klesá? aké je b? aký je nulový bod?</p>"
      },
      {
        "id": "graphq",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "graf",
        "question": "Ktorý predpis zodpovedá zobrazenému grafu?",
        "options": [
          "f(x)=x+3",
          "f(x)=−x+3",
          "f(x)=3x−3",
          "f(x)=−3x+1"
        ],
        "answer": 1,
        "correct": "Graf pretína os y v 3 a pri zvýšení x o 1 klesne y o 1, teda a=−1, b=3.",
        "hint": "Najprv urči b a potom smernicu."
      },
      {
        "id": "argument",
        "type": "selfWrite",
        "phase": "ARGUMENTUJ",
        "title": "Nie iba odpoveď",
        "promptHtml": "Vysvetli, prečo funkcia <strong>f(x)=−4x+7</strong> musí byť klesajúca bez toho, aby si kreslil/a graf.",
        "model": "Koeficient pri x je a=−4<0. Keď x zväčšíme o 1, funkčná hodnota sa zmenší o 4, preto je funkcia klesajúca."
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "PRACOVNÝ ZÁPIS",
        "title": "Ručný tréning",
        "html": "<p>Bez mobilu vyrieš pre <strong>g(x)=0,5x−2</strong>: g(6), priesečník s osou y, nulový bod, monotónnosť. Potom načrtni graf.</p>",
        "model": "g(6)=1; os y: [0;−2]; nulový bod x=4; funkcia je rastúca."
      },

      {"id":"reverse","type":"choice","phase":"PREPOJ","skill":"predpis","stimulus":"Priamka prechádza bodom [0;−2] a pri zvýšení x o 1 sa y zvýši o 3.","question":"Ktorý predpis ju opisuje?","options":["f(x)=−2x+3","f(x)=3x−2","f(x)=3x+2","f(x)=−3x−2"],"answer":1,"correct":"Zmena o +3 dáva a=3 a bod [0;−2] dáva b=−2.","hint":"Najprv urč a, potom b."},
      {"id":"error","type":"choice","phase":"NÁJDI CHYBU","skill":"argumentácia","stimulus":"Žiak rieši nulový bod f(x)=2x+6 takto: 2x+6=0 ⇒ 2x=6 ⇒ x=3.","question":"Kde je chyba?","options":["Nulový bod sa nehľadá z f(x)=0.","Pri prenesení +6 na druhú stranu má byť −6.","Treba dosadiť x=0.","Výpočet je správny."],"answer":1,"correct":"Správne: 2x=−6, teda x=−3.","hint":"Sleduj znamienko po úprave rovnice."},
      {"id":"synthesis","type":"selfWrite","phase":"SYNTÉZA","title":"Čo vieš z predpisu","promptHtml":"Pre <strong>f(x)=−2x+4</strong> napíš tri informácie, ktoré vieš určiť bez kreslenia grafu.","model":"Napríklad: a=−2, takže funkcia je klesajúca; b=4, takže graf pretína os y v [0;4]; nulový bod je x=2, takže pretína os x v [2;0]."},
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Pri každej zručnosti označ, ako sa teraz cítiš.",
        "skills": [
          "prepájam predpis a graf",
          "viem určiť základné vlastnosti lineárnej funkcie",
          "viem svoje rozhodnutie zdôvodniť"
        ]
      }
    ]
  }
});
