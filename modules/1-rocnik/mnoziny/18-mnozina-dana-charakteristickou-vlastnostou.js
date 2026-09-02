MathPlatform.registerModule({
  "id": "1-u02-h018",
  "teacher": {
    "placement": "1. ročník · Množiny · 18. hodina: Množina daná charakteristickou vlastnosťou",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "výroková logika z predchádzajúceho tematického celku tam, kde pomáha presnému čítaniu podmienok"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza pre 18. hodinu tému „Množina daná charakteristickou vlastnosťou“. Súhrnný obsah celku zahŕňa úvod do množín, prvky a zápis, podmnožiny, prázdnu a univerzálnu množinu, kardinalitu, zjednotenie, prienik, rozdiel, doplnok, Vennove diagramy, kombinované a aplikačné úlohy."
    ],
    "planPerformance": [
      "V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; ciele modulu sú didaktickým rozpracovaním názvu a poradia tém, nie doplnením oficiálneho štandardu."
    ],
    "goals": [
      "prejsť od vymenovania prvkov k určeniu množiny charakteristickou vlastnosťou",
      "slovne čítať zápis typu {x ∈ M; podmienka}",
      "na jednoduchých príkladoch prevádzať medzi opisom vlastnosťou a vymenovaním prvkov",
      "rozlišovať základnú číselnú množinu, z ktorej prvky vyberáme, od podmienky, ktorú musia spĺňať"
    ],
    "competencies": [
      "matematická komunikácia",
      "práca s reprezentáciami",
      "argumentácia a kontrola výsledku",
      "prehľadný zápis v zošite"
    ],
    "enrichment": [
      "Návrh maturitného štandardu sa využíva iba ako obohatenie: reprezentácia množín, Vennove diagramy, prepojenie množinových operácií s logickými spojkami a presná argumentácia."
    ],
    "flow": [
      "4–5 min: krátky problém pri tabuli",
      "15–20 min: vybrané digitálne aktivity",
      "8–10 min: čistý zápis a ručná úloha",
      "5 min: spoločné zdôvodnenie"
    ],
    "diagnostics": [
      "rozlišuje prvok a množinu/podmnožinu podľa témy",
      "číta symbolický zápis bez hádania",
      "vie výsledok vysvetliť slovami alebo diagramom"
    ],
    "partialUse": [
      "Modul nemusí byť použitý celý. Vyberte iba tie aktivity, ktoré v danej hodine podporia učenie.",
      "Mobil nenahrádza ručné riešenie, presný zápis ani argumentáciu."
    ]
  },
  "student": {
    "title": "Od zoznamu k pravidlu",
    "subtitle": "Téma 18 · Množina daná charakteristickou vlastnosťou",
    "intro": "Pracuj presne: najprv pochop význam zápisu, potom počítaj alebo kresli a nakoniec svoje rozhodnutie zdôvodni.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "from-list",
        "type": "info",
        "phase": "OBJAVUJ",
        "title": "Zoznam prvkov nie je jediná možnosť",
        "html": "<p>Množinu <strong>A = {2, 4, 6, 8}</strong> vieme zapísať vymenovaním prvkov. Vieme ju však opísať aj pravidlom: <strong>prvky A sú párne čísla z množiny U = {1,2,3,4,5,6,7,8,9}</strong>.</p><p>Takéto pravidlo nazývame <strong>charakteristická vlastnosť</strong>.</p>",
        "continueLabel": "Ako sa to zapíše symbolicky?"
      },
      {
        "id": "property-notation",
        "type": "explain",
        "phase": "NOVÝ ZÁPIS",
        "title": "Čítame zápis po častiach",
        "html": "<p>Ak máme <strong>U = {1,2,3,4,5,6,7,8,9}</strong>, môžeme napísať:</p><p style=\"font-size:1.25rem\"><strong>A = {x ∈ U; x je párne}</strong></p><p><strong>x ∈ U</strong> znamená: vyberáme prvok x z množiny U. Bodkočiarka oddeľuje obor, z ktorého vyberáme, od podmienky <strong>x je párne</strong>.</p>",
        "remember": "{x ∈ U; podmienka} čítame: množina všetkých x z U, ktoré spĺňajú uvedenú podmienku."
      },
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Od pravidla späť k prvkom",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 260\"><g font-family=\"system-ui\"><text x=\"380\" y=\"50\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"700\">U = {1,2,3,4,5,6,7,8,9}</text><text x=\"380\" y=\"84\" text-anchor=\"middle\" font-size=\"21\">A = {x ∈ U; x je párne}</text><path d=\"M110 145 H650\" stroke=\"currentColor\" stroke-width=\"3\"/><g text-anchor=\"middle\" font-size=\"17\"><text x=\"130\" y=\"175\">1</text><text x=\"195\" y=\"175\">2</text><text x=\"260\" y=\"175\">3</text><text x=\"325\" y=\"175\">4</text><text x=\"390\" y=\"175\">5</text><text x=\"455\" y=\"175\">6</text><text x=\"520\" y=\"175\">7</text><text x=\"585\" y=\"175\">8</text><text x=\"650\" y=\"175\">9</text></g><g fill=\"currentColor\"><circle cx=\"195\" cy=\"145\" r=\"10\"/><circle cx=\"325\" cy=\"145\" r=\"10\"/><circle cx=\"455\" cy=\"145\" r=\"10\"/><circle cx=\"585\" cy=\"145\" r=\"10\"/></g><text x=\"380\" y=\"225\" text-anchor=\"middle\" font-size=\"20\">A = {2, 4, 6, 8}</text></g></svg></div>",
        "continueLabel": "Vyskúšať si čítanie"
      },
      {
        "id": "start",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "charakteristická vlastnosť",
        "question": "Máme U={1,2,3,4,5,6,7,8}. Ktorá množina je určená zápisom A={x∈U; x<5}?",
        "options": [
          "{1,2,3,4}",
          "{1,2,3,4,5}",
          "{5,6,7,8}"
        ],
        "answer": 0,
        "correct": "Správne. Z U vyberieme práve prvky, ktoré spĺňajú podmienku x<5.",
        "hint": "Najprv sa pozri, z akej množiny x vyberáme, potom použi podmienku."
      },
      {
        "id": "translate",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Prelož zápis",
        "prompt": "Máme U={−3,−2,−1,0,1,2,3}. Vlastnými slovami vysvetli, čo znamená B={x∈U; −2≤x≤2}.",
        "model": "Možná presná formulácia: Množina B obsahuje všetky prvky x z množiny U, ktoré sú aspoň −2 a zároveň najviac 2. Teda B={−2,−1,0,1,2}.",
        "placeholder": "Množina B obsahuje..."
      },
      {
        "id": "notebook",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Čistý zápis až po porozumení",
        "html": "<p><span class=\"mini-label\">ČISTÝ ZÁPIS – TEÓRIA</span><br>Zapíš význam charakteristickej vlastnosti a schému <strong>{x ∈ U; podmienka}</strong>.</p><p><span class=\"mini-label\">ÚLOHA</span><br>Pre U={1,2,3,4,5,6,7,8,9,10} zapíš charakteristickou vlastnosťou množinu {3,6,9}.</p>",
        "model": "<strong>VZOR:</strong> Charakteristická vlastnosť opisuje spoločnú podmienku, ktorú spĺňajú práve prvky množiny. Jedna možnosť úlohy: {x ∈ U; x je deliteľné 3}."
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Prečo nestačí iba podmienka?",
        "prompt": "Vysvetli, prečo je pri zápise {x ∈ U; podmienka} dôležité vedieť, čo je množina U.",
        "model": "Možná presná formulácia: Rovnakú podmienku môžu spĺňať rôzne prvky podľa toho, z akej množiny vyberáme. Množina U preto určuje obor možných prvkov x."
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Charakteristická vlastnosť",
        "question": "Nech U={1,2,3,4,5,6}. Zápis A={x ∈ U; x je párne} určuje množinu:",
        "options": [
          "{1,3,5}",
          "{2,4,6}",
          "{2,6}"
        ],
        "answer": 1,
        "correct": "Vyberieme práve tie prvky U, ktoré spĺňajú vlastnosť „je párne“.",
        "hint": "Najprv čítaj: x patrí do U a spĺňa uvedenú vlastnosť."
      },
      {
        "id": "extra-b",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Prelož zápis",
        "prompt": "Vlastnými slovami vysvetli, čo znamená A={x ∈ U; x > 3}, ak U={1,2,3,4,5}.",
        "model": "A je množina všetkých prvkov x z univerzálnej množiny U, pre ktoré platí x > 3; teda A={4,5}."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "charakteristická vlastnosť",
          "čítanie zápisu {x ∈ U; podmienka}",
          "preklad medzi pravidlom a zoznamom prvkov"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; porovnaj svoj pocit s výsledkom úloh."
      }
    ]
  }
});
