import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  // Note: This is only an example. If you use Pages Router,
  // use something else that works, such as "service-worker/index.ts".
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  disable: process.env.NODE_ENV !== "production",
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  redirects: async () => {
    return [
      // the printable documents moved under /docs; keep any shared links alive
      {
        source: "/one-pager",
        destination: "/docs/one-pager",
        permanent: false,
      },
      {
        source: "/founders/akil",
        destination: "/docs/founders/akil",
        permanent: false,
      },
    ];
  },
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=()",
        },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
      ],
    },
  ],
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Required for Next.js 16+ when webpack config is added by plugins like @serwist/next
  turbopack: {},
}

export default withSerwist(nextConfig);
