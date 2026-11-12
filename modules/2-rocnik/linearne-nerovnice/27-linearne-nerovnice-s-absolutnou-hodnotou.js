MathPlatform.registerModule({
  "id": "2-u04-h027",
  "teacher": {
    "placement": "2. ročník · Lineárne nerovnice · 27. hodina: Lineárne nerovnice s absolútnou hodnotou",
    "planContent": [
      "V poskytnutom tematickom pláne nie je pri tematickom celku „Lineárne nerovnice“ vyplnený samostatný obsahový štandard. Modul preto nevydáva doplnený text za oficiálny obsahový štandard; vychádza z názvu tematického celku a konkrétnej témy hodiny."
    ],
    "planPerformance": [
      "V poskytnutom tematickom pláne nie je pri tematickom celku „Lineárne nerovnice“ vyplnený samostatný výkonový štandard. Ciele nižšie sú ciele tejto vyučovacej hodiny, nie vymyslený oficiálny výkonový štandard."
    ],
    "prerequisites": [
      "1. ročník: absolútna hodnota ako vzdialenosť od nuly, intervaly a ich zápis, prienik a zjednotenie intervalov",
      "2. ročník: lineárne rovnice vrátane rovníc s absolútnou hodnotou, ekvivalentné úpravy nerovníc (otočenie znaku pri zápornom čísle, h024)",
      "riešenie nerovníc a zápis riešenia intervalom z predchádzajúcich hodín tohto celku (h024–h026)"
    ],
    "goals": [
      "Žiak číta |x − a| ako vzdialenosť x od a a z obrázka na číselnej osi odvodí riešenie |x − a| < c (okolie bodu) a |x − a| > c (čísla mimo okolia).",
      "Žiak prevedie |ax + b| < c na dvojitú nerovnosť −c < ax + b < c (prienik) a |ax + b| > c na dve nerovnice spojené „alebo“ (zjednotenie) a výsledok zapíše intervalmi.",
      "Žiak pri násobení a delení záporným číslom správne otočí obe nerovnosti dvojitej nerovnosti.",
      "Žiak rozpozná prípady c < 0 a c = 0 (∅, jediný bod, ℝ) bez zbytočného rozpisovania.",
      "Žiak vie vyriešiť nerovnicu s dvoma absolútnymi hodnotami rozborom podľa kritických bodov.",
      "Kritérium úspechu: žiak v digitálnej časti správne priradí nerovniciam intervaly (aj prípady c ≤ 0) a v zbierke samostatne vyrieši aspoň úlohy úrovne základ."
    ],
    "competencies": [
      "presný zápis riešenia intervalmi a práca s ostrými a neostrými krajnými bodmi",
      "prechod medzi vzdialenosťou na číselnej osi, algebraickým zápisom a intervalom",
      "kontrola riešenia dosadením hraničných a vnútorných hodnôt",
      "argumentácia: prečo je výsledkom prienik alebo zjednotenie"
    ],
    "enrichment": [
      "Modelovanie tolerancií a prípustných odchýlok: |d − d₀| ≤ t (priemer súčiastky, teplota v chladiarni) — prepojenie na odborné predmety a fyziku.",
      "Maturitné využitie: znázornenie množiny riešení na číselnej osi, interpretácia výsledku v kontexte, kontrola podmienok."
    ],
    "flow": [
      "0–5 min: pripomenutie |x| ako vzdialenosti a rovnice |x − 3| = 2; otázka „Ktoré čísla sú od 3 vzdialené menej ako 2?“",
      "5–15 min: výklad na číselnej osi: |x − 3| < 2 a |x − 3| > 2; pravidlá −c < u < c a u < −c alebo u > c; príklady 1 až 3 s otáčaním znakov",
      "15–22 min: prípady c ≤ 0 a rozbor podľa kritických bodov (príklady 4 a 5), práca vo dvojiciach",
      "22–40 min: platforma (vyhodnotenie intervalov, počty celých riešení, hľadanie chyby), potom samostatná úloha na papieri",
      "40–45 min: zhrnutie, spoločný rozbor najčastejších chýb podľa živých výsledkov, zbierka ako domáca úloha"
    ],
    "diagnostics": [
      "píše pri |u| < c zjednotenie namiesto dvojitej nerovnosti (alebo naopak)",
      "zabudne otočiť znaky pri delení záporným číslom, napr. v |5 − 2x| < 3",
      "zamieňa ostré a neostré krajné body (zátvorky ( ) a ⟨ ⟩)",
      "číta |x + 2| ako vzdialenosť od +2 namiesto od −2",
      "pri zápornej pravej strane rozpisuje −c < u < c, namiesto aby rozhodol ∅ alebo ℝ"
    ],
    "partialUse": [
      "Pri skrátenej hodine vynechať príklad 5 a otázky o dvoch absolútnych hodnotách (rozbor podľa kritických bodov) a nechať jadro: vzdialenosť, dve pravidlá, prípady c ≤ 0.",
      "Mobil nenahrádza ručné úpravy: žiak počíta v zošite a do aplikácie prepisuje výsledok alebo vyberá správny interval.",
      "Zbierka úloh je určená na domácu prácu alebo na diferenciáciu podľa úrovne (základ, rozšírenie, bonus).",
      "ŠVVP: ponechať viditeľný obrázok číselnej osi, zadať menej úloh bez zníženia jadra cieľa.",
      "Hodnotenie: priebežná slovná spätná väzba a sebahodnotenie; XP nie sú známka."
    ]
  },
  "student": {
    "title": "Lineárne nerovnice s absolútnou hodnotou",
    "subtitle": "Téma 27 · Lineárne nerovnice",
    "intro": "Naučíš sa riešiť nerovnice |ax + b| < c a |ax + b| > c pomocou vzdialenosti na číselnej osi, zapisovať výsledok intervalmi a rozhodovať aj prípady, keď je c záporné. Počítaj v zošite, do aplikácie vyberaj alebo prepisuj výsledky.",
    "estimatedTime": "30–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Čo už vieme",
        "html": "<p>Z 1. ročníka poznáš <strong>absolútnu hodnotu</strong>: |x| je vzdialenosť čísla x od nuly na číselnej osi, preto |3| = 3 aj |−3| = 3. Vieš zapisovať <strong>intervaly</strong> a robiť ich <strong>prienik</strong> a <strong>zjednotenie</strong>.</p>\n<p>V tomto ročníku si riešil/a aj <strong>rovnice</strong> s absolútnou hodnotou. Napríklad |x − 3| = 2 znamená x − 3 = 2 alebo x − 3 = −2, teda x = 5 alebo x = 1.</p>\n<p>Dnes tú istú myšlienku použijeme pre <strong>nerovnice</strong>. Namiesto „presne 2 od trojky“ budeme hľadať čísla, ktoré sú od trojky <strong>menej</strong> alebo <strong>viac</strong> ako 2 ďaleko.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "čítať |x − a| ako vzdialenosť na číselnej osi",
          "riešiť nerovnice |ax + b| < c a |ax + b| > c a zapísať riešenie intervalom",
          "rozhodnúť prípady, keď je c záporné alebo nula",
          "vyriešiť nerovnicu s dvoma absolútnymi hodnotami rozborom podľa kritických bodov"
        ]
      },
      {
        "id": "distance",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Absolútna hodnota ako vzdialenosť",
        "html": "<p>Výraz <strong>|x − a|</strong> je vzdialenosť čísla x od čísla a. Napríklad |x − 3| je vzdialenosť x od trojky.</p>\n<p>Nerovnica <strong>|x − 3| &lt; 2</strong> hovorí: „x je od trojky vzdialené <span class=\"hl\">menej</span> ako 2“. To sú všetky čísla v okolí trojky, od 3 − 2 = 1 po 3 + 2 = 5. Krajné body 1 a 5 sú od trojky vzdialené presne 2, takže do riešenia nepatria.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 760 116\" role=\"img\" aria-label=\"Číselná os: čísla vzdialené od 3 menej ako 2 tvoria interval od 1 po 5\"><text x=\"36\" y=\"31\" font-family=\"system-ui\" font-size=\"18\" fill=\"currentColor\">|x − 3| &lt; 2</text><line x1=\"160\" y1=\"48\" x2=\"600\" y2=\"48\" stroke=\"currentColor\" stroke-width=\"8\"/><circle cx=\"160\" cy=\"48\" r=\"9\" fill=\"white\" stroke=\"currentColor\" stroke-width=\"3\"/><circle cx=\"600\" cy=\"48\" r=\"9\" fill=\"white\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"30\" y1=\"78\" x2=\"730\" y2=\"78\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"50\" y1=\"72\" x2=\"50\" y2=\"84\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"50\" y=\"106\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">0</text><line x1=\"160\" y1=\"72\" x2=\"160\" y2=\"84\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"106\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">1</text><line x1=\"270\" y1=\"72\" x2=\"270\" y2=\"84\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"270\" y=\"106\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">2</text><line x1=\"380\" y1=\"72\" x2=\"380\" y2=\"84\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"380\" y=\"106\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">3</text><line x1=\"490\" y1=\"72\" x2=\"490\" y2=\"84\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"490\" y=\"106\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">4</text><line x1=\"600\" y1=\"72\" x2=\"600\" y2=\"84\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"600\" y=\"106\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">5</text><line x1=\"710\" y1=\"72\" x2=\"710\" y2=\"84\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"710\" y=\"106\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">6</text></svg></div><p>Nerovnica <strong>|x − 3| &gt; 2</strong> hovorí: „x je od trojky vzdialené <span class=\"hl\">viac</span> ako 2“. To sú čísla naľavo od 1 a napravo od 5.</p><div class=\"logic-visual\"><svg viewBox=\"0 0 760 116\" role=\"img\" aria-label=\"Číselná os: čísla vzdialené od 3 viac ako 2 ležia vľavo od 1 a vpravo od 5\"><text x=\"36\" y=\"31\" font-family=\"system-ui\" font-size=\"18\" fill=\"currentColor\">|x − 3| &gt; 2</text><line x1=\"30\" y1=\"48\" x2=\"160\" y2=\"48\" stroke=\"currentColor\" stroke-width=\"8\"/><circle cx=\"160\" cy=\"48\" r=\"9\" fill=\"white\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"600\" y1=\"48\" x2=\"730\" y2=\"48\" stroke=\"currentColor\" stroke-width=\"8\"/><circle cx=\"600\" cy=\"48\" r=\"9\" fill=\"white\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"30\" y1=\"78\" x2=\"730\" y2=\"78\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"50\" y1=\"72\" x2=\"50\" y2=\"84\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"50\" y=\"106\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">0</text><line x1=\"160\" y1=\"72\" x2=\"160\" y2=\"84\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"106\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">1</text><line x1=\"270\" y1=\"72\" x2=\"270\" y2=\"84\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"270\" y=\"106\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">2</text><line x1=\"380\" y1=\"72\" x2=\"380\" y2=\"84\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"380\" y=\"106\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">3</text><line x1=\"490\" y1=\"72\" x2=\"490\" y2=\"84\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"490\" y=\"106\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">4</text><line x1=\"600\" y1=\"72\" x2=\"600\" y2=\"84\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"600\" y=\"106\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">5</text><line x1=\"710\" y1=\"72\" x2=\"710\" y2=\"84\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"710\" y=\"106\" font-family=\"system-ui\" font-size=\"17\" fill=\"currentColor\" text-anchor=\"middle\">6</text></svg></div>",
        "remember": "Menšia vzdialenosť = okolie jedného bodu (jeden interval). Väčšia vzdialenosť = čísla „von“ z okolia (dva intervaly)."
      },
      {
        "id": "rules",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Dve pravidlá pre |u| a kladné c",
        "html": "<p>Obrázok vieme zapísať pravidlom. Nech <strong>u</strong> je ľubovoľný výraz s x (napríklad 2x − 1) a <strong>c</strong> kladné číslo.</p>\n<div class=\"formula\"><span class=\"mini-label\">MENŠIE AKO</span>|u| &lt; c ⇔ −c &lt; u &lt; c<span class=\"formula-note\">Obe podmienky platia naraz, preto ide o prienik: výsledkom je jeden interval.</span></div>\n<div class=\"formula\"><span class=\"mini-label\">VÄČŠIE AKO</span>|u| &gt; c ⇔ u &lt; −c alebo u &gt; c<span class=\"formula-note\">Stačí jedna z podmienok, preto ide o zjednotenie: výsledkom sú dva intervaly.</span></div>\n<p>Pre ≤ a ≥ platí to isté, len krajné body patria do riešenia (zátvorka ⟨ alebo ⟩).</p>\n<div class=\"warning\"><strong>Pozor:</strong> |x| &lt; 4 nie je „x &lt; −4 alebo x &gt; 4“. Podmienky „x &lt; 4 alebo x &gt; −4“ spĺňa každé číslo, takže by sa z nerovnice stala pravda pre všetky x. Pri „menšie ako“ vždy píšeme <strong>dvojitú nerovnosť</strong>.</div>",
        "remember": "|u| &lt; c → −c &lt; u &lt; c (jeden interval). |u| &gt; c → u &lt; −c alebo u &gt; c (zjednotenie dvoch intervalov)."
      },
      {
        "id": "ex-basic",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Vzorové príklady: |u| < c a |u| ≥ c",
        "html": "<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 1</span>\n<p>|2x − 1| &lt; 5</p>\n<p>−5 &lt; 2x − 1 &lt; 5 &nbsp;&nbsp;/ + 1</p>\n<p>−4 &lt; 2x &lt; 6 &nbsp;&nbsp;/ : 2</p>\n<p>−2 &lt; x &lt; 3, teda <strong>x ∈ (−2; 3)</strong></p>\n<p>Skúška: x = 0 dá |−1| = 1 &lt; 5 (platí); x = 3 dá |5| = 5, to nie je menšie ako 5, preto 3 nepatrí.</p></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 2</span>\n<p>|2x + 3| ≥ 7</p>\n<p>2x + 3 ≤ −7 &nbsp;alebo&nbsp; 2x + 3 ≥ 7 &nbsp;&nbsp;/ − 3</p>\n<p>2x ≤ −10 &nbsp;alebo&nbsp; 2x ≥ 4 &nbsp;&nbsp;/ : 2</p>\n<p>x ≤ −5 alebo x ≥ 2, teda <strong>x ∈ (−∞; −5⟩ ∪ ⟨2; ∞)</strong></p></div>\n<p>Všimni si: v príklade 1 sa upravuje <strong>všetko naraz</strong> (tri časti dvojitej nerovnosti), v príklade 2 sa riešia <strong>dve samostatné nerovnice</strong> a ich riešenia sa zjednotia.</p>"
      },
      {
        "id": "ex-neg",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Keď je pred x znamienko mínus",
        "html": "<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 3</span>\n<p>|4 − x| ≤ 1</p>\n<p>−1 ≤ 4 − x ≤ 1 &nbsp;&nbsp;/ − 4</p>\n<p>−5 ≤ −x ≤ −3 &nbsp;&nbsp;/ · (−1)</p>\n<p>5 ≥ x ≥ 3, teda 3 ≤ x ≤ 5, <strong>x ∈ ⟨3; 5⟩</strong></p></div>\n<div class=\"warning\"><strong>Pozor:</strong> pri násobení alebo delení záporným číslom sa otočia <strong>oba</strong> znaky nerovností a poradie čísel sa prehodí. Výsledok vždy prepíš tak, aby menšie číslo bolo naľavo: 5 ≥ x ≥ 3 je to isté ako 3 ≤ x ≤ 5.</div>\n<p>Iná cesta: |4 − x| = |x − 4| (vzdialenosť sa nezmení, keď čísla prehodíme), takže stačilo riešiť |x − 4| ≤ 1, teda čísla do vzdialenosti 1 od štvorky: ⟨3; 5⟩.</p>"
      },
      {
        "id": "c-nonpos",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Keď je c záporné alebo nula",
        "html": "<p>Absolútna hodnota nie je nikdy záporná: |u| ≥ 0 pre každé u. Preto vieme niektoré nerovnice vyriešiť <strong>bez počítania</strong>.</p>\n<div class=\"term-list\">\n<div class=\"term-item no-symbol\"><div class=\"term-name\">|u| &lt; c, kde c ≤ 0</div><p class=\"term-rule\">Nemá riešenie, x ∈ ∅. Číslo, ktoré je aspoň 0, nemôže byť menšie ako nula ani ako záporné číslo. Príklad: |x − 4| &lt; −1.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">|u| ≤ 0</div><p class=\"term-rule\">Platí iba pre u = 0 (jediný bod). Príklad: |x − 4| ≤ 0 má riešenie x = 4.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">|u| &gt; c alebo |u| ≥ c, kde c &lt; 0</div><p class=\"term-rule\">Platí pre každé x, riešením je ℝ. Príklad: |x − 4| &gt; −1.</p></div>\n<div class=\"term-item no-symbol\"><div class=\"term-name\">|u| &gt; 0</div><p class=\"term-rule\">Platí všade okrem u = 0. Príklad: |x − 4| &gt; 0 dá (−∞; 4) ∪ (4; ∞).</p></div>\n</div>\n<div class=\"warning\"><strong>Pozor:</strong> pri |u| &lt; c s c ≤ 0 nepíš −c &lt; u &lt; c. Pre c = −3 by to znamenalo 3 &lt; u &lt; −3, čo je nezmysel. Najprv sa pozri na znamienko pravej strany.</div>",
        "remember": "Pravú stranu skontroluj ako prvú: ak je záporná alebo nula, odpoveď je ∅, jeden bod alebo ℝ."
      },
      {
        "id": "crit",
        "type": "explain",
        "phase": "NOVÝ POJEM / PRAVIDLO",
        "title": "Dve absolútne hodnoty: rozbor podľa kritických bodov",
        "html": "<p>Keď je v nerovnici <strong>súčet dvoch absolútnych hodnôt</strong>, pravidlo −c &lt; u &lt; c nestačí. Použijeme rozbor:</p>\n<ol class=\"steps\">\n<li>Nájdi <strong>kritické body</strong>: čísla, pri ktorých je výraz v absolútnej hodnote rovný nule.</li>\n<li>Kritické body rozdelia číselnú os na intervaly.</li>\n<li>V každom intervale zisti znamienko výrazov a absolútne hodnoty odstráň: výraz ≥ 0 zostane, záporný výraz dostane mínus.</li>\n<li>V každom intervale vyrieš nerovnicu a vezmi jej <strong>prienik</strong> s tým intervalom.</li>\n<li>Riešenia z jednotlivých intervalov <strong>zjednoť</strong>.</li>\n</ol>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 4 · OVERENIE METÓDY</span>\n<p>|x − 2| &lt; 3, kritický bod je 2.</p>\n<p>x ≥ 2: |x − 2| = x − 2, teda x − 2 &lt; 3, x &lt; 5. Spolu ⟨2; 5).</p>\n<p>x &lt; 2: |x − 2| = −(x − 2) = 2 − x, teda 2 − x &lt; 3, x &gt; −1. Spolu (−1; 2).</p>\n<p>Zjednotenie: <strong>(−1; 5)</strong>, rovnaký výsledok ako z pravidla −3 &lt; x − 2 &lt; 3.</p></div>\n<div class=\"example\"><span class=\"mini-label\">PRÍKLAD 5 · DVE ABSOLÚTNE HODNOTY</span>\n<p>|x − 1| + |x + 2| &lt; 5, kritické body sú 1 a −2.</p>\n<p>x &lt; −2: (1 − x) + (−x − 2) = −2x − 1 &lt; 5, x &gt; −3. Spolu (−3; −2).</p>\n<p>−2 ≤ x &lt; 1: (1 − x) + (x + 2) = 3 &lt; 5, platí vždy. Spolu ⟨−2; 1).</p>\n<p>x ≥ 1: (x − 1) + (x + 2) = 2x + 1 &lt; 5, x &lt; 2. Spolu ⟨1; 2).</p>\n<p>Zjednotenie: <strong>x ∈ (−3; 2)</strong>.</p></div>\n<p>Geometricky: |x − 1| + |x + 2| je súčet vzdialeností x od čísel 1 a −2. Medzi nimi (vzdialených 3) je súčet stále 3, preto tam nerovnica platí vždy.</p>"
      },
      {
        "id": "c-dist",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "abs. hodnota v nerovnici",
        "question": "Ktorá nerovnica popisuje všetky čísla x, ktoré sú od čísla −1 vzdialené najviac 4?",
        "options": [
          "|x − 1| ≤ 4",
          "|x + 1| ≥ 4",
          "|x − 4| ≤ 1",
          "|x + 1| ≤ 4"
        ],
        "answer": 3,
        "correct": "|x + 1| = |x − (−1)| je vzdialenosť x od −1. „Najviac 4“ znamená ≤ 4. Riešením je ⟨−5; 3⟩.",
        "hint": "Vzdialenosť x od čísla a je |x − a|. Ako zapíšeš „x − (−1)“ bez dvojitého mínusu?"
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "abs. hodnota v nerovnici",
        "question": "Riešením nerovnice |x| < 4 je množina:",
        "options": [
          "(−∞; −4) ∪ (4; ∞)",
          "(−∞; 4)",
          "(−4; 4)",
          "⟨−4; 4⟩"
        ],
        "answer": 2,
        "correct": "Čísla s absolútnou hodnotou menšou ako 4 ležia medzi −4 a 4, krajné body nepatria.",
        "hint": "Pri „menšie ako“ ide o čísla blízko nuly. Patria do riešenia aj čísla −4 a 4?"
      },
      {
        "id": "c2",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "abs. hodnota v nerovnici",
        "question": "Riešením nerovnice |x| ≥ 3 je množina:",
        "options": [
          "⟨−3; 3⟩",
          "(−∞; −3⟩ ∪ ⟨3; ∞)",
          "⟨3; ∞)",
          "(−∞; −3) ∪ (3; ∞)"
        ],
        "answer": 1,
        "correct": "Čísla vzdialené od nuly aspoň 3 sú x ≤ −3 alebo x ≥ 3. Znak ≥ zahŕňa aj krajné body.",
        "hint": "Pri „väčšie alebo rovné“ ide o čísla „von“ z okolia nuly. Patria krajné body do riešenia?"
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "abs. hodnota v nerovnici",
        "question": "Riešením nerovnice |x − 5| < 2 je množina:",
        "options": [
          "(3; 7)",
          "(−∞; 3) ∪ (7; ∞)",
          "(−7; −3)",
          "(−3; 7)"
        ],
        "answer": 0,
        "correct": "|x − 5| &lt; 2 znamená 5 − 2 &lt; x &lt; 5 + 2, teda 3 &lt; x &lt; 7.",
        "hint": "Hľadáš čísla, ktoré sú od päťky vzdialené menej ako 2. Od akého čísla po aké?"
      },
      {
        "id": "c4",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "abs. hodnota v nerovnici",
        "question": "Riešením nerovnice |x + 2| ≤ 5 je množina:",
        "options": [
          "⟨−3; 7⟩",
          "(−7; 3)",
          "⟨−7; 3⟩",
          "⟨−5; 5⟩"
        ],
        "answer": 2,
        "correct": "Z −5 ≤ x + 2 ≤ 5 po odčítaní 2 dostaneme −7 ≤ x ≤ 3. Pozor na to, že |x + 2| je vzdialenosť od čísla −2, nie od +2.",
        "hint": "Stred okolia nie je 2. Výraz x + 2 sa rovná nule pre x = −2."
      },
      {
        "id": "c5",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "abs. hodnota v nerovnici",
        "question": "Riešením nerovnice |x − 4| > 1 je množina:",
        "options": [
          "(3; 5)",
          "(−∞; 3) ∪ (5; ∞)",
          "(−∞; 5) ∪ (3; ∞)",
          "(−∞; −5) ∪ (−3; ∞)"
        ],
        "answer": 1,
        "correct": "Čísla vzdialené od 4 viac ako 1 ležia naľavo od 3 alebo napravo od 5. Obe časti sa zjednocujú.",
        "hint": "Z |x − 4| &gt; 1 plynie x − 4 &lt; −1 alebo x − 4 &gt; 1. Čo z toho dá pre x?"
      },
      {
        "id": "c6",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "abs. hodnota v nerovnici",
        "question": "Riešením nerovnice |2x − 1| < 5 je množina:",
        "options": [
          "(−3; 2)",
          "(−2; 3)",
          "(−∞; −2) ∪ (3; ∞)",
          "(−2; 3⟩"
        ],
        "answer": 1,
        "correct": "−5 &lt; 2x − 1 &lt; 5 dá −4 &lt; 2x &lt; 6, teda −2 &lt; x &lt; 3. Delením 2 sa upravujú všetky tri časti.",
        "hint": "Najprv −5 &lt; 2x − 1 &lt; 5. Pripočítaj 1 ku všetkým trom častiam a potom ich vyde 2."
      },
      {
        "id": "c7",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "abs. hodnota v nerovnici",
        "question": "Riešením nerovnice |5 − 2x| < 3 je množina:",
        "options": [
          "(−∞; 1) ∪ (4; ∞)",
          "(−4; −1)",
          "(1; 4)",
          "(−1; 4)"
        ],
        "answer": 2,
        "correct": "−3 &lt; 5 − 2x &lt; 3 dá −8 &lt; −2x &lt; −2. Po delení číslom −2 sa znaky otočia a dostaneme 4 &gt; x &gt; 1.",
        "hint": "Po odčítaní 5 je v strede −2x. Čo sa stane so znakmi pri delení záporným číslom?"
      },
      {
        "id": "n-count",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "počet riešení",
        "title": "Koľko celých čísel?",
        "prompt": "Koľko celých čísel x spĺňa nerovnicu |x − 2| < 3?",
        "validate": "exact",
        "answer": 5,
        "success": "Riešenie je (−1; 5), celé čísla sú 0, 1, 2, 3, 4, teda päť.",
        "hint": "Najprv zapíš riešenie ako interval. Krajné body nepatria do riešenia.",
        "reveal": "Správne je 5: z intervalu (−1; 5) sú to čísla 0, 1, 2, 3 a 4."
      },
      {
        "id": "n-min",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "najmenšie riešenie",
        "title": "Najmenšie celé riešenie",
        "prompt": "Aké je najmenšie celé číslo x, ktoré spĺňa nerovnicu |x + 4| ≤ 6?",
        "validate": "exact",
        "answer": -10,
        "success": "Riešenie je ⟨−10; 2⟩. Krajný bod −10 patrí do riešenia (≤), preto je najmenším celým riešením.",
        "hint": "Z −6 ≤ x + 4 ≤ 6 odčítaj 4 od všetkých troch častí. Patrí ľavý krajný bod do riešenia?",
        "reveal": "Správne je −10: −6 ≤ x + 4 dá x ≥ −10 a pri x = −10 vyjde |−6| = 6 ≤ 6."
      },
      {
        "id": "n-pos",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "najmenšie kladné riešenie",
        "title": "Najmenšie kladné celé riešenie",
        "prompt": "Aké je najmenšie kladné celé číslo x, ktoré spĺňa nerovnicu |x − 2| ≥ 5?",
        "validate": "exact",
        "answer": 7,
        "success": "Riešenie je (−∞; −3⟩ ∪ ⟨7; ∞). Kladné celé riešenia začínajú až od 7, lebo ľavá časť obsahuje iba nekladné čísla.",
        "hint": "Najprv napíš riešenie ako zjednotenie dvoch intervalov a z neho vyber kladné čísla.",
        "reveal": "Správne je 7: pre x = 7 vyjde |5| = 5 ≥ 5, pre x = 6 iba |4| = 4."
      },
      {
        "id": "n-len",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "dĺžka intervalu",
        "title": "Dĺžka intervalu riešení",
        "prompt": "Riešením nerovnice |3x − 6| < 9 je interval. Aká je jeho dĺžka (rozdiel pravého a ľavého krajného bodu)?",
        "validate": "exact",
        "answer": 6,
        "success": "Z −9 &lt; 3x − 6 &lt; 9 dostaneme −3 &lt; 3x &lt; 15, teda −1 &lt; x &lt; 5. Dĺžka je 5 − (−1) = 6.",
        "hint": "Vyrieš nerovnicu dvojitou nerovnosťou a od pravého krajného bodu odčítaj ľavý.",
        "reveal": "Správne je 6: riešením je (−1; 5) a 5 − (−1) = 6."
      },
      {
        "id": "c-crit",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "kritické body",
        "question": "Pri riešení nerovnice |x − 1| + |x + 2| < 5 rozborom podľa kritických bodov sú kritické body čísla:",
        "options": [
          "1 a 2",
          "−1 a 2",
          "−1 a −2",
          "1 a −2"
        ],
        "answer": 3,
        "correct": "Výraz x − 1 je nula pre x = 1 a výraz x + 2 je nula pre x = −2. Číselná os sa delí na tri intervaly.",
        "hint": "Kritický bod je číslo, pre ktoré je výraz v absolútnej hodnote rovný nule. Vyrieš x − 1 = 0 a x + 2 = 0."
      },
      {
        "id": "c-crit2",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "rozbor podľa kritických bodov",
        "question": "Nerovnica |x − 1| + |x + 2| < 5 má riešenie:",
        "options": [
          "(−2; 1)",
          "(−3; 2)",
          "(−3; 1)",
          "(−2; 2)"
        ],
        "answer": 1,
        "correct": "Naľavo od −2 vyjde −2x − 1 &lt; 5, teda x &gt; −3, medzi −2 a 1 platí 3 &lt; 5 vždy, napravo od 1 vyjde 2x + 1 &lt; 5, teda x &lt; 2. Spolu (−3; 2).",
        "hint": "Medzi kritickými bodmi je súčet vzdialeností stále 3. Ako ďaleko za kritické body môže x zájsť, aby súčet nepresiahol 5?"
      },
      {
        "id": "sort-sol",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "prípady c ≤ 0",
        "title": "Má nerovnica riešenie?",
        "question": "Rozhodni o každej nerovnici, či má aspoň jedno reálne riešenie.",
        "labels": [
          "Má riešenie",
          "Nemá riešenie (∅)"
        ],
        "items": [
          {
            "text": "|x − 2| < −1",
            "answer": false,
            "why": "Absolútna hodnota je aspoň 0, nemôže byť menšia ako −1."
          },
          {
            "text": "|x + 4| > −3",
            "answer": true,
            "why": "Absolútna hodnota je vždy aspoň 0, a to je väčšie ako −3. Platí pre všetky x."
          },
          {
            "text": "|2x − 6| ≤ 0",
            "answer": true,
            "why": "Platí práve vtedy, keď 2x − 6 = 0, teda pre x = 3. Existuje jediné riešenie."
          },
          {
            "text": "|x + 1| < 0",
            "answer": false,
            "why": "Hodnota |x + 1| je aspoň 0, takže nemôže byť menšia ako 0."
          },
          {
            "text": "|5 − x| > 0",
            "answer": true,
            "why": "Platí pre každé x okrem x = 5, kde je hodnota presne 0."
          },
          {
            "text": "|3x| < −0,5",
            "answer": false,
            "why": "Pravá strana je záporná, absolútna hodnota nie je nikdy záporná."
          }
        ]
      },
      {
        "id": "match-sol",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "abs. hodnota v nerovnici",
        "title": "Priraď nerovnici jej riešenie",
        "labels": [
          "(−1; 5)",
          "(−∞; −1) ∪ (5; ∞)",
          "⟨−1; 5⟩",
          "(−∞; −1⟩ ∪ ⟨5; ∞)"
        ],
        "items": [
          {
            "text": "|x − 2| < 3",
            "answer": "(−1; 5)"
          },
          {
            "text": "|x − 2| > 3",
            "answer": "(−∞; −1) ∪ (5; ∞)"
          },
          {
            "text": "|x − 2| ≤ 3",
            "answer": "⟨−1; 5⟩"
          },
          {
            "text": "|x − 2| ≥ 3",
            "answer": "(−∞; −1⟩ ∪ ⟨5; ∞)"
          }
        ]
      },
      {
        "id": "match-type",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "prienik alebo zjednotenie",
        "title": "Prienik, zjednotenie alebo bez počítania?",
        "labels": [
          "Dvojitá nerovnosť (prienik)",
          "Dve nerovnice „alebo“ (zjednotenie)",
          "Nemá riešenie",
          "Platí pre všetky x"
        ],
        "items": [
          {
            "text": "|x + 1| ≤ 4",
            "answer": "Dvojitá nerovnosť (prienik)"
          },
          {
            "text": "|x + 1| > 4",
            "answer": "Dve nerovnice „alebo“ (zjednotenie)"
          },
          {
            "text": "|x + 1| < −4",
            "answer": "Nemá riešenie"
          },
          {
            "text": "|x + 1| > −4",
            "answer": "Platí pre všetky x"
          },
          {
            "text": "|2x − 3| ≥ 5",
            "answer": "Dve nerovnice „alebo“ (zjednotenie)"
          },
          {
            "text": "|2x − 3| < 5",
            "answer": "Dvojitá nerovnosť (prienik)"
          }
        ]
      },
      {
        "id": "hunt1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak riešil |x − 1| < 4 takto: „x − 1 < 4 alebo x − 1 > −4, teda x < 5 alebo x > −3, riešenie je (−∞; 5) ∪ (−3; ∞).“ V čom je chyba?",
        "options": [
          "Mal vynásobiť obe strany číslom −1.",
          "Krajné body 5 a −3 mali patriť do riešenia.",
          "Pri „menšie ako“ musia platiť obe podmienky naraz (prienik), nie jedna z nich. Správne je −4 < x − 1 < 4, teda (−3; 5).",
          "Správne riešenie je (−∞; −3) ∪ (5; ∞)."
        ],
        "answer": 2,
        "correct": "Presne. Pri |u| &lt; c ide o jednu dvojitú nerovnosť. Zjednotenie (−∞; 5) ∪ (−3; ∞) je celé ℝ, napríklad aj x = 100 by „vyhovovalo“, ale |100 − 1| = 99 nie je menšie ako 4.",
        "hint": "Skús dosadiť veľké číslo, napríklad x = 100, do pôvodnej nerovnice aj do žiakovho výsledku."
      },
      {
        "id": "hunt2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak riešil |2 − x| < 6 takto: „−6 < 2 − x < 6, odčítam 2: −8 < −x < 4, vydelím −1 a dostanem −8 < x < 4, riešenie je (−8; 4).“ V čom je chyba?",
        "options": [
          "Pri delení číslom −1 sa mali otočiť znaky: správne je 8 > x > −4, teda (−4; 8).",
          "Nerovnicu |2 − x| < 6 nie je možné riešiť dvojitou nerovnosťou.",
          "Mal odčítať 2 iba od ľavej strany.",
          "Správne riešenie je (−∞; −4) ∪ (8; ∞)."
        ],
        "answer": 0,
        "correct": "Správne. Pri násobení alebo delení záporným číslom sa otočia oba znaky aj poradie: −8 &lt; −x &lt; 4 dá −4 &lt; x &lt; 8. Kontrola: x = 7 dá |2 − 7| = 5 &lt; 6.",
        "hint": "Dosaď x = −6 a x = 7 do pôvodnej nerovnice a porovnaj, ktoré z nich je naozaj riešenie."
      },
      {
        "id": "hunt3",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak vyriešil nerovnicu |x + 3| > −2 takto: „Absolútna hodnota nemôže byť záporná, preto nerovnica nemá riešenie.“ Je jeho záver správny?",
        "options": [
          "Áno, riešením je ∅.",
          "Nie, riešením je (−5; −1).",
          "Nie, nerovnica platí pre všetky x, lebo |x + 3| je vždy aspoň 0, a to je väčšie ako −2.",
          "Nie, riešením je iba x = −3."
        ],
        "answer": 2,
        "correct": "Správne. Veta „absolútna hodnota nie je záporná“ je pravdivá, ale z nej plynie, že |x + 3| ≥ 0 &gt; −2 pre každé x. Pri „väčšie ako záporné číslo“ je riešením ℝ, pri „menšie ako záporné číslo“ by to bolo ∅.",
        "hint": "Dosaď ľubovoľné x, napríklad x = 10 alebo x = −3. Je výsledok väčší ako −2?"
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha na papier",
        "html": "<p>Odlož zariadenie. Vyrieš v zošite s <strong>úplným postupom</strong> a výsledok zapíš intervalom:</p>\n<ol type=\"a\"><li>|3x − 2| &lt; 7</li><li>|5 − x| ≥ 2</li><li>|x + 1| &lt; −3</li><li>(ak stihneš) |x − 2| + |x + 1| ≤ 5</li></ol>\n<p>Pri a) a b) urob skúšku dosadením jednej hodnoty z vnútra riešenia a jednej zvonku.</p>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: nerovnice s abs. hodnotou",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Riešenia píš do zošita s postupom. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu vlastného výsledku.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "|x| ≤ 5",
            "answer": "−5 ≤ x ≤ 5.<br><strong>Riešenie: ⟨−5; 5⟩</strong>"
          },
          {
            "level": "zaklad",
            "text": "|x + 1| < 3",
            "answer": "−3 &lt; x + 1 &lt; 3, odčítame 1: −4 &lt; x &lt; 2.<br><strong>Riešenie: (−4; 2)</strong>"
          },
          {
            "level": "zaklad",
            "text": "|x − 2| ≥ 4",
            "answer": "x − 2 ≤ −4 alebo x − 2 ≥ 4, teda x ≤ −2 alebo x ≥ 6.<br><strong>Riešenie: (−∞; −2⟩ ∪ ⟨6; ∞)</strong>"
          },
          {
            "level": "zaklad",
            "text": "Zapíš nerovnicou s absolútnou hodnotou „x je od čísla 4 vzdialené menej ako 3“ a riešenie zapíš intervalom.",
            "answer": "|x − 4| &lt; 3, teda 4 − 3 &lt; x &lt; 4 + 3.<br><strong>Riešenie: (1; 7)</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "|2x − 3| ≤ 9",
            "answer": "−9 ≤ 2x − 3 ≤ 9, pripočítame 3: −6 ≤ 2x ≤ 12, vydelíme 2: −3 ≤ x ≤ 6.<br><strong>Riešenie: ⟨−3; 6⟩</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "|4x + 2| > 10",
            "answer": "4x + 2 &lt; −10 alebo 4x + 2 &gt; 10, teda 4x &lt; −12 alebo 4x &gt; 8, x &lt; −3 alebo x &gt; 2.<br><strong>Riešenie: (−∞; −3) ∪ (2; ∞)</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "|6 − 2x| < 4",
            "answer": "−4 &lt; 6 − 2x &lt; 4, odčítame 6: −10 &lt; −2x &lt; −2, delíme −2 a otáčame znaky: 5 &gt; x &gt; 1.<br><strong>Riešenie: (1; 5)</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Koľko celých čísel spĺňa nerovnicu |2x − 1| < 7?",
            "answer": "−7 &lt; 2x − 1 &lt; 7, teda −6 &lt; 2x &lt; 8, −3 &lt; x &lt; 4. Celé čísla: −2, −1, 0, 1, 2, 3, spolu 6.<br><strong>Riešenie: (−3; 4)</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Rozhodni (bez počítania celej nerovnice), pre ktoré x platí a) |x − 2| ≤ 0, b) |x − 2| < 0, c) |x − 2| > −1.",
            "answer": "a) iba x = 2, b) žiadne x (∅), c) všetky x (ℝ), lebo absolútna hodnota nie je nikdy záporná."
          },
          {
            "level": "bonus",
            "text": "|x − 1| + |x + 2| ≥ 5 (porovnaj s príkladom 5 z výkladu)",
            "answer": "Kritické body −2 a 1. x &lt; −2: −2x − 1 ≥ 5, x ≤ −3. −2 ≤ x &lt; 1: súčet je 3, nikdy nie ≥ 5. x ≥ 1: 2x + 1 ≥ 5, x ≥ 2. Je to doplnok riešenia nerovnice z výkladu.<br><strong>Riešenie: (−∞; −3⟩ ∪ ⟨2; ∞)</strong>"
          },
          {
            "level": "bonus",
            "text": "Napíš nerovnicu s absolútnou hodnotou tvaru |x − a| ≤ r, ktorej riešením je interval ⟨−1; 7⟩.",
            "answer": "Stred intervalu je a = (−1 + 7) : 2 = 3, polomer r = (7 − (−1)) : 2 = 4. Nerovnica |x − 3| ≤ 4.<br><strong>Riešenie: ⟨−1; 7⟩</strong>"
          },
          {
            "level": "bonus",
            "text": "Pre ktoré a má nerovnica |x − a| < 3 riešenie (2; 8)?",
            "answer": "Stred intervalu (2; 8) je 5 a polomer 3, preto a = 5. Skúška: |x − 5| &lt; 3 dá 2 &lt; x &lt; 8.<br><strong>Riešenie: (2; 8)</strong>"
          }
        ]
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Prečo raz prienik a raz zjednotenie",
        "prompt": "Vysvetli vlastnými slovami, prečo je riešením |x − 3| < 2 jeden interval, ale riešením |x − 3| > 2 dva intervaly. Použi vzdialenosť na číselnej osi.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> |x − 3| je vzdialenosť x od trojky. Čísla, ktoré sú od trojky bližšie ako 2, tvoria jedno okolie okolo trojky, teda interval (1; 5). Čísla, ktoré sú ďalej ako 2, ležia na dvoch stranách, vľavo od 1 a vpravo od 5, preto je to zjednotenie (−∞; 1) ∪ (5; ∞)."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "absolútna hodnota ako vzdialenosť",
          "riešenie |u| < c (dvojitá nerovnosť)",
          "riešenie |u| > c (zjednotenie)",
          "prípady c ≤ 0",
          "rozbor podľa kritických bodov"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka. Čo máš 🔴 alebo 🟡, si ešte raz prejdi v príkladoch 1 až 5."
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 4,
        "text": "Vyrieš nerovnicu |x + 2| < 5 a výsledok zapíš intervalom.",
        "answer": "−5 &lt; x + 2 &lt; 5, odčítame 2: −7 &lt; x &lt; 3.<br><strong>Riešenie: (−7; 3)</strong>"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 4,
        "text": "Vyrieš nerovnicu |x − 1| ≥ 3 a výsledok zapíš intervalom.",
        "answer": "x − 1 ≤ −3 alebo x − 1 ≥ 3, teda x ≤ −2 alebo x ≥ 4.<br><strong>Riešenie: (−∞; −2⟩ ∪ ⟨4; ∞)</strong>"
      },
      {
        "id": "w3",
        "level": "zaklad",
        "space": 4,
        "text": "Zapíš pomocou absolútnej hodnoty „x je od čísla −2 vzdialené najviac 6“ a zapíš riešenie intervalom.",
        "answer": "|x + 2| ≤ 6, teda −6 ≤ x + 2 ≤ 6, −8 ≤ x ≤ 4.<br><strong>Riešenie: ⟨−8; 4⟩</strong>"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 5,
        "text": "Vyrieš nerovnicu |3 − 2x| ≤ 5 a výsledok zapíš intervalom.",
        "answer": "−5 ≤ 3 − 2x ≤ 5, odčítame 3: −8 ≤ −2x ≤ 2, delíme −2 a otáčame znaky: 4 ≥ x ≥ −1.<br><strong>Riešenie: ⟨−1; 4⟩</strong>"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 5,
        "text": "Rozhodni bez zbytočného počítania a zdôvodni:\na) |2x − 1| < −3\nb) |2x − 1| ≤ 0\nc) |2x − 1| > −3",
        "answer": "a) ∅, absolútna hodnota nie je menšia ako záporné číslo. b) iba 2x − 1 = 0, teda x = 1/2. c) ℝ, absolútna hodnota je vždy aspoň 0."
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 6,
        "text": "Vyrieš nerovnicu |x + 3| + |x − 1| ≤ 6 rozborom podľa kritických bodov.",
        "answer": "Kritické body −3 a 1. x &lt; −3: −2x − 2 ≤ 6, x ≥ −4, teda ⟨−4; −3). −3 ≤ x &lt; 1: súčet je 4 ≤ 6, platí vždy, teda ⟨−3; 1). x ≥ 1: 2x + 2 ≤ 6, x ≤ 2, teda ⟨1; 2⟩. Zjednotenie je ⟨−4; 2⟩.<br><strong>Riešenie: ⟨−4; 2⟩</strong>"
      },
      {
        "id": "w7",
        "level": "bonus",
        "space": 5,
        "text": "Priemer valčeka má byť 40 mm s toleranciou ±0,2 mm. Zapíš podmienku správneho priemeru d nerovnicou s absolútnou hodnotou a ako interval.",
        "answer": "|d − 40| ≤ 0,2, teda 39,8 ≤ d ≤ 40,2.<br><strong>Riešenie: ⟨39,8; 40,2⟩</strong>"
      }
    ]
  }
});
