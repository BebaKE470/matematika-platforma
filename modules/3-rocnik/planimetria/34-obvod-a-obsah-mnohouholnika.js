MathPlatform.registerModule({
  "id": "3-u02-h034",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 34 · Obvod a obsah mnohouholníka",
    "prerequisites": [
      "základná planimetria zo ZŠ",
      "Pytagorova veta a goniometria trojuholníka z 2. ročníka",
      "logika, množiny a algebraické úpravy z 1. ročníka",
      "goniometria z predchádzajúceho tematického celku 3. ročníka",
      "učivo hodín 22–33"
    ],
    "planContent": [
      "Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka."
    ],
    "planPerformance": [
      "Poznať a vedieť opísať vlastnosti základných rovinných útvarov.",
      "Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov."
    ],
    "goals": [
      "rozdeliť mnohouholník na trojuholníky a obdĺžniky a obsah určiť sčítaním ich obsahov",
      "rozhodnúť, kedy je výhodnejšie obsah časti odčítať od celku",
      "odvodiť a použiť súčet vnútorných uhlov (n − 2) · 180° a veľkosť uhla pravidelného n-uholníka",
      "správne zapisovať jednotky a rozlišovať obvod od obsahu",
      "Modul je zameraný na obsah písomky (priradenie vzorca k útvaru, pravda/nepravda o vlastnostiach, viackrokové výpočty, slovná úloha s jednotkami); digitálna časť je skrátená na cca 20–25 min."
    ],
    "competencies": [
      "prechod medzi obrázkom, náčrtom a výpočtom",
      "rozloženie zložitého útvaru na známe časti",
      "využitie Pytagorovej vety na dopočítanie neznámej strany alebo výšky",
      "matematická argumentácia (prečo n − 2) a kontrola výsledku"
    ],
    "enrichment": [
      "výška rovnostranného trojuholníka a√3/2 ako predpríprava na ďalšie úlohy",
      "Maturitný štandard je iba obohatenie: modelovanie reálnych plôch (pozemok, dvor, rám) a presný matematický jazyk."
    ],
    "flow": [
      "0–5 min: vzorce a zložený útvar (L-útvar) — spoločne na tabuli",
      "5–8 min: uhly a uhlopriečky pravidelného n-uholníka",
      "8–22 min: platforma: priradenie vzorca, voľba postupu, uhly, trávnik a obrubník, hľadanie chyby",
      "22–40 min: úloha BEZ MOBILU a zbierka podľa úrovne",
      "40–45 min: zhrnutie podľa živých výsledkov"
    ],
    "diagnostics": [
      "do obvodu započíta uhlopriečky alebo pomocné čiary",
      "zamieňa n a n − 2 pri súčte uhlov, resp. súčet uhlov a jeden uhol",
      "berie výšku rovnostranného trojuholníka za jeho stranu",
      "pri útvare s otvorom zabudne na vnútorný okraj alebo odčíta nesprávne rozmery",
      "chýbajúce alebo zlé jednotky (cm namiesto cm²)"
    ],
    "partialUse": [
      "pri nedostatku času vynechať bonusovú položku zbierky a hľadanie chyby",
      "mobil nenahrádza ručné počítanie; náčrty a výpočty sa robia v zošite",
      "pre žiakov so ŠVVP: tabuľka vzorcov z úvodu a hotový náčrt L-útvaru"
    ]
  },
  "student": {
    "title": "Obvod a obsah mnohouholníka",
    "subtitle": "Rozdeľ → vypočítaj → sčítaj alebo odčítaj",
    "intro": "Zložený útvar rozdelíš na známe časti, spočítaš uhly pravidelného n-uholníka a počet jeho uhlopriečok. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "20–25 min",
    "activities": [
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "počítať obsah a obvod zloženého útvaru (sčítaním aj odčítaním)",
          "určiť súčet vnútorných uhlov, uhol pravidelného n-uholníka a počet uhlopriečok"
        ]
      },
      {
        "id": "formulas",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Vzorce a zložený útvar",
        "html": "<p>Z hodín 22–33 vieš počítať obvod a obsah základných útvarov. Pripomeň si ich, dnes ich budeme skladať dokopy:</p><div class=\"term-list\">\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Obdĺžnik a štvorec</div><p class=\"term-rule\">S = a · b, resp. S = a²; obvod o = 2(a + b), resp. 4a.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Trojuholník</div><p class=\"term-rule\">S = <span class=\"frac\"><span class=\"frac-num\">a · v</span><span class=\"frac-den\">2</span></span>, kde v je výška na stranu a. Obvod je súčet troch strán.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Lichobežník</div><p class=\"term-rule\">S = <span class=\"frac\"><span class=\"frac-num\">(a + c) · v</span><span class=\"frac-den\">2</span></span>.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">Rovnobežník a kosoštvorec</div><p class=\"term-rule\">S = a · v; kosoštvorec aj S = <span class=\"frac\"><span class=\"frac-num\">e · f</span><span class=\"frac-den\">2</span></span> (e, f sú uhlopriečky).</p></div></div>\n<p>Ešte dve pomôcky: <strong>Pytagorova veta</strong> (c² = a² + b² v pravouhlom trojuholníku) a to, že <strong>súčet uhlov v trojuholníku je 180°</strong>.</p><p>Zložený útvar počítaš <strong>sčítaním</strong> obsahov častí, alebo <strong>odčítaním</strong> vynechanej časti od väčšieho celku. Do obvodu patria len strany po okraji útvaru, nie pomocné čiary.</p><h3>Odčítanie: L-útvar</h3><div class=\"logic-visual\"><svg viewBox=\"0 0 760 300\" role=\"img\" aria-label=\"Útvar tvaru L: obdĺžnik 10 cm krát 8 cm, z ktorého je vpravo hore vyrezaný obdĺžnik 4 cm krát 3 cm. Strany majú dĺžky 6, 3, 4, 5, 10 a 8 cm.\"><g font-family=\"system-ui\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\"><polygon points=\"230,40 380,40 380,115 480,115 480,240 230,240\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><rect x=\"380\" y=\"40\" width=\"100\" height=\"75\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><text x=\"305\" y=\"28\">6 cm</text><text x=\"364\" y=\"83\" text-anchor=\"end\">3 cm</text><text x=\"430\" y=\"140\">4 cm</text><text x=\"504\" y=\"180\" text-anchor=\"start\">5 cm</text><text x=\"355\" y=\"268\">10 cm</text><text x=\"206\" y=\"145\" text-anchor=\"end\">8 cm</text><text x=\"430\" y=\"83\" font-size=\"15\">vyrezané</text><text x=\"305\" y=\"150\" font-size=\"18\">L-útvar</text></g></svg></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2 · L-útvar dvoma spôsobmi</span><p><strong>Odčítaním:</strong> celý obdĺžnik 10 · 8 = 80 cm², vyrezaný obdĺžnik 4 · 3 = 12 cm², S = 80 − 12 = <strong>68 cm²</strong>.</p><p><strong>Sčítaním:</strong> ľavý obdĺžnik 6 · 8 = 48 cm² a pravý 4 · 5 = 20 cm², S = 48 + 20 = <strong>68 cm²</strong>. Oba spôsoby dávajú rovnaký výsledok.</p><p><strong>Obvod:</strong> 6 + 3 + 4 + 5 + 10 + 8 = <strong>36 cm</strong>. Je rovnaký ako obvod celého obdĺžnika 2(10 + 8), pretože vyrezaný roh obvod nezmenil.</p></div>\n<div class=\"warning\"><strong>Pozor:</strong> Obvod L-útvaru sa rovná obvodu veľkého obdĺžnika len pri vyrezanom <em>rohu</em>. Keby bol otvor uprostred, obvod by sa zväčšil o jeho celý okraj.</div>",
        "remember": "Obsah: sčítaj časti alebo odčítaj vynechané. Obvod: len strany po okraji. Chýbajúcu výšku dopočítaj Pytagorovou vetou."
      },
      {
        "id": "angles",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Uhly a uhlopriečky n-uholníka",
        "html": "<p>Z jedného vrcholu n-uholníka vedieme uhlopriečky do vrcholov, ktoré s ním nesusedia. Vznikne n − 2 trojuholníkov, každý so súčtom uhlov 180°.</p><div class=\"formula\"><span class=\"mini-label\">SÚČET VNÚTORNÝCH UHLOV</span>(n − 2) · 180°</div><p><span class=\"hl\">Pravidelný n-uholník</span> má všetky strany aj všetky vnútorné uhly rovnaké, preto je jeden uhol a obvod:</p><div class=\"formula\"><span class=\"mini-label\">JEDEN UHOL · OBVOD</span>α = <span class=\"frac\"><span class=\"frac-num\">(n − 2) · 180°</span><span class=\"frac-den\">n</span></span> &nbsp;&nbsp; o = n · a</div><p>Z každého z n vrcholov vedie n − 3 uhlopriečok a každú sme započítali dvakrát:</p><div class=\"formula\"><span class=\"mini-label\">POČET UHLOPRIEČOK</span><span class=\"frac\"><span class=\"frac-num\">n · (n − 3)</span><span class=\"frac-den\">2</span></span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD · pravidelný osemuholník</span><p>Súčet uhlov: 6 · 180° = 1080°. Jeden uhol: 1080° : 8 = <strong>135°</strong>.</p><p>Uhlopriečok: 8 · 5 : 2 = <strong>20</strong>. Obvod pri strane 5 cm: 8 · 5 = <strong>40 cm</strong>.</p></div><div class=\"warning\"><strong>Pozor:</strong> Vo vzorci je n − 2, nie n. A „súčet uhlov“ nie je „jeden uhol“ — pri pravidelnom n-uholníku ešte delíš číslom n.</div>",
        "remember": "Súčet uhlov (n − 2) · 180°; jeden uhol pravidelného n-uholníka dostaneš delením n; uhlopriečok je n(n − 3) : 2."
      },
      {
        "id": "match",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "vzorce",
        "title": "Čo vyjadruje ktorý zápis?",
        "labels": [
          "n − 2",
          "(n − 2) · 180°",
          "(n − 2) · 180° : n",
          "n · a",
          "n · (n − 3) : 2"
        ],
        "items": [
          {
            "text": "počet trojuholníkov pri delení n-uholníka z jedného vrcholu",
            "answer": "n − 2"
          },
          {
            "text": "súčet vnútorných uhlov n-uholníka",
            "answer": "(n − 2) · 180°"
          },
          {
            "text": "jeden vnútorný uhol pravidelného n-uholníka",
            "answer": "(n − 2) · 180° : n"
          },
          {
            "text": "obvod pravidelného n-uholníka so stranou a",
            "answer": "n · a"
          },
          {
            "text": "počet všetkých uhlopriečok n-uholníka",
            "answer": "n · (n − 3) : 2"
          }
        ]
      },
      {
        "id": "sort",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "voľba postupu",
        "title": "Sčítame, alebo odčítame?",
        "question": "Rozhodni, ktorý postup je pri obsahu prirodzený.",
        "labels": [
          "Sčítame obsahy častí",
          "Odčítame vynechanú časť od celku"
        ],
        "items": [
          {
            "text": "Domček: obdĺžnik so strechou v tvare trojuholníka navrchu",
            "answer": true,
            "why": "Útvar sa skladá z dvoch častí, ktoré k sebe priliehajú — obsahy sčítame."
          },
          {
            "text": "Obdĺžnikový pozemok s obdĺžnikovým bazénom uprostred; zaujíma nás obsah trávnika",
            "answer": false,
            "why": "Trávnik je celý pozemok bez bazéna — od obsahu pozemku odčítame obsah bazéna."
          },
          {
            "text": "Písmeno T zložené z dvoch obdĺžnikov",
            "answer": true,
            "why": "Dva obdĺžniky sa nepretínajú — obsahy sčítame."
          },
          {
            "text": "Štvorcový rám: veľký štvorec s menším štvorcovým otvorom uprostred",
            "answer": false,
            "why": "Materiál rámu je celý štvorec bez otvoru — obsahy odčítame."
          },
          {
            "text": "Päťuholník rozdelený uhlopriečkami z jedného vrcholu na tri trojuholníky",
            "answer": true,
            "why": "Tri časti vyplnia celý útvar bez medzier — obsahy sčítame."
          },
          {
            "text": "Obdĺžnikový plech so štvorcovým otvorom; zaujíma nás obsah zostávajúceho plechu",
            "answer": false,
            "why": "Zvyšný plech je celok bez otvoru — obsah otvoru odčítame."
          }
        ]
      },
      {
        "id": "n1",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "uhly",
        "title": "Uhol pravidelného dvanásťuholníka",
        "prompt": "Aký veľký je jeden vnútorný uhol pravidelného dvanásťuholníka? Zapíš počet stupňov.",
        "validate": "exact",
        "answer": 150,
        "success": "Súčet uhlov (12 − 2) · 180° = 1800°, jeden uhol 1800° : 12 = 150°.",
        "hint": "Najprv súčet uhlov (n − 2) · 180°, potom ho vydeľ počtom uhlov n.",
        "reveal": "Správne je 150°: súčet 10 · 180° = 1800° a 1800° : 12 = 150°."
      },
      {
        "id": "n2",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "uhly",
        "title": "Koľko strán má mnohouholník?",
        "prompt": "Pravidelný mnohouholník má každý vnútorný uhol 156°. Koľko má strán?",
        "validate": "exact",
        "answer": 15,
        "success": "Z rovnice (n − 2) · 180 = 156n dostaneme 24n = 360, teda n = 15. Skúška: 13 · 180° : 15 = 156°.",
        "hint": "Zapíš rovnicu (n − 2) · 180 = 156 · n a vyrieš ju.",
        "reveal": "Správne je 15: 180n − 360 = 156n, 24n = 360, n = 15."
      },
      {
        "id": "n3",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "zložený útvar",
        "title": "Obsah trávnika",
        "prompt": "Dvor má rozmery 15 m × 10 m a bazén 6 m × 4 m (podľa obrázka). Aký veľký je trávnik? Zapíš obsah v m².",
        "validate": "exact",
        "answer": 126,
        "success": "15 · 10 = 150 m², bazén 6 · 4 = 24 m², trávnik 150 − 24 = 126 m².",
        "hint": "Od obsahu celého dvora odčítaj obsah bazéna.",
        "reveal": "Správne je 126: 150 − 24 = 126 m²."
      },
      {
        "id": "n4",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "obvod",
        "title": "Obrubník okolo trávnika",
        "prompt": "Okolo trávnika (dvor 15 m × 10 m, bazén 6 m × 4 m) treba položiť obrubník pozdĺž vonkajšieho aj vnútorného okraja. Koľko metrov obrubníka je potrebných?",
        "validate": "exact",
        "answer": 70,
        "success": "Vonkajší okraj 2(15 + 10) = 50 m, vnútorný okraj okolo bazéna 2(6 + 4) = 20 m, spolu 70 m.",
        "hint": "Trávnik má dva okraje. Vypočítaj obvod dvora a obvod bazéna. Čo s nimi urobíš, keď oba okraje treba obložiť?",
        "reveal": "Správne je 70: 50 m + 20 m. Pri útvare s otvorom patria do obvodu oba okraje."
      },
      {
        "id": "hunt2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak počítal obvod domčeka (obdĺžnik 8 cm × 5 cm so strechou: trojuholník so základňou 8 cm a výškou 3 cm) a napísal: „o = 8 + 5 + 5 + 8 + 3 = 29 cm.“ Čo je pravda?",
        "options": [
          "Obvod je správny, 29 cm.",
          "Chýba obsah strechy, správne je 29 + 12 = 41 cm.",
          "Do obvodu patria dve strešné strany po 5 cm; čísla 8 a 3 sú rozmery vo vnútri útvaru. Správne je 28 cm.",
          "Strešné strany majú po 3 cm, správne je 8 + 5 + 5 + 3 + 3 = 24 cm."
        ],
        "answer": 2,
        "correct": "Správne: strešná strana je prepona trojuholníka s odvesnami 4 a 3, teda 5 cm. Obvod 8 + 5 + 5 + 5 + 5 = 28 cm.",
        "hint": "Ktoré z uvedených čísiel ležia na hranici útvaru a ktoré sú len pomocné čiary vo vnútri?"
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úlohy na papier",
        "html": "<p>Odlož zariadenie a vyrieš v zošite. Najprv nakresli náčrt a označ údaje, potom počítaj a zapíš odpoveď s jednotkou.</p><ol><li>Útvar má tvar obdĺžnika 12 cm × 7 cm, na ktorého strane dlhej 12 cm stojí rovnoramenný trojuholník so základňou 12 cm a ramenami 10 cm. Vypočítaj obvod a obsah celého útvaru. Výšku trojuholníka urč Pytagorovou vetou.</li><li>Z obdĺžnika 14 cm × 9 cm je v rohu vystrihnutý štvorec so stranou 3 cm. Vypočítaj obsah a obvod zvyšného útvaru dvoma spôsobmi (sčítaním aj odčítaním).</li><li>Aký veľký je vnútorný uhol pravidelného deväťuholníka? A koľko strán má pravidelný mnohouholník s vnútorným uhlom 160°?</li></ol>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: mnohouholníky",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Rieš v zošite: náčrt, údaje, výpočet s jednotkou. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Aký je súčet vnútorných uhlov deväťuholníka?",
            "answer": "(9 − 2) · 180° = 7 · 180° = <strong>1260°</strong>"
          },
          {
            "level": "zaklad",
            "text": "Aký veľký je jeden vnútorný uhol pravidelného päťuholníka?",
            "answer": "(5 − 2) · 180° : 5 = 540° : 5 = <strong>108°</strong>"
          },
          {
            "level": "zaklad",
            "text": "Z obdĺžnika 10 cm × 6 cm je vystrihnutý štvorec 2 cm × 2 cm uprostred. Aký je obsah zvyšného útvaru?",
            "answer": "10 · 6 − 2 · 2 = 60 − 4 = <strong>56 cm²</strong>"
          },
          {
            "level": "zaklad",
            "text": "Útvar je zložený z obdĺžnika 9 cm × 4 cm a štvorca so stranou 4 cm, ktorý k nemu priliehajú celou stranou (spolu vznikne jeden dlhší obdĺžnik). Vypočítaj obsah a obvod.",
            "answer": "S = 9 · 4 + 4 · 4 = 36 + 16 = <strong>52 cm²</strong>. Útvar je obdĺžnik 13 cm × 4 cm, o = 2(13 + 4) = <strong>34 cm</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Vnútorný uhol pravidelného mnohouholníka je 144°. Koľko má strán?",
            "answer": "(n − 2) · 180 = 144n, 36n = 360, n = 10<br><strong>desaťuholník</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Domček: obdĺžnik 12 cm × 7 cm, na ňom rovnoramenný trojuholník (strecha) so základňou 12 cm a ramenami 10 cm. Vypočítaj obsah aj obvod.",
            "answer": "Výška strechy v = √(10² − 6²) = 8 cm. S = 12 · 7 + 12 · 8 : 2 = 84 + 48 = <strong>132 cm²</strong>. o = 12 + 7 + 7 + 10 + 10 = <strong>46 cm</strong>."
          },
          {
            "level": "rozsirenie",
            "text": "Obdĺžnikový pozemok 20 m × 12 m má vnútri okolo celého okraja chodník široký 1 m. Aký je obsah chodníka?",
            "answer": "Vnútorný obdĺžnik: (20 − 2) × (12 − 2) = 18 × 10 = 180 m². Chodník: 240 − 180 = <strong>60 m²</strong>."
          },
          {
            "level": "bonus",
            "text": "Koľko uhlopriečok má pravidelný osemuholník? (Z každého vrcholu vedie n − 3 uhlopriečok, každú sme však započítali dvakrát.)",
            "answer": "Z vrcholu 8 − 3 = 5 uhlopriečok, spolu 8 · 5 : 2 = <strong>20</strong>."
          }
        ]
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; pri 🔴 alebo 🟡 sa vráť k vzorovým príkladom.",
        "skills": [
          "rozdelím mnohouholník na trojuholníky a obdĺžniky",
          "zložený útvar počítam sčítaním aj odčítaním",
          "určím súčet vnútorných uhlov a uhol pravidelného n-uholníka",
          "rozlíšim obvod (dĺžka) a obsah (plocha) a uvádzam jednotky"
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
        "text": "Aký je súčet vnútorných uhlov dvanásťuholníka a aký veľký je jeden uhol pravidelného dvanásťuholníka?",
        "answer": "(12 − 2) · 180° = 1800°; jeden uhol 1800° : 12 = 150°"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 5,
        "text": "Útvar tvaru L vznikol z obdĺžnika 12 cm × 9 cm, z ktorého sme v rohu vyrezali obdĺžnik 5 cm × 4 cm. Vypočítaj obsah a obvod.",
        "answer": "S = 108 − 20 = 88 cm²; o = 2(12 + 9) = 42 cm"
      },
      {
        "id": "w3",
        "level": "rozsirenie",
        "space": 6,
        "text": "Domček: obdĺžnik 10 cm × 6 cm a na ňom rovnoramenný trojuholník so základňou 10 cm a ramenami 13 cm. Vypočítaj obsah a obvod.",
        "answer": "v = √(13² − 5²) = 12 cm; S = 60 + 10 · 12 : 2 = 120 cm²; o = 10 + 6 + 6 + 13 + 13 = 48 cm"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 4,
        "text": "Pravidelný mnohouholník má vnútorný uhol 135°. Koľko má strán a aký je jeho obvod, ak strana meria 6 cm?",
        "answer": "(n − 2) · 180 = 135n, 45n = 360, n = 8; o = 8 · 6 = 48 cm"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 5,
        "text": "Pravidelný šesťuholník má stranu 8 cm. Vypočítaj obvod a obsah.",
        "answer": "o = 48 cm; S = 3 · 64 · √3 : 2 = 96√3 cm²"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 6,
        "text": "Obdĺžnikový dvor 18 m × 12 m má uprostred štvorcový záhon so stranou 4 m. Dvor sa obloží dlažbou okrem záhonu. Koľko m² dlažby a koľko m obrubníka okolo záhonu treba?",
        "answer": "S = 216 − 16 = 200 m²; obrubník 4 · 4 = 16 m"
      }
    ]
  }
});
