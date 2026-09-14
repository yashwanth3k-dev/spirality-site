import { ArrowIcon } from "~/components/sections/use-case-icons";
import { ROUTES } from "~/lib/content/home";
import {
  CASE_STUDIES,
  caseStudyPath,
  type CaseStudy,
} from "~/lib/content/case-studies";
import "~/styles/case-studies-hub.css";

function StudyCard({ item }: { item: CaseStudy }) {
  return (
    <article className="csd-card">
      <a
        className="csd-card-media"
        href={caseStudyPath(item.slug)}
        aria-label={item.name}
      >
        <img src={item.image} alt={item.imageAlt} />
      </a>
      <div className="csd-card-body">
        <div className="csd-card-meta">
          <span className="uch-pill uch-pill-systems">{item.status}</span>
          <span className="uch-pattern">Study {item.pattern}</span>
        </div>
        <p className="csd-client">{item.client}</p>
        <h2 className="csd-card-name">
          <a href={caseStudyPath(item.slug)}>{item.name}</a>
        </h2>
        <p className="csd-card-promise">{item.promise}</p>
        <p className="csd-card-situation">{item.situation}</p>
        <div className="csd-card-foot">
          <span className="uch-systems">{item.scope}</span>
          <a className="uch-more" href={caseStudyPath(item.slug)}>
            Read the study <ArrowIcon />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function CaseStudiesHub() {
  return (
    <main>
      <header className="uch-hero">
        <div className="uch-halo" aria-hidden />
        <div className="uch-inner uch-hero-row">
          <div className="uch-hero-copy">
            <div className="uch-badge">
              <span className="uch-badge-dot" aria-hidden />
              <span className="uch-badge-label">Case studies</span>
            </div>
            <h1 className="uch-h1">Built for the real world.</h1>
            <p className="uch-lead">
              See how we approach real business problems, what we build around
              them, and how the work takes shape.
            </p>
            <div className="uch-actions">
              <a className="uch-btn uch-btn-solid" href={ROUTES.contact}>
                Talk to Us <ArrowIcon />
              </a>
              <a className="uch-btn uch-btn-ghost" href={ROUTES.useCases}>
                See use cases
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="csd-catalog" aria-label="Case studies">
        <div className="uch-inner">
          <p className="uch-filter-note">Two studies · all in progress</p>
          <div className="csd-list">
            {CASE_STUDIES.map((item) => (
              <StudyCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <div className="uch-inner">
        <aside className="uch-banner">
          <div className="uch-banner-glow" aria-hidden />
          <div className="uch-banner-copy">
            <p className="uch-banner-kicker">Honesty rule</p>
            <h2>Empty numbers are better than fake ones.</h2>
            <p>
              When a study is far enough along, we will add what changed — still
              without naming the client unless they ask us to.
            </p>
          </div>
          <a className="uch-btn uch-btn-solid" href={ROUTES.contact}>
            Talk about your process <ArrowIcon />
          </a>
        </aside>
      </div>
    </main>
  );
}
