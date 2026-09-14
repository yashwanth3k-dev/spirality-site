/** Recognizable channel marks for the Business Systems funnel. */

type IconProps = { className?: string };

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#25D366"
        d="M12.04 2C6.58 2 2.15 6.43 2.15 11.89c0 1.96.57 3.78 1.56 5.33L2 22l4.94-1.63a9.86 9.86 0 0 0 5.1 1.4h.01c5.46 0 9.89-4.43 9.89-9.89C21.94 6.43 17.5 2 12.04 2Z"
      />
      <path
        fill="#fff"
        d="M17.47 14.38c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.13-.17.25-.64.8-.79.97-.14.16-.3.19-.55.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.3.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.16-.48-.28Z"
      />
    </svg>
  );
}

export function VoiceIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#6B7CFF" />
      <path
        fill="#fff"
        d="M7.2 5.8c.4-.4 1-.5 1.5-.3l2 1c.4.2.7.6.7 1.1v1.5c0 .4-.2.7-.5.9l-.9.5c.7 1.4 1.8 2.5 3.2 3.2l.5-.9c.2-.3.5-.5.9-.5h1.5c.5 0 .9.3 1.1.7l1 2c.2.5.1 1.1-.3 1.5l-1.1 1.1c-.4.4-1 .5-1.5.4-2.5-.6-4.8-2-6.6-3.8-1.8-1.8-3.2-4.1-3.8-6.6-.1-.5 0-1.1.4-1.5l1.1-1.1Z"
      />
    </svg>
  );
}

export function WebChatIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#1539D1" />
      <path
        fill="#fff"
        d="M5 7.5A1.5 1.5 0 0 1 6.5 6h11A1.5 1.5 0 0 1 19 7.5v6A1.5 1.5 0 0 1 17.5 15H13l-3 2.5V15H6.5A1.5 1.5 0 0 1 5 13.5v-6Z"
      />
      <circle cx="9" cy="10.5" r="0.9" fill="#1539D1" />
      <circle cx="12" cy="10.5" r="0.9" fill="#1539D1" />
      <circle cx="15" cy="10.5" r="0.9" fill="#1539D1" />
    </svg>
  );
}

export function EmailIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#EA4335" />
      <path
        fill="#fff"
        d="M5.5 8.2A1.7 1.7 0 0 1 7.2 6.5h9.6a1.7 1.7 0 0 1 1.7 1.7v7.6a1.7 1.7 0 0 1-1.7 1.7H7.2a1.7 1.7 0 0 1-1.7-1.7V8.2Zm1.4.4 5.1 3.5 5.1-3.5v-.4H6.9v.4Zm0 1.6v5.6h10.2V10.2l-4.7 3.2a.8.8 0 0 1-.9 0L6.9 10.2Z"
      />
    </svg>
  );
}

export function CrmIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#00A1E0" />
      <path
        fill="#fff"
        d="M7 7.5h10v2.2H7V7.5Zm0 3.4h10v2.2H7v-2.2Zm0 3.4h6.5V16.5H7v-2.2Z"
      />
      <circle cx="16.2" cy="15.4" r="1.6" fill="#fff" />
    </svg>
  );
}

export function ApiIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#6B7CFF" />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        d="M8 9.2 5.8 12 8 14.8M16 9.2 18.2 12 16 14.8M13.2 7.5 10.8 16.5"
      />
    </svg>
  );
}

export const CHANNEL_ICON_MAP = {
  WhatsApp: WhatsAppIcon,
  Voice: VoiceIcon,
  "Website & Chat": WebChatIcon,
  Email: EmailIcon,
  "CRM & Business Tools": CrmIcon,
  "APIs & Integrations": ApiIcon,
} as const;
