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
      "zdôvodniť prostosť/neprostosť a monotónnosť z grafu",
      "rozpoznať párnosť priamo z grafu aj tam, kde je vizuálne klamlivá"
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
      "15 min analýza jedného grafu",
      "5 min galéria šiestich kontrastných grafov",
      "10 min samostatný graf na papieri",
      "5 min syntéza"
    ],
    "diagnostics": [
      "systematické čítanie",
      "nepodložené závery",
      "argumentácia",
      "párnosť odvodzovaná z optického tvaru grafu namiesto zo súmernosti podľa osi y"
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
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Z hodín 6 a 7 už poznáš pojmy <strong>D(f), H(f), párnosť/nepárnosť, monotónnosť, extrémy, prostosť</strong> a <strong>ohraničenosť</strong>.</p><p>Dnes ich všetky použiješ naraz — na jednom grafe.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "systematicky určiť vlastnosti funkcie z grafu",
          "zdôvodniť prostosť alebo neprostosť a monotónnosť"
        ]
      },
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
        "question": "Graf funkcie f prechádza (zľava doprava) bodmi [−4,1], [−3,3], [−2,4], [−1,3], [0,1], [1,−1], [2,−2], [3,−1], [4,2], spojenými lomenou čiarou. Aké sú D(f) a H(f) tejto funkcie?",
        "options": [
          "D=⟨−4;4⟩, H=⟨−4;4⟩",
          "D=⟨−2;4⟩, H=⟨−4;4⟩",
          "D=ℝ, H=ℝ",
          "D=⟨−4;4⟩, H=⟨−2;4⟩"
        ],
        "answer": 3,
        "correct": "Graf existuje pre x od −4 do 4 a jeho y-hodnoty siahajú od −2 do 4.",
        "hint": "D čítaj po osi x, H po osi y."
      },
      {
        "id": "ext",
        "type": "choice",
        "phase": "KROK 2",
        "skill": "extrémy",
        "question": "Graf funkcie f prechádza (zľava doprava) bodmi [−4,1], [−3,3], [−2,4], [−1,3], [0,1], [1,−1], [2,−2], [3,−1], [4,2], spojenými lomenou čiarou. Ktoré tvrdenie o jej extrémoch je správne?",
        "options": [
          "maximum je 4 a minimum −2",
          "minimum je 2",
          "maximum je −2",
          "graf nemá extrémy"
        ],
        "answer": 0,
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
            "text": "od x=−4 (y=1) po x=−2 (y=4)",
            "answer": true,
            "why": "Pri pohybe zľava doprava hodnoty rastú (z 1 na 4)."
          },
          {
            "text": "od x=−2 (y=4) po x=2 (y=−2)",
            "answer": false,
            "why": "Hodnoty na tomto úseku klesajú (zo 4 na −2)."
          },
          {
            "text": "od x=2 (y=−2) po x=4 (y=2)",
            "answer": true,
            "why": "Od minima pri x=2 hodnoty rastú (z −2 na 2)."
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
        "question": "Graf funkcie f prechádza (zľava doprava) bodmi [−4,1], [−3,3], [−2,4], [−1,3], [0,1], [1,−1], [2,−2], [3,−1], [4,2], spojenými lomenou čiarou. Je táto funkcia na celom svojom definičnom obore prostá?",
        "options": [
          "áno",
          "nie"
        ],
        "answer": 1,
        "correct": "Nie. Niektoré vodorovné priamky pretínajú graf viackrát — napríklad hodnota y=1 vzniká pri x=−4 aj pri x=0.",
        "hint": "Predstav si vodorovnú priamku."
      },
      {
        "id": "bounds",
        "type": "choice",
        "phase": "KROK 5",
        "skill": "ohraničenosť",
        "question": "Graf funkcie f prechádza (zľava doprava) bodmi [−4,1], [−3,3], [−2,4], [−1,3], [0,1], [1,−1], [2,−2], [3,−1], [4,2], spojenými lomenou čiarou. Ako je táto funkcia ohraničená?",
        "options": [
          "iba zhora",
          "zhora aj zdola",
          "iba zdola",
          "nie je ohraničená"
        ],
        "answer": 1,
        "correct": "Všetky hodnoty ležia medzi −2 a 4.",
        "hint": "Pozri na H(f)."
      },
      {
        "id": "workflow",
        "type": "explain",
        "phase": "ZHRNUTIE",
        "title": "Algoritmus čítania vlastností z grafu",
        "html": "<p><strong>1.</strong> D(f) podľa osi x. <strong>2.</strong> H(f) podľa osi y. <strong>3.</strong> rast/klesanie. <strong>4.</strong> maximum/minimum. <strong>5.</strong> symetria. <strong>6.</strong> prostosť. <strong>7.</strong> ohraničenosť.</p>",
        "remember": "Pri každej odpovedi sa vždy odkáž na konkrétnu vlastnosť grafu, nie iba napíš názov."
      },
      {
        "id": "argument",
        "type": "selfWrite",
        "phase": "ARGUMENTUJ",
        "title": "Zdôvodni neprostosť",
        "promptHtml": "Funkcia f prechádza (zľava doprava) bodmi [−4,1], [−3,3], [−2,4], [−1,3], [0,1], [1,−1], [2,−2], [3,−1], [4,2], spojenými lomenou čiarou. Vysvetli z týchto hodnôt, prečo funkcia nie je prostá.",
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
          "funkcia je rastúca",
          "funkcia nadobúda hodnotu 7",
          "funkcia je prostá"
        ],
        "answer": 2,
        "correct": "Hodnota 7 patrí do H(f), takže ju funkcia musí aspoň raz nadobudnúť. O ostatných vlastnostiach nemáme dosť informácií.",
        "hint": "Čo presne znamená, že 7 patrí do H(f)?"
      },

      {
        "id": "gallery",
        "type": "info",
        "phase": "GALÉRIA GRAFOV",
        "title": "Šesť grafov, šesť rôznych príbehov",
        "html": "<p>Tieto grafy sú zámerne odlišné — každý ukazuje inú kombináciu vlastností. Pri každom si v duchu over D(f), H(f), monotónnosť, extrémy, párnosť a ohraničenosť.</p><div class=\"graph-gallery\"><div class=\"graph-gallery-item\"><div class=\"graph-gallery-label\">Graf A</div><svg class=\"graph-gallery-plot\" viewBox=\"0 0 300 210\" role=\"img\" aria-label=\"Graf A\"><line x1=\"30.0\" y1=\"30\" x2=\"30.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"54.0\" y1=\"30\" x2=\"54.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"78.0\" y1=\"30\" x2=\"78.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"102.0\" y1=\"30\" x2=\"102.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"126.0\" y1=\"30\" x2=\"126.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"150.0\" y1=\"30\" x2=\"150.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"174.0\" y1=\"30\" x2=\"174.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"198.0\" y1=\"30\" x2=\"198.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"222.0\" y1=\"30\" x2=\"222.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"246.0\" y1=\"30\" x2=\"246.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"270.0\" y1=\"30\" x2=\"270.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"30\" y1=\"180.0\" x2=\"270\" y2=\"180.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"150.0\" x2=\"270\" y2=\"150.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"120.0\" x2=\"270\" y2=\"120.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"90.0\" x2=\"270\" y2=\"90.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"60.0\" x2=\"270\" y2=\"60.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"30.0\" x2=\"270\" y2=\"30.0\" class=\"plot-grid\"/><line x1=\"126.0\" y1=\"30\" x2=\"126.0\" y2=\"180\" class=\"plot-axis\"/><line x1=\"30\" y1=\"150.0\" x2=\"270\" y2=\"150.0\" class=\"plot-axis\"/><line x1=\"54.0\" y1=\"60.0\" x2=\"150.0\" y2=\"120.0\" class=\"plot-curve\"/><line x1=\"150.0\" y1=\"60.0\" x2=\"246.0\" y2=\"60.0\" class=\"plot-curve\"/><circle cx=\"54.0\" cy=\"60.0\" r=\"5\" class=\"plot-point\"/><circle cx=\"150.0\" cy=\"120.0\" r=\"5\" class=\"plot-point-open\"/><circle cx=\"150.0\" cy=\"60.0\" r=\"5\" class=\"plot-point\"/><circle cx=\"246.0\" cy=\"60.0\" r=\"5\" class=\"plot-point\"/><text x=\"30.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">-4</text><text x=\"54.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">-3</text><text x=\"78.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">-2</text><text x=\"102.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">-1</text><text x=\"126.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">0</text><text x=\"150.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">1</text><text x=\"174.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">2</text><text x=\"198.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">3</text><text x=\"222.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">4</text><text x=\"246.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">5</text><text x=\"270.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">6</text><text x=\"22\" y=\"184.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">-1</text><text x=\"22\" y=\"154.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">0</text><text x=\"22\" y=\"124.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">1</text><text x=\"22\" y=\"94.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">2</text><text x=\"22\" y=\"64.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">3</text><text x=\"22\" y=\"34.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">4</text></svg></div><div class=\"graph-gallery-item\"><div class=\"graph-gallery-label\">Graf B</div><svg class=\"graph-gallery-plot\" viewBox=\"0 0 300 210\" role=\"img\" aria-label=\"Graf B\"><line x1=\"30.0\" y1=\"30\" x2=\"30.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"60.0\" y1=\"30\" x2=\"60.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"90.0\" y1=\"30\" x2=\"90.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"120.0\" y1=\"30\" x2=\"120.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"150.0\" y1=\"30\" x2=\"150.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"180.0\" y1=\"30\" x2=\"180.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"210.0\" y1=\"30\" x2=\"210.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"240.0\" y1=\"30\" x2=\"240.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"270.0\" y1=\"30\" x2=\"270.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"30\" y1=\"180.0\" x2=\"270\" y2=\"180.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"155.0\" x2=\"270\" y2=\"155.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"130.0\" x2=\"270\" y2=\"130.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"105.0\" x2=\"270\" y2=\"105.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"80.0\" x2=\"270\" y2=\"80.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"55.0\" x2=\"270\" y2=\"55.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"30.0\" x2=\"270\" y2=\"30.0\" class=\"plot-grid\"/><line x1=\"150.0\" y1=\"30\" x2=\"150.0\" y2=\"180\" class=\"plot-axis\"/><line x1=\"30\" y1=\"105.0\" x2=\"270\" y2=\"105.0\" class=\"plot-axis\"/><polyline points=\"60.0,65.0 62.3,69.4 64.5,73.8 66.8,78.0 69.0,82.1 71.3,86.1 73.5,90.0 75.8,93.7 78.0,97.4 80.3,100.9 82.5,104.4 84.8,107.7 87.0,110.9 89.3,114.0 91.5,117.0 93.8,119.8 96.0,122.6 98.3,125.2 100.5,127.8 102.8,130.2 105.0,132.5 107.3,134.7 109.5,136.8 111.8,138.7 114.0,140.6 116.3,142.3 118.5,144.0 120.8,145.5 123.0,146.9 125.3,148.2 127.5,149.4 129.8,150.4 132.0,151.4 134.3,152.2 136.5,153.0 138.8,153.6 141.0,154.1 143.3,154.5 145.5,154.8 147.8,154.9 150.0,155.0 152.3,154.9 154.5,154.8 156.8,154.5 159.0,154.1 161.3,153.6 163.5,153.0 165.8,152.2 168.0,151.4 170.3,150.4 172.5,149.4 174.8,148.2 177.0,146.9 179.3,145.5 181.5,144.0 183.8,142.3 186.0,140.6 188.3,138.7 190.5,136.8 192.8,134.7 195.0,132.5 197.3,130.2 199.5,127.8 201.8,125.2 204.0,122.6 206.3,119.8 208.5,117.0 210.8,114.0 213.0,110.9 215.3,107.7 217.5,104.4 219.8,100.9 222.0,97.4 224.3,93.7 226.5,90.0 228.8,86.1 231.0,82.1 233.3,78.0 235.5,73.8 237.8,69.4 240.0,65.0\" class=\"plot-curve\"/><circle cx=\"60.0\" cy=\"65.0\" r=\"5\" class=\"plot-point\"/><circle cx=\"240.0\" cy=\"65.0\" r=\"5\" class=\"plot-point\"/><text x=\"30.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">-4</text><text x=\"60.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">-3</text><text x=\"90.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">-2</text><text x=\"120.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">-1</text><text x=\"150.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">0</text><text x=\"180.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">1</text><text x=\"210.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">2</text><text x=\"240.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">3</text><text x=\"270.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">4</text><text x=\"22\" y=\"184.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">-3</text><text x=\"22\" y=\"159.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">-2</text><text x=\"22\" y=\"134.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">-1</text><text x=\"22\" y=\"109.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">0</text><text x=\"22\" y=\"84.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">1</text><text x=\"22\" y=\"59.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">2</text><text x=\"22\" y=\"34.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">3</text></svg></div><div class=\"graph-gallery-item\"><div class=\"graph-gallery-label\">Graf C</div><svg class=\"graph-gallery-plot\" viewBox=\"0 0 300 210\" role=\"img\" aria-label=\"Graf C\"><line x1=\"30.0\" y1=\"30\" x2=\"30.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"54.0\" y1=\"30\" x2=\"54.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"78.0\" y1=\"30\" x2=\"78.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"102.0\" y1=\"30\" x2=\"102.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"126.0\" y1=\"30\" x2=\"126.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"150.0\" y1=\"30\" x2=\"150.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"174.0\" y1=\"30\" x2=\"174.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"198.0\" y1=\"30\" x2=\"198.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"222.0\" y1=\"30\" x2=\"222.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"246.0\" y1=\"30\" x2=\"246.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"270.0\" y1=\"30\" x2=\"270.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"30\" y1=\"180.0\" x2=\"270\" y2=\"180.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"155.0\" x2=\"270\" y2=\"155.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"130.0\" x2=\"270\" y2=\"130.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"105.0\" x2=\"270\" y2=\"105.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"80.0\" x2=\"270\" y2=\"80.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"55.0\" x2=\"270\" y2=\"55.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"30.0\" x2=\"270\" y2=\"30.0\" class=\"plot-grid\"/><line x1=\"102.0\" y1=\"30\" x2=\"102.0\" y2=\"180\" class=\"plot-axis\"/><line x1=\"30\" y1=\"130.0\" x2=\"270\" y2=\"130.0\" class=\"plot-axis\"/><line x1=\"54.0\" y1=\"130.0\" x2=\"126.0\" y2=\"55.0\" class=\"plot-curve\"/><line x1=\"126.0\" y1=\"55.0\" x2=\"198.0\" y2=\"55.0\" class=\"plot-curve\"/><line x1=\"198.0\" y1=\"55.0\" x2=\"246.0\" y2=\"155.0\" class=\"plot-curve\"/><circle cx=\"54.0\" cy=\"130.0\" r=\"5\" class=\"plot-point\"/><circle cx=\"246.0\" cy=\"155.0\" r=\"5\" class=\"plot-point\"/><text x=\"30.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">-3</text><text x=\"54.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">-2</text><text x=\"78.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">-1</text><text x=\"102.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">0</text><text x=\"126.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">1</text><text x=\"150.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">2</text><text x=\"174.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">3</text><text x=\"198.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">4</text><text x=\"222.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">5</text><text x=\"246.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">6</text><text x=\"270.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">7</text><text x=\"22\" y=\"184.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">-2</text><text x=\"22\" y=\"159.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">-1</text><text x=\"22\" y=\"134.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">0</text><text x=\"22\" y=\"109.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">1</text><text x=\"22\" y=\"84.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">2</text><text x=\"22\" y=\"59.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">3</text><text x=\"22\" y=\"34.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">4</text></svg></div><div class=\"graph-gallery-item\"><div class=\"graph-gallery-label\">Graf D</div><svg class=\"graph-gallery-plot\" viewBox=\"0 0 300 210\" role=\"img\" aria-label=\"Graf D\"><line x1=\"30.0\" y1=\"30\" x2=\"30.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"56.7\" y1=\"30\" x2=\"56.7\" y2=\"180\" class=\"plot-grid\"/><line x1=\"83.3\" y1=\"30\" x2=\"83.3\" y2=\"180\" class=\"plot-grid\"/><line x1=\"110.0\" y1=\"30\" x2=\"110.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"136.7\" y1=\"30\" x2=\"136.7\" y2=\"180\" class=\"plot-grid\"/><line x1=\"163.3\" y1=\"30\" x2=\"163.3\" y2=\"180\" class=\"plot-grid\"/><line x1=\"190.0\" y1=\"30\" x2=\"190.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"216.7\" y1=\"30\" x2=\"216.7\" y2=\"180\" class=\"plot-grid\"/><line x1=\"243.3\" y1=\"30\" x2=\"243.3\" y2=\"180\" class=\"plot-grid\"/><line x1=\"270.0\" y1=\"30\" x2=\"270.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"30\" y1=\"180.0\" x2=\"270\" y2=\"180.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"150.0\" x2=\"270\" y2=\"150.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"120.0\" x2=\"270\" y2=\"120.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"90.0\" x2=\"270\" y2=\"90.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"60.0\" x2=\"270\" y2=\"60.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"30.0\" x2=\"270\" y2=\"30.0\" class=\"plot-grid\"/><line x1=\"83.3\" y1=\"30\" x2=\"83.3\" y2=\"180\" class=\"plot-axis\"/><line x1=\"30\" y1=\"150.0\" x2=\"270\" y2=\"150.0\" class=\"plot-axis\"/><line x1=\"56.7\" y1=\"90.0\" x2=\"243.3\" y2=\"90.0\" class=\"plot-curve\"/><circle cx=\"56.7\" cy=\"90.0\" r=\"5\" class=\"plot-point\"/><circle cx=\"243.3\" cy=\"90.0\" r=\"5\" class=\"plot-point\"/><text x=\"30.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">-2</text><text x=\"56.7\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">-1</text><text x=\"83.3\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">0</text><text x=\"110.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">1</text><text x=\"136.7\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">2</text><text x=\"163.3\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">3</text><text x=\"190.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">4</text><text x=\"216.7\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">5</text><text x=\"243.3\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">6</text><text x=\"270.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">7</text><text x=\"22\" y=\"184.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">-1</text><text x=\"22\" y=\"154.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">0</text><text x=\"22\" y=\"124.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">1</text><text x=\"22\" y=\"94.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">2</text><text x=\"22\" y=\"64.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">3</text><text x=\"22\" y=\"34.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">4</text></svg></div><div class=\"graph-gallery-item\"><div class=\"graph-gallery-label\">Graf E</div><svg class=\"graph-gallery-plot\" viewBox=\"0 0 300 210\" role=\"img\" aria-label=\"Graf E\"><line x1=\"30.0\" y1=\"30\" x2=\"30.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"60.0\" y1=\"30\" x2=\"60.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"90.0\" y1=\"30\" x2=\"90.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"120.0\" y1=\"30\" x2=\"120.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"150.0\" y1=\"30\" x2=\"150.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"180.0\" y1=\"30\" x2=\"180.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"210.0\" y1=\"30\" x2=\"210.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"240.0\" y1=\"30\" x2=\"240.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"270.0\" y1=\"30\" x2=\"270.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"30\" y1=\"180.0\" x2=\"270\" y2=\"180.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"155.0\" x2=\"270\" y2=\"155.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"130.0\" x2=\"270\" y2=\"130.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"105.0\" x2=\"270\" y2=\"105.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"80.0\" x2=\"270\" y2=\"80.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"55.0\" x2=\"270\" y2=\"55.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"30.0\" x2=\"270\" y2=\"30.0\" class=\"plot-grid\"/><line x1=\"60.0\" y1=\"30\" x2=\"60.0\" y2=\"180\" class=\"plot-axis\"/><line x1=\"30\" y1=\"155.0\" x2=\"270\" y2=\"155.0\" class=\"plot-axis\"/><polyline points=\"78.0,30.2 79.8,41.5 81.6,51.0 83.4,59.0 85.2,65.8 87.0,71.7 88.8,76.9 90.6,81.5 92.4,85.6 94.2,89.3 96.0,92.5 97.8,95.5 99.6,98.2 101.4,100.7 103.2,102.9 105.0,105.0 106.8,106.9 108.6,108.7 110.4,110.4 112.2,111.9 114.0,113.3 115.8,114.7 117.6,116.0 119.4,117.1 121.2,118.2 123.0,119.3 124.8,120.3 126.6,121.2 128.4,122.1 130.2,123.0 132.0,123.8 133.8,124.5 135.6,125.2 137.4,125.9 139.2,126.6 141.0,127.2 142.8,127.8 144.6,128.4 146.4,129.0 148.2,129.5 150.0,130.0 151.8,130.5 153.6,131.0 155.4,131.4 157.2,131.9 159.0,132.3 160.8,132.7 162.6,133.1 164.4,133.5 166.2,133.8 168.0,134.2 169.8,134.5 171.6,134.8 173.4,135.2 175.2,135.5 177.0,135.8 178.8,136.1 180.6,136.3 182.4,136.6 184.2,136.9 186.0,137.1 187.8,137.4 189.6,137.6 191.4,137.9 193.2,138.1 195.0,138.3 196.8,138.6 198.6,138.8 200.4,139.0 202.2,139.2 204.0,139.4 205.8,139.6 207.6,139.8 209.4,139.9 211.2,140.1 213.0,140.3 214.8,140.5 216.6,140.6 218.4,140.8 220.2,141.0 222.0,141.1 223.8,141.3 225.6,141.4 227.4,141.6 229.2,141.7 231.0,141.8 232.8,142.0 234.6,142.1 236.4,142.2 238.2,142.4 240.0,142.5\" class=\"plot-curve\"/><circle cx=\"240.0\" cy=\"142.5\" r=\"5\" class=\"plot-point\"/><text x=\"30.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">-1</text><text x=\"60.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">0</text><text x=\"90.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">1</text><text x=\"120.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">2</text><text x=\"150.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">3</text><text x=\"180.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">4</text><text x=\"210.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">5</text><text x=\"240.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">6</text><text x=\"270.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">7</text><text x=\"22\" y=\"184.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">-1</text><text x=\"22\" y=\"159.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">0</text><text x=\"22\" y=\"134.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">1</text><text x=\"22\" y=\"109.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">2</text><text x=\"22\" y=\"84.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">3</text><text x=\"22\" y=\"59.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">4</text><text x=\"22\" y=\"34.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">5</text></svg></div><div class=\"graph-gallery-item\"><div class=\"graph-gallery-label\">Graf F</div><svg class=\"graph-gallery-plot\" viewBox=\"0 0 300 210\" role=\"img\" aria-label=\"Graf F\"><line x1=\"30.0\" y1=\"30\" x2=\"30.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"56.7\" y1=\"30\" x2=\"56.7\" y2=\"180\" class=\"plot-grid\"/><line x1=\"83.3\" y1=\"30\" x2=\"83.3\" y2=\"180\" class=\"plot-grid\"/><line x1=\"110.0\" y1=\"30\" x2=\"110.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"136.7\" y1=\"30\" x2=\"136.7\" y2=\"180\" class=\"plot-grid\"/><line x1=\"163.3\" y1=\"30\" x2=\"163.3\" y2=\"180\" class=\"plot-grid\"/><line x1=\"190.0\" y1=\"30\" x2=\"190.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"216.7\" y1=\"30\" x2=\"216.7\" y2=\"180\" class=\"plot-grid\"/><line x1=\"243.3\" y1=\"30\" x2=\"243.3\" y2=\"180\" class=\"plot-grid\"/><line x1=\"270.0\" y1=\"30\" x2=\"270.0\" y2=\"180\" class=\"plot-grid\"/><line x1=\"30\" y1=\"180.0\" x2=\"270\" y2=\"180.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"155.0\" x2=\"270\" y2=\"155.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"130.0\" x2=\"270\" y2=\"130.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"105.0\" x2=\"270\" y2=\"105.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"80.0\" x2=\"270\" y2=\"80.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"55.0\" x2=\"270\" y2=\"55.0\" class=\"plot-grid\"/><line x1=\"30\" y1=\"30.0\" x2=\"270\" y2=\"30.0\" class=\"plot-grid\"/><line x1=\"83.3\" y1=\"30\" x2=\"83.3\" y2=\"180\" class=\"plot-axis\"/><line x1=\"30\" y1=\"130.0\" x2=\"270\" y2=\"130.0\" class=\"plot-axis\"/><polyline points=\"56.7,162.2 59.0,156.9 61.3,151.7 63.7,146.7 66.0,141.8 68.3,137.1 70.7,132.4 73.0,128.0 75.3,123.6 77.7,119.4 80.0,115.3 82.3,111.3 84.7,107.5 87.0,103.8 89.3,100.3 91.7,96.9 94.0,93.6 96.3,90.4 98.7,87.4 101.0,84.5 103.3,81.8 105.7,79.2 108.0,76.7 110.3,74.4 112.7,72.1 115.0,70.1 117.3,68.1 119.7,66.3 122.0,64.6 124.3,63.1 126.7,61.7 129.0,60.4 131.3,59.3 133.7,58.3 136.0,57.4 138.3,56.7 140.7,56.1 143.0,55.6 145.3,55.3 147.7,55.1 150.0,55.0 152.3,55.1 154.7,55.3 157.0,55.6 159.3,56.1 161.7,56.7 164.0,57.4 166.3,58.3 168.7,59.3 171.0,60.4 173.3,61.7 175.7,63.1 178.0,64.6 180.3,66.3 182.7,68.1 185.0,70.1 187.3,72.1 189.7,74.4 192.0,76.7 194.3,79.2 196.7,81.8 199.0,84.5 201.3,87.4 203.7,90.4 206.0,93.6 208.3,96.9 210.7,100.3 213.0,103.8 215.3,107.5 217.7,111.3 220.0,115.3 222.3,119.4 224.7,123.6 227.0,128.0 229.3,132.4 231.7,137.1 234.0,141.8 236.3,146.7 238.7,151.7 241.0,156.9 243.3,162.2\" class=\"plot-curve\"/><circle cx=\"56.7\" cy=\"162.2\" r=\"5\" class=\"plot-point\"/><circle cx=\"243.3\" cy=\"162.2\" r=\"5\" class=\"plot-point\"/><text x=\"30.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">-2</text><text x=\"56.7\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">-1</text><text x=\"83.3\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">0</text><text x=\"110.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">1</text><text x=\"136.7\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">2</text><text x=\"163.3\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">3</text><text x=\"190.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">4</text><text x=\"216.7\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">5</text><text x=\"243.3\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">6</text><text x=\"270.0\" y=\"196\" text-anchor=\"middle\" class=\"plot-label\" font-size=\"11\">7</text><text x=\"22\" y=\"184.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">-2</text><text x=\"22\" y=\"159.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">-1</text><text x=\"22\" y=\"134.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">0</text><text x=\"22\" y=\"109.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">1</text><text x=\"22\" y=\"84.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">2</text><text x=\"22\" y=\"59.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">3</text><text x=\"22\" y=\"34.0\" text-anchor=\"end\" class=\"plot-label\" font-size=\"11\">4</text></svg></div></div><p>Diskusia: graf F opticky vyzerá súmerne, no jeho vrchol nie je na osi y — skús vysvetliť, prečo napriek tomu nie je párny.</p>"
      },
      {
        "id": "gallery-parity",
        "type": "choice",
        "phase": "PÁRNOSŤ Z GRAFU",
        "skill": "párnosť",
        "question": "Graf B z galérie má D(f)=⟨−3;3⟩ a jeho predpis je f(x) = 0,4x² − 2 (vrchol paraboly je v bode [0;−2], graf je súmerný podľa osi y). Je táto funkcia párna?",
        "options": ["Áno, je párna.", "Nie, je nepárna.", "Nie je ani párna, ani nepárna.", "Z grafu sa to nedá určiť."],
        "answer": 0,
        "correct": "Definičný obor ⟨−3;3⟩ je súmerný podľa 0 a graf je súmerný podľa osi y, teda f(−x)=f(x) pre každé x z D(f) — obe podmienky párnosti sú splnené.",
        "hint": "Over dve veci: je D(f) súmerný okolo 0? A je graf súmerný podľa osi y?"
      },
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
