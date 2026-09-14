import AboutUsLottie from "~/components/sections/about-us-lottie";
import { ArrowIcon, UseCaseIcon } from "~/components/sections/use-case-icons";
import {
  ABOUT_BELIEFS,
  ABOUT_CLOSE,
  ABOUT_DIRECTION,
  ABOUT_FOUNDERS,
  ABOUT_INDEX,
  ABOUT_ORIGIN,
} from "~/lib/content/about";
import { FOOTER, ROUTES } from "~/lib/content/home";
import "~/styles/about-hub.css";

export default function AboutHub() {
  return (
    <main className="abt-main">
      <header className="abt-hero">
        <div className="abt-hero-scrim" aria-hidden />
        <div className="uch-inner abt-hero-grid">
          <div className="abt-hero-copy">
            <div className="uch-badge">
              <span className="uch-badge-dot" aria-hidden />
              <span className="uch-badge-label">{ABOUT_INDEX.eyebrow}</span>
            </div>
            <h1 className="abt-h1">
              {ABOUT_INDEX.titleLead}{" "}
              <span className="abt-h1-accent">{ABOUT_INDEX.titleAccent}</span>
              <span className="abt-h1-break">{ABOUT_INDEX.titleBreak}</span>
            </h1>
            <p className="abt-lead">{ABOUT_INDEX.lead}</p>
            <div className="uch-actions">
              <a className="uch-btn uch-btn-solid" href={ROUTES.contact}>
                Talk to Us <ArrowIcon />
              </a>
              <a className="uch-btn uch-btn-ghost" href="#how-we-think">
                How we think
              </a>
            </div>
          </div>
          <div className="abt-hero-media">
            <AboutUsLottie className="abt-hero-lottie" />
          </div>
        </div>
      </header>

      <section
        className="abt-band abt-band-alt"
        aria-labelledby="abt-origin-heading"
      >
        <div className="uch-inner">
          <div className="abt-origin-grid">
            <div>
              <p className="abt-kicker">{ABOUT_ORIGIN.kicker}</p>
              <h2 id="abt-origin-heading" className="abt-h2">
                {ABOUT_ORIGIN.heading}
              </h2>
            </div>
            <div>
              <p className="abt-lead abt-lead-strong">{ABOUT_ORIGIN.lead}</p>
              <p className="abt-body">{ABOUT_ORIGIN.body}</p>
            </div>
          </div>
          <div className="abt-refusals">
            {ABOUT_ORIGIN.refusals.map((item, index) => (
              <article key={item.line} className="abt-refuse">
                <p className="abt-refuse-meta">Reject {index + 1}</p>
                <p className="abt-refuse-prefix">{item.prefix}</p>
                <p className="abt-refuse-line">{item.line}</p>
              </article>
            ))}
            <article className="abt-refuse abt-refuse-yes">
              <p className="abt-refuse-meta">{ABOUT_ORIGIN.outcomeKicker}</p>
              <p className="abt-refuse-line">{ABOUT_ORIGIN.outcome}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="abt-band" aria-labelledby="abt-vision-heading">
        <div className="uch-inner abt-direction">
          <article className="abt-manifesto">
            <p className="abt-kicker">{ABOUT_DIRECTION.vision.kicker}</p>
            <h2 id="abt-vision-heading">{ABOUT_DIRECTION.vision.heading}</h2>
            <p>{ABOUT_DIRECTION.vision.body}</p>
          </article>
          <article className="abt-manifesto">
            <p className="abt-kicker">{ABOUT_DIRECTION.mission.kicker}</p>
            <h2>{ABOUT_DIRECTION.mission.heading}</h2>
            <p>{ABOUT_DIRECTION.mission.body}</p>
          </article>
        </div>
      </section>

      <section
        className="abt-band abt-band-alt"
        id="how-we-think"
        aria-labelledby="abt-beliefs-heading"
      >
        <div className="uch-inner">
          <p className="abt-kicker">{ABOUT_BELIEFS.kicker}</p>
          <h2 id="abt-beliefs-heading" className="abt-h2">
            {ABOUT_BELIEFS.heading}
          </h2>
          <p className="abt-body">{ABOUT_BELIEFS.lead}</p>
          <div className="abt-beliefs">
            {ABOUT_BELIEFS.items.map((item) => (
              <article key={item.title} className="abt-belief">
                <div className="abt-belief-top">
                  <span className="abt-icon">
                    <UseCaseIcon name={item.icon} size={22} />
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.line}</p>
                <p className="abt-discipline">{item.discipline}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="abt-band abt-founders-section"
        aria-labelledby="abt-founders-heading"
      >
        <div className="uch-inner">
          <p className="abt-kicker">{ABOUT_FOUNDERS.kicker}</p>
          <h2 id="abt-founders-heading" className="abt-h2 abt-founders-h2">
            {ABOUT_FOUNDERS.heading}
          </h2>
          <p className="abt-body">{ABOUT_FOUNDERS.lead}</p>
          <div className="abt-founders">
            {ABOUT_FOUNDERS.items.map((person) => (
              <article key={person.name} className="abt-founder">
                <div className="abt-founder-top">
                  <span className="abt-founder-mark" aria-hidden>
                    {person.mark}
                  </span>
                  <span className="abt-founder-tag">{person.tag}</span>
                </div>
                <h3>{person.name}</h3>
                <p className="abt-founder-role">{person.role}</p>
                <p className="abt-founder-bio">{person.bio}</p>
                <p className="abt-founder-focus">{person.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="abt-band abt-band-alt abt-close"
        aria-labelledby="abt-close-heading"
      >
        <div className="uch-inner abt-close-grid">
          <div className="abt-close-copy">
            <h2 id="abt-close-heading">{ABOUT_CLOSE.heading}</h2>
            <p>{ABOUT_CLOSE.body}</p>
          </div>
          <div className="abt-close-panel">
            <a className="uch-btn uch-btn-solid" href={ABOUT_CLOSE.cta.href}>
              {ABOUT_CLOSE.cta.label} <ArrowIcon />
            </a>
            <a className="abt-close-mail" href={`mailto:${FOOTER.email}`}>
              <span>Email</span>
              {FOOTER.email}
            </a>
            <p className="abt-close-note">{ABOUT_CLOSE.note}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
