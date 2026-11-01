import { NextResponse } from "next/server";

const MIN_FILL_MS = 3_000;
const RATE_MAX = 8;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const CRM_TIMEOUT_MS = 8_000;
const NAME_MAX = 80;
const EMAIL_MAX = 120;
const COMPANY_MAX = 120;
const MESSAGE_MAX = 4000;

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

function cleanIp(value: string | null | undefined) {
  const cleaned = (value ?? "")
    .trim()
    .replace(/[^\d.a-fA-F:]/g, "")
    .slice(0, 64);
  if (/^(?:\d{1,3}\.){3}\d{1,3}$/.test(cleaned)) return cleaned;
  if (cleaned.includes(":") && /^[0-9a-fA-F:]+$/.test(cleaned)) return cleaned;
  return "";
}

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const firstHop = cleanIp(forwarded?.split(",")[0]);
  if (firstHop) return firstHop;
  return cleanIp(request.headers.get("x-real-ip")) || "unknown";
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

function startedTooSoon(body: IntakeBody) {
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

  if (honeypotFilled(body) || startedTooSoon(body)) {
    return fakeSuccess();
  }

  const name = asString(body.name).trim();
  const email = asString(body.email).trim();
  const company = asString(body.company).trim();
  const message = (asString(body.message) || asString(body.process)).trim();
  const submissionId = asString(body.submission_id).trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please complete the required fields." },
      { status: 400 }
    );
  }

  if (
    name.length > NAME_MAX ||
    email.length > EMAIL_MAX ||
    company.length > COMPANY_MAX ||
    message.length > MESSAGE_MAX
  ) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
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
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: RATE_LIMIT_ERROR }, { status: 429 });
  }

  const endpoint = intakeEndpoint();
  if (!endpoint) {
    console.error("CRM intake is not configured");
    return friendlyFailure(500);
  }

  let response: Response;
  try {
    response = await fetch(endpoint.url, {
      method: "POST",
      redirect: "error",
      signal: AbortSignal.timeout(CRM_TIMEOUT_MS),
      headers: {
        Authorization: `Bearer ${endpoint.key}`,
        "Content-Type": "application/json",
        "x-client-ip": ip,
      },
      body: JSON.stringify({
        name,
        email,
        company,
        message,
        honeypot: "",
        submission_id: submissionId,
        visitor_ip: ip,
      }),
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

  if (!response.ok) {
    console.error("CRM intake rejected", response.status);
    return friendlyFailure(502);
  }

  return NextResponse.json({ ok: true });
}
