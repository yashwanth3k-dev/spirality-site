"use client";

import { useCallback, type PointerEvent, type ReactNode } from "react";

/** Feeds the pointer position into CSS vars so a card can light up under the cursor. */
export default function SpotlightCard({
  className = "",
  children,
  id,
  onHoverChange,
}: {
  className?: string;
  children: ReactNode;
  id?: string;
  onHoverChange?: (hovered: boolean) => void;
}) {
  const handleMove = useCallback((e: PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div
      id={id}
      className={className}
      onPointerMove={handleMove}
      onPointerEnter={() => onHoverChange?.(true)}
      onPointerLeave={() => onHoverChange?.(false)}
    >
      {children}
    </div>
  );
}
