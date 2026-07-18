import { ExternalLink } from "lucide-react";

type Props = {
  pdfUrl: string | null;
  downloadLabel: string;
  viewLabel: string;
};

/**
 * Resume CTA pair. Both buttons rely on the browser's native PDF handling:
 *   • Download: <a download> — universal
 *   • View: <a target="_blank"> — every browser knows how to open a PDF
 *     in a new tab (Safari/iOS use the built-in viewer; Chrome/Firefox
 *     use their own; desktop apps take over on macOS/Windows).
 *
 * Replaces the earlier iframe-in-modal pattern which rendered blank on
 * mobile Safari because iOS doesn't support inline PDF rendering. The
 * new tab approach never fails silently.
 */
export function ResumeViewer({ pdfUrl, downloadLabel, viewLabel }: Props) {
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
    <div className="flex flex-wrap gap-3">
      <a href={pdfUrl} download className="btn-pill btn-primary">
        {downloadLabel}
      </a>
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-pill inline-flex items-center gap-2"
      >
        {viewLabel}
        <ExternalLink size={14} aria-hidden />
      </a>
    </div>
  );
}
