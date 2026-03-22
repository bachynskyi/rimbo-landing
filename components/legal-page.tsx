import { FogBackground } from "@/components/fog-background";
import { GrainOverlay } from "@/components/grain-overlay";
import { FloatingHeader } from "@/components/floating-header";
import { ContactModalProvider } from "@/contexts/contact-modal-context";
import type { Dictionary } from "@/lib/dictionaries";

function linkify(text: string) {
  const pattern = /(https?:\/\/[^\s,)]+|[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,})/g;
  const parts = text.split(pattern);
  return parts.map((part, i) => {
    if (part.match(/^https?:\/\//)) {
      return <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-primary-link underline underline-offset-2 hover:opacity-80 transition-opacity">{part}</a>;
    }
    if (part.match(/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/)) {
      return <a key={i} href={`mailto:${part}`} className="text-primary-link underline underline-offset-2 hover:opacity-80 transition-opacity">{part}</a>;
    }
    return part;
  });
}

interface LegalSection {
  heading: string;
  content: string;
}

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
  homeHref: string;
  homeLabel: string;
  langSwitch: string;
  langSwitchHref: string;
  dict: Dictionary;
}

export function LegalPage({ title, lastUpdated, sections, homeHref, homeLabel, langSwitch, langSwitchHref, dict }: LegalPageProps) {
  return (
    <ContactModalProvider dict={dict}>
      <FloatingHeader
        homeHref={homeHref}
        homeLabel={homeLabel}
        getStartedLabel={dict.header.getStarted}
        langSwitch={langSwitch}
        langSwitchHref={langSwitchHref}
      />
      <FogBackground />
      <GrainOverlay />
      <main className="section-padding min-h-screen pt-32 md:pt-24">
        <div className="mx-auto max-w-3xl">
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
                    <p key={j}>{linkify(paragraph)}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </ContactModalProvider>
  );
}
