MathPlatform.registerModule({
  "id": "1-u02-h024",
  "teacher": {
    "placement": "1. ročník · Množiny · 24. hodina: Vennove diagramy",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "výroková logika z predchádzajúceho tematického celku tam, kde pomáha presnému čítaniu podmienok"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza pre 24. hodinu tému „Vennove diagramy“. Súhrnný obsah celku zahŕňa úvod do množín, prvky a zápis, podmnožiny, prázdnu a univerzálnu množinu, kardinalitu, zjednotenie, prienik, rozdiel, doplnok, Vennove diagramy, kombinované a aplikačné úlohy."
    ],
    "planPerformance": [
      "V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; ciele modulu sú didaktickým rozpracovaním názvu a poradia tém, nie doplnením oficiálneho štandardu."
    ],
    "goals": [
      "porozumieť téme „Vennove diagramy“",
      "prepájať slovný, symbolický a grafický zápis",
      "zdôvodniť riešenie a skontrolovať ho na konkrétnom príklade"
    ],
    "competencies": [
      "matematická komunikácia",
      "práca s reprezentáciami",
      "argumentácia a kontrola výsledku",
      "prehľadný zápis v zošite"
    ],
    "enrichment": [
      "Návrh maturitného štandardu sa využíva iba ako obohatenie: reprezentácia množín, Vennove diagramy, prepojenie množinových operácií s logickými spojkami a presná argumentácia."
    ],
    "flow": [
      "4–5 min: krátky problém pri tabuli",
      "15–20 min: vybrané digitálne aktivity",
      "8–10 min: zápis do zošita a ručná úloha",
      "5 min: spoločné zdôvodnenie"
    ],
    "diagnostics": [
      "rozlišuje prvok a množinu/podmnožinu podľa témy",
      "číta symbolický zápis bez hádania",
      "vie výsledok vysvetliť slovami alebo diagramom"
    ],
    "partialUse": [
      "Modul nemusí byť použitý celý. Vyberte iba tie aktivity, ktoré v danej hodine podporia učenie.",
      "Mobil nenahrádza ručné riešenie, presný zápis ani argumentáciu."
    ]
  },
  "student": {
    "title": "Obrázok, ktorý číta podmienky",
    "subtitle": "Téma 24 · Vennove diagramy",
    "intro": "Pracuj presne: najprv pochop význam zápisu, potom počítaj alebo kresli a nakoniec svoje rozhodnutie zdôvodni.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Doteraz sme sa naučili štyri operácie s množinami: zjednotenie A ∪ B, prienik A ∩ B, rozdiel A − B a doplnok A′.</p><p>Dnes si všetky štyri prepojíme s <strong>Vennovým diagramom</strong> — obrázkom, ktorý ich zobrazí naraz.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "prečítať vo Vennovom diagrame zjednotenie, prienik, rozdiel a doplnok",
          "prepojiť obrázok so symbolickým zápisom"
        ]
      },
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Obrázok, ktorý číta podmienky",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 300\"><g font-family=\"system-ui\"><circle cx=\"315\" cy=\"145\" r=\"105\" fill=\"currentColor\" opacity=\".07\" stroke=\"currentColor\" stroke-width=\"3\"/><circle cx=\"445\" cy=\"145\" r=\"105\" fill=\"currentColor\" opacity=\".12\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"250\" y=\"65\" font-size=\"22\">A</text><text x=\"495\" y=\"65\" font-size=\"22\">B</text><text x=\"380\" y=\"285\" text-anchor=\"middle\" font-size=\"18\">Prekrytie kruhov = A ∩ B</text></g></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "notebook",
        "type": "explain",
        "phase": "ZHRNUTIE",
        "title": "Ako čítať Vennov diagram",
        "html": "<p>Ako čítať Vennov diagram dvoch množín A, B v obdĺžniku U:</p><ul><li><strong>prekrytie kruhov</strong> = A ∩ B</li><li><strong>celá plocha oboch kruhov</strong> = A ∪ B</li><li><strong>časť A mimo B</strong> = A − B</li><li><strong>plocha mimo kruhu A (v rámci U)</strong> = doplnok A′</li></ul>"
      },
      {
        "id": "start",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "Vennov diagram",
        "question": "Čo v dvojmnožinovom Vennovom diagrame predstavuje prekrytie kruhov A a B?",
        "options": [
          "A∩B",
          "A∪B",
          "A−B"
        ],
        "answer": 0,
        "correct": "Prekrytie znamená súčasné členstvo v A aj B.",
        "hint": "Nakresli si malý diagram alebo vypíš prvky."
      },
      {
        "id": "readvenn",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "Vennov diagram",
        "title": "Prelož medzi obrazom a zápisom",
        "labels": [
          "prienik",
          "zjednotenie",
          "rozdiel"
        ],
        "items": [
          {
            "text": "spoločná časť A a B",
            "answer": "prienik"
          },
          {
            "text": "celá plocha oboch kruhov",
            "answer": "zjednotenie"
          },
          {
            "text": "časť A mimo B",
            "answer": "rozdiel"
          }
        ]
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Jedna veta nestačí bez dôvodu",
        "prompt": "Vysvetli jednou až dvoma vetami, podľa čoho si pri poslednej úlohe rozhodol/a.",
        "model": "Možná presná formulácia: Prekrytie oblastí A a B predstavuje prienik A∩B. Celá oblasť oboch kruhov predstavuje zjednotenie A∪B a časť jedného kruhu mimo druhého predstavuje rozdiel.",
        "placeholder": "Rozhodol/a som tak, pretože..."
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Vennov diagram",
        "question": "V prekrývajúcich sa kruhoch A a B predstavuje prekryv:",
        "options": [
          "A ∪ B",
          "A ∩ B",
          "A−B"
        ],
        "answer": 1,
        "correct": "Prekryv tvoria prvky patriace súčasne do A aj B.",
        "hint": "Prekryv = spoločná časť."
      },
      {
        "id": "extra-b",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Vennov diagram",
        "question": "Oblasť v obdĺžniku U mimo kruhu A predstavuje:",
        "options": [
          "iba A",
          "A ∩ U",
          "doplnok A"
        ],
        "answer": 2,
        "correct": "Je to časť univerzálnej množiny, ktorá nepatrí do A.",
        "hint": "Obdĺžnik predstavuje U."
      },
      {
        "id": "extra-c",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Diagram ako preklad",
        "prompt": "Vysvetli, ako ti Vennov diagram pomáha rozlíšiť zjednotenie a prienik.",
        "model": "Pri zjednotení sledujem celé oblasti oboch množín; pri prieniku iba ich spoločný prekryv."
      },
      {
        "id": "vsetky-operacie",
        "type": "selfWrite",
        "phase": "ZHRNUTIE",
        "skill": "Matematická komunikácia",
        "title": "Všetky štyri operácie na jednom príklade",
        "promptHtml": "<span class=\"mini-label\">ÚLOHA</span><br>Máme univerzálnu množinu U = {1, 2, 3, …, 10}, množinu prvočísel do 10 A = {2, 3, 5, 7} a množinu B = {1, 2, 3, 4, 5}.<br><br>Nakresli si k tomu Vennov diagram a vlastnými slovami vysvetli, prečo platí:<br>a) A ∪ B = {1, 2, 3, 4, 5, 7}<br>b) A ∩ B = {2, 3, 5}<br>c) A − B = {7}<br>d) doplnok A′ v U = {1, 4, 6, 8, 9, 10}",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> a) Zjednotenie obsahuje všetko, čo je aspoň v jednej z množín — preto tam chýba iba 6, 8, 9, 10, ktoré nie sú ani v A, ani v B. b) Prienik obsahuje iba prvočísla z A, ktoré sú súčasne aj v B (2, 3, 5 sú ≤5, ale 7 už nie). c) Rozdiel A−B necháva z A iba to, čo v B chýba — jediné také číslo je 7. d) Doplnok A′ berie všetko z U okrem prvočísel v A."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "Vennov diagram",
          "reprezentácia",
          "čítanie podmienok"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; porovnaj svoj pocit s výsledkom úloh."
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 8,
        "text": "Nech U = {1, 2, 3, 4, 5, 6, 7}, A = {1, 2, 3, 4} a B = {3, 4, 5}. Nakresli Vennov diagram a zapíš prvky do jednotlivých oblastí: iba v A, v A aj B, iba v B, mimo oboch kruhov.",
        "answer": "iba v A: 1, 2<br>v A aj B: 3, 4<br>iba v B: 5<br>mimo oboch kruhov: 6, 7"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 8,
        "text": "Nakresli štyri Vennove diagramy dvoch množín A, B v obdĺžniku U a vyfarbi vždy:\na) A ∪ B\nb) A ∩ B\nc) A − B\nd) A′",
        "answer": "a) obidva kruhy celé<br>b) iba prekryv kruhov<br>c) časť kruhu A mimo prekryvu<br>d) všetko v obdĺžniku mimo kruhu A (vrátane časti B, ktorá je mimo A)"
      },
      {
        "id": "w3",
        "level": "rozsirenie",
        "space": 8,
        "text": "V triede je 28 žiakov. Na plávanie chodí 16 žiakov, na tanec 11 žiakov a 5 žiakov chodí na oboje. Nakresli Vennov diagram a zapíš počet žiakov v každej oblasti (iba plávanie, iba tanec, oboje, ani jedno).",
        "answer": "iba plávanie: 16 − 5 = 11<br>iba tanec: 11 − 5 = 6<br>oboje: 5<br>ani jedno: 28 − (11 + 6 + 5) = 6"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 4,
        "text": "Zapíš symbolicky (pomocou A, B a operácií) tú časť diagramu, ktorá obsahuje:\na) prvky, ktoré sú v B, ale nie sú v A\nb) prvky, ktoré sú v A aj v B\nc) prvky, ktoré nie sú v B",
        "answer": "a) B − A<br>b) A ∩ B<br>c) B′"
      },
      {
        "id": "w5",
        "level": "bonus",
        "space": 6,
        "text": "Zo 100 opýtaných pije 60 kávu, 45 čaj a 20 pije kávu aj čaj. Nakresli diagram a urč, koľko opýtaných pije iba kávu, iba čaj, aspoň jeden z nápojov a ani jeden.",
        "answer": "iba kávu: 60 − 20 = 40<br>iba čaj: 45 − 20 = 25<br>aspoň jeden: 40 + 25 + 20 = 85<br>ani jeden: 100 − 85 = 15"
      }
    ]
  }
});
