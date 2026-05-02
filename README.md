# Personal Portfolio Website

A high-performance personal portfolio built with **Astro**, **Svelte**, and **Tailwind CSS**, designed to showcase research papers, code repositories, and photography.

## 🚀 Tech Stack

- **Framework:** [Astro 6.0](https://astro.build/) (SSG)
- **Interactivity:** [Svelte 5](https://svelte.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Content:** MDX & JSON via Astro Content Collections
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/)
- **Image delivery:** [Cloudinary](https://cloudinary.com/) for optimized photography album images
- **Original photo storage:** Cloudflare R2 for downloadable original files
- **Infrastructure:** Cloudflare Pages, Cloudflare R2, and Cloudflare Access (Auth)

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
├── AGENTS.md             # Developer guide & technical conventions
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

### Environment

Copy `.env.example` to `.env` for local development and fill in values as they
become available.

```bash
cp .env.example .env
```

Photography albums use two image backends:

- **Cloudinary** serves transformed web images in album pages and lightboxes.
- **Cloudflare R2** stores original files for downloads.

Required before publishing albums:

- `PUBLIC_CLOUDINARY_CLOUD_NAME`: Cloudinary cloud name used to build public image URLs.
- `PUBLIC_CLOUDINARY_ALBUM_FOLDER`: Optional folder prefix for album images, e.g. `portfolio/albums`.
- `PUBLIC_R2_ORIGINALS_BASE_URL`: Public/custom-domain base URL for original downloads. Leave empty if originals should be private; in that case, add a server download route backed by an R2 binding before enabling downloads.

Future upload or sync tooling may also need the server-only values listed in
`.env.example`: `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`,
`R2_ACCOUNT_ID`, `R2_ORIGINALS_BUCKET`, `R2_ACCESS_KEY_ID`, and
`R2_SECRET_ACCESS_KEY`.

## 📝 Adding Content

Content is managed in `src/content/`. Each collection has a specific schema defined in `src/content.config.ts`.

- **Papers:** Add `.mdx` files to `src/content/papers/`.
- **Projects:** Add `.mdx` files to `src/content/repos/`.
- **Resume:** Add `.mdx` files to `src/content/resume/`.
- **Photography:** Add `.json` descriptors to `src/content/albums/`. Album images are served from Cloudinary, while original files are referenced by R2 object keys for download.

Album descriptors include a `photos` array with both `cloudinaryPublicId` and
`r2Key` for each image. Layout rows then reference those photo IDs:

```json
{
  "title": "Album title",
  "date": "2026-05-02",
  "coverPhoto": "cover",
  "description": "Optional album description",
  "photos": [
    {
      "id": "cover",
      "alt": "Short accessible description",
      "cloudinaryPublicId": "album-slug/DSC001",
      "r2Key": "albums/album-slug/originals/DSC001.RAF",
      "width": 3000,
      "height": 2000
    }
  ],
  "rows": [{ "layout": "full-bleed", "photo": "cover" }]
}
```

For detailed schemas and conventions, refer to [AGENTS.md](./AGENTS.md).

## 📄 License

The source code in this repository is licensed under the [MIT License](./LICENSE).

Images, photographs, logos, and other media assets are excluded from the MIT
License unless a different license is explicitly stated for a specific file.
Those assets remain © 2026 Ludovic Tuncay, all rights reserved. This includes
the current assets in `src/assets/hero-portrait.png`, `public/lkt-logo.svg`,
and `public/favicon.svg`, as well as photography served from Cloudinary or
stored in Cloudflare R2.

See [COPYRIGHT](./COPYRIGHT) for the media carve-out.
