# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary audience:** business decision-makers and operators who already feel the pain — founders, owners, ops/finance/customer leads, and technical partners — looking for a real solution, not a demo reel.

They arrive in one of three buying postures (confirmed):

1. **Consulting alone** — “Help us figure out what to do (and what *not* to do).”
2. **Consulting + solution** — “Figure it out, then build the thing.”
3. **Consulting + solution + aftercare** — “Build it, then keep it alive” — support, maintenance, servers, monitoring, and ongoing improvement.

They are evaluating Spirality as a delivery partner for business systems work, not shopping for a generic “AI chatbot agency.”

## Product Purpose

Spirality Solutions is a **business systems and managed-operations company**. The marketing site (`https://spirality.com`) exists so a busy buyer can:

1. Understand what Spirality actually delivers (and what it refuses to pretend to deliver).
2. See the engagement ladder (advise → build → run/maintain).
3. Start a real conversation (`/contact`) or a diagnostic path (`/start-diagnostic`) without drowning in buzzwords.

**Success for the site:** a qualified lead who can name the process that hurts and the engagement depth they want — not a longer scroll of AI adjectives.

**Category (locked):** AI Systems & Managed Operations — with the hard constraint that “AI” is a means, not the product.

## Positioning

> We don't sell you AI. We assemble it around your business.

Neighboring firms sell tools, pilots, or slide decks. Spirality’s different claim (locked): **business context + engineering + operational execution** — including the unglamorous part where someone still answers when the server misbehaves.

What Spirality is *not* (locked): chatbot shop, automation-agency template page, or commodity “AI consulting” theater.

## Operating Context

- Buyer lands on the site to evaluate fit before a call.
- Engagement often starts with diagnosis (readiness, opportunity, constraints), then may expand into build and/or managed run.
- How We Work brand sequence (locked): **Diagnose → Engineer → Prove → Deliver**.
- Two finish modes (locked in homepage spec): **Managed Outcome** (Spirality runs under agreed outcomes) and **Build & Transfer** (design, prove, hand over with controls/docs/training).
- Related product story: **Bizdaptive** (governance / org-context platform) — separate brand system; teaser only on Spirality surfaces.
- Flagship concept page: **Instinct** (organisational context) — `/instinct`.
- Canonical domain: `https://spirality.com` (`.com` is authoritative; do not use `.in`). Legal name on chrome: Spirality Solutions Private Limited. Contact email in schema draft: `info@bizdaptive.com`.
- **Codebase reality:** this Next.js repo is the only site source of truth. There is no separate production codebase. Unused legacy static HTML, design experiments, and dead routes may be deleted or restructured freely as long as `PRODUCT.md` and locked planning truth are preserved.
- **Out of scope:** commercials / commercial creative workstream — do not touch.

## Capabilities and Constraints

### Confirmed delivery depth (user-confirmed)

| Depth | What the buyer gets |
| --- | --- |
| Consulting | Assessment, clarity, roadmap, “should we / shouldn’t we” |
| Consulting + solution | Above, plus designed and built systems/agents/integrations/products |
| Consulting + solution + after support | Above, plus ongoing support & maintenance — including servers and operational upkeep |

### Solution pillars (locked IA; pages may still be stubs)

- AI Strategy & Readiness → `/solutions/ai-strategy`
- AI Agents & Systems → `/solutions/ai-agents`
- Automation & Workflow Systems → `/solutions/automation`
- Digital Products & Platforms → `/solutions/digital-products`
- Managed AI Operations → `/solutions/managed-operations`

### Site / content constraints (binding)

- Homepage is category + proof path, **not** an encyclopedia; no duplicate “what we do” strips.
- Prefer SSR, semantic HTML, crawlable copy.
- SEO fundamentals only (`robots.ts`, `sitemap.ts`); no AI-SEO gimmicks; no fabricated FAQ rich results.
- Do not invent testimonials, named clients, case metrics, pricing, licenses, or deployment claims.
- Design-experiment routes (`/sentinel`, `/atelier`, `/got`) were removed from the shipping tree; do not reintroduce them as Spirality product surfaces.

### Undecided (do not invent)

- Named industries (plan allows 3–5 real verticals only — list not finalized).
- Published case studies / logos.
- Exact SLA language for “servers and everything” aftercare (scope exists; contract wording does not).
- Accessibility standard beyond sensible web defaults.

## Brand Commitments

- **Name:** Spirality Solutions (site); Bizdaptive is a distinct product brand.
- **Voice (user-confirmed):** funny, professional, and **constrained toward what we deliver**. Dry wit is allowed; hype is not.
- **Hard bans for copy and UI tone:**
  - Not “too AI” — no model-worship, no futurist fog, no “revolutionize / disrupt / unleash” filler.
  - Not “too salesy” — no countdown urgency, fake scarcity, or brochure adjectives that outrun delivery.
  - Prefer concrete verbs: diagnose, build, prove, run, maintain, hand over.
- **Visual direction (strategic only, not a design system):** technical, intelligent, confident, human — editorial/minimal; not a SaaS-dashboard template. Bizdaptive keeps its own system (blue `#0000FF`, Neue Haas / Helvetica Neue, strict grid) when that surface is built.
- **Assets on hand:** logos under `assets/`; one-pagers and drawings under `uploads/` — use as proof of work materials, not as fake social proof.
- Planning authority: `.planning/MASTER-PLAN.md`, `.planning/PHASE-1-HOMEPAGE-SPEC.md`, `.planning/PHASE-1-HERO.md`.

## Evidence on Hand

- Locked master plan and Phase 1 homepage/hero specs under `.planning/`.
- Next.js App Router scaffold (`app/`, `components/`, `lib/content.ts`) — treat as rebuildable starting material, not sacred legacy.
- Brand marks: `assets/logo.svg`, `assets/logo.png`, `assets/logo-light.png`.
- PDFs / drawings in `uploads/` (one-pagers and diagrams).

**Must not fabricate in future work:** client names, quotes, ROI percentages, “X companies trust us,” awards, press, or uptime guarantees unless the team supplies them.

## Product Principles

1. **Sell the depth, not the buzzword.** Lead with consulting / build / run-and-maintain clarity before mentioning models or tools.
2. **Constraint is the brand.** Say what Spirality does; leave out what it only wishes it did.
3. **Humor earns trust; hype spends it.** Wit that respects the buyer’s time; never carnival sales copy.
4. **One job per surface.** Homepage establishes category and path; deeper pages carry detail — no duplicated content blocks.
5. **Finish the work.** Delivery includes the option to stay for support and infrastructure — the story ends at owned outcome, not at a slide titled “Next steps.”
