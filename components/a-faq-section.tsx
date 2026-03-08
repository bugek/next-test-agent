type AFaqSectionState = "loading" | "empty" | "error" | "ready";

type AFaqSectionItem = {
  label: string;
  value: string;
  detail?: string;
};

type AFaqSectionProps = {
  state?: AFaqSectionState;
  items?: AFaqSectionItem[];
};

const sectionStyles = {
  shell: { borderRadius: "28px", padding: "1.5rem", background: "#fffaf0", color: "#1f2937", boxShadow: "0 24px 60px rgba(15, 23, 42, 0.12)" },
  eyebrow: { margin: 0, textTransform: "uppercase", letterSpacing: "0.16em", fontSize: "0.72rem", color: "#0f766e" },
  title: { margin: "0.5rem 0 0", fontSize: "1.5rem" },
  description: { margin: "0.75rem 0 0", color: "#5b6470" },
  grid: { display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))", marginTop: "1.5rem" },
  card: { padding: "1rem", borderRadius: "20px", background: "#f0e7d8" },
  value: { margin: "0.35rem 0 0", fontSize: "1.9rem", color: "#1f2937" },
  detail: { margin: "0.5rem 0 0", color: "#5b6470", fontSize: "0.95rem" },
  statePanel: { marginTop: "1.5rem", padding: "1.25rem", borderRadius: "20px", background: "#f0e7d8", color: "#5b6470" },
};

export function AFaqSection({ state = "ready", items = [] }: AFaqSectionProps) {
  if (state === "loading") {
    return (
      <section style={sectionStyles.shell}>
        <p style={sectionStyles.eyebrow}>Signal-rich dashboard</p>
        <h2 style={sectionStyles.title}>A Faq Section</h2>
        <p style={sectionStyles.description}>Loading the latest signals and arranging the board.</p>
      </section>
    );
  }

  if (state === "error") {
    return (
      <section style={sectionStyles.shell}>
        <p style={sectionStyles.eyebrow}>Signal-rich dashboard</p>
        <h2 style={sectionStyles.title}>A Faq Section</h2>
        <div style={sectionStyles.statePanel}>The page is intact, but the live content could not be refreshed just now.</div>
      </section>
    );
  }

  if (state === "empty" || items.length === 0) {
    return (
      <section style={sectionStyles.shell}>
        <p style={sectionStyles.eyebrow}>Signal-rich dashboard</p>
        <h2 style={sectionStyles.title}>A Faq Section</h2>
        <div style={sectionStyles.statePanel}>No highlights are available yet. Connect a data source or publish the first event.</div>
      </section>
    );
  }

  return (
    <section style={sectionStyles.shell}>
      <p style={sectionStyles.eyebrow}>Signal-rich dashboard</p>
      <h2 style={sectionStyles.title}>A Faq Section</h2>
      <p style={sectionStyles.description}>Designed to surface the strongest numbers first while still leaving room for narrative context.</p>
      <div style={sectionStyles.grid}>
        {items.map((item) => (
          <article key={item.label} style={sectionStyles.card}>
            <p style={sectionStyles.eyebrow}>{item.label}</p>
            <p style={sectionStyles.value}>{item.value}</p>
            {item.detail ? <p style={sectionStyles.detail}>{item.detail}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
