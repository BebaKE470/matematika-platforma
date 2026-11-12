// Príprava na kontrolnú písomnú prácu z celého tematického celku Planimetria. Rovnako ako ostrá písomka sa hrá v mobile (core/exam.js); zadania ani kľúč sú ZÁMERNE mimo tohto verejného súboru: ležia na serveri v api/_exams/3-u02-h040p.js. Samostatná písomka s jednou skupinou.
MathPlatform.registerModule({
  id: '3-u02-h040p',
  teacher: {
    placement: '3. ročník · Planimetria · pred 40. hodinou: Príprava na kontrolnú písomnú prácu z celého celku',
    prerequisites: [
      'trojuholník, štvoruholníky a ich obvody a obsahy',
      'pravidelné mnohouholníky: súčet a veľkosť vnútorných uhlov, počet uhlopriečok',
      'kruh a jeho časti: obvod, obsah, kruhový výsek, medzikružie',
      'praktické úlohy s dlažbou a pozemkom',
      'Pytagorova veta a základné algebraické úpravy z predchádzajúcich ročníkov'
    ],
    planContent: [
      'Príprava pokrýva celý tematický celok Planimetria (hodiny 22–39) pred kontrolnou písomnou prácou v 40. hodine.'
    ],
    planPerformance: [
      'Poznať a vedieť opísať vlastnosti základných rovinných útvarov.',
      'Poznať a vedieť použiť vzťahy pre výpočet obvodov a obsahov základných rovinných útvarov.'
    ],
    goals: [
      'zopakovať vzorce a vlastnosti trojuholníka, štvoruholníkov, mnohouholníkov a kruhu',
      'precvičiť výpočet výšky, uhlopriečky a chýbajúcej strany pomocou Pytagorovej vety',
      'precvičiť rozdelenie zloženého útvaru na časti',
      'precvičiť uhly a počet uhlopriečok pravidelného mnohouholníka',
      'precvičiť obvod a obsah kruhu, výseku a medzikružia',
      'precvičiť slovnú praktickú úlohu s dlažbou',
      'ukázať žiakom formát písomky (riešenie po krokoch) bez stresu zo známky'
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
      '5 min: pripojenie žiakov kódom/QR (všetci riešia rovnaké zadanie, bez skupín)',
      '35–40 min: samostatná práca. Postup žiaci počítajú na papieri, výsledky zapisujú do aplikácie po krokoch',
      'koniec: ukončenie prípravy (odpovede sa odovzdajú automaticky)',
      'po hodine: v analýze triedy nájdi úlohy a kroky, ktoré robili triede problém, a prejdi ich pred ostrou písomkou; známku nezapisuj'
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
      'Prípravu spúšťaš v učiteľskej časti tlačidlom „Spustiť písomku“; žiak si ju samostatne otvoriť nemôže.',
      'Je to samostatný záznam: ostrá písomka (3-u02-h040b) sa spúšťa osobitne.',
      'Výsledky sa neukladajú na server. Priebeh sa zálohuje v prehliadači učiteľky; po písomke si stiahni CSV.'
    ]
  },
  student: {
    title: 'Príprava na písomku: Planimetria',
    subtitle: 'Pred hodinou 40 · Planimetria',
    intro: 'Toto je príprava na písomku z celého celku Planimetria. Úlohy sú rozdelené na kroky a za každý správny krok postupu získaš body. Zadanie sa ti zobrazí po pripojení kódom od učiteľky.',
    estimatedTime: '45 min',
    exam: true,
    activities: []
  }
});
