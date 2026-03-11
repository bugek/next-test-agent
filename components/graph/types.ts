export type GraphNodeKind = "source" | "pipeline" | "destination";

export type GraphNodeData = {
  label: string;
  summary: string;
  kind: GraphNodeKind;
};

export type GraphSummaryItem = {
  label: string;
  value: string;
  detail: string;
};
