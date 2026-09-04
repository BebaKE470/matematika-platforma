MathPlatform.registerModule({
  "id": "1-u04-h038",
  "teacher": {
    "placement": "1. ročník · Absolútna hodnota a intervaly · 38. hodina: Absolútna hodnota reálnych čísel",
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
      "Kognitívny cieľ: žiak vysvetlí absolútnu hodnotu reálneho čísla ako vzdialenosť od nuly, správne prečíta zápis |x| a určí absolútnu hodnotu jednoduchých reálnych čísel.",
      "Afektívny cieľ: žiak prijíma korekciu intuitívneho omylu, že absolútna hodnota „iba ruší mínus“, a usiluje sa o významové vysvetlenie.",
      "Praktický cieľ: žiak vyznačí číslo na číselnej osi a použije vzdialenosť od nuly na zdôvodnenie výsledku.",
      "Kritérium úspechu: žiak správne vyrieši aspoň 4 z 5 krátkych položiek a aspoň raz vysvetlí výsledok pomocou vzdialenosti."
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
      "0–5 min – motivácia: na číselnej osi porovnať −4 a 4; učiteľ sa pýta, čo majú spoločné. Frontálne, riadený rozhovor, tabuľa.",
      "5–12 min – expozícia: zaviesť pojem absolútnej hodnoty ako vzdialenosti, až potom symbol |x| a jeho čítanie; ukázať kladné, záporné číslo a nulu.",
      "12–20 min – spoločné a párové príklady na číselnej osi; dôraz na opačné čísla a nezápornosť absolútnej hodnoty.",
      "20–35 min – platforma: názorný podnet → nový symbol → krátke overenie → analýza chyby → vysvetlenie. Mobil neslúži na mechanické počítanie.",
      "35–42 min – bez mobilu: vlastná číselná os a ručný zápis; učiteľ kontroluje význam, nie iba výsledok.",
      "42–45 min – záver: žiaci formulujú definíciu vlastnými slovami, krátke sebahodnotenie a spätná väzba."
    ],
    "diagnostics": [
      "či žiak chápe |x| ako vzdialenosť a nie ako mechanické „odstránenie znamienka“",
      "či vie, že absolútna hodnota nemôže byť záporná",
      "či vie použiť protipríklad na vyvrátenie nesprávneho tvrdenia"
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
    "title": "Absolútna hodnota reálnych čísel",
    "subtitle": "Téma 38 · Absolútna hodnota a intervaly",
    "intro": "Najprv uvidíš vzdialenosť na číselnej osi. Až potom použijeme nový symbol |x|.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "distance",
        "type": "info",
        "phase": "POCHOP",
        "title": "Rovnaká vzdialenosť, rôzne čísla",
        "html": "<p>Na číselnej osi ležia čísla <strong>−4</strong> a <strong>4</strong> na opačných stranách nuly. Obe sú však od nuly vzdialené 4 jednotky.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 760 180\"><line x1=\"80\" y1=\"90\" x2=\"680\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"3\"/><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"180\" y1=\"78\" x2=\"180\" y2=\"102\"/><line x1=\"380\" y1=\"74\" x2=\"380\" y2=\"106\"/><line x1=\"580\" y1=\"78\" x2=\"580\" y2=\"102\"/></g><g fill=\"currentColor\" font-family=\"system-ui\" font-size=\"20\"><text x=\"165\" y=\"130\">−4</text><text x=\"374\" y=\"130\">0</text><text x=\"574\" y=\"130\">4</text></g><path d=\"M180 62 Q280 20 380 62\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M380 62 Q480 20 580 62\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/></svg></div><p><strong>Myšlienka:</strong> absolútna hodnota bude vyjadrovať túto nezápornú vzdialenosť od nuly.</p>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "symbol",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Nový zápis: absolútna hodnota",
        "html": "<p>Absolútnu hodnotu čísla <strong>x</strong> zapisujeme <strong>|x|</strong> a čítame „absolútna hodnota x“.</p><p><strong>|x| je vzdialenosť čísla x od nuly na číselnej osi.</strong> Preto nikdy nie je záporná.</p><p>Príklady: |5| = 5, |−5| = 5, |0| = 0.</p>"
      },
      {
        "id": "abs1",
        "type": "choice",
        "phase": "OVER",
        "skill": "porozumenie",
        "question": "Akú hodnotu má |−7|?",
        "options": [
          "−7",
          "0",
          "7"
        ],
        "answer": 2,
        "correct": "Správne. Číslo −7 je od nuly vzdialené 7 jednotiek.",
        "hint": "Absolútna hodnota vyjadruje vzdialenosť, nie polohu vľavo alebo vpravo."
      },
      {
        "id": "abs2",
        "type": "choice",
        "phase": "OVER",
        "skill": "porozumenie",
        "question": "Ktoré tvrdenie je správne?",
        "options": [
          "|−3,5| = 3,5",
          "|−3,5| = −3,5",
          "|−3,5| = 0"
        ],
        "answer": 0,
        "correct": "Áno. Vzdialenosť −3,5 od nuly je 3,5.",
        "hint": "Vzdialenosť nemôže byť záporná."
      },
      {
        "id": "opposite",
        "type": "choice",
        "phase": "PREPOJ",
        "skill": "reprezentácie",
        "question": "Ktorá dvojica čísel má rovnakú absolútnu hodnotu?",
        "options": [
          "−6 a 6",
          "−6 a 0",
          "6 a 12"
        ],
        "answer": 0,
        "correct": "Opačné čísla −6 a 6 majú rovnakú vzdialenosť od nuly.",
        "hint": "Predstav si body na číselnej osi a porovnaj ich vzdialenosť od nuly."
      },
      {
        "id": "notebook",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Toto si zapíš do zošita",
        "html": "<p><strong>Absolútna hodnota čísla x</strong> je jeho vzdialenosť od nuly na číselnej osi.</p><p>Zápis: <strong>|x|</strong>.</p><p>Platí: |x| ≥ 0; |5| = 5; |−5| = 5; |0| = 0.</p>",
        "continueLabel": "Mám zapísané"
      },
      {
        "id": "error",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "kritické myslenie",
        "question": "Žiak tvrdí: „Pre každé reálne číslo x platí |x| = x.“ Ktorý príklad jeho tvrdenie vyvráti?",
        "options": [
          "x = 3",
          "x = 0",
          "x = −3"
        ],
        "answer": 2,
        "correct": "Správne. Pre x = −3 dostaneme |−3| = 3, nie −3.",
        "hint": "Hľadaj číslo, pri ktorom sa absolútna hodnota líši od pôvodného čísla."
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Vysvetli význam symbolu",
        "prompt": "Ako by si spolužiakovi vysvetlil/a, prečo |−8| = 8, bez pravidla „mínus sa zmení na plus“?",
        "model": "Číslo −8 je na číselnej osi vzdialené od nuly 8 jednotiek. Absolútna hodnota vyjadruje práve túto vzdialenosť, preto |−8| = 8."
      },
      {
        "id": "manual",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Bez mobilu",
        "html": "<p>Do zošita zakresli číselnú os a vyznač body −6, −2, 0, 2, 6. Ku každému zapíš absolútnu hodnotu. Potom jednou vetou opíš, čo si všimol/a pri opačných číslach.</p>",
        "continueLabel": "Mám zapísané"
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "význam absolútnej hodnoty",
          "čítanie zápisu |x|",
          "zdôvodnenie pomocou číselnej osi"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka."
      }
    ]
  }
});
