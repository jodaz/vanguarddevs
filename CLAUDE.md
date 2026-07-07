# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Bilingual (ES/EN) one-page marketing site for VanguardDevs — a boutique product studio (MVPs & SaaS for founders in the USA and LATAM) founded by Jesus O. Next.js App Router, TypeScript, plain global CSS (no Tailwind, no CSS modules). No test suite or linter is configured.

## Commands

```bash
npm run dev    # dev server at http://localhost:3000
npm run build  # production build; both locales prerender as static HTML (SSG)
npm run start  # serve the production build
```

`npm run build` is the main correctness check: it type-checks and prerenders `/es` and `/en`. To verify SEO output (hreflang, JSON-LD, redirects), run `next start` and curl the pages — see README "SEO checklist".

## Architecture

Content and structure are fully decoupled:

- **`lib/dictionaries.ts`** is the single source of truth for ALL copy in both languages, as one typed `Dictionary` object per locale. Any content change happens here; components never contain literal copy. Changing the `Dictionary` interface requires updating both `es` and `en` objects (TypeScript enforces this).
- **`lib/i18n.ts`** defines `locales` (`es`, `en`), `defaultLocale` (`es`), and `siteUrl` (`https://vanguarddevs.com`).
- **`lib/site.ts`** holds external links (WhatsApp, LinkedIn, email, Instagram). Some are still `PLACEHOLDER` values — search the repo for `PLACEHOLDER` to see what's pending before launch.
- **`app/[lang]/`** is the root layout segment (there is intentionally no `app/layout.tsx` — the `[lang]` layout renders `<html lang>`). Both pages are SSG via `generateStaticParams` with `dynamicParams = false`. `generateMetadata` in the layout emits per-locale canonical/hreflang/OG tags; `page.tsx` composes the section components and inlines JSON-LD (`ProfessionalService` + `WebSite` + `WebPage`).
- **404 handling** is split across three files because Next.js `not-found.tsx` never receives route `params` (even nested under a dynamic segment), so no not-found file can know which locale it's rendering under. `components/NotFound.tsx` is the shared, locale-agnostic 404 body (renders ES then EN copy together rather than branching): `app/[lang]/not-found.tsx` uses it for broken links under a known locale (`/es/x`, `/en/x`) and inherits `<html lang>`/fonts/`ConsentBanner` from the already-resolved `[lang]/layout.tsx`; `app/not-found.tsx` uses it for paths that aren't a valid locale at all (`/x`) and is the **one exception** to "no root layout" — it renders its own `<html>`/`<body>` directly since nothing else provides them for that boundary. `app/[lang]/[...catchAll]/page.tsx` (a `notFound()`-calling catch-all) exists only so Next actually enters the `[lang]` tree for arbitrary sub-paths — without it, unmatched `/es/x`-style paths skip straight to the root fallback instead of the locale-aware one.
- **`middleware.ts`** only matches `/`: it 307-redirects to `/es` or `/en` from `Accept-Language` (Spanish wins on ambiguity and when the header is empty). `/es` and `/en` are the canonical indexable URLs; never make `/` serve content.
- **`components/`** are almost all server components, with two documented exceptions: the vendored `components/reactbits/DotField` (canvas animation, used in the Hero and Contact sections), and `components/ConsentBanner.tsx` (+ the small `components/CookieSettingsButton.tsx` it pairs with) — reading the `vg_consent` cookie server-side in `app/[lang]/layout.tsx` would force `/es`/`/en` off static generation, so consent gating and the conditionally-mounted GA snippet have to run client-side. Don't add `"use client"` beyond these for anything achievable with CSS or links. Vendored ReactBits components (`components/reactbits/`) are fetched from their shadcn-style registry with curl (the jsrepo CLI doesn't work with it) and patched minimally with documented comments.
- **`app/globals.css`** holds the entire brand system keyed to CSS variables (`--paper`, `--ink`, `--signal`, `--signal-text`, `--on-signal`, `--steel`, `--tint`, `--rule`, `--pad`) and font variables set by `next/font` in `lib/fonts.ts` (`--font-display` Anton, `--font-body` Archivo, `--font-mono` IBM Plex Mono), imported by both `app/[lang]/layout.tsx` and the root `app/not-found.tsx` so the two `<html>`-rendering entry points share one font config. The site is **light by default** (brand guide's primary scheme: `--paper` is Fog #ECEAF1 as surface, `--ink` is Obsidian #16121F as type/structure). Semantics, not colors: `--paper` = surface, `--ink` = type/structure, `--signal` = violet backgrounds, `--signal-text` = violet-as-text (#5D2DE2 on light), `--on-signal` = text over violet. Section components reuse shared class patterns (`.sec-head`, `.svc`, `.mono`, `.mark`, `.btn`).
- **Page structure** (fixed by the owner): Hero → Case studies (`#cases`) → Process + packages (`#process`) → About founder (`#about`) → Contact (`#contact`). Single repeated CTA (message via WhatsApp); no forms.
- `design-reference/` contains the original static HTML design — reference only, not served.

## Project agents (`.claude/agents/`)

Delegate recurring work to these instead of doing it inline:

- **copy-editor** — any content/copy/link change (knows the owner rules and ES/EN parity).
- **seo-auditor** — read-only SEO audit: metadata, hreflang, JSON-LD, sitemap, redirects, OG images.
- **visual-qa** — after design/CSS changes: Chrome screenshots of both locales at desktop + mobile, overflow/animation/console checks.
- **developer** — refactors and code changes; knows the architecture invariants (server-components-only, dict-driven content, semantic CSS tokens).

## Copy rules (owner requirements — do not violate)

- The owner supplies copy verbatim; use it literally, never rewrite it. Mark missing content with `[PLACEHOLDER]`.
- Voice is **fully impersonal**: no first person anywhere — neither "yo/I" nor "nosotros/we". VanguardDevs or the product is the subject. Second person addressing the visitor is fine.
- Use the founder's real name **"Jesus O."** — never the nickname "Jodaz" — anywhere on the site (including JSON-LD).
- The hero must not contain "Fundado por…"/"Founded by…"; the founder appears only in the About section.
- Spanish leads: `es` is the default and `x-default` locale. English is a first-class translation, not an afterthought.
- Brand accent (Voltage Violet `--signal`) is scarce by design — one highlighted element per surface.
