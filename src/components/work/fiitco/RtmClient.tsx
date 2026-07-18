"use client";

import { useState } from "react";

type Trace = [string, string, string, string, "done" | "build", string];

const TRACE: Trace[] = [
  ["O2", "S1 Arden + Charter", "BR-01", "A single source of truth for the weekly schedule, instructor assignments, and studio bookings so conflicts are prevented before publication.", "done", "Delivered · in UAT · 0 failures"],
  ["O2", "S1 Arden + S3 BA", "BR-02", "Role-based access so Admins manage the operation while Instructors see only their own schedule and roster.", "done", "Delivered · FR-01/02/03 passed"],
  ["O2", "S5 Instructor Team", "BR-03", "Attendance captured at the class in real time, not reconciled after the fact, so the record matches the studio.", "done", "Delivered · tap-through + revert window"],
  ["O2", "S2 Jason", "BR-04", "A curated exercise library and lesson-plan builder so programming stays consistent with the FIIT philosophy.", "done", "Delivered · library + builder shipped"],
  ["O2", "S1 Arden", "BR-05", "Operations reporting the Admin can pull without an analyst, weekly attendance and utilisation on demand.", "done", "Delivered · weekly report live"],
  ["O4", "S1 Arden + S2 Jason", "BR-06", "A public site reflecting the live schedule, trainer profiles, and current brand, so prospects see the studio as it operates today.", "build", "In build · MVP in production review"],
  ["O4", "S1 Arden", "BR-07", "Members can refer friends through a trackable link so the studio attributes sign-ups and rewards the referrer.", "build", "In build · flow specced · UAT → Wave 3"],
  ["O4", "S1 Arden", "BR-08", "A monthly guest-pass program with front-desk verification so trials convert without manual bookkeeping.", "build", "In build · issuance specced · UAT → Wave 3"],
];

export function RtmClient() {
  const [filter, setFilter] = useState<"all" | "O2" | "O4">("all");
  const rows = TRACE.filter((r) => filter === "all" || r[0] === filter);

  return (
    <>
      <div className="rt-filters">
        <button
          type="button"
          className={"rt-filter" + (filter === "all" ? " on" : "")}
          onClick={() => setFilter("all")}
        >
          All (8)
        </button>
        <button
          type="button"
          className={"rt-filter" + (filter === "O2" ? " on" : "")}
          onClick={() => setFilter("O2")}
        >
          O2 · CMT (5)
        </button>
        <button
          type="button"
          className={"rt-filter" + (filter === "O4" ? " on" : "")}
          onClick={() => setFilter("O4")}
        >
          O4 · Website (3)
        </button>
      </div>
      <div className="rt-trace">
        {rows.map((r) => (
          <div className="rt-row" key={r[2]}>
            <div>
              <span className="rt-cell-h">Obj</span>
              <span className="rt-obj">{r[0]}</span>
            </div>
            <div>
              <span className="rt-cell-h">Originated by</span>
              <span className="rt-stake">{r[1]}</span>
            </div>
            <div>
              <span className="rt-cell-h">Business requirement</span>
              <span className="rt-br-id">{r[2]}</span>
              <span className="rt-br-txt">{r[3]}</span>
            </div>
            <div>
              <span className="rt-cell-h">Closure signal</span>
              <span className={"rt-signal-badge " + r[4]}>
                {r[4] === "done" ? "Delivered" : "In build"}
              </span>
              <span className="rt-signal-txt">{r[5]}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
