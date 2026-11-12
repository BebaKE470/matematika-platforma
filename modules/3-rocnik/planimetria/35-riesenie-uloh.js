MathPlatform.registerModule({
  "id": "3-u02-h035",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 35 · Riešenie úloh",
    "prerequisites": [
      "základná planimetria zo ZŠ",
      "Pytagorova veta a goniometria trojuholníka z 2. ročníka",
      "logika, množiny a algebraické úpravy z 1. ročníka",
      "goniometria z predchádzajúceho tematického celku 3. ročníka",
      "učivo hodín 22–34"
    ],
    "planContent": [
      "Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka."
    ],
    "planPerformance": [
      "Poznať a vedieť opísať vlastnosti základných rovinných útvarov.",
      "Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov."
    ],
    "goals": [
      "rozpoznať útvar a zvoliť vhodný vzorec pre obvod a obsah",
      "dopočítať chýbajúcu stranu alebo výšku Pytagorovou vetou, sínusom alebo z vlastností útvaru",
      "riešiť zložené útvary a pravidelné mnohouholníky",
      "riešiť slovné úlohy s jednotkami (m² a cm², počet dlaždíc, plot, náter)",
      "nájsť a opraviť typické chyby"
    ],
    "competencies": [
      "modelovanie reálnej situácie geometrickým útvarom",
      "výber a zdôvodnenie postupu",
      "presný zápis s jednotkami",
      "kritické čítanie cudzieho riešenia"
    ],
    "enrichment": [
      "obsah trojuholníka a rovnobežníka cez sínus uhla (S = ½ab sin γ, S = ab sin α), vrátane tupého uhla 150°",
      "kombinované úlohy: obvod a obsah pri zadaní uhlopriečok",
      "Maturitný štandard je iba obohatenie: modelovanie (pozemok, podlaha, náter) a argumentácia."
    ],
    "flow": [
      "0–5 min: tabuľka vzorcov a postup pri úlohe (náčrt, chýbajúci údaj, vzorec, jednotka)",
      "5–15 min: vzorové úlohy A (lichobežník), B (kosoštvorec), C (trojuholník so sínusom) spoločne",
      "15–28 min: platforma: voľba vzorca, Pytagorova veta, slovné úlohy, hľadanie chýb",
      "28–40 min: BEZ MOBILU a zbierka podľa úrovne",
      "40–45 min: rozbor najčastejších chýb podľa živých výsledkov"
    ],
    "diagnostics": [
      "zabúda deliť dvomi pri trojuholníku a lichobežníku",
      "strana kosoštvorca = priemer uhlopriečok",
      "zmiešané jednotky (m² a cm²) pri počte dlaždíc",
      "výšku nedopočíta, ale použije šikmú stranu",
      "rozmanité chyby pri sínuse (zámena s kosínusom)"
    ],
    "partialUse": [
      "pri nedostatku času vynechať úlohy so sínusom a bonusové položky",
      "mobil nenahrádza ručné počítanie; výpočty a náčrty sa píšu do zošita",
      "pre žiakov so ŠVVP: tabuľka vzorcov a hotové náčrty z príkladov A a B"
    ]
  },
  "student": {
    "title": "Riešenie úloh",
    "subtitle": "Obvod a obsah mnohouholníkov a zložených útvarov",
    "intro": "Zmiešané úlohy: najprv rozpoznáš útvar, dopočítaš chýbajúci údaj a potom vypočítaš obvod a obsah. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "25–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Nástroje, ktoré dnes použijeme",
        "html": "<p>Za posledné hodiny sme sa naučili počítať obvod a obsah trojuholníka, štvoruholníkov a mnohouholníkov. Dnes ich budeš miešať — najprv treba <strong>rozpoznať útvar</strong>, potom zvoliť vzorec.</p><div class=\"table-wrap\"><table class=\"truth\"><thead><tr><th>Útvar</th><th>Obsah</th></tr></thead><tbody>\n<tr><td>obdĺžnik, štvorec</td><td>a · b, a²</td></tr><tr><td>trojuholník</td><td>a · v : 2; aj ½ · a · b · sin γ</td></tr><tr><td>lichobežník</td><td>(a + c) · v : 2</td></tr><tr><td>rovnobežník</td><td>a · v; aj a · b · sin α</td></tr><tr><td>kosoštvorec</td><td>a · v; aj e · f : 2</td></tr><tr><td>pravidelný šesťuholník</td><td>3a²√3 : 2</td></tr></tbody></table></div>\n<p>K tomu <strong>Pytagorova veta</strong> na dopočítanie chýbajúcej strany a výšky a súčet vnútorných uhlov (n − 2) · 180°.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "zvoliť vhodný vzorec a doplniť chýbajúci údaj (Pytagorova veta, sínus)",
          "riešiť zložené útvary a mnohouholníky",
          "zostaviť a vyriešiť slovnú úlohu a skontrolovať jednotky",
          "nájsť a opraviť typické chyby"
        ]
      },
      {
        "id": "plan",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Postup pri úlohe z planimetrie",
        "html": "<ol class=\"steps\"><li><strong>Náčrt:</strong> nakresli útvar a vyznač dané aj hľadané údaje.</li><li><strong>Rozpoznaj útvar:</strong> trojuholník, štvoruholník, zložený útvar? Pri zloženom ho rozdeľ alebo doplň.</li><li><strong>Čo chýba?</strong> Ak nie je výška alebo strana, dopočítaj ju Pytagorovou vetou, sínusom alebo z vlastností útvaru (napr. uhlopriečky kosoštvorca sa pretínajú v pravom uhle).</li><li><strong>Vzorec a výpočet:</strong> dosaď a počítaj, medzivýsledky píš s jednotkami.</li><li><strong>Kontrola:</strong> má výsledok zmysel (je obsah menší ako obsah okolitého obdĺžnika)? Je to dĺžka, alebo plocha?</li><li><strong>Odpoveď:</strong> celou vetou s jednotkou.</li></ol>\n<div class=\"warning\"><strong>Pozor:</strong> Obvod je dĺžka (cm, m), obsah plocha (cm², m²). Keď v zadaní je iná jednotka než v otázke (cm a m²), najprv ich zjednoť.</div>",
        "remember": "Náčrt, chýbajúci údaj, vzorec, jednotka, odpoveď. Najviac chýb vzniká pri dopočítaní a pri jednotkách."
      },
      {
        "id": "examples",
        "type": "explain",
        "phase": "PRÍKLAD",
        "title": "Tri vzorové úlohy",
        "html": "<h3>A: Pozemok tvaru pravouhlého lichobežníka</h3><div class=\"logic-visual\"><svg viewBox=\"0 0 760 300\" role=\"img\" aria-label=\"Pravouhlý lichobežník ABCD: dolná základňa 14 m, horná základňa 8 m, kolmé rameno 8 m. Šikmé rameno BC má neznámu dĺžku c. Prerušovaná čiara z bodu C je výška; tvorí pravouhlý trojuholník s odvesnami 6 m a 8 m.\"><g font-family=\"system-ui\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\"><polygon points=\"230,230 510,230 390,70 230,70\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><line x1=\"390\" y1=\"70\" x2=\"390\" y2=\"230\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><path d=\"M390 218 L402 218 L402 230\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M230 218 L242 218 L242 230\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"310\" y=\"270\">14 m</text><text x=\"310\" y=\"55\">8 m</text><text x=\"206\" y=\"155\" text-anchor=\"end\">8 m</text><text x=\"468\" y=\"140\" text-anchor=\"start\">c = ?</text><text x=\"455\" y=\"215\" font-size=\"16\">6 m</text><text x=\"404\" y=\"155\" text-anchor=\"start\" font-size=\"16\">8 m</text></g></svg></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD A</span><p>Pozemok má základne 14 m a 8 m a kolmé rameno 8 m. Aký je obsah a koľko metrov plota treba?</p><p>S = <span class=\"frac\"><span class=\"frac-num\">(14 + 8) · 8</span><span class=\"frac-den\">2</span></span> = <strong>88 m²</strong></p><p>Šikmé rameno: z bodu C spustíme výšku. Vznikne pravouhlý trojuholník s odvesnami 14 − 8 = 6 m a 8 m: c = √(6² + 8²) = 10 m.</p><p>o = 14 + 8 + 8 + 10 = <strong>40 m</strong></p></div>\n<h3>B: Kosoštvorec z uhlopriečok</h3><div class=\"logic-visual\"><svg viewBox=\"0 0 760 300\" role=\"img\" aria-label=\"Kosoštvorec s uhlopriečkami e = 10 cm a f = 24 cm, ktoré sa pretínajú v pravom uhle v strede. Štyri pravouhlé trojuholníky majú odvesny 5 cm a 12 cm a preponu a, čo je strana kosoštvorca.\"><g font-family=\"system-ui\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\"><polygon points=\"330,150 380,30 430,150 380,270\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><line x1=\"330\" y1=\"150\" x2=\"430\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><line x1=\"380\" y1=\"30\" x2=\"380\" y2=\"270\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><path d=\"M380 138 L392 138 L392 150\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"455\" y=\"155\" text-anchor=\"start\">e = 10 cm</text><text x=\"398\" y=\"100\" text-anchor=\"start\" font-size=\"16\">12 cm</text><text x=\"355\" y=\"172\" font-size=\"16\">5 cm</text><text x=\"395\" y=\"25\" text-anchor=\"start\">f = 24 cm</text><text x=\"300\" y=\"85\" text-anchor=\"end\">a = ?</text></g></svg></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD B</span><p>Uhlopriečky kosoštvorca sú 10 cm a 24 cm. Uhlopriečky sa pretínajú v pravom uhle a rozpoľujú sa, preto strana je prepona trojuholníka s odvesnami 5 cm a 12 cm.</p><p>a = √(5² + 12²) = 13 cm, o = 4 · 13 = <strong>52 cm</strong></p><p>S = <span class=\"frac\"><span class=\"frac-num\">10 · 24</span><span class=\"frac-den\">2</span></span> = <strong>120 cm²</strong></p></div>\n<h3>C: Trojuholník a uhol</h3><div class=\"logic-visual\"><svg viewBox=\"0 0 760 300\" role=\"img\" aria-label=\"Trojuholník ABC so stranou BC = 12 cm, stranou BA = 9 cm a uhlom 30° pri vrchole B. Výška z bodu A na stranu BC je v = 9 · sin 30° = 4,5 cm.\"><g font-family=\"system-ui\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\"><polygon points=\"240,240 504,240 411.5,141\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><line x1=\"411.5\" y1=\"141\" x2=\"411.5\" y2=\"240\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><path d=\"M411.5 228 L423.5 228 L423.5 240\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"372\" y=\"268\">12 cm</text><text x=\"310\" y=\"170\" text-anchor=\"end\">9 cm</text><text x=\"300\" y=\"232\" text-anchor=\"start\" font-size=\"17\">30°</text><text x=\"424\" y=\"200\" text-anchor=\"start\">v</text></g></svg></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD C</span><p>Trojuholník má strany 12 cm a 9 cm a medzi nimi uhol 30°. Výška na stranu 12 cm je v = 9 · sin 30° = 4,5 cm.</p><p>S = <span class=\"frac\"><span class=\"frac-num\">12 · 4,5</span><span class=\"frac-den\">2</span></span> = <strong>27 cm²</strong> (to isté dáva ½ · 12 · 9 · sin 30° = 27 cm²).</p></div>\n<div class=\"warning\"><strong>Pozor:</strong> Pri kosoštvorci nie je strana (e + f) : 2. Je to prepona pravouhlého trojuholníka s odvesnami e/2 a f/2.</div>",
        "remember": "Chýbajúcu stranu alebo výšku najčastejšie dostaneš z pravouhlého trojuholníka — hľadaj ho v útvare."
      },
      {
        "id": "units",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Slovné úlohy: jednotky a počty",
        "html": "<p>V slovných úlohách sa obsah často používa na <strong>počet dlaždíc, množstvo farby alebo cenu</strong>. Postup: obsah plochy podeľ obsahom jednej dlaždice (v rovnakých jednotkách).</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD · dlaždice</span><p>Podlaha izby 5 m × 4 m sa vykladá dlaždicami 50 cm × 50 cm. Koľko dlaždíc treba?</p><p>Plocha izby: 5 · 4 = 20 m². Dlaždica: 0,5 m · 0,5 m = 0,25 m² (50 cm = 0,5 m).</p><p>Počet: 20 : 0,25 = <strong>80 dlaždíc</strong>.</p></div>\n<div class=\"compare\"><div class=\"bad\"><span class=\"mini-label\">ZLE</span><p>20 m² : 2500 cm² — zmiešané jednotky</p></div><div class=\"good\"><span class=\"mini-label\">SPRÁVNE</span><p>20 m² : 0,25 m² = 80<br>alebo 200 000 cm² : 2500 cm² = 80</p></div></div>\n<div class=\"warning\"><strong>Pozor:</strong> 1 m² = 10 000 cm², nie 100 cm². Prevodové číslo sa umocňuje.</div>",
        "remember": "Pri slovných úlohách najprv zjednoť jednotky, potom deli alebo násob."
      },
      {
        "id": "match",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "vzorce",
        "title": "Ktorý vzorec patrí ku ktorému útvaru?",
        "labels": [
          "a · v",
          "a · v : 2",
          "(a + c) · v : 2",
          "e · f : 2",
          "a · b"
        ],
        "items": [
          {
            "text": "rovnobežník so stranou a a výškou v na túto stranu",
            "answer": "a · v"
          },
          {
            "text": "trojuholník so stranou a a výškou v na túto stranu",
            "answer": "a · v : 2"
          },
          {
            "text": "lichobežník so základňami a, c a výškou v",
            "answer": "(a + c) · v : 2"
          },
          {
            "text": "kosoštvorec s uhlopriečkami e a f",
            "answer": "e · f : 2"
          },
          {
            "text": "obdĺžnik so stranami a, b",
            "answer": "a · b"
          }
        ]
      },
      {
        "id": "sort",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "dopočítanie údaja",
        "title": "Treba Pytagorovu vetu?",
        "question": "Rozhodni, či na výpočet žiadaného údaja treba najprv dopočítať stranu Pytagorovou vetou.",
        "labels": [
          "Treba Pytagorovu vetu",
          "Netreba, údaje stačia"
        ],
        "items": [
          {
            "text": "Obdĺžnik má strany 6 cm a 8 cm. Obsah?",
            "answer": false,
            "why": "Obsah je a · b, obe strany poznáme."
          },
          {
            "text": "Obdĺžnik má stranu 12 cm a uhlopriečku 13 cm. Obsah?",
            "answer": true,
            "why": "Druhú stranu dostaneš z pravouhlého trojuholníka: √(13² − 12²) = 5 cm."
          },
          {
            "text": "Kosoštvorec má uhlopriečky 6 cm a 8 cm. Obvod?",
            "answer": true,
            "why": "Stranu treba zo trojuholníka s odvesnami 3 cm a 4 cm: a = 5 cm."
          },
          {
            "text": "Kosoštvorec má uhlopriečky 6 cm a 8 cm. Obsah?",
            "answer": false,
            "why": "Stačí e · f : 2 = 24 cm²."
          },
          {
            "text": "Rovnoramenný trojuholník má základňu 16 cm a rameno 10 cm. Obsah?",
            "answer": true,
            "why": "Výšku dostaneš z trojuholníka s odvesnami 8 cm a v: v = 6 cm."
          },
          {
            "text": "Lichobežník má základne 9 cm a 5 cm a výšku 4 cm. Obsah?",
            "answer": false,
            "why": "Všetky údaje vo vzorci sú dané."
          }
        ]
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "lichobežník",
        "question": "Lichobežník má základne 9 cm a 5 cm a výšku 4 cm. Aký je jeho obsah?",
        "options": [
          "28 cm²",
          "56 cm²",
          "20 cm²",
          "18 cm²"
        ],
        "answer": 0,
        "correct": "Správne: (9 + 5) · 4 : 2 = 28 cm². Súčet základní sa násobí výškou a delí dvomi.",
        "hint": "Súčet základní vynásob výškou a výsledok ešte vydeľ dvomi."
      },
      {
        "id": "c2",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Pytagorova veta",
        "question": "Pravouhlý lichobežník má základne 14 m a 8 m a kolmé rameno 8 m. Aká dlhá je jeho šikmé rameno?",
        "options": [
          "10 m",
          "6 m",
          "12 m",
          "14 m"
        ],
        "answer": 0,
        "correct": "Správne: rozdiel základní 14 − 8 = 6 m a výška 8 m sú odvesny, c = √(36 + 64) = 10 m.",
        "hint": "Z konca kratšej základne spusti výšku. Vznikne pravouhlý trojuholník — aké odvesny má?"
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "kosoštvorec",
        "question": "Kosoštvorec má uhlopriečky 6 cm a 8 cm. Aký je jeho obvod?",
        "options": [
          "14 cm",
          "20 cm",
          "24 cm",
          "28 cm"
        ],
        "answer": 1,
        "correct": "Správne: strana je √(3² + 4²) = 5 cm, obvod 4 · 5 = 20 cm.",
        "hint": "Uhlopriečky sa rozpoľujú v pravom uhle. Aká dlhá je strana kosoštvorca?"
      },
      {
        "id": "c4",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "sínus",
        "question": "Trojuholník má strany 9 cm a 12 cm a medzi nimi uhol 30°. Aký je jeho obsah? (sin 30° = ½)",
        "options": [
          "54 cm²",
          "108 cm²",
          "27 cm²",
          "13,5 cm²"
        ],
        "answer": 2,
        "correct": "Správne: ½ · 9 · 12 · ½ = 27 cm².",
        "hint": "Použi S = ½ · a · b · sin γ. Nezabudni na polovicu zo vzorca aj na hodnotu sin 30°."
      },
      {
        "id": "n1",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "Pytagorova veta",
        "title": "Obdĺžnik s uhlopriečkou",
        "prompt": "Obdĺžnik má jednu stranu 12 cm a uhlopriečku 13 cm. Aký je jeho obsah v cm²?",
        "validate": "exact",
        "answer": 60,
        "success": "Druhá strana: √(13² − 12²) = 5 cm. S = 12 · 5 = 60 cm².",
        "hint": "Uhlopriečka je prepona pravouhlého trojuholníka. Dopočítaj druhú stranu.",
        "reveal": "Správne je 60: druhá strana 5 cm, 12 · 5 = 60 cm²."
      },
      {
        "id": "n2",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "Pytagorova veta",
        "title": "Rovnoramenný trojuholník",
        "prompt": "Rovnoramenný trojuholník má základňu 16 cm a ramená po 10 cm. Aký je jeho obsah v cm²?",
        "validate": "exact",
        "answer": 48,
        "success": "Výška v = √(10² − 8²) = 6 cm, S = 16 · 6 : 2 = 48 cm².",
        "hint": "Výška rozdelí základňu na dve časti po 8 cm. Dopočítaj ju Pytagorovou vetou.",
        "reveal": "Správne je 48: v = 6 cm, S = 16 · 6 : 2."
      },
      {
        "id": "n3",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "šesťuholník",
        "title": "Rovnostranný trojuholník",
        "prompt": "Rovnostranný trojuholník má stranu 6 cm. Jeho obsah je ___ · √3 cm². Doplň číslo.",
        "validate": "exact",
        "answer": 9,
        "success": "v = 3√3 cm, S = 6 · 3√3 : 2 = 9√3 cm².",
        "hint": "Výška je a√3/2 = 3√3 cm. Obsah = a · v : 2.",
        "reveal": "Správne je 9: S = 6 · 3√3 : 2 = 9√3 cm²."
      },
      {
        "id": "n4",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "slovná úloha",
        "title": "Obdĺžnikový pozemok",
        "prompt": "Obdĺžnikový pozemok má obvod 56 m a jeho dĺžka je o 4 m väčšia ako šírka. Aký je jeho obsah v m²?",
        "validate": "exact",
        "answer": 192,
        "success": "Šírka w: 2(w + w + 4) = 56, w = 12 m, dĺžka 16 m, S = 12 · 16 = 192 m².",
        "hint": "Označ šírku w, dĺžka je w + 4. Zostav rovnicu z obvodu.",
        "reveal": "Správne je 192: w = 12 m, dĺžka 16 m."
      },
      {
        "id": "n5",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "jednotky",
        "title": "Dlaždice",
        "prompt": "Podlaha izby má rozmery 6 m × 4 m. Vykladá sa dlaždicami 40 cm × 40 cm. Koľko dlaždíc je potrebných (bez rezerv)?",
        "validate": "exact",
        "answer": 150,
        "success": "Plocha 24 m², dlaždica 0,16 m², 24 : 0,16 = 150.",
        "hint": "Zjednoť jednotky: 40 cm = 0,4 m. Potom plochu izby vydeľ plochou dlaždice.",
        "reveal": "Správne je 150: 24 m² : 0,16 m² = 150."
      },
      {
        "id": "n6",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "sínus",
        "title": "Rovnobežník",
        "prompt": "Rovnobežník má strany 10 cm a 6 cm a uhol medzi nimi 30°. Aký je jeho obsah v cm²? (sin 30° = ½)",
        "validate": "exact",
        "answer": 30,
        "success": "Výška na stranu 10 cm je 6 · sin 30° = 3 cm, S = 10 · 3 = 30 cm².",
        "hint": "Výška na stranu 10 cm je v = 6 · sin 30°. Potom S = a · v.",
        "reveal": "Správne je 30: v = 3 cm, S = 10 · 3."
      },
      {
        "id": "n7",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "mnohouholníky",
        "title": "Počet strán",
        "prompt": "Pravidelný mnohouholník má vnútorný uhol 140°. Koľko má strán?",
        "validate": "exact",
        "answer": 9,
        "success": "(n − 2) · 180 = 140n, 40n = 360, n = 9.",
        "hint": "Zapíš (n − 2) · 180 = 140 · n.",
        "reveal": "Správne je 9: 40n = 360."
      },
      {
        "id": "n8",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "zložený útvar",
        "title": "Odrezaný roh",
        "prompt": "Z obdĺžnika 12 cm × 8 cm odrežeme v jednom rohu pravouhlý trojuholník s odvesnami 6 cm a 4 cm. Aký je obsah zvyšného útvaru v cm²?",
        "validate": "exact",
        "answer": 84,
        "success": "12 · 8 = 96 cm², trojuholník 6 · 4 : 2 = 12 cm², 96 − 12 = 84 cm².",
        "hint": "Od obsahu obdĺžnika odčítaj obsah trojuholníka (nezabudni na delenie dvomi).",
        "reveal": "Správne je 84: 96 − 12."
      },
      {
        "id": "n9",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "šesťuholník",
        "title": "Šesťuholník z obvodu",
        "prompt": "Pravidelný šesťuholník má obvod 12 cm. Jeho obsah je ___ · √3 cm². Doplň číslo.",
        "validate": "exact",
        "answer": 6,
        "success": "Strana je 2 cm, S = 3 · 4 · √3 : 2 = 6√3 cm².",
        "hint": "Najprv strana: obvod 12 cm delíme šiestimi.",
        "reveal": "Správne je 6: a = 2 cm, 3a²/2 = 6."
      },
      {
        "id": "hunt1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak počítal obsah lichobežníka so základňami 14 m a 8 m a výškou 8 m: „S = (14 + 8) · 8 = 176 m².“ Čo urobil zle?",
        "options": [
          "Mal vynásobiť základne: 14 · 8 · 8.",
          "Zabudol vydeliť dvomi; správne je 88 m².",
          "Základne mal odčítať: (14 − 8) · 8 = 48 m².",
          "Nič, 176 m² je správne."
        ],
        "answer": 1,
        "correct": "Správne: S = (a + c) · v : 2 = 22 · 8 : 2 = 88 m².",
        "hint": "Porovnaj jeho zápis so vzorcom pre lichobežník. Čo v ňom chýba?"
      },
      {
        "id": "hunt2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak určoval obvod kosoštvorca s uhlopriečkami 6 cm a 8 cm: „strana je (6 + 8) : 2 = 7 cm, obvod je 28 cm.“ Aká je chyba?",
        "options": [
          "Strana je prepona pravouhlého trojuholníka s odvesnami 3 cm a 4 cm, teda 5 cm; obvod je 20 cm.",
          "Strana je 6 cm, obvod 24 cm.",
          "Obvod sa počíta 2 · 7 = 14 cm.",
          "Nič, strana je priemer uhlopriečok."
        ],
        "answer": 0,
        "correct": "Správne: a = √(3² + 4²) = 5 cm, o = 4 · 5 = 20 cm. Priemer uhlopriečok nie je dĺžka strany.",
        "hint": "Uhlopriečky kosoštvorca sú na seba kolmé a rozpoľujú sa. Aký trojuholník vznikne?"
      },
      {
        "id": "hunt3",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Podlaha má 24 m², dlaždica má 40 cm × 40 cm. Žiak počítal: „40 · 40 = 1600; 24 : 1600 = 0,015, treba 0,015 dlaždice.“ Aká je chyba?",
        "options": [
          "Mal deliť 1600 číslom 24.",
          "Dlaždica má 80 cm², preto 24 : 80.",
          "Jednotky nesedia: 24 sú m², ale 1600 sú cm². Dlaždica má 0,16 m², teda treba 24 : 0,16 = 150 dlaždíc.",
          "Nič, výsledok 0,015 je správny."
        ],
        "answer": 2,
        "correct": "Správne: zjednoť jednotky. 1 m² = 10 000 cm², takže 1600 cm² = 0,16 m².",
        "hint": "Je v poriadku deliť m² číslom v cm²? Čo sa stane s jednotkami?"
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úlohy na papier",
        "html": "<p>Odlož zariadenie. Nakresli náčrt, označ údaje a výsledky zapíš s jednotkami.</p><ol><li>Pozemok má tvar pravouhlého lichobežníka so základňami 20 m a 12 m a kolmým ramenom 15 m. Vypočítaj obsah pozemku a dĺžku plota okolo neho.</li><li>Kosoštvorec má uhlopriečky 16 cm a 30 cm. Vypočítaj jeho obvod, obsah a výšku na stranu.</li><li>Stena obdĺžnikového tvaru 5 m × 2,5 m sa natiera farbou, ktorá vystačí na 4 m² z jednej plechovky. Koľko plechoviek treba kúpiť? Odpovedz slovne.</li></ol>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: riešenie úloh",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Nakresli náčrt, dopočítaj chýbajúce údaje a zapíš výsledok s jednotkou. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Lichobežník má základne 12 cm a 8 cm a výšku 5 cm. Vypočítaj obsah.",
            "answer": "(12 + 8) · 5 : 2 = <strong>50 cm²</strong>"
          },
          {
            "level": "zaklad",
            "text": "Kosoštvorec má uhlopriečky 10 cm a 16 cm. Vypočítaj obsah.",
            "answer": "10 · 16 : 2 = <strong>80 cm²</strong>"
          },
          {
            "level": "zaklad",
            "text": "Obdĺžnik má strany 9 cm a 12 cm. Aká je jeho uhlopriečka?",
            "answer": "√(81 + 144) = √225 = <strong>15 cm</strong>"
          },
          {
            "level": "zaklad",
            "text": "Obdĺžnik má obsah 56 cm² a jednu stranu 7 cm. Vypočítaj jeho obvod.",
            "answer": "Druhá strana 56 : 7 = 8 cm, o = 2 · (7 + 8) = <strong>30 cm</strong>"
          },
          {
            "level": "zaklad",
            "text": "Izba je 5 m × 4 m. Dlaždice majú rozmer 50 cm × 50 cm. Koľko ich treba?",
            "answer": "20 m² : 0,25 m² = <strong>80 dlaždíc</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Rovnoramenný trojuholník má základňu 10 cm a ramená 13 cm. Vypočítaj obsah a obvod.",
            "answer": "v = √(169 − 25) = 12 cm, S = 10 · 12 : 2 = <strong>60 cm²</strong>, o = 13 + 13 + 10 = <strong>36 cm</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Kosoštvorec má uhlopriečky 16 cm a 30 cm. Vypočítaj obvod a obsah.",
            "answer": "a = √(8² + 15²) = 17 cm, o = <strong>68 cm</strong>, S = 16 · 30 : 2 = <strong>240 cm²</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Rovnobežník má strany 8 cm a 5 cm a uhol 30° medzi nimi. Vypočítaj obsah. (sin 30° = ½)",
            "answer": "S = 8 · 5 · ½ = <strong>20 cm²</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Pravouhlý lichobežník má základne 20 m a 12 m a kolmé rameno 15 m. Vypočítaj obsah a obvod.",
            "answer": "Šikmé rameno √(8² + 15²) = 17 m. S = 32 · 15 : 2 = <strong>240 m²</strong>, o = 20 + 12 + 15 + 17 = <strong>64 m</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Pozemok je obdĺžnik 24 m × 18 m, z ktorého je v rohu vyrezaný štvorec 6 m × 6 m. Vypočítaj jeho obsah a obvod.",
            "answer": "S = 432 − 36 = <strong>396 m²</strong>, obvod je rovnaký ako obvod obdĺžnika: 2 · (24 + 18) = <strong>84 m</strong>"
          },
          {
            "level": "bonus",
            "text": "Pravidelný šesťuholník má obvod 48 cm. Vypočítaj jeho obsah.",
            "answer": "a = 8 cm, S = 3 · 64 · √3 : 2 = <strong>96√3 cm²</strong>"
          },
          {
            "level": "bonus",
            "text": "Trojuholník má strany 10 cm a 14 cm a medzi nimi uhol 150°. Vypočítaj obsah. (sin 150° = ½)",
            "answer": "S = ½ · 10 · 14 · ½ = <strong>35 cm²</strong>"
          },
          {
            "level": "bonus",
            "text": "Rovnoramenný lichobežník má základne 20 cm a 8 cm a ramená 10 cm. Vypočítaj obsah a obvod.",
            "answer": "Z každej strany vystúpi (20 − 8) : 2 = 6 cm, výška √(100 − 36) = 8 cm. S = 28 · 8 : 2 = <strong>112 cm²</strong>, o = 20 + 8 + 10 + 10 = <strong>48 cm</strong>"
          },
          {
            "level": "bonus",
            "text": "Pravidelný n-uholník má obvod 72 cm a vnútorný uhol 150°. Aká je jeho strana?",
            "answer": "(n − 2) · 180 : n = 150 ⇒ n = 12, a = 72 : 12 = <strong>6 cm</strong>"
          }
        ]
      },
      {
        "id": "explain-write",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Ako riešim úlohu",
        "prompt": "Opíš vlastnými slovami, ako postupuješ, keď v úlohe chýba výška alebo strana útvaru. Uveď aspoň dve možnosti, ako ju zistiť.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> V útvare hľadám pravouhlý trojuholník (výška, uhlopriečky kosoštvorca, uhlopriečka obdĺžnika) a chýbajúcu stranu spočítam Pytagorovou vetou. Ak poznám uhol, výšku vyjadrím cez sínus, napríklad v = b · sin α. Potom použijem vzorec pre obsah a skontrolujem jednotky.",
        "placeholder": "Ak chýba výška alebo strana, tak…"
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; pri 🔴 alebo 🟡 sa vráť k vzorovým úlohám A–C.",
        "skills": [
          "zvolím vzorec pre obsah daného útvaru",
          "dopočítam chýbajúcu stranu alebo výšku (Pytagorova veta, sínus)",
          "riešim zložené útvary a mnohouholníky",
          "zostavím a vyriešim slovnú úlohu s jednotkami",
          "nájdem chybu v cudzom riešení"
        ]
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 4,
        "text": "Lichobežník má základne 16 cm a 10 cm a výšku 6 cm. Vypočítaj obsah.",
        "answer": "(16 + 10) · 6 : 2 = 78 cm²"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 5,
        "text": "Kosoštvorec má uhlopriečky 6 cm a 8 cm. Vypočítaj obvod a obsah.",
        "answer": "a = 5 cm, o = 20 cm; S = 6 · 8 : 2 = 24 cm²"
      },
      {
        "id": "w3",
        "level": "rozsirenie",
        "space": 5,
        "text": "Rovnoramenný trojuholník má základňu 16 cm a ramená 17 cm. Vypočítaj výšku, obsah a obvod.",
        "answer": "v = √(289 − 64) = 15 cm; S = 16 · 15 : 2 = 120 cm²; o = 17 + 17 + 16 = 50 cm"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 4,
        "text": "Trojuholník má strany 12 cm a 10 cm a medzi nimi uhol 30°. Vypočítaj obsah. (sin 30° = ½)",
        "answer": "S = ½ · 12 · 10 · ½ = 30 cm²"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 5,
        "text": "Pravidelný šesťuholník má stranu 10 cm. Vypočítaj obvod a obsah.",
        "answer": "o = 60 cm; S = 3 · 100 · √3 : 2 = 150√3 cm²"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 6,
        "text": "Pravidelný n-uholník má obvod 36 cm a vnútorný uhol 140°. Koľko má strán a aká je jeho strana?",
        "answer": "(n − 2) · 180 : n = 140 ⇒ n = 9; a = 36 : 9 = 4 cm"
      }
    ]
  }
});
