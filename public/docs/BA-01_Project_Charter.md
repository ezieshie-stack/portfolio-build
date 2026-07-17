---
id: BA-01
title: Project Charter
project: FIIT Co. Operational Transformation Initiative
client: FIIT Co. Boxing & Fitness Studio — Leslieville, Toronto
sponsor: Arden — Gym Manager, FIIT Co.
prepared_by: David Ezieshi — Business Analyst
development_partner: Claude — Full-Stack Developer & Web Designer
version_date: v1.0 · April 14, 2026
---

## EXECUTIVE SUMMARY

FIIT Co. is a 6,000 square-foot boutique boxing and fitness studio located at 1047 Gerrard St E in Toronto's Leslieville neighbourhood. Founded by former Canadian Super Middleweight Kickboxing Champion Jason Battiste, the studio has grown from a one- to two-trainer operation into an eleven-format programme with roughly twelve active trainers, a rapidly expanding membership base, plans for a new flagship space at the end of 2026, and a second location targeted within eighteen months of that opening.

That growth has outpaced the studio's operational tooling. Scheduling, attendance, lesson planning, exercise libraries, and member communications are managed across a Squarespace website, a MindBody booking system, and several ad-hoc spreadsheets. The resulting fragmentation creates duplicated data entry, inconsistent member records, blind spots in operational reporting, and a customer-facing website that no longer reflects the quality of the in-studio experience.

This project was commissioned as a George Brown College Business Analysis Co-op engagement (Team #4) to diagnose the current state, define a target operating model, and deliver four coordinated workstreams: a User Acceptance Test of the existing public website; a purpose-built internal Class Management Tool; a recommendation for a member-facing client tracking platform; and a newly designed customer-facing marketing website. This charter formalises the vision, scope, governance, and success criteria for that engagement.

## BUSINESS CONTEXT

### 2.1 Current State Snapshot

FIIT Co.'s operations today are anchored to three systems of record, none of which were originally selected to work together, and a number of supporting spreadsheets maintained by the gym manager and individual trainers. The table below summarises the as-is landscape identified during discovery.

| **System / Asset** | **Purpose** | **Observed Pain Points** |
|---|---|---|
| Squarespace website | Public marketing presence, brand storytelling, programme pages | Outdated visual brand, broken navigation, no booking integration, no referral or guest-pass flow, eight UAT defects logged |
| MindBody | Class booking, membership passes, payment collection | Limited operational reporting, no lesson planning, no exercise library, no delivery log for coaches, and scheduling lives apart from trainer workflow |
| Operational spreadsheets | Schedules, exercise library, coach notes, member follow-up | Manual upkeep, no version control, inconsistent between trainers, no single source of truth, fragile handoffs |
| Client tracking | Track member progress, personal training check-ins, goals | No dedicated tool; progress notes live in coach heads and personal notebooks |

### 2.2 Business Drivers

Four drivers are pushing FIIT Co. toward an operational and digital reset at this specific point in the business lifecycle:

- Rapid growth in trainer headcount (from one or two primary leads to approximately twelve active trainers) has made informal coordination unsustainable and is creating an inconsistency risk in class delivery.
- A new flagship studio space is scheduled to open at the end of 2026, with a second Toronto location targeted within eighteen months. Systems selected now must survive scaling to multiple locations.
- Arden, the gym manager, has asked for a single source of truth for the studio's operational records — a 'master record' that can outlive individual trainers and survive staffing changes.
- The current customer-facing website is visibly behind the quality of the studio itself, which is creating a drop-off between first-touch marketing and in-studio experience and is suppressing organic lead conversion.

### 2.3 Opportunity

A coordinated upgrade of the operational toolset and the public digital presence creates compounding value: a cleaner member journey from first click to first class, a trainer workflow that scales across locations without degrading programme quality, and an operational reporting surface that gives ownership visibility into classes delivered, exercises prescribed, and member progress. Solving these in isolation would leave the handoffs between them unchanged; solving them as one engagement aligns the data model, the brand, and the member experience at the same time.

## VISION STATEMENT

*By the close of this engagement, FIIT Co. will operate from a single, trusted digital backbone that supports its trainers in the gym, tells its story on the public web, tracks its members through their journey, and is ready to scale into the new flagship space and a second location without rebuilding its tools a second time.*

### 3.1 Strategic Alignment

The engagement is intentionally aligned to FIIT Co.'s stated three- pillar brand position — Boxing First, Every Discipline, Serious Recovery — and to the gym's stated growth plan (new space end of 2026, second location within eighteen months). Every deliverable is evaluated against whether it strengthens one of those pillars or de-risks the scale plan.

## OBJECTIVES & SUCCESS CRITERIA

The charter commits to five SMART objectives. Each objective is backed by a measurable success criterion that governs scope and acceptance at closeout.

| **#** | **Objective** | **Success Criterion** |
|---|---|---|
| O1 | Diagnose and report on the current customer-facing website so ownership has an evidence-based view of its defects and remediation priorities. | UAT report delivered with defect inventory, navigation health score, and prioritised recommendations; formally reviewed with the sponsor. |
| O2 | Deliver an internal Class Management Tool that becomes FIIT Co.'s operational master record for schedules, lesson plans, exercises, equipment, and delivery logs. | Tool deployed to production, accepted by the sponsor after a one-week team test, and capable of supporting admin and instructor roles under a documented RBAC model. |
| O3 | Recommend a client tracking platform that fits FIIT Co.'s member journey, budget, and integration constraints. | Vendor comparison delivered with weighted scoring, cost-benefit analysis, and a written recommendation accepted by the sponsor. |
| O4 | Design and build a new customer-facing marketing website that reflects the brand and supports first-class discovery, referrals, and guest-pass flows. | Website deployed to a staging URL, reviewed with the sponsor, and handed off with a content inventory, go-live checklist, and runbook. |
| O5 | Document the engagement end-to-end so the artefacts are reusable by FIIT Co. after handover and by the BA as portfolio evidence. | Full BA artefact set (charter, requirements, process maps, RTM, test results, closure report, lessons learned) delivered in a consistent portfolio package. |

## SCOPE

### 5.1 In Scope

The engagement is structured as four workstreams operating under a single programme. Workstreams run partially in parallel but share a common backlog, stakeholder map, and governance cadence.

| **Workstream** | **In Scope** |
|---|---|
| Scope 1 — UAT of the existing website | Navigation testing, defect logging, severity classification, remediation recommendations, and a published UAT report. |
| Scope 2 — Class Management Tool | Requirements, data model, UX design, build, deployment to Vercel with Convex backend, RBAC (admin + instructor), team UAT, training, and handover. Includes scheduling, lesson plans, exercise library, equipment inventory, delivery log, instructor management, and settings. |
| Scope 3 — Client Tracking Platform Selection | Vendor discovery, comparison matrix, cost-benefit analysis, integration review, and written recommendation. Top candidate at time of charter: Trainerize at approximately $250 per month. |
| Scope 4 — Customer-Facing Website | Information architecture, brand-aligned visual design, responsive build, MindBody deep-link integration, referral system design, guest-pass system design, blog, team and testimonials sections, and deployment to a staging URL for review. |
| Cross-cutting | Business Analysis documentation set, meeting minutes, weekly status reports, RAID log, requirements traceability, and a closure report. |

### 5.2 Out of Scope

To protect the timeline and keep acceptance unambiguous, the following items are explicitly excluded from this engagement and will be logged as future-state candidates in the project closure report.

- Migration of historical MindBody booking data into the new Class Management Tool beyond what is required to seed reference data.
- Replacement of MindBody as the booking and payment system; the customer website deep-links to MindBody rather than replacing it.
- Direct financial integrations (Stripe, QuickBooks, tax reporting).
- Implementation of the selected client tracking platform (Scope 3 delivers the recommendation, not the rollout).
- Ongoing content authoring for the marketing website beyond the launch content set (blog cadence, social posts, email campaigns).
- Custom mobile applications for members or trainers.
- Multi-location rollout tooling for the second studio space; the current engagement delivers a single-tenant system that is multi-location ready, not multi-location deployed.

### 5.3 Assumptions

- Arden remains the single point of accountability for sponsor decisions throughout the engagement.
- FIIT Co. will provide timely access to trainer bios, class formats, brand assets, testimonials, and membership pricing as inputs to the website and Class Management Tool.
- The Class Management Tool will be accepted in a 'ready for team use' state at the end of a one-week team UAT window, not in a production-hardened state with full audit logging.
- MindBody will remain the authoritative booking and payment system through and beyond this engagement.
- Trainerize (or an equivalent) will be reviewed and either purchased directly by FIIT Co. after recommendation, or deferred based on budget — procurement is not inside this engagement.

### 5.4 Constraints

- Timeline: the Co-op term fixes the overall engagement window; critical deliverables must land inside that calendar.
- Budget: no direct tool licensing budget has been committed for third-party platforms beyond the existing MindBody subscription.
- Team: the BA (David Ezieshi) is the sole full-stack analyst on the engagement; the development and design capacity is provided through a single development partner (Claude).
- Technology: the Class Management Tool is built on Next.js and Convex and deployed on Vercel; the customer website uses Next.js with CSS Modules. Replacing those stacks mid-engagement is out of scope.
- Access: the sponsor's time is limited to roughly one working session per fortnight; requirements workshops must be structured to extract maximum value from short windows.

## STAKEHOLDERS

The core stakeholder group is intentionally small so decisions can be made quickly. A full RACI matrix is maintained in a separate BA artefact (BA-02 Stakeholder Register & RACI). The table below captures roles and primary responsibilities at the charter level.

| **Role** | **Name** | **Primary Responsibility** |
|---|---|---|
| Project Sponsor | Arden — Gym Manager, FIIT Co. | Owns the business outcome, holds decision authority, provides access to staff and data, signs off on major milestones. |
| Executive Owner | Jason Battiste — Founder & Head Coach | Final authority on brand voice, training philosophy, and any decision that touches the member experience. |
| Business Analyst | David Ezieshi — BA Lead, Team #4 | Owns discovery, requirements, documentation, vendor analysis, UAT governance, and stakeholder communication across all four workstreams. |
| Development & Design Partner | Claude — Full-Stack Developer & Web Designer | Delivers the Class Management Tool build, the customer-facing website build, and all UI/UX design across both, working from the BA's requirements and reviews. |
| End Users — Instructors | FIIT Co. trainer roster (approx. 12 active) | Primary users of the Class Management Tool; secondary contributors to exercise library and lesson planning content. |
| End Users — Members & Prospects | FIIT Co. members and the Leslieville community | Primary audience for the customer-facing website and the referral, guest-pass, and booking flows. |
| Academic Oversight | George Brown College — BA Co-op Coordinator | Reviews engagement artefacts for academic credit and confirms the project meets co-op learning outcomes. |

## HIGH-LEVEL DELIVERABLES

| **Workstream** | **Deliverable** | **Format** |
|---|---|---|
| Scope 1 | UAT Report (defect inventory, navigation health, recommendations) | Excel + Markdown + PowerPoint |
| Scope 2 | Class Management Tool (deployed web application) | Next.js + Convex application on Vercel |
| Scope 2 | BA Report v2.0 — Class Management Tool | Word document (13 sections) |
| Scope 3 | Client Tracking Platform Recommendation | Word + Excel comparison matrix |
| Scope 4 | FIIT Co. Marketing Website | Next.js application on Vercel (staging + production) |
| Scope 4 | Referral System Specification | Markdown + Word |
| Scope 4 | Guest Pass System Specification | Markdown + Word |
| Cross-cutting | BA Portfolio Document Set (charter, BRD, RAID, RTM, process maps, closure, lessons learned) | Word document set in coordinated portfolio branding |

## TIMELINE & MILESTONES

| **Milestone** | **Target** | **Status** |
|---|---|---|
| Engagement kickoff & discovery complete | Early March 2026 | Complete |
| Scope 1 — UAT report delivered | Mid March 2026 | Complete |
| Scope 2 — Class Management Tool prototype (Excel) | Late March 2026 | Complete |
| Stakeholder working session — Arden | March 26, 2026 | Complete |
| Scope 2 — Class Management Tool deployed to production | April 9, 2026 | Complete |
| Follow-up sponsor session | April 9, 2026 | Complete |
| Customer-facing website foundations built | April 14, 2026 | Complete |
| Scope 2 — One-week team UAT period | April 9 – April 16, 2026 | In progress |
| Scope 2 — Team UAT sign-off | April 16, 2026 | Planned |
| Customer website staging review | Late April 2026 | Planned |
| Scope 3 — Client tracking recommendation accepted | Late April 2026 | Pending budget confirmation |
| Engagement closure & portfolio handover | End of co-op term | Planned |

## HIGH-LEVEL RISKS

A full risk register with scoring, owners, and mitigation actions is maintained in BA-07 RAID Log. The charter records the top four risks flagged during initiation.

| **Risk** | **Impact** | **Initial Mitigation** |
|---|---|---|
| Limited sponsor availability — Arden's working sessions are short and infrequent. | Requirements gaps, rework, late-cycle scope changes. | Prepare structured agendas; batch decisions; confirm in writing within 24 hours of every session. |
| Content dependency — trainer photos, bios, video testimonials, and blog copy are held by the sponsor. | Website ships with placeholder content and degrades its visual impact. | Ship responsive placeholders; track content items in a separate inventory; send a single consolidated content request. |
| Scope 2 acceptance fatigue — the team UAT window is one week and relies on active participation from busy trainers. | Acceptance is delayed or signed off without real testing. | Seed the tool with realistic data; publish a short UAT script; collect feedback through a single channel. |
| Scope 3 budget uncertainty — Trainerize at $250/month has not been formally budgeted. | Recommendation accepted but rollout deferred indefinitely. | Deliver the recommendation early; offer a staged rollout option; record as a decision log item. |

## GOVERNANCE & CADENCE

- Weekly written status reports issued by the BA to the sponsor and academic oversight (eight reports delivered to date).
- Fortnightly working sessions with the sponsor for decisions, requirements review, and UAT debrief.
- All decisions recorded in a decision log (BA-08) and referenced back from requirements and design artefacts.
- Issues and risks tracked in the RAID log (BA-07); anything with a severity of High or above is escalated to the sponsor within one business day.
- All design and build work by the development partner (Claude) is reviewed against the requirements before acceptance.

## APPROVAL

This charter is accepted when signed below by the project sponsor and the business analyst. Signatures indicate alignment on vision, scope, objectives, and governance, and authorise the BA to proceed with detailed requirements and delivery.

| **Role** | **Name** | **Signature / Date** |
|---|---|---|
| Project Sponsor | Arden — Gym Manager, FIIT Co. |  |
| Executive Owner | Jason Battiste — Founder & Head Coach |  |
| Business Analyst | David Ezieshi — BA Lead, Team #4 |  |
| Academic Oversight | George Brown College — BA Co-op Coordinator |  |

*Document control: this charter is versioned in the BA Portfolio document set. Updates are recorded as a new version number and noted in the change log maintained alongside the RAID and decision logs.*
