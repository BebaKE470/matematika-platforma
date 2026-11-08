MathPlatform.registerModule({
  "id": "1-u02-h024",
  "teacher": {
    "placement": "1. ročník · Množiny · 24. hodina: Vennove diagramy",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "výroková logika z predchádzajúceho tematického celku tam, kde pomáha presnému čítaniu podmienok"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza pre 24. hodinu tému „Vennove diagramy“. Súhrnný obsah celku zahŕňa úvod do množín, prvky a zápis, podmnožiny, prázdnu a univerzálnu množinu, kardinalitu, zjednotenie, prienik, rozdiel, doplnok, Vennove diagramy, kombinované a aplikačné úlohy."
    ],
    "planPerformance": [
      "V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; ciele modulu sú didaktickým rozpracovaním názvu a poradia tém, nie doplnením oficiálneho štandardu."
    ],
    "goals": [
      "pripraviť sa na úlohy z kontrolnej písomnej práce, v ktorých sú dané počty prvkov v oblastiach Vennovho diagramu",
      "z počtov v oblastiach určiť |A|, |B|, |A ∪ B|, |A ∩ B|, |A − B|, |B − A| a |A′|",
      "vyhnúť sa typickej chybe: zabudnúť, že prienik patrí do A aj do B"
    ],
    "competencies": [
      "matematická komunikácia",
      "práca s reprezentáciami",
      "argumentácia a kontrola výsledku",
      "prehľadný zápis v zošite"
    ],
    "enrichment": [
      "Návrh maturitného štandardu sa využíva iba ako obohatenie: reprezentácia množín, Vennove diagramy, prepojenie množinových operácií s logickými spojkami a presná argumentácia."
    ],
    "flow": [
      "3 min: kde sme v celku a čo bude v písomke",
      "15–18 min: digitálne cvičenie v štýle písomky (čítanie počtov z diagramu, hľadanie chyby)",
      "8–10 min: samostatná úloha na papieri (BEZ MOBILU) a zbierka úloh podľa úrovne",
      "5 min: spoločný rozbor najčastejších chýb podľa živých výsledkov"
    ],
    "diagnostics": [
      "rozlišuje „iba A“ od |A| (započítava prienik)",
      "vie z počtov v oblastiach určiť |A ∪ B| a |A′| bez vzorca aj so vzorcom",
      "vie spätne dopočítať neznámu oblasť, ak pozná súčty"
    ],
    "partialUse": [
      "Modul je prípravou na písomku: pri nedostatku času vynechajte zbierku a nechajte iba cvičenie a samostatnú úlohu.",
      "Mobil nenahrádza ručné riešenie, presný zápis ani argumentáciu."
    ]
  },
  "student": {
    "title": "Vennov diagram: príprava na písomku",
    "subtitle": "Téma 24 · Vennove diagramy",
    "intro": "Cvičíš presne tie úlohy, aké ťa čakajú v písomke: z počtov v oblastiach diagramu určuješ počty prvkov množín. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "25–30 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Kde sme a čo bude v písomke",
        "html": "<p>Poznáme už všetky štyri operácie: zjednotenie A ∪ B, prienik A ∩ B, rozdiel A − B a doplnok A′.</p><p>V písomke bude úloha, v ktorej je <strong>Vennov diagram daný počtami prvkov</strong> v jednotlivých oblastiach a ty z nich určuješ počty prvkov množín a ich operácií. Za každý správny krok dostaneš bod, preto sa oplatí postupovať po krokoch.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "prečítať z diagramu počet prvkov množín A, B a ich operácií",
          "nepomýliť si „iba A“ s celou množinou A",
          "dopočítať chýbajúcu oblasť zo súčtov"
        ]
      },
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Štyri oblasti, štyri čísla",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 310\"><g font-family=\"system-ui\" text-anchor=\"middle\"><rect x=\"130\" y=\"15\" width=\"500\" height=\"270\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"150\" y=\"40\" font-size=\"20\" text-anchor=\"start\">U</text><circle cx=\"315\" cy=\"145\" r=\"105\" fill=\"currentColor\" opacity=\".07\" stroke=\"currentColor\" stroke-width=\"3\"/><circle cx=\"445\" cy=\"145\" r=\"105\" fill=\"currentColor\" opacity=\".12\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"250\" y=\"62\" font-size=\"22\" font-weight=\"700\">A</text><text x=\"510\" y=\"62\" font-size=\"22\" font-weight=\"700\">B</text><text x=\"275\" y=\"155\" font-size=\"32\" font-weight=\"700\">7</text><text x=\"275\" y=\"180\" font-size=\"14\">iba A</text><text x=\"380\" y=\"155\" font-size=\"32\" font-weight=\"700\">2</text><text x=\"380\" y=\"180\" font-size=\"14\">A ∩ B</text><text x=\"485\" y=\"155\" font-size=\"32\" font-weight=\"700\">5</text><text x=\"485\" y=\"180\" font-size=\"14\">iba B</text><text x=\"175\" y=\"245\" font-size=\"28\" font-weight=\"700\">4</text><text x=\"175\" y=\"266\" font-size=\"14\">mimo oboch</text></g></svg></div><p>Každý prvok je v práve jednej zo štyroch oblastí. Čísla sú <strong>počty prvkov</strong> v oblastiach.</p>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "read",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Ako z oblastí poskladať počet prvkov",
        "html": "<p>Pre diagram vyššie (iba A = 7, A ∩ B = 2, iba B = 5, mimo oboch = 4) postupujeme tak, že si vždy povieme, <em>ktoré oblasti</em> daná množina zahŕňa:</p><div class=\"example\"><span class=\"mini-label\">PRÍKLAD</span><p>|A| = iba A + prienik = 7 + 2 = <strong>9</strong></p><p>|B| = iba B + prienik = 5 + 2 = <strong>7</strong></p><p>|A ∪ B| = 7 + 2 + 5 = <strong>14</strong></p><p>|A − B| = iba A = <strong>7</strong>, |B − A| = iba B = <strong>5</strong></p><p>|A′| = všetko mimo kruhu A = iba B + mimo oboch = 5 + 4 = <strong>9</strong></p><p>|U| = 7 + 2 + 5 + 4 = <strong>18</strong></p></div><div class=\"warning\"><strong>Najčastejšia chyba:</strong> |A| nie je len číslo „iba A“. Prienik patrí aj do A, preto ho do |A| treba započítať.</div>",
        "remember": "Pri každej otázke najprv vymenuj oblasti, ktoré do hľadanej množiny patria. Až potom ich sčítaj."
      },
      {
        "id": "c-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "čítanie počtov z diagramu",
        "question": "Vo Vennovom diagrame množín A a B v univerze U je v oblasti „iba A“ 7 prvkov, v prieniku A ∩ B 2 prvky, v oblasti „iba B“ 5 prvkov a mimo oboch množín 4 prvky. Koľko prvkov má množina A?",
        "options": [
          "7",
          "9",
          "14"
        ],
        "answer": 1,
        "correct": "Množina A zahŕňa oblasť „iba A“ aj prienik: 7 + 2 = 9.",
        "hint": "Ktoré dve oblasti diagramu ležia vnútri kruhu A?"
      },
      {
        "id": "n-union",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "Počet prvkov zjednotenia",
        "title": "Počet prvkov zjednotenia",
        "prompt": "Vo Vennovom diagrame je v oblasti „iba A“ 7 prvkov, v prieniku 2 prvky, v oblasti „iba B“ 5 prvkov a mimo oboch množín 4 prvky. Koľko prvkov má A ∪ B?",
        "validate": "exact",
        "answer": 14,
        "success": "A ∪ B tvoria prvky aspoň v jednej množine: 7 + 2 + 5 = 14.",
        "hint": "Zjednotenie sú všetky oblasti vnútri aspoň jedného kruhu. Prvky mimo kruhov do neho nepatria.",
        "reveal": "Správne je 14: zrátaj tri oblasti vnútri kruhov (7 + 2 + 5), prvky mimo oboch kruhov nepočítaj."
      },
      {
        "id": "c-b",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "čítanie počtov z diagramu",
        "question": "Vo Vennovom diagrame množín A a B je v oblasti „iba A“ 7 prvkov, v prieniku 2 prvky, v oblasti „iba B“ 5 prvkov a mimo oboch množín 4 prvky. Koľko prvkov má rozdiel B − A?",
        "options": [
          "2",
          "7",
          "5"
        ],
        "answer": 2,
        "correct": "B − A sú prvky z B, ktoré nepatria do A, teda oblasť „iba B“: 5.",
        "hint": "Rozdiel B − A: prvky patriace do B a zároveň nepatriace do A. Ktorá oblasť to je?"
      },
      {
        "id": "n-compl",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "Počet prvkov doplnku",
        "title": "Počet prvkov doplnku",
        "prompt": "Vo Vennovom diagrame je v oblasti „iba A“ 7 prvkov, v prieniku 2 prvky, v oblasti „iba B“ 5 prvkov a mimo oboch množín 4 prvky. Koľko prvkov má doplnok A′ (v U)?",
        "validate": "exact",
        "answer": 9,
        "success": "A′ je všetko v U mimo kruhu A: 5 + 4 = 9.",
        "hint": "Doplnok A′ je všetko, čo je v obdĺžniku U mimo kruhu A. Pozor, patrí sem aj oblasť „iba B“.",
        "reveal": "Správne je 9: mimo kruhu A sú dve oblasti, „iba B“ (5) a „mimo oboch“ (4)."
      },
      {
        "id": "match",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "oblasti a zápis",
        "title": "Ktorá oblasť je ktorý zápis?",
        "labels": [
          "A ∪ B",
          "A ∩ B",
          "A − B",
          "B − A",
          "A′"
        ],
        "items": [
          {
            "text": "celá plocha oboch kruhov dokopy",
            "answer": "A ∪ B"
          },
          {
            "text": "iba spoločný prekryv kruhov",
            "answer": "A ∩ B"
          },
          {
            "text": "kruh A bez prekryvu s B",
            "answer": "A − B"
          },
          {
            "text": "kruh B bez prekryvu s A",
            "answer": "B − A"
          },
          {
            "text": "všetko v obdĺžniku U mimo kruhu A",
            "answer": "A′"
          }
        ]
      },
      {
        "id": "hunt",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak zadanie vyriešil takto: „V diagrame je v oblasti iba A 7 prvkov a v prieniku A ∩ B 2 prvky, preto |A| = 7.“ V čom je chyba?",
        "options": [
          "Do |A| patria aj prvky prieniku, lebo tie sú tiež v A. Správne je 7 + 2.",
          "Od 7 treba odpočítať prienik, správne je 7 − 2.",
          "Do |A| treba pripočítať aj prvky mimo oboch množín."
        ],
        "answer": 0,
        "correct": "Presne. Prienik leží vnútri A aj vnútri B, preto sa počíta do oboch.",
        "hint": "Leží prienik vnútri kruhu A?"
      },
      {
        "id": "n-only",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "Dopočítanie oblasti iba A",
        "title": "Dopočítanie oblasti iba A",
        "prompt": "Vo Vennovom diagrame množín A, B platí |A| = 10 a |A ∩ B| = 3. Koľko prvkov je v oblasti „iba A“, teda koľko má A − B?",
        "validate": "exact",
        "answer": 7,
        "success": "Z desiatich prvkov množiny A sú 3 aj v B, zvyšných 10 − 3 = 7 je iba v A.",
        "hint": "Množina A sa skladá z dvoch oblastí: „iba A“ a prieniku. Poznáš celok aj jednu časť.",
        "reveal": "Správne je 7: |A − B| = |A| − |A ∩ B| = 10 − 3."
      },
      {
        "id": "n-out",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "Dopočítanie prvkov mimo oboch množín",
        "title": "Dopočítanie prvkov mimo oboch množín",
        "prompt": "Univerzum U má 30 prvkov. Vo Vennovom diagrame je v oblasti „iba A“ 12 prvkov, v prieniku 4 prvky a v oblasti „iba B“ 6 prvkov. Koľko prvkov leží mimo oboch množín?",
        "validate": "exact",
        "answer": 8,
        "success": "Vnútri kruhov je 12 + 4 + 6 = 22 prvkov, mimo ich je 30 − 22 = 8.",
        "hint": "Najprv zisti, koľko prvkov leží vnútri aspoň jedného kruhu, a to odpočítaj od |U|.",
        "reveal": "Správne je 8: 30 − (12 + 4 + 6)."
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha na papier",
        "html": "<p>Odlož zariadenie. Nech <strong>U = {1, 2, 3, …, 12}</strong>, <strong>A = {1, 2, 3, 4, 5}</strong> a <strong>B = {4, 5, 6, 7}</strong>.</p><ol><li>Nakresli Vennov diagram a zapíš prvky do všetkých štyroch oblastí.</li><li>Zisti |A ∪ B|, |A − B|, |B − A| a |A′|.</li></ol><p>Postup zapíš tak, ako by si ho písal/a do písomky.</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: Vennove diagramy",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Riešenia píš do zošita. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Vo Vennovom diagrame množín A, B v U je v oblasti „iba A“ 6 prvkov, v prieniku 4 prvky, v oblasti „iba B“ 3 prvky a mimo oboch množín 7 prvkov. Urč |A|, |B|, |A ∪ B| a |U|.",
            "answer": "|A| = 6 + 4 = 10<br>|B| = 3 + 4 = 7<br>|A ∪ B| = 6 + 4 + 3 = 13<br>|U| = 13 + 7 = 20"
          },
          {
            "level": "zaklad",
            "text": "Nech U = {1, 2, …, 10}, A = {2, 4, 6, 8, 10} a B = {1, 2, 3, 4, 5}. Zapíš prvky do štyroch oblastí Vennovho diagramu: iba A, A ∩ B, iba B, mimo oboch.",
            "answer": "iba A: 6, 8, 10<br>A ∩ B: 2, 4<br>iba B: 1, 3, 5<br>mimo oboch: 7, 9"
          },
          {
            "level": "rozsirenie",
            "text": "Univerzum U má 30 prvkov. Pre množiny A, B platí |A| = 14, |B| = 11 a |A ∩ B| = 5. Koľko prvkov je v oblasti „iba A“, koľko „iba B“ a koľko leží mimo oboch množín?",
            "answer": "iba A: 14 − 5 = 9<br>iba B: 11 − 5 = 6<br>|A ∪ B| = 9 + 5 + 6 = 20<br>mimo oboch: 30 − 20 = 10"
          },
          {
            "level": "rozsirenie",
            "text": "Pre množiny A, B platí |A ∪ B| = 25, |A − B| = 12 a |B − A| = 9. Urč |A ∩ B| a |A|.",
            "answer": "|A ∩ B| = 25 − 12 − 9 = 4<br>|A| = 12 + 4 = 16"
          },
          {
            "level": "bonus",
            "text": "Univerzum U má 40 prvkov. Platí |A′| = 22, |B| = 15 a |A ∩ B| = 6. Urč |A|, |A − B|, |B − A| a počet prvkov mimo oboch množín.",
            "answer": "|A| = 40 − 22 = 18<br>|A − B| = 18 − 6 = 12<br>|B − A| = 15 − 6 = 9<br>|A ∪ B| = 12 + 6 + 9 = 27<br>mimo oboch: 40 − 27 = 13"
          }
        ]
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Prečo nestačí číslo „iba A“",
        "prompt": "Vysvetli jednou až dvoma vetami, prečo počet prvkov množiny A nie je rovnaký ako počet prvkov v oblasti „iba A“.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Množina A obsahuje všetky prvky vnútri kruhu A, teda aj tie, ktoré sú v prieniku s B. Oblasť „iba A“ je len časť množiny A, preto |A| = (iba A) + |A ∩ B|.",
        "placeholder": "Počet prvkov A nie je rovnaký, pretože..."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Som pripravený/á na písomku?",
        "skills": [
          "čítanie počtov z diagramu",
          "|A|, |B| a |A ∪ B| z oblastí",
          "rozdiel a doplnok (A − B, A′)",
          "dopočítanie neznámej oblasti"
        ],
        "prompt": "Označ, ako dobre to zvládaš. Nie je to známka; porovnaj svoj pocit s výsledkom úloh. Čo máš 🔴 alebo 🟡, si pred písomkou ešte raz prejdi."
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 8,
        "text": "Nech U = {1, 2, 3, 4, 5, 6, 7}, A = {1, 2, 3, 4} a B = {3, 4, 5}. Nakresli Vennov diagram a zapíš prvky do jednotlivých oblastí: iba v A, v A aj B, iba v B, mimo oboch kruhov.",
        "answer": "iba v A: 1, 2<br>v A aj B: 3, 4<br>iba v B: 5<br>mimo oboch kruhov: 6, 7"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 8,
        "text": "Nakresli štyri Vennove diagramy dvoch množín A, B v obdĺžniku U a vyfarbi vždy:\na) A ∪ B\nb) A ∩ B\nc) A − B\nd) A′",
        "answer": "a) obidva kruhy celé<br>b) iba prekryv kruhov<br>c) časť kruhu A mimo prekryvu<br>d) všetko v obdĺžniku mimo kruhu A (vrátane časti B, ktorá je mimo A)"
      },
      {
        "id": "w3",
        "level": "rozsirenie",
        "space": 8,
        "text": "V triede je 28 žiakov. Na plávanie chodí 16 žiakov, na tanec 11 žiakov a 5 žiakov chodí na oboje. Nakresli Vennov diagram a zapíš počet žiakov v každej oblasti (iba plávanie, iba tanec, oboje, ani jedno).",
        "answer": "iba plávanie: 16 − 5 = 11<br>iba tanec: 11 − 5 = 6<br>oboje: 5<br>ani jedno: 28 − (11 + 6 + 5) = 6"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 4,
        "text": "Zapíš symbolicky (pomocou A, B a operácií) tú časť diagramu, ktorá obsahuje:\na) prvky, ktoré sú v B, ale nie sú v A\nb) prvky, ktoré sú v A aj v B\nc) prvky, ktoré nie sú v B",
        "answer": "a) B − A<br>b) A ∩ B<br>c) B′"
      },
      {
        "id": "w5",
        "level": "bonus",
        "space": 6,
        "text": "Zo 100 opýtaných pije 60 kávu, 45 čaj a 20 pije kávu aj čaj. Nakresli diagram a urč, koľko opýtaných pije iba kávu, iba čaj, aspoň jeden z nápojov a ani jeden.",
        "answer": "iba kávu: 60 − 20 = 40<br>iba čaj: 45 − 20 = 25<br>aspoň jeden: 40 + 25 + 20 = 85<br>ani jeden: 100 − 85 = 15"
      }
    ]
  }
});
