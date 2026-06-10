# Article Technical Brief — Template

Per-article handoff document. Filled out in Claude Code (this repo,
where the codebase lives) and pasted as a knowledge file into the
claude.ai "Portfolio Insights — Drafting" Project, where the prose
gets written.

**Why this exists:** the chat-side drafting Project has good voice
tuning and a real drafting surface, but no access to the actual repo.
The brief is the bridge. It's voice-NEUTRAL on purpose — facts, file
paths, decisions, numbers, quotables. Voice and pacing happen on the
claude.ai side.

**Workflow:**

1. In Claude Code (this repo): I fill out a copy of this template
   for the article — pulling real code, commits, decisions, numbers,
   screenshots from the live repo.
2. Copy the filled brief, paste into a new chat inside the claude.ai
   Project, with the message: *"Article brief attached. Read it, then
   ask me 2–3 clarifying questions before drafting."*
3. Draft the article in the Project (Artifacts surface).
4. When the MDX is final, paste it back here in Claude Code; I commit
   the file to `src/content/insights/<slug>.mdx`, drop assets into
   `public/insights/<slug>/`, push → Vercel deploys.

Don't commit filled briefs — they're scratch. The template stays.

---

## 1. Working title and angle

- **Working title:**
- **Angle (one sentence — the specific frame, not the topic):**
- **Category:** Process | Tools | Build Notes | Ops Thinking | Opinion
- **Target word count:** 800 | 1500 | 2500
- **Audience for THIS one:** ops practitioners | hiring managers |
  eng leaders | curious devs | (mix — say which one comes first)

## 2. The takeaway

One sentence the reader should remember a week later.

>

## 3. The tension / problem

What constraint, frustration, or contradiction drove this work? Be
specific — generic "I wanted to learn X" doesn't make for a good
article.

- **Before state:**
- **Constraint:**
- **Why it mattered (stakes):**

## 4. What got built (the concrete deliverable)

- **PR(s):**
- **Branch(es):**
- **Commit range:** `<SHA>..<SHA>`
- **Files touched (with one-line role each):**
  - `path/to/file.ts` — _what it does_
- **New dependencies:** _name@version_
- **Lines added / removed:**

## 5. Key decisions

For each meaningful fork-in-the-road, capture choice + alternative + reason.
Aim for 2–4. The article hangs on these.

### Decision 1: <one-line summary>
- **Picked:**
- **Rejected:**
- **Why (the real reason, not the marketing reason):**
- **Tradeoff accepted:**

### Decision 2: <one-line summary>
- **Picked:**
- **Rejected:**
- **Why:**
- **Tradeoff accepted:**

## 6. Code worth showing

Snippets the article should excerpt verbatim. Include enough surrounding
context that the reader can orient without opening the repo.

```ts
// path/to/file.ts:12-28 — purpose: <why this snippet matters>

<paste the actual code>
```

## 7. Numbers, screenshots, evidence

Anything that proves a claim instead of stating it.

- **Build time / perf numbers:**
- **Bundle size delta:**
- **Screenshots staged in `public/insights/<slug>/`:**
  - `before.png` — _what it shows_
  - `after.png` — _what it shows_
- **Logs / terminal output (paste-worthy):**
- **External references** (commits, issues, vendor docs):

## 8. Surprises, friction, dead ends

The "I almost gave up three times" material. Specific moments where
something didn't work — what broke, what you tried, what fixed it.
This is what separates a build note from marketing.

- **Moment 1:**
- **Moment 2:**

## 9. Quotables — verbatim phrasing

Lines from how I (David) actually talk about this work, captured from
chat or notes. The Project should echo this cadence, not paraphrase
the meaning into corporate prose.

>
>

## 10. What NOT to include

Out of scope, too inside-baseball, dates badly, or already covered
in another article.

-
-

## 11. Frontmatter pre-fill

Known values for the final MDX file:

```yaml
title: ""
excerpt: ""
category: ""
date: ""
readTime: ""
subtitle: ""
pills: []
featured: false
```
