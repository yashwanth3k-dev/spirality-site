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
            "We do not currently set non-essential advertising or analytics cookies on the public marketing pages.",
          ],
        },
        {
          heading: "Essential storage",
          paragraphs: [
            "Theme preference (`il-theme`) is stored in your browser so the site can load in the mode you chose. You can clear it anytime by clearing site data in your browser settings.",
          ],
        },
        {
          heading: "If we add analytics later",
          paragraphs: [
            "If we introduce optional analytics or similar tools, we will update this page and, where required, ask for consent before setting non-essential cookies.",
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
