MathPlatform.registerModule({
  "id": "2-u04-h029",
  "teacher": {
    "placement": "2. ročník · Lineárne nerovnice · 29. hodina: Sústava lineárnych nerovníc s jednou neznámou",
    "planContent": [
      "V poskytnutom tematickom pláne nie je pri tematickom celku „Lineárne nerovnice“ vyplnený samostatný obsahový štandard. Modul preto nevydáva doplnený text za oficiálny obsahový štandard; vychádza z názvu tematického celku a konkrétnej témy hodiny."
    ],
    "planPerformance": [
      "V poskytnutom tematickom pláne nie je pri tematickom celku „Lineárne nerovnice“ vyplnený samostatný výkonový štandard. Ciele nižšie sú ciele tejto vyučovacej hodiny, nie vymyslený oficiálny výkonový štandard."
    ],
    "prerequisites": [
      "1. ročník: číselná os, intervaly a ich zápis, prienik a zjednotenie množín a intervalov, absolútna hodnota",
      "2. ročník: lineárne rovnice a ekvivalentné úpravy, riešenie jednej lineárnej nerovnice vrátane otočenia znaku pri zápornom čísle (h024), nerovnice s absolútnou hodnotou (h027)"
    ],
    "goals": [
      "Žiak vyrieši každú nerovnicu sústavy samostatne a množinu riešení sústavy určí ako prienik ich riešení.",
      "Žiak vyznačí riešenia na číselnej osi nad sebou a prienik zapíše intervalom, vrátane prázdneho prieniku, jediného bodu a vnoreného intervalu.",
      "Žiak vyrieši dvojitú nerovnosť m < ax + b < n úpravou vo všetkých troch častiach a pri zápornom koeficiente správne otočí znaky.",
      "Žiak rozlišuje prienik („a zároveň“) a zjednotenie („alebo“), vrátane súvisu s |u| < c a |u| > c.",
      "Kritérium úspechu: žiak v digitálnej časti správne určí riešenie sústavy (aj ∅) a dvojitej nerovnosti a v zbierke samostatne zvládne úroveň základ."
    ],
    "competencies": [
      "presný zápis intervalov a práca s ostrými a neostrými krajnými bodmi",
      "prechod medzi nerovnicou, číselnou osou a intervalom",
      "logické myslenie: „a“ ako prienik, „alebo“ ako zjednotenie",
      "kontrola výsledku dosadením krajných a vnútorných hodnôt"
    ],
    "enrichment": [
      "Sústavy nerovníc ako podmienky z praxe: prípustné rozsahy veličín, kapacity, rozpočet a limity (fyzika, odborné predmety).",
      "Maturitné využitie: reprezentácia množiny riešení, interpretácia výsledku a kontrola podmienok."
    ],
    "flow": [
      "0–5 min: opakovanie jednej nerovnice a prieniku intervalov; otázka „Ktoré čísla spĺňajú x > 1 aj x ≤ 5?“",
      "5–15 min: výklad sústavy ako „platí súčasne“, postup a príklady 1 až 3 s dvoma riadkami číselnej osi",
      "15–22 min: zvláštne prípady, dvojitá nerovnosť (príklady 4 a 5), prienik alebo zjednotenie",
      "22–40 min: platforma (výber riešení, prázdny prienik, celé riešenia, hľadanie chyby), potom úloha na papieri",
      "40–45 min: zhrnutie, spoločný rozbor chýb podľa živých výsledkov, zbierka ako domáca úloha"
    ],
    "diagnostics": [
      "berie zjednotenie namiesto prieniku",
      "zabudne otočiť znak pri delení záporným číslom, aj v dvojitej nerovnosti",
      "zle určí krajné body (ostré, neostré, kombinácia znakov x < 5 a x ≤ 5)",
      "prázdny prienik považuje za chybu a hľadá „nejaké“ riešenie",
      "pri dvojitej nerovnosti upraví len strednú časť"
    ],
    "partialUse": [
      "Pri skrátenej hodine vynechať zvláštne prípady a úlohy s parametrom a nechať jadro: sústava = prienik, prázdny prienik, dvojitá nerovnosť.",
      "Mobil nenahrádza ručné riešenie ani kreslenie číselnej osi: žiak počíta v zošite a do aplikácie vyberá alebo prepisuje výsledok.",
      "Zbierka (základ, rozšírenie, bonus) slúži na diferenciáciu a domácu prácu.",
      "ŠVVP: ponechať viditeľný vzor dvoch riadkov číselnej osi, zadať menej úloh bez zníženia jadra cieľa.",
      "Hodnotenie: priebežná slovná spätná väzba a sebahodnotenie; XP nie sú známka."
    ]
  },
  "student": {
    "title": "Sústava lineárnych nerovníc s jednou neznámou",
    "subtitle": "Téma 29 · Lineárne nerovnice",
    "intro": "Naučíš sa riešiť dve nerovnice naraz: každú vyriešiš zvlášť a potom nájdeš prienik riešení. Zvládneš aj prázdny prienik a dvojitú nerovnosť m < ax + b < n. Počítaj v zošite, do aplikácie vyberaj alebo prepisuj výsledky.",
    "estimatedTime": "30–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Už vieš vyriešiť <strong>jednu</strong> lineárnu nerovnicu ekvivalentnými úpravami (pri násobení alebo delení záporným číslom otočíš znak) a výsledok zapísať <strong>intervalom</strong>.</p>\n<p>Z 1. ročníka poznáš <strong>prienik</strong> množín a intervalov: spoločnú časť. Napríklad ⟨1; 6) ∩ (3; 9⟩ = (3; 6).</p>\n<p>Z minulej hodiny vieš, že |x| &lt; c dáva dvojitú nerovnosť −c &lt; x &lt; c. Dnes zistíš, že to bol vlastne špeciálny prípad <strong>sústavy</strong>: x musí splniť dve podmienky naraz.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "vyriešiť každú nerovnicu sústavy samostatne",
          "nájsť prienik riešení a zapísať ho intervalom, aj keď je prázdny",
          "vyriešiť dvojitú nerovnosť m < ax + b < n",
          "rozlíšiť, kedy ide o prienik („a zároveň“) a kedy o zjednotenie („alebo“)"
        ]
      },
      {
        "id": "meaning",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Sústava znamená „platí súčasne“",
        "html": "<p>Pri <strong>sústave nerovníc</strong> hľadáme čísla x, ktoré spĺňajú <span class=\"hl\">všetky</span> nerovnice <span class=\"hl\">naraz</span>. Zapisujeme ich pod seba, často so zloženou zátvorkou, alebo medzi ne napíšeme „a zároveň“.</p>\n<p>Napríklad sústava 2x − 1 ≥ 3 a x + 4 &lt; 9. Číslo x = 3 ju spĺňa (5 ≥ 3 a 7 &lt; 9). Číslo x = 6 nie: druhá nerovnica nevyjde (10 &lt; 9 neplatí), aj keď prvá áno.</p>\n<p>Preto riešime každú nerovnicu <strong>zvlášť</strong> a potom z množín riešení vezmeme ich <strong>prienik</strong>, teda čísla, ktoré sú v oboch množinách.</p>",
        "remember": "Sústava = všetky podmienky naraz → riešenie je prienik množín riešení jednotlivých nerovníc."
      },
      {
        "id": "ex1",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Postup a prvý vzorový príklad",
        "html": "<ol class=\"steps\">\n<li>Vyrieš prvú nerovnicu a zapíš jej riešenie.</li>\n<li>Vyrieš druhú nerovnicu a zapíš jej riešenie.</li>\n<li>Obe množiny vyznač na <strong>dvoch riadkoch</strong> číselnej osi nad sebou.</li>\n<li>Prienik je tam, kde sú vyznačené <strong>oba</strong> riadky. Zapíš ho intervalom.</li>\n</ol>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1</span>\n<p>2x − 1 ≥ 3 &nbsp;a&nbsp; x + 4 &lt; 9</p>\n<p>2x ≥ 4, x ≥ 2 &nbsp;→&nbsp; ⟨2; ∞)</p>\n<p>x &lt; 5 &nbsp;→&nbsp; (−∞; 5)</p>\n<p>Prienik: <strong>x ∈ ⟨2; 5)</strong> (2 patrí, 5 nepatrí)</p></div><div class=\"logic-visual\"><svg viewBox=\"0 0 760 224\" role=\"img\" aria-label=\"Číselná os: prienik riešení x ≥ 2 a x &lt; 5 je interval od 2 (patrí) po 5 (nepatrí)\"><text x=\"36\" y=\"31\" font-family=\"system-ui\" font-size=\"18\" fill=\"currentColor\">2x − 1 ≥ 3  →  ⟨2; ∞)</text><line x1=\"215\" y1=\"48\" x2=\"730\" y2=\"48\" stroke=\"currentColor\" stroke-width=\"8\" opacity=\"0.45\"/><circle cx=\"215\" cy=\"48\" r=\"9\" fill=\"currentColor\"/><text x=\"36\" y=\"85\" font-family=\"system-ui\" font-size=\"18\" fill=\"currentColor\">x + 4 &lt; 9  →  (−∞; 5)</text><line x1=\"30\" y1=\"102\" x2=\"462.5\" y2=\"102\" stroke=\"currentColor\" stroke-width=\"8\" opacity=\"0.45\"/><circle cx=\"462.5\" cy=\"102\" r=\"9\" fill=\"white\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"36\" y=\"139\" font-family=\"system-ui\" font-size=\"18\" fill=\"currentColor\">prienik  →  ⟨2; 5)</text><line x1=\"215\" y1=\"156\" x2=\"462.5\" y2=\"156\" stroke=\"currentColor\" stroke-width=\"8\"/><circle cx=\"215\" cy=\"156\" r=\"9\" fill=\"currentColor\"/><circle cx=\"462.5\" cy=\"156\" r=\"9\" fill=\"white\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"30\" y1=\"186\" x2=\"730\" y2=\"186\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"50\" y1=\"180\" x2=\"50\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"50\" y=\"214\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">0</text><line x1=\"132.5\" y1=\"180\" x2=\"132.5\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"132.5\" y=\"214\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">1</text><line x1=\"215\" y1=\"180\" x2=\"215\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"215\" y=\"214\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">2</text><line x1=\"297.5\" y1=\"180\" x2=\"297.5\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"297.5\" y=\"214\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">3</text><line x1=\"380\" y1=\"180\" x2=\"380\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"380\" y=\"214\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">4</text><line x1=\"462.5\" y1=\"180\" x2=\"462.5\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"462.5\" y=\"214\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">5</text><line x1=\"545\" y1=\"180\" x2=\"545\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"545\" y=\"214\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">6</text><line x1=\"627.5\" y1=\"180\" x2=\"627.5\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"627.5\" y=\"214\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">7</text><line x1=\"710\" y1=\"180\" x2=\"710\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"710\" y=\"214\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">8</text></svg></div>"
      },
      {
        "id": "ex2",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Záporný koeficient a prázdny prienik",
        "html": "<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2 · OTOČENIE ZNAKU</span>\n<p>−2x ≤ 6 &nbsp;a&nbsp; x − 1 &lt; 4</p>\n<p>−2x ≤ 6 &nbsp;/ : (−2), znak sa otočí: x ≥ −3 &nbsp;→&nbsp; ⟨−3; ∞)</p>\n<p>x &lt; 5 &nbsp;→&nbsp; (−∞; 5)</p>\n<p>Prienik: <strong>x ∈ ⟨−3; 5)</strong></p></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 3 · PRÁZDNY PRIENIK</span>\n<p>x + 3 &lt; 1 &nbsp;a&nbsp; 2x − 1 &gt; 5</p>\n<p>x &lt; −2 &nbsp;→&nbsp; (−∞; −2)</p>\n<p>2x &gt; 6, x &gt; 3 &nbsp;→&nbsp; (3; ∞)</p>\n<p>Intervaly sa neprekrývajú, takže <strong>x ∈ ∅</strong> (sústava nemá riešenie).</p></div><div class=\"logic-visual\"><svg viewBox=\"0 0 760 224\" role=\"img\" aria-label=\"Číselná os: intervaly x menšie ako −2 a x väčšie ako 3 nemajú spoločný bod\"><text x=\"36\" y=\"31\" font-family=\"system-ui\" font-size=\"18\" fill=\"currentColor\">x &lt; −2</text><line x1=\"30\" y1=\"48\" x2=\"196.66666666666666\" y2=\"48\" stroke=\"currentColor\" stroke-width=\"8\" opacity=\"0.45\"/><circle cx=\"196.66666666666666\" cy=\"48\" r=\"9\" fill=\"white\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"36\" y=\"85\" font-family=\"system-ui\" font-size=\"18\" fill=\"currentColor\">x &gt; 3</text><line x1=\"563.3333333333334\" y1=\"102\" x2=\"730\" y2=\"102\" stroke=\"currentColor\" stroke-width=\"8\" opacity=\"0.45\"/><circle cx=\"563.3333333333334\" cy=\"102\" r=\"9\" fill=\"white\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"36\" y=\"139\" font-family=\"system-ui\" font-size=\"18\" fill=\"currentColor\">prienik</text><text x=\"380\" y=\"162\" font-family=\"system-ui\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\">∅ (žiadne spoločné číslo)</text><line x1=\"30\" y1=\"186\" x2=\"730\" y2=\"186\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"50\" y1=\"180\" x2=\"50\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"50\" y=\"214\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">−4</text><line x1=\"123.33333333333333\" y1=\"180\" x2=\"123.33333333333333\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"123.33333333333333\" y=\"214\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">−3</text><line x1=\"196.66666666666666\" y1=\"180\" x2=\"196.66666666666666\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"196.66666666666666\" y=\"214\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">−2</text><line x1=\"270\" y1=\"180\" x2=\"270\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"270\" y=\"214\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">−1</text><line x1=\"343.3333333333333\" y1=\"180\" x2=\"343.3333333333333\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"343.3333333333333\" y=\"214\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">0</text><line x1=\"416.6666666666667\" y1=\"180\" x2=\"416.6666666666667\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"416.6666666666667\" y=\"214\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">1</text><line x1=\"490\" y1=\"180\" x2=\"490\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"490\" y=\"214\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">2</text><line x1=\"563.3333333333334\" y1=\"180\" x2=\"563.3333333333334\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"563.3333333333334\" y=\"214\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">3</text><line x1=\"636.6666666666666\" y1=\"180\" x2=\"636.6666666666666\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"636.6666666666666\" y=\"214\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">4</text><line x1=\"710\" y1=\"180\" x2=\"710\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"710\" y=\"214\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">5</text></svg></div><p>Prázdny prienik je správna odpoveď, nie chyba. Znamená, že žiadne číslo nesplní obe podmienky.</p>"
      },
      {
        "id": "special",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Zvláštne prípady prieniku",
        "html": "<div class=\"term-list\">\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Jeden interval leží v druhom</div><p class=\"term-rule\">x &gt; 1 a x &gt; 4 dá (4; ∞): platí tá prísnejšia podmienka.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Rovnaký krajný bod, rôzne znaky</div><p class=\"term-rule\">x &lt; 5 a x ≤ 5 dá (−∞; 5): bod 5 prvú podmienku nespĺňa, preto nepatrí.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Spoločný jediný bod</div><p class=\"term-rule\">x ≥ 3 a x ≤ 3 dá iba x = 3, zapíšeme {3}. Naproti tomu x &gt; 3 a x ≤ 3 dá ∅.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Oba smery rovnaké (obe „menšie ako“)</div><p class=\"term-rule\">x &lt; −1 a x &lt; 7 dá (−∞; −1): opäť platí prísnejšia podmienka.</p></div>\n</div>\n<div class=\"warning\"><strong>Pozor:</strong> pri prieniku vyhráva <strong>ostrejšia</strong> podmienka. V prieniku sú len čísla, ktoré spĺňajú obe, takže krajný bod patrí do riešenia iba vtedy, ak patrí do oboch množín.</div>"
      },
      {
        "id": "double",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Dvojitá nerovnosť",
        "html": "<p>Zápis <strong>m &lt; ax + b &lt; n</strong> je skrátený zápis sústavy dvoch nerovníc: ax + b &gt; m a zároveň ax + b &lt; n. Vyriešime ju naraz, každú úpravu urobíme na <strong>všetkých troch častiach</strong>.</p>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 4</span>\n<p>−3 &lt; 2x + 1 ≤ 7 &nbsp;&nbsp;/ − 1</p>\n<p>−4 &lt; 2x ≤ 6 &nbsp;&nbsp;/ : 2</p>\n<p>−2 &lt; x ≤ 3, <strong>x ∈ (−2; 3⟩</strong></p></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 5 · ZÁPORNÝ KOEFICIENT</span>\n<p>1 ≤ 5 − 2x &lt; 9 &nbsp;&nbsp;/ − 5</p>\n<p>−4 ≤ −2x &lt; 4 &nbsp;&nbsp;/ : (−2), obe nerovnosti sa otočia</p>\n<p>2 ≥ x &gt; −2, teda −2 &lt; x ≤ 2, <strong>x ∈ (−2; 2⟩</strong></p></div>\n<div class=\"warning\"><strong>Pozor:</strong> po delení záporným číslom sa nielen otočia znaky, ale aj prehodia krajné čísla. Výsledok prepíš tak, aby menšie číslo bolo vľavo.</div>",
        "remember": "Dvojitú nerovnosť upravuješ naraz vo všetkých troch častiach. Delenie záporným číslom otočí oba znaky a prehodí poradie."
      },
      {
        "id": "and-or",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Prienik alebo zjednotenie?",
        "html": "<p>Všimni si slovo, ktoré spája podmienky:</p>\n<div class=\"compare\">\n<div class=\"good\"><span class=\"mini-label\">„A ZÁROVEŇ“ → PRIENIK</span><p>sústava x &gt; −2 a x &lt; 3</p><p>jeden interval (−2; 3)</p><p>dvojitá nerovnosť −3 &lt; x − 1 &lt; 3 (to je |x − 1| &lt; 3)</p></div>\n<div class=\"good\"><span class=\"mini-label\">„ALEBO“ → ZJEDNOTENIE</span><p>x &lt; −2 alebo x &gt; 3</p><p>dva intervaly (−∞; −2) ∪ (3; ∞)</p><p>napr. |x − 1| &gt; 3</p></div>\n</div>\n<p>Sústava sa vždy číta ako „a“. Zjednotenie sa objavuje pri riešení |u| &gt; c a pri slove „alebo“ v zadaní.</p>"
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "sústava nerovníc",
        "question": "Riešením sústavy x > 1 a x ≤ 5 je množina:",
        "options": [
          "⟨1; 5)",
          "(−∞; 1) ∪ ⟨5; ∞)",
          "(1; 5⟩",
          "(1; 5)"
        ],
        "answer": 2,
        "correct": "Potrebujeme čísla väčšie ako 1 (1 nepatrí) a zároveň najviac 5 (5 patrí).",
        "hint": "Hľadáš čísla, ktoré spĺňajú obe podmienky. Ktoré krajné body patria?"
      },
      {
        "id": "c2",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "sústava nerovníc",
        "question": "Sústava x ≥ 4 a x < 2 má množinu riešení:",
        "options": [
          "⟨2; 4⟩",
          "ℝ",
          "∅",
          "(−∞; 2) ∪ ⟨4; ∞)"
        ],
        "answer": 2,
        "correct": "Číslo by muselo byť zároveň aspoň 4 a menšie ako 2, čo žiadne číslo nesplní. Prienik je prázdny.",
        "hint": "Nakresli si oba intervaly na číselnú os. Majú spoločný bod?"
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "sústava nerovníc",
        "question": "Riešením sústavy 2x − 1 ≥ 3 a x + 4 < 9 je množina:",
        "options": [
          "(2; 5⟩",
          "⟨2; 5)",
          "⟨1; 13)",
          "(−∞; 2⟩ ∪ (5; ∞)"
        ],
        "answer": 1,
        "correct": "Prvá nerovnica dá x ≥ 2, druhá x &lt; 5. Číslo 2 patrí, číslo 5 nepatrí.",
        "hint": "Vyrieš každú nerovnicu zvlášť a potom hľadaj prienik. Ktorý znak má x = 2?"
      },
      {
        "id": "c4",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "sústava nerovníc",
        "question": "Riešením sústavy −2x ≤ 6 a x − 1 < 4 je množina:",
        "options": [
          "(−∞; −3⟩",
          "⟨−3; 5)",
          "(−3; 5⟩",
          "(−∞; 5)"
        ],
        "answer": 1,
        "correct": "−2x ≤ 6 dá po delení číslom −2 (znak sa otočí) x ≥ −3, druhá nerovnica dá x &lt; 5. Prienik je ⟨−3; 5).",
        "hint": "Pri delení číslom −2 otoč znak. Potom prienik ⟨−3; ∞) so druhým riešením."
      },
      {
        "id": "c5",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "sústava nerovníc",
        "question": "Riešením sústavy x > 1 a x > 4 je množina:",
        "options": [
          "(1; ∞)",
          "(1; 4)",
          "∅",
          "(4; ∞)"
        ],
        "answer": 3,
        "correct": "Číslo musí byť väčšie ako 1 aj väčšie ako 4. Druhá podmienka je prísnejšia a zahŕňa prvú, takže platí x &gt; 4.",
        "hint": "Číslo 3 spĺňa prvú podmienku. Spĺňa aj druhú?"
      },
      {
        "id": "c6",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "sústava nerovníc",
        "question": "Riešením sústavy x + 3 < 1 a 2x − 1 > 5 je množina:",
        "options": [
          "(−∞; −2) ∪ (3; ∞)",
          "∅",
          "(−2; 3)",
          "ℝ"
        ],
        "answer": 1,
        "correct": "Prvá dá x &lt; −2, druhá x &gt; 3. Žiadne číslo nie je zároveň menšie ako −2 a väčšie ako 3.",
        "hint": "Vyrieš obe nerovnice a skús nájsť číslo, ktoré spĺňa obe. Zjednotenie by sa používalo pri slove „alebo“."
      },
      {
        "id": "c7",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "dvojitá nerovnosť",
        "question": "Riešením nerovnosti −3 < 2x + 1 ≤ 7 je množina:",
        "options": [
          "(−2; 3⟩",
          "⟨−2; 3)",
          "(−1; 3⟩",
          "(−2; 4⟩"
        ],
        "answer": 0,
        "correct": "Odčítaním 1 vo všetkých častiach dostaneme −4 &lt; 2x ≤ 6, delením 2 potom −2 &lt; x ≤ 3.",
        "hint": "Odčítaj 1 od všetkých troch častí a potom vydeľ všetky tri časti číslom 2."
      },
      {
        "id": "c8",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "dvojitá nerovnosť",
        "question": "Riešením nerovnosti 1 ≤ 5 − 2x < 9 je množina:",
        "options": [
          "⟨−2; 2)",
          "(−2; 2⟩",
          "⟨2; 5)",
          "(2; 4⟩"
        ],
        "answer": 1,
        "correct": "−4 ≤ −2x &lt; 4, po delení číslom −2 sa znaky otočia: 2 ≥ x &gt; −2, teda −2 &lt; x ≤ 2.",
        "hint": "Pri delení −2 sa otočia obe nerovnosti. Ktorý krajný bod patrí, ten, ktorý bol pri −2x = −4 alebo −2x = 4?"
      },
      {
        "id": "n-min",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "celé riešenia",
        "title": "Najmenšie celé riešenie",
        "prompt": "Aké je najmenšie celé číslo x, ktoré spĺňa sústavu 3x − 2 > 4 a 2x + 1 ≤ 15?",
        "validate": "exact",
        "answer": 3,
        "success": "Prvá dá x &gt; 2, druhá x ≤ 7. Riešenie je (2; 7⟩, najmenšie celé číslo je 3.",
        "hint": "Vyrieš obe nerovnice a pozri sa na ľavý krajný bod. Patrí do riešenia?",
        "reveal": "Správne je 3: 3 · 2 − 2 = 4 nie je väčšie ako 4, takže x = 2 nevyhovuje."
      },
      {
        "id": "n-max",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "celé riešenia",
        "title": "Najväčšie celé riešenie",
        "prompt": "Aké je najväčšie celé číslo x, ktoré spĺňa sústavu 2x + 1 < 9 a 3x − 1 ≥ 5?",
        "validate": "exact",
        "answer": 3,
        "success": "Prvá dá x &lt; 4, druhá x ≥ 2. Riešenie je ⟨2; 4), najväčšie celé číslo je 3, lebo 4 nepatrí.",
        "hint": "Vyrieš obe nerovnice. Patrí pravý krajný bod do riešenia?",
        "reveal": "Správne je 3: pre x = 4 vyjde 2 · 4 + 1 = 9, čo nie je menšie ako 9."
      },
      {
        "id": "n-cnt",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "celé riešenia",
        "title": "Počet celých riešení",
        "prompt": "Koľko celých čísel spĺňa nerovnosť −7 < 2x − 3 ≤ 5?",
        "validate": "exact",
        "answer": 6,
        "success": "−4 &lt; 2x ≤ 8, teda −2 &lt; x ≤ 4. Celé čísla sú −1, 0, 1, 2, 3, 4, teda šesť.",
        "hint": "Pripočítaj 3 ku všetkým častiam a vydeľ 2. Patria krajné body?",
        "reveal": "Správne je 6: z intervalu (−2; 4⟩ ide o čísla −1, 0, 1, 2, 3 a 4."
      },
      {
        "id": "n-len",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "dĺžka intervalu",
        "title": "Dĺžka intervalu riešení",
        "prompt": "Riešením sústavy 4 − x ≥ 1 a 2x + 5 > −3 je interval. Aká je jeho dĺžka?",
        "validate": "exact",
        "answer": 7,
        "success": "Prvá dá x ≤ 3, druhá 2x &gt; −8, teda x &gt; −4. Riešenie je (−4; 3⟩ s dĺžkou 3 − (−4) = 7.",
        "hint": "Vyrieš obe nerovnice. −x ≥ −3 po delení −1 otočí znak. Dĺžka = pravý − ľavý krajný bod.",
        "reveal": "Správne je 7: riešením je (−4; 3⟩."
      },
      {
        "id": "n-param",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "parameter",
        "title": "Sústava s parametrom",
        "prompt": "Pre ktoré najmenšie celé číslo c má sústava x > 3 a x < c aspoň jedno reálne riešenie?",
        "validate": "exact",
        "answer": 4,
        "success": "Riešenie (3; c) je neprázdne, len keď c &gt; 3. Najmenšie celé c je 4: potom (3; 4) obsahuje napr. 3,5.",
        "hint": "Interval (3; c) je neprázdny, keď c leží napravo od 3. Môže byť c = 3?",
        "reveal": "Správne je 4: pre c = 3 by išlo o x &gt; 3 a x &lt; 3, čo je ∅."
      },
      {
        "id": "sort-sol",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "prázdny prienik",
        "title": "Má sústava riešenie?",
        "question": "Rozhodni o každej sústave, či má aspoň jedno reálne riešenie.",
        "labels": [
          "Má riešenie",
          "Nemá riešenie (∅)"
        ],
        "items": [
          {
            "text": "x > 2 a x < 7",
            "answer": true,
            "why": "Riešením je (2; 7), napríklad x = 4."
          },
          {
            "text": "x > 5 a x < 5",
            "answer": false,
            "why": "Žiadne číslo nie je zároveň väčšie aj menšie ako 5."
          },
          {
            "text": "x ≥ 5 a x ≤ 5",
            "answer": true,
            "why": "Spĺňa ju práve x = 5, riešenie je {5}."
          },
          {
            "text": "x < −1 a x > 0",
            "answer": false,
            "why": "Intervaly (−∞; −1) a (0; ∞) sa neprekrývajú."
          },
          {
            "text": "x > 3 a x ≥ 3",
            "answer": true,
            "why": "Prísnejšia podmienka vyhráva, riešením je (3; ∞)."
          },
          {
            "text": "2x > 8 a x < 3",
            "answer": false,
            "why": "Prvá dá x > 4, druhá x < 3, spoločné číslo neexistuje."
          }
        ]
      },
      {
        "id": "match-sol",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "sústava nerovníc",
        "title": "Priraď sústave riešenie",
        "labels": [
          "(2; 6⟩",
          "⟨2; 6)",
          "(−∞; 2)",
          "(6; ∞)"
        ],
        "items": [
          {
            "text": "x > 2 a x ≤ 6",
            "answer": "(2; 6⟩"
          },
          {
            "text": "x ≥ 2 a x < 6",
            "answer": "⟨2; 6)"
          },
          {
            "text": "x < 2 a x < 6",
            "answer": "(−∞; 2)"
          },
          {
            "text": "x > 2 a x > 6",
            "answer": "(6; ∞)"
          }
        ]
      },
      {
        "id": "match-andor",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "prienik alebo zjednotenie",
        "title": "Prienik alebo zjednotenie?",
        "labels": [
          "Prienik (obe podmienky naraz)",
          "Zjednotenie (aspoň jedna podmienka)"
        ],
        "items": [
          {
            "text": "|x − 2| < 1",
            "answer": "Prienik (obe podmienky naraz)"
          },
          {
            "text": "|x − 2| > 1",
            "answer": "Zjednotenie (aspoň jedna podmienka)"
          },
          {
            "text": "|2x| ≤ 4",
            "answer": "Prienik (obe podmienky naraz)"
          },
          {
            "text": "|2x| ≥ 4",
            "answer": "Zjednotenie (aspoň jedna podmienka)"
          },
          {
            "text": "1 < x < 5",
            "answer": "Prienik (obe podmienky naraz)"
          },
          {
            "text": "x < 1 alebo x > 5",
            "answer": "Zjednotenie (aspoň jedna podmienka)"
          }
        ]
      },
      {
        "id": "hunt1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak riešil sústavu x + 1 > 3 a x − 2 < 5. Vyšlo mu x > 2 a x < 7. Napísal: „Riešenie je (−∞; 7) ∪ (2; ∞), teda ℝ.“ V čom je chyba?",
        "options": [
          "Ostré a neostré zátvorky: malo byť ⟨2; 7⟩.",
          "Pri sústave musia platiť obe podmienky naraz, preto treba vziať prienik, nie zjednotenie. Správne je (2; 7).",
          "Prvá nerovnica má riešenie x < 2.",
          "Žiak mal sústavu riešiť „alebo“ a výsledok je správny."
        ],
        "answer": 1,
        "correct": "Presne. Zjednotenie by pustilo aj x = 100, ale 100 − 2 = 98 nie je menšie ako 5. Pri sústave sa berie prienik.",
        "hint": "Dosaď do sústavy x = 100 a potom x = 4. Ktoré číslo ju spĺňa?"
      },
      {
        "id": "hunt2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak riešil −3 < 1 − 2x ≤ 5 takto: „−4 < −2x ≤ 4, vydelím −2 a dostanem −2 < x ≤ 2, riešenie (−2; 2⟩.“ V čom je chyba?",
        "options": [
          "Mal odčítať 1 iba od prostrednej časti.",
          "Pri delení číslom −2 sa mali otočiť znaky a prehodiť čísla. Správne je 2 > x ≥ −2, teda ⟨−2; 2).",
          "Správne riešenie je (−∞; −2⟩ ∪ (2; ∞).",
          "Chyba je len v zápise: malo byť ⟨−2; 2⟩."
        ],
        "answer": 1,
        "correct": "Správne. Po delení záporným číslom je −4 &lt; −2x ≤ 4 rovnocenné s 2 &gt; x ≥ −2. Skúška: x = −2 dá 1 + 4 = 5 ≤ 5 (patrí), x = 2 dá 1 − 4 = −3, nie je väčšie ako −3 (nepatrí).",
        "hint": "Dosaď x = −2 a x = 2 do pôvodnej nerovnosti a porovnaj s výsledkom žiaka."
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha na papier",
        "html": "<p>Odlož zariadenie. V zošite vyrieš s postupom, výsledok zapíš intervalom a vyznač na číselnej osi (každú nerovnicu na vlastnom riadku, prienik na poslednom):</p>\n<ol type=\"a\"><li>3x − 1 ≤ 8 &nbsp;a&nbsp; 2x + 5 ≥ 11</li><li>x + 2 &lt; 1 &nbsp;a&nbsp; 3 − x &lt; 2</li><li>−4 ≤ 5 − 3x &lt; 8</li></ol>\n<p>d) Pre ktoré c má sústava x ≥ 1 a x ≤ c práve jedno riešenie?</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: sústavy nerovníc",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Každú sústavu vyrieš v zošite s postupom a vyznač riešenie na číselnej osi. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "x > 2 a x ≤ 9",
            "answer": "Obe podmienky sú už vyriešené. Číslo musí byť väčšie ako 2 a najviac 9.<br><strong>Riešenie: (2; 9⟩</strong>"
          },
          {
            "level": "zaklad",
            "text": "2x − 4 > 0 a 5 − x > 1",
            "answer": "2x &gt; 4, x &gt; 2. −x &gt; −4, delíme −1 a otáčame: x &lt; 4.<br><strong>Riešenie: (2; 4)</strong>"
          },
          {
            "level": "zaklad",
            "text": "x + 3 ≥ 1 a 3x < 12",
            "answer": "x ≥ −2 a x &lt; 4.<br><strong>Riešenie: ⟨−2; 4)</strong>"
          },
          {
            "level": "zaklad",
            "text": "−x < 2 a x + 1 ≤ 6",
            "answer": "−x &lt; 2, delíme −1 a otáčame: x &gt; −2. x + 1 ≤ 6: x ≤ 5.<br><strong>Riešenie: (−2; 5⟩</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "4x − 3 ≤ 3x + 2 a 2x + 7 > x + 9",
            "answer": "Prvá: x ≤ 5. Druhá: x &gt; 2.<br><strong>Riešenie: (2; 5⟩</strong>"
          },
          {
            "level": "rozsirenie",
            "answer": "Prvá: x − 1 ≥ 2, x ≥ 3. Druhá: 2 − x &gt; −6, −x &gt; −8, x &lt; 8 (otočenie znaku).<br><strong>Riešenie: ⟨3; 8)</strong>",
            "html": "<span class=\"frac\"><span class=\"frac-num\">x − 1</span><span class=\"frac-den\">2</span></span> ≥ 1 &nbsp;a&nbsp; <span class=\"frac\"><span class=\"frac-num\">2 − x</span><span class=\"frac-den\">3</span></span> &gt; −2"
          },
          {
            "level": "rozsirenie",
            "text": "2 < 3x − 1 ≤ 11",
            "answer": "Pripočítame 1: 3 &lt; 3x ≤ 12, vydelíme 3: 1 &lt; x ≤ 4.<br><strong>Riešenie: (1; 4⟩</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "−4 ≤ 5 − 3x < 8",
            "answer": "Odčítame 5: −9 ≤ −3x &lt; 3, vydelíme −3 a otočíme obe nerovnosti: 3 ≥ x &gt; −1.<br><strong>Riešenie: (−1; 3⟩</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "x + 2 < 1 a 2x − 1 > 3",
            "answer": "Prvá: x &lt; −1. Druhá: x &gt; 2. Intervaly (−∞; −1) a (2; ∞) sa neprekrývajú.<br><strong>Riešenie: ∅</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Nájdi najmenšie a najväčšie celé riešenie a počet celých riešení sústavy 2x + 1 > −5 a 3x − 2 ≤ 10.",
            "answer": "Prvá: 2x &gt; −6, x &gt; −3. Druhá: 3x ≤ 12, x ≤ 4. Riešenie (−3; 4⟩. Najmenšie celé −2, najväčšie 4, spolu 7 celých čísel (−2, −1, 0, 1, 2, 3, 4).<br><strong>Riešenie: (−3; 4⟩</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Dvojnásobok čísla zväčšený o 3 je väčší ako 7 a zároveň polovica čísla je menšia ako 5. Aké môže byť toto číslo?",
            "answer": "2x + 3 &gt; 7, x &gt; 2. x : 2 &lt; 5, x &lt; 10.<br><strong>Riešenie: (2; 10)</strong>"
          },
          {
            "level": "bonus",
            "text": "|x − 2| < 3 a x ≥ 1",
            "answer": "Prvá nerovnica dá (−1; 5). Prienik s ⟨1; ∞) je ⟨1; 5).<br><strong>Riešenie: ⟨1; 5)</strong>"
          },
          {
            "level": "bonus",
            "text": "|x| > 2 a x < 5",
            "answer": "Prvá dá (−∞; −2) ∪ (2; ∞). Prienik s (−∞; 5) je (−∞; −2) ∪ (2; 5). Prienik sa rozdelí do oboch častí zjednotenia.<br><strong>Riešenie: (−∞; −2) ∪ (2; 5)</strong>"
          },
          {
            "level": "bonus",
            "text": "Pre ktoré reálne a má sústava x ≥ 2 a x < a práve jedno celé riešenie?",
            "answer": "Riešenie je ⟨2; a). Má obsahovať iba celé číslo 2, nie 3. Aby tam 2 patrilo, musí byť a &gt; 2. Aby tam 3 nepatrilo, musí byť a ≤ 3. Teda a ∈ (2; 3⟩.<br><strong>Riešenie: (2; 3⟩</strong>"
          }
        ]
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Prienik a zjednotenie",
        "prompt": "Vysvetli vlastnými slovami, prečo pri sústave nerovníc berieme prienik riešení, ale pri riešení |x| > 2 zjednotenie. Podľa akých slov v zadaní sa rozhodneš?",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> V sústave musí číslo splniť všetky nerovnice naraz („a zároveň“), preto ostanú len čísla, ktoré sú v riešeniach všetkých, teda prienik. Pri |x| &gt; 2 stačí, aby platila aspoň jedna z možností x &lt; −2 alebo x &gt; 2 („alebo“), preto riešenia spájame do zjednotenia. Rozhoduje, či zadanie hovorí „a zároveň“ alebo „alebo“."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "riešenie jednotlivých nerovníc sústavy",
          "prienik riešení a intervalový zápis",
          "prázdny prienik",
          "dvojitá nerovnosť m < ax + b < n",
          "rozlíšenie prieniku a zjednotenia"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka. Čo máš 🔴 alebo 🟡, si ešte raz prejdi v príkladoch 1 až 5."
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 5,
        "text": "Vyrieš sústavu 3x + 2 > −1 a x − 4 ≤ −1 a výsledok zapíš intervalom.",
        "answer": "3x &gt; −3, x &gt; −1. x ≤ 3.<br><strong>Riešenie: (−1; 3⟩</strong>"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 5,
        "text": "Vyrieš sústavu 5 − 2x ≥ 1 a x + 3 > 0 a výsledok zapíš intervalom.",
        "answer": "−2x ≥ −4, delíme −2 a otáčame: x ≤ 2. x &gt; −3.<br><strong>Riešenie: (−3; 2⟩</strong>"
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 4,
        "text": "Vyrieš dvojitú nerovnosť −5 < 2x + 3 < 9.",
        "answer": "Odčítame 3: −8 &lt; 2x &lt; 6, vydelíme 2: −4 &lt; x &lt; 3.<br><strong>Riešenie: (−4; 3)</strong>"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 5,
        "text": "Vyrieš dvojitú nerovnosť 7 ≥ 1 − 2x > −3.",
        "answer": "Odčítame 1: 6 ≥ −2x &gt; −4, vydelíme −2 a otočíme obe nerovnosti: −3 ≤ x &lt; 2.<br><strong>Riešenie: ⟨−3; 2)</strong>"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 5,
        "text": "Vyrieš sústavu 2x − 1 < 5 a 3x + 4 ≥ 13 a zapíš, čo vyšlo. Prečo je odpoveď správna, aj keď „nič nevyšlo“?",
        "answer": "x &lt; 3 a x ≥ 3. Intervaly (−∞; 3) a ⟨3; ∞) nemajú spoločné číslo, sústava nemá riešenie. Prázdna množina je správna odpoveď.<br><strong>Riešenie: ∅</strong>"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 6,
        "text": "Vyrieš sústavu |x − 1| ≤ 4 a |x + 1| > 2.",
        "answer": "|x − 1| ≤ 4 dá ⟨−3; 5⟩. |x + 1| &gt; 2 dá x &lt; −3 alebo x &gt; 1, teda (−∞; −3) ∪ (1; ∞). Prienik: bod −3 prvá množina obsahuje, druhá nie, preto ostane (1; 5⟩.<br><strong>Riešenie: (1; 5⟩</strong>"
      },
      {
        "id": "w7",
        "level": "bonus",
        "space": 5,
        "text": "Pre ktoré reálne a má sústava x ≥ 2 a x < a práve jedno celé riešenie?",
        "answer": "Riešenie je ⟨2; a). Má obsahovať celé číslo 2 (a &gt; 2), ale nie 3 (a ≤ 3).<br><strong>Riešenie: (2; 3⟩</strong>"
      }
    ]
  }
});
