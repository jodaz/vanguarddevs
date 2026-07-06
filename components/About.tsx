import SectionHead from "@/components/SectionHead";
import type { Dictionary } from "@/lib/dictionaries";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" aria-label={dict.nav.about}>
      <SectionHead heading={dict.about.heading} label={dict.about.secLabel} />
      <div className="about">
        {/* TODO [PLACEHOLDER]: replace with <Image> of Jesus O. */}
        <div className="photo-ph">
          <span className="mono">{dict.about.photoLabel}</span>
        </div>
        <div className="bio">
          <p>{dict.about.bio}</p>
        </div>
      </div>
    </section>
  );
}
