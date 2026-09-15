"use client";

import { useEffect } from "react";
import "~/styles/site-scroll-reveal.css";

const REVEAL_SELECTOR = [
  "main > header",
  "main > section",
  "article > header",
  "article > section",
  ".il-page > .il-section",
  ".sp-hero",
  ".sp-section",
  ".sp-close",
  ".ct-hero",
  ".ct-band",
  ".abt-hero",
  ".abt-band",
  ".uch-hero",
  ".uch-catalog",
  ".blg-catalog",
  ".csd-catalog",
  ".ucd-hero",
  ".ucd-section",
  ".uch-banner",
  ".il-offer-flip",
  ".il-benefit-card",
  ".ct-person",
  ".ct-stages > li",
  ".ct-faq-list > details",
  ".abt-refuse",
  ".abt-manifesto",
  ".abt-belief",
  ".abt-founder",
  ".uch-card",
  ".blg-card",
  ".csd-card",
  ".ucd-card",
].join(",");

const DIRECTIONS = ["left", "right", "up", "down"] as const;

/**
 * Site-wide, bidirectional viewport motion for marketing content.
 * Content re-enters whenever it returns to the viewport; navigation and
 * footers intentionally remain stable.
 *
 * Do not mutate React-owned nodes until after hydration. Streaming RSC
 * inserts HTML, then hydrates; touching className in that window produces
 * `ssr-item` / `data-reveal-direction` mismatches.
 */
export default function SiteScrollReveal() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced || !("IntersectionObserver" in window)) return;

    let cancelled = false;
    let directionIndex = 0;
    let startTimer = 0;
    let mutationTimer = 0;
    let observer: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;
    const observed = new WeakSet<Element>();

    const register = (root: ParentNode) => {
      if (!observer) return;
      const elements = root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);

      for (const element of elements) {
        if (
          observed.has(element) ||
          element.closest("footer, .il-footer, .sp-nav, [data-no-reveal]")
        ) {
          continue;
        }

        observed.add(element);
        const rect = element.getBoundingClientRect();
        const isInitiallyVisible =
          rect.bottom > 0 && rect.top < window.innerHeight;
        if (isInitiallyVisible) {
          continue;
        }
        element.classList.add("ssr-item");
        element.dataset.revealDirection =
          DIRECTIONS[directionIndex % DIRECTIONS.length];
        directionIndex += 1;
        observer.observe(element);
      }
    };

    const start = () => {
      if (cancelled) return;

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            entry.target.classList.toggle("ssr-visible", entry.isIntersecting);
          }
        },
        {
          threshold: 0.12,
          rootMargin: "-7% 0px -10% 0px",
        }
      );

      register(document);

      mutationObserver = new MutationObserver(() => {
        window.clearTimeout(mutationTimer);
        mutationTimer = window.setTimeout(() => {
          if (!cancelled) register(document);
        }, 200);
      });

      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    };

    const kick = () => {
      if (cancelled) return;
      if (typeof window.requestIdleCallback === "function") {
        window.requestIdleCallback(() => start(), { timeout: 1200 });
      } else {
        startTimer = window.setTimeout(start, 400);
      }
    };

    if (document.readyState === "complete") {
      startTimer = window.setTimeout(kick, 250);
    } else {
      window.addEventListener("load", kick, { once: true });
    }

    return () => {
      cancelled = true;
      window.clearTimeout(startTimer);
      window.clearTimeout(mutationTimer);
      window.removeEventListener("load", kick);
      mutationObserver?.disconnect();
      observer?.disconnect();
    };
  }, []);

  return null;
}
