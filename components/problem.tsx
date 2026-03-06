"use client";

import { CreditCard, BarChart3, Clock, UserX } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { Dictionary } from "@/lib/dictionaries";

const icons = [CreditCard, BarChart3, Clock, UserX];

export function Problem({ dict }: { dict: Dictionary }) {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding">
      <div className="mx-auto max-w-6xl">
        <h2 className="fade-up text-center text-3xl font-bold md:text-4xl themed-text">
          {dict.problem.title}
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.problem.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="fade-up glass spotlight p-6" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-dim">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold themed-text">{card.title}</h3>
                <p className="text-sm leading-relaxed themed-text-secondary">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
