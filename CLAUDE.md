# Portfolio — Admin Panel

David Ezieshi's portfolio admin. Next.js 16 + React 19 + Convex.
Deployed separately from the public site; both share one Convex deployment.

---

## Architecture

```
┌──────────────────────┐      ┌──────────────────────┐
│  portfolio-build     │      │  portfolio-admin     │
│  (public website)    │      │  (THIS REPO)         │
│                      │      │                      │
│  - public pages      │      │  - /admin/login      │
│  - <LiveImage/Text>  │      │  - /admin dashboard  │
│  - vendored API d.ts │      │  - articles/content/ │
│                      │      │    images CRUD       │
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

- **This repo owns the Convex schema** (`convex/schema.ts`) and all
  mutation handlers (`articles.ts`, `content.ts`, `images.ts`).
- Run `npx convex dev` (or `convex deploy` in CI) from this repo to push
  schema changes. The public site does not need to be redeployed for
  schema-only changes — it only reads.
- When you add or rename a **public** query, update the vendored
  `convex/_generated/api.d.ts` stub in the public repo to match.

---

## Auth

Single-admin, env-var password:

| File | What it does |
|---|---|
| `middleware.ts` | Redirects `/admin/*` → `/admin/login` if no valid session cookie |
| `src/lib/admin-auth.ts` | HMAC-signed session token + constant-time password compare |
| `src/app/api/admin/auth/route.ts` | POST = login (sets cookie), DELETE = logout |
| `src/app/admin/login/page.tsx` | Login form |

Session cookie: `portfolio_admin_session`, signed with `ADMIN_SECRET`,
30-day expiry, `httpOnly` + `sameSite=lax` + `secure` in production.

---

## Env vars

| Var | Required | What |
|---|---|---|
| `ADMIN_PASSWORD` | yes | Plaintext password. Compared constant-time. |
| `ADMIN_SECRET` | yes | HMAC key. `openssl rand -hex 32`. |
| `NEXT_PUBLIC_CONVEX_URL` | yes | Convex deployment URL. Same value the public site uses. |
| `CONVEX_DEPLOY_KEY` | only for Vercel | Convex deploy token, set in Vercel so `convex deploy` runs at build time. Get from Convex dashboard → Settings → Deploy Keys. |

`.env.local` for dev, set the same values in **Vercel → Settings → Environment Variables** (Production + Preview) for the deployed app.

---

## Routes

| Route | What |
|---|---|
| `/` | Redirects to `/admin/login` |
| `/admin/login` | Password form |
| `/admin` | Dashboard with stat tiles |
| `/admin/articles` | List + create/edit modal + publish toggle + delete |
| `/admin/content` | Section picker + JSON editor (override/reset for each page) |
| `/admin/images` | Image grid + upload to Convex storage + slot manager |
| `/api/admin/auth` | Login/logout endpoint |

---

## Convex schema

Three tables:

- `articles` — blog posts the public site renders at `/insights/[slug]`
- `siteContent` — per-section override blobs (e.g., `home.title`, `about.intro`)
- `websiteImages` — slot-based image references (e.g., `home-portrait`)

See `convex/schema.ts` for field definitions.

---

## Local development

```bash
npm install
cp .env.example .env.local
# fill in vars
# in one terminal:
npx convex dev
# in another:
npm run dev
```

`npx convex dev` watches `convex/*.ts`, pushes schema changes to your dev
deployment, and regenerates `convex/_generated/`. Commit the regenerated
`_generated/api.d.ts`, `api.js`, `dataModel.d.ts` so Vercel can build
without running `convex dev`.

---

## Deploy to Vercel

1. Vercel → Add New → Project → Import `ezieshie-stack/portfolio-admin`
2. Framework Preset: Next.js (auto-detected)
3. Build Command: `next build` (default)
4. **Environment Variables** (Production + Preview):
   - `ADMIN_PASSWORD`
   - `ADMIN_SECRET`
   - `NEXT_PUBLIC_CONVEX_URL`
   - `CONVEX_DEPLOY_KEY` (optional but recommended — lets Vercel push schema changes on each deploy via `convex deploy`)
5. Deploy.
6. Visit `<your-vercel-url>/admin/login` and sign in.

---

## Branch policy

- `main` — production. Vercel auto-deploys.
- Feature branches: `claude/<topic>-<id>` for Claude-driven work.

No staging Convex deployment yet — dev + prod both target the same
Convex project. Set up a separate prod deployment via Convex dashboard
when needed.
