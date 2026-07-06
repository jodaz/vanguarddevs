import type { Dictionary } from "@/lib/dictionaries";

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer>
      <span className="mono">© 2026 VanguardDevs</span>
      <span className="mono">{dict.footer.tagline}</span>
    </footer>
  );
}
