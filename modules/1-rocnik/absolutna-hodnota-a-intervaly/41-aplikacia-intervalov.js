MathPlatform.registerModule({
  "id": "1-u04-h041",
  "teacher": {
    "placement": "1. ročník · Absolútna hodnota a intervaly · 41. hodina: Aplikácia intervalov",
    "prerequisites": [
      "učivo ZŠ: reálne čísla, porovnávanie čísel, číselná os a základné nerovnosti",
      "predchádzajúce učivo 1. ročníka: množiny a ich operácie, reálne čísla a presný matematický zápis"
    ],
    "planContent": [
      "V bunke obsahového štandardu tematického celku je v poskytnutom tematickom pláne iba text „Pridať / upraviť text“. Preto modul nevydáva žiadny doplnený text za oficiálny obsahový štandard; obsah hodiny vychádza z názvu témy a uvedeného výkonového štandardu."
    ],
    "planPerformance": [
      "Tematický plán uvádza pre celok: „žiak chápe význam absolútnej hodnoty reálneho čísla, žiak vie určiť a zakresliť interval na číselnej osi, žiak vykonáva operácie so zjednotením a prienikom intervalov, žiak aplikuje intervaly pri riešení praktických úloh.“"
    ],
    "goals": [
      "Kognitívny cieľ: žiak preloží praktickú podmienku na interval a interpretuje interval späť v kontexte úlohy.",
      "Afektívny cieľ: žiak vníma význam presnosti, hraníc a jednotiek v technickej praxi.",
      "Praktický cieľ: žiak rozhodne, či konkrétna nameraná hodnota patrí do prípustného rozsahu, a pri dvoch súčasných podmienkach použije prienik.",
      "Kritérium úspechu: žiak správne modeluje aspoň 4 z 5 praktických situácií a výsledok vyjadrí vetou s jednotkou."
    ],
    "competencies": [
      "matematická komunikácia a presné používanie symbolického jazyka",
      "logické a kritické myslenie; kontrola podmienok a hraničných bodov",
      "prechod medzi slovným, symbolickým a grafickým vyjadrením",
      "digitálna kompetencia pri účelnom použití interaktívnej platformy",
      "samostatnosť, spolupráca a vecné zdôvodnenie postupu"
    ],
    "enrichment": [
      "Návrh nového maturitného štandardu sa používa iba ako obohatenie spôsobu práce: absolútna hodnota ako pojem pri reálnych číslach, prechod medzi slovným, symbolickým a grafickým zápisom, interpretácia, kontrola a zdôvodnenie. Neurčuje poradie ani rozsah učiva."
    ],
    "flow": [
      "0–5 min – motivácia: rozsah prípustných rozmerov alebo teploty; diskusia, prečo jedna „ideálna“ hodnota nestačí.",
      "5–12 min – spoločný preklad slovnej podmienky do intervalu; dôraz na slová „vrátane“, „viac ako“, „najviac“.",
      "12–20 min – dve súčasné podmienky ako prienik intervalov; nadviazanie na 40. hodinu.",
      "20–35 min – platforma: technické rozsahy, rozhodovanie o prípustnosti, interpretácia výsledku.",
      "35–42 min – vlastná praktická situácia v zošite; možná krátka výmena vo dvojici a kontrola spolužiakom.",
      "42–45 min – spoločné zhrnutie: hranica, zátvorka, jednotka, význam výsledku."
    ],
    "diagnostics": [
      "či žiak číta slovné hraničné podmienky presne",
      "či pri praktickom výsledku uvádza jednotku a význam",
      "či pri dvoch súčasných obmedzeniach prirodzene volí prienik"
    ],
    "partialUse": [
      "Metódy a formy: riadený a heuristický rozhovor, demonštrácia s otázkami, problémová úloha, krátka práca vo dvojiciach, individuálna práca a formatívna spätná väzba; podľa charakteru hodiny sa ich pomer mení.",
      "Pomôcky: tabuľa, zošit, písacie potreby, číselná os alebo jej náčrt, projektor/interaktívna tabuľa a platforma; kalkulačka iba tam, kde výpočet nie je cieľom učenia.",
      "Medzipredmetové vzťahy: fyzika a odborné predmety – rozsahy, tolerancie, meranie a prípustné hodnoty; informatika – presný zápis podmienok.",
      "ŠVVP: podľa konkrétneho žiaka primerane predĺžiť čas, znížiť počet položiek bez zníženia jadra cieľa, ponechať viditeľnú číselnú os/vzor zápisu, zadanie čítať po krokoch a umožniť ústne zdôvodnenie, ak to vyplýva z podporných opatrení.",
      "Hodnotenie: priebežná slovná spätná väzba, konštruktívna korekcia chyby a záverečné sebahodnotenie; XP v platforme nie sú známka."
    ]
  },
  "student": {
    "title": "Aplikácia intervalov",
    "subtitle": "Téma 41 · Absolútna hodnota a intervaly",
    "intro": "Intervaly použijeme ako jazyk pre prípustné rozsahy, merania a dve podmienky, ktoré musia platiť súčasne.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "context",
        "type": "info",
        "phase": "POCHOP",
        "title": "Interval ako podmienka z praxe",
        "html": "<p>V technickej praxi často nehľadáme jednu jedinú hodnotu. Potrebujeme vedieť, <strong>ktoré hodnoty sú prípustné</strong>.</p><p>Napríklad: dĺžka prvku môže byť od 199,5 mm do 200,5 mm vrátane. Matematicky ide o interval <strong>⟨199,5; 200,5⟩</strong>.</p>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "tech1",
        "type": "choice",
        "phase": "APLIKUJ",
        "skill": "modelovanie",
        "question": "Meraná dĺžka je prípustná od 49,8 mm do 50,2 mm vrátane. Ktorý interval to vyjadruje?",
        "options": [
          "(49,8; 50,2)",
          "⟨49,8; 50,2⟩",
          "⟨49,8; 50,2)"
        ],
        "answer": 1,
        "correct": "Správne. Obe hraničné hodnoty sú dovolené.",
        "hint": "Slovo „vrátane“ rozhoduje o krajných bodoch."
      },
      {
        "id": "tech2",
        "type": "choice",
        "phase": "APLIKUJ",
        "skill": "interpretácia",
        "question": "Prípustný interval je ⟨12; 18). Ktorá hodnota nie je prípustná?",
        "options": [
          "12",
          "17,9",
          "18"
        ],
        "answer": 2,
        "correct": "Áno. Pravý krajný bod 18 do intervalu nepatrí.",
        "hint": "Skontroluj zvlášť ľavý a pravý krajný bod."
      },
      {
        "id": "two-conditions",
        "type": "info",
        "phase": "PREPOJ",
        "title": "Keď platia dve podmienky naraz",
        "html": "<p>Ak musí hodnota spĺňať <strong>dve podmienky súčasne</strong>, hľadáme prienik intervalov.</p><p>Projektová podmienka: x ∈ ⟨2; 8⟩. Podmienka materiálu: x ∈ ⟨5; 10). Spoločne teda musí platiť <strong>x ∈ ⟨5; 8⟩</strong>.</p>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "constraints",
        "type": "choice",
        "phase": "APLIKUJ",
        "skill": "modelovanie",
        "question": "Hodnota x musí spĺňať x ∈ ⟨−2; 6⟩ a zároveň x ∈ (1; 9). Ktorý interval spĺňa obe podmienky?",
        "options": [
          "(1; 6⟩",
          "⟨−2; 9)",
          "⟨1; 6⟩"
        ],
        "answer": 0,
        "correct": "Správne. Ide o prienik: 1 nepatrí, 6 patrí.",
        "hint": "Slovo „zároveň“ znamená, že hodnota musí patriť do oboch intervalov."
      },
      {
        "id": "decision",
        "type": "choice",
        "phase": "ROZHODNI",
        "skill": "kritické myslenie",
        "question": "Predpis povoľuje teplotu v intervale ⟨15; 25⟩ °C. Namerali 25,1 °C. Ktoré hodnotenie je správne?",
        "options": [
          "Vyhovuje, lebo je približne 25 °C.",
          "Nevyhovuje, lebo 25,1 > 25.",
          "Vyhovuje, lebo pravý koniec je uzavretý."
        ],
        "answer": 1,
        "correct": "Správne. Uzavretý koniec zahŕňa 25, nie hodnoty väčšie ako 25.",
        "hint": "Porovnaj nameranú hodnotu s presnou hornou hranicou."
      },
      {
        "id": "notebook",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Toto si zapíš do zošita",
        "html": "<p>Interval môže vyjadrovať <strong>rozsah prípustných hodnôt</strong>.</p><p>Pri praktickej úlohe: 1. urč dolnú a hornú hranicu, 2. rozhodni, či hranice patria, 3. zapíš interval, 4. výsledok interpretuj v kontexte a s jednotkou.</p><p>Ak majú platiť dve podmienky naraz, hľadáme ich <strong>prienik</strong>.</p>",
        "continueLabel": "Mám zapísané"
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "interpretácia",
        "title": "Výsledok nestačí – interpretuj ho",
        "prompt": "V úlohe vyšiel prípustný interval ⟨5; 8⟩ m. Napíš jednu vetu, ktorá tento výsledok vysvetlí človeku bez intervalového zápisu.",
        "model": "Prípustné sú všetky hodnoty od 5 m do 8 m vrátane oboch hraničných hodnôt."
      },
      {
        "id": "manual",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Bez mobilu",
        "html": "<p>Vymysli vlastnú technickú alebo bežnú situáciu, v ktorej je povolený určitý rozsah hodnôt. Zapíš slovnú podmienku, interval, jednoduchú číselnú os a jednu hodnotu, ktorá podmienku nespĺňa.</p>",
        "continueLabel": "Mám zapísané"
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "modelovanie rozsahu intervalom",
          "prienik dvoch podmienok",
          "interpretácia výsledku s jednotkou"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka."
      }
    ]
  }
});
