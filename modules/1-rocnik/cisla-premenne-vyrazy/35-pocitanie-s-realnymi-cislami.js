MathPlatform.registerModule({
  "id": "1-u03-h035",
  "teacher": {
    "placement": "1. ročník · Čísla, premenné, výrazy · 35. hodina: Počítanie s reálnymi číslami",
    "prerequisites": [
      "reálne čísla a ich vlastnosti (hodiny 31–32)",
      "zlomky a desatinné čísla, základné operácie zo ZŠ",
      "hodiny 28–30: deliteľnosť, NSN a NSD (spoločný menovateľ, skracovanie)",
      "záporné čísla a ich operácie zo ZŠ (bez mocnín a odmocnín, tie prídu neskôr)"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza tému „Počítanie s reálnymi číslami“. Obsah modulu rešpektuje jej miesto a rozsah v pláne."
    ],
    "planPerformance": [
      "Plán uvádza: riešiť úlohy finančnej matematiky; používať kritériá deliteľnosti; určiť NSN a NSD pomocou prvočíselného rozkladu. Ďalšie ciele modulu vychádzajú z uvedeného obsahu celku."
    ],
    "goals": [
      "správne určiť poradie operácií vo výraze so zátvorkami (aj s vnútornými)",
      "spoľahlivo počítať so zápornými číslami, zlomkami a desatinnými číslami a vedieť ich medzi sebou prevádzať",
      "odhadnúť výsledok a zaokrúhliť ho na požadovaný počet miest",
      "použiť kalkulačku správne (zátvorky) a výsledok skontrolovať odhadom"
    ],
    "competencies": [
      "matematická komunikácia",
      "modelovanie a reprezentácie (zlomok ↔ desatinné číslo)",
      "argumentácia a kontrola výsledku odhadom",
      "prehľadný ručný zápis po krokoch"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie spôsobu práce: kontrola výsledku odhadom, zdôvodnenie postupu a práca s prevodmi medzi reprezentáciami.",
      "Bonusová úloha o zobrazení 1 ÷ 3 na kalkulačke ukazuje, prečo sú desatinné zobrazenia iba približné."
    ],
    "flow": [
      "3 min: opakovanie – čo vieme o poradí operácií a o znamienkach",
      "10–12 min: výklad v aplikácii (poradie operácií, záporné čísla, zlomky, desatinné čísla, odhad a kalkulačka)",
      "10 min: digitálne úlohy (výpočty, zaokrúhľovanie, nájdi chybu)",
      "8–10 min: samostatná práca BEZ MOBILU a zbierka podľa úrovne",
      "3–5 min: spoločný rozbor najčastejších chýb podľa živých výsledkov"
    ],
    "diagnostics": [
      "počíta zľava doprava bez ohľadu na prednosť násobenia a delenia",
      "pri zmiešanom čísle zahodí celú časť (1 3/4 = 4/4) alebo „kráti“ sčítance: (2 + 6)/(2 + 9) = 6/9",
      "vo viacposchodovom zlomku nerozlíši hlavnú zlomkovú čiaru (delenie) a nepočíta čitateľa a menovateľa zvlášť",
      "chybuje pri znamienkach: 5 − (−3), (−2) · (−4), −6 ÷ 3",
      "pri sčítaní zlomkov sčíta čitateľov aj menovateľov (1/2 + 1/3 = 2/5)",
      "nevie vydeliť zlomkom (nevynásobí prevráteným číslom) a chybuje v desatinnej čiarke pri násobení",
      "pri zaokrúhľovaní zle určí hraničnú číslicu alebo zaokrúhľuje priebežné výsledky"
    ],
    "partialUse": [
      "Pri nedostatku času vynechajte výklad o odhade a kalkulačke a bonusové úlohy; jadro tvorí poradie operácií, záporné čísla a zlomky.",
      "Mobil nenahrádza ručné počítanie, zápis po krokoch ani kontrolu výsledku odhadom."
    ]
  },
  "student": {
    "title": "Počítanie s reálnymi číslami",
    "subtitle": "Téma 35 · Čísla, premenné, výrazy",
    "intro": "Zopakuješ si poradie operácií, počítanie so zápornými číslami, zlomkami a desatinnými číslami a naučíš sa výsledok odhadnúť a zaokrúhliť. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "28–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieš o počítaní",
        "html": "<p>Z predchádzajúcich hodín vieš, že reálne čísla sa dajú sčítať, odčítať, násobiť aj deliť (okrem delenia nulou) a že platí komutatívnosť, asociatívnosť a distributívnosť.</p><p>Dnes ide o to, aby si <strong>spoľahlivo vypočítal/a dlhší výraz</strong>, v ktorom sa miešajú zlomky, desatinné čísla a záporné čísla. Najdôležitejšie je dodržať poradie operácií a nepomýliť si znamienka.</p><p>Skús si tip: čomu sa rovná 2 + 3 · 4? Ak si odpovedal/a 20, počítal/a si zľava doprava. Správne je 14 – zistíme prečo.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "dodržať poradie operácií a zátvorky",
          "počítať so zápornými číslami, zlomkami a desatinnými číslami",
          "odhadnúť a zaokrúhliť výsledok",
          "skontrolovať kalkulačku odhadom"
        ]
      },
      {
        "id": "order",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Poradie operácií",
        "html": "<ol class=\"steps\"><li>Najprv vypočítaj <strong>zátvorky</strong> (začni tou najvnútornejšou).</li><li>Potom <strong>násobenie a delenie</strong> – v poradí zľava doprava.</li><li>Nakoniec <strong>sčítanie a odčítanie</strong> – v poradí zľava doprava.</li></ol><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>20 − 4 · 3 + 12 ÷ 6</p><p>= 20 − 12 + 2 &nbsp;(najprv násobenie a delenie)</p><p>= 8 + 2 = <strong>10</strong></p></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD SO ZÁTVORKAMI</span><p>3 · (7 − 2 · 2)</p><p>= 3 · (7 − 4) &nbsp;(v zátvorke najprv násobenie)</p><p>= 3 · 3 = <strong>9</strong></p></div><div class=\"warning\"><strong>Pozor:</strong> Násobenie a delenie majú rovnakú prioritu, počítame ich zľava doprava: 8 ÷ 4 · 2 = 2 · 2 = <strong>4</strong>, nie 8 ÷ 8 = 1. To isté pre sčítanie a odčítanie: 10 − 3 + 2 = 9, nie 5.</div>",
        "remember": "Zátvorky → násobenie a delenie (zľava doprava) → sčítanie a odčítanie (zľava doprava)."
      },
      {
        "id": "negatives",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Záporné čísla: pravidlá znamienok",
        "html": "<div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Odčítanie záporného čísla</div><p class=\"term-rule\">a − (−b) = a + b. Napr. 5 − (−3) = 5 + 3 = 8.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Násobenie a delenie</div><p class=\"term-rule\">Rovnaké znamienka → výsledok kladný, rôzne znamienka → výsledok záporný. Napr. (−6) · (−4) = 24, (−12) ÷ 4 = −3, 8 ÷ (−2) = −4.</p></div></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>(−6) · (−4) + 10 ÷ (−5)</p><p>= 24 + (−2) &nbsp;(násobenie a delenie)</p><p>= 24 − 2 = <strong>22</strong></p></div><div class=\"warning\"><strong>Pozor:</strong> Mínus pred zátvorkou s číslom mení znamienko aj pri úprave −(−3) = 3. Zápis 4 − −3 je nesprávny, vždy napíš 4 − (−3).</div>",
        "remember": "Rovnaké znamienka pri násobení a delení dajú +, rôzne dajú −. Odčítať záporné číslo je to isté ako pripočítať kladné."
      },
      {
        "id": "fractions",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Zlomky a desatinné čísla",
        "html": "<div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Sčítanie a odčítanie zlomkov</div><p class=\"term-rule\">Zlomky najprv upravíme na <strong>spoločný menovateľ</strong> (najmenší je NSN menovateľov), potom sčítame iba čitateľov.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Násobenie zlomkov</div><p class=\"term-rule\">Čitateľ krát čitateľ, menovateľ krát menovateľ. Skracuj pred násobením.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Delenie zlomkov</div><p class=\"term-rule\">Delíme tak, že násobíme <strong>prevráteným číslom</strong> deliteľa.</p></div></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p><span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">2</span></span> + <span class=\"frac\"><span class=\"frac-num\">2</span><span class=\"frac-den\">3</span></span> = <span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">6</span></span> + <span class=\"frac\"><span class=\"frac-num\">4</span><span class=\"frac-den\">6</span></span> = <span class=\"frac\"><span class=\"frac-num\">7</span><span class=\"frac-den\">6</span></span></p><p><span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">4</span></span> ÷ <span class=\"frac\"><span class=\"frac-num\">9</span><span class=\"frac-den\">8</span></span> = <span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">4</span></span> · <span class=\"frac\"><span class=\"frac-num\">8</span><span class=\"frac-den\">9</span></span> = <span class=\"frac\"><span class=\"frac-num\">24</span><span class=\"frac-den\">36</span></span> = <span class=\"frac\"><span class=\"frac-num\">2</span><span class=\"frac-den\">3</span></span></p></div><div class=\"example\"><span class=\"mini-label\">DESATINNÉ ČÍSLA</span><p>0,3 · 0,4: vynásob 3 · 4 = 12; v činiteľoch sú spolu 2 desatinné miesta, preto 0,3 · 0,4 = <strong>0,12</strong>.</p><p>1,2 ÷ 0,04: posuň čiarku v oboch číslach o 2 miesta: 120 ÷ 4 = <strong>30</strong>.</p><p>Zmiešaný výraz: 0,5 + <span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">4</span></span> = 0,5 + 0,25 = <strong>0,75</strong>. Prevedieme to, čo sa nám lepšie počíta.</p></div><div class=\"warning\"><strong>Pozor:</strong> Zlomky nesčítame po častiach: 1/2 + 1/3 nie je 2/5. Menovatele sa pri sčítaní nesčítajú, upravujú sa na spoločný.</div>",
        "remember": "Sčítanie zlomkov: spoločný menovateľ. Delenie zlomkom: vynásob prevráteným číslom."
      },
      {
        "id": "compound",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Zložený výraz po krokoch: zmiešané čísla, desatinné čísla, zátvorky, viacposchodový zlomok",
        "html": "<p>Dlhý výraz sa nerieši naraz. Postupuj vždy v rovnakých krokoch a každý zapíš na nový riadok.</p><ol class=\"steps\"><li><strong>Zmiešané číslo → nepravý zlomok:</strong> 3 <span class=\"frac\"><span class=\"frac-num\">2</span><span class=\"frac-den\">3</span></span> = <span class=\"frac\"><span class=\"frac-num\">3 · 3 + 2</span><span class=\"frac-den\">3</span></span> = <span class=\"frac\"><span class=\"frac-num\">11</span><span class=\"frac-den\">3</span></span>.</li><li><strong>Desatinné číslo → zlomok</strong> (alebo opačne, ak sú všetky čísla „pekné“): 2,25 = <span class=\"frac\"><span class=\"frac-num\">225</span><span class=\"frac-den\">100</span></span> = <span class=\"frac\"><span class=\"frac-num\">9</span><span class=\"frac-den\">4</span></span>.</li><li><strong>Zátvorky zvnútra von.</strong> V každej zátvorke nájdi spoločný menovateľ z rozkladu (hodina 31).</li><li><strong>Násobenie a delenie:</strong> delenie zmeň na násobenie prevráteným zlomkom a <span class=\"hl\">skráť pred násobením</span>.</li><li><strong>Skráť výsledok</strong> na základný tvar.</li></ol><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1: ZMIEŠANÉ A DESATINNÉ</span><p>(3 <span class=\"frac\"><span class=\"frac-num\">2</span><span class=\"frac-den\">3</span></span> − 2 <span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">6</span></span>) : (2,25 − <span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">4</span></span>)</p><p>= (<span class=\"frac\"><span class=\"frac-num\">11</span><span class=\"frac-den\">3</span></span> − <span class=\"frac\"><span class=\"frac-num\">13</span><span class=\"frac-den\">6</span></span>) : (<span class=\"frac\"><span class=\"frac-num\">9</span><span class=\"frac-den\">4</span></span> − <span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">4</span></span>) &nbsp;(všetko na zlomky)</p><p>= <span class=\"frac\"><span class=\"frac-num\">22 − 13</span><span class=\"frac-den\">6</span></span> : <span class=\"frac\"><span class=\"frac-num\">6</span><span class=\"frac-den\">4</span></span> = <span class=\"frac\"><span class=\"frac-num\">9</span><span class=\"frac-den\">6</span></span> : <span class=\"frac\"><span class=\"frac-num\">6</span><span class=\"frac-den\">4</span></span> = <span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">2</span></span> : <span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">2</span></span> = <strong>1</strong></p></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2: HRANATÉ ZÁTVORKY</span><p>2 · [2,5 − (<span class=\"frac\"><span class=\"frac-num\">9</span><span class=\"frac-den\">2</span></span> − <span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">4</span></span>)]</p><p>Najvnútornejšia je okrúhla zátvorka: <span class=\"frac\"><span class=\"frac-num\">9</span><span class=\"frac-den\">2</span></span> − <span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">4</span></span> = <span class=\"frac\"><span class=\"frac-num\">18</span><span class=\"frac-den\">4</span></span> − <span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">4</span></span> = <span class=\"frac\"><span class=\"frac-num\">15</span><span class=\"frac-den\">4</span></span></p><p>V hranatej: 2,5 − <span class=\"frac\"><span class=\"frac-num\">15</span><span class=\"frac-den\">4</span></span> = <span class=\"frac\"><span class=\"frac-num\">10</span><span class=\"frac-den\">4</span></span> − <span class=\"frac\"><span class=\"frac-num\">15</span><span class=\"frac-den\">4</span></span> = <span class=\"frac\"><span class=\"frac-num\">−5</span><span class=\"frac-den\">4</span></span></p><p>2 · <span class=\"frac\"><span class=\"frac-num\">−5</span><span class=\"frac-den\">4</span></span> = <span class=\"frac\"><span class=\"frac-num\">−10</span><span class=\"frac-den\">4</span></span> = <strong><span class=\"frac\"><span class=\"frac-num\">−5</span><span class=\"frac-den\">2</span></span></strong> = −2,5</p></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 3: KRÁTENIE PRED NÁSOBENÍM A DELENIE</span><p><span class=\"frac\"><span class=\"frac-num\">15</span><span class=\"frac-den\">42</span></span> · <span class=\"frac\"><span class=\"frac-num\">54</span><span class=\"frac-den\">35</span></span> &nbsp;(15 a 35 skrátime piatimi, 54 a 42 šiestimi) = <span class=\"frac\"><span class=\"frac-num\">3 · 9</span><span class=\"frac-den\">7 · 7</span></span> = <strong><span class=\"frac\"><span class=\"frac-num\">27</span><span class=\"frac-den\">49</span></span></strong></p><p><span class=\"frac\"><span class=\"frac-num\">36</span><span class=\"frac-den\">45</span></span> : <span class=\"frac\"><span class=\"frac-num\">24</span><span class=\"frac-den\">90</span></span> = <span class=\"frac\"><span class=\"frac-num\">36</span><span class=\"frac-den\">45</span></span> · <span class=\"frac\"><span class=\"frac-num\">90</span><span class=\"frac-den\">24</span></span> &nbsp;(36 a 24 skrátime dvanástimi, 90 a 45 štyridsiatpiatimi) = <span class=\"frac\"><span class=\"frac-num\">3 · 2</span><span class=\"frac-den\">1 · 2</span></span> = <strong>3</strong></p></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD 4: VIACPOSCHODOVÝ ZLOMOK</span><p><span class=\"frac\"><span class=\"frac-num\"><span class=\"frac\"><span class=\"frac-num\">2</span><span class=\"frac-den\">9</span></span> + <span class=\"frac\"><span class=\"frac-num\">4</span><span class=\"frac-den\">3</span></span></span><span class=\"frac-den\">(−<span class=\"frac\"><span class=\"frac-num\">5</span><span class=\"frac-den\">6</span></span>) + <span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">12</span></span></span></span></p><p>Hlavná zlomková čiara je delenie. Najprv zvlášť čitateľ a zvlášť menovateľ:</p><p>čitateľ: <span class=\"frac\"><span class=\"frac-num\">2</span><span class=\"frac-den\">9</span></span> + <span class=\"frac\"><span class=\"frac-num\">12</span><span class=\"frac-den\">9</span></span> = <span class=\"frac\"><span class=\"frac-num\">14</span><span class=\"frac-den\">9</span></span> &nbsp;·&nbsp; menovateľ: <span class=\"frac\"><span class=\"frac-num\">−10</span><span class=\"frac-den\">12</span></span> + <span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">12</span></span> = <span class=\"frac\"><span class=\"frac-num\">−7</span><span class=\"frac-den\">12</span></span></p><p><span class=\"frac\"><span class=\"frac-num\">14</span><span class=\"frac-den\">9</span></span> : (<span class=\"frac\"><span class=\"frac-num\">−7</span><span class=\"frac-den\">12</span></span>) = <span class=\"frac\"><span class=\"frac-num\">14</span><span class=\"frac-den\">9</span></span> · (<span class=\"frac\"><span class=\"frac-num\">−12</span><span class=\"frac-den\">7</span></span>) = <span class=\"frac\"><span class=\"frac-num\">−2 · 4</span><span class=\"frac-den\">3 · 1</span></span> = <strong><span class=\"frac\"><span class=\"frac-num\">−8</span><span class=\"frac-den\">3</span></span></strong></p></div><div class=\"warning\"><strong>Pozor:</strong> Krátiť sa dá iba <em>činiteľ</em> s činiteľom (pri násobení), nie sčítanec so sčítancom: <span class=\"frac\"><span class=\"frac-num\">2 + 6</span><span class=\"frac-den\">2 + 9</span></span> nie je <span class=\"frac\"><span class=\"frac-num\">6</span><span class=\"frac-den\">9</span></span>. Pri viacposchodovom zlomku nekráť cez znamienko + alebo −, kým nemáš čitateľa aj menovateľa ako jeden zlomok.</div>",
        "remember": "Zmiešané a desatinné čísla prevedieš na zlomky, zátvorky riešiš zvnútra von, deliš prevráteným zlomkom a kratíš pred násobením."
      },
      {
        "id": "estimate",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Zaokrúhľovanie, odhad a kalkulačka",
        "html": "<p><strong>Zaokrúhľovanie.</strong> Pozri na číslicu hneď za miestom, na ktoré zaokrúhľuješ. Ak je <span class=\"hl\">0 až 4</span>, číslo ostane (zaokrúhľujeme nadol). Ak je <span class=\"hl\">5 až 9</span>, posledná číslica sa zväčší o 1 (nahor).</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>3,46 na desatiny: za desatinami je 6, preto <strong>3,5</strong>.</p><p>3,46 na jednotky: za jednotkami je 4, preto <strong>3</strong>.</p><p>7,846 na stotiny: za stotinami je 6, preto <strong>7,85</strong>.</p></div><p><strong>Odhad.</strong> Pred počítaním čísla zaokrúhli na „pekné“ hodnoty: 4,9 · 6,1 ≈ 5 · 6 = 30. Presný výsledok 29,89 je blízko, takže sa zdá správny. Odhad ti pomôže zachytiť hrubú chybu, napríklad posunutú desatinnú čiarku.</p><p><strong>Kalkulačka.</strong> Zátvorky použi aj tam, kde ich pri počítaní spamäti „nepíšeš“: 12 ÷ (3 · 2) je 2, ale 12 ÷ 3 · 2 je 8. Výsledok z displeja vždy porovnaj s odhadom.</p><div class=\"warning\"><strong>Pozor:</strong> Zaokrúhľuj až <strong>výsledok</strong>, nie priebežné medzivýsledky. Inak sa chyby sčítajú.</div>",
        "remember": "Odhadni pred počítaním, zaokrúhli až výsledok a kalkulačku kontroluj odhadom."
      },
      {
        "id": "c-order",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "poradie operácií",
        "question": "Koľko je 2 + 3 · 4?",
        "options": [
          "14",
          "20",
          "24"
        ],
        "answer": 0,
        "correct": "Najprv sa násobí: 3 · 4 = 12, potom 2 + 12 = 14. Výsledok 20 vznikne počítaním zľava doprava.",
        "hint": "Ktorá z operácií sčítanie a násobenie má prednosť?"
      },
      {
        "id": "c-first",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "poradie operácií",
        "question": "Vo výraze 12 − 6 ÷ 2 + 1 nie sú žiadne zátvorky. Ktorú operáciu vykonáš ako prvú?",
        "options": [
          "12 − 6",
          "6 ÷ 2",
          "2 + 1"
        ],
        "answer": 1,
        "correct": "Delenie má prednosť pred sčítaním a odčítaním: 12 − 3 + 1 = 10.",
        "hint": "Násobenie a delenie sa robia skôr ako sčítanie a odčítanie."
      },
      {
        "id": "n-order",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "poradie operácií",
        "title": "Výraz so zátvorkou",
        "prompt": "Vypočítaj: 5 + 3 · (12 − 8) ÷ 2",
        "validate": "exact",
        "answer": 11,
        "success": "5 + 3 · 4 ÷ 2 = 5 + 12 ÷ 2 = 5 + 6 = 11.",
        "hint": "Najprv zátvorka, potom násobenie a delenie zľava doprava, nakoniec sčítanie.",
        "reveal": "Správne je 11: (12 − 8) = 4, 3 · 4 = 12, 12 ÷ 2 = 6, 5 + 6 = 11."
      },
      {
        "id": "n-lr",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "poradie operácií",
        "title": "Zľava doprava",
        "prompt": "Vypočítaj: 36 ÷ 6 · 3",
        "validate": "exact",
        "answer": 18,
        "success": "Násobenie a delenie počítame zľava doprava: 36 ÷ 6 = 6, potom 6 · 3 = 18.",
        "hint": "Násobenie a delenie majú rovnakú prioritu. V akom poradí ich počítaš?",
        "reveal": "Správne je 18: 36 ÷ 6 = 6, 6 · 3 = 18."
      },
      {
        "id": "matrix-sign",
        "type": "matrix",
        "phase": "PRECVIČ",
        "skill": "znamienka",
        "title": "Aké znamienko má výsledok?",
        "labels": ["Kladné", "Záporné", "Nula"],
        "items": [
          { "text": "(−3) · (−5)", "answer": "Kladné" },
          { "text": "(−12) ÷ 4", "answer": "Záporné" },
          { "text": "−7 + 7", "answer": "Nula" },
          { "text": "4 − 9", "answer": "Záporné" },
          { "text": "(−2) · (−3) · (−4)", "answer": "Záporné" },
          { "text": "−6 − (−10)", "answer": "Kladné" }
        ]
      },
      {
        "id": "n-neg",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "záporné čísla",
        "title": "Záporné čísla vo výraze",
        "prompt": "Vypočítaj: (−3) · (−8) − 12 ÷ (−4)",
        "validate": "exact",
        "answer": 27,
        "success": "(−3) · (−8) = 24 a 12 ÷ (−4) = −3, preto 24 − (−3) = 24 + 3 = 27.",
        "hint": "Najprv vypočítaj obe časti (násobenie a delenie), potom ich odčítaj. Pozor na znamienka!",
        "reveal": "Správne je 27: 24 − (−3) = 24 + 3."
      },
      {
        "id": "n-frac1",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "násobenie zlomkov",
        "title": "Súčin zlomkov",
        "prompt": "Vypočítaj (2/5) · (15/4) a výsledok zapíš ako desatinné číslo.",
        "validate": "exact",
        "answer": 1.5,
        "success": "(2 · 15) ÷ (5 · 4) = 30/20 = 3/2 = 1,5.",
        "hint": "Vynásob čitateľov a menovateľov. Môžeš skrátiť číslom 5.",
        "reveal": "Správne je 1,5: (2/5) · (15/4) = 30/20 = 3/2."
      },
      {
        "id": "n-frac2",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "delenie zlomkov",
        "title": "Podiel zlomkov",
        "prompt": "Vypočítaj (3/4) ÷ (3/8).",
        "validate": "exact",
        "answer": 2,
        "success": "(3/4) · (8/3) = 24/12 = 2.",
        "hint": "Deliť zlomkom znamená násobiť jeho prevráteným číslom.",
        "reveal": "Správne je 2: (3/4) · (8/3) = 24/12."
      },
      {
        "id": "c-lcd",
        "type": "choice",
        "phase": "PRECVIČ",
        "skill": "sčítanie a odčítanie zlomkov",
        "question": "Koľko je 4/15 − 7/20? (Rozklady: 15 = 3 · 5, 20 = 2 · 2 · 5, NSN = 60.)",
        "options": [
          "3/5",
          "−3/35",
          "1/12",
          "−1/12"
        ],
        "answer": 3,
        "correct": "4/15 = 16/60 a 7/20 = 21/60, preto 16/60 − 21/60 = −5/60 = −1/12.",
        "hint": "Rozšír oba zlomky na menovateľ 60 a odčítaj iba čitateľov. Je prvý zlomok väčší alebo menší ako druhý?"
      },
      {
        "id": "c-mixedfirst",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "postup pri zloženom výraze",
        "question": "Vo výraze (3 2/3 − 2 1/6) : (2,25 − 3/4) sú zmiešané aj desatinné čísla. Čo je rozumný prvý krok?",
        "options": [
          "Vydeliť prvú zátvorku druhou skôr, než ich vypočítaš.",
          "Zaokrúhliť zmiešané čísla na celé čísla a počítať s nimi.",
          "Previesť 3 2/3 a 2 1/6 na nepravé zlomky (11/3 a 13/6) a 2,25 na zlomok 9/4."
        ],
        "answer": 2,
        "correct": "Najprv všetky čísla zapíšeme v jednom tvare (zlomky), potom riešime zátvorky zvnútra von.",
        "hint": "Zátvorky sa riešia ako prvé, a aby sa dalo počítať, čísla musia byť v rovnakom tvare."
      },
      {
        "id": "n-mixed",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "zmiešané a desatinné čísla",
        "title": "Zmiešané a desatinné čísla spolu",
        "prompt": "Vypočítaj: (2 1/2 + 1,25) : (5/4 − 1/2). Výsledok je celé číslo.",
        "validate": "exact",
        "answer": 5,
        "success": "5/2 + 5/4 = 15/4, 5/4 − 2/4 = 3/4 a 15/4 : 3/4 = 15/4 · 4/3 = 5.",
        "hint": "1,25 = 5/4 a 2 1/2 = 5/2. Vypočítaj obe zátvorky zvlášť a potom ich vydeľ.",
        "reveal": "Správne je 5: (5/2 + 5/4) = 15/4, (5/4 − 1/2) = 3/4, 15/4 · 4/3 = 5."
      },
      {
        "id": "n-bracket",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "hranaté zátvorky",
        "title": "Vnorené zátvorky",
        "prompt": "Vypočítaj: 2 · [2,5 − (9/2 − 3/4)]. Výsledok zapíš ako desatinné číslo; mínus píš obyčajným znakom „-“.",
        "validate": "exact",
        "answer": -2.5,
        "success": "9/2 − 3/4 = 15/4, 2,5 − 15/4 = −5/4 a 2 · (−5/4) = −5/2 = −2,5.",
        "hint": "Začni najvnútornejšou (okrúhlou) zátvorkou. Pozor, výsledok v hranatej zátvorke je záporný.",
        "reveal": "Správne je −2,5: (9/2 − 3/4) = 15/4, [5/2 − 15/4] = −5/4, 2 · (−5/4) = −5/2."
      },
      {
        "id": "n-div",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "delenie a krátenie zlomkov",
        "title": "Delenie zlomkov s krátením",
        "prompt": "Vypočítaj: 36/45 : 24/90. Výsledok je celé číslo.",
        "validate": "exact",
        "answer": 3,
        "success": "36/45 · 90/24: skrátime 36 a 24 dvanástimi (3 a 2), 90 a 45 štyridsiatpiatimi (2 a 1): 3 · 2 / (1 · 2) = 3.",
        "hint": "Delíš zlomkom, preto násob jeho prevráteným zlomkom 90/24 a skracuj pred násobením.",
        "reveal": "Správne je 3: 36/45 · 90/24 = (3 · 2)/(1 · 2) = 3."
      },
      {
        "id": "c-cancel",
        "type": "choice",
        "phase": "PRECVIČ",
        "skill": "krátenie pred násobením",
        "question": "Koľko je 15/42 · 54/35 v základnom tvare?",
        "options": [
          "69/77",
          "3/7",
          "9/7",
          "27/49"
        ],
        "answer": 3,
        "correct": "Skrátime 15 a 35 piatimi (3, 7) a 54 a 42 šiestimi (9, 7): 3 · 9 / (7 · 7) = 27/49.",
        "hint": "Pri násobení krátiš čitateľa jedného zlomku s menovateľom druhého. Čitateľov ani menovateľov nesčítavaj."
      },
      {
        "id": "n-storey",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "viacposchodový zlomok",
        "title": "Zlomok v zlomku",
        "prompt": "Vypočítaj zlomok, ktorého čitateľ je 1/2 + 1/3 a menovateľ je 1/4 − 1/6, teda (1/2 + 1/3) : (1/4 − 1/6). Výsledok je celé číslo.",
        "validate": "exact",
        "answer": 10,
        "success": "čitateľ 5/6, menovateľ 1/12 a 5/6 : 1/12 = 5/6 · 12 = 10.",
        "hint": "Najprv vypočítaj zvlášť čitateľa a zvlášť menovateľa, potom ich vydeľ.",
        "reveal": "Správne je 10: 1/2 + 1/3 = 5/6, 1/4 − 1/6 = 1/12, 5/6 : 1/12 = 10."
      },
      {
        "id": "sort-conv",
        "type": "sortChoice",
        "phase": "PRECVIČ",
        "skill": "prevody",
        "title": "Je prevod správny?",
        "question": "Rozhodni, či je prevod na zlomok správny.",
        "labels": [
          "Správne",
          "Nesprávne"
        ],
        "items": [
          {
            "text": "3 2/3 = 11/3",
            "answer": true,
            "why": "3 · 3 + 2 = 11, menovateľ ostáva 3."
          },
          {
            "text": "1 3/4 = 4/4",
            "answer": false,
            "why": "Celé číslo sa nezahadzuje: 1 3/4 = (4 + 3)/4 = 7/4."
          },
          {
            "text": "2,25 = 9/4",
            "answer": true,
            "why": "2,25 = 225/100 = 9/4 (skrátené 25)."
          },
          {
            "text": "0,3 = 1/3",
            "answer": false,
            "why": "0,3 = 3/10; zlomok 1/3 je 0,333…"
          },
          {
            "text": "2 1/6 = 13/6",
            "answer": true,
            "why": "2 · 6 + 1 = 13."
          },
          {
            "text": "0,75 = 7/5",
            "answer": false,
            "why": "0,75 = 75/100 = 3/4."
          }
        ]
      },
      {
        "id": "hunt-cancel",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak upravuje zlomok (2 + 6)/(2 + 9) a „skráti“ dvojky, takže mu vyjde 6/9. Čo je na tom nesprávne?",
        "options": [
          "Nič, skrátiť sa dá všade, kde je rovnaké číslo.",
          "Mal skrátiť šestku s deviatkou, vyšlo by 2/3.",
          "Krátiť sa dajú iba činitele v súčine, nie sčítance; správne je 8/11 a to sa už skrátiť nedá."
        ],
        "answer": 2,
        "correct": "Čitateľ je 8 a menovateľ je 11, takže zlomok je 8/11. Dvojky sú sčítance, nie činitele, preto sa nekrátia.",
        "hint": "Najprv vypočítaj čitateľa a menovateľa. Vyjde z nich zlomok 6/9?"
      },
      {
        "id": "hunt-frac",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak počíta 1/2 + 1/3 = 2/5, lebo 1 + 1 = 2 a 2 + 3 = 5. V čom je chyba?",
        "options": [
          "Zlomky treba najprv upraviť na spoločný menovateľ: 1/2 + 1/3 = 3/6 + 2/6 = 5/6.",
          "Menovateľa treba vynásobiť, ale čitateľa nechať: 1/6.",
          "Všetko je v poriadku, zlomky sa sčítajú po častiach."
        ],
        "answer": 0,
        "correct": "Správne. Sčítať sa dajú iba rovnaké „kúsky“, preto potrebujeme spoločný menovateľ.",
        "hint": "Je 2/5 viac alebo menej ako 1/2? Súčet dvoch kladných čísel nemôže byť menší ako ktorýkoľvek sčítanec."
      },
      {
        "id": "hunt-neg",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak počíta 5 − (−3) = 2. Ktorá oprava je správna?",
        "options": [
          "Správne je −8, lebo mínus a mínus dajú −.",
          "Správne je 15, treba násobiť.",
          "Správne je 8, lebo odčítať záporné číslo znamená pripočítať kladné: 5 + 3."
        ],
        "answer": 2,
        "correct": "Presne. a − (−b) = a + b, preto 5 − (−3) = 8.",
        "hint": "Zober si číselnú os: odčítanie záporného čísla posúva doprava, nie doľava."
      },
      {
        "id": "n-dec",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "desatinné čísla",
        "title": "Desatinná čiarka pri násobení",
        "prompt": "Vypočítaj: 0,6 · 0,07",
        "validate": "exact",
        "answer": 0.042,
        "success": "6 · 7 = 42 a v činiteľoch sú 3 desatinné miesta, preto 0,6 · 0,07 = 0,042.",
        "hint": "Násobíš ako 6 · 7 = 42. Koľko desatinných miest majú činitele spolu?",
        "reveal": "Správne je 0,042: 6 · 7 = 42, tri desatinné miesta."
      },
      {
        "id": "n-dec2",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "desatinné čísla",
        "title": "Delenie desatinným číslom",
        "prompt": "Vypočítaj: 2,4 ÷ 0,06",
        "validate": "exact",
        "answer": 40,
        "success": "Posuň čiarku o 2 miesta v oboch číslach: 240 ÷ 6 = 40.",
        "hint": "Vynásob delenca aj deliteľa tým istým číslom (100), aby deliteľ bol celé číslo.",
        "reveal": "Správne je 40: 2,4 ÷ 0,06 = 240 ÷ 6."
      },
      {
        "id": "n-round",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "zaokrúhľovanie",
        "title": "Zaokrúhli na stotiny",
        "prompt": "Zaokrúhli číslo 7,846 na stotiny.",
        "validate": "exact",
        "answer": 7.85,
        "success": "Za stotinami je číslica 6, preto sa 4 zväčší na 5: 7,85.",
        "hint": "Pozri na číslicu tisícin. Je 0 až 4, alebo 5 až 9?",
        "reveal": "Správne je 7,85: číslica 6 je ≥ 5, preto sa stotiny zväčšia o 1."
      },
      {
        "id": "sort-round",
        "type": "sortChoice",
        "phase": "PRECVIČ",
        "skill": "zaokrúhľovanie",
        "title": "Je zaokrúhlenie na desatiny správne?",
        "question": "Rozhodni, či je číslo správne zaokrúhlené na desatiny.",
        "labels": ["Správne", "Nesprávne"],
        "items": [
          { "text": "4,26 ≈ 4,3", "answer": true, "why": "Za desatinami je 6, takže nahor." },
          { "text": "4,24 ≈ 4,3", "answer": false, "why": "Za desatinami je 4, takže nadol: 4,2." },
          { "text": "7,95 ≈ 8,0", "answer": true, "why": "Za desatinami je 5, takže nahor." },
          { "text": "0,049 ≈ 0,1", "answer": false, "why": "Za desatinami je 4, takže nadol: 0,0." },
          { "text": "12,98 ≈ 13,0", "answer": true, "why": "Za desatinami je 8, takže nahor, a 12,9 + 0,1 = 13,0." },
          { "text": "3,449 ≈ 3,5", "answer": false, "why": "Rozhoduje iba číslica hneď za desatinami (4), preto 3,4." }
        ]
      },
      {
        "id": "c-estimate",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "odhad",
        "question": "Odhadni súčin 4,9 · 6,1 tak, že obe čísla zaokrúhliš na celé. Ktorý výsledok je najrozumnejší?",
        "options": [
          "3",
          "300",
          "30"
        ],
        "answer": 2,
        "correct": "4,9 ≈ 5 a 6,1 ≈ 6, preto 5 · 6 = 30. Presný výsledok je 29,89.",
        "hint": "Zaokrúhli 4,9 a 6,1 na najbližšie celé čísla a vynásob ich."
      },
      {
        "id": "c-calc",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "kalkulačka",
        "question": "Na kalkulačke chceš vypočítať 12 ÷ (3 · 2), teda číslo 12 vydeliť súčinom 3 · 2. Ktorý zápis zadáš?",
        "options": [
          "12 ÷ (3 · 2)",
          "12 ÷ 3 · 2",
          "12 − 3 · 2"
        ],
        "answer": 0,
        "correct": "Zátvorka zabezpečí, že sa najprv vynásobí 3 · 2 = 6 a potom 12 ÷ 6 = 2. Zápis bez zátvorky by dal 8.",
        "hint": "Zápis 12 ÷ 3 · 2 sa počíta zľava doprava. Ktorý zápis dá výsledok 2?"
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha na papier",
        "html": "<p>Odlož zariadenie. Vypočítaj postupne a každý krok zapíš pod seba:</p><ol><li>(−5 + 8) · 4 − 18 ÷ (−3)</li><li>2/3 + 3/4 · 8/9</li><li>(2,5 − 0,75) ÷ 0,5</li></ol><p>Pri každej úlohe najprv odhadni výsledok a po výpočte ho s odhadom porovnaj.</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: počítanie s reálnymi číslami",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Riešenia píš do zošita. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Vypočítaj: a) 7 + 2 · (9 − 5) b) 40 − 12 ÷ 3 · 2 c) (15 − 3 · 4) · (8 − 6)",
            "answer": "a) 7 + 2 · 4 = 15<br>b) 40 − 4 · 2 = 32<br>c) (15 − 12) · 2 = 6"
          },
          {
            "level": "zaklad",
            "text": "Vypočítaj: a) (−7) + 12 − (−5) b) (−4) · (−6) ÷ (−8) c) 5 − 2 · (−3) − 10",
            "answer": "a) −7 + 12 + 5 = 10<br>b) 24 ÷ (−8) = −3<br>c) 5 + 6 − 10 = 1"
          },
          {
            "level": "zaklad",
            "text": "Vypočítaj: a) 2/3 + 3/4 b) 5/6 − 1/4 c) 4/9 · 3/8 d) 5/6 ÷ 10/9",
            "answer": "a) 8/12 + 9/12 = 17/12<br>b) 10/12 − 3/12 = 7/12<br>c) 12/72 = 1/6<br>d) 5/6 · 9/10 = 45/60 = 3/4"
          },
          {
            "level": "rozsirenie",
            "text": "Vypočítaj: a) 3,5 + 0,75 − 1,2 b) 0,8 · 0,25 c) 4,5 ÷ 0,15",
            "answer": "a) 4,25 − 1,2 = 3,05<br>b) 0,2<br>c) 450 ÷ 15 = 30"
          },
          {
            "level": "rozsirenie",
            "text": "Vypočítaj (zlomky a desatinné čísla spolu): a) (1/2 + 0,75) · 4 b) 2,5 − 3/4 · (−2/3) c) (−1/2 + 1/3) ÷ (1/6)",
            "answer": "a) 1,25 · 4 = 5<br>b) 2,5 + 1/2 = 3<br>c) (−1/6) ÷ (1/6) = −1"
          },
          {
            "level": "rozsirenie",
            "text": "Najprv odhadni (zaokrúhli čísla), potom vypočítaj presne: 4,9 · 6,1 + 9,8. Napíš, o koľko sa líši odhad od presnej hodnoty.",
            "answer": "Odhad: 5 · 6 + 10 = 40.<br>Presne: 29,89 + 9,8 = 39,69.<br>Rozdiel: 40 − 39,69 = 0,31."
          },
          {
            "level": "rozsirenie",
            "text": "Slovná úloha: Kúpili sme 3 zošity po 1,35 € a 2 perá po 0,85 € a zaplatili 10 €. Koľko eur nám vrátili?",
            "answer": "3 · 1,35 + 2 · 0,85 = 4,05 + 1,70 = 5,75 €<br>Vrátili 10 − 5,75 = 4,25 €."
          },
          {
            "level": "zaklad",
            "text": "Vypočítaj (spoločný menovateľ z rozkladu, kráť pred násobením): a) 5/12 − 3/8 + 1/6 b) 15/42 · 54/35 c) 36/45 : 24/90 d) 28/45 : 14/15",
            "answer": "a) NSN = 24: 10/24 − 9/24 + 4/24 = 5/24<br>b) 3 · 9 / (7 · 7) = 27/49<br>c) 36/45 · 90/24 = 3<br>d) 28/45 · 15/14 = 2/3"
          },
          {
            "level": "rozsirenie",
            "text": "Zmiešané a desatinné čísla: a) (3/4 − 1 1/2) : 0,3 b) (2 3/4 − 2 2/3) : (1 2/3 − 5/6) c) (3 2/3 − 2 1/6) : (2,25 − 3/4)",
            "answer": "a) (3/4 − 3/2) : 3/10 = −3/4 · 10/3 = −5/2<br>b) (11/4 − 8/3) : (5/3 − 5/6) = 1/12 : 5/6 = 1/10<br>c) (11/3 − 13/6) : (9/4 − 3/4) = 3/2 : 3/2 = 1"
          },
          {
            "level": "rozsirenie",
            "text": "Hranaté zátvorky: a) 2 · [2,5 − (9/2 − 3/4)] b) [(1 3/4 + 9/3) : (2 1/3 − 3/4)] · (−1/3)",
            "answer": "a) 2 · [5/2 − 15/4] = 2 · (−5/4) = −5/2 = −2,5<br>b) (7/4 + 3) : (7/3 − 3/4) = 19/4 : 19/12 = 3, potom 3 · (−1/3) = −1"
          },
          {
            "level": "rozsirenie",
            "text": "Viacposchodové zlomky: a) (2/9 + 4/3) : ((−5/6) + 3/12) b) (2 1/4 − 5/12 : 5/6) : (3 · [4/9 − (−2/3)])",
            "answer": "a) čitateľ 14/9, menovateľ −7/12; 14/9 · (−12/7) = −8/3<br>b) čitateľ 9/4 − 1/2 = 7/4, menovateľ 3 · 10/9 = 10/3; 7/4 · 3/10 = 21/40"
          },
          {
            "level": "bonus",
            "text": "Vypočítaj ((2/3 + 3/4) − (1/4 + 1/5)) : ((4/5 + 5/6) − 4/25) a výsledok zapíš zlomkom v základnom tvare. Potom ho zaokrúhli na tisíciny a skontroluj odhadom.",
            "answer": "čitateľ: 17/12 − 9/20 = 85/60 − 27/60 = 58/60 = 29/30<br>menovateľ: 49/30 − 4/25 = 245/150 − 24/150 = 221/150<br>29/30 · 150/221 = 29 · 5 / 221 = 145/221 ≈ 0,656<br>Odhad: čitateľ je takmer 1, menovateľ asi 1,5, podiel asi 0,65."
          },
          {
            "level": "bonus",
            "text": "Vypočítaj 2/3 − 1/2 · (5/9 − 1/3). Výsledok napíš zlomkom aj desatinným číslom. Je jeho desatinný rozvoj konečný?",
            "answer": "5/9 − 1/3 = 2/9; 1/2 · 2/9 = 1/9; 2/3 − 1/9 = 5/9<br>5 : 9 = 0,555… = 0,(5). Rozvoj je periodický, nie konečný, preto 0,56 je iba zaokrúhlenie."
          },
          {
            "level": "bonus",
            "text": "Vlož do výrazu 2 + 3 · 4 − 1 zátvorky tak, aby sa rovnal 15. Potom nájdi aspoň jeden ďalší spôsob vloženia zátvoriek a vypočítaj, čo vyjde.",
            "answer": "(2 + 3) · (4 − 1) = 5 · 3 = 15<br>Iný spôsob: (2 + 3) · 4 − 1 = 19, alebo 2 + 3 · (4 − 1) = 11."
          },
          {
            "level": "bonus",
            "text": "Kalkulačka zobrazí 1 ÷ 3 = 0,3333333. Ak toto zobrazené číslo vynásobíš tromi, dostaneš 0,9999999, hoci 3 · (1/3) = 1. Vysvetli, prečo sa výsledky líšia.",
            "answer": "Displej obsahuje iba konečný počet číslic, preto zobrazuje zaokrúhlený (približný) rozvoj čísla 1/3 = 0,333…, ktorý je nekonečný. Presný výsledok je 1. Preto zaokrúhľujeme až na konci."
          }
        ]
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Prečo odhad pomáha",
        "prompt": "Vysvetli jednou až dvoma vetami, prečo je dobré výsledok pred počítaním odhadnúť a prečo sa pri kalkulačke oplatí použiť zátvorky.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Odhad nám povie, približne akého rádu má byť výsledok, a tak odhalí hrubú chybu, napríklad posunutú desatinnú čiarku. Kalkulačka počíta podľa poradia operácií, preto zátvorky potrebujeme, ak chceme niektorú operáciu vykonať skôr.",
        "placeholder": "Odhad je užitočný, pretože…"
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "poradie operácií a zátvorky",
          "záporné čísla",
          "zlomky a desatinné čísla",
          "zaokrúhľovanie a odhad"
        ],
        "prompt": "Označ, ako dobre to zvládaš. Nie je to známka; porovnaj svoj pocit s výsledkom úloh. Čo máš 🔴 alebo 🟡, si ešte raz prejdi."
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 5,
        "text": "Vypočítaj: a) 18 − 3 · 4 + 6 ÷ 2 b) (18 − 3) · 4 + 6 ÷ 2 c) 18 − 3 · (4 + 6) ÷ 2",
        "answer": "a) 18 − 12 + 3 = 9<br>b) 15 · 4 + 3 = 63<br>c) 18 − 3 · 10 ÷ 2 = 18 − 15 = 3"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 5,
        "text": "Vypočítaj: a) (−9) + 14 − (−6) b) (−5) · (−4) ÷ 10 c) 3 − 4 · (−2)",
        "answer": "a) −9 + 14 + 6 = 11<br>b) 20 ÷ 10 = 2<br>c) 3 + 8 = 11"
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 5,
        "text": "Vypočítaj: a) 1/2 + 1/3 b) 7/8 − 1/4 c) 3/5 · 10/9 d) 2/3 ÷ 4/9",
        "answer": "a) 5/6<br>b) 7/8 − 2/8 = 5/8<br>c) 30/45 = 2/3<br>d) 2/3 · 9/4 = 18/12 = 3/2"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 5,
        "text": "Zaokrúhli: a) 5,372 na desatiny b) 0,0486 na stotiny c) 249,5 na jednotky d) 1 984 na stovky",
        "answer": "a) 5,4<br>b) 0,05<br>c) 250<br>d) 2 000"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 7,
        "text": "Odhadni (zaokrúhli čísla) a potom vypočítaj presne: a) 19,8 · 3,1 b) 99 ÷ 4,95. Napíš, či je odhad blízko presného výsledku.",
        "answer": "a) odhad 20 · 3 = 60; presne 19,8 · 3,1 = 61,38<br>b) odhad 100 ÷ 5 = 20; presne 99 ÷ 4,95 = 20"
      },
      {
        "id": "w7",
        "level": "zaklad",
        "space": 5,
        "text": "Kráť pred násobením: a) 21/55 · 33/14 b) 28/45 : 14/15",
        "answer": "a) 3 · 3 / (5 · 2) = 9/10<br>b) 28/45 · 15/14 = 2/3"
      },
      {
        "id": "w8",
        "level": "rozsirenie",
        "space": 7,
        "text": "Vypočítaj: a) (2 1/2 + 1,25) : (5/4 − 1/2) b) 4 1/2 − 0,75 : 3/8",
        "answer": "a) 15/4 : 3/4 = 5<br>b) 9/2 − 3/4 · 8/3 = 9/2 − 2 = 5/2 = 2,5"
      },
      {
        "id": "w9",
        "level": "bonus",
        "space": 7,
        "text": "Vypočítaj viacposchodové zlomky: a) (1/2 + 1/3) : (1/4 − 1/6) b) (1/2 − 1/3) : (1/3 + 1/4)",
        "answer": "a) 5/6 : 1/12 = 10<br>b) 1/6 : 7/12 = 1/6 · 12/7 = 2/7"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 6,
        "text": "Vypočítaj: 1/2 + 1/4 + 1/8 + 1/16. Koľko ešte chýba do 1? Zapíš ako zlomok aj ako desatinné číslo.",
        "answer": "Súčet 8/16 + 4/16 + 2/16 + 1/16 = 15/16.<br>Chýba 1/16 = 0,0625."
      }
    ]
  }
});
