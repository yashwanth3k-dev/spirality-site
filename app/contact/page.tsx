import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Talk to Us",
  description:
    "Talk to Spirality Solutions about assembling AI around your processes, rules, context and edge cases."
};

export default function ContactPage() {
  return (
    <main className="cine-page" style={{ minHeight: "70vh", padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: 40 * 16, margin: "0 auto" }}>
        <p className="cine-eyebrow">Contact</p>
        <h1 className="cine-h2">Talk to Us</h1>
        <p className="cine-lead">
          Tell us the process that costs time, judgment, or risk. We&apos;ll tell
          you whether AI belongs there — and how to assemble the system around it.
        </p>
        <p className="cine-lead" style={{ marginTop: "1.5rem" }}>
          <a href="mailto:info@bizdaptive.com" style={{ color: "#fafafa" }}>
            info@bizdaptive.com
          </a>
        </p>
        <p style={{ marginTop: "2rem" }}>
          <Link href="/" className="cine-ghost" style={{ marginTop: 0 }}>
            Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}
