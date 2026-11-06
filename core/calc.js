// core/calc.js — window.MathCalc
//
// Všeobecná kalkulačka so „zamknutým režimom“ (registry `kind: 'calc'`).
// Dve časti:
//
//  1. ČISTÁ LOGIKA (bez DOM): evaluate() – bezpečný parser výrazov (žiadne
//     eval()), formatNumber(), toFraction(), formatDuration().
//
//  2. PREHRÁVAČ ŽIAKA: begin()/play()/onTeacher()/end(). Kým je zámok zapnutý,
//     aplikácia počíta, koľkokrát žiak opustil kartu/aplikáciu
//     (document.visibilitychange → hidden) a koľko času strávil mimo. Údaj
//     posiela učiteľke správou 'progress' v poli `calc`:
//       { leaves, awayMs, away, selfEnded }
//     Pri odchode sa správa pokúsi odísť hneď (prehliadač ešte chvíľu beží), takže
//     učiteľka často vidí „mimo aplikácie“ naživo; v každom prípade ju uvidí po
//     návrate. Nič sa neukladá na server; záloha počtu opustení je v
//     localStorage žiaka (mathCalcStudentV1), aby ho obnovenie stránky nevynulovalo.
//
// Ide o ROZPOZNANIE a EVIDENCIU opustenia, nie o skutočné zamknutie telefónu –
// webová stránka nevie zabrániť prepnutiu aplikácie, vie ho len spoľahlivo
// zaznamenať a ukázať učiteľke.
(function () {
  if (!window.MathUtil) throw new Error('core/calc.js: chýba core/util.js pred ním.');
  const { esc, $, $$ } = window.MathUtil;

  // --- Výpočty ---------------------------------------------------------------

  class CalcError extends Error {}

  const FUNCS = {
    sin: 'trig', cos: 'trig', tan: 'trig',
    asin: 'inv', acos: 'inv', atan: 'inv',
    log: 'log', ln: 'log', abs: 'plain', sqrt: 'plain', cbrt: 'plain',
  };

  function tokenize(src) {
    const s = String(src)
      .replace(/[−–—]/g, '-').replace(/[×·*]/g, '*').replace(/[÷:]/g, '/')
      .replace(/,/g, '.').replace(/\s+/g, '');
    const out = [];
    let i = 0;
    while (i < s.length) {
      const c = s[i];
      let m;
      if ((m = /^(\d+\.?\d*|\.\d+)/.exec(s.slice(i)))) { out.push({ t: 'num', v: parseFloat(m[1]) }); i += m[1].length; continue; }
      if ('+-*/^!%()²³'.includes(c)) { out.push({ t: 'op', v: c }); i++; continue; }
      if (c === 'π') { out.push({ t: 'const', v: Math.PI }); i++; continue; }
      if (c === '√') { out.push({ t: 'func', v: 'sqrt' }); i++; continue; }
      if ((m = /^[a-zA-Z]+/.exec(s.slice(i)))) {
        const w = m[0].toLowerCase();
        if (w === 'pi') out.push({ t: 'const', v: Math.PI });
        else if (w === 'e') out.push({ t: 'const', v: Math.E });
        else if (w === 'ans') out.push({ t: 'ans' });
        else if (FUNCS[w]) out.push({ t: 'func', v: w });
        else throw new CalcError('Neznámy zápis: ' + m[0]);
        i += m[0].length; continue;
      }
      throw new CalcError('Neznámy znak: ' + c);
    }
    return out;
  }

  // opts: { deg: true|false, ans: číslo }
  function evaluate(src, opts) {
    opts = opts || {};
    const deg = opts.deg !== false;
    const toks = tokenize(src);
    if (!toks.length) throw new CalcError('Prázdny výraz');
    let p = 0;
    const peek = () => toks[p];
    const isOp = v => peek() && peek().t === 'op' && peek().v === v;

    const chk = v => { if (!Number.isFinite(v)) throw new CalcError('Výsledok nie je definovaný'); return v; };

    function applyFunc(name, x) {
      const kind = FUNCS[name];
      if (kind === 'trig') {
        if (name === 'tan') {
          const d = deg ? x : x * 180 / Math.PI;
          const r = ((d % 180) + 180) % 180;
          if (Math.abs(r - 90) < 1e-9) throw new CalcError('tan nie je definovaný');
        }
        const rad = deg ? x * Math.PI / 180 : x;
        const v = Math[name](rad);
        return Math.abs(v) < 1e-14 ? 0 : v; // sin(180°) nesmie vyjsť 1,2E−16
      }
      if (kind === 'inv') {
        if ((name === 'asin' || name === 'acos') && Math.abs(x) > 1) throw new CalcError(name + ': argument musí byť od −1 do 1');
        const v = Math[name](x);
        return deg ? v * 180 / Math.PI : v;
      }
      if (name === 'log') { if (x <= 0) throw new CalcError('log: argument musí byť kladný'); return Math.log10(x); }
      if (name === 'ln') { if (x <= 0) throw new CalcError('ln: argument musí byť kladný'); return Math.log(x); }
      if (name === 'sqrt') { if (x < 0) throw new CalcError('Odmocnina zo záporného čísla'); return Math.sqrt(x); }
      if (name === 'cbrt') return Math.cbrt(x);
      return Math.abs(x);
    }

    function factorial(x) {
      if (!Number.isInteger(x) || x < 0 || x > 170) throw new CalcError('Faktoriál: celé číslo od 0 do 170');
      let r = 1;
      for (let k = 2; k <= x; k++) r *= k;
      return r;
    }

    function parseExpr() {
      let v = parseTerm();
      while (isOp('+') || isOp('-')) {
        const op = toks[p++].v;
        const r = parseTerm();
        v = op === '+' ? v + r : v - r;
      }
      return v;
    }

    function startsFactor(t) {
      return t && (t.t === 'num' || t.t === 'func' || t.t === 'const' || t.t === 'ans' || (t.t === 'op' && t.v === '('));
    }

    function parseTerm() {
      let v = parseUnary();
      for (;;) {
        if (isOp('*') || isOp('/')) {
          const op = toks[p++].v;
          const r = parseUnary();
          if (op === '/' && r === 0) throw new CalcError('Delenie nulou');
          v = op === '*' ? v * r : v / r;
        } else if (startsFactor(peek())) { // implicitné násobenie: 2π, 3(4+1), 2sin(30)
          v = v * parseUnary();
        } else break;
      }
      return v;
    }

    function parseUnary() {
      if (isOp('-')) { p++; return -parseUnary(); }
      if (isOp('+')) { p++; return parseUnary(); }
      return parsePower();
    }

    function parsePower() {
      const base = parsePostfix();
      if (isOp('^')) {
        p++;
        const e = parseUnary(); // 2^-3, pravá asociatívnosť
        const r = Math.pow(base, e);
        if (Number.isNaN(r)) throw new CalcError('Mocnina nie je definovaná v obore reálnych čísel');
        return r;
      }
      return base;
    }

    function parsePostfix() {
      let v = parsePrimary();
      for (;;) {
        if (isOp('!')) { p++; v = factorial(v); }
        else if (isOp('%')) { p++; v = v / 100; }
        else if (isOp('²')) { p++; v = v * v; }
        else if (isOp('³')) { p++; v = v * v * v; }
        else break;
      }
      return v;
    }

    function parsePrimary() {
      const t = toks[p];
      if (!t) throw new CalcError('Výraz je nedokončený');
      if (t.t === 'num') { p++; return t.v; }
      if (t.t === 'const') { p++; return t.v; }
      if (t.t === 'ans') {
        p++;
        if (!Number.isFinite(opts.ans)) throw new CalcError('Ešte nie je žiadny predošlý výsledok (Ans)');
        return opts.ans;
      }
      if (t.t === 'func') {
        p++;
        let arg;
        if (isOp('(')) arg = parsePrimary();
        else if (peek() && (peek().t === 'num' || peek().t === 'const' || peek().t === 'ans' || peek().t === 'func' || isOp('-'))) {
          arg = isOp('-') ? (p++, -parsePrimary()) : parsePrimary();
        } else throw new CalcError('Funkcia ' + (t.v === 'sqrt' ? '√' : t.v) + ' potrebuje argument');
        return chk(applyFunc(t.v, arg));
      }
      if (t.t === 'op' && t.v === '(') {
        p++;
        const v = parseExpr();
        if (isOp(')')) p++; // chýbajúcu zátvorku na konci výrazu dopočítame
        else if (p < toks.length) throw new CalcError('Zátvorky nesedia');
        return v;
      }
      throw new CalcError('Neočakávaný znak: ' + t.v);
    }

    const result = parseExpr();
    if (p < toks.length) {
      throw new CalcError(isOp(')') ? 'Nadbytočná zátvorka )' : 'Výraz sa nedá vyhodnotiť');
    }
    return chk(result);
  }

  // Zobrazenie čísla: slovenská desatinná čiarka, typografické mínus, ≤ 12 platných cifier.
  function formatNumber(v) {
    if (!Number.isFinite(v)) return '—';
    if (v === 0) return '0';
    const r = Number(v.toPrecision(12));
    const a = Math.abs(r);
    let s;
    if (a >= 1e15 || a < 1e-9) {
      s = r.toExponential(8).replace(/\.?0+e/, 'e').replace('e+', 'E+').replace('e-', 'E-');
    } else {
      s = String(r);
      if (/e/i.test(s)) s = r.toFixed(15).replace(/\.?0+$/, '');
    }
    return s.replace('.', ',').replace(/-/g, '−');
  }

  // Zlomok v základnom tvare (menovateľ ≤ 10000) alebo null, ak ide o celé číslo / nevieme.
  function toFraction(v) {
    if (!Number.isFinite(v) || Number.isInteger(v)) return null;
    const sign = v < 0 ? -1 : 1;
    const x = Math.abs(v);
    let h1 = 1, h0 = 0, k1 = 0, k0 = 1, b = x;
    for (let i = 0; i < 40; i++) {
      const a = Math.floor(b);
      const h2 = a * h1 + h0, k2 = a * k1 + k0;
      if (k2 > 10000) return null;
      h0 = h1; h1 = h2; k0 = k1; k1 = k2;
      if (Math.abs(x - h1 / k1) < 1e-10 * Math.max(1, x)) break;
      const frac = b - a;
      if (frac < 1e-12) break;
      b = 1 / frac;
    }
    if (Math.abs(x - h1 / k1) >= 1e-9 * Math.max(1, x) || k1 === 1) return null;
    return { n: sign * h1, d: k1 };
  }

  function formatDuration(ms) {
    const s = Math.round((ms || 0) / 1000);
    return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  }

  // --- Prehrávač žiaka ---------------------------------------------------------

  const STORE_KEY = 'mathCalcStudentV1';
  const ACTIVE_KEY = 'mathCalcActiveV1';
  const ACTIVE_MAX_MS = 4 * 60 * 60 * 1000;
  const REFRESH_GRACE_MS = 20 * 1000; // rýchle obnovenie stránky sa nepočíta ako opustenie
  const KEEP_MS = 2 * 24 * 60 * 60 * 1000;
  const SEND_DEBOUNCE_MS = 1000;
  const HISTORY_MAX = 20;

  let C = null; // prebiehajúca kalkulačka tohto žiaka (jedna naraz)

  function storeKey(code, nick) { return String(code).toUpperCase() + '::' + String(nick).trim().toLowerCase().replace(/\s+/g, ' '); }
  function readStore() { try { return JSON.parse(localStorage.getItem(STORE_KEY) || '{}') || {}; } catch (_) { return {}; } }

  function saveLocal() {
    if (!C || C.solo) return;
    try {
      const all = readStore();
      const now = Date.now();
      Object.keys(all).forEach(k => { if (!all[k] || now - (all[k].at || 0) > KEEP_MS) delete all[k]; });
      all[storeKey(C.code, C.nick)] = { at: now, leaves: C.leaves, awayMs: C.awayMs, ended: C.ended, away: !!C.hiddenAt };
      localStorage.setItem(STORE_KEY, JSON.stringify(all));
      // Ukazovateľ „prebieha sledovanie“: po obnovení stránky z neho aplikácia žiaka sama vráti
      // do kalkulačky (pending() nižšie), inak by obnovením unikol sledovaniu.
      if (C.ended) localStorage.removeItem(ACTIVE_KEY);
      else localStorage.setItem(ACTIVE_KEY, JSON.stringify({ code: C.code, nick: C.nick, moduleId: C.moduleId, at: now }));
    } catch (_) { /* localStorage nedostupné – kalkulačka funguje, len bez zálohy počtu */ }
  }

  // Rozpracované sledovanie z minulého načítania stránky (alebo null). Platí 4 hodiny.
  function pending() {
    try {
      const p = JSON.parse(localStorage.getItem(ACTIVE_KEY) || 'null');
      if (!p || !p.code || !p.nick || !p.moduleId || Date.now() - (p.at || 0) > ACTIVE_MAX_MS) return null;
      const saved = readStore()[storeKey(p.code, p.nick)];
      return saved && !saved.ended ? p : null;
    } catch (_) { return null; }
  }

  // Zahodí rozpracované sledovanie (žiak sa pripája na inú hodinu).
  function discardPending() {
    try {
      const p = JSON.parse(localStorage.getItem(ACTIVE_KEY) || 'null');
      localStorage.removeItem(ACTIVE_KEY);
      if (p && p.code) {
        const all = readStore();
        const k = storeKey(p.code, p.nick);
        if (all[k]) { all[k].ended = true; localStorage.setItem(STORE_KEY, JSON.stringify(all)); }
      }
    } catch (_) { /* nič */ }
  }

  // Dodatočné pripojenie živého kanála (obnova po refreshi, výpadok siete).
  function setLive(handle) {
    if (!C) return;
    C.live = handle;
    sendNow();
  }

  function sendNow() {
    if (!C || C.solo || !C.live || !C.live.isOpen()) { if (C) C.sendOk = false; return Promise.resolve(); }
    return C.live.send('progress', {
      nick: C.nick,
      moduleId: C.moduleId,
      stage: C.ended ? 'done' : 'working',
      question: 0, total: 0,
      ts: Date.now(),
      calc: { leaves: C.leaves, awayMs: C.awayMs + (C.hiddenAt ? Date.now() - C.hiddenAt : 0), away: !!C.hiddenAt, selfEnded: !!C.selfEnded },
    }).then(() => { if (C) C.sendOk = true; }).catch(() => { if (C) C.sendOk = false; });
  }

  function touch(immediate) {
    saveLocal();
    clearTimeout(C.sendTimer);
    if (immediate) sendNow(); else C.sendTimer = setTimeout(sendNow, SEND_DEBOUNCE_MS);
  }

  function lockedNow() { return !!C && !C.solo && !C.ended; }

  // Spoločné pre návrat do aplikácie aj pre pokus o odchod cez navigáciu v aplikácii.
  function registerLeave() {
    C.leaves++;
    touch(true);
  }

  function onVisibility() {
    if (!lockedNow()) return;
    if (document.hidden) {
      if (C.hiddenAt || C.unloading) return; // stránka sa práve zatvára/obnovuje – nie je to opustenie
      C.hiddenAt = Date.now();
      C.leaves++;
      touch(true); // pokus o okamžité odoslanie ešte skôr, než prehliadač stránku uspí
    } else {
      C.unloading = false;
      if (C.hiddenAt) { C.awayMs += Date.now() - C.hiddenAt; C.hiddenAt = 0; }
      touch(true);
      requestWake();
    }
  }

  // Obnovenie/zatvorenie stránky: prehliadač pred ním často pošle aj „hidden“, ktoré by sa
  // započítalo ako opustenie. Skutočnú neprítomnosť dopočíta begin() podľa času od posledného uloženia.
  function onPageHide(e) {
    if (!C || e.persisted) return;
    C.unloading = true;
    if (C.hiddenAt && Date.now() - C.hiddenAt < 1500) { C.leaves = Math.max(0, C.leaves - 1); C.hiddenAt = 0; }
    saveLocal();
  }

  // Obrazovka sa nesmie sama zhasnúť, inak by to vyzeralo ako opustenie aplikácie.
  async function requestWake() {
    try {
      if (!C || C.wake || !navigator.wakeLock || document.hidden) return;
      C.wake = await navigator.wakeLock.request('screen');
      C.wake.addEventListener('release', () => { if (C) C.wake = null; });
    } catch (_) { /* nepodporované alebo zamietnuté – nevadí */ }
  }

  // opts: { nick, code, moduleId, live (MathLive handle) } alebo { solo: true, moduleId }
  function begin(opts) {
    end();
    const solo = !!opts.solo;
    const saved = solo ? null : readStore()[storeKey(opts.code, opts.nick)];
    C = {
      solo, nick: opts.nick || '', code: opts.code || '', moduleId: opts.moduleId, live: opts.live || null,
      leaves: saved ? (saved.leaves || 0) : 0,
      awayMs: saved ? (saved.awayMs || 0) : 0,
      ended: saved ? !!saved.ended : false,
      selfEnded: false, hiddenAt: 0, sendOk: null, sendTimer: null, wake: null,
      // vrátenie sa do rozpracovaného zámku po obnovení stránky sa počíta ako opustenie
      mounted: false, app: null,
      expr: '', result: null, resultErr: '', fresh: false, ans: NaN, deg: true, sci: false, history: [],
    };
    if (saved && !saved.ended) {
      const gap = Date.now() - (saved.at || 0);
      if (gap > REFRESH_GRACE_MS) { if (!saved.away) C.leaves++; C.awayMs += gap; }
    }
    document.addEventListener('visibilitychange', onVisibility);
    document.addEventListener('keydown', onKey);
    window.addEventListener('pagehide', onPageHide);
    if (!solo) { saveLocal(); sendNow(); requestWake(); }
  }

  function end() {
    if (!C) return;
    clearTimeout(C.sendTimer);
    document.removeEventListener('visibilitychange', onVisibility);
    document.removeEventListener('keydown', onKey);
    window.removeEventListener('pagehide', onPageHide);
    try { if (C.wake) C.wake.release(); } catch (_) { /* nič */ }
    C = null;
  }

  function active() { return !!C; }
  // Pokus o odchod z kalkulačky navigáciou v aplikácii (Katalóg, Pre učiteľa…).
  function locked() { return lockedNow(); }
  function noteNavigationAttempt() { if (lockedNow()) registerLeave(); }

  function finishLock(self) {
    if (!C || C.ended) return;
    if (C.hiddenAt) { C.awayMs += Date.now() - C.hiddenAt; C.hiddenAt = 0; }
    C.ended = true;
    C.selfEnded = !!self;
    clearTimeout(C.sendTimer);
    saveLocal();
    sendNow();
    if (C.mounted) { renderLockBar(); }
  }

  function onTeacher(msg) {
    if (!C || !msg) return;
    if (msg.action === 'ended') finishLock(false);
    else if (msg.action === 'resend') sendNow();
  }

  // --- Kalkulačka: vstup ---------------------------------------------------------

  const OPS = ['+', '−', '×', '÷', '^'];
  const FUNC_RE = /(?:asin|acos|atan|sin|cos|tan|log|ln|abs)\($|√\($/;

  function lastNumber(expr) {
    const m = /(\d+(?:,\d*)?|,\d+)$/.exec(expr);
    return m ? m[1] : '';
  }

  function press(key) {
    if (!C) return;
    const st = C;
    const isDigit = /^\d$/.test(key);
    const startNew = () => { st.expr = ''; st.result = null; st.resultErr = ''; st.fresh = false; };

    if (key === 'C') { startNew(); }
    else if (key === '⌫') {
      if (st.fresh) { startNew(); }
      else if (FUNC_RE.test(st.expr)) st.expr = st.expr.replace(FUNC_RE, '');
      else if (/Ans$/.test(st.expr)) st.expr = st.expr.slice(0, -3);
      else st.expr = st.expr.slice(0, -1);
      st.resultErr = '';
    } else if (key === '=') { evaluateNow(); return; }
    else if (key === 'a/b') { toggleFraction(); return; }
    else if (key === 'DEG') { st.deg = !st.deg; }
    else if (key === 'SCI') { st.sci = !st.sci; renderKeys(); renderDisplay(); return; }
    else if (key === '±') {
      if (st.fresh) { st.expr = 'Ans'; st.fresh = false; st.result = null; }
      const m = /\(−(\d+(?:,\d*)?)\)$/.exec(st.expr);
      const n = lastNumber(st.expr);
      if (m) st.expr = st.expr.slice(0, -m[0].length) + m[1];
      else if (n) st.expr = st.expr.slice(0, -n.length) + '(−' + n + ')';
      else st.expr += '(−';
    } else {
      if (st.fresh) {
        // po „=“: operácia pokračuje s predošlým výsledkom, číslo/funkcia začína nový výpočet
        const keep = OPS.includes(key) || key === '!' || key === '%' || key === '²';
        startNew();
        if (keep) st.expr = 'Ans';
      }
      if (isDigit) {
        st.expr += key;
      } else if (key === ',') {
        const n = lastNumber(st.expr);
        if (n.includes(',')) return;
        st.expr += n ? ',' : (/[\d)πe]$|Ans$/.test(st.expr) ? '×0,' : '0,');
      } else if (OPS.includes(key)) {
        if (!st.expr) { if (key === '−') st.expr = '−'; else st.expr = 'Ans' + key; }
        else if (/\($/.test(st.expr)) { if (key === '−') st.expr += key; }
        else if (OPS.includes(st.expr.slice(-1)) && st.expr.length > 1) st.expr = st.expr.slice(0, -1) + key;
        else if (st.expr === '−') { /* samotné mínus – nič */ }
        else st.expr += key;
      } else {
        st.expr += key;
      }
      st.resultErr = '';
    }
    renderDisplay();
  }

  function evaluateNow() {
    const st = C;
    if (!st.expr) return;
    try {
      const v = evaluate(st.expr, { deg: st.deg, ans: st.ans });
      st.result = v;
      st.resultErr = '';
      st.history.unshift({ expr: st.expr, value: v });
      if (st.history.length > HISTORY_MAX) st.history.pop();
      st.ans = v;
      st.fresh = true;
      st.showFraction = false;
    } catch (e) {
      st.result = null;
      st.resultErr = e instanceof CalcError ? e.message : 'Výraz sa nedá vyhodnotiť';
      st.fresh = false;
    }
    renderDisplay();
  }

  function toggleFraction() {
    const st = C;
    if (!st.fresh || st.result == null) return;
    st.showFraction = !st.showFraction;
    renderDisplay();
  }

  function onKey(e) {
    if (!C || !C.mounted || e.ctrlKey || e.metaKey || e.altKey) return;
    const tag = e.target && e.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    const k = e.key;
    let out = null;
    if (/^\d$/.test(k)) out = k;
    else if (k === '+') out = '+';
    else if (k === '-') out = '−';
    else if (k === '*' || k === 'x') out = '×';
    else if (k === '/') out = '÷';
    else if (k === '.' || k === ',') out = ',';
    else if (k === '(' || k === ')' || k === '^' || k === '!' || k === '%') out = k;
    else if (k === 'Enter' || k === '=') out = '=';
    else if (k === 'Backspace') out = '⌫';
    else if (k === 'Escape' || k === 'Delete') out = 'C';
    if (out) { e.preventDefault(); press(out); }
  }

  // --- Kalkulačka: vykresľovanie ---------------------------------------------------

  const BASIC_KEYS = [
    ['C', '(', ')', '⌫'],
    ['7', '8', '9', '÷'],
    ['4', '5', '6', '×'],
    ['1', '2', '3', '−'],
    ['±', '0', ',', '+'],
    ['Ans', '%', 'a/b', '='],
  ];
  const SCI_KEYS = [
    ['sin(', 'cos(', 'tan(', 'DEG'],
    ['asin(', 'acos(', 'atan(', '√('],
    ['log(', 'ln(', 'π', 'e'],
    ['²', '^', '!', 'abs('],
  ];

  function keyLabel(k) {
    if (k === 'DEG') return C.deg ? 'DEG' : 'RAD';
    if (k === '²') return 'x²';
    if (k === '^') return 'xʸ';
    if (k === '!') return 'n!';
    if (k === 'abs(') return '|x|';
    return k;
  }

  function keyClass(k) {
    if (k === '=') return 'calc-key eq';
    if (['÷', '×', '−', '+'].includes(k)) return 'calc-key op';
    if (k === 'C' || k === '⌫') return 'calc-key clr';
    if (/^[\d,]$/.test(k)) return 'calc-key num';
    return 'calc-key fn';
  }

  function topBar() {
    return `<div class="module-topic-bar"><span>Kalkulačka</span><strong>${C.solo ? 'Samostatný režim' : esc(C.nick)}</strong></div>`;
  }

  // Žiak sa o zámku nedozvie: počas behu nič, po ukončení učiteľom neutrálna správa.
  function lockBarHtml() {
    if (C.ended) return '<div class="calc-lock ended"><span>Kalkulačka je ukončená. Mobil môžeš odložiť.</span></div>';
    return '';
  }

  function renderLockBar() {
    const el = $('#calcLock');
    if (el) el.innerHTML = lockBarHtml();
  }

  function renderKeys() {
    const host = $('#calcKeys');
    if (!host) return;
    const rows = (C.sci ? SCI_KEYS : []).concat(BASIC_KEYS);
    host.innerHTML = rows.map(r => r.map(k => {
      const cls = keyClass(k) + (k === 'DEG' ? ' mode' : '');
      return `<button type="button" class="${cls}" data-k="${esc(k)}">${esc(keyLabel(k))}</button>`;
    }).join('')).join('');
    const sciBtn = $('#calcSci');
    if (sciBtn) { sciBtn.textContent = C.sci ? 'Menej funkcií ▲' : 'Viac funkcií ▼'; sciBtn.setAttribute('aria-expanded', C.sci ? 'true' : 'false'); }
  }

  function previewText() {
    if (C.fresh || !C.expr || /[+−×÷^(]$/.test(C.expr)) return '';
    if (/^[\d,]+$/.test(C.expr)) return '';
    try { return '= ' + formatNumber(evaluate(C.expr, { deg: C.deg, ans: C.ans })); } catch (_) { return ''; }
  }

  function fractionText() {
    if (!C.showFraction || C.result == null) return '';
    const f = toFraction(C.result);
    return f ? (f.n < 0 ? '−' : '') + Math.abs(f.n) + '/' + f.d : 'nie je zlomok s menovateľom do 10 000';
  }

  function renderDisplay() {
    const ex = $('#calcExpr'), res = $('#calcResult'), hist = $('#calcHistory');
    if (!ex) return;
    ex.textContent = C.expr || '0';
    ex.scrollLeft = ex.scrollWidth;
    if (C.resultErr) { res.className = 'calc-result err'; res.textContent = C.resultErr; }
    else if (C.fresh && C.result != null) {
      res.className = 'calc-result';
      const fr = fractionText();
      res.textContent = fr ? fr : '= ' + formatNumber(C.result);
    } else { res.className = 'calc-result prev'; res.textContent = previewText(); }
    const mode = $('#calcMode');
    if (mode) mode.textContent = C.deg ? 'DEG' : 'RAD';
    $$('#calcKeys [data-k="DEG"]').forEach(b => { b.textContent = C.deg ? 'DEG' : 'RAD'; });
    if (hist) {
      hist.innerHTML = C.history.slice(0, 6).map((h, i) => `<button type="button" class="calc-hist" data-h="${i}"><span>${esc(h.expr)}</span><b>= ${esc(formatNumber(h.value))}</b></button>`).join('');
    }
  }

  function play(app) {
    if (!C) return;
    C.app = app;
    C.mounted = true;
    app.innerHTML = `<article class="card learning-card calc-card">
      ${topBar()}
      <div id="calcLock"></div>
      <div class="calc-screen" aria-live="polite">
        <div class="calc-hist-list" id="calcHistory"></div>
        <div class="calc-mode-row"><span id="calcMode" class="calc-modechip"></span></div>
        <div class="calc-expr" id="calcExpr" tabindex="-1">0</div>
        <div class="calc-result" id="calcResult"></div>
      </div>
      <div class="calc-keys" id="calcKeys"></div>
      <div class="row calc-tools">
        <button type="button" class="ghost" id="calcSci" aria-expanded="false"></button>
        ${C.solo ? '<button type="button" class="ghost" data-go="catalog">Zavrieť kalkulačku</button>' : ''}
      </div>
      <p class="muted small-note">Desatinná čiarka „,“ · % = delenie 100 · Ans = predošlý výsledok · sin/cos/tan počítajú v ${C.deg ? 'stupňoch (DEG)' : 'radiánoch (RAD)'} podľa tlačidla DEG/RAD. Tlačidlo a/b zobrazí výsledok ako zlomok.</p>
    </article>`;
    renderLockBar();
    renderKeys();
    renderDisplay();
    $('#calcKeys').onclick = e => {
      const b = e.target.closest('button[data-k]');
      if (b) press(b.dataset.k);
    };
    $('#calcHistory').onclick = e => {
      const b = e.target.closest('button[data-h]');
      if (!b) return;
      const h = C.history[Number(b.dataset.h)];
      if (!h) return;
      if (C.fresh) { C.expr = ''; C.fresh = false; C.result = null; }
      C.expr += formatNumber(h.value);
      renderDisplay();
    };
    $('#calcSci').onclick = () => press('SCI');
    // Tlačidlá nesmú vziať focus (klávesnica a scroll sa nesmú hýbať).
    $('#calcKeys').addEventListener('pointerdown', ev => ev.preventDefault());
  }

  window.MathCalc = {
    // logika
    evaluate, formatNumber, toFraction, formatDuration, CalcError,
    // žiak
    begin, play, end, active, locked, noteNavigationAttempt, onTeacher, pending, discardPending, setLive,
  };
})();
