import { NextRequest, NextResponse } from "next/server";
import { defaultLocale } from "./lib/i18n";

// Only the bare root negotiates a language; /es and /en are the canonical,
// indexable URLs advertised via hreflang.
export function middleware(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const prefersSpanish =
    acceptLanguage === "" || /(^|,)\s*es\b/i.test(acceptLanguage);
  const locale = prefersSpanish ? defaultLocale : "en";

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}`;
  return NextResponse.redirect(url, 307);
}

export const config = {
  matcher: ["/"],
};
