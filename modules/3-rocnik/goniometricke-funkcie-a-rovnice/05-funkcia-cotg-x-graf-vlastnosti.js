MathPlatform.registerModule({
  "id": "3-u01-h005",
  "teacher": {
    "placement": "3. ročník · Goniometrické funkcie, goniometrické, rovnice · Hodina 5 · Funkcia cotg x, graf, vlastnosti",
    "prerequisites": [
      "goniometrické funkcie ostrého uhla z 2. ročníka",
      "práca s grafom funkcie z 2. ročníka",
      "π a základné algebraické úpravy z predchádzajúceho štúdia",
      "obsah hodín 1–4"
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
      "zadefinovať funkciu cotg x",
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
    "title": "Funkcia cotg x",
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
          "2π",
          "π",
          "4π"
        ],
        "answer": 1,
        "correct": "Celý obeh má 2π radiánov.",
        "hint": "Obvod jednotkovej kružnice je 2π."
      },
      {
        "id": "define",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Funkcia cotg x",
        "html": "<p>Pre reálne číslo x najprv nájdeme príslušný bod jednotkovej kružnice. Hodnota <strong>cotg x</strong> je určená takto: <strong>podiel cos x / sin x</strong>.</p><p>Hodnoty cotg x neexistujú tam, kde sin x=0.</p>",
        "remember": "Najprv definícia na kružnici, až potom vlastnosti grafu."
      },
      {
        "id": "visual",
        "type": "info",
        "phase": "VIZUALIZÁCIA",
        "title": "Graf cotg x",
        "html": "<div class=\"coordinate-wrap\"><svg class=\"coordinate-plot\" viewBox=\"0 0 500 330\" role=\"img\"><line x1=\"40\" y1=\"180\" x2=\"470\" y2=\"180\" class=\"plot-axis\"/><line x1=\"50\" y1=\"40\" x2=\"50\" y2=\"300\" class=\"plot-axis\"/><line x1=\"250\" y1=\"45\" x2=\"250\" y2=\"300\" stroke=\"#9b6b2f\" stroke-width=\"2\" stroke-dasharray=\"7 7\"/><polyline points=\"65.3,49.1 69.9,79.8 74.5,99.1 79.1,112.2 83.8,121.9 88.4,129.2 93.0,135.1 97.6,139.8 102.2,143.7 106.8,147.0 111.5,149.9 116.1,152.4 120.7,154.6 125.3,156.5 129.9,158.3 134.5,159.8 139.2,161.3 143.8,162.6 148.4,163.8 153.0,165.0 157.6,166.0 162.3,167.0 166.9,167.9 171.5,168.8 176.1,169.7 180.7,170.5 185.3,171.2 190.0,172.0 194.6,172.7 199.2,173.3 203.8,174.0 208.4,174.7 213.1,175.3 217.7,175.9 222.3,176.5 226.9,177.1 231.5,177.7 236.1,178.3 240.8,178.9 245.4,179.4 250.0,180.0\" fill=\"none\" stroke=\"#173d35\" stroke-width=\"4\" stroke-linecap=\"round\"/><text x=\"455\" y=\"170\" class=\"plot-axis-name\">x</text><text x=\"60\" y=\"50\" class=\"plot-axis-name\">y</text></svg></div><p>Graf je záznam toho, ako sa hodnota mení pri pohybe x po reálnej osi.</p>"
      },
      {
        "id": "value",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "cotg",
        "question": "Ktorý zápis je správny? (cotg(π/4)=1)",
        "options": [
          "cotg(π/4)=2",
          "cotg(π/4)=0",
          "cotg(π/4)=1",
          "hodnota sa nedá určiť"
        ],
        "answer": 2,
        "correct": "Vyplýva to z polohy bodu na jednotkovej kružnici.",
        "hint": "Vráť sa k definícii pomocou súradnice/podielu."
      },
      {
        "id": "props",
        "type": "explain",
        "phase": "VLASTNOSTI",
        "title": "Čítame vlastnosti",
        "html": "<p>Pri grafe sleduj definičný obor, obor hodnôt, periodicitu, nuly, znamienko a symetriu. Pri cotg x tieto vlastnosti <strong>odčítame a zdôvodníme z kružnice a grafu</strong>, nie iba naučíme naspamäť.</p>",
        "remember": "Každú vlastnosť vedz ukázať na grafe."
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "PRACOVNÝ ZÁPIS",
        "title": "Načrtni graf cotg x",
        "html": "<p>V zošite vyznač základné body/asymptoty podľa potreby a načrtni graf na intervale od −2π do 2π. Potom pod graf zapíš tri vlastnosti, ktoré z neho vieš prečítať.</p>",
        "model": "Skontroluj základné hodnoty, periodicitu a symetriu. Pri tg/cotg nezabudni na body, v ktorých funkcia nie je definovaná."
      },
      {
        "id": "arg",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "title": "Vlastnosť z grafu",
        "prompt": "Vyber jednu vlastnosť funkcie cotg x a zdôvodni ju pomocou jednotkovej kružnice alebo grafu.",
        "model": "Vzor: vlastnosť uvediem presne a potom odkážem na opakujúcu sa polohu bodu na kružnici alebo na konkrétnu symetriu/priebeh grafu."
      },
      {
        "id": "clean",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "cotg x – definícia a vlastnosti",
        "html": "<p><strong>TOTO SI ZAPÍŠ DO ZOŠITA:</strong></p><p><strong>FUNKCIA y = cotg x</strong></p><p>Pre sin x ≠ 0 platí <strong>cotg x = cos x / sin x</strong>.</p><p><strong>Definičný obor:</strong> D(cotg) = ℝ \ {kπ; k ∈ ℤ}<br><strong>Obor hodnôt:</strong> H(cotg) = ℝ<br><strong>Perióda:</strong> π, teda cotg(x + kπ) = cotg x, k ∈ ℤ.<br><strong>Nuly:</strong> x = π/2 + kπ, k ∈ ℤ.<br><strong>Nepárnosť:</strong> cotg(−x) = −cotg x.</p><p>Priamky x = kπ sú zvislé asymptoty grafu funkcie cotg x.</p>",
        "model": "Teoretický zápis je zobrazený celý v poli html; model sa v zjednodušenom notebook rendereri nezobrazuje."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Pri každej zručnosti označ, ako sa teraz cítiš.",
        "skills": [
          "viem vysvetliť definíciu cotg x",
          "viem načrtnúť graf cotg x",
          "viem z grafu zdôvodniť vlastnosti"
        ]
      }
    ]
  }
});
