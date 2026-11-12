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
      "v slovnej úlohe rozpoznať, či treba určiť D(rovnaké skupiny, najväčšie možné časti) alebo n(spoločný čas, najmenší spoločný počet)",
      "vyriešiť slovnú úlohu v krokoch: zadanie, výber pojmu, rozklad, výpočet, odpoveď slovom",
      "pri NSD vedieť dopočítať, koľko je skupín a koľko v každej (druhý krok úlohy)",
      "zmiešané úlohy: kritériá deliteľnosti, rozklad, NSD a NSN v jednej úlohe, aj úlohy na dopočítanie neznámeho čísla",
      "skrátiť zlomok na základný tvar pomocou prvočíselného rozkladu a rozlíšiť súdeliteľné a nesúdeliteľné čísla (D(m, n) = 1)"
    ],
    "competencies": [
      "modelovanie reálnej situácie",
      "matematická komunikácia (odpoveď vetou)",
      "argumentácia a kontrola výsledku",
      "prehľadný ručný zápis rozkladu a výpočtu"
    ],
    "enrichment": [
      "Obohatenie (nie štandard): kontrola výsledku „spätne do zadania“ (sedí rozdelenie bez zvyšku? sú v čase obe udalosti naraz?) a vzťah D(a, b) · n(a, b) = a · b pri hľadaní chýbajúceho čísla."
    ],
    "flow": [
      "3 min: opakovanie rozdielu NSD a NSN na dvoch krátkych situáciách",
      "8–10 min: vzorové slovné úlohy v aplikácii (rozdelenie, spoločný čas, dláždenie, skracovanie zlomku) a rozpoznávanie typu",
      "10 min: úlohy na výpočet v aplikácii a hľadanie chyby v zdôvodnení",
      "8–10 min: úlohy na papieri (BEZ MOBILU) a zbierka podľa úrovne",
      "3–5 min: spoločný rozbor, krátka reflexia"
    ],
    "diagnostics": [
      "žiak správne určí typ úlohy (NSD alebo NSN) zo slovného zadania",
      "žiak odpovie na otázku úlohy, nielen vypíše NSD alebo n(počet skupín vs. počet vecí v skupine)",
      "žiak nezamieňa NSD a NSN ani pri väčších číslach a používa rozklad",
      "žiak vie zmiešanú úlohu rozložiť na kroky a skontrolovať výsledok",
      "žiak skráti zlomok až na základný tvar (nezastaví sa pri čiastočnom krátení)"
    ],
    "partialUse": [
      "Pri nedostatku času vynechajte zbierku; stačí vzorové úlohy, rozpoznávanie typu a samostatná úloha na papieri.",
      "Mobil nenahrádza čítanie zadania, rozklad v zošite ani odpoveď celou vetou."
    ]
  },
  "student": {
    "title": "Slovné úlohy: NSD, NSN a deliteľnosť",
    "subtitle": "Téma 30 · Čísla, premenné, výrazy",
    "intro": "Dnes spojíš všetko, čo vieš o deliteľnosti, NSD a NSN, a použiješ to na slovné úlohy a skracovanie zlomkov. Najdôležitejšie je rozhodnúť, čo treba hľadať. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "35–45 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "NSD a NSN v jednej tabuľke",
        "html": "<div class=\"compare\"><div class=\"good\"><span class=\"mini-label\">D(najväčší spoločný deliteľ)</span><p>Spoločné prvočísla s <span class=\"hl\">menšími</span> exponentmi.</p><p>Napr. D(12, 18) = 2 · 3 = 6</p></div><div class=\"good\"><span class=\"mini-label\">n(najmenší spoločný násobok)</span><p>Všetky prvočísla s <span class=\"hl\">väčšími</span> exponentmi.</p><p>Napr. n(12, 18) = 2² · 3² = 36</p></div></div><p>Zápis: najväčší spoločný deliteľ čísel m a n sa píše aj <strong>D(m, n)</strong> a najmenší spoločný násobok aj <strong>n(m, n)</strong>. Čísla, pre ktoré D(m, n) = 1, sú <strong>nesúdeliteľné</strong>.</p><p>Zopakuj si aj kritériá: číslo je deliteľné 2 (párne), 3 (ciferný súčet), 4 (posledné dve číslice), 5, 8 (posledné tri číslice), 9 (ciferný súčet) a 10 (končí nulou). Deliteľné 6 je to, čo je deliteľné 2 aj 3.</p>"
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
        "id": "e-ex3",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Vzorová úloha 3: skrátenie zlomku",
        "html": "<div class=\"example\"><span class=\"mini-label\">ÚLOHA</span><p>Skráť zlomok <span class=\"frac\"><span class=\"frac-num\">696</span><span class=\"frac-den\">2 088</span></span> na základný tvar.</p></div><ol class=\"steps\"><li>Rozlož čitateľa aj menovateľa na prvočísla: 696 = 2³ · 3 · 29 a 2 088 = 2³ · 3² · 29.</li><li>Vyškrtni spoločné činitele (2³, 3 a 29). To je krátenie ich najväčším spoločným deliteľom D(696, 2 088) = 2³ · 3 · 29 = 696.</li><li>V čitateli zostane 1, v menovateli 3.</li></ol><p><strong>Odpoveď:</strong> <span class=\"frac\"><span class=\"frac-num\">696</span><span class=\"frac-den\">2 088</span></span> = <span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">3</span></span></p><div class=\"warning\"><strong>Pozor:</strong> Skracuj, kým sú čitateľ a menovateľ súdeliteľné. Základný tvar nastane vtedy, keď sú nesúdeliteľné. Pri 3 600/4 062 nestačí vydeliť dvoma (1 800/2 031): obe čísla sú ešte deliteľné 3, správne je 600/677.</div>",
        "remember": "Zlomok je v základnom tvare, keď sú čitateľ a menovateľ nesúdeliteľné. Skrátiš ho ich najväčším spoločným deliteľom."
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
          "n(28, 42) = 84",
          "D(28, 42) = 14",
          "28 + 42 = 70"
        ],
        "answer": 1,
        "correct": "Rozdeľujeme na rovnaké skupiny, najväčší počet: D(28, 42) = 14. V balíčku bude 2 jablká a 3 hrušky.",
        "hint": "Počet balíčkov musí deliť 28 aj 42. A má byť čo najväčší."
      },
      {
        "id": "c-nesud",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "súdeliteľné čísla",
        "question": "Ktorá dvojica čísel je nesúdeliteľná, teda D(m, n) = 1?",
        "options": [
          "91 a 105",
          "44 a 125",
          "276 a 282"
        ],
        "answer": 1,
        "correct": "44 = 2² · 11 a 125 = 5³ nemajú spoločné prvočíslo, takže D(44, 125) = 1. Čísla 91 a 105 majú spoločného deliteľa 7 a čísla 276 a 282 deliteľa 6.",
        "hint": "Rozlož obe čísla na prvočísla a hľadaj spoločné prvočíslo."
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
        "correct": "Hľadáme n(28, 42): 28 = 2² · 7, 42 = 2 · 3 · 7, NSN = 2² · 3 · 7 = 84. Súčin 1 176 je tiež spoločný násobok, ale nie najmenší.",
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
        "success": "D(36, 48): 36 = 2² · 3², 48 = 2⁴ · 3, NSD = 2² · 3 = 12.",
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
        "success": "n(12, 20): 12 = 2² · 3, 20 = 2² · 5, NSN = 2² · 3 · 5 = 60.",
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
        "success": "n(15, 25): 15 = 3 · 5, 25 = 5², NSN = 3 · 5² = 75. Bude 7:15.",
        "hint": "Rozlož 15 a 25 a pri každom prvočísle vezmi väčší exponent.",
        "reveal": "Správne je 75: 75 = 15 · 5 = 25 · 3."
      },
      {
        "id": "n-linky",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "slovná úloha NSN",
        "title": "Štyri linky",
        "prompt": "O 5:00 vyrazia zo zastávky spolu štyri linky. Odchádzajú potom každých 40, 60, 80 a 120 minút. Koľkokrát po 5:00 sa všetky štyri stretnú na zastávke, ak sa prevádzka končí o 22:00?",
        "validate": "exact",
        "answer": 4,
        "success": "40 = 2³ · 5, 60 = 2² · 3 · 5, 80 = 2⁴ · 5, 120 = 2³ · 3 · 5. NSN = 2⁴ · 3 · 5 = 240 minút = 4 hodiny. Stretnú sa o 9:00, 13:00, 17:00 a 21:00.",
        "hint": "Najprv nájdi n(40, 60, 80, 120) v minútach. Od 5:00 do 22:00 uplynie 17 hodín.",
        "reveal": "Správne je 4: NSN je 240 minút (4 h), teda o 9:00, 13:00, 17:00, 21:00."
      },
      {
        "id": "n-pozemok",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "slovná úloha NSD",
        "title": "Pozemok",
        "prompt": "Obdĺžnikový pozemok 3 960 cm × 825 cm sa rozdelí na čo najväčšie štvorce bez zvyšku. Koľko štvorcov vznikne?",
        "validate": "exact",
        "answer": 120,
        "success": "D(3 960, 825) = 3 · 5 · 11 = 165 cm. Na dĺžku 3 960 : 165 = 24, na šírku 825 : 165 = 5, spolu 24 · 5 = 120.",
        "hint": "Strana štvorca je D(3 960, 825). Rozlož 3 960 = 2³ · 3² · 5 · 11 a 825 = 3 · 5² · 11.",
        "reveal": "Správne je 120: strana 165 cm, 24 · 5 = 120 štvorcov."
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
        "id": "n-skrat1",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "skracovanie zlomku",
        "title": "Základný tvar zlomku",
        "prompt": "Zlomok 91/104 skráť na základný tvar. Aký je jeho menovateľ?",
        "validate": "exact",
        "answer": 8,
        "success": "91 = 7 · 13 a 104 = 2³ · 13. Spoločné je 13, takže 91/104 = 7/8.",
        "hint": "Rozlož 91 a 104 na prvočísla a vyškrtni spoločné činitele.",
        "reveal": "Správne je 8: 91 : 13 = 7 a 104 : 13 = 8."
      },
      {
        "id": "n-skrat2",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "skracovanie zlomku",
        "title": "Čitateľ základného tvaru",
        "prompt": "Zlomok 1 825/3 200 skráť na základný tvar. Aký je jeho čitateľ?",
        "validate": "exact",
        "answer": 73,
        "success": "1 825 = 5² · 73 a 3 200 = 2⁷ · 5². Po vykrátení 5² zostane 73/128.",
        "hint": "Rozlož 1 825 a 3 200 na prvočísla. Čo majú spoločné?",
        "reveal": "Správne je 73: 1 825 : 25 = 73 a 3 200 : 25 = 128."
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
        "success": "D(90, 150) = 30. Dlaždice 30 cm: 90 : 30 = 3 a 150 : 30 = 5, spolu 3 · 5 = 15.",
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
            "text": "D(48, 72) – spoločné prvočísla 2³ a 3",
            "answer": "24"
          },
          {
            "text": "n(4, 6)",
            "answer": "12"
          },
          {
            "text": "D(30, 42)",
            "answer": "6"
          },
          {
            "text": "n(8, 3)",
            "answer": "24"
          },
          {
            "text": "D(36, 60)",
            "answer": "12"
          },
          {
            "text": "n(2, 3)",
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
        "success": "n(4, 6, 9) = 36, takže číslo je násobkom 36: 36, 72, 108. Prvé trojciferné je 108.",
        "hint": "Číslo musí byť spoločným násobkom 4, 6 aj 9. Najprv nájdi NSN, potom hľadaj jeho násobky.",
        "reveal": "Správne je 108: n(4, 6, 9) = 36 a 36 · 3 = 108."
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
        "id": "n-nsd3",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "výpočet NSD a NSN",
        "title": "D troch čísel",
        "prompt": "Urči D(86, 129, 215), teda najväčšieho spoločného deliteľa troch čísel.",
        "validate": "exact",
        "answer": 43,
        "success": "86 = 2 · 43, 129 = 3 · 43, 215 = 5 · 43. Spoločný je iba 43.",
        "hint": "Rozlož každé číslo na prvočísla a nájdi činiteľ, ktorý majú všetky tri.",
        "reveal": "Správne je 43: 86 : 43 = 2, 129 : 43 = 3, 215 : 43 = 5."
      },
      {
        "id": "n-nsn56",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "výpočet NSD a NSN",
        "title": "n dvoch čísel",
        "prompt": "Urči n(56, 264), teda najmenší spoločný násobok čísel 56 a 264.",
        "validate": "exact",
        "answer": 1848,
        "success": "56 = 2³ · 7 a 264 = 2³ · 3 · 11. n = 2³ · 3 · 7 · 11 = 1 848.",
        "hint": "Rozlož obe čísla. Vezmi každé prvočíslo s väčším exponentom.",
        "reveal": "Správne je 1848: 8 · 3 · 7 · 11."
      },
      {
        "id": "n-nsn3",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "výpočet NSD a NSN",
        "title": "n troch čísel",
        "prompt": "Urči n(178, 356, 534).",
        "validate": "exact",
        "answer": 1068,
        "success": "178 = 2 · 89, 356 = 2² · 89, 534 = 2 · 3 · 89. n = 2² · 3 · 89 = 1 068.",
        "hint": "Rozlož všetky tri čísla. Všetky majú spoločného činiteľa 89.",
        "reveal": "Správne je 1068: 4 · 3 · 89."
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
        "question": "Dva autobusy chodia každých 12 a 18 minút a práve vyšli spolu. Žiak píše: „D(12, 18) = 6, preto budú spolu o 6 minút.“ Čo je zle?",
        "options": [
          "Chyba nie je, 6 minút je správne.",
          "Treba odčítať, 18 − 12 = 6.",
          "Čakáme na spoločný okamih, takže treba n(12, 18) = 36. Po 6 minútach ešte nemá ani jeden autobus ďalší odchod."
        ],
        "answer": 2,
        "correct": "Presne. Pri opakovaní hľadáme NSN: 36 minút. D(12, 18) = 6 by bol správny pri rozdeľovaní na rovnaké skupiny.",
        "hint": "Prvý autobus odchádza po 12, 24, 36 minútach, druhý po 18, 36 minútach. Kedy sa to prvýkrát zhoduje?"
      },
      {
        "id": "h-chyba2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Zo 24 chlapcov a 36 dievčat tvoríme čo najviac rovnakých skupín. Žiak píše: „D(24, 36) = 12, takže v každej skupine je 12 detí.“ Čo je zle?",
        "options": [
          "12 je počet skupín. V jednej skupine sú 2 chlapci (24 : 12) a 3 dievčatá (36 : 12), teda 5 detí.",
          "D(24, 36) nie je 12, ale 6.",
          "Správne je 60 detí v skupine, lebo 24 + 36 = 60."
        ],
        "answer": 0,
        "correct": "Presne. NSD odpovedá na „koľko skupín“. Počet detí v skupine sa dopočíta delením: 2 + 3 = 5.",
        "hint": "Overme si: ak by bolo v skupine 12 detí, mohlo by byť skupín 12? To je dokopy 144 detí, a máme len 60."
      },
      {
        "id": "h-skrat",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak skracoval zlomok 3 600/4 062. Vydelil čitateľa aj menovateľa dvoma a napísal 1 800/2 031 ako základný tvar. Čo je zle?",
        "options": [
          "Zlomok je už v základnom tvare, lebo 2 031 je prvočíslo.",
          "Krátenie nie je dokončené: 1 800 aj 2 031 sú ešte deliteľné 3, základný tvar je 600/677.",
          "Mal skrátiť ešte dvoma a dostať 900/1 015."
        ],
        "answer": 1,
        "correct": "Presne. 2 031 = 3 · 677 a 1 800 je deliteľné 3 (súčet 9), takže sa dá skrátiť ešte. Základný tvar je 600/677. Číslo 2 031 je nepárne, preto sa dvoma skrátiť nedá.",
        "hint": "Skús ciferný súčet čísla 2 031 a čísla 1 800."
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
            "answer": "D(45, 60) = 15 náramkov.<br>Modré: 45 : 15 = 3, červené: 60 : 15 = 4.<br><strong>Odpoveď:</strong> 15 náramkov, v každom 3 modré a 4 červené korálky."
          },
          {
            "level": "zaklad",
            "text": "Vlak A chodí každých 18 minút a vlak B každých 24 minút. Teraz stoja spolu. Za koľko minút budú spolu najbližšie?",
            "answer": "n(18, 24): 18 = 2 · 3², 24 = 2³ · 3, NSN = 2³ · 3² = <strong>72</strong>.<br>Spolu budú o 72 minút (1 hodinu 12 minút)."
          },
          {
            "level": "zaklad",
            "text": "Podlaha 168 cm × 120 cm sa vydláždi čo najväčšími štvorcovými dlaždicami bez rezania. Urč stranu dlaždice a počet dlaždíc.",
            "answer": "D(168, 120) = 24 cm (168 = 2³ · 3 · 7, 120 = 2³ · 3 · 5).<br>168 : 24 = 7, 120 : 24 = 5, spolu 7 · 5 = <strong>35</strong> dlaždíc."
          },
          {
            "level": "zaklad",
            "text": "Zisti, ktoré z čísel 1 260, 2 345 a 3 072 sú deliteľné 4, 5 aj 9.",
            "answer": "1 260: 60 : 4 = 15 áno, končí 0 áno, 1+2+6+0 = 9 áno → <strong>deliteľné 4, 5 aj 9</strong>.<br>2 345: 45 nie je deliteľné 4, súčet 14 nie je deliteľný 9 → iba 5.<br>3 072: 72 : 4 = 18 áno, končí 2 nie je deliteľné 5, súčet 12 nie je deliteľný 9 → iba 4."
          },
          {
            "level": "zaklad",
            "text": "Skráť zlomky na základný tvar pomocou prvočíselného rozkladu: a) 91/104, b) 1 825/3 200, c) 3 600/4 062.",
            "answer": "a) 91 = 7 · 13, 104 = 2³ · 13: <strong>7/8</strong><br>b) 1 825 = 5² · 73, 3 200 = 2⁷ · 5²: <strong>73/128</strong><br>c) 3 600 = 2⁴ · 3² · 5², 4 062 = 2 · 3 · 677, spoločné 2 · 3 = 6: <strong>600/677</strong>"
          },
          {
            "level": "zaklad",
            "text": "Urči D(276, 282) a D(86, 129, 215). Potom rozhodni, ktoré z dvojíc 44 a 125, 99 a 100, 91 a 105 sú nesúdeliteľné.",
            "answer": "D(276, 282): 276 = 2² · 3 · 23, 282 = 2 · 3 · 47, D = 2 · 3 = <strong>6</strong>.<br>D(86, 129, 215) = <strong>43</strong> (86 = 2 · 43, 129 = 3 · 43, 215 = 5 · 43).<br>D(44, 125) = 1 a D(99, 100) = 1: nesúdeliteľné. D(91, 105) = 7: súdeliteľné."
          },
          {
            "level": "rozsirenie",
            "text": "Tri svetlá blikajú každých 4, 6 a 10 sekúnd. Teraz blikli naraz. Za koľko sekúnd blikne všetky tri opäť naraz?",
            "answer": "n(4, 6, 10) = 2² · 3 · 5 = <strong>60</strong> sekúnd."
          },
          {
            "level": "rozsirenie",
            "text": "Nájdi najmenšie prirodzené číslo, ktoré pri delení 6, 8 a 10 dáva zvyšok 3.",
            "answer": "Číslo mínus 3 je násobok 6, 8 aj 10. n(6, 8, 10) = 2³ · 3 · 5 = 120.<br>Číslo je 120 + 3 = <strong>123</strong>.<br>Kontrola: 123 = 6 · 20 + 3 = 8 · 15 + 3 = 10 · 12 + 3."
          },
          {
            "level": "rozsirenie",
            "text": "V škole sú tri triedy s 28, 32 a 36 žiakmi. Utvoria rovnako veľké družstvá, v každom žiaci iba z jednej triedy. Aký najväčší počet žiakov môže mať družstvo?",
            "answer": "D(28, 32, 36): 28 = 2² · 7, 32 = 2⁵, 36 = 2² · 3². Spoločné iba 2 s najmenším exponentom 2: NSD = <strong>4</strong>.<br>Družstiev: 7 + 8 + 9 = 24."
          },
          {
            "level": "rozsirenie",
            "text": "Urči D(90, 115, 320) a n(15, 20). Potom n(54, 162): čo si všimneš?",
            "answer": "D(90, 115, 320): 90 = 2 · 3² · 5, 115 = 5 · 23, 320 = 2⁶ · 5, D = <strong>5</strong>.<br>n(15, 20) = 2² · 3 · 5 = <strong>60</strong>.<br>n(54, 162) = 2 · 3⁴ = <strong>162</strong>, lebo 162 = 3 · 54 je násobok 54. Ak je jedno číslo násobkom druhého, NSN je to väčšie."
          },
          {
            "level": "rozsirenie",
            "text": "Urči n(56, 264) a n(178, 356, 534).",
            "answer": "56 = 2³ · 7, 264 = 2³ · 3 · 11: n = 2³ · 3 · 7 · 11 = <strong>1 848</strong>.<br>178 = 2 · 89, 356 = 2² · 89, 534 = 2 · 3 · 89: n = 2² · 3 · 89 = <strong>1 068</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Obdĺžnik 1 330 cm × 1 820 cm sa rozdelí na čo najväčšie štvorce bez zvyšku. Urči stranu štvorca a ich počet.",
            "answer": "1 330 = 2 · 5 · 7 · 19 a 1 820 = 2² · 5 · 7 · 13. D = 2 · 5 · 7 = <strong>70 cm</strong>.<br>1 330 : 70 = 19, 1 820 : 70 = 26, počet 19 · 26 = <strong>494</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Sčítaj zlomky 7/12 + 5/18. Najprv nájdi spoločný menovateľ pomocou NSN.",
            "answer": "n(12, 18) = 36.<br>7/12 = 21/36, 5/18 = 10/36<br>21/36 + 10/36 = <strong>31/36</strong>"
          },
          {
            "level": "bonus",
            "text": "Mama kúpila ceruzky v baleniach po 8 kusov a gumy v baleniach po 6 kusov. Chce mať ceruziek a gúm rovnako. Koľko najmenej balení každého druhu musí kúpiť?",
            "answer": "n(8, 6) = 24 kusov.<br>Ceruzky: 24 : 8 = <strong>3 balenia</strong>, gumy: 24 : 6 = <strong>4 balenia</strong>."
          },
          {
            "level": "bonus",
            "text": "Urči n(15, 105, 891) a zisti, koľkokrát je výsledok väčší ako 105.",
            "answer": "15 = 3 · 5, 105 = 3 · 5 · 7, 891 = 3⁴ · 11. n = 3⁴ · 5 · 7 · 11 = <strong>31 185</strong>.<br>31 185 : 105 = <strong>297</strong>."
          },
          {
            "level": "bonus",
            "text": "Štyri linky odchádzajú o 5:00 spolu a potom každú hodinu (60 min), 40 min, 2 hodiny a 1 hodinu 20 minút. Kedy sa naposledy do 22:00 stretnú?",
            "answer": "60 = 2² · 3 · 5, 40 = 2³ · 5, 120 = 2³ · 3 · 5, 80 = 2⁴ · 5. n = 2⁴ · 3 · 5 = 240 minút = 4 h.<br>Stretnú sa o 9:00, 13:00, 17:00 a 21:00. Naposledy o <strong>21:00</strong>."
          },
          {
            "level": "bonus",
            "text": "Pre čísla a, b platí D(a, b) = 12 a n(a, b) = 180. Ak a = 36, urč b. Použi, že NSD · NSN = a · b.",
            "answer": "12 · 180 = 36 · b, preto b = 2 160 : 36 = <strong>60</strong>.<br>Kontrola: D(36, 60) = 12 a n(36, 60) = 180."
          },
          {
            "level": "bonus",
            "text": "V krabici je viac ako 50 a menej ako 90 cukríkov. Dajú sa rozdeliť po 6 aj po 8 bez zvyšku. Koľko cukríkov je v krabici?",
            "answer": "Počet je spoločný násobok 6 a 8, teda násobok n(6, 8) = 24: 24, 48, 72, 96, …<br>V intervale od 50 do 90 leží iba <strong>72</strong>."
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
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Ak niečo rozdeľujem na rovnaké skupiny alebo časti, čo najväčšie, hľadám D(napríklad balíčky ovocia). Ak sa niečo opakuje a čakám, kedy sa to stretne, hľadám n(napríklad autobusy, ktoré odchádzajú spolu).",
        "placeholder": "NSD hľadám, keď... a NSN hľadám, keď..."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "rozpoznať NSD alebo NSN zo zadania",
          "slovná úloha s D(aj počet skupín)",
          "slovná úloha s NSN",
          "zmiešané úlohy s deliteľnosťou",
          "skrátiť zlomok na základný tvar"
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
        "answer": "D(210, 300) = 30 cm. 210 : 30 = 7 a 300 : 30 = 10, spolu 17 kúskov."
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 6,
        "text": "Autobus A chodí každých 9 minút, autobus B každých 12 minút. O 8:00 vyšli spolu. O koľkej budú spolu opäť?",
        "answer": "n(9, 12) = 36. O 8:36."
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 6,
        "text": "Rozhodni, či v úlohe treba NSD alebo NSN a zdôvodni: a) „Ktoré najbližšie číslo je deliteľné 6 aj 8?“ b) „Rozdeľ 54 chlapcov a 81 dievčat do čo najväčšieho počtu rovnakých skupín.“",
        "answer": "a) n(6, 8) = 24 (číslo je násobkom oboch).<br>b) D(54, 81) = 27 (rozdeľujeme na rovnaké skupiny). Vznikne 27 skupín, v každej 2 chlapci a 3 dievčatá."
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 6,
        "text": "Tri zvončeky zvonia každé 3, 4 a 5 minút. Zazvonili naraz. Za koľko minút zazvonia opäť všetky naraz?",
        "answer": "n(3, 4, 5) = 60 minút."
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 6,
        "text": "Kvetinárstvo má 54 ruží a 81 tulipánov. Z nich robí rovnaké kytice bez zvyškov. Koľko najviac kytíc môže urobiť a čo bude v jednej?",
        "answer": "D(54, 81) = 27 kytíc. V jednej: 54 : 27 = 2 ruže a 81 : 27 = 3 tulipány."
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 6,
        "text": "Dvaja bežci bežia po rovnakom okruhu. Jeden ho obehne za 10 minút, druhý za 14 minút. Štartovali spolu. Po koľkých minútach sa stretnú na štarte a koľko kôl každý obehne?",
        "answer": "n(10, 14) = 70 minút. Prvý 7 kôl, druhý 5 kôl."
      },
      {
        "id": "w7",
        "level": "zaklad",
        "space": 5,
        "text": "Skráť zlomok na základný tvar pomocou prvočíselného rozkladu: a) 84/126, b) 696/2 088.",
        "answer": "a) 84 = 2² · 3 · 7, 126 = 2 · 3² · 7, D = 42: 2/3<br>b) 696 = 2³ · 3 · 29, 2 088 = 2³ · 3² · 29: 1/3"
      },
      {
        "id": "w8",
        "level": "rozsirenie",
        "space": 5,
        "text": "Urči D(72, 96) a n(72, 96) pomocou prvočíselného rozkladu.",
        "answer": "72 = 2³ · 3², 96 = 2⁵ · 3. D = 2³ · 3 = 24, n = 2⁵ · 3² = 288."
      }
    ]
  }
});
