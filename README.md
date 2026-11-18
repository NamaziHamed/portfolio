# hnamazi.vercel.app

Personal portfolio of Hamed Namazi, software & systems engineer.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4. Fonts are Geist, Geist Mono and Instrument Serif via `next/font`.

## Run locally

```bash
pnpm install
pnpm dev
```

## Editing content

All copy (profile, projects, experience, skills, education) lives in [`lib/content.ts`](lib/content.ts). Sections are in [`components/site/`](components/site/), one file each. Project screenshots go in `public/`.

The Open Graph image is generated at build time by [`app/opengraph-image.tsx`](app/opengraph-image.tsx).
