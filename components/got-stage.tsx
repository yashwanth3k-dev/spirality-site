"use client";

import Link from "next/link";
import { Manrope } from "next/font/google";
import { useCallback, useEffect, useState } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope"
});

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204103_f607742e-09da-4cf5-bb06-4e67b0a531de.mp4";

const NAV = [
  { label: "About", href: "/#about" },
  { label: "Features", href: "/#features" },
  { label: "Got", href: "/got" },
  { label: "Contact", href: "/#contact" }
] as const;

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
          id="got-bg1"
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
        fill="url(#got-bg1)"
      />
      <rect x="0.5" y="18.5" width="9" height="10" fill="#fdfdfd" />
      <rect x="22" y="19.5" width="9.5" height="9.5" fill="#fdfdfd" />
    </svg>
  );
}

export function GotStage() {
  const [open, setOpen] = useState(false);
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

  return (
    <div
      className={`cine-stage got-stage ${manrope.variable}${open ? " is-open" : ""}`}
    >
      <style>{`
        .got-stage {
          --ink: #fafafa;
          --muted: #a7a6a6;
          --nav: #b6b5b5;
          --pill: #ffffff;
          --pill-ink: #050505;
          --u: calc(100vh / 1058);
          --uw: calc(100vw / 1487);
          --h: clamp(var(--u), calc(var(--u) * .65 + var(--uw) * .35), calc(var(--u) * 1.16));
          --ease: cubic-bezier(.22, 1, .36, 1);
          position: relative;
          width: 100%;
          height: 100vh;
          height: 100dvh;
          overflow: hidden;
          background: #050505;
          color: var(--ink);
          font-family: var(--font-manrope), 'Manrope', system-ui, -apple-system, 'Segoe UI', sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: geometricPrecision;
        }
        @supports (height: 100dvh) {
          .got-stage { --u: calc(100dvh / 1058); }
        }
        .got-stage *, .got-stage *::before, .got-stage *::after { box-sizing: border-box; }
        .got-stage a { color: inherit; text-decoration: none; }

        .got-stage .plate {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .got-stage .plate-video {
          position: absolute;
          left: 50%;
          top: calc(1 * var(--u));
          width: calc(1492 * var(--u));
          height: calc(1054 * var(--u));
          transform: translateX(calc(-50% - calc(0.5 * var(--u))));
          object-fit: cover;
          pointer-events: none;
        }
        .got-stage .plate::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(
              to bottom,
              rgba(5,5,5,0) 78.8%,
              rgba(5,5,5,.23) 79.6%,
              rgba(5,5,5,.45) 81.4%,
              rgba(5,5,5,.75) 83.3%,
              rgba(5,5,5,.84) 85.2%,
              rgba(5,5,5,.888) 88%,
              rgba(5,5,5,.905) 91%,
              rgba(5,5,5,.96) 95%,
              #050505 100%
            ),
            linear-gradient(
              to right,
              #050505 calc(50% - 746 * var(--u)),
              transparent calc(50% - 676 * var(--u)),
              transparent calc(50% + 676 * var(--u)),
              #050505 calc(50% + 746 * var(--u))
            );
        }

        .got-stage .topbar {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
        }
        .got-stage .topbar > * { pointer-events: auto; }

        .got-stage .brand {
          position: absolute;
          left: calc(75 * var(--u));
          top: calc(27 * var(--u));
          width: calc(31.5 * var(--u));
          height: calc(48.5 * var(--u));
          display: block;
        }

        .got-stage .links {
          position: absolute;
          left: 50%;
          top: calc(51 * var(--u));
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          gap: calc(24 * var(--u));
          font-size: calc(19 * var(--u));
          font-weight: 400;
          color: var(--nav);
          white-space: nowrap;
        }
        .got-stage .links a[aria-current="page"] {
          color: #fafafa;
        }

        .got-stage .pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: var(--pill);
          color: var(--pill-ink);
          font-weight: 500;
          line-height: 1;
          white-space: nowrap;
          border: none;
          cursor: pointer;
        }
        .got-stage .pill span { transform: translateY(calc(1 * var(--u))); }
        .got-stage .pill-nav {
          position: absolute;
          right: calc(75.4 * var(--u));
          top: calc(27 * var(--u));
          width: calc(175 * var(--u));
          height: calc(49 * var(--u));
          font-size: calc(20.6 * var(--u));
        }

        .got-stage .burger {
          display: none;
          position: absolute;
          right: calc(18 * var(--u));
          top: calc(18 * var(--u));
          width: calc(48 * var(--u));
          height: calc(48 * var(--u));
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.06);
          backdrop-filter: blur(14px);
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: calc(6 * var(--u));
          cursor: pointer;
          z-index: 5;
          padding: 0;
        }
        .got-stage .burger i {
          display: block;
          width: calc(16 * var(--u));
          height: 1.5px;
          background: #fff;
          border-radius: 2px;
          transition: transform .35s var(--ease);
        }
        .got-stage.is-open .burger i:first-child {
          transform: translateY(calc(4.3 * var(--m, var(--u)))) rotate(45deg);
        }
        .got-stage.is-open .burger i:last-child {
          transform: translateY(calc(-4.3 * var(--m, var(--u)))) rotate(-45deg);
        }

        .got-stage .menu {
          position: absolute;
          inset: 0;
          z-index: 4;
          display: flex;
          background: linear-gradient(160deg, rgba(5,5,5,.92), rgba(5,5,5,.78) 48%, rgba(5,5,5,.94));
          backdrop-filter: blur(22px);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity .42s var(--ease), visibility .42s;
        }
        .got-stage.is-open .menu {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }
        .got-stage .menu-inner {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: max(calc(88 * var(--m, var(--u))), env(safe-area-inset-top))
            max(calc(28 * var(--m, var(--u))), env(safe-area-inset-right))
            max(calc(36 * var(--m, var(--u))), env(safe-area-inset-bottom))
            max(calc(28 * var(--m, var(--u))), env(safe-area-inset-left));
        }
        .got-stage .menu-eyebrow {
          margin: 0 0 calc(22 * var(--m, var(--u)));
          font-size: calc(13 * var(--m, var(--u)));
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,.45);
        }
        .got-stage .menu-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: calc(8 * var(--m, var(--u)));
        }
        .got-stage .menu-list a {
          display: flex;
          font-size: max(25px, calc(31 * var(--m, var(--u))));
          font-weight: 400;
          padding: calc(10 * var(--m, var(--u))) 0;
        }
        .got-stage .menu-foot {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: calc(18 * var(--m, var(--u)));
          padding-top: calc(32 * var(--m, var(--u)));
        }
        .got-stage .menu-foot .pill {
          width: 100%;
          height: calc(52 * var(--m, var(--u)));
          font-size: calc(18 * var(--m, var(--u)));
        }
        .got-stage .menu-foot .ghost {
          text-align: center;
          position: static;
        }

        .got-stage .hero {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
        }
        .got-stage .hero > * { pointer-events: auto; }

        .got-stage .headline {
          position: absolute;
          left: calc(75.5 * var(--u));
          top: calc(230.5 * var(--u));
          margin: 0;
          font-size: calc(71.6 * var(--h));
          line-height: calc(80.5 * var(--h));
          font-weight: 400;
          letter-spacing: calc(0.3 * var(--h));
          color: var(--ink);
          white-space: nowrap;
        }
        .got-stage .headline span { display: block; }

        .got-stage .sub {
          position: absolute;
          left: calc(75.5 * var(--u));
          top: calc(230.5 * var(--u) + 189 * var(--h));
          margin: 0;
          font-size: calc(20.7 * var(--h));
          line-height: calc(23.5 * var(--h));
          font-weight: 400;
          word-spacing: calc(1.8 * var(--h));
          color: var(--muted);
          white-space: nowrap;
        }
        .got-stage .sub span { display: block; }

        .got-stage .actions { position: absolute; inset: 0; pointer-events: none; }
        .got-stage .actions > * { pointer-events: auto; }

        .got-stage .pill-cta {
          position: absolute;
          left: calc(74.9 * var(--u));
          top: calc(230.5 * var(--u) + 264.5 * var(--h));
          width: calc(175.6 * var(--h));
          height: calc(50 * var(--h));
          font-size: calc(20.6 * var(--h));
        }
        .got-stage .ghost {
          position: absolute;
          left: calc(74.9 * var(--u) + 220.6 * var(--h));
          top: calc(230.5 * var(--u) + 279.5 * var(--h));
          font-size: calc(20.6 * var(--h));
          font-weight: 500;
          letter-spacing: calc(0.12 * var(--h));
          color: #fff;
          background: none;
          border: none;
          padding: 0;
          line-height: 1;
          white-space: nowrap;
        }

        @media (max-aspect-ratio: 11/10) {
          .got-stage {
            --m: min(100vw / 430, 1.34px);
            --u: var(--m);
            --h: var(--m);
            height: auto;
            min-height: 100vh;
            min-height: 100dvh;
            overflow: visible;
            display: flex;
            flex-direction: column;
          }
          .got-stage .plate { position: absolute; inset: 0; }
          .got-stage .plate-video {
            left: 0; top: 0; width: 100%; height: 100%;
            transform: none; object-fit: cover; object-position: 43% center;
          }
          .got-stage .plate::after {
            background:
              linear-gradient(to right, rgba(5,5,5,.86), rgba(5,5,5,.66) 42%, rgba(5,5,5,.20) 78%, rgba(5,5,5,.10)),
              linear-gradient(to bottom, rgba(5,5,5,.72) 0%, rgba(5,5,5,.34) 24%, rgba(5,5,5,.34) 56%, rgba(5,5,5,.80) 82%, rgba(5,5,5,.97) 94%, #050505);
          }
          .got-stage .topbar {
            position: relative;
            height: calc(84 * var(--m));
            flex-shrink: 0;
          }
          .got-stage .brand {
            left: calc(22 * var(--m));
            top: calc(18 * var(--m));
            width: calc(26 * var(--m));
            height: calc(40 * var(--m));
          }
          .got-stage .links,
          .got-stage .pill-nav { display: none; }
          .got-stage .burger {
            display: inline-flex;
            right: calc(18 * var(--m));
            top: calc(18 * var(--m));
            width: calc(48 * var(--m));
            height: calc(48 * var(--m));
          }
          .got-stage .hero {
            position: relative;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: calc(24 * var(--m)) calc(22 * var(--m)) calc(48 * var(--m));
            min-height: calc(520 * var(--m));
          }
          .got-stage .headline,
          .got-stage .sub,
          .got-stage .pill-cta,
          .got-stage .ghost {
            position: static;
            white-space: normal;
          }
          .got-stage .headline {
            font-size: calc(42 * var(--m));
            line-height: 1.12;
            max-width: 11ch;
          }
          .got-stage .headline span { display: inline; }
          .got-stage .headline span:first-child::after { content: " "; }
          .got-stage .sub {
            margin-top: calc(18 * var(--m));
            font-size: calc(16 * var(--m));
            line-height: 1.45;
            max-width: 28ch;
            word-spacing: normal;
          }
          .got-stage .sub span { display: inline; }
          .got-stage .sub span:first-child::after { content: " "; }
          .got-stage .actions {
            position: static;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: calc(16 * var(--m));
            margin-top: calc(28 * var(--m));
          }
          .got-stage .pill-cta {
            width: calc(168 * var(--m));
            height: calc(48 * var(--m));
            font-size: calc(17 * var(--m));
          }
          .got-stage .ghost {
            font-size: calc(16.5 * var(--m));
          }
        }
      `}</style>

      <div className="plate" aria-hidden="true">
        <video
          className="plate-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      </div>

      <header className="topbar">
        <Link className="brand" href="/" aria-label="Home">
          <BrandMark />
        </Link>
        <nav className="links" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.label === "Got" ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="pill pill-nav" href="/start-diagnostic">
          <span>Get Started</span>
        </Link>
        <button
          type="button"
          className="burger"
          aria-expanded={open}
          aria-controls="got-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={toggle}
        >
          <i />
          <i />
        </button>
      </header>

      <nav
        className="menu"
        id="got-menu"
        aria-hidden={!open}
        aria-label="Mobile"
      >
        <div className="menu-inner">
          <p className="menu-eyebrow">Menu</p>
          <ul className="menu-list">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={close}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="menu-foot">
            <Link className="pill" href="/start-diagnostic" onClick={close}>
              <span>Get Started</span>
            </Link>
            <Link className="ghost" href="/" onClick={close}>
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="hero">
        <h1 className="headline">
          <span>Got</span>
          <span>the Signal</span>
        </h1>
        <p className="sub">
          <span>A dedicated stage for the next visual layer —</span>
          <span>built to ship, scale, and stay in frame.</span>
        </p>
        <div className="actions">
          <Link className="pill pill-cta" href="/start-diagnostic">
            <span>Get Started</span>
          </Link>
          <Link className="ghost" href="/">
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
