MathPlatform.registerModule({
  "id": "2-u04-h026",
  "teacher": {
    "placement": "2. ročník · Lineárne nerovnice · 26. hodina: Riešenie úloh",
    "prerequisites": [
      "1. ročník: intervaly, zjednotenie a prienik intervalov",
      "2. ročník: hodina 24 (lineárne nerovnice) a hodina 25 (neznáma v menovateli)"
    ],
    "planContent": [
      "V poskytnutom tematickom pláne nie je pri tematickom celku „Lineárne nerovnice“ vyplnený samostatný obsahový štandard. Modul preto nevydáva doplnený text za oficiálny obsahový štandard; vychádza z názvu tematického celku a konkrétnej témy hodiny."
    ],
    "planPerformance": [
      "V poskytnutom tematickom pláne nie je pri tematickom celku „Lineárne nerovnice“ vyplnený samostatný výkonový štandard. Ciele nižšie sú ciele tejto vyučovacej hodiny, nie vymyslený oficiálny výkonový štandard."
    ],
    "goals": [
      "rozpoznať typ nerovnice a zvoliť zodpovedajúci postup",
      "riešiť zmiešané lineárne nerovnice a nerovnice s neznámou v menovateli a zapísať výsledok intervalom/zjednotením",
      "zostaviť a vyriešiť slovnú úlohu s nerovnicou a interpretovať výsledok v kontexte",
      "hľadať a opravovať typické chyby (otočenie znaku, hranice intervalu, podmienky)"
    ],
    "competencies": [
      "modelovanie slovných situácií nerovnicou",
      "výber a zdôvodnenie postupu",
      "presný zápis riešenia a skúška",
      "kritické čítanie cudzieho riešenia"
    ],
    "enrichment": [
      "bonus: nerovnice typu x/(x − 3) ≥ 2 a hľadanie celých riešení",
      "slovné úlohy: cena, rýchlosť a čas, priemer, geometria"
    ],
    "flow": [
      "0–5 min: zhrnutie dvoch typov nerovníc a rozhodovacieho postupu",
      "5–15 min: spoločné príklady A (lineárna), B (zlomková so záporným koeficientom) a slovná úloha (taxi)",
      "15–25 min: platforma: voľba postupu, zmiešané úlohy, slovné úlohy, hľadanie chyby",
      "25–40 min: samostatná úloha BEZ MOBILU a zbierka podľa úrovne",
      "40–45 min: rozbor chýb podľa živých výsledkov, príprava na nerovnice s absolútnou hodnotou"
    ],
    "diagnostics": [
      "nerozpozná, že pri zlomku s neznámou treba podmienku a tabuľku",
      "zabúda na kontext pri slovných úlohách (kladnosť, celé čísla)",
      "zamieňa „aspoň“ a „viac ako“ (ostrá × neostrá)",
      "nesprávne určuje znamienko výrazu typu 3 − x"
    ],
    "partialUse": [
      "pri nedostatku času vynechať bonusové položky zbierky",
      "mobil nenahrádza ručné počítanie; postupy sa píšu do zošita",
      "pri ŠVVP povoliť oporu: karta s rozhodovacím postupom"
    ]
  },
  "student": {
    "title": "Riešenie úloh",
    "subtitle": "Téma 26 · Lineárne nerovnice",
    "intro": "Zmiešané úlohy z lineárnych nerovníc a nerovníc s neznámou v menovateli vrátane slovných úloh: rozpoznáš typ, zvolíš postup, zapíšeš riešenie a overíš ho. Počítaj na papieri, výsledky zapisuj do aplikácie.",
    "estimatedTime": "25–35 min",
    "activities": [
      {
        "id": "recap",
        "type": "explain",
        "phase": "OPAKUJ",
        "title": "Dva typy nerovníc, jeden cieľ",
        "html": "<p>V tomto celku sme sa naučili riešiť dva typy nerovníc:</p><div class=\"term-list\"><div class=\"term-item no-symbol\"><div class=\"term-name\">1. Lineárna nerovnica</div><p class=\"term-rule\">Neznáma len v čitateli alebo bez zlomku. Riešime <span class=\"hl\">ekvivalentnými úpravami</span>, pri delení záporným číslom otočíme znak.</p></div><div class=\"term-item no-symbol\"><div class=\"term-name\">2. Neznáma v menovateli</div><p class=\"term-rule\">Určíme <span class=\"hl\">podmienku</span>, presunieme všetko na jednu stranu, spojíme na jeden zlomok a použijeme <span class=\"hl\">tabuľku znamienok</span>.</p></div></div><p>Dnes riešime zmiešané úlohy: najprv musíš <strong>rozpoznať typ</strong>, potom zvoliť postup, a na záver výsledok správne zapísať a overiť. Pridáme aj <strong>slovné úlohy</strong>.</p>"
      },
      {
        "id": "topic-intro",
        "type": "intro",
        "goals": [
          "rozpoznať typ nerovnice a zvoliť správny postup",
          "zapísať riešenie správnym intervalom (ostrá × neostrá, zjednotenie)",
          "riešiť slovné úlohy: zostaviť nerovnicu a interpretovať výsledok",
          "nájsť a opraviť typické chyby"
        ]
      },
      {
        "id": "plan",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Rozhodovací postup",
        "html": "<ol class=\"steps\"><li><strong>Typ:</strong> je neznáma v menovateli? Ak áno, zapíš podmienku (menovateľ ≠ 0).</li><li><strong>Lineárna:</strong> roznásob, zlúč, x-ové členy na jednu stranu. Pri delení záporným číslom otoč znak.</li><li><strong>Zlomková:</strong> nula na jednej strane, jeden zlomok, nulové body, tabuľka znamienok.</li><li><strong>Zápis:</strong> interval alebo zjednotenie. Okrúhla zátvorka pri &lt;, &gt; a pri nulovom bode menovateľa; hranatá pri ≤, ≥ (okrem menovateľa).</li><li><strong>Skúška:</strong> číslo z riešenia, číslo mimo, krajný bod.</li></ol><div class=\"example\"><span class=\"mini-label\">PRÍKLAD A · lineárna</span><p>2(x + 3) − x ≥ 4x − 9</p><p>x + 6 ≥ 4x − 9 &nbsp;/ roznásobíme a zlúčime</p><p>15 ≥ 3x, teda x ≤ 5</p><p><strong>x ∈ (−∞; 5⟩</strong></p></div><div class=\"example\"><span class=\"mini-label\">PRÍKLAD B · neznáma v menovateli, záporný koeficient</span><p>(x + 2)/(3 − x) ≥ 0. Podmienka: x ≠ 3.</p><p>Urobíme tabuľku znamienok. Pozor na výraz 3 − x: je kladný pre x &lt; 3.</p><div class=\"table-wrap\"><table class=\"truth\"><thead><tr><th></th><th>(−∞; −2)</th><th>(−2; 3)</th><th>(3; ∞)</th></tr></thead><tbody><tr><td>x + 2</td><td>−</td><td>+</td><td>+</td></tr><tr><td>3 − x</td><td>+</td><td>+</td><td>−</td></tr><tr><td>podiel</td><td>−</td><td>+</td><td>−</td></tr></tbody></table></div><p>Podiel ≥ 0: interval (−2; 3). Nulový bod čitateľa −2 patrí (podiel 0), nulový bod menovateľa 3 nepatrí.</p><p><strong>x ∈ ⟨−2; 3)</strong></p></div><div class=\"warning\"><strong>Pozor:</strong> Pri výraze 3 − x je záporný koeficient pri x. Znamienko výrazu 3 − x je kladné pre x &lt; 3 (nie pre x &gt; 3). Radšej ho dosaď číslom, než by si hádal.</div>",
        "remember": "Najprv typ, potom postup, potom zápis a skúška. Podmienky pri zlomkoch nikdy nezabudni."
      },
      {
        "id": "word",
        "type": "explain",
        "phase": "NOVÝ POJEM",
        "title": "Slovné úlohy s nerovnicami",
        "html": "<ol class=\"steps\"><li><strong>Neznáma:</strong> pomenuj, čo je x (aj s jednotkou).</li><li><strong>Nerovnica:</strong> preložiť slová. „aspoň“ = ≥, „najviac“ = ≤, „viac ako“ = &gt;, „menej ako“ = &lt;.</li><li><strong>Riešenie:</strong> vyrieš nerovnicu.</li><li><strong>Kontext:</strong> zohľadni obmedzenia (dĺžka, cena, počet nesmie byť záporný, počet kusov je celé číslo).</li><li><strong>Odpoveď</strong> slovne.</li></ol><div class=\"example\"><span class=\"mini-label\">PRÍKLAD · taxi</span><p>Taxík si účtuje 2 € za nástup a 0,80 € za každý kilometer. Koľko km môžeme najviac ísť, aby cesta stála najviac 14 €?</p><p>x = počet km (x ≥ 0). 2 + 0,8x ≤ 14</p><p>0,8x ≤ 12, x ≤ 15. Spolu s x ≥ 0: x ∈ ⟨0; 15⟩</p><p><strong>Odpoveď:</strong> najviac 15 km.</p></div><div class=\"compare\"><div class=\"good\"><span class=\"mini-label\">HRANICA PATRÍ</span><p>„aspoň 5“ = x ≥ 5<br>„najviac 5“ = x ≤ 5</p></div><div class=\"good\"><span class=\"mini-label\">HRANICA NEPATRÍ</span><p>„viac ako 5“ = x &gt; 5<br>„menej ako 5“ = x &lt; 5</p></div></div>",
        "remember": "„aspoň“ a „najviac“ zahŕňajú hranicu (≥, ≤). „viac ako“ a „menej ako“ ju nezahŕňajú (&gt;, &lt;)."
      },
      {
        "id": "sort",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "rozpoznanie typu",
        "title": "Aký postup zvoliť?",
        "question": "Rozhodni, ako nerovnicu riešiť.",
        "labels": [
          "Ekvivalentné úpravy (neznáma nie je v menovateli)",
          "Podmienka a tabuľka znamienok (neznáma v menovateli)"
        ],
        "items": [
          {
            "text": "4x − 7 < 2x + 5",
            "answer": true,
            "why": "Lineárna nerovnica, stačia úpravy."
          },
          {
            "text": "(x − 1)/(x + 3) ≥ 0",
            "answer": false,
            "why": "Neznáma v menovateli: podmienka x ≠ −3 a tabuľka znamienok."
          },
          {
            "text": "3(x + 1) > 3x − 4",
            "answer": true,
            "why": "Lineárna, neznáma sa vykráti."
          },
          {
            "text": "5/(x − 2) < 1",
            "answer": false,
            "why": "Neznáma v menovateli, nemôžeme násobiť (x − 2) bez rozboru."
          },
          {
            "text": "x/2 − 1 ≤ x/3 + 1",
            "answer": true,
            "why": "Menovatele sú čísla, vynásobíme 6."
          },
          {
            "text": "x/(x + 1) ≥ 1",
            "answer": false,
            "why": "Neznáma v menovateli, podmienka x ≠ −1."
          }
        ]
      },
      {
        "id": "c1",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "lineárna",
        "question": "Vyrieš nerovnicu 4x − 7 < 2x + 5. Ktorý interval je riešením?",
        "options": [
          "(6; ∞)",
          "(−∞; 6⟩",
          "(−∞; 6)",
          "(−∞; 1)"
        ],
        "answer": 2,
        "correct": "Správne: 2x &lt; 12, x &lt; 6. Delili sme kladným číslom 2.",
        "hint": "Odpočítaj 2x aj pripočítaj 7: 2x &lt; 12. Potom delíš 2. Aké je to číslo?"
      },
      {
        "id": "c2",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "lineárna so zlomkami",
        "question": "Vyrieš nerovnicu x/2 − 1 ≤ x/3 + 1. Ktorý interval je riešením?",
        "options": [
          "⟨12; ∞)",
          "(−∞; 12)",
          "(−∞; 6⟩",
          "(−∞; 12⟩"
        ],
        "answer": 3,
        "correct": "Správne: po vynásobení 6 je 3x − 6 ≤ 2x + 6, teda x ≤ 12. Násobili sme kladným číslom, znak ostal.",
        "hint": "Vynásob obe strany číslom 6, ktoré odstráni oba zlomky. Nezabudni vynásobiť aj čísla −1 a 1."
      },
      {
        "id": "c3",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "zlomková",
        "question": "Vyrieš nerovnicu 5/(x − 2) < 1. Ktorý zápis je riešením?",
        "options": [
          "(7; ∞)",
          "(2; 7)",
          "(−∞; 2) ∪ (7; ∞)",
          "(−∞; 7)"
        ],
        "answer": 2,
        "correct": "Správne: 5/(x − 2) − 1 &lt; 0 dáva (7 − x)/(x − 2) &lt; 0, teda (x − 7)/(x − 2) > 0. Platí pre x &lt; 2 aj pre x > 7.",
        "hint": "Presuň 1 doľava, spoj do jedného zlomku a urob tabuľku. Zlomok je tiež záporný, keď x &lt; 2 (menovateľ je záporný, čitateľ kladný)."
      },
      {
        "id": "c4",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "zlomková",
        "question": "Vyrieš nerovnicu x/(x + 1) ≥ 1. Ktorý zápis je riešením?",
        "options": [
          "(−∞; −1⟩",
          "(−∞; −1)",
          "(−1; ∞)",
          "(−∞; −1) ∪ (−1; ∞)"
        ],
        "answer": 1,
        "correct": "Správne: x/(x + 1) − 1 = −1/(x + 1) ≥ 0, teda x + 1 &lt; 0. Hranica −1 nepatrí, lebo je v menovateli.",
        "hint": "Presuň 1 doľava a spoj do jedného zlomku. Čo ostane v čitateli a aké znamienko musí mať menovateľ?"
      },
      {
        "id": "c5",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "špeciálne prípady",
        "question": "Vyrieš nerovnicu 2(x − 1) + 3 ≥ 2x + 1. Aké je riešenie?",
        "options": [
          "každé reálne číslo, (−∞; ∞)",
          "nemá riešenie, ∅",
          "x = 0",
          "⟨0; ∞)"
        ],
        "answer": 0,
        "correct": "Správne: 2x + 1 ≥ 2x + 1 platí pre každé x, lebo 1 ≥ 1.",
        "hint": "Roznásob, zlúč a odpočítaj 2x od oboch strán. Je zvyšná číselná nerovnosť pravdivá? Pozor, tu je neostrá."
      },
      {
        "id": "c6",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "zlomková so záporným koeficientom",
        "question": "Vyrieš nerovnicu (3 − x)/(x + 1) > 0. Ktorý zápis je riešením?",
        "options": [
          "(−∞; −1) ∪ (3; ∞)",
          "⟨−1; 3⟩",
          "(−3; 1)",
          "(−1; 3)"
        ],
        "answer": 3,
        "correct": "Správne: nulové body −1 a 3; kladný podiel je medzi nimi (čitateľ aj menovateľ sú tam kladné).",
        "hint": "Dosaď x = 0: čitateľ 3 − 0 = 3, menovateľ 1, podiel je kladný. Do ktorého intervalu patrí 0?"
      },
      {
        "id": "c7",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "rozhodnutie o postupe",
        "question": "Nerovnicu 2/(x − 3) ≥ 1 chceme riešiť správne. Ktorý prvý krok je v poriadku?",
        "options": [
          "Vynásobíme obe strany číslom (x − 3), znak ostane.",
          "Zapíšeme podmienku x ≠ 3, presunieme 1 doľava a spojíme na jeden zlomok.",
          "Zapíšeme x = 3 ako riešenie.",
          "Prevrátime oba zlomky a otočíme znak."
        ],
        "answer": 1,
        "correct": "Správne. Podmienka x ≠ 3, potom (5 − x)/(x − 3) ≥ 0 a tabuľka znamienok.",
        "hint": "Znamienko výrazu x − 3 nepoznáme, takže ho nemôžeme len tak použiť ako násobiteľ."
      },
      {
        "id": "match",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "slovné úlohy",
        "title": "Slová na znaky",
        "labels": [
          "x < 5",
          "x ≤ 5",
          "x > 5",
          "x ≥ 5"
        ],
        "items": [
          {
            "text": "menej ako 5",
            "answer": "x < 5"
          },
          {
            "text": "najviac 5",
            "answer": "x ≤ 5"
          },
          {
            "text": "viac ako 5",
            "answer": "x > 5"
          },
          {
            "text": "aspoň 5",
            "answer": "x ≥ 5"
          },
          {
            "text": "nie viac ako 5",
            "answer": "x ≤ 5"
          },
          {
            "text": "nie menej ako 5",
            "answer": "x ≥ 5"
          }
        ]
      },
      {
        "id": "n1",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "slovné úlohy",
        "title": "Taxi",
        "prompt": "Taxík si účtuje 2 € za nástup a 0,80 € za každý kilometer. Koľko kilometrov najviac môžeme ísť, aby cesta stála najviac 14 €?",
        "validate": "exact",
        "answer": 15,
        "success": "2 + 0,8x ≤ 14, 0,8x ≤ 12, x ≤ 15. Najviac 15 km.",
        "hint": "Zostav nerovnicu 2 + 0,8x ≤ 14 a vyrieš ju.",
        "reveal": "Správne je 15: 0,8x ≤ 12, x ≤ 15."
      },
      {
        "id": "c8",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "slovné úlohy",
        "question": "Obdĺžnik má strany x a x + 4 (v cm). Jeho obvod má byť menší ako 40 cm. Pre ktoré x je to možné?",
        "options": [
          "(−∞; 8)",
          "(0; 8)",
          "(0; 10)",
          "(4; 8)"
        ],
        "answer": 1,
        "correct": "Správne: 2(x + x + 4) &lt; 40, 4x + 8 &lt; 40, x &lt; 8. Strana musí byť kladná, preto x > 0.",
        "hint": "Obvod je 2(x + x + 4). Ktoré obmedzenie vyplýva zo zmyslu strany obdĺžnika?"
      },
      {
        "id": "n2",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "slovné úlohy",
        "title": "Priemer z písomiek",
        "prompt": "Z troch písomiek máš zatiaľ 70 % a 85 %. Aký najmenší počet percent musíš dosiahnuť v tretej, aby bol priemer z troch písomiek aspoň 80 %?",
        "validate": "exact",
        "answer": 85,
        "success": "(70 + 85 + x)/3 ≥ 80, teda 155 + x ≥ 240, x ≥ 85.",
        "hint": "Priemer je (70 + 85 + x)/3. Pretože delíme kladným číslom 3, znak sa nemení.",
        "reveal": "Správne je 85: 155 + x ≥ 240, x ≥ 85."
      },
      {
        "id": "n3",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "slovné úlohy",
        "title": "Rýchlosť",
        "prompt": "Vlak má prejsť 150 km za menej ako 2,5 hodiny. Aká je najmenšia celočíselná priemerná rýchlosť (v km/h), ktorá to zaručí?",
        "validate": "exact",
        "answer": 61,
        "success": "150/v &lt; 2,5 pre v > 0 dáva 150 &lt; 2,5v, v > 60. Najmenšia celá rýchlosť väčšia ako 60 je 61.",
        "hint": "Rýchlosť je kladná, takže môžeš násobiť v. Z nerovnice vyjde v > 60. Patrí 60 do riešenia?",
        "reveal": "Správne je 61: pre v = 60 trvá cesta presne 2,5 h, čo nie je menej ako 2,5 h."
      },
      {
        "id": "n4",
        "type": "numberInput",
        "phase": "OVER SI",
        "skill": "celé riešenia",
        "title": "Počet celých riešení",
        "prompt": "Koľko celých čísel x spĺňa naraz nerovnicu 3x − 1 < 2x + 6 a nerovnicu x ≥ −3?",
        "validate": "exact",
        "answer": 10,
        "success": "Prvá dáva x &lt; 7, druhá x ≥ −3. Celé čísla −3, −2, …, 6, teda 10.",
        "hint": "Vyrieš prvú nerovnicu a nájdi prienik s x ≥ −3. Pozor na ostrý znak pri 7.",
        "reveal": "Správne je 10: x ∈ ⟨−3; 7), celé čísla od −3 po 6."
      },
      {
        "id": "hunt1",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak riešil nerovnicu 2/(x + 1) > 1 takto: „Vynásobím (x + 1): 2 > x + 1, x < 1, riešenie (−∞; 1).“ Ktoré číslo ukazuje, že je to nesprávne?",
        "options": [
          "x = 0",
          "x = 3",
          "x = −2",
          "x = 1"
        ],
        "answer": 2,
        "correct": "Správne: pre x = −2 je 2/(−1) = −2, čo nie je väčšie ako 1, hoci −2 &lt; 1. Správne riešenie je (−1; 1).",
        "hint": "Hľadáš číslo, ktoré leží v (−∞; 1), ale pôvodnú nerovnicu nespĺňa. Skús čísla menšie ako −1."
      },
      {
        "id": "hunt2",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Obdĺžnik má strany x a x + 4. Žiak z obvodu menšieho ako 40 odvodil 4x + 8 < 40, teda x < 8, a odpovedal: „x môže byť každé číslo menšie ako 8, napríklad −3.“ Čo mu chýba?",
        "options": [
          "Mal vydeliť číslom 8, nie 4.",
          "Dĺžka strany musí byť kladná, preto správna odpoveď je 0 < x < 8.",
          "Obvod sa počíta ako x + x + 4.",
          "Nič, odpoveď je správna."
        ],
        "answer": 1,
        "correct": "Správne. Matematické riešenie je (−∞; 8), ale strana obdĺžnika musí byť kladná: (0; 8).",
        "hint": "Môže mať obdĺžnik stranu −3 cm?"
      },
      {
        "id": "hunt3",
        "type": "choice",
        "phase": "NÁJDI CHYBU",
        "skill": "hľadanie chyby",
        "question": "Žiak vyriešil nerovnicu 3/(x − 1) ≥ 1 a napísal riešenie (1; 4). Ktoré číslo ukazuje, že zápis nie je úplný?",
        "options": [
          "2",
          "0",
          "4",
          "5"
        ],
        "answer": 2,
        "correct": "Správne: pre x = 4 je 3/3 = 1 ≥ 1, takže 4 patrí do riešenia. Správne: (1; 4⟩.",
        "hint": "Pri neostrej nerovnosti ≥ môže hranica patriť do riešenia. Skús hranicu 4."
      },
      {
        "id": "paper",
        "type": "notebook",
        "phase": "BEZ MOBILU",
        "title": "Úloha na papier",
        "html": "<p>Odlož zariadenie.</p><ol><li>Vyrieš nerovnicu <strong>(x + 2)/(3 − x) ≥ 0</strong>. Zapíš podmienku, tabuľku znamienok a výsledok intervalom.</li><li>Firma A si účtuje za prenájom auta 20 € a 0,25 € za km, firma B 0,45 € za km (bez zálohy). Pre koľko km je firma A lacnejšia? Zostav nerovnicu, vyrieš a odpovedz slovne.</li></ol>"
      },
      {
        "id": "zbierka",
        "type": "taskList",
        "phase": "PRECVIČ",
        "skill": "zbierka: riešenie úloh",
        "title": "Zbierka úloh (na papieri)",
        "html": "<p>Najprv rozpoznaj typ nerovnice. Pri zlomkoch zapíš podmienku a urob tabuľku znamienok. Hotovú úlohu odškrtni. „Zobraz riešenie“ použi až na kontrolu.</p>",
        "items": [
          {
            "level": "zaklad",
            "text": "Vyrieš nerovnicu 5x − 8 > 2.",
            "answer": "5x > 10, x > 2<br><strong>(2; ∞)</strong>"
          },
          {
            "level": "zaklad",
            "text": "Vyrieš nerovnicu 3 − 4x ≥ 11.",
            "answer": "−4x ≥ 8, delíme číslom −4 a otočíme znak: x ≤ −2<br><strong>(−∞; −2⟩</strong>"
          },
          {
            "level": "zaklad",
            "text": "Vyrieš nerovnicu 1/(x + 3) < 0.",
            "answer": "Čitateľ je kladný, preto musí byť menovateľ záporný: x + 3 &lt; 0<br><strong>(−∞; −3)</strong>"
          },
          {
            "level": "zaklad",
            "text": "Vyrieš nerovnicu (x − 2)/(x + 4) > 0.",
            "answer": "Nulové body −4 a 2. Podiel je kladný vľavo od −4 a vpravo od 2.<br><strong>(−∞; −4) ∪ (2; ∞)</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Vyrieš nerovnicu 2(x − 3) − 3(x + 1) ≤ 4.",
            "answer": "2x − 6 − 3x − 3 ≤ 4, −x − 9 ≤ 4, −x ≤ 13, x ≥ −13<br><strong>⟨−13; ∞)</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Vyrieš nerovnicu (x − 1)/2 − (2x + 1)/3 < 1.",
            "answer": "Vynásobíme 6: 3(x − 1) − 2(2x + 1) &lt; 6, −x − 5 &lt; 6, −x &lt; 11, x > −11<br><strong>(−11; ∞)</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Vyrieš nerovnicu 4/(x + 1) ≥ 1.",
            "answer": "(3 − x)/(x + 1) ≥ 0, teda (x − 3)/(x + 1) ≤ 0. Nulové body −1 (nepatrí) a 3 (patrí).<br><strong>(−1; 3⟩</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Vyrieš nerovnicu (2 − x)/(x + 3) ≤ 0.",
            "answer": "Podiel (2 − x)/(x + 3) je ≤ 0, keď (x − 2)/(x + 3) ≥ 0. Nulový bod 2 patrí, −3 nepatrí.<br><strong>(−∞; −3) ∪ ⟨2; ∞)</strong>"
          },
          {
            "level": "rozsirenie",
            "text": "Karol má našetrených 40 € a každý mesiac ušetrí 15 €. Najmenej po koľkých mesiacoch bude mať aspoň 250 € na bicykel?",
            "answer": "40 + 15n ≥ 250, 15n ≥ 210, n ≥ 14<br><strong>najmenej 14 mesiacov</strong>"
          },
          {
            "level": "bonus",
            "text": "Vyrieš nerovnicu x/(x − 3) ≥ 2.",
            "answer": "x/(x − 3) − 2 = (6 − x)/(x − 3) ≥ 0, teda (x − 6)/(x − 3) ≤ 0. Nulové body 3 (nepatrí) a 6 (patrí).<br><strong>(3; 6⟩</strong>"
          },
          {
            "level": "bonus",
            "text": "Pre ktoré x je hodnota zlomku (x + 1)/(x − 2) väčšia ako 1?",
            "answer": "(x + 1)/(x − 2) − 1 = 3/(x − 2) > 0, teda x − 2 > 0.<br><strong>(2; ∞)</strong>"
          },
          {
            "level": "bonus",
            "text": "Nájdi všetky celé čísla x, pre ktoré má zmysel zlomok 6/(x − 1) a platí 6/(x − 1) ≥ 1.",
            "answer": "6/(x − 1) − 1 ≥ 0, (7 − x)/(x − 1) ≥ 0, x ∈ (1; 7⟩.<br><strong>x = 2, 3, 4, 5, 6, 7</strong>"
          }
        ]
      },
      {
        "id": "explain",
        "type": "selfWrite",
        "phase": "VYSVETLI",
        "skill": "matematická komunikácia",
        "title": "Ako zvolím postup",
        "prompt": "Opíš vlastnými slovami, podľa čoho zistíš, ktorý postup použiješ pri danej nerovnici, a aké dve chyby si budeš pri kontrole najviac strážiť.",
        "model": "<strong>MOŽNÁ FORMULÁCIA:</strong> Pozriem sa, či je neznáma v menovateli. Ak nie, riešim ekvivalentnými úpravami a pri delení záporným číslom otočím znak. Ak áno, zapíšem podmienku, prevediem na jeden zlomok s nulou na pravej strane a použijem tabuľku znamienok. Strážim si otočenie znaku a hranicu intervalu (patrí/nepatrí, najmä nulový bod menovateľa).",
        "placeholder": "Najprv sa pozriem, či..."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako som na tom?",
        "skills": [
          "rozpoznanie typu nerovnice",
          "lineárne nerovnice a otočenie znaku",
          "nerovnice s neznámou v menovateli",
          "zápis intervalom a zjednotením",
          "slovné úlohy s nerovnicami"
        ],
        "prompt": "Označ, ako dobre tomu teraz rozumieš. Nie je to známka; pri 🔴 alebo 🟡 sa vráť k príkladom A a B na začiatku."
      }
    ]
  },
  "worksheet": {
    "tasks": [
      {
        "id": "w1",
        "level": "zaklad",
        "space": 4,
        "text": "Vyrieš nerovnicu 7 − 2x < 3.",
        "answer": "−2x &lt; −4, delíme −2 a otočíme znak: x > 2, (2; ∞)"
      },
      {
        "id": "w2",
        "level": "zaklad",
        "space": 5,
        "text": "Vyrieš nerovnicu (x + 3)/(x − 1) ≥ 0.",
        "answer": "Nulové body −3 (patrí) a 1 (nepatrí). Podiel je kladný vľavo od −3 a vpravo od 1: (−∞; −3⟩ ∪ (1; ∞)"
      },
      {
        "id": "w3",
        "level": "rozsirenie",
        "space": 5,
        "text": "Vyrieš nerovnicu 3(x + 2) − 5 ≤ 4x − 1.",
        "answer": "3x + 1 ≤ 4x − 1, 2 ≤ x, ⟨2; ∞)"
      },
      {
        "id": "w4",
        "level": "rozsirenie",
        "space": 6,
        "text": "Vyrieš nerovnicu 8/(x − 3) < 2.",
        "answer": "(14 − 2x)/(x − 3) &lt; 0, teda (x − 7)/(x − 3) > 0: (−∞; 3) ∪ (7; ∞)"
      },
      {
        "id": "w5",
        "level": "rozsirenie",
        "space": 4,
        "text": "Súčet troch po sebe idúcich prirodzených čísel je menší ako 50. Aké je najväčšie možné najmenšie z týchto čísel?",
        "answer": "n + (n + 1) + (n + 2) &lt; 50, 3n + 3 &lt; 50, n &lt; 15,67, najväčšie n = 15 (15 + 16 + 17 = 48)"
      },
      {
        "id": "w6",
        "level": "bonus",
        "space": 6,
        "text": "Vyrieš nerovnicu 2x/(x + 1) ≤ 1.",
        "answer": "(2x − x − 1)/(x + 1) ≤ 0, teda (x − 1)/(x + 1) ≤ 0: (−1; 1⟩"
      }
    ]
  }
});
