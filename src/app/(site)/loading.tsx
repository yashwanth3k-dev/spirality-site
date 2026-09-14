import BrandLogo from "~/components/sections/brand-logo";
import "~/styles/home-sections.css";
import "~/styles/subpage.css";
import "~/styles/legal-doc.css";

/** Route-level loading UI for marketing pages. */
export default function SiteLoading() {
  return (
    <div className="il-page legal-page" aria-busy="true" aria-live="polite">
      <div className="il-loading">
        <BrandLogo />
        <p className="il-loading-label">Loading</p>
      </div>
    </div>
  );
}
