"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { Dictionary } from "@/lib/dictionaries";

export function FAQ({ dict }: { dict: Dictionary }) {
  const ref = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} id="faq" className="section-padding">
      <div className="mx-auto max-w-3xl">
        <h2 className="fade-up text-center text-3xl font-bold md:text-4xl themed-text">
          {dict.faq.title}
        </h2>
        <div className="mt-12 flex flex-col gap-3">
          {dict.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="fade-up glass overflow-hidden"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="cursor-pointer flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="pr-4 font-medium themed-text">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 themed-text-muted transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed themed-text-secondary">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
