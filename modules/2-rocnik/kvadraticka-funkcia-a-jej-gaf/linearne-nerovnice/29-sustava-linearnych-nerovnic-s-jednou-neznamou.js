MathPlatform.registerModule({
  "id": "2-u04-h029",
  "teacher": {
    "placement": "2. ročník · Lineárne nerovnice · 29. hodina: Sústava lineárnych nerovníc s jednou neznámou",
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
      "Kognitívny cieľ: žiak rozlíši a správne použije postup zodpovedajúci téme „Sústava lineárnych nerovníc s jednou neznámou“.",
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
      "5–15 min – výklad/objavovanie: sústava ako súčasné splnenie podmienok a prienik množín riešení. Nový postup sa najprv vysvetlí a demonštruje, až potom sa používa.",
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
    "title": "Sústava lineárnych nerovníc s jednou neznámou",
    "subtitle": "Téma 29 · Lineárne nerovnice",
    "intro": "Krátka približne 15-minútová digitálna aktivita. Počítanie a úplný algebraický postup zostávajú v zošite; platforma preveruje porozumenie, voľbu postupu, reprezentáciu a kontrolu.",
    "estimatedTime": "cca 15 min",
    "activities": [
      {
        "id": "intersection",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Sústava znamená „platí súčasne“",
        "html": "<p>Pri sústave nerovníc musí x spĺňať <strong>všetky podmienky naraz</strong>. Každú nerovnicu vyriešime samostatne a potom vezmeme <strong>prienik</strong> množín riešení.</p>"
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Sústava x > 1 a x ≤ 5 má riešenie:",
        "options": [
          "(1;5⟩",
          "(−∞;1) ∪ ⟨5;∞)",
          "⟨1;5)"
        ],
        "answer": 0,
        "correct": "Správne. Potrebujeme čísla väčšie ako 1 a zároveň najviac 5.",
        "hint": "Hľadaj prienik oboch podmienok."
      },
      {
        "id": "c2",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Ak prvá nerovnica dá x ≥ 4 a druhá x < 2, prienik je:",
        "options": [
          "ℝ",
          "∅",
          "⟨2;4⟩"
        ],
        "answer": 1,
        "correct": "Áno. Žiadne číslo nemôže súčasne spĺňať obe podmienky.",
        "hint": "Intervaly sa neprekrývajú."
      },
      {
        "id": "process",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Postup",
        "html": "<p>1. Vyrieš každú nerovnicu. 2. Zapíš jej množinu riešení. 3. Znázorni obe množiny na jednej číselnej osi. 4. Vyber spoločnú časť – prienik.</p>"
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Sústava 2x−1 ≥ 3 a x+4 < 9 dá po vyriešení:",
        "options": [
          "x ≥ 2 a x < 5",
          "x ≤ 2 a x > 5",
          "x ≥ 1 a x < 13"
        ],
        "answer": 0,
        "correct": "Správne. Prvá dá x≥2, druhá x<5.",
        "hint": "Rieš každú zvlášť."
      },
      {
        "id": "c4",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Množina riešení podmienok x ≥ 2 a x < 5 je:",
        "options": [
          "⟨2;5)",
          "(2;5⟩",
          "(−∞;2⟩ ∪ (5;∞)"
        ],
        "answer": 0,
        "correct": "Áno. Dvojka patrí, päť nie.",
        "hint": "Sleduj ostré a neostré znaky."
      },
      {
        "id": "n",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Toto si zapíš do zošita",
        "html": "<p><strong>SÚSTAVA LINEÁRNYCH NEROVNÍC S JEDNOU NEZNÁMOU</strong></p><p>Riešením sústavy sú tie hodnoty x, ktoré spĺňajú všetky nerovnice súčasne.</p><p>Postup: vyriešime jednotlivé nerovnice → zapíšeme ich množiny riešení → určíme ich <strong>prienik</strong>.</p>",
        "continueLabel": "Mám zapísané"
      },
      {
        "id": "sw",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Vysvetli postup",
        "prompt": "Prečo pri sústave používame prienik a nie zjednotenie množín riešení?",
        "model": "Pretože riešenie musí spĺňať prvú aj druhú podmienku súčasne. Prienik obsahuje práve prvky spoločné obom množinám."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "riešenie jednotlivých nerovníc",
          "prienik riešení",
          "intervalový zápis"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka."
      }
    ]
  }
});
