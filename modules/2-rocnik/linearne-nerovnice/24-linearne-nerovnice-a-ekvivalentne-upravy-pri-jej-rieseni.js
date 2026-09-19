MathPlatform.registerModule({
  "id": "2-u04-h024",
  "teacher": {
    "placement": "2. ročník · Lineárne nerovnice · 24. hodina: Lineárne nerovnice a ekvivalentné úpravy pri jej riešení",
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
      "Kognitívny cieľ: žiak rozlíši a správne použije postup zodpovedajúci téme „Lineárne nerovnice a ekvivalentné úpravy pri jej riešení“.",
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
      "5–15 min – výklad/objavovanie: význam lineárnej nerovnice, ekvivalentné úpravy a dôvod otočenia znaku pri násobení/delení záporným číslom. Nový postup sa najprv vysvetlí a demonštruje, až potom sa používa.",
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
    "title": "Lineárne nerovnice a ekvivalentné úpravy pri jej riešení",
    "subtitle": "Téma 24 · Lineárne nerovnice",
    "intro": "Krátka približne 15-minútová digitálna aktivita. Počítanie a úplný algebraický postup zostávajú v zošite; platforma preveruje porozumenie, voľbu postupu, reprezentáciu a kontrolu.",
    "estimatedTime": "cca 15 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Z 1. ročníka poznáš číselnú os, zápis nerovnosti a intervalu aj absolútnu hodnotu. Z tohto ročníka už vieš riešiť lineárnu <strong>rovnicu</strong> ekvivalentnými úpravami a zapísať lineárnu funkciu.</p><p>Dnes uvidíš, čo sa stane, keď namiesto rovnice riešime <strong>nerovnicu</strong> — a prečo tam pribudne jedno nové pravidlo, ktoré rovnica nepozná.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "riešiť lineárnu nerovnicu ekvivalentnými úpravami",
          "zapísať riešenie ako interval a znázorniť ho na číselnej osi",
          "vedieť, kedy sa znak nerovnosti otočí"
        ]
      },
      {
        "id": "meaning",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Rovnica verzus nerovnica",
        "html": "<p>Rovnica hľadá hodnoty, pri ktorých sú dve strany <strong>rovnaké</strong>. Nerovnica hľadá všetky hodnoty, pri ktorých platí vzťah <strong>&lt;, &gt;, ≤ alebo ≥</strong>. Výsledkom býva množina čísel – často interval.</p>"
      },
      {
        "id": "rule",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Kedy sa zmení znak?",
        "html": "<p>Pri pripočítaní alebo odčítaní rovnakého čísla na oboch stranách sa smer nerovnosti nemení.</p><div class=\"warning\"><strong>Pozor:</strong> Pri násobení alebo delení <strong>záporným</strong> číslom sa znak nerovnosti <strong>otočí</strong>.</div>"
      },
      {
        "id": "compare-otocenie",
        "type": "explain",
        "phase": "NÁJDI CHYBU",
        "title": "Čo je tu zle?",
        "html": "<p>Riešime nerovnicu <strong>−3x &lt; 12</strong>. Porovnaj dva postupy delenia číslom −3:</p><div class=\"compare\"><div class=\"bad\"><span class=\"mini-label\">CHYBA</span><p>−3x &lt; 12&nbsp;&nbsp;/ : (−3)</p><p>x &lt; −4</p></div><div class=\"good\"><span class=\"mini-label\">SPRÁVNE</span><p>−3x &lt; 12&nbsp;&nbsp;/ : (−3)</p><p>x &gt; −4</p></div></div><p>Delíme záporným číslom −3, preto sa znak &lt; musí otočiť na &gt;. Rovnica by znak nezmenila — nerovnica áno.</p>",
        "remember": "Pri delení alebo násobení záporným číslom sa znak nerovnosti vždy otočí — to je presne to, čo rovnica nepozná."
      },
      {
        "id": "n1",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Zhrnutie: znak nerovnosti a zápis riešenia",
        "html": "<div class=\"formula\">Ekvivalentné úpravy: na obe strany môžeme pripočítať alebo odčítať rovnaké číslo. Pri násobení alebo delení kladným číslom sa znak nemení. Pri násobení alebo delení záporným číslom sa znak nerovnosti otočí.</div><p>Riešenie zapisujeme ako množinu riešení, napr. <strong>x &lt; 4</strong>, teda <strong>(−∞; 4)</strong>.</p>"
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Z nerovnice 3x − 5 < 7 odčítame/pripočítame číslo tak, aby sme dostali 3x < 12. Aký znak zostane?",
        "options": [
          "≤",
          ">",
          "<"
        ],
        "answer": 2,
        "correct": "Správne. Pri pripočítaní 5 sa smer nemení.",
        "hint": "Znak meníme iba pri násobení alebo delení záporným číslom."
      },
      {
        "id": "c2",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Máme −2x > 6. Po vydelení oboch strán číslom −2 dostaneme:",
        "options": [
          "x < −3",
          "x > −3",
          "x < 3"
        ],
        "answer": 0,
        "correct": "Áno. Pri delení záporným číslom sa znak otočí.",
        "hint": "−2 je záporné číslo."
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "OVER",
        "skill": "riešenie",
        "question": "Ktorý interval zodpovedá riešeniu x ≥ −2?",
        "options": [
          "(−∞; −2)",
          "⟨−2; ∞)",
          "(−2; ∞)"
        ],
        "answer": 1,
        "correct": "Správne. Bod −2 patrí do riešenia.",
        "hint": "Znak ≥ zahŕňa aj krajný bod."
      },
      {
        "id": "sw",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Vysvetli postup",
        "prompt": "Prečo sa pri vydelení nerovnice záporným číslom musí otočiť znak? Uveď jednoduchý číselný príklad.",
        "model": "Napríklad 2 < 5. Po vynásobení −1 dostaneme −2 > −5. Záporné násobenie obráti poradie čísel na číselnej osi, preto sa smer nerovnosti otočí."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "ekvivalentné úpravy",
          "otočenie znaku",
          "intervalový zápis"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka."
      }
    ]
  }
});
