import Image from "next/image";
import SectionHead from "@/components/SectionHead";
import type { Dictionary } from "@/lib/dictionaries";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" aria-label={dict.about.secLabel}>
      <SectionHead heading={dict.about.heading} label={dict.about.secLabel} />
      <div className="about">
        <div className="photo">
          <Image
            src="/founder.jpeg"
            alt={dict.about.photoLabel}
            fill
            sizes="(max-width: 820px) 100vw, 380px"
            style={{ objectFit: "cover" }}
          />
          <div className="photo-overlay" aria-hidden="true" />
        </div>
        <div className="bio">
          <p>{dict.about.bio}</p>
        </div>
      </div>
    </section>
  );
}
