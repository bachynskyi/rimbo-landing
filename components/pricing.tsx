"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { Dictionary } from "@/lib/dictionaries";

const planLimits = [
  { cards: 3, locations: 1, customers: 100, staff: "1" },
  { cards: 5, locations: 2, customers: 500, staff: "3" },
  { cards: 20, locations: 4, customers: "1,000", staff: "5" },
  { cards: 20, locations: 4, customers: "1,000", staff: "5" },
];

export function Pricing({ dict }: { dict: Dictionary }) {
  const ref = useScrollAnimation();
  const [annual, setAnnual] = useState(true);

  return (
    <section ref={ref} id="pricing" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <h2 className="fade-up text-center text-3xl font-bold md:text-4xl themed-text">
          {dict.pricing.title}
        </h2>
        <p className="fade-up mt-4 text-center themed-text-secondary">
          {dict.pricing.subtitle}
        </p>

        {/* Toggle */}
        <div className="fade-up mt-8 flex items-center justify-center gap-4">
          <span className={`text-sm ${!annual ? "themed-text" : "themed-text-muted"}`}>
            {dict.pricing.monthly}
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`cursor-pointer relative h-7 w-12 rounded-full transition-colors ${
              annual ? "bg-primary" : ""
            }`}
            style={{ background: annual ? undefined : "var(--border-glass)" }}
          >
            <div
              className={`absolute top-0.5 h-6 w-6 rounded-full bg-white transition-transform ${
                annual ? "translate-x-5.5" : "translate-x-0.5"
              }`}
            />
          </button>
          <span className={`text-sm ${annual ? "themed-text" : "themed-text-muted"}`}>
            {dict.pricing.annual}
          </span>
          {annual && (
            <span className="rounded-full bg-secondary-dim px-3 py-1 text-xs font-medium text-secondary">
              {dict.pricing.annualSave}
            </span>
          )}
        </div>

        {/* Tiers */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {dict.pricing.tiers.map((tier, i) => {
            const limits = planLimits[i];
            const isPopular = "popular" in tier && tier.popular;
            const displayPrice = annual
              ? (tier as { annualPrice: number }).annualPrice
              : (tier as { monthlyPrice: number }).monthlyPrice;

            return (
              <div
                key={tier.name}
                className={`fade-up glass relative flex flex-col p-6 ${
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

                <div className="mt-4 mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-primary">
                      ₴{displayPrice.toLocaleString()}
                    </span>
                    <span className="text-sm themed-text-muted">
                      {dict.pricing.perMonth}
                    </span>
                  </div>
                </div>

                <ul className="mb-8 flex flex-col gap-3 text-sm">
                  <PricingRow
                    label={dict.pricing.cards}
                    value={String(limits.cards)}
                  />
                  <PricingRow
                    label={dict.pricing.locations}
                    value={String(limits.locations)}
                  />
                  <PricingRow
                    label={dict.pricing.customers}
                    value={String(limits.customers)}
                  />
                  <PricingRow
                    label={dict.pricing.staff}
                    value={
                      i >= 2
                        ? `${limits.staff} (${dict.pricing.extraStaff})`
                        : limits.staff
                    }
                  />
                </ul>

                <a
                  href="#"
                  className={`cursor-pointer mt-auto text-center text-sm ${
                    isPopular ? "btn-primary" : "btn-glass"
                  }`}
                >
                  {dict.pricing.choosePlan}
                </a>
              </div>
            );
          })}
        </div>

        {/* Enterprise note */}
        <p className="fade-up mt-8 text-center text-sm themed-text-muted">
          {dict.pricing.enterpriseNote}
        </p>
      </div>
    </section>
  );
}

function PricingRow({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-center gap-2 themed-text-secondary">
      <Check className="h-4 w-4 shrink-0 text-primary" />
      <span>
        {value} {label}
      </span>
    </li>
  );
}
