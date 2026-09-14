import { type Metadata } from "next";
import JsonLd from "~/components/json-ld";
import ContactHub from "~/components/sections/contact-hub";
import SubpageNav from "~/components/sections/subpage-nav";
import FooterLegal from "~/components/sections/footer-legal";
import { CONTACT_INDEX } from "~/lib/content/contact";
import { FOOTER, ROUTES } from "~/lib/content/home";
import { absoluteUrl, breadcrumbJsonLd, contactPageJsonLd } from "~/lib/seo";
import "~/styles/home-sections.css";
import "~/styles/subpage.css";
import "~/styles/use-cases-hub.css";
import "~/styles/contact-hub.css";

const pageUrl = absoluteUrl(ROUTES.contact);

export const metadata: Metadata = {
  title: "Talk to Us | Spirality Solutions",
  description: CONTACT_INDEX.description,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Talk to Us | Spirality Solutions",
    description: CONTACT_INDEX.description,
    siteName: "Spirality Solutions",
  },
  twitter: {
    card: "summary",
    title: "Talk to Us | Spirality Solutions",
    description: CONTACT_INDEX.description,
  },
};

export default function ContactPage() {
  return (
    <div className="il-page uch-page ct-page">
      <JsonLd
        data={[
          contactPageJsonLd({
            url: pageUrl,
            name: "Talk to Spirality Solutions",
            description: CONTACT_INDEX.description,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: ROUTES.contact },
          ]),
        ]}
      />
      <SubpageNav />
      <ContactHub />
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
