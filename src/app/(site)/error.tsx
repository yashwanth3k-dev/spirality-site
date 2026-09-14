"use client";

import { useEffect } from "react";
import Link from "next/link";
import SubpageNav from "~/components/sections/subpage-nav";
import { ROUTES } from "~/lib/content/site";
import "~/styles/home-sections.css";
import "~/styles/subpage.css";
import "~/styles/legal-doc.css";

export default function SiteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="il-page legal-page">
      <SubpageNav />
      <main className="il-section legal-body">
        <div className="il-inner legal-inner">
          <p className="il-eyebrow">Error</p>
          <h1 className="il-h1">Something went wrong</h1>
          <p className="il-lead il-lead-wide">
            That page hit a snag. Try again, or head home — if it keeps
            happening, tell us.
          </p>
          <p
            className="legal-contact"
            style={{ borderTop: "none", paddingTop: 0 }}
          >
            <button type="button" className="il-error-retry" onClick={reset}>
              Try again
            </button>
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
