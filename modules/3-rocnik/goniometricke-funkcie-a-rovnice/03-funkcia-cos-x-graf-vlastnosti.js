MathPlatform.registerModule({
  "id": "3-u01-h003",
  "teacher": {
    "placement": "3. ročník · Goniometrické funkcie, goniometrické, rovnice · Hodina 3 · Funkcia cos x, graf, vlastnosti",
    "prerequisites": [
      "goniometrické funkcie ostrého uhla z 2. ročníka",
      "práca s grafom funkcie z 2. ročníka",
      "π a základné algebraické úpravy z predchádzajúceho štúdia",
      "obsah hodín 1–2"
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
      "zadefinovať funkciu cos x",
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
    "title": "Funkcia cos x",
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
        "title": "Funkcia cos x",
        "html": "<p>Pre reálne číslo x najprv nájdeme príslušný bod jednotkovej kružnice. Hodnota <strong>cos x</strong> je určená takto: <strong>x-ová súradnica</strong>.</p><p>Funkcia je definovaná pre každé reálne x.</p>",
        "remember": "Najprv definícia na kružnici, až potom vlastnosti grafu."
      },
      {
        "id": "visual",
        "type": "info",
        "phase": "VIZUALIZÁCIA",
        "title": "Graf cos x",
        "html": "<div class=\"coordinate-wrap\"><svg class=\"coordinate-plot\" viewBox=\"0 0 560 300\" role=\"img\" aria-label=\"Graf funkcie cos x na intervale od 0 do 2π\"><line x1=\"60\" y1=\"20\" x2=\"60\" y2=\"280\" class=\"plot-axis\"/><line x1=\"40\" y1=\"150\" x2=\"540\" y2=\"150\" class=\"plot-axis\"/><line x1=\"60\" y1=\"60\" x2=\"520\" y2=\"60\" class=\"plot-grid\" stroke-dasharray=\"4 4\"/><line x1=\"60\" y1=\"240\" x2=\"520\" y2=\"240\" class=\"plot-grid\" stroke-dasharray=\"4 4\"/><polyline points=\"60.0,60.0 79.2,63.1 98.3,72.1 117.5,86.4 136.7,105.0 155.8,126.7 175.0,150.0 194.2,173.3 213.3,195.0 232.5,213.6 251.7,227.9 270.8,236.9 290.0,240.0 309.2,236.9 328.3,227.9 347.5,213.6 366.7,195.0 385.8,173.3 405.0,150.0 424.2,126.7 443.3,105.0 462.5,86.4 481.7,72.1 500.8,63.1 520.0,60.0\" fill=\"none\" stroke=\"#173d35\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"175\" cy=\"150\" r=\"6\" class=\"plot-point\"/><circle cx=\"290\" cy=\"240\" r=\"6\" class=\"plot-point\"/><circle cx=\"405\" cy=\"150\" r=\"6\" class=\"plot-point\"/><text x=\"55\" y=\"172\" text-anchor=\"end\" class=\"plot-label\">0</text><text x=\"175\" y=\"172\" text-anchor=\"middle\" class=\"plot-label\">π/2</text><text x=\"290\" y=\"172\" text-anchor=\"middle\" class=\"plot-label\">π</text><text x=\"405\" y=\"172\" text-anchor=\"middle\" class=\"plot-label\">3π/2</text><text x=\"520\" y=\"172\" text-anchor=\"middle\" class=\"plot-label\">2π</text><text x=\"46\" y=\"65\" text-anchor=\"end\" class=\"plot-label\">1</text><text x=\"46\" y=\"245\" text-anchor=\"end\" class=\"plot-label\">−1</text><text x=\"188\" y=\"142\" class=\"plot-point-label\">(π/2; 0)</text><text x=\"296\" y=\"258\" class=\"plot-point-label\">(π; −1)</text><text x=\"418\" y=\"142\" class=\"plot-point-label\">(3π/2; 0)</text><text x=\"528\" y=\"146\" class=\"plot-axis-name\">x</text><text x=\"68\" y=\"30\" class=\"plot-axis-name\">y</text></svg></div><p>Graf je záznam toho, ako sa hodnota mení pri pohybe x po reálnej osi.</p>"
      },
      {
        "id": "value",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "cos",
        "question": "Ktorý zápis je správny? (cos(π)=−1)",
        "options": [
          "cos(π)=2",
          "cos(π)=0",
          "cos(π)=−1",
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
        "html": "<p>Pri grafe sleduj definičný obor, obor hodnôt, periodicitu, nuly, znamienko a symetriu. Pri cos x tieto vlastnosti <strong>odčítame a zdôvodníme z kružnice a grafu</strong>, nie iba naučíme naspamäť.</p>",
        "remember": "Každú vlastnosť vedz ukázať na grafe."
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "PRACOVNÝ ZÁPIS",
        "title": "Načrtni graf cos x",
        "html": "<p>V zošite vyznač základné body/asymptoty podľa potreby a načrtni graf na intervale od −2π do 2π. Potom pod graf zapíš tri vlastnosti, ktoré z neho vieš prečítať.</p>",
        "model": "Skontroluj základné hodnoty, periodicitu a symetriu. Pri tg/cotg nezabudni na body, v ktorých funkcia nie je definovaná."
      },
      {
        "id": "arg",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "title": "Vlastnosť z grafu",
        "prompt": "Vyber jednu vlastnosť funkcie cos x a zdôvodni ju pomocou jednotkovej kružnice alebo grafu.",
        "model": "Vzor: vlastnosť uvediem presne a potom odkážem na opakujúcu sa polohu bodu na kružnici alebo na konkrétnu symetriu/priebeh grafu."
      },
      {
        "id": "clean",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "cos x – definícia a vlastnosti",
        "html": "<p><strong>TOTO SI ZAPÍŠ DO ZOŠITA:</strong></p><p><strong>FUNKCIA y = cos x</strong></p><p>Na jednotkovej kružnici je <strong>cos x</strong> x-ová súradnica bodu, ktorý zodpovedá číslu x.</p><p><strong>Definičný obor:</strong> D(cos) = ℝ<br><strong>Obor hodnôt:</strong> H(cos) = ⟨−1; 1⟩<br><strong>Perióda:</strong> 2π, teda cos(x + 2kπ) = cos x, k ∈ ℤ.<br><strong>Nuly:</strong> x = π/2 + kπ, k ∈ ℤ.<br><strong>Párnosť:</strong> cos(−x) = cos x.</p><p>Maximum funkcie je 1 pre x = 2kπ a minimum je −1 pre x = π + 2kπ, k ∈ ℤ.</p>",
        "model": "Teoretický zápis je zobrazený celý v poli html; model sa v zjednodušenom notebook rendereri nezobrazuje."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Pri každej zručnosti označ, ako sa teraz cítiš.",
        "skills": [
          "viem vysvetliť definíciu cos x",
          "viem načrtnúť graf cos x",
          "viem z grafu zdôvodniť vlastnosti"
        ]
      }
    ]
  }
});
