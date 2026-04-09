"use client";

import Link from "next/link";
import { Smartphone, BarChart3, Zap, BellRing } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { Dictionary } from "@/lib/dictionaries";

const icons = [Smartphone, BarChart3, Zap, BellRing];

const cardLinks: Record<number, string> = {
  0: "/digital-loyalty-cards",
  1: "/customer-analytics",
  2: "/loyalty-automation",
};

export function Problem({ dict }: { dict: Dictionary }) {
  const ref = useScrollAnimation();
  const localePrefix = dict.locale === "en" ? "/en" : "";

  return (
    <section ref={ref} className="section-padding">
      <div className="mx-auto max-w-6xl">
        <h2 className="fade-up text-center text-3xl font-bold tracking-tight md:text-5xl themed-text">
          {dict.problem.title}
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.problem.cards.map((card, i) => {
            const Icon = icons[i];
            const href = cardLinks[i];
            return (
              <div
                key={i}
                className="fade-up glass spotlight flex flex-col items-center p-8 text-center"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-dim">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-semibold themed-text">
                  {href ? (
                    <Link href={`${localePrefix}${href}`} className="underline underline-offset-2 decoration-primary/40 hover:decoration-primary transition-colors">
                      {card.title}
                    </Link>
                  ) : (
                    card.title
                  )}
                </h3>
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
