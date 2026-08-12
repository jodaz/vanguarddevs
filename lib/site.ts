// Central place for external links & contact details.
import type { Locale } from "@/lib/i18n";

export const WHATSAPP_URL = "https://wa.me/584248270139";
export const CONTACT_EMAIL = "hello@vanguarddevs.com";
export const LINKEDIN_URL = "https://www.linkedin.com/company/vanguarddevs";
export const INSTAGRAM_URL = "https://instagram.com/vanguarddevs";
export const DESIGNER_URL = "https://jodaz.xyz";

/* Personal accounts, used only by the /jodaz profile page — the LINKEDIN_URL
   and INSTAGRAM_URL above are the VanguardDevs company accounts. */
export const GITHUB_PERSONAL_URL = "https://github.com/jodaz";
export const LINKEDIN_PERSONAL_URL = "https://www.linkedin.com/in/jodaz";
// Owner hasn't supplied the Calendly URL yet; while it's "PLACEHOLDER" the
// /en contact section keeps WhatsApp as its primary CTA.
export const BOOKING_URL = "PLACEHOLDER";

/** Where every primary CTA points (header, hero, contact). Booking wins on
 *  /en only, and only once BOOKING_URL is real; /es always keeps WhatsApp.
 *  Single source so filling in BOOKING_URL flips all three surfaces at once. */
export function primaryCta(lang: Locale) {
  const booking = lang === "en" && BOOKING_URL !== "PLACEHOLDER";
  return { href: booking ? BOOKING_URL : WHATSAPP_URL, booking };
}
