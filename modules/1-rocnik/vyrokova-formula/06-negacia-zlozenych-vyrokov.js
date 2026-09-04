MathPlatform.registerModule({
  "id": "1-u01-h006",
  "teacher": {
    "placement": "1. ročník · Výroková formula · 6.–7. hodina: Negácia zložených výrokov",
    "prerequisites": [
      "logické spojky a ich pravdivostné tabuľky",
      "negácia jednoduchého výroku"
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
      "vytvoriť negáciu konjunkcie a disjunkcie",
      "vysvetliť de Morganove pravidlá na konkrétnom príklade",
      "správne negovať implikáciu",
      "overiť pravidlo pomocou pravdivostnej tabuľky"
    ],
    "competencies": [
      "presné matematické vyjadrovanie",
      "argumentácia a zdôvodňovanie",
      "kritické posudzovanie tvrdení",
      "práca so symbolickým a slovným zápisom",
      "prehľadný zápis do zošita v zošite"
    ],
    "enrichment": [
      "Návrh štandardu explicitne uvádza negáciu konjunkcie, disjunkcie (de Morganove pravidlá) a implikácie; obohatenie je najmä v argumentácii, prečo pravidlo funguje."
    ],
    "flow": [
      "1. hodina: objavenie De Morganových pravidiel cez situácie",
      "2. hodina: symbolický zápis, tabuľka a negácia implikácie",
      "ručný zápis a kontrola slovných formulácií"
    ],
    "diagnostics": [
      "nepoužíva nesprávne ¬(A∧B)=¬A∧¬B",
      "vie, že negácia implikácie je A∧¬B",
      "dokáže pravidlo overiť tabuľkou"
    ],
    "partialUse": [
      "Modul je možné použiť celý alebo len vybrané kroky podľa priebehu hodiny.",
      "Digitálna aktivita nenahrádza ručný zápis, diskusiu pri tabuli ani zdôvodnenie vlastnými slovami."
    ]
  },
  "student": {
    "title": "Keď negujeme celú vetu",
    "subtitle": "Téma 06–07 · De Morganove pravidlá a negácia implikácie",
    "intro": "Pri zloženom výroku nestačí pridať slovo „nie“. Negácia mení aj logickú spojku.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "visual",
        "type": "info",
        "phase": "ZAČÍNAME",
        "title": "Dve základné premeny",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 230\" role=\"img\" aria-label=\"De Morganove pravidlá\"><g font-family=\"system-ui\" text-anchor=\"middle\"><rect x=\"40\" y=\"30\" width=\"300\" height=\"70\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"190\" y=\"72\" font-size=\"25\" font-weight=\"700\">¬(A ∧ B)</text><text x=\"380\" y=\"74\" font-size=\"25\">⇔</text><rect x=\"420\" y=\"30\" width=\"300\" height=\"70\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"570\" y=\"72\" font-size=\"25\" font-weight=\"700\">¬A ∨ ¬B</text><rect x=\"40\" y=\"130\" width=\"300\" height=\"70\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"190\" y=\"172\" font-size=\"25\" font-weight=\"700\">¬(A ∨ B)</text><text x=\"380\" y=\"174\" font-size=\"25\">⇔</text><rect x=\"420\" y=\"130\" width=\"300\" height=\"70\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"570\" y=\"172\" font-size=\"25\" font-weight=\"700\">¬A ∧ ¬B</text></g></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "dm1",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "De Morgan",
        "question": "Neguj vetu: „Adam má pravítko a kružidlo.“",
        "options": [
          "Adam nemá pravítko a nemá kružidlo.",
          "Adam nemá pravítko alebo nemá kružidlo.",
          "Adam má pravítko alebo kružidlo."
        ],
        "answer": 1,
        "correct": "Áno. Aby neplatilo „má oboje“, stačí, že mu chýba aspoň jedna z vecí.",
        "hint": "Negácia „A a B“ znamená, že aspoň jedna časť neplatí."
      },
      {
        "id": "dm2",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "De Morgan",
        "question": "Neguj vetu: „x < 0 alebo x > 10“.",
        "options": [
          "x ≥ 0 alebo x ≤ 10",
          "x ≥ 0 a zároveň x ≤ 10",
          "x < 0 a zároveň x > 10"
        ],
        "answer": 1,
        "correct": "Správne. Aby neplatila ani jedna z možností, musia súčasne platiť obe negácie.",
        "hint": "Pri negácii disjunkcie sa „alebo“ mení na „a zároveň“."
      },
      {
        "id": "why",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Prečo sa spojka mení?",
        "html": "<p>De Morganove pravidlá nevznikli ako trik na zapamätanie. Vyjadrujú presne, kedy pôvodné zložené tvrdenie zlyhá.</p><p><strong>¬(A ∧ B)</strong>: nie je pravda, že platia obe → aspoň jedna neplatí.<br><strong>¬(A ∨ B)</strong>: neplatí ani jedna možnosť → neplatí A a zároveň neplatí B.</p>",
        "remember": "Neguj časti a vymeň ∧ ↔ ∨."
      },
      {
        "id": "impneg",
        "type": "choice",
        "phase": "PREMÝŠĽAJ",
        "skill": "Negácia implikácie",
        "question": "Kedy je veta „Ak A, tak B“ nepravdivá?",
        "options": [
          "Keď A neplatí a B platí.",
          "Keď A platí a B neplatí.",
          "Keď neplatia A ani B."
        ],
        "answer": 1,
        "correct": "Presne. Preto ¬(A ⇒ B) je A ∧ ¬B.",
        "hint": "Pozri jediný nepravdivý riadok implikácie v pravdivostnej tabuľke."
      },
      {
        "id": "nb",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Tri pravidlá, ktoré majú zmysel",
        "html": "<p><span class=\"mini-label\">ÚLOHA DO ZOŠITA</span><br>Skús bez pozerania zapísať negácie: ¬(A ∧ B), ¬(A ∨ B), ¬(A ⇒ B).</p><p>Potom odkry kontrolu.</p>",
        "model": "<strong>TOTO SI ZAPÍŠ DO ZOŠITA:</strong><br>¬(A ∧ B) ⇔ ¬A ∨ ¬B<br>¬(A ∨ B) ⇔ ¬A ∧ ¬B<br>¬(A ⇒ B) ⇔ A ∧ ¬B"
      },
      {
        "id": "check",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "Negácia zložených výrokov",
        "title": "Sú nasledujúce negácie správne?",
        "items": [
          {
            "text": "¬(A ∧ B) = ¬A ∨ ¬B",
            "answer": true,
            "why": "Je to De Morganovo pravidlo."
          },
          {
            "text": "¬(A ∨ B) = ¬A ∨ ¬B",
            "answer": false,
            "why": "Spojka sa musí zmeniť: správne je ¬A ∧ ¬B."
          },
          {
            "text": "¬(A ⇒ B) = A ∧ ¬B",
            "answer": true,
            "why": "Implikácia zlyhá práve pri A pravdivom a B nepravdivom."
          }
        ],
        "labels": [
          "SPRÁVNE",
          "NESPRÁVNE"
        ]
      },
      {
        "id": "lang",
        "type": "selfWrite",
        "phase": "VYJADRI SA",
        "skill": "Argumentácia",
        "title": "Vysvetli De Morganovo pravidlo",
        "promptHtml": "<span class=\"mini-label\">ÚLOHA DO ZOŠITA</span><br>Vlastnými slovami vysvetli, prečo negácia vety „Mám ceruzku a pravítko“ znie „Nemám ceruzku alebo nemám pravítko“.",
        "model": "<strong>MOŽNÁ PRESNÁ FORMULÁCIA:</strong> Pôvodná veta tvrdí, že mám obe veci. Je nepravdivá už vtedy, keď mi chýba aspoň jedna z nich, preto sa pri negácii spojka „a“ mení na „alebo“."
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Negácia zložených výrokov",
        "question": "Negácia výroku „x > 0 a x < 5“ je:",
        "options": [
          "x ≤ 0 a x ≥ 5",
          "x ≤ 0 alebo x ≥ 5",
          "x > 0 alebo x < 5"
        ],
        "answer": 1,
        "correct": "Správne. Pri negácii spojky „a“ sa objaví „alebo“ a negujú sa obe časti.",
        "hint": "Použi de Morganovo pravidlo."
      },
      {
        "id": "extra-b",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Povedz pravidlo slovami",
        "prompt": "Vysvetli vlastnými slovami, ako sa zmení spojka „a“ pri negácii zloženého výroku.",
        "model": "Negácia výroku „A a B“ má tvar „nie A alebo nie B“. Spojka „a“ sa pri negácii zmení na „alebo“ a negujú sa obe časti."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Negácia zložených výrokov",
        "skills": [
          "De Morgan pre konjunkciu",
          "De Morgan pre disjunkciu",
          "negácia implikácie",
          "viem pravidlo vysvetliť slovami"
        ],
        "prompt": "Pri každej položke vyber, ako dobre jej teraz rozumieš. Toto nie je známka; je to spätná väzba pre tvoje ďalšie učenie."
      }
    ]
  }
});
