MathPlatform.registerModule({
  "id": "1-u01-h010",
  "teacher": {
    "placement": "1. ročník · Výroková formula · 10. hodina: Všeobecný a existenčný kvantifikátor",
    "prerequisites": [
      "výrok, jednoduchá symbolika, základné číselné množiny zo ZŠ v intuitívnom rozsahu"
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
      "rozlíšiť význam ∀ a ∃",
      "preložiť jednoduchý slovný výrok do symbolického zápisu a späť",
      "rozpoznať zamlčaný všeobecný kvantifikátor v bežnom matematickom tvrdení",
      "určiť pravdivosť jednoduchých kvantifikovaných výrokov"
    ],
    "competencies": [
      "presné matematické vyjadrovanie",
      "argumentácia a zdôvodňovanie",
      "kritické posudzovanie tvrdení",
      "práca so symbolickým a slovným zápisom",
      "prehľadný pracovný a čistý zápis v zošite"
    ],
    "enrichment": [
      "Návrh štandardu explicitne uvádza všeobecný a existenčný kvantifikátor a ich symbolický zápis; modul zdôrazňuje preklad medzi reprezentáciami."
    ],
    "flow": [
      "5 min: všetci vs. aspoň jeden v bežnej situácii",
      "15–20 min: digitálny modul",
      "10 min: symbolický prepis v zošite",
      "5 min: spoločný záver"
    ],
    "diagnostics": [
      "nepletie „všetky“ a „existuje“",
      "vie pomenovať obor, o ktorom sa hovorí",
      "dokáže prepísať jednoduchú vetu symbolicky"
    ],
    "partialUse": [
      "Modul je možné použiť celý alebo len vybrané kroky podľa priebehu hodiny.",
      "Digitálna aktivita nenahrádza ručný zápis, diskusiu pri tabuli ani zdôvodnenie vlastnými slovami."
    ]
  },
  "student": {
    "title": "Všetky alebo aspoň jeden?",
    "subtitle": "Téma 10 · Všeobecný a existenčný kvantifikátor",
    "intro": "Kvantifikátor hovorí, koľkých prvkov sa tvrdenie týka. Táto malá značka zásadne mení význam vety.",
    "estimatedTime": "15–18 min",
    "activities": [
      {
        "id": "visual",
        "type": "info",
        "phase": "POCHOP",
        "title": "Dnes zavádzame dve nové značky: ∀ a ∃",
        "html": "<p><strong>∀</strong> čítame „pre každý“ alebo „pre všetky“. <strong>∃</strong> čítame „existuje aspoň jeden“. Najprv ich budeme zapisovať slovne s uvedením oboru čísel. Množinový zápis príslušnosti zavedie až nasledujúci tematický celok.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 760 260\" role=\"img\" aria-label=\"Všeobecný a existenčný kvantifikátor\"><g font-family=\"system-ui\" text-anchor=\"middle\"><rect x=\"40\" y=\"30\" width=\"310\" height=\"190\" rx=\"20\" fill=\"currentColor\" opacity=\".06\"/><text x=\"195\" y=\"62\" font-size=\"24\" font-weight=\"700\">∀ x</text><text x=\"195\" y=\"88\" font-size=\"15\">pre každý prvok</text><g fill=\"currentColor\"><circle cx=\"120\" cy=\"135\" r=\"13\"/><circle cx=\"170\" cy=\"135\" r=\"13\"/><circle cx=\"220\" cy=\"135\" r=\"13\"/><circle cx=\"270\" cy=\"135\" r=\"13\"/></g><text x=\"195\" y=\"185\" font-size=\"14\">všetky musia spĺňať vlastnosť</text><rect x=\"410\" y=\"30\" width=\"310\" height=\"190\" rx=\"20\" fill=\"currentColor\" opacity=\".06\"/><text x=\"565\" y=\"62\" font-size=\"24\" font-weight=\"700\">∃ x</text><text x=\"565\" y=\"88\" font-size=\"15\">existuje aspoň jeden</text><g fill=\"currentColor\" opacity=\".25\"><circle cx=\"490\" cy=\"135\" r=\"13\"/><circle cx=\"540\" cy=\"135\" r=\"13\"/><circle cx=\"590\" cy=\"135\" r=\"13\"/></g><circle cx=\"640\" cy=\"135\" r=\"17\" fill=\"currentColor\"/><text x=\"565\" y=\"185\" font-size=\"14\">stačí jeden vhodný prvok</text></g></svg></div>",
        "continueLabel": "Pokračovať"
      },
      {
        "id": "all",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "Všeobecný kvantifikátor",
        "question": "Ktorý zápis znamená „Pre každé reálne číslo x platí x² ≥ 0“?",
        "options": [
          "∃ x (x je reálne číslo): x² ≥ 0",
          "∀ x (x je reálne číslo): x² ≥ 0",
          "∀ x (x je reálne číslo): x² < 0"
        ],
        "answer": 1,
        "correct": "Správne. Značka ∀ znamená „pre každý“.",
        "hint": "Hľadaj symbol pre všetky prvky."
      },
      {
        "id": "exists",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "Existenčný kvantifikátor",
        "question": "Ktorý zápis znamená „Existuje celé číslo, ktorého druhá mocnina je 9“?",
        "options": [
          "∀ x (x je celé číslo): x² = 9",
          "∃ x (x je celé číslo): x² = 9",
          "∃ x (x je celé číslo): x² ≠ 9"
        ],
        "answer": 1,
        "correct": "Áno. Stačí napríklad x=3 alebo x=-3.",
        "hint": "Hľadaj „existuje aspoň jeden“."
      },
      {
        "id": "domain",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Kvantifikátor potrebuje obor",
        "html": "<p>Výrok <strong>∃ x: x² = 2</strong> nie je úplný bez toho, aby bolo jasné, medzi akými číslami x hľadáme. V prirodzených číslach riešenie nie je; v reálnych je.</p><p>Preto si vždy všímaj <strong>obor premenných</strong>.</p>",
        "remember": "Význam kvantifikovaného výroku závisí aj od oboru, z ktorého vyberáme x."
      },
      {
        "id": "hidden",
        "type": "choice",
        "phase": "PREMÝŠĽAJ",
        "skill": "Zamlčaný kvantifikátor",
        "question": "Veta „Súčet dvoch párnych celých čísel je párny“ sa v matematike zvyčajne chápe ako:",
        "options": [
          "tvrdenie o jednej konkrétnej dvojici",
          "všeobecné tvrdenie o každej dvojici párnych celých čísel",
          "existenčné tvrdenie o aspoň jednej dvojici"
        ],
        "answer": 1,
        "correct": "Správne. Všeobecný kvantifikátor môže byť v slovnej formulácii zamlčaný.",
        "hint": "Pýta sa veta na jednu dvojicu, alebo tvrdí pravidlo všeobecne?"
      },
      {
        "id": "nb",
        "type": "notebook",
        "phase": "ZOŠIT",
        "title": "Prelož medzi jazykmi",
        "html": "<p><span class=\"mini-label\">ČISTÝ ZÁPIS</span><br>Zapíš význam symbolov ∀ a ∃.</p><p><span class=\"mini-label\">ÚLOHA</span><br>Prepíš symbolicky: a) Každé reálne číslo má nezápornú druhú mocninu. b) Existuje prirodzené číslo väčšie ako 100.</p>",
        "model": "<strong>VZOR:</strong> ∀ = pre každý; ∃ = existuje aspoň jeden. a) ∀ x (x je reálne číslo): x² ≥ 0. b) ∃ n (n je prirodzené číslo): n &gt; 100."
      },
      {
        "id": "trans",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "Preklad kvantifikátorov",
        "title": "Priraď význam",
        "labels": [
          "všeobecný výrok",
          "existenčný výrok"
        ],
        "items": [
          {
            "text": "∀ n (n je prirodzené číslo): n+1>n",
            "answer": "všeobecný výrok"
          },
          {
            "text": "∃ n (n je prirodzené číslo): n²=25",
            "answer": "existenčný výrok"
          },
          {
            "text": "Každý násobok 10 je deliteľný 5.",
            "answer": "všeobecný výrok"
          },
          {
            "text": "Existuje párne prvočíslo.",
            "answer": "existenčný výrok"
          }
        ]
      },
      {
        "id": "extra-a",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Kvantifikátory",
        "question": "Ktorý zápis čítame „pre každé x“?",
        "options": [
          "∃x",
          "∀x",
          "¬x"
        ],
        "answer": 1,
        "correct": "Symbol ∀ označuje všeobecný kvantifikátor.",
        "hint": "Spomeň si: všeobecný = všetky prípady."
      },
      {
        "id": "extra-b",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Kvantifikátory",
        "question": "Tvrdenie „Existuje prirodzené číslo, ktoré je párne“ potrebuje na potvrdenie:",
        "options": [
          "jeden vhodný príklad",
          "overiť všetky prirodzené čísla",
          "nájsť protipríklad"
        ],
        "answer": 0,
        "correct": "Pri existenčnom tvrdení stačí nájsť aspoň jeden príklad, napríklad 2.",
        "hint": "Slovo „existuje“ znamená aspoň jeden."
      },
      {
        "id": "extra-c",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "Matematická komunikácia",
        "title": "Prelož symbol do vety",
        "prompt": "Vlastnými slovami vysvetli rozdiel medzi „pre každé“ a „existuje aspoň jedno“.",
        "model": "„Pre každé“ tvrdí vlastnosť o všetkých prvkoch uvažovaného oboru. „Existuje“ tvrdí, že stačí aspoň jeden prvok s danou vlastnosťou."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Kvantifikátory",
        "skills": [
          "∀ – pre každý",
          "∃ – existuje",
          "obor premenných",
          "slovný a symbolický zápis"
        ],
        "prompt": "Pri každej položke vyber, ako dobre jej teraz rozumieš. Toto nie je známka; je to spätná väzba pre tvoje ďalšie učenie."
      }
    ]
  }
});
