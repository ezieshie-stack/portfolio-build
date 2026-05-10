import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer
      className="px-12 py-12 text-center text-[13px] text-[color:var(--text-dim)] border-t"
      style={{ borderColor: "var(--glass-border)" }}
    >
      <p>{site.footer.text}</p>
    </footer>
  );
}
