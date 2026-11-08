MathPlatform.registerModule({
  "id": "1-u02-h026",
  "teacher": {
    "placement": "1. ročník · Množiny · 26. hodina: Aplikačné úlohy s množinami",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "výroková logika z predchádzajúceho tematického celku tam, kde pomáha presnému čítaniu podmienok"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza pre 26. hodinu tému „Aplikačné úlohy s množinami“. Súhrnný obsah celku zahŕňa úvod do množín, prvky a zápis, podmnožiny, prázdnu a univerzálnu množinu, kardinalitu, zjednotenie, prienik, rozdiel, doplnok, Vennove diagramy, kombinované a aplikačné úlohy."
    ],
    "planPerformance": [
      "V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; ciele modulu sú didaktickým rozpracovaním názvu a poradia tém, nie doplnením oficiálneho štandardu."
    ],
    "goals": [
      "pripraviť sa na slovné úlohy z kontrolnej písomnej práce: aspoň jedno, ani jedno, iba jedno, práve jedno",
      "preložiť slovnú úlohu na množiny a pracovať s diagramom od prieniku smerom von",
      "použiť vzorec |A ∪ B| = |A| + |B| − |A ∩ B| aj „naopak“ na dopočítanie neznámej"
    ],
    "competencies": [
      "matematická komunikácia",
      "práca s reprezentáciami",
      "argumentácia a kontrola výsledku",
      "prehľadný zápis v zošite"
    ],
    "enrichment": [
      "Návrh maturitného štandardu sa využíva iba ako obohatenie: reprezentácia množín, Vennove diagramy, prepojenie množinových operácií s logickými spojkami a presná argumentácia.",
      "Obsahuje aj originálnu maturitnú úlohu zo zbierky (2023, úloha 28), zaradenú až po osvojení potrebných množinových operácií; využíva aj bežné poznatky o deliteľnosti zo ZŠ."
    ],
    "flow": [
      "3 min: kde sme v celku a čo bude v písomke",
      "15–18 min: digitálne cvičenie v štýle písomky (slovné úlohy po krokoch, hľadanie chyby)",
      "8–10 min: samostatná úloha na papieri (BEZ MOBILU) a zbierka úloh podľa úrovne",
      "5 min: spoločný rozbor najčastejších chýb podľa živých výsledkov",
      "voliteľne: maturitná úloha ako výzva navyše pre rýchlejších žiakov"
    ],
    "diagnostics": [
      "rozlišuje „hrá futbal“ (celé A) od „hrá iba futbal“ (A − B)",
      "používa vzorec správne aj na dopočítanie neznámej (|B| alebo |A ∩ B|)",
      "vie povedať, čo znamenajú „aspoň jeden“, „ani jeden“ a „práve jeden“"
    ],
    "partialUse": [
      "Modul je prípravou na písomku: pri nedostatku času vynechajte zbierku a maturitnú výzvu.",
      "Mobil nenahrádza ručné riešenie, presný zápis ani argumentáciu."
    ]
  },
  "student": {
    "title": "Aplikačné úlohy: príprava na písomku",
    "subtitle": "Téma 26 · Aplikačné úlohy s množinami",
    "intro": "V písomke ťa čaká slovná úloha so štyrmi otázkami (aspoň jeden, ani jeden, iba jeden, práve jeden). Naučíš sa ju riešiť podľa pevného postupu.",
    "estimatedTime": "30–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Kde sme a čo bude v písomke",
        "html": "<p>Vieme čítať Vennov diagram aj vyhodnocovať zložené výrazy. Dnes to použijeme na <strong>slovné úlohy</strong>.</p><p>V písomke dostaneš zadanie typu „v triede je 32 žiakov, jedna skupina hrá šach, druhá basketbal, niektorí oba“ a budeš odpovedať na viac otázok. Každá správna odpoveď je samostatný bod.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "preložiť slovnú úlohu na množiny a diagram",
          "rozlišiť „aspoň jeden“, „ani jeden“, „iba jeden“ a „práve jeden“",
          "použiť vzorec |A ∪ B| = |A| + |B| − |A ∩ B| aj naopak"
        ]
      },
      {
        "id": "method",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Postup pri slovnej úlohe",
        "html": "<ol class=\"steps\"><li>Pomenuj množiny (A = …, B = …) a zapíš čísla: |A|, |B|, |A ∩ B| a |U|.</li><li>Nakresli diagram a <strong>najprv vyplň prienik</strong>.</li><li>Do „iba A“ a „iba B“ vypočítaj rozdiel: |A| − |A ∩ B| a |B| − |A ∩ B|.</li><li>Mimo kruhov je |U| − |A ∪ B|.</li><li>Odpovedz na otázku vetou.</li></ol><div class=\"logic-visual\"><svg viewBox=\"0 0 760 310\"><g font-family=\"system-ui\" text-anchor=\"middle\"><rect x=\"130\" y=\"15\" width=\"500\" height=\"270\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"150\" y=\"40\" font-size=\"20\" text-anchor=\"start\">U</text><circle cx=\"315\" cy=\"145\" r=\"105\" fill=\"currentColor\" opacity=\".07\" stroke=\"currentColor\" stroke-width=\"3\"/><circle cx=\"445\" cy=\"145\" r=\"105\" fill=\"currentColor\" opacity=\".12\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"250\" y=\"62\" font-size=\"22\" font-weight=\"700\">A</text><text x=\"510\" y=\"62\" font-size=\"22\" font-weight=\"700\">B</text><text x=\"275\" y=\"155\" font-size=\"32\" font-weight=\"700\">12</text><text x=\"275\" y=\"180\" font-size=\"14\">iba A</text><text x=\"380\" y=\"155\" font-size=\"32\" font-weight=\"700\">6</text><text x=\"380\" y=\"180\" font-size=\"14\">A ∩ B</text><text x=\"485\" y=\"155\" font-size=\"32\" font-weight=\"700\">8</text><text x=\"485\" y=\"180\" font-size=\"14\">iba B</text><text x=\"175\" y=\"245\" font-size=\"28\" font-weight=\"700\">4</text><text x=\"175\" y=\"266\" font-size=\"14\">mimo oboch</text></g></svg></div><p>A = autobus, B = električka. Žiakov je 30, autobusom ide 18, električkou 14 a oboma 6.</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Iba autobus: 18 − 6 = <strong>12</strong>, iba električka: 14 − 6 = <strong>8</strong>.</p><p>Aspoň jeden prostriedok: |A ∪ B| = 18 + 14 − 6 = <strong>26</strong>. Ani jeden: 30 − 26 = <strong>4</strong>.</p><p>Práve jeden prostriedok: 12 + 8 = <strong>20</strong>.</p></div><div class=\"warning\"><strong>Pozor:</strong> „18 žiakov ide autobusom“ znamená všetci z A vrátane tých, čo idú aj električkou. Neznamená to iba autobusom.</div>",
        "remember": "Prienik vyplň ako prvý. Potom od neho odčítaj a dopočítaj zvyšné oblasti."
      },
      {
        "id": "match",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "preklad do množín",
        "title": "Slová na množiny (A = hrá futbal, B = hrá volejbal)",
        "labels": [
          "A ∩ B",
          "A ∪ B",
          "A − B",
          "B − A",
          "(A ∪ B)′"
        ],
        "items": [
          {
            "text": "hrá aspoň jeden z oboch športov",
            "answer": "A ∪ B"
          },
          {
            "text": "hrá futbal aj volejbal",
            "answer": "A ∩ B"
          },
          {
            "text": "hrá iba futbal (nie volejbal)",
            "answer": "A − B"
          },
          {
            "text": "hrá iba volejbal (nie futbal)",
            "answer": "B − A"
          },
          {
            "text": "nehrá ani jeden z oboch športov",
            "answer": "(A ∪ B)′"
          }
        ]
      },
      {
        "id": "c-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "aspoň jeden",
        "question": "V skupine 40 turistov hovorí 22 anglicky, 18 nemecky a 7 turistov hovorí oboma jazykmi. Koľko turistov hovorí aspoň jedným z týchto dvoch jazykov?",
        "options": [
          "47",
          "33",
          "40"
        ],
        "answer": 1,
        "correct": "22 + 18 − 7 = 33. Siedmich turistov sme v súčte 22 + 18 započítali dvakrát.",
        "hint": "Kto hovorí oboma jazykmi, bol v súčte započítaný dvakrát. Čo s tým?"
      },
      {
        "id": "n-none",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "Koľko žiakov nechodí ani na jeden krúžok",
        "title": "Koľko žiakov nechodí ani na jeden krúžok",
        "prompt": "V triede je 28 žiakov. Na futbal chodí 15 žiakov, na tenis 12 žiakov a 5 žiakov chodí na oba. Koľko žiakov nechodí ani na futbal, ani na tenis?",
        "validate": "exact",
        "answer": 6,
        "success": "Aspoň na jeden chodí 15 + 12 − 5 = 22 žiakov, ani na jeden teda 28 − 22 = 6.",
        "hint": "Najprv zisti, koľko žiakov chodí aspoň na jeden z krúžkov, a odpočítaj ich od všetkých.",
        "reveal": "Správne je 6: aspoň jeden = 15 + 12 − 5 = 22, ani jeden = 28 − 22."
      },
      {
        "id": "n-only",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "Koľko hrá iba šach",
        "title": "Koľko hrá iba šach",
        "prompt": "Z 50 žiakov hrá 22 šach, 25 basketbal a 8 hrá šach aj basketbal. Koľko žiakov hrá iba šach?",
        "validate": "exact",
        "answer": 14,
        "success": "Z 22 šachistov hrá 8 aj basketbal, iba šach hrá 22 − 8 = 14 žiakov.",
        "hint": "Medzi tými, čo hrajú šach, sú aj tí, čo hrajú oba športy. Tých treba odpočítať.",
        "reveal": "Správne je 14: 22 − 8."
      },
      {
        "id": "c-b",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "práve jeden",
        "question": "Z 50 žiakov hrá 22 šach, 25 basketbal a 8 hrá šach aj basketbal. Koľko žiakov hrá práve jeden z týchto dvoch športov (teda buď iba šach, alebo iba basketbal)?",
        "options": [
          "31",
          "39",
          "47"
        ],
        "answer": 0,
        "correct": "Iba šach 22 − 8 = 14, iba basketbal 25 − 8 = 17, spolu 14 + 17 = 31.",
        "hint": "Práve jeden znamená, že oba športy hrať nesmie. Spočítaj „iba šach“ a „iba basketbal“."
      },
      {
        "id": "hunt",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "V triede je 30 žiakov, 16 hrá futbal, 12 volejbal a 5 hrá oba športy. Žiak počítal: „Iba futbal hrá 16 − 12 = 4 žiaci.“ V čom je chyba?",
        "options": [
          "Mal pripočítať 5 žiakov, ktorí hrajú oba športy.",
          "Mal vydeliť 16 dvoma, lebo športy sú dva.",
          "Od 16 treba odpočítať 5 žiakov, ktorí hrajú aj volejbal, nie všetkých 12 volejbalistov. Správne je 16 − 5 = 11."
        ],
        "answer": 2,
        "correct": "Presne. Odčítavame len prienik (futbal aj volejbal), lebo iba tí sú medzi futbalistami navyše.",
        "hint": "Koľkí z futbalistov hrajú aj volejbal? Práve tých treba vyradiť."
      },
      {
        "id": "n-rev",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "Spätné určenie |B|",
        "title": "Spätné určenie |B|",
        "prompt": "Pre množiny A a B platí |A| = 15, |A ∪ B| = 24 a |A ∩ B| = 4. Koľko prvkov má množina B?",
        "validate": "exact",
        "answer": 13,
        "success": "Zo vzorca 24 = 15 + |B| − 4 dostaneme |B| = 24 − 15 + 4 = 13.",
        "hint": "Dosaď do vzorca |A ∪ B| = |A| + |B| − |A ∩ B| a vyrieš rovnicu s neznámou |B|.",
        "reveal": "Správne je 13: 24 = 15 + |B| − 4, teda |B| = 13."
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha na papier",
        "html": "<p>Odlož zariadenie. Na zájazde je 90 žiakov. Hrad navštívilo 54 žiakov, jaskyňu 47 žiakov a obe miesta 25 žiakov.</p><ol type=\"a\"><li>Nakresli Vennov diagram a vyplň počty vo všetkých štyroch oblastiach.</li><li>Koľko žiakov navštívilo aspoň jedno z miest?</li><li>Koľko žiakov nenavštívilo ani jedno?</li><li>Koľko žiakov navštívilo práve jedno miesto?</li></ol><p>Zapíš celý postup tak, ako by si ho písal/a do písomky.</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: aplikačné úlohy",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Riešenia píš do zošita aj s diagramom. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "V triede je 26 žiakov. Psa má doma 13 žiakov, mačku 11 žiakov a 4 žiaci majú psa aj mačku. Koľko žiakov má aspoň jedno z týchto zvierat a koľko ani jedno?",
            "answer": "Aspoň jedno: 13 + 11 − 4 = 20 žiakov<br>Ani jedno: 26 − 20 = 6 žiakov"
          },
          {
            "level": "zaklad",
            "text": "V skupine 45 ľudí si 28 objednalo kávu, 19 čaj a 6 si objednalo oboje. Koľko ľudí si objednalo iba kávu a koľko iba čaj?",
            "answer": "Iba kávu: 28 − 6 = 22 ľudí<br>Iba čaj: 19 − 6 = 13 ľudí"
          },
          {
            "level": "rozsirenie",
            "text": "Zo 100 opýtaných vlastní 63 bicykel, 41 kolobežku a 18 vlastní oboje. Koľko ľudí nevlastní ani jedno a koľko vlastní práve jedno z nich?",
            "answer": "Aspoň jedno: 63 + 41 − 18 = 86<br>Ani jedno: 100 − 86 = 14<br>Práve jedno: (63 − 18) + (41 − 18) = 45 + 23 = 68"
          },
          {
            "level": "rozsirenie",
            "text": "Zo 60 žiakov je 38 prihlásených na krúžok A a 35 na krúžok B. Každý žiak chodí aspoň na jeden z nich. Koľko žiakov chodí na oba krúžky?",
            "answer": "60 = 38 + 35 − |A ∩ B|, teda |A ∩ B| = 73 − 60 = 13 žiakov"
          },
          {
            "level": "bonus",
            "text": "V triede s 30 žiakmi chodí 17 na angličtinu a 14 na nemčinu. Ani jeden z týchto jazykov sa neučí 5 žiakov. Koľko žiakov sa učí oba jazyky a koľko iba angličtinu?",
            "answer": "Aspoň jeden jazyk: 30 − 5 = 25<br>Oba: 17 + 14 − 25 = 6<br>Iba angličtinu: 17 − 6 = 11"
          }
        ]
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Postup pri slovnej úlohe",
        "prompt": "Vlastnými slovami opíš, ako zo zadania slovnej úlohy zistíš, koľko ľudí nepatrí ani do jednej skupiny.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Najprv pomenujem množiny a vypíšem čísla. Zo vzorca |A ∪ B| = |A| + |B| − |A ∩ B| zistím, koľkí patria aspoň do jednej skupiny. Počet tých, čo nepatria do žiadnej, je celkový počet mínus |A ∪ B|.",
        "placeholder": "Najprv..., potom..."
      },
      {
        "id": "matura",
        "type": "choice",
        "phase": "VÝZVA (navyše)",
        "skill": "Maturitný prenos",
        "question": "Maturitná úloha (2023, úloha 28): A sú kladné celé čísla deliteľné 5, B čísla menšie ako 200 a C čísla so zvyškom 3 po delení 7. Koľko prvkov má (A∩B)−C?",
        "options": [
          "33",
          "34",
          "35",
          "36",
          "37"
        ],
        "answer": 0,
        "correct": "Správne: 33. V A∩B je 39 kladných násobkov 5 menších ako 200. Do C z nich patria 10, 45, 80, 115, 150 a 185, teda 6 čísel. Preto 39 − 6 = 33.",
        "hint": "Najprv vypíš alebo spočítaj násobky 5 menšie ako 200. Potom hľadaj tie, ktoré dávajú po delení 7 zvyšok 3.",
        "title": "Maturitná výzva"
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Som pripravený/á na písomku?",
        "skills": [
          "preklad slovnej úlohy do množín",
          "aspoň jeden / ani jeden / práve jeden",
          "vzorec |A ∪ B| = |A| + |B| − |A ∩ B|",
          "dopočítanie neznámej zo vzorca"
        ],
        "prompt": "Označ, ako dobre to zvládaš. Nie je to známka; porovnaj svoj pocit s výsledkom úloh. Čo máš 🔴 alebo 🟡, si pred písomkou ešte raz prejdi."
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 3,
        "text": "V triede s 24 žiakmi má 14 žiakov sestru, 10 žiakov brata a 4 žiaci majú sestru aj brata. Koľko žiakov má aspoň jedného z týchto súrodencov?",
        "answer": "14 + 10 − 4 = 20 žiakov"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 4,
        "text": "Do školy dochádza 120 žiakov. Autobusom ide 70 žiakov, električkou 55 žiakov a 25 žiakov používa obe. Koľko žiakov používa aspoň jeden z týchto dopravných prostriedkov a koľko ani jeden?",
        "answer": "Aspoň jeden: 70 + 55 − 25 = 100 žiakov<br>Ani jeden: 120 − 100 = 20 žiakov"
      },
      {
        "id": "w3",
        "level": "rozsirenie",
        "space": 6,
        "text": "Vo fitnescentre cvičí 50 ľudí. Posilňuje 32 ľudí, behá 25 ľudí a 13 ľudí robí oboje. Koľko ľudí iba posilňuje, koľko iba behá, koľko robí aspoň jednu z aktivít a koľko ani jednu?",
        "answer": "Iba posilňuje: 32 − 13 = 19<br>Iba behá: 25 − 13 = 12<br>Aspoň jedna: 19 + 12 + 13 = 44<br>Ani jedna: 50 − 44 = 6"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 4,
        "text": "V dotazníku 40 žiakov uviedlo, že hovorí anglicky (26 žiakov) alebo nemecky (22 žiakov); každý žiak hovorí aspoň jedným z týchto jazykov. Koľko žiakov hovorí oboma jazykmi?",
        "answer": "40 = 26 + 22 − |A ∩ N|, teda |A ∩ N| = 8 žiakov"
      },
      {
        "id": "w5",
        "level": "bonus",
        "space": 6,
        "text": "Zo 60 žiakov hrá 34 futbal, 28 basketbal a 12 hrá oba športy. Koľko žiakov nehrá ani jeden šport? Koľko z tých, ktorí hrajú futbal, nehrá basketbal?",
        "answer": "Aspoň jeden šport: 34 + 28 − 12 = 50, takže ani jeden nehrá 60 − 50 = 10 žiakov.<br>Futbal, ale nie basketbal: 34 − 12 = 22 žiakov."
      }
    ]
  }
});
