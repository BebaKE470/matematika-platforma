MathPlatform.registerModule({
  "id": "1-u01-h015",
  "teacher": {
    "placement": "1. ročník · Výroková formula · 15. hodina: Kontrolná písomná práca",
    "prerequisites": [
      "zvládnutie tematického celku Výroková formula"
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
      "overiť vedomosti a zručnosti samostatnou písomnou prácou",
      "pred začiatkom si skontrolovať pripravenosť a pravidlá práce",
      "po práci pomenovať, ktoré typy úloh boli isté a ktoré treba opraviť"
    ],
    "competencies": [
      "presné matematické vyjadrovanie",
      "argumentácia a zdôvodňovanie",
      "kritické posudzovanie tvrdení",
      "práca so symbolickým a slovným zápisom",
      "prehľadný zápis do zošita v zošite"
    ],
    "enrichment": [
      "Digitálny modul tu nie je náhradou písomnej práce. Zásada platformy: nie každá hodina musí byť digitálna; hodnotenie má overiť aj samostatný ručný zápis a argumentáciu."
    ],
    "flow": [
      "3–5 min: voliteľná orientačná rozcvička",
      "hlavná časť hodiny: kontrolná písomná práca na papieri podľa učiteľa",
      "po odovzdaní: krátka reflexia bez riešenia testu v aplikácii"
    ],
    "diagnostics": [
      "pripravenosť",
      "samostatnosť",
      "presný ručný zápis"
    ],
    "partialUse": [
      "Modul je možné použiť celý alebo len vybrané kroky podľa priebehu hodiny.",
      "Digitálna aktivita nenahrádza ručný zápis, diskusiu pri tabuli ani zdôvodnenie vlastnými slovami."
    ]
  },
  "student": {
    "title": "Kontrolná práca",
    "subtitle": "Téma 15 · Výroková logika",
    "intro": "Dnes je hlavnou úlohou samostatná písomná práca. Aplikácia môže slúžiť iba ako krátke naladenie; potom ju odlož.",
    "estimatedTime": "4–6 min",
    "activities": [
      {
        "id": "off",
        "type": "info",
        "phase": "ZAČÍNAME",
        "title": "Dnes rozhoduje tvoja vlastná práca",
        "html": "<p>Pred kontrolnou prácou si skontroluj pomôcky a pokyny učiteľa. Počas písomnej práce pracuj <strong>bez digitálnej pomoci</strong>, ak učiteľ neurčí inak.</p><p class=\"keyidea\">Presný zápis, postup a krátke zdôvodnenie sú súčasť matematiky – nie iba správna možnosť A/B/C/D.</p>",
        "continueLabel": "Krátka rozcvička"
      },
      {
        "id": "warm1",
        "type": "choice",
        "phase": "ROZCVIČKA",
        "skill": "Negácia",
        "question": "Negácia x≥5 je:",
        "options": [
          "x>5",
          "x<5",
          "x≤5"
        ],
        "answer": 1,
        "correct": "Správne.",
        "hint": "Negácia musí pokryť všetky prípady, keď x≥5 neplatí."
      },
      {
        "id": "warm2",
        "type": "choice",
        "phase": "ROZCVIČKA",
        "skill": "Implikácia",
        "question": "A⇒B je nepravdivá v prípade:",
        "options": [
          "A=P, B=N",
          "A=N, B=P",
          "A=N, B=N"
        ],
        "answer": 0,
        "correct": "Správne.",
        "hint": "Jediný nepravdivý riadok implikácie."
      },
      {
        "id": "putaway",
        "type": "info",
        "phase": "PÍSOMKA",
        "title": "Teraz zariadenie odlož",
        "html": "<p>Digitálna časť končí. Pokračuj podľa pokynov učiteľa na papieri.</p><p class=\"muted\">Výsledok týchto dvoch rozcvičkových úloh nie je výsledok kontrolnej písomnej práce.</p>",
        "continueLabel": "Po odovzdaní pokračovať"
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Po odovzdaní – krátka sebareflexia",
        "skills": [
          "rozumel/a som zadaniam",
          "vedel/a som pracovať s negáciou a spojkami",
          "zvládol/a som kvantifikátory",
          "vedel/a som zdôvodniť svoje riešenie"
        ],
        "prompt": "Pri každej položke vyber, ako dobre jej teraz rozumieš. Toto nie je známka; je to spätná väzba pre tvoje ďalšie učenie."
      }
    ]
  }
});
