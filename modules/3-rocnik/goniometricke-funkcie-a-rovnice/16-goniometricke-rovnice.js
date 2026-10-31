MathPlatform.registerModule({
  id: '3-u01-h016',
  teacher: {
    placement: '3. ročník · Goniometrické funkcie, goniometrické, rovnice · Hodina 16 · Goniometrické rovnice (zložený argument)',
    prerequisites: [
      'rovnice sin u = a a cos u = a: špeciálne prípady a dve série riešení (hodiny 14–15)',
      'zložené funkcie sin(x − a), sin(bx) a ich grafy (hodina 6)',
      'sčítanie a odčítanie zlomkov so spoločným menovateľom',
      'riešenie lineárnych rovníc'
    ],
    planContent: [
      'Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka. Pracuje sa iba s funkciami sin a cos.'
    ],
    planPerformance: [
      'Poznať pojem jednotková kružnica.',
      'Vedieť zobraziť na jednotkovej kružnici ľubovoľné reálne číslo a priradiť reálne číslo bodu kružnice.',
      'Zadefinovať funkcie sin x, cos x, tg x, cotg x a opísať ich vlastnosti.',
      'Poznať a vedieť použiť goniometrické vzorce.',
      'Vyriešiť goniometrickú rovnicu.'
    ],
    goals: [
      'vyriešiť rovnice tvaru sin(x + a) = c a cos(x − a) = c pomocou substitúcie u = x ± a',
      'vyriešiť rovnice tvaru sin(bx) = c a cos(bx) = c a pochopiť, prečo sa perióda riešení skráti',
      'sčítať a odčítať násobky π (zlomky) pri návrate od u k x',
      'určiť počet riešení v intervale'
    ],
    competencies: [
      'substitúcia nového označenia u za zložitejší výraz',
      'presný zápis a úprava zlomkov s π',
      'kontrola riešenia dosadením do pôvodnej rovnice'
    ],
    enrichment: [
      'Návrh maturitného štandardu je použitý iba ako obohatenie: vizuálna kontrola riešenia na grafe a zdôvodnenie, prečo sa riešenia opakujú po π, nie po 2π.'
    ],
    flow: [
      '3 min: kde sme',
      '10 min: cos(x − π/5) = 1/2, graf a substitúcia u, scaffold na zlomky s π',
      '10 min: sin 2x = √3/2 a delenie obidvoch strán vrátane 2kπ',
      '15 min: zbierka úloh podľa úrovní v zošite',
      '5 min: samostatná úloha bez mobilu, sebahodnotenie'
    ],
    diagnostics: [
      'či žiak vie zaviesť substitúciu u a po vyriešení sa správne vráti k x',
      'či vie bezchybne spočítať π/3 + π/5 a podobné súčty',
      'či pri sin(bx) = c vydelí číslom b aj člen 2kπ'
    ],
    partialUse: [
      'Posun argumentu (x ± a) a násobok argumentu (bx) možno učiť samostatne; pri nedostatku času vynechaj bonusové úlohy.',
      'Riešenia v zbierke sa počas živej hodiny žiakom nezobrazujú.'
    ]
  },
  student: {
    title: 'Goniometrické rovnice so zloženým argumentom',
    subtitle: 'cos(x − π/5) = 1/2 a sin 2x = √3/2',
    intro: 'Ak vnútri sin alebo cos nie je iba x, rovnicu prevedieme na známu pomocou novej premennej u. Naučíš sa to na rovniciach s posunom a s dvojnásobným argumentom.',
    estimatedTime: '25–30 min + zbierka',
    activities: [
      {
        id: 'recap',
        type: 'explain',
        phase: 'KDE SME',
        title: 'Čo už vieme',
        html: '<p>Vieme vyriešiť <strong>sin u = a</strong> a <strong>cos u = a</strong>: nájdeme dva body na kružnici a pripočítame 2kπ.</p><p>V hodine 6 sme sa učili funkcie <strong>sin(x − a)</strong> a <strong>sin(bx)</strong>. Dnes ich budeme dávať do rovníc, kde vnútri funkcie nie je iba x. Trik je jednoduchý: <strong>zložitý výraz v zátvorke nahradíme novou premennou u</strong>.</p>'
      },
      {
        id: 'recall',
        type: 'choice',
        phase: 'OPAKUJ',
        skill: 'jednoduché rovnice',
        question: 'Aké sú všetky riešenia rovnice cos u = 1/2 (k je celé číslo)?',
        options: [
          'u = π/3 + 2kπ alebo u = −π/3 + 2kπ',
          'u = π/6 + 2kπ alebo u = 5π/6 + 2kπ',
          'u = π/3 + 2kπ alebo u = 2π/3 + 2kπ'
        ],
        answer: 0,
        correct: 'Správne. Body s x-súradnicou 1/2 ležia súmerne podľa osi x: uhly π/3 a −π/3.',
        hint: 'Pri cos u hľadáme x-súradnicu. Pre ktoré dva uhly je rovná 1/2?'
      },
      {
        id: 'topic-intro',
        type: 'intro',
        goals: [
          'vyriešiť rovnicu cos(x − π/5) = 1/2 pomocou substitúcie u = x − π/5',
          'vyriešiť rovnicu sin 2x = √3/2 a zdôvodniť kratšiu periódu riešení',
          'počítať s násobkami π (súčty zlomkov) bez chýb'
        ]
      },
      {
        id: 'graph',
        type: 'coordinatePlot',
        phase: 'POCHOP',
        title: 'cos(x − π/5) = 1/2 na grafe',
        html: '<p>Graf funkcie <strong>cos(x − π/5)</strong> je graf cos x posunutý doprava o π/5. Riešenia rovnice sú priesečníky s priamkou <strong>y = 1/2</strong>. V intervale ⟨0; 2π⟩ sú dva: <strong>8π/15</strong> a <strong>28π/15</strong>. Ako ich nájdeme výpočtom?</p>',
        xMin: 0, xMax: 6.283185307179586, yMin: -1.5, yMax: 1.5,
        xStep: 1.5707963267948966, yStep: 0.5,
        xTickFormat: v => (['0', 'π/2', 'π', '3π/2', '2π'][Math.round(v / (Math.PI / 2))] ?? String(v)),
        curves: [
          { fn: x => Math.cos(x - Math.PI / 5), label: 'cos(x − π/5)' },
          { fn: () => 0.5, color: '#5f8478', label: 'y = 1/2' }
        ],
        points: [
          { x: 8 * Math.PI / 15, y: 0.5, label: '8π/15' },
          { x: 28 * Math.PI / 15, y: 0.5, label: '28π/15' }
        ],
        ariaLabel: 'Graf cos x posunutý o pí pätín doprava a priamka y rovná sa jedna polovica, dva priesečníky'
      },
      {
        id: 'substitution-rule',
        type: 'explain',
        phase: 'NOVÝ POSTUP',
        title: 'Substitúcia u za zložitý argument',
        html: '<p>Rozmýšľame takto: <strong>cos(x − π/5) = 1/2</strong>. Označme <strong>u = x − π/5</strong>. Dostaneme obyčajnú rovnicu <strong>cos u = 1/2</strong>.</p><div class="example"><span class="mini-label">PRÍKLAD</span><p><strong>1. Substitúcia:</strong> u = x − π/5, rovnica cos u = 1/2.</p><p><strong>2. Riešime pre u:</strong> u = π/3 + 2kπ alebo u = −π/3 + 2kπ.</p><p><strong>3. Návrat k x:</strong> x = u + π/5.</p><p>x = π/3 + π/5 + 2kπ = 5π/15 + 3π/15 + 2kπ = <strong>8π/15 + 2kπ</strong></p><p>x = −π/3 + π/5 + 2kπ = −5π/15 + 3π/15 + 2kπ = <strong>−2π/15 + 2kπ</strong></p></div><p>Číslo −2π/15 + 2π = 28π/15, to je presne druhý priesečník z grafu.</p>',
        remember: 'Postup: nová premenná u → vyrieš pre u → vráť sa k x (u = x − a znamená x = u + a).'
      },
      {
        id: 'fractions-1',
        type: 'numberInput',
        phase: 'POUŽI',
        skill: 'zlomky s π',
        title: 'Súčet násobkov π',
        prompt: 'Pri návrate k x počítame π/3 + π/5. Zapíš výsledok v tvare (a/15)·π. Aké je číslo a?',
        validate: 'exact',
        answer: 8,
        success: 'Áno: π/3 + π/5 = 5π/15 + 3π/15 = 8π/15.',
        hint: 'Preveď zlomky na spoločný menovateľ 15: π/3 = ?π/15 a π/5 = ?π/15.',
        reveal: 'π/3 = 5π/15 a π/5 = 3π/15, súčet je 8π/15, teda a = 8.'
      },
      {
        id: 'fractions-2',
        type: 'numberInput',
        phase: 'POUŽI',
        skill: 'zlomky s π',
        title: 'Rozdiel násobkov π',
        prompt: 'Teraz druhá séria: −π/3 + π/5. Zapíš výsledok v tvare (a/15)·π. Aké je číslo a? (Môže byť záporné.)',
        validate: 'exact',
        answer: -2,
        success: 'Áno: −5π/15 + 3π/15 = −2π/15.',
        hint: 'Spoločný menovateľ 15: −π/3 = −5π/15 a π/5 = 3π/15.',
        reveal: '−π/3 = −5π/15 a π/5 = 3π/15, súčet je −2π/15, teda a = −2.'
      },
      {
        id: 'shift-sin',
        type: 'choice',
        phase: 'POUŽI',
        skill: 'substitúcia',
        question: 'Vyrieš rovnicu sin(x + π/6) = 1. Po substitúcii u = x + π/6 je u = π/2 + 2kπ. Ktoré riešenie pre x vyjde (k je celé číslo)?',
        options: [
          'x = 2π/3 + 2kπ',
          'x = π/3 + 2kπ',
          'x = π/2 + 2kπ'
        ],
        answer: 1,
        correct: 'Áno. Z u = x + π/6 dostaneme x = u − π/6 = π/2 − π/6 + 2kπ = π/3 + 2kπ.',
        hint: 'Keď je u = x + π/6, ako vyjadríš x? Pripočítaš, alebo odpočítaš π/6?'
      },
      {
        id: 'double-rule',
        type: 'explain',
        phase: 'NOVÝ POSTUP',
        title: 'Násobok argumentu: sin 2x = √3/2',
        html: '<p>Tu je substitúcia <strong>u = 2x</strong>. Rovnica sin u = √3/2 má riešenia u = π/3 + 2kπ alebo u = 2π/3 + 2kπ. Návrat: <strong>x = u/2</strong>.</p><div class="example"><span class="mini-label">PRÍKLAD</span><p>2x = π/3 + 2kπ ⇒ <strong>x = π/6 + kπ</strong></p><p>2x = 2π/3 + 2kπ ⇒ <strong>x = π/3 + kπ</strong></p></div><div class="warning"><strong>Pozor:</strong> deliť dvoma treba <strong>celú</strong> pravú stranu, aj člen 2kπ. Preto sa v riešení objaví kπ a riešenia sa opakujú po π, nie po 2π.</div><p>Skúška: sin(2 · π/6) = sin(π/3) = √3/2 ✓.</p>',
        remember: 'sin 2x = c: u = 2x, vyrieš pre u a potom vydeľ dvoma celú pravú stranu vrátane 2kπ.'
      },
      {
        id: 'find-error',
        type: 'choice',
        phase: 'NÁJDI CHYBU',
        skill: 'kritické myslenie',
        question: 'Žiak rieši rovnicu cos 2x = 1/2. Po substitúcii správne napíše 2x = π/3 + 2kπ a ďalej: „x = π/6 + 2kπ.“ Kde je chyba?',
        options: [
          'Chyby sa nedopustil.',
          'Mal deliť π/3 tromi namiesto dvoma.',
          'Nevydelil dvoma aj člen 2kπ: správne je x = π/6 + kπ.'
        ],
        answer: 2,
        correct: 'Presne. Z 2x = π/3 + 2kπ vyjde po delení dvoma x = π/6 + kπ.',
        hint: 'Deliš rovnicu 2x = π/3 + 2kπ číslom 2. Čo sa stane s každým členom na pravej strane?'
      },
      {
        id: 'count-2x',
        type: 'numberInput',
        phase: 'POUŽI',
        skill: 'počet riešení',
        title: 'Počet riešení sin 2x = √3/2',
        prompt: 'Rovnica sin 2x = √3/2 má riešenia x = π/6 + kπ a x = π/3 + kπ. Koľko z nich leží v intervale ⟨0; 2π)?',
        validate: 'exact',
        answer: 4,
        success: 'Áno: π/6, π/3, 7π/6 a 4π/3.',
        hint: 'Dosaď k = 0 a k = 1 do oboch zápisov a over, či sú výsledky menšie ako 2π.',
        reveal: 'Z prvej série: π/6 (k = 0) a 7π/6 (k = 1). Z druhej: π/3 (k = 0) a 4π/3 (k = 1). Pre k = 2 už presiahneme 2π, teda 4 riešenia.'
      },
      {
        id: 'matura-format',
        type: 'choice',
        phase: 'MATURITNÝ FORMÁT',
        skill: 'maturitný formát',
        question: 'Určte všetky riešenia rovnice sin 2x = 1 v intervale ⟨0; 2π⟩. Ktorá odpoveď je správna?',
        options: [
          'π/2 a 3π/2',
          'π/4 a 5π/4',
          'π/4 a 3π/4'
        ],
        answer: 1,
        correct: 'Áno. 2x = π/2 + 2kπ ⇒ x = π/4 + kπ; v ⟨0; 2π⟩ je to π/4 (k = 0) a 5π/4 (k = 1).',
        hint: 'Najprv vyrieš sin u = 1 pre u = 2x a potom vydeľ celú pravú stranu dvoma.'
      },
      {
        id: 'why-period',
        type: 'selfWrite',
        phase: 'VYSVETLI',
        skill: 'matematická komunikácia',
        title: 'Prečo kratšia perióda?',
        prompt: 'Vysvetli v 2–3 vetách, prečo sa pri rovnici sin 2x = c opakujú riešenia po π a nie po 2π.',
        model: 'Funkcia sin 2x prebehne celý svoj cyklus už na dĺžke π (argument 2x vtedy vzrastie o 2π). Preto sa aj jej hodnoty, a teda riešenia rovnice, opakujú po π. Algebraicky: z 2x = u + 2kπ po delení dvoma vychádza x = u/2 + kπ.'
      },
      {
        id: 'zbierka',
        type: 'taskList',
        phase: 'PRECVIČ',
        skill: 'zbierka',
        title: 'Zbierka úloh',
        html: '<p>Riešiš v zošite. Pri každej rovnici si napíš substitúciu u. Zaškrtni úlohu, keď ju máš hotovú. Správnosť sa nekontroluje automaticky; riešenie si môžeš zobraziť tlačidlom pri úlohe.</p>',
        items: [
          { level: 'zaklad', text: 'Rieš rovnicu cos(x − π/3) = 1.', answer: '<p>u = x − π/3 = 2kπ, teda x = π/3 + 2kπ, k ∈ ℤ.</p>' },
          { level: 'zaklad', text: 'Rieš rovnicu sin(x + π/4) = 0.', answer: '<p>u = x + π/4 = kπ, teda x = −π/4 + kπ, k ∈ ℤ.</p>' },
          { level: 'zaklad', text: 'Rieš rovnicu sin 2x = 1.', answer: '<p>2x = π/2 + 2kπ, teda x = π/4 + kπ, k ∈ ℤ.</p>' },
          { level: 'zaklad', text: 'Rieš rovnicu cos 2x = 0.', answer: '<p>2x = π/2 + kπ, teda x = π/4 + kπ/2, k ∈ ℤ.</p>' },
          { level: 'zaklad', text: 'Rieš rovnicu cos(x − π/6) = 2. Zdôvodni výsledok.', answer: '<p>Rovnica nemá riešenie: kosínus nikdy nie je väčší ako 1, bez ohľadu na to, čo je v zátvorke.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu sin(x − π/4) = √2/2.', answer: '<p>u = x − π/4: u = π/4 + 2kπ alebo u = 3π/4 + 2kπ.</p><p>x = u + π/4: x = π/2 + 2kπ alebo x = π + 2kπ, k ∈ ℤ.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu cos(x + π/6) = −1/2.', answer: '<p>u = x + π/6: u = 2π/3 + 2kπ alebo u = 4π/3 + 2kπ.</p><p>x = u − π/6: x = 2π/3 − π/6 = π/2 + 2kπ alebo x = 4π/3 − π/6 = 7π/6 + 2kπ, k ∈ ℤ.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu cos(x − π/5) = −1/2. Zapíš všetky riešenia.', answer: '<p>u = x − π/5: u = 2π/3 + 2kπ alebo u = 4π/3 + 2kπ.</p><p>x = u + π/5: x = 10π/15 + 3π/15 = 13π/15 + 2kπ alebo x = 20π/15 + 3π/15 = 23π/15 + 2kπ, k ∈ ℤ.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu sin 2x = −1/2 v intervale ⟨0; π).', answer: '<p>2x = 7π/6 + 2kπ alebo 2x = 11π/6 + 2kπ, teda x = 7π/12 + kπ alebo x = 11π/12 + kπ.</p><p>V ⟨0; π): x ∈ {7π/12, 11π/12}.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu cos 2x = √2/2. Zapíš všetky riešenia.', answer: '<p>2x = π/4 + 2kπ alebo 2x = −π/4 + 2kπ, teda x = π/8 + kπ alebo x = −π/8 + kπ, k ∈ ℤ.</p>' },
          { level: 'bonus', text: 'Rieš rovnicu sin(2x − π/3) = √3/2.', answer: '<p>u = 2x − π/3: u = π/3 + 2kπ alebo u = 2π/3 + 2kπ.</p><p>2x = u + π/3: 2x = 2π/3 + 2kπ alebo 2x = π + 2kπ.</p><p>x = π/3 + kπ alebo x = π/2 + kπ, k ∈ ℤ.</p>' },
          { level: 'bonus', text: 'Rieš rovnicu cos(x/2) = 1/2. Aká je perióda riešení?', answer: '<p>u = x/2: u = ±π/3 + 2kπ, teda x = 2u = ±2π/3 + 4kπ, k ∈ ℤ. Perióda riešení je 4π.</p>' },
          { level: 'bonus', text: 'Koľko riešení má rovnica cos 3x = 1/2 v intervale ⟨0; 2π)? Zdôvodni bez vypisovania riešení.', answer: '<p>6. Ak x prebehne ⟨0; 2π), tak u = 3x prebehne ⟨0; 6π), teda tri obehy, a v každom má cos u = 1/2 dve riešenia: 3 · 2 = 6.</p>' }
        ]
      },
      {
        id: 'work',
        type: 'notebook',
        phase: 'BEZ MOBILU',
        title: 'Samostatná úloha',
        html: '<p><span class="mini-label">ÚLOHA DO ZOŠITA</span><br>Rieš rovnicu <strong>cos(x − π/5) = −√2/2</strong>. Zapíš substitúciu, riešenie pre u, návrat k x a všetky riešenia.</p>',
        model: '<strong>KONTROLA:</strong> u = x − π/5, cos u = −√2/2 ⇒ u = 3π/4 + 2kπ alebo u = 5π/4 + 2kπ. Potom x = u + π/5: x = 15π/20 + 4π/20 = 19π/20 + 2kπ alebo x = 25π/20 + 4π/20 = 29π/20 + 2kπ, k ∈ ℤ.'
      },
      {
        id: 'reflection',
        type: 'reflection',
        phase: 'SEBAHODNOTENIE',
        title: 'Čo už viem?',
        skills: [
          'substitúcia u = x ± a',
          'súčet a rozdiel zlomkov s π',
          'rovnice sin(bx) = c, cos(bx) = c',
          'kratšia perióda riešení'
        ],
        prompt: 'Označ, ako dobre by si teraz vyriešil/a podobnú rovnicu bez pomoci. Nie je to známka.'
      }
    ]
  }
});
