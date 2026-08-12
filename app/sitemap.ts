import type { MetadataRoute } from "next";
import { locales, siteUrl } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = locales.map((lang) => ({
    url: `${siteUrl}/${lang}`,
    changeFrequency: "monthly" as const,
    priority: lang === "es" ? 1 : 0.9,
    alternates: {
      languages: {
        es: `${siteUrl}/es`,
        en: `${siteUrl}/en`,
        "x-default": `${siteUrl}/es`,
      },
    },
  }));

  const privacyPages = locales.map((lang) => ({
    url: `${siteUrl}/${lang}/privacy`,
    changeFrequency: "yearly" as const,
    priority: 0.3,
    alternates: {
      languages: {
        es: `${siteUrl}/es/privacy`,
        en: `${siteUrl}/en/privacy`,
        "x-default": `${siteUrl}/es/privacy`,
      },
    },
  }));

  const profilePages = locales.map((lang) => ({
    url: `${siteUrl}/${lang}/jodaz`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    alternates: {
      languages: {
        es: `${siteUrl}/es/jodaz`,
        en: `${siteUrl}/en/jodaz`,
        "x-default": `${siteUrl}/es/jodaz`,
      },
    },
  }));

  return [...pages, ...profilePages, ...privacyPages];
}
