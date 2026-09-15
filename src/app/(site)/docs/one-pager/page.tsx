import { type Metadata } from "next";
import { cn } from "~/lib/utils";
import PrintButton from "../_components/print-button";
import "../_styles/one-pager.css";

const DESCRIPTION =
  "AI agents, CRM, digital and IT-enabled services, and automation — built and customised around the way your business already works.";

export const metadata: Metadata = {
  title: "Spirality Solutions | AI, Digital & IT-Enabled Services",
  description: DESCRIPTION,
  robots: { index: false, follow: false },
};

const HERO = {
  /** Set as two voices rather than one dashed line. */
  title: "AI, Digital & IT-Enabled Services",
  titleTail: "Built Around Your Business",
  lead: "We help businesses save time, reduce manual work, lower operating costs and get more done through customised AI, digital solutions and IT-enabled services.",
  leadStrong:
    "save time, reduce manual work, lower operating costs and get more done",
  aside: "You don't need to figure out the technology first.",
  asideStrong:
    "Tell us what you need to improve. We build the solution around it.",
  chips: ["AI Agents", "CRM", "Digital Services", "IT-Enabled Services"],
};

type Service = {
  n: string;
  title: string;
  sub: string;
  body: string[];
  /** Starts a new sheet when printed. */
  break?: boolean;
  groups?: { heading?: string; items: string[] }[];
  flows?: string[][];
  note?: { heading?: string; body: string[] };
  takeaway?: string;
};

const SERVICES: Service[] = [
  {
    n: "01",
    title: "Custom AI Agents",
    sub: "Give your business an AI employee for specific work.",
    body: [
      "We build AI agents designed around your company's processes, information and requirements.",
    ],
    takeaway:
      "The aim is simple: less repetitive work for your team and more time for work that matters.",
  },
  {
    n: "02",
    title: "AI Customer Relationship Management & IT-Enabled Services",
    sub: "Your CRM. Your process. Your features.",
    body: [
      "We provide CRM solutions that can be customised around the way your business actually works.",
    ],
    takeaway: "Need something different? We can customise it.",
  },
  {
    n: "03",
    title: "Custom Digital Services",
    sub: "Everything you need to build and grow your digital presence.",
    body: ["We design and develop digital solutions from the ground up."],
    takeaway:
      "From your logo and website to your customer portal and online growth — we can build the digital side of your business.",
  },
];

const PROCESS = [
  {
    n: "01",
    title: "Understand",
    line: "We learn about your business, your current process and the problem you want to solve.",
  },
  {
    n: "02",
    title: "Plan",
    line: "We identify what should be automated, built, outsourced or improved.",
  },
  {
    n: "03",
    title: "Build",
    line: "We design and develop the solution around your requirements.",
  },
  {
    n: "04",
    title: "Launch",
    line: "We put it into real use and make sure your team can work with it.",
  },
  {
    n: "05",
    title: "Support & Improve",
    line: "We continue to improve the system, service or operation as your business grows.",
  },
];

const START_POINTS = [
  "A website",
  "An AI agent",
  "A CRM",
  "SEO",
  "A customer portal",
  "Automation",
  "IT-enabled services",
  "A complete business system",
];

const OUTCOMES = [
  {
    title: "Save time",
    line: "Automate repetitive work and give your team more time for important tasks.",
  },
  {
    title: "Reduce cost",
    line: "Use automation, AI and outsourced operations where they make business sense.",
  },
  {
    title: "Work faster",
    line: "Reduce manual steps and move information between people and systems faster.",
  },
  {
    title: "Serve customers better",
    line: "Respond faster and give customers more consistent support.",
  },
  {
    title: "Scale your business",
    line: "Add digital systems, AI or operational capacity without rebuilding everything from scratch.",
  },
  {
    title: "Get one connected solution",
    line: "Bring AI, CRM, automation and IT-enabled services together around your business.",
  },
];

const FOUNDERS = [
  {
    name: "Akil",
    line: "Thinks most AI problems are process problems in a better outfit.",
  },
  {
    name: "Yashwanth",
    line: "Asks what happens at 2am before asking which model you're using.",
  },
  {
    name: "Sudharshan",
    line: "Ships one boring thing that works over five clever things that don't.",
  },
];

/** Each fact carries the same refrain, so only the subject varies. */
const DIFFERENCES = [
  "Your processes",
  "Your customers",
  "Your team",
  "Your goals",
];

const FOOTER_LINE =
  "AI Agents • CRM • Digital Services • Automation • IT-Enabled Services • Business Systems";

const CLOSE = {
  statement: "We don't believe every business needs the same technology.",
  resolve: "So we build and customise around what you actually need.",
  ask: "Tell us what is taking too much time, costing too much money, or making your business harder to run.",
  answer:
    "We'll help you find what should be automated, built, outsourced or improved.",
};

export default function OnePagerPage() {
  return (
    <div className="op-page">
      <article className="op-sheet">
        <header className="op-mast">
          <p className="op-wordmark">Spirality Solutions</p>
          <p className="op-kicker">AI • Digital • IT-Enabled Services</p>
        </header>

        <section className="op-hero">
          <h1 className="op-h1">
            {HERO.title}
            <span className="op-h1-tail">{HERO.titleTail}</span>
          </h1>
          <div className="op-hero-copy">
            <p className="op-lead">
              We help businesses <strong>{HERO.leadStrong}</strong> through
              customised AI, digital solutions and IT-enabled services.
            </p>
            <p className="op-aside">
              {HERO.aside}
              <strong>{HERO.asideStrong}</strong>
            </p>
          </div>
          <ul className="op-chips">
            {HERO.chips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        </section>

        <section className="op-section">
          <h2 className="op-label">What we do</h2>

          <div className="op-svcs">
            {SERVICES.map((svc) => (
              <ServiceBlock svc={svc} key={svc.n} />
            ))}
          </div>
        </section>

        <section className="op-section">
          <h2 className="op-label">How we work</h2>
          <p className="op-statement">Simple process. Clear outcome.</p>

          <div className="op-steps">
            {PROCESS.map((step) => (
              <div className="op-step" key={step.n}>
                <span className="op-svc-n">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.line}</p>
              </div>
            ))}
          </div>
        </section>

        {/* second printed sheet starts here */}
        <section className="op-section op-break">
          <h2 className="op-label">Why Spirality</h2>
          <p className="op-statement">
            One partner for AI, digital and operations.
          </p>
          <p className="op-body op-body-wide">
            Instead of managing separate companies for your website, CRM,
            automation, AI and operational support, Spirality brings these
            capabilities together. You can start with one requirement — and
            build from there.
          </p>
          <ul className="op-starts">
            {START_POINTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="op-section">
          <h2 className="op-label">What we help you achieve</h2>
          <div className="op-outcomes">
            {OUTCOMES.map((outcome) => (
              <div className="op-outcome" key={outcome.title}>
                <h3>{outcome.title}</h3>
                <p>{outcome.line}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="op-section">
          <h2 className="op-label">Founders</h2>
          <ul className="op-founders">
            {FOUNDERS.map((founder) => (
              <li key={founder.name}>
                <span className="op-founder-role">Founder</span>
                <span className="op-founder-name">{founder.name}</span>
                <span className="op-founder-line">{founder.line}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="op-section">
          <h2 className="op-label">Built for your business</h2>
          <p className="op-statement">{CLOSE.statement}</p>

          <ul className="op-facts">
            {DIFFERENCES.map((subject) => (
              <li key={subject}>
                <span className="op-fact-subject">{subject}</span>
                <span className="op-fact-refrain">Different</span>
              </li>
            ))}
          </ul>

          <p className="op-resolve">{CLOSE.resolve}</p>

          <div className="op-close">
            <p className="op-ask">{CLOSE.ask}</p>
            <p className="op-answer">{CLOSE.answer}</p>
          </div>
        </section>

        <footer className="op-foot">
          <p className="op-foot-brand">
            <strong>Spirality Solutions</strong>
            {FOOTER_LINE}
          </p>
        </footer>
      </article>

      <div className="op-actions">
        <PrintButton />
      </div>
    </div>
  );
}

function ServiceBlock({ svc }: { svc: Service }) {
  const groups = svc.groups ?? [];
  const grouped = groups.length > 1;

  return (
    <section className={cn("op-svc", svc.break && "op-break")}>
      <div className="op-svc-head">
        <span className="op-svc-n">{svc.n}</span>
        <h3>{svc.title}</h3>
      </div>

      <p className="op-svc-sub">{svc.sub}</p>

      {svc.body.map((line) => (
        <p className="op-body" key={line}>
          {line}
        </p>
      ))}

      {groups.length ? (
        <div className={grouped ? "op-subs" : "op-subs op-subs-one"}>
          {groups.map((group, i) => (
            <div className="op-sub" key={group.heading ?? i}>
              {group.heading ? <h4>{group.heading}</h4> : null}
              <ul className={grouped ? "op-list" : "op-list op-list-wide"}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null}

      {svc.flows?.length ? (
        <div className="op-flows">
          {svc.flows.map((flow) => (
            <ol className="op-flow" key={flow.join()}>
              {flow.map((node) => (
                <li key={node}>{node}</li>
              ))}
            </ol>
          ))}
        </div>
      ) : null}

      {svc.note ? (
        <div className="op-note">
          {svc.note.heading ? <h4>{svc.note.heading}</h4> : null}
          {svc.note.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      ) : null}

      {svc.takeaway ? <p className="op-take">{svc.takeaway}</p> : null}
    </section>
  );
}
