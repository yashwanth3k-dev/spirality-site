"use client";

import { useMemo, useRef, useState } from "react";
import { ArrowIcon, UseCaseIcon } from "~/components/sections/use-case-icons";
import {
  CONTACT_DEPTHS,
  CONTACT_FORM,
  CONTACT_SYSTEM_SPECIAL,
  CONTACT_SYSTEMS,
  CONTACT_VECTORS,
} from "~/lib/content/contact";
import { FOOTER } from "~/lib/content/site";

type FormState = {
  vector: string;
  name: string;
  email: string;
  company: string;
  depth: string;
  systems: string[];
  process: string;
};

const EMPTY: FormState = {
  vector: "",
  name: "",
  email: "",
  company: "",
  depth: "",
  systems: [],
  process: "",
};

function vectorLabel(id: string) {
  return CONTACT_VECTORS.find((item) => item.id === id)?.title ?? id;
}

function depthLabel(id: string) {
  return CONTACT_DEPTHS.find((item) => item.id === id)?.title ?? id;
}

function buildMailto(state: FormState) {
  const subject = `Spirality intake — ${vectorLabel(state.vector)}`;
  const lines = [
    `Name: ${state.name}`,
    `Email: ${state.email}`,
    state.company ? `Company: ${state.company}` : null,
    `Vector: ${vectorLabel(state.vector)}`,
    `Depth: ${depthLabel(state.depth)}`,
    state.systems.length
      ? `Already running: ${state.systems.join(", ")}`
      : null,
    "",
    "The process:",
    state.process.trim(),
  ].filter((line) => line !== null);
  return `mailto:${FOOTER.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>(EMPTY);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
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

  function toggleSystem(label: string) {
    const special = new Set<string>(CONTACT_SYSTEM_SPECIAL);
    setState((current) => {
      if (current.systems.includes(label)) {
        return {
          ...current,
          systems: current.systems.filter((item) => item !== label),
        };
      }
      if (special.has(label)) {
        return { ...current, systems: [label] };
      }
      return {
        ...current,
        systems: [
          ...current.systems.filter((item) => !special.has(item)),
          label,
        ],
      };
    });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    if (
      !state.name.trim() ||
      !state.vector ||
      !state.depth ||
      !state.process.trim()
    ) {
      setError(CONTACT_FORM.errorRequired);
      requestAnimationFrame(() => {
        if (!state.name.trim()) {
          nameRef.current?.focus();
        } else if (!state.vector) {
          formRef.current
            ?.querySelector<HTMLInputElement>('input[name="vector"]')
            ?.focus();
        } else if (!state.depth) {
          formRef.current
            ?.querySelector<HTMLInputElement>('input[name="depth"]')
            ?.focus();
        } else {
          processRef.current?.focus();
        }
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
        body: JSON.stringify(state),
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
    <form ref={formRef} className="ct-form" onSubmit={onSubmit} noValidate>
      <fieldset className="ct-fieldset">
        <legend>{CONTACT_FORM.vectorLegend}</legend>
        <div className="ct-vectors">
          {CONTACT_VECTORS.map((item) => {
            const checked = state.vector === item.id;
            return (
              <label
                key={item.id}
                className={`ct-choice${checked ? "is-on" : ""}`}
              >
                <input
                  type="radio"
                  name="vector"
                  value={item.id}
                  checked={checked}
                  onChange={() =>
                    setState((current) => ({ ...current, vector: item.id }))
                  }
                  required
                  aria-invalid={Boolean(error && !state.vector)}
                  aria-describedby={error ? "ct-form-error" : undefined}
                />
                <span className="ct-choice-icon" aria-hidden>
                  <UseCaseIcon name={item.icon} size={18} />
                </span>
                <span className="ct-choice-copy">
                  <span className="ct-choice-title">{item.title}</span>
                  <span className="ct-choice-line">{item.line}</span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

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
      </div>

      <fieldset className="ct-fieldset">
        <legend>{CONTACT_FORM.depthLegend}</legend>
        <div className="ct-depths">
          {CONTACT_DEPTHS.map((item) => {
            const checked = state.depth === item.id;
            return (
              <label
                key={item.id}
                className={`ct-choice ct-choice-plain${checked ? "is-on" : ""}`}
              >
                <input
                  type="radio"
                  name="depth"
                  value={item.id}
                  checked={checked}
                  onChange={() =>
                    setState((current) => ({ ...current, depth: item.id }))
                  }
                  required
                  aria-invalid={Boolean(error && !state.depth)}
                  aria-describedby={error ? "ct-form-error" : undefined}
                />
                <span className="ct-choice-copy">
                  <span className="ct-choice-title">{item.title}</span>
                  <span className="ct-choice-line">{item.line}</span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="ct-fieldset">
        <legend>{CONTACT_FORM.systemsLegend}</legend>
        <p className="ct-hint">{CONTACT_FORM.systemsHint}</p>
        <div className="ct-systems">
          {CONTACT_SYSTEMS.map((label) => {
            const checked = state.systems.includes(label);
            return (
              <label key={label} className={`ct-chip${checked ? "is-on" : ""}`}>
                <input
                  type="checkbox"
                  name="systems"
                  value={label}
                  checked={checked}
                  onChange={() => toggleSystem(label)}
                />
                {label}
              </label>
            );
          })}
        </div>
      </fieldset>

      <label className="ct-field ct-field-wide">
        <span>{CONTACT_FORM.processLabel}</span>
        <textarea
          ref={processRef}
          name="process"
          rows={6}
          placeholder={CONTACT_FORM.processPlaceholder}
          value={state.process}
          onChange={(event) =>
            setState((current) => ({ ...current, process: event.target.value }))
          }
          required
          aria-invalid={Boolean(error && !state.process.trim())}
          aria-describedby={error ? "ct-form-error" : undefined}
        />
      </label>

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
