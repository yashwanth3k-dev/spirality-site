"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HERO_NAV, ROUTES } from "~/lib/content/site";
import { cn } from "~/lib/utils";

const MENU_ID = "sp-site-menu";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("sp-nav-lock");
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.classList.remove("sp-nav-lock");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const drawer =
    mounted &&
    createPortal(
      <div
        id={MENU_ID}
        className="sp-drawer"
        hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div className="sp-drawer-inner">
          {HERO_NAV.map((group) => (
            <section key={group.label} className="sp-drawer-group">
              <h2>{group.label}</h2>
              <ul>
                {group.children.map((child) => (
                  <li key={child.href + child.label}>
                    <a href={child.href}>{child.label}</a>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <a className="sp-drawer-cta" href={ROUTES.contact}>
            Talk to Us
          </a>
        </div>
      </div>,
      document.body
    );

  return (
    <div className={cn("sp-mobile", open && "is-open")}>
      <button
        type="button"
        className={cn("sp-burger", open && "is-open")}
        aria-expanded={open}
        aria-controls={MENU_ID}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="sp-burger-lines" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>
      {drawer}
    </div>
  );
}
