MathPlatform.registerModule({
  "id": "1-u04-h039",
  "teacher": {
    "placement": "1. ročník · Absolútna hodnota a intervaly · 39. hodina: Intervaly",
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
      "Kognitívny cieľ: žiak vysvetlí pojem interval, rozlíši otvorený, uzavretý a polootvorený interval a prechádza medzi intervalovým a nerovnostným zápisom.",
      "Afektívny cieľ: žiak dbá na presnosť hraničných podmienok a prijíma potrebu kontrolovať každý krajný bod osobitne.",
      "Praktický cieľ: žiak zakreslí interval na číselnej osi s korektným označením krajných bodov.",
      "Kritérium úspechu: žiak správne preloží aspoň 4 z 5 zápisov medzi slovným opisom, nerovnosťou, intervalom a číselnou osou."
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
      "0–5 min – motivácia rozsahom prípustných hodnôt; nadviazať na množiny a číselnú os.",
      "5–15 min – zaviesť pojem interval; až potom zátvorky a ich význam. Osobitne vysvetliť, že ±∞ nie sú krajné reálne čísla.",
      "15–25 min – spoločné zakresľovanie otvorených, uzavretých a polootvorených intervalov; žiaci slovne komentujú krajné body.",
      "25–37 min – platforma: prevody medzi reprezentáciami, chyba pri nekonečne, krátke vlastné vysvetlenie.",
      "37–42 min – ručné zakreslenie troch intervalov a zápis nerovností bez mobilu.",
      "42–45 min – spoločná kontrola hraničných bodov, sebahodnotenie."
    ],
    "diagnostics": [
      "či žiak nezamieňa otvorenú a uzavretú zátvorku",
      "či pri nekonečne nepoužíva uzavretý koniec",
      "či vie z grafického zápisu vytvoriť nerovnosť a naopak"
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
    "title": "Intervaly",
    "subtitle": "Téma 39 · Absolútna hodnota a intervaly",
    "intro": "Interval nebude iba zápis v zátvorkách. Budeme medzi sebou prepájať slovný opis, nerovnosť a číselnú os.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "situation",
        "type": "info",
        "phase": "POCHOP",
        "title": "Od jednotlivých čísel k celému rozsahu",
        "html": "<p>Predstav si prípustnú teplotu od <strong>18 °C do 22 °C vrátane</strong>. Nejde o štyri alebo päť vybraných čísel, ale o všetky reálne hodnoty medzi 18 a 22.</p><p>Takúto množinu čísel budeme zapisovať pomocou <strong>intervalu</strong>.</p>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "interval-intro",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Nový pojem a nové zátvorky",
        "html": "<p><strong>Interval</strong> je súvislá časť reálnej číselnej osi.</p><p><strong>⟨a; b⟩</strong> – oba krajné body patria do intervalu (uzavretý interval).<br><strong>(a; b)</strong> – krajné body nepatria do intervalu (otvorený interval).<br><strong>⟨a; b)</strong> alebo <strong>(a; b⟩</strong> – patrí iba jeden krajný bod.</p><p>Pri nekonečne píšeme vždy otvorenú zátvorku, napr. <strong>(−∞; 3⟩</strong>, pretože ∞ ani −∞ nie sú reálne čísla a nie sú krajnými bodmi intervalu.</p>"
      },
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Ako zátvorka súvisí s bodom",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 210\"><line x1=\"80\" y1=\"105\" x2=\"680\" y2=\"105\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"240\" y1=\"92\" x2=\"240\" y2=\"118\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"520\" y1=\"92\" x2=\"520\" y2=\"118\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"240\" y1=\"105\" x2=\"520\" y2=\"105\" stroke=\"currentColor\" stroke-width=\"8\"/><circle cx=\"240\" cy=\"105\" r=\"9\" fill=\"currentColor\"/><circle cx=\"520\" cy=\"105\" r=\"9\" fill=\"white\" stroke=\"currentColor\" stroke-width=\"3\"/><g fill=\"currentColor\" font-family=\"system-ui\" font-size=\"20\"><text x=\"230\" y=\"150\">2</text><text x=\"510\" y=\"150\">6</text><text x=\"300\" y=\"55\">⟨2; 6)</text></g></svg></div><p>Plný bod pri 2 znamená: 2 patrí. Prázdny bod pri 6 znamená: 6 nepatrí.</p>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "read1",
        "type": "choice",
        "phase": "OVER",
        "skill": "presný zápis",
        "question": "Ktorý interval vyjadruje podmienku 2 ≤ x < 6?",
        "options": [
          "(2; 6)",
          "⟨2; 6)",
          "⟨2; 6⟩"
        ],
        "answer": 1,
        "correct": "Správne. Dvojka patrí, šestka nepatrí.",
        "hint": "Pri každom krajnom bode sa osobitne opýtaj: patrí alebo nepatrí?"
      },
      {
        "id": "read2",
        "type": "choice",
        "phase": "OVER",
        "skill": "presný zápis",
        "question": "Ktorá nerovnosť zodpovedá intervalu (−3; 5⟩?",
        "options": [
          "−3 ≤ x ≤ 5",
          "−3 < x ≤ 5",
          "−3 < x < 5"
        ],
        "answer": 1,
        "correct": "Áno. −3 nepatrí, 5 patrí.",
        "hint": "Otvorená zátvorka znamená ostrú nerovnosť; uzavretá znamená, že bod patrí."
      },
      {
        "id": "infinity",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "kritické myslenie",
        "question": "Ktorý zápis je správny pre všetky reálne čísla x ≤ 4?",
        "options": [
          "⟨−∞; 4⟩",
          "(−∞; 4⟩",
          "(−∞; 4)"
        ],
        "answer": 1,
        "correct": "Správne. Pri −∞ je zátvorka otvorená a číslo 4 do množiny patrí.",
        "hint": "Nekonečno nie je reálne číslo, preto pri ňom nemôže byť uzavretý koniec."
      },
      {
        "id": "notebook",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Toto si zapíš do zošita",
        "html": "<p><strong>Interval</strong> je súvislá časť reálnej číselnej osi.</p><p>⟨a; b⟩ – oba krajné body patria.<br>(a; b) – ani jeden krajný bod nepatrí.<br>⟨a; b) a (a; b⟩ – patrí práve jeden krajný bod.</p><p>Pri ±∞ používame otvorenú zátvorku.</p>",
        "continueLabel": "Mám zapísané"
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Prelož zápis do slov",
        "prompt": "Vysvetli vlastnými slovami, čo znamená x ∈ ⟨−2; 3).",
        "model": "Číslo x je aspoň −2 a zároveň je menšie ako 3; teda −2 ≤ x < 3."
      },
      {
        "id": "manual",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Bez mobilu",
        "html": "<p>V zošite zakresli na tri samostatné číselné osi intervaly <strong>⟨−4; 1⟩</strong>, <strong>(0; 5)</strong> a <strong>(−∞; 2⟩</strong>. Ku každému napíš aj nerovnosť.</p>",
        "continueLabel": "Mám zapísané"
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "čítanie intervalov",
          "zápis nerovnosti ako intervalu",
          "krajné body a zátvorky"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka."
      }
    ]
  }
});
