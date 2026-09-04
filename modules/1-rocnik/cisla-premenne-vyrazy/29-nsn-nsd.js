MathPlatform.registerModule({
  "id": "1-u03-h029",
  "teacher": {
    "placement": "1. ročník · Čísla, premenné, výrazy · 29. hodina: NSN, NSD",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "všetko učivo prebrané v predchádzajúcich hodinách a ročníkoch, ktoré je pre úlohu potrebné"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza tému „NSN, NSD“. Obsah modulu rešpektuje jej miesto a rozsah v pláne."
    ],
    "planPerformance": [
      "Plán uvádza: riešiť úlohy finančnej matematiky; používať kritériá deliteľnosti; určiť NSN a NSD pomocou prvočíselného rozkladu. Ďalšie ciele modulu vychádzajú z uvedeného obsahu celku."
    ],
    "goals": [
      "porozumieť téme „NSN, NSD“",
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
      "Návrh maturitného štandardu je použitý iba ako obohatenie spôsobu práce: interpretácia, modelovanie, reprezentácie a zdôvodnenie. Neurčuje poradie učiva.",
      "Originálna maturitná úloha je zaradená až v okamihu, keď sú všetky potrebné poznatky už dostupné."
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
    "title": "NSN, NSD",
    "subtitle": "Téma 29 · Čísla, premenné, výrazy",
    "intro": "Najprv pochop situáciu, potom počítaj alebo zapisuj. Nakoniec výsledok vysvetli a skontroluj.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "NSN, NSD",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 220\"><line x1=\"70\" y1=\"110\" x2=\"690\" y2=\"110\" stroke=\"currentColor\" stroke-width=\"3\"/><g fill=\"currentColor\" font-family=\"system-ui\" font-size=\"18\"><text x=\"70\" y=\"145\">0</text><text x=\"210\" y=\"145\">1/2</text><text x=\"365\" y=\"145\">1</text><text x=\"520\" y=\"145\">√2</text><text x=\"665\" y=\"145\">2</text></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"75\" y1=\"100\" x2=\"75\" y2=\"120\"/><line x1=\"225\" y1=\"100\" x2=\"225\" y2=\"120\"/><line x1=\"380\" y1=\"100\" x2=\"380\" y2=\"120\"/><line x1=\"535\" y1=\"100\" x2=\"535\" y2=\"120\"/><line x1=\"680\" y1=\"100\" x2=\"680\" y2=\"120\"/></g></svg></div><p><strong>Dnešná otázka:</strong> Kedy hľadáme spoločný násobok a kedy spoločného deliteľa?</p>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "concept",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Najprv význam, potom symboly a výpočet",
        "html": "<p>NSD je najväčší spoločný deliteľ; NSN najmenší kladný spoločný násobok. Prvočíselný rozklad pomáha oba určiť.</p><p><strong>Čítaj zápis nahlas a skontroluj, čo znamená každý nový symbol alebo rozmer.</strong></p>"
      },
      {
        "id": "start",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "porozumenie",
        "question": "NSD(18,24) je",
        "options": [
          "3",
          "6",
          "72"
        ],
        "answer": 1,
        "correct": "Najväčší spoločný deliteľ je 6.",
        "hint": "Najprv si pomenuj, čo je dané a čo hľadáš."
      },
      {
        "id": "explain1",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Povedz to presne",
        "prompt": "Vysvetli vlastnými slovami hlavnú myšlienku témy „NSN, NSD“.",
        "model": "NSD je najväčší spoločný deliteľ; NSN najmenší kladný spoločný násobok. Prvočíselný rozklad pomáha oba určiť."
      },
      {
        "id": "notebook",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Zapíš si do zošita",
        "html": "<p><span class=\"mini-label\">ÚLOHA DO ZOŠITA</span><br>Rozlož 36 a 48 na prvočinitele a vyznač spoločné faktory.</p><p><span class=\"mini-label\">ZAPÍŠ SI DO ZOŠITA</span><br>Zapíš si do zošita hlavné pravidlo alebo postup a jeden vlastný príklad.</p>",
        "model": "<strong>KONTROLA:</strong> NSD je najväčší spoločný deliteľ; NSN najmenší kladný spoločný násobok. Prvočíselný rozklad pomáha oba určiť."
      },
      {
        "id": "transfer",
        "type": "choice",
        "phase": "PRENES",
        "skill": "prenos",
        "question": "Dve kontroly sa opakujú každých 6 a 8 dní. O koľko dní sa stretnú?",
        "options": [
          "14",
          "24",
          "48"
        ],
        "answer": 1,
        "correct": "Hľadáme NSN(6,8)=24.",
        "hint": "Skús náčrt, odhad alebo spätnú kontrolu."
      },
      {
        "id": "matura",
        "type": "choice",
        "phase": "MATURITNÝ PRENOS",
        "skill": "NSN",
        "question": "Originálna maturitná úloha 2023, úloha 16: Najmenší spoločný násobok čísla 2 190 a štvorciferného čísla x je 13 140. Určte x.",
        "options": [
          "2 628",
          "4 380",
          "6 570",
          "9 855"
        ],
        "answer": 0,
        "correct": "2 190=2·3·5·73 a 13 140=2²·3²·5·73. Štvorciferné x musí doplniť druhú mocninu 2 a 3, teda x=2²·3²·73=2 628.",
        "hint": "Porovnaj prvočíselné rozklady NSN a čísla 2 190."
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
