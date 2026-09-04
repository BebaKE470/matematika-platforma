/*
  Kompletný katalóg podľa aktuálnych tematických plánov 1.–3. ročníka.

  unitOrder   = poradie tematického celku v ročníku
  lessonOrder = číslo prvej hodiny uvedenej v tematickom pláne
  status      = 'ready' pri hotovom module, 'placeholder' pri technicky prepojenom TODO module
  file        = cieľová cesta, kam patrí obsahový .js súbor

  Zostávajúce témy majú vytvorený TODO placeholder na presnej ceste.
  Pri spracovaní témy sa nahradí obsah súboru a status sa zmení na 'ready'.
*/
const planned = (id, year, unit, unitOrder, topic, lesson, lessonOrder, file) => ({
  id, year, unit, unitOrder, topic, lesson, lessonOrder,
  time: 'TODO', status: 'placeholder', type: 'TODO – zástupný modul', skills: [], file
});

window.MATH_MODULE_INDEX = [
  // ==================== 1. ROČNÍK ====================

  // 1.01 · Výroková formula
  {
    id: "1-u01-h001", year: 1, unit: 'Výroková formula', unitOrder: 1,
    topic: "Úvodné pokyny", lesson: "Hodina 1", lessonOrder: 1,
    time: "10–12 min", status: 'ready',
    type: "Orientácia → pravidlá práce → zošit → reflexia",
    skills: ["pracovný a čistý zápis", "samostatnosť", "matematická komunikácia"],
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
  planned('1-u04-h038', 1, "Absolútna hodnota a intervaly", 4, "Absolútna hodnota reálnych čísel", "Hodina 38", 38, "modules/1-rocnik/absolutna-hodnota-a-intervaly/38-absolutna-hodnota-realnych-cisel.js"),
  planned('1-u04-h039', 1, "Absolútna hodnota a intervaly", 4, "Intervaly", "Hodina 39", 39, "modules/1-rocnik/absolutna-hodnota-a-intervaly/39-intervaly.js"),
  planned('1-u04-h040', 1, "Absolútna hodnota a intervaly", 4, "Zjednotenie a prienik intervalov", "Hodina 40", 40, "modules/1-rocnik/absolutna-hodnota-a-intervaly/40-zjednotenie-a-prienik-intervalov.js"),
  planned('1-u04-h041', 1, "Absolútna hodnota a intervaly", 4, "Aplikácia intervalov", "Hodina 41", 41, "modules/1-rocnik/absolutna-hodnota-a-intervaly/41-aplikacia-intervalov.js"),
  planned('1-u04-h042', 1, "Absolútna hodnota a intervaly", 4, "Riešenie úloh", "Hodina 42", 42, "modules/1-rocnik/absolutna-hodnota-a-intervaly/42-riesenie-uloh.js"),
  planned('1-u04-h043', 1, "Absolútna hodnota a intervaly", 4, "Previerka", "Hodina 43", 43, "modules/1-rocnik/absolutna-hodnota-a-intervaly/43-previerka.js"),

  // 1.05 · Mocniny a odmocniny
  planned('1-u05-h044', 1, "Mocniny a odmocniny", 5, "Definícia mocniny, zápis, príklady na kladné prirodzené mocnitele", "Hodina 44", 44, "modules/1-rocnik/mocniny-a-odmocniny/44-definicia-mocniny-zapis-priklady-na-kladne-prirodzene-mocnitele.js"),
  planned('1-u05-h045', 1, "Mocniny a odmocniny", 5, "Vlastnosti mocnín (násobenie, delenie, mocnina mocniny), príklady", "Hodina 45", 45, "modules/1-rocnik/mocniny-a-odmocniny/45-vlastnosti-mocnin-nasobenie-delenie-mocnina-mocniny-priklady.js"),
  planned('1-u05-h046', 1, "Mocniny a odmocniny", 5, "Definícia mocniny so záporným mocniteľom, príklady", "Hodina 46", 46, "modules/1-rocnik/mocniny-a-odmocniny/46-definicia-mocniny-so-zapornym-mocnitelom-priklady.js"),
  planned('1-u05-h047', 1, "Mocniny a odmocniny", 5, "Precvičovanie, typické úlohy, aplikácia vo výpočtoch", "Hodina 47", 47, "modules/1-rocnik/mocniny-a-odmocniny/47-precvicovanie-typicke-ulohy-aplikacia-vo-vypoctoch.js"),
  planned('1-u05-h048', 1, "Mocniny a odmocniny", 5, "Príklady zo stavebníctva, fyziky, chémie (plochy, objemy, hustota, tlak)", "Hodina 48", 48, "modules/1-rocnik/mocniny-a-odmocniny/48-priklady-zo-stavebnictva-fyziky-chemie-plochy-objemy-hustota-tlak.js"),
  planned('1-u05-h049', 1, "Mocniny a odmocniny", 5, "Vlastnosti mocnín so základom 10, zápis veľkých a malých čísel", "Hodina 49", 49, "modules/1-rocnik/mocniny-a-odmocniny/49-vlastnosti-mocnin-so-zakladom-10-zapis-velkych-a-malych-cisel.js"),
  planned('1-u05-h050', 1, "Mocniny a odmocniny", 5, "Používanie v technike a prírodných vedách, prevody jednotiek, cvičenia", "Hodina 50", 50, "modules/1-rocnik/mocniny-a-odmocniny/50-pouzivanie-v-technike-a-prirodnych-vedach-prevody-jednotiek-cvicenia.js"),
  planned('1-u05-h051', 1, "Mocniny a odmocniny", 5, "Druhá odmocnina", "Hodina 51", 51, "modules/1-rocnik/mocniny-a-odmocniny/51-druha-odmocnina.js"),
  planned('1-u05-h052', 1, "Mocniny a odmocniny", 5, "Tretia odmocnina", "Hodina 52", 52, "modules/1-rocnik/mocniny-a-odmocniny/52-tretia-odmocnina.js"),
  planned('1-u05-h053', 1, "Mocniny a odmocniny", 5, "Vety o odmocninách", "Hodina 53", 53, "modules/1-rocnik/mocniny-a-odmocniny/53-vety-o-odmocninach.js"),
  planned('1-u05-h054', 1, "Mocniny a odmocniny", 5, "Použitie odmocnín", "Hodina 54", 54, "modules/1-rocnik/mocniny-a-odmocniny/54-pouzitie-odmocnin.js"),
  planned('1-u05-h055', 1, "Mocniny a odmocniny", 5, "Definícia, prechod od odmocnín k mocninám s racionálnym mocniteľom", "Hodina 55", 55, "modules/1-rocnik/mocniny-a-odmocniny/55-definicia-prechod-od-odmocnin-k-mocninam-s-racionalnym-mocnitelom.js"),
  planned('1-u05-h056', 1, "Mocniny a odmocniny", 5, "Vlastnosti, príklady, riešenie úloh", "Hodina 56", 56, "modules/1-rocnik/mocniny-a-odmocniny/56-vlastnosti-priklady-riesenie-uloh.js"),
  planned('1-u05-h057', 1, "Mocniny a odmocniny", 5, "Kombinácie mocnín a odmocnín", "Hodina 57", 57, "modules/1-rocnik/mocniny-a-odmocniny/57-kombinacie-mocnin-a-odmocnin.js"),
  planned('1-u05-h058', 1, "Mocniny a odmocniny", 5, "Kontrolná písomná práca", "Hodina 58", 58, "modules/1-rocnik/mocniny-a-odmocniny/58-kontrolna-pisomna-praca.js"),

  // 1.06 · Výrazy a mnohočleny
  planned('1-u06-h059', 1, "Výrazy a mnohočleny", 6, "Konštanta, premenná, výraz, mnohočlen", "Hodina 59", 59, "modules/1-rocnik/vyrazy-a-mnohocleny/59-konstanta-premenna-vyraz-mnohoclen.js"),
  planned('1-u06-h060', 1, "Výrazy a mnohočleny", 6, "Sčítanie a odčítanie mnohočlenov, jednoduché príklady, násobenie jednočlenom, pravidlá a príklady", "Hodina 60", 60, "modules/1-rocnik/vyrazy-a-mnohocleny/60-scitanie-a-odcitanie-mnohoclenov-jednoduche-priklady-nasobenie-jednocl.js"),
  planned('1-u06-h061', 1, "Výrazy a mnohočleny", 6, "Násobenie mnohočlenov", "Hodina 61", 61, "modules/1-rocnik/vyrazy-a-mnohocleny/61-nasobenie-mnohoclenov.js"),
  planned('1-u06-h062', 1, "Výrazy a mnohočleny", 6, "Delenie mnohočlenov", "Hodina 62", 62, "modules/1-rocnik/vyrazy-a-mnohocleny/62-delenie-mnohoclenov.js"),
  planned('1-u06-h063', 1, "Výrazy a mnohočleny", 6, "Tvorba výrazov zo slovného zadania, príklady", "Hodina 63", 63, "modules/1-rocnik/vyrazy-a-mnohocleny/63-tvorba-vyrazov-zo-slovneho-zadania-priklady.js"),
  planned('1-u06-h064', 1, "Výrazy a mnohočleny", 6, "Riešenie a diskusia úloh z technickej praxe", "Hodina 64", 64, "modules/1-rocnik/vyrazy-a-mnohocleny/64-riesenie-a-diskusia-uloh-z-technickej-praxe.js"),
  planned('1-u06-h065', 1, "Výrazy a mnohočleny", 6, "Úpravy mnohočlenov", "Hodina 65", 65, "modules/1-rocnik/vyrazy-a-mnohocleny/65-upravy-mnohoclenov.js"),
  planned('1-u06-h066', 1, "Výrazy a mnohočleny", 6, "Previerka", "Hodina 66", 66, "modules/1-rocnik/vyrazy-a-mnohocleny/66-previerka.js"),

  // 1.07 · Rozklad výrazov a dosadzovanie vo vzorcoch
  planned('1-u07-h067', 1, "Rozklad výrazov a dosadzovanie vo vzorcoch", 7, "Dosadzovanie do výrazov", "Hodina 67", 67, "modules/1-rocnik/rozklad-vyrazov-a-dosadzovanie-vo-vzorcoch/67-dosadzovanie-do-vyrazov.js"),
  planned('1-u07-h068', 1, "Rozklad výrazov a dosadzovanie vo vzorcoch", 7, "Úpravy vzorcov", "Hodina 68", 68, "modules/1-rocnik/rozklad-vyrazov-a-dosadzovanie-vo-vzorcoch/68-upravy-vzorcov.js"),
  planned('1-u07-h069', 1, "Rozklad výrazov a dosadzovanie vo vzorcoch", 7, "Rozklad výrazov pomocou vynímania pred zátvorku", "Hodina 69", 69, "modules/1-rocnik/rozklad-vyrazov-a-dosadzovanie-vo-vzorcoch/69-rozklad-vyrazov-pomocou-vynimania-pred-zatvorku.js"),
  planned('1-u07-h070', 1, "Rozklad výrazov a dosadzovanie vo vzorcoch", 7, "Riešenie úloh", "Hodina 70", 70, "modules/1-rocnik/rozklad-vyrazov-a-dosadzovanie-vo-vzorcoch/70-riesenie-uloh.js"),
  planned('1-u07-h071', 1, "Rozklad výrazov a dosadzovanie vo vzorcoch", 7, "Rozklad výrazov podľa vzorcov", "Hodina 71", 71, "modules/1-rocnik/rozklad-vyrazov-a-dosadzovanie-vo-vzorcoch/71-rozklad-vyrazov-podla-vzorcov.js"),
  planned('1-u07-h072', 1, "Rozklad výrazov a dosadzovanie vo vzorcoch", 7, "Rozklad výrazov pomocou vzorcov", "Hodina 72", 72, "modules/1-rocnik/rozklad-vyrazov-a-dosadzovanie-vo-vzorcoch/72-rozklad-vyrazov-pomocou-vzorcov.js"),
  planned('1-u07-h073', 1, "Rozklad výrazov a dosadzovanie vo vzorcoch", 7, "Riešenie úloh", "Hodina 73", 73, "modules/1-rocnik/rozklad-vyrazov-a-dosadzovanie-vo-vzorcoch/73-riesenie-uloh.js"),
  planned('1-u07-h074', 1, "Rozklad výrazov a dosadzovanie vo vzorcoch", 7, "Zložitejšie úpravy", "Hodina 74", 74, "modules/1-rocnik/rozklad-vyrazov-a-dosadzovanie-vo-vzorcoch/74-zlozitejsie-upravy.js"),
  planned('1-u07-h075', 1, "Rozklad výrazov a dosadzovanie vo vzorcoch", 7, "Riešenie úloh", "Hodina 75", 75, "modules/1-rocnik/rozklad-vyrazov-a-dosadzovanie-vo-vzorcoch/75-riesenie-uloh.js"),
  planned('1-u07-h076', 1, "Rozklad výrazov a dosadzovanie vo vzorcoch", 7, "Kontrolná písomná práca", "Hodina 76", 76, "modules/1-rocnik/rozklad-vyrazov-a-dosadzovanie-vo-vzorcoch/76-kontrolna-pisomna-praca.js"),

  // 1.08 · Lomené výrazy
  planned('1-u08-h077', 1, "Lomené výrazy", 8, "Úpravy lomených výrazov", "Hodina 77", 77, "modules/1-rocnik/lomene-vyrazy/77-upravy-lomenych-vyrazov.js"),
  planned('1-u08-h078', 1, "Lomené výrazy", 8, "Úpravy lomených výrazov-ščítanie lomených výrazov", "Hodina 78", 78, "modules/1-rocnik/lomene-vyrazy/78-upravy-lomenych-vyrazov-scitanie-lomenych-vyrazov.js"),
  planned('1-u08-h079', 1, "Lomené výrazy", 8, "Úpravy lomených výrazov-odčítanie lomených výrazov", "Hodina 79", 79, "modules/1-rocnik/lomene-vyrazy/79-upravy-lomenych-vyrazov-odcitanie-lomenych-vyrazov.js"),
  planned('1-u08-h080', 1, "Lomené výrazy", 8, "Riešenie úloh", "Hodina 80", 80, "modules/1-rocnik/lomene-vyrazy/80-riesenie-uloh.js"),
  planned('1-u08-h081', 1, "Lomené výrazy", 8, "Úpravy lomených výrazov-násobenie lomených výrazov", "Hodina 81", 81, "modules/1-rocnik/lomene-vyrazy/81-upravy-lomenych-vyrazov-nasobenie-lomenych-vyrazov.js"),
  planned('1-u08-h082', 1, "Lomené výrazy", 8, "Úpravy lomených výrazov-delenie lomených výrazov", "Hodina 82", 82, "modules/1-rocnik/lomene-vyrazy/82-upravy-lomenych-vyrazov-delenie-lomenych-vyrazov.js"),
  planned('1-u08-h083', 1, "Lomené výrazy", 8, "Riešenie úloh", "Hodina 83", 83, "modules/1-rocnik/lomene-vyrazy/83-riesenie-uloh.js"),
  planned('1-u08-h084', 1, "Lomené výrazy", 8, "Zložitejšie úpravy lomených výrazov", "Hodina 84", 84, "modules/1-rocnik/lomene-vyrazy/84-zlozitejsie-upravy-lomenych-vyrazov.js"),
  planned('1-u08-h085', 1, "Lomené výrazy", 8, "Riešenie úloh", "Hodina 85", 85, "modules/1-rocnik/lomene-vyrazy/85-riesenie-uloh.js"),
  planned('1-u08-h086', 1, "Lomené výrazy", 8, "Systematizácia učiva", "Hodina 86", 86, "modules/1-rocnik/lomene-vyrazy/86-systematizacia-uciva.js"),
  planned('1-u08-h087', 1, "Lomené výrazy", 8, "Kontrolná písomná práca", "Hodina 87", 87, "modules/1-rocnik/lomene-vyrazy/87-kontrolna-pisomna-praca.js"),

  // 1.09 · Funkcie- základné vlastnosti
  planned('1-u09-h088', 1, "Funkcie- základné vlastnosti", 9, "Pojem funkcie, definičný obor funkcie, obor hodnôt funkcie", "Hodina 88", 88, "modules/1-rocnik/funkcie-zakladne-vlastnosti/88-pojem-funkcie-definicny-obor-funkcie-obor-hodnot-funkcie.js"),
  planned('1-u09-h089', 1, "Funkcie- základné vlastnosti", 9, "Graf funkcie, určovanie D(f) a H(f) z grafu", "Hodina 89", 89, "modules/1-rocnik/funkcie-zakladne-vlastnosti/89-graf-funkcie-urcovanie-d-f-a-h-f-z-grafu.js"),
  planned('1-u09-h090', 1, "Funkcie- základné vlastnosti", 9, "Riešenie úloh", "Hodina 90", 90, "modules/1-rocnik/funkcie-zakladne-vlastnosti/90-riesenie-uloh.js"),
  planned('1-u09-h091', 1, "Funkcie- základné vlastnosti", 9, "Párna a nepárna funkcia", "Hodina 91", 91, "modules/1-rocnik/funkcie-zakladne-vlastnosti/91-parna-a-neparna-funkcia.js"),
  planned('1-u09-h092', 1, "Funkcie- základné vlastnosti", 9, "Rastúca a klesajúca funkci", "Hodina 92", 92, "modules/1-rocnik/funkcie-zakladne-vlastnosti/92-rastuca-a-klesajuca-funkci.js"),
  planned('1-u09-h093', 1, "Funkcie- základné vlastnosti", 9, "Maximum a minimum funkcie na množine", "Hodina 93", 93, "modules/1-rocnik/funkcie-zakladne-vlastnosti/93-maximum-a-minimum-funkcie-na-mnozine.js"),
  planned('1-u09-h094', 1, "Funkcie- základné vlastnosti", 9, "Prostá funkcia", "Hodina 94", 94, "modules/1-rocnik/funkcie-zakladne-vlastnosti/94-prosta-funkcia.js"),
  planned('1-u09-h095', 1, "Funkcie- základné vlastnosti", 9, "Funkcia ohraničená na množine", "Hodina 95", 95, "modules/1-rocnik/funkcie-zakladne-vlastnosti/95-funkcia-ohranicena-na-mnozine.js"),
  planned('1-u09-h096', 1, "Funkcie- základné vlastnosti", 9, "Riešenie úloh", "Hodina 96", 96, "modules/1-rocnik/funkcie-zakladne-vlastnosti/96-riesenie-uloh.js"),
  planned('1-u09-h097', 1, "Funkcie- základné vlastnosti", 9, "Určovanie vlastnosti funkcie z grafu", "Hodina 97", 97, "modules/1-rocnik/funkcie-zakladne-vlastnosti/97-urcovanie-vlastnosti-funkcie-z-grafu.js"),
  planned('1-u09-h098', 1, "Funkcie- základné vlastnosti", 9, "Riešenie úloh", "Hodina 98", 98, "modules/1-rocnik/funkcie-zakladne-vlastnosti/98-riesenie-uloh.js"),
  planned('1-u09-h099', 1, "Funkcie- základné vlastnosti", 9, "Kontrolná písomná práca", "Hodina 99", 99, "modules/1-rocnik/funkcie-zakladne-vlastnosti/99-kontrolna-pisomna-praca.js"),
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
  planned('2-u04-h024', 2, "Lineárne nerovnice", 4, "Lineárne nerovnice a ekvivalentné úpravy pri jej riešení", "Hodina 24", 24, "modules/2-rocnik/linearne-nerovnice/24-linearne-nerovnice-a-ekvivalentne-upravy-pri-jej-rieseni.js"),
  planned('2-u04-h025', 2, "Lineárne nerovnice", 4, "Lineárne nerovnice s neznámou v menovateli", "Hodina 25", 25, "modules/2-rocnik/linearne-nerovnice/25-linearne-nerovnice-s-neznamou-v-menovateli.js"),
  planned('2-u04-h026', 2, "Lineárne nerovnice", 4, "Riešenie úloh", "Hodina 26", 26, "modules/2-rocnik/linearne-nerovnice/26-riesenie-uloh.js"),
  planned('2-u04-h027', 2, "Lineárne nerovnice", 4, "Lineárne nerovnice s absolútnou hodnotou", "Hodina 27", 27, "modules/2-rocnik/linearne-nerovnice/27-linearne-nerovnice-s-absolutnou-hodnotou.js"),
  planned('2-u04-h028', 2, "Lineárne nerovnice", 4, "Riešenie úloh", "Hodina 28", 28, "modules/2-rocnik/linearne-nerovnice/28-riesenie-uloh.js"),
  planned('2-u04-h029', 2, "Lineárne nerovnice", 4, "Sústava lineárnych nerovníc s jednou neznámou", "Hodina 29", 29, "modules/2-rocnik/linearne-nerovnice/29-sustava-linearnych-nerovnic-s-jednou-neznamou.js"),
  planned('2-u04-h030', 2, "Lineárne nerovnice", 4, "Riešenie úloh", "Hodina 30", 30, "modules/2-rocnik/linearne-nerovnice/30-riesenie-uloh.js"),
  planned('2-u04-h031', 2, "Lineárne nerovnice", 4, "Systematizácia učiva", "Hodina 31", 31, "modules/2-rocnik/linearne-nerovnice/31-systematizacia-uciva.js"),
  planned('2-u04-h032', 2, "Lineárne nerovnice", 4, "Kontrolná písomná práca", "Hodina 32", 32, "modules/2-rocnik/linearne-nerovnice/32-kontrolna-pisomna-praca.js"),

  // 2.05 · Základy geometrie trojuholníkov
  planned('2-u05-h033', 2, "Základy geometrie trojuholníkov", 5, "Zhodnosť a podobnosť trojuholníkov,", "Hodina 33", 33, "modules/2-rocnik/zaklady-geometrie-trojuholnikov/33-zhodnost-a-podobnost-trojuholnikov.js"),
  planned('2-u05-h034', 2, "Základy geometrie trojuholníkov", 5, "Klasifikácia a vlastnosti trojuholníkov", "Hodina 34", 34, "modules/2-rocnik/zaklady-geometrie-trojuholnikov/34-klasifikacia-a-vlastnosti-trojuholnikov.js"),
  planned('2-u05-h035', 2, "Základy geometrie trojuholníkov", 5, "Uhol a jeho veľkosť, Uhlová a oblúková miera", "Hodina 35", 35, "modules/2-rocnik/zaklady-geometrie-trojuholnikov/35-uhol-a-jeho-velkost-uhlova-a-oblukova-miera.js"),
  planned('2-u05-h036', 2, "Základy geometrie trojuholníkov", 5, "Prevody uhlov", "Hodina 36", 36, "modules/2-rocnik/zaklady-geometrie-trojuholnikov/36-prevody-uhlov.js"),
  planned('2-u05-h037', 2, "Základy geometrie trojuholníkov", 5, "Systematizácia učiva, previerka", "Hodina 37", 37, "modules/2-rocnik/zaklady-geometrie-trojuholnikov/37-systematizacia-uciva-previerka.js"),

  // 2.06 · Pravouhlý trojuholník a jeho vlastnosti
  planned('2-u06-h039', 2, "Pravouhlý trojuholník a jeho vlastnosti", 6, "Pravouhlý trojuholník - Pytagorova veta", "Hodina 39", 39, "modules/2-rocnik/pravouhly-trojuholnik-a-jeho-vlastnosti/39-pravouhly-trojuholnik-pytagorova-veta.js"),
  planned('2-u06-h040', 2, "Pravouhlý trojuholník a jeho vlastnosti", 6, "Pytagorova veta – aplikačné úlohy", "Hodina 40", 40, "modules/2-rocnik/pravouhly-trojuholnik-a-jeho-vlastnosti/40-pytagorova-veta-aplikacne-ulohy.js"),
  planned('2-u06-h041', 2, "Pravouhlý trojuholník a jeho vlastnosti", 6, "Euklidove vety", "Hodina 41", 41, "modules/2-rocnik/pravouhly-trojuholnik-a-jeho-vlastnosti/41-euklidove-vety.js"),
  planned('2-u06-h042', 2, "Pravouhlý trojuholník a jeho vlastnosti", 6, "Euklidove vety – súhrnné využitie", "Hodina 42", 42, "modules/2-rocnik/pravouhly-trojuholnik-a-jeho-vlastnosti/42-euklidove-vety-suhrnne-vyuzitie.js"),
  planned('2-u06-h043', 2, "Pravouhlý trojuholník a jeho vlastnosti", 6, "Konštrukcia úsečiek rôznych veľkostí", "Hodina 43", 43, "modules/2-rocnik/pravouhly-trojuholnik-a-jeho-vlastnosti/43-konstrukcia-useciek-roznych-velkosti.js"),
  planned('2-u06-h044', 2, "Pravouhlý trojuholník a jeho vlastnosti", 6, "Využitie Euklidových viet pri konštrukciách", "Hodina 44", 44, "modules/2-rocnik/pravouhly-trojuholnik-a-jeho-vlastnosti/44-vyuzitie-euklidovych-viet-pri-konstrukciach.js"),
  planned('2-u06-h045', 2, "Pravouhlý trojuholník a jeho vlastnosti", 6, "Opakovanie tematického celku", "Hodina 45", 45, "modules/2-rocnik/pravouhly-trojuholnik-a-jeho-vlastnosti/45-opakovanie-tematickeho-celku.js"),
  planned('2-u06-h046', 2, "Pravouhlý trojuholník a jeho vlastnosti", 6, "Písomná práca", "Hodina 46", 46, "modules/2-rocnik/pravouhly-trojuholnik-a-jeho-vlastnosti/46-pisomna-praca.js"),

  // 2.07 · Goniometrické funkcie ostrého uhla
  planned('2-u07-h048', 2, "Goniometrické funkcie ostrého uhla", 7, "Goniometrické funkcie – sínus, kosínus", "Hodina 48", 48, "modules/2-rocnik/goniometricke-funkcie-ostreho-uhla/48-goniometricke-funkcie-sinus-kosinus.js"),
  planned('2-u07-h049', 2, "Goniometrické funkcie ostrého uhla", 7, "Výpočty pomocou sínusu, kosínusu", "Hodina 49", 49, "modules/2-rocnik/goniometricke-funkcie-ostreho-uhla/49-vypocty-pomocou-sinusu-kosinusu.js"),
  planned('2-u07-h050', 2, "Goniometrické funkcie ostrého uhla", 7, "Goniometrické funkcie – tangens, kotangens", "Hodina 50", 50, "modules/2-rocnik/goniometricke-funkcie-ostreho-uhla/50-goniometricke-funkcie-tangens-kotangens.js"),
  planned('2-u07-h051', 2, "Goniometrické funkcie ostrého uhla", 7, "Riešenie pravouhlého trojuholníka", "Hodina 51", 51, "modules/2-rocnik/goniometricke-funkcie-ostreho-uhla/51-riesenie-pravouhleho-trojuholnika.js"),
  planned('2-u07-h052', 2, "Goniometrické funkcie ostrého uhla", 7, "Opakovanie tematického celku", "Hodina 52", 52, "modules/2-rocnik/goniometricke-funkcie-ostreho-uhla/52-opakovanie-tematickeho-celku.js"),
  planned('2-u07-h053', 2, "Goniometrické funkcie ostrého uhla", 7, "Písomná práca", "Hodina 53", 53, "modules/2-rocnik/goniometricke-funkcie-ostreho-uhla/53-pisomna-praca.js"),

  // 2.08 · Sínusová a kosínusová veta
  planned('2-u08-h054', 2, "Sínusová a kosínusová veta", 8, "Sínusová veta", "Hodina 54", 54, "modules/2-rocnik/sinusova-a-kosinusova-veta/54-sinusova-veta.js"),
  planned('2-u08-h055', 2, "Sínusová a kosínusová veta", 8, "Sínusová veta – aplikačné úlohy", "Hodina 55", 55, "modules/2-rocnik/sinusova-a-kosinusova-veta/55-sinusova-veta-aplikacne-ulohy.js"),
  planned('2-u08-h056', 2, "Sínusová a kosínusová veta", 8, "Kosínusová veta", "Hodina 56", 56, "modules/2-rocnik/sinusova-a-kosinusova-veta/56-kosinusova-veta.js"),
  planned('2-u08-h057', 2, "Sínusová a kosínusová veta", 8, "Kosínusová veta – aplikačné úlohy", "Hodina 57", 57, "modules/2-rocnik/sinusova-a-kosinusova-veta/57-kosinusova-veta-aplikacne-ulohy.js"),
  planned('2-u08-h058', 2, "Sínusová a kosínusová veta", 8, "Riešenie všeobecných trojuholníkov", "Hodina 58", 58, "modules/2-rocnik/sinusova-a-kosinusova-veta/58-riesenie-vseobecnych-trojuholnikov.js"),
  planned('2-u08-h059', 2, "Sínusová a kosínusová veta", 8, "Opakovanie", "Hodina 59", 59, "modules/2-rocnik/sinusova-a-kosinusova-veta/59-opakovanie.js"),
  planned('2-u08-h060', 2, "Sínusová a kosínusová veta", 8, "Písomná práca", "Hodina 60", 60, "modules/2-rocnik/sinusova-a-kosinusova-veta/60-pisomna-praca.js"),

  // 2.09 · Kvadratická funkcia a jej gaf
  planned('2-u09-h063', 2, "Kvadratická funkcia a jej gaf", 9, "Kvadratická funkcia – definícia a základné vlastnosti, Graf kvadratickej funkcie", "Hodina 63", 63, "modules/2-rocnik/kvadraticka-funkcia-a-jej-gaf/63-kvadraticka-funkcia-definicia-a-zakladne-vlastnosti-graf-kvadratickej-.js"),
  planned('2-u09-h064', 2, "Kvadratická funkcia a jej gaf", 9, "Vrchol paraboly", "Hodina 64", 64, "modules/2-rocnik/kvadraticka-funkcia-a-jej-gaf/64-vrchol-paraboly.js"),
  planned('2-u09-h065', 2, "Kvadratická funkcia a jej gaf", 9, "Hľadanie predpisu kvadratickej funkcie z grafu", "Hodina 65", 65, "modules/2-rocnik/kvadraticka-funkcia-a-jej-gaf/65-hladanie-predpisu-kvadratickej-funkcie-z-grafu.js"),
  planned('2-u09-h066', 2, "Kvadratická funkcia a jej gaf", 9, "Systematizácia učiva", "Hodina 66", 66, "modules/2-rocnik/kvadraticka-funkcia-a-jej-gaf/66-systematizacia-uciva.js"),
  planned('2-u09-h067', 2, "Kvadratická funkcia a jej gaf", 9, "Písomná práca", "Hodina 67", 67, "modules/2-rocnik/kvadraticka-funkcia-a-jej-gaf/67-pisomna-praca.js"),

  // 2.10 · Kvadratické rovnice - základné typy
  planned('2-u10-h068', 2, "Kvadratické rovnice - základné typy", 10, "Rýdzo kvadratické rovnice", "Hodina 68", 68, "modules/2-rocnik/kvadraticke-rovnice-zakladne-typy/68-rydzo-kvadraticke-rovnice.js"),
  planned('2-u10-h069', 2, "Kvadratické rovnice - základné typy", 10, "Kvadratické rovnice bez lineárneho člena", "Hodina 69", 69, "modules/2-rocnik/kvadraticke-rovnice-zakladne-typy/69-kvadraticke-rovnice-bez-linearneho-clena.js"),
  planned('2-u10-h070', 2, "Kvadratické rovnice - základné typy", 10, "Kvadratické rovnice bez absolútneho člena", "Hodina 70", 70, "modules/2-rocnik/kvadraticke-rovnice-zakladne-typy/70-kvadraticke-rovnice-bez-absolutneho-clena.js"),
  planned('2-u10-h071', 2, "Kvadratické rovnice - základné typy", 10, "Úplná kvadratická rovnica", "Hodina 71", 71, "modules/2-rocnik/kvadraticke-rovnice-zakladne-typy/71-uplna-kvadraticka-rovnica.js"),
  planned('2-u10-h072', 2, "Kvadratické rovnice - základné typy", 10, "Súhrnné precvičovanie kvadratických rovníc", "Hodina 72", 72, "modules/2-rocnik/kvadraticke-rovnice-zakladne-typy/72-suhrnne-precvicovanie-kvadratickych-rovnic.js"),
  planned('2-u10-h073', 2, "Kvadratické rovnice - základné typy", 10, "Opakovanie", "Hodina 73", 73, "modules/2-rocnik/kvadraticke-rovnice-zakladne-typy/73-opakovanie.js"),
  planned('2-u10-h074', 2, "Kvadratické rovnice - základné typy", 10, "Písomná práca", "Hodina 74", 74, "modules/2-rocnik/kvadraticke-rovnice-zakladne-typy/74-pisomna-praca.js"),

  // 2.11 · Kvadratické rovnice – vzťahy a algebraické úpravy
  planned('2-u11-h075', 2, "Kvadratické rovnice – vzťahy a algebraické úpravy", 11, "Vzťahy medzi koreňmi a koeficientmi kvadratickej rovnice", "Hodina 75", 75, "modules/2-rocnik/kvadraticke-rovnice-vztahy-a-algebraicke-upravy/75-vztahy-medzi-korenmi-a-koeficientmi-kvadratickej-rovnice.js"),
  planned('2-u11-h076', 2, "Kvadratické rovnice – vzťahy a algebraické úpravy", 11, "Využitie Vietových vzťahov pri riešení rovníc", "Hodina 76", 76, "modules/2-rocnik/kvadraticke-rovnice-vztahy-a-algebraicke-upravy/76-vyuzitie-vietovych-vztahov-pri-rieseni-rovnic.js"),
  planned('2-u11-h077', 2, "Kvadratické rovnice – vzťahy a algebraické úpravy", 11, "Rozklad kvadratických trojčlenov na súčin", "Hodina 77", 77, "modules/2-rocnik/kvadraticke-rovnice-vztahy-a-algebraicke-upravy/77-rozklad-kvadratickych-trojclenov-na-sucin.js"),
  planned('2-u11-h078', 2, "Kvadratické rovnice – vzťahy a algebraické úpravy", 11, "Úprava algebraických výrazov rozkladom", "Hodina 78", 78, "modules/2-rocnik/kvadraticke-rovnice-vztahy-a-algebraicke-upravy/78-uprava-algebraickych-vyrazov-rozkladom.js"),
  planned('2-u11-h079', 2, "Kvadratické rovnice – vzťahy a algebraické úpravy", 11, "Súhrnné precvičovanie", "Hodina 79", 79, "modules/2-rocnik/kvadraticke-rovnice-vztahy-a-algebraicke-upravy/79-suhrnne-precvicovanie.js"),
  planned('2-u11-h080', 2, "Kvadratické rovnice – vzťahy a algebraické úpravy", 11, "Systematizácia učiva", "Hodina 80", 80, "modules/2-rocnik/kvadraticke-rovnice-vztahy-a-algebraicke-upravy/80-systematizacia-uciva.js"),
  planned('2-u11-h081', 2, "Kvadratické rovnice – vzťahy a algebraické úpravy", 11, "Písomná práca", "Hodina 81", 81, "modules/2-rocnik/kvadraticke-rovnice-vztahy-a-algebraicke-upravy/81-pisomna-praca.js"),

  // 2.12 · Slovné úlohy a aplikácie kvadratických rovníc
  planned('2-u12-h082', 2, "Slovné úlohy a aplikácie kvadratických rovníc", 12, "Úvod do slovných úloh - jednoduché slovné úlohy", "Hodina 82", 82, "modules/2-rocnik/slovne-ulohy-a-aplikacie-kvadratickych-rovnic/82-uvod-do-slovnych-uloh-jednoduche-slovne-ulohy.js"),
  planned('2-u12-h083', 2, "Slovné úlohy a aplikácie kvadratických rovníc", 12, "Slovné úlohy o pohybe a práci - zostavenie a riešenie kvadratickej rovnice", "Hodina 83", 83, "modules/2-rocnik/slovne-ulohy-a-aplikacie-kvadratickych-rovnic/83-slovne-ulohy-o-pohybe-a-praci-zostavenie-a-riesenie-kvadratickej-rovni.js"),
  planned('2-u12-h084', 2, "Slovné úlohy a aplikácie kvadratických rovníc", 12, "Slovné úlohy z praxe: Vekové úlohy, Ekonomické a technické úlohy, Kombinované aplikačné príklady", "Hodina 84", 84, "modules/2-rocnik/slovne-ulohy-a-aplikacie-kvadratickych-rovnic/84-slovne-ulohy-z-praxe-vekove-ulohy-ekonomicke-a-technicke-ulohy-kombino.js"),
  planned('2-u12-h085', 2, "Slovné úlohy a aplikácie kvadratických rovníc", 12, "Súhrnné riešenie slovných úloh", "Hodina 85", 85, "modules/2-rocnik/slovne-ulohy-a-aplikacie-kvadratickych-rovnic/85-suhrnne-riesenie-slovnych-uloh.js"),
  planned('2-u12-h086', 2, "Slovné úlohy a aplikácie kvadratických rovníc", 12, "Kontrolná písomná práca", "Hodina 86", 86, "modules/2-rocnik/slovne-ulohy-a-aplikacie-kvadratickych-rovnic/86-kontrolna-pisomna-praca.js"),

  // 2.13 · Kvadratické nerovnice
  planned('2-u13-h087', 2, "Kvadratické nerovnice", 13, "Riešenie kvadratických nerovníc výpočtom", "Hodina 87", 87, "modules/2-rocnik/kvadraticke-nerovnice/87-riesenie-kvadratickych-nerovnic-vypoctom.js"),
  planned('2-u13-h088', 2, "Kvadratické nerovnice", 13, "Riešenie kvadratických nerovníc výpočtom – precvičovanie", "Hodina 88", 88, "modules/2-rocnik/kvadraticke-nerovnice/88-riesenie-kvadratickych-nerovnic-vypoctom-precvicovanie.js"),
  planned('2-u13-h089', 2, "Kvadratické nerovnice", 13, "Riešenie kvadratických nerovníc grafickou metódou", "Hodina 89", 89, "modules/2-rocnik/kvadraticke-nerovnice/89-riesenie-kvadratickych-nerovnic-grafickou-metodou.js"),
  planned('2-u13-h090', 2, "Kvadratické nerovnice", 13, "Kvadratické rovnice s parametrom", "Hodina 90", 90, "modules/2-rocnik/kvadraticke-nerovnice/90-kvadraticke-rovnice-s-parametrom.js"),
  planned('2-u13-h091', 2, "Kvadratické nerovnice", 13, "Kvadratické rovnice s parametrom - precvičovanie", "Hodina 91", 91, "modules/2-rocnik/kvadraticke-nerovnice/91-kvadraticke-rovnice-s-parametrom-precvicovanie.js"),
  planned('2-u13-h092', 2, "Kvadratické nerovnice", 13, "Súhrnné precvičovanie", "Hodina 92", 92, "modules/2-rocnik/kvadraticke-nerovnice/92-suhrnne-precvicovanie.js"),
  planned('2-u13-h093', 2, "Kvadratické nerovnice", 13, "Kontrolná písomná práca", "Hodina 93", 93, "modules/2-rocnik/kvadraticke-nerovnice/93-kontrolna-pisomna-praca.js"),

  // 2.14 · Iracionálne rovnice
  planned('2-u14-h095', 2, "Iracionálne rovnice", 14, "Základy iracionálnych rovníc", "Hodina 95", 95, "modules/2-rocnik/iracionalne-rovnice/95-zaklady-iracionalnych-rovnic.js"),
  planned('2-u14-h096', 2, "Iracionálne rovnice", 14, "Zložitejšie typy a substitúcia", "Hodina 96", 96, "modules/2-rocnik/iracionalne-rovnice/96-zlozitejsie-typy-a-substitucia.js"),
  planned('2-u14-h097', 2, "Iracionálne rovnice", 14, "Slovné úlohy (Geometria a fyzika)", "Hodina 97", 97, "modules/2-rocnik/iracionalne-rovnice/97-slovne-ulohy-geometria-a-fyzika.js"),
  planned('2-u14-h098', 2, "Iracionálne rovnice", 14, "Slovné úlohy (Praktické a reálne kontexty)", "Hodina 98", 98, "modules/2-rocnik/iracionalne-rovnice/98-slovne-ulohy-prakticke-a-realne-kontexty.js"),
  planned('2-u14-h099', 2, "Iracionálne rovnice", 14, "Opakovanie a preverenie vedomostí", "Hodina 99", 99, "modules/2-rocnik/iracionalne-rovnice/99-opakovanie-a-preverenie-vedomosti.js"),
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
  ready('3-u04-h058', 3, "Sterometria", 4, "Základné pojmy geometrie v priestore", "Hodina 58", 58, "modules/3-rocnik/sterometria/58-zakladne-pojmy-geometrie-v-priestore.js"),
  ready('3-u04-h059', 3, "Sterometria", 4, "Vzájomné polohy priamok a rovín", "Hodina 59", 59, "modules/3-rocnik/sterometria/59-vzajomne-polohy-priamok-a-rovin.js"),
  ready('3-u04-h060', 3, "Sterometria", 4, "Rezy kocky", "Hodina 60", 60, "modules/3-rocnik/sterometria/60-rezy-kocky.js"),
  ready('3-u04-h061', 3, "Sterometria", 4, "Rezy kocky", "Hodina 61", 61, "modules/3-rocnik/sterometria/61-rezy-kocky.js"),
  ready('3-u04-h062', 3, "Sterometria", 4, "Praktické úlohy", "Hodina 62", 62, "modules/3-rocnik/sterometria/62-prakticke-ulohy.js"),
  ready('3-u04-h063', 3, "Sterometria", 4, "Opakovanie", "Hodina 63", 63, "modules/3-rocnik/sterometria/63-opakovanie.js"),
  ready('3-u04-h064', 3, "Sterometria", 4, "Systematizácia učiva", "Hodina 64", 64, "modules/3-rocnik/sterometria/64-systematizacia-uciva.js"),
  ready('3-u04-h065', 3, "Sterometria", 4, "Kontrolná písomná práca", "Hodina 65", 65, "modules/3-rocnik/sterometria/65-kontrolna-pisomna-praca.js"),

  // 3.05 · Kombinatorika
  planned('3-u05-h066', 3, "Kombinatorika", 5, "Kombinatorické pravidlo súčinu", "Hodina 66", 66, "modules/3-rocnik/kombinatorika/66-kombinatoricke-pravidlo-sucinu.js"),
  planned('3-u05-h067', 3, "Kombinatorika", 5, "Faktoriál čísla", "Hodina 67", 67, "modules/3-rocnik/kombinatorika/67-faktorial-cisla.js"),
  planned('3-u05-h068', 3, "Kombinatorika", 5, "Výrazy s faktoriálmi", "Hodina 68", 68, "modules/3-rocnik/kombinatorika/68-vyrazy-s-faktorialmi.js"),
  planned('3-u05-h069', 3, "Kombinatorika", 5, "Riešenie úloh", "Hodina 69", 69, "modules/3-rocnik/kombinatorika/69-riesenie-uloh.js"),
  planned('3-u05-h070', 3, "Kombinatorika", 5, "Variácie s a bez opakovania", "Hodina 70", 70, "modules/3-rocnik/kombinatorika/70-variacie-s-a-bez-opakovania.js"),
  planned('3-u05-h071', 3, "Kombinatorika", 5, "Permutácie", "Hodina 71", 71, "modules/3-rocnik/kombinatorika/71-permutacie.js"),
  planned('3-u05-h072', 3, "Kombinatorika", 5, "Riešenie úloh – variácie a permutácie", "Hodina 72", 72, "modules/3-rocnik/kombinatorika/72-riesenie-uloh-variacie-a-permutacie.js"),
  planned('3-u05-h073', 3, "Kombinatorika", 5, "Pascalov trojuholník, vlastnosti komb. čísel", "Hodina 73", 73, "modules/3-rocnik/kombinatorika/73-pascalov-trojuholnik-vlastnosti-komb-cisel.js"),
  planned('3-u05-h074', 3, "Kombinatorika", 5, "Riešenie rovníc s komb. číslami", "Hodina 74", 74, "modules/3-rocnik/kombinatorika/74-riesenie-rovnic-s-komb-cislami.js"),
  planned('3-u05-h075', 3, "Kombinatorika", 5, "Kombinácie", "Hodina 75", 75, "modules/3-rocnik/kombinatorika/75-kombinacie.js"),
  planned('3-u05-h076', 3, "Kombinatorika", 5, "Riešenie úloh", "Hodina 76", 76, "modules/3-rocnik/kombinatorika/76-riesenie-uloh.js"),
  planned('3-u05-h077', 3, "Kombinatorika", 5, "Systematizácia učiva", "Hodina 77", 77, "modules/3-rocnik/kombinatorika/77-systematizacia-uciva.js"),
  planned('3-u05-h078', 3, "Kombinatorika", 5, "Kontrolná písomná práca", "Hodina 78", 78, "modules/3-rocnik/kombinatorika/78-kontrolna-pisomna-praca.js"),

  // 3.06 · Pravdepodobnosť
  planned('3-u06-h080', 3, "Pravdepodobnosť", 6, "Náhodný pokus a náhodný jav", "Hodina 80", 80, "modules/3-rocnik/pravdepodobnost/80-nahodny-pokus-a-nahodny-jav.js"),
  planned('3-u06-h081', 3, "Pravdepodobnosť", 6, "Pravdepodobnosť náhodného javu", "Hodina 81", 81, "modules/3-rocnik/pravdepodobnost/81-pravdepodobnost-nahodneho-javu.js"),
  planned('3-u06-h082', 3, "Pravdepodobnosť", 6, "Riešenie úloh", "Hodina 82", 82, "modules/3-rocnik/pravdepodobnost/82-riesenie-uloh.js"),
  planned('3-u06-h083', 3, "Pravdepodobnosť", 6, "Pravdepodobnosť zjednotenia a prieniku javov", "Hodina 83", 83, "modules/3-rocnik/pravdepodobnost/83-pravdepodobnost-zjednotenia-a-prieniku-javov.js"),
  planned('3-u06-h084', 3, "Pravdepodobnosť", 6, "Riešenie úloh", "Hodina 84", 84, "modules/3-rocnik/pravdepodobnost/84-riesenie-uloh.js"),
  planned('3-u06-h085', 3, "Pravdepodobnosť", 6, "Nezávislé pokusy", "Hodina 85", 85, "modules/3-rocnik/pravdepodobnost/85-nezavisle-pokusy.js"),
  planned('3-u06-h086', 3, "Pravdepodobnosť", 6, "Bernouliho schéma", "Hodina 86", 86, "modules/3-rocnik/pravdepodobnost/86-bernouliho-schema.js"),
  planned('3-u06-h087', 3, "Pravdepodobnosť", 6, "Opakovanie", "Hodina 87", 87, "modules/3-rocnik/pravdepodobnost/87-opakovanie.js"),
  planned('3-u06-h090', 3, "Pravdepodobnosť", 6, "Kontrolná písomná práca", "Hodina 90", 90, "modules/3-rocnik/pravdepodobnost/90-kontrolna-pisomna-praca.js"),

  // 3.07 · Štatistika
  planned('3-u07-h091', 3, "Štatistika", 7, "Štatistický súbor, jednotka, znak, rozdelenie početnosti", "Hodina 91", 91, "modules/3-rocnik/statistika/91-statisticky-subor-jednotka-znak-rozdelenie-pocetnosti.js"),
  planned('3-u07-h092', 3, "Štatistika", 7, "Štat. charakteristiky polohy", "Hodina 92", 92, "modules/3-rocnik/statistika/92-stat-charakteristiky-polohy.js"),
  planned('3-u07-h093', 3, "Štatistika", 7, "Riešenie úloh", "Hodina 93", 93, "modules/3-rocnik/statistika/93-riesenie-uloh.js"),
  planned('3-u07-h094', 3, "Štatistika", 7, "Štat. charakteristiky variability", "Hodina 94", 94, "modules/3-rocnik/statistika/94-stat-charakteristiky-variability.js"),
  planned('3-u07-h095', 3, "Štatistika", 7, "Riešenie praktických úloh", "Hodina 95", 95, "modules/3-rocnik/statistika/95-riesenie-praktickych-uloh.js"),
  planned('3-u07-h096', 3, "Štatistika", 7, "Systematizácia učiva", "Hodina 96", 96, "modules/3-rocnik/statistika/96-systematizacia-uciva.js"),
  planned('3-u07-h097', 3, "Štatistika", 7, "Kontrolná písomná práca", "Hodina 97", 97, "modules/3-rocnik/statistika/97-kontrolna-pisomna-praca.js"),
];
