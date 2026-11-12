MathPlatform.registerModule({
  "id": "1-u03-h030",
  "teacher": {
    "placement": "1. ročník · Čísla, premenné, výrazy · 30. hodina: Riešenie úloh",
    "prerequisites": [
      "kritériá deliteľnosti a prvočíselný rozklad (28. hodina)",
      "NSD a NSN pomocou prvočíselného rozkladu (29. hodina)",
      "slovná úloha: prečítať zadanie, vypísať dané čísla a zistiť, čo sa hľadá"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza tému „Riešenie úloh“. Obsah modulu rešpektuje jej miesto a rozsah v pláne a opakuje a prepája predchádzajúce dve hodiny."
    ],
    "planPerformance": [
      "Plán uvádza: riešiť úlohy finančnej matematiky; používať kritériá deliteľnosti; určiť NSN a NSD pomocou prvočíselného rozkladu. Ďalšie ciele modulu vychádzajú z uvedeného obsahu celku."
    ],
    "goals": [
      "v slovnej úlohe rozpoznať, či treba určiť NSD (rovnaké skupiny, najväčšie možné časti) alebo NSN (spoločný čas, najmenší spoločný počet)",
      "vyriešiť slovnú úlohu v krokoch: zadanie, výber pojmu, rozklad, výpočet, odpoveď slovom",
      "pri NSD vedieť dopočítať, koľko je skupín a koľko v každej (druhý krok úlohy)",
      "zmiešané úlohy: kritériá deliteľnosti, rozklad, NSD a NSN v jednej úlohe, aj úlohy na dopočítanie neznámeho čísla"
    ],
    "competencies": [
      "modelovanie reálnej situácie",
      "matematická komunikácia (odpoveď vetou)",
      "argumentácia a kontrola výsledku",
      "prehľadný ručný zápis rozkladu a výpočtu"
    ],
    "enrichment": [
      "Obohatenie (nie štandard): kontrola výsledku „spätne do zadania“ (sedí rozdelenie bez zvyšku? sú v čase obe udalosti naraz?) a vzťah NSD(a, b) · NSN(a, b) = a · b pri hľadaní chýbajúceho čísla."
    ],
    "flow": [
      "3 min: opakovanie rozdielu NSD a NSN na dvoch krátkych situáciách",
      "8 min: vzorové slovné úlohy v aplikácii (rozdelenie, spoločný čas, dláždenie) a rozpoznávanie typu",
      "10 min: úlohy na výpočet v aplikácii a hľadanie chyby v zdôvodnení",
      "8–10 min: úlohy na papieri (BEZ MOBILU) a zbierka podľa úrovne",
      "3–5 min: spoločný rozbor, krátka reflexia"
    ],
    "diagnostics": [
      "žiak správne určí typ úlohy (NSD alebo NSN) zo slovného zadania",
      "žiak odpovie na otázku úlohy, nielen vypíše NSD alebo NSN (počet skupín vs. počet vecí v skupine)",
      "žiak nezamieňa NSD a NSN ani pri väčších číslach a používa rozklad",
      "žiak vie zmiešanú úlohu rozložiť na kroky a skontrolovať výsledok"
    ],
    "partialUse": [
      "Pri nedostatku času vynechajte zbierku; stačí vzorové úlohy, rozpoznávanie typu a samostatná úloha na papieri.",
      "Mobil nenahrádza čítanie zadania, rozklad v zošite ani odpoveď celou vetou."
    ]
  },
  "student": {
    "title": "Slovné úlohy: NSD, NSN a deliteľnosť",
    "subtitle": "Téma 30 · Čísla, premenné, výrazy",
    "intro": "Dnes spojíš všetko, čo vieš o deliteľnosti, NSD a NSN, a použiješ to na slovné úlohy. Najdôležitejšie je rozhodnúť, čo treba hľadať. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "30–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "NSD a NSN v jednej tabuľke",
        "html": "<div class=\"compare\"><div class=\"good\"><span class=\"mini-label\">NSD (najväčší spoločný deliteľ)</span><p>Spoločné prvočísla s <span class=\"hl\">menšími</span> exponentmi.</p><p>Napr. NSD(12, 18) = 2 · 3 = 6</p></div><div class=\"good\"><span class=\"mini-label\">NSN (najmenší spoločný násobok)</span><p>Všetky prvočísla s <span class=\"hl\">väčšími</span> exponentmi.</p><p>Napr. NSN(12, 18) = 2² · 3² = 36</p></div></div><p>Zopakuj si aj kritériá: číslo je deliteľné 2 (párne), 3 (ciferný súčet), 4 (posledné dve číslice), 5, 9 (ciferný súčet) a 10 (končí nulou). Deliteľné 6 je to, čo je deliteľné 2 aj 3.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "rozpoznať v slovnej úlohe, či hľadáme NSD alebo NSN",
          "vyriešiť slovnú úlohu v krokoch a odpovedať celou vetou",
          "zvládnuť zmiešané úlohy na deliteľnosť, NSD a NSN"
        ]
      },
      {
        "id": "e-type",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Ako spoznám, čo mám hľadať",
        "html": "<p>Najprv si prečítaj úlohu a polož si otázku: <span class=\"hl\">Čo sa tu deje?</span></p><div class=\"compare\"><div class=\"good\"><span class=\"mini-label\">HĽADÁM NSD</span><ul><li>rozdeliť na <strong>rovnaké skupiny</strong>, nič nezostane</li><li><strong>najväčší</strong> možný počet skupín alebo <strong>najväčšia</strong> možná časť (strana štvorca, dĺžka kúska)</li><li>skrátiť zlomok</li></ul></div><div class=\"good\"><span class=\"mini-label\">HĽADÁM NSN</span><ul><li>niečo sa <strong>opakuje</strong> a my čakáme, kedy sa to <strong>stretne</strong></li><li><strong>najmenší</strong> spoločný počet alebo čas</li><li>spoločný menovateľ pri sčítaní zlomkov</li></ul></div></div><p>Odpoveď v zadaní vždy preveríš: číslo musí dávať v príbehu zmysel (počet skupín je celé číslo, čas je dlhší ako obidve periódy…).</p>",
        "remember": "Rozdeľujem na rovnaké časti, najväčšie možné: NSD. Opakuje sa a čakám na spoločný okamih: NSN."
      },
      {
        "id": "e-ex1",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Vzorová úloha 1: rozdelenie (NSD)",
        "html": "<div class=\"example\"><span class=\"mini-label\">ÚLOHA</span><p>Obdĺžniková izba má rozmery 360 cm × 240 cm. Chceme ju vydláždiť <strong>štvorcovými</strong> dlaždicami, ktoré sa nebudú rezať. Aká je najväčšia možná strana dlaždice a koľko dlaždíc treba?</p></div><ol class=\"steps\"><li>Strana dlaždice musí deliť 360 aj 240, takže je to <strong>spoločný deliteľ</strong>. Najväčšia, preto <strong>NSD</strong>.</li><li>360 = 2³ · 3² · 5 a 240 = 2⁴ · 3 · 5. Spoločné: 2, 3, 5 s menšími exponentmi. NSD = 2³ · 3 · 5 = <strong>120</strong>.</li><li>Počet dlaždíc: 360 : 120 = 3 v jednom smere, 240 : 120 = 2 v druhom, spolu 3 · 2 = <strong>6</strong>.</li></ol><p><strong>Odpoveď:</strong> Strana dlaždice je 120 cm a potrebujeme 6 dlaždíc.</p><div class=\"warning\"><strong>Pozor:</strong> NSD je odpoveďou iba na otázku „aká veľká časť“. Otázka „koľko kusov“ si vyžaduje ešte jedno delenie.</div>"
      },
      {
        "id": "e-ex2",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Vzorová úloha 2: spoločný čas (NSN)",
        "html": "<div class=\"example\"><span class=\"mini-label\">ÚLOHA</span><p>Dva autobusy odišli zo zastávky spolu o 6:00. Prvý chodí každých 15 minút, druhý každých 20 minút. O koľko minút a o koľkej budú na zastávke opäť spolu?</p></div><ol class=\"steps\"><li>Prvý je na zastávke po 15, 30, 45, … minútach, druhý po 20, 40, 60, … minútach. Hľadáme prvý <strong>spoločný násobok</strong>, teda <strong>NSN</strong>.</li><li>15 = 3 · 5 a 20 = 2² · 5. NSN = 2² · 3 · 5 = <strong>60</strong>.</li><li>60 minút je 1 hodina po 6:00, teda o 7:00.</li></ol><p><strong>Odpoveď:</strong> Za 60 minút, o 7:00.</p>"
      },
      {
        "id": "s-type",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "rozpoznanie typu úlohy",
        "title": "NSD alebo NSN?",
        "question": "Aký pojem treba v danej úlohe určiť? Rozhodni pre každú situáciu.",
        "labels": [
          "NSD",
          "NSN"
        ],
        "items": [
          {
            "text": "Rozdeliť 48 ceruziek a 72 gumiek do rovnakých balíčkov bez zvyšku, balíčkov má byť čo najviac.",
            "answer": true,
            "why": "Rozdeľujeme na rovnaké skupiny, najväčší počet, preto NSD."
          },
          {
            "text": "Dve svetlá blikajú každých 12 s a 20 s. Kedy blikne obe naraz?",
            "answer": false,
            "why": "Udalosť sa opakuje a čakáme na spoločný okamih, preto NSN."
          },
          {
            "text": "Rozstrihať dva pásiky rôznej dĺžky na rovnaké kúsky čo najväčšej dĺžky.",
            "answer": true,
            "why": "Najväčšia možná časť, ktorá delí obe dĺžky, preto NSD."
          },
          {
            "text": "Mama kupuje ceruzky po 8 a gumy po 6 kusov a chce rovnaký počet, najmenej možný.",
            "answer": false,
            "why": "Hľadáme najmenší spoločný počet, ktorý je násobkom 8 aj 6, preto NSN."
          },
          {
            "text": "Skrátiť zlomok 84/126 na základný tvar.",
            "answer": true,
            "why": "Čitateľ aj menovateľ vydelíme ich najväčším spoločným deliteľom, preto NSD."
          },
          {
            "text": "Nájsť spoločný menovateľ zlomkov s menovateľmi 12 a 18.",
            "answer": false,
            "why": "Hľadáme najmenší spoločný násobok menovateľov, preto NSN."
          }
        ]
      },
      {
        "id": "c-balik",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "výber pojmu",
        "question": "Ovocinár má 28 jabĺk a 42 hrušiek. Chce urobiť čo najviac rovnakých balíčkov tak, aby v každom bolo rovnako jabĺk, rovnako hrušiek a žiadne ovocie nezostalo. Ktorý výpočet mu povie počet balíčkov?",
        "options": [
          "NSN(28, 42) = 84",
          "NSD(28, 42) = 14",
          "28 + 42 = 70"
        ],
        "answer": 1,
        "correct": "Rozdeľujeme na rovnaké skupiny, najväčší počet: NSD(28, 42) = 14. V balíčku bude 2 jablká a 3 hrušky.",
        "hint": "Počet balíčkov musí deliť 28 aj 42. A má byť čo najväčší."
      },
      {
        "id": "c-kyvadlo",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "výber pojmu",
        "question": "Dve kyvadlové hodiny sa spustia naraz. Prvé cinknú každých 28 sekúnd, druhé každých 42 sekúnd. Za koľko sekúnd cinknú prvýkrát opäť naraz?",
        "options": [
          "14 s",
          "28 · 42 = 1 176 s",
          "84 s"
        ],
        "answer": 2,
        "correct": "Hľadáme NSN(28, 42): 28 = 2² · 7, 42 = 2 · 3 · 7, NSN = 2² · 3 · 7 = 84. Súčin 1 176 je tiež spoločný násobok, ale nie najmenší.",
        "hint": "Hľadáš spoločný násobok oboch čísel a najmenší. Súčin dvoch čísel nemusí byť najmenší."
      },
      {
        "id": "n-skupiny",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "slovná úloha NSD",
        "title": "Rovnaké skupiny",
        "prompt": "Na výlete je 36 chlapcov a 48 dievčat. Rozdelia sa do rovnakých zmiešaných skupín, kde je v každej rovnako chlapcov a rovnako dievčat a nikto nezostane. Aký najväčší počet skupín môže vzniknúť?",
        "validate": "exact",
        "answer": 12,
        "success": "NSD(36, 48): 36 = 2² · 3², 48 = 2⁴ · 3, NSD = 2² · 3 = 12.",
        "hint": "Počet skupín musí deliť 36 aj 48 a má byť najväčší. Použi rozklad oboch čísel.",
        "reveal": "Správne je 12: 36 = 12 · 3, 48 = 12 · 4."
      },
      {
        "id": "n-skupiny2",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "slovná úloha NSD",
        "title": "Koľko chlapcov v skupine",
        "prompt": "Pokračuj v úlohe: z 36 chlapcov a 48 dievčat vzniklo 12 rovnakých skupín. Koľko chlapcov je v jednej skupine?",
        "validate": "exact",
        "answer": 3,
        "success": "36 : 12 = 3 chlapci (a 48 : 12 = 4 dievčatá).",
        "hint": "Chlapcov je 36 a skupín je 12. Rozdeľ ich rovnako.",
        "reveal": "Správne je 3: 36 chlapcov : 12 skupín = 3."
      },
      {
        "id": "n-svetla",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "slovná úloha NSN",
        "title": "Blikajúce svetlá",
        "prompt": "Prvý maják bliká každých 12 sekúnd, druhý každých 20 sekúnd. Práve blikli naraz. Za koľko sekúnd blikne obe prvýkrát opäť naraz?",
        "validate": "exact",
        "answer": 60,
        "success": "NSN(12, 20): 12 = 2² · 3, 20 = 2² · 5, NSN = 2² · 3 · 5 = 60.",
        "hint": "Hľadáme najmenší spoločný násobok. Rozlož 12 a 20 a vezmi všetky prvočísla s väčšími exponentmi.",
        "reveal": "Správne je 60: 60 = 12 · 5 = 20 · 3."
      },
      {
        "id": "n-autobus",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "slovná úloha NSN",
        "title": "Autobusy na zastávke",
        "prompt": "Autobus A chodí každých 15 minút a autobus B každých 25 minút. O 6:00 stáli na zastávke spolu. O koľko minút po 6:00 budú spolu najbližšie?",
        "validate": "exact",
        "answer": 75,
        "success": "NSN(15, 25): 15 = 3 · 5, 25 = 5², NSN = 3 · 5² = 75. Bude 7:15.",
        "hint": "Rozlož 15 a 25 a pri každom prvočísle vezmi väčší exponent.",
        "reveal": "Správne je 75: 75 = 15 · 5 = 25 · 3."
      },
      {
        "id": "n-pasiky",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "slovná úloha NSD",
        "title": "Strihanie pásikov",
        "prompt": "Dva pásiky látky majú dĺžky 180 cm a 252 cm. Rozstrihajú sa na rovnaké kúsky čo najväčšej dĺžky, bez zvyšku. Aká je dĺžka jedného kúska (v cm)?",
        "validate": "exact",
        "answer": 36,
        "success": "180 = 2² · 3² · 5, 252 = 2² · 3² · 7. NSD = 2² · 3² = 36. Vznikne 5 + 7 = 12 kúskov.",
        "hint": "Dĺžka kúska musí deliť 180 aj 252, a má byť najväčšia.",
        "reveal": "Správne je 36 cm: 180 : 36 = 5 a 252 : 36 = 7."
      },
      {
        "id": "n-dlazdice",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "slovná úloha NSD",
        "title": "Počet dlaždíc",
        "prompt": "Obdĺžnik 90 cm × 150 cm sa má vydláždiť čo najväčšími štvorcovými dlaždicami bez rezania. Koľko dlaždíc treba?",
        "validate": "exact",
        "answer": 15,
        "success": "NSD(90, 150) = 30. Dlaždice 30 cm: 90 : 30 = 3 a 150 : 30 = 5, spolu 3 · 5 = 15.",
        "hint": "Najprv urč najväčšiu stranu dlaždice (NSD). Potom spočítaj, koľko ich vojde na šírku a na dĺžku.",
        "reveal": "Správne je 15: strana 30 cm, na šírku 3 a na dĺžku 5 dlaždíc."
      },
      {
        "id": "m-vysledok",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "výpočet NSD a NSN",
        "title": "Priraď výsledok",
        "labels": [
          "6",
          "12",
          "24"
        ],
        "items": [
          {
            "text": "NSD(48, 72) – spoločné prvočísla 2³ a 3",
            "answer": "24"
          },
          {
            "text": "NSN(4, 6)",
            "answer": "12"
          },
          {
            "text": "NSD(30, 42)",
            "answer": "6"
          },
          {
            "text": "NSN(8, 3)",
            "answer": "24"
          },
          {
            "text": "NSD(36, 60)",
            "answer": "12"
          },
          {
            "text": "NSN(2, 3)",
            "answer": "6"
          }
        ]
      },
      {
        "id": "n-3ciferne",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "zmiešaná úloha",
        "title": "Najmenšie trojciferné číslo",
        "prompt": "Nájdi najmenšie trojciferné číslo, ktoré je deliteľné 4, 6 aj 9.",
        "validate": "exact",
        "answer": 108,
        "success": "NSN(4, 6, 9) = 36, takže číslo je násobkom 36: 36, 72, 108. Prvé trojciferné je 108.",
        "hint": "Číslo musí byť spoločným násobkom 4, 6 aj 9. Najprv nájdi NSN, potom hľadaj jeho násobky.",
        "reveal": "Správne je 108: NSN(4, 6, 9) = 36 a 36 · 3 = 108."
      },
      {
        "id": "n-12",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "zmiešaná úloha",
        "title": "Najmenšie štvorciferné číslo",
        "prompt": "Nájdi najmenšie štvorciferné číslo deliteľné 12.",
        "validate": "exact",
        "answer": 1008,
        "success": "1 000 : 12 = 83 zv. 4, preto 84 · 12 = 1 008. Kontrola: deliteľné 4 (08) a 3 (1 + 0 + 0 + 8 = 9).",
        "hint": "Vydeľ 1 000 číslom 12 a uvidíš, koľko chýba do ďalšieho násobku.",
        "reveal": "Správne je 1 008: 1 008 = 12 · 84."
      },
      {
        "id": "n-15",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "zmiešaná úloha",
        "title": "Koľko násobkov",
        "prompt": "Koľko trojciferných čísel je deliteľných 15?",
        "validate": "exact",
        "answer": 60,
        "success": "Trojciferné násobky 15 sú od 105 (15 · 7) po 990 (15 · 66), spolu 66 − 6 = 60.",
        "hint": "Prvý trojciferný násobok 15 je 105, posledný 990. Koľkými násobkami 15 sa tam dostaneš?",
        "reveal": "Správne je 60: 105 = 15 · 7 a 990 = 15 · 66, preto 66 − 7 + 1 = 60."
      },
      {
        "id": "h-chyba1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Dva autobusy chodia každých 12 a 18 minút a práve vyšli spolu. Žiak píše: „NSD(12, 18) = 6, preto budú spolu o 6 minút.“ Čo je zle?",
        "options": [
          "Chyba nie je, 6 minút je správne.",
          "Treba odčítať, 18 − 12 = 6.",
          "Čakáme na spoločný okamih, takže treba NSN(12, 18) = 36. Po 6 minútach ešte nemá ani jeden autobus ďalší odchod."
        ],
        "answer": 2,
        "correct": "Presne. Pri opakovaní hľadáme NSN: 36 minút. NSD(12, 18) = 6 by bol správny pri rozdeľovaní na rovnaké skupiny.",
        "hint": "Prvý autobus odchádza po 12, 24, 36 minútach, druhý po 18, 36 minútach. Kedy sa to prvýkrát zhoduje?"
      },
      {
        "id": "h-chyba2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Zo 24 chlapcov a 36 dievčat tvoríme čo najviac rovnakých skupín. Žiak píše: „NSD(24, 36) = 12, takže v každej skupine je 12 detí.“ Čo je zle?",
        "options": [
          "12 je počet skupín. V jednej skupine sú 2 chlapci (24 : 12) a 3 dievčatá (36 : 12), teda 5 detí.",
          "NSD(24, 36) nie je 12, ale 6.",
          "Správne je 60 detí v skupine, lebo 24 + 36 = 60."
        ],
        "answer": 0,
        "correct": "Presne. NSD odpovedá na „koľko skupín“. Počet detí v skupine sa dopočíta delením: 2 + 3 = 5.",
        "hint": "Overme si: ak by bolo v skupine 12 detí, mohlo by byť skupín 12? To je dokopy 144 detí, a máme len 60."
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úlohy na papier",
        "html": "<p>Odlož zariadenie. Úlohy riešiš v krokoch: čo hľadám (NSD alebo NSN), rozklad, výpočet, odpoveď celou vetou.</p><ol><li>V škole sú tri triedy: 28, 32 a 36 žiakov. Pri turnaji tvoria rovnako veľké družstvá a v každom družstve sú žiaci len z jednej triedy. Aký najväčší počet žiakov môže mať družstvo? Koľko družstiev vznikne?</li><li>Tri lode odplávali z prístavu spolu. Prvá sa vracia každé 4 dni, druhá každých 6 dní a tretia každých 10 dní. Po koľkých dňoch budú všetky tri opäť v prístave?</li></ol>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: slovné úlohy",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Riešenia píš do zošita. Pri každej úlohe napíš, či hľadáš NSD alebo NSN. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Eva má 45 modrých a 60 červených korálikov. Chce urobiť čo najviac rovnakých náramkov a použiť všetky korálky. Koľko náramkov urobí a koľko korálikov každej farby bude v jednom?",
            "answer": "NSD(45, 60) = 15 náramkov.<br>Modré: 45 : 15 = 3, červené: 60 : 15 = 4.<br><strong>Odpoveď:</strong> 15 náramkov, v každom 3 modré a 4 červené korálky."
          },
          {
            "level": "zaklad",
            "text": "Vlak A chodí každých 18 minút a vlak B každých 24 minút. Teraz stoja spolu. Za koľko minút budú spolu najbližšie?",
            "answer": "NSN(18, 24): 18 = 2 · 3², 24 = 2³ · 3, NSN = 2³ · 3² = <strong>72</strong>.<br>Spolu budú o 72 minút (1 hodinu 12 minút)."
          },
          {
            "level": "zaklad",
            "text": "Podlaha 168 cm × 120 cm sa vydláždi čo najväčšími štvorcovými dlaždicami bez rezania. Urč stranu dlaždice a počet dlaždíc.",
            "answer": "NSD(168, 120) = 24 cm (168 = 2³ · 3 · 7, 120 = 2³ · 3 · 5).<br>168 : 24 = 7, 120 : 24 = 5, spolu 7 · 5 = <strong>35</strong> dlaždíc."
          },
          {
            "level": "zaklad",
            "text": "Zisti, ktoré z čísel 1 260, 2 345 a 3 072 sú deliteľné 4, 5 aj 9.",
            "answer": "1 260: 60 : 4 = 15 áno, končí 0 áno, 1+2+6+0 = 9 áno → <strong>deliteľné 4, 5 aj 9</strong>.<br>2 345: 45 nie je deliteľné 4, súčet 14 nie je deliteľný 9 → iba 5.<br>3 072: 72 : 4 = 18 áno, končí 2 nie je deliteľné 5, súčet 12 nie je deliteľný 9 → iba 4."
          },
          {
            "level": "rozsirenie",
            "text": "Tri svetlá blikajú každých 4, 6 a 10 sekúnd. Teraz blikli naraz. Za koľko sekúnd blikne všetky tri opäť naraz?",
            "answer": "NSN(4, 6, 10) = 2² · 3 · 5 = <strong>60</strong> sekúnd."
          },
          {
            "level": "rozsirenie",
            "text": "Nájdi najmenšie prirodzené číslo, ktoré pri delení 6, 8 a 10 dáva zvyšok 3.",
            "answer": "Číslo mínus 3 je násobok 6, 8 aj 10. NSN(6, 8, 10) = 2³ · 3 · 5 = 120.<br>Číslo je 120 + 3 = <strong>123</strong>.<br>Kontrola: 123 = 6 · 20 + 3 = 8 · 15 + 3 = 10 · 12 + 3."
          },
          {
            "level": "rozsirenie",
            "text": "V škole sú tri triedy s 28, 32 a 36 žiakmi. Utvoria rovnako veľké družstvá, v každom žiaci iba z jednej triedy. Aký najväčší počet žiakov môže mať družstvo?",
            "answer": "NSD(28, 32, 36): 28 = 2² · 7, 32 = 2⁵, 36 = 2² · 3². Spoločné iba 2 s najmenším exponentom 2: NSD = <strong>4</strong>.<br>Družstiev: 7 + 8 + 9 = 24."
          },
          {
            "level": "rozsirenie",
            "text": "Sčítaj zlomky 7/12 + 5/18. Najprv nájdi spoločný menovateľ pomocou NSN.",
            "answer": "NSN(12, 18) = 36.<br>7/12 = 21/36, 5/18 = 10/36<br>21/36 + 10/36 = <strong>31/36</strong>"
          },
          {
            "level": "bonus",
            "text": "Mama kúpila ceruzky v baleniach po 8 kusov a gumy v baleniach po 6 kusov. Chce mať ceruziek a gúm rovnako. Koľko najmenej balení každého druhu musí kúpiť?",
            "answer": "NSN(8, 6) = 24 kusov.<br>Ceruzky: 24 : 8 = <strong>3 balenia</strong>, gumy: 24 : 6 = <strong>4 balenia</strong>."
          },
          {
            "level": "bonus",
            "text": "Pre čísla a, b platí NSD(a, b) = 12 a NSN(a, b) = 180. Ak a = 36, urč b. Použi, že NSD · NSN = a · b.",
            "answer": "12 · 180 = 36 · b, preto b = 2 160 : 36 = <strong>60</strong>.<br>Kontrola: NSD(36, 60) = 12 a NSN(36, 60) = 180."
          },
          {
            "level": "bonus",
            "text": "V krabici je viac ako 50 a menej ako 90 cukríkov. Dajú sa rozdeliť po 6 aj po 8 bez zvyšku. Koľko cukríkov je v krabici?",
            "answer": "Počet je spoločný násobok 6 a 8, teda násobok NSN(6, 8) = 24: 24, 48, 72, 96, …<br>V intervale od 50 do 90 leží iba <strong>72</strong>."
          }
        ]
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Ako rozhodnem",
        "prompt": "Vysvetli jednou až dvoma vetami, ako v slovnej úlohe rozhodneš, či treba určiť NSD alebo NSN. Uveď jeden príklad situácie.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Ak niečo rozdeľujem na rovnaké skupiny alebo časti, čo najväčšie, hľadám NSD (napríklad balíčky ovocia). Ak sa niečo opakuje a čakám, kedy sa to stretne, hľadám NSN (napríklad autobusy, ktoré odchádzajú spolu).",
        "placeholder": "NSD hľadám, keď... a NSN hľadám, keď..."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "rozpoznať NSD alebo NSN zo zadania",
          "slovná úloha s NSD (aj počet skupín)",
          "slovná úloha s NSN",
          "zmiešané úlohy s deliteľnosťou"
        ],
        "prompt": "Označ, ako dobre to zvládaš. Nie je to známka. Čo máš 🔴 alebo 🟡, si prejdi pred kontrolnou písomnou prácou."
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 6,
        "text": "Dva pásiky majú dĺžky 210 cm a 300 cm. Rozstrihajú sa na rovnaké kúsky najväčšej možnej dĺžky bez zvyšku. Aká je dĺžka kúska a koľko kúskov vznikne?",
        "answer": "NSD(210, 300) = 30 cm. 210 : 30 = 7 a 300 : 30 = 10, spolu 17 kúskov."
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 6,
        "text": "Autobus A chodí každých 9 minút, autobus B každých 12 minút. O 8:00 vyšli spolu. O koľkej budú spolu opäť?",
        "answer": "NSN(9, 12) = 36. O 8:36."
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 6,
        "text": "Rozhodni, či v úlohe treba NSD alebo NSN a zdôvodni: a) „Ktoré najbližšie číslo je deliteľné 6 aj 8?“ b) „Rozdeľ 54 chlapcov a 81 dievčat do čo najväčšieho počtu rovnakých skupín.“",
        "answer": "a) NSN(6, 8) = 24 (číslo je násobkom oboch).<br>b) NSD(54, 81) = 27 (rozdeľujeme na rovnaké skupiny). Vznikne 27 skupín, v každej 2 chlapci a 3 dievčatá."
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 6,
        "text": "Tri zvončeky zvonia každé 3, 4 a 5 minút. Zazvonili naraz. Za koľko minút zazvonia opäť všetky naraz?",
        "answer": "NSN(3, 4, 5) = 60 minút."
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 6,
        "text": "Kvetinárstvo má 54 ruží a 81 tulipánov. Z nich robí rovnaké kytice bez zvyškov. Koľko najviac kytíc môže urobiť a čo bude v jednej?",
        "answer": "NSD(54, 81) = 27 kytíc. V jednej: 54 : 27 = 2 ruže a 81 : 27 = 3 tulipány."
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 6,
        "text": "Dvaja bežci bežia po rovnakom okruhu. Jeden ho obehne za 10 minút, druhý za 14 minút. Štartovali spolu. Po koľkých minútach sa stretnú na štarte a koľko kôl každý obehne?",
        "answer": "NSN(10, 14) = 70 minút. Prvý 7 kôl, druhý 5 kôl."
      }
    ]
  }
});
