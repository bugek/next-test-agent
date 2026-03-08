import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const layoutStyles = {
  shell: { minHeight: "100vh", background: "linear-gradient(180deg, #f5efe4 0%, #ebe4d8 100%)", color: "#1f2937" },
  header: { maxWidth: "72rem", margin: "0 auto", padding: "1.5rem 1.5rem 0" },
  eyebrow: { margin: 0, textTransform: "uppercase", letterSpacing: "0.18em", fontSize: "0.72rem", color: "#0f766e" },
  title: { margin: "0.35rem 0 0", fontSize: "1.5rem" },
  content: { maxWidth: "72rem", margin: "0 auto", padding: "1.5rem" },
};

export default function PricingLayout({ children }: LayoutProps) {
  return (
    <section style={layoutStyles.shell}>
      <header style={layoutStyles.header}>
        <p style={layoutStyles.eyebrow}>Signal-rich dashboard</p>
        <h1 style={layoutStyles.title}>Pricing</h1>
      </header>
      <div style={layoutStyles.content}>{children}</div>
    </section>
  );
}
