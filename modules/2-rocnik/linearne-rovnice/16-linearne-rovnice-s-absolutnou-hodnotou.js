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
          'Vzdialenosť čísla x od čísla 7.',
          'Vždy súčet x + 7.',
          'Číslo x bez znamienka.'
        ],
        answer: 0,
        correct: 'Presne. Absolútna hodnota rozdielu vyjadruje vzdialenosť dvoch čísel na číselnej osi.',
        hint: 'Spomeň si na tvar |x − a|.'
      },
      {
        id: 'basic-rule',
        type: 'explain',
        phase: 'PRAVIDLO 1',
        title: 'Typ |L(x)| = k',
        html: '<p>Označme <strong>L(x)</strong> lineárny výraz, napríklad <strong>2x − 5</strong>. Pri rovnici <strong>|L(x)| = k</strong> najprv pozri na číslo <strong>k</strong>.</p><div class="remember"><strong>Ak k &lt; 0:</strong> rovnica nemá riešenie.<br><strong>Ak k = 0:</strong> rieš L(x) = 0.<br><strong>Ak k &gt; 0:</strong> rieš dve rovnice: L(x) = k alebo L(x) = −k.</div><p>Dôvod: vzdialenosť nemôže byť záporná; kladnú vzdialenosť možno dosiahnuť na oboch stranách od nuly.</p>'
      },
      {
        id: 'basic-example',
        type: 'choice',
        phase: 'POUZÍ',
        skill: 'postup',
        question: 'Rieš |2x − 5| = 7. Ktorá dvojica rovníc vznikne správne?',
        options: [
          '2x − 5 = 7 alebo 2x − 5 = −7',
          '2x − 5 = 7 alebo 2x + 5 = 7',
          '2x − 5 = 7 a zároveň 2x − 5 = −7'
        ],
        answer: 0,
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
        html: '<p>Pri rovnici <strong>|L(x)| = R(x)</strong> je pravá strana už výraz závislý od x.</p><div class="remember"><strong>Presný postup:</strong><br>1. Zapíš podmienku <strong>R(x) ≥ 0</strong>.<br>2. Rieš vetvu <strong>L(x) = R(x)</strong>.<br>3. Rieš vetvu <strong>L(x) = −R(x)</strong>.<br>4. Kandidát musí spĺňať podmienku z kroku 1.<br>5. Nakoniec ho dosaď do <strong>pôvodnej</strong> rovnice.</div><p>Podmienka nie je ozdoba: ľavá strana je absolútna hodnota, teda nikdy nemôže byť záporná.</p>'
      },
      {
        id: 'rhs-example-visual',
        type: 'info',
        phase: 'VZOROVÝ PRÍKLAD',
        title: '|2x − 4| = x + 2 krok za krokom',
        html: '<p><strong>1. Podmienka:</strong> x + 2 ≥ 0, teda x ≥ −2.</p><p><strong>2. Prvá vetva:</strong> 2x − 4 = x + 2 ⇒ x = 6.</p><p><strong>3. Druhá vetva:</strong> 2x − 4 = −(x + 2) ⇒ 3x = 2 ⇒ x = 2/3.</p><p><strong>4. Podmienka:</strong> 6 ≥ −2 aj 2/3 ≥ −2, takže oba kandidáty zostávajú.</p><p><strong>5. Kontrola v pôvodnej rovnici:</strong><br>x=6: |12−4|=8 a 6+2=8.<br>x=2/3: |4/3−4|=8/3 a 2/3+2=8/3.</p><div class="remember"><strong>Výsledok:</strong> x ∈ {2/3, 6}.</div>'
      },
      {
        id: 'rhs-error',
        type: 'choice',
        phase: 'NÁJDI CHYBU',
        skill: 'kritické myslenie',
        question: 'Žiak rieši |x − 5| = 2x − 8 a hneď vytvorí dve vetvy x − 5 = 2x − 8 alebo x − 5 = −(2x − 8). Čo mu v postupe chýba?',
        options: [
          'Podmienka 2x − 8 ≥ 0.',
          'Podmienka x − 5 ≥ 0.',
          'Nič, absolútna hodnota podmienku nepotrebuje.'
        ],
        answer: 0,
        correct: 'Áno. Pravá strana musí byť nezáporná, teda x ≥ 4. Kandidát mimo tejto podmienky nemôže byť riešením.',
        hint: 'Ktorá strana rovnice je automaticky nezáporná?'
      },
      {
        id: 'abs-abs-rule',
        type: 'explain',
        phase: 'PRAVIDLO 3',
        title: 'Typ |L(x)| = |R(x)|',
        html: '<p>Ak sú absolútne hodnoty na oboch stranách, obe strany sú automaticky nezáporné.</p><div class="remember"><strong>|L(x)| = |R(x)| ⇔ L(x) = R(x) alebo L(x) = −R(x).</strong></div><p>Príklad: |3x−1| = |x+5|.<br>Vetva 1: 3x−1=x+5 ⇒ x=3.<br>Vetva 2: 3x−1=−x−5 ⇒ 4x=−4 ⇒ x=−1.</p><p>Oba výsledky ešte skontroluj v pôvodnej rovnici.</p>'
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
          'x = 3/2 a x = −1',
          'x = 3 a x = 1',
          'x = −3/2 a x = 1'
        ],
        answer: 0,
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
        html: '<p>Platí:</p><div class="remember">Ak A(x) ≥ 0, potom |A(x)| = A(x).<br>Ak A(x) &lt; 0, potom |A(x)| = −A(x).</div><p>Pre interval <strong>x &lt; −1</strong> sú oba výrazy záporné, preto:</p><p>|2x−3| + |x+1| = <strong>−(2x−3) − (x+1)</strong>.</p><p>Po odstránení absolútnych hodnôt už riešiš obyčajnú lineárnu rovnicu.</p>'
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
          'Vyradíme ho, pretože x=−3 nepatrí do riešeného intervalu.',
          'Prijmeme ho, lebo vyšiel z lineárnej rovnice.',
          'Zmeníme mu znamienko na x=3.'
        ],
        answer: 0,
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
          'x = 3',
          'x = −3',
          'x = 5/3'
        ],
        answer: 0,
        correct: 'Správne. 3x−2=7 ⇒ x=3 a tento kandidát patrí do intervalu x≥3/2.',
        hint: 'Na tomto intervale sú oba vnútorné výrazy nezáporné.'
      },
      {
        id: 'master-procedure',
        type: 'explain',
        phase: 'UNIVERZÁLNY POSTUP',
        title: 'Postup pre rovnicu s viacerými absolútnymi hodnotami',
        html: '<div class="remember"><strong>1.</strong> Nájdi všetky výrazy v absolútnych hodnotách.<br><strong>2.</strong> Každý polož rovný nule – dostaneš kritické body.<br><strong>3.</strong> Kritické body zoradi a rozdeľ nimi číselnú os na intervaly.<br><strong>4.</strong> Na každom intervale urči znamienko každého vnútorného výrazu.<br><strong>5.</strong> Podľa znamienka odstráň absolútne hodnoty.<br><strong>6.</strong> Vyrieš vzniknutú lineárnu rovnicu.<br><strong>7.</strong> Kandidát prijmi iba vtedy, ak patrí do práve riešeného intervalu.<br><strong>8.</strong> Všetky prijaté kandidáty dosaď do pôvodnej rovnice.<br><strong>9.</strong> Zapíš množinu riešení.</div><p><strong>Najčastejšia chyba:</strong> žiak vyrieši čiastkovú rovnicu, ale zabudne skontrolovať interval, pre ktorý táto rovnica vôbec platila.</p>'
      },
      {
        id: 'notebook-main',
        type: 'notebook',
        phase: 'ZOŠIT',
        title: 'Čistý algoritmus do zošita',
        html: '<p><span class="mini-label">PRACOVNÝ ZÁPIS</span><br>Rieš v zošite <strong>|x−2| + |x+4| = 10</strong>. Najprv bez pomoci nájdi kritické body, urob číselnú os a rozdeľ riešenie na intervaly.</p><p><span class="mini-label">ČISTÝ ZÁPIS</span><br>Po kontrole si zapíš deväťkrokový postup z predchádzajúcej obrazovky a pod neho svoje opravené riešenie.</p>',
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
  }
});
