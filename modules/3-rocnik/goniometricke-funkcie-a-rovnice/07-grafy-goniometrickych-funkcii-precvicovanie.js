MathPlatform.registerModule({
  "id": "3-u01-h007",
  "teacher": {
    "placement": "3. ročník · Goniometrické funkcie, goniometrické, rovnice · Hodina 7 · Grafy goniometrických funkcií – precvičovanie",
    "prerequisites": [
      "goniometrické funkcie ostrého uhla z 2. ročníka",
      "práca s grafom funkcie z 2. ročníka",
      "π a základné algebraické úpravy z predchádzajúceho štúdia",
      "učivo hodín 1–6"
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
    "title": "Štyri grafy – jedna mapa",
    "subtitle": "Vzťah → význam → ručný postup → zdôvodnenie",
    "intro": "Pracuj postupne: najprv význam a obrázok, potom zápis a až potom samostatná úloha.",
    "estimatedTime": "18–24 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Z hodín 1–6 už poznáš grafy funkcií <strong>sin x, cos x, tg x, cotg x</strong>, ich vlastnosti, aj to, čo s grafom urobia čísla a, b, c, d v zloženej funkcii.</p><p>Dnes si tieto štyri grafy zhrnieme a precvičíme prácu s nimi.</p>"
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
          "porozumieť dnešnému vzťahu/postupu",
          "použiť ho v primeranej úlohe",
          "zdôvodniť zvolený krok"
        ]
      },
      {
        "id": "intro",
        "type": "explain",
        "phase": "NOVÝ KROK",
        "title": "Štyri grafy – jedna mapa",
        "html": "<p>Porovnávame sin, cos, tg a cotg: definičný obor, nuly, periódu, symetriu a ohraničenosť.</p>",
        "remember": "Nový vzorec alebo postup najprv pochop a prečítaj, až potom ho používaj."
      },
      {
        "id": "visual",
        "type": "coordinatePlot",
        "phase": "VIZUALIZÁCIA",
        "title": "sin x a cos x — jedna mapa",
        "html": "<p>Oba grafy majú rovnaký tvar aj periódu, sú len navzájom vodorovne posunuté. Sleduj, kde má ktorý graf nulu a kde maximum.</p>",
        "xMin": 0, "xMax": 6.283185307179586, "yMin": -1, "yMax": 1,
        "xStep": 1.5707963267948966, "yStep": 1,
        "xTickFormat": v => (['0', 'π/2', 'π', '3π/2', '2π'][Math.round(v / (Math.PI / 2))] ?? String(v)),
        "curves": [
          { "fn": x => Math.sin(x), "label": "sin x" },
          { "fn": x => Math.cos(x), "color": "#5f8478", "label": "cos x" }
        ],
        "ariaLabel": "Porovnanie grafov sin x a cos x"
      },
      {
        "id": "clean",
        "type": "explain",
        "phase": "VLASTNOSTI",
        "title": "Grafy goniometrických funkcií – precvičovanie",
        "html": "<p><strong>Grafy sínusu a kosínusu</strong></p><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">y = sin x</div><p class=\"term-rule\">obor hodnôt ⟨−1;1⟩, perióda 2π, nuly x = kπ, k ∈ ℤ.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">y = cos x</div><p class=\"term-rule\">obor hodnôt ⟨−1;1⟩, perióda 2π, nuly x = π/2 + kπ, k ∈ ℤ.</p></div></div><p>Pri čítaní grafu sleduj amplitúdu, periódu, posun a priesečníky s osami.</p>"
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
        "html": "<p>Vytvor v zošite jeden vlastný príklad k téme <strong>Grafy goniometrických funkcií – precvičovanie</strong>. Každý krok označ vzťahom alebo dôvodom, ktorý používaš.</p>",
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
  }
});
