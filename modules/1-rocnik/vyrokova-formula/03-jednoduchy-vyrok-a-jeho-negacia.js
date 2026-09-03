MathPlatform.registerModule({
  id: "1-u01-h003",
  teacher: {
    placement: "1. ročník · Výroková formula · 3. hodina: Jednoduchý výrok a jeho negácia",
    prerequisites: [
      "výrok a pravdivostná hodnota z predchádzajúcej hodiny",
      "rozlíšenie výroku od otázky, príkazu a otvorenej vety",
      "symbol ¬A sa zavádza s učiteľom pred spustením platformy"
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
      "0–3 min: opakovanie pojmov výrok a pravdivostná hodnota.",
      "3–8 min: problémový vstup s výrokom o Bratislave; porovnanie presnej negácie s vetami, ktoré hovoria niečo iné.",
      "8–13 min: zavedenie negácie a symbolu ¬A; pravdivostné hodnoty A a ¬A.",
      "13–22 min: dvojice – úloha 1.2.3; pri každej položke A: P/N → ¬A → P/N.",
      "22–27 min: typické chyby; bezpečný postup „Nie je pravda, že A“ a jazykové zjednodušenie.",
      "27–36 min: INTERAKTÍVNA PLATFORMA – presná negácia, P/N dvojica a oprava chyby.",
      "36–40 min: mimo platformy – jednoduché položky a)–c) z 1.2.10, opačný smer ¬A → A.",
      "40–43 min: systematizácia A | ¬A | pravdivostná hodnota; zložené výroky až neskôr.",
      "43–45 min: exit ticket, vyhodnotenie a domáca úloha."
    ],
    diagnostics: [
      "zo 6 jednoduchých výrokov správne vytvorí aspoň 5 negácií",
      "pri A a ¬A určí opačné pravdivostné hodnoty",
      "pri aspoň jednom nesprávnom návrhu vysvetlí, prečo nejde o negáciu",
      "nevytvára iba iné tvrdenie namiesto presného popretia",
      "vie použiť opornú formuláciu „Nie je pravda, že...“"
    ],
    partialUse: [
      "Platforma je určená primárne na fázu 27–36 min a nenahrádza objavenie pojmu ani prácu s učebnicou.",
      "Pri nedostatku času použiť blok Nájdi negáciu + P/N dvojica.",
      "Pri potrebe podpory možno ponechať opornú formuláciu „Nie je pravda, že A“ a znížiť počet položiek.",
      "Opačný smer ¬A → A, systematizácia a exit ticket zostávajú podľa prípravy mimo platformy."
    ]
  },
  student: {
    title: "Nájdi negáciu",
    subtitle: "3. hodina · Jednoduchý výrok a jeho negácia",
    intro: "Pojem negácie aj zápis ¬A už poznáš z dnešnej hodiny. Teraz si precvičíš: vybrať presnú negáciu, určiť P/N pre A a ¬A a odhaliť nesprávnu „negáciu“.",
    estimatedTime: "8–10 min",
    activities: [
      {
        id:"start", type:"info", phase:"PRIPOMEŇ SI", title:"Bezpečný postup",
        html:"<p>Ak si nie si istý, začni vetou <strong>„Nie je pravda, že A.“</strong> Potom ju môžeš jazykovo upraviť, ale <strong>nesmieš zmeniť význam</strong>.</p><p class=\"keyidea\">Negácia musí poprieť presne pôvodné tvrdenie.</p>",
        continueLabel:"Idem na úlohy"
      },
      {
        id:"neg-13", type:"choice", phase:"1 · NÁJDI NEGÁCIU", skill:"Presná negácia",
        prompt:"A: Číslo 13 je prvočíslo.", question:"Ktorá veta je presnou negáciou ¬A?",
        options:["Číslo 13 nie je prvočíslo.","Číslo 13 je zložené číslo.","Číslo 13 je nepárne.","Číslo 13 je väčšie ako 10."],
        answer:0, correct:"Správne. ¬A: Číslo 13 nie je prvočíslo.", hint:"Popri presne pôvodné tvrdenie."
      },
      {
        id:"pn-13", type:"choice", phase:"2 · P/N DVOJICA", skill:"Pravdivostná hodnota",
        promptHtml:"<strong>A:</strong> Číslo 13 je prvočíslo.<br><strong>¬A:</strong> Číslo 13 nie je prvočíslo.",
        question:"Ktorá dvojica pravdivostných hodnôt je správna?",
        options:["A: P, ¬A: N","A: N, ¬A: P","A: P, ¬A: P","A: N, ¬A: N"],
        answer:0, correct:"Áno. A je P, preto ¬A je N.", hint:"A a ¬A majú opačné pravdivostné hodnoty."
      },
      {
        id:"neg-year", type:"choice", phase:"1 · NÁJDI NEGÁCIU", skill:"Presná negácia",
        prompt:"A: Rok má 360 dní.", question:"Ktorá veta je presnou negáciou ¬A?",
        options:["Rok má 365 dní.","Rok nemá 360 dní.","Rok má viac ako 360 dní.","Rok nemá 365 dní."],
        answer:1, correct:"Správne. „Rok nemá 360 dní.“ presne popiera A. „Rok má 365 dní.“ je iné tvrdenie.", hint:"Použi: „Nie je pravda, že rok má 360 dní.“"
      },
      {
        id:"pn-year", type:"choice", phase:"2 · P/N DVOJICA", skill:"Pravdivostná hodnota",
        promptHtml:"<strong>A:</strong> Rok má 360 dní.<br><strong>¬A:</strong> Rok nemá 360 dní.",
        question:"Ktorá dvojica P/N je správna?",
        options:["A: P, ¬A: N","A: N, ¬A: P","A: P, ¬A: P","A: N, ¬A: N"],
        answer:1, correct:"Správne. A je N a ¬A je P.", hint:"Najprv rozhodni o A, potom obráť hodnotu."
      },
      {
        id:"neg-real", type:"choice", phase:"1 · NÁJDI NEGÁCIU", skill:"Presná negácia",
        prompt:"A: Množina reálnych čísel je nekonečná.", question:"Ktorá veta je presnou negáciou ¬A?",
        options:["Množina reálnych čísel nie je nekonečná.","Množina reálnych čísel je veľká.","Množina prirodzených čísel je nekonečná.","Reálne čísla obsahujú záporné čísla."],
        answer:0, correct:"Áno. Táto veta priamo popiera pôvodné tvrdenie.", hint:"Negácia nemení predmet tvrdenia."
      },
      {
        id:"pn-real", type:"choice", phase:"2 · P/N DVOJICA", skill:"Pravdivostná hodnota",
        promptHtml:"<strong>A:</strong> Množina reálnych čísel je nekonečná.<br><strong>¬A:</strong> Množina reálnych čísel nie je nekonečná.",
        question:"Ktorá dvojica P/N je správna?",
        options:["A: P, ¬A: N","A: N, ¬A: P","A: P, ¬A: P","A: N, ¬A: N"],
        answer:0, correct:"Správne. A je P a ¬A je N.", hint:"A a ¬A nemôžu mať rovnakú hodnotu."
      },
      {
        id:"neg-equation", type:"choice", phase:"1 · NÁJDI NEGÁCIU", skill:"Presná negácia",
        prompt:"A: Rovnica x − 6 = 8 má v ℝ práve jedno riešenie.", question:"Ktorá veta je bezpečnou presnou negáciou ¬A?",
        options:["Rovnica x − 6 = 8 nemá riešenie.","Rovnica x − 6 = 8 má dve riešenia.","Nie je pravda, že rovnica x − 6 = 8 má v ℝ práve jedno riešenie.","Rovnica x − 6 = 8 má riešenie x = 14."],
        answer:2, correct:"Presne. Bezpečný tvar „Nie je pravda, že A“ pokrýva všetky prípady, keď A neplatí.", hint:"Nevyberaj svojvoľne iba jednu možnosť, prečo by A neplatilo."
      },
      {
        id:"pn-equation", type:"choice", phase:"2 · P/N DVOJICA", skill:"Pravdivostná hodnota",
        promptHtml:"<strong>A:</strong> Rovnica x − 6 = 8 má v ℝ práve jedno riešenie.<br><strong>¬A:</strong> Nie je pravda, že rovnica x − 6 = 8 má v ℝ práve jedno riešenie.",
        question:"Ktorá dvojica P/N je správna?",
        options:["A: P, ¬A: N","A: N, ¬A: P","A: P, ¬A: P","A: N, ¬A: N"],
        answer:0, correct:"Áno. Rovnica má jediné riešenie x = 14, teda A je P a ¬A je N.", hint:"Vyrieš krátko rovnicu."
      },
      {
        id:"error-year", type:"choice", phase:"3 · OPRAV CHYBU", skill:"Analýza chyby",
        promptHtml:"<strong>A:</strong> Rok má 360 dní.<br><strong>Návrh ¬A:</strong> Rok má 365 dní.",
        question:"Čo je na návrhu problém?",
        options:["Nič, je to presná negácia.","Je to iné konkrétne tvrdenie; nepopiera presne vetu „Rok má 360 dní“.","Negácia nesmie obsahovať číslo.","Negovať možno iba pravdivé výroky."],
        answer:1, correct:"Správne. Presná negácia: „Rok nemá 360 dní.“", hint:"Použi bezpečný tvar „Nie je pravda, že...“"
      },
      {
        id:"error-prime", type:"choice", phase:"3 · OPRAV CHYBU", skill:"Analýza chyby",
        promptHtml:"<strong>A:</strong> Číslo 13 je prvočíslo.<br><strong>Návrh ¬A:</strong> Číslo 13 je nepárne.",
        question:"Je návrh presnou negáciou?", options:["Áno","Nie"], answer:1,
        correct:"Nie. Veta hovorí o párnosti, nie o popretí toho, že 13 je prvočíslo.", hint:"Negácia musí zostať pri tom istom tvrdení."
      },
      {
        id:"error-write", type:"selfWrite", phase:"3 · OPRAV CHYBU", skill:"Matematická komunikácia",
        title:"Sformuluj opravu",
        promptHtml:"Sformuluj správnu negáciu k výroku <strong>A: Rok má 360 dní.</strong> Potom jednou vetou vysvetli, prečo „Rok má 365 dní“ nie je presná negácia.",
        model:"<strong>¬A:</strong> Rok nemá 360 dní. Veta „Rok má 365 dní“ je iné konkrétne tvrdenie; presná negácia musí poprieť práve pôvodný výrok."
      },
      {
        id:"final-check", type:"choice", phase:"RÝCHLA KONTROLA", skill:"Negácia a pravdivosť",
        prompt:"A: Množina reálnych čísel je nekonečná.",
        question:"Ktorá možnosť obsahuje správnu negáciu aj pravdivostné hodnoty?",
        options:[
          "¬A: Množina reálnych čísel nie je nekonečná; A: P, ¬A: N",
          "¬A: Množina reálnych čísel je konečná; A: N, ¬A: P",
          "¬A: Množina prirodzených čísel je konečná; A: P, ¬A: N",
          "¬A: Množina reálnych čísel nie je nekonečná; A: P, ¬A: P"
        ],
        answer:0, correct:"Správne. Presná negácia popiera A a má opačnú pravdivostnú hodnotu.", hint:"Kontroluj význam aj P/N."
      },
      {
        id:"reflection", type:"reflection", phase:"ZÁVER PLATFORMY", title:"Ako sa ti darilo?",
        skills:["vybrať presnú negáciu jednoduchého výroku","určiť P/N pre A a ¬A","odhaliť vetu, ktorá nie je presnou negáciou"],
        prompt:"Označ, ako isto sa cítiš. Toto nie je známka."
      }
    ]
  }
});
