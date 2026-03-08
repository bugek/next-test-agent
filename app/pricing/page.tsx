import { AFaqSection } from "../../components/a-faq-section";

const previewItems = [
  { label: "Primary signal", value: "$128k", detail: "Net uplift since the last release window." },
  { label: "Momentum", value: "+18%", detail: "Week-on-week momentum across the main surface." },
];

const pageStyles = {
  shell: { minHeight: "100vh", padding: "4rem 1.5rem", background: "linear-gradient(180deg, #f5efe4 0%, #ebe4d8 100%)", color: "#1f2937" },
  hero: { maxWidth: "56rem", margin: "0 auto 2rem", padding: "2rem", borderRadius: "28px", background: "#fffaf0", boxShadow: "0 24px 60px rgba(15, 23, 42, 0.12)" },
  eyebrow: { margin: 0, textTransform: "uppercase", letterSpacing: "0.18em", fontSize: "0.72rem", color: "#0f766e" },
  title: { margin: "0.75rem 0 0", fontSize: "clamp(2.5rem, 6vw, 4.75rem)", lineHeight: 0.95 },
  description: { maxWidth: "42rem", margin: "1rem 0 0", fontSize: "1.05rem", color: "#5b6470" },
};

export default function PricingPage() {
  return (
    <main style={pageStyles.shell}>
      <section style={pageStyles.hero}>
        <p style={pageStyles.eyebrow}>Signal-rich dashboard</p>
        <h1 style={pageStyles.title}>Pricing</h1>
        <p style={pageStyles.description}>A bold control room layout with clear hierarchy, warm surfaces, and decisive contrast.</p>
      </section>
      <AFaqSection state="ready" items={previewItems} />
    </main>
  );
}
