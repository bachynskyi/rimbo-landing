"use client";

import { MessageSquareText, Paintbrush, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { Dictionary } from "@/lib/dictionaries";

const stepIcons = [MessageSquareText, Paintbrush, Sparkles];

export function HowItWorks({ dict }: { dict: Dictionary }) {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} id="how-it-works" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <h2 className="fade-up text-center text-3xl font-bold tracking-tight md:text-5xl themed-text">
          {dict.howItWorks.title}
        </h2>
        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* Connecting line — desktop only */}
          <div
            className="absolute top-16 left-[16%] right-[16%] hidden h-px border-t-2 border-dashed md:block themed-border"
          />

          {dict.howItWorks.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <div
                key={i}
                className="fade-up relative z-10 flex flex-col items-center text-center"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary text-white">
                  <Icon className="h-9 w-9" style={{ color: "#0a1a1a" }} />
                </div>
                <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  {step.step}
                </div>
                <h3 className="mb-3 text-xl font-semibold themed-text">{step.title}</h3>
                <p className="max-w-xs text-sm leading-relaxed themed-text-secondary">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
