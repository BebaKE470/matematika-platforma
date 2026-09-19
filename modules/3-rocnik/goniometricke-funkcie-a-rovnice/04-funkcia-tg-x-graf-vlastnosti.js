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
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Z predchádzajúcich hodín už vieš, že <strong>sin x</strong> a <strong>cos x</strong> sú súradnice bodu na jednotkovej kružnici, ktorý zodpovedá číslu x.</p><p>Dnes z nich zostavíme ďalšiu funkciu — <strong>tg x</strong> — ako ich podiel.</p>"
      },
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
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "zadefinovať funkciu tg x",
          "načrtnúť jej graf a opísať vlastnosti"
        ]
      },
      {
        "id": "define",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Funkcia tg x",
        "html": "<p>Pre reálne číslo x najprv nájdeme príslušný bod jednotkovej kružnice.</p><div class=\"formula\">tg x = sin x / cos x</div><p>Hodnoty tg x neexistujú tam, kde cos x=0.</p>",
        "remember": "Najprv definícia na kružnici, až potom vlastnosti grafu."
      },
      {
        "id": "visual",
        "type": "coordinatePlot",
        "phase": "VIZUALIZÁCIA",
        "title": "Graf tg x",
        "html": "<p>Graf je záznam toho, ako sa hodnota mení pri pohybe x po reálnej osi. Tam, kde je cos x = 0, funkcia nie je definovaná — graf sa k tomuto miestu len približuje (prerušovaná čiara).</p>",
        "xMin": -1.5707963267948966, "xMax": 4.71238898038469, "yMin": -4, "yMax": 4,
        "xStep": 1.5707963267948966, "yStep": 2,
        "xTickFormat": v => (({ '-1': '−π/2', '0': '0', '1': 'π/2', '2': 'π', '3': '3π/2' })[String(Math.round(v / (Math.PI / 2)))] ?? String(v)),
        "asymptotes": [Math.PI / 2],
        "curves": [{ "fn": x => { const y = Math.tan(x); return Math.abs(y) > 4.3 ? NaN : y; }, "label": "tg x" }],
        "points": [
          { "x": Math.PI / 4, "y": 1, "label": "(π/4; 1)" },
          { "x": 0, "y": 0, "label": "(0; 0)" }
        ],
        "ariaLabel": "Graf funkcie tg x s dvoma zvislými asymptotami"
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
        "html": "<p><strong>TOTO SI ZAPÍŠ DO ZOŠITA:</strong></p><p><strong>FUNKCIA y = tg x</strong></p><p>Pre cos x ≠ 0 platí <strong>tg x = sin x / cos x</strong>.</p><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Definičný obor</div><p class=\"term-rule\">D(tg) = ℝ \ {π/2 + kπ; k ∈ ℤ}</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Obor hodnôt</div><p class=\"term-rule\">H(tg) = ℝ</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Perióda</div><p class=\"term-rule\">π, teda tg(x + kπ) = tg x, k ∈ ℤ.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Nuly</div><p class=\"term-rule\">x = kπ, k ∈ ℤ.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Nepárnosť</div><p class=\"term-rule\">tg(−x) = −tg x.</p></div></div><p>Priamky x = π/2 + kπ sú zvislé asymptoty grafu funkcie tg x.</p>",
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
