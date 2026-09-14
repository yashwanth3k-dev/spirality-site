---
name: Spirality Solutions
description: Process Drafting Table — business systems delivery partner site
colors:
  draft-vellum: "#E6DFD0"
  draft-ink: "#0E0E0E"
  draft-blue: "#1539D1"
  draft-blue-deep: "#0A2478"
  draft-stamp: "#F5C518"
  draft-rule: "#9A8868"
  draft-mist: "#DFE8F8"
  draft-muted: "#3A352C"
  logo-dot: "#F5C518"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 7vw, 4.75rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  heading:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.14em"
rounded:
  none: "0px"
  sm: "2px"
spacing:
  section: "clamp(4.5rem, 10vw, 7.5rem)"
  wrap: "min(1120px, calc(100% - 2.5rem))"
components:
  button-primary:
    backgroundColor: "{colors.draft-ink}"
    textColor: "{colors.draft-vellum}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.25rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.draft-ink}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.25rem"
---

## Overview

Spirality’s marketing surface uses a **Process Drafting Table** world: vellum ground, inked process lines, title-block chrome, and scroll as a cranked procession through Diagnose → Engineer → Prove → Deliver. Voice is funny-professional and constrained to delivery depth (advise / build / run). Not an AI-glow SaaS template.

## Colors

- **Vellum** `#F2EFE6` — page ground
- **Ink** `#1A1A1A` — primary text and filled CTAs
- **Blueprint blue** `#1E3A8A` — process lines, active states, links
- **Rule** `#C4B8A0` — hairline dividers
- **Mist** `#EEF2F9` — band fills
- **Muted** `#5C574E` — secondary copy (tinted from ink/vellum scene, not gray-on-white)

## Typography

- Display/headings: **Bricolage Grotesque**
- Body: **Source Sans 3**
- Title-block / CTA / stage labels: **JetBrains Mono** (measurement language only)

## Layout

- Content measure ~1120px wrap
- Hero is a title-block sheet over a synthetic process diagram
- Engagement depths nest as dashed cut-lines (A/B/C)
- Capabilities as a continuum list, not equal icon cards
- Section rhythm via hairline rules; generous vertical padding

## Elevation & Depth

Prefer borders and paper layering over soft multi-shadow stacks. Title block may use one soft offset shadow. Corners use registration L-marks.

## Shapes

Zero radius on primary controls and frames (drafting furniture). Avoid pills except where a control is truly chip-sized.

## Components

- Primary CTA: filled ink rectangle, mono caps
- Secondary: 1px outline rectangle
- Sticky header on frosted vellum
- Method rail: sticky numbered ticks driving stage focus via intersection

## Do's and Don'ts

- Do structure scroll around the four-stage sequence
- Do keep copy concrete (diagnose, build, prove, run, maintain)
- Don’t invent client logos, metrics, or testimonials
- Don’t reintroduce AI-purple glow, Outfit display, or cinematic video hero as Spirality identity
- Don’t use eyebrow kickers above headings
