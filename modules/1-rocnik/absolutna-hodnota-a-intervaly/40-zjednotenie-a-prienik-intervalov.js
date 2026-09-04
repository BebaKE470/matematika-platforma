MathPlatform.registerModule({
  "id": "1-u04-h040",
  "teacher": {
    "placement": "1. ročník · Absolútna hodnota a intervaly · 40. hodina: Zjednotenie a prienik intervalov",
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
      "Kognitívny cieľ: žiak vysvetlí význam prieniku a zjednotenia intervalov a určí výsledok pri prekrývajúcich sa aj disjunktných intervaloch.",
      "Afektívny cieľ: žiak systematicky kontroluje hraničné body namiesto odhadovania podľa obrázka.",
      "Praktický cieľ: žiak zakreslí dva intervaly na spoločnú číselnú os a z grafického prekrytia vytvorí presný intervalový zápis.",
      "Kritérium úspechu: žiak správne určí prienik a zjednotenie v aspoň 4 z 5 situácií vrátane prípadu s problematickým krajným bodom."
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
      "0–5 min – aktivácia vedomostí z tematického celku Množiny: význam ∩ a ∪ bez nového učiva.",
      "5–12 min – demonštrácia dvoch intervalov na spoločnej osi; slovne „spoločná časť“ a „aspoň jeden“, potom symbolický zápis.",
      "12–22 min – spoločné príklady: prekrytie, disjunktné intervaly a dotyk v krajnom bode.",
      "22–35 min – platforma: výber výsledku, analýza hraničnej chyby a argumentácia.",
      "35–42 min – dvojice/individuálne: ručné zakreslenie a výpočet A ∩ B, A ∪ B.",
      "42–45 min – zhrnutie postupu a sebahodnotenie."
    ],
    "diagnostics": [
      "či žiak nezamieňa ∩ a ∪",
      "či kontroluje príslušnosť dotykového bodu do oboch intervalov",
      "či vie zdôvodniť výsledok slovami „v oboch“ a „aspoň v jednom“"
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
    "title": "Zjednotenie a prienik intervalov",
    "subtitle": "Téma 40 · Absolútna hodnota a intervaly",
    "intro": "Použijeme operácie, ktoré už poznáš z množín, ale tentoraz na súvislé časti číselnej osi.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "recap",
        "type": "info",
        "phase": "POCHOP",
        "title": "Dva intervaly na jednej osi",
        "html": "<p>Z množín už poznáš dve operácie: <strong>prienik ∩</strong> a <strong>zjednotenie ∪</strong>. Teraz ich použijeme na intervaly.</p><p><strong>Prienik</strong> hľadá čísla, ktoré patria do oboch intervalov. <strong>Zjednotenie</strong> obsahuje čísla, ktoré patria aspoň do jedného z nich.</p>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "method",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Najprv prekrytie, potom zápis",
        "html": "<p>Pri dvoch intervaloch si ich najprv predstav alebo zakresli na tú istú číselnú os.</p><p><strong>A ∩ B</strong>: nechaj iba spoločnú časť.<br><strong>A ∪ B</strong>: vezmi všetko, čo pokrýva A alebo B.</p><p>Pri krajných bodoch vždy skontroluj, či do výsledku patria.</p>"
      },
      {
        "id": "intersection",
        "type": "choice",
        "phase": "OVER",
        "skill": "prienik",
        "question": "Nech A = ⟨−2; 4⟩ a B = (1; 6⟩. Čomu sa rovná A ∩ B?",
        "options": [
          "(1; 4⟩",
          "⟨−2; 6⟩",
          "⟨1; 4)"
        ],
        "answer": 0,
        "correct": "Správne. Spoločné sú čísla väčšie ako 1 až po 4 vrátane.",
        "hint": "Hľadaj iba prekrytie oboch intervalov a skontroluj body 1 a 4."
      },
      {
        "id": "union",
        "type": "choice",
        "phase": "OVER",
        "skill": "zjednotenie",
        "question": "Nech A = ⟨−2; 4⟩ a B = (1; 6⟩. Čomu sa rovná A ∪ B?",
        "options": [
          "(1; 4⟩",
          "⟨−2; 6⟩",
          "⟨−2; 4⟩"
        ],
        "answer": 1,
        "correct": "Áno. Intervaly sa prekrývajú, preto spolu pokryjú celý úsek od −2 po 6 vrátane.",
        "hint": "Pri zjednotení vezmi všetky čísla, ktoré patria aspoň do jedného intervalu."
      },
      {
        "id": "disjoint",
        "type": "choice",
        "phase": "PRENES",
        "skill": "prienik",
        "question": "A = (−5; −2) a B = ⟨1; 4⟩. Aký je A ∩ B?",
        "options": [
          "∅",
          "(−5; 4⟩",
          "⟨−2; 1⟩"
        ],
        "answer": 0,
        "correct": "Správne. Intervaly nemajú žiadne spoločné číslo.",
        "hint": "Pozri sa, či sa intervaly vôbec dotýkajú alebo prekrývajú."
      },
      {
        "id": "endpoint",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "kritické myslenie",
        "question": "A = ⟨0; 2⟩ a B = (2; 5). Žiak tvrdí, že A ∩ B = {2}. Je to správne?",
        "options": [
          "Áno, lebo oba intervaly končia alebo začínajú v 2.",
          "Nie, lebo 2 nepatrí do B, takže prienik je ∅.",
          "Nie, lebo 2 nepatrí ani do A."
        ],
        "answer": 1,
        "correct": "Presne. Spoločný bod musí patriť do oboch množín; tu 2 do B nepatrí.",
        "hint": "Pri prieniku nestačí, že sa konce stretnú. Bod musí patriť do oboch intervalov."
      },
      {
        "id": "notebook",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Toto si zapíš do zošita",
        "html": "<p><strong>A ∩ B</strong> – prienik: čísla, ktoré patria do A aj do B.</p><p><strong>A ∪ B</strong> – zjednotenie: čísla, ktoré patria do A alebo do B (aspoň do jedného).</p><p>Postup: zakresli oba intervaly → nájdi spoločnú/celú pokrytú časť → skontroluj krajné body → zapíš výsledok.</p>",
        "continueLabel": "Mám zapísané"
      },
      {
        "id": "argument",
        "type": "selfWrite",
        "phase": "ARGUMENTUJ",
        "skill": "argumentácia",
        "title": "Zdôvodni krajný bod",
        "prompt": "Prečo pri prieniku A = ⟨−1; 3) a B = ⟨3; 7⟩ nepatrí číslo 3 do výsledku?",
        "model": "Číslo 3 síce patrí do B, ale nepatrí do A. Do prieniku musí číslo patriť do oboch intervalov, preto 3 v prieniku nie je."
      },
      {
        "id": "manual",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Bez mobilu",
        "html": "<p>V zošite zakresli na jednu číselnú os <strong>A = (−3; 2⟩</strong> a <strong>B = ⟨0; 5)</strong>. Urči <strong>A ∩ B</strong> aj <strong>A ∪ B</strong> a pri každom výsledku skontroluj oba krajné body.</p>",
        "continueLabel": "Mám zapísané"
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "prienik intervalov",
          "zjednotenie intervalov",
          "kontrola krajných bodov"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka."
      }
    ]
  }
});
