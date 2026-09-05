"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const diagnosticSchema = z.object({
  name: z.string().min(2, "Tell us your name."),
  email: z.email("Use a valid email."),
  company: z.string().min(2, "Company or practice name is required."),
  role: z.string().min(2, "Role is required."),
  challenge: z.string().min(20, "Share a little more about the process or problem."),
  systems: z.string().min(2, "Mention at least one current tool or system.")
});

type DiagnosticFormValues = z.infer<typeof diagnosticSchema>;

const fields = [
  ["name", "Name", "Your name"],
  ["email", "Email", "you@company.com"],
  ["company", "Company", "Company or practice"],
  ["role", "Role", "Founder, COO, Head of Ops"]
] as const;

export function DiagnosticForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful }
  } = useForm<DiagnosticFormValues>({
    resolver: zodResolver(diagnosticSchema)
  });

  function onSubmit(values: DiagnosticFormValues) {
    console.log("Diagnostic request captured", values);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-line bg-white p-6 shadow-soft md:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map(([name, label, placeholder]) => (
          <label key={name} className="grid gap-2 text-sm font-bold text-ink">
            {label}
            <input
              {...register(name)}
              placeholder={placeholder}
              className="min-h-11 rounded-xl border border-line bg-paper px-4 py-3 text-sm font-medium outline-none transition focus:border-brand focus:bg-white"
            />
            {errors[name] ? (
              <span className="text-xs font-semibold text-red-600">
                {errors[name]?.message}
              </span>
            ) : null}
          </label>
        ))}
      </div>
      <label className="mt-4 grid gap-2 text-sm font-bold text-ink">
        Main process or problem
        <textarea
          {...register("challenge")}
          rows={5}
          placeholder="Example: Our support team spends too much time triaging repetitive tickets across email and CRM."
          className="rounded-xl border border-line bg-paper px-4 py-3 text-sm font-medium outline-none transition focus:border-brand focus:bg-white"
        />
        {errors.challenge ? (
          <span className="text-xs font-semibold text-red-600">
            {errors.challenge.message}
          </span>
        ) : null}
      </label>
      <label className="mt-4 grid gap-2 text-sm font-bold text-ink">
        Current systems
        <input
          {...register("systems")}
          placeholder="CRM, ERP, spreadsheets, inboxes, WhatsApp, custom apps"
          className="rounded-xl border border-line bg-paper px-4 py-3 text-sm font-medium outline-none transition focus:border-brand focus:bg-white"
        />
        {errors.systems ? (
          <span className="text-xs font-semibold text-red-600">
            {errors.systems.message}
          </span>
        ) : null}
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-4 text-sm font-extrabold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#172f70] sm:w-auto"
      >
        Request Diagnostic
        <Send className="h-4 w-4" />
      </button>
      {isSubmitSuccessful ? (
        <p className="mt-4 rounded-2xl bg-brand/10 px-4 py-3 text-sm font-semibold text-brand">
          Form validation works. The next step is connecting this to Supabase and
          email delivery.
        </p>
      ) : null}
    </form>
  );
}
