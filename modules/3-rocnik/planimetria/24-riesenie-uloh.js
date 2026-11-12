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
      "z údajov v zadaní vybrať vhodný postup (Pytagorova veta, S = a·v/2, Herónov vzorec, sínus)",
      "riešiť viackrokové a slovné úlohy s trojuholníkom a zapísať ich s jednotkami",
      "využiť obsahové vzťahy: ťažnica S/2, ťažisko S/3, stredná priečka S/4",
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
      "0–5 min: nástrojový kufrík — tabuľka „Dané → postup“",
      "5–15 min: vzorové úlohy A (viackroková), B (slovná) a obsahové triky",
      "15–30 min: platforma: výber postupu, slovné úlohy, hľadanie chýb",
      "30–40 min: úloha BEZ MOBILU a zbierka podľa úrovne",
      "40–45 min: rozbor chýb podľa živých výsledkov, príprava na štvoruholníky"
    ],
    "diagnostics": [
      "v Pytagorovej vete pre rovnoramenný trojuholník nepoužije polovicu základne",
      "zamieňa uhol v sínusovom vzorci (nie je medzi danými stranami)",
      "píše cm namiesto cm² a naopak",
      "nevie rozhodnúť, ktorý vzorec použiť pri danom zadaní",
      "zamieňa pomer 2 : 1 pri ťažisku s 3 : 1"
    ],
    "partialUse": [
      "pri nedostatku času vynechať bonusové položky a obsahové triky",
      "mobil nenahrádza ručné počítanie; postupy sa píšu do zošita",
      "pri ŠVVP povoliť oporu: tabuľka „Dané → postup“"
    ]
  },
  "student": {
    "title": "Riešenie úloh",
    "subtitle": "Téma 24 · Planimetria · trojuholník",
    "intro": "Zmiešané a slovné úlohy o trojuholníku: vyberieš postup podľa zadaných údajov, vyriešiš úlohu a overíš ju. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "25–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Náš nástrojový kufrík",
        "html": "<p>V tomto celku máme o trojuholníku pripravené tieto nástroje. Dnes si budeš musieť sám vybrať ten správny:</p>\n<div class=\"term-list\">\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Uhly a existencia</div><p class=\"term-rule\">α + β + γ = 180°, vonkajší uhol = súčet dvoch vnútorných; trojuholníková nerovnosť.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Pytagorova veta</div><p class=\"term-rule\">a² + b² = c² — v pravouhlom trojuholníku, a v rovnoramennom pre výšku (polovica základne!).</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Obvod a obsah</div><p class=\"term-rule\">o = a + b + c; S = a·v/2; pravouhlý S = ab/2; rovnostranný S = a²√3/4.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Herónov vzorec, sínus a vpísaná kružnica</div><p class=\"term-rule\">S = √(s(s−a)(s−b)(s−c)); S = ½ab·sin γ; r = S/s.</p></div>\n</div>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "z údajov v zadaní vybrať vhodný postup (Pytagorova veta, S = a·v/2, Herónov vzorec, sínus)",
          "riešiť viackrokové a slovné úlohy s trojuholníkom a zapísať ich s jednotkami",
          "využiť obsahové vzťahy (ťažnica, ťažisko, stredná priečka)",
          "nájsť a opraviť typické chyby v cudzom riešení"
        ]
      },
      {
        "id": "plan",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Rozhodovací postup a vzorové úlohy",
        "html": "<ol class=\"steps\">\n<li><strong>Náčrt:</strong> nakresli trojuholník, označ dané a hľadané veličiny aj s jednotkami.</li>\n<li><strong>Pravouhlé trojuholníky:</strong> nájdi v obrázku pravý uhol (výška, polovica základne) — a použi Pytagorovu vetu alebo sin, cos.</li>\n<li><strong>Vzorec:</strong> vyber ho podľa toho, čo máš dané (tabuľka nižšie).</li>\n<li><strong>Výpočet</strong> s jednotkami: cm pri dĺžke a obvode, cm² pri obsahu.</li>\n<li><strong>Skúška:</strong> trojuholníková nerovnosť, hrubý odhad, iný spôsob výpočtu (napr. Herón vs. S = a·v/2).</li>\n</ol>\n<div class=\"table-wrap\"><table class=\"truth\"><thead><tr><th>Dané</th><th>Postup</th></tr></thead><tbody>\n<tr><td>strana a výška na ňu</td><td>S = a · v / 2</td></tr>\n<tr><td>pravouhlý, obe odvesny</td><td>S = ab / 2, c z Pytagorovej vety</td></tr>\n<tr><td>rovnoramenný: základňa a ramená</td><td>výška z Pytagorovej vety (polovica základne!), potom S = z · v / 2</td></tr>\n<tr><td>všetky tri strany</td><td>Herónov vzorec</td></tr>\n<tr><td>dve strany a uhol medzi nimi</td><td>S = ½ · a · b · sin γ</td></tr>\n<tr><td>obsah a polovica obvodu</td><td>r = S / s</td></tr>\n</tbody></table></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD A · viackroková</span><p>Rovnoramenný trojuholník má obvod 50 cm a ramená 17 cm. Vypočítaj základňu, výšku, obsah a polomer vpísanej kružnice.</p><p>Základňa: 50 − 2 · 17 = <strong>16 cm</strong> (existuje: 17 + 17 &gt; 16).</p><p>Výška: v² = 17² − 8² = 289 − 64 = 225, v = <strong>15 cm</strong>.</p><p>Obsah: S = 16 · 15 / 2 = <strong>120 cm²</strong>.</p><p>s = 50 / 2 = 25 cm, r = 120 / 25 = <strong>4,8 cm</strong>.</p></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD B · slovná úloha</span><p>Rebrík dĺžky 6 m je oprený o stenu tak, že so zemou zviera uhol 30°. Do akej výšky dosahuje?</p><p>Náčrt: pravouhlý trojuholník, prepona 6 m (rebrík), hľadáme odvesnu oproti uhlu 30°.</p><p>sin 30° = v / 6 ⇒ v = 6 · ½ = <strong>3 m</strong>.</p><p>Odpoveď: rebrík dosahuje do výšky 3 m.</p></div>\n<div class=\"warning\"><strong>Pozor:</strong> V rovnoramennom trojuholníku patrí do Pytagorovej vety <em>polovica</em> základne, nie celá základňa. A skôr než začneš počítať, uisti sa, že vieš, ktorá strana je prepona.</div>",
        "remember": "Najprv náčrt a pravouhlé trojuholníky v ňom, potom vzorec podľa dát, na konci jednotky a skúška."
      },
      {
        "id": "tricks",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Obsahové triky: ťažnica, ťažisko, stredná priečka",
        "html": "<p>Niektoré úlohy sa dajú vyriešiť bez výpočtu, keď si všimneš, ako sa obsah delí.</p>\n<p><strong>1. Ťažnica rozdelí trojuholník na dva trojuholníky s rovnakým obsahom.</strong> Oba majú rovnakú výšku (z vrcholu C) a rovnaké základne (polovice strany AB):</p>\n<div class=\"logic-visual\"><svg viewBox=\"0 0 520 300\" role=\"img\" aria-label=\"Ťažnica CS rozdelí trojuholník na dva trojuholníky s rovnakým obsahom S/2\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"></g><polygon points=\"60.0,240.0 250.0,240.0 250.0,50.0\" fill=\"#1f6f5c\" fill-opacity=\"0.18\" stroke=\"none\"/><polygon points=\"250.0,240.0 440.0,240.0 250.0,50.0\" fill=\"#b4532a\" fill-opacity=\"0.18\" stroke=\"none\"/><polygon points=\"60,240 440,240 250,50\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><line x1=\"250\" y1=\"50\" x2=\"250\" y2=\"240\" stroke=\"#b4532a\" stroke-width=\"2.5\"/><circle cx=\"250\" cy=\"240\" r=\"5\" fill=\"#b4532a\"/><text x=\"46\" y=\"268\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">A</text><text x=\"454\" y=\"268\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">B</text><text x=\"250\" y=\"36\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">C</text><text x=\"254\" y=\"268\" font-size=\"20\" fill=\"#b4532a\" text-anchor=\"middle\" font-family=\"system-ui\">S</text><text x=\"185\" y=\"190\" font-size=\"22\" fill=\"#1f6f5c\" text-anchor=\"middle\" font-family=\"system-ui\">S/2</text><text x=\"318\" y=\"190\" font-size=\"22\" fill=\"#b4532a\" text-anchor=\"middle\" font-family=\"system-ui\">S/2</text></svg></div>\n<p><strong>2. Stredné priečky rozdelia trojuholník na 4 zhodné trojuholníky.</strong> Každý má obsah S/4 (preto má trojuholník odrezaný jednou strednou priečkou obsah ¼ pôvodného):</p>\n<div class=\"logic-visual\"><svg viewBox=\"0 0 520 300\" role=\"img\" aria-label=\"Stredné priečky rozdelia trojuholník na štyri zhodné trojuholníky, každý s obsahom S/4\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"></g><polygon points=\"345.0,145.0 155.0,145.0 250.0,240.0\" fill=\"#1f6f5c\" fill-opacity=\"0.2\" stroke=\"none\"/><polygon points=\"60,240 440,240 250,50\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><polygon points=\"345,145 155,145 250,240\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><circle cx=\"345\" cy=\"145\" r=\"4\" fill=\"currentColor\"/><circle cx=\"155\" cy=\"145\" r=\"4\" fill=\"currentColor\"/><circle cx=\"250\" cy=\"240\" r=\"4\" fill=\"currentColor\"/><text x=\"46\" y=\"268\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">A</text><text x=\"454\" y=\"268\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">B</text><text x=\"250\" y=\"36\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">C</text><text x=\"250\" y=\"190\" font-size=\"19\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">S/4</text><text x=\"148\" y=\"228\" font-size=\"19\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">S/4</text><text x=\"352\" y=\"228\" font-size=\"19\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">S/4</text><text x=\"250\" y=\"118\" font-size=\"19\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">S/4</text></svg></div>\n<p><strong>3. Ťažisko T:</strong> trojuholník ABT (spojnice T s dvoma vrcholmi) má obsah S/3 — tri takéto trojuholníky vyplnia celý trojuholník ABC:</p>\n<div class=\"logic-visual\"><svg viewBox=\"0 0 520 300\" role=\"img\" aria-label=\"Ťažisko T: trojuholník ABT má tretinu obsahu trojuholníka ABC\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"></g><polygon points=\"60.0,240.0 440.0,240.0 250.0,176.7\" fill=\"#b4532a\" fill-opacity=\"0.18\" stroke=\"none\"/><polygon points=\"60,240 440,240 250,50\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><line x1=\"60\" y1=\"240\" x2=\"345\" y2=\"145\" stroke=\"#b4532a\" stroke-width=\"2.5\"/><line x1=\"440\" y1=\"240\" x2=\"155\" y2=\"145\" stroke=\"#b4532a\" stroke-width=\"2.5\"/><line x1=\"250\" y1=\"50\" x2=\"250\" y2=\"240\" stroke=\"#b4532a\" stroke-width=\"2.5\"/><circle cx=\"250\" cy=\"176.66666666666666\" r=\"6\" fill=\"#b4532a\"/><text x=\"46\" y=\"268\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">A</text><text x=\"454\" y=\"268\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">B</text><text x=\"250\" y=\"36\" font-size=\"20\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"system-ui\">C</text><text x=\"268\" y=\"168.66666666666666\" font-size=\"20\" fill=\"#b4532a\" text-anchor=\"middle\" font-family=\"system-ui\">T</text><text x=\"250\" y=\"212\" font-size=\"22\" fill=\"#b4532a\" text-anchor=\"middle\" font-family=\"system-ui\">S/3</text></svg></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Trojuholník má obsah 36 cm². Aký obsah má trojuholník ABT?</p><p>S/3 = 36 / 3 = <strong>12 cm²</strong>.</p></div>\n<div class=\"warning\"><strong>Pozor:</strong> Dĺžky sa pri strednej priečke zmenšia na polovicu, ale obsah až na <em>štvrtinu</em> (nie polovicu).</div>",
        "remember": "Ťažnica: S/2 + S/2. Stredná priečka odreže S/4. Spojnice ťažiska s vrcholmi dávajú tri trojuholníky po S/3."
      },
      {
        "id": "method-matrix",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "výber postupu",
        "title": "Čo použiješ?",
        "labels": [
          "S = a·v/2 (alebo S = ab/2)",
          "Herónov vzorec",
          "S = ½·a·b·sin γ",
          "najprv Pytagorova veta"
        ],
        "items": [
          {
            "text": "strana 12 cm a výška na ňu 7 cm",
            "answer": "S = a·v/2 (alebo S = ab/2)"
          },
          {
            "text": "všetky tri strany 13 cm, 14 cm, 15 cm",
            "answer": "Herónov vzorec"
          },
          {
            "text": "strany 8 cm a 5 cm a uhol medzi nimi 30°",
            "answer": "S = ½·a·b·sin γ"
          },
          {
            "text": "rovnoramenný: základňa 10 cm, ramená 13 cm (výška nie je daná)",
            "answer": "najprv Pytagorova veta"
          },
          {
            "text": "pravouhlý trojuholník s odvesnami 6 cm a 8 cm",
            "answer": "S = a·v/2 (alebo S = ab/2)"
          },
          {
            "text": "všetky tri strany 9 cm, 10 cm, 17 cm",
            "answer": "Herónov vzorec"
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
        "id": "n-lad2",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "slovná úloha: sínus",
        "title": "Rebrík pod uhlom",
        "prompt": "Rebrík dlhý 8 m je oprený o stenu a so zemou zviera uhol 30°. Do akej výšky v metroch dosiahne?",
        "validate": "exact",
        "answer": 4,
        "success": "sin 30° = v / 8 ⇒ v = 8 · ½ = 4 m.",
        "hint": "Rebrík je prepona. Výška je odvesna oproti uhlu 30°: použi sínus.",
        "reveal": "Správne je 4: v = 8 · sin 30° = 8 · ½."
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
        "id": "n-bed",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "obsah cez sínus",
        "title": "Záhon",
        "prompt": "Záhon má tvar trojuholníka. Dve jeho strany majú 16 m a 5 m a zvierajú uhol 30°. Aký je obsah záhonu v m²?",
        "validate": "exact",
        "answer": 20,
        "success": "S = ½ · 16 · 5 · sin 30° = ½ · 80 · ½ = 20 m².",
        "hint": "Použi S = ½ · a · b · sin γ; sin 30° = ½.",
        "reveal": "Správne je 20: ½ · 80 = 40, 40 · ½ = 20."
      },
      {
        "id": "n-heron",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "Herónov vzorec",
        "title": "Herónov vzorec",
        "prompt": "Trojuholník má strany 6 cm, 25 cm a 29 cm. Aký je jeho obsah v cm²?",
        "validate": "exact",
        "answer": 60,
        "success": "s = 30, S = √(30 · 24 · 5 · 1) = √3600 = 60 cm².",
        "hint": "Spočítaj s = 30 a odčítaj od neho každú stranu.",
        "reveal": "Správne je 60: 30 · 24 · 5 · 1 = 3600 = 60²."
      },
      {
        "id": "n-cog",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "ťažisko",
        "title": "Ťažisko a základňa",
        "prompt": "Rovnoramenný trojuholník má výšku na základňu 15 cm. Ťažisko leží na tejto výške (výška je zároveň ťažnica) a delí ju v pomere 2 : 1 počítané od vrcholu. Ako ďaleko v cm je ťažisko od základne?",
        "validate": "exact",
        "answer": 5,
        "success": "Ťažisko je od základne vzdialené ⅓ ťažnice: 15 : 3 = 5 cm.",
        "hint": "Dlhšia časť (⅔) je pri vrchole, kratšia (⅓) pri základni.",
        "reveal": "Správne je 5: 15 : 3 = 5 (a od vrcholu 10 cm)."
      },
      {
        "id": "n-mid",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "stredná priečka",
        "title": "Stredná priečka a obsah",
        "prompt": "Trojuholník má obsah 48 cm². Stredná priečka od neho odreže menší trojuholník pri vrchole. Aký obsah v cm² má tento odrezaný trojuholník?",
        "validate": "exact",
        "answer": 12,
        "success": "Stredné priečky delia trojuholník na 4 zhodné trojuholníky, každý má 48 : 4 = 12 cm².",
        "hint": "Odrezaný trojuholník je jeden zo štyroch zhodných trojuholníkov.",
        "reveal": "Správne je 12: 48 : 4 = 12."
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
        "id": "c-same",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "obsah z výšky",
        "question": "Trojuholníky ABC a ABD majú spoločnú stranu AB = 10 cm. Vrcholy C a D ležia na priamke rovnobežnej s AB a od AB sú vzdialené 6 cm. Čo platí o ich obsahoch?",
        "options": [
          "Oba majú obsah 30 cm².",
          "Trojuholník ABC má väčší obsah, lebo je ostrouhlý.",
          "Trojuholník ABD má väčší obsah, lebo má dlhšiu stranu.",
          "Obsahy sa bez dĺžok strán AC, BC, AD, BD nedajú určiť."
        ],
        "answer": 0,
        "correct": "Správne: obsah závisí len od základne AB a výšky na ňu: S = 10 · 6 / 2 = 30 cm². Posun vrcholu po rovnobežke obsah nemení.",
        "hint": "Do vzorca S = a · v / 2 vstupuje len strana a jej výška. Čo sa pri posune vrcholu po rovnobežke mení?"
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
        "id": "c-sin",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "obsah cez sínus",
        "question": "Trojuholník má dve strany 6 cm a 8 cm. Pri ktorom uhle medzi nimi má najväčší obsah?",
        "options": [
          "30°",
          "90°",
          "150°",
          "120°"
        ],
        "answer": 1,
        "correct": "Správne: S = ½ · 6 · 8 · sin γ = 24 · sin γ a sínus je najväčší (1) pre γ = 90°. Vtedy S = 24 cm².",
        "hint": "Strany sú dané, mení sa len sin γ. Pri akom uhle je sínus najväčší?"
      },
      {
        "id": "c-med",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "ťažnica a obsah",
        "question": "Ťažnica t_a rozdelí trojuholník s obsahom 50 cm² na dva menšie trojuholníky. Aké sú ich obsahy?",
        "options": [
          "obsahy v pomere 2 : 1",
          "obsahy závisia od tvaru a nedajú sa určiť",
          "25 cm² a 25 cm²",
          "50 cm² a 50 cm²"
        ],
        "answer": 2,
        "correct": "Správne: oba trojuholníky majú rovnakú výšku z vrcholu A a rovnaké základne (polovice strany BC), takže po 25 cm².",
        "hint": "Pozri sa na výšku z vrcholu A a na základne oboch častí. Čo majú spoločné?"
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
            "text": "polomer vpísanej kružnice r = 4 cm²",
            "answer": false,
            "why": "Polomer je dĺžka, má byť cm."
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
        "id": "hunt2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak: „Ťažisko delí ťažnicu 3 : 1, takže pri ťažnici 12 cm je ťažisko od vrcholu 9 cm.“ Ako ďaleko od vrcholu je ťažisko naozaj?",
        "options": [
          "8 cm",
          "9 cm",
          "6 cm",
          "4 cm"
        ],
        "answer": 0,
        "correct": "Správne: ťažisko delí ťažnicu v pomere 2 : 1, preto je od vrcholu ⅔ · 12 = 8 cm (a od stredu strany 4 cm).",
        "hint": "Pomer je 2 : 1. Na koľko rovnakých dielov rozdelíš ťažnicu a koľko z nich patrí vrcholu?"
      },
      {
        "id": "hunt3",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Trojuholník ABC má a = 7 cm, b = 10 cm a pri vrchole A uhol α = 30°. Žiak počíta: „S = ½ · 7 · 10 · sin 30° = 17,5 cm².“ Čo je zle?",
        "options": [
          "Hodnota sin 30° nie je ½.",
          "Uhol α leží medzi stranami b a c, nie medzi a a b — do vzorca patria strany, ktoré uhol zvierajú.",
          "Vzorec obsahu má obsahovať všetky tri strany.",
          "Nič, výpočet je správny."
        ],
        "answer": 1,
        "correct": "Správne: uhol α zvierajú strany b a c. Strana a leží proti nemu. Vzorec ½ · a · b · sin γ potrebuje uhol γ <em>medzi</em> stranami a, b.",
        "hint": "Ktorými dvoma stranami je ohraničený uhol pri vrchole A? Strana a je oproti A."
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha na papier",
        "html": "<p>Odlož zariadenie. Trojuholník ABC má strany 13 cm, 14 cm a 15 cm.</p><ol><li>Vypočítaj jeho obsah Herónovým vzorcom.</li><li>Vypočítaj výšku na stranu 14 cm.</li><li>Vypočítaj polomer vpísanej kružnice.</li><li>Trojuholník je pôdorys pozemku so stranami 13 m, 14 m a 15 m. Koľko m² trávnika treba a aká je cena oplotenia, ak 1 m plota stojí 15 €?</li></ol>"
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
            "text": "Vypočítaj obsah trojuholníka so stranami 5 cm, 5 cm a 6 cm Herónovým vzorcom.",
            "answer": "s = 8, S = √(8 · 3 · 3 · 2) = √144 = <strong>12 cm²</strong>."
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
            "text": "Dve strany trojuholníkového záhona majú 16 m a 5 m a zvierajú uhol 30°. Vypočítaj obsah.",
            "answer": "S = ½ · 16 · 5 · ½ = <strong>20 m²</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Trojuholník má obsah 84 cm². Aký obsah má každá časť, na ktorú ho rozdelí ťažnica? A aký obsah má trojuholník ABT (T je ťažisko)?",
            "answer": "Ťažnica: <strong>42 cm² a 42 cm²</strong>. ABT: 84 / 3 = <strong>28 cm²</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Trojuholník má obsah 72 cm². Stredná priečka od neho odreže menší trojuholník. Aký má obsah odrezaný trojuholník a aký zvyšný štvoruholník?",
            "answer": "Odrezaný: 72 / 4 = <strong>18 cm²</strong>. Zvyšok: 72 − 18 = <strong>54 cm²</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Štít domu má tvar rovnoramenného trojuholníka so základňou 10 m a výškou 12 m. Aká dlhá je jedna šikmá hrana štítu a koľko m² má štít?",
            "answer": "Rameno: √(5² + 12²) = <strong>13 m</strong>. S = 10 · 12 / 2 = <strong>60 m²</strong> (obe šikmé hrany spolu 26 m)."
          },
          {
            "level": "rozsirenie",
            "text": "Pravouhlý trojuholník má odvesny 5 cm a 12 cm. Vypočítaj polomer vpísanej a opísanej kružnice.",
            "answer": "c = 13 cm. S = 30 cm², s = 15 cm, r = 30 / 15 = <strong>2 cm</strong>. R = c / 2 = <strong>6,5 cm</strong>."
          },
          {
            "level": "bonus",
            "text": "Trojuholník má strany 17 cm, 25 cm a 26 cm. Vypočítaj obsah a polomer vpísanej kružnice.",
            "answer": "s = 34, S = √(34 · 17 · 9 · 8) = √41616 = <strong>204 cm²</strong>. r = 204 / 34 = <strong>6 cm</strong>."
          },
          {
            "level": "bonus",
            "text": "Rovnostranný trojuholník má stranu 12 cm. Vypočítaj výšku a (využitím ťažiska) polomer vpísanej aj opísanej kružnice. Stred oboch kružníc je ťažisko.",
            "answer": "v² = 144 − 36 = 108, v = 6√3 cm. Ťažisko je ⅓ výšky od strany a ⅔ od vrcholu: r = v/3 = <strong>2√3 cm</strong> ≈ 3,5 cm, R = 2v/3 = <strong>4√3 cm</strong> ≈ 6,9 cm."
          },
          {
            "level": "bonus",
            "text": "Trojuholník má strany a = 6 cm, b = 8 cm a obsah 24 cm². Aký veľký je ostrý uhol γ medzi týmito stranami a aký je to trojuholník?",
            "answer": "24 = ½ · 6 · 8 · sin γ = 24 sin γ ⇒ sin γ = 1 ⇒ γ = <strong>90°</strong>. Trojuholník je <strong>pravouhlý</strong>."
          }
        ]
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Ako zvolím vzorec",
        "prompt": "Vlastnými slovami opíš, podľa čoho si pri úlohe o trojuholníku vyberieš, či použiješ S = a·v/2, Herónov vzorec alebo vzorec so sínusom. Uveď aj jednu chybu, ktorú si budeš strážiť.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Pozriem sa, aké údaje mám. Ak poznám stranu a výšku na ňu, použijem S = a·v/2. Ak poznám všetky tri strany a nič iné, použijem Herónov vzorec. Ak mám dve strany a uhol medzi nimi, použijem ½ab·sin γ. Ak je trojuholník rovnoramenný a chýba výška, najprv ju vypočítam Pytagorovou vetou. Strážim si polovicu základne pri Pytagorovej vete a jednotky (cm pri dĺžke, cm² pri obsahu).",
        "placeholder": "Najprv sa pozriem, aké údaje mám…"
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; pri 🔴 alebo 🟡 sa vráť k vzorovým úlohám A a B na začiatku.",
        "skills": [
          "výber postupu podľa údajov",
          "Pytagorova veta v úlohách",
          "obsah: S = a·v/2, Herónov vzorec, sínus",
          "obsahové triky (ťažnica, ťažisko, priečka)",
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
