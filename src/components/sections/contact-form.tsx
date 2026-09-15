"use client";

import { useMemo, useRef, useState } from "react";
import { ArrowIcon } from "~/components/sections/use-case-icons";
import { CONTACT_FORM } from "~/lib/content/contact";
import { FOOTER } from "~/lib/content/site";

type FormState = {
  name: string;
  email: string;
  company: string;
  process: string;
};

const EMPTY: FormState = {
  name: "",
  email: "",
  company: "",
  process: "",
};

function buildMailto(state: FormState) {
  const lines = [
    `Name: ${state.name}`,
    `Email: ${state.email}`,
    state.company ? `Company: ${state.company}` : null,
    "",
    "The process:",
    state.process.trim(),
  ].filter((line) => line !== null);
  return `mailto:${FOOTER.email}?subject=${encodeURIComponent("Spirality — one process")}&body=${encodeURIComponent(lines.join("\n"))}`;
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>(EMPTY);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const processRef = useRef<HTMLTextAreaElement>(null);

  const summary = useMemo(() => {
    if (!sent) return "";
    try {
      return new URL(sent).searchParams.get("body") ?? "";
    } catch {
      const encoded = sent.split("body=")[1] ?? "";
      return decodeURIComponent(encoded.replace(/\+/g, "%20"));
    }
  }, [sent]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    if (!state.name.trim() || !state.process.trim()) {
      setError(CONTACT_FORM.errorRequired);
      requestAnimationFrame(() => {
        if (!state.name.trim()) nameRef.current?.focus();
        else processRef.current?.focus();
      });
      return;
    }
    if (!isEmail(state.email.trim())) {
      setError(CONTACT_FORM.errorEmail);
      requestAnimationFrame(() => emailRef.current?.focus());
      return;
    }

    setError(null);
    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...state,
          vector: "not-clear",
          depth: "not-clear",
          systems: [],
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(payload?.error || CONTACT_FORM.errorSubmit);
      }

      setSent(buildMailto(state));
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : CONTACT_FORM.errorSubmit
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="ct-success" role="status">
        <h2>{CONTACT_FORM.successHeading}</h2>
        <p>{CONTACT_FORM.successBody}</p>
        <pre className="ct-success-note">{summary}</pre>
        <div className="ct-success-actions">
          <a className="uch-btn uch-btn-solid" href={`mailto:${FOOTER.email}`}>
            {FOOTER.email}
          </a>
          <button
            type="button"
            className="uch-btn uch-btn-ghost"
            onClick={() => {
              setSent(null);
              setState(EMPTY);
            }}
          >
            {CONTACT_FORM.successAgain}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="ct-form" onSubmit={onSubmit} noValidate>
      <div className="ct-fields">
        <label className="ct-field">
          <span>{CONTACT_FORM.nameLabel}</span>
          <input
            ref={nameRef}
            type="text"
            name="name"
            autoComplete="name"
            placeholder={CONTACT_FORM.namePlaceholder}
            value={state.name}
            onChange={(event) =>
              setState((current) => ({ ...current, name: event.target.value }))
            }
            required
            aria-invalid={Boolean(error && !state.name.trim())}
            aria-describedby={error ? "ct-form-error" : undefined}
          />
        </label>
        <label className="ct-field">
          <span>{CONTACT_FORM.emailLabel}</span>
          <input
            ref={emailRef}
            type="email"
            name="email"
            autoComplete="email"
            placeholder={CONTACT_FORM.emailPlaceholder}
            value={state.email}
            onChange={(event) =>
              setState((current) => ({ ...current, email: event.target.value }))
            }
            required
            aria-invalid={Boolean(
              error &&
                (!state.email.trim() || error === CONTACT_FORM.errorEmail)
            )}
            aria-describedby={error ? "ct-form-error" : undefined}
          />
        </label>
        <label className="ct-field ct-field-wide">
          <span>{CONTACT_FORM.companyLabel}</span>
          <input
            type="text"
            name="company"
            autoComplete="organization"
            placeholder={CONTACT_FORM.companyPlaceholder}
            value={state.company}
            onChange={(event) =>
              setState((current) => ({
                ...current,
                company: event.target.value,
              }))
            }
          />
        </label>
        <label className="ct-field ct-field-wide">
          <span>{CONTACT_FORM.processLabel}</span>
          <textarea
            ref={processRef}
            name="process"
            rows={5}
            placeholder={CONTACT_FORM.processPlaceholder}
            value={state.process}
            onChange={(event) =>
              setState((current) => ({
                ...current,
                process: event.target.value,
              }))
            }
            required
            aria-invalid={Boolean(error && !state.process.trim())}
            aria-describedby={error ? "ct-form-error" : undefined}
          />
        </label>
      </div>

      {error ? (
        <p id="ct-form-error" className="ct-error" role="alert">
          {error}
        </p>
      ) : null}

      <button
        className="uch-btn uch-btn-solid ct-submit"
        type="submit"
        disabled={submitting}
      >
        {submitting ? CONTACT_FORM.sending : CONTACT_FORM.submit} <ArrowIcon />
      </button>
    </form>
  );
}
