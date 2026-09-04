MathPlatform.registerModule({
  "id": "2-u04-h025",
  "teacher": {
    "placement": "2. ročník · Lineárne nerovnice · 25. hodina: Lineárne nerovnice s neznámou v menovateli",
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
      "Kognitívny cieľ: žiak rozlíši a správne použije postup zodpovedajúci téme „Lineárne nerovnice s neznámou v menovateli“.",
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
      "5–15 min – výklad/objavovanie: definičná podmienka a znamienkový rozbor pri neznámej v menovateli. Nový postup sa najprv vysvetlí a demonštruje, až potom sa používa.",
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
    "title": "Lineárne nerovnice s neznámou v menovateli",
    "subtitle": "Téma 25 · Lineárne nerovnice",
    "intro": "Krátka približne 15-minútová digitálna aktivita. Počítanie a úplný algebraický postup zostávajú v zošite; platforma preveruje porozumenie, voľbu postupu, reprezentáciu a kontrolu.",
    "estimatedTime": "cca 15 min",
    "activities": [
      {
        "id": "domain",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Najprv definičná podmienka",
        "html": "<p>Ak je neznáma v menovateli, najprv určíme, kedy menovateľ nie je nula. Potom hľadáme, kde má zlomok požadované znamienko. <strong>Násobenie nerovnice výrazom s neznámym znamienkom bez rozboru nie je bezpečný krok.</strong></p>"
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Pri nerovnici 3/(x−2) > 0, ktorá hodnota musí byť vylúčená ešte pred riešením?",
        "options": [
          "x = 0",
          "x = 2",
          "x = 3"
        ],
        "answer": 1,
        "correct": "Správne. Menovateľ x−2 nesmie byť nula.",
        "hint": "Polož menovateľ rovný nule."
      },
      {
        "id": "sign",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Znamienko podielu",
        "html": "<p>Podiel je kladný, keď majú čitateľ a menovateľ rovnaké znamienko, a záporný, keď majú opačné znamienka. Kritické body rozdelia číselnú os na intervaly, na ktorých sa znamienko nemení.</p>"
      },
      {
        "id": "c2",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Pre x > 2 je výraz 3/(x−2):",
        "options": [
          "kladný",
          "záporný",
          "rovný nule"
        ],
        "answer": 0,
        "correct": "Áno. Čitateľ aj menovateľ sú kladné.",
        "hint": "Pre x > 2 je x−2 > 0."
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Riešenie 3/(x−2) > 0 je:",
        "options": [
          "(−∞;2)",
          "(2;∞)",
          "⟨2;∞)"
        ],
        "answer": 1,
        "correct": "Správne. x=2 je vylúčené a napravo je podiel kladný.",
        "hint": "Menovateľ nesmie byť nula."
      },
      {
        "id": "n",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Toto si zapíš do zošita",
        "html": "<p><strong>NEROVNICA S NEZNÁMOU V MENOVATELI</strong></p><p>1. Určíme definičné podmienky. 2. Nájdeme kritické body. 3. Rozdelíme číselnú os na intervaly. 4. Určíme znamienko výrazu na intervaloch. 5. Vyberieme intervaly spĺňajúce nerovnicu. 6. Skontrolujeme, že vylúčené hodnoty nie sú v riešení.</p>",
        "continueLabel": "Mám zapísané"
      },
      {
        "id": "sw",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Vysvetli postup",
        "prompt": "Vysvetli, prečo pri nerovnici 1/(x−4) < 0 nemôžeme jednoducho vynásobiť obe strany výrazom x−4 bez rozboru.",
        "model": "Nevieme vopred, či je x−4 kladné alebo záporné. Pri násobení záporným výrazom by sa musel otočiť znak nerovnosti. Navyše x=4 nie je v definičnom obore."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "definičná podmienka",
          "znamienko podielu",
          "intervalové riešenie"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka."
      }
    ]
  }
});
