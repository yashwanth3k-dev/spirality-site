import { ROUTES } from "~/lib/content/home";

export type BlogCategory = "buying" | "agents" | "delivery" | "context";

export type BlogGlyph =
  | "clipboard"
  | "folder"
  | "bot"
  | "server"
  | "library"
  | "layers"
  | "calendar"
  | "clock"
  | "flag"
  | "search";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; title: string; text: string };

export type BlogPost = {
  slug: string;
  pattern: string;
  title: string;
  date: string;
  category: BlogCategory;
  icon: BlogGlyph;
  image: string;
  imageAlt: string;
  /** Search-facing title; shown in <title> and social cards. */
  seoTitle: string;
  lead: string;
  description: string;
  body: BlogBlock[];
  related: string[];
  relatedWork: Array<{ label: string; href: string }>;
};

export const BLOG_CATEGORY_LABEL: Record<BlogCategory, string> = {
  buying: "Buying",
  agents: "Agents",
  delivery: "Delivery",
  context: "Context",
};

export const BLOG_CATEGORY_ICON: Record<BlogCategory, BlogGlyph> = {
  buying: "clipboard",
  agents: "bot",
  delivery: "server",
  context: "library",
};

export const BLOG_FILTER_ICON: Record<"all" | BlogCategory, BlogGlyph> = {
  all: "layers",
  buying: "clipboard",
  agents: "bot",
  delivery: "server",
  context: "library",
};

export const BLOG_FILTERS: Array<{ id: "all" | BlogCategory; label: string }> =
  [
    { id: "all", label: "All notes" },
    { id: "buying", label: "Buying" },
    { id: "agents", label: "Agents" },
    { id: "delivery", label: "Delivery" },
    { id: "context", label: "Context" },
  ];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "start-with-the-work",
    pattern: "05",
    title: "Start with the work. Not the AI.",
    date: "2026-08-20",
    category: "buying",
    icon: "search",
    image: "/blog/start-with-the-work-v2.png",
    imageAlt:
      "A navy office at night: one process folder pulled forward on a desk of documents.",
    seoTitle: "Start With the Work, Not the AI",
    lead: "The useful first question is not which model to buy. It is which process still depends on memory, retyping, and whoever happens to be at the desk.",
    description:
      "How to start an AI project from a real business process — not a model shortlist — and how Spirality scopes consulting, build, or aftercare from that process.",
    related: [
      "bring-one-process",
      "demos-arent-desks",
      "the-aftercare-question",
    ],
    relatedWork: [
      { label: "Use cases", href: ROUTES.useCases },
      { label: "AI Strategy", href: ROUTES.aiStrategy },
      { label: "How we work", href: ROUTES.howWeWork },
    ],
    body: [
      {
        type: "p",
        text: "Most AI conversations start in the wrong place. A vendor names a model. A slide names a transformation. The room nods. Nobody has named the job that already hurts on a Tuesday.",
      },
      {
        type: "p",
        text: "Spirality starts the other way around. We assemble AI around the business — which means the process comes first, and the model is a part, not the product. If you cannot point at the work, you are not buying a system. You are buying a demo with a kickoff date.",
      },
      {
        type: "h2",
        text: "Name the process before you name the tool",
      },
      {
        type: "p",
        text: "A process you can name has inputs, exceptions, write-backs, and a person who currently owns the failure. Invoices that do not match. Leads that die in a spreadsheet. Support replies that are the same eight answers, copied by hand. That is the map. Tools come after the map.",
      },
      {
        type: "p",
        text: "If the pain is “we need AI,” pause. Ask which queue, which document, which follow-up. [Use-case patterns](/use-cases) exist so a buyer can recognise their own work without a glossary. If none of them fit, the work can still be in scope — it just has not been written up yet.",
      },
      {
        type: "h2",
        text: "Three depths. One honest choice.",
      },
      {
        type: "p",
        text: "Once the process is named, depth is the next decision. Not the model. Depth is whether you need clarity, a built system, or someone to keep the system alive.",
      },
      {
        type: "ul",
        items: [
          "Consulting alone — figure out what to do, and what not to do.",
          "Consulting plus a build — design and put the system in.",
          "Consulting, build, and aftercare — keep running it: support, servers, monitoring, the unglamorous part.",
        ],
      },
      {
        type: "p",
        text: "The wrong depth wastes more money than the wrong model. [The aftercare question](/blog/the-aftercare-question) is how we talk about that without turning it into an upsell script.",
      },
      {
        type: "h2",
        text: "What “good” looks like without invented numbers",
      },
      {
        type: "p",
        text: "We will not promise a percentage. We will not invent a case study metric to make a page feel finished. Good looks like this: the process is clearer, the exceptions have an owner, and the system writes back to tools you already use. People still decide the hard bits.",
      },
      {
        type: "callout",
        title: "What this is not",
        text: "This is not a chatbot shop, an automation-agency template, or a weekly roundup of models. If a note cannot point at a desk, we should not publish it.",
      },
      {
        type: "h2",
        text: "How to use this cluster",
      },
      {
        type: "p",
        text: "Read [what to bring to the first conversation](/blog/bring-one-process) if you want a practical brief. Read [why demos fail at a desk](/blog/demos-arent-desks) if you are being sold an agent. Read [organisational memory](/blog/organisational-memory) if every new tool in your company starts from zero.",
      },
      {
        type: "p",
        text: "Then talk to us about one process. Not a transformation programme. One process.",
      },
    ],
  },
  {
    slug: "bring-one-process",
    pattern: "04",
    title: "Bring one process to the first conversation",
    date: "2026-06-11",
    category: "buying",
    icon: "folder",
    image: "/blog/bring-one-process-v2.png",
    imageAlt:
      "An empty meeting table at night with one folder in the middle — bring a single process.",
    seoTitle: "What to Bring to an AI Diagnostic",
    lead: "A useful first call is not a tour of models. It is one process, the depth you think you need, and an honest list of what you do not know yet.",
    description:
      "What to bring to a first conversation with an AI systems partner: one named process, engagement depth, and the questions that should be answered before anyone builds.",
    related: [
      "start-with-the-work",
      "the-aftercare-question",
      "demos-arent-desks",
    ],
    relatedWork: [
      { label: "Talk to Us", href: ROUTES.contact },
      { label: "How we work", href: ROUTES.howWeWork },
      { label: "Use cases", href: ROUTES.useCases },
    ],
    body: [
      {
        type: "p",
        text: "Buyers often arrive with a stack of tools and a sentence like “we want to implement AI.” That sentence cannot be scoped. A process can.",
      },
      {
        type: "p",
        text: "The first conversation is a diagnostic, not a pitch. You should leave knowing whether the work is ready, what depth fits, and what we refuse to pretend. You should not leave with a model shortlist and a vague “phase two.”",
      },
      {
        type: "h2",
        text: "What to bring",
      },
      {
        type: "ul",
        items: [
          "One process that already costs time, judgement, or risk — invoices, leads, tickets, documents, a portal nobody uses.",
          "Who owns it today, including the person who currently catches the exceptions.",
          "The tools it already lives in. CRM, email, files, a spreadsheet that is pretending to be a system.",
          "The depth you think you need: advice only, advice plus a build, or build plus someone to run it.",
        ],
      },
      {
        type: "p",
        text: "You do not need a brief deck. You do need to be able to walk through a real example — one messy case, not the happy path.",
      },
      {
        type: "h2",
        text: "What you should leave with",
      },
      {
        type: "p",
        text: "A clearer yes, no, or not yet. If it is a yes, you should know the first slice of work and whether people stay in the loop. If it is a not yet, you should know what is missing: ownership, data, or simply a process that is still too undefined to automate.",
      },
      {
        type: "p",
        text: "If the honest answer is consulting only, we will say that. Building on a foggy process is how orphaned pilots get made.",
      },
      {
        type: "h2",
        text: "What we will not do on a first call",
      },
      {
        type: "ul",
        items: [
          "Quote a saving we have not measured.",
          "Name a client we have not been asked to name.",
          "Promise that an agent will “handle it” without an escalation path.",
          "Start with a chatbot because that is what the category expects.",
        ],
      },
      {
        type: "callout",
        title: "A simple test",
        text: "If you cannot describe the process in a paragraph, you are not ready to buy a system for it. You may still be ready for a diagnostic. That is a different, smaller engagement — and often the right one.",
      },
      {
        type: "h2",
        text: "If you want a picture first",
      },
      {
        type: "p",
        text: "Skim [the use cases](/use-cases). If one of them is close, bring that. If none of them are close, bring the actual job anyway. Patterns are examples, not a menu you have to order from.",
      },
      {
        type: "p",
        text: "Then [talk to us](/contact). One process. The depth you think you need. We will tell you if we agree.",
      },
    ],
  },
  {
    slug: "demos-arent-desks",
    pattern: "03",
    title: "Demos aren't desks",
    date: "2026-03-12",
    category: "agents",
    icon: "bot",
    image: "/blog/demos-arent-desks-v2.png",
    imageAlt:
      "A messy real desk in the foreground, a clean unused meeting room behind glass.",
    seoTitle: "Demos Aren't Desks: How to Judge an AI Agent",
    lead: "An agent that dazzles in a slide deck still has to survive your exceptions, approvals, and Tuesday afternoon volume.",
    description:
      "Why AI agent demos collapse in real operations, and what to demand — inputs, write-backs, escalation, and ownership — before you buy.",
    related: [
      "start-with-the-work",
      "the-aftercare-question",
      "organisational-memory",
    ],
    relatedWork: [
      { label: "AI Agents", href: ROUTES.aiAgents },
      { label: "Customer Support", href: "/use-cases/customer-support" },
      { label: "Sales Leads", href: "/use-cases/sales-lead-management" },
    ],
    body: [
      {
        type: "p",
        text: "Most AI buying starts with a demo. The model answers a clean question. The room nods. Someone asks about timeline. Nobody asks who owns the failure when the agent is wrong with confidence.",
      },
      {
        type: "p",
        text: "Desks are different. They have tone rules, refunds that need a human, CRM fields that lie, and three tools that disagree about the customer. An agent that cannot escalate cleanly is not autonomy. It is a new ticket source.",
      },
      {
        type: "h2",
        text: "What the demo hides",
      },
      {
        type: "p",
        text: "Demos are trained on the happy path. Real work is the exception path: the customer who already complained twice, the invoice that almost matches, the lead that looks qualified until you open the notes. If the vendor cannot talk about those without changing the subject to model names, you are still in demo land.",
      },
      {
        type: "p",
        text: "A desk also has volume. One clever reply is not a queue. Ask what happens at 4pm when the same eight questions arrive at once, and what happens when the approved answer is missing.",
      },
      {
        type: "h2",
        text: "Demand a map of the job",
      },
      {
        type: "p",
        text: "Before you buy, ask for a map — not a feature list. The map is boring on purpose:",
      },
      {
        type: "ul",
        items: [
          "What comes in, and from where.",
          "What the system is allowed to read.",
          "What it is allowed to write back — and to which tool.",
          "When a person has to take over, and what they get besides a blank ticket.",
          "How you will know the work actually got done.",
        ],
      },
      {
        type: "p",
        text: "If that map cannot be drawn on one page, the agent is not ready for a desk. [Customer support](/use-cases/customer-support) and [sales leads](/use-cases/sales-lead-management) are two versions of that map we already write down.",
      },
      {
        type: "h2",
        text: "Escalation is the product",
      },
      {
        type: "p",
        text: "The interesting part of an agent is not the reply. It is the brake. Who can approve a refund. What must never be sent. What gets logged. People stay in the work for judgement; the system should arrive with the history attached.",
      },
      {
        type: "callout",
        title: "A buying test",
        text: "Ask the vendor to walk a real exception, out loud, without slides. If they need to “take that offline,” you learned the only thing that mattered.",
      },
      {
        type: "h2",
        text: "What we build instead",
      },
      {
        type: "p",
        text: "Spirality builds agents for desks. Context first, brakes on actions, and someone still answering when the system misbehaves. Impressive is optional. Owned is not. If aftercare is part of the job, say so early — that is [a depth decision](/blog/the-aftercare-question), not a go-live surprise.",
      },
    ],
  },
  {
    slug: "the-aftercare-question",
    pattern: "02",
    title: "The aftercare question",
    date: "2026-02-18",
    category: "delivery",
    icon: "server",
    image: "/blog/the-aftercare-question-v2.png",
    imageAlt:
      "An empty operations room at night — monitoring screens still on after the build.",
    seoTitle: "Consulting, Build, or Aftercare?",
    lead: "Consulting, build, or build-and-run — the wrong depth wastes more money than the wrong model.",
    description:
      "How to choose between AI consulting, a built system, and managed aftercare — including servers, monitoring, and the work that continues after go-live.",
    related: ["bring-one-process", "start-with-the-work", "demos-arent-desks"],
    relatedWork: [
      { label: "Managed operations", href: ROUTES.managedOperations },
      { label: "How we work", href: ROUTES.howWeWork },
      { label: "Business systems", href: ROUTES.automation },
    ],
    body: [
      {
        type: "p",
        text: "Buyers often ask for “an AI project.” What they need is a depth decision: clarity only, clarity plus a system, or a system someone will keep alive.",
      },
      {
        type: "p",
        text: "We ask this early because it changes the work. A roadmap is not a deployment. A deployment is not a Tuesday when the integration stops writing back to the CRM.",
      },
      {
        type: "h2",
        text: "When consulting is enough",
      },
      {
        type: "p",
        text: "Consulting alone is right when the organisation still does not know where AI pays — or where it should not. The output is a clearer yes, no, or not yet. It is also right when the process is too undefined to automate, and building now would only freeze the confusion.",
      },
      {
        type: "p",
        text: "If you want a first-call shape for that, read [bring one process](/blog/bring-one-process).",
      },
      {
        type: "h2",
        text: "When a build is enough",
      },
      {
        type: "p",
        text: "Build is right when the process is clear, ownership exists, and your team can absorb the system. That includes the boring parts: who watches exceptions, who updates the approved answers, who gets the alert when a write-back fails.",
      },
      {
        type: "p",
        text: "Build-and-transfer is a real finish. We design, prove, hand over with controls and training, and step back. It only works if the desk on the other side of the handoff is actually staffed for that.",
      },
      {
        type: "h2",
        text: "When someone has to stay",
      },
      {
        type: "p",
        text: "Aftercare is right when the desk cannot absorb another orphaned integration. Servers, prompts, monitoring, and exception review are part of the product. If nobody will own those, a pilot is a liability with a launch date.",
      },
      {
        type: "p",
        text: "This is not a luxury upsell. It is the admission that software keeps needing a person. [Managed operations](/solutions/managed-operations) is that line of work: we run under agreed outcomes, including the unglamorous part where someone still answers when the server misbehaves.",
      },
      {
        type: "callout",
        title: "We will recommend a shallower engagement",
        text: "If the honest answer is “not yet” or “advice only,” we will say so. Selling a run-and-maintain contract onto a process that is still fog is how trust gets spent.",
      },
      {
        type: "h2",
        text: "How we work, in four verbs",
      },
      {
        type: "p",
        text: "Diagnose, engineer, prove, deliver. Aftercare sits in deliver — and only when you asked for it. See [how we work](/how-we-work) for the sequence, then decide the depth before you decide the stack.",
      },
    ],
  },
  {
    slug: "organisational-memory",
    pattern: "01",
    title: "Organisational memory beats another model",
    date: "2026-01-22",
    category: "context",
    icon: "library",
    image: "/blog/organisational-memory-v2.png",
    imageAlt:
      "A quiet wall of binders at night — the organisation’s memory, not another model.",
    seoTitle: "Organisational Memory Beats Another Model",
    lead: "Swapping models is easy. Teaching the organisation to remember how it works is the hard part.",
    description:
      "Why business context, decisions, and continuity matter more than swapping AI models — and how organisational memory makes agents usable at work.",
    related: [
      "start-with-the-work",
      "demos-arent-desks",
      "the-aftercare-question",
    ],
    relatedWork: [
      { label: "Instinct", href: ROUTES.instinct },
      {
        label: "Invoices & documents",
        href: "/use-cases/document-finance-operations",
      },
      { label: "Research & knowledge", href: "/use-cases/research-knowledge" },
    ],
    body: [
      {
        type: "p",
        text: "Every company already has AI-shaped knowledge: policies, precedent, who can approve what, which customers are edge cases. Most of it lives in people and chat threads.",
      },
      {
        type: "p",
        text: "When that memory is not structured, every agent and every new hire starts from zero. You get generic answers, repeated mistakes, and meetings that re-litigate settled decisions. Then someone suggests a new model, as if the amnesia were a compute problem.",
      },
      {
        type: "h2",
        text: "Models are interchangeable. Memory is not.",
      },
      {
        type: "p",
        text: "A model is a part. It will be replaced. The layer that should outlast it is how the organisation remembers: what is allowed, what was decided, what this customer is like, which document is the real one.",
      },
      {
        type: "p",
        text: "If your next investment is only another model subscription, ask what will still be true when that model is obsolete next year. If the answer is “nothing,” you are renting cleverness, not building a system.",
      },
      {
        type: "h2",
        text: "What to structure first",
      },
      {
        type: "p",
        text: "Start with the decisions the desk already makes, not with a knowledge-base project that tries to boil the company. Approved answers. Exception paths. The fields that must be true before a write-back. The document that counts.",
      },
      {
        type: "p",
        text: "That is why [invoices and documents](/use-cases/document-finance-operations) and [research work](/use-cases/research-knowledge) fail when they are treated as “just add a chatbot.” The job is matching, memory, and a person on the exception — not a paragraph generator.",
      },
      {
        type: "h2",
        text: "People still decide",
      },
      {
        type: "p",
        text: "Memory is not a replacement for judgement. Humans still decide. The system remembers. That split is the whole point. An agent that cannot find the last decision will invent a new one, confidently.",
      },
      {
        type: "callout",
        title: "A question for the next vendor meeting",
        text: "Ask where the organisation’s decisions will live after the pilot. If the answer is “in the prompt,” you do not have memory. You have a paragraph that will drift.",
      },
      {
        type: "h2",
        text: "Context as infrastructure",
      },
      {
        type: "p",
        text: "Our delivery work treats knowledge, decisions, and context as infrastructure. [Instinct](/instinct) is the longer version of that idea: organisational context, not another stranger in the tools. Models sit on top. They should be swappable without the company forgetting how it works.",
      },
    ],
  },
];

export function groupBlogBody(blocks: BlogBlock[]): {
  intro: BlogBlock[];
  sections: BlogBlock[][];
} {
  const intro: BlogBlock[] = [];
  const sections: BlogBlock[][] = [];
  let current: BlogBlock[] | null = null;

  for (const block of blocks) {
    if (block.type === "h2") {
      current = [block];
      sections.push(current);
      continue;
    }
    if (current) {
      current.push(block);
    } else {
      intro.push(block);
    }
  }

  return { intro, sections };
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function blogPath(slug: string): string {
  return `${ROUTES.blog}/${slug}`;
}

export function countBlogPosts(filter: "all" | BlogCategory): number {
  if (filter === "all") return BLOG_POSTS.length;
  return BLOG_POSTS.filter((post) => post.category === filter).length;
}

export function siblingBlogPosts(slug: string, related: string[]): BlogPost[] {
  const fromRelated = related
    .map((item) => getBlogPost(item))
    .filter((item): item is BlogPost => Boolean(item));
  if (fromRelated.length) return fromRelated;
  return BLOG_POSTS.filter((post) => post.slug !== slug).slice(0, 2);
}

export function blogWordCount(post: BlogPost): number {
  return post.body.reduce((total, block) => {
    if (block.type === "p" || block.type === "h2" || block.type === "callout") {
      const extra = block.type === "callout" ? ` ${block.title}` : "";
      return (
        total + `${block.text}${extra}`.split(/\s+/).filter(Boolean).length
      );
    }
    return total + block.items.join(" ").split(/\s+/).filter(Boolean).length;
  }, post.lead.split(/\s+/).filter(Boolean).length);
}

export function blogReadMinutes(post: BlogPost): number {
  return Math.max(3, Math.round(blogWordCount(post) / 220));
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function formatBlogDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return `${day} ${MONTHS[(month ?? 1) - 1]} ${year}`;
}

export const BLOG_INDEX = {
  title: "Think beyond the technology.",
  lead: "Practical ideas on AI, business systems, digital products and the changing way businesses work.",
  description:
    "Practical ideas on AI, business systems, digital products and the changing way businesses work — from Spirality Solutions.",
} as const;
