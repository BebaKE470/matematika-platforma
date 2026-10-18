MathPlatform.registerModule({
  "id": "1-u01-h013",
  "teacher": {
    "placement": "1. ročník · Výroková formula · 13. hodina: Precvičovanie",
    "prerequisites": [
      "všetky doterajšie témy tematického celku"
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
      "prepájať výroky, spojky, negáciu, kvantifikátory a dôkazové uvažovanie",
      "odhaľovať typické logické chyby",
      "formulovať stručné matematické zdôvodnenia"
    ],
    "competencies": [
      "presné matematické vyjadrovanie",
      "argumentácia a zdôvodňovanie",
      "kritické posudzovanie tvrdení",
      "práca so symbolickým a slovným zápisom",
      "prehľadný zápis do zošita v zošite"
    ],
    "enrichment": [
      "Návrh štandardu zdôrazňuje kritické posudzovanie tvrdení, odhaľovanie nesprávnej negácie a zámeny implikácie za ekvivalenciu; tieto prvky sú použité ako forma precvičovania."
    ],
    "flow": [
      "10 min: retrieval bez aplikácie",
      "20–25 min: vybrané digitálne úlohy",
      "10–15 min: ručné úlohy a diskusia"
    ],
    "diagnostics": [
      "spojky",
      "negácie",
      "kvantifikátory",
      "implikácia",
      "protipríklad"
    ],
    "partialUse": [
      "Modul je možné použiť celý alebo len vybrané kroky podľa priebehu hodiny.",
      "Digitálna aktivita nenahrádza ručný zápis, diskusiu pri tabuli ani zdôvodnenie vlastnými slovami."
    ]
  },
  "student": {
    "title": "Logika v súvislostiach",
    "subtitle": "Téma 13 · Precvičovanie",
    "intro": "Teraz už nejde o jednu poučku. Úlohy miešajú viac pojmov, aby si musel/a najprv rozpoznať štruktúru problému.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "topic-intro", "type": "intro",
        "goals": ["prepájať výroky, spojky, negáciu, kvantifikátory a dôkazové uvažovanie", "odhaľovať typické logické chyby"]
      },
      {
        "id": "map",
        "type": "info",
        "phase": "ZAČÍNAME",
        "title": "Mapa toho, čo už poznáš",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 230\" role=\"img\" aria-label=\"Mapa tematického celku výroková logika\"><defs><marker id=\"a\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"currentColor\"/></marker></defs><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" opacity=\".65\" marker-end=\"url(#a)\"><path d=\"M125 70 H260\"/><path d=\"M370 70 H505\"/><path d=\"M610 70 V155 H520\"/><path d=\"M405 165 H270\"/></g><g font-family=\"system-ui\" text-anchor=\"middle\"><g><rect x=\"25\" y=\"35\" width=\"180\" height=\"70\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"115\" y=\"63\" font-size=\"18\" font-weight=\"700\">VÝROK</text><text x=\"115\" y=\"86\" font-size=\"14\">pravda / nepravda</text></g><g><rect x=\"265\" y=\"35\" width=\"185\" height=\"70\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"358\" y=\"63\" font-size=\"18\" font-weight=\"700\">SPOJKY</text><text x=\"358\" y=\"86\" font-size=\"14\">∧  ∨  ⇒  ⇔</text></g><g><rect x=\"510\" y=\"35\" width=\"190\" height=\"70\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"605\" y=\"63\" font-size=\"18\" font-weight=\"700\">KVANTIFIKÁTORY</text><text x=\"605\" y=\"86\" font-size=\"14\">∀  ∃</text></g><g><rect x=\"420\" y=\"135\" width=\"190\" height=\"65\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"515\" y=\"163\" font-size=\"18\" font-weight=\"700\">NEGÁCIA</text><text x=\"515\" y=\"185\" font-size=\"14\">čo presne neplatí?</text></g><g><rect x=\"175\" y=\"135\" width=\"190\" height=\"65\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"270\" y=\"163\" font-size=\"18\" font-weight=\"700\">DÔKAZ</text><text x=\"270\" y=\"185\" font-size=\"14\">prečo to musí platiť?</text></g></g></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "p1",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Výrok",
        "question": "Ktorá veta nie je výrokom?",
        "options": [
          "7 je prvočíslo.",
          "Vypočítaj 7².",
          "Existuje párne prvočíslo.",
          "Každé číslo deliteľné 6 je deliteľné 3."
        ],
        "answer": 1,
        "correct": "Správne. „Vypočítaj“ je pokyn, nie tvrdenie s pravdivostnou hodnotou.",
        "hint": "Hľadaj vetu, ktorá nič netvrdí."
      },
      {
        "id": "p2",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Spojky",
        "question": "A=1, B=0. Aká je hodnota ¬A ∨ B?",
        "options": [
          "0",
          "1"
        ],
        "answer": 0,
        "correct": "¬A je 0 a B je 0, takže 0∨0=0.",
        "hint": "Najprv neguj A, až potom vyhodnoť disjunkciu."
      },
      {
        "id": "p3",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Negácia",
        "question": "Negácia vety „x > 3 a x < 8“ je:",
        "options": [
          "x ≤ 3 a x ≥ 8",
          "x < 3 alebo x > 8",
          "x ≤ 3 alebo x ≥ 8"
        ],
        "answer": 2,
        "correct": "Správne podľa De Morganovho pravidla.",
        "hint": "Neguj obe časti a vymeň spojku."
      },
      {
        "id": "p4",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Kvantifikátory",
        "question": "Negácia „∀ x (x je reálne číslo): x²≥0“ je:",
        "options": [
          "∃ x (x je reálne číslo): x²<0",
          "∀ x (x je reálne číslo): x²<0",
          "∃ x (x je reálne číslo): x²≥0"
        ],
        "answer": 0,
        "correct": "Správne: ¬∀ sa mení na ∃¬.",
        "hint": "„Nie všetky“ = existuje aspoň jedna výnimka."
      },
      {
        "id": "p5",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Implikácia",
        "question": "Z A⇒B môžeme bez ďalších podmienok usudzovať, že je ekvivalentná s:",
        "options": [
          "B⇒A",
          "¬B⇒¬A",
          "¬A⇒¬B"
        ],
        "answer": 1,
        "correct": "Áno, s obmenou.",
        "hint": "Obmena neguje a obracia obe strany."
      },
      {
        "id": "p6",
        "type": "choice",
        "phase": "PRENOS",
        "skill": "Protipríklad",
        "question": "Ktoré číslo vyvracia tvrdenie „Každé nepárne prirodzené číslo je prvočíslo“?",
        "options": [
          "3",
          "5",
          "9",
          "11"
        ],
        "answer": 2,
        "correct": "9 je nepárne, ale 9=3·3, takže nie je prvočíslo.",
        "hint": "Hľadaj nepárne zložené číslo."
      },
      {
        "id": "p7",
        "type": "selfWrite",
        "phase": "VYJADRI SA",
        "skill": "Argumentácia",
        "title": "Oprav chybnú vetu",
        "promptHtml": "<span class=\"mini-label\">ÚLOHA DO ZOŠITA</span><br>„Ak je číslo deliteľné 4, je párne. Číslo 18 je párne. Preto je deliteľné 4.“ Vysvetli chybu.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Argument používa obrátenú implikáciu, ktorá z pôvodnej implikácie nevyplýva. Protipríklad je 18: je párne, ale nie je deliteľné 4."
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Argumentácia",
        "question": "Na vyvrátenie všeobecného tvrdenia najčastejšie stačí:",
        "options": [
          "definícia bez argumentu",
          "desať správnych príkladov",
          "jeden protipríklad"
        ],
        "answer": 2,
        "correct": "Jeden platný protipríklad ukáže, že tvrdenie neplatí pre všetky prípady.",
        "hint": "Čo musí zlyhať pri slove „každý“?"
      },
      {
        "id": "extra-b",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Negácia",
        "question": "Ak je A nepravdivý, potom ¬A je:",
        "options": [
          "pravdivý",
          "nepravdivý",
          "nedá sa určiť"
        ],
        "answer": 0,
        "correct": "Výrok a jeho negácia majú opačné pravdivostné hodnoty.",
        "hint": "Vráť sa k významu negácie."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Čo ešte potrebujem precvičiť",
        "skills": [
          "výrok a negácia",
          "spojky a tabuľky",
          "De Morganove pravidlá",
          "implikácia",
          "kvantifikátory",
          "dôkaz a protipríklad"
        ],
        "prompt": "Pri každej položke vyber, ako dobre jej teraz rozumieš. Toto nie je známka; je to spätná väzba pre tvoje ďalšie učenie."
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1", "level": "zaklad", "space": 4,
        "text": "Rozhodni, ktoré z viet sú výroky. Pri každom výroku urč jeho pravdivostnú hodnotu.\na) 12 je deliteľné 5.\nb) Aké je dnes počasie?\nc) Číslo 2 je prvočíslo.\nd) x + 3 = 7",
        "answer": "a) výrok, nepravdivý<br>b) nie je výrok (je to otázka)<br>c) výrok, pravdivý<br>d) nie je výrok – kým nevieme, čo je x, nemá pravdivostnú hodnotu"
      },
      {
        "id": "w2", "level": "zaklad", "space": 3,
        "text": "Utvor negáciu výrokov:\na) Číslo 15 je párne.\nb) Číslo 7 je menšie ako 5.\nc) x ≥ 2",
        "answer": "a) Číslo 15 nie je párne.<br>b) Číslo 7 nie je menšie ako 5 (7 ≥ 5).<br>c) x &lt; 2"
      },
      {
        "id": "w3", "level": "zaklad", "space": 4,
        "text": "Nech A = 1 a B = 0. Urč hodnotu výrazov:\na) A ∧ B\nb) A ∨ B\nc) A ⇒ B\nd) ¬A ⇔ B",
        "answer": "a) 0<br>b) 1<br>c) 0<br>d) ¬A = 0, B = 0, teda 0 ⇔ 0 = 1"
      },
      {
        "id": "w4", "level": "rozsirenie", "space": 5,
        "text": "Utvor negáciu a rozhodni, či je negácia pravdivá:\na) Číslo 14 je deliteľné 2 a zároveň je deliteľné 3.\nb) x < 1 alebo x > 4\nc) Každý žiak triedy má mobil.",
        "answer": "a) Číslo 14 nie je deliteľné 2 alebo nie je deliteľné 3. Negácia je pravdivá (14 nie je deliteľné 3).<br>b) x ≥ 1 a zároveň x ≤ 4, teda 1 ≤ x ≤ 4.<br>c) Existuje žiak triedy, ktorý nemá mobil."
      },
      {
        "id": "w5", "level": "rozsirenie", "space": 5,
        "text": "Vyvráť protipríkladom:\na) Každé prirodzené číslo deliteľné 3 je nepárne.\nb) Pre každé reálne číslo x platí x² > x.\nc) Súčet dvoch prvočísel je vždy nepárne číslo.",
        "answer": "a) napr. 6 (je deliteľné 3 a je párne)<br>b) napr. x = 0 (0² = 0, a 0 &gt; 0 neplatí); vyhovuje aj x = 1<br>c) napr. 3 + 5 = 8 (párne číslo)"
      },
      {
        "id": "w6", "level": "rozsirenie", "space": 5,
        "text": "Daná je implikácia: „Ak je číslo deliteľné 6, potom je deliteľné 3.“ Napíš jej obrátenie a obmenu a pri všetkých troch implikáciách rozhodni, či sú pravdivé.",
        "answer": "Pôvodná implikácia: pravdivá.<br>Obrátenie: „Ak je číslo deliteľné 3, potom je deliteľné 6.“ – nepravdivá (protipríklad 3).<br>Obmena: „Ak číslo nie je deliteľné 3, potom nie je deliteľné 6.“ – pravdivá (rovnako ako pôvodná implikácia)."
      },
      {
        "id": "w7", "level": "bonus", "space": 4,
        "text": "Rozhodni, ktorý z výrokov je tautológia, kontradikcia a kontingencia (A, B sú ľubovoľné výroky):\na) A ∨ ¬A\nb) A ∧ ¬A\nc) A ⇒ B",
        "answer": "a) tautológia (vždy pravdivý)<br>b) kontradikcia (vždy nepravdivý)<br>c) kontingencia – pre A = 1, B = 0 je nepravdivý, pre A = 0 je pravdivý"
      },
      {
        "id": "w8", "level": "bonus", "space": 6,
        "text": "Nepriamym dôkazom (cez obmenu) dokáž: Ak je n² nepárne, potom n je nepárne (n je prirodzené číslo).",
        "answer": "Obmena: Ak n je párne, potom n² je párne. Nech n = 2k, potom n² = 4k² = 2 · 2k², čo je párne číslo. Obmena platí, preto platí aj pôvodná implikácia."
      }
    ]
  }
});
