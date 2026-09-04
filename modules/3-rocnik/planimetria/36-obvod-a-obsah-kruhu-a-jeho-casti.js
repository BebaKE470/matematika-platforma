MathPlatform.registerModule({
  "id": "3-u02-h036",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 36 · Obvod a obsah kruhu a jeho častí",
    "prerequisites": [
      "základná planimetria zo ZŠ",
      "Pytagorova veta a goniometria trojuholníka z 2. ročníka",
      "logika, množiny a algebraické úpravy z 1. ročníka",
      "goniometria z predchádzajúceho tematického celku 3. ročníka",
      "učivo hodín 22–35"
    ],
    "planContent": [
      "Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka."
    ],
    "planPerformance": [
      "Poznať a vedieť opísať vlastnosti základných rovinných útvarov.",
      "Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov."
    ],
    "goals": [
      "opísať vlastnosti príslušného rovinného útvaru",
      "použiť vhodný vzťah pre obvod alebo obsah",
      "interpretovať výsledok s jednotkou"
    ],
    "competencies": [
      "prepájať obrázok, slovný opis a symbolický zápis",
      "pracovať ručne v zošite a zdôvodniť postup",
      "rozlíšiť údaj, vzťah a záver"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie: reprezentácie, modelovanie, presný matematický jazyk a argumentácia.",
      "Modelovanie a prechod medzi obrázkom, symbolickým zápisom a slovným záverom sú prirodzeným obohatením."
    ],
    "flow": [
      "4–5 min aktivácia predchádzajúcich vedomostí",
      "15–22 min vybraná digitálna časť",
      "8–12 min zápis do zošita a ručné riešenie",
      "5 min spoločná syntéza"
    ],
    "diagnostics": [
      "sleduj, či žiak rozumie významu symbolov a vzťahov, nielen postupu",
      "pri chybe sa vráť k obrázku alebo definícii"
    ],
    "partialUse": [
      "Modul nie je povinné použiť celý; učiteľ môže vybrať iba objavovaciu, vizuálnu alebo diagnostickú časť."
    ]
  },
  "student": {
    "title": "Obvod a obsah kruhu a jeho častí",
    "subtitle": "Náčrt → vzťah → výpočet → vysvetlenie",
    "intro": "Pracuj postupne: najprv význam a obrázok, potom zápis a až potom samostatná úloha.",
    "estimatedTime": "18–24 min",
    "activities": [
      {
        "id": "observe",
        "type": "info",
        "phase": "NAJPRV OBRÁZOK",
        "title": "Obvod a obsah kruhu a jeho častí",
        "html": "<div class=\"coordinate-wrap\"><svg class=\"coordinate-plot\" viewBox=\"0 0 500 330\" role=\"img\"><circle cx=\"250\" cy=\"170\" r=\"120\" fill=\"none\" stroke=\"#173d35\" stroke-width=\"4\"/><line x1=\"250\" y1=\"170\" x2=\"370\" y2=\"170\" stroke=\"#9b6b2f\" stroke-width=\"4\"/><text x=\"305\" y=\"160\">r</text><path d=\"M250 170 L370 170 A120 120 0 0 0 310 66 Z\" fill=\"rgba(155,107,47,.12)\" stroke=\"#9b6b2f\" stroke-width=\"2\"/><text x=\"325\" y=\"110\">α</text></svg></div><p>Kruh: S=πr², o=2πr. Pri výseku pracujeme s príslušnou časťou celého uhla 360°.</p>"
      },
      {
        "id": "meaning",
        "type": "explain",
        "phase": "VÝZNAM",
        "title": "Obvod nie je obsah",
        "html": "<p><strong>Obvod</strong> meria dĺžku hranice útvaru a zapisujeme ho v dĺžkových jednotkách. <strong>Obsah</strong> meria veľkosť plochy a zapisujeme ho v štvorcových jednotkách.</p>",
        "remember": "Vzorec používaj až po tom, čo vieš, ktoré rozmery v obrázku predstavujú jeho veličiny."
      },
      {
        "id": "check",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "planimetria",
        "question": "Čo má byť pred dosadením do vzorca?",
        "options": [
          "náčrt, označenie údajov a voľba vhodného vzťahu",
          "iba kalkulačka",
          "zaokrúhlenie výsledku",
          "výber jednotky bez výpočtu"
        ],
        "answer": 0,
        "correct": "Náčrt a označenie údajov znižujú riziko zámeny veličín.",
        "hint": "Najprv matematický model."
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Náčrt a riešenie",
        "html": "<p>Do zošita si načrtni situáciu k téme <strong>Obvod a obsah kruhu a jeho častí</strong>, označ známe a hľadané veličiny a vyrieš jeden číselný príklad. Jednotky zapisuj pri medzivýsledkoch aj výsledku.</p>",
        "model": "Kontrola: náčrt → údaje → vzťah → dosadenie → výpočet → jednotka → odpoveď."
      },
      {
        "id": "arg",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "title": "Prečo práve tento vzťah?",
        "prompt": "Jednou alebo dvoma vetami vysvetli, prečo je zvolený vzťah vhodný pre tvoj náčrt.",
        "model": "Vzor: Pomenujem útvar, označím rozmery, ktoré poznám, a vysvetlím, ako zodpovedajú veličinám vo vzorci."
      },
      {
        "id": "matura",
        "type": "choice",
        "phase": "ORIGINÁLNA MATURITNÁ ÚLOHA",
        "skill": "kruhový výsek",
        "prompt": "Maturita 2023, úloha 13. Dva výseky majú rovnaký stredový uhol a polomery v pomere 2:5. Väčší má obsah 18 cm². Aký je obsah menšieho?",
        "options": [
          "2,88 cm²",
          "7,2 cm²",
          "11,25 cm²",
          "45 cm²"
        ],
        "answer": 0,
        "correct": "Pri rovnakom uhle sa obsahy menia so štvorcom polomeru: 18·(2/5)²=18·4/25=2,88 cm².",
        "hint": "Obsah výseku je úmerný r²."
      },
      {
        "id": "clean",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Obvod a obsah kruhu a jeho častí",
        "html": "<p><strong>TEÓRIA:</strong> Kruh: S=πr², o=2πr. Pri výseku pracujeme s príslušnou časťou celého uhla 360°.</p><p>Doplň presný náčrt a jeden vzorový príklad po spoločnej kontrole.</p>",
        "model": "Zápis do zošita: názov útvaru → označenie → vzťahy → jednotky → jeden modelový príklad."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Pri každej zručnosti označ, ako sa teraz cítiš.",
        "skills": [
          "viem vytvoriť a označiť náčrt",
          "viem zvoliť vzťah pre obvod/obsah",
          "viem výsledok zdôvodniť a uviesť s jednotkou"
        ]
      }
    ]
  }
});
