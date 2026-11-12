MathPlatform.registerModule({
  "id": "1-u03-h034",
  "teacher": {
    "placement": "1. ročník · Čísla, premenné, výrazy · 34. hodina: Úlohy z praxe na percentá",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "všetko učivo prebrané v predchádzajúcich hodinách a ročníkoch, ktoré je pre úlohu potrebné"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza tému „Úlohy z praxe na percentá“. Obsah modulu rešpektuje jej miesto a rozsah v pláne."
    ],
    "planPerformance": [
      "Plán uvádza: riešiť úlohy finančnej matematiky; používať kritériá deliteľnosti; určiť NSN a NSD pomocou prvočíselného rozkladu. Ďalšie ciele modulu vychádzajú z uvedeného obsahu celku."
    ],
    "goals": [
      "vypočítať cenu po zľave a po zdražení jedným násobením koeficientom",
      "nájsť pôvodnú cenu delením koeficientom",
      "počítať s DPH a s ročným úrokom",
      "rozlíšiť opakovanú zmenu ceny a percentuálne body od percent"
    ],
    "competencies": [
      "matematická komunikácia",
      "modelovanie a reprezentácie",
      "argumentácia a kontrola výsledku",
      "prehľadný ručný zápis"
    ],
    "enrichment": [
      "Úlohy s DPH a úrokom sú príprava na finančnú matematiku z plánu; zložené úročenie sa zatiaľ počíta iba ako dvojité násobenie koeficientom.",
      "Návrh maturitného štandardu je použitý iba ako obohatenie spôsobu práce: interpretácia, modelovanie, reprezentácie a zdôvodnenie."
    ],
    "flow": [
      "2–3 min: situácia: obchod hlási „zľava 20 %, potom ďalších 10 %, spolu 30 %“ – je to pravda?",
      "cca 20 min: aplikácia: koeficient, pôvodná cena, DPH, úrok, opakovaná zmena, percentuálne body",
      "8–10 min: papierová úloha so zľavou a zdražením a zbierka",
      "3–5 min: spoločná kontrola, najčastejšie chyby: zlý základ pri hľadaní pôvodnej ceny, sčítanie percent pri dvoch zmenách"
    ],
    "diagnostics": [
      "žiak vie priradiť k zľave a zdraženiu správny koeficient",
      "žiak nehľadá pôvodnú cenu pripočítaním percent z nižšej ceny",
      "žiak rozlíši opakovanú zmenu od súčtu percent",
      "žiak rozlíši percentuálne body od percentuálnej zmeny"
    ],
    "partialUse": [
      "Na krátku hodinu stačí koeficient a pôvodná cena, DPH a úrok možno presunúť na ďalšiu hodinu.",
      "Zbierku a worksheet.tasks možno zadať ako domácu úlohu; mobil nenahrádza ručné počítanie."
    ]
  },
  "student": {
    "title": "Úlohy z praxe na percentá",
    "subtitle": "Téma 34 · Čísla, premenné, výrazy",
    "intro": "Zľavy, DPH, úroky: všetko sú to percentá z určitého základu. Najprv nájdi základ, potom použi koeficient.",
    "estimatedTime": "25–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Z minulej hodiny vieš, že p % = <span class=\"frac\"><span class=\"frac-num\">p</span><span class=\"frac-den\">100</span></span> a že základ je vždy 100 %. Napríklad 20 % zo 60 je 0,2 · 60 = 12 a číslo 15 je 25 % z 60, lebo 15 : 60 = 0,25.</p><p>Dnes tie isté nástroje použiješ na ceny v obchode, dane a úroky v banke.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "vypočítať cenu po zľave a po zdražení jedným násobením",
          "nájsť pôvodnú cenu, keď poznáme cenu po zmene",
          "počítať s DPH a s ročným úrokom",
          "rozlíšiť „o 20 % viac“ od „o 20 percentuálnych bodov“ a zvládnuť opakovanú zmenu ceny"
        ]
      },
      {
        "id": "coef",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Zmena ceny jedným násobením",
        "html": "<p>Pôvodná cena je základ, teda 100 %. Keď tovar zľavnia o 20 %, platíme 100 % − 20 % = <span class=\"hl\">80 %</span> pôvodnej ceny. Keď zdražie o 15 %, platíme 100 % + 15 % = <span class=\"hl\">115 %</span>.</p><div class=\"formula\">zľava p %: cena · (1 − p/100)<br>zdraženie o p %: cena · (1 + p/100)<span class=\"formula-note\">Číslo, ktorým cenu násobíme, voláme koeficient (napr. 0,8 alebo 1,15).</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Bunda stála 80 €. Zľava je 25 %.</p><p>100 % − 25 % = 75 % = 0,75</p><p>0,75 · 80 = <strong>60 €</strong></p><p>Zľava je 80 − 60 = 20 € (to je 25 % z 80).</p></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Mobil stál 250 €. Zdražel o 8 %.</p><p>100 % + 8 % = 108 % = 1,08</p><p>1,08 · 250 = <strong>270 €</strong></p></div>",
        "remember": "Zľava o p % znamená násobiť číslom 1 − p/100. Zdraženie o p % znamená násobiť číslom 1 + p/100."
      },
      {
        "id": "inverse",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Pôvodná cena: základ nie je to, čo vidíš",
        "html": "<p>Častá úloha je opačná: poznáme cenu po zmene a hľadáme pôvodnú cenu. Pôvodná cena je základ (100 %) a nová cena je jeho časť. Základ nájdeme delením koeficientom.</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Po zľave 20 % stoja topánky 48 €. Aká bola pôvodná cena?</p><p>Nová cena je 80 % pôvodnej: 0,8 · Z = 48</p><p>Aké číslo vynásobené 0,8 dá 48? Delíme: 48 : 0,8 = <strong>60 €</strong></p><p>Kontrola: 0,8 · 60 = 48 ✓</p></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Po zdražení o 12 % stojí kniha 56 €. Aká bola pôvodná cena?</p><p>1,12 · Z = 56</p><p>56 : 1,12 = <strong>50 €</strong></p><p>Kontrola: 1,12 · 50 = 56 ✓</p></div><div class=\"warning\"><strong>Pozor:</strong> Pôvodnú cenu nezískaš tak, že k 48 € pripočítaš 20 % zo 48. Tých 20 % je z pôvodnej ceny (základu), nie z ceny po zľave. Vždy delíme koeficientom.</div>"
      },
      {
        "id": "dph",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "DPH a úrok – finančná matematika",
        "html": "<p><span class=\"hl\">DPH</span> je daň z pridanej hodnoty. Ak je sadzba 20 %, k cene bez DPH sa pripočíta 20 %, teda cena s DPH je 1,2-násobok ceny bez DPH.</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Cena bez DPH je 150 €, DPH je 20 %.</p><p>150 · 1,2 = <strong>180 €</strong> s DPH (z toho 30 € je daň).</p></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Cena s DPH je 240 €, DPH je 20 %. Aká je cena bez DPH?</p><p>Z · 1,2 = 240 → 240 : 1,2 = <strong>200 €</strong></p></div><p><span class=\"hl\">Úrok</span> je odmena banky za požičané peniaze (vklad). Pri ročnom úroku p % pripíše banka za rok p % z vkladu. Vklad je základ.</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Vklad 2 000 € s úrokom 2,5 % ročne.</p><p>Úrok za rok: 0,025 · 2 000 = <strong>50 €</strong></p><p>Stav po roku: 2 000 + 50 = 2 050 € (alebo 1,025 · 2 000).</p></div><p>Ak sa úrok pripisuje každý rok a peniaze zostanú na účte, v druhom roku sa počíta z už vyššieho stavu: stav po dvoch rokoch = vklad · 1,025 · 1,025.</p>"
      },
      {
        "id": "repeat",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Opakovaná zmena ceny a percentuálne body",
        "html": "<p>Pri dvoch zmenách po sebe je základ druhej zmeny už <span class=\"hl\">nová</span> cena. Preto sa percentá nesčítavajú, ale koeficienty sa násobia.</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Cena 200 €. Najprv zľava 20 %, potom ďalšia zľava 10 %.</p><p>0,8 · 200 = 160 €</p><p>0,9 · 160 = <strong>144 €</strong></p><p>Spolu: 0,8 · 0,9 = 0,72, platíme 72 %, teda zľava je 28 %, nie 30 %.</p></div><div class=\"compare\"><div class=\"bad\"><span class=\"mini-label\">ČASTÁ CHYBA</span><p>Zdraženie o 20 % a zlacnenie o 20 % sa vyruší.</p></div><div class=\"good\"><span class=\"mini-label\">SPRÁVNE</span><p>1,2 · 0,8 = 0,96. Výsledok je 96 % pôvodnej ceny, teda o 4 % menej.</p></div></div><p>Ďalšia pasca: slovo <span class=\"hl\">percentuálny bod</span> (p. b.). Ak úrok vzrástol zo 4 % na 6 %, vzrástol o 2 percentuálne body. Relatívne však vzrástol o 6 : 4 = 1,5, teda o 50 %.</p><div class=\"warning\"><strong>Pozor:</strong> „O 2 percentuálne body“ je rozdiel dvoch percent. „O 50 %“ je zmena v porovnaní s pôvodnou hodnotou. Nie sú to to isté.</div>"
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "koeficient",
        "question": "Tričko za 40 € zlacnelo o 30 %. Koľko stojí po zľave?",
        "options": [
          "12 €",
          "52 €",
          "28 €",
          "37 €"
        ],
        "answer": 2,
        "correct": "100 % − 30 % = 70 %, 0,7 · 40 = 28 €. Zľava 12 € je 30 % zo 40.",
        "hint": "Po zľave platíš 70 % pôvodnej ceny."
      },
      {
        "id": "n1",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "koeficient",
        "title": "Zdraženie",
        "prompt": "Mobil stál 250 €. Zdražel o 8 %. Koľko € stojí teraz? Zapíš iba číslo.",
        "validate": "exact",
        "answer": 270,
        "success": "250 · 1,08 = 270.",
        "hint": "Nová cena je 108 % pôvodnej, teda násobíme 1,08.",
        "reveal": "8 % z 250 je 20, teda 250 + 20 = 270."
      },
      {
        "id": "c2",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "koeficient",
        "question": "Ktorým číslom treba vynásobiť cenu, aby sa zvýšila o 15 %?",
        "options": [
          "0,15",
          "1,15",
          "0,85",
          "15"
        ],
        "answer": 1,
        "correct": "Nová cena je 115 % pôvodnej, teda 1,15.",
        "hint": "Cena po zvýšení je 100 % + 15 % pôvodnej ceny."
      },
      {
        "id": "m1",
        "type": "matrix",
        "phase": "PRECVIČ",
        "skill": "koeficient",
        "title": "Zmena ceny → násobiteľ",
        "labels": [
          "0,6",
          "0,75",
          "0,9",
          "1,1",
          "1,25"
        ],
        "items": [
          {
            "text": "zľava 10 %",
            "answer": "0,9"
          },
          {
            "text": "zľava 25 %",
            "answer": "0,75"
          },
          {
            "text": "zdraženie o 10 %",
            "answer": "1,1"
          },
          {
            "text": "zdraženie o 25 %",
            "answer": "1,25"
          },
          {
            "text": "zľava 40 %",
            "answer": "0,6"
          }
        ]
      },
      {
        "id": "n2",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "pôvodná cena",
        "title": "Pôvodná cena po zľave",
        "prompt": "Po zľave 20 % stoja topánky 48 €. Aká bola pôvodná cena v €?",
        "validate": "exact",
        "answer": 60,
        "success": "48 : 0,8 = 60. Kontrola: 0,8 · 60 = 48.",
        "hint": "Nová cena je 80 % pôvodnej: aké číslo vynásobené 0,8 dá 48?",
        "reveal": "Trojčlenka: 80 % … 48, 1 % … 0,6, 100 % … 60."
      },
      {
        "id": "n3",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "pôvodná cena",
        "title": "Pôvodná cena po zdražení",
        "prompt": "Po zdražení o 12 % stojí kniha 56 €. Aká bola pôvodná cena v €?",
        "validate": "exact",
        "answer": 50,
        "success": "56 : 1,12 = 50. Kontrola: 1,12 · 50 = 56.",
        "hint": "Nová cena je 112 % pôvodnej: aké číslo vynásobené 1,12 dá 56?",
        "reveal": "Trojčlenka: 112 % … 56, 1 % … 0,5, 100 % … 50."
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "PRENES",
        "skill": "DPH",
        "question": "Cena tovaru bez DPH je 150 €, DPH je 20 %. Aká je cena s DPH?",
        "options": [
          "170 €",
          "180 €",
          "30 €",
          "120 €"
        ],
        "answer": 1,
        "correct": "Cena s DPH je 120 % ceny bez DPH: 1,2 · 150 = 180 €.",
        "hint": "DPH sa pripočítava k cene bez DPH. Základ je cena bez DPH."
      },
      {
        "id": "n4",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "DPH",
        "title": "DPH odzadu",
        "prompt": "Cena s DPH 20 % je 240 €. Aká je cena bez DPH v €?",
        "validate": "exact",
        "answer": 200,
        "success": "240 : 1,2 = 200. Kontrola: 1,2 · 200 = 240.",
        "hint": "Cena s DPH je 120 % ceny bez DPH. Aké číslo vynásobené 1,2 dá 240?",
        "reveal": "Trojčlenka: 120 % … 240, 1 % … 2, 100 % … 200."
      },
      {
        "id": "n5",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "úrok",
        "title": "Úrok za rok",
        "prompt": "Na účet vložíš 2 000 € s úrokom 2,5 % ročne. Koľko € úroku dostaneš za jeden rok?",
        "validate": "exact",
        "answer": 50,
        "success": "0,025 · 2 000 = 50 €.",
        "hint": "Vklad je základ. 2,5 % = 0,025.",
        "reveal": "1 % z 2 000 je 20 €, 2,5 % je 2,5 · 20 = 50."
      },
      {
        "id": "c4",
        "type": "choice",
        "phase": "PRENES",
        "skill": "opakovaná zmena",
        "question": "Cena 200 €. Najprv zľava 20 %, potom ďalšia zľava 10 % z novej ceny. Aká je konečná cena?",
        "options": [
          "140 €",
          "144 €",
          "160 €",
          "180 €"
        ],
        "answer": 1,
        "correct": "0,8 · 200 = 160 € a 0,9 · 160 = 144 €.",
        "hint": "Druhá zľava sa počíta z ceny po prvej zľave, nie z pôvodnej."
      },
      {
        "id": "s1",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "porozumenie",
        "title": "Pravda alebo nepravda?",
        "question": "Rozhodni, či je tvrdenie o zmene ceny pravdivé.",
        "labels": [
          "Pravda",
          "Nepravda"
        ],
        "items": [
          {
            "text": "Zľava 10 % a potom ďalšia zľava 10 % je spolu zľava 20 %.",
            "answer": false,
            "why": "0,9 · 0,9 = 0,81, teda platíme 81 %, zľava je 19 %."
          },
          {
            "text": "Zdraženie o 100 % znamená dvojnásobok ceny.",
            "answer": true,
            "why": "100 % + 100 % = 200 % pôvodnej ceny."
          },
          {
            "text": "Ak sa cena zvýši o 25 %, nová cena je 125 % pôvodnej.",
            "answer": true,
            "why": "Pôvodná cena je 100 % a pripočítame 25 %."
          },
          {
            "text": "Zdraženie o 50 % a následné zlacnenie o 50 % vráti pôvodnú cenu.",
            "answer": false,
            "why": "1,5 · 0,5 = 0,75, výsledok je 75 % pôvodnej ceny."
          },
          {
            "text": "Zľava 100 % znamená, že tovar je zadarmo.",
            "answer": true,
            "why": "100 % − 100 % = 0 % pôvodnej ceny."
          },
          {
            "text": "Zdraženie o 20 % a potom zlacnenie o 20 % dá 96 % pôvodnej ceny.",
            "answer": true,
            "why": "1,2 · 0,8 = 0,96."
          }
        ]
      },
      {
        "id": "c5",
        "type": "choice",
        "phase": "PRENES",
        "skill": "percentuálne body",
        "question": "Úrok na účte vzrástol zo 4 % na 6 %. O koľko percentuálnych bodov vzrástol?",
        "options": [
          "o 6 percentuálnych bodov",
          "o 50 percentuálnych bodov",
          "o 2 percentuálne body",
          "o 10 percentuálnych bodov"
        ],
        "answer": 2,
        "correct": "6 % − 4 % = 2 percentuálne body. (Relatívne vzrástol o 50 %, ale to nie je rozdiel v percentuálnych bodoch.)",
        "hint": "Percentuálne body sú rozdiel dvoch percent: odčítaj ich."
      },
      {
        "id": "n6",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "percentuálne body",
        "title": "O koľko percent relatívne",
        "prompt": "Úrok vzrástol zo 4 % na 6 %. O koľko percent z pôvodnej hodnoty 4 % vzrástol? Zapíš iba číslo.",
        "validate": "exact",
        "answer": 50,
        "success": "6 : 4 = 1,5, teda 150 % pôvodnej hodnoty, a to je o 50 % viac.",
        "hint": "Zmena je 2 percentuálne body. Koľko percent zo 4 je 2?",
        "reveal": "Rozdiel je 6 − 4 = 2. Základ je pôvodná hodnota 4, 2 : 4 = 0,5 = 50 %."
      },
      {
        "id": "e1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "kritické myslenie",
        "question": "Tomáš: Tričko za 50 € zdražie o 20 % a potom zlacnie o 20 %, takže zase stojí 50 €. Čo je na tom zle?",
        "options": [
          "Nič, percentá sa navzájom vyrušia.",
          "Zdraženie malo byť o 25 %.",
          "Zlacnenie o 20 % sa počíta zo 60 €, nie z 50 €, preto výsledok je 48 €.",
          "Tričko po zdražení stojí 70 €."
        ],
        "answer": 2,
        "correct": "Áno. Po zdražení stojí 60 €. 20 % zo 60 € je 12 € a nová cena je 48 €.",
        "hint": "Z ktorej ceny sa počíta druhá zmena?"
      },
      {
        "id": "e2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "kritické myslenie",
        "question": "Eva: Po zľave 20 % stoja topánky 80 €. Pôvodná cena je 80 € + 20 % z 80 € = 96 €. Aká je pôvodná cena správne?",
        "options": [
          "100 €",
          "96 €",
          "104 €",
          "64 €"
        ],
        "answer": 0,
        "correct": "80 € je 80 % pôvodnej ceny, teda 80 : 0,8 = 100 €. Evin základ bol zlý: 20 % je z pôvodnej ceny, nie z ceny po zľave.",
        "hint": "Aké číslo vynásobené 0,8 dá 80?"
      },
      {
        "id": "self1",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Prečo sa percentá nevyrušia",
        "prompt": "Vysvetli vlastnými slovami, prečo po zdražení o 20 % a zlacnení o 20 % nie je cena rovnaká ako na začiatku.",
        "model": "Druhá zmena sa počíta z novej ceny, ktorá je iná ako pôvodná. Po zdražení je základ väčší, preto 20 % z neho je viac ako 20 % z pôvodnej ceny a cena klesne pod pôvodnú."
      },
      {
        "id": "manual",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Ceruzka má posledné slovo",
        "html": "<p><span class=\"mini-label\">ÚLOHA</span><br>Rádio stálo 120 €. Najprv zlacnelo o 15 %, potom zdražilo o 10 %. a) Aká je cena po každej zmene? b) Koľko percent pôvodnej ceny je výsledná cena? c) O koľko percent je teda rádio celkovo drahšie alebo lacnejšie ako na začiatku?</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: percentá v praxi",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Riešenia píš do zošita. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Bicykel stál 350 €. Zľava je 20 %. Aká je nová cena a koľko eur ušetríme?",
            "answer": "0,8 · 350 = 280 €<br>ušetríme 350 − 280 = 70 €"
          },
          {
            "level": "zaklad",
            "text": "Kniha za 24 € zdraží o 5 %. Aká je nová cena?",
            "answer": "1,05 · 24 = 25,20 €"
          },
          {
            "level": "zaklad",
            "text": "Tovar bez DPH stojí 85 €. Aká je cena s DPH 20 %?",
            "answer": "1,2 · 85 = 102 €"
          },
          {
            "level": "rozsirenie",
            "text": "Po zľave 35 % platíme za kabát 130 €. Aká bola pôvodná cena?",
            "answer": "Po zľave platíme 65 %: 0,65 · Z = 130<br>Z = 130 : 0,65 = 200 €<br>Kontrola: 0,65 · 200 = 130"
          },
          {
            "level": "rozsirenie",
            "text": "Po zdražení o 8 % stojí lístok 54 €. Aká bola pôvodná cena?",
            "answer": "1,08 · Z = 54<br>Z = 54 : 1,08 = 50 €<br>Kontrola: 1,08 · 50 = 54"
          },
          {
            "level": "rozsirenie",
            "text": "Vklad 1 500 € je uložený na 4 % ročne. Koľko € úroku dostaneš za 1. rok a aký bude stav po 2. roku (úrok sa pripisuje, peniaze zostávajú na účte)?",
            "answer": "1. rok: 0,04 · 1 500 = 60 €, stav 1 560 €<br>2. rok: 1,04 · 1 560 = 1 622,40 €"
          },
          {
            "level": "bonus",
            "text": "Cena tovaru klesla o 30 % a potom ešte o ďalších 20 % z novej ceny. O koľko percent klesla pôvodná cena celkovo?",
            "answer": "0,7 · 0,8 = 0,56<br>platíme 56 %, teda zľava je 44 %"
          },
          {
            "level": "bonus",
            "text": "Cena tovaru stúpla o 25 %. O koľko percent musí potom klesnúť, aby sa vrátila na pôvodnú hodnotu?",
            "answer": "Po zdražení: 1,25 · Z. Chceme späť Z, preto koeficient: 1 : 1,25 = 0,8<br>musí klesnúť o 20 %"
          }
        ]
      },
      {
        "id": "self2",
        "type": "selfWrite",
        "phase": "ARGUMENTUJ",
        "skill": "argumentácia",
        "title": "Percentá a percentuálne body",
        "prompt": "Daň sa zvýšila z 20 % na 23 %. Vysvetli vlastnými slovami rozdiel medzi „o 3 percentuálne body“ a „o 3 %“.",
        "model": "Zo 20 % na 23 % je rozdiel 3 percentuálne body. O 3 % by to bolo vtedy, keby sa 20 % zvýšilo o 3 % zo 20, teda iba na 20,6 %. Relatívne sa daň zvýšila o 3 : 20 = 15 %."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "viem vypočítať cenu po zľave a zdražení",
          "viem nájsť pôvodnú cenu",
          "viem počítať s DPH a úrokom",
          "viem rozlíšiť percentá od percentuálnych bodov"
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
        "text": "Mikina stála 60 €. Zľava je 15 %. Koľko stojí po zľave?",
        "answer": "0,85 · 60 = 51 €"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 3,
        "text": "Cena tovaru bez DPH je 40 €. Aká je cena s DPH 20 %?",
        "answer": "1,2 · 40 = 48 €"
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 3,
        "text": "Po zdražení o 10 % stojí ceruzka 77 centov. Aká bola pôvodná cena?",
        "answer": "77 : 1,1 = 70 centov"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 5,
        "text": "Nájomné bolo 400 €. Najprv sa zvýšilo o 5 % a o rok neskôr o ďalších 10 %. Aké je teraz a o koľko percent je vyššie ako pôvodné?",
        "answer": "1,05 · 400 = 420 €<br>1,1 · 420 = 462 €<br>1,05 · 1,1 = 1,155, teda o 15,5 % viac"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 4,
        "text": "V akcii zlacnel mobil o 20 % a stojí 192 €. Aká bola pôvodná cena a koľko ušetríme?",
        "answer": "192 : 0,8 = 240 €<br>ušetríme 240 − 192 = 48 €"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 4,
        "text": "Nezamestnanosť v regióne vzrástla z 5 % na 8 %. O koľko percentuálnych bodov a o koľko percent z pôvodnej hodnoty vzrástla?",
        "answer": "8 − 5 = 3 percentuálne body<br>8 : 5 = 1,6, teda o 60 % viac"
      }
    ]
  }
});
