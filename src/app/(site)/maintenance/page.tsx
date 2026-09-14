import { type Metadata } from "next";
import Link from "next/link";
import SubpageNav from "~/components/sections/subpage-nav";
import { FOOTER, ROUTES } from "~/lib/content/site";
import "~/styles/home-sections.css";
import "~/styles/subpage.css";
import "~/styles/legal-doc.css";

export const metadata: Metadata = {
  title: "Maintenance | Spirality Solutions",
  description:
    "Spirality Solutions is temporarily unavailable while we update the site.",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return (
    <div className="il-page legal-page">
      <SubpageNav />
      <main className="il-section legal-body">
        <div className="il-inner legal-inner">
          <p className="il-eyebrow">Maintenance</p>
          <h1 className="il-h1">We&apos;ll be right back</h1>
          <p className="il-lead il-lead-wide">
            The site is briefly offline for updates. Try again shortly, or email
            us if you need something urgent.
          </p>
          <p
            className="legal-contact"
            style={{ borderTop: "none", paddingTop: 0 }}
          >
            <a href={`mailto:${FOOTER.email}`}>{FOOTER.email}</a>
            {" · "}
            <Link href="/">Home</Link>
            {" · "}
            <Link href={ROUTES.contact}>Contact</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
