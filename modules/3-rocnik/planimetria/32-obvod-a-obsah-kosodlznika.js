MathPlatform.registerModule({
  "id": "3-u02-h032",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 32 · Obvod a obsah kosodĺžnika",
    "prerequisites": [
      "definícia kosodĺžnika a ďalších štvoruholníkov (hodina 25)",
      "obvod a obsah obdĺžnika a kosoštvorca (hodiny 27, 31)",
      "úpravy vzorca (vyjadrenie neznámej zo súčinu)"
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
      "opísať vlastnosti kosodĺžnika a odlíšiť ho od obdĺžnika (uhly, uhlopriečky, výška)",
      "vypočítať obvod o = 2(a + b)",
      "odvodiť a použiť obsah S = a·vₐ = b·v_b; vysvetliť, prečo nie S = a·b"
    ],
    "competencies": [
      "prepájať obrázok (výška, uhol) so vzorcom a so slovným zadaním",
      "argumentovať presunutím trojuholníka (z kosodĺžnika obdĺžnik)",
      "rozlíšiť údaje potrebné na obsah (a, výška) od údajov potrebných na obvod (a, b)",
      "zvoliť vzorec podľa zadaných údajov a uviesť správne jednotky"
    ],
    "enrichment": [
      "Obsah cez sínus S = a·b·sin α sa v skrátenom module nepoužíva (nie je v písomke); možno ho zaradiť ako obohatenie.",
      "Dve výšky toho istého kosodĺžnika: dlhšej strane prislúcha kratšia výška (súčin je stály).",
      "Návrh maturitného štandardu je použitý iba ako obohatenie: modelovanie, presný matematický jazyk a argumentácia („prečo nie S = a·b“)."
    ],
    "flow": [
      "0–3 min: úvod a zhrnutie vlastností a vzorcov (explain)",
      "3–10 min: triedenie tvrdení a priradenie vzorca (zameranie na písomku)",
      "10–18 min: obsah, obvod, dve výšky; porovnanie kosodĺžnika a obdĺžnika; nájdi chybu",
      "18–30 min: samostatná úloha na papieri (bez mobilu)",
      "zbierka podľa úrovní ako domáca úloha alebo na ďalšiu hodinu"
    ],
    "diagnostics": [
      "Žiak násobí dve susedné strany (S = a·b) namiesto strany a výšky.",
      "Žiak dosadí do obsahu výšku od inej strany než je dosadená strana.",
      "Zámena o = 4a (kosoštvorec) a o = 2(a + b) (kosodĺžnik).",
      "Chyba pri vyjadrení výšky: delí obsah nesprávnou stranou alebo násobí."
    ],
    "partialUse": [
      "Na krátku hodinu stačí zhrnutie, triedenie tvrdení a priradenie vzorca; zbierka ide ako domáca úloha.",
      "Zbierka je trojúrovňová; podľa triedy sa môže použiť iba základ alebo iba bonus."
    ]
  },
  "student": {
    "title": "Obvod a obsah kosodĺžnika",
    "subtitle": "Obrázok → vzorec → výpočet → vysvetlenie",
    "intro": "Zistíš, prečo sa obsah kosodĺžnika nepočíta ako súčin strán, ale cez výšku, a ako sa výška dá nájsť aj z uhla.",
    "estimatedTime": "28–35 min",
    "activities": [
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "vlastnosti kosodĺžnika (odlíšenie od obdĺžnika)",
          "obvod o = 2(a + b) a obsah S = a·vₐ = b·v_b",
          "chýbajúca výška alebo strana z obsahu"
        ]
      },
      {
        "id": "ex-summary",
        "type": "explain",
        "phase": "POUČKA",
        "title": "Kosodĺžnik: vlastnosti a vzorce",
        "html": "<p><span class=\"hl\">Kosodĺžnik</span> má protiľahlé strany rovnobežné a rovnako dlhé (a, b). Obdĺžnik, štvorec aj kosoštvorec sú jeho zvláštne prípady.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 520 300\" role=\"img\" aria-label=\"Kosodĺžnik ABCD so stranami a a b, uhlom α pri vrchole A a výškou va na stranu a\"><polygon points=\"90,260 340,260 440,90 190,90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><line x1=\"190\" y1=\"90\" x2=\"190\" y2=\"260\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><polyline points=\"204,260 204,246 190,246\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"74\" y=\"268\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >A</text><text x=\"356\" y=\"268\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >B</text><text x=\"456\" y=\"88\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >C</text><text x=\"184\" y=\"78\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >D</text><text x=\"190\" y=\"284\" font-size=\"16\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >P</text><text x=\"255\" y=\"290\" font-size=\"22\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" font-style=\"italic\">a</text><text x=\"410\" y=\"183\" font-size=\"22\" text-anchor=\"start\" fill=\"currentColor\" font-family=\"system-ui\" font-style=\"italic\">b</text><text x=\"202\" y=\"182\" font-size=\"22\" text-anchor=\"start\" fill=\"currentColor\" font-family=\"system-ui\" font-style=\"italic\">v<tspan font-size=\"14\" dy=\"5\">a</tspan></text><text x=\"142\" y=\"252\" font-size=\"20\" text-anchor=\"start\" fill=\"currentColor\" font-family=\"system-ui\" >α</text></svg></div><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Uhly a uhlopriečky</div><p class=\"term-rule\">Protiľahlé uhly sú rovnaké, susedné majú súčet 180°. Uhlopriečky sa navzájom polia, ale nie sú rovnako dlhé ani kolmé (to platí až pri obdĺžniku, resp. kosoštvorci).</p></div></div><div class=\"formula\">o = 2·(a + b) &nbsp;&nbsp; S = a · vₐ = b · v_b<span class=\"formula-note\">vₐ je výška na stranu a, v_b výška na stranu b. Do obsahu patrí výška, nie druhá strana.</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Kosodĺžnik: a = 12 cm, b = 15 cm, vₐ = 5 cm.</p><p>o = 2·(12 + 15) = <strong>54 cm</strong>; S = 12·5 = <strong>60 cm²</strong></p><p>Výška na stranu b: v_b = S : b = 60 : 15 = <strong>4 cm</strong></p></div><div class=\"warning\"><strong>Pozor:</strong> Šikmá strana b je dlhšia než výška, preto S = a·b platí len pri obdĺžniku. Dlhšej strane prislúcha kratšia výška.</div>",
        "remember": "Obvod: 2(a + b). Obsah: strana × výška na túto stranu."
      },
      {
        "id": "sort-props",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "vlastnosti kosodĺžnika",
        "title": "Čo platí pre každý kosodĺžnik?",
        "question": "Rozhodni, či tvrdenie platí pre KAŽDÝ kosodĺžnik.",
        "labels": [
          "Platí vždy",
          "Neplatí vždy"
        ],
        "items": [
          {
            "text": "Protiľahlé strany sú rovnako dlhé.",
            "answer": true,
            "why": "Rovnobežné strany medzi rovnobežkami sú rovnako dlhé."
          },
          {
            "text": "Susedné uhly majú súčet 180°.",
            "answer": true,
            "why": "Susedné uhly sú striedavé s rovnobežkami, preto α + β = 180°."
          },
          {
            "text": "Uhlopriečky sa navzájom rozpoľujú.",
            "answer": true,
            "why": "Priesečník uhlopriečok je stred každej z nich."
          },
          {
            "text": "Všetky uhly sú pravé.",
            "answer": false,
            "why": "To platí len pri obdĺžniku (a štvorci). Kosodĺžnik je „naklonený“."
          },
          {
            "text": "Uhlopriečky sú na seba kolmé.",
            "answer": false,
            "why": "Kolmé sú len pri kosoštvorci (a štvorci)."
          },
          {
            "text": "Uhlopriečky majú rovnakú dĺžku.",
            "answer": false,
            "why": "Rovnako dlhé sú len pri obdĺžniku a štvorci."
          },
          {
            "text": "Obsah je S = a·b.",
            "answer": false,
            "why": "S = a·b platí iba pre obdĺžnik. Pri kosodĺžniku treba výšku."
          }
        ]
      },
      {
        "id": "n-s1",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "obsah kosodĺžnika",
        "title": "Obsah kosodĺžnika",
        "prompt": "Kosodĺžnik má stranu a = 14 cm a výšku na túto stranu 6 cm. Aký je jeho obsah v cm²?",
        "validate": "exact",
        "answer": 84,
        "success": "S = 14·6 = 84 cm².",
        "hint": "Strana krát výška na tú istú stranu.",
        "reveal": "Správne je 84: S = 14·6 = 84 cm²."
      },
      {
        "id": "n-o1",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "obvod kosodĺžnika",
        "title": "Obvod kosodĺžnika",
        "prompt": "Kosodĺžnik má strany a = 8 cm a b = 5 cm. Aký je jeho obvod v cm?",
        "validate": "exact",
        "answer": 26,
        "success": "o = 2·(8 + 5) = 26 cm.",
        "hint": "Dve strany a a dve strany b.",
        "reveal": "Správne je 26: 2·(8 + 5) = 26 cm."
      },
      {
        "id": "n-vb2",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "dve výšky",
        "title": "Dve výšky",
        "prompt": "Kosodĺžnik má strany a = 20 cm, b = 12 cm a výšku vₐ = 9 cm. Aká je výška v_b v cm?",
        "validate": "exact",
        "answer": 15,
        "success": "S = 20·9 = 180 cm², v_b = 180 : 12 = 15 cm.",
        "hint": "Najprv obsah z a a vₐ, potom ho vydeľ stranou b.",
        "reveal": "Správne je 15: S = 180 cm², v_b = 180 : 12 = 15."
      },
      {
        "id": "c-same",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "obsah vs. obvod",
        "question": "Dva kosodĺžniky majú rovnakú stranu 8 cm a rovnakú výšku na ňu 5 cm. Prvý má druhú stranu 6 cm, druhý 9 cm. Čo platí?",
        "options": [
          "Druhý má väčší obsah aj väčší obvod.",
          "Obsahy aj obvody sú rovnaké.",
          "Obsahy sú rovnaké, obvod druhého je väčší.",
          "Prvý má väčší obsah, lebo má kratšiu stranu."
        ],
        "answer": 2,
        "correct": "Obsah závisí len od a a vₐ: oba 8·5 = 40 cm². Obvody: 2(8 + 6) = 28 cm a 2(8 + 9) = 34 cm.",
        "hint": "Aké údaje vstupujú do vzorca pre obsah?"
      },
      {
        "id": "m-formulas",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "voľba vzorca",
        "title": "Ktorý vzorec použiješ?",
        "labels": [
          "S = a·b",
          "S = a·vₐ",
          "S = e·f/2",
          "o = 2(a + b)"
        ],
        "items": [
          {
            "text": "obdĺžnik: obsah zo strán a, b",
            "answer": "S = a·b"
          },
          {
            "text": "kosodĺžnik: obsah zo strany a výšky na ňu",
            "answer": "S = a·vₐ"
          },
          {
            "text": "kosoštvorec: obsah z uhlopriečok",
            "answer": "S = e·f/2"
          },
          {
            "text": "kosodĺžnik: obvod zo strán a, b",
            "answer": "o = 2(a + b)"
          },
          {
            "text": "kosoštvorec: obsah zo strany a výšky na ňu",
            "answer": "S = a·vₐ"
          },
          {
            "text": "obdĺžnik: obvod zo strán a, b",
            "answer": "o = 2(a + b)"
          }
        ]
      },
      {
        "id": "err1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "chyby v obsahu",
        "question": "Žiak počítal obsah kosodĺžnika (a = 12 cm, b = 8 cm, výška na stranu a je 5 cm): S = 12·8 = 96 cm². Aká je jeho chyba?",
        "options": [
          "Použil druhú stranu b namiesto výšky; správne je 12·5 = 60 cm².",
          "Mal strany sčítať: 12 + 8 = 20 cm².",
          "Zabudol deliť dvoma, správne je 48 cm².",
          "Žiadna chyba, 96 cm² je správne."
        ],
        "answer": 0,
        "correct": "Pri kosodĺžniku nie je bočná strana výškou. Súčin a·b je obsah obdĺžnika s rovnakými stranami, nie kosodĺžnika.",
        "hint": "Ktorý z údajov je kolmý na stranu a?"
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Samostatná úloha do zošita",
        "html": "<p>Odlož mobil. Kosodĺžnik ABCD má strany <strong>a = 15 cm</strong>, <strong>b = 9 cm</strong> a výšku na stranu a <strong>vₐ = 6 cm</strong>.</p><ol><li>Načrtni ho a vyznač výšky vₐ aj v_b.</li><li>Vypočítaj jeho obvod.</li><li>Vypočítaj jeho obsah.</li><li>Vypočítaj výšku v_b na stranu b.</li><li>Rozhodni, či by to mohol byť obdĺžnik. Zdôvodni (pomôž si tým, ktorá z hodnôt by sa v takom prípade musela rovnať b).</li></ol><p>Zapisuj postup, jednotky a odpoveď celou vetou.</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: kosodĺžnik",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Rieš v zošite, výsledok vždy s jednotkou. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až po vlastnom pokuse.</p>",
        "items": [
          {
            "level": "zaklad",
            "html": "Kosodĺžnik má stranu a = 9 cm a výšku vₐ = 4 cm. Vypočítaj obsah.",
            "answer": "S = 9·4 = <strong>36 cm²</strong>"
          },
          {
            "level": "zaklad",
            "html": "Kosodĺžnik má a = 11 cm, b = 7 cm a vₐ = 5 cm. Vypočítaj obvod aj obsah.",
            "answer": "o = 2·(11 + 7) = <strong>36 cm</strong>; S = 11·5 = <strong>55 cm²</strong>"
          },
          {
            "level": "zaklad",
            "html": "Obsah kosodĺžnika je 72 cm², strana a = 9 cm. Aká je výška vₐ?",
            "answer": "vₐ = 72 : 9 = <strong>8 cm</strong>"
          },
          {
            "level": "zaklad",
            "html": "Obvod kosodĺžnika je 50 cm a strana a má 15 cm. Aká je strana b?",
            "answer": "a + b = 25 cm, b = 25 − 15 = <strong>10 cm</strong>"
          },
          {
            "level": "rozsirenie",
            "html": "Kosodĺžnik má obsah 90 cm² a výšky vₐ = 6 cm a v_b = 10 cm. Vypočítaj strany a, b a obvod.",
            "answer": "a = 90 : 6 = <strong>15 cm</strong>; b = 90 : 10 = <strong>9 cm</strong>; o = 2·(15 + 9) = <strong>48 cm</strong>"
          },
          {
            "level": "rozsirenie",
            "html": "Záhon tvaru kosodĺžnika má a = 6 m, b = 5 m, vₐ = 4 m. Koľko eur stojí osadenie 1 m² trávnika za 5 €? Koľko metrov oplotenia treba na celý obvod?",
            "answer": "S = 6·4 = 24 m²; cena 24·5 = <strong>120 €</strong>.<br>o = 2·(6 + 5) = <strong>22 m</strong>"
          },
          {
            "level": "rozsirenie",
            "html": "Kosodĺžnik má a = 10 cm, b = 8 cm, vₐ = 4 cm. Vypočítaj obsah a výšku v_b.",
            "answer": "S = 10·4 = <strong>40 cm²</strong>; v_b = 40 : 8 = <strong>5 cm</strong>"
          },
          {
            "level": "bonus",
            "html": "Obsah kosodĺžnika je 96 cm², výšky sú vₐ = 6 cm a v_b = 8 cm. Vypočítaj obvod.",
            "answer": "a = 96 : 6 = 16 cm; b = 96 : 8 = 12 cm; o = 2·(16 + 12) = <strong>56 cm</strong>"
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
          "viem opísať vlastnosti kosodĺžnika a odlíšiť ho od obdĺžnika",
          "viem vypočítať obvod kosodĺžnika",
          "viem vypočítať obsah zo strany a príslušnej výšky",
          "viem použiť dve výšky a vzorec S = a·b·sin α"
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
        "html": "Kosodĺžnik má stranu 18 cm a výšku na ňu 7 cm. Vypočítaj obsah.",
        "answer": "S = 18·7 = 126 cm²"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 3,
        "html": "Kosodĺžnik má strany 18 cm a 9 cm. Vypočítaj obvod.",
        "answer": "o = 2·(18 + 9) = 54 cm"
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 4,
        "html": "Obsah kosodĺžnika je 150 cm², jeho strana má 25 cm. Aká je výška na túto stranu?",
        "answer": "v = 150 : 25 = 6 cm"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 5,
        "html": "Kosodĺžnik má a = 20 cm, b = 12 cm a výšku vₐ = 9 cm. Vypočítaj obsah, obvod a výšku v_b.",
        "answer": "S = 20·9 = 180 cm²; o = 2·(20 + 12) = 64 cm; v_b = 180 : 12 = 15 cm"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 5,
        "html": "Kosodĺžnik má strany 24 cm a 5 cm a uhol 30° (sin 30° = ½). Vypočítaj obsah a výšku na stranu 24 cm.",
        "answer": "vₐ = 5·½ = 2,5 cm; S = 24·2,5 = 60 cm²"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 6,
        "html": "Kosodĺžnik má obsah 96 cm² a výšky 6 cm a 8 cm. Vypočítaj jeho strany a obvod. Je to obdĺžnik? Zdôvodni.",
        "answer": "a = 96 : 6 = 16 cm, b = 96 : 8 = 12 cm, o = 56 cm. Nie je to obdĺžnik: v obdĺžniku by výška na stranu a bola rovná strane b (12 cm), no je 6 cm."
      }
    ]
  }
});
