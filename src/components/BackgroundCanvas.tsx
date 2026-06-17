/* Background layer for the design system: fixed dot-grid + film-grain.
   Styling lives in src/styles/handoff/tokens/background.css (.ds-bg).
   Replaces the legacy particle canvas. */
export function BackgroundCanvas() {
  return <div className="ds-bg" aria-hidden />;
}
