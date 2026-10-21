import { type Metadata, type Viewport } from "next";
import { Inter } from "next/font/google";
import GoogleAnalytics from "~/components/google-analytics";
import ContactBubble from "~/components/sections/contact-bubble";
import SiteScrollReveal from "~/components/sections/site-scroll-reveal";
import { absoluteUrl } from "~/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: {
    default: "Spirality Solutions | AI Systems & Managed Operations",
    template: "%s",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const THEME_BOOT = `(function(){try{if(localStorage.getItem("il-theme")==="dark")document.documentElement.classList.add("il-dark")}catch(e){}})();`;

/**
 * Root layout for the Spirality marketing routes that sit outside the
 * localized ChadNext tree. Deliberately free of the shared app chrome.
 */
export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} />
      </head>
      <body className={inter.className} style={{ margin: 0 }}>
        <GoogleAnalytics />
        <SiteScrollReveal />
        {children}
        <ContactBubble />
      </body>
    </html>
  );
}
