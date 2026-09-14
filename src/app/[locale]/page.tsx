import { type Metadata } from "next";
import HomeSections from "~/components/sections/home-sections";
import InstinctHero from "~/components/sections/instinct-hero";
import SubpageNav from "~/components/sections/subpage-nav";
import { absoluteUrl, BRAND_LOGO_PATH, organizationJsonLd } from "~/lib/seo";

const DESCRIPTION =
  "We don't sell you AI. We assemble it around your business — strategy, agents, automation, digital systems, and managed operations built on your processes, rules, and edge cases.";

const pageUrl = absoluteUrl("/");

export const metadata: Metadata = {
  title: {
    absolute: "Spirality Solutions | AI Systems & Managed Operations",
  },
  description: DESCRIPTION,
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Spirality Solutions — AI Systems & Managed Operations",
    description: DESCRIPTION,
    url: pageUrl,
    type: "website",
    siteName: "Spirality Solutions",
    images: [{ url: absoluteUrl(BRAND_LOGO_PATH) }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spirality Solutions — AI Systems & Managed Operations",
    description: DESCRIPTION,
    images: [absoluteUrl(BRAND_LOGO_PATH)],
  },
};

/**
 * One object per script tag. A single tag holding a JSON array is valid
 * JSON-LD, but consumers commonly read the root as an object and choke on it.
 */
const JSON_LD = [
  {
    "@context": "https://schema.org",
    ...organizationJsonLd(),
    sameAs: [],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Spirality Solutions",
    url: absoluteUrl("/"),
    publisher: {
      "@type": "Organization",
      name: "Spirality Solutions",
    },
  },
];

export default function Home() {
  return (
    <div className="il-page">
      {JSON_LD.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <SubpageNav />
      <InstinctHero />
      <HomeSections />
    </div>
  );
}
