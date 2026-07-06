import { ImageResponse } from "next/og";
import { getDictionary } from "@/lib/dictionaries";
import { locales, type Locale } from "@/lib/i18n";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  return [{ id: 0, size, contentType, alt: dict.meta.ogAlt }];
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ECEAF1",
          color: "#16121F",
          padding: 64,
          border: "16px solid #16121F",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 36,
            fontWeight: 800,
            letterSpacing: 2,
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: "22px solid transparent",
              borderBottom: "22px solid transparent",
              borderLeft: "36px solid #5D2DE2",
            }}
          />
          VANGUARDDEVS
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 58,
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: -1,
            textTransform: "uppercase",
          }}
        >
          <span>
            {dict.hero.headlineStart}{" "}
            <span style={{ color: "#5D2DE2" }}>{dict.hero.headlineAccent}</span>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 28,
            color: "#6F6A7C",
          }}
        >
          <span>vanguards.dev</span>
          <span>USA ▶ LATAM</span>
        </div>
      </div>
    ),
    size
  );
}
