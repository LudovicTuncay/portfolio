# PLAN.md — Development Roadmap

This file tracks the logical development stages of the portfolio site.
It is referenced from [CLAUDE.md](./CLAUDE.md).

Each phase ends with a **checkpoint**: a working, deployable state of the site.
Phases marked ✅ are complete. Phases marked 🔲 are pending.

---

## Phase 0 — Project Bootstrap ✅

- [x] Scaffold Astro 6.0.4 project (`npm create astro@5.0.0`)
- [x] Add integrations: Svelte, Tailwind CSS v4, MDX, Cloudflare adapter
- [x] Init git, create GitHub repo (`gh repo create`)
- [x] Write `CLAUDE.md` and `PLAN.md`

**Checkpoint:** Bare Astro project builds and deploys to Cloudflare Pages.

---

## Phase 1 — Foundation & Design System 🔲

Goals: establish the visual language and shared layout before building pages.

- [ ] Define design tokens in `src/styles/global.css`:
  - Color palette (background, text, accent, muted)
  - Typography scale (font family, sizes, weights)
  - Spacing / container widths
- [ ] Create `src/layouts/BaseLayout.astro`:
  - `<head>` with meta tags, favicon, font imports
  - Import `global.css`
  - Slot for page content
- [ ] Create `src/components/Nav.astro` (or Svelte for mobile toggle):
  - Logo / name link
  - Links: Home, Research & Code, Photography
  - Mobile hamburger (Svelte island, `client:load`)
- [ ] Create `src/components/Footer.astro`
- [ ] Decide on dark mode strategy (system preference / manual toggle / none)

> **Decision point:** What font(s) should be used? What is the overall visual
> tone — minimal/academic, creative/editorial, something else?
> The agent should ask the user before implementing the design system.

**Checkpoint:** Every page shows the nav and footer; global styles are live.

---

## Phase 2 — Home Page 🔲

The Home page has two main sections: **About Me** and **Resume**.
The exact subsections are known to the user but not yet specified here.

- [ ] Build `src/pages/index.astro`
- [ ] About Me section:
  - Profile photo (static asset in `public/`)
  - Bio text
  - Links (GitHub, email, Google Scholar, etc.)
  > **Ask the user:** What subsections does "About Me" contain beyond a bio?
  > (E.g., current position, research interests, contact info?)
- [ ] Resume section:
  - Define `resume` Content Collection schema (see CLAUDE.md — ask for clarification)
  - Create MDX files for each resume section
  - Build resume entry components (Astro)
  > **Ask the user:** What are the resume sections and the fields for each entry type?
- [ ] Smooth scroll or anchor navigation between sections

**Checkpoint:** Home page is fully populated with real content and looks correct
on mobile and desktop.

---

## Phase 3 — Research & Code Page 🔲

This page is **not yet designed**. The following is a starting-point discussion
to be resolved with the user before implementation begins.

### Questions for the user

1. **Layout:** Card grid? Timeline (sorted by year)? Split list (papers left,
   repos right)? Featured items at top?
2. **Papers card contents:** Title, venue, year, abstract excerpt, links
   (PDF / ArXiv / DOI / code)? Should the abstract be expandable?
3. **Repos card contents:** Name, description, language badge, star count
   (fetched at build time from GitHub API?), link?
4. **Filtering / search:** Static tag filters (client-side JS)? Server-side?
   None for now?
5. **Individual paper pages:** Should each paper have its own route
   (`/research/[slug]`) with full MDX body? Or is the card enough?
6. **Featured papers:** Should a subset appear on the Home page?

### Planned tasks (fill in after design decisions)

- [ ] Define `papers` and `repos` Content Collection schemas
- [ ] Build page layout
- [ ] Build paper card component
- [ ] Build repo card component
- [ ] (Optional) individual paper routes
- [ ] (Optional) tag filter island (Svelte)
- [ ] Add sample content entries

**Checkpoint:** Page renders all papers and repos from content collections,
looks good on mobile and desktop.

---

## Phase 4 — Photography Page 🔲

This page is **not yet designed**. Discussion points below.

### Questions for the user

1. **Entry point layout:** Grid of album covers? Masonry? Full-width featured
   album? Simple list?
2. **Album cover:** Should it show the `coverPhoto` thumbnail + title + date?
3. **Individual album page:** Full-screen slideshow? Scroll-based layout driven
   by the JSON descriptor rows (`full-bleed`, `diptych`, `triptych`)? Both?
4. **Lightbox:** Should clicking a photo open a full-screen lightbox with
   prev/next navigation? (Svelte island)
5. **Photo URLs:** Photos are on Cloudflare R2. How should the R2 bucket URL
   be configured? (env variable? hardcoded subdomain?)
6. **Album upload workflow:** Is the visual album editor (admin UI) in scope
   for the initial launch, or will JSON descriptors be written by hand first?

### Planned tasks (fill in after design decisions)

- [ ] Define `albums` Content Collection schema (JSON)
- [ ] Build album index page (`src/pages/photography/index.astro`)
- [ ] Build album cover component
- [ ] Build album detail page (`src/pages/photography/[slug].astro`)
- [ ] Build album row renderer (Svelte component, shared with admin)
- [ ] Lightbox Svelte island
- [ ] R2 URL resolution utility
- [ ] Add sample album descriptor + test photos

**Checkpoint:** At least one album is browsable end-to-end from the photography
index, with working lightbox, photos served from R2.

---

## Phase 5 — Admin UI 🔲

A custom admin interface at `admin.<yourdomain>` protected by Cloudflare Access.

### Questions for the user

1. Should the admin UI be a separate Astro project / repo, or a path-based
   subdirectory in this repo (e.g., `src/pages/admin/`)?
2. What GitHub account / org should the GitHub API commits target?
3. Should the admin handle only photography (album editor), or also
   papers/repos/resume content?

### Planned tasks

- [ ] Cloudflare Access setup (Google/GitHub OAuth)
- [ ] Paper / repo / resume forms → GitHub API commit flow
- [ ] Visual album editor (Svelte, dnd-kit):
  - Photo upload to R2 via presigned URLs
  - Drag-and-drop row reorder
  - Per-row layout picker
  - Live preview using shared album renderer component
- [ ] Commit JSON descriptor to GitHub → triggers Pages rebuild

**Checkpoint:** Can add a paper and upload + arrange a photo album entirely
through the admin UI without touching the codebase.

---

## Phase 6 — Polish & Performance 🔲

- [ ] Lighthouse audit (target: 100/100 Performance on all pages)
- [ ] OG meta tags and Twitter card for all pages
- [ ] Sitemap (`@astrojs/sitemap`)
- [ ] 404 page
- [ ] Accessibility audit (keyboard nav, ARIA labels, color contrast)
- [ ] Bundle size audit (no unused Svelte islands hydrated)
- [ ] Custom domain + SSL on Cloudflare Pages

**Checkpoint:** Site is production-ready and publicly accessible on custom domain.
