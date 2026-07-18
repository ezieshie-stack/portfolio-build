import { renderProjectOgImage } from "@/components/og/projectOg";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Fraud Detection SQL Pipeline — 4 auditable rules, precision-first";

export default async function Image() {
  return renderProjectOgImage({
    eyebrow: "Data Engineering",
    title: "Fraud Detection SQL Pipeline",
    tagline:
      "7-layer PostgreSQL · window functions for velocity & risk · four weighted, auditable rules · queue at score ≥ 80.",
  });
}
