import { type Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { ROUTES } from "~/lib/content/home";
import { absoluteUrl } from "~/lib/seo";

export const metadata: Metadata = {
  title: "Insights | Spirality Solutions",
  description:
    "Practical ideas on AI, business systems, digital products and the changing way businesses work.",
  alternates: { canonical: absoluteUrl(ROUTES.blog) },
  robots: { index: false, follow: true },
};

/** Locked IA name is Insights; the live index is /blog. */
export default function InsightsPage() {
  permanentRedirect(ROUTES.blog);
}
