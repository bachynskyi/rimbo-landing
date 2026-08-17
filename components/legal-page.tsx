import type { ReactNode } from "react";
import { FogBackground } from "@/components/fog-background";
import { GrainOverlay } from "@/components/grain-overlay";
import { FloatingHeader } from "@/components/floating-header";
import { ContactModalProvider } from "@/contexts/contact-modal-context";
import type { Dictionary } from "@/lib/dictionaries";

function linkify(text: string, keyPrefix = "") {
  const pattern = /(https?:\/\/[^\s,)]+|[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,})/g;
  const parts = text.split(pattern);
  return parts.map((part, i) => {
    if (part.match(/^https?:\/\//)) {
      return <a key={`${keyPrefix}u${i}`} href={part} target="_blank" rel="noopener noreferrer" className="text-primary-link underline underline-offset-2 hover:opacity-80 transition-opacity">{part}</a>;
    }
    if (part.match(/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/)) {
      return <a key={`${keyPrefix}m${i}`} href={`mailto:${part}`} className="text-primary-link underline underline-offset-2 hover:opacity-80 transition-opacity">{part}</a>;
    }
    return part;
  });
}

// Renders inline markdown links [text](/path) plus bare URLs and emails
function renderInline(text: string) {
  const md = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  const nodes: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  let k = 0;
  while ((match = md.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(...linkify(text.slice(last, match.index), `t${k++}-`));
    }
    const href = match[2];
    const external = /^https?:\/\//.test(href);
    nodes.push(
      <a
        key={`md${k++}`}
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="text-primary-link underline underline-offset-2 hover:opacity-80 transition-opacity"
      >
        {match[1]}
      </a>
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) {
    nodes.push(...linkify(text.slice(last), `t${k++}-`));
  }
  return nodes;
}

interface LegalSection {
  heading: string;
  content: string;
  image?: {
    src: string;
    alt: string;
    caption?: string;
    width: number;
    height: number;
  };
}

interface LegalPageProps {
  title: string;
  cover?: { src: string; alt: string };
  lastUpdated: string;
  sections: LegalSection[];
  homeHref: string;
  homeLabel: string;
  langSwitch: string;
  langSwitchHref: string;
  dict: Dictionary;
  hideDate?: boolean;
}

export function LegalPage({ title, cover, lastUpdated, sections, homeHref, homeLabel, langSwitch, langSwitchHref, dict, hideDate }: LegalPageProps) {
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
          <p className={`text-sm themed-text-muted mb-12${hideDate ? " sr-only" : ""}`}>{lastUpdated}</p>

          {cover && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={cover.src}
              alt={cover.alt}
              width={1200}
              height={630}
              className="w-full h-auto rounded-2xl border border-white/10 mb-12"
            />
          )}

          <div className="space-y-10">
            {sections.map((section, i) => (
              <section key={i} className="glass p-6 sm:p-8">
                {section.heading && (
                  <h2 className="text-lg font-semibold themed-text mb-4">{section.heading}</h2>
                )}
                <div className="themed-text-secondary text-sm leading-relaxed space-y-3">
                  {section.content.split("\n\n").map((paragraph, j) => (
                    <p key={j} className="whitespace-pre-line">{renderInline(paragraph)}</p>
                  ))}
                </div>
                {section.image && (
                  <figure className="mt-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={section.image.src}
                      alt={section.image.alt}
                      width={section.image.width}
                      height={section.image.height}
                      loading="lazy"
                      className="w-full h-auto rounded-lg border border-white/10"
                    />
                    {section.image.caption && (
                      <figcaption className="mt-2 text-xs themed-text-muted text-center">
                        {section.image.caption}
                      </figcaption>
                    )}
                  </figure>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
    </ContactModalProvider>
  );
}
