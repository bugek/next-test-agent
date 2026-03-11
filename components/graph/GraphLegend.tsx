import { graphToneByKind } from "./graph-data";

export function GraphLegend() {
  return (
    <div style={{ display: "grid", gap: "0.75rem", gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))" }}>
      {Object.entries(graphToneByKind).map(([key, tone]) => (
        <div key={key} style={{ borderRadius: "18px", padding: "0.9rem", ...tone }}>
          <strong style={{ textTransform: "capitalize" }}>{key}</strong>
        </div>
      ))}
    </div>
  );
}
