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
      "vypočítať uhlopriečku obdĺžnika z u² = a² + b² a dopočítať stranu z uhlopriečky",
      "riešiť slovné úlohy (plot, podlaha, rám) a posúdiť zmenu rozmerov a rovnaký obvod pri rôznom obsahu"
    ],
    "competencies": [
      "prepájať obrázok, slovnú úlohu a vzorec",
      "rozlíšiť obvod a obsah podľa kontextu",
      "presne zapisovať jednotky",
      "zdôvodniť závislosť obsahu od rozmerov"
    ],
    "enrichment": [
      "obvod 24 cm: obsah je najväčší pre štvorec",
      "úlohy s rámom, pomerom strán a zmenou obidvoch strán",
      "Návrh maturitného štandardu je použitý iba ako obohatenie: reprezentácie, modelovanie, presný matematický jazyk a argumentácia."
    ],
    "flow": [
      "0–5 min: opakovanie vzorcov pre štvorec a Pytagorovej vety",
      "5–15 min: výklad: vzorce, chýbajúca strana, uhlopriečka, zmena rozmerov",
      "15–25 min: platforma: výpočty, výber vzorca, zmena rozmerov, hľadanie chyby",
      "25–40 min: samostatná úloha BEZ MOBILU a zbierka podľa úrovní",
      "40–45 min: rozbor najčastejších chýb podľa živých výsledkov"
    ],
    "diagnostics": [
      "píše 2a + b namiesto 2(a + b)",
      "zamieňa obvod a obsah alebo jednotky cm, cm², m²",
      "píše u = a + b namiesto u = √(a² + b²)",
      "myslí si, že rovnaký obvod znamená rovnaký obsah",
      "pri zväčšení oboch strán k-krát zabudne, že obsah rastie k²-krát"
    ],
    "partialUse": [
      "pri nedostatku času vynechať úlohy s rámom, pomerom strán a bonusové položky",
      "výpočty robiť na papieri, mobil slúži na kontrolu a výber vzorca",
      "pri ŠVVP ponechať viditeľné vzorce a ukážkové príklady"
    ]
  },
  "student": {
    "title": "Obvod a obsah obdĺžnika",
    "subtitle": "Téma 27 · Planimetria",
    "intro": "Naučíš sa vypočítať obvod, obsah a uhlopriečku obdĺžnika, dopočítať chýbajúcu stranu a riešiť slovné úlohy.",
    "estimatedTime": "25–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Z minulej hodiny vieš, že štvorec so stranou a má obvod <strong>o = 4a</strong> a obsah <strong>S = a²</strong> a že jeho uhlopriečka je <strong>u = a√2</strong> (Pytagorova veta). Obvod meriame v cm, m, obsah v cm², m².</p><div class=\"example\"><span class=\"mini-label\">OPAKOVANIE</span><p>Štvorec so stranou 5 cm:</p><p>o = 4 · 5 = <strong>20 cm</strong></p><p>S = 5² = <strong>25 cm²</strong></p></div><p>Dnes prejdeš na <strong>obdĺžnik</strong>: dve rôzne strany a, b. Vzorce budú podobné, štvorec sa v nich ukáže ako špeciálny prípad.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "vypočítať obvod obdĺžnika o = 2(a + b)",
          "vypočítať obsah obdĺžnika S = a · b",
          "dopočítať neznámu stranu z obvodu alebo obsahu",
          "vypočítať uhlopriečku obdĺžnika pomocou Pytagorovej vety",
          "riešiť slovné úlohy a posúdiť zmenu rozmerov"
        ]
      },
      {
        "id": "props",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Obdĺžnik: strany, obvod a obsah",
        "html": "<p>Obdĺžnik ABCD má štyri pravé uhly. Protiľahlé strany sú rovnako dlhé: dve strany majú dĺžku <strong>a</strong> a dve dĺžku <strong>b</strong>. Uhlopriečky sú rovnako dlhé a navzájom sa rozpoľujú.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 420 250\" role=\"img\" aria-label=\"Obdĺžnik 4 × 3 jednotky rozdelený na 12 jednotkových štvorčekov\"><g font-family=\"system-ui\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\" stroke=\"none\"><rect x=\"40\" y=\"40\" width=\"200\" height=\"150\" fill=\"currentColor\" opacity=\".1\"/><line x1=\"90\" y1=\"40\" x2=\"90\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"140\" y1=\"40\" x2=\"140\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"190\" y1=\"40\" x2=\"190\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"40\" y1=\"90\" x2=\"240\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"40\" y1=\"140\" x2=\"240\" y2=\"140\" stroke=\"currentColor\" stroke-width=\"1\" /><polygon points=\"40,40 240,40 240,190 40,190\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" /><text x=\"140\" y=\"214\" font-size=\"14\" >a = 4 jednotky</text><text x=\"266\" y=\"120\" font-size=\"14\" font-style=\"italic\">b = 3</text><text x=\"345\" y=\"90\" font-size=\"14\" >S = 4 · 3 = 12</text><text x=\"345\" y=\"110\" font-size=\"13\" >štvorčekov</text><text x=\"345\" y=\"150\" font-size=\"14\" >o = 2 · (4 + 3)</text><text x=\"345\" y=\"170\" font-size=\"13\" >= 14 jednotiek</text></g></svg></div><p>Obdĺžnik 4 × 3 vyplní <strong>3 riadky po 4 štvorčekoch</strong>, teda 4 · 3 = 12 štvorčekov (obsah). Hranica má dve strany po 4 a dve po 3: <strong>2 · 4 + 2 · 3 = 2 · (4 + 3) = 14</strong> jednotiek (obvod).</p>",
        "remember": "Obvod je dĺžka hranice (cm, m). Obsah je počet štvorčekov (cm², m²)."
      },
      {
        "id": "formulas",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Vzorce o = 2(a + b) a S = a · b",
        "html": "<div class=\"formula\"><span class=\"mini-label\">OBVOD</span>o = 2a + 2b = 2(a + b)<span class=\"formula-note\">Dve strany a a dve strany b.</span></div><div class=\"formula\"><span class=\"mini-label\">OBSAH</span>S = a · b<span class=\"formula-note\">Počet riadkov krát počet štvorčekov v riadku.</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1 · obdĺžnik 8 cm × 5 cm</span><p>o = 2 · (8 + 5) = 2 · 13 = <strong>26 cm</strong></p><p>S = 8 · 5 = <strong>40 cm²</strong></p></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2 · slovná úloha</span><p>Obdĺžniková záhrada má rozmery 12 m a 7 m. Koľko metrov plota potrebuješ na ohradenie a aká je jej plocha?</p><p>o = 2 · (12 + 7) = <strong>38 m</strong></p><p>S = 12 · 7 = <strong>84 m²</strong></p></div><p>Pre štvorec je a = b, takže 2(a + a) = 4a a a · a = a². Vzorce pre štvorec sú teda zvláštny prípad vzorcov pre obdĺžnik.</p><div class=\"warning\"><strong>Pozor:</strong> Zátvorku nezabudni: <strong>2(a + b)</strong>, nie 2a + b. Pre 8 cm a 5 cm je správny obvod 26 cm, nie 21 cm. A nezamieňaj ho s obsahom: 26 cm ≠ 40 cm².</div>",
        "remember": "o = 2(a + b) v cm, S = a · b v cm²."
      },
      {
        "id": "reverse",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Chýbajúca strana",
        "html": "<p>Často poznáš jednu stranu a jednu ďalšiu veličinu. Vzorec obrátime:</p><div class=\"formula\"><span class=\"mini-label\">Z OBVODU</span>b = o : 2 − a<span class=\"formula-note\">ak poznáš obvod a jednu stranu</span></div><div class=\"formula\"><span class=\"mini-label\">Z OBSAHU</span>b = S : a<span class=\"formula-note\">ak poznáš obsah a jednu stranu</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1 · obvod 30 cm, a = 4 cm</span><p>a + b = 30 : 2 = 15</p><p>b = 15 − 4 = <strong>11 cm</strong></p><p>S = 4 · 11 = <strong>44 cm²</strong></p></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2 · obsah 84 cm², a = 7 cm</span><p>b = 84 : 7 = <strong>12 cm</strong></p><p>o = 2 · (7 + 12) = <strong>38 cm</strong></p></div><p>Najprv nájdi druhú stranu, až potom počítaj hľadanú veličinu.</p>",
        "remember": "Obvod : 2 = a + b. Obsah : a = b."
      },
      {
        "id": "diag",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Uhlopriečka obdĺžnika",
        "html": "<p>Uhlopriečka AC je prepona pravouhlého trojuholníka ABC s odvesnami a, b:</p><div class=\"logic-visual\"><svg viewBox=\"0 0 420 250\" role=\"img\" aria-label=\"Obdĺžnik ABCD so stranami a a b a uhlopriečkou u\"><g font-family=\"system-ui\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\" stroke=\"none\"><polygon points=\"60,210 280,210 280,60 60,60\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" /><line x1=\"60\" y1=\"210\" x2=\"280\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 4\"/><polyline points=\"262,210 262,192 280,192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"46\" y=\"226\" font-size=\"16\" >A</text><text x=\"294\" y=\"226\" font-size=\"16\" >B</text><text x=\"294\" y=\"56\" font-size=\"16\" >C</text><text x=\"46\" y=\"56\" font-size=\"16\" >D</text><text x=\"170\" y=\"232\" font-size=\"15\" font-style=\"italic\">a</text><text x=\"302\" y=\"138\" font-size=\"15\" font-style=\"italic\">b</text><text x=\"150\" y=\"130\" font-size=\"15\" font-style=\"italic\">u</text><text x=\"360\" y=\"100\" font-size=\"14\" >o = 2(a + b)</text><text x=\"360\" y=\"130\" font-size=\"14\" >S = a · b</text><text x=\"360\" y=\"160\" font-size=\"14\" >u² = a² + b²</text></g></svg></div><div class=\"formula\"><span class=\"mini-label\">PYTAGOROVA VETA</span>u² = a² + b²<span class=\"formula-note\">u = √(a² + b²)</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1 · 6 cm × 8 cm</span><p>u² = 6² + 8² = 36 + 64 = 100</p><p>u = <strong>10 cm</strong></p></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2 · 5 m × 12 m</span><p>u² = 25 + 144 = 169, u = <strong>13 m</strong></p></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 3 · 4 cm × 5 cm</span><p>u² = 16 + 25 = 41, u = √41 ≈ <strong>6,40 cm</strong></p></div><p>Dvojice strán, pri ktorých vyjde celé číslo (3–4–5, 5–12–13, 8–15–17 a ich násobky), sú výhodné. Uhlopriečka rozdelí obdĺžnik na dva zhodné pravouhlé trojuholníky, každý má obsah <strong>ab : 2</strong>.</p><div class=\"warning\"><strong>Pozor:</strong> Uhlopriečka <strong>nie je</strong> a + b. Je kratšia ako súčet strán. Pri Pytagorovej vete sčítaš <strong>druhé mocniny</strong>, nie strany.</div>",
        "remember": "u² = a² + b². Vždy najprv sčítaj druhé mocniny, až potom odmocni."
      },
      {
        "id": "scale",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Zmena rozmerov a rovnaký obvod",
        "html": "<p>Vyskúšaj, ako sa správa obvod a obsah, keď meníme strany obdĺžnika 6 cm × 4 cm:</p><div class=\"table-wrap\"><table class=\"truth\"><thead><tr><th>rozmery</th><th>obvod</th><th>obsah</th></tr></thead><tbody><tr><td>6 × 4 cm</td><td>20 cm</td><td>24 cm²</td></tr><tr><td>12 × 4 cm (jedna strana ×2)</td><td>32 cm</td><td>48 cm² (×2)</td></tr><tr><td>12 × 8 cm (obe strany ×2)</td><td>40 cm (×2)</td><td>96 cm² (×4)</td></tr></tbody></table></div><p>Pri zdvojnásobení <strong>jednej</strong> strany sa obsah zdvojnásobí. Pri zdvojnásobení <strong>oboch</strong> sa obvod zdvojnásobí, ale obsah sa zväčší 4-krát.</p><p>Obdĺžniky s rovnakým obvodom nemusia mať rovnaký obsah. Obvod 24 cm (a + b = 12 cm):</p><div class=\"table-wrap\"><table class=\"truth\"><thead><tr><th>a</th><th>b</th><th>obsah</th></tr></thead><tbody><tr><td>1 cm</td><td>11 cm</td><td>11 cm²</td></tr><tr><td>4 cm</td><td>8 cm</td><td>32 cm²</td></tr><tr><td>6 cm</td><td>6 cm</td><td>36 cm²</td></tr></tbody></table></div><p>Pri danom obvode má najväčší obsah <strong>štvorec</strong>.</p>",
        "remember": "Obe strany ×k: obvod ×k, obsah ×k². Pri rovnakom obvode má najväčšiu plochu štvorec."
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
        "id": "n1",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "obsah obdĺžnika",
        "title": "Obsah obdĺžnika",
        "prompt": "Obdĺžnik má rozmery 8 cm a 5 cm. Aký je jeho obsah (v cm²)?",
        "validate": "exact",
        "answer": 40,
        "success": "S = 8 · 5 = 40 cm².",
        "hint": "Obsah je súčin strán, nie súčet.",
        "reveal": "Správne je 40: 8 · 5."
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
        "id": "c2",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "vzorec obvodu",
        "question": "Obdĺžnik má strany a a b. Ktorý zápis správne udáva jeho obvod?",
        "options": [
          "o = 2a + b",
          "o = a · b",
          "o = a + b",
          "o = 2 · (a + b)"
        ],
        "answer": 3,
        "correct": "Obvod sčíta všetky štyri strany: a + b + a + b = 2(a + b).",
        "hint": "Na hranici sú dve strany a a dve strany b. Skús dosadiť a = 3, b = 2."
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
        "id": "n4",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "chýbajúca strana",
        "title": "Strana z obsahu",
        "prompt": "Obdĺžnik má obsah 84 cm² a jednu stranu a = 7 cm. Aká je dĺžka strany b (v cm)?",
        "validate": "exact",
        "answer": 12,
        "success": "b = 84 : 7 = 12 cm.",
        "hint": "S = a · b, takže b = S : a.",
        "reveal": "Správne je 12: 84 : 7."
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
        "id": "n6",
        "type": "numberInput",
        "phase": "PRENES",
        "skill": "uhlopriečka",
        "title": "Druhá strana z uhlopriečky",
        "prompt": "Obdĺžnik má jednu stranu 15 cm a uhlopriečku 17 cm. Aká je dĺžka druhej strany (v cm)?",
        "validate": "exact",
        "answer": 8,
        "success": "b² = 17² − 15² = 289 − 225 = 64, b = 8 cm.",
        "hint": "Uhlopriečka je prepona. Odvesna² = prepona² − druhá odvesna².",
        "reveal": "Správne je 8: b² = 289 − 225 = 64."
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "PRENES",
        "skill": "zmena rozmerov",
        "question": "Obdĺžnik 6 cm × 4 cm má obsah 24 cm². Zdvojnásobíme obe jeho strany. Ako sa zmení obsah?",
        "options": [
          "zväčší sa 4-krát, na 96 cm²",
          "zväčší sa 2-krát, na 48 cm²",
          "zostane rovnaký, 24 cm²",
          "zväčší sa o 12 cm², na 36 cm²"
        ],
        "answer": 0,
        "correct": "Nový obdĺžnik 12 × 8 má obsah 96 cm², teda 4-krát viac. Obsah rastie so štvorcom zväčšenia.",
        "hint": "Vypočítaj obsah obdĺžnika 12 cm × 8 cm a porovnaj ho s 24 cm²."
      },
      {
        "id": "n7",
        "type": "numberInput",
        "phase": "PRENES",
        "skill": "zmena rozmerov",
        "title": "Predĺženie strany",
        "prompt": "Obdĺžnik má strany 5 cm a 8 cm. Dlhšiu stranu predĺžime o 3 cm. Aký je obsah nového obdĺžnika (v cm²)?",
        "validate": "exact",
        "answer": 55,
        "success": "Nové strany 5 cm a 11 cm, S = 5 · 11 = 55 cm².",
        "hint": "Najprv nová dĺžka dlhšej strany: 8 + 3.",
        "reveal": "Správne je 55: 5 · 11."
      },
      {
        "id": "c4",
        "type": "choice",
        "phase": "PRENES",
        "skill": "rovnaký obvod",
        "question": "Obdĺžnik A (4 cm × 8 cm) a štvorec B (6 cm × 6 cm) majú rovnaký obvod 24 cm. Ktoré tvrdenie je pravdivé?",
        "options": [
          "majú rovnaký obsah, lebo majú rovnaký obvod",
          "A má väčší obsah, lebo má dlhšiu stranu",
          "obsahy sa bez obrázka porovnať nedajú",
          "B má väčší obsah: 36 cm² oproti 32 cm²"
        ],
        "answer": 3,
        "correct": "S(A) = 4 · 8 = 32 cm², S(B) = 6 · 6 = 36 cm². Rovnaký obvod neznamená rovnaký obsah.",
        "hint": "Vypočítaj obsah každého útvaru zvlášť."
      },
      {
        "id": "e1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "nájdi chybu",
        "question": "Žiak počíta obvod obdĺžnika 7 cm × 3 cm: „o = 2 · 7 + 3 = 17 cm.“ Čo je zle?",
        "options": [
          "Dvojkou mal vynásobiť celý súčet: o = 2 · (7 + 3) = 20 cm.",
          "Obvod je 7 · 3 = 21 cm.",
          "Je to správne, obvod je 2a + b.",
          "Výsledok mal byť v cm², postup je správny."
        ],
        "answer": 0,
        "correct": "Dvojka patrí ku obom stranám: 2 · (7 + 3) = 20 cm. Bez zátvorky by si započítal len jednu stranu 3 cm.",
        "hint": "Koľko strán po 3 cm má obdĺžnik? Koľko ich započítal žiak?"
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
        "html": "<p>Odlož mobil. Obdĺžniková záhrada má rozmery <strong>24 m × 18 m</strong>. Do zošita načrtni obdĺžnik s označenými vrcholmi a vypočítaj:</p><ol><li>obvod záhrady,</li><li>obsah záhrady,</li><li>dĺžku cesty po uhlopriečke (Pytagorova veta),</li><li>koľko metrov plota treba, ak bude v plote brána široká 4 m.</li></ol><p>Všetky výsledky zapíš s jednotkou.</p>"
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
            "html": "Obdĺžnik má strany 12 m a 7 m. Vypočítaj obvod a obsah.",
            "answer": "o = 2 · 19 = <strong>38 m</strong>, S = 12 · 7 = <strong>84 m²</strong>"
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
            "html": "Obrázok 30 cm × 20 cm má rám široký 2 cm. Aký je obsah samotného rámu?",
            "answer": "Vonkajšie rozmery 34 × 24 cm, S = 816 cm². Obrázok 30 · 20 = 600 cm². Rám: 816 − 600 = <strong>216 cm²</strong>."
          },
          {
            "level": "rozsirenie",
            "html": "Obdĺžnik má obvod 26 cm a jedna jeho strana je o 3 cm dlhšia ako druhá. Vypočítaj strany a obsah.",
            "answer": "a + b = 13, b = a + 3 ⇒ 2a + 3 = 13, a = 5, b = 8. S = 5 · 8 = <strong>40 cm²</strong>."
          },
          {
            "level": "rozsirenie",
            "html": "Obdĺžnik má jednu stranu 15 cm a uhlopriečku 17 cm. Vypočítaj druhú stranu, obvod a obsah.",
            "answer": "b² = 289 − 225 = 64, b = 8 cm. o = 2 · (15 + 8) = <strong>46 cm</strong>, S = 15 · 8 = <strong>120 cm²</strong>."
          },
          {
            "level": "bonus",
            "html": "Obdĺžnik s celočíselnými stranami má obsah 36 cm². Nájdi všetky možnosti a ich obvody. Ktorý má najmenší obvod?",
            "answer": "1 × 36 (74 cm), 2 × 18 (40 cm), 3 × 12 (30 cm), 4 × 9 (26 cm), 6 × 6 (24 cm). Najmenší obvod má <strong>štvorec 6 × 6 (24 cm)</strong>."
          },
          {
            "level": "bonus",
            "html": "Strany obdĺžnika 6 cm × 4 cm zväčšíme o polovicu. O koľko cm² sa zväčší obsah?",
            "answer": "Nové strany 9 cm a 6 cm, S = 54 cm². Pôvodne 24 cm². Zväčšenie <strong>30 cm²</strong>."
          },
          {
            "level": "bonus",
            "html": "Uhlopriečka rozdelí obdĺžnik 6 cm × 8 cm na dva zhodné trojuholníky. Aký obsah má jeden z nich?",
            "answer": "S(obdĺžnika) = 48 cm², trojuholník <strong>24 cm²</strong> (polovica)."
          },
          {
            "level": "bonus",
            "html": "Máš 36 m pletiva. Aké rozmery (v celých metroch) má mať obdĺžnikový výbeh, aby mal najväčšiu plochu? Aký bude jeho obsah?",
            "answer": "a + b = 18. Najväčší obsah má štvorec <strong>9 m × 9 m</strong> a plocha <strong>81 m²</strong>. (Napr. 8 × 10 = 80 m² je menej.)"
          }
        ],
        "note": "Riešenia si pozri až po vlastnom pokuse."
      },
      {
        "id": "arg",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "title": "Rovnaký obvod, iný obsah",
        "prompt": "Vlastnými slovami vysvetli, prečo môžu mať dva obdĺžniky rovnaký obvod, ale rôzny obsah. Uveď príklad s číslami.",
        "model": "Vzor: Obvod sčíta len dĺžky strán, takže stačí, aby bol rovnaký súčet a + b. Obsah je súčin a · b a ten závisí od toho, ako sú strany rozdelené. Napr. pre a + b = 12 cm je 4 · 8 = 32 cm², ale 6 · 6 = 36 cm²."
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
