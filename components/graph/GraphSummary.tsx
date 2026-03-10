import { graphSummaryItems } from "../../lib/graph-data";

export function GraphSummary() {
  return (
    <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))" }}>
      {graphSummaryItems.map((item) => (
        <article key={item.label} style={{ borderRadius: "20px", padding: "1rem", background: "#f1e4d4" }}>
          <p style={{ margin: 0, textTransform: "uppercase", letterSpacing: "0.14em", fontSize: "0.72rem", color: "#b45309" }}>{item.label}</p>
          <p style={{ margin: "0.4rem 0 0", fontSize: "1.15rem", color: "#2f241c", fontWeight: 700 }}>{item.value}</p>
          <p style={{ margin: "0.5rem 0 0", color: "#6b5a4a" }}>{item.detail}</p>
        </article>
      ))}
    </div>
  );
}
