MathPlatform.registerModule({
  "id": "3-u03-h043",
  "teacher": {
    "placement": "3. ročník · Stereometria metrické úlohy · 43. hodina: Povrch a objem – hranol",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "všetko učivo prebrané v predchádzajúcich hodinách a ročníkoch, ktoré je pre úlohu potrebné"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza tému „Povrch a objem – hranol“. Obsah modulu rešpektuje jej miesto a rozsah v pláne."
    ],
    "planPerformance": [
      "Plán uvádza: vedieť klasifikovať a opísať vlastnosti telies a poznať a používať vzťahy pre výpočet objemov a povrchov telies."
    ],
    "goals": [
      "porozumieť téme „Povrch a objem – hranol“",
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
    "title": "Povrch a objem – hranol",
    "subtitle": "Téma 43 · Stereometria metrické úlohy",
    "intro": "Najprv pochop situáciu, potom počítaj alebo zapisuj. Nakoniec výsledok vysvetli a skontroluj.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Povrch a objem – hranol",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 300\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"><path d=\"M220 70 L470 70 L590 135 L340 135 Z\"/><path d=\"M220 70 L220 220 L340 285 L340 135\"/><path d=\"M340 285 L590 220 L590 135\"/><path d=\"M220 220 L470 220 L590 285\" stroke-dasharray=\"7 7\" opacity=\".5\"/></g><g fill=\"currentColor\" font-family=\"system-ui\"><text x=\"180\" y=\"155\" font-size=\"20\">v</text><text x=\"350\" y=\"55\" font-size=\"20\">podstava</text><text x=\"455\" y=\"180\" font-size=\"20\">plášť</text></g></svg></div><p><strong>Dnešná otázka:</strong> Čo zostáva rovnaké pre každý kolmý hranol?</p>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "concept",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Najprv význam, potom symboly a výpočet",
        "html": "<p>Objem hranola je V=Sp·v. Povrch tvorí dvojica podstáv a plášť: S=2Sp+Q.</p><p><strong>Čítaj zápis nahlas a skontroluj, čo znamená každý nový symbol alebo rozmer.</strong></p>"
      },
      {
        "id": "start",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "porozumenie",
        "question": "Objem hranola vypočítame ako",
        "options": [
          "obsah podstavy × výška",
          "obvod podstavy × výška",
          "obsah plášťa × výška"
        ],
        "answer": 0,
        "correct": "V=Sp·v.",
        "hint": "Najprv si pomenuj, čo je dané a čo hľadáš."
      },
      {
        "id": "explain1",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Povedz to presne",
        "prompt": "Vysvetli vlastnými slovami hlavnú myšlienku témy „Povrch a objem – hranol“.",
        "model": "Objem hranola je V=Sp·v. Povrch tvorí dvojica podstáv a plášť: S=2Sp+Q."
      },
      {
        "id": "notebook",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Zapíš si do zošita",
        "html": "<p><span class=\"mini-label\">ÚLOHA DO ZOŠITA</span><br>Nakresli hranol, označ podstavu, výšku a plášť.</p><p><span class=\"mini-label\">TOTO SI ZAPÍŠ DO ZOŠITA</span><br>Objem hranola je V=Sp·v. Povrch tvorí dvojica podstáv a plášť: S=2Sp+Q.</p>",
        "model": "<strong>KONTROLA:</strong> Objem hranola je V=Sp·v. Povrch tvorí dvojica podstáv a plášť: S=2Sp+Q."
      },
      {
        "id": "transfer",
        "type": "choice",
        "phase": "PRENES",
        "skill": "prenos",
        "question": "Trojboký hranol má Sp=12 cm² a v=5 cm. V=",
        "options": [
          "17 cm³",
          "60 cm³",
          "120 cm³"
        ],
        "answer": 1,
        "correct": "12·5=60 cm³.",
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
