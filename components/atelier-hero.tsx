"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Instrument_Serif, Inter } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap"
});

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204103_f607742e-09da-4cf5-bb06-4e67b0a531de.mp4";

const NAV_DESKTOP = ["Projects", "Expertise", "Studio", "Insights"] as const;
const NAV_MOBILE = [
  "Projects",
  "Expertise",
  "Studio",
  "Insights",
  "Reach Out"
] as const;

const EASE = "cubic-bezier(0.76, 0, 0.24, 1)";

export function AtelierHero() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((v) => !v), []);

  useEffect(() => {
    document.body.classList.add("atelier-lock");
    return () => {
      document.body.classList.remove("atelier-lock");
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <section
      className={`${instrumentSerif.variable} ${inter.variable} relative h-screen w-full overflow-hidden font-inter`}
    >
      {/* Fullscreen video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Soft vignette for type legibility — not a card, edge atmosphere only */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/55"
        aria-hidden="true"
      />

      {/* Content layer */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Navbar */}
        <header className="flex items-center justify-between px-6 py-5 md:px-12 md:py-6 lg:px-16">
          <div className="flex items-center gap-8 lg:gap-10">
            <a
              href="#top"
              className="font-inter text-lg font-semibold tracking-tight text-white"
            >
              Atelier
            </a>
            <nav
              className="hidden items-center gap-7 md:flex"
              aria-label="Primary"
            >
              {NAV_DESKTOP.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-light text-white/80 transition-colors duration-200 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="#reach-out"
              className="hidden text-sm font-light text-white/80 transition-colors duration-200 hover:text-white md:inline"
            >
              Reach Out
            </a>
            <a
              href="#lets-talk"
              className="hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-opacity duration-200 hover:opacity-90 md:inline-flex"
            >
              Let&apos;s Talk
            </a>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              className="relative flex h-11 w-11 items-center justify-center md:hidden"
              aria-expanded={open}
              aria-controls="atelier-mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={toggle}
            >
              <span className="sr-only">{open ? "Close" : "Menu"}</span>
              <span className="relative flex h-4 w-6 flex-col items-end justify-between">
                <span
                  className={`block h-0.5 w-6 rounded-full bg-white transition-all duration-500 ${
                    open ? "translate-y-[7px] rotate-45" : ""
                  }`}
                  style={{ transitionTimingFunction: EASE }}
                />
                <span
                  className={`block h-0.5 w-4 rounded-full bg-white transition-all duration-500 ${
                    open ? "opacity-0" : ""
                  }`}
                  style={{ transitionTimingFunction: EASE }}
                />
                <span
                  className={`block h-0.5 w-6 rounded-full bg-white transition-all duration-500 ${
                    open ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                  style={{ transitionTimingFunction: EASE }}
                />
              </span>
            </button>
          </div>
        </header>

        {/* Hero content */}
        <div className="flex flex-1 flex-col items-center justify-start px-6 pb-10 pt-4 text-center sm:pt-6 md:pt-8 lg:pt-10">
          <h1 className="max-w-5xl font-instrument-serif text-3xl leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            UX <span className="italic font-instrument-serif">and</span> APP
            <br />
            DESIGN <span className="italic font-instrument-serif">for</span> BOLD
            <br />
            VENTURES
          </h1>

          <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-white/70 md:mt-5 md:text-base">
            We shape digital products that define brands
            <br className="hidden sm:block" />
            and unlock exponential growth.
          </p>

          <div className="mt-5 flex flex-col items-center gap-4 sm:flex-row md:mt-6">
            <a
              href="#cases"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-opacity duration-200 hover:opacity-95"
            >
              See Cases
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#reel"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3 text-sm font-medium text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/10"
            >
              <Play className="h-4 w-4 fill-current" />
              Watch Reel
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        id="atelier-mobile-menu"
        className={`fixed inset-0 z-50 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity duration-700 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionTimingFunction: EASE }}
          onClick={close}
        />

        <div
          className={`relative z-10 flex h-full flex-col transition-all duration-700 ${
            open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionTimingFunction: EASE }}
        >
          {/* Menu header */}
          <div className="flex items-center justify-between px-6 py-5">
            <a
              href="#top"
              className="font-inter text-lg font-semibold tracking-tight text-white"
              onClick={close}
            >
              Atelier
            </a>
            <button
              type="button"
              className="relative flex h-11 w-11 items-center justify-center"
              aria-label="Close menu"
              onClick={close}
            >
              <span className="relative flex h-4 w-6 flex-col items-end justify-between">
                <span
                  className="block h-0.5 w-6 translate-y-[7px] rotate-45 rounded-full bg-white transition-all duration-500"
                  style={{ transitionTimingFunction: EASE }}
                />
                <span className="block h-0.5 w-4 rounded-full bg-white opacity-0" />
                <span
                  className="block h-0.5 w-6 -translate-y-[7px] -rotate-45 rounded-full bg-white transition-all duration-500"
                  style={{ transitionTimingFunction: EASE }}
                />
              </span>
            </button>
          </div>

          {/* Nav links */}
          <nav
            className="flex flex-1 flex-col items-center justify-center px-6"
            aria-label="Mobile"
          >
            <ul className="w-full max-w-md">
              {NAV_MOBILE.map((item, index) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={close}
                    className={`block border-b border-white/10 py-4 font-instrument-serif text-4xl text-white transition-all duration-500 hover:pl-4 sm:text-5xl ${
                      open
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                    style={{
                      transitionTimingFunction: EASE,
                      transitionDelay: open ? `${150 + index * 80}ms` : "0ms"
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer CTA */}
          <div className="px-6 pb-10 pt-4">
            <a
              href="#lets-talk"
              onClick={close}
              className={`flex w-full items-center justify-center rounded-full bg-white py-4 text-sm font-medium text-black transition-all duration-700 hover:opacity-95 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionTimingFunction: EASE,
                transitionDelay: open ? "550ms" : "0ms"
              }}
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
