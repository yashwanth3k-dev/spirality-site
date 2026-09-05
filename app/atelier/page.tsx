import type { Metadata } from "next";
import { AtelierHero } from "@/components/atelier-hero";

export const metadata: Metadata = {
  title: "Atelier",
  description:
    "UX and app design for bold ventures. We shape digital products that define brands and unlock exponential growth."
};

export default function AtelierPage() {
  return (
    <main className="atelier-page min-h-screen bg-black">
      <AtelierHero />
    </main>
  );
}
