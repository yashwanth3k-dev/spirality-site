import type { Metadata } from "next";
import { SentinelLanding } from "@/components/sentinel/sentinel-landing";

export const metadata: Metadata = {
  title: "SENTINEL AI",
  description:
    "Enterprise security systems built in days. AI-powered surveillance, zero-trust architecture, and smart access control — done right."
};

export default function SentinelPage() {
  return <SentinelLanding />;
}
