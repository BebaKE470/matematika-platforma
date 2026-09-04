MathPlatform.registerModule({
  "id": "2-u04-h030",
  "teacher": {
    "placement": "2. ročník · Lineárne nerovnice · 30. hodina: Riešenie úloh",
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
      "5–15 min – výklad/objavovanie: modelovanie praktických podmienok sústavou nerovníc a interpretácia výsledku. Nový postup sa najprv vysvetlí a demonštruje, až potom sa používa.",
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
    "subtitle": "Téma 30 · Lineárne nerovnice",
    "intro": "Krátka približne 15-minútová digitálna aktivita. Počítanie a úplný algebraický postup zostávajú v zošite; platforma preveruje porozumenie, voľbu postupu, reprezentáciu a kontrolu.",
    "estimatedTime": "cca 15 min",
    "activities": [
      {
        "id": "model",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Z textu na podmienky",
        "html": "<p>V praktickej úlohe slová <strong>najmenej, najviac, viac ako, menej ako, od–do</strong> prekladáme na nerovnosti. Ak platí viac podmienok súčasne, vzniká sústava a hľadáme prienik.</p>"
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Technický parameter musí byť najmenej 12 mm a menej ako 18 mm. Ktorý zápis je správny?",
        "options": [
          "12 ≤ x < 18",
          "12 < x ≤ 18",
          "x < 12 alebo x ≥ 18"
        ],
        "answer": 0,
        "correct": "Správne. „Najmenej“ zahŕňa 12, „menej ako“ nezahŕňa 18.",
        "hint": "Prelož každé slovné spojenie zvlášť."
      },
      {
        "id": "c2",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Ktorý interval zodpovedá 12 ≤ x < 18?",
        "options": [
          "⟨12;18)",
          "(12;18⟩",
          "(−∞;12⟩"
        ],
        "answer": 0,
        "correct": "Áno. Ľavý bod patrí, pravý nie.",
        "hint": "Sleduj ≤ a <."
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Prvá podmienka dá x > −2, druhá x ≤ 6. Čo je výsledok sústavy?",
        "options": [
          "(−2;6⟩",
          "⟨−2;6)",
          "(−∞;−2) ∪ ⟨6;∞)"
        ],
        "answer": 0,
        "correct": "Správne. Ide o spoločnú časť.",
        "hint": "Použi prienik."
      },
      {
        "id": "c4",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Ktorá hodnota NEVYHOVUJE podmienke −2 < x ≤ 6?",
        "options": [
          "−1",
          "6",
          "−2"
        ],
        "answer": 2,
        "correct": "Správne. −2 je vylúčený krajný bod.",
        "hint": "Ostrá nerovnosť −2 < x."
      },
      {
        "id": "manual",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Úloha do zošita",
        "html": "<p><strong>ÚLOHA DO ZOŠITA:</strong> Dĺžka súčiastky má byť väčšia ako 24,8 mm a najviac 25,2 mm. Zapíš podmienky ako sústavu nerovníc, interval a znázorni riešenie na číselnej osi.</p>",
        "continueLabel": "Mám zapísané"
      },
      {
        "id": "sw",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Vysvetli postup",
        "prompt": "Vysvetli rozdiel medzi slovami „najviac 10“ a „menej ako 10“ v matematickom zápise.",
        "model": "„Najviac 10“ znamená x ≤ 10 a hodnota 10 je dovolená. „Menej ako 10“ znamená x < 10 a hodnota 10 dovolená nie je."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "preklad slovnej podmienky",
          "sústava podmienok",
          "interpretácia intervalu"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka."
      }
    ]
  }
});
