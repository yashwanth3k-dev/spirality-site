import { type Metadata } from "next";
import LegalDoc from "~/components/sections/legal-doc";
import { ROUTES } from "~/lib/content/site";
import { pageMetadata } from "~/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Preferences | Spirality Solutions",
  description:
    "How Spirality Solutions uses cookies and similar storage on this website.",
  path: ROUTES.cookies,
});

export default function CookiesPage() {
  return (
    <LegalDoc
      title="Cookie Preferences"
      updated="14 September 2026"
      sections={[
        {
          heading: "What we use today",
          paragraphs: [
            "This site uses essential local storage to remember your theme preference (light or dark). That preference stays on your device and is not used to track you across other sites.",
            "We use Google Analytics 4 to measure site usage. Google may set cookies or similar storage for that purpose. We do not use advertising cookies.",
          ],
        },
        {
          heading: "Essential storage",
          paragraphs: [
            "Theme preference (`il-theme`) is stored in your browser so the site can load in the mode you chose. You can clear it anytime by clearing site data in your browser settings.",
          ],
        },
        {
          heading: "Analytics",
          paragraphs: [
            "Google Analytics 4 helps us see which pages are visited, roughly where visitors come from, and which devices they use. You can block it with a browser tracker blocker or Google’s opt-out tools.",
          ],
        },
        {
          heading: "More detail",
          paragraphs: [
            "For how we handle personal information more broadly, see our Privacy Policy.",
          ],
        },
      ]}
    />
  );
}
