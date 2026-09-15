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
  contact: "/contact",
  about: "/about",
  useCases: "/use-cases",
  caseStudies: "/case-studies",
  blog: "/blog",
  privacy: "/privacy",
  terms: "/terms",
  cookies: "/cookies",
  maintenance: "/maintenance",
} as const;

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
  ],
  email: "info@spiralitysolutions.com",
  legal: "Spirality Solutions Private Limited",
  legalLinks: [
    { label: "Privacy", href: ROUTES.privacy },
    { label: "Terms", href: ROUTES.terms },
    { label: "Cookies", href: ROUTES.cookies },
    { label: "Contact", href: ROUTES.contact },
  ],
};
