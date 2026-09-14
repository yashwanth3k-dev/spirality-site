import ContactForm from "~/components/sections/contact-form";
import { ArrowIcon } from "~/components/sections/use-case-icons";
import {
  CONTACT_FAQS,
  CONTACT_FORM,
  CONTACT_INDEX,
  CONTACT_NEXT,
  CONTACT_PEOPLE,
} from "~/lib/content/contact";
import "~/styles/contact-hub.css";

export default function ContactHub() {
  return (
    <main className="ct-main">
      <header className="ct-hero">
        <div className="uch-inner">
          <div className="uch-badge">
            <span className="uch-badge-dot" aria-hidden />
            <span className="uch-badge-label">{CONTACT_INDEX.eyebrow}</span>
          </div>
          <h1 className="ct-h1">
            {CONTACT_INDEX.titleLead}
            <br />
            <span className="ct-h1-accent">{CONTACT_INDEX.titleAccent}</span>
          </h1>
          <p className="ct-lead">{CONTACT_INDEX.lead}</p>
        </div>
      </header>

      <section className="ct-band" aria-labelledby="ct-intake-heading">
        <div className="uch-inner ct-intake">
          <div className="ct-console">
            <div className="ct-console-bar">
              <p id="ct-intake-heading">{CONTACT_FORM.consoleLabel}</p>
              <p>{CONTACT_FORM.consoleNote}</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section
        className="ct-band ct-band-alt"
        aria-labelledby="ct-people-heading"
      >
        <div className="uch-inner">
          <h2 id="ct-people-heading" className="ct-h2">
            {CONTACT_PEOPLE.heading}
          </h2>
          <p className="ct-body">{CONTACT_PEOPLE.lead}</p>
          <div className="ct-people">
            {CONTACT_PEOPLE.items.map((person) => (
              <article key={person.name} className="ct-person">
                <div className="ct-person-top">
                  <span aria-hidden>{person.mark}</span>
                  <span>{person.tag}</span>
                </div>
                <h3>{person.name}</h3>
                <p className="ct-person-role">{person.role}</p>
                <p className="ct-person-bio">{person.line}</p>
                <p className="ct-person-focus">{person.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ct-band" aria-labelledby="ct-next-heading">
        <div className="uch-inner">
          <h2 id="ct-next-heading" className="ct-h2">
            {CONTACT_NEXT.heading}
          </h2>
          <p className="ct-body">{CONTACT_NEXT.lead}</p>
          <ol className="ct-stages">
            {CONTACT_NEXT.stages.map((stage, index) => (
              <li key={stage.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{stage.title}</h3>
                <p>{stage.line}</p>
              </li>
            ))}
          </ol>
          <a className="uch-more" href={CONTACT_NEXT.href}>
            How we work <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="ct-band ct-band-alt" aria-labelledby="ct-faq-heading">
        <div className="uch-inner ct-faq">
          <h2 id="ct-faq-heading" className="ct-h2">
            {CONTACT_FAQS.heading}
          </h2>
          <div className="ct-faq-list">
            {CONTACT_FAQS.items.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
