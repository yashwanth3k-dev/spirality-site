import { type Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import GoogleAnalytics from "~/components/google-analytics";
import SiteScrollReveal from "~/components/sections/site-scroll-reveal";
import ThemeProvider from "~/components/shared/theme-provider";
import { Toaster } from "~/components/ui/toaster";
import { absoluteUrl } from "~/lib/seo";
import { cn } from "~/lib/utils";
import "../globals.css";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await params;
  const pageUrl = absoluteUrl("/");
  return {
    title: {
      default: "Spirality Solutions | AI Systems & Managed Operations",
      template: "%s",
    },
    description:
      "AI Systems & Managed Operations — assembling AI around real business processes, rules, and operational context.",
    metadataBase: new URL(pageUrl),
    robots: { index: true, follow: true },
    icons: {
      icon: [{ url: "/brand/spirality-mark-dark.png", type: "image/png" }],
      apple: "/brand/spirality-mark-dark.png",
    },
    alternates: { canonical: pageUrl },
  };
}

export const viewport = {
  width: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

/**
 * Locale shell for the homepage. Marketing subpages use `(site)/layout`.
 * ChadNext chrome (header/footer/login) removed — home ships its own nav.
 */
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem("il-theme")==="dark")document.documentElement.classList.add("il-dark")}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={cn(
          "font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <GoogleAnalytics />
          <SiteScrollReveal />
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
