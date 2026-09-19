MathPlatform.registerModule({
  "id": "3-u03-h051",
  "teacher": {
    "placement": "3. ročník · Stereometria metrické úlohy · 51. hodina: Povrch a objem zrezaného ihlana",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "všetko učivo prebrané v predchádzajúcich hodinách a ročníkoch, ktoré je pre úlohu potrebné"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza tému „Povrch a objem zrezaného ihlana“. Obsah modulu rešpektuje jej miesto a rozsah v pláne."
    ],
    "planPerformance": [
      "Plán uvádza: vedieť klasifikovať a opísať vlastnosti telies a poznať a používať vzťahy pre výpočet objemov a povrchov telies."
    ],
    "goals": [
      "porozumieť téme „Povrch a objem zrezaného ihlana“",
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
    "title": "Povrch a objem zrezaného ihlana",
    "subtitle": "Téma 51 · Stereometria metrické úlohy",
    "intro": "Najprv pochop situáciu, potom počítaj alebo zapisuj. Nakoniec výsledok vysvetli a skontroluj.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Podobne ako sme z kužeľa odrezaním vrcholu dostali zrezaný kužeľ, aj z ihlana odrezaním vrcholu dostaneme zrezaný ihlan — teleso s dvoma podobnými mnohouholníkovými podstavami.</p><p>Postup je analogický zrezanému kužeľu, len namiesto kruhových podstáv pracujeme s obsahmi mnohouholníkov.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "opísať zrezaný ihlan ako ihlan so zrezaným vrcholom",
          "vypočítať objem zrezaného ihlana pomocou obsahov oboch podstáv a výšky"
        ]
      },
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Povrch a objem zrezaného ihlana",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 300\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"><path d=\"M220 70 L470 70 L590 135 L340 135 Z\"/><path d=\"M220 70 L220 220 L340 285 L340 135\"/><path d=\"M340 285 L590 220 L590 135\"/><path d=\"M220 220 L470 220 L590 285\" stroke-dasharray=\"7 7\" opacity=\".5\"/></g><g fill=\"currentColor\" font-family=\"system-ui\"><text x=\"180\" y=\"155\" font-size=\"20\">v</text><text x=\"350\" y=\"55\" font-size=\"20\">podstava</text><text x=\"455\" y=\"180\" font-size=\"20\">plášť</text></g></svg></div><p><strong>Dnešná otázka:</strong> Ako sa zrezaný ihlan skladá z dvoch podobných podstáv a plášťa?</p>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "concept",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Najprv význam, potom symboly a výpočet",
        "html": "<p><strong>Zrezaný ihlan:</strong> má dve podobné rovnobežné podstavy s obsahmi S₁ a S₂ a kolmú výšku v.</p><div class=\"formula\"><span class=\"mini-label\">ZREZANÝ IHLAN</span>V = (v/3)(S₁ + √(S₁S₂) + S₂), S = S₁ + S₂ + Q<span class=\"formula-note\">Q je obsah plášťa; pri konkrétnom telese ho treba určiť z obsahov bočných lichobežníkov.</span></div>"
      },
      {
        "id": "notebook",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Zapíš si do zošita",
        "html": "<p><span class=\"mini-label\">ÚLOHA DO ZOŠITA</span><br>Nakresli zrezaný štvorboký ihlan a označ obe podstavy a výšku.</p><p><span class=\"mini-label\">TOTO SI ZAPÍŠ DO ZOŠITA</span><br>Zrezaný ihlan má dve podobné rovnobežné podstavy. Pri výpočtoch treba presne určiť obsahy oboch podstáv a kolmú výšku.</p>",
        "model": "<strong>KONTROLA:</strong> Zrezaný ihlan má dve podobné rovnobežné podstavy. Pri výpočtoch treba presne určiť obsahy oboch podstáv a kolmú výšku."
      },
      {
        "id": "start",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "porozumenie",
        "question": "Zrezaný ihlan vznikne rezom ihlana rovinou",
        "options": [
          "prechádzajúcou vždy vrcholom",
          "kolmou na každú bočnú hranu",
          "rovnobežnou s podstavou"
        ],
        "answer": 2,
        "correct": "Rovnobežný rez vytvorí podobnú menšiu podstavu.",
        "hint": "Najprv si pomenuj, čo je dané a čo hľadáš."
      },
      {
        "id": "explain1",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Povedz to presne",
        "prompt": "Vysvetli vlastnými slovami hlavnú myšlienku témy „Povrch a objem zrezaného ihlana“.",
        "model": "Zrezaný ihlan má dve podobné rovnobežné podstavy. Pri výpočtoch treba presne určiť obsahy oboch podstáv a kolmú výšku."
      },
      {
        "id": "transfer",
        "type": "choice",
        "phase": "PRENES",
        "skill": "prenos",
        "question": "Ak horná podstava postupne klesne na bod, teleso sa blíži k",
        "options": [
          "ihlanu",
          "hranolu",
          "valcu"
        ],
        "answer": 0,
        "correct": "Dostávame pôvodný ihlan.",
        "hint": "Skús náčrt, odhad alebo spätnú kontrolu."
      },
      {
        "id": "error",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "kritické myslenie",
        "question": "Ktorý postup je pri tejto téme najspoľahlivejší?",
        "options": [
          "Zapamätať si iba posledný výsledok.",
          "Použiť pravidlo a skontrolovať podmienky aj jednotky.",
          "Preskočiť zápis a tipnúť odpoveď."
        ],
        "answer": 1,
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
