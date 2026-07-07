import SectionHead from "@/components/SectionHead";
import type { Dictionary } from "@/lib/dictionaries";

export default function Process({ dict }: { dict: Dictionary }) {
  return (
    <section id="process" aria-label={dict.nav.process}>
      <SectionHead
        heading={dict.process.heading}
        label={dict.process.secLabel}
      />
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
        <p className="venezuela-note">
          {dict.process.venezuelaIntro}{" "}
          <a href="#contact" className="venezuela-cta">
            {dict.process.venezuelaCta}
          </a>
        </p>
      </div>
      <div className="packages">
        {dict.process.packages.map((pkg) => (
          <div className="pkg" key={pkg.title}>
            <span className="mark" aria-hidden="true" />
            <div>
              <h3>{pkg.title}</h3>
              <p className="mono price">{pkg.price}</p>
              <p>{pkg.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
