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
      "vypočítať spotrebu materiálu a cenu a správne zaokrúhliť nahor",
      "odhadnúť primeranosť výsledku a uviesť odpoveď s jednotkou"
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
      "0–5 min: aktivácia: obvod alebo obsah v situáciách zo života",
      "5–15 min: prevody jednotiek a tri vzorové príklady (plot, dlažba, náter)",
      "15–30 min: platforma (cca 25–35 min podľa tempa)",
      "Samostatná práca bez mobilu: terasa tvaru L; zbierka",
      "Posledných 5 min: porovnanie odpovedí, sebahodnotenie"
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
    "intro": "Pozemok, plot, dlažba, farba a spotreba materiálu: rozhodneš, či treba obvod alebo obsah, prevedieš jednotky a skontroluješ, či je výsledok primeraný. Počítaj na papieri.",
    "estimatedTime": "25–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Obvod alebo obsah? Najprv sa spýtaj, čo treba",
        "html": "<p>V praktických úlohách nikto nenapíše „vypočítaj obsah“. Treba pochopiť, čo sa v skutočnosti hľadá:</p>\n<div class=\"compare\"><div class=\"good\"><span class=\"mini-label\">OBVOD (DĹŽKA)</span><p>plot, ohrada, lišta, obruba záhona, stuha okolo darčeka. Meriame <strong>okolo dokola</strong>. Jednotky: m, cm.</p></div>\n<div class=\"good\"><span class=\"mini-label\">OBSAH (PLOCHA)</span><p>dlažba, trávnik, náter steny, koberec, strecha. Pokrývame <strong>celú plochu</strong>. Jednotky: m², cm², a, ha.</p></div></div>\n<p>Pripomeň si: obdĺžnik o = 2(a + b), S = a · b; štvorec o = 4a, S = a²; kruh o = 2πr, S = πr²; trojuholník S = <span class=\"frac\"><span class=\"frac-num\">a · v</span><span class=\"frac-den\">2</span></span>.</p>",
        "remember": "Okolo dokola = obvod = dĺžka. Celá plocha = obsah = štvorcové jednotky."
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "rozhodnúť, či praktická úloha vyžaduje obvod alebo obsah",
          "prevádzať jednotky m², cm², a, ha a počítať v jednej jednotke",
          "vypočítať spotrebu materiálu (dlažba, farba, plot) a správne zaokrúhliť nahor",
          "odhadnúť, či je výsledok primeraný reálnej situácii"
        ]
      },
      {
        "id": "units",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Prevody jednotiek obsahu",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 560 150\" role=\"img\" aria-label=\"Štvorec so stranou 1 m rozdelený na stovky centimetrov a prehľad prevodov jednotiek obsahu\" font-size=\"14\" fill=\"currentColor\" font-family=\"sans-serif\"><rect x=\"20\" y=\"20\" width=\"110\" height=\"110\" fill=\"rgba(155,107,47,.25)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"32\" y=\"78\" font-size=\"11\">1 m² = 100 cm × 100 cm</text><text x=\"32\" y=\"94\" font-size=\"11\">= 10 000 cm²</text><text x=\"160\" y=\"52\" font-weight=\"bold\">1 m = 100 cm, ale 1 m² = 10 000 cm²</text><text x=\"160\" y=\"80\" >1 a = 100 m²  (štvorec 10 m × 10 m)</text><text x=\"160\" y=\"104\" >1 ha = 100 a = 10 000 m²  (štvorec 100 m × 100 m)</text><text x=\"160\" y=\"128\" >1 km² = 100 ha = 1 000 000 m²</text></svg></div><p>Pri dĺžke platí 1 m = 100 cm. Pri obsahu sa prevodové číslo <span class=\"hl\">umocňuje</span>, lebo plochu tvoria dva rozmery:</p>\n<div class=\"formula\">1 m² = 100 · 100 cm² = 10 000 cm²</div>\n<div class=\"formula\">1 a = 100 m²<span class=\"formula-note\">ár: štvorec 10 m × 10 m</span></div>\n<div class=\"formula\">1 ha = 100 a = 10 000 m²<span class=\"formula-note\">hektár: štvorec 100 m × 100 m</span></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span>\n<p>2,5 m² v cm²: 2,5 · 10 000 = <strong>25 000 cm²</strong>.</p>\n<p>1 200 m² v aroch: 1 200 : 100 = <strong>12 a</strong>.</p>\n<p>0,4 ha v m²: 0,4 · 10 000 = <strong>4 000 m²</strong>.</p>\n<p>45 000 cm² v m²: 45 000 : 10 000 = <strong>4,5 m²</strong>.</p></div>\n<div class=\"warning\"><strong>Pozor:</strong> 1 m² nie je 100 cm². Takto by sa prevádzala dĺžka. Plocha 1 m × 1 m je 100 cm × 100 cm = 10 000 cm². Pred počítaním premeň všetky rozmery na <span class=\"hl\">jednu jednotku</span>.</div>",
        "remember": "Pri prevode obsahu sa umocňuje aj prevodové číslo: 1 m² = 10 000 cm², 1 ha = 10 000 m²."
      },
      {
        "id": "c-ha",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "prevody jednotiek",
        "question": "Pozemok má obsah 8 500 m². Koľko hektárov to je? (1 ha = 10 000 m²)",
        "options": [
          "8,5 ha",
          "0,85 ha",
          "85 ha",
          "0,085 ha"
        ],
        "answer": 1,
        "correct": "8 500 : 10 000 = 0,85 ha. Menšia jednotka v čísle znamená menšie číslo, keď prevádzame na väčšiu.",
        "hint": "Hektár je väčšia jednotka ako m². Číslo teda musí byť menšie. Vydeľ číslom 10 000."
      },
      {
        "id": "n-cm2",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "prevody jednotiek",
        "title": "Z m² na cm²",
        "prompt": "Koľko cm² je 3,5 m²? Zadaj číslo.",
        "validate": "exact",
        "answer": 35000,
        "success": "3,5 · 10 000 = 35 000 cm².",
        "hint": "Použi 1 m² = 10 000 cm², nie 100 cm².",
        "reveal": "Správne je 35 000: 3,5 · 10 000."
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
        "id": "n-ha",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "prevody jednotiek",
        "title": "Z hektárov na m²",
        "prompt": "Koľko m² je 2,5 ha? Zadaj číslo.",
        "validate": "exact",
        "answer": 25000,
        "success": "2,5 · 10 000 = 25 000 m².",
        "hint": "1 ha = 10 000 m².",
        "reveal": "Správne je 25 000: 2,5 · 10 000."
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
        "title": "Vzorový príklad 1: pozemok a plot",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 600 260\" role=\"img\" aria-label=\"Obdĺžnikový pozemok 40 m krát 25 m, plot po obvode s bránou širokou 3 metre\" font-size=\"14\" fill=\"currentColor\" font-family=\"sans-serif\"><rect x=\"40\" y=\"30\" width=\"280\" height=\"175\" fill=\"rgba(155,107,47,.25)\" stroke=\"none\"/><path d=\"M171 205 H320 V30 H40 V205 H150\" fill=\"none\" stroke=\"#9b6b2f\" stroke-width=\"5\"/><line x1=\"150\" y1=\"205\" x2=\"171\" y2=\"205\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\"/><text x=\"160\" y=\"232\" text-anchor=\"middle\">40 m</text><text x=\"22\" y=\"120\" transform=\"rotate(-90 22 120)\" text-anchor=\"middle\">25 m</text><text x=\"150\" y=\"193\" font-size=\"11\" text-anchor=\"end\">brána 3 m</text><text x=\"345\" y=\"62\" font-weight=\"bold\">Plot: obvod mínus brána</text><text x=\"345\" y=\"88\" >o = 2 · (40 + 25) = 130 m</text><text x=\"345\" y=\"112\" >130 − 3 = 127 m</text><text x=\"345\" y=\"148\" font-weight=\"bold\">Plocha pozemku</text><text x=\"345\" y=\"172\" >S = 40 · 25 = 1 000 m²</text><text x=\"345\" y=\"196\" >= 10 a</text></svg></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1 · POZEMOK</span>\n<p>Pozemok tvaru obdĺžnika má rozmery 40 m a 25 m. Okolo celého pozemku postavíme plot, v jednom mieste bude brána široká 3 m. Meter plotu stojí 18 €. Aká je cena plotu a aká je plocha pozemku v aroch?</p>\n<ol class=\"steps\"><li>Plot ide okolo dokola, preto počítame <strong>obvod</strong>: o = 2 · (40 + 25) = 130 m.</li>\n<li>Na bráne plot nebude: 130 − 3 = 127 m.</li>\n<li>Cena: 127 · 18 = <strong>2 286 €</strong>.</li>\n<li>Plocha je <strong>obsah</strong>: S = 40 · 25 = 1 000 m² = 1 000 : 100 = <strong>10 a</strong>.</li></ol></div>\n<div class=\"warning\"><strong>Pozor:</strong> obvod aj obsah tu vyšli ako rôzne čísla s rôznymi jednotkami (130 m a 1 000 m²). Nikdy ich nepočítaj ako jedno číslo a vždy napíš odpoveď celou vetou: „Plot bude stáť 2 286 €.“</div>"
      },
      {
        "id": "ex-tiles",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Vzorový príklad 2: dlažba a zaokrúhľovanie",
        "html": "<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2 · DLAŽBA</span>\n<p>Miestnosť má rozmery 4,2 m × 3,0 m. Dlaždice majú rozmer 20 cm × 20 cm a predávajú sa v balíčkoch po 10 kusoch. Koľko balíčkov treba kúpiť?</p>\n<ol class=\"steps\"><li>Jednotky zjednoť. Miestnosť: 420 cm × 300 cm.</li>\n<li>Dlaždice na dĺžku: 420 : 20 = 21. Dlaždice na šírku: 300 : 20 = 15.</li>\n<li>Počet dlaždíc: 21 · 15 = <strong>315</strong>.\n (Kontrola cez obsah: 12,6 m² : 0,04 m² = 315.)</li>\n<li>Balíčky: 315 : 10 = 31,5. Zlomok balíčka kúpiť nejde, preto zaokrúhľujeme <span class=\"hl\">nahor</span>: <strong>32 balíčkov</strong>.</li></ol></div>\n<div class=\"warning\"><strong>Pozor:</strong> pri nákupe materiálu sa zaokrúhľuje vždy <span class=\"hl\">nahor</span>, aj keď by matematické zaokrúhlenie dalo menej. 31 balíčkov by nestačilo. V praxi pridaj ešte 5 až 10 % na odrezky.</div>",
        "remember": "Spotreba materiálu: celkový obsah : obsah jedného kusu. Výsledok, ktorý nie je celé číslo, zaokrúhli nahor."
      },
      {
        "id": "ex-wall",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Vzorový príklad 3: náter steny",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 600 220\" role=\"img\" aria-label=\"Stena široká 5 m a vysoká 2,5 m s dverami a oknom, ktoré sa nenatierajú\" font-size=\"14\" fill=\"currentColor\" font-family=\"sans-serif\"><rect x=\"30\" y=\"30\" width=\"250\" height=\"125\" fill=\"rgba(155,107,47,.25)\" stroke=\"#9b6b2f\" stroke-width=\"3\"/><rect x=\"60\" y=\"55\" width=\"45\" height=\"100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"170\" y=\"55\" width=\"75\" height=\"60\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"66\" y=\"108\" font-size=\"11\">dvere</text><text x=\"188\" y=\"90\" font-size=\"11\">okno</text><text x=\"155\" y=\"178\" text-anchor=\"middle\">5 m</text><text x=\"14\" y=\"98\" font-size=\"11\" text-anchor=\"middle\" transform=\"rotate(-90 14 98)\">2,5 m</text><text x=\"300\" y=\"52\" >Stena: 5 · 2,5 = 12,5 m²</text><text x=\"300\" y=\"80\" >Dvere: 0,9 · 2 = 1,8 m²</text><text x=\"300\" y=\"108\" >Okno: 1,5 · 1,2 = 1,8 m²</text><text x=\"300\" y=\"144\" font-weight=\"bold\">Natrieť: 12,5 − 1,8 − 1,8</text><text x=\"300\" y=\"168\" font-weight=\"bold\">= 8,9 m²</text></svg></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 3 · NÁTER</span>\n<p>Stena je široká 5 m a vysoká 2,5 m. Je v nej dvere 0,9 m × 2 m a okno 1,5 m × 1,2 m. Natierame ju dvakrát. Jeden liter farby vystačí na 8 m² a jeden náter. Koľko litrov treba, ak sa farba predáva po 1 litri?</p>\n<ol class=\"steps\"><li>Plocha steny: 5 · 2,5 = 12,5 m².</li>\n<li>Dvere a okno sa nenatierajú: 12,5 − 1,8 − 1,8 = <strong>8,9 m²</strong>.</li>\n<li>Dva nátery: 2 · 8,9 = 17,8 m².</li>\n<li>Farba: 17,8 : 8 = 2,225 litra, nakúpime <strong>3 litre</strong> (nahor).</li></ol></div>",
        "remember": "Pri nátere odčítaj otvory, vynásob počtom náterov a nakoniec zaokrúhli spotrebu nahor."
      },
      {
        "id": "procedure",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Ako rozobrať reálnu situáciu",
        "html": "<ol class=\"steps\"><li><strong>Čo sa hľadá?</strong> Dĺžka (obvod), plocha (obsah), počet kusov alebo cena?</li>\n<li><strong>Náčrt a údaje.</strong> Nakresli situáciu, k rozmerom napíš jednotky.</li>\n<li><strong>Zjednoť jednotky.</strong> Všetko v m, alebo všetko v cm.</li>\n<li><strong>Rozlož na jednoduché útvary</strong> (obdĺžniky, kruh) a spočítaj alebo odčítaj ich obsahy.</li>\n<li><strong>Dopočítaj spotrebu a cenu.</strong> Materiál zaokrúhli nahor.</li>\n<li><strong>Skontroluj primeranosť.</strong> Hrubý odhad: izba 4 m × 5 m má asi 20 m², nie 200 m².</li></ol>\n<div class=\"warning\"><strong>Pozor:</strong> výsledok bez jednotky alebo s nesprávnou jednotkou (napr. obsah v metroch) je nesprávny, aj keď je číslo dobré.</div>"
      },
      {
        "id": "c-which",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "obvod alebo obsah",
        "question": "Chceš ohradiť záhradu pletivom a potom na nej zasiať trávu. Čo vypočítaš na pletivo a čo na množstvo osiva?",
        "options": [
          "pletivo: obsah, osivo: obvod",
          "obe: obvod",
          "pletivo: obvod, osivo: obsah",
          "obe: obsah"
        ],
        "answer": 2,
        "correct": "Pletivo vedieme okolo dokola, preto potrebujeme dĺžku obvodu. Osivo sa sype na celú plochu, preto potrebujeme obsah.",
        "hint": "Pletivo ide po hranici záhrady. Osivo sa sype na celú plochu."
      },
      {
        "id": "c-round",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "zaokrúhľovanie",
        "question": "Na podlahu treba presne 31,5 balíka dlažby. Balíky sa predávajú len celé. Najmenej koľko balíkov musíš kúpiť, aby podlaha stačila?",
        "options": [
          "31",
          "32",
          "33",
          "63"
        ],
        "answer": 1,
        "correct": "31 balíkov by nestačilo, 32 už áno. Pri nákupe zaokrúhľujeme nahor na najbližšie celé číslo.",
        "hint": "Stačí 31 balíkov, ak chýba pol balíka? Zaokrúhli tak, aby dlažby bolo dosť."
      },
      {
        "id": "c-plausible",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "primeranosť výsledku",
        "question": "Obdĺžniková izba má rozmery 4 m × 5 m. Ktorý výsledok pre obsah podlahy je správny a má správnu jednotku?",
        "options": [
          "20 m",
          "9 m²",
          "200 m²",
          "20 m²"
        ],
        "answer": 3,
        "correct": "4 · 5 = 20 a obsah sa meria v m².",
        "hint": "Obsah je súčin dvoch dĺžok, a preto je v štvorcových jednotkách. Spočítaj ho a skontroluj jednotku."
      },
      {
        "id": "c-open",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "odpočet otvorov",
        "question": "Stena široká 6 m a vysoká 2,5 m má okno 1,5 m × 1 m. Koľko m² treba natrieť (okno sa nenatiera)?",
        "options": [
          "16,5 m²",
          "15 m²",
          "13,5 m²",
          "14 m²"
        ],
        "answer": 2,
        "correct": "Stena má 6 · 2,5 = 15 m², okno 1,5 m², natrieť treba 15 − 1,5 = 13,5 m².",
        "hint": "Od celej plochy steny odčítaj plochu okna. Okno neodčítavaj dvakrát a nepripočítavaj ho."
      },
      {
        "id": "n-fence",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "obvod v praxi",
        "title": "Plot okolo pozemku",
        "prompt": "Pozemok má tvar obdĺžnika s rozmermi 30 m a 20 m. Koľko metrov pletiva treba na oplotenie celého obvodu?",
        "validate": "exact",
        "answer": 100,
        "success": "o = 2 · (30 + 20) = 100 m.",
        "hint": "Plot ide okolo dokola. Aký je obvod obdĺžnika?",
        "reveal": "Správne je 100: 2 · 50."
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
        "id": "n-walls",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "náter",
        "title": "Plocha stien",
        "prompt": "Miestnosť má pôdorys 5 m × 4 m a výšku 2,5 m. Aká je plocha všetkých štyroch stien v m² (bez okien a dverí)?",
        "validate": "exact",
        "answer": 45,
        "success": "Obvod pôdorysu je 2 · (5 + 4) = 18 m, steny spolu: 18 · 2,5 = 45 m². Štyri steny tvoria obdĺžnik s dĺžkou obvodu a výškou 2,5 m.",
        "hint": "Dve steny majú 5 m a dve 4 m. Aká je ich celková šírka (obvod)?",
        "reveal": "Správne je 45: 18 · 2,5."
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
        "id": "n-grass",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "spotreba",
        "title": "Trávne osivo",
        "prompt": "Trávnik má rozmery 12 m × 9 m. Na každý m² treba 30 g osiva. Koľko gramov osiva treba kúpiť?",
        "validate": "exact",
        "answer": 3240,
        "success": "Obsah: 12 · 9 = 108 m², osivo 108 · 30 = 3 240 g (teda 3,24 kg).",
        "hint": "Obsah trávnika vynásob spotrebou na 1 m².",
        "reveal": "Správne je 3 240: 108 · 30."
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
        "id": "err-plaus",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "primeranosť výsledku",
        "question": "Žiak vypočítal, že trieda s rozmermi 8 m × 7 m má obsah podlahy 560 m². Prečo je výsledok nepravdepodobný a ako ho opravíš?",
        "options": [
          "Trieda má 560 m², lebo sa meria v m²",
          "Treba počítať obvod: 2 · (8 + 7) = 30 m",
          "Trieda má 15 m², lebo sa sčítajú rozmery",
          "Súčin 8 · 7 je 56, trieda má 56 m²"
        ],
        "answer": 3,
        "correct": "8 · 7 = 56, teda 56 m². Trieda s 560 m² by bola väčšia ako veľká hala. Vždy skontroluj odhadom.",
        "hint": "Skús si odhadnúť: 8 · 7 je približne 8 · 10 = 80. Vyšlo ti viac než odhad?"
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
            "html": "Izba má rozmery 5 m × 3,5 m. Aké dlhé lišty treba okolo (bez dverí) a koľko balíkov parkiet treba, ak jeden balík pokryje 2,4 m²?",
            "answer": "Lišty: o = 2 · (5 + 3,5) = <strong>17 m</strong>. Plocha: 5 · 3,5 = 17,5 m². Balíky: 17,5 : 2,4 ≈ 7,3, teda <strong>8 balíkov</strong>."
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
            "level": "rozsirenie",
            "html": "Kúpeľňa má obvod 10 m a obkladáme steny do výšky 2,4 m. Dvere majú 0,8 m × 2 m. Obkladačky majú 25 cm × 40 cm. Koľko obkladačiek treba (bez rezervy)?",
            "answer": "Steny: 10 · 2,4 = 24 m², dvere 1,6 m²: 22,4 m². Jedna obkladačka 0,25 · 0,4 = 0,1 m². 22,4 : 0,1 = <strong>224 obkladačiek</strong>."
          },
          {
            "level": "bonus",
            "html": "Pozemok s obsahom 1 ha má tvar štvorca. Aká dlhá je jeho strana a koľko stojí plot okolo, ak meter plotu stojí 15 €?",
            "answer": "1 ha = 10 000 m². Strana je √10 000 = <strong>100 m</strong>. Obvod 4 · 100 = 400 m. Cena 400 · 15 = <strong>6 000 €</strong>."
          },
          {
            "level": "bonus",
            "html": "Futbalové ihrisko má rozmery 105 m × 68 m. Vyjadri jeho obsah v m², v aroch a v hektároch. Je primerané, že pokosiť ho trvá asi hodinu stroju, ktorý kosí 2 000 m² za hodinu?",
            "answer": "S = 7 140 m² = <strong>71,4 a</strong> = <strong>0,714 ha</strong>. Stroj by potreboval 7 140 : 2 000 = 3,57 h, teda asi 3,5 hodiny, nie hodinu. Hodina nie je primeraná."
          },
          {
            "level": "bonus",
            "html": "Terasa tvaru L vznikne z obdĺžnika 8 m × 5 m vyňatím rohu 3 m × 2 m. Aká je jej plocha a cena dlažby po 22 €/m², ak dokúpime 10 % rezervu?",
            "answer": "Plocha 40 − 6 = <strong>34 m²</strong>. S rezervou 34 · 1,1 = 37,4 m². Cena 37,4 · 22 = <strong>822,80 €</strong>."
          },
          {
            "level": "bonus",
            "html": "Pozemok 12 a sa predáva po 85 € za m². Koľko stojí?",
            "answer": "12 a = 1 200 m². 1 200 · 85 = <strong>102 000 €</strong>. Pozor na prevod: nie 12 · 85."
          }
        ]
      },
      {
        "id": "arg",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "title": "Prečo zaokrúhľujeme nahor?",
        "prompt": "Vlastnými slovami vysvetli, prečo pri nákupe dlažby alebo farby zaokrúhľujeme výsledok nahor a prečo je dobré hrubým odhadom skontrolovať výsledok.",
        "model": "Vzor: Materiál sa predáva po celých baleniach, a keby som zaokrúhlil nadol, chýbalo by ho na dokončenie práce. Odhad (napr. 4 m · 5 m je asi 20 m²) mi ukáže, či som sa nepomýlil v jednotkách alebo o rád, napríklad keď mi vyjde 200 m²."
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
