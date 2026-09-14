"use client";

import { Instrument_Serif } from "next/font/google";
import { useEffect, useRef } from "react";
import {
  BRIDGE_AGENTS,
  BRIDGE_CAPTIONS,
  BRIDGE_FLOWS,
  BRIDGE_GATE_LABELS,
  BRIDGE_PROCS,
  BRIDGE_QUESTIONS,
} from "~/lib/content/bridge";
import { cn } from "~/lib/utils";
import "~/styles/bridge-section.css";

const bridgeSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bridge-serif",
});

type Point = { x: number; y: number };

const AGENT_BY_LABEL = new Map<string, (typeof BRIDGE_AGENTS)[number]>(
  BRIDGE_AGENTS.map((agent) => [agent.label, agent] as const)
);

/**
 * Scroll-driven bridge — same constellation experience on desktop and mobile.
 * Reduced-motion users get the final resting state only.
 */
export default function BridgeSection({
  id,
  className,
}: {
  id?: string;
  className?: string;
}) {
  const rootRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sec = rootRef.current;
    const stage = stageRef.current;
    if (!sec || !stage) return;

    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqMobile = window.matchMedia("(max-width: 900px)");
    const isCanvasLayout = () => {
      const chip = stage.querySelector<HTMLElement>("[data-chip]");
      return !!chip && getComputedStyle(chip).position === "absolute";
    };

    const clamp = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const rnd = (i: number) =>
      (((Math.sin(i * 127.1) * 43758.5453) % 1) + 1) % 1;

    const nodes = () => {
      const chips = [...stage.querySelectorAll<HTMLElement>("[data-chip]")];
      const procs = [...stage.querySelectorAll<HTMLElement>("[data-proc]")];
      const procByName = new Map(
        procs.map((el) => [el.dataset.procName ?? "", el] as const)
      );
      return {
        chips,
        procs,
        procByName,
        dots: chips.map((c) => c.querySelector<HTMLElement>("[data-dot]")),
        cycleEl: stage.querySelector<HTMLElement>("[data-bridge-cycle]"),
        liveEl: stage.querySelector<HTMLElement>("[data-bridge-live]"),
        panel: stage.querySelector<HTMLElement>("[data-bridge-panel]"),
        badge: stage.querySelector<HTMLElement>("[data-bridge-badge]"),
        glow: stage.querySelector<HTMLElement>("[data-bridge-glow]"),
        gateLabel: stage.querySelector<HTMLElement>("[data-bridge-gatelabel]"),
        caps: [0, 1, 2].map((i) =>
          sec.querySelector<HTMLElement>(`[data-bridge-cap="${i}"]`)
        ),
        qWrap: stage.querySelector<HTMLElement>("[data-bridge-q]"),
        qEls: [...stage.querySelectorAll<HTMLElement>("[data-q]")],
        flows: [...stage.querySelectorAll<SVGPathElement>("[data-flow]")],
      };
    };

    const landPoint = (
      proc: HTMLElement,
      stageRect: DOMRect,
      slot: number
    ): Point => {
      const b = proc.getBoundingClientRect();
      if (mqMobile.matches) {
        return {
          x: b.left - stageRect.left + Math.min(56, b.width * 0.4) + slot * 10,
          y: b.top - stageRect.top + b.height / 2,
        };
      }
      return {
        x: b.left - stageRect.left + 92 + slot * 18,
        y: b.top - stageRect.top + b.height / 2,
      };
    };

    const paintChip = (
      chip: HTMLElement,
      dot: HTMLElement | null,
      state: string,
      hue: string
    ) => {
      chip.classList.toggle("is-landed", state === "in");
      chip.classList.toggle("is-rejected", state === "rej");
      if (state === "in") {
        chip.style.borderColor = "rgba(107,124,255,0.65)";
        chip.style.boxShadow = "0 6px 20px -6px rgba(21,57,209,.65)";
        chip.style.filter = "none";
        if (dot) dot.style.background = "#6b7cff";
      } else if (state === "flash") {
        chip.style.borderColor = "#f0b445";
        chip.style.boxShadow = "0 6px 20px -6px rgba(240,180,69,.55)";
        chip.style.filter = "none";
        if (dot) dot.style.background = "#f0b445";
      } else if (state === "rej") {
        chip.style.borderColor = "rgba(21, 57, 209, 0.12)";
        chip.style.boxShadow = "none";
        chip.style.filter = "grayscale(1)";
        if (dot) dot.style.background = "#5a6278";
      } else {
        chip.style.borderColor = "rgba(21, 57, 209, 0.22)";
        chip.style.boxShadow = "0 6px 18px -8px rgba(0,0,0,.55)";
        chip.style.filter = "none";
        if (dot) dot.style.background = hue;
      }
    };

    const setProc = (el: HTMLElement, on: boolean) => {
      el.classList.toggle("is-on", on);
      const status = el.querySelector<HTMLElement>("[data-proc-status]");
      if (status) status.textContent = on ? "AI-ENABLED ✓" : "MANUAL";
    };

    const applyCalm = () => {
      const n = nodes();
      n.caps.forEach((cap, i) => {
        if (!cap) return;
        cap.style.opacity = i === 2 ? "1" : "0";
        cap.style.transform = "none";
      });
      if (n.panel) {
        n.panel.style.opacity = "1";
        n.panel.style.filter = "none";
      }
      if (n.badge) {
        n.badge.style.transform = "translate(-50%,-50%) scale(1)";
      }
      if (n.glow) n.glow.style.opacity = "0.9";
      if (n.qWrap) n.qWrap.style.opacity = "0";
      if (n.gateLabel) {
        n.gateLabel.textContent = BRIDGE_GATE_LABELS[1] ?? "GUARDRAILS ON";
        n.gateLabel.style.opacity = "1";
      }
      n.flows.forEach((f) => {
        f.style.strokeDasharray = "none";
        f.style.strokeDashoffset = "0";
        f.style.opacity = "0.5";
      });
      n.procs.forEach((el) => setProc(el, true));
      if (n.liveEl)
        n.liveEl.textContent = `${n.procs.length}/${n.procs.length}`;
      if (n.cycleEl) n.cycleEl.textContent = "19 hrs";
      n.chips.forEach((c, i) => {
        const agent = BRIDGE_AGENTS[i];
        c.style.opacity = agent?.target ? "0" : "0.55";
        c.style.transform = "translate(-50%, -50%)";
        c.classList.remove("is-landed", "is-rejected");
      });
    };

    let running = true;
    let raf = 0;
    const chipState = new Map<string, string>();
    const procOn = new Map<string, boolean>();

    const tick = (ts: number) => {
      if (!running) return;
      raf = requestAnimationFrame(tick);
      if (mqReduce.matches || !isCanvasLayout()) return;

      const n = nodes();
      const stageRect = stage.getBoundingClientRect();
      if (stageRect.width < 10 || stageRect.height < 10) return;

      const sr = sec.getBoundingClientRect();
      const vh = window.innerHeight;
      if (sr.top > vh || sr.bottom < 0) return;

      const total = sr.height - vh;
      const p = clamp(total > 0 ? -sr.top / total : 1);
      const center = { x: 0.5 * stageRect.width, y: 0.47 * stageRect.height };
      const slots = new Map<string, number>();

      const o1 = 1 - clamp((p - 0.11) / 0.06);
      const o2 = clamp((p - 0.13) / 0.06) - clamp((p - 0.33) / 0.06);
      const o3 = clamp((p - 0.37) / 0.06);

      if (n.caps[0]) {
        n.caps[0].style.opacity = String(o1);
        n.caps[0].style.transform = `translateY(${(1 - o1) * -12}px)`;
      }
      if (n.caps[1]) n.caps[1].style.opacity = String(o2);
      if (n.caps[2]) {
        n.caps[2].style.opacity = String(o3);
        n.caps[2].style.transform = `translateY(${(1 - o3) * 14}px)`;
      }

      if (n.panel) {
        n.panel.style.opacity = String(0.88 + 0.12 * clamp((p - 0.13) / 0.1));
        n.panel.style.filter = `saturate(${1 - 0.3 * clamp((p - 0.78) / 0.1)})`;
      }

      if (n.badge) {
        n.badge.style.transform = `translate(-50%,-50%) scale(${0.72 + 0.28 * clamp((p - 0.18) / 0.12)})`;
      }
      if (n.glow) n.glow.style.opacity = String(clamp((p - 0.2) / 0.12) * 0.9);

      if (n.qWrap) {
        n.qWrap.style.opacity = String(
          clamp((p - 0.2) / 0.06) * (1 - clamp((p - 0.42) / 0.05))
        );
        const qp = clamp((p - 0.2) / 0.22) * n.qEls.length;
        n.qEls.forEach((el, i) => {
          el.style.opacity = String(clamp(1 - Math.abs(qp - (i + 0.5)) / 0.8));
        });
      }

      n.flows.forEach((f, i) => {
        try {
          const len = f.getTotalLength();
          const d = clamp((p - 0.22 - i * 0.015) / 0.16);
          f.style.strokeDasharray = String(len);
          f.style.strokeDashoffset = String(len * (1 - d));
          f.style.opacity = String(0.78 * clamp(d * 3));
        } catch {
          f.style.opacity = "0.55";
        }
      });

      const t0 = ts / 1000;
      let glW = 0;
      let glIdx = 0;
      const arrived = new Set<string>();

      n.chips.forEach((chip, i) => {
        const label = (chip.dataset.chipLabel ?? chip.textContent ?? "").trim();
        const agent = AGENT_BY_LABEL.get(label) ?? BRIDGE_AGENTS[i];
        if (!agent) return;

        const start = {
          x: (agent.x / 100) * stageRect.width,
          y: (agent.y / 100) * stageRect.height,
        };
        const si = 0.26 + (i % 12) * 0.02;
        const e = ease(clamp((p - si) / 0.2));
        const amp = 4.5 * (1 - clamp((p - 0.26) / 0.08));
        const jx = Math.sin(t0 * (0.7 + rnd(i)) + i * 2.1) * amp;
        const jy = Math.cos(t0 * (0.8 + rnd(i + 7)) + i * 1.3) * amp;

        let x: number;
        let y: number;
        let rot: number;
        let sc: number;
        let op: number;
        let state: string;

        if (agent.target) {
          const proc = n.procByName.get(agent.target);
          const slot = slots.get(agent.target) ?? 0;
          slots.set(agent.target, slot + 1);
          const end = proc ? landPoint(proc, stageRect, slot) : center;
          const u = 1 - e;
          x = u * u * start.x + 2 * u * e * center.x + e * e * end.x;
          y = u * u * start.y + 2 * u * e * center.y + e * e * end.y;
          rot = (rnd(i * 3 + 1) * 14 - 7) * (1 - e);
          sc = 1 - 0.22 * e - 0.08 * Math.sin(Math.PI * e);
          op = 1;
          state = e > 0.5 ? "in" : "";
          const w = clamp(1 - Math.abs(e - 0.5) / 0.2);
          if (w > glW) {
            glW = w;
            glIdx = i;
          }
          if (e > 0.9) arrived.add(agent.target);
          /* Fade chip away after it lands (desktop + mobile) */
          if (e > 0.88) {
            op = 1 - clamp((e - 0.88) / 0.1);
          }
        } else {
          const gate = {
            x: center.x - 74,
            y: center.y + (rnd(i + 3) * 60 - 30),
          };
          const rej = { x: start.x * 0.5, y: start.y + 52 };
          if (e <= 0.5) {
            const q = e * 2;
            x = start.x + (gate.x - start.x) * q;
            y = start.y + (gate.y - start.y) * q;
          } else {
            const q = (e - 0.5) * 2;
            const qq = 1 - Math.pow(1 - q, 2);
            x = gate.x + (rej.x - gate.x) * qq;
            y = gate.y + (rej.y - gate.y) * qq;
          }
          rot = e > 0.5 ? (rnd(i) * 12 - 6) * (e - 0.5) * 2 : 0;
          sc = 1 - 0.1 * Math.sin(Math.PI * e);
          op = e > 0.5 ? 1 - 0.45 * clamp((e - 0.5) / 0.3) : 1;
          state = e > 0.55 ? "rej" : e > 0.42 ? "flash" : "";
          /* Clear rejected chips off the stage (desktop + mobile) */
          if (e > 0.7) {
            op = Math.min(op, 1 - clamp((e - 0.7) / 0.25));
          }
        }

        chip.style.transform = `translate(-50%,-50%) translate(${x - start.x + jx}px,${y - start.y + jy}px) rotate(${rot}deg) scale(${sc})`;
        chip.style.opacity = String(op);

        if (chipState.get(label) !== state) {
          chipState.set(label, state);
          paintChip(chip, n.dots[i] ?? null, state, agent.hue);
        }
      });

      n.procs.forEach((el) => {
        const name = el.dataset.procName ?? "";
        const on = arrived.has(name);
        if (procOn.get(name) !== on) {
          procOn.set(name, on);
          setProc(el, on);
        }
      });

      const live = [...procOn.values()].filter(Boolean).length;
      if (n.liveEl) n.liveEl.textContent = `${live}/${n.procs.length}`;
      if (n.cycleEl) {
        let hrs = 101 - live * 9;
        if (live === n.procs.length) {
          hrs = Math.max(19, 29 - ((ts / 1000) % 10));
        }
        n.cycleEl.textContent =
          hrs > 24 ? `${(hrs / 24).toFixed(1)} days` : `${hrs.toFixed(0)} hrs`;
      }

      if (n.gateLabel) {
        n.gateLabel.style.opacity = String(glW);
        if (glW > 0.05) {
          n.gateLabel.textContent =
            BRIDGE_GATE_LABELS[glIdx % BRIDGE_GATE_LABELS.length]!;
        }
      }
    };

    const start = () => {
      cancelAnimationFrame(raf);
      chipState.clear();
      procOn.clear();
      if (mqReduce.matches || !isCanvasLayout()) {
        applyCalm();
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    start();
    mqReduce.addEventListener("change", start);
    window.addEventListener("resize", start);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      mqReduce.removeEventListener("change", start);
      window.removeEventListener("resize", start);
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id={id}
      className={cn("il-bridge", bridgeSerif.variable, className)}
      data-bridge=""
      aria-label="The bridge"
    >
      <div className="il-bridge-sticky">
        <div ref={stageRef} className="il-bridge-stage" id="bridge-stage">
          <svg
            className="il-bridge-svg"
            viewBox="0 0 1200 640"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            {BRIDGE_FLOWS.map((d) => (
              <path
                key={d}
                data-flow=""
                d={d}
                stroke="#1539d1"
                strokeWidth="1.8"
                vectorEffect="non-scaling-stroke"
                style={{ opacity: 0 }}
              />
            ))}
          </svg>

          <div className="il-bridge-panel" data-bridge-panel="">
            <div className="il-bridge-panel-head">
              <div className="il-bridge-panel-title">Your organization</div>
              <div className="il-bridge-panel-meta">8 FLOORS</div>
            </div>

            <div className="il-bridge-floors">
              {BRIDGE_PROCS.map((pr) => (
                <div
                  key={pr.name}
                  className="il-bridge-proc"
                  data-proc=""
                  data-proc-name={pr.name}
                >
                  <span className="il-bridge-proc-left">
                    <span className="il-bridge-proc-bar" data-proc-bar="" />
                    <span className="il-bridge-proc-name">{pr.name}</span>
                  </span>
                  <span className="il-bridge-proc-right">
                    <span className="il-bridge-proc-metric" data-proc-metric="">
                      {pr.metric}
                    </span>
                    <span className="il-bridge-proc-status" data-proc-status="">
                      MANUAL
                    </span>
                  </span>
                </div>
              ))}
            </div>

            <div className="il-bridge-stats">
              <div>
                <div className="il-bridge-stats-label">CYCLE TIME</div>
                <div className="il-bridge-stats-value" data-bridge-cycle="">
                  4.2 days
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div className="il-bridge-stats-label">FLOORS LIVE</div>
                <div
                  className="il-bridge-stats-value is-live"
                  data-bridge-live=""
                >
                  0/8
                </div>
              </div>
            </div>
          </div>

          <div
            className="il-bridge-glow"
            data-bridge-glow=""
            aria-hidden="true"
          />
          <div className="il-bridge-orbit" aria-hidden="true" />
          <div
            className="il-bridge-badge"
            data-bridge-badge=""
            aria-hidden="true"
          >
            <svg width="46" height="46" viewBox="0 0 32 32" fill="none">
              <path
                d="M17.2 16a1.2 1.2 0 1 1-2.4 0 3.4 3.4 0 1 1 6.8 0 5.6 5.6 0 1 1-11.2 0 7.8 7.8 0 1 1 15.6 0 10 10 0 1 1-20 0"
                stroke="#6b7cff"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="il-bridge-gatelabel" data-bridge-gatelabel="" />

          <div className="il-bridge-q" data-bridge-q="">
            {BRIDGE_QUESTIONS.map((q, i) => (
              <div
                key={q}
                className="il-bridge-q-item"
                data-q=""
                style={{ opacity: i === 0 ? 1 : 0 }}
              >
                <span className="il-bridge-q-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="il-bridge-q-text">{q}</span>
              </div>
            ))}
          </div>

          <div className="il-bridge-agents" aria-hidden="true">
            {BRIDGE_AGENTS.map((a) => (
              <div
                key={a.label}
                className="il-bridge-chip"
                data-chip=""
                data-chip-label={a.label}
                data-chip-target={a.target ?? ""}
                style={{ left: `${a.x}%`, top: `${a.y}%` }}
              >
                <span
                  className="il-bridge-chip-dot"
                  data-dot=""
                  style={{ background: a.hue }}
                />
                {a.label}
              </div>
            ))}
          </div>
        </div>

        <div className="il-bridge-caps">
          {BRIDGE_CAPTIONS.map((cap, i) => (
            <div key={cap.title} className="il-bridge-cap" data-bridge-cap={i}>
              <h3>{cap.title}</h3>
              <p>{cap.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
