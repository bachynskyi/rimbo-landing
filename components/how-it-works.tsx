"use client";

import { MessageSquareText, Paintbrush, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { Dictionary } from "@/lib/dictionaries";

const stepIcons = [MessageSquareText, Paintbrush, Sparkles];

export function HowItWorks({ dict }: { dict: Dictionary }) {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} id="how-it-works" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <h2 className="fade-up text-center text-3xl font-bold md:text-4xl themed-text">
          {dict.howItWorks.title}
        </h2>
        <div className="relative mt-16 flex flex-col items-center gap-12 md:flex-row md:gap-8">
          {/* Connecting line */}
          <div
            className="absolute top-1/2 left-8 right-8 hidden h-px border-t-2 border-dashed md:block themed-border"
          />

          {dict.howItWorks.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <div
                key={i}
                className="fade-up relative z-10 flex flex-1 flex-col items-center text-center"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white dark:text-bg-deep">
                  <Icon className="h-7 w-7" style={{ color: "#0a1a1a" }} />
                </div>
                <div className="mb-1 text-sm font-medium text-primary">
                  {step.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold themed-text">{step.title}</h3>
                <p className="text-sm themed-text-secondary">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
