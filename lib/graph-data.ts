import type { Edge, Node } from "reactflow";
import type { GraphNodeData, GraphNodeKind, GraphSummaryItem } from "./graph-types";

export const graphToneByKind: Record<GraphNodeKind, { background: string; color: string; border: string }> = {
  source: { background: "#fff7ed", color: "#7c2d12", border: "1px solid rgba(194, 120, 3, 0.28)" },
  pipeline: { background: "#fffaf5", color: "#2f241c", border: "1px solid rgba(139, 94, 60, 0.24)" },
  destination: { background: "#ecfccb", color: "#365314", border: "1px solid rgba(101, 163, 13, 0.26)" },
};

export const graphSummaryItems: GraphSummaryItem[] = [
  { label: "Sample metric", value: "Example value", detail: "Use this area for clearly labeled sample content or real data." },
  { label: "Example trend", value: "Sample status", detail: "Avoid authoritative-looking operational numbers until the surface is wired to live data." },
];

export const graphNodes: Node<GraphNodeData>[] = [
  { id: "source", position: { x: 40, y: 140 }, data: { label: "Source", summary: "Incoming signals or repository events.", kind: "source" }, style: { width: 170 } },
  { id: "pipeline", position: { x: 320, y: 120 }, data: { label: "Pipeline", summary: "Validation, orchestration, and review flow.", kind: "pipeline" }, style: { width: 190 } },
  { id: "destination", position: { x: 640, y: 140 }, data: { label: "Destination", summary: "Published UI or downstream delivery target.", kind: "destination" }, style: { width: 180 } },
];

export const graphEdges: Edge[] = [
  { id: "source-pipeline", source: "source", target: "pipeline", label: "validated", style: { stroke: "#8b5e3c", strokeWidth: 1.8 } },
  { id: "pipeline-destination", source: "pipeline", target: "destination", label: "delivers", style: { stroke: "#4d7c0f", strokeWidth: 1.8 } },
];
