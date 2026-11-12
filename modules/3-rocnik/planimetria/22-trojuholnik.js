MathPlatform.registerModule({
  "id": "3-u02-h022",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 22 · Trojuholník",
    "prerequisites": [
      "ZŠ: súčet uhlov v trojuholníku, základné pojmy o trojuholníku a kružnici",
      "2. ročník: Pytagorova veta a jej obrátená veta, sínusová a kosínusová veta",
      "3. ročník: goniometrické funkcie z predchádzajúceho tematického celku"
    ],
    "planContent": [
      "Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka."
    ],
    "planPerformance": [
      "Poznať a vedieť opísať vlastnosti základných rovinných útvarov.",
      "Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov."
    ],
    "goals": [
      "správne označiť prvky trojuholníka a rozlíšiť jeho druhy podľa strán a uhlov",
      "vypočítať chýbajúci vnútorný aj vonkajší uhol a overiť existenciu trojuholníka trojuholníkovou nerovnosťou",
      "rozlíšiť výšku, ťažnicu, os strany a os uhla a vedieť, ktorý význačný bod z nich vzniká (ťažisko, stred kružnice opísanej a vpísanej)",
      "použiť Pytagorovu vetu a jej obrátenú vetu na výpočet strán, výšky a na určenie druhu trojuholníka"
    ],
    "competencies": [
      "prepájať obrázok, označenie a symbolický zápis",
      "používať presný matematický jazyk (protiľahlá strana, prepona, odvesna, päta výšky)",
      "overovať existenciu útvaru podmienkou a argumentovať",
      "pracovať ručne v zošite s náčrtom a jednotkami"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie: reprezentácie, modelovanie, presný matematický jazyk a argumentácia.",
      "Tálesova veta: stred opísanej kružnice pravouhlého trojuholníka leží v strede prepony.",
      "Bonusové úlohy: pomer uhlov 2 : 3 : 4, rebrík opretý o stenu, ťažnica na preponu."
    ],
    "flow": [
      "0–5 min: opakovanie (súčet uhlov, Pytagorova veta, sin/cos/tg)",
      "5–15 min: označenie, druhy, uhly a trojuholníková nerovnosť — spoločne s náčrtmi na tabuli",
      "15–25 min: platforma: výška, ťažnica, význačné body, Pytagorova veta, hľadanie chyby",
      "25–35 min: úloha BEZ MOBILU a zbierka podľa úrovne",
      "35–45 min: rozbor chýb podľa živých výsledkov, prepojenie na obvod a obsah (ďalšia hodina)"
    ],
    "diagnostics": [
      "zamieňa výšku s ťažnicou alebo s osou",
      "v trojuholníkovej nerovnosti overí iba dve z troch nerovností, alebo pripustí rovnosť",
      "pri hľadaní odvesny sčíta namiesto odčítania štvorcov (b² = c² − a²)",
      "vonkajší uhol zamieňa s vnútorným a nesprávne počíta súčet 180°",
      "opisuje stred opísanej kružnice vždy vo vnútri trojuholníka"
    ],
    "partialUse": [
      "pri nedostatku času vynechať bonusové úlohy zbierky a časť o vpísanej a opísanej kružnici",
      "mobil nenahrádza ručné počítanie; náčrty a postupy sa píšu do zošita",
      "pri ŠVVP povoliť oporu: tabuľka pojmov (výška, ťažnica, os) s obrázkom"
    ]
  },
  "student": {
    "title": "Trojuholník",
    "subtitle": "Prvky a druhy trojuholníka · uhly · nerovnosť · výška, ťažnica · Pytagorova veta",
    "intro": "Prejdeš si všetko podstatné o trojuholníku: označenie, druhy, uhly, existenciu, výšky a ťažnice, kružnice a Pytagorovu vetu. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "25–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už o trojuholníku vieme",
        "html": "<p>Trojuholník je najjednoduchší mnohouholník a skoro každý iný rovinný útvar sa dá na trojuholníky rozrezať. Zo ZŠ a 1.–2. ročníka už poznáme:</p>\n<div class=\"term-list\">\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Súčet vnútorných uhlov</div><p class=\"term-rule\">V každom trojuholníku je α + β + γ = 180°.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Pytagorova veta</div><p class=\"term-rule\">V pravouhlom trojuholníku s odvesnami a, b a preponou c platí <span class=\"hl\">a² + b² = c²</span>.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">sin, cos, tg v pravouhlom trojuholníku</div><p class=\"term-rule\">Pomery strán, ktoré určuje veľkosť ostrého uhla (z 2. ročníka a z goniometrie na začiatku tohto ročníka).</p></div>\n</div>\n<p>Dnes si všetko poukladáme: <strong>druhy trojuholníkov</strong>, <strong>trojuholníkovú nerovnosť</strong>, <strong>výšky a ťažnice</strong>, <strong>kružnicu opísanú a vpísanú</strong> a precvičíme Pytagorovu vetu. O obvode a obsahu budeme počítať na ďalšej hodine.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "správne označiť a pomenovať prvky trojuholníka a poznať jeho druhy",
          "vypočítať chýbajúci uhol (aj vonkajší) a overiť, či trojuholník s danými stranami existuje",
          "rozlíšiť výšku, ťažnicu a os a poznať ťažisko, kružnicu opísanú a vpísanú",
          "použiť Pytagorovu vetu na výpočet strán a výšky"
        ]
      },
      {
        "id": "labels",
        "type": "explain",
        "phase": "NAJPRV OBRÁZOK",
        "title": "Ako trojuholník označujeme",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 520 310\" role=\"img\" aria-label=\"Trojuholník ABC so stranami a, b, c a uhlami α, β, γ\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"></g><polygon points=\"70,250 440,250 330,60\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><text x=\"47\" y=\"264\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">A</text><text x=\"462\" y=\"266\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">B</text><text x=\"339\" y=\"45\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">C</text><text x=\"411\" y=\"161\" font-size=\"20\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">a</text><text x=\"180\" y=\"149\" font-size=\"20\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">b</text><text x=\"255\" y=\"282\" font-size=\"20\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">c</text><path d=\"M110.0 250.0 A40 40 0 0 0 102.3 226.4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"129\" y=\"238\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">α</text><path d=\"M420.0 215.4 A40 40 0 0 0 400.0 250.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"386\" y=\"226\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">β</text><path d=\"M300.9 81.2 A36 36 0 0 0 348.0 91.2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"318\" y=\"124\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">γ</text></svg></div>\n<p>Trojuholník má tri <strong>vrcholy</strong> A, B, C, tri <strong>strany</strong> a tri <strong>vnútorné uhly</strong>. Dohoda o označení je dôležitá, lebo podľa nej vieme, ktorý údaj je ktorý:</p>\n<div class=\"term-list\">\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Strana a, b, c</div><p class=\"term-rule\">Strana <span class=\"hl\">a</span> leží <span class=\"hl\">oproti</span> vrcholu A (je to úsečka BC), strana b oproti B, strana c oproti C.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Uhol α, β, γ</div><p class=\"term-rule\">Uhol α leží pri vrchole A, β pri B a γ pri C.</p></div>\n</div>\n<p>Takže napríklad strana c = AB je <em>protiľahlá</em> k uhlu γ a <em>priľahlá</em> k uhlom α a β.</p>",
        "remember": "Veľké písmeno = vrchol, malé písmeno = strana oproti nemu, grécke písmeno = uhol pri ňom."
      },
      {
        "id": "kinds",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Druhy trojuholníkov",
        "html": "<p>Trojuholníky triedime dvoma spôsobmi — <strong>podľa strán</strong> a <strong>podľa uhlov</strong>:</p>\n<div class=\"compare\">\n<div><span class=\"mini-label\">PODĽA STRÁN</span><p><strong>všeobecný</strong> – všetky strany rôzne dlhé<br><strong>rovnoramenný</strong> – dve strany (ramená) rovnaké, tretia je základňa; uhly pri základni sú rovnaké<br><strong>rovnostranný</strong> – všetky tri strany rovnaké, každý uhol má 60°</p></div>\n<div><span class=\"mini-label\">PODĽA UHLOV</span><p><strong>ostrouhlý</strong> – všetky uhly ostré (menej ako 90°)<br><strong>pravouhlý</strong> – jeden uhol je pravý (90°)<br><strong>tupouhlý</strong> – jeden uhol je tupý (väčší ako 90°)</p></div>\n</div>\n<p>Ak je jeden uhol aspoň 90°, ostatné dva musia byť ostré — veď súčet všetkých troch je 180°. Preto má trojuholník <span class=\"hl\">najviac jeden</span> pravý alebo tupý uhol.</p>\n<div class=\"warning\"><strong>Pozor:</strong> Triedenia sa dajú kombinovať. Trojuholník môže byť napríklad pravouhlý <em>aj</em> rovnoramenný (uhly 90°, 45°, 45°). Rovnostranný trojuholník je zároveň rovnoramenný a vždy ostrouhlý.</div>",
        "remember": "Rovnostranný trojuholník je špeciálny prípad rovnoramenného: každý uhol má 60°."
      },
      {
        "id": "kinds-matrix",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "druhy trojuholníkov",
        "title": "Druh podľa uhlov",
        "labels": [
          "ostrouhlý",
          "pravouhlý",
          "tupouhlý"
        ],
        "items": [
          {
            "text": "uhly 50°, 60°, 70°",
            "answer": "ostrouhlý"
          },
          {
            "text": "uhly 90°, 35°, 55°",
            "answer": "pravouhlý"
          },
          {
            "text": "uhly 120°, 30°, 30°",
            "answer": "tupouhlý"
          },
          {
            "text": "uhly 80°, 50°, 50°",
            "answer": "ostrouhlý"
          },
          {
            "text": "uhly 25°, 65°, 90°",
            "answer": "pravouhlý"
          },
          {
            "text": "uhly 100°, 40°, 40°",
            "answer": "tupouhlý"
          }
        ]
      },
      {
        "id": "angles",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Súčet uhlov a vonkajší uhol",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 560 310\" role=\"img\" aria-label=\"Vonkajší uhol β′ pri vrchole B je vedľajší k vnútornému uhlu β\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"></g><polygon points=\"70,250 440,250 330,60\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><line x1=\"440\" y1=\"250\" x2=\"530\" y2=\"250\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"47\" y=\"264\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">A</text><text x=\"462\" y=\"266\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">B</text><text x=\"339\" y=\"45\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">C</text><path d=\"M110.0 250.0 A40 40 0 0 0 102.3 226.4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"129\" y=\"238\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">α</text><path d=\"M300.9 81.2 A36 36 0 0 0 348.0 91.2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"318\" y=\"124\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">γ</text><path d=\"M423.0 220.6 A34 34 0 0 0 406.0 250.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"391\" y=\"229\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">β</text><path d=\"M496.0 250.0 A56 56 0 0 0 411.9 201.5\" fill=\"none\" stroke=\"#b4532a\" stroke-width=\"2\"/><text x=\"518\" y=\"184\" font-size=\"20\" fill=\"#b4532a\" text-anchor=\"middle\" font-family=\"system-ui\">β′</text></svg></div>\n<div class=\"formula\"><span class=\"mini-label\">SÚČET VNÚTORNÝCH UHLOV</span>α + β + γ = 180°</div>\n<p><strong>Vonkajší uhol</strong> pri vrchole vznikne, keď predĺžime jednu stranu: na obrázku je to β′ pri vrchole B. Je <span class=\"hl\">vedľajší</span> k vnútornému uhlu β, takže β′ = 180° − β. Pretože α + β + γ = 180°, platí 180° − β = α + γ, teda:</p>\n<div class=\"formula\"><span class=\"mini-label\">VONKAJŠÍ UHOL</span>β′ = α + γ<span class=\"formula-note\">Vonkajší uhol sa rovná súčtu dvoch vnútorných uhlov pri <em>ostatných</em> vrcholoch.</span></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1</span><p>V trojuholníku je α = 52° a β = 71°. Vypočítaj γ.</p><p>γ = 180° − 52° − 71° = 180° − 123° = <strong>57°</strong></p></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2 · rovnoramenný</span><p>Rovnoramenný trojuholník má pri vrchole uhol 36°. Aké veľké sú uhly pri základni?</p><p>Uhly pri základni sú rovnaké, označme ich x: 2x + 36° = 180°, 2x = 144°, x = <strong>72°</strong>.</p></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 3 · vonkajší uhol</span><p>Vonkajší uhol pri vrchole C má 130° a α = 80°. Vypočítaj β.</p><p>Vonkajší uhol pri C = α + β, teda 130° = 80° + β, β = <strong>50°</strong>.</p></div>\n<div class=\"warning\"><strong>Pozor:</strong> Vonkajší uhol nie je vnútorný uhol a do súčtu 180° sa nezapočítava. Pri vrchole dáva vnútorný aj vonkajší uhol spolu vždy 180°.</div>",
        "remember": "α + β + γ = 180° a vonkajší uhol = súčet dvoch nevedľajších vnútorných uhlov."
      },
      {
        "id": "n-angle",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "uhly v trojuholníku",
        "title": "Tretí uhol",
        "prompt": "V trojuholníku ABC je α = 47° a β = 68°. Vypočítaj uhol γ v stupňoch.",
        "validate": "exact",
        "answer": 65,
        "success": "γ = 180° − 47° − 68° = 65°.",
        "hint": "Súčet všetkých troch vnútorných uhlov je 180°.",
        "reveal": "Správne je 65: 47 + 68 = 115 a 180 − 115 = 65."
      },
      {
        "id": "n-iso",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "uhly v trojuholníku",
        "title": "Rovnoramenný trojuholník",
        "prompt": "Rovnoramenný trojuholník ABC so základňou AB má pri vrchole C uhol 44°. Koľko stupňov má uhol α pri základni?",
        "validate": "exact",
        "answer": 68,
        "success": "2α + 44° = 180°, 2α = 136°, α = 68°.",
        "hint": "Uhly pri základni sú rovnaké. Zapíš rovnicu 2α + 44° = 180°.",
        "reveal": "Správne je 68: (180 − 44) : 2 = 68."
      },
      {
        "id": "c-ext",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "vonkajší uhol",
        "question": "Vonkajší uhol pri vrchole C trojuholníka ABC má 125° a vnútorný uhol α má 50°. Aký veľký je vnútorný uhol β?",
        "options": [
          "55°",
          "130°",
          "75°",
          "175°"
        ],
        "answer": 2,
        "correct": "Správne: vonkajší uhol pri C je α + β, teda β = 125° − 50° = 75°. (Vnútorný uhol γ má 55°.)",
        "hint": "Vonkajší uhol pri C sa rovná súčtu uhlov pri ostatných dvoch vrcholoch. Čo z toho už poznáš?"
      },
      {
        "id": "ineq",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Trojuholníková nerovnosť",
        "html": "<p>Nie z každých troch dĺžok sa dá trojuholník zostrojiť. Predstav si, že máš tyčky dlhé 3 cm, 4 cm a 8 cm. Dve kratšie dokopy dajú 7 cm, ale tretia má 8 cm — nikdy by sa „nedotkli“ v treťom vrchole.</p>\n<div class=\"formula\"><span class=\"mini-label\">TROJUHOLNÍKOVÁ NEROVNOSŤ</span>a + b &gt; c, b + c &gt; a, a + c &gt; b<span class=\"formula-note\">Súčet dĺžok ľubovoľných dvoch strán je väčší ako dĺžka tretej strany.</span></div>\n<p>V praxi stačí porovnať <span class=\"hl\">dve kratšie strany s najdlhšou</span> — ostatné dve nerovnosti platia vždy samy.</p>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Existuje trojuholník so stranami 3 cm, 4 cm, 8 cm?</p><p>Najdlhšia je 8. Dve kratšie: 3 + 4 = 7. Je 7 &gt; 8? Nie. <strong>Trojuholník neexistuje.</strong></p><p>A so stranami 5 cm, 6 cm, 10 cm? 5 + 6 = 11 &gt; 10, <strong>existuje.</strong></p></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD · aké môže byť c?</span><p>Dve strany majú 5 cm a 9 cm. Aká môže byť tretia strana c?</p><p>c &lt; 5 + 9 = 14 a súčasne 9 &lt; 5 + c, teda c &gt; 4. Platí <strong>4 &lt; c &lt; 14</strong> (v cm).</p></div>\n<div class=\"warning\"><strong>Pozor:</strong> Ak sa súčet rovná tretej strane (napríklad 4 + 6 = 10), trojuholník neexistuje — body ležia na jednej priamke a vznikne len úsečka.</div>",
        "remember": "Trojuholník existuje, keď dve kratšie strany dokopy sú dlhšie ako najdlhšia strana."
      },
      {
        "id": "ineq-sort",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "trojuholníková nerovnosť",
        "title": "Existuje trojuholník?",
        "question": "Rozhodni, či sa dá zostrojiť trojuholník so stranami danej dĺžky (v cm).",
        "labels": [
          "Existuje",
          "Neexistuje"
        ],
        "items": [
          {
            "text": "3, 4, 5",
            "answer": true,
            "why": "3 + 4 = 7 > 5."
          },
          {
            "text": "2, 3, 6",
            "answer": false,
            "why": "2 + 3 = 5 < 6."
          },
          {
            "text": "5, 5, 10",
            "answer": false,
            "why": "5 + 5 = 10, nie je väčšie ako 10 – body by ležali na priamke."
          },
          {
            "text": "7, 8, 9",
            "answer": true,
            "why": "7 + 8 = 15 > 9."
          },
          {
            "text": "1, 10, 10",
            "answer": true,
            "why": "1 + 10 = 11 > 10; dve dlhé strany a veľmi krátka tretia sú v poriadku."
          },
          {
            "text": "4, 4, 9",
            "answer": false,
            "why": "4 + 4 = 8 < 9."
          }
        ]
      },
      {
        "id": "n-ineq",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "trojuholníková nerovnosť",
        "title": "Najdlhšia možná strana",
        "prompt": "Dve strany trojuholníka majú dĺžky 5 cm a 9 cm. Tretia strana má celočíselnú dĺžku v cm. Aká je najväčšia možná dĺžka tretej strany v cm?",
        "validate": "exact",
        "answer": 13,
        "success": "Tretia strana musí byť menšia ako 5 + 9 = 14, najväčšie celé číslo je 13.",
        "hint": "Tretia strana musí byť menšia ako súčet 5 + 9. Rovnosť nestačí.",
        "reveal": "Správne je 13: pre 14 by 5 + 9 = 14 nebolo väčšie ako 14."
      },
      {
        "id": "pyth",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Pytagorova veta a pravouhlý trojuholník",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 440 310\" role=\"img\" aria-label=\"Pravouhlý trojuholník ABC s pravým uhlom pri C, odvesnami a, b a preponou c\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"></g><polygon points=\"100,100 320,250 100,250\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><polyline points=\"100,234 116,234 116,250\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"87\" y=\"89\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">A</text><text x=\"341\" y=\"264\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">B</text><text x=\"82\" y=\"269\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">C</text><text x=\"210\" y=\"282\" font-size=\"20\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">a</text><text x=\"78\" y=\"180\" font-size=\"20\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">b</text><text x=\"226\" y=\"160\" font-size=\"20\" fill=\"#b4532a\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">c</text><text x=\"262\" y=\"132\" font-size=\"16\" fill=\"#b4532a\" text-anchor=\"middle\" font-family=\"system-ui\">prepona</text></svg></div>\n<p>V pravouhlom trojuholníku sa strana oproti pravému uhlu volá <strong>prepona</strong> (c) a je vždy najdlhšia. Zvyšné dve strany sú <strong>odvesny</strong> (a, b).</p>\n<div class=\"formula\"><span class=\"mini-label\">PYTAGOROVA VETA</span>a² + b² = c²<span class=\"formula-note\">Platí aj obrátene: ak v trojuholníku platí a² + b² = c², je pravouhlý s preponou c.</span></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1 · prepona</span><p>a = 6 cm, b = 8 cm</p><p>c² = 6² + 8² = 36 + 64 = 100, c = <strong>10 cm</strong></p></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2 · odvesna</span><p>c = 17 cm, a = 8 cm. Hľadáme b.</p><p>b² = c² − a² = 289 − 64 = 225, b = <strong>15 cm</strong></p></div>\n<p>Vďaka obrátenej vete vieme z dĺžok strán určiť aj druh trojuholníka. Najdlhšiu stranu označíme c a porovnáme c² so súčtom a² + b²:</p>\n<div class=\"compare\">\n<div><span class=\"mini-label\">c² &lt; a² + b²</span><p>ostrouhlý</p></div>\n<div><span class=\"mini-label\">c² = a² + b²</span><p>pravouhlý</p></div>\n<div><span class=\"mini-label\">c² &gt; a² + b²</span><p>tupouhlý</p></div>\n</div>\n<div class=\"warning\"><strong>Pozor:</strong> Je c² = a² + b², nie c = a + b. A pri hľadaní odvesny sa <em>odčítava</em>: b² = c² − a². Prepona je vždy najdlhšia strana.</div>",
        "remember": "Pytagorova veta pomáha nielen počítať strany, ale aj určiť, či je trojuholník pravouhlý, ostrouhlý alebo tupouhlý."
      },
      {
        "id": "n-hyp",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "Pytagorova veta",
        "title": "Prepona",
        "prompt": "Pravouhlý trojuholník má odvesny 9 cm a 12 cm. Aká dlhá je prepona v cm?",
        "validate": "exact",
        "answer": 15,
        "success": "c² = 81 + 144 = 225, c = 15 cm.",
        "hint": "Spočítaj a² + b² a potom odmocni.",
        "reveal": "Správne je 15: 9² + 12² = 225 = 15²."
      },
      {
        "id": "n-leg",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "Pytagorova veta",
        "title": "Odvesna",
        "prompt": "Pravouhlý trojuholník má preponu 25 cm a jednu odvesnu 7 cm. Aká dlhá je druhá odvesna v cm?",
        "validate": "exact",
        "answer": 24,
        "success": "b² = 25² − 7² = 625 − 49 = 576, b = 24 cm.",
        "hint": "Odvesnu hľadáš odčítaním: b² = c² − a².",
        "reveal": "Správne je 24: 625 − 49 = 576 = 24²."
      },
      {
        "id": "kinds-sides",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "druh podľa strán",
        "title": "Druh trojuholníka zo strán",
        "labels": [
          "ostrouhlý",
          "pravouhlý",
          "tupouhlý"
        ],
        "items": [
          {
            "text": "strany 5, 12, 13 cm",
            "answer": "pravouhlý"
          },
          {
            "text": "strany 4, 5, 6 cm",
            "answer": "ostrouhlý"
          },
          {
            "text": "strany 4, 5, 7 cm",
            "answer": "tupouhlý"
          },
          {
            "text": "strany 7, 24, 25 cm",
            "answer": "pravouhlý"
          },
          {
            "text": "strany 6, 7, 8 cm",
            "answer": "ostrouhlý"
          },
          {
            "text": "strany 8, 9, 15 cm",
            "answer": "tupouhlý"
          }
        ]
      },
      {
        "id": "lines",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Výška, ťažnica a stredná priečka",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 520 310\" role=\"img\" aria-label=\"Výška v z vrcholu C na stranu AB (päta D, pravý uhol) a ťažnica t z vrcholu C do stredu S strany AB\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"></g><polygon points=\"70,250 440,250 360,60\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><line x1=\"360\" y1=\"60\" x2=\"360\" y2=\"250\" stroke=\"#1f6f5c\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><line x1=\"360\" y1=\"60\" x2=\"255\" y2=\"250\" stroke=\"#b4532a\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><polyline points=\"360,236 346,236 346,250\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"255\" cy=\"250\" r=\"5\" fill=\"#b4532a\"/><circle cx=\"360\" cy=\"250\" r=\"4\" fill=\"#1f6f5c\"/><text x=\"47\" y=\"264\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">A</text><text x=\"462\" y=\"266\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">B</text><text x=\"372\" y=\"46\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">C</text><text x=\"384\" y=\"276\" font-size=\"20\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\">D</text><text x=\"241\" y=\"276\" font-size=\"20\" fill=\"#b4532a\" text-anchor=\"middle\" font-family=\"system-ui\">S</text><text x=\"380\" y=\"160\" font-size=\"20\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">v</text><text x=\"283\" y=\"150\" font-size=\"20\" fill=\"#b4532a\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">t</text><text x=\"160\" y=\"304\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\" font-style=\"italic\">c = AB</text></svg></div>\n<div class=\"term-list\">\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Výška v<sub>c</sub></div><p class=\"term-rule\">Úsečka z vrcholu <span class=\"hl\">kolmo</span> na protiľahlú stranu (alebo jej predĺženie). Pri vrchole C na obrázku je to CD; D je päta výšky. Označuje sa v<sub>a</sub>, v<sub>b</sub>, v<sub>c</sub> podľa strany, na ktorú je kolmá.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Ťažnica t<sub>c</sub></div><p class=\"term-rule\">Úsečka z vrcholu do <span class=\"hl\">stredu</span> protiľahlej strany. Na obrázku je to CS, kde S je stred strany AB.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Stredná priečka</div><p class=\"term-rule\">Úsečka spájajúca stredy dvoch strán. Je rovnobežná s treťou stranou a má <span class=\"hl\">polovičnú</span> dĺžku.</p></div>\n</div>\n<p>Každý trojuholník má tri výšky aj tri ťažnice. Výška a ťažnica z toho istého vrcholu sú <em>rôzne</em> úsečky, okrem prípadu, keď je trojuholník rovnoramenný a vychádzajú z vrcholu oproti základni — vtedy splynú (aj s osou uhla pri vrchole).</p>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD · výška rovnoramenného trojuholníka</span><p>Rovnoramenný trojuholník má základňu 10 cm a ramená 13 cm. Výška na základňu ju rozpolí na dve časti po 5 cm a vzniknú dva pravouhlé trojuholníky s preponou 13 cm.</p><p>v² = 13² − 5² = 169 − 25 = 144, v = <strong>12 cm</strong></p></div>\n<div class=\"warning\"><strong>Pozor:</strong> Výška je <em>kolmá</em>, ťažnica ide do <em>stredu</em>. Nezamieňaj ich — v tupouhlom trojuholníku dokonca výška z ostrého vrcholu padne mimo trojuholníka, na predĺženie strany.</div>",
        "remember": "Výška = kolmica z vrcholu na protiľahlú stranu, ťažnica = spojnica vrcholu so stredom protiľahlej strany."
      },
      {
        "id": "n-height",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "výška rovnoramenného",
        "title": "Výška na základňu",
        "prompt": "Rovnoramenný trojuholník má základňu 10 cm a ramená 13 cm. Aká dlhá je výška na základňu v cm?",
        "validate": "exact",
        "answer": 12,
        "success": "Výška rozpolí základňu: v² = 13² − 5² = 144, v = 12 cm.",
        "hint": "Výška rozpolí základňu na dve časti po 5 cm. Použi Pytagorovu vetu s preponou 13.",
        "reveal": "Správne je 12: 169 − 25 = 144."
      },
      {
        "id": "n-eq",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "výška rovnostranného",
        "title": "Štvorec výšky",
        "prompt": "Rovnostranný trojuholník má stranu 6 cm. Koľko je v² (štvorec výšky) v cm²? Výška rozpolí základňu na časti po 3 cm.",
        "validate": "exact",
        "answer": 27,
        "success": "v² = 6² − 3² = 36 − 9 = 27 (v = √27 = 3√3 cm).",
        "hint": "Pytagorova veta: prepona je rameno 6, jedna odvesna je polovica základne 3.",
        "reveal": "Správne je 27: 36 − 9 = 27, takže v = 3√3 cm ≈ 5,2 cm."
      },
      {
        "id": "centers",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Ťažisko, kružnica opísaná a vpísaná",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 520 310\" role=\"img\" aria-label=\"Tri ťažnice sa pretínajú v ťažisku T\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"></g><polygon points=\"70,250 450,250 300,60\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><line x1=\"70\" y1=\"250\" x2=\"375\" y2=\"155\" stroke=\"#b4532a\" stroke-width=\"2.5\"/><line x1=\"450\" y1=\"250\" x2=\"185\" y2=\"155\" stroke=\"#b4532a\" stroke-width=\"2.5\"/><line x1=\"300\" y1=\"60\" x2=\"260\" y2=\"250\" stroke=\"#b4532a\" stroke-width=\"2.5\"/><circle cx=\"273.3333333333333\" cy=\"186.66666666666666\" r=\"6\" fill=\"#b4532a\"/><circle cx=\"375\" cy=\"155\" r=\"4\" fill=\"currentColor\"/><circle cx=\"185\" cy=\"155\" r=\"4\" fill=\"currentColor\"/><circle cx=\"260\" cy=\"250\" r=\"4\" fill=\"currentColor\"/><text x=\"47\" y=\"264\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">A</text><text x=\"473\" y=\"265\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">B</text><text x=\"305\" y=\"44\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">C</text><text x=\"289.3333333333333\" y=\"212.66666666666666\" font-size=\"20\" fill=\"#b4532a\" text-anchor=\"middle\" font-family=\"system-ui\">T</text><text x=\"399\" y=\"153\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">S<tspan dy=\"5\" font-size=\"14\">a</tspan></text><text x=\"161\" y=\"153\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">S<tspan dy=\"5\" font-size=\"14\">b</tspan></text><text x=\"260\" y=\"278\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">S<tspan dy=\"5\" font-size=\"14\">c</tspan></text></svg></div>\n<p>Tri ťažnice sa vždy pretínajú v jednom bode — v <strong>ťažisku T</strong>. Ťažisko delí každú ťažnicu v pomere <span class=\"hl\">2 : 1</span>, pričom dlhšia časť je pri vrchole (napr. CT : TS<sub>c</sub> = 2 : 1, teda CT = ⅔ ťažnice). Ťažisko vždy leží vo vnútri trojuholníka.</p>\n<p>Podobne sa v jednom bode pretínajú aj ďalšie trojice priamok — a každý z týchto bodov má svoju úlohu:</p>\n<div class=\"term-list\">\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Stred kružnice opísanej (O)</div><p class=\"term-rule\">Priesečník <span class=\"hl\">osí strán</span>. Je rovnako vzdialený od všetkých troch <em>vrcholov</em>; kružnica prechádza vrcholmi, polomer R.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Stred kružnice vpísanej (I)</div><p class=\"term-rule\">Priesečník <span class=\"hl\">osí vnútorných uhlov</span>. Je rovnako vzdialený od všetkých troch <em>strán</em>; kružnica sa strán dotýka, polomer r.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Ortocentrum</div><p class=\"term-rule\">Priesečník priamok, na ktorých ležia <span class=\"hl\">výšky</span>.</p></div>\n</div>\n<div class=\"logic-visual\"><svg viewBox=\"0 0 760 335\" role=\"img\" aria-label=\"Vľavo kružnica opísaná so stredom O, vpravo kružnica vpísaná so stredom I\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"></g><polygon points=\"80,235 300,235 190,44.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><circle cx=\"190.0\" cy=\"171.5\" r=\"127.0\" fill=\"none\" stroke=\"#1f6f5c\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><line x1=\"80\" y1=\"235\" x2=\"190\" y2=\"171.50853018372703\" stroke=\"#1f6f5c\" stroke-width=\"2.5\"/><line x1=\"300\" y1=\"235\" x2=\"190\" y2=\"171.50853018372703\" stroke=\"#1f6f5c\" stroke-width=\"2.5\"/><line x1=\"190\" y1=\"44.5\" x2=\"190\" y2=\"171.50853018372703\" stroke=\"#1f6f5c\" stroke-width=\"2.5\"/><circle cx=\"190\" cy=\"171.50853018372703\" r=\"5\" fill=\"#1f6f5c\"/><text x=\"194\" y=\"197.50853018372703\" font-size=\"20\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\">O</text><text x=\"190\" y=\"325\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">kružnica opísaná</text><polygon points=\"460,235 680,235 570,44.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><circle cx=\"570.0\" cy=\"171.5\" r=\"63.5\" fill=\"none\" stroke=\"#b4532a\" stroke-width=\"2.5\"/><circle cx=\"570\" cy=\"171.49573555259158\" r=\"5\" fill=\"#b4532a\"/><text x=\"574\" y=\"197.49573555259158\" font-size=\"20\" fill=\"#b4532a\" text-anchor=\"middle\" font-family=\"system-ui\">I</text><text x=\"570\" y=\"325\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">kružnica vpísaná</text></svg></div>\n<p>Osou strany rozumieme kolmicu vedenú stredom strany, osou uhla polpriamku, ktorá uhol rozpoľuje.</p>\n<div class=\"logic-visual\"><svg viewBox=\"0 0 480 330\" role=\"img\" aria-label=\"Pravouhlý trojuholník ABC; stred kružnice opísanej O leží v strede prepony AB\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"></g><polygon points=\"140,120 360,270 140,270\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><circle cx=\"250.0\" cy=\"195.0\" r=\"133.1\" fill=\"none\" stroke=\"#1f6f5c\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><circle cx=\"250\" cy=\"195\" r=\"5\" fill=\"#1f6f5c\"/><polyline points=\"140,254 156,254 156,270\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"254\" y=\"183\" font-size=\"20\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\">O</text><text x=\"124\" y=\"116\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">A</text><text x=\"382\" y=\"292\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">B</text><text x=\"126\" y=\"296\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">C</text></svg></div>\n<p><strong>Pravouhlý trojuholník:</strong> stred opísanej kružnice leží v strede <span class=\"hl\">prepony</span>, takže R = c/2 (Tálesova veta). Ortocentrum je vo vrchole pravého uhla.</p>\n<div class=\"warning\"><strong>Pozor:</strong> V ostrouhlom trojuholníku leží stred opísanej kružnice vo vnútri, v pravouhlom na prepone a v tupouhlom <em>mimo</em> trojuholníka. Stred vpísanej kružnice a ťažisko sú vždy vo vnútri.</div>",
        "remember": "Ťažnice → ťažisko (2 : 1 od vrcholu). Osi strán → opísaná kružnica. Osi uhlov → vpísaná kružnica."
      },
      {
        "id": "centers-matrix",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "význačné body",
        "title": "Ktorý bod to je?",
        "labels": [
          "ťažisko",
          "stred opísanej kružnice",
          "stred vpísanej kružnice"
        ],
        "items": [
          {
            "text": "priesečník ťažníc",
            "answer": "ťažisko"
          },
          {
            "text": "priesečník osí strán",
            "answer": "stred opísanej kružnice"
          },
          {
            "text": "priesečník osí vnútorných uhlov",
            "answer": "stred vpísanej kružnice"
          },
          {
            "text": "bod rovnako vzdialený od troch vrcholov",
            "answer": "stred opísanej kružnice"
          },
          {
            "text": "bod rovnako vzdialený od troch strán",
            "answer": "stred vpísanej kružnice"
          },
          {
            "text": "bod, ktorý delí každú ťažnicu v pomere 2 : 1",
            "answer": "ťažisko"
          }
        ]
      },
      {
        "id": "n-cog",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "ťažisko",
        "title": "Vzdialenosť od vrcholu",
        "prompt": "Ťažnica t_a trojuholníka má dĺžku 15 cm. Ťažisko T ju delí v pomere 2 : 1 (dlhšia časť pri vrchole A). Aká je vzdialenosť AT v cm?",
        "validate": "exact",
        "answer": 10,
        "success": "AT = ⅔ · 15 = 10 cm (a zvyšok TS_a = 5 cm).",
        "hint": "Ťažnicu rozdeľ na 3 rovnaké diely; vrcholu A patria 2 z nich.",
        "reveal": "Správne je 10: 15 : 3 = 5 a 2 · 5 = 10."
      },
      {
        "id": "n-R",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "opísaná kružnica",
        "title": "Polomer opísanej kružnice",
        "prompt": "Pravouhlý trojuholník má odvesny 6 cm a 8 cm. Aký polomer v cm má jeho opísaná kružnica?",
        "validate": "exact",
        "answer": 5,
        "success": "Prepona c = 10 cm a R = c/2 = 5 cm.",
        "hint": "Najprv Pytagorovou vetou nájdi preponu. Stred opísanej kružnice leží v strede prepony.",
        "reveal": "Správne je 5: c = √(36 + 64) = 10, R = 10 : 2 = 5."
      },
      {
        "id": "n-mid",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "stredná priečka",
        "title": "Stredná priečka",
        "prompt": "Stredná priečka trojuholníka má dĺžku 8,5 cm. Akú dĺžku v cm má strana, ktorej je rovnobežná?",
        "validate": "exact",
        "answer": 17,
        "success": "Stredná priečka má polovičnú dĺžku strany, preto je strana 2 · 8,5 = 17 cm.",
        "hint": "Priečka je polovica rovnobežnej strany. Čo teda urobíš s 8,5?",
        "reveal": "Správne je 17: 8,5 · 2 = 17."
      },
      {
        "id": "c-always",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "vlastnosti",
        "question": "Ktoré tvrdenie platí pre každý trojuholník?",
        "options": [
          "Ťažisko leží vždy vo vnútri trojuholníka.",
          "Stred opísanej kružnice leží vždy vo vnútri trojuholníka.",
          "Každá výška leží vždy vo vnútri trojuholníka.",
          "Výška a ťažnica vedené z toho istého vrcholu sú vždy rovnako dlhé."
        ],
        "answer": 0,
        "correct": "Správne: ťažnice vedú do stredov strán, ich priesečník je preto vždy vnútri. Ostatné tvrdenia zlyhajú napríklad pri tupouhlom alebo pri všeobecnom trojuholníku.",
        "hint": "Skús si predstaviť tupouhlý trojuholník a pozri, kde padne stred opísanej kružnice a výška z ostrého vrcholu."
      },
      {
        "id": "c-height",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "výška",
        "question": "Pravouhlý trojuholník má odvesny 3 cm a 4 cm a preponu 5 cm. Aká dlhá je jeho výška na odvesnu 3 cm?",
        "options": [
          "5 cm",
          "4 cm",
          "2,4 cm",
          "3 cm"
        ],
        "answer": 1,
        "correct": "Správne: odvesny sú na seba kolmé, preto odvesna 4 cm je výškou na odvesnu 3 cm. (Číslo 2,4 cm je výška na preponu.)",
        "hint": "Výška je kolmá na tú stranu, ku ktorej patrí. Ktorá strana je kolmá na stranu 3 cm?"
      },
      {
        "id": "hunt1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak tvrdí: „Trojuholník so stranami 5 cm, 6 cm a 12 cm existuje, lebo 5 + 12 > 6 a 6 + 12 > 5.“ Čo je na jeho úvahe zlé?",
        "options": [
          "Nerovnosti mal zapísať s rovnosťou, 5 + 12 = 6 + 12.",
          "Má sčítať všetky tri strany a porovnať so 180.",
          "Nič, úvaha je správna.",
          "Overil iba dve nerovnosti; tretia 5 + 6 > 12 neplatí, preto trojuholník neexistuje."
        ],
        "answer": 3,
        "correct": "Správne: musia platiť všetky tri nerovnosti. Stačí overiť tú najnebezpečnejšiu — dve kratšie strany proti najdlhšej: 5 + 6 = 11 &lt; 12.",
        "hint": "Aké tri nerovnosti musia platiť naraz? Ktorú žiak neskúšal?"
      },
      {
        "id": "hunt2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak počítal preponu pravouhlého trojuholníka s odvesnami 5 cm a 12 cm: „c = 5 + 12 = 17 cm.“ Ktorý výsledok je správny?",
        "options": [
          "13 cm",
          "17 cm",
          "169 cm",
          "7 cm"
        ],
        "answer": 0,
        "correct": "Správne: c² = 5² + 12² = 25 + 144 = 169, c = 13 cm. Prepona nemôže byť rovná súčtu odvesien — to by porušovalo trojuholníkovú nerovnosť.",
        "hint": "Pytagorova veta sčítava štvorce strán, nie strany. Nezabudni na záver odmocniť."
      },
      {
        "id": "hunt3",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak: „Vonkajší uhol pri vrchole B má 110°, takže vnútorný uhol β má tiež 110°.“ Aký veľký je vnútorný uhol β?",
        "options": [
          "110°",
          "20°",
          "70°",
          "250°"
        ],
        "answer": 2,
        "correct": "Správne: vnútorný a vonkajší uhol pri tom istom vrchole sú vedľajšie, dokopy 180°. β = 180° − 110° = 70°.",
        "hint": "Vedľajšie uhly dávajú dokopy priamy uhol. Koľko stupňov má priamy uhol?"
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha na papier",
        "html": "<p>Odlož zariadenie. Rovnoramenný trojuholník ABC má základňu AB = 12 cm a ramená AC = BC = 10 cm.</p><ol><li>Načrtni ho, zakresli výšku na základňu a vypočítaj jej dĺžku.</li><li>Pomocou c² a a² + b² (c je najdlhšia strana) rozhodni, či je trojuholník ostrouhlý, pravouhlý alebo tupouhlý.</li><li>Ťažisko T leží na výške z vrcholu C (výška je zároveň ťažnica). Aká je vzdialenosť ťažiska T od základne AB?</li></ol>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: trojuholník",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Rieš na papier, k úlohám si rob náčrt a zapisuj jednotky. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "V trojuholníku je α = 72° a β = 35°. Vypočítaj γ a rozhodni, aký je trojuholník podľa uhlov.",
            "answer": "γ = 180° − 72° − 35° = <strong>73°</strong>. Všetky uhly sú ostré, trojuholník je <strong>ostrouhlý</strong>."
          },
          {
            "level": "zaklad",
            "text": "Rovnoramenný trojuholník má uhol pri základni 50°. Aký veľký je uhol pri vrchole?",
            "answer": "Dva uhly pri základni: 2 · 50° = 100°, pri vrchole 180° − 100° = <strong>80°</strong>."
          },
          {
            "level": "zaklad",
            "text": "Existuje trojuholník so stranami (a) 7 cm, 8 cm, 16 cm; (b) 6 cm, 6 cm, 11 cm?",
            "answer": "(a) 7 + 8 = 15 &lt; 16, <strong>neexistuje</strong>. (b) 6 + 6 = 12 &gt; 11, <strong>existuje</strong>."
          },
          {
            "level": "zaklad",
            "text": "Pravouhlý trojuholník má odvesny 15 cm a 20 cm. Vypočítaj preponu.",
            "answer": "c² = 225 + 400 = 625, c = <strong>25 cm</strong>."
          },
          {
            "level": "zaklad",
            "text": "Pravouhlý trojuholník má preponu 26 cm a odvesnu 10 cm. Vypočítaj druhú odvesnu.",
            "answer": "b² = 676 − 100 = 576, b = <strong>24 cm</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Vonkajší uhol pri vrchole A má 140° a β = 45°. Vypočítaj γ a rozhodni, aký je trojuholník podľa uhlov.",
            "answer": "Vonkajší uhol pri A = β + γ, 140° = 45° + γ, γ = <strong>95°</strong>. Jeden uhol je tupý, trojuholník je <strong>tupouhlý</strong>. (Kontrola: α = 40°, 40° + 45° + 95° = 180°.)"
          },
          {
            "level": "rozsirenie",
            "text": "Obvod rovnoramenného trojuholníka je 36 cm a jeho ramená majú 13 cm. Vypočítaj základňu a výšku na základňu.",
            "answer": "Základňa 36 − 2 · 13 = <strong>10 cm</strong>. Výška: v² = 13² − 5² = 144, v = <strong>12 cm</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Rovnostranný trojuholník má stranu 10 cm. Vypočítaj v² a výšku (zaokrúhli na 0,1 cm).",
            "answer": "v² = 10² − 5² = 75, v = √75 = 5√3 ≈ <strong>8,7 cm</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Ťažnica t_c má 12 cm. Ako ďaleko je ťažisko T od vrcholu C a ako ďaleko od stredu strany AB?",
            "answer": "CT = ⅔ · 12 = <strong>8 cm</strong>, TS_c = ⅓ · 12 = <strong>4 cm</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Pravouhlý trojuholník má odvesny 9 cm a 40 cm. Vypočítaj preponu a polomer opísanej kružnice.",
            "answer": "c² = 81 + 1600 = 1681, c = <strong>41 cm</strong>. R = 41 : 2 = <strong>20,5 cm</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Dve strany trojuholníka majú 4 cm a 9 cm. Vypíš všetky celočíselné dĺžky (v cm), ktoré môže mať tretia strana.",
            "answer": "9 − 4 &lt; c &lt; 9 + 4, teda 5 &lt; c &lt; 13: c = 6, 7, 8, 9, 10, 11, 12 → <strong>7 možností</strong>."
          },
          {
            "level": "bonus",
            "text": "Trojuholník má uhly v pomere 2 : 3 : 4. Vypočítaj uhly a rozhodni, aký je trojuholník.",
            "answer": "2k + 3k + 4k = 180°, 9k = 180°, k = 20°. Uhly <strong>40°, 60°, 80°</strong> – všetky ostré, trojuholník je <strong>ostrouhlý</strong>."
          },
          {
            "level": "bonus",
            "text": "Rebrík dlhý 6,5 m je oprený o stenu tak, že jeho päta je 2,5 m od steny. Do akej výšky dosiahne? Nakresli náčrt.",
            "answer": "Pravouhlý trojuholník s preponou 6,5 m a odvesnou 2,5 m: v² = 42,25 − 6,25 = 36, v = <strong>6 m</strong>."
          },
          {
            "level": "bonus",
            "text": "Pravouhlý trojuholník má odvesny 5 cm a 12 cm. Aká je dĺžka ťažnice na preponu? Ako súvisí s polomerom opísanej kružnice?",
            "answer": "c = 13 cm. Stred prepony je stredom opísanej kružnice, takže ťažnica na preponu je zároveň polomer R = <strong>6,5 cm</strong>."
          }
        ]
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Existencia trojuholníka",
        "prompt": "Vlastnými slovami vysvetli, prečo sa z úsečiek 3 cm, 4 cm a 8 cm trojuholník zostrojiť nedá, a ako to rýchlo overíš pre ľubovoľné tri dĺžky.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Dve kratšie úsečky (3 cm a 4 cm) dokopy majú len 7 cm, čo je menej ako 8 cm, takže by sa nemohli dotknúť v treťom vrchole. Pre ľubovoľné tri dĺžky porovnám súčet dvoch kratších s najdlhšou: ak je súčet väčší, trojuholník existuje, ak je rovný alebo menší, neexistuje.",
        "placeholder": "Úsečky 3 cm a 4 cm dokopy…"
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; pri 🔴 alebo 🟡 sa vráť k príslušnému vysvetleniu.",
        "skills": [
          "označenie a druhy trojuholníkov",
          "súčet a vonkajší uhol",
          "trojuholníková nerovnosť",
          "výška, ťažnica, ťažisko",
          "opísaná a vpísaná kružnica",
          "Pytagorova veta v trojuholníku"
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
        "text": "V trojuholníku ABC je α = 58° a γ = 49°. Vypočítaj β a urči druh trojuholníka podľa uhlov.",
        "answer": "β = 180° − 58° − 49° = 73°; všetky uhly sú ostré, ostrouhlý."
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 3,
        "text": "Rozhodni, či existuje trojuholník so stranami 8 cm, 9 cm, 18 cm. Zdôvodni.",
        "answer": "8 + 9 = 17 &lt; 18, trojuholník neexistuje."
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 4,
        "text": "Pravouhlý trojuholník má odvesny 20 cm a 21 cm. Vypočítaj preponu.",
        "answer": "c² = 400 + 441 = 841, c = 29 cm."
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 5,
        "text": "Rovnoramenný trojuholník má základňu 24 cm a ramená 15 cm. Vypočítaj výšku na základňu a vzdialenosť ťažiska od základne.",
        "answer": "v² = 225 − 144 = 81, v = 9 cm. Ťažisko je na výške vo vzdialenosti ⅓ · 9 = 3 cm od základne."
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 4,
        "text": "Strany trojuholníka majú dĺžky 9 cm, 12 cm a 15 cm. Je trojuholník pravouhlý? Ak áno, aký polomer má opísaná kružnica?",
        "answer": "9² + 12² = 81 + 144 = 225 = 15², je pravouhlý; R = 15 : 2 = 7,5 cm."
      },
      {
        "id": "w6",
        "level": "rozsirenie",
        "space": 4,
        "text": "Vonkajší uhol pri vrchole C má 115° a α = 35°. Vypočítaj β a γ.",
        "answer": "Vonkajší uhol pri C = α + β, β = 115° − 35° = 80°; γ = 180° − 115° = 65° (kontrola: 35° + 80° + 65° = 180°)."
      },
      {
        "id": "w7",
        "level": "bonus",
        "space": 5,
        "text": "Dve strany trojuholníka majú 7 cm a 10 cm, tretia má celočíselnú dĺžku x cm. Pre ktoré x je trojuholník tupouhlý s tupým uhlom oproti strane 10 cm?",
        "answer": "Existencia: 3 &lt; x. Tupý uhol oproti 10 cm: x² + 49 &lt; 100, x² &lt; 51, x ≤ 7. Spolu x = 4, 5, 6, 7."
      }
    ]
  }
});
