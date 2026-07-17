# FIIT Co. — Data Flow Diagram (DFD)

**Artifact ID:** BA-08c · Data Flow Diagrams (Level 0 + Level 1)
**Purpose:** Show where data enters the system, what transforms happen to it, and where it ends up. Follows Gane-Sarson notation: external entities as squares, processes as rounded boxes, data stores as open rectangles, and arrows for data-in-motion.
**Source:** BA-03 BRD · BA-08 Data Model · Technical Architecture Handoff v1.0

---

## Why a DFD, when we already have architecture diagrams?

The architecture diagrams answer *"what does the system look like?"*
A DFD answers *"what happens to the data as it moves through?"*

Same system, different lens. Auditors and data-governance reviewers ask the DFD question; solutions architects ask the container-diagram question.

---

## Diagram 1 — Level 0 · Context DFD (the whole system as one process)

> **Answers:** What data crosses the platform's boundary, and with whom?
> **Aimed at:** Auditor, data-governance reviewer, non-technical peer.

**How to read it:**
- Squares (blue) = **external entities** — anything outside the platform boundary.
- Circle (amber) = **the process** — at Level 0 the whole platform is one process. Level 1 explodes this.
- Arrows = **data in motion**, labeled with what data flows.
- Dotted line = the **MindBody reconciliation** — an out-of-band data flow that Arden does manually.

---

## Diagram 2 — Level 1 · Process breakdown

> **Answers:** What are the internal processes and how does data pass between them and the data stores?
> **Aimed at:** BA peer, technical reviewer, incoming BA.

**The seven internal processes:**

| # | Process | Trigger | Data-store touch points |
|---|---|---|---|
| 1.0 | Serve Public Content | Member/Google request | reads D1 + D2 (websiteSchedule only) |
| 2.0 | Capture Customer Form Submission | Member submits form | writes D4 |
| 3.0 | Authenticate User | Any actor logs in | reads/writes D3 |
| 4.0 | Manage Operations | Admin CRUD | reads/writes D2 |
| 5.0 | Edit Website Content | Admin CMS | reads/writes D1 |
| 6.0 | Record Class Delivery | Instructor at studio | writes D2 (deliveryLog) |
| 7.0 | Send Password Reset Email | Reset request from 3.0 | reads D3 · sends to Resend |

---

## What the DFD makes visible that architecture diagrams don't

- **The customer site is a *pure sink* for public content.** All arrows into P1 come *from* the data stores; nothing flows *into* the stores from P1 except two form-submit paths (P2).
- **P6 (class delivery) is instructor-only.** Neither Admin nor Member touches it. This is a workflow segregation the RBAC matrix (BA-09) formalises.
- **P7 has a single call site (P3).** Password-reset email is not a general notification pipeline — it exists specifically for the forgot-password flow.
- **D4 (customer forms) has no read-back to the customer.** The Member submits and the row lives in the ops-only queue for Admin follow-up. This is the *lifecycle asymmetry* worth calling out during audits: the customer submits data they can never see again from the customer side.

---

## Trust boundary annotation

DFDs get more useful when you draw the **trust boundary** — the line where authentication is required.

```
      ANONYMOUS ZONE               ⋮      AUTHENTICATED ZONE
                                   ⋮
  Member ──▶ P1 (serve content) ───⋮
  Member ──▶ P2 (form submit) ─────⋮──▶  D4
  Member ──▶ P3 (login) ───────────⋮──▶  D3 (writes session)
  Google ──▶ P1                    ⋮
                                   ⋮
                                   ⋮ ◀── Admin (with token) ──▶ P4, P5
                                   ⋮ ◀── Instructor (with token) ──▶ P6
                                   ⋮ ◀── P3 ──▶ P7 ──▶ Resend
```

Everything left of the trust boundary can be done by an anonymous browser. Everything right requires a valid session token.

---

*Level-2 breakdowns (further exploding P4, P5, P6 into per-function DFDs) exist but aren't included here — 170 functions would drown the story. Available on request per module.*
