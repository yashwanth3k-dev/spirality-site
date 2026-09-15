import { ArrowIcon, UseCaseIcon } from "~/components/sections/use-case-icons";
import UseCasePipeline from "~/components/sections/use-case-pipeline";
import { ROUTES } from "~/lib/content/home";
import {
  siblingUseCases,
  splitUseCaseTags,
  getUseCasePath,
  USE_CASE_CATEGORY_LABEL,
  type UseCase,
  type UseCaseCategory,
} from "~/lib/content/use-cases";
import "~/styles/use-case-detail.css";

const PILL_CLASS: Record<UseCaseCategory, string> = {
  "ai-agents": "uch-pill-ai",
  "business-systems": "uch-pill-systems",
  "bpo-operations": "uch-pill-bpo",
  "digital-services": "uch-pill-digital",
};

export default function UseCaseDetail({ item }: { item: UseCase }) {
  const goodFor = splitUseCaseTags(item.goodFor);
  const systems = splitUseCaseTags(item.systems);
  const siblings = siblingUseCases(item.slug, 2);

  return (
    <article>
      <header className="ucd-hero">
        <div className="uch-halo" aria-hidden />
        <div className="uch-inner ucd-hero-grid">
          <div className="ucd-hero-copy">
            <nav className="ucd-crumb" aria-label="Breadcrumb">
              <a href={ROUTES.useCases}>Use Cases</a>
              <span aria-hidden>/</span>
              <span>{USE_CASE_CATEGORY_LABEL[item.category]}</span>
              <span aria-hidden>/</span>
              <span>{item.name}</span>
            </nav>

            <div className="uch-pills">
              <span className={`uch-pill ${PILL_CLASS[item.category]}`}>
                {USE_CASE_CATEGORY_LABEL[item.category]}
              </span>
            </div>

            <h1 className="ucd-h1">{item.name}</h1>
            <p className="ucd-lead">{item.promise}</p>

            <div className="ucd-actions">
              <a className="uch-btn uch-btn-solid" href={ROUTES.contact}>
                Talk to Us <ArrowIcon />
              </a>
              <a className="uch-btn uch-btn-ghost" href={ROUTES.useCases}>
                All use cases
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

          <aside
            className="ucd-runtime"
            aria-label={`${item.flowLabel} preview`}
          >
            <div className="ucd-runtime-head">
              <span className="uch-kicker">{item.flowLabel}</span>
              <span className="uch-live">The steps</span>
            </div>
            <ol className="ucd-runtime-list">
              {item.flow.map((step, index) => (
                <li key={step.title}>
                  <span className="ucd-runtime-icon">
                    <UseCaseIcon name={step.icon} size={16} />
                  </span>
                  <div>
                    <strong>
                      Step {index + 1}: {step.title}
                    </strong>
                    <span>{step.note}</span>
                  </div>
                </li>
              ))}
            </ol>
            {goodFor.length ? (
              <p className="ucd-runtime-tags">{goodFor.join(" · ")}</p>
            ) : null}
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
                <span className="ucd-chip ucd-chip-ok">Result</span>
                <span className="ucd-chip-note">After</span>
              </div>
              <h3>{item.resultTitle}</h3>
              <p className="ucd-card-lead">{item.result}</p>
              <ul>
                {item.resultPoints.map((point) => (
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
            <p className="ucd-kicker">How we change the work</p>
            <h2 id="ucd-practice-heading">
              What changes, what people still do, and which tools.
            </h2>
          </div>
          <div className="ucd-practice">
            <div className="ucd-card">
              <p className="ucd-kicker">What we change</p>
              <h3>The process, not a chatbot demo</h3>
              <p>{item.change}</p>
            </div>
            <div className="ucd-card">
              <p className="ucd-kicker">Where people stay</p>
              <h3>People still decide the hard bits</h3>
              <p>{item.human}</p>
            </div>
            <div className="ucd-card">
              <p className="ucd-kicker">Tools involved</p>
              <h3>Uses what you already have</h3>
              {systems.length ? (
                <ul className="ucd-system-tags">
                  {systems.map((system) => (
                    <li key={system}>{system}</li>
                  ))}
                </ul>
              ) : (
                <p>We use the tools already in the process.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {siblings.length ? (
        <section className="ucd-section" aria-labelledby="ucd-more-heading">
          <div className="uch-inner">
            <div className="ucd-section-head">
              <p className="ucd-kicker">More examples</p>
              <h2 id="ucd-more-heading">More examples.</h2>
            </div>
            <div className="ucd-more">
              {siblings.map((other) => (
                <a
                  key={other.slug}
                  className="ucd-card ucd-more-card"
                  href={getUseCasePath(other.slug)}
                >
                  <div className="uch-pills">
                    <span className={`uch-pill ${PILL_CLASS[other.category]}`}>
                      {USE_CASE_CATEGORY_LABEL[other.category]}
                    </span>
                  </div>
                  <h3>{other.name}</h3>
                  <p>{other.promise}</p>
                  <span className="ucd-more-link">
                    See how it works <ArrowIcon />
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
