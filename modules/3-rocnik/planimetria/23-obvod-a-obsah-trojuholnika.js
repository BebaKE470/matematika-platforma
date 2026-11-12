MathPlatform.registerModule({
  "id": "3-u02-h023",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 23 · Obvod a obsah trojuholníka",
    "prerequisites": [
      "ZŠ: obsah obdĺžnika, jednotky dĺžky a obsahu",
      "2. ročník: Pytagorova veta, sínusová veta",
      "3. ročník: goniometrické funkcie (sin 30°, sin 150°) — celok 3-u01 je prebraný pred týmto celkom",
      "Hodina 22: výška, druhy trojuholníkov, vpísaná kružnica"
    ],
    "planContent": [
      "Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka."
    ],
    "planPerformance": [
      "Poznať a vedieť opísať vlastnosti základných rovinných útvarov.",
      "Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov."
    ],
    "goals": [
      "vypočítať obvod trojuholníka a rozlíšiť obvod od obsahu vrátane jednotiek",
      "použiť S = a·v/2 s ľubovoľnou stranou a jej výškou, aj z obsahu dopočítať výšku",
      "počítať obsah pravouhlého, rovnoramenného a rovnostranného trojuholníka",
      "použiť Herónov vzorec, S = ½ab·sin γ a r = S/s a vybrať vzorec podľa zadania"
    ],
    "competencies": [
      "prepájať obrázok (výška, kolmosť) s výpočtom",
      "výber vzorca podľa toho, aké údaje sú dané",
      "presný zápis s jednotkami a overenie výsledku iným spôsobom",
      "argumentovať, prečo vzorec platí (polovica obdĺžnika)"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie: reprezentácie, modelovanie, presný matematický jazyk a argumentácia.",
      "Odvodenie r = S/s z troch pomocných trojuholníkov.",
      "Bonus: R = abc/(4S) zo sínusovej vety a výška z Herónovho obsahu."
    ],
    "flow": [
      "0–5 min: obvod a obsah, jednotky; odvodenie S = a·v/2 z obdĺžnika",
      "5–15 min: spoločné príklady (strana a výška, výška z obsahu, tupouhlý trojuholník)",
      "15–30 min: platforma: pravouhlý, rovnoramenný, rovnostranný, Herónov vzorec, sínusový vzorec, vpísaná kružnica",
      "30–40 min: hľadanie chýb a úloha BEZ MOBILU, zbierka podľa úrovne",
      "40–45 min: rozbor chýb podľa živých výsledkov"
    ],
    "diagnostics": [
      "zabúda na ½ alebo spáruje stranu s cudzou výškou",
      "zamieňa obvod a obsah, píše cm namiesto cm²",
      "v Herónovom vzorci dosadí obvod namiesto polovice obvodu",
      "pri tupouhlom trojuholníku nevie, kam padne výška",
      "vo vzorci so sínusom použije uhol, ktorý nie je medzi danými stranami"
    ],
    "partialUse": [
      "pri nedostatku času vynechať Herónov vzorec, vzorec so sínusom alebo vpísanú kružnicu (označené ako rozšírenie)",
      "mobil nenahrádza ručné počítanie; náčrty a postupy sa píšu do zošita",
      "pri ŠVVP povoliť opornú kartu so vzorcami"
    ]
  },
  "student": {
    "title": "Obvod a obsah trojuholníka",
    "subtitle": "Obvod · S = a·v/2 · pravouhlý, rovnoramenný, rovnostranný · Herónov vzorec · sínus",
    "intro": "Naučíš sa počítať obvod a obsah trojuholníka rôznymi spôsobmi podľa toho, čo je dané. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "25–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme z ZŠ a z minulej hodiny",
        "html": "<p>Na minulej hodine sme si pripomenuli prvky trojuholníka: strany a, b, c, výšky v<sub>a</sub>, v<sub>b</sub>, v<sub>c</sub>, Pytagorovu vetu a druhy trojuholníkov. Dnes ich použijeme na dve základné veličiny:</p>\n<div class=\"term-list\">\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Obvod o</div><p class=\"term-rule\">Dĺžka „cesty okolo“ trojuholníka. Meria sa v <span class=\"hl\">dĺžkových jednotkách</span> (cm, m).</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Obsah S</div><p class=\"term-rule\">Veľkosť plochy vo vnútri. Meria sa v <span class=\"hl\">štvorcových jednotkách</span> (cm², m²).</p></div>\n</div>\n<p>Zo ZŠ poznáš obsah obdĺžnika S = a · b. Obsah trojuholníka z neho odvodíme a doplníme o Herónov vzorec a vzorec so sínusom, ktorý využíva goniometriu z tohto ročníka.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "vypočítať obvod trojuholníka a rozlíšiť ho od obsahu (jednotky!)",
          "použiť S = a · v / 2 s ľubovoľnou stranou a jej výškou",
          "počítať obsah pravouhlého, rovnoramenného a rovnostranného trojuholníka",
          "použiť Herónov vzorec a vzorec S = ½ · a · b · sin γ a vybrať vhodný vzorec"
        ]
      },
      {
        "id": "obvod",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Obvod trojuholníka",
        "html": "<div class=\"formula\"><span class=\"mini-label\">OBVOD</span>o = a + b + c<span class=\"formula-note\">Súčet dĺžok všetkých troch strán — v cm, m, …</span></div>\n<p>Pri špeciálnych trojuholníkoch sa vzorec zjednoduší:</p>\n<div class=\"compare\">\n<div><span class=\"mini-label\">ROVNORAMENNÝ</span><p>základňa z, ramená b<br>o = z + 2b</p></div>\n<div><span class=\"mini-label\">ROVNOSTRANNÝ</span><p>všetky strany a<br>o = 3a</p></div>\n</div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1</span><p>Strany majú 7 cm, 9 cm a 12 cm.</p><p>o = 7 + 9 + 12 = <strong>28 cm</strong></p></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2 · neznáma strana</span><p>Obvod rovnoramenného trojuholníka je 40 cm a jeho základňa má 16 cm. Aké dlhé sú ramená?</p><p>16 + 2b = 40, 2b = 24, b = <strong>12 cm</strong></p><p>Overíme existenciu: 12 + 12 = 24 &gt; 16, trojuholník existuje.</p></div>\n<div class=\"warning\"><strong>Pozor:</strong> Obvod je dĺžka, preto má jednotku <em>cm</em>, nie cm². Aj pri neznámej strane je dobré overiť trojuholníkovú nerovnosť.</div>",
        "remember": "Obvod = súčet strán, jednotka je dĺžková (cm, m)."
      },
      {
        "id": "n-o1",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "obvod",
        "title": "Obvod rovnostranného trojuholníka",
        "prompt": "Obvod rovnostranného trojuholníka je 45 cm. Aká dlhá je jeho strana v cm?",
        "validate": "exact",
        "answer": 15,
        "success": "3a = 45, a = 15 cm.",
        "hint": "Všetky tri strany sú rovnaké, obvod je 3a.",
        "reveal": "Správne je 15: 45 : 3 = 15."
      },
      {
        "id": "obsah",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Obsah trojuholníka: S = a · v / 2",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 500 310\" role=\"img\" aria-label=\"Trojuholník ABC so stranou a a výškou v je polovicou obdĺžnika a krát v\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"></g><polygon points=\"80,90 400,90 400,250 80,250\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"7 6\" opacity=\".55\"/><polygon points=\"200,90 80,250 400,250\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><line x1=\"200\" y1=\"90\" x2=\"200\" y2=\"250\" stroke=\"#1f6f5c\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><polyline points=\"200,236 214,236 214,250\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"200\" y=\"76\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">A</text><text x=\"66\" y=\"270\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">B</text><text x=\"414\" y=\"270\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">C</text><text x=\"240\" y=\"285\" font-size=\"20\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">a</text><text x=\"220\" y=\"175\" font-size=\"20\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">v</text><text x=\"450\" y=\"175\" font-size=\"16\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">obdĺžnik a · v</text></svg></div>\n<p>Nad stranou a vedieme výšku v (kolmo na ňu). Trojuholník s vrcholom A na hornej strane obdĺžnika a × v zaberá presne <span class=\"hl\">polovicu</span> tohto obdĺžnika — a to bez ohľadu na to, kde na hornej strane vrchol leží.</p>\n<div class=\"formula\"><span class=\"mini-label\">OBSAH TROJUHOLNÍKA</span>S = <span class=\"frac\"><span class=\"frac-num\">a · v<sub>a</sub></span><span class=\"frac-den\">2</span></span><span class=\"formula-note\">Platí pre každú stranu: S = a·v<sub>a</sub>/2 = b·v<sub>b</sub>/2 = c·v<sub>c</sub>/2. Dvojica musí byť strana a <em>jej</em> výška.</span></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1 · obsah</span><p>a = 10 cm, v<sub>a</sub> = 6 cm</p><p>S = 10 · 6 / 2 = 60 / 2 = <strong>30 cm²</strong></p></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2 · výška z obsahu</span><p>Trojuholník má obsah 30 cm² a stranu b = 12 cm. Aká je výška v<sub>b</sub>?</p><p>30 = 12 · v<sub>b</sub> / 2 ⇒ 60 = 12 · v<sub>b</sub> ⇒ v<sub>b</sub> = <strong>5 cm</strong></p></div>\n<p>Výška nemusí padnúť dovnútra trojuholníka. V tupouhlom trojuholníku padne na predĺženie strany a vzorec platí rovnako:</p>\n<div class=\"logic-visual\"><svg viewBox=\"0 0 520 310\" role=\"img\" aria-label=\"Tupouhlý trojuholník: výška v na stranu BC padne mimo trojuholníka, do bodu D na predĺžení strany BC\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"></g><polygon points=\"100,80 220,250 420,250\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><line x1=\"220\" y1=\"250\" x2=\"100\" y2=\"250\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"250\" stroke=\"#1f6f5c\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><polyline points=\"100,236 114,236 114,250\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"100\" y=\"66\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">A</text><text x=\"220\" y=\"276\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">B</text><text x=\"436\" y=\"270\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">C</text><text x=\"96\" y=\"276\" font-size=\"20\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\">D</text><text x=\"320\" y=\"276\" font-size=\"20\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">a</text><text x=\"118\" y=\"170\" font-size=\"20\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">v</text></svg></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 3 · tupouhlý</span><p>Na obrázku je a = BC = 8 cm a výška v = AD = 5 cm.</p><p>S = 8 · 5 / 2 = <strong>20 cm²</strong>. Strana AB tu do vzorca nevstupuje.</p></div>\n<div class=\"warning\"><strong>Pozor:</strong> Do vzorca patrí <em>výška</em>, nie ďalšia strana. Najčastejšie chyby: zabudnuté ½ (vyjde obsah obdĺžnika) a zlá dvojica (strana s výškou, ktorá k nej nepatrí). Výsledok je v cm², nie v cm.</div>",
        "remember": "Obsah trojuholníka = strana krát jej výška, delené dvoma."
      },
      {
        "id": "c-area1",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "obsah z výšky",
        "question": "Trojuholník má strany a = 9 cm, b = 7 cm, c = 12 cm. Výška na stranu a má dĺžku v_a = 6 cm. Aký je jeho obsah?",
        "options": [
          "54 cm²",
          "36 cm²",
          "21 cm²",
          "27 cm²"
        ],
        "answer": 3,
        "correct": "Správne: S = a · v_a / 2 = 9 · 6 / 2 = 27 cm². (54 vznikne, keď zabudneš ½; 36 a 21 vzniknú, keď k výške v_a použiješ cudziu stranu c, resp. b.)",
        "hint": "Výška v_a patrí k strane a. Ktorá strana a ktorá výška teda vstúpia do vzorca?"
      },
      {
        "id": "n-s1",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "obsah z výšky",
        "title": "Obsah z výšky",
        "prompt": "Strana trojuholníka má 14 cm a výška na ňu 9 cm. Aký je obsah trojuholníka v cm²?",
        "validate": "exact",
        "answer": 63,
        "success": "S = 14 · 9 / 2 = 126 / 2 = 63 cm².",
        "hint": "Použi S = a · v / 2 — nezabudni na delenie dvoma.",
        "reveal": "Správne je 63: 14 · 9 = 126 a 126 : 2 = 63."
      },
      {
        "id": "n-s2",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "výška z obsahu",
        "title": "Výška z obsahu",
        "prompt": "Trojuholník má obsah 60 cm² a stranu c = 15 cm. Aká dlhá je výška na túto stranu v cm?",
        "validate": "exact",
        "answer": 8,
        "success": "60 = 15 · v_c / 2 ⇒ 120 = 15 · v_c ⇒ v_c = 8 cm.",
        "hint": "Vzorec S = c · v_c / 2 prepíš: v_c = 2S / c.",
        "reveal": "Správne je 8: 2 · 60 = 120 a 120 : 15 = 8."
      },
      {
        "id": "n-s3",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "tri výšky",
        "title": "Výška na inú stranu",
        "prompt": "Trojuholník má stranu a = 12 cm s výškou v_a = 5 cm. Strana b má 10 cm. Aká dlhá je výška v_b v cm?",
        "validate": "exact",
        "answer": 6,
        "success": "S = 12 · 5 / 2 = 30 cm². Potom 30 = 10 · v_b / 2, v_b = 6 cm.",
        "hint": "Najprv vypočítaj obsah zo strany a a jej výšky; potom ho použi so stranou b.",
        "reveal": "Správne je 6: S = 30 cm², v_b = 2 · 30 : 10 = 6."
      },
      {
        "id": "right",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Pravouhlý trojuholník",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 460 310\" role=\"img\" aria-label=\"Pravouhlý trojuholník: odvesna b je výška na odvesnu a\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"></g><polygon points=\"100,90 340,250 100,250\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><polyline points=\"100,234 116,234 116,250\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"87\" y=\"79\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">A</text><text x=\"361\" y=\"264\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">B</text><text x=\"82\" y=\"269\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">C</text><text x=\"220\" y=\"284\" font-size=\"18\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">a (odvesna)</text><text x=\"48\" y=\"175\" font-size=\"20\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">b</text><text x=\"252\" y=\"150\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">c</text></svg></div>\n<p>V pravouhlom trojuholníku sú odvesny na seba kolmé, takže <span class=\"hl\">jedna odvesna je výškou na druhú</span>. Vzorec sa zjednoduší:</p>\n<div class=\"formula\"><span class=\"mini-label\">PRAVOUHLÝ TROJUHOLNÍK</span>S = <span class=\"frac\"><span class=\"frac-num\">a · b</span><span class=\"frac-den\">2</span></span>, o = a + b + c</div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1</span><p>Odvesny 5 cm a 12 cm. Prepona z Pytagorovej vety: c² = 25 + 144 = 169, c = 13 cm.</p><p>o = 5 + 12 + 13 = <strong>30 cm</strong>, S = 5 · 12 / 2 = <strong>30 cm²</strong></p></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2 · výška na preponu</span><p>Odvesny 6 cm a 8 cm, prepona 10 cm. Obsah S = 6 · 8 / 2 = 24 cm². Obsah vieme vyjadriť aj s preponou ako stranou:</p><p>24 = 10 · v<sub>c</sub> / 2 ⇒ v<sub>c</sub> = 48 / 10 = <strong>4,8 cm</strong></p></div>\n<div class=\"warning\"><strong>Pozor:</strong> Do vzorca S = a·b/2 patria obe <em>odvesny</em>, nie prepona. Preponu potrebuješ len do obvodu (a pri výške na preponu).</div>",
        "remember": "Pri pravouhlom trojuholníku stačia odvesny: S = ab/2. Preponu dopočítaš Pytagorovou vetou."
      },
      {
        "id": "n-r1",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "pravouhlý trojuholník",
        "title": "Obvod pravouhlého",
        "prompt": "Pravouhlý trojuholník má odvesny 9 cm a 12 cm. Aký je jeho obvod v cm?",
        "validate": "exact",
        "answer": 36,
        "success": "c² = 81 + 144 = 225, c = 15 cm. o = 9 + 12 + 15 = 36 cm.",
        "hint": "Najprv vypočítaj preponu Pytagorovou vetou.",
        "reveal": "Správne je 36: c = 15 a 9 + 12 + 15 = 36."
      },
      {
        "id": "n-r2",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "pravouhlý trojuholník",
        "title": "Obsah pravouhlého",
        "prompt": "Pravouhlý trojuholník má preponu 26 cm a jednu odvesnu 10 cm. Aký je jeho obsah v cm²?",
        "validate": "exact",
        "answer": 120,
        "success": "Druhá odvesna: b² = 26² − 10² = 676 − 100 = 576, b = 24 cm. S = 10 · 24 / 2 = 120 cm².",
        "hint": "Najprv dopočítaj druhú odvesnu Pytagorovou vetou, potom S = ab/2.",
        "reveal": "Správne je 120: b = 24 cm, S = 10 · 24 : 2 = 120."
      },
      {
        "id": "n-r3",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "výška na preponu",
        "title": "Výška na preponu",
        "prompt": "Pravouhlý trojuholník má odvesny 6 cm a 8 cm a preponu 10 cm. Aká dlhá je výška na preponu v cm? (Desatinné číslo zapíš s čiarkou.)",
        "validate": "exact",
        "answer": 4.8,
        "success": "S = 6 · 8 / 2 = 24 cm². 24 = 10 · v / 2 ⇒ v = 4,8 cm.",
        "hint": "Obsah vypočítaj z odvesien a potom ho vyjadri aj pomocou prepony a jej výšky.",
        "reveal": "Správne je 4,8: 2 · 24 : 10 = 4,8."
      },
      {
        "id": "iso",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Rovnoramenný a rovnostranný trojuholník",
        "html": "<p><strong>Rovnoramenný:</strong> výška na základňu ju rozpolí a vznikne pravouhlý trojuholník, z ktorého výšku vypočítame Pytagorovou vetou.</p>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD · rovnoramenný</span><p>Základňa 16 cm, ramená 10 cm. Polovica základne je 8 cm.</p><p>v² = 10² − 8² = 36, v = 6 cm</p><p>S = 16 · 6 / 2 = <strong>48 cm²</strong>, o = 16 + 10 + 10 = <strong>36 cm</strong></p></div>\n<div class=\"logic-visual\"><svg viewBox=\"0 0 480 320\" role=\"img\" aria-label=\"Rovnostranný trojuholník so stranou a; výška v rozpolí základňu na dve časti a/2\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"></g><polygon points=\"240,57.15390309173475 120,265 360,265\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><line x1=\"240\" y1=\"57.15390309173475\" x2=\"240\" y2=\"265\" stroke=\"#1f6f5c\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><polyline points=\"240,251 254,251 254,265\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"240\" y=\"43.15390309173475\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">A</text><text x=\"104\" y=\"275\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">B</text><text x=\"376\" y=\"275\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">C</text><text x=\"180\" y=\"292\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">a/2</text><text x=\"300\" y=\"292\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">a/2</text><text x=\"206\" y=\"176\" font-size=\"20\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">v</text><text x=\"145\" y=\"160\" font-size=\"20\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">a</text><text x=\"335\" y=\"160\" font-size=\"20\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">a</text></svg></div>\n<p><strong>Rovnostranný:</strong> základňa aj ramená majú dĺžku a, polovica základne je a/2. Z Pytagorovej vety:</p>\n<p>v² = a² − (a/2)² = a² − a²/4 = 3a²/4, teda <span class=\"hl\">v = a√3 / 2</span>. Dosadením do S = a · v / 2 dostaneme:</p>\n<div class=\"formula\"><span class=\"mini-label\">ROVNOSTRANNÝ TROJUHOLNÍK</span>v = <span class=\"frac\"><span class=\"frac-num\">a√3</span><span class=\"frac-den\">2</span></span>, S = <span class=\"frac\"><span class=\"frac-num\">a²√3</span><span class=\"frac-den\">4</span></span>, o = 3a</div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD · rovnostranný</span><p>a = 4 cm: v = 4√3/2 = 2√3 cm, S = 16√3/4 = <strong>4√3 cm²</strong> (približne 6,93 cm²), o = <strong>12 cm</strong>.</p></div>\n<div class=\"warning\"><strong>Pozor:</strong> Výška rovnostranného trojuholníka nie je polovica strany ani strana samotná; je to a√3/2 ≈ 0,87a.</div>",
        "remember": "Rovnostranný: S = a²√3/4. Rovnoramenný: najprv výška Pytagorovou vetou, potom S = z·v/2."
      },
      {
        "id": "c-eq",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "rovnostranný",
        "question": "Rovnostranný trojuholník má stranu 6 cm. Aký je jeho obsah?",
        "options": [
          "36√3 cm²",
          "9√3 cm²",
          "18√3 cm²",
          "9 cm²"
        ],
        "answer": 1,
        "correct": "Správne: S = a²√3 / 4 = 36√3 / 4 = 9√3 cm² (približne 15,6 cm²). Bez delenia štyrmi by vyšlo 36√3; 9 cm² vznikne omylom v = a/2.",
        "hint": "Dosaď do S = a²√3 / 4. Čo je 6² : 4?"
      },
      {
        "id": "n-eq2",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "rovnostranný",
        "title": "Strana z obsahu",
        "prompt": "Rovnostranný trojuholník má obsah 16√3 cm². Aká dlhá je jeho strana v cm?",
        "validate": "exact",
        "answer": 8,
        "success": "a²√3 / 4 = 16√3 ⇒ a² = 64 ⇒ a = 8 cm.",
        "hint": "Obe strany rovnice vydeľ √3 a vynásob 4: a² = 64.",
        "reveal": "Správne je 8: a² = 4 · 16 = 64."
      },
      {
        "id": "n-iso",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "rovnoramenný",
        "title": "Obsah rovnoramenného",
        "prompt": "Rovnoramenný trojuholník má základňu 16 cm a ramená 10 cm. Aký je jeho obsah v cm²?",
        "validate": "exact",
        "answer": 48,
        "success": "v = √(100 − 64) = 6 cm, S = 16 · 6 / 2 = 48 cm².",
        "hint": "Výška rozpolí základňu na dve časti po 8 cm. Z Pytagorovej vety nájdi výšku.",
        "reveal": "Správne je 48: v = 6 cm, S = 16 · 6 : 2 = 48."
      },
      {
        "id": "heron",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Herónov vzorec",
        "html": "<p>Čo ak poznáme len <strong>všetky tri strany</strong> a výška nie je daná? Pomôže Herónov vzorec. Najprv vypočítame <span class=\"hl\">polovicu obvodu</span> s:</p>\n<div class=\"formula\"><span class=\"mini-label\">HERÓNOV VZOREC</span>s = <span class=\"frac\"><span class=\"frac-num\">a + b + c</span><span class=\"frac-den\">2</span></span>, S = √( s · (s − a) · (s − b) · (s − c) )</div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1</span><p>a = 13 cm, b = 14 cm, c = 15 cm</p><p>s = (13 + 14 + 15) / 2 = 21 cm</p><p>S = √(21 · 8 · 7 · 6) = √7056 = <strong>84 cm²</strong></p></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2 · kontrola na známom trojuholníku</span><p>3 cm, 4 cm, 5 cm: s = 6, S = √(6 · 3 · 2 · 1) = √36 = 6 cm². Súhlasí s S = 3 · 4 / 2 = 6.</p></div>\n<div class=\"warning\"><strong>Pozor:</strong> s je <em>polovica</em> obvodu, nie obvod. Odčítaj stranu od s (nie od obvodu) a nezabudni na záverečnú odmocninu.</div>",
        "remember": "Pri troch známych stranách bez výšky použi Herónov vzorec: najprv s = o/2."
      },
      {
        "id": "c-heron-s",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Herónov vzorec",
        "question": "Strany trojuholníka majú dĺžky 10 cm, 17 cm a 21 cm. Čomu sa rovná s vo Herónovom vzorci?",
        "options": [
          "24 cm",
          "48 cm",
          "12 cm",
          "31 cm"
        ],
        "answer": 0,
        "correct": "Správne: s = (10 + 17 + 21) / 2 = 48 / 2 = 24 cm. Hodnota 48 cm je celý obvod.",
        "hint": "Spočítaj všetky tri strany a výsledok vydeľ dvoma. Obvod nie je s."
      },
      {
        "id": "n-h1",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "Herónov vzorec",
        "title": "Herónov vzorec",
        "prompt": "Trojuholník má strany 9 cm, 10 cm a 17 cm. Aký je jeho obsah v cm²?",
        "validate": "exact",
        "answer": 36,
        "success": "s = 18, S = √(18 · 9 · 8 · 1) = √1296 = 36 cm².",
        "hint": "Najprv s = (9 + 10 + 17)/2. Potom odčítaj každú stranu od s.",
        "reveal": "Správne je 36: s = 18, 18 · 9 · 8 · 1 = 1296 a √1296 = 36."
      },
      {
        "id": "n-h2",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "Herónov vzorec",
        "title": "Herónov vzorec 2",
        "prompt": "Trojuholník má strany 7 cm, 15 cm a 20 cm. Aký je jeho obsah v cm²?",
        "validate": "exact",
        "answer": 42,
        "success": "s = 21, S = √(21 · 14 · 6 · 1) = √1764 = 42 cm².",
        "hint": "Spočítaj s = 21 a odčítaj od neho 7, 15, 20.",
        "reveal": "Správne je 42: 21 · 14 · 6 · 1 = 1764 = 42²."
      },
      {
        "id": "sin",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Obsah cez sínus: S = ½ · a · b · sin γ",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 520 310\" role=\"img\" aria-label=\"Trojuholník so stranami a, b a uhlom γ medzi nimi; výška na stranu a je v = b · sin γ\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"></g><polygon points=\"240,70 420,250 80,250\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><line x1=\"240\" y1=\"70\" x2=\"240\" y2=\"250\" stroke=\"#1f6f5c\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><polyline points=\"240,236 254,236 254,250\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"240\" y=\"56\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">A</text><text x=\"436\" y=\"270\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">B</text><text x=\"64\" y=\"270\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">C</text><text x=\"254\" y=\"276\" font-size=\"20\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\">D</text><text x=\"300\" y=\"290\" font-size=\"20\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">a</text><text x=\"146\" y=\"150\" font-size=\"20\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">b</text><text x=\"350\" y=\"150\" font-size=\"20\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">c</text><text x=\"250\" y=\"175\" font-size=\"20\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">v</text><path d=\"M118.0 250.0 A38 38 0 0 0 105.2 221.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"137\" y=\"232\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">γ</text></svg></div>\n<p>Poznáme dve strany a, b a <span class=\"hl\">uhol γ medzi nimi</span>. Výška na stranu a vychádza z pravouhlého trojuholníka ACD: v = b · sin γ (sínus uhla je pomer protiľahlej odvesny k prepone). Dosadením do S = a · v / 2 dostaneme:</p>\n<div class=\"formula\"><span class=\"mini-label\">OBSAH CEZ SÍNUS</span>S = ½ · a · b · sin γ<span class=\"formula-note\">γ je uhol zovretý stranami a, b.</span></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1</span><p>a = 8 cm, b = 5 cm, γ = 30°. sin 30° = ½.</p><p>S = ½ · 8 · 5 · ½ = <strong>10 cm²</strong></p></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2 · tupý uhol</span><p>a = 6 cm, b = 8 cm, γ = 150°. sin 150° = sin 30° = ½.</p><p>S = ½ · 6 · 8 · ½ = <strong>12 cm²</strong></p></div>\n<div class=\"warning\"><strong>Pozor:</strong> Uhol musí ležať <em>medzi</em> použitými stranami. A uhly γ a 180° − γ majú rovnaký sínus, takže rovnaký obsah dostaneme pre ostrý aj pre tupý uhol. Pre γ = 90° vzorec dá S = ab/2, ako treba.</div>",
        "remember": "Dve strany a uhol medzi nimi → S = ½ ab sin γ. Hodnoty: sin 30° = ½, sin 90° = 1, sin 150° = ½."
      },
      {
        "id": "n-sin1",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "obsah cez sínus",
        "title": "Obsah cez sínus",
        "prompt": "Strany trojuholníka majú 12 cm a 7 cm a uhol medzi nimi je 30°. Aký je obsah v cm²?",
        "validate": "exact",
        "answer": 21,
        "success": "S = ½ · 12 · 7 · sin 30° = ½ · 12 · 7 · ½ = 21 cm².",
        "hint": "sin 30° = ½. Pozor, ½ sa v súčine objaví dvakrát.",
        "reveal": "Správne je 21: ½ · 84 = 42 a 42 · ½ = 21."
      },
      {
        "id": "n-sin2",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "obsah cez sínus",
        "title": "Tupý uhol",
        "prompt": "Strany trojuholníka majú 9 cm a 8 cm a uhol medzi nimi je 150°. Aký je obsah v cm²?",
        "validate": "exact",
        "answer": 18,
        "success": "sin 150° = ½, S = ½ · 9 · 8 · ½ = 18 cm².",
        "hint": "sin 150° = sin(180° − 150°) = sin 30°.",
        "reveal": "Správne je 18: ½ · 72 · ½ = 18."
      },
      {
        "id": "n-sin3",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "obsah cez sínus",
        "title": "Hľadaný uhol",
        "prompt": "Strany trojuholníka majú 10 cm a 6 cm, jeho obsah je 15 cm². Aký veľký je ostrý uhol medzi nimi v stupňoch?",
        "validate": "exact",
        "answer": 30,
        "success": "15 = ½ · 10 · 6 · sin γ = 30 sin γ ⇒ sin γ = ½ ⇒ γ = 30° (ostrý).",
        "hint": "Dosaď do S = ½ ab sin γ a vyjadri sin γ. Pri ktorom ostrom uhle je sínus ½?",
        "reveal": "Správne je 30: sin γ = 15 : 30 = ½."
      },
      {
        "id": "incircle",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Polomer vpísanej kružnice",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 520 310\" role=\"img\" aria-label=\"Vpísaná kružnica so stredom I a polomerom r; spojnice stredu s vrcholmi rozdelia trojuholník na tri trojuholníky s výškou r\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"></g><polygon points=\"80,250 440,250 270,60\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><line x1=\"80\" y1=\"250\" x2=\"266.8748005856244\" y2=\"172.59392313166677\" stroke=\"#1f6f5c\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><line x1=\"440\" y1=\"250\" x2=\"266.8748005856244\" y2=\"172.59392313166677\" stroke=\"#1f6f5c\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><line x1=\"270\" y1=\"60\" x2=\"266.8748005856244\" y2=\"172.59392313166677\" stroke=\"#1f6f5c\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><circle cx=\"266.9\" cy=\"172.6\" r=\"77.4\" fill=\"none\" stroke=\"#b4532a\" stroke-width=\"2.5\"/><line x1=\"266.8748005856244\" y1=\"172.59392313166677\" x2=\"266.8748005856245\" y2=\"250\" stroke=\"#b4532a\" stroke-width=\"2.5\"/><line x1=\"266.8748005856244\" y1=\"172.59392313166677\" x2=\"324.5610069858059\" y2=\"120.97994898413597\" stroke=\"#b4532a\" stroke-width=\"2.5\"/><line x1=\"266.8748005856244\" y1=\"172.59392313166677\" x2=\"212.14043872697883\" y2=\"117.85956127302117\" stroke=\"#b4532a\" stroke-width=\"2.5\"/><circle cx=\"266.8748005856244\" cy=\"172.59392313166677\" r=\"5\" fill=\"#b4532a\"/><text x=\"280.8748005856244\" y=\"164.59392313166677\" font-size=\"20\" fill=\"#b4532a\" text-anchor=\"middle\" font-family=\"system-ui\">I</text><text x=\"284.8748005856244\" y=\"212.59392313166677\" font-size=\"20\" fill=\"#b4532a\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">r</text><text x=\"62\" y=\"270\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">A</text><text x=\"458\" y=\"270\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">B</text><text x=\"270\" y=\"46\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">C</text><text x=\"260\" y=\"290\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">c</text><text x=\"372\" y=\"150\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">a</text><text x=\"148\" y=\"150\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">b</text></svg></div>\n<p>Stred I vpísanej kružnice spojíme s vrcholmi: trojuholník sa rozpadne na tri menšie trojuholníky. Každý z nich má za výšku polomer r a za základňu jednu stranu pôvodného trojuholníka. Preto:</p>\n<p>S = ½ · a · r + ½ · b · r + ½ · c · r = ½ · (a + b + c) · r = s · r</p>\n<div class=\"formula\"><span class=\"mini-label\">POLOMER VPÍSANEJ KRUŽNICE</span>r = <span class=\"frac\"><span class=\"frac-num\">S</span><span class=\"frac-den\">s</span></span><span class=\"formula-note\">S je obsah a s polovica obvodu.</span></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Strany 13, 14, 15 cm: S = 84 cm², s = 21 cm.</p><p>r = 84 / 21 = <strong>4 cm</strong></p></div>\n<div class=\"example\"><span class=\"mini-label\">KONTROLA · pravouhlý 3, 4, 5</span><p>S = 6, s = 6, r = 1. Súhlasí s tým, že kružnica vpísaná do tohto trojuholníka má polomer 1.</p></div>",
        "remember": "r = S / s — obsah delený polovicou obvodu."
      },
      {
        "id": "n-in",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "vpísaná kružnica",
        "title": "Polomer vpísanej kružnice",
        "prompt": "Pravouhlý trojuholník má strany 6 cm, 8 cm a 10 cm. Aký polomer v cm má jeho vpísaná kružnica?",
        "validate": "exact",
        "answer": 2,
        "success": "S = 6 · 8 / 2 = 24 cm², s = 24 / 2 = 12 cm, r = S / s = 24 / 12 = 2 cm.",
        "hint": "Vypočítaj obsah (z odvesien) a polovicu obvodu s. Potom r = S / s.",
        "reveal": "Správne je 2: S = 24, s = 12."
      },
      {
        "id": "hunt1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak počítal obsah trojuholníka so stranou a = 10 cm, so stranou b = 13 cm a s výškou v_a = 12 cm (kolmou na stranu a) takto: „S = 10 · 13 / 2 = 65 cm².“ Aký je správny obsah?",
        "options": [
          "65 cm²",
          "120 cm²",
          "60 cm²",
          "156 cm²"
        ],
        "answer": 2,
        "correct": "Správne: k strane a patrí jej výška v_a = 12 cm, S = 10 · 12 / 2 = 60 cm². Žiak použil stranu b, ktorá k výške v_a nepatrí.",
        "hint": "Strana a sa páruje len s výškou, ktorá je na ňu kolmá. Čo má žiak v čitateli navyše?"
      },
      {
        "id": "hunt2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak počítal obsah trojuholníka so stranami 5 cm, 5 cm a 6 cm Herónovým vzorcom a dosadil s = 16 cm. Čo je zle?",
        "options": [
          "Herónov vzorec sa nedá použiť, keď sú dve strany rovnaké.",
          "Výraz s má byť polovica obvodu, teda 8 cm.",
          "Výraz s má byť súčet dvoch strán, teda 11 cm.",
          "Nič, do vzorca sa dosadzuje celý obvod."
        ],
        "answer": 1,
        "correct": "Správne: s = (5 + 5 + 6) / 2 = 8 cm, S = √(8 · 3 · 3 · 2) = √144 = 12 cm². Žiak dosadil celý obvod 16 cm.",
        "hint": "V skutočnosti sa vo vzorci s vyskytuje ako polovica obvodu. Aký je obvod a čo s ním urobiť?"
      },
      {
        "id": "hunt3",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak vypočítal obsah trojuholníka s a = 8 cm a v_a = 5 cm a napísal: „S = 8 · 5 / 2 = 20 cm.“ Čo je na zápise zlé?",
        "options": [
          "Chýba delenie dvoma.",
          "Mal vynásobiť 8 · 5 = 40.",
          "Číselný výsledok aj jednotka sú správne.",
          "Obsah sa udáva v cm², nie v cm."
        ],
        "answer": 3,
        "correct": "Správne: 20 je správne číslo, ale obsah je plocha, takže jednotka musí byť cm². Cm by bola dĺžka (napríklad obvod).",
        "hint": "Číslo žiak vypočítal správne. Pozri sa, čo meria obsah a akú jednotku má plocha."
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha na papier",
        "html": "<p>Odlož zariadenie. Rovnoramenný trojuholník ABC má základňu AB = 18 cm a ramená AC = BC = 15 cm.</p><ol><li>Načrtni ho, zakresli výšku na základňu a vypočítaj jej dĺžku.</li><li>Vypočítaj jeho obvod a obsah.</li><li>Vypočítaj polomer vpísanej kružnice (r = S / s).</li><li>Vypočítaj výšku na rameno AC (použi obsah).</li></ol>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: obvod a obsah trojuholníka",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Rieš na papier, vždy si rob náčrt a pri výsledku uvádzaj jednotku. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Trojuholník má strany 6 cm, 8 cm a 11 cm. Vypočítaj obvod.",
            "answer": "o = 6 + 8 + 11 = <strong>25 cm</strong>."
          },
          {
            "level": "zaklad",
            "text": "Strana trojuholníka je 15 cm a výška na ňu 8 cm. Vypočítaj obsah.",
            "answer": "S = 15 · 8 / 2 = <strong>60 cm²</strong>."
          },
          {
            "level": "zaklad",
            "text": "Obvod rovnostranného trojuholníka je 27 cm. Aká dlhá je strana?",
            "answer": "a = 27 : 3 = <strong>9 cm</strong>."
          },
          {
            "level": "zaklad",
            "text": "Pravouhlý trojuholník má odvesny 7 cm a 24 cm. Vypočítaj preponu, obvod a obsah.",
            "answer": "c² = 49 + 576 = 625, c = <strong>25 cm</strong>. o = 7 + 24 + 25 = <strong>56 cm</strong>. S = 7 · 24 / 2 = <strong>84 cm²</strong>."
          },
          {
            "level": "zaklad",
            "text": "Obsah trojuholníka je 48 cm² a strana a = 16 cm. Aká je výška v_a?",
            "answer": "48 = 16 · v_a / 2 ⇒ v_a = 96 / 16 = <strong>6 cm</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Vypočítaj obsah trojuholníka so stranami 7 cm, 15 cm a 20 cm (Herónov vzorec).",
            "answer": "s = 21, S = √(21 · 14 · 6 · 1) = √1764 = <strong>42 cm²</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Vypočítaj obsah trojuholníka so stranami 11 cm, 13 cm a 20 cm.",
            "answer": "s = 22, S = √(22 · 11 · 9 · 2) = √4356 = <strong>66 cm²</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Dve strany trojuholníka majú 14 cm a 10 cm, uhol medzi nimi je 30°. Vypočítaj obsah. Aký obsah dostaneš pre uhol 150°?",
            "answer": "S = ½ · 14 · 10 · ½ = <strong>35 cm²</strong>. Pre 150° rovnako <strong>35 cm²</strong>, lebo sin 150° = sin 30°."
          },
          {
            "level": "rozsirenie",
            "text": "Rovnoramenný trojuholník má ramená 17 cm a základňu 16 cm. Vypočítaj výšku na základňu, obsah a obvod.",
            "answer": "Polovica základne je 8 cm, v² = 289 − 64 = 225, v = <strong>15 cm</strong>. S = 16 · 15 / 2 = <strong>120 cm²</strong>. o = 16 + 17 + 17 = <strong>50 cm</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Rovnostranný trojuholník má stranu 10 cm. Vypočítaj obvod a obsah (presne aj približne na 0,1 cm²).",
            "answer": "o = <strong>30 cm</strong>. S = 100√3 / 4 = <strong>25√3 cm²</strong> ≈ <strong>43,3 cm²</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Pozemok má tvar trojuholníka so stranami 24 m, 18 m a 30 m. Ukáž, že je pravouhlý, vypočítaj jeho rozlohu a cenu oplotenia, ak 1 m plotu stojí 12 €.",
            "answer": "24² + 18² = 576 + 324 = 900 = 30², pravouhlý. S = 24 · 18 / 2 = <strong>216 m²</strong>. Obvod 72 m, cena 72 · 12 = <strong>864 €</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Vypočítaj polomer vpísanej kružnice trojuholníka so stranami 13 cm, 14 cm, 15 cm.",
            "answer": "S = 84 cm² (Herónov vzorec), s = 21 cm, r = 84 / 21 = <strong>4 cm</strong>."
          },
          {
            "level": "bonus",
            "text": "Trojuholník má strany 13 cm, 14 cm, 15 cm. Vypočítaj výšku v_b na stranu b = 14 cm. (Nápoveda: obsah z Herónovho vzorca.)",
            "answer": "S = 84 cm², 84 = 14 · v_b / 2 ⇒ v_b = 168 / 14 = <strong>12 cm</strong>."
          },
          {
            "level": "bonus",
            "text": "Pre polomer opísanej kružnice platí R = abc / (4S) (vyplýva zo sínusovej vety). Vypočítaj R pre trojuholník 13 cm, 14 cm, 15 cm.",
            "answer": "abc = 2730, 4S = 336, R = 2730 / 336 = <strong>65/8 = 8,125 cm</strong>."
          },
          {
            "level": "bonus",
            "text": "Obsah rovnostranného trojuholníka je 36√3 cm². Aký je jeho obvod?",
            "answer": "a²√3 / 4 = 36√3 ⇒ a² = 144 ⇒ a = 12 cm. o = 3 · 12 = <strong>36 cm</strong>."
          }
        ]
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Prečo delíme dvoma",
        "prompt": "Vlastnými slovami vysvetli, prečo vo vzorci S = a · v / 2 delíme dvoma a prečo je dôležité, aby výška bola kolmá na stranu a.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Trojuholník so stranou a a výškou v zaberá polovicu obdĺžnika a × v, preto je obsah polovica súčinu a · v. Výška musí byť kolmá na stranu, lebo len vtedy je vzdialenosťou protiľahlého vrcholu od priamky strany; šikmá úsečka (napríklad druhá strana) by dala väčšie číslo.",
        "placeholder": "Trojuholník zaberá polovicu…"
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; pri 🔴 alebo 🟡 sa vráť k príslušnému vysvetleniu.",
        "skills": [
          "obvod a obsah — rozdiel a jednotky",
          "S = a · v / 2 a výška z obsahu",
          "pravouhlý, rovnoramenný a rovnostranný trojuholník",
          "Herónov vzorec",
          "obsah cez sínus",
          "polomer vpísanej kružnice"
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
        "text": "Trojuholník má strany 9 cm, 12 cm a 14 cm. Vypočítaj obvod.",
        "answer": "o = 9 + 12 + 14 = 35 cm."
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 3,
        "text": "Strana trojuholníka má 18 cm, výška na ňu 7 cm. Vypočítaj obsah.",
        "answer": "S = 18 · 7 / 2 = 63 cm²."
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 4,
        "text": "Pravouhlý trojuholník má odvesny 8 cm a 15 cm. Vypočítaj preponu, obvod a obsah.",
        "answer": "c = 17 cm, o = 40 cm, S = 60 cm²."
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 5,
        "text": "Rovnoramenný trojuholník má základňu 12 cm a ramená 10 cm. Vypočítaj výšku na základňu, obsah a obvod.",
        "answer": "v² = 100 − 36 = 64, v = 8 cm; S = 12 · 8 / 2 = 48 cm²; o = 32 cm."
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 5,
        "text": "Vypočítaj obsah trojuholníka so stranami 13 cm, 14 cm, 15 cm a polomer jeho vpísanej kružnice.",
        "answer": "s = 21, S = √(21 · 8 · 7 · 6) = 84 cm²; r = 84 / 21 = 4 cm."
      },
      {
        "id": "w6",
        "level": "rozsirenie",
        "space": 4,
        "text": "Dve strany trojuholníka majú 12 cm a 7 cm, uhol medzi nimi je 30°. Vypočítaj obsah.",
        "answer": "S = ½ · 12 · 7 · ½ = 21 cm²."
      },
      {
        "id": "w7",
        "level": "bonus",
        "space": 5,
        "text": "Rovnostranný trojuholník má obsah 16√3 cm². Vypočítaj jeho stranu, výšku (presne) a obvod.",
        "answer": "a² = 64, a = 8 cm; v = a√3 / 2 = 4√3 cm; o = 24 cm."
      }
    ]
  }
});
