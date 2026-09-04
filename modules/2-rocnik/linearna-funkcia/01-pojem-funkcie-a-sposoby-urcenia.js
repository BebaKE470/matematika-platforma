MathPlatform.registerModule({
  "id": "2-funkcie-01",
  "teacher": {
    "placement": "2. ročník · Lineárna funkcia · Hodina 1 · Pojem funkcie – príklady, spôsoby určenia funkcie",
    "prerequisites": [
      "súradnicová sústava zo ZŠ",
      "dosadzovanie do jednoduchého výrazu",
      "čítanie tabuľky"
    ],
    "planContent": [
      "Téma a poradie sú prevzaté z aktuálneho tematického plánu 2. ročníka.",
      "Pri prvých dvoch tematických celkoch nie je v zdrojovom pláne samostatne vyplnený výkonový ani obsahový štandard; ciele sú didaktickým rozpracovaním názvu témy a nadväznosti hodín."
    ],
    "planPerformance": [
      "Nevymýšľame chýbajúci oficiálny výkonový štandard. Sledujeme primerané očakávané výkony uvedené v cieľoch modulu."
    ],
    "goals": [
      "vysvetliť funkciu ako jednoznačné priradenie",
      "čítať zápis f(x)",
      "rozpoznať slovný opis, tabuľku, predpis a graf"
    ],
    "competencies": [
      "prepájanie slovného, tabuľkového, algebraického a grafického vyjadrenia",
      "presné matematické vyjadrovanie",
      "čítanie a interpretácia grafu",
      "zdôvodnenie odpovede na základe definície alebo grafu"
    ],
    "enrichment": [
      "Aktuálny tematický plán určuje obsah a poradie tejto hodiny; návrh maturitného štandardu sa používa iba ako metodické obohatenie.",
      "Návrh maturitného štandardu prirodzene obohacuje túto hodinu prepájaním reprezentácií funkcie a matematickou komunikáciou."
    ],
    "flow": [
      "5 min tabuľa: vstup–pravidlo–výstup",
      "15–15–18 min modul",
      "8 min zošit",
      "5 min syntéza"
    ],
    "diagnostics": [
      "jednoznačnosť priradenia",
      "čítanie f(x)",
      "prepájanie reprezentácií"
    ],
    "partialUse": [
      "Modul je možné použiť celý alebo vybrať iba objavovaciu, zošitovú či diagnostickú časť podľa priebehu hodiny."
    ]
  },
  "student": {
    "title": "Funkcia pod lupou",
    "subtitle": "Jeden vstup, jeden výsledok",
    "intro": "Najprv myšlienka, potom zápis. Zistíš, čo musí spĺňať funkcia a ako tú istú závislosť môžeme vyjadriť viacerými spôsobmi.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "start",
        "type": "info",
        "phase": "ZAČÍNAME",
        "title": "Keď sa jeden údaj riadi druhým",
        "html": "<p>V praxi často poznáme <strong>vstup</strong> a podľa pravidla určujeme <strong>výstup</strong>. Napríklad cenu podľa počtu kusov alebo dĺžku dráhy podľa času.</p><div class=\"coordinate-wrap\"><svg class=\"coordinate-plot\" viewBox=\"0 0 620 300\" role=\"img\" aria-label=\"Schéma priradenia vstupov k výstupom\"><text x=\"95\" y=\"35\" class=\"plot-point-label\">vstupy</text><text x=\"455\" y=\"35\" class=\"plot-point-label\">výstupy</text><circle cx=\"105\" cy=\"85\" r=\"8\" fill=\"#173d35\"/><circle cx=\"105\" cy=\"145\" r=\"8\" fill=\"#173d35\"/><circle cx=\"105\" cy=\"205\" r=\"8\" fill=\"#173d35\"/><text x=\"75\" y=\"90\" class=\"plot-label\">1</text><text x=\"75\" y=\"150\" class=\"plot-label\">2</text><text x=\"75\" y=\"210\" class=\"plot-label\">3</text><circle cx=\"500\" cy=\"85\" r=\"8\" fill=\"#173d35\"/><circle cx=\"500\" cy=\"145\" r=\"8\" fill=\"#173d35\"/><circle cx=\"500\" cy=\"205\" r=\"8\" fill=\"#173d35\"/><text x=\"515\" y=\"90\" class=\"plot-label\">3</text><text x=\"515\" y=\"150\" class=\"plot-label\">5</text><text x=\"515\" y=\"210\" class=\"plot-label\">7</text><line x1=\"115\" y1=\"85\" x2=\"488\" y2=\"85\" stroke=\"#173d35\" stroke-width=\"3\"/><line x1=\"115\" y1=\"145\" x2=\"488\" y2=\"145\" stroke=\"#173d35\" stroke-width=\"3\"/><line x1=\"115\" y1=\"205\" x2=\"488\" y2=\"205\" stroke=\"#173d35\" stroke-width=\"3\"/><text x=\"245\" y=\"260\" class=\"plot-point-label\">každý vstup má práve jeden výstup</text></svg></div><p class=\"keyidea\">Najprv pochopíme myšlienku priradenia. Zápis funkcie príde až potom.</p>"
      },
      {
        "id": "one-output",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "jednoznačnosť",
        "prompt": "Pravidlo znie: vstup vynásob 2 a pripočítaj 1.",
        "stimulus": "vstup 4 → ?",
        "question": "Aký výstup dostaneme?",
        "options": [
          "7",
          "8",
          "9",
          "10"
        ],
        "answer": 2,
        "correct": "Výsledok je 2 · 4 + 1 = 9. Pri rovnakom vstupe a rovnakom pravidle dostávame jeden určený výsledok.",
        "hint": "Najprv násob dvoma, potom pripočítaj 1."
      },
      {
        "id": "definition",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Zavádzame pojem funkcia",
        "html": "<p><strong>Funkcia</strong> je také priradenie, pri ktorom má každý dovolený vstup <strong>práve jeden</strong> výstup.</p><p>Dva rôzne vstupy pokojne môžu mať rovnaký výstup. Nesmie však nastať, že jeden konkrétny vstup má dva rôzne výstupy.</p>",
        "remember": "jeden dovolený vstup → práve jeden výstup"
      },
      {
        "id": "isfunction",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "funkcia",
        "title": "Funkcia alebo nie?",
        "items": [
          {
            "text": "Každému číslu priradíme jeho dvojnásobok.",
            "answer": true,
            "why": "Dvojnásobok je určený jednoznačne."
          },
          {
            "text": "Každému žiakovi priradíme jeho dátum narodenia.",
            "answer": true,
            "why": "Jeden žiak má jeden dátum narodenia."
          },
          {
            "text": "Každému číslu priradíme jedného z jeho deliteľov.",
            "answer": false,
            "why": "Napríklad 6 má viac deliteľov a pravidlo neurčuje, ktorý vybrať."
          }
        ],
        "labels": [
          "FUNKCIA",
          "NIE JE FUNKCIA"
        ]
      },
      {
        "id": "notation",
        "type": "explain",
        "phase": "NOVÝ ZÁPIS",
        "title": "Ako funkciu zapisujeme",
        "html": "<p>Funkciu môžeme pomenovať napríklad písmenom <strong>f</strong>. Ak vstup označíme <strong>x</strong>, zápis <strong>f(x)</strong> čítame „ef od x“ a znamená <strong>výstup funkcie pri vstupe x</strong>.</p><p>Ak pravidlo znie „vynásob 2 a pripočítaj 1“, môžeme zapísať <strong>f(x) = 2x + 1</strong>.</p><p>Potom napríklad <strong>f(4)=9</strong>.</p>",
        "remember": "f(x) nie je násobenie f · x; je to označenie funkčnej hodnoty."
      },
      {
        "id": "ways",
        "type": "info",
        "phase": "REPREZENTÁCIE",
        "title": "Tá istá funkcia môže vyzerať štyrmi spôsobmi",
        "html": "<div class=\"compare\"><div><strong>slovne</strong><br>„vynásob 2 a pripočítaj 1“</div><div><strong>predpisom</strong><br>f(x)=2x+1</div><div><strong>tabuľkou</strong><br>x: 0, 1, 2<br>f(x): 1, 3, 5</div><div><strong>grafom</strong><br>body [0;1], [1;3], [2;5]</div></div><p class=\"keyidea\">Nie sú to štyri rôzne funkcie. Sú to štyri reprezentácie tej istej závislosti.</p>"
      },
      {
        "id": "repcheck",
        "type": "choice",
        "phase": "PREPOJ",
        "skill": "reprezentácie",
        "prompt": "Máme predpis f(x)=2x+1.",
        "question": "Ktorý riadok tabuľky je správny?",
        "options": [
          "x=2 → f(x)=3",
          "x=2 → f(x)=4",
          "x=2 → f(x)=5",
          "x=2 → f(x)=6"
        ],
        "answer": 2,
        "correct": "Dosadením x=2 dostaneme f(2)=2·2+1=5.",
        "hint": "Dosadíš 2 namiesto x."
      },
      {
        "id": "work",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Prepoj reprezentácie",
        "html": "<p>Do zošita si vytvor malú tabuľku pre <strong>f(x)=2x+1</strong> a vstupy −1, 0, 1, 2. Potom body zakresli do súradnicovej sústavy.</p>",
        "model": "<strong>KONTROLA:</strong> hodnoty sú −1, 1, 3, 5. Body: [−1;−1], [0;1], [1;3], [2;5]."
      },

      {"id":"same-output","type":"choice","phase":"PREMYSLI","skill":"jednoznačnosť","prompt":"Dvaja rôzni žiaci môžu mať rovnaký dátum narodenia.","question":"Porušuje to podmienku, aby priradenie žiak → dátum narodenia bolo funkciou?","options":["Áno, výstupy musia byť všetky rôzne.","Nie, dôležité je, aby každý jeden žiak mal práve jeden dátum.","Áno, funkcia nesmie mať rovnaké hodnoty.","Nedá sa rozhodnúť."],"answer":1,"correct":"Nie. Funkcia povoľuje rovnaký výstup pre rôzne vstupy. Zakázané sú dva rôzne výstupy pre ten istý vstup.","hint":"Sleduj jeden konkrétny vstup."},
      {"id":"table-to-rule","type":"choice","phase":"PREPOJ","skill":"reprezentácie","stimulus":"x: 0, 1, 2, 3  |  f(x): 2, 5, 8, 11","question":"Ktorý slovný opis zodpovedá tabuľke?","options":["Vynásob 2 a pripočítaj 3.","Vynásob 3 a pripočítaj 2.","Pripočítaj 3.","Umocni na druhú a pripočítaj 2."],"answer":1,"correct":"Hodnoty rastú vždy o 3 a pri x=0 je výstup 2: pravidlo je 3x+2.","hint":"Skontroluj najprv x=0 a x=1."},
      {"id":"explain-function","type":"selfWrite","phase":"VYSVETLI","title":"Definícia vlastnými slovami","promptHtml":"Spolužiak tvrdí: <strong>„Funkcia je priradenie, v ktorom sa žiadne dva výstupy nesmú opakovať.“</strong> Oprav jeho vetu.","model":"Funkcia je priradenie, v ktorom má každý dovolený vstup práve jeden výstup. Rôzne vstupy môžu mať rovnaký výstup."},
      {
        "id": "clean",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Čo si odnášam",
        "html": "<p><strong>NADPIS:</strong> Funkcia – pojem a spôsoby určenia</p><p><strong>TEÓRIA:</strong> Funkcia každému dovolenému vstupu priraďuje práve jeden výstup. Funkciu môžeme určiť slovne, tabuľkou, predpisom alebo grafom. Zápis f(x) označuje funkčnú hodnotu pri vstupe x.</p>",
        "model": "<strong>PRÍKLAD:</strong> f(x)=2x+1 ⇒ f(3)=7."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "SEBAHODNOTENIE",
        "title": "Čo už viem?",
        "prompt": "Pri každej zručnosti označ, ako sa teraz cítiš.",
        "skills": [
          "viem vysvetliť, čo je funkcia",
          "rozumiem zápisu f(x)",
          "rozpoznám štyri spôsoby určenia funkcie"
        ]
      }
    ]
  }
});
