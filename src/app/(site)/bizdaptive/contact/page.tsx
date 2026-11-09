import { type Metadata } from "next";
import BizdaptiveDoc from "~/components/sections/bizdaptive-doc";
import BizdaptiveFacts from "~/components/sections/bizdaptive-facts";
import { BIZDAPTIVE } from "~/lib/content/bizdaptive";
import { ROUTES } from "~/lib/content/site";
import { pageMetadata } from "~/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Bizdaptive Contact | Spirality Solutions",
  description:
    "Contact Spirality Solutions Private Limited about Bizdaptive: address, phone, and email.",
  path: ROUTES.bizdaptiveContact,
});

export default function BizdaptiveContactPage() {
  return (
    <BizdaptiveDoc title="Contact us">
      <p>
        Write to us for a plan, an invoice, a cancellation, or a refund. We
        reply by email.
      </p>
      <BizdaptiveFacts />
      <section className="legal-block">
        <h2>Sign in</h2>
        <p>
          If you already have an account, sign in at{" "}
          <a href={BIZDAPTIVE.signInUrl} rel="noopener noreferrer">
            {BIZDAPTIVE.signInUrl}
          </a>
          .
        </p>
      </section>
      <section className="legal-block">
        <h2>Website form</h2>
        <p>
          You can also send a note through the{" "}
          <a href={ROUTES.contact}>Spirality Solutions contact form</a>.
        </p>
      </section>
    </BizdaptiveDoc>
  );
}
