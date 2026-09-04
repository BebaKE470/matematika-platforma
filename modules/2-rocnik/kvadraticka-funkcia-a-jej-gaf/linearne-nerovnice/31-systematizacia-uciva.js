MathPlatform.registerModule({
  "id": "2-u04-h031",
  "teacher": {
    "placement": "2. ročník · Lineárne nerovnice · 31. hodina: Systematizácia učiva",
    "prerequisites": [
      "učivo ZŠ a 1. ročníka: číselná os, nerovnosti, intervaly, absolútna hodnota a algebraické úpravy",
      "predchádzajúce učivo 2. ročníka: lineárna funkcia a lineárne rovnice; podľa poradia aj predchádzajúce hodiny tohto celku"
    ],
    "planContent": [
      "V poskytnutom tematickom pláne nie je pri tematickom celku „Lineárne nerovnice“ vyplnený samostatný obsahový štandard. Modul preto nevydáva doplnený text za oficiálny obsahový štandard; vychádza z názvu tematického celku a konkrétnej témy hodiny."
    ],
    "planPerformance": [
      "V poskytnutom tematickom pláne nie je pri tematickom celku „Lineárne nerovnice“ vyplnený samostatný výkonový štandard. Ciele nižšie sú ciele tejto vyučovacej hodiny, nie vymyslený oficiálny výkonový štandard."
    ],
    "goals": [
      "Kognitívny cieľ: žiak rozlíši a správne použije postup zodpovedajúci téme „Systematizácia učiva“.",
      "Praktický cieľ: žiak zapíše riešenie presne ako nerovnosť a/alebo interval a podľa potreby ho znázorní na číselnej osi.",
      "Afektívny cieľ: žiak systematicky kontroluje vlastný postup, prijíma korekciu chyby a vecne zdôvodní rozhodnutie.",
      "Kritérium úspechu: v 15-minútovej digitálnej časti žiak správne vyrieši väčšinu bodovaných položiek a dokáže pomenovať rozhodujúce pravidlo alebo kontrolu."
    ],
    "competencies": [
      "presný matematický zápis a komunikácia",
      "logické a analytické myslenie; kontrola podmienok a riešenia",
      "prechod medzi algebraickým zápisom, intervalom a číselnou osou",
      "samostatnosť, spolupráca a vecné zdôvodnenie postupu"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je iba obohatením spôsobu práce: reprezentácia množiny riešení, interpretácia, modelovanie, kontrola podmienok a argumentácia. Neurčuje poradie ani rozsah učiva."
    ],
    "flow": [
      "0–5 min – aktivácia predchádzajúcich vedomostí a krátka problémová otázka.",
      "5–15 min – výklad/objavovanie: systematické rozlíšenie typov nerovníc, voľba postupu a kontrola chýb. Nový postup sa najprv vysvetlí a demonštruje, až potom sa používa.",
      "15–25 min – spoločné príklady a krátka práca vo dvojiciach; žiaci zapisujú celý postup a kontrolujú podmienky.",
      "25–40 min – platforma približne 15 min: význam → rozhodnutie → kontrola chyby → reprezentácia → krátke zdôvodnenie. Platforma nenahrádza ručné algebraické riešenie.",
      "40–45 min – zhrnutie, spätná väzba, prípadne krátký exit ticket mimo platformy."
    ],
    "diagnostics": [
      "či žiak nemení smer nerovnosti bez dôvodu alebo ho nezabudne zmeniť pri násobení/delení záporným číslom",
      "či zapisuje výsledok ako množinu riešení a vie ho interpretovať",
      "či kontroluje definičné podmienky pri zlomkoch a význam absolútnej hodnoty tam, kde je potrebný"
    ],
    "partialUse": [
      "Metódy/formy: riadený rozhovor, problémová úloha, demonštrácia s otázkami, práca vo dvojiciach, individuálna práca, analýza chyby a formatívne hodnotenie.",
      "Pomôcky: tabuľa, zošit, písacie potreby, číselná os, projektor/interaktívna tabuľa a platforma; kalkulačka len ak výpočet nie je cieľom.",
      "Medzipredmetové vzťahy: fyzika a odborné predmety – prípustné rozsahy, limity, tolerancie a podmienky; informatika – logické podmienky.",
      "ŠVVP: podľa konkrétneho žiaka predĺžiť čas, znížiť počet položiek bez zníženia jadra cieľa, ponechať viditeľný vzor zápisu/číselnú os, zadanie členiť na kroky a podľa podporných opatrení umožniť ústne zdôvodnenie.",
      "Hodnotenie: priebežná slovná spätná väzba, konštruktívna korekcia, sebahodnotenie; XP nie sú známka."
    ]
  },
  "student": {
    "title": "Systematizácia učiva",
    "subtitle": "Téma 31 · Lineárne nerovnice",
    "intro": "Krátka približne 15-minútová digitálna aktivita. Počítanie a úplný algebraický postup zostávajú v zošite; platforma preveruje porozumenie, voľbu postupu, reprezentáciu a kontrolu.",
    "estimatedTime": "cca 15 min",
    "activities": [
      {
        "id": "map",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Mapa rozhodovania",
        "html": "<p><strong>Bežná lineárna nerovnica:</strong> ekvivalentné úpravy; pozor na záporné násobenie/delenie. <strong>Neznáma v menovateli:</strong> definičné podmienky + znamienka. <strong>Absolútna hodnota:</strong> vzdialenosť. <strong>Sústava:</strong> vyriešiť každú podmienku + prienik.</p>"
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Pri −3x < 12 je správny výsledok:",
        "options": [
          "x > −4",
          "x < −4",
          "x > 4"
        ],
        "answer": 0,
        "correct": "Správne. Pri delení −3 sa znak otočí.",
        "hint": "Delíš záporným číslom."
      },
      {
        "id": "c2",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Pri 2/(x+5) ≤ 0 je hodnota x=−5:",
        "options": [
          "riešenie",
          "vylúčená z definičného oboru",
          "vždy nulou zlomku"
        ],
        "answer": 1,
        "correct": "Správne. Menovateľ by bol nula.",
        "hint": "Zlomok s nulovým menovateľom neexistuje."
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "|x−1| ≤ 3 predstavuje:",
        "options": [
          "body vo vzdialenosti najviac 3 od 1",
          "body vo vzdialenosti viac ako 3 od 1",
          "iba x=1"
        ],
        "answer": 0,
        "correct": "Áno. Absolútna hodnota tu vyjadruje vzdialenosť.",
        "hint": "Čítaj |x−a|."
      },
      {
        "id": "c4",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Pri sústave x ≥ 0 a x < 7 je riešenie:",
        "options": [
          "⟨0;7)",
          "(0;7⟩",
          "(−∞;0⟩ ∪ (7;∞)"
        ],
        "answer": 0,
        "correct": "Správne. Ide o prienik.",
        "hint": "Obe podmienky musia platiť naraz."
      },
      {
        "id": "c5",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Ktorá veta je pravdivá?",
        "options": [
          "Pri delení nerovnice záporným číslom sa znak nemení.",
          "Pri sústave nerovníc hľadáme prienik riešení jednotlivých nerovníc.",
          "Hodnota, ktorá vynuluje menovateľ, môže patriť do riešenia."
        ],
        "answer": 1,
        "correct": "Správne. Sústava znamená súčasné splnenie podmienok.",
        "hint": "Skontroluj základné pravidlá celku."
      },
      {
        "id": "n",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Toto si zapíš do zošita",
        "html": "<p><strong>SYSTEMATIZÁCIA – LINEÁRNE NEROVNICE</strong></p><p>1. Urč typ nerovnice. 2. Zapíš podmienky. 3. Zvoľ správny postup. 4. Vykonaj úpravy a sleduj smer nerovnosti. 5. Zapíš množinu riešení. 6. Skontroluj krajné/vylúčené body a význam výsledku.</p>",
        "continueLabel": "Mám zapísané"
      },
      {
        "id": "sw",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Vysvetli postup",
        "prompt": "Ktoré tri kontroly považuješ pri riešení nerovníc za najdôležitejšie a prečo?",
        "model": "Napríklad: kontrola otočenia znaku pri zápornom násobení/delení; definičné podmienky pri menovateli; správne zahrnutie krajných bodov a intervalový zápis."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "voľba postupu",
          "kontrola podmienok",
          "presný zápis riešenia"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka."
      }
    ]
  }
});
