import ContactForm from "~/components/sections/contact-form";
import { CONTACT_FORM, CONTACT_INDEX } from "~/lib/content/contact";
import { FOOTER } from "~/lib/content/site";
import "~/styles/contact-hub.css";

export default function ContactHub() {
  return (
    <main className="ct-main">
      <section className="ct-shell" aria-labelledby="ct-intake-heading">
        <div className="uch-inner ct-split">
          <div className="ct-copy">
            <div className="uch-badge">
              <span className="uch-badge-dot" aria-hidden />
              <span className="uch-badge-label">{CONTACT_INDEX.eyebrow}</span>
            </div>
            <h1 id="ct-intake-heading" className="ct-h1">
              {CONTACT_INDEX.titleLead}
              <br />
              <span className="ct-h1-accent">{CONTACT_INDEX.titleAccent}</span>
            </h1>
            <p className="ct-lead">{CONTACT_INDEX.lead}</p>
            <a className="ct-mail" href={`mailto:${FOOTER.email}`}>
              {FOOTER.email}
            </a>
          </div>
          <div className="ct-panel">
            <p className="ct-panel-note">{CONTACT_FORM.consoleNote}</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
