MathPlatform.registerModule({
  "id": "3-u02-h029",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 29 · Obvod a obsah lichobežníka",
    "prerequisites": [
      "ZŠ: obvod a obsah obdĺžnika a trojuholníka; pojem rovnobežných priamok a kolmosti",
      "2. ročník: Pytagorova veta (odvesna, prepona) a výpočet chýbajúcej strany pravouhlého trojuholníka",
      "1. ročník: algebraické úpravy, vyjadrenie neznámej zo vzorca",
      "učivo hodín 22–28: trojuholník, štvoruholníky, obvod a obsah trojuholníka, štvorca a obdĺžnika, riešenie úloh"
    ],
    "planContent": [
      "Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka."
    ],
    "planPerformance": [
      "Poznať a vedieť opísať vlastnosti základných rovinných útvarov.",
      "Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov."
    ],
    "goals": [
      "pomenovať časti lichobežníka (základne a, c, ramená b, d, výška v) a rozlíšiť výšku od ramena",
      "odvodiť a použiť vzorec S = (a + c) · v : 2 a obvod o = a + b + c + d",
      "v rovnoramennom a pravouhlom lichobežníku dopočítať chýbajúcu stranu alebo výšku Pytagorovou vetou",
      "z obsahu dopočítať výšku alebo chýbajúcu základňu a zapísať výsledok s jednotkou",
      "modul je zameraný na obsah písomky: priradenie vzorca k útvaru, pravda/nepravda, viackrokový výpočet, slovná úloha s jednotkami (skrátená verzia, bez odbočiek)"
    ],
    "competencies": [
      "prepájanie obrázku (náčrt s výškou) so vzorcom",
      "odvodenie vzorca rozložením na obdĺžnik a dva trojuholníky",
      "použitie Pytagorovej vety v nových situáciách",
      "presný zápis s jednotkami a argumentácia: prečo sa výška nerovná ramenu"
    ],
    "enrichment": [
      "rozšírenie: pravouhlý lichobežník a lichobežník s ramenami rôznej dĺžky (dve rôzne pravouhlé trojuholníky)",
      "bonus: základňa ako násobok druhej, rovnoramenný lichobežník s Pytagorovou trojicou 7, 24, 25, lichobežník zlepený zo štvorca a trojuholníka",
      "maturitný formát: viackrokové úlohy (výška, obvod, obsah) s odpoveďou vetou"
    ],
    "flow": [
      "0–3 min: opakovanie S obdĺžnika a trojuholníka a Pytagorovej vety",
      "3–10 min: časti lichobežníka, vzorce pre obvod a obsah, rovnoramenný a pravouhlý lichobežník (výška, rameno a základňa cez Pytagorovu vetu)",
      "10–20 min: platforma: voľba, výpočet, priraďovanie, pravda/nepravda, jedna chyba v riešení",
      "20–35 min: úloha BEZ MOBILU (výška, obvod, obsah) a zbierka podľa úrovní",
      "35–45 min: spoločný rozbor chýb podľa živých výsledkov; modul je zameraný na obsah písomky"
    ],
    "diagnostics": [
      "dosádza rameno namiesto výšky (najčastejšia chyba)",
      "zabúda deliť dvoma alebo nenapíše zátvorky okolo súčtu základní",
      "pri výpočte ramena alebo výšky zamení preponu a odvesnu (sčíta namiesto odčítania štvorcov)",
      "do obvodu dosadí výšku namiesto ramena alebo naopak"
    ],
    "partialUse": [
      "pri nedostatku času vynechať bonusové položky zbierky",
      "mobil nahrádza výpočet iba pri kontrole; náčrt a Pytagorova veta ostávajú v zošite",
      "pri ŠVVP ponechať viditeľný vzorec a obrázok s výškou a znížiť počet položiek zbierky"
    ]
  },
  "student": {
    "title": "Obvod a obsah lichobežníka",
    "subtitle": "Hodina 29 · Planimetria · Lichobežník",
    "intro": "Lichobežník má dve rovnobežné strany. Odvodíš si vzorec pre jeho obsah, naučíš sa počítať výšku a chýbajúce ramená Pytagorovou vetou a vyriešiš viac úloh. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "20–25 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Pripomeň si, čo budeme dnes potrebovať:</p><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Obdĺžnik</div><p class=\"term-rule\">S = a · b</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Trojuholník</div><p class=\"term-rule\">S = <span class=\"frac\"><span class=\"frac-num\">a · v</span><span class=\"frac-den\">2</span></span>, kde v je výška kolmá na stranu a</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Pytagorova veta</div><p class=\"term-rule\">v pravouhlom trojuholníku s odvesnami x, y a preponou z platí x² + y² = z²</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Obvod</div><p class=\"term-rule\">súčet dĺžok všetkých strán útvaru</p></div></div><div class=\"example\"><span class=\"mini-label\">PRIPOMENUTIE · Pytagorova veta</span><p>Odvesny 3 cm a 4 cm: z² = 3² + 4² = 9 + 16 = 25, z = 5 cm</p><p>Prepona 13 cm, odvesna 5 cm: y² = 13² − 5² = 169 − 25 = 144, y = 12 cm</p></div><p><strong>Lichobežník</strong> je štvoruholník, ktorý má aspoň jednu dvojicu rovnobežných strán. Dnes zistíš, ako sa počíta jeho obvod a obsah.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "pomenovať základne, ramená a výšku lichobežníka",
          "odvodiť a použiť vzorec pre obsah a obvod",
          "dopočítať rameno alebo výšku Pytagorovou vetou",
          "z obsahu dopočítať výšku alebo základňu"
        ]
      },
      {
        "id": "pojmy",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Časti lichobežníka a vzorce",
        "html": "<p>Lichobežník ABCD má dve <strong>rovnobežné</strong> strany, ktoré volíme ako základne. Ostatné dve strany sú jeho ramená.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 610 226\" role=\"img\" aria-label=\"Lichobežník so základňami a a c, ramenami b a d a výškou v\"><g font-family=\"system-ui\" font-size=\"16\" text-anchor=\"middle\" fill=\"currentColor\"><polygon points=\"120,180 460,180 358,44 188,44\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><line x1=\"188\" y1=\"44\" x2=\"188\" y2=\"180\" stroke=\"#9b6b2f\" stroke-width=\"2.5\" stroke-dasharray=\"7 5\"/><path d=\"M198,180 L198,170 L188,170\" fill=\"none\" stroke=\"#9b6b2f\" stroke-width=\"2\"/><text x=\"196\" y=\"117\" text-anchor=\"start\" font-size=\"16\">výška v</text><text x=\"290\" y=\"206\" text-anchor=\"middle\" font-size=\"16\">základňa a</text><text x=\"273\" y=\"32\" text-anchor=\"middle\" font-size=\"16\">základňa c</text><text x=\"144\" y=\"117\" text-anchor=\"end\" font-size=\"16\">rameno d</text><text x=\"419\" y=\"117\" text-anchor=\"start\" font-size=\"16\">rameno b</text></g></svg></div><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Základne a, c</div><p class=\"term-rule\">dve rovnobežné strany (a je dolná, c horná; zvyčajne a je dlhšia)</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Ramená b, d</div><p class=\"term-rule\">dve ostatné strany, ktoré nie sú rovnobežné</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Výška v</div><p class=\"term-rule\">vzdialenosť základní: úsečka <span class=\"hl\">kolmá</span> na obe základne (na obrázku prerušovaná čiara s pravým uhlom)</p></div></div><p><strong>Obvod</strong> lichobežníka je súčet všetkých štyroch strán: <strong>o = a + b + c + d</strong>.</p><div class=\"warning\"><strong>Pozor:</strong> Výška <strong>nie je</strong> to isté ako rameno. Rameno je šikmá strana, výška je kolmá. Jediná výnimka je <em>pravouhlý lichobežník</em>, kde je jedno rameno kolmé na základne, a to je potom aj výškou.</div><div class=\"formula\"><span class=\"mini-label\">OBSAH LICHOBEŽNÍKA</span>S = <span class=\"frac\"><span class=\"frac-num\">(a + c) · v</span><span class=\"frac-den\">2</span></span><span class=\"formula-note\">Súčet základní vynásobíme výškou a vydelíme dvoma. Vzorec vznikne rozložením na obdĺžnik a dva pravouhlé trojuholníky.</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD · a = 20 cm, c = 6 cm, b = 15 cm, d = 13 cm, v = 12 cm</span><p>S = (20 + 6) · 12 : 2 = <strong>156 cm²</strong></p><p>o = 20 + 15 + 6 + 13 = <strong>54 cm</strong></p></div><p>Do obsahu patrí výška, do obvodu ramená.</p>",
        "remember": "Základne sú rovnobežné, výška je kolmá na základne. Obvod = a + b + c + d. Obsah = (a + c) · v : 2."
      },
      {
        "id": "iso",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Rovnoramenný lichobežník a Pytagorova veta",
        "html": "<p>V <strong>rovnoramennom lichobežníku</strong> majú obe ramená rovnakú dĺžku (b = d). Keď z horných vrcholov spustíme výšky, vzniknú dva zhodné pravouhlé trojuholníky. Jeho odvesny sú <strong>výška v</strong> a úsek na základni <strong>(a − c) : 2</strong>, prepona je <strong>rameno</strong>.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 630 210\" role=\"img\" aria-label=\"Rovnoramenný lichobežník so základňami 12 cm a 6 cm a výškou 4 cm; úseky na dolnej základni po 3 cm\"><g font-family=\"system-ui\" font-size=\"16\" text-anchor=\"middle\" fill=\"currentColor\"><polygon points=\"120,164 480,164 390,44 210,44\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><line x1=\"210\" y1=\"44\" x2=\"210\" y2=\"164\" stroke=\"#9b6b2f\" stroke-width=\"2.5\" stroke-dasharray=\"7 5\"/><path d=\"M220,164 L220,154 L210,154\" fill=\"none\" stroke=\"#9b6b2f\" stroke-width=\"2\"/><text x=\"218\" y=\"109\" text-anchor=\"start\" font-size=\"16\">v = 4 cm</text><text x=\"165\" y=\"157\" text-anchor=\"middle\" font-size=\"14\">3 cm</text><line x1=\"390\" y1=\"44\" x2=\"390\" y2=\"164\" stroke=\"#9b6b2f\" stroke-width=\"2.5\" stroke-dasharray=\"7 5\"/><path d=\"M380,164 L380,154 L390,154\" fill=\"none\" stroke=\"#9b6b2f\" stroke-width=\"2\"/><text x=\"435\" y=\"157\" text-anchor=\"middle\" font-size=\"14\">3 cm</text><text x=\"300\" y=\"190\" text-anchor=\"middle\" font-size=\"16\">a = 12 cm</text><text x=\"300\" y=\"32\" text-anchor=\"middle\" font-size=\"16\">c = 6 cm</text><text x=\"155\" y=\"109\" text-anchor=\"end\" font-size=\"16\">d = b</text><text x=\"445\" y=\"109\" text-anchor=\"start\" font-size=\"16\">b = ?</text></g></svg></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1 · chýba rameno (a = 12 cm, c = 6 cm, v = 4 cm)</span><p>Úsek na základni: (12 − 6) : 2 = 3 cm</p><p>Rameno je prepona: b² = 3² + 4² = 9 + 16 = 25, b = <strong>5 cm</strong></p><p>Obsah: S = (12 + 6) · 4 : 2 = <strong>36 cm²</strong></p><p>Obvod: o = 12 + 6 + 5 + 5 = <strong>28 cm</strong></p></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2 · chýba výška (a = 20 cm, c = 10 cm, b = d = 13 cm)</span><p>Úsek na základni: (20 − 10) : 2 = 5 cm</p><p>Výška je odvesna: v² = 13² − 5² = 169 − 25 = 144, v = <strong>12 cm</strong></p><p>Obsah: S = (20 + 10) · 12 : 2 = <strong>180 cm²</strong></p><p>Obvod: o = 20 + 10 + 13 + 13 = <strong>56 cm</strong></p></div><div class=\"warning\"><strong>Pozor:</strong> Pri výpočte <strong>výšky</strong> sa štvorce <strong>odčítajú</strong> (v² = b² − p²), lebo rameno je prepona. Pri výpočte <strong>ramena</strong> sa štvorce <strong>sčítajú</strong> (b² = p² + v²).</div>",
        "remember": "Rovnoramenný lichobežník: úsek p = (a − c) : 2, potom Pytagorova veta s odvesnami p a v a preponou b."
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "obsah lichobežníka",
        "question": "Lichobežník má základne 28 cm a 7 cm, ramená 10 cm a 17 cm a výšku 8 cm. Aký je jeho obsah?",
        "options": [
          "175 cm²",
          "140 cm²",
          "297,5 cm²",
          "280 cm²"
        ],
        "answer": 1,
        "correct": "Správne: S = (28 + 7) · 8 : 2 = 35 · 8 : 2 = 140 cm². Dosadzuje sa výška 8 cm, nie rameno.",
        "hint": "Použi základne a výšku kolmú na ne. Nezabudni vydeliť dvoma. Pozor, 175 cm² a 297,5 cm² vzniknú dosadením ramena."
      },
      {
        "id": "n1",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "obsah lichobežníka",
        "title": "Obsah lichobežníka",
        "prompt": "Lichobežník má základne 18 cm a 10 cm a výšku 6 cm. Aký má obsah v cm²?",
        "validate": "exact",
        "answer": 84,
        "success": "Správne: S = (18 + 10) · 6 : 2 = 28 · 3 = 84 cm².",
        "hint": "Sčítaj základne, vynásob výškou a vydeľ dvoma: (a + c) · v : 2.",
        "reveal": "Správne je 84: (18 + 10) · 6 = 168 a 168 : 2 = 84."
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "výška Pytagorovou vetou",
        "question": "Rovnoramenný lichobežník má základne 20 cm a 10 cm a každé rameno 13 cm. Aká je jeho výška?",
        "options": [
          "13 cm",
          "15 cm",
          "5 cm",
          "12 cm"
        ],
        "answer": 3,
        "correct": "Správne: úsek (20 − 10) : 2 = 5 cm, v² = 13² − 5² = 144, v = 12 cm.",
        "hint": "Najprv nájdi úsek na dolnej základni (a − c) : 2. Potom je rameno prepona pravouhlého trojuholníka s odvesnami 5 cm a v."
      },
      {
        "id": "prav",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Pravouhlý lichobežník",
        "html": "<p>V <strong>pravouhlom lichobežníku</strong> je jedno rameno kolmé na základne. Toto rameno je <strong>zároveň výškou</strong>. Druhé rameno je šikmé a je preponou pravouhlého trojuholníka, ktorého odvesny sú výška a rozdiel základní <strong>a − c</strong>.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 644 192\" role=\"img\" aria-label=\"Pravouhlý lichobežník so základňami 11 cm a 7 cm, kolmým ramenom 3 cm a úsekom 4 cm na dolnej základni\"><g font-family=\"system-ui\" font-size=\"16\" text-anchor=\"middle\" fill=\"currentColor\"><polygon points=\"120,146 494,146 358,44 120,44\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><path d=\"M130,146 L130,136 L120,136\" fill=\"none\" stroke=\"#9b6b2f\" stroke-width=\"2\"/><path d=\"M130,44 L130,54 L120,54\" fill=\"none\" stroke=\"#9b6b2f\" stroke-width=\"2\"/><line x1=\"358\" y1=\"44\" x2=\"358\" y2=\"146\" stroke=\"#9b6b2f\" stroke-width=\"2.5\" stroke-dasharray=\"7 5\"/><path d=\"M348,146 L348,136 L358,136\" fill=\"none\" stroke=\"#9b6b2f\" stroke-width=\"2\"/><text x=\"426\" y=\"139\" text-anchor=\"middle\" font-size=\"14\">4 cm</text><text x=\"307\" y=\"172\" text-anchor=\"middle\" font-size=\"16\">a = 11 cm</text><text x=\"239\" y=\"32\" text-anchor=\"middle\" font-size=\"16\">c = 7 cm</text><text x=\"110\" y=\"100\" text-anchor=\"end\" font-size=\"16\">d = v = 3 cm</text><text x=\"436\" y=\"100\" text-anchor=\"start\" font-size=\"16\">b = ?</text></g></svg></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD · a = 11 cm, c = 7 cm, kolmé rameno d = v = 3 cm</span><p>Rozdiel základní: 11 − 7 = 4 cm</p><p>Šikmé rameno: b² = 4² + 3² = 16 + 9 = 25, b = <strong>5 cm</strong></p><p>Obsah: S = (11 + 7) · 3 : 2 = <strong>27 cm²</strong></p><p>Obvod: o = 11 + 7 + 3 + 5 = <strong>26 cm</strong></p></div><p>Ak chýba <strong>dlhšia základňa</strong>, vypočítame z trojuholníka rozdiel a − c a potom a = c + (a − c).</p>",
        "remember": "Pravouhlý lichobežník: kolmé rameno = výška. Šikmé rameno: b² = (a − c)² + v²."
      },
      {
        "id": "n2",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "výška Pytagorovou vetou",
        "title": "Chýbajúca dlhšia základňa",
        "prompt": "Pravouhlý lichobežník má kratšiu základňu 6 cm, kolmé rameno 12 cm a šikmé rameno 13 cm. Aká dlhá je jeho dlhšia základňa v cm? (Rozdiel základní vypočítaj Pytagorovou vetou.)",
        "validate": "exact",
        "answer": 11,
        "success": "Správne: rozdiel základní x² = 13² − 12² = 25, x = 5 cm, teda a = 6 + 5 = 11 cm.",
        "hint": "Kolmé rameno 12 cm je odvesna (výška), šikmé rameno 13 cm je prepona. Druhá odvesna je rozdiel a − c. Potom ho pripočítaj ku kratšej základni.",
        "reveal": "Správne je 11: 13² − 12² = 25, rozdiel 5 cm, 6 + 5 = 11 cm."
      },
      {
        "id": "m1",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "výber údajov",
        "title": "Rovnoramenný lichobežník má a = 12 cm, c = 6 cm, ramená b = d = 5 cm a výšku v = 4 cm. Ktorý údaj potrebuješ na obsah a ktorý na obvod?",
        "labels": [
          "obsah aj obvod",
          "iba obsah",
          "iba obvod"
        ],
        "items": [
          {
            "text": "základňa a = 12 cm",
            "answer": "obsah aj obvod"
          },
          {
            "text": "rameno b = 5 cm",
            "answer": "iba obvod"
          },
          {
            "text": "výška v = 4 cm",
            "answer": "iba obsah"
          },
          {
            "text": "základňa c = 6 cm",
            "answer": "obsah aj obvod"
          },
          {
            "text": "rameno d = 5 cm",
            "answer": "iba obvod"
          }
        ]
      },
      {
        "id": "s1",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "vlastnosti lichobežníka",
        "title": "Pravda, alebo nepravda?",
        "question": "Rozhodni, či je tvrdenie o lichobežníku pravdivé.",
        "labels": [
          "Pravda",
          "Nepravda"
        ],
        "items": [
          {
            "text": "Ak zdvojnásobíme výšku lichobežníka (základne ostanú), jeho obsah sa zdvojnásobí.",
            "answer": true,
            "why": "Výška je vo vzorci jednou z činiteľov: S = (a + c) · v : 2."
          },
          {
            "text": "Obvod lichobežníka sa počíta ako (a + c) · v : 2.",
            "answer": false,
            "why": "To je vzorec pre obsah. Obvod je súčet všetkých štyroch strán a + b + c + d."
          },
          {
            "text": "V pravouhlom lichobežníku je kolmé rameno zároveň výškou.",
            "answer": true,
            "why": "Kolmé rameno je kolmé na obe základne, čo je presne výška."
          },
          {
            "text": "Rovnoramenný lichobežník so základňami 10 cm a 4 cm a ramenom 5 cm má výšku 5 cm.",
            "answer": false,
            "why": "Úsek je (10 − 4) : 2 = 3 cm a v² = 25 − 9 = 16, takže v = 4 cm. Rameno a výška sa nerovnajú."
          },
          {
            "text": "Obe ramená lichobežníka musia byť vždy rovnako dlhé.",
            "answer": false,
            "why": "To platí iba v rovnoramennom lichobežníku. Všeobecný lichobežník má rôzne dlhé ramená."
          },
          {
            "text": "Ak obe základne predĺžime o 2 cm, obsah sa zväčší o 2 · v.",
            "answer": true,
            "why": "(a + 2 + c + 2) · v : 2 = (a + c) · v : 2 + 2v."
          }
        ]
      },
      {
        "id": "ce3",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "chyby v riešení",
        "question": "Žiak počítal výšku rovnoramenného lichobežníka so základňami 12 cm a 6 cm a ramenami 5 cm: „Úsek je (12 − 6) : 2 = 3 cm, v² = 3² + 5² = 34.“ Čo je chybné?",
        "options": [
          "Mal rátať úsek ako (12 + 6) : 2 = 9 cm, a až potom použiť vetu.",
          "Výšku lichobežníka nemožno vypočítať Pytagorovou vetou.",
          "Mal vypočítať v = 5 − 3 = 2 cm ako rozdiel dvoch dĺžok.",
          "Rameno je prepona, preto má byť v² = 5² − 3², nie 3² + 5²."
        ],
        "answer": 3,
        "correct": "Správne: v² = 25 − 9 = 16, takže v = 4 cm. Prepona je vždy najdlhšia strana, takže sa jej štvorec nesmie pripočítať.",
        "hint": "Ktorá strana pravouhlého trojuholníka je prepona: úsek 3 cm, výška, alebo rameno 5 cm?"
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Rovnoramenný lichobežník na papier",
        "html": "<p>Odlož zariadenie. Do zošita vyrieš túto úlohu:</p><p><strong>Rovnoramenný lichobežník má základne 18 cm a 8 cm a každé rameno 13 cm. Nakresli náčrt a vypočítaj:</strong></p><ol><li>výšku lichobežníka (Pytagorova veta),</li><li>jeho obvod,</li><li>jeho obsah.</li></ol><p>Odpoveď napíš vetou a nezabudni na jednotky.</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: lichobežník",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Rieš v zošite: náčrt s výškou, vzorec, dosadenie s jednotkami, odpoveď vetou. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Lichobežník má základne 9 cm a 5 cm a výšku 6 cm. Vypočítaj jeho obsah.",
            "answer": "S = (9 + 5) · 6 : 2 = 14 · 3 = <strong>42 cm²</strong>"
          },
          {
            "level": "zaklad",
            "text": "Lichobežník má základne 12 cm a 7 cm a ramená 5 cm a 6 cm. Vypočítaj jeho obvod.",
            "answer": "o = 12 + 5 + 7 + 6 = <strong>30 cm</strong>"
          },
          {
            "level": "zaklad",
            "text": "Štít stodoly má tvar lichobežníka so základňami 8 m a 4 m a výškou 3 m. Aký je jeho obsah?",
            "answer": "S = (8 + 4) · 3 : 2 = 12 · 3 : 2 = <strong>18 m²</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Rovnoramenný lichobežník má základne 17 cm a 7 cm a ramená 13 cm. Vypočítaj výšku, obvod a obsah.",
            "answer": "Úsek (17 − 7) : 2 = 5 cm; v² = 13² − 5² = 144, v = <strong>12 cm</strong><br>o = 17 + 7 + 13 + 13 = <strong>50 cm</strong><br>S = (17 + 7) · 12 : 2 = <strong>144 cm²</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Pravouhlý lichobežník má základne 14 cm a 8 cm a kolmé rameno 8 cm. Vypočítaj šikmé rameno, obvod a obsah.",
            "answer": "a − c = 6 cm; b² = 6² + 8² = 100, b = <strong>10 cm</strong><br>o = 14 + 8 + 8 + 10 = <strong>40 cm</strong><br>S = (14 + 8) · 8 : 2 = <strong>88 cm²</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Rovnoramenný lichobežník má základne 10 cm a 4 cm a ramená 5 cm. Vypočítaj obvod a obsah (výšku najprv dopočítaj).",
            "answer": "Úsek 3 cm; v² = 25 − 9 = 16, v = 4 cm<br>o = 10 + 4 + 5 + 5 = <strong>24 cm</strong><br>S = (10 + 4) · 4 : 2 = <strong>28 cm²</strong>"
          },
          {
            "level": "bonus",
            "text": "Lichobežník má obsah 72 cm² a výšku 6 cm. Dlhšia základňa je trojnásobok kratšej. Vypočítaj obe základne.",
            "answer": "a + c = 2 · 72 : 6 = 24. Z a = 3c plynie 4c = 24, c = <strong>6 cm</strong>, a = <strong>18 cm</strong>"
          },
          {
            "level": "bonus",
            "text": "Rovnoramenný lichobežník má základne 24 cm a 10 cm a ramená 25 cm. Vypočítaj výšku, obvod a obsah.",
            "answer": "Úsek (24 − 10) : 2 = 7 cm; v² = 625 − 49 = 576, v = <strong>24 cm</strong><br>o = 24 + 10 + 25 + 25 = <strong>84 cm</strong><br>S = (24 + 10) · 24 : 2 = <strong>408 cm²</strong>"
          }
        ]
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Čo už viem?",
        "prompt": "Pri každej zručnosti označ, ako sa teraz cítiš.",
        "skills": [
          "viem pomenovať základne, ramená a výšku lichobežníka",
          "viem vypočítať obsah a obvod lichobežníka",
          "viem dopočítať rameno alebo výšku Pytagorovou vetou",
          "viem z obsahu dopočítať výšku alebo základňu"
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
        "text": "Lichobežník má základne 15 cm a 9 cm a výšku 7 cm. Vypočítaj jeho obsah.",
        "answer": "S = (15 + 9) · 7 : 2 = 84 cm²"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 4,
        "text": "Lichobežník má základne 13 cm a 6 cm a ramená 8 cm a 9 cm. Vypočítaj jeho obvod.",
        "answer": "o = 13 + 8 + 6 + 9 = 36 cm"
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 4,
        "text": "Lichobežník má obsah 54 cm², základne 10 cm a 8 cm. Vypočítaj jeho výšku.",
        "answer": "54 = 18 · v : 2 = 9 · v, v = 6 cm"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 6,
        "text": "Rovnoramenný lichobežník má základne 26 cm a 10 cm a ramená 17 cm. Vypočítaj výšku, obvod a obsah.",
        "answer": "Úsek (26 − 10) : 2 = 8 cm; v² = 289 − 64 = 225, v = 15 cm; o = 26 + 10 + 34 = 70 cm; S = 36 · 15 : 2 = 270 cm²"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 6,
        "text": "Pravouhlý lichobežník má základne 16 cm a 7 cm a kolmé rameno 12 cm. Vypočítaj šikmé rameno, obvod a obsah.",
        "answer": "a − c = 9 cm; b² = 81 + 144 = 225, b = 15 cm; o = 16 + 7 + 12 + 15 = 50 cm; S = 23 · 12 : 2 = 138 cm²"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 7,
        "text": "Lichobežník má výšku 8 cm, obsah 100 cm² a dlhšia základňa je o 5 cm dlhšia ako kratšia. Vypočítaj obe základne.",
        "answer": "a + c = 2 · 100 : 8 = 25 a a = c + 5, 2c + 5 = 25, c = 10 cm, a = 15 cm"
      }
    ]
  }
});
