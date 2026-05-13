# Portfolio — Public Website

David Ezieshi's portfolio site. Next.js 16 + React 19, deployed to Vercel.
**This repo is public-only.** The admin panel lives in a separate repo
(`ezieshie-stack/Fiitco-Operation`-style split — see below).

---

## Architecture

```
┌──────────────────────┐      ┌──────────────────────┐
│  portfolio-build     │      │  portfolio-admin     │  (separate repo)
│  (THIS REPO)         │      │                      │
│                      │      │  - admin UI (CRUD)   │
│  - public pages      │      │  - env-var password  │
│  - <LiveImage/Text>  │      │  - owns convex/      │
│    fallback-safe     │      │    schema + handlers │
└──────────┬───────────┘      └──────────┬───────────┘
           │ reads (queries)             │ writes (mutations)
           │                             │
           └─────────────┬───────────────┘
                         ▼
              ┌─────────────────────┐
              │  Convex deployment  │
              │  (one, shared)      │
              └─────────────────────┘
```

- **One Convex deployment**, two apps point at it via `NEXT_PUBLIC_CONVEX_URL`.
- **Admin owns the schema** — `convex/articles.ts`, `content.ts`, `images.ts`,
  `schema.ts` live in the admin repo. Running `npx convex deploy` is admin's job.
- **This website vendors only the public read surface** — see
  `convex/_generated/api.d.ts` (hand-curated stub, not auto-generated).
  When admin adds/changes a public query, copy the signature into this file.

---

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

The site works **without Convex** — every `<LiveImage>` / `<LiveText>` falls
back to static content from `src/lib/content.ts`. Set
`NEXT_PUBLIC_CONVEX_URL` in `.env.local` only when you want to test
overrides set in the admin app.

---

## Env vars

| Var | Where | Required? |
|---|---|---|
| `NEXT_PUBLIC_CONVEX_URL` | `.env.local` + Vercel | No — fallback to static when unset |

That's it. No admin secrets in this repo.

---

## How content flows

**Pages render static content by default.** When you want a piece of
content to be editable from admin, swap it for a Live component:

```tsx
// Before
<h1>Operations & Business Systems Analyst</h1>

// After
<LiveText
  section="home"
  field="title"
  fallback="Operations & Business Systems Analyst"
  as="h1"
/>
```

```tsx
// Before
<Image src="/portrait.png" alt="..." width={1040} height={1300} />

// After
<LiveImage
  slot="home-portrait"
  fallbackSrc="/portrait.png"
  alt="..."
  width={1040}
  height={1300}
/>
```

Both are async server components — they call Convex on the server, fall back
to the static value if Convex isn't reachable or the slot is empty.

**Not yet wired:** the public pages still read directly from
`src/lib/content.ts`. Wiring Live components into pages is a follow-up
("Commit 4" in prior session notes).

---

## Code layout

```
src/
  app/                      Next.js App Router routes
    page.tsx                /
    about/, work/, process/, insights/, contact/, resume/
  components/
    Nav.tsx, PortfolioFooter.tsx, BackgroundCanvas.tsx, Reveal.tsx
    cms/
      LiveImage.tsx         Server component, Convex-backed image
      LiveText.tsx          Server component, Convex-backed text
    home/                   Hero, FeaturedProjectCard, etc.
    work/, process/, insights/, contact/
  lib/
    cms.ts                  fetchQuery wrappers (server-side, fail-safe)
    content.ts              Static fallback content for every page

convex/
  _generated/
    api.d.ts                Hand-curated public query types (vendored)
    api.js                  Runtime stub (anyApi from convex/server)
```

---

## Branches

- `main` — production, deployed by Vercel
- `claude/continue-work-TZwxb` — current working branch (this session)
- `claude/build-portfolio-website-LcWty` — older hero-only branch (no admin/Convex)
- `claude/fix-image-sizing-GEaxg` — historical: same as continue-work-TZwxb
  before the admin strip
- `claude/add-image-to-public-jiRYI` — old experiment placing Next app in
  `portfolio/` subfolder; superseded

---

## Deploy

Vercel project: `portfolio-build` (Hobby). Build with `npm run build`,
output is fully static except `/insights/[slug]` (SSR-on-demand). No
custom domain yet — using preview URLs.

**Set in Vercel:**
- `NEXT_PUBLIC_CONVEX_URL` — Production + Preview (optional; site works
  without it)

---

## Companion admin repo (TODO)

Sister repo to be created: **`portfolio-admin`** (new GitHub + new Vercel
project). Mirrors `Fiitco-Operation` pattern. Will contain:

- `convex/` — owns schema (`articles`, `siteContent`, `websiteImages`)
- `src/app/admin/*` — login + CRUD pages
- `middleware.ts` — env-var session gate
- Env vars: `ADMIN_PASSWORD`, `ADMIN_SECRET`, `NEXT_PUBLIC_CONVEX_URL`

Reference: the admin code that just got stripped from this repo is
preserved in branch `claude/fix-image-sizing-GEaxg` (tip `98b590e`) — use
it as the starting point for the new admin repo.

---

## Framer (deprecated)

The earlier Framer build at `remarkable-company-835464.framer.app` is
parked. All notes about Framer node IDs, breakpoints, and OperationsDiagram
are historical — kept only in git history. If you find yourself reading
"Framer MCP" instructions in old session logs, ignore them.
