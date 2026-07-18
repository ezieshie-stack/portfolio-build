import { ImageResponse } from "next/og";
import { getEntry } from "@/data/insights-articles";
import { SITE_NAME } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "The Notebook — an entry";

/** Per-entry OG card. Title + tag + date + read time.
   Rendered on request rather than at build time — edge runtime +
   generateImageMetadata are incompatible in current Next.js, and
   next/og caches at the CDN so this stays cheap. */
export default async function Image({
  params,
}: {
  params: { slug: string };
}) {
  const entry = getEntry(params.slug);
  const title = entry?.title ?? "The Notebook";
  const tag = entry?.tag ?? "The Notebook";
  const date = entry?.date ?? "";
  const read = entry?.read ?? "";

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
            "radial-gradient(circle at 82% 18%, rgba(139,92,246,0.32), transparent 55%), #050509",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(139,92,246,0.18)",
              border: "1px solid rgba(139,92,246,0.42)",
              color: "#bca6f6",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            DE
          </div>
          <span style={{ fontSize: 22, fontWeight: 600, color: "#e0dce8" }}>
            {SITE_NAME}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 1000,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontFamily: "monospace",
              fontSize: 18,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#8b5cf6",
            }}
          >
            <span>The Notebook</span>
            <span style={{ color: "#3d3a47" }}>·</span>
            <span style={{ color: "#bca6f6" }}>{tag}</span>
          </div>
          <span
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
              color: "#ffffff",
            }}
          >
            {title}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#817e8d",
            fontFamily: "monospace",
            letterSpacing: "0.14em",
          }}
        >
          <span>
            {date}
            {date && read ? " · " : ""}
            {read}
          </span>
          <span>DAVIDEZIESHIE.VERCEL.APP</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
