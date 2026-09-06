/*
  Skopíruj tento súbor do cesty z registry.js (pole `file` danej témy) a uprav
  obsah. Zachovaj presne to isté `id`, aké má téma v registry.js — inak sa
  modul nezaregistruje pod správnym záznamom.

  Pravidlá obsahu pozri v PravidlaTvorbyModulov.txt a docs/AUTHORING.md
  (typy aktivít, čo je „dôveryhodné HTML“ vs. čo sa escapuje, koľko bodov
  ktorý typ aktivity dáva). Pred odovzdaním spusti `node tools/audit.mjs`.

  Tvar nižšie zodpovedá tomu, čo core/views-teacher.js (metodická karta)
  a core/views-student.js (úvodná obrazovka témy) skutočne čítajú — všetky
  polia označené ako povinné musia byť vyplnené, inak stránka spadne s
  chybou pri vykresľovaní (napr. `teacher.goals.map(...)` na `undefined`).
*/
MathPlatform.registerModule({
  id: 'SEM-PRESNE-ID-Z-REGISTRY',

  // Metodická karta CELEJ hodiny (nielen digitálnej časti) — vidí ju iba
  // učiteľ, cez metodickú kartu. Všetky polia označené (pole) sú polia
  // reťazcov, aj keď majú iba jednu položku.
  teacher: {
    placement: '',        // reťazec: napr. "1. ročník · Názov celku · Hodina N"
    prerequisites: [],    // (pole) čo žiak už musí vedieť (ZŠ + doteraz prebraté učivo)
    planContent: [],      // (pole) obsahový štandard/obsah presne podľa tematického plánu
    planPerformance: [],  // (pole) výkonový štandard presne podľa tematického plánu
    goals: [],            // (pole) ciele hodiny
    competencies: [],     // (pole) rozvíjané kompetencie
    enrichment: [],       // (pole) obohatenie podľa návrhu maturitného štandardu (nikdy neurčuje obsah)
    flow: [],             // (pole) minútový priebeh CELEJ hodiny, vrátane častí mimo aplikácie
    diagnostics: [],      // (pole) čo modul diagnostikuje pre učiteľa
    partialUse: [],       // (pole) ktoré časti možno použiť samostatne / vynechať
  },

  // Iba tá časť hodiny, kde sa naozaj používa aplikácia (často kratšia než
  // celá hodina) — pozri PravidlaTvorbyModulov.txt, rule 3.
  student: {
    title: '',            // názov témy zobrazený žiakovi
    subtitle: '',         // podnadpis / spresnenie
    intro: '',            // krátky úvodný text pred "Začať samostatne"
    estimatedTime: '',    // napr. "≈ 15 min" — iba digitálna časť, nie celá hodina
    activities: [
      // Príklad — najjednoduchšie tri typy. Ďalšie typy (sortChoice, matrix,
      // numberInput, selfWrite, notebook, coordinatePlot) pozri docs/AUTHORING.md
      // alebo ktorýkoľvek hotový modul v modules/<ročník>/.
      {
        id: 'uvod',
        type: 'info',
        phase: 'POCHOP',
        title: 'Názov kroku',
        html: '<p>Text, ktorý žiak uvidí. Smie obsahovať HTML (napr. <strong>).</strong></p>',
      },
      {
        id: 'over-1',
        type: 'choice',
        phase: 'OVER SI',
        skill: 'názov zručnosti pre súhrn učiteľa',
        // rule 7: všetko potrebné na odpoveď musí byť tu v question, nie iba v prompte.
        question: 'Otázka, ktorá je sama osebe úplne zrozumiteľná?',
        options: ['Prvá možnosť', 'Druhá možnosť', 'Tretia možnosť'],
        answer: 1, // index správnej možnosti — rozlož správne odpovede medzi rôznymi modulmi (rule 8)
        correct: 'Krátke vysvetlenie, prečo je to správne — zobrazí sa po správnej odpovedi.',
        hint: 'Pomôcka po prvom nesprávnom pokuse — nesmie prezradiť riešenie.',
      },
      {
        id: 'zaver',
        type: 'reflection',
        phase: 'ZÁVER',
        title: 'Ako to vidíš teraz?',
        prompt: 'Označ, ako dobre tomu teraz rozumieš. Nie je to známka.',
        skills: ['prvá zručnosť tejto témy', 'druhá zručnosť tejto témy'],
      },
    ],
  },
});
