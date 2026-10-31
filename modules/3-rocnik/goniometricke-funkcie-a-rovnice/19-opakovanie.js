MathPlatform.registerModule({
  id: '3-u01-h019',
  teacher: {
    placement: '3. ročník · Goniometrické funkcie, goniometrické, rovnice · Hodina 19 · Opakovanie (príprava na písomku)',
    prerequisites: [
      'rovnice sin x = a a cos x = a vrátane výberu riešení z intervalu (hodiny 14–15)',
      'rovnice so zloženým argumentom a substitúciou u (hodiny 16–17)',
      'rovnice kvadratické vzhľadom na sin x alebo cos x a substitúcia t (hodina 18)'
    ],
    planContent: [
      'Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka. Opakovanie goniometrických rovníc pred kontrolnou písomnou prácou; pracuje sa iba s funkciami sin a cos.'
    ],
    planPerformance: [
      'Poznať pojem jednotková kružnica.',
      'Vedieť zobraziť na jednotkovej kružnici ľubovoľné reálne číslo a priradiť reálne číslo bodu kružnice.',
      'Zadefinovať funkcie sin x, cos x, tg x, cotg x a opísať ich vlastnosti.',
      'Poznať a vedieť použiť goniometrické vzorce.',
      'Vyriešiť goniometrickú rovnicu.'
    ],
    goals: [
      'rozpoznať typ goniometrickej rovnice (základná, so zloženým argumentom, kvadratická) a zvoliť správny postup',
      'zopakovať typické pasce: uzavretý a otvorený koniec intervalu, nulový výraz, koreň mimo ⟨−1; 1⟩',
      'sebahodnotením zistiť, ktorý typ je potrebné ešte precvičiť pred písomkou'
    ],
    competencies: [
      'voľba stratégie podľa tvaru rovnice',
      'presný zápis riešenia a kontrola v intervale',
      'sebahodnotenie vlastného porozumenia'
    ],
    enrichment: [
      'Návrh maturitného štandardu je použitý iba ako obohatenie: voľba metódy, zdôvodnenie postupu a hľadanie chyby.'
    ],
    flow: [
      '4 min: mapa celku (tri typy rovníc)',
      '12 min: rozpoznanie typu, krátke úlohy na typické pasce',
      '20 min: zbierka zmiešaných úloh podľa úrovní v zošite',
      '5 min: samostatná úloha bez mobilu a sebahodnotenie, výsledok ukáže, čo ešte precvičiť'
    ],
    diagnostics: [
      'či žiak vie z tvaru rovnice určiť postup (základná / substitúcia u / substitúcia t)',
      'či rozlišuje ⟨0; 2π) a ⟨0; 2π⟩',
      'sebahodnotenie podľa typov rovníc ukáže, čo treba pred písomkou zopakovať'
    ],
    partialUse: [
      'Modul možno použiť ako domáce opakovanie pred písomkou; zbierku úloh si žiaci vyberú podľa úrovne.',
      'Riešenia v zbierke sa počas živej hodiny žiakom nezobrazujú.'
    ]
  },
  student: {
    title: 'Mapa celku: goniometrické rovnice',
    subtitle: 'Tri typy, jedna stratégia',
    intro: 'Pred písomkou si zopakuješ všetky tri typy rovníc, naučíš sa ich rozpoznať podľa tvaru a vyskúšaš zmiešané úlohy.',
    estimatedTime: '20–25 min + zbierka',
    activities: [
      {
        id: 'topic-intro',
        type: 'intro',
        goals: [
          'rozpoznať typ goniometrickej rovnice podľa jej tvaru',
          'zvoliť postup: základná rovnica, substitúcia u alebo substitúcia t',
          'vyhnúť sa typickým pasciam v intervale a pri koreňoch'
        ]
      },
      {
        id: 'map',
        type: 'explain',
        phase: 'KDE SME',
        title: 'Mapa celku: tri typy rovníc',
        html: '<div class="term-list"><div class="term-item no-symbol"><div class="term-name">Typ A: sin x = a, cos x = a</div><p class="term-rule">Skontroluj |a| ≤ 1, nájdi dva body na kružnici (špeciálne 1, 0, −1: jeden), pripočítaj 2kπ.</p></div><div class="term-item no-symbol"><div class="term-name">Typ B: zložený argument, napr. cos(x − π/5) = 1/2, sin 2x = c</div><p class="term-rule">Substitúcia u = argument, vyrieš sin u = a, vráť sa: x = u + π/5, x = u/2 (deliš aj 2kπ).</p></div><div class="term-item no-symbol"><div class="term-name">Typ C: kvadratická, napr. 2sin²x − sin x − 1 = 0</div><p class="term-rule">Substitúcia t = sin x, kvadratická rovnica pre t, vyraď |t| &gt; 1, potom sin x = t.</p></div></div><p>Dobrá správa: typy sa dajú <strong>kombinovať</strong>. Pri rovnici C so zloženým argumentom použiješ obe substitúcie za sebou. Na konci vždy vyber riešenia z intervalu (ak je zadaný) a skontroluj jedno dosadením.</p>'
      },
      {
        id: 'type-matrix',
        type: 'matrix',
        phase: 'OVER SI',
        skill: 'rozpoznanie typu',
        title: 'Ktorý je to typ?',
        labels: ['Typ A: základná', 'Typ B: zložený argument', 'Typ C: kvadratická'],
        items: [
          { text: 'sin x = −√2/2', answer: 'Typ A: základná' },
          { text: 'cos(x + π/3) = 1/2', answer: 'Typ B: zložený argument' },
          { text: '2cos²x − cos x − 1 = 0', answer: 'Typ C: kvadratická' },
          { text: 'sin 3x = 0', answer: 'Typ B: zložený argument' },
          { text: 'cos x = 3/2', answer: 'Typ A: základná' },
          { text: '4sin²x = 1', answer: 'Typ C: kvadratická' }
        ]
      },
      {
        id: 'first-step',
        type: 'choice',
        phase: 'OVER SI',
        skill: 'voľba postupu',
        question: 'Aký je správny prvý krok pri riešení rovnice 2sin²x + 3sin x + 1 = 0?',
        options: [
          'Vydeliť obe strany výrazom sin x.',
          'Zaviesť substitúciu t = sin x a riešiť 2t² + 3t + 1 = 0.',
          'Hneď písať x = π/6 + 2kπ.'
        ],
        answer: 1,
        correct: 'Áno. Rovnica je kvadratická vzhľadom na sin x. Korene t = −1/2 a t = −1 sú obe prípustné.',
        hint: 'Rovnica obsahuje sin²x aj sin x. Aký typ rovnice to pripomína?'
      },
      {
        id: 'count-6pi',
        type: 'numberInput',
        phase: 'POUŽI',
        skill: 'počet riešení',
        title: 'Počet riešení v dlhom intervale',
        prompt: 'Koľko riešení má rovnica sin x = 1/3 v intervale ⟨0; 6π)?',
        validate: 'exact',
        answer: 6,
        success: 'Áno. V každom obehu ⟨0; 2π) sú dve riešenia a interval ⟨0; 6π) má tri obehy.',
        hint: 'Koľko riešení je v jednom obehu 2π a koľko obehov je v 6π?',
        reveal: 'Priamka y = 1/3 pretína kružnicu dvakrát na každý obeh. Tri obehy dajú 3 · 2 = 6 riešení.'
      },
      {
        id: 'trap-closed',
        type: 'numberInput',
        phase: 'PASCA',
        skill: 'interval',
        title: 'Uzavretý koniec intervalu',
        prompt: 'Rovnica sin 2x = 0 má riešenia x = kπ/2. Koľko z nich leží v UZAVRETOM intervale ⟨0; 2π⟩?',
        validate: 'exact',
        answer: 5,
        success: 'Áno: 0, π/2, π, 3π/2 a 2π. V uzavretom intervale patria obe krajné hodnoty.',
        hint: 'Dosadzuj k = 0, 1, 2, … a nezabudni, že pri ⟨0; 2π⟩ patria do intervalu aj čísla 0 a 2π.',
        reveal: 'k = 0, 1, 2, 3, 4 dáva 0, π/2, π, 3π/2, 2π a všetky patria do ⟨0; 2π⟩. Odpoveď je 5. (V otvorenom ⟨0; 2π) by 2π nepatrilo.)'
      },
      {
        id: 'matura-format',
        type: 'choice',
        phase: 'MATURITNÝ FORMÁT',
        skill: 'maturitný formát',
        question: 'Určte všetky riešenia rovnice cos(x − π/3) = −1/2 v intervale ⟨0; 2π). Ktorá odpoveď je správna?',
        options: [
          'π a 5π/3',
          'π/3 a π',
          '2π/3 a 4π/3'
        ],
        answer: 0,
        correct: 'Áno. u = x − π/3 = 2π/3 + 2kπ alebo 4π/3 + 2kπ, teda x = π + 2kπ alebo x = 5π/3 + 2kπ.',
        hint: 'Najprv vyrieš cos u = −1/2 (uhly 2π/3 a 4π/3) a potom pripočítaš π/3.'
      },
      {
        id: 'strategy',
        type: 'selfWrite',
        phase: 'VYSVETLI',
        skill: 'matematická komunikácia',
        title: 'Ako poznám typ rovnice?',
        prompt: 'Napíš, podľa čoho rozpoznáš, že rovnica je typu B (zložený argument) a podľa čoho, že je typu C (kvadratická). Pre každý typ uveď aj prvý krok riešenia.',
        model: 'Typ B: vnútri sin alebo cos nie je iba x (napr. x − π/5 alebo 2x). Prvý krok je substitúcia u za argument. Typ C: sin alebo cos je v druhej mocnine a zároveň v prvej (napr. 2sin²x − sin x − 1 = 0). Prvý krok je substitúcia t = sin x a riešenie kvadratickej rovnice pre t, pričom vyradím korene mimo ⟨−1; 1⟩.'
      },
      {
        id: 'zbierka',
        type: 'taskList',
        phase: 'PRECVIČ',
        skill: 'zbierka',
        title: 'Zbierka zmiešaných úloh',
        html: '<p>Úlohy sú zmiešané zo všetkých troch typov. Pri každej si najprv napíš, o aký typ ide. Riešiš v zošite. Zaškrtni úlohu, keď ju máš hotovú. Správnosť sa nekontroluje automaticky; riešenie si môžeš zobraziť tlačidlom pri úlohe.</p>',
        items: [
          { level: 'zaklad', text: 'Rieš rovnicu sin x = −√3/2 v intervale ⟨0; 2π).', answer: '<p>Typ A. x ∈ {4π/3, 5π/3}.</p>' },
          { level: 'zaklad', text: 'Rieš rovnicu cos(x − π/4) = 1.', answer: '<p>Typ B. u = x − π/4 = 2kπ, teda x = π/4 + 2kπ, k ∈ ℤ.</p>' },
          { level: 'zaklad', text: 'Rieš rovnicu sin 2x = 0 v intervale ⟨0; π⟩.', answer: '<p>Typ B. 2x = kπ, x = kπ/2. V intervale: x ∈ {0, π/2, π}.</p>' },
          { level: 'zaklad', text: 'Rieš rovnicu cos²x − cos x = 0.', answer: '<p>Typ C. cos x (cos x − 1) = 0, teda cos x = 0 alebo cos x = 1. x = π/2 + kπ alebo x = 2kπ, k ∈ ℤ.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu cos(x + π/6) = √2/2. Zapíš všetky riešenia.', answer: '<p>Typ B. u = x + π/6 = ±π/4 + 2kπ, teda x = π/4 − π/6 = π/12 alebo x = −π/4 − π/6 = −5π/12.</p><p>x = π/12 + 2kπ alebo x = −5π/12 + 2kπ, k ∈ ℤ.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu 2sin²x − sin x − 1 = 0 v intervale ⟨0; 2π).', answer: '<p>Typ C. t = 1 alebo t = −1/2. sin x = 1: π/2; sin x = −1/2: 7π/6 a 11π/6.</p><p>x ∈ {π/2, 7π/6, 11π/6}.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu cos 2x = −1/2. Zapíš všetky riešenia.', answer: '<p>Typ B. 2x = ±2π/3 + 2kπ, teda x = ±π/3 + kπ, k ∈ ℤ.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu 2cos²x + 3cos x + 1 = 0 v intervale ⟨0; 2π).', answer: '<p>Typ C. (2t + 1)(t + 1) = 0, t = −1/2 alebo t = −1. cos x = −1/2: 2π/3 a 4π/3; cos x = −1: π.</p><p>x ∈ {2π/3, π, 4π/3}.</p>' },
          { level: 'bonus', text: 'Rieš rovnicu sin²(x − π/4) = 1/2. Zapíš všetky riešenia.', answer: '<p>Typy B + C. u = x − π/4, sin u = ±√2/2, teda u = π/4 + kπ/2.</p><p>x = u + π/4 = π/2 + kπ/2, čo je to isté ako x = kπ/2, k ∈ ℤ.</p>' },
          { level: 'bonus', text: 'Rieš rovnicu cos²x = cos x v intervale ⟨0; 2π). Nedeľ výrazom cos x.', answer: '<p>cos x (cos x − 1) = 0, teda cos x = 0 alebo cos x = 1.</p><p>x ∈ {0, π/2, 3π/2}. (Číslo 2π do otvoreného intervalu nepatrí.)</p>' },
          { level: 'bonus', text: 'Žiak tvrdí, že rovnica sin 2x = 1 má v intervale ⟨0; 2π) jediné riešenie π/4. Má pravdu? Zdôvodni.', answer: '<p>Nie. 2x = π/2 + 2kπ, teda x = π/4 + kπ. V ⟨0; 2π) sú dve riešenia: π/4 a 5π/4.</p>' }
        ]
      },
      {
        id: 'work',
        type: 'notebook',
        phase: 'BEZ MOBILU',
        title: 'Samostatná úloha',
        html: '<p><span class="mini-label">ÚLOHA DO ZOŠITA</span><br>Rieš rovnicu <strong>sin(x − π/6) = −1/2</strong> v intervale <strong>⟨0; 2π)</strong>. Zapíš typ rovnice, substitúciu, všetky riešenia, výber z intervalu a skúšku. Pozor na koniec intervalu!</p>',
        model: '<strong>KONTROLA:</strong> Typ B. u = x − π/6: sin u = −1/2 ⇒ u = 7π/6 + 2kπ alebo u = 11π/6 + 2kπ. x = u + π/6: x = 4π/3 + 2kπ alebo x = 2π + 2kπ. V ⟨0; 2π): 4π/3 (k = 0) a z druhej série k = −1 dáva 0, k = 0 dáva 2π, ktoré do otvoreného intervalu nepatrí. Výsledok: x ∈ {0, 4π/3}. Skúška: sin(0 − π/6) = −1/2 ✓.'
      },
      {
        id: 'reflection',
        type: 'reflection',
        phase: 'SEBAHODNOTENIE',
        title: 'Som pripravený/á na písomku?',
        skills: [
          'typ A: sin x = a, cos x = a',
          'typ B: zložený argument',
          'typ C: kvadratická rovnica a substitúcia',
          'výber riešení z intervalu'
        ],
        prompt: 'Označ, ktorý typ rovníc už zvládaš a ktorý ešte potrebuješ precvičiť pred písomkou. Nie je to známka.'
      }
    ]
  }
});
