MathPlatform.registerModule({
  "id": "3-u02-h025",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 25 · Štvoruholníky",
    "prerequisites": [
      "ZŠ: trojuholník a súčet jeho uhlov 180°, rovnobežky, štvorec a obdĺžnik",
      "2. ročník: Pytagorova veta (využije sa v nasledujúcich hodinách)",
      "učivo predchádzajúcich hodín planimetrie"
    ],
    "planContent": [
      "Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka."
    ],
    "planPerformance": [
      "Poznať a vedieť opísať vlastnosti základných rovinných útvarov.",
      "Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov."
    ],
    "goals": [
      "použiť súčet uhlov 360° a dopočítať uhol štvoruholníka",
      "rozlíšiť rovnobežník a lichobežník, použiť vlastnosti ich uhlov",
      "vymenovať vlastnosti uhlopriečok kosodĺžnika, kosoštvorca, obdĺžnika a štvorca",
      "rozlíšiť, ktorý útvar je aj iným útvarom (štvorec je obdĺžnik aj kosoštvorec)",
      "Modul je zameraný na obsah písomky (vzorce, vlastnosti útvarov, viackrokové výpočty, slovná úloha); doplnkové témy sú vynechané."
    ],
    "competencies": [
      "prepájať obrázok, slovný opis a symbolický zápis",
      "presne používať pojmy „práve jedna“ a „každý“",
      "dopočítať veľkosti uhlov a overiť ich súčtom 360°",
      "zdôvodniť tvrdenie vlastnosťami útvaru"
    ],
    "enrichment": [
      "dôkaz súčtu uhlov uhlopriečkou",
      "deltoid, uhly v pomere a ďalšie úlohy sú v worksheet.tasks"
    ],
    "flow": [
      "0–3 min: súčet uhlov trojuholníka → koľko má štvoruholník?",
      "3–10 min: výklad: 360°, uhly v rovnobežníku a lichobežníku, tabuľka vlastností",
      "10–25 min: platforma (≈ 13 aktivít): dopočítavanie uhlov, priraďovanie vlastností, pravda/nepravda",
      "nasleduje samostatná úloha BEZ MOBILU a zbierka podľa úrovní (podľa času)",
      "rozbor chýb podľa živých výsledkov; zameranie na úlohy typu písomky"
    ],
    "diagnostics": [
      "používa 180° namiesto 360° pri štvoruholníku",
      "zamieňa rovnobežník a lichobežník (počet dvojíc rovnobežných strán)",
      "pripisuje každému rovnobežníku vlastnosti obdĺžnika (rovnaké alebo kolmé uhlopriečky)",
      "nevie, že štvorec je aj obdĺžnik a kosoštvorec"
    ],
    "partialUse": [
      "pri nedostatku času vynechať zbierku (ROZŠÍRENIE a BONUS)",
      "uhly počítať na papieri, mobil slúži na kontrolu a klasifikáciu",
      "pri ŠVVP ponechať tabuľku vlastností viditeľnú"
    ]
  },
  "student": {
    "title": "Štvoruholníky",
    "subtitle": "Téma 25 · Planimetria",
    "intro": "Zopakuješ si súčet uhlov 360°, vlastnosti rovnobežníkov a lichobežníka a to, ktorý útvar je aj iným útvarom. Zameriavame sa na to, čo bude v písomke.",
    "estimatedTime": "20–25 min",
    "activities": [
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "použiť súčet vnútorných uhlov 360° na dopočítanie uhla",
          "rozlíšiť rovnobežník a lichobežník podľa vlastností",
          "poznať vlastnosti uhlopriečok a vedieť, ktorý útvar je aj iným útvarom"
        ]
      },
      {
        "id": "uhly",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Súčet uhlov a uhly v rovnobežníku a lichobežníku",
        "html": "<p>Uhlopriečka rozdelí štvoruholník ABCD na <strong>dva trojuholníky</strong>, v každom je súčet uhlov 180°. Preto platí:</p><div class=\"formula\"><span class=\"mini-label\">SÚČET UHLOV</span>α + β + γ + δ = 2 · 180° = 360°<span class=\"formula-note\">Platí pre každý štvoruholník (v trojuholníku je to 180°).</span></div><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Rovnobežník</div><p class=\"term-rule\">Dve dvojice <span class=\"hl\">rovnobežných</span> strán. Protiľahlé uhly sú rovnaké (α = γ, β = δ), susedné dávajú 180° (α + β = 180°).</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Lichobežník</div><p class=\"term-rule\">Práve <span class=\"hl\">jedna</span> dvojica rovnobežných strán (základne). Uhly pri tom istom ramene dávajú 180°: pri AB ∥ CD je α + δ = 180° a β + γ = 180°.</p></div></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Rovnobežník má α = 68°. Potom β = 180° − 68° = <strong>112°</strong>, γ = 68°, δ = 112°.</p><p>Kontrola: 68° + 112° + 68° + 112° = 360° ✔</p></div>",
        "remember": "Súčet uhlov štvoruholníka je 360°. Rovnobežník: susedné uhly 180°. Lichobežník: uhly pri ramene 180°."
      },
      {
        "id": "vlastnosti",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Vlastnosti rovnobežníkov a čo je aj čo",
        "html": "<p>Všetky rovnobežníky majú protiľahlé strany rovnobežné a rovnako dlhé a uhlopriečky sa v nich <strong>navzájom rozpoľujú</strong>. Ďalšie vlastnosti majú len niektoré:</p><div class=\"table-wrap\"><table class=\"truth\"><thead><tr><th>vlastnosť</th><th>kosodĺžnik</th><th>kosoštvorec</th><th>obdĺžnik</th><th>štvorec</th></tr></thead><tbody>\n<tr><td>protiľahlé strany rovnobežné a rovnako dlhé</td><td>áno</td><td>áno</td><td>áno</td><td>áno</td></tr>\n<tr><td>všetky strany rovnako dlhé</td><td>nie</td><td>áno</td><td>nie</td><td>áno</td></tr>\n<tr><td>všetky uhly pravé</td><td>nie</td><td>nie</td><td>áno</td><td>áno</td></tr>\n<tr><td>uhlopriečky sa navzájom polovia</td><td>áno</td><td>áno</td><td>áno</td><td>áno</td></tr>\n<tr><td>uhlopriečky rovnako dlhé</td><td>nie</td><td>nie</td><td>áno</td><td>áno</td></tr>\n<tr><td>uhlopriečky navzájom kolmé</td><td>nie</td><td>áno</td><td>nie</td><td>áno</td></tr>\n</tbody></table></div><div class=\"compare\"><div class=\"good\"><span class=\"mini-label\">PRAVDA</span><p>Každý štvorec je obdĺžnik aj kosoštvorec.</p><p>Každý obdĺžnik je rovnobežník.</p></div><div class=\"bad\"><span class=\"mini-label\">NEPRAVDA</span><p>Každý obdĺžnik je štvorec.</p><p>Každý lichobežník je rovnobežník.</p></div></div><div class=\"warning\"><strong>Pozor:</strong> Pri tvrdení „platí pre každý“ stačí jeden útvar, pre ktorý to neplatí (napr. kosodĺžnik nemá rovnaké uhlopriečky).</div>",
        "remember": "Rovnaké uhlopriečky: obdĺžnik, štvorec. Kolmé uhlopriečky: kosoštvorec, štvorec. Štvorec je obdĺžnik aj kosoštvorec."
      },
      {
        "id": "n1",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "súčet uhlov",
        "title": "Chýbajúci uhol",
        "prompt": "Štvoruholník má tri vnútorné uhly 85°, 110° a 70°. Aký veľký je štvrtý uhol (v stupňoch)?",
        "validate": "exact",
        "answer": 95,
        "success": "85° + 110° + 70° = 265°, 360° − 265° = 95°.",
        "hint": "Súčet všetkých štyroch uhlov je 360°. Sčítaj tri známe a odčítaj od 360°.",
        "reveal": "Správne je 95°: 360° − 265°."
      },
      {
        "id": "n3",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "lichobežník",
        "title": "Uhol pri ramene lichobežníka",
        "prompt": "V lichobežníku ABCD je AB ∥ CD a uhol pri vrchole A je 72°. Aký veľký je uhol pri vrchole D (v stupňoch)?",
        "validate": "exact",
        "answer": 108,
        "success": "Uhly pri ramene AD dávajú dokopy 180°: 180° − 72° = 108°.",
        "hint": "Vrcholy A a D ležia na tom istom ramene AD.",
        "reveal": "Správne je 108°."
      },
      {
        "id": "m1",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "vlastnosti útvarov",
        "title": "Ktorý útvar to opisuje?",
        "labels": [
          "rovnobežník",
          "lichobežník"
        ],
        "items": [
          {
            "text": "Má práve jednu dvojicu rovnobežných strán.",
            "answer": "lichobežník"
          },
          {
            "text": "Protiľahlé strany sú rovnobežné a rovnako dlhé.",
            "answer": "rovnobežník"
          },
          {
            "text": "Uhlopriečky sa navzájom rozpoľujú.",
            "answer": "rovnobežník"
          },
          {
            "text": "Uhly pri tom istom ramene dávajú dokopy 180°.",
            "answer": "lichobežník"
          },
          {
            "text": "Protiľahlé uhly sú rovnaké.",
            "answer": "rovnobežník"
          },
          {
            "text": "Rovnobežné strany sa volajú základne.",
            "answer": "lichobežník"
          }
        ]
      },
      {
        "id": "s1",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "vlastnosti rovnobežníkov",
        "title": "Platí to vždy?",
        "question": "Rozhodni o každej vlastnosti, či platí pre KAŽDÝ rovnobežník, alebo len pre niektorý (napr. obdĺžnik).",
        "labels": [
          "Platí pre každý rovnobežník",
          "Neplatí vždy"
        ],
        "items": [
          {
            "text": "Protiľahlé strany sú rovnako dlhé.",
            "answer": true,
            "why": "Je to základná vlastnosť rovnobežníka."
          },
          {
            "text": "Uhlopriečky sú rovnako dlhé.",
            "answer": false,
            "why": "Platí pre obdĺžnik a štvorec, nie pre kosodĺžnik ani kosoštvorec."
          },
          {
            "text": "Uhlopriečky sa navzájom rozpoľujú.",
            "answer": true,
            "why": "Priesečník S je stredom oboch uhlopriečok."
          },
          {
            "text": "Všetky strany sú rovnako dlhé.",
            "answer": false,
            "why": "To má iba kosoštvorec a štvorec."
          },
          {
            "text": "Susedné uhly majú súčet 180°.",
            "answer": true,
            "why": "Uhly pri rovnobežných stranách sa dopĺňajú do 180°."
          },
          {
            "text": "Uhlopriečky sú navzájom kolmé.",
            "answer": false,
            "why": "Platí len pre kosoštvorec a štvorec."
          },
          {
            "text": "Protiľahlé uhly sú rovnaké.",
            "answer": true,
            "why": "α = γ a β = δ."
          }
        ]
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "rozlišovanie útvarov",
        "question": "Ktoré z týchto tvrdení o štvoruholníkoch je pravdivé?",
        "options": [
          "Každý štvorec je zároveň obdĺžnik.",
          "Každý obdĺžnik je zároveň štvorec.",
          "Každý lichobežník je rovnobežník.",
          "Každý deltoid je kosoštvorec."
        ],
        "answer": 0,
        "correct": "Štvorec má všetky vlastnosti obdĺžnika (4 pravé uhly, rovnobežné strany), len k tomu má navyše rovnaké strany.",
        "hint": "Zisti, či útvar z prvej časti vety má všetky vlastnosti útvaru z druhej časti vety."
      },
      {
        "id": "c4",
        "type": "choice",
        "phase": "PRENES",
        "skill": "uhlopriečky",
        "question": "Štvoruholník má rovnako dlhé uhlopriečky, ktoré sa navzájom rozpoľujú, ale nie sú na seba kolmé. Ktorý útvar to môže byť?",
        "options": [
          "kosoštvorec",
          "kosodĺžnik",
          "obdĺžnik, ktorý nie je štvorec",
          "štvorec"
        ],
        "answer": 2,
        "correct": "Rovnaké uhlopriečky má obdĺžnik. Kolmé by boli až pri štvorci.",
        "hint": "Rovnaké uhlopriečky: obdĺžnik alebo štvorec. Potom vyber ten, ktorého uhlopriečky nie sú kolmé."
      },
      {
        "id": "e1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "nájdi chybu",
        "question": "Žiak počíta štvrtý uhol štvoruholníka s uhlami 100°, 120° a 60°: „x = 180° − (100° + 120° + 60°) = −100°.“ Čo je na jeho postupe zle?",
        "options": [
          "Mal sčítať len dva uhly, nie tri.",
          "Mal použiť 90° namiesto 180°.",
          "Postup je správny, uhol môže byť aj záporný.",
          "Súčet uhlov štvoruholníka je 360°, nie 180°; správne x = 80°."
        ],
        "answer": 3,
        "correct": "Záporný uhol je vždy signál, že niekde je chyba. Vo štvoruholníku je 360°: 360° − 280° = 80°.",
        "hint": "Skontroluj, aký súčet uhlov patrí štvoruholníku. A môže mať uhol zápornú veľkosť?"
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Náčrt a uhly v zošite",
        "html": "<p>Odlož mobil. Do zošita nakresli <strong>lichobežník ABCD s AB ∥ CD</strong>, kde α = 58° a β = 76°. Dopočítaj uhly γ a δ, výsledky zapíš s jednotkami a urob kontrolu, že súčet všetkých štyroch uhlov je 360°.</p><p>Potom nakresli <strong>kosoštvorec s uhlom 70°</strong> a dopočítaj jeho ostatné tri uhly.</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "title": "Zbierka úloh",
        "html": "<p>Riešiš na papieri. Najprv urob náčrt a označ známe uhly. Zbierka má tri úrovne: ZÁKLAD, ROZŠÍRENIE a BONUS.</p>",
        "items": [
          {
            "level": "zaklad",
            "html": "Štvoruholník má uhly 70°, 100° a 120°. Dopočítaj štvrtý uhol.",
            "answer": "360° − (70° + 100° + 120°) = 360° − 290° = <strong>70°</strong>"
          },
          {
            "level": "zaklad",
            "html": "Rovnobežník ABCD má α = 55°. Dopočítaj β, γ a δ.",
            "answer": "β = 180° − 55° = <strong>125°</strong>, γ = α = <strong>55°</strong>, δ = β = <strong>125°</strong>. Kontrola: 55° + 125° + 55° + 125° = 360°."
          },
          {
            "level": "zaklad",
            "html": "V lichobežníku ABCD (AB ∥ CD) je α = 64° a β = 81°. Dopočítaj γ a δ.",
            "answer": "δ = 180° − 64° = <strong>116°</strong>, γ = 180° − 81° = <strong>99°</strong>. Kontrola: 64° + 81° + 99° + 116° = 360°."
          },
          {
            "level": "zaklad",
            "html": "Ktoré z útvarov štvorec, obdĺžnik, kosoštvorec, kosodĺžnik majú vždy rovnako dlhé uhlopriečky?",
            "answer": "<strong>Štvorec a obdĺžnik.</strong> Kosoštvorec a kosodĺžnik majú uhlopriečky rôzne dlhé."
          },
          {
            "level": "rozsirenie",
            "html": "Rovnoramenný lichobežník má pri dlhšej základni uhly 70°. Dopočítaj uhly pri kratšej základni.",
            "answer": "Pri kratšej základni má každý uhol 180° − 70° = <strong>110°</strong>. Kontrola: 70° + 70° + 110° + 110° = 360°."
          },
          {
            "level": "rozsirenie",
            "html": "V pravouhlom lichobežníku ABCD (AB ∥ CD) je α = 90° a β = 65°. Dopočítaj γ a δ.",
            "answer": "δ = 180° − 90° = <strong>90°</strong>, γ = 180° − 65° = <strong>115°</strong>. Kontrola: 90° + 65° + 115° + 90° = 360°."
          },
          {
            "level": "rozsirenie",
            "html": "V rovnobežníku je uhol α o 40° menší ako uhol β. Vypočítaj oba uhly.",
            "answer": "α + β = 180°, β = α + 40°. Potom 2α + 40° = 180°, α = <strong>70°</strong>, β = <strong>110°</strong>."
          },
          {
            "level": "bonus",
            "html": "Uhly štvoruholníka sú v pomere 2 : 3 : 3 : 4. Vypočítaj ich.",
            "answer": "12 dielov = 360°, 1 diel = 30°. Uhly: <strong>60°, 90°, 90°, 120°</strong>."
          }
        ],
        "note": "Riešenia si pozri až po vlastnom pokuse."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Pri každej zručnosti označ, ako sa teraz cítiš.",
        "skills": [
          "viem dopočítať uhol štvoruholníka zo súčtu 360°",
          "viem rozlíšiť rovnobežník a lichobežník",
          "viem vymenovať vlastnosti uhlopriečok rovnobežníkov",
          "viem, ktorý útvar je aj iným útvarom"
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
        "text": "Uhly štvoruholníka sú 95°, 80° a 105°. Vypočítaj štvrtý uhol.",
        "answer": "360° − 280° = 80°"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 4,
        "text": "Rovnobežník ABCD má uhol β = 123°. Vypočítaj α, γ, δ.",
        "answer": "α = 57°, γ = 57°, δ = 123°"
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 4,
        "text": "V lichobežníku ABCD s AB ∥ CD je α = 80° a β = 55°. Dopočítaj γ a δ.",
        "answer": "δ = 100°, γ = 125°"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 5,
        "text": "Kosoštvorec má uhol 80° pri vrchole A. Vypočítaj ostatné uhly a uhly, na ktoré uhlopriečka AC rozdelí uhol pri A.",
        "answer": "β = 100°, γ = 80°, δ = 100°; uhlopriečka AC rozdelí uhol pri A na 2 × 40°"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 5,
        "text": "Uhly štvoruholníka sú v pomere 1 : 2 : 4 : 5. Vypočítaj ich.",
        "answer": "12 dielov = 360°, diel = 30°: 30°, 60°, 120°, 150°"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 5,
        "text": "V deltoide ABCD (|AB| = |AD|, |CB| = |CD|) je γ = 40° a α = 100°. Vypočítaj β a δ.",
        "answer": "β = δ = (360° − 140°) : 2 = 110°"
      }
    ]
  }
});
