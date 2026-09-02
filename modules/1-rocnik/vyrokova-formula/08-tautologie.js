MathPlatform.registerModule({
  "id": "1-u01-h008",
  "teacher": {
    "placement": "1. ročník · Výroková formula · 8. hodina: Tautológie",
    "prerequisites": [
      "pravdivostné tabuľky pre základné spojky"
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
      "rozlíšiť tautológiu, kontradikciu a kontingenciu podľa pravdivostnej tabuľky",
      "vytvoriť tabuľku jednoduchého zloženého výroku",
      "pochopiť, že tautologickosť je vlastnosť formy výroku, nie konkrétnej témy"
    ],
    "competencies": [
      "presné matematické vyjadrovanie",
      "argumentácia a zdôvodňovanie",
      "kritické posudzovanie tvrdení",
      "práca so symbolickým a slovným zápisom",
      "prehľadný pracovný a čistý zápis v zošite"
    ],
    "enrichment": [
      "Návrh štandardu pracuje s pravdivosťou zložených výrokov a reprezentáciou v tabuľke; aktuálny plán navyše explicitne obsahuje tautológie, kontradikcie a kontingencie."
    ],
    "flow": [
      "5 min: opakovanie tabuľky",
      "15–18 min: digitálna klasifikácia",
      "10 min: ručná tabuľka v zošite",
      "5 min: spoločná argumentácia"
    ],
    "diagnostics": [
      "vie čítať výsledný stĺpec tabuľky",
      "nepovažuje tautológiu za „veľmi pravdivú vetu“"
    ],
    "partialUse": [
      "Modul je možné použiť celý alebo len vybrané kroky podľa priebehu hodiny.",
      "Digitálna aktivita nenahrádza ručný zápis, diskusiu pri tabuli ani zdôvodnenie vlastnými slovami."
    ]
  },
  "student": {
    "title": "Vždy, nikdy, niekedy",
    "subtitle": "Téma 08 · Tautológie, kontradikcie a kontingencie",
    "intro": "Niektoré logické formy vyjdú pravdivé pri každom dosadení pravdivostných hodnôt. Iné nikdy. Rozhodne o tom tabuľka.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Pozri sa iba na výsledný stĺpec",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 740 260\" role=\"img\" aria-label=\"Porovnanie tautológie, kontradikcie a kontingencie\"><g font-family=\"system-ui\"><text x=\"30\" y=\"34\" font-size=\"16\" font-weight=\"700\">Výsledný stĺpec pravdivostnej tabuľky</text><g text-anchor=\"middle\"><rect x=\"35\" y=\"60\" width=\"190\" height=\"155\" rx=\"16\" fill=\"currentColor\" opacity=\".07\"/><text x=\"130\" y=\"88\" font-size=\"18\" font-weight=\"700\">TAUTOLÓGIA</text><text x=\"130\" y=\"125\" font-size=\"20\">P  P  P  P</text><text x=\"130\" y=\"165\" font-size=\"14\">pravdivá vždy</text><rect x=\"275\" y=\"60\" width=\"190\" height=\"155\" rx=\"16\" fill=\"currentColor\" opacity=\".07\"/><text x=\"370\" y=\"88\" font-size=\"18\" font-weight=\"700\">KONTRADIKCIA</text><text x=\"370\" y=\"125\" font-size=\"20\">N  N  N  N</text><text x=\"370\" y=\"165\" font-size=\"14\">nepravdivá vždy</text><rect x=\"515\" y=\"60\" width=\"190\" height=\"155\" rx=\"16\" fill=\"currentColor\" opacity=\".07\"/><text x=\"610\" y=\"88\" font-size=\"18\" font-weight=\"700\">KONTINGENCIA</text><text x=\"610\" y=\"125\" font-size=\"20\">P  N  P  N</text><text x=\"610\" y=\"165\" font-size=\"14\">závisí od A, B</text></g></g></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "t1",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "Tautológia",
        "question": "Aký typ výroku je A ∨ ¬A?",
        "options": [
          "tautológia",
          "kontradikcia",
          "kontingencia"
        ],
        "answer": 0,
        "correct": "Áno. Buď A platí, alebo neplatí; pri každej možnosti je disjunkcia pravdivá.",
        "hint": "Skús dva prípady: A=P a A=N."
      },
      {
        "id": "t2",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "Kontradikcia",
        "question": "Aký typ výroku je A ∧ ¬A?",
        "options": [
          "tautológia",
          "kontradikcia",
          "kontingencia"
        ],
        "answer": 1,
        "correct": "Správne. A a jeho negácia nemôžu byť pravdivé súčasne.",
        "hint": "Môže platiť tvrdenie aj jeho negácia naraz?"
      },
      {
        "id": "t3",
        "type": "choice",
        "phase": "PREMÝŠĽAJ",
        "skill": "Kontingencia",
        "question": "Výrok A ⇒ B má v tabuľke pravdivé aj nepravdivé riadky. Je teda:",
        "options": [
          "tautológia",
          "kontradikcia",
          "kontingencia"
        ],
        "answer": 2,
        "correct": "Áno. Jeho pravdivosť závisí od pravdivostných hodnôt A a B.",
        "hint": "Pozri definície troch typov."
      },
      {
        "id": "nb",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Over si tautológiu ručne",
        "html": "<p>Vytvor pravdivostnú tabuľku pre <strong>A ⇒ A</strong> a podľa výsledného stĺpca rozhodni, o aký typ výroku ide.</p>",
        "model": "<strong>VZOR:</strong> pri A=P je P⇒P pravdivé; pri A=N je N⇒N pravdivé. Výsledný stĺpec je P, P, preto ide o tautológiu."
      },
      {
        "id": "arg",
        "type": "selfWrite",
        "phase": "VYJADRI SA",
        "skill": "Argumentácia",
        "title": "Nie iba názov, ale dôvod",
        "promptHtml": "<span class=\"mini-label\">PRACOVNÝ ZÁPIS</span><br>Vysvetli jednou až dvoma vetami, prečo A ∨ ¬A musí byť vždy pravdivé.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Výrok A má vždy jednu z dvoch pravdivostných hodnôt. Ak je A pravdivý, disjunkcia platí cez A; ak je A nepravdivý, ¬A je pravdivý, takže disjunkcia opäť platí."
      },
      {
        "id": "transfer",
        "type": "choice",
        "phase": "PRENOS",
        "skill": "Testový formát",
        "question": "Ktorý výrok je kontradikcia?",
        "options": [
          "A ∨ ¬A",
          "A ⇒ A",
          "A ∧ ¬A",
          "A ⇔ A"
        ],
        "answer": 2,
        "correct": "Správne: A ∧ ¬A je vždy nepravdivý.",
        "hint": "Hľadaj formu, ktorá vyžaduje súčasne tvrdenie aj jeho negáciu."
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Tautológia",
        "question": "Ktorý výrokový tvar je pravdivý bez ohľadu na pravdivosť A?",
        "options": [
          "A ∧ ¬A",
          "A ∨ ¬A",
          "A ⇒ ¬A"
        ],
        "answer": 1,
        "correct": "A ∨ ¬A je tautológia. Jedna z dvojice A, ¬A musí byť pravdivá.",
        "hint": "Skús oba prípady: A je P a A je N."
      },
      {
        "id": "extra-b",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Kontradikcia",
        "question": "Výrokový tvar A ∧ ¬A je:",
        "options": [
          "tautológia",
          "kontradikcia",
          "vždy ekvivalencia"
        ],
        "answer": 1,
        "correct": "Nemôžu byť súčasne pravdivé A aj jeho negácia.",
        "hint": "Môže byť výrok a jeho negácia pravdivá naraz?"
      },
      {
        "id": "extra-c",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Ako to vieš bez hádania?",
        "prompt": "Napíš, ako by si pomocou pravdivostnej tabuľky overil/a, či je výrokový tvar tautológia.",
        "model": "Vypíšem všetky možné pravdivostné hodnoty jednoduchých výrokov a vypočítam posledný stĺpec. Ak je v každom riadku P, ide o tautológiu."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Klasifikácia výrokov",
        "skills": [
          "tautológia",
          "kontradikcia",
          "kontingencia",
          "pravdivostná tabuľka"
        ],
        "prompt": "Pri každej položke vyber, ako dobre jej teraz rozumieš. Toto nie je známka; je to spätná väzba pre tvoje ďalšie učenie."
      }
    ]
  }
});
