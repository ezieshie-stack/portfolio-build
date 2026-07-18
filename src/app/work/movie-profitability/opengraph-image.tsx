import { renderProjectOgImage } from "@/components/og/projectOg";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Movie Industry Profitability — 5,009 films, 7-stage funnel";

export default async function Image() {
  return renderProjectOgImage({
    eyebrow: "Analytics Dashboard",
    title: "Movie Industry Profitability",
    tagline:
      "5,009 films · 42 columns · 7-stage investment-to-profitability funnel · Streamlit dashboard live.",
  });
}
