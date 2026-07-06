import GlitchText from "@/components/reactbits/GlitchText/GlitchText";
import type { Dictionary } from "@/lib/dictionaries";

export default function Cases({ dict }: { dict: Dictionary }) {
  return (
    <section id="cases" aria-label={dict.nav.cases}>
      <div className="sec-head">
        <h2>
          <GlitchText
            speed={4}
            enableShadows={false}
            enableOnHover={false}
            className="sec-glitch"
          >
            {dict.cases.heading}
          </GlitchText>
        </h2>
        <span className="mono">{dict.cases.secLabel}</span>
      </div>
      <div className="services">
        {dict.cases.items.map((item, i) => (
          <article className="svc" key={item.name} tabIndex={0}>
            <div className="code mono">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <span>{item.tag}</span>
            </div>
            <h3>{item.name}</h3>
            <p>{item.body}</p>
            <a
              className="mono case-link"
              href={item.url}
              target="_blank"
              rel="noopener"
            >
              {new URL(item.url).hostname} ▶
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
