MathPlatform.registerModule({
  "id": "1-u02-h016",
  "teacher": {
    "placement": "1. ročník · Množiny · 16. hodina: Úvod do množín, prvky, zápis množín",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "výroková logika z predchádzajúceho tematického celku tam, kde pomáha presnému čítaniu podmienok"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza pre 16. hodinu tému „Úvod do množín, prvky, zápis množín“. Súhrnný obsah celku zahŕňa úvod do množín, prvky a zápis, podmnožiny, prázdnu a univerzálnu množinu, kardinalitu, zjednotenie, prienik, rozdiel, doplnok, Vennove diagramy, kombinované a aplikačné úlohy."
    ],
    "planPerformance": [
      "V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; ciele modulu sú didaktickým rozpracovaním názvu a poradia tém, nie doplnením oficiálneho štandardu."
    ],
    "goals": [
      "vysvetliť pojem množina a prvok množiny na konkrétnych príkladoch",
      "zapísať konečnú množinu vymenovaním prvkov do zložených zátvoriek",
      "správne čítať a používať symboly ∈ (patrí) a ∉ (nepatrí)",
      "rozhodnúť o príslušnosti prvku k množine a svoje rozhodnutie slovne zdôvodniť"
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
      "žiak nepovažuje zložené zátvorky za obyčajné zátvorky vo výraze",
      "rozlišuje objekt a množinu objektov",
      "číta ∈ ako „patrí do množiny“ a ∉ ako „nepatrí do množiny“",
      "nepoužíva zatiaľ symbol podmnožiny – ten sa zavádza až v nasledujúcej téme"
    ],
    "partialUse": [
      "Modul nemusí byť použitý celý. Vyberte iba tie aktivity, ktoré v danej hodine podporia učenie.",
      "Mobil nenahrádza ručné riešenie, presný zápis ani argumentáciu."
    ]
  },
  "student": {
    "title": "Množina ako presne určený súbor",
    "subtitle": "Téma 16 · Úvod do množín, prvky, zápis množín",
    "intro": "Začneme od úplného začiatku. Každý nový pojem a symbol si najprv vysvetlíme, až potom ho použiješ v úlohe.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "idea",
        "type": "info",
        "phase": "OBJAVUJ",
        "title": "Čo majú tieto objekty spoločné?",
        "html": "<p>Predstav si, že chceme hovoriť o <strong>párnych číslach menších ako 8</strong>. Dostaneme objekty 2, 4 a 6. V matematike ich môžeme spojiť do jedného celku – <strong>množiny</strong>.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 760 250\" role=\"img\" aria-label=\"Množina A s prvkami 2, 4 a 6\"><rect x=\"70\" y=\"35\" width=\"620\" height=\"175\" rx=\"70\" fill=\"currentColor\" opacity=\".06\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"105\" y=\"70\" font-size=\"22\" font-weight=\"700\">A</text><circle cx=\"230\" cy=\"125\" r=\"28\" fill=\"currentColor\" opacity=\".14\"/><text x=\"230\" y=\"132\" text-anchor=\"middle\" font-size=\"21\">2</text><circle cx=\"380\" cy=\"125\" r=\"28\" fill=\"currentColor\" opacity=\".14\"/><text x=\"380\" y=\"132\" text-anchor=\"middle\" font-size=\"21\">4</text><circle cx=\"530\" cy=\"125\" r=\"28\" fill=\"currentColor\" opacity=\".14\"/><text x=\"530\" y=\"132\" text-anchor=\"middle\" font-size=\"21\">6</text></svg></div>",
        "continueLabel": "Čo je množina?"
      },
      {
        "id": "definition",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Množina a jej prvky",
        "html": "<p><strong>Množina</strong> je súbor objektov, pri ktorom vieme jednoznačne rozhodnúť, či daný objekt do súboru patrí. Objekty množiny nazývame <strong>prvky množiny</strong>.</p><p>Množiny zvyčajne označujeme veľkými písmenami: <strong>A, B, C, …</strong></p>",
        "remember": "Množina = celok. Prvok = jeden objekt, ktorý do tohto celku patrí."
      },
      {
        "id": "braces",
        "type": "explain",
        "phase": "NOVÝ ZÁPIS",
        "title": "Ako zapíšeme množinu?",
        "html": "<p>Ak poznáme všetky prvky konečnej množiny, môžeme ich <strong>vymenovať v zložených zátvorkách</strong>.</p><p style=\"font-size:1.2em;text-align:center\"><strong>A = {2, 4, 6}</strong></p><p>Čítame: „Množina A obsahuje prvky 2, 4 a 6.“ Poradie prvkov množiny nie je podstatné a ten istý prvok nevypisujeme viackrát.</p>",
        "remember": "Zložené zátvorky { } hovoria, že zapisujeme množinu."
      },
      {
        "id": "symbols",
        "type": "info",
        "phase": "NOVÝ SYMBOL",
        "title": "Teraz zavedieme dva nové symboly: ∈ a ∉",
        "html": "<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px\"><div class=\"result-card\"><div style=\"font-size:2rem;font-weight:800\">∈</div><strong>patrí do množiny</strong><p>4 ∈ A<br><small>„4 patrí do množiny A.“</small></p></div><div class=\"result-card\"><div style=\"font-size:2rem;font-weight:800\">∉</div><strong>nepatrí do množiny</strong><p>5 ∉ A<br><small>„5 nepatrí do množiny A.“</small></p></div></div><p>V oboch zápisoch je <strong>vľavo prvok</strong> a <strong>vpravo množina</strong>.</p>",
        "continueLabel": "Teraz si to overím"
      },
      {
        "id": "read",
        "type": "choice",
        "phase": "OVER",
        "skill": "symboly ∈ a ∉",
        "question": "Máme A = {2, 4, 6}. Ako správne prečítaš zápis 4 ∈ A?",
        "options": [
          "4 patrí do množiny A.",
          "4 nepatrí do množiny A.",
          "4 je názov množiny A."
        ],
        "answer": 0,
        "correct": "Správne. Symbol ∈ čítame „patrí do množiny“.",
        "hint": "Pozri sa na kartu s dvoma novými symbolmi."
      },
      {
        "id": "decide",
        "type": "choice",
        "phase": "OVER",
        "skill": "príslušnosť prvku",
        "question": "Máme A = {2, 4, 6}. Ktorý zápis je pravdivý?",
        "options": [
          "3 ∈ A",
          "4 ∈ A",
          "6 ∉ A"
        ],
        "answer": 1,
        "correct": "Áno. Číslo 4 je medzi vypísanými prvkami množiny A, preto 4 ∈ A.",
        "hint": "Najprv nájdi číslo medzi prvkami v zložených zátvorkách a až potom vyber symbol."
      },
      {
        "id": "working",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "ÚLOHA DO ZOŠITA – skús sám/sama",
        "html": "<p><span class=\"mini-label\">ÚLOHA DO ZOŠITA</span></p><p>Nech B = {1, 3, 5, 7}. Bez aplikácie zapíš pomocou ∈ alebo ∉:</p><p>a) číslo 5 a množina B &nbsp;&nbsp; b) číslo 4 a množina B.</p><p>Potom oba zápisy prečítaj slovami.</p>",
        "model": "<strong>KONTROLA:</strong> 5 ∈ B, pretože 5 je prvkom B. 4 ∉ B, pretože 4 medzi prvkami B nie je."
      },
      {
        "id": "clean",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Čo si z dneška odnesiem",
        "html": "<p><span class=\"mini-label\">ZAPÍŠ SI DO ZOŠITA</span></p><p><strong>NADPIS:</strong> Množina, prvok množiny, zápis množiny</p><p><strong>TEÓRIA:</strong> Množina je súbor objektov, pri ktorom vieme jednoznačne rozhodnúť, či objekt do množiny patrí. Objekty množiny nazývame prvky.</p><p><strong>SYMBOLY:</strong> x ∈ A – x patrí do A; &nbsp; x ∉ A – x nepatrí do A.</p><p><strong>PRÍKLAD:</strong> A = {2, 4, 6}; 4 ∈ A; 5 ∉ A.</p>",
        "model": "Toto je presný zápis, ku ktorému sa môžeš pri ďalších témach vrátiť."
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Zdôvodni, nielen označ",
        "prompt": "Pre množinu A = {2, 4, 6} vysvetli, prečo platí 5 ∉ A.",
        "model": "Možná presná formulácia: Číslo 5 nie je medzi prvkami množiny A, preto 5 ∉ A.",
        "placeholder": "Platí to preto, že..."
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Prvok množiny",
        "question": "Nech A = {2, 4, 6}. Ktorý zápis je pravdivý?",
        "options": [
          "4 ∈ A",
          "5 ∈ A",
          "6 ∉ A"
        ],
        "answer": 0,
        "correct": "Číslo 4 je medzi prvkami množiny A.",
        "hint": "Pozri sa priamo na vypísané prvky."
      },
      {
        "id": "extra-b",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Zápis množín",
        "question": "Zápis 7 ∉ B čítame:",
        "options": [
          "7 patrí do B",
          "7 nepatrí do B",
          "B patrí do 7"
        ],
        "answer": 1,
        "correct": "Symbol ∉ znamená „nepatrí do množiny“.",
        "hint": "Rozlišuj ∈ a ∉."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "množina a prvok",
          "zápis { }",
          "symbol ∈",
          "symbol ∉"
        ],
        "prompt": "Označ, ako dobre vieš každý pojem alebo symbol vysvetliť aj bez aplikácie."
      }
    ]
  }
});
