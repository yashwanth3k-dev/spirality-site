import { type Metadata } from "next";
import BizdaptiveDoc from "~/components/sections/bizdaptive-doc";
import { BIZDAPTIVE } from "~/lib/content/bizdaptive";
import { ROUTES } from "~/lib/content/site";
import { pageMetadata } from "~/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Bizdaptive Privacy Policy | Spirality Solutions",
  description:
    "Privacy policy for Bizdaptive, including WhatsApp, Messenger, Instagram, Lead Ads, and Meta Ads. Operated by Spirality Solutions Private Limited.",
  path: ROUTES.bizdaptivePrivacy,
});

export default function BizdaptivePrivacyPage() {
  return (
    <BizdaptiveDoc
      title="Privacy Policy"
      updated={BIZDAPTIVE.updated}
      note={`${BIZDAPTIVE.legalName} · Bizdaptive`}
    >
      <section className="legal-block">
        <h2>1. Who we are</h2>
        <p>
          Bizdaptive is operated by {BIZDAPTIVE.legalName},{" "}
          {BIZDAPTIVE.addressInline}. Our Meta app may appear on Facebook as “
          {BIZDAPTIVE.metaAppName}”; it is the same Bizdaptive service described
          here. This policy explains how we handle information when you use our
          product, website, and messaging channels connected through Meta
          (WhatsApp, Facebook Messenger, Instagram).
        </p>
        <p>
          This is the privacy policy for the Bizdaptive product. The Spirality
          Solutions marketing website has a separate{" "}
          <a href={ROUTES.privacy}>privacy policy</a>.
        </p>
      </section>
      <section className="legal-block">
        <h2>2. Information we process</h2>
        <ul>
          <li>
            Account data: name, email, workspace membership, and role
            permissions
          </li>
          <li>
            Customer conversation data: WhatsApp, Messenger, and Instagram
            messages, button taps, read and delivery receipts, attachment
            metadata, and contact names, handles, and phone numbers
          </li>
          <li>
            Facebook Page tokens for the Page a workspace admin connects, stored
            encrypted. The browser does not receive the token
          </li>
          <li>
            Lead Ads form answers for that Page, including the name, phone
            number, and the campaign or ad name when Meta includes them
          </li>
          <li>
            Ad account data for the account that workspace connects: account
            name, campaign names and status, and recent spend, clicks, and
            impressions
          </li>
          <li>
            Technical data: logs, device/browser basics, and delivery status
            needed to operate the service
          </li>
        </ul>
      </section>
      <section className="legal-block">
        <h2>3. How we use information</h2>
        <ul>
          <li>Provide inbox, CRM, and support workflows for your business</li>
          <li>
            Deliver and receive messages on channels you authorize (including
            Meta APIs)
          </li>
          <li>
            Improve reliability, security, and optional AI-assisted drafts
            inside your workspace
          </li>
          <li>Comply with law and prevent abuse</li>
        </ul>
      </section>
      <section className="legal-block">
        <h2>4. Meta / Instagram / WhatsApp data</h2>
        <p>
          A workspace admin connects their own Facebook Page with Facebook
          Login. We store that Page access token encrypted and use it only for
          that workspace: to list the Page and its Instagram professional
          account, subscribe the Page to webhooks, and send the Messenger and
          Instagram replies a teammate writes. Incoming messages, button taps,
          and read or delivery receipts are saved in that workspace inbox.
        </p>
        <p>
          For Lead Ads, we fetch the form answers Meta sends for that Page and
          save them as a contact and an enquiry in the same workspace. A lead
          needs a phone number. For Ads, we read that workspace’s ad account
          name, campaign list, campaign status, and recent spend, clicks, and
          impressions. An admin can pause or resume a campaign on that account.
          Creating an ad stays in Meta Ads Manager.
        </p>
        <p>
          We do not sell message content, lead form answers, or ad account data.
          Another workspace cannot read them. The Page token and the Ads login
          token are removed when an admin disconnects in Settings, then Channels
          (Disconnect on the Facebook or Instagram card) or Settings, then
          Connections for Meta Ads, when that Facebook user removes Bizdaptive
          under Facebook settings, and when Meta calls our data-deletion
          callback.
        </p>
      </section>
      <section className="legal-block">
        <h2>5. Sharing</h2>
        <p>
          We share data with providers that run the product under contract:
          Vercel (hosting), Supabase (database, Sydney region), Resend (email),
          Groq (optional AI-assisted drafts), and Meta for WhatsApp, Facebook
          Messenger, and Instagram delivery. We do not sell personal data.
        </p>
        <p>
          When a teammate asks for an AI-assisted draft, the relevant message
          text is sent to Groq only to generate that draft. It is not used to
          train Groq&apos;s or any other provider&apos;s models. A person
          reviews and sends the draft; the AI does not message your customers on
          its own.
        </p>
      </section>
      <section className="legal-block">
        <h2>6. Retention</h2>
        <p>
          Page tokens and the Meta Ads login are deleted as soon as the
          workspace disconnects them, or when Facebook tells us the person
          removed the app or asked for data deletion. Messages, contacts, and
          lead enquiries stay in the workspace after a token is removed, because
          the business still needs them to serve that customer. They remain
          while the workspace is active.
        </p>
        <p>
          A Facebook data-deletion callback clears those tokens and records a
          confirmation code. It leaves workspace records such as enquiries in
          place. To delete conversation, contact, and enquiry data, email us as
          described on the{" "}
          <a href={ROUTES.bizdaptiveDataDeletion}>data deletion</a> page. That
          callback stays at{" "}
          <a href={BIZDAPTIVE.dataDeletionCallback}>
            {BIZDAPTIVE.dataDeletionCallback}
          </a>
          . We also keep records the law requires, such as tax invoices.
        </p>
      </section>
      <section className="legal-block">
        <h2>7. Your choices</h2>
        <p>
          Workspace admins can disconnect WhatsApp, Facebook, Instagram, and
          Meta Ads in Settings. Disconnect revokes the stored token for that
          workspace and stops new messages and leads from that connection.
          Removing Bizdaptive in Facebook settings, or Meta’s data-deletion
          callback, does the same for every workspace that Facebook user
          connected. End customers may also use Meta, Instagram, and WhatsApp
          privacy controls for those platforms.
        </p>
      </section>
      <section className="legal-block">
        <h2>8. Contact</h2>
        <p>
          Privacy questions:{" "}
          <a href={`mailto:${BIZDAPTIVE.email}`}>{BIZDAPTIVE.email}</a>. How the
          product may be used is in the{" "}
          <a href={ROUTES.bizdaptiveTerms}>terms of service</a>.
        </p>
      </section>
    </BizdaptiveDoc>
  );
}
