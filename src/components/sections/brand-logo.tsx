/**
 * Spirality mark plus the word Spirality.
 * One spiral for light and dark backgrounds.
 */
export default function BrandLogo({
  wordmark = true,
  className = "",
}: {
  wordmark?: boolean;
  className?: string;
}) {
  return (
    <span className={`sp-brand ${className}`.trim()}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="sp-brand-mark"
        src="/brand/spirality-mark.png"
        alt=""
        width={28}
        height={28}
        decoding="async"
      />
      {wordmark ? <span className="sp-brand-word">Spirality</span> : null}
      <span className="sr-only">Spirality Solutions</span>
    </span>
  );
}
