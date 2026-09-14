import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

function isGaMeasurementId(value: string) {
  return /^G-[A-Z0-9]+$/i.test(value);
}

export default function GoogleAnalytics() {
  if (!GA_ID || !isGaMeasurementId(GA_ID)) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
