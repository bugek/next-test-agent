import Link from "next/link";

const homeStyles = {
  shell: { minHeight: "100vh", padding: "4rem 1.5rem", background: "linear-gradient(180deg, #f6f1ea 0%, #e8ddd0 100%)", color: "#2f241c" },
  panel: { maxWidth: "56rem", margin: "0 auto", padding: "2rem", borderRadius: "28px", background: "#fffaf5", boxShadow: "0 24px 60px rgba(15, 23, 42, 0.12)" },
  eyebrow: { margin: 0, textTransform: "uppercase", letterSpacing: "0.18em", fontSize: "0.72rem", color: "#b45309" },
  title: { margin: "0.75rem 0 0", fontSize: "clamp(2.4rem, 6vw, 4.5rem)", lineHeight: 0.95 },
  description: { maxWidth: "42rem", margin: "1rem 0 0", fontSize: "1.05rem", color: "#6b5a4a" },
  link: { display: "inline-flex", marginTop: "1.5rem", padding: "0.85rem 1.15rem", borderRadius: "999px", textDecoration: "none", background: "#2f241c", color: "#fffaf5", fontWeight: 600 },
};

export default function HomePage() {
  return (
    <main style={homeStyles.shell}>
      <section style={homeStyles.panel}>
        <p style={homeStyles.eyebrow}>Graph preview</p>
        <h1 style={homeStyles.title}>SmartFarm operations, mapped.</h1>
        <p style={homeStyles.description}>Open the graph experience to inspect the relationship map, supporting summaries, and state-aware UI that now live in the dedicated route.</p>
        <Link href="/next-test-agent" style={homeStyles.link}>Open graph experience</Link>
      </section>
    </main>
  );
}
