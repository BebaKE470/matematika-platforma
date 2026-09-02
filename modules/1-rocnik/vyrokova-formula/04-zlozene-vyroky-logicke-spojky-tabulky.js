MathPlatform.registerModule({
  "id": "1-u01-h004",
  "teacher": {
    "placement": "1. ročník · Výroková formula · 4.–5. hodina: Zložené výroky, logické spojky, tabuľky",
    "prerequisites": [
      "jednoduchý výrok, pravdivostná hodnota a negácia"
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
      "rozpoznať konjunkciu, disjunkciu, implikáciu a ekvivalenciu",
      "rozlíšiť vylučovacie a nevylučovacie „alebo“ v konkrétnom kontexte",
      "určiť pravdivosť zloženého výroku s najviac dvoma spojkami",
      "zostaviť a čítať jednoduchú pravdivostnú tabuľku"
    ],
    "competencies": [
      "presné matematické vyjadrovanie",
      "argumentácia a zdôvodňovanie",
      "kritické posudzovanie tvrdení",
      "práca so symbolickým a slovným zápisom",
      "prehľadný pracovný a čistý zápis v zošite"
    ],
    "enrichment": [
      "Návrh štandardu uvádza spojky, pravdivosť zložených výrokov, symbolický zápis a pravdivostné tabuľky; modul ich využíva ako prirodzené obohatenie aktuálnej témy."
    ],
    "flow": [
      "1. hodina: význam spojok a jazykové situácie",
      "2. hodina: pravdivostné tabuľky a prenos do úloh",
      "v každej hodine 8–10 min ručný zápis/tabuľka v zošite"
    ],
    "diagnostics": [
      "nepletie si implikáciu s ekvivalenciou",
      "vie, kedy je konjunkcia/disjunkcia pravdivá",
      "rozumie rôznym významom „alebo“"
    ],
    "partialUse": [
      "Modul je možné použiť celý alebo len vybrané kroky podľa priebehu hodiny.",
      "Digitálna aktivita nenahrádza ručný zápis, diskusiu pri tabuli ani zdôvodnenie vlastnými slovami."
    ]
  },
  "student": {
    "title": "Spojky pod kontrolou",
    "subtitle": "Téma 04–05 · Zložené výroky a pravdivostné tabuľky",
    "intro": "Dva jednoduché výroky môžeme spojiť do nového tvrdenia. Rozhodujúce je nielen slovo medzi nimi, ale jeho presný logický význam.",
    "estimatedTime": "18–22 min",
    "activities": [
      {
        "id": "map",
        "type": "info",
        "phase": "ZAČÍNAME",
        "title": "Nové značky pre štyri logické spojenia",
        "html": "<p>Najprv si zaveďme značky a ich čítanie. <strong>∧</strong> znamená „a zároveň“, <strong>∨</strong> znamená nevylučovacie „alebo“, <strong>⇒</strong> čítame „ak..., tak...“ a <strong>⇔</strong> čítame „práve vtedy, keď“.</p><p class=\"muted\">Značky ešte nepočítajú za nás. Pri každej sa postupne naučíme, kedy je celý zložený výrok pravdivý.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 780 245\" role=\"img\" aria-label=\"Štyri logické spojky\"><g font-family=\"system-ui\" text-anchor=\"middle\"><g><rect x=\"25\" y=\"30\" width=\"160\" height=\"78\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"105\" y=\"60\" font-size=\"24\" font-weight=\"700\">A ∧ B</text><text x=\"105\" y=\"86\" font-size=\"14\">A a zároveň B</text></g><g><rect x=\"215\" y=\"30\" width=\"160\" height=\"78\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"295\" y=\"60\" font-size=\"24\" font-weight=\"700\">A ∨ B</text><text x=\"295\" y=\"86\" font-size=\"14\">A alebo B</text></g><g><rect x=\"405\" y=\"30\" width=\"160\" height=\"78\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"485\" y=\"60\" font-size=\"24\" font-weight=\"700\">A ⇒ B</text><text x=\"485\" y=\"86\" font-size=\"14\">ak A, tak B</text></g><g><rect x=\"595\" y=\"30\" width=\"160\" height=\"78\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"675\" y=\"60\" font-size=\"24\" font-weight=\"700\">A ⇔ B</text><text x=\"675\" y=\"86\" font-size=\"14\">práve vtedy, keď</text></g><text x=\"390\" y=\"165\" font-size=\"18\" font-weight=\"700\">Najprv urči pravdivosť A a B. Potom použi pravidlo spojky.</text><text x=\"390\" y=\"197\" font-size=\"15\">Tabuľka pravdivostných hodnôt je prehľadný spôsob, ako skontrolovať všetky prípady.</text></g></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "and",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "Konjunkcia",
        "question": "A: „12 je párne.“ B: „12 je deliteľné tromi.“ Je A ∧ B pravdivé?",
        "options": [
          "Áno",
          "Nie"
        ],
        "answer": 0,
        "correct": "Áno. Obe časti sú pravdivé, preto je konjunkcia pravdivá.",
        "hint": "Pri „a zároveň“ musia platiť obe časti."
      },
      {
        "id": "or",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "Disjunkcia",
        "question": "A: „15 je párne.“ B: „15 je deliteľné tromi.“ Je A ∨ B pravdivé pri nevylučovacom „alebo“?",
        "options": [
          "Áno",
          "Nie"
        ],
        "answer": 0,
        "correct": "Áno. Pri nevylučovacom „alebo“ stačí, aby platila aspoň jedna časť.",
        "hint": "Stačí jedna pravdivá časť."
      },
      {
        "id": "eitheror",
        "type": "choice",
        "phase": "PREMÝŠĽAJ",
        "skill": "Vylučovacie alebo",
        "question": "Veta „Číslo je kladné alebo záporné“ (pri nenulovom reálnom čísle) používa „alebo“ skôr ako:",
        "options": [
          "nevylučovacie – môžu platiť obe možnosti",
          "vylučovacie – platí práve jedna možnosť"
        ],
        "answer": 1,
        "correct": "Správne. Nenulové reálne číslo nemôže byť súčasne kladné aj záporné.",
        "hint": "Môžu obe možnosti platiť naraz?"
      },
      {
        "id": "imp",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Implikácia nie je obojstranné tvrdenie",
        "html": "<p><strong>A ⇒ B</strong> čítame „ak A, tak B“. Nehovorí automaticky, že z B vyplýva A.</p><p>Príklad: „Ak je číslo deliteľné 4, potom je párne.“ je pravdivé. Obrátená veta „Ak je číslo párne, potom je deliteľné 4“ pravdivá nie je.</p>",
        "remember": "Implikácia A ⇒ B a obrátená implikácia B ⇒ A sú dve rôzne tvrdenia."
      },
      {
        "id": "eq",
        "type": "choice",
        "phase": "POCHOP",
        "skill": "Ekvivalencia",
        "question": "Ktorý opis najlepšie vystihuje A ⇔ B?",
        "options": [
          "Platí iba A ⇒ B.",
          "Platia obe implikácie A ⇒ B aj B ⇒ A.",
          "A a B musia byť vždy nepravdivé."
        ],
        "answer": 1,
        "correct": "Áno. Ekvivalencia znamená obojstrannú podmienku.",
        "hint": "„Práve vtedy, keď“ znamená dva smery."
      },
      {
        "id": "table",
        "type": "info",
        "phase": "TABUĽKA",
        "title": "Ako čítať pravdivostnú tabuľku",
        "html": "<div class=\"table-wrap\"><table class=\"truth\"><tr><th>A</th><th>B</th><th>A ∧ B</th><th>A ∨ B</th><th>A ⇒ B</th><th>A ⇔ B</th></tr><tr><td>P</td><td>P</td><td>P</td><td>P</td><td>P</td><td>P</td></tr><tr><td>P</td><td>N</td><td>N</td><td>P</td><td>N</td><td>N</td></tr><tr><td>N</td><td>P</td><td>N</td><td>P</td><td>P</td><td>N</td></tr><tr><td>N</td><td>N</td><td>N</td><td>N</td><td>P</td><td>P</td></tr></table></div><p class=\"muted\">Najviac pozornosti si vyžaduje implikácia: nepravdivá je iba v prípade P ⇒ N.</p>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "nb",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Tabuľku si vytvor ručne",
        "html": "<p><span class=\"mini-label\">ČISTÝ ZÁPIS</span><br>Do zošita vytvor tabuľku pre A, B, A ∧ B, A ∨ B, A ⇒ B, A ⇔ B. Neprepisuj obrazovku mechanicky – skús stĺpce najprv doplniť bez pozerania.</p>",
        "model": "<strong>KONTROLA:</strong> poradie riadkov PP, PN, NP, NN. Konjunkcia P iba pri PP; disjunkcia N iba pri NN; implikácia N iba pri PN; ekvivalencia P pri rovnakých pravdivostných hodnotách."
      },
      {
        "id": "mix",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "Spojky",
        "title": "Ktorá spojka je použitá?",
        "labels": [
          "konjunkcia",
          "disjunkcia",
          "implikácia",
          "ekvivalencia"
        ],
        "items": [
          {
            "text": "x > 0 a zároveň x < 5",
            "answer": "konjunkcia"
          },
          {
            "text": "ak n je deliteľné 6, potom je deliteľné 3",
            "answer": "implikácia"
          },
          {
            "text": "n je párne práve vtedy, keď n = 2k pre nejaké celé k",
            "answer": "ekvivalencia"
          },
          {
            "text": "x ≤ 0 alebo x ≥ 10",
            "answer": "disjunkcia"
          }
        ]
      },
      {
        "id": "transfer",
        "type": "choice",
        "phase": "PRENOS",
        "skill": "Testový formát",
        "question": "A je pravdivý, B je nepravdivý. Ktorý z výrokov je pravdivý?",
        "options": [
          "A ∧ B",
          "A ⇒ B",
          "A ∨ B",
          "A ⇔ B"
        ],
        "answer": 2,
        "correct": "Pri P, N je disjunkcia pravdivá, ostatné uvedené možnosti nie.",
        "hint": "Pozri riadok P, N."
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Logické spojky",
        "question": "Kedy je výrok A ∧ B pravdivý?",
        "options": [
          "Keď je pravdivý aspoň jeden",
          "Iba keď sú pravdivé oba",
          "Keď majú rôznu pravdivosť"
        ],
        "answer": 1,
        "correct": "Konjunkcia je pravdivá iba v prípade P, P.",
        "hint": "Spomeň si na význam spojky „a“."
      },
      {
        "id": "extra-b",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Logické spojky",
        "question": "Pri nevylučovacom „alebo“ je A ∨ B nepravdivé práve vtedy, keď:",
        "options": [
          "A aj B sú nepravdivé",
          "A aj B sú pravdivé",
          "presne jeden je pravdivý"
        ],
        "answer": 0,
        "correct": "Áno. Nevylučovacie „alebo“ pripúšťa aj pravdivosť oboch výrokov.",
        "hint": "Hľadaj jediný prípad, keď neplatí ani jedna možnosť."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako sa orientujem v spojkách",
        "skills": [
          "konjunkcia",
          "disjunkcia",
          "implikácia",
          "ekvivalencia",
          "pravdivostná tabuľka"
        ],
        "prompt": "Pri každej položke vyber, ako dobre jej teraz rozumieš. Toto nie je známka; je to spätná väzba pre tvoje ďalšie učenie."
      }
    ]
  }
});
