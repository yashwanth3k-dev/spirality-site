/** Bridge section data — ported from design-concepts/concept-3 Home.dc.html */

export const BRIDGE_PROCS = [
  { name: "Sales", metric: "− 41% cycle" },
  { name: "Marketing", metric: "− 33% cycle" },
  { name: "Service", metric: "− 58% cycle" },
  { name: "Finance", metric: "− 29% cycle" },
  { name: "Ops", metric: "− 47% cycle" },
  { name: "HR", metric: "− 22% cycle" },
  { name: "IT", metric: "− 35% cycle" },
  { name: "Legal", metric: "− 18% cycle" },
] as const;

export type BridgeProcName = (typeof BRIDGE_PROCS)[number]["name"];

export const BRIDGE_AGENT_MOBILE = [
  { x: 16, y: 6 },
  { x: 38, y: 4 },
  { x: 62, y: 4 },
  { x: 84, y: 6 },
  { x: 12, y: 18 },
  { x: 88, y: 18 },
  { x: 14, y: 32 },
  { x: 86, y: 32 },
  { x: 28, y: 11 },
  { x: 72, y: 11 },
  { x: 22, y: 26 },
  { x: 78, y: 26 },
] as const;

export const BRIDGE_AGENTS = [
  { label: "Support agent", hue: "#f59e0b", x: 5, y: 16, target: "Service" },
  { label: "SDR bot", hue: "#3d5bff", x: 20, y: 9, target: "Sales" },
  { label: "Research", hue: "#1539d1", x: 12, y: 33, target: null },
  { label: "Invoice bot", hue: "#10b981", x: 27, y: 24, target: "Finance" },
  { label: "Code assist", hue: "#f43f5e", x: 4, y: 52, target: "IT" },
  { label: "Ops copilot", hue: "#06b6d4", x: 18, y: 47, target: "Ops" },
  { label: "Scheduler", hue: "#f97316", x: 29, y: 60, target: "HR" },
  { label: "Analyst", hue: "#6b7cff", x: 9, y: 69, target: "Marketing" },
  { label: "Triage", hue: "#84cc16", x: 22, y: 82, target: null },
  { label: "Writer", hue: "#eab308", x: 6, y: 88, target: null },
  { label: "Sourcing", hue: "#14b8a6", x: 30, y: 40, target: "Legal" },
  { label: "QA checker", hue: "#2a4ec4", x: 15, y: 63, target: null },
] as const;

export const BRIDGE_QUESTIONS = [
  "Which decisions is it allowed to touch?",
  "What happens when edge cases hit?",
  "Who signs off?",
  "What happens when it’s wrong?",
  "How does what it learns flow back?",
] as const;

export const BRIDGE_GATE_LABELS = [
  "CONTEXT IN",
  "GUARDRAILS ON",
  "AUTHORITY SET",
  "MEMORY WIRED",
  "PROVEN ON YOUR WORK",
] as const;

export const BRIDGE_CAPTIONS = [
  {
    title: "Buying AI was never the hard part.",
    body: "Agents ship every week — support bots, SDRs, copilots, automations. Demoed well, raw out of the box.",
  },
  {
    title: "But your organization isn't raw.",
    body: "It has processes, policies, edge cases and institutional memory that no off-the-shelf agent knows.",
  },
  {
    title: "We're the bridge.",
    body: "We build the layer between a model and your business — and, if you want, we run it.",
  },
] as const;

export const BRIDGE_FLOWS = [
  "M40 90 Q600 300 830 150",
  "M60 200 Q600 300 830 230",
  "M30 320 Q600 300 830 310",
  "M55 430 Q600 300 830 390",
  "M45 540 Q600 300 830 470",
  "M70 620 Q600 300 830 550",
] as const;
