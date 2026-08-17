"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { Dictionary } from "@/lib/dictionaries";

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
        <div className="fade-up mt-10 flex flex-wrap justify-center gap-3">
          {dict.segments.items.map((item, i) => (
            <Link
              key={i}
              href={`${localePrefix}${item.href}`}
              className="glass cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium themed-text-secondary transition-colors hover:themed-text"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
