// Kontrolná písomná práca z celého tematického celku Planimetria (hodina 40). Hrá sa v mobile (core/exam.js), ale zadania ani kľúč sú ZÁMERNE mimo tohto verejného súboru: ležia na serveri v api/_exams/3-u02-h040b.js a žiakom ich pošle učiteľka cez kód hodiny. Preto tu nie sú žiadne `activities`.
MathPlatform.registerModule({
  id: '3-u02-h040b',
  teacher: {
    placement: '3. ročník · Planimetria · 40. hodina: Kontrolná písomná práca z celého celku',
    prerequisites: [
      'trojuholník, štvoruholníky a ich obvody a obsahy',
      'pravidelné mnohouholníky: súčet a veľkosť vnútorných uhlov, počet uhlopriečok',
      'kruh a jeho časti: obvod, obsah, kruhový výsek, medzikružie',
      'praktické úlohy s dlažbou a pozemkom',
      'Pytagorova veta a základné algebraické úpravy z predchádzajúcich ročníkov'
    ],
    planContent: [
      'Písomka pokrýva celý tematický celok Planimetria (hodiny 22–39): trojuholník, štvoruholníky, mnohouholníky vrátane pravidelných, kruh a jeho časti a praktické úlohy.'
    ],
    planPerformance: [
      'Poznať a vedieť opísať vlastnosti základných rovinných útvarov.',
      'Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov.'
    ],
    goals: [
      'overiť vzorce a vlastnosti útvarov',
      'overiť výpočet výšky, obvodu a obsahu postupom po krokoch',
      'overiť rozdelenie zloženého útvaru na časti',
      'overiť uhly a počet uhlopriečok pravidelného mnohouholníka',
      'overiť obvod a obsah kruhu, výseku a medzikružia',
      'overiť slovnú praktickú úlohu'
    ],
    competencies: [
      'presné používanie vzorcov a pojmov',
      'prepájanie vlastností útvarov s výpočtom',
      'zápis postupu do medzivýsledkov'
    ],
    enrichment: [
      'Bonusová úloha: výška rovnoramenného trojuholníka na rameno cez obsah.'
    ],
    flow: [
      '5 min: pripojenie žiakov kódom/QR, rozdelenie do skupín A a B',
      '35–40 min: samostatná práca. Postup žiaci počítajú na papieri, výsledky zapisujú do aplikácie po krokoch',
      'koniec: ukončenie písomky (odpovede sa odovzdajú automaticky)',
      'po hodine: kontrola v tabuľke Opravovanie, ručná úprava bodov, export CSV; výsledky môžeš zverejniť žiakom'
    ],
    diagnostics: [
      'úloha 1: ktoré vzorce žiaci zamieňajú (obvod a obsah kruhu, súčet uhlov a počet uhlopriečok)',
      'úloha 2: či žiak pozná vlastnosti útvarov a vplyv zmeny polomeru na obsah kruhu',
      'úloha 3: či žiak vie nájsť chýbajúcu stranu alebo výšku pomocou Pytagorovej vety',
      'úlohy 4–5: či žiak rozloží zložený útvar na časti a správne sčíta alebo odčíta obsahy',
      'úloha 6: či žiak vie pracovať s uhlami pravidelného mnohouholníka',
      'úloha 7: či žiak zapisuje výsledok s π ako koeficient',
      'úloha 8: či žiak správne prevádza jednotky (cm na m) a pozná obsah jednej dlaždice'
    ],
    partialUse: [
      'Písomku spúšťaš v učiteľskej časti tlačidlom „Spustiť písomku“; žiak si ju samostatne otvoriť nemôže.',
      'Skupiny A a B majú rovnakú štruktúru, iné sú čísla a texty.',
      'Výsledky sa neukladajú na server. Priebeh sa zálohuje v prehliadači učiteľky; po písomke si stiahni CSV.'
    ]
  },
  student: {
    title: 'Kontrolná písomná práca: Planimetria',
    subtitle: 'Hodina 40 · Planimetria',
    intro: 'Písomka má úlohy rozdelené na kroky. Za každý správny krok postupu získaš body. Zadanie sa ti zobrazí po pripojení kódom od učiteľky.',
    estimatedTime: '45 min',
    exam: true,
    activities: []
  }
});
