// Slide order. Add new slide files here; navigation, counter and keys follow automatically.
const SLIDES = [
  "00-cover.html",
  "00-map.html",
  "c0-02-two-systems.html",
  "c0-03-heuristic-bias-fallacy.html",
  "c0-04-quiz-bat-ball.html",
  "c0-05-quiz-lily-pads.html",
  "c0-06-quiz-machines.html",
  "c0-07-not-stupidity.html",
  "c1-00-map.html",
  "c1-01-question.html",
  "c1-02-stations.html",
  "c1-07-availability.html",
  "c1-09-groups.html",
  "c1-10-catch.html",
  "c1-11-teens.html",
  "c2-00-map.html",
  "c2-01-question.html",
  "c2-02-coins.html",
  "c2-04-pattern.html",
  "c2-06-one-story.html",
  "c2-07-generalisation.html",
  "c2-08-catch.html",
  "c2-09-teens.html",
  "c3-00-map.html",
  "c3-01-question.html",
  "c3-02-portraits.html",
  "c3-04-attribution.html",
  "c3-05-projection.html",
  "c3-07-negativity.html",
  "c3-08-video-topic.html",
  "c3-09-map-day6.html",
  "c3-11-normal.html",
  "c3-13-cultural.html",
  "c3-14-catch.html",
  "c3-15-teens.html",
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
  "c4-11-teleology.html",
  "c4-12-quiz.html",
  "c4-13-catch.html",
  "c4-14-teens.html",
  "c4-15-end.html"
];

// Slide titles for the overview (O). Keep in sync when adding slides.
const TITLES = {
 "00-cover.html": "Cover",
 "00-map.html": "Map",
 "c0-01-question.html": "Why did we hear different things",
 "c0-02-two-systems.html": "Two systems",
 "c0-03-heuristic-bias-fallacy.html": "Heuristic, bias, fallacy",
 "c0-04-quiz-bat-ball.html": "Quiz: bat and ball",
 "c0-05-quiz-lily-pads.html": "Quiz: lily pads",
 "c0-06-quiz-machines.html": "Quiz: machines",
 "c0-07-not-stupidity.html": "Not stupidity",
 "c1-00-map.html": "Map: chapter 1",
 "c1-01-question.html": "What do I notice",
 "c1-02-stations.html": "Three stations",
 "c1-03-pause.html": "Pause: compare",
 "c1-04-confirmation.html": "Confirmation bias",
 "c1-05-anchoring.html": "Anchoring",
 "c1-06-framing.html": "Framing",
 "c1-07-availability.html": "Availability heuristic",
 "c1-08-priming.html": "Priming",
 "c1-09-groups.html": "Group work: find the filter",
 "c1-10-catch.html": "Catch it in yourself",
 "c1-11-teens.html": "Show it to teens",
 "c2-00-map.html": "Map: chapter 2",
 "c2-01-question.html": "How do I know that",
 "c2-02-coins.html": "Coins",
 "c2-03-streaks.html": "Streaks",
 "c2-04-pattern.html": "Illusion of pattern",
 "c2-05-story-vs-stats.html": "Story vs statistics",
 "c2-06-one-story.html": "One vivid case",
 "c2-07-generalisation.html": "Hasty generalisation",
 "c2-08-catch.html": "Catch it in yourself",
 "c2-09-teens.html": "Show it to teens",
 "c3-00-map.html": "Map: chapter 3",
 "c3-01-question.html": "Why did they do that",
 "c3-02-portraits.html": "Portraits",
 "c3-03-pause.html": "Pause: compare",
 "c3-04-attribution.html": "Fundamental attribution error",
 "c3-05-projection.html": "Projection",
 "c3-06-double-standards.html": "Double standards",
 "c3-07-negativity.html": "Negativity bias",
 "c3-08-video-topic.html": "Your team video",
 "c3-09-map-day6.html": "Map: chapter 3",
 "c3-10-towers.html": "Towers",
 "c3-11-normal.html": "What is normal",
 "c3-12-just-world.html": "Just-world belief",
 "c3-13-cultural.html": "Cultural bias",
 "c3-14-catch.html": "Catch it in yourself",
 "c3-15-teens.html": "Show it to teens",
 "c4-00-map.html": "Map: chapter 4",
 "c4-01-question.html": "Who is pushing me",
 "c4-02-speech.html": "Count the tricks",
 "c4-03-bias-vs-fallacy.html": "Bias vs fallacy",
 "c4-04-emotion.html": "Appeal to emotion",
 "c4-05-authority.html": "Appeal to authority",
 "c4-06-experience.html": "Appeal to personal experience",
 "c4-07-hunt.html": "Hunt for tricks",
 "c4-08-map-day5.html": "Map: chapter 4",
 "c4-09-auction.html": "Method auction",
 "c4-10-new-old.html": "Novelty and tradition",
 "c4-11-teleology.html": "Teleology",
 "c4-12-quiz.html": "Quiz: name the trick",
 "c4-13-catch.html": "Catch it in yourself",
 "c4-14-teens.html": "Show it to teens",
 "c4-15-end.html": "End"
};

const CHAPTER_COLOURS = ["var(--c0)", "var(--c1)", "var(--c2)", "var(--c3)", "var(--c4)"];

// First slide of each chapter: map cards and the chapters page link here.
const CHAPTER_START = ["c0-02-two-systems.html", "c1-00-map.html", "c2-00-map.html", "c3-00-map.html", "c4-00-map.html"];

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
  // N: trainer note (the first HTML comment in <body>)
  const noteText = Array.from(document.body.childNodes).find((n) => n.nodeType === 8)?.textContent.trim();
  const note = document.createElement("aside");
  note.className = "note";
  note.textContent = noteText || "";
  document.body.appendChild(note);

  // O: overview of the current chapter, with links to the other chapters
  const chapterOf = (f) => (/^c(\d)-/.exec(f) || [0, 0])[1] * 1;
  const here = chapterOf(file === "index.html" ? SLIDES[0] : file);
  const ov = document.createElement("div");
  ov.className = "overview";
  ov.hidden = true;
  ov.innerHTML =
    `<div class="ov-panel"><div class="ov-chapters">` +
    CHAPTER_START.map((f, n) => `<a href="${f}"${n === here ? ' aria-current="true"' : ""}>${n}</a>`).join("") +
    `<a href="index.html">All chapters</a></div><ol class="ov-list">` +
    SLIDES.map((f, n) => [f, n]).filter(([f]) => chapterOf(f) === here)
      .map(([f, n]) => `<li><a href="${f}"${f === file ? ' aria-current="true"' : ""}><b>${n + 1}</b> ${TITLES[f] || f}</a></li>`).join("") +
    `</ol><p class="ov-keys">← → move · N notes · F fullscreen · O close</p></div>`;
  document.body.appendChild(ov);
  ov.addEventListener("click", (e) => { if (e.target === ov) ov.hidden = true; });

  document.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key.toLowerCase();
    if (k === "o" || (k === "escape" && !ov.hidden)) { ov.hidden = !ov.hidden || k === "escape"; return; }
    if (!ov.hidden) return;
    if (k === "n") { document.body.classList.toggle("notes"); return; }
    if (k === "f") {
      if (document.fullscreenElement) document.exitFullscreen?.();
      else document.documentElement.requestFullscreen?.().catch(() => {});
      return;
    }
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
