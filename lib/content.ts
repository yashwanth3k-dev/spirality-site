import {
  Activity,
  Bot,
  Brain,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileSearch,
  Gauge,
  GitBranch,
  Handshake,
  Layers3,
  LineChart,
  LockKeyhole,
  LucideIcon,
  Network,
  Radar,
  Route,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench
} from "lucide-react";

export type SolutionPillar = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  items: string[];
  cta: string;
  icon: LucideIcon;
};

export const navItems = [
  { href: "/solutions", label: "Solutions" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/got", label: "Got" },
  { href: "/bizdaptive", label: "Bizdaptive" }
];

export const solutionPillars: SolutionPillar[] = [
  {
    slug: "strategy",
    eyebrow: "01",
    title: "AI Strategy & Transformation",
    summary:
      "Find where AI can create measurable value, what should wait, and how to move without creating operational risk.",
    items: [
      "AI readiness assessment",
      "Opportunity identification",
      "AI strategy and roadmap",
      "Governance advisory",
      "Business-process assessment",
      "Adoption strategy"
    ],
    cta: "Assess your AI readiness",
    icon: Radar
  },
  {
    slug: "systems",
    eyebrow: "02",
    title: "AI Agents & Intelligent Systems",
    summary:
      "Build agents and workflows that understand your rules, use your systems, escalate correctly, and leave an audit trail.",
    items: [
      "AI agent development",
      "Conversational AI",
      "Workflow automation",
      "CRM and ERP integrations",
      "Internal knowledge systems",
      "Guardrails and escalation"
    ],
    cta: "Build an intelligent system",
    icon: Bot
  },
  {
    slug: "infrastructure",
    eyebrow: "03",
    title: "Digital Infrastructure",
    summary:
      "Create the portals, dashboards, APIs, data flows, and digital workflows AI needs in order to operate effectively.",
    items: [
      "Business applications",
      "Customer portals",
      "Websites and digital presence",
      "Dashboards and reporting",
      "APIs and integrations",
      "Data pipeline architecture"
    ],
    cta: "Build the infrastructure",
    icon: Layers3
  },
  {
    slug: "operations",
    eyebrow: "04",
    title: "Managed Business Operations",
    summary:
      "Let Spirality operate the process under agreed outcomes while improving the system and reducing manual workload over time.",
    items: [
      "Business process operations",
      "AI-assisted operations",
      "Customer support operations",
      "Back-office and finance operations",
      "Monitoring and maintenance",
      "Continuous improvement"
    ],
    cta: "Let Spirality operate it",
    icon: Handshake
  }
];

export const diagnosticSteps = [
  {
    step: "01",
    title: "Discover",
    description: "People, processes, systems, data, constraints, exceptions, and current tools.",
    icon: FileSearch
  },
  {
    step: "02",
    title: "Assess",
    description: "AI readiness, automation potential, data availability, and process complexity.",
    icon: ClipboardCheck
  },
  {
    step: "03",
    title: "Identify",
    description: "Specific AI opportunities tied to real workflows and measurable business outcomes.",
    icon: Sparkles
  },
  {
    step: "04",
    title: "Prioritize",
    description: "Value, complexity, risk, time-to-value, and delivery model fit.",
    icon: Gauge
  },
  {
    step: "05",
    title: "Roadmap",
    description: "A practical now, next, later sequence for building momentum without overcommitting.",
    icon: Route
  },
  {
    step: "06",
    title: "Delivery",
    description: "Choose managed outcome or build and transfer based on who should carry the operational risk.",
    icon: CheckCircle2
  }
];

export const applications = [
  {
    category: "Customer Operations",
    examples: ["Support ticket handling", "Lead qualification", "Scheduling and triage"],
    impact: "Reduce repetitive manual queues while keeping escalation visible.",
    icon: Users
  },
  {
    category: "Finance",
    examples: ["Invoice processing", "Reconciliation", "Document review"],
    impact: "Move structured finance work through checks, approvals, and exceptions faster.",
    icon: LineChart
  },
  {
    category: "Operations",
    examples: ["Order management", "Process automation", "Monitoring"],
    impact: "Coordinate work across systems instead of relying on handoffs and reminders.",
    icon: Activity
  },
  {
    category: "Knowledge",
    examples: ["Internal knowledge retrieval", "Research", "Reporting"],
    impact: "Turn scattered documents and experience into usable operational memory.",
    icon: Brain
  },
  {
    category: "Marketing",
    examples: ["Content generation", "Quality checks", "Campaign workflows"],
    impact: "Create repeatable content and review loops that keep brand judgment intact.",
    icon: Wrench
  }
];

export const opportunityRows = [
  { name: "Support automation", value: 92, complexity: 58, priority: "Critical" },
  { name: "Invoice processing", value: 88, complexity: 62, priority: "Critical" },
  { name: "Lead qualification", value: 72, complexity: 36, priority: "High" },
  { name: "Internal knowledge", value: 69, complexity: 34, priority: "High" },
  { name: "Marketing QA", value: 44, complexity: 28, priority: "Medium" }
];

export const governancePrinciples = [
  {
    title: "Human oversight",
    description: "Critical actions can require human review before execution.",
    icon: Users
  },
  {
    title: "Verification",
    description: "Important outputs are checked against rules, data, and prior work.",
    icon: ShieldCheck
  },
  {
    title: "Guardrails",
    description: "Agents operate within defined authority limits and policies.",
    icon: LockKeyhole
  },
  {
    title: "Escalation",
    description: "Uncertain, sensitive, or high-risk cases move to people.",
    icon: GitBranch
  },
  {
    title: "Auditability",
    description: "Actions, approvals, context, and decisions can be traced.",
    icon: Database
  },
  {
    title: "Organizational context",
    description: "AI works with company-specific roles, rules, systems, and memory.",
    icon: Building2
  }
];

export const bizdaptiveLayers = [
  "Agents",
  "Organization",
  "Memory",
  "Policies",
  "Approvals",
  "Verification",
  "Execution history",
  "Trusted AI work"
];

export const systemLayers = [
  { label: "Business process", icon: Network },
  { label: "Data and knowledge", icon: Database },
  { label: "AI agents", icon: Bot },
  { label: "Tools and integrations", icon: Wrench },
  { label: "People and approvals", icon: Users },
  { label: "Governed outcome", icon: ShieldCheck }
];
