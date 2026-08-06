# K2 Adventure Pakistan

A multi-page React + TypeScript + Tailwind CSS website (Vite-powered), built
with routed pages, shadcn/ui components, and framer-motion animations.
Extracted from the Zite export into a standalone project you can develop and
deploy anywhere.

## Pages

| Route             | Page                    |
| ------------------ | ----------------------- |
| `/`                 | Home                     |
| `/treks`            | Treks listing            |
| `/expeditions`      | Expeditions listing      |
| `/valleys`          | Valleys listing          |
| `/ski-tours`        | Ski tours listing        |
| `/cultural-tours`   | Cultural tours listing   |
| `/tours/:id`        | Individual tour detail   |
| `/gallery`          | Photo gallery            |
| `/about`            | About page               |
| `/safety`           | Safety page              |
| `/contact`          | Contact page             |

## Project structure

```
k2-site/
├── index.html
├── package.json
├── vite.config.ts            # includes the "@" → src/ alias
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
└── src/
    ├── main.tsx               # React entry point
    ├── App.tsx                # Router + layout shell
    ├── index.css              # Tailwind + theme tokens + animations
    ├── lib/utils.ts           # cn() class-merging helper
    ├── hooks/useCountUp.ts
    ├── data/                  # tours, itineraries, testimonials, stats, etc.
    ├── components/            # Navbar, Footer, PageHero, TourCard, etc.
    │   ├── tour-detail/        # tour detail page building blocks
    │   └── ui/                 # shadcn/ui primitives (button, input, select…)
    └── pages/
        ├── home/               # section components used only on the home page
        └── *.tsx               # one file per route
```

## About the `ui/` components

The original export referenced shadcn/ui primitives
(`@/components/ui/button`, `select`, `sheet`, `accordion`, etc.) that Zite's
builder provides automatically but doesn't include in the file export. I
reconstructed the standard shadcn/ui versions of exactly the primitives this
project uses — `button`, `badge`, `input`, `textarea`, `label`, `select`,
`sheet`, `accordion`, and `sonner` (toast) — plus the `cn()` helper in
`src/lib/utils.ts`. They're the standard, unmodified shadcn/ui implementations,
so they're safe to extend, restyle, or replace individually.

## Getting started locally

```bash
npm install
npm run dev
```

Starts a dev server (usually at http://localhost:5173) with hot reload.

## Building for production

```bash
npm run build
```

Outputs a static, deployable site into `dist/` — plain HTML, CSS, and JS with
no server required.

Preview the production build locally with:

```bash
npm run preview
```

## Deploying to your own domain

Since this builds to static files in `dist/`, you can host it almost anywhere:

- **Netlify / Vercel / Cloudflare Pages**: connect the repo (or drag-and-drop
  the `dist/` folder), build command `npm run build`, output directory `dist`.
  Since this is a client-side router (`react-router-dom`'s `BrowserRouter`),
  set up an SPA fallback / rewrite rule (`/* → /index.html`) so deep links
  like `/tours/k2-base-camp` don't 404 on refresh.
- **Any static host / shared hosting / S3 + CloudFront**: run `npm run build`
  locally, then upload the contents of `dist/` — again with an SPA fallback
  rule pointing all routes to `index.html`.
- **Custom server (Nginx/Apache)**: run `npm run build`, copy `dist/` to your
  web root, and add a `try_files $uri /index.html;` (Nginx) or equivalent
  rewrite rule.

## Notes

- Dependencies: `react`, `react-dom`, `react-router-dom`, `framer-motion`,
  `lucide-react`, `sonner`, plus the Radix UI primitives and
  `class-variance-authority` / `clsx` / `tailwind-merge` that the shadcn/ui
  components depend on.
- The `zite.config.json` file from the original export was platform-specific
  to Zite's builder and was removed — it has no effect on a standalone build.
- Tour images currently point to Unsplash and the original `images.fillout.com`
  export URLs. Swap these for your own hosted images before going live, since
  the `fillout.com` links are tied to the Zite export and aren't guaranteed
  to stay available long-term.
- All page/component logic and styling from the original export were
  preserved as-is.
