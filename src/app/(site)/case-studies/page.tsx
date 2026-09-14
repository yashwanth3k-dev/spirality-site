import { type Metadata } from "next";
import SubpageNav from "~/components/sections/subpage-nav";
import FooterLegal from "~/components/sections/footer-legal";
import CaseStudiesHub from "~/components/sections/case-studies-hub";
import { FOOTER, ROUTES } from "~/lib/content/home";
import { pageMetadata } from "~/lib/seo";
import "~/styles/home-sections.css";
import "~/styles/subpage.css";
import "~/styles/use-cases-hub.css";

const DESCRIPTION =
  "See how we approach real business problems, what we build around them, and how the work takes shape.";

export const metadata: Metadata = pageMetadata({
  title: "Case Studies | Spirality Solutions",
  description: DESCRIPTION,
  path: ROUTES.caseStudies,
});

export default function CaseStudiesPage() {
  return (
    <div className="il-page uch-page">
      <SubpageNav />
      <CaseStudiesHub />
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
