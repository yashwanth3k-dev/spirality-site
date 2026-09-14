"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  AppWindow,
  BriefcaseBusiness,
  ClipboardList,
  ContactRound,
  Gauge,
  GitBranch,
  Globe2,
  Handshake,
  Headset,
  LayoutDashboard,
  Palette,
  Search,
  Sparkles,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import {
  SCROLL_REVEAL_EASE,
  SCROLL_REVEAL_VIEWPORT,
  cardReveal,
} from "~/components/sections/scroll-reveal";
import "~/styles/digital-offer-cards.css";

const ICON_SETS: Record<string, LucideIcon[]> = {
  digital: [Globe2, LayoutDashboard, Palette, Search],
  systems: [ContactRound, GitBranch, Gauge, AppWindow],
  ops: [Headset, BriefcaseBusiness, ClipboardList, Handshake],
  opsEngage: [UsersRound, Handshake, Sparkles, Gauge],
};

export default function DigitalOfferCards({
  eyebrow,
  heading,
  items,
  iconSet = "digital",
  scrollReveal = true,
}: {
  eyebrow: string;
  heading: string;
  items: Array<{ title: string; line: string; tags?: string }>;
  iconSet?: "digital" | "systems" | "ops" | "opsEngage";
  scrollReveal?: boolean;
}) {
  const icons = ICON_SETS[iconSet] ?? ICON_SETS.digital;
  const reduceMotion = useReducedMotion();
  const live = scrollReveal && !reduceMotion;

  return (
    <section className="il-section sp-section doc-section">
      <div className="il-inner">
        <motion.div
          className="il-head"
          initial={live ? { opacity: 0, y: 28 } : false}
          whileInView={live ? { opacity: 1, y: 0 } : undefined}
          viewport={live ? SCROLL_REVEAL_VIEWPORT : undefined}
          transition={{ duration: 0.55, ease: SCROLL_REVEAL_EASE }}
        >
          <div>
            <p className="il-eyebrow">{eyebrow}</p>
            <h2 className="il-h2 doc-heading">{heading}</h2>
          </div>
        </motion.div>

        <div className="doc-grid">
          {items.map((item, i) => {
            const Icon = icons[i] ?? Globe2;
            const reveal = cardReveal(i);
            return (
              <motion.article
                key={item.title}
                className="doc-card"
                initial={
                  live
                    ? reveal.initial
                    : reduceMotion
                      ? false
                      : { opacity: 0, y: 18 }
                }
                whileInView={live ? reveal.whileInView : { opacity: 1, y: 0 }}
                viewport={
                  live ? SCROLL_REVEAL_VIEWPORT : { once: true, amount: 0.3 }
                }
                transition={{
                  duration: live ? 0.55 : 0.55,
                  ease: live ? SCROLL_REVEAL_EASE : "easeOut",
                  delay: reduceMotion ? 0 : i * (live ? 0.05 : 0.08),
                }}
              >
                <span className="doc-icon" aria-hidden="true">
                  <Icon size={18} strokeWidth={2.25} />
                </span>
                <h3 className="doc-title">{item.title}</h3>
                <p className="doc-line">{item.line}</p>
                {item.tags ? <p className="doc-tags">{item.tags}</p> : null}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
