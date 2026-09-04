MathPlatform.registerModule({
  "id": "1-u02-h017",
  "teacher": {
    "placement": "1. ročník · Množiny · 17. hodina: Prvky, podmnožiny, prázdna množina, množina všetkých prvkov",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "výroková logika z predchádzajúceho tematického celku tam, kde pomáha presnému čítaniu podmienok"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza pre 17. hodinu tému „Prvky, podmnožiny, prázdna množina, množina všetkých prvkov“. Súhrnný obsah celku zahŕňa úvod do množín, prvky a zápis, podmnožiny, prázdnu a univerzálnu množinu, kardinalitu, zjednotenie, prienik, rozdiel, doplnok, Vennove diagramy, kombinované a aplikačné úlohy."
    ],
    "planPerformance": [
      "V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; ciele modulu sú didaktickým rozpracovaním názvu a poradia tém, nie doplnením oficiálneho štandardu."
    ],
    "goals": [
      "porozumieť téme „Prvky, podmnožiny, prázdna množina, množina všetkých prvkov“",
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
      "8–10 min: zápis do zošita a ručná úloha",
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
    "title": "Čo je vo vnútri a čo je podmnožina?",
    "subtitle": "Téma 17 · Prvky, podmnožiny, prázdna množina, množina všetkých prvkov",
    "intro": "Pracuj presne: najprv pochop význam zápisu, potom počítaj alebo kresli a nakoniec svoje rozhodnutie zdôvodni.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "recap-element",
        "type": "explain",
        "phase": "NADVIAŽ",
        "title": "Najprv prvok, potom podmnožina",
        "html": "<p>Z minulej hodiny už poznáš <strong>∈</strong> a <strong>∉</strong>. Tieto symboly porovnávajú <strong>prvok s množinou</strong>: 2 ∈ B.</p><p>Dnes potrebujeme vyjadriť inú myšlienku: že <strong>všetky prvky jednej množiny patria aj do druhej</strong>.</p>",
        "remember": "∈ používame medzi prvkom a množinou. Pre vzťah dvoch množín zavedieme nový symbol."
      },
      {
        "id": "subset-symbol",
        "type": "info",
        "phase": "NOVÝ SYMBOL",
        "title": "Nový vzťah medzi množinami: podmnožina ⊆",
        "html": "<p>Ak každý prvok množiny A patrí aj do množiny B, hovoríme, že <strong>A je podmnožinou B</strong> a píšeme:</p><p style=\"font-size:1.35em;text-align:center\"><strong>A ⊆ B</strong></p><p>Príklad: A={1,2}, B={1,2,3}. Každý prvok A nájdeme aj v B, preto A ⊆ B.</p>",
        "continueLabel": "Rozlíšim ∈ a ⊆"
      },
      {
        "id": "empty-universe-intro",
        "type": "explain",
        "phase": "NOVÉ POJMY",
        "title": "Prázdna a univerzálna množina",
        "html": "<p><strong>∅</strong> označuje <strong>prázdnu množinu</strong> – množinu, ktorá nemá žiadny prvok.</p><p><strong>U</strong> budeme používať pre <strong>univerzálnu množinu</strong> – dohodnutý súbor všetkých prvkov, o ktorých v danej úlohe uvažujeme.</p>",
        "remember": "∅ nemá žiadne prvky. U závisí od toho, o akých objektoch v úlohe hovoríme."
      },
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Čo je vo vnútri a čo je podmnožina?",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 280\"><ellipse cx=\"380\" cy=\"140\" rx=\"290\" ry=\"110\" fill=\"currentColor\" opacity=\".05\" stroke=\"currentColor\" stroke-width=\"3\"/><ellipse cx=\"330\" cy=\"140\" rx=\"145\" ry=\"70\" fill=\"currentColor\" opacity=\".08\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"115\" y=\"70\" font-size=\"22\">B</text><text x=\"220\" y=\"120\" font-size=\"22\">A</text><text x=\"380\" y=\"250\" text-anchor=\"middle\" font-size=\"20\">A ⊆ B</text></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "start",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "prvok",
        "question": "Ak A={1,2} a B={1,2,3}, čo platí?",
        "options": [
          "A ⊆ B",
          "B ⊆ A",
          "A = ∅"
        ],
        "answer": 0,
        "correct": "Každý prvok A je aj prvkom B.",
        "hint": "Nakresli si malý diagram alebo vypíš prvky."
      },
      {
        "id": "empty",
        "type": "choice",
        "phase": "PREMÝŠĽAJ",
        "skill": "Prázdna množina",
        "question": "Koľko prvkov má prázdna množina ∅?",
        "options": [
          "0",
          "1",
          "Nedá sa určiť"
        ],
        "answer": 0,
        "correct": "Áno. Symbol ∅ označuje množinu bez prvkov.",
        "hint": "Symbol ∅ nie je prvok vložený do množiny."
      },
      {
        "id": "notebook",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Upevni si podstatu",
        "html": "<p><span class=\"mini-label\">ZAPÍŠ SI DO ZOŠITA</span><br>Zapíš názov témy: <strong>Prvky, podmnožiny, prázdna množina, množina všetkých prvkov</strong>. Pridaj definíciu alebo pravidlo vlastnými slovami a jeden správny príklad.</p><p><span class=\"mini-label\">ÚLOHA</span><br>Vytvor vlastný príklad a vyrieš ho bez aplikácie.</p>",
        "model": "<strong>KONTROLA:</strong> Zápis musí používať presné symboly a musí byť z neho jasné, prečo výsledok platí."
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Jedna veta nestačí bez dôvodu",
        "prompt": "Vysvetli jednou až dvoma vetami rozdiel medzi zápismi 2 ∈ A a {2} ⊆ A.",
        "model": "Možná presná formulácia: Zápis 2 ∈ A hovorí, že číslo 2 je prvkom množiny A. Zápis {2} ⊆ A porovnáva dve množiny a hovorí, že každý prvok množiny {2} patrí aj do A.",
        "placeholder": "Rozhodol/a som tak, pretože..."
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Podmnožina",
        "question": "Nech A={1,2} a B={1,2,3}. Ktorý zápis je správny?",
        "options": [
          "A ⊆ B",
          "3 ∈ A",
          "B ⊆ A"
        ],
        "answer": 0,
        "correct": "Každý prvok A patrí aj do B, preto A je podmnožinou B.",
        "hint": "Pri ⊆ porovnávame dve množiny, nie prvok a množinu."
      },
      {
        "id": "extra-b",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Prázdna množina",
        "question": "Koľko prvkov má prázdna množina ∅?",
        "options": [
          "0",
          "1",
          "nedá sa určiť"
        ],
        "answer": 0,
        "correct": "Prázdna množina nemá nijaký prvok.",
        "hint": "Symbol ∅ nepredstavuje jeden prvok."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "prvok",
          "podmnožina",
          "prázdna množina"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; porovnaj svoj pocit s výsledkom úloh."
      }
    ]
  }
});
