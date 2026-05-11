export function CurrentlyExploring() {
  const items = [
    "Workflow Automation Systems",
    "Operational Dashboards",
    "AI-Assisted Operations",
    "Process Documentation Frameworks",
  ];

  return (
    <section className="currentlyExploring">
      <p className="sectionEyebrow">Currently Exploring</p>

      <div className="exploringPills">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
