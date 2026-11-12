MathPlatform.registerModule({
  "id": "2-u04-h028",
  "teacher": {
    "placement": "2. ročník · Lineárne nerovnice · 28. hodina: Riešenie úloh",
    "planContent": [
      "V poskytnutom tematickom pláne nie je pri tematickom celku „Lineárne nerovnice“ vyplnený samostatný obsahový štandard. Modul preto nevydáva doplnený text za oficiálny obsahový štandard; vychádza z názvu tematického celku a konkrétnej témy hodiny."
    ],
    "planPerformance": [
      "V poskytnutom tematickom pláne nie je pri tematickom celku „Lineárne nerovnice“ vyplnený samostatný výkonový štandard. Ciele nižšie sú ciele tejto vyučovacej hodiny, nie vymyslený oficiálny výkonový štandard."
    ],
    "prerequisites": [
      "1. ročník: číselná os, intervaly a ich zápis, prienik a zjednotenie, absolútna hodnota, lomené výrazy a definičný obor",
      "2. ročník: lineárne rovnice, ekvivalentné úpravy nerovníc, riešenie nerovníc s neznámou v menovateli (h024, h025), zápis intervalom (h026), nerovnice s absolútnou hodnotou (h027)"
    ],
    "goals": [
      "Žiak pred počítaním rozpozná typ nerovnice (lineárna, neznáma v menovateli, absolútna hodnota) a zvolí zodpovedajúci postup.",
      "Žiak bezpečne rieši lineárne nerovnice so zátvorkami a zlomkami (násobenie spoločným kladným menovateľom, otočenie znaku pri zápornom čísle).",
      "Žiak rieši nerovnice s neznámou v menovateli pomocou podmienok, kritických bodov a znamienok a nevynásobuje menovateľom neznámeho znamienka.",
      "Žiak rieši |u| < c a |u| > c a výsledok zapíše intervalmi.",
      "Žiak zostaví nerovnicu zo slovnej úlohy, vyrieši ju a posúdi výsledok v kontexte (celé počty, kladné veličiny).",
      "Kritérium úspechu: v digitálnej časti žiak správne vyrieši väčšinu úloh a v zbierke zvládne úroveň základ samostatne."
    ],
    "competencies": [
      "modelovanie: preklad slovnej úlohy do nerovnice a späť do odpovede",
      "výber vhodného postupu podľa typu úlohy",
      "presný zápis riešenia intervalmi, kontrola dosadením",
      "hľadanie a vysvetlenie chyby v cudzom postupe"
    ],
    "enrichment": [
      "Slovné úlohy z praxe: tarify, rozpočet, tolerancie a prípustné rozsahy (fyzika, odborné predmety).",
      "Maturitné využitie: kombinácia viacerých typov nerovníc a interpretácia výsledku v kontexte."
    ],
    "flow": [
      "0–5 min: stručné zhrnutie celku, otázka „Čo najprv zistíš, keď vidíš novú nerovnicu?“",
      "5–15 min: tri vzorové príklady troch typov a postup pri slovnej úlohe",
      "15–35 min: platforma (priraďovanie typu, výber riešení, hľadanie chýb, slovné úlohy s číselnou odpoveďou)",
      "35–42 min: samostatná úloha na papieri (BEZ MOBILU), kontrola v dvojiciach",
      "42–45 min: zhrnutie najčastejších chýb podľa živých výsledkov, zbierka ako domáca úloha"
    ],
    "diagnostics": [
      "zabudne otočiť znak pri delení záporným číslom (napr. −x ≥ 11)",
      "vynásobí nerovnicu výrazom s neznámym znamienkom (4/(x − 1) > 0)",
      "pri zlomku zabudne vylúčiť nulu menovateľa alebo zle zapíše krajné body",
      "pri −c < u < c zamení prienik a zjednotenie",
      "v slovnej úlohe neposúdi výsledok v kontexte (zaokrúhli opačným smerom)"
    ],
    "partialUse": [
      "Pri skrátenej hodine vynechať časť o neznámej v menovateli (c3, c4, hunt2) alebo slovné úlohy a nechať jadro: rozpoznanie typu a hľadanie chýb.",
      "Mobil nenahrádza ručné počítanie: žiak rieši v zošite a vyberá alebo prepisuje výsledok.",
      "Zbierka (základ, rozšírenie, bonus) slúži na diferenciáciu a domácu prácu.",
      "ŠVVP: ponechať viditeľné vzorové príklady, zadať menej úloh bez zníženia jadra cieľa.",
      "Hodnotenie: priebežná slovná spätná väzba a sebahodnotenie; XP nie sú známka."
    ]
  },
  "student": {
    "title": "Riešenie úloh: zmiešané nerovnice a slovné úlohy",
    "subtitle": "Téma 28 · Lineárne nerovnice",
    "intro": "Zmiešané úlohy z celého celku: najprv rozpoznáš typ nerovnice, potom ju vyriešiš a nakoniec použiješ nerovnice v slovných úlohách. Počítaj v zošite, do aplikácie vyberaj alebo prepisuj výsledky.",
    "estimatedTime": "30–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme z celého celku",
        "html": "<p>V tomto celku si sa naučil/a štyri veci:</p>\n<ul>\n<li><strong>Lineárne nerovnice</strong> riešime ekvivalentnými úpravami ako rovnice, ale pri násobení alebo delení záporným číslom sa znak otočí (h024).</li>\n<li>Keď je neznáma <strong>v menovateli</strong>, určíme podmienky, kritické body a znamienka na intervaloch (h025).</li>\n<li>Riešenie zapisujeme <strong>intervalom</strong> a znázorňujeme na číselnej osi (h026).</li>\n<li>Nerovnice s <strong>absolútnou hodnotou</strong>: |u| &lt; c dá −c &lt; u &lt; c, |u| &gt; c dá u &lt; −c alebo u &gt; c (h027).</li>\n</ul>\n<p>Dnes zmiešané úlohy: najprv musíš <strong>rozpoznať typ</strong>, až potom ho vieš správne riešiť. Na záver slovné úlohy.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "rozpoznať typ nerovnice a zvoliť k nemu správny postup",
          "bezpečne riešiť lineárne nerovnice aj so zlomkami a zátvorkami",
          "zostaviť a vyriešiť nerovnicu zo slovnej úlohy a posúdiť výsledok v kontexte"
        ]
      },
      {
        "id": "types",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Najprv rozpoznaj typ",
        "html": "<p>Pred každým počítaním si polož otázku: <strong>kde je neznáma x?</strong></p>\n<div class=\"term-list\">\n<div class=\"term-item no-symbol\"><div class=\"term-name\">x nie je v menovateli ani v absolútnej hodnote</div><p class=\"term-rule\"><strong>Lineárna nerovnica.</strong> Zátvorky roztiahni, zlomky odstráň násobením spoločným menovateľom (kladným číslom, znak sa nemení), členy s x daj na jednu stranu. Pri delení záporným číslom otoč znak.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">x je v menovateli</div><p class=\"term-rule\"><strong>Kritické body a znamienka.</strong> Menovateľ nesmie byť nula. Nájdi nuly čitateľa aj menovateľa, rozdeľ os na intervaly a v každom zisti znamienko zlomku. Nevynásobuj menovateľom, ak nevieš jeho znamienko.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">x je v absolútnej hodnote</div><p class=\"term-rule\"><strong>Pravidlo pre |u|.</strong> Najprv pozri na pravú stranu. Ak je c kladné: |u| &lt; c dá dvojitú nerovnosť (prienik), |u| &gt; c dá „alebo“ (zjednotenie). Ak je c ≤ 0, rozhodne sa bez počítania.</p></div>\n</div>\n<div class=\"warning\"><strong>Pozor:</strong> zlomok ako (x − 5)/3 nie je „neznáma v menovateli“. Menovateľ je číslo 3, ide o lineárnu nerovnicu. Rozhoduje, či je v menovateli <strong>x</strong>.</div>",
        "remember": "Najprv typ, potom postup: lineárna → úpravy, x v menovateli → kritické body, |u| → pravidlo pre absolútnu hodnotu."
      },
      {
        "id": "ex-all",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Vzorové príklady troch typov",
        "html": "<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1 · LINEÁRNA SO ZLOMKAMI</span>\n<p><span class=\"frac\"><span class=\"frac-num\">x + 1</span><span class=\"frac-den\">2</span></span> − <span class=\"frac\"><span class=\"frac-num\">x − 2</span><span class=\"frac-den\">3</span></span> &lt; 2 &nbsp;&nbsp;/ · 6 (kladné číslo, znak ostáva)</p>\n<p>3(x + 1) − 2(x − 2) &lt; 12</p>\n<p>3x + 3 − 2x + 4 &lt; 12, teda x + 7 &lt; 12</p>\n<p>x &lt; 5, <strong>x ∈ (−∞; 5)</strong></p>\n<p>Pozor na zátvorku: mínus pred zlomkom platí pre celý výraz x − 2, preto −2(x − 2) = −2x + 4.</p></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2 · NEZNÁMA V MENOVATELI</span>\n<p><span class=\"frac\"><span class=\"frac-num\">x + 2</span><span class=\"frac-den\">x − 3</span></span> &lt; 0. Podmienka: x ≠ 3. Kritické body: −2 (čitateľ) a 3 (menovateľ).</p>\n<p>x &lt; −2: čitateľ −, menovateľ − → zlomok kladný, nevyhovuje.</p>\n<p>−2 &lt; x &lt; 3: čitateľ +, menovateľ − → zlomok záporný, vyhovuje.</p>\n<p>x &gt; 3: čitateľ +, menovateľ + → zlomok kladný, nevyhovuje.</p>\n<p>V bode −2 je zlomok 0, nie je menší ako 0. Riešenie: <strong>x ∈ (−2; 3)</strong></p></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 3 · ABSOLÚTNA HODNOTA</span>\n<p>|2x + 1| ≥ 5</p>\n<p>2x + 1 ≤ −5 alebo 2x + 1 ≥ 5</p>\n<p>x ≤ −3 alebo x ≥ 2, <strong>x ∈ (−∞; −3⟩ ∪ ⟨2; ∞)</strong></p></div>"
      },
      {
        "id": "word",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Ako riešiť slovnú úlohu s nerovnicou",
        "html": "<ol class=\"steps\">\n<li>Označ neznámu a napíš, čo znamená (aj s jednotkou).</li>\n<li>Slová „najviac“, „aspoň“, „menej ako“, „viac ako“ prelož na znaky ≤, ≥, &lt;, &gt;.</li>\n<li>Zostav nerovnicu a vyrieš ju.</li>\n<li>Posúď riešenie v kontexte: je počet ľudí celé číslo? môže byť dĺžka záporná?</li>\n<li>Napíš slovnú odpoveď.</li>\n</ol>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 4</span>\n<p>Trieda platí za autobus 90 € a navyše 6 € za každého žiaka. Rozpočet je najviac 312 €. Koľko žiakov najviac môže ísť?</p>\n<p>n = počet žiakov. „Najviac 312 €“ znamená ≤: 90 + 6n ≤ 312</p>\n<p>6n ≤ 222, teda n ≤ 37</p>\n<p>Počet žiakov je celé číslo, preto najviac <strong>37 žiakov</strong>. Skúška: 90 + 6 · 37 = 312 ≤ 312.</p></div>\n<div class=\"warning\"><strong>Pozor:</strong> výsledok n ≤ 37,5 by v kontexte znamenal 37 žiakov, nie 38. Pri počte osôb, kusov či minút zaokrúhľuj v smere, ktorý nerovnicu zachová.</div>"
      },
      {
        "id": "match-type",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "rozpoznanie typu",
        "title": "Priraď nerovnici typ postupu",
        "labels": [
          "Lineárna (úpravy)",
          "Neznáma v menovateli",
          "Absolútna hodnota"
        ],
        "items": [
          {
            "text": "4x − 3(x − 2) > 7",
            "answer": "Lineárna (úpravy)"
          },
          {
            "text": "5/(x − 1) < 2",
            "answer": "Neznáma v menovateli"
          },
          {
            "text": "|x − 6| ≤ 2",
            "answer": "Absolútna hodnota"
          },
          {
            "text": "(x + 3)/(2x − 4) ≥ 0",
            "answer": "Neznáma v menovateli"
          },
          {
            "text": "(x − 5)/3 < x/2 + 1",
            "answer": "Lineárna (úpravy)"
          },
          {
            "text": "|2x| > 8",
            "answer": "Absolútna hodnota"
          }
        ]
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "zmiešané nerovnice",
        "question": "Riešením nerovnice (x − 1)/2 − (2x + 1)/3 ≥ 1 je množina:",
        "options": [
          "⟨−11; ∞)",
          "(−∞; −11⟩",
          "(−∞; 11⟩"
        ],
        "answer": 1,
        "correct": "Po vynásobení číslom 6 je 3(x − 1) − 2(2x + 1) ≥ 6, teda −x − 5 ≥ 6, −x ≥ 11. Delenie číslom −1 otočí znak: x ≤ −11.",
        "hint": "Vynásob číslom 6 a pozorne roztiahni zátvorky: mínus pred zlomkom mení znamienka oboch členov. Na konci máš −x, nie x."
      },
      {
        "id": "c2",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "zmiešané nerovnice",
        "question": "Riešením nerovnice 3(2x − 1) − 2(x + 4) < 5x − 1 je množina:",
        "options": [
          "(−∞; −10)",
          "(10; ∞)",
          "(−10; ∞)"
        ],
        "answer": 2,
        "correct": "Ľavá strana: 6x − 3 − 2x − 8 = 4x − 11. Z 4x − 11 &lt; 5x − 1 dostaneme −x &lt; 10, delením číslom −1 sa znak otočí: x &gt; −10.",
        "hint": "Pri −x &lt; 10 treba x vyjadriť delením číslom −1. Čo sa stane so znakom?"
      },
      {
        "id": "n-min",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "celé riešenia",
        "title": "Najmenšie celé riešenie",
        "prompt": "Aké je najmenšie celé číslo, ktoré spĺňa nerovnicu 3(2x − 1) − 2(x + 4) < 5x − 1?",
        "validate": "exact",
        "answer": -9,
        "success": "Riešenie je (−10; ∞). Číslo −10 do neho nepatrí (ostrá nerovnosť), najmenšie celé riešenie je −9.",
        "hint": "Najprv vyrieš nerovnicu. Patrí ľavý krajný bod do riešenia?",
        "reveal": "Správne je −9. Pre x = −10 vyjde ľavá strana −51 a pravá −51, nie je teda menšia."
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "neznáma v menovateli",
        "question": "Riešením nerovnice (x − 4)/(x + 1) ≤ 0 je množina:",
        "options": [
          "⟨−1; 4⟩",
          "(−∞; −1) ∪ ⟨4; ∞)",
          "(−1; 4⟩",
          "(−1; 4)"
        ],
        "answer": 2,
        "correct": "Zlomok je záporný pre −1 &lt; x &lt; 4 a nulový pre x = 4. Bod −1 nepatrí do riešenia, lebo menovateľ nesmie byť nula.",
        "hint": "Ktoré krajné body patria? Čitateľ môže byť nula (zlomok = 0 spĺňa ≤), menovateľ nie."
      },
      {
        "id": "c4",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "neznáma v menovateli",
        "question": "Pri nerovnici (2x − 6)/(x + 5) ≥ 0 sú kritické body čísla:",
        "options": [
          "5 a 3",
          "−5 a −3",
          "−5 a 6",
          "−5 a 3"
        ],
        "answer": 3,
        "correct": "Čitateľ 2x − 6 je nula pre x = 3 a menovateľ x + 5 je nula pre x = −5. Bod −5 treba navyše vylúčiť.",
        "hint": "Vyrieš 2x − 6 = 0 a x + 5 = 0 zvlášť."
      },
      {
        "id": "n-cnt",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "celé riešenia",
        "title": "Počet celých riešení",
        "prompt": "Koľko celých čísel spĺňa nerovnicu (x − 4)/(x + 1) ≤ 0?",
        "validate": "exact",
        "answer": 5,
        "success": "Riešenie je (−1; 4⟩, celé čísla sú 0, 1, 2, 3, 4, teda päť.",
        "hint": "Použi riešenie z predchádzajúcej úlohy a spočítaj celé čísla v intervale. Patria krajné body?",
        "reveal": "Správne je 5: čísla 0, 1, 2, 3 a 4. Číslo −1 nepatrí (menovateľ), číslo 4 patrí (zlomok je 0)."
      },
      {
        "id": "hunt1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak riešil 4/(x − 1) > 0 takto: „Vynásobím obe strany číslom x − 1 a dostanem 4 > 0, čo platí vždy, riešením je ℝ.“ V čom je chyba?",
        "options": [
          "Mal vynásobiť číslom (x − 1)², nie (x − 1).",
          "Nevedel znamienko výrazu x − 1, preto nemohol vynásobiť bez rozboru. Napríklad pre x = 0 vyjde 4/(−1) = −4, čo nespĺňa nerovnicu. Správne je x > 1.",
          "Správne riešenie je x < 1.",
          "Nerovnicu nie je možné riešiť, lebo je v nej zlomok."
        ],
        "answer": 1,
        "correct": "Presne. Pri násobení výrazom s neznámym znamienkom sa môže znak otočiť, preto treba rozlišovať prípady. Zlomok 4/(x − 1) je kladný práve vtedy, keď je menovateľ kladný.",
        "hint": "Dosaď do pôvodnej nerovnice x = 0. Platí 4/(0 − 1) &gt; 0?"
      },
      {
        "id": "hunt2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak riešil (x − 4)/(x + 1) ≤ 0 takto: „Zlomok je ≤ 0, keď x − 4 ≤ 0 a x + 1 ≤ 0, teda x ≤ 4 a x ≤ −1, riešenie je (−∞; −1⟩.“ V čom je chyba?",
        "options": [
          "Zlomok je záporný, keď majú čitateľ a menovateľ opačné znamienka, nie rovnaké. Navyše x = −1 nie je prípustné (menovateľ je 0).",
          "Mal použiť zjednotenie namiesto prieniku.",
          "Chyba je len v tom, že mal písať ostré nerovnosti.",
          "Správne riešenie je (−∞; −1) ∪ ⟨4; ∞)."
        ],
        "answer": 0,
        "correct": "Správne. Podiel je záporný pri opačných znamienkach a nulový, keď je nulový čitateľ. Správne riešenie je (−1; 4⟩. Skúška: x = 0 dá −4 ≤ 0, kým žiakov výsledok x = 0 vylúčil.",
        "hint": "Dosaď x = 0 do pôvodnej nerovnice. Patrí 0 do žiakovho výsledku (−∞; −1⟩?"
      },
      {
        "id": "c5",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "nerovnice s abs. hodnotou",
        "question": "Riešením nerovnice |2x − 5| ≤ 3 je množina:",
        "options": [
          "⟨1; 4⟩",
          "(−∞; 1⟩ ∪ ⟨4; ∞)",
          "⟨1; 4)",
          "⟨−1; 4⟩"
        ],
        "answer": 0,
        "correct": "−3 ≤ 2x − 5 ≤ 3 dá 2 ≤ 2x ≤ 8, teda 1 ≤ x ≤ 4.",
        "hint": "Rozpíš |2x − 5| ≤ 3 ako dvojitú nerovnosť a pripočítaj 5 ku všetkým trom častiam."
      },
      {
        "id": "c6",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "nerovnice s abs. hodnotou",
        "question": "Riešením nerovnice |x + 2| > 4 je množina:",
        "options": [
          "(−6; 2)",
          "(−∞; −6) ∪ (2; ∞)",
          "(−∞; −2) ∪ (6; ∞)",
          "(2; ∞)"
        ],
        "answer": 1,
        "correct": "x + 2 &lt; −4 alebo x + 2 &gt; 4, teda x &lt; −6 alebo x &gt; 2. Čísla od −2 vzdialené viac ako 4.",
        "hint": "Rozpíš ako dve samostatné nerovnice a po odčítaní 2 ich zjednoť."
      },
      {
        "id": "sort-steps",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "kontrola krokov",
        "title": "Je tento krok správny?",
        "question": "Rozhodni, či je každé tvrdenie o riešení nerovnice správne.",
        "labels": [
          "Správne",
          "Nesprávne"
        ],
        "items": [
          {
            "text": "Z −4x < 20 plynie x < −5.",
            "answer": false,
            "why": "Delíme záporným číslom −4, znak sa otočí: x > −5."
          },
          {
            "text": "Z 2x + 6 ≥ 0 plynie x ≥ −3.",
            "answer": true,
            "why": "Odčítame 6 a delíme kladným číslom 2, znak sa nemení."
          },
          {
            "text": "Z |x − 1| < 3 plynie −2 < x < 4.",
            "answer": true,
            "why": "−3 < x − 1 < 3, pripočítame 1: −2 < x < 4."
          },
          {
            "text": "Z |x| > 2 plynie −2 < x < 2.",
            "answer": false,
            "why": "Pre „väčšie ako“ ide o x < −2 alebo x > 2 (zjednotenie)."
          },
          {
            "text": "Pri (x + 1)/(x − 3) < 0 treba vylúčiť x = 3.",
            "answer": true,
            "why": "Pre x = 3 je menovateľ nula, zlomok nie je definovaný."
          },
          {
            "text": "Z 3/(x − 2) > 0 môžem vynásobiť výrazom x − 2 a dostať 3 > 0 bez rozboru.",
            "answer": false,
            "why": "Znamienko x − 2 nepoznáme, môže otočiť znak. Zlomok je kladný pre x > 2."
          }
        ]
      },
      {
        "id": "c-model",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "slovné úlohy",
        "question": "Tarifa A stojí 6 € mesačne plus 0,05 € za minútu hovoru. Tarifa B nemá mesačný poplatok a stojí 0,11 € za minútu. Ktorá nerovnica popisuje, že tarifa A vychádza lacnejšie ako B pri m minútach hovoru za mesiac?",
        "options": [
          "0,05m < 0,11m",
          "6 + 0,05m > 0,11m",
          "6 · 0,05m < 0,11m",
          "6 + 0,05m < 0,11m"
        ],
        "answer": 3,
        "correct": "Cena A je 6 + 0,05m, cena B je 0,11m. „Lacnejšie“ znamená menšia cena: 6 + 0,05m &lt; 0,11m.",
        "hint": "Mesačný poplatok 6 € sa pripočíta, nenásobí sa. A má byť lacnejšia, teda jej cena je menšia."
      },
      {
        "id": "n-tarif",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "slovné úlohy",
        "title": "Od koľkých minút je A lacnejšia",
        "prompt": "Vyrieš nerovnicu 6 + 0,05m < 0,11m. Pri akom počte minút m sú ceny oboch tarif práve rovnaké (hranica riešenia)?",
        "validate": "exact",
        "answer": 100,
        "success": "6 &lt; 0,06m, teda m &gt; 100. Pri 100 minútach sú ceny rovnaké (11 €), tarifa A je lacnejšia pre viac ako 100 minút.",
        "hint": "Odčítaj 0,05m od oboch strán a vydeľ 0,06.",
        "reveal": "Správne je 100: 6 + 0,05 · 100 = 11 a 0,11 · 100 = 11."
      },
      {
        "id": "n-budget",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "slovné úlohy",
        "title": "Rozpočet na výlet",
        "prompt": "Výlet stojí 120 € za dopravu a 8 € za každého žiaka. Rozpočet je najviac 400 €. Koľko žiakov najviac môže ísť?",
        "validate": "exact",
        "answer": 35,
        "success": "120 + 8n ≤ 400, 8n ≤ 280, n ≤ 35. Pri 35 žiakoch je cena presne 400 €.",
        "hint": "Zostav nerovnicu 120 + 8n ≤ 400 a vyrieš ju. Výsledok musí byť celé číslo.",
        "reveal": "Správne je 35: 120 + 8 · 35 = 400 ≤ 400, kým pre 36 žiakov je cena 408 €."
      },
      {
        "id": "n-rect",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "slovné úlohy",
        "title": "Obvod obdĺžnika",
        "prompt": "Obdĺžnik má strany x cm a (x + 3) cm. Obvod má byť menší ako 50 cm. Aké je najväčšie celé číslo x, ktoré to spĺňa?",
        "validate": "exact",
        "answer": 10,
        "success": "Obvod 2(x + x + 3) = 4x + 6 &lt; 50, teda 4x &lt; 44, x &lt; 11. Najväčšie celé x je 10.",
        "hint": "Obvod je 2 · (súčet dvoch strán). Zostav 4x + 6 &lt; 50. Je hranica 11 ešte povolená?",
        "reveal": "Správne je 10. Pre x = 11 je obvod presne 50, nie menší ako 50."
      },
      {
        "id": "n-consec",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "slovné úlohy",
        "title": "Dve za sebou idúce čísla",
        "prompt": "Súčet dvoch za sebou idúcich prirodzených čísel je menší ako 40. Aké je najväčšie možné menšie z týchto dvoch čísel?",
        "validate": "exact",
        "answer": 19,
        "success": "n + (n + 1) &lt; 40 dá 2n &lt; 39, n &lt; 19,5. Najväčšie prirodzené n je 19 (19 + 20 = 39).",
        "hint": "Menšie číslo označ n, väčšie n + 1. Zostav nerovnicu a hľadaj najväčšie celé n.",
        "reveal": "Správne je 19: 19 + 20 = 39 &lt; 40, ale 20 + 21 = 41."
      },
      {
        "id": "c-tol",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "slovné úlohy",
        "question": "Teplota t v chladiacom boxe má byť od 2 °C do 8 °C vrátane. Ktorá nerovnica to popisuje?",
        "options": [
          "|t − 3| ≤ 5",
          "|t − 5| ≥ 3",
          "|t| ≤ 8",
          "|t − 5| ≤ 3"
        ],
        "answer": 3,
        "correct": "Stred intervalu ⟨2; 8⟩ je 5 a polomer 3, preto |t − 5| ≤ 3. Z toho 2 ≤ t ≤ 8.",
        "hint": "Nájdi stred intervalu a jeho vzdialenosť od krajov."
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha na papier",
        "html": "<p>Odlož zariadenie. Vyrieš v zošite s postupom a výsledok zapíš intervalom:</p>\n<ol type=\"a\"><li>5x − 7 &lt; 2x + 8</li><li>(3x − 6)/(x + 2) &lt; 0</li><li>|2x − 7| ≤ 5</li></ol>\n<p>d) V obchode stojí zošit 1,50 € a dostaneš zľavu 0,50 € z celého nákupu. Koľko zošitov najviac môžeš kúpiť za 10 €? Zostav nerovnicu a odpovedz vetou.</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: zmiešané nerovnice",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Najprv pri každej úlohe rozpoznaj typ. Riešenia píš do zošita s postupom a odškrtni hotovú úlohu. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "5x − 7 < 2x + 8",
            "answer": "5x − 2x &lt; 8 + 7, 3x &lt; 15, x &lt; 5.<br><strong>Riešenie: (−∞; 5)</strong>"
          },
          {
            "level": "zaklad",
            "text": "3 − 2x ≥ 11",
            "answer": "−2x ≥ 8, delíme číslom −2 a znak otočíme: x ≤ −4.<br><strong>Riešenie: (−∞; −4⟩</strong>"
          },
          {
            "level": "zaklad",
            "text": "|x − 6| < 2",
            "answer": "−2 &lt; x − 6 &lt; 2, pripočítame 6: 4 &lt; x &lt; 8.<br><strong>Riešenie: (4; 8)</strong>"
          },
          {
            "level": "zaklad",
            "text": "Na vstupenky na koncert máš 50 €. Jedna vstupenka stojí 7 € a za objednávku platíš poplatok 4 €. Koľko vstupeniek najviac môžeš kúpiť?",
            "answer": "4 + 7n ≤ 50, 7n ≤ 46, n ≤ 6,57…, teda najviac 6 vstupeniek. Skúška: 4 + 42 = 46 ≤ 50, no pre 7 vstupeniek je to 53 €."
          },
          {
            "level": "rozsirenie",
            "answer": "Násobíme 6: 2(x + 1) − 3(x − 1) &gt; 6, 2x + 2 − 3x + 3 &gt; 6, −x + 5 &gt; 6, −x &gt; 1, x &lt; −1.<br><strong>Riešenie: (−∞; −1)</strong>",
            "html": "<span class=\"frac\"><span class=\"frac-num\">x + 1</span><span class=\"frac-den\">3</span></span> − <span class=\"frac\"><span class=\"frac-num\">x − 1</span><span class=\"frac-den\">2</span></span> &gt; 1"
          },
          {
            "level": "rozsirenie",
            "answer": "Podmienka x ≠ −2. Čitateľ 3x − 6 = 3(x − 2) je záporný pre x &lt; 2. Menovateľ je kladný pre x &gt; −2. Zlomok je záporný, keď majú opačné znamienka: −2 &lt; x &lt; 2 (pre x &lt; −2 sú oba záporné, zlomok kladný).<br><strong>Riešenie: (−2; 2)</strong>",
            "html": "<span class=\"frac\"><span class=\"frac-num\">3x − 6</span><span class=\"frac-den\">x + 2</span></span> &lt; 0"
          },
          {
            "level": "rozsirenie",
            "text": "|2x − 7| ≤ 5",
            "answer": "−5 ≤ 2x − 7 ≤ 5, pripočítame 7: 2 ≤ 2x ≤ 12, 1 ≤ x ≤ 6.<br><strong>Riešenie: ⟨1; 6⟩</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Teplota t v sklade musí byť od −4 °C do 10 °C vrátane. Zapíš podmienku jednou nerovnicou s absolútnou hodnotou.",
            "answer": "Stred je (−4 + 10) : 2 = 3, polomer (10 − (−4)) : 2 = 7. Nerovnica |t − 3| ≤ 7.<br><strong>Riešenie: ⟨−4; 10⟩</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Aké je najväčšie celé riešenie nerovnice 2(x − 3) ≥ 5x + 9?",
            "answer": "2x − 6 ≥ 5x + 9, −3x ≥ 15, x ≤ −5. Najväčšie celé riešenie je −5.<br><strong>Riešenie: (−∞; −5⟩</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Z troch testov máš 60 %, 72 % a 78 %. Aký najmenší výsledok musíš dosiahnuť v štvrtom teste, aby mal priemer aspoň 70 %?",
            "answer": "(60 + 72 + 78 + x) : 4 ≥ 70, 210 + x ≥ 280, x ≥ 70. Najmenší výsledok je 70 %."
          },
          {
            "level": "bonus",
            "answer": "<span class=\"frac\"><span class=\"frac-num\">5</span><span class=\"frac-den\">x − 2</span></span> − 1 &lt; 0, teda <span class=\"frac\"><span class=\"frac-num\">7 − x</span><span class=\"frac-den\">x − 2</span></span> &lt; 0. Kritické body 2 a 7: pre x &lt; 2 je zlomok záporný (čitateľ +, menovateľ −), pre 2 &lt; x &lt; 7 kladný, pre x &gt; 7 záporný (čitateľ −, menovateľ +).<br><strong>Riešenie: (−∞; 2) ∪ (7; ∞)</strong>",
            "html": "<span class=\"frac\"><span class=\"frac-num\">5</span><span class=\"frac-den\">x − 2</span></span> &lt; 1 &nbsp;(tip: všetko daj na jednu stranu a zjednoť na jeden zlomok)"
          },
          {
            "level": "bonus",
            "text": "|x + 1| + |x − 3| > 6",
            "answer": "Kritické body −1 a 3. x &lt; −1: 2 − 2x &gt; 6, x &lt; −2. −1 ≤ x &lt; 3: súčet je 4, nie je &gt; 6. x ≥ 3: 2x − 2 &gt; 6, x &gt; 4.<br><strong>Riešenie: (−∞; −2) ∪ (4; ∞)</strong>"
          }
        ]
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Ako zvolím postup",
        "prompt": "Máš tri nerovnice: 3x − 5 > x + 7, (x + 1)/(x − 4) > 0 a |x − 2| < 3. Vysvetli vlastnými slovami, podľa čoho zvolíš postup pre každú z nich a v čom sa postupy líšia.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Pozriem sa, kde je x. V prvej nerovnici je x len v lineárnych členoch, preto použijem ekvivalentné úpravy a dávam pozor na znak pri delení záporným číslom. V druhej je x v menovateli, preto vylúčim x = 4, nájdem kritické body −1 a 4 a určím znamienko zlomku na intervaloch. V tretej je x v absolútnej hodnote, preto použijem pravidlo |u| &lt; c, teda −3 &lt; x − 2 &lt; 3."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "rozpoznanie typu nerovnice",
          "lineárne nerovnice so zlomkami a zátvorkami",
          "neznáma v menovateli (kritické body)",
          "nerovnice s absolútnou hodnotou",
          "slovné úlohy s nerovnicou"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka. Čo máš 🔴 alebo 🟡, si pred písomkou ešte raz prejdi."
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 4,
        "text": "Vyrieš nerovnicu 4(x − 2) − 3x ≤ 2x + 1 a výsledok zapíš intervalom.",
        "answer": "4x − 8 − 3x ≤ 2x + 1, x − 8 ≤ 2x + 1, −x ≤ 9, delíme −1 a otáčame znak: x ≥ −9.<br><strong>Riešenie: ⟨−9; ∞)</strong>"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 4,
        "text": "Vyrieš nerovnicu |x + 4| > 1 a výsledok zapíš intervalom.",
        "answer": "x + 4 &lt; −1 alebo x + 4 &gt; 1, teda x &lt; −5 alebo x &gt; −3.<br><strong>Riešenie: (−∞; −5) ∪ (−3; ∞)</strong>"
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 5,
        "text": "Vyrieš nerovnicu (x − 1)/(x + 3) > 0 a výsledok zapíš intervalom.",
        "answer": "Podmienka x ≠ −3, kritické body −3 a 1. Zlomok je kladný, keď majú čitateľ a menovateľ rovnaké znamienko: x &lt; −3 (oba záporné) alebo x &gt; 1 (oba kladné).<br><strong>Riešenie: (−∞; −3) ∪ (1; ∞)</strong>"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 4,
        "text": "Taxi si účtuje nástupné 2 € a 0,80 € za každý kilometer. Koľko kilometrov najviac môžeš prejsť, ak máš k dispozícii 20 €? Zostav nerovnicu a odpovedz vetou.",
        "answer": "2 + 0,8k ≤ 20, 0,8k ≤ 18, k ≤ 22,5. Môžeš prejsť najviac 22,5 km."
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 4,
        "text": "Súčiastka má mať rozmer 12 mm s toleranciou ±0,3 mm. Zapíš podmienku nerovnicou s absolútnou hodnotou a ako interval.",
        "answer": "|x − 12| ≤ 0,3, teda 11,7 ≤ x ≤ 12,3.<br><strong>Riešenie: ⟨11,7; 12,3⟩</strong>"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 6,
        "text": "Pre ktoré x platí (2x − 1)/(x + 1) ≥ 1? (tip: všetko daj na jednu stranu)",
        "answer": "(2x − 1)/(x + 1) − 1 ≥ 0, teda (x − 2)/(x + 1) ≥ 0. Kritické body −1 (vylúčený) a 2 (patrí). Zlomok je kladný pre x &lt; −1 aj pre x &gt; 2, nulový pre x = 2.<br><strong>Riešenie: (−∞; −1) ∪ ⟨2; ∞)</strong>"
      }
    ]
  }
});
