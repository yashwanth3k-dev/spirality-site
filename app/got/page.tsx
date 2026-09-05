import type { Metadata } from "next";
import { GotStage } from "@/components/got-stage";

export const metadata: Metadata = {
  title: "Got",
  description: "Got — a dedicated cinematic stage from Spirality."
};

export default function GotPage() {
  return (
    <main className="cine-page">
      <GotStage />
    </main>
  );
}
