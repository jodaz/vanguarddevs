import SectionHead from "@/components/SectionHead";
import type { Dictionary } from "@/lib/dictionaries";

export default function Process({ dict }: { dict: Dictionary }) {
  return (
    <section id="process" aria-label={dict.nav.process}>
      <SectionHead heading={dict.process.heading} />
      <div className="steps">
        {dict.process.steps.map((step) => (
          <div className="step" key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
