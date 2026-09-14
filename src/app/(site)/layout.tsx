import { type Metadata } from "next";
import { Inter } from "next/font/google";
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
    icon: [{ url: "/brand/spirality-mark-dark.png", type: "image/png" }],
    apple: "/brand/spirality-mark-dark.png",
  },
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
        <SiteScrollReveal />
        {children}
      </body>
    </html>
  );
}
