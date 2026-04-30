export const PAPER_STATUS_VALUES = [
  "in-preparation",
  "under-review",
  "accepted",
  "published"
] as const;

export type PaperStatus = (typeof PAPER_STATUS_VALUES)[number];

export const RESEARCH_PREVIEW_STYLES = [
  "waveform",
  "terminal",
  "grid",
  "signal"
] as const;

export type ResearchPreviewStyle = (typeof RESEARCH_PREVIEW_STYLES)[number];

export type ResearchPreview = {
  style: ResearchPreviewStyle;
  label?: string;
};

export type ResearchCollectionKey = "papers" | "repos";

export const paperStatusLabels: Record<PaperStatus, string> = {
  "in-preparation": "in preparation",
  "under-review": "under review",
  accepted: "accepted",
  published: "published"
};

export const researchCollectionLabels: Record<ResearchCollectionKey, string> = {
  papers: "research",
  repos: "code"
};

export const getPaperDetailHref = (slug: string) => `/research-code/papers/${slug}`;
