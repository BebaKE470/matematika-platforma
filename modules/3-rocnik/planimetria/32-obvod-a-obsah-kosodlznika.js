MathPlatform.registerModule({
  "id": "3-u02-h032",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 32 · Obvod a obsah kosodĺžnika",
    "prerequisites": [
      "definícia kosodĺžnika a ďalších štvoruholníkov (hodina 25)",
      "obvod a obsah obdĺžnika a kosoštvorca (hodiny 27, 31)",
      "sínus ostrého uhla v pravouhlom trojuholníku (2. ročník) a sin 30° = ½, sin 90° = 1",
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
      "opísať vlastnosti kosodĺžnika a odlíšiť ho od obdĺžnika (uhly, uhlopriečky, výška)",
      "vypočítať obvod o = 2(a + b)",
      "odvodiť a použiť obsah S = a·vₐ = b·v_b; vysvetliť, prečo nie S = a·b",
      "použiť S = a·b·sin α, ak je zadaný uhol medzi stranami"
    ],
    "competencies": [
      "prepájať obrázok (výška, uhol) so vzorcom a so slovným zadaním",
      "argumentovať presunutím trojuholníka (z kosodĺžnika obdĺžnik)",
      "rozlíšiť údaje potrebné na obsah (a, výška) od údajov potrebných na obvod (a, b)",
      "zvoliť vzorec podľa zadaných údajov a uviesť správne jednotky"
    ],
    "enrichment": [
      "Dve výšky toho istého kosodĺžnika: dlhšej strane prislúcha kratšia výška (súčin je stály).",
      "Návrh maturitného štandardu je použitý iba ako obohatenie: modelovanie, presný matematický jazyk a argumentácia („prečo nie S = a·b“)."
    ],
    "flow": [
      "0–5 min opakovanie: kosoštvorec, definícia kosodĺžnika, výška",
      "5–12 min vlastnosti kosodĺžnika z obrázka a triedenie tvrdení (aplikácia)",
      "12–24 min aplikácia: S = a·vₐ, dve výšky, obvod, S = a·b·sin α s okamžitou spätnou väzbou",
      "24–35 min zápis do zošita: samostatná úloha a = 15 cm, b = 9 cm, vₐ = 6 cm (bez mobilu)",
      "35–45 min zbierka podľa úrovní a spoločná syntéza: kosodĺžnik vs. obdĺžnik"
    ],
    "diagnostics": [
      "Žiak násobí dve susedné strany (S = a·b) namiesto strany a výšky.",
      "Žiak dosadí do obsahu výšku od inej strany než je dosadená strana.",
      "Zámena o = 4a (kosoštvorec) a o = 2(a + b) (kosodĺžnik).",
      "Chyba pri vyjadrení výšky: delí obsah nesprávnou stranou alebo násobí."
    ],
    "partialUse": [
      "Na krátku hodinu stačí časť do „dve strany, dve výšky“ a úlohy Nájdi chybu; vzorec so sínusom je voliteľný.",
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
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Z hodín 26–31 poznáš obvod a obsah štvorca, obdĺžnika, lichobežníka a kosoštvorca. Pri kosoštvorci si videla/videl, že na obsah nestačí len strana — potrebujeme aj <strong>výšku</strong> (alebo uhlopriečky). Dnes sa to isté ukáže pri všeobecnejšom útvare.</p><p><span class=\"hl\">Kosodĺžnik</span> je štvoruholník, ktorý má <strong>protiľahlé strany rovnobežné</strong>. Má dve rôzne dlhé susedné strany a, b a uhly, ktoré nemusia byť pravé. Obdĺžnik, štvorec aj kosoštvorec sú jeho zvláštne prípady.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "opísať vlastnosti kosodĺžnika a odlíšiť ho od obdĺžnika",
          "vypočítať obvod o = 2(a + b)",
          "vypočítať obsah S = a·vₐ = b·v_b a pochopiť, prečo nie je S = a·b",
          "použiť S = a·b·sin α, ak poznáme uhol"
        ]
      },
      {
        "id": "observe",
        "type": "info",
        "phase": "NAJPRV OBRÁZOK",
        "title": "Kosodĺžnik, jeho strany a výška",
        "html": "<p>Kosodĺžnik ABCD má strany a = AB a b = BC. Z vrcholu D sme spustili <strong>výšku vₐ</strong> na stranu a — je to úsečka DP kolmá na AB.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 520 300\" role=\"img\" aria-label=\"Kosodĺžnik ABCD so stranami a a b, uhlom α pri vrchole A a výškou va na stranu a\"><polygon points=\"90,260 340,260 440,90 190,90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><line x1=\"190\" y1=\"90\" x2=\"190\" y2=\"260\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><polyline points=\"204,260 204,246 190,246\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"74\" y=\"268\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >A</text><text x=\"356\" y=\"268\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >B</text><text x=\"456\" y=\"88\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >C</text><text x=\"184\" y=\"78\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >D</text><text x=\"190\" y=\"284\" font-size=\"16\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >P</text><text x=\"255\" y=\"290\" font-size=\"22\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" font-style=\"italic\">a</text><text x=\"410\" y=\"183\" font-size=\"22\" text-anchor=\"start\" fill=\"currentColor\" font-family=\"system-ui\" font-style=\"italic\">b</text><text x=\"202\" y=\"182\" font-size=\"22\" text-anchor=\"start\" fill=\"currentColor\" font-family=\"system-ui\" font-style=\"italic\">v<tspan font-size=\"14\" dy=\"5\">a</tspan></text><text x=\"142\" y=\"252\" font-size=\"20\" text-anchor=\"start\" fill=\"currentColor\" font-family=\"system-ui\" >α</text></svg></div><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Strany</div><p class=\"term-rule\">Protiľahlé strany sú rovnobežné a rovnako dlhé: AB = CD = a, BC = DA = b.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Uhly</div><p class=\"term-rule\">Protiľahlé uhly sú rovnaké a susedné uhly majú súčet 180° (pri vrchole A je α, pri B je 180° − α).</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Uhlopriečky</div><p class=\"term-rule\">Navzájom sa polia, ale sú <span class=\"hl\">rôzne dlhé</span> a vo všeobecnosti nie sú kolmé.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Výška</div><p class=\"term-rule\">Kolmá vzdialenosť dvoch rovnobežných strán. Nie je to bočná strana — výška je <span class=\"hl\">kratšia</span> než šikmá strana medzi rovnobežkami (vₐ &lt; b); rovnaká je len pri obdĺžniku.</p></div></div>",
        "remember": "Výška kosodĺžnika je kolmá na rovnobežné strany. Bočná strana b nie je výška."
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
        "id": "ex-cut",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Prečo S = a · vₐ",
        "html": "<p>Z kosodĺžnika vieme urobiť obdĺžnik: <strong>odrežeme</strong> pravouhlý trojuholník APD naľavo a <strong>pripojíme</strong> ho napravo. Obsah sa tým nezmení, lebo sme nič nepridali ani neubrali — len sme presunuli kus plochy.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 540 310\" role=\"img\" aria-label=\"Odrezaním pravouhlého trojuholníka naľavo a jeho pripojením napravo vznikne z kosodĺžnika obdĺžnik so stranami a a va\"><polygon points=\"90,260 190,260 190,90\" fill=\"currentColor\" fill-opacity=\"0.2\" stroke=\"none\"/><polygon points=\"340,260 440,260 440,90\" fill=\"currentColor\" fill-opacity=\"0.2\" stroke=\"none\"/><polygon points=\"190,90 440,90 440,260 190,260\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"8 6\"/><polygon points=\"90,260 340,260 440,90 190,90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><line x1=\"190\" y1=\"90\" x2=\"190\" y2=\"260\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><line x1=\"440\" y1=\"90\" x2=\"440\" y2=\"260\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><polyline points=\"204,260 204,246 190,246\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><polyline points=\"426,260 426,246 440,246\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"74\" y=\"268\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >A</text><text x=\"356\" y=\"268\" font-size=\"20\" text-anchor=\"start\" fill=\"currentColor\" font-family=\"system-ui\" >B</text><text x=\"456\" y=\"88\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >C</text><text x=\"184\" y=\"78\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >D</text><text x=\"265\" y=\"190\" font-size=\"22\" text-anchor=\"middle\" fill=\"currentColor\" font-weight=\"600\" font-family=\"system-ui\" font-style=\"italic\">v<tspan font-size=\"14\" dy=\"5\">a</tspan></text><text x=\"315\" y=\"78\" font-size=\"22\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" font-style=\"italic\">a</text><text x=\"110\" y=\"190\" font-size=\"22\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >①</text><text x=\"412\" y=\"190\" font-size=\"22\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >①</text><text x=\"265\" y=\"290\" font-size=\"17\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\">trojuholník ① presunieme zľava doprava → obdĺžnik a × v<tspan font-size=\"12\" dy=\"4\">a</tspan></text></svg></div><p>Z obdĺžnika vidíme: jeho strany sú a (základňa) a vₐ (výška). Preto platí:</p><div class=\"formula\">S = a · vₐ<span class=\"formula-note\">strana krát výška na túto stranu; obsah v cm²</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Kosodĺžnik má stranu a = 12 cm a výšku na ňu vₐ = 5 cm.</p><p>S = a·vₐ = 12·5 = <strong>60 cm²</strong></p></div><div class=\"warning\"><strong>Pozor:</strong> Dosadzuješ <span class=\"hl\">výšku</span>, nie druhú stranu b. Pri obdĺžniku sú strana b aj výška rovnaké, pri kosodĺžniku nie.</div>",
        "remember": "Obsah kosodĺžnika = strana × výška na túto stranu."
      },
      {
        "id": "ex-two",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Dve strany, dve výšky, ten istý obsah",
        "html": "<p>Kosodĺžnik má dve rôzne dlhé strany, a preto aj dve výšky: <strong>vₐ</strong> patrí k strane a a <strong>v_b</strong> k strane b. Obsah je ten istý, nech ho počítame ktorýmkoľvek spôsobom.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 520 300\" role=\"img\" aria-label=\"Kosodĺžnik ABCD s dvoma výškami z vrcholu D: va na stranu a a vb na stranu b\"><polygon points=\"80,255 310,255 420,95 190,95\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><line x1=\"190\" y1=\"95\" x2=\"190\" y2=\"255\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><line x1=\"190\" y1=\"95\" x2=\"346.2\" y2=\"202.4\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><polyline points=\"203,255 203,242 190,242\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><polyline points=\"335.5,195 328.1,205.7 338.8,213.1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"64\" y=\"263\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >A</text><text x=\"314\" y=\"283\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >B</text><text x=\"436\" y=\"93\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >C</text><text x=\"184\" y=\"83\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >D</text><text x=\"165\" y=\"285\" font-size=\"22\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" font-style=\"italic\">a</text><text x=\"387\" y=\"197\" font-size=\"22\" text-anchor=\"start\" fill=\"currentColor\" font-family=\"system-ui\" font-style=\"italic\">b</text><text x=\"200\" y=\"190\" font-size=\"22\" text-anchor=\"start\" fill=\"currentColor\" font-family=\"system-ui\" font-style=\"italic\">v<tspan font-size=\"14\" dy=\"5\">a</tspan></text><text x=\"254.1\" y=\"144.7\" font-size=\"22\" text-anchor=\"end\" fill=\"currentColor\" font-family=\"system-ui\" font-style=\"italic\">v<tspan font-size=\"14\" dy=\"5\">b</tspan></text></svg></div><div class=\"formula\">S = a · vₐ = b · v_b</div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Kosodĺžnik: a = 12 cm, b = 15 cm, vₐ = 5 cm.</p><p>S = a·vₐ = 12·5 = <strong>60 cm²</strong></p><p>Výška na stranu b: S = b·v_b, teda v_b = S : b = 60 : 15 = <strong>4 cm</strong></p><p>Skúška: b·v_b = 15·4 = 60 cm² ✔</p></div><p>Dlhšia strana má kratšiu výšku (15 cm → 4 cm, 12 cm → 5 cm), pretože súčin musí ostať 60 cm².</p>",
        "remember": "Dlhšej strane prislúcha kratšia výška. Súčin strana·výška je vždy rovnaký — obsah."
      },
      {
        "id": "ex-perim",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Obvod kosodĺžnika",
        "html": "<p>Obvod je súčet všetkých štyroch strán. Protiľahlé strany sú rovnaké, preto dve strany a a dve strany b:</p><div class=\"formula\">o = 2·(a + b)<span class=\"formula-note\">výška v obvode nefiguruje</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Kosodĺžnik: a = 12 cm, b = 15 cm, vₐ = 5 cm.</p><p>o = 2·(12 + 15) = 2·27 = <strong>54 cm</strong></p></div><div class=\"compare\"><div class=\"bad\"><span class=\"mini-label\">ČASTÁ CHYBA</span><p>o = 4a</p><p>Platí iba pre kosoštvorec — kosodĺžnik má dve rôzne strany.</p></div><div class=\"good\"><span class=\"mini-label\">SPRÁVNE</span><p>o = 2(a + b)</p><p>Platí pre každý kosodĺžnik, aj pre obdĺžnik.</p></div></div><div class=\"warning\"><strong>Pozor:</strong> Obvod a obsah nie sú prepojené: dva kosodĺžniky s rovnakým obvodom môžu mať rôzne obsahy a naopak.</div>",
        "remember": "Obvod kosodĺžnika: o = 2(a + b). Obsah: S = a·vₐ."
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
        "id": "c-area",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "obsah kosodĺžnika",
        "question": "Kosodĺžnik má strany a = 9 cm a b = 5 cm. Výška na stranu a je 4 cm. Aký je jeho obsah?",
        "options": [
          "45 cm²",
          "20 cm²",
          "18 cm²",
          "36 cm²"
        ],
        "answer": 3,
        "correct": "S = a·vₐ = 9·4 = 36 cm². Číslo 45 by bol súčin strán a·b (to je obdĺžnik), 20 vznikne, keď sa výška vynásobí nesprávnou stranou.",
        "hint": "Výška 4 cm patrí k strane a, preto ju násobíme práve touto stranou."
      },
      {
        "id": "c-formula",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "voľba vzorca",
        "question": "Kosodĺžnik má strany a, b a výšku vₐ na stranu a. Ktorý vzorec dáva jeho obsah?",
        "options": [
          "S = a·b",
          "S = a·vₐ",
          "S = 2·(a + b)",
          "S = a·b/2"
        ],
        "answer": 1,
        "correct": "Obsah je strana krát príslušná výška. S = a·b je obdĺžnik a 2(a + b) je obvod.",
        "hint": "Z obdĺžnika, ktorý vznikne presunutím trojuholníka, má strany a a vₐ."
      },
      {
        "id": "n-vb1",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "obsah a výšky",
        "title": "Výška na druhú stranu",
        "prompt": "Kosodĺžnik má obsah 60 cm² a stranu b = 12 cm. Aká je výška v_b na stranu b v cm?",
        "validate": "exact",
        "answer": 5,
        "success": "S = b·v_b, teda v_b = 60 : 12 = 5 cm.",
        "hint": "Vzorec S = b·v_b prepíš na delenie.",
        "reveal": "Správne je 5: v_b = 60 : 12 = 5 cm."
      },
      {
        "id": "n-a1",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "obsah a výšky",
        "title": "Strana z obsahu",
        "prompt": "Kosodĺžnik má obsah 70 cm² a výšku vₐ = 7 cm. Aká dlhá je strana a v cm?",
        "validate": "exact",
        "answer": 10,
        "success": "a = S : vₐ = 70 : 7 = 10 cm.",
        "hint": "Obsah delíme výškou, nie opačne.",
        "reveal": "Správne je 10: a = 70 : 7 = 10 cm."
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
        "id": "c-rect",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "rozdiel od obdĺžnika",
        "question": "Obdĺžnik má strany 12 cm a 5 cm. Kosodĺžnik má strany 12 cm a 6 cm a výšku 5 cm na stranu 12 cm. Čo platí?",
        "options": [
          "Obsahy sú rovnaké, obvod kosodĺžnika je väčší.",
          "Kosodĺžnik má väčší obsah aj väčší obvod.",
          "Obsahy aj obvody sú rovnaké.",
          "Obsahy sú rovnaké, obvod obdĺžnika je väčší."
        ],
        "answer": 0,
        "correct": "Obsahy: 12·5 = 60 cm² oba. Obvody: obdĺžnik 2(12 + 5) = 34 cm, kosodĺžnik 2(12 + 6) = 36 cm. Šikmá strana je dlhšia ako výška.",
        "hint": "Porovnaj obsahy (strana × výška) a obvody (súčet strán) zvlášť."
      },
      {
        "id": "ex-sin",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Obsah z dvoch strán a uhla",
        "html": "<p>Niekedy výšku nepoznáme, ale poznáme stranu b a uhol α medzi stranami a, b. V pravouhlom trojuholníku APD je b prepona a vₐ je odvesna oproti uhlu α:</p><div class=\"logic-visual\"><svg viewBox=\"0 0 520 300\" role=\"img\" aria-label=\"Kosodĺžnik ABCD so stranami a a b, uhlom α pri vrchole A a výškou va na stranu a\"><polygon points=\"90,260 190,260 190,90\" fill=\"currentColor\" fill-opacity=\"0.16\" stroke=\"none\"/><polygon points=\"90,260 340,260 440,90 190,90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><line x1=\"190\" y1=\"90\" x2=\"190\" y2=\"260\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><polyline points=\"204,260 204,246 190,246\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"74\" y=\"268\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >A</text><text x=\"356\" y=\"268\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >B</text><text x=\"456\" y=\"88\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >C</text><text x=\"184\" y=\"78\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >D</text><text x=\"190\" y=\"284\" font-size=\"16\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >P</text><text x=\"255\" y=\"290\" font-size=\"22\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" font-style=\"italic\">a</text><text x=\"410\" y=\"183\" font-size=\"22\" text-anchor=\"start\" fill=\"currentColor\" font-family=\"system-ui\" font-style=\"italic\">b</text><text x=\"202\" y=\"182\" font-size=\"22\" text-anchor=\"start\" fill=\"currentColor\" font-family=\"system-ui\" font-style=\"italic\">v<tspan font-size=\"14\" dy=\"5\">a</tspan></text><text x=\"142\" y=\"252\" font-size=\"20\" text-anchor=\"start\" fill=\"currentColor\" font-family=\"system-ui\" >α</text></svg></div><p>Z definície sínusu: sin α = vₐ / b, teda <span class=\"hl\">vₐ = b · sin α</span>. Dosadením do S = a·vₐ dostaneme:</p><div class=\"formula\">S = a · b · sin α<span class=\"formula-note\">α je uhol medzi stranami a a b</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Kosodĺžnik: a = 10 cm, b = 6 cm, α = 30° (sin 30° = ½).</p><p>vₐ = 6·½ = 3 cm</p><p>S = 10·3 = <strong>30 cm²</strong></p></div><p>Kontrola so známym: pri α = 90° je sin 90° = 1, takže S = a·b — obdĺžnik. Susedný uhol má 180° − α a rovnaký sínus (napr. sin 150° = sin 30° = ½), preto je obsah rovnaký, nech vezmeme ktorýkoľvek z dvoch uhlov.</p>",
        "remember": "S = a·b·sin α. Pri α = 90° dostaneme obdĺžnik: S = a·b."
      },
      {
        "id": "n-sin1",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "obsah cez sínus",
        "title": "Obsah zo strán a uhla",
        "prompt": "Kosodĺžnik má strany a = 10 cm a b = 6 cm, ktoré zvierajú uhol 30°. Použi sin 30° = ½. Aký je jeho obsah v cm²?",
        "validate": "exact",
        "answer": 30,
        "success": "S = 10·6·½ = 30 cm².",
        "hint": "S = a·b·sin α, kde sin 30° = 0,5.",
        "reveal": "Správne je 30: 10·6 = 60, a polovica z toho je 30."
      },
      {
        "id": "n-sin2",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "výška cez sínus",
        "title": "Výška z uhla",
        "prompt": "V kosodĺžniku má strana b = 8 cm a so stranou a zviera uhol 30°. Použi sin 30° = ½. Aká je výška vₐ v cm?",
        "validate": "exact",
        "answer": 4,
        "success": "vₐ = b·sin α = 8·½ = 4 cm.",
        "hint": "Výška je odvesna oproti uhlu α a b je prepona.",
        "reveal": "Správne je 4: vₐ = 8·½ = 4 cm."
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
          "S = a·b·sin α"
        ],
        "items": [
          {
            "text": "obdĺžnik so stranami a, b",
            "answer": "S = a·b"
          },
          {
            "text": "kosodĺžnik: strana a a výška na ňu",
            "answer": "S = a·vₐ"
          },
          {
            "text": "kosoštvorec: obe uhlopriečky",
            "answer": "S = e·f/2"
          },
          {
            "text": "kosodĺžnik: strany a, b a uhol medzi nimi",
            "answer": "S = a·b·sin α"
          },
          {
            "text": "kosoštvorec: strana a výška na ňu",
            "answer": "S = a·vₐ"
          },
          {
            "text": "štvorec: strana a (je to obdĺžnik s b = a)",
            "answer": "S = a·b"
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
        "id": "err2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "chyby v obvode",
        "question": "Žiak počítal obvod kosodĺžnika s a = 12 cm, b = 8 cm: o = 12 + 8 = 20 cm. Kde je chyba?",
        "options": [
          "Mal strany vynásobiť: 12·8 = 96 cm.",
          "Obvod je súčet všetkých štyroch strán: 2·(12 + 8) = 40 cm.",
          "Mal použiť vzorec o = 4a.",
          "Žiadna chyba, obvod je 20 cm."
        ],
        "answer": 1,
        "correct": "Kosodĺžnik má štyri strany: dve dlhé 12 cm a dve kratšie 8 cm.",
        "hint": "Koľko strán má štvoruholník a koľko z nich si započítal?"
      },
      {
        "id": "c-multi",
        "type": "choice",
        "phase": "PRENES",
        "skill": "viackrokové úlohy",
        "question": "Kosodĺžnik má obvod 36 cm, stranu a = 10 cm a výšku na ňu 6 cm. Aký je jeho obsah?",
        "options": [
          "48 cm²",
          "80 cm²",
          "30 cm²",
          "60 cm²"
        ],
        "answer": 3,
        "correct": "Druhú stranu (b = 8 cm z obvodu) pre obsah nepotrebujeme: S = a·vₐ = 10·6 = 60 cm². Údaj o obvode bol „navyše“.",
        "hint": "Ktoré dva údaje vstupujú do vzorca pre obsah?"
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
            "html": "Kosodĺžnik má strany a = 14 cm a b = 6 cm. Vypočítaj obvod.",
            "answer": "o = 2·(14 + 6) = <strong>40 cm</strong>"
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
            "html": "Kosodĺžnik má strany a = 14 cm a b = 10 cm, ktoré zvierajú uhol 30° (sin 30° = ½). Vypočítaj výšku vₐ a obsah.",
            "answer": "vₐ = 10·½ = <strong>5 cm</strong>; S = 14·5 = <strong>70 cm²</strong>"
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
            "level": "rozsirenie",
            "html": "Kosodĺžnik má obsah 120 cm². Nájdi aspoň tri dvojice (strana, výška), ktoré by to mohli byť, v celých cm.",
            "answer": "Súčin musí byť 120, napr. 12·10, 15·8, 20·6, 24·5, 30·4. Odpovedá každá dvojica s týmto súčinom."
          },
          {
            "level": "bonus",
            "html": "Kosodĺžnik má strany 12 cm a 8 cm a uhol 30° medzi nimi. Vypočítaj obsah. Ako sa zmení, ak by uhol bol 150°?",
            "answer": "S = 12·8·½ = <strong>48 cm²</strong>. Pri 150°: sin 150° = sin 30° = ½, obsah sa <strong>nezmení</strong> (48 cm²) — ide o ten istý kosodĺžnik, uhol 150° je jeho susedný uhol."
          },
          {
            "level": "bonus",
            "html": "Obsah kosodĺžnika je 96 cm², výšky sú vₐ = 6 cm a v_b = 8 cm. Vypočítaj obvod.",
            "answer": "a = 96 : 6 = 16 cm; b = 96 : 8 = 12 cm; o = 2·(16 + 12) = <strong>56 cm</strong>"
          },
          {
            "level": "bonus",
            "html": "Kosodĺžnik má strany 10 cm a 6 cm. Aký bude obsah pri uhle 30°, pri 90° a pri 150°? Pri ktorom uhle je obsah najväčší?",
            "answer": "30°: 10·6·½ = <strong>30 cm²</strong>; 90°: 10·6·1 = <strong>60 cm²</strong>; 150°: <strong>30 cm²</strong>. Najväčší je pri 90° (obdĺžnik)."
          }
        ]
      },
      {
        "id": "arg",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Prečo nie S = a · b",
        "prompt": "Vlastnými slovami vysvetli, prečo sa obsah kosodĺžnika nerovná súčinu jeho dvoch susedných strán. Pomôž si obrázkom alebo príkladom s číslami.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Kosodĺžnik sa dá premeniť na obdĺžnik so stranami a a vₐ (odrežem trojuholník a presuniem ho), nie a a b. Šikmá strana b je dlhšia ako výška vₐ, preto by súčin a·b bol väčší než skutočný obsah. Napríklad pre a = 12 cm, b = 15 cm a vₐ = 5 cm je skutočný obsah 60 cm², nie 180 cm².",
        "placeholder": "Obsah nie je a·b, pretože..."
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
