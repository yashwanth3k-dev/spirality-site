"use client";

import { useEffect } from "react";

/**
 * Replaces the root layout when a critical error escapes all other boundaries.
 * Must render its own html/body. Plain anchors are intentional — Next.js Link
 * is unreliable when the root layout has failed.
 */
/* eslint-disable @next/next/no-html-link-for-pages */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          fontFamily: 'Inter, "Helvetica Neue", Helvetica, Arial, sans-serif',
          background: "#f4f7fc",
          color: "#0e0e12",
        }}
      >
        <main
          style={{
            maxWidth: "36rem",
            margin: "0 auto",
            padding: "20vh 24px 48px",
          }}
        >
          <p
            style={{
              margin: "0 0 12px",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#6b7280",
            }}
          >
            Error
          </p>
          <h1
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(1.75rem, 4vw, 2.4rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            Something went wrong
          </h1>
          <p
            style={{
              margin: "0 0 28px",
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "#4b5563",
            }}
          >
            The site hit a critical error. Try again, or go home.
          </p>
          <p
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px 16px",
              margin: 0,
            }}
          >
            <button
              type="button"
              onClick={reset}
              style={{
                margin: 0,
                padding: "10px 18px",
                border: 0,
                borderRadius: 999,
                background: "#1539d1",
                color: "#fff",
                fontSize: "0.85rem",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            <a
              href="/"
              style={{
                alignSelf: "center",
                color: "#0e0e12",
                fontSize: "0.9rem",
              }}
            >
              Home
            </a>
            <a
              href="/contact"
              style={{
                alignSelf: "center",
                color: "#0e0e12",
                fontSize: "0.9rem",
              }}
            >
              Contact
            </a>
          </p>
        </main>
      </body>
    </html>
  );
}
