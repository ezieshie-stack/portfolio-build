# Convex Setup — One-Time Local Steps

This branch installs Convex for live content + media editing without redeploying.
You need to run a few commands on your **local machine** before the app can use
Convex. Until you do, the site falls back to the static defaults in
`src/lib/content.ts` and works exactly as it did before — nothing breaks.

## Step 1 — Pull and install

```bash
git pull
npm install
```

## Step 2 — Provision your Convex deployment

```bash
npx convex dev
```

What happens:
- A browser opens. Log in with GitHub or Google (Convex free tier — no card needed).
- Convex asks you to name the project. Suggested: `portfolio-build`.
- It creates a **dev deployment**, writes `.env.local` with two values:
  - `CONVEX_DEPLOYMENT=...`
  - `NEXT_PUBLIC_CONVEX_URL=https://<your-id>.convex.cloud`
- It pushes the schema in `convex/` to the dev deployment.
- It **overwrites** the stub files in `convex/_generated/` with real typed
  versions matching your schema.
- The terminal stays open watching for schema changes — leave it running while
  you work, or hit Ctrl-C when done (you can re-run anytime).

## Step 3 — Commit the regenerated files

After step 2, `git status` will show changes inside `convex/_generated/`.
Commit them:

```bash
git add convex/_generated/
git commit -m "Convex: regenerate typed _generated files"
git push
```

This is required so Vercel's build can compile against the real generated types.

## Step 4 — Add the env var to Vercel

1. Open your Vercel project → Settings → Environment Variables
2. Add a new variable:
   - **Name:** `NEXT_PUBLIC_CONVEX_URL`
   - **Value:** the URL from your local `.env.local`
   - **Environments:** Production AND Preview
3. Trigger a redeploy (push any commit, or click "Redeploy" in the Vercel dashboard)

## Step 5 — Deploy command (optional but recommended)

For Vercel to also push your Convex functions to a production Convex deployment
on every deploy, you need a deploy key:

1. In Convex dashboard → your project → Settings → Deploy Keys → Create
2. Copy the key.
3. In Vercel → Environment Variables, add `CONVEX_DEPLOY_KEY` (Production only)
4. In Vercel → Settings → Build & Development → Build Command, change to:
   ```
   npx convex deploy --cmd 'npm run build'
   ```

If you skip step 5, your dev deployment will be used for everything (fine for
solo work, but a separate prod deployment is the cleaner long-term setup).

## What happens if Convex isn't configured

The site keeps working. `ConvexClientProvider` detects no `NEXT_PUBLIC_CONVEX_URL`
and renders children without a provider. Components that try Convex queries
fall back to their static defaults from `lib/content.ts`.

## Editing content (after setup)

Open https://dashboard.convex.dev → your project → Data tab.

- **`articles`** — blog posts. Create rows here, set `published: true` to make
  them visible. The Insights page reads from this table.
- **`siteContent`** — section overrides. `section` is the key (`"home"`,
  `"about"`, etc.), `data` is the JSON shape that page consumes.
- **`websiteImages`** — swappable media slots. Each row has a `slot` key
  (e.g. `"home-portrait"`) that the site reads via `<LiveImage slot="..." />`.

## Schema changes

If the schema in `convex/schema.ts` changes, re-run `npx convex dev` locally —
it'll regenerate `_generated/`. Commit those files and push.

---

# Admin UI Setup

The admin lives at `/admin/login` (publicly reachable) and `/admin/*` (protected by middleware). Two env vars are required for admin to work.

## Step A — Generate a session secret

In your terminal:

```bash
openssl rand -hex 32
```

Copy the output. This is your `ADMIN_SECRET`.

## Step B — Pick an admin password

Pick a strong password. Save it in a password manager.

## Step C — Add both to `.env.local` (local dev)

Append to `.env.local`:

```
ADMIN_PASSWORD=your-chosen-password-here
ADMIN_SECRET=the-hex-string-from-step-A
```

Restart `npm run dev` if it's running. Note: `npx convex dev` does NOT need restarting — these are Next.js env vars, not Convex env vars.

## Step D — Add both to Vercel

Vercel → Settings → Environment Variables. Add `ADMIN_PASSWORD` and `ADMIN_SECRET` (Production + Preview).

## Using the admin

1. Visit `/admin/login` on your deployed site
2. Enter your password
3. You'll land at `/admin` (dashboard)
4. Manage articles, page copy, images via the sidebar
5. Click "Logout" in the sidebar footer to end your session (cookie expires in 30 days otherwise)
