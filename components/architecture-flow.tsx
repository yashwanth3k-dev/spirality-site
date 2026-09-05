"use client";

import {
  Background,
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps
} from "@xyflow/react";
import { cn } from "@/lib/utils";

type NodeData = {
  label: string;
  detail: string;
  tone?: "brand" | "teal" | "dark";
};

function SystemNode({ data }: NodeProps<Node<NodeData>>) {
  return (
    <div
      className={cn(
        "min-w-40 rounded-2xl border bg-white px-4 py-3 shadow-soft",
        data.tone === "brand" && "border-brand/40 bg-brand text-white",
        data.tone === "teal" && "border-teal/40 bg-teal text-white",
        data.tone === "dark" && "border-night bg-night text-white"
      )}
    >
      <Handle type="target" position={Position.Top} className="opacity-0" />
      <div className="text-sm font-extrabold">{data.label}</div>
      <div
        className={cn(
          "mt-1 text-xs leading-5 text-slate-500",
          data.tone && "text-white/70"
        )}
      >
        {data.detail}
      </div>
      <Handle type="source" position={Position.Bottom} className="opacity-0" />
    </div>
  );
}

const nodes: Node<NodeData>[] = [
  {
    id: "process",
    type: "system",
    position: { x: 255, y: 0 },
    data: { label: "Business Process", detail: "Work, rules, edge cases" }
  },
  {
    id: "data",
    type: "system",
    position: { x: 0, y: 150 },
    data: { label: "Data & Knowledge", detail: "Documents, CRM, history" }
  },
  {
    id: "agent",
    type: "system",
    position: { x: 255, y: 150 },
    data: { label: "AI Agent", detail: "Reasoning and execution", tone: "brand" }
  },
  {
    id: "tools",
    type: "system",
    position: { x: 510, y: 150 },
    data: { label: "Tools", detail: "ERP, APIs, inboxes" }
  },
  {
    id: "people",
    type: "system",
    position: { x: 130, y: 310 },
    data: { label: "People", detail: "Review and escalation", tone: "teal" }
  },
  {
    id: "outcome",
    type: "system",
    position: { x: 385, y: 310 },
    data: { label: "Outcome", detail: "Measured business result", tone: "dark" }
  }
];

const edges: Edge[] = [
  { id: "process-agent", source: "process", target: "agent", markerEnd: { type: MarkerType.ArrowClosed } },
  { id: "data-agent", source: "data", target: "agent", markerEnd: { type: MarkerType.ArrowClosed } },
  { id: "tools-agent", source: "tools", target: "agent", markerEnd: { type: MarkerType.ArrowClosed } },
  { id: "agent-people", source: "agent", target: "people", markerEnd: { type: MarkerType.ArrowClosed } },
  { id: "agent-outcome", source: "agent", target: "outcome", markerEnd: { type: MarkerType.ArrowClosed } },
  { id: "people-outcome", source: "people", target: "outcome", markerEnd: { type: MarkerType.ArrowClosed } }
];

const nodeTypes = {
  system: SystemNode
};

export function ArchitectureFlow() {
  return (
    <div className="h-[460px] overflow-hidden rounded-4xl border border-line bg-white">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#dbe5ff" gap={28} />
      </ReactFlow>
    </div>
  );
}
