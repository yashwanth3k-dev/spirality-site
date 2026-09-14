"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  BarChart3,
  Eye,
  Gauge,
  Layers,
  Link2,
  MessageSquare,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Timer,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  SCROLL_REVEAL_EASE,
  SCROLL_REVEAL_VIEWPORT,
  cardReveal,
} from "~/components/sections/scroll-reveal";
import "~/styles/systems-outcomes.css";

const ICON_SETS: Record<string, LucideIcon[]> = {
  systems: [Link2, Timer, MessageSquare, Sparkles],
  ops: [ShieldCheck, Gauge, Users, Eye, RefreshCw, Layers],
};

export default function SystemsOutcomes({
  eyebrow,
  heading,
  items,
  iconSet = "systems",
  scrollReveal = true,
}: {
  eyebrow: string;
  heading: string;
  items: Array<{ title: string; line: string }>;
  iconSet?: "systems" | "ops";
  scrollReveal?: boolean;
}) {
  const icons = ICON_SETS[iconSet] ?? ICON_SETS.systems;
  const reduceMotion = useReducedMotion();
  const live = scrollReveal && !reduceMotion;

  return (
    <section className="il-section sp-section so-section">
      <div className="il-inner">
        <motion.div
          className="il-head"
          initial={live ? { opacity: 0, y: -28 } : false}
          whileInView={live ? { opacity: 1, y: 0 } : undefined}
          viewport={live ? SCROLL_REVEAL_VIEWPORT : undefined}
          transition={{ duration: 0.55, ease: SCROLL_REVEAL_EASE }}
        >
          <div>
            <p className="il-eyebrow">{eyebrow}</p>
            <h2 className="il-h2 so-heading">{heading}</h2>
          </div>
        </motion.div>

        <div className="so-grid" data-count={items.length}>
          {items.map((item, i) => {
            const Icon = icons[i] ?? BarChart3;
            const reveal = cardReveal(i);
            return (
              <motion.article
                key={item.title}
                className="so-card"
                initial={
                  live
                    ? reveal.initial
                    : reduceMotion
                      ? false
                      : { opacity: 0, y: 16 }
                }
                whileInView={live ? reveal.whileInView : { opacity: 1, y: 0 }}
                viewport={
                  live ? SCROLL_REVEAL_VIEWPORT : { once: true, amount: 0.3 }
                }
                transition={{
                  duration: 0.5,
                  ease: live ? SCROLL_REVEAL_EASE : "easeOut",
                  delay: reduceMotion ? 0 : i * (live ? 0.05 : 0.07),
                }}
              >
                <span className="so-icon" aria-hidden="true">
                  <Icon size={18} strokeWidth={2.25} />
                </span>
                <h3 className="so-title">{item.title}</h3>
                <p className="so-line">{item.line}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
