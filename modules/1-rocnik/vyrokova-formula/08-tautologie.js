MathPlatform.registerModule({
  "id": "1-u01-h008",
  "teacher": {
    "placement": "1. ročník · Výroková formula · 8. hodina: Tautológie",
    "prerequisites": [
      "pravdivostné tabuľky pre základné spojky",
      "negácia zložených výrokov (De Morgan) zo 6.–7. hodiny"
    ],
    "planContent": [
      "Relevantný obsah aktuálneho tematického plánu: Výroky a ich pravdivostná hodnota; jednoduchý výrok a jeho negácia; logické spojky; negácia zložených výrokov a de Morganove zákony; tautológie, kontradikcie a kontingencie; obmena, obrátenie a negácia implikácie; všeobecný a existenčný kvantifikátor; negácia kvantifikovaných výrokov; priamy, nepriamy dôkaz a dôkaz sporom; aplikácie výrokovej logiky; opakovanie a kontrolná písomná práca."
    ],
    "planPerformance": [
      "Určiť, či daná vetná konštrukcia je výrokom (vrátane všeobecného výroku vyjadreného bez použitia všeobecných kvantifikátorov).",
      "Vysvetliť de Morganove pravidlá pre negáciu výrokov A ∧ B a A ∨ B.",
      "Tvoriť zložené výroky a zistiť štruktúru a pravdivosť výrokov zložených z malého počtu jednoduchých výrokov pomocou logických spojok."
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
      "prehľadný zápis do zošita v zošite"
    ],
    "enrichment": [
      "Návrh štandardu pracuje s pravdivosťou zložených výrokov a reprezentáciou v tabuľke; aktuálny plán navyše explicitne obsahuje tautológie, kontradikcie a kontingencie."
    ],
    "flow": [
      "0–3 min: KDE SME – od negácie zložených výrokov k otázke, čo platí vždy alebo nikdy.",
      "3–8 min: NOVÝ POJEM – tautológia, kontradikcia, kontingencia na výslednom stĺpci tabuľky.",
      "8–24 min: OVER SI – objavovanie, zošit, argumentácia, prenos.",
      "24–35 min: ZBIERKA – klasifikácia formúl podľa troch úrovní náročnosti.",
      "35–38 min: ZHRNUTIE a sebahodnotenie."
    ],
    "diagnostics": [
      "vie čítať výsledný stĺpec tabuľky",
      "nepovažuje tautológiu za „veľmi pravdivú vetu“"
    ],
    "partialUse": [
      "Modul je navrhnutý na celú vyučovaciu hodinu; pri potrebe skrátiť možno vynechať jednu úroveň zbierky.",
      "Zbierkové úlohy sú nebodované, žiak si ich rieši na papieri (tabuľkou) a v aplikácii iba odfajkne.",
      "Digitálna aktivita nenahrádza ručný zápis, diskusiu pri tabuli ani zdôvodnenie vlastnými slovami."
    ]
  },
  "student": {
    "title": "Vždy, nikdy, niekedy",
    "subtitle": "Téma 08 · Tautológie, kontradikcie a kontingencie",
    "intro": "Niektoré logické formy vyjdú pravdivé pri každom dosadení pravdivostných hodnôt. Iné nikdy. Rozhodne o tom tabuľka.",
    "estimatedTime": "35–38 min (celá hodina)",
    "activities": [
      {
        "id": "kde-sme", "type": "info", "phase": "0 · KDE SME", "title": "Od negácie k vlastnosti celej formy",
        "html": "<p>Na predošlej hodine sme negovali zložené výroky. Dnes sa pozrieme na inú otázku: <strong>ako často vyjde zložený výrok pravdivý</strong>, ak vyskúšame všetky kombinácie pravdivostných hodnôt.</p><p class=\"keyidea\">Nepotrebuješ nič nové okrem tabuľky, ktorú už vieš zostrojiť.</p>",
        "continueLabel": "Idem na to"
      },
      {
        "id": "visual",
        "type": "info",
        "phase": "1 · POCHOP",
        "title": "Pozri sa iba na výsledný stĺpec",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 740 260\" role=\"img\" aria-label=\"Porovnanie tautológie, kontradikcie a kontingencie\"><g font-family=\"system-ui\"><text x=\"30\" y=\"34\" font-size=\"16\" font-weight=\"700\">Výsledný stĺpec pravdivostnej tabuľky</text><g text-anchor=\"middle\"><rect x=\"35\" y=\"60\" width=\"190\" height=\"155\" rx=\"16\" fill=\"currentColor\" opacity=\".07\"/><text x=\"130\" y=\"88\" font-size=\"18\" font-weight=\"700\">TAUTOLÓGIA</text><text x=\"130\" y=\"125\" font-size=\"20\">1  1  1  1</text><text x=\"130\" y=\"165\" font-size=\"14\">pravdivá vždy</text><rect x=\"275\" y=\"60\" width=\"190\" height=\"155\" rx=\"16\" fill=\"currentColor\" opacity=\".07\"/><text x=\"370\" y=\"88\" font-size=\"18\" font-weight=\"700\">KONTRADIKCIA</text><text x=\"370\" y=\"125\" font-size=\"20\">0  0  0  0</text><text x=\"370\" y=\"165\" font-size=\"14\">nepravdivá vždy</text><rect x=\"515\" y=\"60\" width=\"190\" height=\"155\" rx=\"16\" fill=\"currentColor\" opacity=\".07\"/><text x=\"610\" y=\"88\" font-size=\"18\" font-weight=\"700\">KONTINGENCIA</text><text x=\"610\" y=\"125\" font-size=\"20\">1  0  1  0</text><text x=\"610\" y=\"165\" font-size=\"14\">závisí od A, B</text></g></g></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "t1",
        "type": "choice",
        "phase": "3 · OBJAVUJ",
        "skill": "Tautológia",
        "question": "Aký typ výroku je A ∨ ¬A?",
        "options": [
          "kontingencia",
          "kontradikcia",
          "tautológia"
        ],
        "answer": 2,
        "correct": "Áno. Buď A platí, alebo neplatí; pri každej možnosti je disjunkcia pravdivá.",
        "hint": "Skús dva prípady: A=1 a A=0."
      },
      {
        "id": "t2",
        "type": "choice",
        "phase": "3 · OBJAVUJ",
        "skill": "Kontradikcia",
        "question": "Aký typ výroku je A ∧ ¬A?",
        "options": [
          "kontradikcia",
          "tautológia",
          "kontingencia"
        ],
        "answer": 0,
        "correct": "Správne. A a jeho negácia nemôžu byť pravdivé súčasne.",
        "hint": "Môže platiť tvrdenie aj jeho negácia naraz?"
      },
      {
        "id": "t3",
        "type": "choice",
        "phase": "3 · PREMÝŠĽAJ",
        "skill": "Kontingencia",
        "question": "Výrok A ⇒ B má v tabuľke pravdivé aj nepravdivé riadky. Je teda:",
        "options": [
          "tautológia",
          "kontingencia",
          "kontradikcia"
        ],
        "answer": 1,
        "correct": "Áno. Jeho pravdivosť závisí od pravdivostných hodnôt A a B.",
        "hint": "Pozri definície troch typov."
      },
      {
        "id": "nb",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Over si tautológiu ručne",
        "html": "<p>Vytvor pravdivostnú tabuľku pre <strong>A ⇒ A</strong> a podľa výsledného stĺpca rozhodni, o aký typ výroku ide.</p>",
        "model": "<strong>VZOR:</strong> pri A=1 je 1⇒1 pravdivé; pri A=0 je 0⇒0 pravdivé. Výsledný stĺpec je 1, 1, preto ide o tautológiu."
      },
      {
        "id": "arg",
        "type": "selfWrite",
        "phase": "3 · VYJADRI SA",
        "skill": "Argumentácia",
        "title": "Nie iba názov, ale dôvod",
        "promptHtml": "<span class=\"mini-label\">ÚLOHA DO ZOŠITA</span><br>Vysvetli jednou až dvoma vetami, prečo A ∨ ¬A musí byť vždy pravdivé.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Výrok A má vždy jednu z dvoch pravdivostných hodnôt. Ak je A pravdivý, disjunkcia platí cez A; ak je A nepravdivý, ¬A je pravdivý, takže disjunkcia opäť platí."
      },
      {
        "id": "transfer",
        "type": "choice",
        "phase": "3 · PRENOS",
        "skill": "Testový formát",
        "question": "Ktorý výrok je kontradikcia?",
        "options": [
          "A ∨ ¬A",
          "A ⇒ A",
          "A ⇔ A",
          "A ∧ ¬A"
        ],
        "answer": 3,
        "correct": "Správne: A ∧ ¬A je vždy nepravdivý.",
        "hint": "Hľadaj formu, ktorá vyžaduje súčasne tvrdenie aj jeho negáciu."
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "3 · OVER SI",
        "skill": "Tautológia",
        "question": "Ktorý výrokový tvar je pravdivý bez ohľadu na pravdivosť A?",
        "options": [
          "A ∧ ¬A",
          "A ⇒ ¬A",
          "A ∨ ¬A"
        ],
        "answer": 2,
        "correct": "A ∨ ¬A je tautológia. Jedna z dvojice A, ¬A musí byť pravdivá.",
        "hint": "Skús oba prípady: A je P a A je N."
      },
      {
        "id": "extra-b",
        "type": "choice",
        "phase": "3 · OVER SI",
        "skill": "Kontradikcia",
        "question": "Výrokový tvar A ∧ ¬A je:",
        "options": [
          "kontradikcia",
          "tautológia",
          "vždy ekvivalencia"
        ],
        "answer": 0,
        "correct": "Nemôžu byť súčasne pravdivé A aj jeho negácia.",
        "hint": "Môže byť výrok a jeho negácia pravdivá naraz?"
      },
      {
        "id": "extra-c",
        "type": "selfWrite",
        "phase": "3 · VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Ako to vieš bez hádania?",
        "prompt": "Napíš, ako by si pomocou pravdivostnej tabuľky overil/a, či je výrokový tvar tautológia.",
        "model": "Vypíšem všetky možné pravdivostné hodnoty jednoduchých výrokov a vypočítam posledný stĺpec. Ak je v každom riadku P, ide o tautológiu."
      },
      {
        "id": "zbierka", "type": "taskList", "phase": "4 · ZBIERKA", "skill": "Klasifikácia formy",
        "title": "Tautológia, kontradikcia alebo kontingencia?",
        "html": "<p class=\"muted\">Zostroj pravdivostnú tabuľku a rozhodni o type formy. Odfajkni si úlohu, keď máš hotovo — riešenie si over tlačidlom.</p>",
        "items": [
          { "level": "zaklad", "text": "A ⇔ A", "answer": "Tautológia. A=1: 1⇔1=1. A=0: 0⇔0=1 — výsledný stĺpec je vždy 1." },
          { "level": "zaklad", "text": "A ∨ A", "answer": "Kontingencia. Hodnota sa vždy rovná hodnote A (A=1→1, A=0→0), nie je teda konštantná." },
          { "level": "rozsirenie", "text": "(A ∧ B)' ⇔ (A' ∨ B')", "answer": "Tautológia — je to práve De Morganovo pravidlo, obe strany majú vo všetkých štyroch riadkoch rovnakú hodnotu." },
          { "level": "rozsirenie", "text": "(A ⇒ B) ⇔ (A' ∨ B)", "answer": "Tautológia — implikácia A⇒B má rovnakú pravdivostnú hodnotu ako A' ∨ B vo všetkých štyroch riadkoch." },
          { "level": "bonus", "text": "(A ∨ B) ∧ (A' ∧ B')", "answer": "Kontradikcia. Ak A ∨ B platí, aspoň jedno z A, B je 1, takže A' ∧ B' je 0 — súčin je vždy 0." },
          { "level": "bonus", "text": "(A ⇒ B)' ⇔ (A ∧ B')", "answer": "Tautológia — negácia implikácie A⇒B má vždy tvar A ∧ B' (implikácia zlyhá práve pri A pravdivom a B nepravdivom)." }
        ]
      },
      {
        "id": "zhrnutie", "type": "info", "phase": "5 · ZHRNUTIE", "title": "Čo si sa dnes naučil/a",
        "html": "<ul><li>Tautológia je pravdivá pri každej kombinácii hodnôt; kontradikcia nikdy; kontingencia niekedy áno, niekedy nie.</li><li>Typ formy zistíme z výsledného stĺpca pravdivostnej tabuľky, nie odhadom.</li><li>De Morganove pravidlá a negácia implikácie z minulej hodiny sú príklady tautológií.</li></ul>",
        "continueLabel": "Na záver sa zhodnotím"
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "5 · ZÁVER",
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
