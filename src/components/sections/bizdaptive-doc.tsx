export default function BizdaptiveDoc({
  title,
  updated,
  note,
  wide = false,
  children,
}: {
  title: string;
  updated?: string;
  note?: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <main className="il-section bz-doc">
      <div className={`il-inner legal-inner bz-prose${wide ? "bz-wide" : ""}`}>
        <p className="il-eyebrow">Bizdaptive</p>
        <h1 className="il-h1">{title}</h1>
        {updated ? (
          <p className="legal-updated">
            Last updated {updated}
            {note ? ` · ${note}` : ""}
          </p>
        ) : null}
        {children}
      </div>
    </main>
  );
}
