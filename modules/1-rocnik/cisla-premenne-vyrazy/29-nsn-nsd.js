MathPlatform.registerModule({
  "id": "1-u03-h029",
  "teacher": {
    "placement": "1. ročník · Čísla, premenné, výrazy · 29. hodina: NSN, NSD",
    "prerequisites": [
      "kritériá deliteľnosti, prvočísla a prvočíselný rozklad z 28. hodiny",
      "pojmy deliteľ a násobok, násobilka a delenie zo ZŠ",
      "skracovanie a sčítanie zlomkov zo ZŠ (iba ako motivácia v zbierke)"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza tému „NSN, NSD“. Obsah modulu rešpektuje jej miesto a rozsah v pláne."
    ],
    "planPerformance": [
      "Plán uvádza: riešiť úlohy finančnej matematiky; používať kritériá deliteľnosti; určiť NSN a NSD pomocou prvočíselného rozkladu. Ďalšie ciele modulu vychádzajú z uvedeného obsahu celku."
    ],
    "goals": [
      "vysvetliť, čo je spoločný deliteľ, spoločný násobok, NSD a NSN dvoch čísel",
      "zapísať NSD a NSN značením D(m, n) a n(m, n) ako v zošite a vysloviť definície („najväčšie nenulové prirodzené číslo, ktoré delí obe čísla“, „najmenšie nenulové prirodzené číslo deliteľné oboma“)",
      "určiť NSD a NSN dvoch aj troch čísel pomocou prvočíselného rozkladu (NSD: spoločné prvočísla s najmenším exponentom, NSN: všetky prvočísla s najväčším exponentom)",
      "poznať hodnotu NSD = 1 pre čísla bez spoločného deliteľa a overiť výsledok kontrolou",
      "rozpoznať typ slovnej úlohy (rozdelenie na rovnaké skupiny = NSD, opakovaná udalosť = NSN) – hlbšie na 30. hodine",
      "vyriešiť slovné úlohy: obkladanie obdĺžnika najväčšími štvorcami (strana = D, počet = (a : D) · (b : D)) a cyklické úlohy (NSN)"
    ],
    "competencies": [
      "matematická komunikácia",
      "práca s prvočíselným rozkladom a mocninami",
      "argumentácia a kontrola výsledku",
      "prehľadný ručný zápis rozkladu"
    ],
    "enrichment": [
      "Obohatenie (nie štandard): pre dve čísla platí D(a, b) · n(a, b) = a · b (ukážka na 360 a 84). Dá sa využiť na kontrolu výsledku.",
      "Zápis D(m, n) a n(m, n) zodpovedá zošitu žiakov. Písmeno n v n(m, n) nie je premenná, je to len značka pre NSN."
    ],
    "flow": [
      "3 min: motivácia dvoma situáciami (balíčky a autobusy), žiaci hádajú, čo budeme hľadať",
      "10 min: D(m, n) a n(m, n) vypisovaním deliteľov a násobkov, potom prvočíselným rozkladom (stromček, podčiarknutie spoločných činiteľov)",
      "8–10 min: úlohy v aplikácii (výpočty, tri čísla, obkladanie obdĺžnika, cyklické úlohy, hľadanie chyby)",
      "8–10 min: úloha na papieri (BEZ MOBILU) a zbierka podľa úrovne",
      "3–5 min: spoločný rozbor najčastejších chýb podľa živých výsledkov"
    ],
    "diagnostics": [
      "žiak nezamieňa NSD (najmenšie exponenty, len spoločné prvočísla) a NSN (najväčšie exponenty, všetky prvočísla)",
      "žiak vie rozložiť obe čísla správne a nezabúda na mocniny",
      "žiak vie, že NSD nesúdeliteľných čísel je 1 a že súčin čísel je spoločný násobok, ale nie vždy najmenší",
      "žiak vie pri jednoduchej slovnej úlohe povedať, či hľadá NSD alebo NSN",
      "žiak pri obkladaní obdĺžnika štvorcami hľadá stranu ako D(a, b), nie ako n(a, b)"
    ],
    "partialUse": [
      "Pri nedostatku času vynechajte tri čísla, slovné úlohy s obkladaním a zbierku; stačí vysvetlenie, výpočty a samostatná úloha.",
      "Mobil nenahrádza prvočíselný rozklad v zošite ani zápis postupu."
    ]
  },
  "student": {
    "title": "NSD a NSN pomocou prvočíselného rozkladu",
    "subtitle": "Téma 29 · Čísla, premenné, výrazy",
    "intro": "Naučíš sa nájsť najväčší spoločný deliteľ (NSD, zápis D) a najmenší spoločný násobok (NSN, zápis n) dvoch aj troch čísel, najprv vypisovaním a potom rýchlejšie pomocou prvočíselného rozkladu. Použiješ ich pri obkladaní obdĺžnika štvorcami a pri časových úlohách. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "35–45 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo potrebuješ z minulej hodiny",
        "html": "<p>Z 28. hodiny už vieš dve veci, ktoré dnes použiješ.</p><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Deliteľ a násobok</div><p class=\"term-rule\">6 je deliteľ čísla 24 (24 : 6 = 4) a 24 je násobok čísla 6.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Prvočíselný rozklad</div><p class=\"term-rule\">Číslo zapíšeme ako súčin prvočísel, napríklad 360 = 2³ · 3² · 5 a 84 = 2² · 3 · 7.</p></div></div><p>Ak ti rozklad nejde, vráť sa k 28. hodine. Delíš najmenším prvočíslom, kým nezostane 1.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "určiť spoločných deliteľov a spoločné násobky dvoch čísel",
          "nájsť NSD a NSN pomocou prvočíselného rozkladu",
          "nezamieňať si NSD a NSN",
          "poznať, kedy sa v slovnej úlohe hľadá NSD a kedy NSN",
          "zapísať NSD a NSN značením D(m, n) a n(m, n)",
          "vyriešiť slovné úlohy s obkladaním obdĺžnika a s časovými cyklami"
        ]
      },
      {
        "id": "e-situ",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Dve otázky, dve rôzne čísla",
        "html": "<div class=\"compare\"><div><span class=\"mini-label\">SITUÁCIA A</span><p>Máme 12 jabĺk a 18 hrušiek. Chceme z nich urobiť <strong>rovnaké balíčky</strong> a žiadne ovocie nemá zostať. Aký najväčší počet balíčkov sa dá urobiť?</p></div><div><span class=\"mini-label\">SITUÁCIA B</span><p>Autobus A odchádza každých 4 minúty, autobus B každých 6 minút. Teraz odišli spolu. <strong>Kedy</strong> odídu spolu znova?</p></div></div><p>V situácii A <span class=\"hl\">delíme</span> čísla 12 a 18 a hľadáme, čo majú spoločné ako delitele. V situácii B hľadáme čísla, ktoré sú <span class=\"hl\">násobkami</span> 4 aj 6. Na to slúžia dnešné dva pojmy.</p>",
        "remember": "Rozdeľujeme na rovnaké skupiny: NSD. Čakáme, kým sa niečo opäť stretne: NSN."
      },
      {
        "id": "e-def",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "NSD a NSN: definícia a značenie D, n",
        "html": "<div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">NSD – najväčší spoločný deliteľ, zápis D(m, n)</div><p class=\"term-rule\">Najväčšie nenulové prirodzené číslo, ktoré delí obe čísla m aj n.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">NSN – najmenší spoločný násobok, zápis n(m, n)</div><p class=\"term-rule\">Najmenšie nenulové prirodzené číslo, ktoré je deliteľné oboma číslami m aj n.</p></div></div><p>Zápis čítame: D(12, 18) je „najväčší spoločný deliteľ čísel 12 a 18“, n(4, 6) je „najmenší spoločný násobok čísel 4 a 6“. Písmeno n tu nie je premenná, je to len značka pre NSN.</p><div class=\"example\"><span class=\"mini-label\">NSD: D(12, 18)</span><p>Delitele 12: 1, 2, 3, 4, <strong>6</strong>, 12</p><p>Delitele 18: 1, 2, 3, <strong>6</strong>, 9, 18</p><p>Spoločné delitele: 1, 2, 3, 6. Najväčší je <strong>6</strong>, teda D(12, 18) = 6.</p></div><div class=\"example\"><span class=\"mini-label\">NSN: n(4, 6)</span><p>Násobky 4: 4, 8, <strong>12</strong>, 16, 20, 24, …</p><p>Násobky 6: 6, <strong>12</strong>, 18, 24, …</p><p>Spoločné násobky: 12, 24, … Najmenší je <strong>12</strong>, teda n(4, 6) = 12.</p></div><p>Pri väčších číslach by vypisovanie trvalo dlho. Preto použijeme prvočíselný rozklad.</p>"
      },
      {
        "id": "e-rule",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "NSD a NSN pomocou prvočíselného rozkladu",
        "html": "<p>Obe čísla rozložíme na prvočísla, napríklad 360 = 2³ · 3² · 5 a 84 = 2² · 3 · 7.</p><div class=\"compare\"><div class=\"good\"><span class=\"mini-label\">NSD</span><p>Vezmi iba prvočísla, ktoré sú v <strong>oboch</strong> rozkladoch, každé s <span class=\"hl\">menším</span> exponentom.</p></div><div class=\"good\"><span class=\"mini-label\">NSN</span><p>Vezmi <strong>všetky</strong> prvočísla z oboch rozkladov, každé s <span class=\"hl\">väčším</span> exponentom.</p></div></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD: 360 a 84</span><p>360 = 2³ · 3² · 5</p><p>84 = 2² · 3 · 7</p><p>NSD: spoločné sú 2 a 3. Menší exponent pri 2 je 2, pri 3 je 1. NSD = 2² · 3 = <strong>12</strong>.</p><p>NSN: prvočísla 2, 3, 5, 7. Väčšie exponenty: 2³, 3², 5, 7. NSN = 2³ · 3² · 5 · 7 = <strong>2 520</strong>.</p></div><p><strong>Kontrola:</strong> 360 : 12 = 30 a 84 : 12 = 7 vyšlo bez zvyšku. A 2 520 : 360 = 7, 2 520 : 84 = 30. Zároveň platí 12 · 2 520 = 360 · 84 = 30 240.</p>",
        "remember": "NSD: spoločné prvočísla, menšie exponenty. NSN: všetky prvočísla, väčšie exponenty."
      },
      {
        "id": "e-tree",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Rozklad stromčekom a porovnanie činiteľov",
        "html": "<p>Číslo rozkladáme <strong>stromčekom</strong>: rozpíšeme ho na súčin dvoch čísel a každé zložené číslo rozkladáme ďalej, kým nezostanú samé prvočísla.</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD: 72 a 96</span><p>72 = 8 · 9 = (2 · 4) · (3 · 3) = 2 · 2 · 2 · 3 · 3</p><p>96 = 4 · 24 = (2 · 2) · (4 · 6) = 2 · 2 · 2 · 2 · 2 · 3</p><p>Rozklady napíšeme pod seba a hľadáme <span class=\"hl\">spoločné činitele</span> (zakrúžkujeme ich v oboch riadkoch).</p><p>Spoločné činitele: 2 · 2 · 2 · 3, teda D(72, 96) = 2 · 2 · 2 · 3 = <strong>24</strong>.</p><p>NSN: spoločné činitele vezmeme raz a pridáme zvyšné činitele oboch čísel. Zostáva 3 z čísla 72 a 2 · 2 z čísla 96, teda n(72, 96) = 2 · 2 · 2 · 3 · 2 · 2 · 3 = <strong>288</strong>.</p></div><p><strong>Kontrola:</strong> 72 : 24 = 3, 96 : 24 = 4 a 288 : 72 = 4, 288 : 96 = 3.</p>",
        "remember": "D: čo majú rozklady spoločné. n: spoločné činitele raz a k nim všetko, čo zostalo."
      },
      {
        "id": "e-warn",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Čo sa najčastejšie pokazí",
        "html": "<div class=\"warning\"><strong>Pozor 1:</strong> Súčin čísel je vždy spoločný násobok, no <span class=\"hl\">nie vždy najmenší</span>. 4 · 6 = 24, ale n(4, 6) = 12.</div><div class=\"warning\"><strong>Pozor 2:</strong> Pri NSD sa berú iba <strong>spoločné</strong> prvočísla. Prvočíslo 5, ktoré je len v jednom rozklade, do NSD nepatrí.</div><div class=\"warning\"><strong>Pozor 3:</strong> Ak čísla nemajú spoločné prvočíslo, ich D je <strong>1</strong>. Takým číslam hovoríme <strong>nesúdeliteľné</strong>. Napríklad 15 = 3 · 5 a 28 = 2² · 7, takže D(15, 28) = 1 a n(15, 28) = 15 · 28 = 420. Podobne D(44, 125) = 1 (44 = 2² · 11, 125 = 5³) a D(99, 100) = 1 (99 = 3² · 11, 100 = 2² · 5²). Čísla pritom nemusia byť prvočísla: 99 ani 100 nie je prvočíslo, no nemajú spoločného deliteľa väčšieho ako 1.</div><p>Ak sú v rozklade mocniny, nezabudni ich porovnať: pri NSD vyber menší exponent, pri NSN väčší.</p>"
      },
      {
        "id": "n-gcd-24-36",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "NSD",
        "title": "NSD vypisovaním",
        "prompt": "Urč NSD – D(24, 36), teda najväčšie číslo, ktorým sú deliteľné 24 aj 36.",
        "validate": "exact",
        "answer": 12,
        "success": "Delitele 24: 1, 2, 3, 4, 6, 8, 12, 24. Delitele 36: 1, 2, 3, 4, 6, 9, 12, 18, 36. Najväčší spoločný je 12.",
        "hint": "Vypíš delitele oboch čísel a zakrúžkuj spoločné. Z nich vyber najväčší.",
        "reveal": "Správne je 12: 24 = 12 · 2 a 36 = 12 · 3."
      },
      {
        "id": "n-lcm-6-8",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "NSN",
        "title": "NSN vypisovaním",
        "prompt": "Urč NSN – n(6, 8), teda najmenšie číslo, ktoré je násobkom 6 aj 8.",
        "validate": "exact",
        "answer": 24,
        "success": "Násobky 6: 6, 12, 18, 24. Násobky 8: 8, 16, 24. Prvý spoločný je 24.",
        "hint": "Vypisuj násobky väčšieho čísla (8, 16, 24, …) a pri každom skús, či je deliteľné 6.",
        "reveal": "Správne je 24: 24 = 6 · 4 = 8 · 3 a menšie spoločné číslo neexistuje."
      },
      {
        "id": "s-common",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "spoločný deliteľ",
        "title": "Spoločný deliteľ čísel 24 a 36",
        "question": "Je dané číslo spoločným deliteľom čísel 24 aj 36? Rozhodni pre každé číslo.",
        "labels": [
          "Je spoločný deliteľ",
          "Nie je spoločný deliteľ"
        ],
        "items": [
          {
            "text": "1",
            "answer": true,
            "why": "1 delí 24 aj 36 (24 : 1 = 24, 36 : 1 = 36)."
          },
          {
            "text": "2",
            "answer": true,
            "why": "2 delí 24 aj 36 (24 : 2 = 12, 36 : 2 = 18)."
          },
          {
            "text": "3",
            "answer": true,
            "why": "3 delí 24 aj 36 (24 : 3 = 8, 36 : 3 = 12)."
          },
          {
            "text": "4",
            "answer": true,
            "why": "4 delí 24 aj 36 (24 : 4 = 6, 36 : 4 = 9)."
          },
          {
            "text": "6",
            "answer": true,
            "why": "6 delí 24 aj 36 (24 : 6 = 4, 36 : 6 = 6)."
          },
          {
            "text": "8",
            "answer": false,
            "why": "8 nedelí 36 bez zvyšku, preto to nie je spoločný deliteľ."
          },
          {
            "text": "9",
            "answer": false,
            "why": "9 nedelí 24 bez zvyšku, preto to nie je spoločný deliteľ."
          },
          {
            "text": "12",
            "answer": true,
            "why": "12 delí 24 aj 36 (24 : 12 = 2, 36 : 12 = 3)."
          }
        ]
      },
      {
        "id": "c-gcd-form",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "NSD z rozkladu",
        "question": "Čísla 24 a 90 majú prvočíselné rozklady 24 = 2³ · 3 a 90 = 2 · 3² · 5. Ktorý zápis je NSD – D(24, 90)?",
        "options": [
          "2³ · 3² · 5",
          "2 · 3",
          "2³ · 3"
        ],
        "answer": 1,
        "correct": "NSD berie spoločné prvočísla (2 a 3) s menšími exponentmi: 2¹ a 3¹. NSD = 2 · 3 = 6.",
        "hint": "Ktoré prvočísla sú v obidvoch rozkladoch? Pri každom z nich vyber menší exponent. Zápis 2³ · 3 je 24, a to nie je deliteľom čísla 90."
      },
      {
        "id": "c-lcm-form",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "NSN z rozkladu",
        "question": "Čísla 20 a 30 majú prvočíselné rozklady 20 = 2² · 5 a 30 = 2 · 3 · 5. Ktorý zápis je NSN – n(20, 30)?",
        "options": [
          "2 · 5",
          "2² · 3 · 5²",
          "2² · 3 · 5"
        ],
        "answer": 2,
        "correct": "NSN berie všetky prvočísla s väčšími exponentmi: 2², 3 a 5. NSN = 4 · 3 · 5 = 60.",
        "hint": "Zápis 2 · 5 = 10 je deliteľ oboch čísel, nie násobok. Zápis s 5² je násobkom, ale 5² ani v jednom rozklade nie je, takže nie je najmenší."
      },
      {
        "id": "n-gcd-48-60",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "NSD z rozkladu",
        "title": "NSD z rozkladu",
        "prompt": "Rozlož 48 a 60 na prvočísla (48 = 2⁴ · 3, 60 = 2² · 3 · 5) a urč NSD – D(48, 60).",
        "validate": "exact",
        "answer": 12,
        "success": "Spoločné sú 2 a 3. Menšie exponenty: 2² a 3. NSD = 4 · 3 = 12.",
        "hint": "Spoločné prvočísla sú 2 a 3. Pri 2 porovnaj exponenty 4 a 2.",
        "reveal": "Správne je 12: 2² · 3 = 12. Prvočíslo 5 je iba v 60, preto do NSD nepatrí."
      },
      {
        "id": "n-lcm-12-18",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "NSN z rozkladu",
        "title": "NSN z rozkladu",
        "prompt": "Rozlož 12 a 18 na prvočísla (12 = 2² · 3, 18 = 2 · 3²) a urč NSN – n(12, 18).",
        "validate": "exact",
        "answer": 36,
        "success": "Väčšie exponenty: 2² a 3². NSN = 4 · 9 = 36.",
        "hint": "Pri NSN berieš pri každom prvočísle väčší exponent: 2 aj 3.",
        "reveal": "Správne je 36: 2² · 3² = 4 · 9 = 36."
      },
      {
        "id": "n-gcd-84-126",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "NSD z rozkladu",
        "title": "NSD väčších čísel",
        "prompt": "Rozlož 84 a 126 na prvočísla a urč NSD – D(84, 126).",
        "validate": "exact",
        "answer": 42,
        "success": "84 = 2² · 3 · 7 a 126 = 2 · 3² · 7. Spoločné: 2, 3, 7 s menšími exponentmi. NSD = 2 · 3 · 7 = 42.",
        "hint": "Postupne delíš: 84 : 2 = 42, 42 : 2 = 21, 21 : 3 = 7. Potom rozlož 126 a porovnaj.",
        "reveal": "Správne je 42: 84 = 2² · 3 · 7, 126 = 2 · 3² · 7, spoločná časť 2 · 3 · 7 = 42."
      },
      {
        "id": "n-lcm-14-21",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "NSN z rozkladu",
        "title": "NSN a spoločné prvočíslo",
        "prompt": "Urč NSN – n(14, 21), kde 14 = 2 · 7 a 21 = 3 · 7.",
        "validate": "exact",
        "answer": 42,
        "success": "NSN berie 2, 3, 7 (7 iba raz, lebo v oboch má exponent 1). NSN = 2 · 3 · 7 = 42, nie 14 · 21.",
        "hint": "Prvočíslo 7 je v oboch rozkladoch. Do NSN ho dáš iba raz s väčším z exponentov.",
        "reveal": "Správne je 42: 2 · 3 · 7 = 42. Súčin 14 · 21 = 294 je spoločný násobok, ale nie najmenší."
      },
      {
        "id": "n-gcd-99-100",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "nesúdeliteľné čísla",
        "title": "Nesúdeliteľné čísla",
        "prompt": "Urč NSD – D(99, 100). Rozklady: 99 = 3² · 11 a 100 = 2² · 5².",
        "validate": "exact",
        "answer": 1,
        "success": "Rozklady nemajú spoločné prvočíslo, preto D(99, 100) = 1. Čísla sú nesúdeliteľné, hoci ani jedno nie je prvočíslo.",
        "hint": "Hľadaj prvočíslo, ktoré je v oboch rozkladoch. Je tam nejaké?",
        "reveal": "Správne je 1: spoločné prvočíslo neexistuje, jediný spoločný deliteľ je 1."
      },
      {
        "id": "m-gcd",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "NSD",
        "title": "Ktorá dvojica má aký NSD?",
        "labels": [
          "NSD = 1",
          "NSD = 3",
          "NSD = 6"
        ],
        "items": [
          {
            "text": "14 a 15",
            "answer": "NSD = 1"
          },
          {
            "text": "21 a 30",
            "answer": "NSD = 3"
          },
          {
            "text": "18 a 30",
            "answer": "NSD = 6"
          },
          {
            "text": "8 a 9",
            "answer": "NSD = 1"
          },
          {
            "text": "27 a 33",
            "answer": "NSD = 3"
          },
          {
            "text": "42 a 48",
            "answer": "NSD = 6"
          }
        ]
      },
      {
        "id": "e-three",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "D a n troch čísel",
        "html": "<p>Postup je rovnaký ako pri dvoch číslach. Pri <strong>D</strong> berieš prvočísla, ktoré sú vo <span class=\"hl\">všetkých troch</span> rozkladoch, a pri <strong>n</strong> všetky prvočísla s najväčším exponentom.</p><div class=\"example\"><span class=\"mini-label\">D(86, 129, 215)</span><p>86 = 2 · 43, 129 = 3 · 43, 215 = 5 · 43</p><p>Spoločné je iba 43, teda D(86, 129, 215) = <strong>43</strong>.</p><p>n(86, 129, 215) = 2 · 3 · 5 · 43 = <strong>1 290</strong>.</p></div><div class=\"example\"><span class=\"mini-label\">n(178, 356, 534)</span><p>178 = 2 · 89, 356 = 2² · 89, 534 = 2 · 3 · 89</p><p>Najväčšie exponenty: 2², 3, 89. n(178, 356, 534) = 4 · 3 · 89 = <strong>1 068</strong>.</p></div>"
      },
      {
        "id": "n-lcm3",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "NSN troch čísel",
        "title": "NSN troch čísel",
        "prompt": "Urč NSN – n(4, 6, 10). Rozklady: 4 = 2², 6 = 2 · 3, 10 = 2 · 5.",
        "validate": "exact",
        "answer": 60,
        "success": "Všetky prvočísla s najväčším exponentom: 2² (z 4), 3 (zo 6) a 5 (z 10). NSN = 4 · 3 · 5 = 60.",
        "hint": "Pravidlo platí aj pre tri čísla: vezmi všetky prvočísla a pri každom najväčší exponent z troch rozkladov.",
        "reveal": "Správne je 60: 2² · 3 · 5 = 60."
      },
      {
        "id": "n-gcd3",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "NSD troch čísel",
        "title": "NSD troch čísel",
        "prompt": "Urč NSD – D(18, 30, 42). Rozklady: 18 = 2 · 3², 30 = 2 · 3 · 5, 42 = 2 · 3 · 7.",
        "validate": "exact",
        "answer": 6,
        "success": "Spoločné prvočísla všetkých troch sú 2 a 3 s najmenšími exponentmi 1 a 1. NSD = 2 · 3 = 6.",
        "hint": "Do NSD patria len prvočísla, ktoré sú vo všetkých troch rozkladoch.",
        "reveal": "Správne je 6: 5 a 7 nie sú vo všetkých troch rozkladoch."
      },
      {
        "id": "n-gcd-90-115-320",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "NSD troch čísel",
        "title": "NSD troch čísel pomocou stromčeka",
        "prompt": "Urč NSD – D(90, 115, 320). Rozklady: 90 = 2 · 3² · 5, 115 = 5 · 23, 320 = 2⁶ · 5.",
        "validate": "exact",
        "answer": 5,
        "success": "V každom rozklade je len prvočíslo 5 (so spoločným exponentom 1). D(90, 115, 320) = 5.",
        "hint": "Ktoré prvočíslo je vo všetkých troch rozkladoch? Prvočíslo 2 nie je v rozklade čísla 115.",
        "reveal": "Správne je 5: 90 = 5 · 18, 115 = 5 · 23, 320 = 5 · 64."
      },
      {
        "id": "n-lcm-18-75-40",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "NSN troch čísel",
        "title": "NSN troch čísel pomocou stromčeka",
        "prompt": "Urč NSN – n(18, 75, 40). Rozklady: 18 = 2 · 3², 75 = 3 · 5², 40 = 2³ · 5.",
        "validate": "exact",
        "answer": 1800,
        "success": "Najväčšie exponenty: 2³ (z 40), 3² (z 18), 5² (zo 75). n(18, 75, 40) = 8 · 9 · 25 = 1 800.",
        "hint": "Pri každom prvočísle (2, 3, 5) vyber najväčší exponent zo všetkých troch rozkladov.",
        "reveal": "Správne je 1 800: 2³ · 3² · 5² = 8 · 9 · 25."
      },
      {
        "id": "e-word",
        "type": "explain",
        "phase": "PRENES",
        "title": "Slovné úlohy: obkladanie a cykly",
        "html": "<div class=\"example\"><span class=\"mini-label\">OBKLADANIE OBDĹŽNIKA</span><p>Obdĺžnik 3 960 cm × 825 cm chceme obložiť rovnakými <strong>čo najväčšími štvorcami</strong> bez rezania a bez medzier. Aká je strana štvorca a koľko štvorcov treba?</p><p>Strana štvorca musí deliť obe rozmery a má byť najväčšia, preto je to <strong>D</strong>.</p><p>3 960 = 2³ · 3² · 5 · 11 a 825 = 3 · 5² · 11, teda D(3 960, 825) = 3 · 5 · 11 = <strong>165 cm</strong>.</p><p>Počet štvorcov: 3 960 : 165 = 24 a 825 : 165 = 5, teda 24 · 5 = <strong>120 štvorcov</strong>.</p><p>Kontrola druhým spôsobom: obsah obdĺžnika 3 960 · 825 = 3 267 000 a obsah štvorca 165 · 165 = 27 225. Podiel 3 267 000 : 27 225 = 120.</p></div><div class=\"example\"><span class=\"mini-label\">CYKLY V ČASE</span><p>Štyri autobusové linky odchádzajú o 5:00 spolu. Potom každých 60, 40, 120 a 80 minút. Kedy odídu opäť všetky naraz?</p><p>60 = 2² · 3 · 5, 40 = 2³ · 5, 120 = 2³ · 3 · 5, 80 = 2⁴ · 5</p><p>Čakáme na spoločné stretnutie, preto hľadáme <strong>n</strong>: n(60, 40, 120, 80) = 2⁴ · 3 · 5 = <strong>240 min</strong> = 4 h.</p><p>Znova odídu spolu o <strong>9:00</strong>.</p></div><p>Rozhodni podľa otázky: ak <span class=\"hl\">delíš na rovnaké diely, čo najväčšie</span>, hľadáš D. Ak <span class=\"hl\">čakáš, kým sa udalosti zase stretnú</span>, hľadáš n.</p>",
        "remember": "Obkladanie štvorcami: strana = D, počet = (a : D) · (b : D). Cykly: n."
      },
      {
        "id": "c-tile-tool",
        "type": "choice",
        "phase": "PRENES",
        "skill": "výber postupu",
        "question": "Obdĺžnik 840 cm × 630 cm chceme celý pokryť rovnakými štvorcami bez rezania a bez medzier, štvorce majú byť čo najväčšie. Čo treba určiť, aby sme zistili stranu štvorca?",
        "options": [
          "D(840, 630): strana musí deliť oba rozmery a má byť najväčšia.",
          "n(840, 630): strana musí byť násobkom oboch rozmerov a má byť najmenšia.",
          "Súčin 840 · 630, lebo ten obsahuje oba rozmery."
        ],
        "answer": 0,
        "correct": "Strana štvorca musí deliť dĺžku aj šírku bez zvyšku, takže je to spoločný deliteľ, a čo najväčší, teda D(840, 630) = 210 cm.",
        "hint": "Štvorce sa musia na stranu obdĺžnika vojsť celé. Má strana štvorca deliť rozmer, alebo byť jeho násobkom?"
      },
      {
        "id": "n-tile-side",
        "type": "numberInput",
        "phase": "PRENES",
        "skill": "obkladanie: strana",
        "title": "Strana štvorca",
        "prompt": "Obdĺžnik 1 820 cm × 1 330 cm obkladáme čo najväčšími štvorcami bez rezania. Rozklady: 1 820 = 2² · 5 · 7 · 13 a 1 330 = 2 · 5 · 7 · 19. Aká je strana štvorca v cm?",
        "validate": "exact",
        "answer": 70,
        "success": "D(1 820, 1 330) = 2 · 5 · 7 = 70 cm. Kontrola: 1 820 : 70 = 26 a 1 330 : 70 = 19.",
        "hint": "Strana štvorca je NSD oboch rozmerov. Spoločné prvočísla sú 2, 5 a 7.",
        "reveal": "Správne je 70: 2 · 5 · 7 = 70."
      },
      {
        "id": "n-tile-count",
        "type": "numberInput",
        "phase": "PRENES",
        "skill": "obkladanie: počet",
        "title": "Počet štvorcov",
        "prompt": "Štvorce majú stranu 70 cm a obkladajú obdĺžnik 1 820 cm × 1 330 cm. Koľko štvorcov treba? Pomôž si: 1 820 : 70 a 1 330 : 70.",
        "validate": "exact",
        "answer": 494,
        "success": "1 820 : 70 = 26 štvorcov v rade a 1 330 : 70 = 19 radov. 26 · 19 = 494.",
        "hint": "Koľko štvorcov sa zmestí pozdĺž dlhšej strany a koľko pozdĺž kratšej? Čísla vynásob.",
        "reveal": "Správne je 494. Druhý spôsob: (1 820 · 1 330) : (70 · 70) = 2 420 600 : 4 900 = 494."
      },
      {
        "id": "n-cycle4",
        "type": "numberInput",
        "phase": "PRENES",
        "skill": "cyklické úlohy",
        "title": "Autobusy v cykle",
        "prompt": "Linky odchádzajú o 5:00 spolu a potom každých 30, 45 a 60 minút. Po koľkých minútach odídu prvýkrát opäť všetky naraz? (30 = 2 · 3 · 5, 45 = 3² · 5, 60 = 2² · 3 · 5)",
        "validate": "exact",
        "answer": 180,
        "success": "n(30, 45, 60) = 2² · 3² · 5 = 180 min, teda opäť o 8:00.",
        "hint": "Čakáš na spoločné stretnutie, preto je to NSN. Pri každom prvočísle vezmi najväčší exponent.",
        "reveal": "Správne je 180: 2² · 3² · 5 = 4 · 9 · 5."
      },
      {
        "id": "h-lcm",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak počítal NSN – n(4, 6) takto: „4 · 6 = 24, preto NSN je 24.“ V čom je chyba?",
        "options": [
          "Súčin je spoločný násobok, ale nie najmenší. 12 je násobkom 4 aj 6 a je menšie, preto n(4, 6) = 12.",
          "NSN sa vždy počíta odčítaním, 6 − 4 = 2.",
          "24 nie je násobok čísla 4."
        ],
        "answer": 0,
        "correct": "Presne. 24 je spoločný násobok, ale 12 je menší: 12 = 4 · 3 = 6 · 2.",
        "hint": "Skús vypísať násobky 4 aj 6. Je 24 naozaj prvý spoločný?"
      },
      {
        "id": "h-gcd",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak počítal NSD – D(36, 48) z rozkladov 36 = 2² · 3² a 48 = 2⁴ · 3 takto: „Vezmem väčšie exponenty, 2⁴ · 3² = 144.“ V čom je chyba?",
        "options": [
          "Chyba nie je, 144 je NSD.",
          "Pri NSD sa berú menšie exponenty (2² a 3), takže NSD = 2² · 3 = 12. Väčšie exponenty dávajú NSN.",
          "Treba brať iba prvočíslo 2 a prvočíslo 3 vynechať."
        ],
        "answer": 1,
        "correct": "Presne. 144 je n(36, 48), nie NSD. NSD = 12, a 36 : 12 = 3, 48 : 12 = 4.",
        "hint": "Skontroluj: je 144 deliteľom čísla 36? Deliteľ nemôže byť väčší ako samotné číslo."
      },
      {
        "id": "h-tile",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak obkladá obdĺžnik 150 cm × 90 cm čo najväčšími štvorcami. Počíta: „Strana štvorca je n(150, 90) = 450 cm.“ V čom je chyba?",
        "options": [
          "Chyba nie je, najväčší štvorec má stranu 450 cm.",
          "Treba odčítať rozmery: 150 − 90 = 60 cm.",
          "Strana štvorca musí deliť oba rozmery, takže treba D(150, 90) = 30 cm. Číslo 450 je väčšie ako rozmery obdĺžnika."
        ],
        "answer": 2,
        "correct": "Presne. Štvorec so stranou 450 cm sa do obdĺžnika s rozmerom 150 cm nezmestí. Strana je D(150, 90) = 30 cm a štvorcov je 5 · 3 = 15.",
        "hint": "Zmestí sa štvorec so stranou 450 cm do obdĺžnika, ktorého dlhšia strana má 150 cm?"
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha na papier",
        "html": "<p>Odlož zariadenie.</p><p>Pre čísla <strong>180</strong> a <strong>252</strong>:</p><ol><li>Rozlož obe čísla na súčin prvočísel (zapíš pomocou mocnín).</li><li>Pomocou rozkladov urč D(180, 252) a n(180, 252).</li><li>Skontroluj výsledok: vydeľ obe čísla NSD a over, že NSN je násobkom oboch čísel.</li></ol><p>Postup zapíš tak, ako by si ho písal/a do písomky.</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: NSD a NSN",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Riešenia píš do zošita. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Urč NSD a NSN čísel 8 a 12 vypisovaním deliteľov a násobkov.",
            "answer": "Delitele 8: 1, 2, 4, 8. Delitele 12: 1, 2, 3, 4, 6, 12. NSD = <strong>4</strong>.<br>Násobky 8: 8, 16, 24. Násobky 12: 12, 24. NSN = <strong>24</strong>."
          },
          {
            "level": "zaklad",
            "text": "Urč NSD a NSN čísel 15 a 25 pomocou rozkladu.",
            "answer": "15 = 3 · 5, 25 = 5²<br>NSD = 5<br>NSN = 3 · 5² = <strong>75</strong>"
          },
          {
            "level": "zaklad",
            "text": "Urč NSD a NSN čísel 9 a 16. Čo si všimol/a?",
            "answer": "9 = 3², 16 = 2⁴. Nemajú spoločné prvočíslo, preto NSD = <strong>1</strong>.<br>NSN = 9 · 16 = <strong>144</strong> (pre nesúdeliteľné čísla je to súčin)."
          },
          {
            "level": "zaklad",
            "text": "Skráť zlomok 84/126 pomocou NSD čitateľa a menovateľa.",
            "answer": "D(84, 126) = 42.<br>84 : 42 = 2 a 126 : 42 = 3, preto 84/126 = <strong>2/3</strong>."
          },
          {
            "level": "zaklad",
            "text": "Urč D(44, 125) a D(99, 100). Čo platí o takých číslach?",
            "answer": "44 = 2² · 11, 125 = 5³, nemajú spoločné prvočíslo, D(44, 125) = <strong>1</strong>.<br>99 = 3² · 11, 100 = 2² · 5², D(99, 100) = <strong>1</strong>.<br>Čísla sú nesúdeliteľné."
          },
          {
            "level": "rozsirenie",
            "text": "Rozlož čísla 72 a 120 a urč NSD aj NSN.",
            "answer": "72 = 2³ · 3², 120 = 2³ · 3 · 5<br>NSD = 2³ · 3 = <strong>24</strong><br>NSN = 2³ · 3² · 5 = <strong>360</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Rozlož čísla 54 a 90 a urč NSD aj NSN.",
            "answer": "54 = 2 · 3³, 90 = 2 · 3² · 5<br>NSD = 2 · 3² = <strong>18</strong><br>NSN = 2 · 3³ · 5 = <strong>270</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Urč NSD a NSN troch čísel 12, 18 a 30.",
            "answer": "12 = 2² · 3, 18 = 2 · 3², 30 = 2 · 3 · 5<br>NSD = 2 · 3 = <strong>6</strong><br>NSN = 2² · 3² · 5 = <strong>180</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Sčítaj zlomky 5/12 + 7/18 tak, že použiješ NSN menovateľov ako spoločný menovateľ.",
            "answer": "n(12, 18) = 36.<br>5/12 = 15/36, 7/18 = 14/36<br>15/36 + 14/36 = <strong>29/36</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Urč D(86, 129, 215) a n(86, 129, 215).",
            "answer": "86 = 2 · 43, 129 = 3 · 43, 215 = 5 · 43<br>D = <strong>43</strong><br>n = 2 · 3 · 5 · 43 = <strong>1 290</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Urč n(178, 356, 534).",
            "answer": "178 = 2 · 89, 356 = 2² · 89, 534 = 2 · 3 · 89<br>n = 2² · 3 · 89 = <strong>1 068</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Urč D(90, 115, 320) a n(18, 75, 40).",
            "answer": "90 = 2 · 3² · 5, 115 = 5 · 23, 320 = 2⁶ · 5, D = <strong>5</strong><br>18 = 2 · 3², 75 = 3 · 5², 40 = 2³ · 5, n = 2³ · 3² · 5² = <strong>1 800</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Obdĺžnik 840 cm × 630 cm chceme obložiť čo najväčšími rovnakými štvorcami. Aká je ich strana a koľko ich treba?",
            "answer": "840 = 2³ · 3 · 5 · 7, 630 = 2 · 3² · 5 · 7<br>D(840, 630) = 2 · 3 · 5 · 7 = <strong>210 cm</strong><br>840 : 210 = 4, 630 : 210 = 3, počet 4 · 3 = <strong>12 štvorcov</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Tri linky odchádzajú o 5:00 spolu, potom každých 30, 45 a 60 minút. Kedy odídu znova všetky naraz?",
            "answer": "n(30, 45, 60) = 2² · 3² · 5 = 180 min = 3 h<br>znova o <strong>8:00</strong>"
          },
          {
            "level": "bonus",
            "text": "Čísla a, b majú D(a, b) = 6 a n(a, b) = 72. Ak a = 18, aké je b?",
            "answer": "Pre dve čísla platí NSD · NSN = a · b, teda 6 · 72 = 18 · b, b = 432 : 18 = <strong>24</strong>.<br>Kontrola: D(18, 24) = 6 a n(18, 24) = 72."
          },
          {
            "level": "bonus",
            "text": "Nájdi najmenšie prirodzené číslo väčšie ako 1, ktoré dáva po delení 4, 6 aj 9 zvyšok 1.",
            "answer": "Číslo mínus 1 je násobok 4, 6 aj 9. n(4, 6, 9) = 36, preto číslo je 36 + 1 = <strong>37</strong>.<br>Kontrola: 37 = 4 · 9 + 1 = 6 · 6 + 1 = 9 · 4 + 1."
          },
          {
            "level": "bonus",
            "text": "Obdĺžnik 3 960 cm × 825 cm obkladáme čo najväčšími štvorcami. Urč stranu a počet štvorcov dvoma spôsobmi: ako (a : D) · (b : D) a ako obsah : obsah.",
            "answer": "3 960 = 2³ · 3² · 5 · 11, 825 = 3 · 5² · 11, D = 3 · 5 · 11 = <strong>165 cm</strong><br>(3 960 : 165) · (825 : 165) = 24 · 5 = <strong>120</strong><br>3 267 000 : 27 225 = 120"
          },
          {
            "level": "bonus",
            "text": "Autobusové linky odchádzajú od 5:00 (vtedy všetky naraz) každých 60, 40, 120 a 80 minút, posledný spoj je o 22:00. O koľkej ešte odídu všetky naraz?",
            "answer": "n(60, 40, 120, 80) = 2⁴ · 3 · 5 = 240 min = 4 h<br>o 9:00, 13:00, 17:00 a 21:00"
          },
          {
            "level": "bonus",
            "text": "Urč n(15, 105, 891). V rozklade čísla 891 si dávaj pozor: 891 = 9 · 99.",
            "answer": "15 = 3 · 5, 105 = 3 · 5 · 7, 891 = 3⁴ · 11<br>n = 3⁴ · 5 · 7 · 11 = <strong>31 185</strong><br>Kontrola: 31 185 : 105 = 297."
          }
        ]
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "NSD alebo NSN",
        "prompt": "Vysvetli jednou až dvoma vetami, ako sa líši postup pri hľadaní NSD a NSN z prvočíselných rozkladov.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Pri NSD berieme iba prvočísla, ktoré sú v oboch rozkladoch, a to s menším exponentom. Pri NSN berieme všetky prvočísla z oboch rozkladov s väčším exponentom.",
        "placeholder": "Pri NSD berieme..., pri NSN berieme..."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "rozdiel medzi NSD a NSN",
          "NSD z prvočíselného rozkladu",
          "NSN z prvočíselného rozkladu",
          "kontrola výsledku",
          "zápis D(m, n), n(m, n)",
          "slovné úlohy s obkladaním a cyklami"
        ],
        "prompt": "Označ, ako dobre to zvládaš. Nie je to známka. Na ďalšej hodine budeš D a n používať v ďalších slovných úlohách."
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 5,
        "text": "Vypíš všetky delitele čísel 20 a 30 a urč D(20, 30).",
        "answer": "Delitele 20: 1, 2, 4, 5, 10, 20. Delitele 30: 1, 2, 3, 5, 6, 10, 15, 30. NSD = 10."
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 5,
        "text": "Urč n(15, 20) vypisovaním násobkov.",
        "answer": "Násobky 15: 15, 30, 45, 60. Násobky 20: 20, 40, 60. NSN = 60."
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 5,
        "text": "Urč D(35, 42) a n(35, 42).",
        "answer": "35 = 5 · 7, 42 = 2 · 3 · 7. NSD = 7, NSN = 2 · 3 · 5 · 7 = 210."
      },
      {
        "id": "w3b",
        "level": "zaklad",
        "space": 4,
        "text": "Urč D(35, 64) a n(35, 64). Čo platí o týchto číslach?",
        "answer": "35 = 5 · 7, 64 = 2⁶. Spoločné prvočíslo nie je, D = 1 (nesúdeliteľné čísla), n = 35 · 64 = 2 240."
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 6,
        "text": "Rozlož čísla 150 a 90 a urč NSD aj NSN.",
        "answer": "150 = 2 · 3 · 5², 90 = 2 · 3² · 5<br>NSD = 2 · 3 · 5 = 30<br>NSN = 2 · 3² · 5² = 450"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 6,
        "text": "Rozlož čísla 60 a 45 a urč NSD aj NSN.",
        "answer": "60 = 2² · 3 · 5, 45 = 3² · 5<br>NSD = 3 · 5 = 15<br>NSN = 2² · 3² · 5 = 180"
      },
      {
        "id": "w6",
        "level": "rozsirenie",
        "space": 6,
        "text": "Urč NSD a NSN čísel 40 a 56.",
        "answer": "40 = 2³ · 5, 56 = 2³ · 7<br>NSD = 2³ = 8<br>NSN = 2³ · 5 · 7 = 280"
      },
      {
        "id": "w6b",
        "level": "rozsirenie",
        "space": 6,
        "text": "Obdĺžnik 600 cm × 420 cm obkladáme čo najväčšími rovnakými štvorcami. Urč stranu štvorca a ich počet.",
        "answer": "600 = 2³ · 3 · 5², 420 = 2² · 3 · 5 · 7<br>D = 2² · 3 · 5 = 60 cm<br>600 : 60 = 10, 420 : 60 = 7, počet 70 štvorcov"
      },
      {
        "id": "w6c",
        "level": "rozsirenie",
        "space": 5,
        "text": "Linky idú každých 12, 15 a 20 minút a práve odišli spolu. Po koľkých minútach odídu opäť spolu?",
        "answer": "n(12, 15, 20) = 2² · 3 · 5 = 60 minút"
      },
      {
        "id": "w7",
        "level": "bonus",
        "space": 6,
        "text": "Zdôvodni, prečo D(a, b) vždy delí n(a, b). Over to na dvojici 30 a 36.",
        "answer": "NSD delí a a a delí NSN, takže NSD delí NSN. Pre 30 a 36: NSD = 6, NSN = 180 a 180 : 6 = 30."
      }
    ]
  }
});
