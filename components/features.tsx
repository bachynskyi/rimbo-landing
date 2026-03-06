"use client";

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

export function Features({ dict }: { dict: Dictionary }) {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} id="features" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <h2 className="fade-up text-center text-3xl font-bold md:text-4xl themed-text">
          {dict.features.title}
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dict.features.items.map((item, i) => {
            const Icon = featureIcons[i];
            const isWide = "wide" in item && item.wide;
            return (
              <div
                key={i}
                className={`fade-up glass spotlight p-6 ${isWide ? "md:col-span-2" : ""}`}
                style={{ transitionDelay: `${i * 60}ms` }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                }}
              >
                <Icon className="mb-3 h-6 w-6 text-primary" />
                <h3 className="mb-1 font-semibold themed-text">{item.title}</h3>
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
