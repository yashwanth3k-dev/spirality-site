import { type Metadata } from "next";
import SubpageNav from "~/components/sections/subpage-nav";
import FooterLegal from "~/components/sections/footer-legal";
import UseCasesHub from "~/components/sections/use-cases-hub";
import { FOOTER, ROUTES } from "~/lib/content/home";
import { pageMetadata } from "~/lib/seo";
import "~/styles/home-sections.css";
import "~/styles/subpage.css";

const DESCRIPTION =
  "Explore real business processes where AI can reduce manual effort, connect workflows and help your team get more done.";

export const metadata: Metadata = pageMetadata({
  title: "Use Cases | Spirality Solutions",
  description: DESCRIPTION,
  path: ROUTES.useCases,
});

export default function UseCasesPage() {
  return (
    <div className="il-page uch-page">
      <SubpageNav />
      <UseCasesHub />
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
