"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useContactModal } from "@/contexts/contact-modal-context";
import type { Dictionary } from "@/lib/dictionaries";

function renderFeature(text: string) {
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(
      <a
        key={key++}
        href={match[2]}
        className="text-primary-link underline underline-offset-2 hover:opacity-80 transition-opacity"
      >
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes.length > 0 ? nodes : text;
}

export function Pricing({
  dict,
  locale = "uk",
}: {
  dict: Dictionary;
  locale?: string;
}) {
  const ref = useScrollAnimation();
  const [annual, setAnnual] = useState(true);
  const { openModal } = useContactModal();

  // Explicit, or the grouping separator comes from whatever locale the browser
  // happens to be in — so the Ukrainian page could render "₴1,399" instead of
  // "₴1 399", and the server and the client could disagree and trip hydration.
  const priceLocale = locale === "en" ? "en-US" : "uk-UA";

  return (
    <section ref={ref} id="pricing" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <h2 className="fade-up text-center text-3xl font-bold tracking-tight md:text-5xl themed-text">
          {dict.pricing.title}
        </h2>
        <p className="fade-up mt-4 text-center text-lg themed-text-secondary">
          {dict.pricing.subtitle}
        </p>

        {/* Toggle */}
        <div className="fade-up mt-10 flex items-center justify-center gap-4">
          <span className={`text-sm font-medium ${!annual ? "themed-text" : "themed-text-muted"}`}>
            {dict.pricing.monthly}
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            aria-label={annual ? dict.pricing.monthly : dict.pricing.annual}
            className={`cursor-pointer relative h-8 w-14 rounded-full transition-colors ${
              annual ? "bg-primary" : ""
            }`}
            style={{ background: annual ? undefined : "var(--border-glass)" }}
          >
            <div
              className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow-sm transition-transform ${
                annual ? "translate-x-7" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${annual ? "themed-text" : "themed-text-muted"}`}>
            {dict.pricing.annual}
          </span>
          {annual && (
            <span className="rounded-full bg-secondary-dim px-3 py-1 text-xs font-semibold text-secondary">
              {dict.pricing.annualSave}
            </span>
          )}
        </div>

        {/* Tiers */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dict.pricing.tiers.map((tier, i) => {
            const isPopular = "popular" in tier && tier.popular;
            const displayPrice = annual
              ? (tier as { annualPrice: number }).annualPrice
              : (tier as { monthlyPrice: number }).monthlyPrice;

            return (
              <div
                key={tier.name}
                className={`fade-up glass relative flex flex-col p-8 ${
                  isPopular ? "ring-2 ring-primary" : "spotlight"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                }}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-xs font-semibold" style={{ color: "#0a1a1a" }}>
                    {dict.pricing.popular}
                  </div>
                )}

                <h3 className="text-lg font-semibold themed-text">{tier.name}</h3>

                <div className="mt-5 mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-primary">
                      ₴{displayPrice.toLocaleString(priceLocale)}
                    </span>
                    <span className="text-sm themed-text-muted">
                      {dict.pricing.perMonth}
                    </span>
                  </div>
                </div>

                <ul className="mb-8 flex flex-col gap-3 text-sm">
                  {i > 0 && (
                    <li className="text-xs themed-text-muted mb-1">
                      {dict.pricing.includesPrefix} {dict.pricing.tiers[i - 1].name}{dict.pricing.includesSuffix}
                    </li>
                  )}
                  {tier.features.map((feature, fi) => (
                    <li key={fi}>
                      <div className="flex items-start gap-2.5 themed-text-secondary">
                        <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                        <span>{renderFeature(feature)}</span>
                      </div>
                      {fi === 0 && "extraLocation" in tier && (
                        <div className="ml-[26px] mt-1 flex flex-col text-xs themed-text-muted">
                          <span>{(tier as { extraLocation?: string }).extraLocation}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openModal(tier.name)}
                  className={`cursor-pointer mt-auto text-center text-sm ${
                    isPopular ? "btn-primary" : "btn-glass"
                  }`}
                >
                  {dict.pricing.choosePlan}
                </button>
              </div>
            );
          })}
        </div>

        {/* Notes under the pricing grid */}
        <div className="fade-up mt-10 flex flex-col gap-3 text-center text-sm themed-text-muted">
          {dict.pricing.enterpriseNotes.map((note, ni) => (
            <p key={ni}>
              {note.split("{link}").map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <a href="mailto:support@rimbo.id" className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity">
                      {dict.pricing.enterpriseNoteLink}
                    </a>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
