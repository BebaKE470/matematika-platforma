// Vercel serverless funkcia: vydá celú písomku (zadania A/B aj kľúč správnych
// odpovedí) výlučne prihlásenej učiteľke. POST { token, id } → { ok, exam }.
// Token je ten istý podpísaný token, aký vydáva api/teacher-auth.js.
// Kľúč sa žiakom nikdy neposiela – žiakom pošle učiteľkin prehliadač len zadania
// (viď core/exam.js, publicExam) a kľúč až po zverejnení výsledkov.

const { verifyToken } = require('./_lib/token.js');
const EXAMS = require('./_exams/index.js');

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Metóda nie je povolená.' });
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body || '{}'); } catch (_) { body = {}; }
  }
  body = body || {};

  if (!verifyToken(body.token)) {
    res.status(401).json({ ok: false, error: 'Neplatné alebo expirované prihlásenie.' });
    return;
  }

  const id = typeof body.id === 'string' ? body.id : '';
  if (!/^[0-9a-z-]{1,40}$/.test(id) || !Object.prototype.hasOwnProperty.call(EXAMS, id)) {
    res.status(404).json({ ok: false, error: 'Písomka neexistuje.' });
    return;
  }

  res.status(200).json({ ok: true, exam: EXAMS[id] });
};
