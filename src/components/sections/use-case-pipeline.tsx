"use client";

import { useState } from "react";
import { UseCaseIcon } from "~/components/sections/use-case-icons";
import { cn } from "~/lib/utils";
import type { UseCaseFlowStep } from "~/lib/content/use-cases";

export default function UseCasePipeline({
  label,
  flow,
}: {
  label: string;
  flow: UseCaseFlowStep[];
}) {
  const [active, setActive] = useState(0);
  const step = flow[active] ?? flow[0];
  const colsClass = flow.length > 3 ? "ucd-pipe-nodes-4" : "ucd-pipe-nodes-3";

  if (!step) return null;

  return (
    <section className="ucd-section" aria-labelledby="ucd-pipe-heading">
      <div className="uch-inner">
        <div className="ucd-section-head">
          <p className="ucd-kicker">The steps</p>
          <h2 id="ucd-pipe-heading">{label}</h2>
        </div>

        <div className={`ucd-pipe-nodes ${colsClass}`}>
          {flow.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.title}
                type="button"
                className={cn("ucd-node", selected && "ucd-node-active")}
                aria-pressed={selected}
                onClick={() => setActive(index)}
              >
                <span className="ucd-node-meta">
                  <span>Step {index + 1}</span>
                  <span className="ucd-node-icon">
                    <UseCaseIcon name={item.icon} size={16} />
                  </span>
                </span>
                <strong>{item.title}</strong>
                <em>{item.note}</em>
              </button>
            );
          })}
        </div>

        <div className="ucd-pipe-panel" aria-live="polite">
          <div className="ucd-pipe-panel-icon">
            <UseCaseIcon name={step.icon} size={22} />
          </div>
          <div>
            <p className="ucd-kicker">{step.note}</p>
            <h3>{step.title}</h3>
            <p>{step.detail}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
