MathPlatform.registerModule({
  "id": "3-u02-h028",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 28 · Riešenie úloh",
    "prerequisites": [
      "ZŠ: obvod a obsah obdĺžnika, štvorca a trojuholníka; jednotky dĺžky a obsahu (cm, m, cm², m²)",
      "2. ročník: Pytagorova veta (výpočet chýbajúcej strany pravouhlého trojuholníka, uhlopriečka)",
      "1. ročník: algebraické úpravy a vyjadrenie neznámej zo vzorca",
      "učivo hodín 22–27: trojuholník, štvoruholníky, obvod a obsah trojuholníka, štvorca a obdĺžnika"
    ],
    "planContent": [
      "Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka."
    ],
    "planPerformance": [
      "Poznať a vedieť opísať vlastnosti základných rovinných útvarov.",
      "Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov."
    ],
    "goals": [
      "podľa textu úlohy rozhodnúť, či sa pýta na obvod (plot, lišta, obrubník) alebo obsah (podlaha, farba, trávnik, dlažba)",
      "vypočítať obvod a obsah štvorca, obdĺžnika a trojuholníka a z obsahu alebo obvodu dopočítať chýbajúcu stranu",
      "rozložiť zložený útvar (L-tvar, dom so strechou) na známe útvary, prípadne doplniť/odčítať, a vypočítať jeho obsah",
      "určiť počet dlaždíc alebo litrov farby, pritom zjednotiť jednotky (m² ↔ cm²) a zapísať odpoveď vetou s jednotkou"
    ],
    "competencies": [
      "modelovanie: zo slovnej úlohy vytvoriť náčrt s označenými rozmermi",
      "prepájanie obrázku, slovného opisu a vzorca",
      "presný zápis s jednotkami a kontrola rozumnosti výsledku",
      "argumentácia: vysvetliť, prečo sa pri vyrezaní rohu zmení obsah, ale obvod nie"
    ],
    "enrichment": [
      "rozšírenie: zložený útvar s trojuholníkom (štít domu), spätný výpočet strany zo vzťahov medzi stranami",
      "bonus: cestička okolo záhrady (rozdiel obsahov), porovnanie štvorca a obdĺžnika s rovnakým obvodom",
      "maturitný formát: viackrokové slovné úlohy s odpoveďou vetou; autentické maturitné zadania až po prebratí celej planimetrie"
    ],
    "flow": [
      "0–5 min: opakovanie vzorcov pre štvorec, obdĺžnik a trojuholník; otázka „Čo potrebuješ na plot a čo na podlahu?“",
      "5–15 min: postup riešenia slovnej úlohy, rozlíšenie obvodu a obsahu, zložený útvar (L-tvar a dom so strechou), dlaždice a jednotky",
      "15–27 min: platforma: voľby, číselné výpočty, priraďovanie, hľadanie chyby (zabudnutá konverzia jednotiek, odčítanie dĺžok namiesto obsahov)",
      "27–38 min: úloha BEZ MOBILU a zbierka podľa úrovní (základ, rozšírenie, bonus)",
      "38–45 min: spoločný rozbor najčastejších chýb podľa živých výsledkov"
    ],
    "diagnostics": [
      "zamieňa obvod a obsah alebo píše nesprávnu jednotku (m namiesto m²)",
      "pri trojuholníku zabúda deliť dvoma alebo dosadí rameno namiesto výšky",
      "pri zloženom útvare odčíta dĺžky namiesto obsahov, alebo do obvodu započíta vnútornú spoločnú stranu",
      "pri dlaždiciach delí m² hodnotou v cm² bez prevodu jednotiek"
    ],
    "partialUse": [
      "pri nedostatku času vynechať bonusové položky zbierky a časť o trojuholníkovej streche",
      "mobil nahrádza výpočet iba pri kontrole; náčrt a výpočet ostávajú v zošite",
      "pri ŠVVP ponechať postup z úvodu viditeľný a znížiť počet položiek zbierky"
    ]
  },
  "student": {
    "title": "Riešenie úloh",
    "subtitle": "Hodina 28 · Planimetria · Štvorec, obdĺžnik, trojuholník a zložené útvary",
    "intro": "Dnes riešiš slovné úlohy s plotmi, podlahami, dlaždicami a zloženými útvarmi. Najprv sa rozhodni, či ide o obvod alebo obsah, potom rozlož útvar na známe časti. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "25–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Zo ZŠ aj z hodín 23, 26 a 27 poznáš vzorce pre obvod a obsah troch základných útvarov:</p><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Obdĺžnik so stranami a, b</div><p class=\"term-rule\">o = 2 · (a + b) &nbsp;·&nbsp; S = a · b</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Štvorec so stranou a</div><p class=\"term-rule\">o = 4 · a &nbsp;·&nbsp; S = a · a = a²</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Trojuholník so stranou a a výškou v na ňu</div><p class=\"term-rule\">o = a + b + c &nbsp;·&nbsp; S = <span class=\"frac\"><span class=\"frac-num\">a · v</span><span class=\"frac-den\">2</span></span></p></div></div><p><strong>Obvod</strong> je dĺžka hranice útvaru (jednotky m, cm), <strong>obsah</strong> je veľkosť plochy (jednotky m², cm²). Z 2. ročníka tiež vieš, že v pravouhlom trojuholníku platí <strong>Pytagorova veta</strong> a² + b² = c².</p><div class=\"example\"><span class=\"mini-label\">PRIPOMENUTIE</span><p>Obdĺžnik 7 cm × 4 cm: o = 2 · (7 + 4) = 22 cm, S = 7 · 4 = 28 cm²</p></div><p>Dnes tieto vzorce nepoužívame samostatne, ale <strong>v slovných úlohách</strong> a v útvaroch zložených z viacerých častí.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "rozhodnúť, či úloha chce obvod alebo obsah",
          "rozložiť zložený útvar na obdĺžniky, štvorce a trojuholníky",
          "vypočítať počet dlaždíc a správne previesť jednotky",
          "zapísať odpoveď vetou s jednotkou"
        ]
      },
      {
        "id": "postup",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Ako riešiť slovnú úlohu z planimetrie",
        "html": "<p>Pri slovnej úlohe sa neponáhľaj so vzorcom. Najprv pochop, <strong>čo sa vlastne pýta</strong>, a až potom počítaj.</p><ol class=\"steps\"><li>Prečítaj zadanie a podčiarkni, <strong>čo hľadáš</strong> (dĺžka plotu, obsah podlahy, počet dlaždíc, cena).</li><li>Nakresli <strong>náčrt</strong> a napíš k nemu rozmery aj s jednotkami.</li><li>Rozhodni: <strong>okraj</strong> (plot, lišta, obrubník, rám) → obvod. <strong>Plocha</strong> (podlaha, farba na stenu, trávnik, dlažba) → obsah.</li><li>Rozlož útvar na známe časti, napíš vzorec, dosaď <strong>aj s jednotkami</strong> a vypočítaj.</li><li>Skontroluj jednotku (m, alebo m²?) a rozumnosť výsledku a napíš <strong>odpoveď vetou</strong>.</li></ol><div class=\"logic-visual\"><svg viewBox=\"0 0 380 250\" role=\"img\" aria-label=\"Obdĺžnikový pozemok 12 m krát 8 m\"><g font-family=\"system-ui\" font-size=\"16\" text-anchor=\"middle\" fill=\"currentColor\"><polygon points=\"70,40 310,40 310,200 70,200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><text x=\"190\" y=\"30\" text-anchor=\"middle\" font-size=\"16\">12 m</text><text x=\"190\" y=\"226\" text-anchor=\"middle\" font-size=\"16\">12 m</text><text x=\"60\" y=\"125\" text-anchor=\"end\" font-size=\"16\">8 m</text><text x=\"320\" y=\"125\" text-anchor=\"start\" font-size=\"16\">8 m</text><text x=\"190\" y=\"126\" text-anchor=\"middle\" font-size=\"16\">S = ?</text></g></svg></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD · záhrada 12 m × 8 m</span><p>a) Koľko metrov pletiva treba na oplotenie celej záhrady? → <strong>okraj → obvod</strong></p><p>o = 2 · (12 + 8) = 2 · 20 = <strong>40 m</strong></p><p>b) Koľko m² trávnika treba na osiatie? → <strong>plocha → obsah</strong></p><p>S = 12 · 8 = <strong>96 m²</strong></p><p>Odpoveď: Na plot treba 40 m pletiva a na osiatie 96 m² trávnika.</p></div>",
        "remember": "Plot, lišta, obrubník = obvod (m). Podlaha, farba, trávnik, dlažba = obsah (m²)."
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "obvod alebo obsah",
        "question": "Pozemok má tvar obdĺžnika s rozmermi 15 m × 9 m. Okolo celého pozemku sa má natiahnuť pletivo. Koľko metrov pletiva treba?",
        "options": [
          "135 m",
          "48 m",
          "24 m",
          "30 m"
        ],
        "answer": 1,
        "correct": "Správne: pletivo ide po okraji, teda ide o obvod: 2 · (15 + 9) = 48 m.",
        "hint": "Pletivo vedie po okraji pozemku. Pýta sa teda úloha na dĺžku hranice, alebo na veľkosť plochy?"
      },
      {
        "id": "n1",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "štvorec",
        "title": "Štvorcová záhrada",
        "prompt": "Štvorcová záhrada má obvod 36 m. Aký má obsah v m²? (Najprv zisti dĺžku strany.)",
        "validate": "exact",
        "answer": 81,
        "success": "Správne: strana je 36 : 4 = 9 m, obsah S = 9 · 9 = 81 m².",
        "hint": "Obvod štvorca je 4 · a. Z neho vypočítaj stranu a a potom obsah a · a.",
        "reveal": "Správne je 81: a = 36 : 4 = 9 m, S = 9 · 9 = 81 m²."
      },
      {
        "id": "m1",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "obvod alebo obsah",
        "title": "Obvod, alebo obsah? Priraď každej situácii veličinu, ktorú treba vypočítať.",
        "labels": [
          "obvod",
          "obsah"
        ],
        "items": [
          {
            "text": "množstvo sieťoviny na oplotenie ihriska",
            "answer": "obvod"
          },
          {
            "text": "počet dlaždíc na podlahu kúpeľne",
            "answer": "obsah"
          },
          {
            "text": "množstvo farby na natretie steny",
            "answer": "obsah"
          },
          {
            "text": "dĺžka obrubníka okolo trávnika",
            "answer": "obvod"
          },
          {
            "text": "dĺžka podlahovej lišty pozdĺž stien izby",
            "answer": "obvod"
          },
          {
            "text": "koľko rolkového trávnika treba na ihrisko",
            "answer": "obsah"
          }
        ]
      },
      {
        "id": "zlozeny",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Zložený útvar: rozlož, alebo odčítaj",
        "html": "<p>Zložený útvar je zložený z viacerých jednoduchých. Na obsah máš <strong>dve cesty</strong>:</p><div class=\"logic-visual\"><svg viewBox=\"0 0 440 270\" role=\"img\" aria-label=\"L-tvar: obdĺžnik 10 m krát 6 m s vyrezaným rohom 4 m krát 3 m\"><g font-family=\"system-ui\" font-size=\"16\" text-anchor=\"middle\" fill=\"currentColor\"><polygon points=\"60,40 240,40 240,130 360,130 360,220 60,220\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><rect x=\"240\" y=\"40\" width=\"120\" height=\"90\" fill=\"none\" stroke=\"#9b6b2f\" stroke-width=\"2\" stroke-dasharray=\"7 5\"/><text x=\"300\" y=\"90\" text-anchor=\"middle\" font-size=\"14\">vyrezané</text><text x=\"300\" y=\"108\" text-anchor=\"middle\" font-size=\"14\">4 m × 3 m</text><text x=\"150\" y=\"30\" text-anchor=\"middle\" font-size=\"16\">6 m</text><text x=\"250\" y=\"90\" text-anchor=\"start\" font-size=\"16\">3 m</text><text x=\"300\" y=\"150\" text-anchor=\"middle\" font-size=\"16\">4 m</text><text x=\"370\" y=\"180\" text-anchor=\"start\" font-size=\"16\">3 m</text><text x=\"210\" y=\"246\" text-anchor=\"middle\" font-size=\"16\">10 m</text><text x=\"50\" y=\"135\" text-anchor=\"end\" font-size=\"16\">6 m</text></g></svg></div><p>Útvar na obrázku vznikol z obdĺžnika 10 m × 6 m, z ktorého sme v rohu vyrezali obdĺžnik 4 m × 3 m (vyznačený prerušovane).</p><div class=\"compare\"><div class=\"bad\"><span class=\"mini-label\">CESTA A · odčítanie</span><p>S = celý obdĺžnik − vyrezaný roh</p><p>S = 10 · 6 − 4 · 3</p><p>S = 60 − 12 = <strong>48 m²</strong></p></div><div class=\"good\"><span class=\"mini-label\">CESTA B · rozloženie</span><p>Rozdelíme na ľavý obdĺžnik 6 m × 6 m a pravý 4 m × 3 m:</p><p>S = 6 · 6 + 4 · 3 = 36 + 12 = <strong>48 m²</strong></p></div></div><p>Obe cesty dajú rovnaký výsledok, a to je dobrá <strong>kontrola</strong>. Teraz obvod: ideme po celej hranici a sčítame šesť strán: 6 + 3 + 4 + 3 + 6 + 10 = <strong>32 m</strong>. Všimni si, že je to presne obvod pôvodného obdĺžnika 2 · (10 + 6) = 32 m.</p><div class=\"warning\"><strong>Pozor:</strong> Odčítavaj <strong>obsahy</strong> (12 m²), nie dĺžky strán. Výraz 60 − 4 − 3 nedáva obsah, lebo 4 a 3 sú dĺžky v metroch a nie plochy v m².</div>",
        "remember": "Obsah zloženého útvaru = súčet obsahov častí, alebo veľký útvar mínus vyrezaná časť. Obvod = súčet strán po hranici (vnútorné hranice sa nepočítajú)."
      },
      {
        "id": "s1",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "zložené útvary",
        "title": "L-útvar z obdĺžnika 10 m × 6 m",
        "question": "Z obdĺžnika 10 m × 6 m sme v rohu vyrezali obdĺžnik 4 m × 3 m (ako na obrázku vyššie). Je tvrdenie o vzniknutom L-útvare pravdivé?",
        "labels": [
          "Pravda",
          "Nepravda"
        ],
        "items": [
          {
            "text": "Obsah L-útvaru je 48 m².",
            "answer": true,
            "why": "60 − 12 = 48 m²."
          },
          {
            "text": "Obvod L-útvaru je o 14 m menší ako obvod pôvodného obdĺžnika.",
            "answer": false,
            "why": "Vyrezaním rohu sa obvod nezmení: nová hranica 4 m + 3 m nahradí presne tú istú dĺžku pôvodnej hranice."
          },
          {
            "text": "Obvod L-útvaru je 32 m.",
            "answer": true,
            "why": "6 + 3 + 4 + 3 + 6 + 10 = 32 m."
          },
          {
            "text": "Obsah sa dá vypočítať aj ako 6 · 6 + 4 · 3.",
            "answer": true,
            "why": "Ľavý štvorec 6 × 6 a pravý obdĺžnik 4 × 3 dávajú 36 + 12 = 48 m²."
          },
          {
            "text": "Obsah je 60 − 4 − 3 = 53 m².",
            "answer": false,
            "why": "Od obsahu sa odčítava obsah vyrezanej časti (12 m²), nie dĺžky jej strán."
          }
        ]
      },
      {
        "id": "n2",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "zložené útvary",
        "title": "Pozemok s domom",
        "prompt": "Pozemok má tvar obdĺžnika 12 m × 7 m. V jednom rohu stojí garáž tvaru obdĺžnika 5 m × 3 m, ktorá k pozemku nepatrí. Aký obsah v m² má pozemok bez garáže?",
        "validate": "exact",
        "answer": 69,
        "success": "Správne: 12 · 7 − 5 · 3 = 84 − 15 = 69 m².",
        "hint": "Od obsahu celého obdĺžnika odčítaj obsah garáže (5 · 3), nie jej rozmery.",
        "reveal": "Správne je 69: 12 · 7 = 84, 5 · 3 = 15, 84 − 15 = 69 m²."
      },
      {
        "id": "dom",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Zložený útvar s trojuholníkom",
        "html": "<p>Predná stena domu má tvar obdĺžnika, na ktorom stojí trojuholníkový štít. Obsah steny je <strong>súčet</strong> obsahu obdĺžnika a trojuholníka.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 400 295\" role=\"img\" aria-label=\"Štít domu: obdĺžnik 8 m krát 5 m a trojuholník so základňou 8 m a výškou 3 m\"><g font-family=\"system-ui\" font-size=\"16\" text-anchor=\"middle\" fill=\"currentColor\"><polygon points=\"70,100 310,100 310,250 70,250\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><polygon points=\"70,100 310,100 190,10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><line x1=\"190\" y1=\"10\" x2=\"190\" y2=\"100\" stroke=\"#9b6b2f\" stroke-width=\"2.5\" stroke-dasharray=\"7 5\"/><path d=\"M200,100 L200,90 L190,90\" fill=\"none\" stroke=\"#9b6b2f\" stroke-width=\"2\"/><text x=\"200\" y=\"62\" text-anchor=\"start\" font-size=\"16\">v = 3 m</text><text x=\"270\" y=\"52\" text-anchor=\"start\" font-size=\"14\">rameno 5 m</text><text x=\"190\" y=\"124\" text-anchor=\"middle\" font-size=\"14\">základňa 8 m</text><text x=\"190\" y=\"275\" text-anchor=\"middle\" font-size=\"16\">8 m</text><text x=\"60\" y=\"180\" text-anchor=\"end\" font-size=\"16\">5 m</text></g></svg></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD · stena domu</span><p>Obdĺžnik: S₁ = 8 · 5 = 40 m²</p><p>Trojuholník: základňa 8 m, výška <strong>3 m</strong>: S₂ = <span class=\"frac\"><span class=\"frac-num\">8 · 3</span><span class=\"frac-den\">2</span></span> = 12 m²</p><p>Spolu: S = 40 + 12 = <strong>52 m²</strong></p></div><div class=\"warning\"><strong>Pozor:</strong> V trojuholníku sa dosádza <strong>výška</strong> (kolmá na základňu, tu 3 m), nie rameno (šikmá strana, tu 5 m). Rameno 5 m sa použije len do obvodu.</div>",
        "remember": "Trojuholník: S = základňa · výška : 2. Výška je kolmá na základňu, nie šikmá strana."
      },
      {
        "id": "c2",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "trojuholník v útvare",
        "question": "Štít strechy je rovnoramenný trojuholník so základňou 8 m, ramenami 5 m a výškou na základňu 3 m. Aký má obsah?",
        "options": [
          "20 m²",
          "24 m²",
          "12 m²",
          "40 m²"
        ],
        "answer": 2,
        "correct": "Správne: S = 8 · 3 : 2 = 12 m². Dosadzuje sa základňa a výška na ňu kolmá.",
        "hint": "Použi základňu a výšku na túto základňu. Šikmá strana (rameno) nie je výška."
      },
      {
        "id": "n3",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "trojuholník v útvare",
        "title": "Sklad so strechou",
        "prompt": "Predná stena skladu je obdĺžnik 6 m × 4 m a nad ním trojuholníkový štít so základňou 6 m a výškou 2 m. Aký obsah v m² má celá stena?",
        "validate": "exact",
        "answer": 30,
        "success": "Správne: 6 · 4 + 6 · 2 : 2 = 24 + 6 = 30 m².",
        "hint": "Spočítaj obsah obdĺžnika (6 · 4) a obsah trojuholníka (6 · 2 : 2).",
        "reveal": "Správne je 30: 24 + 6 = 30 m²."
      },
      {
        "id": "dlazdice",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Dlaždice, farba a jednotky",
        "html": "<p>Počet dlaždíc zistíme tak, že obsah podlahy vydelíme obsahom jednej dlaždice. Obe plochy musia byť v <strong>rovnakých jednotkách</strong>.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 440 300\" role=\"img\" aria-label=\"Izba 4 m krát 3,2 m pokrytá dlaždicami 40 cm krát 40 cm, 10 stĺpcov a 8 riadkov\"><g font-family=\"system-ui\" font-size=\"16\" text-anchor=\"middle\" fill=\"currentColor\"><polygon points=\"40,40 340,40 340,280 40,280\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\"/><line x1=\"70\" y1=\"40\" x2=\"70\" y2=\"280\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".4\"/><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"280\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".4\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"280\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".4\"/><line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"280\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".4\"/><line x1=\"190\" y1=\"40\" x2=\"190\" y2=\"280\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".4\"/><line x1=\"220\" y1=\"40\" x2=\"220\" y2=\"280\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".4\"/><line x1=\"250\" y1=\"40\" x2=\"250\" y2=\"280\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".4\"/><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"280\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".4\"/><line x1=\"310\" y1=\"40\" x2=\"310\" y2=\"280\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".4\"/><line x1=\"40\" y1=\"70\" x2=\"340\" y2=\"70\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".4\"/><line x1=\"40\" y1=\"100\" x2=\"340\" y2=\"100\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".4\"/><line x1=\"40\" y1=\"130\" x2=\"340\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".4\"/><line x1=\"40\" y1=\"160\" x2=\"340\" y2=\"160\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".4\"/><line x1=\"40\" y1=\"190\" x2=\"340\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".4\"/><line x1=\"40\" y1=\"220\" x2=\"340\" y2=\"220\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".4\"/><line x1=\"40\" y1=\"250\" x2=\"340\" y2=\"250\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".4\"/><text x=\"190\" y=\"28\" text-anchor=\"middle\" font-size=\"16\">4 m = 10 dlaždíc po 40 cm</text><text x=\"350\" y=\"165\" text-anchor=\"start\" font-size=\"16\">3,2 m</text><text x=\"350\" y=\"185\" text-anchor=\"start\" font-size=\"14\">= 8 dlaždíc</text></g></svg></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD · podlaha 4 m × 3,2 m, dlaždice 40 cm × 40 cm</span><p>Podlaha: S = 4 · 3,2 = 12,8 m²</p><p>Dlaždica: 40 cm = 0,4 m, teda 0,4 · 0,4 = 0,16 m²</p><p>Počet: 12,8 : 0,16 = <strong>80 dlaždíc</strong></p><p>Kontrola z obrázka: 10 stĺpcov · 8 riadkov = 80 ✔ (400 : 40 = 10 a 320 : 40 = 8)</p></div><div class=\"warning\"><strong>Pozor:</strong> 1 m² nie je 100 cm². Štvorec 1 m × 1 m má 100 cm × 100 cm = <strong>10 000 cm²</strong>. Radšej si preto <strong>obe strany previesť na rovnakú jednotku</strong> ešte pred počítaním obsahu.</div><p>Podobne pri farbe: ak 1 liter pokryje 5 m², stena s obsahom 13 m² potrebuje 13 : 5 = 2,6 l, a kúpi sa <strong>zaokrúhlene nahor</strong> na celé balenie, teda 3 l.</p>",
        "remember": "Počet dlaždíc = obsah podlahy : obsah jednej dlaždice (v rovnakých jednotkách). 1 m² = 10 000 cm²."
      },
      {
        "id": "n4",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "dlaždice a jednotky",
        "title": "Dlaždice v kuchyni",
        "prompt": "Kuchyňa má podlahu 6 m × 4,5 m. Pokladajú sa dlaždice 30 cm × 30 cm bez zvyškov a bez medzier. Koľko dlaždíc treba?",
        "validate": "exact",
        "answer": 300,
        "success": "Správne: podlaha 27 m², dlaždica 0,09 m², 27 : 0,09 = 300. (Aj 600 : 30 = 20 stĺpcov a 450 : 30 = 15 riadkov, 20 · 15 = 300.)",
        "hint": "Zjednoť jednotky: 30 cm = 0,3 m. Alebo preveď podlahu na cm a spočítaj, koľko dlaždíc sa zmestí do dĺžky a koľko do šírky.",
        "reveal": "Správne je 300: 6 m = 600 cm, 4,5 m = 450 cm, 600 : 30 = 20, 450 : 30 = 15, 20 · 15 = 300."
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "obvod z obsahu",
        "question": "Obdĺžniková podlaha má obsah 54 m² a jedna jej strana má 6 m. Aký je obvod tejto podlahy?",
        "options": [
          "54 m",
          "15 m",
          "30 m",
          "21 m"
        ],
        "answer": 2,
        "correct": "Správne: druhá strana je 54 : 6 = 9 m, obvod 2 · (6 + 9) = 30 m.",
        "hint": "Najprv z obsahu a jednej strany dopočítaj druhú stranu (S = a · b), potom až počítaj obvod. Pozor, 15 m je len a + b."
      },
      {
        "id": "c4",
        "type": "choice",
        "phase": "PRENES",
        "skill": "dlaždice a jednotky",
        "question": "Izba má podlahu 3 m × 2 m a pokladajú sa dlaždice 20 cm × 20 cm. Koľko dlaždíc treba (bez zvyškov)?",
        "options": [
          "15 dlaždíc",
          "1,5 dlaždice",
          "1 500 dlaždíc",
          "150 dlaždíc"
        ],
        "answer": 3,
        "correct": "Správne: 300 cm · 200 cm = 60 000 cm² a 60 000 : 400 = 150. (Alebo 6 m² : 0,04 m² = 150.)",
        "hint": "Obe plochy musia byť v rovnakých jednotkách. Použi 1 m² = 10 000 cm², alebo rozmery daj najprv do cm."
      },
      {
        "id": "ce1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "chyby v riešení",
        "question": "Žiak riešil: „Pozemok je obdĺžnik 20 m × 12 m, v rohu je dom 6 m × 5 m. Obsah pozemku bez domu: 20 · 12 − 6 − 5 = 229 m².“ Čo je v riešení chybné?",
        "options": [
          "Odčítal dĺžky strán domu (6 a 5) namiesto jeho obsahu 6 · 5 = 30 m².",
          "Mal vypočítať obvod, nie obsah.",
          "Obsah obdĺžnika sa počíta ako 2 · (20 + 12).",
          "Správne bolo 20 · 12 + 6 · 5."
        ],
        "answer": 0,
        "correct": "Presne tak: správne je 240 − 30 = 210 m². Odčítava sa plocha domu, nie dĺžky jeho strán.",
        "hint": "Pozri, aké veličiny sú 6 a 5 (dĺžky, alebo plochy) a čo sa má od obsahu pozemku odčítať."
      },
      {
        "id": "ce2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "chyby v riešení",
        "question": "Žiak riešil: „Podlaha 3 m × 2,7 m má S = 8,1 m². Dlaždica 30 cm × 30 cm má 900 cm². Počet dlaždíc: 8,1 : 900 = 0,009.“ Čo je chyba?",
        "options": [
          "Podlahu mal vypočítať ako 2 · (3 + 2,7).",
          "Dlaždicu mal počítať ako 30 + 30 = 60 cm.",
          "Plochy mal v rôznych jednotkách (m² a cm²), pred delením mal jednotky zjednotiť.",
          "Mal obsah podlahy vynásobiť obsahom dlaždice."
        ],
        "answer": 2,
        "correct": "Správne: 8,1 m² = 81 000 cm² a 81 000 : 900 = 90 dlaždíc. Výsledok 0,009 dlaždice nemá zmysel, vždy skontroluj rozumnosť.",
        "hint": "Pozri sa na jednotky pri delení. Dá sa zmysluplne deliť m² hodnotou v cm²?"
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Pozemok s domom na papier",
        "html": "<p>Odlož zariadenie. Do zošita vyrieš túto úlohu:</p><p><strong>Pozemok má tvar obdĺžnika 20 m × 12 m. V jednom jeho rohu stojí dom tvaru obdĺžnika 6 m × 5 m, ktorý k pozemku nepatrí. Vypočítaj:</strong></p><ol><li>obsah pozemku bez domu (nakresli náčrt a zapíš obe cesty: odčítanie aj rozloženie),</li><li>dĺžku plota, ktorý vedie okolo celého pozemku (aj okolo domu).</li></ol><p>Odpoveď napíš vetou a nezabudni na jednotky.</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: riešenie úloh",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Rieš v zošite: náčrt, vzorec, dosadenie s jednotkami, odpoveď vetou. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Obdĺžnik má strany 14 cm a 9 cm. Vypočítaj jeho obvod a obsah.",
            "answer": "o = 2 · (14 + 9) = 46 cm<br>S = 14 · 9 = <strong>126 cm²</strong>"
          },
          {
            "level": "zaklad",
            "text": "Štvorec má obvod 52 cm. Vypočítaj dĺžku jeho strany a obsah.",
            "answer": "a = 52 : 4 = 13 cm<br>S = 13 · 13 = <strong>169 cm²</strong>"
          },
          {
            "level": "zaklad",
            "text": "Podlaha izby má rozmery 5 m × 4 m. Koľko dlaždíc 50 cm × 50 cm treba na jej vyloženie?",
            "answer": "S = 20 m², dlaždica 0,5 · 0,5 = 0,25 m²<br>20 : 0,25 = <strong>80 dlaždíc</strong>"
          },
          {
            "level": "zaklad",
            "text": "Trojuholník má základňu 12 cm a výšku na ňu 7 cm. Vypočítaj jeho obsah.",
            "answer": "S = 12 · 7 : 2 = 84 : 2 = <strong>42 cm²</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Pozemok 30 m × 20 m sa oplotí trojitým radom drôtu. Koľko metrov drôtu treba?",
            "answer": "o = 2 · (30 + 20) = 100 m<br>3 · 100 = <strong>300 m</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Predná stena domu je obdĺžnik 9 m × 6 m s trojuholníkovým štítom so základňou 9 m a výškou 4 m. Aký obsah má celá stena?",
            "answer": "S = 9 · 6 + 9 · 4 : 2 = 54 + 18 = <strong>72 m²</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Obdĺžnik má jednu stranu 8 cm a uhlopriečku 10 cm. Vypočítaj druhú stranu (Pytagorova veta), obsah a obvod.",
            "answer": "b² = 10² − 8² = 36, b = 6 cm<br>S = 8 · 6 = <strong>48 cm²</strong>, o = 2 · (8 + 6) = <strong>28 cm</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Stenu 6 m × 2,5 m treba natrieť, okno 2 m × 1 m sa netrie. Jeden liter farby stačí na 5 m². Koľko celých litrov treba kúpiť?",
            "answer": "S = 15 − 2 = 13 m²; 13 : 5 = 2,6 l → kúpime <strong>3 litre</strong>"
          },
          {
            "level": "bonus",
            "text": "Štvorec a obdĺžnik majú rovnaký obvod 40 cm. Obdĺžnik má jednu stranu 14 cm. Ktorý útvar má väčší obsah a o koľko?",
            "answer": "Štvorec: a = 10 cm, S = 100 cm². Obdĺžnik: druhá strana 20 − 14 = 6 cm, S = 84 cm².<br>Väčší obsah má štvorec, o <strong>16 cm²</strong>."
          },
          {
            "level": "bonus",
            "text": "Jedna strana obdĺžnika je o 3 cm dlhšia ako druhá a obvod je 34 cm. Vypočítaj jeho obsah.",
            "answer": "a + b = 17 a a = b + 3, teda 2b + 3 = 17, b = 7 cm, a = 10 cm<br>S = 10 · 7 = <strong>70 cm²</strong>"
          },
          {
            "level": "bonus",
            "text": "Štvorcová záhrada má stranu 12 m. Pozdĺž celého jej okraja vnútri vedie cestička široká 1 m. Aký obsah má cestička?",
            "answer": "Zostávajúca záhrada je štvorec 10 m × 10 m = 100 m²<br>Cestička: 144 − 100 = <strong>44 m²</strong>"
          }
        ]
      },
      {
        "id": "arg",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "title": "Obvod a obsah po vyrezaní rohu",
        "prompt": "Z obdĺžnika vyrežeme v rohu menší obdĺžnik. Vysvetli vlastnými slovami, prečo sa obsah zmenší, ale obvod zostane rovnaký.",
        "model": "Vzor: Obsah sa zmenší o plochu vyrezaného rohu. Obvod ostane rovnaký, lebo dve nové strany vyrezaného rohu majú dokopy rovnakú dĺžku ako dve pôvodné strany, ktoré sme odstránili."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Čo už viem?",
        "prompt": "Pri každej zručnosti označ, ako sa teraz cítiš.",
        "skills": [
          "viem rozhodnúť, či úloha chce obvod, alebo obsah",
          "viem vypočítať obsah zloženého útvaru rozložením alebo odčítaním",
          "viem vypočítať počet dlaždíc a previesť jednotky",
          "viem zapísať odpoveď vetou s jednotkou"
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
        "text": "Pozemok má tvar obdĺžnika 18 m × 11 m. Vypočítaj dĺžku plotu okolo pozemku a obsah pozemku.",
        "answer": "o = 2 · (18 + 11) = 58 m, S = 18 · 11 = 198 m²"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 4,
        "text": "Trojuholník má základňu 15 cm a výšku 8 cm. Vypočítaj obsah.",
        "answer": "S = 15 · 8 : 2 = 60 cm²"
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 4,
        "text": "Obsah štvorca je 64 cm². Vypočítaj jeho stranu a obvod.",
        "answer": "a = 8 cm, o = 4 · 8 = 32 cm"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 6,
        "text": "Izba tvaru obdĺžnika 4,5 m × 3,6 m sa vykladá dlaždicami 30 cm × 30 cm bez zvyškov. Koľko dlaždíc treba?",
        "answer": "S = 16,2 m², dlaždica 0,09 m², 16,2 : 0,09 = 180 dlaždíc (450 : 30 = 15 a 360 : 30 = 12, 15 · 12 = 180)"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 6,
        "text": "L-útvar vznikol z obdĺžnika 14 m × 9 m vyrezaním rohu 6 m × 4 m. Vypočítaj obsah a obvod útvaru.",
        "answer": "S = 126 − 24 = 102 m², o = 2 · (14 + 9) = 46 m"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 7,
        "text": "Predná stena domu je obdĺžnik 10 m × 6 m s trojuholníkovým štítom so základňou 10 m a ramenami 13 m. Výšku štítu vypočítaj Pytagorovou vetou a potom obsah celej steny.",
        "answer": "Polovica základne 5 m, rameno 13 m: v = √(169 − 25) = √144 = 12 m. S = 60 + 10 · 12 : 2 = 60 + 60 = 120 m²"
      }
    ]
  }
});
