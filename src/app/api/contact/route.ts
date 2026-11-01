import { NextResponse } from "next/server";
import { collapseText, CONTACT_INTAKE, visitorIp } from "~/lib/contact-intake";

const MIN_FILL_MS = 3_000;
const RATE_MAX = 8;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const CRM_TIMEOUT_MS = 8_000;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const FRIENDLY_ERROR = "Could not send your message right now.";
const RATE_LIMIT_ERROR = "Please try again shortly.";

const recentHits = new Map<string, number[]>();

function envValue(name: string) {
  const raw = process.env[name];
  if (!raw) return "";
  return raw.trim().replace(/^["']+|["']+$/g, "");
}

function asString(value: unknown) {
  return typeof value === "string" ? value : "";
}

function honeypotText(value: unknown) {
  if (typeof value === "string") return value.trim();
  if (value == null) return "";
  return "filled";
}

function clientIp(request: Request) {
  return visitorIp(
    request.headers.get("x-forwarded-for"),
    request.headers.get("x-real-ip")
  );
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const windowStart = now - RATE_WINDOW_MS;
  const recent = (recentHits.get(ip) ?? []).filter((at) => at > windowStart);
  if (recent.length >= RATE_MAX) {
    recentHits.set(ip, recent);
    return true;
  }
  recent.push(now);
  recentHits.set(ip, recent);
  if (recentHits.size > 2000) {
    for (const [key, times] of recentHits) {
      const fresh = times.filter((at) => at > windowStart);
      if (fresh.length === 0) recentHits.delete(key);
      else recentHits.set(key, fresh);
    }
  }
  return false;
}

function fakeSuccess() {
  return NextResponse.json({ ok: true });
}

function friendlyFailure(status: number) {
  return NextResponse.json({ error: FRIENDLY_ERROR }, { status });
}

type IntakeBody = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  process?: unknown;
  message?: unknown;
  honeypot?: unknown;
  website_url?: unknown;
  submission_id?: unknown;
  startedAt?: unknown;
};

function honeypotFilled(body: IntakeBody) {
  return (
    honeypotText(body.honeypot).length > 0 ||
    honeypotText(body.website_url).length > 0
  );
}

function isQuickSubmit(body: IntakeBody) {
  const startedAt =
    typeof body.startedAt === "number"
      ? body.startedAt
      : Number(body.startedAt);
  if (!Number.isFinite(startedAt)) return true;
  return Date.now() - startedAt < MIN_FILL_MS;
}

function intakeEndpoint() {
  const url = envValue("CRM_INTAKE_URL");
  const key = envValue("CRM_INTAKE_KEY");
  if (!url || !key) return null;
  try {
    const parsed = new URL(url);
    const localhost =
      parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1";
    if (
      parsed.protocol === "https:" ||
      (parsed.protocol === "http:" && localhost)
    ) {
      return { url: parsed.toString(), key };
    }
  } catch {
    return null;
  }
  return null;
}

export async function POST(request: Request) {
  let body: IntakeBody;
  try {
    body = (await request.json()) as IntakeBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (honeypotFilled(body)) {
    return fakeSuccess();
  }

  const name = collapseText(asString(body.name));
  const email = asString(body.email).trim();
  const company = collapseText(asString(body.company));
  const message = collapseText(
    asString(body.message) || asString(body.process)
  );
  const submissionId = asString(body.submission_id).trim();
  const quickSubmit = isQuickSubmit(body);

  if (!email || !name || !message) {
    return NextResponse.json(
      {
        error: !name
          ? CONTACT_INTAKE.errorName
          : !message
            ? CONTACT_INTAKE.errorNote
            : "Please complete the required fields.",
      },
      { status: 400 }
    );
  }

  if (name.length < CONTACT_INTAKE.nameMin) {
    return NextResponse.json(
      { error: CONTACT_INTAKE.errorName },
      { status: 400 }
    );
  }

  if (message.length < CONTACT_INTAKE.messageMin) {
    return NextResponse.json(
      { error: CONTACT_INTAKE.errorNote },
      { status: 400 }
    );
  }

  if (
    name.length > CONTACT_INTAKE.nameMax ||
    email.length > CONTACT_INTAKE.emailMax ||
    company.length > CONTACT_INTAKE.companyMax ||
    message.length > CONTACT_INTAKE.messageMax
  ) {
    return NextResponse.json(
      { error: CONTACT_INTAKE.errorForm },
      { status: 400 }
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (!UUID_PATTERN.test(submissionId)) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const ip = clientIp(request);
  if (ip && isRateLimited(ip)) {
    return NextResponse.json({ error: RATE_LIMIT_ERROR }, { status: 429 });
  }

  const endpoint = intakeEndpoint();
  if (!endpoint) {
    console.error("CRM intake is not configured");
    return friendlyFailure(500);
  }

  let response: Response;
  try {
    const headers: Record<string, string> = {
      Authorization: `Bearer ${endpoint.key}`,
      "Content-Type": "application/json",
    };
    if (ip) headers["x-client-ip"] = ip;

    const payload: Record<string, string | boolean> = {
      name,
      email,
      company,
      message,
      honeypot: "",
      submission_id: submissionId,
      quick_submit: quickSubmit,
    };
    if (ip) payload.visitor_ip = ip;

    response = await fetch(endpoint.url, {
      method: "POST",
      redirect: "error",
      signal: AbortSignal.timeout(CRM_TIMEOUT_MS),
      headers,
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error(
      "CRM intake request failed",
      error instanceof Error ? error.name : "error"
    );
    return friendlyFailure(502);
  }

  if (response.status === 429) {
    return NextResponse.json({ error: RATE_LIMIT_ERROR }, { status: 429 });
  }

  if (response.status === 400) {
    console.error("CRM intake rejected the form");
    return NextResponse.json(
      { error: CONTACT_INTAKE.errorForm },
      { status: 400 }
    );
  }

  if (!response.ok) {
    console.error("CRM intake rejected", response.status);
    return friendlyFailure(502);
  }

  return NextResponse.json({ ok: true });
}
