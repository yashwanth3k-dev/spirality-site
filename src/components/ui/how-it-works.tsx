"use client";

import { useEffect, useRef, useState } from "react";
import {
  SECTION_ICONS,
  type SectionIconName,
} from "~/lib/content/section-icons";
import { cn } from "~/lib/utils";

export interface Step {
  title: string;
  description: string;
  colorTheme?: "blue" | "ink";
  icon?: SectionIconName;
}

export interface HowItWorksProps {
  features?: Step[];
  className?: string;
}

const DEFAULT_FEATURES: Step[] = [
  {
    title: "Diagnose",
    description: "Assess where AI pays — and where it does not.",
    icon: "search",
  },
  {
    title: "Engineer",
    description: "Build with your context, rules and systems.",
    icon: "wrench",
  },
  {
    title: "Prove",
    description: "Test on your real work before you scale it.",
    icon: "flask",
  },
  {
    title: "Deliver",
    description: "Run it with us, or hand it to your team.",
    icon: "rocket",
  },
];

/**
 * Wavy process path with hex icon nodes — matches the reference layout,
 * Spirality content, no step numbers.
 */
export default function HowItWorks({ features, className }: HowItWorksProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const data = features && features.length > 0 ? features : DEFAULT_FEATURES;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.22, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className={cn("il-wave", visible && "is-visible", className)}
    >
      {/* connecting wave */}
      <svg
        className="il-wave-path"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* path starts at first node — no lead-in bump before Diagnose */}
        <path
          d="M90 55 C 280 55, 320 155, 450 155 S 620 55, 750 55 S 920 155, 1110 155"
          fill="none"
          stroke="url(#il-wave-grad)"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="il-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1539D1" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#6B7CFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#1539D1" stopOpacity="0.85" />
          </linearGradient>
        </defs>
      </svg>

      <ol className="il-wave-steps">
        {data.map((step, index) => {
          const Icon = step.icon ? SECTION_ICONS[step.icon] : null;
          return (
            <li
              key={step.title}
              className="il-wave-step"
              style={{ ["--wave-delay" as string]: `${120 + index * 560}ms` }}
            >
              <div className="il-wave-hex-wrap">
                <span className="il-wave-glow" aria-hidden="true" />
                <div className="il-wave-hex">
                  {Icon ? (
                    <Icon className="il-wave-icon" strokeWidth={1.7} />
                  ) : null}
                </div>
              </div>
              <h3 className="il-wave-title">{step.title}</h3>
              <p className="il-wave-copy">{step.description}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
