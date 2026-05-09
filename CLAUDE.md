# David Ezieshi — Portfolio Build: Persistent Memory Log

> **READ THIS FIRST every session before touching anything.**
> Update this file at the END of every session with all changes made.

---

## 🎯 Project Overview

**What:** David Ezieshi's personal portfolio website built in **Framer** (cloud-based, no local codebase).
**Site URL (published):** `remarkable-company-835464.framer.app`
**Framer project name:** Xtract Template (copy)
**David's email:** ezieshie@gmail.com
**Role he's positioning for:** Operations & Business Systems Analyst

---

## 🔌 Framer MCP Connection

**Plugin:** Unframer MCP — must be open in Framer for MCP tools to work.
**To reconnect:** In Framer → `Cmd+K` → search "MCP" → open the MCP plugin → keep it open.
**MCP URL format:** `https://mcp.unframer.co/mcp?id=...&secret=...` (user shares this; changes per session if reconnected)
**Warning:** The MCP disconnects if Framer is closed or the plugin panel is closed. Always verify connection before making MCP calls.

---

## 📐 Framer Project Structure

### Breakpoints
| Breakpoint | Node ID | Width |
|---|---|---|
| Desktop | `WQLkyLRf1` | 1200px (primary) |
| Tablet | `NiVYTkqBV` | 810px (replica variant) |
| Phone | `pUYyAlNF0` | 390px (replica variant) |

> Tablet and Phone are **replica variants** of Desktop. Changes made by clicking elements INSIDE those frames in the canvas are scoped to that breakpoint. MCP `updateXmlForNode` calls target the Desktop frame unless a breakpoint-specific node ID is used.

### Pages
| Path | Node ID |
|---|---|
| `/` (Home) | `augiA20Il` |
| `/about` | `PnYnZFkf8` |
| `/blog` | `BrHvGwiT3` |
| `/contact` | `atppc3P5_` |
| `/projects` | `G4AP2xnvx` |
| `/404` | `h8fraBXAH` |

### Key Code Files
| File | ID | Purpose |
|---|---|---|
| `OperationsDiagram_2.tsx` | `u6leJV7` | **Active** responsive operations diagram component |
| `OperationsDiagram_1.tsx` | `xpTTDlA` | Old/unused version |
| `OperationsDiagram.tsx` | `ZuOidDG` | Old/unused version |
| `Test.tsx` | `LkwZLyx` | Test file, ignore |

---

## 🏗️ Hero Section — Critical Node IDs

```
HeroSection (x_6OuaBBM)
  - Desktop: horizontal stack, gap=40px, padding=80px 80px 80px 80px, height=100vh
  - Tablet: vertical stack (breakpoint override), height=Fit Content
  - Phone: vertical stack (breakpoint override), height=Fit Content
  
  Children:
  ├── FKh1V0ZuU   Content column (Stack, width=1fr, gap=28px, vertical)
  │   ├── SIe8kCh_b   Badge text "Operations & Business Systems Analyst"
  │   ├── EVjARAeE_   Heading stack (vertical, width=1fr via MCP)
  │   │   ├── mcD6_Fijn   "Turning Complex Workflows" (H1 style, width=Fill via canvas UI)
  │   │   ├── AMjNGORo_   "Into Clear [Operational]" (horizontal stack, width=Fill, Wrap=Yes via canvas UI)
  │   │   │   ├── mhzcqz8WO  "Into Clear" (H1)
  │   │   │   └── b7hFI43Ev  "Operational" (H1Purple)
  │   │   └── PjuyN31Gn   "Systems." (H1)
  │   ├── bCCLkBrR7   Description text (maxWidth=500px)
  │   ├── b1qhseYxn   CTA row (horizontal, gap=15px)
  │   │   ├── JBvTxaFV5  "View My Work" button
  │   │   └── S_WhMnivv  "Let's Connect" button
  │   └── l6wVFA3ql   Trusted tools stack
  │
  ├── [hidden Frame]  Old hardcoded diagram — HIDDEN (visible=false)
  │   Contains 5 Stacks (boxes) + 4 Frames (connectors/promo)
  │
  └── yHbg_C_dC   OperationsDiagram component instance
      - Desktop width: 560px Fixed, height: Fit Content
      - Tablet: width=1fr Fill (breakpoint override)
      - Phone: width=1fr Fill (breakpoint override)
      - componentId: u6leJV7
```

### OperationsDiagram Component Props (node yHbg_C_dC)
```
background: rgba(0,0,0,0)
leftLabel: "Stakeholders"      leftSub: "Requirements"
centerLabel: "Process + Workflow"  centerSub: "Design"
rightLabel: "Data + Systems"   rightSub: "Inputs"
implLabel: "Implementation"    implSub: "Coordination"
outcomesLabel: "Operational Outcomes"  outcomesSub: "Continuous Improvement"
```

---

## ✅ Changes Made (Session Log)

### Session 1 (earlier session — from compacted summary)
- Fixed mobile heading overlap: `mcD6_Fijn` height changed Fixed 39px → Fit Content (was clipping)
- Created responsive HTML prototype: `/tmp/diagram-responsive.html`
- Created `/tmp/OperationsDiagram.tsx` locally as component source
- Pushed `OperationsDiagram_2.tsx` (ID: `u6leJV7`) to Framer via MCP
- Placed OperationsDiagram component as `yHbg_C_dC` in HeroSection
- HeroSection confirmed: horizontal stack, gap=40px, padding 120/80/80/80

### Session 3 (2026-05-07, continued same day)

#### Heading Overflow Fix (Desktop)
- **EVjARAeE_ (Heading stack)**: Changed `width` from `fit-content` → `1fr` via MCP `updateXmlForNode` — constrains heading container to the 1fr content column
- **mcD6_Fijn ("Turning Complex Workflows" text)**: Changed width from `fit-content` → **Fill** via Framer canvas UI right panel dropdown
  - ⚠️ NOTE: Setting `width="1fr"` on TEXT nodes via MCP causes letter-by-letter rendering in Framer vertical stacks — MUST use canvas UI "Fill" option instead
- **AMjNGORo_ ("Into Clear + Operational" horizontal stack)**: Changed width → **Fill** via canvas UI; enabled **Wrap: Yes** via canvas UI
  - Result: "Operational" wraps below "Into Clear" gracefully when column is narrow

#### Hero Top Padding Reduced
- **HeroSection (x_6OuaBBM)**: Changed `padding` from `"120px 80px 80px 80px"` → `"80px 80px 80px 80px"` via MCP
- Removes ~150px gap above hero content on Desktop

#### Tablet Layout Fixed
- **HeroSection on Tablet**: Changed `stackDirection` to **vertical** (breakpoint-specific override via canvas UI) — previous horizontal layout left only ~50px for content column (810 - 80 - 80 - 40 - 560 = 50px) causing letter-by-letter text compression
- **HeroSection on Tablet**: Changed `height` to **Fit Content** (breakpoint override)
- **OperationsDiagram (yHbg_C_dC) on Tablet**: Changed width to **Fill (1fr)** (breakpoint override)

#### Phone Hero Height
- Verified Phone hero height was already **Fit Content** (shows "Height: 1081.5, Fit" in right panel)

#### Promo Overlays Investigation
- Investigated "Use For Free ↗" and "Another AI Template ↗" — searched full 95KB Desktop XML, found NO canvas nodes with these strings
- Clicking the overlays in canvas selected the diagram element beneath them (not the overlays)
- **Conclusion**: These are **Framer platform-level overlays** injected on free tier accounts — NOT canvas nodes — cannot be removed or hidden without upgrading to a paid Framer plan

#### Published
- All changes published via Framer Publish → Update button

### Session 2 (2026-05-07)

#### Phone Breakpoint Fixes
- **Hero direction**: Changed HeroSection `stackDirection` from horizontal → **vertical** on Phone breakpoint (was squishing text to single-pixel width causing letter-by-letter vertical text)
- **OperationsDiagram phone width**: Changed from 560px Fixed → **1fr Fill** on Phone (breakpoint-specific override via canvas UI)
- **OperationsDiagram phone height**: Changed from 380px Fixed → **Fit Content** on Phone

#### Old Diagram Frame Hidden
- Found the original hardcoded diagram Frame (contains 5 Stacks = boxes, 4 Frames = connectors + "Use For Free"/"Another AI Template" promo elements)
- Set **visible = false** on this Frame globally (affects all breakpoints)
- Result: old diagram no longer shows on Desktop, Tablet, or Phone

#### OperationsDiagram CSS — Major Update
- Switched from **`@container` queries** to **`@media` queries** (viewport-based)
  - Container queries were not triggering correctly in Framer's rendering context
  - `cqi` units also removed (were causing sizing issues)
- New breakpoints: `@media (max-width: 700px)` for tablet, `@media (max-width: 520px)` for mobile stack
- Padding changed from `clamp()` to fixed `24px`
- Font sizes changed to fixed px values (13px title, 11px sub)
- Result: Desktop/Tablet now show **3-column grid**, Phone shows **vertical stacked list**

---

## ⚠️ Known Issues / Still To Fix (as of end of Session 3)

### Cannot Fix (Platform Limitation)
- ✅ **"Use For Free ↗" and "Another AI Template ↗"** — Confirmed these are **Framer platform overlays** (not canvas nodes). Not removable without upgrading to a paid Framer plan. They persist on all breakpoints.

### Resolved ✅
- ✅ **Desktop heading overlaps diagram** — Fixed: `EVjARAeE_` width → 1fr, `mcD6_Fijn` width → Fill, `AMjNGORo_` width → Fill + Wrap enabled
- ✅ **Large empty space above hero** — Fixed: Hero top padding reduced from 120px → 80px
- ✅ **Phone diagram width** — Fill (1fr) override applied in Session 2, confirmed still in effect
- ✅ **Tablet layout** — Fixed: Hero switched to vertical layout on Tablet (same approach as Phone)
- ✅ **Phone hero height** — Confirmed already Fit Content

### Still To Do
1. **"Into Clear Operational" line break** — At Desktop (1200px), the heading now wraps to 5 lines:
   ```
   Turning Complex
   Workflows
   Into Clear Operational
   Systems.
   ```
   "Into Clear" and "Operational" appear on the same line at Desktop which is fine. But the heading now takes up more vertical space. Consider whether the heading should be styled differently or if the 5-line break is acceptable.

2. **"View My Work" CTA link** — Still links to `/` (Home). Should link to the projects section (either `/#projects` anchor or `/projects` page).

3. **Desktop diagram height** — The diagram shows `Fit Content` height but may look tall. Worth a visual audit of the full Desktop hero in the published site.

4. **Publish custom domain** — Site is on free subdomain `remarkable-company-835464.framer.app`. Future: upgrade Framer plan for custom domain + remove platform overlays.

---

## 🎨 Design System

### Colors
| Style | Value |
|---|---|
| `/Background` | `rgb(0,0,0)` |
| `/Purple` | `rgb(129, 74, 200)` |
| `/Pink` | `rgb(223, 122, 254)` |
| `/Card background` | `rgba(13,13,13,0.8)` |
| `/Primary Text` | `rgb(255,255,255)` |
| `/Border` | `rgb(34,34,34)` |

### Key Text Styles
| Style | Font | Size |
|---|---|---|
| `/Hero/H1` | Figtree 700 | 56px, -2px tracking |
| `/Hero/H1Purple` | Figtree 700 | 56px, purple |
| `/Hero/H1Mobile` | Figtree 700 | 36px, -1.5px tracking |
| `/Hero/Body` | Figtree 500 | 17px, 1.65em line |
| `/Hero/Eyebrow` | Figtree 700 | 11px, uppercase, 0.12em |
| `/Diagram/Label` | Figtree 600 | 11px, centered |
| `/Diagram/Sublabel` | Figtree 500 | 9px, centered |

---

## 📋 Content Reference

### Hero Copy
- **Badge:** "Operations & Business Systems Analyst"
- **Heading:** "Turning Complex Workflows Into Clear Operational Systems."
- **Body:** "I analyze, design, and optimize operational workflows and systems that improve efficiency, align teams, and drive better business outcomes."
- **CTA 1:** "View My Work" → links to `/` (should link to projects section)
- **CTA 2:** "Let's Connect" → `mailto:ezieshie@gmail.com`

### Diagram Labels
- Left: Stakeholders / Requirements
- Centre: Process + Workflow / Design *(highlighted purple)*
- Right: Data + Systems / Inputs
- Middle: Implementation / Coordination
- Bottom: Operational Outcomes / Continuous Improvement *(highlighted purple)*

### Trusted Tools Row
Notion · Lucidchart · SQL · Excel · Looker Studio · Tableau · Python · Figma · GitHub · Jira · BPMN

---

## 📁 Local Temp Files (created during sessions)

| File | Purpose |
|---|---|
| `/tmp/OperationsDiagram.tsx` | Local source copy of diagram component |
| `/tmp/diagram-responsive.html` | Standalone HTML preview of diagram |
| `/tmp/diagram-preview.html` | Multi-breakpoint preview wrapper |
| `/tmp/ralph-mockup.html` | Ralph Lauren job card mockup |
| `/tmp/kaftan-mockup.html` | Kaftan TV job card mockup |

---

## 🔧 Technical Decisions Log

| Decision | Reason |
|---|---|
| Used `@media` queries instead of `@container` queries in OperationsDiagram | Container queries don't work reliably in Framer's code component rendering |
| Removed `cqi` units | Depend on container context that doesn't work in Framer |
| HeroSection set to vertical on Phone | Content + diagram side-by-side at 390px = catastrophic text compression |
| Old hardcoded diagram Frame set to `visible: false` | Was competing with new OperationsDiagram component |
| OperationsDiagram uses `@media (max-width: 520px)` for mobile stack | 520px captures phone (390px) without triggering on tablet (810px) |
| OperationsDiagram width: 560px Fixed on Desktop | At 560px, desktop viewport (1200px) doesn't trigger media query → shows grid |
| `width="1fr"` via MCP on TEXT nodes causes letter-by-letter rendering | In Framer vertical stacks, MCP sets text width differently than canvas "Fill"; always use canvas UI Fill dropdown for text nodes |
| Tablet hero switched to vertical layout (not horizontal) | At 810px, horizontal layout with 560px diagram leaves only ~50px for content column — catastrophic text compression |
| `EVjARAeE_` heading stack set to `width="1fr"` via MCP | MCP 1fr works correctly on FRAME/STACK nodes but not TEXT nodes — heading stack is a stack, so MCP works fine |
| Framer platform overlays not removable | "Use For Free" and "Another AI Template" are injected by Framer's free tier at the platform level, not as canvas nodes |

---

## 📝 Session Update Instructions

**At the start of each session:**
1. Read this entire file
2. Check the "Known Issues / Still To Fix" section
3. Ask user which issues to prioritize OR continue where left off
4. Re-verify Framer MCP connection (Cmd+K → MCP in Framer)

**At the end of each session:**
1. Add a new entry under "Changes Made" with today's date
2. Update "Known Issues / Still To Fix" — mark resolved items ✅, add new ones discovered
3. Update any node IDs, file IDs, or content that changed
4. Note any new technical decisions made
