import BlurText from "@/components/reactbits/BlurText/BlurText";

/* Single home for the section-heading reveal configuration.
   Every animated heading on the site must render through this module
   so the prop tuple lives in exactly one place. y/blur travel is kept
   small (vs. the vendored defaults) since these headings sit in tight
   highlight boxes, not open hero whitespace. */
const blurProps = {
  animateBy: "words" as const,
  direction: "top" as const,
  delay: 60,
  stepDuration: 0.35,
  animationFrom: { filter: "blur(6px)", opacity: 0, y: -12 },
  animationTo: [
    { filter: "blur(3px)", opacity: 0.5, y: 3 },
    { filter: "blur(0px)", opacity: 1, y: 0 },
  ],
  className: "sec-blur",
};

/* For headings that don't fit the .sec-head layout (e.g. the Contact CTA). */
export function SectionBlur({ children }: { children: string }) {
  return <BlurText {...blurProps} text={children} />;
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
        <SectionBlur>{heading}</SectionBlur>
      </h2>
      <span className="mono">{label}</span>
    </div>
  );
}
