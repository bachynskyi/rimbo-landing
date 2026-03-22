"use client";

import { useState } from "react";
import Image from "next/image";
import { Globe, Home, Menu, X } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Desktop nav */}
        <a href={homeHref} className="nav-tab hidden md:inline-flex">
          <Home className="h-3.5 w-3.5" />
          {homeLabel}
        </a>

        <div className="flex-1" />

        <div className="hidden md:flex items-center gap-1">
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

        {/* Mobile controls */}
        <div className="ml-auto flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-tab !px-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="nav-pill absolute top-full mt-2 mx-4 w-[calc(100%-2rem)] max-w-3xl flex flex-col gap-1 p-2 md:hidden !rounded-2xl !bg-[rgba(255,255,255,0.96)] dark:!bg-[rgba(10,26,26,0.96)]">
          <a href={homeHref} onClick={() => setMenuOpen(false)} className="nav-tab justify-center">
            <Home className="h-3.5 w-3.5" />
            {homeLabel}
          </a>
          <a href={langSwitchHref} onClick={() => setMenuOpen(false)} className="nav-tab justify-center">
            <Globe className="h-3.5 w-3.5" />
            {langSwitch}
          </a>
          <button
            onClick={() => { setMenuOpen(false); openModal(); }}
            className="mt-1 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-[#0a1a1a] transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_20px_oklch(0.75_0.15_165/0.35)]"
          >
            {getStartedLabel}
          </button>
        </nav>
      )}
    </header>
  );
}
