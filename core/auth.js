// core/auth.js — window.MathAuth
//
// Teacher login/verification. The password itself is checked on the server
// (api/teacher-auth.js) and never sent anywhere else; this file only holds
// the short-lived signed token in sessionStorage and re-verifies it with the
// server before every gated route (cached for 60s in memory so a quick
// back-and-forth click doesn't re-hit the network on every navigation).
(function () {
  const TOKEN_KEY = 'mathTeacherToken';
  const CACHE_MS = 60 * 1000;

  let cache = { token: '', ok: false, checkedAt: 0 };

  function storedToken() { return sessionStorage.getItem(TOKEN_KEY) || ''; }
  function setToken(t) { sessionStorage.setItem(TOKEN_KEY, t); }
  function clearToken() {
    sessionStorage.removeItem(TOKEN_KEY);
    cache = { token: '', ok: false, checkedAt: 0 };
  }

  async function call(body) {
    try {
      const r = await fetch('/api/teacher-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await r.json().catch(() => ({}));
      return { status: r.status, ...data };
    } catch (_) {
      return { status: 0, ok: false, error: 'Server nie je dostupný. Skontroluj pripojenie a skús to znova.' };
    }
  }

  async function unlocked() {
    const token = storedToken();
    if (!token) return false;
    const now = Date.now();
    if (cache.token === token && cache.ok && (now - cache.checkedAt) < CACHE_MS) return true;
    const r = await call({ token });
    cache = { token, ok: !!r.ok, checkedAt: now };
    if (!r.ok) clearToken();
    return !!r.ok;
  }

  // Returns the raw server response ({ok, token} or {ok:false, error, status})
  // so the login screen can show a specific message (e.g. 429 rate limit).
  async function login(password) {
    const r = await call({ password });
    if (r.ok && r.token) setToken(r.token);
    return r;
  }

  function logout() { clearToken(); }

  window.MathAuth = { unlocked, login, logout };
})();
