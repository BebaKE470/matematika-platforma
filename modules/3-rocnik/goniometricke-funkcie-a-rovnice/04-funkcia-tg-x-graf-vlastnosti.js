MathPlatform.registerModule({
  "id": "3-u01-h004",
  "teacher": {
    "placement": "3. ročník · Goniometrické funkcie, goniometrické, rovnice · Hodina 4 · Funkcia tg x, graf, vlastnosti",
    "prerequisites": [
      "goniometrické funkcie ostrého uhla z 2. ročníka",
      "práca s grafom funkcie z 2. ročníka",
      "π a základné algebraické úpravy z predchádzajúceho štúdia",
      "obsah hodín 1–3"
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
      "zadefinovať funkciu tg x",
      "načrtnúť jej graf a opísať vlastnosti"
    ],
    "competencies": [
      "prepájať obrázok, slovný opis a symbolický zápis",
      "pracovať ručne v zošite a zdôvodniť postup",
      "rozlíšiť údaj, vzťah a záver"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie: reprezentácie, modelovanie, presný matematický jazyk a argumentácia.",
      "Periodickosť a symetria sa zdôvodňujú pohybom na jednotkovej kružnici."
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
    "title": "Funkcia tg x",
    "subtitle": "Kružnica → hodnota → graf → vlastnosti",
    "intro": "Pracuj postupne: najprv význam a obrázok, potom zápis a až potom samostatná úloha.",
    "estimatedTime": "18–24 min",
    "activities": [
      {
        "id": "recall",
        "type": "choice",
        "phase": "OPAKUJ",
        "skill": "jednotková kružnica",
        "question": "Koľko radiánov má celý obeh po jednotkovej kružnici?",
        "options": [
          "π/2",
          "π",
          "4π",
          "2π"
        ],
        "answer": 3,
        "correct": "Celý obeh má 2π radiánov.",
        "hint": "Obvod jednotkovej kružnice je 2π."
      },
      {
        "id": "define",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Funkcia tg x",
        "html": "<p>Pre reálne číslo x najprv nájdeme príslušný bod jednotkovej kružnice. Hodnota <strong>tg x</strong> je určená takto: <strong>podiel sin x / cos x</strong>.</p><p>Hodnoty tg x neexistujú tam, kde cos x=0.</p>",
        "remember": "Najprv definícia na kružnici, až potom vlastnosti grafu."
      },
      {
        "id": "visual",
        "type": "info",
        "phase": "VIZUALIZÁCIA",
        "title": "Graf tg x",
        "html": "<div class=\"coordinate-wrap\"><svg class=\"coordinate-plot\" viewBox=\"0 0 500 330\" role=\"img\"><line x1=\"40\" y1=\"180\" x2=\"470\" y2=\"180\" class=\"plot-axis\"/><line x1=\"50\" y1=\"40\" x2=\"50\" y2=\"300\" class=\"plot-axis\"/><line x1=\"250\" y1=\"45\" x2=\"250\" y2=\"300\" stroke=\"#9b6b2f\" stroke-width=\"2\" stroke-dasharray=\"7 7\"/><polyline points=\"50.0,180.0 54.6,179.4 59.2,178.9 63.8,178.3 68.5,177.7 73.1,177.1 77.7,176.5 82.3,175.9 86.9,175.3 91.5,174.7 96.2,174.0 100.8,173.4 105.4,172.7 110.0,172.0 114.6,171.2 119.2,170.5 123.8,169.7 128.5,168.8 133.1,167.9 137.7,167.0 142.3,166.0 146.9,165.0 151.5,163.8 156.2,162.6 160.8,161.3 165.4,159.9 170.0,158.3 174.6,156.5 179.2,154.6 183.8,152.4 188.5,149.9 193.1,147.1 197.7,143.8 202.3,139.9 206.9,135.1 211.5,129.4 216.2,122.0 220.8,112.5 225.4,99.4 230.0,80.3 234.6,50.0\" fill=\"none\" stroke=\"#173d35\" stroke-width=\"4\" stroke-linecap=\"round\"/><text x=\"455\" y=\"170\" class=\"plot-axis-name\">x</text><text x=\"60\" y=\"50\" class=\"plot-axis-name\">y</text></svg></div><p>Graf je záznam toho, ako sa hodnota mení pri pohybe x po reálnej osi.</p>"
      },
      {
        "id": "value",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "tg",
        "question": "Ktorý zápis je správny? (tg(π/4)=1)",
        "options": [
          "tg(π/4)=1",
          "tg(π/4)=0",
          "tg(π/4)=2",
          "hodnota sa nedá určiť"
        ],
        "answer": 0,
        "correct": "Vyplýva to z polohy bodu na jednotkovej kružnici.",
        "hint": "Vráť sa k definícii pomocou súradnice/podielu."
      },
      {
        "id": "props",
        "type": "explain",
        "phase": "VLASTNOSTI",
        "title": "Čítame vlastnosti",
        "html": "<p>Pri grafe sleduj definičný obor, obor hodnôt, periodicitu, nuly, znamienko a symetriu. Pri tg x tieto vlastnosti <strong>odčítame a zdôvodníme z kružnice a grafu</strong>, nie iba naučíme naspamäť.</p>",
        "remember": "Každú vlastnosť vedz ukázať na grafe."
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "PRACOVNÝ ZÁPIS",
        "title": "Načrtni graf tg x",
        "html": "<p>V zošite vyznač základné body/asymptoty podľa potreby a načrtni graf na intervale od −2π do 2π. Potom pod graf zapíš tri vlastnosti, ktoré z neho vieš prečítať.</p>",
        "model": "Skontroluj základné hodnoty, periodicitu a symetriu. Pri tg/cotg nezabudni na body, v ktorých funkcia nie je definovaná."
      },
      {
        "id": "arg",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "title": "Vlastnosť z grafu",
        "prompt": "Vyber jednu vlastnosť funkcie tg x a zdôvodni ju pomocou jednotkovej kružnice alebo grafu.",
        "model": "Vzor: vlastnosť uvediem presne a potom odkážem na opakujúcu sa polohu bodu na kružnici alebo na konkrétnu symetriu/priebeh grafu."
      },
      {
        "id": "clean",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "tg x – definícia a vlastnosti",
        "html": "<p><strong>TOTO SI ZAPÍŠ DO ZOŠITA:</strong></p><p><strong>FUNKCIA y = tg x</strong></p><p>Pre cos x ≠ 0 platí <strong>tg x = sin x / cos x</strong>.</p><p><strong>Definičný obor:</strong> D(tg) = ℝ \ {π/2 + kπ; k ∈ ℤ}<br><strong>Obor hodnôt:</strong> H(tg) = ℝ<br><strong>Perióda:</strong> π, teda tg(x + kπ) = tg x, k ∈ ℤ.<br><strong>Nuly:</strong> x = kπ, k ∈ ℤ.<br><strong>Nepárnosť:</strong> tg(−x) = −tg x.</p><p>Priamky x = π/2 + kπ sú zvislé asymptoty grafu funkcie tg x.</p>",
        "model": "Teoretický zápis je zobrazený celý v poli html; model sa v zjednodušenom notebook rendereri nezobrazuje."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Pri každej zručnosti označ, ako sa teraz cítiš.",
        "skills": [
          "viem vysvetliť definíciu tg x",
          "viem načrtnúť graf tg x",
          "viem z grafu zdôvodniť vlastnosti"
        ]
      }
    ]
  }
});
