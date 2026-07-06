import GlitchText from "@/components/reactbits/GlitchText/GlitchText";

/* Single home for the section-heading glitch configuration.
   Every glitched heading on the site must render through this module
   so the prop tuple lives in exactly one place. */
const glitchProps = {
  speed: 4,
  enableShadows: false,
  enableOnHover: false,
  className: "sec-glitch",
} as const;

/* For headings that don't fit the .sec-head layout (e.g. the Contact CTA). */
export function SectionGlitch({ children }: { children: string }) {
  return <GlitchText {...glitchProps}>{children}</GlitchText>;
}

export default function SectionHead({
  heading,
  label,
}: {
  heading: string;
  label: string;
}) {
  return (
    <div className="sec-head">
      <h2>
        <SectionGlitch>{heading}</SectionGlitch>
      </h2>
      <span className="mono">{label}</span>
    </div>
  );
}
