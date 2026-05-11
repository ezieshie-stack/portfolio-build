export function ToolsCarousel() {
  const tools = [
    "Excel",
    "SQL",
    "Python",
    "Power BI",
    "Looker Studio",
    "Jira",
    "Notion",
    "Figma",
    "Google Sheets",
    "Lucidchart",
  ];

  return (
    <section className="tools-section">
      <p className="tools-eyebrow">Tools & Technologies</p>

      <div className="tools-marquee">
        <div className="tools-track">
          {[...tools, ...tools].map((tool, index) => (
            <div className="tool-card" key={`${tool}-${index}`}>
              <span className="tool-icon">{tool[0]}</span>
              <span>{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
