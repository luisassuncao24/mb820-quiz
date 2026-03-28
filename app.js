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
    }
  ];

  const TIMER_DURATION       = 120 * 60; // 120 minutes in seconds
  const TIMER_WARNING_MINS   = 30;       // yellow threshold
  const TIMER_CRITICAL_MINS  = 10;       // red threshold

  // ── State ────────────────────────────────────────────────────────────────
  let activeSet     = null; // one of QUESTION_SETS entries
  let current       = 0;
  let score         = 0;
  let answered      = false;
  let shuffled      = [];
  let results       = []; // {questionId, isCorrect, selected, correct}
  let timerSeconds  = TIMER_DURATION;
  let timerInterval = null;

  // ── DOM refs ─────────────────────────────────────────────────────────────
  const setSelectionEl = document.getElementById("set-selection");
  const questionEl     = document.getElementById("question");
  const choicesEl      = document.getElementById("choices");
  const nextBtn        = document.getElementById("next-button");
  const summaryEl      = document.getElementById("score-summary");
  const timerEl        = document.getElementById("timer-display");

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
    return "mb820_quiz_progress_" + activeSet.key;
  }

  function saveProgress() {
    try {
      localStorage.setItem(saveKey(), JSON.stringify({
        shuffledIds: shuffled.map(function (q) { return q.id; }),
        current: current,
        score: score,
        results: results,
        timerSeconds: timerSeconds
      }));
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
      proficient:   { icon: "\uD83D\uDD34", label: "Proficient",   cls: "diff-proficient" }
    };

    let html = '<div class="set-selection-wrapper">' +
      '<h2 class="set-selection-title">Choose a Difficulty Level</h2>' +
      '<p class="set-selection-sub">Each quiz has a 120-minute countdown timer.</p>' +
      '<div class="set-cards">';

    QUESTION_SETS.forEach(function (set) {
      const saved   = loadProgress(set);
      const hasSaved = saved && Array.isArray(saved.results) && saved.results.length > 0 && saved.results.length < saved.shuffled.length;
      const meta    = difficultyMeta[set.difficulty] || {};
      const savedTimer = hasSaved ? saved.timerSeconds : null;
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
              ' \u2014 ' + saved.score + ' correct' +
              (savedTimer !== null ? ' \u2014 \u23F1 ' + formatTime(savedTimer) + ' left' : '') + '</p>'
            : '') +
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

    html += '</div></div>';
    setSelectionEl.innerHTML = html;

    setSelectionEl.querySelectorAll(".resume-set-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const key = btn.dataset.key;
        activeSet = QUESTION_SETS.find(function (s) { return s.key === key; });
        init(true);
      });
    });

    setSelectionEl.querySelectorAll(".start-set-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const key = btn.dataset.key;
        activeSet = QUESTION_SETS.find(function (s) { return s.key === key; });
        init(false);
      });
    });
  }

  // ── Init ─────────────────────────────────────────────────────────────────
  function init(resume) {
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

  // ── Resume prompt ─────────────────────────────────────────────────────────
  function showResumePrompt(saved) {
    const nextQuestion = saved.results.length + 1;
    const timerInfo = typeof saved.timerSeconds === "number"
      ? ' with <strong>' + formatTime(saved.timerSeconds) + '</strong> remaining on the clock'
      : '';
    questionEl.innerHTML =
      '<div class="resume-prompt">' +
        '<h2>Resume Quiz?</h2>' +
        '<p>You were on question <strong>' + nextQuestion + ' of ' + saved.shuffled.length + '</strong> ' +
        'with <strong>' + saved.score + ' correct</strong>' + timerInfo + '.</p>' +
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

    questionEl.innerHTML =
      '<div class="progress">Question ' + (current + 1) + ' of ' + shuffled.length + '</div>' +
      '<div class="question-type-badge ' + (q.type === "multiple" ? "multiple" : "single") + '">' +
        (q.type === "multiple" ? "Multiple Choice \u2014 select all that apply" : "Single Choice") +
      '</div>' +
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
          submitAnswer(q, [parseInt(input.value, 10)]);
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

    if (q.type === "multiple") {
      const submitBtn = document.createElement("button");
      submitBtn.className   = "submit-btn";
      submitBtn.textContent = "Submit Answer";
      submitBtn.addEventListener("click", function () {
        onSubmitMultiple(q);
      });
      choicesEl.appendChild(submitBtn);
    }
  }

  // ── Interaction ──────────────────────────────────────────────────────────
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

    const isCorrect = arraysEqual(
      selected.slice().sort(function (a, b) { return a - b; }),
      q.correct.slice().sort(function (a, b) { return a - b; })
    );
    if (isCorrect) score++;

    // Record result for summary
    results.push({ questionId: q.id, isCorrect: isCorrect, selected: selected, correct: q.correct });

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

    // Disable submit button for multiple-choice
    const submitBtn = choicesEl.querySelector(".submit-btn");
    if (submitBtn) submitBtn.disabled = true;

    // Explanation
    const exp = document.createElement("div");
    exp.className = "explanation " + (isCorrect ? "correct-exp" : "incorrect-exp");
    exp.innerHTML =
      "<strong>" + (isCorrect ? "\u2713 Correct!" : "\u2717 Incorrect") + "</strong><br>" +
      q.explanation;
    choicesEl.appendChild(exp);

    nextBtn.style.display  = "inline-block";
    nextBtn.textContent    = (current + 1 < shuffled.length) ? "Next Question \u2192" : "See Results";

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
      showSummary();
    }
  });

  // ── Summary ───────────────────────────────────────────────────────────────
  function showSummary() {
    hideTimer();
    questionEl.innerHTML  = "";
    choicesEl.innerHTML   = "";
    nextBtn.style.display = "none";
    document.getElementById("quiz-container").classList.add("finished");

    const total     = shuffled.length;
    const correct   = score;
    const incorrect = total - correct;
    const pct       = Math.round((correct / total) * 100);
    const badge     = pct >= 70 ? "pass" : (pct >= 50 ? "marginal" : "fail");
    const verdict   = pct >= 70
      ? "Great work \u2014 you\u2019re ready for MB-820! \uD83C\uDF89"
      : pct >= 50
        ? "Almost there \u2014 review the explanations and try again!"
        : "Keep studying \u2014 review the explanations and try again.";

    const timeTaken   = TIMER_DURATION - timerSeconds;
    const timeExpired = timerSeconds === 0;
    const timeStr     = timeExpired
      ? "Time expired (" + formatTime(TIMER_DURATION) + " used)"
      : formatTime(timeTaken) + " used (" + formatTime(timerSeconds) + " remaining)";

    // Performance label
    let perfLabel = "";
    if (pct >= 90)      perfLabel = "\uD83C\uDFC6 Excellent";
    else if (pct >= 70) perfLabel = "\u2705 Pass";
    else if (pct >= 50) perfLabel = "\u26A0\uFE0F Marginal";
    else                perfLabel = "\u274C Needs Work";

    // Difficulty info
    const difficultyMeta = {
      beginner:     { icon: "\uD83D\uDFE2", label: "Beginner" },
      intermediate: { icon: "\uD83D\uDFE1", label: "Intermediate" },
      proficient:   { icon: "\uD83D\uDD34", label: "Proficient" }
    };
    const dmeta = difficultyMeta[activeSet.difficulty] || { icon: "", label: "" };

    // Build per-question breakdown
    const qMap = {};
    activeSet.data.forEach(function (q) { qMap[q.id] = q; });

    // Separate correct and incorrect results
    const incorrectResults = results.filter(function (r) { return !r.isCorrect; });

    // ── Questions to Review section ──────────────────────────────────────
    let reviewHtml = "";
    if (incorrectResults.length > 0) {
      reviewHtml = '<div class="breakdown">' +
        '<h3 class="breakdown-title">\u26A0\uFE0F Questions to Review (' + incorrectResults.length + ')</h3>' +
        '<ol class="breakdown-list">';

      incorrectResults.forEach(function (r) {
        const q = qMap[r.questionId];
        if (!q) return;
        const originalPos = results.findIndex(function (res) { return res.questionId === r.questionId; }) + 1;
        const correctLabels = r.correct.map(function (ci) {
          return ci >= 0 && ci < q.choices.length ? q.choices[ci] : "?";
        }).join("; ");
        const selectedLabels = r.selected.map(function (ci) {
          return ci >= 0 && ci < q.choices.length ? q.choices[ci] : "?";
        }).join("; ");
        reviewHtml +=
          '<li class="bd-item bd-incorrect">' +
            '<span class="bd-icon">\u2717</span>' +
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
      reviewHtml = '<div class="breakdown"><p class="all-correct">\uD83C\uDF1F Perfect score \u2014 you answered every question correctly!</p></div>';
    }

    // ── Full breakdown ───────────────────────────────────────────────────
    let breakdownHtml = '<div class="breakdown">' +
      '<h3 class="breakdown-title">Full Question Breakdown</h3>' +
      '<div class="breakdown-stats">' +
        '<span class="bd-stat correct-stat">\u2713 Correct: ' + correct + '</span>' +
        '<span class="bd-stat incorrect-stat">\u2717 Incorrect: ' + incorrect + '</span>' +
        '<span class="bd-stat total-stat">Total: ' + total + '</span>' +
        '<span class="bd-stat pct-stat">' + pct + '%</span>' +
      '</div>' +
      '<ol class="breakdown-list">';

    results.forEach(function (r, idx) {
      const q = qMap[r.questionId];
      if (!q) return;
      const icon = r.isCorrect ? "\u2713" : "\u2717";
      const cls  = r.isCorrect ? "bd-correct" : "bd-incorrect";
      const correctLabels  = r.correct.map(function (ci) {
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

    summaryEl.innerHTML =
      '<div class="summary-card ' + badge + '">' +
        '<h2>Quiz Complete!</h2>' +
        '<p class="summary-set-label">' +
          dmeta.icon + ' ' + activeSet.label + ' &nbsp;&middot;&nbsp; ' + perfLabel +
        '</p>' +
        '<div class="score-circle">' +
          '<span class="score-number">' + pct + '%</span>' +
          '<span class="score-label">' + correct + ' / ' + total + ' correct</span>' +
        '</div>' +
        '<p class="score-verdict">' + verdict + '</p>' +
        '<div class="summary-meta">' +
          '<span class="meta-item">\u23F1 ' + timeStr + '</span>' +
          '<span class="meta-item">\u2713 ' + correct + ' correct</span>' +
          '<span class="meta-item">\u2717 ' + incorrect + ' incorrect</span>' +
        '</div>' +
        '<div class="summary-actions">' +
          '<button class="restart-btn" id="restart-btn">Restart Quiz</button>' +
          '<button class="change-set-btn" id="change-set-btn-summary">Change Level</button>' +
        '</div>' +
      '</div>' +
      reviewHtml +
      breakdownHtml;

    summaryEl.style.display = "block";

    document.getElementById("restart-btn").addEventListener("click", function () {
      init(false);
    });
    document.getElementById("change-set-btn-summary").addEventListener("click", function () {
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
      activeSet = setsWithProgress[0];
      const saved = loadProgress(activeSet);
      showResumePrompt(saved);
    } else {
      showSetSelection();
    }
  })();
})();
