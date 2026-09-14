import { type Metadata } from "next";
import JsonLd from "~/components/json-ld";
import AboutHub from "~/components/sections/about-hub";
import SubpageNav from "~/components/sections/subpage-nav";
import FooterLegal from "~/components/sections/footer-legal";
import { ABOUT_FOUNDERS, ABOUT_INDEX } from "~/lib/content/about";
import { FOOTER, ROUTES } from "~/lib/content/home";
import { aboutPageJsonLd, absoluteUrl, breadcrumbJsonLd } from "~/lib/seo";
import "~/styles/home-sections.css";
import "~/styles/subpage.css";
import "~/styles/use-cases-hub.css";
import "~/styles/about-hub.css";

const pageUrl = absoluteUrl(ROUTES.about);

export const metadata: Metadata = {
  title: "About Us | Spirality Solutions",
  description: ABOUT_INDEX.description,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "About Us | Spirality Solutions",
    description: ABOUT_INDEX.description,
    siteName: "Spirality Solutions",
    images: [{ url: ABOUT_INDEX.image }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Spirality Solutions",
    description: ABOUT_INDEX.description,
  },
};

export default function AboutPage() {
  return (
    <div className="il-page uch-page abt-page">
      <JsonLd
        data={[
          aboutPageJsonLd({
            url: pageUrl,
            name: "About Spirality Solutions",
            description: ABOUT_INDEX.description,
            founders: ABOUT_FOUNDERS.items.map((person) => ({
              name: person.name,
              jobTitle: person.role,
            })),
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: ROUTES.about },
          ]),
        ]}
      />
      <SubpageNav />
      <AboutHub />
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
