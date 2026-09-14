"use client";

import Link from "next/link";
import BrandLogo from "~/components/sections/brand-logo";
import MobileNav from "~/components/sections/mobile-nav";
import SlideTabsNav from "~/components/sections/slide-tabs-nav";
import ThemeSwitch from "~/components/sections/theme-switch";
import "~/styles/instinct-hero.css";
import "~/styles/home-sections.css";
import "~/styles/subpage.css";

/** Shared top chrome for marketing pages — stays fixed while you scroll. */
export default function SubpageNav() {
  return (
    <nav className="sp-nav" aria-label="Primary">
      <Link className="sp-logo" href="/" aria-label="Spirality Solutions home">
        <BrandLogo />
      </Link>
      <SlideTabsNav />
      <div className="sp-nav-end">
        <ThemeSwitch />
        <Link className="sp-navcta" href="/contact">
          Talk to Us
        </Link>
        <MobileNav />
      </div>
    </nav>
  );
}
