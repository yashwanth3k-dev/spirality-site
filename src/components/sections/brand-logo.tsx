/**
 * Spirality mark + wordmark.
 * Light theme: dark spiral (your brand mark). Dark theme: light spiral.
 * Orange center stays on both.
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
        className="sp-brand-mark sp-brand-mark--on-light"
        src="/brand/spirality-mark-dark.png"
        alt=""
        width={28}
        height={28}
        decoding="async"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="sp-brand-mark sp-brand-mark--on-dark"
        src="/brand/spirality-mark-light.png"
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
