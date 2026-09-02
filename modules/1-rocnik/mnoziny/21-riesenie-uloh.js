MathPlatform.registerModule({
  "id": "1-u02-h021",
  "teacher": {
    "placement": "1. ročník · Množiny · 21. hodina: Riešenie úloh",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "výroková logika z predchádzajúceho tematického celku tam, kde pomáha presnému čítaniu podmienok"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza pre 21. hodinu tému „Riešenie úloh“. Súhrnný obsah celku zahŕňa úvod do množín, prvky a zápis, podmnožiny, prázdnu a univerzálnu množinu, kardinalitu, zjednotenie, prienik, rozdiel, doplnok, Vennove diagramy, kombinované a aplikačné úlohy."
    ],
    "planPerformance": [
      "V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; ciele modulu sú didaktickým rozpracovaním názvu a poradia tém, nie doplnením oficiálneho štandardu."
    ],
    "goals": [
      "porozumieť téme „Riešenie úloh“",
      "prepájať slovný, symbolický a grafický zápis",
      "zdôvodniť riešenie a skontrolovať ho na konkrétnom príklade"
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
    "title": "Zjednotenie a prienik v úlohách",
    "subtitle": "Téma 21 · Riešenie úloh",
    "intro": "Pracuj presne: najprv pochop význam zápisu, potom počítaj alebo kresli a nakoniec svoje rozhodnutie zdôvodni.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Zjednotenie a prienik v úlohách",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 300\"><g font-family=\"system-ui\"><circle cx=\"315\" cy=\"145\" r=\"105\" fill=\"currentColor\" opacity=\".07\" stroke=\"currentColor\" stroke-width=\"3\"/><circle cx=\"445\" cy=\"145\" r=\"105\" fill=\"currentColor\" opacity=\".12\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"250\" y=\"65\" font-size=\"22\">A</text><text x=\"495\" y=\"65\" font-size=\"22\">B</text><text x=\"380\" y=\"285\" text-anchor=\"middle\" font-size=\"18\">Prekrytie kruhov = A ∩ B</text></g></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "start",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "zjednotenie",
        "question": "V triede hrá 12 žiakov futbal, 8 volejbal a 3 oboje. Koľko žiakov hrá aspoň jeden z týchto športov?",
        "options": [
          "17",
          "20",
          "23"
        ],
        "answer": 0,
        "correct": "12+8−3=17; spoločných nesmieme započítať dvakrát.",
        "hint": "Nakresli si malý diagram alebo vypíš prvky."
      },
      {
        "id": "logiclink",
        "type": "explain",
        "phase": "SÚVISLOSŤ",
        "title": "Spojenie s výrokovou logikou",
        "html": "<p><strong>x ∈ A ∩ B</strong> znamená: x∈A <strong>a zároveň</strong> x∈B. <strong>x ∈ A ∪ B</strong> znamená: x∈A <strong>alebo</strong> x∈B (aspoň jedna z možností).</p>",
        "remember": "Prienik ↔ a zároveň. Zjednotenie ↔ alebo."
      },
      {
        "id": "notebook",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Upevni si podstatu",
        "html": "<p><span class=\"mini-label\">ČISTÝ ZÁPIS</span><br>Zapíš názov témy: <strong>Riešenie úloh</strong>. Pridaj definíciu alebo pravidlo vlastnými slovami a jeden správny príklad.</p><p><span class=\"mini-label\">ÚLOHA</span><br>Vytvor vlastný príklad a vyrieš ho bez aplikácie.</p>",
        "model": "<strong>KONTROLA:</strong> Zápis musí používať presné symboly a musí byť z neho jasné, prečo výsledok platí."
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Jedna veta nestačí bez dôvodu",
        "prompt": "Vysvetli jednou až dvoma vetami, podľa čoho si pri poslednej úlohe rozhodol/a.",
        "model": "Možná presná formulácia: Najprv určím, čo predstavujú množiny A a B. Potom podľa slov „aspoň jedno“ alebo „oboje“ rozhodnem, či potrebujem zjednotenie alebo prienik, a až potom počítam.",
        "placeholder": "Rozhodol/a som tak, pretože..."
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Operácie s množinami",
        "question": "Ak A={2,4,6} a B={4,6,8}, koľko prvkov má A ∩ B?",
        "options": [
          "1",
          "2",
          "3"
        ],
        "answer": 1,
        "correct": "Spoločné prvky sú 4 a 6, takže prienik má dva prvky.",
        "hint": "Najprv vytvor prienik, potom spočítaj prvky."
      },
      {
        "id": "extra-b",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Operácie s množinami",
        "question": "Pre tie isté množiny má A ∪ B koľko prvkov?",
        "options": [
          "4",
          "5",
          "6"
        ],
        "answer": 0,
        "correct": "A ∪ B={2,4,6,8}, teda štyri prvky.",
        "hint": "Spoločné prvky v zjednotení neopakuj."
      },
      {
        "id": "extra-c",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Opíš svoj postup",
        "prompt": "Napíš stručný postup, ako pri dvoch vypísaných množinách určíš prienik a zjednotenie.",
        "model": "Pri prieniku vyberiem iba spoločné prvky. Pri zjednotení zapíšem všetky prvky, ktoré sú aspoň v jednej množine, pričom žiadny neopakujem."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "zjednotenie",
          "prienik",
          "argumentácia"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; porovnaj svoj pocit s výsledkom úloh."
      }
    ]
  }
});
