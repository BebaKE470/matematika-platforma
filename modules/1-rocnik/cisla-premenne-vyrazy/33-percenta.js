MathPlatform.registerModule({
  "id": "1-u03-h033",
  "teacher": {
    "placement": "1. ročník · Čísla, premenné, výrazy · 33. hodina: Percentá",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "všetko učivo prebrané v predchádzajúcich hodinách a ročníkoch, ktoré je pre úlohu potrebné"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza tému „Percentá“. Obsah modulu rešpektuje jej miesto a rozsah v pláne."
    ],
    "planPerformance": [
      "Plán uvádza: riešiť úlohy finančnej matematiky; používať kritériá deliteľnosti; určiť NSN a NSD pomocou prvočíselného rozkladu. Ďalšie ciele modulu vychádzajú z uvedeného obsahu celku."
    ],
    "goals": [
      "vysvetliť, že 1 % je jedna stotina základu, a určiť základ, počet percent a časť v zadaní",
      "previesť percentá na zlomok a desatinné číslo a naopak",
      "vyriešiť všetky tri typy úloh na percentá (časť, počet percent, základ) násobením, delením alebo trojčlenkou",
      "odhadnúť výsledok a skontrolovať ho spätným výpočtom"
    ],
    "competencies": [
      "matematická komunikácia",
      "modelovanie a reprezentácie",
      "argumentácia a kontrola výsledku",
      "prehľadný ručný zápis"
    ],
    "enrichment": [
      "Percentá nad 100 % a hľadanie základu cez trojčlenku pripravujú tému zmeny ceny z hodiny 34.",
      "Návrh maturitného štandardu je použitý iba ako obohatenie spôsobu práce: interpretácia, modelovanie, reprezentácie a zdôvodnenie."
    ],
    "flow": [
      "2–3 min: otvorená otázka: ako porovnáš 18 bodov z 20 a 27 bodov z 30 (spoločný menovateľ 100)",
      "cca 20 min: aplikácia: stotina ako jednotka, tabuľka prevodov, tri typy úloh, trojčlenka, rýchle výpočty",
      "8–10 min: papierová zbierka, 12 % ako zlomok a desatinné číslo a obe metódy",
      "3–5 min: spoločná kontrola, najčastejšia chyba (zlý základ, zabudnuté delenie 100)"
    ],
    "diagnostics": [
      "žiak správne označí základ (to, čo je 100 %)",
      "žiak rozlíši tri typy úloh a vyberie k nim správnu operáciu",
      "žiak vie previesť percentá na desatinné číslo (7 % = 0,07) a naopak",
      "žiak vie výsledok odhadnúť a skontrolovať spätným výpočtom"
    ],
    "partialUse": [
      "Na krátku hodinu stačí časť s tromi typmi úloh a trojčlenkou (do úlohy NÁJDI CHYBU).",
      "Zbierku a worksheet.tasks možno zadať ako domácu úlohu; mobil nenahrádza ručné počítanie."
    ]
  },
  "student": {
    "title": "Percentá",
    "subtitle": "Téma 33 · Čísla, premenné, výrazy",
    "intro": "Percento je stotina celku. Najprv nájdi základ, potom rozhodni, či hľadáš časť, počet percent alebo základ. Počítaj na papieri a mobil použi na kontrolu.",
    "estimatedTime": "25–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Zo ZŠ poznáš zlomky a desatinné čísla a vieš ich prevádzať: <span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">2</span></span> = 0,5; <span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">4</span></span> = 0,25; <span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">10</span></span> = 0,3.</p><p>Vieš aj, že zlomok je podiel: <span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">4</span></span> z 20 spočítame ako 20 : 4 · 3 = 15. Dnes zistíš, že percentá sú len zlomky so zvláštnym menovateľom, ktorý sa nám hodí pri porovnávaní.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "vysvetliť, čo je jedno percento, a prevádzať percentá na zlomok a desatinné číslo",
          "rozlíšiť základ, počet percent a časť",
          "vyriešiť všetky tri typy úloh: nájsť časť, počet percent aj základ",
          "použiť trojčlenku a koeficient pri výpočte s percentami"
        ]
      },
      {
        "id": "idea",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Percento je jedna stotina",
        "html": "<p>Slovo <span class=\"hl\">percento</span> pochádza z latinského <em>pro centum</em> – „na sto“. Rozdelíme celok na 100 rovnakých dielikov a jeden dielik je 1 %.</p><div class=\"formula\">1 % = <span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">100</span></span> = 0,01<span class=\"formula-note\">p % = <span class=\"frac\"><span class=\"frac-num\">p</span><span class=\"frac-den\">100</span></span> = p : 100</span></div><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Základ (Z)</div><p class=\"term-rule\">Celok, z ktorého percentá berieme – je to to, čo je <span class=\"hl\">100 %</span>. V zadaní býva za slovom „z“.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Počet percent (p)</div><p class=\"term-rule\">Číslo pred znakom %, ktoré hovorí, koľko stotín základu berieme.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Časť (Č), percentová hodnota</div><p class=\"term-rule\">Výsledná hodnota, ktorú p % základu tvorí.</p></div></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Základ je 200 €.</p><p>100 % = 200 € (celý základ)</p><p>50 % = 100 € (polovica)</p><p>10 % = 20 € (desatina)</p><p>1 % = 2 € (stotina)</p><p>200 % = 400 € (dvojnásobok)</p></div>",
        "remember": "Základ je vždy 100 %. Percentá sú stotiny základu."
      },
      {
        "id": "convert",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Percentá, zlomok, desatinné číslo – jedna hodnota, tri zápisy",
        "html": "<p>Percentá vieme zapísať ako zlomok aj ako desatinné číslo. Pri prevode na desatinné číslo posunieme desatinnú čiarku o dve miesta doľava.</p><div class=\"table-wrap\"><table class=\"truth\"><tbody><tr><th>percentá</th><th>zlomok</th><th>desatinné číslo</th></tr><tr><td>50 %</td><td><span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">2</span></span></td><td>0,5</td></tr><tr><td>25 %</td><td><span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">4</span></span></td><td>0,25</td></tr><tr><td>10 %</td><td><span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">10</span></span></td><td>0,1</td></tr><tr><td>5 %</td><td><span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">20</span></span></td><td>0,05</td></tr><tr><td>75 %</td><td><span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">4</span></span></td><td>0,75</td></tr><tr><td>120 %</td><td><span class=\"frac\"><span class=\"frac-num\">6</span><span class=\"frac-den\">5</span></span></td><td>1,2</td></tr></tbody></table></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Spätný prevod: zlomok <span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">8</span></span> na percentá.</p><p>3 : 8 = 0,375</p><p>0,375 = 37,5 % (čiarku posunieme o dve miesta doprava)</p></div><div class=\"warning\"><strong>Pozor:</strong> 7 % nie je 0,7, ale 0,07. Pomôž si: 7 % = <span class=\"frac\"><span class=\"frac-num\">7</span><span class=\"frac-den\">100</span></span> = 7 : 100. Percentá nad 100 % sú v poriadku – znamenajú viac ako celý základ.</div>"
      },
      {
        "id": "three",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Tri typy úloh na percentá",
        "html": "<p>V každej úlohe na percentá sú tri údaje: základ Z, počet percent p a časť Č. Dva sú dané, tretí hľadáme. Podľa toho, čo hľadáme, rozlíšime tri typy.</p><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">1. Hľadáme časť</div><p class=\"term-rule\">Č = Z · p/100 – základ vynásobíme desatinným číslom z percent.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">2. Hľadáme počet percent</div><p class=\"term-rule\">p = Č : Z · 100 – podiel časti a základu zapíšeme v percentách.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">3. Hľadáme základ</div><p class=\"term-rule\">Z = Č : (p/100) – časť vydelíme desatinným číslom z percent.</p></div></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p><strong>Typ 1:</strong> Koľko je 15 % z 240?</p><p>15 % = 0,15</p><p>0,15 · 240 = <strong>36</strong></p></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p><strong>Typ 2:</strong> Koľko percent zo 180 je 45?</p><p>45 : 180 = 0,25</p><p>0,25 = <strong>25 %</strong></p></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p><strong>Typ 3:</strong> 18 je 12 % z čísla. Aké je to číslo?</p><p>Aké číslo vynásobené 0,12 dá 18? Delíme: 18 : 0,12 = <strong>150</strong></p><p>Kontrola: 0,12 · 150 = 18 ✓</p></div>",
        "remember": "Najprv označ základ (to, čo je 100 %). Potom rozhodni, čo hľadáš: časť, percentá alebo základ."
      },
      {
        "id": "rule3",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Trojčlenka – ten istý výpočet po krokoch",
        "html": "<p>Ak sa ti nechce pamätať vzorce, použi <span class=\"hl\">trojčlenku</span>: z toho, čo poznáš, prejdeš najprv na 1 %, potom na 100 % alebo na hľadaný počet percent.</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>18 je 12 % zo Z. Nájdi Z.</p><p>12 % … 18</p><p>1 % … 18 : 12 = 1,5</p><p>100 % … 1,5 · 100 = <strong>150</strong></p></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Koľko je 35 % z 80?</p><p>100 % … 80</p><p>1 % … 80 : 100 = 0,8</p><p>35 % … 0,8 · 35 = <strong>28</strong></p></div><div class=\"warning\"><strong>Pozor:</strong> Najčastejšia chyba: použiť zlý základ. V zadaní „20 žiakov z 25 je koľko percent“ je základ 25 (celá trieda), nie 20. Tiež nezabudni percentá deliť 100 – 40 % z 50 nie je 40 · 50 = 2000, ale 0,4 · 50 = 20.</div>"
      },
      {
        "id": "pod-seba",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Trojčlenka zapísaná pod seba",
        "html": "<p>Na papieri sa trojčlenka zapisuje ako dva riadky pod sebou: vľavo <span class=\"hl\">hodnota</span>, vpravo <span class=\"hl\">percentá</span>. Základ patrí vždy k 100 %.</p><ol class=\"steps\"><li>Prvý riadok: základ a 100 %.</li><li>Druhý riadok: druhý známy údaj; neznámy údaj označ x.</li><li>x vypočítaš krížom: číslo z toho istého riadku ako x vynásobíš číslom z druhého riadka, ktoré je v opačnom stĺpci, a vydeliš tretím číslom.</li></ol><div class=\"example\"><span class=\"mini-label\">KOĽKO PERCENT: 25,5 l Z 75 l</span><p>75 l … 100 %</p><p>25,5 l … x</p><p>x = 25,5 · 100 : 75 = 2 550 : 75 = <strong>34 %</strong></p></div><div class=\"example\"><span class=\"mini-label\">ČASŤ A ZVYŠOK: 57 % Z 800 KUSOV</span><p>800 … 100 %</p><p>x … 57 %</p><p>x = 800 · 57 : 100 = <strong>456</strong> predaných kusov</p><p>Zostalo 800 − 456 = <strong>344</strong> kusov (to je 100 % − 57 % = 43 %).</p></div><div class=\"warning\"><strong>Pozor:</strong> V jednom stĺpci musia byť rovnaké jednotky (litre s litrami, percentá s percentami). Základ je vždy ten, čo je 100 %, nie to menšie číslo.</div>",
        "remember": "Základ patrí k 100 %. Zapíš dva riadky pod seba a x vypočítaj krížom."
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "porozumenie",
        "question": "Koľko je 30 % z 250 €?",
        "options": [
          "75 €",
          "7,5 €",
          "120 €",
          "83 €"
        ],
        "answer": 0,
        "correct": "30 % = 0,3 a 0,3 · 250 = 75 €. Môžeš si overiť aj cez 10 %: 25 € · 3 = 75 €.",
        "hint": "Premeň 30 % na desatinné číslo a vynásob základom 250."
      },
      {
        "id": "c2",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "porozumenie",
        "question": "Ktoré desatinné číslo zodpovedá 7 %?",
        "options": [
          "0,7",
          "7",
          "0,07",
          "0,007"
        ],
        "answer": 2,
        "correct": "7 % = <span class=\"frac\"><span class=\"frac-num\">7</span><span class=\"frac-den\">100</span></span> = 0,07.",
        "hint": "Percento je stotina. Koľko stotín je 7 stotín?"
      },
      {
        "id": "n1",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "Č = Z · p/100",
        "title": "Časť zo základu",
        "prompt": "Vypočítaj, koľko je 8 % z 350. Zapíš iba číslo.",
        "validate": "exact",
        "answer": 28,
        "success": "8 % = 0,08 a 0,08 · 350 = 28.",
        "hint": "Prevedieme 8 % na 0,08. Pozor: 8 % nie je 0,8.",
        "reveal": "Rozlož to: 1 % z 350 je 3,5; 8 % je teda 8 · 3,5 = 28."
      },
      {
        "id": "m1",
        "type": "matrix",
        "phase": "PRECVIČ",
        "skill": "prevody",
        "title": "Zlomok alebo desatinné číslo → percentá",
        "labels": [
          "10 %",
          "20 %",
          "25 %",
          "50 %",
          "75 %"
        ],
        "items": [
          {
            "text": "1/2",
            "answer": "50 %"
          },
          {
            "text": "0,25",
            "answer": "25 %"
          },
          {
            "text": "3/4",
            "answer": "75 %"
          },
          {
            "text": "1/5",
            "answer": "20 %"
          },
          {
            "text": "0,1",
            "answer": "10 %"
          }
        ]
      },
      {
        "id": "s1",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "porozumenie",
        "title": "Pravda alebo nepravda?",
        "question": "Rozhodni, či je tvrdenie pravdivé.",
        "labels": [
          "Pravda",
          "Nepravda"
        ],
        "items": [
          {
            "text": "50 % z 80 je 40",
            "answer": true,
            "why": "50 % je polovica a polovica z 80 je 40."
          },
          {
            "text": "10 % z 300 je 3",
            "answer": false,
            "why": "10 % z 300 je 30 (desatina). Číslo 3 je 1 %."
          },
          {
            "text": "25 % z 60 je 15",
            "answer": true,
            "why": "25 % je štvrtina a 60 : 4 = 15."
          },
          {
            "text": "100 % z 47 je 47",
            "answer": true,
            "why": "100 % je celý základ."
          },
          {
            "text": "200 % z 15 je 30",
            "answer": true,
            "why": "200 % je dvojnásobok základu: 2 · 15 = 30."
          },
          {
            "text": "1 % z 500 je 50",
            "answer": false,
            "why": "1 % z 500 je 500 : 100 = 5. Číslo 50 je 10 %."
          }
        ]
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "typ 2",
        "question": "V triede je 25 žiakov. Päť z nich dnes chýba. Koľko percent žiakov chýba?",
        "options": [
          "5 %",
          "25 %",
          "20 %",
          "80 %"
        ],
        "answer": 2,
        "correct": "Základ je 25 (celá trieda). 5 : 25 = 0,2 = 20 %.",
        "hint": "Základ je celá trieda. Vydeľ časť základom a výsledok zapíš v percentách."
      },
      {
        "id": "n2",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "typ 2",
        "title": "Koľko percent",
        "prompt": "Koľko percent z 60 je 21? Zapíš iba číslo (počet percent).",
        "validate": "exact",
        "answer": 35,
        "success": "21 : 60 = 0,35 = 35 %.",
        "hint": "Vydeľ 21 : 60 a posuň čiarku o dve miesta doprava.",
        "reveal": "Trojčlenka: 60 … 100 %, 1 … 100 : 60 %, 21 … 21 · 100 : 60 = 35 %."
      },
      {
        "id": "c4",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "typ 3",
        "question": "Číslo 18 je 12 % z neznámeho čísla. Aké je to číslo?",
        "options": [
          "2,16",
          "216",
          "18",
          "150"
        ],
        "answer": 3,
        "correct": "18 : 0,12 = 150. Kontrola: 0,12 · 150 = 18.",
        "hint": "Aké číslo vynásobené 0,12 dá 18? Delíme."
      },
      {
        "id": "n3",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "typ 3",
        "title": "Hľadáme základ",
        "prompt": "63 je 35 % z čísla. Aké je to číslo?",
        "validate": "exact",
        "answer": 180,
        "success": "63 : 0,35 = 180. Kontrola: 0,35 · 180 = 63.",
        "hint": "Aké číslo vynásobené 0,35 dá 63? Delíme 63 : 0,35.",
        "reveal": "Trojčlenka: 35 % … 63, 1 % … 1,8, 100 % … 180."
      },
      {
        "id": "c-setup",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "trojčlenka",
        "question": "Z nádrže s objemom 75 l sa vyliali 25,5 l. Ktorý zápis trojčlenky pod seba je správny na zistenie, koľko percent sa vyliali?",
        "options": [
          "75 l … x %; 25,5 l … 100 %",
          "75 l … 25,5 %; x l … 100 %",
          "75 l … 100 %; 25,5 l … x %"
        ],
        "answer": 2,
        "correct": "Základ (celá nádrž, 75 l) je 100 %, preto je v prvom riadku. Druhý riadok je 25,5 l … x %. Vyjde x = 25,5 · 100 : 75 = 34 %.",
        "hint": "Ktoré číslo je celok? K nemu patrí 100 %."
      },
      {
        "id": "n-p1",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "typ 2",
        "title": "Koľko percent z nádrže",
        "prompt": "Z nádrže so 75 litrami sa vyliali 25,5 litra. Koľko percent nádrže to je? Zapíš iba číslo.",
        "validate": "exact",
        "answer": 34,
        "success": "75 … 100 %, 25,5 … x, x = 25,5 · 100 : 75 = 34 %.",
        "hint": "Základ je celá nádrž. Vydeľ 25,5 : 75 a výsledok vyjadri v percentách.",
        "reveal": "Správne je 34: 25,5 : 75 = 0,34 = 34 %."
      },
      {
        "id": "n-p2",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "časť a zvyšok",
        "title": "Koľko zostalo",
        "prompt": "Zo 800 výrobkov sa predalo 57 %. Koľko výrobkov zostalo?",
        "validate": "exact",
        "answer": 344,
        "success": "57 % z 800 = 456 predaných, zostalo 800 − 456 = 344 (alebo 43 % z 800).",
        "hint": "Najprv vypočítaj, koľko sa predalo, alebo rovno koľko percent zostalo.",
        "reveal": "Správne je 344: 100 % − 57 % = 43 % a 0,43 · 800 = 344."
      },
      {
        "id": "c5",
        "type": "choice",
        "phase": "PRENES",
        "skill": "percentá nad 100 %",
        "question": "Koľko je 150 % zo 40?",
        "options": [
          "6",
          "60",
          "150",
          "16"
        ],
        "answer": 1,
        "correct": "150 % = 1,5 a 1,5 · 40 = 60. Viac ako 100 % znamená viac ako celý základ.",
        "hint": "150 % je sto percent a ešte polovica."
      },
      {
        "id": "e1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "kritické myslenie",
        "question": "Jana počítala 40 % z 50 takto: 40 · 50 = 2 000. Čo urobila zle?",
        "options": [
          "Mala vydeliť 50 číslom 40.",
          "Zabudla percentá previesť na 0,4 (vydeliť 100).",
          "Mala odčítať 40 od 50.",
          "Nespravila chybu, 40 % z 50 je 2 000."
        ],
        "answer": 1,
        "correct": "Áno. 40 % je 0,4 a 0,4 · 50 = 20. Výsledok nemôže byť väčší ako 50, lebo 40 % je menej ako celok.",
        "hint": "Skús odhad: 40 % je menej ako polovica základu."
      },
      {
        "id": "self1",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Prečo záleží na základe",
        "prompt": "10 % z 80 a 10 % z 300 sú dve rôzne čísla, hoci oba hovoria o 10 %. Vysvetli vlastnými slovami prečo.",
        "model": "Percentá sú vždy stotiny nejakého základu. Keď je základ iný (80 alebo 300), je aj jedna stotina iná, takže 10 % z 80 je 8 a 10 % z 300 je 30."
      },
      {
        "id": "manual",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Ceruzka má posledné slovo",
        "html": "<p><span class=\"mini-label\">ÚLOHA</span><br>Zapíš 12 % ako zlomok v základnom tvare aj ako desatinné číslo. Potom vypočítaj 12 % z 350 dvoma spôsobmi: násobením desatinným číslom a trojčlenkou. Výsledky porovnaj.</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: percentá",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Riešenia píš do zošita. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Vypočítaj: a) 10 % z 90, b) 25 % zo 360, c) 5 % zo 420.",
            "answer": "a) 0,1 · 90 = 9<br>b) 0,25 · 360 = 90<br>c) 0,05 · 420 = 21"
          },
          {
            "level": "zaklad",
            "text": "Zapíš ako desatinné číslo a ako zlomok v základnom tvare: a) 4 %, b) 35 %, c) 120 %.",
            "answer": "a) 0,04 = <span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">25</span></span><br>b) 0,35 = <span class=\"frac\"><span class=\"frac-num\">7</span><span class=\"frac-den\">20</span></span><br>c) 1,2 = <span class=\"frac\"><span class=\"frac-num\">6</span><span class=\"frac-den\">5</span></span>"
          },
          {
            "level": "zaklad",
            "text": "V triede je 28 žiakov, z toho 7 chlapcov. Koľko percent žiakov tvoria chlapci a koľko dievčatá?",
            "answer": "7 : 28 = 0,25 = 25 % chlapci<br>dievčatá: 100 % − 25 % = 75 %"
          },
          {
            "level": "rozsirenie",
            "text": "Zapíš v percentách: a) 3/8, b) 7/20, c) 5/4.",
            "answer": "a) 3 : 8 = 0,375 = 37,5 %<br>b) 7 : 20 = 0,35 = 35 %<br>c) 5 : 4 = 1,25 = 125 %"
          },
          {
            "level": "rozsirenie",
            "text": "Z 40 litrov mlieka sa vyliali 15 %. Koľko litrov sa vyliali a koľko ich zostalo?",
            "answer": "0,15 · 40 = 6 litrov sa vyliali<br>zostalo 40 − 6 = 34 litrov (alebo 0,85 · 40 = 34)"
          },
          {
            "level": "rozsirenie",
            "text": "Číslo 18 je 24 % z neznámeho čísla. Nájdi ho trojčlenkou.",
            "answer": "24 % … 18<br>1 % … 18 : 24 = 0,75<br>100 % … 75<br>Kontrola: 0,24 · 75 = 18"
          },
          {
            "level": "zaklad",
            "text": "Zapíš trojčlenku pod seba (hodnota … percentá) a vypočítaj: a) Koľko percent zo 75 l je 25,5 l? b) Koľko je 57 % z 800 a koľko zostane?",
            "answer": "a) 75 … 100 %; 25,5 … x; x = 25,5 · 100 : 75 = 34 %<br>b) 800 … 100 %; x … 57 %; x = 456; zostane 800 − 456 = 344"
          },
          {
            "level": "bonus",
            "text": "Koľko percent z 80 je 20 % zo 120?",
            "answer": "20 % zo 120 = 0,2 · 120 = 24<br>24 : 80 = 0,3 = 30 %"
          },
          {
            "level": "bonus",
            "text": "Číslo A je 40 % z čísla B a číslo B je 50 % z čísla 300. Urč A.",
            "answer": "B = 0,5 · 300 = 150<br>A = 0,4 · 150 = 60"
          }
        ]
      },
      {
        "id": "self2",
        "type": "selfWrite",
        "phase": "ARGUMENTUJ",
        "skill": "argumentácia",
        "title": "Ako poznám typ úlohy",
        "prompt": "Napíš vlastnými slovami, ako v zadaní poznáš, či hľadáš časť, počet percent alebo základ.",
        "model": "Najprv nájdem základ, čo je 100 %. Ak poznám základ aj percentá a hľadám výsledok, hľadám časť. Ak poznám základ aj časť, hľadám percentá. Ak poznám časť aj percentá, hľadám základ."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "viem, čo je základ a počet percent",
          "viem počítať časť, percentá aj základ",
          "viem prevádzať percentá, zlomky a desatinné čísla"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka."
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 3,
        "text": "Vypočítaj 30 % zo 150.",
        "answer": "0,3 · 150 = 45"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 3,
        "text": "Koľko percent zo 72 je 18?",
        "answer": "18 : 72 = 0,25 = 25 %"
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 4,
        "text": "Číslo 9 je 12 % z neznámeho čísla. Aké je to číslo?",
        "answer": "9 : 0,12 = 75<br>Kontrola: 0,12 · 75 = 9"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 5,
        "text": "Zo 125 žiakov školy ide 40 % autobusom a 28 % pešo, ostatní bicyklom. Koľko žiakov ide bicyklom?",
        "answer": "bicykel: 100 − 40 − 28 = 32 %<br>0,32 · 125 = 40 žiakov"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 3,
        "text": "Vypočítaj 2,5 % z 800.",
        "answer": "0,025 · 800 = 20"
      },
      {
        "id": "w7",
        "level": "zaklad",
        "space": 4,
        "text": "Trojčlenkou pod seba: koľko percent zo 120 l je 18 l?",
        "answer": "120 l … 100 %; 18 l … x; x = 18 · 100 : 120 = 15 %"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 4,
        "text": "Zapíš zlomok 7/16 v percentách.",
        "answer": "7 : 16 = 0,4375 = 43,75 %"
      }
    ]
  }
});
