MathPlatform.registerModule({
  "id": "1-u02-h025",
  "teacher": {
    "placement": "1. ročník · Množiny · 25. hodina: Zložené úlohy – kombinované operácie",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "výroková logika z predchádzajúceho tematického celku tam, kde pomáha presnému čítaniu podmienok"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza pre 25. hodinu tému „Zložené úlohy – kombinované operácie“. Súhrnný obsah celku zahŕňa úvod do množín, prvky a zápis, podmnožiny, prázdnu a univerzálnu množinu, kardinalitu, zjednotenie, prienik, rozdiel, doplnok, Vennove diagramy, kombinované a aplikačné úlohy."
    ],
    "planPerformance": [
      "V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; ciele modulu sú didaktickým rozpracovaním názvu a poradia tém, nie doplnením oficiálneho štandardu."
    ],
    "goals": [
      "porozumieť téme „Zložené úlohy – kombinované operácie“",
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
    "title": "Na poradí operácií záleží",
    "subtitle": "Téma 25 · Zložené úlohy – kombinované operácie",
    "intro": "Pracuj presne: najprv pochop význam zápisu, potom počítaj alebo kresli a nakoniec svoje rozhodnutie zdôvodni.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Poznáme už všetky štyri operácie s množinami: zjednotenie, prienik, rozdiel a doplnok.</p><p>Dnes ich budeme <strong>kombinovať v jednom zápise</strong>, napríklad A ∩ (B ∪ C) — a uvidíme, že na poradí a zátvorkách záleží.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "vyhodnotiť zložený zápis s viacerými množinovými operáciami",
          "správne používať zátvorky pri kombinovaní operácií"
        ]
      },
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Na poradí operácií záleží",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 300\"><g font-family=\"system-ui\"><circle cx=\"315\" cy=\"145\" r=\"105\" fill=\"currentColor\" opacity=\".07\" stroke=\"currentColor\" stroke-width=\"3\"/><circle cx=\"445\" cy=\"145\" r=\"105\" fill=\"currentColor\" opacity=\".12\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"250\" y=\"65\" font-size=\"22\">A</text><text x=\"495\" y=\"65\" font-size=\"22\">B</text><text x=\"380\" y=\"285\" text-anchor=\"middle\" font-size=\"18\">Prekrytie kruhov = A ∩ B</text></g></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "start",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "kombinované operácie",
        "question": "A={1,2,3,4}, B={3,4,5}, C={4,5,6}. Čo je (A∩B)∩C?",
        "options": [
          "{4}",
          "{3,4,5}",
          "{5}"
        ],
        "answer": 0,
        "correct": "Najprv A∩B={3,4}, potom s C zostáva {4}.",
        "hint": "Nakresli si malý diagram alebo vypíš prvky."
      },
      {
        "id": "order",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Zátvorky nie sú dekorácia",
        "html": "<p>Pri kombinovaných operáciách najprv rešpektuj zátvorky. Najistejšia kontrola je vypísať medzivýsledok alebo ho vyznačiť vo Vennovom diagrame.</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>A={1,2,3,4}, B={3,4,5}, C={4,5,6}. Výraz (A∩B)∩C počítame v dvoch krokoch: najprv A∩B={3,4}, potom {3,4}∩C={4}.</p></div>",
        "remember": "Jedna operácia → medzivýsledok → ďalšia operácia."
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Jedna veta nestačí bez dôvodu",
        "prompt": "Vysvetli jednou až dvoma vetami, podľa čoho si pri poslednej úlohe rozhodol/a.",
        "model": "Možná presná formulácia: Pri kombinovaných operáciách postupujem podľa zátvoriek. Najprv určím výsledok operácie v zátvorke a až potom s týmto výsledkom vykonám ďalšiu operáciu.",
        "placeholder": "Rozhodol/a som tak, pretože..."
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Kombinované operácie",
        "question": "Pri výraze (A ∪ B) ∩ C vykonáš najprv:",
        "options": [
          "prienik s C",
          "zjednotenie A ∪ B",
          "doplnok C"
        ],
        "answer": 1,
        "correct": "Najprv spracujeme operáciu v zátvorke.",
        "hint": "Rovnako ako pri číselných výrazoch rešpektuj zátvorky."
      },
      {
        "id": "extra-b",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Kombinované operácie",
        "question": "Ak prvok patrí do A aj B a zároveň do C, patrí do (A ∩ B) ∩ C?",
        "options": [
          "Áno",
          "Nie"
        ],
        "answer": 0,
        "correct": "Patrí do všetkých troch množín, preto patrí aj do výsledného prieniku.",
        "hint": "Prienik znamená súčasné splnenie podmienok."
      },
      {
        "id": "extra-c",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Postup bez preskakovania",
        "prompt": "Napíš pravidlo, ako budeš riešiť kombinované množinové výrazy, aby si sa nepomýlil/a.",
        "model": "Najprv rešpektujem zátvorky, po každom kroku si určím medzivýslednú množinu a až potom vykonám ďalšiu operáciu."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "kombinované operácie",
          "zátvorky",
          "Vennov diagram"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; porovnaj svoj pocit s výsledkom úloh."
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 5,
        "text": "Nech A = {1, 2, 3, 4}, B = {3, 4, 5} a C = {4, 5, 6}. Urč:\na) (A ∩ B) ∩ C\nb) (A ∪ B) ∩ C\nc) A ∩ (B ∪ C)",
        "answer": "a) A ∩ B = {3, 4}, potom (A ∩ B) ∩ C = {4}<br>b) A ∪ B = {1, 2, 3, 4, 5}, potom (A ∪ B) ∩ C = {4, 5}<br>c) B ∪ C = {3, 4, 5, 6}, potom A ∩ (B ∪ C) = {3, 4}"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 5,
        "text": "Nech U = {1, 2, 3, …, 8}, A = {2, 4, 6, 8} a B = {1, 2, 3, 4}. Urč:\na) (A ∪ B)′\nb) A′ ∩ B′\nc) (A ∩ B)′\nVšimni si výsledky a) a b).",
        "answer": "a) A ∪ B = {1, 2, 3, 4, 6, 8}, (A ∪ B)′ = {5, 7}<br>b) A′ = {1, 3, 5, 7}, B′ = {5, 6, 7, 8}, A′ ∩ B′ = {5, 7}<br>c) A ∩ B = {2, 4}, (A ∩ B)′ = {1, 3, 5, 6, 7, 8}<br>Výsledky a) a b) sú rovnaké."
      },
      {
        "id": "w3",
        "level": "rozsirenie",
        "space": 6,
        "text": "Nech A = {1, 2, 3, 4, 5}, B = {4, 5, 6, 7} a C = {5, 7, 8}. Urč A ∩ (B ∪ C) a (A ∩ B) ∪ (A ∩ C) a porovnaj výsledky.",
        "answer": "A ∩ (B ∪ C): B ∪ C = {4, 5, 6, 7, 8}, výsledok {4, 5}<br>(A ∩ B) ∪ (A ∩ C): {4, 5} ∪ {5} = {4, 5}<br>Výsledky sú rovnaké."
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 5,
        "text": "Nech A = {1, 2, 3, 4} a B = {3, 4, 5, 6}. Urč (A − B) ∪ (B − A) a (A ∪ B) − (A ∩ B). Čo si všimol/a? Opíš slovami, ktoré prvky tvoria tento výsledok.",
        "answer": "(A − B) ∪ (B − A) = {1, 2, 5, 6}<br>(A ∪ B) − (A ∩ B) = {1, 2, 5, 6}<br>Výsledky sú rovnaké: sú to prvky, ktoré patria práve do jednej z množín A, B (nie do oboch)."
      },
      {
        "id": "w5",
        "level": "bonus",
        "space": 6,
        "text": "Nech U = {1, 2, 3, …, 8}. Nájdi množiny A, B, C (podmnožiny U) tak, aby platilo (A ∩ B) − C = {2}.",
        "answer": "Napr. A = {1, 2, 3}, B = {2, 3, 4}, C = {3}: A ∩ B = {2, 3}, po odčítaní C ostane {2}.<br>Číslo 2 musí byť v A aj v B a nesmie byť v C; iné prvky prieniku A ∩ B musia byť v C."
      }
    ]
  }
});
