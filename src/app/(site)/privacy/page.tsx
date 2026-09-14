import { type Metadata } from "next";
import LegalDoc from "~/components/sections/legal-doc";
import { ROUTES } from "~/lib/content/site";
import { pageMetadata } from "~/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Spirality Solutions",
  description:
    "How Spirality Solutions collects, uses, and protects information when you use our website or contact us.",
  path: ROUTES.privacy,
});

export default function PrivacyPage() {
  return (
    <LegalDoc
      title="Privacy Policy"
      updated="14 September 2026"
      sections={[
        {
          heading: "Who we are",
          paragraphs: [
            "Spirality Solutions Private Limited (“Spirality”, “we”, “us”) provides AI systems and managed operations services. This policy explains how we handle information when you visit spiralitysolutions.com or contact us.",
          ],
        },
        {
          heading: "Information we collect",
          paragraphs: [
            "When you write to us, including via our contact form, we receive whatever you choose to send — typically your name, email address, organisation, and message details.",
            "Our hosting and analytics providers may collect standard technical data such as IP address, browser type, device information, and pages viewed. We do not sell personal information.",
          ],
        },
        {
          heading: "How we use information",
          paragraphs: [
            "We use contact details to respond to enquiries, discuss potential work, and administer client relationships. Technical data helps us operate, secure, and improve the website.",
            "We do not use your enquiry content to train public AI models.",
          ],
        },
        {
          heading: "Sharing",
          paragraphs: [
            "We share information only with service providers who help us run the site or deliver services (for example hosting), when required by law, or with your direction in the course of a project.",
          ],
        },
        {
          heading: "Retention",
          paragraphs: [
            "Enquiry correspondence is kept as long as needed to handle your request and for ordinary business records. You may ask us to delete or correct personal data we hold about you by emailing the address below.",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "The site may use essential cookies or local storage for preferences such as theme. If we add non-essential analytics cookies later, we will update this policy accordingly.",
          ],
        },
        {
          heading: "Changes",
          paragraphs: [
            "We may update this policy from time to time. The “Last updated” date at the top of this page will change when we do.",
          ],
        },
      ]}
    />
  );
}
