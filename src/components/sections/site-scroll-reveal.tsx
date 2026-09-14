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
 * Mutations are deferred until after hydration so React does not see
 * `ssr-item` / `data-reveal-direction` on the first client pass.
 */
export default function SiteScrollReveal() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced || !("IntersectionObserver" in window)) return;

    let cancelled = false;
    let directionIndex = 0;
    let rafOuter = 0;
    let rafInner = 0;
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

      mutationObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          for (const node of mutation.addedNodes) {
            if (node instanceof HTMLElement) register(node);
          }
        }
      });

      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    };

    // Double rAF: wait until after paint/hydration before touching the DOM.
    rafOuter = window.requestAnimationFrame(() => {
      rafInner = window.requestAnimationFrame(start);
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(rafOuter);
      window.cancelAnimationFrame(rafInner);
      mutationObserver?.disconnect();
      observer?.disconnect();
    };
  }, []);

  return null;
}
