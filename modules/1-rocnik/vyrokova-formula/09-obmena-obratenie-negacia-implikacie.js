MathPlatform.registerModule({
  "id": "1-u01-h009",
  "teacher": {
    "placement": "1. ročník · Výroková formula · 9. hodina: Obmena, obrátenie, negácia implikácie",
    "prerequisites": [
      "implikácia a jej pravdivosť",
      "negácia jednoduchého a zloženého výroku (De Morgan, negácia implikácie)"
    ],
    "planContent": [
      "Relevantný obsah aktuálneho tematického plánu: Výroky a ich pravdivostná hodnota; jednoduchý výrok a jeho negácia; logické spojky; negácia zložených výrokov a de Morganove zákony; tautológie, kontradikcie a kontingencie; obmena, obrátenie a negácia implikácie; všeobecný a existenčný kvantifikátor; negácia kvantifikovaných výrokov; priamy, nepriamy dôkaz a dôkaz sporom; aplikácie výrokovej logiky; opakovanie a kontrolná písomná práca."
    ],
    "planPerformance": [
      "Vysvetliť rozdiel medzi implikáciou a ekvivalenciou.",
      "Utvoriť negáciu výroku pomocou pravidiel pre negáciu základných zložených výrokov."
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
      "0–3 min: KDE SME – od negácie implikácie k jej ďalším príbuzným vetám.",
      "3–8 min: NOVÝ POJEM – mapa príbuzných viet: obrátenie, obmena, negácia.",
      "8–24 min: OVER SI – objavovanie, ekvivalencia s obmenou, zošit, argumentácia.",
      "24–36 min: ZBIERKA – pre danú implikáciu vytvor negáciu, obrátenie a obmenu; tri úrovne náročnosti.",
      "36–40 min: ZHRNUTIE a sebahodnotenie."
    ],
    "diagnostics": [
      "nezamieňa obmenu s obrátením",
      "chápe ekvivalenciu implikácie a obmeny",
      "správne neguje implikáciu"
    ],
    "partialUse": [
      "Modul je navrhnutý na celú vyučovaciu hodinu; pri potrebe skrátiť možno vynechať jednu úroveň zbierky.",
      "Zbierkové úlohy sú nebodované, žiak si ich rieši na papieri a v aplikácii iba odfajkne.",
      "Digitálna aktivita nenahrádza ručný zápis, diskusiu pri tabuli ani zdôvodnenie vlastnými slovami."
    ]
  },
  "student": {
    "title": "Štyri vety z jednej implikácie",
    "subtitle": "Téma 09 · Obrátenie, obmena a negácia",
    "intro": "Z jednej implikácie môžeme vytvoriť viac príbuzných viet. Nie všetky však majú rovnakú pravdivosť.",
    "estimatedTime": "35–40 min (celá hodina)",
    "activities": [
      {
        "id": "kde-sme", "type": "info", "phase": "0 · KDE SME", "title": "Od negácie implikácie k jej príbuzným vetám",
        "html": "<p>Na predošlej hodine sme si overili, kedy je implikácia A ⇒ B pravdivá a ako ju negovať. Dnes z nej vytvoríme ešte dve ďalšie vety — <strong>obrátenú</strong> a <strong>obmenenú</strong> implikáciu — a zistíme, ktorá z nich má rovnakú pravdivosť ako pôvodná.</p>",
        "continueLabel": "Idem na to"
      },
      {
        "id": "visual",
        "type": "info",
        "phase": "1 · ZAČÍNAME",
        "title": "Mapa príbuzných viet",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 260\" role=\"img\" aria-label=\"Implikácia, obrátenie, obmena a negácia\"><g font-family=\"system-ui\" text-anchor=\"middle\"><rect x=\"250\" y=\"25\" width=\"260\" height=\"55\" rx=\"14\" fill=\"currentColor\" opacity=\".08\"/><text x=\"380\" y=\"60\" font-size=\"24\" font-weight=\"700\">A ⇒ B</text><text x=\"380\" y=\"104\" font-size=\"14\">pôvodná implikácia</text><path d=\"M380 115 V145 M380 145 H145 M380 145 H615\" stroke=\"currentColor\" stroke-width=\"3\" fill=\"none\"/><rect x=\"40\" y=\"165\" width=\"210\" height=\"62\" rx=\"14\" fill=\"currentColor\" opacity=\".08\"/><text x=\"145\" y=\"192\" font-size=\"20\" font-weight=\"700\">B ⇒ A</text><text x=\"145\" y=\"214\" font-size=\"13\">obrátená</text><rect x=\"275\" y=\"165\" width=\"210\" height=\"62\" rx=\"14\" fill=\"currentColor\" opacity=\".08\"/><text x=\"380\" y=\"192\" font-size=\"20\" font-weight=\"700\">¬B ⇒ ¬A</text><text x=\"380\" y=\"214\" font-size=\"13\">obmena</text><rect x=\"510\" y=\"165\" width=\"210\" height=\"62\" rx=\"14\" fill=\"currentColor\" opacity=\".08\"/><text x=\"615\" y=\"192\" font-size=\"20\" font-weight=\"700\">A ∧ ¬B</text><text x=\"615\" y=\"214\" font-size=\"13\">negácia implikácie</text></g></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "rev",
        "type": "choice",
        "phase": "3 · OBJAVUJ",
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
        "phase": "3 · OBJAVUJ",
        "skill": "Obmena",
        "question": "Ktorá veta je obmenou pôvodnej implikácie?",
        "options": [
          "Ak číslo nie je deliteľné 4, potom nie je párne.",
          "Ak je číslo párne, potom je deliteľné 4.",
          "Ak číslo nie je párne, potom nie je deliteľné 4."
        ],
        "answer": 2,
        "correct": "Správne. Obmena má tvar ¬B ⇒ ¬A.",
        "hint": "Neguj záver aj predpoklad a obráť poradie."
      },
      {
        "id": "equiv",
        "type": "choice",
        "phase": "3 · PREMÝŠĽAJ",
        "skill": "Ekvivalencia implikácie",
        "question": "Pôvodná implikácia je vždy logicky ekvivalentná s:",
        "options": [
          "obmenou implikácie",
          "obrátenou implikáciou",
          "svojou negáciou"
        ],
        "answer": 0,
        "correct": "Áno. A ⇒ B a ¬B ⇒ ¬A majú rovnaké pravdivostné hodnoty.",
        "hint": "Porovnaj pravdivostné tabuľky."
      },
      {
        "id": "neg",
        "type": "choice",
        "phase": "3 · OVER SI",
        "skill": "Negácia implikácie",
        "question": "Negácia „Ak je číslo deliteľné 4, potom je párne“ je:",
        "options": [
          "Číslo nie je deliteľné 4 a je párne.",
          "Číslo je deliteľné 4 a nie je párne.",
          "Ak je číslo párne, je deliteľné 4."
        ],
        "answer": 1,
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
        "phase": "3 · VYJADRI SA",
        "skill": "Argumentácia",
        "title": "Prečo obrátená veta nemusí platiť?",
        "promptHtml": "<span class=\"mini-label\">ÚLOHA DO ZOŠITA</span><br>Vysvetli na príklade s deliteľnosťou 4 a párnosťou, prečo pravdivosť A ⇒ B nestačí na pravdivosť B ⇒ A.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Každé číslo deliteľné 4 je párne, ale párnosť je slabšia podmienka. Napríklad 6 je párne, no nie je deliteľné 4, takže obrátená implikácia neplatí."
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "3 · OVER SI",
        "skill": "Implikácia",
        "question": "K výroku „Ak je číslo deliteľné 4, potom je párne“ je obrátený výrok:",
        "options": [
          "Číslo je deliteľné 4 a párne.",
          "Ak číslo nie je párne, nie je deliteľné 4.",
          "Ak je číslo párne, potom je deliteľné 4."
        ],
        "answer": 2,
        "correct": "Obrátený výrok vymení predpoklad a záver.",
        "hint": "Vymeň poradie častí implikácie."
      },
      {
        "id": "extra-b",
        "type": "choice",
        "phase": "3 · OVER SI",
        "skill": "Implikácia",
        "question": "Obmena výroku A ⇒ B má tvar:",
        "options": [
          "¬B ⇒ ¬A",
          "¬A ⇒ ¬B",
          "B ⇒ A"
        ],
        "answer": 0,
        "correct": "Správne. Obmena neguje obe časti a zároveň ich vymení.",
        "hint": "Najprv si pomenuj predpoklad A a záver B."
      },
      {
        "id": "extra-c",
        "type": "selfWrite",
        "phase": "3 · VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Prečo obrátenie nemusí platiť?",
        "prompt": "Na príklade deliteľnosti 4 a párnosti vysvetli, prečo pravdivosť pôvodnej implikácie nezaručuje pravdivosť obrátenej.",
        "model": "Každé číslo deliteľné 4 je párne, ale nie každé párne číslo je deliteľné 4; napríklad 6. Preto obrátená implikácia nemusí byť pravdivá."
      },
      {
        "id": "zbierka", "type": "taskList", "phase": "4 · ZBIERKA", "skill": "Obmena, obrátenie, negácia",
        "title": "Štyri vety z implikácie",
        "html": "<p class=\"muted\">Pre danú implikáciu zapíš: negáciu, obrátenú implikáciu a obmenu. Odfajkni si úlohu, keď máš hotovo — riešenie si over tlačidlom.</p>",
        "items": [
          { "level": "zaklad", "text": "Ak nedostanem zlú známku, dostanem odmenu.", "answer": "Negácia: Nedostanem zlú známku a nedostanem odmenu.<br>Obrátená: Ak dostanem odmenu, nedostanem zlú známku.<br>Obmena: Ak nedostanem odmenu, dostanem zlú známku." },
          { "level": "zaklad", "text": "Keď pracujem, nehovorím.", "answer": "Negácia: Pracujem a hovorím.<br>Obrátená: Keď nehovorím, pracujem.<br>Obmena: Keď hovorím, nepracujem." },
          { "level": "rozsirenie", "text": "Ak sú dané čísla párne, tak ich súčin je párny.", "answer": "Negácia: Čísla sú párne a ich súčin nie je párny.<br>Obrátená: Ak je súčin párny, tak sú dané čísla párne. (Táto veta v skutočnosti neplatí vždy — napr. 2·3=6.)<br>Obmena: Ak súčin nie je párny, tak dané čísla nie sú párne." },
          { "level": "rozsirenie", "text": "Ak je Mesiac v nove, o polnoci je v lese tma.", "answer": "Negácia: Mesiac je v nove a o polnoci nie je v lese tma.<br>Obrátená: Ak o polnoci je v lese tma, Mesiac je v nove.<br>Obmena: Ak o polnoci nie je v lese tma, Mesiac nie je v nove." },
          { "level": "bonus", "text": "Keď fúka východný vietor, neprší.", "answer": "Negácia: Fúka východný vietor a prší.<br>Obrátená: Keď neprší, fúka východný vietor.<br>Obmena: Keď prší, nefúka východný vietor." },
          { "level": "bonus", "text": "Keď nie je v izbe dosť svetla, v izbe nerysujem.", "answer": "Negácia: Nie je v izbe dosť svetla a v izbe rysujem.<br>Obrátená: Keď v izbe nerysujem, nie je v izbe dosť svetla.<br>Obmena: Keď v izbe rysujem, je v izbe dosť svetla." },
          { "level": "bonus", "text": "Keď nemám dosť vlastných peňazí, požičiavam ich od priateľov.", "answer": "Negácia: Nemám dosť vlastných peňazí a nepožičiavam ich od priateľov.<br>Obrátená: Keď si požičiavam peniaze od priateľov, nemám dosť vlastných peňazí.<br>Obmena: Keď si nepožičiavam peniaze od priateľov, mám dosť vlastných peňazí." }
        ]
      },
      {
        "id": "zhrnutie", "type": "info", "phase": "5 · ZHRNUTIE", "title": "Čo si sa dnes naučil/a",
        "html": "<ul><li>Z implikácie A⇒B vieme utvoriť obrátenú (B⇒A), obmenu (¬B⇒¬A) a negáciu (A∧¬B).</li><li>Iba obmena má vždy rovnakú pravdivostnú hodnotu ako pôvodná implikácia.</li><li>Obrátená implikácia môže, ale nemusí platiť — treba ju overiť samostatne.</li></ul>",
        "continueLabel": "Na záver sa zhodnotím"
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "5 · ZÁVER",
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
