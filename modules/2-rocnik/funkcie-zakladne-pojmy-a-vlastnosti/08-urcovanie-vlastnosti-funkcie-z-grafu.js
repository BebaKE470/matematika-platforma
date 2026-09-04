MathPlatform.registerModule({
  "id": "2-u02-h008",
  "teacher": {
    "placement": "2. ročník · Funkcie – základné pojmy a vlastnosti · Hodina 8 · Určovanie vlastností funkcie z grafu",
    "prerequisites": [
      "pojmy z hodín 6–7"
    ],
    "planContent": [
      "Téma a poradie sú prevzaté z aktuálneho tematického plánu 2. ročníka.",
      "Pri prvých dvoch tematických celkoch nie je v zdrojovom pláne samostatne vyplnený výkonový ani obsahový štandard; ciele sú didaktickým rozpracovaním názvu témy a nadväznosti hodín."
    ],
    "planPerformance": [
      "Nevymýšľame chýbajúci oficiálny výkonový štandard. Sledujeme primerané očakávané výkony uvedené v cieľoch modulu."
    ],
    "goals": [
      "systematicky určiť vlastnosti funkcie z grafu",
      "odlíšiť priamo čitateľný údaj od nepodloženého tvrdenia",
      "zdôvodniť prostosť/neprostosť a monotónnosť z grafu"
    ],
    "competencies": [
      "prepájanie slovného, tabuľkového, algebraického a grafického vyjadrenia",
      "presné matematické vyjadrovanie",
      "čítanie a interpretácia grafu",
      "zdôvodnenie odpovede na základe definície alebo grafu"
    ],
    "enrichment": [
      "Aktuálny tematický plán určuje obsah a poradie tejto hodiny; návrh maturitného štandardu sa používa iba ako metodické obohatenie.",
      "Návrh štandardu priamo zdôrazňuje argumentáciu o vlastnostiach funkcie z grafu a kritické posudzovanie tvrdení.",
      "Zbierka maturitných úloh bola preverená. V dostupných originálnych úlohách o vlastnostiach funkcií sa často objavujú typy funkcií, ktoré ešte neboli v tomto bode plánu systematicky prebraté; preto je zaradený maturitný formát bez predčasného obsahu."
    ],
    "flow": [
      "5 min retrieval pojmov",
      "20 min analýza jedného grafu",
      "10 min samostatný graf na papieri",
      "5 min syntéza"
    ],
    "diagnostics": [
      "systematické čítanie",
      "nepodložené závery",
      "argumentácia"
    ],
    "partialUse": [
      "Modul je možné použiť celý alebo vybrať iba objavovaciu, zošitovú či diagnostickú časť podľa priebehu hodiny."
    ]
  },
  "student": {
    "title": "Graf ako dôkaz",
    "subtitle": "Čítaj, nehádať",
    "intro": "Z grafu vieš vyčítať veľa – ale iba to, čo graf naozaj podporuje.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "graph",
        "type": "info",
        "phase": "ANALÝZA GRAFU",
        "title": "Jeden graf, veľa otázok",
        "html": "<p>Na nasledujúcom grafe budeme čítať vlastnosti systematicky. Najprv D(f) a H(f), potom monotónnosť, extrémy, symetriu, prostosť a ohraničenosť.</p><div class=\"coordinate-wrap\"><svg class=\"coordinate-plot\" viewBox=\"0 0 620 360\" role=\"img\"><line x1=\"45.0\" y1=\"45\" x2=\"45.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"111.2\" y1=\"45\" x2=\"111.2\" y2=\"315\" class=\"plot-grid\"/><line x1=\"177.5\" y1=\"45\" x2=\"177.5\" y2=\"315\" class=\"plot-grid\"/><line x1=\"243.8\" y1=\"45\" x2=\"243.8\" y2=\"315\" class=\"plot-grid\"/><line x1=\"310.0\" y1=\"45\" x2=\"310.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"376.2\" y1=\"45\" x2=\"376.2\" y2=\"315\" class=\"plot-grid\"/><line x1=\"442.5\" y1=\"45\" x2=\"442.5\" y2=\"315\" class=\"plot-grid\"/><line x1=\"508.8\" y1=\"45\" x2=\"508.8\" y2=\"315\" class=\"plot-grid\"/><line x1=\"575.0\" y1=\"45\" x2=\"575.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"45\" y1=\"315.0\" x2=\"575\" y2=\"315.0\" class=\"plot-grid\"/><line x1=\"45\" y1=\"281.2\" x2=\"575\" y2=\"281.2\" class=\"plot-grid\"/><line x1=\"45\" y1=\"247.5\" x2=\"575\" y2=\"247.5\" class=\"plot-grid\"/><line x1=\"45\" y1=\"213.8\" x2=\"575\" y2=\"213.8\" class=\"plot-grid\"/><line x1=\"45\" y1=\"180.0\" x2=\"575\" y2=\"180.0\" class=\"plot-grid\"/><line x1=\"45\" y1=\"146.2\" x2=\"575\" y2=\"146.2\" class=\"plot-grid\"/><line x1=\"45\" y1=\"112.5\" x2=\"575\" y2=\"112.5\" class=\"plot-grid\"/><line x1=\"45\" y1=\"78.8\" x2=\"575\" y2=\"78.8\" class=\"plot-grid\"/><line x1=\"45\" y1=\"45.0\" x2=\"575\" y2=\"45.0\" class=\"plot-grid\"/><line x1=\"310.0\" y1=\"45\" x2=\"310.0\" y2=\"315\" class=\"plot-axis\"/><line x1=\"45\" y1=\"213.8\" x2=\"575\" y2=\"213.8\" class=\"plot-axis\"/><text x=\"45.0\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">-4</text><text x=\"111.2\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">-3</text><text x=\"177.5\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">-2</text><text x=\"243.8\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">-1</text><text x=\"376.2\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">1</text><text x=\"442.5\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">2</text><text x=\"508.8\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">3</text><text x=\"575.0\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">4</text><text x=\"35\" y=\"319.0\" text-anchor=\"end\" class=\"plot-label\">-3</text><text x=\"35\" y=\"285.2\" text-anchor=\"end\" class=\"plot-label\">-2</text><text x=\"35\" y=\"251.5\" text-anchor=\"end\" class=\"plot-label\">-1</text><text x=\"35\" y=\"184.0\" text-anchor=\"end\" class=\"plot-label\">1</text><text x=\"35\" y=\"150.2\" text-anchor=\"end\" class=\"plot-label\">2</text><text x=\"35\" y=\"116.5\" text-anchor=\"end\" class=\"plot-label\">3</text><text x=\"35\" y=\"82.8\" text-anchor=\"end\" class=\"plot-label\">4</text><text x=\"35\" y=\"49.0\" text-anchor=\"end\" class=\"plot-label\">5</text><polyline points=\"45.0,180.0 111.2,112.5 177.5,78.8 243.8,112.5 310.0,180.0 376.2,247.5 442.5,281.2 508.8,247.5 575.0,146.2\" fill=\"none\" stroke=\"#173d35\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"177.5\" cy=\"78.8\" r=\"6\" fill=\"#173d35\"/><text x=\"186.5\" y=\"68.8\" class=\"plot-point-label\">A</text><circle cx=\"442.5\" cy=\"281.2\" r=\"6\" fill=\"#173d35\"/><text x=\"451.5\" y=\"271.2\" class=\"plot-point-label\">B</text><text x=\"589\" y=\"205.8\" class=\"plot-axis-name\">x</text><text x=\"319.0\" y=\"33\" class=\"plot-axis-name\">y</text></svg></div>"
      },
      {
        "id": "dh",
        "type": "choice",
        "phase": "KROK 1",
        "skill": "D a H",
        "question": "Aké sú D(f) a H(f) zobrazeného grafu?",
        "options": [
          "D=⟨−4;4⟩, H=⟨−2;4⟩",
          "D=⟨−2;4⟩, H=⟨−4;4⟩",
          "D=ℝ, H=ℝ",
          "D=⟨−4;4⟩, H=⟨−4;4⟩"
        ],
        "answer": 0,
        "correct": "Graf existuje pre x od −4 do 4 a jeho y-hodnoty siahajú od −2 do 4.",
        "hint": "D čítaj po osi x, H po osi y."
      },
      {
        "id": "ext",
        "type": "choice",
        "phase": "KROK 2",
        "skill": "extrémy",
        "question": "Ktoré tvrdenie je správne?",
        "options": [
          "maximum je −2",
          "minimum je 2",
          "maximum je 4 a minimum −2",
          "graf nemá extrémy"
        ],
        "answer": 2,
        "correct": "Najvyššia funkčná hodnota je 4 a najnižšia −2.",
        "hint": "Hľadaj najvyšší a najnižší bod grafu a čítaj ich y-ové súradnice."
      },
      {
        "id": "mono",
        "type": "sortChoice",
        "phase": "KROK 3",
        "skill": "monotónnosť",
        "title": "Rastie alebo klesá na úseku?",
        "items": [
          {
            "text": "od x=−4 po x=−2",
            "answer": true,
            "why": "Pri pohybe zľava doprava hodnoty rastú."
          },
          {
            "text": "od x=−2 po x=2",
            "answer": false,
            "why": "Hodnoty na tomto úseku klesajú."
          },
          {
            "text": "od x=2 po x=4",
            "answer": true,
            "why": "Od minima pri x=2 hodnoty rastú."
          }
        ],
        "labels": [
          "RASTIE",
          "KLESÁ"
        ]
      },
      {
        "id": "inject",
        "type": "choice",
        "phase": "KROK 4",
        "skill": "prostosť",
        "question": "Je táto funkcia na celom zobrazenom D(f) prostá?",
        "options": [
          "áno",
          "nie"
        ],
        "answer": 1,
        "correct": "Nie. Niektoré vodorovné priamky pretínajú graf viackrát, teda rovnaká hodnota y vzniká pre viac vstupov.",
        "hint": "Predstav si vodorovnú priamku."
      },
      {
        "id": "bounds",
        "type": "choice",
        "phase": "KROK 5",
        "skill": "ohraničenosť",
        "question": "Ako je funkcia na zobrazenom D(f) ohraničená?",
        "options": [
          "iba zhora",
          "iba zdola",
          "zhora aj zdola",
          "nie je ohraničená"
        ],
        "answer": 2,
        "correct": "Všetky hodnoty ležia medzi −2 a 4.",
        "hint": "Pozri na H(f)."
      },
      {
        "id": "workflow",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Algoritmus čítania vlastností z grafu",
        "html": "<p><strong>1.</strong> D(f) podľa osi x. <strong>2.</strong> H(f) podľa osi y. <strong>3.</strong> rast/klesanie. <strong>4.</strong> maximum/minimum. <strong>5.</strong> symetria. <strong>6.</strong> prostosť. <strong>7.</strong> ohraničenosť.</p>",
        "model": "Pri každej odpovedi sa snaž odkázať na konkrétnu vlastnosť grafu, nie iba napísať názov."
      },
      {
        "id": "argument",
        "type": "selfWrite",
        "phase": "ARGUMENTUJ",
        "title": "Zdôvodni neprostosť",
        "prompt": "Vysvetli z grafu, prečo funkcia nie je prostá.",
        "model": "Existuje vodorovná priamka, ktorá pretína graf vo viac ako jednom bode. Preto existujú rôzne vstupy s rovnakou funkčnou hodnotou a funkcia nie je prostá."
      },
      {
        "id": "matura-format",
        "type": "choice",
        "phase": "MATURITNÝ FORMÁT",
        "skill": "graf",
        "prompt": "Úloha má testový formát maturity, ale používa iba pojmy, ktoré už poznáš.",
        "question": "Ak graf funkcie má D(f)=⟨−3;5⟩ a H(f)=⟨1;7⟩, ktoré tvrdenie musí platiť?",
        "options": [
          "f(0)=1",
          "funkcia nadobúda hodnotu 7",
          "funkcia je rastúca",
          "funkcia je prostá"
        ],
        "answer": 1,
        "correct": "Hodnota 7 patrí do H(f), takže ju funkcia musí aspoň raz nadobudnúť. O ostatných vlastnostiach nemáme dosť informácií.",
        "hint": "Čo presne znamená, že 7 patrí do H(f)?"
      },

      {"id":"read-order","type":"choice","phase":"STRATÉGIA","skill":"graf","question":"Čo je rozumné urobiť ako prvé pri systematickom čítaní vlastností z grafu?","options":["Odhadnúť predpis za každú cenu.","Určiť, pre ktoré x graf existuje a aké y dosahuje.","Hneď hľadať párnosť.","Vypočítať diskriminant."],"answer":1,"correct":"Najprv D(f) a H(f) vytvoria rámec, v ktorom potom skúmame ďalšie vlastnosti.","hint":"Začni od rozsahu grafu."},
      {"id":"horizontal-test","type":"choice","phase":"OVER PROSTOSŤ","skill":"prostosť","question":"Vodorovná priamka pretne graf v troch rôznych bodoch. Čo môžeme povedať?","options":["Funkcia je prostá.","Funkcia nie je prostá.","Funkcia je nepárna.","Funkcia nemá definičný obor."],"answer":1,"correct":"Rovnaká hodnota y patrí trom rôznym vstupom, preto funkcia nie je prostá.","hint":"Prostosť = rôzne vstupy majú rôzne výstupy."},
      {"id":"graph-claim","type":"selfWrite","phase":"ARGUMENTUJ","title":"Tvrdenie podopri grafom","promptHtml":"Napíš, čo musíš na grafe vidieť, aby si mohol tvrdiť, že funkcia má na skúmanom intervale <strong>minimum</strong>.","model":"Musím vidieť najnižšiu funkčnú hodnotu, ktorú graf na danom intervale skutočne dosiahne. Nestačí iba to, že sa k nej graf približuje."},
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Pri každej zručnosti označ, ako sa teraz cítiš.",
        "skills": [
          "viem systematicky čítať vlastnosti z grafu",
          "viem odlíšiť, čo z grafu vyplýva a čo nie",
          "viem odpoveď zdôvodniť"
        ]
      }
    ]
  }
});
