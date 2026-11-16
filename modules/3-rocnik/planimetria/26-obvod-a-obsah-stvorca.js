MathPlatform.registerModule({
  "id": "3-u02-h026",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 26 · Obvod a obsah štvorca",
    "prerequisites": [
      "ZŠ: štvorec, jednotky dĺžky a obsahu, druhá mocnina a odmocnina",
      "2. ročník: Pytagorova veta",
      "hodina 25: štvorec ako rovnobežník, obdĺžnik a kosoštvorec"
    ],
    "planContent": [
      "Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka."
    ],
    "planPerformance": [
      "Poznať a vedieť opísať vlastnosti základných rovinných útvarov.",
      "Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov."
    ],
    "goals": [
      "vypočítať obvod o = 4a a obsah S = a² štvorca a dopočítať stranu",
      "vypočítať uhlopriečku u = a√2 pomocou Pytagorovej vety",
      "používať a prevádzať jednotky cm, cm², m, m²",
      "Modul je zameraný na obsah písomky (vzorce, vlastnosti útvarov, viackrokové výpočty, slovná úloha); doplnkové témy sú vynechané."
    ],
    "competencies": [
      "prepájať obrázok, slovnú úlohu a vzorec",
      "rozlíšiť obvod (dĺžka) a obsah (plocha) podľa kontextu",
      "presne zapisovať jednotky",
      "modelovať reálne situácie (plot, dlažba, farba)"
    ],
    "enrichment": [
      "dôkaz vzorca S = u² : 2",
      "zmena strany a pomer obsahov (pôvodné aktivity vyradené kvôli rozsahu)"
    ],
    "flow": [
      "0–3 min: opakovanie vlastností štvorca a Pytagorovej vety",
      "3–8 min: výklad: o = 4a, S = a², opačná úloha, jednotky, uhlopriečka",
      "8–22 min: platforma (≈ 12 aktivít): výber vzorca, viackrokové výpočty, dlaždice, hľadanie chyby",
      "nasleduje samostatná úloha BEZ MOBILU a zbierka podľa úrovní (podľa času)",
      "rozbor najčastejších chýb podľa živých výsledkov"
    ],
    "diagnostics": [
      "zamieňa obvod a obsah (6² namiesto 4 · 6)",
      "píše zlé jednotky (cm namiesto cm²) alebo zamieňa m² a cm²",
      "počíta a² ako 2a",
      "píše u = 2a namiesto u = a√2",
      "pri opačnej úlohe zabudne najprv nájsť stranu"
    ],
    "partialUse": [
      "pri nedostatku času vynechať zbierku (ROZŠÍRENIE a BONUS)",
      "výpočty robiť na papieri, mobil slúži na kontrolu a výber vzorca",
      "pri ŠVVP ponechať viditeľné vzorce o = 4a a S = a²"
    ]
  },
  "student": {
    "title": "Obvod a obsah štvorca",
    "subtitle": "Téma 26 · Planimetria",
    "intro": "Zopakuješ si obvod, obsah a uhlopriečku štvorca a prácu s jednotkami. Zameriavame sa na to, čo bude v písomke.",
    "estimatedTime": "20–25 min",
    "activities": [
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "vypočítať obvod a obsah štvorca a dopočítať stranu",
          "správne používať jednotky cm, cm², m a m²",
          "vypočítať uhlopriečku štvorca pomocou Pytagorovej vety"
        ]
      },
      {
        "id": "vzorce",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Štvorec: obvod, obsah a opačná úloha",
        "html": "<p>Štvorec má všetky strany rovnako dlhé (a), štyri pravé uhly a rovnako dlhé, navzájom kolmé uhlopriečky. <strong>Obvod</strong> je dĺžka hranice (cm, m), <strong>obsah</strong> je veľkosť plochy (cm², m²).</p><div class=\"formula\"><span class=\"mini-label\">OBVOD</span>o = 4a<span class=\"formula-note\">štyrikrát dĺžka strany</span></div><div class=\"formula\"><span class=\"mini-label\">OBSAH</span>S = a · a = a²<span class=\"formula-note\">strana na druhú</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD · a = 7 cm</span><p>o = 4 · 7 = <strong>28 cm</strong>, S = 7² = <strong>49 cm²</strong></p></div><p><strong>Opačná úloha:</strong> najprv nájdi stranu, až potom počítaj hľadanú veličinu: <strong>a = o : 4</strong> alebo <strong>a = √S</strong>.</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD · S = 64 cm²</span><p>a = √64 = 8 cm, o = 4 · 8 = <strong>32 cm</strong></p></div><div class=\"warning\"><strong>Pozor:</strong> a² nie je 2a a obvod nie je obsah (iné jednotky).</div>",
        "remember": "o = 4a (cm), S = a² (cm²). Pri opačnej úlohe najprv nájdi stranu a."
      },
      {
        "id": "jednotky-uhlopriecka",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Jednotky obsahu a uhlopriečka štvorca",
        "html": "<div class=\"formula\"><span class=\"mini-label\">PREVOD</span>1 m² = 10 000 cm²<span class=\"formula-note\">Dĺžky prepíš do jednej jednotky ešte pred dosadením.</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD · dlaždice na izbu</span><p>Izba 3 m × 3 m, dlaždica 30 cm × 30 cm. V cm: 300 : 30 = 10 dlaždíc v rade, spolu 10 · 10 = <strong>100 dlaždíc</strong>.</p></div><p>Uhlopriečka rozdelí štvorec na dva pravouhlé trojuholníky s odvesnami a, a, takže podľa Pytagorovej vety:</p><div class=\"formula\"><span class=\"mini-label\">UHLOPRIEČKA</span>u² = a² + a² = 2a² &nbsp;⇒&nbsp; u = a√2<span class=\"formula-note\">Uhlopriečka nie je 2a.</span></div>",
        "remember": "1 m² = 10 000 cm². u = a√2, teda u² = 2a²."
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "obvod a obsah",
        "question": "Štvorcová záhrada má stranu 8 m. Koľko metrov plota treba na ohradenie celej záhrady?",
        "options": [
          "64 m²",
          "32 m",
          "16 m",
          "24 m"
        ],
        "answer": 1,
        "correct": "Plot ide po hranici, teda ide o obvod: 4 · 8 = 32 m. Hodnota 64 vznikne pri obsahu a má inú jednotku (m²).",
        "hint": "Plot ide po okraji. Je to obvod alebo obsah? Koľko strán má štvorec?"
      },
      {
        "id": "m1",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "výber vzorca",
        "title": "Ktorý vzorec patrí k úlohe?",
        "labels": [
          "4a",
          "a²",
          "a√2"
        ],
        "items": [
          {
            "text": "dĺžka okrajovej lišty okolo štvorcovej izby",
            "answer": "4a"
          },
          {
            "text": "plocha podlahy štvorcovej izby",
            "answer": "a²"
          },
          {
            "text": "dĺžka úsečky, ktorá spája dva protiľahlé vrcholy štvorca",
            "answer": "a√2"
          },
          {
            "text": "množstvo farby na jednu štvorcovú stenu",
            "answer": "a²"
          },
          {
            "text": "dĺžka drôtu na obopnutie štvorcového rámu",
            "answer": "4a"
          },
          {
            "text": "najdlhšia rovná cesta cez štvorcové námestie z rohu do rohu",
            "answer": "a√2"
          }
        ]
      },
      {
        "id": "n3",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "opačná úloha",
        "title": "Obvod zo známeho obsahu",
        "prompt": "Štvorec má obsah 64 cm². Aký je jeho obvod (v cm)?",
        "validate": "exact",
        "answer": 32,
        "success": "a² = 64, a = 8 cm, o = 4 · 8 = 32 cm.",
        "hint": "Najprv zisti stranu: ktoré číslo na druhú dá 64? Potom vynásob štyrmi.",
        "reveal": "Správne je 32: a = 8 cm, o = 4a."
      },
      {
        "id": "n5",
        "type": "numberInput",
        "phase": "PRENES",
        "skill": "dlaždice",
        "title": "Dlaždice na izbu",
        "prompt": "Podlaha štvorcovej izby so stranou 4 m sa pokladá štvorcovými dlaždicami so stranou 20 cm. Koľko dlaždíc treba (bez rezu a odpadu)?",
        "validate": "exact",
        "answer": 400,
        "success": "Na jednej strane sa zmestí 400 cm : 20 cm = 20 dlaždíc, spolu 20 · 20 = 400.",
        "hint": "Prevedz izbu na cm. Koľko dlaždíc je v jednom rade? Koľko je radov?",
        "reveal": "Správne je 400: 20 dlaždíc v rade a 20 radov. (Alebo 160 000 cm² : 400 cm².)"
      },
      {
        "id": "n6",
        "type": "numberInput",
        "phase": "PRENES",
        "skill": "uhlopriečka",
        "title": "Štvorec uhlopriečky",
        "prompt": "Štvorec so stranou 5 cm má uhlopriečku u. Aké je u² (v cm²)?",
        "validate": "exact",
        "answer": 50,
        "success": "u² = 5² + 5² = 50 cm².",
        "hint": "Pytagorova veta: u² = a² + a².",
        "reveal": "Správne je 50: 25 + 25."
      },
      {
        "id": "e1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "nájdi chybu",
        "question": "Žiak počíta obvod štvorca so stranou 6 cm: „o = 6² = 36 cm.“ Čo je zle?",
        "options": [
          "Je to správne, obvod je a².",
          "Mal vynásobiť dvoma: 2 · 6 = 12 cm.",
          "Výsledok mal zapísať v cm², postup je správny.",
          "Vypočítal obsah. Obvod je 4 · 6 = 24 cm."
        ],
        "answer": 3,
        "correct": "Presne: 6² je obsah (36 cm²). Obvod je 4a = 24 cm a meria sa v cm.",
        "hint": "Obvod je dĺžka hranice. Koľko strán sa sčíta? Dá sa dĺžka merať v cm²?"
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Pozemok v zošite",
        "html": "<p>Odlož mobil. Štvorcový pozemok má obvod <strong>48 m</strong>. Do zošita načrtni štvorec s označenými vrcholmi a vypočítaj:</p><ol><li>dĺžku strany a,</li><li>obsah pozemku v m²,</li><li>štvorec dĺžky uhlopriečky u² (v m²) pomocou Pytagorovej vety.</li></ol><p>Všetky výsledky zapíš s jednotkou.</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "title": "Zbierka úloh",
        "html": "<p>Riešiš na papieri. Vždy napíš vzorec, dosadenie, výsledok a jednotku. Zbierka má tri úrovne: ZÁKLAD, ROZŠÍRENIE a BONUS.</p>",
        "items": [
          {
            "level": "zaklad",
            "html": "Štvorec má stranu 9 cm. Vypočítaj obvod a obsah.",
            "answer": "o = 4 · 9 = <strong>36 cm</strong>, S = 9² = <strong>81 cm²</strong>"
          },
          {
            "level": "zaklad",
            "html": "Štvorec má obvod 28 cm. Vypočítaj stranu a obsah.",
            "answer": "a = 28 : 4 = <strong>7 cm</strong>, S = 7² = <strong>49 cm²</strong>"
          },
          {
            "level": "zaklad",
            "html": "Štvorec má obsah 121 cm². Vypočítaj stranu a obvod.",
            "answer": "a = √121 = <strong>11 cm</strong>, o = 4 · 11 = <strong>44 cm</strong>"
          },
          {
            "level": "zaklad",
            "html": "Štvorcová dlaždica má stranu 30 cm. Aký je jej obsah v cm² a v m²?",
            "answer": "S = 30² = <strong>900 cm²</strong> = 900 : 10 000 = <strong>0,09 m²</strong>"
          },
          {
            "level": "rozsirenie",
            "html": "Štvorcový záhon má stranu 12 m. Obvod chceš ohradiť plotom, 1 m plota stojí 15 €. Koľko zaplatíš?",
            "answer": "o = 4 · 12 = 48 m, cena 48 · 15 = <strong>720 €</strong>"
          },
          {
            "level": "rozsirenie",
            "html": "Štvorcová izba má stranu 5 m. Parkety sa predávajú v balíkoch po 2 m² za 28 € za balík. Koľko balíkov treba a koľko to stojí?",
            "answer": "S = 25 m², 25 : 2 = 12,5, treba <strong>13 balíkov</strong> (celé). Cena 13 · 28 = <strong>364 €</strong>."
          },
          {
            "level": "rozsirenie",
            "html": "Vypočítaj uhlopriečku štvorca so stranou 6 cm (presne aj približne na stotiny).",
            "answer": "u² = 36 + 36 = 72, u = 6√2 ≈ <strong>8,49 cm</strong>"
          },
          {
            "level": "bonus",
            "html": "Štvorec má obsah 50 cm². Aká je jeho uhlopriečka?",
            "answer": "u² = 2a² = 2 · 50 = 100, u = <strong>10 cm</strong>"
          }
        ],
        "note": "Riešenia si pozri až po vlastnom pokuse."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Pri každej zručnosti označ, ako sa teraz cítiš.",
        "skills": [
          "viem vypočítať obvod a obsah štvorca",
          "viem zo známeho obvodu alebo obsahu nájsť stranu",
          "viem vypočítať uhlopriečku štvorca",
          "viem správne používať jednotky cm, cm², m, m²"
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
        "text": "Štvorec má stranu 12 cm. Vypočítaj obvod a obsah.",
        "answer": "o = 48 cm, S = 144 cm²"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 3,
        "text": "Štvorec má obvod 52 cm. Vypočítaj stranu a obsah.",
        "answer": "a = 13 cm, S = 169 cm²"
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 3,
        "text": "Štvorcová dlaždica má stranu 25 cm. Vypočítaj obsah v cm² a v m².",
        "answer": "S = 625 cm² = 0,0625 m²"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 4,
        "text": "Štvorcové námestie má stranu 80 m. Chceš ho obísť 3-krát dookola. Koľko metrov prejdeš?",
        "answer": "o = 320 m, 3 · 320 = 960 m"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 4,
        "text": "Vypočítaj uhlopriečku štvorca so stranou 10 cm presne aj približne na stotiny.",
        "answer": "u² = 200, u = 10√2 ≈ 14,14 cm"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 4,
        "text": "Štvorec má uhlopriečku u s u² = 98 cm². Vypočítaj obsah a obvod.",
        "answer": "S = 49 cm², a = 7 cm, o = 28 cm"
      }
    ]
  }
});
