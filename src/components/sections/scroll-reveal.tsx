"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

export type RevealDirection = "up" | "down" | "left" | "right";

const OFFSET = 42;

const HIDDEN: Record<RevealDirection, { x?: number; y?: number }> = {
  up: { y: OFFSET },
  down: { y: -OFFSET },
  left: { x: OFFSET },
  right: { x: -OFFSET },
};

type ScrollRevealProps = {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  className?: string;
  /** Fraction of element that must be visible (0–1). */
  amount?: number;
} & Omit<
  HTMLMotionProps<"div">,
  "children" | "initial" | "animate" | "whileInView"
>;

/**
 * Bidirectional scroll reveal: enters from a direction when in view,
 * returns to hidden when the block leaves the viewport.
 */
export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className,
  amount = 0.28,
  ...rest
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const sync = () => setMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const motionDirection: RevealDirection = mobile ? "up" : direction;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...HIDDEN[motionDirection] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount, margin: "-12% 0px -12% 0px" }}
      transition={{
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Alternate left/right (or up) offsets for card grids on the BPO page. */
export function cardReveal(index: number): {
  initial: { opacity: number; x: number; y: number };
  whileInView: { opacity: number; x: number; y: number };
} {
  const mobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;
  const fromLeft = index % 2 === 0;
  return {
    initial: {
      opacity: 0,
      x: mobile ? 0 : fromLeft ? -OFFSET : OFFSET,
      y: 18,
    },
    whileInView: { opacity: 1, x: 0, y: 0 },
  };
}

export const SCROLL_REVEAL_VIEWPORT = {
  once: false,
  amount: 0.28,
  margin: "-12% 0px -12% 0px",
} as const;

export const SCROLL_REVEAL_EASE = [0.16, 1, 0.3, 1] as const;
