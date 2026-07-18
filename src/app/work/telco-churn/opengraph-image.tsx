import { renderProjectOgImage } from "@/components/og/projectOg";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Telco Customer Churn — 7,043 customers · 0.86 ROC-AUC";

export default async function Image() {
  return renderProjectOgImage({
    eyebrow: "Data Analytics",
    title: "Telco Customer Churn",
    tagline:
      "7,043 telecom customers · 8 SQL queries · logistic regression at 0.86 ROC-AUC · 69% precision · 58% recall.",
  });
}
