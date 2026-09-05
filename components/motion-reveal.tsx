"use client";

import { motion } from "motion/react";

type MotionRevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function MotionReveal({ children, delay = 0, className }: MotionRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
