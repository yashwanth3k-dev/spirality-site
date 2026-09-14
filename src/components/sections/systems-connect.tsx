"use client";

import { motion, useReducedMotion } from "motion/react";
import { CHANNEL_ICON_MAP, ApiIcon } from "~/components/sections/channel-icons";
import "~/styles/systems-connect.css";

export default function SystemsConnect({
  eyebrow,
  heading,
  body,
  channels,
}: {
  eyebrow: string;
  heading: string;
  body: string;
  channels: Array<{ title: string; line: string }>;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="il-section sp-section sc-section">
      <div className="il-inner">
        <div className="sc-layout">
          <div className="sc-copy">
            <p className="il-eyebrow">{eyebrow}</p>
            <h2 className="il-h2 sc-heading">{heading}</h2>
            <p className="il-lead sc-lead">{body}</p>
          </div>

          <ul className="sc-legend">
            {channels.map((channel, i) => {
              const Icon =
                CHANNEL_ICON_MAP[
                  channel.title as keyof typeof CHANNEL_ICON_MAP
                ] ?? ApiIcon;
              return (
                <motion.li
                  key={channel.title}
                  className="sc-legend-item"
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: false,
                    margin: "-12% 0px -12% 0px",
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: reduceMotion ? 0 : i * 0.05,
                  }}
                >
                  <span className="sc-legend-icon">
                    <Icon className="sc-brand-svg" />
                  </span>
                  <div>
                    <h3 className="sc-legend-title">{channel.title}</h3>
                    <p className="sc-legend-line">{channel.line}</p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
