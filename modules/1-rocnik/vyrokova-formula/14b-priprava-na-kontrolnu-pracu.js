MathPlatform.registerModule({
  "id": "1-u01-h014b",
  "teacher": {
    "placement": "1. ročník · Výroková formula · Príprava na kontrolnú prácu (pracovný list)",
    "prerequisites": [
      "výrok a jeho pravdivostná hodnota",
      "negácia jednoduchého výroku",
      "logické spojky a pravdivostné tabuľky (konjunkcia, disjunkcia, implikácia, ekvivalencia)"
    ],
    "planContent": [
      "Relevantný obsah aktuálneho tematického plánu: Výroky a ich pravdivostná hodnota; jednoduchý výrok a jeho negácia; logické spojky; negácia zložených výrokov a de Morganove zákony; tautológie, kontradikcie a kontingencie; obmena, obrátenie a negácia implikácie; všeobecný a existenčný kvantifikátor; negácia kvantifikovaných výrokov; priamy, nepriamy dôkaz a dôkaz sporom; aplikácie výrokovej logiky; opakovanie a kontrolná písomná práca."
    ],
    "planPerformance": [
      "Určiť, či daná vetná konštrukcia je výrokom (vrátane všeobecného výroku vyjadreného bez použitia všeobecných kvantifikátorov).",
      "Vysvetliť rozdiel medzi implikáciou a ekvivalenciou.",
      "Správne vnímať logické spojky v rôznych prostrediach.",
      "Tvoriť zložené výroky a zistiť štruktúru a pravdivosť výrokov zložených z malého počtu jednoduchých výrokov pomocou logických spojok.",
      "Utvoriť negáciu výroku pomocou pravidiel pre negáciu základných zložených výrokov a negáciu jednoduchých kvantifikátorov."
    ],
    "goals": [
      "utvrdiť si základné pojmy výrokovej logiky pred kontrolnou prácou",
      "cvičiť rozlíšenie výrok/nevýrok a jeho pravdivostnú hodnotu",
      "precvičiť negáciu jednoduchých výrokov",
      "zostrojiť pravdivostné tabuľky zložených výrokov"
    ],
    "competencies": [
      "presné matematické vyjadrovanie",
      "kritické posudzovanie tvrdení",
      "práca so symbolickým a slovným zápisom",
      "prehľadný zápis do zošita v zošite"
    ],
    "enrichment": [
      "Modul preberá doslovne úlohy z pracovného listu, ktorý žiaci dostanú aj na papieri pred kontrolnou prácou — cieľom je, aby si digitálne overili presne tie isté úlohy, aké uvidia na písomke."
    ],
    "flow": [
      "5 min: základné pojmy (priraďovacie cvičenie)",
      "3 min: je to výrok? (klasifikácia a pravdivostná hodnota)",
      "5 min: negácia troch výrokov do zošita",
      "10–12 min: pravdivostné tabuľky šiestich zložených výrokov do zošita"
    ],
    "diagnostics": [
      "základné pojmy výrokovej logiky",
      "výrok vs. nevýrok a jeho pravdivostná hodnota",
      "negácia jednoduchého výroku",
      "zostavenie pravdivostnej tabuľky"
    ],
    "partialUse": [
      "Modul je možné použiť celý alebo len vybrané kroky podľa priebehu hodiny.",
      "Digitálna aktivita nenahrádza ručný zápis do zošita ani papierovú verziu pracovného listu — dopĺňa ju o okamžitú spätnú väzbu."
    ]
  },
  "student": {
    "title": "Príprava na kontrolnú prácu",
    "subtitle": "Pracovný list · Výroková logika",
    "intro": "Tu sú presne tie isté úlohy, aké máš aj na papierovom pracovnom liste. Precvič si ich a over sa ešte pred písomkou.",
    "estimatedTime": "20–25 min",
    "activities": [
      {
        "id": "topic-intro", "type": "intro",
        "goals": ["utvrdiť si základné pojmy pred písomkou", "precvičiť negáciu výroku a pravdivostné tabuľky"]
      },
      {
        "id": "zakladne-pojmy",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "Základné pojmy",
        "title": "Priraď ku každej definícii správny pojem. Každý pojem použi iba raz.",
        "labels": [
          "výrok", "pravdivý výrok", "nepravdivý výrok", "negácia výroku", "zložený výrok",
          "konjunkcia", "disjunkcia", "implikácia", "ekvivalencia", "tautológia"
        ],
        "items": [
          { "text": "Výrok, ktorý má pravdivostnú hodnotu 1.", "answer": "pravdivý výrok" },
          { "text": "Zložený výrok „A alebo B“.", "answer": "disjunkcia" },
          { "text": "Výrok, ktorý má opačnú pravdivostnú hodnotu ako pôvodný výrok.", "answer": "negácia výroku" },
          { "text": "Zložený výrok, ktorý je pravdivý pri všetkých možných pravdivostných hodnotách jeho častí.", "answer": "tautológia" },
          { "text": "Zložený výrok „Ak A, potom B“.", "answer": "implikácia" },
          { "text": "Oznamovacia veta, o ktorej môžeme jednoznačne rozhodnúť, či je pravdivá alebo nepravdivá.", "answer": "výrok" },
          { "text": "Zložený výrok „A a zároveň B“.", "answer": "konjunkcia" },
          { "text": "Výrok vytvorený z jednoduchých výrokov pomocou logických spojok.", "answer": "zložený výrok" },
          { "text": "Výrok, ktorý má pravdivostnú hodnotu 0.", "answer": "nepravdivý výrok" },
          { "text": "Zložený výrok „A práve vtedy, keď B“.", "answer": "ekvivalencia" }
        ]
      },
      {
        "id": "je-to-vyrok",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "Výrok a pravdivostná hodnota",
        "title": "Rozhodni, či je uvedená veta výrokom. Ak áno, priraď aj jej pravdivostnú hodnotu.",
        "labels": ["Nie je výrok", "Je to výrok – pravdivostná hodnota 1", "Je to výrok – pravdivostná hodnota 0"],
        "items": [
          { "text": "Bratislava je hlavné mesto Slovenska.", "answer": "Je to výrok – pravdivostná hodnota 1" },
          { "text": "Koľko je hodín?", "answer": "Nie je výrok" },
          { "text": "Číslo 15 je párne.", "answer": "Je to výrok – pravdivostná hodnota 0" },
          { "text": "Zatvor okno!", "answer": "Nie je výrok" },
          { "text": "7 + 5 = 12", "answer": "Je to výrok – pravdivostná hodnota 1" },
          { "text": "Číslo 20 je menšie ako 8.", "answer": "Je to výrok – pravdivostná hodnota 0" }
        ]
      },
      {
        "id": "negacia-vyroku",
        "type": "taskList",
        "phase": "BEZ MOBILU",
        "skill": "Negácia výroku",
        "title": "Vytvor negáciu výroku",
        "html": "<p>Vytvor negáciu nasledujúcich výrokov a zapíš ju do zošita presne v tvare ¬A, ¬B, ¬C.</p>",
        "items": [
          { "text": "A: Číslo 12 je párne. Napíš ¬A.", "answer": "¬A: Číslo 12 nie je párne. (Číslo 12 je nepárne.)" },
          { "text": "B: Trojuholník má tri strany. Napíš ¬B.", "answer": "¬B: Trojuholník nemá tri strany." },
          { "text": "C: Číslo 7 je väčšie ako 10. Napíš ¬C.", "answer": "¬C: Číslo 7 nie je väčšie ako 10. (Číslo 7 je menšie alebo rovné 10.)" }
        ],
        "note": "Riešenie si over až potom, čo budeš mať vlastnú negáciu napísanú v zošite."
      },
      {
        "id": "pravdivostne-tabulky",
        "type": "taskList",
        "phase": "BEZ MOBILU",
        "skill": "Pravdivostné tabuľky",
        "title": "Zostav pravdivostné tabuľky",
        "html": "<p>Skôr než začneš, pripomeň si pravdivostné hodnoty výrokov A a B spojených všetkými štyrmi základnými spojkami:</p><div class=\"table-wrap\"><table class=\"truth\"><tr><th>A</th><th>B</th><th>A ∧ B</th><th>A ∨ B</th><th>A ⇒ B</th><th>A ⇔ B</th></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td></tr></table></div><p>Teraz zostav pravdivostné tabuľky pre nasledujúce zložené výroky do zošita (riadky vždy 1/1, 1/0, 0/1, 0/0). Pri úlohách 1 a 2 použi presne uvedené stĺpce; pri úlohách 3–6 si stĺpce zvoľ sám/sama.</p>",
        "items": [
          {
            "html": "<strong>1.</strong> ¬A ∨ B — stĺpce: A, B, ¬A, ¬A ∨ B.",
            "answer": "<div class=\"table-wrap\"><table class=\"truth\"><tr><th>A</th><th>B</th><th>¬A</th><th>¬A ∨ B</th></tr><tr><td>1</td><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>1</td></tr><tr><td>0</td><td>0</td><td>1</td><td>1</td></tr></table></div>"
          },
          {
            "html": "<strong>2.</strong> (A ∧ B) ⇒ ¬A — stĺpce: A, B, A ∧ B, ¬A, (A ∧ B) ⇒ ¬A.",
            "answer": "<div class=\"table-wrap\"><table class=\"truth\"><tr><th>A</th><th>B</th><th>A ∧ B</th><th>¬A</th><th>(A ∧ B) ⇒ ¬A</th></tr><tr><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td></tr></table></div>"
          },
          {
            "html": "<strong>3.</strong> ¬(A ⇒ B) ⇔ (B ⇒ ¬A) — celá tabuľka.",
            "answer": "<div class=\"table-wrap\"><table class=\"truth\"><tr><th>A</th><th>B</th><th>A ⇒ B</th><th>¬(A ⇒ B)</th><th>¬A</th><th>B ⇒ ¬A</th><th>celok</th></tr><tr><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td></tr><tr><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td></tr></table></div>"
          },
          {
            "html": "<strong>4.</strong> (A ∨ B) ⇔ ¬(¬A ⇒ B) — celá tabuľka.",
            "answer": "<div class=\"table-wrap\"><table class=\"truth\"><tr><th>A</th><th>B</th><th>A ∨ B</th><th>¬A</th><th>¬A ⇒ B</th><th>¬(¬A ⇒ B)</th><th>celok</th></tr><tr><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr></table></div>"
          },
          {
            "html": "<strong>5.</strong> (A ⇔ B) ∧ ¬(¬A ∨ ¬B) — celá tabuľka.",
            "answer": "<div class=\"table-wrap\"><table class=\"truth\"><tr><th>A</th><th>B</th><th>A ⇔ B</th><th>¬A</th><th>¬B</th><th>¬A ∨ ¬B</th><th>¬(¬A ∨ ¬B)</th><th>celok</th></tr><tr><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr></table></div>"
          },
          {
            "html": "<strong>6.</strong> (A ⇒ B) ⇔ ¬(A ∧ ¬B) — celá tabuľka.",
            "answer": "<div class=\"table-wrap\"><table class=\"truth\"><tr><th>A</th><th>B</th><th>A ⇒ B</th><th>¬B</th><th>A ∧ ¬B</th><th>¬(A ∧ ¬B)</th><th>celok</th></tr><tr><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td></tr></table></div>"
          }
        ],
        "note": "Tabuľku sa najprv pokús vyplniť sám/sama, riešenie si over až potom cez „Zobraz riešenie“."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako si na tom pred písomkou?",
        "skills": [
          "základné pojmy",
          "výrok a pravdivostná hodnota",
          "negácia výroku",
          "pravdivostné tabuľky"
        ],
        "prompt": "Pri každej položke vyber, ako dobre jej teraz rozumieš. Toto nie je známka; je to spätná väzba pre tvoju prípravu na písomku."
      }
    ]
  }
});
