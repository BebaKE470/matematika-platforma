(function () {
  const $ = s => document.querySelector(s);
  const app = $('#app');
  let currentModule = null;
  let live = null;
  let state = freshState();
  const TEACHER_PASSWORD = '1234';
  const TEACHER_SESSION_KEY = 'mathTeacherAccess';
  const GRADING_SETTINGS_KEY = 'mathTeacherGradingSettingsV1';
  const DEFAULT_GRADING_SETTINGS = { enabled:false, thresholds:{1:90,2:75,3:50,4:30} };

  function loadGradingSettings(){
    try{
      const saved=JSON.parse(localStorage.getItem(GRADING_SETTINGS_KEY)||'null');
      const t=saved?.thresholds||{};
      const s={enabled:!!saved?.enabled,thresholds:{
        1:Number.isFinite(Number(t[1]))?Number(t[1]):90,
        2:Number.isFinite(Number(t[2]))?Number(t[2]):75,
        3:Number.isFinite(Number(t[3]))?Number(t[3]):50,
        4:Number.isFinite(Number(t[4]))?Number(t[4]):30
      }};
      return validGradingThresholds(s.thresholds)?s:JSON.parse(JSON.stringify(DEFAULT_GRADING_SETTINGS));
    }catch(_){return JSON.parse(JSON.stringify(DEFAULT_GRADING_SETTINGS));}
  }
  function saveGradingSettings(s){localStorage.setItem(GRADING_SETTINGS_KEY,JSON.stringify(s));}
  function validGradingThresholds(t){
    const a=[Number(t[1]),Number(t[2]),Number(t[3]),Number(t[4])];
    return a.every(x=>Number.isFinite(x)&&x>=0&&x<=100)&&a[0]>a[1]&&a[1]>a[2]&&a[2]>a[3];
  }
  function gradeForPercent(percent,s=loadGradingSettings()){
    if(!s.enabled||!Number.isFinite(Number(percent)))return '';
    const p=Number(percent),t=s.thresholds;
    if(p>=t[1])return 1;if(p>=t[2])return 2;if(p>=t[3])return 3;if(p>=t[4])return 4;return 5;
  }
  function gradingScaleText(s){const t=s.thresholds;return `1: ${t[1]}–100 % · 2: ${t[2]}–${t[1]-1} % · 3: ${t[3]}–${t[2]-1} % · 4: ${t[4]}–${t[3]-1} % · 5: 0–${t[4]-1} %`;}
  function csvCell(v){const s=String(v??'');return `"${s.replace(/"/g,'""')}"`;}
  function downloadCsv(filename,rows){
    const csv='\uFEFF'+rows.map(r=>r.map(csvCell).join(';')).join('\r\n');
    const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'}),url=URL.createObjectURL(blob),a=document.createElement('a');
    a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }

  function teacherUnlocked(){ return sessionStorage.getItem(TEACHER_SESSION_KEY) === 'ok'; }
  function unlockTeacher(){ sessionStorage.setItem(TEACHER_SESSION_KEY, 'ok'); }

  function freshState(extra={}) { return { mode:'solo', nick:'', session:'', moduleId:'', index:0, score:0, answers:[], reflection:{}, ...extra }; }
  function go(hash){ location.hash=hash; }
  window.addEventListener('hashchange', render);
  document.addEventListener('click', e=>{const g=e.target.closest('[data-go]');if(g)go(g.dataset.go)});

  function meta(id){return MathPlatform.indexEntry(id)}
  function sortedModules(list=MathPlatform.list()){
    return [...list].sort((a,b)=>(a.year-b.year)||((a.unitOrder??999)-(b.unitOrder??999))||((a.lessonOrder??999)-(b.lessonOrder??999))||a.topic.localeCompare(b.topic,'sk'));
  }
  function unitKey(unit){ return encodeURIComponent(unit); }
  function unitFromKey(key){ try{return decodeURIComponent(key||'')}catch(_){return key||''} }
  function yearModules(year){ return sortedModules().filter(m=>m.year===Number(year)); }
  function unitsForYear(year){
    const map=new Map();
    yearModules(year).forEach(m=>{
      if(!map.has(m.unit)) map.set(m.unit,{name:m.unit,order:m.unitOrder??999,modules:[]});
      map.get(m.unit).modules.push(m);
    });
    return [...map.values()].sort((a,b)=>a.order-b.order||a.name.localeCompare(b.name,'sk'));
  }
  function modulesForUnit(year,unit){ return yearModules(year).filter(m=>m.unit===unit); }
  function readyCount(list){ return list.filter(m=>m.status==='ready').length; }
  function placeholderCount(list){ return list.filter(m=>m.status==='placeholder').length; }
  function openable(m){ return !!m && (m.status==='ready' || m.status==='placeholder'); }
  function statusText(m){ return m.status==='ready' ? 'Hotové' : m.status==='placeholder' ? 'TODO' : 'Pripravujeme'; }
  function statusClass(m){ return m.status==='ready' ? '' : 'off'; }

  function activityMaxPoints(a){
    if(Number.isFinite(a?.maxPoints)) return Math.max(0, Number(a.maxPoints));
    return ({choice:100,sortChoice:100,notebook:20,selfWrite:30,numberInput:100,matrix:120})[a?.type] || 0;
  }
  function moduleMaxPoints(mod=currentModule){
    return (mod?.student?.activities || []).reduce((sum,a)=>sum+activityMaxPoints(a),0);
  }
  function resultFeedback(percent){
    if(percent>=85) return {level:'Výborne', text:'Základným myšlienkam témy rozumieš a vieš ich používať. Skús ich teraz vysvetliť aj vlastnými slovami.'};
    if(percent>=65) return {level:'Dobrá práca', text:'Väčšine témy rozumieš. Oplatí sa ešte upevniť úlohy, pri ktorých si váhal/a alebo potreboval/a druhý pokus.'};
    if(percent>=40) return {level:'Základ už máš', text:'Niektorým častiam už rozumieš, ale pred ďalšou témou sa vráť k vysvetleniam a úlohám, ktoré ti robili problém.'};
    return {level:'Tému ešte precvič', text:'Vráť sa k vysvetleniam a skús problémové úlohy ešte raz. Dôležité je porozumieť postupu, nie iba nazbierať XP.'};
  }
  function reflectionSummary(values={}){
    const counts={green:0,yellow:0,red:0};
    Object.values(values).forEach(v=>{if(counts[v]!==undefined)counts[v]++});
    const total=counts.green+counts.yellow+counts.red;
    if(!total) return '';
    return `<div class="self-summary"><h2>Ako sa cítiš v téme?</h2><div class="self-chips"><span>🟢 ${counts.green}</span><span>🟡 ${counts.yellow}</span><span>🔴 ${counts.red}</span></div><p class="muted">Toto je tvoje vlastné zhodnotenie porozumenia. Porovnaj ho s výsledkom úloh – oboje je užitočná spätná väzba.</p></div>`;
  }

  function topicRow(m, teacherMode=false){
    const canOpen=openable(m), isTodo=m.status==='placeholder';
    return `<article class="topic-row ${canOpen?'':'locked'}">
      <div class="topic-number">${String(m.lessonOrder??'').padStart(2,'0')}</div>
      <div class="topic-main">
        <div class="topic-status"><span class="tag ${statusClass(m)}">${statusText(m)}</span> ${m.lesson?`<span class="muted">${m.lesson}</span>`:''}</div>
        <h3>${m.topic}</h3>
        <div class="meta">${m.type} · ${m.time}</div>
        ${m.status==='ready'?`<div>${(m.skills||[]).map(s=>`<span class="tag">${s}</span>`).join('')}</div>`:''}
      </div>
      <div class="topic-actions">
        ${canOpen?`<button class="${isTodo?'ghost':'btn'}" onclick="location.hash='module/${m.id}'">${isTodo?'Zobraziť TODO':'Otvoriť'}</button>`:''}
        ${teacherMode&&canOpen?`<button class="ghost" onclick="location.hash='method/${m.id}'">Metodická karta</button>`:''}
      </div>
    </article>`;
  }

  function home(){ app.innerHTML=`<section class="student-hero"><div class="hero-copy"><div class="eyebrow">MATEMATIKA · INTERAKTÍVNE MODULY</div><h1>Rozumej súvislostiam.<br><span>Nielen postupom.</span></h1><p>Objavuj vzťahy, overuj svoje úvahy, pracuj s grafmi a modelmi a formuluj matematické závery.</p><div class="learning-cycle" aria-label="Spôsob práce"><span>Skús</span><i>→</i><span>Over</span><i>→</i><span>Zapíš</span><i>→</i><span>Vysvetli</span></div></div><div class="math-visual" aria-hidden="true"><svg viewBox="0 0 430 300" role="img"><g class="mv-grid"><path d="M35 35V265M85 35V265M135 35V265M185 35V265M235 35V265M285 35V265M335 35V265M385 35V265M35 65H405M35 115H405M35 165H405M35 215H405M35 265H405"/></g><path class="mv-axis" d="M35 165H405M185 35V265"/><path class="mv-curve" d="M45 232 C90 228 110 205 135 165 C162 120 188 92 220 105 C252 118 267 175 300 185 C333 195 360 151 398 72"/><circle class="mv-circle" cx="310" cy="102" r="54"/><path class="mv-radius" d="M310 102L350 66"/><circle class="mv-point" cx="350" cy="66" r="5"/><text x="48" y="58">f(x)</text><text x="326" y="151">π</text><text x="197" y="157">0</text><text x="270" y="46">x² + y² = 1</text></svg></div></section><section class="home-section"><div class="home-section-head"><div><div class="eyebrow">SAMOSTATNÁ PRÁCA</div><h2>Vyber si ročník</h2></div><p>Pokračuj cez tematický celok ku konkrétnej téme.</p></div><div class="home-years">${[1,2,3].map(y=>{const mods=yearModules(y),units=unitsForYear(y);const labels={1:'Výroky · množiny · čísla · výrazy · funkcie',2:'Funkcie · rovnice · nerovnice · geometria',3:'Goniometria · geometria · kombinatorika · pravdepodobnosť · štatistika'};return `<button class="home-year" data-go="catalog/year/${y}"><span class="home-year-no">0${y}</span><strong>${y}. ročník</strong><small>${labels[y]}</small><span class="home-year-meta">${readyCount(mods)} hotové · ${placeholderCount(mods)} TODO · ${units.length} tematických celkov <b>→</b></span></button>`}).join('')}</div></section><section class="join-strip"><div><div class="eyebrow">SPOLOČNÁ HODINA</div><h2>Máš kód od učiteľa?</h2><p>Zadaj kód hodiny a pripoj sa k spoločnej aktivite.</p></div><button class="btn" data-go="join">Pripojiť sa k hodine</button></section>`; }

  function catalog(){
    const years=[1,2,3];
    app.innerHTML=`<div class="breadcrumbs"><span>Katalóg</span></div><h1>Vyber ročník</h1><p class="muted">Témy sú usporiadané podľa tematického plánu. Najprv ročník, potom tematický celok a až potom konkrétna téma.</p><div class="year-grid">${years.map(y=>{const mods=yearModules(y),units=unitsForYear(y);return `<button class="year-card" data-go="catalog/year/${y}"><span class="year-number">${y}.</span><span><strong>ročník</strong><small>${units.length} ${units.length===1?'tematický celok':'tematické celky'} · ${readyCount(mods)} hotové · ${placeholderCount(mods)} TODO</small></span><span class="chevron">→</span></button>`}).join('')}</div>`;
  }

  function catalogYear(year){
    year=Number(year); const units=unitsForYear(year);
    if(![1,2,3].includes(year)){catalog();return}
    app.innerHTML=`<div class="breadcrumbs"><button class="crumb" data-go="catalog">Katalóg</button><span>›</span><strong>${year}. ročník</strong></div><h1>${year}. ročník</h1><p class="muted">Vyber tematický celok. Poradie sa riadi registrom podľa tematického plánu.</p>${units.length?`<div class="unit-list">${units.map((u,i)=>`<button class="unit-card" data-go="catalog/unit/${year}/${unitKey(u.name)}"><span class="unit-order">${String(i+1).padStart(2,'0')}</span><span class="unit-main"><strong>${u.name}</strong><small>${u.modules.length} ${u.modules.length===1?'téma':'témy'} · ${readyCount(u.modules)} hotové · ${placeholderCount(u.modules)} TODO</small></span><span class="chevron">→</span></button>`).join('')}</div>`:`<div class="card"><p>Zatiaľ tu nie sú zapísané témy.</p></div>`}`;
  }

  function catalogUnit(year,key,teacherMode=false){
    year=Number(year); const unit=unitFromKey(key),mods=modulesForUnit(year,unit);
    if(!mods.length){ teacherMode?teacherYear(year):catalogYear(year); return; }
    app.innerHTML=`<div class="breadcrumbs"><button class="crumb" data-go="${teacherMode?'teacher':'catalog'}">${teacherMode?'Učiteľ':'Katalóg'}</button><span>›</span><button class="crumb" data-go="${teacherMode?'teacher-year':'catalog/year'}/${year}">${year}. ročník</button><span>›</span><strong>${unit}</strong></div><div class="unit-heading"><div><div class="eyebrow">${year}. ROČNÍK · TEMATICKÝ CELOK</div><h1>${unit}</h1></div><span class="unit-count">${mods.length} ${mods.length===1?'téma':'tém'}</span></div><div class="topic-list">${mods.map(m=>topicRow(m,teacherMode)).join('')}</div>`;
  }

  async function load(id){ currentModule=await MathPlatform.loadModule(id); return currentModule; }

  async function method(id){ if(!teacherUnlocked()){ go('teacher'); return; } const m=meta(id); if(!m){home();return} if(!openable(m)){app.innerHTML=`<div class="card"><h2>${m.topic}</h2><p>Metodická karta bude doplnená pri tvorbe samostatného obsahového modulu podľa tematického plánu.</p><button class="btn" data-go="teacher">Späť</button></div>`;return} try{const mod=await load(id),p=mod.teacher;app.innerHTML=`<div class="row"><button class="ghost" data-go="teacher-unit/${m.year}/${unitKey(m.unit)}">← ${m.unit}</button></div><article class="card method"><div class="eyebrow">METODICKÁ KARTA UČITEĽA</div><h1>${m.topic}</h1><div>${m.skills.map(s=>`<span class="tag">${s}</span>`).join('')}</div><dl><dt>Zaradenie v tematickom pláne</dt><dd>${p.placement}</dd><dt>Predpokladané vedomosti</dt><dd><ul>${p.prerequisites.map(li=>`<li>${li}</li>`).join('')}</ul></dd><dt>Ciele hodiny</dt><dd><ul>${p.goals.map(li=>`<li>${li}</li>`).join('')}</ul></dd><dt>Obsahový štandard / obsah podľa plánu</dt><dd><ul>${p.planContent.map(li=>`<li>${li}</li>`).join('')}</ul></dd><dt>Výkonový štandard podľa plánu</dt><dd><ul>${p.planPerformance.map(li=>`<li>${li}</li>`).join('')}</ul></dd><dt>Rozvíjané kompetencie</dt><dd><ul>${p.competencies.map(li=>`<li>${li}</li>`).join('')}</ul></dd><dt>Obohatenie podľa návrhu nového maturitného štandardu</dt><dd><ul>${p.enrichment.map(li=>`<li>${li}</li>`).join('')}</ul></dd><dt>Odporúčaný priebeh</dt><dd><ol>${p.flow.map(li=>`<li>${li}</li>`).join('')}</ol></dd><dt>Čo modul diagnostikuje</dt><dd><ul>${p.diagnostics.map(li=>`<li>${li}</li>`).join('')}</ul></dd><dt>Možno použiť iba časť</dt><dd><ul>${p.partialUse.map(li=>`<li>${li}</li>`).join('')}</ul></dd></dl><div class="notice"><strong>Pravidlo platformy:</strong> aktuálny tematický plán určuje obsah a poradie. Návrh maturitného štandardu obohacuje spôsob práce iba tam, kde to prirodzene pasuje.</div></article>`}catch(e){showError(e)} }

  async function moduleStart(id){ try{const mod=await load(id),m=meta(id);if(m.status==='placeholder'){app.innerHTML=`<div class="row"><button class="ghost" data-go="catalog/unit/${m.year}/${unitKey(m.unit)}">← ${m.unit}</button></div><div class="card"><div class="eyebrow">TODO PLACEHOLDER · ${m.unit} · ${m.lesson}</div><h1>${mod.student.title}</h1><h2>${mod.student.subtitle}</h2><p>${mod.student.intro}</p><div class="notice"><strong>Technické prepojenie je hotové.</strong> Súbor má správne ID aj cestu v registry.js. Pri ďalšom spracovaní sa nahradí jeho obsah plnohodnotným modulom.</div><button class="btn" data-go="catalog/unit/${m.year}/${unitKey(m.unit)}">Späť k témam</button></div>`;return;}app.innerHTML=`<div class="row"><button class="ghost" data-go="catalog/unit/${m.year}/${unitKey(m.unit)}">← ${m.unit}</button></div><div class="card"><div class="eyebrow">${m.unit} · ${m.lesson} · ${mod.student.estimatedTime}</div><h1>${mod.student.title}</h1><h2>${mod.student.subtitle}</h2><p>${mod.student.intro}</p><div class="notice"><strong>Samostatný režim:</strong> nič sa neposiela učiteľovi a výsledok sa nearchivuje.</div><div class="actions"><button class="btn" id="startSolo">Začať samostatne</button><button class="ghost" data-go="join/${id}">Mám kód hodiny</button></div></div>`;$('#startSolo').onclick=()=>startModule(id,{mode:'solo'});}catch(e){showError(e)} }

  async function startModule(id, extra={}){currentModule=await load(id);state=freshState({moduleId:id,...extra});go('play');}

  function record(activity,correct,attempts,points){
    const entry={id:activity.id,skill:activity.skill||activity.phase||'aktivita',correct,attempts,points:points||0};
    const oldIndex=state.answers.findIndex(a=>a.id===activity.id);
    if(oldIndex>=0){ state.score-=state.answers[oldIndex].points||0; state.answers[oldIndex]=entry; }
    else state.answers.push(entry);
    state.score+=entry.points; sendProgress(false);
  }
  function next(){state.index++;sendProgress(false);play();}
  function prev(){if(state.index>0){state.index--;sendProgress(false);play();}}
  function play(){if(!currentModule){go(`module/${state.moduleId||'1-logika-01'}`);return}const acts=currentModule.student.activities;if(state.index>=acts.length){finish();return}const activity=acts[state.index];const renderer=ActivityRenderers[activity.type];if(!renderer){app.innerHTML=`<div class="card"><h2>Neznámy typ aktivity</h2><code>${activity.type}</code></div>`;return}const m=meta(state.moduleId);renderer(activity,{app,index:state.index,total:acts.length,score:state.score,record,next,prev,setReflection:v=>state.reflection=v,finish,topic:m?.topic||currentModule.student.title,unit:m?.unit||''});}

  function finish(){
    const maxScore=moduleMaxPoints();
    const percent=maxScore?Math.round(100*state.score/maxScore):100;
    const feedback=resultFeedback(percent);
    const skills={};
    state.answers.forEach(a=>{if(!a.skill)return;skills[a.skill]??={n:0,ok:0,pts:0};skills[a.skill].n++;if(a.correct)skills[a.skill].ok++;skills[a.skill].pts+=a.points||0});
    sendProgress(true);
    const m=meta(state.moduleId);
    app.innerHTML=`<article class="card result-card"><div class="eyebrow">MISIA SPLNENÁ</div><h1>Ako sa ti darilo?</h1><div class="result-score"><strong>${state.score} XP</strong><span>z ${maxScore} XP</span></div><div class="result-progress" role="progressbar" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100"><div style="width:${Math.min(100,percent)}%"></div></div><p class="result-percent">Zvládol/a si približne <strong>${percent} %</strong> bodovanej práce v module.</p><div class="result-message"><strong>${feedback.level}.</strong> ${feedback.text}</div><p class="muted small-note"><strong>XP nie sú známka.</strong> Sú spätnou väzbou o tvojej práci v tomto module.</p>${Object.keys(skills).length?`<h2>Tvoja mapa práce</h2><div class="skill-summary">${Object.entries(skills).map(([k,v])=>`<div class="skill-row"><strong>${k}</strong><span>${v.ok}/${v.n}</span></div>`).join('')}</div>`:''}${reflectionSummary(state.reflection)}<div class="notice"><strong>Teraz mobil odlož.</strong> Skús jednou vetou pomenovať, čo je hlavná myšlienka dnešnej témy. Presný matematický zápis patrí do zošita a k spoločnej práci pri tabuli.</div><button class="btn" data-go="catalog/unit/${m?.year||1}/${unitKey(m?.unit||'Výroková formula')}">Späť k témam</button></article>`;
  }

  let qrLibPromise=null;
  async function ensureQrLib(){
    if(window.QRCode)return window.QRCode;
    if(!qrLibPromise)qrLibPromise=new Promise((resolve,reject)=>{
      const s=document.createElement('script');
      s.src='https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
      s.onload=()=>resolve(window.QRCode);
      s.onerror=()=>reject(Error('QR knižnicu sa nepodarilo načítať'));
      document.head.appendChild(s);
    });
    return qrLibPromise;
  }
  async function drawJoinQr(targetId,url){
    const QR=await ensureQrLib(), el=document.getElementById(targetId);
    if(!el)return;
    el.innerHTML='';
    new QR(el,{text:url,width:220,height:220,correctLevel:QR.CorrectLevel.M});
  }

  async function setupRealtime(channelName,onMsg){let c=window.APP_CONFIG||{};if(!c.supabaseUrl||!c.supabaseAnonKey)throw Error('Realtime nie je nastavený');let {createClient}=await import('https://esm.sh/@supabase/supabase-js@2');let client=createClient(c.supabaseUrl,c.supabaseAnonKey,{auth:{persistSession:false}});let ch=client.channel('math-'+channelName,{config:{broadcast:{self:false}}});if(onMsg)ch.on('broadcast',{event:'progress'},p=>onMsg(p.payload)).on('broadcast',{event:'teacher'},p=>onMsg({...p.payload,_teacher:true}));await new Promise((res,rej)=>ch.subscribe(s=>s==='SUBSCRIBED'?res():s==='CHANNEL_ERROR'?rej(Error('Spojenie zlyhalo')):0));return ch}

  async function join(id,presetCode=''){
    const selected=id&&meta(id)?.status==='ready'?id:'1-logika-01';
    const qrCode=(presetCode||'').trim().toUpperCase();
    app.innerHTML=`<div class="card"><div class="eyebrow">ŽIVÁ HODINA</div><h1>Pripojiť sa k učiteľovi</h1><p class="muted">Modul: ${meta(selected).topic}</p><div class="field"><label>Nick alebo kód žiaka</label><input id="nick" placeholder="napr. 1C-07" maxlength="20" autocomplete="off"></div>${qrCode?`<div class="notice good"><strong>QR kód hodiny načítaný.</strong> Stačí zadať nick a pripojiť sa.</div><input id="code" type="hidden" value="${qrCode}">`:`<div class="field"><label>Kód hodiny</label><input id="code" placeholder="napr. K7M4Q2" maxlength="8" style="text-transform:uppercase"></div>`}<div id="joinInfo" class="notice">Výsledky sa používajú iba počas prebiehajúcej hodiny. Platforma nevytvára dlhodobý profil žiaka.</div><button class="btn" id="joinBtn">Pripojiť</button></div>`;
    $('#nick')?.focus();
    $('#joinBtn').onclick=async()=>{
      let nick=$('#nick').value.trim(),code=$('#code').value.trim().toUpperCase();
      if(!nick||code.length<4)return $('#joinInfo').textContent='Vyplň nick aj kód hodiny.';
      try{
        live=await setupRealtime(code,msg=>{if(msg._teacher&&msg.action==='ended'){alert('Učiteľ ukončil živú hodinu. Pokračovať môžeš samostatne.');state.mode='solo';live=null}});
        await startModule(selected,{mode:'live',nick,session:code});
        await live.send({type:'broadcast',event:'progress',payload:{nick,moduleId:selected,stage:'joined',score:0,ts:Date.now()}});
      }catch(e){
        console.error('Realtime chyba pri pripájaní žiaka:',e);
        $('#joinInfo').innerHTML='<strong>Nepodarilo sa pripojiť k živej hodine.</strong> Skontroluj pripojenie a skús to znova.';
      }
    };
  }

  async function sendProgress(done=false){if(state.mode!=='live'||!live)return;const skill={};state.answers.forEach(a=>{if(!a.skill)return;skill[a.skill]??={ok:0,n:0};skill[a.skill].n++;if(a.correct)skill[a.skill].ok++});const maxScore=moduleMaxPoints();const percent=maxScore?Math.round(100*state.score/maxScore):0;try{await live.send({type:'broadcast',event:'progress',payload:{nick:state.nick,moduleId:state.moduleId,stage:done?'done':'working',score:state.score,maxScore,percent,question:Math.min(state.index+1,currentModule?.student.activities.length||0),total:currentModule?.student.activities.length||0,skill,self:state.reflection,answers:state.answers.map(a=>({id:a.id,skill:a.skill,correct:!!a.correct,attempts:a.attempts||0,points:a.points||0})),ts:Date.now()}})}catch(_){} }

  function teacher(){
    if(!teacherUnlocked()){
      app.innerHTML=`<div class="card teacher-login"><div class="eyebrow">UČITEĽSKÁ ČASŤ</div><h1>Prihlásenie učiteľa</h1><p class="muted">Metodické karty a živá diagnostika sú oddelené od žiackeho katalógu.</p><div class="field"><label>Heslo</label><input id="teacherPassword" type="password" inputmode="numeric" autocomplete="current-password" placeholder="Zadaj heslo"></div><div id="teacherLoginInfo"></div><button class="btn" id="teacherLoginBtn">Prihlásiť sa</button><p class="muted small-note">Toto je jednoduché lokálne uzamknutie rozhrania, nie plnohodnotné používateľské konto.</p></div>`;
      const submit=()=>{ if($('#teacherPassword').value===TEACHER_PASSWORD){unlockTeacher();teacher()} else $('#teacherLoginInfo').innerHTML='<div class="feedback bad"><strong>Nesprávne heslo.</strong></div>'; };
      $('#teacherLoginBtn').onclick=submit; $('#teacherPassword').addEventListener('keydown',e=>{if(e.key==='Enter')submit()}); return;
    }
    const years=[1,2,3];
    app.innerHTML=`<div class="breadcrumbs"><strong>Učiteľská časť</strong></div><h1>Vyber ročník</h1><p class="muted">Metodické karty sú usporiadané rovnakým spôsobom ako učivo: ročník → tematický celok → téma.</p><div class="year-grid">${years.map(y=>{const mods=yearModules(y),units=unitsForYear(y);return `<button class="year-card" data-go="teacher-year/${y}"><span class="year-number">${y}.</span><span><strong>ročník</strong><small>${units.length} ${units.length===1?'tematický celok':'tematické celky'} · ${readyCount(mods)} hotové · ${placeholderCount(mods)} TODO</small></span><span class="chevron">→</span></button>`}).join('')}</div><div class="card" style="margin-top:20px"><h2>Živá hodina</h2><p>Živú hodinu spustíš pri konkrétnej hotovej téme v učiteľskom katalógu.</p></div>`;
  }

  function teacherYear(year){
    if(!teacherUnlocked()){go('teacher');return}
    year=Number(year); const units=unitsForYear(year);
    app.innerHTML=`<div class="breadcrumbs"><button class="crumb" data-go="teacher">Učiteľ</button><span>›</span><strong>${year}. ročník</strong></div><h1>${year}. ročník</h1><p class="muted">Vyber tematický celok.</p><div class="unit-list">${units.map((u,i)=>`<button class="unit-card" data-go="teacher-unit/${year}/${unitKey(u.name)}"><span class="unit-order">${String(i+1).padStart(2,'0')}</span><span class="unit-main"><strong>${u.name}</strong><small>${u.modules.length} ${u.modules.length===1?'téma':'témy'} · ${readyCount(u.modules)} hotové · ${placeholderCount(u.modules)} TODO</small></span><span class="chevron">→</span></button>`).join('')}</div>`;
  }

  function teacherUnit(year,key){
    if(!teacherUnlocked()){go('teacher');return}
    const unit=unitFromKey(key),mods=modulesForUnit(year,unit);
    if(!mods.length){teacherYear(year);return}
    app.innerHTML=`<div class="breadcrumbs"><button class="crumb" data-go="teacher">Učiteľ</button><span>›</span><button class="crumb" data-go="teacher-year/${year}">${year}. ročník</button><span>›</span><strong>${unit}</strong></div><div class="unit-heading"><div><div class="eyebrow">UČITEĽSKÝ KATALÓG · ${year}. ROČNÍK</div><h1>${unit}</h1></div><span class="unit-count">${readyCount(mods)} hotové</span></div><div class="topic-list">${mods.map(m=>{const canOpen=openable(m),isTodo=m.status==='placeholder';return `<article class="topic-row ${canOpen?'':'locked'}"><div class="topic-number">${String(m.lessonOrder??'').padStart(2,'0')}</div><div class="topic-main"><div class="topic-status"><span class="tag ${statusClass(m)}">${statusText(m)}</span> ${m.lesson?`<span class="muted">${m.lesson}</span>`:''}</div><h3>${m.topic}</h3><div class="meta">${m.type} · ${m.time}</div></div><div class="topic-actions">${canOpen?`<button class="ghost" onclick="location.hash='method/${m.id}'">Metodická karta</button>${m.status==='ready'?`<button class="btn" onclick="location.hash='teacher-live/${m.id}'">Živá hodina</button>`:''}<button class="ghost" onclick="location.hash='module/${m.id}'">${isTodo?'Zobraziť TODO':'Otvoriť modul'}</button>`:''}</div></article>`}).join('')}</div>`;
  }

  function code(){return Math.random().toString(36).slice(2,8).toUpperCase()}
  async function teacherLive(id){
    if(!teacherUnlocked()){ go('teacher'); return; }
    id=id&&meta(id)?.status==='ready'?id:'1-logika-01';
    const m=meta(id), c=code();
    try{ currentModule=await load(id); }catch(_){ currentModule=null; }
    let grading=loadGradingSettings();
    const joinUrl=`${location.origin}${location.pathname}#join/${encodeURIComponent(id)}/${encodeURIComponent(c)}`;
    app.innerHTML=`<div class="card"><div class="eyebrow"><span class="live-dot"></span> ŽIVÁ HODINA</div><h1>${m.topic}</h1><div style="display:flex;gap:28px;align-items:center;flex-wrap:wrap;margin:18px 0"><div><p><strong>Naskenuj QR kód:</strong></p><div id="joinQr" style="background:#fff;padding:12px;border-radius:12px;display:inline-block;min-width:220px;min-height:220px"></div></div><div><p class="muted">Po naskenovaní sa otvorí správny modul aj táto hodina. Žiak zadá už iba nick.</p><p>Kód pre ručné pripojenie:</p><div class="bigcode">${c}</div><p class="muted">Záloha: žiak môže otvoriť platformu → „Mám kód hodiny“ → zadať nick a tento kód.</p></div></div><div id="connect" class="notice">Pripájam živý kanál…</div><div class="row"><button class="btn" id="endLive" disabled>Ukončiť hodinu</button><button class="ghost" onclick="location.hash='method/${id}'">Metodická karta</button><button class="ghost" data-go="teacher-unit/${m.year}/${unitKey(m.unit)}">Späť k témam</button></div></div>
    <div class="card" style="margin-top:16px"><div class="eyebrow">HODNOTENIE A EXPORT</div><h2>Nastavenie známkovania</h2><div style="display:flex;align-items:center;gap:10px;justify-content:flex-start;margin:14px 0 18px"><input id="gradingEnabled" type="checkbox" ${grading.enabled?'checked':''} style="width:20px;height:20px;margin:0;flex:0 0 auto"><label for="gradingEnabled" style="margin:0;cursor:pointer"><strong>Počítať aj orientačné známky z percent</strong></label></div><div id="gradingFields" style="${grading.enabled?'':'display:none'}"><p class="muted">Zadaj najnižšie percento pre danú známku. Hranice musia klesať.</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px;max-width:650px">${[1,2,3,4].map(g=>`<div class="field"><label>Známka ${g} od</label><input id="grade${g}" type="number" min="0" max="100" step="1" value="${grading.thresholds[g]}"></div>`).join('')}</div><div id="gradingInfo" class="notice" style="margin-top:10px">${gradingScaleText(grading)}</div></div><div class="row" style="margin-top:14px"><button class="ghost" id="saveGrading">Uložiť nastavenie</button><button class="btn" id="exportResults">Exportovať kompletné výsledky CSV</button></div><p class="muted small-note">Nastavenie sa uloží iba v tomto prehliadači. Export obsahuje súhrn, sebahodnotenie, výsledky podľa zručností aj jednotlivé bodované aktivity žiakov. Zostáva dostupný aj po ukončení hodiny, kým túto stránku neopustíš.</p></div>
    <div class="card" style="margin-top:16px"><h2>Živá diagnostika</h2><div id="summary" class="muted">Zatiaľ bez výsledkov.</div><div id="students" class="live-list"></div></div>`;
    drawJoinQr('joinQr',joinUrl).catch(e=>{console.error('QR chyba:',e);const el=$('#joinQr');if(el)el.innerHTML='<span class="muted">QR kód sa nepodarilo načítať. Použi textový kód vedľa.</span>';});
    let students={};
    const readGradingFromForm=()=>({enabled:$('#gradingEnabled').checked,thresholds:{1:Number($('#grade1').value),2:Number($('#grade2').value),3:Number($('#grade3').value),4:Number($('#grade4').value)}});
    $('#gradingEnabled').onchange=()=>{$('#gradingFields').style.display=$('#gradingEnabled').checked?'':'none';};
    $('#saveGrading').onclick=()=>{
      const s=readGradingFromForm();
      if(!validGradingThresholds(s.thresholds)){const el=$('#gradingInfo');el.className='notice bad';el.innerHTML='<strong>Skontroluj hranice.</strong> Musia byť medzi 0 a 100 a platiť: známka 1 > 2 > 3 > 4.';return;}
      grading=s;saveGradingSettings(grading);const el=$('#gradingInfo');el.className='notice good';el.innerHTML=`<strong>Nastavenie uložené.</strong> ${grading.enabled?gradingScaleText(grading):'Známkovanie je vypnuté.'}`;drawStudents(students,grading);
    };
    $('#exportResults').onclick=()=>{
      const s=readGradingFromForm();
      if(!validGradingThresholds(s.thresholds)){alert('Pred exportom oprav hranice známok.');return}
      grading=s;
      const arr=Object.values(students).sort((a,b)=>a.nick.localeCompare(b.nick,'sk'));
      if(!arr.length){alert('Zatiaľ nie sú žiadne výsledky na export.');return}

      const activityMap=new Map((currentModule?.student?.activities||[]).map((a,i)=>[a.id,{order:i+1,title:a.title||a.skill||a.phase||a.id,type:a.type||''}]));
      const answerIds=[];
      arr.forEach(x=>(x.answers||[]).forEach(a=>{if(!answerIds.includes(a.id))answerIds.push(a.id)}));
      answerIds.sort((a,b)=>(activityMap.get(a)?.order??999)-(activityMap.get(b)?.order??999));
      const skillNames=[];
      arr.forEach(x=>Object.keys(x.skill||{}).forEach(k=>{if(!skillNames.includes(k))skillNames.push(k)}));
      const selfKeys=[];
      arr.forEach(x=>Object.keys(x.self||{}).forEach(k=>{if(!selfKeys.includes(k))selfKeys.push(k)}));

      const rows=[
        ['Téma',m.topic],
        ['Kód hodiny',c],
        ['Dátum a čas exportu',new Date().toLocaleString('sk-SK')],
        ['Známkovanie',grading.enabled?'zapnuté':'vypnuté'],
        ...(grading.enabled?[['Stupnica',gradingScaleText(grading)]]:[]),
        [],
        ['Žiak / nick','Stav','Body (XP)','Maximum','Percentá',...(grading.enabled?['Známka']:[]),'Postup',
          ...skillNames.map(k=>`Zručnosť: ${k}`),
          ...selfKeys.map(k=>`Sebahodnotenie: ${k}`),
          ...answerIds.map(id=>{const a=activityMap.get(id);return `Úloha ${a?.order??''}: ${a?.title||id}`;})
        ]
      ];
      arr.forEach(x=>{
        const answerById=new Map((x.answers||[]).map(a=>[a.id,a]));
        rows.push([
          x.nick||'',x.stage==='done'?'Hotovo':x.stage==='joined'?'Pripojený':'Pracuje',
          Number(x.score)||0,Number(x.maxScore)||0,
          Number.isFinite(Number(x.percent))?`${Number(x.percent)} %`:'',
          ...(grading.enabled?[gradeForPercent(Number(x.percent),grading)||'']:[]),
          `${x.question||0}/${x.total||0}`,
          ...skillNames.map(k=>{const v=x.skill?.[k];return v?`${v.ok||0}/${v.n||0}`:'';}),
          ...selfKeys.map(k=>{const v=x.self?.[k];return v==='green'?'zelená – rozumiem':v==='yellow'?'žltá – ešte si nie som istý/istá':v==='red'?'červená – potrebujem pomoc':String(v??'');}),
          ...answerIds.map(id=>{const a=answerById.get(id);return a?`${a.correct?'správne':'nesprávne'}; pokusy: ${a.attempts||0}; body: ${a.points||0}`:'';})
        ]);
      });
      const safe=(m.topic||'vysledky').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,50);
      const d=new Date(),stamp=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
      downloadCsv(`${stamp}-${safe||'vysledky-triedy'}.csv`,rows);
    };
    try{
      const ch=await setupRealtime(c,msg=>{if(msg._teacher)return;students[msg.nick]=msg;drawStudents(students,grading);});
      live=ch;$('#connect').className='notice good';$('#connect').innerHTML='<strong>Kanál je aktívny.</strong> Výsledky sa neukladajú do databázy.';$('#endLive').disabled=false;
      $('#endLive').onclick=async()=>{await ch.send({type:'broadcast',event:'teacher',payload:{action:'ended'}});await ch.unsubscribe();live=null;$('#connect').className='notice';$('#connect').innerHTML='<strong>Hodina ukončená.</strong> Výsledky zostávajú na tejto obrazovke, aby si ich mohol/mohla exportovať. Po odchode zo stránky sa zahodia.';$('#endLive').disabled=true;};
    }catch(e){console.error('Realtime chyba:',e);$('#connect').className='notice bad';$('#connect').innerHTML='<strong>Nepodarilo sa pripojiť živý kanál.</strong> Obnov stránku a skús to znova.';}
  }
  function drawStudents(s,grading=loadGradingSettings()){
    const a=Object.values(s),done=a.filter(x=>x.stage==='done'),percents=done.map(x=>Number(x.percent)).filter(Number.isFinite),avg=percents.length?Math.round(percents.reduce((sum,p)=>sum+p,0)/percents.length):null;
    let gradeSummary='';
    if(grading.enabled&&done.length){const counts={1:0,2:0,3:0,4:0,5:0};done.forEach(x=>{const g=gradeForPercent(Number(x.percent),grading);if(g)counts[g]++});gradeSummary=` · známky: <strong>1:${counts[1]} · 2:${counts[2]} · 3:${counts[3]} · 4:${counts[4]} · 5:${counts[5]}</strong>`;}
    $('#summary').innerHTML=a.length?`Pripojení: <strong>${a.length}</strong> · dokončili: <strong>${done.length}</strong>${avg!==null?` · priemer dokončených: <strong>${avg} %</strong>`:''}${gradeSummary}`:'Zatiaľ bez výsledkov.';
    $('#students').innerHTML=a.sort((x,y)=>x.nick.localeCompare(y.nick,'sk')).map(x=>{const pct=Number.isFinite(Number(x.percent))?Number(x.percent):null,grade=grading.enabled&&pct!==null?gradeForPercent(pct,grading):'';return `<div class="student"><strong>${x.nick}</strong><span>${x.stage==='done'?'Hotovo':x.stage==='joined'?'Pripojený':`${x.question||0}/${x.total||0}`}</span><span>${x.score||0}${x.maxScore?` / ${x.maxScore}`:''} XP${pct!==null?` · ${pct}%`:''}${grade?` · známka <strong>${grade}</strong>`:''}</span></div>`}).join('');
  }

  function showError(e){app.innerHTML=`<div class="card"><h2>Nepodarilo sa načítať modul</h2><p>${e.message}</p><p class="muted">Ak stránku otváraš dvojklikom, skontroluj, že si rozbalila celý priečinok a nie iba samotný index.html.</p><button class="btn" data-go="catalog">Späť</button></div>`}

  async function render(){const h=location.hash.slice(1)||'home',p=h.split('/');if(p[0]==='home')home();else if(p[0]==='catalog'&&!p[1])catalog();else if(p[0]==='catalog'&&p[1]==='year')catalogYear(p[2]);else if(p[0]==='catalog'&&p[1]==='unit')catalogUnit(p[2],p.slice(3).join('/'));else if(p[0]==='method')await method(p[1]);else if(p[0]==='module')await moduleStart(p[1]);else if(p[0]==='play')play();else if(p[0]==='join')await join(p[1],p[2]);else if(p[0]==='teacher')teacher();else if(p[0]==='teacher-year')teacherYear(p[1]);else if(p[0]==='teacher-unit')teacherUnit(p[1],p.slice(2).join('/'));else if(p[0]==='teacher-live')await teacherLive(p[1]);else home()}
  render();
})();
