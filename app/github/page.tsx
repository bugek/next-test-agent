import { GithubSection } from "../../components/github-section";

const sampleItems = [
  { label: "Sample metric", value: "Example value", detail: "Use this area for clearly labeled sample content or real data." },
  { label: "Example trend", value: "Sample status", detail: "Avoid authoritative-looking operational numbers until the surface is wired to live data." },
];

const pageStyles = {
  shell: { minHeight: "100vh", padding: "4rem 1.5rem", background: "linear-gradient(180deg, #f6f1ea 0%, #e8ddd0 100%)", color: "#2f241c" },
  hero: { maxWidth: "56rem", margin: "0 auto 2rem", padding: "2rem", borderRadius: "28px", background: "#fffaf5", boxShadow: "0 24px 60px rgba(15, 23, 42, 0.12)" },
  eyebrow: { margin: 0, textTransform: "uppercase", letterSpacing: "0.18em", fontSize: "0.72rem", color: "#b45309" },
  title: { margin: "0.75rem 0 0", fontSize: "clamp(2.5rem, 6vw, 4.75rem)", lineHeight: 0.95 },
  description: { maxWidth: "42rem", margin: "1rem 0 0", fontSize: "1.05rem", color: "#6b5a4a" },
  note: { margin: "1rem 0 0", fontSize: "0.9rem", color: "#6b5a4a" },
};

export default function GithubPage() {
  return (
    <main style={pageStyles.shell}>
      <section style={pageStyles.hero}>
        <p style={pageStyles.eyebrow}>Editorial product surface</p>
        <h1 style={pageStyles.title}>Github</h1>
        <p style={pageStyles.description}>A modern product page with higher contrast, stronger typography, and clear state transitions.</p>
        <p style={pageStyles.note}>Demo content preview until live data is connected.</p>
      </section>
      <GithubSection state="ready" items={sampleItems} />
    </main>
  );
}
