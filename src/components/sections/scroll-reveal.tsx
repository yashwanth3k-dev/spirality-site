"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

export type RevealDirection = "up" | "down" | "left" | "right";

const OFFSET = 20;

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
  /** How much of the element must enter view. `"some"` = any pixel. */
  amount?: number | "some" | "all";
} & Omit<
  HTMLMotionProps<"div">,
  "children" | "initial" | "animate" | "whileInView"
>;

/**
 * Entrance-only scroll reveal: plays once, then the block stays in place.
 */
export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className,
  amount = "some",
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
      viewport={{ once: true, amount }}
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

/** Small fade-up for cards. Play once, then leave the card in place. */
export function cardReveal(_index?: number): {
  initial: { opacity: number; x: number; y: number };
  whileInView: { opacity: number; x: number; y: number };
} {
  return {
    initial: {
      opacity: 0,
      x: 0,
      y: OFFSET,
    },
    whileInView: { opacity: 1, x: 0, y: 0 },
  };
}

export const SCROLL_REVEAL_VIEWPORT = {
  once: true,
  amount: "some",
} as const;

export const SCROLL_REVEAL_EASE = [0.16, 1, 0.3, 1] as const;
