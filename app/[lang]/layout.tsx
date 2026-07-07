import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import ConsentBanner from "@/components/ConsentBanner";
import { getDictionary } from "@/lib/dictionaries";
import { anton, archivo, plexMono } from "@/lib/fonts";
import { isLocale, locales, siteUrl, type Locale } from "@/lib/i18n";
import "../globals.css";

export const dynamicParams = false;

export const viewport: Viewport = {
  themeColor: "#ECEAF1",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        es: "/es",
        en: "/en",
        "x-default": "/es",
      },
    },
    openGraph: {
      type: "website",
      url: `/${lang}`,
      siteName: "VanguardDevs",
      title: dict.meta.title,
      description: dict.meta.description,
      locale: lang === "es" ? "es_VE" : "en_US",
      alternateLocale: lang === "es" ? "en_US" : "es_VE",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html
      lang={lang satisfies Locale}
      className={`${anton.variable} ${archivo.variable} ${plexMono.variable}`}
    >
      <body>
        {children}
        <ConsentBanner
          lang={lang}
          message={dict.cookieBanner.message}
          accept={dict.cookieBanner.accept}
          reject={dict.cookieBanner.reject}
          policyLinkLabel={dict.cookieBanner.policyLinkLabel}
        />
      </body>
    </html>
  );
}
