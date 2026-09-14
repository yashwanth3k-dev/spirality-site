"use client";

import { motion, useReducedMotion } from "motion/react";
import { Bot, Database, Users, Workflow, type LucideIcon } from "lucide-react";
import {
  SCROLL_REVEAL_EASE,
  SCROLL_REVEAL_VIEWPORT,
  cardReveal,
} from "~/components/sections/scroll-reveal";
import "~/styles/ops-model.css";

const ICONS: LucideIcon[] = [Users, Workflow, Bot, Database];

export default function OpsModel({
  eyebrow,
  heading,
  items,
  footer,
  scrollReveal = true,
}: {
  eyebrow: string;
  heading: string;
  items: Array<{ title: string; line: string }>;
  footer?: string;
  scrollReveal?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const live = scrollReveal && !reduceMotion;

  return (
    <section className="il-section sp-section om-section">
      <div className="il-inner">
        <div className="om-layout">
          <motion.div
            className="om-copy"
            initial={live ? { opacity: 0, x: -40 } : false}
            whileInView={live ? { opacity: 1, x: 0 } : undefined}
            viewport={live ? SCROLL_REVEAL_VIEWPORT : undefined}
            transition={{ duration: 0.6, ease: SCROLL_REVEAL_EASE }}
          >
            <p className="il-eyebrow">{eyebrow}</p>
            <h2 className="il-h2 om-heading">{heading}</h2>
            {footer ? <p className="om-footer">{footer}</p> : null}
          </motion.div>

          <div className="om-grid">
            {items.map((item, i) => {
              const Icon = ICONS[i] ?? Users;
              const reveal = cardReveal(i);
              return (
                <motion.article
                  key={item.title}
                  className="om-card"
                  initial={
                    live
                      ? { ...reveal.initial, x: 40 }
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
                    delay: reduceMotion ? 0 : i * (live ? 0.05 : 0.08),
                  }}
                >
                  <span className="om-card-icon" aria-hidden="true">
                    <Icon size={18} strokeWidth={2.25} />
                  </span>
                  <h3 className="om-card-title">{item.title}</h3>
                  <p className="om-card-line">{item.line}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
