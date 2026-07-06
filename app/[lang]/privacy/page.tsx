import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, locales, type Locale } from "@/lib/i18n";

export const dynamicParams = false;

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
    title: dict.privacy.meta.title,
    description: dict.privacy.meta.description,
    alternates: {
      canonical: `/${lang}/privacy`,
      languages: {
        es: "/es/privacy",
        en: "/en/privacy",
        "x-default": "/es/privacy",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Policy text (lib/dictionaries.ts `privacy` key) is a DRAFT pending
// owner/legal review — not verbatim owner-supplied copy like the rest of
// the site. See docs/plans/analytics-cookie-consent.md.
export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main>
        <section aria-label={dict.privacy.title}>
          <div className="sec-head">
            <h1>{dict.privacy.title}</h1>
          </div>
          <div className="legal-body">
            {dict.privacy.sections.map((item) => (
              <article key={item.heading}>
                <h3>{item.heading}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
