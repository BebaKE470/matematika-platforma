MathPlatform.registerModule({
  "id": "3-u04-h058",
  "teacher": {
    "placement": "3. ročník · Sterometria · Hodina 58: Základné pojmy geometrie v priestore",
    "prerequisites": [
      "učivo ZŠ o bodoch, priamkach, rovinách a základných telesách",
      "predchádzajúci tematický celok Stereometria – metrické úlohy",
      "priestorová orientácia a označenie kocky ABCDEFGH; pri rezoch aj učivo predchádzajúcich hodín tohto celku"
    ],
    "planContent": [
      "Tematický plán uvádza pre celý celok: „Základné pojmy geometrie v priestore; Vzájomné polohy priamok a rovín; Rezy kocky.“",
      "Téma hodiny podľa tematického plánu: „Základné pojmy geometrie v priestore“."
    ],
    "planPerformance": [
      "Tematický plán uvádza pre celý celok: „Poznať vzťahy v kocke. Vedieť sa priestorovo orientovať v kocke.“",
      "ŠkVP pre 3. ročník konkretizuje: riešiť úlohy o vzájomnej polohe priamok a rovín v kocke, orientovať sa v priestore kocky a riešiť úlohy na rez kocky rovinou."
    ],
    "goals": [
      "rozlíšiť základné objekty a určiť, ktoré z nich môžu ležať v tej istej rovine",
      "presne používať geometrické pojmy a svoje rozhodnutie stručne zdôvodniť"
    ],
    "competencies": [
      "priestorová predstavivosť a geometrická reprezentácia",
      "matematická komunikácia a argumentácia",
      "analýza chyby a kontrola riešenia",
      "digitálna kompetencia pri krátkej interaktívnej diagnostike"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie spôsobu práce: presná reprezentácia priestorovej situácie, argumentácia a kontrola. Neurčuje poradie ani rozsah učiva."
    ],
    "estimatedTime": "45 min hodina; platforma približne 15 min aktívnej práce",
    "flow": [
      "0–5 min: aktivácia predchádzajúcich vedomostí a priestorový náčrt",
      "5–15 min: výklad/objavovanie alebo ručná konštrukcia podľa témy",
      "15–25 min: práca vo dvojiciach alebo ručné úlohy s kockou",
      "25–40 min: približne 15 min interaktívna platforma – viac krátkych rozhodovacích a argumentačných aktivít",
      "40–45 min: spoločné zdôvodnenie chýb, zhrnutie a exit ticket mimo platformy"
    ],
    "diagnostics": [
      "či žiak rozhoduje podľa geometrických vlastností, nie iba podľa vzhľadu perspektívneho obrázka",
      "či rozlišuje rovnobežné a mimobežné priamky",
      "pri rezoch či kontroluje, že každá strana rezu leží v konkrétnej stene",
      "či dokáže stručne zdôvodniť rozhodnutie"
    ],
    "partialUse": [
      "Platforma je navrhnutá na približne 15 minút a obsahuje viac krátkych aktivít s okamžitou spätnou väzbou.",
      "Ručný náčrt, model kocky, konštrukcia rezu a argumentácia na papieri zostávajú súčasťou vyučovacej hodiny a mobil ich nenahrádza."
    ],
    "notebook": "Ak je v module teoretický zápis, žiak vidí presné hotové znenie. Konštrukčné úlohy rieši ručne do zošita."
  },
  "student": {
    "title": "Základné pojmy geometrie v priestore",
    "subtitle": "Téma 58 · Sterometria",
    "intro": "15-minútová interaktívna časť: bod, priamka a rovina v priestore. Rozhoduj podľa vlastností priestoru, nie iba podľa toho, ako obrázok vyzerá.",
    "estimatedTime": "cca 15 min",
    "activities": [
      {
        "id": "v",
        "type": "info",
        "phase": "PRECVIČ",
        "title": "Kocka ako mapa priestoru",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 620 330\" role=\"img\" aria-label=\"Kocka ABCDEFGH\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"><path d=\"M120 110 L360 110 L470 55 L230 55 Z\"/><path d=\"M120 110 L120 270 L360 270 L360 110\"/><path d=\"M360 270 L470 215 L470 55\"/><path d=\"M120 270 L230 215 L470 215\" stroke-dasharray=\"7 7\" opacity=\".55\"/><path d=\"M230 55 L230 215\" stroke-dasharray=\"7 7\" opacity=\".55\"/></g><g fill=\"currentColor\" font-family=\"system-ui\" font-size=\"18\"><text x=\"98\" y=\"105\">A</text><text x=\"365\" y=\"105\">B</text><text x=\"480\" y=\"55\">C</text><text x=\"215\" y=\"45\">D</text><text x=\"98\" y=\"292\">E</text><text x=\"365\" y=\"292\">F</text><text x=\"480\" y=\"230\">G</text><text x=\"210\" y=\"235\">H</text></g></svg></div><p>Na kocke budeme pomenúvať body, priamky a roviny. Najprv sa zorientuj v označení vrcholov.</p>"
      },
      {
        "id": "q1",
        "type": "choice",
        "phase": "PRECVIČ",
        "title": "Bod, priamka alebo rovina?",
        "skill": "pojmy",
        "question": "Čo je v zápise kocky ABCDEFGH objekt AB?",
        "options": [
          "priamka určená bodmi A a B",
          "rovina určená bodmi A a B",
          "jeden bod"
        ],
        "answer": 0,
        "correct": "Dva rôzne body určujú priamku."
      },
      {
        "id": "q2",
        "type": "choice",
        "phase": "PRECVIČ",
        "title": "Koľko bodov určí rovinu?",
        "skill": "pojmy",
        "question": "Ktorá možnosť vždy jednoznačne určí rovinu?",
        "options": [
          "tri body, ktoré neležia na jednej priamke",
          "dva ľubovoľné body",
          "jeden bod a ľubovoľné číslo"
        ],
        "answer": 0,
        "correct": "Tri nekolineárne body určujú práve jednu rovinu."
      },
      {
        "id": "q3",
        "type": "choice",
        "phase": "PRECVIČ",
        "title": "Čítaj rovinu",
        "skill": "orientácia",
        "question": "V kocke ABCDEFGH ležia body A, B, E, F na jednej stene. Ktorý zápis môže pomenovať rovinu tejto steny?",
        "options": [
          "rovina ABE",
          "rovina ACG",
          "priamka ABE"
        ],
        "answer": 0,
        "correct": "Tri nekolineárne body A, B, E určujú rovinu prednej steny."
      },
      {
        "id": "q4",
        "type": "choice",
        "phase": "PRECVIČ",
        "title": "Patrí bod do roviny?",
        "skill": "orientácia",
        "question": "Kocka ABCDEFGH: rovina ABE je rovina steny ABFE. Ktorý bod v nej tiež leží?",
        "options": [
          "F",
          "C",
          "D",
          "G"
        ],
        "answer": 0,
        "correct": "F je štvrtý vrchol tej istej steny."
      },
      {
        "id": "q5",
        "type": "choice",
        "phase": "PRECVIČ",
        "title": "Nájdi chybu",
        "skill": "argumentácia",
        "question": "Žiak tvrdí: „Každé tri body v priestore určujú práve jednu rovinu.“ Čo je na tvrdení chybné?",
        "options": [
          "Ak tri body ležia na jednej priamke, rovinu neurčia jednoznačne.",
          "Rovinu nikdy nemožno určiť bodmi.",
          "Na určenie roviny treba vždy štyri body."
        ],
        "answer": 0,
        "correct": "Podmienka je, aby tri body neležali na jednej priamke."
      },
      {
        "id": "sw",
        "type": "selfWrite",
        "phase": "PRECVIČ",
        "title": "Vysvetli rozdiel",
        "skill": "komunikácia",
        "prompt": "Vysvetli, prečo dva body stačia na určenie priamky, ale nie roviny.",
        "model": "Dva rôzne body určujú jedinú priamku, ale cez túto priamku možno viesť viac rovín. Na jednoznačné určenie roviny potrebujeme napríklad tri body neležiace na jednej priamke."
      },
      {
        "id": "nb",
        "type": "notebook",
        "phase": "PRECVIČ",
        "title": "Toto si zapíš do zošita",
        "html": "<p><strong>ZÁKLADNÉ POJMY V PRIESTORE</strong></p><p>• Dva rôzne body určujú práve jednu priamku.<br>• Tri body, ktoré neležia na jednej priamke, určujú práve jednu rovinu.<br>• Bod môže ležať na priamke alebo v rovine; priamka môže ležať v rovine.</p>"
      },
      {
        "id": "q6",
        "type": "choice",
        "phase": "PRECVIČ",
        "title": "Rýchla kontrola",
        "skill": "pojmy",
        "question": "Ktorá veta je správna?",
        "options": [
          "Cez jednu priamku možno viesť viac rovín.",
          "Dva body určujú práve jednu rovinu.",
          "Každé štyri body ležia v jednej rovine."
        ],
        "answer": 0,
        "correct": "Jedna priamka sama rovinu neurčuje."
      },
      {
        "id": "r",
        "type": "reflection",
        "phase": "PRECVIČ",
        "title": "Ako sa orientuješ?",
        "items": [
          "Rozlíšim bod, priamku a rovinu.",
          "Viem, čo určuje priamku a rovinu.",
          "Viem čítať označenie kocky."
        ]
      }
    ]
  }
});
