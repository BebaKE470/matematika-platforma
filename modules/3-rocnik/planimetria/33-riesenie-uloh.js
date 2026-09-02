MathPlatform.registerModule({
  "id": "3-u02-h033",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 33 · Riešenie úloh",
    "prerequisites": [
      "základná planimetria zo ZŠ",
      "Pytagorova veta a goniometria trojuholníka z 2. ročníka",
      "logika, množiny a algebraické úpravy z 1. ročníka",
      "goniometria z predchádzajúceho tematického celku 3. ročníka",
      "učivo hodín 22–32"
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
      "8–12 min pracovný/čistý zápis a ručné riešenie",
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
    "title": "Riešenie úloh",
    "subtitle": "Náčrt → vzťah → výpočet → vysvetlenie",
    "intro": "Pracuj postupne: najprv význam a obrázok, potom zápis a až potom samostatná úloha.",
    "estimatedTime": "18–24 min",
    "activities": [
      {
        "id": "observe",
        "type": "info",
        "phase": "NAJPRV OBRÁZOK",
        "title": "Riešenie úloh",
        "html": "<div class=\"coordinate-wrap\"><svg class=\"coordinate-plot\" viewBox=\"0 0 500 330\" role=\"img\"><polygon points=\"150,70 410,70 350,270 90,270\" fill=\"none\" stroke=\"#173d35\" stroke-width=\"4\"/><line x1=\"150\" y1=\"70\" x2=\"150\" y2=\"270\" stroke=\"#9b6b2f\" stroke-width=\"3\" stroke-dasharray=\"7 6\"/><text x=\"158\" y=\"175\">vₐ</text><text x=\"220\" y=\"292\">a</text></svg></div><p>Najprv vytvor náčrt, označ známe údaje a rozhodni, ktorý útvar alebo rozklad v úlohe vidíš.</p>"
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
        "phase": "PRACOVNÝ ZÁPIS",
        "title": "Náčrt a riešenie",
        "html": "<p>Do zošita si načrtni situáciu k téme <strong>Riešenie úloh</strong>, označ známe a hľadané veličiny a vyrieš jeden číselný príklad. Jednotky zapisuj pri medzivýsledkoch aj výsledku.</p>",
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
        "id": "transfer",
        "type": "choice",
        "phase": "MATURITNÝ FORMÁT",
        "skill": "modelovanie",
        "question": "Ktorý zápis najlepšie uzatvára geometrickú úlohu?",
        "options": [
          "číselný výsledok s jednotkou a krátkou odpoveďou podľa otázky",
          "iba vzorec",
          "iba obrázok",
          "číslo bez jednotky"
        ],
        "answer": 0,
        "correct": "Výsledok musí byť interpretovaný v kontexte a mať správnu jednotku.",
        "hint": "Matematický výsledok treba vrátiť do zadania."
      },
      {
        "id": "clean",
        "type": "notebook",
        "phase": "ČISTÝ ZÁPIS",
        "title": "Riešenie úloh",
        "html": "<p><strong>TEÓRIA:</strong> Najprv vytvor náčrt, označ známe údaje a rozhodni, ktorý útvar alebo rozklad v úlohe vidíš.</p><p>Doplň presný náčrt a jeden vzorový príklad po spoločnej kontrole.</p>",
        "model": "Čistý zápis: názov útvaru → označenie → vzťahy → jednotky → jeden modelový príklad."
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
