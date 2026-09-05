"use client";

import { useEffect } from "react";
import { Sora } from "next/font/google";
import { SentinelNavbar } from "@/components/sentinel/navbar";
import { SentinelHeroSection } from "@/components/sentinel/hero-section";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap"
});

export function SentinelLanding() {
  useEffect(() => {
    document.body.classList.add("sentinel-active");
    return () => document.body.classList.remove("sentinel-active");
  }, []);

  return (
    <div
      className={`${sora.variable} sentinel-page min-h-screen bg-hero-bg font-sora antialiased`}
    >
      <SentinelNavbar />
      <SentinelHeroSection />
    </div>
  );
}
