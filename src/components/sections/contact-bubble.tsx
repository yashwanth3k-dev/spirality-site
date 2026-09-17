"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Mail, MessageCircle, MessageSquare, User, X } from "lucide-react";
import { ArrowIcon } from "~/components/sections/use-case-icons";
import { CONTACT_FORM } from "~/lib/content/contact";
import { ROUTES } from "~/lib/content/site";
import "~/styles/contact-bubble.css";

type BubbleState = {
  name: string;
  email: string;
  process: string;
};

const EMPTY: BubbleState = { name: "", email: "", process: "" };
const PROCESS_MAX = 500;

const TOPICS = [
  { id: "ai-solutions", label: "AI Solutions", vector: "ai-agents" },
  { id: "consulting", label: "Consulting", vector: "not-clear" },
  { id: "partnership", label: "Partnership", vector: "all-in-one" },
  { id: "careers", label: "Career Opportunities", vector: "not-clear" },
  { id: "other", label: "Other", vector: "not-clear" },
] as const;

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function stripLocale(path: string) {
  const clean = path.replace(/\/+$/, "") || "/";
  return clean.replace(/^\/(en|fr)(?=\/|$)/, "") || "/";
}

function isContactPath(path: string) {
  return stripLocale(path) === ROUTES.contact;
}

export default function ContactBubble() {
  const path = usePathname() ?? "";
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<BubbleState>(EMPTY);
  const [topic, setTopic] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const frame = window.requestAnimationFrame(() => nameRef.current?.focus());
    return () => {
      window.removeEventListener("keydown", onKey);
      window.cancelAnimationFrame(frame);
    };
  }, [open]);

  if (isContactPath(path)) return null;

  function close() {
    setOpen(false);
    setError(null);
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    if (!state.name.trim() || !state.process.trim()) {
      setError("Name, work email, and a short note are required.");
      return;
    }
    if (!isEmail(state.email.trim())) {
      setError(CONTACT_FORM.errorEmail);
      return;
    }

    setError(null);
    setSubmitting(true);

    const selected = TOPICS.find((item) => item.id === topic);
    const note = selected
      ? `Topic: ${selected.label}\n\n${state.process.trim()}`
      : state.process.trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: state.name.trim(),
          email: state.email.trim(),
          process: note,
          vector: selected?.vector ?? "not-clear",
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

      setSent(true);
      setState(EMPTY);
      setTopic(null);
      closeTimer.current = window.setTimeout(() => {
        setSent(false);
        setOpen(false);
      }, 1800);
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

  return (
    <div className="cb-root">
      {open ? (
        <div
          className="cb-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <button
            type="button"
            className="cb-icon-btn"
            onClick={close}
            aria-label="Close"
          >
            <X size={16} strokeWidth={2.25} />
          </button>

          <div className="cb-head">
            <div className="cb-head-copy">
              <p className="cb-eyebrow">Let’s connect</p>
              <h2 id={titleId} className="cb-title">
                Talk to <span>Our Team</span>
              </h2>
              <p className="cb-lead">
                Have a question, a project in mind, or just want to say hello?
                We’d love to hear from you.
              </p>
            </div>
          </div>

          {sent ? (
            <p className="cb-sent" role="status">
              Sent. We’ll typically reply within one business day.
            </p>
          ) : (
            <form className="cb-form" onSubmit={onSubmit} noValidate>
              <label className="cb-item">
                <span className="cb-item-icon" aria-hidden="true">
                  <User size={16} strokeWidth={2.2} />
                </span>
                <span className="cb-item-body">
                  <span className="cb-label">
                    Your name <em>*</em>
                  </span>
                  <input
                    ref={nameRef}
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="e.g. John Doe"
                    value={state.name}
                    onChange={(event) =>
                      setState((current) => ({
                        ...current,
                        name: event.target.value,
                      }))
                    }
                    required
                  />
                </span>
              </label>

              <label className="cb-item">
                <span className="cb-item-icon" aria-hidden="true">
                  <Mail size={16} strokeWidth={2.2} />
                </span>
                <span className="cb-item-body">
                  <span className="cb-label">
                    Work email <em>*</em>
                  </span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={state.email}
                    onChange={(event) =>
                      setState((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                    required
                  />
                </span>
              </label>

              <div className="cb-item">
                <span className="cb-item-icon" aria-hidden="true">
                  <MessageCircle size={16} strokeWidth={2.2} />
                </span>
                <span className="cb-item-body">
                  <label className="cb-label" htmlFor="cb-help">
                    How can we help? <em>*</em>
                  </label>
                  <textarea
                    id="cb-help"
                    name="process"
                    rows={4}
                    maxLength={PROCESS_MAX}
                    placeholder="Tell us about your requirement, idea, or challenge..."
                    value={state.process}
                    onChange={(event) =>
                      setState((current) => ({
                        ...current,
                        process: event.target.value.slice(0, PROCESS_MAX),
                      }))
                    }
                    required
                  />
                  <span className="cb-count">
                    {state.process.length}/{PROCESS_MAX}
                  </span>
                </span>
              </div>

              <div className="cb-topics">
                <p>Common topics</p>
                <div className="cb-chips">
                  {TOPICS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={topic === item.id ? "is-on" : undefined}
                      onClick={() =>
                        setTopic((current) =>
                          current === item.id ? null : item.id
                        )
                      }
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {error ? (
                <p className="cb-error" role="alert">
                  {error}
                </p>
              ) : null}

              <div className="cb-foot">
                <div className="cb-brand">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/brand/spirality-mark-dark.png"
                    alt=""
                    width={36}
                    height={36}
                  />
                  <div>
                    <strong>Spirality Solutions</strong>
                    <span>People × AI × Progress</span>
                  </div>
                </div>
                <div className="cb-send-wrap">
                  <button
                    className="cb-submit"
                    type="submit"
                    disabled={submitting}
                  >
                    {submitting ? CONTACT_FORM.sending : "Send Message"}
                    <ArrowIcon />
                  </button>
                  <p>We typically respond within 1 business day.</p>
                </div>
              </div>
            </form>
          )}
        </div>
      ) : null}

      {open ? null : (
        <button
          type="button"
          className="cb-bubble"
          onClick={() => setOpen(true)}
          aria-expanded={false}
          aria-label="Talk to Us"
        >
          <MessageSquare size={22} strokeWidth={2.25} />
        </button>
      )}
    </div>
  );
}
