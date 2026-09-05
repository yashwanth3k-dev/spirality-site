(() => {
  const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.toggle("calm", calm);

  const body = document.body;
  const toggle = document.querySelector("[data-nav-toggle]");
  const panel = document.querySelector("[data-nav-panel]");

  const setOpen = (open) => {
    body.classList.toggle("nav-open", open);
    if (toggle) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }
    if (open && panel) {
      const first = panel.querySelector("a");
      if (first) first.focus();
    }
  };

  if (toggle && panel) {
    toggle.addEventListener("click", () => {
      setOpen(!body.classList.contains("nav-open"));
    });
    panel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        const href = link.getAttribute("href") || "";
        if (href.startsWith("#")) setOpen(false);
      });
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && body.classList.contains("nav-open")) {
        setOpen(false);
      }
    });
    matchMedia("(min-width: 921px)").addEventListener("change", (event) => {
      if (event.matches) body.classList.remove("nav-open");
    });
  }

  const els = [...document.querySelectorAll("[data-reveal]")];
  if (!els.length || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        io.unobserve(el);
        const delay = calm ? 0 : (+el.getAttribute("data-reveal") || 0) * 95;
        const anim = el.animate(
          [
            { opacity: 0, transform: "translateY(26px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: calm ? 350 : 750,
            delay,
            easing: "cubic-bezier(.22,1,.36,1)",
            fill: "backwards",
          }
        );
        anim.onfinish = () => {
          el.classList.add("is-in");
        };
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );

  els.forEach((el) => io.observe(el));
})();
