MathPlatform.registerModule({
  "id": "1-logika-01",
  "teacher": {
    "placement": "1. ročník · Výroková formula · 2. hodina: Výrok, axióma, definícia, hypotéza",
    "prerequisites": [
      "bežné vedomosti zo ZŠ o prirodzených číslach, prvočíslach a jednoduchých rovniciach",
      "schopnosť rozlíšiť otázku, príkaz a oznamovaciu vetu v bežnom jazyku",
      "schopnosť dosadiť konkrétnu hodnotu za premennú a overiť jednoduchú rovnosť"
    ],
    "planContent": [
      "Relevantná časť tematického celku: výroky a ich pravdivostná hodnota.",
      "Téma hodiny podľa tematického plánu: „Výrok, axióma, definícia, hypotéza“."
    ],
    "planPerformance": [
      "Rozlíšiť výrok od vety, ktorá výrokom nie je, vrátane otvorenej vety s neurčenou premennou.",
      "Pri jednoduchom výroku určiť pravdivostnú hodnotu, ak ju možno rozhodnúť na základe známych faktov.",
      "Na primeraných príkladoch významovo rozlíšiť definíciu, matematické tvrdenie, hypotézu a axiómu."
    ],
    "goals": [
      "rozlíšiť výrok od otázky, príkazu a otvorenej vety s neurčenou premennou",
      "určiť pravdivostnú hodnotu jednoduchého výroku",
      "vysvetliť vlastnými slovami, čo je výrok",
      "uviesť vlastný pravdivý a nepravdivý matematický výrok",
      "rozlíšiť na primeraných príkladoch definíciu, matematické tvrdenie a hypotézu",
      "významovo rozlíšiť axiómu ako východiskové tvrdenie prijaté v rámci matematickej teórie bez dôkazu"
    ],
    "competencies": [
      "matematická komunikácia a presné používanie terminológie a symboliky",
      "logické a kritické myslenie",
      "posudzovanie a zdôvodňovanie matematických tvrdení",
      "digitálna kompetencia pri práci s interaktívnou aplikáciou",
      "samostatnosť, spolupráca a kultivovaná argumentácia"
    ],
    "enrichment": [
      "Dôraz na presné rozlišovanie tvrdenia, otvorenej vety, definície a hypotézy podporuje matematickú komunikáciu a argumentáciu.",
      "Žiak pri vybraných položkách neuvádza iba odpoveď, ale aj dôvod svojho rozhodnutia.",
      "Porovnanie overenia na niekoľkých príkladoch s dôkazom pripravuje pôdu pre neskoršiu prácu s argumentáciou; systematický dôkaz sa na tejto hodine ešte nevyučuje."
    ],
    "flow": [
      "0–2 min: organizačný úvod; tému zatiaľ neformulovať hotovou definíciou.",
      "2–7 min: problémový vstup – Číslo 13 je prvočíslo; Koľko je prirodzených čísel?; Cvič!; 7x − 3 = 18. Otázka: pri ktorých vetách sa dá odpovedať PRAVDA alebo NEPRAVDA?",
      "7–12 min: heuristickým rozhovorom zaviesť pojem výrok a pravdivostná hodnota; zdôrazniť, že aj nepravdivá oznamovacia veta môže byť výrokom; zapísať P/N.",
      "12–19 min: práca vo dvojiciach – úloha 1.2.1 z priloženého zadania; pri nevýrokoch požadovať dôvod.",
      "19–24 min: vybrané položky úlohy 1.2.2; vždy postup VETA → JE TO VÝROK? → ak áno P/N.",
      "24–29 min: spresniť otvorenú vetu, definíciu, tvrdenie, hypotézu a význam axiómy; pri príkladoch 2 + 4 = 6, 4 + 6 = 10, 8 + 12 = 20 formulovať hypotézu a diskutovať, či tri príklady predstavujú dôkaz.",
      "29–38 min: interaktívna aplikácia – rovnaký rozhodovací postup ako v úlohách 1.2.1 a 1.2.2; samostatne alebo vo dvojici.",
      "38–42 min: problémové prípady a spoločná argumentácia o jednoznačnosti a kontexte.",
      "42–45 min: exit ticket podľa priložených úloh, stručné zhrnutie a domáca úloha."
    ],
    "diagnostics": [
      "či žiak rozlišuje výrok a nevýrok",
      "či pri výroku správne určuje P/N",
      "či rozpozná otázku, príkaz a otvorenú vetu s neurčenou premennou",
      "či vie svoje rozhodnutie aspoň pri jednej položke slovne zdôvodniť",
      "či významovo rozlišuje definíciu, tvrdenie, hypotézu a axiómu"
    ],
    "partialUse": [
      "Klasifikácia viet + dôvody: približne 4–5 min.",
      "Pravdivostná hodnota vybraných výrokov: približne 3–4 min.",
      "Detektív výrokov + slovné zdôvodnenie: približne 2–3 min.",
      "Exit ticket možno použiť samostatne na záver hodiny."
    ]
  },
  "student": {
    "title": "Je to výrok?",
    "subtitle": "2. hodina · Výrok, axióma, definícia, hypotéza",
    "intro": "V aplikácii si precvičíš rovnaký postup ako pri práci v učebnici: najprv rozhodni, či je veta výrokom. Až keď je to výrok, urč jeho pravdivostnú hodnotu. Pri vybraných položkách vysvetlíš aj dôvod.",
    "estimatedTime": "9–12 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "PRED ŠTARTOM",
        "title": "Rozhodovací postup",
        "html": "<p><strong>1. krok:</strong> Je veta výrokom?</p><p><strong>2. krok:</strong> Ak áno, urč jej pravdivostnú hodnotu: <strong>P</strong> – pravdivý výrok, <strong>N</strong> – nepravdivý výrok.</p><p><strong>Otázka, príkaz ani otvorená veta s neurčenou premennou nie sú výrokom.</strong></p>",
        "remember": "Najprv VÝROK / NIE JE VÝROK. Až potom pri výroku P / N."
      },
      {
        "id": "classify-all",
        "type": "sortChoice",
        "phase": "1. KROK",
        "skill": "Výrok",
        "title": "Je to výrok?",
        "items": [
          {
            "text": "Číslo 13 je prvočíslo.",
            "answer": true,
            "why": "Je to jednoznačne rozhodnuteľné tvrdenie."
          },
          {
            "text": "Koľko je prirodzených čísel?",
            "answer": false,
            "why": "Je to otázka."
          },
          {
            "text": "Cvič!",
            "answer": false,
            "why": "Je to príkaz."
          },
          {
            "text": "7x − 3 = 18.",
            "answer": false,
            "why": "Bez určenej hodnoty x ide o otvorenú vetu; pravdivosť závisí od x."
          },
          {
            "text": "Číslo 7 nie je prvočíslo.",
            "answer": true,
            "why": "Je to jednoznačne rozhodnuteľné tvrdenie."
          },
          {
            "text": "Rovnica 3x = 0 má jeden reálny koreň.",
            "answer": true,
            "why": "Je to tvrdenie o rovnici, ktorého pravdivosť vieme posúdiť."
          },
          {
            "text": "Mesiac je planéta Slnečnej sústavy.",
            "answer": true,
            "why": "Je to jednoznačne rozhodnuteľné tvrdenie, hoci je nepravdivé."
          },
          {
            "text": "Nakresli štvorec!",
            "answer": false,
            "why": "Je to príkaz."
          },
          {
            "text": "x + 8 = 5, ak x = −3.",
            "answer": true,
            "why": "Premenná x je určená podmienkou, preto pravdivosť vieme posúdiť."
          }
        ],
        "labels": [
          "VÝROK",
          "NIE JE VÝROK"
        ]
      },
      {
        "id": "reasons",
        "type": "matrix",
        "phase": "PREČO?",
        "skill": "Zdôvodnenie",
        "title": "Urči dôvod",
        "labels": [
          "otázka",
          "príkaz",
          "neurčená premenná",
          "jednoznačne rozhodnuteľné tvrdenie"
        ],
        "items": [
          {
            "text": "Koľko je prirodzených čísel?",
            "answer": "otázka"
          },
          {
            "text": "Cvič!",
            "answer": "príkaz"
          },
          {
            "text": "7x − 3 = 18.",
            "answer": "neurčená premenná"
          },
          {
            "text": "Rovnica 3x = 0 má jeden reálny koreň.",
            "answer": "jednoznačne rozhodnuteľné tvrdenie"
          }
        ]
      },
      {
        "id": "truth-13",
        "type": "choice",
        "phase": "2. KROK",
        "skill": "Pravdivostná hodnota",
        "prompt": "Číslo 13 je prvočíslo.",
        "question": "Akú pravdivostnú hodnotu má tento výrok?",
        "options": [
          "P – pravdivý",
          "N – nepravdivý"
        ],
        "answer": 0,
        "correct": "P. Číslo 13 je prvočíslo.",
        "hint": "Skontroluj, koľko kladných deliteľov má číslo 13."
      },
      {
        "id": "truth-7",
        "type": "choice",
        "phase": "2. KROK",
        "skill": "Pravdivostná hodnota",
        "prompt": "Číslo 7 nie je prvočíslo.",
        "question": "Akú pravdivostnú hodnotu má tento výrok?",
        "options": [
          "P – pravdivý",
          "N – nepravdivý"
        ],
        "answer": 1,
        "correct": "N. Číslo 7 je prvočíslo, preto je uvedený výrok nepravdivý.",
        "hint": "Výrok môže byť nepravdivý a stále zostáva výrokom."
      },
      {
        "id": "truth-equation",
        "type": "choice",
        "phase": "2. KROK",
        "skill": "Pravdivostná hodnota",
        "prompt": "Rovnica 3x = 0 má jeden reálny koreň.",
        "question": "Akú pravdivostnú hodnotu má tento výrok?",
        "options": [
          "P – pravdivý",
          "N – nepravdivý"
        ],
        "answer": 0,
        "correct": "P. Rovnica má práve jedno riešenie x = 0.",
        "hint": "Vyrieš krátko rovnicu 3x = 0."
      },
      {
        "id": "truth-moon",
        "type": "choice",
        "phase": "2. KROK",
        "skill": "Pravdivostná hodnota",
        "prompt": "Mesiac je planéta Slnečnej sústavy.",
        "question": "Akú pravdivostnú hodnotu má tento výrok?",
        "options": [
          "P – pravdivý",
          "N – nepravdivý"
        ],
        "answer": 1,
        "correct": "N. Mesiac je prirodzená družica Zeme, nie planéta.",
        "hint": "Rozhoduj o pravdivosti tvrdenia, nie o tom, či je veta výrokom."
      },
      {
        "id": "truth-substitution",
        "type": "choice",
        "phase": "2. KROK",
        "skill": "Pravdivostná hodnota",
        "prompt": "x + 8 = 5, ak x = −3.",
        "question": "Akú pravdivostnú hodnotu má tento výrok?",
        "options": [
          "P – pravdivý",
          "N – nepravdivý"
        ],
        "answer": 0,
        "correct": "P. Po dosadení x = −3 dostaneme −3 + 8 = 5.",
        "hint": "Tentoraz je hodnota x určená. Dosaď ju."
      },
      {
        "id": "terms-recap",
        "type": "explain",
        "phase": "SPRESNI POJMY",
        "title": "Štyri pojmy z dnešnej hodiny",
        "html": "<p><strong>Definícia</strong> zavádza alebo vymedzuje matematický pojem.</p><p><strong>Tvrdenie</strong> je matematická veta, ktorej pravdivosť posudzujeme.</p><p><strong>Hypotéza</strong> je predpokladané tvrdenie, ktorého platnosť skúmame.</p><p><strong>Axióma</strong> je východiskové tvrdenie prijaté v rámci matematickej teórie bez dôkazu.</p>",
        "remember": "Tieto pojmy rozlišuj podľa ich úlohy, nie iba podľa toho, ako veta vyzerá."
      },
      {
        "id": "terms-check",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "Pojmy",
        "title": "Rozlíš pojmy",
        "labels": [
          "definícia",
          "tvrdenie",
          "hypotéza",
          "axióma"
        ],
        "items": [
          {
            "text": "„Prvočíslo je prirodzené číslo väčšie ako 1, ktoré má práve dva kladné delitele.“",
            "answer": "definícia"
          },
          {
            "text": "„Súčet dvoch párnych čísel je párny.“",
            "answer": "tvrdenie"
          },
          {
            "text": "Po príkladoch 2 + 4 = 6, 4 + 6 = 10, 8 + 12 = 20 predpokladáme, že pozorovaný vzor platí všeobecne.",
            "answer": "hypotéza"
          },
          {
            "text": "Východiskové tvrdenie prijaté v matematickej teórii bez dôkazu.",
            "answer": "axióma"
          }
        ]
      },
      {
        "id": "examples-not-proof",
        "type": "choice",
        "phase": "PREMÝŠĽAJ",
        "skill": "Argumentácia",
        "prompt": "Overili sme tvrdenie „Súčet dvoch párnych čísel je párny.“ na troch príkladoch: 2 + 4 = 6, 4 + 6 = 10, 8 + 12 = 20.",
        "question": "Predstavujú tieto tri príklady už dôkaz všeobecnej platnosti?",
        "options": [
          "Áno",
          "Nie"
        ],
        "answer": 1,
        "correct": "Nie. Tri príklady podporujú hypotézu, ale samy osebe ešte nedokazujú, že tvrdenie platí vo všetkých prípadoch.",
        "hint": "Porovnaj počet overených prípadov s počtom všetkých možných dvojíc párnych čísel."
      },
      {
        "id": "detective",
        "type": "choice",
        "phase": "DETEKTÍV VÝROKOV",
        "skill": "Výrok",
        "promptHtml": "<strong>Adam:</strong> „Koľko je 6 + 7?“<br><strong>Beáta:</strong> „Číslo 15 je párne.“<br><strong>Cyril:</strong> „Vypočítaj 6 + 7!“",
        "question": "Kto vyslovil výrok?",
        "options": [
          "Adam",
          "Beáta",
          "Cyril"
        ],
        "answer": 1,
        "correct": "Beáta. Jej veta je oznamovacie tvrdenie, ktorému možno priradiť pravdivostnú hodnotu N.",
        "hint": "Otázka ani príkaz nie sú výroky."
      },
      {
        "id": "detective-explain",
        "type": "selfWrite",
        "phase": "VYJADRI SA",
        "skill": "Matematická komunikácia",
        "title": "Vysvetli svoje rozhodnutie",
        "promptHtml": "Do zošita jednou až dvoma vetami vysvetli, prečo Adamova a Cyrilova veta nie sú výroky a prečo Beátina veta výrokom je.",
        "model": "Adam sa pýta, preto jeho veta nie je výrok. Cyril dáva príkaz, preto jeho veta tiež nie je výrok. Beáta vyslovila oznamovacie tvrdenie, o ktorom možno rozhodnúť, či je pravdivé alebo nepravdivé; je to teda výrok, v tomto prípade nepravdivý."
      },
      {
        "id": "notebook",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Zápis do zošita",
        "html": "<p><strong>VÝROKY</strong></p><p>Zapíš si stručne definíciu výroku, označenia P/N, jeden pravdivý a jeden nepravdivý príklad, poznámku o otvorenej vete a stručné významy pojmov definícia, tvrdenie, hypotéza.</p>",
        "model": "<strong>VÝROKY</strong><br>Výrok je oznamovacia veta, o ktorej možno jednoznačne rozhodnúť, či je pravdivá alebo nepravdivá.<br>Výroky označujeme veľkými písmenami A, B, C, …<br>Pravdivostná hodnota: P – pravdivý výrok; N – nepravdivý výrok.<br>Príklad: A: Číslo 13 je prvočíslo. – P. B: Číslo 7 nie je prvočíslo. – N.<br>Otázka, príkaz ani otvorená veta s neurčenou premennou nie sú výrokom.<br>Otvorená veta: x + 3 = 7 – jej pravdivosť závisí od hodnoty premennej x.<br>Definícia – zavádza alebo vymedzuje matematický pojem.<br>Tvrdenie – matematická veta, ktorej pravdivosť posudzujeme.<br>Hypotéza – predpokladané tvrdenie, ktorého platnosť skúmame."
      },
      {
        "id": "exit-1",
        "type": "choice",
        "phase": "EXIT TICKET",
        "skill": "Výrok a P/N",
        "prompt": "Číslo 7 nie je prvočíslo.",
        "question": "Ktorá odpoveď je správna?",
        "options": [
          "Nie je to výrok.",
          "Je to pravdivý výrok – P.",
          "Je to nepravdivý výrok – N."
        ],
        "answer": 2,
        "correct": "Je to výrok a má pravdivostnú hodnotu N.",
        "hint": "Najprv rozhodni, či veta niečo jednoznačne tvrdí. Potom over pravdivosť."
      },
      {
        "id": "exit-2",
        "type": "choice",
        "phase": "EXIT TICKET",
        "skill": "Otvorená veta",
        "prompt": "7x − 3 = 18.",
        "question": "Je to výrok?",
        "options": [
          "Áno",
          "Nie"
        ],
        "answer": 1,
        "correct": "Nie. Bez určenej hodnoty x pravdivosť závisí od premennej; ide o otvorenú vetu.",
        "hint": "Vieš bez hodnoty x priradiť jednej vete práve P alebo N?"
      },
      {
        "id": "exit-3",
        "type": "choice",
        "phase": "EXIT TICKET",
        "skill": "Výrok a P/N",
        "prompt": "Rovnica 3x = 0 má jeden reálny koreň.",
        "question": "Ktorá odpoveď je správna?",
        "options": [
          "Nie je to výrok.",
          "Je to pravdivý výrok – P.",
          "Je to nepravdivý výrok – N."
        ],
        "answer": 1,
        "correct": "Je to pravdivý výrok. Rovnica má práve jedno riešenie x = 0.",
        "hint": "Vyrieš rovnicu a potom rozhodni o pravdivosti vety."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako tomu rozumieš?",
        "skills": [
          "výrok / nevýrok",
          "pravdivostná hodnota P/N",
          "otvorená veta",
          "definícia, tvrdenie, hypotéza, axióma"
        ],
        "prompt": "Označ, ako isto sa cítiš pri jednotlivých častiach. Toto nie je známka."
      }
    ]
  }
});
