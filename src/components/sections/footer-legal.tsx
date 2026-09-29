import { FOOTER, WHATSAPP_BLURB } from "~/lib/content/site";

/** Copyright row, WhatsApp service line, and legal links for marketing footers. */
export default function FooterLegal() {
  return (
    <>
      <p className="il-inner il-footer-whatsapp">{WHATSAPP_BLURB}</p>
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
    </>
  );
}
