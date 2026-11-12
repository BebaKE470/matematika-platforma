// Priebežná písomka z planimetrie (po hodine 33). Hrá sa v mobile (core/exam.js), ale zadania ani kľúč sú ZÁMERNE mimo tohto verejného súboru: ležia na serveri v api/_exams/3-u02-h033b.js a žiakom ich pošle učiteľka cez kód hodiny. Preto tu nie sú žiadne `activities`.
MathPlatform.registerModule({
  id: '3-u02-h033b',
  teacher: {
    placement: '3. ročník · Planimetria · po 33. hodine (trojuholník a štvoruholníky): Priebežná písomka',
    prerequisites: [
      'trojuholník, jeho výška a Pytagorova veta',
      'obvod a obsah trojuholníka',
      'štvorec, obdĺžnik, lichobežník, kosoštvorec, kosodĺžnik: vlastnosti, obvod a obsah',
      'Pytagorova veta a základné algebraické úpravy z predchádzajúcich ročníkov'
    ],
    planContent: [
      'Písomka overuje témy 22–33 tematického celku Planimetria: trojuholník, obvod a obsah trojuholníka, štvoruholníky, štvorec, obdĺžnik, lichobežník, kosoštvorec a kosodĺžnik. Mnohouholníky a kruh ešte nie sú zahrnuté.'
    ],
    planPerformance: [
      'Poznať a vedieť opísať vlastnosti základných rovinných útvarov.',
      'Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov.'
    ],
    goals: [
      'overiť, že žiak priradí správny vzorec k útvaru',
      'overiť rozlišovanie vlastností trojuholníka a štvoruholníkov (pravda/nepravda)',
      'overiť výpočet výšky, obvodu a obsahu trojuholníka a štvoruholníkov postupom po krokoch',
      'overiť slovnú úlohu s obdĺžnikovým pozemkom'
    ],
    competencies: [
      'presné používanie vzorcov a pojmov',
      'prepájanie vlastností útvarov s výpočtom',
      'zápis postupu do medzivýsledkov'
    ],
    enrichment: [
      'Bonusová úloha: pravouhlý lichobežník, v ktorom sa dĺžka základne získa cez Pytagorovu vetu.'
    ],
    flow: [
      '5 min: pripojenie žiakov kódom/QR, rozdelenie do skupín A a B',
      '30–35 min: samostatná práca. Postup žiaci počítajú na papieri, výsledky zapisujú do aplikácie po krokoch',
      'koniec: ukončenie písomky (odpovede sa odovzdajú automaticky)',
      'po hodine: kontrola v tabuľke Opravovanie, ručná úprava bodov, export CSV; výsledky môžeš zverejniť žiakom'
    ],
    diagnostics: [
      'úloha 1: ktoré vzorce žiaci zamieňajú (napr. trojuholník a kosodĺžnik, obvod a obsah)',
      'úloha 2: či žiak pozná vlastnosti uhlopriečok a vzťahy medzi štvoruholníkmi',
      'úlohy 3–4: či žiak vie nájsť chýbajúcu stranu alebo výšku pomocou Pytagorovej vety',
      'úlohy 5–7: či žiak postupuje správne výška → obvod → obsah',
      'úloha 8: či žiak prepojí slovnú úlohu s obvodom a obsahom'
    ],
    partialUse: [
      'Písomku spúšťaš v učiteľskej časti tlačidlom „Spustiť písomku“; žiak si ju samostatne otvoriť nemôže.',
      'Skupiny A a B majú rovnakú štruktúru, iné sú čísla a texty.',
      'Výsledky sa neukladajú na server. Priebeh sa zálohuje v prehliadači učiteľky; po písomke si stiahni CSV.'
    ]
  },
  student: {
    title: 'Písomka: Planimetria (trojuholník a štvoruholníky)',
    subtitle: 'Po hodine 33 · Planimetria',
    intro: 'Písomka má úlohy rozdelené na kroky. Za každý správny krok postupu získaš body. Zadanie sa ti zobrazí po pripojení kódom od učiteľky.',
    estimatedTime: '40 min',
    exam: true,
    activities: []
  }
});
