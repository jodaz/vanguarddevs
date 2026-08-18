import SectionHead from "@/components/SectionHead";
import type { Dictionary } from "@/lib/dictionaries";

/* "What we do": the packages. Split out of Process so the roadmap can sit
   elsewhere on the page. */
export default function Services({ dict }: { dict: Dictionary }) {
  return (
    <section id="services" aria-label={dict.nav.services}>
      <SectionHead heading={dict.services.heading} />
      <div className="next">
        <span className="mono">{dict.services.packagesIntro}</span>
        <p className="venezuela-note">
          {dict.services.venezuelaIntro}{" "}
          <a href="#contact" className="venezuela-cta">
            {dict.services.venezuelaCta}
          </a>
        </p>
      </div>
      <div className="packages">
        {dict.services.packages.map((pkg) => (
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
      <div className="sec-cta">
        <a className="btn" href="#contact">
          {dict.nav.cta}
        </a>
      </div>
    </section>
  );
}
