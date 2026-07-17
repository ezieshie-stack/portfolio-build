---
id: BA-03
title: Business Requirements Document
project: FIIT Co. Operational Transformation Initiative
client: FIIT Co. Boxing & Fitness Studio — Leslieville, Toronto
sponsor: Arden — Gym Manager, FIIT Co.
prepared_by: David Ezieshi — Business Analyst
development_partner: Claude — Full-Stack Developer & Web Designer
version_date: v1.0 · April 14, 2026
---

## EXECUTIVE SUMMARY

FIIT Co. is a growing boutique boxing and fitness studio whose operational tooling and public digital presence have fallen behind the quality of its in-studio experience. This Business Requirements Document consolidates the business objectives, the high-level business requirements, the functional and non-functional requirements, and the acceptance criteria for the four workstreams in the engagement: a UAT of the existing public website, the delivery of an internal Class Management Tool, the selection of a client tracking platform, and the design and build of a new customer-facing marketing website.

This BRD is the anchor document for the Requirements Traceability Matrix (BA-09). Every requirement recorded below receives a unique identifier and is expected to trace forward into a design artefact, a build task, and a test case or UAT observation.

## BUSINESS OBJECTIVES

The engagement's five business objectives, copied from the Project Charter for completeness and restated here as the grounding of every requirement in this document.

| **ID** | **Objective** | **Measure of Success** |
|---|---|---|
| BO-01 | Give FIIT Co. ownership an evidence-based view of the defects in its current customer-facing website. | UAT report with defect inventory and prioritised remediation plan accepted by the sponsor. |
| BO-02 | Deliver an internal Class Management Tool that becomes the studio's operational master record. | Tool deployed to production and accepted after a one-week team UAT window. |
| BO-03 | Recommend a client tracking platform aligned to FIIT Co.'s member journey and budget. | Written recommendation with weighted vendor comparison and cost-benefit analysis accepted by the sponsor. |
| BO-04 | Rebuild the customer-facing website to reflect the brand and support first-class discovery, referrals, and guest passes. | Staging deployment reviewed with the sponsor; content inventory, go-live checklist, and runbook delivered. |
| BO-05 | Document the engagement end-to-end as a reusable asset for the sponsor and a portfolio asset for the BA. | Full BA artefact set delivered in a coordinated portfolio format. |

## BUSINESS REQUIREMENTS

Business requirements express what the business needs the solution to achieve in plain operational language — without prescribing how. Each requirement is traced from a business objective.

| **ID** | **Requirement** | **Traces To** |
|---|---|---|
| BR-01 | The studio needs a single source of truth for class schedules, lesson plans, exercises, equipment, and delivery records. | BO-02 |
| BR-02 | The tool must support at least two distinct user roles — administrator (Arden) and instructor — with different permissions. | BO-02 |
| BR-03 | The tool must be usable on desktop and mobile so trainers can access it from the studio floor. | BO-02 |
| BR-04 | The studio needs defect evidence for the existing website to prioritise fixes or replacement. | BO-01 |
| BR-05 | The new customer-facing website must reflect the FIIT Co. brand direction (three pillars, Leslieville identity, inclusive welcome). | BO-04 |
| BR-06 | The new website must support a referral flow and a monthly guest pass tracking flow that does not disrupt the MindBody booking experience. | BO-04 |
| BR-07 | The studio needs a client tracking platform that handles personal training progress, check-ins, and goal setting without requiring a custom build. | BO-03 |
| BR-08 | The engagement must produce artefacts that survive staff turnover and remain usable after the BA's co-op term ends. | BO-05 |

## FUNCTIONAL REQUIREMENTS — CLASS MANAGEMENT TOOL

Functional requirements describe what the Class Management Tool must do. Each requirement is testable and traces to a business requirement. A full acceptance criteria set, in Gherkin form, is maintained in the User Story Backlog (BA-10).

| **ID** | **Functional Requirement** | **Traces To** |
|---|---|---|
| FR-01 | The system shall authenticate users via email and password and persist their session until they log out. | BR-02 |
| FR-02 | The system shall distinguish administrator and instructor roles and restrict administrative functions to admins. | BR-02 |
| FR-03 | The system shall allow administrators to manage an exercise library with category, subcategory, and tier metadata. | BR-01 |
| FR-04 | The system shall allow instructors to build lesson plans from the exercise library and attach them to scheduled classes. | BR-01 |
| FR-05 | The system shall allow administrators to manage the class schedule, including instructor assignment and capacity. | BR-01 |
| FR-06 | The system shall allow instructors to record class delivery notes, attendance, and substitutions. | BR-01 |
| FR-07 | The system shall maintain an equipment inventory with quantities and maintenance status. | BR-01 |
| FR-08 | The system shall allow administrators to add, edit, suspend, and remove instructor accounts. | BR-02 |
| FR-09 | The system shall store all operational records in a relational backend with real-time updates across connected clients. | BR-01 |
| FR-10 | The system shall render a responsive interface that functions on modern mobile browsers. | BR-03 |

## FUNCTIONAL REQUIREMENTS — CUSTOMER-FACING WEBSITE

| **ID** | **Functional Requirement** | **Traces To** |
|---|---|---|
| FR-11 | The site shall present a homepage hero that communicates the FIIT Co. brand positioning above the fold. | BR-05 |
| FR-12 | The site shall present class programmes, schedule, pricing, team, studio, blog, and contact pages with consistent navigation. | BR-05 |
| FR-13 | The site shall deep-link to MindBody for all booking actions without storing member credentials locally. | BR-05, BR-06 |
| FR-14 | The site shall provide a blog with dynamic routing for individual posts and a shared post data source. | BR-05 |
| FR-15 | The site shall present a team showcase with per-trainer detail pages or anchors. | BR-05 |
| FR-16 | The site shall present written and video testimonials drawn from actual FIIT Co. members. | BR-05 |
| FR-17 | The site shall implement a member referral flow allowing an existing member to refer a friend and track the outcome. | BR-06 |
| FR-18 | The site shall implement a monthly guest pass tracker visible to the front desk at the studio. | BR-06 |
| FR-19 | The site shall display the studio location on an embedded map with a deep link to Google Maps. | BR-05 |

## NON-FUNCTIONAL REQUIREMENTS

Non-functional requirements describe how the solution must perform — not what it does. They apply to both the Class Management Tool and the customer-facing website unless noted otherwise.

| **ID** | **Category** | **Requirement** | **Target** |
|---|---|---|---|
| NFR-01 | Performance | Customer website — homepage largest contentful paint on a 4G connection. | < 2.5 seconds |
| NFR-02 | Performance | Class Management Tool — screen transition time for authenticated pages. | < 500 ms after cache warm |
| NFR-03 | Availability | Both systems — uptime during the team UAT window. | ≥ 99.5% |
| NFR-04 | Security | Passwords stored as salted hashes; no plain-text secrets in the repository. | No secrets in source |
| NFR-05 | Security | Role-based access enforced at both the API and UI layers. | RBAC validated in UAT |
| NFR-06 | Accessibility | Customer website — WCAG 2.1 AA compliance on all shipping pages. | Audit passes before go-live |
| NFR-07 | Responsiveness | Both systems — usable across viewports from 360px to 1920px. | No horizontal scrolling |
| NFR-08 | Maintainability | All source code under version control with clear commit history. | Single GitHub repository per product |
| NFR-09 | Observability | Deployment runbook documents how to redeploy, reseed, and inspect logs. | Runbook delivered at handover |
| NFR-10 | Portability | Customer website content should be editable without a developer where practical. | Shared data files for posts and team |

## BUSINESS RULES

Business rules are policies the system enforces on behalf of the business. They are independent of any specific feature and survive changes in technology.

| **ID** | **Rule** |
|---|---|
| BUS-01 | An instructor may only edit lesson plans they own or have been explicitly assigned to by an administrator. |
| BUS-02 | Administrators may view and edit all records; instructors may only view other instructors' records in read-only form. |
| BUS-03 | Guest passes reset on the first day of each calendar month. |
| BUS-04 | A member referral is considered successful only after the referred person completes their first paid class. |
| BUS-05 | Exercise library entries must be categorised by category, subcategory, and tier before they can be used in a lesson plan. |
| BUS-06 | A class cannot be scheduled without an assigned instructor. |
| BUS-07 | Only administrators may add, suspend, or remove instructor accounts. |
| BUS-08 | All pricing, membership structure, and class format information displayed on the customer website must match the canonical pricing sheet maintained by the sponsor. |

## ASSUMPTIONS & CONSTRAINTS

The assumptions and constraints recorded in the Project Charter continue to apply. The additional items listed below are specific to the requirements in this document and have been confirmed with the sponsor during discovery.

- MindBody will remain the authoritative booking and payment system. Neither the Class Management Tool nor the customer-facing website will collect member payments directly.
- Trainer headcount for the Class Management Tool is capped at 25 seats for the current engagement. Multi-location trainer rosters are out of scope.
- The customer website will be deployed on Vercel to match the existing Class Management Tool's hosting stack and simplify operations.
- Member-facing blog content is expected to be authored by FIIT Co. after handover; the engagement seeds the structure with draft content only.
- No integration with Stripe, QuickBooks, or any tax reporting platform is included in this engagement.

## ACCEPTANCE CRITERIA

This BRD is accepted when the sponsor confirms, in writing, that the requirements above match the operational needs of FIIT Co. at the time of acceptance. The engagement's deliverables are each accepted against their own success criteria as noted in the Project Charter and referenced in the Requirements Traceability Matrix.

1. Sponsor confirms the business objectives still reflect FIIT Co.'s intent at the time of acceptance.
2. Sponsor confirms the business requirements describe actual operational needs and not nice-to-haves.
3. Sponsor confirms the functional requirements for each system match what the built solution will deliver.
4. Sponsor confirms the non-functional requirements are acceptable for a team UAT (not production-hardened) state.
5. Sponsor confirms the business rules as written do not conflict with current studio policy.

## REVISION HISTORY

| **Version** | **Date** | **Author** | **Notes** |
|---|---|---|---|
| v1.0 | April 14, 2026 | David Ezieshi | Initial BRD consolidating all four workstreams. |
