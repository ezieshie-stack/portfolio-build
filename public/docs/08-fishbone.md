# FIIT Co. — Fishbone (Ishikawa) Diagram

**Artifact ID:** BA-06b · Root-cause analysis · Stale-edge-cache incident
**Purpose:** Apply Ishikawa's 6M framework to the real production incident logged as **I-02** in the RAID log, so the analysis is reusable as a template for the next incident.
**Incident date:** Wave 2 · reference RAID entry I-02
**Author:** David Ezieshi

---

## The problem being analysed

> **On a mid-week schedule update, `fiitco.ca` served the previous week's schedule to members for ~24 hours before the stale edge cache was invalidated. Members arrived expecting classes that had been moved or cancelled.**

One incident, one problem statement, one fishbone. This is the correct scope for Ishikawa, a single defect, not a survey of every possible failure.

---

## Diagram 1 — Ishikawa 6M · stale-cache incident (I-02)

> **Answers:** What are the categorised causes of the stale-cache incident, and which category holds the *root* cause?
> **Aimed at:** Sponsor · BA peer · incident-review committee · anyone reading the post-mortem.

**How to read it:**
- The **problem statement** sits at the head of the spine on the right.
- The **six branches** (People / Machine / Method / Material / Measurement / Environment) each collect the contributing causes from that category.
- **Twigs on each branch** are the specific contributing factors, every twig on this diagram was demonstrably present in the incident, not hypothetical.
- **Root cause**, the branch with the most contributory twigs, drilled into with 5-Whys, gets its own section below the diagram.

---

## Structured cause list (6M breakdown)

**🧑 People**
- Admin published schedule change without knowing about the edge cache
- No second reviewer on public-content edits (single admin post-handover)

**🖥 Machine**
- Vercel edge cache TTL longer than expected on Next.js ISR routes
- No cache-invalidation hook wired to the CMS publish action

**📋 Method**
- Publish workflow had no revalidation step documented in the runbook
- No post-publish smoke-test procedure

**📦 Material**
- Convex + Vercel free-tier lacks push-based invalidation primitives
- Two schedule tables (weeklySchedule vs. websiteSchedule) increased confusion about which one drives the site

**📏 Measurement**
- No monitoring on what the customer site actually served
- Incident detected by member complaint, not automation

**🌍 Environment**
- Mid-week schedule change was rare, the recipe was not rehearsed
- Single-admin operation = no peer challenge on the workflow gap

---

## From "cause" to "root cause"

Fishbone gets criticised for stopping at the branches. The BA move is to run **5 Whys** on the single most contributory branch, which is *Method*:

| # | Question | Answer |
|---|---|---|
| 1 | Why did the site serve stale content? | The Vercel edge cache held the old response. |
| 2 | Why wasn't the cache invalidated? | The CMS publish action had no revalidation hook. |
| 3 | Why did no one add one? | The publish workflow was documented as "click Save, done." |
| 4 | Why was the workflow documented that way? | Because during the build, dev + prod behaved similarly, cache invalidation wasn't a visible concern. |
| 5 | Why was it not caught in UAT? | **UAT tested content correctness; it did not test cache freshness on a delayed second view.** |

**Root cause:** UAT coverage gap, the acceptance criteria treated "content saved" as equivalent to "content visible to a returning visitor." That equivalence held in dev (no edge cache) but not in prod.

---

## Corrective actions (what was done + logged in RAID)

| # | Action | Category it addresses | Status |
|---|---|---|---|
| 1 | Add `revalidatePath()` call to every CMS publish action | Machine + Method | Shipped |
| 2 | Add "invalidate cache" step to the operating runbook | Method | Shipped |
| 3 | Log recurrence-prevention step in RAID as R-02 for ongoing tracking | Measurement | Shipped |
| 4 | Add end-to-end freshness check to the UAT template | Method | Documented for future engagements |
| 5 | Add uptime + content-freshness probe post go-live | Measurement | In Wave 3 backlog |

Every action traces back to at least one branch of the fishbone. That's the acceptance test for a good root-cause analysis: **no unexplained cause, no cause without a corresponding corrective action.**

---

## When to reuse this template

Every future incident large enough for a post-mortem gets its own fishbone. Copy this file, replace the problem statement, refill the six branches with the *specific* causes for that incident. **Do not paste in generic causes.** A fishbone is only useful if every twig on it is provably relevant to the head.

---

*Sourced from RAID entry I-02 in `BA-06_RAID_Log.md`. Full incident narrative and mitigation trace lives there.*
