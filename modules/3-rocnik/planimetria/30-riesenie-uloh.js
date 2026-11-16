MathPlatform.registerModule({
  "id": "3-u02-h030",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 30 · Riešenie úloh",
    "prerequisites": [
      "ZŠ: obvod a obsah obdĺžnika, štvorca a trojuholníka; jednotky dĺžky a obsahu",
      "2. ročník: Pytagorova veta (výpočet ramena a výšky v pravouhlom trojuholníku)",
      "1. ročník: algebraické úpravy, vyjadrenie neznámej zo vzorca",
      "učivo hodín 22–29: trojuholník, štvoruholníky, obvod a obsah trojuholníka, štvorca, obdĺžnika a lichobežníka"
    ],
    "planContent": [
      "Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka."
    ],
    "planPerformance": [
      "Poznať a vedieť opísať vlastnosti základných rovinných útvarov.",
      "Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov."
    ],
    "goals": [
      "zo zadania vybrať správny útvar a vzorec (obdĺžnik, štvorec, trojuholník, lichobežník) a rozlíšiť obvod a obsah",
      "vypočítať obsah a obvod zloženého útvaru (obdĺžnik + lichobežník, štvorec + trojuholník), pritom nepočítať vnútornú spoločnú stranu do obvodu",
      "dopočítať rameno alebo výšku rovnoramenného a pravouhlého lichobežníka Pytagorovou vetou",
      "vyriešiť praktickú úlohu (cena plota, počet dlaždíc, množstvo semena) a zapísať odpoveď vetou s jednotkou",
      "modul je zameraný na obsah písomky: priradenie vzorca k útvaru, pravda/nepravda, viackrokový výpočet, slovná úloha s jednotkami (skrátená verzia, bez odbočiek)"
    ],
    "competencies": [
      "modelovanie praktickej situácie nákresom",
      "výber vhodného vzťahu a postupu z viacerých možných",
      "presný zápis a práca s jednotkami",
      "argumentácia a odhaľovanie chýb v cudzom riešení"
    ],
    "enrichment": [
      "rozšírenie: zložený útvar s lichobežníkom, viackrokové úlohy s cenou a dlaždicami",
      "bonus: lichobežník vzniknutý odrezaním trojuholníka z obdĺžnika (dve cesty k obsahu), lichobežník s Pytagorovou trojicou 8, 15, 17",
      "maturitný formát: viackrokové slovné úlohy s odpoveďou vetou; autentické maturitné zadania až po prebratí celej planimetrie"
    ],
    "flow": [
      "0–3 min: opakovanie vzorcov pre štyri útvary",
      "3–10 min: postup výberu vzorca a príklad s lichobežníkovým pozemkom (obvod, obsah, cena)",
      "10–20 min: platforma: číselné výpočty, voľba, priraďovanie, pravda/nepravda, jedna chyba v riešení",
      "20–35 min: úloha BEZ MOBILU a zbierka podľa úrovní (základ, rozšírenie, bonus)",
      "35–45 min: spoločný rozbor najčastejších chýb podľa živých výsledkov; modul je zameraný na obsah písomky"
    ],
    "diagnostics": [
      "zamieňa obvod a obsah alebo píše nesprávnu jednotku",
      "dosádza rameno namiesto výšky v lichobežníku alebo trojuholníku",
      "do obvodu zloženého útvaru započíta aj vnútornú spoločnú stranu",
      "pri Pytagorovej vete zamieňa preponu a odvesnu alebo si zamení úsek (a − c) : 2 s výškou"
    ],
    "partialUse": [
      "pri nedostatku času vynechať bonusové položky zbierky",
      "mobil nahrádza výpočet iba pri kontrole; náčrt a výpočet ostávajú v zošite",
      "pri ŠVVP ponechať postup viditeľný a znížiť počet položiek zbierky"
    ]
  },
  "student": {
    "title": "Riešenie úloh",
    "subtitle": "Hodina 30 · Planimetria · Zmiešané úlohy vrátane lichobežníka",
    "intro": "Dnes spojíš všetko: obdĺžnik, štvorec, trojuholník aj lichobežník. Zistíš, ako zo zadania vybrať správny útvar a vzorec, a vyriešiš praktické úlohy s plotmi, dlaždicami a zloženými útvarmi. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "20–25 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme: prehľad vzorcov",
        "html": "<p>Zo ZŠ a z hodín 23 až 29 poznáš pre štyri útvary tieto vzorce:</p><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Obdĺžnik a, b</div><p class=\"term-rule\">o = 2 · (a + b) &nbsp;·&nbsp; S = a · b</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Štvorec a</div><p class=\"term-rule\">o = 4 · a &nbsp;·&nbsp; S = a · a</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Trojuholník so stranou a a výškou v</div><p class=\"term-rule\">o = a + b + c &nbsp;·&nbsp; S = <span class=\"frac\"><span class=\"frac-num\">a · v</span><span class=\"frac-den\">2</span></span></p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Lichobežník so základňami a, c, ramenami b, d, výškou v</div><p class=\"term-rule\">o = a + b + c + d &nbsp;·&nbsp; S = <span class=\"frac\"><span class=\"frac-num\">(a + c) · v</span><span class=\"frac-den\">2</span></span></p></div></div><p>Okrem toho vieš <strong>Pytagorovu vetu</strong> (x² + y² = z², kde z je prepona) a že 1 m² = 10 000 cm². Dnes ich budeš kombinovať v slovných úlohách.</p><div class=\"warning\"><strong>Pozor:</strong> V obsahu trojuholníka aj lichobežníka je vždy <strong>výška</strong> (kolmá), nikdy rameno (šikmá strana).</div>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "vybrať správny útvar a vzorec zo zadania",
          "vypočítať obsah a obvod zloženého útvaru",
          "dopočítať rameno alebo výšku lichobežníka",
          "vyriešiť praktickú úlohu s cenou alebo počtom kusov"
        ]
      },
      {
        "id": "postup",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Ako vyberieš správny postup",
        "html": "<ol class=\"steps\"><li>Zisti, <strong>čo sa pýta</strong>: okraj (plot, lišta, zábradlie) = obvod, plocha (podlaha, farba, trávnik, dlažba) = obsah.</li><li>Nakresli <strong>náčrt</strong> a označ rozmery. Ak je útvar zložený, rozlož ho na obdĺžniky, trojuholníky, lichobežníky.</li><li>Ak chýba <strong>výška</strong> alebo <strong>rameno</strong>, dopočítaj ich Pytagorovou vetou z pravouhlého trojuholníka v obrázku.</li><li>Dosaď do vzorca <strong>aj s jednotkami</strong> a vypočítaj. Pri obvode zložených útvarov sčítaj len strany po <span class=\"hl\">vonkajšej hranici</span>.</li><li>Ak úloha pýta cenu alebo počet kusov, vynásob alebo vydeľ jednotkovou hodnotou. Skontroluj jednotky a napíš <strong>odpoveď vetou</strong>.</li></ol><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Plot, lišta, rám, obrubník, zábradlie</div><p class=\"term-rule\">obvod (m, cm)</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Podlaha, farba, trávnik, dlaždice, plachta</div><p class=\"term-rule\">obsah (m², cm²)</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Počet dlaždíc</div><p class=\"term-rule\">obsah podlahy : obsah dlaždice (v rovnakých jednotkách)</p></div></div>",
        "remember": "Najprv útvar a veličina (obvod/obsah), potom vzorec, potom Pytagorova veta pre chýbajúce strany."
      },
      {
        "id": "exA",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Príklad: lichobežníkový pozemok",
        "html": "<p>Pozemok má tvar rovnoramenného lichobežníka. Základne majú 30 m a 20 m, výška je 12 m. Okolo pozemku sa postaví plot, meter plota stojí 8 €. Aký je obsah pozemku a koľko stojí plot?</p><div class=\"logic-visual\"><svg viewBox=\"0 0 690 258\" role=\"img\" aria-label=\"Rovnoramenný lichobežníkový pozemok so základňami 30 m a 20 m a výškou 12 m; úseky po 5 m\"><g font-family=\"system-ui\" font-size=\"16\" text-anchor=\"middle\" fill=\"currentColor\"><polygon points=\"120,212 540,212 470,44 190,44\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><line x1=\"190\" y1=\"44\" x2=\"190\" y2=\"212\" stroke=\"#9b6b2f\" stroke-width=\"2.5\" stroke-dasharray=\"7 5\"/><path d=\"M200,212 L200,202 L190,202\" fill=\"none\" stroke=\"#9b6b2f\" stroke-width=\"2\"/><text x=\"198\" y=\"133\" text-anchor=\"start\" font-size=\"16\">v = 12 m</text><text x=\"155\" y=\"205\" text-anchor=\"middle\" font-size=\"14\">5 m</text><line x1=\"470\" y1=\"44\" x2=\"470\" y2=\"212\" stroke=\"#9b6b2f\" stroke-width=\"2.5\" stroke-dasharray=\"7 5\"/><path d=\"M460,212 L460,202 L470,202\" fill=\"none\" stroke=\"#9b6b2f\" stroke-width=\"2\"/><text x=\"505\" y=\"205\" text-anchor=\"middle\" font-size=\"14\">5 m</text><text x=\"330\" y=\"238\" text-anchor=\"middle\" font-size=\"16\">a = 30 m</text><text x=\"330\" y=\"32\" text-anchor=\"middle\" font-size=\"16\">c = 20 m</text><text x=\"145\" y=\"133\" text-anchor=\"end\" font-size=\"16\">d = b</text><text x=\"515\" y=\"133\" text-anchor=\"start\" font-size=\"16\">b = ?</text></g></svg></div><div class=\"example\"><span class=\"mini-label\">RIEŠENIE</span><p>Obsah: S = (30 + 20) · 12 : 2 = 50 · 6 = <strong>300 m²</strong></p><p>Rameno nepoznáme. Úsek na základni: (30 − 20) : 2 = 5 m</p><p>b² = 5² + 12² = 25 + 144 = 169, b = <strong>13 m</strong> (prepona)</p><p>Obvod (dĺžka plota): o = 30 + 20 + 13 + 13 = <strong>76 m</strong></p><p>Cena: 76 · 8 = <strong>608 €</strong></p><p>Odpoveď: Pozemok má obsah 300 m² a plot bude stáť 608 €.</p></div><div class=\"warning\"><strong>Pozor:</strong> Na plot treba <strong>obvod</strong> (76 m), nie obsah. A do obvodu patrí rameno 13 m, nie výška 12 m.</div>"
      },
      {
        "id": "n1",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "praktická úloha",
        "title": "Cena plota",
        "prompt": "Pozemok je rovnoramenný lichobežník so základňami 18 m a 8 m a výškou 12 m. Okolo celého pozemku sa postaví plot, meter plota stojí 6 €. Koľko eur stojí plot? (Rameno najprv dopočítaj Pytagorovou vetou.)",
        "validate": "exact",
        "answer": 312,
        "success": "Správne: úsek (18 − 8) : 2 = 5 m, rameno 13 m, o = 18 + 8 + 13 + 13 = 52 m a 52 · 6 = 312 €.",
        "hint": "Úsek na základni je (18 − 8) : 2. Rameno je prepona trojuholníka s odvesnami 5 m a 12 m. Potom spočítaj obvod a vynásob cenou za meter.",
        "reveal": "Správne je 312: rameno 13 m, obvod 52 m, 52 · 6 = 312 €."
      },
      {
        "id": "n2",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "dlaždice a jednotky",
        "title": "Dlaždice na terase",
        "prompt": "Terasa má tvar lichobežníka so základňami 9 m a 5 m a výškou 4 m. Jedna dlaždica má obsah 0,5 m². Koľko dlaždíc treba na pokrytie terasy (bez zvyškov)?",
        "validate": "exact",
        "answer": 56,
        "success": "Správne: S = (9 + 5) · 4 : 2 = 28 m² a 28 : 0,5 = 56 dlaždíc.",
        "hint": "Najprv vypočítaj obsah lichobežníka, potom ho vydeľ obsahom jednej dlaždice.",
        "reveal": "Správne je 56: S = 28 m², 28 : 0,5 = 56."
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "zložený útvar",
        "question": "Útvar je zložený zo štvorca so stranou 6 cm a trojuholníka, ktorý stojí na jednej strane štvorca: základňa trojuholníka je 6 cm a jeho výška je 4 cm. Aký je obsah celého útvaru?",
        "options": [
          "60 cm²",
          "40 cm²",
          "48 cm²",
          "30 cm²"
        ],
        "answer": 2,
        "correct": "Správne: S = 6 · 6 + 6 · 4 : 2 = 36 + 12 = 48 cm². Trojuholník má polovičný obsah oproti obdĺžniku 6 · 4.",
        "hint": "Spočítaj obsah štvorca a obsah trojuholníka zvlášť. Pri trojuholníku nezabudni na ½."
      },
      {
        "id": "m1",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "výber vzorca",
        "title": "Ktorý vzorec pre obsah patrí ku ktorej situácii?",
        "labels": [
          "S = a · b",
          "S = a · a",
          "S = a · v : 2",
          "S = (a + c) · v : 2"
        ],
        "items": [
          {
            "text": "podlaha obdĺžnikovej izby 5 m × 4 m",
            "answer": "S = a · b"
          },
          {
            "text": "štvorcová dlaždica so stranou 40 cm",
            "answer": "S = a · a"
          },
          {
            "text": "trojuholníková plachta so základňou 6 m a výškou 4 m",
            "answer": "S = a · v : 2"
          },
          {
            "text": "pozemok s dvoma rovnobežnými stranami 20 m a 12 m a výškou 9 m",
            "answer": "S = (a + c) · v : 2"
          },
          {
            "text": "obdĺžnikové okno 1,2 m × 0,9 m",
            "answer": "S = a · b"
          },
          {
            "text": "štít domu: základňa 8 m, výška 3 m",
            "answer": "S = a · v : 2"
          }
        ]
      },
      {
        "id": "s1",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "vlastnosti a vzťahy",
        "title": "Pravda, alebo nepravda?",
        "question": "Rozhodni, či je tvrdenie pravdivé.",
        "labels": [
          "Pravda",
          "Nepravda"
        ],
        "items": [
          {
            "text": "Ak zdvojnásobíme výšku lichobežníka (základne ostanú), jeho obsah sa zdvojnásobí.",
            "answer": true,
            "why": "Výška je jednou z činiteľov v S = (a + c) · v : 2."
          },
          {
            "text": "Obvod lichobežníka je (a + c) · v : 2.",
            "answer": false,
            "why": "To je vzorec pre obsah. Obvod je súčet všetkých štyroch strán."
          },
          {
            "text": "V pravouhlom lichobežníku je kolmé rameno zároveň výškou.",
            "answer": true,
            "why": "Kolmé rameno je kolmé na obe základne."
          },
          {
            "text": "Rovnoramenný lichobežník so základňami 10 cm a 4 cm a ramenom 5 cm má výšku 5 cm.",
            "answer": false,
            "why": "Úsek je 3 cm a v² = 25 − 9 = 16, takže v = 4 cm. Výška a rameno sa nerovnajú."
          },
          {
            "text": "Z obdĺžnika sme v rohu vyrezali menší obdĺžnik. Obvod útvaru sa tým zmenšil.",
            "answer": false,
            "why": "Nová hranica vyrezaného rohu má dokopy rovnakú dĺžku ako odstránená časť pôvodnej hranice, takže obvod ostáva rovnaký. Zmenší sa obsah."
          },
          {
            "text": "Na 1 m² sa zmestí 25 dlaždíc s rozmermi 20 cm × 20 cm.",
            "answer": true,
            "why": "1 m² = 10 000 cm² a 10 000 : 400 = 25."
          }
        ]
      },
      {
        "id": "ce1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "chyby v riešení",
        "question": "Podlaha haly sa skladá z obdĺžnika 12 m × 8 m a pripojeného lichobežníka s ramenami 5 m, 5 m a základňami 8 m (spoločná s obdĺžnikom) a 2 m. Žiak vypočítal obvod: o = 2 · (12 + 8) + (8 + 2 + 5 + 5) = 60 m. Čo je chybné?",
        "options": [
          "Mal do obvodu pripočítať aj výšku lichobežníka 4 m, lebo je to rozmer útvaru.",
          "Zarátal aj spoločnú stranu 8 m, ktorá je vo vnútri útvaru. Správne je 44 m.",
          "Mal obsah obdĺžnika vynásobiť dvoma a pripočítať obvod lichobežníka.",
          "Mal vynechať obe ramená lichobežníka, lebo sú šikmé a do obvodu nepatria."
        ],
        "answer": 1,
        "correct": "Správne: obvod vedie len po vonkajšej hranici: 12 + 8 + 12 + 5 + 2 + 5 = 44 m.",
        "hint": "Predstav si, že chodíš po vonkajšom okraji podlahy. Prejdeš aj stranu, ktorou sa útvary dotýkajú?"
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Terasa na papier",
        "html": "<p>Odlož zariadenie. Do zošita vyrieš túto úlohu:</p><p><strong>Terasa má tvar pravouhlého lichobežníka. Základne majú 12 m a 7 m a kolmé rameno má 12 m. Nakresli náčrt a vypočítaj:</strong></p><ol><li>dĺžku druhého (šikmého) ramena Pytagorovou vetou,</li><li>dĺžku zábradlia okolo celej terasy (obvod),</li><li>obsah terasy a počet dlaždíc s rozmermi 50 cm × 50 cm, ktoré na ňu treba (bez zvyškov).</li></ol><p>Odpoveď napíš vetou a nezabudni na jednotky.</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: zmiešané úlohy",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Rieš v zošite: náčrt, výber vzorca, dosadenie s jednotkami, odpoveď vetou. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Pozemok má tvar obdĺžnika 25 m × 16 m. Vypočítaj dĺžku plota okolo pozemku a obsah pozemku.",
            "answer": "o = 2 · (25 + 16) = <strong>82 m</strong><br>S = 25 · 16 = <strong>400 m²</strong>"
          },
          {
            "level": "zaklad",
            "text": "Trojuholníková plachta má základňu 10 m a výšku 6 m. Aký je jej obsah?",
            "answer": "S = 10 · 6 : 2 = <strong>30 m²</strong>"
          },
          {
            "level": "zaklad",
            "text": "Lichobežník má základne 16 cm a 8 cm a výšku 5 cm. Vypočítaj jeho obsah.",
            "answer": "S = (16 + 8) · 5 : 2 = 24 · 5 : 2 = <strong>60 cm²</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Predná stena domu je obdĺžnik 8 m × 5 m s trojuholníkovým štítom so základňou 8 m a výškou 3 m. Vypočítaj obsah celej steny.",
            "answer": "S = 8 · 5 + 8 · 3 : 2 = 40 + 12 = <strong>52 m²</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Rovnoramenný lichobežník má základne 26 cm a 14 cm a ramená 10 cm. Vypočítaj výšku, obvod a obsah.",
            "answer": "Úsek (26 − 14) : 2 = 6 cm; v² = 100 − 36 = 64, v = <strong>8 cm</strong><br>o = 26 + 14 + 10 + 10 = <strong>60 cm</strong><br>S = (26 + 14) · 8 : 2 = <strong>160 cm²</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Pravouhlý lichobežník má základne 18 cm a 9 cm a kolmé rameno 12 cm. Vypočítaj šikmé rameno, obvod a obsah.",
            "answer": "a − c = 9 cm; b² = 81 + 144 = 225, b = <strong>15 cm</strong><br>o = 18 + 9 + 12 + 15 = <strong>54 cm</strong><br>S = (18 + 9) · 12 : 2 = <strong>162 cm²</strong>"
          },
          {
            "level": "bonus",
            "text": "Z obdĺžnika 12 cm × 8 cm odstrihneme v rohu pravouhlý trojuholník s odvesnami 8 cm a 5 cm. Vzniknutý útvar je pravouhlý lichobežník. Vypočítaj jeho obsah dvoma spôsobmi.",
            "answer": "Odčítaním: 96 − 8 · 5 : 2 = 96 − 20 = <strong>76 cm²</strong><br>Vzorcom: základne 12 cm a 12 − 5 = 7 cm, výška 8 cm: S = (12 + 7) · 8 : 2 = <strong>76 cm²</strong>"
          },
          {
            "level": "bonus",
            "text": "Štít má tvar rovnoramenného trojuholníka so základňou 10 m a ramenami 13 m. Vypočítaj jeho výšku, obsah a obvod.",
            "answer": "Polovica základne 5 m; v² = 169 − 25 = 144, v = <strong>12 m</strong><br>S = 10 · 12 : 2 = <strong>60 m²</strong><br>o = 13 + 13 + 10 = <strong>36 m</strong>"
          }
        ]
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Čo už viem?",
        "prompt": "Pri každej zručnosti označ, ako sa teraz cítiš.",
        "skills": [
          "viem zo zadania vybrať útvar, vzorec a rozlíšiť obvod od obsahu",
          "viem vypočítať obsah a obvod zloženého útvaru",
          "viem dopočítať rameno alebo výšku lichobežníka Pytagorovou vetou",
          "viem vyriešiť praktickú úlohu s cenou alebo počtom dlaždíc"
        ]
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 4,
        "text": "Pozemok má tvar obdĺžnika 22 m × 14 m. Vypočítaj dĺžku plota okolo pozemku a obsah pozemku.",
        "answer": "o = 2 · (22 + 14) = 72 m, S = 22 · 14 = 308 m²"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 4,
        "text": "Lichobežník má základne 18 cm a 12 cm a výšku 10 cm. Vypočítaj jeho obsah.",
        "answer": "S = (18 + 12) · 10 : 2 = 150 cm²"
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 5,
        "text": "Stena je obdĺžnik 8 m × 6 m s trojuholníkovým štítom so základňou 8 m a výškou 3 m. Vypočítaj obsah celej steny.",
        "answer": "S = 48 + 8 · 3 : 2 = 48 + 12 = 60 m²"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 6,
        "text": "Pravouhlý lichobežník má základne 16 cm a 10 cm a kolmé rameno 8 cm. Vypočítaj šikmé rameno, obvod a obsah.",
        "answer": "a − c = 6 cm; b² = 36 + 64 = 100, b = 10 cm; o = 16 + 10 + 8 + 10 = 44 cm; S = 26 · 8 : 2 = 104 cm²"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 6,
        "text": "Izba tvaru L vznikla z obdĺžnika 6 m × 5 m vyrezaním rohu 2 m × 3 m. Vypočítaj obsah a počet dlaždíc 20 cm × 20 cm na celú podlahu.",
        "answer": "S = 30 − 6 = 24 m²; dlaždica 0,04 m²; 24 : 0,04 = 600 dlaždíc"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 7,
        "text": "Rovnoramenný lichobežník má základne 22 cm a 10 cm a ramená 10 cm. Vypočítaj výšku, obvod a obsah.",
        "answer": "Úsek (22 − 10) : 2 = 6 cm; v² = 100 − 36 = 64, v = 8 cm; o = 22 + 10 + 20 = 52 cm; S = 32 · 8 : 2 = 128 cm²"
      }
    ]
  }
});
