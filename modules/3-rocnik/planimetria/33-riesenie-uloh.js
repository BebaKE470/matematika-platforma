MathPlatform.registerModule({
  "id": "3-u02-h033",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 33 · Riešenie úloh",
    "prerequisites": [
      "obvod a obsah štvorca, obdĺžnika, lichobežníka, kosoštvorca a kosodĺžnika (hodiny 26–32)",
      "Pytagorova veta z 2. ročníka (výška lichobežníka, uhlopriečky kosoštvorca)",
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
      "Modul je zameraný na obsah písomky (vzorce, vlastnosti útvarov, viackrokové výpočty s Pytagorovou vetou, slovná úloha s jednotkami); digitálna časť je skrátená na približne 20–25 minút.",
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
      "0–4 min: prehľad vzorcov a postup (explain)",
      "4–12 min: priradenie vzorca a viackrokové výpočty (uhlopriečky, lichobežník: výška → obsah → obvod)",
      "12–18 min: slovná úloha a jednotky",
      "18–30 min: samostatná úloha na papieri: dlažba dvora (bez mobilu)",
      "zbierka podľa úrovní ako domáca úloha alebo na ďalšiu hodinu"
    ],
    "diagnostics": [
      "Zámena obvodu a obsahu (dĺžka vs. plocha) alebo jednotiek (cm vs. cm²).",
      "Dosadenie bočnej strany alebo ramena namiesto výšky.",
      "Zabudnuté ½ pri lichobežníku alebo uhlopriečkach kosoštvorca.",
      "Pytagorova veta s celými uhlopriečkami namiesto polovíc.",
      "Chybný prevod m² ↔ cm² (100 namiesto 10 000)."
    ],
    "partialUse": [
      "Na krátku hodinu stačí prehľad, výpočty s lichobežníkom a slovná úloha; zbierka ide ako domáca úloha.",
      "Pri slabšej triede použi iba úrovne základ a rozšírenie."
    ]
  },
  "student": {
    "title": "Riešenie úloh",
    "subtitle": "Výber vzorca → dopočítanie údaja → výpočet → odpoveď",
    "intro": "Dnes spojíš všetko, čo vieš o štvoruholníkoch: vyberieš vzorec, dopočítaš chýbajúci údaj a vyriešiš slovné úlohy.",
    "estimatedTime": "28–35 min",
    "activities": [
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "vybrať správny vzorec podľa útvaru a údajov",
          "dopočítať chýbajúci údaj (výška, strana) Pytagorovou vetou",
          "slovná úloha: obvod vs. obsah a jednotky"
        ]
      },
      {
        "id": "overview",
        "type": "explain",
        "phase": "PREHĽAD",
        "title": "Vzorce pre štvoruholníky na jednom mieste",
        "html": "<div class=\"table-wrap\"><table class=\"truth\"><thead><tr><th>Útvar</th><th>Obvod</th><th>Obsah</th><th>Údaje</th></tr></thead><tbody><tr><td>Štvorec</td><td>o = 4a</td><td>S = a²</td><td>strana a</td></tr><tr><td>Obdĺžnik</td><td>o = 2(a + b)</td><td>S = a·b</td><td>strany a, b</td></tr><tr><td>Kosoštvorec</td><td>o = 4a</td><td>S = a·v &nbsp;alebo&nbsp; S = e·f/2</td><td>strana, výška, uhlopriečky e, f</td></tr><tr><td>Kosodĺžnik</td><td>o = 2(a + b)</td><td>S = a·vₐ</td><td>strany a, b, výška, uhol α</td></tr><tr><td>Lichobežník</td><td>o = a + b + c + d</td><td>S = (a + c)/2 · v</td><td>základne a, c, ramená b, d, výška v</td></tr></tbody></table></div><p>Dôležité rozdiely: pri kosodĺžniku a kosoštvorci v obsahu vždy <span class=\"hl\">výška</span>, nie bočná strana; pri kosoštvorci sú uhlopriečky kolmé a delia sa na polovice, preto <strong>a² = (e/2)² + (f/2)²</strong>.</p>",
        "remember": "Obvod = súčet strán (dĺžka, cm). Obsah = plocha (cm²). Najprv vyber vzorec podľa útvaru a údajov."
      },
      {
        "id": "ex-method",
        "type": "explain",
        "phase": "POSTUP",
        "title": "Postup a vzorový príklad",
        "html": "<ol class=\"steps\"><li>Zisti, či sa pýta na <strong>dĺžku</strong> (obvod) alebo <strong>plochu</strong> (obsah).</li><li>Načrtni útvar a vyznač údaje.</li><li>Ak chýba výška alebo strana, najprv ju dopočítaj Pytagorovou vetou.</li><li>Dosaď s jednotkami, skontroluj ich a napíš odpoveď vetou.</li></ol><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Rovnoramenný lichobežník má základne 22 cm a 10 cm a ramená po 10 cm.</p><p>Odvesna pravouhlého trojuholníka: (22 − 10)/2 = <strong>6 cm</strong>; v² = 10² − 6² = 64, <strong>v = 8 cm</strong></p><p>S = (22 + 10)/2 · 8 = 16·8 = <strong>128 cm²</strong>; o = 22 + 10 + 10 + 10 = <strong>52 cm</strong></p></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Pozemok tvaru kosodĺžnika má stranu 30 m a výšku na ňu 20 m. Koľko stojí osiatie, ak 1 m² stojí 4 €?</p><p>Pýta sa na plochu: S = 30·20 = <strong>600 m²</strong>; cena = 600·4 = <strong>2 400 €</strong></p></div><div class=\"warning\"><strong>Pozor:</strong> Rameno nie je výška. A 1 m² = 10 000 cm² (nie 100 cm²).</div>",
        "remember": "Najprv zisti, či ide o obvod (dĺžka) alebo obsah (plocha); chýbajúcu výšku dopočítaj Pytagorovou vetou."
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
            "level": "bonus",
            "html": "Kosoštvorec má stranu 5 cm a uhlopriečku 8 cm. Vypočítaj druhú uhlopriečku, obsah a výšku na stranu.",
            "answer": "(f/2)² = 25 − 16 = 9, <strong>f = 6 cm</strong>; S = 8·6/2 = <strong>24 cm²</strong>; v = S : a = 24 : 5 = <strong>4,8 cm</strong>"
          }
        ]
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
