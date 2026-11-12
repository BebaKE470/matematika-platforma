MathPlatform.registerModule({
  "id": "1-u03-h037",
  "teacher": {
    "placement": "1. ročník · Čísla, premenné, výrazy · 37. hodina: Kontrolná písomná práca",
    "prerequisites": [
      "kritériá deliteľnosti, prvočísla a prvočíselný rozklad, NSD a NSN",
      "číselné množiny N, Z, Q, I, R a vzťah N ⊂ Z ⊂ Q ⊂ R",
      "vlastnosti operácií (komutatívnosť, asociatívnosť, distributívnosť)",
      "percentá: časť, základ, počet percent, zľava a zdraženie, opakovaná zmena ceny"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza tému „Kontrolná písomná práca“. Obsah modulu je krátke opakovanie celého tematického celku Čísla, premenné, výrazy (hodiny 28–36) pred písomkou."
    ],
    "planPerformance": [
      "Plán uvádza: riešiť úlohy finančnej matematiky; používať kritériá deliteľnosti; určiť NSN a NSD pomocou prvočíselného rozkladu. Ďalšie ciele modulu vychádzajú z uvedeného obsahu celku."
    ],
    "goals": [
      "zopakovať si kľúčové postupy celku: kritériá deliteľnosti, NSD a NSN, číselné množiny a percentá",
      "overiť sa na krátkych samostatných otázkach v štýle písomky",
      "zistiť, čo si pred písomkou ešte prejsť"
    ],
    "competencies": [
      "matematická komunikácia",
      "výber správneho postupu",
      "argumentácia a kontrola výsledku",
      "sebahodnotenie pripravenosti"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie spôsobu práce: interpretácia, modelovanie, reprezentácie a zdôvodnenie. Neurčuje poradie učiva."
    ],
    "flow": [
      "2–3 min: čo bude v písomke",
      "5 min: stručné opakovanie celku v aplikácii",
      "5–7 min: samostatné kontrolné otázky s okamžitou spätnou väzbou",
      "2 min: sebahodnotenie a rozhodnutie, čo si ešte prejsť; potom samostatná písomka na papieri alebo v mobile"
    ],
    "diagnostics": [
      "žiak vie použiť kritériá deliteľnosti bez delenia",
      "žiak rozlišuje, kedy sa hľadá NSD a kedy NSN",
      "žiak vie zaradiť číslo do N, Z, Q alebo I",
      "žiak správne určí základ a nedopustí sa chyby pri opakovanej percentovej zmene"
    ],
    "partialUse": [
      "Modul možno použiť celý približne 15 minút alebo vybrať jeho časť.",
      "Samotnú písomku spúšťaš osobitne záznamami 1-u03-h037p (príprava) a 1-u03-h037b (ostrá písomka).",
      "Mobil nenahrádza ručné počítanie, náčrt, presný zápis ani argumentáciu."
    ]
  },
  "student": {
    "title": "Kontrolná písomná práca: opakovanie celku",
    "subtitle": "Téma 37 · Čísla, premenné, výrazy",
    "intro": "Pred písomkou si rýchlo prejdeš, čo sme sa v celku naučili, a vyskúšaš si krátke otázky v štýle písomky. Počítaj na papieri a do aplikácie zapisuj výsledok.",
    "estimatedTime": "10–15 min digitálne + písomka",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo bude v písomke",
        "html": "<p>Písomka overuje celý tematický celok: <strong>deliteľnosť</strong> a prvočísla, <strong>NSD a NSN</strong>, <strong>číselné množiny</strong>, vlastnosti operácií a <strong>percentá</strong>. Postup si zapisuj po krokoch, lebo za každý správny krok dostaneš body.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "pripomenúť si kritériá deliteľnosti a postup pri NSD a NSN",
          "vedieť zaradiť číslo do N, Z, Q alebo I",
          "počítať s percentami vrátane zľavy a opakovanej zmeny"
        ]
      },
      {
        "id": "divisibility",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Kritériá deliteľnosti",
        "html": "<div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">2, 5, 10</div><p class=\"term-rule\">Číslo je deliteľné 2, ak končí párnou číslicou, 5, ak končí 0 alebo 5, a 10, ak končí 0.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">3 a 9</div><p class=\"term-rule\">Deliteľné 3, ak je ciferný súčet deliteľný 3. Deliteľné 9, ak je ciferný súčet deliteľný 9.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">4 a 6</div><p class=\"term-rule\">Deliteľné 4, ak je posledné dvojčíslie deliteľné 4. Deliteľné 6, ak je deliteľné 2 aj 3.</p></div></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Číslo 4 572: je párne a 4 + 5 + 7 + 2 = 18. Je teda deliteľné 2, 3, 6 aj 9. Posledné dvojčíslie 72 je deliteľné 4, takže aj 4 572 je deliteľné 4.</p></div>"
      },
      {
        "id": "nsd-nsn",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "NSD a NSN cez prvočíselný rozklad",
        "html": "<ol class=\"steps\"><li>Obe čísla rozlož na prvočísla (napr. 12 = 2² · 3 a 18 = 2 · 3²).</li><li><strong>NSD:</strong> vezmi len prvočísla z oboch rozkladov, každé s menším exponentom.</li><li><strong>NSN:</strong> vezmi všetky prvočísla z oboch rozkladov, každé s väčším exponentom.</li></ol><div class=\"formula\">NSD(12, 18) = 2 · 3 = 6<br>NSN(12, 18) = 2² · 3² = 36</div><div class=\"warning\"><strong>Pozor:</strong> NSD hľadáme pri deľení na rovnaké časti (balíčky). NSN hľadáme, keď sa niečo opakuje a čakáme, kedy sa to znova stretne (autobusy).</div>"
      },
      {
        "id": "sets",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Číselné množiny: N ⊂ Z ⊂ Q ⊂ R",
        "html": "<div class=\"formula\">N ⊂ Z ⊂ Q ⊂ R</div><p>Každé prirodzené číslo je celé, každé celé je racionálne a každé racionálne je reálne. <strong>Iracionálne čísla</strong> (napr. π) sa nedajú zapísať zlomkom celých čísel. Nepatria do Q, ale spolu s Q tvoria množinu R.</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>12/4 = 3 patrí do N. −5 patrí do Z (nie do N). 0,75 = 3/4 patrí do Q (nie do Z). Číslo π patrí do I.</p></div><div class=\"warning\"><strong>Pozor:</strong> zlomok ešte nemusí znamenať, že číslo nie je celé. Vždy ho najprv zjednoduš.</div>"
      },
      {
        "id": "percent",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Percentá a zmena ceny",
        "html": "<div class=\"formula\">p % zo základu = základ · p/100</div><ol class=\"steps\"><li>Urč <strong>základ</strong> (to, čo je 100 %).</li><li>Zľava o p %: násobíme (100 − p)/100. Zdraženie o p %: násobíme (100 + p)/100.</li><li>Pri dvoch zmenách po sebe počítaj druhú zmenu z <strong>novej ceny</strong>.</li></ol><div class=\"warning\"><strong>Pozor:</strong> zdraženie o 20 % a potom zlacnenie o 20 % nevráti pôvodnú cenu, lebo zľava sa počíta z vyššej ceny.</div>"
      },
      {
        "id": "c-div",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "kritériá deliteľnosti",
        "question": "Ktoré z týchto čísel je deliteľné číslom 6?",
        "options": [
          "1 245",
          "1 238",
          "1 250",
          "1 236"
        ],
        "answer": 3,
        "correct": "1 236 je párne a ciferný súčet 1 + 2 + 3 + 6 = 12 je deliteľný 3, takže je deliteľné 2 aj 3, teda 6.",
        "hint": "Číslo je deliteľné 6, ak je deliteľné 2 aj 3. Skontroluj oba predpoklady."
      },
      {
        "id": "n-nsd",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "NSD",
        "title": "NSD dvoch čísel",
        "prompt": "Urč NSD(36, 54). Pomôž si prvočíselným rozkladom: 36 = 2² · 3² a 54 = 2 · 3³.",
        "validate": "exact",
        "answer": 18,
        "success": "Spoločné prvočísla sú 2 a 3 s menšími exponentmi: 2 · 3² = 18.",
        "hint": "Do NSD patria len prvočísla z oboch rozkladov, každé s menším exponentom.",
        "reveal": "Správne je 18: 2¹ · 3² = 2 · 9."
      },
      {
        "id": "c-nsn",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "NSD alebo NSN",
        "question": "O 8:00 odišli zo zastávky súčasne dve linky. Prvá chodí každých 8 minút, druhá každých 12 minút. Za koľko minút odídu súčasne znova?",
        "options": [
          "4",
          "24",
          "20",
          "96"
        ],
        "answer": 1,
        "correct": "Hľadáme NSN(8, 12) = 24, lebo čakáme na prvý spoločný násobok.",
        "hint": "Čakáme, kedy sa opakovania stretnú. Je to úloha na NSD alebo na NSN?"
      },
      {
        "id": "c-sets",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "číselné množiny",
        "question": "Do ktorej z množín N, Z, Q, I patrí číslo −8/2 ako do najmenšej z nich?",
        "options": [
          "N",
          "Z",
          "Q",
          "I"
        ],
        "answer": 1,
        "correct": "−8/2 = −4. Je to celé záporné číslo, preto ho zaradíme do Z (nie do N).",
        "hint": "Zlomok najprv zjednoduš. Je výsledok prirodzené číslo?"
      },
      {
        "id": "c-irr",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "číselné množiny",
        "question": "Ktoré z týchto čísel je iracionálne?",
        "options": [
          "0,25",
          "1/3",
          "π",
          "−7"
        ],
        "answer": 2,
        "correct": "Číslo π sa nedá zapísať zlomkom celých čísel. Ostatné sú racionálne: 0,25 = 1/4, a −7 = −7/1.",
        "hint": "Ktoré číslo sa nedá zapísať zlomkom celých čísel?"
      },
      {
        "id": "n-pct",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "zľava",
        "title": "Cena po zľave",
        "prompt": "Telefón stál 250 € a zlacnil o 20 %. Koľko eur stojí teraz?",
        "validate": "exact",
        "answer": 200,
        "success": "Zľava je 20 % z 250 = 50 €, nová cena je 250 − 50 = 200 €.",
        "hint": "Zľava je 20 % z pôvodnej ceny. Tú odpočítaj od 250.",
        "reveal": "Správne je 200: 250 · 0,80."
      },
      {
        "id": "c-twice",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "opakovaná zmena",
        "question": "Cena tovaru 100 € sa najprv zvýšila o 10 % a potom sa nová cena znížila o 10 %. Aká je konečná cena?",
        "options": [
          "100 €",
          "99 €",
          "90 €",
          "110 €"
        ],
        "answer": 1,
        "correct": "Po zvýšení je cena 110 €. Zľava 10 % z 110 € je 11 €, takže konečná cena je 99 €.",
        "hint": "Druhú zmenu počítaj z novej ceny po prvej zmene."
      },
      {
        "id": "n-base",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "základ",
        "title": "Hľadanie základu",
        "prompt": "12 % z istého čísla je 18. Aké je to číslo?",
        "validate": "exact",
        "answer": 150,
        "success": "1 % je 18 : 12 = 1,5, preto 100 % je 150.",
        "hint": "Najprv zisti, koľko je jedno percento.",
        "reveal": "Správne je 150: 18 : 12 · 100."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Som pripravený/á na písomku?",
        "skills": [
          "kritériá deliteľnosti",
          "prvočíselný rozklad, NSD a NSN",
          "zaradenie čísel do N, Z, Q, I",
          "vlastnosti operácií",
          "percentá a zmena ceny"
        ],
        "prompt": "Označ, ako dobre to zvládaš. Nie je to známka; porovnaj svoj pocit s výsledkom otázok. Čo máš 🔴 alebo 🟡, si pred písomkou ešte raz prejdi."
      }
    ]
  }
});
