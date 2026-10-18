MathPlatform.registerModule({
  "id": "3-u01-h013",
  "teacher": {
    "placement": "3. ročník · Goniometrické funkcie, goniometrické, rovnice · Hodina 13 · Úprava goniometrických výrazov",
    "prerequisites": [
      "goniometrické funkcie ostrého uhla z 2. ročníka",
      "práca s grafom funkcie z 2. ročníka",
      "π a základné algebraické úpravy z predchádzajúceho štúdia",
      "učivo hodín 1–12"
    ],
    "planContent": [
      "Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka."
    ],
    "planPerformance": [
      "Poznať pojem jednotková kružnica.",
      "Vedieť zobraziť na jednotkovej kružnici ľubovoľné reálne číslo a priradiť reálne číslo bodu kružnice.",
      "Zadefinovať funkcie sin x, cos x, tg x, cotg x a opísať ich vlastnosti.",
      "Poznať a vedieť použiť goniometrické vzorce.",
      "Vyriešiť goniometrickú rovnicu."
    ],
    "goals": [
      "porozumieť dnešnému vzťahu/postupu",
      "použiť ho v primeranej úlohe",
      "zdôvodniť zvolený krok"
    ],
    "competencies": [
      "prepájať obrázok, slovný opis a symbolický zápis",
      "pracovať ručne v zošite a zdôvodniť postup",
      "rozlíšiť údaj, vzťah a záver"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie: reprezentácie, modelovanie, presný matematický jazyk a argumentácia.",
      "Maturitný formát sa používa len s obsahom, ktorý je do tejto hodiny dostupný."
    ],
    "flow": [
      "4–5 min aktivácia predchádzajúcich vedomostí",
      "15–22 min vybraná digitálna časť",
      "8–12 min zápis do zošita a ručné riešenie",
      "5 min spoločná syntéza"
    ],
    "diagnostics": [
      "sleduj, či žiak rozumie významu symbolov a vzťahov, nielen postupu",
      "pri chybe sa vráť k obrázku alebo definícii"
    ],
    "partialUse": [
      "Modul nie je povinné použiť celý; učiteľ môže vybrať iba objavovaciu, vizuálnu alebo diagnostickú časť."
    ]
  },
  "student": {
    "title": "Úprava výrazov",
    "subtitle": "Vzťah → význam → ručný postup → zdôvodnenie",
    "intro": "Pracuj postupne: najprv význam a obrázok, potom zápis a až potom samostatná úloha.",
    "estimatedTime": "18–24 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Doteraz sme si postupne zbierali „nástroje“: základnú identitu <strong>sin²x + cos²x = 1</strong>, súčtové vzorce (Hodina 10) a vzorce pre dvojnásobný uhol (Hodina 11).</p><p>Dnes tieto vzťahy použijeme na to, aby sme goniometrický výraz upravili na jednoduchší tvar — bez toho, aby sme zmenili jeho hodnotu.</p>"
      },
      {
        "id": "recall",
        "type": "choice",
        "phase": "OPAKUJ",
        "skill": "goniometria",
        "question": "Čo je pri novej goniometrickej úprave najdôležitejšie?",
        "options": [
          "použiť čo najviac vzorcov",
          "vedieť, z ktorého už známeho vzťahu vychádzam",
          "preskočiť podmienky",
          "pracovať iba podľa obrázka"
        ],
        "answer": 1,
        "correct": "Nový krok musí nadväzovať na už zavedený vzťah.",
        "hint": "Hľadaj zdôvodnenie."
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "rozpoznať, ktorý už známy vzorec sa na výraz hodí",
          "upraviť výraz bez zmeny jeho hodnoty",
          "skontrolovať podmienky platnosti úpravy"
        ]
      },
      {
        "id": "intro",
        "type": "explain",
        "phase": "NOVÝ KROK",
        "title": "Úprava výrazov",
        "html": "<p>Pri úprave nemeníme hodnotu výrazu:</p><ol class=\"steps\"><li>Volíme identitu.</li><li>Upravíme jednu stranu.</li><li>Kontrolujeme podmienky.</li></ol><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Uprav výraz 2sin²x tak, aby neobsahoval druhú mocninu.</p><p>Z Hodiny 11 vieme: cos 2x = 1 − 2sin²x, teda 2sin²x = 1 − cos 2x.</p><p>Platí teda <strong>2sin²x = 1 − cos 2x</strong>.</p></div>",
        "remember": "Nový vzorec alebo postup najprv pochop a prečítaj, až potom ho používaj."
      },
      {
        "id": "visual",
        "type": "info",
        "phase": "VIZUALIZÁCIA",
        "title": "Opora v reprezentácii",
        "html": "<div class=\"coordinate-wrap\"><svg class=\"coordinate-plot\" viewBox=\"0 0 520 360\" role=\"img\" aria-label=\"Jednotková kružnica\"><line x1=\"50\" y1=\"180\" x2=\"470\" y2=\"180\" class=\"plot-axis\"/><line x1=\"260\" y1=\"25\" x2=\"260\" y2=\"335\" class=\"plot-axis\"/><circle cx=\"260\" cy=\"180\" r=\"125\" fill=\"none\" stroke=\"#173d35\" stroke-width=\"4\"/><circle cx=\"385\" cy=\"180\" r=\"6\" class=\"plot-point\"/><circle cx=\"260\" cy=\"55\" r=\"6\" class=\"plot-point\"/><circle cx=\"135\" cy=\"180\" r=\"6\" class=\"plot-point\"/><circle cx=\"260\" cy=\"305\" r=\"6\" class=\"plot-point\"/><text x=\"392\" y=\"174\" class=\"plot-point-label\">0, 2π</text><text x=\"270\" y=\"48\" class=\"plot-point-label\">π/2</text><text x=\"105\" y=\"174\" class=\"plot-point-label\">π</text><text x=\"270\" y=\"325\" class=\"plot-point-label\">3π/2</text><text x=\"445\" y=\"170\" class=\"plot-axis-name\">x</text><text x=\"270\" y=\"38\" class=\"plot-axis-name\">y</text></svg></div>"
      },
      {
        "id": "clean",
        "type": "explain",
        "phase": "NOVÝ KROK",
        "title": "Úprava goniometrických výrazov",
        "html": "<p><strong>Úprava goniometrických výrazov</strong></p><p>Pri úprave najprv rozpoznaj vhodný vzorec, potom upravuj algebraicky.</p><p>Najčastejšie používame: <strong>sin²x + cos²x = 1</strong>, súčtové vzorce a vzorce pre dvojnásobný uhol.</p><div class=\"warning\"><strong>Pozor:</strong> Pri delení výrazom vždy skontroluj, kedy je deliteľ nenulový.</div>"
      },
      {
        "id": "check",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "vzťahy",
        "question": "Ktoré tvrdenie vystihuje správnu prácu so vzorcom?",
        "options": [
          "Stačí upravovať iba číselné hodnoty.",
          "Vzorec môžem použiť bez ohľadu na tvar výrazu.",
          "Najprv určím, či sa vzorec na daný tvar hodí, potom ho použijem.",
          "Kontrola výsledku nie je potrebná."
        ],
        "answer": 2,
        "correct": "Vzorec je nástroj s konkrétnou štruktúrou a podmienkami.",
        "hint": "Vzorec nie je kúzelná skratka."
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Rieš ručne",
        "html": "<p>Vytvor v zošite jeden vlastný príklad k téme <strong>Úprava goniometrických výrazov</strong>. Každý krok označ vzťahom alebo dôvodom, ktorý používaš.</p>",
        "model": "Zápis do zošita môže obsahovať opravu. Dôležité je, aby bolo vidieť, prečo jednotlivé kroky platia."
      },
      {
        "id": "arg",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "title": "Prečo tento krok platí?",
        "prompt": "Vyber jeden krok zo svojho riešenia a vysvetli ho jednou matematicky presnou vetou.",
        "model": "Vzor: Uvediem použitý vzťah, dosadené hodnoty/premenné a vysvetlím, prečo sa dá v tomto kroku použiť."
      },
      {
        "id": "transfer",
        "type": "choice",
        "phase": "MATURITNÝ FORMÁT",
        "skill": "prenos",
        "question": "Pri testovej úlohe je prvý bezpečný krok:",
        "options": [
          "ignorovať interval alebo podmienky",
          "vybrať najdlhšiu odpoveď",
          "hneď dosadiť do náhodného vzorca",
          "preložiť zadanie do známych pojmov a vzťahov"
        ],
        "answer": 3,
        "correct": "Najprv rozpoznaj matematickú štruktúru úlohy.",
        "hint": "Formát testu nemení matematiku."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Pri každej zručnosti označ, ako sa teraz cítiš.",
        "skills": [
          "viem rozpoznať vhodný vzťah",
          "viem riešiť ručne a kontrolovať podmienky",
          "viem vysvetliť aspoň jeden krok riešenia"
        ]
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 6,
        "text": "Uprav pomocou vzorcov pre dvojnásobný uhol na jednu goniometrickú funkciu:\na) 2 sin 3x cos 3x\nb) cos²x − sin²x\nc) 2cos²x − 1\nd) 1 − 2sin²(x/2)",
        "answer": "a) sin 6x (α = 3x)<br>b) cos 2x<br>c) cos 2x<br>d) cos x (α = x/2, teda 2α = x)"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 5,
        "text": "Zjednoduš pomocou základnej identity:\na) 5sin²x + 5cos²x\nb) (1 − cos x)(1 + cos x)\nc) 1 − sin²x",
        "answer": "a) 5(sin²x + cos²x) = 5<br>b) 1 − cos²x = sin²x<br>c) cos²x"
      },
      {
        "id": "w3",
        "level": "rozsirenie",
        "space": 8,
        "text": "Zjednoduš a uveď podmienky, pre ktoré úprava platí:\na) sin 2x / (2 sin x)\nb) sin 2x / cos x\nc) (1 − cos 2x) / (2 sin x)",
        "answer": "a) 2 sin x cos x / (2 sin x) = cos x, podmienka sin x ≠ 0<br>b) 2 sin x cos x / cos x = 2 sin x, podmienka cos x ≠ 0<br>c) 1 − cos 2x = 2sin²x, teda výraz = sin x, podmienka sin x ≠ 0"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 8,
        "text": "Použi súčtové alebo rozdielové vzorce a zjednoduš:\na) sin(x + y) cos y − cos(x + y) sin y\nb) cos(x − y) cos y − sin(x − y) sin y\nc) sin(π/6 + x) + sin(π/6 − x)",
        "answer": "a) sin((x + y) − y) = sin x<br>b) cos((x − y) + y) = cos x<br>c) Rozpíšeme obe sínusy: sin(π/6)cos x + cos(π/6)sin x + sin(π/6)cos x − cos(π/6)sin x = 2 · (1/2) · cos x = cos x"
      },
      {
        "id": "w5",
        "level": "bonus",
        "space": 8,
        "text": "Dokáž identity (cos x ≠ 0):\na) (1 − cos 2x) / (1 + cos 2x) = tg²x\nb) sin 2x / (1 + cos 2x) = tg x",
        "answer": "a) 1 − cos 2x = 2sin²x a 1 + cos 2x = 2cos²x, teda výraz = 2sin²x / 2cos²x = tg²x.<br>b) sin 2x = 2 sin x cos x a 1 + cos 2x = 2cos²x, teda výraz = 2 sin x cos x / 2cos²x = sin x / cos x = tg x."
      }
    ]
  }
});
