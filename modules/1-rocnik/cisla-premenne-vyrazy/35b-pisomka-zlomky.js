// Krátka písomka zo zlomkov (po hodine 35). Hrá sa v mobile (core/exam.js), ale zadania
// ani kľúč sú ZÁMERNE mimo tohto verejného súboru: ležia na serveri
// v api/_exams/1-u03-h035b.js a žiakom ich pošle učiteľka cez kód hodiny.
// Preto tu nie sú žiadne `activities`.
MathPlatform.registerModule({
  id: '1-u03-h035b',
  teacher: {
    placement: '1. ročník · Čísla, premenné, výrazy · po 35. hodine (po téme Počítanie s reálnymi číslami, zameranej na zlomky): Písomka',
    prerequisites: [
      'rozšírenie, krátenie a základný tvar zlomku',
      'spoločný menovateľ (NSN) a sčítanie a odčítanie zlomkov',
      'násobenie a delenie zlomkov, prevrátený zlomok',
      'zmiešané číslo a nepravý zlomok',
      'poradie operácií so zlomkami'
    ],
    planContent: [
      'Krátka písomka overuje obsah hodiny 35 (počítanie a úpravy zlomkov) v tematickom celku Čísla, premenné, výrazy. Percentá (33–34) tu nie sú zahrnuté.'
    ],
    planPerformance: [
      'Plán uvádza: používať kritériá deliteľnosti; určiť NSN a NSD pomocou prvočíselného rozkladu. Spoločný menovateľ a krátenie z nich vychádzajú; ostatné ciele sú didaktickým rozpracovaním, nie doplnením oficiálneho štandardu.'
    ],
    goals: [
      'overiť rozšírenie, krátenie a základný tvar zlomku',
      'overiť sčítanie a odčítanie zlomkov s rôznymi menovateľmi',
      'overiť násobenie a delenie zlomkov a prácu so zmiešanými číslami',
      'overiť poradie operácií vo výraze so zlomkami a použitie zlomkov v slovnej úlohe'
    ],
    competencies: [
      'presný zápis výpočtu po krokoch',
      'výber správneho postupu pri jednotlivých operáciách so zlomkami',
      'kontrola výsledku (základný tvar)'
    ],
    enrichment: [
      'Bonusová úloha: zložené zlomky (zlomok v čitateli alebo v menovateli).'
    ],
    flow: [
      '3 min: pripojenie žiakov kódom/QR, rozdelenie do skupín A a B',
      '15–20 min: samostatná práca. Postup žiaci počítajú na papieri, výsledky zapisujú do aplikácie po krokoch',
      'koniec: ukončenie písomky (odpovede sa odovzdajú automaticky)',
      'po hodine: kontrola v tabuľke Opravovanie, ručná úprava bodov, export CSV; výsledky môžeš zverejniť žiakom'
    ],
    diagnostics: [
      'úloha 1: či žiak vie krátiť NSD a rozšíriť zlomok na daný menovateľ',
      'úloha 2: či žiak nájde spoločný menovateľ a nesčíta čitateľov aj menovateľov',
      'úloha 3: či žiak delí zlomkom ako násobením prevráteným zlomkom a skracuje pred násobením',
      'úloha 4: či žiak správne prevádza zmiešané čísla na nepravé zlomky',
      'úloha 5: či žiak dodržiava poradie operácií so zlomkami',
      'úloha 6: či žiak zapíše slovnú úlohu zlomkami a zlomok z celku'
    ],
    partialUse: [
      'Písomku spúšťaš v učiteľskej časti tlačidlom „Spustiť písomku“; žiak si ju samostatne otvoriť nemôže.',
      'Pre žiaka bez mobilu si môžeš vytlačiť zadanie skupiny A alebo B (aj s kľúčom) a opraviť ho ručne.',
      'Všetky výsledky sa zapisujú ako celé číslo alebo zlomok a/b; zmiešané číslo sa nezapisuje.',
      'Výsledky sa neukladajú na server. Priebeh sa zálohuje v prehliadači učiteľky; po písomke si stiahni CSV.'
    ]
  },
  student: {
    title: 'Písomka: Zlomky',
    subtitle: 'Po hodine 35 · Čísla, premenné, výrazy',
    intro: 'Písomka má úlohy rozdelené na kroky. Za každý správny krok získaš body. Zadanie sa ti zobrazí po pripojení kódom od učiteľky.',
    estimatedTime: '20 min',
    exam: true,
    activities: []
  }
});
