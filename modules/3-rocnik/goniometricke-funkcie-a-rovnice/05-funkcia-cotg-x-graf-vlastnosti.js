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
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Z minulej hodiny vieš, že <strong>tg x = sin x / cos x</strong> a že táto funkcia nie je definovaná tam, kde cos x = 0.</p><p>Dnes zostavíme podobnú funkciu — <strong>cotg x</strong> — ako obrátený podiel.</p>"
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
          "zadefinovať funkciu cotg x",
          "načrtnúť jej graf a opísať vlastnosti"
        ]
      },
      {
        "id": "define",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Funkcia cotg x",
        "html": "<p>Pre reálne číslo x najprv nájdeme príslušný bod jednotkovej kružnice.</p><div class=\"formula\">cotg x = cos x / sin x</div><p>Hodnoty cotg x neexistujú tam, kde sin x=0.</p>",
        "remember": "Najprv definícia na kružnici, až potom vlastnosti grafu."
      },
      {
        "id": "visual",
        "type": "coordinatePlot",
        "phase": "VIZUALIZÁCIA",
        "title": "Graf cotg x",
        "html": "<p>Graf je záznam toho, ako sa hodnota mení pri pohybe x po reálnej osi. Tam, kde je sin x = 0, funkcia nie je definovaná — graf sa k tomuto miestu len približuje (prerušovaná čiara).</p>",
        "xMin": -1.5707963267948966, "xMax": 4.71238898038469, "yMin": -4, "yMax": 4,
        "xStep": 1.5707963267948966, "yStep": 2,
        "xTickFormat": v => (({ '-1': '−π/2', '0': '0', '1': 'π/2', '2': 'π', '3': '3π/2' })[String(Math.round(v / (Math.PI / 2)))] ?? String(v)),
        "asymptotes": [0, Math.PI],
        "curves": [{ "fn": x => { const y = 1 / Math.tan(x); return Math.abs(y) > 4.3 ? NaN : y; }, "label": "cotg x" }],
        "points": [
          { "x": Math.PI / 4, "y": 1, "label": "(π/4; 1)" },
          { "x": Math.PI / 2, "y": 0, "label": "(π/2; 0)" }
        ],
        "ariaLabel": "Graf funkcie cotg x s dvoma zvislými asymptotami"
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
        "html": "<p><strong>TOTO SI ZAPÍŠ DO ZOŠITA:</strong></p><p><strong>FUNKCIA y = cotg x</strong></p><p>Pre sin x ≠ 0 platí <strong>cotg x = cos x / sin x</strong>.</p><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Definičný obor</div><p class=\"term-rule\">D(cotg) = ℝ \ {kπ; k ∈ ℤ}</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Obor hodnôt</div><p class=\"term-rule\">H(cotg) = ℝ</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Perióda</div><p class=\"term-rule\">π, teda cotg(x + kπ) = cotg x, k ∈ ℤ.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Nuly</div><p class=\"term-rule\">x = π/2 + kπ, k ∈ ℤ.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Nepárnosť</div><p class=\"term-rule\">cotg(−x) = −cotg x.</p></div></div><p>Priamky x = kπ sú zvislé asymptoty grafu funkcie cotg x.</p>",
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
