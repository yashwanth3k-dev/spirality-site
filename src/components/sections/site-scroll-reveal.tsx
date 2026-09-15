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
  ".ct-person",
  ".ct-stages > li",
  ".ct-faq-list > details",
  ".abt-refuse",
  ".abt-manifesto",
  ".abt-belief",
  ".abt-founder",
].join(",");

const CARD_SCENE_SELECTOR = [
  ".om-section",
  ".gfc-section",
  ".oc-section",
  ".doc-section",
  ".so-section",
  ".auc-section",
  ".gap-section",
  ".dd-section",
  ".dn-section",
  ".sc-section",
].join(", ");

const DIRECTIONS = ["up"] as const;

/**
 * Site-wide viewport entrance for marketing content. Plays once, then stays.
 * Cards that already use Framer Motion are not observed here. Navigation and
 * footers stay stable.
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
          element.closest(
            "footer, .il-footer, .sp-nav, [data-no-reveal], " +
              CARD_SCENE_SELECTOR
          )
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
            if (!entry.isIntersecting) continue;
            entry.target.classList.add("ssr-visible");
            observer?.unobserve(entry.target);
          }
        },
        {
          threshold: 0,
          rootMargin: "0px",
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
      start();
    };

    const frame = window.requestAnimationFrame(kick);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      window.clearTimeout(mutationTimer);
      mutationObserver?.disconnect();
      observer?.disconnect();
    };
  }, []);

  return null;
}
