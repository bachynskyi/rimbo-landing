"use client";

import { Stamp, Coins, TrendingUp, Tag, Gift, Ticket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { Dictionary } from "@/lib/dictionaries";

const icons = [Stamp, Coins, TrendingUp, Tag, Gift, Ticket];

export function LoyaltyTypes({ dict }: { dict: Dictionary }) {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} id="loyalty-types" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <h2 className="fade-up text-center text-3xl font-bold tracking-tight md:text-5xl themed-text">
          {dict.loyaltyTypes.title}
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dict.loyaltyTypes.types.map((type, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="fade-up glass spotlight flex flex-col items-center p-8 text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-dim">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold themed-text">{type.title}</h3>
                <p className="text-sm leading-relaxed themed-text-secondary">
                  {type.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
