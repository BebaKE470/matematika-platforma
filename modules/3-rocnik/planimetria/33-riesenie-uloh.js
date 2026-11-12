MathPlatform.registerModule({
  "id": "3-u02-h033",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 33 · Riešenie úloh",
    "prerequisites": [
      "obvod a obsah štvorca, obdĺžnika, lichobežníka, kosoštvorca a kosodĺžnika (hodiny 26–32)",
      "Pytagorova veta z 2. ročníka (výška lichobežníka, uhlopriečky kosoštvorca)",
      "sínus ostrého uhla v pravouhlom trojuholníku (úlohy so sin 30°)",
      "prevody jednotiek dĺžky a plochy, úprava vzorcov"
    ],
    "planContent": [
      "Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka."
    ],
    "planPerformance": [
      "Poznať a vedieť opísať vlastnosti základných rovinných útvarov.",
      "Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov."
    ],
    "goals": [
      "vybrať vhodný vzorec podľa útvaru a zadaných údajov",
      "dopočítať chýbajúci údaj (výška, uhlopriečka, strana) Pytagorovou vetou alebo z obsahu",
      "rozlíšiť obvod (dĺžka) a obsah (plocha) v slovných úlohách a uviesť správne jednotky",
      "riešiť viackrokové úlohy a overiť výsledok"
    ],
    "competencies": [
      "modelovať reálnu situáciu útvarom a vyznačiť údaje v náčrte",
      "zvoliť postup, vykonať ho a zdôvodniť jednotlivé kroky",
      "kontrolovať jednotky a rozumnosť výsledku",
      "prepájať vlastnosti útvarov (uhlopriečky, výška) s výpočtom"
    ],
    "enrichment": [
      "Kosoštvorec vpísaný do obdĺžnika: obsah je presne polovičný.",
      "Návrh maturitného štandardu je použitý iba ako obohatenie: modelovanie reálnych situácií (dlažba, pozemky, plech), argumentácia a presný matematický jazyk."
    ],
    "flow": [
      "0–5 min opakovanie: prehľad vzorcov a postup pri slovnej úlohe",
      "5–15 min riešené príklady (kosodĺžnik, kosoštvorec v obdĺžniku, rovnoramenný lichobežník)",
      "15–27 min aplikácia: výber vzorca, dopočítanie údaja, nájdi chybu, jednotky",
      "27–37 min zápis do zošita: dlažba dvora (bez mobilu)",
      "37–45 min zbierka podľa úrovní a spoločné zhrnutie"
    ],
    "diagnostics": [
      "Zámena obvodu a obsahu (dĺžka vs. plocha) alebo jednotiek (cm vs. cm²).",
      "Dosadenie bočnej strany alebo ramena namiesto výšky.",
      "Zabudnuté ½ pri lichobežníku alebo uhlopriečkach kosoštvorca.",
      "Pytagorova veta s celými uhlopriečkami namiesto polovíc.",
      "Chybný prevod m² ↔ cm² (100 namiesto 10 000)."
    ],
    "partialUse": [
      "Na krátku hodinu stačí časť prehľad → riešené príklady → nájdi chybu; zbierka ako domáca úloha.",
      "Pri slabšej triede použi iba úrovne základ a rozšírenie; bonus pre zvedavých."
    ]
  },
  "student": {
    "title": "Riešenie úloh",
    "subtitle": "Výber vzorca → dopočítanie údaja → výpočet → odpoveď",
    "intro": "Dnes spojíš všetko, čo vieš o štvoruholníkoch: vyberieš vzorec, dopočítaš chýbajúci údaj a vyriešiš slovné úlohy.",
    "estimatedTime": "28–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Za posledné hodiny si spoznal/spoznala obvod a obsah <strong>štvorca, obdĺžnika, lichobežníka, kosoštvorca a kosodĺžnika</strong>. Dnes ich budeme <span class=\"hl\">kombinovať</span> v zmiešaných a slovných úlohách: nikto nepovie, ktorý vzorec použiť — musíš to vyčítať z údajov a z obrázka.</p><p>Pomôžu ti dva nástroje, ktoré už poznáš: <strong>Pytagorova veta</strong> v pravouhlom trojuholníku a premena plochy na jednoduchšie útvary.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "vybrať správny vzorec podľa útvaru a zadaných údajov",
          "doplniť chýbajúci údaj (výška, uhlopriečka, strana) Pytagorovou vetou alebo z obsahu",
          "vyriešiť slovnú úlohu: obvod (dĺžka) vs. obsah (plocha) a jednotky"
        ]
      },
      {
        "id": "overview",
        "type": "info",
        "phase": "PREHĽAD",
        "title": "Vzorce pre štvoruholníky na jednom mieste",
        "html": "<div class=\"table-wrap\"><table class=\"truth\"><thead><tr><th>Útvar</th><th>Obvod</th><th>Obsah</th><th>Údaje</th></tr></thead><tbody><tr><td>Štvorec</td><td>o = 4a</td><td>S = a²</td><td>strana a</td></tr><tr><td>Obdĺžnik</td><td>o = 2(a + b)</td><td>S = a·b</td><td>strany a, b</td></tr><tr><td>Kosoštvorec</td><td>o = 4a</td><td>S = a·v &nbsp;alebo&nbsp; S = e·f/2</td><td>strana, výška, uhlopriečky e, f</td></tr><tr><td>Kosodĺžnik</td><td>o = 2(a + b)</td><td>S = a·vₐ &nbsp;alebo&nbsp; S = a·b·sin α</td><td>strany a, b, výška, uhol α</td></tr><tr><td>Lichobežník</td><td>o = a + b + c + d</td><td>S = (a + c)/2 · v</td><td>základne a, c, ramená b, d, výška v</td></tr></tbody></table></div><p>Dôležité rozdiely: pri kosodĺžniku a kosoštvorci v obsahu vždy <span class=\"hl\">výška</span>, nie bočná strana; pri kosoštvorci sú uhlopriečky kolmé a delia sa na polovice, preto <strong>a² = (e/2)² + (f/2)²</strong>.</p>",
        "remember": "Obvod = súčet strán (dĺžka, cm). Obsah = plocha (cm²). Najprv vyber vzorec podľa útvaru a údajov."
      },
      {
        "id": "ex-method",
        "type": "explain",
        "phase": "POSTUP",
        "title": "Ako riešiť slovnú úlohu o útvare",
        "html": "<ol class=\"steps\"><li>Prečítaj zadanie a rozhodni, či sa pýta na <strong>dĺžku</strong> (obvod) alebo <strong>plochu</strong> (obsah).</li><li>Načrtni útvar, vyznač známe údaje a hľadanú veličinu.</li><li>Vyber vzorec; ak chýba údaj (výška, uhlopriečka), najprv ho dopočítaj.</li><li>Dosaď s jednotkami a vypočítaj.</li><li>Skontroluj jednotky aj rozumnosť výsledku a napíš odpoveď vetou.</li></ol><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Pozemok má tvar kosodĺžnika so stranou a = 40 m a výškou na ňu 25 m. Koľko eur stojí osiatie trávou, ak 1 m² stojí 3 €?</p><p>Pýta sa na plochu, preto počítame <span class=\"hl\">obsah</span>: S = a·vₐ = 40·25 = <strong>1 000 m²</strong></p><p>Cena = 1 000·3 = <strong>3 000 €</strong></p><p>Odpoveď: Osiatie pozemku bude stáť 3 000 €.</p></div><div class=\"warning\"><strong>Pozor:</strong> Pri prevode jednotiek plochy sa umocňuje aj prevodové číslo: 1 m² = 10 000 cm² (nie 100 cm²).</div>",
        "remember": "Pred výpočtom vždy zisti: pýta sa úloha na obvod alebo na obsah? A akú jednotku má mať odpoveď?"
      },
      {
        "id": "ex-rect-rhombus",
        "type": "explain",
        "phase": "PRÍKLAD",
        "title": "Kosoštvorec vpísaný do obdĺžnika",
        "html": "<p>Z obdĺžnikového plechu 40 cm × 30 cm vyrežeme kosoštvorec tak, že jeho vrcholy sú v stredoch strán plechu. Aká je jeho strana, obvod, obsah a koľko plechu zostane?</p><div class=\"logic-visual\"><svg viewBox=\"0 0 520 290\" role=\"img\" aria-label=\"Kosoštvorec vpísaný do obdĺžnika e krát f: štyri sivé trojuholníky tvoria presne polovicu obdĺžnika\"><polygon points=\"90,50 260,50 90,150\" fill=\"currentColor\" fill-opacity=\"0.18\" stroke=\"none\"/><polygon points=\"430,50 430,150 260,50\" fill=\"currentColor\" fill-opacity=\"0.18\" stroke=\"none\"/><polygon points=\"430,250 260,250 430,150\" fill=\"currentColor\" fill-opacity=\"0.18\" stroke=\"none\"/><polygon points=\"90,250 90,150 260,250\" fill=\"currentColor\" fill-opacity=\"0.18\" stroke=\"none\"/><polygon points=\"90,50 430,50 430,250 90,250\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"8 6\"/><polygon points=\"260,50 430,150 260,250 90,150\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><text x=\"260\" y=\"275\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" font-style=\"italic\">40 cm</text><text x=\"440\" y=\"156\" font-size=\"20\" text-anchor=\"start\" fill=\"currentColor\" font-family=\"system-ui\" font-style=\"italic\">30 cm</text><line x1=\"90\" y1=\"150\" x2=\"430\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><line x1=\"260\" y1=\"50\" x2=\"260\" y2=\"250\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/></svg></div><p>Uhlopriečky kosoštvorca sú práve rozmery obdĺžnika: e = 40 cm, f = 30 cm.</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Polovice uhlopriečok: 20 cm a 15 cm.</p><p>a² = 20² + 15² = 400 + 225 = 625, <strong>a = 25 cm</strong></p><p>o = 4·25 = <strong>100 cm</strong></p><p>S = e·f/2 = 40·30/2 = <strong>600 cm²</strong></p><p>Zvyšok plechu: 40·30 − 600 = 1 200 − 600 = <strong>600 cm²</strong></p></div><p>Odpad je presne rovnako veľký ako vyrezaný kosoštvorec — štyri rohy sú dohromady polovica plechu.</p>"
      },
      {
        "id": "ex-trap",
        "type": "explain",
        "phase": "PRÍKLAD",
        "title": "Rovnoramenný lichobežník: výška z Pytagorovej vety",
        "html": "<p>Rovnoramenný lichobežník má základne a = 20 cm, c = 10 cm a ramená po 13 cm. Výšku nepoznáme — dopočítame ju z pravouhlého trojuholníka, ktorý odtne výška z vrcholu D.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 560 300\" role=\"img\" aria-label=\"Rovnoramenný lichobežník ABCD so základňami 20 cm a 10 cm a ramenami 13 cm; vyznačená je výška v\"><polygon points=\"90,262 160,262 160,94\" fill=\"currentColor\" fill-opacity=\"0.12\" stroke=\"none\"/><polygon points=\"90,262 370,262 300,94 160,94\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><line x1=\"160\" y1=\"94\" x2=\"160\" y2=\"262\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><polyline points=\"173,262 173,249 160,249\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"74\" y=\"270\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >A</text><text x=\"386\" y=\"270\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >B</text><text x=\"316\" y=\"92\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >C</text><text x=\"154\" y=\"82\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >D</text><text x=\"270\" y=\"290\" font-size=\"18\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >a = 20 cm</text><text x=\"230\" y=\"82\" font-size=\"18\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >c = 10 cm</text><text x=\"113\" y=\"178\" font-size=\"18\" text-anchor=\"end\" fill=\"currentColor\" font-family=\"system-ui\" >13 cm</text><text x=\"374\" y=\"178\" font-size=\"18\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >13 cm</text><text x=\"170\" y=\"170\" font-size=\"20\" text-anchor=\"start\" fill=\"currentColor\" font-family=\"system-ui\" font-style=\"italic\">v = ?</text><text x=\"125\" y=\"254\" font-size=\"15\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >5 cm</text></svg></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Dolná základňa je o 20 − 10 = 10 cm dlhšia. Táto „navyše“ časť sa rozdelí na dva rovnaké kúsky: (20 − 10)/2 = <strong>5 cm</strong>.</p><p>Pravouhlý trojuholník: odvesny 5 cm a v, prepona 13 cm: v² = 13² − 5² = 169 − 25 = 144, <strong>v = 12 cm</strong></p><p>S = (a + c)/2 · v = (20 + 10)/2 · 12 = 15·12 = <strong>180 cm²</strong></p><p>o = 20 + 10 + 13 + 13 = <strong>56 cm</strong></p></div><div class=\"warning\"><strong>Pozor:</strong> Rameno má 13 cm, ale výška nie je 13 cm! Výška je kolmá, rameno je šikmé, a preto je dlhšie než výška.</div>",
        "remember": "Chýbajúca výška rovnoramenného lichobežníka: Pytagorova veta s odvesnou (a − c)/2."
      },
      {
        "id": "m-formulas",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "voľba vzorca",
        "title": "Ktorý vzorec na obsah použiješ?",
        "labels": [
          "S = a·b",
          "S = a·v",
          "S = e·f/2",
          "S = (a + c)/2 · v"
        ],
        "items": [
          {
            "text": "obdĺžnik 12 cm × 7 cm",
            "answer": "S = a·b"
          },
          {
            "text": "kosodĺžnik: strana a výška na ňu",
            "answer": "S = a·v"
          },
          {
            "text": "kosoštvorec: obe uhlopriečky",
            "answer": "S = e·f/2"
          },
          {
            "text": "lichobežník: obe základne a výška",
            "answer": "S = (a + c)/2 · v"
          },
          {
            "text": "kosoštvorec: strana a výška na ňu",
            "answer": "S = a·v"
          },
          {
            "text": "obdĺžnik: strany 5 m a 3 m",
            "answer": "S = a·b"
          }
        ]
      },
      {
        "id": "n-diff",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "porovnanie útvarov",
        "title": "Štvorec a kosoštvorec",
        "prompt": "Štvorec má stranu 8 cm. Kosoštvorec má tiež stranu 8 cm a výšku 5 cm. O koľko cm² má štvorec väčší obsah?",
        "validate": "exact",
        "answer": 24,
        "success": "Štvorec 8·8 = 64 cm², kosoštvorec 8·5 = 40 cm², rozdiel 24 cm².",
        "hint": "Vypočítaj oba obsahy zvlášť a odčítaj.",
        "reveal": "Správne je 24: 64 − 40 = 24 cm²."
      },
      {
        "id": "n-price",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "slovná úloha",
        "title": "Cena trávnika",
        "prompt": "Pozemok tvaru kosodĺžnika má stranu 40 m a výšku na ňu 25 m. Koľko eur zaplatíš za trávnik, ak 1 m² stojí 3 €?",
        "validate": "exact",
        "answer": 3000,
        "success": "S = 40·25 = 1 000 m², cena 1 000·3 = 3 000 €.",
        "hint": "Najprv obsah v m², potom cena za 1 m² krát obsah.",
        "reveal": "Správne je 3000: 1 000 m² · 3 € = 3 000 €."
      },
      {
        "id": "c-fence",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "obvod vs. obsah",
        "question": "Záhon má tvar kosodĺžnika. Ktorú veličinu potrebuješ na zistenie, koľko metrov pletiva treba na oplotenie, a ktorú, koľko kg hnojiva treba na celú plochu?",
        "options": [
          "oplotenie: obsah, hnojivo: obvod",
          "oplotenie: obvod, hnojivo: obsah",
          "oba prípady: obvod",
          "oba prípady: obsah"
        ],
        "answer": 1,
        "correct": "Pletivo vedie po hranici (dĺžka → obvod), hnojivo pokrýva plochu (obsah).",
        "hint": "Čo sa pri oplotení pokrýva: čiara alebo plocha?"
      },
      {
        "id": "n-trap",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "lichobežník",
        "title": "Obsah lichobežníka",
        "prompt": "Lichobežník má základne 14 cm a 8 cm a výšku 5 cm. Aký je jeho obsah v cm²?",
        "validate": "exact",
        "answer": 55,
        "success": "S = (14 + 8)/2 · 5 = 11·5 = 55 cm².",
        "hint": "Sčítaj základne, vydeľ dvoma a vynásob výškou.",
        "reveal": "Správne je 55: (14 + 8) : 2 = 11 a 11·5 = 55."
      },
      {
        "id": "n-kos-a",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "Pytagorova veta",
        "title": "Strana kosoštvorca",
        "prompt": "Kosoštvorec má uhlopriečky 30 cm a 40 cm. Aká dlhá je jeho strana v cm?",
        "validate": "exact",
        "answer": 25,
        "success": "Polovice 15 a 20, a² = 225 + 400 = 625, a = 25 cm.",
        "hint": "Pytagorova veta s polovicami uhlopriečok.",
        "reveal": "Správne je 25: 15² + 20² = 625."
      },
      {
        "id": "n-kos-o",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "obvod kosoštvorca",
        "title": "Obvod z uhlopriečok",
        "prompt": "Kosoštvorec má uhlopriečky 48 cm a 20 cm. Aký je jeho obvod v cm?",
        "validate": "exact",
        "answer": 104,
        "success": "Polovice 24 a 10, a² = 576 + 100 = 676, a = 26 cm, o = 4·26 = 104 cm.",
        "hint": "Najprv strana, potom ju vynásob štyrmi.",
        "reveal": "Správne je 104: a = 26 cm, o = 4·26."
      },
      {
        "id": "c-enough",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "údaje na obsah",
        "question": "Ktoré dva údaje o kosodĺžniku stačia na výpočet jeho obsahu?",
        "options": [
          "obe susedné strany a, b",
          "obvod a strana a",
          "strana a výška na túto stranu",
          "obe výšky bez strán"
        ],
        "answer": 2,
        "correct": "Obsah = strana·výška na ňu. Samotné strany a, b obsah nezadajú (kosodĺžnik sa dá „naklopiť“), obvod a strana dajú len druhú stranu a dve výšky bez dĺžky strany nestačia.",
        "hint": "Aký vzorec platí pre obsah kosodĺžnika a čo v ňom vystupuje?"
      },
      {
        "id": "n-unit",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "jednotky",
        "title": "Zmiešané jednotky",
        "prompt": "Kosodĺžnik má stranu 2 m a výšku na ňu 50 cm. Aký je jeho obsah v cm²?",
        "validate": "exact",
        "answer": 10000,
        "success": "2 m = 200 cm, S = 200·50 = 10 000 cm² (to je presne 1 m²).",
        "hint": "Najprv premeň oba rozmery na rovnakú jednotku (cm).",
        "reveal": "Správne je 10000: 200 cm · 50 cm."
      },
      {
        "id": "sort-enough",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "údaje na obsah",
        "title": "Stačia údaje na obsah?",
        "question": "Rozhodni, či zadané údaje stačia na výpočet obsahu (prípadne po dopočítaní chýbajúceho údaja).",
        "labels": [
          "Stačí",
          "Nestačí"
        ],
        "items": [
          {
            "text": "Kosoštvorec: obe uhlopriečky",
            "answer": true,
            "why": "S = e·f/2."
          },
          {
            "text": "Kosoštvorec: iba strana",
            "answer": false,
            "why": "Kosoštvorec sa dá naklopiť — strana ostane, obsah sa mení."
          },
          {
            "text": "Kosoštvorec: strana a jedna uhlopriečka",
            "answer": true,
            "why": "Pytagorovou vetou dopočítame druhú uhlopriečku, potom S = e·f/2."
          },
          {
            "text": "Kosodĺžnik: strana a výška na ňu",
            "answer": true,
            "why": "S = a·vₐ."
          },
          {
            "text": "Kosodĺžnik: len obe strany a, b",
            "answer": false,
            "why": "Chýba výška alebo uhol; pri rôznych uhloch sú obsahy rôzne."
          },
          {
            "text": "Kosodĺžnik: strany a, b a uhol medzi nimi",
            "answer": true,
            "why": "S = a·b·sin α."
          },
          {
            "text": "Lichobežník: obe základne bez výšky",
            "answer": false,
            "why": "Vzorec potrebuje výšku v."
          },
          {
            "text": "Obdĺžnik: obe strany",
            "answer": true,
            "why": "S = a·b."
          }
        ]
      },
      {
        "id": "n-trap-v",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "Pytagorova veta v lichobežníku",
        "title": "Výška lichobežníka",
        "prompt": "Rovnoramenný lichobežník má základne 30 cm a 14 cm a ramená po 17 cm. Aká je jeho výška v cm?",
        "validate": "exact",
        "answer": 15,
        "success": "(30 − 14)/2 = 8, v² = 17² − 8² = 289 − 64 = 225, v = 15 cm.",
        "hint": "Odvesna pravouhlého trojuholníka je polovica rozdielu základní.",
        "reveal": "Správne je 15: 8² + 15² = 17²."
      },
      {
        "id": "n-trap-s",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "obsah lichobežníka",
        "title": "Obsah toho istého lichobežníka",
        "prompt": "Rovnoramenný lichobežník má základne 30 cm a 14 cm a výšku 15 cm. Aký je jeho obsah v cm²?",
        "validate": "exact",
        "answer": 330,
        "success": "S = (30 + 14)/2 · 15 = 22·15 = 330 cm².",
        "hint": "Použi vzorec S = (a + c)/2 · v.",
        "reveal": "Správne je 330: 22·15 = 330 cm²."
      },
      {
        "id": "n-trap-o",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "obvod lichobežníka",
        "title": "Obvod toho istého lichobežníka",
        "prompt": "Rovnoramenný lichobežník má základne 30 cm a 14 cm a ramená po 17 cm. Aký je jeho obvod v cm?",
        "validate": "exact",
        "answer": 78,
        "success": "o = 30 + 14 + 17 + 17 = 78 cm.",
        "hint": "Obvod je súčet všetkých štyroch strán (nie výšky).",
        "reveal": "Správne je 78: 30 + 14 + 2·17 = 78 cm."
      },
      {
        "id": "err1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "chyby pri lichobežníku",
        "question": "Žiak počítal obsah lichobežníka so základňami 14 cm a 8 cm a výškou 5 cm takto: S = (14 + 8)·5 = 110 cm². V čom je chyba?",
        "options": [
          "Mal základne násobiť: 14·8·5.",
          "Mal použiť vzorec S = a·b.",
          "Žiadna chyba, 110 cm² je správne.",
          "Zabudol vydeliť súčet základní dvoma; správne je (14 + 8)/2·5 = 55 cm²."
        ],
        "answer": 3,
        "correct": "Súčet základní vydelený dvoma je „stredná“ šírka lichobežníka.",
        "hint": "Porovnaj s tým, ako vyzerá obsah trojuholníka a lichobežníka — kde sa deliť dvoma?"
      },
      {
        "id": "err2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "chyby pri kosodĺžniku",
        "question": "Žiak počítal obvod kosodĺžnika s a = 10 cm, b = 8 cm a vₐ = 5 cm: o = 2·(10 + 5) = 30 cm. V čom je chyba?",
        "options": [
          "Dosadil výšku vₐ namiesto strany b; správne je 2·(10 + 8) = 36 cm.",
          "Mal použiť o = 4a = 40 cm.",
          "Mal strany vynásobiť: 10·8 = 80 cm.",
          "Žiadna chyba, obvod je 30 cm."
        ],
        "answer": 0,
        "correct": "Obvod tvoria strany útvaru; výška je kolmá úsečka vo vnútri útvaru a do obvodu nepatrí.",
        "hint": "Ktorý z údajov 10, 8, 5 nie je dĺžkou strany?"
      },
      {
        "id": "n-multi",
        "type": "numberInput",
        "phase": "PRENES",
        "skill": "viackrokové úlohy",
        "title": "Obsah z obvodu a uhlopriečky",
        "prompt": "Kosoštvorec má obvod 52 cm a jednu uhlopriečku 24 cm. Aký je jeho obsah v cm²?",
        "validate": "exact",
        "answer": 120,
        "success": "a = 52 : 4 = 13 cm; (f/2)² = 13² − 12² = 25, f = 10 cm; S = 24·10/2 = 120 cm².",
        "hint": "Z obvodu najprv strana, potom Pytagorova veta, aby si zistil druhú uhlopriečku.",
        "reveal": "Správne je 120: a = 13, druhá uhlopriečka 10, S = 24·10/2."
      },
      {
        "id": "c-half",
        "type": "choice",
        "phase": "PRENES",
        "skill": "modelovanie",
        "question": "Z obdĺžnikového plátna 60 cm × 40 cm vystrihneme kosoštvorec, ktorého vrcholy ležia v stredoch strán plátna. Akú časť plátna kosoštvorec zaberie?",
        "options": [
          "polovicu plátna",
          "štvrtinu plátna",
          "tri štvrtiny plátna",
          "celé plátno"
        ],
        "answer": 0,
        "correct": "S = 60·40/2 = 1 200 cm², plátno má 2 400 cm² — presne polovica.",
        "hint": "Aké sú uhlopriečky kosoštvorca vzhľadom na rozmery plátna?"
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Samostatná úloha do zošita",
        "html": "<p>Odlož mobil. Obdĺžnikový dvor s rozmermi <strong>12 m × 10 m</strong> chceme vydláždiť kosoštvorcovými dlaždicami s uhlopriečkami <strong>60 cm a 80 cm</strong>.</p><ol><li>Načrtni jednu dlaždicu, vyznač uhlopriečky a pravý uhol.</li><li>Vypočítaj dĺžku strany a obvod dlaždice.</li><li>Vypočítaj obsah jednej dlaždice v cm².</li><li>Vypočítaj obsah dvora v cm² (pozor na jednotky) a z toho počet dlaždíc, ak zanedbáme orezávanie.</li><li>Jedna dlaždica stojí 2,50 €. Aká je cena všetkých dlaždíc?</li></ol><p>Zapisuj postup, jednotky a odpoveď celou vetou.</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: štvoruholníky",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Rieš v zošite, výsledok vždy s jednotkou. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až po vlastnom pokuse.</p>",
        "items": [
          {
            "level": "zaklad",
            "html": "Štvorec má stranu 9 cm. Vypočítaj obvod a obsah.",
            "answer": "o = 4·9 = <strong>36 cm</strong>; S = 9² = <strong>81 cm²</strong>"
          },
          {
            "level": "zaklad",
            "html": "Obdĺžnik má strany 12 cm a 7 cm. Vypočítaj obvod a obsah.",
            "answer": "o = 2·(12 + 7) = <strong>38 cm</strong>; S = 12·7 = <strong>84 cm²</strong>"
          },
          {
            "level": "zaklad",
            "html": "Kosoštvorec má stranu 6 cm a výšku 5 cm. Vypočítaj obvod a obsah.",
            "answer": "o = 4·6 = <strong>24 cm</strong>; S = 6·5 = <strong>30 cm²</strong>"
          },
          {
            "level": "zaklad",
            "html": "Kosodĺžnik má stranu 13 cm a výšku na ňu 8 cm. Vypočítaj obsah.",
            "answer": "S = 13·8 = <strong>104 cm²</strong>"
          },
          {
            "level": "zaklad",
            "html": "Lichobežník má základne 12 cm a 6 cm a výšku 4 cm. Vypočítaj obsah.",
            "answer": "S = (12 + 6)/2 · 4 = 9·4 = <strong>36 cm²</strong>"
          },
          {
            "level": "rozsirenie",
            "html": "Kosoštvorec má uhlopriečky 48 cm a 20 cm. Vypočítaj stranu, obvod a obsah.",
            "answer": "Polovice 24 a 10; a² = 576 + 100 = 676, <strong>a = 26 cm</strong>; o = <strong>104 cm</strong>; S = 48·20/2 = <strong>480 cm²</strong>"
          },
          {
            "level": "rozsirenie",
            "html": "Rovnoramenný lichobežník má základne 24 cm a 12 cm a ramená po 10 cm. Vypočítaj výšku, obsah a obvod.",
            "answer": "(24 − 12)/2 = 6; v² = 100 − 36 = 64, <strong>v = 8 cm</strong>; S = (24 + 12)/2·8 = <strong>144 cm²</strong>; o = 24 + 12 + 20 = <strong>56 cm</strong>"
          },
          {
            "level": "rozsirenie",
            "html": "Kosodĺžnik má obvod 60 cm, stranu a = 18 cm a výšku na ňu vₐ = 10 cm. Vypočítaj stranu b, obsah a výšku v_b.",
            "answer": "a + b = 30, <strong>b = 12 cm</strong>; S = 18·10 = <strong>180 cm²</strong>; v_b = 180 : 12 = <strong>15 cm</strong>"
          },
          {
            "level": "rozsirenie",
            "html": "Z obdĺžnika 80 cm × 60 cm vyrežeme kosoštvorec s vrcholmi v stredoch strán. Vypočítaj jeho stranu, obsah a obsah zvyšku.",
            "answer": "Polovice 40 a 30, <strong>a = 50 cm</strong>; S = 80·60/2 = <strong>2 400 cm²</strong>; zvyšok 4 800 − 2 400 = <strong>2 400 cm²</strong>"
          },
          {
            "level": "rozsirenie",
            "html": "Dvor 15 m × 8 m vydláždíme kosoštvorcovými dlaždicami s uhlopriečkami 60 cm a 40 cm. Koľko dlaždíc treba (bez orezávania)?",
            "answer": "Dlaždica: 60·40/2 = 1 200 cm². Dvor: 15·8 = 120 m² = 1 200 000 cm². Počet = 1 200 000 : 1 200 = <strong>1 000 dlaždíc</strong>"
          },
          {
            "level": "bonus",
            "html": "Kosodĺžnik má strany 14 cm a 8 cm a uhol 30° medzi nimi (sin 30° = ½). Vypočítaj obsah, výšku v_b na stranu b a obvod.",
            "answer": "S = 14·8·½ = <strong>56 cm²</strong>; v_b = 56 : 8 = <strong>7 cm</strong>; o = 2·(14 + 8) = <strong>44 cm</strong>"
          },
          {
            "level": "bonus",
            "html": "Lichobežník má základne 18 cm a 10 cm a výšku 6 cm. Rozdeľ ho rovnobežkou s ramenom na kosodĺžnik a trojuholník. Vypočítaj obsah oboma spôsobmi.",
            "answer": "Kosodĺžnik: základňa 10 cm, výška 6 cm → 60 cm². Trojuholník: základňa 18 − 10 = 8 cm, výška 6 cm → 8·6/2 = 24 cm². Spolu <strong>84 cm²</strong>. Vzorcom: (18 + 10)/2·6 = <strong>84 cm²</strong> ✔"
          },
          {
            "level": "bonus",
            "html": "Kosoštvorec má stranu 5 cm a uhlopriečku 8 cm. Vypočítaj druhú uhlopriečku, obsah a výšku na stranu.",
            "answer": "(f/2)² = 25 − 16 = 9, <strong>f = 6 cm</strong>; S = 8·6/2 = <strong>24 cm²</strong>; v = S : a = 24 : 5 = <strong>4,8 cm</strong>"
          }
        ]
      },
      {
        "id": "arg",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Ako vyberám vzorec",
        "prompt": "Vlastnými slovami popíš, ako pri slovnej úlohe o štvoruholníku zistíš, ktorý vzorec použiť a čo robíš, keď nejaký údaj chýba. Použi aspoň jeden konkrétny príklad.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Najprv zistím, či sa pýta na dĺžku (obvod) alebo plochu (obsah). Potom určím útvar a pozriem, aké údaje mám: pri kosoštvorci s uhlopriečkami použijem S = e·f/2, pri kosodĺžniku strana a výška S = a·v. Ak chýba údaj, dopočítam ho — napríklad výšku rovnoramenného lichobežníka Pytagorovou vetou z pravouhlého trojuholníka s odvesnou (a − c)/2.",
        "placeholder": "Najprv zistím..."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Pri každej zručnosti označ, ako sa teraz cítiš.",
        "skills": [
          "viem vybrať vzorec podľa útvaru a údajov",
          "viem dopočítať chýbajúci údaj Pytagorovou vetou",
          "viem rozlíšiť obvod a obsah a uviesť správne jednotky",
          "viem vyriešiť slovnú úlohu o štvoruholníku"
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
        "html": "Obdĺžnik má strany 15 cm a 8 cm. Vypočítaj obvod a obsah.",
        "answer": "o = 2·(15 + 8) = 46 cm; S = 15·8 = 120 cm²"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 3,
        "html": "Kosoštvorec má stranu 10 cm a výšku 7 cm. Vypočítaj obvod a obsah.",
        "answer": "o = 40 cm; S = 10·7 = 70 cm²"
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 3,
        "html": "Lichobežník má základne 16 cm a 10 cm a výšku 6 cm. Vypočítaj obsah.",
        "answer": "S = (16 + 10)/2·6 = 78 cm²"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 6,
        "html": "Kosoštvorec má uhlopriečky 18 cm a 24 cm. Vypočítaj stranu, obvod a obsah.",
        "answer": "Polovice 9 a 12, a = 15 cm; o = 60 cm; S = 18·24/2 = 216 cm²"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 6,
        "html": "Rovnoramenný lichobežník má základne 26 cm a 10 cm a ramená po 10 cm. Vypočítaj výšku, obsah a obvod.",
        "answer": "(26 − 10)/2 = 8; v² = 100 − 64 = 36, v = 6 cm; S = (26 + 10)/2·6 = 108 cm²; o = 26 + 10 + 20 = 56 cm"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 7,
        "html": "Pozemok tvaru kosodĺžnika má strany 40 m a 30 m, ktoré zvierajú uhol 30° (sin 30° = ½). Trávnik stojí 2 €/m², oplotenie 15 €/m. Vypočítaj cenu trávnika aj oplotenia.",
        "answer": "S = 40·30·½ = 600 m²; trávnik 600·2 = 1 200 €. o = 2·(40 + 30) = 140 m; oplotenie 140·15 = 2 100 €."
      }
    ]
  }
});
