import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { PAPER_STATUS_VALUES, RESEARCH_PREVIEW_STYLES } from "./data/research";

const previewSchema = z
  .object({
    style: z.enum(RESEARCH_PREVIEW_STYLES),
    label: z.string().optional()
  })
  .optional();

const papers = defineCollection({
  loader: glob({ base: "./src/content/papers", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).min(1),
    venue: z.string(),
    year: z.number().int(),
    status: z.enum(PAPER_STATUS_VALUES),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    doi: z.string().url().nullable(),
    arxiv: z.string().url().nullable(),
    code: z.string().url().nullable(),
    preview: previewSchema
  })
});

const repos = defineCollection({
  loader: glob({ base: "./src/content/repos", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string(),
    url: z.string().url(),
    language: z.string(),
    topics: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    preview: previewSchema
  })
});

export const collections = { papers, repos };
