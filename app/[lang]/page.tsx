import About from "@/components/About";
import Cases from "@/components/Cases";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import { getDictionary } from "@/lib/dictionaries";
import { siteUrl, type Locale } from "@/lib/i18n";
import { CONTACT_EMAIL, INSTAGRAM_URL, LINKEDIN_URL } from "@/lib/site";

function jsonLd(lang: Locale) {
  const dict = getDictionary(lang);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#organization`,
        name: "VanguardDevs",
        url: siteUrl,
        email: CONTACT_EMAIL,
        description: dict.meta.description,
        sameAs: [INSTAGRAM_URL, LINKEDIN_URL],
        founder: {
          "@type": "Person",
          name: "Jesus O.",
          sameAs: [LINKEDIN_URL],
        },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Latin America" },
        ],
        knowsLanguage: ["es", "en"],
        makesOffer: dict.process.packages.map((pkg) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: pkg.title,
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "VanguardDevs",
        inLanguage: lang,
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/${lang}`,
        url: `${siteUrl}/${lang}`,
        name: dict.meta.title,
        description: dict.meta.description,
        inLanguage: lang,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(lang)) }}
      />
      <Header dict={dict} lang={lang} />
      <main>
        <Hero dict={dict} />
        <Cases dict={dict} />
        <Process dict={dict} />
        <About dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
