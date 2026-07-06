# VanguardDevs — vanguards.dev

Bilingual (ES/EN) one-page site for VanguardDevs, a boutique product studio
(MVPs & SaaS for founders in the USA and LATAM), founded by Jesus O. Built with
Next.js App Router. The original static design lives in `design-reference/`.
Copy voice is fully impersonal — no first person ("I" or "we") anywhere;
VanguardDevs or the product is the subject.

Page structure: Hero → Case studies (`#cases`) → Process + packages (`#process`)
→ About the founder (`#about`) → Contact (`#contact`). Single repeated CTA
(book a call); no forms.

Pending `[PLACEHOLDER]`s before launch (search the codebase for `PLACEHOLDER`):
Calendly URL and LinkedIn URL (`lib/site.ts`), two foreign-client case studies,
package prices (`lib/dictionaries.ts`), and the founder photo (`components/About.tsx`).

## Run

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build (fully static pages)
```

## Architecture

- `app/[lang]/` — one statically generated page per locale (`/es`, `/en`).
  Spanish is the default/x-default locale per brand guidelines.
- `middleware.ts` — only handles `/`: 307-redirects to `/es` or `/en` based on
  `Accept-Language` (Spanish wins on ambiguity).
- `lib/dictionaries.ts` — all copy for both languages, typed. Edit content here.
- `app/globals.css` — the brand system (Fog / Obsidian / Voltage Violet, 3px rules).
- Fonts (Anton, Archivo, IBM Plex Mono) are self-hosted via `next/font` —
  no external font requests, zero layout shift.

## SEO checklist (implemented)

- Server-rendered content per language at its own URL — no client-side language
  toggle, so crawlers index both versions.
- `hreflang` alternates + `x-default` in both `<head>` and `sitemap.xml`.
- Per-locale canonical URLs, titles, descriptions, Open Graph + Twitter cards.
- JSON-LD structured data: `ProfessionalService` (with service offers and
  areaServed), `WebSite`, `WebPage`.
- `sitemap.xml` and `robots.txt` generated from code (`app/sitemap.ts`, `app/robots.ts`).
- Per-locale Open Graph image generated at build (`app/[lang]/opengraph-image.tsx`).
- Static generation (SSG) for both pages → fast TTFB and Core Web Vitals;
  zero client-side JS required for any content.

## Post-launch (manual steps)

1. Deploy (Vercel is the zero-config path) and point `vanguards.dev` at it.
2. Verify the domain in Google Search Console and submit `sitemap.xml`.
3. Set up a Google Business Profile (helps for "desarrollo de software Venezuela"
   style local queries) and link it to the site.
4. Keep publishing: the fastest ranking lever for a new domain is content —
   consider a `/blog` or case-study section fed by the Instagram "Field notes"
   pillar (P2 in the brand guide).
