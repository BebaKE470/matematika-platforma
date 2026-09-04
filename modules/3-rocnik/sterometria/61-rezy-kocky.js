MathPlatform.registerModule({
  "id": "3-u04-h061",
  "teacher": {
    "placement": "3. ročník · Sterometria · Hodina 61: Rezy kocky",
    "prerequisites": [
      "učivo ZŠ o bodoch, priamkach, rovinách a základných telesách",
      "predchádzajúci tematický celok Stereometria – metrické úlohy",
      "priestorová orientácia a označenie kocky ABCDEFGH; pri rezoch aj učivo predchádzajúcich hodín tohto celku"
    ],
    "planContent": [
      "Tematický plán uvádza pre celý celok: „Základné pojmy geometrie v priestore; Vzájomné polohy priamok a rovín; Rezy kocky.“",
      "Téma hodiny podľa tematického plánu: „Rezy kocky“."
    ],
    "planPerformance": [
      "Tematický plán uvádza pre celý celok: „Poznať vzťahy v kocke. Vedieť sa priestorovo orientovať v kocke.“",
      "ŠkVP pre 3. ročník konkretizuje: riešiť úlohy o vzájomnej polohe priamok a rovín v kocke, orientovať sa v priestore kocky a riešiť úlohy na rez kocky rovinou."
    ],
    "goals": [
      "dokončiť rez kocky rovinou a overiť, že každá strana rezu leží v jednej stene kocky",
      "presne používať geometrické pojmy a svoje rozhodnutie stručne zdôvodniť"
    ],
    "competencies": [
      "priestorová predstavivosť a geometrická reprezentácia",
      "matematická komunikácia a argumentácia",
      "analýza chyby a kontrola riešenia",
      "digitálna kompetencia pri krátkej interaktívnej diagnostike"
    ],
    "enrichment": [
      "Návrh maturitného štandardu je použitý iba ako obohatenie spôsobu práce: presná reprezentácia priestorovej situácie, argumentácia a kontrola. Neurčuje poradie ani rozsah učiva."
    ],
    "estimatedTime": "45 min hodina; platforma približne 15 min aktívnej práce",
    "flow": [
      "0–5 min: aktivácia predchádzajúcich vedomostí a priestorový náčrt",
      "5–15 min: výklad/objavovanie alebo ručná konštrukcia podľa témy",
      "15–25 min: práca vo dvojiciach alebo ručné úlohy s kockou",
      "25–40 min: približne 15 min interaktívna platforma – viac krátkych rozhodovacích a argumentačných aktivít",
      "40–45 min: spoločné zdôvodnenie chýb, zhrnutie a exit ticket mimo platformy"
    ],
    "diagnostics": [
      "či žiak rozhoduje podľa geometrických vlastností, nie iba podľa vzhľadu perspektívneho obrázka",
      "či rozlišuje rovnobežné a mimobežné priamky",
      "pri rezoch či kontroluje, že každá strana rezu leží v konkrétnej stene",
      "či dokáže stručne zdôvodniť rozhodnutie"
    ],
    "partialUse": [
      "Platforma je navrhnutá na približne 15 minút a obsahuje viac krátkych aktivít s okamžitou spätnou väzbou.",
      "Ručný náčrt, model kocky, konštrukcia rezu a argumentácia na papieri zostávajú súčasťou vyučovacej hodiny a mobil ich nenahrádza."
    ],
    "notebook": "Ak je v module teoretický zápis, žiak vidí presné hotové znenie. Konštrukčné úlohy rieši ručne do zošita."
  },
  "student": {
    "title": "Rezy kocky",
    "subtitle": "Téma 61 · Sterometria",
    "intro": "15-minútová interaktívna časť: náročnejšie rezy kocky a kontrola konštrukcie. Rozhoduj podľa vlastností priestoru, nie iba podľa toho, ako obrázok vyzerá.",
    "estimatedTime": "cca 15 min",
    "activities": [
      {
        "id": "v",
        "type": "info",
        "phase": "PRECVIČ",
        "title": "Rez vzniká po stenách",
        "html": "<div class=\"logic-visual\"><svg viewBox=\"0 0 620 330\" role=\"img\" aria-label=\"Kocka ABCDEFGH\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"><path d=\"M120 110 L360 110 L470 55 L230 55 Z\"/><path d=\"M120 110 L120 270 L360 270 L360 110\"/><path d=\"M360 270 L470 215 L470 55\"/><path d=\"M120 270 L230 215 L470 215\" stroke-dasharray=\"7 7\" opacity=\".55\"/><path d=\"M230 55 L230 215\" stroke-dasharray=\"7 7\" opacity=\".55\"/></g><g fill=\"currentColor\" font-family=\"system-ui\" font-size=\"18\"><text x=\"98\" y=\"105\">A</text><text x=\"365\" y=\"105\">B</text><text x=\"480\" y=\"55\">C</text><text x=\"215\" y=\"45\">D</text><text x=\"98\" y=\"292\">E</text><text x=\"365\" y=\"292\">F</text><text x=\"480\" y=\"230\">G</text><text x=\"210\" y=\"235\">H</text></g></svg></div><p>Pri reze nehádame obrazec. Hľadáme postupne úsečky, v ktorých rovina rezu pretína jednotlivé steny kocky.</p>"
      },
      {
        "id": "e",
        "type": "explain",
        "phase": "PRECVIČ",
        "title": "Pravidlo konštrukcie",
        "html": "<p>Ak poznáš dva body roviny rezu na tej istej stene kocky, spoj ich. Táto úsečka je časťou rezu. Potom pokračuj cez susedné steny. Výsledný rez musí byť uzavretý mnohouholník.</p>"
      },
      {
        "id": "q0",
        "type": "choice",
        "phase": "PRECVIČ",
        "title": "Krok rezu",
        "skill": "rez kocky",
        "question": "Rovina rezu má na jednej stene dva známe body. Čo urobíš ako prvé?",
        "options": [
          "Spojím ich úsečkou v tejto stene.",
          "Spojím každý bod so stredom kocky.",
          "Vypočítam objem kocky."
        ],
        "answer": 0,
        "correct": "Pri reze vždy kontroluj, v ktorej stene práve pracuješ."
      },
      {
        "id": "q1",
        "type": "choice",
        "phase": "PRECVIČ",
        "title": "Krok rezu",
        "skill": "rez kocky",
        "question": "Kde môžu ležať vrcholy rezu kocky?",
        "options": [
          "Na hranách kocky.",
          "Iba vo vrcholoch kocky.",
          "Iba v strede stien."
        ],
        "answer": 0,
        "correct": "Pri reze vždy kontroluj, v ktorej stene práve pracuješ."
      },
      {
        "id": "q2",
        "type": "choice",
        "phase": "PRECVIČ",
        "title": "Krok rezu",
        "skill": "rez kocky",
        "question": "Čo musí platiť o susedných stranách rezu?",
        "options": [
          "Stretávajú sa na tej istej hrane kocky.",
          "Musia byť vždy rovnobežné.",
          "Musia mať rovnakú dĺžku."
        ],
        "answer": 0,
        "correct": "Pri reze vždy kontroluj, v ktorej stene práve pracuješ."
      },
      {
        "id": "q3",
        "type": "choice",
        "phase": "PRECVIČ",
        "title": "Krok rezu",
        "skill": "rez kocky",
        "question": "Kedy je konštrukcia rezu dokončená?",
        "options": [
          "Keď vznikne uzavretý mnohouholník a jeho strany ležia v stenách kocky.",
          "Keď nájdeme prvé dva body.",
          "Keď nakreslíme uhlopriečku kocky."
        ],
        "answer": 0,
        "correct": "Pri reze vždy kontroluj, v ktorej stene práve pracuješ."
      },
      {
        "id": "q4",
        "type": "choice",
        "phase": "PRECVIČ",
        "title": "Krok rezu",
        "skill": "rez kocky",
        "question": "Žiak spojil dva body rezu, ktoré neležia na tej istej stene, priamou úsečkou. Čo treba skontrolovať?",
        "options": [
          "Či táto úsečka naozaj leží v rovine rezu a v príslušnej stene; inak ju nemožno použiť ako stranu rezu.",
          "Iba jej dĺžku.",
          "Iba či je vodorovná."
        ],
        "answer": 0,
        "correct": "Pri reze vždy kontroluj, v ktorej stene práve pracuješ."
      },
      {
        "id": "q5",
        "type": "choice",
        "phase": "PRECVIČ",
        "title": "Krok rezu",
        "skill": "rez kocky",
        "question": "Prečo môže byť pri náročnejšom reze užitočná rovnobežnosť protiľahlých stien?",
        "options": [
          "Pomáha preniesť smer priesečníc roviny rezu s rovnobežnými stenami.",
          "Zaručuje, že rez je vždy štvorec.",
          "Zaručuje, že rez prechádza stredom kocky."
        ],
        "answer": 0,
        "correct": "Pri reze vždy kontroluj, v ktorej stene práve pracuješ."
      },
      {
        "id": "sort",
        "type": "sortChoice",
        "phase": "PRECVIČ",
        "title": "Kontrola postupu",
        "skill": "postup",
        "question": "Označ kroky, ktoré patria do správnej konštrukcie rezu.",
        "items": [
          {
            "text": "nájsť známe body roviny rezu na hranách",
            "correct": true
          },
          {
            "text": "spájať dva body, ak ležia na tej istej stene",
            "correct": true
          },
          {
            "text": "uzavrieť vzniknutý mnohouholník",
            "correct": true
          },
          {
            "text": "spojiť ľubovoľné dva body bez kontroly steny",
            "correct": false
          }
        ]
      },
      {
        "id": "sw",
        "type": "selfWrite",
        "phase": "PRECVIČ",
        "title": "Prečo nestačí odhad?",
        "skill": "argumentácia",
        "prompt": "Vysvetli, prečo pri reze kocky nestačí nakresliť obrazec „podľa oka“.",
        "model": "Každá strana rezu musí byť priesečnicou roviny rezu s konkrétnou stenou kocky. Preto treba body a úsečky konštruovať podľa stien a kontrolovať, že výsledok tvorí uzavretý mnohouholník."
      },
      {
        "id": "nb",
        "type": "notebook",
        "phase": "PRECVIČ",
        "title": "Toto si zapíš do zošita",
        "html": "<p><strong>REZ KOCKY ROVINOU</strong></p><p>Rez telesa rovinou je prienik telesa s rovinou. Pri konštrukcii rezu kocky spájame dva body roviny rezu, ktoré ležia na tej istej stene. Postupujeme cez susedné steny, až vznikne uzavretý mnohouholník.</p><p><strong>Kontrola:</strong> každá strana rezu musí ležať v jednej stene kocky.</p>"
      },
      {
        "id": "r",
        "type": "reflection",
        "phase": "PRECVIČ",
        "title": "Ako zvládaš rezy?",
        "items": [
          "Viem nájsť prvú stranu rezu.",
          "Kontrolujem, v ktorej stene pracujem.",
          "Viem skontrolovať hotový rez."
        ]
      }
    ]
  }
});
