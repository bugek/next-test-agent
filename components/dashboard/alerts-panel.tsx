export type AlertItem = {
  title: string;
  detail: string;
  level: "warning" | "info" | "critical";
  time: string;
};

type AlertsPanelProps = {
  alerts: AlertItem[];
};

const levelStyles: Record<AlertItem["level"], { background: string; color: string }> = {
  warning: { background: "rgba(245, 158, 11, 0.14)", color: "#b45309" },
  info: { background: "rgba(20, 184, 166, 0.12)", color: "#0f766e" },
  critical: { background: "rgba(239, 68, 68, 0.12)", color: "#b91c1c" },
};

export function AlertsPanel({ alerts }: AlertsPanelProps) {
  return (
    <section
      aria-labelledby="alerts-title"
      style={{
        display: "grid",
        gap: "1rem",
        padding: "clamp(1rem, 2.5vw, 1.35rem)",
        borderRadius: "24px",
        background: "rgba(255, 250, 240, 0.92)",
        boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
        border: "1px solid rgba(148, 163, 184, 0.14)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <div>
          <span
            style={{
              display: "inline-block",
              marginBottom: "0.45rem",
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              fontSize: "0.72rem",
              color: "#0f766e",
              fontWeight: 700,
            }}
          >
            Recent alerts
          </span>
          <h2 id="alerts-title" style={{ margin: 0, fontSize: "1.2rem", color: "#1f2937" }}>
            Attention feed
          </h2>
        </div>
        <span
          style={{
            padding: "0.5rem 0.8rem",
            borderRadius: "999px",
            background: "rgba(15, 118, 110, 0.1)",
            color: "#115e59",
            fontWeight: 700,
            fontSize: "0.84rem",
          }}
        >
          {alerts.length} active
        </span>
      </div>

      {alerts.length === 0 ? (
        <div
          style={{
            padding: "1rem",
            borderRadius: "18px",
            background: "linear-gradient(135deg, rgba(236, 253, 245, 0.8), rgba(254, 249, 195, 0.75))",
            border: "1px dashed rgba(34, 197, 94, 0.24)",
            color: "#166534",
          }}
        >
          <strong style={{ display: "block", marginBottom: "0.35rem" }}>No active alerts</strong>
          <p style={{ margin: 0, lineHeight: 1.55 }}>
            All monitored zones are within the expected range. This empty state is intentionally compact so it reads well on mobile and desktop alike.
          </p>
        </div>
      ) : (
        <div style={{ display: "grid", gap: "0.85rem" }}>
          {alerts.map((alert) => (
            <article
              key={`${alert.title}-${alert.time}`}
              style={{
                display: "grid",
                gap: "0.65rem",
                padding: "1rem",
                borderRadius: "18px",
                background: "rgba(255,255,255,0.72)",
                border: "1px solid rgba(148, 163, 184, 0.12)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  gap: "0.6rem",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    ...levelStyles[alert.level],
                    padding: "0.35rem 0.7rem",
                    borderRadius: "999px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  {alert.level}
                </span>
                <span style={{ color: "#6b7280", fontSize: "0.9rem", fontWeight: 600 }}>{alert.time}</span>
              </div>
              <h3 style={{ margin: 0, fontSize: "1rem", color: "#1f2937" }}>{alert.title}</h3>
              <p style={{ margin: 0, color: "#5b6470", lineHeight: 1.55 }}>{alert.detail}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
