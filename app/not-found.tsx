import type { Metadata } from "next";
import NotFound from "@/components/NotFound";
import { anton, archivo, plexMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 — VanguardDevs",
};

/* Root fallback for routes where the first segment isn't a valid locale
   (e.g. /whatever, not /es or /en). [lang]/layout.tsx calls notFound()
   before that segment is established, so Next bubbles past it to this
   true root boundary. There is intentionally no app/layout.tsx elsewhere
   in this app (see CLAUDE.md), so this file renders its own <html>/<body>
   directly — the one place in the app allowed to do so. Hardcodes
   lang="es" (the site's defaultLocale) since there's no way to know the
   visitor's intent here. No ConsentBanner: this path never enters the
   [lang] tree, and it's a rare edge-case orphan page. */
export default function RootNotFoundPage() {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${archivo.variable} ${plexMono.variable}`}
    >
      <body>
        <NotFound />
      </body>
    </html>
  );
}
