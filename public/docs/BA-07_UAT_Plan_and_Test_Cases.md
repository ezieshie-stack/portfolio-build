---
id: BA-07
title: UAT Plan & Test Cases
project: FIIT Co. Operational Transformation Initiative
client: FIIT Co. Boxing & Fitness Studio — Leslieville, Toronto
sponsor: Arden — Gym Manager, FIIT Co.
prepared_by: David Ezieshi — Business Analyst
development_partner: Claude — Full-Stack Developer & Web Designer
version_date: v1.0 · April 14, 2026
---

## PURPOSE

User Acceptance Testing is the moment the engagement stops asking 'does it work on paper?' and starts asking 'does it work for the people who will live inside it?'. This plan covers two UAT efforts: a retrospective navigation and content sweep of the current Squarespace website (Scope 1), and a structured, role-based UAT of the newly deployed Class Management Tool (Scope 2).

The Business Analyst owns the plan end-to-end: test case authorship, participant coordination, defect triage, and the final sign-off memo to the sponsor. Claude, as development partner, owns defect resolution and re-test readiness.

## UAT STRATEGY

UAT is scoped to validate that the delivered solution meets the documented business and functional requirements under realistic conditions. It is not a replacement for unit, integration, or regression testing performed during build; those are the developer's responsibility. UAT confirms that the tool is usable, correct, and aligned with the sponsor's operational reality.

| **Dimension** | **Scope 1 — Website Sweep** | **Scope 2 — Class Management Tool** |
|---|---|---|
| Test Type | Navigation health, content accuracy, link integrity, responsiveness. | Role-based functional UAT against FR catalogue, plus exploratory usability testing. |
| Participants | BA solo walkthrough with sponsor review. | Sponsor (Admin), three instructor champions (Instructor), BA (facilitator). |
| Environment | Live fiitco.squarespace.com production site. | fiit-ops-kappa.vercel.app — isolated UAT database seeded with non-identifying sample data. |
| Duration | Two-day focused sweep in early April. | One-week rolling window starting April 14. |
| Sign-off | BA memo plus thirteen recommendations accepted by sponsor. | Sponsor sign-off memo plus defect closure list. |

## ENTRY CRITERIA

- Class Management Tool deployed to a stable production URL with role-based access working for both Admin and Instructor.
- Sample data seeded into every table (at least three instructors, ten members, twenty classes, fifty bookings).
- Test case catalogue written, reviewed by BA, and accessible to participants.
- Defect intake form and severity rubric shared with participants.
- Kick-off message sent to participants with URL, credentials, and test case links.

## EXIT CRITERIA

- Every Critical and High severity defect is either closed or carries a sponsor-approved workaround.
- At least ninety percent of test cases have a documented pass, fail, or blocked status.
- Sponsor has reviewed the UAT report and signed the memo authorising full team rollout.
- Any open defects are migrated into the Wave 3 backlog with severity and owner.

## ROLES & RESPONSIBILITIES

| **Role** | **Responsibility** |
|---|---|
| Business Analyst (BA) | Plan, facilitate, author test cases, triage defects, and produce the sign-off memo. |
| Sponsor (Admin tester) | Execute Admin-role test cases, confirm acceptance criteria, approve sign-off. |
| Instructor Champions | Execute Instructor-role test cases, raise defects through the intake form, attend debrief. |
| Development Partner (Claude) | Fix defects in priority order, deploy patches, confirm re-test readiness. |

## DEFECT SEVERITY RUBRIC

| **Severity** | **Definition** | **Target Resolution** |
|---|---|---|
| S1 — Critical | Blocks core flow; no workaround. Tool is unusable for the role. | Same day. |
| S2 — High | Impairs a core flow with an awkward workaround. | Within 48 hours. |
| S3 — Medium | Non-core flow broken or significant cosmetic issue on a core screen. | Before sign-off. |
| S4 — Low | Cosmetic, typo, or minor annoyance with no functional impact. | Logged for Wave 3. |

## SCOPE 1 — WEBSITE SWEEP RESULTS

The Squarespace sweep closed with eighty-two percent navigation health, eight defects, and thirteen prioritised recommendations delivered to the sponsor. Highlights below.

| **ID** | **Area** | **Finding** | **Severity** |
|---|---|---|---|
| W-01 | Primary Nav | 'Book a Class' link routed to a deleted MindBody widget page. | S1 |
| W-02 | Footer | Instagram handle mismatched between header and footer. | S3 |
| W-03 | Mobile | Hero image cropped trainer's face on screens under 375px. | S2 |
| W-04 | Class Schedule | Embedded schedule widget loaded blank in Safari private mode. | S2 |
| W-05 | Contact Form | Form submission returned generic error; no confirmation email to sender. | S2 |
| W-06 | SEO | Home page missing meta description; title tag exceeded ninety characters. | S3 |
| W-07 | Accessibility | Hero image lacked alternative text; contrast ratio on CTA button failed WCAG AA. | S3 |
| W-08 | Content | Trainer bio page listed a coach who no longer worked at the studio. | S2 |

## SCOPE 2 — CLASS MANAGEMENT TOOL TEST CASES

Test cases are grouped by functional area and mapped to requirements in the RTM. Each case carries a role, preconditions, numbered steps, and explicit expected results.

### 8.1 Authentication & Role Routing

| **ID** | **Case** | **Role** | **Expected Result** |
|---|---|---|---|
| TC-001 | Admin signs in with valid credentials. | Admin | Lands on Admin dashboard; sees all navigation items including 'Team' and 'Settings'. |
| TC-002 | Instructor signs in with valid credentials. | Instructor | Lands on Instructor dashboard; sees 'My Classes' and 'Lesson Plans' but not 'Team' or 'Settings'. |
| TC-003 | Instructor attempts to open /admin/team via direct URL. | Instructor | Redirected to dashboard with an access-denied toast. |
| TC-004 | User signs out and re-enters /dashboard. | Both | Redirected to the sign-in screen. |

### 8.2 Class Scheduling

| **ID** | **Case** | **Role** | **Expected Result** |
|---|---|---|---|
| TC-010 | Admin creates a new class with name, date, time, capacity, instructor, and room. | Admin | Class appears on the weekly schedule immediately; assigned instructor sees it on 'My Classes'. |
| TC-011 | Admin edits an existing class's start time. | Admin | Updated time reflects across schedule, instructor view, and any member-facing surface within five seconds. |
| TC-012 | Admin tries to save a class with capacity set to zero. | Admin | Validation error blocks save and displays the rule. |
| TC-013 | Admin tries to assign the same instructor to two classes at the same time. | Admin | Conflict warning is shown; save is blocked until resolved. |
| TC-014 | Instructor opens 'My Classes' and sees only their own classes. | Instructor | Classes belonging to other instructors are not visible. |

### 8.3 Attendance & Check-in

| **ID** | **Case** | **Role** | **Expected Result** |
|---|---|---|---|
| TC-020 | Instructor opens a class in 'My Classes' and marks three members present. | Instructor | Attendance count increments; each member's status shows 'Present'. |
| TC-021 | Instructor marks a member 'No Show' and adds a note. | Instructor | Status and note persist on refresh; admin dashboard reflects the no-show. |
| TC-022 | Instructor reverts an attendance mark. | Instructor | Status returns to 'Unmarked'; counts decrement accordingly. |
| TC-023 | Admin views attendance report for last week. | Admin | Report totals match the sum of attendance marks recorded. |

### 8.4 Exercise Library & Lesson Plans

| **ID** | **Case** | **Role** | **Expected Result** |
|---|---|---|---|
| TC-030 | Admin adds a new exercise with name, description, and target muscle group. | Admin | Exercise appears in the library and is selectable in lesson plan builder. |
| TC-031 | Instructor builds a lesson plan from existing exercises. | Instructor | Plan is saved, linked to the instructor, and visible on the relevant class. |
| TC-032 | Admin archives an exercise in use by an existing plan. | Admin | Archive warns about linked plans; archived exercise no longer appears in new plan builder. |

### 8.5 Team Management & RBAC

| **ID** | **Case** | **Role** | **Expected Result** |
|---|---|---|---|
| TC-040 | Admin invites a new instructor by email. | Admin | New instructor appears in Team list with role 'Instructor' and status 'Invited'. |
| TC-041 | Admin deactivates an instructor. | Admin | Instructor can no longer sign in; their classes revert to 'Unassigned' and are surfaced on the admin alert panel. |
| TC-042 | Admin promotes an instructor to Admin role. | Admin | Promoted user sees Admin navigation on next sign-in. |

## DEFECT INTAKE

Defects are captured through a shared form linked from every test case. Each record includes tester name, test case ID, observed result, expected result, severity, screenshots, and environment notes. The BA triages incoming defects once per day during the UAT window and relays confirmed defects to the development partner.

## SIGN-OFF

At the end of the UAT window the BA produces a sign-off memo summarising test case pass rate, defect counts by severity, open items, and a recommendation. The sponsor signs the memo authorising full team rollout, or requests a second round if exit criteria are not met.
