MathPlatform.registerModule({
  "id": "3-u01-h006",
  "teacher": {
    "placement": "3. ročník · Goniometrické funkcie, goniometrické, rovnice · Hodina 6 · Zložené goniometrické funkcie sin x a cos x",
    "prerequisites": [
      "goniometrické funkcie ostrého uhla z 2. ročníka",
      "práca s grafom funkcie z 2. ročníka",
      "π a základné algebraické úpravy z predchádzajúceho štúdia",
      "učivo hodín 1–5"
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
    "title": "Zložené goniometrické funkcie",
    "subtitle": "Vzťah → význam → ručný postup → zdôvodnenie",
    "intro": "Pracuj postupne: najprv význam a obrázok, potom zápis a až potom samostatná úloha.",
    "estimatedTime": "18–24 min",
    "activities": [
      {
        "id": "recall",
        "type": "choice",
        "phase": "OPAKUJ",
        "skill": "goniometria",
        "question": "Čo je pri novej goniometrickej úprave najdôležitejšie?",
        "options": [
          "vedieť, z ktorého už známeho vzťahu vychádzam",
          "použiť čo najviac vzorcov",
          "preskočiť podmienky",
          "pracovať iba podľa obrázka"
        ],
        "answer": 0,
        "correct": "Nový krok musí nadväzovať na už zavedený vzťah.",
        "hint": "Hľadaj zdôvodnenie."
      },
      {
        "id": "intro",
        "type": "explain",
        "phase": "NOVÝ KROK",
        "title": "Zložené goniometrické funkcie",
        "html": "<p>Pri funkciách typu y=a·sin(bx+c)+d sledujeme, čo jednotlivé zmeny robia s grafom. Začíname iba z už známeho grafu sin/cos.</p>",
        "remember": "Nový vzorec alebo postup najprv pochop a prečítaj, až potom ho používaj."
      },
      {
        "id": "visual",
        "type": "info",
        "phase": "VIZUALIZÁCIA",
        "title": "Opora v reprezentácii",
        "html": "<div class=\"coordinate-wrap\"><svg class=\"coordinate-plot\" viewBox=\"0 0 500 330\" role=\"img\"><line x1=\"40\" y1=\"180\" x2=\"470\" y2=\"180\" class=\"plot-axis\"/><line x1=\"50\" y1=\"40\" x2=\"50\" y2=\"300\" class=\"plot-axis\"/><polyline points=\"50,180 90,140 130,110 170,140 210,180 250,220 290,250 330,220 370,180 410,140 450,110\" fill=\"none\" stroke=\"#173d35\" stroke-width=\"4\" stroke-linecap=\"round\"/><text x=\"455\" y=\"170\" class=\"plot-axis-name\">x</text><text x=\"60\" y=\"50\" class=\"plot-axis-name\">y</text></svg></div><p>Pri každej úprave sa pýtaj, čo zostáva rovnaké a čo sa mení.</p>"
      },
      {
        "id": "check",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "vzťahy",
        "question": "Ktoré tvrdenie vystihuje správnu prácu so vzorcom?",
        "options": [
          "Najprv určím, či sa vzorec na daný tvar hodí, potom ho použijem.",
          "Vzorec môžem použiť bez ohľadu na tvar výrazu.",
          "Stačí upravovať iba číselné hodnoty.",
          "Kontrola výsledku nie je potrebná."
        ],
        "answer": 0,
        "correct": "Vzorec je nástroj s konkrétnou štruktúrou a podmienkami.",
        "hint": "Vzorec nie je kúzelná skratka."
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Rieš ručne",
        "html": "<p>Vytvor v zošite jeden vlastný príklad k téme <strong>Zložené goniometrické funkcie sin x a cos x</strong>. Každý krok označ vzťahom alebo dôvodom, ktorý používaš.</p>",
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
        "id": "matura",
        "type": "choice",
        "phase": "ORIGINÁLNA MATURITNÁ ÚLOHA",
        "skill": "grafy",
        "prompt": "Maturita 2024, úloha 22. Graf ktorej funkcie má na intervale ⟨0;2π⟩ najviac priesečníkov s osou x?",
        "options": [
          "y=2+sin x",
          "y=2 sin x",
          "y=sin(x/2)",
          "y=sin(2x)",
          "y=sin x"
        ],
        "answer": 3,
        "correct": "sin(2x)=0 pre x=0, π/2, π, 3π/2, 2π, teda má päť priesečníkov.",
        "hint": "Priesečník s osou x znamená funkčnú hodnotu 0."
      },
      {
        "id": "clean",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Zložené goniometrické funkcie sin x a cos x",
        "html": "<p><strong>TEÓRIA:</strong> Zapíš si do zošita dôležité vzťahy alebo postup z dnešnej témy a jeden vzorový príklad.</p>",
        "model": "Zápis do zošita musí byť použiteľný aj o týždeň: názov, vzťah, podmienky, krátky vzorový príklad."
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
  }
});
