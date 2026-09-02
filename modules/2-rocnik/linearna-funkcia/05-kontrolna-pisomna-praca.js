MathPlatform.registerModule({
  "id": "2-u01-h005",
  "teacher": {
    "placement": "2. ročník · Lineárna funkcia · Hodina 5 · Kontrolná písomná práca",
    "prerequisites": [
      "hodiny 1–4"
    ],
    "planContent": [
      "Téma a poradie sú prevzaté z aktuálneho tematického plánu 2. ročníka.",
      "Pri prvých dvoch tematických celkoch nie je v zdrojovom pláne samostatne vyplnený výkonový ani obsahový štandard; ciele sú didaktickým rozpracovaním názvu témy a nadväznosti hodín."
    ],
    "planPerformance": [
      "Nevymýšľame chýbajúci oficiálny výkonový štandard. Sledujeme primerané očakávané výkony uvedené v cieľoch modulu."
    ],
    "goals": [
      "overiť samostatné zvládnutie základných pojmov, výpočtov a grafu",
      "udržať digitálnu časť iba ako krátke naladenie, nie náhradu písomky"
    ],
    "competencies": [
      "prepájanie slovného, tabuľkového, algebraického a grafického vyjadrenia",
      "presné matematické vyjadrovanie",
      "čítanie a interpretácia grafu",
      "zdôvodnenie odpovede na základe definície alebo grafu"
    ],
    "enrichment": [
      "Aktuálny tematický plán určuje obsah a poradie tejto hodiny; návrh maturitného štandardu sa používa iba ako metodické obohatenie.",
      "Digitálny nástroj tu nepreberá úlohu písomnej práce; rešpektujeme potrebu ručného výpočtu, zápisu a argumentácie."
    ],
    "flow": [
      "3–5 min digitálne naladenie",
      "hlavná časť na papieri",
      "spoločná reflexia až po odovzdaní"
    ],
    "diagnostics": [
      "porozumenie zadaniu",
      "samostatnosť"
    ],
    "partialUse": [
      "Modul je možné použiť celý alebo vybrať iba objavovaciu, zošitovú či diagnostickú časť podľa priebehu hodiny."
    ]
  },
  "student": {
    "title": "Kontrolný bod",
    "subtitle": "Mobil potom odlož",
    "intro": "Krátke naladenie pred samostatnou písomnou prácou.",
    "estimatedTime": "5–7 min + papierová práca",
    "activities": [
      {
        "id": "instructions",
        "type": "info",
        "phase": "KONTROLNÁ PRÁCA",
        "title": "Aplikácia dnes iba pripraví štart",
        "html": "<p>Najprv krátko skontroluješ, či rozumieš zadaniam. Potom zariadenie odložíš a hlavnú kontrolnú prácu riešiš <strong>samostatne na papieri</strong>.</p><p class=\"keyidea\">XP z tejto krátkej časti nie sú známka z písomnej práce.</p>"
      },
      {
        "id": "warm1",
        "type": "choice",
        "phase": "NALADENIE",
        "skill": "lineárna funkcia",
        "stimulus": "f(x)=−2x+4",
        "question": "Ktorý údaj vieš vyčítať okamžite?",
        "options": [
          "nulový bod je −2",
          "graf pretína os y v [0;4]",
          "funkcia je rastúca",
          "f(0)=−2"
        ],
        "answer": 1,
        "correct": "b=4, preto f(0)=4.",
        "hint": "Pozri na samostatný člen b."
      },
      {
        "id": "warm2",
        "type": "choice",
        "phase": "NALADENIE",
        "skill": "graf",
        "question": "Čo znamená, že bod [3;5] leží na grafe funkcie f?",
        "options": [
          "f(5)=3",
          "f(3)=5",
          "f(x)=15",
          "nulový bod je 3"
        ],
        "answer": 1,
        "correct": "x-ová súradnica je vstup a y-ová súradnica je funkčná hodnota.",
        "hint": "Bod na grafe má tvar [x; f(x)]."
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "ODLOŽ ZARIADENIE",
        "title": "Kontrolná písomná práca",
        "html": "<p>Teraz pokračuj podľa zadania učiteľa na papieri. Pri riešení zapisuj výpočty, označuj body grafu a tam, kde sa to žiada, stručne zdôvodni odpoveď.</p>",
        "model": "Po skončení si skontroluj, či si odpovedal/a na všetky časti zadaní a či sú grafy označené."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Pri každej zručnosti označ, ako sa teraz cítiš.",
        "skills": [
          "rozumiem zadaniam k lineárnej funkcii",
          "viem pracovať bez digitálnej pomoci",
          "viem zapísať postup a záver"
        ]
      }
    ]
  }
});
