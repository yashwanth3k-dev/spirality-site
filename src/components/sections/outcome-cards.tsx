"use client";

import { motion } from "motion/react";
import { Gauge, Shield, Timer, Users, type LucideIcon } from "lucide-react";
import "~/styles/outcome-cards.css";

type Outcome = {
  title: string;
  description: string;
  icon: LucideIcon;
  delay: number;
};

const OUTCOMES: Outcome[] = [
  {
    title: "Less Manual Work",
    description: "Take repetitive tasks away from your team.",
    icon: Timer,
    delay: 0.08,
  },
  {
    title: "Faster Processes",
    description:
      "Move work forward without waiting for every step to be handled manually.",
    icon: Gauge,
    delay: 0.12,
  },
  {
    title: "More Team Capacity",
    description:
      "Let people focus on work that needs judgement, experience and relationships.",
    icon: Users,
    delay: 0.16,
  },
  {
    title: "Controlled Automation",
    description:
      "Automate within defined boundaries and bring people in when needed.",
    icon: Shield,
    delay: 0.2,
  },
];

export default function OutcomeCards({
  eyebrow,
  heading,
  bridge,
}: {
  eyebrow: string;
  heading: string;
  bridge: string;
}) {
  return (
    <section className="il-section sp-section oc-section">
      <div className="il-inner oc-layout">
        <div className="oc-copy">
          <p className="il-eyebrow">{eyebrow}</p>
          <h2 className="oc-heading">{heading}</h2>
          <p className="oc-bridge">{bridge}</p>
        </div>

        <div className="oc-grid">
          {OUTCOMES.map((card) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                className="oc-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: false,
                  margin: "-12% 0px -12% 0px",
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: card.delay,
                }}
              >
                <Icon
                  className="oc-icon"
                  size={22}
                  strokeWidth={1.75}
                  aria-hidden
                />
                <h3 className="oc-title">{card.title}</h3>
                <p className="oc-desc">{card.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
