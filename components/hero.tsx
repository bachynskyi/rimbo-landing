"use client";

import { Wallet, Apple, QrCode, Smartphone, Monitor } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { Dictionary } from "@/lib/dictionaries";

const badgeIcons = [Wallet, Apple, QrCode, Smartphone, Monitor];

export function Hero({ dict }: { dict: Dictionary }) {
  const ref = useScrollAnimation();
  const badges = Object.values(dict.hero.badges);

  return (
    <section ref={ref} className="section-padding relative pt-32 md:pt-40">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="fade-up text-4xl font-bold leading-tight tracking-tight md:text-6xl themed-text">
          {dict.hero.headline}
        </h1>
        <p className="fade-up mx-auto mt-6 max-w-2xl text-lg themed-text-secondary md:text-xl">
          {dict.hero.subtitle}
        </p>
        <div className="fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="#pricing" className="btn-primary cursor-pointer px-8 py-3 text-base">
            {dict.hero.ctaPrimary}
          </a>
          <a href="#how-it-works" className="btn-glass cursor-pointer px-8 py-3 text-base">
            {dict.hero.ctaSecondary}
          </a>
        </div>
        <div className="fade-up mt-14 flex flex-wrap items-center justify-center gap-6">
          {badges.map((badge, i) => {
            const Icon = badgeIcons[i];
            return (
              <div
                key={badge}
                className="glass-sm flex items-center gap-2 px-4 py-2 text-sm themed-text-secondary"
              >
                <Icon className="h-4 w-4 text-primary" />
                {badge}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
