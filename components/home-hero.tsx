"use client";

import Link from "next/link";
import { Manrope } from "next/font/google";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  HERO_VIDEO,
  homeHero,
  homeHeroNav
} from "@/lib/content/home-hero";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope"
});

function BrandMark() {
  return (
    <svg
      viewBox="0 0 31.5 48.5"
      width="100%"
      height="100%"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient
          id="cine-bg1"
          x1="8"
          y1="0"
          x2="34.1"
          y2="28.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#9e9e9e" />
          <stop offset="0.28" stopColor="#a6a6a6" />
          <stop offset="0.34" stopColor="#a3a3a3" />
          <stop offset="0.40" stopColor="#3a3a3a" />
          <stop offset="0.55" stopColor="#414141" />
          <stop offset="0.60" stopColor="#7a7a7a" />
          <stop offset="0.68" stopColor="#8e8e8e" />
          <stop offset="0.80" stopColor="#a9a9a9" />
          <stop offset="0.95" stopColor="#c4c4c4" />
          <stop offset="1" stopColor="#cccccc" />
        </linearGradient>
      </defs>
      <path
        d="M21.5 0 L21.5 19.5 L31.5 19.5 L31.5 29 L10 48.5 L10 28.5 L0.5 28.5 L0.5 18.5 Z"
        fill="url(#cine-bg1)"
      />
      <rect x="0.5" y="18.5" width="9" height="10" fill="#fdfdfd" />
      <rect x="22" y="19.5" width="9.5" height="9.5" fill="#fdfdfd" />
    </svg>
  );
}

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

export function HomeHero() {
  const [open, setOpen] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((v) => !v), []);

  useEffect(() => {
    document.body.classList.add("cine-home");
    document.body.classList.add(manrope.variable);
    return () => {
      document.body.classList.remove("cine-home");
      document.body.classList.remove(manrope.variable);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth / window.innerHeight > 1.1) close();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [close]);

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    const video = videoRef.current;
    if (!track || !stage || !video) return;

    // First hero video plays normally — no CSS zoom, no scroll scrub
    video.loop = true;
    video.muted = true;
    void video.play().catch(() => undefined);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      stage.style.setProperty("--left-opacity", "1");
      stage.style.setProperty("--right-opacity", "1");
      stage.style.setProperty("--copy-left", "1");
      stage.style.setProperty("--copy-right", "1");
      stage.style.setProperty("--cta-opacity", "1");
      stage.style.setProperty("--ui-fade", "1");
      stage.classList.add("is-reduced");
      return;
    }

    const readProgress = () => {
      const rect = track.getBoundingClientRect();
      const total = Math.max(1, track.offsetHeight - window.innerHeight);
      const scrolled = Math.min(total, Math.max(0, -rect.top));
      return scrolled / total;
    };

    const apply = (p: number) => {
      const ease = 1 - Math.pow(1 - clamp01(p), 2.1);

      // Left visible first; right + CTAs appear only after scroll; then all fade out
      const story = clamp01(ease / 0.5);
      const exit = clamp01((ease - 0.55) / 0.45);

      const leftOpacity = clamp01((1 - story * 1.1) * (1 - exit));
      const rightOpacity = clamp01(clamp01((story - 0.08) / 0.55) * (1 - exit));
      const copyLeft = clamp01((1 - story * 1.25) * (1 - exit));
      const copyRight = clamp01(clamp01((story - 0.2) / 0.5) * (1 - exit));
      const ctaOpacity = clamp01(clamp01((story - 0.25) / 0.45) * (1 - exit));
      const uiFade = clamp01(1 - exit * 1.05);

      stage.style.setProperty("--left-opacity", leftOpacity.toFixed(4));
      stage.style.setProperty("--right-opacity", rightOpacity.toFixed(4));
      stage.style.setProperty("--copy-left", copyLeft.toFixed(4));
      stage.style.setProperty("--copy-right", copyRight.toFixed(4));
      stage.style.setProperty("--cta-opacity", ctaOpacity.toFixed(4));
      stage.style.setProperty("--ui-fade", uiFade.toFixed(4));
      stage.classList.toggle("is-mid", ease > 0.28);
      stage.classList.toggle("is-deep", ease > 0.62);
      stage.classList.toggle("has-cta", ctaOpacity > 0.35);
    };

    const tick = () => {
      currentRef.current += (targetRef.current - currentRef.current) * 0.14;
      if (Math.abs(targetRef.current - currentRef.current) < 0.0005) {
        currentRef.current = targetRef.current;
      }
      apply(currentRef.current);
      if (Math.abs(targetRef.current - currentRef.current) > 0.0005) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
      }
    };

    const onScroll = () => {
      targetRef.current = readProgress();
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(tick);
    };

    targetRef.current = readProgress();
    apply(targetRef.current);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="home-hero" aria-label="Introduction">
      <div className="home-hero__track" ref={trackRef}>
        <div
          ref={stageRef}
          className={`home-hero__stage ${manrope.variable}${open ? " is-open" : ""}`}
        >
          <style>{`
            .home-hero {
              background: #050505;
              color: #fafafa;
              font-family: var(--font-manrope), Manrope, system-ui, -apple-system, sans-serif;
              -webkit-font-smoothing: antialiased;
              text-rendering: geometricPrecision;
            }
            .home-hero__track {
              position: relative;
              height: 180vh;
            }
            .home-hero__stage {
              --left-opacity: 1;
              --right-opacity: 0;
              --copy-left: 1;
              --copy-right: 0;
              --cta-opacity: 0;
              --ui-fade: 1;
              position: sticky;
              top: 0;
              height: 100vh;
              height: 100dvh;
              overflow: hidden;
              background: #050505;
            }
            .home-hero__stage *,
            .home-hero__stage *::before,
            .home-hero__stage *::after { box-sizing: border-box; }
            .home-hero a { color: inherit; text-decoration: none; }
            .home-hero a.home-hero__pill {
              color: #050505 !important;
              background: #ffffff;
            }

            .home-hero__visual {
              position: absolute;
              inset: 0;
              z-index: 0;
              overflow: hidden;
              pointer-events: none;
            }
            .home-hero__video {
              position: absolute;
              inset: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center center;
              transform: none;
            }
            .home-hero__side {
              position: absolute;
              inset: 0;
              background: linear-gradient(
                to right,
                #050505 0%,
                rgba(5,5,5,.55) 18%,
                transparent 38%,
                transparent 62%,
                rgba(5,5,5,.55) 82%,
                #050505 100%
              );
              pointer-events: none;
            }
            .home-hero__bottom {
              position: absolute;
              inset: 0;
              pointer-events: none;
              background: linear-gradient(
                to bottom,
                rgba(5,5,5,.35) 0%,
                transparent 22%,
                transparent 58%,
                rgba(5,5,5,.55) 78%,
                #050505 100%
              );
            }

            .home-hero__topbar {
              position: absolute;
              inset: 0 0 auto;
              z-index: 5;
              display: flex;
              align-items: center;
              justify-content: space-between;
              height: 5.25rem;
              padding: 0 clamp(1.25rem, 4.8vw, 4.75rem);
              pointer-events: none;
              opacity: var(--ui-fade);
            }
            .home-hero__topbar > * { pointer-events: auto; }
            .home-hero__brand {
              width: 1.9rem;
              height: 2.9rem;
              display: block;
              flex-shrink: 0;
            }
            .home-hero__links {
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              display: none;
              gap: 1.5rem;
              font-size: 0.95rem;
              font-weight: 400;
              color: #b6b5b5;
              white-space: nowrap;
            }
            .home-hero__links a:hover { color: #fafafa; }
            .home-hero__pill {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              min-height: 2.85rem;
              padding: 0 1.45rem;
              border-radius: 999px;
              background: #ffffff;
              color: #050505 !important;
              font-size: 0.95rem;
              font-weight: 500;
              line-height: 1;
            }
            .home-hero__burger {
              display: inline-flex;
              width: 2.85rem;
              height: 2.85rem;
              border-radius: 999px;
              border: 1px solid rgba(255,255,255,.14);
              background: rgba(255,255,255,.06);
              backdrop-filter: blur(12px);
              align-items: center;
              justify-content: center;
              flex-direction: column;
              gap: 0.35rem;
              cursor: pointer;
              padding: 0;
            }
            .home-hero__burger i {
              display: block;
              width: 0.95rem;
              height: 1.5px;
              background: #fff;
              border-radius: 2px;
              transition: transform .35s cubic-bezier(.22,1,.36,1);
            }
            .home-hero__stage.is-open .home-hero__burger i:first-child {
              transform: translateY(4.3px) rotate(45deg);
            }
            .home-hero__stage.is-open .home-hero__burger i:last-child {
              transform: translateY(-4.3px) rotate(-45deg);
            }

            .home-hero__menu {
              position: absolute;
              inset: 0;
              z-index: 6;
              display: flex;
              background: rgba(5,5,5,.92);
              backdrop-filter: blur(20px);
              opacity: 0;
              visibility: hidden;
              pointer-events: none;
              transition: opacity .4s ease, visibility .4s;
            }
            .home-hero__stage.is-open .home-hero__menu {
              opacity: 1;
              visibility: visible;
              pointer-events: auto;
            }
            .home-hero__menu-inner {
              display: flex;
              flex-direction: column;
              width: 100%;
              padding: 5.5rem 1.5rem 2rem;
            }
            .home-hero__menu-list {
              list-style: none;
              margin: 0;
              padding: 0;
              display: grid;
              gap: 0.35rem;
            }
            .home-hero__menu-list a {
              display: block;
              font-size: 1.65rem;
              padding: 0.55rem 0;
            }
            .home-hero__menu-foot {
              margin-top: auto;
              display: grid;
              gap: 1rem;
            }
            .home-hero__menu-foot .home-hero__pill { width: 100%; }

            .home-hero__content {
              position: absolute;
              inset: 0;
              z-index: 2;
              display: grid;
              grid-template-columns: 1fr 1fr;
              align-items: end;
              padding:
                6.5rem clamp(1.25rem, 4.8vw, 4.75rem)
                clamp(2.5rem, 6vh, 4.5rem);
              gap: 1.5rem;
              pointer-events: none;
            }
            .home-hero__content a { pointer-events: auto; }

            .home-hero__col {
              max-width: 28rem;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
            }
            .home-hero__col--right {
              justify-self: end;
              text-align: left;
            }

            .home-hero__eyebrow {
              margin: 0 0 1rem;
              font-size: 0.72rem;
              font-weight: 500;
              letter-spacing: 0.2em;
              text-transform: uppercase;
              color: #8b8a8a;
              opacity: var(--copy-left);
            }

            .home-hero__title {
              margin: 0;
              font-weight: 400;
              letter-spacing: 0.01em;
            }
            .home-hero__title-left,
            .home-hero__title-right {
              display: block;
            }
            .home-hero__title-left {
              font-size: clamp(2.35rem, 5.4vw, 4.35rem);
              line-height: 1.05;
              opacity: var(--left-opacity);
              will-change: opacity;
            }
            .home-hero__title-right {
              margin-top: 0;
              font-size: clamp(2.35rem, 5.4vw, 4.35rem);
              line-height: 1.05;
              opacity: var(--right-opacity);
              will-change: opacity;
            }
            .home-hero__title-left span,
            .home-hero__title-right span {
              display: block;
            }
            .visually-hidden {
              position: absolute;
              width: 1px;
              height: 1px;
              padding: 0;
              margin: -1px;
              overflow: hidden;
              clip: rect(0,0,0,0);
              white-space: nowrap;
              border: 0;
            }

            /* Desktop: split left/right into columns via absolute title parts */
            .home-hero__title {
              display: contents;
            }
            .home-hero__col--left .home-hero__title-left { display: block; }
            .home-hero__col--left .home-hero__title-right { display: none; }
            .home-hero__col--right .home-hero__title-left { display: none; }
            .home-hero__col--right .home-hero__title-right { display: block; }

            .home-hero__body {
              margin: 1.15rem 0 0;
              max-width: 22rem;
              font-size: clamp(0.95rem, 1.15vw, 1.1rem);
              line-height: 1.5;
              color: #a7a6a6;
              font-weight: 400;
            }
            .home-hero__body--left { opacity: var(--copy-left); }
            .home-hero__body--right { opacity: var(--copy-right); }

            .home-hero__actions {
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              gap: 1rem 1.5rem;
              margin-top: 1.5rem;
              opacity: var(--cta-opacity);
              pointer-events: none;
            }
            .home-hero__stage.has-cta .home-hero__actions,
            .home-hero__stage.is-reduced .home-hero__actions {
              pointer-events: auto;
            }
            .home-hero__actions a {
              pointer-events: inherit;
            }
            .home-hero__ghost {
              font-size: 0.95rem;
              font-weight: 500;
              color: #ffffff !important;
              letter-spacing: 0.02em;
            }
            .home-hero__ghost:hover { opacity: 0.8; }

            .home-hero__h1-grid {
              position: absolute;
              inset: 0;
              z-index: 2;
              display: grid;
              grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
              align-items: center;
              padding:
                5.75rem clamp(1.25rem, 5vw, 5rem)
                4rem;
              gap: clamp(1.5rem, 4vw, 3rem);
              pointer-events: none;
              opacity: var(--ui-fade);
            }
            .home-hero__panel {
              max-width: 26rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              pointer-events: none;
            }
            .home-hero__panel--right {
              justify-self: end;
            }
            .home-hero__panel--right .home-hero__actions,
            .home-hero__panel--right a {
              pointer-events: auto;
            }
            .home-hero__heading-left {
              margin: 0;
              font-size: clamp(1.85rem, 3.6vw, 3.15rem);
              font-weight: 400;
              line-height: 1.12;
              letter-spacing: 0.01em;
              opacity: var(--left-opacity);
              will-change: opacity;
            }
            .home-hero__heading-left span { display: block; }
            .home-hero__heading-right {
              margin: 0;
              font-size: clamp(1.85rem, 3.6vw, 3.15rem);
              font-weight: 400;
              line-height: 1.12;
              letter-spacing: 0.01em;
              opacity: var(--right-opacity);
              will-change: opacity;
            }
            .home-hero__heading-right span { display: block; }
            .home-hero__body {
              margin: 1rem 0 0;
              max-width: 22rem;
              font-size: clamp(0.92rem, 1.05vw, 1.05rem);
              line-height: 1.55;
              color: #a7a6a6;
              font-weight: 400;
            }
            .home-hero__body--left { opacity: var(--copy-left); }
            .home-hero__body--right { opacity: var(--copy-right); }
            .home-hero__heading-right--in-h1 {
              position: absolute !important;
              width: 1px !important;
              height: 1px !important;
              padding: 0 !important;
              margin: -1px !important;
              overflow: hidden !important;
              clip: rect(0, 0, 0, 0) !important;
              white-space: nowrap !important;
              border: 0 !important;
            }
            @media (min-width: 960px) {
              .home-hero__heading-right--mirror { display: block; }
            }
            @media (max-width: 959px) {
              .home-hero__heading-right--in-h1 {
                position: static !important;
                width: auto !important;
                height: auto !important;
                margin: 1.1rem 0 0 !important;
                overflow: visible !important;
                clip: auto !important;
                white-space: normal !important;
              }
              .home-hero__heading-right--mirror { display: none !important; }
              .home-hero__panel--right .home-hero__body--right,
              .home-hero__panel--right .home-hero__actions {
                display: none;
              }
              .home-hero__panel--left .home-hero__actions--mobile {
                display: flex;
                opacity: var(--cta-opacity);
              }
            }
            @media (min-width: 960px) {
              .home-hero__actions--mobile { display: none !important; }
            }

            .home-hero__stage.is-reduced .home-hero__heading-left,
            .home-hero__stage.is-reduced .home-hero__heading-right,
            .home-hero__stage.is-reduced .home-hero__body--left,
            .home-hero__stage.is-reduced .home-hero__body--right,
            .home-hero__stage.is-reduced .home-hero__eyebrow,
            .home-hero__stage.is-reduced .home-hero__actions {
              opacity: 1 !important;
              transform: none !important;
            }

            @media (min-width: 960px) {
              .home-hero__links { display: flex; }
              .home-hero__burger { display: none; }
              .home-hero__top-cta { display: inline-flex; }
            }
            @media (max-width: 959px) {
              .home-hero__top-cta { display: none; }
              .home-hero__track { height: 160vh; }
              .home-hero__h1-grid {
                grid-template-columns: 1fr;
                align-items: center;
                align-content: center;
                padding-top: 5.5rem;
                padding-bottom: 3rem;
              }
              .home-hero__panel--right {
                justify-self: start;
                margin-top: 0;
              }
              .home-hero__heading-left,
              .home-hero__heading-right {
                font-size: clamp(1.75rem, 7.5vw, 2.45rem);
              }
              .home-hero__video {
                object-position: 43% center;
              }
            }
            @media (prefers-reduced-motion: reduce) {
              .home-hero__track {
                height: 100vh;
                height: 100dvh;
              }
            }
          `}</style>

          <div className="home-hero__visual" aria-hidden="true">
            <video
              ref={videoRef}
              className="home-hero__video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src={HERO_VIDEO} type="video/mp4" />
            </video>
            <div className="home-hero__side" />
            <div className="home-hero__bottom" />
          </div>

          <header className="home-hero__topbar">
            <Link className="home-hero__brand" href="/" aria-label="Spirality Solutions home">
              <BrandMark />
            </Link>
            <nav className="home-hero__links" aria-label="Primary">
              {homeHeroNav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              className="home-hero__pill home-hero__top-cta"
              href={homeHero.primaryCta.href}
            >
              {homeHero.primaryCta.label}
            </Link>
            <button
              type="button"
              className="home-hero__burger"
              aria-expanded={open}
              aria-controls="home-hero-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={toggle}
            >
              <i />
              <i />
            </button>
          </header>

          <nav
            className="home-hero__menu"
            id="home-hero-menu"
            aria-hidden={!open}
            aria-label="Mobile"
          >
            <div className="home-hero__menu-inner">
              <ul className="home-hero__menu-list">
                {homeHeroNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} onClick={close}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="home-hero__menu-foot">
                <Link
                  className="home-hero__pill"
                  href={homeHero.primaryCta.href}
                  onClick={close}
                >
                  {homeHero.primaryCta.label}
                </Link>
                <Link
                  className="home-hero__ghost"
                  href={homeHero.secondaryCta.href}
                  onClick={close}
                >
                  {homeHero.secondaryCta.label}
                </Link>
              </div>
            </div>
          </nav>

          {/* Single H1 for SEO — visually split across two panels */}
          <div className="home-hero__h1-grid">
            <div className="home-hero__panel home-hero__panel--left">
              <p className="home-hero__eyebrow">{homeHero.eyebrow}</p>
              <h1 className="home-hero__title">
                <span className="home-hero__heading-left">
                  <span>{homeHero.left.lines[0]}</span>
                  <span>{homeHero.left.lines[1]}</span>
                </span>
                <span className="visually-hidden"> — </span>
                <span className="home-hero__heading-right home-hero__heading-right--in-h1">
                  <span>{homeHero.right.lines[0]}</span>
                  <span>{homeHero.right.lines[1]}</span>
                </span>
              </h1>
              <p className="home-hero__body home-hero__body--left">
                {homeHero.left.body}
              </p>
              <div className="home-hero__actions home-hero__actions--mobile">
                <Link className="home-hero__pill" href={homeHero.primaryCta.href}>
                  {homeHero.primaryCta.label}
                </Link>
                <Link
                  className="home-hero__ghost"
                  href={homeHero.secondaryCta.href}
                >
                  {homeHero.secondaryCta.label}
                </Link>
              </div>
            </div>

            <div className="home-hero__panel home-hero__panel--right" aria-hidden="true">
              <p className="home-hero__heading-right home-hero__heading-right--mirror">
                <span>{homeHero.right.lines[0]}</span>
                <span>{homeHero.right.lines[1]}</span>
              </p>
              <p className="home-hero__body home-hero__body--right">
                {homeHero.right.body}
              </p>
              <div className="home-hero__actions">
                <Link className="home-hero__pill" href={homeHero.primaryCta.href}>
                  {homeHero.primaryCta.label}
                </Link>
                <Link
                  className="home-hero__ghost"
                  href={homeHero.secondaryCta.href}
                >
                  {homeHero.secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
