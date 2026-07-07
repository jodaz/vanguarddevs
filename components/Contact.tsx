import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import DotField from "@/components/reactbits/DotField/DotField";
import { SectionGlitch } from "@/components/SectionHead";
import type { Dictionary } from "@/lib/dictionaries";
import {
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  WHATSAPP_URL,
} from "@/lib/site";

/* DotField canvas colors, relative to the brand tokens in globals.css:
   - DOT_GRADIENT_FROM: --signal (Voltage Violet), strong enough for dot
     legibility on the light Fog surface.
   - DOT_GRADIENT_TO: muted slate-lavender easing the gradient toward
     --steel (#6F6A7C).
   - DOT_GLOW: intentionally kept slightly darker than --paper (#ECEAF1)
     so the cursor glow recedes into the surface instead of matching it. */
const DOT_GRADIENT_FROM = "#5D2DE2";
const DOT_GRADIENT_TO = "#8B77AC";
const DOT_GLOW = "#E0DCE8";

export default function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section id="contact" aria-label={dict.contact.heading} className="contact">
      <div className="contact-bg" aria-hidden="true">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom={DOT_GRADIENT_FROM}
          gradientTo={DOT_GRADIENT_TO}
          glowColor={DOT_GLOW}
        />
      </div>
      <span className="mono">{dict.contact.secLabel}</span>
      <p className="display">
        <a className="big" href={WHATSAPP_URL} target="_blank" rel="noopener">
          <SectionGlitch>{dict.contact.cta}</SectionGlitch>{" "}
          <span className="mark" aria-hidden="true" />
        </a>
      </p>
      <div className="row">
        <a className="btn" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        <a
          className="btn icon"
          href={LINKEDIN_URL}
          target="_blank"
          rel="me noopener noreferrer"
          aria-label={dict.contact.socialLinkedin}
        >
          <LinkedInIcon aria-hidden="true" />
        </a>
        <a
          className="btn icon"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="me noopener noreferrer"
          aria-label={dict.contact.socialInstagram}
        >
          <InstagramIcon aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
