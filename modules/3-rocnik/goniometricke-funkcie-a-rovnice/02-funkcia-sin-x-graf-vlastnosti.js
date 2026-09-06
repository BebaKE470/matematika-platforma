MathPlatform.registerModule({
  "id": "3-u01-h002",
  "teacher": {
    "placement": "3. ročník · Goniometrické funkcie, goniometrické, rovnice · Hodina 2 · Funkcia sin x, graf, vlastnosti",
    "prerequisites": [
      "jednotková kružnica, radián a oblúková miera, orientovaný oblúk a vzťah x ↔ x + 2kπ (Hodina 1 tohto tematického celku: Zobrazenie množiny reálnych čísel do jednotkovej kružnice)",
      "goniometrické funkcie ostrého uhla – sínus, kosínus, tangens, kotangens v pravouhlom trojuholníku (2. ročník)",
      "pojem funkcie, argument, funkčná hodnota, definičný obor D(f) a obor hodnôt H(f) (1. ročník)",
      "π, práca s intervalom a základné algebraické úpravy z predchádzajúceho štúdia"
    ],
    "planContent": [
      "Tematický plán 3. ročníka uvádza pre celý tematický celok Goniometrické funkcie, goniometrické rovnice spoločný obsahový štandard: „Jednotková kružnica; Grafy funkcií sin x, cos x, tg x, cotg x; Zložené goniometrické funkcie; Základné goniometrické vzorce; Súčtové vzorce; Vzorce pre dvojnásobný uhol; Súčet a rozdiel funkcií rôznych hodnôt; Úprava goniometrických výrazov; Goniometrické rovnice.“",
      "Pre hodinu 2 je z neho relevantná položka „Grafy funkcií sin x, cos x, tg x, cotg x“ – konkrétne jej časť týkajúca sa funkcie sin x; cos x, tg x a cotg x nasledujú v hodinách 3 – 5."
    ],
    "planPerformance": [
      "Tematický plán uvádza pre celý tematický celok spoločný výkonový štandard: „Poznať pojem jednotková kružnica. Vedieť zobraziť na jednotkovej kružnici ľubovoľné reálne číslo, priradiť reálne číslo ľubovoľnému bodu jednotkovej kružnice. Zadefinovať funkciu sin x a opísať jej vlastnosti. Zadefinovať funkciu cos x a opísať jej vlastnosti. Zadefinovať funkciu tg x a opísať jej vlastnosti. Zadefinovať funkciu cotg x a opísať jej vlastnosti. Poznať a vedieť použiť goniometrické vzorce. Vyriešiť goniometrickú rovnicu.“",
      "Pre hodinu 2 je relevantná položka „Zadefinovať funkciu sin x a opísať jej vlastnosti.“; definície cos x, tg x, cotg x nasledujú v hodinách 3 – 5."
    ],
    "goals": [
      "zadefinovať funkciu sin x pomocou jednotkovej kružnice (y-ová súradnica príslušného bodu)",
      "načrtnúť graf funkcie sin x na intervale ⟨0; 2π⟩ a rozšíriť ho na celé ℝ pomocou periodicity",
      "z jednotkovej kružnice alebo grafu odčítať a zdôvodniť definičný obor, obor hodnôt, periódu, nuly a nepárnosť funkcie sin x"
    ],
    "competencies": [
      "prepájať obrázok (jednotková kružnica, graf), slovný opis a symbolický zápis",
      "pracovať ručne v zošite a zdôvodniť postup pomocou kružnice alebo grafu",
      "rozlíšiť definíciu funkcie od jej vlastností, ktoré z nej vyplývajú"
    ],
    "enrichment": [
      "Návrh nového maturitného štandardu (komponent 2.1 „Funkcia ako matematický objekt“) je použitý iba ako obohatenie: interpretácia funkcie ako jednoznačného priradenia a argumentácia o vlastnostiach funkcie z jej grafu (definičný obor, obor hodnôt, nuly, párnosť/nepárnosť).",
      "Periodickosť a nepárnosť sa dnes zdôvodňujú priamo pohybom na jednotkovej kružnici, nie iba čítaním z hotového grafu."
    ],
    "flow": [
      "0–4 min: aktivácia – pripomenutie jednotkovej kružnice, radiánu a bodov 0, π/2, π, 3π/2, 2π z Hodiny 1.",
      "4–15 min: spoločné zavedenie definície sin x ako y-ovej súradnice bodu na kružnici; overenie hodnôt sin 0, sin(π/2), sin(3π/2) priamo na kružnici.",
      "15–22 min: pracovný zápis – náčrt jednotkovej kružnice so zvýraznenou y-ovou súradnicou pre 3–4 hodnoty x; prechod ku grafu sin x.",
      "22–37 min: interaktívna aplikácia – rovnaký typ overovania hodnôt a čítania vlastností z kružnice/grafu, s okamžitou spätnou väzbou (≈ 15–20 min).",
      "37–42 min: čistý zápis do zošita – definícia a vlastnosti funkcie sin x.",
      "42–45 min: spoločná syntéza, prepojenie na hodinu 3 (funkcia cos x)."
    ],
    "diagnostics": [
      "sleduj, či žiak rozumie významu symbolov sin x, D(sin), H(sin), nielen postupu",
      "či žiak nezamieňa definičný obor s oborom hodnôt (nadväzuje na 1. ročník)",
      "pri chybe sa vráť k obrázku jednotkovej kružnice alebo k definícii"
    ],
    "partialUse": [
      "Modul nie je povinné použiť celý; učiteľ môže vybrať iba definičnú, vizuálnu alebo diagnostickú časť.",
      "Zápis do zošita a reflexiu možno použiť samostatne aj na záver hodiny."
    ]
  },
  "student": {
    "title": "Funkcia sin x",
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
        "options": ["π/2", "2π", "π", "4π"],
        "answer": 1,
        "correct": "Celý obeh má 2π radiánov.",
        "hint": "Obvod jednotkovej kružnice je 2π."
      },
      {
        "id": "define",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Funkcia sin x",
        "html": "<p>Pre reálne číslo x nájdeme na jednotkovej kružnici bod, ktorý mu zodpovedá – presne tak, ako sme sa naučili v predchádzajúcej hodine (orientovaný oblúk od bodu [1; 0]).</p><p>Hodnota <strong>sin x</strong> je <strong>y-ová súradnica</strong> tohto bodu.</p><p>Keďže ku každému reálnemu číslu x vieme na kružnici nájsť práve jeden bod, funkcia sin x je definovaná pre každé reálne x: <strong>D(sin) = ℝ</strong>.</p>",
        "remember": "Najprv definícia na kružnici (bod → y-ová súradnica), až potom vlastnosti grafu."
      },
      {
        "id": "visual",
        "type": "info",
        "phase": "VIZUALIZÁCIA",
        "title": "Graf sin x na intervale ⟨0; 2π⟩",
        "html": "<div class=\"coordinate-wrap\"><svg class=\"coordinate-plot\" viewBox=\"0 0 560 300\" role=\"img\" aria-label=\"Graf funkcie sin x na intervale od 0 do 2π\"><line x1=\"60\" y1=\"20\" x2=\"60\" y2=\"280\" class=\"plot-axis\"/><line x1=\"40\" y1=\"150\" x2=\"540\" y2=\"150\" class=\"plot-axis\"/><line x1=\"60\" y1=\"60\" x2=\"520\" y2=\"60\" class=\"plot-grid\" stroke-dasharray=\"4 4\"/><line x1=\"60\" y1=\"240\" x2=\"520\" y2=\"240\" class=\"plot-grid\" stroke-dasharray=\"4 4\"/><polyline points=\"60.0,150.0 79.2,126.7 98.3,105.0 117.5,86.4 136.7,72.1 155.8,63.1 175.0,60.0 194.2,63.1 213.3,72.1 232.5,86.4 251.7,105.0 270.8,126.7 290.0,150.0 309.2,173.3 328.3,195.0 347.5,213.6 366.7,227.9 385.8,236.9 405.0,240.0 424.2,236.9 443.3,227.9 462.5,213.6 481.7,195.0 500.8,173.3 520.0,150.0\" fill=\"none\" stroke=\"#173d35\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"175\" cy=\"60\" r=\"6\" class=\"plot-point\"/><circle cx=\"290\" cy=\"150\" r=\"6\" class=\"plot-point\"/><circle cx=\"405\" cy=\"240\" r=\"6\" class=\"plot-point\"/><text x=\"55\" y=\"172\" text-anchor=\"end\" class=\"plot-label\">0</text><text x=\"175\" y=\"172\" text-anchor=\"middle\" class=\"plot-label\">π/2</text><text x=\"290\" y=\"172\" text-anchor=\"middle\" class=\"plot-label\">π</text><text x=\"405\" y=\"172\" text-anchor=\"middle\" class=\"plot-label\">3π/2</text><text x=\"520\" y=\"172\" text-anchor=\"middle\" class=\"plot-label\">2π</text><text x=\"46\" y=\"65\" text-anchor=\"end\" class=\"plot-label\">1</text><text x=\"46\" y=\"245\" text-anchor=\"end\" class=\"plot-label\">−1</text><text x=\"188\" y=\"52\" class=\"plot-point-label\">(π/2; 1)</text><text x=\"296\" y=\"144\" class=\"plot-point-label\">(π; 0)</text><text x=\"340\" y=\"258\" class=\"plot-point-label\">(3π/2; −1)</text><text x=\"528\" y=\"146\" class=\"plot-axis-name\">x</text><text x=\"68\" y=\"30\" class=\"plot-axis-name\">y</text></svg></div><p>Graf zaznamenáva, ako sa y-ová súradnica bodu na kružnici mení, keď sa x pohybuje po reálnej osi. Vodorovné čiary ukazujú najvyššiu (y = 1) a najnižšiu (y = −1) hodnotu, ktoré graf dosahuje.</p>"
      },
      {
        "id": "zero-value",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "sin",
        "question": "Bod na jednotkovej kružnici, ktorý zodpovedá číslu x = 0, má súradnice [1; 0]. Hodnota sin x je y-ová súradnica tohto bodu. Čomu sa rovná sin(0)?",
        "options": ["1", "−1", "0", "neexistuje"],
        "answer": 2,
        "correct": "sin(0) = 0, lebo y-ová súradnica bodu [1; 0] je 0.",
        "hint": "Over si, ktorá súradnica bodu [1; 0] je y-ová."
      },
      {
        "id": "value",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "sin",
        "question": "Bod na jednotkovej kružnici, ktorý zodpovedá číslu x = π/2, má súradnice [0; 1] (najvyšší bod kružnice). Hodnota sin x je y-ová súradnica tohto bodu. Čomu sa rovná sin(π/2)?",
        "options": ["−1", "0", "π/2", "1"],
        "answer": 3,
        "correct": "sin(π/2) = 1, lebo y-ová súradnica bodu [0; 1] je 1.",
        "hint": "Over si, ktorá súradnica bodu [0; 1] je y-ová."
      },
      {
        "id": "min-value",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "sin",
        "question": "Bod na jednotkovej kružnici, ktorý zodpovedá číslu x = 3π/2, má súradnice [0; −1] (najnižší bod kružnice). Hodnota sin x je y-ová súradnica tohto bodu. Čomu sa rovná sin(3π/2)?",
        "options": ["−1", "0", "1", "3π/2"],
        "answer": 0,
        "correct": "sin(3π/2) = −1, lebo y-ová súradnica bodu [0; −1] je −1.",
        "hint": "Over si, ktorá súradnica bodu [0; −1] je y-ová."
      },
      {
        "id": "props",
        "type": "explain",
        "phase": "VLASTNOSTI",
        "title": "Čítame vlastnosti",
        "html": "<p>Pri funkcii sin x sleduj: definičný obor D(sin), obor hodnôt H(sin), periodicitu, nuly, znamienko a nepárnosť. Tieto vlastnosti vieme zdôvodniť priamo z jednotkovej kružnice alebo z grafu, nie iba naučiť naspamäť.</p><p>Napríklad: keďže x aj x + 2π zobrazujú ten istý bod kružnice (Hodina 1), platí sin(x + 2π) = sin x – funkcia je <strong>periodická</strong> s periódou 2π.</p>",
        "remember": "Každú vlastnosť vedz ukázať na kružnici alebo na grafe, nielen vysloviť."
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "PRACOVNÝ ZÁPIS",
        "title": "Načrtni graf sin x",
        "html": "<p>V zošite načrtni jednotkovú kružnicu, vyznač body pre x = 0, π/2, π, 3π/2, 2π a ich y-ové súradnice. Podľa nich načrtni graf funkcie sin x na intervale od 0 do 2π. Potom pod graf zapíš tri vlastnosti, ktoré z neho vieš prečítať (napr. definičný obor, obor hodnôt, nuly).</p>",
        "model": "Skontroluj základné hodnoty (0; 1; 0; −1; 0), periodicitu a to, že graf nemá žiadne prerušenia – sin x je definovaná pre každé reálne x."
      },
      {
        "id": "arg",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "title": "Vlastnosť z kružnice alebo grafu",
        "prompt": "Vyber jednu vlastnosť funkcie sin x (napr. periodicitu, nepárnosť alebo obor hodnôt) a zdôvodni ju pomocou jednotkovej kružnice alebo grafu.",
        "model": "Vzor: vlastnosť uvediem presne a potom odkážem na opakujúcu sa polohu bodu na kružnici alebo na konkrétnu symetriu/priebeh grafu, napr. „sin(x+2π)=sin x, lebo x a x+2π zobrazujú ten istý bod kružnice“."
      },
      {
        "id": "clean",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "sin x – definícia a vlastnosti",
        "html": "<p><strong>TOTO SI ZAPÍŠ DO ZOŠITA:</strong></p><p><strong>FUNKCIA y = sin x</strong></p><p>Na jednotkovej kružnici je <strong>sin x</strong> y-ová súradnica bodu, ktorý zodpovedá číslu x.</p><p><strong>Definičný obor:</strong> D(sin) = ℝ<br><strong>Obor hodnôt:</strong> H(sin) = ⟨−1; 1⟩<br><strong>Perióda:</strong> 2π, teda sin(x + 2kπ) = sin x, k ∈ ℤ.<br><strong>Nuly:</strong> x = kπ, k ∈ ℤ.<br><strong>Nepárnosť:</strong> sin(−x) = −sin x.</p><p>Maximum funkcie je 1 pre x = π/2 + 2kπ a minimum je −1 pre x = 3π/2 + 2kπ, k ∈ ℤ.</p>",
        "model": "Teoretický zápis je zobrazený celý v poli html; model sa v zjednodušenom notebook rendereri nezobrazuje."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Pri každej zručnosti označ, ako sa teraz cítiš.",
        "skills": [
          "viem vysvetliť definíciu sin x pomocou jednotkovej kružnice",
          "viem načrtnúť graf sin x",
          "viem z kružnice alebo grafu zdôvodniť vlastnosti (D(sin), H(sin), periodicitu, nuly, nepárnosť)"
        ]
      }
    ]
  }
});
