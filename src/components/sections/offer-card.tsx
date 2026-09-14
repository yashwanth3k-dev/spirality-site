"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function OfferCard({
  title,
  line,
  href,
  iconSrc,
  iconAlt,
  badge,
  imageSrc,
}: {
  title: string;
  line: string;
  href: string;
  iconSrc: string;
  iconAlt: string;
  badge: string;
  imageSrc: string;
}) {
  const [open, setOpen] = useState(false);
  const [tapMode, setTapMode] = useState(false);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 768px)");
    const noHover = window.matchMedia("(hover: none)");
    const sync = () => {
      const isMobile = mobile.matches;
      setTapMode(!isMobile && noHover.matches);
      if (isMobile || !noHover.matches) setOpen(false);
    };
    sync();
    mobile.addEventListener("change", sync);
    noHover.addEventListener("change", sync);
    return () => {
      mobile.removeEventListener("change", sync);
      noHover.removeEventListener("change", sync);
    };
  }, []);

  return (
    <div className={`il-offer-flip${open ? "is-open" : ""}`}>
      <div className="il-offer-flip-inner">
        <div
          className="il-offer-face il-offer-back"
          onClick={tapMode ? () => setOpen(true) : undefined}
        >
          <div className="il-offer-back-content">
            <span
              className="il-offer-mono-icon"
              style={{
                maskImage: `url(${iconSrc})`,
                WebkitMaskImage: `url(${iconSrc})`,
              }}
            />
            <strong>{title}</strong>
            {tapMode ? (
              <button
                type="button"
                className="il-offer-hint il-offer-tap-btn"
                aria-expanded={open}
                onClick={(event) => {
                  event.stopPropagation();
                  setOpen(true);
                }}
              >
                Tap to explore
              </button>
            ) : (
              <span className="il-offer-hint">Hover to explore</span>
            )}
          </div>
        </div>

        <div className="il-offer-face il-offer-front">
          <div className="il-offer-media" aria-hidden="true">
            <img src={imageSrc} alt="" className="il-offer-media-img" />
            <span className="il-offer-media-shade" />
          </div>

          <div className="il-offer-front-content">
            <div className="il-offer-front-top">
              <small className="il-offer-badge">{badge}</small>
              {tapMode && open ? (
                <button
                  type="button"
                  className="il-offer-flip-close"
                  aria-label={`Close ${title}`}
                  onClick={() => setOpen(false)}
                >
                  Back
                </button>
              ) : null}
            </div>
            <div className="il-offer-desc">
              <p className="il-offer-front-title">
                <strong>{title}</strong>
              </p>
              <p className="il-offer-front-copy">{line}</p>
              <Link href={href} className="il-offer-front-cta">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
      <span className="sr-only">{iconAlt}</span>
    </div>
  );
}
