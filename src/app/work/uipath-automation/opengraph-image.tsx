import { renderProjectOgImage } from "@/components/og/projectOg";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "UiPath Supplier Price Monitor — bot vs 60–90 minute manual routine";

export default async function Image() {
  return renderProjectOgImage({
    eyebrow: "RPA · Automation",
    title: "UiPath Supplier Price Monitor",
    tagline:
      "Scheduled UiPath bot · 7 suppliers · ±5% threshold · Excel alert dropped daily · ~8 minutes vs 60–90 manual.",
  });
}
