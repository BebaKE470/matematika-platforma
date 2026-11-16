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
      "v slovnej úlohe rozpoznať, či treba určiť NSD (rovnaké skupiny) alebo NSN (spoločný čas)",
      "pri NSD dopočítať počet balíčkov a počet vecí v jednom balíčku",
      "pri NSN zistiť, za koľko minút a koľkokrát sa udalosti stretnú v danom čase",
      "vyriešiť zmiešanú úlohu s násobkami (koľko čísel je deliteľných daným číslom)"
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
      "3 min: rozdiel NSD a NSN, dve vzorové úlohy",
      "8–10 min: úlohy v aplikácii (rozpoznanie typu, balíčky, cykly, hľadanie chyby)",
      "8–10 min: úlohy na papieri (BEZ MOBILU) a zbierka podľa úrovne",
      "3 min: spoločný rozbor, krátka reflexia"
    ],
    "diagnostics": [
      "žiak správne určí typ úlohy (NSD alebo NSN) zo slovného zadania",
      "žiak odpovie na otázku úlohy, nielen vypíše NSD alebo n(počet skupín vs. počet vecí v skupine)",
      "žiak nezamieňa NSD a NSN ani pri väčších číslach a používa rozklad",
      "žiak vie zmiešanú úlohu rozložiť na kroky a skontrolovať výsledok"
    ],
    "partialUse": [
      "Modul je zámerne skrátený a zameraný na obsah písomky (slovná úloha s NSD a NSN). Skracovanie zlomkov a spoločný menovateľ sú z digitálnej časti vynechané.",
      "Mobil nenahrádza čítanie zadania, rozklad v zošite ani odpoveď celou vetou."
    ]
  },
  "student": {
    "title": "Slovné úlohy: NSD, NSN a deliteľnosť",
    "subtitle": "Téma 30 · Čísla, premenné, výrazy",
    "intro": "Spojíš NSD, NSN a deliteľnosť v slovných úlohách, aké sa objavia v písomke: rozdelenie na rovnaké skupiny a spoločný čas. Najdôležitejšie je rozhodnúť, čo treba hľadať. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "20–25 min",
    "activities": [
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "rozpoznať v slovnej úlohe, či hľadáme NSD alebo NSN",
          "dopočítať, koľko je skupín a koľko vecí v každej",
          "určiť, koľkokrát sa udalosti stretnú v danom čase"
        ]
      },
      {
        "id": "e-postup",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Slovná úloha: NSD alebo NSN",
        "html": "<p>Najprv sa pýtaj: <span class=\"hl\">Čo sa tu deje?</span></p><div class=\"compare\"><div class=\"good\"><span class=\"mini-label\">HĽADÁM NSD</span><p>Rozdeľujem na <strong>rovnaké skupiny</strong> bez zvyšku, čo najväčšie (najviac balíčkov, najväčšia strana štvorca).</p></div><div class=\"good\"><span class=\"mini-label\">HĽADÁM NSN</span><p>Niečo sa <strong>opakuje</strong> a čakám, kedy sa to <strong>stretne</strong> (autobusy, svetlá).</p></div></div><div class=\"example\"><span class=\"mini-label\">ROZDELENIE (NSD)</span><p>Obdĺžniková izba 360 cm × 240 cm sa vydláždi čo najväčšími štvorcami bez rezania.</p><p>360 = 2³ · 3² · 5, 240 = 2⁴ · 3 · 5, NSD = 2³ · 3 · 5 = <strong>120 cm</strong>.</p><p>Počet dlaždíc: 360 : 120 = 3 a 240 : 120 = 2, spolu <strong>6</strong>.</p></div><div class=\"example\"><span class=\"mini-label\">OPAKOVANIE (NSN)</span><p>Dva autobusy odišli o 6:00 spolu. Prvý chodí každých 15 minút, druhý každých 20 minút.</p><p>15 = 3 · 5, 20 = 2² · 5, NSN = 2² · 3 · 5 = <strong>60 min</strong>, teda opäť o 7:00.</p><p>Do 9:00 vrátane je to po 60, 120 a 180 minútach, spolu <strong>3-krát</strong>.</p></div><div class=\"warning\"><strong>Pozor:</strong> NSD odpovedá len na „aká veľká časť / koľko skupín“. Otázka „koľko kusov v jednej skupine“ si vyžaduje ešte jedno delenie. Odpoveď vždy overíš: dáva v príbehu zmysel?</div>",
        "remember": "Rovnaké najväčšie časti: NSD, potom dopočítaj kusy delením. Opakovanie a stretnutie: NSN."
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
            "level": "rozsirenie",
            "text": "Obdĺžnik 1 330 cm × 1 820 cm sa rozdelí na čo najväčšie štvorce bez zvyšku. Urči stranu štvorca a ich počet.",
            "answer": "1 330 = 2 · 5 · 7 · 19 a 1 820 = 2² · 5 · 7 · 13. D = 2 · 5 · 7 = <strong>70 cm</strong>.<br>1 330 : 70 = 19, 1 820 : 70 = 26, počet 19 · 26 = <strong>494</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Nájdi najmenšie prirodzené číslo, ktoré pri delení 6, 8 a 10 dáva zvyšok 3.",
            "answer": "Číslo mínus 3 je násobok 6, 8 aj 10. n(6, 8, 10) = 2³ · 3 · 5 = 120.<br>Číslo je 120 + 3 = <strong>123</strong>.<br>Kontrola: 123 = 6 · 20 + 3 = 8 · 15 + 3 = 10 · 12 + 3."
          },
          {
            "level": "bonus",
            "text": "V krabici je viac ako 50 a menej ako 90 cukríkov. Dajú sa rozdeliť po 6 aj po 8 bez zvyšku. Koľko cukríkov je v krabici?",
            "answer": "Počet je spoločný násobok 6 a 8, teda násobok n(6, 8) = 24: 24, 48, 72, 96, …<br>V intervale od 50 do 90 leží iba <strong>72</strong>."
          },
          {
            "level": "bonus",
            "text": "Štyri linky odchádzajú o 5:00 spolu a potom každú hodinu (60 min), 40 min, 2 hodiny a 1 hodinu 20 minút. Kedy sa naposledy do 22:00 stretnú?",
            "answer": "60 = 2² · 3 · 5, 40 = 2³ · 5, 120 = 2³ · 3 · 5, 80 = 2⁴ · 5. n = 2⁴ · 3 · 5 = 240 minút = 4 h.<br>Stretnú sa o 9:00, 13:00, 17:00 a 21:00. Naposledy o <strong>21:00</strong>."
          }
        ]
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "rozpoznať NSD alebo NSN zo zadania",
          "slovná úloha s NSD (aj počet skupín a kusov v skupine)",
          "slovná úloha s NSN (aj koľkokrát sa stretnú)",
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
