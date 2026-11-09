/**
 * Shared site routes, nav, and footer — safe for client + server imports.
 * Keep page copy in home.ts / other content modules so Turbopack doesn't
 * pull the full homepage content graph into client chunks.
 */

export const ROUTES = {
  solutions: "/solutions",
  aiStrategy: "/solutions/ai-strategy",
  aiAgents: "/solutions/ai-agents",
  automation: "/solutions/automation",
  digitalProducts: "/solutions/digital-products",
  managedOperations: "/solutions/managed-operations",
  howWeWork: "/how-we-work",
  deliver: "/how-we-work#deliver",
  instinct: "/instinct",
  bizdaptive: "/bizdaptive",
  bizdaptivePrivacy: "/bizdaptive/privacy",
  bizdaptiveTerms: "/bizdaptive/terms",
  bizdaptiveDataDeletion: "/bizdaptive/data-deletion",
  bizdaptiveRefunds: "/bizdaptive/refunds",
  bizdaptiveShipping: "/bizdaptive/shipping",
  bizdaptiveSampleInvoice: "/bizdaptive/sample-invoice",
  bizdaptiveContact: "/bizdaptive/contact",
  contact: "/contact",
  about: "/about",
  useCases: "/use-cases",
  caseStudies: "/case-studies",
  blog: "/blog",
  privacy: "/privacy",
  terms: "/terms",
  cookies: "/cookies",
  maintenance: "/maintenance",
  whatsapp: "/whatsapp",
} as const;

/** Shown on /whatsapp and repeated in every site footer for Meta's review. */
export const WHATSAPP_BLURB =
  "Spirality Solutions provides Bizdaptive, a customer messaging workspace for other businesses. Each client connects their own WhatsApp Business Account. Their staff use Bizdaptive to manage customer conversations, create WhatsApp message templates such as appointment reminders, and send messages to their own customers. The phone number, templates, and Meta charges stay with the client. Spirality does not send from its own WhatsApp number.";

/** In-page anchors — the hero nav and CTAs point at these. */
export const SECTIONS = {
  offer: "what-we-offer",
  method: "how-we-work",
  solution: "one-solution",
  benefits: "benefits",
  close: "contact",
} as const;

/** Hero CTAs — spec labels, pointed at on-page sections for now. */
export const HERO_CTA = {
  primary: { label: "Talk to Us", href: ROUTES.contact },
  secondary: { label: "See what we do", href: `#${SECTIONS.offer}` },
};

/** Product pages reviewers use for Bizdaptive (Meta and Razorpay). */
export const BIZDAPTIVE_SIGN_IN = "https://bizdaptive.app/signin";

export const BIZDAPTIVE_NAV = [
  { label: "Product", href: ROUTES.bizdaptive },
  { label: "Privacy", href: ROUTES.bizdaptivePrivacy },
  { label: "Terms", href: ROUTES.bizdaptiveTerms },
  { label: "Data deletion", href: ROUTES.bizdaptiveDataDeletion },
  { label: "Refunds", href: ROUTES.bizdaptiveRefunds },
  { label: "Shipping", href: ROUTES.bizdaptiveShipping },
  { label: "Sample invoice", href: ROUTES.bizdaptiveSampleInvoice },
  { label: "Contact", href: ROUTES.bizdaptiveContact },
] as const;

/** Parent labels are menus only — pages live on children. */
export const HERO_NAV = [
  {
    label: "Solutions",
    children: [
      { label: "AI Agents", href: ROUTES.aiAgents },
      { label: "Digital Services", href: ROUTES.digitalProducts },
      { label: "Business Systems", href: ROUTES.automation },
      { label: "BPO & Operations", href: ROUTES.managedOperations },
    ],
  },
  {
    label: "Bizdaptive",
    children: BIZDAPTIVE_NAV,
  },
  {
    label: "Resources",
    children: [
      { label: "Use Cases", href: ROUTES.useCases },
      { label: "Case Studies", href: ROUTES.caseStudies },
      { label: "Blog", href: ROUTES.blog },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About Us", href: ROUTES.about },
      { label: "Contact", href: ROUTES.contact },
    ],
  },
] as const;

export const FOOTER = {
  groups: [
    {
      title: "Solutions",
      links: [
        { label: "AI Agents", href: ROUTES.aiAgents },
        { label: "Digital Services", href: ROUTES.digitalProducts },
        { label: "Business Systems", href: ROUTES.automation },
        { label: "BPO & Operations", href: ROUTES.managedOperations },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Use Cases", href: ROUTES.useCases },
        { label: "Case Studies", href: ROUTES.caseStudies },
        { label: "Blog", href: ROUTES.blog },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: ROUTES.about },
        { label: "Contact", href: ROUTES.contact },
      ],
    },
    {
      title: "Bizdaptive",
      links: BIZDAPTIVE_NAV,
    },
  ],
  email: "info@spiralitysolutions.com",
  legal: "Spirality Solutions Private Limited",
  legalLinks: [
    { label: "WhatsApp", href: ROUTES.whatsapp },
    { label: "Privacy", href: ROUTES.privacy },
    { label: "Terms", href: ROUTES.terms },
    { label: "Cookies", href: ROUTES.cookies },
    { label: "Contact", href: ROUTES.contact },
  ],
};
