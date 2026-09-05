"use client";

import { useEffect, useRef, useState } from "react";

const SPLINE_SCENE =
  "https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode";

/**
 * High-fidelity Spline embed via official viewer (avoids Turbopack WASM bundling issues).
 * Same scene URL as @splinetool/react-spline.
 */
export function SplineBackground({ scene = SPLINE_SCENE }: { scene?: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let cancelled = false;

    const sizeAttrs = () => {
      // Cap at 2x DPR for crisp retina without melting GPUs
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      return {
        width: Math.round(window.innerWidth * dpr),
        height: Math.round(window.innerHeight * dpr)
      };
    };

    const mount = () => {
      if (cancelled || !hostRef.current) return;
      hostRef.current.innerHTML = "";
      const { width, height } = sizeAttrs();
      const viewer = document.createElement("spline-viewer");
      viewer.setAttribute("url", scene);
      viewer.setAttribute("loading", "eager");
      viewer.setAttribute("loading-anim-type", "spinner-small-dark");
      viewer.setAttribute("hint", "false");
      viewer.setAttribute("width", String(width));
      viewer.setAttribute("height", String(height));
      viewer.style.width = "100%";
      viewer.style.height = "100%";
      viewer.style.display = "block";
      viewer.style.background = "transparent";
      hostRef.current.appendChild(viewer);
      setReady(true);
    };

    const existing = document.querySelector(
      "script[data-spline-viewer]"
    ) as HTMLScriptElement | null;

    if (existing) {
      if (customElements.get("spline-viewer")) mount();
      else existing.addEventListener("load", mount, { once: true });
      return () => {
        cancelled = true;
        if (hostRef.current) hostRef.current.innerHTML = "";
      };
    }

    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.10.51/build/spline-viewer.js";
    script.dataset.splineViewer = "true";
    script.addEventListener("load", mount, { once: true });
    document.head.appendChild(script);

    return () => {
      cancelled = true;
      if (hostRef.current) hostRef.current.innerHTML = "";
    };
  }, [scene]);

  return (
    <div className="absolute inset-0">
      {!ready ? <div className="absolute inset-0 bg-hero-bg" /> : null}
      <div ref={hostRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
