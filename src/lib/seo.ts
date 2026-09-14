import { type Metadata } from "next";
import { siteUrl } from "~/config/site";

const origin = siteUrl.replace(/\/$/, "");

/** Brand mark used in Open Graph / schema when a page has no custom image. */
export const BRAND_LOGO_PATH = "/brand/spirality-mark-dark.png";

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}

export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data);
}

/** Canonical + Open Graph + Twitter for marketing pages. */
export function pageMetadata(input: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(input.path);
  const image = absoluteUrl(input.image ?? BRAND_LOGO_PATH);
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      type: input.type ?? "website",
      url,
      title: input.title,
      description: input.description,
      siteName: "Spirality Solutions",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [image],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    name: "Spirality Solutions",
    legalName: "Spirality Solutions Private Limited",
    url: absoluteUrl("/"),
    logo: absoluteUrl(BRAND_LOGO_PATH),
    email: "info@spiralitysolutions.com",
    description:
      "AI Systems & Managed Operations — assembling AI around real business processes, rules, and operational context.",
  };
}

export function aboutPageJsonLd(input: {
  url: string;
  name: string;
  description: string;
  founders: Array<{ name: string; jobTitle: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: input.name,
    description: input.description,
    url: input.url,
    isPartOf: {
      "@type": "WebSite",
      name: "Spirality Solutions",
      url: absoluteUrl("/"),
    },
    mainEntity: {
      ...organizationJsonLd(),
      founder: input.founders.map((person) => ({
        "@type": "Person",
        name: person.name,
        jobTitle: person.jobTitle,
      })),
    },
  };
}

export function articleJsonLd(input: {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  section: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    articleSection: input.section,
    inLanguage: "en",
    image: input.image ? absoluteUrl(input.image) : undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": input.url,
    },
    author: organizationJsonLd(),
    publisher: {
      ...organizationJsonLd(),
      "@type": "Organization",
    },
  };
}

export function breadcrumbJsonLd(
  crumbs: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function contactPageJsonLd(input: {
  url: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: input.name,
    description: input.description,
    url: input.url,
    isPartOf: {
      "@type": "WebSite",
      name: "Spirality Solutions",
      url: absoluteUrl("/"),
    },
    mainEntity: organizationJsonLd(),
  };
}

export function collectionJsonLd(input: {
  url: string;
  name: string;
  description: string;
  items: Array<{ name: string; path: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: input.name,
    description: input.description,
    url: input.url,
    isPartOf: {
      "@type": "WebSite",
      name: "Spirality Solutions",
      url: absoluteUrl("/"),
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: input.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.path),
      })),
    },
  };
}
