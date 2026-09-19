MathPlatform.registerModule({
  "id": "2-u02-h007",
  "teacher": {
    "placement": "2. ročník · Funkcie – základné pojmy a vlastnosti · Hodina 7 · Párnosť, monotónnosť, extrémy, prostosť, ohraničenosť",
    "prerequisites": [
      "D(f), H(f) a čítanie grafu z hodiny 6",
      "súmernosť zo ZŠ/1. ročníka"
    ],
    "planContent": [
      "Téma a poradie sú prevzaté z aktuálneho tematického plánu 2. ročníka.",
      "Pri prvých dvoch tematických celkoch nie je v zdrojovom pláne samostatne vyplnený výkonový ani obsahový štandard; ciele sú didaktickým rozpracovaním názvu témy a nadväznosti hodín."
    ],
    "planPerformance": [
      "Nevymýšľame chýbajúci oficiálny výkonový štandard. Sledujeme primerané očakávané výkony uvedené v cieľoch modulu."
    ],
    "goals": [
      "zaviesť jednotlivé vlastnosti postupne a bez predčasného používania terminológie",
      "rozlíšiť grafický a slovný význam vlastností",
      "formulovať presné vysvetlenie"
    ],
    "competencies": [
      "prepájanie slovného, tabuľkového, algebraického a grafického vyjadrenia",
      "presné matematické vyjadrovanie",
      "čítanie a interpretácia grafu",
      "zdôvodnenie odpovede na základe definície alebo grafu"
    ],
    "enrichment": [
      "Aktuálny tematický plán určuje obsah a poradie tejto hodiny; návrh maturitného štandardu sa používa iba ako metodické obohatenie.",
      "Návrh štandardu uvádza tieto vlastnosti medzi základnými pojmami funkcie a zdôrazňuje vysvetľovanie definícií a argumentáciu z grafu."
    ],
    "flow": [
      "5 min mapa pojmov",
      "15–18 min modul",
      "10 min zápis do zošita",
      "5 min ústne príklady"
    ],
    "diagnostics": [
      "zámena pojmov",
      "párnosť vs nepárnosť",
      "prostosť vs monotónnosť",
      "maximum – bod vs hodnota"
    ],
    "partialUse": [
      "Modul je možné použiť celý alebo vybrať iba objavovaciu, zošitovú či diagnostickú časť podľa priebehu hodiny."
    ]
  },
  "student": {
    "title": "Vlastnosti pod lupou",
    "subtitle": "Každý pojem má presný význam",
    "intro": "Dnes pridáme viac vlastností funkcie, ale každú najprv pochopíme a až potom použijeme.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Z minulej hodiny už vieš čítať <strong>D(f)</strong> a <strong>H(f)</strong> z grafu funkcie.</p><p>Zo ZŠ a 1. ročníka poznáš aj pojem <strong>súmernosti</strong> — útvar môže byť súmerný podľa priamky alebo podľa bodu.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "rozlíšiť párnu a nepárnu funkciu",
          "rozumieť monotónnosti, extrémom, prostosti a ohraničenosti"
        ]
      },
      {
        "id": "overview",
        "type": "info",
        "phase": "MAPA HODINY",
        "title": "Dnes pridáme viac vlastností – po jednej",
        "html": "<p>Budeme skúmať <strong>párnosť/nepárnosť, monotónnosť, extrémy, prostosť a ohraničenosť</strong>. Každý pojem najprv vysvetlíme, až potom ho použijeme.</p><p class=\"keyidea\">Pri vlastnostiach funkcie nestačí poznať názov. Potrebujeme vedieť, čo presne znamená.</p>"
      },
      {
        "id": "even",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Párna a nepárna funkcia",
        "html": "<div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Párna funkcia</div><p class=\"term-rule\">Graf je súmerný podľa osi y. Ak sú x aj −x v D(f), platí f(−x)=f(x).</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Nepárna funkcia</div><p class=\"term-rule\">Graf je súmerný podľa začiatku súradnicovej sústavy. Platí f(−x)=−f(x).</p></div></div><p>Nie každá funkcia musí byť párna alebo nepárna.</p>",
        "remember": "najprv sleduj symetriu grafu; potom ju vieš zapísať vzťahom."
      },
      {
        "id": "even-visual",
        "type": "coordinatePlot",
        "phase": "VIZUALIZÁCIA",
        "title": "Ako to vyzerá v grafe?",
        "html": "<p>Graf párnej funkcie f(x) = x² je súmerný podľa osi y. Graf nepárnej funkcie g(x) = x³ je súmerný podľa začiatku súradnicovej sústavy [0;0].</p>",
        "xMin": -2, "xMax": 2, "yMin": -9, "yMax": 9, "xStep": 1, "yStep": 3,
        "curves": [
          { "fn": x => x * x, "label": "f(x)=x²" },
          { "fn": x => x * x * x, "color": "#66766f", "label": "g(x)=x³" }
        ],
        "note": "Skús si predstaviť, že graf preklopíš podľa osi y (f) alebo otočíš o 180° okolo bodu [0;0] (g) — dostaneš späť ten istý graf.",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "evencheck",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "párnosť",
        "stimulus": "f(−3)=f(3), f(−2)=f(2), graf je súmerný podľa osi y",
        "question": "Ktorá vlastnosť je naznačená?",
        "options": [
          "ohraničenosť",
          "nepárnosť",
          "prostosť",
          "párnosť"
        ],
        "answer": 3,
        "correct": "Súmernosť podľa osi y je znak párnej funkcie.",
        "hint": "Spomeň si, podľa čoho je graf súmerný."
      },
      {
        "id": "mono",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Monotónnosť",
        "html": "<div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Rastúca funkcia</div><p class=\"term-rule\">Pri pohybe zľava doprava funkčné hodnoty rastú.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Klesajúca funkcia</div><p class=\"term-rule\">Pri pohybe zľava doprava funkčné hodnoty klesajú.</p></div></div><p>Funkcia môže byť rastúca iba na jednej časti definičného oboru a na inej časti klesajúca.</p>",
        "remember": "monotónnosť vždy viažeme na konkrétnu časť definičného oboru."
      },
      {
        "id": "extrema",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Maximum a minimum",
        "html": "<div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Maximum</div><p class=\"term-rule\">Na danej množine je to najväčšia funkčná hodnota, ktorú tam funkcia dosiahne.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Minimum</div><p class=\"term-rule\">Na danej množine je to najmenšia funkčná hodnota, ktorú tam funkcia dosiahne.</p></div></div><p>Body, v ktorých funkcia dosahuje maximum alebo minimum, nazývame body extrému.</p><div class=\"coordinate-wrap\"><svg class=\"coordinate-plot\" viewBox=\"0 0 620 360\" role=\"img\"><line x1=\"45.0\" y1=\"45\" x2=\"45.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"111.2\" y1=\"45\" x2=\"111.2\" y2=\"315\" class=\"plot-grid\"/><line x1=\"177.5\" y1=\"45\" x2=\"177.5\" y2=\"315\" class=\"plot-grid\"/><line x1=\"243.8\" y1=\"45\" x2=\"243.8\" y2=\"315\" class=\"plot-grid\"/><line x1=\"310.0\" y1=\"45\" x2=\"310.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"376.2\" y1=\"45\" x2=\"376.2\" y2=\"315\" class=\"plot-grid\"/><line x1=\"442.5\" y1=\"45\" x2=\"442.5\" y2=\"315\" class=\"plot-grid\"/><line x1=\"508.8\" y1=\"45\" x2=\"508.8\" y2=\"315\" class=\"plot-grid\"/><line x1=\"575.0\" y1=\"45\" x2=\"575.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"45\" y1=\"315.0\" x2=\"575\" y2=\"315.0\" class=\"plot-grid\"/><line x1=\"45\" y1=\"270.0\" x2=\"575\" y2=\"270.0\" class=\"plot-grid\"/><line x1=\"45\" y1=\"225.0\" x2=\"575\" y2=\"225.0\" class=\"plot-grid\"/><line x1=\"45\" y1=\"180.0\" x2=\"575\" y2=\"180.0\" class=\"plot-grid\"/><line x1=\"45\" y1=\"135.0\" x2=\"575\" y2=\"135.0\" class=\"plot-grid\"/><line x1=\"45\" y1=\"90.0\" x2=\"575\" y2=\"90.0\" class=\"plot-grid\"/><line x1=\"45\" y1=\"45.0\" x2=\"575\" y2=\"45.0\" class=\"plot-grid\"/><line x1=\"310.0\" y1=\"45\" x2=\"310.0\" y2=\"315\" class=\"plot-axis\"/><line x1=\"45\" y1=\"270.0\" x2=\"575\" y2=\"270.0\" class=\"plot-axis\"/><text x=\"45.0\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">-4</text><text x=\"111.2\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">-3</text><text x=\"177.5\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">-2</text><text x=\"243.8\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">-1</text><text x=\"376.2\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">1</text><text x=\"442.5\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">2</text><text x=\"508.8\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">3</text><text x=\"575.0\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">4</text><text x=\"35\" y=\"319.0\" text-anchor=\"end\" class=\"plot-label\">-1</text><text x=\"35\" y=\"229.0\" text-anchor=\"end\" class=\"plot-label\">1</text><text x=\"35\" y=\"184.0\" text-anchor=\"end\" class=\"plot-label\">2</text><text x=\"35\" y=\"139.0\" text-anchor=\"end\" class=\"plot-label\">3</text><text x=\"35\" y=\"94.0\" text-anchor=\"end\" class=\"plot-label\">4</text><text x=\"35\" y=\"49.0\" text-anchor=\"end\" class=\"plot-label\">5</text><polyline points=\"45.0,90.0 111.2,225.0 177.5,270.0 243.8,225.0 310.0,90.0 376.2,225.0 442.5,270.0 508.8,225.0 575.0,90.0\" fill=\"none\" stroke=\"#173d35\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"177.5\" cy=\"270.0\" r=\"6\" fill=\"#173d35\"/><text x=\"186.5\" y=\"260.0\" class=\"plot-point-label\">min</text><circle cx=\"310.0\" cy=\"90.0\" r=\"6\" fill=\"#173d35\"/><text x=\"319.0\" y=\"80.0\" class=\"plot-point-label\">max</text><circle cx=\"442.5\" cy=\"270.0\" r=\"6\" fill=\"#173d35\"/><text x=\"451.5\" y=\"260.0\" class=\"plot-point-label\">min</text><text x=\"589\" y=\"262.0\" class=\"plot-axis-name\">x</text><text x=\"319.0\" y=\"33\" class=\"plot-axis-name\">y</text></svg></div>",
        "remember": "nepleť x-ovú súradnicu bodu extrému s hodnotou maxima/minima."
      },
      {
        "id": "injective",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Prostá funkcia",
        "html": "<p>Funkcia je <strong>prostá</strong>, ak dva rôzne vstupy nikdy nedajú rovnaký výstup.</p><p>Graficky: každá vodorovná priamka pretne graf prostej funkcie najviac raz.</p><div class=\"compare\"><div class=\"good\"><span class=\"mini-label\">PROSTÁ</span><p>f(x)=2x+1</p></div><div class=\"bad\"><span class=\"mini-label\">NIE JE PROSTÁ NA ℝ</span><p>f(x)=x², napr. f(2)=f(−2)</p></div></div>"
      },
      {
        "id": "bounded",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Ohraničenosť",
        "html": "<div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Zhora ohraničená</div><p class=\"term-rule\">Funkčné hodnoty neprekročia určitú hornú hranicu.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Zdola ohraničená</div><p class=\"term-rule\">Funkčné hodnoty neklesnú pod určitú dolnú hranicu.</p></div></div><p>Ak platí oboje, je funkcia ohraničená.</p><p>Ohraničenosť hovorí o výške hodnôt y, nie o šírke definičného oboru.</p>"
      },
      {
        "id": "clean-b",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Štyri vlastnosti v skratke",
        "html": "<div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Rastúca / klesajúca</div><p class=\"term-rule\">Pri pohybe zľava doprava funkčné hodnoty rastú, resp. klesajú (vždy na konkrétnej časti definičného oboru).</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Maximum / minimum</div><p class=\"term-rule\">Najväčšia, resp. najmenšia funkčná hodnota, ktorú funkcia na danej množine dosiahne.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Prostá</div><p class=\"term-rule\">Rôzne vstupy majú vždy rôzne výstupy — vodorovná priamka pretne graf najviac raz.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Ohraničená</div><p class=\"term-rule\">Funkčné hodnoty neprekročia hornú hranicu (zhora) a/alebo neklesnú pod dolnú hranicu (zdola).</p></div></div>"
      },
      {
        "id": "matrix",
        "type": "matrix",
        "phase": "ROZLÍŠ",
        "skill": "vlastnosti",
        "title": "Ktorý pojem opisuje vetu?",
        "labels": [
          "párna",
          "nepárna",
          "prostá",
          "zhora ohraničená",
          "minimum"
        ],
        "items": [
          {
            "text": "graf je súmerný podľa osi y",
            "answer": "párna"
          },
          {
            "text": "rôzne vstupy majú rôzne výstupy",
            "answer": "prostá"
          },
          {
            "text": "funkčné hodnoty neprekročia číslo 5",
            "answer": "zhora ohraničená"
          },
          {
            "text": "najmenšia dosiahnutá funkčná hodnota",
            "answer": "minimum"
          },
          {
            "text": "graf je súmerný podľa začiatku",
            "answer": "nepárna"
          }
        ]
      },
      {
        "id": "write",
        "type": "selfWrite",
        "phase": "MATEMATICKÉ VYJADROVANIE",
        "title": "Presne pomenuj vlastnosť",
        "promptHtml": "Vysvetli rozdiel medzi tvrdeniami <strong>„funkcia je prostá“</strong> a <strong>„funkcia je rastúca“</strong>.",
        "model": "Prostosť porovnáva výstupy rôznych vstupov: rôzne vstupy musia mať rôzne výstupy. Rastúca funkcia opisuje poradie hodnôt: pri väčšom vstupe je funkčná hodnota väčšia."
      },

      {"id":"oddcheck","type":"choice","phase":"OVER SI","skill":"párnosť","stimulus":"g(−x)=−g(x) a graf je súmerný podľa začiatku súradnicovej sústavy.","question":"Ako funkciu označíme?","options":["nepárna","párna","prostá","konštantná"],"answer":0,"correct":"To je definujúca vlastnosť nepárnej funkcie.","hint":"Súmernosť podľa začiatku."},
      {"id":"extreme-language","type":"choice","phase":"PRESNÝ JAZYK","skill":"extrémy","stimulus":"Funkcia dosahuje v bode x=2 hodnotu 7 a vyššiu hodnotu už na skúmanej množine nemá.","question":"Ktorá veta je najpresnejšia?","options":["Maximum je x=2.","Maximum je 7 a dosahuje ho pri x=2.","Minimum je 7.","Funkcia je prostá."],"answer":1,"correct":"Maximum je funkčná hodnota 7; x=2 je miesto, kde sa dosahuje.","hint":"Rozlišuj hodnotu a miesto."},
      {"id":"inject-check","type":"choice","phase":"OVER SI","skill":"prostosť","stimulus":"f(−2)=5 a f(2)=5","question":"Čo z toho určite vyplýva?","options":["Funkcia je párna.","Funkcia je rastúca.","Funkcia nie je prostá.","Funkcia je zhora ohraničená."],"answer":2,"correct":"Dva rôzne vstupy −2 a 2 majú rovnaký výstup 5, preto funkcia nie je prostá.","hint":"Použi definíciu prostej funkcie."},
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Pri každej zručnosti označ, ako sa teraz cítiš.",
        "skills": [
          "rozlíšim párnu a nepárnu funkciu",
          "rozumiem monotónnosti a extrémom",
          "rozumiem prostosti",
          "rozumiem ohraničenosti"
        ]
      }
    ]
  }
});
