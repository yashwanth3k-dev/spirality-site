"use client";

import { motion } from "motion/react";
import {
  FileSearch,
  FileSpreadsheet,
  Headset,
  Settings2,
  Sparkles,
  UserRoundPlus,
  type LucideIcon,
} from "lucide-react";
import "~/styles/glow-feature-cards.css";

export type GlowCardData = {
  title: string;
  description: string;
  icon: LucideIcon;
  delay: number;
};

export function FeatureCard({
  title,
  description,
  icon: Icon,
  delay,
}: GlowCardData) {
  return (
    <motion.article
      className="gfc-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-12% 0px -12% 0px", amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      <div className="gfc-icon" aria-hidden="true">
        <Icon size={18} strokeWidth={2.25} />
      </div>
      <h3 className="gfc-title">{title}</h3>
      <p className="gfc-desc">{description}</p>
    </motion.article>
  );
}

const AGENT_CARDS: GlowCardData[] = [
  {
    title: "Customer & Support Agents",
    description:
      "Handle enquiries, support requests, qualification and follow-ups.",
    icon: Headset,
    delay: 0.05,
  },
  {
    title: "Sales Agents",
    description:
      "Research leads, qualify prospects, update CRM records and keep follow-ups moving.",
    icon: UserRoundPlus,
    delay: 0.1,
  },
  {
    title: "Operations Agents",
    description:
      "Handle repetitive processes, move information between systems and coordinate routine work.",
    icon: Settings2,
    delay: 0.15,
  },
  {
    title: "Knowledge Agents",
    description:
      "Search business information, work with documents and prepare research, reports and answers.",
    icon: FileSearch,
    delay: 0.2,
  },
  {
    title: "Finance & Document Agents",
    description:
      "Process documents, perform checks and send exceptions to the right person.",
    icon: FileSpreadsheet,
    delay: 0.25,
  },
  {
    title: "Custom Business Agents",
    description:
      "Have a process that doesn't fit a category? We design the agent around it.",
    icon: Sparkles,
    delay: 0.3,
  },
];

export default function GlowFeatureCards({
  eyebrow,
  heading,
  intro,
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
}) {
  return (
    <section className="il-section sp-section gfc-section">
      <div className="il-inner">
        <div className="il-head">
          <div>
            <p className="il-eyebrow">{eyebrow}</p>
            <h2 className="il-h2">{heading}</h2>
            {intro ? <p className="il-lead">{intro}</p> : null}
          </div>
        </div>

        <div className="gfc-grid gfc-grid-6">
          {AGENT_CARDS.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
