"use client";

import { Printer } from "lucide-react";

/**
 * "Save as PDF" button — triggers the browser's print dialog. Users pick
 * "Save as PDF" as the destination to save the writeup offline.
 * Paired with the @media print rules in portfolio.css that hide the
 * app chrome (nav, TOC, subnav, footer, contact CTA) so the printed
 * doc is just the reading-mode article.
 */
export function PrintPdfButton({ label = "Save as PDF" }: { label?: string }) {
  return (
    <button
      type="button"
      className="dr-pdf-btn"
      onClick={() => {
        if (typeof window !== "undefined") window.print();
      }}
      aria-label="Open print dialog to save this writeup as PDF"
    >
      <Printer size={14} aria-hidden />
      <span>{label}</span>
    </button>
  );
}
