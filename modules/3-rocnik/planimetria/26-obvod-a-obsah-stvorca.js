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
      "vypočítať obvod o = 4a a obsah S = a² štvorca a opačne dopočítať stranu",
      "vypočítať uhlopriečku u = a√2 pomocou Pytagorovej vety a obsah S = u² : 2",
      "používať a prevádzať jednotky cm, cm², m, m²",
      "odhadnúť, ako sa zmení obvod a obsah pri zväčšení strany"
    ],
    "competencies": [
      "prepájať obrázok, slovnú úlohu a vzorec",
      "rozlíšiť obvod (dĺžka) a obsah (plocha) podľa kontextu",
      "presne zapisovať jednotky",
      "modelovať reálne situácie (plot, dlažba, farba)"
    ],
    "enrichment": [
      "dôkaz vzorca S = u² : 2",
      "úlohy so zložením a vystrihnutím útvarov, pomer obsahov",
      "Návrh maturitného štandardu je použitý iba ako obohatenie: reprezentácie, modelovanie, presný matematický jazyk a argumentácia."
    ],
    "flow": [
      "0–5 min: opakovanie Pytagorovej vety a vlastností štvorca",
      "5–15 min: výklad: obvod vs. obsah, vzorce, jednotky, uhlopriečka",
      "15–25 min: platforma: výpočty, výber vzorca, zmena strany, hľadanie chyby",
      "25–40 min: samostatná úloha BEZ MOBILU a zbierka podľa úrovní",
      "40–45 min: rozbor najčastejších chýb podľa živých výsledkov"
    ],
    "diagnostics": [
      "zamieňa obvod a obsah (6² namiesto 4 · 6)",
      "píše zlé jednotky (cm namiesto cm²) alebo zamieňa m² a cm²",
      "počíta a² ako 2a",
      "píše u = 2a namiesto u = a√2",
      "pri opačnej úlohe zabudne najprv nájsť stranu"
    ],
    "partialUse": [
      "pri nedostatku času vynechať uhlopriečku a bonusové položky",
      "výpočty robiť na papieri, mobil slúži na kontrolu výsledkov a výber vzorca",
      "pri ŠVVP ponechať viditeľné vzorce o = 4a a S = a²"
    ]
  },
  "student": {
    "title": "Obvod a obsah štvorca",
    "subtitle": "Téma 26 · Planimetria",
    "intro": "Naučíš sa vypočítať obvod, obsah a uhlopriečku štvorca a správne používať jednotky.",
    "estimatedTime": "25–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Zo ZŠ poznáš <strong>štvorec</strong>, jednotky dĺžky (mm, cm, m) a jednotky obsahu (cm², m²). Z minulej hodiny vieš, že štvorec je zároveň obdĺžnik aj kosoštvorec: má štyri rovnako dlhé strany a štyri pravé uhly. Z 2. ročníka poznáš Pytagorovu vetu.</p><div class=\"example\"><span class=\"mini-label\">OPAKOVANIE</span><p>Pravouhlý trojuholník má odvesny 3 cm a 4 cm.</p><p>c² = 3² + 4² = 9 + 16 = 25, takže c = <strong>5 cm</strong></p></div><p>Dnes vypočítaš <strong>obvod</strong> (koľko meria hranica štvorca) a <strong>obsah</strong> (koľko plochy zaberá) a pomocou Pytagorovej vety aj <strong>uhlopriečku</strong>.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "vypočítať obvod štvorca zo strany: o = 4a",
          "vypočítať obsah štvorca zo strany: S = a²",
          "dopočítať stranu zo známeho obvodu alebo obsahu",
          "vypočítať uhlopriečku štvorca pomocou Pytagorovej vety",
          "správne používať jednotky cm, cm², m a m²"
        ]
      },
      {
        "id": "props",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Štvorec: strana, obvod a obsah",
        "html": "<p>Štvorec ABCD má všetky štyri strany rovnako dlhé. Ich dĺžku označíme <strong>a</strong>. Všetky uhly sú pravé a uhlopriečky sú rovnako dlhé a navzájom kolmé.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 420 250\" role=\"img\" aria-label=\"Štvorec so stranou 3 jednotky rozdelený na 9 jednotkových štvorčekov\"><g font-family=\"system-ui\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\" stroke=\"none\"><rect x=\"60\" y=\"30\" width=\"180\" height=\"180\" fill=\"currentColor\" opacity=\".1\"/><line x1=\"120\" y1=\"30\" x2=\"120\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"180\" y1=\"30\" x2=\"180\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"60\" y1=\"90\" x2=\"240\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"1\" /><line x1=\"60\" y1=\"150\" x2=\"240\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"1\" /><polygon points=\"60,30 240,30 240,210 60,210\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" /><text x=\"150\" y=\"232\" font-size=\"14\" >a = 3 jednotky</text><text x=\"262\" y=\"124\" font-size=\"15\" font-style=\"italic\">a</text><text x=\"46\" y=\"224\" font-size=\"16\" >A</text><text x=\"256\" y=\"224\" font-size=\"16\" >B</text><text x=\"256\" y=\"28\" font-size=\"16\" >C</text><text x=\"46\" y=\"28\" font-size=\"16\" >D</text><text x=\"345\" y=\"90\" font-size=\"14\" >S = 3 · 3 = 9</text><text x=\"345\" y=\"110\" font-size=\"13\" >štvorčekov</text><text x=\"345\" y=\"150\" font-size=\"14\" >o = 4 · 3 = 12</text><text x=\"345\" y=\"170\" font-size=\"13\" >jednotiek</text></g></svg></div><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Obvod (o)</div><p class=\"term-rule\">Dĺžka celej hranice útvaru. Predstav si, že obchádzaš štvorec dookola. Meriame ho v <span class=\"hl\">dĺžkových</span> jednotkách (mm, cm, m).</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Obsah (S)</div><p class=\"term-rule\">Veľkosť plochy vo vnútri. Zodpovedá počtu jednotkových štvorčekov, ktoré štvorec vyplnia. Meriame ho v <span class=\"hl\">štvorcových</span> jednotkách (mm², cm², m²).</p></div></div><p>Na obrázku má štvorec stranu 3 jednotky. Vyplnilo ho <strong>3 · 3 = 9</strong> štvorčekov (obsah) a hranica má <strong>4 · 3 = 12</strong> jednotiek (obvod).</p>",
        "remember": "Obvod meria dĺžku hranice (cm, m). Obsah meria plochu (cm², m²)."
      },
      {
        "id": "formulas",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Vzorce o = 4a a S = a²",
        "html": "<p>Štvorec má štyri rovnaké strany, preto obvod je štvornásobok jednej strany. Plocha sa skladá z a riadkov po a štvorčekoch, teda z a · a štvorčekov:</p><div class=\"formula\"><span class=\"mini-label\">OBVOD</span>o = 4a<span class=\"formula-note\">Obvod: štyrikrát dĺžka strany.</span></div><div class=\"formula\"><span class=\"mini-label\">OBSAH</span>S = a · a = a²<span class=\"formula-note\">Obsah: strana na druhú.</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1 · štvorec so stranou 7 cm</span><p>o = 4a = 4 · 7 = <strong>28 cm</strong></p><p>S = a² = 7² = <strong>49 cm²</strong></p></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2 · desatinné číslo</span><p>Štvorcový koberec má stranu a = 1,5 m.</p><p>o = 4 · 1,5 = <strong>6 m</strong></p><p>S = 1,5² = 1,5 · 1,5 = <strong>2,25 m²</strong></p></div><div class=\"warning\"><strong>Pozor:</strong> Nezamieňaj <strong>a²</strong> a <strong>2a</strong>. Pre a = 7 je a² = 49, ale 2a = 14. A nezamieňaj obvod s obsahom: obvod 28 cm a obsah 49 cm² sú dve rôzne veličiny s rôznymi jednotkami.</div>",
        "remember": "o = 4a (jednotka dĺžky), S = a² (jednotka dĺžky na druhú)."
      },
      {
        "id": "units",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Jednotky obsahu a ich prevod",
        "html": "<p>Štvorcový meter (1 m²) je plocha štvorca so stranou 1 m. Keďže 1 m = 100 cm, plocha je 100 cm · 100 cm:</p><div class=\"formula\"><span class=\"mini-label\">PREVOD</span>1 m² = 10 000 cm²<span class=\"formula-note\">Prevodové číslo sa umocňuje: 100² = 10 000.</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD · dlaždica 30 cm</span><p>a = 30 cm</p><p>S = 30² = <strong>900 cm²</strong></p><p>V metroch: a = 0,3 m, S = 0,3² = <strong>0,09 m²</strong></p><p>Kontrola: 900 cm² : 10 000 = 0,09 m² ✔</p></div><div class=\"warning\"><strong>Pozor:</strong> 1 m² <strong>nie je</strong> 100 cm². Pred počítaním vždy prepíš všetky údaje do jednej jednotky. Obvod aj obsah sa potom počítajú v tej istej jednotke.</div>",
        "remember": "1 m² = 10 000 cm². Stranu prevedieme na jednu jednotku ešte pred dosadením do vzorca."
      },
      {
        "id": "reverse",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Opačná úloha: zo známej veličiny nájdi stranu",
        "html": "<p>Ak poznáme obvod alebo obsah, vzorec obrátime:</p><div class=\"formula\"><span class=\"mini-label\">STRANA Z OBVODU</span>a = o : 4<span class=\"formula-note\">zo známeho obvodu</span></div><div class=\"formula\"><span class=\"mini-label\">STRANA Z OBSAHU</span>a = √S<span class=\"formula-note\">zo známeho obsahu (číslo, ktoré na druhú dá S)</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1 · známy obvod</span><p>Štvorec má obvod 36 cm.</p><p>a = 36 : 4 = <strong>9 cm</strong></p><p>S = 9² = <strong>81 cm²</strong></p></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2 · známy obsah</span><p>Štvorec má obsah 64 cm².</p><p>a² = 64, a = 8 cm (lebo 8² = 64)</p><p>o = 4 · 8 = <strong>32 cm</strong></p></div><p>Postup vždy rovnaký: <strong>najprv nájdi stranu a</strong>, potom dopočítaj hľadanú veličinu.</p>",
        "remember": "Pri opačnej úlohe najprv nájdi stranu a, až potom počítaj druhú veličinu."
      },
      {
        "id": "diag",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Uhlopriečka štvorca",
        "html": "<p>Uhlopriečka AC rozdelí štvorec na dva pravouhlé trojuholníky s odvesnami a, a. Uhlopriečka u je ich <strong>prepona</strong>, takže podľa Pytagorovej vety:</p><div class=\"logic-visual\"><svg viewBox=\"0 0 420 250\" role=\"img\" aria-label=\"Štvorec ABCD so stranou a a uhlopriečkou u, ktorá je preponou pravouhlého trojuholníka ABC\"><g font-family=\"system-ui\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\" stroke=\"none\"><polygon points=\"90,210 250,210 250,50 90,50\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" /><line x1=\"90\" y1=\"210\" x2=\"250\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 4\"/><polyline points=\"232,210 232,192 250,192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"76\" y=\"226\" font-size=\"16\" >A</text><text x=\"264\" y=\"226\" font-size=\"16\" >B</text><text x=\"264\" y=\"48\" font-size=\"16\" >C</text><text x=\"76\" y=\"48\" font-size=\"16\" >D</text><text x=\"170\" y=\"232\" font-size=\"15\" font-style=\"italic\">a</text><text x=\"272\" y=\"134\" font-size=\"15\" font-style=\"italic\">a</text><text x=\"150\" y=\"118\" font-size=\"15\" font-style=\"italic\">u</text><text x=\"350\" y=\"100\" font-size=\"14\" >u² = a² + a²</text><text x=\"350\" y=\"128\" font-size=\"14\" >u² = 2a²</text><text x=\"350\" y=\"156\" font-size=\"14\" >u = a√2</text></g></svg></div><div class=\"formula\"><span class=\"mini-label\">UHLOPRIEČKA</span>u² = a² + a² = 2a² &nbsp;⇒&nbsp; u = a√2<span class=\"formula-note\">Uhlopriečka štvorca je √2 ≈ 1,41-krát dlhšia ako jeho strana.</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD · a = 5 cm</span><p>u² = 5² + 5² = 25 + 25 = 50</p><p>u = √50 = 5√2 ≈ <strong>7,07 cm</strong></p></div><p>Z rovnosti u² = 2a² dostaneme aj <strong>S = a² = u² : 2</strong>. Ak poznáš uhlopriečku, obsah vieš vypočítať bez toho, aby si hľadal stranu.</p><div class=\"warning\"><strong>Pozor:</strong> Uhlopriečka štvorca <strong>nie je</strong> a + a = 2a. Je kratšia ako súčet dvoch strán (najkratšia cesta medzi dvoma bodmi je priamka).</div>",
        "remember": "u = a√2, teda u² = 2a² a S = u² : 2."
      },
      {
        "id": "scale",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Čo sa stane, keď zväčšíme stranu?",
        "html": "<p>Zdvojnásobme stranu štvorca z 3 cm na 6 cm:</p><div class=\"table-wrap\"><table class=\"truth\"><thead><tr><th>strana a</th><th>obvod o = 4a</th><th>obsah S = a²</th></tr></thead><tbody><tr><td>3 cm</td><td>12 cm</td><td>9 cm²</td></tr><tr><td>6 cm</td><td>24 cm</td><td>36 cm²</td></tr></tbody></table></div><p>Obvod sa zväčšil <strong>2-krát</strong>, obsah až <strong>4-krát</strong> (2² = 4). Keď strana narastie k-krát, obvod narastie k-krát a obsah k²-krát.</p>"
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
        "id": "n1",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "obsah",
        "title": "Obsah štvorca",
        "prompt": "Štvorec má stranu 7 cm. Aký je jeho obsah (v cm²)?",
        "validate": "exact",
        "answer": 49,
        "success": "S = 7² = 49 cm².",
        "hint": "Obsah je strana na druhú, nie strana krát dva.",
        "reveal": "Správne je 49: 7 · 7."
      },
      {
        "id": "n2",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "obvod",
        "title": "Strana z obvodu",
        "prompt": "Štvorec má obvod 36 cm. Aká je dĺžka jeho strany (v cm)?",
        "validate": "exact",
        "answer": 9,
        "success": "a = 36 : 4 = 9 cm.",
        "hint": "Obvod je 4-krát strana. Strana je teda štvrtina obvodu.",
        "reveal": "Správne je 9: 36 : 4."
      },
      {
        "id": "c2",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "jednotky",
        "question": "Štvorcová izba má stranu 4 m. Ktorý zápis správne udáva veľkosť jej podlahy?",
        "options": [
          "16 m",
          "8 m²",
          "16 m³",
          "16 m²"
        ],
        "answer": 3,
        "correct": "Podlaha je plocha: 4 · 4 = 16 m². Plochu meriame v štvorcových jednotkách.",
        "hint": "Ide o plochu, takže jednotka musí byť štvorcová. Aké je 4 · 4?"
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
        "id": "s1",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "obvod a obsah",
        "title": "Obvod alebo obsah?",
        "question": "Rozhodni, či v situácii počítame obvod, alebo obsah štvorcového útvaru.",
        "labels": [
          "obvod",
          "obsah"
        ],
        "items": [
          {
            "text": "dĺžka plota okolo štvorcového ihriska",
            "answer": true,
            "why": "Plot vedie po hranici, teda o = 4a."
          },
          {
            "text": "počet dlaždíc na štvorcovú terasu",
            "answer": false,
            "why": "Dlaždicami pokrývame plochu: S = a²."
          },
          {
            "text": "dĺžka lišty okolo štvorcovej izby",
            "answer": true,
            "why": "Lišta ide po okraji, teda obvod."
          },
          {
            "text": "množstvo trávnika na štvorcové pole",
            "answer": false,
            "why": "Trávnik pokrýva plochu."
          },
          {
            "text": "dĺžka cesty pri jednom obehnutí štvorcového námestia",
            "answer": true,
            "why": "Obchádzaš hranicu: obvod."
          },
          {
            "text": "množstvo farby na štvorcovú stenu",
            "answer": false,
            "why": "Farbou natrieš plochu."
          }
        ]
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "PRENES",
        "skill": "zmena strany",
        "question": "Strana štvorca sa zdvojnásobí. Ako sa zmení jeho obsah?",
        "options": [
          "zväčší sa 2-krát",
          "zostane rovnaký",
          "zväčší sa 4-krát",
          "zväčší sa 8-krát"
        ],
        "answer": 2,
        "correct": "Nová strana 2a dá obsah (2a)² = 4a². Obsah rastie so štvorcom zväčšenia.",
        "hint": "Vyskúšaj čísla: strana 3 cm má obsah 9 cm². Aký obsah má strana 6 cm?"
      },
      {
        "id": "n4",
        "type": "numberInput",
        "phase": "PRENES",
        "skill": "zmena strany",
        "title": "Prírastok obsahu",
        "prompt": "Strana štvorca 3 cm sa zdvojnásobí na 6 cm. O koľko cm² sa zväčší jeho obsah?",
        "validate": "exact",
        "answer": 27,
        "success": "Pôvodný obsah 9 cm², nový 36 cm². Rozdiel 36 − 9 = 27 cm².",
        "hint": "Vypočítaj obe plochy samostatne a odčítaj.",
        "reveal": "Správne je 27: 36 − 9."
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
        "id": "c4",
        "type": "choice",
        "phase": "PRENES",
        "skill": "uhlopriečka",
        "question": "Štvorec má stranu a a uhlopriečku u. Ktoré tvrdenie o uhlopriečke je správne?",
        "options": [
          "u² = 2a²",
          "u = 2a",
          "u² = a²",
          "u = a²"
        ],
        "answer": 0,
        "correct": "Uhlopriečka je prepona pravouhlého trojuholníka s odvesnami a, a: u² = a² + a² = 2a².",
        "hint": "Nakresli trojuholník ABC. Ktorá strana je prepona? Napíš Pytagorovu vetu."
      },
      {
        "id": "n7",
        "type": "numberInput",
        "phase": "PRENES",
        "skill": "obsah z uhlopriečky",
        "title": "Obsah z uhlopriečky",
        "prompt": "Štvorec má uhlopriečku u, pre ktorú platí u² = 72 cm². Aký je jeho obsah (v cm²)?",
        "validate": "exact",
        "answer": 36,
        "success": "Platí u² = 2a², teda S = a² = u² : 2 = 36 cm².",
        "hint": "Z u² = 2a² vyjadri a².",
        "reveal": "Správne je 36: 72 : 2."
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
        "id": "e2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "nájdi chybu",
        "question": "Žiak píše: „Štvorec so stranou 5 cm má uhlopriečku u = 5 + 5 = 10 cm.“ Čo je zle?",
        "options": [
          "Uhlopriečka je prepona s odvesnami 5 cm a 5 cm, platí u² = 50, takže u ≈ 7,07 cm.",
          "Uhlopriečka sa rovná obvodu, teda 20 cm.",
          "Uhlopriečka sa rovná obsahu, teda 25 cm.",
          "Je to správne, uhlopriečka je súčet dvoch strán."
        ],
        "answer": 0,
        "correct": "Dve strany dokopy sú dlhšia cesta ako priama uhlopriečka. Správne u = 5√2 ≈ 7,07 cm.",
        "hint": "Aký trojuholník vznikne po nakreslení uhlopriečky? Ktorá strana je prepona?"
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
            "html": "Štvorcový koberec má stranu 1,5 m. Vypočítaj obvod a obsah.",
            "answer": "o = 4 · 1,5 = <strong>6 m</strong>, S = 1,5² = <strong>2,25 m²</strong>"
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
            "html": "Strana štvorca 8 cm sa zväčší o polovicu. O koľko cm² sa zväčší obsah?",
            "answer": "Nová strana 8 · 1,5 = 12 cm. S: 64 cm² → 144 cm². Zväčšenie 144 − 64 = <strong>80 cm²</strong>."
          },
          {
            "level": "rozsirenie",
            "html": "Vypočítaj uhlopriečku štvorca so stranou 6 cm (presne aj približne na stotiny).",
            "answer": "u² = 36 + 36 = 72, u = 6√2 ≈ <strong>8,49 cm</strong>"
          },
          {
            "level": "rozsirenie",
            "html": "Zo štvorca so stranou 10 cm vystrihneme v rohu štvorec 4 cm × 4 cm (obrázok). Vypočítaj obsah a obvod zvyšnej časti.<div class=\"logic-visual\"><svg viewBox=\"0 0 200 150\" role=\"img\" aria-label=\"Štvorec so stranou 10 cm, z ktorého je v rohu vystrihnutý štvorec 4 cm × 4 cm\"><g font-family=\"system-ui\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\" stroke=\"none\"><polygon points=\"30,20 90,20 90,60 130,60 130,120 30,120\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" /><rect x=\"90\" y=\"20\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/><text x=\"80\" y=\"140\" font-size=\"13\" >10 cm</text><text x=\"14\" y=\"74\" font-size=\"13\" transform=\"rotate(-90 14 74)\">10 cm</text><text x=\"110\" y=\"44\" font-size=\"12\" >4 cm</text></g></svg></div>",
            "answer": "S = 10² − 4² = 100 − 16 = <strong>84 cm²</strong>. Obvod: dve strany 4 cm, ktoré pribudli, nahradili dve strany 4 cm, ktoré ubudli, takže obvod je rovnaký ako pôvodný: <strong>40 cm</strong>."
          },
          {
            "level": "bonus",
            "html": "Štvorec má obsah 50 cm². Aká je jeho uhlopriečka?",
            "answer": "u² = 2a² = 2 · 50 = 100, u = <strong>10 cm</strong>"
          },
          {
            "level": "bonus",
            "html": "Obvod jedného štvorca je 24 cm a druhého 40 cm. O koľko cm² je obsah druhého väčší?",
            "answer": "a₁ = 6, S₁ = 36 cm². a₂ = 10, S₂ = 100 cm². Rozdiel <strong>64 cm²</strong>."
          },
          {
            "level": "bonus",
            "html": "Dokáž, že obsah štvorca môžeš vypočítať zo vzorca S = u² : 2.",
            "answer": "Z Pytagorovej vety u² = a² + a² = 2a². Delením dvoma dostaneme a² = u² : 2, a a² je obsah."
          },
          {
            "level": "bonus",
            "html": "Uhlopriečky štvorca ABCD so stranou 4 cm sa pretínajú v bode S a rozdelia štvorec na štyri zhodné trojuholníky. Aký je obsah jedného z nich?",
            "answer": "S(ABCD) = 4² = 16 cm², 16 : 4 = <strong>4 cm²</strong>."
          }
        ],
        "note": "Riešenia si pozri až po vlastnom pokuse."
      },
      {
        "id": "arg",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "title": "Prečo cm² a nie cm?",
        "prompt": "Vlastnými slovami vysvetli, prečo sa obsah štvorca meria v cm² a obvod v cm, a prečo pri zdvojnásobení strany obsah štvornásobne narastie.",
        "model": "Vzor: Obvod je dĺžka čiary, preto cm. Obsah je počet štvorčekov 1 cm × 1 cm, ktoré plochu vyplnia, preto cm². Keď zdvojnásobím stranu, vo štvorci pribudne dvakrát viac riadkov a v každom dvakrát viac štvorčekov, takže 2 · 2 = 4-krát viac."
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
