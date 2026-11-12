MathPlatform.registerModule({
  "id": "3-u02-h034",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 34 · Obvod a obsah mnohouholníka",
    "prerequisites": [
      "základná planimetria zo ZŠ",
      "Pytagorova veta a goniometria trojuholníka z 2. ročníka",
      "logika, množiny a algebraické úpravy z 1. ročníka",
      "goniometria z predchádzajúceho tematického celku 3. ročníka",
      "učivo hodín 22–33"
    ],
    "planContent": [
      "Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka."
    ],
    "planPerformance": [
      "Poznať a vedieť opísať vlastnosti základných rovinných útvarov.",
      "Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov."
    ],
    "goals": [
      "rozdeliť mnohouholník na trojuholníky a obdĺžniky a obsah určiť sčítaním ich obsahov",
      "rozhodnúť, kedy je výhodnejšie obsah časti odčítať od celku",
      "odvodiť a použiť súčet vnútorných uhlov (n − 2) · 180° a veľkosť uhla pravidelného n-uholníka",
      "vypočítať obvod a obsah pravidelného šesťuholníka cez 6 rovnostranných trojuholníkov",
      "správne zapisovať jednotky a rozlišovať obvod od obsahu"
    ],
    "competencies": [
      "prechod medzi obrázkom, náčrtom a výpočtom",
      "rozloženie zložitého útvaru na známe časti",
      "využitie Pytagorovej vety na dopočítanie neznámej strany alebo výšky",
      "matematická argumentácia (prečo n − 2) a kontrola výsledku"
    ],
    "enrichment": [
      "počet uhlopriečok n-uholníka n(n − 3)/2",
      "výška rovnostranného trojuholníka a√3/2 ako predpríprava na ďalšie úlohy",
      "Maturitný štandard je iba obohatenie: modelovanie reálnych plôch (pozemok, dvor, rám) a presný matematický jazyk."
    ],
    "flow": [
      "0–4 min: opakovanie vzorcov z hodín 22–33 (trojuholník, štvoruholníky)",
      "4–14 min: rozdelenie mnohouholníka, sčítanie a odčítanie obsahov (domček, L-útvar), súčet uhlov, šesťuholník — spoločne na tabuli",
      "14–30 min: platforma: voľba postupu, uhly, zložený útvar, šesťuholník, hľadanie chýb",
      "30–42 min: úlohy BEZ MOBILU a zbierka podľa úrovne",
      "42–45 min: spoločné zhrnutie podľa živých výsledkov"
    ],
    "diagnostics": [
      "do obvodu započíta uhlopriečky alebo pomocné čiary",
      "zamieňa n a n − 2 pri súčte uhlov, resp. súčet uhlov a jeden uhol",
      "berie výšku rovnostranného trojuholníka za jeho stranu",
      "pri útvare s otvorom zabudne na vnútorný okraj alebo odčíta nesprávne rozmery",
      "chýbajúce alebo zlé jednotky (cm namiesto cm²)"
    ],
    "partialUse": [
      "pri nedostatku času vynechať sekciu o pravidelnom šesťuholníku a bonusové úlohy zbierky",
      "mobil nenahrádza ručné počítanie; náčrty a výpočty sa robia v zošite",
      "pre žiakov so ŠVVP: tabuľka vzorcov z úvodu a hotový náčrt L-útvaru"
    ]
  },
  "student": {
    "title": "Obvod a obsah mnohouholníka",
    "subtitle": "Rozdeľ → vypočítaj → sčítaj alebo odčítaj",
    "intro": "Mnohouholník rozdelíš na útvary, ktoré poznáš, a obsahy poskladáš. Dozvieš sa aj, koľko majú uhly pravidelného n-uholníka. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "25–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Z hodín 22–33 vieš počítať obvod a obsah základných útvarov. Pripomeň si ich, dnes ich budeme skladať dokopy:</p><div class=\"term-list\">\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Obdĺžnik a štvorec</div><p class=\"term-rule\">S = a · b, resp. S = a²; obvod o = 2(a + b), resp. 4a.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Trojuholník</div><p class=\"term-rule\">S = <span class=\"frac\"><span class=\"frac-num\">a · v</span><span class=\"frac-den\">2</span></span>, kde v je výška na stranu a. Obvod je súčet troch strán.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Lichobežník</div><p class=\"term-rule\">S = <span class=\"frac\"><span class=\"frac-num\">(a + c) · v</span><span class=\"frac-den\">2</span></span>.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Rovnobežník a kosoštvorec</div><p class=\"term-rule\">S = a · v; kosoštvorec aj S = <span class=\"frac\"><span class=\"frac-num\">e · f</span><span class=\"frac-den\">2</span></span> (e, f sú uhlopriečky).</p></div></div>\n<p>Ešte dve pomôcky: <strong>Pytagorova veta</strong> (c² = a² + b² v pravouhlom trojuholníku) a to, že <strong>súčet uhlov v trojuholníku je 180°</strong>.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "rozdeliť mnohouholník na trojuholníky a obdĺžniky a spočítať jeho obsah",
          "riešiť zložené útvary sčítaním aj odčítaním obsahov",
          "určiť súčet vnútorných uhlov mnohouholníka a vnútorný uhol pravidelného n-uholníka",
          "vypočítať obvod a obsah pravidelného šesťuholníka"
        ]
      },
      {
        "id": "idea",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Mnohouholník rozdelíme na známe útvary",
        "html": "<p><span class=\"hl\">Mnohouholník</span> je rovinný útvar ohraničený uzavretou lomenou čiarou. Má n strán a n vrcholov. Pre mnohouholník nemáme jeden vzorec — ale vieme ho <strong>rozrezať na útvary, ktoré poznáme</strong>.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 760 300\" role=\"img\" aria-label=\"Nepravidelný päťuholník ABCDE. Z vrcholu A vedú dve uhlopriečky AC a AD, ktoré ho rozdelia na tri trojuholníky ABC, ACD a ADE.\"><g font-family=\"system-ui\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\"><polygon points=\"250,235 430,265 600,190 530,50 320,65\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><line x1=\"250\" y1=\"235\" x2=\"600\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><line x1=\"250\" y1=\"235\" x2=\"530\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><text x=\"232\" y=\"250\" text-anchor=\"end\">A</text><text x=\"430\" y=\"292\">B</text><text x=\"622\" y=\"190\" text-anchor=\"start\">C</text><text x=\"540\" y=\"36\">D</text><text x=\"310\" y=\"50\">E</text><text x=\"425\" y=\"225\">S₁</text><text x=\"485\" y=\"150\">S₂</text><text x=\"375\" y=\"110\">S₃</text></g></svg></div>\n<p>Z vrcholu A sme viedli uhlopriečky AC a AD. Päťuholník sa rozpadol na <strong>3 trojuholníky</strong>. Ich obsahy S₁, S₂, S₃ vieme vypočítať a platí:</p><div class=\"formula\">S = S₁ + S₂ + S₃</div>\n<p>Obvod mnohouholníka je naopak súčet dĺžok jeho <strong>strán</strong> — teda iba lomenej čiary po okraji.</p>\n<div class=\"warning\"><strong>Pozor:</strong> Uhlopriečky a ostatné pomocné čiary sú iba náš nástroj na výpočet obsahu. Do obvodu sa nikdy nezapočítavajú.</div>",
        "remember": "Obsah: rozdeľ na trojuholníky alebo obdĺžniky a obsahy sčítaj. Obvod: sčítaj iba strany po okraji útvaru."
      },
      {
        "id": "sum-sub",
        "type": "explain",
        "phase": "PRÍKLAD",
        "title": "Sčítať časti, alebo odčítať vynechané?",
        "html": "<p>Pri zloženom útvare si vyber jednu z dvoch ciest:</p><ol class=\"steps\"><li><strong>Sčítanie:</strong> útvar rozdelíš na časti a ich obsahy sčítaš.</li><li><strong>Odčítanie:</strong> útvar doplníš na jednoduchší (väčší) a obsah chýbajúcej časti odčítaš.</li></ol>\n<h3>Sčítanie: domček</h3><div class=\"logic-visual\"><svg viewBox=\"0 0 760 300\" role=\"img\" aria-label=\"Domček: obdĺžnik široký 8 cm a vysoký 5 cm, na ňom trojuholníková strecha s výškou 3 cm. Strešné strany sú označené s.\"><g font-family=\"system-ui\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\"><polygon points=\"260,270 500,270 500,120 380,30 260,120\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><line x1=\"260\" y1=\"120\" x2=\"500\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><line x1=\"380\" y1=\"120\" x2=\"380\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><path d=\"M380 108 L392 108 L392 120\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"380\" y=\"295\">8 cm</text><text x=\"236\" y=\"200\" text-anchor=\"end\">5 cm</text><text x=\"524\" y=\"200\" text-anchor=\"start\">5 cm</text><text x=\"392\" y=\"75\" text-anchor=\"start\">v = 3 cm</text><text x=\"300\" y=\"62\" text-anchor=\"end\">s</text><text x=\"462\" y=\"62\" text-anchor=\"start\">s</text><text x=\"380\" y=\"205\">S₁</text><text x=\"345\" y=\"100\" font-size=\"17\">S₂</text></g></svg></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1 · päťuholník ako obdĺžnik a trojuholník</span><p>Obdĺžnik S₁ = 8 · 5 = 40 cm². Strecha: trojuholník so základňou 8 cm a výškou 3 cm, S₂ = <span class=\"frac\"><span class=\"frac-num\">8 · 3</span><span class=\"frac-den\">2</span></span> = 12 cm².</p><p>S = S₁ + S₂ = 40 + 12 = <strong>52 cm²</strong></p>\n<p><strong>Obvod:</strong> strešná strana s je prepona pravouhlého trojuholníka s odvesnami 4 cm (polovica základne) a 3 cm: s = √(4² + 3²) = 5 cm.</p><p>o = 8 + 5 + 5 + 5 + 5 = <strong>28 cm</strong> (dolná strana, dve steny a dve strešné strany; čiara medzi obdĺžnikom a strechou do obvodu nepatrí).</p></div>\n<h3>Odčítanie: L-útvar</h3><div class=\"logic-visual\"><svg viewBox=\"0 0 760 300\" role=\"img\" aria-label=\"Útvar tvaru L: obdĺžnik 10 cm krát 8 cm, z ktorého je vpravo hore vyrezaný obdĺžnik 4 cm krát 3 cm. Strany majú dĺžky 6, 3, 4, 5, 10 a 8 cm.\"><g font-family=\"system-ui\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\"><polygon points=\"230,40 380,40 380,115 480,115 480,240 230,240\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><rect x=\"380\" y=\"40\" width=\"100\" height=\"75\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><text x=\"305\" y=\"28\">6 cm</text><text x=\"364\" y=\"83\" text-anchor=\"end\">3 cm</text><text x=\"430\" y=\"140\">4 cm</text><text x=\"504\" y=\"180\" text-anchor=\"start\">5 cm</text><text x=\"355\" y=\"268\">10 cm</text><text x=\"206\" y=\"145\" text-anchor=\"end\">8 cm</text><text x=\"430\" y=\"83\" font-size=\"15\">vyrezané</text><text x=\"305\" y=\"150\" font-size=\"18\">L-útvar</text></g></svg></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2 · L-útvar dvoma spôsobmi</span><p><strong>Odčítaním:</strong> celý obdĺžnik 10 · 8 = 80 cm², vyrezaný obdĺžnik 4 · 3 = 12 cm², S = 80 − 12 = <strong>68 cm²</strong>.</p><p><strong>Sčítaním:</strong> ľavý obdĺžnik 6 · 8 = 48 cm² a pravý 4 · 5 = 20 cm², S = 48 + 20 = <strong>68 cm²</strong>. Oba spôsoby dávajú rovnaký výsledok.</p><p><strong>Obvod:</strong> 6 + 3 + 4 + 5 + 10 + 8 = <strong>36 cm</strong>. Je rovnaký ako obvod celého obdĺžnika 2(10 + 8), pretože vyrezaný roh obvod nezmenil.</p></div>\n<div class=\"warning\"><strong>Pozor:</strong> Obvod L-útvaru sa rovná obvodu veľkého obdĺžnika len pri vyrezanom <em>rohu</em>. Keby bol otvor uprostred, obvod by sa zväčšil o jeho celý okraj.</div>",
        "remember": "Zložený útvar vieš počítať sčítaním častí alebo odčítaním od väčšieho celku. Vždy zapíš medzivýsledky s jednotkou."
      },
      {
        "id": "angles",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Súčet vnútorných uhlov a pravidelný n-uholník",
        "html": "<p>Rozdelenie na trojuholníky nám prezradí aj súčet vnútorných uhlov. Z jedného vrcholu vedieme uhlopriečky do všetkých vrcholov, ktoré s ním nesusedia — vznikne n − 2 trojuholníkov a každý má súčet uhlov 180°.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 760 300\" role=\"img\" aria-label=\"Pravidelný päťuholník. Z horného vrcholu vedú dve uhlopriečky a rozdeľujú ho na tri trojuholníky, každý so súčtom uhlov 180°.\"><g font-family=\"system-ui\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\"><polygon points=\"380,40 494.13,122.92 450.53,257.08 309.47,257.08 265.87,122.92\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><line x1=\"380\" y1=\"40\" x2=\"450.53\" y2=\"257.08\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><line x1=\"380\" y1=\"40\" x2=\"309.47\" y2=\"257.08\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><text x=\"380\" y=\"75\" font-size=\"22\">α</text><text x=\"435\" y=\"170\" font-size=\"17\">180°</text><text x=\"380\" y=\"230\" font-size=\"17\">180°</text><text x=\"325\" y=\"170\" font-size=\"17\">180°</text></g></svg></div>\n<div class=\"formula\"><span class=\"mini-label\">SÚČET VNÚTORNÝCH UHLOV</span>(n − 2) · 180°</div>\n<div class=\"table-wrap\"><table class=\"truth\"><thead><tr><th>počet strán n</th><th>3</th><th>4</th><th>5</th><th>6</th><th>8</th></tr></thead><tbody><tr><td>počet trojuholníkov n − 2</td><td>1</td><td>2</td><td>3</td><td>4</td><td>6</td></tr><tr><td>súčet uhlov</td><td>180°</td><td>360°</td><td>540°</td><td>720°</td><td>1080°</td></tr></tbody></table></div>\n<p><span class=\"hl\">Pravidelný n-uholník</span> má všetky strany rovnako dlhé a všetky vnútorné uhly rovnako veľké. Preto je jeden vnútorný uhol:</p>\n<div class=\"formula\"><span class=\"mini-label\">VNÚTORNÝ UHOL PRAVIDELNÉHO n-UHOLNÍKA</span>α = <span class=\"frac\"><span class=\"frac-num\">(n − 2) · 180°</span><span class=\"frac-den\">n</span></span></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 3 · pravidelný osemuholník</span><p>Súčet uhlov: (8 − 2) · 180° = 6 · 180° = 1080°.</p><p>Jeden uhol: α = 1080° : 8 = <strong>135°</strong>.</p><p>Obvod so stranou a = 5 cm: o = 8 · 5 = <strong>40 cm</strong>.</p></div>\n<div class=\"warning\"><strong>Pozor:</strong> Vo vzorci je n − 2, nie n. Šesťuholník sa rozdelí na 4 trojuholníky, nie na 6. A „súčet uhlov“ nie je to isté ako „jeden uhol“ — pri pravidelnom n-uholníku ešte delíš číslom n.</div>",
        "remember": "Súčet vnútorných uhlov n-uholníka je (n − 2) · 180°. Jeden uhol pravidelného n-uholníka dostaneš delením číslom n."
      },
      {
        "id": "hexagon",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Pravidelný šesťuholník",
        "html": "<p>Pravidelný šesťuholník so stranou a sa rozpadne na <strong>6 zhodných rovnostranných trojuholníkov</strong> so stranou a (stredový uhol je 360° : 6 = 60°).</p><div class=\"logic-visual\"><svg viewBox=\"0 0 760 300\" role=\"img\" aria-label=\"Pravidelný šesťuholník so stranou a, rozdelený zo stredu na šesť zhodných rovnostranných trojuholníkov. Výška jedného trojuholníka je v.\"><g font-family=\"system-ui\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\"><polygon points=\"500,150 440,253.92 320,253.92 260,150 320,46.08 440,46.08\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><line x1=\"380\" y1=\"150\" x2=\"500\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"2.5\" opacity=\"0.7\"/><line x1=\"380\" y1=\"150\" x2=\"440\" y2=\"253.92\" stroke=\"currentColor\" stroke-width=\"2.5\" opacity=\"0.7\"/><line x1=\"380\" y1=\"150\" x2=\"320\" y2=\"253.92\" stroke=\"currentColor\" stroke-width=\"2.5\" opacity=\"0.7\"/><line x1=\"380\" y1=\"150\" x2=\"260\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"2.5\" opacity=\"0.7\"/><line x1=\"380\" y1=\"150\" x2=\"320\" y2=\"46.08\" stroke=\"currentColor\" stroke-width=\"2.5\" opacity=\"0.7\"/><line x1=\"380\" y1=\"150\" x2=\"440\" y2=\"46.08\" stroke=\"currentColor\" stroke-width=\"2.5\" opacity=\"0.7\"/><line x1=\"380\" y1=\"150\" x2=\"380\" y2=\"46.08\" stroke=\"currentColor\" stroke-width=\"3\" stroke-dasharray=\"7 6\"/><text x=\"392\" y=\"112\" text-anchor=\"start\">v</text><text x=\"380\" y=\"36\">a</text></g></svg></div>\n<p>Výšku rovnostranného trojuholníka dostaneme z Pytagorovej vety: v² = a² − (a/2)² = <span class=\"frac\"><span class=\"frac-num\">3a²</span><span class=\"frac-den\">4</span></span>, teda v = <span class=\"frac\"><span class=\"frac-num\">a√3</span><span class=\"frac-den\">2</span></span>. Obsah jedného trojuholníka je <span class=\"frac\"><span class=\"frac-num\">a · v</span><span class=\"frac-den\">2</span></span> = <span class=\"frac\"><span class=\"frac-num\">a²√3</span><span class=\"frac-den\">4</span></span>.</p>\n<div class=\"formula\"><span class=\"mini-label\">PRAVIDELNÝ ŠESŤUHOLNÍK</span>o = 6a &nbsp;&nbsp; S = 6 · <span class=\"frac\"><span class=\"frac-num\">a²√3</span><span class=\"frac-den\">4</span></span> = <span class=\"frac\"><span class=\"frac-num\">3a²√3</span><span class=\"frac-den\">2</span></span></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 4 · a = 4 cm</span><p>o = 6 · 4 = <strong>24 cm</strong></p><p>S = <span class=\"frac\"><span class=\"frac-num\">3 · 4² · √3</span><span class=\"frac-den\">2</span></span> = <span class=\"frac\"><span class=\"frac-num\">3 · 16 · √3</span><span class=\"frac-den\">2</span></span> = <strong>24√3 cm²</strong> (približne 41,6 cm²).</p></div>\n<div class=\"warning\"><strong>Pozor:</strong> Výška trojuholníka v nie je rovná strane a. Nie je ani a/2. Je to a√3/2, teda menej ako a.</div>",
        "remember": "Pravidelný šesťuholník = 6 rovnostranných trojuholníkov. o = 6a, S = 6 · (a²√3)/4."
      },
      {
        "id": "sort",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "voľba postupu",
        "title": "Sčítame, alebo odčítame?",
        "question": "Rozhodni, ktorý postup je pri obsahu prirodzený.",
        "labels": [
          "Sčítame obsahy častí",
          "Odčítame vynechanú časť od celku"
        ],
        "items": [
          {
            "text": "Domček: obdĺžnik so strechou v tvare trojuholníka navrchu",
            "answer": true,
            "why": "Útvar sa skladá z dvoch častí, ktoré k sebe priliehajú — obsahy sčítame."
          },
          {
            "text": "Obdĺžnikový pozemok s obdĺžnikovým bazénom uprostred; zaujíma nás obsah trávnika",
            "answer": false,
            "why": "Trávnik je celý pozemok bez bazéna — od obsahu pozemku odčítame obsah bazéna."
          },
          {
            "text": "Písmeno T zložené z dvoch obdĺžnikov",
            "answer": true,
            "why": "Dva obdĺžniky sa nepretínajú — obsahy sčítame."
          },
          {
            "text": "Štvorcový rám: veľký štvorec s menším štvorcovým otvorom uprostred",
            "answer": false,
            "why": "Materiál rámu je celý štvorec bez otvoru — obsahy odčítame."
          },
          {
            "text": "Päťuholník rozdelený uhlopriečkami z jedného vrcholu na tri trojuholníky",
            "answer": true,
            "why": "Tri časti vyplnia celý útvar bez medzier — obsahy sčítame."
          },
          {
            "text": "Obdĺžnikový plech so štvorcovým otvorom; zaujíma nás obsah zostávajúceho plechu",
            "answer": false,
            "why": "Zvyšný plech je celok bez otvoru — obsah otvoru odčítame."
          }
        ]
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "uhly",
        "question": "Z jedného vrcholu osemuholníka vedieme všetky uhlopriečky. Na koľko trojuholníkov sa osemuholník rozdelí?",
        "options": [
          "6",
          "8",
          "7",
          "5"
        ],
        "answer": 0,
        "correct": "Správne: n − 2 = 8 − 2 = 6. Dve strany, ktoré v tomto vrchole končia, trojuholník netvoria.",
        "hint": "Z vrcholu vedieme uhlopriečky do vrcholov, ktoré nie sú jeho susedmi a nie je to vrchol samotný. Skús si to nakresliť na šesťuholníku a spočítaj trojuholníky."
      },
      {
        "id": "c2",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "uhly",
        "question": "Aký je súčet vnútorných uhlov (konvexného) desaťuholníka?",
        "options": [
          "1800°",
          "1440°",
          "1620°",
          "1260°"
        ],
        "answer": 1,
        "correct": "Správne: (10 − 2) · 180° = 8 · 180° = 1440°.",
        "hint": "Desaťuholník sa rozdelí na n − 2 trojuholníkov. Koľko ich je? Každý prispieva 180°."
      },
      {
        "id": "n1",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "uhly",
        "title": "Uhol pravidelného dvanásťuholníka",
        "prompt": "Aký veľký je jeden vnútorný uhol pravidelného dvanásťuholníka? Zapíš počet stupňov.",
        "validate": "exact",
        "answer": 150,
        "success": "Súčet uhlov (12 − 2) · 180° = 1800°, jeden uhol 1800° : 12 = 150°.",
        "hint": "Najprv súčet uhlov (n − 2) · 180°, potom ho vydeľ počtom uhlov n.",
        "reveal": "Správne je 150°: súčet 10 · 180° = 1800° a 1800° : 12 = 150°."
      },
      {
        "id": "n2",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "uhly",
        "title": "Koľko strán má mnohouholník?",
        "prompt": "Pravidelný mnohouholník má každý vnútorný uhol 156°. Koľko má strán?",
        "validate": "exact",
        "answer": 15,
        "success": "Z rovnice (n − 2) · 180 = 156n dostaneme 24n = 360, teda n = 15. Skúška: 13 · 180° : 15 = 156°.",
        "hint": "Zapíš rovnicu (n − 2) · 180 = 156 · n a vyrieš ju.",
        "reveal": "Správne je 15: 180n − 360 = 156n, 24n = 360, n = 15."
      },
      {
        "id": "fig-yard",
        "type": "info",
        "phase": "OBRÁZOK",
        "title": "Obrázok k nasledujúcim úlohám",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 300\" role=\"img\" aria-label=\"Obdĺžnikový dvor široký 15 m a dlhý 10 m. Vo vnútri je obdĺžnikový bazén 6 m krát 4 m. Zvyšok dvora je trávnik.\"><g font-family=\"system-ui\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\"><rect x=\"230\" y=\"50\" width=\"300\" height=\"200\" fill=\"currentColor\" fill-opacity=\".08\" stroke=\"currentColor\" stroke-width=\"3\"/><rect x=\"320\" y=\"110\" width=\"120\" height=\"80\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"380\" y=\"40\">15 m</text><text x=\"206\" y=\"155\" text-anchor=\"end\">10 m</text><text x=\"380\" y=\"145\">bazén</text><text x=\"380\" y=\"170\" font-size=\"16\">6 m × 4 m</text><text x=\"275\" y=\"85\" font-size=\"17\">trávnik</text></g></svg></div><p>Dvor je obdĺžnik 15 m × 10 m. Vo vnútri je obdĺžnikový bazén 6 m × 4 m. Zvyšok dvora je trávnik. Pozorne si pozri, ktoré rozmery patria celému dvoru a ktoré bazénu.</p>"
      },
      {
        "id": "n3",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "zložený útvar",
        "title": "Obsah trávnika",
        "prompt": "Dvor má rozmery 15 m × 10 m a bazén 6 m × 4 m (podľa obrázka). Aký veľký je trávnik? Zapíš obsah v m².",
        "validate": "exact",
        "answer": 126,
        "success": "15 · 10 = 150 m², bazén 6 · 4 = 24 m², trávnik 150 − 24 = 126 m².",
        "hint": "Od obsahu celého dvora odčítaj obsah bazéna.",
        "reveal": "Správne je 126: 150 − 24 = 126 m²."
      },
      {
        "id": "n4",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "obvod",
        "title": "Obrubník okolo trávnika",
        "prompt": "Okolo trávnika (dvor 15 m × 10 m, bazén 6 m × 4 m) treba položiť obrubník pozdĺž vonkajšieho aj vnútorného okraja. Koľko metrov obrubníka je potrebných?",
        "validate": "exact",
        "answer": 70,
        "success": "Vonkajší okraj 2(15 + 10) = 50 m, vnútorný okraj okolo bazéna 2(6 + 4) = 20 m, spolu 70 m.",
        "hint": "Trávnik má dva okraje. Vypočítaj obvod dvora a obvod bazéna. Čo s nimi urobíš, keď oba okraje treba obložiť?",
        "reveal": "Správne je 70: 50 m + 20 m. Pri útvare s otvorom patria do obvodu oba okraje."
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "obvod",
        "question": "Pravidelný šesťuholník má stranu 7 cm. Aký je jeho obvod?",
        "options": [
          "13 cm",
          "42 cm²",
          "42 cm",
          "294 cm"
        ],
        "answer": 2,
        "correct": "Správne: o = 6 · 7 = 42 cm. Obvod je dĺžka, preto cm (nie cm²).",
        "hint": "Obvod pravidelného n-uholníka je n · a. Koľko strán má šesťuholník a v akej jednotke meriame dĺžku?"
      },
      {
        "id": "n5",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "šesťuholník",
        "title": "Obsah šesťuholníka",
        "prompt": "Pravidelný šesťuholník má stranu 6 cm. Jeho obsah je ___ · √3 cm². Doplň číslo.",
        "validate": "exact",
        "answer": 54,
        "success": "S = 3a²√3/2 = 3 · 36 · √3 / 2 = 54√3 cm².",
        "hint": "Použi S = 3a²√3/2 s a = 6, alebo 6 trojuholníkov so stranou 6 cm a výškou 3√3 cm.",
        "reveal": "Správne je 54: 3 · 36 / 2 = 54, teda S = 54√3 cm²."
      },
      {
        "id": "c4",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "šesťuholník",
        "question": "Rovnostranný trojuholník má stranu 10 cm. Aká je jeho výška?",
        "options": [
          "5√3 cm",
          "5 cm",
          "10√3 cm",
          "5√2 cm"
        ],
        "answer": 0,
        "correct": "Správne: v² = 10² − 5² = 75, v = 5√3 cm. Výška je menšia ako strana, ale väčšia ako polovica strany.",
        "hint": "Výška rozdelí rovnostranný trojuholník na dva pravouhlé: prepona 10 cm, jedna odvesna 5 cm. Použi Pytagorovu vetu."
      },
      {
        "id": "match",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "vzorce",
        "title": "Čo vyjadruje ktorý zápis?",
        "labels": [
          "n − 2",
          "(n − 2) · 180°",
          "(n − 2) · 180° : n",
          "n · a",
          "6 · (a · v : 2)"
        ],
        "items": [
          {
            "text": "počet trojuholníkov pri delení n-uholníka z jedného vrcholu",
            "answer": "n − 2"
          },
          {
            "text": "súčet vnútorných uhlov n-uholníka",
            "answer": "(n − 2) · 180°"
          },
          {
            "text": "jeden vnútorný uhol pravidelného n-uholníka",
            "answer": "(n − 2) · 180° : n"
          },
          {
            "text": "obvod pravidelného n-uholníka so stranou a",
            "answer": "n · a"
          },
          {
            "text": "obsah pravidelného šesťuholníka so stranou a (v je výška trojuholníka so stranou a)",
            "answer": "6 · (a · v : 2)"
          }
        ]
      },
      {
        "id": "hunt1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak počítal súčet uhlov šesťuholníka: „6 · 180° = 1080°.“ Čo je na jeho postupe nesprávne?",
        "options": [
          "Šesťuholník sa delí na 4 trojuholníky, nie na 6; správne je 4 · 180° = 720°.",
          "Uhly sa nesčítavajú, ale násobia sa.",
          "Šesťuholník sa delí na 5 trojuholníkov, teda 900°.",
          "Nič, 1080° je správny výsledok."
        ],
        "answer": 0,
        "correct": "Správne: n − 2 = 4 trojuholníky, súčet 720°. Hodnotu 1080° má osemuholník.",
        "hint": "Skús šesťuholník rozdeliť uhlopriečkami z jedného vrcholu a spočítať vzniknuté trojuholníky."
      },
      {
        "id": "hunt2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak počítal obvod domčeka (obdĺžnik 8 cm × 5 cm so strechou: trojuholník so základňou 8 cm a výškou 3 cm) a napísal: „o = 8 + 5 + 5 + 8 + 3 = 29 cm.“ Čo je pravda?",
        "options": [
          "Obvod je správny, 29 cm.",
          "Chýba obsah strechy, správne je 29 + 12 = 41 cm.",
          "Do obvodu patria dve strešné strany po 5 cm; čísla 8 a 3 sú rozmery vo vnútri útvaru. Správne je 28 cm.",
          "Strešné strany majú po 3 cm, správne je 8 + 5 + 5 + 3 + 3 = 24 cm."
        ],
        "answer": 2,
        "correct": "Správne: strešná strana je prepona trojuholníka s odvesnami 4 a 3, teda 5 cm. Obvod 8 + 5 + 5 + 5 + 5 = 28 cm.",
        "hint": "Ktoré z uvedených čísiel ležia na hranici útvaru a ktoré sú len pomocné čiary vo vnútri?"
      },
      {
        "id": "hunt3",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak počítal obsah pravidelného šesťuholníka so stranou 4 cm takto: „6 trojuholníkov, každý má základňu 4 a výšku 4, S = 6 · (4 · 4 : 2) = 48 cm².“ Čo je zle?",
        "options": [
          "Mal použiť 8 trojuholníkov.",
          "Mal použiť vzorec S = 6 · 4 · 4 bez delenia dvomi.",
          "Mal násobiť číslom 4 namiesto 6.",
          "Výška rovnostranného trojuholníka so stranou 4 cm nie je 4 cm, ale 2√3 cm."
        ],
        "answer": 3,
        "correct": "Správne: v = 2√3 cm, S = 6 · (4 · 2√3 : 2) = 24√3 cm². Výsledok 48 cm² je príliš veľký, lebo výška je menšia ako strana.",
        "hint": "Dá sa výška rovnostranného trojuholníka rovnať jeho strane? Skús použiť Pytagorovu vetu."
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úlohy na papier",
        "html": "<p>Odlož zariadenie a vyrieš v zošite. Najprv nakresli náčrt a označ údaje, potom počítaj a zapíš odpoveď s jednotkou.</p><ol><li>Útvar má tvar obdĺžnika 12 cm × 7 cm, na ktorého strane dlhej 12 cm stojí rovnoramenný trojuholník so základňou 12 cm a ramenami 10 cm. Vypočítaj obvod a obsah celého útvaru. Výšku trojuholníka urč Pytagorovou vetou.</li><li>Z obdĺžnika 14 cm × 9 cm je v rohu vystrihnutý štvorec so stranou 3 cm. Vypočítaj obsah a obvod zvyšného útvaru dvoma spôsobmi (sčítaním aj odčítaním).</li><li>Aký veľký je vnútorný uhol pravidelného deväťuholníka? A koľko strán má pravidelný mnohouholník s vnútorným uhlom 160°?</li></ol>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: mnohouholníky",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Rieš v zošite: náčrt, údaje, výpočet s jednotkou. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Aký je súčet vnútorných uhlov deväťuholníka?",
            "answer": "(9 − 2) · 180° = 7 · 180° = <strong>1260°</strong>"
          },
          {
            "level": "zaklad",
            "text": "Aký veľký je jeden vnútorný uhol pravidelného päťuholníka?",
            "answer": "(5 − 2) · 180° : 5 = 540° : 5 = <strong>108°</strong>"
          },
          {
            "level": "zaklad",
            "text": "Vypočítaj obvod pravidelného osemuholníka so stranou 3,5 cm.",
            "answer": "8 · 3,5 = <strong>28 cm</strong>"
          },
          {
            "level": "zaklad",
            "text": "Útvar je zložený z obdĺžnika 9 cm × 4 cm a štvorca so stranou 4 cm, ktorý k nemu priliehajú celou stranou (spolu vznikne jeden dlhší obdĺžnik). Vypočítaj obsah a obvod.",
            "answer": "S = 9 · 4 + 4 · 4 = 36 + 16 = <strong>52 cm²</strong>. Útvar je obdĺžnik 13 cm × 4 cm, o = 2(13 + 4) = <strong>34 cm</strong>."
          },
          {
            "level": "zaklad",
            "text": "Z obdĺžnika 10 cm × 6 cm je vystrihnutý štvorec 2 cm × 2 cm uprostred. Aký je obsah zvyšného útvaru?",
            "answer": "10 · 6 − 2 · 2 = 60 − 4 = <strong>56 cm²</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Vnútorný uhol pravidelného mnohouholníka je 144°. Koľko má strán?",
            "answer": "(n − 2) · 180 = 144n, 36n = 360, n = 10<br><strong>desaťuholník</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Domček: obdĺžnik 12 cm × 7 cm, na ňom rovnoramenný trojuholník (strecha) so základňou 12 cm a ramenami 10 cm. Vypočítaj obsah aj obvod.",
            "answer": "Výška strechy v = √(10² − 6²) = 8 cm. S = 12 · 7 + 12 · 8 : 2 = 84 + 48 = <strong>132 cm²</strong>. o = 12 + 7 + 7 + 10 + 10 = <strong>46 cm</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Pravidelný šesťuholník má stranu 10 cm. Vypočítaj jeho obvod a obsah.",
            "answer": "o = 6 · 10 = <strong>60 cm</strong><br>S = 3 · 100 · √3 : 2 = <strong>150√3 cm²</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Obdĺžnikový pozemok 20 m × 12 m má vnútri okolo celého okraja chodník široký 1 m. Aký je obsah chodníka?",
            "answer": "Vnútorný obdĺžnik: (20 − 2) × (12 − 2) = 18 × 10 = 180 m². Chodník: 240 − 180 = <strong>60 m²</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Súčet vnútorných uhlov mnohouholníka je 1980°. Koľko má strán?",
            "answer": "1980 : 180 = 11 = n − 2, teda n = <strong>13</strong>."
          },
          {
            "level": "bonus",
            "text": "Pravidelný šesťuholník má obvod 30 cm. Vypočítaj jeho obsah.",
            "answer": "a = 30 : 6 = 5 cm. S = 3 · 25 · √3 : 2 = <strong>37,5√3 cm²</strong> (teda 75√3 : 2 cm²)."
          },
          {
            "level": "bonus",
            "text": "Koľko uhlopriečok má pravidelný osemuholník? (Z každého vrcholu vedie n − 3 uhlopriečok, každú sme však započítali dvakrát.)",
            "answer": "Z vrcholu 8 − 3 = 5 uhlopriečok, spolu 8 · 5 : 2 = <strong>20</strong>."
          },
          {
            "level": "bonus",
            "text": "Obsah pravidelného šesťuholníka je 54√3 cm². Aká je jeho strana a obvod?",
            "answer": "3a²√3 : 2 = 54√3, a² = 36, a = 6 cm. o = <strong>36 cm</strong>."
          }
        ]
      },
      {
        "id": "explain-write",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Prečo n − 2?",
        "prompt": "Vlastnými slovami vysvetli, prečo je súčet vnútorných uhlov n-uholníka práve (n − 2) · 180°.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Z jedného vrcholu vedieme uhlopriečky do všetkých vrcholov, ktoré s ním nesusedia. Tým sa n-uholník rozdelí na n − 2 trojuholníkov a uhly týchto trojuholníkov dokopy vyplnia vnútorné uhly n-uholníka. Každý trojuholník má súčet uhlov 180°, preto je súčet (n − 2) · 180°.",
        "placeholder": "Z jedného vrcholu vedieme…"
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; pri 🔴 alebo 🟡 sa vráť k príkladom 1–4.",
        "skills": [
          "rozdelím mnohouholník na trojuholníky a obdĺžniky",
          "zložený útvar počítam sčítaním aj odčítaním",
          "určím súčet vnútorných uhlov a uhol pravidelného n-uholníka",
          "viem obvod a obsah pravidelného šesťuholníka",
          "rozlíšim obvod (dĺžka) a obsah (plocha) a uvádzam jednotky"
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
        "text": "Aký je súčet vnútorných uhlov dvanásťuholníka a aký veľký je jeden uhol pravidelného dvanásťuholníka?",
        "answer": "(12 − 2) · 180° = 1800°; jeden uhol 1800° : 12 = 150°"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 5,
        "text": "Útvar tvaru L vznikol z obdĺžnika 12 cm × 9 cm, z ktorého sme v rohu vyrezali obdĺžnik 5 cm × 4 cm. Vypočítaj obsah a obvod.",
        "answer": "S = 108 − 20 = 88 cm²; o = 2(12 + 9) = 42 cm"
      },
      {
        "id": "w3",
        "level": "rozsirenie",
        "space": 6,
        "text": "Domček: obdĺžnik 10 cm × 6 cm a na ňom rovnoramenný trojuholník so základňou 10 cm a ramenami 13 cm. Vypočítaj obsah a obvod.",
        "answer": "v = √(13² − 5²) = 12 cm; S = 60 + 10 · 12 : 2 = 120 cm²; o = 10 + 6 + 6 + 13 + 13 = 48 cm"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 4,
        "text": "Pravidelný mnohouholník má vnútorný uhol 135°. Koľko má strán a aký je jeho obvod, ak strana meria 6 cm?",
        "answer": "(n − 2) · 180 = 135n, 45n = 360, n = 8; o = 8 · 6 = 48 cm"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 5,
        "text": "Pravidelný šesťuholník má stranu 8 cm. Vypočítaj obvod a obsah.",
        "answer": "o = 48 cm; S = 3 · 64 · √3 : 2 = 96√3 cm²"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 6,
        "text": "Obdĺžnikový dvor 18 m × 12 m má uprostred štvorcový záhon so stranou 4 m. Dvor sa obloží dlažbou okrem záhonu. Koľko m² dlažby a koľko m obrubníka okolo záhonu treba?",
        "answer": "S = 216 − 16 = 200 m²; obrubník 4 · 4 = 16 m"
      }
    ]
  }
});
