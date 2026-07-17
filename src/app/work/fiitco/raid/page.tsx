import Link from "next/link";
import { ArrowRight, ClipboardList } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { FiitSubNav } from "@/components/work/fiitco/FiitSubNav";
import { RaidClient } from "@/components/work/fiitco/RaidClient";

export const metadata = {
  title: "FIIT Co. · RAID Log (A7) | David Ezieshi",
  description:
    "BA-15 RAID log — Risks (P×I scored), Assumptions, Issues, Dependencies, and the formal change register.",
};

export default function FiitRaidPage() {
  return (
    <div className="pf-page fx-wide">
      <div className="pf-shell">
        <FiitSubNav active="raid" />

        <section className="pj-hero-head" style={{ marginTop: 28 }}>
          <Badge tone="violet" style={{ marginBottom: 16 }}>
            Artifact A7 · RAID Log
          </Badge>
          <h1 className="pf-page-title" style={{ fontSize: "clamp(30px,3.2vw,46px)" }}>
            The operating ledger, not a filed document.
          </h1>
          <p className="pf-page-intro" style={{ maxWidth: 700 }}>
            BA-15. Risks, assumptions, issues, and dependencies, reviewed in
            every weekly sponsor sync and carried into ongoing administration.
            Snapshot at closure, April 14 2026.
          </p>
        </section>

        <section className="pj-section" style={{ marginTop: 34 }}>
          <RaidClient />
        </section>

        <div
          className="cov-note"
          style={{
            borderColor: "var(--violet-border)",
            background: "var(--violet-fill)",
          }}
        >
          <ClipboardList size={18} style={{ color: "var(--accent)" }} aria-hidden />
          <p>
            <b>Carried into operations:</b> R-05 Convex usage (monthly check),
            R-06 bus-factor of 1 (sponsor-accepted), R-07 WCAG (Wave 3), D-03
            Trainerize pilot (30-day clock), and D-05 Convex upgrade (trigger at
            70%) are all still tracked by the sole administrator after closure.
          </p>
        </div>

        <Link href="/work/fiitco" className="pj-next">
          <div>
            <span className="pj-next-lbl">Back to</span>
            <span className="pj-next-title">FIIT Co. artifact index</span>
          </div>
          <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
