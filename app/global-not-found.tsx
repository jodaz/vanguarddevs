import type { Metadata } from "next";
import NotFound from "@/components/NotFound";
import { anton, archivo, plexMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 — VanguardDevs",
};

/* Global 404 (Next's `globalNotFound`): rendered for every unmatched route —
   /whatever, /es/whatever, /xx — and, unlike app/not-found.tsx, it needs no
   app/layout.tsx: it renders its own <html>/<body>, the one place in the app
   allowed to (see CLAUDE.md). Hardcodes lang="es" (defaultLocale) since a
   not-found page never knows the visitor's locale; the body is bilingual. */
export default function GlobalNotFound() {
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
