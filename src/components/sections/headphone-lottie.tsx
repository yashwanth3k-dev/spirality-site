"use client";

import { Lottie } from "lottie-react";
import headphoneAnimation from "~/assets/hero/headphone.json";

export default function HeadphoneLottie({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <Lottie
        src={headphoneAnimation}
        loop
        autoplay
        className="sp-hero-lottie"
      />
    </div>
  );
}
