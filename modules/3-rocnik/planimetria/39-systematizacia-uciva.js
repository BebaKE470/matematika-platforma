MathPlatform.registerModule({
  "id": "3-u02-h039",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 39 · Systematizácia učiva",
    "prerequisites": [
      "učivo hodín 22–38 (trojuholník, štvoruholníky, mnohouholník, kruh a jeho časti)",
      "Pytagorova veta z 2. ročníka",
      "prevody jednotiek dĺžky a obsahu",
      "úpravy výrazov a zlomky z 1. ročníka"
    ],
    "planContent": [
      "Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka."
    ],
    "planPerformance": [
      "Poznať a vedieť opísať vlastnosti základných rovinných útvarov.",
      "Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov."
    ],
    "goals": [
      "vybrať vzorec obvodu a obsahu podľa útvaru",
      "dopočítať chýbajúci rozmer (výška, uhlopriečky) Pytagorovou vetou",
      "použiť vzorce pre pravidelný mnohouholník (súčet a veľkosť uhla, počet uhlopriečok)",
      "rozlíšiť pravdivé a nepravdivé tvrdenia o útvaroch",
      "Modul je zameraný na obsah písomky (skrátená verzia: len pojmy, vzorce a typy úloh, ktoré sa píšu)."
    ],
    "competencies": [
      "systematizácia poznatkov",
      "prepájať obrázok, slovný opis a vzorec",
      "logické myslenie a kontrola výsledku",
      "presný zápis s jednotkami"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie: reprezentácie, modelovanie, presný matematický jazyk a argumentácia.",
      "Rozšírenie: položky ROZŠÍRENIE a BONUS (kruh opísaný obdĺžniku, rovnoramenný lichobežník, zmena obsahu pri zmene polomeru)."
    ],
    "flow": [
      "0–5 min: tabuľka vzorcov a vzorový príklad (chýbajúca výška cez Pytagorovu vetu)",
      "5–25 min: platforma (cca 20–25 min): priradenie vzorca, viackrokové výpočty, pravda/nepravda, pravidelný mnohouholník (súčet uhlov, uhlopriečky), hľadanie chyby",
      "Samostatná práca bez mobilu: rovnoramenný lichobežník; zbierka (výber)",
      "Posledných 5 min: typické chyby, sebahodnotenie pred písomkou",
      "Modul je zameraný na obsah písomky (skrátená verzia: len pojmy, vzorce a typy úloh, ktoré sa píšu)."
    ],
    "diagnostics": [
      "či žiak správne vyberie vzorec podľa útvaru",
      "či rozlíši výšku od šikmej strany",
      "či dopočíta chýbajúci rozmer Pytagorovou vetou",
      "či do obvodu zloženého útvaru nezapočíta vnútornú spoločnú čiaru",
      "či pri kruhu dosadí polomer, nie priemer"
    ],
    "partialUse": [
      "Modul možno použiť celý (25–35 min), alebo len tabuľku vzorcov a otázky; zbierku zadať ako domácu úlohu.",
      "Pomôcky: zošit, pravítko; kalkulačka nie je potrebná.",
      "Zbierka a worksheet.tasks sú určené na papier; v generátore pracovných listov ich možno zaradiť na tlačený list.",
      "Hodnotenie: priebežná spätná väzba a sebahodnotenie; XP nie sú známka."
    ]
  },
  "student": {
    "title": "Systematizácia učiva",
    "subtitle": "Téma 39 · Planimetria: prehľad vzorcov",
    "intro": "Prehľad vzorcov celého celku, viackrokové výpočty a pravda/nepravda o útvaroch. Počítaj na papieri, v aplikácii zapisuješ výsledok.",
    "estimatedTime": "20–25 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Prehľad vzorcov a vzorový príklad",
        "html": "<div class=\"table-wrap\"><table class=\"truth\"><thead><tr><th>Útvar</th><th>Obvod</th><th>Obsah</th></tr></thead><tbody>\n<tr><td>Trojuholník</td><td>a + b + c</td><td>a · v<sub>a</sub> : 2</td></tr>\n<tr><td>Štvorec</td><td>4a</td><td>a²</td></tr>\n<tr><td>Obdĺžnik</td><td>2(a + b)</td><td>a · b</td></tr>\n<tr><td>Kosoštvorec</td><td>4a</td><td>a · v alebo e · f : 2</td></tr>\n<tr><td>Kosodĺžnik</td><td>2(a + b)</td><td>a · v<sub>a</sub></td></tr>\n<tr><td>Lichobežník</td><td>a + b + c + d</td><td>(a + c) · v : 2</td></tr>\n<tr><td>Kruh</td><td>2πr</td><td>πr²</td></tr>\n<tr><td>Výseč (uhol α)</td><td>2r + 2πr · α/360</td><td>πr² · α/360</td></tr>\n<tr><td>Medzikružie</td><td>2πR + 2πr</td><td>π(R² − r²)</td></tr>\n<tr><td>n-uholník (pravidelný)</td><td>n · a</td><td>súčet uhlov (n − 2) · 180°; jeden uhol (n − 2) · 180° : n; počet uhlopriečok n(n − 3) : 2</td></tr>\n</tbody></table></div>\n<p>Výška v je vždy <span class=\"hl\">kolmá</span> na základňu; šikmá strana (kosodĺžnik, lichobežník) nie je výška.</p>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1 · ROVNORAMENNÝ TROJUHOLNÍK</span>\n<p>Rovnoramenný trojuholník má základňu 10 cm a ramená po 13 cm. Vypočítaj obvod a obsah.</p>\n<ol class=\"steps\"><li>Obvod: o = 10 + 13 + 13 = <strong>36 cm</strong>.</li>\n<li>Výška na základňu rozpolí základňu: vznikne pravouhlý trojuholník s odvesnou 5 cm a preponou 13 cm.</li>\n<li>Pytagorova veta: v² = 13² − 5² = 169 − 25 = 144, teda v = 12 cm.</li>\n<li>Obsah: S = 10 · 12 : 2 = <strong>60 cm²</strong>.</li></ol></div>\n<div class=\"warning\"><strong>Pozor:</strong> do obsahu patrí kolmá výška, nie šikmé rameno; pri kruhu dosadzuj polomer, nie priemer; obvod meraj v cm, obsah v cm².</div>",
        "remember": "Trojuholník a lichobežník: delíme dvoma. Kosodĺžnik a obdĺžnik: bez delenia. Kruh: π · polomer."
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "vybrať správny vzorec obvodu a obsahu podľa útvaru",
          "dopočítať chýbajúci rozmer (Pytagorova veta, uhlopriečky)",
          "rozpoznať pravdivé a nepravdivé tvrdenia o útvaroch a opraviť typickú chybu"
        ]
      },
      {
        "id": "matrix-formulas",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "vzorce obsahu",
        "title": "Ktorý vzorec patrí ktorému útvaru?",
        "labels": [
          "a · b",
          "a · v",
          "a · v : 2",
          "(a + c) · v : 2",
          "π · r²",
          "e · f : 2",
          "o = 2π · r",
          "(n − 2) · 180°",
          "n(n − 3) : 2"
        ],
        "items": [
          {
            "text": "obdĺžnik so stranami a, b",
            "answer": "a · b"
          },
          {
            "text": "kosodĺžnik so stranou a a výškou na ňu v",
            "answer": "a · v"
          },
          {
            "text": "trojuholník so stranou a a výškou na ňu v",
            "answer": "a · v : 2"
          },
          {
            "text": "lichobežník s rovnobežnými stranami a, c a výškou v",
            "answer": "(a + c) · v : 2"
          },
          {
            "text": "kruh s polomerom r",
            "answer": "π · r²"
          },
          {
            "text": "kosoštvorec s uhlopriečkami e, f",
            "answer": "e · f : 2"
          },
          {
            "text": "obvod kruhu s polomerom r",
            "answer": "o = 2π · r"
          },
          {
            "text": "súčet vnútorných uhlov n-uholníka",
            "answer": "(n − 2) · 180°"
          },
          {
            "text": "počet uhlopriečok n-uholníka",
            "answer": "n(n − 3) : 2"
          }
        ]
      },
      {
        "id": "n-trap",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "lichobežník",
        "title": "Obsah lichobežníka",
        "prompt": "Lichobežník má rovnobežné strany 10 cm a 6 cm a výšku 5 cm. Aký je jeho obsah v cm²?",
        "validate": "exact",
        "answer": 40,
        "success": "S = (10 + 6) · 5 : 2 = 80 : 2 = 40 cm².",
        "hint": "Nezabudni deliť dvoma: S = (a + c) · v : 2.",
        "reveal": "Správne je 40: 16 · 5 : 2."
      },
      {
        "id": "n-rhomb",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "kosoštvorec",
        "title": "Obvod kosoštvorca",
        "prompt": "Kosoštvorec má uhlopriečky 16 cm a 30 cm. Aký je jeho obvod v cm?",
        "validate": "exact",
        "answer": 68,
        "success": "Strana: a² = 8² + 15² = 64 + 225 = 289, teda a = 17 cm. Obvod 4 · 17 = 68 cm.",
        "hint": "Uhlopriečky sa rozpoľujú kolmo. Strana je prepona trojuholníka s odvesnami 8 cm a 15 cm.",
        "reveal": "Správne je 68: 4 · 17."
      },
      {
        "id": "n-rect",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "obdĺžnik",
        "title": "Obdĺžnik z uhlopriečky",
        "prompt": "Obdĺžnik má jednu stranu 6 cm a uhlopriečku 10 cm. Aký je jeho obsah v cm²?",
        "validate": "exact",
        "answer": 48,
        "success": "Druhá strana: b² = 10² − 6² = 64, teda b = 8 cm. S = 6 · 8 = 48 cm².",
        "hint": "Uhlopriečka a dve strany tvoria pravouhlý trojuholník. Pytagorova veta.",
        "reveal": "Správne je 48: 6 · 8."
      },
      {
        "id": "n-polyang",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "mnohouholník",
        "title": "Pravidelný deväťuholník: uhol",
        "prompt": "Pravidelný deväťuholník má súčet vnútorných uhlov (9 − 2) · 180° = 1 260°. Aký veľký je jeden jeho vnútorný uhol v stupňoch?",
        "validate": "exact",
        "answer": 140,
        "success": "1 260° : 9 = 140°.",
        "hint": "Súčet uhlov rozdeľ rovnomerne medzi všetky uhly.",
        "reveal": "Správne je 140: 1 260 : 9."
      },
      {
        "id": "n-diag",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "mnohouholník",
        "title": "Počet uhlopriečok",
        "prompt": "Koľko uhlopriečok má desaťuholník? Použi n(n − 3) : 2.",
        "validate": "exact",
        "answer": 35,
        "success": "10 · 7 : 2 = 35.",
        "hint": "Dosaď n = 10: n · (n − 3) a vydeľ dvoma.",
        "reveal": "Správne je 35: 70 : 2."
      },
      {
        "id": "sort-claims",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "vlastnosti vzorcov",
        "title": "Platí alebo neplatí?",
        "question": "Rozhodni, či tvrdenie platí.",
        "labels": [
          "platí",
          "neplatí"
        ],
        "items": [
          {
            "text": "Kosodĺžnik a obdĺžnik s rovnakou základňou a výškou majú rovnaký obsah.",
            "answer": true,
            "why": "Oba majú obsah a · v. Šikmá strana sa v obsahu neprejaví."
          },
          {
            "text": "Obsah lichobežníka je súčin dvoch rovnobežných strán a výšky.",
            "answer": false,
            "why": "Rovnobežné strany sa sčítajú: (a + c) · v : 2."
          },
          {
            "text": "Ak sa polomer kruhu zdvojnásobí, jeho obvod sa zdvojnásobí.",
            "answer": true,
            "why": "Obvod 2πr rastie priamo úmerne s polomerom."
          },
          {
            "text": "Ak sa polomer kruhu zdvojnásobí, jeho obsah sa zdvojnásobí.",
            "answer": false,
            "why": "Obsah πr² rastie s druhou mocninou polomeru, teda 4-krát."
          },
          {
            "text": "Trojuholník so stranami 3 cm, 4 cm a 5 cm je pravouhlý a má obsah 6 cm².",
            "answer": true,
            "why": "3² + 4² = 5², je pravouhlý, S = 3 · 4 : 2 = 6 cm²."
          },
          {
            "text": "Kosoštvorec so stranou 5 cm má vždy obsah 25 cm².",
            "answer": false,
            "why": "To platí len pre štvorec. Obsah kosoštvorca závisí od výšky alebo uhlopriečok."
          },
          {
            "text": "Uhlopriečky kosoštvorca sú na seba kolmé.",
            "answer": true,
            "why": "Je to základná vlastnosť kosoštvorca; uhlopriečky sa aj rozpoľujú."
          },
          {
            "text": "Uhlopriečky obdĺžnika, ktorý nie je štvorec, sú na seba kolmé.",
            "answer": false,
            "why": "Sú rovnako dlhé a rozpoľujú sa, ale kolmé sú len pri štvorci."
          },
          {
            "text": "Pravidelný mnohouholník má všetky strany aj všetky vnútorné uhly rovnaké.",
            "answer": true,
            "why": "Presne to znamená slovo pravidelný."
          }
        ]
      },
      {
        "id": "err-tri",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "trojuholník",
        "question": "Pravouhlý trojuholník má odvesny 6 cm a 8 cm a preponu 10 cm. Žiak počíta obsah: S = 6 · 10 : 2 = 30 cm². Čo je zle?",
        "options": [
          "Mal vynásobiť všetky tri strany",
          "Pri trojuholníku sa nedelí dvoma",
          "Nič, 30 cm² je správny výsledok",
          "Ako výšku použil preponu; správne je 6 · 8 : 2 = 24 cm²"
        ],
        "answer": 3,
        "correct": "Odvesny sú na seba kolmé, preto jedna je základňa a druhá výška: S = 6 · 8 : 2 = 24 cm². Prepona je šikmá, výškou nie je.",
        "hint": "Ktorá strana je v pravouhlom trojuholníku kolmá na základňu 6 cm?"
      },
      {
        "id": "transfer",
        "type": "choice",
        "phase": "MATURITNÝ FORMÁT",
        "skill": "modelovanie",
        "question": "Okno tvaru kosoštvorca má uhlopriečky 60 cm a 80 cm. Aký obsah má sklo?",
        "options": [
          "4 800 cm²",
          "2 400 cm²",
          "140 cm²",
          "5 000 cm²"
        ],
        "answer": 1,
        "correct": "S = e · f : 2 = 60 · 80 : 2 = 2 400 cm². Bez delenia dvoma by si dostal obsah obdĺžnika 4 800 cm².",
        "hint": "Použi vzorec cez uhlopriečky a nezabudni deliť dvoma."
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Zmiešaný príklad",
        "html": "<p>Rovnoramenný lichobežník má základne 14 cm a 6 cm a ramená po 5 cm. Načrtni ho a vyznač výšku. Dopočítaj výšku pomocou Pytagorovej vety a vypočítaj <strong>obvod</strong> a <strong>obsah</strong> lichobežníka. Výsledky zapíš s jednotkami.</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: systematizácia",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Rieš v zošite, výsledky zapíš s jednotkou. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "html": "Obdĺžnik má strany 9 cm a 4 cm. Vypočítaj obvod a obsah.",
            "answer": "o = 2 · (9 + 4) = <strong>26 cm</strong>; S = 9 · 4 = <strong>36 cm²</strong>."
          },
          {
            "level": "zaklad",
            "html": "Lichobežník má rovnobežné strany 12 cm a 8 cm a výšku 5 cm. Vypočítaj obsah.",
            "answer": "S = (12 + 8) · 5 : 2 = <strong>50 cm²</strong>."
          },
          {
            "level": "zaklad",
            "html": "Kruh má polomer 6 cm. Vypočítaj obvod a obsah.",
            "answer": "o = 2π · 6 = <strong>12π cm</strong>; S = π · 36 = <strong>36π cm²</strong>."
          },
          {
            "level": "rozsirenie",
            "html": "Kosoštvorec má stranu 13 cm a jednu uhlopriečku 24 cm. Vypočítaj druhú uhlopriečku, obvod a obsah.",
            "answer": "Polovica uhlopriečky: 12 cm, druhá polovica: √(13² − 12²) = √25 = 5 cm, teda f = 10 cm. Obvod 4 · 13 = <strong>52 cm</strong>. Obsah 24 · 10 : 2 = <strong>120 cm²</strong>."
          },
          {
            "level": "rozsirenie",
            "html": "Rovnoramenný trojuholník má základňu 16 cm a ramená po 17 cm. Vypočítaj jeho obvod a obsah.",
            "answer": "Obvod 17 + 17 + 16 = <strong>50 cm</strong>. Výška: v² = 17² − 8² = 225, v = 15 cm. Obsah 16 · 15 : 2 = <strong>120 cm²</strong>."
          },
          {
            "level": "rozsirenie",
            "html": "Výseč má polomer 12 cm a stredový uhol 150°. Vypočítaj obsah, dĺžku oblúka a obvod výseče.",
            "answer": "Zlomok 150/360 = 5/12. S = 144π · 5/12 = <strong>60π cm²</strong>; l = 24π · 5/12 = <strong>10π cm</strong>; obvod = <strong>(24 + 10π) cm</strong>."
          },
          {
            "level": "rozsirenie",
            "html": "Útvar tvaru L vznikne z obdĺžnika 10 cm × 6 cm vyňatím rohu 4 cm × 3 cm. Vypočítaj obsah a obvod.",
            "answer": "Obsah: 60 − 12 = <strong>48 cm²</strong>. Obvod: vyňatím rohu sa obvod nezmení (stena rohu nahradí rovnako dlhú hranu): 2 · (10 + 6) = <strong>32 cm</strong>."
          },
          {
            "level": "bonus",
            "html": "Obdĺžnik 8 cm × 6 cm je vpísaný do kruhu (vrcholy ležia na kružnici). Vypočítaj obsah časti kruhu mimo obdĺžnika.",
            "answer": "Uhlopriečka: √(64 + 36) = 10 cm je priemer, r = 5 cm. Kruh 25π, obdĺžnik 48: <strong>(25π − 48) cm²</strong>."
          }
        ]
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Označ, ako dobre to zvládaš. Nie je to známka. Čo máš 🔴 alebo 🟡, si prejdi v tabuľke vzorcov a v zbierke.",
        "skills": [
          "vzorce obvodu a obsahu trojuholníka a štvoruholníkov",
          "obvod a obsah kruhu a výseče",
          "dopočítať chýbajúci rozmer (Pytagorova veta)",
          "zložený útvar: sčítať alebo odčítať",
          "rozpoznať typické chyby"
        ]
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 3,
        "html": "Obdĺžnik má strany 15 cm a 8 cm. Vypočítaj obvod a obsah.",
        "answer": "o = <strong>46 cm</strong>; S = <strong>120 cm²</strong>."
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 3,
        "html": "Trojuholník má základňu 14 cm a výšku na ňu 9 cm. Vypočítaj obsah.",
        "answer": "S = 14 · 9 : 2 = <strong>63 cm²</strong>."
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 3,
        "html": "Lichobežník má rovnobežné strany 13 cm a 7 cm a výšku 6 cm. Vypočítaj obsah.",
        "answer": "S = (13 + 7) · 6 : 2 = <strong>60 cm²</strong>."
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 5,
        "html": "Kosoštvorec má uhlopriečky 10 cm a 24 cm. Vypočítaj jeho obvod a obsah.",
        "answer": "a² = 5² + 12² = 169, a = 13 cm; o = <strong>52 cm</strong>; S = 10 · 24 : 2 = <strong>120 cm²</strong>."
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 5,
        "html": "Výseč má polomer 9 cm a stredový uhol 40°. Vypočítaj obsah, dĺžku oblúka a obvod.",
        "answer": "40/360 = 1/9; S = 81π/9 = <strong>9π cm²</strong>; l = 18π/9 = <strong>2π cm</strong>; obvod <strong>(18 + 2π) cm</strong>."
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 6,
        "html": "Rovnoramenný lichobežník má základne 20 cm a 10 cm a ramená 13 cm. Vypočítaj obvod a obsah.",
        "answer": "(20 − 10) : 2 = 5, v² = 13² − 5² = 144, v = 12 cm. Obvod 20 + 10 + 13 + 13 = <strong>56 cm</strong>; S = (20 + 10) · 12 : 2 = <strong>180 cm²</strong>."
      }
    ]
  }
});
