import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Instinct",
  description:
    "Organisational instinct — unwritten rules, precedent, authority, and context — determines whether AI produces useful decisions or generic responses."
};

export default function InstinctPage() {
  return (
    <main className="cine-page" style={{ minHeight: "70vh", padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: 40 * 16, margin: "0 auto" }}>
        <p className="cine-eyebrow">Flagship concept</p>
        <h1 className="cine-h2">
          AI without organisational instinct is just a clever stranger.
        </h1>
        <p className="cine-lead">
          Unwritten rules, precedent, authority, risk appetite, and relationships
          decide whether AI produces useful decisions — or generic responses.
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
