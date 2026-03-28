(function () {
  "use strict";

  // ── Question sets ────────────────────────────────────────────────────────
  const QUESTION_SETS = [
    {
      key: "set1",
      label: "Advanced Practice Questions",
      description: "100 challenging scenario-based questions covering all MB-820 exam topics.",
      data: questions
    },
    {
      key: "set2",
      label: "Foundation Practice Questions",
      description: "100 concept-focused questions covering Business Central fundamentals and developer topics.",
      data: questionsSet2
    }
  ];

  // ── State ────────────────────────────────────────────────────────────────
  let activeSet  = null; // one of QUESTION_SETS entries
  let current    = 0;
  let score      = 0;
  let answered   = false;
  let shuffled   = [];
  let results    = []; // {questionId, isCorrect, selected, correct}

  // ── DOM refs ─────────────────────────────────────────────────────────────
  const setSelectionEl = document.getElementById("set-selection");
  const questionEl     = document.getElementById("question");
  const choicesEl      = document.getElementById("choices");
  const nextBtn        = document.getElementById("next-button");
  const summaryEl      = document.getElementById("score-summary");

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
        results: results
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
        results: Array.isArray(saved.results) ? saved.results : []
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
    setSelectionEl.style.display = "block";
    questionEl.innerHTML         = "";
    choicesEl.innerHTML          = "";
    nextBtn.style.display        = "none";
    summaryEl.style.display      = "none";
    document.getElementById("quiz-container").classList.remove("finished");

    let html = '<div class="set-selection-wrapper">' +
      '<h2 class="set-selection-title">Choose a Question Set</h2>' +
      '<div class="set-cards">';

    QUESTION_SETS.forEach(function (set) {
      const saved = loadProgress(set);
      const hasSaved = saved && saved.current > 0 && saved.current < saved.shuffled.length;
      html +=
        '<div class="set-card" data-key="' + set.key + '">' +
          '<div class="set-card-header">' +
            '<span class="set-card-title">' + set.label + '</span>' +
            '<span class="set-card-count">' + set.data.length + ' questions</span>' +
          '</div>' +
          '<p class="set-card-desc">' + set.description + '</p>' +
          (hasSaved
            ? '<p class="set-card-resume">⏸ Saved progress: question ' + (saved.current + 1) + ' of ' + saved.shuffled.length + ' (' + saved.score + ' correct)</p>'
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
        shuffled = saved.shuffled;
        current  = saved.current;
        score    = saved.score;
        results  = saved.results;
        renderQuestion();
        return;
      }
    }

    // Fresh start
    clearProgress();
    shuffled = shuffle(activeSet.data);
    current  = 0;
    score    = 0;
    results  = [];
    renderQuestion();
  }

  // ── Resume prompt ─────────────────────────────────────────────────────────
  function showResumePrompt(saved) {
    questionEl.innerHTML =
      '<div class="resume-prompt">' +
        '<h2>Resume Quiz?</h2>' +
        '<p>You were on question <strong>' + (saved.current + 1) + ' of ' + saved.shuffled.length + '</strong> ' +
        'with <strong>' + saved.score + ' correct</strong> so far.</p>' +
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

    // Save progress after each answer
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
    questionEl.innerHTML  = "";
    choicesEl.innerHTML   = "";
    nextBtn.style.display = "none";
    document.getElementById("quiz-container").classList.add("finished");

    const total     = shuffled.length;
    const correct   = score;
    const incorrect = total - correct;
    const pct    = Math.round((correct / total) * 100);
    const badge  = pct >= 70 ? "pass" : (pct >= 50 ? "marginal" : "fail");
    const verdict = pct >= 70
      ? "Great work \u2014 you\u2019re ready for MB-820! \uD83C\uDF89"
      : "Keep studying \u2014 review the explanations and try again.";

    // Build per-question breakdown
    const qMap = {};
    activeSet.data.forEach(function (q) { qMap[q.id] = q; });

    // Separate correct and incorrect results
    const incorrectResults = results.filter(function (r) { return !r.isCorrect; });

    let incorrectHtml = "";
    if (incorrectResults.length > 0) {
      incorrectHtml = '<div class="breakdown">' +
        '<h3 class="breakdown-title">\u2717 Questions to Review (' + incorrectResults.length + ')</h3>' +
        '<ol class="breakdown-list">';

      incorrectResults.forEach(function (r) {
        const q = qMap[r.questionId];
        if (!q) return;
        // Find the original 1-based position of this result in the full results array
        const originalPos = results.findIndex(function (res) { return res.questionId === r.questionId; }) + 1;
        const correctLabels = r.correct.map(function (ci) { return q.choices[ci]; }).join(", ");
        incorrectHtml +=
          '<li class="bd-item bd-incorrect">' +
            '<span class="bd-icon">\u2717</span>' +
            '<div class="bd-content">' +
              '<p class="bd-question">Q' + originalPos + '. ' + q.text + '</p>' +
              '<p class="bd-answer">Correct answer: <em>' + correctLabels + '</em></p>' +
            '</div>' +
          '</li>';
      });

      incorrectHtml += '</ol></div>';
    }

    let breakdownHtml = '<div class="breakdown">' +
      '<h3 class="breakdown-title">Question Breakdown</h3>' +
      '<div class="breakdown-stats">' +
        '<span class="bd-stat correct-stat">\u2713 Correct: ' + correct + '</span>' +
        '<span class="bd-stat incorrect-stat">\u2717 Incorrect: ' + incorrect + '</span>' +
        '<span class="bd-stat total-stat">Total: ' + total + '</span>' +
      '</div>' +
      '<ol class="breakdown-list">';

    results.forEach(function (r, idx) {
      const q = qMap[r.questionId];
      if (!q) return;
      const icon = r.isCorrect ? "\u2713" : "\u2717";
      const cls  = r.isCorrect ? "bd-correct" : "bd-incorrect";
      const correctLabels = r.correct.map(function (ci) { return q.choices[ci]; }).join(", ");
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
        '<p class="summary-set-label">' + activeSet.label + '</p>' +
        '<div class="score-circle">' +
          '<span class="score-number">' + pct + '%</span>' +
          '<span class="score-label">' + correct + ' / ' + total + ' correct</span>' +
        '</div>' +
        '<p class="score-verdict">' + verdict + '</p>' +
        '<div class="summary-actions">' +
          '<button class="restart-btn" id="restart-btn">Restart Quiz</button>' +
          '<button class="change-set-btn" id="change-set-btn-summary">Change Set</button>' +
        '</div>' +
      '</div>' +
      incorrectHtml +
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
  // Check for saved progress in any set; if found in exactly one set, prompt resume there.
  // Otherwise show the set selection screen.
  (function boot() {
    // Detect if there's a legacy save key (old format, before sets were introduced)
    // and migrate it to set1 (only if set1 key doesn't already exist)
    try {
      const legacyRaw = localStorage.getItem("mb820_quiz_progress");
      if (legacyRaw && !localStorage.getItem("mb820_quiz_progress_set1")) {
        localStorage.setItem("mb820_quiz_progress_set1", legacyRaw);
      }
      if (legacyRaw) {
        localStorage.removeItem("mb820_quiz_progress");
      }
    } catch (e) { /* ignore */ }

    // Find sets that have saved in-progress state
    const setsWithProgress = QUESTION_SETS.filter(function (set) {
      const saved = loadProgress(set);
      return saved && saved.current > 0 && saved.current < saved.shuffled.length;
    });

    if (setsWithProgress.length === 1) {
      // Only one set has progress — go straight to that set's resume prompt
      activeSet = setsWithProgress[0];
      const saved = loadProgress(activeSet);
      showResumePrompt(saved);
    } else {
      // No progress or multiple sets have progress — show set selection
      showSetSelection();
    }
  })();
})();
