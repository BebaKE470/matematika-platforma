// Príprava na kontrolnú písomnú prácu z goniometrických rovníc (hodina 20). Rovnako ako ostrá
// písomka sa hrá v mobile (core/exam.js); zadania ani kľúč sú ZÁMERNE mimo tohto verejného
// súboru: ležia na serveri v api/_exams/3-u01-h020p.js. Samostatná písomka s jednou skupinou.
MathPlatform.registerModule({
  id: '3-u01-h020p',
  teacher: {
    placement: '3. ročník · Goniometrické funkcie, goniometrické rovnice · pred 20. hodinou: Príprava na kontrolnú písomnú prácu',
    prerequisites: [
      'jednotková kružnica, hodnoty sin a cos pre základné uhly',
      'periodicita funkcií sin a cos',
      'základné goniometrické rovnice sin x = a, cos x = a a výber riešení z intervalu',
      'rovnice so zloženým argumentom a substitúcia',
      'kvadratické rovnice a kvadratické goniometrické rovnice (substitúcia t)'
    ],
    planContent: [
      'Príprava na kontrolnú písomnú prácu z goniometrických rovníc so sin a cos. Aktuálny tematický plán uvádza v celku kontrolnú písomnú prácu v 20. hodine.'
    ],
    planPerformance: [
      'V zdrojovom tematickom pláne nie je pri tomto tematickom celku samostatne vyplnený výkonový štandard; ciele prípravy sú didaktickým rozpracovaním témy, nie doplnením oficiálneho štandardu.'
    ],
    goals: [
      'precvičiť základné rovnice sin x = a, cos x = a vrátane hraničných prípadov (a = ±1, 0) a rovníc bez riešenia',
      'precvičiť rovnice so zloženým argumentom a substitúciu u',
      'precvičiť kvadratické goniometrické rovnice: substitúcia t, vyradenie neprípustného koreňa, výber riešení z intervalu',
      'ukázať žiakom formát písomky (riešenie po krokoch) bez stresu zo známky'
    ],
    competencies: [
      'presný postup riešenia a jeho zápis po krokoch',
      'argumentácia pri vyraďovaní neprípustných koreňov (t mimo ⟨−1; 1⟩)',
      'práca s intervalmi a periodicitou'
    ],
    enrichment: [
      'Bonusová úloha kombinuje dve substitúcie za sebou (kvadratická rovnica pre t a posun argumentu).'
    ],
    flow: [
      '5 min: pripojenie žiakov kódom/QR (všetci riešia rovnaké zadanie, bez skupín)',
      '35–40 min: samostatná práca. Postup žiaci počítajú na papieri, výsledky zapisujú do aplikácie po krokoch',
      'koniec: ukončenie prípravy (odpovede sa odovzdajú automaticky)',
      'po hodine: v analýze triedy nájdi kroky, ktoré robili triede problém, a prejdi ich pred ostrou písomkou; známku nezapisuj'
    ],
    diagnostics: [
      'úloha 2: či žiak rozlišuje rovnice bez riešenia (|a| > 1) a hraničné prípady',
      'úlohy 3 a 4: či žiak správne nastaví interval pre u (posun a zdvojnásobenie argumentu)',
      'úlohy 5 a 6: či žiak vyradí koreň mimo ⟨−1; 1⟩ a nájde všetky riešenia v intervale',
      'počty riešení v ⟨0; 4π): či žiak chápe periodicitu',
      'počet opustení aplikácie počas prípravy (len informácia)'
    ],
    partialUse: [
      'Prípravu spúšťaš v učiteľskej časti tlačidlom „Spustiť písomku“; žiak si ju samostatne otvoriť nemôže.',
      'Je to samostatný záznam: ostrá písomka (3-u01-h020, skupiny A a B) sa spúšťa osobitne.',
      'Výsledky sa neukladajú na server. Priebeh sa zálohuje v prehliadači učiteľky; po hodine si prípadne stiahni CSV.'
    ]
  },
  student: {
    title: 'Príprava na písomku: Goniometrické rovnice',
    subtitle: 'Pred hodinou 20 · Goniometrické rovnice',
    intro: 'Toto je príprava na písomku z goniometrických rovníc. Úlohy sú rozdelené na kroky a za každý správny krok postupu získaš body. Zadanie sa ti zobrazí po pripojení kódom od učiteľky.',
    estimatedTime: '45 min',
    exam: true,
    activities: []
  }
});
