"use client";

import { useEffect, useState } from "react";
import { X, Download } from "lucide-react";

type Props = {
  pdfUrl: string | null;
  downloadLabel: string;
  viewLabel: string;
};

/**
 * Resume CTA pair + modal viewer.
 *
 * "Download" is a direct link to the PDF with download attribute.
 * "View Resume Online" opens a modal with the PDF embedded in an iframe.
 * If no PDF is uploaded to Convex yet (pdfUrl is null), both buttons are
 * disabled with a placeholder note.
 */
export function ResumeViewer({ pdfUrl, downloadLabel, viewLabel }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!pdfUrl) {
    return (
      <div className="flex flex-wrap gap-3 items-center">
        <button type="button" className="btn-pill btn-primary opacity-50 cursor-not-allowed" disabled>
          {downloadLabel}
        </button>
        <button type="button" className="btn-pill opacity-50 cursor-not-allowed" disabled>
          {viewLabel}
        </button>
        <span className="text-xs text-[color:var(--text-dim)]">
          Resume not uploaded yet
        </span>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <a href={pdfUrl} download className="btn-pill btn-primary">
          {downloadLabel}
        </a>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="btn-pill"
        >
          {viewLabel}
        </button>
      </div>

      {open && (
        <div
          className="resume-modal-backdrop"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Resume viewer"
        >
          <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
            <div className="resume-modal-head">
              <h3>Resume</h3>
              <div className="resume-modal-actions">
                <a
                  href={pdfUrl}
                  download
                  className="resume-modal-download"
                  aria-label="Download resume"
                >
                  <Download size={16} />
                  Download
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="resume-modal-close"
                  aria-label="Close resume viewer"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <iframe
              src={pdfUrl}
              className="resume-modal-frame"
              title="Resume PDF"
            />
          </div>
        </div>
      )}
    </>
  );
}
