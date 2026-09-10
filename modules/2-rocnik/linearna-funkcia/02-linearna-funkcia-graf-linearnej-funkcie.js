MathPlatform.registerModule({
  "id": "2-u01-h002",
  "teacher": {
    "placement": "2. ročník · Lineárna funkcia · Hodina 2 · Lineárna funkcia, graf lineárnej funkcie",
    "prerequisites": [
      "pojem funkcie a f(x) z hodiny 1",
      "súradnicová sústava",
      "dosadzovanie"
    ],
    "planContent": [
      "Téma a poradie sú prevzaté z aktuálneho tematického plánu 2. ročníka.",
      "Pri prvých dvoch tematických celkoch nie je v zdrojovom pláne samostatne vyplnený výkonový ani obsahový štandard; ciele sú didaktickým rozpracovaním názvu témy a nadväznosti hodín."
    ],
    "planPerformance": [
      "Nevymýšľame chýbajúci oficiálny výkonový štandard. Sledujeme primerané očakávané výkony uvedené v cieľoch modulu."
    ],
    "goals": [
      "rozpoznať tvar f(x)=ax+b",
      "zostrojiť graf z tabuľky bodov",
      "vysvetliť úlohu koeficientov a a b"
    ],
    "competencies": [
      "prepájanie slovného, tabuľkového, algebraického a grafického vyjadrenia",
      "presné matematické vyjadrovanie",
      "čítanie a interpretácia grafu",
      "zdôvodnenie odpovede na základe definície alebo grafu"
    ],
    "enrichment": [
      "Aktuálny tematický plán určuje obsah a poradie tejto hodiny; návrh maturitného štandardu sa používa iba ako metodické obohatenie.",
      "Návrh štandardu podporuje prepájanie predpisu, tabuľky a grafu a argumentáciu na základe reprezentácie."
    ],
    "flow": [
      "5 min opakovanie funkcie",
      "15–15–18 min modul",
      "10 min ručná konštrukcia grafu",
      "5 min syntéza"
    ],
    "diagnostics": [
      "rozpoznanie a,b",
      "bod na grafe",
      "zostrojenie priamky"
    ],
    "partialUse": [
      "Modul je možné použiť celý alebo vybrať iba objavovaciu, zošitovú či diagnostickú časť podľa priebehu hodiny."
    ]
  },
  "student": {
    "title": "Priamka z predpisu",
    "subtitle": "Od vzorca ku grafu",
    "intro": "Dnes zavedieš lineárnu funkciu a uvidíš, ako sa jej predpis mení na priamku.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "recall",
        "type": "choice",
        "phase": "OPAKUJ",
        "skill": "funkcia",
        "question": "Čo musí platiť pre funkciu?",
        "options": [
          "Každý vstup má práve jeden výstup.",
          "Každý výstup má práve jeden vstup.",
          "Všetky výstupy musia byť rôzne.",
          "Graf musí byť priamka."
        ],
        "answer": 0,
        "correct": "Toto je základná podmienka funkcie.",
        "hint": "Spomeň si na vstup a výstup."
      },
      {
        "id": "linear-intro",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Lineárna funkcia",
        "html": "<p>Funkciu s predpisom <strong>f(x)=ax+b</strong>, kde a a b sú reálne čísla, nazývame <strong>lineárna funkcia</strong>.</p><p><strong>a</strong> je koeficient pri x. Určuje smer a strmosť priamky. <strong>b</strong> je hodnota f(0), teda miesto, kde graf pretína os y.</p>",
        "remember": "graf lineárnej funkcie je priamka (pri a=0 vodorovná priamka)."
      },
      {
        "id": "coeff",
        "type": "choice",
        "phase": "ROZPOZNAJ",
        "skill": "predpis",
        "stimulus": "f(x) = −2x + 3",
        "question": "Aké sú koeficienty a a b?",
        "options": [
          "a=−2, b=0",
          "a=2, b=3",
          "a=3, b=−2",
          "a=−2, b=3"
        ],
        "answer": 3,
        "correct": "Číslo pri x je a=−2 a samostatný člen je b=3.",
        "hint": "Porovnaj s tvarom ax+b."
      },
      {
        "id": "graph-how",
        "type": "info",
        "phase": "VIZUALIZÁCIA",
        "title": "Ako vznikne graf",
        "html": "<p>Pre <strong>f(x)=x−1</strong> vypočítame niekoľko hodnôt a body [x; f(x)] zakreslíme. Keďže ide o lineárnu funkciu, ležia na jednej priamke.</p><div class=\"coordinate-wrap\"><svg class=\"coordinate-plot\" viewBox=\"0 0 620 360\" role=\"img\"><line x1=\"45.0\" y1=\"45\" x2=\"45.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"98.0\" y1=\"45\" x2=\"98.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"151.0\" y1=\"45\" x2=\"151.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"204.0\" y1=\"45\" x2=\"204.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"257.0\" y1=\"45\" x2=\"257.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"310.0\" y1=\"45\" x2=\"310.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"363.0\" y1=\"45\" x2=\"363.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"416.0\" y1=\"45\" x2=\"416.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"469.0\" y1=\"45\" x2=\"469.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"522.0\" y1=\"45\" x2=\"522.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"575.0\" y1=\"45\" x2=\"575.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"45\" y1=\"315.0\" x2=\"575\" y2=\"315.0\" class=\"plot-grid\"/><line x1=\"45\" y1=\"290.5\" x2=\"575\" y2=\"290.5\" class=\"plot-grid\"/><line x1=\"45\" y1=\"265.9\" x2=\"575\" y2=\"265.9\" class=\"plot-grid\"/><line x1=\"45\" y1=\"241.4\" x2=\"575\" y2=\"241.4\" class=\"plot-grid\"/><line x1=\"45\" y1=\"216.8\" x2=\"575\" y2=\"216.8\" class=\"plot-grid\"/><line x1=\"45\" y1=\"192.3\" x2=\"575\" y2=\"192.3\" class=\"plot-grid\"/><line x1=\"45\" y1=\"167.7\" x2=\"575\" y2=\"167.7\" class=\"plot-grid\"/><line x1=\"45\" y1=\"143.2\" x2=\"575\" y2=\"143.2\" class=\"plot-grid\"/><line x1=\"45\" y1=\"118.6\" x2=\"575\" y2=\"118.6\" class=\"plot-grid\"/><line x1=\"45\" y1=\"94.1\" x2=\"575\" y2=\"94.1\" class=\"plot-grid\"/><line x1=\"45\" y1=\"69.5\" x2=\"575\" y2=\"69.5\" class=\"plot-grid\"/><line x1=\"45\" y1=\"45.0\" x2=\"575\" y2=\"45.0\" class=\"plot-grid\"/><line x1=\"257.0\" y1=\"45\" x2=\"257.0\" y2=\"315\" class=\"plot-axis\"/><line x1=\"45\" y1=\"192.3\" x2=\"575\" y2=\"192.3\" class=\"plot-axis\"/><text x=\"45.0\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">-4</text><text x=\"98.0\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">-3</text><text x=\"151.0\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">-2</text><text x=\"204.0\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">-1</text><text x=\"310.0\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">1</text><text x=\"363.0\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">2</text><text x=\"416.0\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">3</text><text x=\"469.0\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">4</text><text x=\"522.0\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">5</text><text x=\"575.0\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">6</text><text x=\"35\" y=\"319.0\" text-anchor=\"end\" class=\"plot-label\">-5</text><text x=\"35\" y=\"294.5\" text-anchor=\"end\" class=\"plot-label\">-4</text><text x=\"35\" y=\"269.9\" text-anchor=\"end\" class=\"plot-label\">-3</text><text x=\"35\" y=\"245.4\" text-anchor=\"end\" class=\"plot-label\">-2</text><text x=\"35\" y=\"220.8\" text-anchor=\"end\" class=\"plot-label\">-1</text><text x=\"35\" y=\"171.7\" text-anchor=\"end\" class=\"plot-label\">1</text><text x=\"35\" y=\"147.2\" text-anchor=\"end\" class=\"plot-label\">2</text><text x=\"35\" y=\"122.6\" text-anchor=\"end\" class=\"plot-label\">3</text><text x=\"35\" y=\"98.1\" text-anchor=\"end\" class=\"plot-label\">4</text><text x=\"35\" y=\"73.5\" text-anchor=\"end\" class=\"plot-label\">5</text><text x=\"35\" y=\"49.0\" text-anchor=\"end\" class=\"plot-label\">6</text><polyline points=\"45.0,315.0 575.0,69.5\" fill=\"none\" stroke=\"#173d35\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"257.0\" cy=\"216.8\" r=\"6\" fill=\"#173d35\"/><text x=\"266.0\" y=\"206.8\" class=\"plot-point-label\">[0; −1]</text><circle cx=\"363.0\" cy=\"167.7\" r=\"6\" fill=\"#173d35\"/><text x=\"372.0\" y=\"157.7\" class=\"plot-point-label\">[2; 1]</text><text x=\"589\" y=\"184.3\" class=\"plot-axis-name\">x</text><text x=\"266.0\" y=\"33\" class=\"plot-axis-name\">y</text></svg></div><p class=\"keyidea\">Na určenie priamky stačia dva rôzne body, ale tretí bod je dobrá kontrola výpočtu.</p>"
      },
      {
        // Zdroj: zbierka úloh, 5.1.1–5.1.4 (výpočet funkčnej hodnoty).
        // Pri 5.1.1 a 5.1.2 je jedna zo zadaných hodnôt x na fotke skutočne
        // nečitateľná (zakrytá tieňom pri chrbte knihy) — vynechaná, nie
        // vymyslená. Presný počet desatinných miest v 5.1.3 nebol na fotke
        // čitateľný, preto bez konkrétneho čísla.
        "id": "priklady-hodnoty",
        "type": "taskList",
        "phase": "VYPOČÍTAJ",
        "skill": "funkčná hodnota",
        "title": "Vypočítaj funkčné hodnoty",
        "html": "<p class=\"muted\">Dosaď dané x do predpisu a vypočítaj funkčnú hodnotu. Odfajkni si úlohu, keď máš výpočet hotový.</p>",
        "items": [
          { "text": "f: y = −x + 1, x ∈ R. Vypočítaj f(−3), f(1), f(18)." },
          { "text": "f: y = 11x + 3, x ∈ R. Vypočítaj f(−2,3), f(3,31), f(0,001), f(−111,01)." },
          { "text": "f: y = −3,2x + 2,1. Vypočítaj približné hodnoty f(−24,08), f(√2), f(−1 + 2√3), f(0,1π); výsledky zaokrúhli na desatinné miesta." },
          { "text": "f: y = 2x − 5. Vypočítaj f(1½), f(−3/8), f(−2 5/16)." }
        ]
      },
      {
        "id": "point",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "graf",
        "prompt": "Funkcia je f(x)=x−1.",
        "question": "Ktorý bod patrí na jej graf?",
        "options": [
          "[2; 1]",
          "[2; 3]",
          "[1; 2]",
          "[0; 1]"
        ],
        "answer": 0,
        "correct": "f(2)=2−1=1, preto [2;1] patrí na graf.",
        "hint": "Dosadíš x-ovú súradnicu do predpisu a porovnáš y."
      },
      {
        // Zdroj: zbierka úloh, 5.1.5, 5.1.6, 5.1.9 (overovanie, či bod patrí
        // na graf funkcie).
        "id": "priklady-body",
        "type": "taskList",
        "phase": "OVER GRAF",
        "skill": "graf",
        "title": "Patrí bod na graf?",
        "html": "<p class=\"muted\">Over dosadením, či bod naozaj patrí na graf danej funkcie. Odfajkni si úlohu, keď máš overené.</p>",
        "items": [
          { "text": "Patrí bod [−2; −3] na graf f: y = x − 1?" },
          { "text": "Patrí bod [2; −5] na graf g: y = 1 − 3x?" },
          { "text": "Patrí bod [¼; 2] na graf h: y = 4x + 1?" },
          { "text": "Patrí bod [−1⅔; −11] na graf k: y = −x/6 − 1?" },
          { "text": "Patrí bod [−2; −1] na graf f: y = (1 + 3x)/5?" },
          { "text": "Patrí bod [−3,6; 1,3] na graf g: y = 1 − (x + 2)/3?" },
          { "text": "f: y = −0,1x + 3,18, x ∈ ⟨−5, 10⟩ a g: y = −7x − 0,2, x ∈ ⟨−1,1; 1,2⟩. Rozhodni, ktoré z bodov A[1; 6,8], B[2,3; 15,9], C[10; 2,18], D[0; −0,2], E[15,03; 2,6771], F[31,8; 0] ležia na grafe f a ktoré na grafe g." }
        ]
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Zostroj graf ručne",
        "html": "<p>Pre <strong>g(x)=−2x+4</strong> si zvoľ aspoň tri hodnoty x, vypočítaj g(x), zapíš body a zostroj graf v zošite.</p>",
        "model": "Jedna možnosť: [0;4], [1;2], [2;0]. Všetky tri body ležia na jednej priamke."
      },
      {
        "id": "explain-b",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "title": "Čo znamená b?",
        "promptHtml": "Vysvetli vlastnými slovami, prečo pri funkcii <strong>f(x)=ax+b</strong> graf pretína os y v bode <strong>[0;b]</strong>.",
        "model": "Na osi y je x=0. Po dosadení dostaneme f(0)=a·0+b=b, preto graf obsahuje bod [0;b]."
      },

      {"id":"build-table","type":"choice","phase":"VYPOČÍTAJ","skill":"graf","stimulus":"g(x)=−x+2","question":"Ktorá trojica bodov patrí na graf?","options":["[0;−1], [1;0], [2;1]","[0;2], [1;1], [2;0]","[0;2], [1;2], [2;2]","[0;0], [1;1], [2;2]"],"answer":1,"correct":"g(0)=2, g(1)=1 a g(2)=0.","hint":"Dosadzuj postupne 0, 1 a 2."},
      {"id":"point-test","type":"sortChoice","phase":"OVER GRAF","skill":"graf","title":"Patrí bod na graf f(x)=2x−1?","items":[{"text":"[0;−1]","answer":true,"why":"f(0)=−1."},{"text":"[2;3]","answer":true,"why":"f(2)=4−1=3."},{"text":"[1;2]","answer":false,"why":"f(1)=1, nie 2."},{"text":"[−1;−3]","answer":true,"why":"f(−1)=−2−1=−3."}],"labels":["PATRÍ","NEPATRÍ"]},
      {"id":"why-line","type":"selfWrite","phase":"ARGUMENTUJ","title":"Ako overíš bod?","promptHtml":"Napíš presný postup, ako bez obrázka overíš, či bod <strong>[x₀;y₀]</strong> patrí na graf funkcie zadanej predpisom.","model":"Do predpisu dosadím x₀. Ak vypočítaná funkčná hodnota je y₀, bod na graf patrí; ak nie, nepatrí."},
      {
        "id": "clean",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Lineárna funkcia a jej graf",
        "html": "<p><strong>TEÓRIA:</strong> Lineárna funkcia má predpis f(x)=ax+b. Jej grafom je priamka. Číslo b je f(0), takže graf pretína os y v bode [0;b].</p>",
        "model": "<strong>POSTUP:</strong> zvolím x → vypočítam f(x) → zapíšem body [x;f(x)] → zostrojím priamku."
      },
      {
        // Zdroj: zbierka úloh, 5.1.10 a 5.1.11 (Narysujte grafy lineárnych
        // funkcií) — prevzatá je iba časť „zostroj graf" (u 5.1.11 vrátane
        // zadaného definičného oboru, ktorý graf priamo obmedzuje); časť
        // úlohy, kde treba definičný obor/obor hodnôt/monotónnosť/
        // ohraničenosť samostatne URČIŤ, je z neskoršej témy (Funkcie –
        // základné pojmy a vlastnosti), tu sa nepoužíva (rule 2).
        "id": "priklady-graf",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "graf",
        "title": "Grafy lineárnych funkcií",
        "html": "<p class=\"muted\">Ku každej funkcii zostroj jej graf do zošita – zvoľ si aspoň tri hodnoty x (v danom definičnom obore), vypočítaj y, zapíš body [x; y] a spoj ich priamkou (alebo úsečkou, ak je x obmedzené). Odfajkni si úlohu, keď máš graf hotový.</p>",
        "items": [
          { "text": "f: y = x + 2, x ∈ R" },
          { "text": "f: y = 2x − 1, x ∈ R" },
          { "text": "f: y = 3 − 2x, x ∈ R" },
          { "text": "f: y = 4x + 3, x ∈ R" },
          { "text": "f: y = (x − 2)/4, x ∈ R" },
          { "text": "f: y = 0,5 − 2,5x, x ∈ R" },
          { "text": "f: y = x − 3, x ∈ ⟨−2, 4⟩" },
          { "text": "f: y = 4 − x, x ∈ ⟨−5, 6⟩" },
          { "text": "f: y = −2x + 4, x ∈ ⟨0, 2⟩" },
          { "text": "f: y = 0,4x + 0,2, x ∈ ⟨−1, 5⟩" },
          { "text": "f: y = (x + 6)/3, x ∈ ⟨−3, ∞)" },
          { "text": "f: y = 3/5 − x/2, x ∈ (−∞, 10⟩" }
        ]
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Pri každej zručnosti označ, ako sa teraz cítiš.",
        "skills": [
          "rozpoznám lineárnu funkciu",
          "viem zostrojiť jej graf z predpisu",
          "viem vysvetliť význam koeficientu b"
        ]
      }
    ]
  }
});
