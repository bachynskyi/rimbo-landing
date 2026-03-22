"use client";

import { Wallet, Apple, QrCode, Smartphone, Monitor } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { RotatingPill } from "@/components/rotating-pill";
import { useContactModal } from "@/contexts/contact-modal-context";
import type { Dictionary } from "@/lib/dictionaries";

const badgeIcons = [Wallet, Apple, QrCode, Smartphone, Monitor];

export function Hero({ dict }: { dict: Dictionary }) {
  const ref = useScrollAnimation();
  const badges = Object.values(dict.hero.badges);
  const { openModal } = useContactModal();

  return (
    <section ref={ref} className="relative pt-36 pb-20 px-6 md:pt-48 md:pb-28">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="fade-up text-5xl font-bold leading-[1.2] tracking-tight md:text-7xl themed-text">
          {dict.hero.headlinePrefix}
          <RotatingPill words={dict.hero.rotatingWords} />
          {dict.hero.headlineSuffix}
        </h1>
        <p className="fade-up mx-auto mt-8 max-w-2xl text-lg leading-relaxed themed-text-secondary md:text-xl">
          {dict.hero.subtitle}
        </p>
        <div className="fade-up mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button onClick={() => openModal()} className="btn-primary cursor-pointer px-10 py-4 text-base">
            {dict.hero.ctaPrimary}
          </button>
          <a href="#how-it-works" className="btn-glass cursor-pointer px-10 py-4 text-base">
            {dict.hero.ctaSecondary}
          </a>
        </div>
        <div className="fade-up mt-14 mx-auto max-w-3xl overflow-hidden rounded-2xl shadow-2xl">
          <picture>
            <source
              type="image/webp"
              srcSet="/hero-glass-640.webp 640w, /hero-glass-1024.webp 1024w, /hero-glass-1440.webp 1440w"
              sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1440px"
            />
            <img
              src="/hero-glass-1024.webp"
              alt="Rimbo loyalty experience — customers scanning QR codes in a cafe"
              width={1200}
              height={675}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="w-full h-auto"
            />
          </picture>
        </div>
        <div className="fade-up mt-16 flex flex-wrap items-center justify-center gap-4">
          {badges.map((badge, i) => {
            const Icon = badgeIcons[i];
            return (
              <div
                key={badge}
                className="glass-sm flex items-center gap-2.5 px-5 py-2.5 text-sm themed-text-secondary"
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
