MathPlatform.registerModule({
  "id": "3-u04-h062",
  "teacher": {
    "placement": "3. ročník · Sterometria · Hodina 62: Praktické úlohy",
    "prerequisites": [
      "učivo ZŠ o bodoch, priamkach, rovinách a základných telesách",
      "predchádzajúci tematický celok Stereometria – metrické úlohy",
      "priestorová orientácia a označenie kocky ABCDEFGH; pri rezoch aj učivo predchádzajúcich hodín tohto celku"
    ],
    "planContent": [
      "Tematický plán uvádza pre celý celok: „Základné pojmy geometrie v priestore; Vzájomné polohy priamok a rovín; Rezy kocky.“",
      "Téma hodiny podľa tematického plánu: „Praktické úlohy“."
    ],
    "planPerformance": [
      "Tematický plán uvádza pre celý celok: „Poznať vzťahy v kocke. Vedieť sa priestorovo orientovať v kocke.“",
      "ŠkVP pre 3. ročník konkretizuje: riešiť úlohy o vzájomnej polohe priamok a rovín v kocke, orientovať sa v priestore kocky a riešiť úlohy na rez kocky rovinou."
    ],
    "goals": [
      "preniesť vzájomné polohy a rezy kocky do jednoduchého technického alebo geodetického kontextu",
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
    "title": "Praktické úlohy",
    "subtitle": "Téma 62 · Sterometria",
    "intro": "15-minútová interaktívna časť: priestorová orientácia v technických situáciách. Rozhoduj podľa vlastností priestoru, nie iba podľa toho, ako obrázok vyzerá.",
    "estimatedTime": "cca 15 min",
    "activities": [
      {
        "id": "v",
        "type": "info",
        "phase": "PRECVIČ",
        "title": "Priestorová úloha z praxe",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 620 330\" role=\"img\" aria-label=\"Kocka ABCDEFGH\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"><path d=\"M120 110 L360 110 L470 55 L230 55 Z\"/><path d=\"M120 110 L120 270 L360 270 L360 110\"/><path d=\"M360 270 L470 215 L470 55\"/><path d=\"M120 270 L230 215 L470 215\" stroke-dasharray=\"7 7\" opacity=\".55\"/><path d=\"M230 55 L230 215\" stroke-dasharray=\"7 7\" opacity=\".55\"/></g><g fill=\"currentColor\" font-family=\"system-ui\" font-size=\"18\"><text x=\"98\" y=\"105\">A</text><text x=\"365\" y=\"105\">B</text><text x=\"480\" y=\"55\">C</text><text x=\"215\" y=\"45\">D</text><text x=\"98\" y=\"292\">E</text><text x=\"365\" y=\"292\">F</text><text x=\"480\" y=\"230\">G</text><text x=\"210\" y=\"235\">H</text></g></svg></div><p>Model kocky môže predstavovať stavebný blok alebo ohraničený priestor. Dôležitá je orientácia, nie výpočet objemu.</p>"
      },
      {
        "id": "q1",
        "type": "choice",
        "phase": "PRECVIČ",
        "title": "Trasa po hrane",
        "skill": "orientácia",
        "question": "Kábel vedie po hrane AB a druhý po protiľahlej rovnobežnej hrane HG. Aký je ich vzájomný smer?",
        "options": [
          "rovnobežný",
          "rôznobežný",
          "mimobežný"
        ],
        "answer": 0,
        "correct": "Protiľahlé zodpovedajúce hrany kocky sú rovnobežné."
      },
      {
        "id": "q2",
        "type": "choice",
        "phase": "PRECVIČ",
        "title": "Dve línie v priestore",
        "skill": "orientácia",
        "question": "Línie AB a CG na modeli kocky sa nepretínajú a nie sú rovnobežné. Ako ich klasifikujeme?",
        "options": [
          "mimobežné",
          "rôznobežné",
          "totožné"
        ],
        "answer": 0,
        "correct": "Ide o mimobežné priamky."
      },
      {
        "id": "q3",
        "type": "choice",
        "phase": "PRECVIČ",
        "title": "Rovina steny",
        "skill": "modelovanie",
        "question": "Predná stena ABFE predstavuje fasádu. Ktorá rovina je s ňou rovnobežná?",
        "options": [
          "protiľahlá stena DCGH",
          "susedná stena BCGF",
          "spodná stena EFGH"
        ],
        "answer": 0,
        "correct": "Protiľahlé steny kocky ležia v rovnobežných rovinách."
      },
      {
        "id": "q4",
        "type": "choice",
        "phase": "PRECVIČ",
        "title": "Rez ako pracovná rovina",
        "skill": "modelovanie",
        "question": "Rovina pretne model kocky. Čo geometricky predstavuje vzniknutý mnohouholník?",
        "options": [
          "rez kocky rovinou",
          "sieť kocky",
          "telesovú uhlopriečku"
        ],
        "answer": 0,
        "correct": "Prienik telesa s rovinou je rez."
      },
      {
        "id": "q5",
        "type": "choice",
        "phase": "PRECVIČ",
        "title": "Technická kontrola",
        "skill": "argumentácia",
        "question": "V náčrte rezu je jedna strana vedená „cez vnútro“ kocky medzi bodmi na rôznych stenách bez ďalšieho zdôvodnenia. Čo je najlepšia kontrolná otázka?",
        "options": [
          "Ležia oba koncové body na tej istej stene, v ktorej má byť táto strana rezu?",
          "Má úsečka peknú farbu?",
          "Je kocka nakreslená v mierke 1:1?"
        ],
        "answer": 0,
        "correct": "Strana rezu vzniká v konkrétnej stene."
      },
      {
        "id": "sw",
        "type": "selfWrite",
        "phase": "PRECVIČ",
        "title": "Prepoj s odborným predmetom",
        "skill": "komunikácia",
        "prompt": "Uveď jednu situáciu z technickej praxe, kde je dôležité rozlišovať priamku, rovinu alebo ich vzájomnú polohu.",
        "model": "Napríklad pri modelovaní stavby treba rozlišovať smer hrán a roviny stien; pri geodetickom alebo technickom zobrazení je dôležité vedieť, či sa línie pretínajú, sú rovnobežné alebo sú v priestore mimobežné."
      },
      {
        "id": "q6",
        "type": "choice",
        "phase": "PRECVIČ",
        "title": "Čo je podstatné?",
        "skill": "modelovanie",
        "question": "Pri priestorovej technickej úlohe je najdôležitejšie…",
        "options": [
          "najprv správne preložiť reálnu situáciu na body, priamky a roviny",
          "hneď dosadiť do vzorca na objem",
          "predpokladať, že všetko leží v jednej rovine"
        ],
        "answer": 0,
        "correct": "Najprv treba vytvoriť správny geometrický model."
      },
      {
        "id": "r",
        "type": "reflection",
        "phase": "PRECVIČ",
        "title": "Prenos do praxe",
        "items": [
          "Viem preložiť situáciu do geometrického modelu.",
          "Rozlíšim polohy priamok a rovín.",
          "Viem skontrolovať priestorový náčrt."
        ]
      }
    ]
  }
});
