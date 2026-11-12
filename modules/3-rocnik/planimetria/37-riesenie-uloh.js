MathPlatform.registerModule({
  "id": "3-u02-h037",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 37 · Riešenie úloh",
    "prerequisites": [
      "obvod a obsah kruhu, výseče a medzikružia (hodina 36)",
      "obvod a obsah obdĺžnika, štvorca a mnohouholníka (hodiny 26–34)",
      "zlomky a úprava výrazov s π z 1. ročníka",
      "Pytagorova veta z 2. ročníka (bonus s vpísaným štvorcom)"
    ],
    "planContent": [
      "Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka."
    ],
    "planPerformance": [
      "Poznať a vedieť opísať vlastnosti základných rovinných útvarov.",
      "Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov."
    ],
    "goals": [
      "vypočítať obsah a dĺžku oblúka výseče zo stredového uhla",
      "určiť obsah medzikružia a zloženého útvaru sčítaním alebo odčítaním obsahov",
      "rozlíšiť obvod výseče (oblúk + dva polomery) od dĺžky oblúka",
      "zapísať presný výsledok s π a správnou jednotkou"
    ],
    "competencies": [
      "rozklad zloženého útvaru na jednoduché časti",
      "prepájať obrázok, slovný opis a vzorec",
      "presný zápis výsledku s π",
      "kontrola primeranosti a jednotiek"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie: modelovanie, reprezentácie, presný matematický jazyk a argumentácia.",
      "Rozšírenie: položky ROZŠÍRENIE a BONUS (vpísaný štvorec, kruhový odsek, spätné určenie uhla a polomeru)."
    ],
    "flow": [
      "0–5 min: aktivácia: vzorce kruhu, výseče a medzikružia",
      "5–15 min: tri vzorové príklady (výseč, medzikružie, zložený útvar) s náčrtmi",
      "15–30 min: platforma (cca 25–35 min podľa tempa): otázky, hľadanie chyby",
      "Samostatná práca bez mobilu: okno s polkruhom; zbierka podľa úrovní",
      "Posledných 5 min: porovnanie postupov, sebahodnotenie"
    ],
    "diagnostics": [
      "či žiak do vzorca dosadzuje polomer, nie priemer",
      "či do obvodu výseče započíta aj dva polomery",
      "či pri medzikruží odčítava obsahy, nie polomery",
      "či výsledok zapíše s π a jednotkou (cm vs cm²)"
    ],
    "partialUse": [
      "Modul možno použiť celý (25–35 min), alebo len vzorové príklady a otázky; zbierku zadať ako domácu úlohu.",
      "Pomôcky: zošit, pravítko, kružidlo; kalkulačka nie je potrebná, výsledky sú v tvare s π.",
      "Zbierka a worksheet.tasks sú určené na papier; v generátore pracovných listov ich možno zaradiť na tlačený list.",
      "Hodnotenie: priebežná spätná väzba a sebahodnotenie; XP nie sú známka."
    ]
  },
  "student": {
    "title": "Riešenie úloh",
    "subtitle": "Téma 37 · Planimetria: kruh, výseč, medzikružie",
    "intro": "Úlohy s kruhom, výsečami, medzikružím a zloženými útvarmi. Počítaj na papieri, v aplikácii zapisuješ výsledok a hľadáš chyby.",
    "estimatedTime": "25–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme o kruhu",
        "html": "<p>V minulej hodine sme sa naučili merať kruh a jeho časti. Vzorce potrebuješ mať po ruke, preto si ich pripomeň:</p>\n<div class=\"term-list\">\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Kruh</div><p class=\"term-rule\">Obvod o = 2πr, obsah S = πr². Polomer r je polovica priemeru d.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Výseč s uhlom α</div><p class=\"term-rule\">Je to <span class=\"frac\"><span class=\"frac-num\">α</span><span class=\"frac-den\">360</span></span> celého kruhu. Obsah S = πr² · <span class=\"frac\"><span class=\"frac-num\">α</span><span class=\"frac-den\">360</span></span>, dĺžka oblúka l = 2πr · <span class=\"frac\"><span class=\"frac-num\">α</span><span class=\"frac-den\">360</span></span>.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Medzikružie</div><p class=\"term-rule\">Vonkajší polomer R, vnútorný r. Obsah S = π(R² − r²).</p></div>\n</div>\n<div class=\"warning\"><strong>Pozor:</strong> obvod meriame v dĺžkových jednotkách (cm, m), obsah v štvorcových (cm², m²). Do vzorca vždy dosadzuj <span class=\"hl\">polomer</span>, nie priemer.</div>",
        "remember": "Výseč je zlomok kruhu: α/360. Rovnakým zlomkom vynásobíme obsah aj obvod kruhu (len oblúk, nie polomery)."
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "určiť obsah a dĺžku oblúka výseče zo stredového uhla",
          "vypočítať obsah medzikružia ako rozdiel dvoch kruhov",
          "rozložiť zložený útvar na jednoduché časti a obsahy sčítať alebo odčítať",
          "napísať presný výsledok s π a s jednotkou"
        ]
      },
      {
        "id": "obs-sector",
        "type": "info",
        "phase": "NAJPRV OBRÁZOK",
        "title": "Výseč: zlomok kruhu",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 520 270\" role=\"img\" aria-label=\"Kruh s polomerom 6 cm, vyznačená výseč so stredovým uhlom 60 stupňov, ktorá tvorí šestinu kruhu\" font-size=\"14\" fill=\"currentColor\" font-family=\"sans-serif\"><circle cx=\"160\" cy=\"135\" r=\"105\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"5 4\" opacity=\".45\"/><path d=\"M160 135 L265 135 A105 105 0 0 0 212.5 44.07 Z\" fill=\"rgba(155,107,47,.25)\" stroke=\"#9b6b2f\" stroke-width=\"3\"/><path d=\"M188 135 A28 28 0 0 0 174 110.75\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"196\" y=\"128\" >α</text><text x=\"205\" y=\"154\" >r = 6 cm</text><text x=\"300\" y=\"80\" font-weight=\"bold\">Celý kruh: 360°</text><text x=\"300\" y=\"108\" >Výseč: α = 60°</text><text x=\"300\" y=\"136\" >Zlomok kruhu: 60/360 = 1/6</text><text x=\"300\" y=\"164\" >Plocha: S = 1/6 · πr²</text><text x=\"300\" y=\"192\" >Oblúk: l = 1/6 · 2πr</text></svg></div><p>Kruh má celý uhol 360°. Výseč so stredovým uhlom 60° zaberá 60 z 360 stupňov, teda <strong>šestinu</strong> kruhu. Preto aj jej obsah je šestina obsahu celého kruhu.</p>\n<p>Rozmýšľaj takto: <span class=\"hl\">najprv zlomok, potom vzorec celého kruhu</span>. Vďaka tomu si nemusíš pamätať samostatné vzorce pre každý uhol.</p>"
      },
      {
        "id": "ex1",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Vzorový príklad 1: výseč",
        "html": "<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1 · VÝSEČ</span>\n<p>Výseč kruhu má polomer r = 6 cm a stredový uhol α = 60°. Vypočítaj obsah, dĺžku oblúka a obvod výseče.</p>\n<ol class=\"steps\"><li>Zlomok kruhu: 60/360 = 1/6.</li>\n<li>Obsah: S = π · 6² · 1/6 = 36π/6 = <strong>6π cm²</strong>.</li>\n<li>Dĺžka oblúka: l = 2π · 6 · 1/6 = 12π/6 = <strong>2π cm</strong>.</li>\n<li>Obvod výseče tvoria <span class=\"hl\">oblúk a dva polomery</span>: o = 2r + l = 12 + 2π = <strong>(12 + 2π) cm</strong>.</li></ol></div>\n<div class=\"warning\"><strong>Pozor:</strong> obvod výseče nie je len dĺžka oblúka. Hranica výseče obsahuje aj dve rovné úsečky, každá dlhá r. Zabudnúť na ne je najčastejšia chyba.</div>",
        "remember": "Obvod výseče = 2r + l. Výsledok (12 + 2π) cm nezlučuj do jedného čísla: 12 a 2π sú rôzne členy."
      },
      {
        "id": "ex2",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Vzorový príklad 2: medzikružie",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 520 270\" role=\"img\" aria-label=\"Medzikružie s vonkajším polomerom 5 cm a vnútorným polomerom 3 cm\" font-size=\"14\" fill=\"currentColor\" font-family=\"sans-serif\"><path fill-rule=\"evenodd\" d=\"M255 135 A105 105 0 1 0 45 135 A105 105 0 1 0 255 135 Z M213 135 A63 63 0 1 0 87 135 A63 63 0 1 0 213 135 Z\" fill=\"rgba(155,107,47,.25)\" stroke=\"#9b6b2f\" stroke-width=\"3\"/><line x1=\"150\" y1=\"135\" x2=\"255\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"150\" y1=\"135\" x2=\"87\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><text x=\"190\" y=\"126\" >R = 5 cm</text><text x=\"95\" y=\"126\" font-size=\"12\">r = 3 cm</text><text x=\"300\" y=\"90\" font-weight=\"bold\">Medzikružie = veľký kruh</text><text x=\"300\" y=\"114\" >bez malého kruhu</text><text x=\"300\" y=\"150\" >S = πR² − πr²</text><text x=\"300\" y=\"176\" >= 25π − 9π = 16π cm²</text></svg></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2 · MEDZIKRUŽIE</span>\n<p>Medzikružie má vonkajší polomer R = 5 cm a vnútorný polomer r = 3 cm. Aký je jeho obsah?</p>\n<ol class=\"steps\"><li>Obsah veľkého kruhu: π · 5² = 25π cm².</li>\n<li>Obsah malého kruhu (diery): π · 3² = 9π cm².</li>\n<li>Medzikružie = veľký kruh <span class=\"hl\">mínus</span> malý: 25π − 9π = <strong>16π cm²</strong>.</li></ol>\n<p>Vzorec: S = π(R² − r²) = π(25 − 9) = 16π cm².</p></div>\n<div class=\"warning\"><strong>Pozor:</strong> odčítame <span class=\"hl\">obsahy</span>, nie polomery. π(R − r)² = π · 2² = 4π cm² je nesprávne, lebo (R − r)² a R² − r² sú rôzne výrazy.</div>"
      },
      {
        "id": "ex3",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Vzorový príklad 3: zložený útvar",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 520 270\" role=\"img\" aria-label=\"Štvorec so stranou 8 cm, z ktorého je vyrezaný kruh s polomerom 4 cm\" font-size=\"14\" fill=\"currentColor\" font-family=\"sans-serif\"><path fill-rule=\"evenodd\" d=\"M40 20 H250 V230 H40 Z M250 125 A105 105 0 1 0 40 125 A105 105 0 1 0 250 125 Z\" fill=\"rgba(155,107,47,.25)\" stroke=\"#9b6b2f\" stroke-width=\"3\"/><circle cx=\"145\" cy=\"125\" r=\"105\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"145\" y1=\"125\" x2=\"250\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"180\" y=\"118\" >r = 4 cm</text><text x=\"110\" y=\"252\" >a = 8 cm</text><text x=\"285\" y=\"80\" font-weight=\"bold\">Štvorec bez vyrezaného kruhu</text><text x=\"285\" y=\"110\" >S = a² − πr²</text><text x=\"285\" y=\"136\" >= 64 − 16π cm²</text><text x=\"285\" y=\"176\" >Obvod = 4a + 2πr</text><text x=\"285\" y=\"202\" >= 32 + 8π cm</text></svg></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 3 · ZLOŽENÝ ÚTVAR</span>\n<p>Zo štvorca so stranou 8 cm je vyrezaný kruh s polomerom 4 cm (priemer 8 cm sa dotýka všetkých strán). Aký je obsah a obvod zvyšku?</p>\n<ol class=\"steps\"><li>Rozloženie: <strong>štvorec mínus kruh</strong>.</li>\n<li>Obsah štvorca: 8² = 64 cm². Obsah kruhu: π · 4² = 16π cm².</li>\n<li>Obsah zvyšku: S = (64 − 16π) cm².</li>\n<li>Obvod: hranica zvyšku má <span class=\"hl\">vonkajšiu</span> časť (štvorec: 4 · 8 = 32 cm) aj <span class=\"hl\">vnútornú</span> časť (kružnica: 2π · 4 = 8π cm). Spolu o = (32 + 8π) cm.</li></ol></div>",
        "remember": "Zložený útvar: nakresli náčrt, rozlož ho na jednoduché časti a rozhodni, ktoré obsahy sčítaš a ktoré odčítaš."
      },
      {
        "id": "c-fraction",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "výseč",
        "question": "Výseč kruhu má stredový uhol 40°. Aký zlomok celého kruhu (360°) tvorí?",
        "options": [
          "1/4",
          "1/9",
          "4/9",
          "1/3"
        ],
        "answer": 1,
        "correct": "40/360 = 1/9. Výseč je deviatina kruhu, takže aj jej obsah je deviatina obsahu celého kruhu.",
        "hint": "Zlomok je stredový uhol ku celému uhlu 360°. Skráť ho."
      },
      {
        "id": "c-diameter",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "kruh",
        "question": "Kruh má priemer 10 cm. Ktorý výraz udáva jeho obsah v cm²?",
        "options": [
          "π · 10²",
          "2 · π · 5",
          "π · 5²",
          "π · 5"
        ],
        "answer": 2,
        "correct": "Polomer je polovica priemeru: r = 5 cm, preto S = π · 5² cm².",
        "hint": "Vo vzorci S = πr² je r polomer. Ako ho získaš z priemeru?"
      },
      {
        "id": "c-annulus",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "medzikružie",
        "question": "Medzikružie vzniká z kruhu s polomerom R = 7 cm vyrezaním kruhu s polomerom r = 4 cm. Ktorý zápis dáva jeho obsah?",
        "options": [
          "π(7² − 4²) cm²",
          "π(7 − 4)² cm²",
          "π(7² + 4²) cm²",
          "2π(7 − 4) cm²"
        ],
        "answer": 0,
        "correct": "Obsah medzikružia je rozdiel obsahov: π·49 − π·16 = 33π cm².",
        "hint": "Medzikružie je veľký kruh bez malého. Čo to znamená pre ich obsahy?"
      },
      {
        "id": "c-perim",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "obvod výseče",
        "question": "Výseč má polomer 6 cm a dĺžku oblúka 4π cm. Aký je jej obvod?",
        "options": [
          "4π cm",
          "(12 + 4π) cm",
          "(6 + 4π) cm",
          "(24 + 4π) cm"
        ],
        "answer": 1,
        "correct": "Obvod výseče = oblúk + dva polomery = 4π + 2 · 6 = (12 + 4π) cm.",
        "hint": "Hranica výseče sa skladá z oblúka a z dvoch rovných úsečiek."
      },
      {
        "id": "c-quarter",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "výseč",
        "question": "Celý kruh má obsah 36π cm². Výseč s uhlom 90° z neho má aký obsah?",
        "options": [
          "18π cm²",
          "4π cm²",
          "12π cm²",
          "9π cm²"
        ],
        "answer": 3,
        "correct": "90° je štvrtina z 360°, takže 36π : 4 = 9π cm².",
        "hint": "Zisti, koľkokrát sa 90° zmestí do 360°."
      },
      {
        "id": "n-sector",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "výseč",
        "title": "Obsah výseče",
        "prompt": "Výseč má polomer 6 cm a stredový uhol 120°. Jej obsah je k·π cm². Zadaj k.",
        "validate": "exact",
        "answer": 12,
        "success": "Zlomok je 120/360 = 1/3, S = π · 36 / 3 = 12π cm².",
        "hint": "Najprv zlomok kruhu 120/360, potom vynásob obsahom celého kruhu 36π.",
        "reveal": "Správne je 12: 36π · 1/3 = 12π."
      },
      {
        "id": "n-arc",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "oblúk",
        "title": "Dĺžka oblúka",
        "prompt": "Výseč s polomerom 9 cm má stredový uhol 100°. Dĺžka jej oblúka je k·π cm. Zadaj k.",
        "validate": "exact",
        "answer": 5,
        "success": "Obvod kruhu je 18π cm. Zlomok 100/360 = 5/18. Oblúk: 18π · 5/18 = 5π cm.",
        "hint": "Najprv obvod celého kruhu 2π · 9, potom jeho zlomok 100/360.",
        "reveal": "Správne je 5: 18π · 100/360 = 5π."
      },
      {
        "id": "n-annulus",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "medzikružie",
        "title": "Obsah medzikružia",
        "prompt": "Okolo kruhového jazierka s polomerom 6 m je chodník široký 4 m, teda vonkajší polomer je 10 m. Obsah chodníka je k·π m². Zadaj k.",
        "validate": "exact",
        "answer": 64,
        "success": "S = π(10² − 6²) = π(100 − 36) = 64π m².",
        "hint": "Chodník je medzikružie: vonkajší kruh bez jazierka.",
        "reveal": "Správne je 64: 100 − 36."
      },
      {
        "id": "n-square",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "zložený útvar",
        "title": "Štvorec s vyrezaným kruhom",
        "prompt": "Zo štvorca so stranou 12 cm je vyrezaný kruh s polomerom 6 cm. Obsah zvyšku je (144 − k·π) cm². Zadaj k.",
        "validate": "exact",
        "answer": 36,
        "success": "Obsah kruhu je π · 6² = 36π cm², preto S = (144 − 36π) cm².",
        "hint": "Obsah zvyšku je štvorec mínus kruh. Aký obsah má kruh s r = 6 cm?",
        "reveal": "Správne je 36: π · 6² = 36π."
      },
      {
        "id": "n-angle",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "výseč",
        "title": "Stredový uhol z obsahov",
        "prompt": "Kruh s polomerom 5 cm má obsah 25π cm². Výseč z neho má obsah 5π cm². Aký je jej stredový uhol v stupňoch?",
        "validate": "exact",
        "answer": 72,
        "success": "Výseč je 5π/25π = 1/5 kruhu, a 1/5 z 360° je 72°.",
        "hint": "Zisti, aký zlomok kruhu výseč tvorí, a vynásob ním 360°.",
        "reveal": "Správne je 72: 360 · 1/5."
      },
      {
        "id": "sort-quantity",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "obvod a obsah",
        "title": "Dĺžka alebo plocha?",
        "question": "Rozhodni, či vzorec dáva dĺžku (v cm) alebo obsah (v cm²).",
        "labels": [
          "dĺžka (cm)",
          "obsah (cm²)"
        ],
        "items": [
          {
            "text": "2πr",
            "answer": true,
            "why": "Obvod kruhu je dĺžka, meria sa v cm."
          },
          {
            "text": "πr²",
            "answer": false,
            "why": "Obsah kruhu je plocha, meria sa v cm²."
          },
          {
            "text": "π(R² − r²)",
            "answer": false,
            "why": "Obsah medzikružia je plocha."
          },
          {
            "text": "dĺžka oblúka l = 2πr · α/360",
            "answer": true,
            "why": "Oblúk je krivá čiara, má dĺžku."
          },
          {
            "text": "obvod výseče 2r + l",
            "answer": true,
            "why": "Obvod je vždy dĺžka (dva polomery a oblúk)."
          },
          {
            "text": "πr² · α/360",
            "answer": false,
            "why": "Je to zlomok obsahu kruhu, teda plocha."
          }
        ]
      },
      {
        "id": "matrix-plan",
        "type": "matrix",
        "phase": "PRENES",
        "skill": "rozklad útvaru",
        "title": "Ako rozložiť útvar?",
        "labels": [
          "odčítať obsahy",
          "sčítať obsahy",
          "zlomok kruhu"
        ],
        "items": [
          {
            "text": "medzikružie",
            "answer": "odčítať obsahy"
          },
          {
            "text": "štvorec s kruhovým otvorom uprostred",
            "answer": "odčítať obsahy"
          },
          {
            "text": "okno: obdĺžnik s polkruhom navrchu",
            "answer": "sčítať obsahy"
          },
          {
            "text": "atletická dráha: obdĺžnik a dva polkruhy po bokoch",
            "answer": "sčítať obsahy"
          },
          {
            "text": "výseč s uhlom 45°",
            "answer": "zlomok kruhu"
          }
        ]
      },
      {
        "id": "err-annulus",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "medzikružie",
        "question": "Žiak počíta obsah medzikružia s R = 6 cm a r = 2 cm takto: S = π(6 − 2)² = 16π cm². V čom je chyba?",
        "options": [
          "Treba odčítať obsahy kruhov: π · 6² − π · 2² = 32π cm²",
          "Treba sčítať polomery: π(6 + 2)² = 64π cm²",
          "Treba použiť obvod: 2π · 6 − 2π · 2 = 8π cm²",
          "Chyba nie je, 16π cm² je správny výsledok"
        ],
        "answer": 0,
        "correct": "Odčítavajú sa obsahy: 36π − 4π = 32π cm². Rozdiel polomerov dáva šírku medzikružia, nie jeho obsah.",
        "hint": "Medzikružie je veľký kruh bez malého. Čo sa odčíta: polomery, alebo obsahy?"
      },
      {
        "id": "err-sector",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "obvod výseče",
        "question": "Žiak počíta obvod výseče s polomerom 3 cm a oblúkom 2π cm a napíše o = 2π cm. Čo je na jeho výsledku nesprávne?",
        "options": [
          "Nezapočítal dva polomery: správne je (6 + 2π) cm",
          "Oblúk mal vynásobiť číslom 360",
          "Obvod výseče sa počíta rovnako ako obsah, v cm²",
          "Treba pripočítať len jeden polomer: (3 + 2π) cm"
        ],
        "answer": 0,
        "correct": "Obvod výseče = oblúk + dva polomery = 2π + 2 · 3 = (6 + 2π) cm.",
        "hint": "Obíď celú hranicu výseče. Koľko rovných úsečiek na nej je?"
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Okno: obvod aj obsah",
        "html": "<p>Okno má tvar obdĺžnika so šírkou 80 cm a výškou 120 cm, na ktorom je navrchu polkruh s priemerom 80 cm (priemer leží na hornej strane obdĺžnika). Načrtni okno a vypočítaj jeho <strong>obsah</strong> a <strong>obvod</strong> (vonkajšiu hranicu). Výsledky zapíš v tvare s π a so správnymi jednotkami.</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: kruh a zložené útvary",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Rieš v zošite, výsledok zapíš s π a s jednotkou. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "html": "Kruh má polomer 7 cm. Vypočítaj jeho obvod a obsah.",
            "answer": "o = 2π · 7 = <strong>14π cm</strong>, S = π · 7² = <strong>49π cm²</strong>."
          },
          {
            "level": "zaklad",
            "html": "Výseč má polomer 12 cm a stredový uhol 30°. Vypočítaj jej obsah.",
            "answer": "30/360 = 1/12, S = π · 144 / 12 = <strong>12π cm²</strong>."
          },
          {
            "level": "zaklad",
            "html": "Medzikružie má polomery R = 9 cm a r = 5 cm. Vypočítaj jeho obsah.",
            "answer": "S = π(81 − 25) = <strong>56π cm²</strong>."
          },
          {
            "level": "zaklad",
            "html": "Výseč s polomerom 8 cm má stredový uhol 45°. Vypočítaj dĺžku jej oblúka.",
            "answer": "l = 2π · 8 · 45/360 = 16π/8 = <strong>2π cm</strong>."
          },
          {
            "level": "rozsirenie",
            "html": "Výseč s polomerom 10 cm má stredový uhol 72°. Vypočítaj jej obvod.",
            "answer": "l = 2π · 10 · 72/360 = 4π cm, o = 2 · 10 + 4π = <strong>(20 + 4π) cm</strong>."
          },
          {
            "level": "rozsirenie",
            "html": "Z obdĺžnika 12 cm × 8 cm sú vyrezané dva kruhy s polomerom 2 cm. Vypočítaj obsah zvyšku.",
            "answer": "S = 12 · 8 − 2 · π · 2² = <strong>(96 − 8π) cm²</strong>."
          },
          {
            "level": "rozsirenie",
            "html": "Okno: obdĺžnik 80 cm × 120 cm s polkruhom s priemerom 80 cm navrchu. Vypočítaj obsah a obvod okna.",
            "answer": "Polkruh má r = 40 cm. S = 80 · 120 + ½ · π · 40² = 9 600 + 800π, teda <strong>(9 600 + 800π) cm²</strong>. Obvod: dve strany 120 + 120, spodná strana 80 a oblúk polkruhu π · 40, teda <strong>(320 + 40π) cm</strong>."
          },
          {
            "level": "rozsirenie",
            "html": "Medzikružie má obsah 40π cm² a vnútorný polomer 3 cm. Aký je jeho vonkajší polomer?",
            "answer": "R² − 9 = 40, teda R² = 49 a R = <strong>7 cm</strong>."
          },
          {
            "level": "bonus",
            "html": "Do kruhu s polomerom 5 cm je vpísaný štvorec (jeho uhlopriečka je priemer kruhu). Vypočítaj obsah časti kruhu mimo štvorca.",
            "answer": "Uhlopriečka štvorca je 10 cm, jeho strana a: a² + a² = 10², teda a² = 50 cm² (obsah štvorca). Zvyšok: <strong>(25π − 50) cm²</strong>."
          },
          {
            "level": "bonus",
            "html": "Výseč s polomerom 6 cm má obsah 12π cm². Aký je jej stredový uhol?",
            "answer": "Celý kruh má 36π cm². Zlomok je 12π/36π = 1/3, teda α = 1/3 · 360° = <strong>120°</strong>."
          },
          {
            "level": "bonus",
            "html": "Štvrťkruh s polomerom 6 cm (uhol 90°) je „odrezaný“ rovnou úsečkou medzi koncami polomerov. Vypočítaj obsah vzniknutého kruhového odseku (štvrťkruh bez pravouhlého trojuholníka s odvesnami 6 cm a 6 cm).",
            "answer": "Štvrťkruh: π · 36 / 4 = 9π cm². Trojuholník: 6 · 6 / 2 = 18 cm². Odsek: <strong>(9π − 18) cm²</strong>."
          }
        ]
      },
      {
        "id": "arg",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "title": "Prečo odčítame obsahy?",
        "prompt": "Vlastnými slovami vysvetli, prečo sa obsah medzikružia počíta ako π(R² − r²) a nie ako π(R − r)².",
        "model": "Vzor: Medzikružie vznikne tak, že z veľkého kruhu vyrežeme malý. Plocha sa preto zmenší o plochu malého kruhu, takže odčítame obsahy πR² a πr². Rozdiel polomerov R − r je len šírka medzikružia, nie jeho plocha, a obsah rastie s druhou mocninou polomeru."
      },
      {
        "id": "transfer",
        "type": "choice",
        "phase": "MATURITNÝ FORMÁT",
        "skill": "modelovanie",
        "question": "Kruhové jazierko s polomerom 3 m je obklopené chodníkom širokým 1 m. Ako vypočítaš plochu chodníka?",
        "options": [
          "π · 1² = π m²",
          "π · (4 − 3)² = π m²",
          "π · 4² − π · 3² = 7π m²",
          "π · 4² + π · 3² = 25π m²"
        ],
        "answer": 2,
        "correct": "Chodník je medzikružie s R = 3 + 1 = 4 m a r = 3 m: S = π(16 − 9) = 7π m².",
        "hint": "Vonkajší polomer je polomer jazierka plus šírka chodníka."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Označ, ako dobre to zvládaš. Nie je to známka. Čo máš 🔴 alebo 🟡, si prejdi ešte raz v zbierke.",
        "skills": [
          "obsah a oblúk výseče zo stredového uhla",
          "obvod výseče (oblúk aj dva polomery)",
          "obsah medzikružia",
          "zložený útvar: sčítať alebo odčítať obsahy",
          "zápis výsledku s π a jednotkou"
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
        "html": "Kruh má priemer 14 cm. Vypočítaj jeho obvod a obsah.",
        "answer": "r = 7 cm; o = <strong>14π cm</strong>, S = <strong>49π cm²</strong>."
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 4,
        "html": "Výseč s polomerom 10 cm má stredový uhol 36°. Vypočítaj jej obsah.",
        "answer": "36/360 = 1/10; S = 100π / 10 = <strong>10π cm²</strong>."
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 4,
        "html": "Medzikružie má polomery R = 8 cm a r = 6 cm. Vypočítaj jeho obsah.",
        "answer": "S = π(64 − 36) = <strong>28π cm²</strong>."
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 5,
        "html": "Výseč s polomerom 12 cm má stredový uhol 150°. Vypočítaj dĺžku oblúka a obvod výseče.",
        "answer": "l = 2π · 12 · 150/360 = <strong>10π cm</strong>; o = 24 + 10π = <strong>(24 + 10π) cm</strong>."
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 5,
        "html": "Zo štvorca so stranou 10 cm je vyrezaný kruh s polomerom 5 cm. Vypočítaj obsah a obvod zvyšku.",
        "answer": "S = <strong>(100 − 25π) cm²</strong>; o = 40 + 10π = <strong>(40 + 10π) cm</strong>."
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 6,
        "html": "Atletická dráha: obdĺžnik 90 m × 60 m a na dvoch kratších stranách polkruhy s priemerom 60 m. Vypočítaj obsah plochy a dĺžku jej obvodu.",
        "answer": "r = 30 m. S = 90 · 60 + π · 30² = <strong>(5 400 + 900π) m²</strong>; o = 2 · 90 + 2π · 30 = <strong>(180 + 60π) m</strong>."
      }
    ]
  }
});
