"use client";

import Link from "next/link";
import { Button } from "@/components/ui/shadcn-button";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about-us" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Contacts", href: "#contacts" }
] as const;

export function SentinelNavbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-5 lg:px-16">
      <Link
        href="/sentinel"
        className="text-xl font-semibold tracking-tight text-foreground"
      >
        SENTINEL
      </Link>

      <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
        {NAV_LINKS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <Button
        variant="navCta"
        size="lg"
        className="hidden rounded-lg px-6 text-xs uppercase tracking-widest md:inline-flex"
        asChild
      >
        <a href="#get-quote">Get Quote</a>
      </Button>
    </header>
  );
}
