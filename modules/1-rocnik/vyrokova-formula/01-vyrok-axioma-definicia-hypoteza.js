MathPlatform.registerModule({
  id: "1-logika-01",

  teacher: {
    placement: "1. ročník · Výroková formula · 2. hodina: Výrok, axióma, definícia, hypotéza",

    prerequisites: [
      "rozlíšenie otázky, príkazu a oznamovacej vety",
      "základné matematické pojmy zo ZŠ",
      "schopnosť dosadiť hodnotu za premennú"
    ],

    planContent: [
      "Výroky a ich pravdivostná hodnota.",
      "Výrok, definícia, hypotéza, axióma.",
      "Presnosť matematického jazyka."
    ],

    planPerformance: [
      "Rozlíši výrok od nevýroku.",
      "Určí pravdivostnú hodnotu výroku.",
      "Rozlíši definíciu, hypotézu, tvrdenie a axiómu.",
      "Zdôvodní svoje rozhodnutie."
    ],

    goals: [
      "uvedomiť si matematiku ako presný jazyk",
      "rozlíšiť výrok od otázky, príkazu a otvorenej vety",
      "určiť pravdivosť výroku",
      "vysvetliť význam pojmov definícia, hypotéza a axióma",
      "rozvíjať argumentáciu a presné vyjadrovanie"
    ],

    competencies: [
      "matematická komunikácia",
      "kritické myslenie",
      "argumentácia",
      "práca s informáciami",
      "digitálne kompetencie"
    ],

    enrichment: [
      "Prepojenie s geodéziou a stavebníctvom.",
      "Práca s tvrdeniami zo stavebnej dokumentácie.",
      "Rozdiel medzi overením na príkladoch a dôkazom."
    ],

    estimatedTime: "45 min",

    notebook: `
Téma: Výrok, axióma, definícia, hypotéza

Výrok:
Oznamovacia veta, o ktorej vieme rozhodnúť, či je pravdivá alebo nepravdivá.

Pravdivostná hodnota:
P = pravdivý výrok
N = nepravdivý výrok

Príklad:
„Číslo 13 je prvočíslo.“ → P

„Číslo 7 nie je prvočíslo.“ → N

Definícia:
Presne vysvetľuje matematický pojem.

Hypotéza:
Predpoklad, ktorého pravdivosť ešte skúmame.

Axióma:
Tvrdenie prijaté bez dôkazu ako východisko teórie.
`,

    diagnostics: [
      "žiak rozlišuje výrok a nevýrok",
      "žiak rozlišuje otázku a otvorenú vetu",
      "žiak správne určuje P alebo N",
      "žiak dokáže zdôvodniť svoje rozhodnutie",
      "žiak rozlišuje definíciu, hypotézu a axiómu"
    ],

    flow: [
      "0–3 min: administratíva a naladenie na matematiku",
      "3–8 min: matematika ako jazyk technika",
      "8–15 min: objavovanie pojmu výrok",
      "15–20 min: zápis do zošita",
      "20–30 min: precvičovanie",
      "30–38 min: stavebná a geodetická prax",
      "38–43 min: exit ticket",
      "43–45 min: reflexia a zhrnutie"
    ],

    partialUse: [
      "Výrok alebo nevýrok",
      "Pravdivosť výroku",
      "Definícia/hypotéza/axióma",
      "Exit ticket"
    ]
  },

  student: {
    title: "Je to výrok?",

    subtitle: "Výrok, axióma, definícia, hypotéza",

    intro:
      "Matematika je jazyk. Na tejto hodine sa naučíš rozlišovať výroky od viet, ktoré výrokmi nie sú. Zistíš tiež, čo znamenajú pojmy definícia, hypotéza a axióma.",

    estimatedTime: "10 min",

    activities: [

      {
        id: "motivation",
        type: "explain",
        phase: "MOTIVÁCIA",
        title: "Zo sveta stavbára",
        html: `
<p>Projektant napísal:</p>
<ul>
<li>Budova má 4 podlažia.</li>
<li>Koľko podlaží má budova?</li>
<li>Navrhni budovu.</li>
</ul>
<p>Pri ktorej vete vieme rozhodnúť, či je pravdivá alebo nepravdivá?</p>
`,
        remember:
          "Matematika aj technické odbory potrebujú presné tvrdenia."
      },

      {
        id: "classify",
        type: "sortChoice",
        phase: "1. KROK",
        skill: "Výrok",
        title: "Výrok alebo nie?",

        items: [
          {
            text: "Budova má 4 podlažia.",
            answer: true
          },
          {
            text: "Koľko podlaží má budova?",
            answer: false
          },
          {
            text: "Navrhni budovu.",
            answer: false
          },
          {
            text: "Parcela má výmeru 520 m².",
            answer: true
          },
          {
            text: "7x − 3 = 18",
            answer: false
          },
          {
            text: "Číslo 13 je prvočíslo.",
            answer: true
          },
          {
            text: "Mesiac je planéta.",
            answer: true
          }
        ],

        labels: [
          "VÝROK",
          "NIE JE VÝROK"
        ]
      },

      {
        id: "truth-values",
        type: "matrix",
        phase: "2. KROK",
        skill: "Pravdivostná hodnota",
        title: "Aká je pravdivostná hodnota?",

        labels: [
          "P",
          "N"
        ],

        items: [
          {
            text: "Číslo 13 je prvočíslo.",
            answer: "P"
          },
          {
            text: "Mesiac je planéta.",
            answer: "N"
          },
          {
            text: "Parcela má výmeru 520 m².",
            answer: "P"
          }
        ]
      },

      {
        id: "stavebna-prax",
        type: "sortChoice",
        phase: "STAVEBNÁ PRAX",
        skill: "Matematický jazyk",

        title: "Výrok zo stavebnej dokumentácie",

        items: [
          {
            text: "Objekt má výšku 12 m.",
            answer: true
          },
          {
            text: "Odmeraj výšku objektu.",
            answer: false
          },
          {
            text: "Aká je výška objektu?",
            answer: false
          },
          {
            text: "Projekt bol schválený.",
            answer: true
          }
        ],

        labels: [
          "VÝROK",
          "NIE JE VÝROK"
        ]
      },

      {
        id: "terms",
        type: "matrix",
        phase: "POJMY",
        skill: "Definícia, hypotéza, axióma",

        title: "Rozlíš pojmy",

        labels: [
          "definícia",
          "hypotéza",
          "axióma",
          "tvrdenie"
        ],

        items: [
          {
            text: "Štvorec je obdĺžnik so štyrmi rovnako dlhými stranami.",
            answer: "definícia"
          },
          {
            text: "Predpokladáme, že súčet dvoch párnych čísel je vždy párny.",
            answer: "hypotéza"
          },
          {
            text: "Bodom možno viesť nekonečne veľa priamok.",
            answer: "axióma"
          },
          {
            text: "Číslo 13 je prvočíslo.",
            answer: "tvrdenie"
          }
        ]
      },

      {
        id: "notebook",
        type: "notebook",
        phase: "ZOŠIT",

        title: "Zapíš si",

        html: `
<p>Zapíš definíciu výroku, označenia P a N a stručné vysvetlenia pojmov definícia, hypotéza a axióma.</p>
`
      },

      {
        id: "exit",
        type: "choice",
        phase: "EXIT TICKET",

        prompt: "Číslo 7 nie je prvočíslo.",

        question:
          "Ktorá odpoveď je správna?",

        options: [
          "Nie je to výrok.",
          "Je to pravdivý výrok.",
          "Je to nepravdivý výrok."
        ],

        answer: 2,

        correct:
          "Je to výrok a jeho pravdivostná hodnota je N.",

        hint:
          "Výrok môže byť aj nepravdivý."
      },

      {
        id: "reflection",

        type: "reflection",

        phase: "REFLEXIA",

        title: "Ako sa cítim?",

        skills: [
          "Rozlíšim výrok a nevýrok.",
          "Viem určiť P/N.",
          "Rozumiem pojmu definícia.",
          "Rozumiem pojmu hypotéza.",
          "Rozumiem pojmu axióma."
        ],

        prompt:
          "Označ, ako dobre jednotlivým častiam rozumieš. Toto nie je známka."
      }

    ]
  }
});
