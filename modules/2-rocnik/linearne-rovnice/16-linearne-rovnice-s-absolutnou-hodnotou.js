MathPlatform.registerModule({
  id: '2-u03-h016',
  teacher: {
    placement: '2. ročník · Lineárne rovnice · 16. hodina: Lineárne rovnice s absolútnou hodnotou',
    prerequisites: [
      'význam absolútnej hodnoty a vzdialenosti na číselnej osi z 1. ročníka',
      'riešenie lineárnych rovníc a ekvivalentné úpravy',
      'intervaly a kontrola, či číslo patrí do intervalu',
      'dosadzovanie a spätná kontrola riešenia v pôvodnej rovnici'
    ],
    planContent: [
      'Aktuálny tematický plán uvádza tému „Lineárne rovnice s absolútnou hodnotou“. Modul rozpracúva túto tému od významu absolútnej hodnoty cez jednoduché rovnice až po systematický postup pri viacerých absolútnych hodnotách.'
    ],
    planPerformance: [
      'V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; uvedené ciele sú didaktickým rozpracovaním názvu a poradia tém, nie doplnením oficiálneho štandardu.'
    ],
    goals: [
      'interpretovať absolútnu hodnotu ako vzdialenosť a z toho odvodiť počet riešení jednoduchých rovníc',
      'bezpečne riešiť rovnice typu |L(x)| = k a |L(x)| = R(x)',
      'riešiť rovnice s viacerými absolútnymi hodnotami rozdelením číselnej osi na intervaly',
      'pri každom kandidátovi skontrolovať podmienku intervalu a pôvodnú rovnicu',
      'vedieť vysvetliť, prečo sa rovnica rozdeľuje na prípady'
    ],
    competencies: [
      'matematická komunikácia a presný symbolický zápis',
      'prepájanie číselnej osi, slovného významu a algebraického postupu',
      'argumentácia pri voľbe prípadov a vyraďovaní kandidátov',
      'kontrola riešenia v pôvodnej rovnici',
      'prehľadný ručný zápis po intervaloch'
    ],
    enrichment: [
      'Návrh maturitného štandardu je použitý iba ako obohatenie spôsobu práce: interpretácia podmienok, zdôvodnenie vetvenia postupu, kontrola kandidátov a prepájanie reprezentácií. Poradie učiva určuje tematický plán.'
    ],
    flow: [
      '2 min: vzdialenosť na číselnej osi a aktivácia predchádzajúceho učiva',
      '5 min: tri základné typy rovníc s absolútnou hodnotou',
      '7–9 min: metóda kritických bodov pri viacerých absolútnych hodnotách',
      '8–10 min: ručný príklad v zošite a spoločná kontrola',
      '2 min: formulácia univerzálneho postupu'
    ],
    diagnostics: [
      'žiak si nemýli |x| so zátvorkou a vie vysvetliť jeho význam ako vzdialenosť',
      'pri |L(x)| = R(x) sleduje, že pravá strana musí byť nezáporná',
      'pri intervalovej metóde určí všetky kritické body a správne znamienka výrazov',
      'kandidáta neprijme automaticky: najprv overí, či patrí do riešeného intervalu, potom ho dosadí do pôvodnej rovnice'
    ],
    partialUse: [
      'Ak je menej času, skonči po bloku |L(x)| = R(x). Intervalová metóda môže tvoriť samostatnú 10-minútovú časť hodiny.',
      'Pri celej aktivite má byť popri mobile otvorený zošit. Mobil slúži na názornosť a kontrolu, nie na nahradenie algebraického zápisu.'
    ]
  },
  student: {
    title: 'Lineárne rovnice s absolútnou hodnotou',
    subtitle: 'Téma 16 · Lineárne rovnice',
    intro: 'Absolútna hodnota nie je „zvláštna zátvorka“. Je to vzdialenosť. Keď pochopíš, kde sa menia znamienka, aj zložitejšia rovnica sa rozpadne na obyčajné lineárne rovnice.',
    estimatedTime: '15–20 min + ručné riešenie',
    activities: [
      {
        id: 'recap',
        type: 'explain',
        phase: 'OPAKUJ',
        title: 'Čo už vieme',
        html: '<p>Z 1. ročníka poznáš <strong>absolútnu hodnotu</strong> ako vzdialenosť na číselnej osi a vieš overiť, či číslo patrí do intervalu.</p><p>Z predchádzajúcich hodín vieš riešiť lineárne rovnice ekvivalentnými úpravami a dosadením overiť riešenie.</p>'
      },
      {
        id: 'topic-intro',
        type: 'intro',
        goals: [
          'interpretovať |x| ako vzdialenosť a odvodiť z nej počet riešení',
          'riešiť rovnice typu |L(x)|=k a |L(x)|=R(x)',
          'riešiť rovnice s viacerými absolútnymi hodnotami pomocou intervalov'
        ]
      },
      {
        id: 'distance-visual',
        type: 'info',
        phase: 'POCHOP',
        title: 'Začni vzdialenosťou, nie vzorcom',
        html: '<div class="logic-visual"><svg viewBox="0 0 760 240" role="img" aria-label="Číselná os s bodmi 1, 3 a 5"><line x1="80" y1="125" x2="680" y2="125" stroke="currentColor" stroke-width="3"/><g stroke="currentColor" stroke-width="2"><line x1="180" y1="112" x2="180" y2="138"/><line x1="380" y1="105" x2="380" y2="145"/><line x1="580" y1="112" x2="580" y2="138"/></g><g fill="currentColor" font-family="system-ui" font-size="22" text-anchor="middle"><text x="180" y="172">1</text><text x="380" y="180">3</text><text x="580" y="172">5</text><text x="280" y="80">vzdialenosť 2</text><text x="480" y="80">vzdialenosť 2</text></g><path d="M185 95 Q280 55 375 95" fill="none" stroke="currentColor" stroke-width="3"/><path d="M385 95 Q480 55 575 95" fill="none" stroke="currentColor" stroke-width="3"/></svg></div><p><strong>|x − 3| = 2</strong> čítaj: „vzdialenosť čísla <em>x</em> od čísla 3 je 2“.</p><p>Na osi sú preto dva body: <strong>x = 1</strong> a <strong>x = 5</strong>.</p>'
      },
      {
        id: 'meaning-check',
        type: 'choice',
        phase: 'OVER',
        skill: 'porozumenie',
        question: 'Čo presne vyjadruje zápis |x − 7|?',
        options: [
          'Vždy súčet x + 7.',
          'Vzdialenosť čísla x od čísla 7.',
          'Číslo x bez znamienka.'
        ],
        answer: 1,
        correct: 'Presne. Absolútna hodnota rozdielu vyjadruje vzdialenosť dvoch čísel na číselnej osi.',
        hint: 'Spomeň si na tvar |x − a|.'
      },
      {
        id: 'basic-rule',
        type: 'explain',
        phase: 'PRAVIDLO 1',
        title: 'Typ |L(x)| = k',
        html: '<p>Označme <strong>L(x)</strong> lineárny výraz, napríklad <strong>2x − 5</strong>. Pri rovnici <strong>|L(x)| = k</strong> najprv pozri na číslo <strong>k</strong>.</p><div class="term-list"><div class="term-item no-symbol"><div class="term-name">k &lt; 0</div><p class="term-rule">Rovnica nemá riešenie.</p></div><div class="term-item no-symbol"><div class="term-name">k = 0</div><p class="term-rule">Rieš L(x) = 0.</p></div><div class="term-item no-symbol"><div class="term-name">k &gt; 0</div><p class="term-rule">Rieš dve rovnice: L(x) = k alebo L(x) = −k.</p></div></div><p>Dôvod: vzdialenosť nemôže byť záporná; kladnú vzdialenosť možno dosiahnuť na oboch stranách od nuly.</p>',
        remember: 'k &lt; 0 → bez riešenia. k = 0 → L(x) = 0. k &gt; 0 → L(x) = k alebo L(x) = −k.'
      },
      {
        id: 'basic-example',
        type: 'choice',
        phase: 'POUŽI',
        skill: 'postup',
        question: 'Rieš |2x − 5| = 7. Ktorá dvojica rovníc vznikne správne?',
        options: [
          '2x − 5 = 7 a zároveň 2x − 5 = −7',
          '2x − 5 = 7 alebo 2x + 5 = 7',
          '2x − 5 = 7 alebo 2x − 5 = −7'
        ],
        answer: 2,
        correct: 'Áno. Dostaneš x = 6 alebo x = −1. Obe hodnoty po dosadení spĺňajú pôvodnú rovnicu.',
        hint: 'Pri kladnom čísle k má |L(x)| = k dve vetvy: L(x)=k alebo L(x)=−k.'
      },
      {
        id: 'zero-negative',
        type: 'choice',
        phase: 'HRANIČNÉ PRÍPADY',
        skill: 'porozumenie',
        question: 'Ktoré tvrdenie je správne?',
        options: [
          '|3x + 6| = 0 má jedno riešenie x = −2.',
          '|3x + 6| = −4 má dve riešenia.',
          '|3x + 6| = 0 nemá riešenie.'
        ],
        answer: 0,
        correct: 'Správne. Absolútna hodnota je nulová práve vtedy, keď je nulový výraz vo vnútri.',
        hint: 'Absolútna hodnota je vždy väčšia alebo rovná nule.'
      },
      {
        id: 'rhs-rule',
        type: 'explain',
        phase: 'PRAVIDLO 2',
        title: 'Keď na pravej strane nie je iba číslo',
        html: '<p>Pri rovnici <strong>|L(x)| = R(x)</strong> je pravá strana už výraz závislý od x.</p><ol class="steps"><li>Zapíš podmienku <strong>R(x) ≥ 0</strong>.</li><li>Rieš vetvu <strong>L(x) = R(x)</strong>.</li><li>Rieš vetvu <strong>L(x) = −R(x)</strong>.</li><li>Kandidát musí spĺňať podmienku z kroku 1.</li><li>Nakoniec ho dosaď do <strong>pôvodnej</strong> rovnice.</li></ol><p>Podmienka nie je ozdoba: ľavá strana je absolútna hodnota, teda nikdy nemôže byť záporná.</p>',
        remember: 'Podmienka R(x) ≥ 0 → vetva L(x) = R(x) → vetva L(x) = −R(x) → over podmienku → over v pôvodnej rovnici.'
      },
      {
        id: 'rhs-example-visual',
        type: 'info',
        phase: 'VZOROVÝ PRÍKLAD',
        title: '|2x − 4| = x + 2 krok za krokom',
        html: '<div class="example"><span class="mini-label">PRÍKLAD</span><p><strong>1. Podmienka:</strong> x + 2 ≥ 0, teda x ≥ −2.</p><p><strong>2. Prvá vetva:</strong> 2x − 4 = x + 2 ⇒ x = 6.</p><p><strong>3. Druhá vetva:</strong> 2x − 4 = −(x + 2) ⇒ 3x = 2 ⇒ x = <span class="frac"><span class="frac-num">2</span><span class="frac-den">3</span></span>.</p><p><strong>4. Podmienka:</strong> 6 ≥ −2 aj <span class="frac"><span class="frac-num">2</span><span class="frac-den">3</span></span> ≥ −2, takže oba kandidáty zostávajú.</p><p><strong>5. Kontrola v pôvodnej rovnici:</strong><br>x=6: |12−4|=8 a 6+2=8.<br>x=<span class="frac"><span class="frac-num">2</span><span class="frac-den">3</span></span>: |<span class="frac"><span class="frac-num">4</span><span class="frac-den">3</span></span>−4|=<span class="frac"><span class="frac-num">8</span><span class="frac-den">3</span></span> a <span class="frac"><span class="frac-num">2</span><span class="frac-den">3</span></span>+2=<span class="frac"><span class="frac-num">8</span><span class="frac-den">3</span></span>.</p><p><strong>Výsledok: x ∈ {<span class="frac"><span class="frac-num">2</span><span class="frac-den">3</span></span>, 6}.</strong></p></div>'
      },
      {
        id: 'rhs-error',
        type: 'choice',
        phase: 'NÁJDI CHYBU',
        skill: 'kritické myslenie',
        question: 'Žiak rieši |x − 5| = 2x − 8 a hneď vytvorí dve vetvy x − 5 = 2x − 8 alebo x − 5 = −(2x − 8). Čo mu v postupe chýba?',
        options: [
          'Podmienka x − 5 ≥ 0.',
          'Podmienka 2x − 8 ≥ 0.',
          'Nič, absolútna hodnota podmienku nepotrebuje.'
        ],
        answer: 1,
        correct: 'Áno. Pravá strana musí byť nezáporná, teda x ≥ 4. Kandidát mimo tejto podmienky nemôže byť riešením.',
        hint: 'Ktorá strana rovnice je automaticky nezáporná?'
      },
      {
        id: 'abs-abs-rule',
        type: 'explain',
        phase: 'PRAVIDLO 3',
        title: 'Typ |L(x)| = |R(x)|',
        html: '<p>Ak sú absolútne hodnoty na oboch stranách, obe strany sú automaticky nezáporné.</p><div class="formula">|L(x)| = |R(x)| ⇔ L(x) = R(x) alebo L(x) = −R(x)</div><p>Príklad: |3x−1| = |x+5|.<br>Vetva 1: 3x−1=x+5 ⇒ x=3.<br>Vetva 2: 3x−1=−x−5 ⇒ 4x=−4 ⇒ x=−1.</p><p>Oba výsledky ešte skontroluj v pôvodnej rovnici.</p>',
        remember: 'Dve absolútne hodnoty sa rovnajú práve vtedy, keď sú ich vnútra rovnaké alebo navzájom opačné.'
      },
      {
        id: 'complex-transition',
        type: 'info',
        phase: 'ZLOŽITEJŠIE ROVNICE',
        title: 'Čo ak sú absolútne hodnoty dve alebo tri?',
        html: '<p>Pri rovnici napríklad <strong>|2x−3| + |x+1| = 7</strong> už nestačí vytvoriť len dve vetvy.</p><p>Každý výraz v absolútnej hodnote môže meniť znamienko na inom mieste. Tieto miesta nazveme <strong>kritické body</strong>.</p><p><strong>Kritický bod</strong> nájdeš tak, že výraz vo vnútri absolútnej hodnoty položíš rovný nule.</p>'
      },
      {
        id: 'critical-points',
        type: 'choice',
        phase: 'KROK 1',
        skill: 'postup',
        question: 'Aké sú kritické body rovnice |2x−3| + |x+1| = 7?',
        options: [
          'x = −3/2 a x = 1',
          'x = 3 a x = 1',
          'x = 3/2 a x = −1'
        ],
        answer: 2,
        correct: 'Správne. 2x−3=0 dá x=3/2 a x+1=0 dá x=−1.',
        hint: 'Každý výraz vo vnútri absolútnej hodnoty polož rovný nule.'
      },
      {
        id: 'interval-visual',
        type: 'info',
        phase: 'KROK 2',
        title: 'Kritické body rozdelia os na intervaly',
        html: '<div class="logic-visual"><svg viewBox="0 0 760 260" role="img" aria-label="Číselná os rozdelená bodmi mínus jedna a tri polovice"><line x1="75" y1="115" x2="685" y2="115" stroke="currentColor" stroke-width="3"/><circle cx="275" cy="115" r="6" fill="currentColor"/><circle cx="500" cy="115" r="6" fill="currentColor"/><g fill="currentColor" font-family="system-ui" text-anchor="middle"><text x="275" y="150" font-size="22">−1</text><text x="500" y="150" font-size="22">3/2</text><text x="165" y="75" font-size="19">I: x &lt; −1</text><text x="387" y="75" font-size="19">II: −1 ≤ x &lt; 3/2</text><text x="600" y="75" font-size="19">III: x ≥ 3/2</text></g><g font-family="system-ui" fill="currentColor" font-size="18"><text x="105" y="205">2x−3: −</text><text x="105" y="230">x+1: −</text><text x="335" y="205">2x−3: −</text><text x="335" y="230">x+1: +</text><text x="555" y="205">2x−3: +</text><text x="555" y="230">x+1: +</text></g></svg></div><p>Na každom intervale sa znamienka výrazov nemenia. Preto tam môžeme absolútne hodnoty odstrániť presne a bezpečne.</p>'
      },
      {
        id: 'remove-bars-rule',
        type: 'explain',
        phase: 'KROK 3',
        title: 'Ako odstrániť absolútnu hodnotu na intervale',
        html: '<p>Platí:</p><div class="term-list"><div class="term-item no-symbol"><div class="term-name">A(x) ≥ 0</div><p class="term-rule">|A(x)| = A(x)</p></div><div class="term-item no-symbol"><div class="term-name">A(x) &lt; 0</div><p class="term-rule">|A(x)| = −A(x)</p></div></div><p>Pre interval <strong>x &lt; −1</strong> sú oba výrazy záporné, preto:</p><p>|2x−3| + |x+1| = <strong>−(2x−3) − (x+1)</strong>.</p><p>Po odstránení absolútnych hodnôt už riešiš obyčajnú lineárnu rovnicu.</p>',
        remember: 'A(x) ≥ 0 → |A(x)| = A(x). A(x) &lt; 0 → |A(x)| = −A(x).'
      },
      {
        id: 'interval-case1',
        type: 'choice',
        phase: 'KROK 4',
        skill: 'výpočet',
        question: 'V intervale x < −1 dostaneme −(2x−3) − (x+1) = 7. Aký kandidát vyjde?',
        options: [
          'x = −5/3',
          'x = 5/3',
          'x = −3'
        ],
        answer: 0,
        correct: 'Áno. −2x+3−x−1=7 ⇒ −3x+2=7 ⇒ x=−5/3. A −5/3 naozaj patrí do intervalu x<−1.',
        hint: 'Najprv odstráň zátvorky, potom vyrieš lineárnu rovnicu.'
      },
      {
        id: 'interval-reject',
        type: 'choice',
        phase: 'KROK 5',
        skill: 'kontrola',
        question: 'V intervale −1 ≤ x < 3/2 vyjde po úprave kandidát x = −3. Čo s ním?',
        options: [
          'Prijmeme ho, lebo vyšiel z lineárnej rovnice.',
          'Vyradíme ho, pretože x=−3 nepatrí do riešeného intervalu.',
          'Zmeníme mu znamienko na x=3.'
        ],
        answer: 1,
        correct: 'Presne. Riešenie čiastkovej rovnice platí iba v intervale, pre ktorý sme zvolili dané znamienka.',
        hint: 'Každá čiastková rovnica bola odvodená iba za určitej podmienky na x.'
      },
      {
        id: 'interval-case3',
        type: 'choice',
        phase: 'KROK 6',
        skill: 'výpočet',
        question: 'V intervale x ≥ 3/2 je rovnica (2x−3)+(x+1)=7. Aký výsledok zostane?',
        options: [
          'x = 5/3',
          'x = −3',
          'x = 3'
        ],
        answer: 2,
        correct: 'Správne. 3x−2=7 ⇒ x=3 a tento kandidát patrí do intervalu x≥3/2.',
        hint: 'Na tomto intervale sú oba vnútorné výrazy nezáporné.'
      },
      {
        id: 'master-procedure',
        type: 'explain',
        phase: 'UNIVERZÁLNY POSTUP',
        title: 'Postup pre rovnicu s viacerými absolútnymi hodnotami',
        html: '<ol class="steps"><li>Nájdi všetky výrazy v absolútnych hodnotách.</li><li>Každý polož rovný nule – dostaneš kritické body.</li><li>Kritické body zoradi a rozdeľ nimi číselnú os na intervaly.</li><li>Na každom intervale urči znamienko každého vnútorného výrazu.</li><li>Podľa znamienka odstráň absolútne hodnoty.</li><li>Vyrieš vzniknutú lineárnu rovnicu.</li><li>Kandidát prijmi iba vtedy, ak patrí do práve riešeného intervalu.</li><li>Všetky prijaté kandidáty dosaď do pôvodnej rovnice.</li><li>Zapíš množinu riešení.</li></ol><div class="warning"><strong>Najčastejšia chyba:</strong> žiak vyrieši čiastkovú rovnicu, ale zabudne skontrolovať interval, pre ktorý táto rovnica vôbec platila.</div>',
        remember: 'Kritické body → intervaly → znamienka → rieš rovnicu → over interval → over v pôvodnej rovnici → zapíš riešenia.'
      },
      {
        id: 'notebook-main',
        type: 'notebook',
        phase: 'BEZ MOBILU',
        title: 'Vyskúšaj bez pomoci',
        html: '<p><span class="mini-label">ÚLOHA DO ZOŠITA</span><br>Rieš v zošite <strong>|x−2| + |x+4| = 10</strong>. Najprv bez pomoci nájdi kritické body, urob číselnú os a rozdeľ riešenie na intervaly — postupuj podľa univerzálneho postupu z predchádzajúceho kroku.</p>',
        model: '<strong>KONTROLA:</strong> Kritické body sú x=2 a x=−4. Intervaly: x&lt;−4, −4≤x&lt;2, x≥2. V strednom intervale je súčet vzdialeností medzi bodmi −4 a 2 stále 6, takže tam riešenie nevznikne. V krajných intervaloch vyjdú x=−6 a x=4. Obe hodnoty po dosadení dávajú 10.'
      },
      {
        id: 'explain-why',
        type: 'selfWrite',
        phase: 'ARGUMENTUJ',
        skill: 'matematická komunikácia',
        title: 'Prečo rozdeľujeme číselnú os?',
        prompt: 'Vysvetli spolužiakovi v 2–3 vetách, prečo pri rovnici s viacerými absolútnymi hodnotami hľadáme kritické body a riešime ju po intervaloch.',
        model: 'Výraz v absolútnej hodnote sa správa inak podľa toho, či je kladný alebo záporný. Kritické body sú miesta, kde sa jeho znamienko môže zmeniť. Medzi dvoma susednými kritickými bodmi sú znamienka stále rovnaké, preto môžeme absolútne hodnoty na každom intervale správne odstrániť.'
      },
      {
        id: 'decision-tree',
        type: 'choice',
        phase: 'ROZHODNI O METÓDE',
        skill: 'stratégia',
        question: 'Ktorý postup je najvhodnejší pre rovnicu |3x−2| + |x+5| = 9?',
        options: [
          'Nájsť kritické body 2/3 a −5, rozdeliť os na intervaly a riešiť po prípadoch.',
          'Napísať iba 3x−2 = 9 a ignorovať druhú absolútnu hodnotu.',
          'Automaticky vytvoriť iba dve rovnice so znamienkami ±.'
        ],
        answer: 0,
        correct: 'Áno. Pri súčte viacerých absolútnych hodnôt je intervalová metóda systematická a bezpečná.',
        hint: 'Koľko výrazov môže meniť znamienko na rôznych miestach?'
      },
      {
        id: 'manual-challenge',
        type: 'notebook',
        phase: 'BEZ MOBILU',
        title: 'Samostatná výzva',
        html: '<p><span class="mini-label">ÚLOHA</span><br>Bez aplikácie vyrieš <strong>|2x+1| + |x−4| = 8</strong>.</p><p>V zápise musia byť viditeľné: <strong>kritické body → intervaly → znamienka → tri čiastkové rovnice → kontrola príslušnosti kandidátov → kontrola v pôvodnej rovnici → množina riešení.</strong></p>',
        model: '<strong>KONTROLA:</strong> Kritické body: x=−1/2 a x=4. Na intervale x&lt;−1/2 vyjde x=−5/3; v strednom intervale vyjde x=3; na intervale x≥4 vyjde x=11/3, ale tento kandidát do daného intervalu nepatrí. Po kontrole v pôvodnej rovnici je množina riešení {−5/3, 3}.'
      },
      {
        id: 'final-selfwrite',
        type: 'selfWrite',
        phase: 'ZHRŇ',
        skill: 'presný postup',
        title: 'Postup bez pozerania',
        prompt: 'Napíš vlastnými slovami presný postup riešenia rovnice s viacerými absolútnymi hodnotami. Skús uviesť aspoň 6 krokov v správnom poradí.',
        model: 'Nájdem nulové body všetkých výrazov v absolútnych hodnotách. Zoradím ich a rozdelím nimi číselnú os na intervaly. Na každom intervale určím znamienka vnútorných výrazov a podľa nich odstránim absolútne hodnoty. Vyriešim vzniknutú lineárnu rovnicu. Kandidáta ponechám iba vtedy, ak patrí do riešeného intervalu. Všetky ponechané kandidáty overím v pôvodnej rovnici a zapíšem množinu riešení.'
      },
      {
        id: 'reflection',
        type: 'reflection',
        phase: 'ZÁVER',
        title: 'Ako som na tom?',
        skills: [
          'význam absolútnej hodnoty',
          'voľba správnej metódy',
          'intervalová metóda',
          'kontrola kandidátov'
        ],
        prompt: 'Označ, ako dobre by si teraz vedel/a vyriešiť podobnú rovnicu bez aplikácie. Nie je to známka.'
      }
    ]
  },
  worksheet: {
    tasks: [
      // --- ZÁKLAD: |L(x)| = k, |L(x)| = |R(x)|
      { id: 'w-z1', level: 'zaklad', space: 3, text: 'Vyrieš rovnicu: |x − 4| = 3.',
        answer: '<p>x = 7 alebo x = 1. Množina riešení: {1, 7}.</p>' },
      { id: 'w-z2', level: 'zaklad', space: 4, text: 'Vyrieš rovnicu: |2x + 6| = 10. Urob skúšku.',
        answer: '<p>2x + 6 = 10 ⇒ x = 2; 2x + 6 = −10 ⇒ x = −8.</p><p>Množina riešení: {−8, 2}.</p>' },
      { id: 'w-z3', level: 'zaklad', space: 3, text: 'Vyrieš rovnicu: |3x − 1| = 0.',
        answer: '<p>Absolútna hodnota je nulová, keď je nulový výraz: 3x − 1 = 0 ⇒ x = 1/3.</p>' },
      { id: 'w-z4', level: 'zaklad', space: 3, text: 'Vyrieš rovnicu: |5 − x| = −2. Zdôvodni výsledok jednou vetou.',
        answer: '<p>Rovnica nemá riešenie, pretože absolútna hodnota (vzdialenosť) nemôže byť záporná.</p>' },
      { id: 'w-z5', level: 'zaklad', space: 4, text: 'Vyrieš rovnicu: |4x + 2| = 6.',
        answer: '<p>4x + 2 = 6 ⇒ x = 1; 4x + 2 = −6 ⇒ x = −2.</p><p>Množina riešení: {−2, 1}.</p>' },
      { id: 'w-z6', level: 'zaklad', space: 3, text: 'Nájdi všetky čísla, ktoré sú na číselnej osi od čísla 2 vzdialené 5 jednotiek. Zapíš to rovnicou s absolútnou hodnotou a vyrieš ju.',
        answer: '<p>|x − 2| = 5 ⇒ x = 7 alebo x = −3.</p>' },
      { id: 'w-z7', level: 'zaklad', space: 4, text: 'Vyrieš rovnicu: |6 − 2x| = 4.',
        answer: '<p>6 − 2x = 4 ⇒ x = 1; 6 − 2x = −4 ⇒ x = 5.</p><p>Množina riešení: {1, 5}.</p>' },
      { id: 'w-z8', level: 'zaklad', space: 5, text: 'Vyrieš rovnicu: |2x − 1| = |x + 4|. Urob skúšku.',
        answer: '<p>2x − 1 = x + 4 ⇒ x = 5; 2x − 1 = −(x + 4) ⇒ 3x = −3 ⇒ x = −1.</p><p>Skúška: x = 5: |9| = 9 a |9| = 9; x = −1: |−3| = 3 a |3| = 3.</p><p>Množina riešení: {−1, 5}.</p>' },

      // --- ROZŠÍRENIE: |L(x)| = R(x) s podmienkou, súčet dvoch absolútnych hodnôt
      { id: 'w-r1', level: 'rozsirenie', space: 6, text: 'Vyrieš rovnicu: |x − 3| = 2x − 3. Najprv zapíš podmienku.',
        answer: '<p>Podmienka: 2x − 3 ≥ 0, teda x ≥ 3/2.</p><p>x − 3 = 2x − 3 ⇒ x = 0 — nespĺňa podmienku, vyradíme.</p><p>x − 3 = −(2x − 3) ⇒ 3x = 6 ⇒ x = 2 — spĺňa podmienku.</p><p>Skúška: |2 − 3| = 1 a 2·2 − 3 = 1. Množina riešení: {2}.</p>' },
      { id: 'w-r2', level: 'rozsirenie', space: 6, text: 'Vyrieš rovnicu: |2x + 1| = x + 4.',
        answer: '<p>Podmienka: x + 4 ≥ 0, teda x ≥ −4.</p><p>2x + 1 = x + 4 ⇒ x = 3 (spĺňa podmienku).</p><p>2x + 1 = −(x + 4) ⇒ 3x = −5 ⇒ x = −5/3 (spĺňa podmienku).</p><p>Skúška: x = 3: |7| = 7 a 7; x = −5/3: |−7/3| = 7/3 a 7/3. Množina riešení: {−5/3, 3}.</p>' },
      { id: 'w-r3', level: 'rozsirenie', space: 6, text: 'Vyrieš rovnicu: |3x − 6| = 4 − x.',
        answer: '<p>Podmienka: 4 − x ≥ 0, teda x ≤ 4.</p><p>3x − 6 = 4 − x ⇒ 4x = 10 ⇒ x = 5/2 (spĺňa).</p><p>3x − 6 = −(4 − x) = x − 4 ⇒ 2x = 2 ⇒ x = 1 (spĺňa).</p><p>Skúška: x = 5/2: |3/2| = 3/2 a 3/2; x = 1: |−3| = 3 a 3. Množina riešení: {1, 5/2}.</p>' },
      { id: 'w-r4', level: 'rozsirenie', space: 6, text: 'Vyrieš rovnicu: |x + 2| = 3x + 10. Ktorého kandidáta musíš vyradiť a prečo?',
        answer: '<p>Podmienka: 3x + 10 ≥ 0, teda x ≥ −10/3.</p><p>x + 2 = 3x + 10 ⇒ x = −4 — nespĺňa podmienku (−4 &lt; −10/3), vyradíme.</p><p>x + 2 = −(3x + 10) ⇒ 4x = −12 ⇒ x = −3 — spĺňa.</p><p>Skúška: |−1| = 1 a 3·(−3) + 10 = 1. Množina riešení: {−3}.</p>' },
      { id: 'w-r5', level: 'rozsirenie', space: 10, text: 'Vyrieš rovnicu: |x − 1| + |x + 3| = 8. Zapíš kritické body, intervaly a kontrolu kandidátov.',
        answer: '<p>Kritické body: x = 1 a x = −3.</p><p>x &lt; −3: −(x − 1) − (x + 3) = −2x − 2 = 8 ⇒ x = −5 (patrí do intervalu).</p><p>−3 ≤ x &lt; 1: −(x − 1) + (x + 3) = 4, rovnica 4 = 8 nemá riešenie.</p><p>x ≥ 1: (x − 1) + (x + 3) = 2x + 2 = 8 ⇒ x = 3 (patrí do intervalu).</p><p>Množina riešení: {−5, 3}.</p>' },
      { id: 'w-r6', level: 'rozsirenie', space: 10, text: 'Vyrieš rovnicu: |2x − 2| + |x + 1| = 6.',
        answer: '<p>Kritické body: x = 1 a x = −1.</p><p>x &lt; −1: −(2x − 2) − (x + 1) = −3x + 1 = 6 ⇒ x = −5/3 (patrí).</p><p>−1 ≤ x &lt; 1: −(2x − 2) + (x + 1) = −x + 3 = 6 ⇒ x = −3 (nepatrí do intervalu, vyradíme).</p><p>x ≥ 1: (2x − 2) + (x + 1) = 3x − 1 = 6 ⇒ x = 7/3 (patrí).</p><p>Množina riešení: {−5/3, 7/3}.</p>' },

      // --- BONUS
      { id: 'w-b1', level: 'bonus', space: 12, text: 'Vyrieš rovnicu: |x| + |x − 2| + |x + 2| = 6. (Tri kritické body.)',
        answer: '<p>Kritické body: −2, 0, 2.</p><p>x &lt; −2: −3x = 6 ⇒ x = −2 (nepatrí do intervalu).</p><p>−2 ≤ x &lt; 0: −x − (x − 2) + (x + 2) = −x + 4 = 6 ⇒ x = −2 (patrí).</p><p>0 ≤ x &lt; 2: x − (x − 2) + (x + 2) = x + 4 = 6 ⇒ x = 2 (nepatrí).</p><p>x ≥ 2: 3x = 6 ⇒ x = 2 (patrí).</p><p>Množina riešení: {−2, 2}.</p>' },
      { id: 'w-b2', level: 'bonus', space: 10, text: 'Vyrieš rovnicu: |x| + |x − 4| = 4. Čo si všimneš pri strednom intervale? Zapíš množinu riešení.',
        answer: '<p>Kritické body: 0 a 4.</p><p>x &lt; 0: −x − (x − 4) = −2x + 4 = 4 ⇒ x = 0 (nepatrí do intervalu).</p><p>0 ≤ x &lt; 4: x − (x − 4) = 4, rovnica 4 = 4 platí pre každé x z intervalu.</p><p>x ≥ 4: 2x − 4 = 4 ⇒ x = 4 (patrí).</p><p>Množina riešení: ⟨0; 4⟩. (Súčet vzdialeností od 0 a od 4 je 4 pre každý bod medzi nimi.)</p>' },
      { id: 'w-b3', level: 'bonus', space: 8, text: 'Žiak vyriešil rovnicu |x − 1| = 2x − 5 a napísal x ∈ {2, 4}. Nájdi chybu v jeho postupe a napíš správnu množinu riešení.',
        answer: '<p>Chýba podmienka 2x − 5 ≥ 0, teda x ≥ 5/2.</p><p>x − 1 = 2x − 5 ⇒ x = 4 (spĺňa).</p><p>x − 1 = −(2x − 5) ⇒ 3x = 6 ⇒ x = 2 — nespĺňa podmienku (skúška: |1| = 1, ale 2·2 − 5 = −1).</p><p>Správne: x ∈ {4}.</p>' },
      { id: 'w-b4', level: 'bonus', space: 10, text: 'Pre aké hodnoty parametra k má rovnica |x − 2| + |x + 1| = k žiadne, práve jedno, práve dve, nekonečne veľa riešení? Zdôvodni pomocou vzdialeností na číselnej osi.',
        answer: '<p>Ľavá strana je súčet vzdialeností bodu x od čísel 2 a −1. Čísla 2 a −1 sú od seba vzdialené 3.</p><p>Pre x medzi −1 a 2 (vrátane) je súčet presne 3, mimo tohto úseku je väčší ako 3.</p><p>k &lt; 3: žiadne riešenie. k = 3: nekonečne veľa riešení (celý interval ⟨−1; 2⟩). k &gt; 3: práve dve riešenia (jedno vľavo od −1, jedno vpravo od 2). Práve jedno riešenie nenastane pre žiadne k.</p>' }
    ]
  }
});
