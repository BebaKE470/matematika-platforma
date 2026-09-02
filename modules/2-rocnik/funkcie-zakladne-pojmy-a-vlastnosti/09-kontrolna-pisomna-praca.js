MathPlatform.registerModule({
  "id": "2-u02-h009",
  "teacher": {
    "placement": "2. ročník · Funkcie – základné pojmy a vlastnosti · Hodina 9 · Kontrolná písomná práca",
    "prerequisites": [
      "hodiny 6–8"
    ],
    "planContent": [
      "Téma a poradie sú prevzaté z aktuálneho tematického plánu 2. ročníka.",
      "Pri prvých dvoch tematických celkoch nie je v zdrojovom pláne samostatne vyplnený výkonový ani obsahový štandard; ciele sú didaktickým rozpracovaním názvu témy a nadväznosti hodín."
    ],
    "planPerformance": [
      "Nevymýšľame chýbajúci oficiálny výkonový štandard. Sledujeme primerané očakávané výkony uvedené v cieľoch modulu."
    ],
    "goals": [
      "overiť samostatné čítanie vlastností funkcie z grafu",
      "rozlišovať definície a správne matematické formulácie",
      "nechať hlavnú kontrolu na papieri"
    ],
    "competencies": [
      "prepájanie slovného, tabuľkového, algebraického a grafického vyjadrenia",
      "presné matematické vyjadrovanie",
      "čítanie a interpretácia grafu",
      "zdôvodnenie odpovede na základe definície alebo grafu"
    ],
    "enrichment": [
      "Aktuálny tematický plán určuje obsah a poradie tejto hodiny; návrh maturitného štandardu sa používa iba ako metodické obohatenie.",
      "Digitálna časť slúži iba na orientáciu v pojmoch; výkon sa overuje samostatnou prácou, zápisom a argumentáciou."
    ],
    "flow": [
      "3–5 min digitálne naladenie",
      "hlavná písomná práca na papieri"
    ],
    "diagnostics": [
      "D/H",
      "vlastnosti",
      "samostatné zdôvodnenie"
    ],
    "partialUse": [
      "Modul je možné použiť celý alebo vybrať iba objavovaciu, zošitovú či diagnostickú časť podľa priebehu hodiny."
    ]
  },
  "student": {
    "title": "Vlastnosti funkcie",
    "subtitle": "Kontrolný bod",
    "intro": "Pred písomkou si overíš, či presne rozumieš pojmom. Potom zariadenie odložíš.",
    "estimatedTime": "5–7 min + papierová práca",
    "activities": [
      {
        "id": "intro",
        "type": "info",
        "phase": "KONTROLNÁ PRÁCA",
        "title": "Krátka digitálna kontrola zadania",
        "html": "<p>Pred papierovou prácou si overíš dve veci: či presne čítaš symboly D(f), H(f) a či rozumieš názvom vlastností. Potom zariadenie odložíš.</p>"
      },
      {
        "id": "warm1",
        "type": "choice",
        "phase": "NALADENIE",
        "skill": "D a H",
        "stimulus": "H(f)=⟨−1;5⟩",
        "question": "Čo musí platiť?",
        "options": [
          "x môže byť iba od −1 do 5",
          "funkcia nadobúda hodnotu 5",
          "D(f)=H(f)",
          "funkcia je ohraničená iba zhora"
        ],
        "answer": 1,
        "correct": "Ak 5 patrí do H(f), funkcia hodnotu 5 dosahuje.",
        "hint": "H(f) obsahuje výstupy."
      },
      {
        "id": "warm2",
        "type": "choice",
        "phase": "NALADENIE",
        "skill": "vlastnosti",
        "question": "Ktorý test z grafu používame na prostosť?",
        "options": [
          "zvislá priamka pretne graf najviac raz",
          "vodorovná priamka pretne graf najviac raz",
          "graf je súmerný podľa osi y",
          "graf prechádza začiatkom"
        ],
        "answer": 1,
        "correct": "Vodorovný test zisťuje, či sa rovnaká hodnota y neopakuje pri rôznych vstupoch.",
        "hint": "Prostosť rieši rovnaký výstup pre rôzne vstupy."
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "ODLOŽ ZARIADENIE",
        "title": "Kontrolná písomná práca",
        "html": "<p>Teraz rieš úlohy na papieri podľa zadania učiteľa. Pri grafoch zapisuj D(f), H(f), intervaly monotónnosti, extrémy, symetriu, prostosť a ohraničenosť iba tam, kde sú z grafu jednoznačne určiteľné.</p>",
        "model": "Kontrola pred odovzdaním: odlíšil/a som x-ovú súradnicu bodu extrému od hodnoty maxima/minima? Zdôvodnil/a som tvrdenia, kde to zadanie vyžaduje?"
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Pri každej zručnosti označ, ako sa teraz cítiš.",
        "skills": [
          "rozumiem symbolom a pojmom",
          "viem čítať vlastnosti z grafu",
          "viem pracovať samostatne na papieri"
        ]
      }
    ]
  }
});
