MathPlatform.registerModule({
  id: '3-u01-h017',
  teacher: {
    placement: '3. ročník · Goniometrické funkcie, goniometrické, rovnice · Hodina 17 · Riešenie goniometrických rovníc (zložený argument)',
    prerequisites: [
      'substitúcia u za zložený argument: rovnice sin(x ± a) = c, cos(x ± a) = c, sin(bx) = c, cos(bx) = c (hodina 16)',
      'rovnice sin x = a, cos x = a vrátane výberu riešení z intervalu (hodiny 14–15)',
      'sčítanie a odčítanie zlomkov s π'
    ],
    planContent: [
      'Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka. Hodina je určená na precvičenie rovníc so zloženým argumentom; pracuje sa iba s funkciami sin a cos.'
    ],
    planPerformance: [
      'Poznať pojem jednotková kružnica.',
      'Vedieť zobraziť na jednotkovej kružnici ľubovoľné reálne číslo a priradiť reálne číslo bodu kružnice.',
      'Zadefinovať funkcie sin x, cos x, tg x, cotg x a opísať ich vlastnosti.',
      'Poznať a vedieť použiť goniometrické vzorce.',
      'Vyriešiť goniometrickú rovnicu.'
    ],
    goals: [
      'bezpečne vyriešiť rovnice so zloženým argumentom a vybrať riešenia z intervalu',
      'rozpoznať správny a nesprávny zápis riešenia (smer posunu, delenie člena 2kπ)',
      'určiť počet riešení v intervale pomocou substitúcie'
    ],
    competencies: [
      'presný postup: substitúcia → riešenie pre u → návrat k x → výber z intervalu',
      'kontrola riešenia dosadením',
      'zdôvodnenie počtu riešení bez vypisovania'
    ],
    enrichment: [
      'Návrh maturitného štandardu je použitý iba ako obohatenie: porovnanie algebraického riešenia s grafom a hľadanie chýb v cudzom postupe.'
    ],
    flow: [
      '3 min: kde sme a postup',
      '12 min: vzorový príklad s intervalom, graf sin 2x a trénovanie nesprávnych zápisov',
      '20 min: zbierka úloh podľa úrovní v zošite',
      '5 min: samostatná úloha bez mobilu, sebahodnotenie'
    ],
    diagnostics: [
      'či žiak z u = x + a vyjadrí x = u − a (nie u + a)',
      'či pri sin(bx) vydelí aj člen 2kπ',
      'či z množiny všetkých riešení správne vyberie tie z intervalu'
    ],
    partialUse: [
      'Modul je možné použiť po častiach: vzorový príklad a nájdenie chyby samostatne od zbierky.',
      'Riešenia v zbierke sa počas živej hodiny žiakom nezobrazujú.'
    ]
  },
  student: {
    title: 'Riešenie goniometrických rovníc so zloženým argumentom',
    subtitle: 'Substitúcia, interval, kontrola',
    intro: 'Zopakuješ postup z hodiny 16 na nových rovniciach, prejdeš si typické chyby a vyberieš riešenia z intervalu.',
    estimatedTime: '20–25 min + zbierka',
    activities: [
      {
        id: 'recap',
        type: 'explain',
        phase: 'KDE SME',
        title: 'Čo už vieme',
        html: '<p>V hodine 16 sme vyriešili rovnice, kde vnútri sin alebo cos nie je iba x. Postup:</p><ol class="steps"><li>Zvoľ <strong>substitúciu u</strong> za výraz v zátvorke (napr. u = x + π/3 alebo u = 2x).</li><li>Vyrieš <strong>sin u = a</strong> alebo <strong>cos u = a</strong>: dva body na kružnici, ku každému 2kπ.</li><li><strong>Vráť sa k x</strong>: z u = x + a je x = u − a, z u = bx je x = u/b (deliš celú pravú stranu aj s 2kπ).</li><li>Ak je zadaný interval, <strong>vyber</strong> riešenia, ktoré doň patria.</li><li><strong>Skontroluj</strong> aspoň jedno riešenie dosadením.</li></ol>'
      },
      {
        id: 'recall',
        type: 'choice',
        phase: 'OPAKUJ',
        skill: 'substitúcia',
        question: 'V rovnici cos(x − π/4) = 0 sme položili u = x − π/4. Ako vyjadríme x pomocou u?',
        options: [
          'x = u − π/4',
          'x = u + π/4',
          'x = π/4 − u'
        ],
        answer: 1,
        correct: 'Áno. Z u = x − π/4 pripočítaním π/4 k obom stranám dostaneme x = u + π/4.',
        hint: 'Aby si z u = x − π/4 dostal/a samotné x, čo urobíš s obidvoma stranami?'
      },
      {
        id: 'topic-intro',
        type: 'intro',
        goals: [
          'vyriešiť rovnice so zloženým argumentom aj s intervalom',
          'odhaliť typické chyby v zápise riešenia',
          'určiť počet riešení v intervale pomocou substitúcie'
        ]
      },
      {
        id: 'worked-example',
        type: 'info',
        phase: 'VZOROVÝ PRÍKLAD',
        title: 'sin(x + π/3) = −1/2 v intervale ⟨0; 2π)',
        html: '<div class="example"><span class="mini-label">PRÍKLAD</span><p><strong>1. Substitúcia:</strong> u = x + π/3, rovnica sin u = −1/2.</p><p><strong>2. Pre u:</strong> záporné y je v III. a IV. kvadrante, teda u = 7π/6 + 2kπ alebo u = 11π/6 + 2kπ.</p><p><strong>3. Návrat:</strong> x = u − π/3.</p><p>x = 7π/6 − 2π/6 + 2kπ = <strong>5π/6 + 2kπ</strong></p><p>x = 11π/6 − 2π/6 + 2kπ = 9π/6 + 2kπ = <strong>3π/2 + 2kπ</strong></p><p><strong>4. Interval ⟨0; 2π):</strong> k = 0 dáva obe čísla 5π/6 aj 3π/2, patria do intervalu.</p><p><strong>5. Skúška:</strong> sin(5π/6 + π/3) = sin(7π/6) = −1/2 ✓.</p><p><strong>Výsledok: x ∈ {5π/6, 3π/2}.</strong></p></div>'
      },
      {
        id: 'fractions-6',
        type: 'numberInput',
        phase: 'POUŽI',
        skill: 'zlomky s π',
        title: 'Rozdiel násobkov π',
        prompt: 'Vo vzorovom príklade sme počítali 7π/6 − π/3. Zapíš výsledok v tvare (a/6)·π. Aké je číslo a?',
        validate: 'exact',
        answer: 5,
        success: 'Áno: 7π/6 − 2π/6 = 5π/6.',
        hint: 'Prepíš π/3 na šestiny: π/3 = ?π/6.',
        reveal: 'π/3 = 2π/6, takže 7π/6 − 2π/6 = 5π/6, teda a = 5.'
      },
      {
        id: 'graph-sin2x',
        type: 'coordinatePlot',
        phase: 'POCHOP',
        title: 'Prečo štyri riešenia? sin 2x = √3/2',
        html: '<p>Graf funkcie <strong>sin 2x</strong> prebehne v intervale ⟨0; 2π⟩ dva celé cykly, preto pretne priamku <strong>y = √3/2</strong> (zelená) <strong>štyrikrát</strong>. Sú to čísla π/6, π/3, 7π/6 a 4π/3, presne tie, ktoré dostaneš zo zápisov x = π/6 + kπ a x = π/3 + kπ.</p>',
        xMin: 0, xMax: 6.283185307179586, yMin: -1.5, yMax: 1.5,
        xStep: 1.5707963267948966, yStep: 0.5,
        xTickFormat: v => (['0', 'π/2', 'π', '3π/2', '2π'][Math.round(v / (Math.PI / 2))] ?? String(v)),
        curves: [
          { fn: x => Math.sin(2 * x), label: 'sin 2x' },
          { fn: () => Math.sqrt(3) / 2, color: '#5f8478', label: 'y = √3/2' }
        ],
        points: [
          { x: Math.PI / 6, y: Math.sqrt(3) / 2, label: 'π/6' },
          { x: Math.PI / 3, y: Math.sqrt(3) / 2, label: 'π/3' },
          { x: 7 * Math.PI / 6, y: Math.sqrt(3) / 2, label: '7π/6' },
          { x: 4 * Math.PI / 3, y: Math.sqrt(3) / 2, label: '4π/3' }
        ],
        ariaLabel: 'Graf sin 2x a priamka y rovná sa odmocnina z troch polovic, štyri priesečníky v intervale od nula do dva pí'
      },
      {
        id: 'interval-choice',
        type: 'choice',
        phase: 'POUŽI',
        skill: 'výber z intervalu',
        question: 'Rieš rovnicu cos 2x = 1/2 v intervale ⟨0; π⟩. Platí 2x = π/3 + 2kπ alebo 2x = −π/3 + 2kπ. Ktoré riešenia patria do ⟨0; π⟩?',
        options: [
          'π/3 a 5π/3',
          'π/3 a 2π/3',
          'π/6 a 5π/6'
        ],
        answer: 2,
        correct: 'Áno. Po delení dvoma je x = π/6 + kπ alebo x = −π/6 + kπ. Z prvej série patrí π/6 (k = 0), z druhej 5π/6 (k = 1).',
        hint: 'Najprv vydeľ dvoma celú pravú stranu (aj 2kπ), potom dosadzuj k = 0, 1 a sleduj interval ⟨0; π⟩.'
      },
      {
        id: 'right-wrong',
        type: 'sortChoice',
        phase: 'NÁJDI CHYBU',
        skill: 'kritické myslenie',
        title: 'Je zápis riešenia správny?',
        question: 'Zaraď každé tvrdenie. Pomôž si substitúciou a kontrolou jedného riešenia dosadením.',
        labels: ['Správne', 'Nesprávne'],
        items: [
          { text: 'sin(x − π/2) = 1 ⇒ x = π + 2kπ', answer: true, why: 'u = π/2 + 2kπ, x = u + π/2 = π + 2kπ.' },
          { text: 'cos 2x = 1 ⇒ x = 2kπ', answer: false, why: '2x = 2kπ, po delení dvoma je x = kπ.' },
          { text: 'sin(x + π/3) = 0 ⇒ x = −π/3 + kπ', answer: true, why: 'u = kπ, x = u − π/3 = −π/3 + kπ.' },
          { text: 'cos(x − π/4) = 0 ⇒ x = π/4 + kπ', answer: false, why: 'u = π/2 + kπ, x = u + π/4 = 3π/4 + kπ.' },
          { text: 'sin 3x = 0 ⇒ x = kπ/3', answer: true, why: '3x = kπ, po delení tromi je x = kπ/3.' },
          { text: 'cos(x + π/6) = 1 ⇒ x = π/6 + 2kπ', answer: false, why: 'u = 2kπ, x = u − π/6 = −π/6 + 2kπ.' }
        ]
      },
      {
        id: 'count-shift',
        type: 'numberInput',
        phase: 'POUŽI',
        skill: 'počet riešení',
        title: 'Počet riešení v dlhšom intervale',
        prompt: 'Koľko riešení má rovnica cos(x − π/5) = 1/2 v intervale ⟨0; 4π)? (Riešenia sa opakujú po 2π.)',
        validate: 'exact',
        answer: 4,
        success: 'Áno. V ⟨0; 2π) sú 8π/15 a 28π/15, v ⟨2π; 4π) ďalšie dve.',
        hint: 'Koľko riešení je v jednom obehu a koľko obehov interval ⟨0; 4π) obsahuje?',
        reveal: 'Posun grafu počet riešení v obehu nemení: sú dve na každých 2π. Interval ⟨0; 4π) má dĺžku 4π, teda 2 · 2 = 4 riešenia.'
      },
      {
        id: 'find-error',
        type: 'choice',
        phase: 'NÁJDI CHYBU',
        skill: 'kritické myslenie',
        question: 'Žiak rieši rovnicu sin(x − π/3) = 1. Napíše: „u = x − π/3 = π/2 + 2kπ, preto x = π/2 − π/3 + 2kπ = π/6 + 2kπ.“ Kde je chyba?',
        options: [
          'Z u = x − π/3 vyplýva x = u + π/3 (nie u − π/3), správne je x = 5π/6 + 2kπ.',
          'Mal vynechať člen 2kπ.',
          'Chyby sa nedopustil.'
        ],
        answer: 0,
        correct: 'Presne. Skúška to odhalí: sin(π/6 − π/3) = sin(−π/6) = −1/2, nie 1. Správne x = π/2 + π/3 = 5π/6 + 2kπ.',
        hint: 'Skús dosadiť jeho výsledok x = π/6 do pôvodnej rovnice.'
      },
      {
        id: 'matura-format',
        type: 'choice',
        phase: 'MATURITNÝ FORMÁT',
        skill: 'maturitný formát',
        question: 'Určte všetky riešenia rovnice cos(x − π/6) = 1/2 v intervale ⟨0; 2π). Ktorá odpoveď je správna?',
        options: [
          'π/2 a 11π/6',
          'π/2 a 7π/6',
          'π/6 a 5π/6'
        ],
        answer: 0,
        correct: 'Áno. u = x − π/6 = ±π/3 + 2kπ, teda x = π/6 ± π/3: x = π/2 alebo x = −π/6, to je v ⟨0; 2π) číslo 11π/6.',
        hint: 'Vyriešiš cos u = 1/2, potom pripočítaš π/6. Druhé riešenie je záporné, pripočítaj k nemu 2π.'
      },
      {
        id: 'procedure',
        type: 'selfWrite',
        phase: 'VYSVETLI',
        skill: 'matematická komunikácia',
        title: 'Postup vlastnými slovami',
        prompt: 'Napíš v krokoch (aspoň 4), ako vyriešiš rovnicu sin(2x − π/3) = c, kde c je číslo z ⟨−1; 1⟩.',
        model: 'Položím u = 2x − π/3 a vyriešim sin u = c: nájdem dva body na kružnici a ku každému pripočítam 2kπ. Potom vyjadrím x: 2x = u + π/3, teda x = (u + π/3) / 2, pričom deliť treba celú pravú stranu aj člen 2kπ. Nakoniec vyberiem riešenia z intervalu a jedno skontrolujem dosadením.'
      },
      {
        id: 'zbierka',
        type: 'taskList',
        phase: 'PRECVIČ',
        skill: 'zbierka',
        title: 'Zbierka úloh',
        html: '<p>Riešiš v zošite. Pri každej úlohe napíš substitúciu a aspoň jedno riešenie skontroluj dosadením. Zaškrtni úlohu, keď ju máš hotovú. Správnosť sa nekontroluje automaticky; riešenie si môžeš zobraziť tlačidlom pri úlohe.</p>',
        items: [
          { level: 'zaklad', text: 'Rieš rovnicu sin(x − π/6) = 0.', answer: '<p>u = x − π/6 = kπ, teda x = π/6 + kπ, k ∈ ℤ.</p>' },
          { level: 'zaklad', text: 'Rieš rovnicu cos(x + π/2) = 1.', answer: '<p>u = x + π/2 = 2kπ, teda x = −π/2 + 2kπ, k ∈ ℤ.</p>' },
          { level: 'zaklad', text: 'Rieš rovnicu sin 3x = 0.', answer: '<p>3x = kπ, teda x = kπ/3, k ∈ ℤ.</p>' },
          { level: 'zaklad', text: 'Rieš rovnicu cos(x − π/4) = 0 v intervale ⟨0; 2π).', answer: '<p>u = x − π/4 = π/2 + kπ, teda x = 3π/4 + kπ. V intervale: x ∈ {3π/4, 7π/4}.</p>' },
          { level: 'zaklad', text: 'Rieš rovnicu sin(x + π/3) = 1.', answer: '<p>u = x + π/3 = π/2 + 2kπ, teda x = π/6 + 2kπ, k ∈ ℤ.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu cos(x − π/3) = √3/2. Zapíš všetky riešenia.', answer: '<p>u = x − π/3 = ±π/6 + 2kπ, teda x = π/3 ± π/6: x = π/2 + 2kπ alebo x = π/6 + 2kπ, k ∈ ℤ.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu sin(x + π/4) = −√3/2. Zapíš všetky riešenia.', answer: '<p>u = x + π/4: u = 4π/3 + 2kπ alebo u = 5π/3 + 2kπ.</p><p>x = u − π/4: x = 13π/12 + 2kπ alebo x = 17π/12 + 2kπ, k ∈ ℤ.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu sin 2x = √2/2 v intervale ⟨0; 2π).', answer: '<p>2x = π/4 + 2kπ alebo 2x = 3π/4 + 2kπ, teda x = π/8 + kπ alebo x = 3π/8 + kπ.</p><p>V intervale: x ∈ {π/8, 3π/8, 9π/8, 11π/8}.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu cos(x − π/6) = 1/2 v intervale ⟨−π; π⟩.', answer: '<p>x = π/6 ± π/3 + 2kπ: π/2 a −π/6 patria do ⟨−π; π⟩.</p><p>x ∈ {−π/6, π/2}.</p>' },
          { level: 'rozsirenie', text: 'Koľko riešení má rovnica sin(2x + π/5) = 0,4 v intervale ⟨0; 3π)? Zdôvodni.', answer: '<p>6. Ak x prebehne interval dĺžky 3π, tak 2x + π/5 prebehne interval dĺžky 6π, teda tri obehy, a v každom má sin u = 0,4 dve riešenia.</p>' },
          { level: 'bonus', text: 'Rieš rovnicu cos 3x = −1/2 v intervale ⟨0; π⟩.', answer: '<p>3x = 2π/3 + 2kπ alebo 3x = 4π/3 + 2kπ, teda x = 2π/9 + 2kπ/3 alebo x = 4π/9 + 2kπ/3.</p><p>V ⟨0; π⟩: x ∈ {2π/9, 4π/9, 8π/9}. (Ďalšie by boli 10π/9 a 14π/9, to je už viac ako π.)</p>' },
          { level: 'bonus', text: 'Rieš rovnicu sin(π/3 − x) = 1/2. Pozor na znamienko pri x.', answer: '<p>u = π/3 − x: u = π/6 + 2kπ alebo u = 5π/6 + 2kπ.</p><p>x = π/3 − u: x = π/6 − 2kπ = π/6 + 2mπ alebo x = −π/2 − 2kπ = −π/2 + 2mπ (m ∈ ℤ).</p><p>Skúška: sin(π/3 − π/6) = sin(π/6) = 1/2 ✓; sin(π/3 + π/2) = sin(5π/6) = 1/2 ✓.</p>' },
          { level: 'bonus', text: 'Nájdi všetky x ∈ ⟨0; 2π), pre ktoré platí cos(2x − π/3) = 1.', answer: '<p>2x − π/3 = 2kπ, teda x = π/6 + kπ. V intervale: x ∈ {π/6, 7π/6}.</p>' }
        ]
      },
      {
        id: 'work',
        type: 'notebook',
        phase: 'BEZ MOBILU',
        title: 'Samostatná úloha',
        html: '<p><span class="mini-label">ÚLOHA DO ZOŠITA</span><br>Rieš rovnicu <strong>sin(x + π/3) = −√2/2</strong> v intervale <strong>⟨0; 2π)</strong>. Napíš substitúciu, riešenie pre u, návrat k x, výber z intervalu a skúšku.</p>',
        model: '<strong>KONTROLA:</strong> u = x + π/3: sin u = −√2/2 ⇒ u = 5π/4 + 2kπ alebo u = 7π/4 + 2kπ. x = u − π/3: x = 11π/12 + 2kπ alebo x = 17π/12 + 2kπ. V ⟨0; 2π): x ∈ {11π/12, 17π/12}. Skúška: sin(11π/12 + 4π/12) = sin(5π/4) = −√2/2 ✓.'
      },
      {
        id: 'reflection',
        type: 'reflection',
        phase: 'SEBAHODNOTENIE',
        title: 'Čo už viem?',
        skills: [
          'návrat od u k x (smer posunu)',
          'delenie člena 2kπ pri sin(bx)',
          'výber riešení z intervalu',
          'kontrola dosadením'
        ],
        prompt: 'Označ, ako dobre by si teraz vyriešil/a podobnú rovnicu bez pomoci. Nie je to známka.'
      }
    ]
  }
});
