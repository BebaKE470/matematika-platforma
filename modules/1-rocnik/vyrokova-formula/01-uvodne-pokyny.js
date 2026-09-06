MathPlatform.registerModule({
  "id": "1-u01-h001",
  "teacher": {
    "placement": "1. ročník · Výroková formula · 1. hodina: Úvodné pokyny",
    "prerequisites": [
      "základná orientácia v zápise do zošita a práci s webovou aplikáciou",
      "bežné výpočtové zručnosti zo základnej školy (poradie operácií, deliteľnosť, zlomky, obvod a obsah rovinných útvarov)"
    ],
    "planContent": [
      "Relevantný obsah aktuálneho tematického plánu: Výroky a ich pravdivostná hodnota; jednoduchý výrok a jeho negácia; logické spojky; negácia zložených výrokov a de Morganove zákony; tautológie, kontradikcie a kontingencie; obmena, obrátenie a negácia implikácie; všeobecný a existenčný kvantifikátor; negácia kvantifikovaných výrokov; priamy, nepriamy dôkaz a dôkaz sporom; aplikácie výrokovej logiky; opakovanie a kontrolná písomná práca.",
      "Prvá hodina tematického celku je v pláne organizačná (úvod do práce) a nemá vlastný obsahový/výkonový štandard; obsah nižšie je preto didaktickým doplnením – zoznámenie s aplikáciou a krátka rozcvička na už osvojenom učive zo ZŠ."
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
      "rozlíšiť zápis do zošita od práce v aplikácii",
      "vedieť, kedy aplikáciu použiť a kedy ju odložiť",
      "vytvoriť si mapu pojmov, ktoré sa budú postupne budovať",
      "zopakovať a oživiť kľúčové výpočtové zručnosti zo základnej školy (poradie operácií, deliteľnosť, zlomky, obvod a obsah)",
      "naladiť sa na matematické myslenie pred začiatkom nového učiva"
    ],
    "competencies": [
      "presné matematické vyjadrovanie",
      "argumentácia a zdôvodňovanie",
      "kritické posudzovanie tvrdení",
      "práca so symbolickým a slovným zápisom",
      "prehľadný zápis do zošita",
      "práca s číslami, zlomkami a základnými geometrickými vzorcami"
    ],
    "enrichment": [
      "Návrh maturitného štandardu zdôrazňuje matematickú komunikáciu, argumentáciu a kritické posudzovanie tvrdení; tu sa používa iba ako metodické obohatenie spôsobu práce."
    ],
    "flow": [
      "5 min: spoločné predstavenie pravidiel práce",
      "18–22 min: digitálny úvod – pravidlá práce, zápis do zošita a krátka rozcvička na učive zo základnej školy (bez súvisu s výrokovou logikou)",
      "5 min: spoločné zhrnutie pri tabuli – čo rozcvička pripomenula, čo si treba doma zopakovať",
      "zvyšok hodiny: učiteľské organizačné pokyny"
    ],
    "diagnostics": [
      "rozumie rozdielu medzi zápisom do zošita a prácou v aplikácii",
      "vie, že XP nie sú známka",
      "vie, že nie každá hodina musí byť digitálna",
      "orientačne ukazuje, ktoré zručnosti zo ZŠ (poradie operácií, deliteľnosť, zlomky, obvod/obsah) treba pred ďalšou látkou ešte zopakovať"
    ],
    "partialUse": [
      "Modul je možné použiť celý alebo len vybrané kroky podľa priebehu hodiny.",
      "Rozcvičkový blok (mimo tému výrokov) je možné skrátiť alebo vynechať, ak trieda pracuje rýchlo alebo ak učiteľ chce viac času na organizačné pokyny.",
      "Digitálna aktivita nenahrádza ručný zápis, diskusiu pri tabuli ani zdôvodnenie vlastnými slovami."
    ]
  },
  "student": {
    "title": "Ako budeme pracovať",
    "subtitle": "Úvod · Pravidlá práce a rozcvička na matematiku",
    "intro": "Na začiatku si nastavíme spôsob práce. Aplikácia bude pomôcka na objavovanie, vizualizáciu a spätnú väzbu; výpočty, presný zápis a argumentácia zostávajú aj v zošite a pri tabuli. Potom si spolu krátko zabehneme mozgom cez pár vecí zo základnej školy – nič nové, len naladenie sa na matematiku.",
    "estimatedTime": "18–22 min",
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
        "skill": "Zápis do zošita",
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
        "id": "warmup-intro",
        "type": "explain",
        "phase": "ROZCVIČKA",
        "title": "Kým začneme s výrokmi...",
        "html": "<p>Skôr než sa na ďalšej hodine pustíme do výrokov, krátko si pripomenieme pár vecí zo základnej školy – poradie operácií, deliteľnosť, zlomky a vzorce pre obvod a obsah. <strong>Nič z toho nie je nová látka</strong>, len rozcvička pre hlavu.</p>",
        "remember": "Rozcvička sa nepočíta ako nové učivo – je to pripomenutie toho, čo už vieš."
      },
      {
        "id": "order-of-operations",
        "type": "choice",
        "phase": "ROZCVIČKA",
        "skill": "Poradie operácií",
        "question": "Vypočítaj hodnotu výrazu 2 + 3 · 4. Aký je výsledok?",
        "options": [
          "14",
          "20",
          "24",
          "9"
        ],
        "answer": 0,
        "correct": "Správne. Súčin 3 · 4 = 12 sa počíta pred súčtom, takže 2 + 12 = 14.",
        "hint": "Pripomeň si poradie operácií: najprv násobenie a delenie, až potom sčítanie a odčítanie."
      },
      {
        "id": "odd-composite",
        "type": "numberInput",
        "phase": "ROZCVIČKA",
        "skill": "Prvočísla a deliteľnosť",
        "title": "Nepárne, ale nie prvočíslo",
        "prompt": "Napíš jedno prirodzené číslo, ktoré je nepárne a zároveň nie je prvočíslo (je zložené).",
        "validate": "oddComposite",
        "hint": "Číslo musí byť nepárne a zároveň sa musí dať rozložiť na súčin dvoch prirodzených čísel väčších ako 1.",
        "success": "Áno – napríklad 9 = 3 · 3 alebo 15 = 3 · 5. Obe čísla sú nepárne a zložené."
      },
      {
        "id": "divisible-by-3",
        "type": "sortChoice",
        "phase": "ROZCVIČKA",
        "skill": "Deliteľnosť",
        "title": "Delí sa dané číslo tromi?",
        "items": [
          {
            "text": "21",
            "answer": true,
            "why": "Súčet číslic 2 + 1 = 3 je deliteľný tromi, preto je tromi deliteľné aj 21."
          },
          {
            "text": "35",
            "answer": false,
            "why": "Súčet číslic 3 + 5 = 8 nie je deliteľný tromi, preto nie je tromi deliteľné ani 35."
          },
          {
            "text": "42",
            "answer": true,
            "why": "Súčet číslic 4 + 2 = 6 je deliteľný tromi, preto je tromi deliteľné aj 42."
          },
          {
            "text": "50",
            "answer": false,
            "why": "Súčet číslic 5 + 0 = 5 nie je deliteľný tromi, preto nie je tromi deliteľné ani 50."
          },
          {
            "text": "81",
            "answer": true,
            "why": "Súčet číslic 8 + 1 = 9 je deliteľný tromi, preto je tromi deliteľné aj 81."
          },
          {
            "text": "100",
            "answer": false,
            "why": "Súčet číslic 1 + 0 + 0 = 1 nie je deliteľný tromi, preto nie je tromi deliteľné ani 100."
          }
        ],
        "labels": [
          "Delí sa tromi",
          "Nedelí sa tromi"
        ]
      },
      {
        "id": "perimeter-area",
        "type": "matrix",
        "phase": "ROZCVIČKA",
        "skill": "Obvod a obsah",
        "title": "Obvod, alebo obsah?",
        "labels": [
          "4a",
          "a²",
          "2 · (a+b)",
          "a · b"
        ],
        "items": [
          {
            "text": "Obvod štvorca so stranou a",
            "answer": "4a"
          },
          {
            "text": "Obsah štvorca so stranou a",
            "answer": "a²"
          },
          {
            "text": "Obvod obdĺžnika so stranami a a b",
            "answer": "2 · (a+b)"
          },
          {
            "text": "Obsah obdĺžnika so stranami a a b",
            "answer": "a · b"
          }
        ]
      },
      {
        "id": "fraction-word-problem",
        "type": "choice",
        "phase": "ROZCVIČKA",
        "skill": "Zlomky",
        "question": "V triede je 24 žiakov. Presne tri štvrtiny z nich sú dievčatá. Koľko dievčat je v triede?",
        "options": [
          "16",
          "6",
          "18",
          "8"
        ],
        "answer": 2,
        "correct": "Správne. Jedna štvrtina z 24 je 24 : 4 = 6, tri štvrtiny sú teda 6 · 3 = 18.",
        "hint": "Najprv zisti, koľko žiakov tvorí jednu štvrtinu (24 : 4), a potom to vynásob tromi."
      },
      {
        "id": "equivalent-fractions-explain",
        "type": "selfWrite",
        "phase": "ROZCVIČKA",
        "skill": "Matematické vyjadrovanie",
        "title": "Vysvetli vlastnými slovami",
        "promptHtml": "Vysvetli spolužiakovi, ktorý bol chorý, prečo je zlomok <strong>1/2</strong> to isté číslo ako <strong>0,5</strong> aj ako <strong>50 %</strong>.",
        "model": "Napríklad: 1/2 znamená jeden diel z dvoch rovnakých dielov celku. Keď 1 vydelíme 2, dostaneme desatinné číslo 0,5. A 50 % znamená 50 zo 100, čo je tiež presne polovica – ide teda o rovnaké množstvo zapísané tromi rôznymi spôsobmi."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Na štart sme pripravení",
        "skills": [
          "viem, čo patrí do zápisu do zošita a čo do aplikácie",
          "viem, že XP je spätná väzba, nie známka",
          "spomenul/a som si na poradie operácií, deliteľnosť, zlomky a vzorce pre obvod a obsah"
        ],
        "prompt": "Pri každej položke vyber, ako dobre jej teraz rozumieš. Toto nie je známka; je to spätná väzba pre tvoje ďalšie učenie."
      }
    ]
  }
});
