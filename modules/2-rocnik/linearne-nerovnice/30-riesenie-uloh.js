MathPlatform.registerModule({
  "id": "2-u04-h030",
  "teacher": {
    "placement": "2. ročník · Lineárne nerovnice · 30. hodina: Riešenie úloh",
    "prerequisites": [
      "učivo ZŠ a 1. ročníka: číselná os, nerovnosti, intervaly (zápis ⟨a;b), (−∞;a⟩ …), prienik množín a absolútna hodnota",
      "2. ročník: lineárne rovnice, ekvivalentné úpravy nerovníc (otočenie znamienka pri násobení a delení záporným číslom), nerovnice s neznámou v menovateli, nerovnice s absolútnou hodnotou a sústavy nerovníc (hodiny 24–29)"
    ],
    "planContent": [
      "V poskytnutom tematickom pláne nie je pri tematickom celku „Lineárne nerovnice“ vyplnený samostatný obsahový štandard. Modul preto nevydáva doplnený text za oficiálny obsahový štandard; vychádza z názvu tematického celku a konkrétnej témy hodiny."
    ],
    "planPerformance": [
      "V poskytnutom tematickom pláne nie je pri tematickom celku „Lineárne nerovnice“ vyplnený samostatný výkonový štandard. Ciele nižšie sú ciele tejto vyučovacej hodiny, nie vymyslený oficiálny výkonový štandard."
    ],
    "goals": [
      "Kognitívny cieľ: žiak v zmiešanej úlohe rozpozná typ nerovnice (lineárna, sústava, s absolútnou hodnotou, s neznámou v menovateli, slovná úloha) a zvolí zodpovedajúci postup.",
      "Praktický cieľ: žiak vyrieši nerovnicu alebo sústavu, výsledok zapíše intervalom, znázorní ho na číselnej osi a urobí skúšku dosadením.",
      "Praktický cieľ: žiak preloží slovnú podmienku („najviac“, „menej ako“, „aspoň“) na nerovnosť a interpretuje výsledok v kontexte úlohy.",
      "Afektívny cieľ: žiak si sám všíma typické chyby (znamienko pri zápornom čísle, krajné body, zjednotenie namiesto prieniku) a vie ich opraviť.",
      "Kritérium úspechu: v digitálnej časti žiak správne vyrieši väčšinu bodovaných položiek a v zošite vyrieši sústavu s úplným zápisom a skúškou."
    ],
    "competencies": [
      "presný matematický zápis a komunikácia",
      "logické a analytické myslenie; kontrola podmienok a riešenia",
      "prechod medzi algebraickým zápisom, intervalom a číselnou osou",
      "samostatnosť, spolupráca a vecné zdôvodnenie postupu"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je iba obohatením spôsobu práce: modelovanie reálnej situácie nerovnicou, interpretácia množiny riešení, kontrola podmienok a argumentácia. Neurčuje poradie ani rozsah učiva.",
      "Rozšírenie pre rýchlejších žiakov: položky úrovne ROZŠÍRENIE a BONUS v zbierke (kombinácia absolútnej hodnoty so sústavou, nerovnica bez riešenia)."
    ],
    "flow": [
      "0–5 min – aktivácia: žiaci pomenujú pravidlá úprav nerovníc (záporné číslo otáča znamienko) a zápis intervalu.",
      "5–15 min – spoločný rozbor štyroch vzorových príkladov (sústava, absolútna hodnota, slovná úloha, menovateľ) so skúškou dosadením.",
      "15–40 min – platforma (cca 25–35 min podľa tempa): preklad textu → voľba typu → riešenie → hľadanie chyby. Počítanie na papieri.",
      "Samostatná práca bez mobilu: sústava v zošite so skúškou; zbierka úloh podľa úrovní (ZÁKLAD / ROZŠÍRENIE / BONUS).",
      "Posledných 5 min – spoločná kontrola krajných bodov, sebahodnotenie."
    ],
    "diagnostics": [
      "či žiak pri delení záporným číslom otočí znamienko nerovnosti",
      "či pri sústave berie prienik (a nie zjednotenie) a správne zapíše otvorené/uzavreté konce",
      "či pri |x − a| < b a |x − a| > b rozlíši „medzi“ a „mimo“",
      "či pri neznámej v menovateli určí podmienku menovateľ ≠ 0 a znamienko zlomku",
      "či v slovnej úlohe interpretuje výsledok (napr. najväčší možný počet je celé číslo)"
    ],
    "partialUse": [
      "Modul možno použiť celý (cca 25–35 min), alebo len prvú polovicu (po NÁJDI CHYBU) a zbierku zadať ako domácu úlohu.",
      "Pomôcky: zošit, číselná os; kalkulačka nie je potrebná. Zbierka a worksheet.tasks sú určené na papier – v generátore pracovných listov ich možno zaradiť na tlačený list.",
      "Medzipredmetové vzťahy: fyzika a odborné predmety – tolerancie, limity, cenové a tarifné podmienky.",
      "ŠVVP: znížiť počet položiek zbierky bez zníženia jadra cieľa, ponechať vzor postupu, umožniť ústne zdôvodnenie.",
      "Hodnotenie: priebežná spätná väzba a sebahodnotenie; XP nie sú známka."
    ]
  },
  "student": {
    "title": "Riešenie úloh",
    "subtitle": "Téma 30 · Lineárne nerovnice",
    "intro": "Zmiešané úlohy z celého celku: sústavy, absolútna hodnota, neznáma v menovateli a slovné úlohy. Počítaj na papieri, v aplikácii volíš postup, zapisuješ výsledok a hľadáš chyby.",
    "estimatedTime": "25–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme o nerovniciach",
        "html": "<p>V tomto celku si sa naučil/a riešiť viac druhov nerovníc. Pripomeňme si pravidlá, na ktorých všetko stojí:</p>\n<ol class=\"steps\"><li>K obom stranám môžeme pripočítať alebo odpočítať to isté číslo – znamienko sa nemení.</li><li>Obe strany môžeme vynásobiť alebo vydeliť <span class=\"hl\">kladným</span> číslom – znamienko sa nemení.</li><li>Obe strany vynásobíme alebo vydelíme <span class=\"hl\">záporným</span> číslom – znamienko sa <strong>otočí</strong>.</li><li>Výsledok zapíšeme ako interval, napr. x ≤ 5 je (−∞;5⟩ a x > −2 je (−2;∞).</li></ol>\n<p>Pri sústave nerovníc musia platiť <strong>obe podmienky naraz</strong>, preto berieme <strong>prienik</strong> riešení.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "rozpoznať, o aký typ nerovnice ide (obyčajná, sústava, s absolútnou hodnotou, s neznámou v menovateli)",
          "preložiť slovnú úlohu na nerovnicu a výsledok správne interpretovať",
          "zapísať riešenie intervalom a urobiť skúšku dosadením"
        ]
      },
      {
        "id": "strategy",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Ako pristúpiť k zmiešanej úlohe",
        "html": "<p>V praxi ti nikto nepovie, aký typ úlohy dostaneš. Preto vždy začni rovnakou otázkou:</p>\n<ol class=\"steps\"><li><strong>Čo je v zadaní?</strong> Je tam absolútna hodnota |…|, neznáma v menovateli, alebo dve podmienky naraz (sústava)? Je zadanie slovné?</li><li><strong>Preložím zadanie</strong> do nerovnice (slová „najviac“ → ≤, „menej ako“ → <, „aspoň“ → ≥, „viac ako“ → >).</li><li><strong>Vyriešim ju</strong> ekvivalentnými úpravami; pri zápornom čísle otočím znamienko.</li><li><strong>Zapíšem interval</strong> a pri sústave urobím prienik.</li><li><strong>Skúška:</strong> dosadím jedno číslo z intervalu (musí platiť) a jedno mimo (nesmie platiť) – a pri krajnom bode zistím, či patrí.</li></ol>",
        "remember": "Najprv rozpoznaj typ, potom rieš, nakoniec urob skúšku jedným číslom vnútri a jedným mimo intervalu."
      },
      {
        "id": "ex-system",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Vzorový príklad 1: sústava",
        "html": "<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1 · SÚSTAVA</span>\n<p>Vyrieš sústavu: 2(x − 1) ≤ x + 3 a 3 − x < 5.</p>\n<p><strong>1. nerovnica:</strong> 2x − 2 ≤ x + 3, teda x ≤ 5.</p>\n<p><strong>2. nerovnica:</strong> 3 − x < 5, teda −x < 2. Delíme číslom −1, preto sa znamienko <strong>otočí</strong>: x > −2.</p>\n<p><strong>Prienik:</strong> x > −2 a zároveň x ≤ 5, teda <strong>(−2;5⟩</strong>.</p>\n<p>Skúška: x = 0 → 2·(−1) = −2 ≤ 3 ✓ a 3 − 0 = 3 < 5 ✓. x = −2 → 3 − (−2) = 5 < 5 ✗ (krajný bod −2 nepatrí). x = 5 → 2·4 = 8 ≤ 8 ✓ a −2 < 5 ✓.</p></div>\n<div class=\"warning\"><strong>Pozor:</strong> −x < 2 neznamená x < −2. Pri delení číslom −1 sa znamienko otočí, takže správne je x > −2.</div>"
      },
      {
        "id": "ex-abs",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Vzorový príklad 2: absolútna hodnota",
        "html": "<p>|x − a| je vzdialenosť čísla x od čísla a. Preto:</p>\n<div class=\"compare\"><div class=\"good\"><span class=\"mini-label\">|x − a| &lt; b</span><p>x je od a bližšie ako b:<br>−b &lt; x − a &lt; b<br>(jeden interval „medzi“)</p></div><div class=\"good\"><span class=\"mini-label\">|x − a| &gt; b</span><p>x je od a ďalej ako b:<br>x − a &lt; −b <strong>alebo</strong> x − a &gt; b<br>(zjednotenie „mimo“)</p></div></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2</span><p>|x − 1| &lt; 3</p><p>−3 &lt; x − 1 &lt; 3 → pripočítame 1 → −2 &lt; x &lt; 4</p><p>Riešenie: <strong>(−2;4)</strong>. Skúška: x = 1 → |0| = 0 &lt; 3 ✓; x = 4 → |3| = 3 &lt; 3 ✗.</p></div>"
      },
      {
        "id": "ex-word",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Vzorový príklad 3: slovná úloha",
        "html": "<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 3 · SLOVNÁ ÚLOHA</span>\n<p>Taxi si účtuje 2 € nástupné a 0,80 € za každý kilometer. Koľko kilometrov môžem najviac prejsť, ak mám 10 €?</p>\n<p>Neznáma: x = počet kilometrov. „Najviac 10 €“ znamená: 2 + 0,8x ≤ 10.</p>\n<p>0,8x ≤ 8 → x ≤ 10. Okrem toho x ≥ 0 (vzdialenosť nie je záporná).</p>\n<p>Riešenie: <strong>⟨0;10⟩</strong>, najviac <strong>10 km</strong>. Skúška: 2 + 0,8·10 = 10 ✓.</p></div>\n<div class=\"warning\"><strong>Pozor:</strong> výsledok slovnej úlohy vždy zapíš slovami (10 km) a skontroluj, či dáva zmysel – počet kusov musí byť celé nezáporné číslo.</div>"
      },
      {
        "id": "ex-denom",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Vzorový príklad 4: neznáma v menovateli",
        "html": "<p>Zlomok s neznámou v menovateli má zmysel iba vtedy, keď je menovateľ <strong>nenulový</strong>. Znamienko zlomku určuje znamienko čitateľa a menovateľa.</p>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 4</span>\n<p>Pre ktoré x je zlomok <span class=\"frac\"><span class=\"frac-num\">6</span><span class=\"frac-den\">3 − x</span></span> kladný?</p>\n<p>Čitateľ 6 je kladný, preto zlomok je kladný práve vtedy, keď je kladný menovateľ: 3 − x &gt; 0, teda x &lt; 3.</p>\n<p>Riešenie: <strong>(−∞;3)</strong>. Číslo 3 nepatrí (menovateľ by bol 0). Skúška: x = 0 → 6/3 = 2 &gt; 0 ✓; x = 5 → 6/(−2) = −3 ✗.</p></div>"
      },
      {
        "id": "c-sys",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "sústava nerovníc",
        "question": "Vyrieš sústavu 3x − 4 > 2 a x + 1 ≤ 7. Ktorý interval je jej riešením?",
        "options": [
          "(2;6⟩",
          "⟨2;6)",
          "(−∞;2) ∪ ⟨6;∞)",
          "(2;∞)"
        ],
        "answer": 0,
        "correct": "Správne. Prvá dá 3x > 6, teda x > 2; druhá x ≤ 6. Prienik je (2;6⟩ – dvojka nepatrí, šestka patrí.",
        "hint": "Vyrieš každú nerovnicu zvlášť a potom vezmi spoločnú časť. Pozor na to, ktorý krajný bod patrí."
      },
      {
        "id": "n-int",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "sústava nerovníc",
        "title": "Celé riešenia sústavy",
        "prompt": "Koľko celých čísel vyhovuje sústave 3x − 4 > 2 a x + 1 ≤ 7?",
        "validate": "exact",
        "answer": 4,
        "success": "Riešenie je (2;6⟩, celé čísla sú 3, 4, 5, 6 – teda 4.",
        "hint": "Najprv urči interval riešení, potom vypíš celé čísla, ktoré do neho patria (pozor na krajné body).",
        "reveal": "Správne je 4: z intervalu (2;6⟩ sú to čísla 3, 4, 5 a 6."
      },
      {
        "id": "c-abs1",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "absolútna hodnota",
        "question": "Ktorý interval je riešením nerovnice |x − 1| < 3?",
        "options": [
          "(−∞;−2) ∪ (4;∞)",
          "(−3;3)",
          "(−2;4)",
          "⟨−2;4⟩"
        ],
        "answer": 2,
        "correct": "Správne. −3 < x − 1 < 3, po pripočítaní 1 je −2 < x < 4. Nerovnosť je ostrá, preto krajné body nepatria.",
        "hint": "Čísla x majú byť od 1 vzdialené menej ako 3. Aké x leží „medzi“ 1 − 3 a 1 + 3?"
      },
      {
        "id": "c-abs2",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "absolútna hodnota",
        "question": "Ktorý zápis je riešením nerovnice |x + 2| ≥ 1?",
        "options": [
          "⟨−3;−1⟩",
          "(−∞;−3⟩ ∪ ⟨−1;∞)",
          "(−∞;−3) ∪ (−1;∞)",
          "⟨−1;∞)"
        ],
        "answer": 1,
        "correct": "Správne. x + 2 ≤ −1 alebo x + 2 ≥ 1, teda x ≤ −3 alebo x ≥ −1. Znamienko ≥ zahŕňa krajné body.",
        "hint": "Pri „≥“ chceme x ďaleko od −2 (aspoň 1). Rozpadne sa to na dve časti a krajné body patria."
      },
      {
        "id": "c-dom",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "neznáma v menovateli",
        "question": "Pre ktoré x má výraz 5/(2x − 8) zmysel?",
        "options": [
          "pre všetky x ≠ −4",
          "pre všetky x ≠ 2",
          "pre x > 4",
          "pre všetky x ≠ 4"
        ],
        "answer": 3,
        "correct": "Správne. Menovateľ 2x − 8 nesmie byť 0, teda x ≠ 4. Pre x < 4 má výraz zmysel tiež – len je záporný.",
        "hint": "Zisti, pre ktoré x je menovateľ rovný nule – také x vylúč. Nič iné vylúčené nie je."
      },
      {
        "id": "c-den",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "neznáma v menovateli",
        "question": "Pre ktoré x je zlomok 8/(x − 2) záporný?",
        "options": [
          "(2;∞)",
          "(−∞;2)",
          "(−∞;2⟩",
          "(−∞;−2)"
        ],
        "answer": 1,
        "correct": "Správne. Čitateľ 8 je kladný, zlomok je záporný práve vtedy, keď je menovateľ záporný: x − 2 < 0, teda x < 2. Dvojka nepatrí.",
        "hint": "Kladné číslo delené záporným dáva záporné číslo. Ktoré x robí menovateľ záporným? A môže 2 patriť do riešenia?"
      },
      {
        "id": "n-word1",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "slovná úloha",
        "title": "Zošity za zvyšné peniaze",
        "prompt": "Eva má 20 € a už kúpila pero za 3,20 €. Zošit stojí 1,20 €. Koľko zošitov môže najviac kúpiť?",
        "validate": "exact",
        "answer": 14,
        "success": "3,2 + 1,2x ≤ 20, teda 1,2x ≤ 16,8 a x ≤ 14. Štrnásť zošitov stojí presne 16,80 €.",
        "hint": "Zapíš „celkové výdavky najviac 20 €“ ako nerovnicu 3,2 + 1,2x ≤ 20 a vyrieš ju.",
        "reveal": "Správne je 14: 1,2x ≤ 16,8, teda x ≤ 14."
      },
      {
        "id": "n-word2",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "slovná úloha",
        "title": "Obvod obdĺžnika",
        "prompt": "Obdĺžnik má strany x cm a (x + 4) cm. Jeho obvod má byť najviac 36 cm. Aká je najväčšia možná hodnota x (v cm)?",
        "validate": "exact",
        "answer": 7,
        "success": "2(x + x + 4) ≤ 36 → 4x + 8 ≤ 36 → x ≤ 7. Pre x = 7 je obvod 2·(7 + 11) = 36 cm.",
        "hint": "Obvod je 2·(a + b). Zapíš 2(x + x + 4) ≤ 36 a vyrieš.",
        "reveal": "Správne je 7: 4x + 8 ≤ 36, teda x ≤ 7."
      },
      {
        "id": "n-abs-int",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "absolútna hodnota",
        "title": "Celé riešenia s absolútnou hodnotou",
        "prompt": "Koľko celých čísel vyhovuje nerovnici |x − 1| < 3?",
        "validate": "exact",
        "answer": 5,
        "success": "Riešenie je (−2;4), celé čísla sú −1, 0, 1, 2, 3 – teda 5.",
        "hint": "Interval je (−2;4). Krajné body −2 a 4 nepatria – vypíš celé čísla medzi nimi.",
        "reveal": "Správne je 5: čísla −1, 0, 1, 2 a 3."
      },
      {
        "id": "sc-special",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "špeciálne prípady",
        "title": "Všetky x, alebo žiadne x?",
        "question": "Po úprave niektorých nerovníc zostane tvrdenie, ktoré platí vždy, alebo tvrdenie, ktoré nikdy neplatí. Zaraď každú nerovnicu.",
        "labels": [
          "Platí pre každé reálne x (ℝ)",
          "Nemá riešenie (∅)"
        ],
        "items": [
          {
            "text": "x + 3 > x + 1",
            "answer": true,
            "why": "Po odpočítaní x zostane 3 > 1, čo platí vždy – riešenie je ℝ."
          },
          {
            "text": "3x + 2 ≤ 3x − 1",
            "answer": false,
            "why": "Po odpočítaní 3x zostane 2 ≤ −1, čo neplatí nikdy – riešenie je ∅."
          },
          {
            "text": "2x − 1 < 2x + 4",
            "answer": true,
            "why": "Zostane −1 < 4, čo platí vždy – riešenie je ℝ."
          },
          {
            "text": "x − 5 ≥ x − 4",
            "answer": false,
            "why": "Zostane −5 ≥ −4, čo neplatí – riešenie je ∅."
          },
          {
            "text": "2(x + 1) > 2x + 2",
            "answer": false,
            "why": "Po roznásobení 2x + 2 > 2x + 2, teda 2 > 2 – neplatí (ostrá nerovnosť), riešenie je ∅."
          },
          {
            "text": "4x ≥ 4x",
            "answer": true,
            "why": "Obe strany sú rovnaké a „≥“ rovnosť dovoľuje – platí pre každé x."
          }
        ]
      },
      {
        "id": "mx-sys",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "sústava nerovníc",
        "title": "Priraď sústave jej riešenie",
        "labels": [
          "(−2;5⟩",
          "⟨1;4)",
          "∅",
          "(3;∞)"
        ],
        "items": [
          {
            "text": "x > −2 a x ≤ 5",
            "answer": "(−2;5⟩"
          },
          {
            "text": "2x − 1 ≥ 1 a x < 4",
            "answer": "⟨1;4)"
          },
          {
            "text": "x > 3 a x < 1",
            "answer": "∅"
          },
          {
            "text": "x > 1 a 2x − 3 > 3",
            "answer": "(3;∞)"
          }
        ]
      },
      {
        "id": "c-err1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "chyba v riešení",
        "question": "Žiak rieši nerovnicu −2x > 6 a napíše: „x > −3“. Kde je chyba a aké je správne riešenie?",
        "options": [
          "Pri delení číslom −2 sa malo znamienko otočiť: x < −3, teda (−∞;−3).",
          "Chyba je v delení: správne je x > 3, teda (3;∞).",
          "Chyba je v intervale: správne je ⟨−3;∞).",
          "Žiadna chyba, riešenie x > −3 je správne."
        ],
        "answer": 0,
        "correct": "Správne. Delenie záporným číslom otočí znamienko: x < −3. Skúška: x = −4 → −2·(−4) = 8 > 6 ✓, ale x = 0 → 0 > 6 ✗.",
        "hint": "Dosaď do pôvodnej nerovnice x = 0, ktoré podľa žiaka vyhovuje. Platí −2·0 > 6?"
      },
      {
        "id": "c-err2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "chyba v riešení",
        "question": "Žiak rieši sústavu x > 1 a x < 4 a výsledok zapíše ako (−∞;1) ∪ (4;∞). Čo spravil zle?",
        "options": [
          "Zle otočil znamienko; správne je (4;1).",
          "Zvolil zjednotenie „mimo“ namiesto prieniku „medzi“; správne je (1;4).",
          "Krajné body mali byť uzavreté: ⟨1;4⟩.",
          "Nič, sústava nemá riešenie."
        ],
        "answer": 1,
        "correct": "Správne. Pri sústave musia platiť obe podmienky naraz – číslo musí byť väčšie ako 1 a zároveň menšie ako 4, teda leží medzi nimi: (1;4).",
        "hint": "Skús x = 2. Vyhovuje obom podmienkam? Patrí do žiakovho riešenia?"
      },
      {
        "id": "manual",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha do zošita",
        "html": "<span class=\"mini-label\">ÚLOHA DO ZOŠITA</span><p>Vyrieš sústavu nerovníc <strong>5 − 2x ≥ −1</strong> a <strong>3x + 1 > −5</strong>. Každú nerovnicu rieš zvlášť, znázorni obe riešenia na jednej číselnej osi, zapíš výsledok intervalom a urob skúšku: dosaď jedno číslo z intervalu a jedno číslo mimo neho.</p>",
        "continueLabel": "Mám zapísané"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: riešenie úloh",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Riešenia píš do zošita. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Vyrieš: 4x − 3 ≤ 9. Výsledok zapíš intervalom.",
            "answer": "4x ≤ 12 → x ≤ 3, teda (−∞;3⟩."
          },
          {
            "level": "zaklad",
            "text": "Vyrieš: 5 − 2x < 11. Výsledok zapíš intervalom.",
            "answer": "−2x < 6 → delíme −2, znamienko sa otočí: x > −3, teda (−3;∞)."
          },
          {
            "level": "zaklad",
            "text": "Vyrieš sústavu: x + 2 > 1 a 2x ≤ 10.",
            "answer": "x > −1 a x ≤ 5. Prienik: (−1;5⟩."
          },
          {
            "level": "zaklad",
            "text": "Pre ktoré x má výraz 7/(x + 5) zmysel?",
            "answer": "Menovateľ musí byť nenulový: x + 5 ≠ 0, teda x ≠ −5, t. j. (−∞;−5) ∪ (−5;∞)."
          },
          {
            "level": "rozsirenie",
            "text": "Vyrieš: 3(x − 2) − x ≥ 2x − 5.",
            "answer": "3x − 6 − x ≥ 2x − 5 → 2x − 6 ≥ 2x − 5 → −6 ≥ −5, čo neplatí. Riešenie: <strong>∅</strong> (nerovnica nemá riešenie)."
          },
          {
            "level": "rozsirenie",
            "html": "Vyrieš: <span class=\"frac\"><span class=\"frac-num\">x + 1</span><span class=\"frac-den\">2</span></span> − <span class=\"frac\"><span class=\"frac-num\">x − 1</span><span class=\"frac-den\">3</span></span> &gt; 1.",
            "answer": "Vynásobíme 6 (kladné číslo): 3(x + 1) − 2(x − 1) > 6 → 3x + 3 − 2x + 2 > 6 → x + 5 > 6 → x > 1, teda (1;∞)."
          },
          {
            "level": "rozsirenie",
            "text": "Vyrieš: |2x − 1| < 5.",
            "answer": "−5 < 2x − 1 < 5 → −4 < 2x < 6 → −2 < x < 3, teda (−2;3)."
          },
          {
            "level": "rozsirenie",
            "text": "Mobilný tarif stojí 5 € mesačne a 0,06 € za každú minútu hovoru. Koľko minút môžem mesačne najviac telefonovať, ak môžem minúť 11 €?",
            "answer": "5 + 0,06x ≤ 11 → 0,06x ≤ 6 → x ≤ 100. Najviac <strong>100 minút</strong>."
          },
          {
            "level": "bonus",
            "text": "Vyrieš sústavu: 2x − 1 < 3x + 2 a 4 − x ≥ 1 − 2x.",
            "answer": "Prvá: −3 < x. Druhá: x ≥ −3. Prienik: x > −3 (číslo −3 prvú nerovnicu nespĺňa), teda (−3;∞)."
          },
          {
            "level": "bonus",
            "text": "Vyrieš sústavu: |x − 3| ≥ 2 a x < 4.",
            "answer": "|x − 3| ≥ 2 → x ≤ 1 alebo x ≥ 5. S podmienkou x < 4 zostane len x ≤ 1, teda (−∞;1⟩."
          },
          {
            "level": "bonus",
            "html": "Pre ktoré x je zlomok <span class=\"frac\"><span class=\"frac-num\">5</span><span class=\"frac-den\">3 − x</span></span> kladný a zároveň platí 2x − 1 ≥ 3?",
            "answer": "Zlomok je kladný pre 3 − x > 0, t. j. x < 3. Zároveň 2x ≥ 4, t. j. x ≥ 2. Prienik: ⟨2;3)."
          }
        ]
      },
      {
        "id": "sw",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Vysvetli rozdiel",
        "prompt": "Vysvetli vlastnými slovami, prečo sa riešenie sústavy nerovníc zapisuje ako prienik, ale riešenie nerovnice |x| > 2 ako zjednotenie dvoch intervalov.",
        "model": "Pri sústave musia platiť obe podmienky naraz, preto berieme len spoločné čísla (prienik). Pri |x| > 2 hľadáme čísla, ktoré sú od nuly ďalej ako 2 – môžu byť vľavo (x < −2) aj vpravo (x > 2), každé z nich vyhovuje, preto spájame oba intervaly (zjednotenie)."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "rozpoznanie typu nerovnice",
          "sústava nerovníc a prienik",
          "absolútna hodnota v nerovnici",
          "nerovnica s neznámou v menovateli",
          "slovná úloha a jej interpretácia",
          "skúška dosadením"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka. Čo máš 🔴 alebo 🟡, si prejdi znova v zbierke."
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 4,
        "text": "Vyrieš nerovnicu a výsledok zapíš intervalom: 6 − 3x ≥ 0.",
        "answer": "−3x ≥ −6 → x ≤ 2, teda (−∞;2⟩."
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 5,
        "text": "Vyrieš sústavu: 2x + 3 > 1 a x − 4 ≤ 0.",
        "answer": "x > −1 a x ≤ 4, teda (−1;4⟩."
      },
      {
        "id": "w3",
        "level": "rozsirenie",
        "space": 5,
        "text": "Vyrieš nerovnicu: |x + 2| ≤ 3.",
        "answer": "−3 ≤ x + 2 ≤ 3 → −5 ≤ x ≤ 1, teda ⟨−5;1⟩."
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 5,
        "text": "Pre ktoré x je zlomok 4/(x − 3) kladný? Zapíš intervalom.",
        "answer": "Čitateľ je kladný, preto x − 3 > 0, teda x > 3, t. j. (3;∞)."
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 5,
        "text": "Predplatné hudobnej aplikácie je 3 € a každá kúpená skladba stojí 0,90 €. Koľko skladieb môžem kúpiť najviac, ak mám 12 €?",
        "answer": "3 + 0,9x ≤ 12 → 0,9x ≤ 9 → x ≤ 10. Najviac 10 skladieb."
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 6,
        "text": "Vyrieš sústavu: |x − 1| > 2 a 3x − 2 < 7.",
        "answer": "|x − 1| > 2 → x < −1 alebo x > 3. Druhá: 3x < 9 → x < 3. Prienik: x < −1, teda (−∞;−1)."
      }
    ]
  }
});
