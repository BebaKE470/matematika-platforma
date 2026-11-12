MathPlatform.registerModule({
  "id": "1-u03-h031",
  "teacher": {
    "placement": "1. ročník · Čísla, premenné, výrazy · 31. hodina: Racionálne, iracionálne, reálne čísla",
    "prerequisites": [
      "prirodzené a celé čísla, zlomky a desatinné čísla zo ZŠ",
      "prevod zlomku na desatinné číslo delením a skracovanie zlomkov",
      "pojmy množina, podmnožina a symboly ∈, ⊂ z celku Množiny",
      "hodiny 28–30: deliteľnosť, NSN a NSD (pri skracovaní zlomkov)"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza tému „Racionálne, iracionálne, reálne čísla“. Obsah modulu rešpektuje jej miesto a rozsah v pláne."
    ],
    "planPerformance": [
      "Plán uvádza: riešiť úlohy finančnej matematiky; používať kritériá deliteľnosti; určiť NSN a NSD pomocou prvočíselného rozkladu. Ďalšie ciele modulu vychádzajú z uvedeného obsahu celku."
    ],
    "goals": [
      "zaradiť dané číslo do N, Z, Q, Ir a R a vysvetliť vzťah N ⊂ Z ⊂ Q ⊂ R",
      "podľa desatinného rozvoja (konečný, periodický, nekonečný neperiodický) rozhodnúť, či je číslo racionálne",
      "previesť zlomok na desatinné číslo a konečné či periodické desatinné číslo späť na zlomok",
      "umiestniť racionálne aj iracionálne čísla (1/2, 3/2, √2, π) približne na číselnú os a porovnať ich veľkosť"
    ],
    "competencies": [
      "matematická komunikácia",
      "práca s reprezentáciami (zlomok, desatinný rozvoj, číselná os)",
      "argumentácia a kontrola výsledku",
      "prehľadný ručný zápis"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie spôsobu práce: interpretácia, reprezentácie a zdôvodnenie. Bonusová úloha ukazuje, ako sa periodické číslo prevedie na zlomok pomocou neznámej x (bez nových pojmov).",
      "Odmocniny zatiaľ nezavádzame: √2 uvádzame len ako číslo, ktorého druhá mocnina je 2, a nepočítame s ním."
    ],
    "flow": [
      "3 min: opakovanie N, Z, zlomky a desatinné čísla; kde sa v tom skrýva nový typ čísla",
      "10 min: výklad v aplikácii (Q, desatinný rozvoj, iracionálne čísla, číselná os) s ukážkovými príkladmi",
      "10–12 min: digitálne úlohy (zaraďovanie, desatinné rozvoje, nájdi chybu)",
      "8–10 min: samostatná práca na papieri BEZ MOBILU a zbierka podľa úrovne",
      "3–5 min: spoločný rozbor najčastejších chýb podľa živých výsledkov"
    ],
    "diagnostics": [
      "pomýli si nekonečný desatinný rozvoj s iracionálnosťou (0,333… je racionálne)",
      "zamieňa číslo π so zaokrúhlenými hodnotami 3,14 alebo 22/7",
      "nevie zaradiť celé číslo do Q (5 = 5/1) a nezvláda vzťah N ⊂ Z ⊂ Q ⊂ R",
      "nevie previesť zlomok na desatinné číslo alebo desatinné číslo na zlomok v základnom tvare"
    ],
    "partialUse": [
      "Pri nedostatku času vynechajte zbierku a bonusové úlohy; jadro tvorí výklad, zaraďovanie čísel a práca s desatinným rozvojom.",
      "Mobil nenahrádza ručné počítanie, prevody zlomkov, náčrt číselnej osi ani zdôvodnenie."
    ]
  },
  "student": {
    "title": "Racionálne, iracionálne, reálne čísla",
    "subtitle": "Téma 31 · Čísla, premenné, výrazy",
    "intro": "Naučíš sa rozlišovať druhy čísel, čítať z desatinného rozvoja, či je číslo racionálne, a umiestňovať ich na číselnú os. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "28–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už o číslach vieme",
        "html": "<p>Zo ZŠ poznáš tri skupiny čísel:</p><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Prirodzené čísla N</div><p class=\"term-rule\">1, 2, 3, 4, … Používame ich na počítanie predmetov.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Celé čísla Z</div><p class=\"term-rule\">… −3, −2, −1, 0, 1, 2, 3, … Pridali sme nulu a záporné čísla.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Zlomky a desatinné čísla</div><p class=\"term-rule\">Napr. 3/4 = 0,75 alebo 1/3 = 0,333… Potrebujeme ich, keď niečo delíme na časti.</p></div></div><p>Zlomok skrátiš tak, že čitateľa aj menovateľa vydelíš ich NSD (hodiny 28–30). Dnes všetky tieto čísla zaradíme do jedného systému a zistíme, že existujú aj čísla, ktoré sa zlomkom <strong>vôbec nedajú zapísať</strong>.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "povedať, čo je racionálne a čo iracionálne číslo",
          "zaradiť číslo do N, Z, Q, Ir alebo R",
          "z desatinného rozvoja rozhodnúť, či je číslo racionálne",
          "približne umiestniť čísla na číselnú os"
        ]
      },
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Mapa čísel",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 330\" role=\"img\" aria-label=\"Schéma: v množine R leží množina Q, v nej Z a v nej N. Mimo Q, ale v R ležia iracionálne čísla Ir.\"><g font-family=\"system-ui\" text-anchor=\"middle\" fill=\"currentColor\"><rect x=\"20\" y=\"15\" width=\"720\" height=\"300\" rx=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"40\" y=\"40\" font-size=\"18\" font-weight=\"700\" text-anchor=\"start\">R – reálne čísla</text><ellipse cx=\"290\" cy=\"180\" rx=\"250\" ry=\"135\" opacity=\".07\" stroke=\"currentColor\" stroke-width=\"3\"/><ellipse cx=\"290\" cy=\"180\" rx=\"250\" ry=\"135\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><ellipse cx=\"260\" cy=\"195\" rx=\"170\" ry=\"95\" opacity=\".1\" stroke=\"none\"/><ellipse cx=\"260\" cy=\"195\" rx=\"170\" ry=\"95\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><ellipse cx=\"225\" cy=\"215\" rx=\"95\" ry=\"50\" opacity=\".15\" stroke=\"none\"/><ellipse cx=\"225\" cy=\"215\" rx=\"95\" ry=\"50\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"290\" y=\"74\" font-size=\"17\" font-weight=\"700\">Q – racionálne</text><text x=\"290\" y=\"94\" font-size=\"15\">−3/4 ; 0,5 ; 0,333…</text><text x=\"260\" y=\"128\" font-size=\"17\" font-weight=\"700\">Z – celé</text><text x=\"260\" y=\"148\" font-size=\"15\">−3 ; 0 ; −10</text><text x=\"225\" y=\"205\" font-size=\"20\" font-weight=\"700\">N</text><text x=\"225\" y=\"228\" font-size=\"15\">1 ; 2 ; 25</text><text x=\"640\" y=\"140\" font-size=\"17\" font-weight=\"700\">Ir – iracionálne</text><text x=\"640\" y=\"175\" font-size=\"16\">√2</text><text x=\"640\" y=\"200\" font-size=\"16\">π</text><text x=\"640\" y=\"225\" font-size=\"15\">0,1010010001…</text></g></svg></div><p>Čísla sú vnorené ako bábky: každé prirodzené číslo je celé, každé celé je racionálne. Iracionálne čísla ležia <strong>mimo Q</strong> – spolu s Q vypĺňajú celú množinu R.</p>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "concept",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Racionálne a iracionálne čísla",
        "html": "<div class=\"term-list\"><div class=\"term-item\"><span class=\"term-symbol\">Q</span><div><div class=\"term-name\">Racionálne číslo</div><p class=\"term-rule\">Číslo, ktoré sa dá zapísať ako <span class=\"frac\"><span class=\"frac-num\">a</span><span class=\"frac-den\">b</span></span>, kde <strong>a je celé číslo</strong> a <strong>b je celé číslo rôzne od nuly</strong>.</p></div></div><div class=\"term-item\"><span class=\"term-symbol\">Ir</span><div><div class=\"term-name\">Iracionálne číslo</div><p class=\"term-rule\">Číslo, ktoré <strong>nemožno</strong> zapísať ako zlomok dvoch celých čísel.</p></div></div><div class=\"term-item\"><span class=\"term-symbol\">R</span><div><div class=\"term-name\">Reálne číslo</div><p class=\"term-rule\">Každé racionálne aj každé iracionálne číslo. Všetky reálne čísla ležia na číselnej osi.</p></div></div></div><div class=\"formula\">N ⊂ Z ⊂ Q ⊂ R<span class=\"formula-note\">Čítame: „N je podmnožinou Z, Z je podmnožinou Q, Q je podmnožinou R.“ Dohoda: N = {1, 2, 3, …}.</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD: PREČO JE 5 RACIONÁLNE</span><p>5 = <span class=\"frac\"><span class=\"frac-num\">5</span><span class=\"frac-den\">1</span></span> – celé číslo vydelené jednotkou je zlomok.</p><p>−2 = <span class=\"frac\"><span class=\"frac-num\">−2</span><span class=\"frac-den\">1</span></span>, 0,75 = <span class=\"frac\"><span class=\"frac-num\">75</span><span class=\"frac-den\">100</span></span> = <span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">4</span></span>, 1,2 = <span class=\"frac\"><span class=\"frac-num\">12</span><span class=\"frac-den\">10</span></span> = <span class=\"frac\"><span class=\"frac-num\">6</span><span class=\"frac-den\">5</span></span></p><p>Všetky tieto čísla sú racionálne, lebo vieme nájsť zlomok, ktorý ich zapisuje.</p></div>",
        "remember": "Racionálne = dá sa zapísať ako zlomok celých čísel (menovateľ nie je 0). Každé celé číslo je racionálne."
      },
      {
        "id": "decimal",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Desatinný rozvoj prezradí, o aké číslo ide",
        "html": "<p>Keď zlomok vydelíš (čitateľ ÷ menovateľ), dostaneš desatinný rozvoj. Sú len dve možnosti, ako môže pri racionálnom čísle vyzerať:</p><div class=\"example\"><span class=\"mini-label\">KONEČNÝ ROZVOJ</span><p><span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">8</span></span> = 3 ÷ 8 = 0,375 – delenie sa skončí (zvyšok 0).</p></div><div class=\"example\"><span class=\"mini-label\">PERIODICKÝ ROZVOJ</span><p><span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">3</span></span> = 0,333… (opakuje sa 3) &nbsp;·&nbsp; <span class=\"frac\"><span class=\"frac-num\">4</span><span class=\"frac-den\">11</span></span> = 0,363636… (opakuje sa 36) &nbsp;·&nbsp; <span class=\"frac\"><span class=\"frac-num\">5</span><span class=\"frac-den\">6</span></span> = 0,8333… (opakuje sa 3)</p><p>Opakujúcej sa skupine číslic hovoríme <span class=\"hl\">perióda</span>. Zapisujeme ju aj 0,(3) alebo 0,(36).</p></div><p>Iracionálne čísla majú rozvoj <strong>nekonečný a zároveň neperiodický</strong> – žiadna skupina číslic sa pravidelne neopakuje:</p><div class=\"example\"><span class=\"mini-label\">NEKONEČNÝ NEPERIODICKÝ ROZVOJ</span><p>π = 3,14159265358979…</p><p>√2 = 1,41421356237… (√2 je kladné číslo, ktorého druhá mocnina je 2: 1,4142… · 1,4142… ≈ 2)</p><p>0,1010010001000010… (za každou jednotkou je o nulu viac)</p></div><div class=\"formula\">konečný alebo periodický rozvoj → Q<br>nekonečný neperiodický rozvoj → Ir<span class=\"formula-note\">Rozhoduje to, či sa dá číslo zapísať ako zlomok celých čísel, nie to, či je rozvoj dlhý.</span></div><div class=\"warning\"><strong>Pozor:</strong> Číslo 0,333… sa nikdy nekončí, a predsa je racionálne, lebo sa rovná zlomku 1/3. Iracionálnosť neznamená „nekonečný rozvoj“, ale „nekonečný a neperiodický rozvoj“.</div>",
        "remember": "Rozvoj konečný alebo periodický → racionálne. Rozvoj nekonečný a neperiodický → iracionálne."
      },
      {
        "id": "pi-note",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Čo je to π a prečo nie je 3,14",
        "html": "<p>Číslo <strong>π</strong> je pomer obvodu kruhu k jeho priemeru. Pri každom kruhu vyjde rovnaké číslo, ale zapísať ho zlomkom celých čísel sa nedá.</p><div class=\"compare\"><div class=\"bad\"><span class=\"mini-label\">NIE JE ROVNÉ π</span><p>3,14 &nbsp; · &nbsp; 22/7 = 3,142857… &nbsp; · &nbsp; 3,1416</p><p>Sú to len <strong>racionálne približné hodnoty</strong> (priblíženia).</p></div><div class=\"good\"><span class=\"mini-label\">SKUTOČNÉ π</span><p>3,14159265358979…</p><p>Rozvoj sa nikdy nekončí a nikdy sa nezačne pravidelne opakovať.</p></div></div><p>Pri počítaní používame približnú hodnotu, lebo nevieme zapísať všetky číslice. Symbol ≈ znamená „približne rovná sa“: π ≈ 3,14.</p>"
      },
      {
        "id": "axis-info",
        "type": "info",
        "phase": "POCHOP",
        "title": "Reálne čísla na číselnej osi",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 200\" role=\"img\" aria-label=\"Číselná os od 0 do 3,5 so značkami 0, 1, 2, 3 a bodmi 1/2, √2, 3/2 a π.\"><g font-family=\"system-ui\" text-anchor=\"middle\" fill=\"currentColor\"><line x1=\"30\" y1=\"100\" x2=\"740\" y2=\"100\" stroke=\"currentColor\" stroke-width=\"3\"/><polygon points=\"740,100 728,94 728,106\"/><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"60\" y1=\"92\" x2=\"60\" y2=\"108\"/><line x1=\"250\" y1=\"92\" x2=\"250\" y2=\"108\"/><line x1=\"440\" y1=\"92\" x2=\"440\" y2=\"108\"/><line x1=\"630\" y1=\"92\" x2=\"630\" y2=\"108\"/></g><g font-size=\"18\"><text x=\"60\" y=\"135\">0</text><text x=\"250\" y=\"135\">1</text><text x=\"440\" y=\"135\">2</text><text x=\"630\" y=\"135\">3</text></g><circle cx=\"155\" cy=\"100\" r=\"7\" fill=\"var(--paper, #fff)\" stroke=\"currentColor\" stroke-width=\"3\"/><circle cx=\"345\" cy=\"100\" r=\"7\" fill=\"var(--paper, #fff)\" stroke=\"currentColor\" stroke-width=\"3\"/><circle cx=\"329\" cy=\"100\" r=\"7\" fill=\"currentColor\"/><circle cx=\"657\" cy=\"100\" r=\"7\" fill=\"currentColor\"/><g font-size=\"18\" font-weight=\"700\"><text x=\"155\" y=\"75\">1/2</text><text x=\"315\" y=\"75\">√2 ≈ 1,414</text><text x=\"360\" y=\"170\">3/2</text><text x=\"657\" y=\"75\">π ≈ 3,14</text></g></svg></div><p>Prázdne kolieska sú racionálne čísla, plné kolieska iracionálne. <strong>Každému reálnemu číslu zodpovedá práve jeden bod osi</strong> a naopak. Medzi každými dvoma rôznymi reálnymi číslami ležia nekonečne veľa racionálnych aj iracionálnych čísel.</p><p>Poloha √2: platí 1,4² = 1,96 a 1,5² = 2,25, preto √2 leží medzi 1,4 a 1,5 – o niečo bližšie k 1,4.</p>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "c-irr",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "racionálne a iracionálne čísla",
        "question": "Ktoré z čísel 0,75; √2; 7/9 je iracionálne, teda sa nedá zapísať ako zlomok celých čísel?",
        "options": [
          "0,75",
          "√2",
          "7/9"
        ],
        "answer": 1,
        "correct": "√2 má nekonečný neperiodický rozvoj 1,41421356…, preto je iracionálne. Číslo 0,75 = 3/4 a 7/9 je už zlomok.",
        "hint": "Ktoré z čísel je už zlomok alebo sa dá ako zlomok zapísať? Zvyšné je hľadané."
      },
      {
        "id": "c-period",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "desatinný rozvoj",
        "question": "Číslo 0,272727… má desatinný rozvoj, v ktorom sa stále opakuje skupina 27. Ktoré tvrdenie o ňom je pravdivé?",
        "options": [
          "Je iracionálne, lebo sa jeho rozvoj nikdy nekončí.",
          "Nie je reálne číslo, lebo nemá konečný zápis.",
          "Je racionálne, lebo má periodický rozvoj."
        ],
        "answer": 2,
        "correct": "Presne tak, 0,272727… = 3/11. Rozvoj sa nekončí, ale opakuje sa, preto je číslo racionálne.",
        "hint": "Iracionálne číslo musí mať rozvoj nekonečný a súčasne neperiodický. Platí to tu?"
      },
      {
        "id": "n-dec",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "prevod zlomku na desatinné číslo",
        "title": "Zlomok na desatinné číslo",
        "prompt": "Vydeľ čitateľa menovateľom a zapíš zlomok 3/8 ako desatinné číslo.",
        "validate": "exact",
        "answer": 0.375,
        "success": "3 ÷ 8 = 0,375. Delenie sa skončilo, preto je rozvoj konečný.",
        "hint": "3 ÷ 8 počítaj písomne: 3,000 ÷ 8. Koľko je 30 ÷ 8 a aký zostane zvyšok?",
        "reveal": "Správne je 0,375: 30 ÷ 8 = 3 (zv. 6), 60 ÷ 8 = 7 (zv. 4), 40 ÷ 8 = 5 (zv. 0)."
      },
      {
        "id": "n-den",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "prevod desatinného čísla na zlomok",
        "title": "Desatinné číslo na zlomok",
        "prompt": "Číslo 0,6 zapíš ako zlomok v základnom tvare. Aký je jeho menovateľ?",
        "validate": "exact",
        "answer": 5,
        "success": "0,6 = 6/10 = 3/5. Po skrátení dvojkou je menovateľ 5.",
        "hint": "0,6 sú šesť desatín, teda 6/10. Ešte zlomok skráť ich NSD.",
        "reveal": "Správne je 5: 6/10 = 3/5, lebo NSD(6, 10) = 2."
      },
      {
        "id": "matrix-classify",
        "type": "matrix",
        "phase": "PRECVIČ",
        "skill": "číselné obory",
        "title": "Zaraď každé číslo do najmenšej skupiny",
        "labels": ["Prirodzené číslo", "Celé záporné číslo", "Racionálne, nie celé", "Iracionálne číslo"],
        "items": [
          { "text": "12", "answer": "Prirodzené číslo" },
          { "text": "−7", "answer": "Celé záporné číslo" },
          { "text": "0,5", "answer": "Racionálne, nie celé" },
          { "text": "4/9", "answer": "Racionálne, nie celé" },
          { "text": "0,666…", "answer": "Racionálne, nie celé" },
          { "text": "−20/4", "answer": "Celé záporné číslo" },
          { "text": "π", "answer": "Iracionálne číslo" },
          { "text": "0,1010010001…", "answer": "Iracionálne číslo" }
        ]
      },
      {
        "id": "sort-rational",
        "type": "sortChoice",
        "phase": "PRECVIČ",
        "skill": "desatinný rozvoj",
        "title": "Racionálne alebo iracionálne?",
        "question": "Rozhodni podľa zápisu, či je číslo racionálne.",
        "labels": ["Racionálne", "Iracionálne"],
        "items": [
          { "text": "−3/7", "answer": true, "why": "Je to zlomok celých čísel." },
          { "text": "2,5", "answer": true, "why": "Konečný rozvoj: 2,5 = 5/2." },
          { "text": "0,121212… (opakuje sa 12)", "answer": true, "why": "Periodický rozvoj, rovná sa 4/33." },
          { "text": "π", "answer": false, "why": "Nekonečný neperiodický rozvoj; 3,14 je iba priblíženie." },
          { "text": "1,23456789101112… (za sebou idúce čísla)", "answer": false, "why": "Rozvoj je nekonečný a neperiodický, nikdy sa nezačne pravidelne opakovať." },
          { "text": "√2", "answer": false, "why": "Rozvoj 1,41421356… je nekonečný a neperiodický." }
        ]
      },
      {
        "id": "sort-subsets",
        "type": "sortChoice",
        "phase": "PRECVIČ",
        "skill": "vzťahy medzi množinami čísel",
        "title": "Pravda alebo nepravda?",
        "question": "Rozhodni, či je tvrdenie o číselných množinách pravdivé.",
        "labels": ["Pravda", "Nepravda"],
        "items": [
          { "text": "Každé prirodzené číslo je celé číslo.", "answer": true, "why": "N ⊂ Z." },
          { "text": "Každé celé číslo je racionálne (napr. 5 = 5/1).", "answer": true, "why": "Z ⊂ Q, celé číslo zapíšeme s menovateľom 1." },
          { "text": "Každé racionálne číslo je celé číslo.", "answer": false, "why": "Napr. 1/2 je racionálne, ale nie je celé." },
          { "text": "Existuje číslo, ktoré je zároveň racionálne aj iracionálne.", "answer": false, "why": "Čo sa dá zapísať ako zlomok, nie je iracionálne; množiny Q a Ir nemajú spoločný prvok." },
          { "text": "Každé iracionálne číslo je reálne.", "answer": true, "why": "R tvoria racionálne aj iracionálne čísla." },
          { "text": "Každé reálne číslo je racionálne.", "answer": false, "why": "Napr. π je reálne, ale nie je racionálne." }
        ]
      },
      {
        "id": "c-closest",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "číselná os",
        "question": "√2 je kladné číslo, ktorého druhá mocnina je 2. Platí 1,3² = 1,69; 1,4² = 1,96 a 1,5² = 2,25. Ktoré z čísel 1,4; 1,3; 1,5 leží na číselnej osi najbližšie k √2?",
        "options": [
          "1,4",
          "1,3",
          "1,5"
        ],
        "answer": 0,
        "correct": "Druhá mocnina čísla 1,4 je 1,96, čo je najbližšie k 2, preto je 1,4 najbližšie k √2.",
        "hint": "Čím bližšie je druhá mocnina čísla k 2, tým bližšie je číslo k √2. Porovnaj vzdialenosti 1,69; 1,96 a 2,25 od čísla 2."
      },
      {
        "id": "c-order",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "porovnanie čísel",
        "question": "Ktoré z čísel 0,7; 3/4; 2/3 je najväčšie (leží na číselnej osi najviac vpravo)?",
        "options": [
          "0,7",
          "3/4",
          "2/3"
        ],
        "answer": 1,
        "correct": "3/4 = 0,75, 0,7 = 0,70 a 2/3 = 0,666… Najväčšie je preto 3/4.",
        "hint": "Prever všetky tri čísla na desatinné čísla, aby si ich vedel/a porovnať."
      },
      {
        "id": "c-smallest-set",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "číselné obory",
        "question": "Z množín N, Z, Q a R vyber najmenšiu, ktorá obsahuje číslo −3/4.",
        "options": [
          "N",
          "Z",
          "Q"
        ],
        "answer": 2,
        "correct": "−3/4 nie je celé číslo, ale je to zlomok celých čísel, preto patrí do Q. R ho tiež obsahuje, ale je väčšia.",
        "hint": "Je −3/4 prirodzené číslo? Je celé? Ak nie, zostáva ďalší obor v rade N ⊂ Z ⊂ Q ⊂ R."
      },
      {
        "id": "n-int-count",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "číselné obory",
        "title": "Koľko celých čísel?",
        "prompt": "Z čísel −8; 2,5; 14; 3/5; −1/2; 20/4 vyber tie, ktoré sú celé čísla. Koľko ich je?",
        "validate": "exact",
        "answer": 3,
        "success": "Celé čísla sú −8, 14 a 20/4 = 5. Čísla 2,5; 3/5 a −1/2 celé nie sú.",
        "hint": "Zlomky najprv vydeľ. Zlomok môže byť celé číslo, ak sa čitateľ delí menovateľom.",
        "reveal": "Správne sú 3: −8, 14 a 20/4 = 5."
      },
      {
        "id": "n-digit",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "periodický rozvoj",
        "title": "Číslica v perióde",
        "prompt": "Zlomok 1/7 má rozvoj 0,142857142857… (skupina 142857 sa stále opakuje). Aká číslica stojí na 20. mieste za desatinnou čiarkou?",
        "validate": "exact",
        "answer": 4,
        "success": "Perióda má 6 číslic. 20 = 3·6 + 2, takže 20. číslica je rovnaká ako 2. číslica periódy: 4.",
        "hint": "Perióda má dĺžku 6. Koľko celých periód sa zmestí do 20 miest a koľko miest zostane?",
        "reveal": "Správne je 4: 18 miest zaplnia tri celé periódy a 19., 20. miesto sú 1 a 4."
      },
      {
        "id": "hunt-pi",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak píše: „π = 3,14 a 3,14 = 314/100, teda π je racionálne číslo.“ V čom je chyba?",
        "options": [
          "Číslo 314/100 nie je zlomok, lebo menovateľ je veľký.",
          "Číslo π nie je rovné 3,14, iba sa mu približne rovná. Skutočný rozvoj π je nekonečný a neperiodický.",
          "Každé reálne číslo je racionálne, takže žiak mal pravdu."
        ],
        "answer": 1,
        "correct": "Presne. 3,14 je racionálne priblíženie. Pre π platí len π ≈ 3,14, nie rovnosť.",
        "hint": "Platí v prvom kroku znamienko „=“? Dá sa číslo π zapísať presne ako 3,14?"
      },
      {
        "id": "hunt-third",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak tvrdí: „Číslo 0,333… sa nikdy nekončí, preto nie je racionálne.“ Čo je na tom nesprávne?",
        "options": [
          "Nič, každé nekonečné číslo je iracionálne.",
          "Číslo 0,333… nie je kladné.",
          "Rozvoj sa opakuje (je periodický) a číslo sa rovná zlomku 1/3, preto je racionálne."
        ],
        "answer": 2,
        "correct": "Presne. Nekonečný rozvoj nestačí na iracionálnosť, musí byť aj neperiodický.",
        "hint": "Existuje zlomok, ktorého hodnota je 0,333…?"
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha na papier",
        "html": "<p>Odlož zariadenie. Nakresli číselnú os, jednotku zvoľ 4 cm (alebo 8 štvorčekov), a približne na ňu umiestni čísla: <strong>−1,5; 1/2; 3/2; √2 (≈ 1,41) a 2,5</strong>.</p><ol><li>Pri každom čísle napíš, či je racionálne, alebo iracionálne.</li><li>Zapíš čísla od najmenšieho po najväčšie pomocou znaku &lt;.</li><li>Zlomok 5/6 prelož na desatinné číslo a zapíš jeho periódu.</li></ol><p>Postup zapíš tak, ako by si ho písal/a do písomky.</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: racionálne a reálne čísla",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Riešenia píš do zošita. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Zapíš ako zlomok v základnom tvare: a) 0,45 b) 0,08 c) 2,5 d) −1,2",
            "answer": "a) 45/100 = 9/20<br>b) 8/100 = 2/25<br>c) 25/10 = 5/2<br>d) −12/10 = −6/5"
          },
          {
            "level": "zaklad",
            "text": "Zapíš ako desatinné číslo (použi písomné delenie): a) 7/8 b) 5/6 c) 4/11 d) 3/20. Pri periodickom rozvoji označ periódu.",
            "answer": "a) 0,875<br>b) 0,8333… = 0,8(3)<br>c) 0,363636… = 0,(36)<br>d) 0,15"
          },
          {
            "level": "zaklad",
            "text": "Ku každému z čísel 15; −4; 0,2; 2/3; π; −7/5 napíš všetky množiny z N, Z, Q, Ir, R, do ktorých patrí.",
            "answer": "15: N, Z, Q, R<br>−4: Z, Q, R<br>0,2: Q, R<br>2/3: Q, R<br>π: Ir, R<br>−7/5: Q, R"
          },
          {
            "level": "rozsirenie",
            "text": "Zoraď od najmenšieho po najväčšie: −1/2; 0,4; −0,6; 1/3; 0,35.",
            "answer": "Hodnoty: −0,5; 0,4; −0,6; 0,333…; 0,35.<br>−0,6 &lt; −1/2 &lt; 1/3 &lt; 0,35 &lt; 0,4"
          },
          {
            "level": "rozsirenie",
            "text": "Nájdi aspoň jedno racionálne a jedno iracionálne číslo, ktoré leží medzi 0,3 a 0,4. Pri tom iracionálnom zdôvodni, prečo je iracionálne.",
            "answer": "Racionálne napr. 0,35 = 7/20 alebo 1/3 (0,333…).<br>Iracionálne napr. 0,3101001000100001… – za každou jednotkou pribúda ďalšia nula, preto je rozvoj nekonečný a neperiodický."
          },
          {
            "level": "rozsirenie",
            "text": "Rozhodni, či sú tvrdenia pravdivé, a oprav nepravdivé: a) Každé iracionálne číslo je reálne. b) 0,555… je iracionálne. c) Číslo −8 patrí do Z aj do Q. d) Každé racionálne číslo je celé.",
            "answer": "a) pravda<br>b) nepravda; 0,555… = 5/9 je racionálne (periodický rozvoj)<br>c) pravda (Z ⊂ Q)<br>d) nepravda; napr. 1/2 je racionálne, ale nie celé"
          },
          {
            "level": "bonus",
            "text": "Označ x = 0,444… Vyjadri 10x a odpočítaj x. Ukáž, že 0,444… = 4/9. Rovnakým spôsobom (násob číslom 100) preveď 0,(36) na zlomok v základnom tvare.",
            "answer": "10x = 4,444…<br>10x − x = 4,444… − 0,444… = 4, teda 9x = 4 a x = 4/9.<br>y = 0,3636…, 100y = 36,3636…, 99y = 36, y = 36/99 = 4/11."
          },
          {
            "level": "bonus",
            "text": "Rozvoj 1/7 = 0,142857142857… má periódu 142857. Aká číslica stojí na 100. mieste za desatinnou čiarkou? Napíš, ako si to zistil/a.",
            "answer": "Perióda má 6 číslic. 100 = 16·6 + 4, takže 100. číslica je ako 4. číslica periódy: 8."
          }
        ]
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Nekonečné, ale racionálne",
        "prompt": "Vysvetli jednou až dvoma vetami, prečo je číslo 0,333… racionálne, hoci jeho desatinný rozvoj nemá koniec. Prečo je naopak π iracionálne?",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Číslo 0,333… sa dá zapísať zlomkom 1/3, a to stačí na to, aby bolo racionálne; jeho rozvoj sa pravidelne opakuje. Rozvoj π je nekonečný a nikdy sa nezačne pravidelne opakovať, a tak sa π nedá zapísať ako zlomok celých čísel.",
        "placeholder": "Číslo 0,333… je racionálne, pretože…"
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "zaradenie čísla do N, Z, Q, Ir, R",
          "rozlíšenie racionálneho a iracionálneho čísla podľa rozvoja",
          "prevod zlomku na desatinné číslo a späť",
          "umiestnenie čísel na číselnú os"
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
        "text": "Zapíš ako zlomok v základnom tvare: a) 0,35 b) 1,6 c) 0,125 d) −0,04",
        "answer": "a) 35/100 = 7/20<br>b) 16/10 = 8/5<br>c) 125/1000 = 1/8<br>d) −4/100 = −1/25"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 5,
        "text": "Zapíš desatinným číslom (písomné delenie): a) 5/16 b) 2/9 c) 7/12",
        "answer": "a) 0,3125<br>b) 0,222… = 0,(2)<br>c) 0,58333… = 0,58(3)"
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 5,
        "text": "Do tabuľky zapíš pre každé z čísel 9; −6; 0,25; 5/3; π; 0,1010010001… znak ✓, ak patrí do množiny N, Z, Q, Ir, resp. R.",
        "answer": "9: N, Z, Q, R<br>−6: Z, Q, R<br>0,25: Q, R<br>5/3: Q, R<br>π: Ir, R<br>0,1010010001…: Ir, R"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 7,
        "text": "Nakresli číselnú os (jednotka 5 cm) a umiestni na ňu čísla −1/2; 0,25; 5/4; √2 (≈ 1,41) a 1,7. Zapíš ich vzostupne.",
        "answer": "−1/2 &lt; 0,25 &lt; 5/4 (1,25) &lt; √2 (≈ 1,41) &lt; 1,7"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 4,
        "text": "Rozhodni a zdôvodni: a) Je 22/7 rovné číslu π? b) Je číslo 0,909090… (opakuje sa 90) racionálne? c) Je 0,25 reálne číslo?",
        "answer": "a) Nie; 22/7 = 3,142857… je len racionálne priblíženie π.<br>b) Áno, rozvoj je periodický; rovná sa 10/11.<br>c) Áno, je racionálne, a teda aj reálne."
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 6,
        "text": "Použi x = 0,777… a 10x na to, aby si dokázal/a, že 0,777… = 7/9. Potom preveď 0,(18) na zlomok v základnom tvare.",
        "answer": "10x − x = 7, 9x = 7, x = 7/9.<br>y = 0,1818…, 100y − y = 18, y = 18/99 = 2/11."
      }
    ]
  }
});
