import type { Metadata } from "next";
import { InsightsPageContent } from "@/components/insights/InsightsPageContent";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const INSIGHTS_DESCRIPTION =
  "A working journal, kept in the open. Field notes from the work, and the questions underneath it. Notes on business analysis, process design, and the practical work of running the systems people rely on.";

export const metadata: Metadata = {
  title: "The Notebook",
  description: INSIGHTS_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/insights` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/insights`,
    siteName: SITE_NAME,
    title: `The Notebook | ${SITE_NAME}`,
    description: INSIGHTS_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `The Notebook | ${SITE_NAME}`,
    description: INSIGHTS_DESCRIPTION,
  },
};

export default function InsightsPage() {
  return <InsightsPageContent />;
}
