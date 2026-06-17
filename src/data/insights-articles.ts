/** Article data for /insights. Sourced verbatim from the handoff prototype
   (pages.jsx → INSIGHTS_FEATURED + INSIGHTS_ARTICLES). The bodies use a
   simple block format that the Article Reader renders: paragraphs `{p}`,
   headings `{h}`, and unordered lists `{ul}`. */

export type Block =
  | { p: string; h?: never; ul?: never }
  | { h: string; p?: never; ul?: never }
  | { ul: string[]; p?: never; h?: never };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  read: string;
  icon: string;
  sub?: string;
  body: Block[];
};

export type FeaturedArticle = Article & {
  pill: string;
  cta: string;
};

export const FEATURED: FeaturedArticle = {
  slug: "operational-systems-people-can-use",
  pill: "Featured Insight",
  cta: "Read Insight",
  title:
    "Operational systems are only valuable when people can actually use them.",
  excerpt:
    "Good systems do more than organize information. They reduce friction, clarify ownership, improve visibility, and help teams make better decisions faster.",
  sub: "Good systems do more than organize information. They reduce friction, clarify ownership, improve visibility, and help teams make better decisions faster.",
  category: "Systems",
  date: "Mar 2026",
  read: "7 min read",
  icon: "lightbulb",
  body: [
    {
      p: "Most operational systems fail quietly. They get built, demoed, praised in a kickoff, and then slowly abandoned because the people who were supposed to use them found it faster to go back to the spreadsheet. The system wasn't wrong on paper. It was wrong in the hands of the people who had to live with it.",
    },
    {
      p: "When I deliver a system, the test isn't whether it captures every field a stakeholder asked for. It's whether someone three weeks later, mid-task and under pressure, reaches for it instead of around it.",
    },
    { h: "Friction is the real metric" },
    {
      p: 'Every extra click, every ambiguous label, every step where someone has to stop and ask "wait, who approves this?" is a tax. Individually small, collectively fatal. A system that adds two minutes to a task done forty times a day hasn\'t organized the work. It has quietly billed the team eighty minutes.',
    },
    {
      ul: [
        "Reduce the number of decisions a user has to make to act",
        "Make ownership obvious at every handoff",
        "Surface the next step instead of waiting to be asked",
        "Default to the common case; make the exception possible, not prominent",
      ],
    },
    { h: "Clarity beats completeness" },
    {
      p: "A system that does four things well and makes them obvious will outlast one that does fourteen things nobody can find. When I redesign a workflow, I spend more time removing than adding. The goal is a tool that disappears into the work, not one that demands attention for itself.",
    },
    {
      p: "That's the difference between a system that gets used and a system that gets a polite nod and a quiet workaround.",
    },
  ],
};

export const ARTICLES: Article[] = [
  {
    slug: "operational-clarity-better-workflows",
    title: "Why operational clarity starts with better workflows",
    excerpt:
      "A breakdown of how process visibility, ownership, and documentation improve team execution.",
    category: "Process Design",
    date: "Mar 2026",
    read: "5 min read",
    icon: "git-compare",
    sub: "Before you can improve a process, everyone has to agree on what the process actually is. That agreement is rarer than it sounds.",
    body: [
      {
        p: "Ask five people on a team to describe how a request moves from intake to done, and you'll get five different maps. Not because anyone is wrong, but because each person only sees their slice. Operational clarity is the work of making the whole shape visible to everyone at once.",
      },
      { h: "Visibility before optimization" },
      {
        p: "You cannot speed up a process you can't see. The first deliverable on any engagement isn't a recommendation; it's a shared, accurate picture of the current state that every stakeholder recognizes as true.",
      },
      {
        ul: [
          "Map the real path, including the undocumented shortcuts",
          "Mark every handoff and who owns each side of it",
          "Note where work waits, not just where work happens",
        ],
      },
      { h: "Documentation is a workflow, not a file" },
      {
        p: "The map only stays useful if it changes when the process changes. I treat documentation as a living artifact tied to the workflow itself, not a PDF that goes stale the week after it's signed off.",
      },
    ],
  },
  {
    slug: "requirements-systems-teams-can-use",
    title: "Turning requirements into systems teams can actually use",
    excerpt:
      "How strong requirements gathering connects business needs to practical execution.",
    category: "Business Analysis",
    date: "Mar 2026",
    read: "6 min read",
    icon: "file-text",
    sub: "A requirement that can't be tested isn't a requirement. It's a hope with a deadline attached.",
    body: [
      {
        p: "The gap between what a business asks for and what it actually needs is where most projects quietly go wrong. Requirements gathering is the discipline of closing that gap before a single line of the solution gets built.",
      },
      { h: "Write it so it can be checked" },
      {
        p: "Every requirement I write has to answer one question: how will we know, later, whether the solution met it? If there's no observable test, the requirement is too vague to build against and too soft to hold anyone accountable to.",
      },
      {
        ul: [
          "Tie each requirement to a business outcome, not a feature",
          "State the acceptance condition in plain language",
          "Trace it forward to the part of the system that satisfies it",
        ],
      },
      { h: "The handoff is the hard part" },
      {
        p: "Good requirements survive contact with implementation. That means writing for the person who builds it, not just the person who asked for it, and staying close enough through delivery to answer the questions the document didn't anticipate.",
      },
    ],
  },
  {
    slug: "dashboards-support-decisions",
    title: "Dashboards are only useful when they support decisions",
    excerpt:
      "Why reporting systems should focus on action, not just visualization.",
    category: "Analytics",
    date: "Feb 2026",
    read: "4 min read",
    icon: "bar-chart-3",
    sub: "A chart that doesn't change what someone does is decoration. Useful reporting starts from the decision and works backward.",
    body: [
      {
        p: "It's easy to build a dashboard that looks impressive and changes nothing. Twelve tiles, six colors, real-time updates, and not one of them tied to an action anyone is going to take. Reporting earns its keep only when it moves a decision.",
      },
      { h: "Start from the decision" },
      {
        p: "Before I build a single chart, I ask what decision this view is supposed to support and who makes it. If the answer is fuzzy, the dashboard will be too. Every metric on the screen should map to something a specific person can do something about.",
      },
      {
        ul: [
          "Name the decision the view supports",
          "Show the few numbers that change that decision",
          "Cut everything that's merely interesting",
        ],
      },
      { h: "Less, but sharper" },
      {
        p: "The best operational dashboards I've built are almost embarrassingly simple. A handful of numbers, framed so the right answer is obvious at a glance. That restraint is the work, not a shortcut around it.",
      },
    ],
  },
  {
    slug: "approval-workflows-no-bottlenecks",
    title: "Designing approval workflows that don't become bottlenecks",
    excerpt:
      "Role-based gates that keep accountability without stalling the work.",
    category: "Systems",
    date: "Feb 2026",
    read: "5 min read",
    icon: "workflow",
    sub: "Every approval step is a promise of accountability and a risk of delay. The design job is keeping the first without paying the second.",
    body: [
      {
        p: "Approval workflows exist for good reasons: accountability, compliance, quality. But each gate is also a place where work stops and waits for a human. Pile up enough of them and the process grinds, so people start routing around the system entirely.",
      },
      { h: "Gate what matters, wave through what doesn't" },
      {
        p: "Not every action needs a signature. I design approvals around risk: high-impact or irreversible actions get a gate, routine ones get logged and auto-approved. The goal is accountability proportional to consequence.",
      },
      {
        ul: [
          "Match the approval weight to the risk of the action",
          "Make the approver and the SLA visible on every pending item",
          "Build an escalation path so nothing waits forever on one inbox",
        ],
      },
      { h: "Make waiting visible" },
      {
        p: "Bottlenecks hide in inboxes. When every pending approval shows who owns it and how long it's been waiting, the queue manages itself, because the delay has a name attached to it.",
      },
    ],
  },
  {
    slug: "as-is-map-deliverable-everyone-skips",
    title: "The as-is map is the deliverable everyone skips",
    excerpt:
      "Why documenting the current state earns more trust than any redesign.",
    category: "Process Design",
    date: "Jan 2026",
    read: "4 min read",
    icon: "waypoints",
    sub: "Everyone wants to jump to the fix. The current-state map is the unglamorous step that makes the fix trustworthy.",
    body: [
      {
        p: "There's a strong pull, on every engagement, to skip straight to the redesign. The as-is map feels like busywork: we all know how it works, so why draw it? Then you draw it, and three stakeholders disagree about step four.",
      },
      { h: "The map is where trust is built" },
      {
        p: "When stakeholders see their real process drawn accurately, including the parts nobody documented, they trust that you understand it. That trust is what lets them accept the redesign later. Skip the map and every recommendation sounds like an outsider guessing.",
      },
      {
        ul: [
          "Draw what actually happens, not the official version",
          "Include the workarounds; they're where the real pain lives",
          "Get every stakeholder to recognize their part as true",
        ],
      },
      { h: "It pays for itself" },
      {
        p: "The as-is map almost always surfaces a fix nobody was looking for, a redundant step, a silent handoff, a place two teams both think the other owns. The redesign gets easier because the diagnosis already did half the work.",
      },
    ],
  },
  {
    slug: "reading-data-model-before-process",
    title: "Reading a data model before you redesign the process",
    excerpt:
      "Most broken workflows are broken data wearing a process costume.",
    category: "Analytics",
    date: "Jan 2026",
    read: "6 min read",
    icon: "database",
    sub: "When a workflow keeps breaking in the same place, the cause is often underneath it, in how the data is structured.",
    body: [
      {
        p: 'A process can only be as clean as the data it runs on. I\'ve seen teams redesign a workflow three times to fix a recurring error that had nothing to do with the steps and everything to do with two systems disagreeing about what a "customer" is.',
      },
      { h: "Model the data, then the steps" },
      {
        p: "Before I touch the process, I read the data model underneath it. Where are the duplicates? What's the source of truth? Which fields are entered by hand and therefore inconsistent? The answers usually explain the symptoms the process was getting blamed for.",
      },
      {
        ul: [
          "Find the entities the process actually moves",
          "Locate the single source of truth for each one",
          "Flag every place the same fact is stored twice",
        ],
      },
      { h: "Fix the foundation" },
      {
        p: 'Redesigning steps on top of broken data just moves the problem to a new place. Get the model right and a surprising number of "process problems" simply stop happening, because the thing that caused them is gone.',
      },
    ],
  },
];

export const FILTERS = [
  "All",
  "Process Design",
  "Business Analysis",
  "Analytics",
  "Systems",
] as const;
