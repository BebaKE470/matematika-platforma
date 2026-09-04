MathPlatform.registerModule({
  "id": "1-u01-h014",
  "teacher": {
    "placement": "1. ročník · Výroková formula · 14. hodina: Opakovanie",
    "prerequisites": [
      "celý tematický celok Výroková formula"
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
      "usporiadať pojmy do súvislostí",
      "samostatne vyriešiť krátky súbor reprezentatívnych úloh",
      "identifikovať vlastné slabé miesto pred kontrolnou prácou",
      "sformulovať stručný čistý súhrn v zošite"
    ],
    "competencies": [
      "presné matematické vyjadrovanie",
      "argumentácia a zdôvodňovanie",
      "kritické posudzovanie tvrdení",
      "práca so symbolickým a slovným zápisom",
      "prehľadný zápis do zošita v zošite"
    ],
    "enrichment": [
      "Formát niektorých úloh pripomína maturitný test, ale obsah a náročnosť ostávajú na úrovni aktuálne prebraného učiva."
    ],
    "flow": [
      "8 min: pamäťová mapa pri tabuli",
      "20 min: diagnostický digitálny modul",
      "12 min: oprava a čistý súhrn v zošite",
      "5 min: plán prípravy na písomku"
    ],
    "diagnostics": [
      "pripravenosť na kontrolnú prácu",
      "presnosť zápisu",
      "typické chyby pri negácii a implikácii"
    ],
    "partialUse": [
      "Modul je možné použiť celý alebo len vybrané kroky podľa priebehu hodiny.",
      "Digitálna aktivita nenahrádza ručný zápis, diskusiu pri tabuli ani zdôvodnenie vlastnými slovami."
    ]
  },
  "student": {
    "title": "Súhrn bez skratiek",
    "subtitle": "Téma 14 · Opakovanie pred kontrolnou prácou",
    "intro": "Cieľom nie je nazbierať čo najviac bodov, ale zistiť, čo už drží a ku čomu sa ešte potrebuješ vrátiť.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "map",
        "type": "info",
        "phase": "OPAKUJ",
        "title": "Celok na jednej mape",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 230\" role=\"img\" aria-label=\"Mapa tematického celku výroková logika\"><defs><marker id=\"a\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"currentColor\"/></marker></defs><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" opacity=\".65\" marker-end=\"url(#a)\"><path d=\"M125 70 H260\"/><path d=\"M370 70 H505\"/><path d=\"M610 70 V155 H520\"/><path d=\"M405 165 H270\"/></g><g font-family=\"system-ui\" text-anchor=\"middle\"><g><rect x=\"25\" y=\"35\" width=\"180\" height=\"70\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"115\" y=\"63\" font-size=\"18\" font-weight=\"700\">VÝROK</text><text x=\"115\" y=\"86\" font-size=\"14\">pravda / nepravda</text></g><g><rect x=\"265\" y=\"35\" width=\"185\" height=\"70\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"358\" y=\"63\" font-size=\"18\" font-weight=\"700\">SPOJKY</text><text x=\"358\" y=\"86\" font-size=\"14\">∧  ∨  ⇒  ⇔</text></g><g><rect x=\"510\" y=\"35\" width=\"190\" height=\"70\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"605\" y=\"63\" font-size=\"18\" font-weight=\"700\">KVANTIFIKÁTORY</text><text x=\"605\" y=\"86\" font-size=\"14\">∀  ∃</text></g><g><rect x=\"420\" y=\"135\" width=\"190\" height=\"65\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"515\" y=\"163\" font-size=\"18\" font-weight=\"700\">NEGÁCIA</text><text x=\"515\" y=\"185\" font-size=\"14\">čo presne neplatí?</text></g><g><rect x=\"175\" y=\"135\" width=\"190\" height=\"65\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"270\" y=\"163\" font-size=\"18\" font-weight=\"700\">DÔKAZ</text><text x=\"270\" y=\"185\" font-size=\"14\">prečo to musí platiť?</text></g></g></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "r1",
        "type": "choice",
        "phase": "DIAGNOSTIKA",
        "skill": "Výrok",
        "question": "Ktorý zápis je výrok?",
        "options": [
          "x+2",
          "Koľko je 4+5?",
          "4+5=9",
          "Vypočítaj x."
        ],
        "answer": 2,
        "correct": "Správne. Je to tvrdenie s určiteľnou pravdivosťou.",
        "hint": "Hľadaj tvrdenie, nie výraz, otázku ani pokyn."
      },
      {
        "id": "r2",
        "type": "choice",
        "phase": "DIAGNOSTIKA",
        "skill": "Pravdivostná tabuľka",
        "question": "A=P, B=N. Aká je hodnota A⇒B?",
        "options": [
          "P",
          "N"
        ],
        "answer": 1,
        "correct": "Implikácia je nepravdivá práve v prípade P⇒N.",
        "hint": "Toto je jediný nepravdivý riadok implikácie."
      },
      {
        "id": "r3",
        "type": "choice",
        "phase": "DIAGNOSTIKA",
        "skill": "De Morgan",
        "question": "¬(A∨B) je ekvivalentné s:",
        "options": [
          "¬A∨¬B",
          "¬A∧¬B",
          "A∧¬B"
        ],
        "answer": 1,
        "correct": "Správne.",
        "hint": "Pri negácii zmeň aj spojku."
      },
      {
        "id": "r4",
        "type": "choice",
        "phase": "DIAGNOSTIKA",
        "skill": "Kvantifikátory",
        "question": "Ktorá veta je negáciou „Existuje reálne číslo x, pre ktoré x²=-1“?",
        "options": [
          "Pre každé reálne číslo x platí x²≠-1.",
          "Existuje reálne číslo x, pre ktoré x²≠-1.",
          "Pre každé reálne číslo x platí x²=-1."
        ],
        "answer": 0,
        "correct": "Áno. Negácia ∃P je ∀¬P.",
        "hint": "Musíš vylúčiť existenciu každého možného riešenia."
      },
      {
        "id": "r5",
        "type": "choice",
        "phase": "DIAGNOSTIKA",
        "skill": "Implikácia",
        "question": "Ktorá veta je obmenou A⇒B?",
        "options": [
          "B⇒A",
          "¬B⇒¬A",
          "¬A⇒¬B"
        ],
        "answer": 1,
        "correct": "Správne.",
        "hint": "Obmena: neguj obe časti a obráť poradie."
      },
      {
        "id": "r6",
        "type": "choice",
        "phase": "DIAGNOSTIKA",
        "skill": "Dôkaz",
        "question": "Čo stačí na vyvrátenie všeobecného tvrdenia?",
        "options": [
          "jeden správny protipríklad",
          "desať príkladov, ktoré ho potvrdia",
          "definícia pojmu"
        ],
        "answer": 0,
        "correct": "Áno. Jeden protipríklad stačí.",
        "hint": "Vyvrátenie a potvrdenie všeobecného tvrdenia nie sú symetrické."
      },
      {
        "id": "summary",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Jedna strana, ktorú má zmysel mať",
        "html": "<p>Vytvor si <strong>ČISTÝ SÚHRN</strong> maximálne na jednu stranu: symboly ¬, ∧, ∨, ⇒, ⇔, ∀, ∃; De Morganove pravidlá; negácia implikácie; obmena; negácia kvantifikátorov; veta o protipríklade.</p><p>Neopisuj vysvetľujúce odseky. Píš stručne a presne.</p>",
        "model": "<strong>KONTROLNÝ ZOZNAM:</strong> ¬(A∧B)=¬A∨¬B; ¬(A∨B)=¬A∧¬B; ¬(A⇒B)=A∧¬B; A⇒B ⇔ ¬B⇒¬A; ¬∀P ⇔ ∃¬P; ¬∃P ⇔ ∀¬P; všeobecné tvrdenie vyvracia jeden protipríklad."
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Súvislosti",
        "question": "Ktorá dvojica pojmov patrí k výroku „pre každé x platí...“?",
        "options": [
          "existenčný kvantifikátor a príklad",
          "všeobecný kvantifikátor a možný protipríklad",
          "definícia a otázka"
        ],
        "answer": 1,
        "correct": "Všeobecné tvrdenie používa myšlienku „pre každé“ a na jeho vyvrátenie môže stačiť protipríklad.",
        "hint": "Spoj kvantifikátor s argumentáciou."
      },
      {
        "id": "extra-b",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Mapa celku",
        "prompt": "Napíš 3–4 vety, v ktorých prepojíš pojmy výrok, negácia, kvantifikátor a dôkaz.",
        "model": "Výrok má pravdivostnú hodnotu a jeho negácia má opačnú pravdivosť. Kvantifikátory určujú, či tvrdenie hovorí o všetkých alebo aspoň o jednom prvku. Všeobecné tvrdenie možno vyvrátiť protipríkladom; jeho platnosť treba zdôvodniť dôkazom."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Pred písomkou",
        "skills": [
          "výroky a negácia",
          "spojky a tabuľky",
          "De Morganove pravidlá",
          "implikácia a obmena",
          "kvantifikátory",
          "dôkazy a protipríklady"
        ],
        "prompt": "Pri každej položke vyber, ako dobre jej teraz rozumieš. Toto nie je známka; je to spätná väzba pre tvoje ďalšie učenie."
      }
    ]
  }
});
