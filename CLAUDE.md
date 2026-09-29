# Portfolio Site — Project Context

## What This Is

Chris's personal portfolio site. Goal: showcase work, have a voice, keep it low-friction to maintain.

## Owner Goals

- **Showcase projects easily** — adding a new project should be simple (exact definition TBD as we learn the stack)
- **Free or near-free hosting** — minimize cost and maintenance overhead
- **Custom domain** — custom URL required
- **Blog** — either per-project blog or general blog to flesh out ideas; not decided yet
- **Chris's voice** — website text, descriptions, and copy written by Chris, not AI-generated; "chris style" to be defined as site develops
- **AI tooling for code is fine** — Claude and other tools used for building the site; amount TBD as project progresses
- **No AI-written content** — no generated bios, project descriptions, blog posts, etc. unless Chris explicitly decides otherwise

## Constraints

- Chris is new to portfolio sites — ease of adding content is a priority
- Hosting cost ceiling: free tier or minimal (< a few dollars/month)
- AI content: only what Chris explicitly decides to include

## Style Philosophy

- Not a CSS showcase — design serves content, not the other way around
- Site reflects how Chris thinks and solves problems, not visual flair
- Aesthetic: utilitarian + classy. Earned, not sold. Quality announces itself.
- Reference feel: precision tooling, leather goods, field gear — functional, no flash

## Design — LOCKED

Single dark theme. **There is no light mode** — the toggle and light palette were removed.

**Typography**
- Display / h1 / nav mark: Archivo 600 — `--font-heading`
- Body / UI: Archivo — `--font-body`
- Labels, meta, code, the fetch block: IBM Plex Mono — `--font-mono`

**Layout**
- Sticky translucent nav (blurred `#0e0f11`), name mark left, links right, Résumé pill
- Split hero: portrait left in a bordered frame with sand corner ticks, eyebrow + h1 + bio + subline + two buttons right
- Neofetch block: "CP" block-glyph logo left, `key → value` spec rows right, palette swatches beneath
- Projects on the homepage: full-width alternating slabs, media one side / text the other, hairline rule between
- `/projects`: card grid, 16:10 media, status badge top-right
- Footer: hairline rule, copyright left, GitHub / LinkedIn / Résumé right

**Theme: Gunmetal & Sand**

- Base: `#0e0f11`, panel `#15171a`, raised `#1b1e22`
- Hairline: `#262a2f`, hover `#3c414a`
- Headings: `#f3f1ec`, body `#d6d3cd`, muted `#7e8189`
- Accent: `#e8c39e` (sand), hover `#f2d4b4`, accent hairline `#453a2d`, wash `#231d16`
- Code blocks: `#121417` on a `#262a2f` hairline

**Status badges** — one shared `.badge` class in `global.css`, one modifier per status
- `wip` sand · `shipped` green · `hold` blue · `abandoned` clay · `archived` grey

**Components**
- `Hero.astro` — split hero; portrait path from `site.portrait`
- `Fetch.astro` — neofetch block; content lives in `src/config/stack.ts`
- `ProjectSlab.astro` — homepage alternating slabs
- `ProjectCard.astro` — `/projects` grid card
- Both resolve `image` from either `/src/assets/...` (build-optimised) or `/public/...` (served as-is)


## Audience / Purpose

- Primary focus: software/hardware/firmware engineering projects
- Secondary: fun/misc content in its own separate section (not mixed with technical work)
- Writing: how Chris views problems, approaches, and ideas
- Future: YouTube channel integration (embed videos on relevant project/blog pages)

## Stack Decision

**Astro + GitHub Pages + Cloudflare + custom domain**

- Astro: content-first static site, Markdown-native, blog built-in
- GitHub Pages: free hosting, deploys on push (familiar git workflow)
- Cloudflare: free DNS + HTTPS for custom domain
- Custom domain: ~$10-15/yr (only real cost)

## Content Structure (working model)

- `/projects` — one Markdown file per project; metadata (title, tags, github link, date); description + approach in Chris's voice
- `/blog` — general writing; can cross-link to projects
- YouTube embeds: inline on project or blog pages where relevant
- `/about` — who Chris is, how he thinks

## Images — All Optional

- Project card thumbnail: optional. Cards render fine without one.
- Project writeup body: anywhere from zero images to many. No assumed structure.
- Blog post body: same — zero to many images, no assumed structure.
- Never assume a project or post has images. Never require them.

### Image locations

**Frontmatter thumbnails** (card images, hero images) → `src/assets/images/{type}/{slug}/filename.ext`
- Processed by Astro at build time (optimized, lazy-loaded via `<Image>` component)
- Referenced in frontmatter as: `image: /src/assets/images/projects/my-project/thumbnail.jpg`
- Supported formats: jpg, jpeg, png, webp, avif, svg

**Inline images in markdown body** → `public/images/{type}/{slug}/filename.ext`
- Served as-is (no build-time optimization)
- Referenced in markdown as: `![alt text](/images/projects/my-project/diagram.png)`
- Optimize these manually before adding (run through Squoosh or similar)

## Developer Notes

- Adding project = new `.md` file + optional assets, then `git push`
- No CMS, no login, no server
- Chris writes all copy; AI assists code only
