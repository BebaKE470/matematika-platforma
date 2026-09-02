MathPlatform.registerModule({
  "id": "1-logika-01",
  "teacher": {
    "placement": "1. ročník · Výroková formula · 2. hodina: Výrok, axióma, definícia, hypotéza",
    "prerequisites": [
      "bežné vedomosti zo ZŠ o párnych a nepárnych číslach, deliteľnosti a prvočíslach",
      "schopnosť prečítať jednoduché matematické tvrdenie a vypočítať jednoduché číselné príklady"
    ],
    "planContent": [
      "Relevantná časť obsahového štandardu tematického celku: „Výroky a ich pravdivostná hodnota.“",
      "Téma hodiny je v pláne uvedená ako „Výrok, axióma, definícia, hypotéza“."
    ],
    "planPerformance": [
      "Relevantný výkonový štandard tematického celku: určiť, či daná vetná konštrukcia je výrokom (vrátane všeobecných výrokov vyjadrených bez všeobecných kvantifikátorov).",
      "Ďalšie výkonové požiadavky tematického celku (spojky, negácia, kvantifikátory, protipríklad a dôkazy) patria do nasledujúcich hodín a tento modul ich systematicky nevyučuje."
    ],
    "goals": [
      "rozlíšiť výrok od otázky, príkazu a výrazu s neurčenou premennou",
      "pochopiť, že aj nepravdivé tvrdenie môže byť výrokom",
      "rozlíšiť definíciu od tvrdenia o konkrétnom objekte",
      "na základe niekoľkých príkladov sformulovať jednoduchú hypotézu",
      "vysvetliť vlastnými slovami, prečo konečný počet overených príkladov ešte nie je všeobecným dôkazom",
      "intuitívne vysvetliť úlohu axiómy ako základného východiska prijatého bez dokazovania"
    ],
    "competencies": [
      "presné matematické vyjadrovanie",
      "rozlišovanie tvrdenia, otázky a definície",
      "formulovanie hypotézy",
      "jednoduché zdôvodnenie a použitie protipríkladu",
      "kritické posudzovanie matematického tvrdenia",
      "prehľadný matematický zápis v zošite – rozlíšenie nadpisu, teórie, príkladu a vlastnej úlohy"
    ],
    "enrichment": [
      "Návrh nového maturitného štandardu medzi pojmami formálnej matematiky uvádza výrok, hypotézu, tvrdenie a definíciu.",
      "Modul využíva najmä obohatenie spôsobu práce: žiak vysvetľuje, formuluje tvrdenie, posudzuje argument a uvádza protipríklad.",
      "Axióma je zaradená preto, že je explicitne v aktuálnej téme tematického plánu; v návrhu nového štandardu nie je v príslušnom zozname pojmov osobitne zdôraznená."
    ],
    "flow": [
      "5–7 min: spoločné naladenie pri tabuli – štyri rôzne typy viet/zápisov, bez hotovej definície",
      "18–22 min: digitálny modul – objavovanie, krátke vysvetlenia, zošit a diagnostika",
      "8–10 min: ručné úlohy / formulovanie viet v zošite",
      "5–8 min: spoločný záver pri tabuli a presná formulácia pojmov"
    ],
    "diagnostics": [
      "rozpoznanie výroku a pravdivosti jednoduchého tvrdenia",
      "definícia × konkrétne tvrdenie",
      "hypotéza a hranice overovania príkladmi",
      "intuitívne chápanie axiómy",
      "schopnosť formulovať matematické vysvetlenie"
    ],
    "partialUse": [
      "Kroky 1–4: približne 5 min – iba objavenie pojmu výrok.",
      "Kroky 5–8: približne 5 min – definícia a matematické vyjadrovanie.",
      "Kroky 9–13: približne 6–8 min – hypotéza, príklady a argumentácia.",
      "Kroky 14–18: približne 5 min – axióma a záverečný tréning."
    ]
  },
  "student": {
    "title": "Matematický detektív",
    "subtitle": "Misia 01 · Nie každá veta je rovnaká",
    "intro": "Dnes nebudeš dostávať hotové poučky hneď na začiatku. Najprv budeš porovnávať vety a hľadať, čím sa líšia. Potom svoje pozorovanie spresníme matematickým jazykom.",
    "estimatedTime": "18–22 min",
    "activities": [
      {
        "id": "mission",
        "type": "info",
        "phase": "ZAČÍNAME",
        "title": "Čo bude tvojou úlohou?",
        "html": "<p>Matematika nepoužíva všetky vety rovnakým spôsobom. Niektoré <strong>niečo tvrdia</strong>, iné sa <strong>pýtajú</strong>, ďalšie dávajú <strong>pokyn</strong> alebo vysvetľujú význam nového pojmu.</p><p>Skús najprv rozdiely odhaliť. Keď bude treba, dostaneš krátke vysvetlenie.</p>",
        "continueLabel": "Idem pátrať"
      },
      {
        "id": "notebook-rules",
        "type": "info",
        "phase": "ZOŠIT",
        "title": "Ako budeme zapisovať do zošita?",
        "html": "<p>Zošit má byť prehľadná pomôcka na učenie, nie prepis celej aplikácie. Preto budeme rozlišovať <strong>pracovný</strong> a <strong>čistý</strong> zápis.</p><div class=\"compare\"><div><span class=\"mini-label\">PRACOVNÝ ZÁPIS</span><br><strong>Môžem sa mýliť.</strong><br><small>vlastný pokus, hypotéza, vysvetlenie alebo náčrt; neškrtaj ho len preto, že ho neskôr spresníš</small></div><div><span class=\"mini-label\">ČISTÝ ZÁPIS</span><br><strong>Toto si mám odniesť.</strong><br><small>presná definícia, pravidlo, vzorový príklad alebo opravená formulácia</small></div></div><p>V čistom zápise budeme používať označenia <strong>NADPIS – TEÓRIA – PRÍKLAD – ÚLOHA</strong>.</p><p class=\"keyidea\">Ak bol tvoj pracovný zápis nepresný, nemaž ho. Pod neho dopíš presnejšiu formuláciu ako OPRAVU alebo ČISTÝ ZÁPIS.</p>",
        "continueLabel": "Rozumiem zápisu"
      },
      {
        "id": "statement-1",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "Výrok",
        "prompt": "Pozri sa na vetu:",
        "stimulus": "8 + 4 = 12",
        "question": "Má zmysel rozhodovať, či je táto veta pravdivá alebo nepravdivá?",
        "options": [
          "Áno",
          "Nie"
        ],
        "answer": 0,
        "correct": "Áno. Veta niečo tvrdí a vieme rozhodnúť, že je pravdivá.",
        "hint": "Nepýtaj sa, či je veta zaujímavá. Pýtaj sa: tvrdí niečo, čomu viem priradiť pravdivosť?"
      },
      {
        "id": "statement-2",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "Výrok",
        "prompt": "Teraz podobná veta:",
        "stimulus": "17 je párne číslo.",
        "question": "Má zmysel rozhodovať, či je pravdivá alebo nepravdivá?",
        "options": [
          "Áno",
          "Nie"
        ],
        "answer": 0,
        "correct": "<strong>Dôležitý objav:</strong> áno. Veta je nepravdivá, ale stále vieme o jej pravdivosti rozhodnúť.",
        "hint": "Výrok nemusí byť pravdivý. Rozhodujúce je, či sa jeho pravdivosť dá posúdiť."
      },
      {
        "id": "statement-explain",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Čo sme práve objavili?",
        "html": "<p><strong>Výrok</strong> je tvrdenie, o ktorom môžeme rozhodnúť, či je <strong>pravdivé alebo nepravdivé</strong>.</p><div class=\"example-grid\"><div><code>8 + 4 = 12</code><br><small>výrok – pravdivý</small></div><div><code>17 je párne číslo.</code><br><small>výrok – nepravdivý</small></div></div><p class=\"keyidea\">Nepravdivý výrok je stále výrok.</p>",
        "remember": "Výrok nemusí byť pravdivý. Musí však mať jednoznačne posudzovateľnú pravdivosť."
      },
      {
        "id": "statement-check",
        "type": "sortChoice",
        "phase": "OVER SI",
        "skill": "Výrok",
        "title": "Ktoré z týchto zápisov sú výroky?",
        "items": [
          {
            "text": "Koľko je 9 · 6?",
            "answer": false,
            "why": "Je to otázka – sama nič netvrdí."
          },
          {
            "text": "Vypočítaj 25 : 5.",
            "answer": false,
            "why": "Je to pokyn/príkaz."
          },
          {
            "text": "Bratislava je hlavné mesto Slovenska.",
            "answer": true,
            "why": "Je to pravdivé tvrdenie."
          },
          {
            "text": "x je väčšie ako 5.",
            "answer": false,
            "why": "Bez určenej hodnoty x zatiaľ nevieme rozhodnúť o pravdivosti."
          }
        ],
        "labels": [
          "VÝROK",
          "NIE JE VÝROK"
        ]
      },
      {
        "id": "notebook-statement",
        "type": "notebook",
        "phase": "VYJADRI SA",
        "title": "Teraz ceruzka a zošit",
        "html": "<p><span class=\"mini-label\">NADPIS – ČISTÝ ZÁPIS</span><br><strong>Výrok, axióma, definícia, hypotéza</strong></p><p><span class=\"mini-label\">PRACOVNÝ ZÁPIS</span><br>Jednou vetou skús vlastnými slovami napísať: Čo musí spĺňať veta, aby bola výrokom? Zatiaľ sa nesnaž o učebnicovú definíciu.</p><p><span class=\"mini-label\">ÚLOHA</span><br><strong>Úloha 1:</strong> Napíš jeden vlastný pravdivý výrok.<br><strong>Úloha 2:</strong> Napíš jeden vlastný nepravdivý výrok.<br><strong>Úloha 3:</strong> Napíš jednu vetu, ktorá nie je výrokom.</p><p class=\"muted\">Po odkrytí vzoru si svoj pracovný zápis porovnaj. Ak treba, nič nemaž – pod neho dopíš ČISTÝ ZÁPIS.</p>",
        "model": "<strong>ČISTÝ ZÁPIS – TEÓRIA:</strong> „Výrok je tvrdenie, o ktorom môžeme rozhodnúť, či je pravdivé alebo nepravdivé.“<br><br><strong>VZOROVÝ PRÍKLAD:</strong> 8 + 4 = 12 – pravdivý výrok; 17 je párne číslo – nepravdivý výrok. Ak bola tvoja prvá veta nepresná, nechaj ju v pracovnom zápise a pod ňu dopíš túto presnejšiu formuláciu."
      },
      {
        "id": "definition-discover",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "Definícia",
        "prompt": "Nový spolužiak nevie, čo znamená „párne číslo“.",
        "question": "Ktorá veta mu vysvetľuje význam tohto pojmu?",
        "options": [
          "18 je párne číslo.",
          "Párne číslo je celé číslo deliteľné dvoma.",
          "Je číslo 18 párne?",
          "Nájdi všetky párne čísla menšie ako 10."
        ],
        "answer": 1,
        "correct": "Presne. Táto veta nevymenúva iba jeden príklad – vysvetľuje, čo pojem znamená.",
        "hint": "Hľadaj vetu, podľa ktorej by si vedel rozhodovať aj o číslach, ktoré v zadaní vôbec nie sú."
      },
      {
        "id": "definition-explain",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Definícia určuje význam pojmu",
        "html": "<p><strong>Definícia</strong> nám hovorí, čo presne daným matematickým pojmom myslíme.</p><div class=\"compare\"><div><span class=\"mini-label\">DEFINÍCIA</span><br>„Párne číslo je celé číslo deliteľné dvoma.“</div><div><span class=\"mini-label\">TVRDENIE O PRÍKLADE</span><br>„18 je párne číslo.“</div></div><p>Prvá veta vysvetľuje pojem. Druhá už používa tento pojem na konkrétny objekt.</p>",
        "remember": "Definícia nie je zoznam príkladov. Určuje význam pojmu."
      },
      {
        "id": "definition-language",
        "type": "selfWrite",
        "phase": "VYJADRI SA",
        "skill": "Matematická komunikácia",
        "title": "Povedz to matematicky",
        "promptHtml": "<span class=\"mini-label\">PRACOVNÝ ZÁPIS</span><br>Do zošita si označ <strong>Úloha 4:</strong> a dokonči vetu: „Veta Párne číslo je celé číslo deliteľné dvoma je definícia, pretože…“ Sformuluj to najprv vlastnými slovami.",
        "model": "<strong>OPRAVA / ČISTÝ ZÁPIS:</strong> „…pretože určuje význam pojmu párne číslo a umožňuje podľa tejto vlastnosti rozhodnúť, ktoré celé čísla sú párne.“ Ak je tvoja veta významovo správna, nemusíš ju prepisovať. Ak je nepresná, dopíš pod ňu túto presnejšiu formuláciu."
      },
      {
        "id": "hypothesis-lab",
        "type": "info",
        "phase": "OBJAVUJ",
        "title": "Matematické laboratórium",
        "html": "<p><span class=\"mini-label\">PRÍKLAD</span><br>Nasledujúce výpočty sú <strong>ukážkové príklady</strong>. Nemusíš ich všetky opisovať – sleduj v nich vzor.</p><div class=\"math-list\"><code>1 + 3 = 4</code><code>3 + 5 = 8</code><code>5 + 7 = 12</code><code>7 + 9 = 16</code></div><p>Čo majú sčítance spoločné? A čo výsledky?</p>",
        "continueLabel": "Vidím vzor"
      },
      {
        "id": "hypothesis-choice",
        "type": "choice",
        "phase": "OBJAVUJ",
        "skill": "Hypotéza",
        "prompt": "Na základe predchádzajúcich príkladov Adam povie:",
        "stimulus": "„Súčet každých dvoch nepárnych čísel je párny.“",
        "question": "Ako najlepšie opíšeme toto tvrdenie v tejto chvíli?",
        "options": [
          "Je to definícia párneho čísla.",
          "Je to hypotéza vytvorená z pozorovaného vzoru.",
          "Je to axióma.",
          "Je to otázka."
        ],
        "answer": 1,
        "correct": "Áno. Adam z konkrétnych príkladov zovšeobecnil pozorovaný vzor.",
        "hint": "Adam zatiaľ pravidlo pozoroval na niekoľkých prípadoch. Ešte nevysvetlil, prečo musí platiť vždy."
      },
      {
        "id": "hypothesis-explain",
        "type": "explain",
        "phase": "POCHOP",
        "title": "Od príkladov k hypotéze",
        "html": "<p><strong>Hypotéza</strong> je tvrdenie, ktoré na základe pozorovaní alebo skúseností predpokladáme, ale jeho všeobecnú platnosť ešte treba overiť alebo zdôvodniť.</p><p>Príklady nám môžu ukázať vzor a pomôcť hypotézu <strong>vysloviť</strong>. Samy však ešte nevysvetľujú, prečo musí tvrdenie platiť pre všetky prípady.</p>",
        "remember": "Príklady → môžu viesť k hypotéze. Všeobecný dôkaz → musí vysvetliť, prečo tvrdenie platí vždy."
      },
      {
        "id": "hypothesis-proof",
        "type": "choice",
        "phase": "PREMÝŠĽAJ",
        "skill": "Argumentácia",
        "prompt": "Adam overil svoju hypotézu ešte na 100 rôznych dvojiciach nepárnych čísel.",
        "question": "Dokázal tým, že tvrdenie platí pre všetky nepárne čísla?",
        "options": [
          "Áno, 100 príkladov už stačí.",
          "Nie, stále overil iba konečný počet prípadov."
        ],
        "answer": 1,
        "correct": "Správne. Sto príkladov je silná podpora pre hypotézu, ale stále to nie je všeobecné zdôvodnenie.",
        "hint": "Koľko dvojíc nepárnych čísel existuje? Je ich iba 100?"
      },
      {
        "id": "counterexample",
        "type": "numberInput",
        "phase": "VYJADRI SA",
        "skill": "Argumentácia",
        "title": "Jeden príklad môže niekedy stačiť",
        "prompt": "Niekto tvrdí: „Každé nepárne prirodzené číslo je prvočíslo.“ Zadaj jedno nepárne prirodzené číslo, ktoré ukáže, že tvrdenie neplatí.",
        "validate": "oddComposite",
        "success": "Výborne. Jediný protipríklad stačí na vyvrátenie všeobecného tvrdenia.",
        "hint": "Skús nepárne číslo väčšie ako 5, ktoré sa dá zapísať ako súčin dvoch prirodzených čísel väčších ako 1."
      },
      {
        "id": "axiom-explain",
        "type": "explain",
        "phase": "POCHOP",
        "title": "A kde sa berú úplne prvé východiská?",
        "html": "<p>Pri budovaní matematickej teórie nemôžeme každé tvrdenie dokazovať pomocou ešte skoršieho tvrdenia donekonečna.</p><div class=\"chain\"><span>základné východiská</span><b>→</b><span>definície a tvrdenia</span><b>→</b><span>ďalšie výsledky</span></div><p>Niektoré základné tvrdenia v danej teórii prijímame ako východiská bez dokazovania. Nazývame ich <strong>axiómy</strong>.</p><p class=\"muted\">Na tejto hodine nám stačí táto intuitívna predstava. Formálne budovanie teórií teraz nepotrebujeme.</p>",
        "remember": "Axióma = základné východisko prijaté v danej teórii bez dokazovania."
      },
      {
        "id": "axiom-check",
        "type": "choice",
        "phase": "OVER SI",
        "skill": "Axióma",
        "question": "Ktorá veta najlepšie vystihuje úlohu axiómy?",
        "options": [
          "Je to základné východisko prijaté bez dokazovania.",
          "Je to každé tvrdenie, ktoré sa nám zdá pravdivé.",
          "Je to otázka, ktorú nevieme vyriešiť.",
          "Je to definícia každého nového pojmu."
        ],
        "answer": 0,
        "correct": "Áno. Axiómu používame ako základné východisko danej teórie.",
        "hint": "Spomeň si na reťazec: základné východiská → ďalšie tvrdenia."
      },
      {
        "id": "mixed",
        "type": "matrix",
        "phase": "OVER SI",
        "skill": "Rozlišovanie pojmov",
        "title": "Kto som?",
        "labels": [
          "výrok",
          "definícia",
          "hypotéza",
          "axióma"
        ],
        "items": [
          {
            "text": "Číslo 27 je deliteľné tromi.",
            "answer": "výrok"
          },
          {
            "text": "Párne číslo je celé číslo deliteľné dvoma.",
            "answer": "definícia"
          },
          {
            "text": "Po niekoľkých pokusoch predpokladáme, že pozorovaný vzor platí vo všetkých prípadoch.",
            "answer": "hypotéza"
          },
          {
            "text": "Základné tvrdenie prijaté v danej teórii bez dokazovania.",
            "answer": "axióma"
          }
        ]
      },
      {
        "id": "matura-format",
        "type": "choice",
        "phase": "PRENOS",
        "skill": "Maturitný formát",
        "prompt": "Formát podobný testovej úlohe – obsah zostáva na úrovni toho, čo už poznáš.",
        "stimulus": "I. 18 je deliteľné tromi.\nII. Každé nepárne prirodzené číslo je prvočíslo.\nIII. Existuje prvočíslo, ktoré je párne.",
        "question": "Ktorá trojica pravdivostných hodnôt je správna?",
        "options": [
          "P – N – P",
          "P – P – N",
          "N – N – P",
          "P – N – N"
        ],
        "answer": 0,
        "correct": "I je pravdivý výrok. II je nepravdivý (napríklad 9 je nepárne, ale nie je prvočíslo). III je pravdivý, pretože 2 je párne prvočíslo.",
        "hint": "Pri II hľadaj protipríklad. Pri III si spomeň na najmenšie prvočíslo."
      },
      {
        "id": "final-language",
        "type": "selfWrite",
        "phase": "VYJADRI SA",
        "skill": "Matematická komunikácia",
        "title": "Štyri pojmy – najprv skús, potom uprac",
        "promptHtml": "<span class=\"mini-label\">PRACOVNÝ ZÁPIS</span><br>Bez pozerania späť si stručne napíš, čo podľa teba znamená: výrok, definícia, hypotéza, axióma. Tento prvý zápis je kontrola tvojho porozumenia – ešte ho nepovažuj za definitívnu teóriu.",
        "model": "<strong>ČISTÝ ZÁPIS – TEÓRIA, ZAPAMÄTAJ SI:</strong><br>výrok – tvrdenie s posudzovateľnou pravdivosťou;<br>definícia – určuje význam pojmu;<br>hypotéza – predpokladané tvrdenie, ktorého všeobecnú platnosť treba zdôvodniť;<br>axióma – základné východisko prijaté bez dokazovania.<br><br>Svoj pracovný zápis neškrtaj. Ak sa líši alebo je nepresný, pod neho dopíš túto čistú verziu."
      },
      {
        "id": "reflection",
        "type": "reflection",
        "phase": "ZÁVER",
        "title": "Ako tomu rozumieš teraz?",
        "skills": [
          "výrok",
          "definícia",
          "hypotéza",
          "axióma"
        ],
        "prompt": "Pri každom pojme vyber, ako sa cítiš. Toto nie je známka – pomáha ti pomenovať, čo ešte potrebuješ doplniť."
      }
    ]
  }
});
