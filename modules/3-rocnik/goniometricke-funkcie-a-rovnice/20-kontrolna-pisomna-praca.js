// Kontrolná písomná práca (hodina 20). Písomka sa hrá v mobile (core/exam.js), ale
// zadania ani kľúč sú ZÁMERNE mimo tohto verejného súboru: ležia na serveri v
// api/_exams/3-u01-h020.js a žiakom ich pošle učiteľka cez kód hodiny.
// Preto tu nie sú žiadne `activities`.
MathPlatform.registerModule({
  id: '3-u01-h020',
  teacher: {
    placement: '3. ročník · Goniometrické funkcie, goniometrické, rovnice · Hodina 20 · Kontrolná písomná práca',
    prerequisites: [
      'rovnice sin x = a a cos x = a vrátane výberu riešení z intervalu (hodiny 14–15)',
      'rovnice so zloženým argumentom: cos(x − π/5) = 1/2, sin 2x = c (hodiny 16–17)',
      'kvadratické rovnice vzhľadom na sin x alebo cos x a substitúcia t (hodina 18)',
      'opakovanie hodina 19'
    ],
    planContent: [
      'Aktuálny tematický plán uvádza v celku Goniometrické funkcie, goniometrické rovnice kontrolnú písomnú prácu. Písomka overuje rovnice, v ktorých sa vyskytujú iba funkcie sin a cos.'
    ],
    planPerformance: [
      'Poznať pojem jednotková kružnica.',
      'Vedieť zobraziť na jednotkovej kružnici ľubovoľné reálne číslo a priradiť reálne číslo bodu kružnice.',
      'Zadefinovať funkcie sin x, cos x, tg x, cotg x a opísať ich vlastnosti.',
      'Poznať a vedieť použiť goniometrické vzorce.',
      'Vyriešiť goniometrickú rovnicu.'
    ],
    goals: [
      'overiť riešenie základných rovníc sin x = a, cos x = a vrátane hraničných prípadov a rovníc bez riešenia',
      'overiť rovnice so zloženým argumentom: substitúcia u, návrat k x, výber z intervalu, kratšia perióda pri 2x',
      'overiť kvadratické rovnice: substitúcia t, vyradenie koreňa mimo ⟨−1; 1⟩, návrat k x',
      'hodnotiť postup, nielen výsledok: každý krok postupu má vlastné body'
    ],
    competencies: [
      'voľba správneho postupu podľa tvaru rovnice',
      'presný zápis medzivýsledkov (substitúcia, korene, riešenia v intervale)',
      'argumentácia pri vyraďovaní koreňa alebo riešenia mimo intervalu'
    ],
    enrichment: [
      'Návrh maturitného štandardu je použitý iba ako obohatenie spôsobu hodnotenia: dôraz na postup a zdôvodnenie, nie len na výsledok. Poradie a rozsah učiva určuje tematický plán.'
    ],
    flow: [
      '5 min: pripojenie žiakov kódom/QR, rozdelenie do skupín A a B',
      '35–40 min: samostatná práca. Postup žiaci počítajú na papieri, medzivýsledky a výsledky zapisujú do aplikácie po krokoch (riešenia ako násobky π zapisujú iba číslom pred π)',
      'koniec: ukončenie písomky (odpovede sa odovzdajú automaticky)',
      'po hodine: kontrola v tabuľke Opravovanie, ručná úprava bodov (napr. následná chyba), export CSV; výsledky môžeš zverejniť žiakom'
    ],
    diagnostics: [
      'pri základných rovniciach: či žiak nájde obe riešenia v intervale a rozlíši rovnicu bez riešenia',
      'pri zloženom argumente: či sa žiak správne vráti od u k x (smer posunu) a vydelí aj člen 2kπ pri 2x',
      'pri kvadratických rovniciach: či žiak vyradí koreň mimo ⟨−1; 1⟩ a nezabudne vrátiť sa k x',
      'následné chyby: ak žiak počíta správne s vlastným chybným medzivýsledkom, body za ďalšie kroky môžeš ručne upraviť',
      'počet opustení aplikácie počas písomky (len informácia)'
    ],
    partialUse: [
      'Písomku spúšťaš v učiteľskej časti tlačidlom „Spustiť písomku“; žiak si ju samostatne otvoriť nemôže.',
      'Pre žiaka bez mobilu si môžeš vytlačiť zadanie skupiny A alebo B (aj s kľúčom) a opraviť ho ručne.',
      'Výsledky sa neukladajú na server. Priebeh sa zálohuje v prehliadači učiteľky; po písomke si stiahni CSV.'
    ]
  },
  student: {
    title: 'Kontrolná písomná práca: Goniometrické rovnice',
    subtitle: 'Hodina 20 · Goniometrické rovnice',
    intro: 'Písomka má úlohy rozdelené na kroky. Za každý správny krok postupu získaš body. Zadanie sa ti zobrazí po pripojení kódom od učiteľky.',
    estimatedTime: '45 min',
    exam: true,
    activities: []
  }
});
