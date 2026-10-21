import { type Metadata } from "next";
import "../_styles/one-pager.css";
import "../_styles/brand.css";

export const metadata: Metadata = {
  title: "Brand assets | Spirality Solutions",
  description: "The Spirality Solutions spiral mark, as a transparent PNG.",
  robots: { index: false, follow: false },
};

const ASSETS = [
  {
    id: "mark",
    title: "Spiral mark",
    blurb:
      "Blue and gold spiral on a clear background. Use it on light and dark slides, decks, and the site.",
    preview: "/brand/spirality-mark.png",
    previewClass: "bx-preview-light bx-preview-mark",
    files: [{ label: "PNG", href: "/brand/spirality-mark.png" }],
  },
] as const;

export default function BrandAssetsPage() {
  return (
    <div className="op-page">
      <article className="op-sheet">
        <header className="op-mast">
          <p className="op-wordmark">Spirality Solutions</p>
          <p className="op-kicker">Brand assets</p>
        </header>

        <section className="op-section">
          <h1 className="op-label">Logo downloads</h1>
          <p className="op-statement">
            One spiral mark. The background is clear, so it sits on light and
            dark surfaces.
          </p>

          <ul className="bx-grid">
            {ASSETS.map((asset) => (
              <li className="bx-card" key={asset.id}>
                <div className={`bx-preview ${asset.previewClass}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset.preview} alt={asset.title} />
                </div>
                <div className="bx-body">
                  <h3>{asset.title}</h3>
                  <p>{asset.blurb}</p>
                  <div className="bx-actions">
                    {asset.files.map((file) => (
                      <a key={file.href} href={file.href} download>
                        Download {file.label}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <p className="bx-note">
            <strong>Tip:</strong> Use the PNG as-is. The gold edge and blue
            spiral stay the same on light and dark backgrounds.
          </p>
        </section>
      </article>
    </div>
  );
}
