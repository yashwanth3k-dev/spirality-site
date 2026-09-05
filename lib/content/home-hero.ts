export const homeHero = {
  eyebrow: "AI Systems & Managed Operations",
  left: {
    lines: ["The Next Layer", "of Intelligence"] as const,
    body: "AI is becoming easier to access. The advantage comes from how it is engineered into the business."
  },
  right: {
    lines: ["Built Around", "Your Business"] as const,
    body: "We assemble AI around your processes, rules, context and edge cases — then put it to work."
  },
  primaryCta: { label: "Talk to Us", href: "/contact" },
  secondaryCta: { label: "See how we work", href: "/how-we-work" }
} as const;

export const homeHeroNav = [
  { label: "Solutions", href: "/solutions" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Instinct", href: "/instinct" },
  { label: "Bizdaptive", href: "/bizdaptive" },
  { label: "About", href: "/about" }
] as const;

export const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_112712_da9d53df-6d27-4b12-bdf6-aa9dc2622bdf.mp4";
