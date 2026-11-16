MathPlatform.registerModule({
  "id": "3-u02-h035",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 35 · Riešenie úloh",
    "prerequisites": [
      "základná planimetria zo ZŠ",
      "Pytagorova veta a goniometria trojuholníka z 2. ročníka",
      "logika, množiny a algebraické úpravy z 1. ročníka",
      "goniometria z predchádzajúceho tematického celku 3. ročníka",
      "učivo hodín 22–34"
    ],
    "planContent": [
      "Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka."
    ],
    "planPerformance": [
      "Poznať a vedieť opísať vlastnosti základných rovinných útvarov.",
      "Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov."
    ],
    "goals": [
      "rozpoznať útvar a zvoliť vhodný vzorec pre obvod a obsah",
      "dopočítať chýbajúcu stranu alebo výšku Pytagorovou vetou alebo z vlastností útvaru",
      "riešiť zložené útvary a pravidelné mnohouholníky",
      "riešiť slovné úlohy s jednotkami (m² a cm², počet dlaždíc, plot, náter)",
      "nájsť a opraviť typické chyby",
      "Modul je zameraný na obsah písomky (priradenie vzorca k útvaru, pravda/nepravda o vlastnostiach, viackrokové výpočty, slovná úloha s jednotkami); digitálna časť je skrátená na cca 20–25 min."
    ],
    "competencies": [
      "modelovanie reálnej situácie geometrickým útvarom",
      "výber a zdôvodnenie postupu",
      "presný zápis s jednotkami",
      "kritické čítanie cudzieho riešenia"
    ],
    "enrichment": [
      "obsah trojuholníka a rovnobežníka cez sínus uhla (S = ½ab sin γ, S = ab sin α), vrátane tupého uhla 150° (v skrátenom module nie je, v písomke sa nevyskytuje)",
      "kombinované úlohy: obvod a obsah pri zadaní uhlopriečok",
      "Maturitný štandard je iba obohatenie: modelovanie (pozemok, podlaha, náter) a argumentácia."
    ],
    "flow": [
      "0–6 min: vzorce, postup a príklad s kosoštvorcom — spoločne",
      "6–10 min: slovné úlohy: jednotky a počet dlaždíc",
      "10–22 min: platforma: priradenie vzorca, Pytagorova veta, viackrokové výpočty, dlaždice, hľadanie chyby",
      "22–40 min: úloha BEZ MOBILU a zbierka podľa úrovne",
      "40–45 min: rozbor najčastejších chýb podľa živých výsledkov"
    ],
    "diagnostics": [
      "zabúda deliť dvomi pri trojuholníku a lichobežníku",
      "strana kosoštvorca = priemer uhlopriečok",
      "zmiešané jednotky (m² a cm²) pri počte dlaždíc",
      "výšku nedopočíta, ale použije šikmú stranu",
      "rozmanité chyby pri sínuse (zámena s kosínusom)"
    ],
    "partialUse": [
      "pri nedostatku času vynechať bonusovú položku zbierky a hľadanie chyby",
      "mobil nenahrádza ručné počítanie; výpočty a náčrty sa píšu do zošita",
      "pre žiakov so ŠVVP: tabuľka vzorcov a hotové náčrty z príkladov A a B"
    ]
  },
  "student": {
    "title": "Riešenie úloh",
    "subtitle": "Obvod a obsah mnohouholníkov a zložených útvarov",
    "intro": "Zmiešané úlohy: rozpoznáš útvar, dopočítaš chýbajúci údaj a vypočítaš obvod a obsah. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "20–25 min",
    "activities": [
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "zvoliť vzorec pre obvod a obsah útvaru a dopočítať chýbajúci údaj Pytagorovou vetou",
          "riešiť zložené útvary a slovné úlohy s jednotkami"
        ]
      },
      {
        "id": "plan",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Vzorce a postup pri úlohe",
        "html": "<div class=\"table-wrap\"><table class=\"truth\"><thead><tr><th>Útvar</th><th>Obsah</th></tr></thead><tbody><tr><td>obdĺžnik, štvorec</td><td>a · b, a²</td></tr><tr><td>trojuholník</td><td>a · v : 2</td></tr><tr><td>lichobežník</td><td>(a + c) · v : 2</td></tr><tr><td>rovnobežník</td><td>a · v</td></tr><tr><td>kosoštvorec</td><td>a · v; aj e · f : 2</td></tr></tbody></table></div><ol class=\"steps\"><li><strong>Náčrt</strong> a rozpoznanie útvaru (pri zloženom ho rozdeľ alebo doplň).</li><li><strong>Čo chýba?</strong> Chýbajúcu výšku alebo stranu dopočítaj Pytagorovou vetou — hľadaj pravouhlý trojuholník v útvare.</li><li><strong>Vzorec, výpočet</strong> s jednotkami a <strong>kontrola</strong>, či ide o dĺžku, alebo plochu.</li></ol><div class=\"example\"><span class=\"mini-label\">PRÍKLAD · kosoštvorec z uhlopriečok</span><p>Uhlopriečky sú 10 cm a 24 cm. Rozpoľujú sa v pravom uhle, preto strana je prepona trojuholníka s odvesnami 5 cm a 12 cm: a = √(5² + 12²) = 13 cm.</p><p>o = 4 · 13 = <strong>52 cm</strong>, S = 10 · 24 : 2 = <strong>120 cm²</strong>.</p></div><div class=\"warning\"><strong>Pozor:</strong> Strana kosoštvorca nie je (e + f) : 2. Je to prepona pravouhlého trojuholníka s odvesnami e/2 a f/2.</div>",
        "remember": "Náčrt, chýbajúci údaj (Pytagorova veta), vzorec, jednotka. Obvod je dĺžka, obsah plocha."
      },
      {
        "id": "units",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Slovné úlohy: jednotky a počty",
        "html": "<p>V slovných úlohách sa obsah často používa na <strong>počet dlaždíc, množstvo farby alebo cenu</strong>. Postup: obsah plochy podeľ obsahom jednej dlaždice (v rovnakých jednotkách).</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD · dlaždice</span><p>Podlaha izby 5 m × 4 m sa vykladá dlaždicami 50 cm × 50 cm. Koľko dlaždíc treba?</p><p>Plocha izby: 5 · 4 = 20 m². Dlaždica: 0,5 m · 0,5 m = 0,25 m² (50 cm = 0,5 m).</p><p>Počet: 20 : 0,25 = <strong>80 dlaždíc</strong>.</p></div>\n<div class=\"compare\"><div class=\"bad\"><span class=\"mini-label\">ZLE</span><p>20 m² : 2500 cm² — zmiešané jednotky</p></div><div class=\"good\"><span class=\"mini-label\">SPRÁVNE</span><p>20 m² : 0,25 m² = 80<br>alebo 200 000 cm² : 2500 cm² = 80</p></div></div>\n<div class=\"warning\"><strong>Pozor:</strong> 1 m² = 10 000 cm², nie 100 cm². Prevodové číslo sa umocňuje.</div>",
        "remember": "Pri slovných úlohách najprv zjednoť jednotky, potom deli alebo násob."
      },
      {
        "id": "match",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "vzorce",
        "title": "Ktorý vzorec patrí ku ktorému útvaru?",
        "labels": [
          "a · v",
          "a · v : 2",
          "(a + c) · v : 2",
          "e · f : 2",
          "a · b"
        ],
        "items": [
          {
            "text": "rovnobežník so stranou a a výškou v na túto stranu",
            "answer": "a · v"
          },
          {
            "text": "trojuholník so stranou a a výškou v na túto stranu",
            "answer": "a · v : 2"
          },
          {
            "text": "lichobežník so základňami a, c a výškou v",
            "answer": "(a + c) · v : 2"
          },
          {
            "text": "kosoštvorec s uhlopriečkami e a f",
            "answer": "e · f : 2"
          },
          {
            "text": "obdĺžnik so stranami a, b",
            "answer": "a · b"
          }
        ]
      },
      {
        "id": "sort",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "dopočítanie údaja",
        "title": "Treba Pytagorovu vetu?",
        "question": "Rozhodni, či na výpočet žiadaného údaja treba najprv dopočítať stranu Pytagorovou vetou.",
        "labels": [
          "Treba Pytagorovu vetu",
          "Netreba, údaje stačia"
        ],
        "items": [
          {
            "text": "Obdĺžnik má strany 6 cm a 8 cm. Obsah?",
            "answer": false,
            "why": "Obsah je a · b, obe strany poznáme."
          },
          {
            "text": "Obdĺžnik má stranu 12 cm a uhlopriečku 13 cm. Obsah?",
            "answer": true,
            "why": "Druhú stranu dostaneš z pravouhlého trojuholníka: √(13² − 12²) = 5 cm."
          },
          {
            "text": "Kosoštvorec má uhlopriečky 6 cm a 8 cm. Obvod?",
            "answer": true,
            "why": "Stranu treba zo trojuholníka s odvesnami 3 cm a 4 cm: a = 5 cm."
          },
          {
            "text": "Kosoštvorec má uhlopriečky 6 cm a 8 cm. Obsah?",
            "answer": false,
            "why": "Stačí e · f : 2 = 24 cm²."
          },
          {
            "text": "Rovnoramenný trojuholník má základňu 16 cm a rameno 10 cm. Obsah?",
            "answer": true,
            "why": "Výšku dostaneš z trojuholníka s odvesnami 8 cm a v: v = 6 cm."
          },
          {
            "text": "Lichobežník má základne 9 cm a 5 cm a výšku 4 cm. Obsah?",
            "answer": false,
            "why": "Všetky údaje vo vzorci sú dané."
          }
        ]
      },
      {
        "id": "c2",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Pytagorova veta",
        "question": "Pravouhlý lichobežník má základne 14 m a 8 m a kolmé rameno 8 m. Aká dlhá je jeho šikmé rameno?",
        "options": [
          "10 m",
          "6 m",
          "12 m",
          "14 m"
        ],
        "answer": 0,
        "correct": "Správne: rozdiel základní 14 − 8 = 6 m a výška 8 m sú odvesny, c = √(36 + 64) = 10 m.",
        "hint": "Z konca kratšej základne spusti výšku. Vznikne pravouhlý trojuholník — aké odvesny má?"
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "kosoštvorec",
        "question": "Kosoštvorec má uhlopriečky 6 cm a 8 cm. Aký je jeho obvod?",
        "options": [
          "14 cm",
          "20 cm",
          "24 cm",
          "28 cm"
        ],
        "answer": 1,
        "correct": "Správne: strana je √(3² + 4²) = 5 cm, obvod 4 · 5 = 20 cm.",
        "hint": "Uhlopriečky sa rozpoľujú v pravom uhle. Aká dlhá je strana kosoštvorca?"
      },
      {
        "id": "n2",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "Pytagorova veta",
        "title": "Rovnoramenný trojuholník",
        "prompt": "Rovnoramenný trojuholník má základňu 16 cm a ramená po 10 cm. Aký je jeho obsah v cm²?",
        "validate": "exact",
        "answer": 48,
        "success": "Výška v = √(10² − 8²) = 6 cm, S = 16 · 6 : 2 = 48 cm².",
        "hint": "Výška rozdelí základňu na dve časti po 8 cm. Dopočítaj ju Pytagorovou vetou.",
        "reveal": "Správne je 48: v = 6 cm, S = 16 · 6 : 2."
      },
      {
        "id": "n8",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "zložený útvar",
        "title": "Odrezaný roh",
        "prompt": "Z obdĺžnika 12 cm × 8 cm odrežeme v jednom rohu pravouhlý trojuholník s odvesnami 6 cm a 4 cm. Aký je obsah zvyšného útvaru v cm²?",
        "validate": "exact",
        "answer": 84,
        "success": "12 · 8 = 96 cm², trojuholník 6 · 4 : 2 = 12 cm², 96 − 12 = 84 cm².",
        "hint": "Od obsahu obdĺžnika odčítaj obsah trojuholníka (nezabudni na delenie dvomi).",
        "reveal": "Správne je 84: 96 − 12."
      },
      {
        "id": "n5",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "jednotky",
        "title": "Dlaždice",
        "prompt": "Podlaha izby má rozmery 6 m × 4 m. Vykladá sa dlaždicami 40 cm × 40 cm. Koľko dlaždíc je potrebných (bez rezerv)?",
        "validate": "exact",
        "answer": 150,
        "success": "Plocha 24 m², dlaždica 0,16 m², 24 : 0,16 = 150.",
        "hint": "Zjednoť jednotky: 40 cm = 0,4 m. Potom plochu izby vydeľ plochou dlaždice.",
        "reveal": "Správne je 150: 24 m² : 0,16 m² = 150."
      },
      {
        "id": "hunt2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak určoval obvod kosoštvorca s uhlopriečkami 6 cm a 8 cm: „strana je (6 + 8) : 2 = 7 cm, obvod je 28 cm.“ Aká je chyba?",
        "options": [
          "Strana je prepona pravouhlého trojuholníka s odvesnami 3 cm a 4 cm, teda 5 cm; obvod je 20 cm.",
          "Strana je 6 cm, obvod 24 cm.",
          "Obvod sa počíta 2 · 7 = 14 cm.",
          "Nič, strana je priemer uhlopriečok."
        ],
        "answer": 0,
        "correct": "Správne: a = √(3² + 4²) = 5 cm, o = 4 · 5 = 20 cm. Priemer uhlopriečok nie je dĺžka strany.",
        "hint": "Uhlopriečky kosoštvorca sú na seba kolmé a rozpoľujú sa. Aký trojuholník vznikne?"
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úlohy na papier",
        "html": "<p>Odlož zariadenie. Nakresli náčrt, označ údaje a výsledky zapíš s jednotkami.</p><ol><li>Pozemok má tvar pravouhlého lichobežníka so základňami 20 m a 12 m a kolmým ramenom 15 m. Vypočítaj obsah pozemku a dĺžku plota okolo neho.</li><li>Kosoštvorec má uhlopriečky 16 cm a 30 cm. Vypočítaj jeho obvod, obsah a výšku na stranu.</li><li>Stena obdĺžnikového tvaru 5 m × 2,5 m sa natiera farbou, ktorá vystačí na 4 m² z jednej plechovky. Koľko plechoviek treba kúpiť? Odpovedz slovne.</li></ol>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: riešenie úloh",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Nakresli náčrt, dopočítaj chýbajúce údaje a zapíš výsledok s jednotkou. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Kosoštvorec má uhlopriečky 10 cm a 16 cm. Vypočítaj obsah.",
            "answer": "10 · 16 : 2 = <strong>80 cm²</strong>"
          },
          {
            "level": "zaklad",
            "text": "Obdĺžnik má strany 9 cm a 12 cm. Aká je jeho uhlopriečka?",
            "answer": "√(81 + 144) = √225 = <strong>15 cm</strong>"
          },
          {
            "level": "zaklad",
            "text": "Izba je 5 m × 4 m. Dlaždice majú rozmer 50 cm × 50 cm. Koľko ich treba?",
            "answer": "20 m² : 0,25 m² = <strong>80 dlaždíc</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Rovnoramenný trojuholník má základňu 10 cm a ramená 13 cm. Vypočítaj obsah a obvod.",
            "answer": "v = √(169 − 25) = 12 cm, S = 10 · 12 : 2 = <strong>60 cm²</strong>, o = 13 + 13 + 10 = <strong>36 cm</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Kosoštvorec má uhlopriečky 16 cm a 30 cm. Vypočítaj obvod a obsah.",
            "answer": "a = √(8² + 15²) = 17 cm, o = <strong>68 cm</strong>, S = 16 · 30 : 2 = <strong>240 cm²</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Pravouhlý lichobežník má základne 20 m a 12 m a kolmé rameno 15 m. Vypočítaj obsah a obvod.",
            "answer": "Šikmé rameno √(8² + 15²) = 17 m. S = 32 · 15 : 2 = <strong>240 m²</strong>, o = 20 + 12 + 15 + 17 = <strong>64 m</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Pozemok je obdĺžnik 24 m × 18 m, z ktorého je v rohu vyrezaný štvorec 6 m × 6 m. Vypočítaj jeho obsah a obvod.",
            "answer": "S = 432 − 36 = <strong>396 m²</strong>, obvod je rovnaký ako obvod obdĺžnika: 2 · (24 + 18) = <strong>84 m</strong>"
          },
          {
            "level": "bonus",
            "text": "Pravidelný n-uholník má obvod 72 cm a vnútorný uhol 150°. Aká je jeho strana?",
            "answer": "(n − 2) · 180 : n = 150 ⇒ n = 12, a = 72 : 12 = <strong>6 cm</strong>"
          }
        ]
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; pri 🔴 alebo 🟡 sa vráť k vzorovým príkladom.",
        "skills": [
          "zvolím vzorec pre obsah daného útvaru",
          "dopočítam chýbajúcu stranu alebo výšku (Pytagorova veta)",
          "zostavím a vyriešim slovnú úlohu s jednotkami",
          "nájdem chybu v cudzom riešení"
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
        "text": "Lichobežník má základne 16 cm a 10 cm a výšku 6 cm. Vypočítaj obsah.",
        "answer": "(16 + 10) · 6 : 2 = 78 cm²"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 5,
        "text": "Kosoštvorec má uhlopriečky 6 cm a 8 cm. Vypočítaj obvod a obsah.",
        "answer": "a = 5 cm, o = 20 cm; S = 6 · 8 : 2 = 24 cm²"
      },
      {
        "id": "w3",
        "level": "rozsirenie",
        "space": 5,
        "text": "Rovnoramenný trojuholník má základňu 16 cm a ramená 17 cm. Vypočítaj výšku, obsah a obvod.",
        "answer": "v = √(289 − 64) = 15 cm; S = 16 · 15 : 2 = 120 cm²; o = 17 + 17 + 16 = 50 cm"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 4,
        "text": "Trojuholník má strany 12 cm a 10 cm a medzi nimi uhol 30°. Vypočítaj obsah. (sin 30° = ½)",
        "answer": "S = ½ · 12 · 10 · ½ = 30 cm²"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 5,
        "text": "Pravidelný šesťuholník má stranu 10 cm. Vypočítaj obvod a obsah.",
        "answer": "o = 60 cm; S = 3 · 100 · √3 : 2 = 150√3 cm²"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 6,
        "text": "Pravidelný n-uholník má obvod 36 cm a vnútorný uhol 140°. Koľko má strán a aká je jeho strana?",
        "answer": "(n − 2) · 180 : n = 140 ⇒ n = 9; a = 36 : 9 = 4 cm"
      }
    ]
  }
});
