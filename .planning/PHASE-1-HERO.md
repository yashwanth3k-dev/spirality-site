# Phase 1 — Homepage Hero (locked)

**Scope:** Content, messaging, structure, animation behavior, SEO hierarchy, TSX requirements.  
**Out of scope:** Commercials. Template SaaS copy (“unified infrastructure platform…”).  
**Visual concept to keep:** Two-sided hero + central visual anchor + scroll-driven narrative.

---

## Narrative

**AI → Business Context → Operational System → Real Outcome**

Told as one story across two headings:

| Side | Role | Meaning |
|------|------|---------|
| Left | Possibility | Intelligence is available; advantage is how it’s engineered in |
| Right | Outcome | Assembled around *this* business, then put to work |

Central visual stays the anchor (video / cinematic plate). Copy tells the story; the visual does not compete with cards, stats, or badges.

---

## Production copy (exact)

### Eyebrow (optional, above left — do not overpower H1)

`AI Systems & Managed Operations`

### Left — the possibility

**Heading (part of H1 story):**  
The Next Layer  
of Intelligence

**Supporting copy:**  
AI is becoming easier to access. The advantage comes from how it is engineered into the business.

### Right — the outcome

**Heading (completes the H1 story):**  
Built Around  
Your Business

**Supporting copy:**  
We assemble AI around your processes, rules, context and edge cases — then put it to work.

### CTAs (persist through both states; primary always clear)

| Priority | Label | Href |
|----------|-------|------|
| Primary | Talk to Us | `/contact` |
| Secondary | See how we work | `/how-we-work` |

### Explicitly do **not** use

- “A unified infrastructure platform to help teams build, ship, and scale AI systems with confidence.”
- “Get Started” as the primary conversion label on homepage (use **Talk to Us**).
- “View Architecture” unless later tied to a real architecture page.
- Stats, badge chips, logoipsum partner strip in the first viewport (partner strip may return later below the fold if needed — not in hero composition budget).

---

## SEO heading hierarchy (hero)

**One H1 for the page**, composed as a single accessible heading that screen readers and crawlers get as one string.

### Recommended accessible H1 (DOM)

```html
<h1 class="hero-title">
  <span class="hero-title-left" aria-hidden="false">
    <span>The Next Layer</span>
    <span>of Intelligence</span>
  </span>
  <span class="hero-title-sep visually-hidden"> — </span>
  <span class="hero-title-right">
    <span>Built Around</span>
    <span>Your Business</span>
  </span>
</h1>
```

**Effective H1 text for SEO / SR:**  
`The Next Layer of Intelligence — Built Around Your Business`

**Rules**

- Do **not** use two separate `<h1>` elements.
- Left/right visual split is CSS/layout only.
- Supporting paragraphs are `<p>`, never headings.
- Eyebrow is `<p>` or `<span>`, not `<h2>`.
- First true `<h2>` appears in **Section 2** (not in the hero).

**Title tag / meta (homepage — unchanged intent)**

- Title: `Spirality Solutions | AI Systems & Managed Operations`
- Description: Lead with proposition, not SaaS platform language.  
  Example: `We don't sell you AI. We assemble it around your business — processes, rules, context and edge cases, engineered and put to work.`

---

## Composition / structure

### First viewport = one composition

1. Brand mark (header)  
2. Primary nav + Talk to Us  
3. **Single H1** (two visual columns)  
4. Supporting copy that swaps/crossfades with scroll state  
5. CTA pair  
6. Central full-bleed visual (video plate)  

No cards, no stats, no secondary marketing blocks in the hero.

### Layout (desktop)

```
┌─────────────────────────────────────────────────────────┐
│  mark          nav…                    [ Talk to Us ]   │
│                                                         │
│  LEFT COPY          │  VISUAL  │         RIGHT COPY     │
│  (possibility)      │  ANCHOR  │         (outcome)      │
│                     │          │                        │
│  [Talk to Us]  [See how we work]                        │
└─────────────────────────────────────────────────────────┘
```

- Left column anchored ~brand left margin.  
- Right column mirrored / emerging from right or sitting in right third.  
- Visual is full-bleed behind both (not an inset card).  
- On mobile: stack **left state first**; scroll advances to **right state**; then Section 2.

---

## Animation / content states

Use scroll progress `p` over a sticky hero track (~180–220vh). Prefer CSS variables + rAF lerp. Respect `prefers-reduced-motion: reduce` → show **final combined state** (both ideas readable) with no scrub/zoom.

### State A — Initial (`p ≈ 0`)

| Element | Behavior |
|---------|----------|
| Left heading | Fully visible, opacity 1, scale ~1 |
| Left supporting copy | Visible |
| Right heading | Partially visible / faded (opacity ~0.18–0.28), slightly offset right or down |
| Right supporting copy | Hidden or opacity ~0 |
| Central visual | Dominant; mild letterbox OK |
| CTAs | Visible, opacity 1 |
| UI chrome | Visible |

**Reading at State A:** “The Next Layer of Intelligence” + possibility copy.

### State B — Mid scroll (`p ≈ 0.35–0.55`)

| Element | Behavior |
|---------|----------|
| Left heading | Scales up / zooms gently (e.g. 1 → 1.08–1.15), opacity falling (1 → ~0.35) |
| Left copy | Fades with left heading |
| Right heading | Moves into focus (opacity → 1), settles to final position |
| Right copy | Crossfades in |
| Central visual | Remains anchor; optional widen/zoom toward subject (keep restrained) |
| CTAs | Stay readable (fade no lower than ~0.85 until deep zoom) |

**Reading at State B:** Story turns from possibility → outcome.

### State C — Deep / exit (`p ≈ 0.75–1`)

| Element | Behavior |
|---------|----------|
| Left heading | Mostly faded / scaled through |
| Right heading | Primary focus (or both briefly balanced then right leads) |
| Right copy | Fully readable |
| Visual | Widened / slightly zoomed; still behind type |
| Next section | Begins to emerge under sticky release |

**Reading at State C:** “Built Around Your Business” + assemble/put-to-work copy → into Section 2.

### Motion principles

- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`  
- No glow orbs, no purple, no decorative gradient as the main idea  
- Video scrub optional; if used, must not block text readability  
- Reduced motion: static dual-read layout (left + right both legible without scroll theatre)

### Content transition rules

- Only **one** supporting paragraph “owns” attention at a time (left copy XOR right copy at high opacity).  
- Do not animate in unrelated marketing lines during the hero.  
- CTA labels do not change mid-scroll.

---

## Messaging QA (hero)

| Check | Pass criteria |
|-------|----------------|
| Category | Feels like systems + operations, not SaaS platform |
| Differentiation | “Engineered into the business” + “assemble around processes/rules/context/edge cases” |
| Not commodity | Does not sell “a model” or “a chatbot” |
| Brand test | Removing nav, still reads as Spirality proposition |
| CTA honesty | Talk to Us / How we work — not fake product signup |

---

## TSX implementation requirements

### Files

```text
components/home/home-hero.tsx          # client: scroll states only
components/home/home-hero.module.css   # or scoped <style> / globals under .home-hero
lib/content/home-hero.ts               # exact copy strings (single source)
```

### Data contract (`lib/content/home-hero.ts`)

```ts
export const homeHero = {
  eyebrow: "AI Systems & Managed Operations",
  left: {
    lines: ["The Next Layer", "of Intelligence"] as const,
    body: "AI is becoming easier to access. The advantage comes from how it is engineered into the business.",
  },
  right: {
    lines: ["Built Around", "Your Business"] as const,
    body: "We assemble AI around your processes, rules, context and edge cases — then put it to work.",
  },
  primaryCta: { label: "Talk to Us", href: "/contact" },
  secondaryCta: { label: "See how we work", href: "/how-we-work" },
} as const;
```

### Component behavior

1. **Server-renderable text** — all copy in HTML on first paint (not injected after mount).  
2. **Client island** only for scroll progress → CSS variables:  
   `--p`, `--left-opacity`, `--left-scale`, `--right-opacity`, `--right-x`, `--copy-left`, `--copy-right`, `--visual-zoom`.  
3. **Sticky track** wrapper: outer tall section, inner `position: sticky; top: 0; min-height: 100dvh`.  
4. **Semantic structure:**

```tsx
<section className="home-hero" aria-label="Introduction">
  <div className="home-hero__track">
    <div className="home-hero__stage">
      <div className="home-hero__visual" aria-hidden="true">{/* video */}</div>
      <h1>…left + visually-hidden sep + right…</h1>
      <p data-side="left">…</p>
      <p data-side="right">…</p>
      <div className="home-hero__actions">…Link CTAs…</div>
    </div>
  </div>
</section>
```

5. **No second H1** elsewhere on the page.  
6. **Analytics:** `cta_click` on both CTAs with `location: "home_hero"`.  
7. **A11y:** focusable CTAs always; when `--p` deep-zooms UI, do not `visibility:hidden` CTAs until sticky unlock (prefer opacity only while still in hero).  
8. **Performance:** `preload="metadata"` or `auto` for hero video; `muted playsInline`; poster optional; don’t load Got-page video here.

### CSS variable mapping (suggested)

| Progress `p` | `--left-opacity` | `--left-scale` | `--right-opacity` | `--copy-left` | `--copy-right` |
|--------------|------------------|----------------|-------------------|---------------|----------------|
| 0 | 1 | 1 | 0.22 | 1 | 0 |
| 0.45 | 0.45 | 1.1 | 0.85 | 0.3 | 0.85 |
| 1 | 0.08 | 1.18 | 1 | 0 | 1 |

---

## Hand-off checklist (hero done when)

- [ ] Exact copy above is in `lib/content/home-hero.ts`  
- [ ] Single H1 string matches SEO form  
- [ ] States A → B → C match scroll behavior  
- [ ] No SaaS-platform supporting line  
- [ ] CTAs = Talk to Us / See how we work  
- [ ] Central visual remains anchor  
- [ ] Reduced-motion fallback defined  
- [ ] Ready to specify **Section 2** next  

---

## Next

**Section 2** — Category / proposition strip (first `<h2>`, short, no encyclopedia).
