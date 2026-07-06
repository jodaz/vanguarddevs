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
      </div>
      <div className="packages">
        {dict.process.packages.map((pkg) => (
          <div className={pkg.featured ? "pkg featured" : "pkg"} key={pkg.title}>
            <span className="mark" aria-hidden="true" />
            <p>{pkg.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
