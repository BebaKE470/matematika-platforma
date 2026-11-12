MathPlatform.registerModule({
  "id": "2-u04-h031",
  "teacher": {
    "placement": "2. ročník · Lineárne nerovnice · 31. hodina: Systematizácia učiva",
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
      "Kognitívny cieľ: žiak vie z tvaru zadania rozhodnúť, o aký typ nerovnice ide (obyčajná, so zlomkami, s neznámou v menovateli, s absolútnou hodnotou, sústava), a zvoliť postup.",
      "Praktický cieľ: žiak vyrieši nerovnicu každého z týchto typov a výsledok zapíše intervalom.",
      "Praktický cieľ: žiak rozpozná špeciálne prípady (∅, ℝ) a typické chyby celého celku.",
      "Afektívny cieľ: žiak si uvedomí, ktoré typy ešte nezvláda, a pred písomkou sa k nim vráti.",
      "Kritérium úspechu: žiak správne priradí typ k nerovnici a vyrieši väčšinu bodovaných položiek."
    ],
    "competencies": [
      "presný matematický zápis a komunikácia",
      "logické a analytické myslenie; kontrola podmienok a riešenia",
      "prechod medzi algebraickým zápisom, intervalom a číselnou osou",
      "samostatnosť, spolupráca a vecné zdôvodnenie postupu"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je iba obohatením spôsobu práce: porovnanie viacerých reprezentácií riešenia a argumentácia. Neurčuje poradie ani rozsah učiva.",
      "Žiaci môžu sami vytvoriť „mapu celku“ (schému typov nerovníc) a porovnať ju s rozhodovacím postupom z modulu."
    ],
    "flow": [
      "0–5 min – žiaci vymenujú typy nerovníc, ktoré sme v celku riešili.",
      "5–15 min – rozhodovací postup a typy nerovníc so vzorovým príkladom; spoločne riešime po jednom príklade z každého typu.",
      "15–40 min – platforma (cca 25–35 min podľa tempa): priraď typ → riešenie → špeciálne prípady → typické chyby.",
      "Samostatne bez mobilu: tri nerovnice rôznych typov do zošita; podľa času zbierka.",
      "Posledné 3 min – sebahodnotenie a rozhodnutie, čo si pred písomkou ešte prejsť."
    ],
    "diagnostics": [
      "či žiak správne rozozná typ nerovnice podľa zápisu (|…|, neznáma v menovateli, dve podmienky)",
      "či pre každý typ vie, či výsledkom je jeden interval, zjednotenie alebo prienik",
      "či pozná a vie opraviť typické chyby: znamienko pri zápornom čísle, krajné body, zlomok a nulový menovateľ",
      "či si žiak sám zvolí skúšku dosadením"
    ],
    "partialUse": [
      "Modul možno použiť celý (25–35 min), alebo iba prvé dve tretiny a zbierku zadať ako domácu úlohu.",
      "Pomôcky: zošit, číselná os; prehľad typov možno nechať na tabuli ako ťahák počas hodiny.",
      "Medzipredmetové vzťahy: fyzika a odborné predmety – tolerancie a prípustné rozsahy.",
      "ŠVVP: znížiť počet položiek zbierky bez zníženia jadra cieľa, ponechať viditeľný rozhodovací postup.",
      "Hodnotenie: priebežná spätná väzba a sebahodnotenie; XP nie sú známka."
    ]
  },
  "student": {
    "title": "Systematizácia učiva",
    "subtitle": "Téma 31 · Lineárne nerovnice",
    "intro": "Prehľad celého celku: ako rozpoznať typ nerovnice, aký postup použiť a na aké chyby si dať pozor. Počítaj na papieri, v aplikácii vyberáš typ a zapisuješ výsledok.",
    "estimatedTime": "25–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo všetko sme v celku riešili",
        "html": "<p>V celku „Lineárne nerovnice“ si sa stretol/stretla s niekoľkými druhmi úloh. Dnes z nich spravíme prehľad – aby si na písomke vedel/vedela, <strong>ktorý postup použiť</strong>.</p>\n<ul><li>obyčajná lineárna nerovnica a ekvivalentné úpravy,</li><li>nerovnica s neznámou v menovateli,</li><li>nerovnica s absolútnou hodnotou,</li><li>sústava nerovníc a prienik,</li><li>slovné úlohy a zmiešané príklady.</li></ul>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "podľa zápisu rozhodnúť, aký typ nerovnice máš pred sebou",
          "poznať postup a tvar výsledku pre každý typ",
          "vyhnúť sa typickým chybám celého celku"
        ]
      },
      {
        "id": "decision",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Rozhodovací postup: aký typ nerovnice mám?",
        "html": "<p>Pozeraj sa na zápis zhora nadol a zastav sa pri prvej otázke, na ktorú odpovieš „áno“:</p>\n<ol class=\"steps\"><li><strong>Sú v zadaní dve podmienky naraz</strong> (spojené slovom „a“, „súčasne“)? → <span class=\"hl\">sústava</span>: rieš každú zvlášť a vezmi prienik.</li><li><strong>Je tam absolútna hodnota</strong> |…|? → <span class=\"hl\">nerovnica s |…|</span>: rozpíš ju na „medzi“ alebo „mimo“.</li><li><strong>Je neznáma v menovateli</strong>? → <span class=\"hl\">zlomok</span>: menovateľ ≠ 0 a rozhodni o znamienku zlomku.</li><li><strong>Sú v menovateli len čísla</strong>? → <span class=\"hl\">so zlomkami</span>: vynásob obe strany kladným spoločným menovateľom.</li><li>Inak ide o <span class=\"hl\">obyčajnú lineárnu nerovnicu</span>: ekvivalentné úpravy.</li></ol>\n<p>Pri každom type nakoniec: <strong>interval + skúška dosadením</strong>.</p>",
        "remember": "Najprv rozpoznaj typ, až potom počítaj. Záporné číslo pri násobení a delení vždy otáča znamienko."
      },
      {
        "id": "types-1",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Typy nerovníc (1): obyčajná a so zlomkami",
        "html": "<div class=\"term-list\">\n<div class=\"term-item no-symbol\"><div class=\"term-name\">A · Obyčajná lineárna nerovnica</div><p class=\"term-rule\">Presuň členy s x na jednu stranu, čísla na druhú, vydeľ koeficientom pri x. Pri zápornom koeficiente otoč znamienko.</p><p class=\"term-example\">Príklad: 7 − 3x ≥ 1 → −3x ≥ −6 → x ≤ 2 → <strong>(−∞;2⟩</strong></p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">B · So zlomkami (číselný menovateľ)</div><p class=\"term-rule\">Obe strany vynásob najmenším spoločným <span class=\"hl\">kladným</span> násobkom menovateľov – znamienko ostane.</p><p class=\"term-example\">Príklad: <span class=\"frac\"><span class=\"frac-num\">x</span><span class=\"frac-den\">2</span></span> + 1 &lt; <span class=\"frac\"><span class=\"frac-num\">x</span><span class=\"frac-den\">3</span></span> + 2 → ×6: 3x + 6 &lt; 2x + 12 → x &lt; 6 → <strong>(−∞;6)</strong></p></div></div>\n<div class=\"warning\"><strong>Pozor:</strong> pri násobení spoločným menovateľom nezabudni vynásobiť <em>každý</em> člen, aj celé čísla (napr. 1 · 6 = 6).</div>"
      },
      {
        "id": "types-2",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Typy nerovníc (2): menovateľ, |…| a sústava",
        "html": "<div class=\"term-list\">\n<div class=\"term-item no-symbol\"><div class=\"term-name\">C · Neznáma v menovateli</div><p class=\"term-rule\">Menovateľ nesmie byť 0. Ak je čitateľ číslo, znamienko zlomku určuje znamienko menovateľa.</p><p class=\"term-example\">Príklad: <span class=\"frac\"><span class=\"frac-num\">4</span><span class=\"frac-den\">x − 1</span></span> &lt; 0 → menovateľ musí byť záporný: x − 1 &lt; 0 → <strong>(−∞;1)</strong>. Jednotka nepatrí.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">D1 · |ax + b| &lt; c (medzi)</div><p class=\"term-rule\">−c &lt; ax + b &lt; c – jeden interval.</p><p class=\"term-example\">Príklad: |x − 2| ≤ 3 → −3 ≤ x − 2 ≤ 3 → <strong>⟨−1;5⟩</strong></p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">D2 · |ax + b| &gt; c (mimo)</div><p class=\"term-rule\">ax + b &lt; −c alebo ax + b &gt; c – zjednotenie dvoch intervalov.</p><p class=\"term-example\">Príklad: |x + 1| &gt; 2 → x + 1 &lt; −2 alebo x + 1 &gt; 2 → <strong>(−∞;−3) ∪ (1;∞)</strong></p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">E · Sústava</div><p class=\"term-rule\">Rieš každú nerovnicu zvlášť, výsledok je prienik množín riešení.</p><p class=\"term-example\">Príklad: x − 1 &gt; 2 a 2x ≤ 10 → x &gt; 3 a x ≤ 5 → <strong>(3;5⟩</strong></p></div></div>"
      },
      {
        "id": "special",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Špeciálne prípady: ∅ a ℝ",
        "html": "<p>Niekedy po úprave zmizne x a zostane čisté tvrdenie o číslach:</p>\n<div class=\"compare\"><div class=\"good\"><span class=\"mini-label\">PLATÍ VŽDY → ℝ</span><p>2x − 1 &lt; 2x + 4 → −1 &lt; 4 ✓<br>Riešením je každé reálne číslo.</p></div><div class=\"bad\"><span class=\"mini-label\">NEPLATÍ NIKDY → ∅</span><p>3x + 2 ≤ 3x − 1 → 2 ≤ −1 ✗<br>Nerovnica nemá riešenie.</p></div></div>\n<p>Podobne pri absolútnej hodnote: |x| ≥ 0 platí vždy (ℝ), ale |x| &lt; −1 nemá riešenie (∅), lebo absolútna hodnota nie je záporná.</p>"
      },
      {
        "id": "mistakes",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Päť typických chýb",
        "html": "<div class=\"compare\"><div class=\"bad\"><span class=\"mini-label\">ČASTÁ CHYBA 1</span><p>−2x &gt; 6 → x &gt; −3</p></div><div class=\"good\"><span class=\"mini-label\">SPRÁVNE</span><p>−2x &gt; 6 → x &lt; −3 (delenie záporným číslom)</p></div></div>\n<div class=\"compare\"><div class=\"bad\"><span class=\"mini-label\">ČASTÁ CHYBA 2</span><p>x &gt; 1 a x &lt; 4 → (−∞;1) ∪ (4;∞)</p></div><div class=\"good\"><span class=\"mini-label\">SPRÁVNE</span><p>sústava = prienik → (1;4)</p></div></div>\n<div class=\"compare\"><div class=\"bad\"><span class=\"mini-label\">ČASTÁ CHYBA 3</span><p>|x| &gt; 2 → −2 &lt; x &lt; 2</p></div><div class=\"good\"><span class=\"mini-label\">SPRÁVNE</span><p>|x| &gt; 2 → x &lt; −2 alebo x &gt; 2</p></div></div>\n<div class=\"compare\"><div class=\"bad\"><span class=\"mini-label\">ČASTÁ CHYBA 4</span><p><span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">x − 2</span></span> &gt; 0 → ⟨2;∞) („x = 2 je v poriadku“)</p></div><div class=\"good\"><span class=\"mini-label\">SPRÁVNE</span><p>menovateľ ≠ 0 → (2;∞), dvojka nepatrí</p></div></div>\n<div class=\"warning\"><strong>Chyba 5:</strong> zabudnúť skúšku a krajný bod. Pri ostrej nerovnosti („&lt;“, „&gt;“) krajný bod nepatrí, pri „≤“, „≥“ patrí – s výnimkou nulového menovateľa a ∞.</div>"
      },
      {
        "id": "c-type",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "rozpoznanie typu",
        "question": "Pri ktorej z nerovníc musíš najprv určiť, pre ktoré x má zápis vôbec zmysel (menovateľ ≠ 0)?",
        "options": [
          "x/3 ≥ 5",
          "2/(x − 4) > 0",
          "|x − 4| < 2",
          "x − 4 > 2 a x < 9"
        ],
        "answer": 1,
        "correct": "Správne. Len pri neznámej v menovateli sa môže stať, že zlomok nemá zmysel (x = 4).",
        "hint": "Hľadaj nerovnicu, v ktorej by sa pri nejakom x delilo nulou. Delenie číslom 3 problém nerobí."
      },
      {
        "id": "mx-type",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "rozpoznanie typu",
        "title": "Priraď každej nerovnici jej typ",
        "labels": [
          "so zlomkom (číselný menovateľ)",
          "neznáma v menovateli",
          "absolútna hodnota",
          "sústava"
        ],
        "items": [
          {
            "text": "(x − 3)/4 ≥ 2",
            "answer": "so zlomkom (číselný menovateľ)"
          },
          {
            "text": "5/(x + 2) > 0",
            "answer": "neznáma v menovateli"
          },
          {
            "text": "|3x − 1| < 4",
            "answer": "absolútna hodnota"
          },
          {
            "text": "2x > 4 a x − 1 ≤ 6",
            "answer": "sústava"
          }
        ]
      },
      {
        "id": "c-abs-lt",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "absolútna hodnota",
        "question": "Ktorý interval je riešením nerovnice |x + 3| < 2?",
        "options": [
          "(−2;2)",
          "(1;5)",
          "(−∞;−5) ∪ (−1;∞)",
          "(−5;−1)"
        ],
        "answer": 3,
        "correct": "Správne. −2 < x + 3 < 2, po odpočítaní 3 je −5 < x < −1.",
        "hint": "Hľadáš čísla vzdialené od −3 menej ako 2. Ktoré čísla ležia medzi −3 − 2 a −3 + 2?"
      },
      {
        "id": "c-abs-gt",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "absolútna hodnota",
        "question": "Ktorý zápis je riešením nerovnice |x − 1| > 2?",
        "options": [
          "(−∞;−1) ∪ (3;∞)",
          "(−1;3)",
          "(−∞;3)",
          "(−3;1)"
        ],
        "answer": 0,
        "correct": "Správne. x − 1 < −2 alebo x − 1 > 2, teda x < −1 alebo x > 3. Ide o čísla vzdialené od 1 viac ako 2.",
        "hint": "Pri „>“ hľadáme čísla ďaleko od 1 – môžu byť vľavo aj vpravo od nej."
      },
      {
        "id": "c-den",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "neznáma v menovateli",
        "question": "Pre ktoré x je zlomok 4/(x − 1) záporný?",
        "options": [
          "(1;∞)",
          "(−∞;1⟩",
          "(−∞;1)",
          "(−∞;−1)"
        ],
        "answer": 2,
        "correct": "Správne. Čitateľ je kladný, zlomok je záporný práve vtedy, keď x − 1 < 0, teda x < 1. Jednotka nepatrí – menovateľ by bol 0.",
        "hint": "Kladné číslo delené záporným je záporné. Ktoré x robí menovateľ záporným? Môže 1 patriť do riešenia?"
      },
      {
        "id": "n-frac",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "nerovnica so zlomkami",
        "title": "Najväčšie celé riešenie",
        "prompt": "Aké je najväčšie celé číslo x, ktoré vyhovuje nerovnici x/2 + 1 < x/3 + 2?",
        "validate": "exact",
        "answer": 5,
        "success": "Po vynásobení 6 dostaneme 3x + 6 < 2x + 12, teda x < 6. Najväčšie celé x < 6 je 5 (pre x = 6 by bolo 4 < 4, čo neplatí).",
        "hint": "Vynásob obe strany číslom 6 (kladné – znamienko ostane), vyrieš a pozor na ostrú nerovnosť.",
        "reveal": "Správne je 5: x < 6 a šestka nepatrí."
      },
      {
        "id": "n-abs-cnt",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "absolútna hodnota",
        "title": "Počet celých riešení",
        "prompt": "Koľko celých čísel vyhovuje nerovnici |x − 2| ≤ 3?",
        "validate": "exact",
        "answer": 7,
        "success": "Riešenie je ⟨−1;5⟩, celé čísla sú −1, 0, 1, 2, 3, 4, 5 – teda 7.",
        "hint": "Krajné body patria (≤). Vypíš všetky celé čísla z intervalu ⟨−1;5⟩.",
        "reveal": "Správne je 7: čísla od −1 po 5 vrátane."
      },
      {
        "id": "sc-flip",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "otočenie znamienka",
        "title": "Otáča sa znamienko?",
        "question": "Pri riešení nerovnice robíš úpravy. Pri ktorých sa znamienko nerovnosti otočí a pri ktorých ostane?",
        "labels": [
          "Znamienko sa otočí",
          "Znamienko ostane"
        ],
        "items": [
          {
            "text": "Vydelíme obe strany číslom −3",
            "answer": true,
            "why": "Delenie záporným číslom otáča znamienko."
          },
          {
            "text": "Pripočítame k obom stranám číslo 8",
            "answer": false,
            "why": "Pripočítanie a odpočítanie znamienko nemení."
          },
          {
            "text": "Vynásobíme obe strany číslom −1/2",
            "answer": true,
            "why": "Násobenie záporným číslom (aj zlomkom) otáča znamienko."
          },
          {
            "text": "Vynásobíme obe strany číslom 6",
            "answer": false,
            "why": "Násobenie kladným číslom znamienko nemení."
          },
          {
            "text": "Odpočítame od oboch strán číslo −4",
            "answer": false,
            "why": "Odpočítanie (aj záporného čísla) znamienko nemení – otáča ho len násobenie a delenie záporným číslom."
          },
          {
            "text": "Z −x > 5 prejdeme na x (vynásobíme −1)",
            "answer": true,
            "why": "Násobenie číslom −1 otáča znamienko: x < −5."
          }
        ]
      },
      {
        "id": "c-err1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "chyba v riešení",
        "question": "Žiak rieši |x| > 3 a výsledok zapíše ako (−3;3). Čo je chyba?",
        "options": [
          "Zapísal riešenie „medzi“ (pre |x| < 3), ale má byť „mimo“: (−∞;−3) ∪ (3;∞).",
          "Krajné body mali byť uzavreté: ⟨−3;3⟩.",
          "Správne riešenie je (3;∞), záporné x nevyhovuje.",
          "Nerovnica nemá riešenie."
        ],
        "answer": 0,
        "correct": "Správne. |x| > 3 znamená vzdialenosť od nuly väčšiu ako 3 – x < −3 alebo x > 3. Skúška: x = 0 → |0| = 0 > 3 neplatí.",
        "hint": "Dosaď x = 0, ktoré patrí do žiakovho intervalu. Platí |0| > 3?"
      },
      {
        "id": "c-err2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "chyba v riešení",
        "question": "Žiak rieši 3 − 2x > 7 a píše: −2x > 4, teda x > −2. Aká je chyba a aké je správne riešenie?",
        "options": [
          "Chyba je v prvej úprave: správne je −2x > 10.",
          "Pri delení číslom −2 sa malo otočiť znamienko: x < −2.",
          "Chyba je v krajnom bode: správne je x ≥ −2.",
          "Žiadna chyba, x > −2 je správne."
        ],
        "answer": 1,
        "correct": "Správne. 3 − 2x > 7 → −2x > 4 je v poriadku, ale delenie −2 otáča znamienko: x < −2. Skúška: x = −3 → 3 + 6 = 9 > 7 ✓; x = 0 → 3 > 7 ✗.",
        "hint": "Skontroluj každý krok zvlášť. Prvá úprava je odpočítanie 3. A čo pri delení záporným číslom?"
      },
      {
        "id": "manual",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha do zošita",
        "html": "<span class=\"mini-label\">ÚLOHA DO ZOŠITA</span><p>Vyrieš tri nerovnice rôznych typov a výsledky zapíš intervalom:</p><p>a) 2 − 5x ≥ 12</p><p>b) |2x + 1| &lt; 7</p><p>c) sústava 3x − 1 &gt; 5 a x + 4 ≤ 8</p><p>Pri každej uveď, aký typ nerovnice to je, a urob skúšku dosadením.</p>",
        "continueLabel": "Mám zapísané"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: systematizácia",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Riešenia píš do zošita. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Vyrieš: 3x + 5 > 17.",
            "answer": "3x > 12 → x > 4, teda (4;∞)."
          },
          {
            "level": "zaklad",
            "text": "Vyrieš: 8 − x ≤ 3.",
            "answer": "−x ≤ −5 → vynásobíme −1, znamienko sa otočí: x ≥ 5, teda ⟨5;∞)."
          },
          {
            "level": "zaklad",
            "text": "Vyrieš: 2(x − 1) < x + 3.",
            "answer": "2x − 2 < x + 3 → x < 5, teda (−∞;5)."
          },
          {
            "level": "zaklad",
            "html": "Vyrieš: <span class=\"frac\"><span class=\"frac-num\">x</span><span class=\"frac-den\">4</span></span> − 1 ≥ 0.",
            "answer": "x/4 ≥ 1 → x ≥ 4, teda ⟨4;∞)."
          },
          {
            "level": "rozsirenie",
            "html": "Vyrieš: <span class=\"frac\"><span class=\"frac-num\">2x − 1</span><span class=\"frac-den\">3</span></span> − <span class=\"frac\"><span class=\"frac-num\">x + 2</span><span class=\"frac-den\">2</span></span> ≤ 1.",
            "answer": "Vynásobíme 6: 2(2x − 1) − 3(x + 2) ≤ 6 → 4x − 2 − 3x − 6 ≤ 6 → x − 8 ≤ 6 → x ≤ 14, teda (−∞;14⟩."
          },
          {
            "level": "rozsirenie",
            "text": "Vyrieš: |3x − 2| ≤ 7.",
            "answer": "−7 ≤ 3x − 2 ≤ 7 → −5 ≤ 3x ≤ 9 → −5/3 ≤ x ≤ 3, teda ⟨−5/3;3⟩."
          },
          {
            "level": "rozsirenie",
            "html": "Pre ktoré x je zlomok <span class=\"frac\"><span class=\"frac-num\">−3</span><span class=\"frac-den\">x + 4</span></span> záporný?",
            "answer": "Čitateľ −3 je záporný, preto zlomok je záporný práve vtedy, keď je menovateľ kladný: x + 4 > 0, teda x > −4, t. j. (−4;∞)."
          },
          {
            "level": "rozsirenie",
            "text": "Vyrieš sústavu: 3x − 2 ≥ 4 a 5 − x > 0.",
            "answer": "x ≥ 2 a x < 5. Prienik: ⟨2;5)."
          },
          {
            "level": "bonus",
            "text": "Vyrieš sústavu: |x + 1| > 4 a x < 0.",
            "answer": "|x + 1| > 4 → x < −5 alebo x > 3. S podmienkou x < 0 zostane x < −5, teda (−∞;−5)."
          },
          {
            "level": "bonus",
            "text": "Vyrieš: −x/2 + 1 > x − 2.",
            "answer": "Vynásobíme 2: −x + 2 > 2x − 4 → 6 > 3x → x < 2, teda (−∞;2)."
          }
        ]
      },
      {
        "id": "sw",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Vlastný rozhodovací postup",
        "prompt": "Vlastnými slovami vysvetli kamarátovi, ako zistí, ktorý postup má použiť, keď dostane nerovnicu. Spomeň aspoň tri veci, na ktoré sa pozrie ako prvé.",
        "model": "Najprv sa pozrie, či ide o dve podmienky naraz (sústava – prienik). Potom či je v zadaní absolútna hodnota (rozpíše sa na „medzi“ alebo „mimo“) a či je neznáma v menovateli (menovateľ ≠ 0 a znamienko zlomku). Ak nič z toho, ide o obyčajnú lineárnu nerovnicu; pri zápornom čísle otočí znamienko. Na konci zapíše interval a urobí skúšku."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "rozpoznanie typu nerovnice",
          "obyčajná nerovnica a zlomky",
          "neznáma v menovateli",
          "absolútna hodnota",
          "sústava nerovníc",
          "špeciálne prípady (∅, ℝ)",
          "typické chyby"
        ],
        "prompt": "Označ, ako dobre to zvládaš. Nie je to známka. Čo máš 🔴 alebo 🟡, si pred písomkou ešte raz prejdi."
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 4,
        "text": "Vyrieš a výsledok zapíš intervalom: 5x − 7 ≤ 8.",
        "answer": "5x ≤ 15 → x ≤ 3, teda (−∞;3⟩."
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 4,
        "text": "Vyrieš: 10 − 4x > 2.",
        "answer": "−4x > −8 → delíme −4, znamienko sa otočí: x < 2, teda (−∞;2)."
      },
      {
        "id": "w3",
        "level": "rozsirenie",
        "space": 5,
        "text": "Vyrieš: |x − 4| ≤ 1.",
        "answer": "−1 ≤ x − 4 ≤ 1 → 3 ≤ x ≤ 5, teda ⟨3;5⟩."
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 5,
        "text": "Vyrieš: |2x − 6| > 4.",
        "answer": "2x − 6 < −4 alebo 2x − 6 > 4 → x < 1 alebo x > 5, teda (−∞;1) ∪ (5;∞)."
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 5,
        "text": "Pre ktoré x je zlomok 6/(x + 3) kladný? Zapíš intervalom.",
        "answer": "Čitateľ je kladný, preto x + 3 > 0, teda x > −3, t. j. (−3;∞)."
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 6,
        "text": "Vyrieš sústavu: 2x + 1 > −3 a |x| ≤ 5.",
        "answer": "2x > −4 → x > −2; |x| ≤ 5 → −5 ≤ x ≤ 5. Prienik: (−2;5⟩."
      }
    ]
  }
});
