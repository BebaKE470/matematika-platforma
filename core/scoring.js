// core/scoring.js — window.MathScore
//
// The single source of truth for "how many points is this worth". Renderers
// no longer compute points themselves — they call ctx.record(activity,
// outcome) with just the FACTS of what happened (was it correct on the first
// try? how many items out of how many?), and MathScore.award() turns that
// into a point value. This replaces the old design where core/app.js had one
// type→max table (activityMaxPoints) and each renderer separately hardcoded
// its own award amount (100/60, 20, 30, 120·ok/n…) — the two could disagree
// silently, and activity.maxPoints was honoured by one side but not the other.
//
// tools/audit.mjs keeps a deliberately-small duplicate of the `max` values
// below (documented there) and fails the audit if the two drift apart.
(function () {
  const POINTS = {
    choice:         { max: 100, retryRatio: 0.6 },
    numberInput:    { max: 100, retryRatio: 0.6 },
    sortChoice:     { max: 100, partial: true },
    matrix:         { max: 120, partial: true },
    notebook:       { max: 20 },
    selfWrite:      { max: 30 },
    info:           { max: 0 },
    explain:        { max: 0 },
    coordinatePlot: { max: 0 },
    reflection:     { max: 0 },
  };

  function rule(activity) {
    return (activity && POINTS[activity.type]) || { max: 0 };
  }

  // Max points for one activity — honours a per-activity activity.maxPoints
  // override (no module in the repo currently sets one; this exists so a
  // future module can, without the renderer needing to know about it).
  function maxPoints(activity) {
    const override = Number(activity && activity.maxPoints);
    if (Number.isFinite(override)) return Math.max(0, override);
    return rule(activity).max;
  }

  function moduleMaxPoints(mod) {
    const acts = (mod && mod.student && mod.student.activities) || [];
    return acts.reduce((sum, a) => sum + maxPoints(a), 0);
  }

  // outcome: { correct, attempts, correctCount, itemCount }
  //   - plain right/wrong activities (choice, numberInput) pass {correct, attempts}
  //   - partial-credit activities (sortChoice, matrix) pass {correctCount, itemCount}
  //   - participation activities (notebook, selfWrite) pass {correct: true, attempts: 1}
  function award(activity, outcome) {
    const max = maxPoints(activity);
    if (!max) return 0;
    const r = rule(activity);

    if (r.partial) {
      const n = Number(outcome && outcome.itemCount) || 0;
      if (!n) return 0;
      const ok = Number(outcome && outcome.correctCount) || 0;
      return Math.round(max * ok / n);
    }

    if (!outcome || outcome.correct === false) return 0;
    const attempts = Number(outcome && outcome.attempts) || 1;
    if (attempts <= 1) return max;
    const ratio = r.retryRatio != null ? r.retryRatio : 1;
    return Math.round(max * ratio);
  }

  function resultFeedback(percent) {
    if (percent >= 85) return { level: 'Výborne', text: 'Základným myšlienkam témy rozumieš a vieš ich používať. Skús ich teraz vysvetliť aj vlastnými slovami.' };
    if (percent >= 65) return { level: 'Dobrá práca', text: 'Väčšine témy rozumieš. Oplatí sa ešte upevniť úlohy, pri ktorých si váhal/a alebo potreboval/a druhý pokus.' };
    if (percent >= 40) return { level: 'Základ už máš', text: 'Niektorým častiam už rozumieš, ale pred ďalšou témou sa vráť k vysvetleniam a úlohám, ktoré ti robili problém.' };
    return { level: 'Tému ešte precvič', text: 'Vráť sa k vysvetleniam a skús problémové úlohy ešte raz. Dôležité je porozumieť postupu, nie iba nazbierať XP.' };
  }

  // --- Grading (percent -> orientačná známka; teacher-configured, per-browser) ---

  const GRADING_KEY = 'mathTeacherGradingSettingsV1';
  const DEFAULT_GRADING = { enabled: false, thresholds: { 1: 90, 2: 75, 3: 50, 4: 30 } };

  function validThresholds(t) {
    const a = [Number(t[1]), Number(t[2]), Number(t[3]), Number(t[4])];
    return a.every(x => Number.isFinite(x) && x >= 0 && x <= 100) && a[0] > a[1] && a[1] > a[2] && a[2] > a[3];
  }

  function loadGrading() {
    try {
      const saved = JSON.parse(localStorage.getItem(GRADING_KEY) || 'null');
      const t = (saved && saved.thresholds) || {};
      const s = {
        enabled: !!(saved && saved.enabled),
        thresholds: {
          1: Number.isFinite(Number(t[1])) ? Number(t[1]) : 90,
          2: Number.isFinite(Number(t[2])) ? Number(t[2]) : 75,
          3: Number.isFinite(Number(t[3])) ? Number(t[3]) : 50,
          4: Number.isFinite(Number(t[4])) ? Number(t[4]) : 30,
        },
      };
      return validThresholds(s.thresholds) ? s : JSON.parse(JSON.stringify(DEFAULT_GRADING));
    } catch (_) {
      return JSON.parse(JSON.stringify(DEFAULT_GRADING));
    }
  }

  function saveGrading(s) { localStorage.setItem(GRADING_KEY, JSON.stringify(s)); }

  function gradeForPercent(percent, s) {
    const settings = s || loadGrading();
    if (!settings.enabled || !Number.isFinite(Number(percent))) return '';
    const p = Number(percent), t = settings.thresholds;
    if (p >= t[1]) return 1;
    if (p >= t[2]) return 2;
    if (p >= t[3]) return 3;
    if (p >= t[4]) return 4;
    return 5;
  }

  function scaleText(t) {
    return `1: ${t[1]}–100 % · 2: ${t[2]}–${t[1] - 1} % · 3: ${t[3]}–${t[2] - 1} % · 4: ${t[4]}–${t[3] - 1} % · 5: 0–${t[4] - 1} %`;
  }

  // The little "computes into the known" badge shown in every activity header
  // (core/renderers.js) and updated live when the teacher toggles grading
  // mid-lesson (core/views-teacher.js).
  function badgeHtml(mode, grading) {
    if (mode !== 'live') return '';
    if (grading === undefined || grading === null) {
      return '<span id="gradingBadge" class="tag grading-pending">⏳ zisťujem hodnotenie…</span>';
    }
    if (!grading.enabled) return '<span id="gradingBadge" class="tag grading-off">🧪 bez známky</span>';
    const title = grading.thresholds ? ` title="${scaleText(grading.thresholds)}"` : '';
    return `<span id="gradingBadge" class="tag grading-on"${title}>📝 počíta sa do známky</span>`;
  }

  window.MathScore = {
    maxPoints, moduleMaxPoints, award, resultFeedback,
    loadGrading, saveGrading, validThresholds, gradeForPercent, scaleText, badgeHtml,
    GRADING_KEY,
  };
})();
