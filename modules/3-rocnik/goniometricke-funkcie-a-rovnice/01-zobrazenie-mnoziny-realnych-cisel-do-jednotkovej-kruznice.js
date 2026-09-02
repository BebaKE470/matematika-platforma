MathPlatform.registerModule({
  "id": "3-u01-h001",
  "teacher": {
    "placement": "3. ročník · Goniometrické funkcie, goniometrické, rovnice · Hodina 1 · Zobrazenie množiny reálnych čísel do jednotkovej kružnice",
    "prerequisites": [
      "goniometrické funkcie ostrého uhla z 2. ročníka",
      "práca s grafom funkcie z 2. ročníka",
      "π a základné algebraické úpravy z predchádzajúceho štúdia"
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
      "poznať jednotkovú kružnicu",
      "zobraziť základné reálne čísla na kružnici",
      "vysvetliť periodicitu zobrazenia"
    ],
    "competencies": [
      "prepájať obrázok, slovný opis a symbolický zápis",
      "pracovať ručne v zošite a zdôvodniť postup",
      "rozlíšiť údaj, vzťah a záver"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie: reprezentácie, modelovanie, presný matematický jazyk a argumentácia.",
      "Orientovaný uhol, jednotková kružnica, oblúková miera a radián sú prirodzeným obohatením tejto témy."
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
    "title": "Reálne čísla na kružnici",
    "subtitle": "Číselná os sa zatočí do kruhu",
    "intro": "Pracuj postupne: najprv význam a obrázok, potom zápis a až potom samostatná úloha.",
    "estimatedTime": "18–24 min",
    "activities": [
      {
        "id": "start",
        "type": "info",
        "phase": "NOVÁ MYŠLIENKA",
        "title": "Od číselnej osi ku kružnici",
        "html": "<p>Začneme v bode <strong>A=[1;0]</strong>. Reálne číslo budeme chápať ako <strong>orientovanú dĺžku oblúka</strong> na kružnici s polomerom 1.</p><div class=\"coordinate-wrap\"><svg class=\"coordinate-plot\" viewBox=\"0 0 520 360\" role=\"img\" aria-label=\"Jednotková kružnica\"><line x1=\"50\" y1=\"180\" x2=\"470\" y2=\"180\" class=\"plot-axis\"/><line x1=\"260\" y1=\"25\" x2=\"260\" y2=\"335\" class=\"plot-axis\"/><circle cx=\"260\" cy=\"180\" r=\"125\" fill=\"none\" stroke=\"#173d35\" stroke-width=\"4\"/><circle cx=\"385\" cy=\"180\" r=\"6\" class=\"plot-point\"/><circle cx=\"260\" cy=\"55\" r=\"6\" class=\"plot-point\"/><circle cx=\"135\" cy=\"180\" r=\"6\" class=\"plot-point\"/><circle cx=\"260\" cy=\"305\" r=\"6\" class=\"plot-point\"/><text x=\"392\" y=\"174\" class=\"plot-point-label\">0, 2π</text><text x=\"270\" y=\"48\" class=\"plot-point-label\">π/2</text><text x=\"105\" y=\"174\" class=\"plot-point-label\">π</text><text x=\"270\" y=\"325\" class=\"plot-point-label\">3π/2</text><text x=\"445\" y=\"170\" class=\"plot-axis-name\">x</text><text x=\"270\" y=\"38\" class=\"plot-axis-name\">y</text></svg></div><p><strong>Kladný smer</strong> je proti smeru hodinových ručičiek, záporný smer opačne.</p>"
      },
      {
        "id": "radian",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Radián a oblúková miera",
        "html": "<p>Na jednotkovej kružnici číselná hodnota uhla v <strong>radiánoch</strong> zodpovedá dĺžke príslušného oblúka. Celý obeh má dĺžku <strong>2π</strong>.</p><p>Preto π/2 je štvrť obratu, π pol obratu a 2π celý obrat.</p>",
        "remember": "Najprv rozumej pohybu po kružnici; sin a cos budeme definovať až v nasledujúcich hodinách."
      },
      {
        "id": "dir",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "jednotková kružnica",
        "question": "Kam sa z bodu [1;0] pohybujeme pri kladnom čísle?",
        "options": [
          "proti smeru hodinových ručičiek",
          "v smere hodinových ručičiek",
          "po priemere",
          "smer nie je určený"
        ],
        "answer": 0,
        "correct": "Kladný smer je proti smeru hodinových ručičiek.",
        "hint": "Pozri na dohodnutú orientáciu."
      },
      {
        "id": "quarter",
        "type": "choice",
        "phase": "PREPOJ",
        "skill": "radiány",
        "question": "Ktoré číslo nás po štvrťobrátke dostane do horného bodu kružnice?",
        "options": [
          "π/2",
          "π",
          "2π",
          "−π"
        ],
        "answer": 0,
        "correct": "Štvrť z 2π je π/2.",
        "hint": "Celý obeh je 2π."
      },
      {
        "id": "same",
        "type": "explain",
        "phase": "SÚVISLOSŤ",
        "title": "Jeden bod, viac čísel",
        "html": "<p>Po celom obehu sa vrátime do toho istého bodu. Preto čísla <strong>x</strong>, <strong>x+2π</strong>, <strong>x−2π</strong> zobrazia ten istý bod.</p>",
        "remember": "Všeobecne x+2kπ, kde k je celé číslo, určuje ten istý bod."
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "PRACOVNÝ ZÁPIS",
        "title": "Nakresli vlastnú jednotkovú kružnicu",
        "html": "<p>Nakresli osi, kružnicu so stredom O a r=1. Vyznač 0, π/2, π, 3π/2, 2π a −π/2. Šípkou označ kladný smer.</p>",
        "model": "Skontroluj najmä: 0 a 2π sú v bode [1;0]; π/2 hore; π vľavo; 3π/2 dole; −π/2 dole."
      },
      {
        "id": "arg",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "title": "Prečo x a x+2π skončia rovnako?",
        "prompt": "Napíš jednu presnú vetu.",
        "model": "Pripočítanie 2π znamená jeden celý obeh po jednotkovej kružnici, preto sa po ňom dostaneme do toho istého bodu."
      },
      {
        "id": "clean",
        "type": "notebook",
        "phase": "ČISTÝ ZÁPIS",
        "title": "Jednotková kružnica",
        "html": "<p><strong>TEÓRIA:</strong> Jednotková kružnica má stred O=[0;0] a polomer 1. Reálne číslo x zobrazujeme od bodu [1;0] ako orientovaný oblúk dĺžky |x|. Kladný smer je proti smeru hodinových ručičiek.</p>",
        "model": "Doplň: celý obeh = 2π rad; x a x+2kπ určujú ten istý bod."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Pri každej zručnosti označ, ako sa teraz cítiš.",
        "skills": [
          "rozumiem orientácii na jednotkovej kružnici",
          "viem umiestniť základné násobky π",
          "viem vysvetliť, prečo jednému bodu patrí viac reálnych čísel"
        ]
      }
    ]
  }
});
