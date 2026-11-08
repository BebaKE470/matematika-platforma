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
      "pripraviť sa na úlohy z kontrolnej písomnej práce, v ktorých sa vyhodnocuje výraz s viacerými množinovými operáciami",
      "postupovať po krokoch: zátvorka → medzivýsledok → ďalšia operácia",
      "pri doplnku vždy pracovať s univerzom U"
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
      "3 min: kde sme v celku a čo bude v písomke",
      "15–18 min: digitálne cvičenie v štýle písomky (vyhodnotenie výrazov, hľadanie chyby)",
      "8–10 min: samostatná úloha na papieri (BEZ MOBILU) a zbierka úloh podľa úrovne",
      "5 min: spoločný rozbor najčastejších chýb podľa živých výsledkov"
    ],
    "diagnostics": [
      "najprv vyhodnotí zátvorku a až potom celý výraz",
      "pri doplnku pracuje s U (nezabúda prvky, ktoré nie sú ani v A, ani v B)",
      "rozlišuje (A ∩ B)′ od A′ ∩ B a vie zdôvodniť, prečo to nie je to isté"
    ],
    "partialUse": [
      "Modul je prípravou na písomku: pri nedostatku času vynechajte zbierku a nechajte iba cvičenie a samostatnú úlohu.",
      "Mobil nenahrádza ručné riešenie, presný zápis ani argumentáciu."
    ]
  },
  "student": {
    "title": "Kombinované operácie: príprava na písomku",
    "subtitle": "Téma 25 · Zložené úlohy – kombinované operácie",
    "intro": "V písomke budeš vyhodnocovať výrazy ako (A ∩ B)′ alebo (A ∪ B) − (A ∩ B) po krokoch. Počítaj na papieri, medzivýsledky si zapisuj, výsledky prepisuj do aplikácie.",
    "estimatedTime": "25–30 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Kde sme a čo bude v písomke",
        "html": "<p>Poznáme zjednotenie, prienik, rozdiel aj doplnok a vieme čítať Vennov diagram. Dnes ich <strong>kombinujeme v jednom zápise</strong>.</p><p>V písomke dostaneš univerzum U a množiny A, B a máš vyhodnotiť niekoľko výrazov. Za každý výraz je viac bodov, takže sa oplatí zapisovať <strong>medzivýsledky</strong>.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "vyhodnotiť výraz s viacerými operáciami podľa zátvoriek",
          "správne určiť doplnok vzhľadom na U",
          "nájsť chybu v postupe"
        ]
      },
      {
        "id": "method",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Postup pri zloženom výraze",
        "html": "<ol class=\"steps\"><li>Vypíš si U, A a B.</li><li>Vyhodnoť to, čo je v <strong>zátvorke</strong>, a zapíš medzivýsledok.</li><li>Ak je pri zátvorke či písmene znak ′, urob <strong>doplnok vzhľadom na U</strong>.</li><li>Vykonaj zostávajúcu operáciu.</li></ol><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>U = {1, 2, …, 9}, A = {1, 2, 3, 4, 5} a B = {4, 5, 6, 7}.</p><p>(A ∩ B)′: A ∩ B = {4, 5}, doplnok v U: <strong>{1, 2, 3, 6, 7, 8, 9}</strong></p><p>A′ ∩ B: A′ = {6, 7, 8, 9}, prienik s B: <strong>{6, 7}</strong></p></div><div class=\"warning\"><strong>Pozor:</strong> (A ∩ B)′ a A′ ∩ B sú dva rôzne výrazy. Znak ′ patrí len k tomu, čo stojí tesne pred ním: k písmenu alebo k celej zátvorke.</div>",
        "remember": "Zátvorka → medzivýsledok → ďalšia operácia. Doplnok vždy vzhľadom na U."
      },
      {
        "id": "c-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "vyhodnotenie výrazu",
        "question": "Je dané U = {1, 2, …, 9}, A = {1, 2, 3, 4, 5} a B = {4, 5, 6, 7}. Čo je (A ∩ B)′?",
        "options": [
          "{4, 5}",
          "{1, 2, 3, 6, 7, 8, 9}",
          "{1, 2, 3, 6, 7}"
        ],
        "answer": 1,
        "correct": "A ∩ B = {4, 5}. Doplnok v U tvoria všetky ostatné prvky z U: {1, 2, 3, 6, 7, 8, 9}.",
        "hint": "Najprv vyhodnoť zátvorku, potom hľadaj prvky z U, ktoré v medzivýsledku nie sú. Nezabudni na 8 a 9."
      },
      {
        "id": "c-b",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "vyhodnotenie výrazu",
        "question": "Je dané U = {1, 2, …, 9}, A = {1, 2, 3, 4, 5} a B = {4, 5, 6, 7}. Čo je A′ ∩ B?",
        "options": [
          "{6, 7}",
          "{6, 7, 8, 9}",
          "{1, 2, 3}"
        ],
        "answer": 0,
        "correct": "A′ = {6, 7, 8, 9}. Prienik s B nechá len prvky, ktoré sú aj v B: {6, 7}.",
        "hint": "Najprv doplnok A′ v U, potom prienik s B: ktoré prvky A′ sú zároveň v B?"
      },
      {
        "id": "n-count",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "Počet prvkov výsledku",
        "title": "Počet prvkov výsledku",
        "prompt": "Je dané U = {1, 2, …, 9}, A = {1, 2, 3, 4, 5} a B = {4, 5, 6, 7}. Koľko prvkov má množina (A − B)′?",
        "validate": "exact",
        "answer": 6,
        "success": "A − B = {1, 2, 3}. Jej doplnok v U má 9 − 3 = 6 prvkov: {4, 5, 6, 7, 8, 9}.",
        "hint": "Najprv A − B, potom doplnok v celom U. U má 9 prvkov.",
        "reveal": "Správne je 6: A − B = {1, 2, 3}, doplnok je zvyšných 9 − 3 prvkov."
      },
      {
        "id": "sort",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "rovnaké výsledky",
        "title": "Ktoré výrazy dávajú rovnaký výsledok?",
        "question": "Je dané U = {1, 2, …, 9}, A = {1, 2, 3, 4, 5} a B = {4, 5, 6, 7}. Výraz (A ∪ B)′ má výsledok {8, 9}. Rozhodni o každom výraze, či má rovnaký výsledok.",
        "labels": [
          "Rovnaký výsledok {8, 9}",
          "Iný výsledok"
        ],
        "items": [
          {
            "text": "A′ ∩ B′",
            "answer": true,
            "why": "A′ = {6, 7, 8, 9}, B′ = {1, 2, 3, 8, 9}, spoločné prvky sú {8, 9}."
          },
          {
            "text": "A′ ∪ B′",
            "answer": false,
            "why": "Zjednotenie {6, 7, 8, 9} a {1, 2, 3, 8, 9} je {1, 2, 3, 6, 7, 8, 9}."
          },
          {
            "text": "U − (A ∪ B)",
            "answer": true,
            "why": "Z U odoberieme všetko z A ∪ B = {1, …, 7}, zostane {8, 9}."
          },
          {
            "text": "(A ∩ B)′",
            "answer": false,
            "why": "A ∩ B = {4, 5}, jej doplnok má 7 prvkov, nie 2."
          },
          {
            "text": "A′ − B",
            "answer": true,
            "why": "A′ = {6, 7, 8, 9}, odoberieme B = {4, 5, 6, 7}, zostane {8, 9}."
          }
        ]
      },
      {
        "id": "match",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "vyhodnotenie výrazu",
        "title": "Priraď výrazu výsledok (U = {1, 2, …, 9}, A = {1, 2, 3, 4, 5} a B = {4, 5, 6, 7})",
        "labels": [
          "{4, 5}",
          "{1, 2, 3}",
          "{6, 7}",
          "{8, 9}"
        ],
        "items": [
          {
            "text": "A ∩ B",
            "answer": "{4, 5}"
          },
          {
            "text": "A − B",
            "answer": "{1, 2, 3}"
          },
          {
            "text": "B − A",
            "answer": "{6, 7}"
          },
          {
            "text": "(A ∪ B)′",
            "answer": "{8, 9}"
          },
          {
            "text": "A′ ∩ B",
            "answer": "{6, 7}"
          }
        ]
      },
      {
        "id": "hunt",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Je dané U = {1, 2, …, 9}, A = {1, 2, 3, 4, 5} a B = {4, 5, 6, 7}. Žiak počítal A′ ∩ B takto: „A′ = {6, 7, 8, 9}, a po prieniku s B dostanem {6, 7, 8, 9}.“ V čom je chyba?",
        "options": [
          "Doplnok A′ nemá obsahovať 8 a 9.",
          "Mal použiť zjednotenie namiesto prieniku.",
          "Prienik s B nechá iba prvky, ktoré sú aj v B, teda {6, 7}. Prvky 8 a 9 v B nie sú."
        ],
        "answer": 2,
        "correct": "Presne. Prienik nechá iba spoločné prvky, 8 a 9 treba vyradiť.",
        "hint": "Skontroluj každý prvok výsledku: je naozaj aj v B?"
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha na papier",
        "html": "<p>Odlož zariadenie. Nech <strong>U = {1, 2, 3, …, 12}</strong>, <strong>A = {1, 2, 3, 4, 5, 6}</strong> a <strong>B = {5, 6, 7, 8}</strong>. Vyhodnoť po krokoch (so zápisom medzivýsledkov):</p><ol type=\"a\"><li>(A ∩ B)′</li><li>A′ ∩ B</li><li>(A − B) ∪ (B − A)</li><li>(A ∪ B)′</li></ol>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: kombinované operácie",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Riešenia píš do zošita aj s medzivýsledkami. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Nech U = {1, 2, …, 8}, A = {2, 4, 6, 8} a B = {1, 2, 3, 4}. Urč a) (A ∩ B)′, b) A′ ∩ B, c) (A ∪ B)′.",
            "answer": "A ∩ B = {2, 4}, a) (A ∩ B)′ = {1, 3, 5, 6, 7, 8}<br>A′ = {1, 3, 5, 7}, b) A′ ∩ B = {1, 3}<br>A ∪ B = {1, 2, 3, 4, 6, 8}, c) (A ∪ B)′ = {5, 7}"
          },
          {
            "level": "zaklad",
            "text": "Nech A = {1, 2, 3, 4}, B = {3, 4, 5} a C = {4, 5, 6}. Urč a) (A ∪ B) ∩ C, b) A ∩ (B ∪ C), c) (A − B) ∪ C.",
            "answer": "a) A ∪ B = {1, 2, 3, 4, 5}, ∩ C = {4, 5}<br>b) B ∪ C = {3, 4, 5, 6}, A ∩ {3, 4, 5, 6} = {3, 4}<br>c) A − B = {1, 2}, ∪ C = {1, 2, 4, 5, 6}"
          },
          {
            "level": "rozsirenie",
            "text": "Nech U = {1, 2, …, 10}, A = {1, 2, 3, 4, 5} a B = {3, 4, 5, 6, 7, 8}. Urč a) (A ∪ B) − (A ∩ B), b) (A − B)′, c) A′ ∩ B.",
            "answer": "a) A ∪ B = {1, …, 8}, A ∩ B = {3, 4, 5}, rozdiel {1, 2, 6, 7, 8}<br>b) A − B = {1, 2}, doplnok {3, 4, …, 10}<br>c) A′ = {6, …, 10}, ∩ B = {6, 7, 8}"
          },
          {
            "level": "rozsirenie",
            "text": "Nech U = {1, 2, …, 8}, A = {1, 2, 3, 4} a B = {3, 4, 5, 6}. Zisti, či platí (A ∩ B)′ = A′ ∪ B′. Zdôvodni výpočtom oboch strán.",
            "answer": "A ∩ B = {3, 4}, (A ∩ B)′ = {1, 2, 5, 6, 7, 8}<br>A′ = {5, 6, 7, 8}, B′ = {1, 2, 7, 8}, A′ ∪ B′ = {1, 2, 5, 6, 7, 8}<br>Obe strany sú rovnaké, rovnosť platí."
          },
          {
            "level": "bonus",
            "text": "Nech U = {1, 2, …, 10}. Nájdi množiny A, B tak, aby A ∩ B = {3, 4}, (A ∪ B)′ = {9, 10} a A − B = {1}.",
            "answer": "A ∪ B = U − {9, 10} = {1, …, 8}.<br>A obsahuje prvky A − B a A ∩ B: A = {1, 3, 4}.<br>B obsahuje zvyšok z A ∪ B (okrem prvku 1) : B = {2, 3, 4, 5, 6, 7, 8}."
          }
        ]
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Prečo záleží na zátvorke a na U",
        "prompt": "Vysvetli vlastnými slovami, prečo sa výrazy (A ∩ B)′ a A′ ∩ B líšia a prečo pri doplnku potrebuješ vedieť, aké je U.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> V (A ∩ B)′ najprv urobím prienik a až potom doplnok, preto výsledok obsahuje všetko okrem spoločných prvkov. V A′ ∩ B urobím doplnok len pre A a potom hľadám spoločné prvky s B. Doplnok je „všetko ostatné z U“, takže bez U nepoznám, čo je „ostatné“.",
        "placeholder": "Výrazy sa líšia, pretože..."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Som pripravený/á na písomku?",
        "skills": [
          "vyhodnotenie výrazu so zátvorkou",
          "doplnok vzhľadom na U",
          "rozdiel a zjednotenie v zloženom výraze",
          "zápis medzivýsledkov"
        ],
        "prompt": "Označ, ako dobre to zvládaš. Nie je to známka; porovnaj svoj pocit s výsledkom úloh. Čo máš 🔴 alebo 🟡, si pred písomkou ešte raz prejdi."
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
