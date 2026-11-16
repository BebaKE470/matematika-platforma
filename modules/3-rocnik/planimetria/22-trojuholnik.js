MathPlatform.registerModule({
  "id": "3-u02-h022",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 22 · Trojuholník",
    "prerequisites": [
      "ZŠ: súčet uhlov v trojuholníku, základné pojmy o trojuholníku a kružnici",
      "2. ročník: Pytagorova veta a jej obrátená veta, sínusová a kosínusová veta",
      "3. ročník: goniometrické funkcie z predchádzajúceho tematického celku"
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
      "rozlíšiť druhy trojuholníkov a vypočítať chýbajúci uhol",
      "použiť Pytagorovu vetu na výpočet strán a výšky a určiť druh trojuholníka zo strán"
    ],
    "competencies": [
      "prepájať obrázok, označenie a symbolický zápis",
      "používať presný matematický jazyk (protiľahlá strana, prepona, odvesna, päta výšky)",
      "overovať existenciu útvaru podmienkou a argumentovať",
      "pracovať ručne v zošite s náčrtom a jednotkami"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie: reprezentácie, modelovanie, presný matematický jazyk a argumentácia.",
      "Tálesova veta: stred opísanej kružnice pravouhlého trojuholníka leží v strede prepony.",
      "Bonusové úlohy: pomer uhlov 2 : 3 : 4, rebrík opretý o stenu, ťažnica na preponu."
    ],
    "flow": [
      "0–5 min: opakovanie (súčet uhlov, Pytagorova veta)",
      "5–10 min: spoločne označenie, druhy, výška rovnoramenného (náčrty na tabuli)",
      "10–25 min: platforma: druhy, Pytagorova veta, výška, hľadanie chyby",
      "25–35 min: úloha BEZ MOBILU a zbierka podľa úrovne",
      "35–45 min: rozbor chýb podľa živých výsledkov, prepojenie na obvod a obsah (ďalšia hodina)"
    ],
    "diagnostics": [
      "pri hľadaní odvesny sčíta namiesto odčítania štvorcov (b² = c² − a²)",
      "vonkajší uhol zamieňa s vnútorným a nesprávne počíta súčet 180°"
    ],
    "partialUse": [
      "pri nedostatku času vynechať bonusové úlohy zbierky",
      "trojuholníková nerovnosť, ťažnice, ťažisko a kružnice sú z digitálnej časti vynechané — v písomke sa nevyskytujú; prípadne ich prebrať na tabuli",
      "mobil nenahrádza ručné počítanie; náčrty a postupy sa píšu do zošita",
      "pri ŠVVP povoliť oporu: tabuľka pojmov (výška, ťažnica, os) s obrázkom"
    ]
  },
  "student": {
    "title": "Trojuholník",
    "subtitle": "Prvky a druhy trojuholníka · uhly · nerovnosť · výška, ťažnica · Pytagorova veta",
    "intro": "Prejdeš si len to podstatné o trojuholníku, čo budeš potrebovať v písomke: druhy, uhly a Pytagorovu vetu.",
    "estimatedTime": "20–25 min",
    "activities": [
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "poznať druhy trojuholníkov a vedieť dopočítať chýbajúci uhol",
          "použiť Pytagorovu vetu na preponu, odvesnu a výšku rovnoramenného trojuholníka",
          "určiť druh trojuholníka podľa strán (c² a a² + b²)",
          "modul je zameraný na obsah písomky: ide len o to podstatné"
        ]
      },
      {
        "id": "basics",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Trojuholník: označenie, druhy, uhly",
        "html": "<div class=\"term-list\">\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Označenie</div><p class=\"term-rule\">Vrcholy A, B, C; strana <span class=\"hl\">a</span> leží oproti vrcholu A (a = BC), uhol α je pri vrchole A. Výška v<sub>a</sub> je kolmica z A na stranu a.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Súčet uhlov</div><p class=\"term-rule\">V každom trojuholníku je <span class=\"hl\">α + β + γ = 180°</span>.</p></div>\n</div>\n<div class=\"compare\">\n<div><span class=\"mini-label\">PODĽA STRÁN</span><p><strong>rovnoramenný</strong> – dve ramená rovnaké, uhly pri základni rovnaké<br><strong>rovnostranný</strong> – všetky strany rovnaké, každý uhol 60°</p></div>\n<div><span class=\"mini-label\">PODĽA UHLOV</span><p><strong>ostrouhlý</strong> – všetky uhly menej ako 90°<br><strong>pravouhlý</strong> – jeden uhol 90°<br><strong>tupouhlý</strong> – jeden uhol väčší ako 90°</p></div>\n</div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD · rovnoramenný</span><p>Uhol pri vrchole je 36°. Uhly pri základni sú rovnaké: 2x + 36° = 180°, x = <strong>72°</strong>.</p></div>",
        "remember": "α + β + γ = 180°; v rovnoramennom trojuholníku sú uhly pri základni rovnaké."
      },
      {
        "id": "kinds-matrix",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "druhy trojuholníkov",
        "title": "Druh podľa uhlov",
        "labels": [
          "ostrouhlý",
          "pravouhlý",
          "tupouhlý"
        ],
        "items": [
          {
            "text": "uhly 50°, 60°, 70°",
            "answer": "ostrouhlý"
          },
          {
            "text": "uhly 90°, 35°, 55°",
            "answer": "pravouhlý"
          },
          {
            "text": "uhly 120°, 30°, 30°",
            "answer": "tupouhlý"
          },
          {
            "text": "uhly 80°, 50°, 50°",
            "answer": "ostrouhlý"
          },
          {
            "text": "uhly 25°, 65°, 90°",
            "answer": "pravouhlý"
          },
          {
            "text": "uhly 100°, 40°, 40°",
            "answer": "tupouhlý"
          }
        ]
      },
      {
        "id": "n-iso",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "uhly v trojuholníku",
        "title": "Rovnoramenný trojuholník",
        "prompt": "Rovnoramenný trojuholník ABC so základňou AB má pri vrchole C uhol 44°. Koľko stupňov má uhol α pri základni?",
        "validate": "exact",
        "answer": 68,
        "success": "2α + 44° = 180°, 2α = 136°, α = 68°.",
        "hint": "Uhly pri základni sú rovnaké. Zapíš rovnicu 2α + 44° = 180°.",
        "reveal": "Správne je 68: (180 − 44) : 2 = 68."
      },
      {
        "id": "pyth",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Pytagorova veta a výška rovnoramenného trojuholníka",
        "html": "<p>V pravouhlom trojuholníku sa strana oproti pravému uhlu volá <strong>prepona</strong> (c, najdlhšia strana), ostatné sú <strong>odvesny</strong> (a, b).</p>\n<div class=\"formula\"><span class=\"mini-label\">PYTAGOROVA VETA</span>a² + b² = c²<span class=\"formula-note\">Platí aj obrátene: ak a² + b² = c², je trojuholník pravouhlý.</span></div>\n<div class=\"compare\">\n<div><span class=\"mini-label\">c² &lt; a² + b²</span><p>ostrouhlý</p></div>\n<div><span class=\"mini-label\">c² = a² + b²</span><p>pravouhlý</p></div>\n<div><span class=\"mini-label\">c² &gt; a² + b²</span><p>tupouhlý</p></div>\n</div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD · prepona a odvesna</span><p>a = 6, b = 8: c² = 36 + 64 = 100, c = <strong>10</strong>. Odvesnu hľadáme odčítaním: c = 17, a = 8, b² = 289 − 64 = 225, b = <strong>15</strong>.</p></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD · výška rovnoramenného</span><p>Základňa 10 cm, ramená 13 cm. Výška rozpolí základňu na dve časti po 5 cm: v² = 13² − 5² = 144, v = <strong>12 cm</strong>.</p></div>\n<div class=\"warning\"><strong>Pozor:</strong> c² = a² + b², nie c = a + b. Pri hľadaní odvesny sa štvorce <em>odčítajú</em>.</div>",
        "remember": "Výška rovnoramenného trojuholníka rozpolí základňu a vznikne pravouhlý trojuholník: v² = rameno² − (základňa/2)²."
      },
      {
        "id": "n-hyp",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "Pytagorova veta",
        "title": "Prepona",
        "prompt": "Pravouhlý trojuholník má odvesny 9 cm a 12 cm. Aká dlhá je prepona v cm?",
        "validate": "exact",
        "answer": 15,
        "success": "c² = 81 + 144 = 225, c = 15 cm.",
        "hint": "Spočítaj a² + b² a potom odmocni.",
        "reveal": "Správne je 15: 9² + 12² = 225 = 15²."
      },
      {
        "id": "kinds-sides",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "druh podľa strán",
        "title": "Druh trojuholníka zo strán",
        "labels": [
          "ostrouhlý",
          "pravouhlý",
          "tupouhlý"
        ],
        "items": [
          {
            "text": "strany 5, 12, 13 cm",
            "answer": "pravouhlý"
          },
          {
            "text": "strany 4, 5, 6 cm",
            "answer": "ostrouhlý"
          },
          {
            "text": "strany 4, 5, 7 cm",
            "answer": "tupouhlý"
          },
          {
            "text": "strany 7, 24, 25 cm",
            "answer": "pravouhlý"
          },
          {
            "text": "strany 6, 7, 8 cm",
            "answer": "ostrouhlý"
          },
          {
            "text": "strany 8, 9, 15 cm",
            "answer": "tupouhlý"
          }
        ]
      },
      {
        "id": "n-height",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "výška rovnoramenného",
        "title": "Výška na základňu",
        "prompt": "Rovnoramenný trojuholník má základňu 10 cm a ramená 13 cm. Aká dlhá je výška na základňu v cm?",
        "validate": "exact",
        "answer": 12,
        "success": "Výška rozpolí základňu: v² = 13² − 5² = 144, v = 12 cm.",
        "hint": "Výška rozpolí základňu na dve časti po 5 cm. Použi Pytagorovu vetu s preponou 13.",
        "reveal": "Správne je 12: 169 − 25 = 144."
      },
      {
        "id": "c-ext",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "vonkajší uhol",
        "question": "Vonkajší uhol pri vrchole C trojuholníka ABC má 125° a vnútorný uhol α má 50°. Aký veľký je vnútorný uhol β?",
        "options": [
          "55°",
          "130°",
          "75°",
          "175°"
        ],
        "answer": 2,
        "correct": "Správne: vonkajší uhol pri C je α + β, teda β = 125° − 50° = 75°. (Vnútorný uhol γ má 55°.)",
        "hint": "Vonkajší uhol pri C sa rovná súčtu uhlov pri ostatných dvoch vrcholoch. Čo z toho už poznáš?"
      },
      {
        "id": "hunt2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak počítal preponu pravouhlého trojuholníka s odvesnami 5 cm a 12 cm: „c = 5 + 12 = 17 cm.“ Ktorý výsledok je správny?",
        "options": [
          "13 cm",
          "17 cm",
          "169 cm",
          "7 cm"
        ],
        "answer": 0,
        "correct": "Správne: c² = 5² + 12² = 25 + 144 = 169, c = 13 cm. Prepona nemôže byť rovná súčtu odvesien — to by porušovalo trojuholníkovú nerovnosť.",
        "hint": "Pytagorova veta sčítava štvorce strán, nie strany. Nezabudni na záver odmocniť."
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha na papier",
        "html": "<p>Odlož zariadenie. Rovnoramenný trojuholník ABC má základňu AB = 12 cm a ramená AC = BC = 10 cm.</p><ol><li>Načrtni ho, zakresli výšku na základňu a vypočítaj jej dĺžku (Pytagorova veta).</li><li>Vypočítaj obvod trojuholníka.</li><li>Pomocou c² a a² + b² (c je najdlhšia strana) rozhodni, či je trojuholník ostrouhlý, pravouhlý alebo tupouhlý.</li></ol>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: trojuholník",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Rieš na papier, k úlohám si rob náčrt a zapisuj jednotky. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "V trojuholníku je α = 72° a β = 35°. Vypočítaj γ a rozhodni, aký je trojuholník podľa uhlov.",
            "answer": "γ = 180° − 72° − 35° = <strong>73°</strong>. Všetky uhly sú ostré, trojuholník je <strong>ostrouhlý</strong>."
          },
          {
            "level": "zaklad",
            "text": "Rovnoramenný trojuholník má uhol pri základni 50°. Aký veľký je uhol pri vrchole?",
            "answer": "Dva uhly pri základni: 2 · 50° = 100°, pri vrchole 180° − 100° = <strong>80°</strong>."
          },
          {
            "level": "zaklad",
            "text": "Pravouhlý trojuholník má odvesny 15 cm a 20 cm. Vypočítaj preponu.",
            "answer": "c² = 225 + 400 = 625, c = <strong>25 cm</strong>."
          },
          {
            "level": "zaklad",
            "text": "Pravouhlý trojuholník má preponu 26 cm a odvesnu 10 cm. Vypočítaj druhú odvesnu.",
            "answer": "b² = 676 − 100 = 576, b = <strong>24 cm</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Vonkajší uhol pri vrchole A má 140° a β = 45°. Vypočítaj γ a rozhodni, aký je trojuholník podľa uhlov.",
            "answer": "Vonkajší uhol pri A = β + γ, 140° = 45° + γ, γ = <strong>95°</strong>. Jeden uhol je tupý, trojuholník je <strong>tupouhlý</strong>. (Kontrola: α = 40°, 40° + 45° + 95° = 180°.)"
          },
          {
            "level": "rozsirenie",
            "text": "Obvod rovnoramenného trojuholníka je 36 cm a jeho ramená majú 13 cm. Vypočítaj základňu a výšku na základňu.",
            "answer": "Základňa 36 − 2 · 13 = <strong>10 cm</strong>. Výška: v² = 13² − 5² = 144, v = <strong>12 cm</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Pravouhlý trojuholník má odvesny 9 cm a 40 cm. Vypočítaj preponu a polomer opísanej kružnice.",
            "answer": "c² = 81 + 1600 = 1681, c = <strong>41 cm</strong>. R = 41 : 2 = <strong>20,5 cm</strong>."
          },
          {
            "level": "bonus",
            "text": "Trojuholník má uhly v pomere 2 : 3 : 4. Vypočítaj uhly a rozhodni, aký je trojuholník.",
            "answer": "2k + 3k + 4k = 180°, 9k = 180°, k = 20°. Uhly <strong>40°, 60°, 80°</strong> – všetky ostré, trojuholník je <strong>ostrouhlý</strong>."
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
          "druhy trojuholníkov a uhly",
          "Pytagorova veta (prepona, odvesna)",
          "výška rovnoramenného trojuholníka",
          "druh trojuholníka podľa strán"
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
        "text": "V trojuholníku ABC je α = 58° a γ = 49°. Vypočítaj β a urči druh trojuholníka podľa uhlov.",
        "answer": "β = 180° − 58° − 49° = 73°; všetky uhly sú ostré, ostrouhlý."
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 3,
        "text": "Rozhodni, či existuje trojuholník so stranami 8 cm, 9 cm, 18 cm. Zdôvodni.",
        "answer": "8 + 9 = 17 &lt; 18, trojuholník neexistuje."
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 4,
        "text": "Pravouhlý trojuholník má odvesny 20 cm a 21 cm. Vypočítaj preponu.",
        "answer": "c² = 400 + 441 = 841, c = 29 cm."
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 5,
        "text": "Rovnoramenný trojuholník má základňu 24 cm a ramená 15 cm. Vypočítaj výšku na základňu a vzdialenosť ťažiska od základne.",
        "answer": "v² = 225 − 144 = 81, v = 9 cm. Ťažisko je na výške vo vzdialenosti ⅓ · 9 = 3 cm od základne."
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 4,
        "text": "Strany trojuholníka majú dĺžky 9 cm, 12 cm a 15 cm. Je trojuholník pravouhlý? Ak áno, aký polomer má opísaná kružnica?",
        "answer": "9² + 12² = 81 + 144 = 225 = 15², je pravouhlý; R = 15 : 2 = 7,5 cm."
      },
      {
        "id": "w6",
        "level": "rozsirenie",
        "space": 4,
        "text": "Vonkajší uhol pri vrchole C má 115° a α = 35°. Vypočítaj β a γ.",
        "answer": "Vonkajší uhol pri C = α + β, β = 115° − 35° = 80°; γ = 180° − 115° = 65° (kontrola: 35° + 80° + 65° = 180°)."
      },
      {
        "id": "w7",
        "level": "bonus",
        "space": 5,
        "text": "Dve strany trojuholníka majú 7 cm a 10 cm, tretia má celočíselnú dĺžku x cm. Pre ktoré x je trojuholník tupouhlý s tupým uhlom oproti strane 10 cm?",
        "answer": "Existencia: 3 &lt; x. Tupý uhol oproti 10 cm: x² + 49 &lt; 100, x² &lt; 51, x ≤ 7. Spolu x = 4, 5, 6, 7."
      }
    ]
  }
});
