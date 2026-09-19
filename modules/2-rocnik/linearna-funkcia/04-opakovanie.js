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
        "id": "topic-intro",
        "type": "intro"
      },
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
          "graf pretína os y v [0;6]",
          "nulový bod je 2",
          "f(1)=−6"
        ],
        "answer": 2,
        "correct": "a=3>0, b=−6 a 3x−6=0 dá x=2.",
        "hint": "Skontroluj každé tvrdenie cez a, b a f(x)=0."
      },
      {
        "id": "graphread",
        "type": "coordinatePlot",
        "phase": "GRAF",
        "title": "Z jedného obrázka viac informácií",
        "html": "<p>Na grafe je lineárna funkcia prechádzajúca bodmi [0;3] a [3;0]. Skús si ešte pred pokračovaním povedať: rastie alebo klesá? aké je b? aký je nulový bod?</p>",
        "xMin": -2, "xMax": 6, "yMin": -3, "yMax": 6,
        "curves": [{ "fn": x => -x + 3 }],
        "points": [
          { "x": 0, "y": 3, "label": "[0;3]" },
          { "x": 3, "y": 0, "label": "[3;0]" }
        ],
        "ariaLabel": "Graf lineárnej funkcie prechádzajúcej bodmi [0;3] a [3;0]"
      },
      {
        "id": "graphq",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "graf",
        "stimulus": "Graf prechádza bodmi [0;3] a [3;0].",
        "question": "Ktorý predpis zodpovedá tomuto grafu?",
        "options": [
          "f(x)=x+3",
          "f(x)=−3x+1",
          "f(x)=3x−3",
          "f(x)=−x+3"
        ],
        "answer": 3,
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
        "phase": "ZOŠIT",
        "title": "Ručný tréning",
        "html": "<p>Bez mobilu vyrieš pre <strong>g(x)=0,5x−2</strong>: g(6), priesečník s osou y, nulový bod, monotónnosť. Potom načrtni graf.</p>",
        "model": "g(6)=1; os y: [0;−2]; nulový bod x=4; funkcia je rastúca."
      },

      {"id":"reverse","type":"choice","phase":"PREPOJ","skill":"predpis","stimulus":"Priamka prechádza bodom [0;−2] a pri zvýšení x o 1 sa y zvýši o 3.","question":"Ktorý predpis ju opisuje?","options":["f(x)=3x−2","f(x)=−2x+3","f(x)=3x+2","f(x)=−3x−2"],"answer":0,"correct":"Zmena o +3 dáva a=3 a bod [0;−2] dáva b=−2.","hint":"Najprv urč a, potom b."},
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
