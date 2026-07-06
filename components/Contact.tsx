import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import { SectionGlitch } from "@/components/SectionHead";
import type { Dictionary } from "@/lib/dictionaries";
import {
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  WHATSAPP_URL,
} from "@/lib/site";

export default function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section id="contact" aria-label={dict.contact.heading} className="contact">
      <span className="mono">{dict.contact.secLabel}</span>
      <p className="display">
        <a className="big" href={WHATSAPP_URL} target="_blank" rel="noopener">
          <SectionGlitch>{dict.contact.cta}</SectionGlitch>{" "}
          <span className="mark" aria-hidden="true" />
        </a>
      </p>
      <div className="row">
        <a className="btn solid" href={WHATSAPP_URL} target="_blank" rel="noopener">
          <span className="mark" aria-hidden="true" />
          {dict.contact.cta}
        </a>
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
