MathPlatform.registerModule({
  "id": "3-u02-h022",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 22 · Trojuholník",
    "prerequisites": [
      "základná planimetria zo ZŠ",
      "Pytagorova veta a goniometria trojuholníka z 2. ročníka",
      "logika, množiny a algebraické úpravy z 1. ročníka",
      "goniometria z predchádzajúceho tematického celku 3. ročníka",
      ""
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
    "title": "Trojuholník",
    "subtitle": "Náčrt → vzťah → výpočet → vysvetlenie",
    "intro": "Pracuj postupne: najprv význam a obrázok, potom zápis a až potom samostatná úloha.",
    "estimatedTime": "18–24 min",
    "activities": [
      {
        "id": "observe",
        "type": "info",
        "phase": "NAJPRV OBRÁZOK",
        "title": "Trojuholník",
        "html": "<div class=\"coordinate-wrap\"><svg class=\"coordinate-plot\" viewBox=\"0 0 500 330\" role=\"img\"><polygon points=\"90,270 250,60 420,270\" fill=\"none\" stroke=\"#173d35\" stroke-width=\"4\"/><line x1=\"250\" y1=\"60\" x2=\"250\" y2=\"270\" stroke=\"#9b6b2f\" stroke-width=\"3\" stroke-dasharray=\"7 6\"/><text x=\"258\" y=\"175\">v</text><text x=\"245\" y=\"292\">a</text></svg></div><p>Najprv vytvor náčrt, označ známe údaje a rozhodni, ktorý útvar alebo rozklad v úlohe vidíš.</p>"
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
        "html": "<p>Do zošita si načrtni situáciu k téme <strong>Trojuholník</strong>, označ známe a hľadané veličiny a vyrieš jeden číselný príklad. Jednotky zapisuj pri medzivýsledkoch aj výsledku.</p>",
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
        "skill": "logika a geometria",
        "prompt": "Maturita 2024, úloha 21. Z nasledujúcich tvrdení vyber ekvivalenciu.",
        "options": [
          "V rovnostrannom trojuholníku sú všetky ťažnice zhodné a kolmé na príslušnú stranu.",
          "V každom trojuholníku je súčet vnútorných uhlov 180°.",
          "Ak je jeden vnútorný uhol tupý, zvyšné dva sú ostré.",
          "Stred kružnice opísanej rovnoramennému trojuholníku leží vo vnútri alebo vo vrchole.",
          "Trojuholník je pravouhlý práve vtedy, ak pre dĺžky strán platí Pytagorova veta."
        ],
        "answer": 4,
        "correct": "„Práve vtedy“ vyjadruje ekvivalenciu a Pytagorova veta spolu s obrátenou vetou dáva obe implikácie.",
        "hint": "Hľadaj tvrdenie platné v oboch smeroch."
      },
      {
        "id": "clean",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Trojuholník",
        "html": "<p><strong>TEÓRIA:</strong> Najprv vytvor náčrt, označ známe údaje a rozhodni, ktorý útvar alebo rozklad v úlohe vidíš.</p><p>Doplň presný náčrt a jeden vzorový príklad po spoločnej kontrole.</p>",
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
