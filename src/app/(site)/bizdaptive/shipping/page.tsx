import { type Metadata } from "next";
import BizdaptiveDoc from "~/components/sections/bizdaptive-doc";
import { BIZDAPTIVE } from "~/lib/content/bizdaptive";
import { ROUTES } from "~/lib/content/site";
import { pageMetadata } from "~/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Bizdaptive Shipping | Spirality Solutions",
  description:
    "Bizdaptive is software from Spirality Solutions Private Limited. It is delivered online. Nothing is shipped.",
  path: ROUTES.bizdaptiveShipping,
});

export default function BizdaptiveShippingPage() {
  return (
    <BizdaptiveDoc title="Shipping and delivery">
      <section className="legal-block">
        <h2>Digital service</h2>
        <p>
          {BIZDAPTIVE.legalName} does not ship physical goods. Bizdaptive is
          software. The service is delivered online at bizdaptive.app as soon as
          payment goes through. There is no delivery charge and no courier.
        </p>
        <p>
          Sign in, after you have an account, at{" "}
          <a href={BIZDAPTIVE.signInUrl} rel="noopener noreferrer">
            {BIZDAPTIVE.signInUrl}
          </a>
          .
        </p>
      </section>
      <section className="legal-block">
        <h2>Questions</h2>
        <p>
          Email <a href={`mailto:${BIZDAPTIVE.email}`}>{BIZDAPTIVE.email}</a> or
          see <a href={ROUTES.bizdaptiveContact}>contact</a>.
        </p>
      </section>
    </BizdaptiveDoc>
  );
}
