import Link from "next/link";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export default function Footer({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  return (
    <footer>
      <span className="mono">© {new Date().getFullYear()} VanguardDevs</span>
      <span className="mono">{dict.footer.tagline}</span>
      <span className="mono footer-links">
        <Link href={`/${lang}/privacy`}>{dict.footer.privacyLink}</Link>
        <CookieSettingsButton label={dict.footer.cookieSettings} />
      </span>
    </footer>
  );
}
