"use client";

import Link from "next/link";
import {
  Coffee,
  Croissant,
  UtensilsCrossed,
  Scissors,
  Sparkles,
  Dumbbell,
  PawPrint,
  Car,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { Dictionary } from "@/lib/dictionaries";

const segmentIcons = [
  Coffee,
  Croissant,
  UtensilsCrossed,
  Scissors,
  Sparkles,
  Dumbbell,
  PawPrint,
  Car,
];

export function Segments({ dict }: { dict: Dictionary }) {
  const ref = useScrollAnimation();
  const localePrefix = dict.locale === "en" ? "/en" : "";

  return (
    <section ref={ref} id="segments" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <h2 className="fade-up text-center text-3xl font-bold tracking-tight md:text-5xl themed-text">
          {dict.segments.title}
        </h2>
        <p className="fade-up mt-4 text-center text-lg themed-text-secondary">
          {dict.segments.subtitle}
        </p>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dict.segments.items.map((item, i) => {
            const Icon = segmentIcons[i];
            return (
              <Link
                key={item.href}
                href={`${localePrefix}${item.href}`}
                className="fade-up glass spotlight group flex flex-col p-6 transition-transform hover:-translate-y-0.5"
                style={{ transitionDelay: `${i * 60}ms` }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-dim">
                  {Icon && <Icon className="h-5 w-5 text-primary" />}
                </div>
                <h3 className="text-base font-semibold themed-text group-hover:text-primary transition-colors">
                  {item.label}
                </h3>
                {"hint" in item && item.hint && (
                  <p className="mt-1.5 text-sm leading-relaxed themed-text-secondary">
                    {item.hint}
                  </p>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
