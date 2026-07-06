import DotField from "@/components/reactbits/DotField/DotField";
import type { Dictionary } from "@/lib/dictionaries";
import { WHATSAPP_URL } from "@/lib/site";

/* DotField canvas colors, relative to the brand tokens in globals.css:
   - DOT_GRADIENT_FROM: --signal (Voltage Violet), strong enough for dot
     legibility on the light Fog surface.
   - DOT_GRADIENT_TO: muted slate-lavender easing the gradient toward
     --steel (#6F6A7C).
   - DOT_GLOW: intentionally kept slightly darker than --paper (#ECEAF1)
     so the cursor glow recedes into the surface instead of matching it. */
const DOT_GRADIENT_FROM = "#5D2DE2";
const DOT_GRADIENT_TO = "#8B77AC";
const DOT_GLOW = "#E0DCE8";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="hero" aria-label={dict.hero.ariaLabel}>
      <div className="hero-bg" aria-hidden="true">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom={DOT_GRADIENT_FROM}
          gradientTo={DOT_GRADIENT_TO}
          glowColor={DOT_GLOW}
        />
      </div>
      <div className="coords mono">
        <span>{dict.hero.region}</span>
      </div>
      <h1 className="display">
        {dict.hero.headlineStart}{" "}
        <span className="line-word">{dict.hero.headlineAccent}</span>{" "}
        <span className="mark" aria-hidden="true" />
      </h1>
      <div className="hero-foot">
        <div>
          <p>{dict.hero.sub}</p>
          <div className="hero-ctas">
            <a className="btn solid" href={WHATSAPP_URL} target="_blank" rel="noopener">
              <span className="mark" aria-hidden="true" />
              {dict.hero.ctaPrimary}
            </a>
            <a className="btn" href="#cases">
              {dict.hero.ctaSecondary}
            </a>
          </div>
        </div>
        <span className="mono">{dict.hero.scroll}</span>
      </div>
    </section>
  );
}
