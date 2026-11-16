MathPlatform.registerModule({
  "id": "3-u02-h027",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 27 · Obvod a obsah obdĺžnika",
    "prerequisites": [
      "ZŠ: obdĺžnik, jednotky dĺžky a obsahu",
      "2. ročník: Pytagorova veta",
      "hodina 25: vlastnosti obdĺžnika (uhlopriečky, pravé uhly)",
      "hodina 26: obvod a obsah štvorca a uhlopriečka štvorca"
    ],
    "planContent": [
      "Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka."
    ],
    "planPerformance": [
      "Poznať a vedieť opísať vlastnosti základných rovinných útvarov.",
      "Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov."
    ],
    "goals": [
      "vypočítať obvod o = 2(a + b) a obsah S = a · b obdĺžnika",
      "dopočítať chýbajúcu stranu z obvodu alebo obsahu",
      "vypočítať uhlopriečku obdĺžnika z u² = a² + b²",
      "riešiť slovnú úlohu s pozemkom (obvod, obsah, uhlopriečka, jednotky)",
      "Modul je zameraný na obsah písomky (vzorce, vlastnosti útvarov, viackrokové výpočty, slovná úloha); doplnkové témy sú vynechané."
    ],
    "competencies": [
      "prepájať obrázok, slovnú úlohu a vzorec",
      "rozlíšiť obvod a obsah podľa kontextu",
      "presne zapisovať jednotky",
      "zdôvodniť závislosť obsahu od rozmerov"
    ],
    "enrichment": [
      "obvod 24 cm: obsah je najväčší pre štvorec",
      "zmena rozmerov a rovnaký obvod pri rôznom obsahu (pôvodné aktivity vyradené kvôli rozsahu)"
    ],
    "flow": [
      "0–3 min: opakovanie vzorcov pre štvorec a Pytagorovej vety",
      "3–8 min: výklad: o = 2(a + b), S = a · b, chýbajúca strana, uhlopriečka",
      "8–22 min: platforma (≈ 12 aktivít): výber vzorca, viackrokové výpočty, slovná úloha, hľadanie chyby",
      "nasleduje samostatná úloha BEZ MOBILU (pozemok) a zbierka podľa úrovní (podľa času)",
      "rozbor najčastejších chýb podľa živých výsledkov"
    ],
    "diagnostics": [
      "píše 2a + b namiesto 2(a + b)",
      "zamieňa obvod a obsah alebo jednotky cm, cm², m²",
      "píše u = a + b namiesto u = √(a² + b²)",
      "myslí si, že rovnaký obvod znamená rovnaký obsah",
      "pri zväčšení oboch strán k-krát zabudne, že obsah rastie k²-krát"
    ],
    "partialUse": [
      "pri nedostatku času vynechať zbierku (ROZŠÍRENIE a BONUS)",
      "výpočty robiť na papieri, mobil slúži na kontrolu a výber vzorca",
      "pri ŠVVP ponechať viditeľné vzorce a ukážkové príklady"
    ]
  },
  "student": {
    "title": "Obvod a obsah obdĺžnika",
    "subtitle": "Téma 27 · Planimetria",
    "intro": "Zopakuješ si obvod, obsah a uhlopriečku obdĺžnika a riešiš slovnú úlohu s pozemkom. Zameriavame sa na to, čo bude v písomke.",
    "estimatedTime": "20–25 min",
    "activities": [
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "vypočítať obvod a obsah obdĺžnika",
          "dopočítať neznámu stranu z obvodu alebo obsahu",
          "vypočítať uhlopriečku obdĺžnika pomocou Pytagorovej vety",
          "riešiť slovnú úlohu s pozemkom"
        ]
      },
      {
        "id": "vzorce",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Obdĺžnik: obvod, obsah a chýbajúca strana",
        "html": "<p>Obdĺžnik má štyri pravé uhly, protiľahlé strany rovnako dlhé (a, b) a rovnako dlhé uhlopriečky, ktoré sa navzájom rozpoľujú.</p><div class=\"formula\"><span class=\"mini-label\">OBVOD</span>o = 2(a + b)<span class=\"formula-note\">dve strany a a dve strany b</span></div><div class=\"formula\"><span class=\"mini-label\">OBSAH</span>S = a · b</div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD · 8 cm × 5 cm</span><p>o = 2 · (8 + 5) = <strong>26 cm</strong>, S = 8 · 5 = <strong>40 cm²</strong></p></div><p><strong>Chýbajúca strana:</strong> z obvodu b = o : 2 − a, z obsahu b = S : a. Najprv nájdi druhú stranu, potom počítaj hľadanú veličinu.</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD · o = 30 cm, a = 4 cm</span><p>a + b = 15, b = 15 − 4 = <strong>11 cm</strong>, S = 4 · 11 = <strong>44 cm²</strong></p></div><div class=\"warning\"><strong>Pozor:</strong> 2(a + b), nie 2a + b. A obvod (cm) nie je obsah (cm²).</div>",
        "remember": "o = 2(a + b) v cm, S = a · b v cm². Obvod : 2 = a + b, obsah : a = b."
      },
      {
        "id": "uhlopriecka",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Uhlopriečka obdĺžnika",
        "html": "<p>Uhlopriečka je prepona pravouhlého trojuholníka s odvesnami a, b:</p><div class=\"formula\"><span class=\"mini-label\">PYTAGOROVA VETA</span>u² = a² + b²<span class=\"formula-note\">u = √(a² + b²)</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD · 5 m × 12 m</span><p>u² = 25 + 144 = 169, u = <strong>13 m</strong></p></div><div class=\"warning\"><strong>Pozor:</strong> Uhlopriečka nie je a + b. Sčítaš druhé mocniny, potom odmocníš.</div>",
        "remember": "u² = a² + b². Najprv sčítaj druhé mocniny, až potom odmocni."
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "obvod obdĺžnika",
        "question": "Obdĺžnik má strany 9 cm a 4 cm. Aký je jeho obvod?",
        "options": [
          "36 cm²",
          "13 cm",
          "26 cm",
          "22 cm"
        ],
        "answer": 2,
        "correct": "o = 2 · (9 + 4) = 26 cm. 36 vznikne pri obsahu (9 · 4) a má inú jednotku, 13 je len a + b, 22 je 2a + b.",
        "hint": "Obvod je dĺžka celej hranice. Koľko strán po 9 cm a koľko po 4 cm má obdĺžnik?"
      },
      {
        "id": "m1",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "výber vzorca",
        "title": "Ktorý vzorec patrí k úlohe?",
        "labels": [
          "2(a + b)",
          "a · b",
          "√(a² + b²)"
        ],
        "items": [
          {
            "text": "dĺžka lišty okolo obdĺžnikovej izby",
            "answer": "2(a + b)"
          },
          {
            "text": "plocha koberca v obdĺžnikovej izbe",
            "answer": "a · b"
          },
          {
            "text": "najkratšia cesta cez obdĺžnikový trávnik z rohu do protiľahlého rohu",
            "answer": "√(a² + b²)"
          },
          {
            "text": "dĺžka plota okolo obdĺžnikového pozemku",
            "answer": "2(a + b)"
          },
          {
            "text": "počet dlaždíc na obdĺžnikovú terasu (podľa plochy)",
            "answer": "a · b"
          },
          {
            "text": "dĺžka uhlopriečky obdĺžnikového plátna",
            "answer": "√(a² + b²)"
          }
        ]
      },
      {
        "id": "n2",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "obvod obdĺžnika",
        "title": "Obvod obdĺžnika",
        "prompt": "Záhrada má rozmery 12 m a 7 m. Koľko metrov plota treba na ohradenie celej záhrady?",
        "validate": "exact",
        "answer": 38,
        "success": "o = 2 · (12 + 7) = 38 m.",
        "hint": "Plot ide po celom obvode: dve strany po 12 m a dve po 7 m.",
        "reveal": "Správne je 38: 2 · 19."
      },
      {
        "id": "n3",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "chýbajúca strana",
        "title": "Strana z obvodu",
        "prompt": "Obdĺžnik má obvod 30 cm a jednu stranu a = 4 cm. Aká je dĺžka strany b (v cm)?",
        "validate": "exact",
        "answer": 11,
        "success": "a + b = 30 : 2 = 15, b = 15 − 4 = 11 cm.",
        "hint": "Obvod : 2 = a + b.",
        "reveal": "Správne je 11: 15 − 4."
      },
      {
        "id": "n5",
        "type": "numberInput",
        "phase": "PRENES",
        "skill": "uhlopriečka",
        "title": "Uhlopriečka obdĺžnika",
        "prompt": "Obdĺžnik má rozmery 6 cm a 8 cm. Aká je dĺžka jeho uhlopriečky (v cm)?",
        "validate": "exact",
        "answer": 10,
        "success": "u² = 36 + 64 = 100, u = 10 cm.",
        "hint": "Pytagorova veta: u² = a² + b². Potom odmocni.",
        "reveal": "Správne je 10: √100."
      },
      {
        "id": "e2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "nájdi chybu",
        "question": "Žiak píše: „Obdĺžnik 6 cm × 8 cm má uhlopriečku u = 6 + 8 = 14 cm.“ Čo je zle?",
        "options": [
          "u = 6 · 8 = 48 cm",
          "Uhlopriečka je prepona: u² = 6² + 8² = 100, teda u = 10 cm.",
          "Správne, uhlopriečka je vždy súčet strán.",
          "Mal počítať u² = 6 + 8 = 14."
        ],
        "answer": 1,
        "correct": "Súčet strán 14 je dlhšia cesta ako priama uhlopriečka. Správne u = √(36 + 64) = 10 cm.",
        "hint": "Aký trojuholník vznikne po nakreslení uhlopriečky? Ktorá strana je prepona?"
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Záhrada v zošite",
        "html": "<p>Odlož mobil. Obdĺžnikový pozemok má rozmery <strong>30 m × 16 m</strong>. Do zošita načrtni obdĺžnik s označenými vrcholmi a vypočítaj:</p><ol><li>obvod pozemku,</li><li>obsah pozemku,</li><li>dĺžku uhlopriečky (Pytagorova veta),</li><li>koľko balení trávneho semena treba na celý pozemok, ak jedno balenie vystačí na 40 m².</li></ol><p>Všetky výsledky zapíš s jednotkou.</p>"
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
            "html": "Obdĺžnik má strany 9 cm a 4 cm. Vypočítaj obvod a obsah.",
            "answer": "o = 2 · (9 + 4) = <strong>26 cm</strong>, S = 9 · 4 = <strong>36 cm²</strong>"
          },
          {
            "level": "zaklad",
            "html": "Obdĺžnik má obvod 30 cm a jednu stranu 4 cm. Vypočítaj druhú stranu a obsah.",
            "answer": "b = 15 − 4 = <strong>11 cm</strong>, S = 4 · 11 = <strong>44 cm²</strong>"
          },
          {
            "level": "zaklad",
            "html": "Obdĺžnik má obsah 84 cm² a jednu stranu 7 cm. Vypočítaj druhú stranu a obvod.",
            "answer": "b = 84 : 7 = <strong>12 cm</strong>, o = 2 · (7 + 12) = <strong>38 cm</strong>"
          },
          {
            "level": "zaklad",
            "html": "Vypočítaj uhlopriečku obdĺžnika 6 cm × 8 cm.",
            "answer": "u² = 36 + 64 = 100, u = <strong>10 cm</strong>"
          },
          {
            "level": "rozsirenie",
            "html": "Izba má rozmery 5 m × 4 m. Koberec stojí 30 € za 1 m². Koľko stojí koberec na celú podlahu a koľko metrov lišty treba okolo izby?",
            "answer": "S = 20 m², cena 20 · 30 = <strong>600 €</strong>. Lišta: o = 2 · 9 = <strong>18 m</strong>."
          },
          {
            "level": "rozsirenie",
            "html": "Pozemok 40 m × 25 m sa oplotí s bránou širokou 4 m. Koľko stojí plot, ak 1 m stojí 12 €?",
            "answer": "o = 2 · 65 = 130 m, plot 130 − 4 = 126 m, cena 126 · 12 = <strong>1 512 €</strong>"
          },
          {
            "level": "rozsirenie",
            "html": "Obdĺžnik má jednu stranu 20 cm a uhlopriečku 29 cm. Vypočítaj druhú stranu, obvod a obsah.",
            "answer": "b² = 841 − 400 = 441, b = 21 cm. o = 2 · (20 + 21) = <strong>82 cm</strong>, S = 20 · 21 = <strong>420 cm²</strong>."
          },
          {
            "level": "bonus",
            "html": "Obdĺžnik s celočíselnými stranami má obsah 36 cm². Nájdi všetky možnosti a ich obvody. Ktorý má najmenší obvod?",
            "answer": "1 × 36 (74 cm), 2 × 18 (40 cm), 3 × 12 (30 cm), 4 × 9 (26 cm), 6 × 6 (24 cm). Najmenší obvod má <strong>štvorec 6 × 6 (24 cm)</strong>."
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
          "viem vypočítať obvod a obsah obdĺžnika",
          "viem dopočítať chýbajúcu stranu",
          "viem vypočítať uhlopriečku obdĺžnika",
          "viem riešiť slovné úlohy a zmenu rozmerov"
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
        "text": "Obdĺžnik má strany 15 cm a 6 cm. Vypočítaj obvod a obsah.",
        "answer": "o = 42 cm, S = 90 cm²"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 3,
        "text": "Obdĺžnik má obvod 34 cm a stranu 9 cm. Vypočítaj druhú stranu a obsah.",
        "answer": "b = 17 − 9 = 8 cm, S = 72 cm²"
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 3,
        "text": "Vypočítaj uhlopriečku obdĺžnika 9 cm × 12 cm.",
        "answer": "u² = 81 + 144 = 225, u = 15 cm"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 4,
        "text": "Stena 6 m × 2,5 m sa natiera farbou, 1 liter stačí na 5 m². Koľko litrov treba?",
        "answer": "S = 15 m², 15 : 5 = 3 litre"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 5,
        "text": "Obdĺžnik má strany v pomere 3 : 5 a obvod 48 cm. Vypočítaj strany a obsah.",
        "answer": "a + b = 24, 8 dielov, diel = 3: 9 cm a 15 cm, S = 135 cm²"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 4,
        "text": "Obe strany obdĺžnika 10 cm × 6 cm skrátime o 2 cm. O koľko cm² sa zmenší obsah?",
        "answer": "8 · 4 = 32, pôvodne 60, zmenší sa o 28 cm²"
      }
    ]
  }
});
