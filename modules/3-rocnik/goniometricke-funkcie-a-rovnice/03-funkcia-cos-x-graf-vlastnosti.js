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
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Z predchádzajúcich hodín už poznáš jednotkovú kružnicu a vieš, že <strong>sin x</strong> je y-ová súradnica bodu, ktorý na kružnici zodpovedá číslu x.</p><p>Vieš tiež, čo sú goniometrické funkcie ostrého uhla z 2. ročníka.</p><p>Dnes rovnakým spôsobom zadefinujeme <strong>cos x</strong> — tentokrát pomocou druhej súradnice toho istého bodu.</p>"
      },
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
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "zadefinovať funkciu cos x",
          "načrtnúť jej graf a opísať vlastnosti"
        ]
      },
      {
        "id": "define",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Funkcia cos x",
        "html": "<p>Pre reálne číslo x najprv nájdeme príslušný bod jednotkovej kružnice.</p><div class=\"formula\">cos x = x-ová súradnica tohto bodu</div><p>Funkcia je definovaná pre každé reálne x.</p>",
        "remember": "Najprv definícia na kružnici, až potom vlastnosti grafu."
      },
      {
        "id": "visual",
        "type": "coordinatePlot",
        "phase": "VIZUALIZÁCIA",
        "title": "Graf cos x",
        "html": "<p>Graf je záznam toho, ako sa hodnota mení pri pohybe x po reálnej osi.</p>",
        "xMin": 0, "xMax": 2 * Math.PI, "yMin": -1, "yMax": 1,
        "xStep": Math.PI / 2, "yStep": 1,
        "xTickFormat": v => (['0', 'π/2', 'π', '3π/2', '2π'][Math.round(v / (Math.PI / 2))] ?? String(v)),
        "curves": [{ "fn": x => Math.cos(x), "label": "cos x" }],
        "points": [
          { "x": Math.PI / 2, "y": 0, "label": "(π/2; 0)" },
          { "x": Math.PI, "y": -1, "label": "(π; −1)" },
          { "x": 3 * Math.PI / 2, "y": 0, "label": "(3π/2; 0)" }
        ],
        "ariaLabel": "Graf funkcie cos x na intervale od 0 do 2π"
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
        "html": "<p><strong>TOTO SI ZAPÍŠ DO ZOŠITA:</strong></p><p><strong>FUNKCIA y = cos x</strong></p><p>Na jednotkovej kružnici je <strong>cos x</strong> x-ová súradnica bodu, ktorý zodpovedá číslu x.</p><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Definičný obor</div><p class=\"term-rule\">D(cos) = ℝ</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Obor hodnôt</div><p class=\"term-rule\">H(cos) = ⟨−1; 1⟩</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Perióda</div><p class=\"term-rule\">2π, teda cos(x + 2kπ) = cos x, k ∈ ℤ.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Nuly</div><p class=\"term-rule\">x = π/2 + kπ, k ∈ ℤ.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Párnosť</div><p class=\"term-rule\">cos(−x) = cos x.</p></div></div><p>Maximum funkcie je 1 pre x = 2kπ a minimum je −1 pre x = π + 2kπ, k ∈ ℤ.</p>",
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
