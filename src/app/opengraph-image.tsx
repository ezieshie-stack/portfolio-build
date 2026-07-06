import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";

export const runtime = "edge";
export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default OG card. Rendered at request time by next/og. Used as the
   fallback for any page that doesn't ship its own opengraph-image. */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(circle at 78% 22%, rgba(139,92,246,0.35), transparent 55%), #050509",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(139,92,246,0.18)",
              border: "1px solid rgba(139,92,246,0.42)",
              color: "#bca6f6",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            DE
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1.15,
            }}
          >
            <span style={{ fontSize: 22, fontWeight: 600 }}>{SITE_NAME}</span>
            <span style={{ fontSize: 18, color: "#a7a3b2" }}>
              {SITE_TAGLINE}
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            maxWidth: 960,
          }}
        >
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 20,
              letterSpacing: "0.34em",
              color: "#8b5cf6",
              textTransform: "uppercase",
            }}
          >
            The Notebook · Case Studies · Process
          </span>
          <span
            style={{
              fontSize: 68,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
              color: "#ffffff",
            }}
          >
            Requirements through delivery,
          </span>
          <span
            style={{
              fontSize: 68,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
              color: "#8b5cf6",
            }}
          >
            and the live operation after.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            color: "#817e8d",
            fontFamily: "monospace",
            letterSpacing: "0.14em",
          }}
        >
          <span>{SITE_URL.replace(/^https?:\/\//, "")}</span>
          <span>TORONTO</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
