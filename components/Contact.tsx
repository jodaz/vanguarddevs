import type { Dictionary } from "@/lib/dictionaries";
import { CALENDLY_URL, CONTACT_EMAIL, LINKEDIN_URL } from "@/lib/site";

export default function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section id="contact" aria-label={dict.contact.heading} className="contact">
      <span className="mono" style={{ color: "var(--steel)" }}>
        {dict.contact.secLabel}
      </span>
      <p className="display">
        <a className="big" href={CALENDLY_URL}>
          {dict.contact.cta} <span className="mark" aria-hidden="true" />
        </a>
      </p>
      <div className="row">
        <a className="btn solid" href={CALENDLY_URL}>
          <span
            className="mark"
            style={{ background: "currentColor" }}
            aria-hidden="true"
          />
          {dict.contact.cta}
        </a>
        <a className="btn" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        <a className="btn" href={LINKEDIN_URL} rel="me noopener">
          {dict.contact.linkedinLabel}
        </a>
      </div>
    </section>
  );
}
