(function () {
  "use strict";

  // ── State ────────────────────────────────────────────────────────────────
  let current  = 0;
  let score    = 0;
  let answered = false;
  let shuffled = [];

  // ── DOM refs ─────────────────────────────────────────────────────────────
  const questionEl = document.getElementById("question");
  const choicesEl  = document.getElementById("choices");
  const nextBtn    = document.getElementById("next-button");
  const summaryEl  = document.getElementById("score-summary");

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

  // ── Init ─────────────────────────────────────────────────────────────────
  function init() {
    shuffled = shuffle(questions);
    current  = 0;
    score    = 0;
    summaryEl.style.display = "none";
    document.getElementById("quiz-container").classList.remove("finished");
    renderQuestion();
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
      renderQuestion();
    } else {
      showSummary();
    }
  });

  // ── Summary ───────────────────────────────────────────────────────────────
  function showSummary() {
    questionEl.innerHTML  = "";
    choicesEl.innerHTML   = "";
    nextBtn.style.display = "none";
    document.getElementById("quiz-container").classList.add("finished");

    const pct   = Math.round((score / shuffled.length) * 100);
    const badge = pct >= 70 ? "pass" : (pct >= 50 ? "marginal" : "fail");
    const verdict = pct >= 70
      ? "Great work \u2014 you\u2019re ready for MB-820! \uD83C\uDF89"
      : "Keep studying \u2014 review the explanations and try again.";

    summaryEl.innerHTML =
      '<div class="summary-card ' + badge + '">' +
        '<h2>Quiz Complete!</h2>' +
        '<div class="score-circle">' +
          '<span class="score-number">' + pct + '%</span>' +
          '<span class="score-label">' + score + ' / ' + shuffled.length + ' correct</span>' +
        '</div>' +
        '<p class="score-verdict">' + verdict + '</p>' +
        '<button class="restart-btn" id="restart-btn">Restart Quiz</button>' +
      '</div>';

    summaryEl.style.display = "block";

    document.getElementById("restart-btn").addEventListener("click", init);
  }

  // ── Boot ─────────────────────────────────────────────────────────────────
  init();
})();
