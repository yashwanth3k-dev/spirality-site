import HeroScrollDriver from "~/components/sections/hero-scroll-driver";
import { HERO_CTA } from "~/lib/content/site";
import "~/styles/instinct-hero.css";

export default function InstinctHero() {
  return (
    <div className="ih-scroll">
      <HeroScrollDriver />
      <div className="ih-sticky">
        <HeroPanel />
      </div>
    </div>
  );
}

function HeroPanel() {
  return (
    <section className="ih-root">
      {/* Each sentence lands on its own stretch of scroll — see .ih-step */}
      <div className="ih-copy">
        <h1 className="ih-heading">
          <span className="ih-line">
            AI knows <span className="lo">a lot.</span>
          </span>
          <span className="ih-line ih-step ih-step-2">
            <span className="lo">But does it know</span> your business?
          </span>
        </h1>

        <p className="ih-sub ih-step ih-step-3">
          We build AI around the way your business actually works.
        </p>

        <span className="ih-cta-wrap ih-step ih-step-4">
          <a className="ih-cta" href={HERO_CTA.secondary.href}>
            {HERO_CTA.secondary.label}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M5 12h13M13 6l6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </span>
      </div>

      <div className="ih-stage">
        <div className="ih-hand ih-hand-left">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero/hand-robot-a.png" alt="" aria-hidden="true" />
        </div>

        <div className="ih-hand ih-hand-right">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero/hand-human-a.png" alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
