# FIIT Co Product Design Document

*Source: `Documentations-/FIIT_Co_Product_Design_Document.pdf` — extracted via `pdftotext -layout`. Raw text preserved below; table formatting is approximate.*

---

```
                                   Product Design Document
                             FIIT Co. Class Management Tool + Customer Website
         FIIT-2026-001 | v1.0 Final |April 25, 2026, | Ebubechukwu David Ezieshi, Lead BA |Emmanuel Ametepe Ofori, UX Analyst


1. Design Principles
   •     Plain language over jargon - every screen is understandable by a non-technical gym manager.
   •     Soft-delete by default - no destructive operations without a confirmation step.
   •     Real-time where it matters - every CMS edit reflects on the public site within about 1 second.
   •     Consistent layout grammar - every admin page has the same structure: title bar, action button, list/grid,
         modal editor, status message.
   •     Mobile-first for the customer site, desktop-first for the admin tool.


2. Design System
2.1 Colour Palette
 Token                 Hex                       Usage

 Brand Red             #D92B2B                   Primary CTA, active states, brand accents.

 Black                 #000000                   Primary text on light, background on dark hero.

 White                 #FFFFFF                   Background, contrast on dark surfaces.

 UI Dark               #1E1812                   Buttons, headings on light backgrounds.

 Beige                 #FAF7F3 / #F5F1EA         Page background, input field background.

 Text Muted            #555555 / #888278         Subtext, captions, placeholder copy.

 Border Light          rgba(0,0,0,0.12)          Subtle separators.
2.2 Typography
 Context                     Font Family                     Notes

 Admin tool                  Calibri / system UI stack       Clear, editorial-free utility font.

 Customer site - body        DM Sans                         Neutral sans, body copy.

 Customer site - display     Barlow Condensed,               Heavy display for hero and section titles.
                             Barlow

 Customer site - editorial   Playfair Display                Serif for editorial moments (quotes,
                                                             numbers).

 Admin login                 System UI, -apple-system,       Native font stack for familiarity.
                             BlinkMacSystemFont


2.3 Spacing & Layout
   •   Admin page padding: 40px top/sides, 32px bottom. Max content width 1200–1400px.
   •   Modal max width: 440–600px depending on content density.
   •   Customer site content width 1280px max, responsive breakpoints at 1100, 860, and 540px.
   •   Border radius: 8px for inputs and cards, 999px (pill) for primary buttons, 16px for hero overlays.

2.4 Component Inventory
   •   Form inputs (text, email, password, number, textarea, select).
   •   Primary and secondary buttons + icon button.
   •   Status chip / badge (active, pending, denied).
   •   Modal dialogue (standard + confirmation variant).
   •   Card (trainer card, class card, testimonial card, pricing card).
   •   Toolbar (TipTap editor toolbar with 10 commands).
   •   Table (admin list views with sort, filter, search).
   •   Hamburger drawer (mobile navigation).
   •   Hero section (full-bleed image + overlay text + dual CTA).
3. Data Model
The Convex backend is shared between the internal tool and the public website. All entities below are schema-
validated and indexed. Full schema available in the Technical Handoff.

3.1 Core Entities
 Entity                   Purpose                          Key Fields

 users                    Authentication and role          email, password, role (admin/instructor),
                          assignment                       status, isHidden

 instructors              Operational instructor records   instructorId, fullName, displayName,
                                                           specializations, certifications, status

 classes                  Class definitions (source of     classId, name, categoryId,
                          truth)                           subcategoryName, tier, durationMinutes

 categories /             Class category hierarchy         categoryId, name, emoji, colour,
 subcategories                                             parentCategoryId

 tiers                    Class difficulty levels          tierId, name
                                                           (Beginner/Intermediate/Advanced/All
                                                           Levels)

 equipment                Equipment library                name, category, iconKey

 exercises                Exercise library (115 items)     name, categoryName, subcategoryName,
                                                           tier

 pathways                 Multi-week training paths        name, categoryId, tier, durationWeeks

 clientJourneys           Per-client pathway enrollment    journeyId, pathwayId, clientName,
                                                           startDate

 weeklySchedule           Class slot grid                  date, dayOfWeek, startTime, endTime,
                                                           classId, instructorId, capacity,
                                                           bufferViolation

 availability /           Instructor availability grid     instructorId, dayOfWeek, startTime,
 availabilityExceptions                                    endTime, exceptionDate, type

 lessonPlans              Pre-programmed class content     classId, date, status
                                                           (draft/submitted/approved), blocks

 deliveryLog              Post-class session records       classId, date, attendance,
                                                           plannedFollowed, variations

 pendingChanges           Instructor-submitted changes     submittedBy, submittedByName,
                          awaiting approval                entityType, entityId, diff, status
 Entity                       Purpose                          Key Fields

 guestPasses /                Front desk records               firstName, email, phone, status
 referrals                                                     (pending/redeemed/rewarded),
                                                               consentGiven


3.2 Public Website Content Entities
Ten tables power the public site, each with a soft-delete `active` field and `displayOrder` for sorting.
    •     trainers, collaborators, classFormats, pricingPlans, blogPosts, locations, testimonials, faqEntries,
          promoVideos, websiteImages.

3.3 Supporting Entities
    •     passwordResetTokens - 15-minute single-use tokens for email-based password reset.


4. Key User Flows
4.1 Admin Login → Dashboard
    •     User opens /login
    •     Enters email + password → Sign In → auth context validates against Convex
    •     On success → router.replace("/dashboard")
    •     Layout guard checks currentUser; redirects to /login if null
    •     Dashboard renders KPIs, action cards, today’s class grid

4.2 Instructor Submits Availability Exception
    •     Instructor navigates to /availability
    •     Clicks “Add Exception” on a specific date cell
    •     Modal opens with type toggle (Unavailable/Extra), time range, optional note
    •     On submit → pending change created with type = “availabilityException”
    •     Admin sees new badge on Review Queue; approves or denies; change becomes live on approval

4.3 Admin Publishes a Blog Post
    •     Admin navigates to /website-blog
    •     Clicks New Post → lands on /website-blog/<id>
    •     Uploads cover image via Convex file storage
    •     Uses TipTap editor toolbar: style dropdown, bold/italic, list, link, image, blockquote, hr
    •     Saves draft → later clicks Publish → status flips to “published”
    •     Customer site’s /blog grid picks up the post within 60 seconds (ISR revalidate window)
4.4 Customer Requests Guest Pass
   •      Visitor clicks Guest Pass CTA on homepage
   •      Modal opens with name, email, phone, preferred date, consent checkboxes
   •      Server validates required fields + consent state
   •      On success → record inserted into guestPasses table with status = “pending”
   •      Staff see the new pass in Front Desk → Guest Passes tab and mark redeemed when member arrives


5. Integration Points
 Integration              Direction            Purpose

 MindBody                 Outbound             All booking CTAs open MindBody in a new tab. No API
                          (redirect)           exchange today.

 Convex                   Bidirectional        Real-time database, file storage, serverless functions.
                                               Backend for both apps.

 Vercel                   Deployment           Hosts both Next.js apps; auto-revalidation, edge routing.
                          target

 Resend                   Outbound             Sends password reset links. Currently in sandbox mode;
                          (email)              domain verification planned post-launch.

 YouTube                  Embed                Promo video embed on homepage (muted, scroll-into-view
                                               autoplay).

 MapLibre + Carto         Client-side map      Static locator map in footer, dark basemap.


6. Accessibility
   •      WCAG 2.1 AA target across both applications.
   •      Colour contrast verified for all brand palette uses (text on red, white on black, etc.).
   •      Mobile drawer: aria attributes, focus-visible outline on controls, ESC-to-close.
   •      All form inputs use proper <label>, required attributes, autocomplete hints.
   •      No auto-playing audio. Video auto-play is muted and user-pausable.
   •      Accessibility statement published at /accessibility with contact route for barrier reports.


7. Known Design Limitations
   •      No custom 404 page; uses Next.js default.
   •      Admin tool is desktop-optimized; mobile works but not recommended for editing.
   •      Stock imagery in several places (trainer photos for Matt + Jaye, studio interior, hero backgrounds) -
          replace as real assets arrive.
   •      Customer site does not yet include analytics or cookie-consent banner.

```
