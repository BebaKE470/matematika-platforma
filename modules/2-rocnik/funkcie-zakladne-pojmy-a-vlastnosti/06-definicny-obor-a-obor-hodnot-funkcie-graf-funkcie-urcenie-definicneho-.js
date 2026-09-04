MathPlatform.registerModule({
  "id": "2-u02-h006",
  "teacher": {
    "placement": "2. ročník · Funkcie – základné pojmy a vlastnosti · Hodina 6 · Definičný obor a obor hodnôt, graf funkcie",
    "prerequisites": [
      "pojem funkcie a grafu",
      "intervaly z 1. ročníka",
      "súradnicová sústava"
    ],
    "planContent": [
      "Téma a poradie sú prevzaté z aktuálneho tematického plánu 2. ročníka.",
      "Pri prvých dvoch tematických celkoch nie je v zdrojovom pláne samostatne vyplnený výkonový ani obsahový štandard; ciele sú didaktickým rozpracovaním názvu témy a nadväznosti hodín."
    ],
    "planPerformance": [
      "Nevymýšľame chýbajúci oficiálny výkonový štandard. Sledujeme primerané očakávané výkony uvedené v cieľoch modulu."
    ],
    "goals": [
      "zaviesť a správne čítať D(f) a H(f)",
      "určiť D(f) a H(f) z grafu",
      "rozlišovať vstup x a funkčnú hodnotu y=f(x)"
    ],
    "competencies": [
      "prepájanie slovného, tabuľkového, algebraického a grafického vyjadrenia",
      "presné matematické vyjadrovanie",
      "čítanie a interpretácia grafu",
      "zdôvodnenie odpovede na základe definície alebo grafu"
    ],
    "enrichment": [
      "Aktuálny tematický plán určuje obsah a poradie tejto hodiny; návrh maturitného štandardu sa používa iba ako metodické obohatenie.",
      "Návrh štandardu explicitne pracuje s definičným oborom, oborom hodnôt a čítaním týchto vlastností z grafu."
    ],
    "flow": [
      "5 min pripomenutie grafu",
      "15–18 min modul",
      "10 min zošit",
      "5 min spoločné čítanie grafu"
    ],
    "diagnostics": [
      "D verzus H",
      "projekcia grafu na osi",
      "intervalový zápis"
    ],
    "partialUse": [
      "Modul je možné použiť celý alebo vybrať iba objavovaciu, zošitovú či diagnostickú časť podľa priebehu hodiny."
    ]
  },
  "student": {
    "title": "Graf má svoje hranice",
    "subtitle": "D(f) a H(f)",
    "intro": "Dnes presne pomenuješ, ktoré vstupy funkcia pripúšťa a ktoré výstupy dosahuje.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "idea",
        "type": "explain",
        "phase": "NOVÉ POJMY",
        "title": "Ktoré vstupy sú dovolené a ktoré výstupy vzniknú?",
        "html": "<p><strong>Definičný obor</strong> je množina všetkých dovolených vstupov funkcie. Označujeme ho <strong>D(f)</strong>.</p><p><strong>Obor hodnôt</strong> je množina všetkých výstupov, ktoré funkcia skutočne nadobúda. Označujeme ho <strong>H(f)</strong>.</p><div class=\"chain\"><span>x ∈ D(f)</span><b>→</b><span>f(x) ∈ H(f)</span></div>",
        "remember": "D(f) čítame na osi x, H(f) na osi y."
      },
      {
        "id": "language",
        "type": "choice",
        "phase": "ČÍTAJ ZÁPIS",
        "skill": "D a H",
        "stimulus": "D(f)=⟨−3;4⟩",
        "question": "Čo tento zápis hovorí?",
        "options": [
          "funkčné hodnoty sú od −3 do 4",
          "dovolené vstupy x sú od −3 do 4 vrátane",
          "graf pretína osi v −3 a 4",
          "funkcia má iba dve hodnoty"
        ],
        "answer": 1,
        "correct": "Definičný obor opisuje možné x-ové vstupy.",
        "hint": "D ako definičný = vstupy."
      },
      {
        "id": "graph",
        "type": "info",
        "phase": "VIZUALIZÁCIA",
        "title": "Čítanie D(f) a H(f) z grafu",
        "html": "<p>Pri čítaní <strong>D(f)</strong> premietaj graf na os x. Pri čítaní <strong>H(f)</strong> premietaj graf na os y.</p><div class=\"coordinate-wrap\"><svg class=\"coordinate-plot\" viewBox=\"0 0 620 360\" role=\"img\"><line x1=\"45.0\" y1=\"45\" x2=\"45.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"103.9\" y1=\"45\" x2=\"103.9\" y2=\"315\" class=\"plot-grid\"/><line x1=\"162.8\" y1=\"45\" x2=\"162.8\" y2=\"315\" class=\"plot-grid\"/><line x1=\"221.7\" y1=\"45\" x2=\"221.7\" y2=\"315\" class=\"plot-grid\"/><line x1=\"280.6\" y1=\"45\" x2=\"280.6\" y2=\"315\" class=\"plot-grid\"/><line x1=\"339.4\" y1=\"45\" x2=\"339.4\" y2=\"315\" class=\"plot-grid\"/><line x1=\"398.3\" y1=\"45\" x2=\"398.3\" y2=\"315\" class=\"plot-grid\"/><line x1=\"457.2\" y1=\"45\" x2=\"457.2\" y2=\"315\" class=\"plot-grid\"/><line x1=\"516.1\" y1=\"45\" x2=\"516.1\" y2=\"315\" class=\"plot-grid\"/><line x1=\"575.0\" y1=\"45\" x2=\"575.0\" y2=\"315\" class=\"plot-grid\"/><line x1=\"45\" y1=\"315.0\" x2=\"575\" y2=\"315.0\" class=\"plot-grid\"/><line x1=\"45\" y1=\"281.2\" x2=\"575\" y2=\"281.2\" class=\"plot-grid\"/><line x1=\"45\" y1=\"247.5\" x2=\"575\" y2=\"247.5\" class=\"plot-grid\"/><line x1=\"45\" y1=\"213.8\" x2=\"575\" y2=\"213.8\" class=\"plot-grid\"/><line x1=\"45\" y1=\"180.0\" x2=\"575\" y2=\"180.0\" class=\"plot-grid\"/><line x1=\"45\" y1=\"146.2\" x2=\"575\" y2=\"146.2\" class=\"plot-grid\"/><line x1=\"45\" y1=\"112.5\" x2=\"575\" y2=\"112.5\" class=\"plot-grid\"/><line x1=\"45\" y1=\"78.8\" x2=\"575\" y2=\"78.8\" class=\"plot-grid\"/><line x1=\"45\" y1=\"45.0\" x2=\"575\" y2=\"45.0\" class=\"plot-grid\"/><line x1=\"280.6\" y1=\"45\" x2=\"280.6\" y2=\"315\" class=\"plot-axis\"/><line x1=\"45\" y1=\"213.8\" x2=\"575\" y2=\"213.8\" class=\"plot-axis\"/><text x=\"45.0\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">-4</text><text x=\"103.9\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">-3</text><text x=\"162.8\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">-2</text><text x=\"221.7\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">-1</text><text x=\"339.4\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">1</text><text x=\"398.3\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">2</text><text x=\"457.2\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">3</text><text x=\"516.1\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">4</text><text x=\"575.0\" y=\"335\" text-anchor=\"middle\" class=\"plot-label\">5</text><text x=\"35\" y=\"319.0\" text-anchor=\"end\" class=\"plot-label\">-3</text><text x=\"35\" y=\"285.2\" text-anchor=\"end\" class=\"plot-label\">-2</text><text x=\"35\" y=\"251.5\" text-anchor=\"end\" class=\"plot-label\">-1</text><text x=\"35\" y=\"184.0\" text-anchor=\"end\" class=\"plot-label\">1</text><text x=\"35\" y=\"150.2\" text-anchor=\"end\" class=\"plot-label\">2</text><text x=\"35\" y=\"116.5\" text-anchor=\"end\" class=\"plot-label\">3</text><text x=\"35\" y=\"82.8\" text-anchor=\"end\" class=\"plot-label\">4</text><text x=\"35\" y=\"49.0\" text-anchor=\"end\" class=\"plot-label\">5</text><polyline points=\"103.9,281.2 221.7,112.5 398.3,180.0 516.1,78.8\" fill=\"none\" stroke=\"#173d35\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"103.9\" cy=\"281.2\" r=\"6\" fill=\"#173d35\"/><text x=\"112.9\" y=\"271.2\" class=\"plot-point-label\">A</text><circle cx=\"221.7\" cy=\"112.5\" r=\"6\" fill=\"#173d35\"/><text x=\"230.7\" y=\"102.5\" class=\"plot-point-label\">B</text><circle cx=\"398.3\" cy=\"180.0\" r=\"6\" fill=\"#173d35\"/><text x=\"407.3\" y=\"170.0\" class=\"plot-point-label\">C</text><circle cx=\"516.1\" cy=\"78.8\" r=\"6\" fill=\"#173d35\"/><text x=\"525.1\" y=\"68.8\" class=\"plot-point-label\">D</text><text x=\"589\" y=\"205.8\" class=\"plot-axis-name\">x</text><text x=\"289.6\" y=\"33\" class=\"plot-axis-name\">y</text></svg></div><p>V tomto príklade graf existuje od x=−3 po x=4, takže D(f)=⟨−3;4⟩. Najnižšia hodnota je −2 a najvyššia 4, preto H(f)=⟨−2;4⟩.</p>"
      },
      {
        "id": "checkD",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "definičný obor",
        "question": "Ktorý údaj určuje, či číslo 4 patrí do D(f)?",
        "options": [
          "či na grafe existuje bod s x=4",
          "či na grafe existuje bod s y=4",
          "či f(0)=4",
          "či graf prechádza začiatkom"
        ],
        "answer": 0,
        "correct": "D(f) sleduje x-ové súradnice bodov grafu.",
        "hint": "Definičný obor = možné vstupy."
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Čítaj graf ručne",
        "html": "<p>Prekresli si jednoduchý graf z obrazovky a farebne alebo šípkami vyznač jeho „tieň“ na osi x a na osi y. Vedľa zapíš D(f) a H(f).</p>",
        "model": "D(f)=⟨−3;4⟩, H(f)=⟨−2;4⟩."
      },
      {
        "id": "explainDH",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "title": "D(f) verzus H(f)",
        "prompt": "Vysvetli vlastnými slovami rozdiel medzi definičným oborom a oborom hodnôt.",
        "model": "Definičný obor je množina všetkých vstupov x, pre ktoré je funkcia určená. Obor hodnôt je množina všetkých výsledkov f(x), ktoré funkcia nadobúda."
      },

      {"id":"domain-language","type":"choice","phase":"ROZLÍŠ","skill":"D a H","question":"Ktorá otázka sa pýta na definičný obor D(f)?","options":["Aké hodnoty môže nadobudnúť y?","Pre ktoré vstupy x je funkcia určená?","Kde má funkcia maximum?","Koľkokrát graf pretína os x?"],"answer":1,"correct":"Definičný obor opisuje dovolené vstupy x.","hint":"D(f) = vstupy."},
      {"id":"range-language","type":"choice","phase":"ROZLÍŠ","skill":"D a H","question":"Ktorá veta správne opisuje H(f)?","options":["Množina všetkých dovolených vstupov.","Množina všetkých hodnôt, ktoré funkcia skutočne nadobudne.","Množina nulových bodov.","Množina bodov na osi x."],"answer":1,"correct":"H(f) je obor hodnôt – všetky dosiahnuté výstupy y.","hint":"H(f) = výstupy."},
      {"id":"dh-error","type":"selfWrite","phase":"NÁJDI CHYBU","title":"Nezamieňaj osi","promptHtml":"Spolužiak tvrdí: <strong>„D(f) čítam zvislo a H(f) vodorovne.“</strong> Oprav ho a vysvetli prečo.","model":"D(f) čítame vodorovne podľa osi x, lebo opisuje vstupy. H(f) čítame zvislo podľa osi y, lebo opisuje funkčné hodnoty."},
      {
        "id": "clean",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Definičný obor a obor hodnôt",
        "html": "<p><strong>TEÓRIA:</strong> D(f) – všetky dovolené vstupy x. H(f) – všetky dosiahnuté funkčné hodnoty y=f(x). Z grafu čítame D(f) podľa osi x a H(f) podľa osi y.</p>",
        "model": "Pri uzavretom krajnom bode hodnotu zahŕňame; pri otvorenom bode ju nezahŕňame."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Pri každej zručnosti označ, ako sa teraz cítiš.",
        "skills": [
          "rozumiem D(f)",
          "rozumiem H(f)",
          "viem ich určiť z jednoduchého grafu"
        ]
      }
    ]
  }
});
