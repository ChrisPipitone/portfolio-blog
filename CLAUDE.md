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

**Typography**
- Headings: Libre Baskerville (serif, heavy, legible)
- Body / UI: DM Sans
- Code: Space Mono

**Layout**
- Navy nav bar (sticky)
- Grain texture hero section (name, tagline, bio)
- Navy section header bands between content sections
- Clean off-white content areas between bands

**Theme: Gunmetal & Mahogany**

Light mode:
- Base: `#F5F2ED` (off-white, grain texture)
- Structure (nav, bands): `#1C2B4A` (navy)
- Accent / links: `#7A2020` (mahogany red)
- Body text: `#4a4540`
- Card bg: `#ffffff`, border: `#e0dbd2`, left accent: `3px solid #7A2020`

Dark mode:
- Base: `#1A1A1A` (gunmetal/charcoal)
- Nav: `#141414`
- Accent / links: `#7A2020` (mahogany red)
- Headings: `#E8E0D8` (warm white)
- Body text: `#606060` (stone)
- Card bg: `#212121`, border: `#2a2a2a`, left accent: `3px solid #7A2020`
- Tags: `background #2a2020`, `color #7a3030`

Code blocks (both modes): light background `#f8f8f6`, border `#ddd8cf`, dark text, syntax color only — no dark panel.

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
