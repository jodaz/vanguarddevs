import GlitchText from "@/components/reactbits/GlitchText/GlitchText";
import type { Dictionary } from "@/lib/dictionaries";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" aria-label={dict.nav.about}>
      <div className="sec-head">
        <h2>
          <GlitchText
            speed={4}
            enableShadows={false}
            enableOnHover={false}
            className="sec-glitch"
          >
            {dict.about.heading}
          </GlitchText>
        </h2>
        <span className="mono">{dict.about.secLabel}</span>
      </div>
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
