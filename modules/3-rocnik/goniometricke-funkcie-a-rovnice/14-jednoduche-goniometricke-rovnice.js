MathPlatform.registerModule({
  "id": "3-u01-h014",
  "teacher": {
    "placement": "3. ročník · Goniometrické funkcie, goniometrické, rovnice · Hodina 14 · Jednoduché goniometrické rovnice",
    "prerequisites": [
      "goniometrické funkcie ostrého uhla z 2. ročníka",
      "práca s grafom funkcie z 2. ročníka",
      "π a základné algebraické úpravy z predchádzajúceho štúdia",
      "učivo hodín 1–13"
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
    "title": "Jednoduchá goniometrická rovnica",
    "subtitle": "Vzťah → význam → ručný postup → zdôvodnenie",
    "intro": "Pracuj postupne: najprv význam a obrázok, potom zápis a až potom samostatná úloha.",
    "estimatedTime": "18–24 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Z Hodín 1–7 vieš čítať hodnoty sin x, cos x, tg x a cotg x z jednotkovej kružnice alebo z ich grafu — vrátane toho, kde sú <strong>nulové</strong> a ako sa vďaka <strong>periodicite</strong> opakujú.</p><p>Dnes tieto vlastnosti použijeme opačne: z rovnice typu sin x = a nájdeme všetky x, ktoré ju spĺňajú.</p>"
      },
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
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "nájsť základné riešenie rovnice typu sin x = a, cos x = a alebo tg x = a",
          "využiť periodicitu na zápis všetkých riešení",
          "vybrať riešenia patriace do zadaného intervalu"
        ]
      },
      {
        "id": "intro",
        "type": "explain",
        "phase": "NOVÝ KROK",
        "title": "Jednoduchá goniometrická rovnica",
        "html": "<p>Najprv hľadáme základné riešenia na kružnici, potom využijeme periodicitu.</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Rieš rovnicu cos x = 0.</p><p>cos x je x-ová súradnica bodu na jednotkovej kružnici — tá je 0 v bodoch [0; 1] a [0; −1], teda pre x = π/2 a x = 3π/2. Tieto dve hodnoty sa líšia presne o π.</p><p>Riešenie: <strong>x = π/2 + kπ, k ∈ ℤ</strong>.</p></div>",
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
          "Vzorec môžem použiť bez ohľadu na tvar výrazu.",
          "Najprv určím, či sa vzorec na daný tvar hodí, potom ho použijem.",
          "Stačí upravovať iba číselné hodnoty.",
          "Kontrola výsledku nie je potrebná."
        ],
        "answer": 1,
        "correct": "Vzorec je nástroj s konkrétnou štruktúrou a podmienkami.",
        "hint": "Vzorec nie je kúzelná skratka."
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Rieš ručne",
        "html": "<p>Vytvor v zošite jeden vlastný príklad k téme <strong>Jednoduché goniometrické rovnice</strong>. Každý krok označ vzťahom alebo dôvodom, ktorý používaš.</p>",
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
          "hneď dosadiť do náhodného vzorca",
          "vybrať najdlhšiu odpoveď",
          "preložiť zadanie do známych pojmov a vzťahov",
          "ignorovať interval alebo podmienky"
        ],
        "answer": 2,
        "correct": "Najprv rozpoznaj matematickú štruktúru úlohy.",
        "hint": "Formát testu nemení matematiku."
      },
      {
        "id": "clean",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Jednoduché goniometrické rovnice",
        "html": "<p><strong>TOTO SI ZAPÍŠ DO ZOŠITA:</strong></p><p><strong>Jednoduché goniometrické rovnice</strong></p><div class=\"formula\">sin x = 0 ⇔ x = kπ, k ∈ ℤ.</div><div class=\"formula\">cos x = 0 ⇔ x = π/2 + kπ, k ∈ ℤ.</div><div class=\"formula\">tg x = 0 ⇔ x = kπ, k ∈ ℤ.</div><p>Pri riešení na zadanom intervale z všeobecných riešení vyberieme iba tie, ktoré do intervalu patria.</p>",
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
