MathPlatform.registerModule({
  "id": "3-u01-h012",
  "teacher": {
    "placement": "3. ročník · Goniometrické funkcie, goniometrické, rovnice · Hodina 12 · Súčet a rozdiel funkcií rôznych hodnôt",
    "prerequisites": [
      "goniometrické funkcie ostrého uhla z 2. ročníka",
      "práca s grafom funkcie z 2. ročníka",
      "π a základné algebraické úpravy z predchádzajúceho štúdia",
      "učivo hodín 1–11"
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
    "title": "Súčet a rozdiel hodnôt",
    "subtitle": "Vzťah → význam → ručný postup → zdôvodnenie",
    "intro": "Pracuj postupne: najprv význam a obrázok, potom zápis a až potom samostatná úloha.",
    "estimatedTime": "18–24 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Na Hodine 10 sme sa naučili súčtové vzorce pre sin(α+β) a cos(α+β).</p><p>Dnes ideme opačným smerom: zo <strong>súčtu</strong> alebo <strong>rozdielu</strong> dvoch hodnôt sínusu/kosínusu urobíme <strong>súčin</strong> — hodí sa to napríklad na zjednodušenie výrazu.</p>"
      },
      {
        "id": "recall",
        "type": "choice",
        "phase": "OPAKUJ",
        "skill": "goniometria",
        "question": "Čo je pri novej goniometrickej úprave najdôležitejšie?",
        "options": [
          "preskočiť podmienky",
          "použiť čo najviac vzorcov",
          "vedieť, z ktorého už známeho vzťahu vychádzam",
          "pracovať iba podľa obrázka"
        ],
        "answer": 2,
        "correct": "Nový krok musí nadväzovať na už zavedený vzťah.",
        "hint": "Hľadaj zdôvodnenie."
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "zapísať vzorce pre súčet a rozdiel sin/cos",
          "použiť ich na zjednodušenie výrazu",
          "overiť výsledok na konkrétnom príklade"
        ]
      },
      {
        "id": "intro",
        "type": "explain",
        "phase": "NOVÝ KROK",
        "title": "Súčet a rozdiel hodnôt",
        "html": "<p>Vzťahy pre súčet/rozdiel goniometrických funkcií používame až po zvládnutí súčtových vzorcov.</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>sin 90° + sin 30° = 2 sin(<span class=\"frac\"><span class=\"frac-num\">90°+30°</span><span class=\"frac-den\">2</span></span>) cos(<span class=\"frac\"><span class=\"frac-num\">90°−30°</span><span class=\"frac-den\">2</span></span>) = 2 sin 60° cos 30°</p><p>= 2 · <span class=\"frac\"><span class=\"frac-num\">√3</span><span class=\"frac-den\">2</span></span> · <span class=\"frac\"><span class=\"frac-num\">√3</span><span class=\"frac-den\">2</span></span> = <strong><span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">2</span></span></strong></p><p>Kontrola: sin 90° + sin 30° = 1 + <span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">2</span></span> = <span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">2</span></span> ✓</p></div>",
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
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Súčet a rozdiel funkcií rôznych hodnôt",
        "html": "<p><strong>TOTO SI ZAPÍŠ DO ZOŠITA:</strong></p><p><strong>Súčet a rozdiel sínusov a kosínusov</strong></p><div class=\"formula\">sin α + sin β = 2 sin(<span class=\"frac\"><span class=\"frac-num\">α+β</span><span class=\"frac-den\">2</span></span>) cos(<span class=\"frac\"><span class=\"frac-num\">α−β</span><span class=\"frac-den\">2</span></span>)<span class=\"formula-note\">sin α − sin β = 2 cos(<span class=\"frac\"><span class=\"frac-num\">α+β</span><span class=\"frac-den\">2</span></span>) sin(<span class=\"frac\"><span class=\"frac-num\">α−β</span><span class=\"frac-den\">2</span></span>)</span></div><div class=\"formula\">cos α + cos β = 2 cos(<span class=\"frac\"><span class=\"frac-num\">α+β</span><span class=\"frac-den\">2</span></span>) cos(<span class=\"frac\"><span class=\"frac-num\">α−β</span><span class=\"frac-den\">2</span></span>)<span class=\"formula-note\">cos α − cos β = −2 sin(<span class=\"frac\"><span class=\"frac-num\">α+β</span><span class=\"frac-den\">2</span></span>) sin(<span class=\"frac\"><span class=\"frac-num\">α−β</span><span class=\"frac-den\">2</span></span>)</span></div>",
        "model": "Zápis do zošita musí byť použiteľný aj o týždeň: názov, vzťah, podmienky, krátky vzorový príklad."
      },
      {
        "id": "check",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "vzťahy",
        "question": "Ktoré tvrdenie vystihuje správnu prácu so vzorcom?",
        "options": [
          "Kontrola výsledku nie je potrebná.",
          "Vzorec môžem použiť bez ohľadu na tvar výrazu.",
          "Stačí upravovať iba číselné hodnoty.",
          "Najprv určím, či sa vzorec na daný tvar hodí, potom ho použijem."
        ],
        "answer": 3,
        "correct": "Vzorec je nástroj s konkrétnou štruktúrou a podmienkami.",
        "hint": "Vzorec nie je kúzelná skratka."
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Rieš ručne",
        "html": "<p>Vytvor v zošite jeden vlastný príklad k téme <strong>Súčet a rozdiel funkcií rôznych hodnôt</strong>. Každý krok označ vzťahom alebo dôvodom, ktorý používaš.</p>",
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
