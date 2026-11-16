MathPlatform.registerModule({
  "id": "3-u02-h023",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 23 · Obvod a obsah trojuholníka",
    "prerequisites": [
      "ZŠ: obsah obdĺžnika, jednotky dĺžky a obsahu",
      "2. ročník: Pytagorova veta, sínusová veta",
      "3. ročník: goniometrické funkcie (sin 30°, sin 150°) — celok 3-u01 je prebraný pred týmto celkom",
      "Hodina 22: výška, druhy trojuholníkov, vpísaná kružnica"
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
      "vypočítať obvod trojuholníka a rozlíšiť obvod od obsahu vrátane jednotiek",
      "použiť S = a·v/2 s ľubovoľnou stranou a jej výškou, aj z obsahu dopočítať výšku",
      "počítať obsah pravouhlého, rovnoramenného a rovnostranného trojuholníka"
    ],
    "competencies": [
      "prepájať obrázok (výška, kolmosť) s výpočtom",
      "výber vzorca podľa toho, aké údaje sú dané",
      "presný zápis s jednotkami a overenie výsledku iným spôsobom",
      "argumentovať, prečo vzorec platí (polovica obdĺžnika)"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie: reprezentácie, modelovanie, presný matematický jazyk a argumentácia.",
      "Odvodenie r = S/s z troch pomocných trojuholníkov.",
      "Bonus: R = abc/(4S) zo sínusovej vety a výška z Herónovho obsahu."
    ],
    "flow": [
      "0–5 min: obvod a obsah, jednotky; odvodenie S = a·v/2 z obdĺžnika",
      "5–10 min: spoločné príklady (strana a výška, výška z obsahu)",
      "10–25 min: platforma: pravouhlý, rovnoramenný, rovnostranný trojuholník, hľadanie chyby",
      "25–40 min: úloha BEZ MOBILU a zbierka podľa úrovne",
      "40–45 min: rozbor chýb podľa živých výsledkov"
    ],
    "diagnostics": [
      "zabúda na ½ alebo spáruje stranu s cudzou výškou",
      "zamieňa obvod a obsah, píše cm namiesto cm²",
      "pri tupouhlom trojuholníku nevie, kam padne výška"
    ],
    "partialUse": [
      "mobil nenahrádza ručné počítanie; náčrty a postupy sa píšu do zošita",
      "pri ŠVVP povoliť opornú kartu so vzorcami"
    ]
  },
  "student": {
    "title": "Obvod a obsah trojuholníka",
    "subtitle": "Obvod · S = a·v/2 · pravouhlý, rovnoramenný, rovnostranný · Herónov vzorec · sínus",
    "intro": "Zameriavame sa na to, čo bude v písomke: obvod a obsah trojuholníka, viackrokové výpočty s Pytagorovou vetou a jednotky.",
    "estimatedTime": "20–25 min",
    "activities": [
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "vypočítať obvod a obsah trojuholníka a rozlíšiť jednotky",
          "použiť S = a · v / 2 a dopočítať výšku z obsahu",
          "pravouhlý a rovnoramenný trojuholník: dopočítať stranu či výšku Pytagorovou vetou a potom obvod a obsah",
          "modul je zameraný na obsah písomky"
        ]
      },
      {
        "id": "formulas",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Obvod a obsah trojuholníka",
        "html": "<div class=\"formula\"><span class=\"mini-label\">OBVOD</span>o = a + b + c<span class=\"formula-note\">Súčet strán, jednotka dĺžková (cm, m).</span></div>\n<div class=\"formula\"><span class=\"mini-label\">OBSAH</span>S = <span class=\"frac\"><span class=\"frac-num\">a · v<sub>a</sub></span><span class=\"frac-den\">2</span></span><span class=\"formula-note\">Strana a jej výška; jednotka štvorcová (cm², m²). Platí pre každú stranu: S = b·v<sub>b</sub>/2 = c·v<sub>c</sub>/2.</span></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>a = 10 cm, v<sub>a</sub> = 6 cm: S = 10 · 6 / 2 = <strong>30 cm²</strong>. Ak b = 12 cm, z 30 = 12 · v<sub>b</sub> / 2 vyjde v<sub>b</sub> = <strong>5 cm</strong>.</p></div>\n<div class=\"warning\"><strong>Pozor:</strong> do vzorca patrí strana a <em>jej</em> výška; nezabudni na delenie dvoma a na správnu jednotku (obvod v cm, obsah v cm²).</div>",
        "remember": "Obvod = súčet strán (cm), obsah = strana krát jej výška delené dvoma (cm²)."
      },
      {
        "id": "c-area1",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "obsah z výšky",
        "question": "Trojuholník má strany a = 9 cm, b = 7 cm, c = 12 cm. Výška na stranu a má dĺžku v_a = 6 cm. Aký je jeho obsah?",
        "options": [
          "54 cm²",
          "36 cm²",
          "21 cm²",
          "27 cm²"
        ],
        "answer": 3,
        "correct": "Správne: S = a · v_a / 2 = 9 · 6 / 2 = 27 cm². (54 vznikne, keď zabudneš ½; 36 a 21 vzniknú, keď k výške v_a použiješ cudziu stranu c, resp. b.)",
        "hint": "Výška v_a patrí k strane a. Ktorá strana a ktorá výška teda vstúpia do vzorca?"
      },
      {
        "id": "n-s3",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "tri výšky",
        "title": "Výška na inú stranu",
        "prompt": "Trojuholník má stranu a = 12 cm s výškou v_a = 5 cm. Strana b má 10 cm. Aká dlhá je výška v_b v cm?",
        "validate": "exact",
        "answer": 6,
        "success": "S = 12 · 5 / 2 = 30 cm². Potom 30 = 10 · v_b / 2, v_b = 6 cm.",
        "hint": "Najprv vypočítaj obsah zo strany a a jej výšky; potom ho použi so stranou b.",
        "reveal": "Správne je 6: S = 30 cm², v_b = 2 · 30 : 10 = 6."
      },
      {
        "id": "right",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Pravouhlý trojuholník",
        "html": "<p>V pravouhlom trojuholníku sú odvesny na seba kolmé, takže <span class=\"hl\">jedna odvesna je výškou na druhú</span>. Vzorec sa zjednoduší:</p>\n<div class=\"formula\"><span class=\"mini-label\">PRAVOUHLÝ TROJUHOLNÍK</span>S = <span class=\"frac\"><span class=\"frac-num\">a · b</span><span class=\"frac-den\">2</span></span>, o = a + b + c</div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1</span><p>Odvesny 5 cm a 12 cm. Prepona z Pytagorovej vety: c² = 25 + 144 = 169, c = 13 cm.</p><p>o = 5 + 12 + 13 = <strong>30 cm</strong>, S = 5 · 12 / 2 = <strong>30 cm²</strong></p></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2 · výška na preponu</span><p>Odvesny 6 cm a 8 cm, prepona 10 cm. Obsah S = 6 · 8 / 2 = 24 cm². Obsah vieme vyjadriť aj s preponou ako stranou:</p><p>24 = 10 · v<sub>c</sub> / 2 ⇒ v<sub>c</sub> = 48 / 10 = <strong>4,8 cm</strong></p></div>\n<div class=\"warning\"><strong>Pozor:</strong> Do vzorca S = a·b/2 patria obe <em>odvesny</em>, nie prepona. Preponu potrebuješ len do obvodu (a pri výške na preponu).</div>",
        "remember": "Pri pravouhlom trojuholníku stačia odvesny: S = ab/2. Preponu dopočítaš Pytagorovou vetou."
      },
      {
        "id": "n-r2",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "pravouhlý trojuholník",
        "title": "Obsah pravouhlého",
        "prompt": "Pravouhlý trojuholník má preponu 26 cm a jednu odvesnu 10 cm. Aký je jeho obsah v cm²?",
        "validate": "exact",
        "answer": 120,
        "success": "Druhá odvesna: b² = 26² − 10² = 676 − 100 = 576, b = 24 cm. S = 10 · 24 / 2 = 120 cm².",
        "hint": "Najprv dopočítaj druhú odvesnu Pytagorovou vetou, potom S = ab/2.",
        "reveal": "Správne je 120: b = 24 cm, S = 10 · 24 : 2 = 120."
      },
      {
        "id": "n-r3",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "výška na preponu",
        "title": "Výška na preponu",
        "prompt": "Pravouhlý trojuholník má odvesny 6 cm a 8 cm a preponu 10 cm. Aká dlhá je výška na preponu v cm? (Desatinné číslo zapíš s čiarkou.)",
        "validate": "exact",
        "answer": 4.8,
        "success": "S = 6 · 8 / 2 = 24 cm². 24 = 10 · v / 2 ⇒ v = 4,8 cm.",
        "hint": "Obsah vypočítaj z odvesien a potom ho vyjadri aj pomocou prepony a jej výšky.",
        "reveal": "Správne je 4,8: 2 · 24 : 10 = 4,8."
      },
      {
        "id": "iso",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Rovnoramenný a rovnostranný trojuholník",
        "html": "<p><strong>Rovnoramenný:</strong> výška na základňu ju rozpolí a vznikne pravouhlý trojuholník, z ktorého výšku vypočítame Pytagorovou vetou.</p>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD · rovnoramenný</span><p>Základňa 16 cm, ramená 10 cm. Polovica základne je 8 cm.</p><p>v² = 10² − 8² = 36, v = 6 cm</p><p>S = 16 · 6 / 2 = <strong>48 cm²</strong>, o = 16 + 10 + 10 = <strong>36 cm</strong></p></div>\n<p><strong>Rovnostranný:</strong> základňa aj ramená majú dĺžku a, polovica základne je a/2. Z Pytagorovej vety:</p>\n<p>v² = a² − (a/2)² = a² − a²/4 = 3a²/4, teda <span class=\"hl\">v = a√3 / 2</span>. Dosadením do S = a · v / 2 dostaneme:</p>\n<div class=\"formula\"><span class=\"mini-label\">ROVNOSTRANNÝ TROJUHOLNÍK</span>v = <span class=\"frac\"><span class=\"frac-num\">a√3</span><span class=\"frac-den\">2</span></span>, S = <span class=\"frac\"><span class=\"frac-num\">a²√3</span><span class=\"frac-den\">4</span></span>, o = 3a</div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD · rovnostranný</span><p>a = 4 cm: v = 4√3/2 = 2√3 cm, S = 16√3/4 = <strong>4√3 cm²</strong> (približne 6,93 cm²), o = <strong>12 cm</strong>.</p></div>\n<div class=\"warning\"><strong>Pozor:</strong> Výška rovnostranného trojuholníka nie je polovica strany ani strana samotná; je to a√3/2 ≈ 0,87a.</div>",
        "remember": "Rovnostranný: S = a²√3/4. Rovnoramenný: najprv výška Pytagorovou vetou, potom S = z·v/2."
      },
      {
        "id": "c-eq",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "rovnostranný",
        "question": "Rovnostranný trojuholník má stranu 6 cm. Aký je jeho obsah?",
        "options": [
          "36√3 cm²",
          "9√3 cm²",
          "18√3 cm²",
          "9 cm²"
        ],
        "answer": 1,
        "correct": "Správne: S = a²√3 / 4 = 36√3 / 4 = 9√3 cm² (približne 15,6 cm²). Bez delenia štyrmi by vyšlo 36√3; 9 cm² vznikne omylom v = a/2.",
        "hint": "Dosaď do S = a²√3 / 4. Čo je 6² : 4?"
      },
      {
        "id": "n-iso",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "rovnoramenný",
        "title": "Obsah rovnoramenného",
        "prompt": "Rovnoramenný trojuholník má základňu 16 cm a ramená 10 cm. Aký je jeho obsah v cm²?",
        "validate": "exact",
        "answer": 48,
        "success": "v = √(100 − 64) = 6 cm, S = 16 · 6 / 2 = 48 cm².",
        "hint": "Výška rozpolí základňu na dve časti po 8 cm. Z Pytagorovej vety nájdi výšku.",
        "reveal": "Správne je 48: v = 6 cm, S = 16 · 6 : 2 = 48."
      },
      {
        "id": "hunt3",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak vypočítal obsah trojuholníka s a = 8 cm a v_a = 5 cm a napísal: „S = 8 · 5 / 2 = 20 cm.“ Čo je na zápise zlé?",
        "options": [
          "Chýba delenie dvoma.",
          "Mal vynásobiť 8 · 5 = 40.",
          "Číselný výsledok aj jednotka sú správne.",
          "Obsah sa udáva v cm², nie v cm."
        ],
        "answer": 3,
        "correct": "Správne: 20 je správne číslo, ale obsah je plocha, takže jednotka musí byť cm². Cm by bola dĺžka (napríklad obvod).",
        "hint": "Číslo žiak vypočítal správne. Pozri sa, čo meria obsah a akú jednotku má plocha."
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha na papier",
        "html": "<p>Odlož zariadenie. Rovnoramenný trojuholník ABC má základňu AB = 18 cm a ramená AC = BC = 15 cm.</p><ol><li>Načrtni ho, zakresli výšku na základňu a vypočítaj jej dĺžku (Pytagorova veta).</li><li>Vypočítaj jeho obvod a obsah.</li><li>Vypočítaj výšku na rameno AC (použi obsah).</li></ol>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: obvod a obsah trojuholníka",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Rieš na papier, vždy si rob náčrt a pri výsledku uvádzaj jednotku. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Trojuholník má strany 6 cm, 8 cm a 11 cm. Vypočítaj obvod.",
            "answer": "o = 6 + 8 + 11 = <strong>25 cm</strong>."
          },
          {
            "level": "zaklad",
            "text": "Strana trojuholníka je 15 cm a výška na ňu 8 cm. Vypočítaj obsah.",
            "answer": "S = 15 · 8 / 2 = <strong>60 cm²</strong>."
          },
          {
            "level": "zaklad",
            "text": "Pravouhlý trojuholník má odvesny 7 cm a 24 cm. Vypočítaj preponu, obvod a obsah.",
            "answer": "c² = 49 + 576 = 625, c = <strong>25 cm</strong>. o = 7 + 24 + 25 = <strong>56 cm</strong>. S = 7 · 24 / 2 = <strong>84 cm²</strong>."
          },
          {
            "level": "zaklad",
            "text": "Obsah trojuholníka je 48 cm² a strana a = 16 cm. Aká je výška v_a?",
            "answer": "48 = 16 · v_a / 2 ⇒ v_a = 96 / 16 = <strong>6 cm</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Rovnoramenný trojuholník má ramená 17 cm a základňu 16 cm. Vypočítaj výšku na základňu, obsah a obvod.",
            "answer": "Polovica základne je 8 cm, v² = 289 − 64 = 225, v = <strong>15 cm</strong>. S = 16 · 15 / 2 = <strong>120 cm²</strong>. o = 16 + 17 + 17 = <strong>50 cm</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Rovnostranný trojuholník má stranu 10 cm. Vypočítaj obvod a obsah (presne aj približne na 0,1 cm²).",
            "answer": "o = <strong>30 cm</strong>. S = 100√3 / 4 = <strong>25√3 cm²</strong> ≈ <strong>43,3 cm²</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Pozemok má tvar trojuholníka so stranami 24 m, 18 m a 30 m. Ukáž, že je pravouhlý, vypočítaj jeho rozlohu a cenu oplotenia, ak 1 m plotu stojí 12 €.",
            "answer": "24² + 18² = 576 + 324 = 900 = 30², pravouhlý. S = 24 · 18 / 2 = <strong>216 m²</strong>. Obvod 72 m, cena 72 · 12 = <strong>864 €</strong>."
          },
          {
            "level": "bonus",
            "text": "Obsah rovnostranného trojuholníka je 36√3 cm². Aký je jeho obvod?",
            "answer": "a²√3 / 4 = 36√3 ⇒ a² = 144 ⇒ a = 12 cm. o = 3 · 12 = <strong>36 cm</strong>."
          }
        ]
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; pri 🔴 alebo 🟡 sa vráť k príslušnému vysvetleniu.",
        "skills": [
          "obvod a obsah — rozdiel a jednotky",
          "S = a · v / 2 a výška z obsahu",
          "pravouhlý trojuholník",
          "rovnoramenný a rovnostranný trojuholník"
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
        "text": "Trojuholník má strany 9 cm, 12 cm a 14 cm. Vypočítaj obvod.",
        "answer": "o = 9 + 12 + 14 = 35 cm."
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 3,
        "text": "Strana trojuholníka má 18 cm, výška na ňu 7 cm. Vypočítaj obsah.",
        "answer": "S = 18 · 7 / 2 = 63 cm²."
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 4,
        "text": "Pravouhlý trojuholník má odvesny 8 cm a 15 cm. Vypočítaj preponu, obvod a obsah.",
        "answer": "c = 17 cm, o = 40 cm, S = 60 cm²."
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 5,
        "text": "Rovnoramenný trojuholník má základňu 12 cm a ramená 10 cm. Vypočítaj výšku na základňu, obsah a obvod.",
        "answer": "v² = 100 − 36 = 64, v = 8 cm; S = 12 · 8 / 2 = 48 cm²; o = 32 cm."
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 5,
        "text": "Vypočítaj obsah trojuholníka so stranami 13 cm, 14 cm, 15 cm a polomer jeho vpísanej kružnice.",
        "answer": "s = 21, S = √(21 · 8 · 7 · 6) = 84 cm²; r = 84 / 21 = 4 cm."
      },
      {
        "id": "w6",
        "level": "rozsirenie",
        "space": 4,
        "text": "Dve strany trojuholníka majú 12 cm a 7 cm, uhol medzi nimi je 30°. Vypočítaj obsah.",
        "answer": "S = ½ · 12 · 7 · ½ = 21 cm²."
      },
      {
        "id": "w7",
        "level": "bonus",
        "space": 5,
        "text": "Rovnostranný trojuholník má obsah 16√3 cm². Vypočítaj jeho stranu, výšku (presne) a obvod.",
        "answer": "a² = 64, a = 8 cm; v = a√3 / 2 = 4√3 cm; o = 24 cm."
      }
    ]
  }
});
