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
- **`lib/i18n.ts`** defines `locales` (`es`, `en`), `defaultLocale` (`es`), and `siteUrl` (`https://vanguards.dev`).
- **`lib/site.ts`** holds external links (Calendly, LinkedIn, email, Instagram). Some are still `PLACEHOLDER` values — search the repo for `PLACEHOLDER` to see what's pending before launch.
- **`app/[lang]/`** is the root layout segment (there is intentionally no `app/layout.tsx` — the `[lang]` layout renders `<html lang>`). Both pages are SSG via `generateStaticParams` with `dynamicParams = false`. `generateMetadata` in the layout emits per-locale canonical/hreflang/OG tags; `page.tsx` composes the section components and inlines JSON-LD (`ProfessionalService` + `WebSite` + `WebPage`).
- **`middleware.ts`** only matches `/`: it 307-redirects to `/es` or `/en` from `Accept-Language` (Spanish wins on ambiguity and when the header is empty). `/es` and `/en` are the canonical indexable URLs; never make `/` serve content.
- **`components/`** are all server components — the site ships no client-side JS of its own (hover/anchor behavior is pure CSS). Keep it that way; don't add `"use client"` for anything achievable with CSS or links.
- **`app/globals.css`** holds the entire brand system keyed to CSS variables (`--paper`, `--ink`, `--signal`, `--signal-text`, `--on-signal`, `--steel`, `--tint`, `--rule`, `--pad`) and font variables set by `next/font` in the layout (`--font-display` Anton, `--font-body` Archivo, `--font-mono` IBM Plex Mono). The site is **dark by default** (brand guide's inverse scheme: `--paper` is Obsidian #16121F as surface, `--ink` is Fog #ECEAF1 as type/structure). Semantics, not colors: `--paper` = surface, `--ink` = type/structure, `--signal` = violet backgrounds, `--signal-text` = violet-as-text on dark (#9D7BFF), `--on-signal` = text over violet. Section components reuse shared class patterns (`.sec-head`, `.svc`, `.mono`, `.mark`, `.btn`).
- **Page structure** (fixed by the owner): Hero → Case studies (`#cases`) → Process + packages (`#process`) → About founder (`#about`) → Contact (`#contact`). Single repeated CTA (book a call via Calendly); no forms.
- `design-reference/` contains the original static HTML design — reference only, not served.

## Copy rules (owner requirements — do not violate)

- The owner supplies copy verbatim; use it literally, never rewrite it. Mark missing content with `[PLACEHOLDER]`.
- Voice is **fully impersonal**: no first person anywhere — neither "yo/I" nor "nosotros/we". VanguardDevs or the product is the subject. Second person addressing the visitor is fine.
- Use the founder's real name **"Jesus O."** — never the nickname "Jodaz" — anywhere on the site (including JSON-LD).
- The hero must not contain "Fundado por…"/"Founded by…"; the founder appears only in the About section.
- Spanish leads: `es` is the default and `x-default` locale. English is a first-class translation, not an afterthought.
- Brand accent (Voltage Violet `--signal`) is scarce by design — one highlighted element per surface.
