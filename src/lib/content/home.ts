/**
 * Homepage and shared page copy.
 *
 * Source of truth: .planning/PHASE-1-HOMEPAGE-SPEC.md (locked copy).
 * Routes / nav / footer live in ./site — import those from there in
 * client components so this module stays server-friendly.
 *
 * The homepage story: offer → bridge → benefits → close.
 * Spec copy still kept for stub pages (/solutions, /how-we-work, etc.).
 */

export {
  FOOTER,
  HERO_CTA,
  HERO_NAV,
  ROUTES,
  SECTIONS,
} from "~/lib/content/site";
import { ROUTES } from "~/lib/content/site";

/** Locked solution pillars (PRODUCT.md IA). */
export const SOLUTION_PILLARS = [
  {
    slug: "ai-strategy",
    title: "AI Strategy & Readiness",
    line: "Know where AI should actually work — and where it shouldn't.",
  },
  {
    slug: "ai-agents",
    title: "AI Agents & Systems",
    line: "Give AI a job: context, tools, action, verification, escalation.",
  },
  {
    slug: "automation",
    title: "Automation & Workflow Systems",
    line: "Automate work that shouldn't consume your best people.",
  },
  {
    slug: "digital-products",
    title: "Digital Products & Platforms",
    line: "Build the interfaces and integrations operations need.",
  },
  {
    slug: "managed-operations",
    title: "Managed AI Operations",
    line: "Don't just deploy AI. Put it to work — measure, improve, run.",
  },
] as const;

export const CATEGORY = {
  label: "What Spirality is",
  line: "Spirality designs, builds, and operates AI systems around real business work — not demos, not chat windows, not tool catalogs.",
};

export const PROBLEM = {
  eyebrow: "The problem with buying AI",
  heading:
    "Most AI projects fail in the gap between the model and the business.",
  body: "Enterprises don't struggle because models are unavailable. They struggle because work has rules, exceptions, approvals, systems, and people — and generic AI ignores that layer.",
  points: [
    { term: "Tools without context", line: "produce generic answers." },
    { term: "Pilots without operations", line: "never become owned workflow." },
    {
      term: "Autonomy without governance",
      line: "creates risk, not leverage.",
    },
  ],
  link: { label: "Read about organisational instinct", href: ROUTES.instinct },
};

export const CAPABILITIES = {
  eyebrow: "What we assemble",
  heading: "Four capabilities. One operating model.",
  intro:
    "Strategy, systems, digital products, and managed operations — connected so AI becomes working business infrastructure.",
  items: [
    {
      title: "AI Strategy & Readiness",
      line: "Know where AI should actually work — and where it shouldn't.",
      href: ROUTES.aiStrategy,
    },
    {
      title: "AI Agents & Systems",
      line: "Give AI a job: context, tools, action, verification, escalation.",
      href: ROUTES.aiAgents,
    },
    {
      title: "Automation & Digital Systems",
      line: "Automate work that shouldn't consume your best people; build the interfaces and integrations operations need.",
      href: ROUTES.automation,
    },
    {
      title: "Managed AI Operations",
      line: "Don't just deploy AI. Put it to work — measure, improve, run.",
      href: ROUTES.managedOperations,
    },
  ],
  cta: { label: "Explore solutions", href: ROUTES.aiAgents },
};

/**
 * Homepage offer strip — the four service lines shown as a linear card row.
 * Separate from CAPABILITIES so /solutions can keep the deeper pillar map.
 */
export const OFFER = {
  eyebrow: "What we offer",
  heading: "Four ways we work with you.",
  intro:
    "AI agents, digital services, business systems and operations — built around how your business already runs.",
  items: [
    {
      title: "AI Agents",
      badge: "Agents",
      line: "Custom AI agents that handle real business tasks, from customer support and lead follow-ups to research, documents and internal work.",
      href: ROUTES.aiAgents,
      iconSrc: "/offer/icons/ai-robot.png",
      iconAlt: "AI robot icon",
      iconTone: "native" as const,
      imageSrc: "/offer/ai-agents-v2.png?v=2",
    },
    {
      title: "Digital Services",
      badge: "Digital",
      line: "Websites, portals, applications, branding and SEO designed to help your business look better, work better and grow online.",
      href: ROUTES.digitalProducts,
      iconSrc: "/offer/icons/digital-monitor.png",
      iconAlt: "Digital services monitor icon",
      iconTone: "native" as const,
      imageSrc: "/offer/digital-services.png?v=2",
    },
    {
      title: "Business Systems",
      badge: "Systems",
      line: "Custom CRM, automation, dashboards and integrations that make everyday processes simpler and keep your business connected.",
      href: ROUTES.automation,
      iconSrc: "/offer/icons/business-systems.png",
      iconAlt: "Business systems gear and circuit icon",
      iconTone: "native" as const,
      imageSrc: "/offer/business-systems.png?v=2",
    },
    {
      title: "BPO & Operations",
      badge: "BPO",
      line: "Customer support, sales and back-office teams that work alongside your systems and AI.",
      href: ROUTES.managedOperations,
      iconSrc: "/offer/icons/call.png",
      iconAlt: "Customer support headset icon",
      imageSrc: "/offer/bpo-operations.png?v=2",
    },
  ],
};
export const BENEFITS = {
  eyebrow: "What you get",
  heading: "What changes once it is running.",
  intro:
    "The system gets judged on these, not on how impressive the demo looked.",
  items: [
    {
      title: "Time back",
      line: "Your best people stop doing the work a system should be doing.",
      icon: "clock" as const,
    },
    {
      title: "Lower cost to run",
      line: "Automate the repetitive layer instead of hiring around it.",
      icon: "wallet" as const,
    },
    {
      title: "Faster cycles",
      line: "Fewer handoffs between people and systems, so work actually moves.",
      icon: "zap" as const,
    },
    {
      title: "Consistent service",
      line: "The same standard of response on a Monday morning and a Friday night.",
      icon: "shield" as const,
    },
    {
      title: "Room to scale",
      line: "Take on more volume without rebuilding how you operate.",
      icon: "scale" as const,
    },
    {
      title: "Answers with your context",
      line: "Decisions that follow your rules and exceptions, not generic best practice.",
      icon: "brain" as const,
    },
  ],
};

export const METHOD = {
  eyebrow: "How we work",
  heading: "Diagnose. Engineer. Prove. Deliver.",
  intro: "A four-stage model for moving from idea to owned outcome.",
  stages: [
    {
      title: "Diagnose",
      line: "Assess where AI pays — and where it does not.",
      colorTheme: "blue" as const,
      icon: "search" as const,
    },
    {
      title: "Engineer",
      line: "Build with your context, rules and systems.",
      colorTheme: "ink" as const,
      icon: "wrench" as const,
    },
    {
      title: "Prove",
      line: "Test on your real work before you scale it.",
      colorTheme: "blue" as const,
      icon: "flask" as const,
    },
    {
      title: "Deliver",
      line: "Run it with us, or hand it to your team.",
      colorTheme: "ink" as const,
      icon: "rocket" as const,
    },
  ],
};

/** Connected chain after the offer cards — pieces become one system. */
export const ONE_SOLUTION = {
  eyebrow: "One solution",
  heading: "Your business doesn't work in separate pieces.",
  intro: "Neither should your solution.",
  steps: [
    {
      badgeText: "Surface",
      badgeColor: "#6B7CFF",
      title: "Website",
      description: "The front door where customers arrive and work begins.",
      ctaText: "See digital",
      ctaHref: ROUTES.digitalProducts,
      gradient: "mist" as const,
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=640&q=80",
    },
    {
      badgeText: "Intelligence",
      badgeColor: "#1539D1",
      title: "AI",
      description: "Agents that handle the work using your rules and context.",
      ctaText: "See agents",
      ctaHref: ROUTES.aiAgents,
      gradient: "blue" as const,
      imageUrl:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=640&q=80",
    },
    {
      badgeText: "System",
      badgeColor: "#8B9BB8",
      title: "CRM",
      description: "Customer truth stays connected — not trapped in a silo.",
      ctaText: "See systems",
      ctaHref: ROUTES.automation,
      gradient: "ink" as const,
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=640&q=80",
    },
    {
      badgeText: "Flow",
      badgeColor: "#1539D1",
      title: "Automation",
      description: "Handoffs between tools happen without chasing people.",
      ctaText: "See automation",
      ctaHref: ROUTES.automation,
      gradient: "blue" as const,
      imageUrl:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=640&q=80",
    },
    {
      badgeText: "Coverage",
      badgeColor: "#C24B32",
      title: "People / BPO",
      description: "Humans step in where judgment still needs a person.",
      ctaText: "See operations",
      ctaHref: ROUTES.managedOperations,
      gradient: "stamp" as const,
      imageUrl:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=640&q=80",
    },
    {
      badgeText: "Result",
      badgeColor: "#6B7CFF",
      title: "Outcome",
      description: "One connected chain. Less friction. Work that finishes.",
      ctaText: "Talk to us",
      ctaHref: ROUTES.contact,
      gradient: "mist" as const,
      imageUrl:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=640&q=80",
    },
  ],
};

export const INSTINCT = {
  eyebrow: "Flagship concept",
  heading: "AI without organisational instinct is just a clever stranger.",
  body: "Unwritten rules, precedent, authority, risk appetite, and relationships decide whether AI produces useful decisions — or generic responses.",
  cta: { label: "Explore Instinct", href: ROUTES.instinct },
};

export const ENGAGEMENT = {
  eyebrow: "Engagement models",
  heading: "Two ways to finish the work.",
  models: [
    {
      title: "Managed Outcome",
      path: "You → Spirality → Outcome",
      line: "We operate the process under agreed outcomes and keep improving it.",
    },
    {
      title: "Build & Transfer",
      path: "You → Spirality → Your team",
      line: "We design, prove, and transfer with controls, documentation, and training.",
    },
  ],
  link: { label: "Delivery detail on How We Work", href: ROUTES.deliver },
};

export const BIZDAPTIVE = {
  eyebrow: "Bizdaptive",
  heading: "AI knows your business differently.",
  body: "Bizdaptive connects the knowledge, decisions and context behind your organisation — creating a stronger foundation for people and AI to work together.",
  cards: [
    { title: "Knowledge", line: "What the organisation already knows." },
    { title: "Decisions", line: "Who decides, and on what basis." },
    { title: "Context", line: "Rules, precedent and risk appetite." },
  ],
  line: "AI questions. Humans decide. The system remembers.",
  cta: { label: "Explore Bizdaptive", href: ROUTES.bizdaptive },
};

export const DOMAINS = {
  eyebrow: "Where it shows up",
  heading: "Built for real operational work.",
  items: [
    {
      term: "Customer operations",
      line: "Triage, support, qualification with escalation.",
    },
    {
      term: "Finance operations",
      line: "Documents, checks, exceptions, approvals.",
    },
    {
      term: "Internal operations",
      line: "Orders, monitoring, cross-system coordination.",
    },
    {
      term: "Knowledge work",
      line: "Retrieval and reporting grounded in company memory.",
    },
  ],
};
