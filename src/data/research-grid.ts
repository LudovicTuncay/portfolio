import type { ResearchCollectionKey } from "./research";

export type ResearchCardVariant = "feature" | "wide" | "compact";

export type ResearchGridItem = {
  collection: ResearchCollectionKey;
  slug: string;
  order: number;
  variant: ResearchCardVariant;
  desktop: {
    span: number;
  };
  tablet: {
    span: number;
  };
};

// Manual composition for the Research & Code page. Reorder or resize cards here.
export const researchGrid: ResearchGridItem[] = [
  {
    collection: "papers",
    slug: "best-rq-2",
    order: 1,
    variant: "feature",
    desktop: { span: 8 },
    tablet: { span: 6 }
  },
  {
    collection: "repos",
    slug: "audio-embeddings",
    order: 2,
    variant: "wide",
    desktop: { span: 4 },
    tablet: { span: 6 }
  },
  {
    collection: "papers",
    slug: "audio-jepa",
    order: 3,
    variant: "wide",
    desktop: { span: 6 },
    tablet: { span: 6 }
  },
  {
    collection: "repos",
    slug: "audio-jepa",
    order: 4,
    variant: "wide",
    desktop: { span: 6 },
    tablet: { span: 6 }
  },
  {
    collection: "repos",
    slug: "portfolio",
    order: 5,
    variant: "wide",
    desktop: { span: 12 },
    tablet: { span: 6 }
  },
  {
    collection: "papers",
    slug: "hierarchical-label-propagation",
    order: 6,
    variant: "feature",
    desktop: { span: 12 },
    tablet: { span: 6 }
  },
  {
    collection: "repos",
    slug: "xares",
    order: 7,
    variant: "wide",
    desktop: { span: 4 },
    tablet: { span: 6 }
  },
  {
    collection: "repos",
    slug: "hierarchical-label-propagation",
    order: 8,
    variant: "wide",
    desktop: { span: 4 },
    tablet: { span: 6 }
  }
];
