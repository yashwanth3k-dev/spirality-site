import { type Metadata } from "next";
import BizdaptiveDoc from "~/components/sections/bizdaptive-doc";
import { BIZDAPTIVE } from "~/lib/content/bizdaptive";
import { ROUTES } from "~/lib/content/site";
import { pageMetadata } from "~/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Bizdaptive Terms of Service | Spirality Solutions",
  description:
    "Terms of service for Bizdaptive, a customer inbox and CRM operated by Spirality Solutions Private Limited.",
  path: ROUTES.bizdaptiveTerms,
});

export default function BizdaptiveTermsPage() {
  return (
    <BizdaptiveDoc
      title="Terms of Service"
      updated={BIZDAPTIVE.updated}
      note={`${BIZDAPTIVE.legalName} · Bizdaptive`}
    >
      <section className="legal-block">
        <h2>1. Acceptance</h2>
        <p>
          These terms govern use of Bizdaptive at bizdaptive.app. By creating an
          account, signing in, or using the service, you agree to them. If you
          use Bizdaptive for a business, you confirm you can bind that business.
          If you do not agree, do not use the service.
        </p>
        <p>
          The Spirality Solutions marketing website has separate{" "}
          <a href={ROUTES.terms}>terms of use</a>.
        </p>
      </section>
      <section className="legal-block">
        <h2>2. The service</h2>
        <p>
          Bizdaptive is operated by {BIZDAPTIVE.legalName} in India. It is a
          multi-tenant, WhatsApp-first customer inbox and light CRM for Indian
          small and medium businesses, including salons, manufacturing,
          construction, field service, and agencies. Workspaces are separate.
          Paid use is a subscription. The fee is custom;{" "}
          <a href={ROUTES.bizdaptiveContact}>contact us</a> for a quote. What
          each plan includes, and how to pay, is on the{" "}
          <a href={`${ROUTES.bizdaptive}#pricing`}>product page</a>. AI can
          draft replies. A person in your workspace reviews a draft before it is
          sent.
        </p>
      </section>
      <section className="legal-block">
        <h2>3. Accounts and workspace admins</h2>
        <p>
          You need an account to use Bizdaptive. The workspace admin is
          responsible for the people they invite, the roles they give those
          people, and what those people do in the workspace. Keep sign-in
          details private and tell us if you think an account has been misused.
          We may refuse or close an account that we cannot verify or that breaks
          these terms.
        </p>
      </section>
      <section className="legal-block">
        <h2>4. Acceptable use</h2>
        <p>
          Use Bizdaptive for lawful business communication with people who
          expect to hear from you.
        </p>
        <ul>
          <li>Do not send spam or other unsolicited messages.</li>
          <li>
            You must have the customer&apos;s consent before you message them on
            WhatsApp or send marketing.
          </li>
          <li>
            You must follow Meta&apos;s WhatsApp Business policies, and Indian
            law, including the Digital Personal Data Protection Act, 2023 (DPDP
            Act).
          </li>
          <li>
            Do not use the service to break the law, harm people, or interfere
            with the product or another customer&apos;s workspace.
          </li>
        </ul>
      </section>
      <section className="legal-block">
        <h2>5. Your data</h2>
        <p>
          You own the customer and conversation data in your workspace. We
          process that data on your behalf to provide the service, as described
          in our <a href={ROUTES.bizdaptivePrivacy}>privacy policy</a>. To ask
          for deletion, see the{" "}
          <a href={ROUTES.bizdaptiveDataDeletion}>data deletion</a> page. You
          are responsible for the personal data of your own customers that you
          collect and message through Bizdaptive.
        </p>
      </section>
      <section className="legal-block">
        <h2>6. AI features</h2>
        <p>
          AI drafts and suggestions can be wrong, incomplete, or unsuitable for
          the conversation. A person in your workspace reviews a message before
          it is sent. You are responsible for what you send, including a message
          that started as an AI draft. Do not treat AI output as legal,
          financial, or other professional advice.
        </p>
      </section>
      <section className="legal-block">
        <h2>7. Third-party services</h2>
        <p>
          WhatsApp and other Meta products, telephony, and payment services are
          run by those providers under their own terms. Charges from Meta, a
          phone provider, or a payment provider are billed by that provider.
          They are separate from the fee you pay {BIZDAPTIVE.legalName} for
          Bizdaptive, unless we agree otherwise in writing. We are not
          responsible for an outage, a policy change, or a charge at those
          providers.
        </p>
      </section>
      <section className="legal-block">
        <h2>8. Fees and payment</h2>
        <p>
          Paid use is a subscription. Plan details are on the{" "}
          <a href={`${ROUTES.bizdaptive}#pricing`}>product page</a>. The quoted
          fee is the full fee. GST is not charged. Contact us for a quote.
          Monthly plans are paid by card or UPI on Razorpay. A yearly plan is
          ten months&apos; fee for twelve months, paid once by bank transfer,
          not on Razorpay. Setup, when it is charged, is a one-time fee, and is
          waived on a yearly plan. WhatsApp message fees are billed by Meta.
          Call and SMS fees are billed by Exotel. Those charges are not part of
          the subscription price. How to cancel, and when a refund is paid, is
          on the <a href={ROUTES.bizdaptiveRefunds}>refunds page</a>.
        </p>
      </section>
      <section className="legal-block">
        <h2>9. Non-payment</h2>
        <p>
          If a fee is not paid, we may place the workspace in read-only mode and
          then suspend it. A read-only or suspended workspace is not deleted
          immediately. Your data stays in place while we sort out payment,
          subject to the retention rules in the privacy policy and these terms.
        </p>
      </section>
      <section className="legal-block">
        <h2>10. Ending the service, export, and deletion</h2>
        <p>
          You may stop using Bizdaptive and ask us to close the workspace. We
          may suspend or end access if you break these terms, if the law
          requires it, or if we stop offering the service. Before a workspace is
          closed, you may ask us to export your data. Deletion then follows the{" "}
          <a href={ROUTES.bizdaptivePrivacy}>privacy policy</a> and the{" "}
          <a href={ROUTES.bizdaptiveDataDeletion}>data deletion</a> page. We may
          keep records the law requires us to keep, such as invoices.
        </p>
      </section>
      <section className="legal-block">
        <h2>11. Availability</h2>
        <p>
          We will use reasonable effort to keep Bizdaptive available and to
          repair faults. We do not guarantee a particular level of uptime.
          Maintenance, provider outages, and events outside our control can
          interrupt the service.
        </p>
      </section>
      <section className="legal-block">
        <h2>12. Intellectual property</h2>
        <p>
          {BIZDAPTIVE.legalName} and its licensors own Bizdaptive, including the
          software, branding, and documentation. These terms give you a limited
          right to use the service for your business while the account is in
          good standing. You keep ownership of your content. You allow us to
          host and process that content only so we can provide the service to
          you.
        </p>
      </section>
      <section className="legal-block">
        <h2>13. Disclaimers and limitation of liability</h2>
        <p>
          The service is provided as available. To the extent Indian law allows,
          we disclaim warranties that are not written in these terms, including
          any warranty of fitness for a particular purpose or of uninterrupted
          operation.
        </p>
        <p>
          Our total liability arising out of these terms or the service is
          limited to the fees you paid us for Bizdaptive in the 12 months before
          the claim. This cap applies whether the claim is in contract, tort, or
          otherwise. We are not liable for lost profits, or for indirect or
          consequential loss. Nothing in these terms limits liability that
          Indian law does not allow us to limit.
        </p>
      </section>
      <section className="legal-block">
        <h2>14. Indemnity</h2>
        <p>
          You will indemnify {BIZDAPTIVE.legalName} against claims, losses, and
          reasonable legal costs that arise from your content, the messages you
          send (including WhatsApp and marketing), your breach of these terms,
          or your breach of law or a third-party policy, including Meta&apos;s
          WhatsApp Business policies.
        </p>
      </section>
      <section className="legal-block">
        <h2>15. Governing law</h2>
        <p>
          These terms are governed by the laws of India. The courts of Chennai,
          Tamil Nadu, India have exclusive jurisdiction.
        </p>
      </section>
      <section className="legal-block">
        <h2>16. Changes to these terms</h2>
        <p>
          We may update these terms. The “Last updated” date at the top will
          change when we do. If a change is material, we will tell workspace
          admins in the product or by email before it applies, where that is
          practical. If you keep using Bizdaptive after the updated terms apply,
          you accept them.
        </p>
      </section>
      <section className="legal-block">
        <h2>17. Contact</h2>
        <p>
          Questions about these terms:{" "}
          <a href={`mailto:${BIZDAPTIVE.email}`}>{BIZDAPTIVE.email}</a>.
        </p>
      </section>
    </BizdaptiveDoc>
  );
}
