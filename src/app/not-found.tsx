import Link from "next/link";

/**
 * Root catch-all 404 when a URL matches no route segment.
 * Renders its own document shell (no shared root layout in this app).
 */
export default function RootNotFound() {
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
            404
          </p>
          <h1
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(1.75rem, 4vw, 2.4rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            Page not found
          </h1>
          <p
            style={{
              margin: "0 0 28px",
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "#4b5563",
            }}
          >
            That URL isn&apos;t on this site. Head home or talk to us if you
            were looking for something specific.
          </p>
          <p
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px 16px",
              margin: 0,
            }}
          >
            <Link href="/" style={{ color: "#0e0e12" }}>
              Home
            </Link>
            <Link href="/contact" style={{ color: "#0e0e12" }}>
              Contact
            </Link>
          </p>
        </main>
      </body>
    </html>
  );
}
