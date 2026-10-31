// Spoločné pomôcky pre serverové funkcie (api/teacher-auth.js, api/exam.js):
// čítanie TEACHER_PASSWORD a vydávanie/overovanie podpísaného tokenu.
// Adresár/súbory s predponou `_` Vercel nevystavuje ako samostatné endpointy.

const crypto = require('crypto');

const TOKEN_TTL_MS = 8 * 60 * 60 * 1000; // 8 h – vydrží jeden vyučovací deň

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

module.exports = { TOKEN_TTL_MS, teacherPassword, issueToken, verifyToken, safeEqual };
