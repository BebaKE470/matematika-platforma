MathPlatform.registerModule({
  "id": "2-u04-h032",
  "teacher": {
    "placement": "2. ročník · Lineárne nerovnice · 32. hodina: Kontrolná písomná práca",
    "prerequisites": [
      "učivo ZŠ a 1. ročníka: číselná os, nerovnosti, intervaly (zápis ⟨a;b), (−∞;a⟩ …), prienik množín a absolútna hodnota",
      "2. ročník: lineárne rovnice, ekvivalentné úpravy nerovníc (otočenie znamienka pri násobení a delení záporným číslom), nerovnice s neznámou v menovateli, nerovnice s absolútnou hodnotou a sústavy nerovníc (hodiny 24–29)"
    ],
    "planContent": [
      "V poskytnutom tematickom pláne nie je pri tematickom celku „Lineárne nerovnice“ vyplnený samostatný obsahový štandard. Modul preto nevydáva doplnený text za oficiálny obsahový štandard; vychádza z názvu tematického celku a konkrétnej témy hodiny."
    ],
    "planPerformance": [
      "V poskytnutom tematickom pláne nie je pri tematickom celku „Lineárne nerovnice“ vyplnený samostatný výkonový štandard. Ciele nižšie sú ciele tejto vyučovacej hodiny, nie vymyslený oficiálny výkonový štandard."
    ],
    "goals": [
      "zopakovať kľúčové postupy celku: ekvivalentné úpravy a otočenie znamienka, zápis intervalom, absolútna hodnota, neznáma v menovateli, sústava a slovná úloha",
      "overiť sa na krátkych samostatných otázkach v štýle písomky",
      "zistiť, ktoré témy si pred písomkou ešte prejsť"
    ],
    "competencies": [
      "matematická komunikácia",
      "výber správneho postupu",
      "argumentácia a kontrola výsledku",
      "sebahodnotenie pripravenosti"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie spôsobu práce: interpretácia, modelovanie, reprezentácie a zdôvodnenie. Neurčuje poradie učiva."
    ],
    "flow": [
      "2–3 min: čo bude v písomke (typy úloh z celku)",
      "3 min: stručné opakovanie postupu v aplikácii",
      "6–8 min: osem samostatných kontrolných otázok s okamžitou spätnou väzbou",
      "2 min: sebahodnotenie a rozhodnutie, čo si ešte prejsť; potom samostatná písomka na papieri"
    ],
    "diagnostics": [
      "žiak otočí znamienko pri násobení a delení záporným číslom",
      "žiak správne zapíše interval a rozlíši uzavretý a otvorený koniec",
      "žiak rozlíši |x − a| < b (medzi) a |x − a| > b (mimo)",
      "žiak zvládne sústavu (prienik) a slovnú úlohu na nerovnicu"
    ],
    "partialUse": [
      "Modul možno použiť celý (10–15 min), alebo vybrať len otázky k témam, ktoré chcú žiaci zopakovať.",
      "Mobil nenahrádza ručné počítanie, náčrt ani zápis postupu – počíta sa na papieri.",
      "Hodnotenie: sebahodnotenie a formatívna spätná väzba; XP nie sú známka."
    ]
  },
  "student": {
    "title": "Kontrolná písomná práca: opakovanie celku",
    "subtitle": "Téma 32 · Lineárne nerovnice",
    "intro": "Pred písomkou si rýchlo prejdeš postupy celku a vyskúšaš krátke otázky v štýle písomky. Počítaj na papieri a do aplikácie zapisuj výsledok.",
    "estimatedTime": "10–15 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo bude v písomke",
        "html": "<p>Písomka overuje celý tematický celok <strong>Lineárne nerovnice</strong>: úpravy nerovníc, zápis riešenia <strong>intervalom</strong>, nerovnice s <strong>absolútnou hodnotou</strong>, <strong>neznámu v menovateli</strong>, <strong>sústavy</strong> a slovné úlohy. Zapisuj celý postup – body sa dávajú aj za správne kroky.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "pripomenúť si pravidlá úprav nerovníc a zápis intervalu",
          "zopakovať absolútnu hodnotu, menovateľ a sústavy",
          "vyskúšať si krátke otázky v štýle písomky"
        ]
      },
      {
        "id": "method",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Postup v skratke",
        "html": "<ol class=\"steps\"><li>Uprav nerovnicu ekvivalentnými úpravami. Pri násobení a delení <span class=\"hl\">záporným</span> číslom otoč znamienko.</li><li>Pri |x − a| &lt; b píš −b &lt; x − a &lt; b (medzi), pri |x − a| &gt; b píš x − a &lt; −b alebo x − a &gt; b (mimo).</li><li>Pri neznámej v menovateli zisti, kedy je menovateľ nulový, a rozhodni o znamienku zlomku.</li><li>Pri sústave vezmi prienik riešení.</li><li>Výsledok zapíš intervalom a urob skúšku dosadením.</li></ol>\n<div class=\"warning\"><strong>Pozor:</strong> krajný bod patrí do riešenia iba pri „≤“ alebo „≥“. Pri „&lt;“ a „&gt;“ nepatrí. Nekonečno má vždy okrúhlu zátvorku.</div>"
      },
      {
        "id": "c-sign",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "ekvivalentné úpravy",
        "question": "Vyrieš nerovnicu −4x ≥ 12. Ktorý výsledok je správny?",
        "options": [
          "x ≥ −3",
          "x ≤ 3",
          "x ≤ −3",
          "x ≥ 3"
        ],
        "answer": 2,
        "correct": "Správne. Delíme číslom −4, preto sa znamienko otočí: x ≤ −3.",
        "hint": "Pri delení záporným číslom sa znamienko nerovnosti otočí. Skús skúšku x = −5: −4·(−5) = 20 ≥ 12."
      },
      {
        "id": "n-cnt",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "lineárna nerovnica",
        "title": "Kladné celé riešenia",
        "prompt": "Koľko kladných celých čísel vyhovuje nerovnici 2x − 3 < 9?",
        "validate": "exact",
        "answer": 5,
        "success": "2x < 12, teda x < 6. Kladné celé čísla sú 1, 2, 3, 4, 5 – teda 5.",
        "hint": "Najprv vyrieš nerovnicu. Šestka patrí do riešenia?",
        "reveal": "Správne je 5: x < 6, čísla 1 až 5."
      },
      {
        "id": "c-iv",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "zápis intervalu",
        "question": "Ktorý interval je riešením nerovnice x/3 + 1 ≥ 2?",
        "options": [
          "(3;∞)",
          "⟨3;∞)",
          "(−∞;3⟩",
          "⟨1;∞)"
        ],
        "answer": 1,
        "correct": "Správne. x/3 ≥ 1, teda x ≥ 3. Trojka patrí (≥), preto ⟨3;∞).",
        "hint": "Odpočítaj 1 a vynásob 3. Patrí krajný bod do riešenia pri „≥“?"
      },
      {
        "id": "c-abs",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "absolútna hodnota",
        "question": "Ktorý interval je riešením nerovnice |x − 3| < 2?",
        "options": [
          "(1;5)",
          "(−∞;1) ∪ (5;∞)",
          "(−1;5)",
          "⟨1;5⟩"
        ],
        "answer": 0,
        "correct": "Správne. −2 < x − 3 < 2, teda 1 < x < 5. Ostrá nerovnosť – krajné body nepatria.",
        "hint": "Čísla vzdialené od 3 menej ako 2 ležia medzi 3 − 2 a 3 + 2."
      },
      {
        "id": "n-abs",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "absolútna hodnota",
        "title": "Celé riešenia",
        "prompt": "Koľko celých čísel vyhovuje nerovnici |2x + 1| ≤ 5?",
        "validate": "exact",
        "answer": 6,
        "success": "−5 ≤ 2x + 1 ≤ 5 → −6 ≤ 2x ≤ 4 → −3 ≤ x ≤ 2. Celé čísla: −3, −2, −1, 0, 1, 2 – teda 6.",
        "hint": "Rozpíš na −5 ≤ 2x + 1 ≤ 5 a vyrieš. Krajné body patria (≤).",
        "reveal": "Správne je 6: x ∈ ⟨−3;2⟩, čísla −3 až 2."
      },
      {
        "id": "c-sys",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "sústava nerovníc",
        "question": "Ktorý interval je riešením sústavy x + 1 > 4 a 2x ≤ 12?",
        "options": [
          "⟨3;6)",
          "(3;∞)",
          "(−∞;3) ∪ ⟨6;∞)",
          "(3;6⟩"
        ],
        "answer": 3,
        "correct": "Správne. x > 3 a x ≤ 6. Prienik je (3;6⟩.",
        "hint": "Vyrieš každú nerovnicu zvlášť. Ktorý krajný bod patrí a ktorý nie?"
      },
      {
        "id": "c-den",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "neznáma v menovateli",
        "question": "Pre ktoré x je zlomok 3/(x + 2) kladný?",
        "options": [
          "(−∞;−2)",
          "(−2;∞)",
          "⟨−2;∞)",
          "(2;∞)"
        ],
        "answer": 1,
        "correct": "Správne. Čitateľ je kladný, zlomok je kladný práve vtedy, keď x + 2 > 0, teda x > −2. Číslo −2 nepatrí (nulový menovateľ).",
        "hint": "Kladné číslo delené kladným je kladné. Kedy je menovateľ kladný? Patrí do riešenia hodnota, pri ktorej je menovateľ 0?"
      },
      {
        "id": "n-word",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "slovná úloha",
        "title": "Stiahnuté skladby",
        "prompt": "Predplatné stojí 4 € a každá stiahnutá skladba 0,50 €. Koľko skladieb môžeš najviac stiahnuť, ak chceš minúť najviac 12 €?",
        "validate": "exact",
        "answer": 16,
        "success": "4 + 0,5x ≤ 12 → 0,5x ≤ 8 → x ≤ 16. Najviac 16 skladieb.",
        "hint": "Zapíš 4 + 0,5x ≤ 12 a vyrieš.",
        "reveal": "Správne je 16: 0,5x ≤ 8."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Som pripravený/á na písomku?",
        "skills": [
          "ekvivalentné úpravy a otočenie znamienka",
          "zápis riešenia intervalom",
          "absolútna hodnota v nerovnici",
          "nerovnica s neznámou v menovateli",
          "sústava nerovníc",
          "slovná úloha"
        ],
        "prompt": "Označ, ako dobre to zvládaš. Nie je to známka; porovnaj svoj pocit s výsledkom otázok. Čo máš 🔴 alebo 🟡, si pred písomkou ešte raz prejdi."
      }
    ]
  }
});
