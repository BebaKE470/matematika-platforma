MathPlatform.registerModule({
  "id": "2-u04-h024",
  "teacher": {
    "placement": "2. ročník · Lineárne nerovnice · 24. hodina: Lineárne nerovnice a ekvivalentné úpravy pri jej riešení",
    "prerequisites": [
      "1. ročník: číselná os, intervaly (⟨a; b), (−∞; a)), nerovnosti",
      "2. ročník: lineárne rovnice a ich ekvivalentné úpravy (aj so zátvorkami a zlomkami)"
    ],
    "planContent": [
      "V poskytnutom tematickom pláne nie je pri tematickom celku „Lineárne nerovnice“ vyplnený samostatný obsahový štandard. Modul preto nevydáva doplnený text za oficiálny obsahový štandard; vychádza z názvu tematického celku a konkrétnej témy hodiny."
    ],
    "planPerformance": [
      "V poskytnutom tematickom pláne nie je pri tematickom celku „Lineárne nerovnice“ vyplnený samostatný výkonový štandard. Ciele nižšie sú ciele tejto vyučovacej hodiny, nie vymyslený oficiálny výkonový štandard."
    ],
    "goals": [
      "definovať nerovnicu, riešenie a množinu riešení; overiť riešenie skúškou",
      "riešiť lineárnu nerovnicu ekvivalentnými úpravami a správne otočiť znak pri násobení/delení záporným číslom",
      "zapísať riešenie nerovnosťou, intervalom a na číselnej osi (ostrá × neostrá nerovnosť)",
      "rozpoznať nerovnicu bez riešenia (∅) a s riešením v celom R"
    ],
    "competencies": [
      "presný matematický zápis a komunikácia",
      "prechod medzi nerovnosťou, intervalom a číselnou osou",
      "kontrola výsledku dosadením",
      "argumentácia: prečo sa znak otočí"
    ],
    "enrichment": [
      "rozšírenie: nerovnice so zlomkami (násobenie kladným spoločným násobkom) a slovné úlohy",
      "bonus: nerovnice, v ktorých sa neznáma vykráti"
    ],
    "flow": [
      "0–5 min: opakovanie lineárnych rovníc, intervalov a číselnej osi; otázka „pre ktoré x platí x + 2 < 5?“",
      "5–15 min: výklad: množina riešení, ekvivalentné úpravy, dôvod otočenia znaku (2 < 5 po vynásobení −1), zápis intervalom, skúška, ∅ a R",
      "15–25 min: platforma: voľba intervalu, otočenie znaku, celé riešenia, hľadanie chyby",
      "25–40 min: samostatná úloha BEZ MOBILU a zbierka podľa úrovne (základ, rozšírenie, bonus)",
      "40–45 min: spoločný rozbor najčastejších chýb podľa živých výsledkov"
    ],
    "diagnostics": [
      "zabúda otočiť znak pri delení záporným číslom, alebo ho otáča pri odčítaní",
      "zamieňa ostrú a neostrú nerovnosť v zátvorkách intervalu",
      "robí chyby pri roznásobení a prenášaní členov cez znak",
      "neuvedomuje si ∅ a R, keď sa neznáma vykráti"
    ],
    "partialUse": [
      "pri nedostatku času vynechať bonusové položky zbierky a časť so zlomkami",
      "mobil nenahrádza ručné počítanie; algebra ostáva v zošite",
      "pri ŠVVP ponechať viditeľný vzor postupu a zmenšiť počet položiek zbierky"
    ]
  },
  "student": {
    "title": "Lineárne nerovnice a ekvivalentné úpravy pri jej riešení",
    "subtitle": "Téma 24 · Lineárne nerovnice",
    "intro": "Naučíš sa riešiť lineárne nerovnice ekvivalentnými úpravami, rozpoznať, kedy sa znak otočí, zapísať riešenie intervalom a overiť ho skúškou. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "25–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Z 1. ročníka poznáš <strong>číselnú os</strong>, zápis <strong>intervalov</strong> (napr. ⟨−2; 5), (−∞; 3)) a znamienka &lt;, &gt;, ≤, ≥. Z 2. ročníka vieš riešiť <strong>lineárne rovnice</strong> ekvivalentnými úpravami: to, čo urobíš na jednej strane rovnice, urobíš aj na druhej, a korene sa nezmenia.</p><div class=\"example\"><span class=\"mini-label\">OPAKOVANIE</span><p>Rovnica 3x − 5 = 7</p><p>3x = 12 &nbsp;(pripočítali sme 5)</p><p>x = 4 &nbsp;(delili sme 3)</p></div><p>Dnes ten istý postup použijeme na <strong>nerovnice</strong>. Takmer všetko ostane rovnaké, len pribudne <strong>jedno nové pravidlo</strong>, ktoré rovnica nepotrebovala.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "rozumieť, čo je riešenie nerovnice a množina riešení",
          "riešiť lineárnu nerovnicu ekvivalentnými úpravami a vedieť, kedy sa znak otočí",
          "zapísať riešenie nerovnosťou, intervalom aj na číselnej osi",
          "urobiť skúšku a rozpoznať nerovnice bez riešenia a s riešením v celom R"
        ]
      },
      {
        "id": "meaning",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Rovnica verzus nerovnica",
        "html": "<p>Rovnica hľadá hodnoty, pri ktorých sú obe strany <strong>rovnaké</strong>. Nerovnica hľadá hodnoty, pri ktorých platí vzťah <strong>&lt;, &gt;, ≤ alebo ≥</strong>.</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Nerovnica <strong>x + 2 &lt; 5</strong>. Skúsime čísla:</p><p>x = 0: 0 + 2 = 2 &lt; 5 &nbsp;platí ✔</p><p>x = 2: 2 + 2 = 4 &lt; 5 &nbsp;platí ✔</p><p>x = 3: 3 + 2 = 5 &lt; 5 &nbsp;neplatí ✘ (5 nie je menšie ako 5)</p><p>x = 7: 7 + 2 = 9 &lt; 5 &nbsp;neplatí ✘</p></div><p>Rovnica x + 2 = 5 má jediný koreň 3. Nerovnica x + 2 &lt; 5 má <strong>nekonečne veľa riešení</strong>: všetky čísla menšie ako 3. Preto je výsledkom <strong>množina riešení</strong>, najčastejšie interval.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 420 80\" role=\"img\" aria-label=\"číselná os\"><g font-family=\"system-ui\" text-anchor=\"middle\"><line x1=\"10\" y1=\"40\" x2=\"410\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"410,40 402,36 402,44\" fill=\"currentColor\"/><line x1=\"30\" y1=\"35\" x2=\"30\" y2=\"45\" stroke=\"currentColor\"/><text x=\"30\" y=\"64\" font-size=\"14\">−2</text><line x1=\"120\" y1=\"35\" x2=\"120\" y2=\"45\" stroke=\"currentColor\"/><text x=\"120\" y=\"64\" font-size=\"14\">0</text><line x1=\"255\" y1=\"35\" x2=\"255\" y2=\"45\" stroke=\"currentColor\"/><text x=\"255\" y=\"64\" font-size=\"14\">3</text><line x1=\"390\" y1=\"35\" x2=\"390\" y2=\"45\" stroke=\"currentColor\"/><text x=\"390\" y=\"64\" font-size=\"14\">6</text><line x1=\"12\" y1=\"40\" x2=\"255\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"7\" opacity=\".45\"/><circle cx=\"255\" cy=\"40\" r=\"6\" fill=\"#fff\" stroke=\"currentColor\" stroke-width=\"2.5\"/></g></svg></div><p>Prázdny krúžok pri 3 znamená, že 3 do riešenia <strong>nepatrí</strong>. Zápis: x &lt; 3, teda <strong>(−∞; 3)</strong>.</p>",
        "remember": "Riešením nerovnice je množina čísel (často interval), nie jedno číslo. Skúšku robíme dosadením."
      },
      {
        "id": "rule",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Ekvivalentné úpravy nerovnice",
        "html": "<p>Ekvivalentná úprava je taká, po ktorej má nerovnica <strong>presne tie isté riešenia</strong> ako pred ňou. Smieš:</p><ol class=\"steps\"><li>na obe strany <strong>pripočítať alebo odpočítať</strong> to isté číslo alebo výraz s x. Znak sa nemení.</li><li>obe strany <strong>vynásobiť alebo vydeliť kladným</strong> číslom. Znak sa nemení.</li><li>obe strany <strong>vynásobiť alebo vydeliť záporným</strong> číslom, ale znak sa <strong>otočí</strong> (&lt; na &gt;, ≤ na ≥ a naopak).</li><li>upraviť každú stranu zvlášť (roznásobiť zátvorky, zlúčiť členy, odstrániť zlomky vynásobením spoločným kladným násobkom).</li></ol><p>Prečo sa znak otáča? Zober pravdivú nerovnosť <strong>2 &lt; 5</strong>. Vynásobíme obe strany číslom −1:</p><div class=\"compare\"><div class=\"bad\"><span class=\"mini-label\">BEZ OTOČENIA</span><p>2 &lt; 5 &nbsp;/ · (−1)</p><p>−2 &lt; −5 &nbsp;neplatí!</p></div><div class=\"good\"><span class=\"mini-label\">S OTOČENÍM</span><p>2 &lt; 5 &nbsp;/ · (−1)</p><p>−2 &gt; −5 &nbsp;platí ✔</p></div></div><p>Na číselnej osi je −2 <strong>vpravo</strong> od −5. Násobenie záporným číslom zrkadlovo obráti poradie čísel, preto sa musí obrátiť aj znak.</p>",
        "remember": "Záporné číslo = otočím znak. Kladné číslo alebo pripočítanie/odpočítanie = znak nechám."
      },
      {
        "id": "ex1",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Postup riešenia krok za krokom",
        "html": "<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1 · žiadne otočenie</span><p>3x − 5 &lt; 7</p><p>3x &lt; 12 &nbsp;/ + 5</p><p>x &lt; 4 &nbsp;/ : 3 (kladné, znak ostáva)</p><p><strong>Riešenie: x ∈ (−∞; 4)</strong></p></div><div class=\"logic-visual\"><svg viewBox=\"0 0 420 80\" role=\"img\" aria-label=\"číselná os\"><g font-family=\"system-ui\" text-anchor=\"middle\"><line x1=\"10\" y1=\"40\" x2=\"410\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"410,40 402,36 402,44\" fill=\"currentColor\"/><line x1=\"30\" y1=\"35\" x2=\"30\" y2=\"45\" stroke=\"currentColor\"/><text x=\"30\" y=\"64\" font-size=\"14\">−2</text><line x1=\"102\" y1=\"35\" x2=\"102\" y2=\"45\" stroke=\"currentColor\"/><text x=\"102\" y=\"64\" font-size=\"14\">0</text><line x1=\"174\" y1=\"35\" x2=\"174\" y2=\"45\" stroke=\"currentColor\"/><text x=\"174\" y=\"64\" font-size=\"14\">2</text><line x1=\"246\" y1=\"35\" x2=\"246\" y2=\"45\" stroke=\"currentColor\"/><text x=\"246\" y=\"64\" font-size=\"14\">4</text><line x1=\"318\" y1=\"35\" x2=\"318\" y2=\"45\" stroke=\"currentColor\"/><text x=\"318\" y=\"64\" font-size=\"14\">6</text><line x1=\"390\" y1=\"35\" x2=\"390\" y2=\"45\" stroke=\"currentColor\"/><text x=\"390\" y=\"64\" font-size=\"14\">8</text><line x1=\"12\" y1=\"40\" x2=\"246\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"7\" opacity=\".45\"/><circle cx=\"246\" cy=\"40\" r=\"6\" fill=\"#fff\" stroke=\"currentColor\" stroke-width=\"2.5\"/></g></svg></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2 · s otočením</span><p>−3x ≥ 12</p><p>x ≤ −4 &nbsp;/ : (−3) (záporné, znak sa otočí z ≥ na ≤)</p><p><strong>Riešenie: x ∈ (−∞; −4⟩</strong></p></div><div class=\"logic-visual\"><svg viewBox=\"0 0 420 80\" role=\"img\" aria-label=\"číselná os\"><g font-family=\"system-ui\" text-anchor=\"middle\"><line x1=\"10\" y1=\"40\" x2=\"410\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"410,40 402,36 402,44\" fill=\"currentColor\"/><line x1=\"30\" y1=\"35\" x2=\"30\" y2=\"45\" stroke=\"currentColor\"/><text x=\"30\" y=\"64\" font-size=\"14\">−8</text><line x1=\"102\" y1=\"35\" x2=\"102\" y2=\"45\" stroke=\"currentColor\"/><text x=\"102\" y=\"64\" font-size=\"14\">−6</text><line x1=\"174\" y1=\"35\" x2=\"174\" y2=\"45\" stroke=\"currentColor\"/><text x=\"174\" y=\"64\" font-size=\"14\">−4</text><line x1=\"246\" y1=\"35\" x2=\"246\" y2=\"45\" stroke=\"currentColor\"/><text x=\"246\" y=\"64\" font-size=\"14\">−2</text><line x1=\"318\" y1=\"35\" x2=\"318\" y2=\"45\" stroke=\"currentColor\"/><text x=\"318\" y=\"64\" font-size=\"14\">0</text><line x1=\"390\" y1=\"35\" x2=\"390\" y2=\"45\" stroke=\"currentColor\"/><text x=\"390\" y=\"64\" font-size=\"14\">2</text><line x1=\"12\" y1=\"40\" x2=\"174\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"7\" opacity=\".45\"/><circle cx=\"174\" cy=\"40\" r=\"6\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"2.5\"/></g></svg></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 3 · neznáma na oboch stranách</span><p>2(x − 1) &gt; 5x + 4</p><p>2x − 2 &gt; 5x + 4 &nbsp;/ roznásobíme</p><p>−3x &gt; 6 &nbsp;/ − 5x, + 2</p><p>x &lt; −2 &nbsp;/ : (−3), znak sa otočí</p><p><strong>Riešenie: x ∈ (−∞; −2)</strong></p></div><div class=\"warning\"><strong>Pozor:</strong> Otočenie znaku sa týka len <strong>delenia alebo násobenia záporným číslom</strong>. Že sa v nerovnici objaví záporné číslo (napr. −5x alebo +(−4)), samo o sebe nič neznamená. Rozhoduje to, <em>čím</em> obe strany delíš.</div>"
      },
      {
        "id": "ex2",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Zápis riešenia a skúška",
        "html": "<p>Riešenie môžeme zapísať tromi rovnocennými spôsobmi:</p><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Nerovnosťou</div><p class=\"term-rule\">x &lt; 4 &nbsp;alebo &nbsp;x ≥ −2</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Intervalom</div><p class=\"term-rule\">(−∞; 4) &nbsp;alebo &nbsp;⟨−2; ∞)</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Číselnou osou</div><p class=\"term-rule\">farebne vyznačená časť osi; <span class=\"hl\">plný</span> bod = krajný bod patrí (≤, ≥), <span class=\"hl\">prázdny</span> bod = nepatrí (&lt;, &gt;).</p></div></div><div class=\"formula\"><span class=\"mini-label\">OSTRÁ × NEOSTRÁ</span>&lt; a &gt; → okrúhla zátvorka ( ) &nbsp;·&nbsp; ≤ a ≥ → hranatá zátvorka ⟨ ⟩<span class=\"formula-note\">Pri −∞ a ∞ je zátvorka vždy okrúhla.</span></div><p><strong>Skúška:</strong> dosaď do pôvodnej nerovnice jedno číslo z vyznačenej časti (musí platiť), jedno z nevyznačenej časti (nesmie platiť) a krajný bod (platí len pri ≤, ≥).</p><div class=\"example\"><span class=\"mini-label\">SKÚŠKA PRE −3x ≥ 12, výsledok (−∞; −4⟩</span><p>x = −5: −3·(−5) = 15 ≥ 12 &nbsp;platí ✔</p><p>x = −4: −3·(−4) = 12 ≥ 12 &nbsp;platí ✔ (krajný bod patrí)</p><p>x = 0: −3·0 = 0 ≥ 12 &nbsp;neplatí ✘ (mimo výsledku, správne)</p></div>",
        "remember": "Znak &lt; alebo &gt; → okrúhla zátvorka. Znak ≤ alebo ≥ → hranatá zátvorka ⟨ ⟩. Skúška: číslo z riešenia, číslo mimo a krajný bod."
      },
      {
        "id": "ex3",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Nerovnice bez riešenia a s riešením v celom R",
        "html": "<p>Niekedy sa neznáma po úprave <strong>vykráti</strong> a ostane len číselná nerovnosť. Potom rozhoduje, či tá je pravdivá.</p><div class=\"compare\"><div class=\"bad\"><span class=\"mini-label\">NEPRAVDIVÁ → ∅</span><p>3(x + 1) &lt; 3x − 2</p><p>3x + 3 &lt; 3x − 2</p><p>3 &lt; −2 &nbsp;neplatí nikdy</p><p><strong>Nemá riešenie: ∅</strong></p></div><div class=\"good\"><span class=\"mini-label\">PRAVDIVÁ → celé R</span><p>2x + 1 &gt; 2x − 3</p><p>1 &gt; −3 &nbsp;platí vždy</p><p><strong>Riešenie: každé reálne x, (−∞; ∞)</strong></p></div></div><p>Oba prípady poznáš z rovníc (žiadny koreň, alebo každé číslo je koreň). Pri nerovniciach ich nezapisuj ako „x = 0“, ale ako <strong>∅</strong> alebo <strong>(−∞; ∞)</strong>.</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD so zlomkami</span><p><span class=\"frac\"><span class=\"frac-num\">x + 1</span><span class=\"frac-den\">2</span></span> − <span class=\"frac\"><span class=\"frac-num\">x</span><span class=\"frac-den\">3</span></span> ≤ 1 &nbsp;/ · 6 (kladné číslo, znak ostáva)</p><p>3(x + 1) − 2x ≤ 6</p><p>x + 3 ≤ 6, teda x ≤ 3, <strong>x ∈ (−∞; 3⟩</strong></p></div>"
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "riešenie a skúška",
        "question": "Ktoré z čísel je riešením nerovnice 2x + 1 < 9?",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "answer": 2,
        "correct": "Správne: 2·3 + 1 = 7 a 7 &lt; 9. Pre 4 vychádza presne 9, čo nie je menšie ako 9.",
        "hint": "Dosaď každé číslo do ľavej strany a porovnaj s 9. Pozor na rovnosť, pri ostrej nerovnosti nestačí."
      },
      {
        "id": "n1",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "hraničná hodnota",
        "title": "Hraničná hodnota",
        "prompt": "Nerovnicu 6x − 4 < 20 riešime tak, že najprv nájdeme hodnotu x, pri ktorej sa obe strany presne rovnajú (6x − 4 = 20). Aká je to hodnota x?",
        "validate": "exact",
        "answer": 4,
        "success": "6x = 24, x = 4. Táto hodnota je hranica riešenia; pri ostrej nerovnici do nej nepatrí.",
        "hint": "Vyrieš rovnicu 6x − 4 = 20: najprv pripočítaj 4, potom deľ 6.",
        "reveal": "Správne je 4: 6x = 24, x = 4."
      },
      {
        "id": "c2",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "otočenie znaku",
        "question": "Nerovnicu −2x > 6 vydelíme obe strany číslom −2. Ako vyzerá riešenie?",
        "options": [
          "(−∞; −3)",
          "(−3; ∞)",
          "(−∞; 3)",
          "(3; ∞)"
        ],
        "answer": 0,
        "correct": "Správne: delíme záporným číslom, preto > prejde na &lt; a x &lt; −3.",
        "hint": "Číslo −2 je záporné. Čo sa stane so znakom?"
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "zápis intervalom",
        "question": "Ktorý interval zodpovedá nerovnosti x ≥ −2?",
        "options": [
          "(−2; ∞)",
          "⟨−2; ∞)",
          "(−∞; −2⟩",
          "⟨2; ∞)"
        ],
        "answer": 1,
        "correct": "Správne: ≥ zahŕňa −2 (hranatá zátvorka vľavo), napravo ide do nekonečna (okrúhla zátvorka).",
        "hint": "Pri ≥ krajný bod patrí do riešenia. A pri nekonečne je zátvorka vždy okrúhla."
      },
      {
        "id": "c4",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "otočenie znaku",
        "question": "Riešime nerovnicu 5 − 2x ≤ 11. Po odčítaní 5 dostaneme −2x ≤ 6. Ktorý interval je riešením?",
        "options": [
          "(−∞; −3⟩",
          "⟨3; ∞)",
          "(−3; ∞)",
          "⟨−3; ∞)"
        ],
        "answer": 3,
        "correct": "Správne: −2x ≤ 6 / : (−2) dá x ≥ −3, krajný bod patrí, ⟨−3; ∞).",
        "hint": "Delíš číslom −2, takže ≤ prejde na ≥. Neostrý znak ostane neostrý."
      },
      {
        "id": "n2",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "celé riešenia",
        "title": "Najväčšie celé riešenie",
        "prompt": "Aké je najväčšie celé číslo x, ktoré spĺňa nerovnicu 3x + 2 < 14?",
        "validate": "exact",
        "answer": 3,
        "success": "3x &lt; 12, x &lt; 4. Celé čísla menšie ako 4 sú ..., 2, 3; najväčšie je 3, lebo 4 už nevyhovuje.",
        "hint": "Vyrieš nerovnicu a všimni si, či je znak ostrý (4 nepatrí).",
        "reveal": "Správne je 3: z 3x &lt; 12 vyjde x &lt; 4, a 4 nepatrí do riešenia."
      },
      {
        "id": "c5",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "neznáma na oboch stranách",
        "question": "Vyrieš nerovnicu 4x − 3 > 2x + 7. Ktorý interval je riešením?",
        "options": [
          "(−∞; 5)",
          "⟨5; ∞)",
          "(5; ∞)",
          "(2; ∞)"
        ],
        "answer": 2,
        "correct": "Správne: 2x > 10, x > 5, teda (5; ∞). Delili sme kladným číslom 2, znak ostal.",
        "hint": "Najprv odpočítaj 2x od oboch strán, potom pripočítaj 3 a vydeľ 2."
      },
      {
        "id": "c6",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "neznáma na oboch stranách",
        "question": "Vyrieš nerovnicu 7 − 3x < 1 − x. Ktorý interval je riešením?",
        "options": [
          "(−∞; 3)",
          "(3; ∞)",
          "(−3; ∞)",
          "⟨3; ∞)"
        ],
        "answer": 1,
        "correct": "Správne: 6 &lt; 2x, teda x > 3. Ak chceš predísť deleniu záporným číslom, presuň x-ové členy na tú stranu, kde zostane kladný koeficient.",
        "hint": "Z 7 − 3x &lt; 1 − x vznikne −2x &lt; −6. Čím teraz delíš a čo sa stane so znakom?"
      },
      {
        "id": "n3",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "celé riešenia",
        "title": "Najmenšie celé riešenie",
        "prompt": "Aké je najmenšie celé číslo x, ktoré spĺňa nerovnicu −2x < 7?",
        "validate": "exact",
        "answer": -3,
        "success": "Delíme číslom −2: x > −3,5. Najmenšie celé číslo väčšie ako −3,5 je −3.",
        "hint": "Pozor na otočenie znaku. Potom hľadaj celé čísla väčšie ako −3,5.",
        "reveal": "Správne je −3: z −2x &lt; 7 vyjde x > −3,5, a prvé celé číslo vpravo od −3,5 je −3."
      },
      {
        "id": "c7",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "špeciálne prípady",
        "question": "Vyrieš nerovnicu 2(x + 3) > 2x + 1. Aké je jej riešenie?",
        "options": [
          "nemá riešenie, ∅",
          "každé reálne číslo, (−∞; ∞)",
          "iba x = 0",
          "(−∞; 0)"
        ],
        "answer": 1,
        "correct": "Správne: 2x + 6 > 2x + 1 vedie na 6 > 1, čo platí vždy, takže vyhovuje každé x.",
        "hint": "Roznásob a odpočítaj 2x od oboch strán. Je výsledná číselná nerovnosť pravdivá?"
      },
      {
        "id": "c8",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "špeciálne prípady",
        "question": "Vyrieš nerovnicu 3(x − 1) ≤ 3x − 5. Aké je jej riešenie?",
        "options": [
          "nemá riešenie, ∅",
          "(−∞; ∞)",
          "x = 1",
          "(−∞; 1⟩"
        ],
        "answer": 0,
        "correct": "Správne: 3x − 3 ≤ 3x − 5 vedie na −3 ≤ −5, čo nikdy neplatí, preto ∅.",
        "hint": "Po roznásobení sa 3x na oboch stranách vykráti. Platí zvyšná číselná nerovnosť?"
      },
      {
        "id": "match",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "nerovnica a interval",
        "title": "Ktorá nerovnica má ktoré riešenie?",
        "labels": [
          "(−∞; 2)",
          "(2; ∞)",
          "(−∞; 2⟩",
          "⟨2; ∞)"
        ],
        "items": [
          {
            "text": "4x < 8",
            "answer": "(−∞; 2)"
          },
          {
            "text": "−4x < −8",
            "answer": "(2; ∞)"
          },
          {
            "text": "−4x ≥ −8",
            "answer": "(−∞; 2⟩"
          },
          {
            "text": "3x ≥ 6",
            "answer": "⟨2; ∞)"
          },
          {
            "text": "5 − 2x > 1",
            "answer": "(−∞; 2)"
          }
        ]
      },
      {
        "id": "special-types",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "špeciálne prípady",
        "title": "Aký typ riešenia?",
        "labels": [
          "nemá riešenie (∅)",
          "každé reálne x",
          "interval s hraničným bodom"
        ],
        "items": [
          {
            "text": "2x + 1 < 2x + 5",
            "answer": "každé reálne x"
          },
          {
            "text": "3x + 2 < 3x − 1",
            "answer": "nemá riešenie (∅)"
          },
          {
            "text": "x + 4 ≥ x + 4",
            "answer": "každé reálne x"
          },
          {
            "text": "x + 4 > x + 4",
            "answer": "nemá riešenie (∅)"
          },
          {
            "text": "5x + 1 < 4x + 7",
            "answer": "interval s hraničným bodom"
          }
        ]
      },
      {
        "id": "sort",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "otočenie znaku",
        "title": "Otočí sa znak?",
        "question": "Obe strany nerovnice upravíme podľa popisu. Otočí sa pri tom znak nerovnosti?",
        "labels": [
          "Znak sa otočí",
          "Znak sa nemení"
        ],
        "items": [
          {
            "text": "vydelíme obe strany číslom −4",
            "answer": true,
            "why": "Delenie záporným číslom otáča znak."
          },
          {
            "text": "pripočítame 7 k obom stranám",
            "answer": false,
            "why": "Pripočítanie nemení poradie čísel."
          },
          {
            "text": "vynásobíme obe strany číslom 1/2",
            "answer": false,
            "why": "1/2 je kladné číslo."
          },
          {
            "text": "vynásobíme obe strany číslom −1/3",
            "answer": true,
            "why": "Násobenie záporným číslom otáča znak, aj keď je to zlomok."
          },
          {
            "text": "odpočítame 3x od oboch strán",
            "answer": false,
            "why": "Odčítanie výrazu nemení znak. Otáča len násobenie a delenie záporným číslom."
          },
          {
            "text": "vydelíme obe strany číslom 5",
            "answer": false,
            "why": "5 je kladné číslo."
          },
          {
            "text": "vynásobíme obe strany číslom −10",
            "answer": true,
            "why": "Záporný násobiteľ znak otáča."
          }
        ]
      },
      {
        "id": "hunt1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak riešil nerovnicu −4x ≤ 20 takto: „Vydelím číslom −4, x ≤ −5, riešenie (−∞; −5⟩.“ Čo urobil zle?",
        "options": [
          "Nič, postup je správny.",
          "Mal deliť číslom 4, nie −4.",
          "Pri delení záporným číslom −4 mal znak otočiť: správne je x ≥ −5.",
          "Mal použiť okrúhlu zátvorku pri −5."
        ],
        "answer": 2,
        "correct": "Presne. Správny výsledok je x ≥ −5, teda ⟨−5; ∞). Skúška: x = 0 dáva 0 ≤ 20 (platí), no 0 nie je v (−∞; −5⟩.",
        "hint": "Skús do pôvodnej nerovnice dosadiť x = 0. Platí? Je 0 v zapísanom riešení?"
      },
      {
        "id": "hunt2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak riešil nerovnicu x + 4 < 9 takto: „Odpočítam 4 od oboch strán, a keďže odčítam, znak otočím: x > 5.“ Čo je zle?",
        "options": [
          "Znak mal ostať, odčítanie ho neotáča: správne je x < 5.",
          "Mal odpočítať 9, nie 4.",
          "Výsledok má byť x ≤ 5.",
          "Správne je x > 5, lebo odčítanie otáča znak."
        ],
        "answer": 0,
        "correct": "Správne. Otáča len násobenie alebo delenie záporným číslom. Odpočítanie 4 poradie čísel nemení: x &lt; 5.",
        "hint": "Skús x = 0: 0 + 4 &lt; 9 platí. Patrí 0 do x > 5?"
      },
      {
        "id": "hunt3",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak vyriešil 2x − 1 ≥ 5 a napísal x > 3. Ktoré číslo ukazuje, že zápis je nesprávny?",
        "options": [
          "0",
          "2",
          "4",
          "3"
        ],
        "answer": 3,
        "correct": "Správne: pre x = 3 je 2·3 − 1 = 5 ≥ 5, takže 3 je riešením, ale zápis x > 3 ho vynecháva. Správne je x ≥ 3, ⟨3; ∞).",
        "hint": "Hľadáš číslo, ktoré nerovnicu spĺňa, ale zápis x > 3 ho nezahŕňa. Čo sa deje na hranici?"
      },
      {
        "id": "n4",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "celé riešenia",
        "title": "Počet celých riešení",
        "prompt": "Koľko celých čísel x spĺňa naraz obe nerovnice: x + 3 ≥ 1 a 2x < 9?",
        "validate": "exact",
        "answer": 7,
        "success": "Prvá dáva x ≥ −2, druhá x &lt; 4,5. Spoločné celé čísla: −2, −1, 0, 1, 2, 3, 4, teda 7.",
        "hint": "Vyrieš každú zvlášť a nájdi prienik intervalov. Potom vypíš celé čísla v ňom.",
        "reveal": "Správne je 7: x ∈ ⟨−2; 4,5), celé čísla −2 až 4."
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha na papier",
        "html": "<p>Odlož zariadenie. Vyrieš v zošite nerovnicu <strong>3(x − 2) ≤ 5x + 2</strong>.</p><ol><li>Zapíš celý postup (roznásobenie, úprava, deliteľ).</li><li>Výsledok zapíš ako nerovnosť, interval aj na číselnej osi.</li><li>Urob skúšku troma číslami: z riešenia, mimo riešenia a krajným bodom.</li></ol>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: lineárne nerovnice",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Riešenia píš do zošita a pri každej urob skúšku. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu. Ak nie je uvedené inak, rieš v R a výsledok zapíš intervalom.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Vyrieš nerovnicu x + 7 > 3.",
            "answer": "x > −4 (odčítali sme 7)<br><strong>(−4; ∞)</strong>"
          },
          {
            "level": "zaklad",
            "text": "Vyrieš nerovnicu 3x − 4 ≤ 11.",
            "answer": "3x ≤ 15, x ≤ 5<br><strong>(−∞; 5⟩</strong>"
          },
          {
            "level": "zaklad",
            "text": "Vyrieš nerovnicu −2x < 10.",
            "answer": "Delíme číslom −2, znak sa otočí: x > −5<br><strong>(−5; ∞)</strong>"
          },
          {
            "level": "zaklad",
            "text": "Vyrieš nerovnicu 6 − x ≥ 2.",
            "answer": "−x ≥ −4 / · (−1), znak sa otočí: x ≤ 4<br><strong>(−∞; 4⟩</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Vyrieš nerovnicu 5x − 3 > 2x + 9.",
            "answer": "3x > 12, x > 4<br><strong>(4; ∞)</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Vyrieš nerovnicu 3(x − 2) ≤ 5x + 2.",
            "answer": "3x − 6 ≤ 5x + 2, −8 ≤ 2x, x ≥ −4<br><strong>⟨−4; ∞)</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Vyrieš nerovnicu (x + 1)/2 − x/3 ≤ 1.",
            "answer": "Vynásobíme 6: 3(x + 1) − 2x ≤ 6, x + 3 ≤ 6, x ≤ 3<br><strong>(−∞; 3⟩</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Vyrieš nerovnicu 4 − 2(x + 1) > 3x − 8.",
            "answer": "2 − 2x > 3x − 8, 10 > 5x, x &lt; 2<br><strong>(−∞; 2)</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Súčet trojnásobku prirodzeného čísla a čísla 5 je menší ako 20. Ktoré prirodzené čísla to sú?",
            "answer": "3x + 5 &lt; 20, 3x &lt; 15, x &lt; 5<br><strong>1, 2, 3, 4</strong>"
          },
          {
            "level": "bonus",
            "text": "Vyrieš nerovnicu 2(3x − 1) − 4(x + 2) < 2x + 5.",
            "answer": "6x − 2 − 4x − 8 &lt; 2x + 5, 2x − 10 &lt; 2x + 5, −10 &lt; 5 platí vždy<br><strong>každé reálne číslo, (−∞; ∞)</strong>"
          },
          {
            "level": "bonus",
            "text": "Vyrieš nerovnicu (2x − 1)/3 ≥ (x + 2)/2 − 1.",
            "answer": "Vynásobíme 6: 2(2x − 1) ≥ 3(x + 2) − 6, 4x − 2 ≥ 3x, x ≥ 2<br><strong>⟨2; ∞)</strong>"
          },
          {
            "level": "bonus",
            "text": "Pre ktoré x má výraz 3 − 2x väčšiu hodnotu ako výraz x + 12? Najväčšie celé x, ktoré vyhovuje, je:",
            "answer": "3 − 2x > x + 12, −9 > 3x, x &lt; −3<br>Najväčšie celé x je <strong>−4</strong>"
          }
        ]
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Prečo sa znak otočí",
        "prompt": "Vysvetli vlastnými slovami, prečo sa pri delení nerovnice záporným číslom musí otočiť znak. Pomôž si číselným príkladom.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Napríklad 2 &lt; 5 platí. Ak obe strany vynásobím číslom −1, dostanem −2 a −5, no −2 je na osi vpravo od −5, takže správny vzťah je −2 &gt; −5. Záporné násobenie zrkadlovo obráti poradie čísel, preto sa musí obrátiť aj znak nerovnosti.",
        "placeholder": "Znak sa otočí, pretože..."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "ekvivalentné úpravy",
          "otočenie znaku pri záporných číslach",
          "zápis intervalom a na osi",
          "skúška dosadením",
          "nerovnice bez riešenia / s riešením v R"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; ak máš 🔴 alebo 🟡, vráť sa k príkladom na začiatku modulu."
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 4,
        "text": "Vyrieš nerovnicu 2x − 7 < 5 a výsledok zapíš intervalom aj na číselnej osi.",
        "answer": "2x &lt; 12, x &lt; 6, (−∞; 6)"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 4,
        "text": "Vyrieš nerovnicu −5x ≤ 20 a urob skúšku.",
        "answer": "x ≥ −4, ⟨−4; ∞). Skúška: x = −4: 20 ≤ 20 platí; x = 0: 0 ≤ 20 platí; x = −5: 25 ≤ 20 neplatí."
      },
      {
        "id": "w3",
        "level": "rozsirenie",
        "space": 5,
        "text": "Vyrieš nerovnicu 4(x + 1) − 3x ≥ 6x − 11.",
        "answer": "4x + 4 − 3x ≥ 6x − 11, x + 4 ≥ 6x − 11, 15 ≥ 5x, x ≤ 3, (−∞; 3⟩"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 5,
        "text": "Vyrieš nerovnicu (x − 1)/3 + 2 > x/2.",
        "answer": "Vynásobíme 6: 2(x − 1) + 12 > 3x, 2x + 10 > 3x, 10 > x, (−∞; 10)"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 3,
        "text": "Rozhodni bez dlhého počítania, či má nerovnica 5(x − 2) > 5x − 7 riešenie, a zapíš ho.",
        "answer": "5x − 10 > 5x − 7 vedie na −10 > −7, čo neplatí nikdy: ∅"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 6,
        "text": "Súčet dvoch po sebe idúcich celých čísel je väčší ako 25. Nájdi najmenšiu takúto dvojicu.",
        "answer": "n + (n + 1) > 25, 2n > 24, n > 12, najmenšie n = 13, dvojica 13 a 14"
      }
    ]
  }
});
