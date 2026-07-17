# FIIT Co. — Use Case Diagram

**Artifact ID:** BA-10b · Use Case Diagram (UML)
**Purpose:** Show every actor, every use case, and the relationships between them — including where an authenticated flow *includes* the auth check as a shared use case. This is the sponsor-readable version of BA-10 User Story Backlog.
**Source:** BA-02 Stakeholder Register · BA-09 RBAC Matrix · BA-10 User Story Backlog · Technical Architecture Handoff

---

## What a use case diagram is (and is not)

- **Is:** actors + use cases + associations. One page of "who can do what," at a glance.
- **Is not:** a workflow, a sequence, a data model, or a screen inventory.

Relationship notation used below:
- **Association** (solid line) — this actor can invoke this use case.
- **«include»** (dotted arrow) — this use case *always* invokes another. Use case A includes B means "B runs every time A runs."
- **«extend»** (dotted arrow) — this use case *sometimes* invokes another (a conditional or optional path).
- **Generalisation** (hollow arrow) — inheritance between actors or use cases.

---

## Diagram 1 — Use Case Diagram (22 use cases · 6 actors)

> **Answers:** Who can do what against the platform, and where do authenticated flows share the same auth check?
> **Aimed at:** Sponsor · BA peer · security reviewer · new joiner scanning "what's in scope for this actor?"

**Reading key:**
- 🟩 Green use cases are **anonymous** — no session required.
- 🟨 Amber is the **shared authentication** use case, `«include»`d by every authenticated flow.
- 🟥 Red are **Admin-only**.
- 🟦 Blue are **Instructor-only**.
- **"is a"** arrows mean *generalisation*: Admin and Instructor both **inherit** the abstract "Authenticated User" identity.

---

## Actor catalogue

| ID | Actor | Type | Access tier |
|---|---|---|---|
| **M** | Member / Prospect | Human · anonymous | Public |
| **A** | Admin (Arden) | Human · authenticated | Admin role |
| **I** | Instructor | Human · authenticated | Instructor role |
| **U** | Authenticated User | Abstract · generalisation of A + I | Authed |
| **G** | Google Crawler | Non-human · anonymous | Public (customer site only) |
| **MB** | MindBody | External system · manual data exchange | N/A |

---

## Use case catalogue with acceptance context

| Use case | Actor(s) | Trust tier | Traces to |
|---|---|---|---|
| Browse Public Content | M · G | Public | BR-06 · US-100/101 |
| Submit Referral | M | Public | BR-07 · US-110/111 |
| Request Guest Pass | M | Public | BR-08 · US-120/121 |
| Sign Up | M | Public | BR-02 |
| Sign In | M · A · I | Public entry, sets tier | BR-02 · US-001 |
| Reset Password | M | Public | BR-02 |
| Crawl + Index Public Pages | G | Public | (SEO scope, no BR) |
| Authenticate Session | *(included)* | — | BR-02 · US-001/002/003 |
| Manage Weekly Schedule | A | Admin | BR-01 · US-010/011/012 |
| Manage Class Catalogue | A | Admin | BR-01 |
| Manage Instructors | A | Admin | BR-01 · BR-02 |
| Manage Website Content | A | Admin | BR-06 |
| Manage Users | A | Admin | BR-02 |
| Approve Pending Change | A | Admin | (governance) |
| Manage Referrals & Passes | A | Admin | BR-07 · BR-08 |
| Run Weekly Attendance Report | A | Admin | BR-05 |
| Export / Restore Backend Data | A | Admin | (ops) |
| View My Schedule | I | Authed | BR-01 · US-011 |
| Record Attendance | I | Authed | BR-03 · US-020/021 |
| Set Availability | I | Authed | BR-01 |
| Submit Lesson Plan | I | Authed | BR-04 · US-030/031 |

---

## The «include» pattern — why it matters here

Every authenticated use case **includes** the shared `Authenticate Session` use case. That's not stylistic — it's the modelling equivalent of the `requireAuth` gate in the actual Convex code.

**Consequence:** if Sign In breaks, every included use case breaks. On the diagram, that's a single failure point; in the code, it's the single `requireAuth` helper in `authHelpers.ts`. **Model reflects code.**

---

## Notable diagram decisions

1. **MindBody is an actor, not a use case.** It's an external system that exchanges data with the platform — but only via manual reconciliation, not an API. Drawing it as an actor makes the "no API integration" boundary visible.
2. **Sign In is anonymous, not authenticated.** It's the *entry* to the authenticated zone. It sets the session; it doesn't require one.
3. **Reset Password is «extend»ed from Sign In.** The "Forgot?" link on the login screen is the trigger — always conditional on the user reaching Sign In first.
4. **Referral has a bi-actor lifecycle.** Member submits (anonymous), Admin manages afterwards (authenticated). Both associations are on the diagram, connected by an «extend» arrow.
5. **`Manage Users` is Admin-only, not a general capability.** Instructors have no user-administration authority — enforced by `requireAdmin`, mirrored on the diagram.

---

## Coverage check against the RTM

| Column | Value |
|---|---|
| Use cases in this diagram | 22 |
| Business Requirements referenced | BR-01 · BR-02 · BR-03 · BR-04 · BR-05 · BR-06 · BR-07 · BR-08 = **all 8** |
| BRs missing coverage | **0** |
| Use cases with no BR trace | 3 (`Crawl+Index`, `Approve Pending Change`, `Export/Restore`) — all correctly declared out-of-BR-scope in the Charter |

**Acceptance:** every Business Requirement has at least one use case that delivers it, and every use case with no BR trace is explicitly explained by a Charter-level scope note. That's the definition of full coverage.

---

*Sourced from `BA-10_User_Story_Backlog.md` (22 user stories → mapped to 22 use cases), `BA-09_RBAC_Matrix.md` (actor tiers), and the function-tier inventory in the Technical Architecture Handoff.*
