MathPlatform.registerModule({
  "id": "1-u01-h009",
  "teacher": {
    "placement": "1. ročník · Výroková formula · 9. hodina: Obmena, obrátenie, negácia implikácie",
    "prerequisites": [
      "implikácia a jej pravdivosť",
      "negácia jednoduchého a zloženého výroku"
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
      "vytvoriť obrátenú implikáciu",
      "vytvoriť obmenu implikácie",
      "vysvetliť, že implikácia je ekvivalentná so svojou obmenou, nie všeobecne s obrátenou implikáciou",
      "správne vytvoriť negáciu implikácie"
    ],
    "competencies": [
      "presné matematické vyjadrovanie",
      "argumentácia a zdôvodňovanie",
      "kritické posudzovanie tvrdení",
      "práca so symbolickým a slovným zápisom",
      "prehľadný zápis do zošita v zošite"
    ],
    "enrichment": [
      "Návrh štandardu uvádza obmenu a obrátenú implikáciu aj ekvivalenciu A⇒B s ¬B⇒¬A; modul túto väzbu používa bez posúvania poradia učiva."
    ],
    "flow": [
      "5 min: situácia s deliteľnosťou",
      "15–20 min: vizuál a digitálne úlohy",
      "10 min: vlastné prepisy v zošite",
      "5 min: spoločný záver"
    ],
    "diagnostics": [
      "nezamieňa obmenu s obrátením",
      "chápe ekvivalenciu implikácie a obmeny",
      "správne neguje implikáciu"
    ],
    "partialUse": [
      "Modul je možné použiť celý alebo len vybrané kroky podľa priebehu hodiny.",
      "Digitálna aktivita nenahrádza ručný zápis, diskusiu pri tabuli ani zdôvodnenie vlastnými slovami."
    ]
  },
  "student": {
    "title": "Štyri vety z jednej implikácie",
    "subtitle": "Téma 09 · Obrátenie, obmena a negácia",
    "intro": "Z jednej implikácie môžeme vytvoriť viac príbuzných viet. Nie všetky však majú rovnakú pravdivosť.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "visual",
        "type": "info",
        "phase": "ZAČÍNAME",
        "title": "Mapa príbuzných viet",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 260\" role=\"img\" aria-label=\"Implikácia, obrátenie, obmena a negácia\"><g font-family=\"system-ui\" text-anchor=\"middle\"><rect x=\"250\" y=\"25\" width=\"260\" height=\"55\" rx=\"14\" fill=\"currentColor\" opacity=\".08\"/><text x=\"380\" y=\"60\" font-size=\"24\" font-weight=\"700\">A ⇒ B</text><text x=\"380\" y=\"104\" font-size=\"14\">pôvodná implikácia</text><path d=\"M380 115 V145 M380 145 H145 M380 145 H615\" stroke=\"currentColor\" stroke-width=\"3\" fill=\"none\"/><rect x=\"40\" y=\"165\" width=\"210\" height=\"62\" rx=\"14\" fill=\"currentColor\" opacity=\".08\"/><text x=\"145\" y=\"192\" font-size=\"20\" font-weight=\"700\">B ⇒ A</text><text x=\"145\" y=\"214\" font-size=\"13\">obrátená</text><rect x=\"275\" y=\"165\" width=\"210\" height=\"62\" rx=\"14\" fill=\"currentColor\" opacity=\".08\"/><text x=\"380\" y=\"192\" font-size=\"20\" font-weight=\"700\">¬B ⇒ ¬A</text><text x=\"380\" y=\"214\" font-size=\"13\">obmena</text><rect x=\"510\" y=\"165\" width=\"210\" height=\"62\" rx=\"14\" fill=\"currentColor\" opacity=\".08\"/><text x=\"615\" y=\"192\" font-size=\"20\" font-weight=\"700\">A ∧ ¬B</text><text x=\"615\" y=\"214\" font-size=\"13\">negácia implikácie</text></g></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "rev",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "Obrátená implikácia",
        "question": "Pôvodná veta: „Ak je číslo deliteľné 4, potom je párne.“ Ktorá je obrátená?",
        "options": [
          "Ak číslo nie je párne, nie je deliteľné 4.",
          "Ak je číslo párne, potom je deliteľné 4.",
          "Číslo je deliteľné 4 a nie je párne."
        ],
        "answer": 1,
        "correct": "Áno. Pri obrátení si vymenia miesto predpoklad a záver.",
        "hint": "Obrátenie = B ⇒ A."
      },
      {
        "id": "contra",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "Obmena",
        "question": "Ktorá veta je obmenou pôvodnej implikácie?",
        "options": [
          "Ak číslo nie je párne, potom nie je deliteľné 4.",
          "Ak je číslo párne, potom je deliteľné 4.",
          "Ak číslo nie je deliteľné 4, potom nie je párne."
        ],
        "answer": 0,
        "correct": "Správne. Obmena má tvar ¬B ⇒ ¬A.",
        "hint": "Neguj záver aj predpoklad a obráť poradie."
      },
      {
        "id": "equiv",
        "type": "choice",
        "phase": "PREMÝŠĽAJ",
        "skill": "Ekvivalencia implikácie",
        "question": "Pôvodná implikácia je vždy logicky ekvivalentná s:",
        "options": [
          "obrátenou implikáciou",
          "obmenou implikácie",
          "svojou negáciou"
        ],
        "answer": 1,
        "correct": "Áno. A ⇒ B a ¬B ⇒ ¬A majú rovnaké pravdivostné hodnoty.",
        "hint": "Porovnaj pravdivostné tabuľky."
      },
      {
        "id": "neg",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Negácia implikácie",
        "question": "Negácia „Ak je číslo deliteľné 4, potom je párne“ je:",
        "options": [
          "Číslo je deliteľné 4 a nie je párne.",
          "Číslo nie je deliteľné 4 a je párne.",
          "Ak je číslo párne, je deliteľné 4."
        ],
        "answer": 0,
        "correct": "Správne. Negácia A⇒B je A∧¬B.",
        "hint": "Kedy by pôvodná veta zlyhala?"
      },
      {
        "id": "nb",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Štyri tvary vedľa seba",
        "html": "<p>Pre vetu <strong>Ak je n deliteľné 6, potom je n deliteľné 3</strong> zapíš: pôvodnú implikáciu, obrátenú, obmenu a negáciu. Pri každej rozhodni, či je pravdivá.</p>",
        "model": "<strong>VZOR:</strong> pôvodná: 6|n ⇒ 3|n (P); obrátená: 3|n ⇒ 6|n (N, napr. n=9); obmena: 3∤n ⇒ 6∤n (P); negácia: 6|n ∧ 3∤n (nepravdivé tvrdenie)."
      },
      {
        "id": "arg",
        "type": "selfWrite",
        "phase": "VYJADRI SA",
        "skill": "Argumentácia",
        "title": "Prečo obrátená veta nemusí platiť?",
        "promptHtml": "<span class=\"mini-label\">ÚLOHA DO ZOŠITA</span><br>Vysvetli na príklade s deliteľnosťou 4 a párnosťou, prečo pravdivosť A ⇒ B nestačí na pravdivosť B ⇒ A.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Každé číslo deliteľné 4 je párne, ale párnosť je slabšia podmienka. Napríklad 6 je párne, no nie je deliteľné 4, takže obrátená implikácia neplatí."
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Implikácia",
        "question": "K výroku „Ak je číslo deliteľné 4, potom je párne“ je obrátený výrok:",
        "options": [
          "Ak je číslo párne, potom je deliteľné 4.",
          "Ak číslo nie je párne, nie je deliteľné 4.",
          "Číslo je deliteľné 4 a párne."
        ],
        "answer": 0,
        "correct": "Obrátený výrok vymení predpoklad a záver.",
        "hint": "Vymeň poradie častí implikácie."
      },
      {
        "id": "extra-b",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Implikácia",
        "question": "Obmena výroku A ⇒ B má tvar:",
        "options": [
          "B ⇒ A",
          "¬A ⇒ ¬B",
          "¬B ⇒ ¬A"
        ],
        "answer": 2,
        "correct": "Správne. Obmena neguje obe časti a zároveň ich vymení.",
        "hint": "Najprv si pomenuj predpoklad A a záver B."
      },
      {
        "id": "extra-c",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Prečo obrátenie nemusí platiť?",
        "prompt": "Na príklade deliteľnosti 4 a párnosti vysvetli, prečo pravdivosť pôvodnej implikácie nezaručuje pravdivosť obrátenej.",
        "model": "Každé číslo deliteľné 4 je párne, ale nie každé párne číslo je deliteľné 4; napríklad 6. Preto obrátená implikácia nemusí byť pravdivá."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Implikácia bez zámen",
        "skills": [
          "obrátená implikácia",
          "obmena implikácie",
          "negácia implikácie",
          "ekvivalencia implikácie a obmeny"
        ],
        "prompt": "Pri každej položke vyber, ako dobre jej teraz rozumieš. Toto nie je známka; je to spätná väzba pre tvoje ďalšie učenie."
      }
    ]
  }
});
