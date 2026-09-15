"use client";

import { useEffect } from "react";

/**
 * Native path uses CSS scroll-driven animations (desktop Chrome + current
 * Safari). This driver mirrors hand converge and copy fades on engines that
 * do not support `animation-timeline` yet — older iOS in particular.
 */
export default function HeroScrollDriver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const native =
      CSS.supports("animation-timeline: scroll(root block)") ||
      CSS.supports("animation-timeline: scroll()");
    if (native) return;

    const root = document.querySelector<HTMLElement>(".ih-scroll");
    if (!root) return;

    root.classList.add("ih-scroll-js");

    const update = () => {
      const total = Math.max(1, root.offsetHeight - window.innerHeight);
      const progress = Math.min(
        1,
        Math.max(0, -root.getBoundingClientRect().top / total)
      );
      root.style.setProperty("--ih-p", progress.toFixed(4));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return null;
}
