MathPlatform.registerModule({
  id: "1-u01-h003",
  teacher: {
    placement: "1. ročník · Výroková formula · 3. hodina: Jednoduchý výrok a jeho negácia",
    prerequisites: [
      "výrok a pravdivostná hodnota z predchádzajúcej hodiny",
      "rozlíšenie výroku od otázky, príkazu a otvorenej vety"
    ],
    planContent: [
      "Aktuálny tematický plán: Výroková formula, 3. hodina – Jednoduchý výrok a jeho negácia.",
      "Relevantný obsah: výroky a ich pravdivostná hodnota; jednoduchý výrok a jeho negácia.",
      "Logické spojky, negácia zložených výrokov, de Morganove zákony a negácia kvantifikovaných výrokov patria do neskorších hodín a tento modul ich nepredbieha."
    ],
    planPerformance: [
      "Určiť, či daná vetná konštrukcia je výrokom.",
      "Utvoriť negáciu jednoduchého výroku a posúdiť pravdivostnú hodnotu výroku a jeho negácie.",
      "Presne formulovať popretie jednoduchého tvrdenia a rozlíšiť negáciu od iného, iba protikladne znejúceho tvrdenia."
    ],
    goals: [
      "zopakovať pojem výrok a pravdivostná hodnota",
      "vysvetliť vlastnými slovami, čo znamená negovať jednoduchý výrok",
      "vytvoriť správnu negáciu jednoduchého výroku bez zmeny vecného obsahu",
      "zapísať negáciu symbolicky ako ¬A",
      "určiť pravdivostnú hodnotu A a ¬A a vysvetliť, že sú opačné",
      "rozlíšiť správnu negáciu od iného alebo iba protikladne znejúceho tvrdenia",
      "z jednoduchej známej negácie spätne sformulovať pôvodný výrok"
    ],
    competencies: [
      "matematická komunikácia a presné používanie pojmov výrok, negácia a pravdivostná hodnota",
      "logické a kritické myslenie",
      "formulovanie, posudzovanie a zdôvodňovanie matematických tvrdení",
      "prechod medzi slovným a symbolickým zápisom A a ¬A",
      "digitálna kompetencia; samostatnosť, spolupráca a kultivovaná argumentácia"
    ],
    enrichment: [
      "Maturitný presah je iba v spôsobe práce: presná formulácia, posudzovanie tvrdení a zdôvodnenie voľby.",
      "Testový výber z možností slúži ako formát precvičenia už prebraného učiva; náročnosť zostáva na úrovni tejto hodiny.",
      "Negácia zložených ani kvantifikovaných výrokov sa nezaraďuje, pretože patrí do neskoršieho učiva."
    ],
    flow: [
      "0–3 min: KDE SME – nadväzuje na výrok a pravdivostnú hodnotu z 2. hodiny; dnes pridávame negáciu.",
      "3–10 min: NOVÝ POJEM – zavedenie negácie, symbolu ¬A a bezpečného postupu „Nie je pravda, že A“.",
      "10–30 min: OVER SI – dvojice nájdi negáciu / pravdivostná dvojica pre viacero výrokov.",
      "30–36 min: NÁJDI CHYBU – typické chyby pri negácii, oprava vlastnými slovami.",
      "36–42 min: ZBIERKA – samostatná práca s úlohami zo zbierky, tri úrovne náročnosti.",
      "42–45 min: ZHRNUTIE a sebahodnotenie."
    ],
    diagnostics: [
      "zo 6 jednoduchých výrokov správne vytvorí aspoň 5 negácií",
      "pri A a ¬A určí opačné pravdivostné hodnoty",
      "pri aspoň jednom nesprávnom návrhu vysvetlí, prečo nejde o negáciu",
      "nevytvára iba iné tvrdenie namiesto presného popretia",
      "vie použiť opornú formuláciu „Nie je pravda, že...“"
    ],
    partialUse: [
      "Modul je navrhnutý na celú vyučovaciu hodinu vrátane zavedenia pojmu negácie.",
      "Zbierkové úlohy (aktivita 4) sú nebodované, žiak si ich rieši na papieri a v aplikácii iba odfajkne.",
      "Pri nedostatku času použiť blok Nájdi negáciu + pravdivostná dvojica a jednu úroveň zbierky.",
      "Pri potrebe podpory možno ponechať opornú formuláciu „Nie je pravda, že A“ a znížiť počet položiek zbierky na úroveň základ."
    ]
  },
  student: {
    title: "Nájdi negáciu",
    subtitle: "3. hodina · Jednoduchý výrok a jeho negácia",
    intro: "Dnes sa naučíš negovať jednoduchý výrok: vybrať presnú negáciu, určiť pravdivostnú hodnotu pre A a ¬A a odhaliť nesprávnu „negáciu“.",
    estimatedTime: "40–45 min (celá hodina)",
    activities: [
      {
        "id": "kde-sme", "type": "info", "phase": "0 · KDE SME", "title": "Nadväzujeme na výrok",
        "html": "<p>Na minulej hodine sme zaviedli <strong>výrok</strong> a jeho <strong>pravdivostnú hodnotu</strong> 1/0. Dnes k tomu pridáme prvú operáciu s výrokmi — <strong>negáciu</strong>.</p><p class=\"keyidea\">Negácia zloženého výroku, De Morganove pravidlá a kvantifikátory prídu na rad až v neskorších hodinách — dnes pracujeme len s jednoduchými výrokmi.</p>",
        "continueLabel": "Idem na to"
      },
      {
        "id": "neg-intro", "type": "explain", "phase": "1 · NOVÝ POJEM", "title": "Čo je negácia?",
        "html": "<p><strong>Negácia</strong> výroku A je výrok, ktorý tvrdí presný opak toho, čo tvrdí A. Zapisujeme ju <strong>¬A</strong> a čítame „nie A“.</p><p>Negácia mení pravdivostnú hodnotu na opačnú: ak je A pravdivý (1), potom ¬A je nepravdivý (0), a naopak.</p><p>Najbezpečnejší spôsob, ako negáciu sformulovať bez chyby, je začať vetou <strong>„Nie je pravda, že A.“</strong> a až potom ju jazykovo upraviť — bez zmeny významu.</p>",
        "remember": "¬A poprie presne to, čo tvrdí A. A a ¬A majú vždy opačnú pravdivostnú hodnotu."
      },
      {
        "id":"start", "type":"info", "phase":"1 · NOVÝ POJEM", "title":"Bezpečný postup",
        "html":"<p>Ak si nie si istý, začni vetou <strong>„Nie je pravda, že A.“</strong> Potom ju môžeš jazykovo upraviť, ale <strong>nesmieš zmeniť význam</strong>.</p><p class=\"keyidea\">Negácia musí poprieť presne pôvodné tvrdenie.</p>",
        "continueLabel":"Idem na úlohy"
      },
      {
        "id":"neg-13", "type":"choice", "phase":"3 · NÁJDI NEGÁCIU", "skill":"Presná negácia",
        "prompt":"A: Číslo 13 je prvočíslo.", "question":"Ktorá veta je presnou negáciou ¬A?",
        "options":["Číslo 13 je nepárne.","Číslo 13 je zložené číslo.","Číslo 13 nie je prvočíslo.","Číslo 13 je väčšie ako 10."],
        "answer":2, "correct":"Správne. ¬A: Číslo 13 nie je prvočíslo.", "hint":"Popri presne pôvodné tvrdenie."
      },
      {
        "id":"pn-13", "type":"choice", "phase":"3 · PRAVDIVOSTNÁ DVOJICA", "skill":"Pravdivostná hodnota",
        "question":"A: Číslo 13 je prvočíslo.  ¬A: Číslo 13 nie je prvočíslo.  Ktorá dvojica pravdivostných hodnôt je správna?",
        "options":["A: 0, ¬A: 0","A: 0, ¬A: 1","A: 1, ¬A: 1","A: 1, ¬A: 0"],
        "answer":3, "correct":"Áno. A je 1, preto ¬A je 0.", "hint":"A a ¬A majú opačné pravdivostné hodnoty."
      },
      {
        "id":"neg-year", "type":"choice", "phase":"3 · NÁJDI NEGÁCIU", "skill":"Presná negácia",
        "prompt":"A: Rok má 360 dní.", "question":"Ktorá veta je presnou negáciou ¬A?",
        "options":["Rok nemá 360 dní.","Rok má 365 dní.","Rok má viac ako 360 dní.","Rok nemá 365 dní."],
        "answer":0, "correct":"Správne. „Rok nemá 360 dní.“ presne popiera A. „Rok má 365 dní.“ je iné tvrdenie.", "hint":"Použi: „Nie je pravda, že rok má 360 dní.“"
      },
      {
        "id":"pn-year", "type":"choice", "phase":"3 · PRAVDIVOSTNÁ DVOJICA", "skill":"Pravdivostná hodnota",
        "question":"A: Rok má 360 dní.  ¬A: Rok nemá 360 dní.  Ktorá dvojica pravdivostných hodnôt je správna?",
        "options":["A: 1, ¬A: 0","A: 0, ¬A: 1","A: 1, ¬A: 1","A: 0, ¬A: 0"],
        "answer":1, "correct":"Správne. A je 0 a ¬A je 1.", "hint":"Najprv rozhodni o A, potom obráť hodnotu."
      },
      {
        "id":"neg-real", "type":"choice", "phase":"3 · NÁJDI NEGÁCIU", "skill":"Presná negácia",
        "prompt":"A: Množina reálnych čísel je nekonečná.", "question":"Ktorá veta je presnou negáciou ¬A?",
        "options":["Množina prirodzených čísel je nekonečná.","Množina reálnych čísel je veľká.","Množina reálnych čísel nie je nekonečná.","Reálne čísla obsahujú záporné čísla."],
        "answer":2, "correct":"Áno. Táto veta priamo popiera pôvodné tvrdenie.", "hint":"Negácia nemení predmet tvrdenia."
      },
      {
        "id":"pn-real", "type":"choice", "phase":"3 · PRAVDIVOSTNÁ DVOJICA", "skill":"Pravdivostná hodnota",
        "question":"A: Množina reálnych čísel je nekonečná.  ¬A: Množina reálnych čísel nie je nekonečná.  Ktorá dvojica pravdivostných hodnôt je správna?",
        "options":["A: 1, ¬A: 0","A: 0, ¬A: 0","A: 1, ¬A: 1","A: 0, ¬A: 1"],
        "answer":0, "correct":"Správne. A je 1 a ¬A je 0.", "hint":"A a ¬A nemôžu mať rovnakú hodnotu."
      },
      {
        "id":"neg-equation", "type":"choice", "phase":"3 · NÁJDI NEGÁCIU", "skill":"Presná negácia",
        "prompt":"A: Rovnica x − 6 = 8 má v ℝ práve jedno riešenie.", "question":"Ktorá veta je bezpečnou presnou negáciou ¬A?",
        "options":["Nie je pravda, že rovnica x − 6 = 8 má v ℝ práve jedno riešenie.","Rovnica x − 6 = 8 má dve riešenia.","Rovnica x − 6 = 8 nemá riešenie.","Rovnica x − 6 = 8 má riešenie x = 14."],
        "answer":0, "correct":"Presne. Bezpečný tvar „Nie je pravda, že A“ pokrýva všetky prípady, keď A neplatí.", "hint":"Nevyberaj svojvoľne iba jednu možnosť, prečo by A neplatilo."
      },
      {
        "id":"pn-equation", "type":"choice", "phase":"3 · PRAVDIVOSTNÁ DVOJICA", "skill":"Pravdivostná hodnota",
        "question":"A: Rovnica x − 6 = 8 má v ℝ práve jedno riešenie.  ¬A: Nie je pravda, že rovnica x − 6 = 8 má v ℝ práve jedno riešenie.  Ktorá dvojica pravdivostných hodnôt je správna?",
        "options":["A: 0, ¬A: 1","A: 1, ¬A: 0","A: 1, ¬A: 1","A: 0, ¬A: 0"],
        "answer":1, "correct":"Áno. Rovnica má jediné riešenie x = 14, teda A je 1 a ¬A je 0.", "hint":"Vyrieš krátko rovnicu."
      },
      {
        "id":"error-year", "type":"choice", "phase":"3 · OPRAV CHYBU", "skill":"Analýza chyby",
        "question":"A: Rok má 360 dní.  Návrh ¬A: Rok má 365 dní.  Čo je na návrhu problém?",
        "options":["Nič, je to presná negácia.","Negácia nesmie obsahovať číslo.","Je to iné konkrétne tvrdenie; nepopiera presne vetu „Rok má 360 dní“.","Negovať možno iba pravdivé výroky."],
        "answer":2, "correct":"Správne. Presná negácia: „Rok nemá 360 dní.“", "hint":"Použi bezpečný tvar „Nie je pravda, že...“"
      },
      {
        "id":"error-prime", "type":"choice", "phase":"3 · OPRAV CHYBU", "skill":"Analýza chyby",
        "question":"A: Číslo 13 je prvočíslo.  Návrh ¬A: Číslo 13 je nepárne.  Je návrh presnou negáciou?", "options":["Áno","Nie"], "answer":1,
        "correct":"Nie. Veta hovorí o párnosti, nie o popretí toho, že 13 je prvočíslo.", "hint":"Negácia musí zostať pri tom istom tvrdení."
      },
      {
        "id":"error-write", "type":"selfWrite", "phase":"3 · OPRAV CHYBU", "skill":"Matematická komunikácia",
        "title":"Sformuluj opravu",
        "promptHtml":"Sformuluj správnu negáciu k výroku <strong>A: Rok má 360 dní.</strong> Potom jednou vetou vysvetli, prečo „Rok má 365 dní“ nie je presná negácia.",
        "model":"<strong>¬A:</strong> Rok nemá 360 dní. Veta „Rok má 365 dní“ je iné konkrétne tvrdenie; presná negácia musí poprieť práve pôvodný výrok."
      },
      {
        "id":"final-check", "type":"choice", "phase":"3 · RÝCHLA KONTROLA", "skill":"Negácia a pravdivosť",
        "question":"A: Množina reálnych čísel je nekonečná. Ktorá možnosť obsahuje správnu negáciu aj pravdivostné hodnoty?",
        "options":[
          "¬A: Množina reálnych čísel nie je nekonečná; A: 1, ¬A: 1",
          "¬A: Množina reálnych čísel je konečná; A: 0, ¬A: 1",
          "¬A: Množina prirodzených čísel je konečná; A: 1, ¬A: 0",
          "¬A: Množina reálnych čísel nie je nekonečná; A: 1, ¬A: 0"
        ],
        "answer":3, "correct":"Správne. Presná negácia popiera A a má opačnú pravdivostnú hodnotu.", "hint":"Kontroluj význam aj pravdivostné hodnoty."
      },
      {
        "id": "zbierka", "type": "taskList", "phase": "4 · ZBIERKA", "skill": "Negácia",
        "title": "Nájdi negáciu",
        "html": "<p class=\"muted\">Ku každému výroku napíš jeho negáciu a urč pravdivostné hodnoty A aj ¬A. Odfajkni si úlohu, keď máš hotovo — riešenie si over tlačidlom.</p>",
        "items": [
          { "level": "zaklad", "text": "A: Trojuholník má tri strany.", "answer": "¬A: Trojuholník nemá tri strany. A = 1, ¬A = 0." },
          { "level": "zaklad", "text": "A: Slovensko je členom Európskej únie.", "answer": "¬A: Slovensko nie je členom Európskej únie. A = 1, ¬A = 0." },
          { "level": "zaklad", "text": "A: Číslo 100 je párne.", "answer": "¬A: Číslo 100 nie je párne. A = 1, ¬A = 0." },
          { "level": "rozsirenie", "text": "A: Súčet vnútorných uhlov trojuholníka je 200°.", "answer": "¬A: Súčet vnútorných uhlov trojuholníka nie je 200°. Súčet je vždy 180°, preto A = 0, ¬A = 1." },
          { "level": "rozsirenie", "text": "A: Rovnica x + 4 = 4 má riešenie x = 0.", "answer": "¬A: Rovnica x + 4 = 4 nemá riešenie x = 0. Dosadením x = 0 dostaneme 0 + 4 = 4, čo platí, preto A = 1, ¬A = 0." },
          { "level": "rozsirenie", "text": "A: Číslo −5 je väčšie ako číslo −2.", "answer": "¬A: Číslo −5 nie je väčšie ako číslo −2. Keďže −5 &lt; −2, platí A = 0, ¬A = 1." },
          { "level": "bonus", "text": "A: Rovnica x² = 4 má v ℝ práve jedno riešenie.", "answer": "¬A: Nie je pravda, že rovnica x² = 4 má v ℝ práve jedno riešenie. Rovnica má dve riešenia (x = 2 a x = −2), preto A = 0, ¬A = 1." },
          { "level": "bonus", "text": "A: Postupnosť 2, 4, 6, 8 obsahuje presne štyri čísla.", "answer": "¬A: Postupnosť 2, 4, 6, 8 neobsahuje presne štyri čísla. V postupnosti sú naozaj štyri čísla, preto A = 1, ¬A = 0." },
          { "level": "bonus", "text": "A: Rovnica 2x − 6 = 0 má záporné riešenie.", "answer": "¬A: Rovnica 2x − 6 = 0 nemá záporné riešenie. Riešenie je x = 3, čo nie je záporné, preto A = 0, ¬A = 1." }
        ]
      },
      {
        "id": "zhrnutie", "type": "info", "phase": "5 · ZHRNUTIE", "title": "Čo si sa dnes naučil/a",
        "html": "<ul><li>Negácia ¬A tvrdí presný opak výroku A a má vždy opačnú pravdivostnú hodnotu.</li><li>Bezpečný tvar „Nie je pravda, že A“ pokrýva všetky prípady, keď A neplatí.</li><li>Iné konkrétne tvrdenie (napr. iné číslo) nie je presná negácia.</li></ul>",
        "continueLabel": "Na záver sa zhodnotím"
      },
      {
        "id": "reflection", "type": "reflection", "phase": "5 · ZÁVER PLATFORMY", "title": "Ako sa ti darilo?",
        "skills":["vybrať presnú negáciu jednoduchého výroku","určiť pravdivostnú hodnotu pre A a ¬A","odhaliť vetu, ktorá nie je presnou negáciou"],
        "prompt":"Označ, ako isto sa cítiš. Toto nie je známka."
      }
    ]
  }
});
