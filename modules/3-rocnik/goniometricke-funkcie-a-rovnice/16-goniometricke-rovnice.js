MathPlatform.registerModule({
  "id": "3-u01-h016",
  "teacher": {
    "placement": "3. ročník · Goniometrické funkcie, goniometrické, rovnice · Hodina 16 · Goniometrické rovnice",
    "prerequisites": [
      "goniometrické funkcie ostrého uhla z 2. ročníka",
      "práca s grafom funkcie z 2. ročníka",
      "π a základné algebraické úpravy z predchádzajúceho štúdia",
      "učivo hodín 1–15"
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
      "8–12 min pracovný/čistý zápis a ručné riešenie",
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
    "title": "Goniometrické rovnice",
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
        "title": "Goniometrické rovnice",
        "html": "<p>Rovnicu najprv algebraicky upravíme na známy typ a až potom riešime na kružnici.</p>",
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
        "phase": "PRACOVNÝ ZÁPIS",
        "title": "Rieš ručne",
        "html": "<p>Vytvor v zošite jeden vlastný príklad k téme <strong>Goniometrické rovnice</strong>. Každý krok označ vzťahom alebo dôvodom, ktorý používaš.</p>",
        "model": "Pracovný zápis môže obsahovať opravu. Dôležité je, aby bolo vidieť, prečo jednotlivé kroky platia."
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
          "preložiť zadanie do známych pojmov a vzťahov",
          "vybrať najdlhšiu odpoveď",
          "hneď dosadiť do náhodného vzorca",
          "ignorovať interval alebo podmienky"
        ],
        "answer": 0,
        "correct": "Najprv rozpoznaj matematickú štruktúru úlohy.",
        "hint": "Formát testu nemení matematiku."
      },
      {
        "id": "clean",
        "type": "notebook",
        "phase": "ČISTÝ ZÁPIS",
        "title": "Goniometrické rovnice",
        "html": "<p><strong>TEÓRIA:</strong> Po spoločnej kontrole zapíš iba presné vzťahy/postup, ktoré patria k dnešnej téme. Pridaj jeden vzorový príklad.</p>",
        "model": "Čistý zápis musí byť použiteľný aj o týždeň: názov, vzťah, podmienky, krátky vzorový príklad."
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
