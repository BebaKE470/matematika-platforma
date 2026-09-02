MathPlatform.registerModule({
  "id": "1-u01-h003",
  "teacher": {
    "placement": "1. ročník · Výroková formula · 3. hodina: Jednoduchý výrok a jeho negácia",
    "prerequisites": [
      "výrok a pravdivostná hodnota z predchádzajúcej hodiny"
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
      "určiť pravdivostnú hodnotu jednoduchého výroku",
      "vytvoriť správnu negáciu jednoduchého výroku",
      "rozlíšiť negáciu od vety s iným významom",
      "zapísať A a ¬A a vysvetliť vzťah ich pravdivosti"
    ],
    "competencies": [
      "presné matematické vyjadrovanie",
      "argumentácia a zdôvodňovanie",
      "kritické posudzovanie tvrdení",
      "práca so symbolickým a slovným zápisom",
      "prehľadný pracovný a čistý zápis v zošite"
    ],
    "enrichment": [
      "Návrh štandardu uvádza negáciu a pravdivosť negácie; modul navyše rozvíja presný prepis medzi slovným a symbolickým zápisom."
    ],
    "flow": [
      "5 min: opakovanie pojmu výrok",
      "15–20 min: digitálny modul",
      "10 min: ručná tvorba negácií v zošite",
      "5 min: spoločná kontrola formulácií"
    ],
    "diagnostics": [
      "nevytvára príliš silnú alebo príliš slabú negáciu",
      "chápe, že A a ¬A majú opačnú pravdivostnú hodnotu"
    ],
    "partialUse": [
      "Modul je možné použiť celý alebo len vybrané kroky podľa priebehu hodiny.",
      "Digitálna aktivita nenahrádza ručný zápis, diskusiu pri tabuli ani zdôvodnenie vlastnými slovami."
    ]
  },
  "student": {
    "title": "Negácia bez hádania",
    "subtitle": "Téma 03 · Jednoduchý výrok a jeho negácia",
    "intro": "Negácia nie je „veta, ktorá znie opačne“. Musí presne poprieť pôvodné tvrdenie.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Negácia preklápa pravdivosť",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 650 180\" role=\"img\" aria-label=\"Negácia mení pravdivostnú hodnotu\"><g font-family=\"system-ui\" text-anchor=\"middle\"><rect x=\"35\" y=\"40\" width=\"220\" height=\"90\" rx=\"18\" fill=\"currentColor\" opacity=\".08\"/><text x=\"145\" y=\"76\" font-size=\"20\" font-weight=\"700\">A</text><text x=\"145\" y=\"105\" font-size=\"17\">P</text><path d=\"M275 85 H375\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"325\" y=\"65\" font-size=\"17\">negácia</text><rect x=\"395\" y=\"40\" width=\"220\" height=\"90\" rx=\"18\" fill=\"currentColor\" opacity=\".08\"/><text x=\"505\" y=\"76\" font-size=\"20\" font-weight=\"700\">¬A</text><text x=\"505\" y=\"105\" font-size=\"17\">N</text></g></svg></div>",
        "continueLabel": "Ako sa negácia zapisuje?"
      },
      {
        "id": "symbol",
        "type": "explain",
        "phase": "NOVÝ ZÁPIS",
        "title": "Značka ¬ znamená negáciu",
        "html": "<p>Ak pôvodný výrok označíme písmenom <strong>A</strong>, jeho negáciu zapisujeme <strong>¬A</strong> a čítame <strong>negácia výroku A</strong> alebo <strong>nie A</strong>.</p><p>Symbol <strong>¬</strong> od tejto chvíle používame vždy iba v tomto význame.</p>",
        "remember": "A = pôvodný výrok; ¬A = jeho negácia."
      },
      {
        "id": "n1",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "Negácia",
        "question": "Ktorá veta je negáciou výroku „Číslo 18 je párne.“?",
        "options": [
          "Číslo 18 je nepárne.",
          "Číslo 18 nie je párne.",
          "Číslo 18 je prvočíslo."
        ],
        "answer": 1,
        "correct": "Presne. Negácia priamo popiera pôvodné tvrdenie.",
        "hint": "Hľadaj vetu, ktorá je pravdivá práve vtedy, keď pôvodná veta nie je."
      },
      {
        "id": "n2",
        "type": "choice",
        "phase": "PREMÝŠĽAJ",
        "skill": "Negácia",
        "question": "Negáciou výroku „Peter má viac ako 170 cm“ je:",
        "options": [
          "Peter má menej ako 170 cm.",
          "Peter má najviac 170 cm.",
          "Peter má presne 170 cm."
        ],
        "answer": 1,
        "correct": "Áno. „Nie viac ako 170“ znamená najviac 170 cm.",
        "hint": "Nezabudni zahrnúť aj hraničný prípad 170 cm."
      },
      {
        "id": "rule",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Negácia musí pokryť všetky ostatné možnosti",
        "html": "<p>Ak <strong>A</strong> znamená „x &gt; 5“, potom <strong>¬A</strong> znamená „x ≤ 5“.</p><p>Všimni si hranicu. Veta „x &lt; 5“ by vynechala prípad x = 5, preto nie je presnou negáciou.</p>",
        "remember": "Pri nerovnostiach kontroluj aj hraničný bod."
      },
      {
        "id": "sort",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "Negácia",
        "title": "Je druhá veta presnou negáciou prvej?",
        "items": [
          {
            "text": "A: x > 2; druhá veta: x ≤ 2",
            "answer": true,
            "why": "Áno, pokrýva všetky prípady, keď x > 2 neplatí."
          },
          {
            "text": "A: n je párne; druhá veta: n je nepárne (pre celé n)",
            "answer": true,
            "why": "Pre celé číslo sú tieto možnosti navzájom doplnkové."
          },
          {
            "text": "A: teplota je aspoň 10 °C; druhá veta: teplota je pod 9 °C",
            "answer": false,
            "why": "Chýbajú hodnoty od 9 °C vrátane do 10 °C."
          }
        ],
        "labels": [
          "ÁNO",
          "NIE"
        ]
      },
      {
        "id": "nb",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Presný zápis negácie",
        "html": "<p><span class=\"mini-label\">ČISTÝ ZÁPIS – TEÓRIA</span><br>Zapíš symbol <strong>¬A</strong> a vetu, čo znamená negácia výroku.</p><p><span class=\"mini-label\">ÚLOHA</span><br>Neguj: a) x ≥ 7, b) n je deliteľné 3, c) úsečka AB má dĺžku 5 cm.</p>",
        "model": "<strong>ČISTÝ ZÁPIS:</strong> Negácia ¬A je výrok, ktorý je pravdivý práve vtedy, keď A je nepravdivý. Príklady: a) x &lt; 7; b) n nie je deliteľné 3; c) úsečka AB nemá dĺžku 5 cm."
      },
      {
        "id": "transfer",
        "type": "choice",
        "phase": "PRENOS",
        "skill": "Testový formát",
        "question": "Výrok A: „x < 4“. Ktorý zápis vyjadruje ¬A?",
        "options": [
          "x > 4",
          "x ≥ 4",
          "x ≤ 4",
          "x = 4"
        ],
        "answer": 1,
        "correct": "Správne: negáciou x < 4 je x ≥ 4.",
        "hint": "Mysli aj na x = 4."
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Negácia",
        "question": "Negáciou výroku „a ≤ 6“ je:",
        "options": [
          "a < 6",
          "a > 6",
          "a ≥ 6"
        ],
        "answer": 1,
        "correct": "Správne. Neplatí a ≤ 6 práve vtedy, keď a > 6.",
        "hint": "Skontroluj hraničnú hodnotu 6."
      },
      {
        "id": "extra-b",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Prečo nestačí iba zmeniť znamienko?",
        "prompt": "Vysvetli na príklade x > 3, prečo veta x < 3 nie je jeho presnou negáciou.",
        "model": "Veta x < 3 vynecháva možnosť x = 3. Presná negácia výroku x > 3 je x ≤ 3."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Čo už viem",
        "skills": [
          "určiť pravdivosť jednoduchého výroku",
          "vytvoriť presnú negáciu",
          "správne negovať nerovnosť"
        ],
        "prompt": "Pri každej položke vyber, ako dobre jej teraz rozumieš. Toto nie je známka; je to spätná väzba pre tvoje ďalšie učenie."
      }
    ]
  }
});
