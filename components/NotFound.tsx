import BlurText from "@/components/reactbits/BlurText/BlurText";
import DotField from "@/components/reactbits/DotField/DotField";
import { getDictionary } from "@/lib/dictionaries";

/* DotField canvas colors, relative to the brand tokens in globals.css.
   Same trio Hero/Contact use against the shared dark (--ink) surface:
   - DOT_GRADIENT_FROM: --signal (Voltage Violet), the dot color itself.
   - DOT_GRADIENT_TO: muted slate-lavender easing the gradient toward
     --steel (#6F6A7C).
   - DOT_GLOW: kept slightly lighter than --ink (#16121F) so the cursor
     glow recedes into the dark surface instead of flaring against it. */
const DOT_GRADIENT_FROM = "#5D2DE2";
const DOT_GRADIENT_TO = "#8B77AC";
const DOT_GLOW = "#241E33";

/* This is the shared 404 body for both not-found entry points
   (app/[lang]/not-found.tsx and the root app/not-found.tsx). Next.js
   doesn't pass route params to not-found.tsx, even nested under a
   dynamic segment, so this component can't know which locale it's
   rendering under — it renders both ES and EN copy directly instead of
   accepting a dict prop. Spanish first, per the site's "Spanish leads"
   rule. */
export default function NotFound() {
  const es = getDictionary("es");
  const en = getDictionary("en");

  return (
    <section className="not-found" aria-label="404">
      <div className="not-found-bg" aria-hidden="true">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle
          waveAmplitude={18}
          cursorRadius={500}
          cursorForce={0.1}
          gradientFrom={DOT_GRADIENT_FROM}
          gradientTo={DOT_GRADIENT_TO}
          glowColor={DOT_GLOW}
        />
      </div>
      <div className="not-found-inner">
        <span className="mono not-found-badge">{es.notFound.badge}</span>
        <p className="display not-found-headline">
          <BlurText text="404" animateBy="letters" />
        </p>
        <div className="not-found-trace">
          <div className="not-found-lang">
            <p className="mono">{es.notFound.stackLine1}</p>
            <p className="mono">{es.notFound.stackLine2}</p>
          </div>
          <div className="not-found-lang">
            <span className="mono not-found-badge">{en.notFound.badge}</span>
            <p className="mono">{en.notFound.stackLine1}</p>
            <p className="mono">{en.notFound.stackLine2}</p>
          </div>
        </div>
        <a className="btn solid" href="/">
          <span className="mark" aria-hidden="true" />
          {es.notFound.cta}
        </a>
      </div>
    </section>
  );
}
