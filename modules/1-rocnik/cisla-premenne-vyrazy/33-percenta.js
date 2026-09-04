MathPlatform.registerModule({
  "id": "1-u03-h033",
  "teacher": {
    "placement": "1. ročník · Čísla, premenné, výrazy · 33. hodina: Percentá",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "všetko učivo prebrané v predchádzajúcich hodinách a ročníkoch, ktoré je pre úlohu potrebné"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza tému „Percentá“. Obsah modulu rešpektuje jej miesto a rozsah v pláne."
    ],
    "planPerformance": [
      "Plán uvádza: riešiť úlohy finančnej matematiky; používať kritériá deliteľnosti; určiť NSN a NSD pomocou prvočíselného rozkladu. Ďalšie ciele modulu vychádzajú z uvedeného obsahu celku."
    ],
    "goals": [
      "porozumieť téme „Percentá“",
      "prepájať názornú, slovnú a symbolickú reprezentáciu",
      "vysvetliť postup a skontrolovať výsledok"
    ],
    "competencies": [
      "matematická komunikácia",
      "modelovanie a reprezentácie",
      "argumentácia a kontrola výsledku",
      "prehľadný ručný zápis"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie spôsobu práce: interpretácia, modelovanie, reprezentácie a zdôvodnenie. Neurčuje poradie učiva."
    ],
    "flow": [
      "2–3 min: problém alebo názorný podnet",
      "cca 15 min: vybrané digitálne aktivity",
      "8–10 min: ručné riešenie a zápis do zošita",
      "3–5 min: spoločná kontrola"
    ],
    "diagnostics": [
      "žiak rozumie použitým symbolom",
      "nevykonáva operáciu bez kontroly podmienok",
      "vie výsledok vysvetliť slovami"
    ],
    "partialUse": [
      "Modul možno použiť celý približne 15 minút alebo vybrať jeho časť.",
      "Mobil nenahrádza ručné počítanie, náčrt, presný zápis ani argumentáciu."
    ]
  },
  "student": {
    "title": "Percentá",
    "subtitle": "Téma 33 · Čísla, premenné, výrazy",
    "intro": "Najprv pochop situáciu, potom počítaj alebo zapisuj. Nakoniec výsledok vysvetli a skontroluj.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Percentá",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 220\"><line x1=\"70\" y1=\"110\" x2=\"690\" y2=\"110\" stroke=\"currentColor\" stroke-width=\"3\"/><g fill=\"currentColor\" font-family=\"system-ui\" font-size=\"18\"><text x=\"70\" y=\"145\">0</text><text x=\"210\" y=\"145\">1/2</text><text x=\"365\" y=\"145\">1</text><text x=\"520\" y=\"145\">√2</text><text x=\"665\" y=\"145\">2</text></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"75\" y1=\"100\" x2=\"75\" y2=\"120\"/><line x1=\"225\" y1=\"100\" x2=\"225\" y2=\"120\"/><line x1=\"380\" y1=\"100\" x2=\"380\" y2=\"120\"/><line x1=\"535\" y1=\"100\" x2=\"535\" y2=\"120\"/><line x1=\"680\" y1=\"100\" x2=\"680\" y2=\"120\"/></g></svg></div><p><strong>Dnešná otázka:</strong> Čo presne znamená percento a čo je základ?</p>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "concept",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Najprv význam, potom symboly a výpočet",
        "html": "<p>p % znamená p stotín zo základu. Pred výpočtom treba určiť základ, počet percent a percentovú hodnotu.</p><p><strong>Čítaj zápis nahlas a skontroluj, čo znamená každý nový symbol alebo rozmer.</strong></p>"
      },
      {
        "id": "start",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "porozumenie",
        "question": "15 % z 240 je",
        "options": [
          "24",
          "36",
          "40"
        ],
        "answer": 1,
        "correct": "0,15·240=36.",
        "hint": "Najprv si pomenuj, čo je dané a čo hľadáš."
      },
      {
        "id": "explain1",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Povedz to presne",
        "prompt": "Vysvetli vlastnými slovami hlavnú myšlienku témy „Percentá“.",
        "model": "p % znamená p stotín zo základu. Pred výpočtom treba určiť základ, počet percent a percentovú hodnotu."
      },
      {
        "id": "notebook",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Zapíš si do zošita",
        "html": "<p><span class=\"mini-label\">ÚLOHA DO ZOŠITA</span><br>Zapíš 12 % ako zlomok aj desatinné číslo a vypočítaj 12 % z 350.</p><p><span class=\"mini-label\">TOTO SI ZAPÍŠ DO ZOŠITA</span><br>p % znamená p stotín zo základu. Pred výpočtom treba určiť základ, počet percent a percentovú hodnotu.</p>",
        "model": "<strong>KONTROLA:</strong> p % znamená p stotín zo základu. Pred výpočtom treba určiť základ, počet percent a percentovú hodnotu."
      },
      {
        "id": "transfer",
        "type": "choice",
        "phase": "PRENES",
        "skill": "prenos",
        "question": "Cena 80 € sa zvýši o 25 %. Nová cena je",
        "options": [
          "100 €",
          "105 €",
          "60 €"
        ],
        "answer": 0,
        "correct": "25 % z 80 je 20, teda 100 €.",
        "hint": "Skús náčrt, odhad alebo spätnú kontrolu."
      },
      {
        "id": "error",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "kritické myslenie",
        "question": "Ktorý postup je pri tejto téme najspoľahlivejší?",
        "options": [
          "Použiť pravidlo a skontrolovať podmienky aj jednotky.",
          "Zapamätať si iba posledný výsledok.",
          "Preskočiť zápis a tipnúť odpoveď."
        ],
        "answer": 0,
        "correct": "Áno. Postup musí byť kontrolovateľný a výsledok interpretovaný.",
        "hint": "Matematika nie je tipovanie."
      },
      {
        "id": "explain2",
        "type": "selfWrite",
        "phase": "ARGUMENTUJ",
        "skill": "argumentácia",
        "title": "Prečo to funguje?",
        "prompt": "Napíš jednu vetu, ktorou by si spolužiakovi zdôvodnil/a svoj postup.",
        "model": "Dobré zdôvodnenie pomenúva použité pravidlo, ukazuje rozhodujúci krok a overí, že výsledok spĺňa zadanie."
      },
      {
        "id": "manual",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Ceruzka má posledné slovo",
        "html": "<p><span class=\"mini-label\">ÚLOHA</span><br>Vytvor alebo vyrieš podobný príklad v zošite bez aplikácie. Výsledok skontroluj iným spôsobom, ak je to možné.</p>",
        "model": "<strong>KONTROLA:</strong> Zápis má byť čitateľný, s medzikrokmi, jednotkami alebo podmienkami podľa typu úlohy."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "porozumenie",
          "presný zápis",
          "kontrola výsledku"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka."
      }
    ]
  }
});
