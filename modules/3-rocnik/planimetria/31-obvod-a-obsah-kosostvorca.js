MathPlatform.registerModule({
  "id": "3-u02-h031",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 31 · Obvod a obsah kosoštvorca",
    "prerequisites": [
      "kosoštvorec ako štvoruholník so štyrmi rovnakými stranami (hodina 25)",
      "obvod a obsah štvorca, obdĺžnika a lichobežníka (hodiny 26–29)",
      "Pytagorova veta z 2. ročníka (pravouhlý trojuholník)"
    ],
    "planContent": [
      "Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka."
    ],
    "planPerformance": [
      "Poznať a vedieť opísať vlastnosti základných rovinných útvarov.",
      "Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov."
    ],
    "goals": [
      "Modul je zameraný na obsah písomky (vzorce, vlastnosti útvarov, viackrokové výpočty s Pytagorovou vetou, slovná úloha s jednotkami); digitálna časť je skrátená na približne 20–25 minút.",
      "vymenovať vlastnosti kosoštvorca: štyri rovnaké strany, kolmé uhlopriečky, ktoré sa delia na polovice",
      "vypočítať obvod o = 4a a obsah S = a·v zo strany a výšky",
      "vypočítať obsah z uhlopriečok S = e·f/2 a vysvetliť faktor ½",
      "pomocou Pytagorovej vety v pravouhlom trojuholníku s odvesnami e/2 a f/2 určiť stranu alebo chýbajúcu uhlopriečku"
    ],
    "competencies": [
      "prepájať obrázok (uhlopriečky, výška) so vzorcom a so slovným zadaním",
      "vybrať vzorec podľa toho, aké údaje sú v úlohe zadané",
      "zdôvodniť S = e·f/2 pomocou kosoštvorca vpísaného do obdĺžnika",
      "uvádzať jednotky a rozlišovať obvod (cm) od obsahu (cm²)"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie: modelovanie (dlaždice, záhony), presný matematický jazyk a argumentácia."
    ],
    "flow": [
      "0–3 min: úvod a zhrnutie vlastností a vzorcov (explain)",
      "3–10 min: triedenie tvrdení a priradenie vzorca (zameranie na písomku)",
      "10–18 min: viackrokové výpočty (strana z uhlopriečok → obvod → obsah), nájdi chybu, slovná úloha s dlaždicou",
      "18–30 min: samostatná úloha na papieri (bez mobilu)",
      "zbierka podľa úrovní ako domáca úloha alebo na ďalšiu hodinu"
    ],
    "diagnostics": [
      "Zabudnuté ½ pri S = e·f/2 (obsah vyjde dvojnásobný).",
      "Do Pytagorovej vety žiak dosadí celé uhlopriečky namiesto polovíc.",
      "Zámena výšky so stranou alebo obvodu s obsahom; chýbajúce jednotky (cm vs. cm²).",
      "Žiak predpokladá, že uhlopriečky kosoštvorca sú rovnaké (zámena so štvorcom)."
    ],
    "partialUse": [
      "Na krátku hodinu stačí zhrnutie, triedenie tvrdení a výpočty do Pytagorovej vety; zbierka ide ako domáca úloha.",
      "Zbierka je trojúrovňová (základ, rozšírenie, bonus) — podľa triedy sa dá použiť iba základ."
    ]
  },
  "student": {
    "title": "Obvod a obsah kosoštvorca",
    "subtitle": "Obrázok → vzorec → výpočet → vysvetlenie",
    "intro": "Najprv si pozri vlastnosti kosoštvorca na obrázku, potom odvodíme tri vzorce — pre obvod a dva pre obsah — a vyskúšaš ich na číslach.",
    "estimatedTime": "28–35 min",
    "activities": [
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "vlastnosti kosoštvorca",
          "obvod o = 4a a obsah S = a·v, S = e·f/2",
          "strana z uhlopriečok pomocou Pytagorovej vety"
        ]
      },
      {
        "id": "ex-summary",
        "type": "explain",
        "phase": "POUČKA",
        "title": "Kosoštvorec: vlastnosti a vzorce",
        "html": "<p><span class=\"hl\">Kosoštvorec</span> má všetky štyri strany rovnako dlhé (a). Štvorec je jeho zvláštny prípad.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 520 300\" role=\"img\" aria-label=\"Kosoštvorec ABCD s uhlopriečkami e a f, ktoré sa pretínajú v bode O pod pravým uhlom\"><polygon points=\"90,165 260,55 430,165 260,275\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><line x1=\"90\" y1=\"165\" x2=\"430\" y2=\"165\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><line x1=\"260\" y1=\"55\" x2=\"260\" y2=\"275\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><circle cx=\"260\" cy=\"165\" r=\"3.5\" fill=\"currentColor\"/><polyline points=\"273,165 273,152 260,152\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"170.7\" y1=\"103.3\" x2=\"179.3\" y2=\"116.7\" stroke=\"currentColor\" stroke-width=\"2.5\" /><line x1=\"349.3\" y1=\"103.3\" x2=\"340.7\" y2=\"116.7\" stroke=\"currentColor\" stroke-width=\"2.5\" /><line x1=\"349.3\" y1=\"226.7\" x2=\"340.7\" y2=\"213.3\" stroke=\"currentColor\" stroke-width=\"2.5\" /><line x1=\"170.7\" y1=\"226.7\" x2=\"179.3\" y2=\"213.3\" stroke=\"currentColor\" stroke-width=\"2.5\" /><text x=\"74\" y=\"172\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >A</text><text x=\"260\" y=\"43\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >B</text><text x=\"446\" y=\"172\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >C</text><text x=\"260\" y=\"301\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >D</text><text x=\"274\" y=\"189\" font-size=\"18\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >O</text><text x=\"150\" y=\"96\" font-size=\"22\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" font-style=\"italic\">a</text><text x=\"160\" y=\"191\" font-size=\"18\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >e/2</text><text x=\"296\" y=\"118\" font-size=\"18\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >f/2</text><text x=\"350\" y=\"155\" font-size=\"18\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >e = AC</text><text x=\"272\" y=\"222\" font-size=\"18\" text-anchor=\"start\" fill=\"currentColor\" font-family=\"system-ui\" >f = BD</text></svg></div><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Uhlopriečky</div><p class=\"term-rule\">Sú na seba <span class=\"hl\">kolmé</span> a navzájom sa <span class=\"hl\">delia na polovice</span>. Nie sú rovnako dlhé (to platí len pri štvorci).</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Uhly</div><p class=\"term-rule\">Protiľahlé uhly sú rovnaké; uhly nemusia byť pravé.</p></div></div><div class=\"formula\">o = 4a &nbsp;&nbsp; S = a · v &nbsp;&nbsp; S = <span class=\"frac\"><span class=\"frac-num\">e · f</span><span class=\"frac-den\">2</span></span><span class=\"formula-note\">a = strana, v = výška na stranu, e, f = uhlopriečky; obvod v cm, obsah v cm².</span></div><div class=\"formula\">a² = (e/2)² + (f/2)²<span class=\"formula-note\">Strana je prepona pravouhlého trojuholníka s odvesnami e/2 a f/2 — do vety patria polovice uhlopriečok.</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Uhlopriečky: e = 18 cm, f = 24 cm. Polovice: 9 cm a 12 cm.</p><p>a² = 9² + 12² = 81 + 144 = 225, a = <strong>15 cm</strong></p><p>o = 4·15 = <strong>60 cm</strong>; S = 18·24/2 = <strong>216 cm²</strong></p></div><div class=\"warning\"><strong>Pozor:</strong> Nezabudni na ½ pri S = e·f/2 a nedosadzuj do Pytagorovej vety celé uhlopriečky.</div>",
        "remember": "Kosoštvorec: o = 4a, S = a·v = e·f/2, a² = (e/2)² + (f/2)²."
      },
      {
        "id": "sort-props",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "vlastnosti kosoštvorca",
        "title": "Čo platí pre každý kosoštvorec?",
        "question": "Rozhodni o každom tvrdení, či platí pre KAŽDÝ kosoštvorec.",
        "labels": [
          "Platí vždy",
          "Neplatí vždy"
        ],
        "items": [
          {
            "text": "Všetky strany sú rovnako dlhé.",
            "answer": true,
            "why": "To je samotná definícia kosoštvorca."
          },
          {
            "text": "Uhlopriečky sú na seba kolmé.",
            "answer": true,
            "why": "Vždy — preto vzniknú štyri pravouhlé trojuholníky."
          },
          {
            "text": "Uhlopriečky majú rovnakú dĺžku.",
            "answer": false,
            "why": "To platí len pri štvorci; bežný kosoštvorec má jednu uhlopriečku dlhšiu."
          },
          {
            "text": "Všetky uhly sú pravé.",
            "answer": false,
            "why": "Kosoštvorec môže byť „naklonený“; pravé uhly má len štvorec."
          },
          {
            "text": "Protiľahlé uhly sú rovnaké.",
            "answer": true,
            "why": "Kosoštvorec je rovnobežník, a tam sú protiľahlé uhly rovnaké."
          },
          {
            "text": "Uhlopriečka rozpolí uhol pri vrchole.",
            "answer": true,
            "why": "Uhlopriečky kosoštvorca sú zároveň osami jeho uhlov."
          },
          {
            "text": "Obsah sa vždy rovná a².",
            "answer": false,
            "why": "S = a² platí iba pre štvorec; pri naklonenom kosoštvorci je obsah menší."
          }
        ]
      },
      {
        "id": "n-s1",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "obsah cez výšku",
        "title": "Obsah zo strany a výšky",
        "prompt": "Kosoštvorcový záhon má stranu a = 12 m a výšku v = 7 m. Aký je jeho obsah v m²?",
        "validate": "exact",
        "answer": 84,
        "success": "S = a·v = 12·7 = 84 m².",
        "hint": "Obsah = strana krát výška (nie strana krát strana).",
        "reveal": "Správne je 84: S = 12·7 = 84 m²."
      },
      {
        "id": "c-ef",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "obsah cez uhlopriečky",
        "question": "Kosoštvorec má uhlopriečky e a f. Ktorý vzorec dáva jeho obsah?",
        "options": [
          "S = e·f",
          "S = (e + f)/2",
          "S = e·f/2",
          "S = 2·e·f"
        ],
        "answer": 2,
        "correct": "Kosoštvorec je polovica obdĺžnika e × f, preto S = e·f/2.",
        "hint": "Pomôž si obrázkom: kosoštvorec vpísaný do obdĺžnika zaberá zlomok jeho plochy."
      },
      {
        "id": "n-o2",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "obvod z uhlopriečok",
        "title": "Obvod z uhlopriečok",
        "prompt": "Kosoštvorec má uhlopriečky 48 cm a 14 cm. Aký je jeho obvod v cm?",
        "validate": "exact",
        "answer": 100,
        "success": "Polovice 24 a 7, a² = 576 + 49 = 625, a = 25 cm, o = 4·25 = 100 cm.",
        "hint": "Najprv strana: polovice uhlopriečok a Pytagorova veta; potom ešte vynásob štyrmi.",
        "reveal": "Správne je 100: a = 25 cm, o = 4·25."
      },
      {
        "id": "m-formulas",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "voľba vzorca",
        "title": "Ktorý vzorec použiješ?",
        "labels": [
          "S = a·v",
          "S = e·f/2",
          "o = 4a",
          "a² = (e/2)² + (f/2)²"
        ],
        "items": [
          {
            "text": "Poznáš stranu a výšku, hľadáš obsah.",
            "answer": "S = a·v"
          },
          {
            "text": "Poznáš obe uhlopriečky, hľadáš obsah.",
            "answer": "S = e·f/2"
          },
          {
            "text": "Poznáš stranu, hľadáš obvod.",
            "answer": "o = 4a"
          },
          {
            "text": "Poznáš obe uhlopriečky, hľadáš dĺžku strany.",
            "answer": "a² = (e/2)² + (f/2)²"
          },
          {
            "text": "Poznáš stranu a jednu uhlopriečku, hľadáš druhú uhlopriečku.",
            "answer": "a² = (e/2)² + (f/2)²"
          },
          {
            "text": "Poznáš obvod, hľadáš stranu.",
            "answer": "o = 4a"
          }
        ]
      },
      {
        "id": "err2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "Pytagorova veta",
        "question": "Žiak riešil úlohu: kosoštvorec má uhlopriečky 16 cm a 12 cm. Napísal: a² = 16² + 12² = 400, a = 20 cm, obvod 80 cm. Kde urobil chybu?",
        "options": [
          "Obvod kosoštvorca je 2a, nie 4a.",
          "Do Pytagorovej vety patria polovice uhlopriečok (8 cm a 6 cm), nie celé uhlopriečky.",
          "Pytagorova veta tu neplatí, lebo uhlopriečky nie sú kolmé.",
          "Žiadna chyba, strana je 20 cm."
        ],
        "answer": 1,
        "correct": "Správne: a² = 8² + 6² = 100, a = 10 cm, o = 40 cm. Uhlopriečky sú kolmé a polovia sa — pravouhlý trojuholník má odvesny e/2 a f/2.",
        "hint": "Aké dlhé sú odvesny pravouhlého trojuholníka, ktorý vznikne v jednej štvrtine kosoštvorca?"
      },
      {
        "id": "c-tile",
        "type": "choice",
        "phase": "PRENES",
        "skill": "modelovanie",
        "question": "Dlaždica tvaru kosoštvorca má uhlopriečky 40 cm a 30 cm. Akú plochu zaberie jedna dlaždica?",
        "options": [
          "600 cm²",
          "1 200 cm²",
          "70 cm²",
          "50 cm²"
        ],
        "answer": 0,
        "correct": "S = 40·30/2 = 600 cm². (Strana dlaždice je 25 cm a obvod 100 cm — ale tie sa tu nepýtali.)",
        "hint": "Máme obe uhlopriečky a hľadáme plochu."
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Samostatná úloha do zošita",
        "html": "<p>Odlož mobil. Kosoštvorec ABCD má uhlopriečky <strong>e = 30 cm</strong> a <strong>f = 16 cm</strong>.</p><ol><li>Načrtni ho, vyznač uhlopriečky, bod O a pravý uhol.</li><li>Vypočítaj dĺžku strany a pomocou Pytagorovej vety.</li><li>Vypočítaj obvod kosoštvorca.</li><li>Vypočítaj obsah kosoštvorca z uhlopriečok.</li><li>Vypočítaj výšku v na stranu a a zaokrúhli ju na desatiny cm. (Pomôž si tým, že obsah vieš počítať dvoma spôsobmi.)</li></ol><p>Zapisuj postup, jednotky a odpoveď celou vetou.</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: kosoštvorec",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Rieš v zošite, výsledok vždy s jednotkou. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až po vlastnom pokuse.</p>",
        "items": [
          {
            "level": "zaklad",
            "html": "Kosoštvorec má stranu a = 15 cm a výšku v = 9 cm. Vypočítaj obsah.",
            "answer": "S = 15·9 = <strong>135 cm²</strong>"
          },
          {
            "level": "zaklad",
            "html": "Kosoštvorec má uhlopriečky e = 12 cm a f = 7 cm. Vypočítaj obsah.",
            "answer": "S = 12·7/2 = 84/2 = <strong>42 cm²</strong>"
          },
          {
            "level": "zaklad",
            "html": "Obsah kosoštvorca je 60 cm², jeho strana má 12 cm. Vypočítaj výšku na túto stranu.",
            "answer": "v = S : a = 60 : 12 = <strong>5 cm</strong>"
          },
          {
            "level": "rozsirenie",
            "html": "Kosoštvorec má uhlopriečky 10 cm a 24 cm. Vypočítaj stranu, obvod a obsah.",
            "answer": "Polovice: 5 cm a 12 cm; a² = 25 + 144 = 169, <strong>a = 13 cm</strong>.<br>o = 4·13 = <strong>52 cm</strong>; S = 10·24/2 = <strong>120 cm²</strong>"
          },
          {
            "level": "rozsirenie",
            "html": "Kosoštvorec má stranu 17 cm a uhlopriečku 30 cm. Vypočítaj druhú uhlopriečku a obsah.",
            "answer": "e/2 = 15; (f/2)² = 17² − 15² = 289 − 225 = 64, f/2 = 8, <strong>f = 16 cm</strong>.<br>S = 30·16/2 = <strong>240 cm²</strong>"
          },
          {
            "level": "rozsirenie",
            "html": "Záhon v tvare kosoštvorca má obvod 100 m a výšku 20 m. Koľko eur stojí vysiaty trávnik, ak 1 m² stojí 4 €?",
            "answer": "a = 100 : 4 = 25 m; S = 25·20 = 500 m²; cena = 500·4 = <strong>2 000 €</strong>"
          },
          {
            "level": "bonus",
            "html": "Uhlopriečky kosoštvorca sú v pomere 4 : 3 a strana má 20 cm. Vypočítaj uhlopriečky a obsah.",
            "answer": "Polovice sú 4k a 3k; (4k)² + (3k)² = 25k² = 20², takže 5k = 20, k = 4. Polovice 16 a 12, <strong>e = 32 cm, f = 24 cm</strong>; S = 32·24/2 = <strong>384 cm²</strong>"
          },
          {
            "level": "bonus",
            "html": "Kosoštvorec má strany 5 cm a uhlopriečku 8 cm. Vypočítaj druhú uhlopriečku, obsah a výšku na stranu.",
            "answer": "e/2 = 4, (f/2)² = 25 − 16 = 9, f/2 = 3, <strong>f = 6 cm</strong>; S = 8·6/2 = <strong>24 cm²</strong>; v = S : a = 24 : 5 = <strong>4,8 cm</strong>"
          }
        ]
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Pri každej zručnosti označ, ako sa teraz cítiš.",
        "skills": [
          "viem vymenovať vlastnosti kosoštvorca",
          "viem vypočítať obvod a obsah zo strany a výšky",
          "viem vypočítať obsah z uhlopriečok",
          "viem použiť Pytagorovu vetu v štvrtine kosoštvorca"
        ]
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 3,
        "html": "Kosoštvorec má stranu 14 cm. Vypočítaj jeho obvod.",
        "answer": "o = 4·14 = 56 cm"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 3,
        "html": "Kosoštvorec má stranu 9 cm a výšku 6 cm. Vypočítaj jeho obsah.",
        "answer": "S = 9·6 = 54 cm²"
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 3,
        "html": "Uhlopriečky kosoštvorca majú 20 cm a 9 cm. Vypočítaj jeho obsah.",
        "answer": "S = 20·9/2 = 90 cm²"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 6,
        "html": "Kosoštvorec má uhlopriečky 60 cm a 80 cm. Vypočítaj jeho stranu, obvod a obsah.",
        "answer": "Polovice 30 a 40, a² = 900 + 1 600 = 2 500, a = 50 cm; o = 200 cm; S = 60·80/2 = 2 400 cm²"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 6,
        "html": "Kosoštvorec má stranu 25 cm a uhlopriečku 14 cm. Vypočítaj druhú uhlopriečku a obsah.",
        "answer": "e/2 = 7, (f/2)² = 625 − 49 = 576, f/2 = 24, f = 48 cm; S = 14·48/2 = 336 cm²"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 6,
        "html": "Obsah kosoštvorca je 120 cm² a jeho uhlopriečky sú v pomere 5 : 12. Vypočítaj uhlopriečky, stranu a obvod.",
        "answer": "e = 5k, f = 12k; 5k·12k/2 = 30k² = 120, k = 2; e = 10 cm, f = 24 cm; polovice 5 a 12, a = 13 cm; o = 52 cm"
      }
    ]
  }
});
