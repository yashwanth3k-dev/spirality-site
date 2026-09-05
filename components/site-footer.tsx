import Link from "next/link";
import { Brand } from "@/components/brand";
import { Container } from "@/components/layout";

const footerGroups = [
  {
    title: "Spirality",
    links: [
      ["Solutions", "/solutions"],
      ["How We Work", "/how-we-work"],
      ["Use Cases", "/use-cases"],
      ["Got", "/got"],
      ["Start Diagnostic", "/start-diagnostic"]
    ]
  },
  {
    title: "Capabilities",
    links: [
      ["AI Strategy", "/solutions#strategy"],
      ["AI Agents", "/solutions#systems"],
      ["Digital Infrastructure", "/solutions#infrastructure"],
      ["Managed Operations", "/solutions#operations"]
    ]
  },
  {
    title: "Future Platform",
    links: [
      ["Bizdaptive", "/bizdaptive"],
      ["Responsible AI", "/how-we-work#responsible-ai"],
      ["Early Access", "/bizdaptive#early-access"]
    ]
  }
];

export function SiteFooter() {
  return (
    <footer className="bg-night text-white">
      <Container size="wide" className="py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Brand light />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              We help businesses identify, build, and operate AI-powered
              business systems.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                  {group.title}
                </h3>
                <div className="mt-4 grid gap-2.5">
                  {group.links.map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className="text-sm text-white/70 transition hover:text-white"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>2026 Spirality Solutions Private Limited. All rights reserved.</span>
          <a href="mailto:info@bizdaptive.com" className="hover:text-white">
            info@bizdaptive.com
          </a>
        </div>
      </Container>
    </footer>
  );
}
