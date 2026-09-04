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
        "id": "a-meaning",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Koeficient a a smer priamky",
        "html": "<p>V predpise <strong>f(x)=ax+b</strong> sa koeficient <strong>a</strong> často nazýva <strong>smernica</strong>.</p><ul><li>a &gt; 0 → funkcia je <strong>rastúca</strong>,</li><li>a &lt; 0 → funkcia je <strong>klesajúca</strong>,</li><li>a = 0 → funkcia je <strong>konštantná</strong>.</li></ul><p>Pri zvýšení x o 1 sa hodnota funkcie zmení o a.</p>",
        "remember": "znamienko a určuje, či priamka stúpa, klesá alebo je vodorovná."
      },
      {
        "id": "visual-up",
        "type": "info",
        "phase": "VIZUALIZÁCIA",
        "title": "Rastúca lineárna funkcia",
        "html": "<p>Graf <strong>f(x)=2x+1</strong> pri pohybe zľava doprava stúpa. Keď x zväčšíme o 1, f(x) sa zväčší o 2.</p><div class=\"coordinate-wrap\"><svg class=\"coordinate-plot\" viewBox=\"0 0 620 360\" role=\"img\"><line x1=\"45.0\" y1=\"45\" x2=\"45.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"120.7\" y1=\"45\" x2=\"120.7\" y2=\"315\" class=\"plot-grid\"/><line x1=\"196.4\" y1=\"45\" x2=\"196.4\" y2=\"315\" class=\"plot-grid\"/><line x1=\"272.1\" y1=\"45\" x2=\"272.1\" y2=\"315\" class=\"plot-grid\"/><line x1=\"347.9\" y1=\"45\" x2=\"347.9\" y2=\"315\" class=\"plot-grid\"/><line x1=\"423.6\" y1=\"45\" x2=\"423.6\" y2=\"315\" class=\"plot-grid\"/><line x1=\"499.3\" y1=\"45\" x2=\"499.3\" y2=\"315\" class=\"plot-grid\"/><line x1=\"575.0\" y1=\"45\" x2=\"575.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"45\" y1=\"315.0\" x2=\"575\" y2=\"315.0\" class=\"plot-grid\"/><line x1=\"45\" y1=\"295.7\" x2=\"575\" y2=\"295.7\" class=\"plot-grid\"/><line x1=\"45\" y1=\"276.4\" x2=\"575\" y2=\"276.4\" class=\"plot-grid\"/><line x1=\"45\" y1=\"257.1\" x2=\"575\" y2=\"257.1\" class=\"plot-grid\"/><line x1=\"45\" y1=\"237.9\" x2=\"575\" y2=\"237.9\" class=\"plot-grid\"/><line x1=\"45\" y1=\"218.6\" x2=\"575\" y2=\"218.6\" class=\"plot-grid\"/><line x1=\"45\" y1=\"199.3\" x2=\"575\" y2=\"199.3\" class=\"plot-grid\"/><line x1=\"45\" y1=\"180.0\" x2=\"575\" y2=\"180.0\" class=\"plot-grid\"/><line x1=\"45\" y1=\"160.7\" x2=\"575\" y2=\"160.7\" class=\"plot-grid\"/><line x1=\"45\" y1=\"141.4\" x2=\"575\" y2=\"141.4\" class=\"plot-grid\"/><line x1=\"45\" y1=\"122.1\" x2=\"575\" y2=\"122.1\" class=\"plot-grid\"/><line x1=\"45\" y1=\"102.9\" x2=\"575\" y2=\"102.9\" class=\"plot-grid\"/><line x1=\"45\" y1=\"83.6\" x2=\"575\" y2=\"83.6\" class=\"plot-grid\"/><line x1=\"45\" y1=\"64.3\" x2=\"575\" y2=\"64.3\" class=\"plot-grid\"/><line x1=\"45\" y1=\"45.0\" x2=\"575\" y2=\"45.0\" class=\"plot-grid\"/><line x1=\"272.1\" y1=\"45\" x2=\"272.1\" y2=\"315\" class=\"plot-axis\"/><line x1=\"45\" y1=\"218.6\" x2=\"575\" y2=\"218.6\" class=\"plot-axis\"/><text x=\"45.0\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">-3</text><text x=\"120.7\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">-2</text><text x=\"196.4\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">-1</text><text x=\"347.9\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">1</text><text x=\"423.6\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">2</text><text x=\"499.3\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">3</text><text x=\"575.0\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">4</text><text x=\"35\" y=\"319.0\" text-anchor=\"end\" class=\"plot-label\">-5</text><text x=\"35\" y=\"299.7\" text-anchor=\"end\" class=\"plot-label\">-4</text><text x=\"35\" y=\"280.4\" text-anchor=\"end\" class=\"plot-label\">-3</text><text x=\"35\" y=\"261.1\" text-anchor=\"end\" class=\"plot-label\">-2</text><text x=\"35\" y=\"241.9\" text-anchor=\"end\" class=\"plot-label\">-1</text><text x=\"35\" y=\"203.3\" text-anchor=\"end\" class=\"plot-label\">1</text><text x=\"35\" y=\"184.0\" text-anchor=\"end\" class=\"plot-label\">2</text><text x=\"35\" y=\"164.7\" text-anchor=\"end\" class=\"plot-label\">3</text><text x=\"35\" y=\"145.4\" text-anchor=\"end\" class=\"plot-label\">4</text><text x=\"35\" y=\"126.1\" text-anchor=\"end\" class=\"plot-label\">5</text><text x=\"35\" y=\"106.9\" text-anchor=\"end\" class=\"plot-label\">6</text><text x=\"35\" y=\"87.6\" text-anchor=\"end\" class=\"plot-label\">7</text><text x=\"35\" y=\"68.3\" text-anchor=\"end\" class=\"plot-label\">8</text><text x=\"35\" y=\"49.0\" text-anchor=\"end\" class=\"plot-label\">9</text><polyline points=\"45.0,315.0 575.0,45.0\" fill=\"none\" stroke=\"#173d35\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"272.1\" cy=\"199.3\" r=\"6\" fill=\"#173d35\"/><text x=\"281.1\" y=\"189.3\" class=\"plot-point-label\">b=1</text><text x=\"589\" y=\"210.6\" class=\"plot-axis-name\">x</text><text x=\"281.1\" y=\"33\" class=\"plot-axis-name\">y</text></svg></div>"
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
          "klesajúca",
          "konštantná",
          "nedá sa rozhodnúť"
        ],
        "answer": 1,
        "correct": "Koeficient a=−3 je záporný, preto je funkcia klesajúca.",
        "hint": "Sleduj znamienko čísla pri x."
      },
      {
        "id": "zero",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Priesečníky s osami a nulový bod",
        "html": "<p>Priesečník s osou y už poznáme: pri x=0 je bod <strong>[0;b]</strong>.</p><p><strong>Nulový bod funkcie</strong> je hodnota x, pre ktorú <strong>f(x)=0</strong>. Graficky je to x-ová súradnica priesečníka grafu s osou x.</p><p>Pre f(x)=2x−4 platí 2x−4=0, teda x=2. Graf pretína os x v bode [2;0].</p>",
        "remember": "nulový bod hľadáme z podmienky f(x)=0."
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
        "type": "info",
        "phase": "POROVNAJ",
        "title": "Čo vieme vyčítať už z predpisu",
        "html": "<div class=\"compare\"><div><strong>f(x)=2x+1</strong><br>a=2 → rastúca<br>b=1 → os y v [0;1]</div><div><strong>g(x)=−2x+1</strong><br>a=−2 → klesajúca<br>b=1 → os y v [0;1]</div></div><div class=\"coordinate-wrap\"><svg class=\"coordinate-plot\" viewBox=\"0 0 620 360\" role=\"img\"><line x1=\"45.0\" y1=\"45\" x2=\"45.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"120.7\" y1=\"45\" x2=\"120.7\" y2=\"315\" class=\"plot-grid\"/><line x1=\"196.4\" y1=\"45\" x2=\"196.4\" y2=\"315\" class=\"plot-grid\"/><line x1=\"272.1\" y1=\"45\" x2=\"272.1\" y2=\"315\" class=\"plot-grid\"/><line x1=\"347.9\" y1=\"45\" x2=\"347.9\" y2=\"315\" class=\"plot-grid\"/><line x1=\"423.6\" y1=\"45\" x2=\"423.6\" y2=\"315\" class=\"plot-grid\"/><line x1=\"499.3\" y1=\"45\" x2=\"499.3\" y2=\"315\" class=\"plot-grid\"/><line x1=\"575.0\" y1=\"45\" x2=\"575.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"45\" y1=\"315.0\" x2=\"575\" y2=\"315.0\" class=\"plot-grid\"/><line x1=\"45\" y1=\"295.7\" x2=\"575\" y2=\"295.7\" class=\"plot-grid\"/><line x1=\"45\" y1=\"276.4\" x2=\"575\" y2=\"276.4\" class=\"plot-grid\"/><line x1=\"45\" y1=\"257.1\" x2=\"575\" y2=\"257.1\" class=\"plot-grid\"/><line x1=\"45\" y1=\"237.9\" x2=\"575\" y2=\"237.9\" class=\"plot-grid\"/><line x1=\"45\" y1=\"218.6\" x2=\"575\" y2=\"218.6\" class=\"plot-grid\"/><line x1=\"45\" y1=\"199.3\" x2=\"575\" y2=\"199.3\" class=\"plot-grid\"/><line x1=\"45\" y1=\"180.0\" x2=\"575\" y2=\"180.0\" class=\"plot-grid\"/><line x1=\"45\" y1=\"160.7\" x2=\"575\" y2=\"160.7\" class=\"plot-grid\"/><line x1=\"45\" y1=\"141.4\" x2=\"575\" y2=\"141.4\" class=\"plot-grid\"/><line x1=\"45\" y1=\"122.1\" x2=\"575\" y2=\"122.1\" class=\"plot-grid\"/><line x1=\"45\" y1=\"102.9\" x2=\"575\" y2=\"102.9\" class=\"plot-grid\"/><line x1=\"45\" y1=\"83.6\" x2=\"575\" y2=\"83.6\" class=\"plot-grid\"/><line x1=\"45\" y1=\"64.3\" x2=\"575\" y2=\"64.3\" class=\"plot-grid\"/><line x1=\"45\" y1=\"45.0\" x2=\"575\" y2=\"45.0\" class=\"plot-grid\"/><line x1=\"272.1\" y1=\"45\" x2=\"272.1\" y2=\"315\" class=\"plot-axis\"/><line x1=\"45\" y1=\"180.0\" x2=\"575\" y2=\"180.0\" class=\"plot-axis\"/><text x=\"45.0\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">-3</text><text x=\"120.7\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">-2</text><text x=\"196.4\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">-1</text><text x=\"347.9\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">1</text><text x=\"423.6\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">2</text><text x=\"499.3\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">3</text><text x=\"575.0\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">4</text><text x=\"35\" y=\"319.0\" text-anchor=\"end\" class=\"plot-label\">-7</text><text x=\"35\" y=\"299.7\" text-anchor=\"end\" class=\"plot-label\">-6</text><text x=\"35\" y=\"280.4\" text-anchor=\"end\" class=\"plot-label\">-5</text><text x=\"35\" y=\"261.1\" text-anchor=\"end\" class=\"plot-label\">-4</text><text x=\"35\" y=\"241.9\" text-anchor=\"end\" class=\"plot-label\">-3</text><text x=\"35\" y=\"222.6\" text-anchor=\"end\" class=\"plot-label\">-2</text><text x=\"35\" y=\"203.3\" text-anchor=\"end\" class=\"plot-label\">-1</text><text x=\"35\" y=\"164.7\" text-anchor=\"end\" class=\"plot-label\">1</text><text x=\"35\" y=\"145.4\" text-anchor=\"end\" class=\"plot-label\">2</text><text x=\"35\" y=\"126.1\" text-anchor=\"end\" class=\"plot-label\">3</text><text x=\"35\" y=\"106.9\" text-anchor=\"end\" class=\"plot-label\">4</text><text x=\"35\" y=\"87.6\" text-anchor=\"end\" class=\"plot-label\">5</text><text x=\"35\" y=\"68.3\" text-anchor=\"end\" class=\"plot-label\">6</text><text x=\"35\" y=\"49.0\" text-anchor=\"end\" class=\"plot-label\">7</text><polyline points=\"45.0,45.0 575.0,315.0\" fill=\"none\" stroke=\"#173d35\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"272.1\" cy=\"160.7\" r=\"6\" fill=\"#173d35\"/><text x=\"281.1\" y=\"150.7\" class=\"plot-point-label\">b=1</text><text x=\"589\" y=\"172.0\" class=\"plot-axis-name\">x</text><text x=\"281.1\" y=\"33\" class=\"plot-axis-name\">y</text></svg></div>"
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

      {"id":"slope-change","type":"choice","phase":"INTERPRETUJ","skill":"smernica","stimulus":"f(x)=4x−7","question":"O koľko sa zmení f(x), keď x zväčšíme o 1?","options":["zmenší sa o 7","zväčší sa o 4","zväčší sa o 7","nezmení sa"],"answer":1,"correct":"Smernica a=4 znamená zmenu funkčnej hodnoty o +4 pri zvýšení x o 1.","hint":"Sleduj koeficient pri x."},
      {"id":"same-b","type":"choice","phase":"POROVNAJ","skill":"predpis","stimulus":"f(x)=3x+2, g(x)=−x+2","question":"Čo majú grafy spoločné?","options":["rovnakú smernicu","rovnaký nulový bod","rovnaký priesečník s osou y","sú rovnobežné"],"answer":2,"correct":"Obe majú b=2, preto obe prechádzajú bodom [0;2].","hint":"Čo znamená b?"},
      {"id":"zero-explain","type":"selfWrite","phase":"VYSVETLI","title":"Nulový bod nie je bod [0;b]","promptHtml":"Vysvetli rozdiel medzi <strong>nulovým bodom funkcie</strong> a <strong>priesečníkom s osou y</strong>.","model":"Nulový bod je hodnota x, pre ktorú f(x)=0, teda súvisí s priesečníkom s osou x. Priesečník s osou y získame pri x=0 a má tvar [0;b]."},
      {
        "id": "clean",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Vlastnosti lineárnej funkcie",
        "html": "<p><strong>TEÓRIA:</strong> Pre f(x)=ax+b: a&gt;0 rastúca, a&lt;0 klesajúca, a=0 konštantná. Bod [0;b] je priesečník s osou y. Nulový bod spĺňa f(x)=0.</p>",
        "model": "<strong>PRÍKLAD:</strong> f(x)=−2x+6 je klesajúca, pretína os y v [0;6] a os x v [3;0]."
      },
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
