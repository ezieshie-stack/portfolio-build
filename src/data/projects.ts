/**
 * Project case studies rendered at /work/[slug].
 *
 * Each entry below maps to one detail page. `published: false` keeps a
 * project out of generateStaticParams (so /work/<slug> returns 404 via
 * the segment's not-found.tsx) — flip it to true once the real content
 * is filled in. This is how we avoid shipping AI-placeholder bracket
 * strings to production.
 *
 * To add a new published project:
 *   1. Replace every "[…]" placeholder with real, specific copy.
 *   2. Replace metric values with real numbers + labels.
 *   3. Set `published: true`.
 *   4. Optionally add a matching card to `work.cards` in content.ts with
 *      href pointing to `/work/<slug>`.
 */

export type Project = {
  slug: string;
  /** When false, the slug page is not generated and /work/<slug> 404s. */
  published: boolean;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  metrics: { value: string; label: string }[];
  client: string;
  timeline: string;
  role: string;
  team: string;
  tools: string[];
  challenge: string;
  approach: string[];
  deliverables: string[];
};

export const projects: Project[] = [
  // ──────────────────────────────────────────────────────────────────
  // TODO: fill in real data for these three and flip published: true.
  // While published is false they don't render and won't be indexed.
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "project-one",
    published: false,
    title: "[Project one title]",
    category: "Process Design",
    summary: "[One-line project summary placeholder.]",
    tags: ["Process Design", "Information Architecture", "Documentation"],
    metrics: [
      { value: "[00%]", label: "[Metric A]" },
      { value: "[00%]", label: "[Metric B]" },
      { value: "[00%]", label: "[Metric C]" },
      { value: "[00+]", label: "[Metric D]" },
    ],
    client: "[Client name]",
    timeline: "[Start] – [End]",
    role: "[Role]",
    team: "[Team composition]",
    tools: ["SQL", "Power BI", "Lucidchart", "Jira", "Confluence"],
    challenge:
      "[Challenge paragraph placeholder. Describe the operational problem and the constraints that made it hard.]",
    approach: [
      "[Approach bullet one placeholder.]",
      "[Approach bullet two placeholder.]",
      "[Approach bullet three placeholder.]",
      "[Approach bullet four placeholder.]",
    ],
    deliverables: [
      "[Deliverable one placeholder.]",
      "[Deliverable two placeholder.]",
      "[Deliverable three placeholder.]",
      "[Deliverable four placeholder.]",
    ],
  },
  {
    slug: "project-two",
    published: false,
    title: "[Project two title]",
    category: "Data Analysis",
    summary: "[One-line project summary placeholder.]",
    tags: ["Workflow Analysis", "SLA Design", "Process Improvement"],
    metrics: [
      { value: "[00%]", label: "[Metric A]" },
      { value: "[00%]", label: "[Metric B]" },
    ],
    client: "[Client name]",
    timeline: "[Start] – [End]",
    role: "[Role]",
    team: "[Team composition]",
    tools: ["SQL", "Looker Studio"],
    challenge: "[Challenge paragraph placeholder.]",
    approach: [
      "[Approach bullet one.]",
      "[Approach bullet two.]",
      "[Approach bullet three.]",
    ],
    deliverables: ["[Deliverable one.]", "[Deliverable two.]"],
  },
  {
    slug: "project-three",
    published: false,
    title: "[Project three title]",
    category: "Data Analysis",
    summary: "[One-line project summary placeholder.]",
    tags: ["SQL", "Data Analysis", "Risk Detection"],
    metrics: [
      { value: "[00%]", label: "[Metric A]" },
      { value: "[00%]", label: "[Metric B]" },
    ],
    client: "[Client name]",
    timeline: "[Start] – [End]",
    role: "[Role]",
    team: "[Team composition]",
    tools: ["SQL", "Power BI"],
    challenge: "[Challenge paragraph placeholder.]",
    approach: ["[Approach bullet one.]", "[Approach bullet two.]"],
    deliverables: ["[Deliverable one.]", "[Deliverable two.]"],
  },
];

/** Only the projects that should be visible on the public site. */
export const publishedProjects = projects.filter((p) => p.published);
