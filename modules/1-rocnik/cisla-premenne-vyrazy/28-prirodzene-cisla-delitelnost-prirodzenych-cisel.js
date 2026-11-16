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
      "rozhodnúť bez delenia, či je číslo deliteľné 2, 3, 4, 5, 6, 9 a 10, a určiť, ktoré z týchto čísel dané číslo delia",
      "doplniť chýbajúcu číslicu tak, aby bolo číslo deliteľné 9 (prípadne 3)",
      "priradiť pojem k definícii: deliteľ, násobok, prvočíslo, zložené číslo",
      "rozlíšiť prvočíslo a zložené číslo (1 nie je ani jedno; 91, 87, 57 sú zložené)",
      "rozložiť číslo na súčin prvočísel a zistiť, koľkokrát sa v rozklade vyskytuje daný činiteľ"
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
      "2–3 min: kritériá deliteľnosti, ukážkový príklad",
      "4–5 min: pojmy a definície, kritériá v úlohách, doplnenie číslice",
      "4–5 min: prvočíslo, zložené číslo, prvočíselný rozklad, hľadanie chyby",
      "8–10 min: úloha na papieri (BEZ MOBILU) a zbierka podľa úrovne",
      "3 min: krátka reflexia"
    ],
    "diagnostics": [
      "žiak vie, že pri 3 a 9 sčítava všetky číslice, ale pri 4 sa pozerá len na posledné dve",
      "žiak pri 6 skúša obe podmienky (2 aj 3), nie jednu z nich",
      "žiak nepovažuje 1 za prvočíslo a nepovažuje každé nepárne číslo za prvočíslo",
      "žiak vie dokončiť prvočíselný rozklad (delí, kým nezostane 1) a zapísať ho mocninami"
    ],
    "partialUse": [
      "Modul je zámerne skrátený a zameraný na obsah písomky (pojmy a typy úloh, ktoré sa v nej objavia); rozšírenia a doplnkové kritériá (8, 12, 20, 25, 50), zápis a = k · b, desiatková sústava a viac než jedno hľadanie chyby sú z digitálnej časti vynechané.",
      "Mobil nenahrádza ručné počítanie, rozklad v zošite ani zdôvodnenie."
    ]
  },
  "student": {
    "title": "Deliteľnosť, prvočísla a prvočíselný rozklad",
    "subtitle": "Téma 28 · Čísla, premenné, výrazy",
    "intro": "Zopakuješ si pojmy deliteľ, násobok, prvočíslo a zložené číslo, kritériá deliteľnosti, doplnenie číslice a prvočíselný rozklad: to, čo sa objaví v písomke. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "20–25 min",
    "activities": [
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "rozhodnúť bez delenia, či je číslo deliteľné 2, 3, 4, 5, 6, 9 alebo 10",
          "doplniť chýbajúcu číslicu tak, aby bolo číslo deliteľné daným číslom",
          "rozlíšiť prvočíslo od zloženého čísla",
          "rozložiť číslo na súčin prvočísel a zistiť, koľkokrát sa v ňom činiteľ vyskytuje"
        ]
      },
      {
        "id": "e-crit",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Deliteľ, násobok a kritériá deliteľnosti",
        "html": "<div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Deliteľ čísla</div><p class=\"term-rule\">Číslo b je deliteľom čísla a, ak a : b vyjde <span class=\"hl\">bez zvyšku</span>. Napríklad 6 je deliteľom 24 (24 : 6 = 4), ale 5 nie je (24 : 5 = 4 zv. 4).</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Násobok čísla</div><p class=\"term-rule\">Číslo, ktoré vznikne <span class=\"hl\">vynásobením</span> daného čísla prirodzeným číslom. Napríklad násobky 6 sú 6, 12, 18, 24, … Ak je b deliteľom a, je a násobkom b.</p></div></div><p>Delenie sa dá často ušetriť kritériami deliteľnosti:</p><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">2, 5, 10: posledná číslica</div><p class=\"term-rule\">2: párna číslica (0, 2, 4, 6, 8). 5: končí 0 alebo 5. 10: končí 0.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">4: posledné dve číslice</div><p class=\"term-rule\">Číslo z posledných dvoch číslic je deliteľné 4 (pri koncovke 00 vždy).</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">3 a 9: ciferný súčet</div><p class=\"term-rule\">Ciferný súčet (súčet všetkých číslic) je deliteľný 3, resp. 9.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">6: dve podmienky naraz</div><p class=\"term-rule\">Číslo je deliteľné 2 aj 3.</p></div></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD: 5 628</span><p>Končí 8, je párne (2 áno). Posledné dve číslice 28 : 4 = 7 (4 áno). Súčet 5 + 6 + 2 + 8 = 21 je deliteľný 3 (3 áno), nie však 9 (9 nie). Deliteľné 2 aj 3, preto aj 6 (6 áno). Končí 8, preto 5 ani 10 nie.</p></div><div class=\"example\"><span class=\"mini-label\">DOPLŇ ČÍSLICU: 47x deliteľné 9</span><p>4 + 7 + x musí byť násobok 9, teda 11 + x = 18, x = 7.</p></div><div class=\"warning\"><strong>Pozor:</strong> Pri 4 nepoužívaj ciferný súčet. Ten patrí iba k 3 a 9.</div>",
        "remember": "2, 5, 10: posledná číslica. 4: posledné dve číslice. 3, 9: ciferný súčet. 6: deliteľné 2 aj 3."
      },
      {
        "id": "m-defs",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "pojmy a definície",
        "title": "Pojem a definícia",
        "labels": [
          "číslo, ktoré delí dané číslo bez zvyšku",
          "číslo, ktoré vznikne vynásobením daného čísla prirodzeným číslom",
          "prirodzené číslo väčšie ako 1, ktoré má práve dvoch deliteľov: 1 a samo seba",
          "prirodzené číslo väčšie ako 1, ktoré má aspoň troch deliteľov"
        ],
        "items": [
          {
            "text": "prvočíslo",
            "answer": "prirodzené číslo väčšie ako 1, ktoré má práve dvoch deliteľov: 1 a samo seba"
          },
          {
            "text": "deliteľ čísla",
            "answer": "číslo, ktoré delí dané číslo bez zvyšku"
          },
          {
            "text": "zložené číslo",
            "answer": "prirodzené číslo väčšie ako 1, ktoré má aspoň troch deliteľov"
          },
          {
            "text": "násobok čísla",
            "answer": "číslo, ktoré vznikne vynásobením daného čísla prirodzeným číslom"
          }
        ]
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
        "id": "e-factor",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Prvočíselný rozklad",
        "html": "<p>Každé zložené číslo sa dá zapísať ako <strong>súčin prvočísel</strong>. Takému zápisu hovoríme <strong>prvočíselný rozklad</strong>. Na ďalšej hodine ho použijeme pri hľadaní NSN a NSD.</p><ol class=\"steps\"><li>Vydeľ číslo najmenším prvočíslom, ktorým je deliteľné (použi kritériá).</li><li>S podielom pokračuj rovnako, až kým nedostaneš 1.</li><li>Všetky použité delitele vynásob. Rovnaké činitele zapíš ako mocninu.</li><li>Skontroluj násobením.</li></ol><div class=\"example\"><span class=\"mini-label\">PRÍKLAD: ROZLOŽ 360</span><p>360 : 2 = 180 &nbsp;&nbsp; 180 : 2 = 90 &nbsp;&nbsp; 90 : 2 = 45</p><p>45 : 3 = 15 &nbsp;&nbsp; 15 : 3 = 5 &nbsp;&nbsp; 5 : 5 = 1</p><p>360 = 2 · 2 · 2 · 3 · 3 · 5 = <strong>2³ · 3² · 5</strong></p><p>Kontrola: 8 · 9 · 5 = 360.</p></div><div class=\"warning\"><strong>Pozor:</strong> Činiteľ v rozklade musí byť prvočíslo. Zápis 360 = 4 · 90 nie je prvočíselný rozklad, pretože 4 a 90 sú zložené čísla.</div>",
        "remember": "Prvočíselný rozklad: delíš prvočíslami, kým nezostane 1, a rovnaké činitele zapíšeš ako mocninu."
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
            "text": "Ktoré z čísel 153, 1 460, 9 078, 51 410 je deliteľné 2, 3, 4, 5, 6, 9, 10? Pri každom čísle napíš všetky vhodné delitele z tejto skupiny.",
            "answer": "153: 3, 9 (súčet 9)<br>1 460: 2, 4, 5, 10 (60 : 4 = 15, súčet 11)<br>9 078: 2, 3, 6 (súčet 24, nie je deliteľný 9)<br>51 410: 2, 5, 10 (10 nie je deliteľné 4, súčet 11)"
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
            "text": "Doplň číslicu x tak, aby bolo číslo 7x2 deliteľné 6. Nájdi všetky možnosti.",
            "answer": "Číslo je párne, stačí aby bolo deliteľné 3: 7 + x + 2 = 9 + x, takže x = 0, 3, 6 alebo 9.<br>Čísla: <strong>702, 732, 762, 792</strong>."
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
            "text": "Doplň číslice * tak, aby bolo číslo 5*4 758* deliteľné 15. Nájdi všetky možnosti.",
            "answer": "Deliteľné 5: posledná číslica je 0 alebo 5. Deliteľné 3: ciferný súčet.<br>Končí 0: 29 + * je násobok 3, * = 1, 4, 7 (5 147 580, 5 447 580, 5 747 580).<br>Končí 5: 34 + * je násobok 3, * = 2, 5, 8 (5 247 585, 5 547 585, 5 847 585).<br>Spolu <strong>6 čísel</strong>."
          }
        ]
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "pojmy: deliteľ, násobok, prvočíslo, zložené číslo",
          "kritériá 2, 5, 10, 4, 3, 9 a 6",
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
