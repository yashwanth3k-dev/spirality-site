import { FOOTER } from "~/lib/content/site";

/** Copyright row + Privacy / Terms / Contact links for marketing footers. */
export default function FooterLegal() {
  return (
    <div className="il-inner il-footer-legal">
      <p>
        © {new Date().getFullYear()} {FOOTER.legal}
      </p>
      <nav className="il-footer-legal-nav" aria-label="Legal">
        {FOOTER.legalLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
