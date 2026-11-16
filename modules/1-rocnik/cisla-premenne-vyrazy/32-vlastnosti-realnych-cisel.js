MathPlatform.registerModule({
  "id": "1-u03-h032",
  "teacher": {
    "placement": "1. ročník · Čísla, premenné, výrazy · 32. hodina: Vlastnosti reálnych čísel. Modul je zámerne skrátený a zameraný na obsah písomky (pomenovanie komutatívnosti, asociatívnosti a distributívnosti a výhodné počítanie); neutrálny prvok, opačné a prevrátené číslo, usporiadanie a delenie nulou sa v ňom nepoužívajú.",
    "prerequisites": [
      "reálne čísla a ich druhy (hodina 31)",
      "sčítanie, odčítanie, násobenie a delenie zlomkov a desatinných čísel zo ZŠ",
      "písmeno ako zástupca ľubovoľného čísla (zápis a + b, a · b)",
      "hodiny 28–30: deliteľnosť, NSN a NSD"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza tému „Vlastnosti reálnych čísel“. Obsah modulu rešpektuje jej miesto a rozsah v pláne."
    ],
    "planPerformance": [
      "Plán uvádza: riešiť úlohy finančnej matematiky; používať kritériá deliteľnosti; určiť NSN a NSD pomocou prvočíselného rozkladu. Ďalšie ciele modulu vychádzajú z uvedeného obsahu celku."
    ],
    "goals": [
      "pomenovať a použiť komutatívnosť a asociatívnosť sčítania a násobenia",
      "použiť distributívnosť na výhodné počítanie aj na vynímanie pred zátvorku",
      "vedieť, že odčítanie a delenie komutatívne nie sú"
    ],
    "competencies": [
      "matematická komunikácia",
      "práca so symbolickým zápisom (písmená ako čísla)",
      "argumentácia a kontrola výsledku",
      "prehľadný ručný zápis"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie spôsobu práce: používanie vlastností pri úprave výrazov a zdôvodnenie každého kroku."
    ],
    "flow": [
      "2 min: opakovanie – ktoré úpravy pri počítaní „robíme automaticky“ a prečo smieme",
      "5 min: jeden výklad v aplikácii (komutatívnosť, asociatívnosť, distributívnosť, výhodné počítanie)",
      "7–8 min: digitálne úlohy (priraď vlastnosť, výhodné počítanie, nájdi chybu)",
      "6–8 min: samostatná práca BEZ MOBILU a zbierka podľa úrovne",
      "2–3 min: spoločný rozbor najčastejších chýb podľa živých výsledkov"
    ],
    "diagnostics": [
      "zamieňa názvy vlastností (komutatívnosť × asociatívnosť × distributívnosť)",
      "považuje odčítanie a delenie za komutatívne (7 − 3 = 3 − 7)",
      "pri násobení zátvorky vynásobí iba prvý člen: 2·(3 + 4) = 2·3 + 4",
      "nevidí výhodné zoskupenie (25 · 4, 100 − 1) a počíta zdĺhavo"
    ],
    "partialUse": [
      "Pri nedostatku času vynechajte zbierku a bonus; jadro tvorí priraďovanie vlastností a výhodné počítanie.",
      "Mobil nenahrádza ručné počítanie ani zdôvodnenie každého kroku."
    ]
  },
  "student": {
    "title": "Vlastnosti reálnych čísel",
    "subtitle": "Téma 32 · Čísla, premenné, výrazy",
    "intro": "Pomenuješ pravidlá, ktoré platia pre všetky reálne čísla (komutatívnosť, asociatívnosť, distributívnosť), a využiješ ich na výhodné počítanie. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "20–25 min",
    "activities": [
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "poznať komutatívnosť, asociatívnosť a distributívnosť a vedieť ich pomenovať",
          "využiť ich na výhodné počítanie spamäti",
          "nájsť chybu v nesprávnom roznásobení"
        ]
      },
      {
        "id": "comm-assoc",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Komutatívnosť, asociatívnosť, distributívnosť",
        "html": "<p>Písmená a, b, c zastupujú <strong>ľubovoľné</strong> reálne čísla.</p><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Komutatívnosť (výmena poradia)</div><p class=\"term-rule\">a + b = b + a &nbsp;&nbsp; a · b = b · a</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Asociatívnosť (zoskupovanie)</div><p class=\"term-rule\">(a + b) + c = a + (b + c) &nbsp;&nbsp; (a · b) · c = a · (b · c)</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Distributívnosť (roznásobenie a vynímanie)</div><p class=\"term-rule\">a · (b + c) = a · b + a · c. Číslo pred zátvorkou sa vynásobí <strong>každým</strong> členom v zátvorke.</p></div></div><div class=\"example\"><span class=\"mini-label\">VÝHODNÉ POČÍTANIE</span><p>25 · 37 · 4 = (25 · 4) · 37 = 100 · 37 = <strong>3 700</strong> (komutatívnosť a asociatívnosť)</p><p>99 · 15 = (100 − 1) · 15 = 1 500 − 15 = <strong>1 485</strong> (distributívnosť)</p><p>17 · 23 + 17 · 77 = 17 · (23 + 77) = 17 · 100 = <strong>1 700</strong> (vynímanie pred zátvorku)</p></div><div class=\"warning\"><strong>Pozor:</strong> Odčítanie a delenie komutatívne nie sú (7 − 3 ≠ 3 − 7). A 2 · (3 + 4) = 2 · 3 + 2 · 4 = 14, nie 2 · 3 + 4.</div>",
        "remember": "Sčítanie a násobenie smieš „premiešať“ aj zoskupovať. Zátvorku roznásob každým členom: a · (b + c) = a · b + a · c."
      },
      {
        "id": "match-prop",
        "type": "matrix",
        "phase": "PRECVIČ",
        "skill": "pomenovanie vlastností",
        "title": "Ktorá vlastnosť stojí za rovnosťou?",
        "labels": ["Komutatívnosť", "Asociatívnosť", "Distributívnosť"],
        "items": [
          { "text": "3 + 8 = 8 + 3", "answer": "Komutatívnosť" },
          { "text": "7 · 5 = 5 · 7", "answer": "Komutatívnosť" },
          { "text": "(2 + 5) + 4 = 2 + (5 + 4)", "answer": "Asociatívnosť" },
          { "text": "(3 · 4) · 5 = 3 · (4 · 5)", "answer": "Asociatívnosť" },
          { "text": "6 · (2 + 9) = 6 · 2 + 6 · 9", "answer": "Distributívnosť" },
          { "text": "(7 + 3) · 5 = 7 · 5 + 3 · 5", "answer": "Distributívnosť" }
        ]
      },
      {
        "id": "c-comm",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "komutatívnosť",
        "question": "Ktorá z rovností platí pre všetky reálne čísla a, b (pri delení sú čísla nenulové)?",
        "options": [
          "a − b = b − a",
          "a · b = b · a",
          "a ÷ b = b ÷ a"
        ],
        "answer": 1,
        "correct": "Násobenie je komutatívne. Pre odčítanie aj delenie stačí protipríklad: 5 − 2 ≠ 2 − 5 a 6 ÷ 3 ≠ 3 ÷ 6.",
        "hint": "Dosaď si konkrétne čísla, napr. a = 6, b = 3, a vyskúšaj každú rovnosť."
      },
      {
        "id": "n-smart1",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "šikovné počítanie",
        "title": "Šikovne spamäti",
        "prompt": "Vypočítaj šikovne (zmeň poradie a zoskup): 25 · 37 · 4",
        "validate": "exact",
        "answer": 3700,
        "success": "25 · 4 = 100, takže 100 · 37 = 3 700.",
        "hint": "Ktoré dve čísla dajú pri násobení pekné okrúhle číslo?",
        "reveal": "Správne je 3 700: 25 · 37 · 4 = (25 · 4) · 37 = 100 · 37."
      },
      {
        "id": "n-dist1",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "distributívnosť",
        "title": "Rozlož 99 ako 100 − 1",
        "prompt": "Vypočítaj šikovne spamäti: 99 · 15",
        "validate": "exact",
        "answer": 1485,
        "success": "99 · 15 = (100 − 1) · 15 = 1 500 − 15 = 1 485.",
        "hint": "99 = 100 − 1. Roznásob zátvorku číslom 15.",
        "reveal": "Správne je 1 485: (100 − 1) · 15 = 100 · 15 − 1 · 15 = 1 500 − 15."
      },
      {
        "id": "hunt-dist",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak počíta: 3 · (10 + 4) = 3 · 10 + 4 = 34. V čom je chyba?",
        "options": [
          "Číslo 3 treba vynásobiť iba druhým členom zátvorky.",
          "Číslo 3 treba vynásobiť každým členom zátvorky: 3 · 10 + 3 · 4 = 42.",
          "Zátvorku nemožno roznásobiť, treba najprv spočítať 3 + 10 + 4."
        ],
        "answer": 1,
        "correct": "Správne: 3 · (10 + 4) = 3 · 14 = 42, a ten istý výsledok dostaneme roznásobením oboch členov.",
        "hint": "Vypočítaj výraz iným spôsobom: najprv spočítaj zátvorku. Dostaneš 34?"
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha na papier",
        "html": "<p>Odlož zariadenie. Vypočítaj šikovne a pri každom kroku napíš, ktorú vlastnosť si použil/a (komutatívnosť, asociatívnosť, distributívnosť):</p><ol><li>4 · 13 · 25</li><li>98 · 7</li><li>17 · 23 + 17 · 77</li><li>0,5 · 19 · 4</li></ol><p>Potom vysvetli, prečo 8 − 3 − 2 nie je to isté ako 8 − (3 − 2).</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: vlastnosti reálnych čísel",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Riešenia píš do zošita. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Vypočítaj šikovne: a) 2 · 39 · 5 b) 6,8 + 2,9 + 3,2 c) 5 · 17 · 20",
            "answer": "a) 2 · 5 · 39 = 10 · 39 = 390<br>b) 6,8 + 3,2 + 2,9 = 10 + 2,9 = 12,9<br>c) 5 · 20 · 17 = 100 · 17 = 1 700"
          },
          {
            "level": "zaklad",
            "text": "Roznásob a vypočítaj: a) 6 · 52 b) 8 · 199 c) 0,5 · (30 − 8)",
            "answer": "a) 6 · (50 + 2) = 300 + 12 = 312<br>b) 8 · (200 − 1) = 1 600 − 8 = 1 592<br>c) 0,5 · 30 − 0,5 · 8 = 15 − 4 = 11"
          },
          {
            "level": "rozsirenie",
            "text": "Vyber spoločný činiteľ a vypočítaj: a) 17 · 23 + 17 · 77 b) 3,6 · 8,5 − 3,6 · 6,5 c) 1/4 · 7 + 1/4 · 9",
            "answer": "a) 17 · 100 = 1 700<br>b) 3,6 · (8,5 − 6,5) = 3,6 · 2 = 7,2<br>c) 1/4 · (7 + 9) = 1/4 · 16 = 4"
          },
          {
            "level": "rozsirenie",
            "text": "Oprav chyby v úpravách: a) 5 · (2 + 3) = 5 · 2 + 3 b) 20 − 6 − 4 = 20 − (6 − 4) c) 12 ÷ 4 = 4 ÷ 12 d) 6 ÷ 0 = 0",
            "answer": "a) 5 · 2 + 5 · 3 = 25<br>b) 20 − 6 − 4 = 10, ale 20 − (6 − 4) = 18; rovnosť neplatí<br>c) 12 ÷ 4 = 3, ale 4 ÷ 12 = 1/3; delenie nie je komutatívne<br>d) 6 ÷ 0 nie je definované"
          },
          {
            "level": "bonus",
            "text": "Vypočítaj šikovne: 1,5 · 8 · 4 · 0,5 a (1/3 + 1/6) · 12 – 12 · 1/6. Použi distributívnosť.",
            "answer": "1,5 · 8 · 4 · 0,5 = 1,5 · 8 · 2 = 24<br>(1/3 + 1/6) · 12 − 12 · 1/6 = 12/3 + 12/6 − 12/6 = 4"
          }
        ]
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "pomenovanie komutatívnosti, asociatívnosti a distributívnosti",
          "výhodné počítanie spamäti",
          "distributívnosť (roznásobenie aj vynímanie)"
        ],
        "prompt": "Označ, ako dobre to zvládaš. Nie je to známka; porovnaj svoj pocit s výsledkom úloh. Čo máš 🔴 alebo 🟡, si ešte raz prejdi."
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 5,
        "text": "Vypočítaj šikovne: a) 4 · 27 · 25 b) 3,4 + 8,9 + 6,6 c) 5 · 36 · 2",
        "answer": "a) 4 · 25 · 27 = 2 700<br>b) 3,4 + 6,6 + 8,9 = 18,9<br>c) 5 · 2 · 36 = 360"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 5,
        "text": "Roznásob a vypočítaj: a) 9 · 103 b) 12 · 98 c) 25 · 41",
        "answer": "a) 9 · (100 + 3) = 927<br>b) 12 · (100 − 2) = 1 200 − 24 = 1 176<br>c) 25 · (40 + 1) = 1 000 + 25 = 1 025"
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 4,
        "text": "Doplň na prázdne miesto tak, aby rovnosť platila: a) 7 + … = 0 b) 7 · … = 1 c) 7 + … = 7 d) 7 · … = 7",
        "answer": "a) −7<br>b) 1/7<br>c) 0<br>d) 1"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 6,
        "text": "Vyber pred zátvorku a vypočítaj: a) 13 · 8 + 13 · 12 b) 6,5 · 7 − 6,5 · 3 c) 2/3 · 9 + 2/3 · 6",
        "answer": "a) 13 · 20 = 260<br>b) 6,5 · 4 = 26<br>c) 2/3 · 15 = 10"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 6,
        "text": "Pre každú rovnosť rozhodni, či platí pre všetky reálne čísla. Ak nie, nájdi protipríklad: a) a − (b − c) = a − b − c b) a · (b − c) = a · b − a · c c) (a + b) ÷ 2 = a ÷ 2 + b ÷ 2",
        "answer": "a) neplatí; a = 5, b = 3, c = 1: 5 − 2 = 3, ale 5 − 3 − 1 = 1<br>b) platí (distributívnosť)<br>c) platí: (a + b) ÷ 2 = (a + b) · 1/2 = a · 1/2 + b · 1/2"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 6,
        "text": "Vypočítaj šikovne bez kalkulačky: 1 000 · 0,25 · 8 · 0,5 · 1/5 a vysvetli, ktoré vlastnosti si použil/a.",
        "answer": "0,25 · 8 = 2; 0,5 · 2 = 1; 1 000 · 1 · 1/5 = 200. Použité: komutatívnosť a asociatívnosť násobenia."
      }
    ]
  }
});
