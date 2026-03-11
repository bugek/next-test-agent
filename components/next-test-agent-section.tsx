import { NextTestAgentReactFlowWorkspace } from "./react-flow/next-test-agent-react-flow-workspace";

type NextTestAgentSectionState = "loading" | "empty" | "error" | "ready";

type NextTestAgentSectionItem = {
  label: string;
  value: string;
  detail?: string;
};

type NextTestAgentSectionProps = {
  state?: NextTestAgentSectionState;
  items?: NextTestAgentSectionItem[];
};

const sectionStyles = {
  shell: { borderRadius: "28px", padding: "1.5rem", background: "#fffaf5", color: "#2f241c", boxShadow: "0 24px 60px rgba(15, 23, 42, 0.12)" },
  eyebrow: { margin: 0, textTransform: "uppercase", letterSpacing: "0.16em", fontSize: "0.72rem", color: "#b45309" },
  title: { margin: "0.5rem 0 0", fontSize: "1.5rem" },
  description: { margin: "0.75rem 0 0", color: "#6b5a4a" },
  statePanel: { marginTop: "1.5rem", padding: "1.25rem", borderRadius: "20px", background: "#f1e4d4", color: "#6b5a4a" },
  workspace: { marginTop: "1.5rem" },
};

export function NextTestAgentSection({ state = "ready", items = [] }: NextTestAgentSectionProps) {
  if (state === "loading") {
    return (
      <section style={sectionStyles.shell}>
        <p style={sectionStyles.eyebrow}>Editorial product surface</p>
        <h2 style={sectionStyles.title}>Next Test Agent Section</h2>
        <p style={sectionStyles.description}>Preparing the surface and staging the first interaction states.</p>
      </section>
    );
  }

  if (state === "error") {
    return (
      <section style={sectionStyles.shell}>
        <p style={sectionStyles.eyebrow}>Editorial product surface</p>
        <h2 style={sectionStyles.title}>Next Test Agent Section</h2>
        <div style={sectionStyles.statePanel}>The shell is present, but the content layer hit an unexpected error.</div>
      </section>
    );
  }

  if (state === "empty" || items.length === 0) {
    return (
      <section style={sectionStyles.shell}>
        <p style={sectionStyles.eyebrow}>Editorial product surface</p>
        <h2 style={sectionStyles.title}>Next Test Agent Section</h2>
        <div style={sectionStyles.statePanel}>This section is ready, but it has no content yet. Add the first record to bring it to life.</div>
      </section>
    );
  }

  return (
    <section style={sectionStyles.shell}>
      <p style={sectionStyles.eyebrow}>Editorial product surface</p>
      <h2 style={sectionStyles.title}>Next Test Agent Section</h2>
      <p style={sectionStyles.description}>Structured for a more intentional first impression than a plain scaffold.</p>
      <div style={sectionStyles.workspace}>
        <NextTestAgentReactFlowWorkspace />
      </div>
    </section>
  );
}
