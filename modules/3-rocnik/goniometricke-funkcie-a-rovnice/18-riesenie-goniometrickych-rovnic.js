MathPlatform.registerModule({
  id: '3-u01-h018',
  teacher: {
    placement: '3. ročník · Goniometrické funkcie, goniometrické, rovnice · Hodina 18 · Riešenie goniometrických rovníc (substitúcia a kvadratická rovnica)',
    prerequisites: [
      'riešenie kvadratickej rovnice (rozklad na súčin, diskriminant) z 2. ročníka',
      'rovnice sin x = a a cos x = a (hodiny 14–15)',
      'obor hodnôt funkcií sin x a cos x je ⟨−1; 1⟩',
      'zápis sin²x ako (sin x)²'
    ],
    planContent: [
      'Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka. Rovnice obsahujú iba jednu goniometrickú funkciu (sin alebo cos); identita sin²x + cos²x = 1 sa tu nepoužíva.'
    ],
    planPerformance: [
      'Poznať pojem jednotková kružnica.',
      'Vedieť zobraziť na jednotkovej kružnici ľubovoľné reálne číslo a priradiť reálne číslo bodu kružnice.',
      'Zadefinovať funkcie sin x, cos x, tg x, cotg x a opísať ich vlastnosti.',
      'Poznať a vedieť použiť goniometrické vzorce.',
      'Vyriešiť goniometrickú rovnicu.'
    ],
    goals: [
      'rozpoznať goniometrickú rovnicu, ktorá je kvadratická vzhľadom na sin x alebo cos x, a zaviesť substitúciu t',
      'vyriešiť kvadratickú rovnicu pre t a vyradiť korene mimo ⟨−1; 1⟩',
      'vrátiť sa od t k x riešením rovníc sin x = t alebo cos x = t',
      'nedeliť výrazom, ktorý môže byť nulový (strata riešení)'
    ],
    competencies: [
      'substitúcia a návrat k pôvodnej premennej',
      'kontrola prípustnosti koreňa (|t| ≤ 1)',
      'zdôvodnenie, že rovnica nemá riešenie'
    ],
    enrichment: [
      'Návrh maturitného štandardu je použitý iba ako obohatenie: argumentácia, prečo sa koreň vyradí, a rozpoznanie typickej chyby (delenie nulovým výrazom).'
    ],
    flow: [
      '4 min: kde sme, kvadratická rovnica z 2. ročníka',
      '12 min: substitúcia t = sin x, vzorové príklady (dva prípustné korene, jeden vyradený)',
      '10 min: prípustnosť koreňov, nájdi chybu, rovnica bez riešenia',
      '15 min: zbierka úloh podľa úrovní v zošite',
      '4 min: samostatná úloha bez mobilu, sebahodnotenie'
    ],
    diagnostics: [
      'či žiak vie, že t = sin x musí ležať v ⟨−1; 1⟩ a koreň t = 2 vyradí',
      'či po nájdení t nezabudne riešiť sin x = t',
      'či rovnicu typu sin²x = sin x rieši vytýkaním, nie delením',
      'či pri kvadratickej rovnici bez reálnych koreňov usúdi, že pôvodná rovnica nemá riešenie'
    ],
    partialUse: [
      'Ak je menej času, vynechaj bonusové úlohy; hodinu možno rozdeliť na „dva prípustné korene“ a „vyraďovanie koreňa“.',
      'Riešenia v zbierke sa počas živej hodiny žiakom nezobrazujú.'
    ]
  },
  student: {
    title: 'Goniometrické rovnice: substitúcia a kvadratická rovnica',
    subtitle: '2sin²x − sin x − 1 = 0',
    intro: 'Rovnica s druhou mocninou sin x alebo cos x vyzerá ako kvadratická. Nahradíš sin x písmenom t, vyriešiš kvadratickú rovnicu a vrátiš sa k x.',
    estimatedTime: '25–30 min + zbierka',
    activities: [
      {
        id: 'recap',
        type: 'explain',
        phase: 'KDE SME',
        title: 'Čo už vieme',
        html: '<p>V tomto celku sme sa naučili rovnice <strong>sin x = a</strong>, <strong>cos x = a</strong> a rovnice so zloženým argumentom. Z 2. ročníka vieme riešiť <strong>kvadratické rovnice</strong>.</p><p>Dnes obe veci spojíme: rovnice ako <strong>2sin²x − sin x − 1 = 0</strong>. Zápis sin²x znamená (sin x)². Ak za sin x dosadíme t, vznikne obyčajná kvadratická rovnica.</p>'
      },
      {
        id: 'recall',
        type: 'choice',
        phase: 'OPAKUJ',
        skill: 'kvadratická rovnica',
        question: 'Kvadratická rovnica 2t² − t − 1 = 0 má diskriminant D = 9. Aké sú jej korene?',
        options: [
          't = 1 a t = −1/2',
          't = −1 a t = 1/2',
          't = 1 a t = 1/2'
        ],
        answer: 0,
        correct: 'Správne. t = (1 ± 3) / 4, teda t = 1 alebo t = −1/2. Skúška: 2 · 1 − 1 − 1 = 0 ✓.',
        hint: 'Použi vzorec t = (−b ± √D) / (2a) s a = 2, b = −1.'
      },
      {
        id: 'topic-intro',
        type: 'intro',
        goals: [
          'zaviesť substitúciu t = sin x alebo t = cos x',
          'vyriešiť kvadratickú rovnicu pre t a vyradiť korene mimo ⟨−1; 1⟩',
          'vrátiť sa k x a zapísať všetky riešenia'
        ]
      },
      {
        id: 'method',
        type: 'explain',
        phase: 'NOVÝ POSTUP',
        title: 'Substitúcia v štyroch krokoch',
        html: '<ol class="steps"><li><strong>Substitúcia:</strong> t = sin x (alebo t = cos x). Rovnica sa zmení na kvadratickú pre t.</li><li><strong>Vyrieš</strong> kvadratickú rovnicu pre t.</li><li><strong>Skontroluj:</strong> sin x aj cos x ležia v ⟨−1; 1⟩, takže koreň t mimo tohto intervalu <strong>vyraď</strong>.</li><li><strong>Vráť sa k x:</strong> vyrieš sin x = t (alebo cos x = t) pre každý prípustný koreň.</li></ol><div class="warning"><strong>Pozor:</strong> kvadratická rovnica je len medzikrok. Hľadáme čísla x, nie t, preto je v poslednom kroku potrebné vyriešiť ešte rovnice sin x = t.</div>',
        remember: 'Substitúcia → kvadratická rovnica → vyraď |t| > 1 → rieš sin x = t (alebo cos x = t).'
      },
      {
        id: 'worked-1',
        type: 'info',
        phase: 'VZOROVÝ PRÍKLAD',
        title: '2sin²x − sin x − 1 = 0',
        html: '<div class="example"><span class="mini-label">PRÍKLAD</span><p><strong>1. Substitúcia:</strong> t = sin x, rovnica 2t² − t − 1 = 0.</p><p><strong>2. Kvadratická rovnica:</strong> D = 1 + 8 = 9, t = (1 ± 3) / 4, teda <strong>t = 1</strong> alebo <strong>t = −1/2</strong>.</p><p><strong>3. Prípustnosť:</strong> obe čísla ležia v ⟨−1; 1⟩, ostávajú.</p><p><strong>4. Návrat k x:</strong></p><p>sin x = 1 ⇒ x = π/2 + 2kπ</p><p>sin x = −1/2 ⇒ x = 7π/6 + 2kπ alebo x = 11π/6 + 2kπ</p><p><strong>Skúška</strong> pre x = π/2: 2 · 1² − 1 − 1 = 0 ✓.</p><p><strong>Výsledok: x = π/2 + 2kπ, x = 7π/6 + 2kπ alebo x = 11π/6 + 2kπ, k ∈ ℤ.</strong></p></div>'
      },
      {
        id: 'quadratic-root',
        type: 'numberInput',
        phase: 'POUŽI',
        skill: 'kvadratická rovnica',
        title: 'Väčší koreň',
        prompt: 'Rovnicu 2cos²x − 3cos x + 1 = 0 prevedieme substitúciou t = cos x na 2t² − 3t + 1 = 0. Aký je väčší koreň t?',
        validate: 'exact',
        answer: 1,
        success: 'Áno. D = 9 − 8 = 1, t = (3 ± 1) / 4, teda t = 1 alebo t = 1/2. Väčší je 1.',
        hint: 'Použi vzorec t = (3 ± √D) / 4 s D = 9 − 8.',
        reveal: 'D = 1, t = (3 + 1) / 4 = 1 a t = (3 − 1) / 4 = 1/2. Väčší koreň je 1.'
      },
      {
        id: 'admissible',
        type: 'sortChoice',
        phase: 'OVER SI',
        skill: 'prípustnosť koreňa',
        title: 'Môže byť t hodnotou sin x?',
        question: 'Po substitúcii t = sin x vyšli rôzne korene. Zaraď každý: môže byť hodnotou sin x, alebo nie?',
        labels: ['Môže byť hodnotou sin x', 'Nemôže byť hodnotou sin x'],
        items: [
          { text: 't = 2', answer: false, why: 'sin x nikdy nie je väčší ako 1.' },
          { text: 't = −1', answer: true, why: 'Číslo −1 leží v ⟨−1; 1⟩ (je to najmenšia hodnota sin x).' },
          { text: 't = 1/3', answer: true, why: 'Číslo 1/3 leží v ⟨−1; 1⟩.' },
          { text: 't = −3/2', answer: false, why: '−3/2 = −1,5 je menšie ako −1, takže sin x touto hodnotou nikdy nebude.' },
          { text: 't = 1', answer: true, why: 'Číslo 1 je najväčšia hodnota sin x.' }
        ]
      },
      {
        id: 'worked-2',
        type: 'info',
        phase: 'VZOROVÝ PRÍKLAD',
        title: '2cos²x − 5cos x + 2 = 0: jeden koreň vyradíme',
        html: '<div class="example"><span class="mini-label">PRÍKLAD</span><p><strong>1. Substitúcia:</strong> t = cos x, rovnica 2t² − 5t + 2 = 0.</p><p><strong>2. Kvadratická rovnica:</strong> D = 25 − 16 = 9, t = (5 ± 3) / 4, teda <strong>t = 2</strong> alebo <strong>t = 1/2</strong>.</p><p><strong>3. Prípustnosť:</strong> t = 2 je väčšie ako 1, cos x nikdy nemá hodnotu 2, preto ho <strong>vyradíme</strong>. Ostáva t = 1/2.</p><p><strong>4. Návrat k x:</strong> cos x = 1/2 ⇒ x = π/3 + 2kπ alebo x = −π/3 + 2kπ.</p><p><strong>Výsledok: x = ±π/3 + 2kπ, k ∈ ℤ.</strong></p></div>'
      },
      {
        id: 'reject-root',
        type: 'choice',
        phase: 'POUŽI',
        skill: 'vyradenie koreňa',
        question: 'V rovnici sin²x + sin x − 2 = 0 vyšli po substitúcii t = sin x korene t = 1 a t = −2. Ako pokračovať?',
        options: [
          'Rovnica nemá riešenie, pretože jeden koreň je mimo ⟨−1; 1⟩.',
          'Riešime sin x = 1 aj sin x = −2.',
          'Riešime sin x = 1; koreň t = −2 vyradíme, lebo sin x nemôže byť menší ako −1.'
        ],
        answer: 2,
        correct: 'Správne. Vyradíme len ten koreň, ktorý je mimo ⟨−1; 1⟩, a pre t = 1 získame riešenia x = π/2 + 2kπ.',
        hint: 'Každý koreň t posudzuj zvlášť. Ktorý z nich môže byť hodnotou sin x?'
      },
      {
        id: 'divide-error',
        type: 'choice',
        phase: 'NÁJDI CHYBU',
        skill: 'kritické myslenie',
        question: 'Žiak rieši rovnicu sin²x = sin x tak, že obe strany vydelí výrazom sin x a dostane sin x = 1. Čo je v postupe zlé?',
        options: [
          'Nič, sin x = 1 sú všetky riešenia.',
          'Delením stratil riešenia, pre ktoré je sin x = 0.',
          'Mal deliť výrazom sin²x.'
        ],
        answer: 1,
        correct: 'Presne. Správne je presunúť všetko na jednu stranu a vytknúť: sin x (sin x − 1) = 0, teda sin x = 0 alebo sin x = 1. Riešenia: x = kπ alebo x = π/2 + 2kπ.',
        hint: 'Môže byť sin x rovný nule? Ak áno, čo sa stane pri delení touto hodnotou?'
      },
      {
        id: 'no-solution',
        type: 'choice',
        phase: 'POUŽI',
        skill: 'rovnica bez riešenia',
        question: 'Rovnica sin²x + sin x + 1 = 0 sa po substitúcii t = sin x zmení na t² + t + 1 = 0, ktorá má diskriminant D = −3. Koľko riešení má pôvodná rovnica?',
        options: [
          'Dve riešenia.',
          'Žiadne riešenie, pretože kvadratická rovnica pre t nemá reálny koreň.',
          'Nekonečne veľa riešení.'
        ],
        answer: 1,
        correct: 'Áno. Bez reálneho t nie je čo vrátiť k sin x, a teda neexistuje žiadne reálne x.',
        hint: 'Ak kvadratická rovnica pre t nemá reálny koreň, existuje nejaké t, ktoré by mohlo byť hodnotou sin x?'
      },
      {
        id: 'matura-format',
        type: 'choice',
        phase: 'MATURITNÝ FORMÁT',
        skill: 'maturitný formát',
        question: 'Určte všetky riešenia rovnice 2cos²x + cos x − 1 = 0 v intervale ⟨0; 2π⟩. Pomôcka: po substitúcii t = cos x vyjde (2t − 1)(t + 1) = 0.',
        options: [
          'π/3 a 5π/3',
          'π/6, π a 11π/6',
          'π/3, π a 5π/3'
        ],
        answer: 2,
        correct: 'Áno. t = 1/2 dáva cos x = 1/2, teda π/3 a 5π/3. t = −1 dáva cos x = −1, teda π. Obe hodnoty t sú prípustné.',
        hint: 'Z (2t − 1)(t + 1) = 0 dostaneš dva korene t. Pre každý rieš cos x = t v ⟨0; 2π⟩.'
      },
      {
        id: 'why-check',
        type: 'selfWrite',
        phase: 'VYSVETLI',
        skill: 'matematická komunikácia',
        title: 'Prečo kontrolujeme koreň t?',
        prompt: 'Vysvetli v 2–3 vetách, prečo musíme po vyriešení kvadratickej rovnice pre t = sin x skontrolovať, či t leží v ⟨−1; 1⟩, a čo urobíme, ak nie.',
        model: 'Hodnota sin x je vždy v ⟨−1; 1⟩, takže rovnica sin x = t má riešenie len pre také t. Ak koreň kvadratickej rovnice leží mimo tohto intervalu, neexistuje žiadne x, ktoré by mu zodpovedalo, a tento koreň vyradíme. Zo zvyšných koreňov potom hľadáme x.'
      },
      {
        id: 'zbierka',
        type: 'taskList',
        phase: 'PRECVIČ',
        skill: 'zbierka',
        title: 'Zbierka úloh',
        html: '<p>Riešiš v zošite. Pri každej úlohe napíš substitúciu, kvadratickú rovnicu pre t, kontrolu prípustnosti a až potom riešenia pre x. Zaškrtni úlohu, keď ju máš hotovú. Správnosť sa nekontroluje automaticky; riešenie si môžeš zobraziť tlačidlom pri úlohe.</p>',
        items: [
          { level: 'zaklad', text: 'Rieš rovnicu sin²x = 1.', answer: '<p>t = sin x, t² = 1, t = 1 alebo t = −1.</p><p>sin x = 1: x = π/2 + 2kπ; sin x = −1: x = 3π/2 + 2kπ. Spolu: x = π/2 + kπ, k ∈ ℤ.</p>' },
          { level: 'zaklad', text: 'Rieš rovnicu 2sin²x − sin x = 0. Nedeľ výrazom sin x.', answer: '<p>sin x (2 sin x − 1) = 0, teda sin x = 0 alebo sin x = 1/2.</p><p>x = kπ, x = π/6 + 2kπ alebo x = 5π/6 + 2kπ, k ∈ ℤ.</p>' },
          { level: 'zaklad', text: 'Rieš rovnicu cos²x − cos x = 0.', answer: '<p>cos x (cos x − 1) = 0, teda cos x = 0 alebo cos x = 1.</p><p>x = π/2 + kπ alebo x = 2kπ, k ∈ ℤ.</p>' },
          { level: 'zaklad', text: 'Rieš rovnicu 2cos²x + cos x − 1 = 0 (korene t nájdeš rozkladom alebo diskriminantom).', answer: '<p>t = cos x: 2t² + t − 1 = (2t − 1)(t + 1) = 0, teda t = 1/2 alebo t = −1.</p><p>cos x = 1/2: x = ±π/3 + 2kπ; cos x = −1: x = π + 2kπ, k ∈ ℤ.</p>' },
          { level: 'zaklad', text: 'Rieš rovnicu 4sin²x − 1 = 0.', answer: '<p>sin²x = 1/4, sin x = 1/2 alebo sin x = −1/2.</p><p>x = π/6 + kπ alebo x = −π/6 + kπ, k ∈ ℤ.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu 2sin²x + sin x − 3 = 0.', answer: '<p>t = sin x: 2t² + t − 3 = (2t + 3)(t − 1) = 0, teda t = −3/2 alebo t = 1.</p><p>t = −3/2 vyradíme (je menšie ako −1). sin x = 1: x = π/2 + 2kπ, k ∈ ℤ.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu 2sin²x − 3 sin x + 1 = 0.', answer: '<p>t = sin x: 2t² − 3t + 1 = (2t − 1)(t − 1) = 0, teda t = 1/2 alebo t = 1.</p><p>x = π/6 + 2kπ, x = 5π/6 + 2kπ alebo x = π/2 + 2kπ, k ∈ ℤ.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu 2cos²x − 5cos x + 2 = 0 v intervale ⟨0; 2π⟩.', answer: '<p>t = 2 vyradíme, cos x = 1/2: x ∈ {π/3, 5π/3}.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu 4cos²x − 3 = 0 v intervale ⟨0; 2π).', answer: '<p>cos x = √3/2 alebo cos x = −√3/2.</p><p>x ∈ {π/6, 5π/6, 7π/6, 11π/6}.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu 2sin²x + 3 sin x + 1 = 0 v intervale ⟨0; 2π).', answer: '<p>t = sin x: (2t + 1)(t + 1) = 0, teda t = −1/2 alebo t = −1.</p><p>sin x = −1/2: 7π/6 a 11π/6; sin x = −1: 3π/2. x ∈ {7π/6, 3π/2, 11π/6}.</p>' },
          { level: 'bonus', text: 'Rieš rovnicu sin²x + sin x + 1 = 0. Zdôvodni výsledok.', answer: '<p>t² + t + 1 = 0 má D = 1 − 4 = −3 &lt; 0, nemá reálny koreň. Rovnica nemá riešenie.</p>' },
          { level: 'bonus', text: 'Rieš rovnicu 2cos²(x − π/6) − 5cos(x − π/6) + 2 = 0. (Použi dve substitúcie za sebou.)', answer: '<p>t = cos(x − π/6): 2t² − 5t + 2 = 0, t = 2 (vyradíme) alebo t = 1/2.</p><p>cos u = 1/2, u = x − π/6 = ±π/3 + 2kπ, teda x = π/6 ± π/3: x = π/2 + 2kπ alebo x = −π/6 + 2kπ, k ∈ ℤ.</p>' },
          { level: 'bonus', text: 'Rieš rovnicu sin²(2x) = 1.', answer: '<p>sin 2x = 1 alebo sin 2x = −1, teda 2x = π/2 + kπ.</p><p>x = π/4 + kπ/2, k ∈ ℤ.</p>' }
        ]
      },
      {
        id: 'work',
        type: 'notebook',
        phase: 'BEZ MOBILU',
        title: 'Samostatná úloha',
        html: '<p><span class="mini-label">ÚLOHA DO ZOŠITA</span><br>Rieš rovnicu <strong>2sin²x + sin x − 1 = 0</strong> v intervale <strong>⟨0; 2π)</strong>. Zapíš substitúciu, kvadratickú rovnicu, kontrolu koreňov a riešenia pre x.</p>',
        model: '<strong>KONTROLA:</strong> t = sin x: 2t² + t − 1 = (2t − 1)(t + 1) = 0, teda t = 1/2 alebo t = −1 (obe prípustné). sin x = 1/2 ⇒ x ∈ {π/6, 5π/6}; sin x = −1 ⇒ x = 3π/2. Výsledok: x ∈ {π/6, 5π/6, 3π/2}.'
      },
      {
        id: 'reflection',
        type: 'reflection',
        phase: 'SEBAHODNOTENIE',
        title: 'Čo už viem?',
        skills: [
          'zavedenie substitúcie t',
          'vyradenie koreňa mimo ⟨−1; 1⟩',
          'návrat k x',
          'rovnica bez riešenia a nedelenie nulovým výrazom'
        ],
        prompt: 'Označ, ako dobre by si teraz vyriešil/a podobnú rovnicu bez pomoci. Nie je to známka.'
      }
    ]
  }
});
