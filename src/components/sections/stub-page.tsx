import { type ReactNode } from "react";
import Link from "next/link";
import BrandLogo from "~/components/sections/brand-logo";
import ThemeSwitch from "~/components/sections/theme-switch";
import "~/styles/home-sections.css";
import "~/styles/subpage.css";

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path
        d="M5 12h13M13 6l6 6-6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export type StubItem = {
  term: string;
  line: string;
  href?: string;
};

/**
 * Shared shell for the Phase 2 pages that are linked from the homepage but
 * not written yet. Carries the real copy we have and says plainly that the
 * rest is still to come — no filler claims.
 */
export default function StubPage({
  eyebrow,
  title,
  lead,
  items,
  itemsId,
  actions,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  items?: StubItem[];
  itemsId?: string;
  actions?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="il-page il-stub">
      <header className="il-stub-top">
        <Link
          className="il-back"
          href="/"
          aria-label="Spirality Solutions home"
        >
          <span aria-hidden="true">←</span>
          <BrandLogo />
        </Link>
        <div className="il-stub-tools">
          <ThemeSwitch />
          <span className="il-stub-flag">Page in progress</span>
        </div>
      </header>

      <section className="il-section il-stub-body">
        <div className="il-inner">
          <p className="il-eyebrow">{eyebrow}</p>
          <h1 className="il-h1">{title}</h1>
          {lead ? <p className="il-lead il-lead-wide">{lead}</p> : null}

          {items?.length ? (
            <dl className="il-domains" id={itemsId}>
              {items.map((item) => (
                <div className="il-domain" key={item.term}>
                  <dt>
                    {item.href ? (
                      <a className="il-domain-link" href={item.href}>
                        {item.term} <Arrow />
                      </a>
                    ) : (
                      item.term
                    )}
                  </dt>
                  <dd>{item.line}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          {children}

          <div className="il-actions il-actions-start">
            {actions ?? (
              <>
                <Link className="il-btn il-btn-solid" href="/contact">
                  Talk to Us <Arrow />
                </Link>
                <Link className="il-btn il-btn-ghost" href="/">
                  Back to homepage
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
