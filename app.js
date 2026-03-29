(function () {
  "use strict";

  // ── Question sets ────────────────────────────────────────────────────────
  // Split all 200 questions into 3 difficulty tiers:
  //   Beginner    (66): first 66 from questionsSet2 (foundational/conceptual)
  //   Intermediate(67): last 34 from questionsSet2 + first 33 from questions (transitional)
  //   Proficient  (67): last 67 from questions       (hard scenario-based)
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
      description: "67 challenging scenario-based questions covering advanced MB-820 exam topics.",
      data: questions.slice(33)
    },
    {
      key: "official",
      label: "Official Questions",
      difficulty: "official",
      description: "78 official MB-820 exam questions covering deployment architecture, AL development, permissions, XMLports, queries, HTTP, reports, telemetry, and more.",
      data: questionsOfficial
    }
  ];

  const TIMER_DURATION       = 120 * 60; // 120 minutes in seconds
  const TIMER_WARNING_MINS   = 30;       // yellow threshold
  const TIMER_CRITICAL_MINS  = 10;       // red threshold

  // MB-820 scoring thresholds (percentage, 0-100)
  const PASS_PCT     = 70; // 700/1000 points — minimum passing score for MB-820
  const MARGINAL_PCT = 60; // "close but not there" band

  // ── State ────────────────────────────────────────────────────────────────
  let activeSet     = null; // one of QUESTION_SETS entries
  let current       = 0;
  let score         = 0;
  let answered      = false;
  let shuffled      = [];
  let results       = []; // {questionId, isCorrect, selected, correct}
  let timerSeconds  = TIMER_DURATION;
  let timerInterval = null;

  // ── Test-case state ───────────────────────────────────────────────────────
  // caseStudyMode: null | "standalone" | "combined"
  // caseStudy:     the active TEST_CASES entry
  // casePhase:     "quiz" | "testcase" (only meaningful in combined mode)
  // savedQuizState: snapshot of quiz results saved when transitioning to the test-case phase
  let caseStudyMode  = null;
  let caseStudy      = null;
  let casePhase      = "quiz";
  let savedQuizState = null;

  // ── DOM refs ─────────────────────────────────────────────────────────────
  const setSelectionEl = document.getElementById("set-selection");
  const questionEl     = document.getElementById("question");
  const choicesEl      = document.getElementById("choices");
  const nextBtn        = document.getElementById("next-button");
  const summaryEl      = document.getElementById("score-summary");
  const timerEl        = document.getElementById("timer-display");
  const homeBtn        = document.getElementById("home-btn");

  homeBtn.addEventListener("click", function () {
    stopTimer();
    clearProgress();
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
        updateTimerDisplay();
        // Save timer state every 10 seconds so a page-close loses at most 10 s
        if (timerSeconds % 10 === 0) saveProgress();
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

  // ── Persistence ──────────────────────────────────────────────────────────
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
          timerSeconds: timerSeconds
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
        timerSeconds: typeof saved.timerSeconds === "number" ? saved.timerSeconds : TIMER_DURATION
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

    // ── Section 1: Practice Quizzes ──────────────────────────────────────
    let html = '<div class="set-selection-wrapper">' +
      '<h2 class="set-selection-title">Practice Quizzes</h2>' +
      '<p class="set-selection-sub">Each quiz has a 120-minute countdown timer. Optionally attach a case study for a combined score.</p>' +
      '<div class="set-cards">';

    QUESTION_SETS.forEach(function (set) {
      const saved   = loadProgress(set);
      const hasSaved = saved && Array.isArray(saved.results) && saved.results.length > 0 && saved.results.length < saved.shuffled.length;
      const meta    = difficultyMeta[set.difficulty] || {};
      const savedTimer = hasSaved ? saved.timerSeconds : null;

      // Build the case study selector options
      let caseOptions = '<option value="">None</option>';
      TEST_CASES.forEach(function (tc) {
        const disabled = tc.questions.length === 0 ? " disabled" : "";
        const label    = tc.questions.length === 0 ? tc.label + " (coming soon)" : tc.label;
        caseOptions += '<option value="' + tc.key + '"' + disabled + '>' + label + '</option>';
      });

      html +=
        '<div class="set-card" data-key="' + set.key + '">' +
          '<div class="set-card-header">' +
            '<span class="set-card-title">' + set.label + '</span>' +
            '<span class="set-card-count">' + set.data.length + ' questions</span>' +
          '</div>' +
          '<span class="difficulty-badge ' + meta.cls + '">' + meta.icon + ' ' + meta.label + '</span>' +
          '<p class="set-card-desc">' + set.description + '</p>' +
          (hasSaved
            ? '<p class="set-card-resume">\u23F8 Saved: question ' + (saved.results.length + 1) + ' of ' + saved.shuffled.length +
              ' \u2014 ' + Math.round((saved.score / saved.shuffled.length) * 100) + '% score' +
              (savedTimer !== null ? ' \u2014 \u23F1 ' + formatTime(savedTimer) + ' left' : '') + '</p>'
            : '') +
          '<div class="case-selector">' +
            '<label class="case-selector-label">\uD83D\uDCCB Case Study (optional):</label>' +
            '<select class="case-select" data-quiz-key="' + set.key + '">' +
              caseOptions +
            '</select>' +
          '</div>' +
          '<div class="set-card-actions">' +
            (hasSaved
              ? '<button class="set-btn resume-set-btn" data-key="' + set.key + '">Resume</button>'
              : '') +
            '<button class="set-btn start-set-btn" data-key="' + set.key + '">' +
              (hasSaved ? 'New Quiz' : 'Start Quiz') +
            '</button>' +
          '</div>' +
        '</div>';
    });

    html += '</div>';

    // ── Section 2: Case Studies ──────────────────────────────────────────
    html += '<div class="section-divider"></div>' +
      '<h2 class="set-selection-title">Case Studies</h2>' +
      '<p class="set-selection-sub">Practice standalone scenario-based questions from each case study.</p>' +
      '<div class="set-cards">';

    TEST_CASES.forEach(function (tc) {
      const available  = tc.questions.length > 0;
      const savedCase  = available ? loadCaseProgress(tc) : null;
      const hasSaved   = savedCase && Array.isArray(savedCase.results) && savedCase.results.length > 0 && savedCase.results.length < savedCase.shuffled.length;
      const savedTimer = hasSaved ? savedCase.timerSeconds : null;
      html +=
        '<div class="set-card case-card' + (available ? '' : ' case-card-disabled') + '" data-case-key="' + tc.key + '">' +
          '<div class="set-card-header">' +
            '<span class="set-card-title">' + tc.label + '</span>' +
            '<span class="set-card-count">' + (available ? tc.questions.length + ' questions' : 'Coming soon') + '</span>' +
          '</div>' +
          '<span class="difficulty-badge diff-case">\uD83D\uDCCB Case Study</span>' +
          '<p class="set-card-desc">' + tc.description + '</p>' +
          (hasSaved
            ? '<p class="set-card-resume">\u23F8 Saved: question ' + (savedCase.results.length + 1) + ' of ' + savedCase.shuffled.length +
              ' \u2014 ' + Math.round((savedCase.score / savedCase.shuffled.length) * 100) + '% score' +
              (savedTimer !== null ? ' \u2014 \u23F1 ' + formatTime(savedTimer) + ' left' : '') + '</p>'
            : '') +
          '<div class="set-card-actions">' +
            (available
              ? (hasSaved
                  ? '<button class="set-btn resume-set-btn case-resume-btn" data-case-key="' + tc.key + '">Resume</button>'
                  : '') +
                '<button class="set-btn start-set-btn case-start-btn" data-case-key="' + tc.key + '">' +
                  (hasSaved ? 'New Attempt' : 'Start') +
                '</button>'
              : '<span class="coming-soon-label">Available soon</span>') +
          '</div>' +
        '</div>';
    });

    html += '</div></div>';
    setSelectionEl.innerHTML = html;

    // Quiz resume/start buttons
    setSelectionEl.querySelectorAll(".resume-set-btn:not(.case-resume-btn)").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const key = btn.dataset.key;
        activeSet      = QUESTION_SETS.find(function (s) { return s.key === key; });
        caseStudyMode  = null;
        caseStudy      = null;
        savedQuizState = null;
        casePhase      = "quiz";
        init(true);
      });
    });

    setSelectionEl.querySelectorAll(".start-set-btn:not(.case-start-btn)").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const key      = btn.dataset.key;
        activeSet      = QUESTION_SETS.find(function (s) { return s.key === key; });
        // Read selected test case from the sibling selector
        const card     = btn.closest(".set-card");
        const sel      = card ? card.querySelector(".case-select") : null;
        const caseKey  = sel ? sel.value : "";
        caseStudy      = caseKey ? TEST_CASES.find(function (tc) { return tc.key === caseKey; }) || null : null;
        caseStudyMode  = caseStudy ? "combined" : null;
        savedQuizState = null;
        casePhase      = "quiz";
        init(false);
      });
    });

    // Case study standalone resume/start buttons
    setSelectionEl.querySelectorAll(".case-resume-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const key   = btn.dataset.caseKey;
        const tc    = TEST_CASES.find(function (t) { return t.key === key; });
        if (!tc) return;
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
        activeSet      = null;
        caseStudy      = tc;
        caseStudyMode  = "standalone";
        savedQuizState = null;
        casePhase      = "quiz";
        initStandaloneCase(false);
      });
    });
  }

  // ── Init (quiz) ───────────────────────────────────────────────────────────
  function init(resume) {
    showHomeBtn();
    setSelectionEl.style.display = "none";
    summaryEl.style.display      = "none";
    document.getElementById("quiz-container").classList.remove("finished");
    nextBtn.style.display        = "none";

    if (resume) {
      const saved = loadProgress(activeSet);
      if (saved && saved.current < saved.shuffled.length) {
        shuffled     = saved.shuffled;
        current      = saved.current;
        score        = saved.score;
        results      = saved.results;
        timerSeconds = saved.timerSeconds;
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

    // Fresh start
    clearProgress();
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
    shuffled     = shuffle(caseStudy.questions);
    current      = 0;
    score        = 0;
    results      = [];
    timerSeconds = TIMER_DURATION;
    showCaseIntro();
  }

  // ── Case study intro screen ───────────────────────────────────────────────
  function showCaseIntro() {
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
    // Snapshot the completed quiz state
    savedQuizState = {
      shuffledIds: shuffled.map(function (q) { return q.id; }),
      score: score,
      results: results,
      timerSeconds: timerSeconds
    };
    casePhase = "testcase";

    // Set up test case questions
    shuffled = shuffle(caseStudy.questions);
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
    showHomeBtn();
    const nextQuestion = saved.results.length + 1;
    const timerInfo = typeof saved.timerSeconds === "number"
      ? ' with <strong>' + formatTime(saved.timerSeconds) + '</strong> remaining on the clock'
      : '';
    questionEl.innerHTML =
      '<div class="resume-prompt">' +
        '<h2>Resume Quiz?</h2>' +
        '<p>You were on question <strong>' + nextQuestion + ' of ' + saved.shuffled.length + '</strong> ' +
        'with a score of <strong>' + Math.round((saved.score / saved.shuffled.length) * 100) + '%</strong>' + timerInfo + '.</p>' +
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
    answered = false;
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
      (caseStudyMode !== "standalone"
        ? '<div class="progress">Question ' + (current + 1) + ' of ' + shuffled.length + '</div>'
        : '') +
      '<div class="question-type-badge ' + (q.type === "multiple" ? "multiple" : "single") + '">' +
        (q.type === "multiple" ? "Multiple Choice \u2014 select all that apply" : "Single Choice") +
      '</div>' +
      (q.context ? '<div class="question-context">' + q.context + '</div>' : '') +
      '<p class="question-text">' + q.text + '</p>';

    choicesEl.innerHTML = "";

    q.choices.forEach(function (choice, idx) {
      const item  = document.createElement("div");
      item.className    = "choice-item";
      item.dataset.idx  = idx;

      const input = document.createElement("input");
      input.type  = q.type === "multiple" ? "checkbox" : "radio";
      input.name  = "choice";
      input.id    = "choice-" + idx;
      input.value = idx;

      const label  = document.createElement("label");
      label.htmlFor    = "choice-" + idx;
      label.textContent = choice;

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
      const correctlySelected   = selected.filter(function (s) { return q.correct.includes(s); }).length;
      const incorrectlySelected = selected.filter(function (s) { return !q.correct.includes(s); }).length;
      questionScore = Math.max(0, (correctlySelected - incorrectlySelected) / q.correct.length);
    }
    score += questionScore;

    // Record result for summary
    results.push({ questionId: q.id, isCorrect: isCorrect, partialScore: questionScore, selected: selected, correct: q.correct });

    // Disable & colour choices
    choicesEl.querySelectorAll(".choice-item").forEach(function (item) {
      const idx = parseInt(item.dataset.idx, 10);
      const inp = item.querySelector("input");
      inp.disabled = true;

      if (q.correct.includes(idx)) {
        item.classList.add("correct");
      } else if (selected.includes(idx)) {
        item.classList.add("incorrect");
      }
    });

    // Disable submit button
    const submitBtn = choicesEl.querySelector(".submit-btn");
    if (submitBtn) submitBtn.disabled = true;

    // Explanation — show partial credit info when applicable
    const exp = document.createElement("div");
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
    choicesEl.appendChild(exp);

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
    const total          = shuffled.length;
    const rawScore       = score;
    const pct            = Math.round((rawScore / total) * 100);
    const mb820Points    = Math.round(pct * 10);
    const fullyCorrect   = results.filter(function (r) { return r.isCorrect; }).length;
    const partialResults = results.filter(function (r) { return !r.isCorrect && r.partialScore > 0; });
    const wrongCount     = results.filter(function (r) { return r.partialScore === 0; }).length;

    const badge   = pct >= PASS_PCT ? "pass" : (pct >= MARGINAL_PCT ? "marginal" : "fail");
    const verdict = pct >= PASS_PCT
      ? "Great work \u2014 you scored " + mb820Points + "/1000 and passed the MB-820 threshold! \uD83C\uDF89"
      : pct >= MARGINAL_PCT
        ? "Almost there \u2014 you need " + (PASS_PCT * 10) + "/1000 to pass MB-820. Review the explanations and try again!"
        : "Keep studying \u2014 you need " + (PASS_PCT * 10) + "/1000 to pass MB-820. Review the explanations and try again.";

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
      official:     { icon: "\uD83D\uDCCB", label: "Official" }
    };
    const dmeta = difficultyMeta[activeSet.difficulty] || { icon: "", label: "" };

    const bd = buildBreakdownHtml("Quiz", results, activeSet.data);

    summaryEl.innerHTML =
      '<div class="summary-card ' + badge + '">' +
        '<h2>Quiz Complete!</h2>' +
        '<p class="summary-set-label">' +
          dmeta.icon + ' ' + activeSet.label + ' &nbsp;&middot;&nbsp; ' + perfLabel +
        '</p>' +
        '<div class="score-circle">' +
          '<span class="score-number">' + pct + '%</span>' +
          '<span class="score-label">' + mb820Points + ' / 1000 MB-820 pts</span>' +
        '</div>' +
        '<p class="score-verdict">' + verdict + '</p>' +
        '<div class="summary-meta">' +
          '<span class="meta-item">\u23F1 ' + timeStr + '</span>' +
          '<span class="meta-item">\u2713 ' + fullyCorrect + ' correct</span>' +
          (partialResults.length > 0 ? '<span class="meta-item">\u25D1 ' + partialResults.length + ' partial</span>' : '') +
          '<span class="meta-item">\u2717 ' + wrongCount + ' wrong</span>' +
        '</div>' +
        '<div class="summary-actions">' +
          '<button class="restart-btn" id="restart-btn">Restart Quiz</button>' +
          '<button class="change-set-btn" id="change-set-btn-summary">Change Level</button>' +
        '</div>' +
      '</div>' +
      bd.reviewHtml +
      bd.breakdownHtml;

    summaryEl.style.display = "block";

    document.getElementById("restart-btn").addEventListener("click", function () {
      caseStudyMode = null; caseStudy = null; savedQuizState = null; casePhase = "quiz";
      init(false);
    });
    document.getElementById("change-set-btn-summary").addEventListener("click", function () {
      showSetSelection();
    });
  }

  // ── Standalone test case summary ─────────────────────────────────────────
  function showStandaloneCaseSummary() {
    const total        = shuffled.length;
    const rawScore     = score;
    const pct          = Math.round((rawScore / total) * 100);
    const fullyCorrect = results.filter(function (r) { return r.isCorrect; }).length;
    const partials     = results.filter(function (r) { return !r.isCorrect && r.partialScore > 0; });
    const wrongCount   = results.filter(function (r) { return r.partialScore === 0; }).length;

    const badge   = pct >= PASS_PCT ? "pass" : (pct >= MARGINAL_PCT ? "marginal" : "fail");
    const verdict = pct >= PASS_PCT
      ? "Great work \u2014 you scored " + pct + "% on this case study! \uD83C\uDF89"
      : pct >= MARGINAL_PCT
        ? "Almost there \u2014 you need " + PASS_PCT + "% to pass. Review the explanations and try again!"
        : "Keep studying \u2014 review the explanations below and try again.";

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

    const bd = buildBreakdownHtml(caseStudy.label, results, caseStudy.questions);

    summaryEl.innerHTML =
      '<div class="summary-card ' + badge + '">' +
        '<h2>Case Study Complete!</h2>' +
        '<p class="summary-set-label">\uD83D\uDCCB ' + caseStudy.label + ' &nbsp;&middot;&nbsp; ' + perfLabel + '</p>' +
        '<div class="score-circle">' +
          '<span class="score-number">' + pct + '%</span>' +
          '<span class="score-label">' + fullyCorrect + ' / ' + total + ' correct</span>' +
        '</div>' +
        '<p class="score-verdict">' + verdict + '</p>' +
        '<div class="summary-meta">' +
          '<span class="meta-item">\u23F1 ' + timeStr + '</span>' +
          '<span class="meta-item">\u2713 ' + fullyCorrect + ' correct</span>' +
          (partials.length > 0 ? '<span class="meta-item">\u25D1 ' + partials.length + ' partial</span>' : '') +
          '<span class="meta-item">\u2717 ' + wrongCount + ' wrong</span>' +
        '</div>' +
        '<div class="summary-actions">' +
          '<button class="restart-btn" id="restart-case-btn">Try Again</button>' +
          '<button class="change-set-btn" id="back-home-btn">Back to Menu</button>' +
        '</div>' +
      '</div>' +
      bd.reviewHtml +
      bd.breakdownHtml;

    summaryEl.style.display = "block";

    document.getElementById("restart-case-btn").addEventListener("click", function () {
      initStandaloneCase(false);
    });
    document.getElementById("back-home-btn").addEventListener("click", function () {
      showSetSelection();
    });
  }

  // ── Combined summary (70% quiz + 30% case study) ──────────────────────────
  function showCombinedSummary() {
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

    summaryEl.innerHTML =
      '<div class="summary-card ' + badge + '">' +
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

    document.getElementById("combined-restart-btn").addEventListener("click", function () {
      const cs = caseStudy;
      caseStudyMode  = "combined";
      caseStudy      = cs;
      savedQuizState = null;
      casePhase      = "quiz";
      init(false);
    });
    document.getElementById("combined-home-btn").addEventListener("click", function () {
      showSetSelection();
    });
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
  })();
})();
