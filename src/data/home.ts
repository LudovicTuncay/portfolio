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

export type Language = {
  name: string;
  level: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/research-code", label: "Research & Code" },
  { href: "/photography", label: "Photography" },
];

export const introActions: IntroAction[] = [
  { href: "mailto:ludovic@example.com", label: "Contact me" },
  { href: "/#about", label: "About me", muted: true },
  { href: "/#resume", label: "Resume", muted: true },
];

export const aboutParagraphs = [
  "I was born and raised in Toulouse, France, and have been drawn to science, mathematics, and computing for as long as I can remember. I first studied computer science, then moved toward mathematics for artificial intelligence, where I found the questions that still interest me most: how models learn, what their representations contain, and why some methods generalize better than others.",
  "I am now a PhD student in machine learning at IRIT and ANITI. My work focuses on audio representation learning, robust evaluation, and research tools that make experiments easier to reproduce and understand.",
];

export const researchParagraph =
  "My thesis focuses on self-supervised learning for general audio embeddings: compact representations that transfer across speech, music, and environmental sound. Through Audio-JEPA and BEST-RQ-2, I study how pretraining objectives shape what an encoder learns and how those representations can be made useful beyond a single dataset. I also work on evaluation and benchmarking, including contributions to audio benchmarks that compare models fairly across many tasks and datasets. More broadly, I am interested in dataset quality: my work includes label correction for AudioSet, and I am currently exploring dataset curation in another domain outside of the audio domain. I try to keep these research threads connected through open-source systems that make experiments easier to reproduce, compare, and extend.";

export const photographyParagraph =
  "Photography gives me a different way of paying attention. I am especially interested in street scenes, visual contrasts, and the tension between documentary detail and mood. It complements research well: it slows observation down and keeps me attentive to composition, light, and unexpected structure.";

export const publications: ResumeEntry[] = [
  {
    title:
      "BEST-RQ-2: Contextualize-Then-Predict, a Two-Step Approach for Self-Supervised Audio Representations",
    subtitle:
      "<strong>Ludovic TUNCAY</strong>, Etienne LABBÉ, Thomas PELLEGRINI",
    bullets: [
      "Decoupled contextualization and masked-target prediction in BEST-RQ while retaining frozen random-projection targets.",
      "Replaced the original Conformer encoder with a Vision Transformer backbone.",
      "Improved transfer on X-ARES and XARES-LLM with unchanged inference cost. Code available online.",
    ],
    date: "Interspeech 2025",
    location: "Under review",
    href: "https://github.com/LudovicTuncay/audio-embeddings",
  },
  {
    title:
      "Audio-JEPA: Joint-Embedding Predictive Architecture for Audio Representation Learning",
    subtitle:
      "<strong>Ludovic TUNCAY</strong>, Etienne LABBÉ, Emmanouil BENETOS, Thomas PELLEGRINI",
    bullets: [
      "First open-source adaptation of the JEPA paradigm to generic audio.",
      "Adapted I-JEPA to audio, predicting masked spectrogram patches using a Vision Transformer backbone.",
      "Achieved parity with wav2vec 2.0 and data2vec2 on X-ARES tasks with less than 20% of their training data. Code available online.",
    ],
    date: "ICME 2025",
    location: "Published",
    href: "https://hal.science/hal-05128180v1",
  },
  {
    title:
      "Hierarchical Label Propagation: A Model-Size-Dependent Performance Booster for AudioSet Tagging",
    subtitle:
      "<strong>Ludovic TUNCAY</strong>, Etienne LABBÉ, Thomas PELLEGRINI",
    bullets: [
      "Propagated labels up AudioSet's ontology, affecting more than 500k audio clips and adding 800k labels across 109 classes.",
      "Demonstrated performance gains on CNN and transformer architectures, with consistent improvements on FSD50K.",
    ],
    date: "ICASSP 2025",
    location: "Published",
    href: "https://hal.science/hal-04997011v1",
  },
];

export const experiences: ResumeEntry[] = [
  {
    title: "Visiting PhD Researcher",
    subtitle:
      "School of Electronic Engineering and Computer Science, Queen Mary University of London",
    bullets: [
      "Adapted the I-JEPA paradigm to the audio domain, creating Audio-JEPA.",
      "Converted and trained the model on audio data, achieving state-of-the-art performance with limited resources.",
      "Supervised by Emmanouil BENETOS.",
    ],
    date: "Oct. 2024 - Mar. 2025",
    location: "London, UK",
  },
  {
    title: "Teaching Assistant in Mathematics Related Courses",
    subtitle: "Université Toulouse III — Paul Sabatier",
    bullets: [
      "Led weekly exercise sessions and office hours for 20-30+ students in each course.",
      "Bachelor-level courses: Linear Algebra, Data Analysis, Introduction to Analysis.",
      "Master-level course: Real Analysis.",
      "Co-designed exam questions and graded assignments.",
    ],
    date: "Oct. 2023 - Jun. 2024",
    location: "Toulouse, France",
  },
  {
    title: "Real-Time Speaker Separation Intern",
    subtitle: "SteelSeries",
    bullets: [
      "Designed a robust, adaptable, and synthetic training dataset with multiple constraints for monaural speaker separation.",
      "Researched, implemented, and trained both causal and non-causal speaker separation models from the literature.",
      "Developed an evaluation pipeline with diverse scenarios to reflect realistic usage conditions.",
    ],
    date: "Apr. 2023 - Sep. 2023",
    location: "Lille, France",
  },
  {
    title: "Statistical Cohort Study Intern",
    subtitle:
      "Department of Mathematics, Université Toulouse III — Paul Sabatier",
    bullets: [
      "Conducted statistical analysis of student academic trajectories at UT3 — PS.",
      "Developed and presented results through an interactive dashboard.",
    ],
    date: "Jun. 2021 - Aug. 2021",
    location: "Toulouse, France",
  },
  {
    title: "Automatic Summarization Developer",
    subtitle: "Berger-Levrault (University Project)",
    bullets: [
      "Developed an automatic text summarization system, including data annotation and model experimentation based on early LLMs.",
      "Identified optimal models under specified constraints and presented key findings to stakeholders.",
    ],
    date: "Jan. 2021",
    location: "Toulouse, France",
  },
];

export const education: ResumeEntry[] = [
  {
    title: "PhD Candidate in Machine Learning",
    subtitle: "IRIT, Université de Toulouse, CNRS, Toulouse INP",
    bullets: [
      "Recipient of the French Ministry of Higher Education Doctoral Scholarship (2023-2026).",
      "Research area: Self-supervised learning of generic audio representations.",
      "Supervised by Thomas PELLEGRINI.",
    ],
    date: "Oct. 2023 - Present",
    location: "Toulouse, France",
  },
  {
    title:
      "Master of Science (M.Sc.) in Mathematics and Computer Science for Artificial Intelligence",
    subtitle: "Université Toulouse III — Paul Sabatier",
    bullets: [
      "Valedictorian; graduated top of class with high honors.",
      "ANITI Master's Scholarship recipient (2021-2022, 2022-2023).",
    ],
    date: "Sep. 2021 - Sep. 2023",
    location: "Toulouse, France",
  },
  {
    title:
      "Bachelor of Science (B.Sc.) in Computer Science & B.Sc. in Mathematics",
    subtitle:
      "Université Toulouse III — Paul Sabatier & Université de Montréal",
    bullets: [
      "Graduated with honors in the Computer Science B.Sc. and with highest honors in the B.Sc. Mathematics.",
      "Valedictorian in first and second years.",
      "Third year as exchange student at Université de Montréal for the B.Sc. in Computer Science.",
    ],
    date: "Sep. 2017 - Jul. 2021",
    location: "Toulouse, France & Montreal, Quebec, Canada",
  },
];

export const languages: Language[] = [
  { name: "French", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Spanish", level: "Beginner" },
  { name: "Japanese", level: "Beginner" },
];
