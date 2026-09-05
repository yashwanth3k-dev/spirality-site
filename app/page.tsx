import Link from "next/link";
import { HomeHero } from "@/components/home-hero";
import { MotionReveal } from "@/components/motion-reveal";
import { solutionPillars } from "@/lib/content";

const model = [
  {
    n: "01",
    title: "Assess",
    copy: "Find where AI creates value — and what should wait."
  },
  {
    n: "02",
    title: "Build",
    copy: "Engineer systems around workflows, data, rules, and approvals."
  },
  {
    n: "03",
    title: "Operate",
    copy: "Run the outcome, or transfer it with controls and training."
  }
];

const solutions = solutionPillars.map((p) => ({
  n: p.eyebrow,
  title:
    p.slug === "strategy"
      ? "Strategy"
      : p.slug === "systems"
        ? "AI Agents"
        : p.slug === "infrastructure"
          ? "Infrastructure"
          : "Operations",
  copy:
    p.slug === "strategy"
      ? "Readiness, opportunity, and a practical roadmap."
      : p.slug === "systems"
        ? "Agents and workflows with guardrails and audit trails."
        : p.slug === "infrastructure"
          ? "Portals, APIs, dashboards, and data flows."
          : "We run the process under agreed outcomes."
}));

const flow = [
  { n: "01", title: "Discover", copy: "People, processes, systems, and constraints." },
  { n: "02", title: "Prioritize", copy: "Value, risk, complexity, and time-to-value." },
  { n: "03", title: "Deliver", copy: "Managed outcome — or build and transfer." }
];

const domains = [
  { title: "Customer Ops", copy: "Support, triage, and lead qualification." },
  { title: "Finance", copy: "Invoices, reconciliation, and document review." },
  { title: "Operations", copy: "Orders, monitoring, and process automation." },
  { title: "Knowledge", copy: "Retrieval, research, and reporting." }
];

export default function HomePage() {
  return (
    <main className="cine-page">
      <HomeHero />

      {/* Model — 3 compact columns, no cards */}
      <section id="about" className="cine-band">
        <div className="cine-wrap">
          <div className="cine-row cine-row-3">
            {model.map((item, i) => (
              <MotionReveal key={item.title} delay={i * 0.05}>
                <div className="cine-item">
                  <span className="cine-n">{item.n}</span>
                  <h2 className="cine-h3">{item.title}</h2>
                  <p className="cine-p">{item.copy}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* POV — short, no 8-point grid */}
      <section className="cine-band cine-band-edge">
        <div className="cine-wrap cine-pov">
          <MotionReveal>
            <p className="cine-eyebrow">Point of view</p>
            <h2 className="cine-h2">
              AI is not the product.
              <br />
              The outcome is.
            </h2>
            <p className="cine-lead">
              We start with the business process, its constraints, and the
              desired result — not with a model to insert.
            </p>
            <p className="cine-chain">
              Problem <span>→</span> Process <span>→</span> System{" "}
              <span>→</span> Outcome
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Solutions — 4 short cards, 2×2 / 4×1 */}
      <section id="features" className="cine-band">
        <div className="cine-wrap">
          <MotionReveal>
            <div className="cine-head">
              <p className="cine-eyebrow">Capabilities</p>
              <h2 className="cine-h2">Four capabilities. One operating model.</h2>
            </div>
          </MotionReveal>
          <div className="cine-row cine-row-4">
            {solutions.map((item, i) => (
              <MotionReveal key={item.title} delay={i * 0.04}>
                <article className="cine-tile">
                  <span className="cine-n">{item.n}</span>
                  <h3 className="cine-h3">{item.title}</h3>
                  <p className="cine-p">{item.copy}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we work — 3 steps only */}
      <section id="faq" className="cine-band cine-band-edge">
        <div className="cine-wrap">
          <MotionReveal>
            <div className="cine-head">
              <p className="cine-eyebrow">How we work</p>
              <h2 className="cine-h2">Start with the diagnostic.</h2>
              <p className="cine-lead cine-lead-narrow">
                Before you invest, see what is worth building, what is not ready,
                and who should carry the operational risk.
              </p>
            </div>
          </MotionReveal>
          <div className="cine-row cine-row-3">
            {flow.map((item, i) => (
              <MotionReveal key={item.title} delay={i * 0.05}>
                <div className="cine-item">
                  <span className="cine-n">{item.n}</span>
                  <h3 className="cine-h3">{item.title}</h3>
                  <p className="cine-p">{item.copy}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Domains — 4 compact, one row */}
      <section className="cine-band">
        <div className="cine-wrap">
          <MotionReveal>
            <div className="cine-head">
              <p className="cine-eyebrow">Where we apply AI</p>
              <h2 className="cine-h2">Concrete workflows.</h2>
            </div>
          </MotionReveal>
          <div className="cine-row cine-row-4">
            {domains.map((item, i) => (
              <MotionReveal key={item.title} delay={i * 0.04}>
                <article className="cine-tile cine-tile-quiet">
                  <h3 className="cine-h3">{item.title}</h3>
                  <p className="cine-p">{item.copy}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bizdaptive — minimal teaser */}
      <section className="cine-band cine-band-edge">
        <div className="cine-wrap cine-teaser">
          <MotionReveal>
            <p className="cine-eyebrow">Coming from Spirality</p>
            <h2 className="cine-h2">Bizdaptive</h2>
            <p className="cine-lead cine-lead-narrow">
              Governance and coordination for AI-powered organizations —
              policies, approvals, memory, and verification.
            </p>
            <Link href="/bizdaptive" className="cine-ghost">
              Join early access
            </Link>
          </MotionReveal>
        </div>
      </section>

      {/* Close CTA */}
      <section id="contact" className="cine-band cine-cta">
        <div className="cine-wrap cine-cta-inner">
          <MotionReveal>
            <h2 className="cine-h2">
              Do not start with AI.
              <br />
              Start with the problem.
            </h2>
            <p className="cine-lead cine-lead-narrow">
              The diagnostic turns scattered ideas into a ranked opportunity
              portfolio and a clear delivery path.
            </p>
            <div className="cine-actions">
              <Link href="/start-diagnostic" className="cine-pill">
                <span>Get Started</span>
              </Link>
              <Link href="/solutions" className="cine-ghost">
                View Architecture
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
