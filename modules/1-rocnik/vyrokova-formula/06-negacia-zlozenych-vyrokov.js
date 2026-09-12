MathPlatform.registerModule({
  "id": "1-u01-h006",
  "teacher": {
    "placement": "1. ročník · Výroková formula · 6.–7. hodina: Negácia zložených výrokov",
    "prerequisites": [
      "logické spojky a ich pravdivostné tabuľky",
      "negácia jednoduchého výroku"
    ],
    "planContent": [
      "Relevantný obsah aktuálneho tematického plánu: Výroky a ich pravdivostná hodnota; jednoduchý výrok a jeho negácia; logické spojky; negácia zložených výrokov a de Morganove zákony; tautológie, kontradikcie a kontingencie; obmena, obrátenie a negácia implikácie; všeobecný a existenčný kvantifikátor; negácia kvantifikovaných výrokov; priamy, nepriamy dôkaz a dôkaz sporom; aplikácie výrokovej logiky; opakovanie a kontrolná písomná práca.",
      "Táto hodina rieši negáciu konjunkcie, disjunkcie a implikácie; negácia ekvivalencie sa tu nezavádza, lebo v tematickom pláne nemá samostatné miesto."
    ],
    "planPerformance": [
      "Vysvetliť de Morganove pravidlá pre negáciu výrokov A ∧ B a A ∨ B.",
      "Utvoriť negáciu výroku pomocou pravidiel pre negáciu základných zložených výrokov."
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
      "0–3 min: KDE SME – zo spojok (4.–5. hodina) prechádzame k ich negácii.",
      "3–10 min: NOVÝ POJEM – De Morganove pravidlá a negácia implikácie, s vizuálom a zdôvodnením.",
      "10–22 min: OVER SI – objavovanie, kontrola pravidiel, zošit, argumentácia.",
      "22–34 min: ZBIERKA – negácia zložených výrokov z troch úrovní náročnosti.",
      "34–38 min: ZHRNUTIE a sebahodnotenie."
    ],
    "diagnostics": [
      "nepoužíva nesprávne ¬(A∧B)=¬A∧¬B",
      "vie, že negácia implikácie je A∧¬B",
      "dokáže pravidlo overiť tabuľkou"
    ],
    "partialUse": [
      "Modul je navrhnutý na celú vyučovaciu hodinu; pri potrebe skrátiť možno vynechať jednu úroveň zbierky.",
      "Zbierkové úlohy sú nebodované, žiak si ich rieši na papieri a v aplikácii iba odfajkne.",
      "Digitálna aktivita nenahrádza ručný zápis, diskusiu pri tabuli ani zdôvodnenie vlastnými slovami."
    ]
  },
  "student": {
    "title": "Keď negujeme celú vetu",
    "subtitle": "Téma 06–07 · De Morganove pravidlá a negácia implikácie",
    "intro": "Pri zloženom výroku nestačí pridať slovo „nie“. Negácia mení aj logickú spojku.",
    "estimatedTime": "35–38 min (celá hodina)",
    "activities": [
      {
        "id": "kde-sme", "type": "info", "phase": "0 · KDE SME", "title": "Zo spojok k ich negácii",
        "html": "<p>Na predošlej hodine sme sa naučili spájať výroky spojkami ∧, ∨, ⇒, ⇔ a vyhodnocovať ich pravdivosť. Dnes zistíme, ako taký zložený výrok <strong>negovať</strong>.</p><p class=\"keyidea\">Negáciu ekvivalencie dnes nepotrebuješ — venujeme sa konjunkcii, disjunkcii a implikácii.</p>",
        "continueLabel": "Idem na to"
      },
      {
        "id": "visual",
        "type": "info",
        "phase": "1 · ZAČÍNAME",
        "title": "Dve základné premeny",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 230\" role=\"img\" aria-label=\"De Morganove pravidlá\"><g font-family=\"system-ui\" text-anchor=\"middle\"><rect x=\"40\" y=\"30\" width=\"300\" height=\"70\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"190\" y=\"72\" font-size=\"25\" font-weight=\"700\">¬(A ∧ B)</text><text x=\"380\" y=\"74\" font-size=\"25\">⇔</text><rect x=\"420\" y=\"30\" width=\"300\" height=\"70\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"570\" y=\"72\" font-size=\"25\" font-weight=\"700\">¬A ∨ ¬B</text><rect x=\"40\" y=\"130\" width=\"300\" height=\"70\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"190\" y=\"172\" font-size=\"25\" font-weight=\"700\">¬(A ∨ B)</text><text x=\"380\" y=\"174\" font-size=\"25\">⇔</text><rect x=\"420\" y=\"130\" width=\"300\" height=\"70\" rx=\"16\" fill=\"currentColor\" opacity=\".08\"/><text x=\"570\" y=\"172\" font-size=\"25\" font-weight=\"700\">¬A ∧ ¬B</text></g></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "dm1",
        "type": "choice",
        "phase": "3 · OBJAVUJ",
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
        "phase": "3 · OBJAVUJ",
        "skill": "De Morgan",
        "question": "Neguj vetu: „x < 0 alebo x > 10“.",
        "options": [
          "x ≥ 0 alebo x ≤ 10",
          "x < 0 a zároveň x > 10",
          "x ≥ 0 a zároveň x ≤ 10"
        ],
        "answer": 2,
        "correct": "Správne. Aby neplatila ani jedna z možností, musia súčasne platiť obe negácie.",
        "hint": "Pri negácii disjunkcie sa „alebo“ mení na „a zároveň“."
      },
      {
        "id": "why",
        "type": "explain",
        "phase": "1 · POCHOP",
        "title": "Prečo sa spojka mení?",
        "html": "<p>De Morganove pravidlá nevznikli ako trik na zapamätanie. Vyjadrujú presne, kedy pôvodné zložené tvrdenie zlyhá.</p><p><strong>¬(A ∧ B)</strong>: nie je pravda, že platia obe → aspoň jedna neplatí.<br><strong>¬(A ∨ B)</strong>: neplatí ani jedna možnosť → neplatí A a zároveň neplatí B.</p>",
        "remember": "Neguj časti a vymeň ∧ ↔ ∨."
      },
      {
        "id": "impneg",
        "type": "choice",
        "phase": "3 · PREMÝŠĽAJ",
        "skill": "Negácia implikácie",
        "question": "Kedy je veta „Ak A, tak B“ nepravdivá?",
        "options": [
          "Keď A platí a B neplatí.",
          "Keď A neplatí a B platí.",
          "Keď neplatia A ani B."
        ],
        "answer": 0,
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
        "phase": "3 · OVER SI",
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
        "phase": "3 · VYJADRI SA",
        "skill": "Argumentácia",
        "title": "Vysvetli De Morganovo pravidlo",
        "promptHtml": "<span class=\"mini-label\">ÚLOHA DO ZOŠITA</span><br>Vlastnými slovami vysvetli, prečo negácia vety „Mám ceruzku a pravítko“ znie „Nemám ceruzku alebo nemám pravítko“.",
        "model": "<strong>MOŽNÁ PRESNÁ FORMULÁCIA:</strong> Pôvodná veta tvrdí, že mám obe veci. Je nepravdivá už vtedy, keď mi chýba aspoň jedna z nich, preto sa pri negácii spojka „a“ mení na „alebo“."
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "3 · OVER SI",
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
        "phase": "3 · VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Povedz pravidlo slovami",
        "prompt": "Vysvetli vlastnými slovami, ako sa zmení spojka „a“ pri negácii zloženého výroku.",
        "model": "Negácia výroku „A a B“ má tvar „nie A alebo nie B“. Spojka „a“ sa pri negácii zmení na „alebo“ a negujú sa obe časti."
      },
      {
        "id": "zbierka", "type": "taskList", "phase": "4 · ZBIERKA", "skill": "Negácia zložených výrokov",
        "title": "Neguj presne",
        "html": "<p class=\"muted\">Ku každej vete napíš presnú negáciu podľa De Morganových pravidiel. Odfajkni si úlohu, keď máš hotovo — riešenie si over tlačidlom.</p>",
        "items": [
          { "level": "zaklad", "text": "A: Mám peniaze a nemám bicykel.", "answer": "¬A: Nemám peniaze alebo mám bicykel." },
          { "level": "zaklad", "text": "B: Pôjdem do kina alebo do divadla.", "answer": "¬B: Nepôjdem do kina ani do divadla (nepôjdem do kina a nepôjdem do divadla)." },
          { "level": "rozsirenie", "text": "x ≥ 5 alebo x ≤ −2", "answer": "Negácia: x &lt; 5 a zároveň x &gt; −2." },
          { "level": "rozsirenie", "text": "Číslo n je párne a n je väčšie ako 10.", "answer": "Negácia: Číslo n je nepárne alebo n nie je väčšie ako 10 (n ≤ 10)." },
          { "level": "bonus", "text": "Ak bude pekne, potom pôjdem do kina.", "answer": "Negácia: Bude pekne a ja nepôjdem do kina." },
          { "level": "bonus", "text": "Ak je číslo deliteľné 10, potom je deliteľné aj 5.", "answer": "Negácia: Číslo je deliteľné 10 a nie je deliteľné 5." }
        ]
      },
      {
        "id": "zhrnutie", "type": "info", "phase": "5 · ZHRNUTIE", "title": "Čo si sa dnes naučil/a",
        "html": "<ul><li>¬(A ∧ B) ⇔ ¬A ∨ ¬B a ¬(A ∨ B) ⇔ ¬A ∧ ¬B — spojka sa pri negácii vymení.</li><li>¬(A ⇒ B) ⇔ A ∧ ¬B — implikácia sa negáciou nemení na inú implikáciu.</li><li>Negáciu vždy over dosadením alebo tabuľkou, nie iba „citom“.</li></ul>",
        "continueLabel": "Na záver sa zhodnotím"
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "5 · ZÁVER",
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
