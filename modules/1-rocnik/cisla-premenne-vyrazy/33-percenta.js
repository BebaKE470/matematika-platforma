MathPlatform.registerModule({
  "id": "1-u03-h033",
  "teacher": {
    "placement": "1. ročník · Čísla, premenné, výrazy · 33. hodina: Percentá. Modul je zámerne skrátený a zameraný na obsah písomky (pojmy percento a základ, tri typy úloh: časť, počet percent, základ); prevody zlomkov na percentá a trojčlenka pod seba sa v ňom podrobne nepoužívajú. Zmeny ceny (zľava, zdraženie) patria do 34. hodiny.",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "všetko učivo prebrané v predchádzajúcich hodinách a ročníkoch, ktoré je pre úlohu potrebné"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza tému „Percentá“. Obsah modulu rešpektuje jej miesto a rozsah v pláne."
    ],
    "planPerformance": [
      "Plán uvádza: riešiť úlohy finančnej matematiky; používať kritériá deliteľnosti; určiť NSN a NSD pomocou prvočíselného rozkladu. Ďalšie ciele modulu vychádzajú z uvedeného obsahu celku."
    ],
    "goals": [
      "vysvetliť, že 1 % je jedna stotina základu, a určiť základ, počet percent a časť v zadaní",
      "previesť percentá na desatinné číslo (7 % = 0,07)",
      "vyriešiť všetky tri typy úloh na percentá (časť, počet percent, základ) násobením, delením alebo trojčlenkou"
    ],
    "competencies": [
      "matematická komunikácia",
      "modelovanie a reprezentácie",
      "argumentácia a kontrola výsledku",
      "prehľadný ručný zápis"
    ],
    "enrichment": [
      "Percentá nad 100 % a hľadanie základu cez trojčlenku pripravujú tému zmeny ceny z hodiny 34.",
      "Návrh maturitného štandardu je použitý iba ako obohatenie spôsobu práce: interpretácia, modelovanie, reprezentácie a zdôvodnenie."
    ],
    "flow": [
      "2 min: otvorená otázka: ako porovnáš 18 bodov z 20 a 27 bodov z 30 (spoločný menovateľ 100)",
      "6–7 min: výklad v aplikácii: stotina ako jednotka, základ, tri typy úloh a trojčlenka",
      "8–10 min: digitálne úlohy (pojem základ, časť, počet percent, základ, nájdi chybu)",
      "6–8 min: papierová úloha BEZ MOBILU a zbierka podľa úrovne",
      "2–3 min: spoločná kontrola, najčastejšia chyba (zlý základ, zabudnuté delenie 100)"
    ],
    "diagnostics": [
      "žiak správne označí základ (to, čo je 100 %)",
      "žiak rozlíši tri typy úloh a vyberie k nim správnu operáciu",
      "žiak vie previesť percentá na desatinné číslo (7 % = 0,07) a naopak",
      "žiak vie výsledok odhadnúť a skontrolovať spätným výpočtom"
    ],
    "partialUse": [
      "Na krátku hodinu stačí výklad s tromi typmi úloh a úlohy n1–n3 (po úlohu NÁJDI CHYBU).",
      "Zbierku a worksheet.tasks možno zadať ako domácu úlohu; mobil nenahrádza ručné počítanie."
    ]
  },
  "student": {
    "title": "Percentá",
    "subtitle": "Téma 33 · Čísla, premenné, výrazy",
    "intro": "Percento je stotina celku. Najprv nájdi základ, potom rozhodni, či hľadáš časť, počet percent alebo základ. Počítaj na papieri a výsledky zapisuj do aplikácie.",
    "estimatedTime": "20–25 min",
    "activities": [
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "vysvetliť, čo je jedno percento a základ, a previesť percentá na desatinné číslo",
          "rozlíšiť základ, počet percent a časť",
          "vyriešiť všetky tri typy úloh: nájsť časť, počet percent aj základ"
        ]
      },
      {
        "id": "idea",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Percento, základ a percentá ako desatinné číslo",
        "html": "<p>Slovo <span class=\"hl\">percento</span> pochádza z latinského <em>pro centum</em> – „na sto“. Rozdelíme celok na 100 rovnakých dielikov a jeden dielik je 1 %.</p><div class=\"formula\">1 % = <span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">100</span></span> = 0,01<span class=\"formula-note\">p % = <span class=\"frac\"><span class=\"frac-num\">p</span><span class=\"frac-den\">100</span></span> = p : 100</span></div><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Jedno percento (1 %)</div><p class=\"term-rule\"><span class=\"hl\">Jedna stotina základu.</span> Napríklad 1 % z 300 je 3.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Základ (Z)</div><p class=\"term-rule\">Celok, z ktorého percentá berieme – je to to, čo je <span class=\"hl\">100 %</span>. V zadaní býva za slovom „z“.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Počet percent (p)</div><p class=\"term-rule\">Číslo pred znakom %, ktoré hovorí, koľko stotín základu berieme.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Časť (Č), percentová hodnota</div><p class=\"term-rule\">Výsledná hodnota, ktorú p % základu tvorí.</p></div></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Základ je 200 €.</p><p>100 % = 200 € (celý základ)</p><p>50 % = 100 € (polovica)</p><p>10 % = 20 € (desatina)</p><p>1 % = 2 € (stotina)</p><p>200 % = 400 € (dvojnásobok)</p></div><div class=\"warning\"><strong>Pozor:</strong> 7 % nie je 0,7, ale 0,07 (7 % = 7/100). Percentá nad 100 % sú v poriadku – znamenajú viac ako celý základ.</div>",
        "remember": "Základ je vždy 100 %. Percentá sú stotiny základu."
      },
      {
        "id": "three",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Tri typy úloh na percentá",
        "html": "<p>V každej úlohe na percentá sú tri údaje: základ Z, počet percent p a časť Č. Dva sú dané, tretí hľadáme. Podľa toho, čo hľadáme, rozlíšime tri typy.</p><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">1. Hľadáme časť</div><p class=\"term-rule\">Č = Z · p/100 – základ vynásobíme desatinným číslom z percent.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">2. Hľadáme počet percent</div><p class=\"term-rule\">p = Č : Z · 100 – podiel časti a základu zapíšeme v percentách.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">3. Hľadáme základ</div><p class=\"term-rule\">Z = Č : (p/100) – časť vydelíme desatinným číslom z percent.</p></div></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p><strong>Typ 1:</strong> Koľko je 15 % z 240?</p><p>15 % = 0,15</p><p>0,15 · 240 = <strong>36</strong></p></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p><strong>Typ 2:</strong> Koľko percent zo 180 je 45?</p><p>45 : 180 = 0,25</p><p>0,25 = <strong>25 %</strong></p></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p><strong>Typ 3:</strong> 18 je 12 % z čísla. Aké je to číslo?</p><p>Aké číslo vynásobené 0,12 dá 18? Delíme: 18 : 0,12 = <strong>150</strong></p><p>Kontrola: 0,12 · 150 = 18 ✓</p></div>",
        "remember": "Najprv označ základ (to, čo je 100 %). Potom rozhodni, čo hľadáš: časť, percentá alebo základ."
      },
      {
        "id": "rule3",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Trojčlenka – ten istý výpočet po krokoch",
        "html": "<p>Ak sa ti nechce pamätať vzorce, použi <span class=\"hl\">trojčlenku</span>: z toho, čo poznáš, prejdeš najprv na 1 %, potom na 100 % alebo na hľadaný počet percent.</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>18 je 12 % zo Z. Nájdi Z.</p><p>12 % … 18</p><p>1 % … 18 : 12 = 1,5</p><p>100 % … 1,5 · 100 = <strong>150</strong></p></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Koľko je 35 % z 80?</p><p>100 % … 80</p><p>1 % … 80 : 100 = 0,8</p><p>35 % … 0,8 · 35 = <strong>28</strong></p></div><div class=\"warning\"><strong>Pozor:</strong> Najčastejšia chyba: použiť zlý základ. V zadaní „20 žiakov z 25 je koľko percent“ je základ 25 (celá trieda), nie 20. Tiež nezabudni percentá deliť 100 – 40 % z 50 nie je 40 · 50 = 2000, ale 0,4 · 50 = 20.</div>"
      },
      {
        "id": "c-def",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "pojmy",
        "question": "Pri počítaní s percentami: čo je základ?",
        "options": [
          "Jedna stotina celku (1 %).",
          "Celok, z ktorého percentá počítame; zodpovedá 100 %.",
          "Číslo pred znakom %, ktoré hovorí, koľko stotín berieme.",
          "Výsledná hodnota, ktorú tvoria vybrané percentá."
        ],
        "answer": 1,
        "correct": "Základ je celok, čiže 100 %. Jedna stotina základu je 1 %, číslo pred znakom % je počet percent a výsledok je časť.",
        "hint": "Ku ktorému číslu v úlohe patrí 100 %?"
      },
      {
        "id": "n1",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "Č = Z · p/100",
        "title": "Časť zo základu",
        "prompt": "Vypočítaj, koľko je 8 % z 350. Zapíš iba číslo.",
        "validate": "exact",
        "answer": 28,
        "success": "8 % = 0,08 a 0,08 · 350 = 28.",
        "hint": "Prevedieme 8 % na 0,08. Pozor: 8 % nie je 0,8.",
        "reveal": "Rozlož to: 1 % z 350 je 3,5; 8 % je teda 8 · 3,5 = 28."
      },
      {
        "id": "n2",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "typ 2",
        "title": "Koľko percent",
        "prompt": "Koľko percent z 60 je 21? Zapíš iba číslo (počet percent).",
        "validate": "exact",
        "answer": 35,
        "success": "21 : 60 = 0,35 = 35 %.",
        "hint": "Vydeľ 21 : 60 a posuň čiarku o dve miesta doprava.",
        "reveal": "Trojčlenka: 60 … 100 %, 1 … 100 : 60 %, 21 … 21 · 100 : 60 = 35 %."
      },
      {
        "id": "n3",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "typ 3",
        "title": "Hľadáme základ",
        "prompt": "63 je 35 % z čísla. Aké je to číslo?",
        "validate": "exact",
        "answer": 180,
        "success": "63 : 0,35 = 180. Kontrola: 0,35 · 180 = 63.",
        "hint": "Aké číslo vynásobené 0,35 dá 63? Delíme 63 : 0,35.",
        "reveal": "Trojčlenka: 35 % … 63, 1 % … 1,8, 100 % … 180."
      },
      {
        "id": "n-p2",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "časť a zvyšok",
        "title": "Koľko zostalo",
        "prompt": "Zo 800 výrobkov sa predalo 57 %. Koľko výrobkov zostalo?",
        "validate": "exact",
        "answer": 344,
        "success": "57 % z 800 = 456 predaných, zostalo 800 − 456 = 344 (alebo 43 % z 800).",
        "hint": "Najprv vypočítaj, koľko sa predalo, alebo rovno koľko percent zostalo.",
        "reveal": "Správne je 344: 100 % − 57 % = 43 % a 0,43 · 800 = 344."
      },
      {
        "id": "e1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "kritické myslenie",
        "question": "Jana počítala 40 % z 50 takto: 40 · 50 = 2 000. Čo urobila zle?",
        "options": [
          "Mala vydeliť 50 číslom 40.",
          "Zabudla percentá previesť na 0,4 (vydeliť 100).",
          "Mala odčítať 40 od 50.",
          "Nespravila chybu, 40 % z 50 je 2 000."
        ],
        "answer": 1,
        "correct": "Áno. 40 % je 0,4 a 0,4 · 50 = 20. Výsledok nemôže byť väčší ako 50, lebo 40 % je menej ako celok.",
        "hint": "Skús odhad: 40 % je menej ako polovica základu."
      },
      {
        "id": "manual",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Ceruzka má posledné slovo",
        "html": "<p><span class=\"mini-label\">ÚLOHA</span><br>Zapíš 12 % ako desatinné číslo. Potom vypočítaj na papieri a pri každej úlohe napíš, či hľadáš časť, počet percent alebo základ: a) 12 % z 350, b) koľko percent z 80 je 14, c) 27 je 18 % z akého čísla.</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: percentá",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Riešenia píš do zošita. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Vypočítaj: a) 10 % z 90, b) 25 % zo 360, c) 5 % zo 420.",
            "answer": "a) 0,1 · 90 = 9<br>b) 0,25 · 360 = 90<br>c) 0,05 · 420 = 21"
          },
          {
            "level": "zaklad",
            "text": "V triede je 28 žiakov, z toho 7 chlapcov. Koľko percent žiakov tvoria chlapci a koľko dievčatá?",
            "answer": "7 : 28 = 0,25 = 25 % chlapci<br>dievčatá: 100 % − 25 % = 75 %"
          },
          {
            "level": "rozsirenie",
            "text": "Číslo 18 je 24 % z neznámeho čísla. Nájdi ho trojčlenkou.",
            "answer": "24 % … 18<br>1 % … 18 : 24 = 0,75<br>100 % … 75<br>Kontrola: 0,24 · 75 = 18"
          },
          {
            "level": "rozsirenie",
            "text": "Z 40 litrov mlieka sa vyliali 15 %. Koľko litrov sa vyliali a koľko ich zostalo?",
            "answer": "0,15 · 40 = 6 litrov sa vyliali<br>zostalo 40 − 6 = 34 litrov (alebo 0,85 · 40 = 34)"
          },
          {
            "level": "bonus",
            "text": "Koľko percent z 80 je 20 % zo 120?",
            "answer": "20 % zo 120 = 0,2 · 120 = 24<br>24 : 80 = 0,3 = 30 %"
          },
          {
            "level": "bonus",
            "text": "Číslo A je 40 % z čísla B a číslo B je 50 % z čísla 300. Urč A.",
            "answer": "B = 0,5 · 300 = 150<br>A = 0,4 · 150 = 60"
          },
          {
            "level": "zaklad",
            "text": "Zapíš trojčlenku pod seba (hodnota … percentá) a vypočítaj: a) Koľko percent zo 75 l je 25,5 l? b) Koľko je 57 % z 800 a koľko zostane?",
            "answer": "a) 75 … 100 %; 25,5 … x; x = 25,5 · 100 : 75 = 34 %<br>b) 800 … 100 %; x … 57 %; x = 456; zostane 800 − 456 = 344"
          }
        ]
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "viem, čo je základ a jedno percento",
          "viem počítať časť, percentá aj základ"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka."
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 3,
        "text": "Vypočítaj 30 % zo 150.",
        "answer": "0,3 · 150 = 45"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 3,
        "text": "Koľko percent zo 72 je 18?",
        "answer": "18 : 72 = 0,25 = 25 %"
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 4,
        "text": "Číslo 9 je 12 % z neznámeho čísla. Aké je to číslo?",
        "answer": "9 : 0,12 = 75<br>Kontrola: 0,12 · 75 = 9"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 5,
        "text": "Zo 125 žiakov školy ide 40 % autobusom a 28 % pešo, ostatní bicyklom. Koľko žiakov ide bicyklom?",
        "answer": "bicykel: 100 − 40 − 28 = 32 %<br>0,32 · 125 = 40 žiakov"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 3,
        "text": "Vypočítaj 2,5 % z 800.",
        "answer": "0,025 · 800 = 20"
      },
      {
        "id": "w7",
        "level": "zaklad",
        "space": 4,
        "text": "Trojčlenkou pod seba: koľko percent zo 120 l je 18 l?",
        "answer": "120 l … 100 %; 18 l … x; x = 18 · 100 : 120 = 15 %"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 4,
        "text": "Zapíš zlomok 7/16 v percentách.",
        "answer": "7 : 16 = 0,4375 = 43,75 %"
      }
    ]
  }
});
