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
      "priradiť definíciu k pojmu NSD a NSN a zapísať ich ako D(m, n) a n(m, n)",
      "určiť NSD a NSN dvoch čísel pomocou prvočíselného rozkladu (aj vypisovaním deliteľov a násobkov)",
      "vypísať spoločných deliteľov dvoch čísel a rozpoznať nesúdeliteľné čísla (D = 1)",
      "určiť NSN troch čísel (bonusová úloha písomky)"
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
      "3 min: definícia NSD a NSN, postup cez prvočíselný rozklad, príklad",
      "8–10 min: úlohy v aplikácii (pojmy, spoloční delitelia, NSD a NSN z rozkladu, nesúdeliteľné čísla, NSN troch čísel, hľadanie chyby)",
      "8–10 min: úloha na papieri (BEZ MOBILU) a zbierka podľa úrovne",
      "3 min: spoločný rozbor chýb podľa živých výsledkov, krátka reflexia"
    ],
    "diagnostics": [
      "žiak nezamieňa NSD (najmenšie exponenty, len spoločné prvočísla) a NSN (najväčšie exponenty, všetky prvočísla)",
      "žiak vie rozložiť obe čísla správne a nezabúda na mocniny",
      "žiak vie, že NSD nesúdeliteľných čísel je 1 a že súčin čísel je spoločný násobok, ale nie vždy najmenší",
      "žiak vie pri jednoduchej slovnej úlohe povedať, či hľadá NSD alebo NSN"
    ],
    "partialUse": [
      "Modul je zámerne skrátený a zameraný na obsah písomky (pojmy NSD a NSN, výpočet z rozkladu, nesúdeliteľné čísla, NSN troch čísel); slovné úlohy sú v module 30, obkladanie a rozšírenia sú vynechané.",
      "Mobil nenahrádza prvočíselný rozklad v zošite ani zápis postupu."
    ]
  },
  "student": {
    "title": "NSD a NSN pomocou prvočíselného rozkladu",
    "subtitle": "Téma 29 · Čísla, premenné, výrazy",
    "intro": "Naučíš sa nájsť najväčší spoločný deliteľ (NSD, D) a najmenší spoločný násobok (NSN, n) dvoch čísel pomocou prvočíselného rozkladu. Je to jadro písomky. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "20–25 min",
    "activities": [
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "určiť spoločných deliteľov dvoch čísel",
          "nájsť NSD a NSN pomocou prvočíselného rozkladu",
          "nezamieňať NSD a NSN",
          "rozpoznať nesúdeliteľné čísla (D = 1)"
        ]
      },
      {
        "id": "e-rule",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "NSD a NSN: definícia a výpočet z rozkladu",
        "html": "<div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">NSD – najväčší spoločný deliteľ, zápis D(m, n)</div><p class=\"term-rule\">Najväčšie číslo, ktorým sú deliteľné obe čísla.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">NSN – najmenší spoločný násobok, zápis n(m, n)</div><p class=\"term-rule\">Najmenšie kladné číslo, ktoré je násobkom oboch čísel.</p></div></div><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Spoločný deliteľ, spoločný násobok</div><p class=\"term-rule\">Spoločný deliteľ čísel m, n je číslo, ktoré delí obe. Spoločný násobok je číslo, ktoré je násobkom oboch. Napríklad spoloční delitelia 24 a 36 sú 1, 2, 3, 4, 6, 12.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Nesúdeliteľné čísla</div><p class=\"term-rule\">Čísla, ktorých jediný spoločný deliteľ je 1, teda D(m, n) = 1. Napríklad 14 a 15 áno, 14 a 21 nie (spoločný deliteľ 7).</p></div></div><p>Obe čísla rozložíme na prvočísla a porovnáme exponenty.</p><div class=\"compare\"><div class=\"good\"><span class=\"mini-label\">NSD</span><p>Len prvočísla, ktoré sú v <strong>oboch</strong> rozkladoch, každé s <span class=\"hl\">menším</span> exponentom.</p></div><div class=\"good\"><span class=\"mini-label\">NSN</span><p><strong>Všetky</strong> prvočísla z oboch rozkladov, každé s <span class=\"hl\">väčším</span> exponentom.</p></div></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD: 90 a 150</span><p>90 = 2 · 3² · 5 a 150 = 2 · 3 · 5²</p><p>NSD = 2 · 3 · 5 = <strong>30</strong></p><p>NSN = 2 · 3² · 5² = <strong>450</strong></p><p>Kontrola: 90 : 30 = 3, 150 : 30 = 5 a 450 : 90 = 5, 450 : 150 = 3.</p></div><div class=\"warning\"><strong>Pozor:</strong> Súčin čísel je spoločný násobok, no nie vždy najmenší: 4 · 6 = 24, ale n(4, 6) = 12. Ak nemajú čísla spoločné prvočíslo, je D = 1.</div>",
        "remember": "NSD: spoločné prvočísla, menšie exponenty. NSN: všetky prvočísla, väčšie exponenty."
      },
      {
        "id": "m-defs",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "pojmy a definície",
        "title": "Pojem a definícia",
        "labels": [
          "najväčšie číslo, ktorým sú deliteľné obe dané čísla",
          "najmenšie kladné číslo, ktoré je násobkom oboch daných čísel",
          "zvyšok po delení dvoch prirodzených čísel"
        ],
        "items": [
          {
            "text": "NSD (najväčší spoločný deliteľ)",
            "answer": "najväčšie číslo, ktorým sú deliteľné obe dané čísla"
          },
          {
            "text": "NSN (najmenší spoločný násobok)",
            "answer": "najmenšie kladné číslo, ktoré je násobkom oboch daných čísel"
          }
        ]
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
            "level": "rozsirenie",
            "text": "Rozlož čísla 72 a 120 a urč NSD aj NSN.",
            "answer": "72 = 2³ · 3², 120 = 2³ · 3 · 5<br>NSD = 2³ · 3 = <strong>24</strong><br>NSN = 2³ · 3² · 5 = <strong>360</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Urč NSD a NSN troch čísel 12, 18 a 30.",
            "answer": "12 = 2² · 3, 18 = 2 · 3², 30 = 2 · 3 · 5<br>NSD = 2 · 3 = <strong>6</strong><br>NSN = 2² · 3² · 5 = <strong>180</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Tri linky odchádzajú o 5:00 spolu, potom každých 30, 45 a 60 minút. Kedy odídu znova všetky naraz?",
            "answer": "n(30, 45, 60) = 2² · 3² · 5 = 180 min = 3 h<br>znova o <strong>8:00</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Obdĺžnik 840 cm × 630 cm chceme obložiť čo najväčšími rovnakými štvorcami. Aká je ich strana a koľko ich treba?",
            "answer": "840 = 2³ · 3 · 5 · 7, 630 = 2 · 3² · 5 · 7<br>D(840, 630) = 2 · 3 · 5 · 7 = <strong>210 cm</strong><br>840 : 210 = 4, 630 : 210 = 3, počet 4 · 3 = <strong>12 štvorcov</strong>"
          },
          {
            "level": "bonus",
            "text": "Nájdi najmenšie prirodzené číslo väčšie ako 1, ktoré dáva po delení 4, 6 aj 9 zvyšok 1.",
            "answer": "Číslo mínus 1 je násobok 4, 6 aj 9. n(4, 6, 9) = 36, preto číslo je 36 + 1 = <strong>37</strong>.<br>Kontrola: 37 = 4 · 9 + 1 = 6 · 6 + 1 = 9 · 4 + 1."
          }
        ]
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "pojmy NSD a NSN",
          "rozdiel medzi NSD a NSN",
          "NSD z prvočíselného rozkladu",
          "NSN z prvočíselného rozkladu",
          "NSN troch čísel"
        ],
        "prompt": "Označ, ako dobre to zvládaš. Nie je to známka. Slovné úlohy s NSD a NSN si precvičíš na ďalšej hodine."
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
