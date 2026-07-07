import { Anton, Archivo, IBM_Plex_Mono } from "next/font/google";

/* Shared next/font instances. Relocated from app/[lang]/layout.tsx so the
   root-level app/not-found.tsx (which renders its own <html>/<body> since
   there's no root layout) can reuse the exact same font setup instead of
   duplicating next/font calls. */

export const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const archivo = Archivo({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
