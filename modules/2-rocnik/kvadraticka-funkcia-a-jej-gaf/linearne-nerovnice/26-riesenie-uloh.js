MathPlatform.registerModule({
  "id": "2-u04-h026",
  "teacher": {
    "placement": "2. ročník · Lineárne nerovnice · 26. hodina: Riešenie úloh",
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
      "Kognitívny cieľ: žiak rozlíši a správne použije postup zodpovedajúci téme „Riešenie úloh“.",
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
      "5–15 min – výklad/objavovanie: upevnenie voľby správneho postupu a presného intervalového zápisu. Nový postup sa najprv vysvetlí a demonštruje, až potom sa používa.",
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
    "title": "Riešenie úloh",
    "subtitle": "Téma 26 · Lineárne nerovnice",
    "intro": "Krátka približne 15-minútová digitálna aktivita. Počítanie a úplný algebraický postup zostávajú v zošite; platforma preveruje porozumenie, voľbu postupu, reprezentáciu a kontrolu.",
    "estimatedTime": "cca 15 min",
    "activities": [
      {
        "id": "start",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Vyber správny postup",
        "html": "<p>Pri každej nerovnici najprv rozhodni, <strong>aký typ úlohy riešiš</strong>. Pri bežnej lineárnej nerovnici upravuješ podobne ako rovnicu; pri neznámej v menovateli najprv riešiš definičné podmienky a znamienka.</p>"
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Rieš: 5−2x ≤ 11. Ktorý výsledok je správny?",
        "options": [
          "x ≥ −3",
          "x ≤ −3",
          "x ≥ 3"
        ],
        "answer": 0,
        "correct": "Správne: −2x ≤ 6, po delení −2 dostaneme x ≥ −3.",
        "hint": "Pri delení −2 otoč znak."
      },
      {
        "id": "c2",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Ktorý zápis je správny pre x < 5?",
        "options": [
          "(−∞;5)",
          "(−∞;5⟩",
          "⟨5;∞)"
        ],
        "answer": 0,
        "correct": "Áno. Päť do riešenia nepatrí.",
        "hint": "Pri ostrej nerovnosti je krajný bod otvorený."
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Pre nerovnicu (x+1)/(x−3) < 0 sú kritické body:",
        "options": [
          "−1 a 3",
          "1 a −3",
          "iba 3"
        ],
        "answer": 0,
        "correct": "Správne. Nula čitateľa je −1 a vylúčená hodnota menovateľa je 3.",
        "hint": "Polož zvlášť čitateľ a menovateľ rovný nule."
      },
      {
        "id": "c4",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Na intervale (−1;3) má (x+1)/(x−3) aké znamienko?",
        "options": [
          "kladné",
          "záporné",
          "nulové pre všetky x"
        ],
        "answer": 1,
        "correct": "Správne. Napr. pre x=0 je 1/(−3) záporné.",
        "hint": "Otestuj x=0."
      },
      {
        "id": "manual",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Úloha do zošita",
        "html": "<p><strong>ÚLOHA DO ZOŠITA:</strong> Rieš ručne nerovnicu <strong>4x − 7 > 2x + 5</strong>. Zapíš všetky úpravy, výsledok ako nerovnosť aj interval a vyznač ho na číselnej osi.</p>",
        "continueLabel": "Mám zapísané"
      },
      {
        "id": "sw",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Vysvetli postup",
        "prompt": "Napíš, podľa čoho spoznáš, že pri riešení nestačia iba ekvivalentné úpravy ako pri lineárnej rovnici.",
        "model": "Ak je neznáma v menovateli, musím rešpektovať definičné podmienky a znamienko menovateľa; nemôžem bez rozboru násobiť výrazom s neznámym znamienkom."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "lineárna nerovnica",
          "intervalový zápis",
          "nerovnica so zlomkom"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka."
      }
    ]
  }
});
