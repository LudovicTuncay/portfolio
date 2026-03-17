export type NavItem = {
  href: string;
  label: string;
};

export type IntroAction = {
  href: string;
  label: string;
  muted?: boolean;
};

export type ResumeEntry = {
  title: string;
  subtitle: string;
  bullets: string[];
  date: string;
  location: string;
  href?: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/research-code", label: "Research & Code" },
  { href: "/photography", label: "Photography" }
];

export const introActions: IntroAction[] = [
  { href: "mailto:ludovic@example.com", label: "Contact me" },
  { href: "/research-code", label: "My work", muted: true },
  { href: "/photography", label: "Photos", muted: true }
];

export const aboutParagraphs = [
  "Born and raised in Toulouse, France, I was drawn to curious and scientific minds from an early age. This led me to pursue a bachelor in computer science and an M.Sc. in mathematics for artificial intelligence. Ultimately, I am interested in all things machine learning, especially the parts that still resist neat explanations.",
  "Today I am a PhD student in machine learning at IRIT and ANITI, where I focus on audio representation learning and robust learning systems."
];

export const researchParagraph =
  "My thesis focuses on making models learn general audio embeddings, with compact numerical representations of sounds and spoken language. I am interested in self-supervised learning, interpretable methods, and reliable evaluation. I keep my research as open as possible by publishing code alongside papers and documenting results clearly.";

export const photographyParagraph =
  "Photography gives me a different way of paying attention. I am especially interested in street scenes, visual contrasts, and the tension between documentary detail and mood. It complements research well: it slows observation down and keeps me attentive to composition, light, and unexpected structure.";

export const publications: ResumeEntry[] = [
  {
    title: "BEST-RQ-2: Contextualize-then-Predict, a Two Step Approach for Self-Supervised Audio Representations",
    subtitle: "Ludovic Tuncay, Etienne Labeau, Thomas Pellegrini",
    bullets: [
      "Occupies contextualization and masked-target prediction in a single training recipe for frozen downstream tasks.",
      "Improves linear evaluation on AudioSet and LibriSpeech with competitive transfer behavior."
    ],
    date: "2025",
    location: "Under review",
    href: "#"
  },
  {
    title: "Audio-PEPA: Joint-Embedding Predictive Architecture for Audio Representation Learning",
    subtitle: "Ludovic Tuncay, Etienne Labeau, Lorrain Dinu, Thomas Pellegrini",
    bullets: [
      "Adapts JEPA-style predictive objectives to audio with latent targets and context conditioning.",
      "Explores robust transfer under label scarcity on music and environmental sound tasks."
    ],
    date: "2024",
    location: "Accepted",
    href: "#"
  },
  {
    title: "Hierarchical Label Propagation: A Model-Size-Dependent Booster for AudioSet Tagging",
    subtitle: "Ludovic Tuncay, Etienne Labeau, Thomas Pellegrini",
    bullets: [
      "Introduces hierarchy-aware label smoothing for audio tagging and multi-label evaluation.",
      "Shows consistent gains across compact CNN and transformer backbones."
    ],
    date: "2024",
    location: "ICASSP",
    href: "#"
  }
];

export const experiences: ResumeEntry[] = [
  {
    title: "Visiting PhD Researcher",
    subtitle: "School of Electrical Engineering and Computer Science, McGill University",
    bullets: [
      "Worked with the MIR and speech communities on transfer across audio tasks and practical evaluation setups.",
      "Contributed experiments and analysis for self-supervised representations under constrained supervision."
    ],
    date: "Oct. 2024 – Mar. 2025",
    location: "Montreal, QC"
  },
  {
    title: "Teaching Assistant in Mathematics Related Courses",
    subtitle: "Université Toulouse III – Paul Sabatier",
    bullets: [
      "Led tutorials and office hours in probability, numerical analysis, and mathematical tools for AI.",
      "Designed exercises and assessment material for large undergraduate cohorts."
    ],
    date: "Sept. 2023 – Jul. 2024",
    location: "Toulouse, France"
  },
  {
    title: "Real-Time Speaker Separation Intern",
    subtitle: "EssilorLuxottica",
    bullets: [
      "Explored low-latency speech separation pipelines under realistic compute and acoustic constraints.",
      "Built evaluation tooling to compare causal and non-causal models on noisy usage scenarios."
    ],
    date: "Apr. 2023 – Sept. 2023",
    location: "Paris, France"
  },
  {
    title: "Statistical Cohort Study Intern",
    subtitle: "Toulouse School of Economics",
    bullets: [
      "Analyzed student trajectories to identify patterns associated with dropout and delayed progression.",
      "Produced interpretable summaries and dashboards for academic stakeholders."
    ],
    date: "Jun. 2022 – Aug. 2022",
    location: "Toulouse, France"
  }
];

export const education: ResumeEntry[] = [
  {
    title: "PhD Candidate in Machine Learning",
    subtitle: "IRIT, Université de Toulouse, CNRS, Toulouse INP",
    bullets: [
      "Doctoral research on self-supervised and transferable audio representations.",
      "Funded by a French doctoral scholarship in AI."
    ],
    date: "Oct. 2023 – Present",
    location: "Toulouse, France"
  },
  {
    title: "Master of Science in Mathematics and Computer Science for Artificial Intelligence",
    subtitle: "Université Paul Sabatier / INSA Toulouse",
    bullets: [
      "Focused on machine learning, optimization, statistics, and representation learning.",
      "Graduated with a research-oriented curriculum spanning theory and applied modeling."
    ],
    date: "2021 – 2023",
    location: "Toulouse, France"
  },
  {
    title: "Bachelor of Science in Mathematics",
    subtitle: "Université Toulouse III – Paul Sabatier",
    bullets: [
      "Training in analysis, probability, algebra, and mathematical modeling.",
      "Built a strong quantitative foundation before specializing in AI."
    ],
    date: "2018 – 2021",
    location: "Toulouse, France"
  },
  {
    title: "Bachelor of Science in Computer Science",
    subtitle: "Université de Montréal / Université Toulouse III",
    bullets: [
      "Core studies in algorithms, software engineering, and computational systems.",
      "Included an academic exchange and project-based engineering practice."
    ],
    date: "2018 – 2021",
    location: "Montreal & Toulouse"
  }
];

export const languages = [
  "French Native",
  "English Bilingual",
  "Spanish Beginner-Intermediate",
  "Japanese Beginner"
];
