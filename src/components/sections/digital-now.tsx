"use client";

import { motion } from "motion/react";
import {
  Accessibility,
  Bot,
  Gauge,
  MessageSquare,
  Radar,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import "~/styles/digital-now.css";

const ICON_SETS: Record<string, LucideIcon[]> = {
  digital: [Radar, Gauge, Smartphone, Accessibility, RefreshCw],
  systems: [Sparkles, MessageSquare, Workflow, ShieldCheck],
};

export default function DigitalNow({
  eyebrow,
  heading,
  items,
  footer,
  iconSet = "digital",
}: {
  eyebrow: string;
  heading: string;
  items: Array<{ title: string; line: string }>;
  footer?: string;
  iconSet?: "digital" | "systems" | "ops";
}) {
  const icons = ICON_SETS[iconSet] ?? ICON_SETS.digital;

  return (
    <section className="il-section sp-section dn-section">
      <div className="il-inner">
        <div className="dn-layout">
          <div className="dn-copy">
            <p className="il-eyebrow">{eyebrow}</p>
            <h2 className="il-h2 dn-heading">{heading}</h2>
            {footer ? <p className="dn-footer">{footer}</p> : null}
          </div>

          <ul className="dn-list">
            {items.map((item, i) => {
              const Icon = icons[i] ?? Bot;
              return (
                <motion.li
                  key={item.title}
                  className="dn-item"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{
                    once: false,
                    margin: "-12% 0px -12% 0px",
                    amount: 0.4,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: i * 0.07,
                  }}
                >
                  <span className="dn-icon" aria-hidden="true">
                    <Icon size={18} strokeWidth={2.25} />
                  </span>
                  <div>
                    <h3 className="dn-title">{item.title}</h3>
                    <p className="dn-line">{item.line}</p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
