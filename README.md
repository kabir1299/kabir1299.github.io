# Kabir Mishra — Portfolio

A systems-minded personal portfolio based on the supplied Tanishq Rawat reference implementation. The reference's visual architecture, section components, design tokens, local typography and motion system are retained; all professional content is Kabir's.

## Stack
- Next.js 15 App Router + TypeScript, static export (`output: "export"`)
- Tailwind CSS v4 and reference design-token layer
- Motion (`motion/react`) for all component animation
- Lenis smooth scrolling, disabled for `prefers-reduced-motion`
- lucide-react icons and inline SVGs
- Local Space Grotesk, Geist Sans and JetBrains Mono fonts via `next/font/local`

## Run
Node 20+ recommended.

```bash
npm install
npm run dev
```

Production static export:

```bash
npm run build
```

The generated static site is in `out/`.

## Edit content
All portfolio content is in `src/data/content.ts`: profile, socials, About, experience, projects, skill categories and navigation. No reference person's biography, work history, blog articles, or performance metrics are included.

## Design and motion
The reference's original design-token CSS, reusable Section/Reveal components, centralized `src/lib/motion.ts`, Lenis integration, scroll progress, parallax backdrop, live network-diagram hero, staggered cards, interactive skill tabs, navbar and section composition are used as the implementation basis.

Reduced-motion behavior is honored by the motion system and Lenis. The site includes semantic sections, a skip link, focus styles and labelled social controls.

## Deploy to GitHub Pages
This repository is configured as a user site at `kabir1299.github.io`, so `NEXT_PUBLIC_BASE_PATH` is empty in `.github/workflows/deploy.yml`. If deploying as a project site instead, set `NEXT_PUBLIC_BASE_PATH="/<repository-name>"` and `NEXT_PUBLIC_SITE_URL` to the full site URL in the workflow.

The workflow builds `out/` and deploys it through GitHub Pages Actions.


## Resume source
The published `public/resume.pdf` is the resume supplied for this portfolio update. Page content uses its experience, scale metrics, skills, education and AR Home Decor project details.
