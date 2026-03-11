import { GraphReactFlowWorkspace } from "../react-flow/graph-react-flow-workspace";
import { GraphLegend } from "./GraphLegend";
import { GraphSummary } from "./GraphSummary";
import { GraphEmptyState } from "./GraphEmptyState";

type GraphWorkspaceProps = {
  hasContent?: boolean;
};

export function GraphWorkspace({ hasContent = true }: GraphWorkspaceProps) {
  if (!hasContent) {
    return <GraphEmptyState />;
  }

  return (
    <div style={{ display: "grid", gap: "1rem" }}>
      <GraphSummary />
      <GraphLegend />
      <GraphReactFlowWorkspace />
    </div>
  );
}
