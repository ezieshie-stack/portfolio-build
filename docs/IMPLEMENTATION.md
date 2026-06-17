# IMPLEMENTATION.md — Hard Contract for Building This Portfolio

> **Read this before writing any code.** The deployed build diverged badly because it was rebuilt freehand. This document is a **contract**, not a reference. Follow it literally. When in doubt, copy — do not invent.

## The three rules (non-negotiable)

1. **Import our CSS. Do not restyle in Tailwind.**
   `@import` these (in `globals.css` or `app/layout.tsx`), in this order:
   `styles.css` → which pulls in `tokens/colors.css, typography.css, spacing.css, effects.css, background.css, fonts.css` → then `portfolio.css`.
   Every visual value lives there. **Do not** re-derive colors, spacing, cards, or diagrams in Tailwind. Tailwind is only for net-new layout the prototype didn't cover.

2. **Mirror the `pf-*` / `ds-*` markup exactly.** Each component's JSX must output the **same class names and DOM structure** as the prototype files (`sections.jsx`, `sections-extra.jsx`, `pages.jsx`). You are porting markup + behavior to React/TSX, not redesigning. If a class is `pf-principle`, your `<div>` is `className="pf-principle"`. The diagrams (radial ring, numbered pipeline, principle cards) come through **because** you reuse the markup + CSS.

3. **`COPY.md` is the ONLY source of text.** Every headline, paragraph, label, list item, and metric must match `COPY.md` verbatim. **Do not** write your own copy. **Do not** pull copy from the repo's old `lib/content.ts`. If `COPY.md` and `lib/content.ts` disagree, `COPY.md` wins, always.

---

## Light-mode contrast — FIX THIS FIRST

The deployed build's light mode is unreadable because near-white text values were used on a light canvas. Light mode is **dark text on light canvas**. The tokens are already correct in `tokens/colors.css` under `[data-theme="light"]`. Use them — do not hardcode text colors.

| Role | Light value | Token |
|---|---|---|
| Canvas | `#f6f5fb` | `--bg` |
| Card surface | `#ffffff` | `--surface` |
| **Headings** | **`#15131c`** | `--text-heading` |
| **Body text** | **`#56535f`** | `--text-body` |
| Dim text | `#817e8d` | `--text-dim` |
| Accent | `#7c3aed` | `--accent` |
| Accent text | `#6d28d9` | `--accent-text` |
| Border | `#e7e6f0` | `--border` |
| Card shadow | `0 1px 2px rgba(24,20,40,.04), 0 16px 40px rgba(91,53,176,.10)` | `--card-shadow` |

Theme is driven by `data-theme="light|dark"` on `<html>`, persisted to `localStorage["pf-theme"]`. Every component reads semantic tokens, so theming is automatic **if you don't hardcode colors.** Verify BOTH themes on every page before shipping.

---

## Section-by-section: DEPLOYED (wrong) → MUST BE

### Home
| Section | Deployed (wrong) | Must be (from COPY.md) |
|---|---|---|
| Hero headline | "Diagnosing Workflows. Building The Fix." | **"I work the full lifecycle, from requirements to live operation."** (accent on "to live operation.") |
| Hero sub | old "I lead the full business-analysis lifecycle…" | the FIIT Co. paragraph in COPY.md |
| Hero portrait | `/portrait.png` (old cutout) | **`portrait-home-clean.png`**, framed glass card, `object-position: 34% 26%` |
| Core Capabilities | Process Diagnosis / Bottleneck Analysis / … | **Requirements Elicitation · Process & Data Modeling · BPMN Diagramming · User Acceptance Testing · Solution Delivery · Platform Administration** |
| About preview | "I Diagnose / I Redesign / I Deliver" | **Requirements / Modeling / Delivery & Operation**; headline "I work the requirement, model it, deliver it, and run it live." |
| **My Approach** | old node-flow + "Diagnose. Redesign. Deliver." | **4 principle cards** (`.pf-principle`): "The stated problem is rarely the real one." / "You learn a process from the people who run it." / "Data modeling matters as much as process modeling." / "A requirement isn't done until it's testable." |
| Anatomy of an Engagement | **present** | **DELETE IT** — removed by design (the Process page owns the step model) |
| Featured project | "Fiitco: Fitness Operations Platform" | **"FIIT Co. Operations Platform"**; highlights = six-person team / BRD,PRD / retained as sole administrator (see COPY.md) |
| Tools / Skills | old lists | the lists in COPY.md (no "Jupyter", no "AI-Accelerated Prototyping") |
| Currently Exploring | big cards | **compact rows** (`.pf-explore-row`) with a mono "In progress" tag |

### About
| Section | Must be |
|---|---|
| Hero | headline "Requirements through delivery, and the live operation after." + the COPY.md bio. **Do NOT** use "I diagnose, document, and own the solutions teams rely on" or invent a "56-finding audit." |
| Stat row | ECBA · 3.81 GPA · 2 Production Systems · 6 Analyst Team Led |
| Experience | the 4 roles verbatim from COPY.md (Brand Ambassador · Ralph Lauren, **not** "Sales Ambassador") |
| What Drives Me | **Diagnose before designing · Own it through operation · Write it plainly · Useful in both rooms** — NOT "Delivery, Not Just Decks / Bridge Operator" |
| Core Strengths | **editorial 2-col numbered checklist** (`.pf-strengthlist` / `.pf-strengthrow`, 01–10) — NOT a card grid |
| Education | 4 entries; About-page photo = `portrait-2.png` |

### Process
| Section | Must be |
|---|---|
| Hero | "Five phases from requirement to live operation." (text-only, full width) |
| Diagram | **radial Lifecycle ring** (`.pf-opring` + `.pf-oppanel`), phases **Analyze · Design · Deliver · Operate**, panel title **"Lifecycle Control"**, metrics Visibility/Throughput/Adoption that count up. NOT the old tabbed "Operational Control System" with Listen/Map/Diagnose/Deliver/Hand Off. |
| Execution Model | 5 steps **Elicit · Model · Design · Deliver · Operate** (COPY.md), `.pf-stepblock` |
| Recent Results | 27 / 0.86 / 5,000+ |

### Insights (new page — was unpublished in repo)
- Hero, **Featured Insight** card (amber badge), filter pills, **6 article cards** (`.pf-insightcard`).
- Clicking a card opens the **Article Reader overlay** (`.pf-reader`) with full body content from `pages.jsx` → `INSIGHTS_ARTICLES` / `INSIGHTS_FEATURED`. Close via ×, backdrop, or Escape.
- Add **Insights** to the nav (Home · About · Work · Process · Insights · Contact).

### Global
- **Eyebrows have NO `// ` prefix.** Just "Process Framework", "Recent Results", etc.
- Nav active state = underline; mobile (≤760px) collapses to a hamburger menu (name/role, links, theme toggle, button all hide into it).
- Footer = 4-column (brand / Navigation / Resources / Availability) + CTA band "Let's talk through it." + bottom bar.

---

## Behavior to port (React state)
- Theme toggle (sets `data-theme`, persists `pf-theme`).
- Project slider (`cur` index, `translateX(-cur*100%)`).
- Filter pills on Work + Insights (filter by category/group; "All" shows all).
- Lifecycle ring (`phase` 0–3; node click; conic sweep + count-up metrics).
- Article reader (`open` article | null; ×/backdrop/Escape close).
- Marquees (CSS keyframes, pause on hover).

## Production swaps (allowed, expected)
- `next/font/google` for **Geist** + **Geist Mono** (instead of the Google `<link>`).
- `lucide-react` for icons; keep inline brand SVGs for **GitHub / LinkedIn / Figma** (`window.PF_BRAND` in `sections.jsx`).
- `next/link` + `usePathname()` for nav + active state.
- `next/image` for portraits.
- Insights/Work data may come from Convex with COPY.md content as the published values.

## Definition of done
- [ ] Both light and dark themes readable on **every** page (light = dark text on light bg).
- [ ] Every section matches the DEPLOYED→MUST-BE table above.
- [ ] My Approach = 4 principles; Lifecycle = radial ring; Core Strengths = numbered list; Currently Exploring = rows; Anatomy removed.
- [ ] All copy matches `COPY.md` verbatim; no invented text.
- [ ] Portraits: `portrait-home-clean.png` (home), `portrait-2.png` (about).
- [ ] No `// ` eyebrow prefixes.

## Still unconfirmed (owner must verify before public)
Marketing PG GPA (shown as "Dean's List" only), Ralph Lauren "Present", Telco metrics (0.86 ROC-AUC / 69% precision), "9 Backend Services", "2 Production Systems / 6 Analyst Team Led".

---

# ROUND 2 — remaining fixes (build is close; these still fail)

Most of the contract landed. These specific items are still wrong in the latest deploy:

### 1. Light-mode BUTTON text is invisible (Contact page worst)
Secondary buttons ("View My LinkedIn", "Email Me") and the full-width "Send Message" submit render **white text on a white/light fill** — unreadable.
- **Primary button:** fill `--accent-solid #7c3aed`, text **`#ffffff`** (`--text-on-accent`) in BOTH themes.
- **Secondary button:** fill `--surface` (`#ffffff` light), text **`--text-heading #15131c`** (light) / `#fff` (dark), border `--border-strong`.
- The "Send Message" submit must be a **primary** button (solid violet, white text), not a faint gradient.
- Audit every `Button` variant in light mode — text must hit `--text-on-accent` (primary) or `--text-heading` (secondary). Never white-on-light.

### 2. Article Reader shows "Article body coming soon" — render the REAL body
The reader is falling back to the repo's Convex placeholder. It must render the written body from `pages.jsx` → `INSIGHTS_ARTICLES[i].body` / `INSIGHTS_FEATURED.body` (array of `{p}` / `{h}` / `{ul}` blocks). Every one of the 7 articles HAS a full body in the prototype. Do not show "coming soon".

### 3. Light-mode faint body text (article reader + contact intro)
Article subtitle, body, and the Contact hero intro render near-white on light = invisible. Use `--text-body #56535f` (light) for all body copy and `--text-heading #15131c` for the headline. The Contact headline "Let's diagnose the problem and ship the fix." must be `--text-heading`, not faint gray.

### 4. Insights "Featured Insight" right panel is dev-invented
The deploy shows an "INSIGHT LIBRARY / 12 ARTICLES" tabbed widget. That is **not** in the design. Replace with our simple decorative art panel (`.pf-insight-feat-art`): radial violet wash + centered lightbulb icon + "Operational Systems" mono label. No "12 articles", no tabs.

### 5. Featured Projects — "PROJECT OUTCOMES" label clipped
The outcomes card label renders as "ROJECT OUTCOMES" (left edge clipped) and the metric tiles overlap their labels. Give the outcomes card proper padding and let the metric grid use the prototype's `.pf-metrics` spacing so nothing overflows.

### Re-verify after these
- [ ] Toggle to **light mode** and confirm EVERY button's text is readable.
- [ ] Open any insight → full article body renders (no "coming soon").
- [ ] Contact hero + form: headline and intro readable in light mode; submit button is solid violet with white text.
- [ ] Insights featured panel = lightbulb art, not a library widget.

---

# INTERACTIVE ELEMENTS — required behavior (verified in the reference build)

Every interaction below works in the prototype. Match this behavior exactly.

### Process — Lifecycle ring (most fragile; get this right)
- 4 phase nodes (`.pf-ring-node`) clickable → set `phase` (0–3). Active node = solid violet + glow + `scale(1.12)`; completed nodes = violet outline. Conic sweep (`.pf-ring-prog`) animates to the active phase.
- **CRITICAL — decorative layers must NOT intercept the pointer.** Set `pointer-events: none` on `.pf-ring-track`, `.pf-ring-prog`, AND `.pf-ring-inner`. If you skip this, the conic/inner discs sit over the nodes and (a) swallow clicks and (b) show a `pointer` cursor in dead zones between icons — exactly the "cursor moves when pointing at the icons" bug you're seeing. Only `.pf-ring-node` buttons should be interactive (they carry `cursor: pointer`).
- On phase change, the 3 metric tiles (`.pf-opmetric .val`) **count up** to the new values (cubic ease, ~600ms; `×` → 1 decimal, `%` → rounded). Use `requestAnimationFrame`, not a CSS transition on text.
- Each node is a real `<button>` with an `aria-label` of the phase name.

### Featured Projects slider (Home)
- `cur` index 0–2; `.pf-slider-track` uses `transform: translateX(-cur*100%)` with `--duration-slow` ease. Prev/next arrows wrap around; dot indicators jump; active dot (`.pf-dot.on`) elongates to a violet pill. Exactly one dot active at a time.

### Filter pills (Work + Insights)
- Client state; clicking filters the array by `group`/`category`; "All" shows everything. Active pill = solid `--accent-solid` with white text. Re-render the grid on change.

### Theme toggle
- Sun/moon segmented control sets `data-theme` on `<html>`, persists to `localStorage["pf-theme"]`, re-reads on mount. Every token-driven color flips automatically.

### Article reader (Insights)
- Card or featured "Read Insight" click → `open` = that article; overlay (`.pf-reader`) fades/rises in. Close via ×, backdrop click, or **Escape** (keydown listener, cleaned up on unmount). Body scrolls. Renders the real body blocks (see Round 2 #2).

### Marquees (Home tools/skills)
- CSS keyframe `translateX(0 → -50%)` over the duplicated list; `animation-play-state: paused` on hover. Respect `prefers-reduced-motion`.

### Mobile nav (≤760px)
- Hamburger toggles the menu (max-height transition). Links + theme toggle + Let's Connect live inside it. Name/role, desktop links, and desktop actions hide.

### General interaction-cursor rule
Anything clickable gets `cursor: pointer`; **decorative overlays get `pointer-events: none`** so the cursor never changes over non-interactive areas and clicks always reach the control beneath. Audit every absolutely-positioned decorative layer (ring discs, card glows, gradient edges) for this.

### Verify all of the above in BOTH themes before redeploy.

---

# ROUND 4 — CASE STUDY DETAIL PAGE (unspecified page, light-mode buttons broken)

**Context:** the deployed build has a **project case-study detail page** (e.g. `/work/fiit-co`) reached from the Work grid / "View Case Study". **This page was never in our prototype or handoff** — the dev created it freehand, so it has no spec and is inheriting the same bugs. Two confirmed problems in the screenshot:

### 4a. Primary buttons are illegible in light mode (FIX FIRST)
"View Live Site" and "View Repo" render as a **pale violet fill with faint white text** — unreadable. This is the recurring token bug on a new surface. Buttons MUST use the shared Button component / `pf-*` button classes, never ad-hoc styles:
- **Primary:** `background: var(--accent-solid)` (`#7c3aed`), `color: var(--text-on-accent)` (`#ffffff`). Solid violet, white text — in BOTH themes. (It must look identical in light and dark; `--accent-solid` does not change per theme.)
- **Secondary:** `background: var(--surface)`, `color: var(--text-heading)`, `border: 1px solid var(--border-strong)`. In light mode that's **white fill, near-black text (`#15131c`), light-grey border** — NOT white text. The screenshot's "View Repo" has invisible text; it must be dark text on white.
- Do not invent a translucent-violet primary. Re-use `<Button variant="primary">` / `variant="secondary"` exactly as every other page does.

### 4b. The case-study page needs a real spec — build it to match the system
Since it didn't exist in our files, build it from these rules (reuse existing tokens, `Card`, `Badge`, `Button`, `Eyebrow`, Lucide icons — same dot-grid `.ds-canvas` background, same nav/footer):

- **Back link:** "← Back to All Projects" — mono, `--accent-text`, top of page, links to `/work`.
- **Title:** project name, display weight 800, `--text-heading`, tight tracking (same as `.pf-page-title`).
- **Lede:** one-paragraph summary, `--text-body`, max-width ~720px.
- **Actions:** `View Live Site` (primary) + `View Repo` (secondary) — per 4a.
- **Meta strip:** a row of glass cards (`.pf-card` / `--surface` + `--border` + `--radius-xl`), each = mono uppercase label (`--text-dim`, `0.2em` tracking) + value (`--text-heading`). Fields: Client · Timeline · My Role · Team · Tools. **Must wrap/collapse responsively** — `repeat(auto-fit, minmax(220px, 1fr))` is fine here BUT confirm it goes 1-column ≤760px (Round 3 rule). Do not let them overflow.
- **Body sections:** two-column on desktop, stacking ≤980px. Each section = mono uppercase eyebrow (`--accent`, e.g. "THE CHALLENGE", "MY APPROACH") + content. Approach/Outcomes use bulleted lists with the violet dot marker (same as `.pf-article-body li`).
- **Outcomes/metrics** (if shown): reuse `MetricStat` tiles.
- All copy for case studies must come from `COPY.md` (add a "Case Study — FIIT Co." block there if missing; do not invent metrics — see Unverified Claims).

**The floating round button at the right edge of the meta strip** in the screenshot (overlapping the Tools card) is a stray/misplaced control — remove it or position it so it doesn't overlap content.

### Verify Round 4 in BOTH themes at 390 / 768 / 1024 / 1440px before redeploy.

---

# ROUND 3 — RESPONSIVE IS BROKEN (grids not collapsing on mobile)

**Symptom (confirmed on a real phone):** "Currently Exploring" renders as **2 columns and overflows off the right edge** — cards bleed past the viewport. This is happening because the dev's build **dropped our mobile media queries**. The grids stay multi-column at phone widths.

**Root cause & rule:** every multi-column grid MUST collapse to 1 column at `≤760px`. Do not use bare `repeat(auto-fit, minmax(220px,1fr))` without a hard single-column fallback — on a 360–410px phone that still tries 2 columns and overflows. Either set explicit columns + a media query, OR use `minmax(min(100%, 220px), 1fr)` so it can shrink to full width.

**Every one of these must be 1 column ≤760px** (verify each on a 390px viewport, no horizontal scroll):
- `.pf-explore-list` (Currently Exploring) → `grid-template-columns: 1fr`
- `.pf-principles` (My Approach) → 1fr
- `.pf-capgrid` (Core Capabilities) → 1 col (or 2 at most)
- `.pf-workgrid` (Work projects) → 1fr
- `.pf-insightgrid` (Insights) → 1fr
- `.pf-strengthlist` (Core Strengths) → 1fr, gap 0
- `.pf-footcols` (footer) → 1fr (or 2)
- `.pf-metrics` / `.pf-opmetrics` (project outcomes, lifecycle metrics) → keep readable; never overflow
- `.pf-hero-grid`, `.pf-featgrid`, `.pf-proc-herotext`, `.pf-about-hero`, `.pf-contact-grid`, `.pf-insight-feat-grid` → 1 col
- Hero portrait hidden ≤760px; nav → hamburger.

**Global guardrails the build is missing:**
1. `html, body { overflow-x: hidden; }` as a safety net AND fix the actual overflowing grid (don't rely on hidden alone).
2. Every page section is wrapped in the shell with `padding-left/right: var(--gutter)` where `--gutter: clamp(20px, 4vw, 56px)` — confirm the gutter applies on mobile so cards aren't edge-to-edge.
3. `box-sizing: border-box` globally.
4. The simplest correct path: **copy our `portfolio.css` media queries verbatim** (`@media (max-width: 980px)` and `@media (max-width: 760px)` blocks) and the `index.html` inline `<style>` media queries. They already collapse every grid correctly. If you re-derived the CSS in Tailwind, you lost them — re-add `lg:`/`md:` → single-column variants for each grid above.

**Test matrix before redeploy:** 390px (phone), 768px (tablet), 1024px, 1440px. No horizontal scroll at any width; no card past the right edge; nav hamburger ≤760px.
