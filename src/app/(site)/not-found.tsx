import Link from "next/link";
import SubpageNav from "~/components/sections/subpage-nav";
import { ROUTES } from "~/lib/content/site";
import "~/styles/home-sections.css";
import "~/styles/subpage.css";
import "~/styles/legal-doc.css";

export default function NotFound() {
  return (
    <div className="il-page legal-page">
      <SubpageNav />
      <main className="il-section legal-body">
        <div className="il-inner legal-inner">
          <p className="il-eyebrow">404</p>
          <h1 className="il-h1">Page not found</h1>
          <p className="il-lead il-lead-wide">
            That URL isn&apos;t on this site. Head home or talk to us if you
            were looking for something specific.
          </p>
          <p
            className="legal-contact"
            style={{ borderTop: "none", paddingTop: 0 }}
          >
            <Link href="/">Home</Link>
            {" · "}
            <Link href={ROUTES.contact}>Contact</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
