"use client";

import { motion, useReducedMotion } from "motion/react";
import { Hammer, PenTool, Rocket, Search, type LucideIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import "~/styles/agent-flow.css";
import "~/styles/digital-delivery.css";

const ICONS: Record<string, LucideIcon> = {
  Understand: Search,
  Design: PenTool,
  Build: Hammer,
  "Launch & Grow": Rocket,
};

const VIEW_W = 1168;
const VIEW_H = 320;

/** Four delivery beats on the same down / up wave as the agent flow. */
const NODES = [
  { x: 140, y: 220 },
  { x: 428, y: 88 },
  { x: 740, y: 220 },
  { x: 1028, y: 88 },
] as const;

const WAVE_D = [
  `M${NODES[0].x} ${NODES[0].y}`,
  `C${NODES[0].x + 80} ${NODES[0].y}, ${NODES[1].x - 80} ${NODES[1].y}, ${NODES[1].x} ${NODES[1].y}`,
  `C${NODES[1].x + 80} ${NODES[1].y}, ${NODES[2].x - 80} ${NODES[2].y}, ${NODES[2].x} ${NODES[2].y}`,
  `C${NODES[2].x + 80} ${NODES[2].y}, ${NODES[3].x - 80} ${NODES[3].y}, ${NODES[3].x} ${NODES[3].y}`,
].join(" ");

export default function DigitalDelivery({
  eyebrow,
  heading,
  footer,
  steps,
}: {
  eyebrow: string;
  heading: string;
  footer?: string;
  steps: Array<{ title: string; line: string }>;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="il-section sp-section dd-section">
      <div className="il-inner">
        <div className="af-head">
          <p className="il-eyebrow">{eyebrow}</p>
          <h2 className="il-h2 dd-heading">{heading}</h2>
        </div>

        <div className="af-wave-wrap">
          <div
            className="af-wave-stage"
            style={{ aspectRatio: `${VIEW_W} / ${VIEW_H}` }}
          >
            <svg
              className="af-wave-svg"
              viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
              preserveAspectRatio="xMidYMid meet"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="dd-wave-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#1539D1" />
                  <stop offset="100%" stopColor="#6B7CFF" />
                </linearGradient>
                <filter
                  id="dd-glow"
                  x="-8%"
                  y="-40%"
                  width="116%"
                  height="180%"
                >
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <path
                d={WAVE_D}
                stroke="rgba(107,124,255,0.18)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <motion.path
                d={WAVE_D}
                stroke="url(#dd-wave-grad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                filter="url(#dd-glow)"
                initial={{ pathLength: reduceMotion ? 1 : 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{
                  once: false,
                  margin: "-12% 0px -12% 0px",
                  amount: 0.35,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 1.8,
                  ease: "easeInOut",
                }}
              />
            </svg>

            <ol className="af-wave-nodes">
              {steps.map((step, i) => {
                const pt = NODES[i];
                if (!pt) return null;
                const isUp = i % 2 === 1;
                const Icon = ICONS[step.title] ?? Search;
                return (
                  <li
                    key={step.title}
                    className={cn("af-wave-node", isUp ? "is-up" : "is-down")}
                    style={{
                      left: `${(pt.x / VIEW_W) * 100}%`,
                      top: `${(pt.y / VIEW_H) * 100}%`,
                    }}
                  >
                    <motion.div
                      className="af-wave-node-inner"
                      initial={
                        reduceMotion
                          ? false
                          : { opacity: 0, scale: 0.78, y: isUp ? -14 : 14 }
                      }
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{
                        once: false,
                        margin: "-12% 0px -12% 0px",
                        amount: 0.2,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.85,
                        ease: [0.22, 1, 0.36, 1],
                        delay: reduceMotion ? 0 : 0.28 + i * 0.2,
                      }}
                    >
                      <span className="af-icon" aria-hidden="true">
                        <Icon size={18} strokeWidth={2.25} />
                      </span>
                      <div className="af-wave-label">
                        <span className="af-wave-label-title">
                          {step.title}
                        </span>
                        <span className="af-wave-label-line">{step.line}</span>
                      </div>
                    </motion.div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        <ol className="af-mobile-flow">
          {steps.map((step, i) => {
            const Icon = ICONS[step.title] ?? Search;
            return (
              <motion.li
                key={step.title}
                className="af-mobile-step"
                initial={reduceMotion ? false : { opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{
                  once: false,
                  margin: "-12% 0px -12% 0px",
                  amount: 0.45,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                  delay: reduceMotion ? 0 : i * 0.18,
                }}
              >
                <span className="af-mobile-rail" aria-hidden="true">
                  <span className="af-icon">
                    <Icon size={16} strokeWidth={2.25} />
                  </span>
                  {i < steps.length - 1 ? (
                    <span className="af-mobile-line" />
                  ) : null}
                </span>
                <div className="af-mobile-copy">
                  <h3 className="af-title">{step.title}</h3>
                  <p className="af-line">{step.line}</p>
                </div>
              </motion.li>
            );
          })}
        </ol>

        {footer ? (
          <motion.p
            className="af-footer"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-12% 0px -12% 0px", amount: 0.6 }}
            transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.15 }}
          >
            {footer}
          </motion.p>
        ) : null}
      </div>
    </section>
  );
}
