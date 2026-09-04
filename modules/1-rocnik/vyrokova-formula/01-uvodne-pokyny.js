MathPlatform.registerModule({
  "id": "1-u01-h001",
  "teacher": {
    "placement": "1. ročník · Výroková formula · 1. hodina: Úvodné pokyny",
    "prerequisites": [
      "základná orientácia v zápise do zošita a práci s webovou aplikáciou"
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
      "pochopiť spôsob práce v tematickom celku",
      "rozlíšiť zápis do zošita",
      "vedieť, kedy aplikáciu použiť a kedy ju odložiť",
      "vytvoriť si mapu pojmov, ktoré sa budú postupne budovať"
    ],
    "competencies": [
      "presné matematické vyjadrovanie",
      "argumentácia a zdôvodňovanie",
      "kritické posudzovanie tvrdení",
      "práca so symbolickým a slovným zápisom",
      "prehľadný zápis do zošita v zošite"
    ],
    "enrichment": [
      "Návrh maturitného štandardu zdôrazňuje matematickú komunikáciu, argumentáciu a kritické posudzovanie tvrdení; tu sa používa iba ako metodické obohatenie spôsobu práce."
    ],
    "flow": [
      "5 min: spoločné predstavenie pravidiel práce",
      "10–12 min: krátky digitálny úvod",
      "10 min: zošit – ukážka zápisu do zošita",
      "zvyšok hodiny: učiteľské organizačné pokyny a krátke diagnostické úlohy"
    ],
    "diagnostics": [
      "rozumie rozdielu medzi zápisom do zošita",
      "vie, že XP nie sú známka",
      "vie, že nie každá hodina musí byť digitálna"
    ],
    "partialUse": [
      "Modul je možné použiť celý alebo len vybrané kroky podľa priebehu hodiny.",
      "Digitálna aktivita nenahrádza ručný zápis, diskusiu pri tabuli ani zdôvodnenie vlastnými slovami."
    ]
  },
  "student": {
    "title": "Ako budeme pracovať",
    "subtitle": "Úvod · Matematika ako premýšľanie, nie klikanie",
    "intro": "Na začiatku si nastavíme spôsob práce. Aplikácia bude pomôcka na objavovanie, vizualizáciu a spätnú väzbu; výpočty, presný zápis a argumentácia zostávajú aj v zošite a pri tabuli.",
    "estimatedTime": "10–12 min",
    "activities": [
      {
        "id": "map",
        "type": "info",
        "phase": "ZAČÍNAME",
        "title": "Kam smerujeme?",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 230\" role=\"img\" aria-label=\"Mapa tematického celku výroková logika\"><defs><marker id=\"a\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"currentColor\"/></marker></defs><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" opacity=\".65\" marker-end=\"url(#a)\"><path d=\"M125 70 H260\"/><path d=\"M370 70 H505\"/><path d=\"M610 70 V155 H520\"/><path d=\"M405 165 H270\"/></g><g font-family=\"system-ui\" text-anchor=\"middle\"><g><rect x=\"25\" y=\"35\" width=\"180\" height=\"70\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"115\" y=\"63\" font-size=\"18\" font-weight=\"700\">VÝROK</text><text x=\"115\" y=\"86\" font-size=\"14\">pravda / nepravda</text></g><g><rect x=\"265\" y=\"35\" width=\"185\" height=\"70\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"358\" y=\"63\" font-size=\"18\" font-weight=\"700\">SPOJKY</text><text x=\"358\" y=\"86\" font-size=\"14\">∧  ∨  ⇒  ⇔</text></g><g><rect x=\"510\" y=\"35\" width=\"190\" height=\"70\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"605\" y=\"63\" font-size=\"18\" font-weight=\"700\">KVANTIFIKÁTORY</text><text x=\"605\" y=\"86\" font-size=\"14\">∀  ∃</text></g><g><rect x=\"420\" y=\"135\" width=\"190\" height=\"65\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"515\" y=\"163\" font-size=\"18\" font-weight=\"700\">NEGÁCIA</text><text x=\"515\" y=\"185\" font-size=\"14\">čo presne neplatí?</text></g><g><rect x=\"175\" y=\"135\" width=\"190\" height=\"65\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"270\" y=\"163\" font-size=\"18\" font-weight=\"700\">DÔKAZ</text><text x=\"270\" y=\"185\" font-size=\"14\">prečo to musí platiť?</text></g></g></svg></div>",
        "continueLabel": "Pozrieť si pravidlá práce"
      },
      {
        "id": "rules",
        "type": "info",
        "phase": "PRÁCA",
        "title": "Aplikácia je nástroj, nie skratka",
        "html": "<p>V module budeš niekedy klikať, inokedy písať, kresliť alebo vysvetľovať. <strong>Mobil nemá robiť to, čo sa potrebuješ naučiť urobiť hlavou, ceruzkou alebo matematickým argumentom.</strong></p><div class=\"compare\"><div><span class=\"mini-label\">APLIKÁCIA</span><br>objavovanie, obraz, okamžitá spätná väzba</div><div><span class=\"mini-label\">ZOŠIT / TABUĽA</span><br>presný zápis, výpočet, zdôvodnenie, záver</div></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "notes",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Dva typy zápisu",
        "html": "<p><span class=\"mini-label\">ÚLOHA DO ZOŠITA</span><br>Skús vlastnými slovami napísať, na čo by ti mohla byť logika v matematike užitočná. Pokojne nepresne.</p><p><span class=\"mini-label\">TOTO SI ZAPÍŠ DO ZOŠITA</span><br><strong>Výroková logika</strong></p>",
        "model": "<strong>ZAPÍŠ SI DO ZOŠITA:</strong> ÚLOHA DO ZOŠITA = môžem sa mýliť. ZAPÍŠ SI DO ZOŠITA = presná formulácia, ktorú si mám odniesť z hodiny."
      },
      {
        "id": "xp",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Práca s modulom",
        "question": "Čo najlepšie vystihuje XP v tejto aplikácii?",
        "options": [
          "Je to automatická školská známka.",
          "Je to spätná väzba o práci v konkrétnom module.",
          "Je to počet minút strávených pri mobile."
        ],
        "answer": 1,
        "correct": "Správne. XP sú orientačná spätná väzba, nie automatická známka.",
        "hint": "Spomeň si, čo má byť cieľom aplikácie."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Na štart sme pripravení",
        "skills": [
          "viem, čo patrí do zápisu do zošita",
          "viem, čo patrí do zápisu do zošita",
          "viem, kedy má zmysel aplikáciu odložiť"
        ],
        "prompt": "Pri každej položke vyber, ako dobre jej teraz rozumieš. Toto nie je známka; je to spätná väzba pre tvoje ďalšie učenie."
      }
    ]
  }
});
