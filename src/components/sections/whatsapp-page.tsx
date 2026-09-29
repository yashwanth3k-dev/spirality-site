"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Building2,
  Link2,
  MessageCircle,
  MessagesSquare,
  RefreshCw,
  Send,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import FooterLegal from "~/components/sections/footer-legal";
import { FeatureCard } from "~/components/sections/glow-feature-cards";
import SubpageNav from "~/components/sections/subpage-nav";
import { SCROLL_REVEAL_VIEWPORT } from "~/components/sections/scroll-reveal";
import { FOOTER, ROUTES, WHATSAPP_BLURB } from "~/lib/content/site";
import "~/styles/agent-flow.css";
import "~/styles/glow-feature-cards.css";
import "~/styles/home-sections.css";
import "~/styles/subpage.css";
import "~/styles/whatsapp.css";

const WHATSAPP_CARDS = [
  {
    title: "Conversations",
    description:
      "Staff manage customer conversations in Bizdaptive, on the client's own WhatsApp Business Account.",
    icon: MessagesSquare,
    delay: 0.05,
  },
  {
    title: "Templates",
    description:
      "The team creates WhatsApp message templates, such as appointment reminders, and sends them to that client's customers.",
    icon: Send,
    delay: 0.1,
  },
  {
    title: "Sync",
    description:
      "Message history stays in sync with the client's WhatsApp Business Account. A reply in Bizdaptive and a reply on the phone are the same thread.",
    icon: RefreshCw,
    delay: 0.15,
  },
  {
    title: "Their number",
    description:
      "The phone number, templates, and Meta charges stay with the client. Spirality does not send from its own WhatsApp number.",
    icon: Smartphone,
    delay: 0.2,
  },
] as const;

const FLOW: Array<{ title: string; line: string; icon: LucideIcon }> = [
  {
    title: "Connect",
    line: "The client connects their own WhatsApp Business Account.",
    icon: Link2,
  },
  {
    title: "Work the thread",
    line: "Their staff read and reply from Bizdaptive.",
    icon: MessageCircle,
  },
  {
    title: "Send a template",
    line: "Reminders and updates go out on the client's number.",
    icon: Send,
  },
  {
    title: "Stay in sync",
    line: "The workspace and the phone show the same conversation.",
    icon: RefreshCw,
  },
];

const CHANNELS = [
  {
    title: "Facebook",
    description:
      "A client connects their own Facebook Page. Their team uses Bizdaptive to read and reply to Messenger conversations for that Page.",
    icon: Building2,
    delay: 0.05,
  },
  {
    title: "Instagram",
    description:
      "A client connects their own Instagram professional account. Their team uses Bizdaptive to read and reply to Instagram messages and comments for that account.",
    icon: MessageCircle,
    delay: 0.1,
  },
] as const;

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path
        d="M5 12h13M13 6l6 6-6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhatsappPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="il-page sp-page">
      <SubpageNav />

      <header className="sp-hero" data-no-reveal>
        <div className="il-inner sp-hero-grid">
          <div className="sp-hero-copy">
            <p className="il-eyebrow">WhatsApp</p>
            <h1 className="sp-h1">
              Customer messaging for other businesses, in Bizdaptive
            </h1>
            <p className="il-lead il-lead-wide sp-hero-lead">
              {WHATSAPP_BLURB}
            </p>
            <div className="il-actions il-actions-start">
              <a className="il-btn il-btn-solid" href={ROUTES.contact}>
                Talk to Us <Arrow />
              </a>
            </div>
            <p className="sp-hero-support">
              Spirality Solutions ·{" "}
              <a href={`mailto:${FOOTER.email}`}>{FOOTER.email}</a>
            </p>
          </div>
        </div>
      </header>

      <section className="il-section sp-section gfc-section" id="whatsapp">
        <div className="il-inner">
          <div className="il-head">
            <div>
              <p className="il-eyebrow">Bizdaptive</p>
              <h2 className="il-h2">
                What the client&apos;s team does on WhatsApp
              </h2>
              <p className="il-lead">
                Conversations, templates, and sync all sit on the account the
                client already owns.
              </p>
            </div>
          </div>
          <div className="gfc-grid wa-channels">
            {WHATSAPP_CARDS.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="il-section sp-section af-section">
        <div className="il-inner">
          <div className="af-head">
            <p className="il-eyebrow">How it connects</p>
            <h2 className="il-h2">
              From their WhatsApp account into Bizdaptive
            </h2>
          </div>
          <ol className="wa-flow">
            {FLOW.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.li
                  key={step.title}
                  className="af-mobile-step"
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={SCROLL_REVEAL_VIEWPORT}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                    delay: reduceMotion ? 0 : i * 0.08,
                  }}
                >
                  <span className="af-mobile-rail" aria-hidden="true">
                    <span className="af-icon">
                      <Icon size={16} strokeWidth={2.25} />
                    </span>
                    {i < FLOW.length - 1 ? (
                      <span className="af-mobile-line" />
                    ) : null}
                  </span>
                  <div className="af-mobile-copy">
                    <h3 className="af-title">{step.title}</h3>
                    <p className="af-line">{step.line}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="il-section sp-section gfc-section">
        <div className="il-inner">
          <div className="il-head">
            <div>
              <p className="il-eyebrow">Also in Bizdaptive</p>
              <h2 className="il-h2">Facebook and Instagram</h2>
            </div>
          </div>
          <div className="wa-channels">
            {CHANNELS.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
          <p className="af-footer wa-close">
            Each client can access only their own accounts.
          </p>
          <p className="wa-signoff">
            Spirality Solutions,{" "}
            <a href={`mailto:${FOOTER.email}`}>{FOOTER.email}</a>
          </p>
        </div>
      </section>

      <footer className="il-footer">
        <div className="il-inner il-footer-grid">
          <div className="il-footer-brand">
            <p className="il-footer-mark">Spirality Solutions</p>
            <p>AI Systems & Managed Operations</p>
            <a href={`mailto:${FOOTER.email}`}>{FOOTER.email}</a>
          </div>
          {FOOTER.groups.map((group) => (
            <nav
              key={group.title}
              className="il-footer-col"
              aria-label={group.title}
            >
              <p className="il-footer-label">{group.title}</p>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href + link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <FooterLegal />
      </footer>
    </div>
  );
}
