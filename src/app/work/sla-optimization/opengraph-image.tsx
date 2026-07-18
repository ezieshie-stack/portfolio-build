import { renderProjectOgImage } from "@/components/og/projectOg";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Customer Support SLA Optimizer — cost-sensitive Random Forest";

export default async function Image() {
  return renderProjectOgImage({
    eyebrow: "Predictive Analytics",
    title: "Customer Support SLA Optimizer",
    tagline:
      "8,469 tickets · cost-sensitive Random Forest at 0.83 ROC-AUC · 100% breach recall · capacity-aware daily priority queue.",
  });
}
