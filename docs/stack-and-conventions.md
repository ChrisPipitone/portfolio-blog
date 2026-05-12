# Stack & Conventions

Notes on how this site is built and why. Written for future-me and for a potential blog post.

---

## The Stack

**Astro** — static site generator. Outputs plain HTML/CSS/JS. No server, no runtime, no database. Every page is pre-built at deploy time.

**GitHub Pages** — hosts the `dist/` output. Deploys automatically on push to `main` via GitHub Actions.

**Cloudflare** — DNS only (not proxied). Points the domain at GitHub's servers. GitHub handles HTTPS via Let's Encrypt.

**Custom domain** — `chrispipitone.com`. Only real ongoing cost (~$10/yr).

---

## What `.nojekyll` Is

GitHub Pages was built for Jekyll (a different static site generator). By default, GitHub runs Jekyll on whatever you push, which means it silently ignores any directory starting with `_`.

Astro puts all its compiled CSS and JS in `_astro/`. Without `.nojekyll`, the site loads but the styles and scripts are 404'd — GitHub's Jekyll pass ate them.

`.nojekyll` is an empty file. Its presence is the signal: "don't run Jekyll on this." Content doesn't matter. It lives in `public/` so Astro copies it to `dist/` on every build.

---

## How Astro Works

### Pages → URLs

Files in `src/pages/` become URLs directly:
- `src/pages/index.astro` → `/`
- `src/pages/about.astro` → `/about`
- `src/pages/projects/index.astro` → `/projects`
- `src/pages/projects/[slug].astro` → `/projects/anything` (dynamic)

### Content Collections

`src/content/projects/my-project.md` is a content collection entry. Astro reads it, validates its frontmatter against the schema in `src/content.config.ts`, and makes it available via `getCollection("projects")`.

The dynamic page `src/pages/projects/[slug].astro` calls `getStaticPaths()` at build time, which tells Astro: "generate one page per project." Each page gets the project data and renders the markdown body.

Adding a project = drop a `.md` file in `src/content/projects/` with the right frontmatter, push. Done.

### Components

`.astro` files are components. They have three sections:
```
---
// Frontmatter (server-side JS — runs at build time, not in browser)
const { title } = Astro.props;
---

<!-- HTML template -->
<h1>{title}</h1>

<style>
  /* Scoped CSS — only applies to this component */
  h1 { color: red; }
</style>
```

Styles in `<style>` blocks are **scoped** — Astro adds a unique attribute to the elements and selectors so they can't leak out. This is why you can write `.card` in `ProjectCard.astro` and `.card` in another component without collision.

### Layouts

`src/layouts/Base.astro` wraps every page with the `<html>`, `<head>`, fonts, nav, and theme logic. Every page that uses `<Base>` gets all that for free.

`src/layouts/ProjectLayout.astro` extends `Base` and adds the project-specific chrome (back link, title, tags, divider). Project pages use this layout.

---

## CSS Conventions

### Design Tokens (`src/styles/tokens.css`)

All colors, fonts, and spacing are CSS custom properties defined in one place:
```css
--color-accent: #7A2020;
--font-heading: "Libre Baskerville", Georgia, serif;
--space-md: 1rem;
```

To change the theme, edit `tokens.css`. Nothing else changes. Dark mode works the same way — `[data-theme="dark"]` overrides the token values; every component picks up the new values automatically.

### Component Styles

Each component has its own `<style>` block with BEM-ish class names (`.card`, `.card__title`, `.card__footer`). No global side effects.

Global styles that need to apply everywhere (typography resets, `.prose`, `.grain-bg`) live in `src/styles/global.css`.

### Prose Class

`.prose` in `global.css` styles the markdown output on blog posts and project pages — headings, paragraphs, lists, code blocks, blockquotes. It's applied by `ProjectLayout.astro` around the `<slot />` that renders the markdown.

---

## Clickable Cards

The project card uses a CSS trick to make the whole card clickable while keeping the GitHub link independently clickable:

```css
.card {
  position: relative; /* establishes stacking context */
}

.card__title a::after {
  content: "";
  position: absolute;
  inset: 0; /* stretches the ::after to cover the entire card */
}

.card__github {
  position: relative;
  z-index: 1; /* sits above the ::after overlay */
}
```

The `::after` pseudo-element on the title link is invisible but covers the whole card, making it one big click target. The GitHub link escapes the overlay via `z-index`.

---

## GitHub Actions Deploy

`.github/workflows/deploy.yml` runs on every push to `main`:
1. Checks out the repo
2. Installs Node 22 deps
3. Runs `astro build` → produces `dist/`
4. Uploads `dist/` as a Pages artifact
5. Deploys the artifact to GitHub Pages

The `concurrency: cancel-in-progress: true` setting means if you push twice fast, the first deploy is cancelled — only the latest ships.

---

## Adding Content

**New project:**
```
src/content/projects/your-project-name.md
```
Required frontmatter:
```yaml
---
title: "Project Name"
description: "One sentence."
date: 2026-01-01
tags: ["Tag1", "Tag2"]
github: "https://github.com/..."   # optional
image: "/images/project.jpg"       # optional
featured: true                     # show on home page
draft: false
---
```

**New blog post:**
```
src/content/blog/your-post-slug.md
```
Required frontmatter:
```yaml
---
title: "Post Title"
description: "One sentence."
date: 2026-01-01
tags: ["Tag"]
draft: false
---
```

Set `draft: true` to hide something from the live site while you're working on it.
