import { type Metadata } from "next";
import PrintButton from "../../_components/print-button";
import "../../_styles/one-pager.css";
import "../../_styles/profile.css";

export const metadata: Metadata = {
  title: "Akil Srikanth | Spirality Solutions Founder Profile",
  description:
    "Founder profile prepared for investor review: Akil Srikanth, founder of Spirality Solutions.",
  robots: { index: false, follow: false },
};

const PROFILE = {
  name: "Akil Srikanth",
  role: "Founder · Strategy & Business Analysis",
  leadStrong: "between a client's business problem and the thing we build",
  chips: [
    "MBA",
    "Business Analysis",
    "Power BI / Tableau",
    "RPA & Automation",
    "Chennai + Dubai",
  ],
  email: "akil@bizdaptive.com",
  linkedin: "https://www.linkedin.com/in/akil-srikanth-2aaaa5149",
  linkedinLabel: "linkedin.com/in/akil-srikanth",
  base: "Chennai, Tamil Nadu, India",
};

const STRENGTHS = [
  {
    label: "Executive exposure",
    title: "A year inside a CEO's office",
    body: "At Truliv I partnered directly with the CEO on strategy formulation, performance tracking and execution: business, financial and market analysis, executive dashboards, MIS reporting and leadership presentations.",
    takeaway: "I am used to the room where the decision actually gets made.",
  },
  {
    label: "Process discovery",
    title: "I read the real process, not the org chart",
    body: "Four employers of requirement gathering and business analysis across enterprise IT services, product software and a scaling operator, including customer experience optimisation and funnel and campaign analysis.",
    takeaway:
      "Spirality's first promise is that we understand your process before we sell you technology. That has been my day job.",
  },
  {
    label: "Data to decisions",
    title: "Fluent in the reporting layer",
    body: "Power BI, Tableau, Zoho Analytics and Google Analytics for the numbers, Figma for the shape of the thing. Certified in Business Analyst Automation 360 and Introduction to RPA and Automation.",
    takeaway:
      "Those automation credentials line up with the AI and workflow work we sell.",
  },
  {
    label: "Gulf delivery",
    title: "I have worked out of Dubai",
    body: "Six months based in Dubai delivering for Tactive Software Systems, on top of four years operating from Chennai.",
    takeaway:
      "Useful for a business selling IT-enabled services across borders.",
  },
];

const ROLES = [
  {
    when: "Since Aug 2026",
    org: "Spirality Solutions",
    place: "Chennai",
    title: "Founder",
    note: "Building Spirality: custom AI agents, CRM and IT-enabled services designed around the way each client already works. I own client discovery, so the process is understood before any technology is chosen.",
  },
  {
    when: "Jul 2025 to Aug 2026",
    org: "Truliv",
    place: "Chennai",
    title: "Business Analyst, CEO's Office",
    note: "Strategy formulation, performance tracking and execution alongside the CEO. Business, financial and market analysis for leadership decisions; executive dashboards, MIS reports and board facing presentations; cross team goal alignment; OKR, KPI and operational excellence initiatives.",
  },
  {
    when: "Sep 2024 to Feb 2025",
    org: "Tactive Software Systems",
    place: "Dubai, UAE",
    title: "Business Analyst",
  },
  {
    when: "Jul 2022 to Sep 2024",
    org: "Tech Mahindra",
    place: "Chennai",
    title: "Business Analyst",
    note: "Two years and three months of enterprise scale delivery, the longest single stretch of my career and the base of my analysis practice.",
  },
  {
    when: "Sep 2020 to Mar 2021",
    org: "DB Schenker",
    place: "Chennai",
    title: "Internship Trainee",
  },
];

const EDUCATION = [
  {
    degree: "MBA, Business, Management & Marketing",
    school: "Indo-German Training Centre · 2019 to 2021",
  },
  {
    degree: "B.Tech, Mechanical Engineering",
    school: "SRM University · 2015 to 2019",
  },
];

const CERTIFICATIONS = [
  "Business Analyst Automation 360",
  "Introduction to RPA and Automation",
  "Digital Marketing",
  "Professional Football Coach",
];

export default function AkilProfilePage() {
  return (
    <div className="op-page">
      <article className="op-sheet">
        <header className="op-mast">
          <p className="op-wordmark">Spirality Solutions</p>
          <p className="op-kicker">Founder Profile</p>
        </header>

        <section className="op-hero pf-hero">
          <h1 className="op-h1">
            {PROFILE.name}
            <span className="op-h1-tail">{PROFILE.role}</span>
          </h1>

          <div className="op-hero-copy">
            <p className="op-lead">
              I sit <strong>{PROFILE.leadStrong}</strong>. Nearly four years as
              a business analyst, most recently inside the CEO&apos;s office at
              Truliv, taught me to turn messy operational reality into decisions
              leadership can act on.
            </p>

            <div className="pf-contact">
              <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              <a href={PROFILE.linkedin}>{PROFILE.linkedinLabel}</a>
              <span>{PROFILE.base}</span>
            </div>
          </div>

          <ul className="op-chips">
            {PROFILE.chips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        </section>

        <section className="op-section">
          <h2 className="op-label">What I bring</h2>
          <p className="op-statement">
            An analyst&apos;s founder: process first, then the technology.
          </p>

          <div className="pf-cards">
            {STRENGTHS.map((item) => (
              <section className="op-svc" key={item.label}>
                <div className="op-svc-head">
                  <span className="pf-card-label">{item.label}</span>
                  <h3>{item.title}</h3>
                </div>
                <p className="op-body">{item.body}</p>
                <p className="op-take">{item.takeaway}</p>
              </section>
            ))}
          </div>
        </section>

        {/* sheet one is the case, sheet two is the evidence */}
        <section className="op-section op-break">
          <h2 className="op-label">Track record</h2>

          <ul className="pf-roles">
            {ROLES.map((role) => (
              <li className="pf-role" key={role.org}>
                <span className="pf-when">{role.when}</span>
                <div className="pf-role-body">
                  <h3>
                    {role.org}
                    <span className="pf-place">{role.place}</span>
                  </h3>
                  <p className="pf-role-title">{role.title}</p>
                  {role.note ? (
                    <p className="pf-role-note">{role.note}</p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="op-section">
          <h2 className="op-label">Education &amp; credentials</h2>

          <div className="pf-cols">
            <div>
              <h3 className="pf-col-head">Education</h3>
              {EDUCATION.map((entry) => (
                <div className="pf-degree" key={entry.degree}>
                  <strong>{entry.degree}</strong>
                  <span>{entry.school}</span>
                </div>
              ))}
            </div>

            <div>
              <h3 className="pf-col-head">Certifications</h3>
              <ul className="op-list">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="pf-aside-note">
            <strong>Off the clock:</strong> football, seriously enough to hold a
            professional coaching certification.
          </p>
        </section>

        <section className="op-section">
          <div className="op-close">
            <p className="op-ask">
              Happy to go deeper on any part of this. Reach me directly.
            </p>
            <p className="op-answer">
              {PROFILE.email} · {PROFILE.linkedinLabel}
            </p>
          </div>
        </section>

        <footer className="op-foot">
          <p className="op-foot-brand">
            <strong>Spirality Solutions</strong>
            Founder profile · Prepared for investor review
          </p>
        </footer>
      </article>

      <div className="op-actions">
        <PrintButton />
      </div>
    </div>
  );
}
