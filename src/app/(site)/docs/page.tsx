import { type Metadata } from "next";
import Link from "next/link";
import "./_styles/one-pager.css";
import "./_styles/docs.css";

export const metadata: Metadata = {
  title: "Documents | Spirality Solutions",
  description:
    "Printable Spirality documents: the capability one-pager and founder profiles.",
  robots: { index: false, follow: false },
};

const DOCUMENTS = [
  {
    href: "/docs/one-pager",
    kind: "Capability document",
    title: "Spirality Solutions one-pager",
    blurb:
      "What we do, how we work and what a client gets: AI agents, CRM, digital services, automation and IT-enabled services.",
    meta: "Two A4 sheets · Share with prospects",
  },
  {
    href: "/docs/founders/akil",
    kind: "Founder profile",
    title: "Akil Srikanth",
    blurb:
      "Strategy and business analysis. Written for investors asking who is behind the company.",
    meta: "Two A4 sheets · Prepared for investor review",
  },
  {
    href: "/docs/brand",
    kind: "Brand assets",
    title: "Transparent logos",
    blurb:
      "Mark and wordmark for light and dark backgrounds. SVG and PNG, no background fill.",
    meta: "Download pack · Use in decks and docs",
  },
];

export default function DocsIndexPage() {
  return (
    <div className="op-page">
      <article className="op-sheet">
        <header className="op-mast">
          <p className="op-wordmark">Spirality Solutions</p>
          <p className="op-kicker">Documents</p>
        </header>

        <section className="op-section">
          <h1 className="op-label">Printable documents</h1>
          <p className="op-statement">
            Each one is built to print straight to A4 with no browser headers.
          </p>

          <ul className="dx-list">
            {DOCUMENTS.map((doc) => (
              <li className="dx-item" key={doc.href}>
                <Link href={doc.href}>
                  <span className="dx-kind">{doc.kind}</span>
                  <h3>{doc.title}</h3>
                  <p>{doc.blurb}</p>
                  <span className="dx-meta">{doc.meta}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
