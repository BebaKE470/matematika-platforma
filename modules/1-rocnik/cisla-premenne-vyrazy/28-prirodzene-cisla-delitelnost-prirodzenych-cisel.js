MathPlatform.registerModule({
  "id": "1-u03-h028",
  "teacher": {
    "placement": "1. ročník · Čísla, premenné, výrazy · 28. hodina: Prirodzené čísla, Deliteľnosť prirodzených čísel",
    "prerequisites": [
      "delenie so zvyškom a bez zvyšku, násobilka, sčítanie viacciferných čísel zo ZŠ",
      "pojmy deliteľ a násobok",
      "kritériá deliteľnosti 2, 3, 4, 5, 9, 10 zo ZŠ (v module sa len krátko pripomenú)",
      "prvočíselný rozklad a NSN, NSD sa v tejto hodine nepoužívajú, prídu na 29. hodine"
    ],
    "planContent": [
      "Téma z tematického plánu: Prirodzené čísla, Deliteľnosť prirodzených čísel. V podkladoch k tejto hodine nie je uvedený samostatný obsahový štandard."
    ],
    "planPerformance": [
      "Štandardy obsiahnuté v téme: zistiť bez delenia, či je dané číslo deliteľné niektorým z čísel uvedených v znakoch deliteľnosti.",
      "Štandardy obsiahnuté v téme: sformulovať a použiť kritériá deliteľnosti niektorými zloženými číslami, ktoré sú súčinom nesúdeliteľných čísel uvedených v znakoch deliteľnosti (napr. 6, 12, 15)."
    ],
    "goals": [
      "zistiť bez delenia, či je číslo deliteľné 2, 3, 4, 5, 9 a 10",
      "sformulovať kritérium deliteľnosti zloženým číslom: ak je číslo deliteľné nesúdeliteľnými číslami, je deliteľné aj ich súčinom (6 = 2 · 3, 12 = 3 · 4, 15 = 3 · 5)",
      "použiť kritérium 6, 12 a 15 a rozhodnúť, kedy takto uvažovať nemožno (4 a 6, 2 a 6)",
      "doplniť chýbajúcu číslicu tak, aby bolo číslo deliteľné 12 alebo 15",
      "vlastnými slovami zdôvodniť, prečo je podmienka nesúdeliteľnosti potrebná"
    ],
    "competencies": [
      "matematická komunikácia",
      "argumentácia a zdôvodňovanie",
      "kontrola výsledku bez delenia",
      "systematické hľadanie riešení (doplnenie číslic)"
    ],
    "enrichment": [
      "Obohatenie (nie štandard): prečo kritérium 4 stačí posudzovať podľa posledných dvoch číslic a kritérium 3 podľa ciferného súčtu (100 je deliteľné 4, ale 10 dáva pri delení 3 zvyšok 1). Úlohy v štýle EČ MS: 6-ciferné číslo deliteľné 3, 4 a 5 (teda 60), počítanie možných kódov z deliteľnosti dvojčísel."
    ],
    "flow": [
      "2 min: ciele hodiny, pripomenutie kritérií 2, 3, 4, 5, 9, 10 (učiteľ pri tabuli, app ako opora)",
      "3 min: rýchla kontrola kritérií v aplikácii",
      "5 min: nový poznatok: kritériá pre 6, 12, 15 (situácia, nesúdeliteľné čísla, kritérium, kontrapríklad)",
      "5 min: spoločné precvičenie v aplikácii: rozhodni o 12, výber čísla deliteľného 15, nájdi chybu",
      "10–12 min: SAMOSTATNÁ PRÁCA v živej hodine. Žiaci počítajú na papieri, výsledky zapisujú do aplikácie, učiteľ sleduje priebeh na obrazovke",
      "2–3 min: vlastnými slovami zdôvodni, potom sebahodnotenie 🟢🟡🔴"
    ],
    "diagnostics": [
      "žiak pri 3 a 9 sčítava všetky číslice, pri 4 sa pozerá len na posledné dve číslice",
      "žiak pri 6, 12 a 15 overuje obe podmienky, nie len jednu",
      "žiak používa kritérium súčinu aj pre čísla, ktoré nie sú nesúdeliteľné (4 a 6 ⇒ 24, 2 a 6 ⇒ 12)",
      "žiak pri doplňovaní číslice rozhoduje systematicky (posledná číslica, potom ciferný súčet) a nehádže",
      "žiak vie vlastnými slovami povedať, prečo 3 a 4 stačia na 12, ale 2 a 6 nestačia"
    ],
    "partialUse": [
      "Modul pokrýva len časť hodiny, ktorú vedieš s aplikáciou. Úvodnú motiváciu a opakovanie zo ZŠ rob podľa vlastného plánu.",
      "Ak chýba čas, vynechaj úlohu „Ak ostane čas“, prípadne samostatnú prácu skráť na prvé tri úlohy.",
      "Mobil nenahrádza ručné počítanie, výpočty a postup zapisujú žiaci do zošita."
    ]
  },
  "student": {
    "title": "Deliteľnosť: kritériá pre 6, 12 a 15",
    "subtitle": "Téma 28 · Čísla, premenné, výrazy",
    "intro": "Zopakuješ si kritériá deliteľnosti a naučíš sa zistiť bez delenia, či je číslo deliteľné 6, 12 alebo 15. Potom vyrieš samostatnú prácu a zhodnotíš sa.",
    "estimatedTime": "25–30 min",
    "activities": [
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "zistiť bez delenia, či je číslo deliteľné 2, 3, 4, 5, 9 alebo 10",
          "zistiť bez delenia, či je číslo deliteľné 6, 12 alebo 15",
          "vysvetliť, prečo to takto môžeme robiť a kedy nie",
          "samostatne doplniť chýbajúcu číslicu"
        ]
      },
      {
        "id": "e-crit",
        "type": "explain",
        "phase": "POCHOP",
        "skill": "kritériá deliteľnosti",
        "title": "Čo už vieš: kritériá deliteľnosti",
        "html": "<p>Číslo <strong>b</strong> je <span class=\"hl\">deliteľom</span> čísla <strong>a</strong>, ak a : b vyjde bez zvyšku. Napríklad 6 je deliteľom 24, ale 5 nie je. Delenie vieme často ušetriť:</p><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">2, 5, 10: posledná číslica</div><p class=\"term-rule\">2: párna číslica. 5: končí 0 alebo 5. 10: končí 0.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">4: posledné dve číslice</div><p class=\"term-rule\">Dvojčíslie na konci je deliteľné 4 (alebo je to 00).</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">3 a 9: ciferný súčet</div><p class=\"term-rule\">Súčet všetkých číslic je deliteľný 3, resp. 9.</p></div></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD: 3 276</span><p>Posledné dve číslice 76 : 4 = 19, teda deliteľné 4. Ciferný súčet 3 + 2 + 7 + 6 = 18, teda deliteľné 3 aj 9. Končí 6, teda deliteľné 2, ale nie 5 ani 10.</p></div><div class=\"warning\"><strong>Pozor:</strong> pri 4 nepoužívaj ciferný súčet, ten patrí iba k 3 a 9.</div>",
        "remember": "2, 5, 10: posledná číslica. 4: posledné dve číslice. 3, 9: ciferný súčet."
      },
      {
        "id": "c-warm",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "kritériá deliteľnosti",
        "question": "Ktorá skupina obsahuje presne tie čísla zo zoznamu 2, 3, 4, 5, 9, 10, ktorými je deliteľné číslo 1 575?",
        "options": [
          "3 a 9",
          "3, 5 a 9",
          "3, 4 a 5"
        ],
        "answer": 1,
        "correct": "1 575 končí 5, preto je deliteľné 5. Ciferný súčet 1 + 5 + 7 + 5 = 18 je deliteľný 3 aj 9. Je nepárne, takže nie 2 ani 10, a 75 nie je deliteľné 4.",
        "hint": "Prejdi kritériá po jednom: posledná číslica, posledné dve číslice a ciferný súčet."
      },
      {
        "id": "e-new",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "skill": "kritérium pre 6, 12, 15",
        "title": "Deliteľnosť 6, 12 a 15 bez delenia",
        "html": "<p>Ako zistíš bez delenia, či je 4 536 deliteľné 12? Pre 12 kritérium nemáme, ale vieme, že <strong>12 = 3 · 4</strong>. Stačí overiť 3 aj 4?</p><p>Čísla 3 a 4 sú <span class=\"hl\">nesúdeliteľné</span>: nemajú spoločného deliteľa väčšieho ako 1. Vtedy platí:</p><div class=\"formula\"><span class=\"mini-label\">KRITÉRIUM</span>Ak sú čísla m a n nesúdeliteľné a číslo je deliteľné m aj n, je deliteľné aj ich súčinom m · n.</div><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">6 = 2 · 3</div><p class=\"term-rule\">Číslo je deliteľné 6, ak je deliteľné 2 <span class=\"hl\">aj</span> 3.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">12 = 3 · 4</div><p class=\"term-rule\">Číslo je deliteľné 12, ak je deliteľné 3 <span class=\"hl\">aj</span> 4.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">15 = 3 · 5</div><p class=\"term-rule\">Číslo je deliteľné 15, ak je deliteľné 3 <span class=\"hl\">aj</span> 5.</p></div></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD: JE 4 536 DELITEĽNÉ 12?</span><p>Posledné dve číslice 36 : 4 = 9, teda deliteľné 4. Ciferný súčet 4 + 5 + 3 + 6 = 18, teda deliteľné 3. Je deliteľné 3 aj 4, preto <strong>je deliteľné 12</strong>. (Kontrola: 4 536 : 12 = 378.)</p></div><div class=\"compare\"><div class=\"good\"><span class=\"mini-label\">FUNGUJE</span><p>3 a 4 sú nesúdeliteľné. Číslo deliteľné 3 aj 4 je deliteľné 12.</p></div><div class=\"bad\"><span class=\"mini-label\">NEFUNGUJE</span><p>2 a 6 majú spoločného deliteľa 2. Číslo 18 je deliteľné 2 aj 6, ale nie je deliteľné 12.</p></div></div><div class=\"warning\"><strong>Pozor:</strong> rozložiť číslo na súčin musíš na <em>nesúdeliteľné</em> činitele. 12 = 2 · 6 ani 24 = 4 · 6 nepoužívaj.</div>",
        "remember": "Ak je číslo deliteľné nesúdeliteľnými číslami, je deliteľné aj ich súčinom. 6: overíme 2 a 3. 12: overíme 3 a 4. 15: overíme 3 a 5."
      },
      {
        "id": "s-twelve",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "kritérium 12",
        "title": "Rozhodni o deliteľnosti 12",
        "question": "Je dané číslo deliteľné 12? Rozhodni bez delenia. Použi 3 a 4.",
        "labels": [
          "Je deliteľné 12",
          "Nie je deliteľné 12"
        ],
        "items": [
          {
            "text": "5 214",
            "answer": false,
            "why": "Ciferný súčet 12 je deliteľný 3, ale 14 nie je deliteľné 4, preto číslo nie je deliteľné 12."
          },
          {
            "text": "1 164",
            "answer": true,
            "why": "Ciferný súčet 12 je deliteľný 3 a 64 je deliteľné 4, preto je číslo deliteľné 12."
          },
          {
            "text": "6 128",
            "answer": false,
            "why": "28 je deliteľné 4, ale ciferný súčet 17 nie je deliteľný 3, preto číslo nie je deliteľné 12."
          },
          {
            "text": "2 508",
            "answer": true,
            "why": "Ciferný súčet 15 je deliteľný 3 a 08 je deliteľné 4, preto je číslo deliteľné 12."
          },
          {
            "text": "3 450",
            "answer": false,
            "why": "Ciferný súčet 12 je deliteľný 3, ale 50 nie je deliteľné 4, preto číslo nie je deliteľné 12."
          },
          {
            "text": "7 236",
            "answer": true,
            "why": "Ciferný súčet 18 je deliteľný 3 a 36 je deliteľné 4, preto je číslo deliteľné 12."
          },
          {
            "text": "9 010",
            "answer": false,
            "why": "Ciferný súčet 10 nie je deliteľný 3 a ani 10 nie je deliteľné 4, takže číslo nie je deliteľné 12."
          },
          {
            "text": "8 436",
            "answer": true,
            "why": "Ciferný súčet 21 je deliteľný 3 a 36 je deliteľné 4, preto je číslo deliteľné 12."
          }
        ]
      },
      {
        "id": "c-fifteen",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "kritérium 15",
        "question": "Ktoré z čísel je deliteľné 15?",
        "options": [
          "2 346",
          "2 355",
          "1 235"
        ],
        "answer": 1,
        "correct": "2 355 končí 5 (deliteľné 5) a ciferný súčet 2 + 3 + 5 + 5 = 15 je deliteľný 3. Preto je deliteľné 15.",
        "hint": "Pre 15 potrebuješ dve podmienky naraz. Ktoré dve? Skontroluj ich pri každom čísle."
      },
      {
        "id": "c-error",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "nesúdeliteľné čísla",
        "question": "Žiak tvrdí: „Číslo 84 je deliteľné 4 aj 6, preto je deliteľné aj 24, lebo 4 · 6 = 24.“ Čo je na tom zle?",
        "options": [
          "Číslo 84 nie je deliteľné 4, takže jeho tvrdenie neplatí.",
          "Nič, uvažuje správne, lebo 4 · 6 = 24.",
          "Čísla 4 a 6 majú spoločného deliteľa 2, takže takto uvažovať nemožno."
        ],
        "answer": 2,
        "correct": "Presne tak. Kritérium súčinu funguje len pre nesúdeliteľné čísla. Číslo 84 je deliteľné 4 aj 6, ale 84 : 24 = 3 zv. 12.",
        "hint": "Majú čísla 4 a 6 nejakého spoločného deliteľa väčšieho ako 1?"
      },
      {
        "id": "i-intro",
        "type": "info",
        "phase": "SAMOSTATNÁ PRÁCA",
        "title": "Samostatná práca",
        "html": "<p>Teraz pracuješ <strong>sám/sama</strong>. Čaká ťa niekoľko úloh, ktoré sa podobajú na úlohy z overovania vedomostí.</p><ol class=\"steps\"><li>Počítaj a zapisuj na papier.</li><li>Do aplikácie zapíš len výsledok, <strong>bez medzier</strong> (napr. 12345).</li><li>Učiteľ vidí, ako ti ide. Pracuj vlastným tempom.</li></ol><p>Pomôcka: pri 6, 12 a 15 vždy overuj obe podmienky.</p>",
        "continueLabel": "Začať"
      },
      {
        "id": "n-6",
        "type": "numberInput",
        "phase": "SAMOSTATNÁ PRÁCA",
        "skill": "doplniť číslicu: 6",
        "title": "Úloha 1 · Doplň číslicu",
        "prompt": "Akú najmenšiu číslicu x treba doplniť do čísla 5x2, aby bolo deliteľné 6?",
        "validate": "exact",
        "answer": 2,
        "success": "Číslo 5x2 je párne. Ciferný súčet 5 + x + 2 = 7 + x musí byť deliteľný 3. Najmenšie x je 2 (7 + 2 = 9), číslo je 522.",
        "hint": "Číslo je párne. Zostáva podmienka pre 3: pre ktoré x je 7 + x deliteľné 3?",
        "reveal": "Správne je 2: 7 + 2 = 9 je deliteľné 3 a číslo 522 je párne, preto je deliteľné 6. Pre x = 0 a x = 1 je súčet 7 a 8, tie nie sú deliteľné 3."
      },
      {
        "id": "n-15",
        "type": "numberInput",
        "phase": "SAMOSTATNÁ PRÁCA",
        "skill": "doplniť číslicu: 15",
        "title": "Úloha 2 · Deliteľné 15",
        "prompt": "Nájdi najmenšie päťciferné číslo tvaru A432B, ktoré je deliteľné 15. (A a B sú číslice.) Zapíš ho bez medzier.",
        "validate": "exact",
        "answer": 14325,
        "success": "Deliteľné 5: B je 0 alebo 5. Deliteľné 3: ciferný súčet. Najmenšie A je 1. Pre B = 0 je súčet 1 + 4 + 3 + 2 + 0 = 10 (nie), pre B = 5 je súčet 15 (áno). Číslo je 14325.",
        "hint": "Číslo má byť čo najmenšie, preto skúšaj A od najmenšej možnej číslice. Najprv urči, aké môže byť B, potom skontroluj ciferný súčet.",
        "reveal": "Správne je 14325. B môže byť 0 alebo 5. Pre A = 1 a B = 0 je ciferný súčet 10, nie je deliteľný 3. Pre A = 1 a B = 5 je 15, je deliteľný 3."
      },
      {
        "id": "n-12",
        "type": "numberInput",
        "phase": "SAMOSTATNÁ PRÁCA",
        "skill": "doplniť číslice: 12",
        "title": "Úloha 3 · Deliteľné 12",
        "prompt": "Nahraď v čísle A37B písmená A a B číslicami tak, aby vzniklo najväčšie štvorciferné číslo deliteľné 12. Zapíš ho bez medzier.",
        "validate": "exact",
        "answer": 9372,
        "success": "Deliteľné 4: 7B je 72 alebo 76 (B = 2 alebo 6). Deliteľné 3: pre B = 2 je 12 + A deliteľné 3, najväčšie A je 9, číslo 9372. Pre B = 6 je najväčšie A = 8, číslo 8376, to je menšie.",
        "hint": "Najprv zisti, ktoré B pripadajú do úvahy kvôli deliteľnosti 4 (posledné dve číslice 7B). Potom pre každé B nájdi najväčšie A podľa ciferného súčtu.",
        "reveal": "Správne je 9372. Pre B = 2 je 3 + 7 + A + 2 = 12 + A, najväčšie A = 9. Pre B = 6 vyjde 8376. Väčšie je 9372."
      },
      {
        "id": "c-logic",
        "type": "choice",
        "phase": "SAMOSTATNÁ PRÁCA",
        "skill": "pravdivosť výrokov o deliteľnosti",
        "question": "Dané sú výroky. K: Ak je číslo deliteľné 2 a 4, je deliteľné aj 8. L: Ak je číslo deliteľné 3 a 4, je deliteľné aj 12. M: Ak je ciferný súčet čísla 9, je číslo deliteľné 9. N: Ak je číslo deliteľné 2 a 6, je deliteľné aj 12. Práve dva z nich sú pravdivé. Ktoré dva?",
        "options": [
          "K, L",
          "L, N",
          "M, N",
          "L, M"
        ],
        "answer": 3,
        "correct": "L je pravdivý (3 a 4 sú nesúdeliteľné). M je pravdivý (kritérium pre 9). K je nepravdivý, napr. 4 je deliteľné 2 aj 4, ale nie 8. N je nepravdivý, napr. 6 je deliteľné 2 aj 6, ale nie 12.",
        "hint": "Pri každom výroku skús nájsť číslo, pre ktoré neplatí (kontrapríklad). Sú čísla vo výroku nesúdeliteľné?"
      },
      {
        "id": "w-why",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "zdôvodnenie nesúdeliteľnosti",
        "title": "Vysvetli vlastnými slovami",
        "prompt": "Prečo stačí na zistenie deliteľnosti 12 overiť 3 a 4, ale na zistenie deliteľnosti 12 nestačí overiť 2 a 6? Napíš to do zošita alebo si to povedz nahlas. Potom si porovnaj svoje vysvetlenie s modelom.",
        "model": "Čísla 3 a 4 sú nesúdeliteľné, nemajú spoločného deliteľa, preto číslo deliteľné oboma je deliteľné aj ich súčinom 12. Čísla 2 a 6 majú spoločného deliteľa 2, takže sa „dvojka“ v nich počíta dvakrát. Číslo deliteľné 2 aj 6 (napr. 18) preto nemusí byť deliteľné 12."
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "úlohy navyše",
        "title": "Ak ostane čas",
        "html": "<p>Riešenia píš do zošita a hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "rozsirenie",
            "text": "Pavol si zapísal šesťciferné telefónne číslo, ktoré je deliteľné 3, 4 aj 5. Posledné dve číslice nevie prečítať: 714 5AB. Nájdi dvojciferné číslo AB.",
            "answer": "Deliteľné 5 a 4: koncovka AB je deliteľná 4 a končí 0 alebo 5, teda B = 0 a AB ∈ {00, 20, 40, 60, 80}.<br>Ciferný súčet 7 + 1 + 4 + 5 + A + 0 = 17 + A musí byť deliteľný 3: A = 1, 4 alebo 7, z koncoviek vyhovuje len A = 4.<br>AB = <strong>40</strong>, číslo 714 540."
          },
          {
            "level": "bonus",
            "text": "Peter zabudol štvorciferný kód zámku. Vie, že prvé dvojčíslie je deliteľné 15 a druhé 7. Musel vyskúšať všetky možnosti (vrátane 0000). Na koľký pokus otvoril zámok, ak vyskúšal všetky možnosti?",
            "answer": "Dvojčísla od 00 do 99 deliteľné 15: 00, 15, 30, 45, 60, 75, 90, spolu 7. Deliteľné 7: 00, 07, 14, …, 98, spolu 15.<br>Všetkých kódov je 7 · 15 = <strong>105</strong>, preto otvoril až na 105. pokus."
          }
        ]
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Ako som na tom?",
        "skills": [
          "zistím bez delenia deliteľnosť 2, 3, 4, 5, 9 a 10",
          "použijem kritérium pre 6",
          "použijem kritérium pre 12 a 15 (overím dve podmienky)",
          "doplním chýbajúcu číslicu",
          "vysvetlím, prečo musia byť čísla nesúdeliteľné"
        ],
        "prompt": "Označ, ako dobre to zvládaš. Nie je to známka. Čo máš 🔴 alebo 🟡, si ešte raz prejdi doma."
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 4,
        "text": "Zisti, ktoré z čísel 2, 3, 4, 5, 6, 9, 10 delia číslo 1 260. Pri každom napíš, ako si to zistil/a.",
        "answer": "Všetky: končí 0 (2, 5, 10), 60 : 4 = 15 (4), ciferný súčet 9 (3, 9), deliteľné 2 aj 3 (6)."
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 4,
        "text": "Zisti, ktoré z čísel 1 044, 2 305, 5 436, 7 770 sú deliteľné 4.",
        "answer": "1 044: 44 : 4 = 11, áno<br>2 305: 05 nie<br>5 436: 36 : 4 = 9, áno<br>7 770: 70 nie (70 : 4 = 17 zv. 2)"
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 4,
        "text": "Ktoré z čísel 372, 450, 585, 1 062 sú deliteľné 6? Ktoré 15?",
        "answer": "372: 6 áno, 15 nie (nekončí 0 ani 5)<br>450: 6 áno, 15 áno<br>585: 6 nie (je nepárne), 15 áno (súčet 18, končí 5)<br>1 062: 6 áno (súčet 9), 15 nie"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 4,
        "text": "Doplň číslicu x tak, aby bolo číslo 7x2 deliteľné 6. Nájdi všetky možnosti.",
        "answer": "Číslo je párne, stačí 3: 7 + x + 2 = 9 + x, teda x = 0, 3, 6 alebo 9. Čísla 702, 732, 762, 792."
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 4,
        "text": "Doplň číslicu x tak, aby bolo číslo 3x6 deliteľné 4 a zároveň 9. Zdôvodni.",
        "answer": "Deliteľnosť 4: x6 ∈ {16, 36, 56, 76, 96}. Deliteľnosť 9: 9 + x, teda x = 0 alebo 9. Spoločné riešenie x = 9, číslo 396 = 4 · 99."
      },
      {
        "id": "w6",
        "level": "rozsirenie",
        "space": 4,
        "text": "Nájdi najväčšie štvorciferné číslo tvaru 2A5B deliteľné 15.",
        "answer": "B = 0 alebo 5. Ciferný súčet 7 + A + B deliteľný 3. Pre B = 5: 12 + A, A = 9, číslo 2 955. Pre B = 0: 7 + A, A = 8, číslo 2 850. Väčšie je <strong>2 955</strong>."
      },
      {
        "id": "w7",
        "level": "bonus",
        "space": 5,
        "text": "Dokáž na príklade, že číslo deliteľné 4 aj 9 je deliteľné 36, a vysvetli, prečo to isté neplatí pre 4 a 6 pri 24.",
        "answer": "Napr. 396 : 4 = 99, 396 : 9 = 44, 396 : 36 = 11. 4 a 6 majú spoločného deliteľa 2. Číslo 12 je deliteľné 4 aj 6, ale nie je deliteľné 24."
      }
    ]
  }
});
