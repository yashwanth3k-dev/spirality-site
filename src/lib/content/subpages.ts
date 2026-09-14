/**
 * Marketing subpage copy — one source for Solutions / Product / Company pages.
 * Voice: concrete, constrained, no fake clients/metrics (PRODUCT.md).
 */

import { ROUTES } from "~/lib/content/home";
import { USE_CASES, type UseCase } from "~/lib/content/use-cases";

export type SubpageLink = { label: string; href: string };

export type SubpageSection =
  | {
      kind: "split";
      id?: string;
      eyebrow: string;
      heading: string;
      body: string;
      points?: Array<{ term: string; line: string }>;
    }
  | {
      kind: "list";
      id?: string;
      eyebrow: string;
      heading: string;
      intro?: string;
      items: Array<{ title: string; line: string; href?: string }>;
    }
  | {
      kind: "glowCards";
      id?: string;
      eyebrow: string;
      heading: string;
      intro?: string;
    }
  | {
      kind: "agentFlow";
      id?: string;
      eyebrow: string;
      heading: string;
      footer: string;
    }
  | {
      kind: "outcomeCards";
      id?: string;
      eyebrow: string;
      heading: string;
      bridge: string;
    }
  | {
      kind: "gapCards";
      id?: string;
      eyebrow: string;
      heading: string;
      body: string;
    }
  | {
      kind: "offerCards";
      id?: string;
      eyebrow: string;
      heading: string;
      iconSet?: "digital" | "systems" | "ops" | "opsEngage";
      items: Array<{ title: string; line: string; tags?: string }>;
    }
  | {
      kind: "principles";
      id?: string;
      eyebrow: string;
      heading: string;
      footer?: string;
      iconSet?: "digital" | "systems" | "ops";
      items: Array<{ title: string; line: string }>;
    }
  | {
      kind: "opsModel";
      id?: string;
      eyebrow: string;
      heading: string;
      footer?: string;
      items: Array<{ title: string; line: string }>;
    }
  | {
      kind: "systemsConnect";
      id?: string;
      eyebrow: string;
      heading: string;
      body: string;
      channels: Array<{ title: string; line: string }>;
    }
  | {
      kind: "systemsOutcomes";
      id?: string;
      eyebrow: string;
      heading: string;
      iconSet?: "systems" | "ops";
      items: Array<{ title: string; line: string }>;
    }
  | {
      kind: "agentUseCases";
      id?: string;
      eyebrow: string;
      heading: string;
      footer?: string;
      items: UseCase[];
    }
  | {
      kind: "deliverySteps";
      id?: string;
      eyebrow: string;
      heading: string;
      footer: string;
      steps: Array<{ title: string; line: string }>;
    }
  | {
      kind: "steps";
      id?: string;
      eyebrow: string;
      heading: string;
      intro?: string;
      steps: Array<{ title: string; line: string }>;
    }
  | {
      kind: "grid";
      id?: string;
      eyebrow: string;
      heading: string;
      intro?: string;
      items: Array<{ title: string; line: string; meta?: string }>;
    }
  | {
      kind: "articles";
      id?: string;
      eyebrow: string;
      heading: string;
      intro?: string;
      items: Array<{
        title: string;
        line: string;
        href: string;
        date: string;
        tag: string;
      }>;
    };

export type SubpageContent = {
  slug: string;
  path: string;
  navGroup: "Solutions" | "Resources" | "Company";
  eyebrow: string;
  title: string;
  lead: string;
  /** Optional line under the lead (e.g. hero punch line). */
  tagline?: string;
  /** Optional mono support line under the CTA (service span). */
  heroSupport?: string;
  /** Optional right-side hero visual (Lottie / media). */
  heroVisual?: "chatbot" | "website-design" | "kanban" | "headphone";
  /** Bidirectional scroll appear/disappear (BPO page). Footer stays static. */
  scrollReveal?: boolean;
  primaryCta?: SubpageLink;
  secondaryCta?: SubpageLink;
  sections: SubpageSection[];
  close?: {
    eyebrow: string;
    heading: string;
    body: string;
    note?: string;
    ctaLabel?: string;
  };
};

const sharedClose = {
  eyebrow: "Start here",
  heading: "Start with the work. Not the model.",
  body: "Tell us the process that costs time, judgment, or risk. We'll tell you whether this path fits — and how deep the engagement should go.",
};

const methodSteps = [
  {
    title: "Diagnose",
    line: "Map the work, the rules, the systems, and where judgment actually lives.",
  },
  {
    title: "Engineer",
    line: "Design the agent, workflow, product, or ops layer around that reality.",
  },
  {
    title: "Prove",
    line: "Run it on real cases until failure modes are visible and owned.",
  },
  {
    title: "Deliver",
    line: "Hand over with controls — or keep running it under agreed outcomes.",
  },
];

export const SOLUTION_PAGES: Record<string, SubpageContent> = {
  "ai-agents": {
    slug: "ai-agents",
    path: ROUTES.aiAgents,
    navGroup: "Solutions",
    eyebrow: "Solutions · AI Agents",
    title: "AI agents built around your business.",
    lead: "Custom AI agents that handle defined business work across your workflows, systems and teams — with the right level of automation and human control.",
    tagline: "Not another chatbot. A working AI system built for the job.",
    heroVisual: "chatbot",
    primaryCta: { label: "Talk to Us", href: ROUTES.contact },
    sections: [
      {
        kind: "glowCards",
        eyebrow: "What we build",
        heading: "Give the work to the right agent.",
      },
      {
        kind: "agentFlow",
        eyebrow: "How we make an agent work",
        heading: "AI is only useful when it knows what to do.",
        footer:
          "We design every agent around the work, the systems it needs, the decisions it can make and the points where your team stays in control.",
      },
      {
        kind: "outcomeCards",
        eyebrow: "What changes for your business",
        heading: "The goal isn't more AI. It's better work.",
        bridge: "Start with one process. Expand when it works.",
      },
    ],
    close: {
      eyebrow: "Start here",
      heading: "Have a business process worth giving to an agent?",
      body: "Tell us what the work looks like today. We'll help you determine what AI can handle, what your team should handle, and what it would take to put it into production.",
      note: "No technical explanation required. Start with the work.",
      ctaLabel: "Build an AI Agent",
    },
  },

  "digital-products": {
    slug: "digital-products",
    path: ROUTES.digitalProducts,
    navGroup: "Solutions",
    eyebrow: "Solutions · Digital Services",
    title: "Your digital presence should do more than look good.",
    lead: "We design and build websites, portals, applications and digital experiences that help your business get noticed, earn trust and make it easier for people to take action.",
    tagline:
      "From brand identity to digital products — built around your business.",
    heroSupport:
      "Websites · Portals · Applications · Branding · SEO · Digital Growth",
    heroVisual: "website-design",
    primaryCta: { label: "Start a Project", href: ROUTES.contact },
    sections: [
      {
        kind: "offerCards",
        eyebrow: "What we build",
        heading:
          "Everything your business needs to show up, work and grow online.",
        items: [
          {
            title: "Websites & Web Experiences",
            line: "Business websites, landing pages and modern web experiences designed around your customers and goals.",
            tags: "Corporate · Service · E-commerce · Landing Pages",
          },
          {
            title: "Portals & Digital Platforms",
            line: "Customer portals, employee portals, booking systems, dashboards and web applications that make business processes easier.",
            tags: "Customer · Internal · Partner · Self-service",
          },
          {
            title: "Branding & Digital Identity",
            line: "Logo design, visual identity, UI/UX and brand systems that give your business a clear and consistent presence.",
            tags: "Logo · Brand Identity · UI/UX · Design Systems",
          },
          {
            title: "SEO & Digital Growth",
            line: "SEO, content and digital marketing designed to help people — and modern search experiences — find your business.",
            tags: "SEO · Content · Local Search · AI Search Visibility",
          },
        ],
      },
      {
        kind: "principles",
        eyebrow: "The difference",
        heading: "Built for how people use the web now.",
        items: [
          {
            title: "AI-Ready Discovery",
            line: "Your website isn't only competing for classic rankings. We structure content so it can be understood across modern search and AI-driven discovery — without abandoning SEO fundamentals.",
          },
          {
            title: "Fast by Default",
            line: "Performance is part of the experience — not something added after launch. We build with modern web standards and speed in mind from the start.",
          },
          {
            title: "Designed for Every Screen",
            line: "Mobile-first layouts, responsive interfaces and experiences that work naturally across devices — not a desktop design squeezed down later.",
          },
          {
            title: "Accessible & Usable",
            line: "Clear navigation, readable interfaces, sensible interactions and accessibility built into the experience rather than treated as an afterthought.",
          },
          {
            title: "Ready to Evolve",
            line: "We favour modern, maintainable architectures so your website or digital product doesn't become something you have to rebuild every couple of years.",
          },
        ],
      },
      {
        kind: "deliverySteps",
        eyebrow: "How we deliver",
        heading: "From first idea to something people can use.",
        footer:
          "Need only a website? We can build it. Need a complete digital system? We can build that too.",
        steps: [
          {
            title: "Understand",
            line: "We learn about your business, audience, goals and what needs to work better.",
          },
          {
            title: "Design",
            line: "We shape the brand, experience, structure and user journey before building.",
          },
          {
            title: "Build",
            line: "We develop the website, portal, application or digital system and connect what it needs.",
          },
          {
            title: "Launch & Grow",
            line: "We launch, measure, optimise and support the digital experience as your business evolves.",
          },
        ],
      },
    ],
    close: {
      eyebrow: "Start here",
      heading: "Have something digital you want to build?",
      body: "Whether you need a new website, a customer portal, a new brand or a stronger digital presence, tell us what you're trying to achieve.",
      note: "Start with what you need. We'll help shape what comes next.",
      ctaLabel: "Talk to Us",
    },
  },

  automation: {
    slug: "automation",
    path: ROUTES.automation,
    navGroup: "Solutions",
    eyebrow: "Solutions · Business Systems",
    title: "Business systems built for the way work happens now.",
    lead: "Custom CRM, workflows, automation and AI-native systems that connect your people, data, conversations and business processes in one place.",
    tagline:
      "Built around your business. Connected to the tools you already use. Ready for AI.",
    heroVisual: "kanban",
    primaryCta: { label: "Build Your System", href: ROUTES.contact },
    sections: [
      {
        kind: "offerCards",
        eyebrow: "What we build",
        heading: "The systems behind your everyday work.",
        iconSet: "systems",
        items: [
          {
            title: "AI-Native CRM",
            line: "A CRM built around your process — with AI built into the workflow, not added as an afterthought. Manage leads, customers, conversations, follow-ups and team activity from one system.",
            tags: "Leads · Customers · Conversations · Follow-ups · Team Activity",
          },
          {
            title: "Workflow & Automation",
            line: "Connect your processes and automate the steps that slow your team down.",
            tags: "Approvals · Routing · Notifications · Follow-ups · Task Automation",
          },
          {
            title: "Business Dashboards",
            line: "Bring important business information into one clear view. Track sales, customers, operations, team activity and performance without digging through multiple systems.",
            tags: "Sales · Customers · Operations · Performance · Live Views",
          },
          {
            title: "Custom Business Applications",
            line: "Build the internal tools, portals and applications your business needs when standard software doesn't fit.",
            tags: "Custom workflows · Portals · Internal tools · Self-service",
          },
        ],
      },
      {
        kind: "systemsConnect",
        eyebrow: "Connect everything",
        heading:
          "Your customers can reach you anywhere. Your system shouldn't lose the conversation.",
        body: "Business systems shouldn't stop at a web dashboard. We connect your systems with the channels and tools your customers and teams already use.",
        channels: [
          {
            title: "WhatsApp",
            line: "Connect customer conversations, enquiries, notifications and workflows.",
          },
          {
            title: "Voice",
            line: "Connect voice interactions and voice-enabled AI experiences to your business processes.",
          },
          {
            title: "Website & Chat",
            line: "Bring website conversations and chat interactions into the same workflow.",
          },
          {
            title: "Email",
            line: "Connect incoming requests, follow-ups and notifications to your processes.",
          },
          {
            title: "CRM & Business Tools",
            line: "Connect your CRM, databases, accounting systems, helpdesk and other business applications.",
          },
          {
            title: "APIs & Integrations",
            line: "Connect the systems you already have instead of rebuilding everything from scratch.",
          },
        ],
      },
      {
        kind: "principles",
        eyebrow: "AI-native by design",
        heading:
          "AI shouldn't sit beside your system. It should work through it.",
        footer:
          "Your systems become the place where people, automation and AI work together.",
        iconSet: "systems",
        items: [
          {
            title: "AI-enabled CRM",
            line: "Let AI help with customer information, summaries, follow-ups and workflow tasks.",
          },
          {
            title: "Chat & Voice",
            line: "Connect conversational experiences to your business processes and approved information.",
          },
          {
            title: "AI + Automation",
            line: "Use AI for work that requires understanding, and automation for work that follows clear rules.",
          },
          {
            title: "Human Control",
            line: "Keep approvals, permissions and important decisions with the people responsible for them.",
          },
        ],
      },
      {
        kind: "systemsOutcomes",
        eyebrow: "What changes",
        heading: "Less switching. Less chasing. More work getting done.",
        items: [
          {
            title: "One connected view",
            line: "Bring information from different systems into the workflows where it is needed.",
          },
          {
            title: "Fewer manual steps",
            line: "Automate repetitive coordination, updates and follow-ups.",
          },
          {
            title: "Better customer conversations",
            line: "Connect WhatsApp, voice, chat, email and other channels to the same business process.",
          },
          {
            title: "Ready for what's next",
            line: "Build a system that can adopt new AI capabilities without rebuilding the business around every new technology.",
          },
        ],
      },
    ],
    close: {
      eyebrow: "Start here",
      heading: "Have a system that could work better?",
      body: "Tell us where your team is losing time, information or visibility.",
      ctaLabel: "Talk to Us",
    },
  },

  "managed-operations": {
    slug: "managed-operations",
    path: ROUTES.managedOperations,
    navGroup: "Solutions",
    eyebrow: "Solutions · BPO & Operations",
    title: "People, process and technology working together.",
    lead: "We provide customer support, back-office and operational teams that can work alongside your systems and AI — helping you handle more work without simply adding more complexity.",
    tagline: "Human-led. AI-enabled. Built around your operation.",
    heroVisual: "headphone",
    scrollReveal: true,
    primaryCta: { label: "Talk to Us", href: ROUTES.contact },
    sections: [
      {
        kind: "offerCards",
        eyebrow: "What we handle",
        heading: "Take the work off your team's plate.",
        iconSet: "ops",
        items: [
          {
            title: "Customer Operations",
            line: "Handle customer requests, support, enquiries and day-to-day service work.",
            tags: "Support · Ticket handling · Customer updates · Escalation",
          },
          {
            title: "Sales Operations",
            line: "Keep lead and sales processes moving with research, qualification, follow-ups and CRM administration.",
            tags: "Lead management · Research · Qualification · Follow-up",
          },
          {
            title: "Back-Office Operations",
            line: "Handle repetitive administrative work that takes time away from your core team.",
            tags: "Data processing · Documentation · Verification · Administration",
          },
          {
            title: "Business Process Support",
            line: "Support the processes that keep your business running every day.",
            tags: "Order processing · Coordination · Scheduling · Monitoring",
          },
        ],
      },
      {
        kind: "opsModel",
        eyebrow: "The modern BPO",
        heading: "BPO doesn't have to mean more people doing more manual work.",
        footer:
          "We don't just give you a team. We improve how the work gets done.",
        items: [
          {
            title: "People",
            line: "Handle conversations, judgement, exceptions and work that needs human understanding.",
          },
          {
            title: "Automation",
            line: "Remove repetitive steps and unnecessary handoffs.",
          },
          {
            title: "AI",
            line: "Assist teams with research, classification, information retrieval, summarisation and defined operational tasks.",
          },
          {
            title: "Systems",
            line: "Keep the work connected to your CRM, business applications and workflows.",
          },
        ],
      },
      {
        kind: "offerCards",
        eyebrow: "How we work with your business",
        heading: "You choose what you want us to take care of.",
        iconSet: "opsEngage",
        items: [
          {
            title: "Fully Managed",
            line: "We take responsibility for an agreed operational process and manage the day-to-day work.",
          },
          {
            title: "Team Extension",
            line: "We provide trained operational resources that work alongside your existing team.",
          },
          {
            title: "AI-Enabled Operations",
            line: "We combine people, automation and AI to improve the way the process is delivered.",
          },
          {
            title: "Scale When Needed",
            line: "Increase or reduce operational capacity as your workload changes.",
          },
        ],
      },
      {
        kind: "systemsOutcomes",
        eyebrow: "What you get",
        heading: "More capacity without losing control.",
        iconSet: "ops",
        items: [
          {
            title: "Consistent execution",
            line: "Clear processes and defined responsibilities keep work moving.",
          },
          {
            title: "Faster response",
            line: "Dedicated operational capacity helps reduce waiting and backlogs.",
          },
          {
            title: "Flexible capacity",
            line: "Scale support as business volume changes.",
          },
          {
            title: "Better visibility",
            line: "Track the work, performance and issues that matter.",
          },
          {
            title: "Continuous improvement",
            line: "Use data, automation and AI to improve the process over time.",
          },
          {
            title: "Your standards",
            line: "We work within your processes, quality requirements and escalation rules.",
          },
        ],
      },
    ],
    close: {
      eyebrow: "Start here",
      heading: "Have work your team shouldn't be spending all day on?",
      body: "Tell us what needs to be handled. We'll help you determine what should stay with your team, what can be outsourced, and where AI or automation can make the operation better.",
      note: "People when people matter. Technology where it helps.",
      ctaLabel: "Talk to Us",
    },
  },

  "ai-strategy": {
    slug: "ai-strategy",
    path: ROUTES.aiStrategy,
    navGroup: "Solutions",
    eyebrow: "Solutions · AI Strategy",
    title: "Know where AI should work — and where it shouldn't.",
    lead: "Readiness, opportunity mapping, and a constrained roadmap. Clarity before build so you don't fund a pilot that can't survive contact with operations.",
    primaryCta: { label: "Talk to Us", href: ROUTES.contact },
    secondaryCta: { label: "Talk to Us", href: ROUTES.contact },
    sections: [
      {
        kind: "split",
        eyebrow: "The gap",
        heading: "Strategy without delivery depth is a slide.",
        body: "We assess process pain, data and system readiness, risk, and ownership — then recommend consulting, build, or managed run. Saying no is part of the job.",
        points: [
          {
            term: "Opportunity map",
            line: "Ranked workstreams with effort, risk, and dependency notes.",
          },
          {
            term: "Readiness check",
            line: "Data, tools, policy, and who will own failure modes.",
          },
          {
            term: "Engagement ladder",
            line: "Advise only, advise + build, or advise + build + aftercare.",
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "How we work",
        heading: "Diagnose before you buy more tools.",
        steps: methodSteps,
      },
    ],
    close: sharedClose,
  },
};

export const PRODUCT_PAGES: Record<string, SubpageContent> = {};

export const COMPANY_PAGES: Record<string, SubpageContent> = {
  about: {
    slug: "about",
    path: ROUTES.about,
    navGroup: "Company",
    eyebrow: "Company · About Us",
    title: "Technology should fit the business. Not the other way around.",
    lead: "Spirality Solutions builds AI, digital and business systems around how organisations actually work, from the processes they run to the people who depend on them.",
    primaryCta: { label: "Talk to Us", href: ROUTES.contact },
    secondaryCta: { label: "AI Agents", href: ROUTES.aiAgents },
    sections: [
      {
        kind: "split",
        eyebrow: "Who we are",
        heading: "A delivery partner for work that has to keep running.",
        body: "Buyers come to us in three postures: consulting alone, consulting plus build, or consulting plus build plus aftercare. We say which one fits — and refuse the ones that don't.",
        points: [
          {
            term: "Consulting",
            line: "Assessment, clarity, roadmap — should we, or shouldn't we.",
          },
          {
            term: "Consulting + solution",
            line: "The above, plus designed and built systems, agents, and integrations.",
          },
          {
            term: "Consulting + solution + aftercare",
            line: "The above, plus ongoing support and maintenance — servers included.",
          },
        ],
      },
      {
        kind: "list",
        eyebrow: "What we refuse",
        heading: "Constraint is the brand.",
        items: [
          {
            title: "Not a chatbot shop",
            line: "We don't paste a widget and call it transformation.",
          },
          {
            title: "Not automation theater",
            line: "No template agency page that ignores your exceptions.",
          },
          {
            title: "Not model worship",
            line: "AI is a means. The product is owned operational outcome.",
          },
          {
            title: "Not fabricated proof",
            line: "No invented logos, ROI, or case metrics on this site.",
          },
        ],
      },
    ],
    close: sharedClose,
  },

  "use-cases": {
    slug: "use-cases",
    path: ROUTES.useCases,
    navGroup: "Resources",
    eyebrow: "Resources · Use Cases",
    title: "Start with the work. Not the AI.",
    lead: "Explore real business processes where AI can reduce manual effort, connect workflows and help your team get more done.",
    primaryCta: { label: "Talk to Us", href: ROUTES.contact },
    secondaryCta: { label: "See AI Agents", href: ROUTES.aiAgents },
    sections: [
      {
        kind: "agentUseCases",
        eyebrow: "Examples",
        heading: "Work AI can take on.",
        footer: "Don’t see your process? We can still build around it.",
        items: USE_CASES,
      },
    ],
    close: sharedClose,
  },

  "case-studies": {
    slug: "case-studies",
    path: ROUTES.caseStudies,
    navGroup: "Resources",
    eyebrow: "Resources · Case Studies",
    title: "Built for the real world.",
    lead: "See how we approach real business problems, what we build around them, and how the work takes shape.",
    primaryCta: { label: "Talk to Us", href: ROUTES.contact },
    secondaryCta: { label: "Use cases", href: ROUTES.useCases },
    sections: [
      {
        kind: "split",
        eyebrow: "Honesty rule",
        heading: "Empty is better than fake.",
        body: "When a study ships, it will name only what we're allowed to name — and stick to process, constraints, and outcomes we can stand behind. No vanity metrics.",
        points: [
          {
            term: "Situation",
            line: "The operating pain and constraints at the start.",
          },
          {
            term: "Build",
            line: "What we assembled — agents, systems, desks, or product surface.",
          },
          {
            term: "Outcome",
            line: "What changed in the work, with caveats intact.",
          },
        ],
      },
      {
        kind: "grid",
        eyebrow: "Pipeline",
        heading: "Slots reserved for cleared work.",
        intro:
          "These cards are structure, not placeholders for invented stories.",
        items: [
          {
            title: "Study 01",
            line: "Publishes when a client engagement is cleared for public detail.",
            meta: "Upcoming",
          },
          {
            title: "Study 02",
            line: "Same bar — process, build, outcome, no theater.",
            meta: "Upcoming",
          },
          {
            title: "Study 03",
            line: "Until then, use Cases and Solutions to evaluate fit.",
            meta: "Upcoming",
          },
        ],
      },
      {
        kind: "list",
        eyebrow: "Meanwhile",
        heading: "Ways to evaluate us without a logo wall.",
        items: [
          {
            title: "Use case patterns",
            line: "See if your pain matches how we scope work.",
          },
          {
            title: "Solution pages",
            line: "Read constraints and fit checks for each line.",
          },
          {
            title: "A diagnostic conversation",
            line: "Bring one process. Leave with a clearer yes, no, or not yet.",
          },
        ],
      },
    ],
    close: sharedClose,
  },

  blog: {
    slug: "blog",
    path: ROUTES.blog,
    navGroup: "Resources",
    eyebrow: "Resources · Insights",
    title: "Think beyond the technology.",
    lead: "Practical ideas on AI, business systems, digital products and the changing way businesses work.",
    primaryCta: { label: "Talk to Us", href: ROUTES.contact },
    secondaryCta: { label: "Use cases", href: ROUTES.useCases },
    sections: [
      {
        kind: "articles",
        eyebrow: "First cluster",
        heading: "Notes",
        intro: "One cluster: how to buy and run AI that has to survive a desk.",
        items: [
          {
            title: "Start with the work. Not the AI.",
            line: "Name the process before you name the model.",
            href: "/blog/start-with-the-work",
            date: "2026-08-20",
            tag: "Buying",
          },
          {
            title: "Bring one process to the first conversation",
            line: "What a diagnostic actually needs from you.",
            href: "/blog/bring-one-process",
            date: "2026-06-11",
            tag: "Buying",
          },
          {
            title: "Demos aren't desks",
            line: "Why impressive agent demos collapse under exceptions — and what to demand before you buy.",
            href: "/blog/demos-arent-desks",
            date: "2026-03-12",
            tag: "Agents",
          },
          {
            title: "The aftercare question",
            line: "Advise, build, or build-and-run: how to choose engagement depth without buying theater.",
            href: "/blog/the-aftercare-question",
            date: "2026-02-18",
            tag: "Delivery",
          },
          {
            title: "Organisational memory beats another model",
            line: "Context, decisions, and continuity — the unglamorous layer that makes AI useful at work.",
            href: "/blog/organisational-memory",
            date: "2026-01-22",
            tag: "Context",
          },
        ],
      },
    ],
    close: {
      eyebrow: "Write with us",
      heading: "Have a process worth dissecting?",
      body: "If you're stuck between a demo and a real desk, tell us about it — it might become the next note, or a working engagement.",
    },
  },
};

export function getSolutionPage(slug: string): SubpageContent | undefined {
  return SOLUTION_PAGES[slug];
}

export function getCompanyPage(slug: string): SubpageContent | undefined {
  return COMPANY_PAGES[slug];
}
