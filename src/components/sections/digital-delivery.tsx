"use client";

import { motion } from "motion/react";
import "~/styles/digital-delivery.css";

export default function DigitalDelivery({
  eyebrow,
  heading,
  footer,
  steps,
}: {
  eyebrow: string;
  heading: string;
  footer: string;
  steps: Array<{ title: string; line: string }>;
}) {
  return (
    <section className="il-section sp-section dd-section">
      <div className="il-inner">
        <div className="il-head">
          <div>
            <p className="il-eyebrow">{eyebrow}</p>
            <h2 className="il-h2 dd-heading">{heading}</h2>
          </div>
        </div>

        <ol className="dd-flow">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              className="dd-step"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: false,
                margin: "-12% 0px -12% 0px",
                amount: 0.35,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: i * 0.1,
              }}
            >
              <span className="dd-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="dd-title">{step.title}</h3>
              <p className="dd-line">{step.line}</p>
              {i < steps.length - 1 ? (
                <span className="dd-arrow" aria-hidden="true">
                  →
                </span>
              ) : null}
            </motion.li>
          ))}
        </ol>

        <motion.p
          className="dd-footer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-12% 0px -12% 0px", amount: 0.6 }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
          {footer}
        </motion.p>
      </div>
    </section>
  );
}
