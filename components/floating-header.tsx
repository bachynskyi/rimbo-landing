"use client";

import Image from "next/image";
import { Globe, Home } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useContactModal } from "@/contexts/contact-modal-context";

interface FloatingHeaderProps {
  homeHref: string;
  homeLabel: string;
  getStartedLabel: string;
  langSwitch: string;
  langSwitchHref: string;
}

export function FloatingHeader({ homeHref, homeLabel, getStartedLabel, langSwitch, langSwitchHref }: FloatingHeaderProps) {
  const { openModal } = useContactModal();

  return (
    <header className="fixed left-0 right-0 z-40 top-4 flex justify-center px-4">
      <div className="nav-pill flex w-full max-w-3xl items-center gap-1 px-2 py-1.5">
        <a href={homeHref} className="shrink-0 pl-2 mr-2">
          <Image
            src="/rimbo-logo.png"
            alt="Rimbo"
            width={80}
            height={24}
            className="object-contain dark:invert"
            style={{ height: 24 }}
            priority
          />
        </a>

        <a href={homeHref} className="nav-tab">
          <Home className="h-3.5 w-3.5" />
          {homeLabel}
        </a>

        <div className="flex-1" />

        <a href={langSwitchHref} className="nav-tab">
          <Globe className="h-3.5 w-3.5" />
          {langSwitch}
        </a>
        <ThemeToggle />
        <button
          onClick={() => openModal()}
          className="cursor-pointer ml-1 inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-[#0a1a1a] transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_20px_oklch(0.75_0.15_165/0.35)]"
        >
          {getStartedLabel}
        </button>
      </div>
    </header>
  );
}
