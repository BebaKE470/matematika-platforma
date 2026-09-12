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
      "0–3 min: KDE SME – zaradenie hodiny do celku, čo už vieme z 1. hodiny, čo dnes pribudne.",
      "3–9 min: NOVÝ POJEM – zavedenie pojmu výrok a pravdivostná hodnota priamo v aplikácii, na príkladoch 1/0.",
      "9–24 min: OVER SI – klasifikácia viet (výrok/nevýrok), dôvody, pravdivostná hodnota vybraných výrokov.",
      "24–31 min: NOVÝ POJEM 2 – definícia, tvrdenie, hypotéza, axióma; rozlíšenie na príkladoch.",
      "31–38 min: PRENOS – detektív výrokov, zápis do zošita, exit ticket.",
      "38–44 min: ZBIERKA – samostatná práca s úlohami zo zbierky, tri úrovne náročnosti.",
      "44–45 min: ZHRNUTIE a sebahodnotenie."
    ],
    "diagnostics": [
      "či žiak rozlišuje výrok a nevýrok",
      "či pri výroku správne určuje pravdivostnú hodnotu 1/0",
      "či rozpozná otázku, príkaz a otvorenú vetu s neurčenou premennou",
      "či vie svoje rozhodnutie aspoň pri jednej položke slovne zdôvodniť",
      "či významovo rozlišuje definíciu, tvrdenie, hypotézu a axiómu"
    ],
    "partialUse": [
      "Modul je navrhnutý na celú vyučovaciu hodinu vrátane zavedenia pojmu; pri potrebe skrátiť možno vynechať niektorú úroveň zbierky (aktivita 4) alebo časť „Detektív výrokov“.",
      "Zbierkové úlohy (aktivita 4) sú nebodované, žiak si ich rieši na papieri a v aplikácii iba odfajkne — netreba ich kontrolovať naživo pred pokračovaním.",
      "Klasifikácia viet + dôvody: približne 4–5 min, ak sa použije samostatne.",
      "Exit ticket možno použiť samostatne na záver hodiny."
    ]
  },
  "student": {
    "title": "Je to výrok?",
    "subtitle": "2. hodina · Výrok, axióma, definícia, hypotéza",
    "intro": "Dnes zistíš, čo presne je výrok a ako mu priradiť pravdivostnú hodnotu. Potom sa naučíš rozlišovať definíciu, tvrdenie, hypotézu a axiómu.",
    "estimatedTime": "40–45 min (celá hodina)",
    "activities": [
      {
        "id": "kde-sme",
        "type": "info",
        "phase": "0 · KDE SME",
        "title": "Začíname Výrokovú formulu",
        "html": "<p>Na 1. hodine sme si zopakovali základné počtové zručnosti zo ZŠ a dohodli si pravidlá práce. Dnes začíname prvú tému tohto tematického celku: <strong>výroková logika</strong>.</p><p>Nepotrebuješ na to nič nové okrem toho, čo už vieš zo ZŠ — rozlíšiť otázku, príkaz a oznamovaciu vetu, a dosadiť číslo za premennú.</p><p class=\"keyidea\">Dnes sa naučíš, čo je výrok, ako mu priradiť pravdivostnú hodnotu, a spoznáš pojmy axióma, definícia, tvrdenie a hypotéza.</p>",
        "continueLabel": "Idem na to"
      },
      {
        "id": "vyrok-intro",
        "type": "explain",
        "phase": "1 · NOVÝ POJEM",
        "title": "Čo je výrok?",
        "html": "<p><strong>Výrok</strong> je oznamovacia veta, o ktorej vieme jednoznačne rozhodnúť, či je pravdivá alebo nepravdivá.</p><p>Výroky označujeme veľkými písmenami A, B, C, … Pravdivostnú hodnotu zapisujeme <strong>1</strong> (pravdivý) alebo <strong>0</strong> (nepravdivý).</p><p>Napríklad: „Číslo 13 je prvočíslo.“ je výrok s hodnotou 1. „Číslo 7 nie je prvočíslo.“ je tiež výrok, ale s hodnotou 0 — aj nepravdivá veta môže byť výrok.</p><p><strong>Otázka, príkaz a otvorená veta s neurčenou premennou nie sú výrok</strong> — pri nich nevieme jednoznačne rozhodnúť pravdivostnú hodnotu, kým premenná nie je určená.</p>",
        "remember": "Výrok = oznamovacia veta s jednoznačnou pravdivostnou hodnotou 1 alebo 0."
      },
      {
        "id": "classify-all",
        "type": "sortChoice",
        "phase": "2 · UKÁŽKA",
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
        "phase": "3 · OVER SI",
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
        "phase": "3 · OVER SI",
        "skill": "Pravdivostná hodnota",
        "question": "Výrok: „Číslo 13 je prvočíslo.“ Akú pravdivostnú hodnotu má tento výrok?",
        "options": [
          "0 – nepravdivý",
          "1 – pravdivý"
        ],
        "answer": 1,
        "correct": "1. Číslo 13 je prvočíslo.",
        "hint": "Skontroluj, koľko kladných deliteľov má číslo 13."
      },
      {
        "id": "truth-7",
        "type": "choice",
        "phase": "3 · OVER SI",
        "skill": "Pravdivostná hodnota",
        "question": "Výrok: „Číslo 7 nie je prvočíslo.“ Akú pravdivostnú hodnotu má tento výrok?",
        "options": [
          "1 – pravdivý",
          "0 – nepravdivý"
        ],
        "answer": 1,
        "correct": "0. Číslo 7 je prvočíslo, preto je uvedený výrok nepravdivý.",
        "hint": "Výrok môže byť nepravdivý a stále zostáva výrokom."
      },
      {
        "id": "truth-equation",
        "type": "choice",
        "phase": "3 · OVER SI",
        "skill": "Pravdivostná hodnota",
        "question": "Výrok: „Rovnica 3x = 0 má jeden reálny koreň.“ Akú pravdivostnú hodnotu má tento výrok?",
        "options": [
          "1 – pravdivý",
          "0 – nepravdivý"
        ],
        "answer": 0,
        "correct": "1. Rovnica má práve jedno riešenie x = 0.",
        "hint": "Vyrieš krátko rovnicu 3x = 0."
      },
      {
        "id": "truth-moon",
        "type": "choice",
        "phase": "3 · OVER SI",
        "skill": "Pravdivostná hodnota",
        "question": "Výrok: „Mesiac je planéta Slnečnej sústavy.“ Akú pravdivostnú hodnotu má tento výrok?",
        "options": [
          "0 – nepravdivý",
          "1 – pravdivý"
        ],
        "answer": 0,
        "correct": "0. Mesiac je prirodzená družica Zeme, nie planéta.",
        "hint": "Rozhoduj o pravdivosti tvrdenia, nie o tom, či je veta výrokom."
      },
      {
        "id": "truth-substitution",
        "type": "choice",
        "phase": "3 · OVER SI",
        "skill": "Pravdivostná hodnota",
        "question": "Výrok: „x + 8 = 5, ak x = −3.“ Akú pravdivostnú hodnotu má tento výrok?",
        "options": [
          "0 – nepravdivý",
          "1 – pravdivý"
        ],
        "answer": 1,
        "correct": "1. Po dosadení x = −3 dostaneme −3 + 8 = 5.",
        "hint": "Tentoraz je hodnota x určená. Dosaď ju."
      },
      {
        "id": "terms-recap",
        "type": "explain",
        "phase": "1 · NOVÝ POJEM 2",
        "title": "Štyri pojmy z dnešnej hodiny",
        "html": "<p><strong>Definícia</strong> zavádza alebo vymedzuje matematický pojem.</p><p><strong>Tvrdenie</strong> je matematická veta, ktorej pravdivosť posudzujeme.</p><p><strong>Hypotéza</strong> je predpokladané tvrdenie, ktorého platnosť skúmame.</p><p><strong>Axióma</strong> je východiskové tvrdenie prijaté v rámci matematickej teórie bez dôkazu.</p>",
        "remember": "Tieto pojmy rozlišuj podľa ich úlohy, nie iba podľa toho, ako veta vyzerá."
      },
      {
        "id": "terms-check",
        "type": "matrix",
        "phase": "3 · OVER SI",
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
        "phase": "3 · OVER SI",
        "skill": "Argumentácia",
        "question": "Overili sme tvrdenie „Súčet dvoch párnych čísel je párny.“ na troch príkladoch: 2 + 4 = 6, 4 + 6 = 10, 8 + 12 = 20. Predstavujú tieto tri príklady už dôkaz všeobecnej platnosti?",
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
        "phase": "3 · PRENOS",
        "skill": "Výrok",
        "question": "Adam: „Koľko je 6 + 7?“ · Beáta: „Číslo 15 je párne.“ · Cyril: „Vypočítaj 6 + 7!“ Kto z nich vyslovil výrok?",
        "options": [
          "Adam",
          "Beáta",
          "Cyril"
        ],
        "answer": 1,
        "correct": "Beáta. Jej veta je oznamovacie tvrdenie, ktorému možno priradiť pravdivostnú hodnotu 0.",
        "hint": "Otázka ani príkaz nie sú výroky."
      },
      {
        "id": "detective-explain",
        "type": "selfWrite",
        "phase": "3 · VYJADRI SA",
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
        "html": "<p><strong>TOTO SI ZAPÍŠ DO ZOŠITA:</strong></p><p><strong>VÝROKY</strong></p><p>Výrok je oznamovacia veta, o ktorej možno jednoznačne rozhodnúť, či je pravdivá alebo nepravdivá.</p><p>Výroky označujeme veľkými písmenami A, B, C, …</p><p><strong>Pravdivostná hodnota:</strong><br>1 – pravdivý výrok<br>0 – nepravdivý výrok</p><p><strong>Príklady:</strong><br>A: Číslo 13 je prvočíslo. – 1<br>B: Číslo 7 nie je prvočíslo. – 0</p><p>Otázka, príkaz ani otvorená veta s neurčenou premennou nie sú výrokom.</p><p><strong>Otvorená veta:</strong> x + 3 = 7 – jej pravdivosť závisí od hodnoty premennej x.</p><p><strong>Definícia</strong> – zavádza alebo vymedzuje matematický pojem.<br><strong>Tvrdenie</strong> – matematická veta, ktorej pravdivosť posudzujeme.<br><strong>Hypotéza</strong> – predpokladané tvrdenie, ktorého platnosť skúmame.<br><strong>Axióma</strong> – východiskové tvrdenie prijaté v matematickej teórii bez dôkazu.</p>",
        "model": "<strong>VÝROKY</strong><br>Výrok je oznamovacia veta, o ktorej možno jednoznačne rozhodnúť, či je pravdivá alebo nepravdivá.<br>Výroky označujeme veľkými písmenami A, B, C, …<br>Pravdivostná hodnota: 1 – pravdivý výrok; 0 – nepravdivý výrok.<br>Príklady: A: Číslo 13 je prvočíslo. – 1. B: Číslo 7 nie je prvočíslo. – 0.<br>Otázka, príkaz ani otvorená veta s neurčenou premennou nie sú výrokom.<br>Otvorená veta: x + 3 = 7 – jej pravdivosť závisí od hodnoty premennej x.<br>Definícia – zavádza alebo vymedzuje matematický pojem.<br>Tvrdenie – matematická veta, ktorej pravdivosť posudzujeme.<br>Hypotéza – predpokladané tvrdenie, ktorého platnosť skúmame.<br>Axióma – východiskové tvrdenie prijaté v matematickej teórii bez dôkazu."
      },
      {
        "id": "exit-1",
        "type": "choice",
        "phase": "3 · EXIT TICKET",
        "skill": "Výrok a pravdivostná hodnota",
        "question": "Veta „Číslo 7 nie je prvočíslo.“ – ktorá odpoveď je správna?",
        "options": [
          "Je to nepravdivý výrok – 0.",
          "Nie je to výrok.",
          "Je to pravdivý výrok – 1."
        ],
        "answer": 0,
        "correct": "Je to výrok a má pravdivostnú hodnotu 0.",
        "hint": "Najprv rozhodni, či veta niečo jednoznačne tvrdí. Potom over pravdivosť."
      },
      {
        "id": "exit-2",
        "type": "choice",
        "phase": "3 · EXIT TICKET",
        "skill": "Otvorená veta",
        "question": "Je veta „7x − 3 = 18.“ bez určenej hodnoty x výrokom?",
        "options": [
          "Nie",
          "Áno"
        ],
        "answer": 0,
        "correct": "Nie. Bez určenej hodnoty x pravdivosť závisí od premennej; ide o otvorenú vetu.",
        "hint": "Vieš bez hodnoty x priradiť jednej vete práve 1 alebo 0?"
      },
      {
        "id": "exit-3",
        "type": "choice",
        "phase": "3 · EXIT TICKET",
        "skill": "Výrok a pravdivostná hodnota",
        "question": "Veta „Rovnica 3x = 0 má jeden reálny koreň.“ – ktorá odpoveď je správna?",
        "options": [
          "Nie je to výrok.",
          "Je to nepravdivý výrok – 0.",
          "Je to pravdivý výrok – 1."
        ],
        "answer": 2,
        "correct": "Je to pravdivý výrok. Rovnica má práve jedno riešenie x = 0.",
        "hint": "Vyrieš rovnicu a potom rozhodni o pravdivosti vety."
      },
      {
        "id": "zbierka", "type": "taskList", "phase": "4 · ZBIERKA", "skill": "Výrok a pravdivostná hodnota",
        "title": "Je to výrok?",
        "html": "<p class=\"muted\">Pri každej vete rozhodni: je to výrok? Ak áno, urč aj pravdivostnú hodnotu 1/0. Odfajkni si úlohu, keď máš rozhodnuté — riešenie si over tlačidlom.</p>",
        "items": [
          { "level": "zaklad", "text": "Žilinský kraj.", "answer": "Nie je to výrok — je to iba slovné spojenie (fragment), nie oznamovacia veta." },
          { "level": "zaklad", "text": "Bratislava je hlavné mesto SR.", "answer": "Je to výrok, hodnota 1 (pravdivý)." },
          { "level": "zaklad", "text": "Žilina je hlavné mesto Poľska.", "answer": "Je to výrok, hodnota 0 (nepravdivý) — hlavné mesto Poľska je Varšava." },
          { "level": "zaklad", "text": "Riešte nerovnicu!", "answer": "Nie je to výrok — je to príkaz." },
          { "level": "rozsirenie", "text": "Obsah kruhu s polomerom r je 2πr.", "answer": "Je to výrok, hodnota 0 (nepravdivý) — obsah kruhu je πr²; 2πr je vzorec pre obvod kružnice." },
          { "level": "rozsirenie", "text": "2x + 3 < 0", "answer": "Nie je to výrok — je to otvorená veta, x nie je určené." },
          { "level": "rozsirenie", "text": "Základy matematickej logiky.", "answer": "Nie je to výrok — je to názov/nadpis, nie oznamovacia veta." },
          { "level": "rozsirenie", "text": "Susedné strany pravouholníka sú zhodné.", "answer": "Je to výrok, hodnota 0 (nepravdivý) — vo všeobecnom pravouholníku (obdĺžniku) susedné strany zhodné nie sú." },
          { "level": "bonus", "text": "a) Pre každé reálne číslo x platí, že 0 · x = 0.  b) Pre každé reálne číslo x platí, že 0 · x", "answer": "a) Je to výrok, hodnota 1 (pravdivý). b) Nie je to výrok — veta nie je dokončená, chýba jej záver." },
          { "level": "bonus", "text": "a) Existuje pravouholník, ktorého susedné strany sú zhodné.  b) V každom pravouholníku sú každé dve susedné strany zhodné.", "answer": "a) Je to výrok, hodnota 1 (pravdivý) — napríklad štvorec je pravouholník so zhodnými susednými stranami. b) Je to výrok, hodnota 0 (nepravdivý) — vo všeobecnom pravouholníku to neplatí." },
          { "level": "bonus", "text": "(x + 1)² = x² + 1", "answer": "Nie je to výrok — je to otvorená veta s neurčenou premennou x (platí iba pre x = 0, pre iné x nie)." }
        ]
      },
      {
        "id": "zhrnutie",
        "type": "info",
        "phase": "5 · ZHRNUTIE",
        "title": "Čo si sa dnes naučil/a",
        "html": "<ul><li>Výrok je oznamovacia veta s jednoznačnou pravdivostnou hodnotou 1 alebo 0.</li><li>Otázka, príkaz a otvorená veta s neurčenou premennou výrokom nie sú.</li><li>Definícia, tvrdenie, hypotéza a axióma sú štyri rôzne úlohy matematickej vety.</li><li>Overenie na niekoľkých príkladoch ešte nie je dôkaz.</li></ul>",
        "continueLabel": "Na záver sa zhodnotím"
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "5 · ZÁVER",
        "title": "Ako tomu rozumieš?",
        "skills": [
          "výrok / nevýrok",
          "pravdivostná hodnota 1/0",
          "otvorená veta",
          "definícia, tvrdenie, hypotéza, axióma"
        ],
        "prompt": "Označ, ako isto sa cítiš pri jednotlivých častiach. Toto nie je známka."
      }
    ]
  }
});
