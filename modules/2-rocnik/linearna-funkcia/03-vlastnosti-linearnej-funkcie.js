MathPlatform.registerModule({
  "id": "2-u01-h003",
  "teacher": {
    "placement": "2. ročník · Lineárna funkcia · Hodina 3 · Vlastnosti lineárnej funkcie",
    "prerequisites": [
      "hodiny 1–2: funkcia, f(x), predpis ax+b, graf",
      "jednoduchá lineárna rovnica zo ZŠ"
    ],
    "planContent": [
      "Téma a poradie sú prevzaté z aktuálneho tematického plánu 2. ročníka.",
      "Pri prvých dvoch tematických celkoch nie je v zdrojovom pláne samostatne vyplnený výkonový ani obsahový štandard; ciele sú didaktickým rozpracovaním názvu témy a nadväznosti hodín."
    ],
    "planPerformance": [
      "Nevymýšľame chýbajúci oficiálny výkonový štandard. Sledujeme primerané očakávané výkony uvedené v cieľoch modulu."
    ],
    "goals": [
      "určiť rastúcu, klesajúcu a konštantnú lineárnu funkciu",
      "interpretovať a ako smernicu",
      "určiť priesečníky s osami a nulový bod",
      "preniesť poznatky do jednoduchej maturitnej úlohy"
    ],
    "competencies": [
      "prepájanie slovného, tabuľkového, algebraického a grafického vyjadrenia",
      "presné matematické vyjadrovanie",
      "čítanie a interpretácia grafu",
      "zdôvodnenie odpovede na základe definície alebo grafu"
    ],
    "enrichment": [
      "Aktuálny tematický plán určuje obsah a poradie tejto hodiny; návrh maturitného štandardu sa používa iba ako metodické obohatenie.",
      "Návrh štandardu obohacuje tému argumentáciou o vlastnostiach funkcie z predpisu a grafu.",
      "Zbierka maturitných úloh bola preverená. Zaradená je originálna úloha 2013/9, lebo vyžaduje iba poznatky dostupné po tejto hodine."
    ],
    "flow": [
      "5 min grafy na tabuli",
      "15–18 min modul",
      "10 min zošit a ručné úlohy",
      "5 min maturitný transfer"
    ],
    "diagnostics": [
      "znamienko a",
      "nulový bod",
      "význam b",
      "transfer"
    ],
    "partialUse": [
      "Modul je možné použiť celý alebo vybrať iba objavovaciu, zošitovú či diagnostickú časť podľa priebehu hodiny."
    ]
  },
  "student": {
    "title": "Čítaj priamku",
    "subtitle": "Čo prezradia a a b",
    "intro": "Z predpisu a grafu lineárnej funkcie už dokážeš vyčítať smer, priesečníky aj nulový bod.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Z predchádzajúcich dvoch hodín už poznáš pojem <strong>funkcia</strong>, zápis <strong>f(x)</strong> a predpis lineárnej funkcie <strong>f(x) = ax + b</strong> aj jej graf — priamku.</p><p>Zo ZŠ vieš aj vyriešiť jednoduchú <strong>lineárnu rovnicu</strong>.</p><p>Dnes sa naučíme z čísel a a b vyčítať ďalšie vlastnosti priamky.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "rozlíšiť rastúcu, klesajúcu a konštantnú lineárnu funkciu podľa a",
          "nájsť priesečníky s osami a nulový bod",
          "použiť tieto poznatky v jednoduchej maturitnej úlohe"
        ]
      },
      {
        "id": "a-meaning",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Koeficient a a smer priamky",
        "html": "<p>V predpise <strong>f(x)=ax+b</strong> sa koeficient <strong>a</strong> často nazýva <strong>smernica</strong>.</p><ul><li>a &gt; 0 → funkcia je <strong>rastúca</strong>,</li><li>a &lt; 0 → funkcia je <strong>klesajúca</strong>,</li><li>a = 0 → funkcia je <strong>konštantná</strong>.</li></ul><p>Pri zvýšení x o 1 sa hodnota funkcie zmení o a.</p>",
        "remember": "znamienko a určuje, či priamka stúpa, klesá alebo je vodorovná."
      },
      {
        "id": "visual-up",
        "type": "coordinatePlot",
        "phase": "VIZUALIZÁCIA",
        "title": "Rastúca lineárna funkcia",
        "html": "<p>Graf <strong>f(x)=2x+1</strong> pri pohybe zľava doprava stúpa. Keď x zväčšíme o 1, f(x) sa zväčší o 2.</p>",
        "xMin": -3, "xMax": 4, "yMin": -5, "yMax": 9,
        "curves": [{ "fn": x => 2 * x + 1 }],
        "points": [{ "x": 0, "y": 1, "label": "b=1" }],
        "ariaLabel": "Graf rastúcej funkcie f(x) = 2x + 1"
      },
      {
        "id": "clean-a",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Toto si zapíš do zošita",
        "html": "<p><strong>TEÓRIA:</strong> Pre f(x)=ax+b: a&gt;0 rastúca, a&lt;0 klesajúca, a=0 konštantná.</p>"
      },
      {
        "id": "sign",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "monotónnosť",
        "stimulus": "g(x)=−3x+5",
        "question": "Aká je funkcia g?",
        "options": [
          "rastúca",
          "konštantná",
          "klesajúca",
          "nedá sa rozhodnúť"
        ],
        "answer": 2,
        "correct": "Koeficient a=−3 je záporný, preto je funkcia klesajúca.",
        "hint": "Sleduj znamienko čísla pri x."
      },
      {
        "id": "zero",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Priesečníky s osami a nulový bod",
        "html": "<div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Priesečník s osou y</div><p class=\"term-rule\">Už ho poznáme: pri x=0 je to bod [0;b].</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Nulový bod funkcie</div><p class=\"term-rule\">Hodnota x, pre ktorú f(x)=0. Graficky je to x-ová súradnica priesečníka grafu s osou x.</p></div></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Pre f(x)=2x−4 platí 2x−4=0, teda x=2.</p><p>Graf pretína os x v bode [2;0].</p></div>",
        "remember": "nulový bod hľadáme z podmienky f(x)=0."
      },
      {
        "id": "clean-b",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Toto si zapíš do zošita",
        "html": "<p><strong>TEÓRIA:</strong> Bod [0;b] je priesečník s osou y. Nulový bod spĺňa f(x)=0.</p><p><strong>PRÍKLAD:</strong> f(x)=−2x+6 je klesajúca, pretína os y v [0;6] a os x v [3;0].</p>"
      },
      {
        "id": "zero-check",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "nulový bod",
        "stimulus": "f(x)=−2x+6",
        "question": "Aký je nulový bod?",
        "options": [
          "−3",
          "0",
          "2",
          "3"
        ],
        "answer": 3,
        "correct": "−2x+6=0 ⇒ x=3.",
        "hint": "Hľadáš x, pri ktorom je výsledok 0."
      },
      {
        "id": "compare",
        "type": "coordinatePlot",
        "phase": "POROVNAJ",
        "title": "Čo vieme vyčítať už z predpisu",
        "html": "<div class=\"compare\"><div><strong>f(x)=2x+1</strong><br>a=2 → rastúca<br>b=1 → os y v [0;1]</div><div><strong>g(x)=−2x+1</strong><br>a=−2 → klesajúca<br>b=1 → os y v [0;1]</div></div>",
        "xMin": -3, "xMax": 4, "yMin": -7, "yMax": 9,
        "curves": [
          { "fn": x => 2 * x + 1, "label": "f(x)=2x+1" },
          { "fn": x => -2 * x + 1, "color": "#66766f", "label": "g(x)=−2x+1" }
        ],
        "points": [{ "x": 0, "y": 1, "label": "b=1" }],
        "ariaLabel": "Grafy funkcií f(x) = 2x + 1 a g(x) = −2x + 1, obe pretínajú os y v bode [0; 1]"
      },
      {
        "id": "matura",
        "type": "choice",
        "phase": "MATURITNÝ TRANSFER",
        "skill": "lineárna funkcia",
        "prompt": "Originálna maturitná úloha 2013 (MAT_8103, úloha 9), obsahovo už riešiteľná: graf lineárnej funkcie má smernicu 2 a prechádza bodom A[2;8].",
        "question": "V akej vzdialenosti od začiatku O[0;0] pretína graf os y?",
        "options": [
          "2",
          "4",
          "6",
          "8"
        ],
        "answer": 1,
        "correct": "Predpis má tvar y=2x+b. Z bodu [2;8]: 8=4+b, teda b=4. Priesečník s osou y je [0;4], jeho vzdialenosť od O je 4.",
        "hint": "Použi y=ax+b a dosaď súradnice bodu A."
      },

      {"id":"slope-change","type":"choice","phase":"INTERPRETUJ","skill":"smernica","stimulus":"f(x)=4x−7","question":"O koľko sa zmení f(x), keď x zväčšíme o 1?","options":["zväčší sa o 4","zmenší sa o 7","zväčší sa o 7","nezmení sa"],"answer":0,"correct":"Smernica a=4 znamená zmenu funkčnej hodnoty o +4 pri zvýšení x o 1.","hint":"Sleduj koeficient pri x."},
      {"id":"same-b","type":"choice","phase":"POROVNAJ","skill":"predpis","stimulus":"f(x)=3x+2, g(x)=−x+2","question":"Čo majú grafy spoločné?","options":["rovnakú smernicu","rovnaký priesečník s osou y","rovnaký nulový bod","sú rovnobežné"],"answer":1,"correct":"Obe majú b=2, preto obe prechádzajú bodom [0;2].","hint":"Čo znamená b?"},
      {"id":"zero-explain","type":"selfWrite","phase":"VYSVETLI","title":"Nulový bod nie je bod [0;b]","promptHtml":"Vysvetli rozdiel medzi <strong>nulovým bodom funkcie</strong> a <strong>priesečníkom s osou y</strong>.","model":"Nulový bod je hodnota x, pre ktorú f(x)=0, teda súvisí s priesečníkom s osou x. Priesečník s osou y získame pri x=0 a má tvar [0;b]."},
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Pri každej zručnosti označ, ako sa teraz cítiš.",
        "skills": [
          "určím rast/klesanie zo znamienka a",
          "nájdem priesečník s osou y",
          "nájdem nulový bod"
        ]
      }
    ]
  }
});
