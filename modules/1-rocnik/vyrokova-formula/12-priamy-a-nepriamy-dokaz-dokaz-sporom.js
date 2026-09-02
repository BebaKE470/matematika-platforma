MathPlatform.registerModule({
  "id": "1-u01-h012",
  "teacher": {
    "placement": "1. ročník · Výroková formula · 12. hodina: Priamy a nepriamy dôkaz, dôkaz sporom",
    "prerequisites": [
      "výrok, implikácia, negácia, protipríklad",
      "základné vlastnosti párnych/nepárnych čísel zo ZŠ"
    ],
    "planContent": [
      "Relevantný obsah aktuálneho tematického plánu: Výroky a ich pravdivostná hodnota; jednoduchý výrok a jeho negácia; logické spojky; negácia zložených výrokov a de Morganove zákony; tautológie, kontradikcie a kontingencie; obmena, obrátenie a negácia implikácie; všeobecný a existenčný kvantifikátor; negácia kvantifikovaných výrokov; priamy, nepriamy dôkaz a dôkaz sporom; aplikácie výrokovej logiky; opakovanie a kontrolná písomná práca."
    ],
    "planPerformance": [
      "Určiť, či daná vetná konštrukcia je výrokom (vrátane všeobecného výroku vyjadreného bez použitia všeobecných kvantifikátorov).",
      "Na konkrétnych príkladoch vysvetliť rozdiel medzi vylučovacím a nevylučovacím chápaním spojky alebo.",
      "Vysvetliť rozdiel medzi implikáciou a ekvivalenciou.",
      "Vysvetliť de Morganove pravidlá pre negáciu výrokov A ∧ B a A ∨ B.",
      "Správne vnímať logické spojky v rôznych prostrediach.",
      "Tvoriť zložené výroky a zistiť štruktúru a pravdivosť výrokov zložených z malého počtu jednoduchých výrokov pomocou logických spojok.",
      "Utvoriť negáciu výroku pomocou pravidiel pre negáciu základných zložených výrokov a negáciu jednoduchých kvantifikátorov.",
      "Vysvetliť, kedy na dôkaz nepravdivosti tvrdenia možno použiť protipríklad.",
      "V jednoduchých prípadoch vysloviť kontrapríklad všeobecných tvrdení.",
      "Opísať základné druhy dôkazov (priamy, sporom) a dokumentovať ich príkladmi."
    ],
    "goals": [
      "opísať logiku priameho dôkazu",
      "intuitívne opísať nepriamy dôkaz cez obmenu v jednoduchom prípade",
      "opísať dôkaz sporom ako predpoklad negácie záveru vedúci k rozporu",
      "rozlíšiť overenie na príkladoch od všeobecného dôkazu",
      "identifikovať chýbajúci alebo chybný krok v krátkom argumente"
    ],
    "competencies": [
      "presné matematické vyjadrovanie",
      "argumentácia a zdôvodňovanie",
      "kritické posudzovanie tvrdení",
      "práca so symbolickým a slovným zápisom",
      "prehľadný pracovný a čistý zápis v zošite"
    ],
    "enrichment": [
      "Návrh štandardu 4.3 uvádza priamy, nepriamy dôkaz a dôkaz sporom, rozlíšenie overenia od dôkazu a identifikáciu chýb v argumentácii. Modul používa len jednoduché prípady prístupné po doterajšom učive."
    ],
    "flow": [
      "7 min: príklady vs. dôkaz",
      "18–22 min: schémy a argumenty",
      "10–12 min: ručný dôkaz v zošite",
      "5 min: spoločná kontrola"
    ],
    "diagnostics": [
      "vie pomenovať predpoklad a záver",
      "nepovažuje 100 príkladov za všeobecný dôkaz",
      "chápe úlohu sporu"
    ],
    "partialUse": [
      "Modul je možné použiť celý alebo len vybrané kroky podľa priebehu hodiny.",
      "Digitálna aktivita nenahrádza ručný zápis, diskusiu pri tabuli ani zdôvodnenie vlastnými slovami."
    ]
  },
  "student": {
    "title": "Ako vieme, že to platí vždy?",
    "subtitle": "Téma 12 · Priamy, nepriamy dôkaz a dôkaz sporom",
    "intro": "Matematický dôkaz nie je dlhý text. Je to reťazec platných krokov, ktorý vysvetlí, prečo tvrdenie musí platiť vo všetkých prípadoch.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Dve základné schémy",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 780 300\" role=\"img\" aria-label=\"Schéma priameho dôkazu a dôkazu sporom\"><g font-family=\"system-ui\" text-anchor=\"middle\"><text x=\"190\" y=\"30\" font-size=\"18\" font-weight=\"700\">PRIAMY DÔKAZ</text><rect x=\"65\" y=\"50\" width=\"250\" height=\"50\" rx=\"13\" fill=\"currentColor\" opacity=\".07\"/><text x=\"190\" y=\"81\" font-size=\"15\">predpoklad</text><path d=\"M190 100 V135\" stroke=\"currentColor\" stroke-width=\"3\"/><rect x=\"65\" y=\"135\" width=\"250\" height=\"50\" rx=\"13\" fill=\"currentColor\" opacity=\".07\"/><text x=\"190\" y=\"166\" font-size=\"15\">platné kroky</text><path d=\"M190 185 V220\" stroke=\"currentColor\" stroke-width=\"3\"/><rect x=\"65\" y=\"220\" width=\"250\" height=\"50\" rx=\"13\" fill=\"currentColor\" opacity=\".07\"/><text x=\"190\" y=\"251\" font-size=\"15\">záver</text><text x=\"590\" y=\"30\" font-size=\"18\" font-weight=\"700\">DÔKAZ SPOROM</text><rect x=\"465\" y=\"50\" width=\"250\" height=\"50\" rx=\"13\" fill=\"currentColor\" opacity=\".07\"/><text x=\"590\" y=\"81\" font-size=\"15\">predpokladáme opak</text><path d=\"M590 100 V135\" stroke=\"currentColor\" stroke-width=\"3\"/><rect x=\"465\" y=\"135\" width=\"250\" height=\"50\" rx=\"13\" fill=\"currentColor\" opacity=\".07\"/><text x=\"590\" y=\"166\" font-size=\"15\">platné kroky</text><path d=\"M590 185 V220\" stroke=\"currentColor\" stroke-width=\"3\"/><rect x=\"465\" y=\"220\" width=\"250\" height=\"50\" rx=\"13\" fill=\"currentColor\" opacity=\".07\"/><text x=\"590\" y=\"251\" font-size=\"15\">spor → pôvodné tvrdenie platí</text></g></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "examples",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "Dôkaz",
        "question": "Overili sme tvrdenie na 500 konkrétnych číslach. Čo môžeme bezpečne povedať?",
        "options": [
          "Tvrdenie sme dokázali pre všetky čísla.",
          "Máme silnú podporu, ale nie všeobecný dôkaz.",
          "Tvrdenie je určite nepravdivé."
        ],
        "answer": 1,
        "correct": "Správne. Konečný počet overení ešte nepokrýva nekonečne veľa možností.",
        "hint": "Spomeň si na rozdiel medzi príkladom a všeobecným argumentom."
      },
      {
        "id": "direct",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Priamy dôkaz na párnych číslach",
        "html": "<p>Tvrdenie: <strong>Súčet dvoch párnych celých čísel je párny.</strong></p><p>Ak a=2k a b=2m pre celé k,m, potom a+b=2k+2m=2(k+m). Keďže k+m je celé číslo, a+b má tvar 2·(celé číslo), teda je párne.</p><p>To je všeobecný argument: nepoužili sme konkrétne čísla, ale tvar ľubovoľných párnych čísel.</p>",
        "remember": "Priamy dôkaz ide od predpokladu platnými krokmi k záveru."
      },
      {
        "id": "directcheck",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Priamy dôkaz",
        "question": "Ktorý krok je kľúčový pre záver, že 2(k+m) je párne?",
        "options": [
          "k+m je celé číslo.",
          "k+m je vždy kladné.",
          "2(k+m) je prvočíslo."
        ],
        "answer": 0,
        "correct": "Áno. Definícia párneho čísla vyžaduje tvar 2·celé číslo.",
        "hint": "Pozri, čo presne znamená párnosť."
      },
      {
        "id": "indirect",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Nepriamy dôkaz cez obmenu",
        "html": "<p>Namiesto A⇒B môžeme dokazovať ekvivalentnú obmenu ¬B⇒¬A. Niekedy je tento smer jednoduchší.</p><p>Príklad: „Ak n² je párne, potom n je párne.“ Môžeme ukázať obmenu: ak n je nepárne, potom n² je nepárne.</p>",
        "remember": "Implikácia a jej obmena majú rovnakú pravdivosť."
      },
      {
        "id": "contrad",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Dôkaz sporom",
        "html": "<p>Pri dôkaze sporom dočasne predpokladáme, že tvrdenie, ktoré chceme dokázať, <strong>neplatí</strong>. Ak z tohto predpokladu a už platných faktov dostaneme rozpor, predpoklad bol nemožný.</p><p>Na tejto hodine je dôležitá najmä logická štruktúra, nie náročné klasické dôkazy.</p>",
        "remember": "Spor neznamená hádku; znamená logický rozpor s platnými predpokladmi alebo faktami."
      },
      {
        "id": "method",
        "type": "choice",
        "phase": "PREMÝŠĽAJ",
        "skill": "Typ dôkazu",
        "question": "Argument začína vetou „Predpokladajme opak, teda že tvrdenie neplatí…“ a končí rozporom. Ide o:",
        "options": [
          "priamy dôkaz",
          "dôkaz sporom",
          "iba overenie príkladom"
        ],
        "answer": 1,
        "correct": "Správne. To je typická štruktúra dôkazu sporom.",
        "hint": "Kľúčové slová sú „predpokladajme opak“ a „rozpor“."
      },
      {
        "id": "nb",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Skús krátky priamy dôkaz",
        "html": "<p><span class=\"mini-label\">ÚLOHA</span><br>Dokáž: Súčet dvoch nepárnych celých čísel je párny. Použi zápis a=2k+1, b=2m+1.</p>",
        "model": "<strong>VZOROVÝ DÔKAZ:</strong> a+b=(2k+1)+(2m+1)=2k+2m+2=2(k+m+1). Keďže k+m+1 je celé číslo, a+b je párne."
      },
      {
        "id": "crit",
        "type": "selfWrite",
        "phase": "VYJADRI SA",
        "skill": "Kritické posúdenie",
        "title": "Nájdi problém v argumente",
        "promptHtml": "<span class=\"mini-label\">PRACOVNÝ ZÁPIS</span><br>„1+3=4, 3+5=8, 5+7=12. Preto sme dokázali, že súčet každých dvoch nepárnych čísel je párny.“ Čo je na tomto závere nesprávne?",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Uvedené príklady tvrdenie podporujú, ale dokazujú iba tri konkrétne prípady. Všeobecný dôkaz musí vysvetliť, prečo tvrdenie platí pre ľubovoľné dve nepárne celé čísla."
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Dôkaz",
        "question": "Ak chceme dokázať všeobecné tvrdenie, stačí overiť 20 príkladov?",
        "options": [
          "Áno, ak všetky vyjdú",
          "Nie, príklady samy osebe všeobecný dôkaz nenahrádzajú"
        ],
        "answer": 1,
        "correct": "Správne. Príklady môžu podporiť hypotézu, ale všeobecný dôkaz musí pokryť všetky prípady.",
        "hint": "Rozlišuj overovanie a dokazovanie."
      },
      {
        "id": "extra-b",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Dôkaz verzus kontrola",
        "prompt": "Vysvetli spolužiakovi rozdiel medzi „overil som tvrdenie na príkladoch“ a „dokázal som tvrdenie“.",
        "model": "Overenie skúma iba vybrané prípady. Dôkaz je argument, ktorý zaručí platnosť tvrdenia vo všetkých prípadoch, ktorých sa tvrdenie týka."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Dôkaz a argument",
        "skills": [
          "priamy dôkaz",
          "nepriamy dôkaz cez obmenu",
          "dôkaz sporom",
          "rozdiel príklad – dôkaz"
        ],
        "prompt": "Pri každej položke vyber, ako dobre jej teraz rozumieš. Toto nie je známka; je to spätná väzba pre tvoje ďalšie učenie."
      }
    ]
  }
});
