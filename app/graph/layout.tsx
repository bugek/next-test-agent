import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const layoutStyles = {
  shell: { minHeight: "100vh", background: "linear-gradient(180deg, #f6f1ea 0%, #e8ddd0 100%)", color: "#2f241c" },
  header: { maxWidth: "72rem", margin: "0 auto", padding: "1.5rem 1.5rem 0" },
  eyebrow: { margin: 0, textTransform: "uppercase", letterSpacing: "0.18em", fontSize: "0.72rem", color: "#b45309" },
  title: { margin: "0.35rem 0 0", fontSize: "1.5rem" },
  content: { maxWidth: "72rem", margin: "0 auto", padding: "1.5rem" },
};

export default function GraphLayout({ children }: LayoutProps) {
  return (
    <section style={layoutStyles.shell}>
      <header style={layoutStyles.header}>
        <p style={layoutStyles.eyebrow}>Editorial product surface</p>
        <h1 style={layoutStyles.title}>Graph</h1>
      </header>
      <div style={layoutStyles.content}>{children}</div>
    </section>
  );
}
