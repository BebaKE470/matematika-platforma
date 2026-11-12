MathPlatform.registerModule({
  "id": "3-u02-h040",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 40 · Kontrolná písomná práca",
    "prerequisites": [
      "obvod a obsah trojuholníka, štvoruholníkov, mnohouholníka a kruhu (hodiny 22–38)",
      "Pytagorova veta z 2. ročníka",
      "prevody jednotiek obsahu",
      "systematizácia učiva (hodina 39)"
    ],
    "planContent": [
      "Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka."
    ],
    "planPerformance": [
      "Poznať a vedieť opísať vlastnosti základných rovinných útvarov.",
      "Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov."
    ],
    "goals": [
      "zopakovať si vzorce obvodu a obsahu celku Planimetria",
      "overiť sa na krátkych samostatných otázkach v štýle písomky",
      "zistiť, čo si pred písomkou ešte prejsť"
    ],
    "competencies": [
      "výber správneho vzorca",
      "presný zápis a jednotky",
      "argumentácia a kontrola výsledku",
      "sebahodnotenie pripravenosti"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie spôsobu práce: interpretácia, modelovanie, reprezentácie a zdôvodnenie. Neurčuje poradie učiva."
    ],
    "flow": [
      "2 min: čo bude v písomke",
      "3 min: vzorce na jednom mieste",
      "6–8 min: osem samostatných otázok s okamžitou spätnou väzbou",
      "2 min: sebahodnotenie a rozhodnutie, čo si ešte prejsť; potom samostatná písomka na papieri"
    ],
    "diagnostics": [
      "žiak vyberie správny vzorec obsahu (delenie dvoma pri trojuholníku a lichobežníku)",
      "žiak dopočíta rozmer Pytagorovou vetou",
      "žiak správne zaobchádza s π a polomerom/priemerom",
      "žiak prevádza jednotky obsahu"
    ],
    "partialUse": [
      "Modul možno použiť celý približne 10–15 minút alebo vybrať jeho časť.",
      "Mobil nenahrádza ručné počítanie, náčrt, presný zápis ani argumentáciu.",
      "Hodnotená písomka sa píše samostatne, mimo tohto modulu."
    ]
  },
  "student": {
    "title": "Kontrolná písomná práca: opakovanie celku",
    "subtitle": "Téma 40 · Planimetria",
    "intro": "Pred písomkou si rýchlo prejdeš vzorce a vyskúšaš krátke otázky v štýle písomky. Počítaj na papieri a do aplikácie zapisuj výsledok.",
    "estimatedTime": "10–15 min digitálne + písomka",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo bude v písomke",
        "html": "<p>Písomka overuje celý tematický celok Planimetria: <strong>obvod a obsah trojuholníka, štvoruholníkov, mnohouholníka, kruhu a jeho častí</strong>, použitie Pytagorovej vety na dopočítanie rozmeru a praktické úlohy s jednotkami. Postup si zapisuj po krokoch a výsledky vždy s jednotkou.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "zopakovať si vzorce obvodu a obsahu útvarov celku",
          "rozlíšiť obvod (dĺžka) a obsah (plocha) a uviesť správnu jednotku",
          "vyskúšať si samostatné otázky v štýle písomky",
          "zistiť, čo si pred písomkou ešte prejsť"
        ]
      },
      {
        "id": "formulas",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Vzorce na jednom mieste",
        "html": "<div class=\"term-list\">\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Trojuholník a štvoruholníky</div><p class=\"term-rule\">Trojuholník S = a · v : 2. Obdĺžnik S = a · b, o = 2(a + b). Kosodĺžnik a kosoštvorec S = a · v. Kosoštvorec aj S = e · f : 2, o = 4a. Lichobežník S = (a + c) · v : 2.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Kruh a jeho časti</div><p class=\"term-rule\">Kruh o = 2πr, S = πr². Výseč: zlomok α/360 z kruhu; jej obvod je oblúk plus dva polomery. Medzikružie S = π(R² − r²).</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Jednotky</div><p class=\"term-rule\">1 m² = 10 000 cm², 1 a = 100 m², 1 ha = 10 000 m².</p></div></div>\n<div class=\"warning\"><strong>Pozor:</strong> do vzorca pre kruh dosadzuj polomer, nie priemer. Do obsahu trojuholníka patrí kolmá výška, nie šikmá strana.</div>"
      },
      {
        "id": "q1",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "trojuholník",
        "question": "Trojuholník má základňu 14 cm a výšku na ňu 5 cm. Aký je jeho obsah?",
        "options": [
          "70 cm²",
          "19 cm²",
          "35 cm²",
          "28 cm²"
        ],
        "answer": 2,
        "correct": "S = 14 · 5 : 2 = 35 cm². Obsah trojuholníka je polovica súčinu základne a výšky.",
        "hint": "Vzorec obsahu trojuholníka obsahuje delenie dvoma."
      },
      {
        "id": "q2",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "Pytagorova veta",
        "title": "Obvod pravouhlého trojuholníka",
        "prompt": "Pravouhlý trojuholník má odvesny 9 cm a 12 cm. Aký je jeho obvod v cm?",
        "validate": "exact",
        "answer": 36,
        "success": "Prepona: √(81 + 144) = 15 cm. Obvod 9 + 12 + 15 = 36 cm.",
        "hint": "Najprv dopočítaj preponu Pytagorovou vetou: c² = a² + b².",
        "reveal": "Správne je 36: 9 + 12 + 15."
      },
      {
        "id": "q3",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "lichobežník",
        "question": "Lichobežník má rovnobežné strany 9 cm a 5 cm a výšku 4 cm. Aký je jeho obsah?",
        "options": [
          "56 cm²",
          "28 cm²",
          "36 cm²",
          "18 cm²"
        ],
        "answer": 1,
        "correct": "S = (9 + 5) · 4 : 2 = 28 cm².",
        "hint": "Rovnobežné strany sa sčítajú, vynásobia výškou a výsledok sa delí dvoma."
      },
      {
        "id": "q4",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "kosoštvorec",
        "title": "Obsah kosoštvorca",
        "prompt": "Kosoštvorec má uhlopriečky 10 cm a 24 cm. Aký je jeho obsah v cm²?",
        "validate": "exact",
        "answer": 120,
        "success": "S = e · f : 2 = 10 · 24 : 2 = 120 cm².",
        "hint": "Obsah kosoštvorca z uhlopriečok je ich súčin delený dvoma.",
        "reveal": "Správne je 120: 240 : 2."
      },
      {
        "id": "q5",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "kruh",
        "question": "Kruh má priemer 12 cm. Aký je jeho obvod?",
        "options": [
          "6π cm",
          "36π cm",
          "144π cm",
          "12π cm"
        ],
        "answer": 3,
        "correct": "o = π · d = 12π cm (alebo 2π · 6). Číslo 36π by bolo obsahom a malo by jednotku cm².",
        "hint": "Obvod kruhu je 2πr alebo πd. Dĺžka je v cm, nie v cm²."
      },
      {
        "id": "q6",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "výseč",
        "title": "Obsah výseče",
        "prompt": "Výseč má polomer 6 cm a stredový uhol 90°. Jej obsah je k·π cm². Zadaj k.",
        "validate": "exact",
        "answer": 9,
        "success": "Výseč je štvrtina kruhu: π · 36 : 4 = 9π cm².",
        "hint": "Zisti zlomok kruhu (90/360) a vynásob ním obsah celého kruhu 36π.",
        "reveal": "Správne je 9: 36π : 4."
      },
      {
        "id": "q7",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "medzikružie",
        "question": "Medzikružie má vonkajší polomer 5 cm a vnútorný polomer 3 cm. Aký je jeho obsah?",
        "options": [
          "16π cm²",
          "4π cm²",
          "34π cm²",
          "64π cm²"
        ],
        "answer": 0,
        "correct": "S = π(5² − 3²) = π(25 − 9) = 16π cm². Odčítame obsahy, nie polomery.",
        "hint": "Od obsahu veľkého kruhu odpočítaj obsah malého kruhu."
      },
      {
        "id": "q8",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "prevody jednotiek",
        "title": "Plocha pozemku v aroch",
        "prompt": "Pozemok má rozmery 25 m a 16 m. Koľko árov má jeho plocha? (1 a = 100 m²)",
        "validate": "exact",
        "answer": 4,
        "success": "S = 25 · 16 = 400 m² = 4 a.",
        "hint": "Najprv obsah v m², potom prevod na áry (1 a = 100 m²).",
        "reveal": "Správne je 4: 400 : 100."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Som pripravený/á na písomku?",
        "skills": [
          "obvod a obsah trojuholníka a štvoruholníkov",
          "Pytagorova veta pri dopočítaní rozmeru",
          "obvod a obsah kruhu, výseče a medzikružia",
          "zložené útvary a praktické úlohy",
          "prevody jednotiek m², cm², a, ha"
        ],
        "prompt": "Označ, ako dobre to zvládaš. Nie je to známka; porovnaj svoj pocit s výsledkom otázok. Čo máš 🔴 alebo 🟡, si pred písomkou ešte raz prejdi."
      }
    ]
  }
});
