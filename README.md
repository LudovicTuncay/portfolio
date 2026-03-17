# Personal Portfolio Website

A high-performance personal portfolio built with **Astro**, **Svelte**, and **Tailwind CSS**, designed to showcase research papers, code repositories, and photography.

## 🚀 Tech Stack

- **Framework:** [Astro 6.0](https://astro.build/) (SSG)
- **Interactivity:** [Svelte 5](https://svelte.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Content:** MDX & JSON via Astro Content Collections
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/)
- **Infrastructure:** Cloudflare R2 (Storage) & Cloudflare Access (Auth)

## 📁 Project Structure

```text
/
├── src/
│   ├── content/          # Content Collections (MDX/JSON)
│   │   ├── papers/       # Academic publications
│   │   ├── repos/        # Open-source projects
│   │   ├── resume/       # Resume sections (Education, Experience, etc.)
│   │   └── albums/       # Photography album descriptors
│   ├── components/       # Shared Astro and Svelte components
│   ├── layouts/          # Base page layouts
│   ├── pages/            # File-based routing (Home, Research, Photography)
│   └── styles/           # Global styles and Tailwind entry point
├── public/               # Static assets (favicons, etc.)
├── astro.config.mjs      # Astro configuration and integrations
├── wrangler.jsonc        # Cloudflare Pages/Workers configuration
├── CLAUDE.md             # Developer guide & technical conventions
└── PLAN.md               # Project roadmap and milestones
```

## 🛠️ Getting Started

### Installation

```bash
npm install
```

### Development

Run the local development server with hot-module replacement:

```bash
npm run dev
```

### Build & Preview

Generate the static site and preview it using Wrangler (Cloudflare's CLI):

```bash
npm run build
npm run preview
```

## 📝 Adding Content

Content is managed in `src/content/`. Each collection has a specific schema defined in `src/content/config.ts`.

- **Papers:** Add `.mdx` files to `src/content/papers/`.
- **Projects:** Add `.mdx` files to `src/content/repos/`.
- **Resume:** Add `.mdx` files to `src/content/resume/`.
- **Photography:** Add `.json` descriptors to `src/content/albums/` (Photos are hosted on R2).

For detailed schemas and conventions, refer to [CLAUDE.md](./CLAUDE.md).

## 📄 License

MIT © [Ludovic Tuncay](https://github.com/ludovictuncay)
