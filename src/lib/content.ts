export const site = {
  brand: "PORTFOLIO",
  navLinks: [
    { label: "Work", href: "#projects" },
    { label: "Philosophy", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    tag: "// PLACEHOLDER TAGLINE",
    title: "Headline placeholder for the operations analyst portfolio.",
    subtitle:
      "Short descriptive subtitle placeholder. Swap this for your real positioning copy when the content is ready.",
    primaryCta: { label: "VIEW WORK", href: "#projects" },
    secondaryCta: { label: "LEARN MORE", href: "#about" },
  },
  featured: {
    tag: "// FEATURED OUTPUT",
    title: "Featured project placeholder title.",
    description:
      "Short case-study summary placeholder. Replace with real project context, scope, and outcomes when the content is ready.",
    metrics: [
      { value: "00%", label: "Metric A" },
      { value: "$0.0M", label: "Metric B" },
    ],
    cta: { label: "READ CASE STUDY", href: "#" },
    metaId: "SYS_ID: 000-X // YEAR",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
  },
  marquee: [
    "https://images.unsplash.com/photo-1518433278988-2b2bb19767ad?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
  ],
  philosophy: {
    tag: "// CORE PHILOSOPHY",
    items: [
      {
        value: "00ms",
        label: "Placeholder Metric Label",
        description:
          "Short principle placeholder. Replace with the first pillar of your operating philosophy.",
      },
      {
        value: "100%",
        label: "Placeholder Metric Label",
        description:
          "Short principle placeholder. Replace with the second pillar of your operating philosophy.",
      },
      {
        value: "0.0x",
        label: "Placeholder Metric Label",
        description:
          "Short principle placeholder. Replace with the third pillar of your operating philosophy.",
      },
    ],
  },
  contact: {
    tag: "INITIATE CONNECTION",
    title: "Ready to collaborate?",
  },
  footer: {
    text: "© YEAR PORTFOLIO PLACEHOLDER. ALL RIGHTS RESERVED. // LOCATION PLACEHOLDER",
  },
};

export type SiteContent = typeof site;
