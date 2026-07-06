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
  const links = [
    ["#cases", dict.nav.cases],
    ["#process", dict.nav.process],
    ["#about", dict.nav.about],
  ] as const;

  return (
    <header>
      <Link className="logo" href={`/${lang}`}>
        <span className="mark" aria-hidden="true" />
        VanguardDevs
      </Link>
      <nav aria-label={dict.nav.ariaMain}>
        {links.map(([href, label]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
        {/* CSS-only mobile menu: <details> needs no client JS; the panel
            stays open after an anchor tap (accepted trade-off) */}
        <details className="menu">
          <summary aria-label={dict.nav.menuLabel}>
            <span className="menu-icon" aria-hidden="true" />
          </summary>
          <div className="menu-panel">
            {links.map(([href, label]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
        </details>
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
