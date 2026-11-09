import { type Metadata } from "next";
import { BIZDAPTIVE } from "~/lib/content/bizdaptive";
import { BIZDAPTIVE_NAV, ROUTES } from "~/lib/content/site";
import { pageMetadata } from "~/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Bizdaptive | Spirality Solutions",
  description:
    "Bizdaptive is software from Spirality Solutions Private Limited. A shared inbox for WhatsApp, website, email, Instagram, and Facebook, with custom pricing.",
  path: ROUTES.bizdaptive,
});

const PLANS = [
  {
    name: "Starter",
    line: "Shared inbox, quotes, and about 500 AI chats a month.",
  },
  {
    name: "Growth",
    line: "Orders, bookings, campaigns, and about 2,000 AI chats a month.",
  },
  {
    name: "Business",
    line: "The Growth tools, about 6,000 AI chats a month, and priority support.",
  },
] as const;

export default function BizdaptiveProductPage() {
  return (
    <>
      <header className="sp-hero" data-no-reveal>
        <div className="il-inner sp-hero-grid">
          <div className="sp-hero-copy">
            <p className="il-eyebrow">Bizdaptive</p>
            <h1 className="sp-h1">Software for Indian businesses</h1>
            <p className="il-lead il-lead-wide sp-hero-lead">
              Bizdaptive is software for Indian businesses. Your team reads
              customer messages from WhatsApp, your website, email, Instagram,
              and Facebook in one inbox, turns them into quotes and orders, and
              uses an assistant to draft replies. A person on your team sends
              the reply.
            </p>
            <p className="il-lead il-lead-wide">
              It is a software service in the IT and software category, sold by{" "}
              {BIZDAPTIVE.legalName}. Paying for a monthly plan does not require
              a login on this website. The monthly fee is collected by card or
              UPI on a Razorpay payment page. A yearly plan is paid by bank
              transfer.
            </p>
            <div className="il-actions il-actions-start">
              <a
                className="il-btn il-btn-solid"
                href={`${ROUTES.bizdaptiveContact}`}
              >
                Contact us for a quote
              </a>
              <a
                className="il-btn il-btn-ghost"
                href={BIZDAPTIVE.signInUrl}
                rel="noopener noreferrer"
              >
                Sign in
              </a>
            </div>
            <p className="sp-hero-support">
              {BIZDAPTIVE.legalName} ·{" "}
              <a href={`mailto:${BIZDAPTIVE.email}`}>{BIZDAPTIVE.email}</a>
            </p>
          </div>
        </div>
      </header>

      <section className="il-section" id="product">
        <div className="il-inner">
          <div className="il-head">
            <div>
              <p className="il-eyebrow">The product</p>
              <h2 className="il-h2">How a team uses it</h2>
            </div>
          </div>
          <div className="bz-cards">
            <article className="il-card">
              <h3>Shared inbox</h3>
              <p>
                WhatsApp, your website, email, Instagram, and Facebook messages
                sit in one place for the team.
              </p>
            </article>
            <article className="il-card">
              <h3>Quotes and orders</h3>
              <p>
                The team turns those conversations into quotes and tracks
                orders. It is a light CRM for small and medium businesses,
                including salons, manufacturing, construction, field service,
                and agencies.
              </p>
            </article>
            <article className="il-card">
              <h3>Assistant, then a person</h3>
              <p>
                An assistant can draft a reply. A person in the workspace
                reviews it and sends it. The assistant does not message
                customers on its own.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="il-section" id="pricing">
        <div className="il-inner">
          <div className="il-head">
            <div>
              <p className="il-eyebrow">Pricing</p>
              <h2 className="il-h2">Custom pricing</h2>
              <p className="il-lead">
                Bizdaptive is a subscription sold by {BIZDAPTIVE.legalName}.
                Contact us for a quote. The quoted fee is the full fee. GST is
                not charged. There is no charge per user.
              </p>
            </div>
          </div>
          <div className="il-grid-3">
            {PLANS.map((plan) => (
              <article key={plan.name} className="il-card">
                <p className="bz-price">{plan.name}</p>
                <h3>Custom pricing</h3>
                <p>{plan.line}</p>
              </article>
            ))}
          </div>
          <div className="legal-block bz-prose bz-after-cards">
            <h2>How payment works</h2>
            <ul>
              <li>
                Monthly plans are paid by card or UPI on a Razorpay payment
                page.
              </li>
              <li>
                A yearly plan is ten months&apos; fee for twelve months, paid
                once by bank transfer, not on Razorpay. Setup is waived on a
                yearly plan.
              </li>
              <li>Setup, when it is charged, is a one-time fee.</li>
              <li>
                WhatsApp message fees are billed by Meta to you. Call and SMS
                fees are billed by Exotel to you. They are not part of the
                subscription.
              </li>
            </ul>
            <p>
              Cancellation and refunds are on the{" "}
              <a href={ROUTES.bizdaptiveRefunds}>refunds</a> page. To buy a
              plan, email{" "}
              <a href={`mailto:${BIZDAPTIVE.email}`}>{BIZDAPTIVE.email}</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="il-section" id="seller">
        <div className="il-inner bz-prose">
          <div className="il-head">
            <div>
              <p className="il-eyebrow">Who sells it</p>
              <h2 className="il-h2">{BIZDAPTIVE.legalName}</h2>
              <p className="il-lead">
                We sell software. We do not sell physical goods. Our Meta app
                may appear on Facebook as “{BIZDAPTIVE.metaAppName}”; it is the
                same Bizdaptive service.
              </p>
            </div>
          </div>
          <p>
            {BIZDAPTIVE.addressInline}. Support phone{" "}
            <a href={`tel:${BIZDAPTIVE.phoneTel}`}>{BIZDAPTIVE.phoneDisplay}</a>
            . Support email{" "}
            <a href={`mailto:${BIZDAPTIVE.email}`}>{BIZDAPTIVE.email}</a>.
          </p>
          <p>
            <a href={ROUTES.bizdaptiveContact}>Contact details</a>
            {" · "}
            <a href={ROUTES.contact}>Website contact form</a>
            {" · "}
            <a href={BIZDAPTIVE.signInUrl} rel="noopener noreferrer">
              Sign in at bizdaptive.app
            </a>
          </p>
          <h3>Policies</h3>
          <ul>
            {BIZDAPTIVE_NAV.filter(
              (item) => item.href !== ROUTES.bizdaptive
            ).map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
