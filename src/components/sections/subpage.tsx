import SubpageNav from "~/components/sections/subpage-nav";
import AgentFlow from "~/components/sections/agent-flow";
import ChatbotLottie from "~/components/sections/chatbot-lottie";
import WebsiteDesignLottie from "~/components/sections/website-design-lottie";
import KanbanLottie from "~/components/sections/kanban-lottie";
import HeadphoneLottie from "~/components/sections/headphone-lottie";
import DigitalDelivery from "~/components/sections/digital-delivery";
import DigitalNow from "~/components/sections/digital-now";
import DigitalOfferCards from "~/components/sections/digital-offer-cards";
import GapCards from "~/components/sections/gap-cards";
import GlowFeatureCards from "~/components/sections/glow-feature-cards";
import OutcomeCards from "~/components/sections/outcome-cards";
import SystemsConnect from "~/components/sections/systems-connect";
import SystemsOutcomes from "~/components/sections/systems-outcomes";
import OpsModel from "~/components/sections/ops-model";
import AgentUseCases from "~/components/sections/agent-use-cases";
import FooterLegal from "~/components/sections/footer-legal";
import ScrollReveal from "~/components/sections/scroll-reveal";
import { FOOTER, ROUTES } from "~/lib/content/home";
import { cn } from "~/lib/utils";
import {
  type SubpageContent,
  type SubpageSection,
} from "~/lib/content/subpages";
import "~/styles/home-sections.css";
import "~/styles/subpage.css";

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

function SectionBlock({
  section,
  scrollReveal = false,
}: {
  section: SubpageSection;
  scrollReveal?: boolean;
}) {
  switch (section.kind) {
    case "split":
      return (
        <section className="il-section sp-section" id={section.id}>
          <div className="il-inner sp-split">
            <div className="sp-split-copy">
              <p className="il-eyebrow">{section.eyebrow}</p>
              <h2 className="il-h2">{section.heading}</h2>
              <p className="il-lead il-lead-wide">{section.body}</p>
            </div>
            {section.points?.length ? (
              <dl className="sp-points">
                {section.points.map((p) => (
                  <div key={p.term} className="sp-point">
                    <dt>{p.term}</dt>
                    <dd>{p.line}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>
        </section>
      );

    case "list":
      return (
        <section className="il-section sp-section" id={section.id}>
          <div className="il-inner">
            <div className="il-head">
              <div>
                <p className="il-eyebrow">{section.eyebrow}</p>
                <h2 className="il-h2">{section.heading}</h2>
                {section.intro ? (
                  <p className="il-lead">{section.intro}</p>
                ) : null}
              </div>
            </div>
            <ol className="sp-list">
              {section.items.map((item, i) => (
                <li key={item.title} className="sp-list-item">
                  <span className="sp-list-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="sp-list-title">
                      {item.href ? (
                        <a className="sp-list-link" href={item.href}>
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                    </h3>
                    <p className="sp-list-line">{item.line}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      );

    case "glowCards":
      return (
        <GlowFeatureCards
          eyebrow={section.eyebrow}
          heading={section.heading}
          intro={section.intro}
        />
      );

    case "agentFlow":
      return (
        <AgentFlow
          eyebrow={section.eyebrow}
          heading={section.heading}
          footer={section.footer}
        />
      );

    case "agentUseCases":
      return (
        <AgentUseCases
          eyebrow={section.eyebrow}
          heading={section.heading}
          footer={section.footer}
          items={section.items}
        />
      );

    case "outcomeCards":
      return (
        <OutcomeCards
          eyebrow={section.eyebrow}
          heading={section.heading}
          bridge={section.bridge}
        />
      );

    case "gapCards":
      return (
        <GapCards
          eyebrow={section.eyebrow}
          heading={section.heading}
          body={section.body}
        />
      );

    case "offerCards":
      return (
        <DigitalOfferCards
          eyebrow={section.eyebrow}
          heading={section.heading}
          items={section.items}
          iconSet={section.iconSet}
          scrollReveal={scrollReveal}
        />
      );

    case "principles":
      return (
        <DigitalNow
          eyebrow={section.eyebrow}
          heading={section.heading}
          items={section.items}
          footer={section.footer}
          iconSet={section.iconSet}
        />
      );

    case "systemsConnect":
      return (
        <SystemsConnect
          eyebrow={section.eyebrow}
          heading={section.heading}
          body={section.body}
          channels={section.channels}
        />
      );

    case "systemsOutcomes":
      return (
        <SystemsOutcomes
          eyebrow={section.eyebrow}
          heading={section.heading}
          items={section.items}
          iconSet={section.iconSet}
          scrollReveal={scrollReveal}
        />
      );

    case "opsModel":
      return (
        <OpsModel
          eyebrow={section.eyebrow}
          heading={section.heading}
          footer={section.footer}
          items={section.items}
          scrollReveal={scrollReveal}
        />
      );

    case "deliverySteps":
      return (
        <DigitalDelivery
          eyebrow={section.eyebrow}
          heading={section.heading}
          footer={section.footer}
          steps={section.steps}
        />
      );

    case "steps":
      return (
        <section className="il-section sp-section" id={section.id}>
          <div className="il-inner">
            <div className="il-head">
              <div>
                <p className="il-eyebrow">{section.eyebrow}</p>
                <h2 className="il-h2">{section.heading}</h2>
                {section.intro ? (
                  <p className="il-lead">{section.intro}</p>
                ) : null}
              </div>
            </div>
            <ol className="sp-steps">
              {section.steps.map((step, i) => (
                <li key={step.title} className="sp-step">
                  <span className="sp-step-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="sp-step-title">{step.title}</h3>
                  <p className="sp-step-line">{step.line}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      );

    case "grid":
      return (
        <section className="il-section sp-section" id={section.id}>
          <div className="il-inner">
            <div className="il-head">
              <div>
                <p className="il-eyebrow">{section.eyebrow}</p>
                <h2 className="il-h2">{section.heading}</h2>
                {section.intro ? (
                  <p className="il-lead">{section.intro}</p>
                ) : null}
              </div>
            </div>
            <ul className="sp-grid">
              {section.items.map((item) => (
                <li key={item.title} className="sp-grid-item">
                  {item.meta ? (
                    <span className="sp-grid-meta">{item.meta}</span>
                  ) : null}
                  <h3 className="sp-grid-title">{item.title}</h3>
                  <p className="sp-grid-line">{item.line}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      );

    case "articles":
      return (
        <section className="il-section sp-section" id={section.id}>
          <div className="il-inner">
            <div className="il-head">
              <div>
                <p className="il-eyebrow">{section.eyebrow}</p>
                <h2 className="il-h2">{section.heading}</h2>
                {section.intro ? (
                  <p className="il-lead">{section.intro}</p>
                ) : null}
              </div>
            </div>
            <ul className="sp-articles">
              {section.items.map((item) => (
                <li key={item.href}>
                  <a className="sp-article" href={item.href}>
                    <div className="sp-article-meta">
                      <span>{item.tag}</span>
                      <time dateTime={item.date}>{item.date}</time>
                    </div>
                    <h3 className="sp-article-title">{item.title}</h3>
                    <p className="sp-article-line">{item.line}</p>
                    <span className="sp-article-go">
                      Read <Arrow />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      );

    default:
      return null;
  }
}

export default function Subpage({ page }: { page: SubpageContent }) {
  const primary = page.primaryCta ?? {
    label: "Talk to Us",
    href: ROUTES.contact,
  };
  const secondary = page.secondaryCta;
  const closeCtaLabel = page.close?.ctaLabel ?? primary.label;
  /* Bidirectional scroll reveal on all marketing subpages (footer stays static). */
  const scrollReveal = page.scrollReveal !== false;

  const heroCopy = (
    <div className="sp-hero-copy">
      <p className="il-eyebrow">{page.eyebrow}</p>
      <h1 className="sp-h1">{page.title}</h1>
      <p className="il-lead il-lead-wide sp-hero-lead">{page.lead}</p>
      {page.tagline ? <p className="sp-hero-tagline">{page.tagline}</p> : null}
      <div className="il-actions il-actions-start">
        <a className="il-btn il-btn-solid" href={primary.href}>
          {primary.label} <Arrow />
        </a>
        {secondary ? (
          <a className="il-btn il-btn-ghost" href={secondary.href}>
            {secondary.label}
          </a>
        ) : null}
      </div>
      {page.heroSupport ? (
        <p className="sp-hero-support">{page.heroSupport}</p>
      ) : null}
    </div>
  );

  const heroMedia =
    page.heroVisual === "chatbot" ? (
      <div className="sp-hero-media">
        <ChatbotLottie className="sp-hero-media-frame" />
      </div>
    ) : page.heroVisual === "website-design" ? (
      <div className="sp-hero-media">
        <WebsiteDesignLottie className="sp-hero-media-frame sp-hero-media-frame--square" />
      </div>
    ) : page.heroVisual === "kanban" ? (
      <div className="sp-hero-media">
        <KanbanLottie className="sp-hero-media-frame sp-hero-media-frame--wide" />
      </div>
    ) : page.heroVisual === "headphone" ? (
      <div className="sp-hero-media">
        <HeadphoneLottie className="sp-hero-media-frame sp-hero-media-frame--square" />
      </div>
    ) : null;

  const closeBlock = page.close ? (
    <section className="il-section sp-close">
      <div className="il-inner sp-close-inner">
        <p className="il-eyebrow">{page.close.eyebrow}</p>
        <h2 className="il-h2">{page.close.heading}</h2>
        <p className="il-lead il-lead-wide">{page.close.body}</p>
        <div className="il-actions sp-close-actions">
          <a className="il-btn il-btn-solid" href={primary.href}>
            {closeCtaLabel} <Arrow />
          </a>
        </div>
        {page.close.note ? (
          <p className="sp-close-note">{page.close.note}</p>
        ) : null}
      </div>
    </section>
  ) : null;

  return (
    <div className="il-page sp-page">
      <SubpageNav />

      <header
        className={cn("sp-hero", page.heroVisual && "sp-hero-visual")}
        data-no-reveal
      >
        <div className="il-inner sp-hero-grid">
          {heroCopy}
          {heroMedia}
        </div>
      </header>

      {page.sections.map((section, i) => (
        <SectionBlock
          key={`${section.kind}-${section.eyebrow}-${i}`}
          section={section}
          scrollReveal={scrollReveal}
        />
      ))}

      {closeBlock ? (
        scrollReveal ? (
          <ScrollReveal direction="up" amount={0.35}>
            {closeBlock}
          </ScrollReveal>
        ) : (
          closeBlock
        )
      ) : null}

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
