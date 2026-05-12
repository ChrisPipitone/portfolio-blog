Personal portfolio site. Built with Astro, deployed on GitHub Pages.

## Commands

| Command           | Action                                   |
| :---------------- | :--------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`     | Start local dev server at localhost:4321 |
| `npm run build`   | Build production site to ./dist/         |
| `npm run preview` | Preview production build locally         |

## Adding a project

1. Create `src/content/projects/your-project-name.md`
2. Fill in the frontmatter:

```markdown
---
title: "Your Project Title"
description: "One or two sentences."
date: 2024-06-01
tags: ["Go", "Firmware"]
github: "https://github.com/you/repo" # optional
image: "/images/your-project.jpg" # optional, place file in public/images/
featured: true # shows on homepage
draft: false
---

Your writeup here in Markdown. Code blocks get syntax highlighting automatically.
```

3. `git add . && git commit -m "add: project name" && git push`

The site deploys automatically via GitHub Actions.

## Adding a blog post

Same as above but in `src/content/blog/your-post-slug.md`.

Frontmatter fields: `title`, `description`, `date`, `tags`, `draft`.

## Changing the theme

All visual tokens live in **`src/styles/tokens.css`** — colors, fonts, spacing.
Edit values there. Nothing else needs to change.

To swap fonts:

1. Update the Google Fonts URL in `src/layouts/Base.astro`
2. Update the `--font-heading`, `--font-body`, `--font-mono` vars in `src/styles/tokens.css`

## Changing site metadata

Edit **`src/config/site.ts`** — name, tagline, bio, nav links, social URLs.

Update **`astro.config.mjs`** `site` field when the domain is set.

## Project structure

```
src/
├── components/
│   ├── Hero.astro          # Homepage hero section
│   ├── Nav.astro           # Sticky nav + dark mode toggle
│   ├── ProjectCard.astro   # Project card (grid + optional image)
│   └── SectionHeader.astro # Navy section band with label
├── config/
│   └── site.ts             # Site-wide metadata
├── content/
│   ├── config.ts           # Content collection schemas
│   ├── blog/               # Blog posts (.md or .mdx)
│   └── projects/           # Project writeups (.md or .mdx)
├── layouts/
│   ├── Base.astro          # HTML shell, fonts, nav
│   └── ProjectLayout.astro # Project detail page layout
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── blog/[slug].astro
│   ├── blog/index.astro
│   ├── projects/[slug].astro
│   └── projects/index.astro
└── styles/
    ├── global.css          # Base resets, prose styles
    └── tokens.css          # Design tokens (edit here to retheme)
```

## Deployment

GitHub Pages via GitHub Actions. See `.github/workflows/deploy.yml` (set up when repo is created).

Domain: TBD — update `site` in `astro.config.mjs` and `url` in `src/config/site.ts` when purchased.
