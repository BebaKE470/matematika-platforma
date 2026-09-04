(function () {
  const R = {};
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  function cardHeader(activity, ctx) {
    const pct = Math.round((ctx.index / ctx.total) * 100);
    return `<div class="module-topic-bar"><span>${esc(ctx.unit || '')}</span><strong>${esc(ctx.topic || '')}</strong></div><div class="row activity-top"><div class="row" style="gap:.55rem">${ctx.index > 0 ? '<button class="ghost back-step" type="button">← Späť</button>' : ''}<span class="tag phase">${esc(activity.phase || 'AKTIVITA')}</span></div><strong>${ctx.score} XP</strong></div>
      <div class="progress"><div style="width:${pct}%"></div></div>
      <p class="muted">Krok ${ctx.index + 1} z ${ctx.total}</p>`;
  }

  function wireBack(ctx) {
    const b = document.querySelector('.back-step');
    if (b && ctx.prev) b.onclick = ctx.prev;
  }

  R.info = (a, ctx) => {
    ctx.app.innerHTML = `<article class="card learning-card">${cardHeader(a,ctx)}<h1>${esc(a.title)}</h1>${a.html || ''}<button class="btn" id="continue">${esc(a.continueLabel || 'Pokračovať')}</button></article>`;
    wireBack(ctx);
    document.querySelector('#continue').onclick = ctx.next;
  };

  R.explain = (a, ctx) => {
    ctx.app.innerHTML = `<article class="card learning-card explain-card">${cardHeader(a,ctx)}<div class="eyebrow">KRÁTKE VYSVETLENIE</div><h1>${esc(a.title)}</h1>${a.html || ''}${a.remember ? `<div class="remember"><strong>Zapamätaj si:</strong> ${a.remember}</div>` : ''}<button class="btn" id="continue">Rozumiem, pokračovať</button></article>`;
    wireBack(ctx);
    document.querySelector('#continue').onclick = ctx.next;
  };

  R.choice = (a, ctx) => {
    let attempts = 0;
    ctx.app.innerHTML = `<article class="card learning-card">${cardHeader(a,ctx)}${a.prompt ? `<p class="muted">${esc(a.prompt)}</p>` : ''}${a.stimulus ? `<div class="stimulus">${esc(a.stimulus).replace(/\n/g,'<br>')}</div>` : ''}<h1>${esc(a.question)}</h1><div id="opts">${a.options.map((o,i)=>`<button class="choice" data-i="${i}">${esc(o)}</button>`).join('')}</div><div id="feedback"></div></article>`;
    wireBack(ctx);
    document.querySelectorAll('.choice').forEach(btn => btn.onclick = () => {
      attempts++;
      const ok = Number(btn.dataset.i) === a.answer;
      if (ok) {
        const pts = attempts === 1 ? 100 : 60;
        ctx.record(a, true, attempts, pts);
        document.querySelector('#feedback').innerHTML = `<div class="feedback good"><strong>Správne.</strong> ${a.correct || ''}<div><button class="btn" id="next">Pokračovať</button></div></div>`;
        document.querySelectorAll('.choice').forEach(x => x.disabled = true);
        document.querySelector('#next').onclick = ctx.next;
      } else if (attempts === 1) {
        document.querySelector('#feedback').innerHTML = `<div class="feedback bad"><strong>Ešte nie.</strong> ${a.hint || 'Skús sa na zadanie pozrieť znovu.'}</div>`;
      } else {
        ctx.record(a, false, attempts, 0);
        document.querySelectorAll('.choice').forEach(x => x.disabled = true);
        document.querySelector('#feedback').innerHTML = `<div class="feedback bad"><strong>Teraz si to vysvetlíme.</strong> Správna odpoveď je <strong>${esc(a.options[a.answer])}</strong>.<br>${a.correct || ''}<div><button class="btn" id="next">Pokračovať</button></div></div>`;
        document.querySelector('#next').onclick = ctx.next;
      }
    });
  };

  R.sortChoice = (a, ctx) => {
    const answers = {};
    ctx.app.innerHTML = `<article class="card learning-card">${cardHeader(a,ctx)}<h1>${esc(a.title)}</h1><p class="muted">Pri každej vete vyber jednu možnosť.</p><div class="sort-list">${a.items.map((it,i)=>`<div class="sort-row"><div>${esc(it.text)}</div><div class="seg"><button data-row="${i}" data-v="1">${esc(a.labels[0])}</button><button data-row="${i}" data-v="0">${esc(a.labels[1])}</button></div></div>`).join('')}</div><button class="btn" id="check" disabled>Vyhodnotiť</button><div id="feedback"></div></article>`;
    wireBack(ctx);
    document.querySelectorAll('.seg button').forEach(b => b.onclick = () => {
      const row = Number(b.dataset.row); answers[row] = b.dataset.v === '1';
      document.querySelectorAll(`[data-row="${row}"]`).forEach(x=>x.classList.remove('selected'));
      b.classList.add('selected');
      document.querySelector('#check').disabled = Object.keys(answers).length !== a.items.length;
    });
    document.querySelector('#check').onclick = () => {
      let okCount = 0;
      const detail = a.items.map((it,i)=>{ const ok=answers[i]===it.answer; if(ok) okCount++; return `<li class="${ok?'oktext':'badtext'}"><strong>${ok?'✓':'✗'} ${esc(it.text)}</strong> – ${esc(it.why)}</li>`}).join('');
      const pts = Math.round(100 * okCount / a.items.length);
      ctx.record(a, okCount === a.items.length, 1, pts);
      document.querySelector('#feedback').innerHTML = `<div class="feedback ${okCount===a.items.length?'good':'bad'}"><strong>${okCount}/${a.items.length} správne.</strong><ul>${detail}</ul><button class="btn" id="next">Pokračovať</button></div>`;
      document.querySelector('#check').disabled = true;
      document.querySelectorAll('.seg button').forEach(x=>x.disabled=true);
      document.querySelector('#next').onclick = ctx.next;
    };
  };

  R.notebook = (a, ctx) => {
    ctx.app.innerHTML = `<article class="card notebook learning-card">${cardHeader(a,ctx)}<div class="eyebrow">ZOŠIT</div><h1>✍️ ${esc(a.title || 'Zapíš si do zošita')}</h1>${a.html || ''}<div class="actions"><button class="btn" id="continue">${esc(a.continueLabel || 'Mám zapísané')}</button></div></article>`;
    wireBack(ctx);
    document.querySelector('#continue').onclick = () => { ctx.record(a,true,1,20); ctx.next(); };
  };

  R.selfWrite = (a, ctx) => {
    let revealed=false;
    ctx.app.innerHTML = `<article class="card notebook learning-card">${cardHeader(a,ctx)}<div class="eyebrow">MATEMATICKÉ VYJADROVANIE</div><h1>${esc(a.title)}</h1><p>${a.promptHtml || esc(a.prompt)}</p><p class="muted">Aplikácia tvoju vetu neznámkuje. Najprv ju vytvor sám/sama, potom ju porovnaj s možnou presnou formuláciou.</p><button class="ghost" id="reveal">Mám napísané – ukáž porovnanie</button><div id="modelbox"></div></article>`;
    wireBack(ctx);
    document.querySelector('#reveal').onclick = () => { revealed=true; const model=a.model || '<em>Vzorová formulácia v tomto kroku nie je nastavená. Pokračuj podľa pokynov učiteľa.</em>'; document.querySelector('#modelbox').innerHTML=`<div class="remember"><strong>Porovnaj so svojou vetou:</strong><br>${model}</div><button class="btn" id="next">Pokračovať</button>`; document.querySelector('#reveal').disabled=true; document.querySelector('#next').onclick=()=>{ctx.record(a,true,1,30);ctx.next()}; };
  };

  R.numberInput = (a, ctx) => {
    let attempts=0;
    ctx.app.innerHTML = `<article class="card learning-card">${cardHeader(a,ctx)}<h1>${esc(a.title)}</h1><p>${esc(a.prompt)}</p><div class="field"><input id="num" inputmode="numeric" placeholder="Napíš číslo"></div><button class="btn" id="check">Overiť</button><div id="feedback"></div></article>`;
    wireBack(ctx);
    function valid(v){ const n=Number(v); if(!Number.isInteger(n)||n<=0) return false; if(a.validate==='oddComposite'){ if(n%2===0||n<3)return false; for(let d=2;d<=Math.sqrt(n);d++) if(n%d===0)return true; return false;} return false; }
    document.querySelector('#check').onclick=()=>{attempts++; const v=document.querySelector('#num').value.trim(); if(valid(v)){ctx.record(a,true,attempts,attempts===1?100:60);document.querySelector('#feedback').innerHTML=`<div class="feedback good"><strong>Áno.</strong> ${a.success}<br><button class="btn" id="next">Pokračovať</button></div>`;document.querySelector('#check').disabled=true;document.querySelector('#num').disabled=true;document.querySelector('#next').onclick=ctx.next}else if(attempts===1){document.querySelector('#feedback').innerHTML=`<div class="feedback bad">${a.hint}</div>`}else{ctx.record(a,false,attempts,0);document.querySelector('#feedback').innerHTML=`<div class="feedback bad">Napríklad <strong>9</strong>: je nepárne, ale 9 = 3 · 3, takže nie je prvočíslo.<br><button class="btn" id="next">Pokračovať</button></div>`;document.querySelector('#check').disabled=true;document.querySelector('#num').disabled=true;document.querySelector('#next').onclick=ctx.next}};
  };

  R.matrix = (a, ctx) => {
    const ans={};
    ctx.app.innerHTML=`<article class="card learning-card">${cardHeader(a,ctx)}<h1>${esc(a.title)}</h1><div class="matrix-list">${a.items.map((it,i)=>`<div class="matrix-row"><div>${esc(it.text)}</div><select data-i="${i}"><option value="">Vyber…</option>${a.labels.map(l=>`<option>${esc(l)}</option>`).join('')}</select></div>`).join('')}</div><button class="btn" id="check">Vyhodnotiť</button><div id="feedback"></div></article>`;
    wireBack(ctx);
    document.querySelector('#check').onclick=()=>{let ok=0;document.querySelectorAll('select[data-i]').forEach(s=>{ans[s.dataset.i]=s.value; if(s.value===a.items[Number(s.dataset.i)].answer)ok++; s.disabled=true});ctx.record(a,ok===a.items.length,1,Math.round(120*ok/a.items.length));document.querySelector('#feedback').innerHTML=`<div class="feedback ${ok===a.items.length?'good':'bad'}"><strong>${ok}/${a.items.length} správne.</strong><ul>${a.items.map((it,i)=>`<li>${esc(it.text)} → <strong>${esc(it.answer)}</strong></li>`).join('')}</ul><button class="btn" id="next">Pokračovať</button></div>`;document.querySelector('#check').disabled=true;document.querySelector('#next').onclick=ctx.next};
  };

  R.coordinatePlot = (a, ctx) => {
    const width = 620, height = 420, pad = 48;
    const xmin = a.xMin ?? -1, xmax = a.xMax ?? 5, ymin = a.yMin ?? -1, ymax = a.yMax ?? 9;
    const sx = x => pad + (x - xmin) * (width - 2*pad) / (xmax - xmin);
    const sy = y => height - pad - (y - ymin) * (height - 2*pad) / (ymax - ymin);
    const xTicks = Array.from({length: Math.floor(xmax-xmin)+1}, (_,i)=>xmin+i);
    const yTicks = Array.from({length: Math.floor(ymax-ymin)+1}, (_,i)=>ymin+i);
    const grid = [
      ...xTicks.map(x=>`<line x1="${sx(x)}" y1="${pad}" x2="${sx(x)}" y2="${height-pad}" class="plot-grid"/>`),
      ...yTicks.map(y=>`<line x1="${pad}" y1="${sy(y)}" x2="${width-pad}" y2="${sy(y)}" class="plot-grid"/>`)
    ].join('');
    const axes = `${xmin<=0&&xmax>=0?`<line x1="${sx(0)}" y1="${pad}" x2="${sx(0)}" y2="${height-pad}" class="plot-axis"/>`:''}${ymin<=0&&ymax>=0?`<line x1="${pad}" y1="${sy(0)}" x2="${width-pad}" y2="${sy(0)}" class="plot-axis"/>`:''}`;
    const labels = `${xTicks.map(x=>`<text x="${sx(x)}" y="${height-pad+24}" text-anchor="middle" class="plot-label">${esc(x)}</text>`).join('')}${yTicks.map(y=>`<text x="${pad-12}" y="${sy(y)+5}" text-anchor="end" class="plot-label">${esc(y)}</text>`).join('')}`;
    const pts = (a.points||[]).map(p=>`<g><circle cx="${sx(p.x)}" cy="${sy(p.y)}" r="7" class="plot-point"/><text x="${sx(p.x)+10}" y="${sy(p.y)-10}" class="plot-point-label">${esc(p.label || `(${p.x}, ${p.y})`)}</text></g>`).join('');
    ctx.app.innerHTML=`<article class="card learning-card">${cardHeader(a,ctx)}<h1>${esc(a.title)}</h1>${a.html||''}<div class="coordinate-wrap"><svg class="coordinate-plot" viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(a.ariaLabel || 'Body v karteziánskej súradnicovej sústave')}">${grid}${axes}${labels}${pts}<text x="${width-pad+16}" y="${sy(0)-8}" class="plot-axis-name">x</text><text x="${sx(0)+10}" y="${pad-14}" class="plot-axis-name">y</text></svg></div>${a.note?`<div class="notice">${a.note}</div>`:''}<button class="btn" id="continue">${esc(a.continueLabel||'Pokračovať')}</button></article>`;
    wireBack(ctx);
    document.querySelector('#continue').onclick=ctx.next;
  };

  R.reflection = (a, ctx) => {
    const values={}; const levels=[['green','Rozumiem a viem vysvetliť'],['yellow','Asi rozumiem, potrebujem príklad'],['red','Zatiaľ v tom nemám jasno']];
    ctx.app.innerHTML=`<article class="card learning-card">${cardHeader(a,ctx)}<h1>${esc(a.title)}</h1><p>${esc(a.prompt)}</p><div class="reflection-list">${a.skills.map((s,i)=>`<div class="reflection-row"><strong>${esc(s)}</strong><div class="reflection-buttons">${levels.map(([v,l])=>`<button data-s="${esc(s)}" data-v="${v}" title="${esc(l)}">${v==='green'?'🟢':v==='yellow'?'🟡':'🔴'} ${esc(l)}</button>`).join('')}</div></div>`).join('')}</div><button class="btn" id="finish" disabled>Dokončiť modul</button></article>`;
    wireBack(ctx);
    document.querySelectorAll('[data-s]').forEach(b=>b.onclick=()=>{values[b.dataset.s]=b.dataset.v;document.querySelectorAll(`[data-s="${CSS.escape(b.dataset.s)}"]`).forEach(x=>x.classList.remove('selected'));b.classList.add('selected');document.querySelector('#finish').disabled=Object.keys(values).length!==a.skills.length});
    document.querySelector('#finish').onclick=()=>{ctx.setReflection(values);ctx.finish()};
  };

  window.ActivityRenderers = R;
})();
