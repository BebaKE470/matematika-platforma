MathPlatform.registerModule({
  "id": "3-u02-h024",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 24 · Riešenie úloh",
    "prerequisites": [
      "Hodina 22: druhy trojuholníkov, výška, ťažnica, Pytagorova veta",
      "Hodina 23: obvod, obsah, Herónov vzorec, S = ½ab·sin γ, r = S/s",
      "3. ročník: goniometrické funkcie (sin 30°, sin 90°, sin 150°)"
    ],
    "planContent": [
      "Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka."
    ],
    "planPerformance": [
      "Poznať a vedieť opísať vlastnosti základných rovinných útvarov.",
      "Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov."
    ],
    "goals": [
      "modul je zameraný na obsah písomky (digitálna časť približne 20–25 min)",
      "riešiť viackrokové a slovné úlohy s trojuholníkom a zapísať ich s jednotkami",
      "nájsť a opraviť typické chyby v cudzom riešení"
    ],
    "competencies": [
      "modelovanie slovnej úlohy náčrtom a pravouhlým trojuholníkom",
      "výber a zdôvodnenie postupu podľa daných údajov",
      "presný zápis s jednotkami a skúška výsledku",
      "kritické čítanie cudzieho riešenia"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie: reprezentácie, modelovanie, presný matematický jazyk a argumentácia.",
      "Bonus: R a r rovnostranného trojuholníka cez ťažisko, uhol z obsahu cez sínus.",
      "Úlohy z praxe: rebrík, štít domu, záhon, pozemok a oplotenie."
    ],
    "flow": [
      "0–5 min: vzorce a postup (tabuľka „Dané → postup“)",
      "5–10 min: vzorový viackrokový príklad a slovná úloha",
      "10–25 min: platforma: výber postupu, slovné úlohy, jednotky, hľadanie chyby",
      "25–40 min: úloha BEZ MOBILU a zbierka podľa úrovne",
      "40–45 min: rozbor chýb podľa živých výsledkov, príprava na štvoruholníky"
    ],
    "diagnostics": [
      "v Pytagorovej vete pre rovnoramenný trojuholník nepoužije polovicu základne",
      "píše cm namiesto cm² a naopak",
      "nevie rozhodnúť, ktorý vzorec použiť pri danom zadaní"
    ],
    "partialUse": [
      "pri nedostatku času vynechať bonusové položky zbierky",
      "mobil nenahrádza ručné počítanie; postupy sa píšu do zošita",
      "pri ŠVVP povoliť oporu: tabuľka „Dané → postup“"
    ]
  },
  "student": {
    "title": "Riešenie úloh",
    "subtitle": "Téma 24 · Planimetria · trojuholník",
    "intro": "Zmiešané a slovné úlohy o trojuholníku: vyberieš postup podľa zadaných údajov, vyriešiš úlohu a overíš ju. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "20–25 min",
    "activities": [
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "z údajov v zadaní vybrať vhodný postup (Pytagorova veta, S = a·v/2, S = ab/2)",
          "riešiť viackrokové a slovné úlohy s trojuholníkom a zapísať ich s jednotkami",
          "nájsť a opraviť typické chyby v cudzom riešení"
        ]
      },
      {
        "id": "toolkit",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Vzorce a postup pri úlohách o trojuholníku",
        "html": "<div class=\"formula\"><span class=\"mini-label\">VZORCE</span>o = a + b + c &nbsp;·&nbsp; S = a · v / 2 &nbsp;·&nbsp; pravouhlý: S = a · b / 2 &nbsp;·&nbsp; a² + b² = c²</div>\n<ol class=\"steps\">\n<li><strong>Náčrt:</strong> označ dané a hľadané veličiny aj s jednotkami.</li>\n<li><strong>Pravý uhol:</strong> nájdi ho (odvesny, výška rovnoramenného – polovica základne!) a použi Pytagorovu vetu.</li>\n<li><strong>Vzorec:</strong> obvod = súčet strán, obsah = strana · jej výška / 2.</li>\n<li><strong>Jednotky:</strong> cm, m pri dĺžke a obvode; cm², m² pri obsahu.</li>\n</ol>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD · viackroková</span><p>Rovnoramenný trojuholník má obvod 36 cm a ramená 13 cm.</p><p>Základňa: 36 − 2 · 13 = <strong>10 cm</strong>. Výška: v² = 13² − 5² = 144, v = <strong>12 cm</strong>. Obsah: S = 10 · 12 / 2 = <strong>60 cm²</strong>.</p></div>",
        "remember": "Najprv nájdi chýbajúci údaj (Pytagorova veta), potom dosaď do vzorca a pridaj jednotku."
      },
      {
        "id": "method-matrix",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "výber postupu",
        "title": "Čo použiješ?",
        "labels": [
          "S = a·v/2",
          "S = ab/2 (odvesny)",
          "najprv Pytagorova veta"
        ],
        "items": [
          {
            "text": "strana 12 cm a výška na ňu 7 cm",
            "answer": "S = a·v/2"
          },
          {
            "text": "pravouhlý trojuholník s odvesnami 6 cm a 8 cm, hľadáme obsah",
            "answer": "S = ab/2 (odvesny)"
          },
          {
            "text": "rovnoramenný: základňa 10 cm, ramená 13 cm (výška nie je daná)",
            "answer": "najprv Pytagorova veta"
          },
          {
            "text": "strana 20 cm a výška na ňu 9 cm",
            "answer": "S = a·v/2"
          },
          {
            "text": "pravouhlý: prepona 13 cm a odvesna 5 cm, hľadáme obsah",
            "answer": "najprv Pytagorova veta"
          },
          {
            "text": "pravouhlý trojuholník s odvesnami 9 cm a 12 cm, hľadáme obsah",
            "answer": "S = ab/2 (odvesny)"
          }
        ]
      },
      {
        "id": "n-lad",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "slovná úloha: Pytagorova veta",
        "title": "Rebrík",
        "prompt": "Rebrík dlhý 6,5 m je oprený o stenu. Jeho päta je 2,5 m od steny. Do akej výšky v metroch dosiahne?",
        "validate": "exact",
        "answer": 6,
        "success": "v² = 6,5² − 2,5² = 42,25 − 6,25 = 36, v = 6 m.",
        "hint": "Rebrík je prepona pravouhlého trojuholníka, vzdialenosť od steny je odvesna.",
        "reveal": "Správne je 6: 42,25 − 6,25 = 36."
      },
      {
        "id": "n-field",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "slovná úloha: obsah",
        "title": "Osivo",
        "prompt": "Trojuholníkový pozemok má strany 9 m, 12 m a 15 m. Na 6 m² sa vysieva 1 kg osiva. Koľko kg osiva treba na celý pozemok?",
        "validate": "exact",
        "answer": 9,
        "success": "9² + 12² = 15², pozemok je pravouhlý: S = 9 · 12 / 2 = 54 m². 54 : 6 = 9 kg.",
        "hint": "Overíš, či je trojuholník pravouhlý (9² + 12² = 15²). Potom S = ab/2.",
        "reveal": "Správne je 9: S = 54 m² a 54 : 6 = 9."
      },
      {
        "id": "n-plot",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "slovná úloha: obsah a cena",
        "title": "Trávnik",
        "prompt": "Pozemok má tvar rovnoramenného trojuholníka so základňou 30 m a ramenami 17 m. Zatrávnenie stojí 3 € za 1 m². Koľko eur stojí zatrávnenie celého pozemku?",
        "validate": "exact",
        "answer": 360,
        "success": "Výška: v² = 17² − 15² = 64, v = 8 m. S = 30 · 8 / 2 = 120 m². 120 · 3 = 360 €.",
        "hint": "Najprv výška (polovica základne je 15 m), potom obsah v m² a nakoniec cena.",
        "reveal": "Správne je 360: v = 8 m, S = 120 m², 120 · 3 = 360."
      },
      {
        "id": "c-iso",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "rovnoramenný trojuholník",
        "question": "Rovnoramenný trojuholník má základňu 8 cm a ramená 5 cm. Aký je jeho obsah?",
        "options": [
          "20 cm²",
          "16 cm²",
          "12,5 cm²",
          "12 cm²"
        ],
        "answer": 3,
        "correct": "Správne: výška v² = 25 − 16 = 9, v = 3 cm, S = 8 · 3 / 2 = 12 cm². (20 = 8 · 5 / 2 používa rameno ako výšku; 16 = 8 · 4 / 2 používa polovicu základne ako výšku.)",
        "hint": "Najprv nájdi výšku na základňu: polovica základne je 4 cm a rameno 5 cm je prepona."
      },
      {
        "id": "c-eq",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "rovnostranný trojuholník",
        "question": "Rovnostranný trojuholník má stranu 8 cm. Aký je jeho obvod a obsah?",
        "options": [
          "obvod 24 cm², obsah 16√3 cm",
          "obvod 24 cm, obsah 32 cm²",
          "obvod 24 cm, obsah 16√3 cm²",
          "obvod 24 cm, obsah 64√3 cm²"
        ],
        "answer": 2,
        "correct": "Správne: o = 3 · 8 = 24 cm, S = a²√3 / 4 = 64√3 / 4 = 16√3 cm². Obvod je dĺžka (cm), obsah plocha (cm²).",
        "hint": "Skontroluj aj jednotky. Dosaď do S = a²√3 / 4; koľko je 64 : 4?"
      },
      {
        "id": "units-sort",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "jednotky",
        "title": "Správny zápis s jednotkou",
        "question": "Rozhodni, či je zápis výsledku správny.",
        "labels": [
          "Správne",
          "Nesprávne"
        ],
        "items": [
          {
            "text": "obvod o = 28 cm",
            "answer": true,
            "why": "Obvod je dĺžka, jednotka cm."
          },
          {
            "text": "obsah S = 30 cm",
            "answer": false,
            "why": "Obsah je plocha, má byť cm²."
          },
          {
            "text": "obsah S = 84 cm²",
            "answer": true,
            "why": "Obsah je plocha, jednotka cm²."
          },
          {
            "text": "obvod o = 15 cm²",
            "answer": false,
            "why": "Obvod je dĺžka, nie plocha — cm, nie cm²."
          },
          {
            "text": "výška v = 6 cm",
            "answer": true,
            "why": "Výška je dĺžka."
          },
          {
            "text": "výška v = 12 cm²",
            "answer": false,
            "why": "Výška je dĺžka, má byť cm."
          }
        ]
      },
      {
        "id": "hunt1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak počíta výšku rovnoramenného trojuholníka so základňou 10 cm a ramenami 13 cm: „v² = 13² − 10² = 69.“ Aká je správna výška?",
        "options": [
          "69 cm",
          "√69 cm ≈ 8,3 cm",
          "8 cm",
          "12 cm"
        ],
        "answer": 3,
        "correct": "Správne: do Pytagorovej vety patrí polovica základne: v² = 13² − 5² = 169 − 25 = 144, v = 12 cm. (Žiak odčítal celú základňu.)",
        "hint": "Výška rozpolí základňu. Akú dĺžku má odvesna, ktorá s výškou tvorí pravý uhol?"
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha na papier",
        "html": "<p>Odlož zariadenie. Pozemok má tvar rovnoramenného trojuholníka so základňou 24 m a ramenami 15 m.</p><ol><li>Načrtni ho a vypočítaj výšku na základňu (Pytagorova veta, polovica základne!).</li><li>Vypočítaj obsah pozemku a jeho obvod.</li><li>Koľko eur stojí oplotenie celého pozemku, ak 1 m plota stojí 15 €?</li></ol>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: riešenie úloh",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Rieš na papier. Najprv náčrt, potom výber postupu a jednotky pri výsledku. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Rovnoramenný trojuholník má základňu 12 cm a ramená 9 cm. Vypočítaj obvod.",
            "answer": "o = 12 + 9 + 9 = <strong>30 cm</strong>."
          },
          {
            "level": "zaklad",
            "text": "Strana trojuholníka je 20 cm a výška na ňu 7 cm. Vypočítaj obsah.",
            "answer": "S = 20 · 7 / 2 = <strong>70 cm²</strong>."
          },
          {
            "level": "zaklad",
            "text": "Pravouhlý trojuholník má odvesny 12 cm a 16 cm. Vypočítaj preponu, obvod a obsah.",
            "answer": "c² = 144 + 256 = 400, c = <strong>20 cm</strong>. o = 12 + 16 + 20 = <strong>48 cm</strong>. S = 12 · 16 / 2 = <strong>96 cm²</strong>."
          },
          {
            "level": "zaklad",
            "text": "Rebrík dlhý 10 m je oprený o stenu, jeho päta je 6 m od steny. Do akej výšky dosiahne?",
            "answer": "v² = 100 − 36 = 64, v = <strong>8 m</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Pravouhlý trojuholník má obvod 30 cm a jednu odvesnu 5 cm. Vypočítaj jeho obsah. (Nápoveda: druhú odvesnu b a preponu c spoj rovnicami b + c = 25 a c² = 25 + b².)",
            "answer": "c = 25 − b, (25 − b)² = 25 + b² ⇒ 625 − 50b = 25 ⇒ b = 12, c = 13. S = 5 · 12 / 2 = <strong>30 cm²</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Rovnoramenný trojuholník má ramená 25 cm a výšku na základňu 24 cm. Vypočítaj základňu, obsah a obvod.",
            "answer": "Polovica základne: √(625 − 576) = 7 cm, základňa <strong>14 cm</strong>. S = 14 · 24 / 2 = <strong>168 cm²</strong>. o = 14 + 50 = <strong>64 cm</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Štít domu má tvar rovnoramenného trojuholníka so základňou 10 m a výškou 12 m. Aká dlhá je jedna šikmá hrana štítu a koľko m² má štít?",
            "answer": "Rameno: √(5² + 12²) = <strong>13 m</strong>. S = 10 · 12 / 2 = <strong>60 m²</strong> (obe šikmé hrany spolu 26 m)."
          }
        ]
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; pri 🔴 alebo 🟡 sa vráť k vzorovému príkladu na začiatku.",
        "skills": [
          "výber postupu podľa údajov",
          "Pytagorova veta v úlohách",
          "obvod a obsah trojuholníka",
          "slovné úlohy a jednotky"
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
        "text": "Rovnostranný trojuholník má obvod 36 cm. Vypočítaj stranu a obsah (presne).",
        "answer": "a = 12 cm; S = 144√3 / 4 = 36√3 cm²."
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 4,
        "text": "Rebrík dĺžky 5 m je oprený o stenu, päta je 3 m od steny. Do akej výšky dosahuje?",
        "answer": "v² = 25 − 9 = 16, v = 4 m."
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 4,
        "text": "Vypočítaj obsah trojuholníka so stranami 13 cm, 14 cm, 15 cm.",
        "answer": "s = 21, S = √(21 · 8 · 7 · 6) = 84 cm²."
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 5,
        "text": "Rovnoramenný trojuholník má obvod 36 cm a základňu 16 cm. Vypočítaj ramená, výšku na základňu a obsah.",
        "answer": "Ramená (36 − 16) : 2 = 10 cm; v² = 100 − 64 = 36, v = 6 cm; S = 16 · 6 / 2 = 48 cm²."
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 4,
        "text": "Trojuholník má obsah 96 cm². Aký obsah má trojuholník ABT, kde T je ťažisko? A aký trojuholník odrezaný strednou priečkou?",
        "answer": "ABT: 96 / 3 = 32 cm². Odrezaný: 96 / 4 = 24 cm²."
      },
      {
        "id": "w6",
        "level": "rozsirenie",
        "space": 4,
        "text": "Dve strany trojuholníka majú 20 cm a 9 cm, uhol medzi nimi je 150°. Vypočítaj obsah.",
        "answer": "S = ½ · 20 · 9 · ½ = 45 cm²."
      },
      {
        "id": "w7",
        "level": "bonus",
        "space": 5,
        "text": "Pravouhlý trojuholník má odvesny 8 cm a 15 cm. Vypočítaj výšku na preponu.",
        "answer": "c = 17 cm, S = 60 cm², 60 = 17 · v / 2 ⇒ v = 120 / 17 ≈ 7,06 cm."
      }
    ]
  }
});
