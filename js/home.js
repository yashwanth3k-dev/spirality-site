(() => {
  const calm =
    document.documentElement.classList.contains("calm") ||
    matchMedia("(prefers-reduced-motion: reduce)").matches;

  const agentsData = [
    { label: "Support agent", hue: "#f59e0b", x: 5, y: 16 },
    { label: "SDR bot", hue: "#ec4899", x: 20, y: 9 },
    { label: "Research", hue: "#8b5cf6", x: 12, y: 33 },
    { label: "Invoice bot", hue: "#10b981", x: 27, y: 24 },
    { label: "Code assist", hue: "#f43f5e", x: 4, y: 52 },
    { label: "Ops copilot", hue: "#06b6d4", x: 18, y: 47 },
    { label: "Scheduler", hue: "#f97316", x: 29, y: 60 },
    { label: "Analyst", hue: "#6366f1", x: 9, y: 69 },
    { label: "Triage", hue: "#84cc16", x: 22, y: 82 },
    { label: "Writer", hue: "#eab308", x: 6, y: 88 },
    { label: "Sourcing", hue: "#14b8a6", x: 30, y: 40 },
    { label: "QA checker", hue: "#a855f7", x: 15, y: 63 },
  ];

  setupBridge();
  setupSteps();
  setupEvo();
  setupFaq();

  function setupFaq() {
    const items = [...document.querySelectorAll("[data-faq]")];
    items.forEach((item) => {
      const btn = item.querySelector("button");
      if (!btn) return;
      btn.addEventListener("click", () => {
        const open = item.classList.contains("is-open");
        items.forEach((el) => el.classList.remove("is-open"));
        if (!open) item.classList.add("is-open");
      });
    });
    if (items[0]) items[0].classList.add("is-open");
  }

  function setupSteps() {
    const sec = document.getElementById("how");
    if (!sec) return;
    const svg = document.getElementById("spiral-svg");
    const nodes = [...sec.querySelectorAll("[data-snode]")];
    const items = [...sec.querySelectorAll("[data-sitem]")];
    const loop = document.getElementById("spiral-loop");
    if (!svg) return;
    const W = 420,
      H = 680,
      CX = 210,
      TOP = 56,
      BOT = 624,
      R = 132,
      RY = 34,
      TURNS = 2.6;
    const pt = (t) => {
      const th = -Math.PI / 2 + t * TURNS * Math.PI * 2;
      const depth = (Math.sin(th) + 1) / 2;
      const persp = 0.84 + 0.16 * depth;
      return {
        x: CX + R * Math.cos(th) * persp,
        y: TOP + t * (BOT - TOP) + RY * Math.sin(th) * 0.5,
        d: depth,
      };
    };
    const N = 190,
      segs = [];
    const NS = "http://www.w3.org/2000/svg";
    for (let i = 0; i < N; i++) {
      const p0 = pt(i / N),
        p1 = pt((i + 1) / N),
        d = (p0.d + p1.d) / 2;
      const back = document.createElementNS(NS, "line");
      const front = document.createElementNS(NS, "line");
      [back, front].forEach((l) => {
        l.setAttribute("x1", p0.x.toFixed(1));
        l.setAttribute("y1", p0.y.toFixed(1));
        l.setAttribute("x2", p1.x.toFixed(1));
        l.setAttribute("y2", p1.y.toFixed(1));
        l.setAttribute("stroke-linecap", "round");
        l.setAttribute("stroke-width", (1.6 + 3 * d).toFixed(2));
      });
      back.setAttribute("stroke", "#e6ebf9");
      back.setAttribute("opacity", (0.45 + 0.5 * d).toFixed(2));
      front.setAttribute("stroke", d > 0.5 ? "#2b5cff" : "#8fabff");
      front.setAttribute("opacity", "0");
      svg.appendChild(back);
      segs.push({ el: front, t: i / N, d });
    }
    segs.forEach((sg) => svg.appendChild(sg.el));
    const ts = nodes.map((_, i) => i / (nodes.length - 1));
    nodes.forEach((n, i) => {
      const p = pt(ts[i]);
      n.style.left = (p.x / W) * 100 + "%";
      n.style.top = (p.y / H) * 100 + "%";
      n.dataset.scale = (0.78 + 0.34 * p.d).toFixed(2);
      n.style.zIndex = 2 + Math.round(p.d * 10);
      n.style.background = p.d > 0.5 ? "#2b5cff" : "#5b82ff";
      n.style.boxShadow =
        "0 " +
        (8 + 14 * p.d).toFixed(0) +
        "px " +
        (18 + 20 * p.d).toFixed(0) +
        "px -12px rgba(43,92,255," +
        (0.35 + 0.4 * p.d).toFixed(2) +
        ")";
      n.style.transform = "scale(.4)";
    });
    const clamp = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
    const update = () => {
      const r = sec.getBoundingClientRect();
      const p = clamp((innerHeight * 0.78 - r.top) / Math.max(1, r.height * 0.72));
      segs.forEach((sg) => {
        sg.el.setAttribute("opacity", sg.t <= p ? (0.5 + 0.5 * sg.d).toFixed(2) : "0");
      });
      nodes.forEach((n, i) => {
        const on = p >= ts[i] * 0.94;
        n.style.opacity = on ? "1" : "0";
        n.style.transform = "scale(" + (on ? n.dataset.scale : 0.4) + ")";
        if (items[i]) items[i].style.opacity = on ? "1" : ".32";
      });
      if (loop) {
        const on = p > 0.92;
        loop.style.opacity = on ? "1" : "0";
        loop.style.transform = on ? "translateY(0)" : "translateY(10px)";
      }
    };
    update();
    let stepRaf = 0;
    const onScroll = () => {
      if (stepRaf) return;
      stepRaf = requestAnimationFrame(() => {
        stepRaf = 0;
        update();
      });
    };
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
  }

  function setupBridge() {
    const sec = document.querySelector("[data-bridge]");
    const stage = document.getElementById("bridge-stage");
    if (!sec || !stage) return;
    const chips = [...stage.querySelectorAll("[data-chip]")];
    const dots = chips.map((c) => c.querySelector("[data-dot]"));
    const procEls = [...stage.querySelectorAll("[data-proc]")];
    const pStatus = procEls.map((p2) => p2.querySelector("[data-proc-status]"));
    const pMetric = procEls.map((p2) => p2.querySelector("[data-proc-metric]"));
    const pBar = procEls.map((p2) => p2.querySelector("[data-proc-bar]"));
    const cycleEl = document.getElementById("bridge-cycle");
    const liveEl = document.getElementById("bridge-live");
    const panel = document.getElementById("bridge-panel");
    const badge = document.getElementById("bridge-badge");
    const glow = document.getElementById("bridge-glow");
    const gateLabel = document.getElementById("bridge-gatelabel");
    const caps = [1, 2, 3].map((i) => document.getElementById("bridge-cap" + i));
    const qWrap = document.getElementById("bridge-q");
    const qEls = qWrap ? [...qWrap.querySelectorAll("[data-q]")] : [];
    const flows = [...stage.querySelectorAll("[data-flow]")];
    const flowLens = flows.map((f) => {
      const l = f.getTotalLength();
      f.style.strokeDasharray = l;
      f.style.strokeDashoffset = l;
      return l;
    });
    const rnd = (i) => ((Math.sin(i * 127.1) * 43758.5453) % 1 + 1) % 1;
    const GL = [
      "CONTEXT IN",
      "GUARDRAILS ON",
      "AUTHORITY SET",
      "MEMORY WIRED",
      "PROVEN ON YOUR WORK",
    ];
    const picked = chips.map((_, i) => i % 3 !== 2);
    let pk = 0;
    const pickIdx = chips.map((_, i) =>
      picked[i] ? pk++ % Math.max(1, procEls.length) : -1
    );
    let geom = null;
    const computeGeom = () => {
      const r = stage.getBoundingClientRect();
      if (r.width < 10 || r.height < 10) return;
      const starts = chips.map((_, i) => ({
        x: agentsData[i].x / 100 * r.width,
        y: agentsData[i].y / 100 * r.height,
      }));
      const center = { x: 0.5 * r.width, y: 0.47 * r.height };
      const ends = procEls.map((p2) => {
        const b = p2.getBoundingClientRect();
        return { x: b.left - r.left + b.width / 2, y: b.top - r.top + b.height / 2 };
      });
      geom = { starts, center, ends };
    };
    computeGeom();
    window.addEventListener("resize", computeGeom);
    const clamp = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
    const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const chipState = chips.map(() => "");
    const procOn = procEls.map(() => false);
    let running = true;
    const tick = (ts) => {
      if (!running) return;
      requestAnimationFrame(tick);
      if (!geom) {
        computeGeom();
        return;
      }
      const sr = sec.getBoundingClientRect();
      const vh = innerHeight;
      if (sr.top > vh || sr.bottom < 0) return;
      const total = sr.height - vh;
      const p = clamp(total > 0 ? -sr.top / total : 1);
      const o1 = 1 - clamp((p - 0.11) / 0.06);
      const o2 = clamp((p - 0.13) / 0.06) - clamp((p - 0.33) / 0.06);
      const o3 = clamp((p - 0.37) / 0.06);
      if (caps[0]) {
        caps[0].style.opacity = o1;
        caps[0].style.transform = `translateY(${(1 - o1) * -12}px)`;
      }
      if (caps[1]) caps[1].style.opacity = o2;
      if (caps[2]) {
        caps[2].style.opacity = o3;
        caps[2].style.transform = `translateY(${(1 - o3) * 14}px)`;
      }
      if (panel) {
        panel.style.opacity = 0.4 + 0.6 * clamp((p - 0.13) / 0.1);
        const calmSat = clamp((p - 0.78) / 0.1);
        panel.style.filter = "saturate(" + (1 - 0.3 * calmSat) + ")";
      }
      {
        const live = procOn.filter(Boolean).length;
        if (liveEl) liveEl.textContent = live + "/" + procOn.length;
        if (cycleEl) {
          let hrs = 101 - live * 9;
          if (live === procOn.length) hrs = Math.max(19, 29 - (ts / 1000) % 10);
          cycleEl.textContent = hrs > 24 ? (hrs / 24).toFixed(1) + " days" : hrs.toFixed(0) + " hrs";
        }
      }
      if (badge)
        badge.style.transform = `translate(-50%,-50%) scale(${0.72 + 0.28 * clamp((p - 0.18) / 0.12)})`;
      if (glow) glow.style.opacity = clamp((p - 0.2) / 0.12) * 0.9;
      if (qWrap) {
        qWrap.style.opacity = clamp((p - 0.2) / 0.06) * (1 - clamp((p - 0.42) / 0.05));
        const qp = clamp((p - 0.2) / 0.22) * qEls.length;
        qEls.forEach((el, i) => {
          el.style.opacity = clamp(1 - Math.abs(qp - (i + 0.5)) / 0.8);
        });
      }
      flows.forEach((f, i) => {
        const d = clamp((p - 0.22 - i * 0.015) / 0.16);
        f.style.strokeDashoffset = flowLens[i] * (1 - d);
        f.style.opacity = 0.5 * clamp(d * 3);
      });
      const t0 = ts / 1000;
      let glW = 0,
        glIdx = 0;
      chips.forEach((c, i) => {
        const st = geom.starts[i],
          ce = geom.center;
        const si = 0.28 + (i % 12) * 0.018;
        const e = ease(clamp((p - si) / 0.18));
        const amp = calm ? 0 : 4.5 * (1 - clamp((p - 0.26) / 0.08));
        const jx = Math.sin(t0 * (0.7 + rnd(i)) + i * 2.1) * amp;
        const jy = Math.cos(t0 * (0.8 + rnd(i + 7)) + i * 1.3) * amp;
        let x, y, rot, sc, op, state;
        if (picked[i]) {
          const en = geom.ends[pickIdx[i]] || ce;
          const u = 1 - e;
          x = u * u * st.x + 2 * u * e * ce.x + e * e * en.x;
          y = u * u * st.y + 2 * u * e * ce.y + e * e * en.y;
          rot = (rnd(i * 3 + 1) * 14 - 7) * (1 - e);
          sc = 1 - 0.16 * Math.sin(Math.PI * e);
          op = 1 - clamp((e - 0.88) / 0.12);
          state = e > 0.5 ? "in" : "";
          const w = clamp(1 - Math.abs(e - 0.55) / 0.18, 0, 1);
          if (w > glW) {
            glW = w;
            glIdx = i;
          }
          const fOn = e > 0.96;
          const j = pickIdx[i];
          if (procEls[j] && fOn !== procOn[j]) {
            procOn[j] = fOn;
            procEls[j].style.borderColor = fOn ? "#a5bcff" : "#e8edfa";
            procEls[j].style.background = fOn ? "#eef3ff" : "#f7f9ff";
            if (pStatus[j]) {
              pStatus[j].textContent = fOn ? "AI-ENABLED \u2713" : "MANUAL";
              pStatus[j].style.color = fOn ? "#1741c9" : "#9aa3b8";
            }
            if (pMetric[j]) pMetric[j].style.opacity = fOn ? 1 : 0;
            if (pBar[j]) pBar[j].style.opacity = fOn ? 1 : 0;
          }
        } else {
          const gate = { x: ce.x - 74, y: ce.y + (rnd(i + 3) * 60 - 30) };
          const rej = { x: st.x * 0.5, y: st.y + 52 };
          if (e <= 0.5) {
            const q = e * 2;
            x = st.x + (gate.x - st.x) * q;
            y = st.y + (gate.y - st.y) * q;
          } else {
            const q = (e - 0.5) * 2;
            const qq = 1 - Math.pow(1 - q, 2);
            x = gate.x + (rej.x - gate.x) * qq;
            y = gate.y + (rej.y - gate.y) * qq;
          }
          rot = e > 0.5 ? (rnd(i) * 12 - 6) * (e - 0.5) * 2 : 0;
          sc = 1 - 0.1 * Math.sin(Math.PI * e);
          op = e > 0.5 ? 1 - 0.55 * clamp((e - 0.5) / 0.3) : 1;
          state = e > 0.55 ? "rej" : e > 0.42 ? "flash" : "";
        }
        c.style.transform = `translate(-50%,-50%) translate(${x - st.x + jx}px,${y - st.y + jy}px) rotate(${rot}deg) scale(${sc})`;
        c.style.opacity = String(op);
        if (state !== chipState[i]) {
          chipState[i] = state;
          if (state === "in") {
            c.style.borderColor = "#a5bcff";
            c.style.boxShadow = "0 6px 20px -6px rgba(43,92,255,.5)";
            if (dots[i]) dots[i].style.background = "#2b5cff";
          } else if (state === "flash") {
            c.style.borderColor = "#f0b445";
            c.style.boxShadow = "0 6px 20px -6px rgba(240,180,69,.55)";
            if (dots[i]) dots[i].style.background = "#f0b445";
          } else if (state === "rej") {
            c.style.borderColor = "#e2e6ef";
            c.style.boxShadow = "none";
            if (dots[i]) dots[i].style.background = "#b3bacb";
            c.style.filter = "grayscale(1)";
          } else {
            c.style.borderColor = "#dfe6f5";
            c.style.boxShadow = "0 6px 18px -8px rgba(12,18,34,.22)";
            if (dots[i]) dots[i].style.background = agentsData[i].hue;
            c.style.filter = "none";
          }
        }
      });
      if (gateLabel) {
        gateLabel.style.opacity = glW;
        if (glW > 0.05) gateLabel.textContent = GL[glIdx % GL.length];
      }
    };
    requestAnimationFrame(tick);
  }

  function setupEvo() {
    const card = document.getElementById("evo-card");
    const wrap = document.getElementById("evo-wrap");
    const rail = document.getElementById("evo-rail");
    const track = document.getElementById("evo-track");
    const fill = document.getElementById("evo-fill");
    const handle = document.getElementById("evo-handle");
    const stage = document.getElementById("evo-stage");
    if (!card || !wrap || !rail || !track || !stage) return;
    const nodes = [...track.querySelectorAll("[data-node]")];
    const dots = nodes.map((n) => n.querySelector("[data-dot]"));
    const nlabels = nodes.map((n) => n.querySelector("[data-nodelabel]"));
    const softs = [...stage.querySelectorAll("[data-soft]")];
    const agents = [...stage.querySelectorAll("[data-agent]")];
    const persons = [...stage.querySelectorAll("[data-person]")];
    const roles = [...stage.querySelectorAll("[data-role]")];
    const details = [...document.querySelectorAll("[data-detail]")];
    const supL = document.getElementById("evo-super-label");
    const shadow = document.getElementById("evo-shadow");
    const mem = null,
      memL = null;
    const items = [...stage.querySelectorAll("[data-evo-item]")];
    const dotsI = items.map((el) => el.querySelector("[data-evo-dot]"));
    const M = [0, 1, 2, 3, 4].map((i) => document.getElementById("evo-m" + i));
    const N = 6,
      ROWC = [92, 132, 172, 212, 252, 292],
      BAND = 26;
    const ownerPct = (i) => 26 + 6 * i;
    const LIGHT = {
      bg: "#f8f9fc",
      bd: "#e6e9f0",
      panel: "#ffffff",
      panelb: "#edeff5",
      ink: "#0c1222",
      body: "#43507a",
      muted: "#8a97bd",
      faint: "#9aa3b8",
      track: "#e3e7f1",
      line: "#dfe6f5",
      tile: "#ffffff",
      tileb: "#e6e9f0",
      chip: "#ffffff",
      chipb: "#e3e7f1",
      chipink: "#5c657c",
      soft: "#f1f3f8",
      softb: "#c9d0e0",
      pbg: "#ffffff",
      pbd: "#8c96ad",
      nodeb: "#c3cbdd",
    };
    const DARK = {
      bg: "#0a1124",
      bd: "#1b2748",
      panel: "#0f1830",
      panelb: "#22305a",
      ink: "#ffffff",
      body: "#b9c5ea",
      muted: "#8fa0c9",
      faint: "#7183ab",
      track: "#2a375f",
      line: "#2a375f",
      tile: "#16203c",
      tileb: "#2a375f",
      chip: "#16203c",
      chipb: "#35457a",
      chipink: "#dfe6ff",
      soft: "#1a2444",
      softb: "#33426e",
      pbg: "#16203c",
      pbd: "#7a9bff",
      nodeb: "#3d4d7a",
    };
    const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
    const mix = (a, b, t) => {
      const A = hex(a),
        B = hex(b);
      return "rgb(" + A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(",") + ")";
    };
    const ROLE = ["HANDLER", "HANDLER", "AI-ASSISTED", "DECISION OWNER"];
    const METRICS = [
      ["1.0×", "41", "120", "18%", "baseline"],
      ["1.2×", "38", "118", "17%", "+2%"],
      ["1.9×", "17", "74", "11%", "+9%"],
      ["3.4×", "3", "22", "4%", "+21%"],
    ];
    const GOOD = "#0e9f6e",
      BAD = "#c2452f",
      FLAT = "var(--evo-faint,#9aa3b8)";
    const IND = [
      [
        ["— flat", FLAT],
        ["▲ pilots only", FLAT],
        ["▲ +58%", GOOD],
        ["▲ +79% and climbing", GOOD],
      ],
      [
        ["▲ growing", BAD],
        ["▼ −7%", FLAT],
        ["▼ −55%", GOOD],
        ["▼ −82%", GOOD],
      ],
      [
        ["— everything is manual", FLAT],
        ["▼ −2%", FLAT],
        ["▼ −37%", GOOD],
        ["▼ judgment calls only", GOOD],
      ],
      [
        ["— baseline", FLAT],
        ["▼ −1pt", FLAT],
        ["▼ −6pts", GOOD],
        ["▼ still falling", GOOD],
      ],
      [
        ["— leads slip away", BAD],
        ["▲ +2pts", FLAT],
        ["▲ +7pts", GOOD],
        ["▲ +12pts", GOOD],
      ],
    ];
    const PARAMS = [
      { spawn: 1.9, node: 0.4, serve: 3.2, queue: true, esc: 0, assist: 0, shadow: 0 },
      { spawn: 1.8, node: 0.4, serve: 3.0, queue: true, esc: 0, assist: 0, shadow: 0.3 },
      { spawn: 1.2, node: 0.4, serve: 1.3, queue: true, esc: 0, assist: 0.75, shadow: 0 },
      { spawn: 0.5, node: 0.3, serve: 0.3, queue: false, esc: 0.22, assist: 0, shadow: 0 },
    ];
    let p = 0,
      si = -1,
      dragging = false;
    const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
    const MID = {
      bg: "#3a4a7a",
      bd: "#46568a",
      panel: "#2f3f6e",
      panelb: "#4a5a8e",
      ink: "#ffffff",
      body: "#ccd6f2",
      muted: "#a5b3dd",
      faint: "#8d9cc9",
      track: "#4a5a8e",
      line: "#4a5a8e",
      tile: "#33436f",
      tileb: "#4a5a8e",
      chip: "#33436f",
      chipb: "#55659a",
      chipink: "#e6ecff",
      soft: "#3a4a78",
      softb: "#55659a",
      pbg: "#33436f",
      pbd: "#8fb0ff",
      nodeb: "#55659a",
    };
    const applyTheme = () => {
      const t = clamp((p - 2.35) / 0.6, 0, 1);
      Object.keys(LIGHT).forEach((k) => {
        const v = t < 0.5 ? mix(LIGHT[k], MID[k], t * 2) : mix(MID[k], DARK[k], (t - 0.5) * 2);
        card.style.setProperty("--evo-" + k, v);
      });
    };
    const SHELL = [
      { h: 64, bg: "#efe9db", bd: "#bfae8d", dash: "dashed", glow: "none", win: "rgba(140,125,90,.45)" },
      { h: 118, bg: "#efece2", bd: "#b3a996", dash: "dashed", glow: "none", win: "rgba(140,130,105,.5)" },
      { h: 184, bg: "#eef3ff", bd: "#9db4ff", dash: "solid", glow: "0 0 0 rgba(0,0,0,0)", win: "rgba(122,155,255,.7)" },
      {
        h: 258,
        bg: "#141f3e",
        bd: "#4d64a8",
        dash: "solid",
        glow: "0 -8px 44px -8px rgba(122,155,255,.5)",
        win: "rgba(246,201,107,.85)",
      },
    ];
    const bldg = document.getElementById("evo-bldg");
    const antenna = document.getElementById("evo-antenna");
    const state = { IT: null, busy: null, bh: 44, deskWrap: null, desks: [], deskStage: -1 };
    const applyStructure = () => {
      const w = stage.clientWidth || 600;
      if (bldg) {
        const sh = SHELL[si];
        bldg.style.background = sh.bg;
        bldg.style.borderColor = sh.bd;
        bldg.style.borderStyle = sh.dash;
        bldg.style.boxShadow = sh.glow;
        bldg.style.backgroundImage =
          "radial-gradient(" +
          sh.win +
          " 2.2px, transparent 2.8px), repeating-linear-gradient(180deg, rgba(80,90,120,.16) 0 1px, transparent 1px 22px)";
        bldg.style.backgroundSize = "17px 22px, 100% 22px";
        bldg.style.backgroundPosition = "8px 10px, 0 6px";
        const crane = document.getElementById("evo-crane");
        if (crane) {
          crane.style.opacity = si === 3 ? 0 : 1;
          const cc = si === 2 ? "#7a9bff" : "#a8946a";
          crane.style.background = cc;
          [...crane.querySelectorAll("[data-crane]")].forEach((el2, k) => {
            el2.style.background = k === 2 ? (si === 2 ? "#b9cbff" : "#c9b183") : cc;
          });
        }
        const stripe = document.getElementById("evo-stripe");
        if (stripe) stripe.style.opacity = si >= 2 ? 0 : 0.7;
      }
      if (antenna) antenna.style.opacity = si === 3 ? 1 : 0;
      softs.forEach((el) => {
        el.style.opacity = si <= 2 ? 1 : 0;
      });
      agents.forEach((el, i) => {
        el.style.left = si === 2 && i % 2 === 1 ? "46%" : "30%";
        if (si >= 2) {
          el.style.opacity = 1;
          el.style.filter = "none";
        } else if (si === 1 && i === 1) {
          el.style.opacity = 0.5;
          el.style.filter = "grayscale(1)";
        } else {
          el.style.opacity = 0;
          el.style.filter = "none";
        }
      });
      persons.forEach((el, i) => {
        if (si === 3) {
          const dx = ((ownerPct(i) - 40) / 100) * w;
          el.style.transform = "translate(" + dx + "px," + (BAND - ROWC[i]) + "px)";
          if (roles[i])
            roles[i].style.transform =
              "translate(" + dx + "px," + (BAND + 20 - (ROWC[i] + 17)) + "px)";
        } else {
          el.style.transform = "translate(0,0)";
          if (roles[i]) roles[i].style.transform = "translate(0,0)";
        }
        el.style.borderColor = si >= 2 ? "#7a9bff" : "var(--evo-pbd,#8c96ad)";
        [...el.querySelectorAll("[data-glyph]")].forEach((g) =>
          g.setAttribute("fill", si === 3 ? "#cfdcff" : "#33415e")
        );
      });
      roles.forEach((el) => {
        el.textContent = ROLE[si];
        el.style.opacity = si === 3 ? 0 : 1;
        el.style.color = "var(--evo-faint,#c3c9d8)";
      });
      if (supL) supL.style.opacity = si === 3 ? 1 : 0;
      if (shadow) shadow.style.opacity = si === 1 ? 1 : 0;
      [...stage.querySelectorAll("[data-flowlabel]")].forEach((el) => {
        el.style.opacity = si === 3 ? 0 : 1;
      });
      [mem, memL].forEach((el) => {
        if (el) el.style.opacity = si === 3 ? 1 : 0;
      });
      details.forEach((el, i) => {
        el.style.opacity = i === si ? 1 : 0;
      });
      nodes.forEach((n, i) => {
        const on = i <= si;
        if (dots[i]) {
          dots[i].style.background = on ? "#2b5cff" : "var(--evo-tile,#fff)";
          dots[i].style.borderColor = on ? "#2b5cff" : "var(--evo-nodeb,#c3cbdd)";
          dots[i].style.transform = i === si ? "scale(1.25)" : "scale(1)";
        }
        if (nlabels[i]) nlabels[i].style.color = i === si ? "#2b5cff" : "var(--evo-faint,#9aa3b8)";
      });
      M.forEach((el, i) => {
        if (el) el.textContent = METRICS[si][i];
      });
      const indEls = card.querySelectorAll("[data-ind]");
      indEls.forEach((el, i) => {
        if (IND[i]) {
          el.textContent = IND[i][si][0];
          el.style.color = IND[i][si][1];
        }
      });
    };
    const paint = () => {
      const pct = ((clamp(p, 0, 3) / 3) * 100).toFixed(2) + "%";
      if (fill) fill.style.width = pct;
      if (handle) handle.style.left = pct;
      applyTheme();
      const n = Math.round(clamp(p, 0, 3));
      if (n !== si) {
        si = n;
        if (state.IT)
          state.IT.forEach((o) => {
            if (o.live && (o.state === "work" || o.state === "toOwner" || o.state === "decide"))
              o.state = "out";
          });
        if (state.busy) state.busy.fill(false);
        applyStructure();
      }
    };
    const scrollForP = (pv) => {
      const r = wrap.getBoundingClientRect();
      const total = r.height - innerHeight;
      return scrollY + r.top + (clamp(pv, 0, 3) / 3) * total;
    };
    const evoGo = (n) => {
      window.scrollTo({ top: scrollForP(n) + 2, behavior: "smooth" });
    };
    nodes.forEach((n, i) => n.addEventListener("click", () => evoGo(i)));
    const pFromX = (clientX) => {
      const r = track.getBoundingClientRect();
      return clamp(((clientX - r.left) / Math.max(1, r.width)) * 3, 0, 3);
    };
    const down = (ev) => {
      dragging = true;
      rail.style.cursor = "grabbing";
      window.scrollTo({ top: scrollForP(pFromX(ev.clientX)) + 2, behavior: "auto" });
      rail.setPointerCapture && rail.setPointerCapture(ev.pointerId);
    };
    const move = (ev) => {
      if (dragging) window.scrollTo({ top: scrollForP(pFromX(ev.clientX)) + 2, behavior: "auto" });
    };
    const up = () => {
      dragging = false;
      rail.style.cursor = "grab";
    };
    rail.addEventListener("pointerdown", down);
    rail.addEventListener("pointermove", move);
    rail.addEventListener("pointerup", up);
    rail.addEventListener("pointercancel", up);
    const IT = items.map((el, i) => ({
      live: false,
      x: 0,
      y: 0,
      row: i % N,
      state: "move",
      wait: 0,
      kind: "plain",
    }));
    const busy = ROWC.map(() => false);
    state.IT = IT;
    state.busy = busy;
    let spawn = ROWC.map((_, i) => i * 0.3),
      aFlash = ROWC.map(() => 0),
      pFlash = ROWC.map(() => 0),
      last = performance.now(),
      running = true;
    const tick = (now) => {
      if (!running) return;
      requestAnimationFrame(tick);
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const wr = wrap.getBoundingClientRect();
      if (wr.bottom < -150 || wr.top > innerHeight + 150) return;
      const total = wr.height - innerHeight;
      p = clamp(total > 0 ? -wr.top / total : 0, 0, 1) * 3;
      paint();
      const P = PARAMS[clamp(si, 0, 3)],
        w = stage.clientWidth || 600,
        spd = calm ? 0.65 : 1;
      const CAPB = [74, 134, 200, 264],
        RATEB = [2.2, 8, 26, 68];
      const cap = CAPB[clamp(si, 0, 3)];
      if (state.bh < cap) state.bh = Math.min(cap, state.bh + RATEB[clamp(si, 0, 3)] * dt);
      else state.bh += (cap - state.bh) * Math.min(1, dt * 2.5);
      if (bldg) bldg.style.height = state.bh.toFixed(1) + "px";
      if (bldg) {
        if (!state.deskWrap) {
          [...bldg.querySelectorAll("[data-occ]")].forEach((el) => (el.style.display = "none"));
          const w2 = document.createElement("div");
          w2.style.cssText =
            "position:absolute;inset:0;overflow:hidden;border-radius:8px 8px 0 0;pointer-events:none";
          bldg.appendChild(w2);
          state.deskWrap = w2;
          state.desks = [];
        }
        const bw = bldg.clientWidth || 120,
          bh = state.bh;
        const CW = 15,
          CH = 19;
        const cols = Math.max(3, Math.floor((bw - 8) / CW));
        const rows = Math.max(1, Math.floor((bh - 12) / CH));
        const need = Math.min(60, cols * rows);
        while (state.desks.length < need) {
          const el = document.createElement("span");
          el.style.cssText =
            "position:absolute;left:0;top:0;display:flex;align-items:center;gap:2px;will-change:transform;opacity:0;transition:opacity .4s ease";
          const p2 = document.createElement("span");
          p2.style.cssText =
            "width:4.5px;height:4.5px;border-radius:50%;background:#8c96ad;transition:background .5s ease";
          const ai = document.createElement("span");
          ai.style.cssText =
            "width:4.5px;height:4.5px;border-radius:1.5px;background:#7a9bff;opacity:0;transition:opacity .5s ease";
          el.appendChild(p2);
          el.appendChild(ai);
          state.deskWrap.appendChild(el);
          state.desks.push({
            el,
            p: p2,
            ai,
            x: 0,
            y: 0,
            tx: 0,
            ty: 0,
            hasAI: false,
            amber: false,
            pulse: Math.random() * 3,
            roam: false,
            seed: Math.random(),
          });
        }
        const st = clamp(si, 0, 3);
        const AISHARE = [0, 0.18, 0.6, 0.92][st];
        const AMBER = [0.34, 0.28, 0.15, 0.05][st];
        const SPD = [10, 14, 26, 46][st] * (calm ? 0.45 : 1);
        const CYCLE = [3.4, 3.0, 1.7, 0.8][st];
        if (state.deskStage !== st) {
          state.deskStage = st;
          state.desks.forEach((d, i) => {
            d.hasAI = (i * 0.6180339887) % 1 < AISHARE;
            d.amber = (i * 0.7548776662 + 0.13) % 1 < AMBER;
            d.roam = st === 3 && i % 3 === 0;
          });
        }
        state.desks.forEach((d, i) => {
          const on = i < need;
          d.el.style.opacity = on ? 1 : 0;
          if (!on) return;
          const col = i % cols,
            row = Math.floor(i / cols);
          const hx = 5 + col * CW,
            hy = bh - 10 - row * CH;
          if (d.roam) {
            if (Math.abs(d.x - d.tx) < 2 && Math.abs(d.y - d.ty) < 2) {
              d.tx = 5 + Math.random() * Math.max(8, bw - 18);
              d.ty = 10 + Math.random() * Math.max(8, bh - 20);
            }
          } else {
            d.tx = hx;
            d.ty = hy;
          }
          const dx2 = d.tx - d.x,
            dy2 = d.ty - d.y,
            dist = Math.hypot(dx2, dy2) || 1;
          const step = Math.min(dist, SPD * dt);
          d.x += (dx2 / dist) * step;
          d.y += (dy2 / dist) * step;
          d.el.style.transform = "translate(" + d.x.toFixed(1) + "px," + d.y.toFixed(1) + "px)";
          d.ai.style.opacity = d.hasAI ? 1 : 0;
          d.pulse -= dt;
          if (d.pulse <= 0) d.pulse = CYCLE * (0.6 + d.seed);
          const hot = d.pulse > CYCLE * 0.82;
          const nightRow = st === 3 && row >= rows - 3;
          d.p.style.background = d.amber
            ? "#f0b445"
            : hot
              ? "#2b5cff"
              : st === 3
                ? nightRow
                  ? "#e8efff"
                  : "#cfe0ff"
                : "#8c96ad";
          d.el.style.filter = hot ? "drop-shadow(0 0 4px rgba(43,92,255,.75))" : "none";
        });
      }
      for (let i = 0; i < N; i++) {
        spawn[i] -= dt;
        if (spawn[i] <= 0) {
          const f = IT.find((o) => !o.live && o.row === i);
          const liveN = IT.filter((o) => o.live && o.row === i).length;
          if (f && liveN < (P.queue ? 4 : 5)) {
            const q = Math.random();
            f.live = true;
            f.x = -0.08;
            f.state = "move";
            f.y = ROWC[i] - 9;
            f.kind =
              P.shadow && i === 2 && q < P.shadow
                ? "shadow"
                : q < P.esc
                  ? "human"
                  : q < P.esc + P.assist
                    ? "self"
                    : "plain";
          }
          spawn[i] = P.spawn * (0.85 + Math.random() * 0.4);
        }
      }
      IT.forEach((it) => {
        if (!it.live) return;
        if (it.state === "move") {
          if (it.kind === "shadow") {
            it.x += dt * 0.26 * spd;
            it.y += (ROWC[2] - 30 - it.y) * Math.min(1, dt * 4);
            if (it.x > 0.78) it.state = "out";
          } else if (P.queue) {
            const ahead = IT.filter(
              (o) =>
                o !== it &&
                o.live &&
                o.row === it.row &&
                o.state === "move" &&
                o.kind !== "shadow" &&
                o.x > it.x
            ).length;
            const stopAt = P.node - 0.075 - 0.088 * ahead;
            it.x = Math.min(it.x + dt * 0.14 * spd, stopAt);
            if (it.x >= P.node - 0.076 && !busy[it.row]) {
              busy[it.row] = true;
              it.state = "work";
              it.wait = P.serve;
              if (si >= 2) pFlash[it.row] = 1;
            }
          } else {
            it.x += dt * 0.3 * spd;
            if (it.x >= P.node - 0.045) {
              it.state = "work";
              it.wait = P.serve;
              aFlash[it.row] = 1;
            }
          }
        } else if (it.state === "work") {
          it.wait -= dt * spd;
          if (it.wait <= 0) {
            if (P.queue) busy[it.row] = false;
            it.state = it.kind === "human" && P.esc ? "toOwner" : "out";
          }
        } else if (it.state === "toOwner") {
          const tx = ownerPct(it.row) / 100;
          it.x += (tx - it.x) * Math.min(1, dt * 3.5);
          it.y += (BAND + 18 - it.y) * Math.min(1, dt * 3.5);
          if (Math.abs(it.x - tx) < 0.008) {
            it.state = "decide";
            it.wait = 0.55;
            pFlash[it.row] = 1;
          }
        } else if (it.state === "decide") {
          it.wait -= dt * spd;
          if (it.wait <= 0) it.state = "out";
        } else {
          it.x += dt * (P.queue ? 0.16 : 0.36) * spd;
          const ty = it.x > 0.56 ? 313 : ROWC[it.row] - 9;
          it.y += (ty - it.y) * Math.min(1, dt * 5);
          if (it.x > 0.745) it.live = false;
        }
      });
      items.forEach((el, i) => {
        const it = IT[i];
        const fade = it.state === "out" ? 1 - Math.min(1, Math.max(0, (it.x - 0.68) / 0.06)) : 1;
        el.style.opacity = it.live ? (it.state === "work" && P.queue ? 0.6 : fade) : 0;
        el.style.transform =
          "translate(" + ((it.live ? it.x : 0) * w - el.offsetWidth / 2) + "px," + (it.y || ROWC[it.row] - 9) + "px)";
        const c =
          it.kind === "shadow"
            ? "#f0b445"
            : it.kind === "human"
              ? "#f59e0b"
              : it.kind === "self"
                ? "#0e9f6e"
                : si === 3
                  ? "#2b5cff"
                  : "#8c96ad";
        if (dotsI[i]) dotsI[i].style.background = c;
        el.style.borderColor = it.kind === "shadow" ? "#f6d089" : "var(--evo-chipb,#e3e7f1)";
      });
      agents.forEach((a, i) => {
        const on = aFlash[i] > 0.05;
        a.style.background = on ? "#2b5cff" : "#e4ebff";
        const lab = a.querySelector("[data-ailabel]");
        if (lab) lab.style.color = on ? "#ffffff" : "#1741c9";
        aFlash[i] = Math.max(0, aFlash[i] - dt * 2.2);
      });
      persons.forEach((el, i) => {
        const on = pFlash[i] > 0.05;
        el.style.background = on ? (si === 3 ? "#2b5cff" : "#e4ebff") : "var(--evo-pbg,#fff)";
        pFlash[i] = Math.max(0, pFlash[i] - dt * 2);
      });
    };
    paint();
    requestAnimationFrame(tick);
    const tipEl = document.getElementById("evo-tip");
    [...card.querySelectorAll("[data-tip]")].forEach((el) => {
      if (el.parentElement && !el.parentElement.hasAttribute("data-tip")) {
        el.parentElement.setAttribute("data-tip", el.getAttribute("data-tip"));
        el.removeAttribute("data-tip");
      }
    });
    const tipOver = (ev) => {
      const v = ev.target.closest && ev.target.closest("[data-tip]");
      if (!v || !tipEl) return;
      tipEl.textContent = v.getAttribute("data-tip");
      tipEl.style.opacity = "1";
      const cr = card.getBoundingClientRect(),
        tr = v.getBoundingClientRect();
      const sc = cr.width / card.offsetWidth;
      tipEl.style.left = Math.max(6, (tr.left - cr.left) / sc) + "px";
      tipEl.style.top = (tr.top - cr.top) / sc - tipEl.offsetHeight - 10 + "px";
    };
    const tipOut = (ev) => {
      if (tipEl && ev.target.closest && ev.target.closest("[data-tip]")) tipEl.style.opacity = "0";
    };
    card.addEventListener("mouseover", tipOver);
    card.addEventListener("mouseout", tipOut);
    const fit = () => {
      const avail = innerHeight - 92;
      const need = card.scrollHeight;
      const sc = Math.min(1, Math.max(0.68, avail / Math.max(1, need)));
      card.style.transform = sc < 0.995 ? "scale(" + sc.toFixed(3) + ")" : "none";
    };
    fit();
    window.addEventListener("resize", () => {
      applyStructure();
      fit();
    });
  }
})();
