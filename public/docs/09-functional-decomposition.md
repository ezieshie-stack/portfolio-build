# FIIT Co. — Functional Decomposition Diagram

**Artifact ID:** BA-11b · Functional Decomposition
**Purpose:** Show what the platform *does* — every user-facing capability, decomposed from the whole system down to atomic functions. This is the "system as a tree of capabilities" view, aimed at scope analysis, effort estimation, and gap analysis against the RTM.
**Source:** BA-03 BRD · BA-10 User Story Backlog · Technical Architecture Handoff (function inventory) · BA-12 RTM

---

## Why this diagram exists

A functional-decomposition diagram (FDD) is **not** a process diagram — there are no flows, no arrows, no time axis. It is a **static inventory** of everything the system does, arranged as a hierarchy.

Useful for four specific BA jobs:
1. **Scope negotiation** — point at a leaf and ask "in or out?"
2. **Effort estimation** — count the leaves, size each, sum.
3. **Gap analysis** — does every leaf trace to a Business Requirement in the RTM? If not, it's over-scope or under-documented.
4. **RACI mapping** — assign an accountable owner to every branch, not to the whole system.

---

## Diagram 1 — Functional Decomposition (L0 → L2)

> **Answers:** What does the platform do, decomposed from "the whole system" to six top-level branches to twenty-three Level-2 capabilities?
> **Aimed at:** Sponsor · BA peer · effort-estimation reviewer.

**How to read it:**
- **L0** at the top = the whole platform, one node.
- **L1** = the six top-level branches — each is a capability the business owns end-to-end.
- **L2** = the twenty-three sub-capabilities that make up those branches.
- **L3** (the atomic leaves) is a long list — rendered as tables below, one per branch, so the diagram itself stays legible.

---

## Level 3 — atomic functions (the leaves)

Because the L3 layer has 59 leaves, they're listed below as tables — one per Level-1 branch. Each leaf traces to a **BR** and typically a **User Story**.

### Branch 1 · Manage Studio Operations

| Leaf function | BR trace | Convex function(s) |
|---|---|---|
| 1.1.1 Add class to weekly schedule | BR-01 | mutations.addScheduleSlot |
| 1.1.2 Update class in weekly schedule | BR-01 | mutations.updateScheduleSlot |
| 1.1.3 Delete class from weekly schedule | BR-01 | mutations.deleteScheduleSlot |
| 1.1.4 View weekly schedule | BR-01 | queries.getWeeklySchedule |
| 1.1.5 Detect buffer conflict on schedule change | BR-01 | mutations.acknowledgeBufferOverride |
| 1.2.1 Add instructor | BR-01, BR-02 | mutations.addInstructor |
| 1.2.2 Update instructor | BR-01, BR-02 | mutations.updateInstructor |
| 1.2.3 Set instructor availability | BR-01 | mutations.addAvailability |
| 1.2.4 Log availability exception | BR-01 | mutations.addAvailabilityException |
| 1.3.1 Create class definition | BR-01 | mutations.addClass |
| 1.3.2 Create class category / subcategory | BR-01 | mutations.addCategory / addSubcategory |
| 1.3.3 Assign class to tier | BR-01 | mutations.updateClass |
| 1.4.1 Mark attendance for class session | BR-03 | mutations.addDeliveryLog |
| 1.4.2 Revert attendance within edit window | BR-03 | mutations.updateDeliveryLog |
| 1.5.1 Create lesson plan for class session | BR-04 | mutations.addClassProgram |
| 1.5.2 Add exercise to lesson plan | BR-04 | mutations.addExercise |
| 1.5.3 Approve pending program change | BR-04 | mutations.approveClassProgram |

### Branch 2 · Publish Public Content

| Leaf function | BR trace | Convex function(s) |
|---|---|---|
| 2.1.1 Create trainer bio | BR-06 | websiteContent.createTrainer |
| 2.1.2 Update trainer bio | BR-06 | websiteContent.updateTrainer |
| 2.1.3 List active trainers (public read) | BR-06 | websiteContent.listActiveTrainers |
| 2.2.1 Create pricing plan | BR-06 | websiteContent.createPricingPlan |
| 2.2.2 Create class format card | BR-06 | websiteContent.createClassFormat |
| 2.3.1 Create blog post (TipTap) | BR-06 | websiteContent.createBlogPost |
| 2.3.2 Publish blog post | BR-06 | websiteContent.updateBlogPost |
| 2.3.3 List published posts (public read) | BR-06 | websiteContent.listPublishedBlogPosts |
| 2.4.1 CRUD locations / FAQs / testimonials / legal | BR-06 | websiteContent.\* |
| 2.5.1 Upload image to slot | BR-06 | websiteContent.createWebsiteImage |
| 2.5.2 Manage promo videos per page slot | BR-06 | websiteContent.createPromoVideo |

### Branch 3 · Engage Members

| Leaf function | BR trace | Convex function(s) |
|---|---|---|
| 3.1.1 Member submits referral | BR-07 | referrals.create *(public)* |
| 3.1.2 Admin marks referral completed | BR-07 | referrals.markCompleted |
| 3.1.3 Admin marks referral rewarded | BR-07 | referrals.markRewarded |
| 3.2.1 Member requests guest pass | BR-08 | guestPasses.create *(public)* |
| 3.2.2 Front desk redeems guest pass | BR-08 | guestPasses.redeem |
| 3.2.3 Enforce monthly quota | BR-08 | guestPasses.monthlyUsage |

### Branch 4 · Control Access

| Leaf function | BR trace | Convex function(s) |
|---|---|---|
| 4.1.1 Sign in with email + password | BR-02 | auth.loginUser *(public)* |
| 4.1.2 Enforce rate limit on sign-in | BR-02 | authHelpers.checkAndIncrementRateLimit |
| 4.1.3 Silently re-hash legacy password on login | BR-02 | authHelpers.hashPassword |
| 4.2.1 Sign up (customer flow) | BR-02 | auth.signupUser |
| 4.2.2 Admin approves pending user | BR-02 | auth.approveUser |
| 4.3.1 Request password reset | BR-02 | passwordReset.requestPasswordReset |
| 4.3.2 Complete reset via emailed link | BR-02 | passwordReset.resetPasswordWithToken |
| 4.3.3 Complete reset via security answer | BR-02 | auth.resetPasswordWithSecurityAnswer |
| 4.4.1 Create + issue session token | BR-02 | authHelpers.createSession |
| 4.4.2 Validate token on every authed call | BR-02 | authHelpers.requireAuth |
| 4.4.3 Enforce admin role on admin functions | BR-02 | authHelpers.requireAdmin |
| 4.4.4 Log out (destroy session) | BR-02 | auth.logout |

### Branch 5 · Report & Observe

| Leaf function | BR trace | Convex function(s) |
|---|---|---|
| 5.1.1 Weekly attendance report | BR-05 | mutations.addDeliveryLog + query aggregation |
| 5.2.1 View pending changes | (governance) | queries.getPendingChanges |
| 5.2.2 Approve / deny pending change | (governance) | mutations.approvePendingChange / denyPendingChange |
| 5.3.1 Alert on missing delivery logs | BR-05 | queries.getMissingDeliveryLogs |

### Branch 6 · Administer Platform

| Leaf function | BR trace | Convex function(s) |
|---|---|---|
| 6.1.1 Admin activates / deactivates / reactivates users | BR-02 | auth.deactivateUser / reactivateUser |
| 6.1.2 Admin changes user role | BR-02 | auth.changeUserRole |
| 6.2.1 Soft-delete website content | BR-06 | websiteContent.delete\* |
| 6.2.2 Hard-delete website content | BR-06 | websiteContent.hardDelete\* |
| 6.2.3 Reorder website content (drag-and-drop) | BR-06 | websiteContent.reorder\* |
| 6.3.1 Export production Convex data | (ops) | `npx convex export` (CLI, not a Convex function) |
| 6.3.2 Restore from export | (ops) | `npx convex import --replace` (CLI) |
| 6.3.3 Import workbook data | (migration) | mutations.importWorkbookData |
| 6.3.4 Seed data | (dev) | mutations.seedData |

---

## Rollup — leaves vs. requirements coverage

| Level-1 branch | Leaves | BR coverage |
|---|:---:|---|
| 1. Manage Studio Operations | 17 | BR-01 · BR-02 · BR-03 · BR-04 |
| 2. Publish Public Content | 11 | BR-06 |
| 3. Engage Members | 6 | BR-07 · BR-08 |
| 4. Control Access | 12 | BR-02 |
| 5. Report & Observe | 4 | BR-05 |
| 6. Administer Platform | 9 | BR-02 · BR-06 (+ operational governance) |
| **Total leaves** | **59** | Every BR (BR-01 → BR-08) is served by at least one branch |

**No orphan functions** — every leaf traces to at least one BR (or, in the case of platform-admin operations, to the governance layer explicitly documented in the Charter as O5 documentation scope).

---

## How to use this decomposition

| Use case | How |
|---|---|
| **Scope negotiation** | Point at a Level-2 or Level-3 node, ask "in this wave or next?" — decompose further if the answer is "part of it" |
| **Effort sizing** | Assign story points to each Level-3 leaf, sum by branch |
| **RACI mapping** | Every Level-1 branch gets an accountable owner from BA-02 |
| **Test coverage audit** | Cross-reference every Level-3 leaf with the RTM's test-case column; missing test = uncovered function |
| **Handover walkthrough** | Read the Level-1 branches out loud, one at a time, then drill into any the audience asks about |

---

*Sourced from `BA-03_Business_Requirements_Document.md`, `BA-10_User_Story_Backlog.md`, and the Appendix A function inventory in `FIIT_Co_Technical_Architecture_Handoff.pdf`.*
