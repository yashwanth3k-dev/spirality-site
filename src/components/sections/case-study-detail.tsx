import { ArrowIcon } from "~/components/sections/use-case-icons";
import UseCasePipeline from "~/components/sections/use-case-pipeline";
import {
  caseStudyPath,
  siblingCaseStudies,
  type CaseStudy,
} from "~/lib/content/case-studies";
import { ROUTES } from "~/lib/content/home";
import "~/styles/use-case-detail.css";
import "~/styles/case-studies-hub.css";

export default function CaseStudyDetail({ item }: { item: CaseStudy }) {
  const siblings = siblingCaseStudies(item.slug, 2);

  return (
    <article>
      <header className="ucd-hero">
        <div className="uch-halo" aria-hidden />
        <div className="uch-inner ucd-hero-grid">
          <div className="ucd-hero-copy">
            <nav className="ucd-crumb" aria-label="Breadcrumb">
              <a href={ROUTES.caseStudies}>Case Studies</a>
              <span aria-hidden>/</span>
              <span>{item.client}</span>
            </nav>

            <div className="uch-pills">
              <span className="uch-pill uch-pill-systems">{item.status}</span>
            </div>

            <h1 className="ucd-h1">{item.name}</h1>
            <p className="ucd-lead">{item.promise}</p>
            <p className="csd-client csd-client-hero">{item.client}</p>

            <div className="ucd-actions">
              <a className="uch-btn uch-btn-solid" href={ROUTES.contact}>
                Talk to Us <ArrowIcon />
              </a>
              <a className="uch-btn uch-btn-ghost" href={ROUTES.caseStudies}>
                All studies
              </a>
            </div>

            <div className="ucd-specs">
              {item.specs.map((spec) => (
                <div key={spec.label} className="ucd-spec">
                  <span className="ucd-spec-label">{spec.label}</span>
                  <strong>{spec.value}</strong>
                  <span className="ucd-spec-note">{spec.note}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="csd-hero-image">
            <img src={item.image} alt={item.imageAlt} />
          </aside>
        </div>
      </header>

      <section className="ucd-section" aria-labelledby="ucd-contrast-heading">
        <div className="uch-inner">
          <div className="ucd-section-head">
            <p className="ucd-kicker">{item.contrastKicker}</p>
            <h2 id="ucd-contrast-heading">{item.contrastHeading}</h2>
          </div>
          <div className="ucd-contrast">
            <div className="ucd-card ucd-card-before">
              <div className="ucd-card-label">
                <span className="ucd-chip ucd-chip-warn">Situation</span>
                <span className="ucd-chip-note">Before</span>
              </div>
              <h3>{item.situationTitle}</h3>
              <p className="ucd-card-lead">{item.situation}</p>
              <ul>
                {item.situationPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="ucd-card ucd-card-after">
              <div className="ucd-card-label">
                <span className="ucd-chip ucd-chip-ok">
                  What we’re building
                </span>
                <span className="ucd-chip-note">In progress</span>
              </div>
              <h3>{item.buildingTitle}</h3>
              <p className="ucd-card-lead">{item.building}</p>
              <ul>
                {item.buildingPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <UseCasePipeline label={item.flowLabel} flow={item.flow} />

      <section className="ucd-section" aria-labelledby="ucd-practice-heading">
        <div className="uch-inner">
          <div className="ucd-section-head">
            <p className="ucd-kicker">How we’re doing it</p>
            <h2 id="ucd-practice-heading">
              Consulting, the build, and where people stay.
            </h2>
          </div>
          <div className="ucd-practice">
            <div className="ucd-card">
              <p className="ucd-kicker">Approach</p>
              <h3>Pain first, then software</h3>
              <p>{item.approach}</p>
            </div>
            <div className="ucd-card">
              <p className="ucd-kicker">Where people stay</p>
              <h3>People still decide the hard bits</h3>
              <p>{item.human}</p>
            </div>
            <div className="ucd-card">
              <p className="ucd-kicker">In this build</p>
              <h3>What’s in the work</h3>
              <p>{item.scope}</p>
            </div>
          </div>
        </div>
      </section>

      {siblings.length ? (
        <section className="ucd-section" aria-labelledby="ucd-more-heading">
          <div className="uch-inner">
            <div className="ucd-section-head">
              <p className="ucd-kicker">More studies</p>
              <h2 id="ucd-more-heading">Also in progress.</h2>
            </div>
            <div className="ucd-more">
              {siblings.map((other) => (
                <a
                  key={other.slug}
                  className="ucd-card ucd-more-card"
                  href={caseStudyPath(other.slug)}
                >
                  <div className="uch-pills">
                    <span className="uch-pill uch-pill-systems">
                      {other.status}
                    </span>
                  </div>
                  <h3>{other.name}</h3>
                  <p>{other.promise}</p>
                  <span className="ucd-more-link">
                    Read the study <ArrowIcon />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
