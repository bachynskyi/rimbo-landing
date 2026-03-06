import type { Dictionary } from "@/lib/dictionaries";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t py-14 px-6 themed-border" style={{ borderColor: "var(--border-glass)" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <a href={dict.locale === "en" ? "/en" : "/"} className="text-xl font-bold text-primary">
          Rimbo
        </a>
        <nav className="flex gap-8 text-sm">
          <a href="#features" className="cursor-pointer themed-text-secondary transition-colors hover:themed-text">
            {dict.footer.links.features}
          </a>
          <a href="#pricing" className="cursor-pointer themed-text-secondary transition-colors hover:themed-text">
            {dict.footer.links.pricing}
          </a>
          <a href="#faq" className="cursor-pointer themed-text-secondary transition-colors hover:themed-text">
            {dict.footer.links.faq}
          </a>
        </nav>
        <p className="text-sm themed-text-muted">
          &copy; {dict.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
