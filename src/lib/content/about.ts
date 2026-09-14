import { ROUTES } from "~/lib/content/home";
import type { UseCaseGlyph } from "~/lib/content/use-cases";

export const ABOUT_INDEX = {
  eyebrow: "About Spirality",
  titleLead: "Technology should",
  titleAccent: "fit the business.",
  titleBreak: "Not the other way around.",
  lead: "Spirality Solutions builds AI, digital and business systems around how organisations actually work, from the processes they run to the people who depend on them.",
  description:
    "Spirality Solutions builds AI, digital and business systems around how organisations actually work. Meet the people, the point of view, and how we think about technology.",
  image: "/about/hero.png",
  imageAlt:
    "A dark server corridor with a luminous spiral of connected nodes, used as the About visual.",
} as const;

export const ABOUT_ORIGIN = {
  kicker: "Foundational principle",
  heading: "We started with a simple observation.",
  lead: "Businesses don't need more technology. They need it to fit how they actually work.",
  body: "Capability is easy. Usefulness inside a real process is the work. That is what we design, build and operate.",
  refusals: [
    { prefix: "Not another", line: "tool." },
    { prefix: "Not another", line: "disconnected system." },
    { prefix: "Not another", line: "AI demo." },
  ],
  outcomeKicker: "The Spirality mandate",
  outcome: "Something your business can actually use.",
} as const;

export const ABOUT_BELIEFS = {
  kicker: "How we decide",
  heading: "How we think about technology.",
  lead: "These are the filters we use when a process is put in front of us. Not values on a wall.",
  items: [
    {
      title: "Start with the work",
      line: "Technology should begin with a real business problem, not with whatever happens to be trending.",
      discipline: "Problem first",
      icon: "layout" as UseCaseGlyph,
    },
    {
      title: "Build around context",
      line: "Every business has its own processes, rules, systems and ways of working. The solution should account for them.",
      discipline: "Fit the desk",
      icon: "match" as UseCaseGlyph,
    },
    {
      title: "Make it useful",
      line: "A successful project is not one that looks impressive in a demo. It is one people actually use, and that improves the work.",
      discipline: "Desk adoption",
      icon: "check" as UseCaseGlyph,
    },
    {
      title: "Keep humans in control",
      line: "AI can handle more work, but responsibility should remain clear. The right work gets automated. The right decisions stay with people.",
      discipline: "Owned decisions",
      icon: "user" as UseCaseGlyph,
    },
  ],
} as const;

export const ABOUT_FOUNDERS = {
  kicker: "The people",
  heading: "Built by people who wanted to build differently.",
  lead: "Desk stability, discovery, and shipping something the business can run. Not a slide deck.",
  items: [
    {
      name: "Yashwanth",
      mark: "Y",
      role: "Co-Founder",
      tag: "2AM standard",
      focus: "Operational resilience",
      bio: "Asks what happens at 2am before asking which model you are using. That is the standard the work has to meet: if it cannot survive a real night on the desk, it is not ready.",
    },
    {
      name: "Akil Srikanth",
      mark: "A",
      role: "Co-Founder",
      tag: "Discovery",
      focus: "Process and client architecture",
      bio: "Thinks most AI problems are process problems in a better outfit. Reads how the work actually runs before anything is chosen: if the process isn't named, the technology isn't ready.",
    },
    {
      name: "Sudharshan",
      mark: "S",
      role: "Co-Founder",
      tag: "Shipping",
      focus: "Production pragmatism",
      bio: "Ships one boring thing that works over five clever things that don't. The preference is usefulness over theater: something the business can run, not something that only looks impressive in a room.",
    },
  ],
} as const;

export const ABOUT_DIRECTION = {
  vision: {
    kicker: "Our vision",
    heading:
      "A world where technology works around people and businesses, not the other way around.",
    body: "We see a future where intelligent systems are part of how businesses operate naturally: connected to their work, aware of their context and capable of improving how people get things done.",
  },
  mission: {
    kicker: "Our mission",
    heading:
      "Build technology that makes real business work simpler, smarter and more capable.",
    body: "We bring AI, software, digital experiences, automation and operational expertise together around the specific needs of each business, from the first idea through to real-world use.",
  },
} as const;

export const ABOUT_CLOSE = {
  heading: "Have something worth building?",
  body: "Tell us what you're trying to improve. We'll start with the problem, not the technology.",
  note: "Direct conversation with the people who do the work.",
  cta: { label: "Talk to Us", href: ROUTES.contact },
} as const;
