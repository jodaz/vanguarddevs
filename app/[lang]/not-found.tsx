import type { Metadata } from "next";
import NotFound from "@/components/NotFound";

/* Handles /es/whatever and /en/whatever: the [lang] segment resolves fine,
   the sub-path doesn't. This renders inside the already-resolved
   [lang]/layout.tsx tree, so <html lang>, fonts, and ConsentBanner are
   already in place — nothing extra needed here. Overrides the inherited
   page title (otherwise it'd show the normal homepage title) since this
   file can't know the visitor's locale to pick one language for it. */
export const metadata: Metadata = {
  title: "404 — VanguardDevs",
};

export default function LangNotFoundPage() {
  return <NotFound />;
}
