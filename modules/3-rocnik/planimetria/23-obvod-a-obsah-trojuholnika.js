MathPlatform.registerModule({
  "id": "3-u02-h023",
  "teacher": {
    "placement": "3. ročník · Planimetria · Hodina 23 · Obvod a obsah trojuholníka",
    "prerequisites": [
      "základná planimetria zo ZŠ",
      "Pytagorova veta a goniometria trojuholníka z 2. ročníka",
      "logika, množiny a algebraické úpravy z 1. ročníka",
      "goniometria z predchádzajúceho tematického celku 3. ročníka",
      "učivo hodín 22–22"
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
    "title": "Obvod a obsah trojuholníka",
    "subtitle": "Náčrt → vzťah → výpočet → vysvetlenie",
    "intro": "Pracuj postupne: najprv význam a obrázok, potom zápis a až potom samostatná úloha.",
    "estimatedTime": "18–24 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Zo ZŠ poznáš základnú planimetriu, z 2. ročníka Pytagorovu vetu a goniometriu trojuholníka a z 1. ročníka logiku, množiny a algebraické úpravy. Z hodiny 22 vieš, ktoré prvky trojuholníka (strana, výška) budeme potrebovať.</p><p>Dnes doplníme presný vzťah pre obvod a obsah trojuholníka a vyskúšame ho na čísle.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "vypočítať obsah trojuholníka zo strany a výšky",
          "vypočítať obvod ako súčet troch strán",
          "interpretovať výsledok s jednotkou"
        ]
      },
      {
        "id": "observe",
        "type": "info",
        "phase": "NAJPRV OBRÁZOK",
        "title": "Obvod a obsah trojuholníka",
        "html": "<div class=\"coordinate-wrap\"><svg class=\"coordinate-plot\" viewBox=\"0 0 500 330\" role=\"img\"><polygon points=\"90,270 250,60 420,270\" fill=\"none\" stroke=\"#173d35\" stroke-width=\"4\"/><line x1=\"250\" y1=\"60\" x2=\"250\" y2=\"270\" stroke=\"#9b6b2f\" stroke-width=\"3\" stroke-dasharray=\"7 6\"/><text x=\"258\" y=\"175\">v</text><text x=\"245\" y=\"292\">a</text></svg></div><div class=\"formula\">S = a·vₐ/2<span class=\"formula-note\">Obvod je súčet troch strán.</span></div>"
      },
      {
        "id": "worked-example",
        "type": "explain",
        "phase": "PRÍKLAD",
        "title": "Vyskúšajme to na čísle",
        "html": "<div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>Trojuholník má stranu a = 8 cm a k nej prislúchajúcu výšku vₐ = 5 cm. Ostatné dve strany sú 6 cm a 7 cm.</p><p>S = a·vₐ/2 = 8·5/2 = <strong>20 cm²</strong></p><p>o = 8 + 6 + 7 = <strong>21 cm</strong></p></div>"
      },
      {
        "id": "clean",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Obvod a obsah trojuholníka",
        "html": "<p><strong>TEÓRIA:</strong> S = a·vₐ/2; obvod je súčet troch strán.</p><p>Doplň presný náčrt a jeden vzorový príklad po spoločnej kontrole.</p>",
        "model": "Zápis do zošita: názov útvaru → označenie → vzťahy → jednotky → jeden modelový príklad."
      },
      {
        "id": "meaning",
        "type": "explain",
        "phase": "VÝZNAM",
        "title": "Obvod nie je obsah",
        "html": "<div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Obvod</div><p class=\"term-rule\">Meria dĺžku hranice útvaru a zapisujeme ho v dĺžkových jednotkách.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Obsah</div><p class=\"term-rule\">Meria veľkosť plochy a zapisujeme ho v štvorcových jednotkách.</p></div></div>",
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
        "html": "<p>Do zošita si načrtni situáciu k téme <strong>Obvod a obsah trojuholníka</strong>, označ známe a hľadané veličiny a vyrieš jeden číselný príklad. Jednotky zapisuj pri medzivýsledkoch aj výsledku.</p>",
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
          "iba vzorec",
          "číselný výsledok s jednotkou a krátkou odpoveďou podľa otázky",
          "iba obrázok",
          "číslo bez jednotky"
        ],
        "answer": 1,
        "correct": "Výsledok musí byť interpretovaný v kontexte a mať správnu jednotku.",
        "hint": "Matematický výsledok treba vrátiť do zadania."
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
