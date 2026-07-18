import { renderProjectOgImage } from "@/components/og/projectOg";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "FIIT Co. Operations Platform — BABOK v3 artifacts";

export default async function Image() {
  return renderProjectOgImage({
    eyebrow: "Business Analysis",
    title: "FIIT Co. Operations Platform",
    tagline:
      "Full BABOK v3 set · BRD · process design · BPMN swimlanes · RTM · retained as sole administrator after delivery.",
  });
}
