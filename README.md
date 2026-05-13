# portfolio-admin

Admin panel for David Ezieshi's portfolio. Next.js 16 + React 19 + Convex.

Companion to [`portfolio-build`](https://github.com/ezieshie-stack/portfolio-build)
(the public website). Both apps share one Convex deployment — admin writes,
website reads.

## Quick start

```bash
npm install
cp .env.example .env.local
# fill in ADMIN_PASSWORD, ADMIN_SECRET, NEXT_PUBLIC_CONVEX_URL
npx convex dev          # only if first-time provisioning the Convex deployment
npm run dev             # http://localhost:3000 → redirects to /admin/login
```

See `CLAUDE.md` for full architecture and deploy steps.
