# INSIGHTS_PAGE.md — Handoff for the Insights Page Rebuild

> **Scope: the Insights page only** (`/insights` in the Next.js app at `ezieshie-stack/portfolio-build`). The deployed version is outdated — this doc specifies the current design. Source-of-truth files are in this bundle: `insights.html` (page shell + constellation script), `pages.jsx` (search "INSIGHTS" — all components + the full essay copy), `portfolio.css` (search "INSIGHTS PAGE" + "pf-entry" + "pf-reader"). **Recreate in Next.js patterns; do not paste the prototype HTML.** All global rules from `IMPLEMENTATION.md` still apply (import tokens, both themes, mobile breakpoints).

---

## 1. What this page IS now
A **personal journal ("The Notebook")**, not a blog with categories. Changes vs the deployed build:
- **No filter tabs** (All / Process Design / Business Analysis / Analytics / Systems — REMOVED).
- **No article grid** — there is exactly **one entry** so far.
- **No "Featured Insight" op-ed card** — replaced by the entry card below.
- New intro copy, a full-page **cursor-reactive constellation**, and a full **article reader** with the real essay.

## 2. Page structure (top → bottom)
1. **Nav** (shared; "Insights" active).
2. **Hero** — eyebrow `THE NOTEBOOK` (mono, 0.42em, `--accent`); title **"A working journal, kept in the open."** (`.pf-page-title` style); intro: *"This is where I think on paper. Half field notes from the work, half the questions underneath it. What I'm learning, what I got wrong, and the ideas I keep circling back to. Less a blog, more a notebook I happen to leave open."*
3. **Entry card** (the essay) — see §4.
4. **Note line** — feather icon + *"One entry so far. This notebook is just getting started, more will land here as I write them."* (mono-adjacent, `--text-dim`).
5. **Footer** (shared).

## 3. Cursor-reactive constellation (full-page background)
Canvas layer behind ALL page content (`position: fixed; inset: 0; z-index: 0; pointer-events: none;` — content wrapper is `z-index: 1`). Exact reference implementation: inline `<script>` in `insights.html`. Key parameters:
- Point count `clamp(28, area/26000, 70)`; radius 1–2.4px; drift velocity ±0.16px/frame, bouncing at edges.
- Lines between points closer than **130px**, opacity `(1 - d/130) * 0.12` (faint) — boosted to `* 0.5` when either point is within **190px of the cursor**.
- Points within 190px of cursor **brighten** (opacity 0.32 → 0.9, radius +0.8) and draw a line **to the cursor** (opacity up to 0.55).
- Color: read `--accent` from the themed root **each frame** (so light/dark both work). DPR capped at 2.
- **`prefers-reduced-motion: reduce`** → points stop drifting (static field; the cursor logic may also be disabled). Re-randomize on resize.

## 4. Entry card (`.pf-entry`)
Glass `Card` (glow, `padding: 0`, `overflow: hidden`), 2-col grid `1.05fr / 0.95fr` (`.pf-entry-grid`):
- **Left (`.pf-entry-copy`, 44px pad):** tag pills row — `Personal` (violet Badge) + mono `Jun 2026 · 5 min read`; title **"Familiar Was Never the Point"** (`--text-2xl`+/800); italic lede (the *"I almost didn't go to my convocation…"* standfirst); primary button **"Read the entry"** (arrow-up-right) → opens reader.
- **Right (`.pf-entry-quote`):** cover image = **`assets/insight-grad-card.jpg` (the name-card photo — NOT the convocation portrait)** as `background: cover/center` under a dark gradient (`linear-gradient(to top, rgba(5,5,9,0.82), rgba(5,5,9,0.35))`); quote icon; a rotating **pull-quote** (3 quotes in `INSIGHTS_PULLQUOTES`, switched by 3 dot buttons, opacity transition — no keyed remount/entrance animation); dots: 8px circles, active = elongated `--accent` pill.
- ≤980px: single column; quote panel gets top border instead of left.

## 5. Article reader (overlay)
Opens from the entry card. Reference: `InsightReader` in `pages.jsx`.
- Overlay `rgba(5,5,9,0.72)` + `blur(8px)`, fade-in; panel max-width **760px**, `--bg`, `--radius-xl`, rise-in; scrollable; close via **×**, backdrop click, or **Escape**. **No background decoration inside the panel** (a static constellation was tried and reverted — do not add).
- Content: mono back link "← All Insights"; tag eyebrow; title `clamp(30px,4vw,44px)/800`; italic standfirst; meta row (date · read time, bottom border); body; footer (byline *"Written by David Ezieshi"* + "Back to Insights" secondary pill).
- **Body block types** (see `INSIGHTS_FEATURED.body` for the exact sequence): paragraphs (16px/1.75 `--text-body`); **block quotes** (`{ q }`) — larger italic, violet left border; **images with captions** (`{ img, cap }`) — full-width, `--radius-lg`, caption mono 12px `--text-dim` below. Three images in order: `insight-grad-card.jpg` ("T405, Information Systems Business Analysis. The reason I was there."), `insight-podium.png` ("Chancellor Geoff Smith, George Brown College convocation."), `insight-grad-portrait.jpg` ("Convocation day. George Brown College, June 2026.").
- **Copy is FINAL** — take the essay text verbatim from `INSIGHTS_FEATURED` in `pages.jsx`. No em dashes anywhere; curly apostrophes.

## 6. Data model note
`INSIGHTS_ARTICLES = []` — the old six BA think-pieces are parked in `_DRAFT_ARTICLES` (do **not** publish them). Build the page so more entries can be added later (list renders when non-empty), but ship with the single essay.

## 7. QA before redeploy
Both themes × 390 / 768 / 1024 / 1440px: constellation visible + reactive (and static under reduced motion); no horizontal scroll; entry card stacks ≤980px; reader scrolls, closes on Escape/backdrop; images load with captions; buttons follow the light-mode token rules from `IMPLEMENTATION.md` Round 4a.
