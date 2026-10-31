MathPlatform.registerModule({
  id: '3-u01-h015',
  teacher: {
    placement: '3. ročník · Goniometrické funkcie, goniometrické, rovnice · Hodina 15 · Riešenie úloh (rovnice sin x = a a cos x = a)',
    prerequisites: [
      'rovnice sin x = a a cos x = a: špeciálne prípady a dve série riešení (hodina 14)',
      'hodnoty sin a cos pre uhly π/6, π/4, π/3 a ich súmerné uhly v ostatných kvadrantoch',
      'zápis všetkých riešení pomocou 2kπ a k ∈ ℤ'
    ],
    planContent: [
      'Obsah a poradie vychádzajú z aktuálneho tematického plánu 3. ročníka. Hodina je určená na precvičenie jednoduchých rovníc; pracuje sa iba s funkciami sin a cos.'
    ],
    planPerformance: [
      'Poznať pojem jednotková kružnica.',
      'Vedieť zobraziť na jednotkovej kružnici ľubovoľné reálne číslo a priradiť reálne číslo bodu kružnice.',
      'Zadefinovať funkcie sin x, cos x, tg x, cotg x a opísať ich vlastnosti.',
      'Poznať a vedieť použiť goniometrické vzorce.',
      'Vyriešiť goniometrickú rovnicu.'
    ],
    goals: [
      'bezpečne vyriešiť rovnice sin x = a a cos x = a pre kladné aj záporné hodnoty a',
      'vybrať riešenia z daného intervalu a určiť ich počet',
      'rozpoznať typickú chybu: zabudnutá druhá séria riešení'
    ],
    competencies: [
      'voľba postupu podľa hodnoty a (žiadne riešenie, špeciálny prípad, dva body)',
      'kontrola riešení v zadanom intervale',
      'zdôvodnenie počtu riešení bez vypisovania'
    ],
    enrichment: [
      'Návrh maturitného štandardu je použitý iba ako obohatenie: úlohy v maturitnom formáte s obsahom, ktorý žiak už pozná, a zdôvodnenie postupu.'
    ],
    flow: [
      '3 min: kde sme a rozhodovací postup',
      '12 min: ukážkový príklad s intervalom, počítanie riešení, hľadanie chyby',
      '20 min: zbierka úloh podľa úrovní v zošite (žiaci si vyberajú úroveň)',
      '5 min: samostatná úloha bez mobilu, sebahodnotenie'
    ],
    diagnostics: [
      'či žiak z množiny všetkých riešení správne vyberie tie z intervalu (posun o ±2π)',
      'či rozlišuje otvorený a uzavretý koniec intervalu (⟨0; 2π) a ⟨0; 2π⟩)',
      'či pri zápornej hodnote hľadá body v správnych kvadrantoch'
    ],
    partialUse: [
      'Ak je málo času, použi iba ukážkový príklad a zbierku úloh vo vybranej úrovni.',
      'Riešenia v zbierke sa počas živej hodiny žiakom nezobrazujú.'
    ]
  },
  student: {
    title: 'Riešenie úloh: sin x = a, cos x = a',
    subtitle: 'Intervaly, počet riešení, typické chyby',
    intro: 'Precvičíš rovnice zo zvyšku hodiny 14: kladné aj záporné hodnoty, výber riešení z intervalu a hľadanie chyby v cudzom riešení.',
    estimatedTime: '20–25 min + zbierka',
    activities: [
      {
        id: 'recap',
        type: 'explain',
        phase: 'KDE SME',
        title: 'Čo už vieme',
        html: '<p>V hodine 14 sme vyriešili rovnice <strong>sin x = a</strong> a <strong>cos x = a</strong>. Na kružnici sme našli body s danou y- alebo x-súradnicou a ku každému pripočítali 2kπ.</p><p>Dnes budeme túto rutinu trénovať aj s <strong>intervalmi</strong>. Pomôže ti tento rozhodovací postup:</p><ol class="steps"><li>Je <strong>|a| &gt; 1</strong>? Rovnica nemá riešenie.</li><li>Je a jedno z čísel <strong>0, 1, −1</strong>? Použi špeciálny zápis.</li><li>Inak nájdi <strong>dva body</strong> na kružnici a ku každému pripočítaj 2kπ.</li><li>Ak je zadaný interval, vyber z riešení tie, ktoré do neho patria (skúšaj k = …, −1, 0, 1, …).</li></ol>'
      },
      {
        id: 'recall',
        type: 'choice',
        phase: 'OPAKUJ',
        skill: 'existencia riešenia',
        question: 'Ktorá z týchto rovníc nemá žiadne riešenie?',
        options: [
          'sin x = 1',
          'cos x = −0,9',
          'sin x = −1,01'
        ],
        answer: 2,
        correct: 'Áno. Hodnota −1,01 je menšia ako −1, ale sin x nikdy neklesne pod −1.',
        hint: 'Skontroluj, či je číslo na pravej strane v intervale ⟨−1; 1⟩.'
      },
      {
        id: 'topic-intro',
        type: 'intro',
        goals: [
          'vybrať riešenia rovnice sin x = a alebo cos x = a z daného intervalu',
          'určiť počet riešení bez vypisovania všetkých',
          'nájsť chybu v cudzom riešení'
        ]
      },
      {
        id: 'worked-example',
        type: 'info',
        phase: 'VZOROVÝ PRÍKLAD',
        title: 'cos x = −√2/2 v intervale ⟨−π; π⟩',
        html: '<div class="example"><span class="mini-label">PRÍKLAD</span><p><strong>1. Hodnota:</strong> −√2/2 leží v ⟨−1; 1⟩, riešenie existuje.</p><p><strong>2. Body na kružnici:</strong> x-súradnica −√2/2 je záporná, teda v II. a III. kvadrante. Referenčný uhol je π/4, takže uhly sú π − π/4 = 3π/4 a π + π/4 = 5π/4 (to isté ako −3π/4).</p><p><strong>3. Všetky riešenia:</strong> x = 3π/4 + 2kπ alebo x = −3π/4 + 2kπ, k ∈ ℤ.</p><p><strong>4. Interval ⟨−π; π⟩:</strong> pre k = 0 vychádza 3π/4 aj −3π/4, obe patria. Pre k = 1 dostaneme −3π/4 + 2π = 5π/4 &gt; π a pre k = −1 dostaneme 3π/4 − 2π = −5π/4 &lt; −π, obe sú mimo.</p><p><strong>Výsledok: x ∈ {−3π/4, 3π/4}.</strong></p></div>'
      },
      {
        id: 'count-4pi',
        type: 'numberInput',
        phase: 'POUŽI',
        skill: 'počet riešení',
        title: 'Počet riešení v dlhšom intervale',
        prompt: 'Koľko riešení má rovnica sin x = 1/2 v intervale ⟨0; 4π)? (Pomôž si tým, že riešenia sa opakujú po 2π.)',
        validate: 'exact',
        answer: 4,
        success: 'Áno. V ⟨0; 2π) sú π/6 a 5π/6, v ⟨2π; 4π) ďalšie dve: 13π/6 a 17π/6.',
        hint: 'Koľko riešení je v jednom obehu ⟨0; 2π) a koľko obehov interval obsahuje?',
        reveal: 'V ⟨0; 2π) sú dve riešenia (π/6, 5π/6) a interval ⟨0; 4π) obsahuje dva obehy, teda 2 · 2 = 4 riešenia.'
      },
      {
        id: 'find-error',
        type: 'choice',
        phase: 'NÁJDI CHYBU',
        skill: 'kritické myslenie',
        question: 'Žiak rieši rovnicu sin x = √3/2 a zapíše iba: „x = π/3 + 2kπ, k ∈ ℤ.“ Čo mu v riešení chýba?',
        options: [
          'Nič, jedna séria riešení stačí.',
          'Druhá séria riešení x = 2π/3 + 2kπ.',
          'Druhá séria riešení x = −π/3 + 2kπ.'
        ],
        answer: 1,
        correct: 'Správne. Aj bod s uhlom 2π/3 = π − π/3 má y-súradnicu √3/2. Hodnota sin(−π/3) je naopak −√3/2.',
        hint: 'Priamka y = √3/2 pretína kružnicu dvakrát. Kde je druhý priesečník?'
      },
      {
        id: 'count-matrix',
        type: 'matrix',
        phase: 'OVER SI',
        skill: 'počet riešení',
        title: 'Koľko riešení v ⟨0; 2π)?',
        labels: ['0 riešení', '1 riešenie', '2 riešenia'],
        items: [
          { text: 'sin x = 1', answer: '1 riešenie' },
          { text: 'cos x = 1,5', answer: '0 riešení' },
          { text: 'cos x = −0,4', answer: '2 riešenia' },
          { text: 'sin x = 0', answer: '2 riešenia' },
          { text: 'cos x = −1', answer: '1 riešenie' },
          { text: 'sin x = −2', answer: '0 riešení' }
        ]
      },
      {
        id: 'matura-format',
        type: 'choice',
        phase: 'MATURITNÝ FORMÁT',
        skill: 'maturitný formát',
        question: 'Určte všetky riešenia rovnice cos x = −1/2 v intervale ⟨0; 2π⟩. Ktorá odpoveď je správna?',
        options: [
          'π/3 a 5π/3',
          '2π/3 a 5π/3',
          '2π/3 a 4π/3'
        ],
        answer: 2,
        correct: 'Áno. Záporná x-súradnica −1/2 je v II. a III. kvadrante: π − π/3 = 2π/3 a π + π/3 = 4π/3.',
        hint: 'Záporný kosínus znamená body vľavo od osi y. Ktoré kvadranty to sú?'
      },
      {
        id: 'count-method',
        type: 'selfWrite',
        phase: 'VYSVETLI',
        skill: 'matematická komunikácia',
        title: 'Počet riešení bez vypisovania',
        prompt: 'Rovnica sin x = 0,3 sa rieši v intervale ⟨0; 8π). Vysvetli v 2–3 vetách, ako zistíš počet riešení bez toho, aby si ich všetky vypisoval/a.',
        model: 'Rovnica má v každom obehu ⟨0; 2π) presne dve riešenia, pretože priamka y = 0,3 pretína kružnicu dvakrát. Interval ⟨0; 8π) obsahuje štyri obehy, preto má rovnica 4 · 2 = 8 riešení.'
      },
      {
        id: 'zbierka',
        type: 'taskList',
        phase: 'PRECVIČ',
        skill: 'zbierka',
        title: 'Zbierka úloh',
        html: '<p>Vyber si úroveň, ktorá ti vyhovuje, a riešiš v zošite. Kresli si kružnicu. Zaškrtni úlohu, keď ju máš hotovú. Správnosť sa nekontroluje automaticky; riešenie si môžeš zobraziť tlačidlom pri úlohe.</p>',
        items: [
          { level: 'zaklad', text: 'Rieš rovnicu sin x = √2/2 v intervale ⟨0; 2π).', answer: '<p>x ∈ {π/4, 3π/4}.</p>' },
          { level: 'zaklad', text: 'Rieš rovnicu cos x = 1/2 v intervale ⟨0; 2π).', answer: '<p>x ∈ {π/3, 5π/3}.</p>' },
          { level: 'zaklad', text: 'Rieš rovnicu sin x = −1/2 v intervale ⟨0; 2π).', answer: '<p>x ∈ {7π/6, 11π/6}.</p>' },
          { level: 'zaklad', text: 'Rieš rovnicu cos x = 0 v intervale ⟨−π; π⟩.', answer: '<p>x ∈ {−π/2, π/2}.</p>' },
          { level: 'zaklad', text: 'Rieš rovnicu sin x = 0 v intervale ⟨−π; 2π⟩. Pozor na uzavreté konce.', answer: '<p>x = kπ: x ∈ {−π, 0, π, 2π}. Všetky štyri patria, lebo oba konce intervalu sú zahrnuté.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu cos x = −√3/2. Zapíš všetky riešenia.', answer: '<p>Referenčný uhol π/6, II. a III. kvadrant: x = 5π/6 + 2kπ alebo x = 7π/6 + 2kπ, k ∈ ℤ.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu sin x = −√3/2 v intervale ⟨−π; π⟩.', answer: '<p>Záporné y: III. a IV. kvadrant, v intervale −π až 0: x ∈ {−2π/3, −π/3}.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu cos x = √2/2 v intervale ⟨0; 4π).', answer: '<p>Základné riešenia π/4 a 7π/4; po pripočítaní 2π ešte 9π/4 a 15π/4. x ∈ {π/4, 7π/4, 9π/4, 15π/4}.</p>' },
          { level: 'rozsirenie', text: 'Koľko riešení má rovnica sin x = −0,7 v intervale ⟨−π; 3π)?', answer: '<p>4. Interval má dĺžku 4π, teda dva obehy, a v každom sú dve riešenia.</p>' },
          { level: 'rozsirenie', text: 'Rieš rovnicu cos x = −1 v intervale ⟨−3π; 3π⟩. Zapíš všetky riešenia.', answer: '<p>x = π + 2kπ: x ∈ {−3π, −π, π, 3π}.</p>' },
          { level: 'bonus', text: 'Rovnica sin x = 0,6 nemá „pekné“ riešenie. Označ α riešenie z intervalu ⟨0; π/2⟩ (α je číslo, ktoré nepoznáme presne). Zapíš pomocou α všetky riešenia.', answer: '<p>Druhý bod na kružnici je súmerný podľa osi y, teda π − α.</p><p>x = α + 2kπ alebo x = π − α + 2kπ, k ∈ ℤ.</p>' },
          { level: 'bonus', text: 'Pre ktoré hodnoty a má rovnica sin x = a v intervale ⟨0; 2π) práve jedno riešenie?', answer: '<p>Pre a = 1 (x = π/2) a a = −1 (x = 3π/2). Pre iné a z ⟨−1; 1⟩ sú riešenia dve (pre a = 0 sú to 0 a π) a pre |a| &gt; 1 žiadne.</p>' },
          { level: 'bonus', text: 'Aký je súčet všetkých riešení rovnice cos x = 1/2 v intervale ⟨0; 2π)? Skús odpovedať bez výpočtu a potom over.', answer: '<p>Riešenia sú π/3 a 5π/3 (súmerné podľa osi x), súčet je 2π.</p>' }
        ]
      },
      {
        id: 'work',
        type: 'notebook',
        phase: 'BEZ MOBILU',
        title: 'Samostatná úloha',
        html: '<p><span class="mini-label">ÚLOHA DO ZOŠITA</span><br>Rieš rovnicu <strong>cos x = −√3/2</strong> v intervale <strong>⟨−2π; 2π⟩</strong>. Zapíš všetky riešenia vzostupne a ukáž, ako si ich z množiny všetkých riešení vybral/a.</p>',
        model: '<strong>KONTROLA:</strong> Všetky riešenia: x = 5π/6 + 2kπ alebo x = 7π/6 + 2kπ. V intervale ⟨−2π; 2π⟩ (k = −1 a k = 0): x ∈ {−7π/6, −5π/6, 5π/6, 7π/6}.'
      },
      {
        id: 'reflection',
        type: 'reflection',
        phase: 'SEBAHODNOTENIE',
        title: 'Čo už viem?',
        skills: [
          'výber riešení z intervalu',
          'počet riešení v dlhšom intervale',
          'záporné hodnoty a kvadranty',
          'hľadanie chyby v cudzom riešení'
        ],
        prompt: 'Označ, ako dobre by si teraz vyriešil/a podobnú úlohu bez pomoci. Nie je to známka.'
      }
    ]
  }
});
