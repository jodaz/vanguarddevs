import SectionHead from "@/components/SectionHead";
import type { Dictionary } from "@/lib/dictionaries";

export default function Industries({ dict }: { dict: Dictionary }) {
  return (
    <section id="industries" aria-label={dict.nav.industries}>
      <SectionHead heading={dict.industries.heading} />
      {/* Same lead-in strip the roadmap uses before its packages grid. */}
      <div className="next">
        <span className="mono">{dict.industries.intro}</span>
      </div>
      <div className="services">
        {dict.industries.items.map((item) => (
          <article className="svc" key={item.name}>
            <h3>{item.name}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
