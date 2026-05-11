export function ToolsCarousel() {
  const tools = [
    { name: "Excel", icon: "X" },
    { name: "SQL", icon: "DB" },
    { name: "Python", icon: "Py" },
    { name: "Power BI", icon: "BI" },
    { name: "Looker Studio", icon: "LS" },
    { name: "Jira", icon: "J" },
    { name: "Notion", icon: "N" },
    { name: "Figma", icon: "F" },
    { name: "Google Sheets", icon: "G" },
    { name: "Lucidchart", icon: "L" },
  ];

  return (
    <section className="toolsSection">
      <div className="toolsTrack">
        {[...tools, ...tools].map((tool, index) => (
          <div className="toolCard" key={`${tool.name}-${index}`}>
            <span className="toolIcon">{tool.icon}</span>
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
