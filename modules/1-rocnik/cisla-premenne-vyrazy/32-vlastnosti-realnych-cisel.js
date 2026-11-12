MathPlatform.registerModule({
  "id": "1-u03-h032",
  "teacher": {
    "placement": "1. ročník · Čísla, premenné, výrazy · 32. hodina: Vlastnosti reálnych čísel",
    "prerequisites": [
      "reálne čísla a ich druhy (hodina 31)",
      "sčítanie, odčítanie, násobenie a delenie zlomkov a desatinných čísel zo ZŠ",
      "písmeno ako zástupca ľubovoľného čísla (zápis a + b, a · b)",
      "hodiny 28–30: deliteľnosť, NSN a NSD"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza tému „Vlastnosti reálnych čísel“. Obsah modulu rešpektuje jej miesto a rozsah v pláne."
    ],
    "planPerformance": [
      "Plán uvádza: riešiť úlohy finančnej matematiky; používať kritériá deliteľnosti; určiť NSN a NSD pomocou prvočíselného rozkladu. Ďalšie ciele modulu vychádzajú z uvedeného obsahu celku."
    ],
    "goals": [
      "pomenovať a použiť komutatívnosť a asociatívnosť sčítania a násobenia",
      "použiť distributívnosť na šikovné počítanie aj na vynímanie pred zátvorku",
      "určiť neutrálny prvok, opačné a prevrátené číslo, vedieť, že 0 nemá prevrátené číslo",
      "vysvetliť, prečo sa nedá deliť nulou, a vedieť, že odčítanie a delenie komutatívne nie sú",
      "použiť základné pravidlá usporiadania (aj násobenie nerovnosti záporným číslom)"
    ],
    "competencies": [
      "matematická komunikácia",
      "práca so symbolickým zápisom (písmená ako čísla)",
      "argumentácia a kontrola výsledku",
      "prehľadný ručný zápis"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie spôsobu práce: používanie vlastností pri úprave výrazov a zdôvodnenie každého kroku.",
      "Zdôvodnenie, prečo nemožno deliť nulou, ukazuje spôsob matematického argumentu „predpokladajme opak“."
    ],
    "flow": [
      "3 min: opakovanie – ktoré úpravy pri počítaní „robíme automaticky“ a prečo smieme",
      "10–12 min: výklad v aplikácii (komutatívnosť, asociatívnosť, distributívnosť, špeciálne čísla, usporiadanie, delenie nulou)",
      "10 min: digitálne úlohy (priraď vlastnosť, šikovné počítanie, nájdi chybu)",
      "8–10 min: samostatná práca BEZ MOBILU a zbierka podľa úrovne",
      "3–5 min: spoločný rozbor najčastejších chýb podľa živých výsledkov"
    ],
    "diagnostics": [
      "považuje odčítanie a delenie za komutatívne (7 − 3 = 3 − 7)",
      "pri násobení zátvorky vynásobí iba prvý člen: 2·(3 + 4) = 2·3 + 4",
      "zamieňa opačné číslo (−a) a prevrátené číslo (1/a)",
      "tvrdí, že 5 ÷ 0 = 0, alebo že 0 má prevrátené číslo",
      "pri násobení nerovnosti záporným číslom neobráti znamienko"
    ],
    "partialUse": [
      "Pri nedostatku času vynechajte výklad o usporiadaní a bonusové úlohy; jadro tvorí komutatívnosť, asociatívnosť, distributívnosť a špeciálne čísla.",
      "Mobil nenahrádza ručné počítanie ani zdôvodnenie každého kroku."
    ]
  },
  "student": {
    "title": "Vlastnosti reálnych čísel",
    "subtitle": "Téma 32 · Čísla, premenné, výrazy",
    "intro": "Naučíš sa pravidlá, ktoré platia pre všetky reálne čísla, a využiješ ich na šikovné počítanie. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "28–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo robíš pri počítaní automaticky",
        "html": "<p>Spočítaj spamäti 4 · 13 · 25. Väčšina z nás nenásobí zľava (4 · 13 = 52, 52 · 25 = …), ale zmení poradie: <strong>4 · 25 = 100</strong>, potom 100 · 13 = 1 300.</p><p>Také úpravy nie sú trik – každá z nich sa opiera o <span class=\"hl\">vlastnosť čísel</span>, ktorá platí pre všetky reálne čísla. Dnes si ich pomenujeme a naučíme sa ich zámerne používať.</p><p>Písmená a, b, c budú zastupovať <strong>ľubovoľné</strong> reálne čísla. Napr. a + b znamená „súčet ľubovoľných dvoch čísel“.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "poznať komutatívnosť, asociatívnosť a distributívnosť",
          "určiť neutrálny prvok, opačné a prevrátené číslo",
          "vedieť, prečo sa nedelí nulou",
          "šikovne počítať a nájsť chybu v nesprávnej úprave"
        ]
      },
      {
        "id": "comm-assoc",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Komutatívnosť a asociatívnosť",
        "html": "<div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">Komutatívnosť (výmena poradia)</div><p class=\"term-rule\">Pri sčítaní a pri násobení môžeme čísla vymeniť.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">Asociatívnosť (zoskupovanie)</div><p class=\"term-rule\">Pri sčítaní a pri násobení troch čísel nezáleží na tom, ktoré dve spočítame, resp. vynásobíme najprv.</p></div></div><div class=\"formula\">a + b = b + a &nbsp;&nbsp; a · b = b · a<span class=\"formula-note\">Komutatívnosť sčítania a násobenia.</span></div><div class=\"formula\">(a + b) + c = a + (b + c) &nbsp;&nbsp; (a · b) · c = a · (b · c)<span class=\"formula-note\">Asociatívnosť sčítania a násobenia.</span></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>25 · 37 · 4 = 25 · 4 · 37 (výmena poradia) = (25 · 4) · 37 = 100 · 37 = <strong>3 700</strong></p><p>8,6 + 3,7 + 1,4 = 8,6 + 1,4 + 3,7 = 10 + 3,7 = <strong>13,7</strong></p></div><div class=\"warning\"><strong>Pozor:</strong> Odčítanie a delenie komutatívne nie sú. 7 − 3 = 4, ale 3 − 7 = −4. Podobne 8 ÷ 2 = 4, ale 2 ÷ 8 = 0,25. Nie sú ani asociatívne: (10 − 4) − 3 = 3, ale 10 − (4 − 3) = 9.</div>",
        "remember": "Sčítanie a násobenie smieš „premiešať“ aj zoskupovať. Odčítanie a delenie nie."
      },
      {
        "id": "dist-visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Distributívnosť na obdĺžniku",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 250\" role=\"img\" aria-label=\"Obdĺžnik s výškou 3 a šírkou 4 + 2. Ľavá časť má obsah 12, pravá 6.\"><g font-family=\"system-ui\" text-anchor=\"middle\" fill=\"currentColor\"><rect x=\"200\" y=\"45\" width=\"200\" height=\"150\" opacity=\".1\" stroke=\"currentColor\" stroke-width=\"3\"/><rect x=\"400\" y=\"45\" width=\"100\" height=\"150\" opacity=\".2\" stroke=\"currentColor\" stroke-width=\"3\"/><rect x=\"200\" y=\"45\" width=\"300\" height=\"150\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"300\" y=\"30\" font-size=\"20\" font-weight=\"700\">4</text><text x=\"450\" y=\"30\" font-size=\"20\" font-weight=\"700\">2</text><text x=\"175\" y=\"128\" font-size=\"20\" font-weight=\"700\">3</text><text x=\"300\" y=\"115\" font-size=\"26\" font-weight=\"700\">3 · 4 = 12</text><text x=\"450\" y=\"115\" font-size=\"26\" font-weight=\"700\">3 · 2 = 6</text><text x=\"380\" y=\"230\" font-size=\"22\">3 · (4 + 2) = 3 · 4 + 3 · 2 = 12 + 6 = 18</text></g></svg></div><p>Celý obdĺžnik má výšku 3 a šírku 4 + 2, jeho obsah je 3 · (4 + 2). Ak ho rozdelíme na dve časti, obsahy sa sčítajú: 3 · 4 + 3 · 2. Obe cesty vedú k rovnakému výsledku.</p>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "distrib",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Distributívnosť (roznásobenie a vynímanie)",
        "html": "<div class=\"formula\">a · (b + c) = a · b + a · c<span class=\"formula-note\">Číslo pred zátvorkou sa vynásobí <strong>každým</strong> členom v zátvorke. Platí aj pre a · (b − c) = a · b − a · c.</span></div><div class=\"example\"><span class=\"mini-label\">ROZNÁSOBENIE: ŠIKOVNÉ POČÍTANIE</span><p>7 · 102 = 7 · (100 + 2) = 700 + 14 = <strong>714</strong></p><p>99 · 15 = (100 − 1) · 15 = 1 500 − 15 = <strong>1 485</strong></p></div><div class=\"example\"><span class=\"mini-label\">VYNÍMANIE PRED ZÁTVORKU (opačný smer)</span><p>4,7 · 6 + 4,7 · 4 = 4,7 · (6 + 4) = 4,7 · 10 = <strong>47</strong></p><p>17 · 23 + 17 · 77 = 17 · (23 + 77) = 17 · 100 = <strong>1 700</strong></p></div><div class=\"compare\"><div class=\"bad\"><span class=\"mini-label\">ČASTÁ CHYBA</span><p>2 · (3 + 4) = 2 · 3 + 4 = 10</p></div><div class=\"good\"><span class=\"mini-label\">SPRÁVNE</span><p>2 · (3 + 4) = 2 · 3 + 2 · 4 = 14</p></div></div><div class=\"warning\"><strong>Pozor:</strong> Zátvorku rozdeľuje násobenie, nie sčítanie. Rovnosť a + (b · c) = (a + b) · (a + c) neplatí – skús a = 2, b = 3, c = 4: vľavo 14, vpravo 30.</div>",
        "remember": "a · (b + c) = a · b + a · c. Násobíš každý člen v zátvorke. Použi aj v opačnom smere (vynímanie)."
      },
      {
        "id": "special",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Neutrálny prvok, opačné a prevrátené číslo",
        "html": "<div class=\"term-list\"><div class=\"term-item\"><span class=\"term-symbol\">0</span><div><div class=\"term-name\">Neutrálny prvok sčítania</div><p class=\"term-rule\">a + 0 = a. Pripočítanie nuly číslo nezmení.</p></div></div><div class=\"term-item\"><span class=\"term-symbol\">1</span><div><div class=\"term-name\">Neutrálny prvok násobenia</div><p class=\"term-rule\">a · 1 = a. Vynásobenie jednotkou číslo nezmení.</p></div></div><div class=\"term-item\"><span class=\"term-symbol\">−a</span><div><div class=\"term-name\">Opačné číslo k a</div><p class=\"term-rule\">a + (−a) = 0. Ležia na číselnej osi rovnako ďaleko od nuly na opačných stranách. Opačné k 3 je −3, opačné k −2,5 je 2,5, opačné k 0 je 0.</p></div></div><div class=\"term-item\"><span class=\"term-symbol\">1/a</span><div><div class=\"term-name\">Prevrátené číslo k a (a ≠ 0)</div><p class=\"term-rule\">a · <span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">a</span></span> = 1. Prevrátené k 4 je <span class=\"frac\"><span class=\"frac-num\">1</span><span class=\"frac-den\">4</span></span>, k <span class=\"frac\"><span class=\"frac-num\">3</span><span class=\"frac-den\">5</span></span> je <span class=\"frac\"><span class=\"frac-num\">5</span><span class=\"frac-den\">3</span></span>, k −<span class=\"frac\"><span class=\"frac-num\">2</span><span class=\"frac-den\">7</span></span> je −<span class=\"frac\"><span class=\"frac-num\">7</span><span class=\"frac-den\">2</span></span>, k 0,25 je 4.</p></div></div></div><div class=\"warning\"><strong>Pozor:</strong> Opačné číslo mení znamienko (3 → −3), prevrátené číslo mení čitateľa a menovateľa (3/5 → 5/3) a znamienko nechá. Číslo 0 <strong>nemá</strong> prevrátené číslo: žiadne číslo, ktoré vynásobíme nulou, nedá 1.</div>",
        "remember": "Opačné: a + (−a) = 0. Prevrátené: a · (1/a) = 1, a ≠ 0. Neutrálne prvky: 0 pri sčítaní, 1 pri násobení."
      },
      {
        "id": "order-zero",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Usporiadanie a delenie nulou",
        "html": "<p><strong>Usporiadanie.</strong> Pre dve rôzne reálne čísla vždy platí práve jedno z a &lt; b, a = b, a &gt; b. Pri úprave nerovnosti:</p><ul><li>pripočítanie (odpočítanie) ľubovoľného čísla znamienko nerovnosti <strong>nemení</strong>: 2 &lt; 5 → 2 + 4 &lt; 5 + 4;</li><li>násobenie <strong>kladným</strong> číslom ho nemení: 2 &lt; 5 → 2 · 3 &lt; 5 · 3;</li><li>násobenie <strong>záporným</strong> číslom ho <strong>obráti</strong>: 2 &lt; 5 → 2 · (−3) &gt; 5 · (−3), lebo −6 &gt; −15.</li></ul><p><strong>Delenie nulou.</strong> Delenie je opačná operácia k násobeniu: 12 ÷ 3 = 4, lebo 4 · 3 = 12. Skúsme 5 ÷ 0 = x. Potom by muselo platiť x · 0 = 5, ale žiadne číslo vynásobené nulou nedá 5. Preto <span class=\"hl\">5 ÷ 0 nie je definované</span>. Naopak 0 ÷ 5 = 0 je v poriadku, lebo 0 · 5 = 0.</p><div class=\"warning\"><strong>Pozor:</strong> Výraz 5 ÷ 0 nemá hodnotu (neriešime ho, nie je rovný 0 ani 5). Výraz 0 ÷ 0 je tiež nedefinovaný.</div>",
        "remember": "Nerovnosť sa pri násobení záporným číslom obracia. Nulou sa nedelí."
      },
      {
        "id": "match-prop",
        "type": "matrix",
        "phase": "PRECVIČ",
        "skill": "pomenovanie vlastností",
        "title": "Ktorá vlastnosť stojí za rovnosťou?",
        "labels": ["Komutatívnosť", "Asociatívnosť", "Distributívnosť", "Neutrálny prvok", "Opačné/prevrátené číslo"],
        "items": [
          { "text": "3 + 8 = 8 + 3", "answer": "Komutatívnosť" },
          { "text": "7 · 5 = 5 · 7", "answer": "Komutatívnosť" },
          { "text": "(2 + 5) + 4 = 2 + (5 + 4)", "answer": "Asociatívnosť" },
          { "text": "(3 · 4) · 5 = 3 · (4 · 5)", "answer": "Asociatívnosť" },
          { "text": "6 · (2 + 9) = 6 · 2 + 6 · 9", "answer": "Distributívnosť" },
          { "text": "12 + 0 = 12", "answer": "Neutrálny prvok" },
          { "text": "9 + (−9) = 0", "answer": "Opačné/prevrátené číslo" },
          { "text": "8 · 1/8 = 1", "answer": "Opačné/prevrátené číslo" }
        ]
      },
      {
        "id": "c-comm",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "komutatívnosť",
        "question": "Ktorá z rovností platí pre všetky reálne čísla a, b (pri delení sú čísla nenulové)?",
        "options": [
          "a − b = b − a",
          "a · b = b · a",
          "a ÷ b = b ÷ a"
        ],
        "answer": 1,
        "correct": "Násobenie je komutatívne. Pre odčítanie aj delenie stačí protipríklad: 5 − 2 ≠ 2 − 5 a 6 ÷ 3 ≠ 3 ÷ 6.",
        "hint": "Dosaď si konkrétne čísla, napr. a = 6, b = 3, a vyskúšaj každú rovnosť."
      },
      {
        "id": "n-smart1",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "šikovné počítanie",
        "title": "Šikovne spamäti",
        "prompt": "Vypočítaj šikovne (zmeň poradie a zoskup): 25 · 37 · 4",
        "validate": "exact",
        "answer": 3700,
        "success": "25 · 4 = 100, takže 100 · 37 = 3 700.",
        "hint": "Ktoré dve čísla dajú pri násobení pekné okrúhle číslo?",
        "reveal": "Správne je 3 700: 25 · 37 · 4 = (25 · 4) · 37 = 100 · 37."
      },
      {
        "id": "n-dist1",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "distributívnosť",
        "title": "Rozlož 99 ako 100 − 1",
        "prompt": "Vypočítaj šikovne spamäti: 99 · 15",
        "validate": "exact",
        "answer": 1485,
        "success": "99 · 15 = (100 − 1) · 15 = 1 500 − 15 = 1 485.",
        "hint": "99 = 100 − 1. Roznásob zátvorku číslom 15.",
        "reveal": "Správne je 1 485: (100 − 1) · 15 = 100 · 15 − 1 · 15 = 1 500 − 15."
      },
      {
        "id": "n-factor",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "vynímanie pred zátvorku",
        "title": "Vyber spoločný činiteľ",
        "prompt": "Vypočítaj šikovne: 4,7 · 6 + 4,7 · 4",
        "validate": "exact",
        "answer": 47,
        "success": "4,7 · (6 + 4) = 4,7 · 10 = 47.",
        "hint": "Obe časti súčtu majú činiteľ 4,7. Vyber ho pred zátvorku.",
        "reveal": "Správne je 47: 4,7 · (6 + 4) = 4,7 · 10."
      },
      {
        "id": "n-smart2",
        "type": "numberInput",
        "phase": "PRECVIČ",
        "skill": "šikovné počítanie",
        "title": "Šikovné počítanie so záporným číslom",
        "prompt": "Vypočítaj šikovne: 0,25 · (−13) · 4",
        "validate": "exact",
        "answer": -13,
        "success": "0,25 · 4 = 1, preto 1 · (−13) = −13.",
        "hint": "Vymeň poradie tak, aby si najprv vynásobil/a 0,25 · 4.",
        "reveal": "Správne je −13: 0,25 · (−13) · 4 = (0,25 · 4) · (−13) = 1 · (−13)."
      },
      {
        "id": "c-neutral",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "neutrálne prvky",
        "question": "Ktorá z rovností ukazuje neutrálny prvok sčítania (pripočítame číslo, ktoré hodnotu nezmení)?",
        "options": [
          "7 · 1 = 7",
          "7 + 0 = 7",
          "7 + (−7) = 0"
        ],
        "answer": 1,
        "correct": "Neutrálny prvok sčítania je 0: a + 0 = a. Rovnosť 7 · 1 = 7 patrí násobeniu a 7 + (−7) = 0 opačnému číslu.",
        "hint": "Hľadaj rovnosť, v ktorej sa číslo 7 po sčítaní nezmení."
      },
      {
        "id": "c-recip",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "prevrátené číslo",
        "question": "Ktoré číslo je prevrátené k číslu −2/7, teda ktoré po vynásobení číslom −2/7 dá 1?",
        "options": [
          "2/7",
          "7/2",
          "−7/2"
        ],
        "answer": 2,
        "correct": "(−2/7) · (−7/2) = 14/14 = 1. Prevrátené číslo má rovnaké znamienko ako pôvodné.",
        "hint": "Vymeň čitateľa a menovateľa a over súčin. Dal by súčin kladné číslo 1 pri odlišných znamienkach?"
      },
      {
        "id": "n-recip",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "prevrátené číslo",
        "title": "Prevrátené číslo",
        "prompt": "Aké číslo je prevrátené k číslu 1,25? Zapíš ho ako desatinné číslo.",
        "validate": "exact",
        "answer": 0.8,
        "success": "1,25 = 5/4, prevrátené je 4/5 = 0,8. Over: 1,25 · 0,8 = 1.",
        "hint": "Zapíš 1,25 ako zlomok 5/4 a vymeň čitateľa s menovateľom.",
        "reveal": "Správne je 0,8: 1,25 = 5/4, prevrátené 4/5 = 0,8."
      },
      {
        "id": "n-opp",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "opačné číslo",
        "title": "Opačné číslo",
        "prompt": "Aké číslo je opačné k číslu −(−3,5)? Najprv zjednoduš zápis, potom hľadaj opačné.",
        "validate": "exact",
        "answer": -3.5,
        "success": "−(−3,5) = 3,5 a opačné k 3,5 je −3,5.",
        "hint": "Dve mínus pred číslom sa rušia. Potom zmeň znamienko.",
        "reveal": "Správne je −3,5: −(−3,5) = 3,5 a jeho opačné je −3,5."
      },
      {
        "id": "sort-always",
        "type": "sortChoice",
        "phase": "PRECVIČ",
        "skill": "platnosť pravidiel",
        "title": "Platí to vždy?",
        "question": "Rozhodni, či rovnosť platí pre všetky reálne čísla a, b, c (pri delení predpokladaj nenulové čísla).",
        "labels": ["Platí vždy", "Neplatí vždy"],
        "items": [
          { "text": "a + b = b + a", "answer": true, "why": "Komutatívnosť sčítania." },
          { "text": "a − b = b − a", "answer": false, "why": "Protipríklad: 5 − 2 = 3, ale 2 − 5 = −3." },
          { "text": "(a · b) · c = a · (b · c)", "answer": true, "why": "Asociatívnosť násobenia." },
          { "text": "a ÷ b = b ÷ a", "answer": false, "why": "Protipríklad: 8 ÷ 2 = 4, ale 2 ÷ 8 = 0,25." },
          { "text": "a · (b + c) = a · b + a · c", "answer": true, "why": "Distributívnosť." },
          { "text": "a + b · c = (a + b) · (a + c)", "answer": false, "why": "Protipríklad: a = 2, b = 3, c = 4: vľavo 14, vpravo 30." },
          { "text": "a · 0 = 0", "answer": true, "why": "Vynásobenie nulou dá vždy nulu." }
        ]
      },
      {
        "id": "c-zero",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "delenie nulou",
        "question": "Čo môžeme povedať o výraze 5 ÷ 0?",
        "options": [
          "Rovná sa 0.",
          "Rovná sa 5.",
          "Nie je definovaný, lebo žiadne číslo vynásobené nulou nedá 5."
        ],
        "answer": 2,
        "correct": "Presne. Delenie je opačné k násobeniu: x = 5 ÷ 0 by znamenalo x · 0 = 5, čo nie je možné.",
        "hint": "Delenie je opačné k násobeniu. Vyskúšaj overiť výsledok násobením nulou."
      },
      {
        "id": "c-ineq",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "usporiadanie",
        "question": "Vieme, že 2 < 5. Obe strany vynásobíme číslom −3. Ktorý výsledok je správny?",
        "options": [
          "−6 < −15",
          "−6 = −15",
          "−6 > −15"
        ],
        "answer": 2,
        "correct": "−6 je na číselnej osi vpravo od −15, preto −6 > −15. Násobenie záporným číslom obracia nerovnosť.",
        "hint": "Vypočítaj 2 · (−3) a 5 · (−3) a porovnaj ich polohu na číselnej osi."
      },
      {
        "id": "hunt-dist",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak počíta: 3 · (10 + 4) = 3 · 10 + 4 = 34. V čom je chyba?",
        "options": [
          "Číslo 3 treba vynásobiť iba druhým členom zátvorky.",
          "Číslo 3 treba vynásobiť každým členom zátvorky: 3 · 10 + 3 · 4 = 42.",
          "Zátvorku nemožno roznásobiť, treba najprv spočítať 3 + 10 + 4."
        ],
        "answer": 1,
        "correct": "Správne: 3 · (10 + 4) = 3 · 14 = 42, a ten istý výsledok dostaneme roznásobením oboch členov.",
        "hint": "Vypočítaj výraz iným spôsobom: najprv spočítaj zátvorku. Dostaneš 34?"
      },
      {
        "id": "hunt-comm",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak počíta: 12 − 5 + 3 = 12 − 3 + 5 = 14, lebo „sčítanie sa môže otáčať“. Čo je zle?",
        "options": [
          "Pri odčítaní sa poradie nesmie meniť, čísla treba presúvať aj so znamienkom: 12 − 5 + 3 = 12 + 3 − 5 = 10.",
          "Všetko je správne, výsledok 14 je v poriadku.",
          "Zle je iba to, že žiak nepoužil zátvorku."
        ],
        "answer": 0,
        "correct": "Presne. Číslo 5 sa odčítalo a 3 sa pripočítalo. Pri presune treba nechať znamienko pri čísle: 12 + 3 − 5 = 10.",
        "hint": "Vypočítaj pôvodný výraz zľava doprava a porovnaj s 14."
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha na papier",
        "html": "<p>Odlož zariadenie. Vypočítaj šikovne a pri každom kroku napíš, ktorú vlastnosť si použil/a (komutatívnosť, asociatívnosť, distributívnosť):</p><ol><li>4 · 13 · 25</li><li>98 · 7</li><li>17 · 23 + 17 · 77</li><li>0,5 · 19 · 4</li></ol><p>Potom vysvetli, prečo 8 − 3 − 2 nie je to isté ako 8 − (3 − 2).</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: vlastnosti reálnych čísel",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Riešenia píš do zošita. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Vypočítaj šikovne: a) 2 · 39 · 5 b) 6,8 + 2,9 + 3,2 c) 5 · 17 · 20",
            "answer": "a) 2 · 5 · 39 = 10 · 39 = 390<br>b) 6,8 + 3,2 + 2,9 = 10 + 2,9 = 12,9<br>c) 5 · 20 · 17 = 100 · 17 = 1 700"
          },
          {
            "level": "zaklad",
            "text": "Roznásob a vypočítaj: a) 6 · 52 b) 8 · 199 c) 0,5 · (30 − 8)",
            "answer": "a) 6 · (50 + 2) = 300 + 12 = 312<br>b) 8 · (200 − 1) = 1 600 − 8 = 1 592<br>c) 0,5 · 30 − 0,5 · 8 = 15 − 4 = 11"
          },
          {
            "level": "zaklad",
            "text": "Napíš opačné a prevrátené číslo (ak existuje) k číslam: a) 8 b) −1/3 c) 0,2 d) 0",
            "answer": "a) opačné −8, prevrátené 1/8<br>b) opačné 1/3, prevrátené −3<br>c) opačné −0,2, prevrátené 5<br>d) opačné 0, prevrátené neexistuje"
          },
          {
            "level": "rozsirenie",
            "text": "Vyber spoločný činiteľ a vypočítaj: a) 17 · 23 + 17 · 77 b) 3,6 · 8,5 − 3,6 · 6,5 c) 1/4 · 7 + 1/4 · 9",
            "answer": "a) 17 · 100 = 1 700<br>b) 3,6 · (8,5 − 6,5) = 3,6 · 2 = 7,2<br>c) 1/4 · (7 + 9) = 1/4 · 16 = 4"
          },
          {
            "level": "rozsirenie",
            "text": "Doplň správne znamienko nerovnosti po úprave: a) 3 < 8, preto 3 · 4 … 8 · 4 b) −2 < 6, preto (−2) · (−5) … 6 · (−5) c) 7 > 1, preto 7 − 10 … 1 − 10",
            "answer": "a) 12 < 32<br>b) 10 > −30<br>c) −3 > −9"
          },
          {
            "level": "rozsirenie",
            "text": "Oprav chyby v úpravách: a) 5 · (2 + 3) = 5 · 2 + 3 b) 20 − 6 − 4 = 20 − (6 − 4) c) 12 ÷ 4 = 4 ÷ 12 d) 6 ÷ 0 = 0",
            "answer": "a) 5 · 2 + 5 · 3 = 25<br>b) 20 − 6 − 4 = 10, ale 20 − (6 − 4) = 18; rovnosť neplatí<br>c) 12 ÷ 4 = 3, ale 4 ÷ 12 = 1/3; delenie nie je komutatívne<br>d) 6 ÷ 0 nie je definované"
          },
          {
            "level": "bonus",
            "text": "Vypočítaj šikovne: 1,5 · 8 · 4 · 0,5 a (1/3 + 1/6) · 12 – 12 · 1/6. Použi distributívnosť.",
            "answer": "1,5 · 8 · 4 · 0,5 = 1,5 · 8 · 2 = 24<br>(1/3 + 1/6) · 12 − 12 · 1/6 = 12/3 + 12/6 − 12/6 = 4"
          },
          {
            "level": "bonus",
            "text": "Zdôvodni na čísle, prečo úprava 3 · (5 − 2) = 3 · 5 − 2 nevedie k správnemu výsledku. Čo by musel žiak napísať? Pridaj vlastný príklad, v ktorom roznásobenie vyjde správne.",
            "answer": "3 · (5 − 2) = 3 · 3 = 9, ale 3 · 5 − 2 = 13. Správne je 3 · 5 − 3 · 2 = 9. Príklad: 4 · (7 − 3) = 4 · 7 − 4 · 3 = 28 − 12 = 16."
          }
        ]
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Prečo nesmieme deliť nulou",
        "prompt": "Vysvetli jednou až dvoma vetami, prečo nemá zmysel výraz 5 ÷ 0. Pomôž si tým, že delenie je opačné k násobeniu.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Keby 5 ÷ 0 bolo nejaké číslo x, muselo by platiť x · 0 = 5. Ale vynásobením nulou vždy dostaneme 0, a nie 5, takže také číslo x neexistuje a výraz nie je definovaný.",
        "placeholder": "Výraz 5 ÷ 0 nemá zmysel, pretože…"
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "komutatívnosť a asociatívnosť",
          "distributívnosť (roznásobenie aj vynímanie)",
          "opačné a prevrátené číslo",
          "delenie nulou a usporiadanie"
        ],
        "prompt": "Označ, ako dobre to zvládaš. Nie je to známka; porovnaj svoj pocit s výsledkom úloh. Čo máš 🔴 alebo 🟡, si ešte raz prejdi."
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 5,
        "text": "Vypočítaj šikovne: a) 4 · 27 · 25 b) 3,4 + 8,9 + 6,6 c) 5 · 36 · 2",
        "answer": "a) 4 · 25 · 27 = 2 700<br>b) 3,4 + 6,6 + 8,9 = 18,9<br>c) 5 · 2 · 36 = 360"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 5,
        "text": "Roznásob a vypočítaj: a) 9 · 103 b) 12 · 98 c) 25 · 41",
        "answer": "a) 9 · (100 + 3) = 927<br>b) 12 · (100 − 2) = 1 200 − 24 = 1 176<br>c) 25 · (40 + 1) = 1 000 + 25 = 1 025"
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 4,
        "text": "Doplň na prázdne miesto tak, aby rovnosť platila: a) 7 + … = 0 b) 7 · … = 1 c) 7 + … = 7 d) 7 · … = 7",
        "answer": "a) −7<br>b) 1/7<br>c) 0<br>d) 1"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 6,
        "text": "Vyber pred zátvorku a vypočítaj: a) 13 · 8 + 13 · 12 b) 6,5 · 7 − 6,5 · 3 c) 2/3 · 9 + 2/3 · 6",
        "answer": "a) 13 · 20 = 260<br>b) 6,5 · 4 = 26<br>c) 2/3 · 15 = 10"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 6,
        "text": "Pre každú rovnosť rozhodni, či platí pre všetky reálne čísla. Ak nie, nájdi protipríklad: a) a − (b − c) = a − b − c b) a · (b − c) = a · b − a · c c) (a + b) ÷ 2 = a ÷ 2 + b ÷ 2",
        "answer": "a) neplatí; a = 5, b = 3, c = 1: 5 − 2 = 3, ale 5 − 3 − 1 = 1<br>b) platí (distributívnosť)<br>c) platí: (a + b) ÷ 2 = (a + b) · 1/2 = a · 1/2 + b · 1/2"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 6,
        "text": "Vypočítaj šikovne bez kalkulačky: 1 000 · 0,25 · 8 · 0,5 · 1/5 a vysvetli, ktoré vlastnosti si použil/a.",
        "answer": "0,25 · 8 = 2; 0,5 · 2 = 1; 1 000 · 1 · 1/5 = 200. Použité: komutatívnosť a asociatívnosť násobenia."
      }
    ]
  }
});
