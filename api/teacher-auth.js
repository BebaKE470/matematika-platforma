// Vercel serverless funkcia (Node.js runtime, žiadne závislosti).
//
// Overuje učiteľské heslo NA SERVERI a vydáva krátkodobo platný podpísaný token.
// Appka (core/app.js) si token uloží do sessionStorage a pri každom vstupe do
// učiteľskej časti si ho nechá overiť tu (POST { token }). Bez znalosti
// TEACHER_PASSWORD (tá nikdy neopustí server) sa platný token nedá vyrobiť ani
// podvrhnúť zo sessionStorage/DevTools – na rozdiel od pôvodného
// `sessionStorage.getItem(...) === 'ok'` riešenia.
//
// Nastavenie: vo Vercel projekte (Settings → Environment Variables) pridaj
// TEACHER_PASSWORD s heslom podľa výberu učiteľa/školy. Pre lokálny beh cez
// `vercel dev` ho daj do .env.local (nikdy sa necommitne, viď .gitignore).

const crypto = require('crypto');

const TOKEN_TTL_MS = 8 * 60 * 60 * 1000; // 8 h – vydrží jeden vyučovací deň
const RATE_WINDOW_MS = 60 * 1000;
const RATE_MAX_ATTEMPTS = 5;

// Best-effort spomalenie hrubej sily. Žije len v pamäti jednej "teplej" inštancie
// funkcie a pri studenom štarte sa vynuluje – nie je to náhrada za silné heslo,
// len ďalšia prekážka pre niekoho, kto skúša heslá naklikaním cez formulár.
const attempts = new Map();

function clientIp(req) {
  const fwd = req.headers['x-forwarded-for'];
  if (typeof fwd === 'string' && fwd.trim()) return fwd.split(',')[0].trim();
  return req.socket?.remoteAddress || 'unknown';
}

function tooManyAttempts(ip) {
  const now = Date.now();
  const rec = attempts.get(ip);
  if (!rec || now > rec.resetAt) { attempts.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS }); return false; }
  rec.count++;
  return rec.count > RATE_MAX_ATTEMPTS;
}

function teacherPassword() {
  const v = process.env.TEACHER_PASSWORD;
  if (!v) throw new Error('TEACHER_PASSWORD nie je nastavené v prostredí servera.');
  return v;
}

function sign(payload) {
  return crypto.createHmac('sha256', teacherPassword()).update(payload).digest('base64url');
}

function issueToken() {
  const payload = Buffer.from(JSON.stringify({ exp: Date.now() + TOKEN_TTL_MS })).toString('base64url');
  return `${payload}.${sign(payload)}`;
}

function verifyToken(token) {
  if (typeof token !== 'string') return false;
  const dot = token.indexOf('.');
  if (dot <= 0) return false;
  const payload = token.slice(0, dot), sig = token.slice(dot + 1);
  if (!payload || !sig) return false;
  let expected;
  try { expected = sign(payload); } catch (_) { return false; }
  const a = Buffer.from(sig), b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return false;
  try {
    const { exp } = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    return typeof exp === 'number' && Date.now() < exp;
  } catch (_) { return false; }
}

function safeEqual(a, b) {
  const bufA = Buffer.from(String(a)), bufB = Buffer.from(String(b));
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Metóda nie je povolená.' });
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body || '{}'); } catch (_) { body = {}; }
  }
  body = body || {};

  // Overenie existujúceho tokenu (volá appka pri každom vstupe do učiteľskej časti).
  if (typeof body.token === 'string') {
    res.status(200).json({ ok: verifyToken(body.token) });
    return;
  }

  // Prihlásenie heslom.
  if (typeof body.password === 'string') {
    const ip = clientIp(req);
    if (tooManyAttempts(ip)) {
      res.status(429).json({ ok: false, error: 'Príliš veľa pokusov. Skús to o minútu.' });
      return;
    }

    let expected;
    try { expected = teacherPassword(); }
    catch (_) { res.status(500).json({ ok: false, error: 'Heslo nie je na serveri nastavené (TEACHER_PASSWORD).' }); return; }

    if (!safeEqual(body.password, expected)) {
      res.status(401).json({ ok: false, error: 'Nesprávne heslo.' });
      return;
    }

    res.status(200).json({ ok: true, token: issueToken(), expiresIn: TOKEN_TTL_MS });
    return;
  }

  res.status(400).json({ ok: false, error: 'Chýba heslo alebo token.' });
};
