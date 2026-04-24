const candidates = {
  maria: {
    name: "Maria Chen",
    priority: "High upside",
    summary:
      "Strong project depth and unusually reliable follow-through indicate this student is more promising than current recruiter ranking suggests.",
    metrics: [
      { value: "+27", label: "latent potential" },
      { value: "5d", label: "intervention window" },
      { value: "91%", label: "confidence" }
    ],
    reasons: [
      "Technical project evidence is stronger than profile polish.",
      "Reply consistency signals high reliability.",
      "Interview growth trend is accelerating over 3 weeks."
    ],
    action:
      "Move Maria into the recruiter shortlist and send a coach note to strengthen portfolio visibility before the next review cycle.",
    primaryAction: "Promote to shortlist",
    secondaryAction: "Queue coach outreach",
    breakdown: [
      {
        label: "Project depth",
        text: "Applied work demonstrates stronger execution than the profile suggests.",
        score: 92
      },
      {
        label: "Reliability",
        text: "Reply speed and follow-through patterns remain unusually consistent.",
        score: 89
      },
      {
        label: "Role alignment",
        text: "Recent behavior maps closely to recruiter demand in adjacent roles.",
        score: 81
      }
    ],
    timeline: [48, 66, 86, 58],
    timelineCaption:
      "Signal quality is climbing fast enough that waiting another week would likely understate Maria's true recruiter readiness.",
    mode: "Potential mode"
  },
  omar: {
    name: "Omar Rahman",
    priority: "Drop-off risk",
    summary:
      "Application momentum is fading after a strong start, and behavioral changes suggest this student could disappear from the funnel without intervention.",
    metrics: [
      { value: "+18", label: "risk increase" },
      { value: "Now", label: "coach outreach" },
      { value: "84%", label: "confidence" }
    ],
    reasons: [
      "Response latency jumped sharply after interview round two.",
      "Application completions declined despite steady role views.",
      "Coach engagement dropped at the same time confidence signals weakened."
    ],
    action:
      "Trigger immediate coach outreach, reduce application friction, and route Omar into a lower-lift support flow this week.",
    primaryAction: "Launch intervention",
    secondaryAction: "Reduce application friction",
    breakdown: [
      {
        label: "Response decay",
        text: "Reply behavior weakened sharply after the second interview stage.",
        score: 86
      },
      {
        label: "Completion risk",
        text: "Application completion is falling despite healthy intent signals.",
        score: 82
      },
      {
        label: "Support urgency",
        text: "Behavior suggests a fast coach touchpoint could still reverse the trend.",
        score: 78
      }
    ],
    timeline: [82, 76, 54, 34],
    timelineCaption:
      "Momentum is deteriorating quickly enough that delay now creates a real risk of silent funnel exit.",
    mode: "Risk mode"
  },
  jules: {
    name: "Jules Vega",
    priority: "Path shift",
    summary:
      "The student's current search path is too narrow. Live signals point toward a stronger fit in adjacent operations and success roles.",
    metrics: [
      { value: "3", label: "adjacent roles" },
      { value: "92%", label: "fit confidence" },
      { value: "+11", label: "pathway gain" }
    ],
    reasons: [
      "Communication patterns align better with customer-facing work.",
      "Project evidence shows systems thinking and cross-functional coordination.",
      "Application outcomes are stronger in adjacent role families."
    ],
    action:
      "Open a pathway shift recommendation, refresh saved roles, and present Jules with a clearer opportunity set tied to actual evidence.",
    primaryAction: "Recommend new pathway",
    secondaryAction: "Refresh saved roles",
    breakdown: [
      {
        label: "Communication fit",
        text: "Behavior patterns map better to customer-facing role families.",
        score: 90
      },
      {
        label: "Systems thinking",
        text: "Project evidence shows process fluency and cross-functional instincts.",
        score: 84
      },
      {
        label: "Path adjacency",
        text: "Nearby roles outperform the current lane on both fit and likely outcomes.",
        score: 88
      }
    ],
    timeline: [42, 49, 62, 79],
    timelineCaption:
      "Role-fit confidence is increasing because the system is seeing stronger alignment outside the student's current self-selected lane.",
    mode: "Pathway mode"
  },
  anika: {
    name: "Anika Bose",
    priority: "Momentum rising",
    summary:
      "Coach-guided portfolio improvements are changing how the market is likely to read this student, creating a narrow window to amplify visibility.",
    metrics: [
      { value: "+16", label: "visibility gain" },
      { value: "3d", label: "best timing" },
      { value: "88%", label: "confidence" }
    ],
    reasons: [
      "Portfolio quality increased across the last two review cycles.",
      "Response behavior is stabilizing after prior inconsistency.",
      "Employer-facing evidence now looks much stronger than two weeks ago."
    ],
    action:
      "Boost recruiter visibility now, then reinforce the portfolio narrative while the positive trend is still compounding.",
    primaryAction: "Boost recruiter visibility",
    secondaryAction: "Send reinforcement guide",
    breakdown: [
      {
        label: "Portfolio quality",
        text: "Recent revisions meaningfully improved readability and evidence density.",
        score: 87
      },
      {
        label: "Momentum trend",
        text: "The student's trajectory is accelerating across recent coaching cycles.",
        score: 83
      },
      {
        label: "Exposure timing",
        text: "The next few days are ideal for visibility while the trend is still compounding.",
        score: 80
      }
    ],
    timeline: [30, 46, 61, 74],
    timelineCaption:
      "Anika's progress is still compounding, which makes this an ideal moment to increase exposure rather than wait for more proof.",
    mode: "Potential mode"
  },
  liam: {
    name: "Liam Ortiz",
    priority: "Coach review",
    summary:
      "Coach review is needed because the signal mix is promising but noisy, and the system needs a human check before elevating this student further.",
    metrics: [
      { value: "7", label: "missing proofs" },
      { value: "2d", label: "review target" },
      { value: "76%", label: "confidence" }
    ],
    reasons: [
      "Role interest is broad but supporting evidence remains uneven.",
      "Signal quality is promising, but project depth is inconsistently documented.",
      "A coach can likely unlock clearer positioning with a small intervention."
    ],
    action:
      "Route Liam into fast coach review, clarify strongest lane, and request missing work samples before broader recruiter exposure.",
    primaryAction: "Start coach review",
    secondaryAction: "Request work samples",
    breakdown: [
      {
        label: "Evidence quality",
        text: "Signals are promising, but the strongest proof points are still incomplete.",
        score: 72
      },
      {
        label: "Profile clarity",
        text: "Broader role interest is diluting the student's clearest narrative.",
        score: 68
      },
      {
        label: "Coach leverage",
        text: "A small amount of human review could unlock a much sharper positioning story.",
        score: 81
      }
    ],
    timeline: [34, 38, 44, 55],
    timelineCaption:
      "The trend is improving, but not enough to justify automatic promotion without a quick human review.",
    mode: "Review mode"
  }
};

const candidateNameEl = document.querySelector("#candidateName");
const candidatePriorityEl = document.querySelector("#candidatePriority");
const candidateSummaryEl = document.querySelector("#candidateSummary");
const metricOneValueEl = document.querySelector("#metricOneValue");
const metricOneLabelEl = document.querySelector("#metricOneLabel");
const metricTwoValueEl = document.querySelector("#metricTwoValue");
const metricTwoLabelEl = document.querySelector("#metricTwoLabel");
const metricThreeValueEl = document.querySelector("#metricThreeValue");
const metricThreeLabelEl = document.querySelector("#metricThreeLabel");
const reasonListEl = document.querySelector("#reasonList");
const actionTextEl = document.querySelector("#actionText");
const primaryActionEl = document.querySelector("#primaryAction");
const secondaryActionEl = document.querySelector("#secondaryAction");
const modePillEl = document.querySelector("#modePill");
const modeToggleEl = document.querySelector("#modeToggle");
const queueItemEls = document.querySelectorAll(".queue-item");
const graphNodeEls = document.querySelectorAll(".graph-node");
const timelineBarsEl = document.querySelector("#timelineBars");
const timelineCaptionEl = document.querySelector("#timelineCaption");
const coachSliderEl = document.querySelector("#coachSlider");
const visibilitySliderEl = document.querySelector("#visibilitySlider");
const simLiftEl = document.querySelector("#simLift");
const simOutcomeEl = document.querySelector("#simOutcome");
const breakdownListEl = document.querySelector("#breakdownList");
const activityListEl = document.querySelector("#activityList");
const feedCountEl = document.querySelector("#feedCount");

let currentCandidateKey = "maria";
let currentMode = "potential";
const activityFeed = [
  {
    title: "Maria Chen surfaced for recruiter shortlist",
    text: "Potential score jumped after new project and stronger interview trend."
  },
  {
    title: "Omar Rahman flagged for intervention review",
    text: "Reply latency and completion drop triggered risk workflow."
  },
  {
    title: "Jules Vega received alternate pathway recommendation",
    text: "Operations-adjacent roles now outperform current search lane."
  }
];

function renderActivityFeed() {
  activityListEl.innerHTML = activityFeed
    .map(
      (item) => `
        <article class="activity-item">
          <strong>${item.title}</strong>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");

  feedCountEl.textContent = `${activityFeed.length} events`;
}

function renderTimeline(values) {
  timelineBarsEl.innerHTML = values
    .map((value, index) => {
      const active = index < 3 ? " active" : "";
      return `
        <div class="timeline-bar${active}" style="height: ${value}%;">
          <span>Week ${index + 1}</span>
        </div>
      `;
    })
    .join("");
}

function renderCandidate(key) {
  const candidate = candidates[key];

  if (!candidate) {
    return;
  }

  currentCandidateKey = key;
  candidateNameEl.textContent = candidate.name;
  candidatePriorityEl.textContent = candidate.priority;
  candidateSummaryEl.textContent = candidate.summary;
  metricOneValueEl.textContent = candidate.metrics[0].value;
  metricOneLabelEl.textContent = candidate.metrics[0].label;
  metricTwoValueEl.textContent = candidate.metrics[1].value;
  metricTwoLabelEl.textContent = candidate.metrics[1].label;
  metricThreeValueEl.textContent = candidate.metrics[2].value;
  metricThreeLabelEl.textContent = candidate.metrics[2].label;
  actionTextEl.textContent = candidate.action;
  primaryActionEl.textContent = candidate.primaryAction;
  secondaryActionEl.textContent = candidate.secondaryAction;
  modePillEl.textContent = candidate.mode;
  timelineCaptionEl.textContent = candidate.timelineCaption;
  breakdownListEl.innerHTML = candidate.breakdown
    .map(
      (item) => `
        <article class="breakdown-item">
          <div>
            <strong>${item.label}</strong>
            <p>${item.text}</p>
          </div>
          <span>${item.score}</span>
        </article>
      `
    )
    .join("");

  reasonListEl.innerHTML = candidate.reasons.map((reason) => `<li>${reason}</li>`).join("");
  renderTimeline(candidate.timeline);

  queueItemEls.forEach((item) => {
    item.classList.toggle("active", item.dataset.candidate === key);
  });

  graphNodeEls.forEach((node) => {
    node.classList.toggle("active", node.dataset.candidate === key);
  });
}

function updateSimulation() {
  const coach = Number(coachSliderEl.value);
  const visibility = Number(visibilitySliderEl.value);
  const lift = 4 + coach * 2 + visibility;
  const outcome = (1 + coach * 0.18 + visibility * 0.19).toFixed(1);

  simLiftEl.textContent = `+${lift}%`;
  simOutcomeEl.textContent = `${outcome}x`;
}

function rotateMode() {
  const order = ["potential", "risk", "path"];
  const nextIndex = (order.indexOf(currentMode) + 1) % order.length;
  currentMode = order[nextIndex];

  if (currentMode === "potential") {
    renderCandidate("maria");
    modeToggleEl.textContent = "Switch to risk mode";
    return;
  }

  if (currentMode === "risk") {
    renderCandidate("omar");
    modeToggleEl.textContent = "Switch to pathway mode";
    return;
  }

  renderCandidate("jules");
  modeToggleEl.textContent = "Switch to potential mode";
}

function logAction(message, detail) {
  activityFeed.unshift({
    title: message,
    text: detail
  });

  if (activityFeed.length > 6) {
    activityFeed.pop();
  }

  renderActivityFeed();
}

queueItemEls.forEach((item) => {
  item.addEventListener("click", () => renderCandidate(item.dataset.candidate));
});

graphNodeEls.forEach((node) => {
  node.addEventListener("click", () => renderCandidate(node.dataset.candidate));
});

coachSliderEl.addEventListener("input", updateSimulation);
visibilitySliderEl.addEventListener("input", updateSimulation);
modeToggleEl.addEventListener("click", rotateMode);
primaryActionEl.addEventListener("click", () => {
  const candidate = candidates[currentCandidateKey];
  logAction(
    `${candidate.name}: ${candidate.primaryAction}`,
    `SignalOS recorded a primary workflow decision for ${candidate.name.toLowerCase()}.`
  );
});
secondaryActionEl.addEventListener("click", () => {
  const candidate = candidates[currentCandidateKey];
  logAction(
    `${candidate.name}: ${candidate.secondaryAction}`,
    `A secondary follow-up action was queued to support ${candidate.name.toLowerCase()}'s next step.`
  );
});

renderCandidate("maria");
renderActivityFeed();
updateSimulation();
