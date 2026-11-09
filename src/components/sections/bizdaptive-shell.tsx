import FooterLegal from "~/components/sections/footer-legal";
import BizdaptiveSubnav from "~/components/sections/bizdaptive-subnav";
import SubpageNav from "~/components/sections/subpage-nav";
import { FOOTER } from "~/lib/content/site";
import "~/styles/bizdaptive.css";
import "~/styles/home-sections.css";
import "~/styles/legal-doc.css";
import "~/styles/subpage.css";

export default function BizdaptiveShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="il-page sp-page">
      <SubpageNav />
      <BizdaptiveSubnav />
      {children}
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
