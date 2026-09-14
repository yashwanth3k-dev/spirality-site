"use client";

import { Lottie } from "lottie-react";
import websiteDesignAnimation from "~/assets/hero/website-design.json";

export default function WebsiteDesignLottie({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={className} aria-hidden="true">
      <Lottie
        src={websiteDesignAnimation}
        loop
        autoplay
        className="sp-hero-lottie"
      />
    </div>
  );
}
