import type { Dictionary } from "@/lib/dictionaries";
import { CALENDLY_URL } from "@/lib/site";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="hero" aria-label="Intro">
      <div className="coords mono">
        <span>{dict.hero.kicker}</span>
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
            <a className="btn solid" href={CALENDLY_URL}>
              <span
                className="mark"
                style={{ background: "currentColor" }}
                aria-hidden="true"
              />
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
