---
id: BA-10
title: User Story Backlog
project: FIIT Co. Operational Transformation Initiative
client: FIIT Co. Boxing & Fitness Studio — Leslieville, Toronto
sponsor: Arden — Gym Manager, FIIT Co.
prepared_by: David Ezieshi — Business Analyst
development_partner: Claude — Full-Stack Developer & Web Designer
version_date: v1.0 · April 14, 2026
---

## PURPOSE

The user story backlog is the working translation of the Business Requirements Document into deliverable units of work. Each story follows the INVEST checklist — independent, negotiable, valuable, estimable, small, testable — and carries Given-When-Then acceptance criteria the BA can verify during UAT.

Stories are grouped by epic. Epics are numbered with the workstream prefix (CMT = Class Management Tool, WEB = Customer Website) so that backlog entries remain traceable to the BRD and the RTM.

## EPIC INDEX

| **Epic** | **Title** | **Scope** |
|---|---|---|
| E-CMT-01 | Identity & Access | Authentication, role routing, team management for the Class Management Tool. |
| E-CMT-02 | Class Scheduling | Create, edit, publish, and manage class sessions. |
| E-CMT-03 | Attendance & Check-in | Instructor-facing attendance marking and admin reporting. |
| E-CMT-04 | Exercise Library & Lesson Plans | Curated exercise catalogue and lesson plan builder. |
| E-CMT-05 | Member Records | Member profiles, memberships, and manual overrides. |
| E-WEB-01 | Public Website — Marketing Surface | Home, about, trainers, class schedule, contact. |
| E-WEB-02 | Public Website — Referral Program | Refer-a-friend flow, reward tracking, admin dashboard. |
| E-WEB-03 | Public Website — Guest Pass | Monthly guest pass issuance, tracking, front-desk workflow. |

## E-CMT-01 — IDENTITY & ACCESS

**US-001 — **As a new instructor, I want to receive an email invitation and set my own password so that I can sign in without the admin seeing my credentials.

- Given an admin has invited me with my email.
- When I click the email link and set a password meeting the policy.
- Then I am signed in and land on the instructor dashboard.

**US-002 — **As a admin, I want to deactivate an instructor who has left the studio so that they lose access immediately and their classes are flagged for reassignment.

- Given an active instructor with two upcoming classes.
- When I click 'Deactivate'.
- Then their session is invalidated, their two classes show 'Unassigned', and the action is written to the audit log.

**US-003 — **As a instructor, I want to be blocked from any admin-only page even if I type the URL so that sensitive data is never exposed by mistake.

- Given I am signed in as an instructor.
- When I navigate to /admin/team by URL.
- Then I am redirected to the instructor dashboard with a toast saying 'Access denied'.

## E-CMT-02 — CLASS SCHEDULING

**US-010 — **As a admin, I want to create a class with name, time, room, capacity, and instructor so that the class appears on the team schedule and is ready for bookings.

- Given I have filled in all required fields and chosen a non-conflicting instructor and room.
- When I click 'Create'.
- Then the class is saved, appears on the weekly schedule within five seconds, and is visible on the assigned instructor's 'My Classes' screen.

**US-011 — **As a admin, I want to be warned when I assign an instructor to two overlapping classes so that I never accidentally double-book staff.

- Given an instructor already assigned to a class from 6:00 to 7:00.
- When I attempt to assign the same instructor to a class starting at 6:30.
- Then a conflict warning blocks save and offers me 'Choose another instructor' or 'Cancel'.

**US-012 — **As a admin, I want to cancel a class with a reason note so that members and the instructor are informed and attendance reports remain accurate.

- Given a scheduled class with confirmed bookings.
- When I click 'Cancel' and enter a reason.
- Then the class status becomes 'Cancelled', all bookings show 'Cancelled', and the reason is visible to the assigned instructor.

## E-CMT-03 — ATTENDANCE & CHECK-IN

**US-020 — **As a instructor, I want to mark attendance for my class in three taps or fewer per member so that I can check people in without slowing the class down.

- Given I am on the attendance screen for my class.
- When I tap a member's name.
- Then their status toggles between Unmarked → Present → No Show → Late and the count updates live.

**US-021 — **As a instructor, I want to revert a mistaken attendance mark so that the record is accurate without an admin having to fix it later.

- Given a member I have marked 'Present' in the last seven days.
- When I tap their name twice to cycle back to 'Unmarked'.
- Then the mark clears and the count decrements.

**US-022 — **As a admin, I want to see attendance totals for any week at a glance so that I can measure class health and support the team accordingly.

- Given attendance has been marked for the week.
- When I open the weekly report.
- Then I see attendance totals per class, per instructor, and per day, with no-shows broken out separately.

## E-CMT-04 — EXERCISE LIBRARY & LESSON PLANS

**US-030 — **As a admin, I want to add an exercise to the library with a description and target muscle group so that the instructor team has a single curated source of truth.

- Given I am on the exercise library page.
- When I click 'Add exercise' and fill in the required fields.
- Then the exercise appears in the library alphabetically and is available in the lesson plan builder.

**US-031 — **As a instructor, I want to build a lesson plan from existing exercises and attach it to a class so that I show up prepared and my class has a clear structure.

- Given at least one active class assigned to me.
- When I build a lesson plan with three exercises and attach it to the class.
- Then the plan is saved, listed on the class detail page, and visible on my pre-class checklist.

## E-CMT-05 — MEMBER RECORDS

**US-040 — **As a admin, I want to view a member's profile with contact details and active membership so that I can respond to questions without opening MindBody.

- Given a member with an active Unlimited membership.
- When I search by email.
- Then the profile opens showing name, email, phone, membership status, and attendance history.

**US-041 — **As a admin, I want to manually add a member who has not yet booked online so that walk-ins and phone sign-ups are captured immediately.

- Given a walk-in with a name and email.
- When I click 'Add member' and submit the form.
- Then the member is created, tagged 'walk-in', and available for booking.

## E-WEB-01 — PUBLIC WEBSITE — MARKETING SURFACE

**US-100 — **As a prospective member, I want to scan the class schedule on the home page without leaving for MindBody so that I can decide whether to visit without extra friction.

- Given I am on the home page.
- When I scroll to the schedule block.
- Then I see the next seven days of classes, times, instructors, and a booking call-to-action that deep-links into MindBody.

**US-101 — **As a prospective member, I want to read a real trainer bio before I commit to a class so that I know what to expect and who I will be training with.

- Given I am on the trainers page.
- When I click a trainer's card.
- Then I see their bio, specialties, certifications, and a contact option that does not require me to create an account.

## E-WEB-02 — REFERRAL PROGRAM

**US-110 — **As a existing member, I want to send a unique referral link to a friend so that both of us can earn a reward without any paperwork.

- Given I am signed in to the referral portal.
- When I click 'Share link' and copy it.
- Then the link is tied to my member ID and will credit me when the recipient books a trial class.

**US-111 — **As a admin, I want to see every active referral and its status so that I can confirm rewards and spot any abuse.

- Given at least one pending referral.
- When I open the referral dashboard.
- Then I see each referrer, referee, status, and earned reward, filterable by month.

## E-WEB-03 — GUEST PASS

**US-120 — **As a existing member, I want to issue a single free guest pass each month to a friend so that I can introduce friends to the studio without asking admin.

- Given I have not issued a guest pass this calendar month.
- When I click 'Issue guest pass' and fill in the guest's name and email.
- Then the guest receives an email with their pass and my pass quota for the month becomes zero.

**US-121 — **As a front-desk operator, I want to verify a guest pass at check-in so that we know the pass is real and has not been used.

- Given a guest arriving with a pass code.
- When I scan or key in the code at the check-in screen.
- Then the screen confirms the pass is valid, marks it 'used', and logs the check-in.

## DEFINITION OF DONE

- Story acceptance criteria pass in UAT.
- Corresponding test cases exist in the UAT catalogue.
- The story is linked in the Requirements Traceability Matrix back to the originating BRD requirement.
- Any schema change is reflected in the Data Model document.
- Any access rule change is reflected in the RBAC matrix.

## CHANGE CONTROL

New stories are added by the BA in response to sponsor feedback, UAT defects, or discovered requirements. Each change is versioned and reviewed in the fortnightly working session.
