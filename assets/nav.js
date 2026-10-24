// Slide order. Add new slide files here; navigation, counter and keys follow automatically.
const SLIDES = [
  "00-cover.html",
  "00-map.html",
  "c0-01-question.html",
  "c0-02-two-systems.html",
  "c0-03-heuristic-bias-fallacy.html",
  "c0-04-quiz-bat-ball.html",
  "c0-05-quiz-lily-pads.html",
  "c0-06-quiz-machines.html",
  "c0-07-not-stupidity.html",
  "c1-00-map.html",
  "c1-01-question.html",
  "c1-02-stations.html",
  "c1-03-pause.html",
  "c1-04-confirmation.html",
  "c1-05-anchoring.html",
  "c1-06-framing.html",
  "c1-07-availability.html",
  "c1-08-priming.html",
  "c1-09-groups.html",
  "c1-10-catch.html",
  "c1-11-teens.html",
  "c2-00-map.html",
  "c2-01-question.html",
  "c2-02-coins.html",
  "c2-03-streaks.html",
  "c2-04-pattern.html",
  "c2-05-story-vs-stats.html",
  "c2-06-one-story.html",
  "c2-07-generalisation.html",
  "c2-08-teleology.html",
  "c2-09-catch.html",
  "c2-10-teens.html",
  "c3-00-map.html",
  "c3-01-question.html",
  "c3-02-portraits.html",
  "c3-03-pause.html",
  "c3-04-attribution.html",
  "c3-05-projection.html",
  "c3-06-double-standards.html",
  "c3-07-negativity.html",
  "c3-08-map-day6.html",
  "c3-09-towers.html",
  "c3-10-normal.html",
  "c3-11-just-world.html",
  "c3-12-cultural.html",
  "c3-13-catch.html",
  "c3-14-teens.html",
  "c4-00-map.html",
  "c4-01-question.html",
  "c4-02-speech.html",
  "c4-03-bias-vs-fallacy.html",
  "c4-04-emotion.html",
  "c4-05-authority.html",
  "c4-06-experience.html",
  "c4-07-hunt.html",
  "c4-08-map-day5.html",
  "c4-09-auction.html",
  "c4-10-new-old.html",
  "c4-11-quiz.html",
  "c4-12-catch.html",
  "c4-13-teens.html",
  "c4-14-end.html"
];

const CHAPTER_COLOURS = ["var(--c0)", "var(--c1)", "var(--c2)", "var(--c3)", "var(--c4)"];

// First slide of each chapter: map cards and the chapters page link here.
const CHAPTER_START = ["c0-01-question.html", "c1-00-map.html", "c2-00-map.html", "c3-00-map.html", "c4-00-map.html"];

(function () {
  const file = location.pathname.split("/").pop() || SLIDES[0];
  const i = SLIDES.indexOf(file);
  const ch = document.body.dataset.chapter;
  if (ch !== undefined && CHAPTER_COLOURS[ch]) {
    document.documentElement.style.setProperty("--chap", CHAPTER_COLOURS[ch]);
  }

  // footer: prev · counter · next
  const foot = document.querySelector(".foot");
  if (foot) {
    const prev = i > 0 ? SLIDES[i - 1] : null;
    const next = i >= 0 && i < SLIDES.length - 1 ? SLIDES[i + 1] : null;
    foot.innerHTML =
      `<a href="${prev || "#"}" aria-disabled="${!prev}">← Back</a>` +
      `<span><a href="index.html" class="home">All chapters</a> ${i + 1} / ${SLIDES.length}</span>` +
      `<a href="${next || "#"}" aria-disabled="${!next}">Next →</a>`;
  }

  // step-by-step reveals before moving on
  const steps = Array.from(document.querySelectorAll(".reveal"));
  let shown = 0;
  function forward() {
    if (shown < steps.length) { steps[shown++].classList.add("on"); return; }
    if (i >= 0 && i < SLIDES.length - 1) location.href = SLIDES[i + 1];
  }
  function back() {
    if (shown > 0) { steps[--shown].classList.remove("on"); return; }
    if (i > 0) location.href = SLIDES[i - 1];
  }
  document.addEventListener("keydown", (e) => {
    if (["ArrowRight", "PageDown", " ", "Enter"].includes(e.key)) { e.preventDefault(); forward(); }
    if (["ArrowLeft", "PageUp", "Backspace"].includes(e.key)) { e.preventDefault(); back(); }
  });
  document.querySelector(".content")?.addEventListener("click", forward);

  // map slides: each chapter card opens that chapter
  document.querySelectorAll(".map .card").forEach((card, n) => {
    card.style.cursor = "pointer";
    card.addEventListener("click", (e) => { e.stopPropagation(); location.href = CHAPTER_START[n]; });
  });
})();
