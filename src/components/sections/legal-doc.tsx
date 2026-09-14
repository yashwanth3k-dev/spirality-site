import SubpageNav from "~/components/sections/subpage-nav";
import FooterLegal from "~/components/sections/footer-legal";
import { FOOTER } from "~/lib/content/site";
import "~/styles/home-sections.css";
import "~/styles/subpage.css";
import "~/styles/legal-doc.css";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export default function LegalDoc({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <div className="il-page legal-page">
      <SubpageNav />
      <main className="il-section legal-body">
        <div className="il-inner legal-inner">
          <p className="il-eyebrow">Legal</p>
          <h1 className="il-h1">{title}</h1>
          <p className="legal-updated">Last updated {updated}</p>
          {sections.map((section) => (
            <section key={section.heading} className="legal-block">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </section>
          ))}
          <p className="legal-contact">
            Questions: <a href={`mailto:${FOOTER.email}`}>{FOOTER.email}</a>
          </p>
        </div>
      </main>
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
