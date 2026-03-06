"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import type { Dictionary } from "@/lib/dictionaries";

export function Header({ dict }: { dict: Dictionary }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "glass py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
      style={{ boxShadow: scrolled ? "0 10px 15px -3px var(--shadow-color)" : "none" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href={dict.locale === "en" ? "/en" : "/"} className="text-xl font-bold tracking-tight text-primary">
          Rimbo
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#features" className="cursor-pointer text-sm themed-text-secondary transition-colors hover:themed-text">
            {dict.header.features}
          </a>
          <a href="#pricing" className="cursor-pointer text-sm themed-text-secondary transition-colors hover:themed-text">
            {dict.header.pricing}
          </a>
          <a href="#faq" className="cursor-pointer text-sm themed-text-secondary transition-colors hover:themed-text">
            {dict.header.faq}
          </a>
          <a
            href={dict.langSwitchHref}
            className="cursor-pointer flex items-center gap-1.5 text-sm themed-text-secondary transition-colors hover:themed-text"
          >
            <Globe className="h-4 w-4" />
            {dict.langSwitch}
          </a>
          <ThemeToggle />
          <a href="#pricing" className="btn-primary cursor-pointer text-sm">
            {dict.header.getStarted}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer themed-text"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="glass mx-4 mt-2 flex flex-col gap-4 p-6 md:hidden">
          <a href="#features" onClick={() => setMenuOpen(false)} className="cursor-pointer themed-text-secondary">
            {dict.header.features}
          </a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="cursor-pointer themed-text-secondary">
            {dict.header.pricing}
          </a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="cursor-pointer themed-text-secondary">
            {dict.header.faq}
          </a>
          <a href={dict.langSwitchHref} className="cursor-pointer flex items-center gap-1.5 themed-text-secondary">
            <Globe className="h-4 w-4" />
            {dict.langSwitch}
          </a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="btn-primary cursor-pointer text-center text-sm">
            {dict.header.getStarted}
          </a>
        </nav>
      )}
    </header>
  );
}
