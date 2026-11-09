import { type Metadata } from "next";
import BizdaptiveDoc from "~/components/sections/bizdaptive-doc";
import { BIZDAPTIVE } from "~/lib/content/bizdaptive";
import { ROUTES } from "~/lib/content/site";
import { pageMetadata } from "~/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Bizdaptive Data Deletion | Spirality Solutions",
  description:
    "How to ask Bizdaptive to delete your data, and how Meta's data deletion callback works.",
  path: ROUTES.bizdaptiveDataDeletion,
});

export default function BizdaptiveDataDeletionPage() {
  return (
    <BizdaptiveDoc
      title="Data deletion"
      updated={BIZDAPTIVE.updated}
      note={`${BIZDAPTIVE.legalName} · Bizdaptive`}
    >
      <section className="legal-block">
        <h2>How to delete your data</h2>
        <p>
          Bizdaptive is operated by {BIZDAPTIVE.legalName}. Our Meta app may
          appear on Facebook as “{BIZDAPTIVE.metaAppName}”; it is the same
          Bizdaptive service. If you connected WhatsApp, Facebook, or Instagram
          to Bizdaptive, or messaged a business that uses Bizdaptive, you can
          ask us to delete your data.
        </p>
        <ol>
          <li>
            Email{" "}
            <a href={`mailto:${BIZDAPTIVE.email}?subject=Delete%20my%20data`}>
              {BIZDAPTIVE.email}
            </a>{" "}
            with the subject “Delete my data”. Include the business workspace
            name and the phone number or email you used.
          </li>
          <li>
            We confirm the request within 3 working days and complete deletion
            of the conversation, contact, and connection data within 30 days,
            except records we must keep by law (for example invoices).
          </li>
          <li>
            Workspace admins can also disconnect anytime: WhatsApp, Facebook,
            and Instagram in Settings, then Channels, and Meta Ads in Settings,
            then Connections. Disconnecting removes the stored tokens and stops
            new messages or leads from reaching Bizdaptive.
          </li>
        </ol>
        <p>
          You can also remove Bizdaptive&apos;s access from your Facebook
          account under Settings and privacy, Business integrations.
        </p>
      </section>
      <section className="legal-block">
        <h2>Meta data deletion callback</h2>
        <p>
          The app also supports Meta&apos;s data deletion callback. Meta calls{" "}
          <a href={BIZDAPTIVE.dataDeletionCallback}>
            {BIZDAPTIVE.dataDeletionCallback}
          </a>
          . That address stays on bizdaptive.app. The callback clears the
          Facebook Page token and the Meta Ads login token and records a
          confirmation code. It leaves workspace records such as enquiries in
          place.
        </p>
        <p>
          A confirmation code from that callback is not looked up on this page.
          To delete conversation, contact, and enquiry data, email us as
          described above.
        </p>
        <p>
          See the <a href={ROUTES.bizdaptivePrivacy}>privacy policy</a> for what
          we process and who we share it with, and the{" "}
          <a href={ROUTES.bizdaptiveTerms}>terms of service</a>.
        </p>
      </section>
    </BizdaptiveDoc>
  );
}
