MathPlatform.registerModule({
  "id": "1-u03-h031",
  "teacher": {
    "placement": "1. ročník · Čísla, premenné, výrazy · 31. hodina: Racionálne, iracionálne, reálne čísla. Modul je zámerne skrátený a zameraný na obsah písomky (pojmy racionálne/iracionálne, zaraďovanie čísel do N, Z, Q, I, pravda/nepravda o množinách); prevody zlomkov, sčítanie zlomkov a číselná os sa v ňom nepoužívajú.",
    "prerequisites": [
      "prirodzené a celé čísla, zlomky a desatinné čísla zo ZŠ",
      "prevod zlomku na desatinné číslo delením a skracovanie zlomkov",
      "pojmy množina, podmnožina a symboly ∈, ⊂ z celku Množiny",
      "hodiny 28–30: deliteľnosť, NSN a D(pri skracovaní zlomkov)"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza tému „Racionálne, iracionálne, reálne čísla“. Obsah modulu rešpektuje jej miesto a rozsah v pláne."
    ],
    "planPerformance": [
      "Plán uvádza: riešiť úlohy finančnej matematiky; používať kritériá deliteľnosti; určiť NSN a NSD pomocou prvočíselného rozkladu. Ďalšie ciele modulu vychádzajú z uvedeného obsahu celku."
    ],
    "goals": [
      "zaradiť dané číslo do najmenšej z množín N, Z, Q, I (podľa zápisu aj podľa desatinného rozvoja: konečný, periodický, nekonečný neperiodický)",
      "rozhodnúť, či je tvrdenie o vzťahu N ⊂ Z ⊂ Q ⊂ R pravdivé, a nepravdivé vyvrátiť príkladom"
    ],
    "competencies": [
      "matematická komunikácia",
      "práca s reprezentáciami (zlomok, desatinný rozvoj, číselná os)",
      "argumentácia a kontrola výsledku",
      "prehľadný ručný zápis"
    ],
    "enrichment": [
      "Bonusová úloha v zbierke ukazuje, ako sa periodické číslo prevedie na zlomok pomocou neznámej x (bez nových pojmov).",
      "Odmocniny zatiaľ nezavádzame: √2 uvádzame len ako číslo, ktorého druhá mocnina je 2, a nepočítame s ním."
    ],
    "flow": [
      "2–3 min: úvodná obrazovka; kde sa v číslach skrýva nový typ čísla",
      "5 min: jeden výklad v aplikácii (Q, I, N ⊂ Z ⊂ Q ⊂ R, desatinný rozvoj)",
      "8–10 min: digitálne úlohy (zaraďovanie čísel, racionálne/iracionálne, pravda/nepravda, nájdi chybu)",
      "6–8 min: samostatná práca na papieri BEZ MOBILU a zbierka podľa úrovne",
      "2–3 min: spoločný rozbor najčastejších chýb podľa živých výsledkov"
    ],
    "diagnostics": [
      "pomýli si nekonečný desatinný rozvoj s iracionálnosťou (0,333… je racionálne)",
      "zamieňa číslo π so zaokrúhlenými hodnotami 3,14 alebo 22/7",
      "nevie zaradiť celé číslo do Q (5 = 5/1) ani zlomok rovný celému číslu (12/4) do Z",
      "neovláda vzťah N ⊂ Z ⊂ Q ⊂ R a pri tvrdení „každé racionálne číslo je celé“ nehľadá protipríklad"
    ],
    "partialUse": [
      "Pri nedostatku času vynechajte zbierku a bonus; jadro tvorí výklad a zaraďovanie čísel (matrix, racionálne/iracionálne, pravda/nepravda).",
      "Mobil nenahrádza zdôvodnenie na papieri."
    ]
  },
  "student": {
    "title": "Racionálne, iracionálne, reálne čísla",
    "subtitle": "Téma 31 · Čísla, premenné, výrazy",
    "intro": "Naučíš sa rozlišovať druhy čísel a z desatinného rozvoja poznať, či je číslo racionálne. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "20–25 min",
    "activities": [
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "povedať, čo je racionálne a čo iracionálne číslo",
          "zaradiť číslo do najmenšej z množín N, Z, Q, I",
          "z desatinného rozvoja rozhodnúť, či je číslo racionálne",
          "rozhodnúť, či je tvrdenie o číselných množinách pravdivé"
        ]
      },
      {
        "id": "concept",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Racionálne a iracionálne čísla",
        "html": "<div class=\"term-list\"><div class=\"term-item\"><span class=\"term-symbol\">N</span><div><div class=\"term-name\">Prirodzené číslo</div><p class=\"term-rule\">Číslo používané na počítanie: 1, 2, 3, … Množina N = {1, 2, 3, …}.</p></div></div><div class=\"term-item\"><span class=\"term-symbol\">Z</span><div><div class=\"term-name\">Celé číslo</div><p class=\"term-rule\">Prirodzené čísla, ich opačné čísla a nula: …, −2, −1, 0, 1, 2, … Množina Z.</p></div></div><div class=\"term-item\"><span class=\"term-symbol\">Q</span><div><div class=\"term-name\">Racionálne číslo</div><p class=\"term-rule\">Číslo, ktoré sa dá zapísať ako <span class=\"frac\"><span class=\"frac-num\">a</span><span class=\"frac-den\">b</span></span>, kde <strong>a je celé číslo</strong> a <strong>b je celé číslo rôzne od nuly</strong>.</p></div></div><div class=\"term-item\"><span class=\"term-symbol\">I</span><div><div class=\"term-name\">Iracionálne číslo</div><p class=\"term-rule\">Číslo, ktoré <strong>nemožno</strong> zapísať ako zlomok dvoch celých čísel. Napríklad π. Množina I.</p></div></div><div class=\"term-item\"><span class=\"term-symbol\">R</span><div><div class=\"term-name\">Reálne číslo</div><p class=\"term-rule\">Každé racionálne aj každé iracionálne číslo. Všetky reálne čísla ležia na číselnej osi.</p></div></div></div><div class=\"formula\">N ⊂ Z ⊂ Q ⊂ R<span class=\"formula-note\">Čítame: „N je podmnožinou Z, Z je podmnožinou Q, Q je podmnožinou R.“ Množina I je mimo N, Z, Q; R = Q ∪ I.</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD: PREČO JE 5 RACIONÁLNE</span><p>5 = <span class=\"frac\"><span class=\"frac-num\">5</span><span class=\"frac-den\">1</span></span> – celé číslo vydelené jednotkou je zlomok.</p><p>−2 = <span class=\"frac\"><span class=\"frac-num\">−2</span><span class=\"frac-den\">1</span></span>, 0,75 = <span class=\"frac\"><span class=\"frac-num\">75</span><span class=\"frac-den\">100</span></span> = <span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">4</span></span>, 1,2 = <span class=\"frac\"><span class=\"frac-num\">12</span><span class=\"frac-den\">10</span></span> = <span class=\"frac\"><span class=\"frac-num\">6</span><span class=\"frac-den\">5</span></span></p><p>Všetky tieto čísla sú racionálne, lebo vieme nájsť zlomok, ktorý ich zapisuje.</p></div><div class=\"example\"><span class=\"mini-label\">AKO POZNÁM PODĽA DESATINNÉHO ROZVOJA</span><p><strong>Konečný</strong> rozvoj (0,375) alebo <strong>periodický</strong> – opakuje sa skupina číslic (0,333… = 1/3; 0,363636… = 4/11) → číslo je <strong>racionálne</strong>.</p><p><strong>Nekonečný a neperiodický</strong> rozvoj → číslo je <strong>iracionálne</strong>: π = 3,14159265…; 0,1010010001… (za každou jednotkou je o nulu viac).</p></div><div class=\"warning\"><strong>Pozor:</strong> Číslo 0,333… sa nikdy nekončí, a predsa je racionálne (rovná sa 1/3). Iracionálne je len také, ktorého rozvoj je nekonečný <em>a zároveň</em> neperiodický. Číslo 3,14 nie je π, je to len jeho racionálne priblíženie. Zlomok môže byť aj celé číslo: 12/4 = 3, −20/4 = −5.</div>",
        "remember": "Racionálne = dá sa zapísať ako zlomok celých čísel; má konečný alebo periodický rozvoj. Iracionálne = rozvoj nekonečný a neperiodický. Každé celé číslo je racionálne."
      },
      {
        "id": "c-period",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "desatinný rozvoj",
        "question": "Číslo 0,272727… má desatinný rozvoj, v ktorom sa stále opakuje skupina 27. Ktoré tvrdenie o ňom je pravdivé?",
        "options": [
          "Je iracionálne, lebo sa jeho rozvoj nikdy nekončí.",
          "Nie je reálne číslo, lebo nemá konečný zápis.",
          "Je racionálne, lebo má periodický rozvoj."
        ],
        "answer": 2,
        "correct": "Presne tak, 0,272727… = 3/11. Rozvoj sa nekončí, ale opakuje sa, preto je číslo racionálne.",
        "hint": "Iracionálne číslo musí mať rozvoj nekonečný a súčasne neperiodický. Platí to tu?"
      },
      {
        "id": "matrix-classify",
        "type": "matrix",
        "phase": "PRECVIČ",
        "skill": "číselné obory",
        "title": "Zaraď každé číslo do najmenšej skupiny",
        "labels": ["Prirodzené číslo", "Celé záporné číslo", "Racionálne, nie celé", "Iracionálne číslo"],
        "items": [
          { "text": "12", "answer": "Prirodzené číslo" },
          { "text": "−7", "answer": "Celé záporné číslo" },
          { "text": "0,5", "answer": "Racionálne, nie celé" },
          { "text": "4/9", "answer": "Racionálne, nie celé" },
          { "text": "0,666…", "answer": "Racionálne, nie celé" },
          { "text": "−20/4", "answer": "Celé záporné číslo" },
          { "text": "π", "answer": "Iracionálne číslo" },
          { "text": "0,1010010001…", "answer": "Iracionálne číslo" }
        ]
      },
      {
        "id": "sort-rational",
        "type": "sortChoice",
        "phase": "PRECVIČ",
        "skill": "desatinný rozvoj",
        "title": "Racionálne alebo iracionálne?",
        "question": "Rozhodni podľa zápisu, či je číslo racionálne.",
        "labels": ["Racionálne", "Iracionálne"],
        "items": [
          { "text": "−3/7", "answer": true, "why": "Je to zlomok celých čísel." },
          { "text": "2,5", "answer": true, "why": "Konečný rozvoj: 2,5 = 5/2." },
          { "text": "0,121212… (opakuje sa 12)", "answer": true, "why": "Periodický rozvoj, rovná sa 4/33." },
          { "text": "π", "answer": false, "why": "Nekonečný neperiodický rozvoj; 3,14 je iba priblíženie." },
          { "text": "1,23456789101112… (za sebou idúce čísla)", "answer": false, "why": "Rozvoj je nekonečný a neperiodický, nikdy sa nezačne pravidelne opakovať." },
          { "text": "√2", "answer": false, "why": "Rozvoj 1,41421356… je nekonečný a neperiodický." }
        ]
      },
      {
        "id": "sort-subsets",
        "type": "sortChoice",
        "phase": "PRECVIČ",
        "skill": "vzťahy medzi množinami čísel",
        "title": "Pravda alebo nepravda?",
        "question": "Rozhodni, či je tvrdenie o číselných množinách pravdivé.",
        "labels": ["Pravda", "Nepravda"],
        "items": [
          { "text": "Každé prirodzené číslo je celé číslo.", "answer": true, "why": "N ⊂ Z." },
          { "text": "Každé celé číslo je racionálne (napr. 5 = 5/1).", "answer": true, "why": "Z ⊂ Q, celé číslo zapíšeme s menovateľom 1." },
          { "text": "Každé racionálne číslo je celé číslo.", "answer": false, "why": "Napr. 1/2 je racionálne, ale nie je celé." },
          { "text": "Existuje číslo, ktoré je zároveň racionálne aj iracionálne.", "answer": false, "why": "Čo sa dá zapísať ako zlomok, nie je iracionálne; množiny Q a I nemajú spoločný prvok." },
          { "text": "Každé iracionálne číslo je reálne.", "answer": true, "why": "R tvoria racionálne aj iracionálne čísla." },
          { "text": "Každé reálne číslo je racionálne.", "answer": false, "why": "Napr. π je reálne, ale nie je racionálne." }
        ]
      },
      {
        "id": "n-int-count",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "číselné obory",
        "title": "Koľko celých čísel?",
        "prompt": "Z čísel −8; 2,5; 14; 3/5; −1/2; 20/4 vyber tie, ktoré sú celé čísla. Koľko ich je?",
        "validate": "exact",
        "answer": 3,
        "success": "Celé čísla sú −8, 14 a 20/4 = 5. Čísla 2,5; 3/5 a −1/2 celé nie sú.",
        "hint": "Zlomky najprv vydeľ. Zlomok môže byť celé číslo, ak sa čitateľ delí menovateľom.",
        "reveal": "Správne sú 3: −8, 14 a 20/4 = 5."
      },
      {
        "id": "hunt-third",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak tvrdí: „Číslo 0,333… sa nikdy nekončí, preto nie je racionálne.“ Čo je na tom nesprávne?",
        "options": [
          "Nič, každé nekonečné číslo je iracionálne.",
          "Číslo 0,333… nie je kladné.",
          "Rozvoj sa opakuje (je periodický) a číslo sa rovná zlomku 1/3, preto je racionálne."
        ],
        "answer": 2,
        "correct": "Presne. Nekonečný rozvoj nestačí na iracionálnosť, musí byť aj neperiodický.",
        "hint": "Existuje zlomok, ktorého hodnota je 0,333…?"
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha na papier",
        "html": "<p>Odlož zariadenie. Pre každé z čísel <strong>−9; 18/6; 0,35; 0,666…; 5/7; π; 0,1020030004…</strong> zapíš, do ktorej najmenšej množiny patrí: N, Z, Q alebo I.</p><ol><li>Pri každom čísle napíš krátke zdôvodnenie (napr. „zlomok, ktorý sa rovná celému číslu“, „periodický rozvoj“).</li><li>Rozhodni, či je tvrdenie pravdivé: „Každé celé číslo je racionálne.“ a „Každé racionálne číslo je celé.“ Nepravdivé vyvráť príkladom.</li></ol><p>Postup zapíš tak, ako by si ho písal/a do písomky.</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: racionálne a reálne čísla",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Riešenia píš do zošita. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Zapíš ako zlomok v základnom tvare: a) 0,45 b) 0,08 c) 2,5 d) −1,2",
            "answer": "a) 45/100 = 9/20<br>b) 8/100 = 2/25<br>c) 25/10 = 5/2<br>d) −12/10 = −6/5"
          },
          {
            "level": "zaklad",
            "text": "Zapíš ako desatinné číslo (použi písomné delenie): a) 7/8 b) 5/6 c) 4/11 d) 3/20. Pri periodickom rozvoji označ periódu.",
            "answer": "a) 0,875<br>b) 0,8333… = 0,8(3)<br>c) 0,363636… = 0,(36)<br>d) 0,15"
          },
          {
            "level": "zaklad",
            "text": "Ku každému z čísel 15; −4; 0,2; 2/3; π; −7/5 napíš všetky množiny z N, Z, Q, I, R, do ktorých patrí.",
            "answer": "15: N, Z, Q, R<br>−4: Z, Q, R<br>0,2: Q, R<br>2/3: Q, R<br>π: I, R<br>−7/5: Q, R"
          },
          {
            "level": "rozsirenie",
            "text": "Zoraď od najmenšieho po najväčšie: −1/2; 0,4; −0,6; 1/3; 0,35.",
            "answer": "Hodnoty: −0,5; 0,4; −0,6; 0,333…; 0,35.<br>−0,6 &lt; −1/2 &lt; 1/3 &lt; 0,35 &lt; 0,4"
          },
          {
            "level": "rozsirenie",
            "text": "Nájdi aspoň jedno racionálne a jedno iracionálne číslo, ktoré leží medzi 0,3 a 0,4. Pri tom iracionálnom zdôvodni, prečo je iracionálne.",
            "answer": "Racionálne napr. 0,35 = 7/20 alebo 1/3 (0,333…).<br>Iracionálne napr. 0,3101001000100001… – za každou jednotkou pribúda ďalšia nula, preto je rozvoj nekonečný a neperiodický."
          },
          {
            "level": "rozsirenie",
            "text": "Rozhodni, či sú tvrdenia pravdivé, a oprav nepravdivé: a) Každé iracionálne číslo je reálne. b) 0,555… je iracionálne. c) Číslo −8 patrí do Z aj do Q. d) Každé racionálne číslo je celé.",
            "answer": "a) pravda<br>b) nepravda; 0,555… = 5/9 je racionálne (periodický rozvoj)<br>c) pravda (Z ⊂ Q)<br>d) nepravda; napr. 1/2 je racionálne, ale nie celé"
          },
          {
            "level": "bonus",
            "text": "Označ x = 0,444… Vyjadri 10x a odpočítaj x. Ukáž, že 0,444… = 4/9. Rovnakým spôsobom (násob číslom 100) preveď 0,(36) na zlomok v základnom tvare.",
            "answer": "10x = 4,444…<br>10x − x = 4,444… − 0,444… = 4, teda 9x = 4 a x = 4/9.<br>y = 0,3636…, 100y = 36,3636…, 99y = 36, y = 36/99 = 4/11."
          }
        ]
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "zaradenie čísla do N, Z, Q, I",
          "rozlíšenie racionálneho a iracionálneho čísla podľa rozvoja",
          "pravda/nepravda o číselných množinách"
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
        "text": "Zapíš ako zlomok v základnom tvare: a) 0,35 b) 1,6 c) 0,125 d) −0,04",
        "answer": "a) 35/100 = 7/20<br>b) 16/10 = 8/5<br>c) 125/1000 = 1/8<br>d) −4/100 = −1/25"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 5,
        "text": "Zapíš desatinným číslom (písomné delenie): a) 5/16 b) 2/9 c) 7/12",
        "answer": "a) 0,3125<br>b) 0,222… = 0,(2)<br>c) 0,58333… = 0,58(3)"
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 5,
        "text": "Do tabuľky zapíš pre každé z čísel 9; −6; 0,25; 5/3; π; 0,1010010001… znak ✓, ak patrí do množiny N, Z, Q, I, resp. R.",
        "answer": "9: N, Z, Q, R<br>−6: Z, Q, R<br>0,25: Q, R<br>5/3: Q, R<br>π: I, R<br>0,1010010001…: I, R"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 7,
        "text": "Nakresli číselnú os (jednotka 5 cm) a umiestni na ňu čísla −1/2; 0,25; 5/4; √2 (≈ 1,41) a 1,7. Zapíš ich vzostupne.",
        "answer": "−1/2 &lt; 0,25 &lt; 5/4 (1,25) &lt; √2 (≈ 1,41) &lt; 1,7"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 4,
        "text": "Rozhodni a zdôvodni: a) Je 22/7 rovné číslu π? b) Je číslo 0,909090… (opakuje sa 90) racionálne? c) Je 0,25 reálne číslo?",
        "answer": "a) Nie; 22/7 = 3,142857… je len racionálne priblíženie π.<br>b) Áno, rozvoj je periodický; rovná sa 10/11.<br>c) Áno, je racionálne, a teda aj reálne."
      },
      {
        "id": "w7",
        "level": "zaklad",
        "space": 5,
        "text": "Sčítaj alebo odčítaj so spoločným menovateľom z prvočíselného rozkladu: a) 5/18 + 7/12 b) 11/30 − 3/20",
        "answer": "a) 18 = 2 · 3 · 3, 12 = 2 · 2 · 3, NSN = 36: 10/36 + 21/36 = 31/36<br>b) 30 = 2 · 3 · 5, 20 = 2 · 2 · 5, NSN = 60: 22/60 − 9/60 = 13/60"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 6,
        "text": "Použi x = 0,777… a 10x na to, aby si dokázal/a, že 0,777… = 7/9. Potom preveď 0,(18) na zlomok v základnom tvare.",
        "answer": "10x − x = 7, 9x = 7, x = 7/9.<br>y = 0,1818…, 100y − y = 18, y = 18/99 = 2/11."
      }
    ]
  }
});
