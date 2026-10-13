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
links: # optional, any number; a "Demo" label sorts first
  - label: "GitHub Repo"
    url: "https://github.com/you/repo"
  - label: "Demo"
    url: "https://demo.example.com"
image: "/images/your-project.jpg" # optional, place file in public/images/
featured: true # shows on homepage
draft: false
---
```

There are no per-project pages. The title and thumbnail open the first link; the rest show beneath the tags.

3. `git add . && git commit -m "add: project name" && git push`

The site deploys automatically via GitHub Actions.

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
│   ├── ProjectCard.astro   # /projects grid card
│   ├── ProjectSlab.astro   # Homepage project slab
│   └── SectionHeader.astro # Navy section band with label
├── config/
│   └── site.ts             # Site-wide metadata
├── content.config.ts       # Content collection schema
├── content/
│   └── projects/           # One .md per project (frontmatter drives the site)
├── layouts/
│   └── Base.astro          # HTML shell, fonts, nav
├── pages/
│   ├── index.astro
│   ├── about.astro
│   └── projects/index.astro
└── styles/
    ├── global.css          # Base resets, prose styles
    └── tokens.css          # Design tokens (edit here to retheme)
```

## Deployment

GitHub Pages via GitHub Actions. See `.github/workflows/deploy.yml` (set up when repo is created).

Domain: TBD — update `site` in `astro.config.mjs` and `url` in `src/config/site.ts` when purchased.
