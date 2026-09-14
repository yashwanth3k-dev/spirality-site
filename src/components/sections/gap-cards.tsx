"use client";

import { motion } from "motion/react";
import { BookOpen, Hand, ShieldCheck, type LucideIcon } from "lucide-react";
import "~/styles/gap-cards.css";

type GapCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: "blue" | "pink" | "green";
  delay: number;
};

const CARDS: GapCard[] = [
  {
    title: "Context first",
    description:
      "Policies, tone, edge cases, and system access before model choice — so the agent knows your desk, not a demo script.",
    icon: Hand,
    tone: "blue",
    delay: 0.1,
  },
  {
    title: "Action with brakes",
    description:
      "Tools and write-backs with escalation paths you can audit. Autonomy stops where judgment still belongs to people.",
    icon: BookOpen,
    tone: "pink",
    delay: 0.2,
  },
  {
    title: "Owned after launch",
    description:
      "Monitoring, prompts, and failure review — not a one-week pilot dump that nobody answers when it breaks.",
    icon: ShieldCheck,
    tone: "green",
    delay: 0.3,
  },
];

export default function GapCards({
  eyebrow,
  heading,
  body,
}: {
  eyebrow: string;
  heading: string;
  body: string;
}) {
  return (
    <section className="il-section sp-section gap-section">
      <div className="il-inner">
        <div className="gap-head">
          <p className="il-eyebrow">{eyebrow}</p>
          <h2 className="gap-heading">{heading}</h2>
          <p className="gap-sub">{body}</p>
        </div>

        <div className="gap-grid">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                className="gap-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: card.delay,
                }}
              >
                <div
                  className={`gap-icon gap-icon-${card.tone}`}
                  aria-hidden="true"
                >
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3 className="gap-card-title">{card.title}</h3>
                <p className="gap-card-desc">{card.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
