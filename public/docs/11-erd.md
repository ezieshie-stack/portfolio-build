# FIIT Co. — Entity-Relationship Diagram (ERD)

**Artifact ID:** BA-08 · Physical Data Model — Convex schema
**Purpose:** Show every table in the FIIT Co. Convex backend, its key columns, and the relationships between them. Grounded in the actual 28-table schema documented in the Technical Architecture Handoff — not an inferred logical model.
**Source:** Section 2 of `FIIT_Co_Technical_Architecture_Handoff.pdf` · `convex/schema.ts`

---

## Reading this ERD honestly

Convex is a document-flavoured backend. It **does not enforce foreign-key constraints at the database level.** Relationships are encoded as string IDs (`categoryId`, `classId`, `instructorId`, `slug`) referenced from indexed columns, and referential integrity is maintained by the application code.

**What this means for the ERD:**
- Arrows in this diagram represent **soft foreign keys** — the intent the app code maintains, not a database constraint.
- The `*` symbol marks the **natural primary key** (in addition to Convex's auto-generated `_id`).
- The `^` marks a **soft foreign key** referencing another table's natural key.
- Cardinalities (`||--o{`) are as-designed and enforced by the app, not by the engine.

This distinction matters for the audit column: if the app code has a bug, referential integrity **can** drift. The mitigation is Convex's validators at read AND write time (schema validation catches type violations; the app-level checks catch soft-FK violations).

---

## Diagram 1 — The full ERD (28 tables in 4 domains)

> **Answers:** How are all 28 Convex tables related, and what are the soft foreign keys the app code enforces?
> **Aimed at:** BA peer, incoming BA, data-governance reviewer.

**Talking points for this diagram:**
- Every table has a Convex-generated `_id` primary key, but most also carry a **natural PK** (`categoryId`, `classId`, `slug`, `email`) marked with `*`.
- Arrows are **soft foreign keys** — enforced at read/write time by the app, not the engine.
- Cardinalities are as-designed and match the acceptance criteria in the User Story Backlog.

---

## Cardinality highlights (the joins worth explaining)

| Relationship | Cardinality | Why it matters |
|---|---|---|
| `categories` → `subcategories` | 1 : many | Two-level catalogue hierarchy |
| `classes` → `weeklySchedule` | 1 : many | One "HIIT 45" class definition, dozens of weekly sessions |
| `instructors` → `weeklySchedule` | 1 : many | Scheduling engine enforces no double-booking per instructor per slot |
| `classes` → `deliveryLog` | 1 : many | Attendance is per-session, not per-class-definition (BR-03) |
| `users` ⇄ `instructors` | 1 : 0..1 | Not every user is an instructor; not every instructor has a login yet |
| `pathways` → `clientJourneys` | 1 : many | A pathway is the template; a journey is an instance for a specific member |
| `equipment` ⇄ `exercises` | many : many | Encoded as an array column on exercises, not a join table |

---

## Two schedules — the design note worth surfacing

The ERD makes an intentional design decision visible: **`weeklySchedule` and `websiteSchedule` are separate tables and do not join.**

| Table | Domain | Purpose |
|---|---|---|
| `weeklySchedule` | Operational | The **real** schedule — date-stamped, capacity, buffer-violation flags |
| `websiteSchedule` | Website content | A **recurring template** — curated for the public, no date, no capacity |

They're not out of sync by accident. They're two different concerns: one is the operational record, the other is the public presentation. Coupling them would be a bug.

---

## Where this ERD differs from a traditional RDBMS ERD

| Traditional ERD | This ERD |
|---|---|
| FK constraints enforced by the database | Soft FKs enforced by app code + Convex validators |
| Referential integrity guaranteed by the engine | Guaranteed by the `requireAuth`-scaffolded mutations |
| Delete cascades | **Soft delete** — `active: false` everywhere on content tables |
| Rows deleted physically | Website content is *never* physically deleted from the CMS UI (a separate `hardDelete*` function is admin-only + explicit) |
| Auto-generated indexes on FKs | Explicit indexes declared in `schema.ts`; queries opt in via `.withIndex(name)` |

**The BA takeaway:** you cannot rely on the database engine to catch app-code bugs. What you can rely on is that:
1. **Type-level integrity** is validated at read AND write time by Convex.
2. **Soft delete** makes accidental removals reversible from the CMS UI.
3. **`pendingChanges`** is a table specifically for governance — sensitive edits queue there for admin approval before being applied.

---

## Coverage check

| Domain | Tables | Table count claimed by handoff |
|---|---|:---:|
| Auth & security | users · sessions · passwordResetTokens · rateLimits | 4 ✅ |
| Operational | categories · subcategories · classes · instructors · tiers · equipment · pathways · exercises · weeklySchedule · classPrograms · deliveryLog · clientJourneys · availability · availabilityExceptions · pendingChanges | 15 ✅ |
| Website content | trainers · collaborators · classFormats · pricingPlans · blogPosts · locations · testimonials · faqEntries · promoVideos · websiteImages · websiteSchedule · legalDocs | 12 ✅ |
| Customer forms | referrals · guestPasses | 2 ✅ |
| **Total** | | **28** ✅ |

Exact match to Section 2 of the handoff.

---

## What this ERD does not show (and why)

- **Convex system tables** — `_storage` (file-storage blobs), `_scheduled_functions`, and `_migrations`. Documented in Convex but not part of the domain model.
- **Materialised views** — the weekly-attendance rollup and the my-classes join are computed at query time, not stored as tables.
- **Audit rows** — Convex writes a per-mutation audit trail internally; this platform does not maintain a domain-level `audit_log` table because Convex's built-in surface is sufficient at current scale.

If a Wave 3+ engagement adds any of these as first-class tables, the ERD gets updated then — not now.

---

*Sourced from Section 2 (Data Model) and Section 3 (Function Inventory) of `FIIT_Co_Technical_Architecture_Handoff.pdf`, cross-referenced with `convex/schema.ts` via the module surface documented in Appendix A of the same doc.*
