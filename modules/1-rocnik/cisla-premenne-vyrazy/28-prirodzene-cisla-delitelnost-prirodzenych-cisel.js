MathPlatform.registerModule({
  "id": "1-u03-h028",
  "teacher": {
    "placement": "1. ročník · Čísla, premenné, výrazy · 28. hodina: Prirodzené čísla, Deliteľnosť prirodzených čísel",
    "prerequisites": [
      "delenie so zvyškom a bez zvyšku, násobilka, sčítanie viacciferných čísel zo ZŠ",
      "pojmy deliteľ a násobok (pripomenuté na začiatku modulu)",
      "NSN a NSD sa v tejto hodine nepoužívajú, prídu až na 29. hodine"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza tému „Prirodzené čísla, Deliteľnosť prirodzených čísel“. Obsah modulu rešpektuje jej miesto a rozsah v pláne."
    ],
    "planPerformance": [
      "Plán uvádza: riešiť úlohy finančnej matematiky; používať kritériá deliteľnosti; určiť NSN a NSD pomocou prvočíselného rozkladu. Ďalšie ciele modulu vychádzajú z uvedeného obsahu celku."
    ],
    "goals": [
      "rozhodnúť bez delenia, či je číslo deliteľné 2, 3, 4, 5, 6, 8, 9, 10, 12, 20, 25 a 50, a vedieť, na ktorú časť zápisu čísla sa pri ktorom kritériu pozerať",
      "zapísať prirodzené číslo v desiatkovej sústave, určiť ciferný súčet a vysvetliť deliteľnosť zápisom a = k · b, b | a; rozlíšiť súdeliteľné a nesúdeliteľné čísla",
      "doplniť chýbajúcu číslicu (hviezdičku) tak, aby bolo číslo deliteľné daným číslom",
      "rozlíšiť prvočíslo a zložené číslo (1 nie je ani jedno) a vedieť to zdôvodniť",
      "rozložiť číslo na súčin deliteľov a na súčin prvočísel (stromčekom aj tabuľkou) a zapísať prvočíselný rozklad pomocou mocnín (príprava na NSN a NSD na 29. hodine)",
      "vyhnúť sa typickým chybám: ciferný súčet použitý pri 4, „6 = 2 alebo 3“, 1 ako prvočíslo, nepárne číslo = prvočíslo"
    ],
    "competencies": [
      "matematická komunikácia",
      "argumentácia a kontrola výsledku",
      "práca s pojmami (deliteľ, násobok, prvočíslo)",
      "prehľadný ručný zápis rozkladu"
    ],
    "enrichment": [
      "Obohatenie (nie štandard): prečo kritérium 4 vyžaduje len posledné dve číslice a kritérium 3 všetky (100 je deliteľné 4, ale 10 dáva pri delení 3 zvyšok 1) a prečo sa pri skúšaní prvočísla stačí zastaviť pri prvočísle, ktorého druhá mocnina je väčšia než číslo."
    ],
    "flow": [
      "3–4 min: zápis čísla v desiatkovej sústave, ciferný súčet, deliteľnosť a = k · b, súdeliteľné čísla",
      "2–3 min: opakovanie pojmov deliteľ a násobok na jednom príklade",
      "10–12 min: kritériá 2, 5, 10, potom 4, potom 3 a 9, potom 6 (v aplikácii vždy vysvetlenie, jedna-dve úlohy)",
      "8–10 min: prvočísla, zložené čísla a prvočíselný rozklad (vysvetlenie, úlohy, hľadanie chyby)",
      "8–10 min: úloha na papieri (BEZ MOBILU) a zbierka úloh podľa úrovne",
      "3–5 min: spoločný rozbor chýb podľa živých výsledkov, krátka reflexia"
    ],
    "diagnostics": [
      "žiak vie, že pri 3 a 9 sčítava všetky číslice, ale pri 4 sa pozerá len na posledné dve",
      "žiak pri 6 skúša obe podmienky (2 aj 3), nie jednu z nich",
      "žiak nepovažuje 1 za prvočíslo a nepovažuje každé nepárne číslo za prvočíslo",
      "žiak vie dokončiť prvočíselný rozklad (delí, kým nezostane 1) a zapísať ho mocninami",
      "žiak vie doplniť číslicu na správne miesto: pri 3 skúša číslice podľa ciferného súčtu, pri 4 a 8 len podľa posledných číslic"
    ],
    "partialUse": [
      "Pri nedostatku času použite iba časti o kritériách (zápis čísla, kroky 2, 5, 10, 4, 3, 9, 6, doplnenie číslice) a prvočíselný rozklad nechajte na začiatok 29. hodiny. Kritériá 8, 20, 25 a 50 sú rozšírenie.",
      "Mobil nenahrádza ručné počítanie, rozklad v zošite ani zdôvodnenie."
    ]
  },
  "student": {
    "title": "Deliteľnosť, prvočísla a prvočíselný rozklad",
    "subtitle": "Téma 28 · Čísla, premenné, výrazy",
    "intro": "Naučíš sa zapísať číslo v desiatkovej sústave a spoznať bez delenia, či je číslo deliteľné 2, 3, 4, 5, 6, 8, 9 alebo 10. Doplníš chýbajúcu číslicu. Potom zistíš, čo sú prvočísla, a rozložíš čísla na súčin prvočísel. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "35–45 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Deliteľ a násobok",
        "html": "<p>Prirodzené čísla sú 1, 2, 3, 4, … Číslo <strong>a je deliteľné číslom b</strong>, ak po delení a : b vyjde prirodzené číslo, teda <span class=\"hl\">bez zvyšku</span>.</p><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Deliteľ</div><p class=\"term-rule\">Číslo, ktorým delíme bez zvyšku. 6 je deliteľ čísla 42, lebo 42 : 6 = 7.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Násobok</div><p class=\"term-rule\">Číslo, ktoré dostaneme vynásobením prirodzeným číslom. 42 je násobok čísla 6, lebo 6 · 7 = 42.</p></div></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>42 : 6 = 7, bez zvyšku, preto je 42 deliteľné 6.</p><p>45 : 6 = 7 a zvyšok 3, preto 45 <strong>nie je</strong> deliteľné 6.</p></div><p>Delenie veľkých čísel trvá dlho. Dnes sa naučíš <strong>kritériá deliteľnosti</strong>: krátke pravidlá, ktoré povedia „áno“ alebo „nie“ bez delenia.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "zapísať číslo v desiatkovej sústave a určiť ciferný súčet",
          "rozhodnúť bez delenia, či je číslo deliteľné 2, 3, 4, 5, 6, 8, 9 alebo 10",
          "doplniť chýbajúcu číslicu tak, aby bolo číslo deliteľné daným číslom",
          "rozlíšiť prvočíslo od zloženého čísla",
          "rozložiť číslo na súčin prvočísel stromčekom aj tabuľkou"
        ]
      },
      {
        "id": "e-decimal",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Zápis čísla a ciferný súčet",
        "html": "<p>Číslo zapisujeme <strong>číslicami</strong> (ciframi) 0, 1, 2, …, 9. Číslica je grafický znak, číslo je jeho hodnota: „trojka“ je číslica, „tri“ je číslo. Používame 10 číslic, preto hovoríme o <strong>desiatkovej sústave</strong>. Hodnota číslice závisí od jej <span class=\"hl\">miesta</span> v zápise.</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>53 708 = 5 · 10⁴ + 3 · 10³ + 7 · 10² + 0 · 10¹ + 8 · 10⁰</p><p>(10⁰ = 1, takže posledný člen je 8 · 1 = 8.)</p></div><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Ciferný súčet</div><p class=\"term-rule\">Každú číslicu zápisu berieme ako jednociferné číslo a všetky tieto čísla <span class=\"hl\">sčítame</span>. Napríklad pre 53 708: 5 + 3 + 7 + 0 + 8 = 23.</p></div></div>",
        "remember": "Ciferný súčet je súčet všetkých číslic zápisu čísla."
      },
      {
        "id": "n-expand",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "zápis čísla a ciferný súčet",
        "title": "Číslo z rozvinutého zápisu",
        "prompt": "Aké číslo je zapísané ako 4 · 10⁴ + 0 · 10³ + 2 · 10² + 9 · 10¹ + 1 · 10⁰ ? Zapíš ho bez medzier.",
        "validate": "exact",
        "answer": 40291,
        "success": "40 000 + 0 + 200 + 90 + 1 = 40 291. Jeho ciferný súčet je 4 + 0 + 2 + 9 + 1 = 16.",
        "hint": "Každý člen je číslica krát mocnina desiatky: 4 · 10⁴ = 40 000, 0 · 10³ = 0, … Sčítaj ich.",
        "reveal": "Správne je 40291: 40 000 + 0 + 200 + 90 + 1."
      },
      {
        "id": "n-cs",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "zápis čísla a ciferný súčet",
        "title": "Ciferný súčet",
        "prompt": "Aký je ciferný súčet čísla 90 417?",
        "validate": "exact",
        "answer": 21,
        "success": "9 + 0 + 4 + 1 + 7 = 21. Číslica 0 súčet nemení, ale do zápisu patrí.",
        "hint": "Sčítaj všetky číslice zápisu: 9, 0, 4, 1 a 7.",
        "reveal": "Správne je 21: 9 + 0 + 4 + 1 + 7."
      },
      {
        "id": "e-def",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Deliteľnosť zapísaná symbolmi",
        "html": "<p>O dvoch prirodzených číslach a, b hovoríme, že <strong>a je násobkom b</strong>, alebo že <strong>b je deliteľom a</strong>, ak existuje prirodzené číslo k, pre ktoré platí:</p><div class=\"formula\">a = k · b<span class=\"formula-note\">Zápis b | a čítame „b delí a“ alebo „b je deliteľom a“. Rovnako vyjadrujú „a je deliteľné b“ a „b delí a“.</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>91 = 13 · 7, preto 7 | 91 aj 13 | 91.</p><p>91 : 7 = 13 bez zvyšku.</p></div><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Súdeliteľné čísla</div><p class=\"term-rule\">Majú <span class=\"hl\">spoločného deliteľa väčšieho ako 1</span>. Čísla 15 a 805 majú spoločného deliteľa 5, takže sú súdeliteľné.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Nesúdeliteľné čísla</div><p class=\"term-rule\">Ich jediný spoločný deliteľ je 1. Čísla 44 (delitele 1, 2, 4, 11, 22, 44) a 125 (delitele 1, 5, 25, 125) sú nesúdeliteľné.</p></div></div><div class=\"warning\"><strong>Pozor:</strong> Nesúdeliteľné čísla nemusia byť prvočísla. Čísla 8 a 15 sú obe zložené a predsa nemajú spoločného deliteľa väčšieho ako 1.</div>",
        "remember": "b | a znamená a = k · b. Súdeliteľné čísla majú spoločného deliteľa väčšieho ako 1."
      },
      {
        "id": "c-sym",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "deliteľnosť a = k · b",
        "question": "Platí 91 = 13 · 7. Ktorý zápis vyjadruje „7 delí 91“ (7 je deliteľom 91)?",
        "options": [
          "91 | 7",
          "7 : 91",
          "7 | 91"
        ],
        "answer": 2,
        "correct": "Zápis b | a čítame „b delí a“, teda 7 | 91. Platí 91 = 13 · 7, takže 91 je násobkom 7.",
        "hint": "Zápis b | a: deliteľ je vľavo, násobok vpravo."
      },
      {
        "id": "s-sud",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "súdeliteľné čísla",
        "title": "Súdeliteľné, alebo nesúdeliteľné?",
        "question": "Majú obe čísla spoločného deliteľa väčšieho ako 1?",
        "labels": [
          "Súdeliteľné",
          "Nesúdeliteľné"
        ],
        "items": [
          {
            "text": "15 a 805",
            "answer": true,
            "why": "Spoločný deliteľ 5 (15 = 5 · 3, 805 = 5 · 161)."
          },
          {
            "text": "44 a 125",
            "answer": false,
            "why": "44 = 4 · 11 a 125 = 5 · 25 nemajú spoločného deliteľa okrem 1."
          },
          {
            "text": "91 a 105",
            "answer": true,
            "why": "Spoločný deliteľ 7 (91 = 7 · 13, 105 = 7 · 15)."
          },
          {
            "text": "99 a 100",
            "answer": false,
            "why": "Susedné čísla nemajú spoločného deliteľa okrem 1."
          },
          {
            "text": "276 a 282",
            "answer": true,
            "why": "Obe sú párne a ciferné súčty 15 a 12 sú deliteľné 3, preto majú spoločného deliteľa 6."
          },
          {
            "text": "8 a 15",
            "answer": false,
            "why": "Delitele 8 sú 1, 2, 4, 8 a delitele 15 sú 1, 3, 5, 15. Spoločné je iba 1."
          }
        ]
      },
      {
        "id": "e-last",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Rozhoduje posledná číslica: 2, 5 a 10",
        "html": "<p>Číslo 10 je deliteľné 2 aj 5. Preto všetky desiatky, stovky, tisíce… sú vždy deliteľné 2, 5 aj 10 a rozhoduje <span class=\"hl\">iba posledná číslica</span>.</p><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Deliteľnosť 2</div><p class=\"term-rule\">Posledná číslica je 0, 2, 4, 6 alebo 8 (číslo je párne).</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Deliteľnosť 5</div><p class=\"term-rule\">Posledná číslica je 0 alebo 5.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Deliteľnosť 10</div><p class=\"term-rule\">Posledná číslica je 0.</p></div></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>3 470 končí číslicou 0, preto je deliteľné 2, 5 aj 10.</p><p>8 215 končí číslicou 5, preto je deliteľné 5, ale <strong>nie</strong> je deliteľné 2 ani 10.</p></div><div class=\"warning\"><strong>Pozor:</strong> Číslo deliteľné 10 je vždy deliteľné 2 aj 5, ale opačne to neplatí. Číslo 15 je deliteľné 5, a predsa nie je deliteľné 10.</div>",
        "remember": "Pre 2, 5 a 10 sa pozeráš iba na poslednú číslicu."
      },
      {
        "id": "e-last-test",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "kritériá 2, 5, 10",
        "question": "Ktoré z čísel je deliteľné 5?",
        "options": [
          "4 052",
          "3 875",
          "4 502"
        ],
        "answer": 1,
        "correct": "3 875 končí číslicou 5, preto je deliteľné 5. Ostatné končia číslicou 2.",
        "hint": "Pozri sa len na poslednú číslicu každého čísla."
      },
      {
        "id": "e-four",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Posledné dve číslice: deliteľnosť 4, 20, 25 a 50",
        "html": "<p>Číslo 100 je deliteľné 4 (100 = 4 · 25). Preto všetky stovky, tisíce… sú násobkami 4 a rozhoduje <span class=\"hl\">číslo z posledných dvoch číslic</span>.</p><div class=\"formula\">Číslo je deliteľné 4 práve vtedy, keď je číslo z jeho posledných dvoch číslic deliteľné 4.<span class=\"formula-note\">Končí dvojicou 00? Potom je deliteľné 4 vždy.</span></div><p>Rovnako platí: číslo je deliteľné <strong>20, 25 alebo 50</strong> práve vtedy, keď je číslo z jeho posledných dvoch číslic deliteľné 20 (25, 50), lebo 100 = 20 · 5 = 25 · 4 = 50 · 2. Napríklad 6 275 je deliteľné 25, lebo 75 = 3 · 25.</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>3 716: posledné dve číslice tvoria 16 a 16 : 4 = 4, preto je 3 716 deliteľné 4.</p><p>5 826: posledné dve číslice tvoria 26, ale 26 : 4 = 6 zv. 2, preto 5 826 <strong>nie je</strong> deliteľné 4.</p></div><div class=\"warning\"><strong>Pozor:</strong> Pri 4 nepoužívaj ciferný súčet. Ten patrí iba k deliteľnosti 3 a 9.</div>"
      },
      {
        "id": "e-nine",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Ciferný súčet: deliteľnosť 3 a 9",
        "html": "<p>Pre 3 a 9 sa pozeráme na <span class=\"hl\">všetky číslice naraz</span>: sčítame ich a výsledok je <strong>ciferný súčet</strong>.</p><div class=\"formula\">Číslo je deliteľné 3 práve vtedy, keď je jeho ciferný súčet deliteľný 3. Číslo je deliteľné 9 práve vtedy, keď je jeho ciferný súčet deliteľný 9.</div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>4 572: 4 + 5 + 7 + 2 = 18. Číslo 18 je deliteľné 3 aj 9, preto je 4 572 deliteľné 3 aj 9.</p><p>7 413: 7 + 4 + 1 + 3 = 15. Číslo 15 je deliteľné 3, ale nie 9, preto je 7 413 deliteľné 3, <strong>nie</strong> však 9.</p></div><p>Keď je ciferný súčet veľký, môžeš ho sčítať ešte raz: 8 999: 8 + 9 + 9 + 9 = 35, 3 + 5 = 8, teda nie je deliteľné ani 3, ani 9.</p><div class=\"warning\"><strong>Pozor:</strong> Každé číslo deliteľné 9 je aj deliteľné 3, ale nie naopak. Číslo 12 má ciferný súčet 3, a preto je deliteľné 3, nie však 9.</div>",
        "remember": "Pre 3 a 9 sčítaj všetky číslice a súčet skontroluj."
      },
      {
        "id": "c-three",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "kritériá 3 a 9",
        "question": "Ktoré z čísel je deliteľné 3, ale nie je deliteľné 9?",
        "options": [
          "4 125",
          "7 218",
          "5 123"
        ],
        "answer": 0,
        "correct": "Ciferný súčet 4 + 1 + 2 + 5 = 12 je deliteľný 3, ale nie 9. Číslo 7 218 má súčet 18, je teda deliteľné aj 9, a 5 123 má súčet 11 a nie je deliteľné ani 3.",
        "hint": "Sčítaj číslice každého čísla. Hľadáš súčet, ktorý je deliteľný 3, ale nie 9."
      },
      {
        "id": "n-47x",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "chýbajúca číslica",
        "title": "Doplň číslicu: deliteľnosť 3",
        "prompt": "Aká je najmenšia číslica x, pre ktorú je trojciferné číslo 47x deliteľné 3?",
        "validate": "exact",
        "answer": 1,
        "success": "4 + 7 + 1 = 12 je deliteľné 3. Číslo 471 je deliteľné 3. (Funguje aj 4 a 7.)",
        "hint": "Ciferný súčet 4 + 7 = 11. Aká číslica ho dorobí na násobok 3? Skúšaj od nuly.",
        "reveal": "Správne je 1: 4 + 7 + 0 = 11 nie je násobok 3, ale 4 + 7 + 1 = 12 už je."
      },
      {
        "id": "e-six",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Spojenie kritérií: deliteľnosť 6",
        "html": "<p>Číslo 6 je súčin 2 · 3. Preto pri 6 <span class=\"hl\">skúšame obe kritériá naraz</span>.</p><div class=\"formula\">Číslo je deliteľné 6 práve vtedy, keď je deliteľné 2 aj 3.<span class=\"formula-note\">Treba, aby platili obe podmienky.</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Je číslo 522 deliteľné 6?</p><p>Deliteľnosť 2: posledná číslica je 2, párne, áno.</p><p>Deliteľnosť 3: 5 + 2 + 2 = 9 a 9 je deliteľné 3, áno.</p><p>Obe podmienky platia, takže <strong>522 je deliteľné 6</strong>.</p></div><div class=\"compare\"><div class=\"bad\"><span class=\"mini-label\">NIE JE DELITEĽNÉ 6</span><p>4 515: súčet 15 sedí, ale číslo je nepárne.</p></div><div class=\"good\"><span class=\"mini-label\">JE DELITEĽNÉ 6</span><p>5 628: párne a 5 + 6 + 2 + 8 = 21, teda aj deliteľné 3.</p></div></div><p>Rovnako funguje deliteľnosť 15 (deliteľné 3 aj 5) a 12 (deliteľné 3 aj 4).</p><div class=\"warning\"><strong>Pozor:</strong> Takto sa dá skladať len z čísel, ktoré nemajú spoločného deliteľa väčšieho ako 1. Číslo 18 je deliteľné 2 aj 6, a predsa nie je deliteľné 12. Preto 12 skladáme z 3 a 4, nie z 2 a 6.</div>",
        "remember": "Deliteľné 6 = deliteľné 2 a súčasne deliteľné 3."
      },
      {
        "id": "c-six",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "kritérium 6",
        "question": "Ktoré z čísel je deliteľné 6?",
        "options": [
          "5 628",
          "4 515",
          "3 922"
        ],
        "answer": 0,
        "correct": "5 628 je párne a ciferný súčet 21 je deliteľný 3. Číslo 4 515 je nepárne a 3 922 má súčet 16, ktorý nie je deliteľný 3.",
        "hint": "Musia platiť dve podmienky: posledná číslica párna a ciferný súčet deliteľný 3."
      },
      {
        "id": "c-12",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "kritérium 6",
        "question": "Ktoré z čísel je deliteľné 12?",
        "options": [
          "4 218",
          "1 530",
          "2 916"
        ],
        "answer": 2,
        "correct": "Deliteľné 12 = deliteľné 3 aj 4. Číslo 2 916 má súčet 18 a 16 : 4 = 4. Čísla 4 218 aj 1 530 sú deliteľné 2 aj 3, ale 18 aj 30 nie sú deliteľné 4.",
        "hint": "12 skladáme z 3 a 4. Skontroluj ciferný súčet a posledné dve číslice."
      },
      {
        "id": "c-1460",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "kritériá 2, 5, 10",
        "question": "Ktorými z čísel 2, 4, 5, 6, 9, 10 je deliteľné číslo 1 460?",
        "options": [
          "2, 4, 5, 10",
          "2, 5, 10",
          "2, 4, 5, 6, 10"
        ],
        "answer": 0,
        "correct": "1 460 končí 0, preto je deliteľné 2, 5 a 10. Posledné dve číslice 60 sú deliteľné 4. Ciferný súčet 11 nie je deliteľný 3, preto nie je deliteľné 6 ani 9.",
        "hint": "Skús všetky kritériá po jednom. Pre 4 sa pozri na 60, pre 3, 6 a 9 sčítaj číslice."
      },
      {
        "id": "s-six",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "kritérium 6",
        "title": "Rozhodni o deliteľnosti 6",
        "question": "Je dané číslo deliteľné 6? Rozhodni bez delenia.",
        "labels": [
          "Je deliteľné 6",
          "Nie je deliteľné 6"
        ],
        "items": [
          {
            "text": "288",
            "answer": true,
            "why": "Posledná číslica je párna a ciferný súčet 18 je deliteľný 3, takže je deliteľné 2 aj 3, teda 6."
          },
          {
            "text": "4 530",
            "answer": true,
            "why": "Posledná číslica je párna a ciferný súčet 12 je deliteľný 3, takže je deliteľné 2 aj 3, teda 6."
          },
          {
            "text": "1 254",
            "answer": true,
            "why": "Posledná číslica je párna a ciferný súčet 12 je deliteľný 3, takže je deliteľné 2 aj 3, teda 6."
          },
          {
            "text": "735",
            "answer": false,
            "why": "Ciferný súčet 15 je deliteľný 3, ale číslo je nepárne, preto nie je deliteľné 6."
          },
          {
            "text": "1 322",
            "answer": false,
            "why": "Párne je, ale ciferný súčet 8 nie je deliteľný 3, preto nie je deliteľné 6."
          },
          {
            "text": "9 004",
            "answer": false,
            "why": "Párne je, ale ciferný súčet 13 nie je deliteľný 3, preto nie je deliteľné 6."
          },
          {
            "text": "5 142",
            "answer": true,
            "why": "Posledná číslica je párna a ciferný súčet 12 je deliteľný 3, takže je deliteľné 2 aj 3, teda 6."
          },
          {
            "text": "3 916",
            "answer": false,
            "why": "Párne je, ale ciferný súčet 19 nie je deliteľný 3, preto nie je deliteľné 6."
          }
        ]
      },
      {
        "id": "n-48x",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "chýbajúca číslica",
        "title": "Doplň číslicu: deliteľnosť 9",
        "prompt": "Akú číslicu x treba doplniť do čísla 48x, aby bolo deliteľné 9?",
        "validate": "exact",
        "answer": 6,
        "success": "4 + 8 + 6 = 18 je deliteľné 9. Číslo 486 = 9 · 54.",
        "hint": "Ciferný súčet 4 + 8 = 12. Ku ktorému násobku 9 sa dá doplniť jednou číslicou (0 až 9)?",
        "reveal": "Správne je 6: 12 + 6 = 18 a 18 je deliteľné 9. Do 27 by chýbalo 15, a to nie je číslica."
      },
      {
        "id": "n-36x",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "chýbajúca číslica",
        "title": "Doplň číslicu: deliteľnosť 10 a 3",
        "prompt": "Akú číslicu x treba doplniť do čísla 36x, aby bolo deliteľné 10 aj 3?",
        "validate": "exact",
        "answer": 0,
        "success": "Deliteľné 10 znamená, že končí nulou. Číslo 360 má súčet 3 + 6 + 0 = 9, a teda je deliteľné aj 3.",
        "hint": "Najprv sa pýtaj, ktorá číslica musí byť na konci, aby bolo číslo deliteľné 10. Potom skontroluj druhú podmienku.",
        "reveal": "Správne je 0: pre deliteľnosť 10 musí byť na konci 0. Skúška: 3 + 6 + 0 = 9, deliteľné 3."
      },
      {
        "id": "c-four",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "kritérium 4",
        "question": "Ktoré z čísel je deliteľné 4?",
        "options": [
          "1 826",
          "3 514",
          "7 316"
        ],
        "answer": 2,
        "correct": "Posledné dve číslice tvoria 16 a 16 : 4 = 4. Pri 1 826 je to 26 a pri 3 514 je to 14, a ani jedno nie je deliteľné 4.",
        "hint": "Pozeraj sa iba na číslo z posledných dvoch číslic a skús ho vydeliť 4."
      },
      {
        "id": "c-25",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "kritériá 20, 25, 50",
        "question": "Ktoré z čísel je deliteľné 25?",
        "options": [
          "6 275",
          "3 140",
          "4 120"
        ],
        "answer": 0,
        "correct": "Posledné dve číslice tvoria 75 = 3 · 25. Čísla 3 140 a 4 120 majú 40 a 20, a tie nie sú deliteľné 25 (hoci 4 120 je deliteľné 20).",
        "hint": "Pozri sa na číslo z posledných dvoch číslic a skús ho vydeliť 25."
      },
      {
        "id": "e-eight",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Posledné tri číslice: deliteľnosť 8",
        "html": "<p>Číslo 1 000 je deliteľné 8 (1 000 = 8 · 125). Preto všetky tisíce, státisíce… sú násobkami 8 a rozhoduje <span class=\"hl\">číslo z posledných troch číslic</span>.</p><div class=\"formula\">Číslo je deliteľné 8 práve vtedy, keď je číslo z jeho posledných troch číslic deliteľné 8.</div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>7 016: posledné tri číslice tvoria 016 = 16 a 16 : 8 = 2, preto je 7 016 deliteľné 8.</p><p>5 124: posledné tri číslice tvoria 124 a 124 : 8 = 15 zv. 4, preto 5 124 <strong>nie je</strong> deliteľné 8.</p></div><div class=\"warning\"><strong>Pozor:</strong> Číslo deliteľné 8 je vždy deliteľné 4, ale nie naopak. Číslo 5 124 je deliteľné 4 (24 : 4 = 6), a predsa nie je deliteľné 8.</div>",
        "remember": "Pre 8 sa pozeráš na posledné tri číslice."
      },
      {
        "id": "c-eight",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "kritérium 8",
        "question": "Ktoré z čísel je deliteľné 8?",
        "options": [
          "5 124",
          "7 016",
          "3 250"
        ],
        "answer": 1,
        "correct": "Posledné tri číslice tvoria 016 a 16 : 8 = 2. Číslo 5 124 je deliteľné 4, ale 124 : 8 dáva zvyšok 4. Číslo 3 250 je párne, ale 250 : 8 dáva zvyšok 2.",
        "hint": "Pozeraj sa na číslo z posledných troch číslic a skús ho vydeliť 8."
      },
      {
        "id": "e-star",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Doplň číslicu na miesto hviezdičky",
        "html": "<p>V úlohe je jedna číslica zakrytá hviezdičkou <strong>*</strong>. Máš doplniť číslice (0 až 9) tak, aby bolo číslo deliteľné daným číslom.</p><ol class=\"steps\"><li>Zisti, na ktoré číslice sa kritérium pozerá (posledná číslica, posledné dve, ciferný súčet…).</li><li>Ak je hviezdička medzi nimi, vyskúšaj číslice a vyber tie, ktoré vyhovujú.</li><li>Ak medzi nimi nie je, vyhovuje <span class=\"hl\">každá</span> číslica od 0 po 9.</li><li>Skontroluj jedným doplneným číslom.</li></ol><div class=\"example\"><span class=\"mini-label\">34*5 710 · deliteľné 3</span><p>3 + 4 + 5 + 7 + 1 + 0 = 20, takže 20 + * musí byť násobok 3: 21, 24, 27.</p><p>* = 1, 4 alebo 7. Čísla: 3 415 710, 3 445 710, 3 475 710.</p></div><div class=\"example\"><span class=\"mini-label\">34*5 710 · deliteľné 5</span><p>Posledná číslica je 0, hviezdička sa na ňu nepozerá, preto vyhovujú <strong>všetky číslice 0 až 9</strong>.</p></div><div class=\"example\"><span class=\"mini-label\">23 876*2 · deliteľné 4</span><p>Posledné dve číslice sú *2: 02, 12, 22, … 92. Deliteľné 4 sú 12, 32, 52, 72, 92.</p><p>* = 1, 3, 5, 7 alebo 9.</p></div><div class=\"warning\"><strong>Pozor:</strong> Ak sú v čísle dve hviezdičky, každá môže patriť k inému kritériu. Pri deliteľnosti 15 (3 a 5) najprv urči poslednú číslicu (0 alebo 5) a až potom doplň druhú podľa ciferného súčtu.</div>",
        "remember": "Najprv zisti, na ktoré číslice sa kritérium pozerá. Ak hviezdička medzi nimi nie je, vyhovuje každá číslica."
      },
      {
        "id": "c-star3",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "chýbajúca číslica",
        "question": "Ktoré číslice možno doplniť na miesto * v čísle 34*5 710, aby bolo deliteľné 3?",
        "options": [
          "0, 3, 6, 9",
          "2, 5, 8",
          "1, 4, 7"
        ],
        "answer": 2,
        "correct": "Ciferný súčet bez hviezdičky je 20. Do násobku 3 treba doplniť 1, 4 alebo 7 (súčty 21, 24, 27). Pri 0, 3, 6, 9 vyjdú súčty 20, 23, 26, 29 a pri 2, 5, 8 súčty 22, 25, 28, a žiaden nie je deliteľný 3.",
        "hint": "Sčítaj číslice 3 + 4 + 5 + 7 + 1 + 0 a hľadaj, čo treba pridať do najbližšieho násobku 3."
      },
      {
        "id": "n-star4",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "chýbajúca číslica",
        "title": "Koľko číslic vyhovuje",
        "prompt": "Koľko číslic (z 0 až 9) možno doplniť na miesto * v čísle 23 876*2, aby bolo deliteľné 4?",
        "validate": "exact",
        "answer": 5,
        "success": "Posledné dve číslice *2 musia byť deliteľné 4: 12, 32, 52, 72, 92. Teda * = 1, 3, 5, 7, 9, spolu 5 číslic.",
        "hint": "Pre 4 rozhodujú posledné dve číslice, teda číslo *2. Vyskúšaj 02, 12, 22, …",
        "reveal": "Správne je 5: čísla 12, 32, 52, 72 a 92 sú deliteľné 4."
      },
      {
        "id": "c-star8",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "chýbajúca číslica",
        "question": "Nájdi všetky číslice *, pre ktoré je číslo 23 876*2 deliteľné 8.",
        "options": [
          "iba 3",
          "3 a 7",
          "1, 3, 5, 7, 9"
        ],
        "answer": 1,
        "correct": "Posledné tri číslice sú 6*2 a deliteľné 8 sú 632 (= 8 · 79) a 672 (= 8 · 84). Číslice 1, 5, 9 dávajú čísla deliteľné 4, ale nie 8.",
        "hint": "Pre 8 rozhodujú posledné tri číslice 6*2. Vyskúšaj tie, pre ktoré je číslo deliteľné 4, a skús ich vydeliť 8."
      },
      {
        "id": "n-star15",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "chýbajúca číslica",
        "title": "Dve hviezdičky",
        "prompt": "Koľko čísel tvaru 5*4 758* (každá hviezdička je jedna číslica 0 až 9) je deliteľných 15?",
        "validate": "exact",
        "answer": 6,
        "success": "Deliteľné 15 = deliteľné 5 aj 3. Posledná číslica 0: ciferný súčet 29 + * musí byť násobok 3, * = 1, 4, 7. Posledná číslica 5: 34 + * musí byť násobok 3, * = 2, 5, 8. Spolu 3 + 3 = 6 čísel.",
        "hint": "Najprv urči, aká môže byť posledná číslica (deliteľnosť 5). Potom pre každú možnosť nájdi prvú číslicu podľa ciferného súčtu.",
        "reveal": "Správne je 6: 5 147 580, 5 447 580, 5 747 580, 5 247 585, 5 547 585, 5 847 585."
      },
      {
        "id": "n-mult6",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "násobky",
        "title": "Koľko násobkov",
        "prompt": "Koľko čísel od 1 do 60 (vrátane) je deliteľných 6?",
        "validate": "exact",
        "answer": 10,
        "success": "Sú to 6, 12, 18, 24, 30, 36, 42, 48, 54 a 60, spolu 10 čísel.",
        "hint": "Vypíš násobky čísla 6 podľa násobilky: 6, 12, 18, … a zastav sa pri 60.",
        "reveal": "Správne je 10: 60 : 6 = 10, takže násobkov 6 do 60 je desať."
      },
      {
        "id": "e-prime",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Prvočíslo a zložené číslo",
        "html": "<p>Každé prirodzené číslo je deliteľné aspoň číslom 1 a samo sebou. Podľa počtu deliteľov rozlišujeme:</p><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Prvočíslo</div><p class=\"term-rule\">Má <span class=\"hl\">presne dva</span> delitele: 1 a samo seba. Napríklad 13 (delitele 1 a 13).</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Zložené číslo</div><p class=\"term-rule\">Má <span class=\"hl\">viac ako dva</span> delitele. Napríklad 21 (delitele 1, 3, 7, 21).</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Číslo 1</div><p class=\"term-rule\">Má jediného deliteľa (1), preto nie je prvočíslo ani zložené číslo.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Najmenšie prvočíslo a najmenšie zložené číslo</div><p class=\"term-rule\">2 je najmenšie prvočíslo a zároveň jediné párne prvočíslo. 4 je najmenšie zložené číslo (delitele 1, 2, 4).</p></div></div><p>Prvočísla do 50: <strong>2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47</strong>.</p><div class=\"example\"><span class=\"mini-label\">AKO ZISTÍM, ČI JE 97 PRVOČÍSLO</span><p>Skúšame prvočísla ako delitele: 2 (97 je nepárne, nie), 3 (9 + 7 = 16, nie), 5 (končí 7, nie), 7 (97 : 7 = 13 zv. 6, nie).</p><p>Ďalšie prvočíslo 11 má 11 · 11 = 121 &gt; 97, takže už nemusíme skúšať. <strong>97 je prvočíslo.</strong></p></div><div class=\"warning\"><strong>Pozor:</strong> 2 je jediné párne prvočíslo. Číslo 1 nie je prvočíslo. A nepárne číslo nemusí byť prvočíslo: 9, 15, 21 a 91 = 7 · 13 sú zložené.</div>",
        "remember": "Prvočíslo má presne dva delitele. Zložené číslo má aspoň tri. Číslo 1 nie je ani jedno."
      },
      {
        "id": "m-prime",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "prvočíslo a zložené číslo",
        "title": "Prvočíslo, zložené číslo, alebo ani jedno?",
        "labels": [
          "prvočíslo",
          "zložené číslo",
          "ani prvočíslo, ani zložené"
        ],
        "items": [
          {
            "text": "1",
            "answer": "ani prvočíslo, ani zložené"
          },
          {
            "text": "13",
            "answer": "prvočíslo"
          },
          {
            "text": "21",
            "answer": "zložené číslo"
          },
          {
            "text": "29",
            "answer": "prvočíslo"
          },
          {
            "text": "51",
            "answer": "zložené číslo"
          },
          {
            "text": "91",
            "answer": "zložené číslo"
          },
          {
            "text": "97",
            "answer": "prvočíslo"
          }
        ]
      },
      {
        "id": "n-primes30",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "prvočísla",
        "title": "Počet prvočísel",
        "prompt": "Koľko prvočísel je medzi číslami 1 a 30 (vrátane)?",
        "validate": "exact",
        "answer": 10,
        "success": "Sú to 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, spolu 10.",
        "hint": "Nezabudni na 2. Číslo 1 sa nepočíta.",
        "reveal": "Správne je 10: 2, 3, 5, 7, 11, 13, 17, 19, 23 a 29."
      },
      {
        "id": "c-min-comp",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "prvočíslo a zložené číslo",
        "question": "Aké je najmenšie zložené číslo?",
        "options": [
          "6",
          "1",
          "4"
        ],
        "answer": 2,
        "correct": "4 má tri delitele (1, 2, 4), preto je zložené. Čísla 2 a 3 sú prvočísla a 1 nie je ani prvočíslo, ani zložené číslo.",
        "hint": "Zložené číslo má aspoň tri delitele. Skús čísla postupne od 1 a pozri na ich delitele."
      },
      {
        "id": "e-split",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Rozklad na súčin deliteľov",
        "html": "<p>Zložené číslo sa dá zapísať ako súčin deliteľov väčších ako 1. Takému zápisu hovoríme <strong>rozklad zloženého čísla</strong>. Nie je jediný:</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD: 60</span><p>60 = 2 · 30 = 4 · 15 = 5 · 12 = 2 · 3 · 10 = 2 · 2 · 3 · 5</p></div><p>V poslednom zápise je každý činiteľ <span class=\"hl\">prvočíslo</span>. To je <strong>prvočíselný rozklad</strong>. Dá sa zapísať stručne mocninami: 60 = 2² · 3 · 5.</p>",
        "remember": "Rozklad zloženého čísla je súčin deliteľov väčších ako 1. Prvočíselný rozklad má každého činiteľa prvočíslo."
      },
      {
        "id": "e-factor",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Prvočíselný rozklad",
        "html": "<p>Každé zložené číslo sa dá zapísať ako <strong>súčin prvočísel</strong>. Takému zápisu hovoríme <strong>prvočíselný rozklad</strong>. Na 29. hodine ho použijeme pri hľadaní NSN a NSD.</p><ol class=\"steps\"><li>Vydeľ číslo najmenším prvočíslom, ktorým je deliteľné (použi kritériá).</li><li>S podielom pokračuj rovnako, až kým nedostaneš 1.</li><li>Všetky použité delitele vynásob. Rovnaké činitele zapíš ako mocninu.</li><li>Skontroluj násobením.</li></ol><div class=\"example\"><span class=\"mini-label\">PRÍKLAD: ROZLOŽ 360</span><p>360 : 2 = 180 &nbsp;&nbsp; 180 : 2 = 90 &nbsp;&nbsp; 90 : 2 = 45</p><p>45 : 3 = 15 &nbsp;&nbsp; 15 : 3 = 5 &nbsp;&nbsp; 5 : 5 = 1</p><p>360 = 2 · 2 · 2 · 3 · 3 · 5 = <strong>2³ · 3² · 5</strong></p><p>Kontrola: 8 · 9 · 5 = 360.</p></div><div class=\"warning\"><strong>Pozor:</strong> Činiteľ v rozklade musí byť prvočíslo. Zápis 360 = 4 · 90 nie je prvočíselný rozklad, pretože 4 a 90 sú zložené čísla.</div>",
        "remember": "Prvočíselný rozklad: delíš prvočíslami, kým nezostane 1, a rovnaké činitele zapíšeš ako mocninu."
      },
      {
        "id": "e-tree",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Prvočíselný rozklad: stromček a tabuľka",
        "html": "<p>Prvočíselný rozklad vieš hľadať dvoma spôsobmi a vždy dostaneš ten istý výsledok (poradie činiteľov nie je dôležité).</p><div class=\"example\"><span class=\"mini-label\">STROMČEK: 80</span><p>80 = 10 · 8</p><p>10 = <strong>2</strong> · <strong>5</strong> &nbsp;&nbsp;&nbsp; 8 = <strong>2</strong> · 4</p><p>4 = <strong>2</strong> · <strong>2</strong></p><p>Číslo rozkladáme, kým každá vetva nekončí prvočíslom. Prvočísla (tučne) vynásobíme: 80 = 2 · 5 · 2 · 2 · 2 = <strong>2⁴ · 5</strong>.</p></div><div class=\"example\"><span class=\"mini-label\">TABUĽKA: 80</span><p>80 : 2 = 40</p><p>40 : 5 = 8</p><p>8 : 2 = 4</p><p>4 : 2 = 2</p><p>2 : 2 = 1</p><p>Delíme prvočíslami, kým nedostaneme 1. Použité delitele vynásobíme: 80 = 2 · 5 · 2 · 2 · 2 = <strong>2⁴ · 5</strong>.</p></div>",
        "remember": "Stromčekom rozkladáš na súčin, kým vetvy nekončia prvočíslom. Tabuľkou deliš prvočíslami, kým nedostaneš 1."
      },
      {
        "id": "n-twos80",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "prvočíselný rozklad",
        "title": "Dvojky v rozklade",
        "prompt": "Koľkokrát sa činiteľ 2 vyskytuje v prvočíselnom rozklade čísla 80?",
        "validate": "exact",
        "answer": 4,
        "success": "80 = 2 · 2 · 2 · 2 · 5 = 2⁴ · 5, dvojka sa vyskytuje štyrikrát.",
        "hint": "Rozlož 80 stromčekom alebo tabuľkou a spočítaj dvojky.",
        "reveal": "Správne je 4: 80 = 2⁴ · 5."
      },
      {
        "id": "n-644",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "prvočíselný rozklad",
        "title": "Chýbajúci činiteľ",
        "prompt": "Platí 644 = 2² · 7 · □, pričom □ je prvočíslo. Aké?",
        "validate": "exact",
        "answer": 23,
        "success": "644 : 4 = 161, 161 : 7 = 23 a 23 je prvočíslo. Teda 644 = 2² · 7 · 23.",
        "hint": "Vydeľ 644 číslom 2² · 7 = 28.",
        "reveal": "Správne je 23: 644 : 28 = 23."
      },
      {
        "id": "c-fact60",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "prvočíselný rozklad",
        "question": "Ktorý zápis je prvočíselný rozklad čísla 60?",
        "options": [
          "2 · 3 · 10",
          "2² · 3 · 5",
          "4 · 15"
        ],
        "answer": 1,
        "correct": "60 = 2 · 2 · 3 · 5 = 2² · 3 · 5, a všetky činitele sú prvočísla. V ostatných zápisoch sú zložené činitele 10, 4 a 15.",
        "hint": "Prvočíselný rozklad smie obsahovať iba prvočísla. Ktoré činitele sú zložené?"
      },
      {
        "id": "n-fact",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "prvočíselný rozklad",
        "title": "Číslo z rozkladu",
        "prompt": "Aké číslo má prvočíselný rozklad 2³ · 3 · 5?",
        "validate": "exact",
        "answer": 120,
        "success": "2³ = 8, 8 · 3 = 24, 24 · 5 = 120.",
        "hint": "Najprv vypočítaj mocninu 2³, potom násob zľava doprava.",
        "reveal": "Správne je 120: 8 · 3 · 5 = 120."
      },
      {
        "id": "n-big",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "prvočíselný rozklad",
        "title": "Najväčší prvočinitel",
        "prompt": "Rozlož číslo 154 na prvočísla. Aké je najväčšie prvočíslo v rozklade?",
        "validate": "exact",
        "answer": 11,
        "success": "154 : 2 = 77, 77 : 7 = 11, 11 je prvočíslo. Teda 154 = 2 · 7 · 11.",
        "hint": "154 je párne, začni delením 2. Potom skús ďalšie prvočísla od najmenšieho.",
        "reveal": "Správne je 11: 154 = 2 · 7 · 11."
      },
      {
        "id": "h-four",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak tvrdí: „Číslo 2 514 je deliteľné 4, lebo ciferný súčet 2 + 5 + 1 + 4 = 12 je deliteľný 4.“ Čo je v tomto zdôvodnení zle?",
        "options": [
          "Ciferný súčet 12 nie je deliteľný 4, preto je záver nesprávny.",
          "Číslo je deliteľné 4 len vtedy, keď je deliteľné aj 8.",
          "Pre 4 sa nepoužíva ciferný súčet, ale číslo z posledných dvoch číslic. 14 nie je deliteľné 4, takže 2 514 nie je deliteľné 4."
        ],
        "answer": 2,
        "correct": "Presne. Ciferný súčet patrí k 3 a 9. Pri 4 rozhodujú posledné dve číslice a 14 : 4 nevyjde bez zvyšku.",
        "hint": "Vráť sa k pravidlu pre 4. Na ktoré číslice sa pozeráme?"
      },
      {
        "id": "h-prime",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak tvrdí: „57 je prvočíslo, lebo nie je deliteľné 2 ani 5.“ Čo je na tom zle?",
        "options": [
          "Nič, 57 je prvočíslo.",
          "Treba skúsiť aj ďalšie delitele: 5 + 7 = 12, takže 57 je deliteľné 3 (57 = 3 · 19) a je to zložené číslo.",
          "Prvočíslo musí byť párne."
        ],
        "answer": 1,
        "correct": "Správne. Na prvočíslo nestačí vylúčiť 2 a 5. Treba skúšať postupne prvočísla 2, 3, 5, 7, … a 57 = 3 · 19.",
        "hint": "Skús ciferný súčet čísla 57."
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha na papier",
        "html": "<p>Odlož zariadenie.</p><ol><li>Pomocou kritérií zisti, ktoré z čísel 2, 3, 4, 5, 6, 9 a 10 delia číslo <strong>3 780</strong>. Pri každom napíš, ako si to zistil/a.</li><li>Rozlož číslo <strong>252</strong> na súčin prvočísel a výsledok zapíš pomocou mocnín. Urob skúšku násobením.</li></ol><p>Postup zapíš tak, ako by si ho písal/a do písomky.</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: deliteľnosť a rozklad",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Riešenia píš do zošita. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Ktoré z čísel 135, 246, 481, 1 072 sú deliteľné 3?",
            "answer": "135 (1+3+5=9) áno<br>246 (2+4+6=12) áno<br>481 (4+8+1=13) nie<br>1 072 (1+0+7+2=10) nie<br>Deliteľné 3 sú 135 a 246."
          },
          {
            "level": "zaklad",
            "text": "Ktoré z čísel 153, 1 460, 9 078, 51 410 je deliteľné 2, 3, 4, 5, 6, 9, 10? Pri každom čísle napíš všetky vhodné delitele z tejto skupiny.",
            "answer": "153: 3, 9 (súčet 9)<br>1 460: 2, 4, 5, 10 (60 : 4 = 15, súčet 11)<br>9 078: 2, 3, 6 (súčet 24, nie je deliteľný 9)<br>51 410: 2, 5, 10 (10 nie je deliteľné 4, súčet 11)"
          },
          {
            "level": "zaklad",
            "text": "Zapíš číslo 62 805 v desiatkovej sústave pomocou mocnín čísla 10 a urč jeho ciferný súčet.",
            "answer": "62 805 = 6 · 10⁴ + 2 · 10³ + 8 · 10² + 0 · 10¹ + 5 · 10⁰<br>Ciferný súčet 6 + 2 + 8 + 0 + 5 = <strong>21</strong>."
          },
          {
            "level": "zaklad",
            "text": "Ktoré z čísel 18, 25, 37, 42, 49, 53 sú prvočísla?",
            "answer": "18 = 2·9, 25 = 5·5, 42 = 2·21, 49 = 7·7 sú zložené.<br>Prvočísla: <strong>37 a 53</strong>."
          },
          {
            "level": "zaklad",
            "text": "Doplň číslicu x tak, aby bolo číslo 5x4 deliteľné 9. Nájdi všetky možnosti.",
            "answer": "5 + x + 4 = 9 + x musí byť deliteľné 9, preto x = 0 alebo x = 9.<br>Čísla: <strong>504 a 594</strong>."
          },
          {
            "level": "zaklad",
            "text": "Rozlož na prvočísla: a) 48, b) 75, c) 100. Zapíš pomocou mocnín.",
            "answer": "a) 48 = 2⁴ · 3<br>b) 75 = 3 · 5²<br>c) 100 = 2² · 5²"
          },
          {
            "level": "rozsirenie",
            "text": "Doplň číslicu * tak, aby bolo číslo 34*5 710 deliteľné 3. Potom doplň číslicu * tak, aby bolo číslo 23 876*2 deliteľné 4. Nájdi všetky možnosti.",
            "answer": "34*5 710: súčet 20 + * je násobok 3, * = <strong>1, 4, 7</strong> (3 415 710, 3 445 710, 3 475 710).<br>23 876*2: *2 deliteľné 4, * = <strong>1, 3, 5, 7, 9</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Zapíš číslo 60 ako súčin deliteľov všetkými spôsobmi, ktoré nájdeš (aspoň päť zápisov), a posledný zápis prepíš pomocou mocnín.",
            "answer": "60 = 2 · 30 = 3 · 20 = 4 · 15 = 5 · 12 = 6 · 10 = 2 · 3 · 10 = 2 · 2 · 3 · 5<br>Prvočíselný rozklad: 60 = <strong>2² · 3 · 5</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Rozlož číslo 80 na prvočísla stromčekom aj tabuľkou. Čo si všimneš?",
            "answer": "Stromček: 80 = 10 · 8 = (2 · 5) · (2 · 4) = 2 · 5 · 2 · 2 · 2.<br>Tabuľka: 80 : 2 = 40, 40 : 5 = 8, 8 : 2 = 4, 4 : 2 = 2, 2 : 2 = 1.<br>Obe dávajú 80 = <strong>2⁴ · 5</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Vypíš všetky delitele čísla 36. Koľko ich je?",
            "answer": "1, 2, 3, 4, 6, 9, 12, 18, 36<br>Je ich <strong>9</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Doplň číslicu x tak, aby bolo číslo 7x2 deliteľné 6. Nájdi všetky možnosti.",
            "answer": "Číslo je párne, stačí aby bolo deliteľné 3: 7 + x + 2 = 9 + x, takže x = 0, 3, 6 alebo 9.<br>Čísla: <strong>702, 732, 762, 792</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Nájdi najmenšie štvorciferné číslo deliteľné 9 a najväčšie trojciferné číslo deliteľné 6.",
            "answer": "Najmenšie štvorciferné je 1 000 (súčet 1), 1 001 (2), … <strong>1 008</strong> (1+0+0+8 = 9).<br>Najväčšie trojciferné je 999 (nepárne), 998 (súčet 26 nie), 997, <strong>996</strong> (párne, 9+9+6 = 24)."
          },
          {
            "level": "rozsirenie",
            "text": "Rozlož čísla 84 a 126 na súčin prvočísel.",
            "answer": "84 = 2² · 3 · 7<br>126 = 2 · 3² · 7"
          },
          {
            "level": "bonus",
            "text": "Koľko deliteľov má číslo 72? Vypíš ich všetky.",
            "answer": "1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72, spolu <strong>12</strong>."
          },
          {
            "level": "bonus",
            "text": "Doplň číslicu * tak, aby bolo číslo 34*5 710 deliteľné 7. Skúšaj delením.",
            "answer": "Číslo 3 405 710 : 7 = 486 530 a 3 475 710 : 7 = 496 530. Ostatné číslice nevyhovujú.<br>* = <strong>0 alebo 7</strong>."
          },
          {
            "level": "bonus",
            "text": "Doplň číslice * tak, aby bolo číslo 5*4 758* deliteľné 15. Nájdi všetky možnosti.",
            "answer": "Deliteľné 5: posledná číslica je 0 alebo 5. Deliteľné 3: ciferný súčet.<br>Končí 0: 29 + * je násobok 3, * = 1, 4, 7 (5 147 580, 5 447 580, 5 747 580).<br>Končí 5: 34 + * je násobok 3, * = 2, 5, 8 (5 247 585, 5 547 585, 5 847 585).<br>Spolu <strong>6 čísel</strong>."
          },
          {
            "level": "bonus",
            "text": "Zdôvodni na príkladoch: a) Je každé číslo deliteľné 9 aj deliteľné 3? b) Je každé číslo deliteľné 3 aj deliteľné 9?",
            "answer": "a) Áno. Ak je ciferný súčet deliteľný 9, je deliteľný aj 3. Napríklad 18, 27, 4 572.<br>b) Nie. Protipríklad: 12 (súčet 3) je deliteľné 3, ale nie 9."
          }
        ]
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Prečo stačia dve číslice",
        "prompt": "Vysvetli jednou až dvoma vetami, prečo pri deliteľnosti 4 stačia posledné dve číslice, ale pri deliteľnosti 3 musíme sčítať všetky číslice.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Číslo 100 je deliteľné 4, preto všetko pred poslednými dvoma číslicami tvorí násobok 100 a nemení deliteľnosť. Pri 3 dáva každý rád (10, 100, 1 000, …) pri delení 3 zvyšok 1, preto každá číslica ovplyvní výsledok a treba sčítať všetky.",
        "placeholder": "Pri 4 stačia dve číslice, pretože..."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "zápis čísla a ciferný súčet",
          "deliteľnosť a = k · b, súdeliteľné čísla",
          "kritériá 2, 5, 10",
          "kritériá 3, 9 a 4 (aj 8, 20, 25, 50)",
          "kritérium 6 a 12 (spojenie podmienok)",
          "doplniť chýbajúcu číslicu",
          "prvočíslo a zložené číslo",
          "prvočíselný rozklad"
        ],
        "prompt": "Označ, ako dobre to zvládaš. Nie je to známka. Čo máš 🔴 alebo 🟡, si ešte raz prejdi pred hodinou o NSN a NSD."
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 4,
        "text": "Doplň do tabuľky ÁNO/NIE: je číslo 1 260 deliteľné 2, 3, 4, 5, 6, 9, 10?",
        "answer": "2 áno, 3 áno (súčet 9), 4 áno (60 : 4 = 15), 5 áno, 6 áno, 9 áno, 10 áno."
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
        "space": 5,
        "text": "Napíš všetky prvočísla od 30 do 60.",
        "answer": "31, 37, 41, 43, 47, 53, 59"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 6,
        "text": "Rozlož na súčin prvočísel a zapíš mocninami: a) 90, b) 144, c) 210, d) 625.",
        "answer": "a) 2 · 3² · 5<br>b) 2⁴ · 3²<br>c) 2 · 3 · 5 · 7<br>d) 5⁴"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 4,
        "text": "Doplň číslicu x tak, aby bolo číslo 3x6 deliteľné 4 a zároveň 9. Zdôvodni.",
        "answer": "Deliteľnosť 4: posledné dve číslice x6 musia byť deliteľné 4, takže x6 ∈ {16, 36, 56, 76, 96}. Deliteľnosť 9: 3 + x + 6 = 9 + x, x = 0 alebo 9. Spoločné riešenie: x = 9 (číslo 396 = 4 · 99)."
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 5,
        "text": "Dokáž na príklade, že číslo deliteľné 4 a 9 je deliteľné 36, a napíš, prečo toto pravidlo nefunguje pre 2 a 6 pri 12.",
        "answer": "Napr. 396 : 4 = 99 a 396 : 9 = 44, 396 : 36 = 11. Pravidlo funguje len pre delitele bez spoločného činiteľa. 18 je deliteľné 2 aj 6, ale 18 : 12 nevyjde."
      },
      {
        "id": "w7",
        "level": "zaklad",
        "space": 4,
        "text": "Zapíš číslo 80 507 rozvinutým zápisom v desiatkovej sústave a urč jeho ciferný súčet.",
        "answer": "8 · 10⁴ + 0 · 10³ + 5 · 10² + 0 · 10¹ + 7 · 10⁰; ciferný súčet 8 + 0 + 5 + 0 + 7 = 20."
      },
      {
        "id": "w8",
        "level": "rozsirenie",
        "space": 4,
        "text": "Doplň číslicu * tak, aby bolo číslo 52*4 deliteľné a) 3, b) 8. Nájdi všetky možnosti.",
        "answer": "a) 5 + 2 + 4 = 11 a 11 + * je násobok 3: * = 1, 4, 7 (5 214, 5 244, 5 274).<br>b) Posledné tri číslice 2*4 musia byť deliteľné 8: 224 = 8 · 28 a 264 = 8 · 33. Teda * = 2 alebo 6 (5 224, 5 264)."
      },
      {
        "id": "w9",
        "level": "bonus",
        "space": 5,
        "text": "Rozlož na prvočísla stromčekom: a) 644, b) 496, c) 180. Zapíš mocninami.",
        "answer": "a) 2² · 7 · 23<br>b) 2⁴ · 31<br>c) 2² · 3² · 5"
      }
    ]
  }
});
