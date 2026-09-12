MathPlatform.registerModule({
  "id": "1-u01-h011",
  "teacher": {
    "placement": "1. ročník · Výroková formula · 11. hodina: Negácia kvantifikovaných výrokov",
    "prerequisites": [
      "všeobecný a existenčný kvantifikátor",
      "negácia výroku"
    ],
    "planContent": [
      "Relevantný obsah aktuálneho tematického plánu: Výroky a ich pravdivostná hodnota; jednoduchý výrok a jeho negácia; logické spojky; negácia zložených výrokov a de Morganove zákony; tautológie, kontradikcie a kontingencie; obmena, obrátenie a negácia implikácie; všeobecný a existenčný kvantifikátor; negácia kvantifikovaných výrokov; priamy, nepriamy dôkaz a dôkaz sporom; aplikácie výrokovej logiky; opakovanie a kontrolná písomná práca."
    ],
    "planPerformance": [
      "Utvoriť negáciu výroku pomocou pravidiel pre negáciu jednoduchých kvantifikátorov.",
      "Vysvetliť, kedy na dôkaz nepravdivosti tvrdenia možno použiť protipríklad.",
      "V jednoduchých prípadoch vysloviť kontrapríklad všeobecných tvrdení."
    ],
    "goals": [
      "negovať jednoduchý všeobecný výrok",
      "negovať jednoduchý existenčný výrok",
      "vysvetliť význam protipríkladu pri vyvrátení všeobecného tvrdenia",
      "rozlíšiť „nie všetky“ od „žiadne“"
    ],
    "competencies": [
      "presné matematické vyjadrovanie",
      "argumentácia a zdôvodňovanie",
      "kritické posudzovanie tvrdení",
      "práca so symbolickým a slovným zápisom",
      "prehľadný zápis do zošita v zošite"
    ],
    "enrichment": [
      "Návrh štandardu explicitne uvádza negáciu všeobecného a existenčného výroku a protipríklad; modul to využíva priamo v rámci aktuálneho plánu."
    ],
    "flow": [
      "0–3 min: KDE SME – od kvantifikátorov k ich negácii.",
      "3–12 min: NOVÝ POJEM – dve pravidlá negácie (¬∀→∃¬, ¬∃→∀¬) a tabuľka slovných vzorov na prepis do zošita.",
      "12–28 min: OVER SI – objavovanie, protipríklad, jazyk negácie, zošit.",
      "28–40 min: ZBIERKA – negácia kvantifikovaných výrokov, tri úrovne náročnosti.",
      "40–45 min: ZHRNUTIE a sebahodnotenie."
    ],
    "diagnostics": [
      "správne mení ∀ ↔ ∃ pri negácii",
      "nepreháňa negáciu všeobecného tvrdenia na „žiadny“",
      "vie uviesť protipríklad",
      "správne neguje číselné kvantifikátory aspoň n / najviac n / práve n"
    ],
    "partialUse": [
      "Modul je navrhnutý na celú vyučovaciu hodinu; pri potrebe skrátiť možno vynechať jednu úroveň zbierky.",
      "Zbierkové úlohy sú nebodované, žiak si ich rieši na papieri a v aplikácii iba odfajkne.",
      "Digitálna aktivita nenahrádza ručný zápis, diskusiu pri tabuli ani zdôvodnenie vlastnými slovami."
    ]
  },
  "student": {
    "title": "Nie všetky neznamená žiadne",
    "subtitle": "Téma 11 · Negácia kvantifikovaných výrokov",
    "intro": "Pri kvantifikátoroch sa negácia mení nielen vo vnútri tvrdenia. Mení aj „všetky“ na „existuje aspoň jeden“ a naopak.",
    "estimatedTime": "40–45 min (celá hodina)",
    "activities": [
      {
        "id": "kde-sme", "type": "info", "phase": "0 · KDE SME", "title": "Od kvantifikátorov k ich negácii",
        "html": "<p>Na predošlej hodine sme zaviedli ∀ a ∃. Dnes zistíme, čo sa stane s kvantifikátorom, keď kvantifikovaný výrok negujeme.</p>",
        "continueLabel": "Idem na to"
      },
      {
        "id": "visual",
        "type": "info",
        "phase": "1 · ZAČÍNAME",
        "title": "Dve pravidlá, ktoré treba chápať",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 230\" role=\"img\" aria-label=\"Negácia kvantifikovaných výrokov\"><g font-family=\"system-ui\" text-anchor=\"middle\"><rect x=\"35\" y=\"30\" width=\"310\" height=\"72\" rx=\"16\" fill=\"currentColor\" opacity=\".07\"/><text x=\"190\" y=\"61\" font-size=\"21\" font-weight=\"700\">¬(∀x P(x))</text><text x=\"190\" y=\"86\" font-size=\"17\">⇔ ∃x ¬P(x)</text><rect x=\"415\" y=\"30\" width=\"310\" height=\"72\" rx=\"16\" fill=\"currentColor\" opacity=\".07\"/><text x=\"570\" y=\"61\" font-size=\"21\" font-weight=\"700\">¬(∃x P(x))</text><text x=\"570\" y=\"86\" font-size=\"17\">⇔ ∀x ¬P(x)</text><text x=\"380\" y=\"145\" font-size=\"16\" font-weight=\"700\">„Nie všetky“ ≠ „žiadne“</text><text x=\"380\" y=\"176\" font-size=\"15\">Na vyvrátenie „všetky“ stačí jeden protipríklad.</text></g></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "vzory",
        "type": "notebook",
        "phase": "1 · ZOŠIT",
        "title": "Slovné vzory negácie",
        "html": "<p><strong>TOTO SI ZAPÍŠ DO ZOŠITA:</strong></p><div class=\"table-wrap\"><table class=\"truth\"><tr><th>Výrok</th><th>Negácia výroku</th></tr><tr><td>každý ... je ...</td><td>aspoň jeden ... nie je ...</td></tr><tr><td>aspoň jeden je ...</td><td>ani jeden ... nie je ...</td></tr><tr><td>aspoň n ... je ... (n&gt;1)</td><td>najviac (n−1) ... je ...</td></tr><tr><td>najviac n ... je ...</td><td>aspoň (n+1) ... je ...</td></tr><tr><td>najmenej n ... je ...</td><td>najviac (n−1) ... je ...</td></tr><tr><td>žiadny ... je ...</td><td>aspoň jeden ... nie je ...</td></tr><tr><td>práve jeden ... je ...</td><td>nikto alebo aspoň dvaja ... sú ...</td></tr><tr><td>práve dvaja ... sú ...</td><td>najviac jeden alebo aspoň traja ... sú ...</td></tr><tr><td>ani jeden ... nie je ...</td><td>aspoň jeden ... je ...</td></tr></table></div>",
        "model": "<strong>VZORY NEGÁCIE (skrátene):</strong><br>každý → aspoň jeden nie je · aspoň jeden → ani jeden nie je · aspoň n (n&gt;1) → najviac n−1 · najviac n → aspoň n+1 · najmenej n → najviac n−1 · žiadny → aspoň jeden · práve jeden → nikto alebo aspoň dvaja · práve dvaja → najviac jeden alebo aspoň traja · ani jeden nie je → aspoň jeden je."
      },
      {
        "id": "na",
        "type": "choice",
        "phase": "3 · OBJAVUJ",
        "skill": "Negácia ∀",
        "question": "Neguj vetu „Každé prirodzené číslo je párne.“",
        "options": [
          "Žiadne prirodzené číslo nie je párne.",
          "Existuje prirodzené číslo, ktoré nie je párne.",
          "Existuje prirodzené číslo, ktoré je párne."
        ],
        "answer": 1,
        "correct": "Správne. Na popretie „všetky sú párne“ stačí jedno nepárne prirodzené číslo.",
        "hint": "„Nie všetky“ znamená, že nájdeme aspoň jednu výnimku."
      },
      {
        "id": "ne",
        "type": "choice",
        "phase": "3 · OBJAVUJ",
        "skill": "Negácia ∃",
        "question": "Neguj vetu „Existuje prirodzené číslo menšie ako 0.“",
        "options": [
          "Niektoré prirodzené číslo nie je menšie ako 0.",
          "Existuje prirodzené číslo aspoň 0.",
          "Každé prirodzené číslo je aspoň 0."
        ],
        "answer": 2,
        "correct": "Áno. Ak neexistuje ani jeden prvok s vlastnosťou, potom všetky prvky túto vlastnosť nemajú.",
        "hint": "Negácia „existuje“ musí vylúčiť všetky možné prípady."
      },
      {
        "id": "counter",
        "type": "explain",
        "phase": "3 · POCHOP",
        "title": "Protipríklad je presný nástroj",
        "html": "<p>Všeobecné tvrdenie <strong>∀x P(x)</strong> vyvrátime tým, že nájdeme konkrétne x, pre ktoré P(x) neplatí.</p><p>Také x sa nazýva <strong>protipríklad</strong>. Jeden správny protipríklad stačí na vyvrátenie všeobecného tvrdenia.</p>",
        "remember": "Na vyvrátenie „pre všetky“ stačí „existuje aspoň jeden, pre ktorý nie“."
      },
      {
        "id": "counter2",
        "type": "choice",
        "phase": "3 · PREMÝŠĽAJ",
        "skill": "Protipríklad",
        "question": "Ktoré číslo je protipríkladom tvrdenia „Každé prvočíslo je nepárne“?",
        "options": [
          "2",
          "5",
          "3",
          "7"
        ],
        "answer": 0,
        "correct": "Správne. 2 je prvočíslo a zároveň je párne.",
        "hint": "Hľadaj jedinú výnimku."
      },
      {
        "id": "nb",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Neguj presne",
        "html": "<p>Neguj a zapíš slovne aj symbolicky:<br>a) ∀ x (x je reálne číslo): x² ≥ 0<br>b) ∃ n (n je prirodzené číslo): n² = 2</p>",
        "model": "<strong>VZOR:</strong><br>a) ∃ x (x je reálne číslo): x² &lt; 0 – existuje reálne číslo so zápornou druhou mocninou.<br>b) ∀ n (n je prirodzené číslo): n² ≠ 2 – pre každé prirodzené n platí n² ≠ 2."
      },
      {
        "id": "lang",
        "type": "sortChoice",
        "phase": "3 · OVER SI",
        "skill": "Jazyk negácie",
        "title": "Je uvedená negácia správna?",
        "items": [
          {
            "text": "„Všetci žiaci odovzdali úlohu.“ → „Aspoň jeden žiak úlohu neodovzdal.“",
            "answer": true,
            "why": "Presná negácia všeobecného tvrdenia."
          },
          {
            "text": "„Existuje riešenie rovnice.“ → „Existuje iné číslo, ktoré riešením nie je.“",
            "answer": false,
            "why": "To nevylučuje existenciu riešenia. Správne: žiadne číslo nie je riešením."
          },
          {
            "text": "„Každé x spĺňa P.“ → „Existuje x, ktoré P nespĺňa.“",
            "answer": true,
            "why": "Symbolicky ¬∀ = ∃¬."
          }
        ],
        "labels": [
          "SPRÁVNE",
          "NESPRÁVNE"
        ]
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "3 · OVER SI",
        "skill": "Negácia kvantifikátorov",
        "question": "Negácia tvrdenia „Každý žiak vyriešil úlohu“ je:",
        "options": [
          "Žiadny žiak nevyriešil úlohu.",
          "Aspoň jeden žiak úlohu nevyriešil.",
          "Aspoň jeden žiak úlohu vyriešil."
        ],
        "answer": 1,
        "correct": "Na vyvrátenie „každý“ stačí aspoň jeden prípad, keď vlastnosť neplatí.",
        "hint": "Negácia všeobecného tvrdenia začína „existuje aspoň jeden...“."
      },
      {
        "id": "extra-b",
        "type": "choice",
        "phase": "3 · OVER SI",
        "skill": "Negácia kvantifikátorov",
        "question": "Negácia tvrdenia „Existuje číslo s vlastnosťou V“ je:",
        "options": [
          "Každé číslo má V.",
          "Žiadne číslo nemá V.",
          "Existujú aspoň dve čísla bez V."
        ],
        "answer": 1,
        "correct": "Správne: neexistuje ani jeden prvok s vlastnosťou V.",
        "hint": "Popri existencii musí negácia vylúčiť všetky možnosti."
      },
      {
        "id": "extra-c",
        "type": "selfWrite",
        "phase": "3 · VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Dve zmeny naraz",
        "prompt": "Opíš, čo sa pri negácii stane s kvantifikátorom a s vlastnosťou.",
        "model": "Všeobecný kvantifikátor sa zmení na existenčný a vlastnosť sa neguje; existenčný sa zmení na všeobecný a vlastnosť sa neguje."
      },
      {
        "id": "zbierka", "type": "taskList", "phase": "4 · ZBIERKA", "skill": "Negácia kvantifikátorov",
        "title": "Neguj kvantifikovaný výrok",
        "html": "<p class=\"muted\">Použi tabuľku vzorov zo zošita. Odfajkni si úlohu, keď máš negáciu hotovú — riešenie si over tlačidlom.</p>",
        "items": [
          { "level": "zaklad", "text": "Všetci žiaci mali pravdu.", "answer": "Aspoň jeden žiak nemal pravdu." },
          { "level": "zaklad", "text": "Nikto neodišiel.", "answer": "Aspoň jeden odišiel." },
          { "level": "zaklad", "text": "Každý mlčal.", "answer": "Aspoň jeden hovoril." },
          { "level": "rozsirenie", "text": "Rovnica má práve jeden koreň.", "answer": "Rovnica nemá žiadny koreň alebo má aspoň dva korene." },
          { "level": "rozsirenie", "text": "Najviac traja chýbajú.", "answer": "Aspoň štyria chýbajú." },
          { "level": "rozsirenie", "text": "Meškal si aspoň 10 minút.", "answer": "Meškal si najviac 9 minút." },
          { "level": "bonus", "text": "Priamky majú spoločný najviac jeden bod.", "answer": "Priamky majú spoločné aspoň dva body." },
          { "level": "bonus", "text": "Paraboly majú spoločné práve tri body.", "answer": "Paraboly majú spoločné najviac dva body alebo aspoň štyri body." },
          { "level": "bonus", "text": "Aspoň jeden koreň rovnice nie je záporný.", "answer": "Každý koreň rovnice je záporný." }
        ]
      },
      {
        "id": "zhrnutie", "type": "info", "phase": "5 · ZHRNUTIE", "title": "Čo si sa dnes naučil/a",
        "html": "<ul><li>¬(∀x P(x)) ⇔ ∃x ¬P(x) a ¬(∃x P(x)) ⇔ ∀x ¬P(x).</li><li>Číselné kvantifikátory sa negujú podľa vzoru: aspoň n → najviac n−1, najviac n → aspoň n+1, práve n → menej alebo viac.</li><li>Na vyvrátenie všeobecného tvrdenia stačí jeden protipríklad.</li></ul>",
        "continueLabel": "Na záver sa zhodnotím"
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "5 · ZÁVER",
        "title": "Negácia kvantifikátorov",
        "skills": [
          "negácia ∀",
          "negácia ∃",
          "protipríklad",
          "rozdiel „nie všetky“ a „žiadne“"
        ],
        "prompt": "Pri každej položke vyber, ako dobre jej teraz rozumieš. Toto nie je známka; je to spätná väzba pre tvoje ďalšie učenie."
      }
    ]
  }
});
