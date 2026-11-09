import { type Metadata } from "next";
import BizdaptiveDoc from "~/components/sections/bizdaptive-doc";
import { BIZDAPTIVE } from "~/lib/content/bizdaptive";
import { ROUTES } from "~/lib/content/site";
import { pageMetadata } from "~/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Bizdaptive Refunds | Spirality Solutions",
  description:
    "Cancellation and refund rules for Bizdaptive software plans from Spirality Solutions Private Limited.",
  path: ROUTES.bizdaptiveRefunds,
});

export default function BizdaptiveRefundsPage() {
  return (
    <BizdaptiveDoc title="Cancellation and refunds">
      <p>{BIZDAPTIVE.legalName} · Bizdaptive</p>
      <p>
        Bizdaptive is software. Nothing is delivered by courier. Access is
        turned on after payment. See{" "}
        <a href={ROUTES.bizdaptiveShipping}>shipping</a> for that statement.
      </p>
      <section className="legal-block">
        <h2>How to cancel</h2>
        <p>
          Email <a href={`mailto:${BIZDAPTIVE.email}`}>{BIZDAPTIVE.email}</a>{" "}
          from the address on the account, with the workspace name and the word
          cancel. We confirm by email.
        </p>
      </section>
      <section className="legal-block">
        <h2>Monthly plans</h2>
        <p>
          You can cancel a monthly subscription at any time. Cancellation takes
          effect at the end of the month you have already paid for. That month
          is not refunded.
        </p>
      </section>
      <section className="legal-block">
        <h2>Yearly plans</h2>
        <p>
          A yearly plan can be refunded pro-rata within the first 60 days, after
          deducting the setup value. There is no refund after 60 days.
        </p>
      </section>
      <section className="legal-block">
        <h2>How long a refund takes</h2>
        <p>
          When a refund is due, we confirm it within 2 working days. The money
          goes back to the original payment method within 7 working days of that
          confirmation.
        </p>
      </section>
      <section className="legal-block">
        <h2>If a payment fails</h2>
        <p>
          We remind you for 7 days. The workspace then becomes read-only: your
          data stays, and the assistant pauses, until the fee is paid.
        </p>
      </section>
      <section className="legal-block">
        <h2>When you leave</h2>
        <p>
          You can export your data to Excel. We delete it 30 days after the
          account closes, except records the law requires us to keep, such as
          invoices.
        </p>
      </section>
      <section className="legal-block">
        <h2>Price changes</h2>
        <p>
          A price change is told to you at least 60 days before it applies, and
          not in the middle of a year you have already paid.
        </p>
      </section>
      <p>
        To cancel or ask for a refund, email{" "}
        <a href={`mailto:${BIZDAPTIVE.email}`}>{BIZDAPTIVE.email}</a>.
      </p>
    </BizdaptiveDoc>
  );
}
