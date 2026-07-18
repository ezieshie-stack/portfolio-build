import { ImageResponse } from "next/og";

export type ProjectOgProps = {
  title: string;
  tagline: string;
  eyebrow: string;
};

const BG = "#0b0a0f";
const ACCENT = "#9d7cf8";
const TEXT_HEADING = "#f5f4f7";
const TEXT_BODY = "#c4c4ce";
const TEXT_DIM = "#8a8993";
const BORDER = "#2a2733";

export function renderProjectOgImage({ title, tagline, eyebrow }: ProjectOgProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BG,
          padding: "72px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: ACCENT,
              fontSize: 22,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 28,
              fontFamily: "ui-monospace, monospace",
              fontWeight: 600,
            }}
          >
            {`// ${eyebrow}`}
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              color: TEXT_HEADING,
              maxWidth: 960,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 28,
              color: TEXT_BODY,
              lineHeight: 1.4,
              maxWidth: 1000,
              marginBottom: 32,
            }}
          >
            {tagline}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              paddingTop: 26,
              borderTop: `1px solid ${BORDER}`,
            }}
          >
            <div
              style={{
                color: ACCENT,
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              David Ezieshi
            </div>
            <div style={{ display: "flex", color: TEXT_DIM, fontSize: 22 }}>
              {"· Business & Operations Analyst · Toronto"}
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
