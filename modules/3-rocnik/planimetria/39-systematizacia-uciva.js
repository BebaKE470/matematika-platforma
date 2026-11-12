MathPlatform.registerModule({
  "id": "3-u02-h039",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 39 · Systematizácia učiva",
    "prerequisites": [
      "učivo hodín 22–38 (trojuholník, štvoruholníky, mnohouholník, kruh a jeho časti)",
      "Pytagorova veta z 2. ročníka",
      "prevody jednotiek dĺžky a obsahu",
      "úpravy výrazov a zlomky z 1. ročníka"
    ],
    "planContent": [
      "Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka."
    ],
    "planPerformance": [
      "Poznať a vedieť opísať vlastnosti základných rovinných útvarov.",
      "Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov."
    ],
    "goals": [
      "zostaviť prehľad vzorcov obvodu a obsahu všetkých útvarov celku",
      "vybrať vzorec podľa útvaru a dopočítať chýbajúci rozmer",
      "riešiť zmiešané úlohy vrátane zložených útvarov",
      "rozpoznať a opraviť typické chyby"
    ],
    "competencies": [
      "systematizácia poznatkov",
      "prepájať obrázok, slovný opis a vzorec",
      "logické myslenie a kontrola výsledku",
      "presný zápis s jednotkami"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie: reprezentácie, modelovanie, presný matematický jazyk a argumentácia.",
      "Rozšírenie: položky ROZŠÍRENIE a BONUS (kruh opísaný obdĺžniku, rovnoramenný lichobežník, zmena obsahu pri zmene polomeru)."
    ],
    "flow": [
      "0–5 min: zhrnutie celku a tabuľka vzorcov (žiaci dopĺňajú z pamäti)",
      "5–15 min: rozhodovací postup a dva vzorové príklady (chýbajúca výška, zložený útvar)",
      "15–30 min: platforma (cca 25–35 min podľa tempa): zmiešané otázky a hľadanie chyby",
      "Samostatná práca bez mobilu: rovnoramenný lichobežník; zbierka",
      "Posledných 5 min: typické chyby, sebahodnotenie pred kontrolnou prácou"
    ],
    "diagnostics": [
      "či žiak správne vyberie vzorec podľa útvaru",
      "či rozlíši výšku od šikmej strany",
      "či dopočíta chýbajúci rozmer Pytagorovou vetou",
      "či do obvodu zloženého útvaru nezapočíta vnútornú spoločnú čiaru",
      "či pri kruhu dosadí polomer, nie priemer"
    ],
    "partialUse": [
      "Modul možno použiť celý (25–35 min), alebo len tabuľku vzorcov a otázky; zbierku zadať ako domácu úlohu.",
      "Pomôcky: zošit, pravítko; kalkulačka nie je potrebná.",
      "Zbierka a worksheet.tasks sú určené na papier; v generátore pracovných listov ich možno zaradiť na tlačený list.",
      "Hodnotenie: priebežná spätná väzba a sebahodnotenie; XP nie sú známka."
    ]
  },
  "student": {
    "title": "Systematizácia učiva",
    "subtitle": "Téma 39 · Planimetria: prehľad vzorcov",
    "intro": "Prehľad vzorcov celého celku, rozhodovací postup, typické chyby a zmiešané cvičenie. Počítaj na papieri, v aplikácii zapisuješ výsledok.",
    "estimatedTime": "25–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo všetko sme v celku Planimetria prešli",
        "html": "<p>Za posledné hodiny sme sa naučili merať základné rovinné útvary: <strong>trojuholník, štvorec, obdĺžnik, lichobežník, kosoštvorec, kosodĺžnik, mnohouholník, kruh</strong> a jeho časti. V každom prípade nás zaujímali dve veličiny:</p>\n<div class=\"compare\"><div class=\"good\"><span class=\"mini-label\">OBVOD</span><p>súčet dĺžok strán; dĺžka hranice útvaru; v cm, m</p></div><div class=\"good\"><span class=\"mini-label\">OBSAH</span><p>veľkosť plochy; v cm², m²</p></div></div>\n<p>Dnes si všetky vzorce zosumarizujeme, naučíme sa rozhodnúť, <span class=\"hl\">ktorý použiť</span>, a precvičíme si typické chyby.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "zostaviť si prehľad vzorcov obvodu a obsahu všetkých útvarov celku",
          "vybrať správny vzorec podľa náčrtu a zadaných údajov",
          "dopočítať chýbajúci rozmer (Pytagorova veta, uhlopriečky, výška)",
          "rozpoznať a opraviť typické chyby"
        ]
      },
      {
        "id": "overview",
        "type": "info",
        "phase": "POCHOP",
        "title": "Prehľad útvarov a vzorcov",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 600 340\" role=\"img\" aria-label=\"Prehľad rovinných útvarov s vyznačenými rozmermi: trojuholník, obdĺžnik, kosodĺžnik, kosoštvorec, lichobežník a kruh, každý so vzorcom pre obvod a obsah\" font-size=\"14\" fill=\"currentColor\" font-family=\"sans-serif\"><polygon points=\"30,120 150,120 100,35\" fill=\"rgba(155,107,47,.25)\" stroke=\"#9b6b2f\" stroke-width=\"2.5\"/><line x1=\"100\" y1=\"35\" x2=\"100\" y2=\"120\" stroke=\"currentColor\" stroke-dasharray=\"4 3\"/><text x=\"86\" y=\"136\" >a</text><text x=\"104\" y=\"82\" >v</text><text x=\"20\" y=\"158\" font-weight=\"bold\">Trojuholník</text><text x=\"20\" y=\"176\" font-size=\"12\">o = a + b + c;  S = a·v : 2</text><rect x=\"235\" y=\"45\" width=\"130\" height=\"75\" fill=\"rgba(155,107,47,.25)\" stroke=\"#9b6b2f\" stroke-width=\"2.5\"/><text x=\"296\" y=\"136\" >a</text><text x=\"372\" y=\"88\" >b</text><text x=\"220\" y=\"158\" font-weight=\"bold\">Obdĺžnik (štvorec)</text><text x=\"220\" y=\"176\" font-size=\"12\">o = 2(a + b);  S = a·b</text><polygon points=\"420,120 520,120 560,45 460,45\" fill=\"rgba(155,107,47,.25)\" stroke=\"#9b6b2f\" stroke-width=\"2.5\"/><line x1=\"460\" y1=\"45\" x2=\"460\" y2=\"120\" stroke=\"currentColor\" stroke-dasharray=\"4 3\"/><text x=\"470\" y=\"136\" >a</text><text x=\"464\" y=\"88\" >v</text><text x=\"555\" y=\"92\" >b</text><text x=\"420\" y=\"158\" font-weight=\"bold\">Kosodĺžnik</text><text x=\"420\" y=\"176\" font-size=\"12\">o = 2(a + b);  S = a·v</text><polygon points=\"30,250 90,215 150,250 90,285\" fill=\"rgba(155,107,47,.25)\" stroke=\"#9b6b2f\" stroke-width=\"2.5\"/><line x1=\"30\" y1=\"250\" x2=\"150\" y2=\"250\" stroke=\"currentColor\" stroke-dasharray=\"4 3\"/><line x1=\"90\" y1=\"215\" x2=\"90\" y2=\"285\" stroke=\"currentColor\" stroke-dasharray=\"4 3\"/><text x=\"100\" y=\"246\" font-size=\"12\">e</text><text x=\"94\" y=\"272\" font-size=\"12\">f</text><text x=\"54\" y=\"224\" >a</text><text x=\"20\" y=\"306\" font-weight=\"bold\">Kosoštvorec</text><text x=\"20\" y=\"324\" font-size=\"12\">o = 4a;  S = e·f : 2</text><polygon points=\"235,285 365,285 340,215 260,215\" fill=\"rgba(155,107,47,.25)\" stroke=\"#9b6b2f\" stroke-width=\"2.5\"/><line x1=\"340\" y1=\"215\" x2=\"340\" y2=\"285\" stroke=\"currentColor\" stroke-dasharray=\"4 3\"/><text x=\"296\" y=\"299\" >a</text><text x=\"296\" y=\"209\" >c</text><text x=\"344\" y=\"254\" >v</text><text x=\"220\" y=\"316\" font-weight=\"bold\">Lichobežník</text><text x=\"220\" y=\"334\" font-size=\"12\">S = (a+c)·v : 2</text><circle cx=\"480\" cy=\"250\" r=\"42\" fill=\"rgba(155,107,47,.25)\" stroke=\"#9b6b2f\" stroke-width=\"2.5\"/><line x1=\"480\" y1=\"250\" x2=\"522\" y2=\"250\" stroke=\"currentColor\"/><text x=\"496\" y=\"244\" >r</text><text x=\"420\" y=\"316\" font-weight=\"bold\">Kruh</text><text x=\"420\" y=\"334\" font-size=\"12\">o = 2πr;  S = πr²</text></svg></div><div class=\"table-wrap\"><table class=\"truth\"><thead><tr><th>Útvar</th><th>Obvod</th><th>Obsah</th></tr></thead><tbody>\n<tr><td>Trojuholník</td><td>a + b + c</td><td>a · v<sub>a</sub> : 2</td></tr>\n<tr><td>Štvorec</td><td>4a</td><td>a²</td></tr>\n<tr><td>Obdĺžnik</td><td>2(a + b)</td><td>a · b</td></tr>\n<tr><td>Kosoštvorec</td><td>4a</td><td>a · v alebo e · f : 2</td></tr>\n<tr><td>Kosodĺžnik</td><td>2(a + b)</td><td>a · v<sub>a</sub></td></tr>\n<tr><td>Lichobežník</td><td>a + b + c + d</td><td>(a + c) · v : 2</td></tr>\n<tr><td>Kruh</td><td>2πr</td><td>πr²</td></tr>\n<tr><td>Výseč (uhol α)</td><td>2r + 2πr · α/360</td><td>πr² · α/360</td></tr>\n<tr><td>Medzikružie</td><td>2πR + 2πr</td><td>π(R² − r²)</td></tr>\n</tbody></table></div>\n<p>Výška v je vždy <span class=\"hl\">kolmá</span> na základňu. Pri šikmých stranách (kosodĺžnik, lichobežník) nie je výška to isté ako strana.</p>",
        "remember": "Trojuholník a lichobežník: delíme dvoma. Kosodĺžnik a obdĺžnik: bez delenia. Kruh: π · polomer."
      },
      {
        "id": "procedure",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Rozhodovací postup: ktorý vzorec použiť",
        "html": "<ol class=\"steps\"><li><strong>Pomenuj útvar.</strong> Je to trojuholník, štvoruholník (aký?), kruh alebo zložený útvar?</li>\n<li><strong>Načrtni a označ údaje</strong> aj s jednotkami. Vyznač, čo sa hľadá.</li>\n<li><strong>Obvod alebo obsah?</strong> Okolo dokola je obvod, plocha je obsah.</li>\n<li><strong>Vyber vzorec</strong> z tabuľky a skontroluj, či máš všetky rozmery.</li>\n<li><strong>Čo chýba? Dopočítaj.</strong> Pravouhlý trojuholník: Pytagorova veta. Výška alebo uhol: pravouhlý trojuholník a goniometria. Uhlopriečky kosoštvorca: Pytagorova veta v ¼ kosoštvorca.</li>\n<li><strong>Zložený útvar:</strong> rozlož ho na jednoduché časti. Obsahy sčítaj (útvary vedľa seba) alebo odčítaj (diera).</li>\n<li><strong>Dosaď, vypočítaj, zapíš odpoveď s jednotkou</strong> a skontroluj odhadom.</li></ol>",
        "remember": "Najprv útvar a náčrt, potom vzorec. Vzorec bez obrázka je najčastejší zdroj chýb."
      },
      {
        "id": "ex-pyth",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Vzorové príklady 1 a 2: chýbajúci rozmer",
        "html": "<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1 · ROVNORAMENNÝ TROJUHOLNÍK</span>\n<p>Rovnoramenný trojuholník má základňu 10 cm a ramená po 13 cm. Vypočítaj obvod a obsah.</p>\n<ol class=\"steps\"><li>Obvod: o = 10 + 13 + 13 = <strong>36 cm</strong>.</li>\n<li>Výška na základňu rozpolí základňu: vznikne pravouhlý trojuholník s odvesnou 5 cm a preponou 13 cm.</li>\n<li>Pytagorova veta: v² = 13² − 5² = 169 − 25 = 144, teda v = 12 cm.</li>\n<li>Obsah: S = 10 · 12 : 2 = <strong>60 cm²</strong>.</li></ol></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2 · KOSOŠTVOREC</span>\n<p>Kosoštvorec má uhlopriečky e = 12 cm a f = 16 cm. Vypočítaj obvod a obsah.</p>\n<ol class=\"steps\"><li>Uhlopriečky sa rozpoľujú a sú navzájom kolmé. Strana je preponou pravouhlého trojuholníka s odvesnami 6 cm a 8 cm.</li>\n<li>a² = 6² + 8² = 36 + 64 = 100, teda a = 10 cm.</li>\n<li>Obvod: o = 4 · 10 = <strong>40 cm</strong>.</li>\n<li>Obsah: S = e · f : 2 = 12 · 16 : 2 = <strong>96 cm²</strong>.</li></ol></div>\n<div class=\"warning\"><strong>Pozor:</strong> do vzorca S = a · v : 2 patrí výška (kolmica na základňu), nie rameno trojuholníka. Rameno (13 cm) je šikmé a bolo by príliš dlhé.</div>"
      },
      {
        "id": "ex-house",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Vzorový príklad 3: zložený útvar",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 520 300\" role=\"img\" aria-label=\"Päťuholník v tvare domčeka: štvorec so stranou 8 metrov a nad ním trojuholník so základňou 8 metrov a výškou 3 metre\" font-size=\"14\" fill=\"currentColor\" font-family=\"sans-serif\"><polygon points=\"40,280 200,280 200,120 120,60 40,120\" fill=\"rgba(155,107,47,.25)\" stroke=\"#9b6b2f\" stroke-width=\"3\"/><line x1=\"40\" y1=\"120\" x2=\"200\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"120\" y1=\"60\" x2=\"120\" y2=\"120\" stroke=\"currentColor\" stroke-dasharray=\"4 3\"/><text x=\"112\" y=\"298\" >8 m</text><text x=\"8\" y=\"205\" >8 m</text><text x=\"128\" y=\"96\" >v = 3 m</text><text x=\"50\" y=\"86\" font-size=\"12\">5 m</text><text x=\"168\" y=\"86\" font-size=\"12\">5 m</text><text x=\"240\" y=\"90\" font-weight=\"bold\">Domček = štvorec + trojuholník</text><text x=\"240\" y=\"122\" >Štvorec: 8 · 8 = 64 m²</text><text x=\"240\" y=\"148\" >Strecha: 8 · 3 : 2 = 12 m²</text><text x=\"240\" y=\"174\" font-weight=\"bold\">Spolu: 76 m²</text><text x=\"240\" y=\"210\" >Rameno strechy (Pytagorova veta):</text><text x=\"240\" y=\"234\" >√(4² + 3²) = 5 m</text><text x=\"240\" y=\"264\" font-weight=\"bold\">Obvod: 8 + 8 + 8 + 5 + 5 = 34 m</text></svg></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 3 · DOMČEK</span>\n<p>Pôdorys sa skladá zo štvorca so stranou 8 m a trojuholníka nad ním so základňou 8 m a výškou 3 m. Aký má obsah a obvod?</p>\n<ol class=\"steps\"><li>Obsah: štvorec 64 m² <span class=\"hl\">plus</span> trojuholník 12 m² = <strong>76 m²</strong>.</li>\n<li>Rameno trojuholníka: odvesny 4 m (polovica základne) a 3 m, preponu určíme: √(16 + 9) = 5 m.</li>\n<li>Obvod: len <span class=\"hl\">vonkajšia hranica</span>. Spoločná strana štvorca a trojuholníka (8 m) do obvodu nepatrí: 8 + 8 + 8 + 5 + 5 = <strong>34 m</strong>.</li></ol></div>",
        "remember": "Obsah zloženého útvaru: súčet alebo rozdiel obsahov častí. Do obvodu patrí len vonkajšia hranica, vnútorná spoločná čiara nie."
      },
      {
        "id": "errors",
        "type": "explain",
        "phase": "NÁJDI CHYBU",
        "title": "Typické chyby",
        "html": "<div class=\"compare\"><div class=\"bad\"><span class=\"mini-label\">CHYBA</span><p>Obsah lichobežníka (a + c) · v</p></div><div class=\"good\"><span class=\"mini-label\">SPRÁVNE</span><p>(a + c) · v : 2</p></div></div>\n<div class=\"compare\"><div class=\"bad\"><span class=\"mini-label\">CHYBA</span><p>Obsah trojuholníka a · b : 2 so šikmým ramenom b</p></div><div class=\"good\"><span class=\"mini-label\">SPRÁVNE</span><p>a · v : 2 s kolmou výškou v</p></div></div>\n<div class=\"compare\"><div class=\"bad\"><span class=\"mini-label\">CHYBA</span><p>Obsah kruhu s priemerom d = 10 cm: π · 10²</p></div><div class=\"good\"><span class=\"mini-label\">SPRÁVNE</span><p>r = 5 cm, S = π · 5² = 25π cm²</p></div></div>\n<div class=\"compare\"><div class=\"bad\"><span class=\"mini-label\">CHYBA</span><p>Obvod výseče: len oblúk</p></div><div class=\"good\"><span class=\"mini-label\">SPRÁVNE</span><p>oblúk + dva polomery</p></div></div>\n<div class=\"warning\"><strong>Pozor:</strong> ďalšie chyby: zámena obvodu a obsahu (cm a cm²), nezjednotené jednotky (m a cm v jednom výpočte), výsledok bez jednotky.</div>"
      },
      {
        "id": "matrix-formulas",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "vzorce obsahu",
        "title": "Ktorý vzorec patrí ktorému útvaru?",
        "labels": [
          "a · b",
          "a · v",
          "a · v : 2",
          "(a + c) · v : 2",
          "π · r²",
          "e · f : 2"
        ],
        "items": [
          {
            "text": "obdĺžnik so stranami a, b",
            "answer": "a · b"
          },
          {
            "text": "kosodĺžnik so stranou a a výškou na ňu v",
            "answer": "a · v"
          },
          {
            "text": "trojuholník so stranou a a výškou na ňu v",
            "answer": "a · v : 2"
          },
          {
            "text": "lichobežník s rovnobežnými stranami a, c a výškou v",
            "answer": "(a + c) · v : 2"
          },
          {
            "text": "kruh s polomerom r",
            "answer": "π · r²"
          },
          {
            "text": "kosoštvorec s uhlopriečkami e, f",
            "answer": "e · f : 2"
          }
        ]
      },
      {
        "id": "c-formula",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "lichobežník",
        "question": "Ktorý výraz dáva obsah lichobežníka s rovnobežnými stranami a, c a výškou v?",
        "options": [
          "(a + c) · v : 2",
          "(a + c) · v",
          "a · c · v : 2",
          "a · v : 2 + c"
        ],
        "answer": 0,
        "correct": "Obsah lichobežníka je priemer rovnobežných strán krát výška: ((a + c) : 2) · v.",
        "hint": "Lichobežník je „medzi“ obdĺžnikom a trojuholníkom. Aký je priemer rovnobežných strán?"
      },
      {
        "id": "n-trap",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "lichobežník",
        "title": "Obsah lichobežníka",
        "prompt": "Lichobežník má rovnobežné strany 10 cm a 6 cm a výšku 5 cm. Aký je jeho obsah v cm²?",
        "validate": "exact",
        "answer": 40,
        "success": "S = (10 + 6) · 5 : 2 = 80 : 2 = 40 cm².",
        "hint": "Nezabudni deliť dvoma: S = (a + c) · v : 2.",
        "reveal": "Správne je 40: 16 · 5 : 2."
      },
      {
        "id": "c-rect",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "obvod",
        "question": "Obdĺžnik má strany 7 cm a 3 cm. Aký je jeho obvod?",
        "options": [
          "21 cm",
          "20 cm",
          "10 cm",
          "42 cm"
        ],
        "answer": 1,
        "correct": "o = 2 · (7 + 3) = 20 cm. Číslo 21 je obsah v cm², 10 je len polovica obvodu.",
        "hint": "Obvod je dĺžka celej hranice, obe dvojice strán."
      },
      {
        "id": "n-rhomb",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "kosoštvorec",
        "title": "Obvod kosoštvorca",
        "prompt": "Kosoštvorec má uhlopriečky 16 cm a 30 cm. Aký je jeho obvod v cm?",
        "validate": "exact",
        "answer": 68,
        "success": "Strana: a² = 8² + 15² = 64 + 225 = 289, teda a = 17 cm. Obvod 4 · 17 = 68 cm.",
        "hint": "Uhlopriečky sa rozpoľujú kolmo. Strana je prepona trojuholníka s odvesnami 8 cm a 15 cm.",
        "reveal": "Správne je 68: 4 · 17."
      },
      {
        "id": "c-pyth",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "trojuholník",
        "question": "Pravouhlý trojuholník má odvesny 9 cm a 12 cm (prepona 15 cm). Aký je jeho obsah?",
        "options": [
          "108 cm²",
          "36 cm²",
          "90 cm²",
          "54 cm²"
        ],
        "answer": 3,
        "correct": "Odvesny sú na seba kolmé, preto jedna je výška na druhú: S = 9 · 12 : 2 = 54 cm². Číslo 36 je obvod, nie obsah.",
        "hint": "Pri pravouhlom trojuholníku sú odvesny základňa a výška. Nezabudni deliť dvoma."
      },
      {
        "id": "n-circle",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "kruh",
        "title": "Obvod kruhu z obsahu",
        "prompt": "Kruh má obsah 49π cm². Jeho obvod je k·π cm. Zadaj k.",
        "validate": "exact",
        "answer": 14,
        "success": "r² = 49, takže r = 7 cm. Obvod 2π · 7 = 14π cm.",
        "hint": "Z S = πr² zisti r, potom dosaď do o = 2πr.",
        "reveal": "Správne je 14: o = 2π · 7."
      },
      {
        "id": "c-scale",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "zmena rozmeru",
        "question": "Strana štvorca sa zdvojnásobí (z a na 2a). Koľkokrát väčší bude jeho obsah?",
        "options": [
          "2-krát",
          "8-krát",
          "4-krát",
          "16-krát"
        ],
        "answer": 2,
        "correct": "S = (2a)² = 4a², teda 4-krát. Obvod sa zdvojnásobí (4 · 2a = 2 · 4a), obsah vzrastie so druhou mocninou.",
        "hint": "Dosaď: ak a = 3, obsah je 9. Aký je obsah pre 2a = 6?"
      },
      {
        "id": "n-square",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "štvorec",
        "title": "Obsah z obvodu",
        "prompt": "Štvorec má obvod 36 cm. Aký je jeho obsah v cm²?",
        "validate": "exact",
        "answer": 81,
        "success": "a = 36 : 4 = 9 cm, S = 9² = 81 cm².",
        "hint": "Z obvodu 4a zisti stranu a.",
        "reveal": "Správne je 81: 9 · 9."
      },
      {
        "id": "n-rect",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "obdĺžnik",
        "title": "Obdĺžnik z uhlopriečky",
        "prompt": "Obdĺžnik má jednu stranu 6 cm a uhlopriečku 10 cm. Aký je jeho obsah v cm²?",
        "validate": "exact",
        "answer": 48,
        "success": "Druhá strana: b² = 10² − 6² = 64, teda b = 8 cm. S = 6 · 8 = 48 cm².",
        "hint": "Uhlopriečka a dve strany tvoria pravouhlý trojuholník. Pytagorova veta.",
        "reveal": "Správne je 48: 6 · 8."
      },
      {
        "id": "n-parall",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "kosodĺžnik",
        "title": "Obsah kosodĺžnika",
        "prompt": "Kosodĺžnik má základňu 7 cm a výšku na ňu 3 cm. Šikmá strana má 4 cm. Aký je jeho obsah v cm²?",
        "validate": "exact",
        "answer": 21,
        "success": "S = a · v = 7 · 3 = 21 cm². Šikmá strana 4 cm do obsahu nevstupuje, patrí do obvodu.",
        "hint": "Obsah kosodĺžnika je základňa krát výška (kolmá).",
        "reveal": "Správne je 21: 7 · 3."
      },
      {
        "id": "sort-claims",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "vlastnosti vzorcov",
        "title": "Platí alebo neplatí?",
        "question": "Rozhodni, či tvrdenie platí.",
        "labels": [
          "platí",
          "neplatí"
        ],
        "items": [
          {
            "text": "Kosodĺžnik a obdĺžnik s rovnakou základňou a výškou majú rovnaký obsah.",
            "answer": true,
            "why": "Oba majú obsah a · v. Šikmá strana sa v obsahu neprejaví."
          },
          {
            "text": "Obsah lichobežníka je súčin dvoch rovnobežných strán a výšky.",
            "answer": false,
            "why": "Rovnobežné strany sa sčítajú: (a + c) · v : 2."
          },
          {
            "text": "Ak sa polomer kruhu zdvojnásobí, jeho obvod sa zdvojnásobí.",
            "answer": true,
            "why": "Obvod 2πr rastie priamo úmerne s polomerom."
          },
          {
            "text": "Ak sa polomer kruhu zdvojnásobí, jeho obsah sa zdvojnásobí.",
            "answer": false,
            "why": "Obsah πr² rastie s druhou mocninou polomeru, teda 4-krát."
          },
          {
            "text": "Trojuholník so stranami 3 cm, 4 cm a 5 cm je pravouhlý a má obsah 6 cm².",
            "answer": true,
            "why": "3² + 4² = 5², je pravouhlý, S = 3 · 4 : 2 = 6 cm²."
          },
          {
            "text": "Kosoštvorec so stranou 5 cm má vždy obsah 25 cm².",
            "answer": false,
            "why": "To platí len pre štvorec. Obsah kosoštvorca závisí od výšky alebo uhlopriečok."
          }
        ]
      },
      {
        "id": "err-trap",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "lichobežník",
        "question": "Žiak počíta obsah lichobežníka s rovnobežnými stranami 8 cm a 4 cm a výškou 5 cm takto: S = (8 + 4) · 5 = 60 cm². Čo je na tom zle?",
        "options": [
          "Mal sčítať všetky štyri strany lichobežníka",
          "Chýba delenie dvoma: správne je (8 + 4) · 5 : 2 = 30 cm²",
          "Mal vynásobiť všetky tri čísla: 8 · 4 · 5 = 160 cm²",
          "Nič, 60 cm² je správny výsledok"
        ],
        "answer": 1,
        "correct": "Lichobežník má polovičný obsah „obdĺžnika (a + c) · v“, preto (8 + 4) · 5 : 2 = 30 cm².",
        "hint": "Porovnaj so vzorcom v tabuľke. Čo v postupe chýba?"
      },
      {
        "id": "err-tri",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "trojuholník",
        "question": "Pravouhlý trojuholník má odvesny 6 cm a 8 cm a preponu 10 cm. Žiak počíta obsah: S = 6 · 10 : 2 = 30 cm². Čo je zle?",
        "options": [
          "Mal vynásobiť všetky tri strany",
          "Pri trojuholníku sa nedelí dvoma",
          "Nič, 30 cm² je správny výsledok",
          "Ako výšku použil preponu; správne je 6 · 8 : 2 = 24 cm²"
        ],
        "answer": 3,
        "correct": "Odvesny sú na seba kolmé, preto jedna je základňa a druhá výška: S = 6 · 8 : 2 = 24 cm². Prepona je šikmá, výškou nie je.",
        "hint": "Ktorá strana je v pravouhlom trojuholníku kolmá na základňu 6 cm?"
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Zmiešaný príklad",
        "html": "<p>Rovnoramenný lichobežník má základne 14 cm a 6 cm a ramená po 5 cm. Načrtni ho a vyznač výšku. Dopočítaj výšku pomocou Pytagorovej vety a vypočítaj <strong>obvod</strong> a <strong>obsah</strong> lichobežníka. Výsledky zapíš s jednotkami.</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: systematizácia",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Rieš v zošite, výsledky zapíš s jednotkou. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "html": "Obdĺžnik má strany 9 cm a 4 cm. Vypočítaj obvod a obsah.",
            "answer": "o = 2 · (9 + 4) = <strong>26 cm</strong>; S = 9 · 4 = <strong>36 cm²</strong>."
          },
          {
            "level": "zaklad",
            "html": "Trojuholník má základňu 10 cm a výšku na ňu 6 cm. Vypočítaj jeho obsah.",
            "answer": "S = 10 · 6 : 2 = <strong>30 cm²</strong>."
          },
          {
            "level": "zaklad",
            "html": "Lichobežník má rovnobežné strany 12 cm a 8 cm a výšku 5 cm. Vypočítaj obsah.",
            "answer": "S = (12 + 8) · 5 : 2 = <strong>50 cm²</strong>."
          },
          {
            "level": "zaklad",
            "html": "Kruh má polomer 6 cm. Vypočítaj obvod a obsah.",
            "answer": "o = 2π · 6 = <strong>12π cm</strong>; S = π · 36 = <strong>36π cm²</strong>."
          },
          {
            "level": "rozsirenie",
            "html": "Kosoštvorec má stranu 13 cm a jednu uhlopriečku 24 cm. Vypočítaj druhú uhlopriečku, obvod a obsah.",
            "answer": "Polovica uhlopriečky: 12 cm, druhá polovica: √(13² − 12²) = √25 = 5 cm, teda f = 10 cm. Obvod 4 · 13 = <strong>52 cm</strong>. Obsah 24 · 10 : 2 = <strong>120 cm²</strong>."
          },
          {
            "level": "rozsirenie",
            "html": "Rovnoramenný trojuholník má základňu 16 cm a ramená po 17 cm. Vypočítaj jeho obvod a obsah.",
            "answer": "Obvod 17 + 17 + 16 = <strong>50 cm</strong>. Výška: v² = 17² − 8² = 225, v = 15 cm. Obsah 16 · 15 : 2 = <strong>120 cm²</strong>."
          },
          {
            "level": "rozsirenie",
            "html": "Výseč má polomer 12 cm a stredový uhol 150°. Vypočítaj obsah, dĺžku oblúka a obvod výseče.",
            "answer": "Zlomok 150/360 = 5/12. S = 144π · 5/12 = <strong>60π cm²</strong>; l = 24π · 5/12 = <strong>10π cm</strong>; obvod = <strong>(24 + 10π) cm</strong>."
          },
          {
            "level": "rozsirenie",
            "html": "Útvar tvaru L vznikne z obdĺžnika 10 cm × 6 cm vyňatím rohu 4 cm × 3 cm. Vypočítaj obsah a obvod.",
            "answer": "Obsah: 60 − 12 = <strong>48 cm²</strong>. Obvod: vyňatím rohu sa obvod nezmení (stena rohu nahradí rovnako dlhú hranu): 2 · (10 + 6) = <strong>32 cm</strong>."
          },
          {
            "level": "bonus",
            "html": "Obdĺžnik 8 cm × 6 cm je vpísaný do kruhu (vrcholy ležia na kružnici). Vypočítaj obsah časti kruhu mimo obdĺžnika.",
            "answer": "Uhlopriečka: √(64 + 36) = 10 cm je priemer, r = 5 cm. Kruh 25π, obdĺžnik 48: <strong>(25π − 48) cm²</strong>."
          },
          {
            "level": "bonus",
            "html": "Rovnoramenný lichobežník má základne 14 cm a 6 cm a ramená po 5 cm. Vypočítaj obvod a obsah.",
            "answer": "Výška: (14 − 6) : 2 = 4 cm je odvesna, v² = 5² − 4² = 9, v = 3 cm. Obvod 14 + 6 + 5 + 5 = <strong>30 cm</strong>. Obsah (14 + 6) · 3 : 2 = <strong>30 cm²</strong>."
          },
          {
            "level": "bonus",
            "html": "Polomer kruhu sa zväčší o 50 %. O koľko percent narastie jeho obsah?",
            "answer": "Nový polomer je 1,5r, obsah π · (1,5r)² = 2,25 · πr². Obsah narastie o <strong>125 %</strong>."
          }
        ]
      },
      {
        "id": "arg",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "title": "Prečo delíme dvoma?",
        "prompt": "Vlastnými slovami vysvetli, prečo sa pri trojuholníku a lichobežníku v obsahu delí dvoma, kým pri obdĺžniku a kosodĺžniku nie.",
        "model": "Vzor: Obdĺžnik alebo kosodĺžnik s rovnakou základňou a výškou ako trojuholník sa dá rozdeliť uhlopriečkou na dva rovnaké trojuholníky, preto má trojuholník polovičný obsah. Lichobežník je ako priemer dvoch rovnobežných strán krát výška, preto sa zrátané strany delia dvoma."
      },
      {
        "id": "transfer",
        "type": "choice",
        "phase": "MATURITNÝ FORMÁT",
        "skill": "modelovanie",
        "question": "Okno tvaru kosoštvorca má uhlopriečky 60 cm a 80 cm. Aký obsah má sklo?",
        "options": [
          "4 800 cm²",
          "2 400 cm²",
          "140 cm²",
          "5 000 cm²"
        ],
        "answer": 1,
        "correct": "S = e · f : 2 = 60 · 80 : 2 = 2 400 cm². Bez delenia dvoma by si dostal obsah obdĺžnika 4 800 cm².",
        "hint": "Použi vzorec cez uhlopriečky a nezabudni deliť dvoma."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Označ, ako dobre to zvládaš. Nie je to známka. Čo máš 🔴 alebo 🟡, si prejdi v tabuľke vzorcov a v zbierke.",
        "skills": [
          "vzorce obvodu a obsahu trojuholníka a štvoruholníkov",
          "obvod a obsah kruhu a výseče",
          "dopočítať chýbajúci rozmer (Pytagorova veta)",
          "zložený útvar: sčítať alebo odčítať",
          "rozpoznať typické chyby"
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
        "html": "Obdĺžnik má strany 15 cm a 8 cm. Vypočítaj obvod a obsah.",
        "answer": "o = <strong>46 cm</strong>; S = <strong>120 cm²</strong>."
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 3,
        "html": "Trojuholník má základňu 14 cm a výšku na ňu 9 cm. Vypočítaj obsah.",
        "answer": "S = 14 · 9 : 2 = <strong>63 cm²</strong>."
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 3,
        "html": "Lichobežník má rovnobežné strany 13 cm a 7 cm a výšku 6 cm. Vypočítaj obsah.",
        "answer": "S = (13 + 7) · 6 : 2 = <strong>60 cm²</strong>."
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 5,
        "html": "Kosoštvorec má uhlopriečky 10 cm a 24 cm. Vypočítaj jeho obvod a obsah.",
        "answer": "a² = 5² + 12² = 169, a = 13 cm; o = <strong>52 cm</strong>; S = 10 · 24 : 2 = <strong>120 cm²</strong>."
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 5,
        "html": "Výseč má polomer 9 cm a stredový uhol 40°. Vypočítaj obsah, dĺžku oblúka a obvod.",
        "answer": "40/360 = 1/9; S = 81π/9 = <strong>9π cm²</strong>; l = 18π/9 = <strong>2π cm</strong>; obvod <strong>(18 + 2π) cm</strong>."
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 6,
        "html": "Rovnoramenný lichobežník má základne 20 cm a 10 cm a ramená 13 cm. Vypočítaj obvod a obsah.",
        "answer": "(20 − 10) : 2 = 5, v² = 13² − 5² = 144, v = 12 cm. Obvod 20 + 10 + 13 + 13 = <strong>56 cm</strong>; S = (20 + 10) · 12 : 2 = <strong>180 cm²</strong>."
      }
    ]
  }
});
