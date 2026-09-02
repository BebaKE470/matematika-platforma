MathPlatform.registerModule({
  "id": "1-u01-h011",
  "teacher": {
    "placement": "1. ročník · Výroková formula · 11. hodina: Negácia kvantifikovaných výrokov",
    "prerequisites": [
      "všeobecný a existenčný kvantifikátor",
      "negácia výroku"
    ],
    "planContent": [
      "Relevantný obsah aktuálneho tematického plánu: Výroky a ich pravdivostná hodnota; jednoduchý výrok a jeho negácia; logické spojky; negácia zložených výrokov a de Morganove zákony; tautológie, kontradikcie a kontingencie; obmena, obrátenie a negácia implikácie; všeobecný a existenčný kvantifikátor; negácia kvantifikovaných výrokov; priamy, nepriamy dôkaz a dôkaz sporom; aplikácie výrokovej logiky; opakovanie a kontrolná písomná práca."
    ],
    "planPerformance": [
      "Určiť, či daná vetná konštrukcia je výrokom (vrátane všeobecného výroku vyjadreného bez použitia všeobecných kvantifikátorov).",
      "Na konkrétnych príkladoch vysvetliť rozdiel medzi vylučovacím a nevylučovacím chápaním spojky alebo.",
      "Vysvetliť rozdiel medzi implikáciou a ekvivalenciou.",
      "Vysvetliť de Morganove pravidlá pre negáciu výrokov A ∧ B a A ∨ B.",
      "Správne vnímať logické spojky v rôznych prostrediach.",
      "Tvoriť zložené výroky a zistiť štruktúru a pravdivosť výrokov zložených z malého počtu jednoduchých výrokov pomocou logických spojok.",
      "Utvoriť negáciu výroku pomocou pravidiel pre negáciu základných zložených výrokov a negáciu jednoduchých kvantifikátorov.",
      "Vysvetliť, kedy na dôkaz nepravdivosti tvrdenia možno použiť protipríklad.",
      "V jednoduchých prípadoch vysloviť kontrapríklad všeobecných tvrdení.",
      "Opísať základné druhy dôkazov (priamy, sporom) a dokumentovať ich príkladmi."
    ],
    "goals": [
      "negovať jednoduchý všeobecný výrok",
      "negovať jednoduchý existenčný výrok",
      "vysvetliť význam protipríkladu pri vyvrátení všeobecného tvrdenia",
      "rozlíšiť „nie všetky“ od „žiadne“"
    ],
    "competencies": [
      "presné matematické vyjadrovanie",
      "argumentácia a zdôvodňovanie",
      "kritické posudzovanie tvrdení",
      "práca so symbolickým a slovným zápisom",
      "prehľadný pracovný a čistý zápis v zošite"
    ],
    "enrichment": [
      "Návrh štandardu explicitne uvádza negáciu všeobecného a existenčného výroku a protipríklad; modul to využíva priamo v rámci aktuálneho plánu."
    ],
    "flow": [
      "5 min: jazykový konflikt „nie všetci“ vs. „nikto“",
      "15–20 min: digitálna práca",
      "10 min: ručné negácie v zošite",
      "5 min: protipríklad pri tabuli"
    ],
    "diagnostics": [
      "správne mení ∀ ↔ ∃ pri negácii",
      "nepreháňa negáciu všeobecného tvrdenia na „žiadny“",
      "vie uviesť protipríklad"
    ],
    "partialUse": [
      "Modul je možné použiť celý alebo len vybrané kroky podľa priebehu hodiny.",
      "Digitálna aktivita nenahrádza ručný zápis, diskusiu pri tabuli ani zdôvodnenie vlastnými slovami."
    ]
  },
  "student": {
    "title": "Nie všetky neznamená žiadne",
    "subtitle": "Téma 11 · Negácia kvantifikovaných výrokov",
    "intro": "Pri kvantifikátoroch sa negácia mení nielen vo vnútri tvrdenia. Mení aj „všetky“ na „existuje aspoň jeden“ a naopak.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "visual",
        "type": "info",
        "phase": "ZAČÍNAME",
        "title": "Dve pravidlá, ktoré treba chápať",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 230\" role=\"img\" aria-label=\"Negácia kvantifikovaných výrokov\"><g font-family=\"system-ui\" text-anchor=\"middle\"><rect x=\"35\" y=\"30\" width=\"310\" height=\"72\" rx=\"16\" fill=\"currentColor\" opacity=\".07\"/><text x=\"190\" y=\"61\" font-size=\"21\" font-weight=\"700\">¬(∀x P(x))</text><text x=\"190\" y=\"86\" font-size=\"17\">⇔ ∃x ¬P(x)</text><rect x=\"415\" y=\"30\" width=\"310\" height=\"72\" rx=\"16\" fill=\"currentColor\" opacity=\".07\"/><text x=\"570\" y=\"61\" font-size=\"21\" font-weight=\"700\">¬(∃x P(x))</text><text x=\"570\" y=\"86\" font-size=\"17\">⇔ ∀x ¬P(x)</text><text x=\"380\" y=\"145\" font-size=\"16\" font-weight=\"700\">„Nie všetky“ ≠ „žiadne“</text><text x=\"380\" y=\"176\" font-size=\"15\">Na vyvrátenie „všetky“ stačí jeden protipríklad.</text></g></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "na",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "Negácia ∀",
        "question": "Neguj vetu „Každé prirodzené číslo je párne.“",
        "options": [
          "Žiadne prirodzené číslo nie je párne.",
          "Existuje prirodzené číslo, ktoré nie je párne.",
          "Existuje prirodzené číslo, ktoré je párne."
        ],
        "answer": 1,
        "correct": "Správne. Na popretie „všetky sú párne“ stačí jedno nepárne prirodzené číslo.",
        "hint": "„Nie všetky“ znamená, že nájdeme aspoň jednu výnimku."
      },
      {
        "id": "ne",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "Negácia ∃",
        "question": "Neguj vetu „Existuje prirodzené číslo menšie ako 0.“",
        "options": [
          "Každé prirodzené číslo je aspoň 0.",
          "Existuje prirodzené číslo aspoň 0.",
          "Niektoré prirodzené číslo nie je menšie ako 0."
        ],
        "answer": 0,
        "correct": "Áno. Ak neexistuje ani jeden prvok s vlastnosťou, potom všetky prvky túto vlastnosť nemajú.",
        "hint": "Negácia „existuje“ musí vylúčiť všetky možné prípady."
      },
      {
        "id": "counter",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Protipríklad je presný nástroj",
        "html": "<p>Všeobecné tvrdenie <strong>∀x P(x)</strong> vyvrátime tým, že nájdeme konkrétne x, pre ktoré P(x) neplatí.</p><p>Také x sa nazýva <strong>protipríklad</strong>. Jeden správny protipríklad stačí na vyvrátenie všeobecného tvrdenia.</p>",
        "remember": "Na vyvrátenie „pre všetky“ stačí „existuje aspoň jeden, pre ktorý nie“."
      },
      {
        "id": "counter2",
        "type": "choice",
        "phase": "PREMÝŠĽAJ",
        "skill": "Protipríklad",
        "question": "Ktoré číslo je protipríkladom tvrdenia „Každé prvočíslo je nepárne“?",
        "options": [
          "3",
          "5",
          "2",
          "7"
        ],
        "answer": 2,
        "correct": "Správne. 2 je prvočíslo a zároveň je párne.",
        "hint": "Hľadaj jedinú výnimku."
      },
      {
        "id": "nb",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Neguj presne",
        "html": "<p>Neguj a zapíš slovne aj symbolicky:<br>a) ∀ x (x je reálne číslo): x² ≥ 0<br>b) ∃ n (n je prirodzené číslo): n² = 2</p>",
        "model": "<strong>VZOR:</strong><br>a) ∃ x (x je reálne číslo): x² &lt; 0 – existuje reálne číslo so zápornou druhou mocninou.<br>b) ∀ n (n je prirodzené číslo): n² ≠ 2 – pre každé prirodzené n platí n² ≠ 2."
      },
      {
        "id": "lang",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "Jazyk negácie",
        "title": "Je uvedená negácia správna?",
        "items": [
          {
            "text": "„Všetci žiaci odovzdali úlohu.“ → „Aspoň jeden žiak úlohu neodovzdal.“",
            "answer": true,
            "why": "Presná negácia všeobecného tvrdenia."
          },
          {
            "text": "„Existuje riešenie rovnice.“ → „Existuje iné číslo, ktoré riešením nie je.“",
            "answer": false,
            "why": "To nevylučuje existenciu riešenia. Správne: žiadne číslo nie je riešením."
          },
          {
            "text": "„Každé x spĺňa P.“ → „Existuje x, ktoré P nespĺňa.“",
            "answer": true,
            "why": "Symbolicky ¬∀ = ∃¬."
          }
        ],
        "labels": [
          "SPRÁVNE",
          "NESPRÁVNE"
        ]
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Negácia kvantifikátorov",
        "question": "Negácia tvrdenia „Každý žiak vyriešil úlohu“ je:",
        "options": [
          "Žiadny žiak nevyriešil úlohu.",
          "Aspoň jeden žiak úlohu nevyriešil.",
          "Aspoň jeden žiak úlohu vyriešil."
        ],
        "answer": 1,
        "correct": "Na vyvrátenie „každý“ stačí aspoň jeden prípad, keď vlastnosť neplatí.",
        "hint": "Negácia všeobecného tvrdenia začína „existuje aspoň jeden...“."
      },
      {
        "id": "extra-b",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Negácia kvantifikátorov",
        "question": "Negácia tvrdenia „Existuje číslo s vlastnosťou V“ je:",
        "options": [
          "Každé číslo má V.",
          "Žiadne číslo nemá V.",
          "Existujú aspoň dve čísla bez V."
        ],
        "answer": 1,
        "correct": "Správne: neexistuje ani jeden prvok s vlastnosťou V.",
        "hint": "Popri existencii musí negácia vylúčiť všetky možnosti."
      },
      {
        "id": "extra-c",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Dve zmeny naraz",
        "prompt": "Opíš, čo sa pri negácii stane s kvantifikátorom a s vlastnosťou.",
        "model": "Všeobecný kvantifikátor sa zmení na existenčný a vlastnosť sa neguje; existenčný sa zmení na všeobecný a vlastnosť sa neguje."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Negácia kvantifikátorov",
        "skills": [
          "negácia ∀",
          "negácia ∃",
          "protipríklad",
          "rozdiel „nie všetky“ a „žiadne“"
        ],
        "prompt": "Pri každej položke vyber, ako dobre jej teraz rozumieš. Toto nie je známka; je to spätná väzba pre tvoje ďalšie učenie."
      }
    ]
  }
});
