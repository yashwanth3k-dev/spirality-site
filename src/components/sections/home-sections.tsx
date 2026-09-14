import BridgeSection from "~/components/sections/bridge-section";
import BrandLogo from "~/components/sections/brand-logo";
import FooterLegal from "~/components/sections/footer-legal";
import OfferCard from "~/components/sections/offer-card";
import SpotlightCard from "~/components/sections/spotlight-card";
import { BENEFITS, CLOSE, FOOTER, OFFER, SECTIONS } from "~/lib/content/home";
import { SECTION_ICONS } from "~/lib/content/section-icons";
import "~/styles/home-sections.css";

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

export default function HomeSections() {
  return (
    <>
      {/* what we offer */}
      <section className="il-section" id={SECTIONS.offer}>
        <div className="il-inner">
          <div className="il-head">
            <div>
              <p className="il-eyebrow">{OFFER.eyebrow}</p>
              <h2 className="il-h2">{OFFER.heading}</h2>
            </div>
            <p className="il-lead">{OFFER.intro}</p>
          </div>

          <div className="il-offer-row">
            {OFFER.items.map((item) => (
              <OfferCard
                key={item.title}
                title={item.title}
                line={item.line}
                href={item.href}
                iconSrc={item.iconSrc}
                iconAlt={item.iconAlt}
                badge={item.badge}
                imageSrc={item.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* bridge — full scroll stage from concept-3 Home.dc.html */}
      <BridgeSection id={SECTIONS.solution} />

      {/* benefits */}
      <section className="il-section" id={SECTIONS.benefits}>
        <div className="il-inner">
          <div className="il-head">
            <div>
              <p className="il-eyebrow">{BENEFITS.eyebrow}</p>
              <h2 className="il-h2">{BENEFITS.heading}</h2>
            </div>
            <p className="il-lead">{BENEFITS.intro}</p>
          </div>

          <div className="il-grid-3">
            {BENEFITS.items.map((item) => {
              const Icon = SECTION_ICONS[item.icon];
              return (
                <SpotlightCard
                  key={item.title}
                  className="il-card il-benefit-card"
                >
                  <span className="il-icon-wrap" aria-hidden="true">
                    <Icon className="il-icon" strokeWidth={1.6} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.line}</p>
                  <span className="il-dots" aria-hidden="true" />
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* closing CTA */}
      <section className="il-section" id={SECTIONS.close}>
        <div className="il-inner">
          <div className="il-band">
            <p className="il-eyebrow il-eyebrow-center">{CLOSE.eyebrow}</p>
            <h2 className="il-h2">{CLOSE.heading}</h2>
            <p className="il-lead">{CLOSE.body}</p>
            <div className="il-actions">
              <a className="il-btn il-btn-solid" href={CLOSE.primary.href}>
                {CLOSE.primary.label} <Arrow />
              </a>
              <a className="il-btn il-btn-ghost" href={CLOSE.secondary.href}>
                {CLOSE.secondary.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="il-footer">
        <div className="il-inner il-footer-grid">
          <div className="il-footer-brand">
            <span className="il-footer-mark">
              <BrandLogo />
            </span>
            <p>AI Systems &amp; Managed Operations</p>
            <a href={`mailto:${FOOTER.email}`}>{FOOTER.email}</a>
          </div>

          {FOOTER.groups.map((group) => (
            <nav
              className="il-footer-col"
              key={group.title}
              aria-label={group.title}
            >
              <p className="il-footer-label">{group.title}</p>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <FooterLegal />
      </footer>
    </>
  );
}
