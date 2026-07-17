# FIIT Co. — System Architecture (Diagram Set)

**Artifact ID:** BA-08b · System Architecture (BA-authored, sourced from `FIIT_Co_Technical_Architecture_Handoff.pdf`)
**Purpose:** Explain how the FIIT Co. platform is put together, in **five layered diagrams**, each aimed at a specific stakeholder question. Written so a business analyst — not a solutions architect — can walk anyone through the system.
**Snapshot:** April 30, 2026 · handover version 1.0

---

## Why five diagrams, not one

One architecture diagram trying to answer every question ends up unreadable. The BA discipline solution is the [C4 model](https://c4model.com/) — draw the system at multiple **levels of zoom**, each aimed at one audience. This artifact follows that pattern.

| # | Diagram | Question it answers | Best audience |
|---|---|---|---|
| **1** | System Context | *"Who talks to this platform, and what other services does it touch?"* | Sponsor · Executive · Non-technical peer |
| **2** | Container Architecture | *"What are the moving parts and how do they fit together?"* | Technical reviewer · Incoming BA · Handover partner |
| **3** | Data Domain View | *"Which app is allowed to read or write which tables?"* | BA peer · Data-governance reviewer · Compliance |
| **4** | Auth & Session Lifecycle | *"How does someone get in, and how do they stay in?"* | Security reviewer · Auditor · New developer |
| **5** | Deployment Topology | *"How does the system actually run in production?"* | Ops-focused reviewer · Incident responder |

Read them in order or jump to the one that matches the conversation you're in.

---

## The platform in five sentences (read before any diagram)

FIIT Co.'s digital platform is **two websites that share one database**. The **customer site** at `fiitco.ca` is what a prospective member sees; the **staff portal** at `staff.fiitco.ca` is what Arden and her instructors use to run the studio. Both websites talk to a **single Convex backend** that holds all the data — schedule, trainer bios, blog posts, guest passes, everything. The customer site is only allowed to *read* the public content and *submit* a few forms; the staff portal is authenticated and can do everything. Nothing is stored in the customer's browser except a login token, and no data is duplicated between the two sites — they just look at the same tables through different permissions.

---

## Design decisions worth explaining

| Decision | Reason |
|---|---|
| **Two front-ends, one backend** | Marketing edits and operational releases decoupled. Different SEO postures (indexed vs. de-indexed). Single source of truth for content. |
| **No live MindBody integration** | Explicit scope choice — bookings + payments stay in MindBody. This platform is built *around* MindBody, not on top of it. |
| **Function-level trust tiers (public / authed / admin)** | One backend safely serves both a public site and a staff tool. `requireAuth` / `requireAdmin` at every mutation. |
| **Session tokens in localStorage** | Same-origin app — no cross-domain complexity, no CSRF surface, no cookie-consent overhead. 14-day sliding TTL. |
| **Soft-delete everywhere on website content** | Every content table has `active: false` rather than row deletion. Accidental removals from the CMS are reversible. |
| **Manual deploys, no auto-CI** | At this scale, a wrong push cannot reach production without an explicit terminal command. |

---

## Failure modes (what would break each surface)

| Failure mode | What breaks | Detection surface |
|---|---|---|
| Convex production offline | Customer site: live schedule + forms. Staff portal: everything. Static marketing pages still serve. | Convex dashboard logs |
| Vercel edge cache serves stale content | Public site shows old schedule / bios. **Real incident logged in RAID (I-02).** | Browser DevTools + Vercel Deploys |
| Public function re-tiered to authed | Customer site breaks silently (200 SSR, hydration error). **Real incident — April 27.** | Convex logs + customer report |
| Resend API key expired | Password-reset emails fail silently. Users cannot self-serve reset. | Convex logs: `sendResetEmail` throws |
| DNS access lost | Cannot change subdomains. Existing records keep serving until TTL. | Cloudflare status |
| Sessions table cleared | Every signed-in user is signed out. Non-destructive. | Zero |

---

## Glossary — for the BA reading this next

| Term | What it means, in one line |
|---|---|
| **Next.js** | The web framework both websites are built in. |
| **Vercel** | The hosting company that runs Next.js sites. Two projects: one per website. |
| **Convex** | The realtime backend + database. One deployment shared by both sites. |
| **Convex function** | A named piece of code that reads or writes the database. Public / Authed / Admin tier. |
| **Session token** | A random 32-byte hex string the browser holds after login, in localStorage. |
| **PBKDF2** | The password-hashing algorithm. 600,000 iterations. |
| **Soft delete** | Setting `active: false` instead of removing the row. Reversible. |
| **Sliding TTL** | The 14-day session clock resets on every authenticated call. |
| **Cloudflare** | Manages the domain and DNS records for `fiitco.ca`. |
| **Resend** | The email service for password-reset delivery. |
| **MindBody** | Where actual bookings + payments live. **This system does not integrate with it.** |

---

## How to use this diagram set in a conversation

| Situation | Show |
|---|---|
| Sponsor briefing (5 minutes) | The five-sentence paragraph + **Diagram 1** |
| Technical handover / new BA onboarding | Diagrams **1 → 2 → 3**, in order |
| Security review / auditor question | Diagrams **2 + 4** |
| Incident post-mortem or ops handover | Diagrams **2 + 5** + failure-mode table |
| Portfolio case study | **Diagram 2** as the cover, five-sentence paragraph as the caption |

---

*Sourced from `FIIT_Co_Technical_Architecture_Handoff.pdf` (v1.0, April 30 2026) and `BA-08_Data_Model_and_ERD.md`. The full markdown (with rendered Mermaid diagrams) is authored end-to-end for this artifact set.*
