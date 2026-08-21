# PROJECT_AUDIT

## 1. Tech Stack
- **Framework:** React 18 (`react` & `react-dom` ^18.3.1), Vite SPA.
- **Package Manager:** npm (inferred from common JS setups; `package.json` used)
- **Dependencies:**
  - `@radix-ui/react-accordion`: ^1.2.1
  - `@radix-ui/react-dialog`: ^1.1.2
  - `@radix-ui/react-label`: ^2.1.0
  - `@radix-ui/react-select`: ^2.1.2
  - `@radix-ui/react-slot`: ^1.1.0
  - `class-variance-authority`: ^0.7.0
  - `clsx`: ^2.1.1
  - `framer-motion`: ^11.3.0
  - `lucide-react`: ^0.451.0
  - `react`: ^18.3.1
  - `react-dom`: ^18.3.1
  - `react-router-dom`: ^6.26.2
  - `sonner`: ^1.5.0
  - `tailwind-merge`: ^2.5.2
- **Build Tool:** Vite (`vite` ^5.3.3) with `@vitejs/plugin-react` ^4.3.1. Configured with standard alias `@` mapping to `./src` in `vite.config.ts`.
- **CSS Approach:** TailwindCSS v3 (`tailwindcss` ^3.4.4, with `autoprefixer` and `postcss`). Extended with `@tailwindcss/typography` and `tailwindcss-animate`. Includes custom `src/index.css`.
- **Animation Libraries:** `framer-motion` is primarily used across the application for scroll reveal effects. `tailwindcss-animate` is also present for CSS utility animations.

## 2. Folder & File Structure
```text
src/
├── components/          - Reusable UI elements, Radix/shadcn-ui components, and specific layout parts
│   ├── tour-detail/     - Specific components used on the individual Tour Details page
│   └── ui/              - Base UI primitive components (button, input, accordion, etc.)
├── data/                - Static hardcoded data arrays and content blocks
├── hooks/               - Custom React hooks
├── lib/                 - Utility functions (e.g., tailwind class merging)
├── pages/               - Top-level React Router page components
│   └── home/            - Section components specific to the HomePage
├── App.tsx              - Root component defining routing
├── index.css            - Global Tailwind imports and base styles
└── main.tsx             - React entry point mounting to root
```
**Routes (from `src/App.tsx`):**
- `/` renders `HomePage`
- `/treks` renders `TreksPage`
- `/expeditions` renders `ExpeditionsPage`
- `/valleys` renders `ValleysPage`
- `/ski-tours` renders `SkiToursPage`
- `/cultural-tours` renders `CulturalToursPage`
- `/gallery` renders `GalleryPage`
- `/about` renders `AboutPage`
- `/safety` renders `SafetyPage`
- `/tours/:id` renders `TourDetailPage`
- `/pakistan-visa-guide` renders `VisaGuidePage`
- `/contact` renders `ContactPage`

## 3. Components Inventory
*(Selective List of Core Components)*
- `src/components/Footer.tsx`: Renders the site footer. Used by `App.tsx`.
- `src/components/Navbar.tsx`: Renders the main navigation menu. Used by `App.tsx`.
- `src/components/PageHero.tsx`: Renders hero section for standard pages. Props: `tracker`, `title`, `subtitle`. Used in About, Contact, Safety, Treks, Valleys, etc.
- `src/components/ScrollReveal.tsx`: Wraps children in Framer Motion animations to reveal on scroll. Accepts standard props (`children`, `delay`, etc.). Widely used across pages.
- `src/components/TourCard.tsx`: Displays a summary card for a tour. Props: `tour` object. Used on listing pages.
- `src/components/tour-detail/TourInquiryForm.tsx`: Sidebar inquiry form. Props: `tour` object. Used in `TourDetailPage`.
- `src/components/ui/*.tsx`: Standard shadcn-style primitive components (Accordion, Button, Input, Select, etc.). Accepting standard HTML attributes.

## 4. Data Layer
- **Storage:** All content is stored as hardcoded arrays/objects in TypeScript files.
- **Data Files:**
  - `src/data/index.ts`: Contains main arrays like `tours`, `categories`, `testimonials`, `faqs`, `gallery`, `founders`, and `businessInfo`.
  - `src/data/itineraries.ts`: Contains detailed day-by-day itineraries mapped by tour ID.
- **API Calls:** None found. There are no `fetch()` or `axios` requests anywhere in the codebase.
- **Forms:**
  - `TourInquiryForm.tsx` (in `src/components/tour-detail/`): Has fields for Name, Email, Phone, Group Size, Date, Message. Currently submits to nowhere (simulates delay with `setTimeout` and shows a toast).
  - `ContactPage.tsx`: Has fields for Name, Email, Phone/WhatsApp, Interested Trek, Travel Dates, Group Size, Message. Also submits nowhere (simulates delay and shows toast).

## 5. Assets & Media Pipeline
- **Storage:** Local images stored heavily in `public/images/`. A few images use external CDN URLs (e.g., Unsplash placeholders).
- **Optimization:** None natively implemented other than standard HTML `loading="lazy"` on some images. Large raw JPEGs are served directly. No optimization tools like `next/image` are used.
- **Large/Unoptimized Assets:**
  There are over 30 image files > 500KB in the `public/images/` directory. Notable heavy files include:
  - `public/images/k2-hero.jpeg` (3.10 MB)
  - `public/images/Broad Peak Expedition.jpeg` (2.54 MB)
  - `public/images/Chilam Joshi Festival.jpeg` (1.00 MB)
  - `public/images/Hussain Abad Waterfall.jpeg` (0.99 MB)
  - `public/images/Royal Baltistan Heritage Tour.jpeg` (0.98 MB)
  - `public/images/Tormik Valley.jpeg` (0.97 MB)

## 6. Styling & Animation Systems
- **Scroll-based/Parallax:** `src/components/ScrollReveal.tsx` utilizes Framer Motion (`useInView`, `motion.div`) for scroll reveal effects across the site.
- **GSAP ScrollTrigger:** None found.
- **WebGL/Three.js:** None found. The codebase relies solely on standard DOM components. 

## 7. SEO & Meta
- **Current Meta Tags:** Extremely basic in `index.html`. Only `<title>` (`K2 Adventure Pakistan`) and `<meta name="description">` are present globally.
- **Sitemap/Robots:** None found (`sitemap.xml` / `robots.txt` do not exist).
- **Open Graph:** None found. No `og:title`, `og:image`, or twitter cards present.

## 8. Deployment Config
- **Hosting Platform:** Vercel (inferred from the presence of `vercel.json`).
- **Environment Variables:** None found in the code (no `process.env` or `import.meta.env` usage detected).
- **Build Command:** `tsc -b && vite build` (outputs to `dist/`).
- **Custom Domain:** Likely configured in Vercel UI; no custom domain configuration file (like CNAME) present in source.
- **Config file:** `vercel.json` contains a rewrite rule sending `/(.*)` to `/index.html` to support React Router SPA client-side routing.

## 9. Performance Red Flags
- **Large Images:** Directly serving 3MB images (like `k2-hero.jpeg`) without compression or WebP conversion will severely impact LCP (Largest Contentful Paint).
- **Lighthouse Issues:**
  - Huge payload size due to raw `.jpeg` images.
  - Lack of image dimension attributes (`width` / `height`) on standard `<img>` tags can cause Cumulative Layout Shift (CLS).
  - Missing proper SEO tags (Open Graph).
- **Render-blocking:** The Vite setup natively minimizes this, and `lazy()` loading is used in `App.tsx` for route splitting, which is excellent. The primary bottleneck is purely asset size.

## 10. Backend Readiness Assessment
- **Where it would plug in:**
  1. **Forms:** `TourInquiryForm.tsx` and `ContactPage.tsx` are fully built UI-wise. The `handleSubmit` functions just need a `fetch('/api/submit', ...)` call patched in.
  2. **CMS / Dynamic Data:** The `src/data/index.ts` structures are typed well (`type Tour = ...`). This makes them perfect candidates to be hydrated by an API call (e.g. fetching a JSON list from a headless CMS like Sanity, Strapi, or Contentful) instead of being statically imported.
- **What needs an API if a backend is added:**
  - `tours` listing (fetching categories and tour summaries)
  - Tour detail pages (fetching specific tour `itineraries` and `pricing` based on route params)
  - Team members / founder bios
  - Gallery images
