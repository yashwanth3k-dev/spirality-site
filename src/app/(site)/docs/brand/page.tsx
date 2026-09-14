import { type Metadata } from "next";
import "../_styles/one-pager.css";
import "../_styles/brand.css";

export const metadata: Metadata = {
  title: "Brand assets | Spirality Solutions",
  description:
    "Transparent Spirality logos for light and dark backgrounds. SVG and PNG downloads.",
  robots: { index: false, follow: false },
};

const ASSETS = [
  {
    id: "mark-dark",
    title: "Mark · dark",
    blurb:
      "Ink spiral on a clear background. Use on light slides, decks and docs.",
    preview: "/brand/spirality-mark-dark.png",
    previewClass: "bx-preview-light bx-preview-mark",
    files: [
      { label: "SVG", href: "/brand/spirality-mark-dark.svg" },
      { label: "PNG 1024", href: "/brand/spirality-mark-dark.png" },
    ],
  },
  {
    id: "mark-light",
    title: "Mark · light",
    blurb: "Light spiral on a clear background. Use on dark slides and UI.",
    preview: "/brand/spirality-mark-light.png",
    previewClass: "bx-preview-dark bx-preview-mark",
    files: [
      { label: "SVG", href: "/brand/spirality-mark-light.svg" },
      { label: "PNG 1024", href: "/brand/spirality-mark-light.png" },
    ],
  },
  {
    id: "wordmark-dark",
    title: "Wordmark · dark",
    blurb:
      "Mark plus Spirality. Transparent PNG and SVG for light backgrounds.",
    preview: "/brand/spirality-wordmark-dark.png",
    previewClass: "bx-preview-light bx-preview-wordmark",
    files: [
      { label: "SVG", href: "/brand/spirality-wordmark-dark.svg" },
      { label: "PNG", href: "/brand/spirality-wordmark-dark.png" },
    ],
  },
  {
    id: "wordmark-light",
    title: "Wordmark · light",
    blurb: "Mark plus Spirality. Transparent PNG and SVG for dark backgrounds.",
    preview: "/brand/spirality-wordmark-light.png",
    previewClass: "bx-preview-dark bx-preview-wordmark",
    files: [
      { label: "SVG", href: "/brand/spirality-wordmark-light.svg" },
      { label: "PNG", href: "/brand/spirality-wordmark-light.png" },
    ],
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
            Transparent files. No white box, no black box. Pick dark for light
            backgrounds, light for dark ones.
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
            <strong>Tip:</strong> SVG is best for decks and print. PNG is best
            when the host only accepts raster. Keep the terracotta stamp as-is.
          </p>
        </section>
      </article>
    </div>
  );
}
