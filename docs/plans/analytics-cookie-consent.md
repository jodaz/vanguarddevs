# Plan: Google Analytics + cookie consent + privacy policy

Status: **planned, not yet implemented**. Not committed to git — untracked planning
doc. Delete or commit once the work lands.

## Decisions made

- GA4 Measurement ID: placeholder for now (`NEXT_PUBLIC_GA_ID=PLACEHOLDER`), owner
  fills in the real ID before launch.
- Tracking scope: pageviews only, no CTA click events.
- GA disabled in dev — only loads in production builds.
- Cookie banner: Accept / Reject, decision remembered (no nagging every reload).
- Consent can be changed later via a footer "Cookie settings" link.
- Cookie icon (Phosphor, vendored inline SVG like existing icons) shown in the banner.

## Architecture (why it's shaped this way)

Reading a consent cookie server-side in `layout.tsx` would force `/es`/`/en` off
static generation (conflicts with `dynamicParams = false`). So consent gating has
to happen client-side. This makes `ConsentBanner.tsx` the site's **second**
documented client-component exception, alongside `components/reactbits/DotField`.
CLAUDE.md's "DotField is the only client JS" line should be updated once this ships.

Skip `@next/third-parties` — no new dependency; hand-roll the `gtag.js` snippet
via `next/script` (~15 lines). Consent Mode v2 (default-denied/update-granted) is
unnecessary complexity for a simple binary accept/reject gate.

## Files

**New**
- `components/ConsentBanner.tsx` — client component. On mount, checks `vg_consent`
  cookie; shows banner if absent. Accept → sets `vg_consent=granted` (180d,
  `SameSite=Lax`, `Secure`) and mounts the gtag.js snippet. Reject → sets
  `vg_consent=denied`, GA never mounts (nothing to remove — nothing was set).
- `components/CookieSettingsButton.tsx` — client, rendered inside the existing
  server Footer; reopens the banner / lets a visitor flip their choice anytime.
- `components/icons/CookieIcon.tsx` — vendored Phosphor `ph:cookie` (regular
  weight, MIT, inline SVG via `currentColor`), same pattern as
  `InstagramIcon.tsx` / `LinkedInIcon.tsx`. Shown next to the banner message.
- `app/[lang]/privacy/page.tsx` — new SSG route (`/es/privacy`, `/en/privacy`),
  own `generateStaticParams`/`dynamicParams = false`, hreflang via
  `generateMetadata`. Policy text is a **draft, pending owner/legal review** —
  not "verbatim owner copy" until approved. Stays impersonal voice
  ("VanguardDevs collects…", not "we collect…").
- `.env.example` — `NEXT_PUBLIC_GA_ID=PLACEHOLDER`.

**Edited**
- `lib/dictionaries.ts` — add `cookieBanner{message, accept, reject,
  policyLinkLabel}`, `privacy{title, sections...}`, footer labels (cookie
  settings link, privacy link), in both `es`/`en`.
- `app/[lang]/layout.tsx` — render `<ConsentBanner />`, gated to production +
  a real (non-placeholder) `NEXT_PUBLIC_GA_ID`.
- `app/globals.css` — banner styling reusing existing tokens/`.btn`.
- `app/sitemap.ts` — add the two privacy URLs, low priority, yearly changefreq.
- `README.md` — add new PLACEHOLDER items to the pre-launch checklist: legal
  entity/jurisdiction, DPO contact, retention period, GA ID.
- `CLAUDE.md` — update the client-JS invariant to note the second exception.

## Open placeholders to fill before launch

- `NEXT_PUBLIC_GA_ID` (real GA4 Measurement ID)
- Legal entity name + jurisdiction of incorporation
- DPO/privacy contact (may reuse `CONTACT_EMAIL` or need a dedicated one)
- GA4 data retention period, cookie consent record retention
- Privacy policy effective/last-updated date
