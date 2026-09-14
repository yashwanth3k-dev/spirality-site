"use client";

import { motion, useReducedMotion } from "motion/react";
import { getUseCasePath, type UseCase } from "~/lib/content/use-cases";
import "~/styles/agent-use-cases.css";

export default function AgentUseCases({
  eyebrow,
  heading,
  footer,
  items,
}: {
  eyebrow: string;
  heading: string;
  footer?: string;
  items: UseCase[];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="il-section sp-section auc-section">
      <div className="il-inner">
        <div className="il-head">
          <div>
            <p className="il-eyebrow">{eyebrow}</p>
            <h2 className="il-h2 auc-heading">{heading}</h2>
          </div>
        </div>

        <div className="auc-grid">
          {items.map((item, i) => (
            <motion.article
              key={item.slug}
              className="auc-card"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: false,
                margin: "-12% 0px -12% 0px",
                amount: 0.25,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: reduceMotion ? 0 : i * 0.06,
              }}
            >
              <a
                className="auc-card-link"
                href={getUseCasePath(item.slug)}
                aria-label={`${item.name}: see how it works`}
              >
                <h3 className="auc-name">{item.name}</h3>
                <p className="auc-promise">{item.promise}</p>

                <div className="auc-block">
                  <p className="auc-label">Situation</p>
                  <p className="auc-text">{item.situation}</p>
                </div>

                <div className="auc-block">
                  <p className="auc-label">Result</p>
                  <p className="auc-text">{item.result}</p>
                </div>

                <p className="auc-tags">{item.goodFor}</p>

                <span className="auc-toggle">See how it works →</span>
              </a>
            </motion.article>
          ))}
        </div>

        {footer ? <p className="auc-footer">{footer}</p> : null}
      </div>
    </section>
  );
}
