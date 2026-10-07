import "~/styles/home-sections.css";

const LOGOS = [
  { src: "/logos/everest.png", alt: "Everest Electrical Enterprises" },
  { src: "/logos/multibrains.png", alt: "Multibrains" },
  { src: "/logos/aghraharam.png", alt: "Aghraharam Group of Companies" },
  { src: "/logos/9-studio.jpg", alt: "9 Studio Unisex Salon" },
  { src: "/logos/y2k-engineers.jpg", alt: "Y2K Engineers" },
  { src: "/logos/venkatesh.jpg", alt: "Venkatesh and Co" },
] as const;

function LogoImage({
  logo,
  decorative = false,
}: {
  logo: (typeof LOGOS)[number];
  decorative?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="lm-logo" src={logo.src} alt={decorative ? "" : logo.alt} />
  );
}

export default function LogoMarquee() {
  return (
    <section className="lm-section" aria-labelledby="trusted-by">
      <p className="il-eyebrow lm-label" id="trusted-by">
        Trusted by
      </p>
      <ul className="lm-row">
        {LOGOS.map((logo) => (
          <li key={logo.src} className="lm-item">
            <LogoImage logo={logo} />
          </li>
        ))}
      </ul>
      <div className="lm-marquee" aria-hidden="true">
        <div className="lm-track">
          {[0, 1].map((copy) => (
            <ul className="lm-set" key={copy} aria-hidden={copy === 1}>
              {LOGOS.map((logo) => (
                <li key={`${logo.src}-${copy}`} className="lm-item">
                  <LogoImage logo={logo} decorative={copy === 1} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
