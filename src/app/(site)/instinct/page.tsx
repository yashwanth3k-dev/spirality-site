import { type Metadata } from "next";
import StubPage from "~/components/sections/stub-page";
import { INSTINCT, ROUTES } from "~/lib/content/home";
import { pageMetadata } from "~/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Instinct | Spirality Solutions",
    description: INSTINCT.body,
    path: ROUTES.instinct,
  }),
  robots: { index: false, follow: true },
};

export default function InstinctPage() {
  return (
    <StubPage
      eyebrow={INSTINCT.eyebrow}
      title={INSTINCT.heading}
      lead={INSTINCT.body}
      items={[
        {
          term: "Unwritten rules",
          line: "How work actually gets approved, escalated, and overridden.",
        },
        {
          term: "Precedent",
          line: "What the organisation has already decided, and why.",
        },
        {
          term: "Authority",
          line: "Who can commit the business to an action.",
        },
        {
          term: "Risk appetite",
          line: "Where judgment must stay with a person.",
        },
      ]}
    />
  );
}
