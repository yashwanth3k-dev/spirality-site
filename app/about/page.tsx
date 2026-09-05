import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Spirality exists: AI models are accessible. Operational context isn't. We assemble AI around real business work."
};

export default function AboutPage() {
  return (
    <main className="cine-page" style={{ minHeight: "70vh", padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: 40 * 16, margin: "0 auto" }}>
        <p className="cine-eyebrow">About</p>
        <h1 className="cine-h2">Why Spirality exists</h1>
        <p className="cine-lead">
          AI models are increasingly accessible. Operational context isn&apos;t.
          Spirality builds the layer on top — your processes, rules, and edge
          cases — engineered in.
        </p>
        <p style={{ marginTop: "2rem" }}>
          <Link href="/contact" className="cine-pill">
            Talk to Us
          </Link>
        </p>
      </div>
    </main>
  );
}
