import { type Metadata } from "next";
import BizdaptiveDoc from "~/components/sections/bizdaptive-doc";
import BizdaptiveFacts from "~/components/sections/bizdaptive-facts";
import { BIZDAPTIVE } from "~/lib/content/bizdaptive";
import { ROUTES } from "~/lib/content/site";
import { pageMetadata } from "~/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Bizdaptive Sample Invoice | Spirality Solutions",
  description:
    "Sample invoice layout for Bizdaptive. Example values only. Pricing is custom and is not a public price list.",
  path: ROUTES.bizdaptiveSampleInvoice,
});

export default function BizdaptiveSampleInvoicePage() {
  return (
    <BizdaptiveDoc title="Sample invoice" wide>
      <p className="bz-sample-banner">
        Sample only. This is not a request for payment and not a tax invoice.
        Values marked “Example” are placeholders. Bizdaptive uses custom
        pricing, so this sample does not show a price.
      </p>
      <article className="bz-sheet" aria-label="Sample invoice">
        <div className="bz-sheet-top">
          <div>
            <h2>{BIZDAPTIVE.legalName}</h2>
            <address>
              {BIZDAPTIVE.addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
              {BIZDAPTIVE.email}
              <br />
              {BIZDAPTIVE.phoneDisplay}
            </address>
          </div>
          <div>
            <h2>Invoice</h2>
            <p>Bizdaptive software subscription</p>
            <p>IT / software service</p>
          </div>
        </div>
        <dl className="bz-meta">
          <div>
            <dt>Invoice number</dt>
            <dd>EXAMPLE-1001</dd>
          </div>
          <div>
            <dt>Invoice date</dt>
            <dd>Example date</dd>
          </div>
          <div>
            <dt>Bill to</dt>
            <dd>Example Customer (sample name)</dd>
          </div>
          <div>
            <dt>Place of supply</dt>
            <dd>Example — Chennai, Tamil Nadu</dd>
          </div>
        </dl>
        <table>
          <caption className="bz-sr">
            Sample invoice lines. Amounts are placeholders, not a price list.
          </caption>
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Qty</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Bizdaptive software subscription (example line)
                <br />
                Billing period: example period
              </td>
              <td>1 (example)</td>
              <td>
                Custom — quoted for this customer (example, not a price list)
              </td>
            </tr>
            <tr>
              <td>GST</td>
              <td>—</td>
              <td>Not charged</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" colSpan={2}>
                Total
              </th>
              <td>Custom — contact us for the quote</td>
            </tr>
          </tfoot>
        </table>
        <p>
          Payment: a monthly fee by card or UPI on a Razorpay payment page, or a
          yearly plan by bank transfer.
        </p>
        <p>
          Questions about an invoice:{" "}
          <a href={`mailto:${BIZDAPTIVE.email}`}>{BIZDAPTIVE.email}</a>.
        </p>
      </article>
      <section className="legal-block">
        <h2>Seller</h2>
        <BizdaptiveFacts />
        <p>
          <a href={ROUTES.bizdaptiveContact}>Contact</a>
        </p>
      </section>
    </BizdaptiveDoc>
  );
}
