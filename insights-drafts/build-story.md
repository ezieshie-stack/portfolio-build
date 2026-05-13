# DRAFT — paste these fields into your Convex dashboard

Open https://dashboard.convex.dev → portfolio-build → Data tab → `articles` table → "Add document". Fill in each field below.

---

## slug
```
shipping-a-portfolio-without-a-dev-environment
```

## title
```
Designing a Build Pipeline When I Couldn't Run a Local Server
```

## subtitle
```
What I learned about workflow design from building my own portfolio under hardware and tooling constraints.
```

## category
```
Process Design
```

## excerpt
```
The constraint shaped the architecture. With my laptop overheating on every dev server, I designed a pipeline around the limitation — and it taught me more about systems thinking than any of the projects I was trying to showcase.
```

## date
```
May 2026
```

## readTime
```
7 min read
```

## published
```
true
```

## featured
```
true
```

## pills (array of strings — add each separately in the dashboard)
```
Process
Systems
Tools
```

## body (paste the full markdown below)

```markdown
For months I tried to build this portfolio the normal way. Templates didn't fit. Figma was too heavy without a subscription. Framer had something close but every tweak hit a wall. So I tried something I hadn't seen anyone else do: copy the Framer template's code into Claude and rebuild it from scratch.

Two days in, my laptop started overheating. Then hanging for hours. Then restarting on its own. I reset macOS. The problem came back. Eventually I reset the system as new — wiped everything, started clean.

That's when I had to design a different process.

## The constraint shaped the architecture

If I couldn't run a local dev server without my machine crashing, I needed a pipeline that didn't require one. Every step had to happen somewhere else.

This is the workflow I ended up with:

1. **ChatGPT** for vision. I'd describe the page I wanted and ask for a generated reference image — what does a modern Operations & Business Systems Analyst portfolio look like in 2026?
2. **v0** to get an initial code skeleton from that image.
3. **Claude (web)** to refine the code through GitHub. No local IDE. The web app pulls the repo, edits files, commits.
4. **GitHub** as the single source of truth — every change a commit, every regression one revert away.
5. **Vercel** auto-deploys on every push, so the site is the test environment.

No local dev server. No `npm run dev`. No IDE. The portfolio you're reading was built, almost entirely, in a browser.

## What that workflow forced me to do well

When you can't see your changes locally, you start making them differently.

**Smaller commits.** When the only way to see a change is to deploy it, you stop bundling unrelated edits. Each commit becomes a hypothesis.

**Better commit messages.** They're the only narrative anyone (including future me) can rebuild context from.

**Defensive design.** Every component has a fallback. Every Convex query falls back to static content. The site can't break to a white screen, because I have no fast way to debug a white screen.

**Proper branching.** I learned the hard way: never push directly to main. PR previews caught a dozen issues that would have been live in production.

It's the same operational thinking I'd bring into a job — I just hadn't expected to apply it to my own build process. Visibility (every change in the commit log), governance (PR reviews, even when reviewing yourself), iteration (small commits, easy reverts).

## The hardware lesson, restated as a pattern

The laptop overheated because of three things: a heavy local dev server, an IDE running language servers, and a Chromium MCP bridge consuming memory. Each one was small. Together they pegged the system.

I didn't fix the laptop. I removed the load. The dev server moved to Vercel. The IDE moved to a browser. The MCP bridge went away once Claude could read GitHub directly.

That's the thing about constraints. The first instinct is always to fight them — buy a new laptop, restart the project, give up. The more interesting move is to redesign around them. Most operating problems aren't capacity problems. They're allocation problems.

## What broke along the way

A list of things I learned the hard way, none of which were in any tutorial:

- **iCloud Drive corrupts git repositories.** The `.git` folder gets stripped of internal files because iCloud treats them as syncable cruft. My local repo became a non-repo overnight. Move git projects out of iCloud — `~/Documents/dev/` or anywhere outside the iCloud root works.
- **GitHub no longer accepts passwords for git operations.** You need a Personal Access Token. The error message says "invalid username or token" but doesn't mention this — it took me three retries to figure out my actual GitHub username (not my email).
- **Never paste secrets into chat.** I leaked a token once. It took thirty seconds to revoke and rotate. Could have taken hours to clean up if anyone had been listening.
- **`npx convex dev` needs interactive browser auth.** It can't be done from a remote sandbox. Some setup steps will always require your local machine.

## Why I'm posting this

I almost didn't write it. The temptation with a portfolio is to only show the polished output — the case studies, the metrics, the diagrams that look like real product surfaces. Show the thinking, hide the mess.

But the mess is the case study. A non-developer designed an operational pipeline to ship a developer-grade portfolio without a working dev environment. That's the work. That's what I'd do for a team if they handed me a constraint and said "make this work anyway."

The polished site is the artifact. The pipeline is the actual deliverable.

If you're hiring for someone who can think operationally about how things get done — not just what gets built — this is what that looks like in practice.
```

---

## After you save the document in Convex

The article will appear immediately in the Insights grid (no redeploy needed) and the URL `/insights/shipping-a-portfolio-without-a-dev-environment` will render the full body.

To unfeature or unpublish it later, just edit the document in the dashboard — set `featured: false` or `published: false`.
