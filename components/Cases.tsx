import SectionHead from "@/components/SectionHead";
import type { Dictionary } from "@/lib/dictionaries";

export default function Cases({ dict }: { dict: Dictionary }) {
  return (
    <section id="cases" aria-label={dict.nav.cases}>
      <SectionHead heading={dict.cases.heading} />
      <div className="services">
        {dict.cases.items.map((item) => (
          <article className="svc" key={item.name}>
            <div className="code mono">
              <span>{item.tag}</span>
            </div>
            <h3>{item.name}</h3>
            <p>{item.body}</p>
            {item.testimonial && (
              <blockquote className="case-quote">
                {item.testimonial.quote}
                <cite>{item.testimonial.by}</cite>
              </blockquote>
            )}
            {item.url && (
              <a
                className="mono case-link"
                href={item.url}
                target="_blank"
                rel="noopener"
              >
                {new URL(item.url).hostname}{" "}
                <span aria-hidden="true">▶</span>
              </a>
            )}
          </article>
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
