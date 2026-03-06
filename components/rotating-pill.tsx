"use client";

import { useState, useEffect, useCallback } from "react";
import { Stamp, Gift, Percent, Ticket } from "lucide-react";

const WORD_CONFIG = [
  { icon: Stamp, colorClass: "rotating-pill--green" },
  { icon: Gift, colorClass: "rotating-pill--yellow" },
  { icon: Percent, colorClass: "rotating-pill--blue" },
  { icon: Ticket, colorClass: "rotating-pill--coral" },
];

const CHAR_STAGGER = 20;
const ENTER_BASE = 400;
const VISIBLE_DURATION = 2200;
const EXIT_DURATION = 300;

type Phase = "entering" | "visible" | "exiting";

export function RotatingPill({ words }: { words: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("entering");

  const currentWord = words[activeIndex];
  const config = WORD_CONFIG[activeIndex % WORD_CONFIG.length];
  const Icon = config.icon;
  const chars = currentWord.split("");
  const enterDuration = ENTER_BASE + chars.length * CHAR_STAGGER;

  const advance = useCallback(() => {
    setPhase("exiting");
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % words.length);
      setPhase("entering");
    }, EXIT_DURATION);
  }, [words.length]);

  useEffect(() => {
    if (phase === "entering") {
      const t = setTimeout(() => setPhase("visible"), enterDuration);
      return () => clearTimeout(t);
    }
    if (phase === "visible") {
      const t = setTimeout(advance, VISIBLE_DURATION);
      return () => clearTimeout(t);
    }
  }, [phase, enterDuration, advance]);

  return (
    <span
      className={`rotating-pill ${config.colorClass}`}
      aria-live="polite"
      aria-label={currentWord}
    >
      <Icon className="rotating-pill__icon" aria-hidden="true" />
      <span className="rotating-pill__text" aria-hidden="true">
        {chars.map((char, i) => (
          <span
            key={`${activeIndex}-${i}`}
            className={
              phase === "entering"
                ? "rotating-pill__char--entering"
                : phase === "exiting"
                  ? "rotating-pill__char--exiting"
                  : ""
            }
            style={
              phase === "entering"
                ? { animationDelay: `${i * CHAR_STAGGER}ms` }
                : undefined
            }
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </span>
  );
}
