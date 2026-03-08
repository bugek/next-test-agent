import type { CSSProperties, ReactNode } from "react";

export type DemoState = "loading" | "empty" | "error" | "success";

type StateWrapperProps = {
  state: DemoState;
  children: ReactNode;
  loadingTitle?: string;
  loadingMessage?: string;
  emptyTitle?: string;
  emptyMessage?: string;
  errorTitle?: string;
  errorMessage?: string;
};

const stateContent: Record<DemoState, { title: string; message: string }> = {
  loading: {
    title: "Loading SmartFarm view",
    message: "Preparing greenhouse metrics, alerts, and zone summaries.",
  },
  empty: {
    title: "No farm activity to show",
    message: "This demo state shows how the dashboard looks when there are no recent readings or alerts.",
  },
  error: {
    title: "Sample data preview failed",
    message: "This demo state represents an in-page fallback when dashboard content cannot be shown.",
  },
  success: {
    title: "",
    message: "",
  },
};

const accentStyles: Record<Exclude<DemoState, "success">, CSSProperties> = {
  loading: {
    background: "linear-gradient(135deg, rgba(250, 204, 21, 0.18), rgba(245, 158, 11, 0.14))",
    border: "1px solid rgba(245, 158, 11, 0.28)",
    color: "#92400e",
  },
  empty: {
    background: "linear-gradient(135deg, rgba(254, 243, 199, 0.72), rgba(220, 252, 231, 0.7))",
    border: "1px solid rgba(34, 197, 94, 0.18)",
    color: "#166534",
  },
  error: {
    background: "linear-gradient(135deg, rgba(254, 226, 226, 0.88), rgba(255, 247, 237, 0.92))",
    border: "1px solid rgba(239, 68, 68, 0.22)",
    color: "#991b1b",
  },
};

export function StateWrapper({
  state,
  children,
  loadingTitle,
  loadingMessage,
  emptyTitle,
  emptyMessage,
  errorTitle,
  errorMessage,
}: StateWrapperProps) {
  if (state === "success") {
    return <>{children}</>;
  }

  const content = stateContent[state];

  const title =
    state === "loading"
      ? loadingTitle ?? content.title
      : state === "empty"
        ? emptyTitle ?? content.title
        : errorTitle ?? content.title;

  const message =
    state === "loading"
      ? loadingMessage ?? content.message
      : state === "empty"
        ? emptyMessage ?? content.message
        : errorMessage ?? content.message;

  const helperCopy =
    state === "loading"
      ? "Skeleton cards and sections are arranged to preview the dashboard at both compact mobile and wide desktop breakpoints."
      : state === "empty"
        ? "The empty state keeps its message concise so it remains easy to scan on mobile while still feeling balanced on desktop."
        : "The inline fallback is designed to stay readable in stacked and multi-column layouts, with a warmer alert treatment that stays visible on phones and larger screens.";

  return (
    <section
      aria-live="polite"
      style={{
        display: "grid",
        gap: "1rem",
        width: "100%",
        boxSizing: "border-box",
        padding: "clamp(1rem, 3vw, 1.5rem)",
        borderRadius: "24px",
        ...accentStyles[state],
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "0.75rem",
          alignItems: "center",
        }}
      >
        <div
          style={{
            padding: "0.35rem 0.7rem",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.45)",
            fontSize: "0.78rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {state} state
        </div>
        <div
          style={{
            fontSize: "0.85rem",
            fontWeight: 600,
            opacity: 0.9,
          }}
        >
          Mobile and desktop ready
        </div>
      </div>
      <div style={{ display: "grid", gap: "0.65rem" }}>
        <h3 style={{ margin: 0 }}>{title}</h3>
        <p style={{ margin: 0, lineHeight: 1.55 }}>{message}</p>
        <p style={{ margin: 0, lineHeight: 1.55 }}>{helperCopy}</p>
      </div>
    </section>
  );
}
