MathPlatform.registerModule({
  "id": "3-u02-h036",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 36 · Obvod a obsah kruhu a jeho častí",
    "prerequisites": [
      "základná planimetria zo ZŠ",
      "Pytagorova veta a goniometria trojuholníka z 2. ročníka",
      "logika, množiny a algebraické úpravy z 1. ročníka",
      "goniometria z predchádzajúceho tematického celku 3. ročníka",
      "učivo hodín 22–35"
    ],
    "planContent": [
      "Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka."
    ],
    "planPerformance": [
      "Poznať a vedieť opísať vlastnosti základných rovinných útvarov.",
      "Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov."
    ],
    "goals": [
      "vypočítať obvod a obsah kruhu pomocou vzťahov o = 2πr a S = πr², výsledok ponechať v tvare s π",
      "rozlíšiť polomer a priemer a dopočítať polomer z obvodu alebo obsahu (rovnice)",
      "určiť dĺžku oblúka a obsah kruhového výseku ako podiel α/360° z celku",
      "vypočítať obsah medzikružia a zloženého útvaru s kruhom",
      "uvádzať správne jednotky a rozlišovať obvod od obsahu"
    ],
    "competencies": [
      "prepájanie obrázka, slovného opisu a vzorca",
      "práca s presnou (iracionálnou) hodnotou π bez zaokrúhľovania",
      "riešenie rovníc zo vzorcov",
      "úvaha o závislosti obvodu a obsahu od polomeru"
    ],
    "enrichment": [
      "zmena obvodu a obsahu pri zmene polomeru (pomery 2 : 1 a 4 : 1)",
      "kruh vpísaný do štvorca a šesťuholník vpísaný do kruhu (nadväznosť na hodiny 34–35)",
      "Maturitný štandard je iba obohatenie: modelovanie reálnych kruhových tvarov a argumentácia."
    ],
    "flow": [
      "0–4 min: opakovanie — π ako iracionálne číslo, jednotky obvodu a obsahu",
      "4–14 min: obvod, obsah, výsek a oblúk, medzikružie — spoločne na tabuli s obrázkami",
      "14–30 min: platforma: obvod/obsah, výsek, medzikružie, rovnice, hľadanie chýb",
      "30–42 min: BEZ MOBILU a zbierka podľa úrovne",
      "42–45 min: zhrnutie podľa živých výsledkov"
    ],
    "diagnostics": [
      "zamieňa polomer a priemer",
      "používa S = 2πr alebo o = πr²",
      "pri výseku zabudne pripočítať dva polomery k obvodu",
      "medzikružie počíta ako π(R − r)²",
      "píše cm namiesto cm² (alebo opačne), zaokrúhľuje π skôr, než treba"
    ],
    "partialUse": [
      "pri nedostatku času vynechať úlohy s medzikružím a bonusové položky",
      "mobil nenahrádza ručné počítanie; výpočty a náčrty sa píšu do zošita",
      "pre žiakov so ŠVVP: karta so vzorcami o, S, l, S výseku, S medzikružia"
    ]
  },
  "student": {
    "title": "Obvod a obsah kruhu a jeho častí",
    "subtitle": "Polomer → vzorec → výsledok s π",
    "intro": "Spočítaš obvod a obsah kruhu, dĺžku oblúka, obsah výseku a medzikružia. Výsledky zapisuj s π (napr. 25π cm²). Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "25–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Zo ZŠ poznáš kruh, kružnicu a číslo π. V 1. ročníku si sa naučil, že π je <strong>iracionálne číslo</strong> — nemá konečný ani periodický desatinný rozvoj. Preto výsledky s kruhom budeme <span class=\"hl\">zapisovať s π</span> (napr. 25π cm²), čo je presná hodnota. Desatinné číslo 3,14 je len približné.</p><p>Opakuj si ešte: obsah sa meria v štvorcových jednotkách (cm²), obvod v dĺžkových (cm); súčet uhlov celého kruhu je 360°.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "vypočítať obvod a obsah kruhu: o = 2πr, S = πr²",
          "rozlíšiť polomer a priemer a prepočítať jeden na druhý",
          "vypočítať dĺžku oblúka a obsah kruhového výseku",
          "vypočítať obsah medzikružia",
          "z daného obvodu alebo obsahu určiť polomer"
        ]
      },
      {
        "id": "circumference",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Polomer, priemer a obvod kruhu",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 300\" role=\"img\" aria-label=\"Kruh so stredom S: polomer r je úsečka zo stredu na kružnicu, priemer d prechádza stredom a spája dva body kružnice. Platí d = 2r.\"><g font-family=\"system-ui\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\"><circle cx=\"380\" cy=\"150\" r=\"110\" fill=\"currentColor\" fill-opacity=\".08\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"270\" y1=\"150\" x2=\"490\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><line x1=\"380\" y1=\"150\" x2=\"380\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"2.5\"/><circle cx=\"380\" cy=\"150\" r=\"4\"/><text x=\"364\" y=\"172\" text-anchor=\"end\" font-size=\"18\">S</text><text x=\"392\" y=\"100\" text-anchor=\"start\">r</text><text x=\"435\" y=\"176\">d = 2r</text><text x=\"380\" y=\"20\" font-size=\"16\">kružnica: obvod o</text></g></svg></div><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Polomer r</div><p class=\"term-rule\">Vzdialenosť stredu od kružnice.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Priemer d</div><p class=\"term-rule\">Najdlhšia tetiva, prechádza stredom: d = 2r.</p></div></div>\n<p>Obvod kružnice je vždy π-krát dlhší než jej priemer:</p><div class=\"formula\"><span class=\"mini-label\">OBVOD KRUHU</span>o = πd = 2πr</div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1 · r = 5 cm</span><p>o = 2 · π · 5 = <strong>10π cm</strong> (približne 31,4 cm).</p></div>\n<div class=\"warning\"><strong>Pozor:</strong> Najčastejšia chyba je zámena priemeru a polomeru. Ak je zadaný <em>priemer</em>, polomer je jeho polovica. Obvod 2πr obsahuje r, nie d.</div>",
        "remember": "o = 2πr = πd. Pozor, či je v zadaní polomer alebo priemer."
      },
      {
        "id": "area",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Obsah kruhu",
        "html": "<div class=\"formula\"><span class=\"mini-label\">OBSAH KRUHU</span>S = πr²</div>\n<p>r² znamená r · r (nie 2r). Jednotka obsahu je štvorcová.</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2 · priemer 12 cm</span><p>r = 12 : 2 = 6 cm</p><p>S = π · 6² = <strong>36π cm²</strong></p><p>o = 2π · 6 = <strong>12π cm</strong></p></div>\n<div class=\"compare\"><div class=\"good\"><span class=\"mini-label\">OBVOD</span><p>o = 2πr<br>dĺžka, jednotka cm</p></div><div class=\"good\"><span class=\"mini-label\">OBSAH</span><p>S = πr²<br>plocha, jednotka cm²</p></div></div>\n<div class=\"warning\"><strong>Pozor:</strong> S = πr² nie je 2πr ani (πr)². Pri priemere d = 12 cm nie je S = π · 12².</div>",
        "remember": "S = πr². Najprv polomer (z priemeru ho dostaneš delením dvomi), potom umocni polomer."
      },
      {
        "id": "sector",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Kruhový výsek a oblúk",
        "html": "<p><span class=\"hl\">Kruhový výsek</span> je časť kruhu medzi dvoma polomermi so stredovým uhlom α. Zaberá <strong>α z 360°</strong> celého kruhu, preto jeho obsah aj dĺžka oblúka sú rovnaký podiel zo zodpovedajúcich hodnôt celého kruhu.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 760 300\" role=\"img\" aria-label=\"Kruhový výsek so stredovým uhlom α = 60° a polomerom r. Oblúk má dĺžku l. Výsek je šestina celého kruhu.\"><g font-family=\"system-ui\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\"><circle cx=\"300\" cy=\"150\" r=\"110\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\".35\"/><path d=\"M300 150 L410 150 A110 110 0 0 0 355 54.74 Z\" fill=\"currentColor\" fill-opacity=\".18\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><path d=\"M336 150 A36 36 0 0 0 318 118.82\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"345\" y=\"140\" text-anchor=\"start\" font-size=\"18\">α</text><text x=\"355\" y=\"172\">r</text><text x=\"428\" y=\"90\" text-anchor=\"start\">oblúk l</text><text x=\"330\" y=\"94\" text-anchor=\"end\">r</text><text x=\"540\" y=\"120\" text-anchor=\"start\">α = 60°</text><text x=\"540\" y=\"150\" text-anchor=\"start\" font-size=\"17\">60° z 360° = ⅙ kruhu</text></g></svg></div>\n<div class=\"formula\"><span class=\"mini-label\">OBLÚK</span>l = <span class=\"frac\"><span class=\"frac-num\">α</span><span class=\"frac-den\">360°</span></span> · 2πr</div><div class=\"formula\"><span class=\"mini-label\">VÝSEK</span>S = <span class=\"frac\"><span class=\"frac-num\">α</span><span class=\"frac-den\">360°</span></span> · πr²</div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 3 · r = 6 cm, α = 60°</span><p>Podiel: 60 : 360 = ⅙.</p><p>l = ⅙ · 2π · 6 = <strong>2π cm</strong></p><p>S = ⅙ · π · 36 = <strong>6π cm²</strong></p><p>Obvod výseku (hranica útvaru) = oblúk + <strong>dva polomery</strong> = 2π + 6 + 6 = <strong>(2π + 12) cm</strong>.</p></div>\n<div class=\"warning\"><strong>Pozor:</strong> Obvod výseku nie je len dĺžka oblúka. K oblúku pripočítaj oba polomery, ktoré výsek ohraničujú.</div>",
        "remember": "Výsek a oblúk sú podiel α/360° z kruhu. Obvod výseku = oblúk + 2r."
      },
      {
        "id": "annulus",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Medzikružie",
        "html": "<p><span class=\"hl\">Medzikružie</span> je plocha medzi dvoma kružnicami s rovnakým stredom. Je to väčší kruh bez menšieho, preto obsahy <strong>odčítame</strong> (rovnako ako pri útvare s otvorom).</p><div class=\"logic-visual\"><svg viewBox=\"0 0 760 300\" role=\"img\" aria-label=\"Medzikružie: plocha medzi dvoma sústrednými kružnicami s polomermi R (väčší) a r (menší).\"><g font-family=\"system-ui\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M260 150 a120 120 0 1 0 240 0 a120 120 0 1 0 -240 0 Z M310 150 a70 70 0 1 0 140 0 a70 70 0 1 0 -140 0 Z\" fill=\"currentColor\" fill-opacity=\".15\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"380\" y1=\"150\" x2=\"500\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"2.5\"/><line x1=\"380\" y1=\"150\" x2=\"380\" y2=\"80\" stroke=\"currentColor\" stroke-width=\"2.5\"/><circle cx=\"380\" cy=\"150\" r=\"4\"/><text x=\"448\" y=\"140\">R</text><text x=\"394\" y=\"120\" text-anchor=\"start\">r</text><text x=\"380\" y=\"290\" font-size=\"18\">S = πR² − πr²</text></g></svg></div>\n<div class=\"formula\"><span class=\"mini-label\">MEDZIKRUŽIE</span>S = πR² − πr² = π(R² − r²)</div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 4 · R = 7 cm, r = 4 cm</span><p>S = π · (49 − 16) = <strong>33π cm²</strong></p></div>\n<div class=\"warning\"><strong>Pozor:</strong> S = π(R − r)² je chyba. Najprv sa umocňuje každý polomer zvlášť a až potom odčítaš: R² − r² (nie (R − r)²).</div>",
        "remember": "Medzikružie: S = π(R² − r²)."
      },
      {
        "id": "inverse",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Rovnica vzťahov: z obvodu alebo obsahu späť na polomer",
        "html": "<p>Vzorce o = 2πr a S = πr² sú <strong>rovnice</strong>. Ak poznáš obvod alebo obsah, dopočítaš polomer:</p><ol class=\"steps\"><li>Napíš vzorec a dosaď zadanú hodnotu.</li><li>Vydeľ obe strany číslom π (alebo 2π).</li><li>Z r² = … urob odmocninu; polomer je kladný.</li><li>Dopočítaj, čo sa pýta (obsah, obvod, priemer).</li></ol>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 5 · S = 81π cm²</span><p>πr² = 81π, teda r² = 81, r = 9 cm</p><p>o = 2π · 9 = <strong>18π cm</strong>, d = 18 cm.</p></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 6 · o = 14π cm</span><p>2πr = 14π, teda r = 7 cm, S = π · 7² = <strong>49π cm²</strong>.</p></div>\n<div class=\"compare\"><div class=\"good\"><span class=\"mini-label\">POLOMER × 2</span><p>obvod × 2<br>obsah × 4</p></div><div class=\"good\"><span class=\"mini-label\">POLOMER × 3</span><p>obvod × 3<br>obsah × 9</p></div></div>\n<div class=\"warning\"><strong>Pozor:</strong> Obvod rastie s r, ale obsah s r². Preto sa pri zdvojnásobení polomeru obsah nezdvojnásobí, ale zštvornásobí.</div>",
        "remember": "Obvod je úmerný r, obsah r². Keď poznáš obsah, polomer je odmocnina z S : π."
      },
      {
        "id": "sort",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "obvod alebo obsah",
        "title": "Obvod, alebo obsah?",
        "question": "Rozhodni, či ide o obvod (dĺžku), alebo o obsah (plochu).",
        "labels": [
          "Obvod (dĺžka)",
          "Obsah (plocha)"
        ],
        "items": [
          {
            "text": "Dĺžka drôtu na obruč okrúhleho stola",
            "answer": true,
            "why": "Drôt vedie po okraji, meriame dĺžku okraja: o = 2πr."
          },
          {
            "text": "Množstvo farby na náter okrúhleho terča",
            "answer": false,
            "why": "Náter pokrýva plochu: S = πr²."
          },
          {
            "text": "Dĺžka stuhy okolo okrúhlej torty",
            "answer": true,
            "why": "Stuha vedie po okraji — obvod."
          },
          {
            "text": "Plocha okrúhleho trávnika, ktorý treba zasiať",
            "answer": false,
            "why": "Zasiať treba celú plochu — obsah."
          },
          {
            "text": "Výsledok vyjadrený v cm²",
            "answer": false,
            "why": "Štvorcová jednotka patrí obsahu."
          },
          {
            "text": "Výsledok vyjadrený v metroch",
            "answer": true,
            "why": "Dĺžková jednotka patrí obvodu."
          }
        ]
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "obsah kruhu",
        "question": "Kruh má priemer 10 cm. Aký je jeho obsah?",
        "options": [
          "100π cm²",
          "10π cm²",
          "25π cm²",
          "50π cm²"
        ],
        "answer": 2,
        "correct": "Správne: r = 5 cm, S = π · 5² = 25π cm².",
        "hint": "Priemer nie je polomer. Najprv ho vydeľ dvomi, potom umocni polomer."
      },
      {
        "id": "c2",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "obvod kruhu",
        "question": "Okolo kruhového záhonu s polomerom 2 m treba položiť obrubník. Koľko metrov obrubníka je potrebných?",
        "options": [
          "4π m",
          "4π m²",
          "2π m",
          "8π m"
        ],
        "answer": 0,
        "correct": "Správne: o = 2πr = 2π · 2 = 4π m. Obrubník vedie po obvode, preto je výsledok v metroch.",
        "hint": "Obrubník vedie po okraji záhonu. Hľadáš teda obvod, nie obsah. Dosaď do 2πr."
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "výsek",
        "question": "Kruhový výsek má polomer 6 cm a stredový uhol 60°. Aký je jeho obvod (dĺžka celej hranice výseku)?",
        "options": [
          "2π cm",
          "(2π + 6) cm",
          "12π cm",
          "(2π + 12) cm"
        ],
        "answer": 3,
        "correct": "Správne: oblúk l = ⅙ · 2π · 6 = 2π cm a dva polomery po 6 cm: 2π + 12 cm.",
        "hint": "Hranica výseku sa skladá z oblúka a z dvoch polomerov. Skontroluj, či máš všetky tri časti."
      },
      {
        "id": "c4",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "medzikružie",
        "question": "Medzikružie je ohraničené kružnicami s polomermi R = 5 cm a r = 3 cm. Aký je jeho obsah?",
        "options": [
          "16π cm²",
          "4π cm²",
          "34π cm²",
          "64π cm²"
        ],
        "answer": 0,
        "correct": "Správne: π(R² − r²) = π(25 − 9) = 16π cm².",
        "hint": "Obsah medzikružia je obsah veľkého kruhu bez malého kruhu: πR² − πr²."
      },
      {
        "id": "c5",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "zmena polomeru",
        "question": "Polomer kruhu zväčšíme dvakrát. Ako sa zmení jeho obsah?",
        "options": [
          "zväčší sa dvakrát",
          "zväčší sa štyrikrát",
          "zväčší sa osemkrát",
          "nezmení sa"
        ],
        "answer": 1,
        "correct": "Správne: (2r)² = 4r², obsah sa zväčší štyrikrát. Obvod 2π · 2r = 2 · 2πr sa zväčší len dvakrát.",
        "hint": "Dosaď nový polomer 2r do vzorca S = πr². Čo urobí druhá mocnina s dvojkou?"
      },
      {
        "id": "n1",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "obvod kruhu",
        "title": "Obvod kruhu",
        "prompt": "Kruh má polomer 7 cm. Jeho obvod je ___ · π cm. Doplň číslo.",
        "validate": "exact",
        "answer": 14,
        "success": "o = 2π · 7 = 14π cm.",
        "hint": "Použi o = 2πr s r = 7.",
        "reveal": "Správne je 14: 2 · 7 = 14, o = 14π cm."
      },
      {
        "id": "n2",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "obsah kruhu",
        "title": "Obsah kruhu z priemeru",
        "prompt": "Kruh má priemer 18 cm. Jeho obsah je ___ · π cm². Doplň číslo.",
        "validate": "exact",
        "answer": 81,
        "success": "r = 9 cm, S = π · 81 = 81π cm².",
        "hint": "Z priemeru najprv urč polomer. Potom ho umocni na druhú.",
        "reveal": "Správne je 81: r = 9 cm, 9² = 81."
      },
      {
        "id": "n3",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "rovnica vzťahov",
        "title": "Polomer z obsahu",
        "prompt": "Kruh má obsah 64π cm². Aký je jeho polomer v cm?",
        "validate": "exact",
        "answer": 8,
        "success": "πr² = 64π, r² = 64, r = 8 cm.",
        "hint": "Vydeľ obsah číslom π a potom odmocni.",
        "reveal": "Správne je 8: r² = 64."
      },
      {
        "id": "n4",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "rovnica vzťahov",
        "title": "Obsah z obvodu",
        "prompt": "Kruh má obvod 30π cm. Jeho obsah je ___ · π cm². Doplň číslo.",
        "validate": "exact",
        "answer": 225,
        "success": "Z 2πr = 30π je r = 15 cm, S = π · 15² = 225π cm².",
        "hint": "Najprv polomer z obvodu (2r = 30), potom obsah.",
        "reveal": "Správne je 225: r = 15 cm, 15² = 225."
      },
      {
        "id": "n5",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "výsek",
        "title": "Obsah výseku",
        "prompt": "Kruhový výsek má polomer 12 cm a stredový uhol 90°. Jeho obsah je ___ · π cm². Doplň číslo.",
        "validate": "exact",
        "answer": 36,
        "success": "90° je štvrtina kruhu: ¼ · π · 144 = 36π cm².",
        "hint": "Aký zlomok z 360° je 90°? Tou časťou vynásob obsah celého kruhu.",
        "reveal": "Správne je 36: ¼ · 144 = 36."
      },
      {
        "id": "n6",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "oblúk",
        "title": "Dĺžka oblúka",
        "prompt": "Oblúk kružnice s polomerom 9 cm má stredový uhol 40°. Jeho dĺžka je ___ · π cm. Doplň číslo.",
        "validate": "exact",
        "answer": 2,
        "success": "l = 40/360 · 2π · 9 = ⅑ · 18π = 2π cm.",
        "hint": "40° z 360° je ⅑. Tou časťou vynásob obvod 2π · 9.",
        "reveal": "Správne je 2: ⅑ · 18 = 2."
      },
      {
        "id": "n7",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "výsek",
        "title": "Stredový uhol",
        "prompt": "Výsek kruhu s polomerom 6 cm má obsah 9π cm². Aký je jeho stredový uhol v stupňoch?",
        "validate": "exact",
        "answer": 90,
        "success": "Kruh má 36π cm², výsek 9π cm² je štvrtina: 90°.",
        "hint": "Porovnaj obsah výseku s obsahom celého kruhu 36π. Aká časť to je?",
        "reveal": "Správne je 90°: 9π je štvrtina z 36π."
      },
      {
        "id": "n8",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "medzikružie",
        "title": "Obsah medzikružia",
        "prompt": "Medzikružie má polomery R = 10 cm a r = 6 cm. Jeho obsah je ___ · π cm². Doplň číslo.",
        "validate": "exact",
        "answer": 64,
        "success": "π(100 − 36) = 64π cm².",
        "hint": "Použi π(R² − r²). Najprv umocni každý polomer osobitne.",
        "reveal": "Správne je 64: 100 − 36."
      },
      {
        "id": "n9",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "priemer",
        "title": "Priemer z obvodu",
        "prompt": "Koleso má obvod 24π cm. Aký je jeho priemer v cm?",
        "validate": "exact",
        "answer": 24,
        "success": "o = πd, teda d = 24 cm (polomer je 12 cm).",
        "hint": "Pozor, hľadáš priemer. Obvod je π-krát priemer.",
        "reveal": "Správne je 24: o = πd, d = 24 cm."
      },
      {
        "id": "n10",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "zložený útvar",
        "title": "Štvorec a kruh",
        "prompt": "Do štvorca so stranou 10 cm je vpísaný kruh, ktorý sa dotýka všetkých strán. Obsah časti štvorca mimo kruhu je 100 − ___ · π cm². Doplň číslo.",
        "validate": "exact",
        "answer": 25,
        "success": "Priemer kruhu je 10 cm, r = 5 cm, S kruhu = 25π cm². Zvyšok: 100 − 25π cm².",
        "hint": "Priemer kruhu sa rovná strane štvorca. Aký je polomer?",
        "reveal": "Správne je 25: r = 5 cm, πr² = 25π."
      },
      {
        "id": "match",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "vzorce",
        "title": "Priraď vzorec",
        "labels": [
          "2πr",
          "πr²",
          "(α : 360°) · 2πr",
          "(α : 360°) · πr²",
          "π(R² − r²)"
        ],
        "items": [
          {
            "text": "obvod kruhu s polomerom r",
            "answer": "2πr"
          },
          {
            "text": "obsah kruhu s polomerom r",
            "answer": "πr²"
          },
          {
            "text": "dĺžka oblúka so stredovým uhlom α",
            "answer": "(α : 360°) · 2πr"
          },
          {
            "text": "obsah kruhového výseku so stredovým uhlom α",
            "answer": "(α : 360°) · πr²"
          },
          {
            "text": "obsah medzikružia s polomermi R a r",
            "answer": "π(R² − r²)"
          }
        ]
      },
      {
        "id": "hunt1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak počítal obsah kruhu s priemerom 10 cm: „S = π · 10² = 100π cm².“ Čo je zle?",
        "options": [
          "Do vzorca dosadil priemer namiesto polomeru; správne je π · 5² = 25π cm².",
          "Mal vynásobiť číslom 2: 200π cm².",
          "Mal počítať obvod 2π · 10 = 20π cm.",
          "Nič, výsledok je správny."
        ],
        "answer": 0,
        "correct": "Správne: vo vzorci S = πr² je r polomer, teda 5 cm. Preto 25π cm².",
        "hint": "Je 10 cm polomer kruhu, alebo jeho priemer?"
      },
      {
        "id": "hunt2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak počítal obsah výseku s r = 6 cm a α = 60°: „S = (60 : 360) · 2π · 6 = 2π cm².“ Čo urobil zle?",
        "options": [
          "Mal deliť 90, nie 360.",
          "Nič, 2π cm² je správne.",
          "Použil vzorec pre dĺžku oblúka; obsah je (60 : 360) · π · 6² = 6π cm².",
          "Mal pripočítať dva polomery: 2π + 12."
        ],
        "answer": 2,
        "correct": "Správne: 2π cm je dĺžka oblúka. Obsah výseku je ⅙ · π · 36 = 6π cm², jednotka cm².",
        "hint": "Je to obsah (plocha), alebo dĺžka? Ktorý vzorec obsahuje r²?"
      },
      {
        "id": "hunt3",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak počítal medzikružie s R = 7 cm a r = 4 cm: „S = π · (7 − 4)² = 9π cm².“ Čo je zle?",
        "options": [
          "Mal sčítať: π(7 + 4)² = 121π cm².",
          "Vzorec je π(R² − r²), teda π · (49 − 16) = 33π cm².",
          "Mal počítať obvod namiesto obsahu.",
          "Nič, 9π cm² je správne."
        ],
        "answer": 1,
        "correct": "Správne: odčítajú sa obsahy kruhov πR² a πr², nie polomery. Výsledok 33π cm².",
        "hint": "Obsah medzikružia je rozdiel dvoch obsahov kruhov. Umocňuje sa pred odčítaním, alebo po ňom?"
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úlohy na papier",
        "html": "<p>Odlož zariadenie. Nakresli náčrt, označ údaje a výsledky zapíš s π a s jednotkou.</p><ol><li>Kruh má priemer 14 cm. Vypočítaj obvod a obsah.</li><li>Kruhový výsek má polomer 10 cm a stredový uhol 72°. Vypočítaj dĺžku oblúka, obsah výseku a obvod výseku.</li><li>Okolo kruhového jazierka s polomerom 3 m je chodník široký 1 m. Aký je obsah chodníka a aký dlhý je jeho vonkajší okraj?</li><li>Obsah kruhu je 49π cm². Zdvojnásobíme jeho polomer. Aký bude nový obsah?</li></ol>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: kruh",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Výsledky zapisuj presne s π a s jednotkou. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Kruh má polomer 4 cm. Vypočítaj obvod a obsah.",
            "answer": "o = 2π · 4 = <strong>8π cm</strong>, S = π · 16 = <strong>16π cm²</strong>"
          },
          {
            "level": "zaklad",
            "text": "Kruh má priemer 20 cm. Vypočítaj obvod a obsah.",
            "answer": "r = 10 cm, o = <strong>20π cm</strong>, S = <strong>100π cm²</strong>"
          },
          {
            "level": "zaklad",
            "text": "Obvod kruhu je 10π cm. Aký je jeho polomer a obsah?",
            "answer": "2πr = 10π, r = <strong>5 cm</strong>, S = <strong>25π cm²</strong>"
          },
          {
            "level": "zaklad",
            "text": "Obsah kruhu je 49π cm². Aký je jeho polomer a obvod?",
            "answer": "r² = 49, r = <strong>7 cm</strong>, o = <strong>14π cm</strong>"
          },
          {
            "level": "zaklad",
            "text": "Okrúhly stôl má priemer 1,2 m. Vypočítaj obsah jeho dosky a obvod.",
            "answer": "r = 0,6 m, S = π · 0,36 = <strong>0,36π m²</strong>, o = 2π · 0,6 = <strong>1,2π m</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Kruhový výsek má r = 9 cm a α = 120°. Vypočítaj dĺžku oblúka, obsah a obvod výseku.",
            "answer": "120° je ⅓ kruhu. l = ⅓ · 18π = <strong>6π cm</strong>, S = ⅓ · 81π = <strong>27π cm²</strong>, obvod = 6π + 18 = <strong>(6π + 18) cm</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Kruhový výsek má r = 8 cm a α = 45°. Vypočítaj dĺžku oblúka a obsah.",
            "answer": "45° je ⅛ kruhu. l = ⅛ · 16π = <strong>2π cm</strong>, S = ⅛ · 64π = <strong>8π cm²</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Medzikružie má polomery 9 cm a 5 cm. Vypočítaj jeho obsah.",
            "answer": "π(81 − 25) = <strong>56π cm²</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Obsah kruhu je 36π cm². Polomer zväčšíme dvakrát. Aký bude nový obsah a koľkokrát väčší?",
            "answer": "Nový polomer 12 cm, S = <strong>144π cm²</strong>, teda <strong>4-krát</strong> väčší."
          },
          {
            "level": "rozsirenie",
            "text": "Kruhový výsek s polomerom 6 cm má obsah 12π cm². Aký je jeho stredový uhol?",
            "answer": "Celý kruh 36π cm², 12π je ⅓ z neho: <strong>120°</strong>"
          },
          {
            "level": "bonus",
            "text": "Koleso bicykla má priemer 60 cm. Koľko otáčok urobí na dráhe 600π cm?",
            "answer": "Jedna otáčka = obvod = 60π cm. 600π : 60π = <strong>10 otáčok</strong>"
          },
          {
            "level": "bonus",
            "text": "Okolo kruhového bazéna s polomerom 3 m je chodník široký 1 m. Aký je obsah chodníka a dĺžka jeho vonkajšieho okraja?",
            "answer": "R = 4 m. S = π(16 − 9) = <strong>7π m²</strong>, vonkajší okraj o = 2π · 4 = <strong>8π m</strong>"
          },
          {
            "level": "bonus",
            "text": "Pravidelný šesťuholník so stranou 6 cm je vpísaný do kruhu (vrcholy ležia na kružnici, polomer kruhu je 6 cm). Aký je obsah časti kruhu mimo šesťuholníka?",
            "answer": "S kruhu = 36π cm², S šesťuholníka = 3 · 36 · √3 : 2 = 54√3 cm². Rozdiel: <strong>(36π − 54√3) cm²</strong>"
          },
          {
            "level": "bonus",
            "text": "Do štvorca so stranou 10 cm je vpísaný kruh. Aký obsah štvorca kruh nezaberá?",
            "answer": "r = 5 cm, S kruhu = 25π cm². <strong>(100 − 25π) cm²</strong>"
          }
        ]
      },
      {
        "id": "explain-write",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Prečo pri zdvojnásobení polomeru štvornásobok?",
        "prompt": "Vlastnými slovami vysvetli, prečo sa pri zdvojnásobení polomeru kruhu jeho obvod zdvojnásobí, ale obsah zväčší štyrikrát.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Obvod je 2πr, polomer vystupuje len raz, preto dvojnásobný polomer dáva dvojnásobný obvod. Obsah je πr², polomer sa násobí sám sebou: (2r)² = 4r², takže obsah je štyrikrát väčší.",
        "placeholder": "Obvod je 2πr, preto…"
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; pri 🔴 alebo 🟡 sa vráť k príkladom 1–6.",
        "skills": [
          "rozlíšim polomer a priemer a správne ich dosadím",
          "vypočítam obvod a obsah kruhu (s π)",
          "vypočítam dĺžku oblúka a obsah výseku",
          "vypočítam obsah medzikružia",
          "z obvodu alebo obsahu určím polomer"
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
        "text": "Kruh má polomer 6 cm. Vypočítaj jeho obvod a obsah.",
        "answer": "o = 12π cm, S = 36π cm²"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 4,
        "text": "Kruh má priemer 16 cm. Vypočítaj jeho obvod a obsah.",
        "answer": "r = 8 cm, o = 16π cm, S = 64π cm²"
      },
      {
        "id": "w3",
        "level": "rozsirenie",
        "space": 5,
        "text": "Kruhový výsek má polomer 12 cm a stredový uhol 60°. Vypočítaj dĺžku oblúka, obsah a obvod výseku.",
        "answer": "l = 4π cm, S = 24π cm², obvod = (4π + 24) cm"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 4,
        "text": "Medzikružie má polomery 8 cm a 5 cm. Vypočítaj jeho obsah.",
        "answer": "π(64 − 25) = 39π cm²"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 4,
        "text": "Obvod kruhu je 12π cm. Aký je jeho obsah?",
        "answer": "r = 6 cm, S = 36π cm²"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 6,
        "text": "Kruhový výsek s polomerom 6 cm má stredový uhol 150°. Vypočítaj dĺžku oblúka a obsah výseku.",
        "answer": "l = 150/360 · 12π = 5π cm; S = 150/360 · 36π = 15π cm²"
      }
    ]
  }
});
