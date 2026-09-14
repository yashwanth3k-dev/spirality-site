"use client";

import { Lottie } from "lottie-react";
import aboutUsAnimation from "~/assets/hero/about-us.json";

export default function AboutUsLottie({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <Lottie src={aboutUsAnimation} loop autoplay className="sp-hero-lottie" />
    </div>
  );
}
