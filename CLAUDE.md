# CLAUDE.md — Portfolio Site

This file is the reference guide for any AI coding agent working on this project.
It describes the project scope, tech stack, conventions, and how to add content.
The development roadmap lives in [PLAN.md](./PLAN.md).

---

## Project Scope

A personal portfolio website with three pages:

| Page | Purpose |
|------|---------|
| **Home** | "About me" section + "Resume" section (with subsections) |
| **Research & Code** | Academic papers, open-source repositories |
| **Photography** | Photo albums with custom layout per album |

The site is statically generated (SSG) and deployed on Cloudflare Pages.
Interactive islands (lightbox, album editor, admin forms) are Svelte components.

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Astro | 6.0.4 |
| UI components | Svelte | 5.x |
| Styling | Tailwind CSS | v4 |
| Content | MDX via Astro Content Collections | — |
| Language | TypeScript (strict) | 5.x |
| Runtime | Node.js | 24 LTS |
| Hosting | Cloudflare Pages | — |
| Photo storage | Cloudflare R2 | — |
| Auth (admin) | Cloudflare Access | — |

### Key files

```
astro.config.mjs      — Astro config (integrations, adapter, Vite plugins)
src/content/          — All MDX/JSON content (papers, repos, resume, albums)
src/components/       — Shared Astro + Svelte components
src/layouts/          — Base layouts (wraps pages, imports global.css)
src/pages/            — File-based routing
src/styles/global.css — Tailwind v4 entry point (@import "tailwindcss")
wrangler.jsonc        — Cloudflare Workers / Pages config
```

---

## Run Commands

```bash
# Development server (hot reload)
npm run dev

# Production build
npm run build

# Preview production build locally via Wrangler
npm run preview

# Generate Cloudflare Worker types
npm run generate-types

# Add an Astro integration
npx astro add <integration>
```


---

## Content Collections — Schema & Conventions

Content lives in `src/content/`. Each collection has a schema defined in
`src/content/config.ts` using Astro's `defineCollection` + Zod.

### ⚠️ Clarifying questions policy

If any field's meaning or expected format is ambiguous when adding new content,
**the agent must pause and ask the user for clarification before writing files**.
Do not invent field values or skip optional fields silently.

---

### Collection: `papers`

Path: `src/content/papers/<slug>.mdx`

```yaml
---
title: string          # Full paper title
authors: string[]      # Author list, e.g. ["Ludovic Tuncay", "Jane Doe"]
venue: string          # Conference or journal name (short form, e.g. "NeurIPS 2024")
year: number           # Publication year
doi: string | null     # DOI URL or null if not yet published
arxiv: string | null   # ArXiv URL or null
code: string | null    # GitHub repo URL or null
abstract: string       # One-paragraph abstract (plain text, no markdown)
tags: string[]         # Topic tags, e.g. ["NLP", "reinforcement learning"]
featured: boolean      # Whether to show on homepage / feature card
---

<!-- Extended description, methodology notes, figures — optional MDX body -->
```

> **Ask the user:** What fields should be required vs optional? Should `venue`
> distinguish between workshop papers and full papers? Should there be a
> `status` field (published / preprint / under review)?

---

### Collection: `repos`

Path: `src/content/repos/<slug>.mdx`

```yaml
---
title: string          # Repository / project name
description: string    # One-line description
url: string            # GitHub URL
language: string       # Primary language, e.g. "Python"
topics: string[]       # GitHub topics / tags
stars: number | null   # Optional — can be fetched at build time via GitHub API
featured: boolean
---
```

---

### Collection: `resume`

Path: `src/content/resume/<section-slug>.mdx`

> **Ask the user:** What are the resume sections? Typical examples include
> "education", "experience", "skills", "awards". Each section will have its own
> MDX file. What fields should each entry type contain? For example:
> - Experience entry: `role`, `company`, `startDate`, `endDate`, `description`?
> - Education entry: `degree`, `institution`, `year`, `description`?
> - Skills: free-form list or structured categories?

---

### Collection: `albums`

Path: `src/content/albums/<slug>.json`

```json
{
  "title": "string",
  "date": "YYYY-MM-DD",
  "coverPhoto": "filename.jpg",
  "description": "string | null",
  "rows": [
    { "layout": "full-bleed", "photo": "DSC001.jpg" },
    { "layout": "diptych",    "photos": ["DSC002.jpg", "DSC003.jpg"] },
    { "layout": "triptych",   "photos": ["DSC004.jpg", "DSC005.jpg", "DSC006.jpg"] }
  ]
}
```

Photo files are stored in Cloudflare R2, NOT in the git repo.
The JSON descriptor is committed to git; the album renderer resolves photo URLs
from R2 at runtime.

---

## Styling Conventions

- Use **Tailwind utility classes** directly in `.astro` and `.svelte` files.
- Define design tokens (colors, fonts, spacing scale) as CSS custom properties
  in `src/styles/global.css`, then reference them with `theme()` or `var()`.
- Do **not** write custom CSS unless Tailwind utilities are genuinely insufficient.
- Dark mode: use the `dark:` variant; toggle via `class="dark"` on `<html>`.

---

## Component Conventions

- **Astro components** (`.astro`): layout wrappers, static UI, page sections.
- **Svelte components** (`.svelte`): anything interactive — lightbox, album editor,
  admin forms, mobile nav toggle.
- Island hydration: prefer `client:visible` for below-the-fold islands,
  `client:load` only for above-the-fold critical interactivity.
- Keep islands small and focused; pass data as props, not global stores.

---

## Git Workflow

- Default branch: `main`
- Commit messages follow Conventional Commits:
  `feat:`, `fix:`, `chore:`, `content:`, `docs:`, `style:`, `refactor:`
- Content-only changes use the `content:` prefix, e.g.:
  `content: add paper "Attention Is All You Need"`
- Never commit build artifacts (`dist/`, `.astro/`) — they are in `.gitignore`.

---

## Deployment

Cloudflare Pages is connected to the GitHub repo and auto-deploys on push to `main`.
Build command: `npm run build` · Output directory: `dist/`

The admin UI (future) will be deployed to `admin.<yourdomain>` and protected by
Cloudflare Access (zero-code auth via Google or GitHub OAuth).
