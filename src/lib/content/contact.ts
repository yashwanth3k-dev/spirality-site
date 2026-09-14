import { ABOUT_FOUNDERS } from "~/lib/content/about";
import { METHOD, ROUTES } from "~/lib/content/home";
import type { UseCaseGlyph } from "~/lib/content/use-cases";

export const CONTACT_INDEX = {
  eyebrow: "Talk to Us",
  titleLead: "Start with the problem.",
  titleAccent: "We'll engineer the solution.",
  lead: "Tell us the process that costs time, judgment, or risk. We'll tell you whether AI belongs there — and how to assemble the system around it.",
  description:
    "Talk to Spirality about one real business process. Advice, a build, or build-and-run — start with the work, not the model.",
} as const;

export const CONTACT_VECTORS = [
  {
    id: "ai-agents",
    title: "AI Agents",
    line: "Agents around a specific desk, not a demo.",
    icon: "bot" as UseCaseGlyph,
  },
  {
    id: "business-systems",
    title: "Business Systems",
    line: "CRM, workflows, dashboards, integrations.",
    icon: "workflow" as UseCaseGlyph,
  },
  {
    id: "digital",
    title: "Digital Services",
    line: "Sites, portals, apps, and the digital layer.",
    icon: "globe" as UseCaseGlyph,
  },
  {
    id: "ops",
    title: "BPO & Operations",
    line: "People, systems, and automation on the same process.",
    icon: "headset" as UseCaseGlyph,
  },
  {
    id: "all-in-one",
    title: "All in one",
    line: "Agents, systems, digital, and ops on the same process.",
    icon: "spark" as UseCaseGlyph,
  },
  {
    id: "not-clear",
    title: "Not clear",
    line: "We don't know which layer it is yet. That's fine.",
    icon: "scan" as UseCaseGlyph,
  },
] as const;

export const CONTACT_DEPTHS = [
  {
    id: "advise",
    title: "Advice",
    line: "Figure out what to do — and what not to.",
  },
  {
    id: "build",
    title: "Advice + build",
    line: "Diagnose, then design and build the system.",
  },
  {
    id: "run",
    title: "Build + run",
    line: "Build it, then keep it alive.",
  },
  {
    id: "all-in-one",
    title: "All in one",
    line: "Advice through to build-and-run. We'll cut it with you.",
  },
  {
    id: "not-clear",
    title: "Not clear",
    line: "We'll say how far it should go after we see the process.",
  },
] as const;

export const CONTACT_SYSTEMS = [
  "CRM",
  "ERP / finance",
  "Helpdesk",
  "Spreadsheets",
  "WhatsApp / chat",
  "Custom APIs",
  "All in one",
  "Not clear",
] as const;

export const CONTACT_SYSTEM_SPECIAL = ["All in one", "Not clear"] as const;

export const CONTACT_FORM = {
  consoleLabel: "Intake",
  consoleNote: "One process. The depth you think you need.",
  vectorLegend: "What are you trying to improve?",
  nameLabel: "Name",
  namePlaceholder: "Your name",
  emailLabel: "Work email",
  emailPlaceholder: "you@company.com",
  companyLabel: "Company",
  companyPlaceholder: "Optional",
  depthLegend: "How far do you want to go?",
  systemsLegend: "What do you already run?",
  systemsHint:
    "Optional. Helps us see the desk, not a stack we pretend to certify.",
  processLabel: "The process that hurts",
  processPlaceholder:
    "What happens today, who does it, where it breaks, and what 2am looks like if it fails.",
  submit: "Send the process",
  sending: "Opening mail…",
  errorRequired:
    "Name, work email, what you're improving, how far you want to go, and the process are required.",
  errorEmail: "Use a work email we can reply to.",
  successHeading: "Your mail client should open with the brief.",
  successBody:
    "If it doesn't, copy the note below or email us directly. We'll start with the process you named — not a model shortlist.",
  successAgain: "Send another",
} as const;

export const CONTACT_PEOPLE = {
  heading: "Who reads it",
  lead: "Yashwanth, Akil, and Sudharshan. The same three people as About.",
  items: [
    {
      name: ABOUT_FOUNDERS.items[0].name,
      mark: ABOUT_FOUNDERS.items[0].mark,
      role: ABOUT_FOUNDERS.items[0].role,
      tag: ABOUT_FOUNDERS.items[0].tag,
      focus: ABOUT_FOUNDERS.items[0].focus,
      line: "If it cannot survive a real night on the desk, it is not ready.",
    },
    {
      name: ABOUT_FOUNDERS.items[1].name,
      mark: ABOUT_FOUNDERS.items[1].mark,
      role: ABOUT_FOUNDERS.items[1].role,
      tag: ABOUT_FOUNDERS.items[1].tag,
      focus: ABOUT_FOUNDERS.items[1].focus,
      line: "If the process isn't named, the technology isn't ready.",
    },
    {
      name: ABOUT_FOUNDERS.items[2].name,
      mark: ABOUT_FOUNDERS.items[2].mark,
      role: ABOUT_FOUNDERS.items[2].role,
      tag: ABOUT_FOUNDERS.items[2].tag,
      focus: ABOUT_FOUNDERS.items[2].focus,
      line: "Something the business can run, not a pitch that only looks impressive.",
    },
  ],
} as const;

export const CONTACT_NEXT = {
  heading: "What happens after you send it",
  lead: "No invented clock. The sequence is the same as How We Work.",
  href: ROUTES.howWeWork,
  stages: METHOD.stages,
} as const;

export const CONTACT_FAQS = {
  heading: "Questions before you write",
  items: [
    {
      q: "Where should we start?",
      a: "One process that already costs time, judgment, or risk. If you cannot describe it in a paragraph, we start with a diagnostic — not a build.",
    },
    {
      q: "Do we have to buy AI?",
      a: "No. AI is a means. Sometimes the right move is a system, a digital product, operations support, or advice that says not yet.",
    },
    {
      q: "Can we just talk first?",
      a: "Yes. Advice only is a real engagement. Bring the process and the depth you think you need. We'll say if we agree.",
    },
    {
      q: "What should the note include?",
      a: "How the work runs today, who owns it, where it breaks, and how far you want to go. The systems you already run help. A model shortlist does not.",
    },
  ],
} as const;
