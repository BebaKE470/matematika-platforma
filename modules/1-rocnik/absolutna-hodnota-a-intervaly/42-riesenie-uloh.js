MathPlatform.registerModule({
  "id": "1-u04-h042",
  "teacher": {
    "placement": "1. ročník · Absolútna hodnota a intervaly · 42. hodina: Riešenie úloh",
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
      "Kognitívny cieľ: žiak prepája absolútnu hodnotu ako vzdialenosť s intervalovým zápisom a rieši jednoduché podmienky typu |x| ≤ r a |x − a| < r významovo pomocou číselnej osi.",
      "Afektívny cieľ: žiak uprednostňuje význam a kontrolu na číselnej osi pred mechanickým zapamätaním postupu.",
      "Praktický cieľ: žiak vyznačí stred a polomer vzdialenosti na osi a zapíše výsledný interval so správnymi krajnými bodmi.",
      "Kritérium úspechu: žiak správne vyrieši aspoň 4 z 5 úloh a pri jednej vysvetlí, od ktorého bodu sa meria vzdialenosť."
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
      "0–6 min – zopakovať význam |x| a intervalov; slovná podmienka „vzdialenosť najviac 3“ bez nového symbolického pravidla.",
      "6–14 min – odvodiť |x| ≤ r z číselnej osi; až potom zaviesť |x − a| ako vzdialenosť od a a ukázať jeden posunutý príklad.",
      "14–22 min – spoločné riešenie s otvorenými a uzavretými hranicami; kontrola stredu a vzdialenosti.",
      "22–35 min – platforma: prechod medzi absolútnou hodnotou, slovným významom a intervalom; analýza typickej chyby.",
      "35–42 min – tri úlohy ručne na číselnej osi bez aplikácie.",
      "42–45 min – žiak vysvetlí jeden postup vlastnými slovami; sebahodnotenie."
    ],
    "diagnostics": [
      "či žiak rozpozná stred 0 pri |x| a stred a pri |x − a|",
      "či správne volí otvorený/uzavretý interval podľa < alebo ≤",
      "či dokáže výsledok skontrolovať vzdialenosťou na číselnej osi"
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
    "title": "Riešenie úloh",
    "subtitle": "Téma 42 · Absolútna hodnota a intervaly",
    "intro": "Spojíme dve myšlienky z celku: absolútnu hodnotu ako vzdialenosť a interval ako množinu prípustných bodov.",
    "estimatedTime": "16–20 min",
    "activities": [
      {
        "id": "bridge",
        "type": "info",
        "phase": "POCHOP",
        "title": "Absolútna hodnota a interval hovoria o vzdialenosti",
        "html": "<p>Už vieš, že |x| je vzdialenosť čísla x od nuly. Preto podmienka „vzdialenosť od nuly je najviac 3“ opisuje všetky čísla od −3 do 3.</p><p>Až teraz tento význam zapíšeme stručne: <strong>|x| ≤ 3 ⇔ x ∈ ⟨−3; 3⟩</strong>.</p>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "shift",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Vzdialenosť od iného bodu",
        "html": "<p>Zápis <strong>|x − a|</strong> vyjadruje vzdialenosť čísla x od čísla a.</p><p>Napríklad <strong>|x − 2| ≤ 3</strong> znamená: x je od čísla 2 vzdialené najviac 3 jednotky. Na osi sa dostaneme od 2 − 3 = −1 po 2 + 3 = 5, teda <strong>x ∈ ⟨−1; 5⟩</strong>.</p><p>Neuč sa to ako trik so znamienkami; vždy si predstav stred a vzdialenosť.</p>"
      },
      {
        "id": "abs-int1",
        "type": "choice",
        "phase": "PREPOJ",
        "skill": "reprezentácie",
        "question": "Ktorý interval vyjadruje podmienku |x| < 4?",
        "options": [
          "(−4; 4)",
          "⟨−4; 4⟩",
          "(0; 4)"
        ],
        "answer": 0,
        "correct": "Správne. Vzdialenosť od nuly je menšia ako 4, preto krajné body ±4 nepatria.",
        "hint": "Predstav si všetky body vzdialené od nuly menej ako 4."
      },
      {
        "id": "abs-int2",
        "type": "choice",
        "phase": "PREPOJ",
        "skill": "reprezentácie",
        "question": "Ktorý interval vyjadruje |x − 5| ≤ 2?",
        "options": [
          "⟨−2; 2⟩",
          "⟨3; 7⟩",
          "(3; 7)"
        ],
        "answer": 1,
        "correct": "Áno. Stred je 5 a vzdialenosť najviac 2: od 3 po 7 vrátane.",
        "hint": "Najprv nájdi stred a potom choď o danú vzdialenosť doľava aj doprava."
      },
      {
        "id": "reverse",
        "type": "choice",
        "phase": "PRENES",
        "skill": "reprezentácie",
        "question": "Interval ⟨−6; 6⟩ opisuje všetky čísla, ktorých vzdialenosť od nuly je najviac 6. Ktorý zápis je správny?",
        "options": [
          "|x| ≤ 6",
          "|x| ≥ 6",
          "|x − 6| ≤ 0"
        ],
        "answer": 0,
        "correct": "Správne. Ide o vzdialenosť od nuly najviac 6.",
        "hint": "Všimni si, že interval je súmerný podľa nuly."
      },
      {
        "id": "error",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "kritické myslenie",
        "question": "Žiak rieši |x − 3| < 2 a napíše interval (−2; 2). Kde je chyba?",
        "options": [
          "Zabudol, že stredom je 3, nie 0.",
          "Mal použiť uzavreté zátvorky.",
          "Absolútna hodnota nemôže byť menšia ako 2."
        ],
        "answer": 0,
        "correct": "Presne. Interval musí byť okolo čísla 3: (1; 5).",
        "hint": "Zisti, od ktorého bodu sa meria vzdialenosť."
      },
      {
        "id": "notebook",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Toto si zapíš do zošita",
        "html": "<p>|x| je vzdialenosť x od 0.</p><p>|x − a| je vzdialenosť x od a.</p><p>Príklad: |x − 2| ≤ 3 znamená, že x je od 2 vzdialené najviac 3, preto x ∈ ⟨−1; 5⟩.</p><p>Pri ostrej nerovnosti &lt; krajné body nepatria; pri ≤ patria.</p>",
        "continueLabel": "Mám zapísané"
      },
      {
        "id": "argument",
        "type": "selfWrite",
        "phase": "ARGUMENTUJ",
        "skill": "argumentácia",
        "title": "Vysvetli bez naučeného vzorca",
        "prompt": "Prečo podmienka |x + 1| < 3 vedie na interval (−4; 2)?",
        "model": "Pretože |x + 1| = |x − (−1)| je vzdialenosť x od bodu −1. Vzdialenosť má byť menšia ako 3, takže ideme od −1 o 3 doľava a doprava: krajné body −4 a 2 nepatria."
      },
      {
        "id": "manual",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Riešenie bez mobilu",
        "html": "<p>V zošite vyrieš pomocou číselnej osi: <strong>a) |x| ≤ 5, b) |x − 4| &lt; 2, c) |x + 2| ≤ 1</strong>. Pri každej úlohe vyznač stred, vzdialenosť, krajné body a výsledný interval.</p>",
        "continueLabel": "Mám zapísané"
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "prepojenie absolútnej hodnoty s intervalom",
          "vzdialenosť |x − a|",
          "zdôvodnenie pomocou číselnej osi"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka."
      }
    ]
  }
});
