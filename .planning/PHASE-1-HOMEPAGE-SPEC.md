# Phase 1 — Spirality Homepage Specification

**Route:** `/`  
**Goal:** Establish category, prove differentiation lightly, route into deeper pages. Not an encyclopedia.  
**Visual note:** Current cinematic hero experiment can remain as optional art direction, but **content hierarchy below follows this marketing system**. Implementation should prefer SSR text, semantic HTML, and crawlable copy.

---

## SEO metadata

| Field | Value |
|--------|--------|
| `title` | Spirality Solutions \| AI Systems & Managed Operations |
| `description` | We don't sell you AI. We assemble it around your business — strategy, agents, automation, digital systems, and managed operations built on your processes, rules, and edge cases. |
| `canonical` | `https://spirality.com/` |
| OG title | Spirality Solutions — AI Systems & Managed Operations |
| OG description | Same as meta description |
| OG image | `/og/home.png` (1200×630, brand mark + proposition line) |
| Twitter card | `summary_large_image` |
| robots | `index, follow` |

**Keywords (internal targeting only — do not stuff page):**  
AI systems, managed AI operations, AI strategy, AI agents, enterprise AI, organisational context

---

## JSON-LD (homepage only)

### 1. Organization

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Spirality Solutions",
  "url": "https://spirality.com",
  "logo": "https://spirality.com/icon.png",
  "description": "AI Systems & Managed Operations — assembling AI around real business processes, rules, and operational context.",
  "email": "info@bizdaptive.com",
  "sameAs": []
}
```

### 2. WebSite

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Spirality Solutions",
  "url": "https://spirality.com",
  "publisher": {
    "@type": "Organization",
    "name": "Spirality Solutions"
  }
}
```

No FAQ schema. No SoftwareApplication on homepage.

---

## Header / footer (site chrome — applies from Phase 1)

### Header

Solutions · How We Work · Industries · Insights · Bizdaptive · About · **Talk to Us** (`/contact`)

Solutions dropdown → five solution URLs from master plan.

### Footer groups

1. **Solutions** — five solution links  
2. **Company** — How We Work, Instinct, About, Contact  
3. **Explore** — Industries, Insights, Bizdaptive, Case Studies (when live)  
4. **Legal / contact** — email, © Spirality Solutions Private Limited

---

## Section order (exact)

1. Hero — **two-sided narrative** (see `PHASE-1-HERO.md`; locked copy/animation)
2. Category / proposition strip  
3. The problem with “buying AI”  
4. What we assemble (4 capabilities → solutions)  
5. How we work (Diagnose → Engineer → Prove → Deliver)  
6. Instinct teaser  
7. Engagement models (Run it / Hand it over)  
8. Bizdaptive teaser  
9. Proof / where it shows up (short, not 8-point lists)  
10. Closing CTA  

---

## Full copy + heading hierarchy

### S1 — Hero (locked — authoritative file: `PHASE-1-HERO.md`)

**Do not use** template SaaS line: “A unified infrastructure platform…”

**Eyebrow:** AI Systems & Managed Operations  

**H1 (one heading, two visual sides):**  
The Next Layer of Intelligence — Built Around Your Business

**Left — possibility**  
Lines: The Next Layer / of Intelligence  
Copy: AI is becoming easier to access. The advantage comes from how it is engineered into the business.

**Right — outcome**  
Lines: Built Around / Your Business  
Copy: We assemble AI around your processes, rules, context and edge cases — then put it to work.

**Primary CTA:** Talk to Us → `/contact`  
**Secondary CTA:** See how we work → `/how-we-work`

**Scroll narrative:** Left visible → left zooms/fades → right focuses → Section 2 emerges. Central visual stays the anchor.  
**Story:** AI → Business Context → Operational System → Real Outcome

---

### S2 — Category strip (no H2 competing with H1)

**Label:** What Spirality is  

**Line:** Spirality designs, builds, and operates AI systems around real business work — not demos, not chat windows, not tool catalogs.

---

### S3 — Problem

**H2:** Most AI projects fail in the gap between the model and the business.

**Body:**  
Enterprises don't struggle because models are unavailable. They struggle because work has rules, exceptions, approvals, systems, and people — and generic AI ignores that layer.

**Three short points (not cards-as-dashboard):**

1. **Tools without context** produce generic answers.  
2. **Pilots without operations** never become owned workflow.  
3. **Autonomy without governance** creates risk, not leverage.

**Link:** Read about organisational instinct → `/instinct`

---

### S4 — Capabilities (four, short)

**H2:** Four capabilities. One operating model.

**Intro:** Strategy, systems, digital products, and managed operations — connected so AI becomes working business infrastructure.

| # | H3 | One-line | Link |
|---|----|----------|------|
| 01 | AI Strategy & Readiness | Know where AI should actually work — and where it shouldn't. | `/solutions/ai-strategy` |
| 02 | AI Agents & Systems | Give AI a job: context, tools, action, verification, escalation. | `/solutions/ai-agents` |
| 03 | Automation & Digital Systems | Automate work that shouldn't consume your best people; build the interfaces and integrations operations need. | `/solutions/automation` + `/solutions/digital-products` (primary tile can deep-link automation; digital products as sibling line or combined tile “Automation & Digital Products” with two links) |
| 04 | Managed AI Operations | Don't just deploy AI. Put it to work — measure, improve, run. | `/solutions/managed-operations` |

**Implementation note:** Prefer **4 compact tiles** (2×2 mobile / 4×1 desktop). No 6-bullet lists on homepage.

**CTA under grid:** Explore solutions → `/solutions`

---

### S5 — How we work

**H2:** Diagnose. Engineer. Prove. Deliver.

**Intro:** A four-stage model for moving from idea to owned outcome.

| Stage | H3 | Line |
|-------|----|------|
| 01 | Diagnose | Assess where AI pays. |
| 02 | Engineer | Build with your context. |
| 03 | Prove | Test on your real work. |
| 04 | Deliver | Run it or hand it over. |

**CTA:** See the full methodology → `/how-we-work`

---

### S6 — Instinct teaser

**Eyebrow:** Flagship concept  

**H2:** AI without organisational instinct is just a clever stranger.

**Body:**  
Unwritten rules, precedent, authority, risk appetite, and relationships decide whether AI produces useful decisions — or generic responses.

**CTA:** Explore Instinct → `/instinct`

---

### S7 — Engagement models

**H2:** Two ways to finish the work.

| H3 | Path | Line |
|----|------|------|
| Managed Outcome | You → Spirality → Outcome | We operate the process under agreed outcomes and keep improving it. |
| Build & Transfer | You → Spirality → Your team | We design, prove, and transfer with controls, documentation, and training. |

**Link:** Delivery detail on How We Work → `/how-we-work#deliver`

---

### S8 — Bizdaptive teaser

**Eyebrow:** Coming from Spirality  

**H2:** AI needs context. Organisations need control.

**Line:** Bizdaptive is the governance operating layer for org context, decisions, execution, and memory — so AI questions, humans decide, and the system remembers.

**CTA:** Explore Bizdaptive → `/bizdaptive`

---

### S9 — Where it shows up (keep short)

**H2:** Built for real operational work.

Four domains max, one line each:

- **Customer operations** — triage, support, qualification with escalation.  
- **Finance operations** — documents, checks, exceptions, approvals.  
- **Internal operations** — orders, monitoring, cross-system coordination.  
- **Knowledge work** — retrieval and reporting grounded in company memory.

**Link:** Industries overview → `/industries` (when live; until then omit or soft-link Insights)

---

### S10 — Closing CTA

**H2:** Start with the work. Not the model.

**Body:** Tell us the process that costs time, judgment, or risk. We'll tell you whether AI belongs there — and how to assemble the system around it.

**Primary CTA:** Talk to Us → `/contact`  
**Secondary CTA:** Start with How We Work → `/how-we-work`

---

## CTA system (homepage)

| Placement | Label | Destination | Intent |
|-----------|-------|-------------|--------|
| Hero primary | Talk to Us | `/contact` | Conversion |
| Hero secondary | See how we work | `/how-we-work` | Education |
| Capabilities | Explore solutions | `/solutions` | Browse |
| How we work | Full methodology | `/how-we-work` | Depth |
| Instinct | Explore Instinct | `/instinct` | Differentiation |
| Bizdaptive | Explore Bizdaptive | `/bizdaptive` | Product |
| Close primary | Talk to Us | `/contact` | Conversion |

**Analytics events (Phase 1 hooks):**

- `cta_click` `{ location, label, href }`
- `nav_solutions_open`
- `scroll_depth` `{ 25, 50, 75, 100 }`

---

## Internal linking map (homepage → graph)

```
/ ──► /solutions
  ├──► /solutions/ai-strategy
  ├──► /solutions/ai-agents
  ├──► /solutions/automation
  ├──► /solutions/digital-products
  └──► /solutions/managed-operations
/ ──► /how-we-work
/ ──► /instinct
/ ──► /bizdaptive
/ ──► /contact
/ ──► /industries (when live)
/ ──► /about (footer)
```

---

## Next.js component map (Phase 1)

```text
app/
  layout.tsx              # site chrome, fonts, global metadata base
  page.tsx                # homepage composition (SSR)
  robots.ts               # Phase 7 can land early with allow-all + sitemap
  sitemap.ts              # start with home + known stubs as they ship
components/
  site-header.tsx         # locked nav + Solutions dropdown
  site-footer.tsx         # footer architecture
  home/
    home-hero.tsx
    home-category.tsx
    home-problem.tsx
    home-capabilities.tsx
    home-method.tsx
    home-instinct.tsx
    home-engagement.tsx
    home-bizdaptive.tsx
    home-domains.tsx
    home-close.tsx
  seo/
    json-ld.tsx           # Organization + WebSite inject
  ui/
    button-link.tsx
    section.tsx           # semantic section + container
lib/
  content/home.ts         # copy + links as data
  analytics.ts            # event helpers
```

**Accessibility:** one H1; H2 per section; H3 only inside capability/method/engagement blocks; focus-visible on CTAs; reduced-motion for any hero motion/video scrub.

**Performance:** hero media optional/deferred; critical copy in HTML; no content exclusive to client JS.

---

## Explicitly NOT on homepage

- 8-point process grids  
- Long solution bullet catalogs  
- Industry farm  
- Insights feed spam  
- Fake stats  
- “Top AI trends” framing  
- Commercials content  

---

## Phase 1 exit criteria

- [ ] Copy and hierarchy match this spec  
- [ ] Nav/footer match locked IA (Commercials untouched)  
- [ ] Metadata + Organization/WebSite JSON-LD live  
- [ ] Internal links to solution stubs / how-we-work / instinct / bizdaptive / contact  
- [ ] Mobile + keyboard usable  
- [ ] Homepage remains category page, not encyclopedia  

**Next after Phase 1 implementation:** Phase 2 — five Solutions pages using the shared page IA.
