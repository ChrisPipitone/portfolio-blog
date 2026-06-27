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
- Display / h1 / nav logo: Roboto Slab (serif, 700) — `--font-heading`
- Body / UI / h2-h6: Inter — `--font-body`
- Code: Space Mono — `--font-mono`

**Layout**
- Near-black nav bar (`#1C1A20`), sticky
- Clean hero: large Roboto Slab name, Inter tagline+bio, skills pill row
- Minimal section headers: hairline border-top + small uppercase label (no colored bands)
- White cards with gold top-border accent, subtle shadow, hover lift
- Matching slate footer (bookends with nav)

**Theme: Slate & Gold**

Light mode:
- Base: `#F9F7F4` (warm off-white)
- Nav / footer: `#1C1A20` (near-black, warm)
- Accent / links: `#C8942A` (gold)
- Body text: `#444444`
- Muted text: `#888888`
- Card bg: `#ffffff`, border: `rgba(0,0,0,0.07)`, top accent: `3px solid #C8942A`
- Tags / skills: `background #f0ede8`, `color #666666`, border-radius pill
- WIP badge: `background #FEF3C7`, `color #92400E`

Dark mode:
- Base: `#0E0E10`
- Nav / footer: `#111010` (near-black)
- Accent / links: `#D4A040` (slightly brighter gold)
- Headings: `#E8E6E2` (warm white)
- Body text: `#909090`
- Card bg: `#1A1A1C`, border: `rgba(255,255,255,0.06)`, top accent: `3px solid #D4A040`
- Tags: `background #2A2018`, `color #A07830`
- WIP badge: `background #2D1F00`, `color #D4A040`

Code blocks (both modes): `#f4f4f2` bg light / `#141416` bg dark, no syntax dark panel.

**Cards**
- `border-top: 3px solid var(--color-accent)` (gold top accent, not left)
- `box-shadow: var(--shadow-card)` + hover lift (`translateY(-2px)`) + stronger shadow
- WIP/Archived badge rendered inline with title in card header row
- Tags: pill style (border-radius: 100px), warm bg

**Features added**
- Skills row in hero (from `site.skills` array in `src/config/site.ts`)
- Resume link in nav (set `site.resume = "/resume.pdf"` once PDF added to `public/`)
- GitHub + LinkedIn in footer (from `site.socials`)
- Scroll fade-in on project cards and post list items (IntersectionObserver, staggered)
- `status` frontmatter field on projects (`"wip"` | `"shipped"` | `"archived"`) — renders badge on card and project page

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
