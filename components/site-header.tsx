import Link from "next/link";
import { Brand } from "@/components/brand";
import { MobileNav } from "@/components/mobile-nav";
import { Container } from "@/components/layout";
import { ButtonLink } from "@/components/ui/button";
import { navItems } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/90 backdrop-blur-xl">
      <Container size="wide" className="flex h-[4.5rem] items-center justify-between gap-4">
        <Brand />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-600 transition hover:bg-paper hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ButtonLink href="/start-diagnostic" className="hidden sm:inline-flex">
            Start Diagnostic
          </ButtonLink>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
