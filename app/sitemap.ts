import type { MetadataRoute } from "next";
import { locales, siteUrl } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((lang) => ({
    url: `${siteUrl}/${lang}`,
    changeFrequency: "monthly",
    priority: lang === "es" ? 1 : 0.9,
    alternates: {
      languages: {
        es: `${siteUrl}/es`,
        en: `${siteUrl}/en`,
        "x-default": `${siteUrl}/es`,
      },
    },
  }));
}
