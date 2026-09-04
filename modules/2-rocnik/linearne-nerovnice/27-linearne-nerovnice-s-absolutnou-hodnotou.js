MathPlatform.registerModule({
  "id": "2-u04-h027",
  "teacher": {
    "placement": "2. ročník · Lineárne nerovnice · 27. hodina: Lineárne nerovnice s absolútnou hodnotou",
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
      "Kognitívny cieľ: žiak rozlíši a správne použije postup zodpovedajúci téme „Lineárne nerovnice s absolútnou hodnotou“.",
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
      "5–15 min – výklad/objavovanie: absolútna hodnota ako vzdialenosť a z nej odvodené základné tvary nerovníc. Nový postup sa najprv vysvetlí a demonštruje, až potom sa používa.",
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
    "title": "Lineárne nerovnice s absolútnou hodnotou",
    "subtitle": "Téma 27 · Lineárne nerovnice",
    "intro": "Krátka približne 15-minútová digitálna aktivita. Počítanie a úplný algebraický postup zostávajú v zošite; platforma preveruje porozumenie, voľbu postupu, reprezentáciu a kontrolu.",
    "estimatedTime": "cca 15 min",
    "activities": [
      {
        "id": "distance",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Absolútna hodnota ako vzdialenosť",
        "html": "<p>Z 1. ročníka poznáš: <strong>|x−a|</strong> je vzdialenosť čísla x od bodu a. Preto <strong>|x−a| &lt; r</strong> znamená „x je od a vzdialené menej ako r“ a <strong>|x−a| &gt; r</strong> znamená „x je od a vzdialené viac ako r“.</p>"
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Čo znamená |x−3| < 2?",
        "options": [
          "x je od 3 vzdialené menej ako 2",
          "x je od 2 vzdialené menej ako 3",
          "x je od 3 vzdialené viac ako 2"
        ],
        "answer": 0,
        "correct": "Správne. Stred je 3, polomer vzdialenosti 2.",
        "hint": "Čítaj |x−a| ako vzdialenosť od a."
      },
      {
        "id": "forms",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Dva základné tvary",
        "html": "<p>Pre r &gt; 0: <strong>|x−a| &lt; r ⇔ a−r &lt; x &lt; a+r</strong>. Pri „viac ako“ dostaneme dve vonkajšie časti: <strong>|x−a| &gt; r ⇔ x &lt; a−r alebo x &gt; a+r</strong>. Pri ≤ a ≥ sa krajné body zahrnú.</p>"
      },
      {
        "id": "c2",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Riešenie |x−3| < 2 je:",
        "options": [
          "(1;5)",
          "(−∞;1) ∪ (5;∞)",
          "⟨1;5⟩"
        ],
        "answer": 0,
        "correct": "Áno. Ide o body vo vzdialenosti menšej ako 2 od čísla 3.",
        "hint": "3−2=1 a 3+2=5; ostrá nerovnosť."
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Riešenie |x+1| ≥ 4 je:",
        "options": [
          "⟨−5;3⟩",
          "(−5;3)",
          "(−∞;−5⟩ ∪ ⟨3;∞)"
        ],
        "answer": 2,
        "correct": "Správne. Hľadáme vzdialenosť aspoň 4 od −1.",
        "hint": "|x+1|=|x−(−1)|."
      },
      {
        "id": "n",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Toto si zapíš do zošita",
        "html": "<p><strong>NEROVNICE S ABSOLÚTNOU HODNOTOU – VZDIALENOSŤ</strong></p><p>Pre r &gt; 0:</p><p>|x−a| &lt; r ⇔ a−r &lt; x &lt; a+r</p><p>|x−a| ≤ r ⇔ a−r ≤ x ≤ a+r</p><p>|x−a| &gt; r ⇔ x &lt; a−r alebo x &gt; a+r</p><p>|x−a| ≥ r ⇔ x ≤ a−r alebo x ≥ a+r</p>",
        "continueLabel": "Mám zapísané"
      },
      {
        "id": "sw",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Vysvetli postup",
        "prompt": "Prečo má nerovnica |x−2| > 5 dve oddelené časti riešenia?",
        "model": "Hľadáme body vzdialené od 2 viac ako 5. Také body ležia naľavo od −3 alebo napravo od 7, preto vzniknú dva intervaly."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "absolútna hodnota ako vzdialenosť",
          "vnútorný interval",
          "dve vonkajšie časti"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka."
      }
    ]
  }
});
