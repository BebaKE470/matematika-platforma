MathPlatform.registerModule({
  "id": "3-u02-h031",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 31 · Obvod a obsah kosoštvorca",
    "prerequisites": [
      "kosoštvorec ako štvoruholník so štyrmi rovnakými stranami (hodina 25)",
      "obvod a obsah štvorca, obdĺžnika a lichobežníka (hodiny 26–29)",
      "Pytagorova veta z 2. ročníka (pravouhlý trojuholník)",
      "sínus ostrého uhla v pravouhlom trojuholníku (bonusová úloha)"
    ],
    "planContent": [
      "Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka."
    ],
    "planPerformance": [
      "Poznať a vedieť opísať vlastnosti základných rovinných útvarov.",
      "Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov."
    ],
    "goals": [
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
      "Obsah kosoštvorca cez sínus: S = a²·sin α (bonusová úloha s uhlom 30°).",
      "Návrh maturitného štandardu je použitý iba ako obohatenie: modelovanie (dlaždice, záhony), presný matematický jazyk a argumentácia."
    ],
    "flow": [
      "0–5 min opakovanie: definícia kosoštvorca a Pytagorova veta",
      "5–10 min vlastnosti kosoštvorca z obrázka (aplikácia: úvod a triedenie tvrdení)",
      "10–22 min aplikácia: o = 4a, S = a·v, S = e·f/2 a Pytagorova veta v štvrtine, s okamžitou spätnou väzbou",
      "22–35 min zápis do zošita: samostatná úloha e = 30 cm, f = 16 cm (bez mobilu)",
      "35–45 min zbierka úloh podľa úrovní a spoločná syntéza: „kedy ktorý vzorec?“"
    ],
    "diagnostics": [
      "Zabudnuté ½ pri S = e·f/2 (obsah vyjde dvojnásobný).",
      "Do Pytagorovej vety žiak dosadí celé uhlopriečky namiesto polovíc.",
      "Zámena výšky so stranou alebo obvodu s obsahom; chýbajúce jednotky (cm vs. cm²).",
      "Žiak predpokladá, že uhlopriečky kosoštvorca sú rovnaké (zámena so štvorcom)."
    ],
    "partialUse": [
      "Na krátku hodinu stačia aktivity do Pytagorovej vety a „Nájdi chybu“; zbierka ide ako domáca úloha.",
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
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Z hodiny 25 vieš, čo je štvoruholník, a z hodín 26–29 poznáš obvod a obsah štvorca, obdĺžnika a lichobežníka. Z 2. ročníka poznáš <strong>Pytagorovu vetu</strong>: v pravouhlom trojuholníku s odvesnami p, q a preponou r platí r² = p² + q².</p><p><span class=\"hl\">Kosoštvorec</span> je štvoruholník, ktorý má <strong>všetky štyri strany rovnako dlhé</strong>. Štvorec je jeho zvláštny prípad (má navyše pravé uhly). Dnes zistíme, ako vypočítať jeho obvod a obsah — a uvidíš, že na obsah máme <strong>dve cesty</strong>: cez výšku a cez uhlopriečky.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "vymenovať vlastnosti kosoštvorca a vysvetliť ich z obrázka",
          "vypočítať obvod o = 4a a obsah S = a·v",
          "vypočítať obsah z uhlopriečok S = e·f/2",
          "pomocou Pytagorovej vety nájsť stranu z uhlopriečok a naopak"
        ]
      },
      {
        "id": "observe",
        "type": "info",
        "phase": "NAJPRV OBRÁZOK",
        "title": "Kosoštvorec a jeho uhlopriečky",
        "html": "<p>Kosoštvorec ABCD má štyri rovnaké strany a (rovnaké úsečky označujú čiarky). Uhlopriečky e = AC a f = BD sa pretínajú v bode O.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 520 300\" role=\"img\" aria-label=\"Kosoštvorec ABCD s uhlopriečkami e a f, ktoré sa pretínajú v bode O pod pravým uhlom\"><polygon points=\"90,165 260,55 430,165 260,275\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><line x1=\"90\" y1=\"165\" x2=\"430\" y2=\"165\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><line x1=\"260\" y1=\"55\" x2=\"260\" y2=\"275\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><circle cx=\"260\" cy=\"165\" r=\"3.5\" fill=\"currentColor\"/><polyline points=\"273,165 273,152 260,152\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"170.7\" y1=\"103.3\" x2=\"179.3\" y2=\"116.7\" stroke=\"currentColor\" stroke-width=\"2.5\" /><line x1=\"349.3\" y1=\"103.3\" x2=\"340.7\" y2=\"116.7\" stroke=\"currentColor\" stroke-width=\"2.5\" /><line x1=\"349.3\" y1=\"226.7\" x2=\"340.7\" y2=\"213.3\" stroke=\"currentColor\" stroke-width=\"2.5\" /><line x1=\"170.7\" y1=\"226.7\" x2=\"179.3\" y2=\"213.3\" stroke=\"currentColor\" stroke-width=\"2.5\" /><text x=\"74\" y=\"172\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >A</text><text x=\"260\" y=\"43\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >B</text><text x=\"446\" y=\"172\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >C</text><text x=\"260\" y=\"301\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >D</text><text x=\"274\" y=\"189\" font-size=\"18\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >O</text><text x=\"150\" y=\"96\" font-size=\"22\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" font-style=\"italic\">a</text><text x=\"160\" y=\"191\" font-size=\"18\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >e/2</text><text x=\"296\" y=\"118\" font-size=\"18\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >f/2</text><text x=\"350\" y=\"155\" font-size=\"18\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >e = AC</text><text x=\"272\" y=\"222\" font-size=\"18\" text-anchor=\"start\" fill=\"currentColor\" font-family=\"system-ui\" >f = BD</text></svg></div><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Strany</div><p class=\"term-rule\">Všetky štyri strany sú rovnako dlhé: AB = BC = CD = DA = a. Protiľahlé strany sú rovnobežné.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Uhly</div><p class=\"term-rule\">Protiľahlé uhly sú rovnaké, susedné uhly majú súčet 180°. Uhly <span class=\"hl\">nemusia byť pravé</span> — preto nejde o štvorec.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Uhlopriečky</div><p class=\"term-rule\">Sú na seba <span class=\"hl\">kolmé</span> a navzájom sa <span class=\"hl\">delia na polovice</span> (AO = OC = e/2, BO = OD = f/2). Zároveň delia vnútorné uhly na dve rovnaké polovice.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Uhlopriečky nie sú rovnaké</div><p class=\"term-rule\">Pri kosoštvorci býva jedna uhlopriečka dlhšia a druhá kratšia. Rovnaké sú len pri štvorci.</p></div></div>",
        "remember": "Kosoštvorec: štyri rovnaké strany, uhlopriečky kolmé a delia sa na polovice."
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
        "id": "ex-height",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Obvod a obsah zo strany a výšky",
        "html": "<p><strong>Obvod</strong> je súčet dĺžok strán. Všetky strany majú dĺžku a, preto platí <span class=\"hl\">o = 4a</span>.</p><p><strong>Obsah</strong>: z vrcholu D spustíme kolmicu na stranu AB — to je <strong>výška v</strong> (bod P je päta výšky). Pravouhlý trojuholník APD odrežeme a presunieme na druhú stranu — z kosoštvorca vznikne obdĺžnik so stranami a a v.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 520 310\" role=\"img\" aria-label=\"Kosoštvorec ABCD so stranou a a výškou v spustenou z vrcholu D na stranu AB\"><polygon points=\"100,265 180,265 180,81.7\" fill=\"currentColor\" fill-opacity=\"0.12\" stroke=\"none\"/><polygon points=\"100,265 300,265 380,81.7 180,81.7\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><line x1=\"180\" y1=\"81.7\" x2=\"180\" y2=\"265\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><polyline points=\"194,265 194,251 180,251\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"200\" y1=\"257\" x2=\"200\" y2=\"273\" stroke=\"currentColor\" stroke-width=\"2.5\" /><line x1=\"332.7\" y1=\"170.1\" x2=\"347.3\" y2=\"176.5\" stroke=\"currentColor\" stroke-width=\"2.5\" /><line x1=\"280\" y1=\"89.7\" x2=\"280\" y2=\"73.7\" stroke=\"currentColor\" stroke-width=\"2.5\" /><line x1=\"147.3\" y1=\"176.5\" x2=\"132.7\" y2=\"170.1\" stroke=\"currentColor\" stroke-width=\"2.5\" /><text x=\"84\" y=\"273\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >A</text><text x=\"316\" y=\"273\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >B</text><text x=\"396\" y=\"77.7\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >C</text><text x=\"174\" y=\"69.7\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >D</text><text x=\"184\" y=\"289\" font-size=\"16\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >P</text><text x=\"220\" y=\"295\" font-size=\"22\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" font-style=\"italic\">a</text><text x=\"192\" y=\"179.3\" font-size=\"22\" text-anchor=\"start\" fill=\"currentColor\" font-family=\"system-ui\" font-style=\"italic\">v</text></svg></div><div class=\"formula\">o = 4a &nbsp;&nbsp;&nbsp; S = a · v<span class=\"formula-note\">a = strana, v = výška na túto stranu; obvod v cm, obsah v cm².</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Kosoštvorec má stranu a = 7 cm a výšku v = 5 cm.</p><p>o = 4·a = 4·7 = <strong>28 cm</strong></p><p>S = a·v = 7·5 = <strong>35 cm²</strong></p></div><div class=\"warning\"><strong>Pozor:</strong> Výška v je kolmá vzdialenosť protiľahlých strán — <span class=\"hl\">nie je to bočná strana</span>. Ak do vzorca dosadíš v = a, dostaneš S = a² a to platí len pre štvorec (kde je výška naozaj rovná strane).</div>",
        "remember": "Obvod kosoštvorca: o = 4a. Obsah: S = a·v. Výška je kolmá na stranu."
      },
      {
        "id": "n-o1",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "obvod kosoštvorca",
        "title": "Obvod zo strany",
        "prompt": "Kosoštvorec má stranu a = 9 cm. Aký je jeho obvod v cm?",
        "validate": "exact",
        "answer": 36,
        "success": "o = 4·9 = 36 cm. Všetky štyri strany majú rovnakú dĺžku.",
        "hint": "Strany sú štyri a všetky sú rovnaké.",
        "reveal": "Správne je 36: o = 4·9 = 36 cm."
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
        "id": "c-s2",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "obsah cez výšku",
        "question": "Kosoštvorec má stranu 10 cm a výšku 6 cm. Aký je jeho obsah?",
        "options": [
          "60 cm²",
          "40 cm²",
          "30 cm²",
          "16 cm²"
        ],
        "answer": 0,
        "correct": "S = a·v = 10·6 = 60 cm². Číslo 40 by bol obvod (4·10), no obvod a obsah sú dve rôzne veličiny.",
        "hint": "Obsah počítame zo strany a výšky na túto stranu. Pozor, nepýtame sa na obvod."
      },
      {
        "id": "c-3",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "obvod vs. obsah",
        "question": "Kosoštvorec má stranu 10 cm. Čo z tejto jedinej informácie vieme vypočítať?",
        "options": [
          "obsah 100 cm²",
          "obvod 40 cm",
          "obsah 50 cm²",
          "dĺžku každej uhlopriečky 10 cm"
        ],
        "answer": 1,
        "correct": "Obvod závisí len od strany: 4·10 = 40 cm. Obsah by sme poznali až s výškou alebo uhlopriečkami — kosoštvorec sa dá „naklopiť“, strana ostane, ale obsah sa zmení.",
        "hint": "Zamysli sa: ak kosoštvorec naklopíš, zmení sa jeho strana alebo jeho obsah?"
      },
      {
        "id": "c-unit",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "jednotky",
        "question": "Strana kosoštvorca je 15 m a výška na ňu 8 m. Ktorý zápis je správny aj s jednotkou?",
        "options": [
          "S = 15·8 = 120 m",
          "S = 15·8 = 120 m³",
          "S = 15·8 = 120 m²",
          "o = 4·15 = 60 m²"
        ],
        "answer": 2,
        "correct": "Obsah meria plochu, preto je v m². Obvod (60 m) by bol v m — dĺžková jednotka.",
        "hint": "Plocha sa meria v štvorcových jednotkách, dĺžka v obyčajných."
      },
      {
        "id": "ex-diag",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Obsah z uhlopriečok",
        "html": "<p>Niekedy poznáme namiesto výšky obe uhlopriečky. Kosoštvorec si vpíšeme do obdĺžnika so stranami e a f — vrcholy kosoštvorca ležia v stredoch strán obdĺžnika.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 520 290\" role=\"img\" aria-label=\"Kosoštvorec vpísaný do obdĺžnika e krát f: štyri sivé trojuholníky tvoria presne polovicu obdĺžnika\"><polygon points=\"90,50 260,50 90,150\" fill=\"currentColor\" fill-opacity=\"0.18\" stroke=\"none\"/><polygon points=\"430,50 430,150 260,50\" fill=\"currentColor\" fill-opacity=\"0.18\" stroke=\"none\"/><polygon points=\"430,250 260,250 430,150\" fill=\"currentColor\" fill-opacity=\"0.18\" stroke=\"none\"/><polygon points=\"90,250 90,150 260,250\" fill=\"currentColor\" fill-opacity=\"0.18\" stroke=\"none\"/><polygon points=\"90,50 430,50 430,250 90,250\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"8 6\"/><polygon points=\"260,50 430,150 260,250 90,150\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><text x=\"260\" y=\"275\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" font-style=\"italic\">e</text><text x=\"440\" y=\"156\" font-size=\"20\" text-anchor=\"start\" fill=\"currentColor\" font-family=\"system-ui\" font-style=\"italic\">f</text><line x1=\"90\" y1=\"150\" x2=\"430\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/><line x1=\"260\" y1=\"50\" x2=\"260\" y2=\"250\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-dasharray=\"7 6\"/></svg></div><p>Štyri sivé trojuholníky v rohoch sú zhodné s trojuholníkmi vnútri kosoštvorca. Kosoštvorec teda zaberie <span class=\"hl\">presne polovicu</span> obdĺžnika e × f.</p><div class=\"formula\">S = <span class=\"frac\"><span class=\"frac-num\">e · f</span><span class=\"frac-den\">2</span></span><span class=\"formula-note\">e, f = dĺžky uhlopriečok</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Uhlopriečky kosoštvorca majú e = 16 cm a f = 12 cm.</p><p>S = e·f/2 = 16·12/2 = 192/2 = <strong>96 cm²</strong></p></div><div class=\"warning\"><strong>Pozor:</strong> Nezabudni na ½. Súčin e·f je obsah celého obdĺžnika — to je dvojnásobok obsahu kosoštvorca.</div><div class=\"compare\"><div class=\"bad\"><span class=\"mini-label\">ČASTÁ CHYBA</span><p>e = 16 cm, f = 12 cm</p><p>S = 16·12 = 192 cm²</p></div><div class=\"good\"><span class=\"mini-label\">SPRÁVNE</span><p>e = 16 cm, f = 12 cm</p><p>S = 16·12/2 = 96 cm²</p></div></div>",
        "remember": "S = e·f/2. Obe uhlopriečky vynásob a výsledok vydeľ dvoma."
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
        "id": "n-ef1",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "obsah cez uhlopriečky",
        "title": "Obsah z uhlopriečok",
        "prompt": "Kosoštvorec má uhlopriečky e = 14 cm a f = 10 cm. Aký je jeho obsah v cm²?",
        "validate": "exact",
        "answer": 70,
        "success": "S = 14·10/2 = 140/2 = 70 cm².",
        "hint": "Vynásob uhlopriečky a výsledok vydeľ dvoma.",
        "reveal": "Správne je 70: S = 14·10/2 = 70 cm²."
      },
      {
        "id": "c-ef2",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "obsah cez uhlopriečky",
        "question": "Kosoštvorec má uhlopriečky 18 cm a 8 cm. Aký je jeho obsah?",
        "options": [
          "144 cm²",
          "26 cm²",
          "36 cm²",
          "72 cm²"
        ],
        "answer": 3,
        "correct": "S = 18·8/2 = 72 cm². Číslo 144 vznikne pri zabudnutom ½ a 26 súčtom uhlopriečok.",
        "hint": "Obsah z uhlopriečok: súčin deleno dvoma, nie súčet."
      },
      {
        "id": "ex-pyth",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Strana z uhlopriečok: Pytagorova veta v štvrtine",
        "html": "<p>Uhlopriečky sú kolmé a polovia sa. Preto sa kosoštvorec rozpadne na <strong>štyri zhodné pravouhlé trojuholníky</strong>. V každom sú odvesny <span class=\"hl\">e/2</span> a <span class=\"hl\">f/2</span> a prepona je strana a.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 520 300\" role=\"img\" aria-label=\"Pravouhlý trojuholník OCB: odvesny sú polovice uhlopriečok, prepona je strana kosoštvorca\"><polygon points=\"110,250 400,250 110,70\" fill=\"currentColor\" fill-opacity=\"0.14\" stroke=\"none\"/><polygon points=\"110,250 400,250 110,70\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" /><polyline points=\"126,250 126,234 110,234\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"255\" y=\"280\" font-size=\"20\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >e/2</text><text x=\"96\" y=\"166\" font-size=\"20\" text-anchor=\"end\" fill=\"currentColor\" font-family=\"system-ui\" >f/2</text><text x=\"277\" y=\"152\" font-size=\"22\" text-anchor=\"start\" fill=\"currentColor\" font-family=\"system-ui\" font-style=\"italic\">a</text><text x=\"100\" y=\"274\" font-size=\"16\" text-anchor=\"end\" fill=\"currentColor\" font-family=\"system-ui\" >O</text><text x=\"414\" y=\"256\" font-size=\"18\" text-anchor=\"start\" fill=\"currentColor\" font-family=\"system-ui\" >C</text><text x=\"110\" y=\"58\" font-size=\"18\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"system-ui\" >B</text></svg></div><div class=\"formula\">a² = (e/2)² + (f/2)²<span class=\"formula-note\">Do Pytagorovej vety patria polovice uhlopriečok, nie celé uhlopriečky.</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Uhlopriečky: e = 16 cm, f = 12 cm. Polovice: 8 cm a 6 cm.</p><p>a² = 8² + 6² = 64 + 36 = 100</p><p>a = <strong>10 cm</strong>, teda o = 4·10 = <strong>40 cm</strong></p></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Strana a = 13 cm, uhlopriečka e = 24 cm. Hľadáme f.</p><p>(f/2)² = a² − (e/2)² = 13² − 12² = 169 − 144 = 25, teda f/2 = 5</p><p>f = <strong>10 cm</strong>, S = 24·10/2 = <strong>120 cm²</strong></p></div><p><strong>Postup:</strong></p><ol class=\"steps\"><li>Nakresli kosoštvorec a jeho uhlopriečky, vyznač pravý uhol.</li><li>Vypočítaj polovice uhlopriečok.</li><li>Zapíš Pytagorovu vetu pre pravouhlý trojuholník (prepona = strana).</li><li>Dopočítaj chýbajúcu stranu, potom obvod alebo obsah.</li></ol>",
        "remember": "Pytagorova veta v kosoštvorci: strana² = (e/2)² + (f/2)²."
      },
      {
        "id": "n-a1",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "strana z uhlopriečok",
        "title": "Strana z uhlopriečok",
        "prompt": "Kosoštvorec má uhlopriečky 16 cm a 12 cm. Aká dlhá je jeho strana v cm?",
        "validate": "exact",
        "answer": 10,
        "success": "Polovice sú 8 a 6, a² = 64 + 36 = 100, a = 10 cm.",
        "hint": "Najprv polovice uhlopriečok, potom Pytagorova veta.",
        "reveal": "Správne je 10: polovice 8 a 6, 8² + 6² = 100."
      },
      {
        "id": "c-pyt",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Pytagorova veta",
        "question": "Kosoštvorec má uhlopriečky 24 cm a 10 cm. Ktorá rovnica správne dáva jeho stranu a?",
        "options": [
          "a² = 24² + 10²",
          "a = 24 + 10",
          "a² = 12² + 5²",
          "a² = 12 + 5"
        ],
        "answer": 2,
        "correct": "Odvesny pravouhlého trojuholníka sú polovice uhlopriečok: 12 a 5. Preto a² = 12² + 5² = 169, a = 13 cm.",
        "hint": "Pravouhlý trojuholník vznikne len v jednej štvrtine kosoštvorca — aké dlhé sú jeho odvesny?"
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
        "id": "n-f1",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "chýbajúca uhlopriečka",
        "title": "Chýbajúca uhlopriečka",
        "prompt": "Kosoštvorec má stranu 13 cm a jednu uhlopriečku 24 cm. Aká dlhá je druhá uhlopriečka v cm?",
        "validate": "exact",
        "answer": 10,
        "success": "e/2 = 12, (f/2)² = 169 − 144 = 25, f/2 = 5, f = 10 cm.",
        "hint": "Strana je prepona. Z 13² − 12² dostaneš druhú odvesnu — a tá je len polovica uhlopriečky!",
        "reveal": "Správne je 10: druhá odvesna je 5 cm, celá uhlopriečka 2·5 = 10 cm."
      },
      {
        "id": "n-v1",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "obsah a výška",
        "title": "Výška z obsahu",
        "prompt": "Kosoštvorec má obsah 60 cm² a stranu 12 cm. Aká je jeho výška v cm?",
        "validate": "exact",
        "answer": 5,
        "success": "Z S = a·v: v = S : a = 60 : 12 = 5 cm.",
        "hint": "Vzorec S = a·v otoč: výšku dostaneš delením.",
        "reveal": "Správne je 5: v = 60 : 12 = 5 cm."
      },
      {
        "id": "n-f2",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "chýbajúca uhlopriečka",
        "title": "Uhlopriečka z obsahu",
        "prompt": "Kosoštvorec má obsah 96 cm² a jednu uhlopriečku 16 cm. Aká dlhá je druhá uhlopriečka v cm?",
        "validate": "exact",
        "answer": 12,
        "success": "Z S = e·f/2: f = 2S/e = 192/16 = 12 cm.",
        "hint": "Obsah = e·f/2, preto e·f = 2·S.",
        "reveal": "Správne je 12: 2·96 = 192 a 192 : 16 = 12."
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
        "id": "err1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "chyby v obsahu",
        "question": "Žiak počítal obsah kosoštvorca s uhlopriečkami 10 cm a 8 cm takto: S = 10·8 = 80 cm². Aká je jeho chyba?",
        "options": [
          "Mal uhlopriečky sčítať, nie vynásobiť.",
          "Mal použiť vzorec S = a², lebo ide o kosoštvorec.",
          "Žiadna chyba, 80 cm² je správne.",
          "Zabudol vydeliť dvoma; obsah je 10·8/2 = 40 cm²."
        ],
        "answer": 3,
        "correct": "Súčin e·f je obsah celého obdĺžnika, kosoštvorec je jeho polovica.",
        "hint": "Porovnaj s obrázkom kosoštvorca vpísaného do obdĺžnika."
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
            "html": "Kosoštvorec má stranu a = 8 cm. Vypočítaj jeho obvod.",
            "answer": "o = 4·8 = <strong>32 cm</strong>"
          },
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
            "html": "Obvod kosoštvorca je 44 cm. Aká je dĺžka jeho strany?",
            "answer": "a = 44 : 4 = <strong>11 cm</strong>"
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
            "html": "Kosoštvorec má obsah 96 cm² a uhlopriečku 16 cm. Aká je druhá uhlopriečka, strana a obvod?",
            "answer": "f = 2·96 : 16 = <strong>12 cm</strong>; polovice 8 a 6, <strong>a = 10 cm</strong>; o = <strong>40 cm</strong>"
          },
          {
            "level": "rozsirenie",
            "html": "Záhon v tvare kosoštvorca má obvod 100 m a výšku 20 m. Koľko eur stojí vysiaty trávnik, ak 1 m² stojí 4 €?",
            "answer": "a = 100 : 4 = 25 m; S = 25·20 = 500 m²; cena = 500·4 = <strong>2 000 €</strong>"
          },
          {
            "level": "rozsirenie",
            "html": "Štvorec a kosoštvorec majú rovnakú stranu 10 cm, výška kosoštvorca je 6 cm. Porovnaj ich obvody a obsahy.",
            "answer": "Obvody sú rovnaké: 4·10 = 40 cm. Obsahy: štvorec 100 cm², kosoštvorec 10·6 = 60 cm², teda štvorec má o <strong>40 cm²</strong> väčší obsah."
          },
          {
            "level": "bonus",
            "html": "Kosoštvorec má stranu 10 cm a ostrý uhol 30°. Vypočítaj výšku (použi sin 30° = ½) a obsah.",
            "answer": "V pravouhlom trojuholníku APD je v = a·sin 30° = 10·½ = <strong>5 cm</strong>; S = a·v = 10·5 = <strong>50 cm²</strong>"
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
          },
          {
            "level": "bonus",
            "html": "Do obdĺžnika 80 cm × 60 cm vpíšeme kosoštvorec, ktorého vrcholy sú v stredoch strán. Aká je jeho strana a obsah? Aký obsah zostane po vystrihnutí?",
            "answer": "Uhlopriečky sú 80 cm a 60 cm; polovice 40 a 30, <strong>a = 50 cm</strong>. S = 80·60/2 = <strong>2 400 cm²</strong>; zostane 80·60 − 2 400 = <strong>2 400 cm²</strong>"
          }
        ]
      },
      {
        "id": "arg",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Prečo deliť dvoma",
        "prompt": "Vlastnými slovami vysvetli, prečo sa pri vzorci S = e·f/2 súčin uhlopriečok delí dvoma. Pomôž si obrázkom kosoštvorca vpísaného do obdĺžnika.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Kosoštvorec môžeme vpísať do obdĺžnika s rozmermi e a f tak, že jeho vrcholy ležia v stredoch strán. Štyri trojuholníky v rohoch obdĺžnika sú zhodné so štyrmi trojuholníkmi vnútri kosoštvorca, takže kosoštvorec je presne polovica obdĺžnika. Obsah obdĺžnika je e·f, preto obsah kosoštvorca je e·f/2.",
        "placeholder": "Delíme dvoma, pretože..."
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
