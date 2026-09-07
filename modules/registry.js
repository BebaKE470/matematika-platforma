/*
  Kompletný katalóg podľa aktuálnych tematických plánov 1.–3. ročníka.

  unitOrder   = poradie tematického celku v ročníku
  lessonOrder = číslo prvej hodiny uvedenej v tematickom pláne
  status      = 'ready' pri hotovom module, 'placeholder' pri technicky prepojenom TODO module
  file        = cieľová cesta, kam patrí obsahový .js súbor

  Zostávajúce témy majú vytvorený TODO placeholder na presnej ceste.
  Pri spracovaní témy sa nahradí obsah súboru a status sa zmení na 'ready'.
*/

(function () {
  function placeholder({ id, year, unit, unitOrder, topic, lesson, lessonOrder, file }) {
    return {
      id, year, unit, unitOrder, topic, lesson, lessonOrder,
      time: 'TODO', status: 'placeholder', type: 'TODO – zástupný modul', skills: [], file,
    };
  }

  window.MATH_MODULE_INDEX = [
  // ==================== 1. ROČNÍK ====================

  // 1.01 · Výroková formula
  {
    id: "1-u01-h001", year: 1, unit: 'Výroková formula', unitOrder: 1,
    topic: "Úvodné pokyny", lesson: "Hodina 1", lessonOrder: 1,
    time: "18–22 min", status: 'ready',
    type: "Orientácia → pravidlá práce → rozcvička zo ZŠ → reflexia",
    skills: ["pracovný a čistý zápis", "samostatnosť", "matematická komunikácia", "opakovanie zručností zo ZŠ"],
    file: 'modules/1-rocnik/vyrokova-formula/01-uvodne-pokyny.js'
  },
  {
    id: "1-logika-01", year: 1, unit: 'Výroková formula', unitOrder: 1,
    topic: "Výrok, axióma, definícia, hypotéza", lesson: "Hodina 2", lessonOrder: 2,
    time: "18–22 min", status: 'ready',
    type: "Objavovanie → vysvetlenie → vyjadrenie → diagnostika",
    skills: ["matematická komunikácia", "argumentácia", "kritické posudzovanie tvrdení"],
    file: 'modules/1-rocnik/vyrokova-formula/01-vyrok-axioma-definicia-hypoteza.js'
  },
  {
    id: "1-u01-h003", year: 1, unit: 'Výroková formula', unitOrder: 1,
    topic: "Jednoduchý výrok a jeho negácia", lesson: "Hodina 3", lessonOrder: 3,
    time: "16–20 min", status: 'ready',
    type: "Objavovanie → presná negácia → zošit → prenos",
    skills: ["výrok", "negácia", "presný matematický jazyk"],
    file: 'modules/1-rocnik/vyrokova-formula/03-jednoduchy-vyrok-a-jeho-negacia.js'
  },
  {
    id: "1-u01-h004", year: 1, unit: 'Výroková formula', unitOrder: 1,
    topic: "Zložené výroky, logické spojky, tabuľky", lesson: "Hodina 4.-5", lessonOrder: 4,
    time: "24–30 min", status: 'ready',
    type: "Spojky → pravdivosť → tabuľka → diagnostika",
    skills: ["konjunkcia", "disjunkcia", "implikácia", "ekvivalencia", "pravdivostná tabuľka"],
    file: 'modules/1-rocnik/vyrokova-formula/04-zlozene-vyroky-logicke-spojky-tabulky.js'
  },
  {
    id: "1-u01-h006", year: 1, unit: 'Výroková formula', unitOrder: 1,
    topic: "Negácia zložených výrokov", lesson: "Hodina 6.-7", lessonOrder: 6,
    time: "24–30 min", status: 'ready',
    type: "Situácia → De Morgan → negácia implikácie → argumentácia",
    skills: ["De Morganove pravidlá", "negácia implikácie", "argumentácia"],
    file: 'modules/1-rocnik/vyrokova-formula/06-negacia-zlozenych-vyrokov.js'
  },
  {
    id: "1-u01-h008", year: 1, unit: 'Výroková formula', unitOrder: 1,
    topic: "Tautológie", lesson: "Hodina 8", lessonOrder: 8,
    time: "16–20 min", status: 'ready',
    type: "Tabuľka → klasifikácia → zdôvodnenie",
    skills: ["tautológia", "kontradikcia", "kontingencia"],
    file: 'modules/1-rocnik/vyrokova-formula/08-tautologie.js'
  },
  {
    id: "1-u01-h009", year: 1, unit: 'Výroková formula', unitOrder: 1,
    topic: "Obmena, obrátenie, negácia implikácie", lesson: "Hodina 9", lessonOrder: 9,
    time: "18–22 min", status: 'ready',
    type: "Vizuál → prepis → protipríklad → argumentácia",
    skills: ["implikácia", "obmena", "obrátená implikácia", "negácia"],
    file: 'modules/1-rocnik/vyrokova-formula/09-obmena-obratenie-negacia-implikacie.js'
  },
  {
    id: "1-u01-h010", year: 1, unit: 'Výroková formula', unitOrder: 1,
    topic: "Všeobecný a existenčný kvantifikátor", lesson: "Hodina 10", lessonOrder: 10,
    time: "16–20 min", status: 'ready',
    type: "Význam → symbolika → preklad → zošit",
    skills: ["kvantifikátory", "symbolický zápis", "matematická komunikácia"],
    file: 'modules/1-rocnik/vyrokova-formula/10-vseobecny-a-existencny-kvantifikator.js'
  },
  {
    id: "1-u01-h011", year: 1, unit: 'Výroková formula', unitOrder: 1,
    topic: "Negácia kvantifikovaných výrokov", lesson: "Hodina 11", lessonOrder: 11,
    time: "16–20 min", status: 'ready',
    type: "Negácia → protipríklad → presný jazyk",
    skills: ["negácia kvantifikátorov", "protipríklad", "argumentácia"],
    file: 'modules/1-rocnik/vyrokova-formula/11-negacia-kvantifikovanych-vyrokov.js'
  },
  {
    id: "1-u01-h012", year: 1, unit: 'Výroková formula', unitOrder: 1,
    topic: "Priamy a nepriamy dôkaz,dôkaz sporom", lesson: "Hodina 12", lessonOrder: 12,
    time: "20–24 min", status: 'ready',
    type: "Schéma → príklad → kritika argumentu → zošit",
    skills: ["priamy dôkaz", "nepriamy dôkaz", "dôkaz sporom", "protipríklad"],
    file: 'modules/1-rocnik/vyrokova-formula/12-priamy-a-nepriamy-dokaz-dokaz-sporom.js'
  },
  {
    id: "1-u01-h013", year: 1, unit: 'Výroková formula', unitOrder: 1,
    topic: "Precvičovanie", lesson: "Hodina 13", lessonOrder: 13,
    time: "20–25 min", status: 'ready',
    type: "Retrieval → zmiešané úlohy → argumentácia",
    skills: ["logické spojky", "negácia", "kvantifikátory", "argumentácia"],
    file: 'modules/1-rocnik/vyrokova-formula/13-precvicovanie.js'
  },
  {
    id: "1-u01-h014", year: 1, unit: 'Výroková formula', unitOrder: 1,
    topic: "Opakovanie", lesson: "Hodina 14", lessonOrder: 14,
    time: "18–22 min", status: 'ready',
    type: "Mapa → diagnostika → čistý súhrn → reflexia",
    skills: ["súhrn učiva", "diagnostika", "samoregulácia"],
    file: 'modules/1-rocnik/vyrokova-formula/14-opakovanie.js'
  },
  {
    id: "1-u01-h015", year: 1, unit: 'Výroková formula', unitOrder: 1,
    topic: "Kontrolná písomná práca", lesson: "Hodina 15", lessonOrder: 15,
    time: "4–6 min digitálne + písomka", status: 'ready',
    type: "Krátke naladenie → zariadenie odložiť → písomná práca",
    skills: ["samostatnosť", "ručný zápis", "sebareflexia"],
    file: 'modules/1-rocnik/vyrokova-formula/15-kontrolna-pisomna-praca.js'
  },

  // 1.02 · Množiny
  {
    "id": "1-u02-h016",
    "year": 1,
    "unit": "Množiny",
    "unitOrder": 2,
    "topic": "Úvod do množín, prvky, zápis množín",
    "lesson": "Hodina 16",
    "lessonOrder": 16,
    "time": "16–22 min",
    "status": "ready",
    "type": "Objavovanie → reprezentácia → zošit → argumentácia",
    "skills": [
      "množina",
      "prvok",
      "zápis množiny"
    ],
    "file": "modules/1-rocnik/mnoziny/16-uvod-do-mnozin-prvky-zapis-mnozin.js"
  },
  {
    "id": "1-u02-h017",
    "year": 1,
    "unit": "Množiny",
    "unitOrder": 2,
    "topic": "Prvky, podmnožiny, prázdna množina, množina všetkých prvkov",
    "lesson": "Hodina 17",
    "lessonOrder": 17,
    "time": "16–22 min",
    "status": "ready",
    "type": "Objavovanie → reprezentácia → zošit → argumentácia",
    "skills": [
      "prvok",
      "podmnožina",
      "prázdna množina"
    ],
    "file": "modules/1-rocnik/mnoziny/17-prvky-podmnoziny-prazdna-mnozina-mnozina-vsetkych-prvkov.js"
  },
  {
    "id": "1-u02-h018",
    "year": 1,
    "unit": "Množiny",
    "unitOrder": 2,
    "topic": "Množina daná charakteristickou vlastnosťou",
    "lesson": "Hodina 18",
    "lessonOrder": 18,
    "time": "16–22 min",
    "status": "ready",
    "type": "Objavovanie → reprezentácia → zošit → argumentácia",
    "skills": [
      "charakteristická vlastnosť",
      "symbolický zápis",
      "matematická komunikácia"
    ],
    "file": "modules/1-rocnik/mnoziny/18-mnozina-dana-charakteristickou-vlastnostou.js"
  },
  {
    "id": "1-u02-h019",
    "year": 1,
    "unit": "Množiny",
    "unitOrder": 2,
    "topic": "Kardinalita množiny",
    "lesson": "Hodina 19",
    "lessonOrder": 19,
    "time": "16–22 min",
    "status": "ready",
    "type": "Objavovanie → reprezentácia → zošit → argumentácia",
    "skills": [
      "kardinalita",
      "počet prvkov",
      "systematický výpis"
    ],
    "file": "modules/1-rocnik/mnoziny/19-kardinalita-mnoziny.js"
  },
  {
    "id": "1-u02-h020",
    "year": 1,
    "unit": "Množiny",
    "unitOrder": 2,
    "topic": "Operácie s množinami – zjednotenie, prienik",
    "lesson": "Hodina 20",
    "lessonOrder": 20,
    "time": "16–22 min",
    "status": "ready",
    "type": "Objavovanie → reprezentácia → zošit → argumentácia",
    "skills": [
      "zjednotenie",
      "prienik",
      "logické spojky"
    ],
    "file": "modules/1-rocnik/mnoziny/20-operacie-s-mnozinami-zjednotenie-prienik.js"
  },
  {
    "id": "1-u02-h021",
    "year": 1,
    "unit": "Množiny",
    "unitOrder": 2,
    "topic": "Riešenie úloh",
    "lesson": "Hodina 21",
    "lessonOrder": 21,
    "time": "16–22 min",
    "status": "ready",
    "type": "Objavovanie → reprezentácia → zošit → argumentácia",
    "skills": [
      "zjednotenie",
      "prienik",
      "argumentácia"
    ],
    "file": "modules/1-rocnik/mnoziny/21-riesenie-uloh.js"
  },
  {
    "id": "1-u02-h022",
    "year": 1,
    "unit": "Množiny",
    "unitOrder": 2,
    "topic": "Operácie s množinami – doplnok, rozdiel",
    "lesson": "Hodina 22",
    "lessonOrder": 22,
    "time": "16–22 min",
    "status": "ready",
    "type": "Objavovanie → reprezentácia → zošit → argumentácia",
    "skills": [
      "rozdiel množín",
      "doplnok",
      "univerzálna množina"
    ],
    "file": "modules/1-rocnik/mnoziny/22-operacie-s-mnozinami-doplnok-rozdiel.js"
  },
  {
    "id": "1-u02-h023",
    "year": 1,
    "unit": "Množiny",
    "unitOrder": 2,
    "topic": "Riešenie úloh",
    "lesson": "Hodina 23",
    "lessonOrder": 23,
    "time": "16–22 min",
    "status": "ready",
    "type": "Objavovanie → reprezentácia → zošit → argumentácia",
    "skills": [
      "operácie s množinami",
      "presný zápis",
      "kontrola riešenia"
    ],
    "file": "modules/1-rocnik/mnoziny/23-riesenie-uloh.js"
  },
  {
    "id": "1-u02-h024",
    "year": 1,
    "unit": "Množiny",
    "unitOrder": 2,
    "topic": "Vennove diagramy",
    "lesson": "Hodina 24",
    "lessonOrder": 24,
    "time": "16–22 min",
    "status": "ready",
    "type": "Objavovanie → reprezentácia → zošit → argumentácia",
    "skills": [
      "Vennov diagram",
      "reprezentácia",
      "čítanie podmienok"
    ],
    "file": "modules/1-rocnik/mnoziny/24-vennove-diagramy.js"
  },
  {
    "id": "1-u02-h025",
    "year": 1,
    "unit": "Množiny",
    "unitOrder": 2,
    "topic": "Zložené úlohy – kombinované operácie",
    "lesson": "Hodina 25",
    "lessonOrder": 25,
    "time": "16–22 min",
    "status": "ready",
    "type": "Objavovanie → reprezentácia → zošit → argumentácia",
    "skills": [
      "kombinované operácie",
      "zátvorky",
      "Vennov diagram"
    ],
    "file": "modules/1-rocnik/mnoziny/25-zlozene-ulohy-kombinovane-operacie.js"
  },
  {
    "id": "1-u02-h026",
    "year": 1,
    "unit": "Množiny",
    "unitOrder": 2,
    "topic": "Aplikačné úlohy s množinami",
    "lesson": "Hodina 26",
    "lessonOrder": 26,
    "time": "16–22 min",
    "status": "ready",
    "type": "Objavovanie → reprezentácia → zošit → argumentácia",
    "skills": [
      "modelovanie",
      "kardinalita",
      "aplikačné úlohy"
    ],
    "file": "modules/1-rocnik/mnoziny/26-aplikacne-ulohy-s-mnozinami.js"
  },
  {
    "id": "1-u02-h027",
    "year": 1,
    "unit": "Množiny",
    "unitOrder": 2,
    "topic": "Kontrolná písomná práca",
    "lesson": "Hodina 27",
    "lessonOrder": 27,
    "time": "8–10 min digitálne",
    "status": "ready",
    "type": "Objavovanie → reprezentácia → zošit → argumentácia",
    "skills": [
      "samostatnosť",
      "množiny",
      "sebakontrola"
    ],
    "file": "modules/1-rocnik/mnoziny/27-kontrolna-pisomna-praca.js"
  },

  // 1.03 · Čísla, premenné, výrazy
  {"id": "1-u03-h028", "year": 1, "unit": "Čísla, premenné, výrazy", "unitOrder": 3, "topic": "Prirodzené čísla, Deliteľnosť prirodzených čísel", "lesson": "Hodina 28", "lessonOrder": 28, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/1-rocnik/cisla-premenne-vyrazy/28-prirodzene-cisla-delitelnost-prirodzenych-cisel.js"},
  {"id": "1-u03-h029", "year": 1, "unit": "Čísla, premenné, výrazy", "unitOrder": 3, "topic": "NSN, NSD", "lesson": "Hodina 29", "lessonOrder": 29, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/1-rocnik/cisla-premenne-vyrazy/29-nsn-nsd.js"},
  {"id": "1-u03-h030", "year": 1, "unit": "Čísla, premenné, výrazy", "unitOrder": 3, "topic": "Riešenie úloh", "lesson": "Hodina 30", "lessonOrder": 30, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/1-rocnik/cisla-premenne-vyrazy/30-riesenie-uloh.js"},
  {"id": "1-u03-h031", "year": 1, "unit": "Čísla, premenné, výrazy", "unitOrder": 3, "topic": "Racionálne, iracionálne, reálne čísla", "lesson": "Hodina 31", "lessonOrder": 31, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/1-rocnik/cisla-premenne-vyrazy/31-racionalne-iracionalne-realne-cisla.js"},
  {"id": "1-u03-h032", "year": 1, "unit": "Čísla, premenné, výrazy", "unitOrder": 3, "topic": "Vlastnosti reálnych čísel", "lesson": "Hodina 32", "lessonOrder": 32, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/1-rocnik/cisla-premenne-vyrazy/32-vlastnosti-realnych-cisel.js"},
  {"id": "1-u03-h033", "year": 1, "unit": "Čísla, premenné, výrazy", "unitOrder": 3, "topic": "Percentá", "lesson": "Hodina 33", "lessonOrder": 33, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/1-rocnik/cisla-premenne-vyrazy/33-percenta.js"},
  {"id": "1-u03-h034", "year": 1, "unit": "Čísla, premenné, výrazy", "unitOrder": 3, "topic": "Úlohy z praxe na percentá", "lesson": "Hodina 34", "lessonOrder": 34, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/1-rocnik/cisla-premenne-vyrazy/34-ulohy-z-praxe-na-percenta.js"},
  {"id": "1-u03-h035", "year": 1, "unit": "Čísla, premenné, výrazy", "unitOrder": 3, "topic": "Počítanie s reálnymi číslami", "lesson": "Hodina 35", "lessonOrder": 35, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/1-rocnik/cisla-premenne-vyrazy/35-pocitanie-s-realnymi-cislami.js"},
  {"id": "1-u03-h036", "year": 1, "unit": "Čísla, premenné, výrazy", "unitOrder": 3, "topic": "Riešenie praktických úloh", "lesson": "Hodina 36", "lessonOrder": 36, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/1-rocnik/cisla-premenne-vyrazy/36-riesenie-praktickych-uloh.js"},
  {"id": "1-u03-h037", "year": 1, "unit": "Čísla, premenné, výrazy", "unitOrder": 3, "topic": "Kontrolná písomná práca", "lesson": "Hodina 37", "lessonOrder": 37, "time": "5–7 min digitálne + písomka", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/1-rocnik/cisla-premenne-vyrazy/37-kontrolna-pisomna-praca.js"},

  // 1.04 · Absolútna hodnota a intervaly
  {
    id: '1-u04-h038', year: 1, unit: "Absolútna hodnota a intervaly", unitOrder: 4,
    topic: "Absolútna hodnota reálnych čísel", lesson: "Hodina 38", lessonOrder: 38,
    time: "15–18 min", status: 'ready',
    type: "Pochopenie → nový pojem → overenie → prepojenie → zápis do zošita → hľadanie chyby → vysvetlenie → záver",
    skills: ["porozumenie","reprezentácie","kritické myslenie","matematická komunikácia"],
    file: "modules/1-rocnik/absolutna-hodnota-a-intervaly/38-absolutna-hodnota-realnych-cisel.js"
  },
  {
    id: '1-u04-h039', year: 1, unit: "Absolútna hodnota a intervaly", unitOrder: 4,
    topic: "Intervaly", lesson: "Hodina 39", lessonOrder: 39,
    time: "15–18 min", status: 'ready',
    type: "Pochopenie → nový pojem → overenie → hľadanie chyby → zápis do zošita → vysvetlenie → záver",
    skills: ["presný zápis","kritické myslenie","matematická komunikácia"],
    file: "modules/1-rocnik/absolutna-hodnota-a-intervaly/39-intervaly.js"
  },
  {
    id: '1-u04-h040', year: 1, unit: "Absolútna hodnota a intervaly", unitOrder: 4,
    topic: "Zjednotenie a prienik intervalov", lesson: "Hodina 40", lessonOrder: 40,
    time: "15–18 min", status: 'ready',
    type: "Pochopenie → nový pojem → overenie → prenos → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["prienik","zjednotenie","kritické myslenie","argumentácia"],
    file: "modules/1-rocnik/absolutna-hodnota-a-intervaly/40-zjednotenie-a-prienik-intervalov.js"
  },
  {
    id: '1-u04-h041', year: 1, unit: "Absolútna hodnota a intervaly", unitOrder: 4,
    topic: "Aplikácia intervalov", lesson: "Hodina 41", lessonOrder: 41,
    time: "15–18 min", status: 'ready',
    type: "Pochopenie → aplikácia → prepojenie → rozhodovanie → zápis do zošita → vysvetlenie → záver",
    skills: ["modelovanie","interpretácia","kritické myslenie"],
    file: "modules/1-rocnik/absolutna-hodnota-a-intervaly/41-aplikacia-intervalov.js"
  },
  {
    id: '1-u04-h042', year: 1, unit: "Absolútna hodnota a intervaly", unitOrder: 4,
    topic: "Riešenie úloh", lesson: "Hodina 42", lessonOrder: 42,
    time: "16–20 min", status: 'ready',
    type: "Pochopenie → nový pojem → prepojenie → prenos → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["reprezentácie","kritické myslenie","argumentácia"],
    file: "modules/1-rocnik/absolutna-hodnota-a-intervaly/42-riesenie-uloh.js"
  },
  {
    id: '1-u04-h043', year: 1, unit: "Absolútna hodnota a intervaly", unitOrder: 4,
    topic: "Previerka", lesson: "Hodina 43", lessonOrder: 43,
    time: "15–20 min", status: 'ready',
    type: "Pochopenie → previerka → zdôvodnenie → záver",
    skills: ["absolútna hodnota","intervaly","prienik","zjednotenie","praktická interpretácia","reprezentácie","kritické myslenie","argumentácia"],
    file: "modules/1-rocnik/absolutna-hodnota-a-intervaly/43-previerka.js"
  },

  // 1.05 · Mocniny a odmocniny
  {
    id: '1-u05-h044', year: 1, unit: "Mocniny a odmocniny", unitOrder: 5,
    topic: "Definícia mocniny, zápis, príklady na kladné prirodzené mocnitele", lesson: "Hodina 44", lessonOrder: 44,
    time: "22–28 min", status: 'ready',
    type: "Pochopenie → nový pojem → znamienko pri zápornom základe → precvičenie → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["pojem mocniny", "výpočet mocniny", "znamienko mocniny", "argumentácia"],
    file: "modules/1-rocnik/mocniny-a-odmocniny/44-definicia-mocniny-zapis-priklady-na-kladne-prirodzene-mocnitele.js"
  },
  {
    id: '1-u05-h045', year: 1, unit: "Mocniny a odmocniny", unitOrder: 5,
    topic: "Vlastnosti mocnín (násobenie, delenie, mocnina mocniny), príklady", lesson: "Hodina 45", lessonOrder: 45,
    time: "22–28 min", status: 'ready',
    type: "Pochopenie → nové pravidlá → precvičenie → hľadanie chyby → kombinácia pravidiel → zápis do zošita → argumentácia → záver",
    skills: ["násobenie mocnín", "delenie mocnín", "mocnina mocniny", "argumentácia"],
    file: "modules/1-rocnik/mocniny-a-odmocniny/45-vlastnosti-mocnin-nasobenie-delenie-mocnina-mocniny-priklady.js"
  },
  {
    id: '1-u05-h046', year: 1, unit: "Mocniny a odmocniny", unitOrder: 5,
    topic: "Definícia mocniny so záporným mocniteľom, príklady", lesson: "Hodina 46", lessonOrder: 46,
    time: "22–28 min", status: 'ready',
    type: "Pochopenie → odvodenie a⁰=1 → záporný mocniteľ → precvičenie → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["nultá mocnina", "záporný mocniteľ", "argumentácia"],
    file: "modules/1-rocnik/mocniny-a-odmocniny/46-definicia-mocniny-so-zapornym-mocnitelom-priklady.js"
  },
  {
    id: '1-u05-h047', year: 1, unit: "Mocniny a odmocniny", unitOrder: 5,
    topic: "Precvičovanie, typické úlohy, aplikácia vo výpočtoch", lesson: "Hodina 47", lessonOrder: 47,
    time: "20–26 min", status: 'ready',
    type: "Zhrnutie → kombinácia pravidiel → klasifikácia tvrdení → aplikácia → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["kombinácia pravidiel", "kritické myslenie", "argumentácia"],
    file: "modules/1-rocnik/mocniny-a-odmocniny/47-precvicovanie-typicke-ulohy-aplikacia-vo-vypoctoch.js"
  },
  {
    id: '1-u05-h048', year: 1, unit: "Mocniny a odmocniny", unitOrder: 5,
    topic: "Príklady zo stavebníctva, fyziky, chémie (plochy, objemy, hustota, tlak)", lesson: "Hodina 48", lessonOrder: 48,
    time: "20–26 min", status: 'ready',
    type: "Pochopenie → prevod jednotiek → hustota a tlak → precvičenie → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["prevod jednotiek", "hustota a tlak", "aplikácia v praxi"],
    file: "modules/1-rocnik/mocniny-a-odmocniny/48-priklady-zo-stavebnictva-fyziky-chemie-plochy-objemy-hustota-tlak.js"
  },
  {
    id: '1-u05-h049', year: 1, unit: "Mocniny a odmocniny", unitOrder: 5,
    topic: "Vlastnosti mocnín so základom 10, zápis veľkých a malých čísel", lesson: "Hodina 49", lessonOrder: 49,
    time: "20–26 min", status: 'ready',
    type: "Pochopenie → vedecký zápis → precvičenie → hľadanie chyby → aplikácia → zápis do zošita → argumentácia → záver",
    skills: ["vedecký zápis", "prevod čísel", "argumentácia"],
    file: "modules/1-rocnik/mocniny-a-odmocniny/49-vlastnosti-mocnin-so-zakladom-10-zapis-velkych-a-malych-cisel.js"
  },
  {
    id: '1-u05-h050', year: 1, unit: "Mocniny a odmocniny", unitOrder: 5,
    topic: "Používanie v technike a prírodných vedách, prevody jednotiek, cvičenia", lesson: "Hodina 50", lessonOrder: 50,
    time: "20–26 min", status: 'ready',
    type: "Pochopenie → predpony jednotiek → porovnávanie → hľadanie chyby → odhad rádu veľkosti → zápis do zošita → argumentácia → záver",
    skills: ["predpony jednotiek", "porovnávanie čísel", "odhad rádu veľkosti", "argumentácia"],
    file: "modules/1-rocnik/mocniny-a-odmocniny/50-pouzivanie-v-technike-a-prirodnych-vedach-prevody-jednotiek-cvicenia.js"
  },
  {
    id: '1-u05-h051', year: 1, unit: "Mocniny a odmocniny", unitOrder: 5,
    topic: "Druhá odmocnina", lesson: "Hodina 51", lessonOrder: 51,
    time: "22–28 min", status: 'ready',
    type: "Pochopenie → nový pojem → hľadanie chyby → odhad → zápis do zošita → argumentácia → záver",
    skills: ["výpočet odmocniny", "definičný obor odmocniny", "odhad odmocniny", "argumentácia"],
    file: "modules/1-rocnik/mocniny-a-odmocniny/51-druha-odmocnina.js"
  },
  {
    id: '1-u05-h052', year: 1, unit: "Mocniny a odmocniny", unitOrder: 5,
    topic: "Tretia odmocnina", lesson: "Hodina 52", lessonOrder: 52,
    time: "20–26 min", status: 'ready',
    type: "Pochopenie → nový pojem → hľadanie chyby → odhad → zápis do zošita → argumentácia → záver",
    skills: ["výpočet tretej odmocniny", "porovnanie s druhou odmocninou", "argumentácia"],
    file: "modules/1-rocnik/mocniny-a-odmocniny/52-tretia-odmocnina.js"
  },
  {
    id: '1-u05-h053', year: 1, unit: "Mocniny a odmocniny", unitOrder: 5,
    topic: "Vety o odmocninách", lesson: "Hodina 53", lessonOrder: 53,
    time: "22–28 min", status: 'ready',
    type: "Pochopenie → vety o súčine a podiele → hľadanie chyby → √(a²)=|a| → aplikácia → zápis do zošita → argumentácia → záver",
    skills: ["odmocnina súčinu a podielu", "vzťah √(a²)=|a|", "kritické myslenie", "argumentácia"],
    file: "modules/1-rocnik/mocniny-a-odmocniny/53-vety-o-odmocninach.js"
  },
  {
    id: '1-u05-h054', year: 1, unit: "Mocniny a odmocniny", unitOrder: 5,
    topic: "Použitie odmocnín", lesson: "Hodina 54", lessonOrder: 54,
    time: "20–26 min", status: 'ready',
    type: "Pochopenie → Pytagorova veta → precvičenie → hľadanie chyby → aplikácia v praxi → zápis do zošita → argumentácia → záver",
    skills: ["výpočet prepony a odvesny", "aplikácia v geodetickej praxi", "argumentácia"],
    file: "modules/1-rocnik/mocniny-a-odmocniny/54-pouzitie-odmocnin.js"
  },
  {
    id: '1-u05-h055', year: 1, unit: "Mocniny a odmocniny", unitOrder: 5,
    topic: "Definícia, prechod od odmocnín k mocninám s racionálnym mocniteľom", lesson: "Hodina 55", lessonOrder: 55,
    time: "22–28 min", status: 'ready',
    type: "Pochopenie → nový pojem → precvičenie → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["prevod odmocniny na mocninu", "zlomkový exponent", "argumentácia"],
    file: "modules/1-rocnik/mocniny-a-odmocniny/55-definicia-prechod-od-odmocnin-k-mocninam-s-racionalnym-mocnitelom.js"
  },
  {
    id: '1-u05-h056', year: 1, unit: "Mocniny a odmocniny", unitOrder: 5,
    topic: "Vlastnosti, príklady, riešenie úloh", lesson: "Hodina 56", lessonOrder: 56,
    time: "20–26 min", status: 'ready',
    type: "Pochopenie → precvičenie pravidiel → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["pravidlá pre zlomkový exponent", "argumentácia"],
    file: "modules/1-rocnik/mocniny-a-odmocniny/56-vlastnosti-priklady-riesenie-uloh.js"
  },
  {
    id: '1-u05-h057', year: 1, unit: "Mocniny a odmocniny", unitOrder: 5,
    topic: "Kombinácie mocnín a odmocnín", lesson: "Hodina 57", lessonOrder: 57,
    time: "22–28 min", status: 'ready',
    type: "Zhrnutie → kombinácia mocnín a odmocnín → priraďovanie → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["kombinácia mocnín a odmocnín", "kritické myslenie", "argumentácia"],
    file: "modules/1-rocnik/mocniny-a-odmocniny/57-kombinacie-mocnin-a-odmocnin.js"
  },
  {
    id: '1-u05-h058', year: 1, unit: "Mocniny a odmocniny", unitOrder: 5,
    topic: "Kontrolná písomná práca", lesson: "Hodina 58", lessonOrder: 58,
    time: "10–14 min", status: 'ready',
    type: "Rozcvička pred previerkou → over → sebahodnotenie",
    skills: ["zhrnutie celej témy", "sebahodnotenie"],
    file: "modules/1-rocnik/mocniny-a-odmocniny/58-kontrolna-pisomna-praca.js"
  },

  // 1.06 · Výrazy a mnohočleny
  {
    id: '1-u06-h059', year: 1, unit: "Výrazy a mnohočleny", unitOrder: 6,
    topic: "Konštanta, premenná, výraz, mnohočlen", lesson: "Hodina 59", lessonOrder: 59,
    time: "22–28 min", status: 'ready',
    type: "Pochopenie → nový pojem → precvičenie → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["pojem koeficientu", "jednočlen a mnohočlen", "argumentácia"],
    file: "modules/1-rocnik/vyrazy-a-mnohocleny/59-konstanta-premenna-vyraz-mnohoclen.js"
  },
  {
    id: '1-u06-h060', year: 1, unit: "Výrazy a mnohočleny", unitOrder: 6,
    topic: "Sčítanie a odčítanie mnohočlenov, jednoduché príklady, násobenie jednočlenom, pravidlá a príklady", lesson: "Hodina 60", lessonOrder: 60,
    time: "22–28 min", status: 'ready',
    type: "Pochopenie → sčítanie/odčítanie → hľadanie chyby → násobenie jednočlenom → zápis do zošita → argumentácia → záver",
    skills: ["sčítanie a odčítanie mnohočlenov", "násobenie jednočlenom", "argumentácia"],
    file: "modules/1-rocnik/vyrazy-a-mnohocleny/60-scitanie-a-odcitanie-mnohoclenov-jednoduche-priklady-nasobenie-jednocl.js"
  },
  {
    id: '1-u06-h061', year: 1, unit: "Výrazy a mnohočleny", unitOrder: 6,
    topic: "Násobenie mnohočlenov", lesson: "Hodina 61", lessonOrder: 61,
    time: "20–26 min", status: 'ready',
    type: "Pochopenie → nové pravidlo → precvičenie → hľadanie chyby → aplikácia → zápis do zošita → argumentácia → záver",
    skills: ["násobenie dvojčlenov", "argumentácia"],
    file: "modules/1-rocnik/vyrazy-a-mnohocleny/61-nasobenie-mnohoclenov.js"
  },
  {
    id: '1-u06-h062', year: 1, unit: "Výrazy a mnohočleny", unitOrder: 6,
    topic: "Delenie mnohočlenov", lesson: "Hodina 62", lessonOrder: 62,
    time: "20–26 min", status: 'ready',
    type: "Pochopenie → nové pravidlo → precvičenie → hľadanie chyby → overenie → zápis do zošita → argumentácia → záver",
    skills: ["delenie jednočlenom", "overenie spätným násobením", "argumentácia"],
    file: "modules/1-rocnik/vyrazy-a-mnohocleny/62-delenie-mnohoclenov.js"
  },
  {
    id: '1-u06-h063', year: 1, unit: "Výrazy a mnohočleny", unitOrder: 6,
    topic: "Tvorba výrazov zo slovného zadania, príklady", lesson: "Hodina 63", lessonOrder: 63,
    time: "20–26 min", status: 'ready',
    type: "Pochopenie → prevod slovného textu → hľadanie chyby → viackrokový prevod → zápis do zošita → argumentácia → záver",
    skills: ["prevod slovného textu na výraz", "argumentácia"],
    file: "modules/1-rocnik/vyrazy-a-mnohocleny/63-tvorba-vyrazov-zo-slovneho-zadania-priklady.js"
  },
  {
    id: '1-u06-h064', year: 1, unit: "Výrazy a mnohočleny", unitOrder: 6,
    topic: "Riešenie a diskusia úloh z technickej praxe", lesson: "Hodina 64", lessonOrder: 64,
    time: "20–26 min", status: 'ready',
    type: "Pochopenie → aplikácia → hľadanie chyby → diskusia → zápis do zošita → argumentácia → záver",
    skills: ["zostavenie výrazu pre obsah a obvod", "interpretácia výsledku", "argumentácia"],
    file: "modules/1-rocnik/vyrazy-a-mnohocleny/64-riesenie-a-diskusia-uloh-z-technickej-praxe.js"
  },
  {
    id: '1-u06-h065', year: 1, unit: "Výrazy a mnohočleny", unitOrder: 6,
    topic: "Úpravy mnohočlenov", lesson: "Hodina 65", lessonOrder: 65,
    time: "20–26 min", status: 'ready',
    type: "Zhrnutie → kombinácia operácií → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["kombinácia operácií s mnohočlenmi", "kritické myslenie", "argumentácia"],
    file: "modules/1-rocnik/vyrazy-a-mnohocleny/65-upravy-mnohoclenov.js"
  },
  {
    id: '1-u06-h066', year: 1, unit: "Výrazy a mnohočleny", unitOrder: 6,
    topic: "Previerka", lesson: "Hodina 66", lessonOrder: 66,
    time: "10–14 min", status: 'ready',
    type: "Rozcvička pred previerkou → over → sebahodnotenie",
    skills: ["zhrnutie celej témy", "sebahodnotenie"],
    file: "modules/1-rocnik/vyrazy-a-mnohocleny/66-previerka.js"
  },

  // 1.07 · Rozklad výrazov a dosadzovanie vo vzorcoch
  {
    id: '1-u07-h067', year: 1, unit: "Rozklad výrazov a dosadzovanie vo vzorcoch", unitOrder: 7,
    topic: "Dosadzovanie do výrazov", lesson: "Hodina 67", lessonOrder: 67,
    time: "20–26 min", status: 'ready',
    type: "Pochopenie → nové pravidlo → precvičenie → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["dosadzovanie do výrazu", "znamienko pri dosadzovaní", "argumentácia"],
    file: "modules/1-rocnik/rozklad-vyrazov-a-dosadzovanie-vo-vzorcoch/67-dosadzovanie-do-vyrazov.js"
  },
  {
    id: '1-u07-h068', year: 1, unit: "Rozklad výrazov a dosadzovanie vo vzorcoch", unitOrder: 7,
    topic: "Úpravy vzorcov", lesson: "Hodina 68", lessonOrder: 68,
    time: "20–26 min", status: 'ready',
    type: "Pochopenie → nové pravidlo → precvičenie → hľadanie chyby → aplikácia → zápis do zošita → argumentácia → záver",
    skills: ["úprava vzorca", "aplikácia v technickej praxi", "argumentácia"],
    file: "modules/1-rocnik/rozklad-vyrazov-a-dosadzovanie-vo-vzorcoch/68-upravy-vzorcov.js"
  },
  {
    id: '1-u07-h069', year: 1, unit: "Rozklad výrazov a dosadzovanie vo vzorcoch", unitOrder: 7,
    topic: "Rozklad výrazov pomocou vynímania pred zátvorku", lesson: "Hodina 69", lessonOrder: 69,
    time: "20–26 min", status: 'ready',
    type: "Pochopenie → nové pravidlo → precvičenie → hľadanie chyby → overenie → zápis do zošita → argumentácia → záver",
    skills: ["vyňatie spoločného činiteľa", "najväčší spoločný činiteľ", "argumentácia"],
    file: "modules/1-rocnik/rozklad-vyrazov-a-dosadzovanie-vo-vzorcoch/69-rozklad-vyrazov-pomocou-vynimania-pred-zatvorku.js"
  },
  {
    id: '1-u07-h070', year: 1, unit: "Rozklad výrazov a dosadzovanie vo vzorcoch", unitOrder: 7,
    topic: "Riešenie úloh", lesson: "Hodina 70", lessonOrder: 70,
    time: "20–26 min", status: 'ready',
    type: "Zhrnutie → kombinácia zručností → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["kombinácia zručností", "kritické myslenie", "argumentácia"],
    file: "modules/1-rocnik/rozklad-vyrazov-a-dosadzovanie-vo-vzorcoch/70-riesenie-uloh.js"
  },
  {
    id: '1-u07-h071', year: 1, unit: "Rozklad výrazov a dosadzovanie vo vzorcoch", unitOrder: 7,
    topic: "Rozklad výrazov podľa vzorcov", lesson: "Hodina 71", lessonOrder: 71,
    time: "22–28 min", status: 'ready',
    type: "Pochopenie → nový vzorec → precvičenie → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["rozdiel druhých mocnín", "argumentácia"],
    file: "modules/1-rocnik/rozklad-vyrazov-a-dosadzovanie-vo-vzorcoch/71-rozklad-vyrazov-podla-vzorcov.js"
  },
  {
    id: '1-u07-h072', year: 1, unit: "Rozklad výrazov a dosadzovanie vo vzorcoch", unitOrder: 7,
    topic: "Rozklad výrazov pomocou vzorcov", lesson: "Hodina 72", lessonOrder: 72,
    time: "22–28 min", status: 'ready',
    type: "Pochopenie → nové vzorce → precvičenie → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["druhá mocnina dvojčlena", "kontrola prostredného člena", "argumentácia"],
    file: "modules/1-rocnik/rozklad-vyrazov-a-dosadzovanie-vo-vzorcoch/72-rozklad-vyrazov-pomocou-vzorcov.js"
  },
  {
    id: '1-u07-h073', year: 1, unit: "Rozklad výrazov a dosadzovanie vo vzorcoch", unitOrder: 7,
    topic: "Riešenie úloh", lesson: "Hodina 73", lessonOrder: 73,
    time: "20–26 min", status: 'ready',
    type: "Zhrnutie → rozpoznanie vzorca → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["rozpoznanie vhodného vzorca", "kritické myslenie", "argumentácia"],
    file: "modules/1-rocnik/rozklad-vyrazov-a-dosadzovanie-vo-vzorcoch/73-riesenie-uloh.js"
  },
  {
    id: '1-u07-h074', year: 1, unit: "Rozklad výrazov a dosadzovanie vo vzorcoch", unitOrder: 7,
    topic: "Zložitejšie úpravy", lesson: "Hodina 74", lessonOrder: 74,
    time: "22–28 min", status: 'ready',
    type: "Pochopenie → kombinovaný rozklad → precvičenie → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["kombinácia vyňatia a vzorca", "úplnosť rozkladu", "argumentácia"],
    file: "modules/1-rocnik/rozklad-vyrazov-a-dosadzovanie-vo-vzorcoch/74-zlozitejsie-upravy.js"
  },
  {
    id: '1-u07-h075', year: 1, unit: "Rozklad výrazov a dosadzovanie vo vzorcoch", unitOrder: 7,
    topic: "Riešenie úloh", lesson: "Hodina 75", lessonOrder: 75,
    time: "20–26 min", status: 'ready',
    type: "Zhrnutie → pestrá zmes úloh → zápis do zošita → argumentácia → záver",
    skills: ["kombinácia zručností celého celku", "argumentácia"],
    file: "modules/1-rocnik/rozklad-vyrazov-a-dosadzovanie-vo-vzorcoch/75-riesenie-uloh.js"
  },
  {
    id: '1-u07-h076', year: 1, unit: "Rozklad výrazov a dosadzovanie vo vzorcoch", unitOrder: 7,
    topic: "Kontrolná písomná práca", lesson: "Hodina 76", lessonOrder: 76,
    time: "10–14 min", status: 'ready',
    type: "Rozcvička pred previerkou → over → sebahodnotenie",
    skills: ["zhrnutie celej témy", "sebahodnotenie"],
    file: "modules/1-rocnik/rozklad-vyrazov-a-dosadzovanie-vo-vzorcoch/76-kontrolna-pisomna-praca.js"
  },

  // 1.08 · Lomené výrazy
  {
    id: '1-u08-h077', year: 1, unit: "Lomené výrazy", unitOrder: 8,
    topic: "Úpravy lomených výrazov", lesson: "Hodina 77", lessonOrder: 77,
    time: "22–28 min", status: 'ready',
    type: "Pochopenie → definičný obor → krátenie → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["definičný obor lomeného výrazu", "krátenie lomeného výrazu", "argumentácia"],
    file: "modules/1-rocnik/lomene-vyrazy/77-upravy-lomenych-vyrazov.js"
  },
  {
    id: '1-u08-h078', year: 1, unit: "Lomené výrazy", unitOrder: 8,
    topic: "Úpravy lomených výrazov-ščítanie lomených výrazov", lesson: "Hodina 78", lessonOrder: 78,
    time: "20–26 min", status: 'ready',
    type: "Pochopenie → nové pravidlo → precvičenie → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["sčítanie lomených výrazov", "spoločný menovateľ", "argumentácia"],
    file: "modules/1-rocnik/lomene-vyrazy/78-upravy-lomenych-vyrazov-scitanie-lomenych-vyrazov.js"
  },
  {
    id: '1-u08-h079', year: 1, unit: "Lomené výrazy", unitOrder: 8,
    topic: "Úpravy lomených výrazov-odčítanie lomených výrazov", lesson: "Hodina 79", lessonOrder: 79,
    time: "20–26 min", status: 'ready',
    type: "Pochopenie → nové pravidlo → precvičenie → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["odčítanie lomených výrazov", "znamienko pri odčítaní", "argumentácia"],
    file: "modules/1-rocnik/lomene-vyrazy/79-upravy-lomenych-vyrazov-odcitanie-lomenych-vyrazov.js"
  },
  {
    id: '1-u08-h080', year: 1, unit: "Lomené výrazy", unitOrder: 8,
    topic: "Riešenie úloh", lesson: "Hodina 80", lessonOrder: 80,
    time: "20–26 min", status: 'ready',
    type: "Zhrnutie → kombinácia zručností → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["kombinácia zručností", "kritické myslenie", "argumentácia"],
    file: "modules/1-rocnik/lomene-vyrazy/80-riesenie-uloh.js"
  },
  {
    id: '1-u08-h081', year: 1, unit: "Lomené výrazy", unitOrder: 8,
    topic: "Úpravy lomených výrazov-násobenie lomených výrazov", lesson: "Hodina 81", lessonOrder: 81,
    time: "20–26 min", status: 'ready',
    type: "Pochopenie → nové pravidlo → precvičenie → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["násobenie lomených výrazov", "krátenie pred násobením", "argumentácia"],
    file: "modules/1-rocnik/lomene-vyrazy/81-upravy-lomenych-vyrazov-nasobenie-lomenych-vyrazov.js"
  },
  {
    id: '1-u08-h082', year: 1, unit: "Lomené výrazy", unitOrder: 8,
    topic: "Úpravy lomených výrazov-delenie lomených výrazov", lesson: "Hodina 82", lessonOrder: 82,
    time: "20–26 min", status: 'ready',
    type: "Pochopenie → nové pravidlo → precvičenie → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["delenie lomených výrazov", "prevod delenia na násobenie", "argumentácia"],
    file: "modules/1-rocnik/lomene-vyrazy/82-upravy-lomenych-vyrazov-delenie-lomenych-vyrazov.js"
  },
  {
    id: '1-u08-h083', year: 1, unit: "Lomené výrazy", unitOrder: 8,
    topic: "Riešenie úloh", lesson: "Hodina 83", lessonOrder: 83,
    time: "20–26 min", status: 'ready',
    type: "Zhrnutie → kombinácia zručností → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["násobenie a delenie lomených výrazov", "kritické myslenie", "argumentácia"],
    file: "modules/1-rocnik/lomene-vyrazy/83-riesenie-uloh.js"
  },
  {
    id: '1-u08-h084', year: 1, unit: "Lomené výrazy", unitOrder: 8,
    topic: "Zložitejšie úpravy lomených výrazov", lesson: "Hodina 84", lessonOrder: 84,
    time: "22–28 min", status: 'ready',
    type: "Pochopenie → nové pravidlo → precvičenie → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["rozklad menovateľa pri hľadaní spoločného menovateľa", "zložitá úprava", "argumentácia"],
    file: "modules/1-rocnik/lomene-vyrazy/84-zlozitejsie-upravy-lomenych-vyrazov.js"
  },
  {
    id: '1-u08-h085', year: 1, unit: "Lomené výrazy", unitOrder: 8,
    topic: "Riešenie úloh", lesson: "Hodina 85", lessonOrder: 85,
    time: "20–26 min", status: 'ready',
    type: "Zhrnutie → zložitá úprava → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["zložitá úprava lomeného výrazu", "kritické myslenie", "argumentácia"],
    file: "modules/1-rocnik/lomene-vyrazy/85-riesenie-uloh.js"
  },
  {
    id: '1-u08-h086', year: 1, unit: "Lomené výrazy", unitOrder: 8,
    topic: "Systematizácia učiva", lesson: "Hodina 86", lessonOrder: 86,
    time: "22–28 min", status: 'ready',
    type: "Zhrnutie → klasifikácia typu úlohy → precvičenie → zápis do zošita → argumentácia → záver",
    skills: ["systematické rozpoznanie typu úlohy", "kombinácia zručností", "argumentácia"],
    file: "modules/1-rocnik/lomene-vyrazy/86-systematizacia-uciva.js"
  },
  {
    id: '1-u08-h087', year: 1, unit: "Lomené výrazy", unitOrder: 8,
    topic: "Kontrolná písomná práca", lesson: "Hodina 87", lessonOrder: 87,
    time: "10–14 min", status: 'ready',
    type: "Rozcvička pred previerkou → over → sebahodnotenie",
    skills: ["zhrnutie celej témy", "sebahodnotenie"],
    file: "modules/1-rocnik/lomene-vyrazy/87-kontrolna-pisomna-praca.js"
  },

  // 1.09 · Funkcie- základné vlastnosti
  {
    id: "1-u09-h088", year: 1, unit: 'Funkcie- základné vlastnosti', unitOrder: 9,
    topic: "Pojem funkcie, definičný obor funkcie, obor hodnôt funkcie", lesson: "Hodina 88", lessonOrder: 88,
    time: "≈ 15 min", status: 'ready',
    type: "Objavovanie → pojem funkcie → D(f) a H(f) → zdôvodnenie",
    skills: ["funkcia", "definičný obor D(f)", "obor hodnôt H(f)"],
    file: 'modules/1-rocnik/funkcie-zakladne-vlastnosti/88-pojem-funkcie-definicny-obor-funkcie-obor-hodnot-funkcie.js'
  },
  {
    id: '1-u09-h089', year: 1, unit: "Funkcie- základné vlastnosti", unitOrder: 9,
    topic: "Graf funkcie, určovanie D(f) a H(f) z grafu", lesson: "Hodina 89", lessonOrder: 89,
    time: "20–26 min", status: 'ready',
    type: "Pochopenie → graf funkcie → precvičenie → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["D(f) z grafu", "H(f) z grafu", "argumentácia"],
    file: "modules/1-rocnik/funkcie-zakladne-vlastnosti/89-graf-funkcie-urcovanie-d-f-a-h-f-z-grafu.js"
  },
  {
    id: '1-u09-h090', year: 1, unit: "Funkcie- základné vlastnosti", unitOrder: 9,
    topic: "Riešenie úloh", lesson: "Hodina 90", lessonOrder: 90,
    time: "20–26 min", status: 'ready',
    type: "Zhrnutie → precvičenie reprezentácií → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["pojem funkcie", "D(f) a H(f) z rôznych reprezentácií", "argumentácia"],
    file: "modules/1-rocnik/funkcie-zakladne-vlastnosti/90-riesenie-uloh.js"
  },
  {
    id: '1-u09-h091', year: 1, unit: "Funkcie- základné vlastnosti", unitOrder: 9,
    topic: "Párna a nepárna funkcia", lesson: "Hodina 91", lessonOrder: 91,
    time: "22–28 min", status: 'ready',
    type: "Pochopenie → nový pojem → precvičenie → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["párna funkcia", "nepárna funkcia", "argumentácia"],
    file: "modules/1-rocnik/funkcie-zakladne-vlastnosti/91-parna-a-neparna-funkcia.js"
  },
  {
    id: '1-u09-h092', year: 1, unit: "Funkcie- základné vlastnosti", unitOrder: 9,
    topic: "Rastúca a klesajúca funkci", lesson: "Hodina 92", lessonOrder: 92,
    time: "20–26 min", status: 'ready',
    type: "Pochopenie → nový pojem → precvičenie → hľadanie chyby → aplikácia → zápis do zošita → argumentácia → záver",
    skills: ["rastúca funkcia", "klesajúca funkcia", "argumentácia"],
    file: "modules/1-rocnik/funkcie-zakladne-vlastnosti/92-rastuca-a-klesajuca-funkci.js"
  },
  {
    id: '1-u09-h093', year: 1, unit: "Funkcie- základné vlastnosti", unitOrder: 9,
    topic: "Maximum a minimum funkcie na množine", lesson: "Hodina 93", lessonOrder: 93,
    time: "20–26 min", status: 'ready',
    type: "Pochopenie → nový pojem → precvičenie → hľadanie chyby → aplikácia → zápis do zošita → argumentácia → záver",
    skills: ["maximum funkcie", "minimum funkcie", "argumentácia"],
    file: "modules/1-rocnik/funkcie-zakladne-vlastnosti/93-maximum-a-minimum-funkcie-na-mnozine.js"
  },
  {
    id: '1-u09-h094', year: 1, unit: "Funkcie- základné vlastnosti", unitOrder: 9,
    topic: "Prostá funkcia", lesson: "Hodina 94", lessonOrder: 94,
    time: "20–26 min", status: 'ready',
    type: "Pochopenie → nový pojem → precvičenie → hľadanie chyby → hľadanie protipríkladu → zápis do zošita → argumentácia → záver",
    skills: ["prostá funkcia", "hľadanie protipríkladu", "argumentácia"],
    file: "modules/1-rocnik/funkcie-zakladne-vlastnosti/94-prosta-funkcia.js"
  },
  {
    id: '1-u09-h095', year: 1, unit: "Funkcie- základné vlastnosti", unitOrder: 9,
    topic: "Funkcia ohraničená na množine", lesson: "Hodina 95", lessonOrder: 95,
    time: "20–26 min", status: 'ready',
    type: "Pochopenie → nový pojem → precvičenie → hľadanie chyby → aplikácia → zápis do zošita → argumentácia → záver",
    skills: ["ohraničenosť zhora a zdola", "rozdiel od extrému", "argumentácia"],
    file: "modules/1-rocnik/funkcie-zakladne-vlastnosti/95-funkcia-ohranicena-na-mnozine.js"
  },
  {
    id: '1-u09-h096', year: 1, unit: "Funkcie- základné vlastnosti", unitOrder: 9,
    topic: "Riešenie úloh", lesson: "Hodina 96", lessonOrder: 96,
    time: "20–26 min", status: 'ready',
    type: "Zhrnutie → priraďovanie → kombinácia vlastností → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["kombinácia vlastností funkcie", "kritické myslenie", "argumentácia"],
    file: "modules/1-rocnik/funkcie-zakladne-vlastnosti/96-riesenie-uloh.js"
  },
  {
    id: '1-u09-h097', year: 1, unit: "Funkcie- základné vlastnosti", unitOrder: 9,
    topic: "Určovanie vlastnosti funkcie z grafu", lesson: "Hodina 97", lessonOrder: 97,
    time: "22–28 min", status: 'ready',
    type: "Graf funkcie → precvičenie → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["komplexné čítanie grafu", "monotónnosť po úsekoch", "argumentácia"],
    file: "modules/1-rocnik/funkcie-zakladne-vlastnosti/97-urcovanie-vlastnosti-funkcie-z-grafu.js"
  },
  {
    id: '1-u09-h098', year: 1, unit: "Funkcie- základné vlastnosti", unitOrder: 9,
    topic: "Riešenie úloh", lesson: "Hodina 98", lessonOrder: 98,
    time: "20–26 min", status: 'ready',
    type: "Zhrnutie → pestrá zmes úloh → hľadanie chyby → zápis do zošita → argumentácia → záver",
    skills: ["kombinácia zručností celej témy", "kritické myslenie", "argumentácia"],
    file: "modules/1-rocnik/funkcie-zakladne-vlastnosti/98-riesenie-uloh.js"
  },
  {
    id: '1-u09-h099', year: 1, unit: "Funkcie- základné vlastnosti", unitOrder: 9,
    topic: "Kontrolná písomná práca", lesson: "Hodina 99", lessonOrder: 99,
    time: "10–14 min", status: 'ready',
    type: "Rozcvička pred previerkou → over → sebahodnotenie",
    skills: ["zhrnutie celej témy", "sebahodnotenie"],
    file: "modules/1-rocnik/funkcie-zakladne-vlastnosti/99-kontrolna-pisomna-praca.js"
  },
  // ==================== 2. ROČNÍK ====================

  // 2.01 · Lineárna funkcia
  {
    id: "2-funkcie-01", year: 2, unit: "Lineárna funkcia", unitOrder: 1,
    topic: "Pojem funkcie- príklady, spôsoby určenia funkcie", lesson: "Hodina 1", lessonOrder: 1,
    time: "15–18 min", status: 'ready',
    type: "Objavovanie → zavedenie pojmu → reprezentácie → zápis",
    skills: ["funkcia", "f(x)", "reprezentácie"],
    file: "modules/2-rocnik/linearna-funkcia/01-pojem-funkcie-a-sposoby-urcenia.js"
  },
  {
    id: "2-u01-h002", year: 2, unit: "Lineárna funkcia", unitOrder: 1,
    topic: "Lineárna funkcia, graf lineárnej funkcie", lesson: "Hodina 2", lessonOrder: 2,
    time: "15–18 min", status: 'ready',
    type: "Zavedenie → graf → ručná konštrukcia → vysvetlenie",
    skills: ["lineárna funkcia", "graf", "a a b"],
    file: "modules/2-rocnik/linearna-funkcia/02-linearna-funkcia-graf-linearnej-funkcie.js"
  },
  {
    id: "2-u01-h003", year: 2, unit: "Lineárna funkcia", unitOrder: 1,
    topic: "Vlastnosti lineárnej funkcie", lesson: "Hodina 3", lessonOrder: 3,
    time: "15–18 min", status: 'ready',
    type: "Vlastnosti → argumentácia → maturitný transfer",
    skills: ["smernica", "monotónnosť", "nulový bod"],
    file: "modules/2-rocnik/linearna-funkcia/03-vlastnosti-linearnej-funkcie.js"
  },
  {
    id: "2-u01-h004", year: 2, unit: "Lineárna funkcia", unitOrder: 1,
    topic: "Opakovanie", lesson: "Hodina 4", lessonOrder: 4,
    time: "15–18 min", status: 'ready',
    type: "Retrieval → prepájanie → argumentácia → zošit",
    skills: ["lineárna funkcia", "reprezentácie", "argumentácia"],
    file: "modules/2-rocnik/linearna-funkcia/04-opakovanie.js"
  },
  {
    id: "2-u01-h005", year: 2, unit: "Lineárna funkcia", unitOrder: 1,
    topic: "Kontrolná písomná práca", lesson: "Hodina 5", lessonOrder: 5,
    time: "5–7 min + papier", status: 'ready',
    type: "Digitálne naladenie → samostatná papierová práca",
    skills: ["samostatnosť", "lineárna funkcia"],
    file: "modules/2-rocnik/linearna-funkcia/05-kontrolna-pisomna-praca.js"
  },

  // 2.02 · Funkcie – základné pojmy a vlastnosti funkcií
  {
    id: "2-u02-h006", year: 2, unit: "Funkcie – základné pojmy a vlastnosti funkcií", unitOrder: 2,
    topic: "Definičný obor a obor hodnôt funkcie, Graf funkcie, určenie definičného oboru a oboru hodnôt funkcie z grafu", lesson: "Hodina 6", lessonOrder: 6,
    time: "15–18 min", status: 'ready',
    type: "Zavedenie D(f), H(f) → graf → zápis",
    skills: ["definičný obor", "obor hodnôt", "graf"],
    file: "modules/2-rocnik/funkcie-zakladne-pojmy-a-vlastnosti/06-definicny-obor-a-obor-hodnot-funkcie-graf-funkcie-urcenie-definicneho-.js"
  },
  {
    id: "2-u02-h007", year: 2, unit: "Funkcie – základné pojmy a vlastnosti funkcií", unitOrder: 2,
    topic: "Párna a nepárna funkcia, Monotónnosť funkcie, extrémy funkcie na množine, Prostá funkcia, ohraničenosť", lesson: "Hodina 7", lessonOrder: 7,
    time: "15–18 min", status: 'ready',
    type: "Postupné zavádzanie vlastností → rozlíšenie → presný zápis",
    skills: ["párnosť", "monotónnosť", "extrémy", "prostosť", "ohraničenosť"],
    file: "modules/2-rocnik/funkcie-zakladne-pojmy-a-vlastnosti/07-parna-a-neparna-funkcia-monotonnost-funkcie-extremy-funkcie-na-mnozine.js"
  },
  {
    id: "2-u02-h008", year: 2, unit: "Funkcie – základné pojmy a vlastnosti funkcií", unitOrder: 2,
    topic: "Určovanie vlastností funkcie z grafu", lesson: "Hodina 8", lessonOrder: 8,
    time: "15–18 min", status: 'ready',
    type: "Analýza grafu → argumentácia → maturitný formát",
    skills: ["D(f)", "H(f)", "vlastnosti z grafu", "argumentácia"],
    file: "modules/2-rocnik/funkcie-zakladne-pojmy-a-vlastnosti/08-urcovanie-vlastnosti-funkcie-z-grafu.js"
  },
  {
    id: "2-u02-h009", year: 2, unit: "Funkcie – základné pojmy a vlastnosti funkcií", unitOrder: 2,
    topic: "Kontrolná písomná práca", lesson: "Hodina 9", lessonOrder: 9,
    time: "5–7 min + papier", status: 'ready',
    type: "Digitálne naladenie → samostatná papierová práca",
    skills: ["vlastnosti funkcie", "samostatnosť"],
    file: "modules/2-rocnik/funkcie-zakladne-pojmy-a-vlastnosti/09-kontrolna-pisomna-praca.js"
  },

  // 2.03 · Lineárne rovnice
  {"id": "2-u03-h013", "year": 2, "unit": "Lineárne rovnice", "unitOrder": 3, "topic": "Lineárne rovnice a ekvivalentné úpravy pri jej riešení", "lesson": "Hodina 13", "lessonOrder": 13, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/2-rocnik/linearne-rovnice/13-linearne-rovnice-a-ekvivalentne-upravy-pri-jej-rieseni.js"},
  {"id": "2-u03-h014", "year": 2, "unit": "Lineárne rovnice", "unitOrder": 3, "topic": "Lineárne rovnice s neznámou v menovateli", "lesson": "Hodina 14", "lessonOrder": 14, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/2-rocnik/linearne-rovnice/14-linearne-rovnice-s-neznamou-v-menovateli.js"},
  {"id": "2-u03-h015", "year": 2, "unit": "Lineárne rovnice", "unitOrder": 3, "topic": "Riešenie úloh", "lesson": "Hodina 15", "lessonOrder": 15, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/2-rocnik/linearne-rovnice/15-riesenie-uloh.js"},
  {"id": "2-u03-h016", "year": 2, "unit": "Lineárne rovnice", "unitOrder": 3, "topic": "Lineárne rovnice s absolútnou hodnotou", "lesson": "Hodina 16", "lessonOrder": 16, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/2-rocnik/linearne-rovnice/16-linearne-rovnice-s-absolutnou-hodnotou.js"},
  {"id": "2-u03-h017", "year": 2, "unit": "Lineárne rovnice", "unitOrder": 3, "topic": "Riešenie úloh", "lesson": "Hodina 17", "lessonOrder": 17, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/2-rocnik/linearne-rovnice/17-riesenie-uloh.js"},
  {"id": "2-u03-h018", "year": 2, "unit": "Lineárne rovnice", "unitOrder": 3, "topic": "Lineárne rovnice s parametrom", "lesson": "Hodina 18", "lessonOrder": 18, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/2-rocnik/linearne-rovnice/18-linearne-rovnice-s-parametrom.js"},
  {"id": "2-u03-h019", "year": 2, "unit": "Lineárne rovnice", "unitOrder": 3, "topic": "Riešenie úloh", "lesson": "Hodina 19", "lessonOrder": 19, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/2-rocnik/linearne-rovnice/19-riesenie-uloh.js"},
  {"id": "2-u03-h020", "year": 2, "unit": "Lineárne rovnice", "unitOrder": 3, "topic": "Sústava dvoch lineárnych rovníc s dvoma neznámymi - sčítacia, dosadzovacia a porovnávacia metóda", "lesson": "Hodina 20", "lessonOrder": 20, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/2-rocnik/linearne-rovnice/20-sustava-dvoch-linearnych-rovnic-s-dvoma-neznamymi-scitacia-dosadzovaci.js"},
  {"id": "2-u03-h021", "year": 2, "unit": "Lineárne rovnice", "unitOrder": 3, "topic": "Riešenie úloh", "lesson": "Hodina 21", "lessonOrder": 21, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/2-rocnik/linearne-rovnice/21-riesenie-uloh.js"},
  {"id": "2-u03-h022", "year": 2, "unit": "Lineárne rovnice", "unitOrder": 3, "topic": "Systematizácia učiva", "lesson": "Hodina 22", "lessonOrder": 22, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/2-rocnik/linearne-rovnice/22-systematizacia-uciva.js"},

  // 2.04 · Lineárne nerovnice
  {
    id: '2-u04-h024', year: 2, unit: "Lineárne nerovnice", unitOrder: 4,
    topic: "Lineárne nerovnice a ekvivalentné úpravy pri jej riešení", lesson: "Hodina 24", lessonOrder: 24,
    time: "cca 15 min", status: 'ready',
    type: "Pochopenie → overenie → zápis do zošita → vysvetlenie → záver",
    skills: ["riešenie","matematická komunikácia"],
    file: "modules/2-rocnik/linearne-nerovnice/24-linearne-nerovnice-a-ekvivalentne-upravy-pri-jej-rieseni.js"
  },
  {
    id: '2-u04-h025', year: 2, unit: "Lineárne nerovnice", unitOrder: 4,
    topic: "Lineárne nerovnice s neznámou v menovateli", lesson: "Hodina 25", lessonOrder: 25,
    time: "cca 15 min", status: 'ready',
    type: "Pochopenie → overenie → zápis do zošita → vysvetlenie → záver",
    skills: ["riešenie","matematická komunikácia"],
    file: "modules/2-rocnik/linearne-nerovnice/25-linearne-nerovnice-s-neznamou-v-menovateli.js"
  },
  {
    id: '2-u04-h026', year: 2, unit: "Lineárne nerovnice", unitOrder: 4,
    topic: "Riešenie úloh", lesson: "Hodina 26", lessonOrder: 26,
    time: "cca 15 min", status: 'ready',
    type: "Pochopenie → overenie → zápis do zošita → vysvetlenie → záver",
    skills: ["riešenie","matematická komunikácia"],
    file: "modules/2-rocnik/linearne-nerovnice/26-riesenie-uloh.js"
  },
  {
    id: '2-u04-h027', year: 2, unit: "Lineárne nerovnice", unitOrder: 4,
    topic: "Lineárne nerovnice s absolútnou hodnotou", lesson: "Hodina 27", lessonOrder: 27,
    time: "cca 15 min", status: 'ready',
    type: "Pochopenie → overenie → zápis do zošita → vysvetlenie → záver",
    skills: ["riešenie","matematická komunikácia"],
    file: "modules/2-rocnik/linearne-nerovnice/27-linearne-nerovnice-s-absolutnou-hodnotou.js"
  },
  {
    id: '2-u04-h028', year: 2, unit: "Lineárne nerovnice", unitOrder: 4,
    topic: "Riešenie úloh", lesson: "Hodina 28", lessonOrder: 28,
    time: "cca 15 min", status: 'ready',
    type: "Pochopenie → overenie → zápis do zošita → vysvetlenie → záver",
    skills: ["riešenie","matematická komunikácia"],
    file: "modules/2-rocnik/linearne-nerovnice/28-riesenie-uloh.js"
  },
  {
    id: '2-u04-h029', year: 2, unit: "Lineárne nerovnice", unitOrder: 4,
    topic: "Sústava lineárnych nerovníc s jednou neznámou", lesson: "Hodina 29", lessonOrder: 29,
    time: "cca 15 min", status: 'ready',
    type: "Pochopenie → overenie → zápis do zošita → vysvetlenie → záver",
    skills: ["riešenie","matematická komunikácia"],
    file: "modules/2-rocnik/linearne-nerovnice/29-sustava-linearnych-nerovnic-s-jednou-neznamou.js"
  },
  {
    id: '2-u04-h030', year: 2, unit: "Lineárne nerovnice", unitOrder: 4,
    topic: "Riešenie úloh", lesson: "Hodina 30", lessonOrder: 30,
    time: "cca 15 min", status: 'ready',
    type: "Pochopenie → overenie → zápis do zošita → vysvetlenie → záver",
    skills: ["riešenie","matematická komunikácia"],
    file: "modules/2-rocnik/linearne-nerovnice/30-riesenie-uloh.js"
  },
  {
    id: '2-u04-h031', year: 2, unit: "Lineárne nerovnice", unitOrder: 4,
    topic: "Systematizácia učiva", lesson: "Hodina 31", lessonOrder: 31,
    time: "cca 15 min", status: 'ready',
    type: "Pochopenie → overenie → zápis do zošita → vysvetlenie → záver",
    skills: ["riešenie","matematická komunikácia"],
    file: "modules/2-rocnik/linearne-nerovnice/31-systematizacia-uciva.js"
  },
  {
    id: '2-u04-h032', year: 2, unit: "Lineárne nerovnice", unitOrder: 4,
    topic: "Kontrolná písomná práca", lesson: "Hodina 32", lessonOrder: 32,
    time: "cca 15 min", status: 'ready',
    type: "Pochopenie → overenie → vysvetlenie → záver",
    skills: ["riešenie","matematická komunikácia"],
    file: "modules/2-rocnik/linearne-nerovnice/32-kontrolna-pisomna-praca.js"
  },

  // 2.05 · Základy geometrie trojuholníkov
  placeholder({ id: '2-u05-h033', year: 2, unit: "Základy geometrie trojuholníkov", unitOrder: 5, topic: "Zhodnosť a podobnosť trojuholníkov,", lesson: "Hodina 33", lessonOrder: 33, file: "modules/2-rocnik/zaklady-geometrie-trojuholnikov/33-zhodnost-a-podobnost-trojuholnikov.js" }),
  placeholder({ id: '2-u05-h034', year: 2, unit: "Základy geometrie trojuholníkov", unitOrder: 5, topic: "Klasifikácia a vlastnosti trojuholníkov", lesson: "Hodina 34", lessonOrder: 34, file: "modules/2-rocnik/zaklady-geometrie-trojuholnikov/34-klasifikacia-a-vlastnosti-trojuholnikov.js" }),
  placeholder({ id: '2-u05-h035', year: 2, unit: "Základy geometrie trojuholníkov", unitOrder: 5, topic: "Uhol a jeho veľkosť, Uhlová a oblúková miera", lesson: "Hodina 35", lessonOrder: 35, file: "modules/2-rocnik/zaklady-geometrie-trojuholnikov/35-uhol-a-jeho-velkost-uhlova-a-oblukova-miera.js" }),
  placeholder({ id: '2-u05-h036', year: 2, unit: "Základy geometrie trojuholníkov", unitOrder: 5, topic: "Prevody uhlov", lesson: "Hodina 36", lessonOrder: 36, file: "modules/2-rocnik/zaklady-geometrie-trojuholnikov/36-prevody-uhlov.js" }),
  placeholder({ id: '2-u05-h037', year: 2, unit: "Základy geometrie trojuholníkov", unitOrder: 5, topic: "Systematizácia učiva, previerka", lesson: "Hodina 37", lessonOrder: 37, file: "modules/2-rocnik/zaklady-geometrie-trojuholnikov/37-systematizacia-uciva-previerka.js" }),

  // 2.06 · Pravouhlý trojuholník a jeho vlastnosti
  placeholder({ id: '2-u06-h039', year: 2, unit: "Pravouhlý trojuholník a jeho vlastnosti", unitOrder: 6, topic: "Pravouhlý trojuholník - Pytagorova veta", lesson: "Hodina 39", lessonOrder: 39, file: "modules/2-rocnik/pravouhly-trojuholnik-a-jeho-vlastnosti/39-pravouhly-trojuholnik-pytagorova-veta.js" }),
  placeholder({ id: '2-u06-h040', year: 2, unit: "Pravouhlý trojuholník a jeho vlastnosti", unitOrder: 6, topic: "Pytagorova veta – aplikačné úlohy", lesson: "Hodina 40", lessonOrder: 40, file: "modules/2-rocnik/pravouhly-trojuholnik-a-jeho-vlastnosti/40-pytagorova-veta-aplikacne-ulohy.js" }),
  placeholder({ id: '2-u06-h041', year: 2, unit: "Pravouhlý trojuholník a jeho vlastnosti", unitOrder: 6, topic: "Euklidove vety", lesson: "Hodina 41", lessonOrder: 41, file: "modules/2-rocnik/pravouhly-trojuholnik-a-jeho-vlastnosti/41-euklidove-vety.js" }),
  placeholder({ id: '2-u06-h042', year: 2, unit: "Pravouhlý trojuholník a jeho vlastnosti", unitOrder: 6, topic: "Euklidove vety – súhrnné využitie", lesson: "Hodina 42", lessonOrder: 42, file: "modules/2-rocnik/pravouhly-trojuholnik-a-jeho-vlastnosti/42-euklidove-vety-suhrnne-vyuzitie.js" }),
  placeholder({ id: '2-u06-h043', year: 2, unit: "Pravouhlý trojuholník a jeho vlastnosti", unitOrder: 6, topic: "Konštrukcia úsečiek rôznych veľkostí", lesson: "Hodina 43", lessonOrder: 43, file: "modules/2-rocnik/pravouhly-trojuholnik-a-jeho-vlastnosti/43-konstrukcia-useciek-roznych-velkosti.js" }),
  placeholder({ id: '2-u06-h044', year: 2, unit: "Pravouhlý trojuholník a jeho vlastnosti", unitOrder: 6, topic: "Využitie Euklidových viet pri konštrukciách", lesson: "Hodina 44", lessonOrder: 44, file: "modules/2-rocnik/pravouhly-trojuholnik-a-jeho-vlastnosti/44-vyuzitie-euklidovych-viet-pri-konstrukciach.js" }),
  placeholder({ id: '2-u06-h045', year: 2, unit: "Pravouhlý trojuholník a jeho vlastnosti", unitOrder: 6, topic: "Opakovanie tematického celku", lesson: "Hodina 45", lessonOrder: 45, file: "modules/2-rocnik/pravouhly-trojuholnik-a-jeho-vlastnosti/45-opakovanie-tematickeho-celku.js" }),
  placeholder({ id: '2-u06-h046', year: 2, unit: "Pravouhlý trojuholník a jeho vlastnosti", unitOrder: 6, topic: "Písomná práca", lesson: "Hodina 46", lessonOrder: 46, file: "modules/2-rocnik/pravouhly-trojuholnik-a-jeho-vlastnosti/46-pisomna-praca.js" }),

  // 2.07 · Goniometrické funkcie ostrého uhla
  placeholder({ id: '2-u07-h048', year: 2, unit: "Goniometrické funkcie ostrého uhla", unitOrder: 7, topic: "Goniometrické funkcie – sínus, kosínus", lesson: "Hodina 48", lessonOrder: 48, file: "modules/2-rocnik/goniometricke-funkcie-ostreho-uhla/48-goniometricke-funkcie-sinus-kosinus.js" }),
  placeholder({ id: '2-u07-h049', year: 2, unit: "Goniometrické funkcie ostrého uhla", unitOrder: 7, topic: "Výpočty pomocou sínusu, kosínusu", lesson: "Hodina 49", lessonOrder: 49, file: "modules/2-rocnik/goniometricke-funkcie-ostreho-uhla/49-vypocty-pomocou-sinusu-kosinusu.js" }),
  placeholder({ id: '2-u07-h050', year: 2, unit: "Goniometrické funkcie ostrého uhla", unitOrder: 7, topic: "Goniometrické funkcie – tangens, kotangens", lesson: "Hodina 50", lessonOrder: 50, file: "modules/2-rocnik/goniometricke-funkcie-ostreho-uhla/50-goniometricke-funkcie-tangens-kotangens.js" }),
  placeholder({ id: '2-u07-h051', year: 2, unit: "Goniometrické funkcie ostrého uhla", unitOrder: 7, topic: "Riešenie pravouhlého trojuholníka", lesson: "Hodina 51", lessonOrder: 51, file: "modules/2-rocnik/goniometricke-funkcie-ostreho-uhla/51-riesenie-pravouhleho-trojuholnika.js" }),
  placeholder({ id: '2-u07-h052', year: 2, unit: "Goniometrické funkcie ostrého uhla", unitOrder: 7, topic: "Opakovanie tematického celku", lesson: "Hodina 52", lessonOrder: 52, file: "modules/2-rocnik/goniometricke-funkcie-ostreho-uhla/52-opakovanie-tematickeho-celku.js" }),
  placeholder({ id: '2-u07-h053', year: 2, unit: "Goniometrické funkcie ostrého uhla", unitOrder: 7, topic: "Písomná práca", lesson: "Hodina 53", lessonOrder: 53, file: "modules/2-rocnik/goniometricke-funkcie-ostreho-uhla/53-pisomna-praca.js" }),

  // 2.08 · Sínusová a kosínusová veta
  placeholder({ id: '2-u08-h054', year: 2, unit: "Sínusová a kosínusová veta", unitOrder: 8, topic: "Sínusová veta", lesson: "Hodina 54", lessonOrder: 54, file: "modules/2-rocnik/sinusova-a-kosinusova-veta/54-sinusova-veta.js" }),
  placeholder({ id: '2-u08-h055', year: 2, unit: "Sínusová a kosínusová veta", unitOrder: 8, topic: "Sínusová veta – aplikačné úlohy", lesson: "Hodina 55", lessonOrder: 55, file: "modules/2-rocnik/sinusova-a-kosinusova-veta/55-sinusova-veta-aplikacne-ulohy.js" }),
  placeholder({ id: '2-u08-h056', year: 2, unit: "Sínusová a kosínusová veta", unitOrder: 8, topic: "Kosínusová veta", lesson: "Hodina 56", lessonOrder: 56, file: "modules/2-rocnik/sinusova-a-kosinusova-veta/56-kosinusova-veta.js" }),
  placeholder({ id: '2-u08-h057', year: 2, unit: "Sínusová a kosínusová veta", unitOrder: 8, topic: "Kosínusová veta – aplikačné úlohy", lesson: "Hodina 57", lessonOrder: 57, file: "modules/2-rocnik/sinusova-a-kosinusova-veta/57-kosinusova-veta-aplikacne-ulohy.js" }),
  placeholder({ id: '2-u08-h058', year: 2, unit: "Sínusová a kosínusová veta", unitOrder: 8, topic: "Riešenie všeobecných trojuholníkov", lesson: "Hodina 58", lessonOrder: 58, file: "modules/2-rocnik/sinusova-a-kosinusova-veta/58-riesenie-vseobecnych-trojuholnikov.js" }),
  placeholder({ id: '2-u08-h059', year: 2, unit: "Sínusová a kosínusová veta", unitOrder: 8, topic: "Opakovanie", lesson: "Hodina 59", lessonOrder: 59, file: "modules/2-rocnik/sinusova-a-kosinusova-veta/59-opakovanie.js" }),
  placeholder({ id: '2-u08-h060', year: 2, unit: "Sínusová a kosínusová veta", unitOrder: 8, topic: "Písomná práca", lesson: "Hodina 60", lessonOrder: 60, file: "modules/2-rocnik/sinusova-a-kosinusova-veta/60-pisomna-praca.js" }),

  // 2.09 · Kvadratická funkcia a jej graf
  placeholder({ id: '2-u09-h063', year: 2, unit: "Kvadratická funkcia a jej graf", unitOrder: 9, topic: "Kvadratická funkcia – definícia a základné vlastnosti, Graf kvadratickej funkcie", lesson: "Hodina 63", lessonOrder: 63, file: "modules/2-rocnik/kvadraticka-funkcia-a-jej-gaf/63-kvadraticka-funkcia-definicia-a-zakladne-vlastnosti-graf-kvadratickej-.js" }),
  placeholder({ id: '2-u09-h064', year: 2, unit: "Kvadratická funkcia a jej graf", unitOrder: 9, topic: "Vrchol paraboly", lesson: "Hodina 64", lessonOrder: 64, file: "modules/2-rocnik/kvadraticka-funkcia-a-jej-gaf/64-vrchol-paraboly.js" }),
  placeholder({ id: '2-u09-h065', year: 2, unit: "Kvadratická funkcia a jej graf", unitOrder: 9, topic: "Hľadanie predpisu kvadratickej funkcie z grafu", lesson: "Hodina 65", lessonOrder: 65, file: "modules/2-rocnik/kvadraticka-funkcia-a-jej-gaf/65-hladanie-predpisu-kvadratickej-funkcie-z-grafu.js" }),
  placeholder({ id: '2-u09-h066', year: 2, unit: "Kvadratická funkcia a jej graf", unitOrder: 9, topic: "Systematizácia učiva", lesson: "Hodina 66", lessonOrder: 66, file: "modules/2-rocnik/kvadraticka-funkcia-a-jej-gaf/66-systematizacia-uciva.js" }),
  placeholder({ id: '2-u09-h067', year: 2, unit: "Kvadratická funkcia a jej graf", unitOrder: 9, topic: "Písomná práca", lesson: "Hodina 67", lessonOrder: 67, file: "modules/2-rocnik/kvadraticka-funkcia-a-jej-gaf/67-pisomna-praca.js" }),

  // 2.10 · Kvadratické rovnice - základné typy
  placeholder({ id: '2-u10-h068', year: 2, unit: "Kvadratické rovnice - základné typy", unitOrder: 10, topic: "Rýdzo kvadratické rovnice", lesson: "Hodina 68", lessonOrder: 68, file: "modules/2-rocnik/kvadraticke-rovnice-zakladne-typy/68-rydzo-kvadraticke-rovnice.js" }),
  placeholder({ id: '2-u10-h069', year: 2, unit: "Kvadratické rovnice - základné typy", unitOrder: 10, topic: "Kvadratické rovnice bez lineárneho člena", lesson: "Hodina 69", lessonOrder: 69, file: "modules/2-rocnik/kvadraticke-rovnice-zakladne-typy/69-kvadraticke-rovnice-bez-linearneho-clena.js" }),
  placeholder({ id: '2-u10-h070', year: 2, unit: "Kvadratické rovnice - základné typy", unitOrder: 10, topic: "Kvadratické rovnice bez absolútneho člena", lesson: "Hodina 70", lessonOrder: 70, file: "modules/2-rocnik/kvadraticke-rovnice-zakladne-typy/70-kvadraticke-rovnice-bez-absolutneho-clena.js" }),
  placeholder({ id: '2-u10-h071', year: 2, unit: "Kvadratické rovnice - základné typy", unitOrder: 10, topic: "Úplná kvadratická rovnica", lesson: "Hodina 71", lessonOrder: 71, file: "modules/2-rocnik/kvadraticke-rovnice-zakladne-typy/71-uplna-kvadraticka-rovnica.js" }),
  placeholder({ id: '2-u10-h072', year: 2, unit: "Kvadratické rovnice - základné typy", unitOrder: 10, topic: "Súhrnné precvičovanie kvadratických rovníc", lesson: "Hodina 72", lessonOrder: 72, file: "modules/2-rocnik/kvadraticke-rovnice-zakladne-typy/72-suhrnne-precvicovanie-kvadratickych-rovnic.js" }),
  placeholder({ id: '2-u10-h073', year: 2, unit: "Kvadratické rovnice - základné typy", unitOrder: 10, topic: "Opakovanie", lesson: "Hodina 73", lessonOrder: 73, file: "modules/2-rocnik/kvadraticke-rovnice-zakladne-typy/73-opakovanie.js" }),
  placeholder({ id: '2-u10-h074', year: 2, unit: "Kvadratické rovnice - základné typy", unitOrder: 10, topic: "Písomná práca", lesson: "Hodina 74", lessonOrder: 74, file: "modules/2-rocnik/kvadraticke-rovnice-zakladne-typy/74-pisomna-praca.js" }),

  // 2.11 · Kvadratické rovnice – vzťahy a algebraické úpravy
  placeholder({ id: '2-u11-h075', year: 2, unit: "Kvadratické rovnice – vzťahy a algebraické úpravy", unitOrder: 11, topic: "Vzťahy medzi koreňmi a koeficientmi kvadratickej rovnice", lesson: "Hodina 75", lessonOrder: 75, file: "modules/2-rocnik/kvadraticke-rovnice-vztahy-a-algebraicke-upravy/75-vztahy-medzi-korenmi-a-koeficientmi-kvadratickej-rovnice.js" }),
  placeholder({ id: '2-u11-h076', year: 2, unit: "Kvadratické rovnice – vzťahy a algebraické úpravy", unitOrder: 11, topic: "Využitie Vietových vzťahov pri riešení rovníc", lesson: "Hodina 76", lessonOrder: 76, file: "modules/2-rocnik/kvadraticke-rovnice-vztahy-a-algebraicke-upravy/76-vyuzitie-vietovych-vztahov-pri-rieseni-rovnic.js" }),
  placeholder({ id: '2-u11-h077', year: 2, unit: "Kvadratické rovnice – vzťahy a algebraické úpravy", unitOrder: 11, topic: "Rozklad kvadratických trojčlenov na súčin", lesson: "Hodina 77", lessonOrder: 77, file: "modules/2-rocnik/kvadraticke-rovnice-vztahy-a-algebraicke-upravy/77-rozklad-kvadratickych-trojclenov-na-sucin.js" }),
  placeholder({ id: '2-u11-h078', year: 2, unit: "Kvadratické rovnice – vzťahy a algebraické úpravy", unitOrder: 11, topic: "Úprava algebraických výrazov rozkladom", lesson: "Hodina 78", lessonOrder: 78, file: "modules/2-rocnik/kvadraticke-rovnice-vztahy-a-algebraicke-upravy/78-uprava-algebraickych-vyrazov-rozkladom.js" }),
  placeholder({ id: '2-u11-h079', year: 2, unit: "Kvadratické rovnice – vzťahy a algebraické úpravy", unitOrder: 11, topic: "Súhrnné precvičovanie", lesson: "Hodina 79", lessonOrder: 79, file: "modules/2-rocnik/kvadraticke-rovnice-vztahy-a-algebraicke-upravy/79-suhrnne-precvicovanie.js" }),
  placeholder({ id: '2-u11-h080', year: 2, unit: "Kvadratické rovnice – vzťahy a algebraické úpravy", unitOrder: 11, topic: "Systematizácia učiva", lesson: "Hodina 80", lessonOrder: 80, file: "modules/2-rocnik/kvadraticke-rovnice-vztahy-a-algebraicke-upravy/80-systematizacia-uciva.js" }),
  placeholder({ id: '2-u11-h081', year: 2, unit: "Kvadratické rovnice – vzťahy a algebraické úpravy", unitOrder: 11, topic: "Písomná práca", lesson: "Hodina 81", lessonOrder: 81, file: "modules/2-rocnik/kvadraticke-rovnice-vztahy-a-algebraicke-upravy/81-pisomna-praca.js" }),

  // 2.12 · Slovné úlohy a aplikácie kvadratických rovníc
  placeholder({ id: '2-u12-h082', year: 2, unit: "Slovné úlohy a aplikácie kvadratických rovníc", unitOrder: 12, topic: "Úvod do slovných úloh - jednoduché slovné úlohy", lesson: "Hodina 82", lessonOrder: 82, file: "modules/2-rocnik/slovne-ulohy-a-aplikacie-kvadratickych-rovnic/82-uvod-do-slovnych-uloh-jednoduche-slovne-ulohy.js" }),
  placeholder({ id: '2-u12-h083', year: 2, unit: "Slovné úlohy a aplikácie kvadratických rovníc", unitOrder: 12, topic: "Slovné úlohy o pohybe a práci - zostavenie a riešenie kvadratickej rovnice", lesson: "Hodina 83", lessonOrder: 83, file: "modules/2-rocnik/slovne-ulohy-a-aplikacie-kvadratickych-rovnic/83-slovne-ulohy-o-pohybe-a-praci-zostavenie-a-riesenie-kvadratickej-rovni.js" }),
  placeholder({ id: '2-u12-h084', year: 2, unit: "Slovné úlohy a aplikácie kvadratických rovníc", unitOrder: 12, topic: "Slovné úlohy z praxe: Vekové úlohy, Ekonomické a technické úlohy, Kombinované aplikačné príklady", lesson: "Hodina 84", lessonOrder: 84, file: "modules/2-rocnik/slovne-ulohy-a-aplikacie-kvadratickych-rovnic/84-slovne-ulohy-z-praxe-vekove-ulohy-ekonomicke-a-technicke-ulohy-kombino.js" }),
  placeholder({ id: '2-u12-h085', year: 2, unit: "Slovné úlohy a aplikácie kvadratických rovníc", unitOrder: 12, topic: "Súhrnné riešenie slovných úloh", lesson: "Hodina 85", lessonOrder: 85, file: "modules/2-rocnik/slovne-ulohy-a-aplikacie-kvadratickych-rovnic/85-suhrnne-riesenie-slovnych-uloh.js" }),
  placeholder({ id: '2-u12-h086', year: 2, unit: "Slovné úlohy a aplikácie kvadratických rovníc", unitOrder: 12, topic: "Kontrolná písomná práca", lesson: "Hodina 86", lessonOrder: 86, file: "modules/2-rocnik/slovne-ulohy-a-aplikacie-kvadratickych-rovnic/86-kontrolna-pisomna-praca.js" }),

  // 2.13 · Kvadratické nerovnice
  placeholder({ id: '2-u13-h087', year: 2, unit: "Kvadratické nerovnice", unitOrder: 13, topic: "Riešenie kvadratických nerovníc výpočtom", lesson: "Hodina 87", lessonOrder: 87, file: "modules/2-rocnik/kvadraticke-nerovnice/87-riesenie-kvadratickych-nerovnic-vypoctom.js" }),
  placeholder({ id: '2-u13-h088', year: 2, unit: "Kvadratické nerovnice", unitOrder: 13, topic: "Riešenie kvadratických nerovníc výpočtom – precvičovanie", lesson: "Hodina 88", lessonOrder: 88, file: "modules/2-rocnik/kvadraticke-nerovnice/88-riesenie-kvadratickych-nerovnic-vypoctom-precvicovanie.js" }),
  placeholder({ id: '2-u13-h089', year: 2, unit: "Kvadratické nerovnice", unitOrder: 13, topic: "Riešenie kvadratických nerovníc grafickou metódou", lesson: "Hodina 89", lessonOrder: 89, file: "modules/2-rocnik/kvadraticke-nerovnice/89-riesenie-kvadratickych-nerovnic-grafickou-metodou.js" }),
  placeholder({ id: '2-u13-h090', year: 2, unit: "Kvadratické nerovnice", unitOrder: 13, topic: "Kvadratické rovnice s parametrom", lesson: "Hodina 90", lessonOrder: 90, file: "modules/2-rocnik/kvadraticke-nerovnice/90-kvadraticke-rovnice-s-parametrom.js" }),
  placeholder({ id: '2-u13-h091', year: 2, unit: "Kvadratické nerovnice", unitOrder: 13, topic: "Kvadratické rovnice s parametrom - precvičovanie", lesson: "Hodina 91", lessonOrder: 91, file: "modules/2-rocnik/kvadraticke-nerovnice/91-kvadraticke-rovnice-s-parametrom-precvicovanie.js" }),
  placeholder({ id: '2-u13-h092', year: 2, unit: "Kvadratické nerovnice", unitOrder: 13, topic: "Súhrnné precvičovanie", lesson: "Hodina 92", lessonOrder: 92, file: "modules/2-rocnik/kvadraticke-nerovnice/92-suhrnne-precvicovanie.js" }),
  placeholder({ id: '2-u13-h093', year: 2, unit: "Kvadratické nerovnice", unitOrder: 13, topic: "Kontrolná písomná práca", lesson: "Hodina 93", lessonOrder: 93, file: "modules/2-rocnik/kvadraticke-nerovnice/93-kontrolna-pisomna-praca.js" }),

  // 2.14 · Iracionálne rovnice
  placeholder({ id: '2-u14-h095', year: 2, unit: "Iracionálne rovnice", unitOrder: 14, topic: "Základy iracionálnych rovníc", lesson: "Hodina 95", lessonOrder: 95, file: "modules/2-rocnik/iracionalne-rovnice/95-zaklady-iracionalnych-rovnic.js" }),
  placeholder({ id: '2-u14-h096', year: 2, unit: "Iracionálne rovnice", unitOrder: 14, topic: "Zložitejšie typy a substitúcia", lesson: "Hodina 96", lessonOrder: 96, file: "modules/2-rocnik/iracionalne-rovnice/96-zlozitejsie-typy-a-substitucia.js" }),
  placeholder({ id: '2-u14-h097', year: 2, unit: "Iracionálne rovnice", unitOrder: 14, topic: "Slovné úlohy (Geometria a fyzika)", lesson: "Hodina 97", lessonOrder: 97, file: "modules/2-rocnik/iracionalne-rovnice/97-slovne-ulohy-geometria-a-fyzika.js" }),
  placeholder({ id: '2-u14-h098', year: 2, unit: "Iracionálne rovnice", unitOrder: 14, topic: "Slovné úlohy (Praktické a reálne kontexty)", lesson: "Hodina 98", lessonOrder: 98, file: "modules/2-rocnik/iracionalne-rovnice/98-slovne-ulohy-prakticke-a-realne-kontexty.js" }),
  placeholder({ id: '2-u14-h099', year: 2, unit: "Iracionálne rovnice", unitOrder: 14, topic: "Opakovanie a preverenie vedomostí", lesson: "Hodina 99", lessonOrder: 99, file: "modules/2-rocnik/iracionalne-rovnice/99-opakovanie-a-preverenie-vedomosti.js" }),
  // ==================== 3. ROČNÍK ====================

  // 3.01 · Goniometrické funkcie, goniometrické, rovnice
  {
    id: '3-u01-h001', year: 3, unit: "Goniometrické funkcie, goniometrické, rovnice", unitOrder: 1,
    topic: "Zobrazenie množiny reálnych čísel do jednotkovej kružnice", lesson: 'Hodina 1', lessonOrder: 1,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["goniometria", "reprezentácie", "matematická komunikácia"],
    file: "modules/3-rocnik/goniometricke-funkcie-a-rovnice/01-zobrazenie-mnoziny-realnych-cisel-do-jednotkovej-kruznice.js"
  },
  {
    id: '3-u01-h002', year: 3, unit: "Goniometrické funkcie, goniometrické, rovnice", unitOrder: 1,
    topic: "Funkcia sin x, graf, vlastnosti", lesson: 'Hodina 2', lessonOrder: 2,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["goniometria", "reprezentácie", "matematická komunikácia"],
    file: "modules/3-rocnik/goniometricke-funkcie-a-rovnice/02-funkcia-sin-x-graf-vlastnosti.js"
  },
  {
    id: '3-u01-h003', year: 3, unit: "Goniometrické funkcie, goniometrické, rovnice", unitOrder: 1,
    topic: "Funkcia cos x, graf, vlastnosti", lesson: 'Hodina 3', lessonOrder: 3,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["goniometria", "reprezentácie", "matematická komunikácia"],
    file: "modules/3-rocnik/goniometricke-funkcie-a-rovnice/03-funkcia-cos-x-graf-vlastnosti.js"
  },
  {
    id: '3-u01-h004', year: 3, unit: "Goniometrické funkcie, goniometrické, rovnice", unitOrder: 1,
    topic: "Funkcia tg x, graf, vlastnosti", lesson: 'Hodina 4', lessonOrder: 4,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["goniometria", "reprezentácie", "matematická komunikácia"],
    file: "modules/3-rocnik/goniometricke-funkcie-a-rovnice/04-funkcia-tg-x-graf-vlastnosti.js"
  },
  {
    id: '3-u01-h005', year: 3, unit: "Goniometrické funkcie, goniometrické, rovnice", unitOrder: 1,
    topic: "Funkcia cotg x, graf, vlastnosti", lesson: 'Hodina 5', lessonOrder: 5,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["goniometria", "reprezentácie", "matematická komunikácia"],
    file: "modules/3-rocnik/goniometricke-funkcie-a-rovnice/05-funkcia-cotg-x-graf-vlastnosti.js"
  },
  {
    id: '3-u01-h006', year: 3, unit: "Goniometrické funkcie, goniometrické, rovnice", unitOrder: 1,
    topic: "Zložené goniometrické funkcie sin x a cos x", lesson: 'Hodina 6', lessonOrder: 6,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["goniometria", "reprezentácie", "matematická komunikácia"],
    file: "modules/3-rocnik/goniometricke-funkcie-a-rovnice/06-zlozene-goniometricke-funkcie-sin-x-a-cos-x.js"
  },
  {
    id: '3-u01-h007', year: 3, unit: "Goniometrické funkcie, goniometrické, rovnice", unitOrder: 1,
    topic: "Grafy goniometrických funkcií – precvičovanie", lesson: 'Hodina 7', lessonOrder: 7,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["goniometria", "reprezentácie", "matematická komunikácia"],
    file: "modules/3-rocnik/goniometricke-funkcie-a-rovnice/07-grafy-goniometrickych-funkcii-precvicovanie.js"
  },
  {
    id: '3-u01-h008', year: 3, unit: "Goniometrické funkcie, goniometrické, rovnice", unitOrder: 1,
    topic: "Kontrolná písomná práca", lesson: 'Hodina 8', lessonOrder: 8,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["goniometria", "reprezentácie", "matematická komunikácia"],
    file: "modules/3-rocnik/goniometricke-funkcie-a-rovnice/08-kontrolna-pisomna-praca.js"
  },
  {
    id: '3-u01-h009', year: 3, unit: "Goniometrické funkcie, goniometrické, rovnice", unitOrder: 1,
    topic: "Základné goniometrické vzorce", lesson: 'Hodina 9', lessonOrder: 9,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["goniometria", "reprezentácie", "matematická komunikácia"],
    file: "modules/3-rocnik/goniometricke-funkcie-a-rovnice/09-zakladne-goniometricke-vzorce.js"
  },
  {
    id: '3-u01-h010', year: 3, unit: "Goniometrické funkcie, goniometrické, rovnice", unitOrder: 1,
    topic: "Súčtové vzorce", lesson: 'Hodina 10', lessonOrder: 10,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["goniometria", "reprezentácie", "matematická komunikácia"],
    file: "modules/3-rocnik/goniometricke-funkcie-a-rovnice/10-suctove-vzorce.js"
  },
  {
    id: '3-u01-h011', year: 3, unit: "Goniometrické funkcie, goniometrické, rovnice", unitOrder: 1,
    topic: "Vzorce pre dvojnásobný uhol", lesson: 'Hodina 11', lessonOrder: 11,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["goniometria", "reprezentácie", "matematická komunikácia"],
    file: "modules/3-rocnik/goniometricke-funkcie-a-rovnice/11-vzorce-pre-dvojnasobny-uhol.js"
  },
  {
    id: '3-u01-h012', year: 3, unit: "Goniometrické funkcie, goniometrické, rovnice", unitOrder: 1,
    topic: "Súčet a rozdiel funkcií rôznych hodnôt", lesson: 'Hodina 12', lessonOrder: 12,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["goniometria", "reprezentácie", "matematická komunikácia"],
    file: "modules/3-rocnik/goniometricke-funkcie-a-rovnice/12-sucet-a-rozdiel-funkcii-roznych-hodnot.js"
  },
  {
    id: '3-u01-h013', year: 3, unit: "Goniometrické funkcie, goniometrické, rovnice", unitOrder: 1,
    topic: "Úprava goniometrických výrazov", lesson: 'Hodina 13', lessonOrder: 13,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["goniometria", "reprezentácie", "matematická komunikácia"],
    file: "modules/3-rocnik/goniometricke-funkcie-a-rovnice/13-uprava-goniometrickych-vyrazov.js"
  },
  {
    id: '3-u01-h014', year: 3, unit: "Goniometrické funkcie, goniometrické, rovnice", unitOrder: 1,
    topic: "Jednoduché goniometrické rovnice", lesson: 'Hodina 14', lessonOrder: 14,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["goniometria", "reprezentácie", "matematická komunikácia"],
    file: "modules/3-rocnik/goniometricke-funkcie-a-rovnice/14-jednoduche-goniometricke-rovnice.js"
  },
  {
    id: '3-u01-h015', year: 3, unit: "Goniometrické funkcie, goniometrické, rovnice", unitOrder: 1,
    topic: "Riešenie úloh", lesson: 'Hodina 15', lessonOrder: 15,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["goniometria", "reprezentácie", "matematická komunikácia"],
    file: "modules/3-rocnik/goniometricke-funkcie-a-rovnice/15-riesenie-uloh.js"
  },
  {
    id: '3-u01-h016', year: 3, unit: "Goniometrické funkcie, goniometrické, rovnice", unitOrder: 1,
    topic: "Goniometrické rovnice", lesson: 'Hodina 16', lessonOrder: 16,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["goniometria", "reprezentácie", "matematická komunikácia"],
    file: "modules/3-rocnik/goniometricke-funkcie-a-rovnice/16-goniometricke-rovnice.js"
  },
  {
    id: '3-u01-h017', year: 3, unit: "Goniometrické funkcie, goniometrické, rovnice", unitOrder: 1,
    topic: "Riešenie goniometrických rovníc", lesson: 'Hodina 17', lessonOrder: 17,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["goniometria", "reprezentácie", "matematická komunikácia"],
    file: "modules/3-rocnik/goniometricke-funkcie-a-rovnice/17-riesenie-goniometrickych-rovnic.js"
  },
  {
    id: '3-u01-h018', year: 3, unit: "Goniometrické funkcie, goniometrické, rovnice", unitOrder: 1,
    topic: "Riešenie goniometrických rovníc", lesson: 'Hodina 18', lessonOrder: 18,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["goniometria", "reprezentácie", "matematická komunikácia"],
    file: "modules/3-rocnik/goniometricke-funkcie-a-rovnice/18-riesenie-goniometrickych-rovnic.js"
  },
  {
    id: '3-u01-h019', year: 3, unit: "Goniometrické funkcie, goniometrické, rovnice", unitOrder: 1,
    topic: "Opakovanie", lesson: 'Hodina 19', lessonOrder: 19,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["goniometria", "reprezentácie", "matematická komunikácia"],
    file: "modules/3-rocnik/goniometricke-funkcie-a-rovnice/19-opakovanie.js"
  },
  {
    id: '3-u01-h020', year: 3, unit: "Goniometrické funkcie, goniometrické, rovnice", unitOrder: 1,
    topic: "Kontrolná písomná práca", lesson: 'Hodina 20', lessonOrder: 20,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["goniometria", "reprezentácie", "matematická komunikácia"],
    file: "modules/3-rocnik/goniometricke-funkcie-a-rovnice/20-kontrolna-pisomna-praca.js"
  },

  // 3.02 · Planimetria
  {
    id: '3-u02-h022', year: 3, unit: "Planimetria", unitOrder: 2,
    topic: "Trojuholník", lesson: 'Hodina 22', lessonOrder: 22,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["planimetria", "modelovanie", "matematická komunikácia"],
    file: "modules/3-rocnik/planimetria/22-trojuholnik.js"
  },
  {
    id: '3-u02-h023', year: 3, unit: "Planimetria", unitOrder: 2,
    topic: "Obvod a obsah trojuholníka", lesson: 'Hodina 23', lessonOrder: 23,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["planimetria", "modelovanie", "matematická komunikácia"],
    file: "modules/3-rocnik/planimetria/23-obvod-a-obsah-trojuholnika.js"
  },
  {
    id: '3-u02-h024', year: 3, unit: "Planimetria", unitOrder: 2,
    topic: "Riešenie úloh", lesson: 'Hodina 24', lessonOrder: 24,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["planimetria", "modelovanie", "matematická komunikácia"],
    file: "modules/3-rocnik/planimetria/24-riesenie-uloh.js"
  },
  {
    id: '3-u02-h025', year: 3, unit: "Planimetria", unitOrder: 2,
    topic: "Štvoruholníky", lesson: 'Hodina 25', lessonOrder: 25,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["planimetria", "modelovanie", "matematická komunikácia"],
    file: "modules/3-rocnik/planimetria/25-stvoruholniky.js"
  },
  {
    id: '3-u02-h026', year: 3, unit: "Planimetria", unitOrder: 2,
    topic: "Obvod a obsah štvorca", lesson: 'Hodina 26', lessonOrder: 26,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["planimetria", "modelovanie", "matematická komunikácia"],
    file: "modules/3-rocnik/planimetria/26-obvod-a-obsah-stvorca.js"
  },
  {
    id: '3-u02-h027', year: 3, unit: "Planimetria", unitOrder: 2,
    topic: "Obvod a obsah obdĺžnika", lesson: 'Hodina 27', lessonOrder: 27,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["planimetria", "modelovanie", "matematická komunikácia"],
    file: "modules/3-rocnik/planimetria/27-obvod-a-obsah-obdlznika.js"
  },
  {
    id: '3-u02-h028', year: 3, unit: "Planimetria", unitOrder: 2,
    topic: "Riešenie úloh", lesson: 'Hodina 28', lessonOrder: 28,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["planimetria", "modelovanie", "matematická komunikácia"],
    file: "modules/3-rocnik/planimetria/28-riesenie-uloh.js"
  },
  {
    id: '3-u02-h029', year: 3, unit: "Planimetria", unitOrder: 2,
    topic: "Obvod a obsah lichobežníka", lesson: 'Hodina 29', lessonOrder: 29,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["planimetria", "modelovanie", "matematická komunikácia"],
    file: "modules/3-rocnik/planimetria/29-obvod-a-obsah-lichobeznika.js"
  },
  {
    id: '3-u02-h030', year: 3, unit: "Planimetria", unitOrder: 2,
    topic: "Riešenie úloh", lesson: 'Hodina 30', lessonOrder: 30,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["planimetria", "modelovanie", "matematická komunikácia"],
    file: "modules/3-rocnik/planimetria/30-riesenie-uloh.js"
  },
  {
    id: '3-u02-h031', year: 3, unit: "Planimetria", unitOrder: 2,
    topic: "Obvod a obsah kosoštvorca", lesson: 'Hodina 31', lessonOrder: 31,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["planimetria", "modelovanie", "matematická komunikácia"],
    file: "modules/3-rocnik/planimetria/31-obvod-a-obsah-kosostvorca.js"
  },
  {
    id: '3-u02-h032', year: 3, unit: "Planimetria", unitOrder: 2,
    topic: "Obvod a obsah kosodĺžnika", lesson: 'Hodina 32', lessonOrder: 32,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["planimetria", "modelovanie", "matematická komunikácia"],
    file: "modules/3-rocnik/planimetria/32-obvod-a-obsah-kosodlznika.js"
  },
  {
    id: '3-u02-h033', year: 3, unit: "Planimetria", unitOrder: 2,
    topic: "Riešenie úloh", lesson: 'Hodina 33', lessonOrder: 33,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["planimetria", "modelovanie", "matematická komunikácia"],
    file: "modules/3-rocnik/planimetria/33-riesenie-uloh.js"
  },
  {
    id: '3-u02-h034', year: 3, unit: "Planimetria", unitOrder: 2,
    topic: "Obvod a obsah mnohouholníka", lesson: 'Hodina 34', lessonOrder: 34,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["planimetria", "modelovanie", "matematická komunikácia"],
    file: "modules/3-rocnik/planimetria/34-obvod-a-obsah-mnohouholnika.js"
  },
  {
    id: '3-u02-h035', year: 3, unit: "Planimetria", unitOrder: 2,
    topic: "Riešenie úloh", lesson: 'Hodina 35', lessonOrder: 35,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["planimetria", "modelovanie", "matematická komunikácia"],
    file: "modules/3-rocnik/planimetria/35-riesenie-uloh.js"
  },
  {
    id: '3-u02-h036', year: 3, unit: "Planimetria", unitOrder: 2,
    topic: "Obvod a obsah kruhu a jeho častí", lesson: 'Hodina 36', lessonOrder: 36,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["planimetria", "modelovanie", "matematická komunikácia"],
    file: "modules/3-rocnik/planimetria/36-obvod-a-obsah-kruhu-a-jeho-casti.js"
  },
  {
    id: '3-u02-h037', year: 3, unit: "Planimetria", unitOrder: 2,
    topic: "Riešenie úloh", lesson: 'Hodina 37', lessonOrder: 37,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["planimetria", "modelovanie", "matematická komunikácia"],
    file: "modules/3-rocnik/planimetria/37-riesenie-uloh.js"
  },
  {
    id: '3-u02-h038', year: 3, unit: "Planimetria", unitOrder: 2,
    topic: "Riešenie praktických úloh", lesson: 'Hodina 38', lessonOrder: 38,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["planimetria", "modelovanie", "matematická komunikácia"],
    file: "modules/3-rocnik/planimetria/38-riesenie-praktickych-uloh.js"
  },
  {
    id: '3-u02-h039', year: 3, unit: "Planimetria", unitOrder: 2,
    topic: "Systematizácia učiva", lesson: 'Hodina 39', lessonOrder: 39,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["planimetria", "modelovanie", "matematická komunikácia"],
    file: "modules/3-rocnik/planimetria/39-systematizacia-uciva.js"
  },
  {
    id: '3-u02-h040', year: 3, unit: "Planimetria", unitOrder: 2,
    topic: "Kontrolná písomná práca", lesson: 'Hodina 40', lessonOrder: 40,
    time: '18–24 min', status: 'ready',
    type: 'Význam → vizualizácia → pracovný zápis → čistý zápis → overenie',
    skills: ["planimetria", "modelovanie", "matematická komunikácia"],
    file: "modules/3-rocnik/planimetria/40-kontrolna-pisomna-praca.js"
  },

  // 3.03 · Stereometria metrické úlohy
  {"id": "3-u03-h041", "year": 3, "unit": "Stereometria metrické úlohy", "unitOrder": 3, "topic": "Povrch a objem - kocka", "lesson": "Hodina 41", "lessonOrder": 41, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/3-rocnik/stereometria-metricke-ulohy/41-povrch-a-objem-kocka.js"},
  {"id": "3-u03-h042", "year": 3, "unit": "Stereometria metrické úlohy", "unitOrder": 3, "topic": "Povrch a objem - kváder", "lesson": "Hodina 42", "lessonOrder": 42, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/3-rocnik/stereometria-metricke-ulohy/42-povrch-a-objem-kvader.js"},
  {"id": "3-u03-h043", "year": 3, "unit": "Stereometria metrické úlohy", "unitOrder": 3, "topic": "Povrch a objem – hranol", "lesson": "Hodina 43", "lessonOrder": 43, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/3-rocnik/stereometria-metricke-ulohy/43-povrch-a-objem-hranol.js"},
  {"id": "3-u03-h044", "year": 3, "unit": "Stereometria metrické úlohy", "unitOrder": 3, "topic": "Povrch a objem – valec", "lesson": "Hodina 44", "lessonOrder": 44, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/3-rocnik/stereometria-metricke-ulohy/44-povrch-a-objem-valec.js"},
  {"id": "3-u03-h045", "year": 3, "unit": "Stereometria metrické úlohy", "unitOrder": 3, "topic": "Riešenie úloh", "lesson": "Hodina 45", "lessonOrder": 45, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/3-rocnik/stereometria-metricke-ulohy/45-riesenie-uloh.js"},
  {"id": "3-u03-h046", "year": 3, "unit": "Stereometria metrické úlohy", "unitOrder": 3, "topic": "Povrch a objem kužeľa", "lesson": "Hodina 46", "lessonOrder": 46, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/3-rocnik/stereometria-metricke-ulohy/46-povrch-a-objem-kuzela.js"},
  {"id": "3-u03-h047", "year": 3, "unit": "Stereometria metrické úlohy", "unitOrder": 3, "topic": "Povrch a objem ihlana", "lesson": "Hodina 47", "lessonOrder": 47, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/3-rocnik/stereometria-metricke-ulohy/47-povrch-a-objem-ihlana.js"},
  {"id": "3-u03-h048", "year": 3, "unit": "Stereometria metrické úlohy", "unitOrder": 3, "topic": "Riešenie úloh", "lesson": "Hodina 48", "lessonOrder": 48, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/3-rocnik/stereometria-metricke-ulohy/48-riesenie-uloh.js"},
  {"id": "3-u03-h049", "year": 3, "unit": "Stereometria metrické úlohy", "unitOrder": 3, "topic": "Povrch a objem zrezaného kužeľa", "lesson": "Hodina 49", "lessonOrder": 49, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/3-rocnik/stereometria-metricke-ulohy/49-povrch-a-objem-zrezaneho-kuzela.js"},
  {"id": "3-u03-h050", "year": 3, "unit": "Stereometria metrické úlohy", "unitOrder": 3, "topic": "Riešenie úloh", "lesson": "Hodina 50", "lessonOrder": 50, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/3-rocnik/stereometria-metricke-ulohy/50-riesenie-uloh.js"},
  {"id": "3-u03-h051", "year": 3, "unit": "Stereometria metrické úlohy", "unitOrder": 3, "topic": "Povrch a objem zrezaného ihlana", "lesson": "Hodina 51", "lessonOrder": 51, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/3-rocnik/stereometria-metricke-ulohy/51-povrch-a-objem-zrezaneho-ihlana.js"},
  {"id": "3-u03-h052", "year": 3, "unit": "Stereometria metrické úlohy", "unitOrder": 3, "topic": "Riešenie úloh", "lesson": "Hodina 52", "lessonOrder": 52, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/3-rocnik/stereometria-metricke-ulohy/52-riesenie-uloh.js"},
  {"id": "3-u03-h053", "year": 3, "unit": "Stereometria metrické úlohy", "unitOrder": 3, "topic": "Povrch a objem gule a jej častí", "lesson": "Hodina 53", "lessonOrder": 53, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/3-rocnik/stereometria-metricke-ulohy/53-povrch-a-objem-gule-a-jej-casti.js"},
  {"id": "3-u03-h054", "year": 3, "unit": "Stereometria metrické úlohy", "unitOrder": 3, "topic": "Riešenie úloh", "lesson": "Hodina 54", "lessonOrder": 54, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/3-rocnik/stereometria-metricke-ulohy/54-riesenie-uloh.js"},
  {"id": "3-u03-h055", "year": 3, "unit": "Stereometria metrické úlohy", "unitOrder": 3, "topic": "Opakovanie", "lesson": "Hodina 55", "lessonOrder": 55, "time": "15–18 min", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/3-rocnik/stereometria-metricke-ulohy/55-opakovanie.js"},
  {"id": "3-u03-h056", "year": 3, "unit": "Stereometria metrické úlohy", "unitOrder": 3, "topic": "Kontrolná písomná práca", "lesson": "Hodina 56", "lessonOrder": 56, "time": "5–7 min digitálne + písomka", "status": "ready", "type": "Názornosť → aktivita → zápis → argumentácia → ručná kontrola", "skills": ["porozumenie", "modelovanie", "presný zápis", "argumentácia"], "file": "modules/3-rocnik/stereometria-metricke-ulohy/56-kontrolna-pisomna-praca.js"},

  // 3.04 · Sterometria
  {
    id: '3-u04-h058', year: 3, unit: "Sterometria", unitOrder: 4,
    topic: "Základné pojmy geometrie v priestore", lesson: "Hodina 58", lessonOrder: 58,
    time: "cca 15 min", status: 'ready',
    type: "Precvičovanie → záver",
    skills: ["pojmy","orientácia","argumentácia","komunikácia"],
    file: "modules/3-rocnik/sterometria/58-zakladne-pojmy-geometrie-v-priestore.js"
  },
  {
    id: '3-u04-h059', year: 3, unit: "Sterometria", unitOrder: 4,
    topic: "Vzájomné polohy priamok a rovín", lesson: "Hodina 59", lessonOrder: 59,
    time: "cca 15 min", status: 'ready',
    type: "Precvičovanie → záver",
    skills: ["vzájomná poloha","argumentácia","komunikácia"],
    file: "modules/3-rocnik/sterometria/59-vzajomne-polohy-priamok-a-rovin.js"
  },
  {
    id: '3-u04-h060', year: 3, unit: "Sterometria", unitOrder: 4,
    topic: "Rezy kocky", lesson: "Hodina 60", lessonOrder: 60,
    time: "cca 15 min", status: 'ready',
    type: "Precvičovanie → záver",
    skills: ["rez kocky","postup","argumentácia"],
    file: "modules/3-rocnik/sterometria/60-rezy-kocky.js"
  },
  {
    id: '3-u04-h061', year: 3, unit: "Sterometria", unitOrder: 4,
    topic: "Rezy kocky", lesson: "Hodina 61", lessonOrder: 61,
    time: "cca 15 min", status: 'ready',
    type: "Precvičovanie → záver",
    skills: ["rez kocky","postup","argumentácia"],
    file: "modules/3-rocnik/sterometria/61-rezy-kocky.js"
  },
  {
    id: '3-u04-h062', year: 3, unit: "Sterometria", unitOrder: 4,
    topic: "Praktické úlohy", lesson: "Hodina 62", lessonOrder: 62,
    time: "cca 15 min", status: 'ready',
    type: "Precvičovanie → záver",
    skills: ["orientácia","modelovanie","argumentácia","komunikácia"],
    file: "modules/3-rocnik/sterometria/62-prakticke-ulohy.js"
  },
  {
    id: '3-u04-h063', year: 3, unit: "Sterometria", unitOrder: 4,
    topic: "Opakovanie", lesson: "Hodina 63", lessonOrder: 63,
    time: "cca 15 min", status: 'ready',
    type: "Precvičovanie → záver",
    skills: ["systematizácia","argumentácia","komunikácia"],
    file: "modules/3-rocnik/sterometria/63-opakovanie.js"
  },
  {
    id: '3-u04-h064', year: 3, unit: "Sterometria", unitOrder: 4,
    topic: "Systematizácia učiva", lesson: "Hodina 64", lessonOrder: 64,
    time: "cca 15 min", status: 'ready',
    type: "Precvičovanie → záver",
    skills: ["systematizácia","argumentácia","komunikácia"],
    file: "modules/3-rocnik/sterometria/64-systematizacia-uciva.js"
  },
  {
    id: '3-u04-h065', year: 3, unit: "Sterometria", unitOrder: 4,
    topic: "Kontrolná písomná práca", lesson: "Hodina 65", lessonOrder: 65,
    time: "cca 15 min", status: 'ready',
    type: "Precvičovanie → záver",
    skills: ["diagnostika","argumentácia"],
    file: "modules/3-rocnik/sterometria/65-kontrolna-pisomna-praca.js"
  },

  // 3.05 · Kombinatorika
  placeholder({ id: '3-u05-h066', year: 3, unit: "Kombinatorika", unitOrder: 5, topic: "Kombinatorické pravidlo súčinu", lesson: "Hodina 66", lessonOrder: 66, file: "modules/3-rocnik/kombinatorika/66-kombinatoricke-pravidlo-sucinu.js" }),
  placeholder({ id: '3-u05-h067', year: 3, unit: "Kombinatorika", unitOrder: 5, topic: "Faktoriál čísla", lesson: "Hodina 67", lessonOrder: 67, file: "modules/3-rocnik/kombinatorika/67-faktorial-cisla.js" }),
  placeholder({ id: '3-u05-h068', year: 3, unit: "Kombinatorika", unitOrder: 5, topic: "Výrazy s faktoriálmi", lesson: "Hodina 68", lessonOrder: 68, file: "modules/3-rocnik/kombinatorika/68-vyrazy-s-faktorialmi.js" }),
  placeholder({ id: '3-u05-h069', year: 3, unit: "Kombinatorika", unitOrder: 5, topic: "Riešenie úloh", lesson: "Hodina 69", lessonOrder: 69, file: "modules/3-rocnik/kombinatorika/69-riesenie-uloh.js" }),
  placeholder({ id: '3-u05-h070', year: 3, unit: "Kombinatorika", unitOrder: 5, topic: "Variácie s a bez opakovania", lesson: "Hodina 70", lessonOrder: 70, file: "modules/3-rocnik/kombinatorika/70-variacie-s-a-bez-opakovania.js" }),
  placeholder({ id: '3-u05-h071', year: 3, unit: "Kombinatorika", unitOrder: 5, topic: "Permutácie", lesson: "Hodina 71", lessonOrder: 71, file: "modules/3-rocnik/kombinatorika/71-permutacie.js" }),
  placeholder({ id: '3-u05-h072', year: 3, unit: "Kombinatorika", unitOrder: 5, topic: "Riešenie úloh – variácie a permutácie", lesson: "Hodina 72", lessonOrder: 72, file: "modules/3-rocnik/kombinatorika/72-riesenie-uloh-variacie-a-permutacie.js" }),
  placeholder({ id: '3-u05-h073', year: 3, unit: "Kombinatorika", unitOrder: 5, topic: "Pascalov trojuholník, vlastnosti komb. čísel", lesson: "Hodina 73", lessonOrder: 73, file: "modules/3-rocnik/kombinatorika/73-pascalov-trojuholnik-vlastnosti-komb-cisel.js" }),
  placeholder({ id: '3-u05-h074', year: 3, unit: "Kombinatorika", unitOrder: 5, topic: "Riešenie rovníc s komb. číslami", lesson: "Hodina 74", lessonOrder: 74, file: "modules/3-rocnik/kombinatorika/74-riesenie-rovnic-s-komb-cislami.js" }),
  placeholder({ id: '3-u05-h075', year: 3, unit: "Kombinatorika", unitOrder: 5, topic: "Kombinácie", lesson: "Hodina 75", lessonOrder: 75, file: "modules/3-rocnik/kombinatorika/75-kombinacie.js" }),
  placeholder({ id: '3-u05-h076', year: 3, unit: "Kombinatorika", unitOrder: 5, topic: "Riešenie úloh", lesson: "Hodina 76", lessonOrder: 76, file: "modules/3-rocnik/kombinatorika/76-riesenie-uloh.js" }),
  placeholder({ id: '3-u05-h077', year: 3, unit: "Kombinatorika", unitOrder: 5, topic: "Systematizácia učiva", lesson: "Hodina 77", lessonOrder: 77, file: "modules/3-rocnik/kombinatorika/77-systematizacia-uciva.js" }),
  placeholder({ id: '3-u05-h078', year: 3, unit: "Kombinatorika", unitOrder: 5, topic: "Kontrolná písomná práca", lesson: "Hodina 78", lessonOrder: 78, file: "modules/3-rocnik/kombinatorika/78-kontrolna-pisomna-praca.js" }),

  // 3.06 · Pravdepodobnosť
  placeholder({ id: '3-u06-h080', year: 3, unit: "Pravdepodobnosť", unitOrder: 6, topic: "Náhodný pokus a náhodný jav", lesson: "Hodina 80", lessonOrder: 80, file: "modules/3-rocnik/pravdepodobnost/80-nahodny-pokus-a-nahodny-jav.js" }),
  placeholder({ id: '3-u06-h081', year: 3, unit: "Pravdepodobnosť", unitOrder: 6, topic: "Pravdepodobnosť náhodného javu", lesson: "Hodina 81", lessonOrder: 81, file: "modules/3-rocnik/pravdepodobnost/81-pravdepodobnost-nahodneho-javu.js" }),
  placeholder({ id: '3-u06-h082', year: 3, unit: "Pravdepodobnosť", unitOrder: 6, topic: "Riešenie úloh", lesson: "Hodina 82", lessonOrder: 82, file: "modules/3-rocnik/pravdepodobnost/82-riesenie-uloh.js" }),
  placeholder({ id: '3-u06-h083', year: 3, unit: "Pravdepodobnosť", unitOrder: 6, topic: "Pravdepodobnosť zjednotenia a prieniku javov", lesson: "Hodina 83", lessonOrder: 83, file: "modules/3-rocnik/pravdepodobnost/83-pravdepodobnost-zjednotenia-a-prieniku-javov.js" }),
  placeholder({ id: '3-u06-h084', year: 3, unit: "Pravdepodobnosť", unitOrder: 6, topic: "Riešenie úloh", lesson: "Hodina 84", lessonOrder: 84, file: "modules/3-rocnik/pravdepodobnost/84-riesenie-uloh.js" }),
  placeholder({ id: '3-u06-h085', year: 3, unit: "Pravdepodobnosť", unitOrder: 6, topic: "Nezávislé pokusy", lesson: "Hodina 85", lessonOrder: 85, file: "modules/3-rocnik/pravdepodobnost/85-nezavisle-pokusy.js" }),
  placeholder({ id: '3-u06-h086', year: 3, unit: "Pravdepodobnosť", unitOrder: 6, topic: "Bernouliho schéma", lesson: "Hodina 86", lessonOrder: 86, file: "modules/3-rocnik/pravdepodobnost/86-bernouliho-schema.js" }),
  placeholder({ id: '3-u06-h087', year: 3, unit: "Pravdepodobnosť", unitOrder: 6, topic: "Opakovanie", lesson: "Hodina 87", lessonOrder: 87, file: "modules/3-rocnik/pravdepodobnost/87-opakovanie.js" }),
  placeholder({ id: '3-u06-h090', year: 3, unit: "Pravdepodobnosť", unitOrder: 6, topic: "Kontrolná písomná práca", lesson: "Hodina 90", lessonOrder: 90, file: "modules/3-rocnik/pravdepodobnost/90-kontrolna-pisomna-praca.js" }),

  // 3.07 · Štatistika
  placeholder({ id: '3-u07-h091', year: 3, unit: "Štatistika", unitOrder: 7, topic: "Štatistický súbor, jednotka, znak, rozdelenie početnosti", lesson: "Hodina 91", lessonOrder: 91, file: "modules/3-rocnik/statistika/91-statisticky-subor-jednotka-znak-rozdelenie-pocetnosti.js" }),
  placeholder({ id: '3-u07-h092', year: 3, unit: "Štatistika", unitOrder: 7, topic: "Štat. charakteristiky polohy", lesson: "Hodina 92", lessonOrder: 92, file: "modules/3-rocnik/statistika/92-stat-charakteristiky-polohy.js" }),
  placeholder({ id: '3-u07-h093', year: 3, unit: "Štatistika", unitOrder: 7, topic: "Riešenie úloh", lesson: "Hodina 93", lessonOrder: 93, file: "modules/3-rocnik/statistika/93-riesenie-uloh.js" }),
  placeholder({ id: '3-u07-h094', year: 3, unit: "Štatistika", unitOrder: 7, topic: "Štat. charakteristiky variability", lesson: "Hodina 94", lessonOrder: 94, file: "modules/3-rocnik/statistika/94-stat-charakteristiky-variability.js" }),
  placeholder({ id: '3-u07-h095', year: 3, unit: "Štatistika", unitOrder: 7, topic: "Riešenie praktických úloh", lesson: "Hodina 95", lessonOrder: 95, file: "modules/3-rocnik/statistika/95-riesenie-praktickych-uloh.js" }),
  placeholder({ id: '3-u07-h096', year: 3, unit: "Štatistika", unitOrder: 7, topic: "Systematizácia učiva", lesson: "Hodina 96", lessonOrder: 96, file: "modules/3-rocnik/statistika/96-systematizacia-uciva.js" }),
  placeholder({ id: '3-u07-h097', year: 3, unit: "Štatistika", unitOrder: 7, topic: "Kontrolná písomná práca", lesson: "Hodina 97", lessonOrder: 97, file: "modules/3-rocnik/statistika/97-kontrolna-pisomna-praca.js" }),
  ];
})();
