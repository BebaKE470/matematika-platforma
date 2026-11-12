MathPlatform.registerModule({
  "id": "2-u04-h025",
  "teacher": {
    "placement": "2. ročník · Lineárne nerovnice · 25. hodina: Lineárne nerovnice s neznámou v menovateli",
    "prerequisites": [
      "1. ročník: intervaly, zjednotenie a prienik intervalov",
      "2. ročník: lineárne rovnice so zlomkami (podmienky) a lineárne nerovnice z hodiny 24"
    ],
    "planContent": [
      "V poskytnutom tematickom pláne nie je pri tematickom celku „Lineárne nerovnice“ vyplnený samostatný obsahový štandard. Modul preto nevydáva doplnený text za oficiálny obsahový štandard; vychádza z názvu tematického celku a konkrétnej témy hodiny."
    ],
    "planPerformance": [
      "V poskytnutom tematickom pláne nie je pri tematickom celku „Lineárne nerovnice“ vyplnený samostatný výkonový štandard. Ciele nižšie sú ciele tejto vyučovacej hodiny, nie vymyslený oficiálny výkonový štandard."
    ],
    "goals": [
      "určiť podmienky existencie zlomku s neznámou v menovateli",
      "vysvetliť, prečo nemožno násobiť menovateľom s neznámym znamienkom",
      "riešiť nerovnicu rozborom prípadov a tabuľkou znamienok (lineárne výrazy v čitateli a menovateli)",
      "rozhodnúť o nulových bodoch čitateľa a menovateľa (patrí/nepatrí) a zapísať výsledok zjednotením intervalov"
    ],
    "competencies": [
      "presný matematický zápis a komunikácia",
      "práca s podmienkami a kontrola riešenia",
      "prechod medzi tabuľkou znamienok, nerovnosťou a intervalom",
      "argumentácia: prečo nestačí násobiť"
    ],
    "enrichment": [
      "rozšírenie: nerovnice tvaru a/(bx + c) ≥ k, kde sa konštanta presúva na ľavú stranu",
      "bonus: slovná úloha s rýchlosťou a časom"
    ],
    "flow": [
      "0–5 min: opakovanie podmienok pri zlomkoch a zjednotenia intervalov; otázka „platí 3/(x − 1) > 1 pre x = 0?“",
      "5–15 min: výklad: prečo nemožno násobiť menovateľom, rozbor prípadov, tabuľka znamienok, nulové body",
      "15–25 min: platforma: podmienky, čítanie tabuľky, voľba intervalu, hľadanie chyby",
      "25–40 min: samostatná úloha BEZ MOBILU a zbierka podľa úrovne",
      "40–45 min: rozbor najčastejších chýb (zabudnutá podmienka, nesprávne zátvorky)"
    ],
    "diagnostics": [
      "násobí menovateľom bez rozboru a stráca riešenia",
      "zahŕňa nulový bod menovateľa do riešenia",
      "nesprávne určuje znamienko lineárneho výrazu s koeficientom −1 pri x",
      "zamieňa zjednotenie a prienik pri zápise riešenia"
    ],
    "partialUse": [
      "pri nedostatku času stačí postup 2 (tabuľka), rozbor prípadov možno iba ukázať",
      "mobil nenahrádza ručné počítanie; tabuľka znamienok sa píše do zošita",
      "pri ŠVVP ponechať šablónu tabuľky znamienok"
    ]
  },
  "student": {
    "title": "Lineárne nerovnice s neznámou v menovateli",
    "subtitle": "Téma 25 · Lineárne nerovnice",
    "intro": "Naučíš sa riešiť nerovnice, v ktorých je neznáma v menovateli: určíš podmienky, rozhodneš prípady podľa znamienka menovateľa alebo použiješ tabuľku znamienok. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "25–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>V minulej hodine si riešil lineárne nerovnice: x-ové členy na jednu stranu, čísla na druhú, a pri delení <strong>záporným</strong> číslom sa znak otočí. Výsledok si zapísal intervalom.</p><p>Z rovníc so zlomkami poznáš aj <strong>podmienku</strong>: zlomok nemá zmysel, ak je menovateľ rovný nule. Napríklad <span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">x − 2</span></span> nemá zmysel pre x = 2, preto píšeme x ≠ 2.</p><p>Z 1. ročníka vieš aj zjednotenie intervalov: (−∞; −1) ∪ (2; ∞) sú všetky čísla, ktoré ležia v aspoň jednom z intervalov. Dnes sa neznáma presťahuje <strong>do menovateľa</strong> a tieto tri veci spojíme.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "určiť podmienky, pri ktorých má zlomok s neznámou zmysel",
          "vysvetliť, prečo nerovnicu nemôžeme len tak vynásobiť menovateľom",
          "riešiť nerovnicu rozborom prípadov aj tabuľkou znamienok",
          "zapísať riešenie ako interval alebo zjednotenie intervalov a overiť ho skúškou"
        ]
      },
      {
        "id": "why",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Prečo sa nedá len vynásobiť menovateľom",
        "html": "<p>Pozrime sa na nerovnicu <strong><span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">x − 1</span></span> &gt; 1</strong>. Vyskúšame niekoľko čísel:</p><div class=\"table-wrap\"><table class=\"truth\"><thead><tr><th>x</th><th>zlomok 3/(x − 1)</th><th>je väčší ako 1?</th></tr></thead><tbody><tr><td>0</td><td>3/(−1) = −3</td><td>nie ✘</td></tr><tr><td>1</td><td>nemá zmysel</td><td>x = 1 nie je prípustné</td></tr><tr><td>2</td><td>3/1 = 3</td><td>áno ✔</td></tr><tr><td>3</td><td>3/2 = 1,5</td><td>áno ✔</td></tr><tr><td>4</td><td>3/3 = 1</td><td>nie ✘ (1 nie je väčšie ako 1)</td></tr><tr><td>5</td><td>3/4 = 0,75</td><td>nie ✘</td></tr></tbody></table></div><p>V lineárnej nerovnici by sme obe strany vynásobili číslom. Tu je ale „číslo“ výraz <strong>x − 1</strong>, ktorý môže byť <span class=\"hl\">kladný</span> (pre x &gt; 1) aj <span class=\"hl\">záporný</span> (pre x &lt; 1). Kladným výrazom znak nemeníme, záporným ho otáčame. Nevieme teda vopred, čo robiť.</p><div class=\"warning\"><strong>Pozor:</strong> Postup „vynásobím x − 1, dostanem 3 &gt; x − 1, teda x &lt; 4“ dáva zlý výsledok. Napríklad x = 0 vyhovuje tomuto zápisu, ale pôvodnej nerovnici nevyhovuje (3/(−1) = −3 nie je väčšie ako 1).</div>",
        "remember": "Výrazom s neznámou, ktorého znamienko nepoznáme, nerovnicu bez rozboru nenásobíme ani nedelíme."
      },
      {
        "id": "cases",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Postup 1: rozbor prípadov",
        "html": "<p>Rozdelíme riešenie podľa toho, či je menovateľ kladný alebo záporný.</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD · 3/(x − 1) &gt; 1</span><p><strong>Podmienka:</strong> x ≠ 1.</p><p><strong>Prípad A: x − 1 &gt; 0, teda x &gt; 1.</strong> Násobíme kladným výrazom, znak ostáva: 3 &gt; x − 1, teda x &lt; 4. Spolu s x &gt; 1 dostaneme x ∈ (1; 4).</p><p><strong>Prípad B: x − 1 &lt; 0, teda x &lt; 1.</strong> Násobíme záporným výrazom, znak sa otočí: 3 &lt; x − 1, teda x &gt; 4. Spolu s x &lt; 1 nevznikne nič (nijaké číslo nie je zároveň menšie ako 1 a väčšie ako 4): ∅.</p><p><strong>Riešenie:</strong> zjednotenie prípadov A a B, teda <strong>x ∈ (1; 4)</strong>.</p></div><div class=\"logic-visual\"><svg viewBox=\"0 0 420 80\" role=\"img\" aria-label=\"číselná os\"><g font-family=\"system-ui\" text-anchor=\"middle\"><line x1=\"10\" y1=\"40\" x2=\"410\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"410,40 402,36 402,44\" fill=\"currentColor\"/><line x1=\"30\" y1=\"35\" x2=\"30\" y2=\"45\" stroke=\"currentColor\"/><text x=\"30\" y=\"64\" font-size=\"14\">−1</text><line x1=\"81.42857142857142\" y1=\"35\" x2=\"81.42857142857142\" y2=\"45\" stroke=\"currentColor\"/><text x=\"81.42857142857142\" y=\"64\" font-size=\"14\">0</text><line x1=\"132.85714285714283\" y1=\"35\" x2=\"132.85714285714283\" y2=\"45\" stroke=\"currentColor\"/><text x=\"132.85714285714283\" y=\"64\" font-size=\"14\">1</text><line x1=\"184.28571428571428\" y1=\"35\" x2=\"184.28571428571428\" y2=\"45\" stroke=\"currentColor\"/><text x=\"184.28571428571428\" y=\"64\" font-size=\"14\">2</text><line x1=\"235.7142857142857\" y1=\"35\" x2=\"235.7142857142857\" y2=\"45\" stroke=\"currentColor\"/><text x=\"235.7142857142857\" y=\"64\" font-size=\"14\">3</text><line x1=\"287.14285714285717\" y1=\"35\" x2=\"287.14285714285717\" y2=\"45\" stroke=\"currentColor\"/><text x=\"287.14285714285717\" y=\"64\" font-size=\"14\">4</text><line x1=\"338.57142857142856\" y1=\"35\" x2=\"338.57142857142856\" y2=\"45\" stroke=\"currentColor\"/><text x=\"338.57142857142856\" y=\"64\" font-size=\"14\">5</text><line x1=\"390\" y1=\"35\" x2=\"390\" y2=\"45\" stroke=\"currentColor\"/><text x=\"390\" y=\"64\" font-size=\"14\">6</text><line x1=\"132.85714285714283\" y1=\"40\" x2=\"287.14285714285717\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"7\" opacity=\".45\"/><circle cx=\"132.85714285714283\" cy=\"40\" r=\"6\" fill=\"#fff\" stroke=\"currentColor\" stroke-width=\"2.5\"/><circle cx=\"287.14285714285717\" cy=\"40\" r=\"6\" fill=\"#fff\" stroke=\"currentColor\" stroke-width=\"2.5\"/></g></svg></div><p>V každom prípade sa výsledok musí ešte <strong>zosúladiť s predpokladom</strong> daného prípadu (prienik intervalov). Tento postup funguje, ale je dlhý. Druhý postup je prehľadnejší.</p>"
      },
      {
        "id": "table",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Postup 2: nula na jednej strane a tabuľka znamienok",
        "html": "<ol class=\"steps\"><li>Zapíš <strong>podmienku</strong>: menovateľ ≠ 0.</li><li>Presuň všetko na jednu stranu tak, aby na druhej bola <strong>nula</strong>.</li><li>Zlúč výrazy na <strong>jeden zlomok</strong> (spoločný menovateľ).</li><li>Nájdi <strong>nulové body</strong> čitateľa aj menovateľa. Rozdelia os na intervaly.</li><li>V <strong>tabuľke znamienok</strong> zisti znamienko čitateľa, menovateľa a podielu v každom intervale.</li><li>Vyber intervaly s požadovaným znamienkom a zapíš zjednotenie. Zvlášť rozhodni o nulových bodoch.</li></ol><div class=\"example\"><span class=\"mini-label\">PRÍKLAD · (x + 1)/(x − 2) &gt; 0</span><p>Podmienka: x ≠ 2. Nulové body: čitateľ x = −1, menovateľ x = 2.</p><div class=\"table-wrap\"><table class=\"truth\"><thead><tr><th></th><th>(−∞; −1)</th><th>(−1; 2)</th><th>(2; ∞)</th></tr></thead><tbody><tr><td>x + 1</td><td>−</td><td>+</td><td>+</td></tr><tr><td>x − 2</td><td>−</td><td>−</td><td>+</td></tr><tr><td>podiel</td><td>+</td><td>−</td><td>+</td></tr></tbody></table></div><p>Hľadáme podiel <strong>&gt; 0</strong> (kladný): prvý a tretí interval.</p><p><strong>x ∈ (−∞; −1) ∪ (2; ∞)</strong></p></div><div class=\"formula\"><span class=\"mini-label\">ZNAMIENKO PODIELU</span>(+) / (+) = +&nbsp;&nbsp; (−) / (−) = +&nbsp;&nbsp; (+) / (−) = −&nbsp;&nbsp; (−) / (+) = −<span class=\"formula-note\">Rovnaké znamienka dávajú plus, rôzne mínus.</span></div><p>Znamienko lineárneho výrazu zistíš tak, že dosadíš ľubovoľné číslo z intervalu. Napríklad pre x + 1 na intervale (−1; 2) zoberieme 0: 0 + 1 = 1 je kladné.</p>",
        "remember": "Podiel mení znamienko iba v nulových bodoch čitateľa a menovateľa. Preto stačí skúsiť po jednom čísle z každého intervalu."
      },
      {
        "id": "zeros",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Čo s nulovými bodmi a neostrou nerovnosťou",
        "html": "<div class=\"example\"><span class=\"mini-label\">PRÍKLAD · 3/(x − 1) ≥ 1</span><p>Podmienka: x ≠ 1. Všetko na jednu stranu a spoločný menovateľ:</p><p>3/(x − 1) − 1 ≥ 0, teda (3 − (x − 1))/(x − 1) ≥ 0, teda <strong>(4 − x)/(x − 1) ≥ 0</strong>.</p><p>Nulové body: čitateľ x = 4, menovateľ x = 1.</p><div class=\"table-wrap\"><table class=\"truth\"><thead><tr><th></th><th>(−∞; 1)</th><th>(1; 4)</th><th>(4; ∞)</th></tr></thead><tbody><tr><td>4 − x</td><td>+</td><td>+</td><td>−</td></tr><tr><td>x − 1</td><td>−</td><td>+</td><td>+</td></tr><tr><td>podiel</td><td>−</td><td>+</td><td>−</td></tr></tbody></table></div><p>Hľadáme podiel ≥ 0: interval (1; 4). Nulový bod čitateľa x = 4 dáva podiel 0, a keďže je znak ≥, <strong>patrí</strong> do riešenia. Nulový bod menovateľa x = 1 <strong>nepatrí nikdy</strong>.</p><p><strong>x ∈ (1; 4⟩</strong></p></div><div class=\"logic-visual\"><svg viewBox=\"0 0 420 80\" role=\"img\" aria-label=\"číselná os\"><g font-family=\"system-ui\" text-anchor=\"middle\"><line x1=\"10\" y1=\"40\" x2=\"410\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"410,40 402,36 402,44\" fill=\"currentColor\"/><line x1=\"30\" y1=\"35\" x2=\"30\" y2=\"45\" stroke=\"currentColor\"/><text x=\"30\" y=\"64\" font-size=\"14\">−1</text><line x1=\"81.42857142857142\" y1=\"35\" x2=\"81.42857142857142\" y2=\"45\" stroke=\"currentColor\"/><text x=\"81.42857142857142\" y=\"64\" font-size=\"14\">0</text><line x1=\"132.85714285714283\" y1=\"35\" x2=\"132.85714285714283\" y2=\"45\" stroke=\"currentColor\"/><text x=\"132.85714285714283\" y=\"64\" font-size=\"14\">1</text><line x1=\"184.28571428571428\" y1=\"35\" x2=\"184.28571428571428\" y2=\"45\" stroke=\"currentColor\"/><text x=\"184.28571428571428\" y=\"64\" font-size=\"14\">2</text><line x1=\"235.7142857142857\" y1=\"35\" x2=\"235.7142857142857\" y2=\"45\" stroke=\"currentColor\"/><text x=\"235.7142857142857\" y=\"64\" font-size=\"14\">3</text><line x1=\"287.14285714285717\" y1=\"35\" x2=\"287.14285714285717\" y2=\"45\" stroke=\"currentColor\"/><text x=\"287.14285714285717\" y=\"64\" font-size=\"14\">4</text><line x1=\"338.57142857142856\" y1=\"35\" x2=\"338.57142857142856\" y2=\"45\" stroke=\"currentColor\"/><text x=\"338.57142857142856\" y=\"64\" font-size=\"14\">5</text><line x1=\"390\" y1=\"35\" x2=\"390\" y2=\"45\" stroke=\"currentColor\"/><text x=\"390\" y=\"64\" font-size=\"14\">6</text><line x1=\"132.85714285714283\" y1=\"40\" x2=\"287.14285714285717\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"7\" opacity=\".45\"/><circle cx=\"132.85714285714283\" cy=\"40\" r=\"6\" fill=\"#fff\" stroke=\"currentColor\" stroke-width=\"2.5\"/><circle cx=\"287.14285714285717\" cy=\"40\" r=\"6\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"2.5\"/></g></svg></div><div class=\"warning\"><strong>Pozor:</strong> Nulový bod menovateľa je vždy vylúčený, aj pri ≤ a ≥ (nulou deliť nemôžeme). Nulový bod čitateľa patrí do riešenia len pri neostrej nerovnosti ≤ alebo ≥.</div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD · 2/(x + 3) &lt; 1, s otočením znaku</span><p>2/(x + 3) − 1 &lt; 0, teda (2 − (x + 3))/(x + 3) &lt; 0, teda (−x − 1)/(x + 3) &lt; 0.</p><p>Čitateľ vynásobíme číslom −1: tým sa zmení znamienko celého podielu, preto sa otočí aj znak nerovnosti. Dostaneme <strong>(x + 1)/(x + 3) &gt; 0</strong>.</p><p>Nulové body −3 a −1; podiel je kladný na (−∞; −3) a (−1; ∞).</p><p><strong>x ∈ (−∞; −3) ∪ (−1; ∞)</strong></p></div>",
        "remember": "Nulový bod menovateľa nepatrí nikdy. Nulový bod čitateľa patrí len pri ≤ alebo ≥."
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "podmienky",
        "question": "Pre ktorú hodnotu x nemá zlomok (x + 4)/(5 − 2x) zmysel?",
        "options": [
          "x = 5",
          "x = −4",
          "x = 5/2",
          "x = 2/5"
        ],
        "answer": 2,
        "correct": "Správne: 5 − 2x = 0 pre x = 5/2. Čitateľ môže byť nula, menovateľ nie.",
        "hint": "Menovateľ sa nesmie rovnať nule. Vyrieš 5 − 2x = 0."
      },
      {
        "id": "n1",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "podmienky",
        "title": "Podmienka existencie",
        "prompt": "Zlomok 5/(2x − 6) nemá zmysel pre práve jedno číslo x. Ktoré?",
        "validate": "exact",
        "answer": 3,
        "success": "2x − 6 = 0 pre x = 3. Podmienka: x ≠ 3.",
        "hint": "Vyrieš rovnicu 2x − 6 = 0.",
        "reveal": "Správne je 3: 2·3 − 6 = 0, preto x ≠ 3."
      },
      {
        "id": "c2",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "prečo rozbor",
        "question": "V nerovnici 2/(x + 3) < 1 chce žiak vynásobiť obe strany výrazom x + 3 bez ďalšieho rozboru. Prečo to nie je v poriadku?",
        "options": [
          "Výraz s neznámou sa nikdy nesmie násobiť.",
          "Výraz x + 3 môže byť kladný aj záporný, takže nevieme, či sa znak otočí.",
          "Výraz x + 3 sa nikdy nerovná nule.",
          "Po vynásobení by z nerovnice vznikla rovnica."
        ],
        "answer": 1,
        "correct": "Správne. Pre x > −3 je x + 3 kladné, pre x &lt; −3 záporné a znak by sa v druhom prípade musel otočiť.",
        "hint": "Vyskúšaj x = −4 a x = 0. Aké znamienko má x + 3 v týchto dvoch prípadoch?"
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "tabuľka znamienok",
        "question": "Aké znamienko má zlomok (x + 1)/(x − 2) pre x = −2?",
        "options": [
          "záporné",
          "nulové",
          "kladné",
          "zlomok nemá zmysel"
        ],
        "answer": 2,
        "correct": "Správne: (−2 + 1)/(−2 − 2) = (−1)/(−4) = 1/4, kladné. Mínus delené mínusom dá plus.",
        "hint": "Dosaď x = −2 do čitateľa aj do menovateľa a použi pravidlo o znamienku podielu."
      },
      {
        "id": "c4",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "tabuľka znamienok",
        "question": "Vyrieš nerovnicu (x − 3)/(x + 1) < 0. Ktorý zápis je riešením?",
        "options": [
          "(−∞; −1) ∪ (3; ∞)",
          "(−1; 3)",
          "⟨−1; 3⟩",
          "(−1; 3⟩"
        ],
        "answer": 1,
        "correct": "Správne: podiel je záporný medzi nulovými bodmi −1 a 3. Obe hranice sú vylúčené: −1 nie je v definičnom obore a pri x = 3 vyjde 0, ktorá nie je menšia ako 0.",
        "hint": "Urob tabuľku pre x − 3 a x + 1. Podiel je záporný, keď majú rôzne znamienka. Patrí hranica 3 do riešenia pri ostrej nerovnosti?"
      },
      {
        "id": "c5",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "neostrá nerovnosť",
        "question": "Vyrieš nerovnicu (x + 2)/(x − 4) ≥ 0. Ktorý zápis je riešením?",
        "options": [
          "(−∞; −2) ∪ (4; ∞)",
          "⟨−2; 4)",
          "(−∞; −2⟩ ∪ ⟨4; ∞)",
          "(−∞; −2⟩ ∪ (4; ∞)"
        ],
        "answer": 3,
        "correct": "Správne: −2 patrí (podiel je 0 a platí ≥), 4 nepatrí (menovateľ by bol 0).",
        "hint": "Podiel je nezáporný pri rovnakých znamienkach alebo keď je čitateľ nula. A ktorý nulový bod je zakázaný?"
      },
      {
        "id": "c6",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "tabuľka znamienok",
        "question": "Vyrieš nerovnicu 1/(x − 3) > 0. Ktorý interval je riešením?",
        "options": [
          "(3; ∞)",
          "(−∞; 3)",
          "⟨3; ∞)",
          "(−∞; 3) ∪ (3; ∞)"
        ],
        "answer": 0,
        "correct": "Správne: čitateľ je stále kladný, takže podiel je kladný vtedy, keď je kladný menovateľ, x − 3 > 0.",
        "hint": "Čitateľ 1 je vždy kladný. Kedy je kladný aj menovateľ?"
      },
      {
        "id": "n2",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "celé riešenia",
        "title": "Počet celých riešení",
        "prompt": "Koľko celých čísel x z intervalu ⟨−5; 5⟩ spĺňa nerovnicu (x − 1)/(x + 2) < 0?",
        "validate": "exact",
        "answer": 2,
        "success": "Riešenie je (−2; 1). Celé čísla v ňom sú −1 a 0, teda 2.",
        "hint": "Urob tabuľku pre x − 1 a x + 2. Podiel je záporný medzi nulovými bodmi −2 a 1. Ktoré celé čísla tam ležia?",
        "reveal": "Správne je 2: x ∈ (−2; 1), celé čísla −1 a 0."
      },
      {
        "id": "c7",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "nerovnica s konštantou",
        "question": "Vyrieš nerovnicu 6/(x − 2) < 3. Ktorý zápis je riešením?",
        "options": [
          "(2; 4)",
          "(4; ∞)",
          "(−∞; 2) ∪ (4; ∞)",
          "(−∞; 4)"
        ],
        "answer": 2,
        "correct": "Správne: 6/(x − 2) − 3 &lt; 0 dáva (12 − 3x)/(x − 2) &lt; 0, teda (x − 4)/(x − 2) > 0. Zlý výsledok (4; ∞) vzniká násobením (x − 2) bez rozboru.",
        "hint": "Presuň 3 doľava, spoj do jedného zlomku a urob tabuľku. Pozor, pre x &lt; 2 je menovateľ záporný."
      },
      {
        "id": "c8",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "záporný čitateľ",
        "question": "Vyrieš nerovnicu (−1)/(x + 2) > 0. Ktorý interval je riešením?",
        "options": [
          "(−2; ∞)",
          "(−∞; −2)",
          "(−∞; −2⟩",
          "(−∞; −2) ∪ (−2; ∞)"
        ],
        "answer": 1,
        "correct": "Správne: čitateľ −1 je záporný, preto musí byť záporný aj menovateľ: x + 2 &lt; 0, x &lt; −2.",
        "hint": "Čitateľ je stále záporný. Aké znamienko musí mať menovateľ, aby bol podiel kladný?"
      },
      {
        "id": "match",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "tabuľka znamienok",
        "title": "Ktorá nerovnica má ktoré riešenie?",
        "labels": [
          "(−∞; 2)",
          "(2; ∞)",
          "(−∞; 2) ∪ (2; ∞)"
        ],
        "items": [
          {
            "text": "1/(x − 2) > 0",
            "answer": "(2; ∞)"
          },
          {
            "text": "1/(x − 2) < 0",
            "answer": "(−∞; 2)"
          },
          {
            "text": "1/(2 − x) > 0",
            "answer": "(−∞; 2)"
          },
          {
            "text": "1/(2 − x) < 0",
            "answer": "(2; ∞)"
          },
          {
            "text": "podmienka, aby mal zlomok 1/(x − 2) zmysel",
            "answer": "(−∞; 2) ∪ (2; ∞)"
          }
        ]
      },
      {
        "id": "signs",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "tabuľka znamienok",
        "title": "Znamienko zlomku (x − 1)/(x + 3)",
        "labels": [
          "kladný",
          "záporný",
          "nulový",
          "nemá zmysel"
        ],
        "items": [
          {
            "text": "pre x = 0",
            "answer": "záporný"
          },
          {
            "text": "pre x = −5",
            "answer": "kladný"
          },
          {
            "text": "pre x = 1",
            "answer": "nulový"
          },
          {
            "text": "pre x = −3",
            "answer": "nemá zmysel"
          },
          {
            "text": "pre x = 4",
            "answer": "kladný"
          }
        ]
      },
      {
        "id": "sort",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "prečo rozbor",
        "title": "Vieme určiť, či sa znak otočí?",
        "question": "Chceme obe strany nerovnice vynásobiť uvedeným výrazom. Vieme vopred povedať, či sa znak otočí?",
        "labels": [
          "Vieme (stačí násobiť)",
          "Nevieme (treba rozbor)"
        ],
        "items": [
          {
            "text": "násobenie výrazom x + 3",
            "answer": false,
            "why": "x + 3 je kladné aj záporné podľa toho, aké je x."
          },
          {
            "text": "násobenie číslom −4",
            "answer": true,
            "why": "Číslo −4 je záporné, znak sa otočí."
          },
          {
            "text": "násobenie výrazom x − 2",
            "answer": false,
            "why": "Pre x > 2 je kladný, pre x < 2 záporný."
          },
          {
            "text": "násobenie číslom 7",
            "answer": true,
            "why": "7 je kladné, znak ostáva."
          },
          {
            "text": "násobenie výrazom 5 − 2x",
            "answer": false,
            "why": "Znamienko závisí od x."
          },
          {
            "text": "delenie číslom −1/2",
            "answer": true,
            "why": "Záporné číslo, znak sa otočí."
          }
        ]
      },
      {
        "id": "hunt1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak riešil 3/(x − 1) > 1 takto: „Vynásobím (x − 1): 3 > x − 1, x < 4, riešenie (−∞; 4).“ Čo prehliadol?",
        "options": [
          "Nič, 4 je správna hranica a postup je v poriadku.",
          "Mal písať 3 < x − 1.",
          "Mal písať ⟨−∞; 4⟩.",
          "Výraz x − 1 môže byť záporný a vtedy sa znak otočí; napríklad x = 0 nevyhovuje, hoci 0 < 4."
        ],
        "answer": 3,
        "correct": "Presne. Pre x &lt; 1 je x − 1 záporné. Správne riešenie je (1; 4).",
        "hint": "Dosaď x = 0 do pôvodnej nerovnice. Platí 3/(0 − 1) > 1?"
      },
      {
        "id": "hunt2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak vyriešil nerovnicu (x − 3)/(x + 1) ≥ 0 a napísal výsledok (−∞; −1⟩ ∪ ⟨3; ∞). V čom je chyba?",
        "options": [
          "Prvý interval mal byť (−∞; −1), lebo x = −1 je zakázané: menovateľ by bol 0.",
          "Číslo 3 nepatrí do riešenia.",
          "Výsledok má byť (−1; 3).",
          "Žiadna chyba, pri ≥ patria oba krajné body."
        ],
        "answer": 0,
        "correct": "Správne. Pri x = −1 je menovateľ 0 a zlomok neexistuje. Správne: (−∞; −1) ∪ ⟨3; ∞).",
        "hint": "Dosaď x = −1 do pôvodnej nerovnice. Čo sa stane s menovateľom?"
      },
      {
        "id": "n3",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "celé riešenia",
        "title": "Najmenšie celé riešenie",
        "prompt": "Aké je najmenšie celé číslo x väčšie ako 1, ktoré spĺňa nerovnicu 4/(x − 1) < 1?",
        "validate": "exact",
        "answer": 6,
        "success": "4/(x − 1) − 1 &lt; 0 dáva (5 − x)/(x − 1) &lt; 0, teda (x − 5)/(x − 1) > 0: x &lt; 1 alebo x > 5. Najmenšie celé číslo väčšie ako 5 je 6.",
        "hint": "Presuň 1 doľava, spoj do jedného zlomku a urob tabuľku. Pre x > 1 hľadáš prvé celé číslo za hranicou.",
        "reveal": "Správne je 6: riešenie je (−∞; 1) ∪ (5; ∞). Pre x = 5 vyjde 4/4 = 1, čo nie je menšie ako 1."
      },
      {
        "id": "n4",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "celé riešenia",
        "title": "Najväčšie celé riešenie",
        "prompt": "Aké je najväčšie celé číslo x, ktoré spĺňa nerovnicu (x + 3)/(x − 2) ≤ 0?",
        "validate": "exact",
        "answer": 1,
        "success": "Riešenie je ⟨−3; 2). Najväčšie celé číslo v ňom je 1, lebo 2 je vylúčené.",
        "hint": "Podiel je nekladný medzi nulovými bodmi −3 a 2. Ktorý z nich patrí do riešenia a ktorý nie?",
        "reveal": "Správne je 1: riešenie je ⟨−3; 2), číslo 2 nepatrí (menovateľ 0)."
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha na papier",
        "html": "<p>Odlož zariadenie. Vyrieš v zošite dve nerovnice:</p><ol><li><strong>5/(x + 2) ≥ 1</strong></li><li><strong>(2x − 1)/(x + 1) &lt; 0</strong></li></ol><p>Pri každej zapíš podmienku, úpravu na jeden zlomok, tabuľku znamienok a výsledok ako interval. Urob skúšku jedným číslom z riešenia a jedným mimo riešenia.</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: nerovnice s neznámou v menovateli",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Pri každej úlohe zapíš podmienku, urob tabuľku znamienok a skúšku. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Zapíš podmienky, pri ktorých majú zmysel zlomky: a) 2/(x − 5), b) (x + 1)/(2x + 6), c) 3/(4 − x)."
          },
          {
            "level": "zaklad",
            "text": "Vyrieš nerovnicu 1/(x − 4) > 0.",
            "answer": "Čitateľ je kladný, takže musí byť kladný menovateľ: x − 4 > 0.<br><strong>(4; ∞)</strong>"
          },
          {
            "level": "zaklad",
            "text": "Vyrieš nerovnicu (x + 1)/(x − 3) > 0.",
            "answer": "Nulové body −1 a 3. Znamienka podielu: + , −, +.<br><strong>(−∞; −1) ∪ (3; ∞)</strong>"
          },
          {
            "level": "zaklad",
            "text": "Vyrieš nerovnicu (x − 2)/(x + 5) ≤ 0.",
            "answer": "Nulové body −5 (menovateľ, nepatrí) a 2 (čitateľ, patrí). Podiel je záporný medzi nimi.<br><strong>(−5; 2⟩</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Vyrieš nerovnicu 2/(x − 1) ≥ 1.",
            "answer": "2/(x − 1) − 1 ≥ 0, (3 − x)/(x − 1) ≥ 0. Nulové body 1 a 3. Podiel je kladný na (1; 3), v bode 3 je 0.<br><strong>(1; 3⟩</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Vyrieš nerovnicu 3/(x + 2) < 1.",
            "answer": "3/(x + 2) − 1 &lt; 0, (1 − x)/(x + 2) &lt; 0, teda (x − 1)/(x + 2) > 0.<br><strong>(−∞; −2) ∪ (1; ∞)</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Vyrieš nerovnicu (2x + 1)/(x − 1) ≥ 0.",
            "answer": "Nulové body −1/2 (čitateľ, patrí) a 1 (menovateľ, nepatrí). Podiel je kladný vľavo od −1/2 a vpravo od 1.<br><strong>(−∞; −1/2⟩ ∪ (1; ∞)</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Vyrieš nerovnicu x/(x − 2) < 1.",
            "answer": "x/(x − 2) − 1 = 2/(x − 2) &lt; 0, teda x − 2 &lt; 0.<br><strong>(−∞; 2)</strong>"
          },
          {
            "level": "bonus",
            "text": "Vyrieš nerovnicu (x + 1)/(2 − x) ≥ 2.",
            "answer": "(x + 1 − 2(2 − x))/(2 − x) ≥ 0, (3x − 3)/(2 − x) ≥ 0, teda (x − 1)/(x − 2) ≤ 0.<br>Nulové body 1 (patrí) a 2 (nepatrí).<br><strong>⟨1; 2)</strong>"
          },
          {
            "level": "bonus",
            "text": "Auto má prejsť 120 km za menej ako 2 hodiny. Akou priemernou rýchlosťou v (v km/h, v > 0) musí ísť? Zostav nerovnicu 120/v < 2 a vyrieš ju.",
            "answer": "Pre v > 0 môžeme násobiť v (kladné): 120 &lt; 2v, v > 60.<br><strong>(60; ∞)</strong>, čiže viac ako 60 km/h"
          }
        ]
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Prečo rozbor alebo tabuľka",
        "prompt": "Vysvetli vlastnými slovami, prečo pri nerovnici s neznámou v menovateli nemôžeme len vynásobiť obe strany menovateľom, a čo robíme namiesto toho.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Menovateľ obsahuje x, takže môže byť kladný aj záporný. Pri kladnom by sa znak nemenil, pri zápornom áno, a to vopred nevieme. Preto buď riešime dva prípady, alebo presunieme všetko na jednu stranu, spojíme na jeden zlomok a znamienko podielu určíme tabuľkou. Nulu v menovateli vždy vylúčime.",
        "placeholder": "Nemôžeme násobiť menovateľom, pretože..."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "podmienky existencie zlomku",
          "prečo nenásobiť menovateľom",
          "tabuľka znamienok",
          "nulové body: ktorý patrí a ktorý nie",
          "zápis zjednotením intervalov"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; pri 🔴 alebo 🟡 si prejdi rozpracované príklady na začiatku modulu."
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 3,
        "text": "Zapíš podmienku pre zlomok 4/(3x − 9) a nájdi hodnotu x, ktorá je zakázaná.",
        "answer": "3x − 9 ≠ 0, teda x ≠ 3"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 5,
        "text": "Vyrieš nerovnicu (x + 2)/(x − 5) > 0.",
        "answer": "Nulové body −2 a 5. Podiel je kladný vľavo od −2 a vpravo od 5: (−∞; −2) ∪ (5; ∞)"
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 5,
        "text": "Vyrieš nerovnicu (x − 4)/(x + 1) ≤ 0.",
        "answer": "Podiel je záporný medzi −1 a 4; 4 patrí (čitateľ 0), −1 nie (menovateľ 0): (−1; 4⟩"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 6,
        "text": "Vyrieš nerovnicu 6/(x + 1) ≥ 2.",
        "answer": "6/(x + 1) − 2 ≥ 0, (4 − 2x)/(x + 1) ≥ 0, teda (x − 2)/(x + 1) ≤ 0: (−1; 2⟩"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 6,
        "text": "Vyrieš nerovnicu (3 − x)/(x + 4) < 0.",
        "answer": "Vynásobením −1 a otočením znaku: (x − 3)/(x + 4) > 0, teda (−∞; −4) ∪ (3; ∞)"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 7,
        "text": "Vyrieš nerovnicu (x + 3)/(x − 1) < 2.",
        "answer": "(x + 3 − 2(x − 1))/(x − 1) &lt; 0, (5 − x)/(x − 1) &lt; 0, teda (x − 5)/(x − 1) > 0: (−∞; 1) ∪ (5; ∞)"
      }
    ]
  }
});
