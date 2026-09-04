MathPlatform.registerModule({
  "id": "2-u03-h017",
  "teacher": {
    "placement": "2. ročník · Lineárne rovnice · 17. hodina: Riešenie úloh",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "všetko učivo prebrané v predchádzajúcich hodinách a ročníkoch, ktoré je pre úlohu potrebné"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza tému „Riešenie úloh“. Obsah modulu rešpektuje jej miesto a rozsah v pláne."
    ],
    "planPerformance": [
      "V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; ciele modulu sú didaktickým rozpracovaním názvu a poradia tém, nie doplnením oficiálneho štandardu."
    ],
    "goals": [
      "porozumieť téme „Riešenie úloh“",
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
    "title": "Riešenie úloh",
    "subtitle": "Téma 17 · Lineárne rovnice",
    "intro": "Najprv pochop situáciu, potom počítaj alebo zapisuj. Nakoniec výsledok vysvetli a skontroluj.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Riešenie úloh",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 230\"><g font-family=\"system-ui\" fill=\"currentColor\"><text x=\"380\" y=\"65\" text-anchor=\"middle\" font-size=\"32\">3x + 5 = 20</text><path d=\"M180 115 H580\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"230\" y=\"155\" font-size=\"22\">ľavá strana</text><text x=\"455\" y=\"155\" font-size=\"22\">pravá strana</text><text x=\"380\" y=\"205\" text-anchor=\"middle\" font-size=\"20\">rovnováha musí zostať zachovaná</text></g></svg></div><p><strong>Dnešná otázka:</strong> Ako rozpoznať počet riešení rovnice s absolútnou hodnotou?</p>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "concept",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Najprv význam, potom symboly a výpočet",
        "html": "<p>Pri |výraz|=kladné číslo riešime dve vetvy; pri pravej strane 0 jednu a pri zápornej žiadnu.</p><p><strong>Čítaj zápis nahlas a skontroluj, čo znamená každý nový symbol alebo rozmer.</strong></p>"
      },
      {
        "id": "start",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "porozumenie",
        "question": "|2x−4|=0 má",
        "options": [
          "jedno riešenie x=2",
          "dve riešenia",
          "žiadne riešenie"
        ],
        "answer": 0,
        "correct": "Absolútna hodnota je nula práve vtedy, keď je vnútorný výraz nula.",
        "hint": "Najprv si pomenuj, čo je dané a čo hľadáš."
      },
      {
        "id": "explain1",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Povedz to presne",
        "prompt": "Vysvetli vlastnými slovami hlavnú myšlienku témy „Riešenie úloh“.",
        "model": "Pri |výraz|=kladné číslo riešime dve vetvy; pri pravej strane 0 jednu a pri zápornej žiadnu."
      },
      {
        "id": "notebook",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Zapíš si do zošita",
        "html": "<p><span class=\"mini-label\">ÚLOHA DO ZOŠITA</span><br>Vyrieš |3x−6|=9 dvoma vetvami a skontroluj obe riešenia.</p><p><span class=\"mini-label\">TOTO SI ZAPÍŠ DO ZOŠITA</span><br>Pri |výraz|=kladné číslo riešime dve vetvy; pri pravej strane 0 jednu a pri zápornej žiadnu.</p>",
        "model": "<strong>KONTROLA:</strong> Pri |výraz|=kladné číslo riešime dve vetvy; pri pravej strane 0 jednu a pri zápornej žiadnu."
      },
      {
        "id": "transfer",
        "type": "choice",
        "phase": "PRENES",
        "skill": "prenos",
        "question": "|x−5|=7 má riešenia",
        "options": [
          "12 a −2",
          "12 a 2",
          "−12 a 2"
        ],
        "answer": 0,
        "correct": "x−5=7 alebo x−5=−7.",
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
