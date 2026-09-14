import { createI18nMiddleware } from "next-international/middleware";
import { type NextRequest } from "next/server";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "fr"],
  defaultLocale: "en",
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

// The Spirality marketing routes live outside the localized tree, so they are
// excluded here. Must stay a literal — Next parses this config statically.
export const config = {
  matcher: [
    "/((?!api|static|solutions|how-we-work|instinct|bizdaptive|contact|about|docs|use-cases|case-studies|blog|insights|privacy|terms|cookies|maintenance|.*\\..*|_next|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
