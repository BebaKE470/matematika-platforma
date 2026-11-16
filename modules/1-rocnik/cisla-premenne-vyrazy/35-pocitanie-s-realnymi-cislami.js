// Hodina 35 (téma v pláne: „Počítanie s reálnymi číslami“). Na žiadosť učiteľky je digitálna časť
// celá o počítaní a úpravách zlomkov. Výsledky typu a/b sa v `numberInput` nezadávajú (renderer
// berie len celé/desatinné číslo), preto sú zlomkové výsledky vo `choice`/`matrix`/`sortChoice`
// a v `numberInput` sú medzikroky a výsledky, ktoré vychádzajú ako celé alebo desatinné číslo.
MathPlatform.registerModule({
  "id": "1-u03-h035",
  "teacher": {
    "placement": "1. ročník · Čísla, premenné, výrazy · 35. hodina: Počítanie s reálnymi číslami (v tejto hodine: počítanie a úpravy zlomkov)",
    "prerequisites": [
      "zlomok, rozšírenie a krátenie zlomkov, zlomok a desatinné číslo (ZŠ)",
      "hodiny 28–30: deliteľnosť, NSN a NSD (spoločný menovateľ, krátenie)",
      "reálne čísla a ich vlastnosti (hodiny 31–32)",
      "poradie operácií a zátvorky zo ZŠ"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza tému „Počítanie s reálnymi číslami“. Hodina rešpektuje jej miesto v pláne; obsah je zúžený na racionálne čísla v tvare zlomkov (príprava na výrazy a rovnice)."
    ],
    "planPerformance": [
      "Plán uvádza: riešiť úlohy finančnej matematiky; používať kritériá deliteľnosti; určiť NSN a NSD pomocou prvočíselného rozkladu. Určenie spoločného menovateľa cez NSN a krátenie cez NSD z týchto štandardov priamo vychádzajú."
    ],
    "goals": [
      "rozšíriť a vykrátiť zlomok a zapísať ho v základnom tvare",
      "sčítať a odčítať zlomky s rôznymi menovateľmi pomocou spoločného menovateľa (NSN)",
      "vynásobiť a vydeliť zlomky (delenie = násobenie prevráteným zlomkom) a pracovať so zmiešanými číslami",
      "dodržať poradie operácií vo výraze so zlomkami a previesť zlomok na desatinné číslo a späť"
    ],
    "competencies": [
      "matematická komunikácia",
      "prehľadný ručný zápis po krokoch",
      "rozpoznanie chybného postupu (súčet čitateľov aj menovateľov, krátenie súčtu)",
      "kontrola výsledku odhadom"
    ],
    "enrichment": [
      "Zložený zlomok (zlomok v čitateli alebo v menovateli) ako bonusová úloha v zbierke.",
      "Návrh maturitného štandardu je použitý iba ako obohatenie: zdôvodnenie postupu a prevody medzi reprezentáciami."
    ],
    "flow": [
      "cca 7 min: stručný výklad v aplikácii (rozšírenie a krátenie, štyri operácie, zmiešané čísla)",
      "cca 8 min: digitálne úlohy (základný tvar, spoločný menovateľ, hľadanie chyby, poradie operácií)",
      "8–10 min: samostatná práca BEZ MOBILU a zbierka podľa úrovne",
      "3–5 min: spoločný rozbor najčastejších chýb podľa živých výsledkov"
    ],
    "diagnostics": [
      "sčíta čitateľov aj menovateľov (1/3 + 2/5 = 3/8)",
      "kráti súčet alebo rozdiel (čísla po jednom, nie činiteľa): (2 + 3)/(7 + 3) = 2/7",
      "pri delení zlomkom neprevráti deliteľa",
      "nevie nájsť spoločný menovateľ alebo pri rozšírení vynásobí len menovateľa",
      "pri zmiešaných číslach násobí celú časť a zlomok zvlášť",
      "počíta zľava doprava bez ohľadu na prednosť násobenia a delenia"
    ],
    "partialUse": [
      "Digitálna časť trvá cca 20–25 min. Ak chýba čas, vynechaj sortChoice o základnom tvare a zbierku zadaj ako domácu úlohu.",
      "Mobil nenahrádza ručné počítanie ani zápis po krokoch; výsledky a/b sa zapisujú na papieri a v aplikácii sa vyberajú z ponuky.",
      "Písomka k hodine: 35b (zlomky), skupiny A a B."
    ]
  },
  "student": {
    "title": "Počítanie so zlomkami a úpravy zlomkov",
    "subtitle": "Téma 35 · Čísla, premenné, výrazy",
    "intro": "Zopakuješ si rozširovanie a krátenie zlomkov, sčítanie, odčítanie, násobenie a delenie zlomkov a poradie operácií. Počítaj na papieri, výsledky vyberaj a zapisuj do aplikácie.",
    "estimatedTime": "20–25 min",
    "activities": [
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "rozšíriť a vykrátiť zlomok, zapísať ho v základnom tvare",
          "sčítať, odčítať, vynásobiť a vydeliť zlomky",
          "dodržať poradie operácií so zlomkami"
        ]
      },
      {
        "id": "e-adjust",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Rozšírenie a krátenie zlomku",
        "html": "<div class=\"formula\">Rozšírenie: <span class=\"frac\"><span class=\"frac-num\">a</span><span class=\"frac-den\">b</span></span> = <span class=\"frac\"><span class=\"frac-num\">a · k</span><span class=\"frac-den\">b · k</span></span><span class=\"formula-note\">Krátenie: čitateľa aj menovateľa <strong>vydelíme tým istým číslom</strong> (najlepšie ich NSD).</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Rozšírenie: <span class=\"frac\"><span class=\"frac-num\">2</span><span class=\"frac-den\">3</span></span> = <span class=\"frac\"><span class=\"frac-num\">2 · 5</span><span class=\"frac-den\">3 · 5</span></span> = <span class=\"frac\"><span class=\"frac-num\">10</span><span class=\"frac-den\">15</span></span></p><p>Krátenie: <span class=\"frac\"><span class=\"frac-num\">24</span><span class=\"frac-den\">60</span></span> = <span class=\"frac\"><span class=\"frac-num\">24 : 12</span><span class=\"frac-den\">60 : 12</span></span> = <span class=\"frac\"><span class=\"frac-num\">2</span><span class=\"frac-den\">5</span></span> &nbsp;(NSD(24, 60) = 12)</p></div><div class=\"warning\"><strong>Pozor:</strong> Kráti sa <strong>súčin</strong>, nie súčet. <span class=\"frac\"><span class=\"frac-num\">2 + 3</span><span class=\"frac-den\">7 + 3</span></span> sa nedá „vykrátiť trojkami“. Zlomok je v <strong>základnom tvare</strong>, keď čitateľ a menovateľ nemajú spoločného deliteľa väčšieho ako 1.</div>",
        "remember": "Rozšírenie a krátenie nemení hodnotu zlomku. Výsledok zapisuj v základnom tvare."
      },
      {
        "id": "e-ops",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Štyri operácie so zlomkami",
        "html": "<div class=\"formula\">Sčítanie a odčítanie: <strong>spoločný menovateľ</strong>, potom sčítame (odčítame) len čitateľov<span class=\"formula-note\"><span class=\"frac\"><span class=\"frac-num\">a</span><span class=\"frac-den\">c</span></span> + <span class=\"frac\"><span class=\"frac-num\">b</span><span class=\"frac-den\">c</span></span> = <span class=\"frac\"><span class=\"frac-num\">a + b</span><span class=\"frac-den\">c</span></span> &nbsp;(menovateľ sa nemení)</span></div><div class=\"formula\">Násobenie: <span class=\"frac\"><span class=\"frac-num\">a</span><span class=\"frac-den\">b</span></span> · <span class=\"frac\"><span class=\"frac-num\">c</span><span class=\"frac-den\">d</span></span> = <span class=\"frac\"><span class=\"frac-num\">a · c</span><span class=\"frac-den\">b · d</span></span><span class=\"formula-note\">Pred násobením skracuj čitateľa jedného zlomku s menovateľom druhého.</span></div><div class=\"formula\">Delenie: <span class=\"frac\"><span class=\"frac-num\">a</span><span class=\"frac-den\">b</span></span> : <span class=\"frac\"><span class=\"frac-num\">c</span><span class=\"frac-den\">d</span></span> = <span class=\"frac\"><span class=\"frac-num\">a</span><span class=\"frac-den\">b</span></span> · <span class=\"frac\"><span class=\"frac-num\">d</span><span class=\"frac-den\">c</span></span><span class=\"formula-note\">Deliteľa obrátime (prevrátený zlomok) a násobíme.</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p><span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">6</span></span> + <span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">8</span></span> = <span class=\"frac\"><span class=\"frac-num\">4</span><span class=\"frac-den\">24</span></span> + <span class=\"frac\"><span class=\"frac-num\">9</span><span class=\"frac-den\">24</span></span> = <span class=\"frac\"><span class=\"frac-num\">13</span><span class=\"frac-den\">24</span></span> &nbsp;(NSN(6, 8) = 24)</p><p><span class=\"frac\"><span class=\"frac-num\">5</span><span class=\"frac-den\">9</span></span> · <span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">10</span></span> = <span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">3</span></span> · <span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">2</span></span> = <span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">6</span></span></p><p><span class=\"frac\"><span class=\"frac-num\">7</span><span class=\"frac-den\">12</span></span> : <span class=\"frac\"><span class=\"frac-num\">14</span><span class=\"frac-den\">9</span></span> = <span class=\"frac\"><span class=\"frac-num\">7</span><span class=\"frac-den\">12</span></span> · <span class=\"frac\"><span class=\"frac-num\">9</span><span class=\"frac-den\">14</span></span> = <span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">8</span></span></p></div><div class=\"warning\"><strong>Pozor:</strong> Zlomky sa nesčítajú „po častiach“: <span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">3</span></span> + <span class=\"frac\"><span class=\"frac-num\">2</span><span class=\"frac-den\">5</span></span> nie je <span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">8</span></span>. Pri násobení spoločný menovateľ netreba.</div>",
        "remember": "Sčítanie a odčítanie: spoločný menovateľ. Násobenie: čitateľ krát čitateľ, menovateľ krát menovateľ. Delenie: obráť deliteľa a násob."
      },
      {
        "id": "e-more",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Zmiešané čísla, desatinné čísla a poradie operácií",
        "html": "<div class=\"formula\">Zmiešané číslo → zlomok: <span class=\"frac\"><span class=\"frac-num\">a</span><span class=\"frac-den\">b</span></span> = (a · b + c)/b pre <strong>a</strong> <span class=\"frac\"><span class=\"frac-num\">c</span><span class=\"frac-den\">b</span></span><span class=\"formula-note\">Pred násobením a delením zmiešané číslo vždy prevedieme na nepravý zlomok. Zlomok na desatinné číslo: čitateľ : menovateľ.</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>1 <span class=\"frac\"><span class=\"frac-num\">2</span><span class=\"frac-den\">5</span></span> · <span class=\"frac\"><span class=\"frac-num\">5</span><span class=\"frac-den\">14</span></span> = <span class=\"frac\"><span class=\"frac-num\">7</span><span class=\"frac-den\">5</span></span> · <span class=\"frac\"><span class=\"frac-num\">5</span><span class=\"frac-den\">14</span></span> = <span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">2</span></span></p><p><span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">4</span></span> = 3 : 4 = 0,75 &nbsp;a&nbsp; 0,2 = <span class=\"frac\"><span class=\"frac-num\">2</span><span class=\"frac-den\">10</span></span> = <span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">5</span></span></p></div><div class=\"example\"><span class=\"mini-label\">POSTUP VO VÝRAZE</span><p><span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">2</span></span> + <span class=\"frac\"><span class=\"frac-num\">2</span><span class=\"frac-den\">3</span></span> · <span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">4</span></span> = <span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">2</span></span> + <span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">2</span></span> = <strong>1</strong> &nbsp;(najprv násobenie)</p><p>Poradie: <strong>zátvorky → násobenie a delenie → sčítanie a odčítanie</strong>.</p></div><div class=\"warning\"><strong>Pozor:</strong> 1 <span class=\"frac\"><span class=\"frac-num\">2</span><span class=\"frac-den\">5</span></span> nie je 1 · <span class=\"frac\"><span class=\"frac-num\">2</span><span class=\"frac-den\">5</span></span>. Zmiešané číslo je súčet 1 + <span class=\"frac\"><span class=\"frac-num\">2</span><span class=\"frac-den\">5</span></span>.</div>",
        "remember": "Zmiešané číslo najprv zmeň na nepravý zlomok. Poradie operácií platí aj so zlomkami."
      },
      {
        "id": "c-basic",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "základný tvar",
        "question": "Ktorý z týchto zápisov je zlomok 24/36 v základnom tvare (nedá sa už viac krátiť)?",
        "options": [
          "12/18",
          "2/3",
          "3/2",
          "4/6"
        ],
        "answer": 1,
        "correct": "Čitateľ aj menovateľ vydelíme NSD(24, 36) = 12 a dostaneme zlomok, ktorý už nemá spoločného deliteľa.",
        "hint": "Vydeľ čitateľa aj menovateľa ich najväčším spoločným deliteľom. Pozor, 3/2 má inú hodnotu."
      },
      {
        "id": "matrix-ok",
        "type": "matrix",
        "phase": "NÁJDI CHYBU",
        "skill": "správny a nesprávny postup",
        "title": "Je to správne?",
        "labels": ["Správne", "Nesprávne"],
        "items": [
          { "text": "3/12 = 1/4", "answer": "Správne" },
          { "text": "(2 + 3)/(7 + 3) = 2/7", "answer": "Nesprávne" },
          { "text": "1/3 + 2/5 = 3/8", "answer": "Nesprávne" },
          { "text": "2/3 · 9/10 = 3/5", "answer": "Správne" },
          { "text": "3/4 : 2/5 = 6/20", "answer": "Nesprávne" },
          { "text": "2/5 = 6/15", "answer": "Správne" }
        ]
      },
      {
        "id": "n-nsn",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "spoločný menovateľ",
        "title": "Najmenší spoločný menovateľ",
        "prompt": "Zlomky 3/8 a 5/12 chceš sčítať. Aký je najmenší spoločný menovateľ (NSN menovateľov 8 a 12)?",
        "validate": "exact",
        "answer": 24,
        "success": "NSN(8, 12) = 24, lebo 8 = 2 · 2 · 2 a 12 = 2 · 2 · 3. Potom 3/8 = 9/24 a 5/12 = 10/24.",
        "hint": "Nájdi najmenšie číslo, ktoré je násobkom 8 aj 12. Pomôže prvočíselný rozklad.",
        "reveal": "Správne je 24: násobky 12 sú 12, 24, ..., a 24 je prvé, ktoré je deliteľné aj 8."
      },
      {
        "id": "c-sum",
        "type": "choice",
        "phase": "PRECVIČ",
        "skill": "sčítanie zlomkov",
        "question": "Koľko je 5/12 + 7/18? (NSN menovateľov 12 a 18 je 36.)",
        "options": [
          "2/5",
          "35/36",
          "29/36",
          "1/3"
        ],
        "answer": 2,
        "correct": "5/12 = 15/36 a 7/18 = 14/36, preto 15/36 + 14/36 = 29/36.",
        "hint": "Rozšír oba zlomky na menovateľ 36 a sčítaj len čitateľov. Výsledok má byť väčší ako 1/2."
      },
      {
        "id": "n-mixed",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "zmiešané čísla",
        "title": "Zmiešané číslo ako zlomok",
        "prompt": "Zmiešané číslo 4 1/3 zapíš ako nepravý zlomok s menovateľom 3. Aký je jeho čitateľ?",
        "validate": "exact",
        "answer": 13,
        "success": "4 1/3 = (4 · 3 + 1)/3 = 13/3.",
        "hint": "Celú časť vynásob menovateľom a pripočítaj čitateľa.",
        "reveal": "Správne je 13: 4 · 3 + 1 = 13, teda 4 1/3 = 13/3."
      },
      {
        "id": "n-expr",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "poradie operácií so zlomkami",
        "title": "Výraz so zlomkami",
        "prompt": "Vypočítaj: (3/4 − 1/4) · 8 + 1/2 : 1/4",
        "validate": "exact",
        "answer": 6,
        "success": "Zátvorka: 3/4 − 1/4 = 1/2, potom 1/2 · 8 = 4 a 1/2 : 1/4 = 1/2 · 4 = 2, spolu 4 + 2 = 6.",
        "hint": "Najprv zátvorka, potom násobenie a delenie zľava doprava, nakoniec sčítanie. Delíš zlomkom, obráť ho.",
        "reveal": "Správne je 6: (1/2) · 8 = 4, 1/2 : 1/4 = 2, 4 + 2 = 6."
      },
      {
        "id": "hunt-div",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak počíta 2/3 : 4/9 a dostal 8/27, pretože vynásobil čitateľov (2 · 4 = 8) a menovateľov (3 · 9 = 27). V čom je chyba?",
        "options": [
          "Pri delení treba deliteľa 4/9 obrátiť a až potom násobiť: 2/3 · 9/4.",
          "Pri delení sa zlomky musia najprv upraviť na spoločný menovateľ.",
          "Chyba je v tom, že 2 · 4 sa nerovná 8."
        ],
        "answer": 0,
        "correct": "Správne. Delenie zlomkom je násobenie jeho prevráteným zlomkom. Žiak vlastne počítal 2/3 · 4/9.",
        "hint": "Je podiel 2/3 : 4/9 väčší alebo menší ako 1? Porovnaj to s 8/27."
      },
      {
        "id": "sort-basic",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "základný tvar",
        "title": "Je zlomok v základnom tvare?",
        "question": "Rozhodni pre každý zlomok, či je v základnom tvare, alebo sa dá ešte krátiť.",
        "labels": [
          "Je v základnom tvare",
          "Dá sa ešte krátiť"
        ],
        "items": [
          { "text": "7/9", "answer": true, "why": "7 a 9 nemajú spoločného deliteľa väčšieho ako 1." },
          { "text": "6/15", "answer": false, "why": "Čitateľ aj menovateľ sú deliteľné 3: 6/15 = 2/5." },
          { "text": "11/12", "answer": true, "why": "11 je prvočíslo, ktoré nedelí 12." },
          { "text": "14/21", "answer": false, "why": "Čitateľ aj menovateľ sú deliteľné 7: 14/21 = 2/3." },
          { "text": "20/45", "answer": false, "why": "Čitateľ aj menovateľ sú deliteľné 5: 20/45 = 4/9." },
          { "text": "8/9", "answer": true, "why": "8 = 2 · 2 · 2 a 9 = 3 · 3 nemajú spoločný prvočinitel." }
        ]
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha na papier",
        "html": "<p>Odlož zariadenie. Vypočítaj postupne, každý krok zapíš pod seba a výsledok napíš v základnom tvare:</p><ol><li>5/6 − 3/8 + 1/4</li><li>(2/3 + 1/2) : 5/6</li><li>2 1/3 · 3/7 − 1/2</li></ol>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: počítanie so zlomkami",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Riešenia píš do zošita. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Kráť na základný tvar: a) 18/30 b) 42/56 c) 28/63",
            "answer": "a) 18 : 6 = 3 a 30 : 6 = 5, teda 3/5<br>b) 42 : 14 = 3 a 56 : 14 = 4, teda 3/4<br>c) 28 : 7 = 4 a 63 : 7 = 9, teda 4/9"
          },
          {
            "level": "zaklad",
            "text": "Doplň chýbajúce číslo: a) 3/5 = □/20 b) 7/9 = 28/□",
            "answer": "a) 20 : 5 = 4, čitateľ 3 · 4 = 12<br>b) 28 : 7 = 4, menovateľ 9 · 4 = 36"
          },
          {
            "level": "zaklad",
            "text": "Vypočítaj: a) 1/6 + 3/4 b) 7/10 − 2/15 c) 5/6 + 1/9",
            "answer": "a) 2/12 + 9/12 = 11/12<br>b) 21/30 − 4/30 = 17/30<br>c) 15/18 + 2/18 = 17/18"
          },
          {
            "level": "zaklad",
            "text": "Vypočítaj: a) 4/9 · 3/10 b) 8/15 : 4/5 c) 6 · 5/8",
            "answer": "a) 12/90 = 2/15<br>b) 8/15 · 5/4 = 40/60 = 2/3<br>c) 30/8 = 15/4"
          },
          {
            "level": "rozsirenie",
            "text": "Vypočítaj so zmiešanými číslami: a) 2 1/3 + 1 3/4 b) 3 1/2 · 2/7 c) 5 1/4 : 1 1/2",
            "answer": "a) 7/3 + 7/4 = 28/12 + 21/12 = 49/12 (= 4 1/12)<br>b) 7/2 · 2/7 = 1<br>c) 21/4 : 3/2 = 21/4 · 2/3 = 7/2 (= 3 1/2)"
          },
          {
            "level": "rozsirenie",
            "text": "Prevody: a) zapíš 3/8 ako desatinné číslo b) zapíš 0,35 ako zlomok v základnom tvare c) vypočítaj 1/3 + 0,5",
            "answer": "a) 3 : 8 = 0,375<br>b) 35/100 = 7/20<br>c) 1/3 + 1/2 = 2/6 + 3/6 = 5/6"
          },
          {
            "level": "rozsirenie",
            "text": "Slovná úloha: Adam zjedol 3/8 pizze a Bea 1/4 pizze. Akú časť pizze zjedli spolu a akú časť zostalo?",
            "answer": "3/8 + 2/8 = 5/8 zjedli spolu<br>Zostalo 1 − 5/8 = 3/8 pizze."
          },
          {
            "level": "bonus",
            "text": "Zložené zlomky: a) (3/4 − 1/2) : (1/2 + 1/8) b) 1 : (1 + 1 : (1 + 1/2))",
            "answer": "a) 1/4 : 5/8 = 1/4 · 8/5 = 2/5<br>b) 1 + 1/2 = 3/2, 1 : 3/2 = 2/3, 1 + 2/3 = 5/3, 1 : 5/3 = 3/5"
          }
        ]
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "rozšírenie, krátenie a základný tvar",
          "sčítanie a odčítanie zlomkov (spoločný menovateľ)",
          "násobenie a delenie zlomkov",
          "zmiešané čísla a poradie operácií"
        ],
        "prompt": "Označ, ako dobre to zvládaš. Nie je to známka; porovnaj svoj pocit s výsledkom úloh. Čo máš 🔴 alebo 🟡, si ešte raz prejdi."
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w3",
        "level": "zaklad",
        "space": 5,
        "text": "Vypočítaj: a) 1/2 + 1/3 b) 7/8 − 1/4 c) 3/5 · 10/9 d) 2/3 : 4/9",
        "answer": "a) 5/6<br>b) 7/8 − 2/8 = 5/8<br>c) 30/45 = 2/3<br>d) 2/3 · 9/4 = 18/12 = 3/2"
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
