import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale } from "./lib/i18n";

// Every unprefixed path negotiates a language and redirects to its locale
// version (/ → /es, /jodaz → /es/jodaz). /es/* and /en/* are the canonical,
// indexable URLs advertised via hreflang and are passed through untouched.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // "/es/jodaz" → ["", "es", "jodaz"]; already localised, nothing to do.
  if (isLocale(pathname.split("/")[1])) return NextResponse.next();

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const prefersSpanish =
    acceptLanguage === "" || /(^|,)\s*es\b/i.test(acceptLanguage);
  const locale = prefersSpanish ? defaultLocale : "en";

  const url = request.nextUrl.clone();
  // "/" must not become "/es/" — that would 308 again on the trailing slash.
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(url, 307);
}

export const config = {
  // Everything except Next internals and any path carrying a file extension.
  // The extension rule is what keeps the root metadata routes and /public
  // assets out: robots.txt, sitemap.xml, icon.svg, apple-icon.png,
  // manifest.webmanifest, favicon.ico, founder.jpeg.
  matcher: ["/((?!_next/|.*\\.).*)"],
};
