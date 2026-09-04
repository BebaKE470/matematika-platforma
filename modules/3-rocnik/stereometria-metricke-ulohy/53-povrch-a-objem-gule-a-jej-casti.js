MathPlatform.registerModule({
  "id": "3-u03-h053",
  "teacher": {
    "placement": "3. ročník · Stereometria metrické úlohy · 53. hodina: Povrch a objem gule a jej častí",
    "prerequisites": [
      "učivo ZŠ primerané téme",
      "všetko učivo prebrané v predchádzajúcich hodinách a ročníkoch, ktoré je pre úlohu potrebné"
    ],
    "planContent": [
      "Aktuálny tematický plán uvádza tému „Povrch a objem gule a jej častí“. Obsah modulu rešpektuje jej miesto a rozsah v pláne."
    ],
    "planPerformance": [
      "Plán uvádza: vedieť klasifikovať a opísať vlastnosti telies a poznať a používať vzťahy pre výpočet objemov a povrchov telies."
    ],
    "goals": [
      "porozumieť téme „Povrch a objem gule a jej častí“",
      "prepájať názornú, slovnú a symbolickú reprezentáciu",
      "vysvetliť postup a skontrolovať výsledok"
    ],
    "competencies": [
      "matematická komunikácia",
      "modelovanie a reprezentácie",
      "argumentácia a kontrola výsledku",
      "prehľadný ručný zápis"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie spôsobu práce: interpretácia, modelovanie, reprezentácie a zdôvodnenie. Neurčuje poradie učiva.",
      "Originálna maturitná úloha je zaradená až v okamihu, keď sú všetky potrebné poznatky už dostupné."
    ],
    "flow": [
      "2–3 min: problém alebo názorný podnet",
      "cca 15 min: vybrané digitálne aktivity",
      "8–10 min: ručné riešenie a zápis do zošita",
      "3–5 min: spoločná kontrola"
    ],
    "diagnostics": [
      "žiak rozumie použitým symbolom",
      "nevykonáva operáciu bez kontroly podmienok",
      "vie výsledok vysvetliť slovami"
    ],
    "partialUse": [
      "Modul možno použiť celý približne 15 minút alebo vybrať jeho časť.",
      "Mobil nenahrádza ručné počítanie, náčrt, presný zápis ani argumentáciu."
    ]
  },
  "student": {
    "title": "Povrch a objem gule a jej častí",
    "subtitle": "Téma 53 · Stereometria metrické úlohy",
    "intro": "Najprv pochop situáciu, potom počítaj alebo zapisuj. Nakoniec výsledok vysvetli a skontroluj.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Povrch a objem gule a jej častí",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 760 300\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"><path d=\"M220 70 L470 70 L590 135 L340 135 Z\"/><path d=\"M220 70 L220 220 L340 285 L340 135\"/><path d=\"M340 285 L590 220 L590 135\"/><path d=\"M220 220 L470 220 L590 285\" stroke-dasharray=\"7 7\" opacity=\".5\"/></g><g fill=\"currentColor\" font-family=\"system-ui\"><text x=\"180\" y=\"155\" font-size=\"20\">v</text><text x=\"350\" y=\"55\" font-size=\"20\">podstava</text><text x=\"455\" y=\"180\" font-size=\"20\">plášť</text></g></svg></div><p><strong>Dnešná otázka:</strong> Ako závisí povrch a objem gule od polomeru?</p>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "concept",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Najprv význam, potom symboly a výpočet",
        "html": "<p><strong>Guľa:</strong> S=4πr², V=(4/3)πr³.</p><p><strong>Polguľa:</strong> V=(2/3)πr³. Jej zakrivená plocha má obsah 2πr²; ak rátame aj kruhovú podstavu, celý povrch polgule je 3πr².</p><p>Pri slovnej úlohe vždy rozhodni, či sa pýta na zakrivenú plochu alebo na celý povrch vrátane podstavy.</p>"
      },
      {
        "id": "start",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "porozumenie",
        "question": "Povrch gule je",
        "options": [
          "4πr²",
          "(4/3)πr³",
          "πr²"
        ],
        "answer": 0,
        "correct": "S=4πr².",
        "hint": "Najprv si pomenuj, čo je dané a čo hľadáš."
      },
      {
        "id": "explain1",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Povedz to presne",
        "prompt": "Vysvetli vlastnými slovami hlavnú myšlienku témy „Povrch a objem gule a jej častí“.",
        "model": "Pre guľu S=4πr² a V=(4/3)πr³. Zdvojnásobenie r zväčší povrch 4-krát a objem 8-krát."
      },
      {
        "id": "notebook",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Zapíš si do zošita",
        "html": "<p><span class=\"mini-label\">ÚLOHA DO ZOŠITA</span><br>Nakresli veľký kruh ako rez gule a označ polomer r; vedľa zapíš jednotky S a V.</p><p><span class=\"mini-label\">ZAPÍŠ SI DO ZOŠITA</span><br>Zapíš si do zošita hlavné pravidlo alebo postup a jeden vlastný príklad.</p>",
        "model": "<strong>KONTROLA:</strong> Pre guľu S=4πr² a V=(4/3)πr³. Zdvojnásobenie r zväčší povrch 4-krát a objem 8-krát."
      },
      {
        "id": "transfer",
        "type": "choice",
        "phase": "PRENES",
        "skill": "prenos",
        "question": "Ak sa polomer gule zdvojnásobí, objem sa zväčší",
        "options": [
          "2-krát",
          "4-krát",
          "8-krát"
        ],
        "answer": 2,
        "correct": "Objem závisí od r³.",
        "hint": "Skús náčrt, odhad alebo spätnú kontrolu."
      },
      {
        "id": "matura",
        "type": "choice",
        "phase": "MATURITNÝ PRENOS",
        "skill": "mierka objemu a povrchu",
        "question": "Originálna maturitná úloha 2010, úloha 28: Koľkokrát sa zväčší povrch balóna tvaru gule, ak sa jeho objem zväčší 8-násobne?",
        "options": [
          "2-krát",
          "4-krát",
          "8-krát",
          "16-krát"
        ],
        "answer": 1,
        "correct": "Objem rastie s r³. Osemnásobný objem znamená dvojnásobný polomer. Povrch rastie s r², preto sa zväčší 2²=4-krát.",
        "hint": "Najprv zisti, ako sa musel zmeniť polomer."
      },
      {
        "id": "error",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "kritické myslenie",
        "question": "Ktorý postup je pri tejto téme najspoľahlivejší?",
        "options": [
          "Použiť pravidlo a skontrolovať podmienky aj jednotky.",
          "Zapamätať si iba posledný výsledok.",
          "Preskočiť zápis a tipnúť odpoveď."
        ],
        "answer": 0,
        "correct": "Áno. Postup musí byť kontrolovateľný a výsledok interpretovaný.",
        "hint": "Matematika nie je tipovanie."
      },
      {
        "id": "explain2",
        "type": "selfWrite",
        "phase": "ARGUMENTUJ",
        "skill": "argumentácia",
        "title": "Prečo to funguje?",
        "prompt": "Napíš jednu vetu, ktorou by si spolužiakovi zdôvodnil/a svoj postup.",
        "model": "Dobré zdôvodnenie pomenúva použité pravidlo, ukazuje rozhodujúci krok a overí, že výsledok spĺňa zadanie."
      },
      {
        "id": "manual",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Ceruzka má posledné slovo",
        "html": "<p><span class=\"mini-label\">ÚLOHA</span><br>Vytvor alebo vyrieš podobný príklad v zošite bez aplikácie. Výsledok skontroluj iným spôsobom, ak je to možné.</p>",
        "model": "<strong>KONTROLA:</strong> Zápis má byť čitateľný, s medzikrokmi, jednotkami alebo podmienkami podľa typu úlohy."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "porozumenie",
          "presný zápis",
          "kontrola výsledku"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka."
      }
    ]
  }
});
