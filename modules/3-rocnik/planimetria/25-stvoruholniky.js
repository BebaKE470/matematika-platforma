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
      "opísať štvoruholník (vrcholy, strany, uhlopriečky) a použiť súčet uhlov 360°",
      "rozdeliť štvoruholníky na rovnobežníky, lichobežníky, deltoid a ostatné",
      "vymenovať vlastnosti strán, uhlov a uhlopriečok kosodĺžnika, kosoštvorca, obdĺžnika, štvorca, lichobežníka a deltoidu",
      "rozlíšiť, ktorý útvar je aj iným útvarom (štvorec je obdĺžnik aj kosoštvorec)"
    ],
    "competencies": [
      "prepájať obrázok, slovný opis a symbolický zápis",
      "presne používať pojmy „práve jedna“ a „každý“",
      "dopočítať veľkosti uhlov a overiť ich súčtom 360°",
      "zdôvodniť tvrdenie vlastnosťami útvaru"
    ],
    "enrichment": [
      "dôkaz súčtu uhlov uhlopriečkou",
      "úlohy s pomerom uhlov a úlohy na pravdivosť tvrdení o útvaroch",
      "Návrh maturitného štandardu je použitý iba ako obohatenie: reprezentácie, modelovanie, presný matematický jazyk a argumentácia."
    ],
    "flow": [
      "0–5 min: opakovanie súčtu uhlov trojuholníka; otázka „koľko má štvoruholník?“",
      "5–15 min: výklad, rozdelenie uhlopriečkou, delenie štvoruholníkov, tabuľka vlastností",
      "15–25 min: platforma: dopočítavanie uhlov, priraďovanie vlastností, pravda/nepravda",
      "25–35 min: samostatná úloha BEZ MOBILU a zbierka podľa úrovní",
      "35–45 min: rozbor chýb podľa živých výsledkov"
    ],
    "diagnostics": [
      "používa 180° namiesto 360° pri štvoruholníku",
      "zamieňa rovnobežník a lichobežník (počet dvojíc rovnobežných strán)",
      "pripisuje každému rovnobežníku vlastnosti obdĺžnika (rovnaké alebo kolmé uhlopriečky)",
      "nevie, že štvorec je aj obdĺžnik a kosoštvorec"
    ],
    "partialUse": [
      "pri nedostatku času vynechať bonus a deltoid",
      "uhly počítať na papieri, mobil slúži na kontrolu a klasifikáciu",
      "pri ŠVVP ponechať tabuľku vlastností viditeľnú"
    ]
  },
  "student": {
    "title": "Štvoruholníky",
    "subtitle": "Téma 25 · Planimetria",
    "intro": "Naučíš sa rozlišovať štvoruholníky, použiť súčet uhlov 360° a poznať vlastnosti rovnobežníkov, lichobežníkov a deltoidu.",
    "estimatedTime": "25–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Zo ZŠ poznáš <strong>trojuholník</strong> a vieš, že súčet jeho vnútorných uhlov je <strong>180°</strong>. Poznáš aj <strong>rovnobežky</strong> (priamky, ktoré sa nikdy nepretnú), štvorec a obdĺžnik. Z 2. ročníka poznáš Pytagorovu vetu.</p><div class=\"example\"><span class=\"mini-label\">OPAKOVANIE</span><p>Trojuholník má uhly 50° a 70°.</p><p>Tretí uhol: 180° − 50° − 70° = <strong>60°</strong></p></div><p>Dnes sa pozrieme na útvary so <strong>štyrmi stranami</strong>. Zistíš, ako sa delia na skupiny, čo majú spoločné a ako z jednej vlastnosti dopočítať ďalšie. Všetko sa opiera o to, čo už vieš o trojuholníku.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "poznať štvoruholník, jeho vrcholy, strany a uhlopriečky",
          "použiť súčet vnútorných uhlov 360° na dopočítanie uhla",
          "rozlíšiť rovnobežníky, lichobežníky a deltoid podľa vlastností",
          "vedieť, ktorý útvar je zároveň iným útvarom (štvorec je aj obdĺžnik)"
        ]
      },
      {
        "id": "basics",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Štvoruholník a súčet jeho uhlov",
        "html": "<p><strong>Štvoruholník ABCD</strong> má štyri vrcholy (A, B, C, D), štyri strany (AB, BC, CD, DA) a štyri vnútorné uhly (α, β, γ, δ). Úsečky, ktoré spájajú protiľahlé vrcholy (AC a BD), sa volajú <strong>uhlopriečky</strong>. Vrcholy píšeme postupne po obvode, nie krížom.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 420 240\" role=\"img\" aria-label=\"Štvoruholník ABCD rozdelený uhlopriečkou AC na dva trojuholníky\"><g font-family=\"system-ui\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\" stroke=\"none\"><polygon points=\"60,200 340,200 380,60 110,40\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" /><line x1=\"60\" y1=\"200\" x2=\"380\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><text x=\"44\" y=\"218\" font-size=\"16\" >A</text><text x=\"350\" y=\"220\" font-size=\"16\" >B</text><text x=\"396\" y=\"56\" font-size=\"16\" >C</text><text x=\"98\" y=\"30\" font-size=\"16\" >D</text><text x=\"92\" y=\"188\" font-size=\"14\" >α</text><text x=\"316\" y=\"188\" font-size=\"14\" >β</text><text x=\"356\" y=\"86\" font-size=\"14\" >γ</text><text x=\"128\" y=\"66\" font-size=\"14\" >δ</text><text x=\"262\" y=\"160\" font-size=\"14\" >180°</text><text x=\"186\" y=\"106\" font-size=\"14\" >180°</text><text x=\"240\" y=\"124\" font-size=\"13\" font-style=\"italic\">AC</text></g></svg></div><p>Nakreslená uhlopriečka AC rozdelila štvoruholník na <strong>dva trojuholníky</strong> ABC a ACD. Každý má uhly so súčtom 180°. Uhly štvoruholníka sú dokopy uhly oboch trojuholníkov, preto:</p><div class=\"formula\"><span class=\"mini-label\">SÚČET UHLOV</span>α + β + γ + δ = 2 · 180° = 360°<span class=\"formula-note\">Platí pre každý štvoruholník, s ktorým dnes pracujeme.</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD · dopočítaj štvrtý uhol</span><p>Štvoruholník má uhly 85°, 110° a 70°.</p><p>Spolu: 85° + 110° + 70° = 265°</p><p>Chýbajúci uhol: 360° − 265° = <strong>95°</strong></p></div><div class=\"warning\"><strong>Pozor:</strong> V trojuholníku je súčet uhlov 180°, v štvoruholníku <strong>360°</strong>. Pri dopočítavaní si vždy najprv povedz, o aký útvar ide.</div>",
        "remember": "Súčet vnútorných uhlov štvoruholníka je 360°."
      },
      {
        "id": "kinds",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Ako sa štvoruholníky delia",
        "html": "<p>Štvoruholníky triedime podľa toho, <strong>koľko dvojíc rovnobežných strán</strong> majú a či majú rovnako dlhé susedné strany.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 520 200\" role=\"img\" aria-label=\"Tri druhy štvoruholníkov: rovnobežník, lichobežník, deltoid\"><g font-family=\"system-ui\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\" stroke=\"none\"><polygon points=\"20,120 130,120 175,40 65,40\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" /><text x=\"97\" y=\"150\" font-size=\"14\" font-weight=\"700\">rovnobežník</text><text x=\"97\" y=\"170\" font-size=\"11\" >dve dvojice rovnobežných strán</text><polygon points=\"205,120 335,120 295,40 240,40\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" /><text x=\"270\" y=\"150\" font-size=\"14\" font-weight=\"700\">lichobežník</text><text x=\"270\" y=\"170\" font-size=\"11\" >práve jedna dvojica rovnobežných strán</text><polygon points=\"430,10 480,60 430,130 380,60\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" /><line x1=\"430\" y1=\"10\" x2=\"430\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/><text x=\"430\" y=\"150\" font-size=\"14\" font-weight=\"700\">deltoid</text><text x=\"430\" y=\"170\" font-size=\"11\" >susedné strany rovnako dlhé v dvoch dvojiciach</text><line x1=\"448\" y1=\"29\" x2=\"456\" y2=\"33\" stroke=\"currentColor\" stroke-width=\"2\" /><line x1=\"404\" y1=\"29\" x2=\"412\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"2\" /></g></svg></div><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Rovnobežník</div><p class=\"term-rule\">Dve dvojice <span class=\"hl\">rovnobežných</span> strán (protiľahlé strany sú rovnobežné). Sem patria <strong>kosodĺžnik, kosoštvorec, obdĺžnik, štvorec</strong>.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Lichobežník</div><p class=\"term-rule\">Práve <span class=\"hl\">jedna</span> dvojica rovnobežných strán. Rovnobežné strany sú <strong>základne</strong> (a, c), ostatné dve sú <strong>ramená</strong> (b, d).</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Deltoid</div><p class=\"term-rule\">Dve dvojice <span class=\"hl\">susedných</span> strán sú rovnako dlhé (nie protiľahlých). Má os súmernosti, ktorou je jedna z uhlopriečok.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Ostatné štvoruholníky</div><p class=\"term-rule\">Žiadna z uvedených vlastností: nemajú rovnobežné strany ani dvojice rovnakých strán (tzv. rôznobežníky).</p></div></div><div class=\"warning\"><strong>Pozor:</strong> Rovnobežník má <strong>dve</strong> dvojice rovnobežných strán, lichobežník iba <strong>jednu</strong>. Slová „dve dvojice“ a „práve jedna dvojica“ rozhodujú o tom, do ktorej skupiny útvar patrí.</div>",
        "remember": "Rovnobežník: 2 dvojice rovnobežných strán. Lichobežník: práve 1 dvojica. Deltoid: susedné strany rovnako dlhé."
      },
      {
        "id": "par",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Rovnobežníky a ich vlastnosti",
        "html": "<p>Pre každý <strong>rovnobežník ABCD</strong> platí:</p><div class=\"logic-visual\"><svg viewBox=\"0 0 420 240\" role=\"img\" aria-label=\"Rovnobežník ABCD s uhlopriečkami, ktoré sa pretínajú v bode S\"><g font-family=\"system-ui\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\" stroke=\"none\"><polygon points=\"40,190 250,190 330,60 120,60\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" /><line x1=\"40\" y1=\"190\" x2=\"330\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-dasharray=\"6 4\"/><line x1=\"250\" y1=\"190\" x2=\"120\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-dasharray=\"6 4\"/><text x=\"26\" y=\"208\" font-size=\"16\" >A</text><text x=\"256\" y=\"210\" font-size=\"16\" >B</text><text x=\"346\" y=\"58\" font-size=\"16\" >C</text><text x=\"106\" y=\"52\" font-size=\"16\" >D</text><text x=\"190\" y=\"124\" font-size=\"16\" >S</text><text x=\"76\" y=\"178\" font-size=\"14\" >α</text><text x=\"222\" y=\"178\" font-size=\"14\" >β</text><text x=\"145\" y=\"212\" font-size=\"15\" >a</text><text x=\"225\" y=\"50\" font-size=\"15\" >a</text><text x=\"63\" y=\"130\" font-size=\"15\" >b</text><text x=\"308\" y=\"130\" font-size=\"15\" >b</text><line x1=\"145\" y1=\"184\" x2=\"145\" y2=\"196\" stroke=\"currentColor\" stroke-width=\"2\" /><line x1=\"225\" y1=\"54\" x2=\"225\" y2=\"66\" stroke=\"currentColor\" stroke-width=\"2\" /></g></svg></div><ol class=\"steps\"><li>Protiľahlé strany sú <strong>rovnobežné a rovnako dlhé</strong>: |AB| = |CD| = a, |BC| = |AD| = b.</li><li>Protiľahlé uhly sú <strong>rovnaké</strong>: α = γ, β = δ.</li><li>Susedné uhly dávajú dokopy <strong>180°</strong>: α + β = 180°. (Uhly α a β ležia pri tej istej strane AB, ktorá spája dve rovnobežné strany.)</li><li>Uhlopriečky sa <strong>navzájom rozpoľujú</strong>: |AS| = |SC|, |BS| = |SD|.</li></ol><p>Špeciálne rovnobežníky majú navyše ďalšie vlastnosti. Prečítaj si tabuľku po stĺpcoch:</p><div class=\"table-wrap\"><table class=\"truth\"><thead><tr><th>vlastnosť</th><th>kosodĺžnik</th><th>kosoštvorec</th><th>obdĺžnik</th><th>štvorec</th></tr></thead><tbody>\n<tr><td>protiľahlé strany rovnobežné a rovnako dlhé</td><td>áno</td><td>áno</td><td>áno</td><td>áno</td></tr>\n<tr><td>všetky strany rovnako dlhé</td><td>nie</td><td>áno</td><td>nie</td><td>áno</td></tr>\n<tr><td>všetky uhly pravé</td><td>nie</td><td>nie</td><td>áno</td><td>áno</td></tr>\n<tr><td>uhlopriečky sa navzájom polovia</td><td>áno</td><td>áno</td><td>áno</td><td>áno</td></tr>\n<tr><td>uhlopriečky rovnako dlhé</td><td>nie</td><td>nie</td><td>áno</td><td>áno</td></tr>\n<tr><td>uhlopriečky navzájom kolmé</td><td>nie</td><td>áno</td><td>nie</td><td>áno</td></tr>\n</tbody></table></div><p>Kosoštvorec: uhlopriečky navyše <strong>rozpoľujú jeho uhly</strong>. Ak má uhol pri A veľkosť 50°, uhlopriečka AC ho rozdelí na dva uhly po 25°.</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Rovnobežník má α = 68°.</p><p>β = 180° − 68° = <strong>112°</strong></p><p>γ = α = <strong>68°</strong>, δ = β = <strong>112°</strong></p><p>Kontrola: 68° + 112° + 68° + 112° = 360° ✔</p></div>",
        "remember": "V rovnobežníku: protiľahlé uhly sú rovnaké, susedné dávajú 180°, uhlopriečky sa polovia."
      },
      {
        "id": "trap",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Lichobežník a deltoid",
        "html": "<p>V lichobežníku ABCD s rovnobežnými základňami <strong>AB ∥ CD</strong> platí, že uhly pri jednom ramene sa dopĺňajú do 180°:</p><div class=\"logic-visual\"><svg viewBox=\"0 0 420 240\" role=\"img\" aria-label=\"Lichobežník ABCD so základňami AB a CD a ramenami BC a AD\"><g font-family=\"system-ui\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\" stroke=\"none\"><polygon points=\"40,190 330,190 260,60 120,60\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" /><text x=\"26\" y=\"208\" font-size=\"16\" >A</text><text x=\"344\" y=\"208\" font-size=\"16\" >B</text><text x=\"274\" y=\"56\" font-size=\"16\" >C</text><text x=\"106\" y=\"52\" font-size=\"16\" >D</text><text x=\"185\" y=\"212\" font-size=\"14\" >základňa a (AB)</text><text x=\"190\" y=\"46\" font-size=\"14\" >základňa c (CD)</text><text x=\"58\" y=\"130\" font-size=\"14\" >rameno d</text><text x=\"318\" y=\"130\" font-size=\"14\" >rameno b</text><text x=\"78\" y=\"178\" font-size=\"14\" >α</text><text x=\"296\" y=\"178\" font-size=\"14\" >β</text><text x=\"238\" y=\"84\" font-size=\"14\" >γ</text><text x=\"142\" y=\"84\" font-size=\"14\" >δ</text></g></svg></div><div class=\"formula\"><span class=\"mini-label\">UHLY PRI RAMENÁCH</span>α + δ = 180° &nbsp;a&nbsp; β + γ = 180°<span class=\"formula-note\">Uhly pri tom istom ramene (AD alebo BC).</span></div><p><strong>Rovnoramenný lichobežník</strong> má rovnako dlhé ramená (b = d). Vtedy sú rovnaké aj uhly pri základni (α = β, γ = δ) a rovnaké sú aj uhlopriečky. <strong>Pravouhlý lichobežník</strong> má jedno rameno kolmé na základne (dva pravé uhly).</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD · lichobežník</span><p>AB ∥ CD, α = 72°, β = 81°.</p><p>δ = 180° − 72° = <strong>108°</strong></p><p>γ = 180° − 81° = <strong>99°</strong></p><p>Kontrola: 72° + 81° + 99° + 108° = 360° ✔</p></div><p><strong>Deltoid ABCD</strong> s |AB| = |AD| a |CB| = |CD| má os súmernosti AC. Uhlopriečky sú navzájom kolmé a uhly pri vrcholoch B a D (mimo osi) sú <strong>rovnaké</strong>.</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD · deltoid</span><p>α = 60°, β = δ = 110°.</p><p>γ = 360° − 60° − 110° − 110° = <strong>80°</strong></p></div>",
        "remember": "Lichobežník: uhly pri ramene dávajú 180°. Deltoid: dva rovnaké uhly mimo osi súmernosti."
      },
      {
        "id": "hier",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Čo je aj čo: štvorec, obdĺžnik, kosoštvorec",
        "html": "<p>Niektoré útvary patria do viacerých skupín naraz. Pravidlo je jednoduché: útvar, ktorý má <strong>všetky vlastnosti</strong> skupiny, do nej patrí.</p><div class=\"compare\"><div class=\"bad\"><span class=\"mini-label\">NEPRAVDA</span><p>Každý obdĺžnik je štvorec.</p><p>Každý rovnobežník je obdĺžnik.</p><p>Každý lichobežník je rovnobežník.</p></div><div class=\"good\"><span class=\"mini-label\">PRAVDA</span><p>Každý štvorec je obdĺžnik (má 4 pravé uhly).</p><p>Každý štvorec je kosoštvorec (má 4 rovnaké strany).</p><p>Každý obdĺžnik je rovnobežník.</p></div></div><p>Rozlišuj <strong>„vždy platí“</strong> a <strong>„platí len niekedy“</strong>. Že majú uhlopriečky obdĺžnika rovnakú dĺžku, platí pre každý obdĺžnik. Že sú kolmé, platí len pre obdĺžnik, ktorý je zároveň štvorcom.</p><div class=\"warning\"><strong>Pozor:</strong> Štvorec je špeciálny obdĺžnik, ale obdĺžnik so stranami 6 cm a 3 cm štvorec <strong>nie je</strong>. Smer „aj“ platí iba jedným smerom.</div>",
        "remember": "Štvorec = obdĺžnik + kosoštvorec naraz. Opačne to neplatí."
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "delenie štvoruholníkov",
        "question": "Štvoruholník má dve dvojice rovnobežných strán, všetky štyri strany rovnako dlhé, ale uhly nie sú pravé. Ktorý útvar je to?",
        "options": [
          "obdĺžnik",
          "kosoštvorec",
          "kosodĺžnik",
          "lichobežník"
        ],
        "answer": 1,
        "correct": "Kosoštvorec: dve dvojice rovnobežných strán a všetky strany rovnaké. Pravé uhly by mal štvorec.",
        "hint": "Obdĺžnik má pravé uhly. Kosodĺžnik má rovnaké len protiľahlé strany. Skús každú vlastnosť zo zadania."
      },
      {
        "id": "c2",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "súčet uhlov",
        "question": "Prečo je súčet vnútorných uhlov každého štvoruholníka 360°?",
        "options": [
          "uhlopriečka ho rozdelí na dva trojuholníky a každý má súčet uhlov 180°",
          "každý štvoruholník má štyri pravé uhly, 4 · 90° = 360°",
          "štvoruholník má o jeden vrchol viac ako trojuholník, preto 180° + 90°",
          "uhlopriečky sú navzájom kolmé a tvoria štyri pravé uhly"
        ],
        "answer": 0,
        "correct": "Presne tak: 2 · 180° = 360°. Pravé uhly majú len niektoré štvoruholníky, ale rozdelenie na 2 trojuholníky funguje vždy.",
        "hint": "Pomôž si obrázkom: čo vznikne, keď nakreslíš jednu uhlopriečku?"
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
        "id": "n2",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "rovnobežník",
        "title": "Susedný uhol rovnobežníka",
        "prompt": "Rovnobežník ABCD má pri vrchole A uhol α = 68°. Aký veľký je uhol β pri vrchole B (v stupňoch)?",
        "validate": "exact",
        "answer": 112,
        "success": "Susedné uhly rovnobežníka dávajú 180°: 180° − 68° = 112°.",
        "hint": "Uhly α a β ležia na tej istej strane AB. Aký je ich súčet?",
        "reveal": "Správne je 112°: β = 180° − α."
      },
      {
        "id": "m1",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "vlastnosti útvarov",
        "title": "Ktorý útvar to opisuje?",
        "labels": [
          "rovnobežník",
          "lichobežník",
          "deltoid"
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
            "text": "Susedné strany sú rovnako dlhé v dvoch dvojiciach, protiľahlé strany nie sú rovnaké.",
            "answer": "deltoid"
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
            "text": "Jedna z uhlopriečok je osou súmernosti útvaru.",
            "answer": "deltoid"
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
        "id": "n4",
        "type": "numberInput",
        "phase": "PRENES",
        "skill": "súčet uhlov",
        "title": "Uhly v pomere",
        "prompt": "Uhly štvoruholníka majú veľkosti x, 2x, 3x a 4x. Aký veľký je najväčší z nich (v stupňoch)?",
        "validate": "exact",
        "answer": 144,
        "success": "x + 2x + 3x + 4x = 10x = 360°, x = 36°, najväčší 4x = 144°.",
        "hint": "Zostav rovnicu: súčet všetkých štyroch uhlov je 360°.",
        "reveal": "Správne je 144°: 10x = 360°, x = 36°."
      },
      {
        "id": "n5",
        "type": "numberInput",
        "phase": "PRENES",
        "skill": "kosoštvorec",
        "title": "Uhlopriečka kosoštvorca",
        "prompt": "Uhol pri vrchole A kosoštvorca ABCD je 50°. Uhlopriečka AC rozdelí tento uhol na dva rovnaké uhly. Aký veľký je každý z nich (v stupňoch)?",
        "validate": "exact",
        "answer": 25,
        "success": "Uhlopriečka kosoštvorca rozpoľuje uhol: 50° : 2 = 25°.",
        "hint": "Dva rovnaké uhly dávajú dokopy pôvodný uhol.",
        "reveal": "Správne je 25°."
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
        "id": "e2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "nájdi chybu",
        "question": "Žiak napísal: „Lichobežník má dve dvojice rovnobežných strán, preto je to rovnobežník.“ Kde je chyba?",
        "options": [
          "Lichobežník nemá žiadne rovnobežné strany.",
          "Lichobežník má práve jednu dvojicu rovnobežných strán; dve dvojice majú až rovnobežníky.",
          "Rovnobežník má tri dvojice rovnobežných strán.",
          "Lichobežník je vždy rovnoramenný."
        ],
        "answer": 1,
        "correct": "Presne: práve jedna dvojica rovnobežných strán robí z útvaru lichobežník.",
        "hint": "Zopakuj si, koľko dvojíc rovnobežných strán má lichobežník a koľko rovnobežník."
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
            "level": "zaklad",
            "html": "Rovnobežník má strany 7 cm a 4 cm. Aký je súčet dĺžok všetkých strán?",
            "answer": "7 cm + 4 cm + 7 cm + 4 cm = <strong>22 cm</strong> (protiľahlé strany sú rovnako dlhé)."
          },
          {
            "level": "rozsirenie",
            "html": "Rovnoramenný lichobežník má pri dlhšej základni uhly 70°. Dopočítaj uhly pri kratšej základni.",
            "answer": "Pri kratšej základni má každý uhol 180° − 70° = <strong>110°</strong>. Kontrola: 70° + 70° + 110° + 110° = 360°."
          },
          {
            "level": "rozsirenie",
            "html": "Deltoid ABCD má |AB| = |AD|, |CB| = |CD|, α = 60° a β = δ = 110°. Aký je uhol γ?",
            "answer": "γ = 360° − 60° − 110° − 110° = <strong>80°</strong>."
          },
          {
            "level": "rozsirenie",
            "html": "Kosoštvorec má uhol 64° pri vrchole A. Aký veľký je uhol pri B a aké uhly zvierajú uhlopriečky so stranou AB v bodoch A a B?",
            "answer": "β = 180° − 64° = <strong>116°</strong>. Uhlopriečky rozpoľujú uhly: pri A <strong>32°</strong>, pri B <strong>58°</strong>. (32° + 58° = 90°, preto sú uhlopriečky navzájom kolmé.)"
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
          },
          {
            "level": "bonus",
            "html": "Môže mať štvoruholník tri ostré uhly? A štyri? Zdôvodni súčtom uhlov.",
            "answer": "Tri áno, napr. 80°, 80°, 80°, 120° (súčet 360°). Štyri nie: každý by bol menší ako 90° a súčet by bol menší ako 360°."
          },
          {
            "level": "bonus",
            "html": "Uhlopriečky rovnobežníka sú 10 cm a 14 cm. Ako ďaleko je priesečník S od každého vrcholu?",
            "answer": "Uhlopriečky sa rozpoľujú: S je od dvoch protiľahlých vrcholov vzdialený <strong>5 cm</strong> a od ďalších dvoch <strong>7 cm</strong>."
          },
          {
            "level": "bonus",
            "html": "Dokáž, že súčet vnútorných uhlov štvoruholníka je 360°.",
            "answer": "Uhlopriečka rozdelí štvoruholník na dva trojuholníky, v každom je súčet uhlov 180°. Uhly štvoruholníka sú zložené z uhlov oboch trojuholníkov, preto 2 · 180° = <strong>360°</strong>."
          }
        ],
        "note": "Riešenia si pozri až po vlastnom pokuse."
      },
      {
        "id": "arg",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "title": "Rovnobežník alebo lichobežník?",
        "prompt": "Vlastnými slovami vysvetli, čím sa líši lichobežník od rovnobežníka a prečo je každý rovnobežník „dvojnásobne“ rovnobežný.",
        "model": "Vzor: Rovnobežník má dve dvojice rovnobežných strán, lichobežník iba jednu (rovnobežné strany sú základne, ostatné sú ramená). Preto v rovnobežníku platí α + β = 180° pri oboch dvojiciach strán a protiľahlé uhly sú rovnaké."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Pri každej zručnosti označ, ako sa teraz cítiš.",
        "skills": [
          "viem dopočítať uhol štvoruholníka zo súčtu 360°",
          "viem rozlíšiť rovnobežník, lichobežník a deltoid",
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
