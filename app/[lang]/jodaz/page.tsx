import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import GitHubIcon from "@/components/icons/GitHubIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import ProfileTheme from "@/components/ProfileTheme";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, locales, siteUrl, type Locale } from "@/lib/i18n";
import {
  GITHUB_PERSONAL_URL,
  INSTAGRAM_URL,
  LINKEDIN_PERSONAL_URL,
} from "@/lib/site";

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
    title: dict.profile.meta.title,
    description: dict.profile.meta.description,
    alternates: {
      canonical: `/${lang}/jodaz`,
      languages: {
        es: "/es/jodaz",
        en: "/en/jodaz",
        "x-default": "/es/jodaz",
      },
    },
    openGraph: {
      type: "profile",
      url: `/${lang}/jodaz`,
      siteName: "VanguardDevs",
      title: dict.profile.meta.title,
      description: dict.profile.meta.description,
    },
    robots: { index: true, follow: true },
  };
}

/* Person JSON-LD so the founder's name is searchable and resolves to the
   site's own domain rather than to a third-party profile. */
function jsonLd(lang: Locale) {
  const dict = getDictionary(lang);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/${lang}/jodaz#person`,
    name: dict.profile.name,
    jobTitle: dict.profile.role,
    description: dict.about.bio,
    url: `${siteUrl}/${lang}/jodaz`,
    image: `${siteUrl}/founder.jpeg`,
    sameAs: [GITHUB_PERSONAL_URL, LINKEDIN_PERSONAL_URL, INSTAGRAM_URL],
    worksFor: { "@id": `${siteUrl}/#organization` },
  };
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  const socials = [
    { href: GITHUB_PERSONAL_URL, label: dict.profile.socialGithub, Icon: GitHubIcon },
    { href: LINKEDIN_PERSONAL_URL, label: dict.profile.socialLinkedin, Icon: LinkedInIcon },
    { href: INSTAGRAM_URL, label: dict.contact.socialInstagram, Icon: InstagramIcon },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(lang)) }}
      />
      <ProfileTheme
        dict={dict}
        bar={
          <>
            <Link className="profile-back" href={`/${lang}`}>
              <span className="mark" aria-hidden="true" />
              {dict.profile.back}
            </Link>
            <div
              className="lang-toggle"
              role="group"
              aria-label={dict.nav.ariaLang}
            >
              <Link
                href="/es/jodaz"
                aria-current={lang === "es" ? "true" : undefined}
                hrefLang="es"
              >
                ES
              </Link>
              <Link
                href="/en/jodaz"
                aria-current={lang === "en" ? "true" : undefined}
                hrefLang="en"
              >
                EN
              </Link>
            </div>
          </>
        }
      >
        <main className="profile-main">
          <div className="profile-intro">
            <h1 className="display">{dict.profile.name}</h1>
            <p className="mono profile-role">{dict.profile.role}</p>
            <p className="profile-bio">{dict.about.bio}</p>
            <div className="profile-social">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  className="btn"
                  href={href}
                  target="_blank"
                  rel="me noopener noreferrer"
                >
                  <Icon aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="profile-photo">
            <Image
              src="/founder.jpeg"
              alt={dict.about.photoLabel}
              fill
              sizes="(max-width: 820px) 100vw, 480px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </main>
      </ProfileTheme>
    </>
  );
}
