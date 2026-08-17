"use client";

import Link from "next/link";
import {
  Wallet,
  Bell,
  QrCode,
  BarChart3,
  Monitor,
  MapPin,
  Users,
  Palette,
  Code,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { Dictionary } from "@/lib/dictionaries";

const featureIcons = [Wallet, Bell, QrCode, BarChart3, Monitor, MapPin, Users, Palette, Code];

const featureLinks: Record<number, string> = {
  0: "/loyalty-without-app",
  1: "/push-notifications",
  2: "/qr-loyalty",
  3: "/customer-analytics",
};

export function Features({ dict }: { dict: Dictionary }) {
  const ref = useScrollAnimation();
  const localePrefix = dict.locale === "en" ? "/en" : "";

  return (
    <section ref={ref} id="features" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <h2 className="fade-up text-center text-3xl font-bold tracking-tight md:text-5xl themed-text">
          {dict.features.title}
        </h2>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {dict.features.items.map((item, i) => {
            const Icon = featureIcons[i];
            const isWide = "wide" in item && item.wide;
            const href = featureLinks[i];
            return (
              <div
                key={i}
                className={`fade-up glass spotlight p-8 ${isWide ? "md:col-span-2 lg:col-span-2" : ""}`}
                style={{ transitionDelay: `${i * 60}ms` }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-dim">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold themed-text">
                  {href ? (
                    <Link href={`${localePrefix}${href}`} className="underline underline-offset-2 decoration-primary/40 hover:decoration-primary transition-colors">
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="text-sm leading-relaxed themed-text-secondary">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
