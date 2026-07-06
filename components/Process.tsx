import GlitchText from "@/components/reactbits/GlitchText/GlitchText";
import type { Dictionary } from "@/lib/dictionaries";

export default function Process({ dict }: { dict: Dictionary }) {
  return (
    <section id="process" aria-label={dict.nav.process}>
      <div className="sec-head">
        <h2>
          <GlitchText
            speed={4}
            enableShadows={false}
            enableOnHover={false}
            className="sec-glitch"
          >
            {dict.process.heading}
          </GlitchText>
        </h2>
        <span className="mono">{dict.process.secLabel}</span>
      </div>
      <div className="steps">
        {dict.process.steps.map((step) => (
          <div className="step" key={step.num}>
            <div className="num">{step.num}</div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        ))}
      </div>
      <div className="next">
        <span className="mono">{dict.process.packagesIntro}</span>
      </div>
      <div className="packages">
        {dict.process.packages.map((pkg, i) => (
          <div className={pkg.featured ? "pkg featured" : "pkg"} key={i}>
            <span className="mark" aria-hidden="true" />
            <p>{pkg.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
