"use client";

import { useMemo, useState } from "react";
import ReactFlow, { Background, Controls, MarkerType, MiniMap, type Edge, type Node, type OnSelectionChangeParams } from "reactflow";
import "reactflow/dist/style.css";

import { graphEdges, graphNodes, graphToneByKind } from "../../lib/graph-data";
import type { GraphNodeData, GraphNodeKind } from "../../lib/graph-types";

const toneByKind: Record<GraphNodeKind, { background: string; color: string; border: string }> = graphToneByKind;

const nodes: Node<GraphNodeData>[] = graphNodes.map((node) => ({
  ...node,
  style: { ...toneByKind[node.data.kind], borderRadius: 18, padding: 12, width: node.style?.width ?? 180, boxShadow: node.data.kind === "pipeline" ? "0 10px 30px rgba(47, 36, 28, 0.08)" : undefined },
}));

const edges: Edge[] = graphEdges.map((edge) => ({
  ...edge,
  markerEnd: { type: MarkerType.ArrowClosed },
}));

const styles = {
  shell: { display: "grid", gap: "1rem" },
  frame: { height: "min(68vh, 42rem)", minHeight: "26rem", borderRadius: "28px", overflow: "hidden", border: "1px solid rgba(139, 94, 60, 0.18)", background: "linear-gradient(180deg, rgba(255, 250, 245, 0.98) 0%, rgba(245, 237, 227, 0.96) 100%)", boxShadow: "0 24px 60px rgba(47, 36, 28, 0.1)" },
  detailGrid: { display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))" },
  detailCard: { borderRadius: "22px", padding: "1rem", background: "rgba(255, 250, 245, 0.92)", border: "1px solid rgba(139, 94, 60, 0.14)" },
  label: { margin: 0, textTransform: "uppercase", letterSpacing: "0.14em", fontSize: "0.7rem", color: "#b45309" },
  value: { margin: "0.5rem 0 0", fontSize: "1.1rem", color: "#2f241c", fontWeight: 700 },
  small: { margin: "0.5rem 0 0", color: "#6b5a4a", lineHeight: 1.55 },
};

export function GithubReactFlowWorkspace() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("pipeline");

  const selectedNode = useMemo<Node<GraphNodeData>>(() => nodes.find((node) => node.id === selectedNodeId) ?? nodes[1], [selectedNodeId]);

  const handleSelectionChange = ({ nodes: selectedNodes }: OnSelectionChangeParams) => {
    const firstSelectedNode = selectedNodes[0];
    if (firstSelectedNode) {
      setSelectedNodeId(firstSelectedNode.id);
    }
  };

  return (
    <section style={styles.shell}>
      <div style={styles.frame}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          minZoom={0.6}
          maxZoom={1.4}
          nodesDraggable={false}
          nodesConnectable={false}
          onSelectionChange={handleSelectionChange}
          proOptions={{ hideAttribution: true }}
        >
          <MiniMap pannable zoomable style={{ background: "rgba(255,250,245,0.95)", border: "1px solid rgba(139,94,60,0.14)" }} />
          <Controls showInteractive={false} />
          <Background color="#d6c4b2" gap={18} />
        </ReactFlow>
      </div>
      <div style={styles.detailGrid}>
        <article style={styles.detailCard}>
          <p style={styles.label}>Selected node</p>
          <p style={styles.value}>{selectedNode.data.label}</p>
          <p style={styles.small}>{selectedNode.data.summary}</p>
        </article>
        <article style={styles.detailCard}>
          <p style={styles.label}>Demo note</p>
          <p style={styles.small}>This workspace uses typed sample data to demonstrate the React Flow surface until a live data source is connected.</p>
        </article>
      </div>
    </section>
  );
}
