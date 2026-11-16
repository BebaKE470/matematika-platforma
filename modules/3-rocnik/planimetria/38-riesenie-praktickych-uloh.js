MathPlatform.registerModule({
  "id": "3-u02-h038",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 38 · Riešenie praktických úloh",
    "prerequisites": [
      "obvod a obsah obdĺžnika, štvorca, trojuholníka a kruhu (hodiny 22–37)",
      "prevody jednotiek dĺžky zo ZŠ",
      "desatinné čísla a násobenie, delenie",
      "zaokrúhľovanie z 1. ročníka"
    ],
    "planContent": [
      "Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka."
    ],
    "planPerformance": [
      "Poznať a vedieť opísať vlastnosti základných rovinných útvarov.",
      "Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov."
    ],
    "goals": [
      "rozhodnúť, či praktická úloha vyžaduje obvod alebo obsah",
      "prevádzať jednotky obsahu (cm², m², a, ha)",
      "vypočítať spotrebu materiálu (dlaždice, farba, plot) a správne zaokrúhliť nahor",
      "Modul je zameraný na obsah písomky (skrátená verzia: len pojmy, vzorce a typy úloh, ktoré sa píšu)."
    ],
    "competencies": [
      "modelovanie reálnej situácie",
      "práca s jednotkami",
      "kontrola výsledku odhadom",
      "komunikácia výsledku celou vetou"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie: modelovanie, reprezentácie, interpretácia výsledku v kontexte a argumentácia.",
      "Rozšírenie: položky ROZŠÍRENIE a BONUS (zložené plochy, rezerva materiálu, cena pozemku)."
    ],
    "flow": [
      "0–5 min: obvod alebo obsah, prevody jednotiek, vzorový príklad (pozemok a plot)",
      "5–25 min: platforma (cca 20–25 min): obvod/obsah, jednotky, počet dlaždíc, kruhový záhon, hľadanie chyby",
      "Samostatná práca bez mobilu: terasa tvaru L; zbierka (výber)",
      "Posledných 5 min: porovnanie odpovedí, sebahodnotenie",
      "Modul je zameraný na obsah písomky (skrátená verzia: len pojmy, vzorce a typy úloh, ktoré sa píšu)."
    ],
    "diagnostics": [
      "či žiak zjednotí jednotky pred počítaním",
      "či pri prevode obsahu použije 100 · 100 a nie 100",
      "či pri spotrebe materiálu zaokrúhli nahor",
      "či odpočíta otvory (okná, dvere)",
      "či výsledok zapíše s jednotkou a vety odpovedá na otázku"
    ],
    "partialUse": [
      "Modul možno použiť celý (25–35 min), alebo len prevody jednotiek a vzorové príklady; zbierku zadať ako domácu úlohu.",
      "Pomôcky: zošit, pravítko; kalkulačka je povolená pri desatinných číslach.",
      "Medzipredmetové vzťahy: technické predmety, geografia (výmera pozemkov), každodenný život (ceny, nákupy).",
      "Zbierka a worksheet.tasks sú určené na papier; v generátore pracovných listov ich možno zaradiť na tlačený list.",
      "Hodnotenie: priebežná spätná väzba a sebahodnotenie; XP nie sú známka."
    ]
  },
  "student": {
    "title": "Riešenie praktických úloh",
    "subtitle": "Téma 38 · Planimetria v praxi",
    "intro": "Pozemok, plot, dlažba a spotreba materiálu: rozhodneš, či treba obvod alebo obsah, prevedieš jednotky a odpovieš celou vetou. Počítaj na papieri.",
    "estimatedTime": "20–25 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Obvod alebo obsah, jednotky a spotreba materiálu",
        "html": "<p>V praktických úlohách nikto nenapíše „vypočítaj obsah“. Treba pochopiť, čo sa v skutočnosti hľadá:</p>\n<div class=\"compare\"><div class=\"good\"><span class=\"mini-label\">OBVOD (DĹŽKA)</span><p>plot, ohrada, lišta, obruba záhona, stuha okolo darčeka. Meriame <strong>okolo dokola</strong>. Jednotky: m, cm.</p></div>\n<div class=\"good\"><span class=\"mini-label\">OBSAH (PLOCHA)</span><p>dlažba, trávnik, náter steny, koberec, strecha. Pokrývame <strong>celú plochu</strong>. Jednotky: m², cm², a, ha.</p></div></div>\n<p>Pripomeň si: obdĺžnik o = 2(a + b), S = a · b; štvorec o = 4a, S = a²; kruh o = 2πr, S = πr²; trojuholník S = <span class=\"frac\"><span class=\"frac-num\">a · v</span><span class=\"frac-den\">2</span></span>.</p>\n<p>Pri obsahu sa prevodové číslo <span class=\"hl\">umocňuje</span>:</p>\n<div class=\"formula\">1 m² = 100 · 100 cm² = 10 000 cm²</div>\n<div class=\"formula\">1 a = 100 m²<span class=\"formula-note\">ár: štvorec 10 m × 10 m</span></div>\n<div class=\"formula\">1 ha = 100 a = 10 000 m²<span class=\"formula-note\">hektár: štvorec 100 m × 100 m</span></div>\n<div class=\"warning\"><strong>Pozor:</strong> 1 m² nie je 100 cm². Pred počítaním premeň všetky rozmery na <span class=\"hl\">jednu jednotku</span>. Pri nákupe materiálu (dlažba, farba) zaokrúhľuj výsledok vždy <span class=\"hl\">nahor</span> a odpovedz celou vetou s jednotkou.</div>",
        "remember": "Okolo dokola = obvod (m). Celá plocha = obsah (m²). 1 m² = 10 000 cm², 1 a = 100 m², 1 ha = 10 000 m²."
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "rozhodnúť, či úloha vyžaduje obvod alebo obsah",
          "prevádzať jednotky m², cm², a, ha",
          "vypočítať spotrebu materiálu a správne zaokrúhliť nahor"
        ]
      },
      {
        "id": "sort-oo",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "obvod alebo obsah",
        "title": "Obvod alebo obsah?",
        "question": "Rozhodni, čo musíš v úlohe vypočítať.",
        "labels": [
          "obvod (dĺžka)",
          "obsah (plocha)"
        ],
        "items": [
          {
            "text": "plot okolo pozemku",
            "answer": true,
            "why": "Plot vedie po hranici pozemku, treba dĺžku."
          },
          {
            "text": "dlažba na terase",
            "answer": false,
            "why": "Dlaždice pokrývajú celú plochu."
          },
          {
            "text": "farba na stenu",
            "answer": false,
            "why": "Farba sa nanáša na plochu steny."
          },
          {
            "text": "podlahová lišta okolo izby",
            "answer": true,
            "why": "Lišta ide pozdĺž stien, teda po obvode."
          },
          {
            "text": "množstvo trávnika na ihrisko",
            "answer": false,
            "why": "Trávnik pokrýva celú plochu ihriska."
          },
          {
            "text": "obruba okolo kruhového záhona",
            "answer": true,
            "why": "Obruba je okolo dokola, ide o obvod kruhu 2πr."
          }
        ]
      },
      {
        "id": "matrix-units",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "prevody jednotiek",
        "title": "Ktorá jednotka je to?",
        "labels": [
          "1 m²",
          "1 a",
          "1 ha"
        ],
        "items": [
          {
            "text": "10 000 cm²",
            "answer": "1 m²"
          },
          {
            "text": "100 m²",
            "answer": "1 a"
          },
          {
            "text": "10 000 m²",
            "answer": "1 ha"
          },
          {
            "text": "100 a",
            "answer": "1 ha"
          },
          {
            "text": "0,01 ha",
            "answer": "1 a"
          },
          {
            "text": "0,0001 ha",
            "answer": "1 m²"
          }
        ]
      },
      {
        "id": "ex-plot",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Vzorové príklady: plot, plocha a dlažba",
        "html": "<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1 · POZEMOK</span>\n<p>Pozemok tvaru obdĺžnika má rozmery 40 m a 25 m. Okolo celého pozemku postavíme plot, v jednom mieste bude brána široká 3 m. Meter plotu stojí 18 €. Aká je cena plotu a aká je plocha pozemku v aroch?</p>\n<ol class=\"steps\"><li>Plot ide okolo dokola, preto počítame <strong>obvod</strong>: o = 2 · (40 + 25) = 130 m.</li>\n<li>Na bráne plot nebude: 130 − 3 = 127 m.</li>\n<li>Cena: 127 · 18 = <strong>2 286 €</strong>.</li>\n<li>Plocha je <strong>obsah</strong>: S = 40 · 25 = 1 000 m² = 1 000 : 100 = <strong>10 a</strong>.</li></ol></div>\n<div class=\"warning\"><strong>Pozor:</strong> obvod aj obsah tu vyšli ako rôzne čísla s rôznymi jednotkami (130 m a 1 000 m²). Nikdy ich nepočítaj ako jedno číslo a vždy napíš odpoveď celou vetou: „Plot bude stáť 2 286 €.“</div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD · DLAŽBA</span>\n<p>Izba má rozmery 5 m × 3 m. Dlaždice sú štvorce so stranou 50 cm a predávajú sa v baleniach po 6 kusov po 9 € za balenie. Koľko balení treba a koľko stoja?</p>\n<ol class=\"steps\"><li>Obsah izby: 5 · 3 = 15 m². Obsah dlaždice: 0,5 · 0,5 = 0,25 m².</li>\n<li>Počet dlaždíc: 15 : 0,25 = 60.</li>\n<li>Balenia: 60 : 6 = 10 balení, cena 10 · 9 = <strong>90 €</strong>. (Keby podiel nevyšiel celý, zaokrúhli nahor.)</li></ol></div>"
      },
      {
        "id": "n-a",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "prevody jednotiek",
        "title": "Z m² na áry",
        "prompt": "Pozemok má rozmery 50 m a 40 m. Koľko árov má jeho plocha? (1 a = 100 m²)",
        "validate": "exact",
        "answer": 20,
        "success": "Obsah je 50 · 40 = 2 000 m², čo je 2 000 : 100 = 20 a.",
        "hint": "Najprv vypočítaj obsah v m², potom ho prever na áry.",
        "reveal": "Správne je 20: 2 000 m² : 100 m² = 20."
      },
      {
        "id": "n-tiles",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "dlažba",
        "title": "Počet dlaždíc",
        "prompt": "Terasa má rozmery 6 m × 4 m. Dlaždice majú rozmer 50 cm × 50 cm. Koľko dlaždíc treba na celú terasu?",
        "validate": "exact",
        "answer": 96,
        "success": "600 : 50 = 12 a 400 : 50 = 8 dlaždíc v rade. Spolu 12 · 8 = 96. (Kontrola: 24 m² : 0,25 m² = 96.)",
        "hint": "Premeň terasu na cm (600 cm × 400 cm), potom spočítaj dlaždice na dĺžku a na šírku.",
        "reveal": "Správne je 96: 12 · 8."
      },
      {
        "id": "n-flower",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "kruh v praxi",
        "title": "Hnojivo na záhon",
        "prompt": "Kruhový záhon má polomer 2 m. Na každý m² treba 50 g hnojiva. Hnojiva je spolu k · π gramov. Zadaj k.",
        "validate": "exact",
        "answer": 200,
        "success": "Obsah záhona je π · 2² = 4π m², hnojivo: 4π · 50 = 200π g.",
        "hint": "Najprv obsah záhona v m² (πr²), potom vynásob 50 g.",
        "reveal": "Správne je 200: 4 · 50."
      },
      {
        "id": "err-units",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "jednotky",
        "question": "Žiak počíta, koľko dlaždíc 30 cm × 30 cm je na podlahu 3 m × 3 m, a píše: 9 m² : 900 cm² = 0,01. V čom je chyba?",
        "options": [
          "Delil rôzne jednotky: 9 m² = 90 000 cm², správne je 90 000 : 900 = 100 dlaždíc",
          "Mal obsah podlahy vynásobiť obsahom dlaždice",
          "Mal rozmery podlahy sčítať: 3 + 3 = 6",
          "Chyba nie je, treba 0,01 dlaždice"
        ],
        "answer": 0,
        "correct": "Pri delení musia byť obe plochy v tej istej jednotke. Aj kontrola dáva 10 · 10 = 100 dlaždíc (300 : 30 = 10 v rade).",
        "hint": "Je 9 m² : 900 cm² delenie rovnakých jednotiek? Pred delením ich zjednoť."
      },
      {
        "id": "transfer",
        "type": "choice",
        "phase": "MATURITNÝ FORMÁT",
        "skill": "modelovanie",
        "question": "Okrúhly bazén s polomerom 2 m má na dne fóliu. Fóliu predávajú po štvorcových metroch. Ktorú veličinu vypočítaš, aby si vedel, koľko fólie kúpiť?",
        "options": [
          "obvod kruhu 2π · 2 = 4π m",
          "priemer kruhu 2 · 2 = 4 m",
          "obvod aj obsah spolu 4π + 4π = 8π",
          "obsah kruhu π · 2² = 4π m²"
        ],
        "answer": 3,
        "correct": "Fólia pokrýva celé dno, preto počítame obsah: S = π · 2² = 4π m² (približne 12,6 m²). Pozor: číslo 4π je tu aj obvodom, ale s inou jednotkou (m).",
        "hint": "Fólia pokrýva plochu dna, nie okraj."
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Terasa tvaru L",
        "html": "<p>Terasa má tvar obdĺžnika 8 m × 5 m, z ktorého je vyňatý roh 3 m × 2 m (tvar písmena L). Načrtni ju. Vypočítaj jej <strong>obsah</strong> v m² a <strong>cenu dlažby</strong>, ak 1 m² stojí 22 €. Dokúp 10 % rezervu na odrezky a vypočítaj aj cenu s rezervou.</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: praktické úlohy",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Rieš v zošite, pri každom výsledku uveď jednotku a odpoveď celou vetou. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "html": "Preveď: 3,2 m² = ? cm²; 5 a = ? m²; 0,4 ha = ? m²; 25 000 cm² = ? m².",
            "answer": "32 000 cm²; 500 m²; 4 000 m²; 2,5 m²."
          },
          {
            "level": "zaklad",
            "html": "Pozemok má rozmery 35 m × 20 m. Koľko metrov pletiva treba na oplotenie a aká je plocha pozemku v aroch?",
            "answer": "o = 2 · (35 + 20) = <strong>110 m</strong>. S = 35 · 20 = 700 m² = <strong>7 a</strong>."
          },
          {
            "level": "zaklad",
            "html": "Chodník dlhý 12 m a široký 1,2 m sa dláždi obdĺžnikovými dlaždicami 40 cm × 30 cm. Koľko dlaždíc treba?",
            "answer": "Plocha chodníka 12 · 1,2 = 14,4 m², dlaždica 0,4 · 0,3 = 0,12 m². 14,4 : 0,12 = <strong>120 dlaždíc</strong>. (Kontrola: 12 : 0,4 = 30 a 1,2 : 0,3 = 4, teda 30 · 4 = 120.)"
          },
          {
            "level": "rozsirenie",
            "html": "Stena 5,5 m × 2,6 m má dvere 0,9 m × 2 m a okno 1,6 m × 1,4 m. Natierame dvakrát. 1 liter farby stačí na 6 m² a jeden náter. Koľko litrov treba kúpiť, ak sa farba predáva po 1 litri?",
            "answer": "Plocha steny 14,3 m², dvere 1,8 m², okno 2,24 m²: natrieť 14,3 − 1,8 − 2,24 = 10,26 m². Dva nátery: 20,52 m². 20,52 : 6 = 3,42, teda <strong>4 litre</strong>."
          },
          {
            "level": "rozsirenie",
            "html": "Kruhový záhon má priemer 6 m. Okolo neho je obruba a na každý m² záhona treba 40 g hnojiva. Vypočítaj dĺžku obruby a hmotnosť hnojiva.",
            "answer": "r = 3 m. Obruba: 2π · 3 = <strong>6π m</strong>. Obsah: π · 9 = 9π m². Hnojivo: 9π · 40 = <strong>360π g</strong>."
          },
          {
            "level": "rozsirenie",
            "html": "V záhrade 24 m × 15 m je kruhový záhon s polomerom 3 m. Zvyšok záhrady je trávnik. Vypočítaj jeho obsah.",
            "answer": "Záhrada 24 · 15 = 360 m², záhon π · 3² = 9π m². Trávnik: <strong>(360 − 9π) m²</strong>."
          },
          {
            "level": "bonus",
            "html": "Pozemok s obsahom 1 ha má tvar štvorca. Aká dlhá je jeho strana a koľko stojí plot okolo, ak meter plotu stojí 15 €?",
            "answer": "1 ha = 10 000 m². Strana je √10 000 = <strong>100 m</strong>. Obvod 4 · 100 = 400 m. Cena 400 · 15 = <strong>6 000 €</strong>."
          },
          {
            "level": "bonus",
            "html": "Pozemok 12 a sa predáva po 85 € za m². Koľko stojí?",
            "answer": "12 a = 1 200 m². 1 200 · 85 = <strong>102 000 €</strong>. Pozor na prevod: nie 12 · 85."
          }
        ]
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Označ, ako dobre to zvládaš. Nie je to známka. Čo máš 🔴 alebo 🟡, si prejdi ešte raz v zbierke.",
        "skills": [
          "rozhodnúť, či treba obvod alebo obsah",
          "prevody m², cm², a, ha",
          "výpočet spotreby (dlažba, farba) a zaokrúhlenie nahor",
          "odpočet otvorov a zložené plochy",
          "kontrola primeranosti výsledku"
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
        "html": "Preveď: 4,5 m² = ? cm²; 7 a = ? m²; 0,25 ha = ? m²; 60 000 cm² = ? m².",
        "answer": "45 000 cm²; 700 m²; 2 500 m²; 6 m²."
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 4,
        "html": "Záhrada má rozmery 28 m × 15 m. Koľko metrov pletiva treba na oplotenie a koľko árov má záhrada?",
        "answer": "o = 2 · (28 + 15) = <strong>86 m</strong>; S = 420 m² = <strong>4,2 a</strong>."
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 4,
        "html": "Miestnosť 6 m × 5 m sa dláždi dlaždicami 50 cm × 50 cm. Koľko dlaždíc treba?",
        "answer": "600 : 50 = 12, 500 : 50 = 10, spolu <strong>120 dlaždíc</strong>. (30 m² : 0,25 m² = 120)"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 5,
        "html": "Stena 6 m × 2,5 m má okno 2 m × 1,2 m a dvere 1 m × 2 m. Natierame dvakrát a 1 litr farby stačí na 7 m² a jeden náter. Koľko litrov treba (celé litre)?",
        "answer": "Natrieť 15 − 2,4 − 2 = 10,6 m²; dvakrát 21,2 m²; 21,2 : 7 ≈ 3,03, teda <strong>4 litre</strong>."
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 5,
        "html": "Kruhový bazén má priemer 5 m. Aká je dĺžka jeho okraja a obsah dna? Odpoveď zapíš s π.",
        "answer": "r = 2,5 m; o = <strong>5π m</strong>; S = π · 6,25 = <strong>6,25π m²</strong>."
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 5,
        "html": "Pozemok tvaru obdĺžnika 60 m × 40 m. V jednom rohu je domček 12 m × 10 m. Koľko m² a koľko árov zostáva na záhradu?",
        "answer": "60 · 40 − 12 · 10 = 2 400 − 120 = <strong>2 280 m² = 22,8 a</strong>."
      }
    ]
  }
});
