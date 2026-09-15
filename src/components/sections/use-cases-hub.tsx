"use client";

import { useMemo, useState } from "react";
import { ROUTES } from "~/lib/content/site";
import { cn } from "~/lib/utils";
import {
  countUseCases,
  getUseCasePath,
  USE_CASE_CATEGORY_LABEL,
  USE_CASE_FILTERS,
  USE_CASES,
  type UseCase,
  type UseCaseCategory,
} from "~/lib/content/use-cases";
import "~/styles/use-cases-hub.css";

type FilterId = (typeof USE_CASE_FILTERS)[number]["id"];

const PILL_CLASS: Record<UseCaseCategory, string> = {
  "ai-agents": "uch-pill-ai",
  "business-systems": "uch-pill-systems",
  "bpo-operations": "uch-pill-bpo",
  "digital-services": "uch-pill-digital",
};

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden>
      <path
        d="M5 12h13M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PatternCard({ item }: { item: UseCase }) {
  const stepsClass =
    item.flow.length > 3 ? "uch-flow-steps-4" : "uch-flow-steps-3";

  return (
    <article className="uch-card">
      <a
        className="uch-card-link"
        href={getUseCasePath(item.slug)}
        aria-label={`${item.name}: see how it works`}
      >
        <div className="uch-card-top">
          <div className="uch-card-meta">
            <div className="uch-pills">
              <span className={`uch-pill ${PILL_CLASS[item.category]}`}>
                {USE_CASE_CATEGORY_LABEL[item.category]}
              </span>
            </div>
          </div>
          <div>
            <h2 className="uch-card-name">{item.name}</h2>
            <p className="uch-card-promise">{item.promise}</p>
          </div>
          <div className="uch-matrix">
            <div>
              <p className="uch-matrix-label">Situation</p>
              <p className="uch-matrix-text">{item.situation}</p>
            </div>
            <div>
              <p className="uch-matrix-label uch-matrix-label-result">Result</p>
              <p className="uch-matrix-text uch-matrix-result">{item.result}</p>
            </div>
          </div>
          <div className="uch-flow">
            <span className="uch-flow-label">{item.flowLabel}</span>
            <div className={`uch-flow-steps ${stepsClass}`}>
              {item.flow.map((step) => (
                <div key={step.title} className="uch-step">
                  <span className="uch-step-title">{step.title}</span>
                  <span className="uch-step-note">{step.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="uch-card-foot">
          <span className="uch-systems">{item.systems}</span>
          <span className="uch-more">
            See how it works <Arrow />
          </span>
        </div>
      </a>
    </article>
  );
}

export default function UseCasesHub() {
  const [filter, setFilter] = useState<FilterId>("all");

  const items = useMemo(() => {
    if (filter === "all") return USE_CASES;
    return USE_CASES.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <main>
      <header className="uch-hero">
        <div className="uch-halo" aria-hidden />
        <div className="uch-inner uch-hero-row">
          <div className="uch-hero-copy">
            <div className="uch-badge">
              <span className="uch-badge-dot" aria-hidden />
              <span className="uch-badge-label">Use cases</span>
            </div>
            <h1 className="uch-h1">Start with the work. Not the AI.</h1>
            <p className="uch-lead">
              Explore real business processes where AI can reduce manual effort,
              connect workflows and help your team get more done.
            </p>
            <div className="uch-actions">
              <a className="uch-btn uch-btn-solid" href={ROUTES.contact}>
                Talk to Us <Arrow />
              </a>
              <a className="uch-btn uch-btn-ghost" href={ROUTES.aiAgents}>
                See AI Agents
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="uch-catalog" aria-label="Use-case patterns">
        <div className="uch-inner">
          <div className="uch-filters">
            <div
              className="uch-tabs"
              role="tablist"
              aria-label="Filter by solution"
            >
              {USE_CASE_FILTERS.map((tab) => {
                const active = filter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    className={cn("uch-tab", active && "uch-tab-active")}
                    onClick={() => setFilter(tab.id)}
                  >
                    <span>{tab.label}</span>
                    <span className="uch-count">{countUseCases(tab.id)}</span>
                  </button>
                );
              })}
            </div>
            <p className="uch-filter-note">Pick a type of work</p>
          </div>

          <div className="uch-grid">
            {items.map((item) => (
              <PatternCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
