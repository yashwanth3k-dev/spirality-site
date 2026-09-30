import "~/styles/home-sections.css";

const LOGOS = [
  { src: "/logos/everest.png", alt: "Everest Electrical Enterprises" },
  { src: "/logos/multibrains.png", alt: "Multibrains" },
  { src: "/logos/aghraharam.png", alt: "Aghraharam Group of Companies" },
  { src: "/logos/9-studio.jpg", alt: "9 Studio Unisex Salon" },
] as const;

export default function LogoMarquee() {
  return (
    <section className="lm-section" aria-labelledby="trusted-by">
      <p className="il-eyebrow lm-label" id="trusted-by">
        Trusted by
      </p>
      <ul className="lm-row">
        {LOGOS.map((logo) => (
          <li key={logo.src} className="lm-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="lm-logo" src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </section>
  );
}
