import { type Metadata } from "next";
import LegalDoc from "~/components/sections/legal-doc";
import { ROUTES } from "~/lib/content/site";
import { pageMetadata } from "~/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use | Spirality Solutions",
  description:
    "Terms governing use of the Spirality Solutions website and general conditions for engaging our services.",
  path: ROUTES.terms,
});

export default function TermsPage() {
  return (
    <LegalDoc
      title="Terms of Use"
      updated="14 September 2026"
      sections={[
        {
          heading: "Agreement",
          paragraphs: [
            "By using spiralitysolutions.com you agree to these terms. If you do not agree, please do not use the site.",
          ],
        },
        {
          heading: "Website content",
          paragraphs: [
            "Materials on this site are for general information about Spirality Solutions and our services. They are not a binding offer, professional advice, or a guarantee of outcomes. Case studies and examples describe approaches and results in context; they may not apply to your situation.",
          ],
        },
        {
          heading: "Services",
          paragraphs: [
            "Any paid work is governed by a separate proposal, statement of work, or contract. Those documents control if they conflict with these website terms.",
          ],
        },
        {
          heading: "Acceptable use",
          paragraphs: [
            "You may not misuse the site — including attempting to disrupt it, scrape it aggressively, or use it to send unlawful or harmful content.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "Site design, copy, and brand assets belong to Spirality Solutions or our licensors. You may not copy or reuse them commercially without permission.",
          ],
        },
        {
          heading: "Disclaimer and liability",
          paragraphs: [
            "The site is provided “as is”. To the fullest extent permitted by law, we exclude liability for loss arising from use of the site or reliance on its contents. Nothing here limits liability that cannot be limited under applicable law.",
          ],
        },
        {
          heading: "Governing law",
          paragraphs: [
            "These terms are governed by the laws of India, without regard to conflict-of-law rules. Courts in India have exclusive jurisdiction over disputes arising from website use, unless a separate services contract says otherwise.",
          ],
        },
        {
          heading: "Changes",
          paragraphs: [
            "We may revise these terms. Continued use of the site after changes means you accept the updated terms.",
          ],
        },
      ]}
    />
  );
}
