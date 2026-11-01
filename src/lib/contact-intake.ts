export const CONTACT_INTAKE = {
  nameMin: 2,
  messageMin: 10,
  nameMax: 80,
  emailMax: 120,
  companyMax: 120,
  messageMax: 4000,
  errorName: "Please check the name and try again.",
  errorNote: "Please check the note and try again.",
  errorForm: "Please check the form and try again.",
} as const;

export function collapseText(value: string) {
  return value.replace(/\s+/g, " ").trim();
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

export function visitorIp(forwardedFor: string | null, realIp: string | null) {
  const firstHop = cleanIp(forwardedFor?.split(",")[0]);
  if (firstHop) return firstHop;
  return cleanIp(realIp);
}
