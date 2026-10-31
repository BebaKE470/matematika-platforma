MathPlatform.registerModule({
  id: '3-u01-h014',
  teacher: {
    placement: '3. ročník · Goniometrické funkcie, goniometrické, rovnice · Hodina 14 · Jednoduché goniometrické rovnice',
    prerequisites: [
      'jednotková kružnica: sin x je y-ová a cos x je x-ová súradnica bodu (hodina 1)',
      'grafy funkcií sin x a cos x, oborom hodnôt ⟨−1; 1⟩ a periodicita 2π (hodiny 2–3)',
      'hodnoty sin a cos pre uhly 0, π/6, π/4, π/3, π/2 z 2. ročníka',
      'zápis intervalov a práca s násobkami π'
    ],
    planContent: [
      'Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka. V tomto bloku sa pracuje iba s funkciami sin a cos.'
    ],
    planPerformance: [
      'Poznať pojem jednotková kružnica.',
      'Vedieť zobraziť na jednotkovej kružnici ľubovoľné reálne číslo a priradiť reálne číslo bodu kružnice.',
      'Zadefinovať funkcie sin x, cos x, tg x, cotg x a opísať ich vlastnosti.',
      'Poznať a vedieť použiť goniometrické vzorce.',
      'Vyriešiť goniometrickú rovnicu.'
    ],
    goals: [
      'vyriešiť rovnice sin x = a a cos x = a pre špeciálne hodnoty a = 0, 1, −1',
      'rozhodnúť, kedy rovnica sin x = a alebo cos x = a nemá riešenie (|a| > 1)',
      'nájsť na jednotkovej kružnici dva body pre a = ±1/2, ±√2/2, ±√3/2 a zapísať všetky riešenia pomocou 2kπ',
      'vybrať z množiny všetkých riešení tie, ktoré patria do daného intervalu'
    ],
    competencies: [
      'prepájať jednotkovú kružnicu, graf funkcie a algebraický zápis riešenia',
      'zapísať nekonečnú množinu riešení pomocou celého čísla k',
      'zdôvodniť, prečo rovnica má dve série riešení'
    ],
    enrichment: [
      'Návrh maturitného štandardu je použitý iba ako obohatenie: prechod medzi reprezentáciami (kružnica, graf, zápis) a zdôvodnenie počtu riešení.',
      'Tangens a kotangens sa v tomto bloku nepoužívajú.'
    ],
    flow: [
      '5 min: kde sme (kružnica, grafy, periodicita) a krátke opakovanie',
      '10 min: sin x = 1, 0, −1 a cos x = 1, 0, −1 cez graf a kružnicu; rovnice bez riešenia',
      '10 min: sin x = 1/2 a cos x = √2/2: dva body na kružnici, dve série riešení',
      '10 min: zbierka úloh podľa úrovní (ZÁKLAD / ROZŠÍRENIE / BONUS) v zošite',
      '5 min: samostatná úloha bez mobilu a sebahodnotenie'
    ],
    diagnostics: [
      'či žiak vie, ktorú súradnicu bodu na kružnici hľadá (y pri sin, x pri cos)',
      'či zapíše pri sin x = 0 a cos x = 0 správnu periódu kπ a pri ostatných 2kπ',
      'či nájde obe riešenia v ⟨0; 2π) a nezabudne na druhý bod na kružnici',
      'či vie, že rovnica sin x = 2 nemá riešenie'
    ],
    partialUse: [
      'Prvú polovicu (špeciálne prípady) a druhú polovicu (dva body na kružnici) možno použiť samostatne.',
      'Zbierku úloh možno zadať ako domácu úlohu; riešenia sa žiakovi zobrazia až po jeho kliknutí a počas živej hodiny sa skryjú.'
    ]
  },
  student: {
    title: 'Jednoduché goniometrické rovnice',
    subtitle: 'sin x = a a cos x = a',
    intro: 'Z rovnice sin x = a zistíš, ktoré čísla x majú na jednotkovej kružnici y-súradnicu a. Najprv pre špeciálne hodnoty 1, 0, −1, potom pre 1/2, √2/2 a √3/2.',
    estimatedTime: '25–30 min + zbierka',
    activities: [
      {
        id: 'recap',
        type: 'explain',
        phase: 'KDE SME',
        title: 'Čo už vieme',
        html: '<p>V hodinách 1–13 sme zaviedli jednotkovú kružnicu a funkcie <strong>sin x</strong> a <strong>cos x</strong>. Vieme, že ich hodnoty ležia v ⟨−1; 1⟩ a že sa opakujú po <strong>2π</strong>.</p><p>Dnes ich použijeme opačne: <strong>hodnotu poznáme a hľadáme číslo x</strong>. Takej úlohe hovoríme goniometrická rovnica. Pracujeme iba s funkciami sin a cos.</p>'
      },
      {
        id: 'recall',
        type: 'choice',
        phase: 'OPAKUJ',
        skill: 'jednotková kružnica',
        question: 'Bod na jednotkovej kružnici zodpovedá reálnemu číslu x. Ktorú súradnicu tohto bodu udáva hodnota sin x?',
        options: [
          'Jeho x-ovú súradnicu.',
          'Jeho y-ovú súradnicu.',
          'Jeho vzdialenosť od stredu kružnice.'
        ],
        answer: 1,
        correct: 'Áno. sin x je y-ová súradnica a cos x je x-ová súradnica bodu.',
        hint: 'Spomeň si, ktorá súradnica sa mení pri hornom a dolnom okraji kružnice.'
      },
      {
        id: 'topic-intro',
        type: 'intro',
        goals: [
          'vyriešiť rovnice sin x = a a cos x = a pre špeciálne hodnoty 0, 1 a −1',
          'nájsť dva body na kružnici pre hodnoty 1/2, √2/2 a √3/2',
          'zapísať všetky riešenia pomocou 2kπ a vybrať tie z daného intervalu'
        ]
      },
      {
        id: 'graph-sin-1',
        type: 'coordinatePlot',
        phase: 'POCHOP',
        title: 'Čo znamená rovnica sin x = 1',
        html: '<p>Rovnica <strong>sin x = 1</strong> sa pýta: v ktorých číslach x má graf funkcie sin x hodnotu 1? Hľadáme priesečníky grafu s priamkou <strong>y = 1</strong> (zelená).</p><p>Priamka sa grafu dotýka v nekonečne veľa bodoch, vždy po obehu 2π.</p>',
        xMin: -6.283185307179586, xMax: 6.283185307179586, yMin: -1.5, yMax: 1.5,
        xStep: 1.5707963267948966, yStep: 0.5,
        xTickFormat: v => {
          const k = Math.round(v / (Math.PI / 2));
          if (k === 0) return '0';
          const a = Math.abs(k), sign = k < 0 ? '−' : '';
          if (a === 1) return sign + 'π/2';
          return sign + (a % 2 === 0 ? (a / 2 === 1 ? 'π' : (a / 2) + 'π') : a + 'π/2');
        },
        curves: [
          { fn: x => Math.sin(x), label: 'sin x' },
          { fn: () => 1, color: '#5f8478', label: 'y = 1' }
        ],
        points: [
          { x: Math.PI / 2, y: 1, label: 'π/2' },
          { x: -3 * Math.PI / 2, y: 1, label: '−3π/2' }
        ],
        ariaLabel: 'Graf funkcie sin x a priamka y rovná sa 1, dotýkajú sa v bodoch π/2 a mínus 3π/2'
      },
      {
        id: 'special-cases',
        type: 'explain',
        phase: 'NOVÝ POJEM',
        title: 'Špeciálne prípady: 1, 0 a −1',
        html: '<p>V týchto prípadoch je na kružnici jediný bod (alebo dva body ležiace presne oproti sebe), preto sa riešenia dajú zapísať jednoducho. <strong>k je ľubovoľné celé číslo</strong> (k ∈ ℤ): koľkokrát sme kružnicu obehli.</p><div class="formula">sin x = 1 ⇔ x = π/2 + 2kπ</div><div class="formula">sin x = −1 ⇔ x = −π/2 + 2kπ (to isté ako 3π/2 + 2kπ)</div><div class="formula">sin x = 0 ⇔ x = kπ</div><div class="formula">cos x = 1 ⇔ x = 2kπ</div><div class="formula">cos x = −1 ⇔ x = π + 2kπ</div><div class="formula">cos x = 0 ⇔ x = π/2 + kπ</div><p>Pri <strong>sin x = 0</strong> a <strong>cos x = 0</strong> sú na kružnici dva body proti sebe, preto sa riešenia opakujú už po <strong>π</strong>, nie po 2π.</p><div class="warning"><strong>Pozor:</strong> sin x aj cos x ležia v ⟨−1; 1⟩. Rovnice <strong>sin x = 2</strong> alebo <strong>cos x = −1,5</strong> preto nemajú žiadne riešenie.</div>',
        remember: 'k ∈ ℤ. Pri hodnotách 1 a −1 pridávame 2kπ; pri hodnote 0 stačí kπ.'
      },
      {
        id: 'check-minus-one',
        type: 'choice',
        phase: 'OVER SI',
        skill: 'špeciálne prípady',
        question: 'Vyrieš rovnicu sin x = −1. Ktorý zápis všetkých riešení je správny (k je celé číslo)?',
        options: [
          'x = π/2 + 2kπ',
          'x = 3π/2 + kπ',
          'x = 3π/2 + 2kπ'
        ],
        answer: 2,
        correct: 'Správne. Hodnotu −1 má sin x v najnižšom bode kružnice (3π/2) a znova po každom celom obehu 2π.',
        hint: 'Kde na kružnici je y = −1? A po koľkých radiánoch sa bod vráti na to isté miesto?'
      },
      {
        id: 'solvable',
        type: 'sortChoice',
        phase: 'OVER SI',
        skill: 'existencia riešenia',
        title: 'Má rovnica riešenie?',
        question: 'Zaraď každú rovnicu: má aspoň jedno riešenie, alebo nemá žiadne?',
        labels: ['Má riešenie', 'Nemá riešenie'],
        items: [
          { text: 'sin x = 0,8', answer: true, why: 'Číslo 0,8 leží v ⟨−1; 1⟩, takže existuje bod kružnice s y = 0,8.' },
          { text: 'cos x = 2', answer: false, why: 'cos x nikdy nie je väčší ako 1.' },
          { text: 'cos x = 0', answer: true, why: 'Riešením je x = π/2 + kπ.' },
          { text: 'sin x = −1,2', answer: false, why: 'sin x nikdy nie je menší ako −1.' },
          { text: 'sin x = −1', answer: true, why: 'Riešením je x = 3π/2 + 2kπ.' }
        ]
      },
      {
        id: 'count-interval',
        type: 'numberInput',
        phase: 'POUŽI',
        skill: 'interval',
        title: 'Koľko riešení v intervale?',
        prompt: 'Rovnica cos x = 0 má všetky riešenia x = π/2 + kπ. Koľko z nich leží v intervale ⟨0; 2π)?',
        validate: 'exact',
        answer: 2,
        success: 'Sú to π/2 (pre k = 0) a 3π/2 (pre k = 1).',
        hint: 'Dosadzuj k = 0, 1, 2, … a sleduj, ktoré hodnoty ešte patria do intervalu.',
        reveal: 'k = 0 dá π/2, k = 1 dá 3π/2, k = 2 dá 5π/2, a to už je väčšie ako 2π. Správna odpoveď je 2.'
      },
      {
        id: 'two-points-visual',
        type: 'info',
        phase: 'POCHOP',
        title: 'Rovnica sin x = 1/2: na kružnici sú dva body',
        html: '<div class="coordinate-wrap"><svg class="coordinate-plot" viewBox="0 0 520 360" role="img" aria-label="Jednotková kružnica s vodorovnou priamkou y rovná sa jedna polovica, ktorá pretína kružnicu v bodoch pre uhly pí šestín a päť pí šestín"><line x1="50" y1="180" x2="470" y2="180" class="plot-axis"/><line x1="260" y1="25" x2="260" y2="335" class="plot-axis"/><circle cx="260" cy="180" r="125" fill="none" stroke="#173d35" stroke-width="4"/><line x1="110" y1="117.5" x2="410" y2="117.5" stroke="#5f8478" stroke-width="3" stroke-dasharray="7 5"/><line x1="260" y1="180" x2="368.25" y2="117.5" stroke="#173d35" stroke-width="2"/><line x1="260" y1="180" x2="151.75" y2="117.5" stroke="#173d35" stroke-width="2"/><circle cx="368.25" cy="117.5" r="6" class="plot-point"/><circle cx="151.75" cy="117.5" r="6" class="plot-point"/><text x="376" y="108" class="plot-point-label">π/6</text><text x="94" y="108" class="plot-point-label">5π/6</text><text x="414" y="122" class="plot-point-label">y = 1/2</text><text x="445" y="170" class="plot-axis-name">x</text><text x="270" y="38" class="plot-axis-name">y</text></svg></div><p>Hľadáme body kružnice s y-súradnicou <strong>1/2</strong>. Vodorovná priamka y = 1/2 pretína kružnicu <strong>dvakrát</strong>: v bode zodpovedajúcom číslu <strong>π/6</strong> a v bode zodpovedajúcom číslu <strong>5π/6</strong> (= π − π/6).</p>'
      },
      {
        id: 'two-series',
        type: 'explain',
        phase: 'NOVÝ POJEM',
        title: 'Dve série riešení',
        html: '<p>Pre hodnotu rôznu od ±1 a 0 nájdeme na kružnici <strong>dva body</strong> a ku každému pripočítame <strong>2kπ</strong>.</p><div class="formula">sin x = 1/2 ⇔ x = π/6 + 2kπ alebo x = 5π/6 + 2kπ</div><div class="formula">cos x = 1/2 ⇔ x = π/3 + 2kπ alebo x = −π/3 + 2kπ</div><p>Pri cos x hľadáme body s <strong>x-ovou</strong> súradnicou 1/2, ležia súmerne podľa osi x, preto je druhé riešenie −π/3 (to isté ako 5π/3).</p><ol class="steps"><li>Skontroluj, či <strong>|a| ≤ 1</strong>. Ak nie, rovnica nemá riešenie.</li><li>Na kružnici nájdi body s y = a (pri sin) alebo x = a (pri cos).</li><li>Zapíš ich v intervale ⟨0; 2π) alebo pomocou záporného uhla.</li><li>Ku každému pripočítaj <strong>2kπ</strong>, k ∈ ℤ.</li></ol><p><strong>Hodnoty na zapamätanie</strong> (pre prvý kvadrant): sin π/6 = 1/2, sin π/4 = √2/2, sin π/3 = √3/2 a cos π/3 = 1/2, cos π/4 = √2/2, cos π/6 = √3/2.</p>',
        remember: 'Dve série riešení: dva body na kružnici, ku každému 2kπ. Najprv skontroluj |a| ≤ 1.'
      },
      {
        id: 'cos-sqrt2',
        type: 'choice',
        phase: 'POUŽI',
        skill: 'dve série riešení',
        question: 'Vyrieš rovnicu cos x = √2/2. Ktorý zápis všetkých riešení je správny (k je celé číslo)?',
        options: [
          'x = π/4 + 2kπ alebo x = 3π/4 + 2kπ',
          'x = π/4 + 2kπ alebo x = −π/4 + 2kπ',
          'x = π/4 + kπ'
        ],
        answer: 1,
        correct: 'Áno. Body s x-ovou súradnicou √2/2 ležia súmerne podľa osi x, preto sú to uhly π/4 a −π/4.',
        hint: 'Pri cos x je hodnota x-ová súradnica. V ktorých dvoch kvadrantoch je kladná?'
      },
      {
        id: 'sin-neg-half',
        type: 'choice',
        phase: 'POUŽI',
        skill: 'záporná hodnota',
        question: 'Rovnica sin x = −1/2 má v intervale ⟨0; 2π) práve dve riešenia. Ktoré to sú?',
        options: [
          '7π/6 a 11π/6',
          'π/6 a 5π/6',
          '5π/6 a 7π/6'
        ],
        answer: 0,
        correct: 'Správne. y = −1/2 je pod osou x, teda v III. a IV. kvadrante: π + π/6 = 7π/6 a 2π − π/6 = 11π/6.',
        hint: 'Záporné y znamená body pod osou x. Ktoré kvadranty to sú?'
      },
      {
        id: 'why-infinite',
        type: 'selfWrite',
        phase: 'VYSVETLI',
        skill: 'matematická komunikácia',
        title: 'Prečo nekonečne veľa riešení?',
        prompt: 'Vysvetli spolužiakovi v 2–3 vetách, prečo má rovnica sin x = 1/2 nekonečne veľa riešení, hoci na jednotkovej kružnici sú len dva body s y-súradnicou 1/2.',
        model: 'Každému bodu kružnice zodpovedá nekonečne veľa čísel x, líšia sa o celé násobky obvodu 2π (vždy ten istý bod po ďalšom obehu). Preto k obom základným riešeniam π/6 a 5π/6 pripočítame 2kπ pre každé celé k.'
      },
      {
        id: 'zbierka',
        type: 'taskList',
        phase: 'PRECVIČ',
        skill: 'zbierka',
        title: 'Zbierka úloh',
        html: '<p>Riešiš v zošite. Najprv si vždy nakresli jednotkovú kružnicu a vyznač hľadané body. Zaškrtni úlohu, keď ju máš hotovú. Správnosť sa nekontroluje automaticky, riešenie si môžeš zobraziť tlačidlom pri úlohe.</p>',
        items: [
          { level: 'zaklad', text: 'Rieš rovnicu sin x = 0.', answer: '<p>x = kπ, k ∈ ℤ.</p>' },
          { level: 'zaklad', text: 'Rieš rovnicu cos x = 1.', answer: '<p>x = 2kπ, k ∈ ℤ.</p>' },
          { level: 'zaklad', text: 'Rieš rovnicu sin x = −1.', answer: '<p>x = 3π/2 + 2kπ (to isté ako −π/2 + 2kπ), k ∈ ℤ.</p>' },
          { level: 'zaklad', text: 'Rieš rovnicu cos x = 0 v intervale ⟨0; 2π).', answer: '<p>x = π/2 + kπ; v intervale: x ∈ {π/2, 3π/2}.</p>' },
          { level: 'zaklad', text: 'Rieš rovnicu sin x = 3. Zdôvodni výsledok jednou vetou.', answer: '<p>Rovnica nemá riešenie, pretože sin x ≤ 1 pre každé x.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu sin x = √3/2. Zapíš všetky riešenia.', answer: '<p>x = π/3 + 2kπ alebo x = 2π/3 + 2kπ, k ∈ ℤ.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu cos x = −1/2. Zapíš všetky riešenia.', answer: '<p>x-ová súradnica −1/2 je v II. a III. kvadrante: x = 2π/3 + 2kπ alebo x = 4π/3 + 2kπ (to isté ako −2π/3 + 2kπ), k ∈ ℤ.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu sin x = −√2/2 v intervale ⟨0; 2π).', answer: '<p>III. a IV. kvadrant: x ∈ {5π/4, 7π/4}.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu cos x = √3/2 v intervale ⟨−π; π⟩.', answer: '<p>x ∈ {−π/6, π/6}.</p>' },
          { level: 'bonus', text: 'Rieš rovnicu sin x = 1/2 v intervale ⟨−2π; 2π⟩. Zapíš všetky riešenia.', answer: '<p>Základné: π/6 a 5π/6. Posun o −2π: π/6 − 2π = −11π/6 a 5π/6 − 2π = −7π/6.</p><p>x ∈ {−11π/6, −7π/6, π/6, 5π/6}.</p>' },
          { level: 'bonus', text: 'Koľko riešení má rovnica cos x = 0,3 v intervale ⟨0; 6π)? Zdôvodni bez toho, aby si ich vypisoval/a.', answer: '<p>6. V každom intervale dĺžky 2π (⟨0; 2π), ⟨2π; 4π), ⟨4π; 6π)) má rovnica práve dve riešenia a v ⟨0; 6π) sú tri také intervaly.</p>' },
          { level: 'bonus', text: 'Koľko riešení má rovnica cos x = 0 v intervale ⟨0; 5π⟩? Vypíš ich.', answer: '<p>x = π/2 + kπ: π/2, 3π/2, 5π/2, 7π/2, 9π/2. Spolu 5 riešení (11π/2 je už väčšie ako 5π).</p>' }
        ]
      },
      {
        id: 'work',
        type: 'notebook',
        phase: 'BEZ MOBILU',
        title: 'Samostatná úloha',
        html: '<p><span class="mini-label">ÚLOHA DO ZOŠITA</span><br>Rieš rovnicu <strong>sin x = −√3/2</strong> najprv v intervale ⟨0; 2π), potom pre všetky reálne x. Nakresli jednotkovú kružnicu a vyznač oba body.</p>',
        model: '<strong>KONTROLA:</strong> y-súradnica −√3/2 je v III. a IV. kvadrante, v ⟨0; 2π) sú to 4π/3 a 5π/3. Všetky riešenia: x = 4π/3 + 2kπ alebo x = 5π/3 + 2kπ, k ∈ ℤ.'
      },
      {
        id: 'reflection',
        type: 'reflection',
        phase: 'SEBAHODNOTENIE',
        title: 'Čo už viem?',
        skills: [
          'špeciálne prípady 1, 0, −1',
          'rovnica bez riešenia (|a| > 1)',
          'dva body na kružnici pre 1/2, √2/2, √3/2',
          'zápis všetkých riešení s 2kπ'
        ],
        prompt: 'Označ, ako dobre by si teraz vyriešil/a podobnú rovnicu bez pomoci. Nie je to známka.'
      }
    ]
  }
});
