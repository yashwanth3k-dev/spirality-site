import { ROUTES } from "~/lib/content/home";

export type UseCaseCategory =
  | "ai-agents"
  | "business-systems"
  | "bpo-operations"
  | "digital-services";

export type UseCaseGlyph =
  | "inbox"
  | "bot"
  | "user"
  | "file"
  | "scan"
  | "match"
  | "flag"
  | "chat"
  | "search"
  | "sync"
  | "shield"
  | "layout"
  | "send"
  | "database"
  | "spark"
  | "queue"
  | "check"
  | "building"
  | "headset"
  | "book"
  | "globe"
  | "workflow"
  | "clipboard";

export type UseCaseFlowStep = {
  title: string;
  note: string;
  detail: string;
  icon: UseCaseGlyph;
};

export type UseCaseSpec = {
  label: string;
  value: string;
  note: string;
};

export type UseCase = {
  slug: string;
  pattern: string;
  name: string;
  promise: string;
  situation: string;
  result: string;
  goodFor: string;
  change: string;
  systems?: string;
  human: string;
  category: UseCaseCategory;
  contrastKicker: string;
  contrastHeading: string;
  situationTitle: string;
  resultTitle: string;
  situationPoints: string[];
  resultPoints: string[];
  specs: UseCaseSpec[];
  flowLabel: string;
  flow: UseCaseFlowStep[];
  ctaHeading: string;
  related: Array<{ label: string; href: string }>;
};

export const USE_CASE_FILTERS: Array<{
  id: "all" | UseCaseCategory;
  label: string;
}> = [
  { id: "all", label: "All Solutions" },
  { id: "ai-agents", label: "AI Agents" },
  { id: "business-systems", label: "Business Systems" },
  { id: "bpo-operations", label: "BPO & Operations" },
  { id: "digital-services", label: "Digital Services" },
];

export const USE_CASE_CATEGORY_LABEL: Record<UseCaseCategory, string> = {
  "ai-agents": "AI Agents",
  "business-systems": "Business Systems",
  "bpo-operations": "BPO & Operations",
  "digital-services": "Digital Services",
};

export const USE_CASES: UseCase[] = [
  {
    slug: "customer-support",
    pattern: "01",
    name: "Customer Support",
    promise: "Answer the easy questions. Send the hard ones to a person.",
    situation: "Your team spends the day repeating the same answers.",
    result: "Simple requests get handled. People take the rest.",
    goodFor: "Questions · Tickets · Updates · First replies",
    change:
      "AI reads the request, looks up the approved answer, and either replies or sends it to your team — with the notes already attached.",
    systems: "Helpdesk · CRM · Knowledge · Chat / email",
    human:
      "People still handle angry customers, special cases, and anything that needs a judgement call.",
    category: "ai-agents",
    contrastKicker: "Before and after",
    contrastHeading: "Stop treating every ticket like a new job.",
    situationTitle: "Every question waits for a person",
    resultTitle: "Easy ones go out. Hard ones come with notes.",
    situationPoints: [
      "Someone has to open the ticket just to copy an answer they already know.",
      "The request hops between tools before anyone owns it.",
      "Difficult cases sit behind simple ones in the same pile.",
    ],
    resultPoints: [
      "AI checks your approved answers first.",
      "It can send a status, an update, or a route — if you have allowed that.",
      "When a person is needed, they get the history, not a blank ticket.",
    ],
    specs: [
      { label: "Comes in", value: "Chat or email", note: "Or your helpdesk" },
      { label: "First try", value: "AI", note: "Only answers you approve" },
      { label: "Hard cases", value: "Your team", note: "They still decide" },
    ],
    flowLabel: "How it works",
    flow: [
      {
        title: "Request arrives",
        note: "Chat, email, or ticket",
        icon: "inbox",
        detail:
          "The customer writes in. Everything lands in one place so the team is not hunting across inboxes.",
      },
      {
        title: "AI tries first",
        note: "Your approved answers",
        icon: "bot",
        detail:
          "It reads the question and looks up what you have already said is true. If it can finish the job, it does.",
      },
      {
        title: "Person if needed",
        note: "The tricky ones",
        icon: "headset",
        detail:
          "Unclear or sensitive cases go to a person, with the notes already there. Nobody starts from scratch.",
      },
    ],
    ctaHeading: "Want this on your real support queue?",
    related: [
      { label: "AI Agents", href: ROUTES.aiAgents },
      { label: "BPO & Operations", href: ROUTES.managedOperations },
    ],
  },
  {
    slug: "sales-lead-management",
    pattern: "02",
    name: "Sales Leads",
    promise: "New leads don’t sit around waiting for someone to notice.",
    situation: "Forms come in. Follow-up depends on who remembered.",
    result: "Every lead is researched, filed, and handed to sales.",
    goodFor: "New leads · Follow-ups · CRM updates · First briefs",
    change:
      "When someone fills a form, AI looks them up, writes a short brief, updates the CRM, and tells the salesperson.",
    systems: "CRM · Website forms · Email",
    human: "Sales still owns the relationship, the price, and the close.",
    category: "ai-agents",
    contrastKicker: "Before and after",
    contrastHeading: "A form fill should not die in the inbox.",
    situationTitle: "Leads wait. Records go stale.",
    resultTitle: "Sales gets a brief, not a blank form.",
    situationPoints: [
      "A lead sits between the website form and the first human reply.",
      "The CRM is messy because nobody has time to fill it in.",
      "Follow-up happens if someone remembers — not because the process made it happen.",
    ],
    resultPoints: [
      "AI prepares a short, useful brief from sources you have agreed.",
      "The same qualification rules run every time.",
      "The CRM is updated as part of the work, not as a weekend cleanup.",
    ],
    specs: [
      { label: "Starts with", value: "A form", note: "Or an inbound email" },
      { label: "Then", value: "A short brief", note: "From sources you trust" },
      { label: "Ends with", value: "Sales notified", note: "They still close" },
    ],
    flowLabel: "How it works",
    flow: [
      {
        title: "Form is filled",
        note: "Website or inbound",
        icon: "layout",
        detail:
          "Someone asks to talk. The work starts immediately — it does not wait for a notification to be noticed.",
      },
      {
        title: "A brief is written",
        note: "From sources you pick",
        icon: "search",
        detail:
          "AI looks up what you have allowed it to use and writes a short note the salesperson can actually use.",
      },
      {
        title: "Sales is told",
        note: "CRM is updated",
        icon: "sync",
        detail:
          "The record is filled in and the owner gets a ping. Talking, pricing, and closing stay with sales.",
      },
    ],
    ctaHeading: "Want new leads to arrive ready for sales?",
    related: [
      { label: "AI Agents", href: ROUTES.aiAgents },
      { label: "Business Systems", href: ROUTES.automation },
    ],
  },
  {
    slug: "document-finance-operations",
    pattern: "03",
    name: "Invoices & Documents",
    promise: "Stop retyping invoices. Only the odd ones need a person.",
    situation: "People spend hours checking papers that mostly look the same.",
    result: "Files are read, checked, and only mismatches wait in a list.",
    goodFor: "Invoices · Forms · Checks · Paperwork",
    change:
      "AI reads the file, pulls out the numbers, checks them against your finance system, and sends mismatches to a person.",
    systems: "Finance tools · File stores · Approvals",
    human: "People still approve the odd cases and own the money decision.",
    category: "business-systems",
    contrastKicker: "Before and after",
    contrastHeading: "Most of this work is checking, not deciding.",
    situationTitle: "Every file is typed in by hand",
    resultTitle: "People only see what does not match",
    situationPoints: [
      "Someone retypes invoices and forms into the finance system.",
      "Mismatches hide in email instead of one list.",
      "Approvals are scattered, so it is hard to see who signed what.",
    ],
    resultPoints: [
      "The file is read and the fields are pulled out first.",
      "Checks run against the finance system you already use.",
      "A person reviews only the mismatches — and still owns the money decision.",
    ],
    specs: [
      { label: "Arrives as", value: "A file", note: "Invoice, form, scan" },
      { label: "Then", value: "A check", note: "Against your records" },
      { label: "Odd ones", value: "A person", note: "They still approve" },
    ],
    flowLabel: "How it works",
    flow: [
      {
        title: "File arrives",
        note: "Inbox or folder",
        icon: "file",
        detail:
          "Invoices and forms land in one queue instead of sitting in someone’s email.",
      },
      {
        title: "Info is pulled out",
        note: "No retyping",
        icon: "scan",
        detail:
          "AI reads the document and picks out the fields that matter — amounts, names, dates.",
      },
      {
        title: "Checked against records",
        note: "Your finance system",
        icon: "match",
        detail:
          "Those numbers are compared with what you already have on file.",
      },
      {
        title: "Person reviews mismatches",
        note: "Only the odd ones",
        icon: "flag",
        detail:
          "If something does not match, it waits in a list. A person decides. The system does not invent a posting.",
      },
    ],
    ctaHeading: "Want invoices to stop being a typing job?",
    related: [
      { label: "Business Systems", href: ROUTES.automation },
      { label: "AI Agents", href: ROUTES.aiAgents },
    ],
  },
  {
    slug: "internal-operations",
    pattern: "04",
    name: "Internal Requests",
    promise: "HR and IT requests stop bouncing around in chat.",
    situation: "A simple ask turns into a thread, then a ticket, then a chase.",
    result: "Repeat requests get done. Special ones go to the right person.",
    goodFor: "HR · IT · Office work · Access requests",
    change:
      "Someone asks in chat or a ticket. If it is a known request, the system does it. If not, it goes to a person with the details already filled in.",
    systems: "Chat · Tickets · Staff directory · Internal tools",
    human:
      "People still approve exceptions and anything that needs a policy call.",
    category: "business-systems",
    contrastKicker: "Before and after",
    contrastHeading: "A laptop request should not need five messages.",
    situationTitle: "Work lives in threads nobody owns",
    resultTitle: "Known requests get done. The rest go to a person.",
    situationPoints: [
      "HR and IT asks start in chat and may never become a ticket.",
      "The next step depends on who is online.",
      "Simple repeats sit in the same pile as one-off policy questions.",
    ],
    resultPoints: [
      "The request is understood where it was asked.",
      "Allowed actions run in the tools you already use.",
      "Anything outside the rules goes to a person — with the request already written up.",
    ],
    specs: [
      {
        label: "Asked in",
        value: "Chat or ticket",
        note: "Where people already work",
      },
      { label: "If allowed", value: "It gets done", note: "No extra process" },
      { label: "If not", value: "A person", note: "They still approve" },
    ],
    flowLabel: "How it works",
    flow: [
      {
        title: "Someone asks",
        note: "Chat or ticket",
        icon: "chat",
        detail:
          "The request is captured where the team already talks. No parallel process.",
      },
      {
        title: "Rules are checked",
        note: "Is this a known ask?",
        icon: "clipboard",
        detail:
          "AI looks up the policy or the staff record to see if this is a standard request or a special case.",
      },
      {
        title: "Action or handoff",
        note: "Done, or sent on",
        icon: "workflow",
        detail:
          "If it is allowed, the system does it. If not, it goes to the person who can actually say yes or no.",
      },
    ],
    ctaHeading: "Want internal requests to stop bouncing?",
    related: [
      { label: "Business Systems", href: ROUTES.automation },
      { label: "BPO & Operations", href: ROUTES.managedOperations },
    ],
  },
  {
    slug: "research-knowledge",
    pattern: "05",
    name: "Research & Answers",
    promise: "Find what the company already knows — without asking around.",
    situation: "The answer exists. It just lives in someone’s inbox.",
    result: "A draft comes back from your own files. A person checks it.",
    goodFor: "Research · Reports · File search · Internal answers",
    change:
      "We connect the documents you approve. AI searches those, writes a short draft, and shows where it came from. A person signs off if it matters.",
    systems: "Shared drives · Wikis · Document folders",
    human:
      "People still check sensitive answers before they become “what we say.”",
    category: "digital-services",
    contrastKicker: "Before and after",
    contrastHeading: "Stop redoing research that already exists.",
    situationTitle: "Answers depend on who is around",
    resultTitle: "A draft from your files, then a person checks it",
    situationPoints: [
      "The same research is done again because the last version sat in an inbox.",
      "You have to know which folder, wiki, or person to ask.",
      "A report waits on someone to gather files that already exist.",
    ],
    resultPoints: [
      "Your approved files are searched first.",
      "The draft shows where each part came from, so it can be checked.",
      "A person still says when something is ready to share.",
    ],
    specs: [
      { label: "Looks in", value: "Your files", note: "Only what you allow" },
      { label: "Gives you", value: "A draft", note: "With sources to check" },
      { label: "Goes out", value: "After a person", note: "If it matters" },
    ],
    flowLabel: "How it works",
    flow: [
      {
        title: "Your files",
        note: "Only what you pick",
        icon: "book",
        detail:
          "Shared drives, wikis, and folders you choose. Not whatever an AI happens to remember from the internet.",
      },
      {
        title: "A draft is written",
        note: "With sources",
        icon: "spark",
        detail:
          "AI searches those files and writes a short answer, keeping the source next to the claim.",
      },
      {
        title: "A person checks",
        note: "Then it can be used",
        icon: "check",
        detail:
          "Someone who knows the work reads it, especially if the answer is sensitive, before it is treated as official.",
      },
    ],
    ctaHeading: "Want answers to start from what you already have?",
    related: [
      { label: "Digital Services", href: ROUTES.digitalProducts },
      { label: "AI Agents", href: ROUTES.aiAgents },
    ],
  },
  {
    slug: "client-portals",
    pattern: "06",
    name: "Client Portals",
    promise: "Clients check status themselves instead of emailing you.",
    situation: "Account managers spend the day sending the same updates.",
    result:
      "Clients log in, see what’s theirs, and only call when they need a person.",
    goodFor: "Status · Reports · Invoices · Client login",
    change:
      "We build a simple login around the questions clients already ask — with a way to reach a person when the screen should not decide.",
    systems: "Login · Billing · Support tools",
    human:
      "People still handle special deals, access, and anything the portal is not allowed to say.",
    category: "digital-services",
    contrastKicker: "Before and after",
    contrastHeading: "Stop being the status email for your clients.",
    situationTitle: "Your team is the reporting layer",
    resultTitle: "Clients look it up. People handle the rest.",
    situationPoints: [
      "Clients email for status, invoices, and files you already have.",
      "Account managers become a helpdesk instead of doing real client work.",
      "The same question gets a different answer depending on who replies.",
    ],
    resultPoints: [
      "The portal is built around the questions clients actually ask.",
      "They see what they are allowed to see. Nothing else.",
      "If it needs a person, there is a clear way to ask — not another vague email.",
    ],
    specs: [
      {
        label: "They get",
        value: "A login",
        note: "Built for their questions",
      },
      { label: "They see", value: "Their data", note: "Only what is allowed" },
      { label: "If not", value: "A person", note: "For special cases" },
    ],
    flowLabel: "How it works",
    flow: [
      {
        title: "Client logs in",
        note: "Their own page",
        icon: "layout",
        detail:
          "They see status, reports, and actions that match how they already work with you — not a generic dashboard.",
      },
      {
        title: "Answers are on the page",
        note: "From your systems",
        icon: "database",
        detail:
          "Where it is safe, the page shows billing, status, or support information you already keep.",
      },
      {
        title: "Limits stay in place",
        note: "Each client sees theirs",
        icon: "shield",
        detail:
          "Login rules decide what each client can see. Special commercial calls stay with your team.",
      },
    ],
    ctaHeading: "Want clients to stop chasing status in email?",
    related: [
      { label: "Digital Services", href: ROUTES.digitalProducts },
      { label: "Business Systems", href: ROUTES.automation },
    ],
  },
  {
    slug: "hybrid-bpo",
    pattern: "07",
    name: "Hybrid Operations",
    promise: "AI writes the first draft. Your people send it.",
    situation:
      "The work is too important to leave unattended — but the pile is huge.",
    result: "AI prepares. A specialist checks. Then it goes out.",
    goodFor: "Claims · Overflow · High-stakes work · Review queues",
    change:
      "AI drafts the work and lines it up. A specialist reads it. Nothing reaches the customer until a person says so.",
    systems: "Tickets · Review lists · Knowledge · Send tools",
    human:
      "Specialists still approve the draft and own what the customer sees.",
    category: "bpo-operations",
    contrastKicker: "Before and after",
    contrastHeading: "AI prepares. People still send.",
    situationTitle: "Too much volume. Too much risk to let go.",
    resultTitle: "A checked draft, then a person hits send",
    situationPoints: [
      "You cannot let the work go out on its own — it is too important.",
      "The pile still drowns the people who should be using judgement.",
      "It is hard to see what the AI wrote versus what a person approved.",
    ],
    resultPoints: [
      "AI writes a draft. It does not send.",
      "Specialists review a list made for checking, not for retyping.",
      "It only goes out after sign-off, and you can see who signed.",
    ],
    specs: [
      { label: "First pass", value: "AI draft", note: "Never sent alone" },
      { label: "Then", value: "A specialist", note: "They still decide" },
      {
        label: "Goes out",
        value: "After sign-off",
        note: "You can see who signed",
      },
    ],
    flowLabel: "How it works",
    flow: [
      {
        title: "AI writes a draft",
        note: "Does not send",
        icon: "bot",
        detail:
          "It prepares the work and flags what looks routine versus what needs a specialist. It does not act for the customer.",
      },
      {
        title: "A specialist checks",
        note: "The review list",
        icon: "user",
        detail:
          "People review the draft in a list built for sign-off — not for rebuilding the case from scratch.",
      },
      {
        title: "Then it goes out",
        note: "After a person",
        icon: "send",
        detail:
          "Only approved work is sent. The record shows who signed. That is the point of doing this with people.",
      },
    ],
    ctaHeading: "Need people in the loop — not an unattended bot?",
    related: [
      { label: "BPO & Operations", href: ROUTES.managedOperations },
      { label: "AI Agents", href: ROUTES.aiAgents },
    ],
  },
];

export function getUseCase(slug: string): UseCase | undefined {
  return USE_CASES.find((item) => item.slug === slug);
}

export function getUseCasePath(slug: string): string {
  return `${ROUTES.useCases}/${slug}`;
}

export function countUseCases(filter: "all" | UseCaseCategory): number {
  if (filter === "all") return USE_CASES.length;
  return USE_CASES.filter((item) => item.category === filter).length;
}

export function splitUseCaseTags(value?: string): string[] {
  if (!value) return [];
  return value
    .split("·")
    .map((part) => part.trim())
    .filter(Boolean);
}

export function siblingUseCases(slug: string, limit = 2): UseCase[] {
  const current = getUseCase(slug);
  if (!current) return [];
  const same = USE_CASES.filter(
    (item) => item.category === current.category && item.slug !== slug
  );
  const rest = USE_CASES.filter(
    (item) => item.category !== current.category && item.slug !== slug
  );
  return [...same, ...rest].slice(0, limit);
}
