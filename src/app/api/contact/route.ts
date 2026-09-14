import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_TO = process.env.CONTACT_TO || "info@spiralitysolutions.com";
const RESEND_FROM =
  process.env.RESEND_FROM ||
  "Spirality Solutions <info@spiralitysolutions.com>";

type ContactPayload = {
  vector?: string;
  name?: string;
  email?: string;
  company?: string;
  depth?: string;
  systems?: string[];
  process?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizePayload(input: ContactPayload) {
  const name = input.name?.trim() ?? "";
  const email = input.email?.trim() ?? "";
  const company = input.company?.trim() ?? "";
  const vector = input.vector?.trim() ?? "";
  const depth = input.depth?.trim() ?? "";
  const process = input.process?.trim() ?? "";
  const systems = Array.isArray(input.systems)
    ? input.systems.filter((item): item is string => typeof item === "string")
    : [];

  return { name, email, company, vector, depth, systems, process };
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const data = normalizePayload(payload);

  if (
    !data.name ||
    !data.email ||
    !data.vector ||
    !data.depth ||
    !data.process
  ) {
    return NextResponse.json(
      { error: "Please complete the required fields." },
      { status: 400 }
    );
  }

  if (!isEmail(data.email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.company ? `Company: ${data.company}` : null,
    `Vector: ${data.vector}`,
    `Depth: ${data.depth}`,
    data.systems.length ? `Already running: ${data.systems.join(", ")}` : null,
    "",
    "The process:",
    data.process,
  ].filter((line): line is string => line !== null);

  const resend = new Resend(process.env.RESEND_API_KEY);
  const subject = `Spirality intake - ${data.vector}`;

  const { error } = await resend.emails.send({
    from: RESEND_FROM,
    to: CONTACT_TO,
    replyTo: data.email,
    subject,
    text: lines.join("\n"),
    html: `
      <h2>New Spirality intake</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      ${
        data.company
          ? `<p><strong>Company:</strong> ${escapeHtml(data.company)}</p>`
          : ""
      }
      <p><strong>Vector:</strong> ${escapeHtml(data.vector)}</p>
      <p><strong>Depth:</strong> ${escapeHtml(data.depth)}</p>
      ${
        data.systems.length
          ? `<p><strong>Already running:</strong> ${escapeHtml(
              data.systems.join(", ")
            )}</p>`
          : ""
      }
      <h3>The process</h3>
      <p>${escapeHtml(data.process).replace(/\n/g, "<br />")}</p>
    `,
  });

  if (error) {
    console.error("Resend contact form error", error);
    return NextResponse.json(
      { error: "Could not send your message right now." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
