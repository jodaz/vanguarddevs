import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { CALENDLY_URL } from "@/lib/site";

export default function Header({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  return (
    <header>
      <Link className="logo" href={`/${lang}`}>
        <span className="mark" aria-hidden="true" />
        VanguardDevs
      </Link>
      <nav aria-label={dict.nav.ariaMain}>
        <a href="#cases">{dict.nav.cases}</a>
        <a href="#process">{dict.nav.process}</a>
        <a href="#about">{dict.nav.about}</a>
      </nav>
      <div className="header-actions">
        <a className="cta" href={CALENDLY_URL}>
          {dict.nav.cta}
        </a>
        <div className="lang-toggle" role="group" aria-label={dict.nav.ariaLang}>
          <Link href="/es" aria-current={lang === "es" ? "true" : undefined} hrefLang="es">
            ES
          </Link>
          <Link href="/en" aria-current={lang === "en" ? "true" : undefined} hrefLang="en">
            EN
          </Link>
        </div>
      </div>
    </header>
  );
}
