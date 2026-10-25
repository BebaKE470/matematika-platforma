MathPlatform.registerModule({
  id: '1-u02-h019b',
  teacher: {
    placement: '1. ročník · Množiny · 19. hodina (precvičovanie): Kardinalita a podmnožiny – komplexné úlohy',
    prerequisites: [
      'množina, prvok, zápis ∈, ∉',
      'zápis množiny vymenovaním prvkov a charakteristickou vlastnosťou {x ∈ U; podmienka}',
      'podmnožina (⊆), prázdna množina ∅',
      'kardinalita |A| ako počet prvkov množiny',
    ],
    planContent: [
      'Precvičovací modul nadväzuje na 19. hodinu „Kardinalita množiny“ v tematickom celku Množiny. Spája zápis množiny vymenovaním, charakteristickou vlastnosťou, kardinalitu a systematický výpis všetkých podmnožín.',
    ],
    planPerformance: [
      'V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; ciele modulu sú didaktickým rozpracovaním názvu a poradia tém, nie doplnením oficiálneho štandardu.',
    ],
    goals: [
      'zo slovného zadania zapísať množinu vymenovaním prvkov aj charakteristickou vlastnosťou',
      'určiť kardinalitu množiny',
      'systematicky vypísať všetky podmnožiny množiny s 3, 4 a 5 prvkami (vrátane ∅ a samotnej množiny)',
      'všimnúť si, ako rastie počet podmnožín s počtom prvkov',
    ],
    competencies: [
      'práca s reprezentáciami (slovná, vymenovaním, charakteristickou vlastnosťou)',
      'systematickosť a úplnosť výpisu',
      'matematická komunikácia',
      'objavovanie zákonitosti z vlastných výpočtov',
    ],
    enrichment: [
      'Vzorec 2ⁿ pre počet podmnožín sa tu iba objavuje z vlastných výpisov (3 → 8, 4 → 16, 5 → 32); formálne zdôvodnenie nie je cieľom hodiny.',
    ],
    flow: [
      '3 min: spoločne prečítať zadanie prvej množiny, vymenovať prvky',
      '15–20 min: žiaci riešia úlohy v zošite, mobil slúži na kontrolu a sebahodnotenie',
      '5 min: porovnanie počtov podmnožín pre 3, 4 a 5 prvkov, formulácia zákonitosti',
    ],
    diagnostics: [
      'správne prevedie slovné zadanie (väčší ako / väčší alebo rovný) na prvky',
      'nezabúda na ∅ a na samotnú množinu pri výpise podmnožín',
      'vypisuje podmnožiny systematicky podľa počtu prvkov',
      'vie pomenovať, ako sa mení počet podmnožín po pridaní jedného prvku',
    ],
    partialUse: [
      'Modul nemusí byť použitý celý — stačí jedna až dve množiny podľa času.',
      'Výpis podmnožín patrí do zošita; mobil slúži na kontrolu počtu a sebahodnotenie.',
    ],
  },
  student: {
    title: 'Množina zo slovného zadania',
    subtitle: 'Téma 19 · Kardinalita a podmnožiny – precvičovanie',
    intro: 'Z jednej vety určíš množinu, zapíšeš ju dvoma spôsobmi, spočítaš prvky a vypíšeš všetky podmnožiny. Výpis rob v zošite.',
    estimatedTime: '18–25 min',
    activities: [
      {
        id: 'postup',
        type: 'explain',
        phase: 'OPAKUJ',
        title: 'Ako na úlohu s jednou množinou',
        html: '<p>Množinu zadáme vetou. Z nej urobíme všetko ostatné:</p>' +
          '<ol class="steps">' +
          '<li>Zisti, <span class="hl">ktoré čísla</span> vyhovujú (pozor, či hranica patrí do množiny: „menšie ako 5“ nezahŕňa 5, „menšie alebo rovné 5“ ju zahŕňa).</li>' +
          '<li>Zapíš ich <strong>vymenovaním</strong>: A = {…}.</li>' +
          '<li>Zapíš <strong>charakteristickou vlastnosťou</strong>: A = {x ∈ U; podmienka}.</li>' +
          '<li>Urč <strong>kardinalitu</strong> |A| — počet prvkov.</li>' +
          '<li>Vypíš <strong>všetky podmnožiny</strong> — najprv ∅, potom jednoprvkové, dvojprvkové… a nakoniec samotnú množinu A.</li>' +
          '</ol>' +
          '<div class="warning"><strong>Pozor:</strong> prázdna množina ∅ aj samotná množina A sú podmnožinami množiny A. Pri výpise na ne najčastejšie zabúdame.</div>',
        remember: 'Podmnožiny vypisuj podľa počtu prvkov: 0, 1, 2, … a nakoniec všetky.',
      },
      {
        id: 'a-enum',
        type: 'choice',
        phase: 'OBJAVUJ',
        skill: 'zápis vymenovaním',
        question: 'Nech U je množina všetkých celých čísel. Množina A obsahuje všetky celé čísla, ktoré sú menšie ako 5 a zároveň väčšie alebo rovné 2. Ktorý zápis vymenovaním je správny?',
        options: [
          'A = {2, 3, 4, 5}',
          'A = {3, 4}',
          'A = {2, 3, 4}',
          'A = {3, 4, 5}',
        ],
        answer: 2,
        correct: 'Správne. 2 patrí do množiny (väčšie alebo rovné 2), 5 už nie (menšie ako 5). A = {2, 3, 4}, teda |A| = 3.',
        hint: 'Skontroluj osobitne dolnú a hornú hranicu: patrí 2 do množiny? Patrí 5?',
      },
      {
        id: 'a-tasks',
        type: 'taskList',
        phase: 'PRECVIČ',
        skill: 'množina s 3 prvkami',
        title: 'Množina A (3 prvky) — rieš v zošite',
        html: '<p>Nech U = množina všetkých celých čísel. <strong>A</strong> = celé čísla menšie ako 5 a väčšie alebo rovné 2.</p>',
        items: [
          { text: 'a) Zapíš A vymenovaním prvkov.', answer: 'A = {2, 3, 4}' },
          { text: 'b) Zapíš A charakteristickou vlastnosťou.', answer: 'A = {x ∈ U; 2 ≤ x < 5}' },
          { text: 'c) Urč kardinalitu |A|.', answer: '|A| = 3' },
          { text: 'd) Vypíš všetky podmnožiny množiny A.', answer: '∅; {2}, {3}, {4}; {2, 3}, {2, 4}, {3, 4}; {2, 3, 4}' },
          { text: 'e) Koľko podmnožín má množina A?', answer: '8 (1 + 3 + 3 + 1)' },
        ],
        continueLabel: 'Hotovo, pokračujem',
      },
      {
        id: 'a-count',
        type: 'numberInput',
        phase: 'OVER SI',
        skill: 'počet podmnožín',
        title: 'Počet podmnožín množiny A',
        prompt: 'Množina A = {2, 3, 4}. Koľko podmnožín má množina A (vrátane ∅ a samotnej množiny A)?',
        validate: 'exact',
        answer: 8,
        success: 'Správne. Podmnožín je 8: jedna prázdna, tri jednoprvkové, tri dvojprvkové a jedna trojprvková (samotná A).',
        hint: 'Rozdeľ podmnožiny podľa počtu prvkov: 0, 1, 2, 3 — a spočítaj, koľko je v každej skupine.',
        reveal: '1 + 3 + 3 + 1 = 8.',
      },
      {
        id: 'three-more',
        type: 'taskList',
        phase: 'PRECVIČ',
        skill: 'množina s 3 prvkami',
        title: 'Ďalšie trojprvkové množiny — rieš v zošite',
        html: '<p>Pri každej množine zapíš: <strong>vymenovaním</strong>, <strong>charakteristickou vlastnosťou</strong>, urč <strong>|X|</strong>, vypíš <strong>všetky podmnožiny</strong> a urč ich <strong>počet</strong>.</p>',
        items: [
          {
            text: '1) U = celé čísla. D = celé čísla väčšie ako 0 a menšie alebo rovné 3.',
            answer: 'D = {1, 2, 3} = {x ∈ U; 0 < x ≤ 3}, |D| = 3<br>∅<br>{1}, {2}, {3}<br>{1, 2}, {1, 3}, {2, 3}<br>{1, 2, 3}<br>Spolu 8 podmnožín.',
          },
          {
            text: '2) U = prirodzené čísla. E = kladné párne čísla menšie ako 8.',
            answer: 'E = {2, 4, 6} = {x ∈ U; x je párne, x < 8}, |E| = 3<br>∅<br>{2}, {4}, {6}<br>{2, 4}, {2, 6}, {4, 6}<br>{2, 4, 6}<br>Spolu 8 podmnožín.',
          },
          {
            text: '3) F = množina rôznych písmen slova KOLO.',
            answer: 'F = {K, O, L}, |F| = 3 (O sa neráta dvakrát)<br>charakteristická vlastnosť: F = {x; x je písmeno slova KOLO}<br>∅<br>{K}, {O}, {L}<br>{K, O}, {K, L}, {O, L}<br>{K, O, L}<br>Spolu 8 podmnožín.',
          },
          {
            text: '4) U = celé čísla. G = celé čísla väčšie ako −4 a menšie alebo rovné −1.',
            answer: 'G = {−3, −2, −1} = {x ∈ U; −4 < x ≤ −1}, |G| = 3<br>∅<br>{−3}, {−2}, {−1}<br>{−3, −2}, {−3, −1}, {−2, −1}<br>{−3, −2, −1}<br>Spolu 8 podmnožín.',
          },
        ],
        continueLabel: 'Hotovo, pokračujem',
      },
      {
        id: 'b-char',
        type: 'choice',
        phase: 'OBJAVUJ',
        skill: 'charakteristická vlastnosť',
        question: 'Nech U je množina všetkých celých čísel a B = {−2, −1, 0, 1}. Ktorá charakteristická vlastnosť zodpovedá množine B?',
        options: [
          'B = {x ∈ U; −3 ≤ x < 1}',
          'B = {x ∈ U; −2 < x ≤ 1}',
          'B = {x ∈ U; −3 < x < 1}',
          'B = {x ∈ U; −3 < x ≤ 1}',
        ],
        answer: 3,
        correct: 'Správne. Celé čísla väčšie ako −3 a menšie alebo rovné 1 sú práve −2, −1, 0, 1.',
        hint: 'Vypíš si prvky, ktoré vyhovujú každej z možností, a porovnaj ich s B.',
      },
      {
        id: 'b-tasks',
        type: 'taskList',
        phase: 'PRECVIČ',
        skill: 'množina so 4 prvkami',
        title: 'Množina B (4 prvky) — rieš v zošite',
        html: '<p>Nech U = množina všetkých celých čísel. <strong>B</strong> = celé čísla väčšie ako −3 a menšie alebo rovné 1.</p>',
        items: [
          { text: 'a) Zapíš B vymenovaním prvkov.', answer: 'B = {−2, −1, 0, 1}' },
          { text: 'b) Zapíš B charakteristickou vlastnosťou.', answer: 'B = {x ∈ U; −3 < x ≤ 1}' },
          { text: 'c) Urč kardinalitu |B|.', answer: '|B| = 4' },
          {
            text: 'd) Vypíš všetky podmnožiny množiny B.',
            answer: '∅<br>{−2}, {−1}, {0}, {1}<br>{−2, −1}, {−2, 0}, {−2, 1}, {−1, 0}, {−1, 1}, {0, 1}<br>{−2, −1, 0}, {−2, −1, 1}, {−2, 0, 1}, {−1, 0, 1}<br>{−2, −1, 0, 1}',
          },
          { text: 'e) Koľko podmnožín má množina B?', answer: '16 (1 + 4 + 6 + 4 + 1)' },
        ],
        continueLabel: 'Hotovo, pokračujem',
      },
      {
        id: 'b-pairs',
        type: 'numberInput',
        phase: 'OVER SI',
        skill: 'systematický výpis',
        title: 'Dvojprvkové podmnožiny množiny B',
        prompt: 'Množina B = {−2, −1, 0, 1}. Koľko podmnožín množiny B má práve 2 prvky?',
        validate: 'exact',
        answer: 6,
        success: 'Správne. Dvojprvkových podmnožín je 6: {−2,−1}, {−2,0}, {−2,1}, {−1,0}, {−1,1}, {0,1}.',
        hint: 'Postupuj systematicky: najprv všetky dvojice s prvkom −2, potom s −1 (bez opakovania), potom s 0.',
        reveal: '3 + 2 + 1 = 6 dvojíc.',
      },
      {
        id: 'four-more',
        type: 'taskList',
        phase: 'PRECVIČ',
        skill: 'množina so 4 prvkami',
        title: 'Ďalšie štvorprvkové množiny — rieš v zošite',
        html: '<p>Rovnaké zadanie ako predtým: vymenovaním, charakteristickou vlastnosťou, |X|, všetky podmnožiny a ich počet. Podmnožiny vypisuj podľa počtu prvkov (0, 1, 2, 3, 4).</p>',
        items: [
          {
            text: '1) U = celé čísla. H = celé čísla väčšie ako 1 a menšie alebo rovné 5.',
            answer: 'H = {2, 3, 4, 5} = {x ∈ U; 1 < x ≤ 5}, |H| = 4<br>∅<br>{2}, {3}, {4}, {5}<br>{2, 3}, {2, 4}, {3, 4}, {2, 5}, {3, 5}, {4, 5}<br>{2, 3, 4}, {2, 3, 5}, {2, 4, 5}, {3, 4, 5}<br>{2, 3, 4, 5}<br>Spolu 16 podmnožín.',
          },
          {
            text: '2) U = prirodzené čísla. J = prirodzené čísla deliteľné 5, ktoré sú menšie ako 25.',
            answer: 'J = {5, 10, 15, 20} = {x ∈ U; x je deliteľné 5, x < 25}, |J| = 4<br>∅<br>{5}, {10}, {15}, {20}<br>{5, 10}, {5, 15}, {10, 15}, {5, 20}, {10, 20}, {15, 20}<br>{5, 10, 15}, {5, 10, 20}, {5, 15, 20}, {10, 15, 20}<br>{5, 10, 15, 20}<br>Spolu 16 podmnožín.',
          },
          {
            text: '3) L = množina rôznych písmen slova MATKA.',
            answer: 'L = {M, A, T, K}, |L| = 4 (A sa neráta dvakrát)<br>charakteristická vlastnosť: L = {x; x je písmeno slova MATKA}<br>∅<br>{M}, {A}, {T}, {K}<br>{M, A}, {M, T}, {A, T}, {M, K}, {A, K}, {T, K}<br>{M, A, T}, {M, A, K}, {M, T, K}, {A, T, K}<br>{M, A, T, K}<br>Spolu 16 podmnožín.',
          },
        ],
        continueLabel: 'Hotovo, pokračujem',
      },
      {
        id: 'forgot',
        type: 'choice',
        phase: 'NÁJDI CHYBU',
        skill: 'úplnosť výpisu',
        question: 'Žiačka vypisovala všetky podmnožiny množiny {a, b, c} a napísala: {a}, {b}, {c}, {a, b}, {a, c}, {b, c}. Čo jej vo výpise chýba?',
        options: [
          'iba prázdna množina ∅',
          'prázdna množina ∅ aj samotná množina {a, b, c}',
          'iba samotná množina {a, b, c}',
          'nič, vypísala všetky podmnožiny',
        ],
        answer: 1,
        correct: 'Správne. Chýbajú ∅ aj {a, b, c}. Podmnožín je 8, nie 6.',
        hint: 'Spočítaj jej podmnožiny podľa počtu prvkov. Zostali niektoré skupiny nevypísané?',
      },
      {
        id: 'c-tasks',
        type: 'taskList',
        phase: 'PRECVIČ',
        skill: 'množina s 5 prvkami',
        title: 'Množina C (5 prvkov) — rieš v zošite',
        html: '<p>Nech U = množina všetkých prirodzených čísel (1, 2, 3, …). <strong>C</strong> = všetky prvočísla menšie ako 12.</p>',
        items: [
          { text: 'a) Zapíš C vymenovaním prvkov.', answer: 'C = {2, 3, 5, 7, 11}' },
          { text: 'b) Zapíš C charakteristickou vlastnosťou.', answer: 'C = {x ∈ U; x je prvočíslo, x < 12}' },
          { text: 'c) Urč kardinalitu |C|.', answer: '|C| = 5' },
          {
            text: 'd) Vypíš všetky podmnožiny množiny C (je ich dosť — rob to systematicky podľa počtu prvkov).',
            answer: '0 prvkov: ∅<br>1 prvok: {2}, {3}, {5}, {7}, {11}<br>2 prvky: {2,3}, {2,5}, {2,7}, {2,11}, {3,5}, {3,7}, {3,11}, {5,7}, {5,11}, {7,11}<br>3 prvky: {2,3,5}, {2,3,7}, {2,3,11}, {2,5,7}, {2,5,11}, {2,7,11}, {3,5,7}, {3,5,11}, {3,7,11}, {5,7,11}<br>4 prvky: {3,5,7,11}, {2,5,7,11}, {2,3,7,11}, {2,3,5,11}, {2,3,5,7}<br>5 prvkov: {2,3,5,7,11}',
          },
          { text: 'e) Koľko podmnožín má množina C?', answer: '32 (1 + 5 + 10 + 10 + 5 + 1)' },
        ],
        continueLabel: 'Hotovo, pokračujem',
      },
      {
        id: 'c-count',
        type: 'numberInput',
        phase: 'OVER SI',
        skill: 'počet podmnožín',
        title: 'Počet podmnožín množiny C',
        prompt: 'Množina C = {2, 3, 5, 7, 11}. Koľko podmnožín má množina C (vrátane ∅ a samotnej množiny C)?',
        validate: 'exact',
        answer: 32,
        success: 'Správne. 1 + 5 + 10 + 10 + 5 + 1 = 32 podmnožín.',
        hint: 'Rozdeľ ich podľa počtu prvkov 0 až 5. Dvojprvkových aj trojprvkových je rovnako veľa.',
        reveal: '1 + 5 + 10 + 10 + 5 + 1 = 32.',
      },
      {
        id: 'pattern',
        type: 'info',
        phase: 'POCHOP',
        title: 'Porovnaj si výsledky',
        html: '<div class="table-wrap"><table class="truth">' +
          '<thead><tr><th>Množina</th><th>Počet prvkov</th><th>Počet podmnožín</th></tr></thead>' +
          '<tbody>' +
          '<tr><td>A = {2, 3, 4}</td><td>3</td><td>8</td></tr>' +
          '<tr><td>B = {−2, −1, 0, 1}</td><td>4</td><td>16</td></tr>' +
          '<tr><td>C = {2, 3, 5, 7, 11}</td><td>5</td><td>32</td></tr>' +
          '</tbody></table></div>' +
          '<p>Všimni si, čo sa deje s počtom podmnožín, keď pridáme jeden prvok.</p>',
        continueLabel: 'Pokračovať',
      },
      {
        id: 'pattern-write',
        type: 'selfWrite',
        phase: 'VYSVETLI',
        skill: 'matematická komunikácia',
        title: 'Čo sa stane po pridaní prvku?',
        prompt: 'Ako sa zmení počet podmnožín, keď množinu rozšírime o jeden nový prvok? Napíš to jednou vetou a skús aj vysvetliť prečo.',
        model: 'Počet podmnožín sa zdvojnásobí. Každá doterajšia podmnožina existuje aj bez nového prvku, aj s ním — takže každá „vyrobí“ dve podmnožiny.',
        placeholder: 'Počet podmnožín sa…',
      },
      {
        id: 'six',
        type: 'numberInput',
        phase: 'PRENES',
        skill: 'počet podmnožín',
        title: 'Šesťprvková množina',
        prompt: 'Množina E má 6 prvkov. Koľko podmnožín má množina E? Využi, čo si si všimol/a pri množinách A, B a C.',
        validate: 'exact',
        answer: 64,
        success: 'Správne. 5 prvkov → 32 podmnožín, po pridaní šiesteho prvku sa počet zdvojnásobí na 64.',
        hint: 'Pri 5 prvkoch bolo podmnožín 32. Čo sa stane po pridaní ďalšieho prvku?',
        reveal: '32 · 2 = 64.',
      },
      {
        id: 'reflection',
        type: 'reflection',
        phase: 'ZÁVER',
        title: 'Ako som na tom?',
        skills: [
          'zápis množiny zo slovného zadania',
          'kardinalita',
          'výpis všetkých podmnožín',
        ],
        prompt: 'Označ, ako dobre tomu teraz rozumieš. Nie je to známka; porovnaj svoj pocit s výsledkom úloh.',
      },
    ],
  },
  worksheet: {
    tasks: [
      {
        id: 'w1',
        level: 'zaklad',
        space: 28,
        text: 'Pre každú z množín zapíš: a) vymenovaním prvkov, b) charakteristickou vlastnosťou, c) kardinalitu, d) všetky podmnožiny a ich počet.\n1) U = celé čísla. M = celé čísla väčšie alebo rovné −1 a menšie ako 2.\n2) U = celé čísla. D = celé čísla väčšie ako 0 a menšie alebo rovné 3.\n3) U = prirodzené čísla. E = kladné párne čísla menšie ako 8.\n4) F = množina rôznych písmen slova KOLO.\n5) U = celé čísla. G = celé čísla väčšie ako −4 a menšie alebo rovné −1.',
        answer: '1) M = {−1, 0, 1} = {x ∈ U; −1 ≤ x < 2}, |M| = 3<br>2) D = {1, 2, 3} = {x ∈ U; 0 < x ≤ 3}, |D| = 3<br>3) E = {2, 4, 6} = {x ∈ U; x je párne, x < 8}, |E| = 3<br>4) F = {K, O, L} = {x; x je písmeno slova KOLO}, |F| = 3<br>5) G = {−3, −2, −1} = {x ∈ U; −4 < x ≤ −1}, |G| = 3<br>Pri každej: ∅; tri jednoprvkové; tri dvojprvkové; celá množina — spolu 8 podmnožín. Napr. pre M: ∅; {−1}, {0}, {1}; {−1, 0}, {−1, 1}, {0, 1}; {−1, 0, 1}.',
      },
      {
        id: 'w2',
        level: 'rozsirenie',
        space: 30,
        text: 'Pre každú z množín zapíš: a) vymenovaním prvkov, b) charakteristickou vlastnosťou, c) kardinalitu, d) všetky podmnožiny a ich počet.\n1) U = prirodzené čísla. D = množina všetkých deliteľov čísla 6.\n2) U = celé čísla. H = celé čísla väčšie ako 1 a menšie alebo rovné 5.\n3) U = prirodzené čísla. J = prirodzené čísla deliteľné 5, ktoré sú menšie ako 25.\n4) L = množina rôznych písmen slova MATKA.\n5) U = prirodzené čísla. K = všetky násobky čísla 3, ktoré sú menšie ako 16.',
        answer: '1) D = {1, 2, 3, 6} = {x ∈ U; x je deliteľ čísla 6}, |D| = 4<br>2) H = {2, 3, 4, 5} = {x ∈ U; 1 < x ≤ 5}, |H| = 4<br>3) J = {5, 10, 15, 20} = {x ∈ U; x je deliteľné 5, x < 25}, |J| = 4<br>4) L = {M, A, T, K} = {x; x je písmeno slova MATKA}, |L| = 4<br>5) K = {3, 6, 9, 12, 15} = {x ∈ U; x je násobok čísla 3, x < 16}, |K| = 5<br>Pri 4 prvkoch je podmnožín 16 (1 + 4 + 6 + 4 + 1), pri 5 prvkoch 32 (1 + 5 + 10 + 10 + 5 + 1). Napr. pre D: ∅; {1}, {2}, {3}, {6}; {1,2}, {1,3}, {1,6}, {2,3}, {2,6}, {3,6}; {1,2,3}, {1,2,6}, {1,3,6}, {2,3,6}; {1,2,3,6}.',
      },
      {
        id: 'w3',
        level: 'rozsirenie',
        space: 4,
        text: 'Množina P má 5 prvkov. Koľko jej podmnožín má\na) práve 1 prvok,\nb) práve 4 prvky,\nc) práve 2 prvky,\nd) práve 3 prvky?',
        answer: 'a) 5<br>b) 5 (vynecháme jeden prvok)<br>c) 10<br>d) 10',
      },
      {
        id: 'w4',
        level: 'bonus',
        space: 5,
        text: 'a) Koľko rôznych písmen má slovo MATEMATIKA? Zapíš množinu jeho písmen vymenovaním.\nb) Koľko podmnožín má táto množina? Zdôvodni bez vypisovania.',
        answer: 'a) {M, A, T, E, I, K}, 6 písmen<br>b) 2 · 2 · 2 · 2 · 2 · 2 = 64 (každý prvok buď do podmnožiny patrí, alebo nie)',
      },
    ],
  },
});
