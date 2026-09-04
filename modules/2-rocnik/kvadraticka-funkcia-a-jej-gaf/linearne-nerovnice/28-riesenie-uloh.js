MathPlatform.registerModule({
  "id": "2-u04-h028",
  "teacher": {
    "placement": "2. ročník · Lineárne nerovnice · 28. hodina: Riešenie úloh",
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
      "5–15 min – výklad/objavovanie: upevnenie nerovníc s absolútnou hodnotou a kontrola riešenia na číselnej osi. Nový postup sa najprv vysvetlí a demonštruje, až potom sa používa.",
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
    "subtitle": "Téma 28 · Lineárne nerovnice",
    "intro": "Krátka približne 15-minútová digitálna aktivita. Počítanie a úplný algebraický postup zostávajú v zošite; platforma preveruje porozumenie, voľbu postupu, reprezentáciu a kontrolu.",
    "estimatedTime": "cca 15 min",
    "activities": [
      {
        "id": "strategy",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Najprv význam, potom algebra",
        "html": "<p>Pri absolútnej hodnote najprv skús interpretáciu vzdialenosti. Ak výraz nie je priamo v tvare |x−a|, uprav ho tak, aby bol význam čitateľný. Výsledok vždy skontroluj na číselnej osi.</p>"
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Rieš |x+2| ≤ 3. Ktorý interval je správny?",
        "options": [
          "⟨−5;1⟩",
          "(−5;1)",
          "(−∞;−5⟩ ∪ ⟨1;∞)"
        ],
        "answer": 0,
        "correct": "Správne. Vzdialenosť od −2 je najviac 3.",
        "hint": "Stred je −2."
      },
      {
        "id": "c2",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Rieš |2x−4| < 6. Po vydelení 2 dostaneme:",
        "options": [
          "|x−2| < 3",
          "|x−2| > 3",
          "|x−4| < 3"
        ],
        "answer": 0,
        "correct": "Áno. |2(x−2)|=2|x−2|.",
        "hint": "Najprv vytkni 2."
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Z |x−2| < 3 vyplýva:",
        "options": [
          "−1 < x < 5",
          "x < −1 alebo x > 5",
          "−5 < x < 1"
        ],
        "answer": 0,
        "correct": "Správne. 2−3=−1 a 2+3=5.",
        "hint": "Ide o vnútorný interval."
      },
      {
        "id": "c4",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Ktoré x spĺňa |x−4| > 2?",
        "options": [
          "x=4",
          "x=5",
          "x=7"
        ],
        "answer": 2,
        "correct": "Správne. |7−4|=3 > 2.",
        "hint": "Skontroluj vzdialenosť od 4."
      },
      {
        "id": "manual",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Úloha do zošita",
        "html": "<p><strong>ÚLOHA DO ZOŠITA:</strong> Rieš ručne <strong>|3x−6| ≥ 9</strong>. Výsledok zapíš ako nerovnosť, zjednotenie intervalov a vyznač na číselnej osi.</p>",
        "continueLabel": "Mám zapísané"
      },
      {
        "id": "sw",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Vysvetli postup",
        "prompt": "Ako ti číselná os pomôže skontrolovať, či pri |x−a| > r má byť riešením vnútorný interval alebo vonkajšie časti?",
        "model": "Znak > znamená vzdialenosť väčšiu než r, preto body musia ležať ďalej než krajné body a−r a a+r, teda vo vonkajších častiach."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "úprava absolútnej hodnoty",
          "riešenie nerovnice",
          "kontrola na osi"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka."
      }
    ]
  }
});
