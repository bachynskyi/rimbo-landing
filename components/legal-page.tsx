import { FogBackground } from "@/components/fog-background";
import { GrainOverlay } from "@/components/grain-overlay";

interface LegalSection {
  heading: string;
  content: string;
}

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
  backLabel: string;
  backHref: string;
}

export function LegalPage({ title, lastUpdated, sections, backLabel, backHref }: LegalPageProps) {
  return (
    <>
      <FogBackground />
      <GrainOverlay />
      <div className="section-padding min-h-screen">
        <div className="mx-auto max-w-3xl">
          <a
            href={backHref}
            className="inline-flex items-center gap-2 text-sm themed-text-secondary hover:themed-text transition-colors mb-10"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {backLabel}
          </a>

          <h1 className="text-3xl sm:text-4xl font-bold themed-text mb-3">{title}</h1>
          <p className="text-sm themed-text-muted mb-12">{lastUpdated}</p>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <section key={i} className="glass p-6 sm:p-8">
                {section.heading && (
                  <h2 className="text-lg font-semibold themed-text mb-4">{section.heading}</h2>
                )}
                <div className="themed-text-secondary text-sm leading-relaxed space-y-3">
                  {section.content.split("\n\n").map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
