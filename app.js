(function () {
  "use strict";

  // ── Question sets ────────────────────────────────────────────────────────
  // Split all questions into 3 difficulty tiers:
  //   Beginner    (66): first 66 from questionsSet2 (foundational/conceptual)
  //   Intermediate(67): last 34 from questionsSet2 + first 33 from questions (transitional)
  //   Proficient  (67): curated mix of scenario-based functional questions (from
  //                     questions.js) + AL developer questions (IDs 101-134),
  //                     covering the full MB-820 exam topic spread.

  // Proficient quiz: 33 functional questions + 34 AL/developer questions = 67
  var _proficientIds = new Set([
    // ── Finance, Sales, Purchase, Inventory, Service, Planning, Jobs (33) ──
    34, 35, 37, 39, 40, 41, 43, 44, 46, 47, 48, 51, 52, 54, 55, 57,
    61, 64, 66, 69, 70, 71, 73, 75, 76, 79, 81, 83, 85, 86, 87, 94, 95,
    // ── AL Development, Extensions, Events, Testing, Permissions, API,
    //    XMLport, Report, Upgrade, Deployment, Telemetry (34) ──
    101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
    111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
    121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
    131, 132, 133, 134
  ]);

  const QUESTION_SETS = [
    {
      key: "beginner",
      label: "Beginner Quiz",
      difficulty: "beginner",
      description: "66 foundational questions covering core Business Central concepts and terminology.",
      data: questionsSet2.slice(0, 66)
    },
    {
      key: "intermediate",
      label: "Intermediate Quiz",
      difficulty: "intermediate",
      description: "67 questions bridging foundational knowledge and advanced Business Central topics.",
      data: questionsSet2.slice(66).concat(questions.slice(0, 33))
    },
    {
      key: "proficient",
      label: "Proficient Quiz",
      difficulty: "proficient",
      description: "67 scenario-based questions balanced across the full MB-820 exam — functional configuration, AL extension development, events, testing, permissions, API pages, XMLport, upgrade codeunits, telemetry, and deployment.",
      data: questions.filter(function (q) { return _proficientIds.has(q.id); })
    },
    {
      key: "official",
      label: "Official Questions",
      difficulty: "official",
      description: "77 official MB-820 exam questions covering deployment architecture, AL development, permissions, XMLports, queries, HTTP, reports, telemetry, and more.",
      data: questionsOfficial
    }
  ];

  // ── All-questions pool (used for Random Practice Quiz) ──────────────────
  const ALL_QUESTIONS = (function () {
    const seen = {};
    const pool = [];
    QUESTION_SETS.forEach(function (set) {
      set.data.forEach(function (q) {
        if (!seen[q.id]) { seen[q.id] = true; pool.push(q); }
      });
    });
    return pool;
  })();

  const RANDOM_QUIZ_COUNT = 67;
  const RANDOM_SET = {
    key: "random",
    label: "Random Practice Quiz",
    difficulty: "random",
    description: "67 randomly selected questions drawn from all available quizzes. Does not count towards preparation progress.",
    data: ALL_QUESTIONS
  };

  const TIMER_DURATION       = 120 * 60; // 120 minutes in seconds
  const TIMER_WARNING_MINS   = 30;       // yellow threshold
  const TIMER_CRITICAL_MINS  = 10;       // red threshold
  const IDLE_TIMEOUT_SECS    = 120;      // 2 minutes — auto-pause after this long without user activity

  // MB-820 scoring thresholds (percentage, 0-100)
  const PASS_PCT     = 70; // 700/1000 points — minimum passing score for MB-820
  const MARGINAL_PCT = 60; // "close but not there" band
  const STUDY_TIME_KEY = "mb820_study_time"; // accumulated study seconds (quizzes + test cases)

  // ── State ────────────────────────────────────────────────────────────────
  let activeSet     = null; // one of QUESTION_SETS entries
  let current       = 0;
  let score         = 0;
  let answered      = false;
  let shuffled      = [];
  let results       = []; // {questionId, isCorrect, selected, correct}
  let timerSeconds  = TIMER_DURATION;
  let timerInterval = null;
  let reviewMode    = false; // true when re-viewing a completed quiz (no re-save)

  // ── Idle / auto-pause state ───────────────────────────────────────────────
  let idleTimeout          = null;  // setTimeout handle for auto-pause
  let isPaused             = false; // true when quiz is auto-paused
  let quizIsActive         = false; // true when a question is displayed
  let pauseTimerWasRunning = false; // remember if the quiz timer was running before pause

  // ── Test-case state ───────────────────────────────────────────────────────
  // caseStudyMode: null | "standalone" | "combined"
  // caseStudy:     the active TEST_CASES entry
  // casePhase:     "quiz" | "testcase" (only meaningful in combined mode)
  // savedQuizState: snapshot of quiz results saved when transitioning to the test-case phase
  let caseStudyMode  = null;
  let caseStudy      = null;
  let casePhase      = "quiz";
  let savedQuizState = null;

  // ── Quiz mode (practice vs test) ─────────────────────────────────────────
  // practiceMode = true:  show correct answers + explanation after each question
  // practiceMode = false: show answers only on the evaluation / summary screen
  let practiceMode = true;

  // ── Study-time tracking ───────────────────────────────────────────────────
  // Counts every second the quiz/testcase timer is running (Quick Practice and
  // review mode do not use startTimer(), so they are naturally excluded).
  let studyTimeSeconds = 0;

  // ── Quick Practice state ─────────────────────────────────────────────────
  const QP_STREAK_KEY = "mb820_qp_streak";
  const QP_BEST_KEY   = "mb820_qp_best";
  const QP_SEEN_KEY   = "mb820_qp_seen"; // question IDs answered in the current run
  var qp = { pool: [], poolIdx: 0, streak: 0, bestStreak: 0, seenInRun: new Set() };
  var UT_MESSAGES = [
    { streak: 5,  msg: "KILLING SPREE!",   emoji: "\uD83D\uDD25", color: "#f97316" },
    { streak: 10, msg: "RAMPAGE!",          emoji: "\uD83D\uDCA5", color: "#ef4444" },
    { streak: 15, msg: "DOMINATING!",       emoji: "\u26A1",       color: "#8b5cf6" },
    { streak: 20, msg: "UNSTOPPABLE!",      emoji: "\uD83C\uDF2A\uFE0F", color: "#06b6d4" },
    { streak: 25, msg: "GODLIKE!",          emoji: "\u2B50",       color: "#f59e0b" },
    { streak: 30, msg: "BEYOND GODLIKE!",   emoji: "\uD83D\uDE80", color: "#22c55e" }
  ];

  // ── DOM refs ─────────────────────────────────────────────────────────────
  const setSelectionEl = document.getElementById("set-selection");
  const questionEl     = document.getElementById("question");
  const choicesEl      = document.getElementById("choices");
  const nextBtn        = document.getElementById("next-button");
  const summaryEl      = document.getElementById("score-summary");
  const timerEl        = document.getElementById("timer-display");
  const homeBtn        = document.getElementById("home-btn");

  homeBtn.addEventListener("click", function () {
    clearIdleTimer();
    quizIsActive = false;
    isPaused     = false;
    hidePauseOverlay();
    stopTimer();
    if (shuffled.length > 0 && current < shuffled.length && !reviewMode) saveProgress();
    reviewMode     = false;
    activeSet      = null;
    caseStudyMode  = null;
    caseStudy      = null;
    savedQuizState = null;
    casePhase      = "quiz";
    showSetSelection();
  });

  // ── Home button visibility ────────────────────────────────────────────────
  function showHomeBtn() { homeBtn.style.display = "inline-block"; }
  function hideHomeBtn() { homeBtn.style.display = "none"; }

  // ── Timer ────────────────────────────────────────────────────────────────
  function startTimer() {
    stopTimer();
    timerEl.style.display = "flex";
    updateTimerDisplay();
    timerInterval = setInterval(function () {
      if (timerSeconds > 0) {
        timerSeconds--;
        studyTimeSeconds++;
        updateTimerDisplay();
        // Save timer state every 10 seconds so a page-close loses at most 10 s
        if (timerSeconds % 10 === 0) { saveProgress(); saveStudyTime(); }
      } else {
        stopTimer();
        timerEl.innerHTML =
          '<span class="timer-icon">\u23F1</span>' +
          '<span class="timer-value timer-red">00:00</span>' +
          '<span class="timer-expired">\u00A0Time\'s up!</span>';
      }
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function updateTimerDisplay() {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    const timeStr = String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0");
    let cls = "timer-green";
    if (timerSeconds <= TIMER_CRITICAL_MINS * 60) cls = "timer-red";
    else if (timerSeconds <= TIMER_WARNING_MINS * 60) cls = "timer-yellow";
    timerEl.innerHTML =
      '<span class="timer-icon">\u23F1</span>' +
      '<span class="timer-value ' + cls + '">' + timeStr + '</span>' +
      '<span class="timer-label">remaining</span>';
  }

  function hideTimer() {
    stopTimer();
    timerEl.style.display = "none";
  }

  function formatTime(totalSeconds) {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    if (h > 0) {
      return h + "h " + String(m).padStart(2, "0") + "m " + String(s).padStart(2, "0") + "s";
    }
    return String(m).padStart(2, "0") + "m " + String(s).padStart(2, "0") + "s";
  }

  function loadStudyTime() {
    try {
      const v = parseInt(localStorage.getItem(STUDY_TIME_KEY), 10);
      return isNaN(v) || v < 0 ? 0 : v;
    } catch (e) { return 0; }
  }

  function saveStudyTime() {
    try { localStorage.setItem(STUDY_TIME_KEY, String(studyTimeSeconds)); } catch (e) { /* ignore */ }
  }

  // ── Confirmation modal ────────────────────────────────────────────────────
  function showConfirm(title, message, onConfirm) {
    document.getElementById("confirm-title").textContent = title;
    document.getElementById("confirm-message").textContent = message;
    document.getElementById("confirm-overlay").style.display = "flex";

    const yesBtn = document.getElementById("confirm-yes-btn");
    const noBtn  = document.getElementById("confirm-no-btn");

    function cleanup() {
      document.getElementById("confirm-overlay").style.display = "none";
      yesBtn.removeEventListener("click", onYes);
      noBtn.removeEventListener("click", onNo);
    }
    function onYes() { cleanup(); onConfirm(); }
    function onNo()  { cleanup(); }

    yesBtn.addEventListener("click", onYes);
    noBtn.addEventListener("click", onNo);
  }

  // ── Idle / auto-pause ────────────────────────────────────────────────────
  // Throttle timestamp — avoid re-setting the idle timer on every pixel of
  // mousemove (which fires dozens of times per second).
  let lastActivityReset = 0;

  function clearIdleTimer() {
    if (idleTimeout) { clearTimeout(idleTimeout); idleTimeout = null; }
  }

  function startIdleTimer() {
    clearIdleTimer();
    if (!quizIsActive || isPaused) return;
    idleTimeout = setTimeout(pauseQuiz, IDLE_TIMEOUT_SECS * 1000);
  }

  function onUserActivity() {
    // quizIsActive is checked first — so this handler is effectively a no-op
    // on the set-selection and summary screens even though it is always registered.
    if (!quizIsActive || isPaused) return;
    const now = Date.now();
    if (now - lastActivityReset < 1000) return; // throttle: reset at most once per second
    lastActivityReset = now;
    startIdleTimer();
  }

  function showPauseOverlay() {
    document.getElementById("pause-overlay").style.display = "flex";
  }

  function hidePauseOverlay() {
    document.getElementById("pause-overlay").style.display = "none";
  }

  function pauseQuiz() {
    if (!quizIsActive || isPaused) return;
    isPaused             = true;
    pauseTimerWasRunning = (timerInterval !== null);
    clearIdleTimer();
    stopTimer();
    saveProgress();
    showPauseOverlay();
  }

  function resumeFromPause() {
    if (!isPaused) return;
    isPaused = false;
    hidePauseOverlay();
    if (pauseTimerWasRunning) startTimer();
    startIdleTimer();
  }

  // Register activity listeners — they are always present but onUserActivity()
  // exits immediately when quizIsActive is false, keeping the cost negligible.
  ["mousemove", "mousedown", "keydown", "touchstart", "scroll", "click"].forEach(function (evt) {
    document.addEventListener(evt, onUserActivity, { passive: true });
  });

  // Wire up pause overlay buttons
  document.getElementById("pause-resume-btn").addEventListener("click", resumeFromPause);
  document.getElementById("pause-home-btn").addEventListener("click", function () {
    isPaused = false;
    hidePauseOverlay();
    homeBtn.click(); // delegate to existing home-button handler
  });

  // Wire up peek overlay buttons
  document.getElementById("peek-continue-btn").addEventListener("click", function () {
    document.getElementById("peek-overlay").style.display = "none";
  });
  document.getElementById("peek-quit-btn").addEventListener("click", function () {
    document.getElementById("peek-overlay").style.display = "none";
    homeBtn.click();
  });

  // Wire up streak overlay dismiss button
  document.getElementById("streak-dismiss-btn").addEventListener("click", function () {
    document.getElementById("streak-overlay").style.display = "none";
  });

  function saveKey() {
    if (caseStudyMode === "standalone") {
      return "mb820_case_" + caseStudy.key;
    }
    if (caseStudyMode === "combined") {
      return "mb820_combined_" + activeSet.key + "_" + caseStudy.key;
    }
    return "mb820_quiz_progress_" + activeSet.key;
  }

  function saveProgress() {
    try {
      if (caseStudyMode === "combined" && casePhase === "testcase" && savedQuizState) {
        // In the test-case phase of a combined run — persist both parts
        localStorage.setItem(saveKey(), JSON.stringify({
          phase: "testcase",
          quiz: savedQuizState,
          testcase: {
            shuffledIds: shuffled.map(function (q) { return q.id; }),
            current: current,
            score: score,
            results: results,
            timerSeconds: timerSeconds
          }
        }));
      } else if (caseStudyMode === "combined") {
        // Still in the quiz phase of a combined run
        localStorage.setItem(saveKey(), JSON.stringify({
          phase: "quiz",
          caseKey: caseStudy.key,
          shuffledIds: shuffled.map(function (q) { return q.id; }),
          current: current,
          score: score,
          results: results,
          timerSeconds: timerSeconds
        }));
      } else {
        // Standalone quiz or standalone test case
        localStorage.setItem(saveKey(), JSON.stringify({
          shuffledIds: shuffled.map(function (q) { return q.id; }),
          current: current,
          score: score,
          results: results,
          timerSeconds: caseStudyMode === "standalone" ? null : timerSeconds,
          practiceMode: practiceMode
        }));
      }
    } catch (e) { /* storage unavailable */ }
  }

  function loadProgress(set) {
    try {
      const raw = localStorage.getItem("mb820_quiz_progress_" + set.key);
      if (!raw) return null;
      const saved = JSON.parse(raw);
      if (!saved || !Array.isArray(saved.shuffledIds) || saved.shuffledIds.length === 0) return null;
      const qMap = {};
      set.data.forEach(function (q) { qMap[q.id] = q; });
      const restored = saved.shuffledIds.map(function (id) { return qMap[id]; });
      if (restored.some(function (q) { return !q; })) return null;
      return {
        shuffled: restored,
        current: typeof saved.current === "number" ? saved.current : 0,
        score: typeof saved.score === "number" ? saved.score : 0,
        results: Array.isArray(saved.results) ? saved.results : [],
        timerSeconds: typeof saved.timerSeconds === "number" ? saved.timerSeconds : TIMER_DURATION,
        practiceMode: typeof saved.practiceMode === "boolean" ? saved.practiceMode : true
      };
    } catch (e) { return null; }
  }

  // Load saved progress for a combined run (quiz + test case)
  function loadCombinedProgress(set, tc) {
    try {
      const key = "mb820_combined_" + set.key + "_" + tc.key;
      const raw = localStorage.getItem(key);
      if (!raw) return null;
      const saved = JSON.parse(raw);
      if (!saved || !saved.phase) return null;
      return saved;
    } catch (e) { return null; }
  }

  // Load saved progress for a standalone test case
  function loadCaseProgress(tc) {
    try {
      const raw = localStorage.getItem("mb820_case_" + tc.key);
      if (!raw) return null;
      const saved = JSON.parse(raw);
      if (!saved || !Array.isArray(saved.shuffledIds) || saved.shuffledIds.length === 0) return null;
      const qMap = {};
      tc.questions.forEach(function (q) { qMap[q.id] = q; });
      const restored = saved.shuffledIds.map(function (id) { return qMap[id]; });
      if (restored.some(function (q) { return !q; })) return null;
      return {
        shuffled: restored,
        current: typeof saved.current === "number" ? saved.current : 0,
        score: typeof saved.score === "number" ? saved.score : 0,
        results: Array.isArray(saved.results) ? saved.results : [],
        timerSeconds: typeof saved.timerSeconds === "number" ? saved.timerSeconds : TIMER_DURATION
      };
    } catch (e) { return null; }
  }

  function clearProgress() {
    try { localStorage.removeItem(saveKey()); } catch (e) { /* ignore */ }
  }

  // Clears ALL in-progress saves for the active set (standalone + every combined variant).
  // Called on fresh start so stale progress from a previous mode never leaks through.
  function clearAllProgressForSet() {
    if (!activeSet) return;
    try {
      localStorage.removeItem("mb820_quiz_progress_" + activeSet.key);
      TEST_CASES.forEach(function (tc) {
        localStorage.removeItem("mb820_combined_" + activeSet.key + "_" + tc.key);
      });
    } catch (e) { /* ignore */ }
  }

  // Clears ALL progress across every quiz and case study (used by the full reset button).
  function clearAllProgress() {
    try {
      QUESTION_SETS.forEach(function (set) {
        localStorage.removeItem("mb820_quiz_progress_" + set.key);
        localStorage.removeItem("mb820_completed_quiz_" + set.key);
        TEST_CASES.forEach(function (tc) {
          localStorage.removeItem("mb820_combined_" + set.key + "_" + tc.key);
        });
      });
      // Clear random quiz progress
      localStorage.removeItem("mb820_quiz_progress_random");
      TEST_CASES.forEach(function (tc) {
        localStorage.removeItem("mb820_case_" + tc.key);
        localStorage.removeItem("mb820_completed_case_" + tc.key);
      });
      // Clear attempt history
      localStorage.removeItem(HISTORY_KEY);
      // Clear Quick Practice run state
      localStorage.removeItem(QP_SEEN_KEY);
      qp.seenInRun = new Set();
    } catch (e) { /* ignore */ }
  }

  // ── Export / Import progression ─────────────────────────────────────────────
  function exportProgress() {
    try {
      const data = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("mb820_") && key !== AUTH_KEY) {
          data[key] = localStorage.getItem(key);
        }
      }
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement("a");
      a.href     = url;
      a.download = "mb820-progress-" + new Date().toISOString().slice(0, 10) + ".json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (e) {
      alert("Export failed: " + e.message);
    }
  }

  function importProgress(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const data = JSON.parse(e.target.result);
        if (typeof data !== "object" || Array.isArray(data)) {
          throw new Error("Invalid file format — expected a JSON object.");
        }
        let count = 0;
        Object.keys(data).forEach(function (key) {
          if (key.startsWith("mb820_") && key !== AUTH_KEY) {
            localStorage.setItem(key, data[key]);
            count++;
          }
        });
        showSetSelection();
        alert("\u2705 Progress imported successfully (" + count + " items restored).");
      } catch (err) {
        alert("Import failed: " + err.message);
      }
    };
    reader.readAsText(file);
  }

  // ── Completed-state persistence ────────────────────────────────────────────
  function completedQuizKey(setKey) { return "mb820_completed_quiz_" + setKey; }
  function completedCaseKey(caseKey) { return "mb820_completed_case_" + caseKey; }

  function saveCompletedState() {
    if (reviewMode) return; // never overwrite when re-viewing
    try {
      if (caseStudyMode === "combined") {
        // Persist quiz portion
        const quizTotal = savedQuizState.shuffledIds.length;
        const quizPct   = quizTotal ? Math.round((savedQuizState.score / quizTotal) * 100) : 0;
        localStorage.setItem(completedQuizKey(activeSet.key), JSON.stringify({
          setKey: activeSet.key, pct: quizPct,
          score: savedQuizState.score, shuffledIds: savedQuizState.shuffledIds,
          results: savedQuizState.results, timerSeconds: savedQuizState.timerSeconds
        }));
        // Persist case portion
        const caseTotal = shuffled.length;
        const casePct   = caseTotal ? Math.round((score / caseTotal) * 100) : 0;
        localStorage.setItem(completedCaseKey(caseStudy.key), JSON.stringify({
          caseKey: caseStudy.key, pct: casePct, score: score,
          shuffledIds: shuffled.map(function (q) { return q.id; }),
          results: results, timerSeconds: timerSeconds
        }));
        // Record combined attempt in history
        const combinedPct = Math.round(0.70 * quizPct + 0.30 * casePct);
        saveToHistory({
          type: "combined", date: new Date().toISOString(),
          quizLabel: activeSet.label, quizKey: activeSet.key, quizPct: quizPct,
          caseLabel: caseStudy.label, caseKey: caseStudy.key, casePct: casePct,
          combinedPct: combinedPct
        });
      } else if (caseStudyMode === "standalone") {
        const total = shuffled.length;
        const pct   = total ? Math.round((score / total) * 100) : 0;
        localStorage.setItem(completedCaseKey(caseStudy.key), JSON.stringify({
          caseKey: caseStudy.key, pct: pct, score: score,
          shuffledIds: shuffled.map(function (q) { return q.id; }),
          results: results, timerSeconds: timerSeconds
        }));
        // Record standalone case attempt in history
        saveToHistory({
          type: "case", date: new Date().toISOString(),
          caseLabel: caseStudy.label, caseKey: caseStudy.key, casePct: pct
        });
      } else if (activeSet && activeSet.key !== "random") {
        // Random-practice quiz results are intentionally not persisted as
        // "completed" state — the quiz serves only for ad-hoc practice and
        // must not affect the preparation progress bar.
        const total = shuffled.length;
        const pct   = total ? Math.round((score / total) * 100) : 0;
        localStorage.setItem(completedQuizKey(activeSet.key), JSON.stringify({
          setKey: activeSet.key, pct: pct, score: score,
          shuffledIds: shuffled.map(function (q) { return q.id; }),
          results: results, timerSeconds: timerSeconds
        }));
        // Record standalone quiz attempt in history
        saveToHistory({
          type: "quiz", date: new Date().toISOString(),
          quizLabel: activeSet.label, quizKey: activeSet.key, quizPct: pct
        });
      }
    } catch (e) { /* storage unavailable */ }
  }

  function loadCompletedQuiz(set) {
    try {
      const raw = localStorage.getItem(completedQuizKey(set.key));
      if (!raw) return null;
      const saved = JSON.parse(raw);
      if (!saved || typeof saved.pct !== "number") return null;
      return saved;
    } catch (e) { return null; }
  }

  function loadCompletedCase(tc) {
    try {
      const raw = localStorage.getItem(completedCaseKey(tc.key));
      if (!raw) return null;
      const saved = JSON.parse(raw);
      if (!saved || typeof saved.pct !== "number") return null;
      return saved;
    } catch (e) { return null; }
  }

  // ── Attempt history ────────────────────────────────────────────────────────
  const HISTORY_KEY = "mb820_history";
  const MAX_HISTORY = 50;

  function saveToHistory(entry) {
    try {
      const raw = localStorage.getItem(HISTORY_KEY);
      let history = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(history)) history = [];
      history.unshift(entry);
      if (history.length > MAX_HISTORY) history = history.slice(0, MAX_HISTORY);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    } catch (e) { /* ignore */ }
  }

  function loadHistory() {
    try {
      const raw = localStorage.getItem(HISTORY_KEY);
      if (!raw) return [];
      const h = JSON.parse(raw);
      return Array.isArray(h) ? h : [];
    } catch (e) { return []; }
  }

  function clearHistory() {
    try { localStorage.removeItem(HISTORY_KEY); } catch (e) { /* ignore */ }
  }

  function buildHistorySection() {
    const history = loadHistory();
    if (history.length === 0) return "";

    let html = '<div class="section-divider"></div>' +
      '<h2 class="set-selection-title">\uD83D\uDCCB Previous Attempts</h2>' +
      '<div class="history-list">';

    history.forEach(function (entry) {
      const date = new Date(entry.date);
      const dateStr = isNaN(date.getTime())
        ? ""
        : date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }) +
          " \u2014 " +
          date.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });

      let badgeCls, info;
      if (entry.type === "combined") {
        badgeCls = entry.combinedPct >= PASS_PCT ? "history-pass" : (entry.combinedPct >= MARGINAL_PCT ? "history-marginal" : "history-fail");
        info =
          '<span class="history-label">\uD83D\uDCDA ' + entry.quizLabel + ' + \uD83D\uDCCB ' + entry.caseLabel + '</span>' +
          '<div class="history-scores">' +
            '<span class="history-score-item">Quiz: <strong>' + entry.quizPct + '%</strong></span>' +
            '<span class="history-score-sep">&middot;</span>' +
            '<span class="history-score-item">Case: <strong>' + entry.casePct + '%</strong></span>' +
            '<span class="history-score-sep">&middot;</span>' +
            '<span class="history-score-item history-combined-score">Combined: <strong>' + entry.combinedPct + '%</strong></span>' +
          '</div>';
      } else if (entry.type === "quiz") {
        badgeCls = entry.quizPct >= PASS_PCT ? "history-pass" : (entry.quizPct >= MARGINAL_PCT ? "history-marginal" : "history-fail");
        info =
          '<span class="history-label">\uD83D\uDCDA ' + entry.quizLabel + '</span>' +
          '<span class="history-score-item">Score: <strong>' + entry.quizPct + '%</strong></span>';
      } else {
        badgeCls = entry.casePct >= PASS_PCT ? "history-pass" : (entry.casePct >= MARGINAL_PCT ? "history-marginal" : "history-fail");
        info =
          '<span class="history-label">\uD83D\uDCCB ' + entry.caseLabel + '</span>' +
          '<span class="history-score-item">Score: <strong>' + entry.casePct + '%</strong></span>';
      }

      html +=
        '<div class="history-entry ' + badgeCls + '">' +
          '<div class="history-entry-date">' + dateStr + '</div>' +
          '<div class="history-entry-info">' + info + '</div>' +
        '</div>';
    });

    html += '</div>' +
      '<div class="history-clear-row">' +
        '<button class="history-clear-btn" id="history-clear-btn">\uD83D\uDDD1\uFE0F Clear History</button>' +
      '</div>';

    return html;
  }

  // ── Confetti celebration ──────────────────────────────────────────────────
  function launchConfetti() {
    var container = document.createElement("div");
    container.style.cssText = "position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:9999;";
    document.body.appendChild(container);
    var colors = ["#38bdf8","#22c55e","#f59e0b","#a855f7","#ef4444","#06b6d4","#84cc16","#f97316"];
    for (var i = 0; i < 90; i++) {
      var el = document.createElement("div");
      var color    = colors[Math.floor(Math.random() * colors.length)];
      var size     = 6 + Math.random() * 10;
      var startX   = Math.random() * 100;
      var delay    = Math.random() * 2;
      var duration = 3 + Math.random() * 4;
      var isCircle = Math.random() > 0.5;
      el.style.cssText = [
        "position:absolute", "width:" + size + "px", "height:" + size + "px",
        "background:" + color, "border-radius:" + (isCircle ? "50%" : "2px"),
        "left:" + startX + "%", "top:-20px",
        "animation:confettiFall " + duration + "s " + delay + "s ease-in forwards"
      ].join(";");
      container.appendChild(el);
    }
    setTimeout(function () { if (container.parentNode) container.parentNode.removeChild(container); }, 8000);
  }

  // ── Quick Practice ────────────────────────────────────────────────────────
  function buildQuickPracticePool() {
    var failedIds = {}, seenIds = {};
    QUESTION_SETS.forEach(function (set) {
      var c = loadCompletedQuiz(set);
      if (c && Array.isArray(c.results)) {
        c.results.forEach(function (r) {
          if (r.partialScore < 1) failedIds[r.questionId] = true;
          else seenIds[r.questionId] = true;
        });
      }
    });
    TEST_CASES.forEach(function (tc) {
      var c = loadCompletedCase(tc);
      if (c && Array.isArray(c.results)) {
        c.results.forEach(function (r) {
          if (r.partialScore < 1) failedIds[r.questionId] = true;
          else seenIds[r.questionId] = true;
        });
      }
    });
    var failed = [], unseen = [], others = [];
    ALL_QUESTIONS.forEach(function (q) {
      if (qp.seenInRun.has(q.id))   { /* skip — already answered this run */ }
      else if (failedIds[q.id])      failed.push(q);
      else if (!seenIds[q.id])       unseen.push(q);
      else                           others.push(q);
    });
    return shuffle(failed).concat(shuffle(unseen)).concat(shuffle(others));
  }

  function loadQpSeen() {
    try {
      var raw = localStorage.getItem(QP_SEEN_KEY);
      if (!raw) return new Set();
      var arr = JSON.parse(raw);
      return Array.isArray(arr) ? new Set(arr) : new Set();
    } catch (e) { return new Set(); }
  }

  function saveQpSeen() {
    try { localStorage.setItem(QP_SEEN_KEY, JSON.stringify(Array.from(qp.seenInRun))); } catch (e) { /**/ }
  }

  function resetQpRun() {
    qp.seenInRun = new Set();
    try { localStorage.removeItem(QP_SEEN_KEY); } catch (e) { /**/ }
  }

  function qpEsc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function renderQuickPractice() {
    var container = document.getElementById("qp-container");
    if (!container) return;
    // Pool exhausted — user answered every remaining question correctly: reset run
    if (!qp.pool.length || qp.poolIdx >= qp.pool.length) {
      resetQpRun();
      qp.pool    = buildQuickPracticePool();
      qp.poolIdx = 0;
    }

    var q = qp.pool[qp.poolIdx];
    var orderedChoices = shuffle(q.choices.map(function (t, i) { return { text: t, idx: i }; }));

    var choicesHtml = "";
    orderedChoices.forEach(function (ch, di) {
      choicesHtml +=
        '<div class="qp-choice-item" data-idx="' + ch.idx + '">' +
          '<input type="' + (q.type === "multiple" ? "checkbox" : "radio") +
            '" name="qp-choice" id="qp-c' + di + '" value="' + ch.idx + '">' +
          '<label for="qp-c' + di + '">' + qpEsc(ch.text) + '</label>' +
        '</div>';
    });

    container.innerHTML =
      '<div class="qp-card">' +
        '<div class="qp-meta-row">' +
          '<span class="qp-progress">\u26A1 ' + (qp.poolIdx + 1) + ' / ' + qp.pool.length + '</span>' +
          '<span class="qp-streak-bar">' +
            '\uD83D\uDD25 <span class="qp-streak-num">' + qp.streak + '</span> in a row' +
            (qp.bestStreak > 0 ? ' &nbsp;&bull;&nbsp; Best: <span class="qp-best-num">' + qp.bestStreak + '</span>' : '') +
          '</span>' +
        '</div>' +
        '<div class="question-type-badge ' + q.type + '" style="margin-bottom:0.75rem">' +
          (q.type === "multiple" ? 'Multiple Choice \u2014 select all that apply' : 'Single Choice') +
        '</div>' +
        (q.context ? '<div class="question-context">' + q.context + '</div>' : '') +
        '<div class="question-text qp-question-text">' + qpEsc(q.text) + '</div>' +
        '<div class="qp-choices">' + choicesHtml + '</div>' +
        '<div class="qp-btn-row">' +
          '<button class="qp-submit-btn" id="qp-submit-btn"' + (q.type === "single" ? " disabled" : "") + '>Submit Answer</button>' +
          '<button class="qp-skip-btn" id="qp-skip-btn">Skip \u23ED</button>' +
        '</div>' +
      '</div>';

    // Choice interaction
    container.querySelectorAll(".qp-choice-item").forEach(function (item) {
      var inp = item.querySelector("input");
      item.addEventListener("click", function (e) {
        if (item.classList.contains("qp-correct") || item.classList.contains("qp-incorrect")) return;
        if (q.type === "single") {
          if (e.target === inp || e.target.tagName === "LABEL") return;
          container.querySelectorAll(".qp-choice-item").forEach(function (el) {
            el.classList.remove("qp-selected"); el.querySelector("input").checked = false;
          });
          inp.checked = true; item.classList.add("qp-selected");
          var sb = document.getElementById("qp-submit-btn"); if (sb) sb.disabled = false;
        } else {
          if (e.target === inp || e.target.tagName === "LABEL") return;
          inp.checked = !inp.checked; item.classList.toggle("qp-selected", inp.checked);
        }
      });
      inp.addEventListener("change", function () {
        if (q.type === "single") {
          container.querySelectorAll(".qp-choice-item").forEach(function (el) { el.classList.remove("qp-selected"); });
          item.classList.add("qp-selected");
          var sb = document.getElementById("qp-submit-btn"); if (sb) sb.disabled = false;
        } else {
          item.classList.toggle("qp-selected", inp.checked);
        }
      });
    });

    var submitBtn = document.getElementById("qp-submit-btn");
    if (submitBtn) submitBtn.addEventListener("click", function () { onQpSubmit(container, q); });
    var skipBtn = document.getElementById("qp-skip-btn");
    if (skipBtn) skipBtn.addEventListener("click", function () { qp.poolIdx++; renderQuickPractice(); });
  }

  function onQpSubmit(container, q) {
    var selected;
    if (q.type === "single") {
      var chk = container.querySelector("input[type=radio]:checked");
      if (!chk) return;
      selected = [parseInt(chk.value, 10)];
    } else {
      selected = Array.from(container.querySelectorAll("input[type=checkbox]:checked"))
        .map(function (i) { return parseInt(i.value, 10); });
      if (!selected.length) return;
    }

    var sortedSel = selected.slice().sort(function (a, b) { return a - b; });
    var sortedCor = q.correct.slice().sort(function (a, b) { return a - b; });
    var isCorrect = arraysEqual(sortedSel, sortedCor);

    container.querySelectorAll(".qp-choice-item").forEach(function (item) {
      var idx = parseInt(item.dataset.idx, 10);
      item.querySelector("input").disabled = true;
      if (q.correct.includes(idx))  item.classList.add("qp-correct");
      else if (selected.includes(idx)) item.classList.add("qp-incorrect");
    });

    if (isCorrect) {
      qp.streak++;
      if (qp.streak > qp.bestStreak) qp.bestStreak = qp.streak;
      try { localStorage.setItem(QP_STREAK_KEY, qp.streak); localStorage.setItem(QP_BEST_KEY, qp.bestStreak); } catch (e) { /**/ }
      // Mark this question as answered in the current run so it won't reappear on reload
      qp.seenInRun.add(q.id);
      saveQpSeen();
    } else {
      qp.streak = 0;
      try { localStorage.setItem(QP_STREAK_KEY, 0); } catch (e) { /**/ }
      // Wrong answer — reset the run so all questions are available again
      resetQpRun();
    }

    var expDiv = document.createElement("div");
    expDiv.className = "qp-explanation " + (isCorrect ? "qp-correct-exp" : "qp-incorrect-exp");
    expDiv.innerHTML = "<strong>" + (isCorrect ? "\u2713 Correct!" : "\u2717 Incorrect") + "</strong><br>" + (q.explanation || "");
    var choicesDiv = container.querySelector(".qp-choices");
    if (choicesDiv) choicesDiv.after(expDiv);

    var btnRow = container.querySelector(".qp-btn-row");
    if (btnRow) {
      btnRow.innerHTML = '<button class="qp-next-btn" id="qp-next-btn">Next Question \u2192</button>';
      document.getElementById("qp-next-btn").addEventListener("click", function () {
        if (!isCorrect) {
          // Run was reset — rebuild pool from all questions and start fresh
          qp.pool    = buildQuickPracticePool();
          qp.poolIdx = 0;
        } else {
          qp.poolIdx++;
        }
        renderQuickPractice();
      });
    }

    // Update streak display immediately
    var streakNum = container.querySelector(".qp-streak-num");
    if (streakNum) streakNum.textContent = qp.streak;
    var bestNum = container.querySelector(".qp-best-num");
    if (bestNum) bestNum.textContent = qp.bestStreak;

    // Milestone celebration
    var milestone = UT_MESSAGES.find(function (m) { return m.streak === qp.streak; });
    if (milestone) {
      document.getElementById("streak-icon").textContent  = milestone.emoji;
      var msgEl = document.getElementById("streak-msg");
      msgEl.textContent = milestone.msg;
      msgEl.style.color = milestone.color;
      document.getElementById("streak-count").textContent = qp.streak + " in a row!";
      document.getElementById("streak-overlay").style.display = "flex";
    }
  }

  function buildQuickPracticeSection() {
    try {
      var s = parseInt(localStorage.getItem(QP_STREAK_KEY), 10);
      var b = parseInt(localStorage.getItem(QP_BEST_KEY),   10);
      qp.streak     = isNaN(s) ? 0 : s;
      qp.bestStreak = isNaN(b) ? 0 : b;
    } catch (e) { qp.streak = 0; qp.bestStreak = 0; }
    qp.seenInRun = loadQpSeen();
    qp.pool    = buildQuickPracticePool();
    qp.poolIdx = 0;
    return '<div class="section-divider"></div>' +
      '<h2 class="set-selection-title">\u26A1 Quick Practice</h2>' +
      '<p class="set-selection-sub">One question at a time \u2014 no timer, instant feedback. Failed questions appear first. Build your streak!</p>' +
      '<div id="qp-container"></div>';
  }

  function showPeekOverlay() {
    var answeredCount = results.length;
    var currentPct    = answeredCount > 0 ? Math.round((score / answeredCount) * 100) : 0;
    var remaining     = shuffled.length - answeredCount;
    document.getElementById("peek-pct").textContent    = currentPct + "%";
    document.getElementById("peek-detail").textContent =
      answeredCount + " of " + shuffled.length + " answered" +
      (remaining > 0 ? " (" + remaining + " remaining)" : "");
    var emoji, title, taunt;
    if (answeredCount === 0) {
      emoji = "\uD83E\uDD14"; title = "Nothing to see here!";
      taunt = "You haven\u2019t answered anything yet\u2026 Why peek? \uD83D\uDE02";
    } else if (currentPct >= PASS_PCT) {
      emoji = "\uD83D\uDE08"; title = "Afraid to continue?";
      taunt = "Sitting at " + currentPct + "% \u2014 not bad. But can you keep it up? The hardest questions may still be ahead\u2026";
    } else if (currentPct >= MARGINAL_PCT) {
      emoji = "\uD83D\uDE0F"; title = "Afraid to continue?";
      taunt = currentPct + "% \u2014 you\u2019re close but not there yet. Maybe you should have studied harder? \uD83D\uDE09";
    } else {
      emoji = "\uD83D\uDE30"; title = "Struggling a bit?";
      taunt = "Only " + currentPct + "%\u2026 Might want to rethink that study plan. \uD83D\uDE05 You can always give up now.";
    }
    document.getElementById("peek-emoji").textContent = emoji;
    document.getElementById("peek-title").textContent = title;
    document.getElementById("peek-taunt").textContent = taunt;
    document.getElementById("peek-overlay").style.display = "flex";
  }


  function buildProgressBar() {
    const availableCases = TEST_CASES.filter(function (tc) { return tc.questions.length > 0; });
    const totalItems = QUESTION_SETS.length + availableCases.length;
    let completedItems = 0;

    QUESTION_SETS.forEach(function (set) {
      const c = loadCompletedQuiz(set);
      if (c && c.pct >= PASS_PCT) completedItems++;
    });
    availableCases.forEach(function (tc) {
      const c = loadCompletedCase(tc);
      if (c && c.pct >= PASS_PCT) completedItems++;
    });

    const pct = totalItems ? Math.round((completedItems / totalItems) * 100) : 0;
    const fillCls = pct >= 100 ? "prep-fill-full" : pct >= PASS_PCT ? "prep-fill-good" : "";

    return '<div class="prep-progress-bar-container">' +
      '<div class="prep-progress-header">' +
        '<span class="prep-progress-title">\uD83C\uDFAF MB-820 Preparation Progress</span>' +
        '<span class="prep-progress-pct">' + completedItems + '\u202F/\u202F' + totalItems + ' &nbsp;(' + pct + '%)</span>' +
      '</div>' +
      '<div class="prep-progress-track">' +
        '<div class="prep-progress-fill ' + fillCls + '" style="width:' + pct + '%"></div>' +
      '</div>' +
      '<div class="prep-progress-footer">' +
        '<p class="prep-progress-sub">Complete every quiz and case study with \u2265' + PASS_PCT + '% to reach 100% preparation.</p>' +
        (studyTimeSeconds > 0 ? '<span class="prep-study-time">\u23F1 ' + formatTime(studyTimeSeconds) + ' studied</span>' : '') +
      '</div>' +
    '</div>';
  }

  function buildInProgressBanner(count) {
    const label = count === 1 ? "1 in-progress session" : count + " in-progress sessions";
    return '<div class="in-progress-banner">' +
      '<span class="in-progress-icon">\u23F8</span>' +
      '<span class="in-progress-text">You have <strong>' + label + '</strong> \u2014 continue where you left off below.</span>' +
    '</div>';
  }

  // ── Review completed quiz / case ───────────────────────────────────────────
  function reviewCompletedQuiz(setKey) {
    const set = QUESTION_SETS.find(function (s) { return s.key === setKey; });
    if (!set) return;
    const saved = loadCompletedQuiz(set);
    if (!saved) return;
    reviewMode     = true;
    activeSet      = set;
    caseStudyMode  = null;
    caseStudy      = null;
    savedQuizState = null;
    casePhase      = "quiz";
    const qMap = {};
    set.data.forEach(function (q) { qMap[q.id] = q; });
    shuffled     = saved.shuffledIds.map(function (id) { return qMap[id]; }).filter(Boolean);
    score        = saved.score;
    results      = saved.results;
    timerSeconds = typeof saved.timerSeconds === "number" ? saved.timerSeconds : 0;
    showHomeBtn();
    setSelectionEl.style.display = "none";
    summaryEl.style.display      = "none";
    document.getElementById("quiz-container").classList.remove("finished");
    showSummary();
  }

  function reviewCompletedCase(caseKey) {
    const tc = TEST_CASES.find(function (t) { return t.key === caseKey; });
    if (!tc) return;
    const saved = loadCompletedCase(tc);
    if (!saved) return;
    reviewMode     = true;
    activeSet      = null;
    caseStudy      = tc;
    caseStudyMode  = "standalone";
    savedQuizState = null;
    casePhase      = "quiz";
    const qMap = {};
    tc.questions.forEach(function (q) { qMap[q.id] = q; });
    shuffled     = saved.shuffledIds.map(function (id) { return qMap[id]; }).filter(Boolean);
    score        = saved.score;
    results      = saved.results;
    timerSeconds = typeof saved.timerSeconds === "number" ? saved.timerSeconds : 0;
    showHomeBtn();
    setSelectionEl.style.display = "none";
    summaryEl.style.display      = "none";
    document.getElementById("quiz-container").classList.remove("finished");
    showSummary();
  }

  // ── Helpers ──────────────────────────────────────────────────────────────
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function arraysEqual(a, b) {
    return a.length === b.length && a.every((v, i) => v === b[i]);
  }

  // ── Set selection screen ─────────────────────────────────────────────────
  function showSetSelection() {
    reviewMode   = false;
    practiceMode = true;
    quizIsActive = false;
    clearIdleTimer();
    hidePauseOverlay();
    hideHomeBtn();
    hideTimer();
    setSelectionEl.style.display = "block";
    questionEl.innerHTML         = "";
    choicesEl.innerHTML          = "";
    nextBtn.style.display        = "none";
    summaryEl.style.display      = "none";
    document.getElementById("quiz-container").classList.remove("finished");

    const difficultyMeta = {
      beginner:     { icon: "\uD83D\uDFE2", label: "Beginner",     cls: "diff-beginner" },
      intermediate: { icon: "\uD83D\uDFE1", label: "Intermediate", cls: "diff-intermediate" },
      proficient:   { icon: "\uD83D\uDD34", label: "Proficient",   cls: "diff-proficient" },
      official:     { icon: "\uD83D\uDCCB", label: "Official",     cls: "diff-official" }
    };

    // ── Count all in-progress sessions for the banner ─────────────────────
    let inProgressCount = 0;
    QUESTION_SETS.forEach(function (set) {
      const s = loadProgress(set);
      if (s && Array.isArray(s.results) && s.results.length > 0 && s.results.length < s.shuffled.length) {
        inProgressCount++;
      } else {
        for (let i = 0; i < TEST_CASES.length; i++) {
          const tc = TEST_CASES[i];
          if (tc.questions.length === 0) continue;
          const cp = loadCombinedProgress(set, tc);
          if (cp && ((cp.phase === "quiz" && Array.isArray(cp.results) && cp.results.length > 0) || cp.phase === "testcase")) {
            inProgressCount++;
            break;
          }
        }
      }
    });
    const rs = loadProgress(RANDOM_SET);
    if (rs && Array.isArray(rs.results) && rs.results.length > 0 && rs.results.length < rs.shuffled.length) inProgressCount++;
    TEST_CASES.forEach(function (tc) {
      if (tc.questions.length === 0) return;
      const sc = loadCaseProgress(tc);
      if (sc && Array.isArray(sc.results) && sc.results.length > 0 && sc.results.length < sc.shuffled.length) inProgressCount++;
    });

    // ── Progress bar ─────────────────────────────────────────────────────
    let html = '<div class="set-selection-wrapper">' + buildProgressBar();
    if (inProgressCount > 0) html += buildInProgressBanner(inProgressCount);

    // ── Quick Practice (above Practice Quizzes) ──────────────────────────
    html += buildQuickPracticeSection();

    // ── Section 1: Practice Quizzes ──────────────────────────────────────
    html += '<div class="section-divider"></div>' +
      '<h2 class="set-selection-title">Practice Quizzes</h2>' +
      '<p class="set-selection-sub">Each quiz has a 120-minute countdown timer. Optionally attach a case study for a combined score.</p>' +
      '<div class="set-cards">';

    QUESTION_SETS.forEach(function (set) {
      const saved      = loadProgress(set);
      const hasSaved   = saved && Array.isArray(saved.results) && saved.results.length > 0 && saved.results.length < saved.shuffled.length;
      const completed  = loadCompletedQuiz(set);
      const meta       = difficultyMeta[set.difficulty] || {};
      const savedTimer = hasSaved ? saved.timerSeconds : null;

      // Check for any in-progress combined run (quiz + case study) for this set.
      // Only shown when there is no standalone progress (they can't coexist after the fix).
      let combinedSaved = null;
      let combinedTc    = null;
      if (!hasSaved) {
        for (let i = 0; i < TEST_CASES.length; i++) {
          const tc = TEST_CASES[i];
          if (tc.questions.length === 0) continue;
          const cp = loadCombinedProgress(set, tc);
          if (cp && ((cp.phase === "quiz" && Array.isArray(cp.results) && cp.results.length > 0) ||
                      cp.phase === "testcase")) {
            combinedSaved = cp;
            combinedTc    = tc;
            break;
          }
        }
      }
      const hasCombinedSaved = !!combinedSaved;

      // Build resume-info text for a combined run
      let combinedResumeInfo = "";
      if (hasCombinedSaved) {
        if (combinedSaved.phase === "testcase") {
          const tcDone  = combinedSaved.testcase && Array.isArray(combinedSaved.testcase.results) ? combinedSaved.testcase.results.length : 0;
          const tcTotal = combinedSaved.testcase && Array.isArray(combinedSaved.testcase.shuffledIds) ? combinedSaved.testcase.shuffledIds.length : 0;
          const tcTimer = combinedSaved.testcase && typeof combinedSaved.testcase.timerSeconds === "number" ? combinedSaved.testcase.timerSeconds : null;
          combinedResumeInfo = '<p class="set-card-resume">\u23F8 Saved: Case Study phase (' + combinedTc.label + '), question ' +
            (tcDone + 1) + ' of ' + tcTotal +
            (tcTimer !== null ? ' \u2014 \u23F1 ' + formatTime(tcTimer) + ' left' : '') + '</p>';
        } else {
          const cTimer = typeof combinedSaved.timerSeconds === "number" ? combinedSaved.timerSeconds : null;
          combinedResumeInfo = '<p class="set-card-resume">\u23F8 Saved: question ' + (combinedSaved.results.length + 1) +
            ' of ' + combinedSaved.shuffledIds.length + ' (+ ' + combinedTc.label + ')' +
            (cTimer !== null ? ' \u2014 \u23F1 ' + formatTime(cTimer) + ' left' : '') + '</p>';
        }
      }

      // Build the case study selector options
      let caseOptions = '<option value="">None</option>';
      TEST_CASES.forEach(function (tc) {
        const disabled = tc.questions.length === 0 ? " disabled" : "";
        const label    = tc.questions.length === 0 ? tc.label + " (coming soon)" : tc.label;
        caseOptions += '<option value="' + tc.key + '"' + disabled + '>' + label + '</option>';
      });

      const completedBadge = completed
        ? '<div class="set-card-completed ' + (completed.pct >= PASS_PCT ? "completed-pass" : "completed-fail") + '">' +
            (completed.pct >= PASS_PCT ? "\u2705" : "\u26A0\uFE0F") +
            ' Last attempt: <strong>' + completed.pct + '%</strong>' +
          '</div>'
        : '';

      html +=
        '<div class="set-card" data-key="' + set.key + '">' +
          '<div class="set-card-header">' +
            '<span class="set-card-title">' + set.label + '</span>' +
            '<span class="set-card-count">' + set.data.length + ' questions</span>' +
          '</div>' +
          '<span class="difficulty-badge ' + meta.cls + '">' + meta.icon + ' ' + meta.label + '</span>' +
          '<p class="set-card-desc">' + set.description + '</p>' +
          completedBadge +
          (hasSaved
            ? '<p class="set-card-resume">\u23F8 Saved: question ' + (saved.results.length + 1) + ' of ' + saved.shuffled.length +
              (savedTimer !== null ? ' \u2014 \u23F1 ' + formatTime(savedTimer) + ' left' : '') + '</p>'
            : combinedResumeInfo) +
          '<div class="case-selector">' +
            '<label class="case-selector-label">\uD83D\uDCCB Case Study (optional):</label>' +
            '<select class="case-select" data-quiz-key="' + set.key + '">' +
              caseOptions +
            '</select>' +
          '</div>' +
          '<div class="set-card-actions">' +
            (completed
              ? '<button class="set-btn review-btn" data-key="' + set.key + '">\uD83D\uDD0D Review Results</button>'
              : '') +
            (hasSaved
              ? '<button class="set-btn resume-set-btn" data-key="' + set.key + '">Resume</button>'
              : (hasCombinedSaved
                  ? '<button class="set-btn resume-set-btn" data-key="' + set.key + '" data-combined-case-key="' + combinedTc.key + '">Resume</button>'
                  : '')) +
            '<button class="set-btn start-set-btn" data-key="' + set.key + '"' +
              (hasSaved || hasCombinedSaved ? ' data-has-saved="true"' : '') + '>' +
              (hasSaved || hasCombinedSaved ? 'New Quiz' : 'Start Quiz') +
            '</button>' +
          '</div>' +
        '</div>';
    });

    html += '</div>';

    // ── Section 2: Random Practice Quiz ─────────────────────────────────
    const randomSaved = loadProgress(RANDOM_SET);
    const randomHasSaved = randomSaved && Array.isArray(randomSaved.results) &&
      randomSaved.results.length > 0 && randomSaved.results.length < randomSaved.shuffled.length;

    html += '<div class="section-divider"></div>' +
      '<h2 class="set-selection-title">Random Practice</h2>' +
      '<p class="set-selection-sub">Test yourself with a random mix of questions — does not affect preparation progress.</p>' +
      '<div class="set-cards">' +
        '<div class="set-card" id="random-quiz-card">' +
          '<div class="set-card-header">' +
            '<span class="set-card-title">' + RANDOM_SET.label + '</span>' +
            '<span class="set-card-count">' + RANDOM_QUIZ_COUNT + ' questions</span>' +
          '</div>' +
          '<span class="difficulty-badge diff-random">\uD83C\uDFB2 Random</span>' +
          '<p class="set-card-desc">' + RANDOM_SET.description + '</p>' +
          (randomHasSaved
            ? '<p class="set-card-resume">\u23F8 Saved: question ' + (randomSaved.results.length + 1) + ' of ' + randomSaved.shuffled.length +
              (randomSaved.timerSeconds !== null ? ' \u2014 \u23F1 ' + formatTime(randomSaved.timerSeconds) + ' left' : '') + '</p>'
            : '') +
          '<div class="set-card-actions">' +
            (randomHasSaved
              ? '<button class="set-btn resume-set-btn" id="random-resume-btn">Resume</button>'
              : '') +
            '<button class="set-btn start-set-btn" id="random-start-btn"' +
              (randomHasSaved ? ' data-has-saved="true"' : '') + '>' +
              (randomHasSaved ? 'New Random Quiz' : 'Start Random Quiz') +
            '</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    // ── Section 3: Case Studies ──────────────────────────────────────────
    html += '<div class="section-divider"></div>' +
      '<h2 class="set-selection-title">Case Studies</h2>' +
      '<p class="set-selection-sub">Practice standalone scenario-based questions from each case study.</p>' +
      '<div class="set-cards">';

    TEST_CASES.forEach(function (tc) {
      const available   = tc.questions.length > 0;
      const savedCase   = available ? loadCaseProgress(tc) : null;
      const hasSaved    = savedCase && Array.isArray(savedCase.results) && savedCase.results.length > 0 && savedCase.results.length < savedCase.shuffled.length;
      const completed   = available ? loadCompletedCase(tc) : null;

      const completedBadge = completed
        ? '<div class="set-card-completed ' + (completed.pct >= PASS_PCT ? "completed-pass" : "completed-fail") + '">' +
            (completed.pct >= PASS_PCT ? "\u2705" : "\u26A0\uFE0F") +
            ' Last attempt: <strong>' + completed.pct + '%</strong>' +
          '</div>'
        : '';

      html +=
        '<div class="set-card case-card' + (available ? '' : ' case-card-disabled') + '" data-case-key="' + tc.key + '">' +
          '<div class="set-card-header">' +
            '<span class="set-card-title">' + tc.label + '</span>' +
            '<span class="set-card-count">' + (available ? tc.questions.length + ' questions' : 'Coming soon') + '</span>' +
          '</div>' +
          '<span class="difficulty-badge diff-case">\uD83D\uDCCB Case Study</span>' +
          '<p class="set-card-desc">' + tc.description + '</p>' +
          completedBadge +
          (hasSaved
            ? '<p class="set-card-resume">\u23F8 Saved: question ' + (savedCase.results.length + 1) + ' of ' + savedCase.shuffled.length + '</p>'
            : '') +
          '<div class="set-card-actions">' +
            (available
              ? (completed
                  ? '<button class="set-btn review-btn case-review-btn" data-case-key="' + tc.key + '">\uD83D\uDD0D Review Results</button>'
                  : '') +
                (hasSaved
                  ? '<button class="set-btn resume-set-btn case-resume-btn" data-case-key="' + tc.key + '">Resume</button>'
                  : '') +
                '<button class="set-btn start-set-btn case-start-btn" data-case-key="' + tc.key + '"' +
                  (hasSaved ? ' data-has-saved="true"' : '') + '>' +
                  (hasSaved ? 'New Attempt' : 'Start') +
                '</button>'
              : '<span class="coming-soon-label">Available soon</span>') +
          '</div>' +
        '</div>';
    });

    html += '</div></div>';

    // ── Reset All Progress ───────────────────────────────────────────────
    html += buildHistorySection();

    html += '<div class="export-import-container">' +
      '<p class="export-import-info">\uD83D\uDCBE <strong>Transfer your progress</strong> between devices &mdash; export your progress to a file, then import it on another device.</p>' +
      '<div class="export-import-buttons">' +
        '<button class="export-btn" id="export-progress-btn">\u2B06\uFE0F Export Progress</button>' +
        '<label class="import-btn" id="import-progress-label" for="import-progress-input">\u2B07\uFE0F Import Progress' +
          '<input type="file" id="import-progress-input" accept=".json" style="display:none;">' +
        '</label>' +
      '</div>' +
    '</div>' +
    '<div class="reset-all-container">' +
      '<button class="reset-all-btn" id="reset-all-btn">\uD83D\uDDD1\uFE0F Reset All Progress</button>' +
    '</div>';

    setSelectionEl.innerHTML = html;

    // Render the Quick Practice card now that the container exists in the DOM
    renderQuickPractice();

    // Export / Import progress buttons
    const exportBtn = document.getElementById("export-progress-btn");
    if (exportBtn) {
      exportBtn.addEventListener("click", exportProgress);
    }
    const importInput = document.getElementById("import-progress-input");
    if (importInput) {
      importInput.addEventListener("change", function () {
        if (importInput.files && importInput.files[0]) {
          showConfirm(
            "Import Progress?",
            "This will overwrite any existing quiz data with the imported file. Are you sure?",
            function () {
              importProgress(importInput.files[0]);
              importInput.value = "";
            }
          );
        }
      });
    }

    // Quiz resume/start buttons
    setSelectionEl.querySelectorAll(".resume-set-btn:not(.case-resume-btn)").forEach(function (btn) {
      if (btn.id === "random-resume-btn") return; // handled separately
      btn.addEventListener("click", function () {
        const key             = btn.dataset.key;
        const combinedCaseKey = btn.dataset.combinedCaseKey;
        reviewMode     = false;
        activeSet      = QUESTION_SETS.find(function (s) { return s.key === key; });
        if (combinedCaseKey) {
          caseStudy     = TEST_CASES.find(function (tc) { return tc.key === combinedCaseKey; }) || null;
          caseStudyMode = caseStudy ? "combined" : null;
        } else {
          caseStudyMode = null;
          caseStudy     = null;
        }
        savedQuizState = null;
        casePhase      = "quiz";
        init(true);
      });
    });

    setSelectionEl.querySelectorAll(".start-set-btn:not(.case-start-btn)").forEach(function (btn) {
      if (btn.id === "random-start-btn") return; // handled separately
      btn.addEventListener("click", function () {
        const key      = btn.dataset.key;
        reviewMode     = false;
        activeSet      = QUESTION_SETS.find(function (s) { return s.key === key; });
        // Read selected test case from the sibling selector
        const card     = btn.closest(".set-card");
        const sel      = card ? card.querySelector(".case-select") : null;
        const caseKey  = sel ? sel.value : "";
        caseStudy      = caseKey ? TEST_CASES.find(function (tc) { return tc.key === caseKey; }) || null : null;
        caseStudyMode  = caseStudy ? "combined" : null;
        savedQuizState = null;
        casePhase      = "quiz";
        if (btn.dataset.hasSaved) {
          showConfirm(
            "Start New Quiz?",
            "Your current in-progress quiz will be discarded. Are you sure you want to start a new quiz?",
            function () { showModeOverlay(function () { init(false); }); }
          );
        } else {
          showModeOverlay(function () { init(false); });
        }
      });
    });

    // Case study standalone resume/start buttons
    setSelectionEl.querySelectorAll(".case-resume-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const key   = btn.dataset.caseKey;
        const tc    = TEST_CASES.find(function (t) { return t.key === key; });
        if (!tc) return;
        reviewMode     = false;
        activeSet      = null;
        caseStudy      = tc;
        caseStudyMode  = "standalone";
        savedQuizState = null;
        casePhase      = "quiz";
        initStandaloneCase(true);
      });
    });

    setSelectionEl.querySelectorAll(".case-start-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const key   = btn.dataset.caseKey;
        const tc    = TEST_CASES.find(function (t) { return t.key === key; });
        if (!tc || tc.questions.length === 0) return;
        reviewMode     = false;
        activeSet      = null;
        caseStudy      = tc;
        caseStudyMode  = "standalone";
        savedQuizState = null;
        casePhase      = "quiz";
        if (btn.dataset.hasSaved) {
          showConfirm(
            "Start New Attempt?",
            "Your current in-progress case study will be discarded. Are you sure you want to start a new attempt?",
            function () { showModeOverlay(function () { initStandaloneCase(false); }); }
          );
        } else {
          showModeOverlay(function () { initStandaloneCase(false); });
        }
      });
    });

    // Review Results buttons for quizzes
    setSelectionEl.querySelectorAll(".review-btn:not(.case-review-btn)").forEach(function (btn) {
      btn.addEventListener("click", function () {
        reviewCompletedQuiz(btn.dataset.key);
      });
    });

    // Review Results buttons for case studies
    setSelectionEl.querySelectorAll(".case-review-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        reviewCompletedCase(btn.dataset.caseKey);
      });
    });

    // Random quiz buttons
    const randomResumeBtn = document.getElementById("random-resume-btn");
    const randomStartBtn  = document.getElementById("random-start-btn");
    if (randomResumeBtn) {
      randomResumeBtn.addEventListener("click", function () { initRandomQuiz(true); });
    }
    if (randomStartBtn) {
      randomStartBtn.addEventListener("click", function () {
        if (randomStartBtn.dataset.hasSaved) {
          showConfirm(
            "Start New Random Quiz?",
            "Your current in-progress random quiz will be discarded. Are you sure you want to start a new one?",
            function () { showModeOverlay(function () { initRandomQuiz(false); }); }
          );
        } else {
          showModeOverlay(function () { initRandomQuiz(false); });
        }
      });
    }

    // Reset All Progress button
    const resetAllBtn = document.getElementById("reset-all-btn");
    if (resetAllBtn) {
      resetAllBtn.addEventListener("click", function () {
        showConfirm(
          "Reset All Progress?",
          "This will permanently delete all quiz results, completion badges, case study progress, and attempt history. This cannot be undone.",
          function () {
            clearAllProgress();
            showSetSelection();
          }
        );
      });
    }

    // History clear button
    const historyClearBtn = document.getElementById("history-clear-btn");
    if (historyClearBtn) {
      historyClearBtn.addEventListener("click", function () {
        showConfirm(
          "Clear History?",
          "This will remove all previous attempt records from the log. This cannot be undone.",
          function () {
            clearHistory();
            showSetSelection();
          }
        );
      });
    }
  }

  // ── Init (quiz) ───────────────────────────────────────────────────────────
  function init(resume) {
    reviewMode = false;
    isPaused   = false;
    hidePauseOverlay();
    showHomeBtn();
    setSelectionEl.style.display = "none";
    summaryEl.style.display      = "none";
    document.getElementById("quiz-container").classList.remove("finished");
    nextBtn.style.display        = "none";

    if (resume) {
      if (caseStudyMode === "combined") {
        // Restore an in-progress combined run (quiz-phase or testcase-phase)
        const saved = loadCombinedProgress(activeSet, caseStudy);
        if (saved) {
          if (saved.phase === "testcase" && saved.quiz && saved.testcase) {
            // Resume from the test-case phase
            savedQuizState = saved.quiz;
            casePhase      = "testcase";
            const qMap = {};
            caseStudy.questions.forEach(function (q) { qMap[q.id] = q; });
            const restoredTc = saved.testcase.shuffledIds.map(function (id) { return qMap[id]; });
            if (!restoredTc.some(function (q) { return !q; }) && restoredTc.length > 0) {
              shuffled     = restoredTc;
              current      = typeof saved.testcase.current === "number" ? saved.testcase.current : 0;
              score        = typeof saved.testcase.score === "number" ? saved.testcase.score : 0;
              results      = Array.isArray(saved.testcase.results) ? saved.testcase.results : [];
              timerSeconds = typeof saved.testcase.timerSeconds === "number" ? saved.testcase.timerSeconds : TIMER_DURATION;
              if (current < results.length) current = results.length;
              if (current < shuffled.length) {
                startTimer();
                renderQuestion();
                return;
              }
            }
          } else if (saved.phase === "quiz" && Array.isArray(saved.shuffledIds)) {
            // Resume from the quiz phase of a combined run
            const qMap = {};
            activeSet.data.forEach(function (q) { qMap[q.id] = q; });
            const restored = saved.shuffledIds.map(function (id) { return qMap[id]; });
            if (!restored.some(function (q) { return !q; }) && restored.length > 0) {
              shuffled     = restored;
              current      = typeof saved.current === "number" ? saved.current : 0;
              score        = typeof saved.score === "number" ? saved.score : 0;
              results      = Array.isArray(saved.results) ? saved.results : [];
              timerSeconds = typeof saved.timerSeconds === "number" ? saved.timerSeconds : TIMER_DURATION;
              if (current < results.length) current = results.length;
              if (current < shuffled.length) {
                startTimer();
                renderQuestion();
                return;
              }
            }
          }
        }
        // Fall through to a fresh combined start
      } else {
        const saved = loadProgress(activeSet);
        if (saved && saved.current < saved.shuffled.length) {
          shuffled     = saved.shuffled;
          current      = saved.current;
          score        = saved.score;
          results      = saved.results;
          timerSeconds = saved.timerSeconds;
          if (typeof saved.practiceMode === "boolean") practiceMode = saved.practiceMode;
          // Advance past any already-answered question (user closed after answering but before clicking Next)
          if (current < results.length) {
            current = results.length;
          }
          if (current < shuffled.length) {
            startTimer();
            renderQuestion();
            return;
          }
          // All questions already answered — fall through to a fresh start
        }
      }
    }

    // Fresh start — clear all saved state for this set before beginning
    clearAllProgressForSet();
    shuffled     = shuffle(activeSet.data);
    current      = 0;
    score        = 0;
    results      = [];
    timerSeconds = TIMER_DURATION;
    startTimer();
    renderQuestion();
  }

  // ── Init (standalone test case) ───────────────────────────────────────────
  function initStandaloneCase(resume) {
    reviewMode = false;
    isPaused   = false;
    hidePauseOverlay();
    showHomeBtn();
    setSelectionEl.style.display = "none";
    summaryEl.style.display      = "none";
    document.getElementById("quiz-container").classList.remove("finished");
    nextBtn.style.display        = "none";

    if (resume) {
      const saved = loadCaseProgress(caseStudy);
      if (saved && saved.current < saved.shuffled.length) {
        shuffled     = saved.shuffled;
        current      = saved.current;
        score        = saved.score;
        results      = saved.results;
        timerSeconds = saved.timerSeconds;
        if (current < results.length) {
          current = results.length;
        }
        if (current < shuffled.length) {
          hideTimer();
          renderQuestion();
          return;
        }
      }
    }

    // Fresh start — show scenario intro before first question
    clearProgress();
    shuffled     = caseStudy.questions.slice(); // test case questions are presented in order
    current      = 0;
    score        = 0;
    results      = [];
    timerSeconds = TIMER_DURATION;
    showCaseIntro();
  }

  // ── Init (random practice quiz) ───────────────────────────────────────────
  function initRandomQuiz(resume) {
    reviewMode     = false;
    isPaused       = false;
    hidePauseOverlay();
    activeSet      = RANDOM_SET;
    caseStudyMode  = null;
    caseStudy      = null;
    savedQuizState = null;
    casePhase      = "quiz";

    showHomeBtn();
    setSelectionEl.style.display = "none";
    summaryEl.style.display      = "none";
    document.getElementById("quiz-container").classList.remove("finished");
    nextBtn.style.display        = "none";

    if (resume) {
      // loadProgress rebuilds the question array from shuffledIds by looking up
      // each ID in set.data.  Because RANDOM_SET.data = ALL_QUESTIONS, every ID
      // that was stored for a random-quiz session can be resolved correctly.
      const saved = loadProgress(RANDOM_SET);
      if (saved && saved.current < saved.shuffled.length) {
        shuffled     = saved.shuffled;
        current      = saved.current;
        score        = saved.score;
        results      = saved.results;
        timerSeconds = saved.timerSeconds;
        if (current < results.length) current = results.length;
        if (current < shuffled.length) {
          startTimer();
          renderQuestion();
          return;
        }
      }
    }

    // Fresh start — pick RANDOM_QUIZ_COUNT questions from the full pool
    clearProgress();
    shuffled     = shuffle(ALL_QUESTIONS).slice(0, RANDOM_QUIZ_COUNT);
    current      = 0;
    score        = 0;
    results      = [];
    timerSeconds = TIMER_DURATION;
    startTimer();
    renderQuestion();
  }


  function showCaseIntro() {
    quizIsActive = false;
    clearIdleTimer();
    hideTimer();
    const scenario = caseStudy.scenario || caseStudy.description;
    questionEl.innerHTML =
      '<div class="case-intro">' +
        '<div class="case-intro-badge">\uD83D\uDCCB Case Study</div>' +
        '<h2 class="case-intro-title">' + caseStudy.label + '</h2>' +
        '<p class="case-intro-desc">' + scenario + '</p>' +
        '<div class="resume-buttons">' +
          '<button class="resume-btn" id="case-intro-start-btn">Start Case Study</button>' +
          '<button class="new-quiz-btn" id="case-intro-back-btn">Back</button>' +
        '</div>' +
      '</div>';
    choicesEl.innerHTML   = "";
    nextBtn.style.display = "none";

    document.getElementById("case-intro-start-btn").addEventListener("click", function () {
      renderQuestion();
    });
    document.getElementById("case-intro-back-btn").addEventListener("click", function () {
      showSetSelection();
    });
  }

  // ── Transition: quiz done → test case phase ───────────────────────────────
  function startTestCasePhase() {
    quizIsActive = false;
    clearIdleTimer();
    // Snapshot the completed quiz state
    savedQuizState = {
      shuffledIds: shuffled.map(function (q) { return q.id; }),
      score: score,
      results: results,
      timerSeconds: timerSeconds
    };
    casePhase = "testcase";

    // Set up test case questions (presented in order, not shuffled)
    shuffled = caseStudy.questions.slice();
    current  = 0;
    score    = 0;
    results  = [];
    saveProgress();

    // Show a brief transition screen
    hideTimer();
    questionEl.innerHTML =
      '<div class="resume-prompt">' +
        '<h2>\uD83C\uDF93 Quiz Complete!</h2>' +
        '<p>You have finished the quiz portion. Now start the <strong>' + caseStudy.label + '</strong> case study.</p>' +
        '<p>Your final combined score will be calculated as <strong>70% quiz + 30% case study</strong>.</p>' +
        '<div class="resume-buttons">' +
          '<button class="resume-btn" id="start-case-btn">Start Case Study</button>' +
          '<button class="new-quiz-btn" id="skip-case-btn">Skip &amp; See Quiz Results</button>' +
        '</div>' +
      '</div>';
    choicesEl.innerHTML   = "";
    nextBtn.style.display = "none";

    document.getElementById("start-case-btn").addEventListener("click", function () {
      startTimer();
      renderQuestion();
    });
    document.getElementById("skip-case-btn").addEventListener("click", function () {
      // Show standalone quiz summary without test case
      const quizData    = activeSet.data;
      const qMap        = {};
      quizData.forEach(function (q) { qMap[q.id] = q; });
      caseStudyMode  = null;
      caseStudy      = null;
      casePhase      = "quiz";
      shuffled       = savedQuizState.shuffledIds.map(function (id) { return qMap[id]; }).filter(Boolean);
      score          = savedQuizState.score;
      results        = savedQuizState.results;
      timerSeconds   = savedQuizState.timerSeconds;
      savedQuizState = null;
      clearProgress();
      showSummary();
    });
  }

  // ── Resume prompt ─────────────────────────────────────────────────────────
  function showResumePrompt(saved) {
    quizIsActive = false;
    clearIdleTimer();
    showHomeBtn();
    const nextQuestion = saved.results.length + 1;
    const timerInfo = typeof saved.timerSeconds === "number"
      ? ' with <strong>' + formatTime(saved.timerSeconds) + '</strong> remaining on the clock'
      : '';
    const savedPracticeMode = saved.practiceMode !== false;
    const modeLabel = savedPracticeMode
      ? '\uD83D\uDCDA Practice Mode'
      : '\uD83D\uDCDD Test Mode';
    questionEl.innerHTML =
      '<div class="resume-prompt">' +
        '<h2>Resume Quiz?</h2>' +
        '<p class="resume-meta"><strong>' + activeSet.label + '</strong> &mdash; ' + modeLabel + '</p>' +
        '<p>You were on question <strong>' + nextQuestion + ' of ' + saved.shuffled.length + '</strong>' + timerInfo + '.</p>' +
        '<div class="resume-buttons">' +
          '<button class="resume-btn" id="resume-btn">Resume</button>' +
          '<button class="new-quiz-btn" id="new-quiz-btn">New Quiz</button>' +
          '<button class="new-quiz-btn" id="change-set-btn">Change Set</button>' +
        '</div>' +
      '</div>';
    choicesEl.innerHTML   = "";
    nextBtn.style.display = "none";

    document.getElementById("resume-btn").addEventListener("click", function () {
      init(true);
    });
    document.getElementById("new-quiz-btn").addEventListener("click", function () {
      init(false);
    });
    document.getElementById("change-set-btn").addEventListener("click", function () {
      showSetSelection();
    });
  }

  // ── Render ───────────────────────────────────────────────────────────────
  function renderQuestion() {
    answered      = false;
    quizIsActive  = true;
    startIdleTimer();
    nextBtn.style.display = "none";

    const q = shuffled[current];

    // Phase banner for combined/standalone test case
    let phaseBanner = "";
    if (caseStudyMode === "combined") {
      if (casePhase === "quiz") {
        phaseBanner = '<div class="phase-banner phase-quiz">\uD83D\uDCDA Quiz Phase &mdash; ' + activeSet.label + '</div>';
      } else {
        phaseBanner = '<div class="phase-banner phase-case">\uD83D\uDCCB Case Study Phase &mdash; ' + caseStudy.label + '</div>';
      }
    } else if (caseStudyMode === "standalone") {
      phaseBanner = '<div class="phase-banner phase-case">\uD83D\uDCCB Case Study &mdash; ' + caseStudy.label + '</div>';
    }

    questionEl.innerHTML =
      phaseBanner +
      '<div class="progress">Question ' + (current + 1) + ' of ' + shuffled.length +
        (practiceMode
          ? '<span class="mode-indicator-badge mode-indicator-practice">\uD83D\uDCDA Practice</span>'
          : '<span class="mode-indicator-badge mode-indicator-test">\uD83D\uDCDD Test</span>' +
            '<button class="peek-btn" id="peek-btn" title="Peek at your current score">\uD83D\uDC41\uFE0F Peek</button>') +
      '</div>' +
      '<div class="question-type-badge ' + (q.type === "multiple" ? "multiple" : "single") + '">' +
        (q.type === "multiple" ? "Multiple Choice \u2014 select all that apply" : "Single Choice") +
      '</div>' +
      (q.context ? '<div class="question-context">' + q.context + '</div>' : '') +
      '<div class="question-text">' + q.text + '</div>';

    if (!practiceMode) {
      var peekBtnEl = document.getElementById("peek-btn");
      if (peekBtnEl) peekBtnEl.addEventListener("click", showPeekOverlay);
    }

    choicesEl.innerHTML = "";

    // Shuffle choices so answer position varies between attempts.
    // Test-case questions intentionally group choices by type (e.g. all
    // "HTTP call:" options together), so preserve their original order.
    const indexedChoices = q.choices.map(function (text, idx) { return { text: text, originalIdx: idx }; });
    const choiceOrder = caseStudyMode !== null ? indexedChoices : shuffle(indexedChoices);

    choiceOrder.forEach(function (choiceItem, displayIdx) {
      const item  = document.createElement("div");
      item.className    = "choice-item";
      item.dataset.idx  = choiceItem.originalIdx;

      const input = document.createElement("input");
      input.type  = q.type === "multiple" ? "checkbox" : "radio";
      input.name  = "choice";
      input.id    = "choice-" + displayIdx;
      input.value = choiceItem.originalIdx;

      const label  = document.createElement("label");
      label.htmlFor    = "choice-" + displayIdx;
      label.textContent = choiceItem.text;

      item.appendChild(input);
      item.appendChild(label);

      if (q.type === "single") {
        item.addEventListener("click", function () {
          if (answered) return;
          choicesEl.querySelectorAll(".choice-item").forEach(function (el) {
            el.classList.remove("selected");
            el.querySelector("input").checked = false;
          });
          input.checked = true;
          item.classList.add("selected");
          // Enable the submit button once an option is selected
          const submitBtn = choicesEl.querySelector(".submit-btn");
          if (submitBtn) submitBtn.disabled = false;
        });
      } else {
        // For multiple choice the browser toggles input.checked on click/change.
        // Sync the selected class via the change event — do NOT re-toggle input.checked.
        input.addEventListener("change", function () {
          if (answered) return;
          item.classList.toggle("selected", input.checked);
        });
        // Handle clicks on the item div itself (not label/input) which don't reach the input.
        item.addEventListener("click", function (e) {
          if (answered || e.target === input || e.target === label) return;
          input.checked = !input.checked;
          item.classList.toggle("selected", input.checked);
        });
      }

      choicesEl.appendChild(item);
    });

    // Both single and multiple choice require an explicit Submit button
    const submitBtn = document.createElement("button");
    submitBtn.className   = "submit-btn";
    submitBtn.textContent = "Submit Answer";
    if (q.type === "single") {
      // Disabled until the user selects an option
      submitBtn.disabled = true;
      submitBtn.addEventListener("click", function () {
        onSubmitSingle(q);
      });
    } else {
      submitBtn.addEventListener("click", function () {
        onSubmitMultiple(q);
      });
    }
    choicesEl.appendChild(submitBtn);
  }

  // ── Interaction ──────────────────────────────────────────────────────────
  function onSubmitSingle(q) {
    if (answered) return;
    const checkedInput = choicesEl.querySelector("input[type=radio]:checked");
    if (!checkedInput) {
      showInlineFeedback("Please select an answer.");
      return;
    }
    submitAnswer(q, [parseInt(checkedInput.value, 10)]);
  }

  function onSubmitMultiple(q) {
    if (answered) return;
    const selected = Array.from(
      choicesEl.querySelectorAll("input[type=checkbox]:checked")
    ).map(function (inp) { return parseInt(inp.value, 10); });

    if (selected.length === 0) {
      showInlineFeedback("Please select at least one answer.");
      return;
    }
    submitAnswer(q, selected);
  }

  function submitAnswer(q, selected) {
    answered = true;

    const sortedSelected = selected.slice().sort(function (a, b) { return a - b; });
    const sortedCorrect  = q.correct.slice().sort(function (a, b) { return a - b; });
    const isCorrect = arraysEqual(sortedSelected, sortedCorrect);

    // Partial credit for multiple-choice: count how many selected answers are correct
    let questionScore = 0;
    if (isCorrect) {
      questionScore = 1;
    } else if (q.type === "multiple" && q.correct.length > 1) {
      const correctlySelected = selected.filter(function (s) { return q.correct.includes(s); }).length;
      const wronglySelected   = selected.filter(function (s) { return !q.correct.includes(s); }).length;
      // Partial credit: fraction of correct answers identified (no penalty for wrong selections)
      questionScore = q.correct.length > 0 ? correctlySelected / q.correct.length : 0;
    }
    score += questionScore;

    // Record result for summary
    results.push({ questionId: q.id, isCorrect: isCorrect, partialScore: questionScore, selected: selected, correct: q.correct });

    // Disable choices (always); only colour them in practice mode
    choicesEl.querySelectorAll(".choice-item").forEach(function (item) {
      const idx = parseInt(item.dataset.idx, 10);
      const inp = item.querySelector("input");
      inp.disabled = true;

      if (practiceMode) {
        if (q.correct.includes(idx)) {
          item.classList.add("correct");
        } else if (selected.includes(idx)) {
          item.classList.add("incorrect");
        }
      }
    });

    // Disable submit button
    const submitBtn = choicesEl.querySelector(".submit-btn");
    if (submitBtn) submitBtn.disabled = true;

    // Show feedback — full explanation in practice mode, neutral notice in test mode
    const exp = document.createElement("div");
    if (practiceMode) {
      let feedbackLabel;
      if (isCorrect) {
        feedbackLabel = "\u2713 Correct!";
        exp.className = "explanation correct-exp";
      } else if (questionScore > 0) {
        const pctPartial = Math.round(questionScore * 100);
        feedbackLabel = "\u25D1 Partially correct (" + pctPartial + "% credit)";
        exp.className = "explanation partial-exp";
      } else {
        feedbackLabel = "\u2717 Incorrect";
        exp.className = "explanation incorrect-exp";
      }
      exp.innerHTML = "<strong>" + feedbackLabel + "</strong><br>" + q.explanation;
    } else {
      exp.className = "explanation test-mode-exp";
      exp.textContent = "\uD83D\uDCDD Answer recorded \u2014 results will be shown at the end.";
    }
    choicesEl.appendChild(exp);

    // Scroll the feedback into view (helpful on mobile when the explanation is below the fold).
    // The small delay lets the browser finish painting the newly appended element first.
    setTimeout(function () {
      exp.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 50);

    nextBtn.style.display  = "inline-block";
    if (current + 1 < shuffled.length) {
      nextBtn.textContent = "Next Question \u2192";
    } else if (caseStudyMode === "combined" && casePhase === "quiz") {
      nextBtn.textContent = "Continue to Case Study \u2192";
    } else {
      nextBtn.textContent = "See Results";
    }

    // Save progress (includes current timer state)
    saveProgress();
  }

  function showInlineFeedback(msg) {
    let fb = choicesEl.querySelector(".feedback-msg");
    if (!fb) {
      fb = document.createElement("p");
      fb.className = "feedback-msg";
      const submitBtn = choicesEl.querySelector(".submit-btn");
      choicesEl.insertBefore(fb, submitBtn);
    }
    fb.textContent = msg;
  }

  // ── Navigation ───────────────────────────────────────────────────────────
  nextBtn.addEventListener("click", function () {
    if (!answered) return;
    current++;
    if (current < shuffled.length) {
      saveProgress();
      renderQuestion();
    } else {
      clearProgress();
      // In combined mode quiz phase: transition to test case phase
      if (caseStudyMode === "combined" && casePhase === "quiz") {
        startTestCasePhase();
      } else {
        showSummary();
      }
    }
  });

  // ── Summary ───────────────────────────────────────────────────────────────
  function showSummary() {
    quizIsActive = false;
    clearIdleTimer();
    hideTimer();
    questionEl.innerHTML  = "";
    choicesEl.innerHTML   = "";
    nextBtn.style.display = "none";
    document.getElementById("quiz-container").classList.add("finished");

    if (caseStudyMode === "combined") {
      showCombinedSummary();
    } else if (caseStudyMode === "standalone") {
      showStandaloneCaseSummary();
    } else {
      showQuizSummary();
    }
  }

  // ── Shared helper: build a breakdown section ──────────────────────────────
  function buildBreakdownHtml(titleLabel, resArr, qData) {
    const qMap = {};
    qData.forEach(function (q) { qMap[q.id] = q; });

    const notFullyCorrect = resArr.filter(function (r) { return !r.isCorrect; });
    const fullyCorrect    = resArr.filter(function (r) { return r.isCorrect; }).length;
    const partialResults  = resArr.filter(function (r) { return !r.isCorrect && r.partialScore > 0; });
    const wrongCount      = resArr.filter(function (r) { return r.partialScore === 0; }).length;
    const total           = resArr.length;
    const rawScore        = resArr.reduce(function (s, r) { return s + r.partialScore; }, 0);
    const pct             = total ? Math.round((rawScore / total) * 100) : 0;

    let reviewHtml = "";
    if (notFullyCorrect.length > 0) {
      reviewHtml = '<div class="breakdown">' +
        '<h3 class="breakdown-title">\u26A0\uFE0F ' + titleLabel + ' — Questions to Review (' + notFullyCorrect.length + ')</h3>' +
        '<ol class="breakdown-list">';
      notFullyCorrect.forEach(function (r) {
        const q = qMap[r.questionId];
        if (!q) return;
        const originalPos = resArr.findIndex(function (res) { return res.questionId === r.questionId; }) + 1;
        const correctLabels  = r.correct.map(function (ci) { return ci >= 0 && ci < q.choices.length ? q.choices[ci] : "?"; }).join("; ");
        const selectedLabels = r.selected.map(function (ci) { return ci >= 0 && ci < q.choices.length ? q.choices[ci] : "?"; }).join("; ");
        const itemIcon = r.partialScore > 0 ? "\u25D1" : "\u2717";
        const itemCls  = r.partialScore > 0 ? "bd-partial" : "bd-incorrect";
        reviewHtml +=
          '<li class="bd-item ' + itemCls + '">' +
            '<span class="bd-icon">' + itemIcon + '</span>' +
            '<div class="bd-content">' +
              '<p class="bd-question">Q' + originalPos + '. ' + q.text + '</p>' +
              '<p class="bd-answer bd-your-answer">Your answer: <em class="answer-wrong">' + selectedLabels + '</em></p>' +
              '<p class="bd-answer">Correct answer: <em>' + correctLabels + '</em></p>' +
              '<p class="bd-explanation">' + q.explanation + '</p>' +
            '</div>' +
          '</li>';
      });
      reviewHtml += '</ol></div>';
    } else {
      reviewHtml = '<div class="breakdown"><p class="all-correct">\uD83C\uDF1F Perfect score on ' + titleLabel + ' \u2014 every question correct!</p></div>';
    }

    let breakdownHtml = '<div class="breakdown">' +
      '<h3 class="breakdown-title">' + titleLabel + ' — Full Breakdown</h3>' +
      '<div class="breakdown-stats">' +
        '<span class="bd-stat correct-stat">\u2713 Correct: ' + fullyCorrect + '</span>' +
        (partialResults.length > 0 ? '<span class="bd-stat partial-stat">\u25D1 Partial: ' + partialResults.length + '</span>' : '') +
        '<span class="bd-stat incorrect-stat">\u2717 Wrong: ' + wrongCount + '</span>' +
        '<span class="bd-stat total-stat">Total: ' + total + '</span>' +
        '<span class="bd-stat pct-stat">' + pct + '%</span>' +
      '</div>' +
      '<ol class="breakdown-list">';

    resArr.forEach(function (r, idx) {
      const q = qMap[r.questionId];
      if (!q) return;
      let icon, cls;
      if (r.isCorrect) { icon = "\u2713"; cls = "bd-correct"; }
      else if (r.partialScore > 0) { icon = "\u25D1"; cls = "bd-partial"; }
      else { icon = "\u2717"; cls = "bd-incorrect"; }
      const correctLabels = r.correct.map(function (ci) {
        return ci >= 0 && ci < q.choices.length ? q.choices[ci] : "?";
      }).join("; ");
      breakdownHtml +=
        '<li class="bd-item ' + cls + '">' +
          '<span class="bd-icon">' + icon + '</span>' +
          '<div class="bd-content">' +
            '<p class="bd-question">Q' + (idx + 1) + '. ' + q.text + '</p>' +
            '<p class="bd-answer">Correct answer: <em>' + correctLabels + '</em></p>' +
          '</div>' +
        '</li>';
    });

    breakdownHtml += '</ol></div>';
    return { reviewHtml: reviewHtml, breakdownHtml: breakdownHtml, pct: pct, fullyCorrect: fullyCorrect, partialResults: partialResults, wrongCount: wrongCount };
  }

  // ── Standalone quiz summary (unchanged behaviour) ─────────────────────────
  function showQuizSummary() {
    saveCompletedState();
    const total          = shuffled.length || results.length;
    const rawScore       = score;
    const pct            = total ? Math.round((rawScore / total) * 100) : 0;
    const mb820Points    = Math.round(pct * 10);
    const fullyCorrect   = results.filter(function (r) { return r.isCorrect; }).length;
    const partialResults = results.filter(function (r) { return !r.isCorrect && r.partialScore > 0; });
    const wrongCount     = results.filter(function (r) { return r.partialScore === 0; }).length;

    const isRandom = activeSet.key === "random";

    const badge   = pct >= PASS_PCT ? "pass" : (pct >= MARGINAL_PCT ? "marginal" : "fail");
    const verdict = isRandom
      ? (pct >= PASS_PCT
          ? "Well done \u2014 " + pct + "% on the random practice quiz! \uD83C\uDF89"
          : "Keep practising \u2014 " + pct + "% on the random practice quiz. Review the explanations below.")
      : (pct >= PASS_PCT
          ? "Great work \u2014 you scored " + mb820Points + "/1000 and passed the MB-820 threshold! \uD83C\uDF89"
          : pct >= MARGINAL_PCT
            ? "Almost there \u2014 you need " + (PASS_PCT * 10) + "/1000 to pass MB-820. Review the explanations and try again!"
            : "Keep studying \u2014 you need " + (PASS_PCT * 10) + "/1000 to pass MB-820. Review the explanations and try again.");

    const timeTaken   = TIMER_DURATION - timerSeconds;
    const timeExpired = timerSeconds === 0;
    const timeStr     = timeExpired
      ? "Time expired (" + formatTime(TIMER_DURATION) + " used)"
      : formatTime(timeTaken) + " used (" + formatTime(timerSeconds) + " remaining)";

    let perfLabel = "";
    if (pct >= 90)                perfLabel = "\uD83C\uDFC6 Excellent";
    else if (pct >= PASS_PCT)     perfLabel = "\u2705 Pass";
    else if (pct >= MARGINAL_PCT) perfLabel = "\u26A0\uFE0F Marginal";
    else                          perfLabel = "\u274C Needs Work";

    const difficultyMeta = {
      beginner:     { icon: "\uD83D\uDFE2", label: "Beginner" },
      intermediate: { icon: "\uD83D\uDFE1", label: "Intermediate" },
      proficient:   { icon: "\uD83D\uDD34", label: "Proficient" },
      official:     { icon: "\uD83D\uDCCB", label: "Official" },
      random:       { icon: "\uD83C\uDFB2", label: "Random" }
    };
    const dmeta = difficultyMeta[activeSet.difficulty] || { icon: "", label: "" };

    const bd = buildBreakdownHtml("Quiz", results, activeSet.data);
    const chart = buildCategoryChart(results, activeSet.data);

    summaryEl.innerHTML =
      '<div class="summary-card ' + badge + '">' +
        (pct >= PASS_PCT && !reviewMode ? '<div class="celebration-banner"><span class="celebration-text">\uD83C\uDF89 Congratulations!</span><span class="celebration-sub">You cleared the MB-820 passing threshold!</span></div>' : '') +
        '<h2>' + (isRandom ? "Random Practice Complete!" : "Quiz Complete!") + '</h2>' +
        '<p class="summary-set-label">' +
          dmeta.icon + ' ' + activeSet.label + ' &nbsp;&middot;&nbsp; ' + perfLabel +
        '</p>' +
        '<div class="score-circle">' +
          '<span class="score-number">' + pct + '%</span>' +
          '<span class="score-label">' + (isRandom ? fullyCorrect + " / " + total + " correct" : mb820Points + ' / 1000 MB-820 pts') + '</span>' +
        '</div>' +
        '<p class="score-verdict">' + verdict + '</p>' +
        '<div class="summary-meta">' +
          '<span class="meta-item">\u23F1 ' + timeStr + '</span>' +
          '<span class="meta-item">\u2713 ' + fullyCorrect + ' correct</span>' +
          (partialResults.length > 0 ? '<span class="meta-item">\u25D1 ' + partialResults.length + ' partial</span>' : '') +
          '<span class="meta-item">\u2717 ' + wrongCount + ' wrong</span>' +
        '</div>' +
        chart +
        '<div class="summary-actions">' +
          '<button class="restart-btn" id="restart-btn">' + (isRandom ? 'New Random Quiz' : 'Restart Quiz') + '</button>' +
          '<button class="change-set-btn" id="change-set-btn-summary">Back to Menu</button>' +
        '</div>' +
      '</div>' +
      bd.reviewHtml +
      bd.breakdownHtml;

    summaryEl.style.display = "block";
    if (pct >= PASS_PCT && !reviewMode) launchConfetti();

    document.getElementById("restart-btn").addEventListener("click", function () {
      reviewMode = false;
      if (isRandom) {
        showModeOverlay(function () { initRandomQuiz(false); });
      } else {
        caseStudyMode = null; caseStudy = null; savedQuizState = null; casePhase = "quiz";
        showModeOverlay(function () { init(false); });
      }
    });
    document.getElementById("change-set-btn-summary").addEventListener("click", function () {
      showSetSelection();
    });
  }

  // ── Standalone test case summary ─────────────────────────────────────────
  function showStandaloneCaseSummary() {
    saveCompletedState();
    const total        = shuffled.length || results.length;
    const rawScore     = score;
    const pct          = total ? Math.round((rawScore / total) * 100) : 0;
    const fullyCorrect = results.filter(function (r) { return r.isCorrect; }).length;
    const partials     = results.filter(function (r) { return !r.isCorrect && r.partialScore > 0; });
    const wrongCount   = results.filter(function (r) { return r.partialScore === 0; }).length;

    const badge   = pct >= PASS_PCT ? "pass" : (pct >= MARGINAL_PCT ? "marginal" : "fail");
    const verdict = pct >= PASS_PCT
      ? "Great work \u2014 you scored " + pct + "% on this case study! \uD83C\uDF89"
      : pct >= MARGINAL_PCT
        ? "Almost there \u2014 you need " + PASS_PCT + "% to pass. Review the explanations and try again!"
        : "Keep studying \u2014 review the explanations below and try again.";

    let perfLabel = "";
    if (pct >= 90)                perfLabel = "\uD83C\uDFC6 Excellent";
    else if (pct >= PASS_PCT)     perfLabel = "\u2705 Pass";
    else if (pct >= MARGINAL_PCT) perfLabel = "\u26A0\uFE0F Marginal";
    else                          perfLabel = "\u274C Needs Work";

    const bd = buildBreakdownHtml(caseStudy.label, results, caseStudy.questions);
    const chart = buildCategoryChart(results, caseStudy.questions);

    summaryEl.innerHTML =
      '<div class="summary-card ' + badge + '">' +
        (pct >= PASS_PCT && !reviewMode ? '<div class="celebration-banner"><span class="celebration-text">\uD83C\uDF89 Congratulations!</span><span class="celebration-sub">You cleared the passing threshold!</span></div>' : '') +
        '<h2>Case Study Complete!</h2>' +
        '<p class="summary-set-label">\uD83D\uDCCB ' + caseStudy.label + ' &nbsp;&middot;&nbsp; ' + perfLabel + '</p>' +
        '<div class="score-circle">' +
          '<span class="score-number">' + pct + '%</span>' +
          '<span class="score-label">' + fullyCorrect + ' / ' + total + ' correct</span>' +
        '</div>' +
        '<p class="score-verdict">' + verdict + '</p>' +
        '<div class="summary-meta">' +
          '<span class="meta-item">\u2713 ' + fullyCorrect + ' correct</span>' +
          (partials.length > 0 ? '<span class="meta-item">\u25D1 ' + partials.length + ' partial</span>' : '') +
          '<span class="meta-item">\u2717 ' + wrongCount + ' wrong</span>' +
        '</div>' +
        chart +
        '<div class="summary-actions">' +
          '<button class="restart-btn" id="restart-case-btn">Try Again</button>' +
          '<button class="change-set-btn" id="back-home-btn">Back to Menu</button>' +
        '</div>' +
      '</div>' +
      bd.reviewHtml +
      bd.breakdownHtml;

    summaryEl.style.display = "block";
    if (pct >= PASS_PCT && !reviewMode) launchConfetti();

    document.getElementById("restart-case-btn").addEventListener("click", function () {
      reviewMode = false;
      showModeOverlay(function () { initStandaloneCase(false); });
    });
    document.getElementById("back-home-btn").addEventListener("click", function () {
      showSetSelection();
    });
  }

  // ── Combined summary (70% quiz + 30% case study) ──────────────────────────
  function showCombinedSummary() {
    saveCompletedState();
    // Current state holds test case results; savedQuizState holds quiz results
    const quizResultsArr = savedQuizState.results;
    const quizTotal      = savedQuizState.shuffledIds.length;
    const quizRawScore   = savedQuizState.score;
    const quizPct        = quizTotal ? (quizRawScore / quizTotal) * 100 : 0;

    const caseResultsArr = results;
    const caseTotal      = shuffled.length;
    const caseRawScore   = score;
    const casePct        = caseTotal ? (caseRawScore / caseTotal) * 100 : 0;

    const combinedPct      = Math.round(0.70 * quizPct + 0.30 * casePct);
    const mb820Points      = Math.round(combinedPct * 10);
    const quizPctRounded   = Math.round(quizPct);
    const casePctRounded   = Math.round(casePct);

    const badge   = combinedPct >= PASS_PCT ? "pass" : (combinedPct >= MARGINAL_PCT ? "marginal" : "fail");
    const verdict = combinedPct >= PASS_PCT
      ? "Great work \u2014 combined score is " + mb820Points + "/1000, above the MB-820 threshold! \uD83C\uDF89"
      : combinedPct >= MARGINAL_PCT
        ? "Almost there \u2014 combined score is " + combinedPct + "%. You need " + PASS_PCT + "% to pass. Review and try again!"
        : "Keep studying \u2014 combined score is " + combinedPct + "%. Review the explanations and try again.";

    const timeTaken   = TIMER_DURATION - timerSeconds;
    const timeExpired = timerSeconds === 0;
    const timeStr     = timeExpired
      ? "Time expired (" + formatTime(TIMER_DURATION) + " used)"
      : formatTime(timeTaken) + " used (" + formatTime(timerSeconds) + " remaining)";

    let perfLabel = "";
    if (combinedPct >= 90)                perfLabel = "\uD83C\uDFC6 Excellent";
    else if (combinedPct >= PASS_PCT)     perfLabel = "\u2705 Pass";
    else if (combinedPct >= MARGINAL_PCT) perfLabel = "\u26A0\uFE0F Marginal";
    else                                  perfLabel = "\u274C Needs Work";

    const difficultyMeta = {
      beginner:     { icon: "\uD83D\uDFE2", label: "Beginner" },
      intermediate: { icon: "\uD83D\uDFE1", label: "Intermediate" },
      proficient:   { icon: "\uD83D\uDD34", label: "Proficient" },
      official:     { icon: "\uD83D\uDCCB", label: "Official" }
    };
    const dmeta = difficultyMeta[activeSet.difficulty] || { icon: "", label: "" };

    // Build breakdowns for both parts
    const quizBd = buildBreakdownHtml(activeSet.label, quizResultsArr, activeSet.data);
    const caseBd = buildBreakdownHtml(caseStudy.label, caseResultsArr, caseStudy.questions);
    const allResults = quizResultsArr.concat(caseResultsArr);
    const allData    = activeSet.data.concat(caseStudy.questions);
    const chart = buildCategoryChart(allResults, allData);

    summaryEl.innerHTML =
      '<div class="summary-card ' + badge + '">' +
        (combinedPct >= PASS_PCT && !reviewMode ? '<div class="celebration-banner"><span class="celebration-text">\uD83C\uDF89 Congratulations!</span><span class="celebration-sub">Combined score above the MB-820 threshold!</span></div>' : '') +
        '<h2>Combined Result!</h2>' +
        '<p class="summary-set-label">' +
          dmeta.icon + ' ' + activeSet.label + ' + \uD83D\uDCCB ' + caseStudy.label + ' &nbsp;&middot;&nbsp; ' + perfLabel +
        '</p>' +
        '<div class="score-circle">' +
          '<span class="score-number">' + combinedPct + '%</span>' +
          '<span class="score-label">' + mb820Points + ' / 1000 MB-820 pts</span>' +
        '</div>' +
        '<p class="score-verdict">' + verdict + '</p>' +
        '<div class="combined-score-breakdown">' +
          '<div class="combined-score-row">' +
            '<span class="combined-score-label">\uD83D\uDCDA Quiz (' + activeSet.label + ')</span>' +
            '<span class="combined-score-pct">' + quizPctRounded + '% \u00D7 70%</span>' +
            '<span class="combined-score-contrib">' + Math.round(0.70 * quizPct) + ' pts</span>' +
          '</div>' +
          '<div class="combined-score-row">' +
            '<span class="combined-score-label">\uD83D\uDCCB Case Study (' + caseStudy.label + ')</span>' +
            '<span class="combined-score-pct">' + casePctRounded + '% \u00D7 30%</span>' +
            '<span class="combined-score-contrib">' + Math.round(0.30 * casePct) + ' pts</span>' +
          '</div>' +
          '<div class="combined-score-total-row">' +
            '<span class="combined-score-label">Combined Score</span>' +
            '<span class="combined-score-pct combined-total">' + combinedPct + '%</span>' +
          '</div>' +
        '</div>' +
        '<div class="summary-meta">' +
          '<span class="meta-item">\u23F1 ' + timeStr + '</span>' +
        '</div>' +
        chart +
        '<div class="summary-actions">' +
          '<button class="restart-btn" id="combined-restart-btn">Restart Quiz</button>' +
          '<button class="change-set-btn" id="combined-home-btn">Back to Menu</button>' +
        '</div>' +
      '</div>' +
      quizBd.reviewHtml +
      quizBd.breakdownHtml +
      caseBd.reviewHtml +
      caseBd.breakdownHtml;

    summaryEl.style.display = "block";
    if (combinedPct >= PASS_PCT && !reviewMode) launchConfetti();

    document.getElementById("combined-restart-btn").addEventListener("click", function () {
      reviewMode     = false;
      const cs = caseStudy;
      caseStudyMode  = "combined";
      caseStudy      = cs;
      savedQuizState = null;
      casePhase      = "quiz";
      showModeOverlay(function () { init(false); });
    });
    document.getElementById("combined-home-btn").addEventListener("click", function () {
      showSetSelection();
    });
  }

  // ── Mode selection overlay ─────────────────────────────────────────────────
  function showModeOverlay(onStart) {
    document.getElementById("mode-overlay").style.display = "flex";

    function cleanup() {
      document.getElementById("mode-overlay").style.display = "none";
      document.getElementById("practice-mode-btn").removeEventListener("click", onPractice);
      document.getElementById("test-mode-btn").removeEventListener("click", onTest);
      document.getElementById("mode-cancel-btn").removeEventListener("click", onCancel);
    }
    function onPractice() { cleanup(); practiceMode = true;  onStart(); }
    function onTest()     { cleanup(); practiceMode = false; onStart(); }
    function onCancel()   { cleanup(); showSetSelection(); }

    document.getElementById("practice-mode-btn").addEventListener("click", onPractice);
    document.getElementById("test-mode-btn").addEventListener("click", onTest);
    document.getElementById("mode-cancel-btn").addEventListener("click", onCancel);
  }

  // ── Question category lookup ───────────────────────────────────────────────
  // Maps official MB-820 question IDs (501-578) to exam domain categories
  var OFFICIAL_CATEGORY_MAP = {
    501: "Deployment & Architecture", 502: "Deployment & Architecture",
    503: "Describe Business Central",  504: "Development Tools",
    505: "Development Tools",          506: "Development Tools",
    507: "AL Objects",                 508: "Deployment & Architecture",
    509: "Deployment & Architecture",  510: "AL Objects",
    511: "AL Objects",                 512: "AL Objects",
    513: "AL Objects",                 514: "AL Development",
    515: "Development Tools",          516: "AL Objects",
    517: "AL Objects",                 518: "AL Objects",
    519: "AL Objects",                 520: "AL Development",
    521: "AL Development",             522: "AL Development",
    523: "AL Development",             524: "AL Objects",
    525: "AL Objects",                 526: "AL Objects",
    527: "AL Objects",                 528: "AL Development",
    529: "AL Objects",                 530: "AL Objects",
    531: "AL Development",             532: "Integration",
    534: "AL Objects",
    535: "AL Development",             536: "Describe Business Central",
    537: "Deployment & Architecture",  538: "AL Objects",
    539: "AL Objects",                 540: "Integration",
    541: "Development Tools",          542: "AL Objects",
    543: "Development Tools",          544: "AL Objects",
    545: "AL Objects",                 546: "AL Objects",
    547: "AL Objects",                 548: "AL Objects",
    549: "AL Objects",                 550: "AL Objects",
    551: "AL Objects",                 552: "Deployment & Architecture",
    553: "AL Development",             554: "AL Objects",
    555: "AL Objects",                 556: "AL Objects",
    557: "AL Objects",                 558: "AL Development",
    559: "AL Objects",                 560: "AL Development",
    561: "Development Tools",          562: "Development Tools",
    563: "Development Tools",          564: "Development Tools",
    565: "Development Tools",          566: "Deployment & Architecture",
    567: "AL Objects",                 568: "Integration",
    569: "AL Objects",                 570: "AL Development",
    571: "AL Objects",                 572: "AL Objects",
    573: "AL Objects",                 574: "AL Objects",
    575: "AL Development",             576: "Development Tools",
    577: "Development Tools",          578: "Development Tools"
  };

  function getQuestionCategory(id) {
    // Official MB-820 questions (IDs 501-578)
    if (OFFICIAL_CATEGORY_MAP[id]) return OFFICIAL_CATEGORY_MAP[id];

    // questions.js — BC functional consultant areas (IDs 1-100)
    if (id >= 1   && id <= 5)   return "Financial Management";
    if (id >= 6   && id <= 8)   return "Sales & Receivables";
    if (id >= 9   && id <= 10)  return "Purchasing & Payables";
    if (id >= 11  && id <= 14)  return "Inventory & Items";
    if (id >= 15  && id <= 17)  return "Manufacturing";
    if (id >= 18  && id <= 19)  return "Service Management";
    if (id === 20)               return "Assembly Management";
    if (id >= 21  && id <= 22)  return "Planning";
    if (id >= 23  && id <= 24)  return "Project Management";
    if (id >= 25  && id <= 27)  return "Setup & Administration";
    if (id === 28)               return "Intercompany";
    if (id >= 29  && id <= 30)  return "Reporting & Analytics";
    if (id >= 31  && id <= 40)  return "Financial Management";
    if (id >= 41  && id <= 46)  return "Sales & Receivables";
    if (id >= 47  && id <= 50)  return "Purchasing & Payables";
    if (id >= 51  && id <= 56)  return "Inventory & Items";
    if (id >= 57  && id <= 60)  return "Manufacturing";
    if (id >= 61  && id <= 63)  return "Service Management";
    if (id >= 64  && id <= 65)  return "Assembly Management";
    if (id >= 66  && id <= 69)  return "Planning";
    if (id >= 70  && id <= 72)  return "Project Management";
    if (id >= 73  && id <= 76)  return "Setup & Administration";
    if (id >= 77  && id <= 78)  return "Cash Management";
    if (id >= 79  && id <= 80)  return "Fixed Assets";
    if (id >= 81  && id <= 82)  return "Intercompany";
    if (id >= 83  && id <= 84)  return "Dimensions";
    if (id >= 85  && id <= 86)  return "Reporting & Analytics";
    if (id >= 87  && id <= 88)  return "Workflows";
    if (id >= 89  && id <= 90)  return "Warehouse Management";
    if (id >= 91  && id <= 94)  return "Financial Management";
    if (id >= 95  && id <= 96)  return "Sales & Receivables";
    if (id >= 97  && id <= 98)  return "Purchasing & Payables";
    if (id >= 99  && id <= 100) return "Inventory & Items";

    // questions2.js — developer concepts (IDs 201-300)
    if (id >= 201 && id <= 300) return "BC Developer Concepts";

    // testcases.js — case study questions (IDs 301+)
    return "Case Study";
  }

  // ── Category pie chart ─────────────────────────────────────────────────────
  function buildCategoryChart(results, qData) {
    if (!results || results.length === 0) return "";

    const categoryData = {};
    results.forEach(function (r) {
      const cat = getQuestionCategory(r.questionId);
      if (!categoryData[cat]) categoryData[cat] = { total: 0, score: 0 };
      categoryData[cat].total++;
      categoryData[cat].score += r.partialScore;
    });

    const categories = Object.keys(categoryData);
    if (categories.length === 0) return "";

    var COLORS = [
      "#4a9eff", "#34c759", "#ff9f0a", "#bf5af2", "#ff453a",
      "#32ade6", "#ff6b35", "#30d158", "#e65100", "#7c4dff"
    ];

    var total = results.length;
    var cx = 100, cy = 100, outerR = 85, innerR = 42;
    var startAngle = -Math.PI / 2;
    var paths = "";
    var legendRows = "";

    categories.forEach(function (cat, i) {
      var data  = categoryData[cat];
      var pct   = data.total > 0 ? Math.round((data.score / data.total) * 100) : 0;
      var slice = data.total / total;
      var angle = slice * 2 * Math.PI;
      var endAngle = startAngle + angle;
      var color = COLORS[i % COLORS.length];

      if (categories.length === 1) {
        paths +=
          '<circle cx="' + cx + '" cy="' + cy + '" r="' + outerR + '" fill="' + color + '" />' +
          '<circle cx="' + cx + '" cy="' + cy + '" r="' + innerR + '" fill="#0f172a" />';
      } else {
        var x1o = cx + outerR * Math.cos(startAngle);
        var y1o = cy + outerR * Math.sin(startAngle);
        var x2o = cx + outerR * Math.cos(endAngle);
        var y2o = cy + outerR * Math.sin(endAngle);
        var x1i = cx + innerR * Math.cos(endAngle);
        var y1i = cy + innerR * Math.sin(endAngle);
        var x2i = cx + innerR * Math.cos(startAngle);
        var y2i = cy + innerR * Math.sin(startAngle);
        var largeArc = angle > Math.PI ? 1 : 0;
        paths +=
          '<path d="M ' + x1o.toFixed(2) + ' ' + y1o.toFixed(2) +
          ' A ' + outerR + ' ' + outerR + ' 0 ' + largeArc + ' 1 ' + x2o.toFixed(2) + ' ' + y2o.toFixed(2) +
          ' L ' + x1i.toFixed(2) + ' ' + y1i.toFixed(2) +
          ' A ' + innerR + ' ' + innerR + ' 0 ' + largeArc + ' 0 ' + x2i.toFixed(2) + ' ' + y2i.toFixed(2) +
          ' Z" fill="' + color + '" stroke="#0f172a" stroke-width="2" />';
      }

      var badgeCls = pct >= 70 ? "pct-pass" : pct >= 50 ? "pct-marginal" : "pct-fail";
      legendRows +=
        '<div class="chart-legend-row">' +
          '<span class="chart-legend-dot" style="background:' + color + '"></span>' +
          '<span class="chart-legend-cat">' + cat + '</span>' +
          '<span class="chart-legend-pct ' + badgeCls + '">' + pct + '%</span>' +
          '<span class="chart-legend-count">(' + data.total + 'q)</span>' +
        '</div>';

      startAngle = endAngle;
    });

    return '<div class="category-chart-section">' +
      '<h3 class="breakdown-title">\uD83D\uDCCA Performance by Category</h3>' +
      '<div class="category-chart-layout">' +
        '<svg class="category-pie-svg" viewBox="0 0 200 200" width="180" height="180">' +
          paths +
        '</svg>' +
        '<div class="category-chart-legend">' + legendRows + '</div>' +
      '</div>' +
    '</div>';
  }

  // ── Bot prevention / human verification ──────────────────────────────────
  const AUTH_KEY = "mb820_authenticated";

  function isAuthenticated() {
    try { return localStorage.getItem(AUTH_KEY) === "1"; } catch (e) { return false; }
  }

  function setAuthenticated() {
    try { localStorage.setItem(AUTH_KEY, "1"); } catch (e) { /* ignore */ }
  }

  function generateMathChallenge() {
    var ops = ["+", "-", "*"];
    var op = ops[Math.floor(Math.random() * ops.length)];
    var a, b, answer;
    if (op === "+") {
      a = Math.floor(Math.random() * 10) + 1;
      b = Math.floor(Math.random() * 10) + 1;
      answer = a + b;
    } else if (op === "-") {
      a = Math.floor(Math.random() * 10) + 5;
      b = Math.floor(Math.random() * a) + 1;
      answer = a - b;
    } else {
      a = Math.floor(Math.random() * 9) + 2;
      b = Math.floor(Math.random() * 9) + 2;
      answer = a * b;
    }
    return { question: "What is " + a + " " + op + " " + b + " ?", answer: answer };
  }

  function showMathOverlay() {
    document.getElementById("math-overlay").style.display = "flex";
    document.getElementById("quiz-container").style.display = "none";
  }

  function hideMathOverlay() {
    document.getElementById("math-overlay").style.display = "none";
    document.getElementById("quiz-container").style.display = "";
  }

  function setupMathGate(onSuccess) {
    var submitBtn   = document.getElementById("math-submit-btn");
    var inputEl     = document.getElementById("math-input");
    var errorEl     = document.getElementById("math-error");
    var questionEl  = document.getElementById("math-question-display");

    var challenge = generateMathChallenge();
    questionEl.textContent = challenge.question;

    function attempt() {
      var parsed = parseInt(inputEl.value, 10);
      if (!isNaN(parsed) && parsed === challenge.answer) {
        setAuthenticated();
        hideMathOverlay();
        onSuccess();
      } else {
        errorEl.style.display = "block";
        inputEl.value = "";
        challenge = generateMathChallenge();
        questionEl.textContent = challenge.question;
        inputEl.focus();
      }
    }

    submitBtn.addEventListener("click", attempt);
    inputEl.addEventListener("keydown", function (e) {
      if (e.key === "Enter") attempt();
    });
    inputEl.focus();
  }

  // ── Boot ─────────────────────────────────────────────────────────────────
  // Migrate any legacy progress keys from the old "set1"/"set2" format.
  // Then check for saved in-progress state; if exactly one set has progress, prompt resume.
  (function boot() {
    try {
      const legacyKeys = ["mb820_quiz_progress", "mb820_quiz_progress_set1", "mb820_quiz_progress_set2"];
      legacyKeys.forEach(function (k) {
        if (localStorage.getItem(k)) localStorage.removeItem(k);
      });
    } catch (e) { /* ignore */ }

    function startApp() {
      studyTimeSeconds = loadStudyTime();
      const setsWithProgress = QUESTION_SETS.filter(function (set) {
        const saved = loadProgress(set);
        return saved && Array.isArray(saved.results) && saved.results.length > 0 && saved.results.length < saved.shuffled.length;
      });

      if (setsWithProgress.length === 1) {
        activeSet      = setsWithProgress[0];
        caseStudyMode  = null;
        caseStudy      = null;
        savedQuizState = null;
        casePhase      = "quiz";
        const saved    = loadProgress(activeSet);
        showResumePrompt(saved);
      } else {
        showSetSelection();
      }
    }

    if (isAuthenticated()) {
      hideMathOverlay();
      startApp();
    } else {
      showMathOverlay();
      setupMathGate(startApp);
    }
  })();
})();
