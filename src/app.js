const artifacts = {
  seed: {
    mode: "memory",
    name: "Memory Seed",
    summary:
      "A translucent capsule used to store one unrepeatable feeling before it vanished from public life.",
    noteLeft: "Found in homes built after weather migration.",
    noteRight: "People carried emotions as objects when language became unreliable.",
    storyTitle: "The Memory Seed belonged to a city learning how to grieve.",
    storyCopy:
      "People in this future lived through too much change too quickly. They built tiny devices that preserved feelings the way older civilizations preserved photographs.",
    metrics: {
      emotion: 87,
      strangeness: 72,
      beauty: 91
    },
    bullets: [
      "Children learned to catalog sensations before they learned history.",
      "Private grief became a civic design problem.",
      "The rarest luxury was an emotion that stayed intact over time."
    ],
    impactTitle: "The future object is never random.",
    impactCopy:
      "It is a fossil of whatever the culture was desperate to protect, repair, or make survivable.",
    year: 2086,
    tone: "Tender",
    risk: "Unstable",
    shapeClass: "artifact-shape artifact-seed"
  },
  choir: {
    mode: "ritual",
    name: "Weather Choir",
    summary:
      "A pane of tuned glass that hummed before storms, letting neighborhoods rehearse danger together.",
    noteLeft: "Recovered near rooftop gardens suspended over flood canals.",
    noteRight: "Some futures replaced alerts with communal listening rituals.",
    storyTitle: "The Weather Choir turned forecasting into ceremony.",
    storyCopy:
      "In this world, prediction was not enough. People needed beauty in order to listen to danger, so instruments became the interface between climate and community.",
    metrics: {
      emotion: 69,
      strangeness: 89,
      beauty: 94
    },
    bullets: [
      "Neighborhoods gathered to hear weather before they saw it.",
      "Storm preparation became a shared performance instead of a private panic.",
      "Glassworkers became part engineer, part priest."
    ],
    impactTitle: "Fear became easier to survive when it arrived musically.",
    impactCopy:
      "This artifact suggests futures where warning systems only worked when they moved people emotionally.",
    year: 2112,
    tone: "Reverent",
    risk: "High",
    shapeClass: "artifact-shape artifact-choir"
  },
  veil: {
    mode: "communication",
    name: "Quiet Veil",
    summary:
      "A soft membrane worn between two people, translating emotional intent without forcing either one to speak.",
    noteLeft: "Cataloged in archives of cities where trust became scarce.",
    noteRight: "Not every future became louder. Some became more intimate.",
    storyTitle: "The Quiet Veil was invented after speech lost its authority.",
    storyCopy:
      "This future had too much noise, too many feeds, and too little trust. People created an object that let silence carry meaning more safely than language.",
    metrics: {
      emotion: 93,
      strangeness: 78,
      beauty: 84
    },
    bullets: [
      "Arguments became rare because intention could no longer hide behind tone.",
      "Silence turned from awkwardness into proof of care.",
      "The most valuable conversations happened without words."
    ],
    impactTitle: "The artifact appears when language itself becomes damaged.",
    impactCopy:
      "This branch of the future suggests people began inventing tools for emotional honesty before inventing better platforms.",
    year: 2064,
    tone: "Intimate",
    risk: "Fragile",
    shapeClass: "artifact-shape artifact-veil"
  }
};

const modes = {
  memory: {
    forecastTitle: "This future protects fragile feelings.",
    forecastCopy:
      "The world you are generating seems emotionally vivid but structurally unstable, so its objects preserve what people fear losing most."
  },
  ritual: {
    forecastTitle: "This future turns survival into ceremony.",
    forecastCopy:
      "People here cope with chaos by making it sacred. Their technologies work because communities believe in them together."
  },
  communication: {
    forecastTitle: "This future distrusts language and invents tenderness instead.",
    forecastCopy:
      "The strongest objects in this branch reduce noise, increase intimacy, and make misunderstanding feel primitive."
  }
};

const fragments = {
  ship: {
    title: "The future object is never random.",
    copy:
      "It is a fossil of whatever the culture was desperate to protect, repair, or make survivable."
  },
  storm: {
    title: "Objects become rituals when warnings stop being enough.",
    copy:
      "In harder futures, people do not just need information. They need forms that make survival emotionally possible."
  },
  veil: {
    title: "The deepest inventions are often emotional, not mechanical.",
    copy:
      "Some futures progress by making people easier to understand rather than making machines more impressive."
  }
};

const artifactNameEl = document.querySelector("#artifactName");
const artifactSummaryEl = document.querySelector("#artifactSummary");
const artifactShapeEl = document.querySelector("#artifactShape");
const noteLeftEl = document.querySelector("#noteLeft");
const noteRightEl = document.querySelector("#noteRight");
const storyTitleEl = document.querySelector("#storyTitle");
const storyCopyEl = document.querySelector("#storyCopy");
const metricEmotionEl = document.querySelector("#metricEmotion");
const metricStrangenessEl = document.querySelector("#metricStrangeness");
const metricBeautyEl = document.querySelector("#metricBeauty");
const storyListEl = document.querySelector("#storyList");
const impactTitleEl = document.querySelector("#impactTitle");
const impactCopyEl = document.querySelector("#impactCopy");
const timelineYearEl = document.querySelector("#timelineYear");
const timelineToneEl = document.querySelector("#timelineTone");
const timelineRiskEl = document.querySelector("#timelineRisk");
const forecastTitleEl = document.querySelector("#forecastTitle");
const forecastCopyEl = document.querySelector("#forecastCopy");
const hopeSliderEl = document.querySelector("#hopeSlider");
const techSliderEl = document.querySelector("#techSlider");
const climateSliderEl = document.querySelector("#climateSlider");
const modeChipEls = document.querySelectorAll(".mode-chip");
const branchNodeEls = document.querySelectorAll(".branch-node");
const archiveItemEls = document.querySelectorAll(".archive-item");
const jumpButtons = document.querySelectorAll("[data-jump]");

let currentMode = "memory";
let currentArtifact = "seed";

function renderMode(modeKey) {
  const mode = modes[modeKey];

  if (!mode) {
    return;
  }

  currentMode = modeKey;
  forecastTitleEl.textContent = mode.forecastTitle;
  forecastCopyEl.textContent = mode.forecastCopy;

  modeChipEls.forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.mode === modeKey);
  });
}

function renderArtifact(artifactKey) {
  const artifact = artifacts[artifactKey];

  if (!artifact) {
    return;
  }

  currentArtifact = artifactKey;
  artifactNameEl.textContent = artifact.name;
  artifactSummaryEl.textContent = artifact.summary;
  noteLeftEl.textContent = artifact.noteLeft;
  noteRightEl.textContent = artifact.noteRight;
  storyTitleEl.textContent = artifact.storyTitle;
  storyCopyEl.textContent = artifact.storyCopy;
  metricEmotionEl.textContent = artifact.metrics.emotion;
  metricStrangenessEl.textContent = artifact.metrics.strangeness;
  metricBeautyEl.textContent = artifact.metrics.beauty;
  impactTitleEl.textContent = artifact.impactTitle;
  impactCopyEl.textContent = artifact.impactCopy;
  timelineYearEl.textContent = artifact.year;
  timelineToneEl.textContent = artifact.tone;
  timelineRiskEl.textContent = artifact.risk;
  artifactShapeEl.className = artifact.shapeClass;
  storyListEl.innerHTML = artifact.bullets.map((bullet) => `<li>${bullet}</li>`).join("");

  branchNodeEls.forEach((node) => {
    node.classList.toggle("active", node.dataset.artifact === artifactKey);
  });

  renderMode(artifact.mode);
  updateTimeline();
}

function updateTimeline() {
  const hope = Number(hopeSliderEl.value);
  const tech = Number(techSliderEl.value);
  const climate = Number(climateSliderEl.value);
  const baseYear = artifacts[currentArtifact].year;

  timelineYearEl.textContent = String(baseYear + (tech - 3) * 4 + (climate - 3) * 3);

  const emotionalScore = hope * 6 + tech * 3 - climate * 2;
  if (emotionalScore >= 28) {
    timelineToneEl.textContent = "Radiant";
  } else if (emotionalScore >= 20) {
    timelineToneEl.textContent = "Tender";
  } else if (emotionalScore >= 14) {
    timelineToneEl.textContent = "Uneasy";
  } else {
    timelineToneEl.textContent = "Haunted";
  }

  const instability = climate * 7 + tech * 3 - hope * 4;
  if (instability >= 30) {
    timelineRiskEl.textContent = "Volatile";
  } else if (instability >= 20) {
    timelineRiskEl.textContent = "Unstable";
  } else if (instability >= 12) {
    timelineRiskEl.textContent = "Fragile";
  } else {
    timelineRiskEl.textContent = "Soft";
  }
}

function renderFragment(fragmentKey) {
  const fragment = fragments[fragmentKey];

  if (!fragment) {
    return;
  }

  impactTitleEl.textContent = fragment.title;
  impactCopyEl.textContent = fragment.copy;

  archiveItemEls.forEach((item) => {
    item.classList.toggle("active", item.dataset.fragment === fragmentKey);
  });
}

modeChipEls.forEach((chip) => {
  chip.addEventListener("click", () => {
    renderMode(chip.dataset.mode);

    const linkedArtifact = Object.entries(artifacts).find(([, artifact]) => artifact.mode === chip.dataset.mode);
    if (linkedArtifact) {
      renderArtifact(linkedArtifact[0]);
    }
  });
});

branchNodeEls.forEach((node) => {
  node.addEventListener("click", () => renderArtifact(node.dataset.artifact));
});

archiveItemEls.forEach((item) => {
  item.addEventListener("click", () => renderFragment(item.dataset.fragment));
});

[hopeSliderEl, techSliderEl, climateSliderEl].forEach((slider) => {
  slider.addEventListener("input", updateTimeline);
});

jumpButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(`#${button.dataset.jump}`);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

renderArtifact("seed");
renderFragment("ship");
